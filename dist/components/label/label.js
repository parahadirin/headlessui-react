import c,{createContext as m,useContext as L,useMemo as f,useState as b}from"react";import{useEvent as T}from'../../hooks/use-event.js';import{useId as y}from'../../hooks/use-id.js';import{useIsoMorphicEffect as E}from'../../hooks/use-iso-morphic-effect.js';import{useSyncRefs as g}from'../../hooks/use-sync-refs.js';import{forwardRefWithAs as x,render as P}from'../../utils/render.js';let d=m(null);function u(){let a=L(d);if(a===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return a}function F(){let[a,t]=b([]);return[a.length>0?a.join(" "):void 0,f(()=>function(e){let s=T(r=>(t(l=>[...l,r]),()=>t(l=>{let n=l.slice(),p=n.indexOf(r);return p!==-1&&n.splice(p,1),n}))),o=f(()=>({register:s,slot:e.slot,name:e.name,props:e.props}),[s,e.slot,e.name,e.props]);return c.createElement(d.Provider,{value:o},e.children)},[t])]}let A="label";function h(a,t){let i=y(),{id:e=`headlessui-label-${i}`,passive:s=!1,...o}=a,r=u(),l=g(t);E(()=>r.register(e),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in o&&delete o.onClick),P({ourProps:n,theirProps:o,slot:r.slot||{},defaultTag:A,name:r.name||"Label"})}let v=x(h),B=Object.assign(v,{});export{B as Label,F as useLabels};