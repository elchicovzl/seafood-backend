(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[582],{79194:(b,f,e)=>{"use strict";e.d(f,{v:()=>o});var t=e(67294),i=e(86706);function o(m,d){const s=(0,i.oR)();(0,t.useEffect)(()=>{s.injectReducer(m,d)},[s,m,d])}},11984:(b,f,e)=>{"use strict";e.d(f,{CI:()=>m,FP:()=>s,Js:()=>c,_V:()=>o,fC:()=>i,rI:()=>y,xn:()=>d});var t=e(86978);function i({status:l,data:a}){return{type:t.qZ,payload:{status:l,workflow:a}}}function o(l){return{type:t.x4,payload:{stageId:l}}}function m(l={}){return{type:t.Ot,payload:l}}function d(l,a){return{type:t.Nj,payload:{stageId:l,...a}}}function s(l,a){return{type:t.$k,payload:{newIndex:a,oldIndex:l}}}function y(l){return{type:t.VS,payload:l}}function c(){return{type:t.gu}}},68997:(b,f,e)=>{"use strict";e.d(f,{U:()=>T});var t=e(67294),i=e(50781),o=e(75878),m=e(60797),d=e(45697),s=e.n(d),y=e(86896),c=e(86706),l=e(88972),a=e(11984),w=e(78549),E=e(59533);const n=(0,l.default)(E.Z)`
  > circle {
    fill: ${({theme:u})=>u.colors.neutral150};
  }
  > path {
    fill: ${({theme:u})=>u.colors.neutral600};
  }
`,r=(0,l.default)(i.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:u})=>u.spaces[6]};
    width: ${({theme:u})=>u.spaces[6]};

    > path {
      fill: ${({theme:u})=>u.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:u})=>u.colors.primary600} !important;
    ${w.Z} {
      color: ${({theme:u})=>u.colors.primary600} !important;
    }

    ${n} {
      > circle {
        fill: ${({theme:u})=>u.colors.primary600};
      }
      > path {
        fill: ${({theme:u})=>u.colors.neutral100};
      }
    }
  }

  &:active {
    ${w.Z} {
      color: ${({theme:u})=>u.colors.primary600};
    }

    ${n} {
      > circle {
        fill: ${({theme:u})=>u.colors.primary600};
      }
      > path {
        fill: ${({theme:u})=>u.colors.neutral100};
      }
    }
  }
