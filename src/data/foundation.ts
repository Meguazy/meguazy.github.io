import type { Language } from './site';

// Source-verified editorial copy approved for portfolio publication on 2026-11-04; see docs/revision-2026-11-04.md.
export const foundationRepository = 'https://github.com/Meguazy/FounDaTionZy';

export const foundationProject = {
  en: {
    title: 'FounDaTionZy',
    field: 'Development methodology',
    summary: 'A documentation-first framework for developing software with humans and AI agents, with explicit decisions and verifiable delivery steps.',
    context: 'An agent can produce code while requirements, earlier decisions, and unfinished work remain scattered across conversations. A new session then has to reconstruct what matters and which actions are authorized. I wanted that context to live in the repository, where both people and agents can inspect it.',
    role: 'I created the reusable template and its documentation workflow, drawing on conventions from my Money Tracker and Devflow Orchestrator projects. I organized the product, architecture, decision, delivery, and handoff records into a shared foundation.',
    approach: 'Start with a detailed description of the application. The agent drafts the product baseline, twelve arc42 architecture views, decision records, and a sequenced roadmap. The owner reviews the baseline and resolves the choices needed for the next step. Implementation proceeds within that scope, with checks and evidence feeding back into the documentation.',
    boundary: 'The MIT-licensed repository supplies documentation, reusable record templates, and a Python structural checker. It does not supply an application, select a technology stack, or install repository protection. Productivity gains and reliable continuation across sessions have not been established by a comparative evaluation.',
  },
  it: {
    title: 'FounDaTionZy',
    field: 'Metodo di sviluppo',
    summary: 'Un framework che parte dalla documentazione per sviluppare software con persone e agenti AI, con decisioni esplicite e passi verificabili.',
    context: 'Un agente può produrre codice mentre requisiti, decisioni precedenti e lavoro incompleto restano sparsi fra le conversazioni. Una nuova sessione deve quindi ricostruire cosa conta e quali azioni sono autorizzate. Volevo che questo contesto vivesse nel repository, consultabile da persone e agenti.',
    role: 'Ho creato il template riutilizzabile e il suo flusso di documentazione, riprendendo convenzioni dai miei progetti Money Tracker e Devflow Orchestrator. Ho organizzato requisiti, architettura, decisioni, consegna e passaggi di sessione in una base condivisa.',
    approach: 'Si parte da una descrizione dettagliata dell’applicazione. L’agente prepara requisiti, dodici viste architetturali arc42, decisioni documentate e una roadmap ordinata. Il proprietario revisiona la base e risolve le scelte necessarie al passo successivo. L’implementazione procede entro quel perimetro, e verifiche ed evidenze aggiornano la documentazione.',
    boundary: 'Il repository con licenza MIT contiene documentazione, modelli riutilizzabili e un checker strutturale Python. Non include un’applicazione, non sceglie lo stack e non installa protezioni del repository. Aumenti di produttività e affidabilità della ripresa fra sessioni non sono stati dimostrati da una valutazione comparativa.',
  },
  fr: {
    title: 'FounDaTionZy',
    field: 'Méthode de développement',
    summary: 'Un cadre fondé sur la documentation pour développer des logiciels avec des personnes et des agents IA, avec des décisions explicites et des étapes vérifiables.',
    context: 'Un agent peut produire du code alors que les exigences, les décisions et le travail inachevé restent dispersés dans les conversations. Chaque nouvelle session doit alors reconstruire le contexte et les actions autorisées. Je souhaitais conserver ce contexte dans le dépôt, à la disposition des personnes et des agents.',
    role: 'J’ai créé le modèle réutilisable et son processus documentaire à partir de conventions de mes projets Money Tracker et Devflow Orchestrator. J’ai réuni les exigences, l’architecture, les décisions, la livraison et les transmissions entre sessions dans une base commune.',
    approach: 'Le point de départ est une description détaillée de l’application. L’agent prépare les exigences, les douze vues arc42, les décisions documentées et une feuille de route ordonnée. Le propriétaire examine cette base et tranche les choix nécessaires à l’étape suivante. L’implémentation respecte ce périmètre ; les contrôles et leurs preuves mettent ensuite la documentation à jour.',
    boundary: 'Le dépôt sous licence MIT fournit de la documentation, des modèles de fiches et un vérificateur structurel Python. Il ne fournit pas d’application, ne choisit pas de pile technique et n’installe pas de protections du dépôt. Les gains de productivité et la fiabilité des reprises entre sessions n’ont pas été établis par une évaluation comparative.',
  },
  de: {
    title: 'FounDaTionZy',
    field: 'Entwicklungsmethodik',
    summary: 'Ein dokumentationsbasierter Rahmen für die Softwareentwicklung mit Menschen und KI-Agenten, mit expliziten Entscheidungen und überprüfbaren Arbeitsschritten.',
    context: 'Ein Agent kann Code erzeugen, während Anforderungen, frühere Entscheidungen und offene Arbeiten über Gespräche verteilt bleiben. Jede neue Sitzung muss dann Kontext und Befugnisse rekonstruieren. Ich wollte diesen Kontext im Repository festhalten, damit Menschen und Agenten ihn einsehen können.',
    role: 'Ich habe die wiederverwendbare Vorlage und ihren Dokumentationsablauf aus Konventionen meiner Projekte Money Tracker und Devflow Orchestrator entwickelt. Anforderungen, Architektur, Entscheidungen, Umsetzung und Sitzungsübergaben bilden eine gemeinsame Grundlage.',
    approach: 'Am Anfang steht eine ausführliche Beschreibung der Anwendung. Der Agent entwirft die Anforderungen, zwölf arc42-Architektursichten, Entscheidungsprotokolle und eine geordnete Roadmap. Der Eigentümer prüft die Grundlage und trifft die für den nächsten Schritt erforderlichen Entscheidungen. Die Umsetzung bleibt in diesem Rahmen; Prüfungen und Nachweise fließen in die Dokumentation zurück.',
    boundary: 'Das MIT-lizenzierte Repository enthält Dokumentation, wiederverwendbare Vorlagen und eine strukturelle Python-Prüfung. Es liefert keine Anwendung, wählt keinen Technologie-Stack und richtet keinen Repository-Schutz ein. Produktivitätsgewinne und die Zuverlässigkeit von Sitzungsfortsetzungen wurden nicht durch eine vergleichende Evaluation belegt.',
  },
  es: {
    title: 'FounDaTionZy',
    field: 'Metodología de desarrollo',
    summary: 'Un marco basado en la documentación para desarrollar software con personas y agentes de IA, con decisiones explícitas y pasos verificables.',
    context: 'Un agente puede producir código mientras los requisitos, las decisiones anteriores y el trabajo pendiente quedan dispersos en conversaciones. Cada nueva sesión debe reconstruir el contexto y las acciones autorizadas. Quería que ese contexto viviera en el repositorio, al alcance de personas y agentes.',
    role: 'Creé la plantilla reutilizable y su proceso documental a partir de convenciones de mis proyectos Money Tracker y Devflow Orchestrator. Organicé requisitos, arquitectura, decisiones, entregas y traspasos entre sesiones en una base compartida.',
    approach: 'Se empieza con una descripción detallada de la aplicación. El agente prepara los requisitos, las doce vistas arc42, las decisiones documentadas y una hoja de ruta ordenada. El propietario revisa la base y resuelve las decisiones necesarias para el siguiente paso. La implementación respeta ese alcance; las comprobaciones y sus evidencias actualizan la documentación.',
    boundary: 'El repositorio con licencia MIT ofrece documentación, plantillas reutilizables y un verificador estructural en Python. No incluye una aplicación, no elige una pila tecnológica ni instala protecciones del repositorio. Las mejoras de productividad y la fiabilidad al retomar sesiones no se han demostrado mediante una evaluación comparativa.',
  },
  pl: {
    title: 'FounDaTionZy',
    field: 'Metodyka rozwoju oprogramowania',
    summary: 'Podejście oparte na dokumentacji do tworzenia oprogramowania z ludźmi i agentami AI, z jawnymi decyzjami i weryfikowalnymi etapami pracy.',
    context: 'Agent może tworzyć kod, podczas gdy wymagania, wcześniejsze decyzje i niedokończone prace pozostają rozproszone w rozmowach. Nowa sesja musi wtedy odtworzyć kontekst i zakres uprawnień. Chciałem zachować ten kontekst w repozytorium, dostępnym dla ludzi i agentów.',
    role: 'Stworzyłem szablon wielokrotnego użytku i proces dokumentacji na podstawie konwencji z moich projektów Money Tracker i Devflow Orchestrator. Połączyłem wymagania, architekturę, decyzje, etapy realizacji i przekazywanie pracy między sesjami we wspólną podstawę.',
    approach: 'Punktem wyjścia jest szczegółowy opis aplikacji. Agent przygotowuje wymagania, dwanaście widoków arc42, zapisy decyzji i uporządkowany plan prac. Właściciel przegląda tę podstawę i podejmuje decyzje potrzebne przed kolejnym etapem. Implementacja pozostaje w tym zakresie, a wyniki kontroli i dowody aktualizują dokumentację.',
    boundary: 'Repozytorium na licencji MIT zawiera dokumentację, szablony i narzędzie do kontroli struktury w Pythonie. Nie dostarcza aplikacji, nie wybiera stosu technologicznego ani nie konfiguruje ochrony repozytorium. Wzrost produktywności i niezawodność wznawiania sesji nie zostały potwierdzone oceną porównawczą.',
  },
} satisfies Record<Language, { title: string; field: string; summary: string; context: string; role: string; approach: string; boundary: string }>;

