"use strict";(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[2950],{52713:(S,E,t)=>{t.d(E,{r:()=>d});var e=t(67294),r=t(50781),n=t(45697),l=t.n(n),f=t(99168);function a(o,s,c){if(!o||!s)return{display:"none"};const{x:i,y:u}=c;return{transform:`translate(${i}px, ${u}px)`}}function d({renderItem:o}){const{itemType:s,isDragging:c,item:i,initialOffset:u,currentOffset:p,mouseOffset:y}=(0,f.useDragLayer)(O=>({item:O.getItem(),itemType:O.getItemType(),initialOffset:O.getInitialSourceClientOffset(),currentOffset:O.getSourceClientOffset(),isDragging:O.isDragging(),mouseOffset:O.getClientOffset()}));return c?e.createElement(r.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},e.createElement(r.x,{style:a(u,p,y)},o({type:s,item:i}))):null}d.propTypes={renderItem:l().func.isRequired}},7761:(S,E,t)=>{t.d(E,{pl:()=>o,aY:()=>$,q5:()=>p.q});var e=t(67294),r=t(60797),n=t(18172);const l={data:[],isLoading:!0},a=(L,A)=>(0,n.ZP)(L,m=>{switch(A.type){case"GET_DATA_SUCCEEDED":{m.data=A.data,m.isLoading=!1;break}case"GET_DATA_ERROR":{m.isLoading=!1;break}default:return m}}),o=({ssoEnabled:L})=>{const[A,m]=(0,e.useReducer)(a,l),R=(0,r.lm)(),{get:g}=(0,r.kY)();return(0,e.useEffect)(()=>{(async()=>{try{if(!L){m({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:v}=await g("/admin/providers");m({type:"GET_DATA_SUCCEEDED",data:v})}catch(v){console.error(v),m({type:"GET_DATA_ERROR"}),R({type:"warning",message:{id:"notification.error"}})}})()},[g,L,R]),A};var s=t(14293),c=t.n(s),i=t(86896),u=t(16550),p=t(71926);const y="strapi-notification-seat-limit",O="https://cloud.strapi.io/profile/billing",D="https://strapi.io/billing/request-seats",$=()=>{const{formatMessage:L}=(0,i.Z)();let{license:A,isError:m,isLoading:R}=(0,p.q)();const g=(0,r.lm)(),{pathname:T}=(0,u.TH)(),{enforcementUserCount:v,permittedSeats:I,licenseLimitStatus:C,isHostedOnStrapiCloud:h}=A;(0,e.useEffect)(()=>{if(m||R)return;const W=!c()(I)&&!window.sessionStorage.getItem(`${y}-${T}`)&&(C==="AT_LIMIT"||C==="OVER_LIMIT");let M;C==="OVER_LIMIT"?M="warning":C==="AT_LIMIT"&&(M="softWarning"),W&&g({type:M,message:L({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:C}),title:L({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:C,enforcementUserCount:v,permittedSeats:I}),link:{url:h?O:D,label:L({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:h})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${y}-${T}`,!0)}})},[g,A,T,L,R,I,C,v,h,m])}},71926:(S,E,t)=>{t.d(E,{q:()=>l});var e=t(67294),r=t(60797),n=t(88767);function l({enabled:f}={enabled:!0}){const{get:a}=(0,r.kY)(),{data:d,isError:o,isLoading:s}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:u}}=await a("/admin/license-limit-information");return u},{enabled:f}),c=d??{},i=e.useCallback(u=>(c?.features??[]).find(y=>y.name===u)?.options??{},[c?.features]);return{license:c,getFeature:i,isError:o,isLoading:s}}},43390:(S,E,t)=>{t.d(E,{eJ:()=>R,lx:()=>A,h4:()=>g,fC:()=>m});var e=t(67294),r=t(45349),n=t(57713),l=t(26789),f=t(79371),a=t(60797),d=t(60793),o=t(86896),s=t(52713),c=t(86978),i=t(75878),u=t(78549),p=t(21514),y=t(45697),O=t.n(y),D=t(88972);const P=(0,D.default)(i.k)`
  svg path {
    fill: ${({theme:T})=>T.colors.neutral600};
  }
`;function $({name:T}){return e.createElement(i.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.Q1)(300)},e.createElement(P,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},e.createElement(p.Z,{width:`${8/16}rem`})),e.createElement(u.Z,{fontWeight:"bold"},T))}$.propTypes={name:O().string.isRequired};function L({type:T,item:v}){switch(T){case c.uL.STAGE:return e.createElement($,{...v});default:return null}}function A(){return e.createElement(s.r,{renderItem:L})}function m({children:T}){return e.createElement(r.A,null,e.createElement(n.o,{tabIndex:-1},e.createElement(l.D,null,T)))}function R({href:T}){const{formatMessage:v}=(0,o.Z)();return e.createElement(a.rU,{startIcon:e.createElement(d.Z,null),to:T},v({id:"global.back",defaultMessage:"Back"}))}function g({title:T,subtitle:v,navigationAction:I,primaryAction:C}){return e.createElement(e.Fragment,null,e.createElement(a.SL,{name:T}),e.createElement(f.T,{navigationAction:I,primaryAction:C,title:T,subtitle:v}))}},38705:(S,E,t)=>{t.d(E,{uT:()=>L,fC:()=>R,Dx:()=>$});var e=t(67294),r=t(78549),n=t(75878),l=t(60881),f=t(48683),a=t(50781),d=t(37527),o=t(94101),s=t(15800),c=t(45697),i=t.n(c),u=t(86896),p=t(88972);const y=t.p+"0cd5f8915b265d5b1856.png",O="limits-title",D="https://strapi.io/pricing-cloud",P="https://strapi.io/contact-sales";function $({children:g}){return e.createElement(r.Z,{variant:"alpha",id:O},g)}$.propTypes={children:i().node.isRequired};function L({children:g}){return e.createElement(r.Z,{variant:"omega"},g)}L.propTypes={children:i().node.isRequired};function A(){const{formatMessage:g}=(0,u.Z)();return e.createElement(n.k,{gap:2,paddingTop:4},e.createElement(o.Q,{variant:"default",isExternal:!0,href:D},g({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),e.createElement(o.Q,{variant:"tertiary",isExternal:!0,href:P},g({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const m=p.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:g})=>`-${g.spaces[7]}`};
  margin-top: ${({theme:g})=>`-${g.spaces[7]}`};
  width: 360px;
`;function R({children:g,isOpen:T,onClose:v}){const{formatMessage:I}=(0,u.Z)();return T?e.createElement(l.P,{labelledBy:O},e.createElement(f.f,null,e.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},e.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},g,e.createElement(A,null)),e.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},e.createElement(m,{src:y,"aria-hidden":!0,alt:"",loading:"lazy"}),e.createElement(a.x,{display:"flex",position:"absolute",right:0,top:0},e.createElement(d.h,{icon:e.createElement(s.Z,null),"aria-label":I({id:"global.close",defaultMessage:"Close"}),onClick:v})))))):null}R.defaultProps={isOpen:!1},R.propTypes={children:i().node.isRequired,isOpen:i().bool,onClose:i().func.isRequired}},86978:(S,E,t)=>{t.d(E,{$k:()=>o,Ef:()=>p,FT:()=>i,Nj:()=>d,Ot:()=>a,VS:()=>s,_X:()=>y,gu:()=>n,lv:()=>c,qZ:()=>l,sN:()=>r,uL:()=>u,x4:()=>f});var e=t(20468);const r="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOW",f="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",a="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",s="Settings/Review_Workflows/WORKFLOW_UPDATE",c={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},i=e.W.colors.primary600,u={STAGE:"stage"},p="numberOfWorkflows",y="stagesPerWorkflow"},52258:(S,E,t)=>{t.d(E,{n:()=>n});var e=t(60797),r=t(88767);function n(l={}){const{get:f}=(0,e.kY)(),{id:a="",...d}=l,o={populate:"stages"},{data:s,isLoading:c,status:i,refetch:u}=(0,r.useQuery)(["review-workflows","workflows",a],async()=>(await f(`/admin/review-workflows/workflows/${a}`,{params:{...o,...d}})).data);let p=[];return a&&s?.data?p=[s.data]:Array.isArray(s?.data)&&(p=s.data),{meta:s?.meta??{},workflows:p,isLoading:c,status:i,refetch:u}}},4071:(S,E,t)=>{t.d(E,{G$:()=>r,Gt:()=>i,MG:()=>e,MR:()=>d,T:()=>a,TP:()=>n,Vb:()=>f,Vv:()=>s,ZC:()=>c,gK:()=>l,wG:()=>o});const e="success-light",r="danger-light",n="default",l="tertiary",f="secondary",a="danger",d="success",o="ghost",s=[e,r],c=[n,l,f,a,d,o,...s],i=["S","M","L"]},62485:(S,E,t)=>{t.d(E,{PD:()=>d,sg:()=>l,tB:()=>a,yP:()=>f});var e=t(4071),r=t(10574);const n=o=>o===e.MG||o===e.G$?`${o.substring(0,o.lastIndexOf("-"))}`:o===e.gK?"neutral":o===e.TP||o===e.Vb||e.ZC.every(s=>s!==o)?"primary":`${o}`,l=({theme:o})=>`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${r.Z} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `,f=({theme:o,variant:s})=>[...e.Vv,e.Vb].includes(s)?`
      background-color: ${o.colors.neutral0};
    `:s===e.gK?`
      background-color: ${o.colors.neutral100};
    `:s===e.wG?`
      background-color: ${o.colors.neutral100};
    `:s===e.TP?`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:`
    border: 1px solid ${o.colors[`${n(s)}500`]};
    background: ${o.colors[`${n(s)}500`]};
  `,a=({theme:o,variant:s})=>[...e.Vv,e.Vb].includes(s)?`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${n(s)}600`]};
      ${r.Z} {
        color: ${o.colors[`${n(s)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${n(s)}600`]};
        }
      }
    `:s===e.gK?`
      background-color: ${o.colors.neutral150};
    `:`
    border: 1px solid ${o.colors[`${n(s)}600`]};
    background: ${o.colors[`${n(s)}600`]};
  `,d=({theme:o,variant:s})=>{switch(s){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${o.colors[`${n(s)}200`]};
          background: ${o.colors[`${n(s)}100`]};
          ${r.Z} {
            color: ${o.colors[`${n(s)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${n(s)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${r.Z} {
            color: ${o.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${o.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${r.Z} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${o.colors[`${n(s)}600`]};
          background: ${o.colors[`${n(s)}600`]};
          ${r.Z} {
            color: ${o.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `}}},94101:(S,E,t)=>{t.d(E,{Q:()=>c});var e=t(85893),r=t(67294),n=t(88972),l=t(62485),f=t(20501),a=t(53342),d=t(96987),o=t(10574);const s=(0,n.default)(f.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${l.sg}
    &:active {
      ${l.sg}
    }
  }

  &:hover {
    ${l.yP}
  }

  &:active {
    ${l.tB}
  }

  ${l.PD}
`,c=r.forwardRef(({variant:i="default",startIcon:u,endIcon:p,disabled:y=!1,children:O,size:D="S",as:P=a.f,...$},L)=>{const A=D==="S"?2:"10px",m=4;return(0,e.jsxs)(s,{ref:L,"aria-disabled":y,size:D,variant:i,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:A,paddingLeft:m,paddingRight:m,paddingTop:A,pointerEvents:y?"none":void 0,...$,as:P||a.f,children:[u&&(0,e.jsx)(d.k,{"aria-hidden":!0,children:u}),(0,e.jsx)(o.Z,{variant:D==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:O}),p&&(0,e.jsx)(d.k,{"aria-hidden":!0,children:p})]})});c.displayName="LinkButton"}}]);