`;function g({children:u,...W}){return t.createElement(r,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...W},t.createElement(o.k,{gap:2},t.createElement(n,{"aria-hidden":!0}),t.createElement(w.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},u)))}g.propTypes={children:s().node.isRequired};var S=e(22996),M=e(97104),O=e(27375),C=e(37527),D=e(37362),P=e(9370),x=e(61585),$=e(28469),h=e(47338),j=e(34263),R=e(5660),U=e(41054),N=e(61080),z=e(21440),I=e(21892),Z=e(86978),L=e(5318);const G=(0,L.s)();function p(){return t.createElement(i.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function k({id:u,index:W,canDelete:K,canReorder:ee,canUpdate:V,isOpen:te=!1,stagesCount:H}){const X=v=>`${v+1} of ${H}`,Y=v=>{Q(A({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:B.value,position:X(v)}))},ie=v=>{Q(A({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:B.value,position:X(v)}))},de=()=>{Q(A({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:B.value}))},ce=(v,J)=>{Q(A({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:B.value,position:X(v)})),q((0,a.FP)(J,v))},[oe,Q]=t.useState(null),{formatMessage:A}=(0,y.Z)(),{trackUsage:ue}=(0,m.rS)(),q=(0,c.I0)(),[ae,me]=t.useState(te),[B,re,ge]=(0,U.U$)(`stages.${W}.name`),[_,ne,pe]=(0,U.U$)(`stages.${W}.color`),[{handlerId:fe,isDragging:ve,handleKeyDown:he},ye,Ee,xe,se]=(0,z.Y9)(ee,{index:W,item:{name:B.value},onGrabItem:Y,onDropItem:ie,onMoveItem:ce,onCancel:de,type:Z.uL.STAGE}),we=(0,I.FE)(ye,Ee),Se=G.map(({hex:v,name:J})=>({value:v,label:A({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:J}),color:v}));t.useEffect(()=>{se((0,N.rX)(),{captureDraggingState:!1})},[se,W]);const{themeColorName:Me}=(0,L.k)(_.value)??{};return t.createElement(i.x,{ref:we},oe&&t.createElement(S.T,{"aria-live":"assertive"},oe),ve?t.createElement(p,null):t.createElement(M.U,{size:"S",variant:"primary",onToggle:()=>{me(!ae),ae||ue("willEditStage")},expanded:ae,shadow:"tableShadow",error:re.error??ne?.error??!1,hasErrorMessage:!1},t.createElement(O.B,{title:B.value,togglePosition:"left",action:(K||V)&&t.createElement(o.k,null,K&&t.createElement(C.h,{background:"transparent",icon:t.createElement(j.Z,null),label:A({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete stage"}),noBorder:!0,onClick:()=>q((0,a._V)(u))}),V&&t.createElement(C.h,{background:"transparent",forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,"data-handler-id":fe,ref:xe,label:A({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:v=>v.stopPropagation(),onKeyDown:he},t.createElement(R.Z,null)))}),t.createElement(D.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(P.r,{gap:4},t.createElement(x.P,{col:6},t.createElement($.o,{...B,id:B.name,disabled:!V,label:A({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:re.error??!1,onChange:v=>{ge.setValue(v.target.value),q((0,a.xn)(u,{name:v.target.value}))},required:!0})),t.createElement(x.P,{col:6},t.createElement(h.q4,{disabled:!V,error:ne?.error??!1,id:_.name,required:!0,label:A({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:v=>{pe.setValue(v),q((0,a.xn)(u,{color:v}))},value:_.value.toUpperCase(),startIcon:t.createElement(o.k,{as:"span",height:2,background:_.value,borderColor:Me==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},Se.map(({value:v,label:J,color:le})=>{const{themeColorName:be}=(0,L.k)(le);return t.createElement(h.ag,{value:v,key:v,startIcon:t.createElement(o.k,{as:"span",height:2,background:le,borderColor:be==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},J)})))))))}k.propTypes=s().shape({id:s().number.isRequired,color:s().string.isRequired,canDelete:s().bool.isRequired,canReorder:s().bool.isRequired,canUpdate:s().bool.isRequired,stagesCount:s().number.isRequired}).isRequired;const F=(0,l.default)(i.x)`
  transform: translateX(-50%);
`;function T({canDelete:u,canUpdate:W,stages:K}){const{formatMessage:ee}=(0,y.Z)(),V=(0,c.I0)(),{trackUsage:te}=(0,m.rS)();return t.createElement(o.k,{direction:"column",gap:6,width:"100%"},t.createElement(i.x,{position:"relative",spacing:4,width:"100%"},t.createElement(F,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(o.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},K.map((H,X)=>{const Y=H?.id??H.__temp_key__;return t.createElement(i.x,{key:`stage-${Y}`,as:"li"},t.createElement(k,{id:Y,index:X,isOpen:!H.id,canDelete:K.length>1&&u,canReorder:K.length>1,canUpdate:W,stagesCount:K.length}))}))),W&&t.createElement(g,{type:"button",onClick:()=>{V((0,a.CI)({name:""})),te("willCreateStage")}},ee({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}T.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},T.propTypes={canDelete:s().bool,canUpdate:s().bool,stages:s().arrayOf(s().shape({id:s().number,__temp_key__:s().number,name:s().string.isRequired}))}},85230:(b,f,e)=>{"use strict";e.d(f,{Y:()=>M});var t=e(67294),i=e(55482),o=e(78549),m=e(9370),d=e(61585),s=e(28469),y=e(60797),c=e(41054),l=e(45697),a=e.n(l),w=e(86896),E=e(86706),n=e(88972),r=e(11984);const g=(0,n.default)(i.ML)`
  padding-left: ${({theme:C})=>C.spaces[7]};
`,S=(0,n.default)(o.Z)`
  font-style: italic;
