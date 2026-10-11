export type WorkflowKey = 'router' | 'expense' | 'read' | 'review' | 'movement';
export type GraphNode = { name: string; hint: string; x: number; y: number; width: number; kind: 'rule' | 'model' | 'mixed' };
export type GraphTopology = {
  width: number; height: number; centre: number; endY: number;
  nodes: GraphNode[]; edges: { path: string; conditional?: boolean }[];
  labels: { key: string; x: number; y: number; centred?: boolean }[];
};
const node = (name: string, hint: string, y: number, kind: GraphNode['kind'], x = 20, width = 290): GraphNode => ({name, hint, x, y, width, kind});
const edge = (path: string, conditional = false) => ({path, conditional});
const basic = {width:400, height:500, centre:165, endY:450};
// Original representation of runtime graph assembly, not a union StateGraph.
export const graphTopology: Record<WorkflowKey, GraphTopology> = {
  router: {...basic, nodes:[node('pre_route','preRoute',80,'rule'),node('classify','classify',220,'model')],
    edges:[edge('M165 42V70'),edge('M165 156V210',true),edge('M310 118H365V466H225',true),edge('M165 296V440')],
    labels:[{key:'infer',x:178,y:187},{key:'resolved',x:335,y:103,centred:true}]},
  expense: {...basic, nodes:[node('extract','extract',80,'model'),node('classify_category','category',220,'model'),node('persist','persist',350,'rule')],
    edges:[edge('M165 42V70'),edge('M165 156V210',true),edge('M310 118H365V466H225',true),edge('M165 296V340',true),edge('M310 258H365',true),edge('M165 426V440')],
    labels:[{key:'valid',x:178,y:187},{key:'valid',x:178,y:324},{key:'clarify',x:335,y:196,centred:true}]},
  read: {...basic,nodes:[node('select_tool','select',80,'model'),node('execute_tool','execute',220,'rule')],
    edges:[edge('M165 42V70'),edge('M165 156V210',true),edge('M310 118H365V466H225',true),edge('M165 296V440')],
    labels:[{key:'valid',x:178,y:187},{key:'clarify',x:335,y:196,centred:true}]},
  review: {...basic,centre:205,nodes:[node('ask_owner','ask',80,'rule',60),node('settle_review','settle',220,'mixed',60)],
    edges:[edge('M205 42V70'),edge('M205 156V210'),edge('M205 296V440',true),edge('M60 258H20V118H50',true)],
    labels:[{key:'pending',x:25,y:187},{key:'settled',x:218,y:365}]},
  movement: {width:860,height:530,centre:430,endY:480,
    nodes:[node('extract_correction','extractCorrection',100,'model',50,320),node('classify_correction_category','correctionCategory',230,'model',50,320),node('apply_correction','correct',360,'rule',50,320),node('apply_undo','undo',100,'rule',435,170),node('apply_posting','post',100,'rule',640,170)],
    edges:[edge('M430 42V62H210V90',true),edge('M430 42V62H520V90',true),edge('M430 42V62H725V90',true),edge('M210 176V220',true),edge('M210 306V350',true),edge('M370 138H395V450H430V470',true),edge('M370 268H395',true),edge('M210 436V460H430V470'),edge('M520 176V460H430V470'),edge('M725 176V460H430V470')],
    labels:[{key:'valid',x:224,y:204},{key:'valid',x:224,y:335},{key:'clarify',x:399,y:324}]},
};
export const movementPortrait: GraphTopology = {
  width:400,height:1025,centre:165,endY:975,
  nodes:[node('extract_correction','extractCorrection',100,'model'),node('classify_correction_category','correctionCategory',240,'model'),node('apply_correction','correct',380,'rule'),node('apply_undo','undo',600,'rule'),node('apply_posting','post',750,'rule')],
  edges:[edge('M165 42V90',true),edge('M115 26H5V638H10',true),edge('M115 26H5V788H10',true),edge('M165 176V230',true),edge('M165 316V370',true),edge('M310 138H365V991H225',true),edge('M310 278H365',true),edge('M310 418H340V950H165V965'),edge('M310 638H340',false),edge('M165 826V965')],
  labels:[{key:'valid',x:178,y:206},{key:'valid',x:178,y:346},{key:'clarify',x:335,y:207,centred:true}],
};