export const foundationDepth: Record<Language, string> = {
  en: 'Each document has a clear responsibility: the product baseline owns requirements, arc42 owns architecture, ADRs preserve decisions, and the roadmap owns delivery status. Open questions have an owner and a decision deadline. Before starting or closing a step, all due choices must be resolved or explicitly deferred. Reading paths point agents to canonical context; indexed handoffs record the source revision, unfinished work, and evidence limits. The standard-library Python checker validates links, anchors, indexes, document structure, and roadmap consistency. Semantic correctness, application behavior, and owner acceptance still require their own review and evidence.',
  it: 'Ogni documento ha una responsabilità precisa: la baseline raccoglie i requisiti, arc42 l’architettura, gli ADR conservano le decisioni e la roadmap lo stato delle consegne. Le domande aperte hanno un responsabile e una scadenza. Prima di avviare o chiudere un passo, tutte le scelte in scadenza devono essere risolte o rinviate esplicitamente. Percorsi di lettura rimandano alle fonti canoniche; passaggi di consegne indicizzati registrano revisione sorgente, lavoro incompleto e limiti delle evidenze. Il checker Python, senza dipendenze esterne, controlla link, ancore, indici, struttura e coerenza della roadmap. Correttezza dei contenuti, comportamento applicativo e accettazione richiedono verifiche proprie.',
  fr: 'Chaque document a une responsabilité précise : les exigences relèvent de la base produit, l’architecture d’arc42, les décisions des ADR et l’état de livraison de la feuille de route. Les questions ouvertes ont un responsable et une échéance. Avant de commencer ou de clôturer une étape, les choix arrivés à échéance doivent être résolus ou explicitement reportés. Des parcours de lecture renvoient aux sources canoniques ; des transmissions indexées consignent la révision, le travail restant et les limites des preuves. Le vérificateur Python, sans dépendances externes, contrôle liens, ancres, index, structure et cohérence de la feuille de route. Le sens des textes, le comportement applicatif et l’acceptation nécessitent leurs propres vérifications.',
  de: 'Jedes Dokument hat eine klare Zuständigkeit: Die Produktbasis enthält Anforderungen, arc42 die Architektur, ADRs bewahren Entscheidungen und die Roadmap den Umsetzungsstatus. Offene Fragen haben einen Verantwortlichen und eine Frist. Vor Beginn oder Abschluss eines Schritts müssen fällige Entscheidungen getroffen oder ausdrücklich verschoben werden. Lesepfade verweisen auf maßgebliche Quellen; indexierte Übergaben halten Quellrevision, offene Arbeiten und Nachweisgrenzen fest. Die Python-Prüfung ohne externe Abhängigkeiten kontrolliert Links, Anker, Indizes, Struktur und Roadmap-Konsistenz. Inhaltliche Richtigkeit, Anwendungsverhalten und Abnahme benötigen eigene Prüfungen und Nachweise.',
  es: 'Cada documento tiene una responsabilidad clara: la base del producto contiene los requisitos, arc42 la arquitectura, los ADR conservan las decisiones y la hoja de ruta el estado de las entregas. Las preguntas abiertas tienen responsable y fecha límite. Antes de iniciar o cerrar una etapa, las decisiones pendientes deben resolverse o aplazarse explícitamente. Los itinerarios de lectura remiten a fuentes canónicas; los traspasos indexados registran la revisión del código, el trabajo pendiente y los límites de las evidencias. El verificador Python, sin dependencias externas, comprueba enlaces, anclas, índices, estructura y coherencia de la hoja de ruta. La corrección del contenido, el comportamiento de la aplicación y la aceptación requieren verificaciones propias.',
  pl: 'Każdy dokument ma jasną odpowiedzialność: podstawa produktu obejmuje wymagania, arc42 architekturę, ADR zachowują decyzje, a plan prac określa stan realizacji. Otwarte pytania mają właściciela i termin decyzji. Przed rozpoczęciem lub zamknięciem etapu trzeba rozstrzygnąć wszystkie wymagane decyzje albo jawnie je odroczyć. Ścieżki lektury wskazują źródła kanoniczne, a indeksowane przekazania pracy zapisują rewizję źródłową, pozostałe zadania i ograniczenia dowodów. Narzędzie Python bez zewnętrznych zależności sprawdza odnośniki, kotwice, indeksy, strukturę i spójność planu. Poprawność treści, działanie aplikacji i akceptacja wymagają osobnych kontroli i dowodów.',
};