`;function M({canUpdate:C,contentTypes:{collectionTypes:D,singleTypes:P},currentWorkflow:x,workflows:$}){const{formatMessage:h,locale:j}=(0,w.Z)(),R=(0,E.I0)(),[U,N,z]=(0,c.U$)("name"),[I,Z,L]=(0,c.U$)("contentTypes"),G=(0,y.Xe)(j,{sensitivity:"base"});return t.createElement(m.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(d.P,{col:6},t.createElement(s.o,{...U,id:U.name,disabled:!C,label:h({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:N.error??!1,onChange:p=>{R((0,r.rI)({name:p.target.value})),z.setValue(p.target.value)},required:!0})),t.createElement(d.P,{col:6},t.createElement(i.NU,{...I,customizeContent:p=>h({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:p.length}),disabled:!C,error:Z.error??!1,id:I.name,label:h({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:p=>{R((0,r.rI)({contentTypes:p})),L.setValue(p)},placeholder:h({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...D.length>0?[{label:h({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:D.sort((p,k)=>G.compare(p.info.displayName,k.info.displayName)).map(p=>({label:p.info.displayName,value:p.uid}))}]:[],...P.length>0?[{label:h({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:P.map(p=>({label:p.info.displayName,value:p.uid}))}]:[]].map(p=>"children"in p?t.createElement(i.Ab,{key:p.label,label:p.label,values:p.children.map(k=>k.value.toString())},p.children.map(k=>{const{name:F}=$.find(T=>(x&&T.id!==x.id||!x)&&T.contentTypes.includes(k.value))??{};return t.createElement(g,{key:k.value,value:k.value},h({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:k.label,name:F,em:(...T)=>t.createElement(o.Z,{as:"em",fontWeight:"bold"},T),i:(...T)=>t.createElement(S,null,T)}))})):t.createElement(i.ML,{key:p.value,value:p.value},p.label)))))}const O=a().shape({uid:a().string.isRequired,info:a().shape({displayName:a().string.isRequired}).isRequired});M.defaultProps={canUpdate:!0,currentWorkflow:void 0},M.propTypes={canUpdate:a().bool,contentTypes:a().shape({collectionTypes:a().arrayOf(O).isRequired,singleTypes:a().arrayOf(O).isRequired}).isRequired,currentWorkflow:a().object,workflows:a().array.isRequired}},3848:(b,f,e)=>{"use strict";e.d(f,{E:()=>d,I:()=>s});var t=e(18172),i=e(18446),o=e.n(i),m=e(86978);const d={status:"loading",serverState:{workflow:null},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[]},isDirty:!1,hasDeletedServerStages:!1}}};function s(c=d,l){return(0,t.Uy)(c,a=>{const{payload:w}=l;switch(l.type){case m.qZ:{const{status:E,workflow:n}=w;a.status=E,n&&(a.serverState.workflow=n,a.clientState.currentWorkflow.data={...n,stages:n.stages.map(r=>({...r,color:r?.color??m.FT}))}),a.clientState.currentWorkflow.hasDeletedServerStages=!1;break}case m.gu:{a.clientState.currentWorkflow.data=d.clientState.currentWorkflow.data,a.serverState=d.serverState;break}case m.x4:{const{stageId:E}=w,{currentWorkflow:n}=c.clientState;a.clientState.currentWorkflow.data.stages=n.data.stages.filter(r=>(r?.id??r.__temp_key__)!==E),n.hasDeletedServerStages||(a.clientState.currentWorkflow.hasDeletedServerStages=!!(c.serverState.workflow?.stages??[]).find(r=>r.id===E));break}case m.Ot:{const{currentWorkflow:E}=c.clientState;E.data||(a.clientState.currentWorkflow.data={stages:[]});const n=y(a.clientState.currentWorkflow.data.stages);a.clientState.currentWorkflow.data.stages.push({...w,color:w?.color??m.FT,__temp_key__:n});break}case m.Nj:{const{currentWorkflow:E}=c.clientState,{stageId:n,...r}=w;a.clientState.currentWorkflow.data.stages=E.data.stages.map(g=>(g.id??g.__temp_key__)===n?{...g,...r}:g);break}case m.$k:{const{currentWorkflow:{data:{stages:E}}}=c.clientState,{newIndex:n,oldIndex:r}=w;if(n>=0&&n<E.length){const g=E[r];let S=[...E];S.splice(r,1),S.splice(n,0,g),a.clientState.currentWorkflow.data.stages=S}break}case m.VS:{a.clientState.currentWorkflow.data={...a.clientState.currentWorkflow.data,...w};break}default:break}c.clientState.currentWorkflow.data&&a.serverState.workflow?a.clientState.currentWorkflow.isDirty=!o()((0,t.Vk)(a.clientState.currentWorkflow).data,a.serverState.workflow):a.clientState.currentWorkflow.isDirty=!0})}const y=(c=[])=>{const l=c.map(a=>a.id??a.__temp_key__);return Math.max(...l,-1)+1}},5318:(b,f,e)=>{"use strict";e.d(f,{k:()=>o,s:()=>m});var t=e(20468),i=e(86978);function o(d){if(!d)return null;const y=Object.entries(t.W.colors).filter(([,c])=>c.toUpperCase()===d.toUpperCase()).reduce((c,[l])=>(i.lv?.[l]&&(c=l),c),null);return y?{themeColorName:y,name:i.lv[y]}:null}function m(){return Object.entries(i.lv).map(([d,s])=>({hex:t.W.colors[d].toUpperCase(),name:s}))}},66578:(b,f,e)=>{"use strict";e.d(f,{V:()=>m});var t=e(36968),i=e.n(t),o=e(87561);async function m({values:d,formatMessage:s}){const y=o.Ry({contentTypes:o.IX().of(o.Z_()),name:o.Z_().max(255,s({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:o.IX().of(o.Ry().shape({name:o.Z_().required(s({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,s({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",s({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(c){const{options:{context:l}}=this;return l.stages.filter(a=>a.name===c).length===1}),color:o.Z_().required(s({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i)})).min(1)});try{return await y.validate(d,{abortEarly:!1,context:d}),!0}catch(c){let l={};return c instanceof o.p8&&c.inner.forEach(a=>{i()(l,a.path,a.message)}),l}}},51584:(b,f,e)=>{var t=e(44239),i=e(37005),o="[object Boolean]";function m(d){return d===!0||d===!1||i(d)&&t(d)==o}b.exports=m},7654:(b,f,e)=>{var t=e(81763);function i(o){return t(o)&&o!=+o}b.exports=i},81763:(b,f,e)=>{var t=e(44239),i=e(37005),o="[object Number]";function m(d){return typeof d=="number"||i(d)&&t(d)==o}b.exports=m},97104:(b,f,e)=>{"use strict";e.d(f,{U:()=>E,y:()=>a});var t=e(85893),i=e(67294),o=e(88972),m=e(7535),d=e(73879),s=e(78549),y=e(75878),c=e(50781);const l=({theme:n,expanded:r,variant:g,disabled:S,error:M})=>M?`1px solid ${n.colors.danger600} !important`:S?`1px solid ${n.colors.neutral150}`:r?`1px solid ${n.colors.primary600}`:g==="primary"?`1px solid ${n.colors.neutral0}`:`1px solid ${n.colors.neutral100}`,a=(0,o.default)(s.Z)``,w=(0,o.default)(c.x)`
  border: ${l};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:n})=>n.colors.primary600};

    ${a} {
      color: ${({theme:n,expanded:r})=>r?void 0:n.colors.primary700};
    }

    ${s.Z} {
      color: ${({theme:n,expanded:r})=>r?void 0:n.colors.primary600};
    }

    & > ${y.k} {
      background: ${({theme:n})=>n.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:n})=>n.colors.primary200};
    }
  }
