#!/usr/bin/env python3
"""Compose private English LinkedIn images from the built portfolio demos.

Run after npm run build, then render the temporary dist/__linkedin-*.html
pages using a local server and Chromium. This exports original portfolio UI,
not screenshots or source from the private Money Tracker application.
"""
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / 'inputs/private/linkedin-money-tracker-images'
EXPORT_NAMES = ('01-dashboard', '02-bot', '03-architecture', '04-langgraph')
if '--clean' in sys.argv:
    for name in EXPORT_NAMES:
        (ROOT / f'dist/__linkedin-{name}.html').unlink(missing_ok=True)
    print('Removed temporary export pages from dist.')
    sys.exit(0)
VOID_TAGS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'}

@dataclass
class Element:
    tag: str
    attributes: dict
    start: str
    children: list = field(default_factory=list)

    @property
    def classes(self):
        return (self.attributes.get('class') or '').split()

    def render(self, omitted=()):
        if any(name in self.classes for name in omitted):
            return ''
        inner = ''.join(child.render(omitted) if isinstance(child, Element) else child for child in self.children)
        return self.start + inner + ('' if self.tag in VOID_TAGS else f'</{self.tag}>')

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=False)
        self.root = Element('root', {}, '')
        self.stack = [self.root]
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        node = Element(tag, dict(attributes), self.get_starttag_text())
        self.stack[-1].children.append(node)
        if tag not in VOID_TAGS:
            self.stack.append(node)

    def handle_startendtag(self, tag, attributes):
        self.handle_starttag(tag, attributes)
        if tag not in VOID_TAGS:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        if self.stack[-1].tag == tag:
            self.stack.pop()

    def handle_data(self, data):
        self.stack[-1].children.append(data)

    def handle_entityref(self, name):
        self.handle_data(f'&{name};')

    def handle_charref(self, name):
        self.handle_data(f'&#{name};')

    def find(self, classname):
        def walk(node):
            if classname in node.classes:
                yield node
            for child in node.children:
                if isinstance(child, Element):
                    yield from walk(child)
        return list(walk(self.root))

page = (ROOT / 'dist/en/projects/money-tracker/index.html').read_text()
document = Document(page)
styles = ''.join(re.findall(r'<link[^>]*href="[^"]+\.css"[^>]*>', page))
DESTINATION.mkdir(parents=True, exist_ok=True)

COMMON = '''
html,body{margin:0;width:1200px;height:1500px;background:#edf3f7}
.linkedin-export{padding:54px 56px 42px;max-width:none;height:1500px;display:flex;flex-direction:column;box-sizing:border-box}
.export-signature{font-size:24px;font-weight:600;color:#2759b5;margin:0 0 20px}
.export-title{font-size:55px;font-weight:600;line-height:1.08;letter-spacing:-2px;margin:0 0 28px;padding-bottom:26px;border-bottom:3px solid #173244}
.export-content{display:grid;gap:24px}
.export-footer{margin-top:auto;padding-top:22px;border-top:1px solid #b3cbd8;font-size:22px;line-height:1.45}
.export-footer p{margin:0 0 14px}.export-footer small{font-size:17px;color:#2759b5;font-weight:600;display:block}
.mt-dashboard-top{padding:20px 28px;font-size:18px}.mt-dashboard-top strong{font-size:25px}.mt-dashboard-top>span{font-size:17px}
.mt-dashboard-body{padding:28px 30px}.mt-dashboard h4{font-size:35px}.mt-dashboard h5{font-size:24px}.mt-dashboard-note{font-size:18px}
.mt-metrics{gap:18px;margin:24px 0}.mt-metrics>div{padding:17px 20px}.mt-metrics dt{font-size:19px}.mt-metrics dd{font-size:42px}
.mt-budget-label{font-size:20px}.mt-budget-label>span{font-size:18px}.mt-budget-bars{gap:18px}.mt-budget-track{height:18px}
.mt-transaction-allocations{margin-top:22px;gap:38px}.mt-transaction-allocations p{font-size:20px;padding:10px 0}.mt-transaction-allocations .mt-reconciled{font-size:17px}
.mt-transaction-heading>strong{font-size:38px}.mt-dashboard-controls{display:none}
.mt-chat{max-width:none}.mt-chat-header{font-size:26px;padding:22px 30px}.mt-chat-messages{padding:26px 30px;gap:24px}.mt-chat-user,.mt-chat-bot{font-size:23px;line-height:1.5;max-width:90%;padding:22px 26px}.mt-chat-messages span{font-size:16px}.mt-chat-controls span{font-size:19px}.mt-chat-controls{margin-top:17px}
.mt-allocation{padding:22px 26px}.mt-allocation figcaption{font-size:17px;margin:0 0 15px}.mt-allocation-grid{gap:22px}.mt-allocation-dimension h3{font-size:21px}.mt-allocation-dimension p{font-size:21px}.mt-total strong{font-size:42px}.mt-total span{font-size:19px}.mt-invariant{font-size:20px;margin:18px 0 0}
.mt-architecture{padding:22px 28px}.mt-node{font-size:19px;padding:17px 18px}.mt-external>p,.mt-boundary-label{font-size:19px}.mt-support p{font-size:17px}.mt-architecture figcaption{font-size:17px}.mt-graph-hint{display:none}
'''


