export type Experiment={id:string;material:string;formula:string;silver:number;temperature:number;conductivity:number;adhesion:number;status:string;date:string;source:string};
export const experiments:Experiment[]=[
{id:"EXP-1042",material:"Ag Paste Alpha",formula:"AG-42",silver:72,temperature:210,conductivity:8.9,adhesion:4.6,status:"Validated",date:"2026-10-19",source:"ELN"},
{id:"EXP-1043",material:"Ag Paste Beta",formula:"AG-43",silver:68,temperature:190,conductivity:8.1,adhesion:4.8,status:"Validated",date:"2026-10-21",source:"LIMS"},
{id:"EXP-1044",material:"Ag Paste Gamma",formula:"AG-44",silver:75,temperature:230,conductivity:9.4,adhesion:4.2,status:"Review",date:"2026-10-24",source:"ELN"},
{id:"EXP-1045",material:"Ag Paste Delta",formula:"AG-45",silver:70,temperature:205,conductivity:8.6,adhesion:4.7,status:"Running",date:"2026-10-29",source:"MES"},
{id:"EXP-1046",material:"Ag Paste Epsilon",formula:"AG-46",silver:66,temperature:195,conductivity:7.8,adhesion:4.9,status:"Validated",date:"2026-11-02",source:"LIMS"}
];
export const sources=[{name:"LIMS",type:"Test results",count:1240},{name:"ELN",type:"Experiments",count:438},{name:"SAP S/4HANA",type:"Materials & batches",count:329},{name:"MES",type:"Process parameters",count:2140},{name:"Historian",type:"Equipment telemetry",count:8640},{name:"Documents",type:"Reports & knowledge",count:520}];
export const recommendations=[{title:"Optimize Ag loading",hypothesis:"Test 70–73% silver to balance conductivity and adhesion.",evidence:["EXP-1042","EXP-1045"],priority:"High"},{title:"Reduce curing temperature",hypothesis:"Compare 195°C and 205°C at constant composition.",evidence:["EXP-1043","EXP-1045"],priority:"Medium"},{title:"Confirm reproducibility",hypothesis:"Repeat Gamma formulation in three independent batches.",evidence:["EXP-1044"],priority:"High"}];