type FoundationFlow = {
  title: string;
  steps: { title: string; text: string }[];
  feedback: string;
  repository: string;
  guide: string;
};

export const foundationFlow: Record<Language, FoundationFlow> = {
  en: {
    title: 'From intent to reviewed evidence',
    steps: [
      { title: 'Describe', text: 'Problem, users, rules, constraints.' },
      { title: 'Document', text: 'Requirements, architecture, decisions.' },
      { title: 'Scope', text: 'One delivery step and its due choices.' },
      { title: 'Implement', text: 'Changes within the agreed boundaries.' },
      { title: 'Verify', text: 'Checks, source revision, evidence limits.' },
      { title: 'Review', text: 'Owner acceptance for that scope.' },
    ],
    feedback: 'Verified changes update the baseline. The next step starts with explicit owner direction.',
    repository: 'Explore the repository', guide: 'Read the bootstrap guide',
  },
  it: {
    title: 'Dall’intento alle evidenze revisionate',
    steps: [
      { title: 'Descrivere', text: 'Problema, utenti, regole, vincoli.' },
      { title: 'Documentare', text: 'Requisiti, architettura, decisioni.' },
      { title: 'Delimitare', text: 'Un passo e le scelte in scadenza.' },
      { title: 'Implementare', text: 'Modifiche entro i confini concordati.' },
      { title: 'Verificare', text: 'Controlli, revisione sorgente, limiti.' },
      { title: 'Revisionare', text: 'Accettazione di quel perimetro.' },
    ],
    feedback: 'Le modifiche verificate aggiornano la baseline. Il passo successivo richiede una direzione esplicita del proprietario.',
    repository: 'Esplora il repository', guide: 'Leggi la guida di avvio',
  },
  fr: {
    title: 'De l’intention aux preuves examinées',
    steps: [
      { title: 'Décrire', text: 'Problème, utilisateurs, règles, contraintes.' },
      { title: 'Documenter', text: 'Exigences, architecture, décisions.' },
      { title: 'Délimiter', text: 'Une étape et les choix à trancher.' },
      { title: 'Réaliser', text: 'Modifications dans le cadre convenu.' },
      { title: 'Vérifier', text: 'Contrôles, révision, limites des preuves.' },
      { title: 'Examiner', text: 'Acceptation du périmètre par le propriétaire.' },
    ],
    feedback: 'Les modifications vérifiées actualisent la base. L’étape suivante exige une instruction explicite du propriétaire.',
    repository: 'Explorer le dépôt', guide: 'Lire le guide de démarrage',
  },
  de: {
    title: 'Von der Absicht zu geprüften Nachweisen',
    steps: [
      { title: 'Beschreiben', text: 'Problem, Nutzer, Regeln, Vorgaben.' },
      { title: 'Dokumentieren', text: 'Anforderungen, Architektur, Entscheidungen.' },
      { title: 'Eingrenzen', text: 'Ein Arbeitsschritt und fällige Entscheidungen.' },
      { title: 'Umsetzen', text: 'Änderungen im vereinbarten Rahmen.' },
      { title: 'Prüfen', text: 'Kontrollen, Quellrevision, Nachweisgrenzen.' },
      { title: 'Abnehmen', text: 'Abnahme des Umfangs durch den Eigentümer.' },
    ],
    feedback: 'Geprüfte Änderungen aktualisieren die Grundlage. Der nächste Schritt braucht eine ausdrückliche Anweisung des Eigentümers.',
    repository: 'Repository ansehen', guide: 'Einrichtungsleitfaden lesen',
  },
  es: {
    title: 'De la intención a las evidencias revisadas',
    steps: [
      { title: 'Describir', text: 'Problema, usuarios, reglas, restricciones.' },
      { title: 'Documentar', text: 'Requisitos, arquitectura, decisiones.' },
      { title: 'Delimitar', text: 'Una etapa y las decisiones pendientes.' },
      { title: 'Implementar', text: 'Cambios dentro del alcance acordado.' },
      { title: 'Verificar', text: 'Controles, revisión, límites de las evidencias.' },
      { title: 'Revisar', text: 'Aceptación del alcance por el propietario.' },
    ],
    feedback: 'Los cambios verificados actualizan la base. La siguiente etapa requiere una instrucción explícita del propietario.',
    repository: 'Explorar el repositorio', guide: 'Leer la guía de inicio',
  },
  pl: {
    title: 'Od zamiaru do sprawdzonych dowodów',
    steps: [
      { title: 'Opisać', text: 'Problem, użytkownicy, reguły, ograniczenia.' },
      { title: 'Udokumentować', text: 'Wymagania, architektura, decyzje.' },
      { title: 'Określić zakres', text: 'Jeden etap i wymagane decyzje.' },
      { title: 'Zaimplementować', text: 'Zmiany w uzgodnionych granicach.' },
      { title: 'Zweryfikować', text: 'Kontrole, rewizja, ograniczenia dowodów.' },
      { title: 'Zaakceptować', text: 'Akceptacja zakresu przez właściciela.' },
    ],
    feedback: 'Zweryfikowane zmiany aktualizują podstawę. Kolejny etap wymaga wyraźnej decyzji właściciela.',
    repository: 'Zobacz repozytorium', guide: 'Przeczytaj przewodnik startowy',
  },
};