def write(name, title, content, footer, label, extra=''):
    html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Money Tracker — ' + name + '</title>' + styles + '<style>' + COMMON + extra + '</style></head><body><main class="money-technical linkedin-export"><p class="export-signature">Money Tracker · Francesco Finucci</p><h1 class="export-title">' + title + '</h1><div class="export-content">' + content + '</div><footer class="export-footer"><p>' + footer + '</p><small>' + label + '</small></footer></main></body></html>'
    (DESTINATION / f'{name}.html').write_text(html)
    (ROOT / f'dist/__linkedin-{name}.html').write_text(html)
    print(f'{name}: 1200×1500')

write('01-dashboard', 'Your finances, in one place', ''.join(node.render() for node in document.find('mt-dashboard')),
      'Posted transactions feed the overview and budgets. Each purchase keeps category and payment allocations separate.',
      'Illustrative UI in English · fictitious data · not an actual application screenshot',
      '.mt-dashboard-body{padding:22px 30px}.mt-dashboard-top{padding:17px 28px}.mt-metrics{margin:18px 0}.mt-metrics>div{padding:13px 20px}.mt-budget-bars{gap:14px}.mt-transaction-allocations{margin-top:16px}.mt-transaction-allocations p{padding:6px 0}.mt-transaction-allocations .mt-reconciled{margin-bottom:0}.export-content{gap:20px}')
write('02-bot', 'Send a message.<br>Review the draft.', document.find('mt-chat')[0].render() + document.find('mt-allocation')[0].render(),
      'The model interprets the message. Application rules reconcile both allocations, and the owner confirms the draft.',
      'Simulated conversation in English · fictitious data · not an actual bot screenshot',
      '.mt-chat-user,.mt-chat-bot{font-size:22px}.mt-chat-messages{padding:24px 30px}.export-content{gap:20px}')
write('03-architecture', 'Language interprets.<br>Rules validate.', document.find('mt-architecture')[0].render(('mt-graph-preview',)),
      'Telegram is the external messaging channel. Local workflows and the dashboard share one financial domain.',
      'Simplified architecture · personal project · repository private')

# Share exactly the same workflow SVGs as the site, including all five graphs.
content = document.find('mt-graph-preview')[0].render().replace('popover="auto"', '').replace('role="dialog"', 'role="region"')
content = content.replace('Inside LangGraph</h3>', 'All five LangGraph<br>workflows</h3>')
css = '''html,body{margin:0;width:1600px;min-height:2400px;background:#edf3f7}body{padding:58px 70px 50px;font-family:'IBM Plex Sans Variable',Arial,sans-serif;color:#173244;box-sizing:border-box}.export-signature{font-size:25px;font-weight:600;border-left:10px solid #2759b5;padding-left:20px;margin-bottom:30px}.mt-graph-preview{display:block;position:static;inset:auto;width:100%;max-height:none;overflow:visible;border:0;padding:0;margin:0;background:transparent;box-shadow:none;border-radius:0}.mt-graph-header{position:static;background:transparent;padding:0}.mt-graph-header h3{font-size:76px;line-height:1.04;font-weight:600;letter-spacing:-2px}.mt-graph-close{display:none}.mt-graph-intro{font-size:23px;line-height:1.45;max-width:none;margin:20px 0}.mt-graph-orchestration{font-size:20px;padding:14px 20px;background:white;margin-bottom:20px}.mt-graph-orchestration p{line-height:1.45}.mt-graph-legend{font-size:20px;gap:14px 25px;margin-bottom:24px}.mt-graph-swatch{width:19px;height:19px}.mt-graph-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}.mt-graph-workflow{padding:20px 12px 12px;border-radius:12px}.mt-graph-workflow h4{font-size:27px;line-height:1.25;margin:0 12px 12px}.mt-graph-movement{grid-column:span 2}.mt-graph-workflow-note{font-size:20px;line-height:1.5;margin:12px}.mt-graph-conclusion{font-size:22px;line-height:1.5;background:#173244;color:white;border:0;padding:22px 26px;margin:28px 0 0;border-radius:12px}.export-footer{font-size:20px;line-height:1.5;color:#5c7281;margin-top:22px}.mt-graph-portrait{display:none}.mt-graph-landscape{display:block}'''
html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Money Tracker — all LangGraph workflows</title>' + styles + '<style>' + css + '</style></head><body><div class="export-signature">Money Tracker · Francesco Finucci</div>' + content + '<p class="export-footer">Implemented graph topology · external dispatcher shown separately<br>Original editorial diagram · personal project · private repository</p></body></html>'
(DESTINATION / '04-langgraph.html').write_text(html)
(ROOT / 'dist/__linkedin-04-langgraph.html').write_text(html)
print('04-langgraph: 1600×2400')
