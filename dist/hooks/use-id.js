var o;import t from"react";import{env as r}from'../utils/env.js';import{useIsoMorphicEffect as d}from'./use-iso-morphic-effect.js';import{useServerHandoffComplete as f}from'./use-server-handoff-complete.js';let I=(o=t.useId)!=null?o:function(){let n=f(),[e,u]=t.useState(n?()=>r.nextId():null);return d(()=>{e===null&&u(r.nextId())},[e]),e!=null?""+e:void 0};export{I as useId};