`,E=({children:n,disabled:r=!1,error:g,expanded:S=!1,hasErrorMessage:M=!0,id:O,onToggle:C,toggle:D,size:P="M",variant:x="primary",shadow:$})=>{const h=(0,d.M)(O),j=i.useMemo(()=>({expanded:S,onToggle:C,toggle:D,id:h,size:P,variant:x,disabled:r}),[r,S,h,C,P,D,x]);return(0,t.jsxs)(m.S.Provider,{value:j,children:[(0,t.jsx)(w,{"data-strapi-expanded":S,disabled:r,"aria-disabled":r,expanded:S,hasRadius:!0,variant:x,error:g,shadow:$,children:n}),g&&M&&(0,t.jsx)(c.x,{paddingTop:1,children:(0,t.jsx)(s.Z,{variant:"pi",textColor:"danger600",children:g})})]})}},37362:(b,f,e)=>{"use strict";e.d(f,{v:()=>m});var t=e(85893),i=e(7535),o=e(50781);const m=({children:d,...s})=>{const{expanded:y,id:c}=(0,i.A)();if(!y)return null;const l=`accordion-content-${c}`,a=`accordion-label-${c}`,w=`accordion-desc-${c}`;return(0,t.jsx)(o.x,{role:"region",id:l,"aria-labelledby":a,"aria-describedby":w,...s,children:d})}},7535:(b,f,e)=>{"use strict";e.d(f,{A:()=>o,S:()=>i});var t=e(67294);const i=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),o=()=>(0,t.useContext)(i)},27375:(b,f,e)=>{"use strict";e.d(f,{B:()=>n});var t=e(85893),i=e(21514),o=e(88972),m=e(97104),d=e(7535);const s=({expanded:r,disabled:g,variant:S})=>{let M="neutral100";return r?M="primary100":g?M="neutral150":S==="primary"&&(M="neutral0"),M};var y=e(90139),c=e(80907),l=e(75878),a=e(78549);const w=(0,o.default)(y.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:r,expanded:g})=>g?r.colors.primary600:r.colors.neutral500};
    }
  }
`,E=(0,o.default)(l.k)`
  min-height: ${({theme:r,size:g})=>r.sizes.accordions[g]};
  border-radius: ${({theme:r,expanded:g})=>g?`${r.borderRadius} ${r.borderRadius} 0 0`:r.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:r})=>r.colors.primary600};
      }
    }
  }
`,n=({title:r,description:g,as:S="span",togglePosition:M="right",action:O,...C})=>{const{onToggle:D,toggle:P,expanded:x,id:$,size:h,variant:j,disabled:R}=(0,d.A)(),U=`accordion-content-${$}`,N=`accordion-label-${$}`,z=`accordion-desc-${$}`,I=h==="M"?6:4,Z=h==="M"?I:I-2,L=s({expanded:x,disabled:R,variant:j}),G={as:S,fontWeight:h==="S"?"bold":void 0,id:N,textColor:x?"primary600":"neutral700",ellipsis:!0,variant:h==="M"?"delta":void 0},p=x?"primary600":"neutral600",k=x?"primary200":"neutral200",F=h==="M"?`${32/16}rem`:`${24/16}rem`,T=()=>{R||(P&&!D?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),P()):D&&D())},u=(0,t.jsx)(l.k,{justifyContent:"center",borderRadius:"50%",height:F,width:F,transform:x?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:k,cursor:R?"not-allowed":"pointer",onClick:T,shrink:0,children:(0,t.jsx)(c.J,{as:i.Z,width:h==="M"?`${11/16}rem`:`${8/16}rem`,color:x?"primary600":"neutral600"})});return(0,t.jsx)(E,{paddingBottom:Z,paddingLeft:I,paddingRight:I,paddingTop:Z,background:L,expanded:x,size:h,justifyContent:"space-between",cursor:R?"not-allowed":"",children:(0,t.jsxs)(l.k,{gap:3,flex:1,maxWidth:"100%",children:[M==="left"&&u,(0,t.jsx)(w,{onClick:T,"aria-disabled":R,"aria-expanded":x,"aria-controls":U,"aria-labelledby":N,"data-strapi-accordion-toggle":!0,expanded:x,type:"button",flex:1,minWidth:0,...C,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.y,{...G,children:r}),g&&(0,t.jsx)(a.Z,{as:"p",id:z,textColor:p,children:g})]})}),M==="right"&&(0,t.jsxs)(l.k,{gap:3,children:[u,O]}),M==="left"&&O]})})}}}]);
