(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[8880],{67100:(P,B,o)=>{"use strict";o.d(B,{P1:()=>H});var a="NOT_FOUND";function T(E){var O;return{get:function(V){return O&&E(O.key,V)?O.value:a},put:function(V,K){O={key:V,value:K}},getEntries:function(){return O?[O]:[]},clear:function(){O=void 0}}}function m(E,O){var j=[];function V(X){var J=j.findIndex(function(oe){return O(X,oe.key)});if(J>-1){var te=j[J];return J>0&&(j.splice(J,1),j.unshift(te)),te.value}return a}function K(X,J){V(X)===a&&(j.unshift({key:X,value:J}),j.length>E&&j.pop())}function Y(){return j}function $(){j=[]}return{get:V,put:K,getEntries:Y,clear:$}}var C=function(O,j){return O===j};function v(E){return function(j,V){if(j===null||V===null||j.length!==V.length)return!1;for(var K=j.length,Y=0;Y<K;Y++)if(!E(j[Y],V[Y]))return!1;return!0}}function R(E,O){var j=typeof O=="object"?O:{equalityCheck:O},V=j.equalityCheck,K=V===void 0?C:V,Y=j.maxSize,$=Y===void 0?1:Y,X=j.resultEqualityCheck,J=v(K),te=$===1?T(J):m($,J);function oe(){var le=te.get(arguments);if(le===a){if(le=E.apply(null,arguments),X){var pe=te.getEntries(),_e=pe.find(function(Re){return X(Re.value,le)});_e&&(le=_e.value)}te.put(arguments,le)}return le}return oe.clearCache=function(){return te.clear()},oe}function M(E){var O=Array.isArray(E[0])?E[0]:E;if(!O.every(function(V){return typeof V=="function"})){var j=O.map(function(V){return typeof V=="function"?"function "+(V.name||"unnamed")+"()":typeof V}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+j+"]")}return O}function U(E){for(var O=arguments.length,j=new Array(O>1?O-1:0),V=1;V<O;V++)j[V-1]=arguments[V];var K=function(){for(var $=arguments.length,X=new Array($),J=0;J<$;J++)X[J]=arguments[J];var te=0,oe,le={memoizeOptions:void 0},pe=X.pop();if(typeof pe=="object"&&(le=pe,pe=X.pop()),typeof pe!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof pe+"]");var _e=le,Re=_e.memoizeOptions,je=Re===void 0?j:Re,De=Array.isArray(je)?je:[je],ze=M(X),Je=E.apply(void 0,[function(){return te++,pe.apply(null,arguments)}].concat(De)),qe=E(function(){for(var Ve=[],ht=ze.length,et=0;et<ht;et++)Ve.push(ze[et].apply(null,arguments));return oe=Je.apply(null,Ve),oe});return Object.assign(qe,{resultFunc:pe,memoizedResultFunc:Je,dependencies:ze,lastResult:function(){return oe},recomputations:function(){return te},resetRecomputations:function(){return te=0}}),qe};return K}var H=U(R),u=function(O,j){if(j===void 0&&(j=H),typeof O!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof O));var V=Object.keys(O),K=j(V.map(function(Y){return O[Y]}),function(){for(var Y=arguments.length,$=new Array(Y),X=0;X<Y;X++)$[X]=arguments[X];return $.reduce(function(J,te,oe){return J[V[oe]]=te,J},{})});return K}},71243:(P,B,o)=>{"use strict";o.d(B,{Z:()=>je});var a=o(67294),T=o(50781),m=o(60797),C=o(96433),v=o(95525),R=o(90044),M=o(4664),U=o(9383),H=o(90840),u=o(6459),E=o(5403),O=o(9148),j=o(33863),V=o(81126),K=o(45311),Y=o(11748),$=o(28248),X=o(59424),J=o(52276),te=o(45697),oe=o.n(te),le=o(88972);const pe={biginteger:C.Z,boolean:v.Z,collectionType:R.Z,component:M.Z,contentType:R.Z,date:U.Z,datetime:U.Z,decimal:C.Z,dynamiczone:H.Z,email:u.Z,enum:E.Z,enumeration:E.Z,file:O.Z,files:O.Z,float:C.Z,integer:C.Z,json:j.Z,JSON:j.Z,media:O.Z,number:C.Z,password:V.Z,relation:K.Z,richtext:Y.Z,singleType:$.Z,string:X.Z,text:X.Z,time:U.Z,timestamp:U.Z,uid:J.Z},_e=(0,le.default)(T.x)`
  svg {
    height: 100%;
    width: 100%;
  }
`,Re=({type:De,customField:ze,...Je})=>{const qe=(0,m.mZ)();let Ne=pe[De];if(ze){const{icon:Ve}=qe.get(ze);Ve&&(Ne=Ve)}return pe[De]?a.createElement(_e,{height:(0,m.Q1)(24),width:(0,m.Q1)(32),shrink:0,...Je,"aria-hidden":!0},a.createElement(T.x,{as:Ne})):null};Re.defaultProps={customField:null},Re.propTypes={type:oe().string.isRequired,customField:oe().string};const je=Re},25237:(P,B,o)=>{"use strict";o.d(B,{c:()=>ta});var a=o(40010),T=o(33075),m=o(83522),C=o(73141),v=o(60793),R=o(69858),M=o(87273),U=o(49117),H=o(45715),u=o(78748),E=o(61967),O=o(62757),j=o(67674),V=o(18454),K=o(46236),Y=o(62430),$=o(57213),X=o(30531),J=o(49762),te=o(95754),oe=o(8675),le=o(285),pe=o(14530),_e=o(92869),Re=o(80606),je=o(96322),De=o(47607),ze=o(39953),Je=o(76768),qe=o(41518),Ne=o(61182),Ve=o(46308),ht=o(90506),et=o(17144),eo=o(40495),to=o(83974),Lt=o(69767),$t=o(31335),It=o(43987),St=o(95161),an=o(46948),ge=o(34792),Bt=o(1030),on=o(2953),rn=o(58889),yt=o(28219),it=o(73155),sn=o(52909),ln=o(36002),dn=o(21833),cn=o(6799),un=o(46509),_t=o(26974),jt=o(55814),Ft=o(9932),Ut=o(46822),bt=o(17554),Wt=o(70907),Nt=o(38588),no=o(68573),mn=o(55086),pn=o(49231),gn=o(19517),se=o(57422),fn=o(19224),hn=o(45287),yn=o(33999),bn=o(35575),vn=o(85068),En=o(98860),Kt=o(77543),Mn=o(84410),Cn=o(24804),Tn=o(4452),xn=o(4181),Rn=o(20244),On=o(27449),An=o(69542),Pn=o(41681),Zn=o(4026),Dn=o(95899),zt=o(71891),Ln=o(10386),$n=o(78971),In=o(36670),vt=o(78870),Sn=o(97545),kt=o(66570),ao=o(9459),wt=o(75546),Bn=o(85362),_n=o(12978),Et=o(24007),Ht=o(32672),jn=o(54535),Fn=o(44437),Un=o(56886),Wn=o(3841),Nn=o(21679),Kn=o(76891),zn=o(21818),kn=o(34759),wn=o(92726),Hn=o(33286),Vn=o(95793),Mt=o(47904),Gn=o(48412),Vt=o(82721),Yn=o(94885),Gt=o(71125),Ge=o(54770),Xn=o(40814),Ke=o(1776),Ct=o(91955),p=o(80267),Qn=o(8127),Tt=o(45057),ke=o(52551),tt=o(54969),ue=o(51661),oo=o(65395),Jn=o(62301),ro=o(72551),qn=o(26966),ea=o(48216),k=o(32525);const ta={alien:a.Z,apps:T.Z,archive:m.Z,arrowDown:C.Z,arrowLeft:v.Z,arrowRight:R.Z,arrowUp:M.Z,attachment:U.Z,bell:H.Z,bold:u.Z,book:E.Z,briefcase:O.Z,brush:j.Z,bulletList:V.Z,calendar:K.Z,car:Y.Z,cast:$.Z,chartBubble:X.Z,chartCircle:J.Z,chartPie:te.Z,check:oe.Z,clock:le.Z,cloud:pe.Z,code:_e.Z,cog:Re.Z,collapse:je.Z,command:De.Z,connector:ze.Z,crop:Je.Z,crown:qe.Z,cube:Ne.Z,cup:Ve.Z,cursor:ht.Z,dashboard:et.Z,database:eo.Z,discuss:to.Z,doctor:Lt.Z,earth:$t.Z,emotionHappy:It.Z,emotionUnhappy:St.Z,envelop:an.Z,exit:ge.Z,expand:Bt.Z,eye:on.Z,feather:rn.Z,file:yt.Z,fileError:it.Z,filePdf:sn.Z,filter:ln.Z,folder:dn.Z,gate:cn.Z,gift:un.Z,globe:_t.Z,grid:jt.Z,handHeart:Ft.Z,hashtag:Ut.Z,headphone:bt.Z,heart:Wt.Z,house:Nt.Z,information:no.Z,italic:mn.Z,key:pn.Z,landscape:gn.Z,layer:se.Z,layout:fn.Z,lightbulb:hn.Z,link:yn.Z,lock:bn.Z,magic:vn.Z,manyToMany:En.Z,manyToOne:Kt.Z,manyWays:Mn.Z,medium:Cn.Z,message:Tn.Z,microphone:xn.Z,monitor:Rn.Z,moon:On.Z,music:An.Z,oneToMany:Pn.Z,oneToOne:Zn.Z,oneWay:Dn.Z,paint:zt.Z,paintBrush:Ln.Z,paperPlane:$n.Z,pencil:In.Z,phone:vt.Z,picture:Sn.Z,pin:kt.Z,pinMap:ao.Z,plane:wt.Z,play:Bn.Z,plus:_n.Z,priceTag:Et.Z,puzzle:Ht.Z,question:jn.Z,quote:Fn.Z,repeat:Un.Z,restaurant:Wn.Z,rocket:Nn.Z,rotate:Kn.Z,scissors:zn.Z,search:kn.Z,seed:wn.Z,server:Hn.Z,shield:Vn.Z,shirt:Mt.Z,shoppingCart:Gn.Z,slideshow:Vt.Z,stack:Yn.Z,star:Gt.Z,store:Ge.Z,strikeThrough:Xn.Z,sun:Ke.Z,television:Ct.Z,thumbDown:p.Z,thumbUp:Qn.Z,train:Tt.Z,twitter:ke.Z,typhoon:tt.Z,underline:ue.Z,user:oo.Z,volumeMute:Jn.Z,volumeUp:ro.Z,walk:qn.Z,wheelchair:ea.Z,write:k.Z}},30248:(P,B,o)=>{"use strict";o.d(B,{Z:()=>m});var a=o(67294);const m=(0,a.createContext)()},6356:(P,B,o)=>{"use strict";o.d(B,{Z:()=>m});var a=o(67294);const m=(0,a.createContext)()},27523:(P,B,o)=>{"use strict";o.d(B,{Z:()=>C});var a=o(67294),T=o(30248);const C=()=>(0,a.useContext)(T.Z)},47558:(P,B,o)=>{"use strict";o.d(B,{Z:()=>C});var a=o(67294),T=o(6356);const C=()=>(0,a.useContext)(T.Z)},21663:(P,B,o)=>{"use strict";o.r(B),o.d(B,{default:()=>rl});var a=o(67294),T=o(45349),m=o(60797),C=o(64593),v=o(86896),R=o(16550),M=o(50781),U=o(90139),H=o(80907),u=o(85893),E=o(88972);const O=(e,n,r)=>{if(!n)return;let l=Array.isArray(n)?n:[];if(!Array.isArray(n)&&typeof n=="object"&&(l=[n?.desktop,n?.tablet,n?.mobile]),l.length>0)return l.reduce((c,d,g)=>{if(d)switch(g){case 0:return`${c}${e}: ${r.spaces[d]};`;case 1:return`${c}${r.mediaQueries.tablet}{${e}: ${r.spaces[d]};}`;case 2:return`${c}${r.mediaQueries.mobile}{${e}: ${r.spaces[d]};}`;default:return c}return c},"");const i=r.spaces[n]||n;return`${e}: ${i};`};function j(e,n){return typeof e=="string"?!1:n in e}function V(e){return e&&typeof e=="object"&&!Array.isArray(e)}function K(e,n,r){return n&&j(e,n)?e[n]:r}const Y={color:!0,cursor:!0,height:!0,width:!0},$=E.default.div.withConfig({shouldForwardProp:(e,n)=>!Y[e]&&n(e)})`
  // Font
  font-size: ${({fontSize:e,theme:n})=>K(n.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:n})=>K(e.colors,n,n)};
  color: ${({theme:e,color:n})=>K(e.colors,n,void 0)};

  // Spaces
  ${({theme:e,padding:n})=>O("padding",n,e)}
  ${({theme:e,paddingTop:n})=>O("padding-top",n,e)}
  ${({theme:e,paddingRight:n})=>O("padding-right",n,e)}
  ${({theme:e,paddingBottom:n})=>O("padding-bottom",n,e)}
  ${({theme:e,paddingLeft:n})=>O("padding-left",n,e)}
  ${({theme:e,marginLeft:n})=>O("margin-left",n,e)}
  ${({theme:e,marginRight:n})=>O("margin-right",n,e)}
  ${({theme:e,marginTop:n})=>O("margin-top",n,e)}
  ${({theme:e,marginBottom:n})=>O("margin-bottom",n,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:n})=>n?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:n})=>n?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:n,borderRadius:r})=>n?e.borderRadius:r};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:n})=>K(n.colors,e,void 0)};
  border: ${({theme:e,borderColor:n,borderStyle:r,borderWidth:l})=>{if(n&&!r&&typeof l>"u")return`1px solid ${e.colors[n]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:n})=>K(e.shadows,n,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:n})=>e?e(n):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:n})=>K(n.spaces,e,e)};
  right: ${({right:e,theme:n})=>K(n.spaces,e,e)};
  top: ${({top:e,theme:n})=>K(n.spaces,e,e)};
  bottom: ${({bottom:e,theme:n})=>K(n.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:n})=>K(n.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:n})=>K(n.spaces,e,e)};
  min-width: ${({minWidth:e,theme:n})=>K(n.spaces,e,e)};
  height: ${({height:e,theme:n})=>K(n.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:n})=>K(n.spaces,e,e)};
  min-height: ${({minHeight:e,theme:n})=>K(n.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:n})=>K(e.lineHeights,n,n)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,X=(0,E.default)($)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:n})=>O("gap",n,e)}
`,J=e=>{const{gap:n="0",gridCols:r=12,...l}=e;return(0,u.jsx)(X,{gap:n,gridCols:r,...l})},te=`${232/16}rem`,oe=(0,E.default)(J)`
  width: ${te};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,le=({ariaLabel:e,...n})=>(0,u.jsx)(oe,{"aria-label":e,as:"nav",...n});var pe=o(34759);const _e={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Re=a["useId".toString()]||(()=>{});let je=0;const De=e=>{const[n,r]=(0,a.useState)(Re());return(0,a.useLayoutEffect)(()=>{e||r(l=>l??String(je++))},[e]),e?.toString()??(n||"")},ze=e=>{const n=(0,a.useRef)();return(0,a.useEffect)(()=>{n.current=e}),n.current},Je=(0,E.default)($)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,qe=({unsetMargin:e=!0,...n})=>(0,u.jsx)(Je,{...n,background:"neutral150",as:"hr",unsetMargin:e}),Ne=e=>(0,u.jsx)("form",{...e,role:"search"});var Ve=o(15800);function ht(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function et(...e){return n=>e.forEach(r=>ht(r,n))}function eo(...e){return t.useCallback(et(...e),e)}const to=e=>({theme:n,size:r})=>n.sizes[e][r],Lt=(e="&")=>({theme:n,hasError:r=!1})=>(0,E.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${r?n.colors.danger600:n.colors.primary600};
      box-shadow: ${r?n.colors.danger600:n.colors.primary600} 0px 0px 0px 2px;
    }
  `,$t=({theme:e})=>(0,E.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,It=(0,a.createContext)({id:"",required:!1}),St=()=>(0,a.useContext)(It),an={direction:!0},ge=(0,E.default)($).withConfig({shouldForwardProp:(e,n)=>!an[e]&&n(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:n})=>n?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:n})=>O("gap",e,n)};
  justify-content: ${({justifyContent:e})=>e};
`,Bt={S:6.5,M:10.5},on=(0,a.forwardRef)(({endAction:e,startAction:n,disabled:r=!1,onChange:l,size:i="M",...c},d)=>{const{id:g,error:f,hint:y,name:b,required:h}=St();let D;f?D=`${g}-error`:y&&(D=`${g}-hint`);const L=!!f,Z=_=>{!r&&l&&l(_)};return(0,u.jsxs)(yt,{justifyContent:"space-between",hasError:L,disabled:r,children:[n?(0,u.jsx)($,{paddingLeft:3,paddingRight:2,children:n}):null,(0,u.jsx)(rn,{id:g,name:b,ref:d,"aria-describedby":D,"aria-invalid":L,"aria-disabled":r,disabled:r,"data-disabled":r?"":void 0,hasLeftAction:!!n,hasRightAction:!!e,onChange:Z,"aria-required":h,$size:i,...c}),e?(0,u.jsx)($,{paddingLeft:2,paddingRight:3,children:e}):null]})}),rn=E.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${Bt[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:n})=>n?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:n})=>n?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${Bt[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,yt=(0,E.default)(ge)`
  border: 1px solid ${({theme:e,hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${Lt()}

  ${({theme:e,disabled:n})=>n?(0,E.css)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,it=E.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,sn=(0,E.default)(ge)`
  font-size: 1.6rem;
  padding: 0;
`,ln=(0,a.forwardRef)(({label:e,children:n,...r},l)=>(0,u.jsxs)(sn,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...r,as:"button",ref:l,children:[(0,u.jsx)(it,{as:"span",children:e}),(0,a.cloneElement)(n,{"aria-hidden":!0,focusable:!1})]})),dn=(0,a.forwardRef)(({children:e,name:n,error:r,hint:l,id:i,required:c=!1,...d},g)=>{const f=De(i),y=(0,a.useMemo)(()=>({name:n,id:f,error:r,hint:l,required:c}),[r,f,l,n,c]);return(0,u.jsx)($,{ref:g,...d,children:(0,u.jsx)(It.Provider,{value:y,children:e})})}),cn="[@strapi/design-system]:",un=e=>{const n=e;let r=!1;if(typeof n!="function")throw new TypeError(`${cn} once requires a function parameter`);return(...l)=>{r||(n(...l),r=!0)}},_t="alpha",jt="beta",Ft="delta",Ut="epsilon",bt="omega",Wt="pi",Nt="sigma",no=[_t,jt,Ft,Ut,bt,Wt,Nt],mn=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,pn=({variant:e=bt,theme:n})=>{switch(e){case _t:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case jt:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case Ft:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case Ut:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case bt:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case Wt:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case Nt:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}},gn={fontSize:!0,fontWeight:!0},se=E.default.span.withConfig({shouldForwardProp:(e,n)=>!gn[e]&&n(e)})`
  ${pn}
  ${mn}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:n})=>K(e.fontWeights,n,void 0)};
  font-size: ${({theme:e,fontSize:n})=>K(e.fontSizes,n,void 0)};
  line-height: ${({theme:e,lineHeight:n})=>K(e.lineHeights,n,n)};
  color: ${({theme:e,textColor:n})=>e.colors[n||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,fn=un(console.warn),hn=(0,a.forwardRef)(({children:e,action:n,required:r,...l},i)=>{const{id:c,required:d}=St(),g=d||r;return r!==void 0&&fn('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,u.jsxs)(yn,{ref:i,variant:"pi",textColor:"neutral800",htmlFor:c,fontWeight:"bold",as:"label",...l,children:[e,g&&(0,u.jsx)(bn,{textColor:"danger600",children:"*"}),n&&(0,u.jsx)(vn,{marginLeft:1,children:n})]})}),yn=(0,E.default)(se)`
  display: flex;
  align-items: center;
`,bn=(0,E.default)(se)`
  line-height: 0;
`,vn=(0,E.default)(ge)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,En=(0,E.default)(Ve.Z)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,Kt=(0,E.default)(pe.Z)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Mn=E.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${Kt} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${yt} {
    border: 1px solid transparent;
  }

  ${Lt(yt)}
`,Cn=(0,a.forwardRef)(({name:e,size:n="M",children:r,value:l="",onClear:i,clearLabel:c,...d},g)=>{const f=(0,a.useRef)(null),y=l.length>0,b=D=>{i(D),f.current.focus()},h=et(g,f);return(0,u.jsx)(Mn,{children:(0,u.jsxs)(dn,{name:e,children:[(0,u.jsx)(it,{children:(0,u.jsx)(hn,{children:r})}),(0,u.jsx)(on,{ref:h,value:l,startAction:(0,u.jsx)(Kt,{"aria-hidden":!0}),size:n,endAction:y?(0,u.jsx)(ln,{label:c,onClick:b,children:(0,u.jsx)(En,{})}):void 0,...d})]})})}),Tn=e=>{const[n,r]=(0,a.useState)(!1),l=(0,a.useRef)(null),i=()=>{typeof l.current=="number"&&(clearTimeout(l.current),l.current=null)};return(0,a.useEffect)(()=>()=>{i()},[]),{visible:n,onFocus:()=>{r(!0)},onBlur:()=>{r(!1)},onMouseEnter:()=>{l.current=setTimeout(()=>{r(!0)},e)},onMouseLeave:()=>{i(),r(!1)}}},xn=(e,n)=>{const r=(e.width-n.width)/2,l=n.left-r,i=n.top+n.height+8+window.pageYOffset;return{left:l,top:i}},Rn=(e,n)=>{const r=(e.height-n.height)/2,l=n.left+n.width+8,i=n.top-r+window.pageYOffset;return{left:l,top:i}},On=(e,n)=>{const r=(e.height-n.height)/2,l=n.left-e.width-8,i=n.top-r+window.pageYOffset;return{left:l,top:i}},An=(e,n)=>{const r=(e.width-n.width)/2;let l=n.left-r,i=n.top-e.height-8+window.pageYOffset;const c=window.innerWidth-n.right;return n.left+e.width-c>window.innerWidth?(l=n.left-e.width-8,i=n.top+window.scrollY-n.height/2):l<0?(l=n.width+n.left+8,i=n.top+window.scrollY-e.height/2+8):i<0&&l>0&&(i=n.top+n.height+8),{left:l,top:i}},Pn=(e,n,r)=>{const l=e.getBoundingClientRect(),i=n.getBoundingClientRect();return r==="bottom"?xn(l,i):r==="right"?Rn(l,i):r==="left"?On(l,i):An(l,i)},Zn=(e,n)=>{const r=(0,a.useRef)(null),l=(0,a.useRef)(null);return(0,a.useLayoutEffect)(()=>{if(e){const i=r.current,c=l.current;if(i&&c){const d=Pn(i,c,n);i.style.left=`${d.left}px`,i.style.top=`${d.top}px`}}},[n,e]),{tooltipWrapperRef:r,toggleSourceRef:l}};var Dn=o(73935);const zt=a.forwardRef(({container:e=globalThis?.document?.body,...n},r)=>e?(0,Dn.createPortal)((0,u.jsx)($,{ref:r,...n}),e):null);zt.displayName="Portal";const Ln=(0,E.default)($)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,$n=({children:e,label:n,description:r,delay:l=500,position:i="top",id:c,...d})=>{const g=De(c),f=De(),{visible:y,...b}=Tn(l),{tooltipWrapperRef:h,toggleSourceRef:D}=Zn(y,i),L=a.cloneElement(e,{tabIndex:0,"aria-labelledby":n?g:void 0,"aria-describedby":r?g:void 0,...b});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(zt,{children:(0,u.jsxs)(Ln,{id:g,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:h,visible:y,position:"absolute",...d,children:[y&&(0,u.jsx)(it,{id:f,children:r}),(0,u.jsx)(se,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:n||r})]})}),(0,u.jsx)("span",{ref:D,children:L})]})},In=(0,E.default)(ge)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${$t}
`,vt=a.forwardRef(({disabled:e,children:n,background:r="neutral0",...l},i)=>(0,u.jsx)(In,{ref:i,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:r,borderColor:"neutral200",cursor:"pointer",...l,children:n}));vt.displayName="BaseButton";const Sn=a.forwardRef(({label:e,background:n,borderWidth:r,noBorder:l=!1,children:i,icon:c,disabled:d=!1,onClick:g,"aria-label":f,...y},b)=>{const h=(0,u.jsxs)(kt,{"aria-disabled":d,background:d?"neutral150":n,borderWidth:l?0:r,justifyContent:"center",height:"2rem",width:"2rem",...y,ref:b,onClick:D=>{!d&&g&&g(D)},children:[(0,u.jsx)(it,{as:"span",children:e??f}),a.cloneElement(c||i,{"aria-hidden":!0,focusable:!1})]});return e?(0,u.jsx)($n,{label:e,children:h}):h}),kt=(0,E.default)(vt)`
  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral400};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,ao=(0,E.default)(ge)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${kt} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,wt=(0,E.default)(qe)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,Bn=({as:e="h2",label:n,searchLabel:r="",searchable:l=!1,onChange:i=()=>{},value:c="",onClear:d=()=>{},onSubmit:g=()=>{},id:f})=>{const[y,b]=(0,a.useState)(!1),h=ze(y),D=De(f),L=(0,a.useRef)(void 0),Z=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{y&&L.current&&L.current.focus(),h&&!y&&Z.current&&Z.current.focus()},[y,h]);const _=()=>{b(F=>!F)},G=F=>{d(F),L.current.focus()},S=F=>{F.relatedTarget?.id!==D&&b(!1)},W=F=>{F.key===_e.ESCAPE&&b(!1)};return y?(0,u.jsxs)($,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,u.jsx)(Ne,{children:(0,u.jsx)(Cn,{name:"searchbar",value:c,onChange:i,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:W,ref:L,onBlur:S,onClear:G,onSubmit:g,clearLabel:"Clear",size:"S",children:r})}),(0,u.jsx)($,{paddingLeft:2,paddingTop:4,children:(0,u.jsx)(wt,{})})]}):(0,u.jsxs)($,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,u.jsxs)(ge,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,u.jsx)(se,{variant:"beta",as:e,children:n}),l&&(0,u.jsx)(Sn,{ref:Z,onClick:_,label:r,icon:(0,u.jsx)(pe.Z,{})})]}),(0,u.jsx)($,{paddingTop:4,children:(0,u.jsx)(wt,{})})]})},_n=({children:e,spacing:n=2,horizontal:r=!1,...l})=>(0,u.jsx)($,{paddingTop:2,paddingBottom:4,children:(0,u.jsx)(ge,{as:"ol",gap:n,direction:r?"row":"column",alignItems:r?"center":"stretch",...l,children:a.Children.map(e,(i,c)=>(0,u.jsx)("li",{children:i},c))})});var Et=o(21514);const Ht=(0,E.default)(ge)`
  border: none;
  padding: 0;
  background: transparent;
`,jn=E.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Fn=({collapsable:e=!1,label:n,onClick:r=()=>{},ariaExpanded:l,ariaControls:i})=>e?(0,u.jsxs)(Ht,{as:"button",onClick:r,"aria-expanded":l,"aria-controls":i,textAlign:"left",children:[(0,u.jsx)($,{paddingRight:1,children:(0,u.jsx)(se,{variant:"sigma",textColor:"neutral600",children:n})}),e&&(0,u.jsx)(jn,{rotated:l,children:(0,u.jsx)(Et.Z,{"aria-hidden":!0})})]}):(0,u.jsx)(Ht,{children:(0,u.jsx)($,{paddingRight:1,children:(0,u.jsx)(se,{variant:"sigma",textColor:"neutral600",children:n})})}),Un=(0,E.default)(ge)`
  border-radius: ${({theme:e,size:n})=>n==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:n})=>n.sizes.badge[e]};
`,Wn=({active:e=!1,size:n="M",textColor:r="neutral600",backgroundColor:l="neutral150",children:i,minWidth:c=5,...d})=>{const g=n==="S"?1:2;return(0,u.jsx)(Un,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:c,paddingLeft:g,paddingRight:g,background:e?"primary200":l,size:n,...d,children:(0,u.jsx)(se,{variant:"sigma",textColor:e?"primary600":r,children:i})})},Nn=(0,E.default)($)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Kn=({collapsable:e=!1,label:n,badgeLabel:r,children:l,id:i})=>{const[c,d]=(0,a.useState)(!0),g=De(i);return(0,u.jsxs)(ge,{direction:"column",alignItems:"stretch",gap:1,children:[(0,u.jsx)(Nn,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,u.jsxs)($,{position:"relative",paddingRight:r?6:0,children:[(0,u.jsx)(Fn,{onClick:()=>{d(f=>!f)},ariaExpanded:c,ariaControls:g,collapsable:e,label:n}),r&&(0,u.jsx)(Wn,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:r})]})}),(!e||c)&&(0,u.jsx)("ol",{id:g,children:a.Children.map(l,(f,y)=>(0,u.jsx)("li",{children:f},y))})]})},zn=(0,E.default)($)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,kn=E.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,wn=E.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Hn=({label:e,children:n,id:r})=>{const[l,i]=(0,a.useState)(!0),c=De(r);return(0,u.jsxs)($,{children:[(0,u.jsx)(zn,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,u.jsx)(ge,{justifyContent:"space-between",children:(0,u.jsxs)(kn,{onClick:()=>{i(d=>!d)},"aria-expanded":l,"aria-controls":c,children:[(0,u.jsx)(wn,{rotated:l,children:(0,u.jsx)(Et.Z,{"aria-hidden":!0})}),(0,u.jsx)($,{paddingLeft:2,children:(0,u.jsx)(se,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),l&&(0,u.jsx)("ul",{id:c,children:a.Children.map(n,(d,g)=>(0,u.jsx)("li",{children:d},g))})]})};var Vn=o(22534);const Mt=a.forwardRef(({href:e,rel:n="noreferrer noopener",target:r="_self",disabled:l=!1,isExternal:i=!1,...c},d)=>(0,u.jsx)($,{as:"a",ref:d,target:i?"_blank":r,rel:i?n:void 0,href:l?"#":e,"aria-disabled":l,cursor:"pointer",...c}));Mt.displayName="BaseLink";const Gn=(0,E.default)($)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${se} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,Vt=(0,E.default)(Vn.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:n})=>n?e.colors.primary600:e.colors.neutral600};
  }
`,Yn=E.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,Gt=a.forwardRef(({children:e,icon:n=null,withBullet:r=!1,as:l=Mt,isSubSectionChild:i=!1,...c},d)=>(0,u.jsxs)(Gn,{as:l,icon:n,background:"neutral100",paddingLeft:i?9:7,paddingBottom:2,paddingTop:2,ref:d,...c,children:[(0,u.jsxs)(ge,{children:[n?(0,u.jsx)(Yn,{children:n}):(0,u.jsx)(Vt,{}),(0,u.jsx)($,{paddingLeft:2,children:(0,u.jsx)(se,{as:"span",children:e})})]}),r&&(0,u.jsx)($,{as:ge,paddingRight:4,children:(0,u.jsx)(Vt,{$active:!0})})]}));var Ge=o(12978),Xn=o(11700),Ke=o.n(Xn),Ct=o(73727),p=o(90635),Qn=o(18446),Tt=o.n(Qn),ke=o(27523),tt=o(47558),ue=o(72966);const Jn=()=>{const{components:e,componentsGroupedByCategory:n,contentTypes:r,isInDevelopmentMode:l,sortedContentTypesList:i,modifiedData:c,initialData:d}=(0,ke.Z)(),g=(0,m.lm)(),{trackUsage:f}=(0,m.rS)(),[y,b]=(0,a.useState)(""),{onOpenModalCreateSchema:h,onOpenModalEditCategory:D}=(0,tt.Z)(),{locale:L}=(0,v.Z)(),{startsWith:Z}=(0,m.L0)(L,{sensitivity:"base"}),_=(0,m.Xe)(L,{sensitivity:"base"}),G=!Object.keys(r).some(q=>r[q].isTemporary===!0)&&!Object.keys(e).some(q=>e[q].isTemporary===!0)&&Tt()(c,d),S=()=>{G?(f("willCreateContentType"),h({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):Q()},W=()=>{G?(f("willCreateSingleType"),h({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):Q()},F=()=>{G?(f("willCreateComponent"),h({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):Q()},Q=()=>{g({type:"info",message:{id:(0,p.Z)("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},de=Object.entries(n).map(([q,Ze])=>({name:q,title:q,isEditable:l,onClickEdit(ce,Ie){ce.stopPropagation(),G?D(Ie.name):Q()},links:Ze.map(ce=>({name:ce.uid,to:`/plugins/${ue.Z}/component-categories/${q}/${ce.uid}`,title:ce.schema.displayName})).sort((ce,Ie)=>_.compare(ce.title,Ie.title))})).sort((q,Ze)=>_.compare(q.title,Ze.title)),Te=i.filter(q=>q.visible);return{menu:[{name:"models",title:{id:`${(0,p.Z)("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:l&&{id:`${(0,p.Z)("button.model.create")}`,defaultMessage:"Create new collection type",onClick:S},links:Te.filter(q=>q.kind==="collectionType")},{name:"singleTypes",title:{id:`${(0,p.Z)("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:l&&{id:`${(0,p.Z)("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:W},links:Te.filter(q=>q.kind==="singleType")},{name:"components",title:{id:`${(0,p.Z)("menu.section.components.name")}`,defaultMessage:"Components"},customLink:l&&{id:`${(0,p.Z)("button.component.create")}`,defaultMessage:"Create a new component",onClick:F},links:de}].map(q=>q.links.some(ce=>Array.isArray(ce.links))?{...q,links:q.links.map(ce=>{const Ie=ce.links.filter(be=>Z(be.title,y));return Ie.length===0?null:{...ce,links:Ie.sort((be,ye)=>_.compare(be.title,ye.title))}}).filter(Boolean)}:{...q,links:q.links.filter(ce=>Z(ce.title,y)).sort((ce,Ie)=>_.compare(ce.title,Ie.title))}),searchValue:y,onSearchChange:b}},qn=()=>{const{menu:e,searchValue:n,onSearchChange:r}=Jn(),{formatMessage:l}=(0,v.Z)();return a.createElement(le,{ariaLabel:l({id:`${(0,p.Z)("plugin.name")}`,defaultMessage:"Content-Types Builder"})},a.createElement(Bn,{searchable:!0,value:n,onClear:()=>r(""),onChange:i=>r(i.target.value),label:l({id:`${(0,p.Z)("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:l({id:"global.search",defaultMessage:"Search"})}),a.createElement(_n,null,e.map(i=>a.createElement(a.Fragment,{key:i.name},a.createElement(Kn,{label:l({id:i.title.id,defaultMessage:i.title.defaultMessage}),collapsable:!0,badgeLabel:i.links.length.toString()},i.links.map(c=>c.links?a.createElement(Hn,{key:c.name,label:Ke()(c.title)},c.links.map(d=>a.createElement(Gt,{as:Ct.OL,to:d.to,active:d.active,key:d.name,isSubSectionChild:!0},Ke()(l({id:d.name,defaultMessage:d.title}))))):a.createElement(Gt,{as:Ct.OL,to:c.to,active:c.active,key:c.name},Ke()(l({id:c.name,defaultMessage:c.title}))))),i.customLink&&a.createElement(M.x,{paddingLeft:7},a.createElement(U.A,{onClick:i.customLink.onClick,startIcon:a.createElement(H.J,{as:Ge.Z,width:(0,m.Q1)(8),height:(0,m.Q1)(8)}),marginTop:2},l({id:i.customLink.id,defaultMessage:i.customLink.defaultMessage})))))))};var ea=o(27361),k=o.n(ea),ta=o(7739),br=o.n(ta),vr=o(36968),so=o.n(vr),Er=o(84238),Mr=o.n(Er),Cr=o(45697),s=o.n(Cr),rt=o(86706),Tr=o(14890),xr=o(30248),lt=o(12670),Rr=o(60881),io=o(48683),lo=o(20107),ne=o(75878),dt=o(61738),na=o(81984),ct=o(54375),Or=o(45124),fe=o(19442),Ar=o(18721),Pr=o.n(Ar),Zr=o(7334),co=o.n(Zr);const uo=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),aa=(e,n)=>e.find(({name:r})=>r===n);var mo=o(31439);const Dr=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],oa=({intlLabel:e,name:n,onChange:r,value:l})=>{const{formatMessage:i}=(0,v.Z)(),c=l===null||l.length===0?i({id:"global.none",defaultMessage:"None"}):[...l].sort().map(g=>Ke()(g)).join(", "),d=e.id?i({id:e.id,defaultMessage:e.defaultMessage}):n;return a.createElement(mo.Q,{id:"select1",label:d,customizeContent:()=>c,onChange:g=>{g.length>0?r({target:{name:n,value:g,type:"allowed-types-select"}}):r({target:{name:n,value:null,type:"allowed-types-select"}})},options:Dr,value:l||[]})};oa.defaultProps={value:null},oa.propTypes={intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().oneOfType([s().object,s().array])};const Lr=oa;var me=o(78549),ra=o(13359),sa=o(9370),Yt=o(61585),Xt=o(71243);const po=(0,E.default)(M.x)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,ia=({type:e})=>{const{formatMessage:n}=(0,v.Z)(),{onClickSelectField:r}=(0,tt.Z)(),l=()=>{r({attributeType:e,step:e==="component"?"1":null})};return a.createElement(po,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:l},a.createElement(ne.k,null,a.createElement(Xt.Z,{type:e}),a.createElement(M.x,{paddingLeft:4},a.createElement(ne.k,null,a.createElement(me.Z,{fontWeight:"bold"},n({id:(0,p.Z)(`attribute.${e}`),defaultMessage:e}))),a.createElement(ne.k,null,a.createElement(me.Z,{variant:"pi",textColor:"neutral600"},n({id:(0,p.Z)(`attribute.${e}.description`),defaultMessage:"A type for modeling data"}))))))};ia.defaultProps={type:"text"},ia.propTypes={type:s().string};const $r=ia,go=e=>{const n=e%2===1;return{paddingLeft:n?2:0,paddingRight:n?0:2}},fo=({attributes:e})=>a.createElement(ra.k,{tagName:"button"},a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:8},e.map((n,r)=>a.createElement(sa.r,{key:r,gap:0},n.map((l,i)=>{const{paddingLeft:c,paddingRight:d}=go(i);return a.createElement(Yt.P,{key:l,col:6,style:{height:"100%"}},a.createElement(M.x,{paddingLeft:c,paddingRight:d,paddingBottom:1,style:{height:"100%"}},a.createElement($r,{type:l})))})))));fo.propTypes={attributes:s().array.isRequired};const Ir=fo;var Sr=o(51503);const ho=({customFieldUid:e,customField:n})=>{const{type:r,intlLabel:l,intlDescription:i}=n,{formatMessage:c}=(0,v.Z)(),{onClickSelectCustomField:d}=(0,tt.Z)(),g=()=>{d({attributeType:r,customFieldUid:e})};return a.createElement(po,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:g},a.createElement(ne.k,null,a.createElement(Xt.Z,{type:r,customField:e}),a.createElement(M.x,{paddingLeft:4},a.createElement(ne.k,null,a.createElement(me.Z,{fontWeight:"bold"},c(l))),a.createElement(ne.k,null,a.createElement(me.Z,{variant:"pi",textColor:"neutral600"},c(i))))))};ho.propTypes={customFieldUid:s().string.isRequired,customField:s().shape({type:s().string.isRequired,icon:s().func,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,intlDescription:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired}).isRequired};const Br=ho;var xt=o(7387),_r=o(49623);const jr=(0,E.default)(_r.G)`
  &[aria-disabled='true'] {
    ${xt.sg}
    &:active {
      ${xt.sg}
    }
  }
  &:hover {
    ${xt.yP}
  }
  &:active {
    ${xt.tB}
  }
  ${xt.PD}
`,Fr=a.forwardRef(({variant:e="default",startIcon:n,endIcon:r,disabled:l=!1,children:i,size:c="S",href:d,to:g,...f},y)=>{const b=d?"_blank":void 0,h=d?"noreferrer noopener":void 0,D=c==="S"?2:"10px",L=4;return(0,u.jsxs)(jr,{ref:y,"aria-disabled":l,size:c,variant:e,target:b,rel:h,to:l?void 0:g,href:l?"#":d,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:D,paddingLeft:L,paddingRight:L,paddingTop:D,pointerEvents:l?"none":void 0,...f,as:g&&!l?Ct.OL:"a",children:[n&&(0,u.jsx)(ne.k,{"aria-hidden":!0,children:n}),(0,u.jsx)(me.Z,{variant:c==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:i}),r&&(0,u.jsx)(ne.k,{"aria-hidden":!0,children:r})]})});var Ur=o(58252),Wr=o(80129),Nr=o.n(Wr);const Kr=(0,E.default)(M.x)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,zr=()=>a.createElement(ne.k,{wrap:"wrap",gap:4},[...Array(4)].map((e,n)=>a.createElement(Kr,{key:`empty-card-${n}`,height:"138px",width:"375px",hasRadius:!0}))),kr=()=>{const{formatMessage:e}=(0,v.Z)();return a.createElement(M.x,{position:"relative"},a.createElement(zr,null),a.createElement(M.x,{position:"absolute",top:6,width:"100%"},a.createElement(ne.k,{alignItems:"center",justifyContent:"center",direction:"column"},a.createElement(H.J,{as:Ur.Z,color:"",width:"160px",height:"88px"}),a.createElement(M.x,{paddingTop:6,paddingBottom:4},a.createElement(M.x,{textAlign:"center"},a.createElement(me.Z,{variant:"delta",as:"p",textColor:"neutral600"},e({id:(0,p.Z)("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})),a.createElement(M.x,{paddingTop:4},a.createElement(me.Z,{variant:"delta",as:"p",textColor:"neutral600"},e({id:(0,p.Z)("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."}))))),a.createElement(Fr,{to:`/marketplace?${Nr().stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:a.createElement(Ge.Z,null)},e({id:(0,p.Z)("modalForm.empty.button"),defaultMessage:"Add custom fields"})))))},wr=()=>{const{formatMessage:e}=(0,v.Z)(),n=(0,m.mZ)(),r=Object.entries(n.getAll());if(!r.length)return a.createElement(kr,null);const l=r.sort((i,c)=>i[1].name>c[1].name?1:-1);return a.createElement(ra.k,{tagName:"button"},a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:3},a.createElement(sa.r,{gap:0},l.map(([i,c],d)=>{const{paddingLeft:g,paddingRight:f}=go(d);return a.createElement(Yt.P,{key:i,col:6,style:{height:"100%"}},a.createElement(M.x,{paddingLeft:g,paddingRight:f,paddingBottom:1,style:{height:"100%"}},a.createElement(Br,{key:i,customFieldUid:i,customField:c})))})),a.createElement(Sr.r,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0},e({id:(0,p.Z)("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"}))))},yo=({attributes:e,forTarget:n,kind:r})=>{const{formatMessage:l}=(0,v.Z)(),i=(0,p.Z)("modalForm.tabs.default"),c=(0,p.Z)("modalForm.tabs.custom"),d=n.includes("component")?"component":r,g=(0,p.Z)(`modalForm.sub-header.chooseAttribute.${d}`);return a.createElement(io.f,{padding:6},a.createElement(lo.v,{label:l({id:(0,p.Z)("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple"},a.createElement(ne.k,{justifyContent:"space-between"},a.createElement(me.Z,{variant:"beta",as:"h2"},l({id:g,defaultMessage:"Select a field"})),a.createElement(dt.m,null,a.createElement(dt.O,null,l({id:i,defaultMessage:"Default"})),a.createElement(dt.O,null,l({id:c,defaultMessage:"Custom"})))),a.createElement(M.x,{paddingBottom:6},a.createElement(na.i,null)),a.createElement(ct.n,null,a.createElement(ct.x,null,a.createElement(Ir,{attributes:e})),a.createElement(ct.x,null,a.createElement(wr,null)))))};yo.propTypes={attributes:s().array.isRequired,forTarget:s().string.isRequired,kind:s().string.isRequired};const Hr=yo;var Qt=o(50614),Jt=o(473);const la=({intlLabel:e,name:n,options:r,onChange:l,value:i})=>{const{formatMessage:c}=(0,v.Z)(),d=e.id?c({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):n,g=f=>{let y="";f==="true"&&(y=!0),f==="false"&&(y=!1),l({target:{name:n,value:y,type:"select-default-boolean"}})};return a.createElement(Qt.P,{label:d,id:n,name:n,onChange:g,value:(i===null?"":i).toString()},r.map(({metadatas:{intlLabel:f,disabled:y,hidden:b},key:h,value:D})=>a.createElement(Jt.W,{key:h,value:D,disabled:y,hidden:b},f.defaultMessage)))};la.defaultProps={value:null},la.propTypes={intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,name:s().string.isRequired,onChange:s().func.isRequired,options:s().arrayOf(s().shape({metadatas:s().shape({intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,disabled:s().bool,hidden:s().bool}).isRequired,key:s().oneOfType([s().string,s().number]).isRequired,value:s().oneOfType([s().string,s().number]).isRequired}).isRequired).isRequired,value:s().any};const Vr=la;var bo=o(27882);const Gr=(0,E.default)(ne.k)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,bo.k3)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${me.Z} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,da=({intlLabel:e,name:n,onChange:r,radios:l,value:i})=>{const{formatMessage:c}=(0,v.Z)();return a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:2},a.createElement(me.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:n,as:"label"},c(e)),a.createElement(Gr,{gap:4,alignItems:"stretch"},l.map(d=>a.createElement("label",{htmlFor:d.value.toString(),key:d.value,className:"container"},a.createElement("input",{id:d.value.toString(),name:n,className:"option-input",checked:d.value===i,value:d.value,key:d.value,onChange:r,type:"radio"}),a.createElement(M.x,{className:"option",padding:4},a.createElement(ne.k,null,a.createElement(M.x,{paddingRight:4},a.createElement("span",{className:"checkmark"})),a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:2},a.createElement(me.Z,{fontWeight:"bold"},c(d.title)),a.createElement(me.Z,{variant:"pi",textColor:"neutral600"},c(d.description)))))))))};da.defaultProps={radios:[]},da.propTypes={intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,name:s().string.isRequired,onChange:s().func.isRequired,radios:s().arrayOf(s().shape({title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}),description:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}),value:s().any.isRequired})),value:s().oneOfType([s().string,s().bool]).isRequired};const ca=da,vo=({onChange:e,name:n,...r})=>{const l=i=>{const c=i.target.value!=="false";e({target:{name:n,value:c,type:"boolean-radio-group"}})};return a.createElement(ca,{...r,name:n,onChange:l})};vo.propTypes={name:s().string.isRequired,onChange:s().func.isRequired};const Yr=vo;var Eo=o(13539),ua=o(28469),Xr=o(29872);const ma=({error:e,intlLabel:n,modifiedData:r,name:l,onChange:i,value:c})=>{const{formatMessage:d}=(0,v.Z)(),[g,f]=(0,a.useState)(!!c||c===0),y=n.id?d({id:n.id,defaultMessage:n.defaultMessage},{...n.values}):l,b=r.type==="biginteger"?"text":"number",h=!r.type,D=e?d({id:e,defaultMessage:e}):"";return a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:2},a.createElement(Eo.X,{id:l,name:l,onValueChange:L=>{i({target:{name:l,value:L?b==="text"?"0":0:null}}),f(G=>!G)},value:g},y),g&&a.createElement(M.x,{paddingLeft:6,style:{maxWidth:"200px"}},b==="text"?a.createElement(ua.o,{"aria-label":y,disabled:h,error:D,id:l,name:l,onChange:i,value:c===null?"":c}):a.createElement(Xr.Y,{"aria-label":y,disabled:h,error:D,id:l,name:l,onValueChange:L=>{i({target:{name:l,value:L,type:b}})},value:c||0})))};ma.defaultProps={error:null,value:null},ma.propTypes={error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,modifiedData:s().object.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().oneOfType([s().string,s().object,s().bool,s().number])};const Qr=ma,Mo=({onChange:e,...n})=>{const r=(0,m.lm)(),l=i=>{r({type:"info",message:{id:(0,p.Z)("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(i)};return a.createElement(ca,{...n,onChange:l})};Mo.propTypes={onChange:s().func.isRequired};const Jr=Mo,pa=({description:e,disabled:n,intlLabel:r,isCreating:l,name:i,onChange:c,value:d})=>{const{formatMessage:g}=(0,v.Z)(),[f,y]=(0,a.useState)(!1),b=r.id?g({id:r.id,defaultMessage:r.defaultMessage},{...r.values}):i,h=e?g({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",D=()=>y(_=>!_),L=()=>{c({target:{name:i,value:!1}}),D()},Z=({target:{checked:_}})=>{if(!_&&!l){D();return}c({target:{name:i,value:_}})};return a.createElement(a.Fragment,null,a.createElement(Eo.X,{checked:d,disabled:n,hint:h,name:i,onChange:Z},b),a.createElement(m.QH,{isOpen:f,onToggleDialog:D,onConfirm:L,bodyText:{id:(0,p.Z)("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:(0,p.Z)("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}}))};pa.defaultProps={description:null,disabled:!1,value:!1},pa.propTypes={description:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}),disabled:s().bool,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,isCreating:s().bool.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().bool};const qr=pa,ga=({categoryName:e,deleteCategory:n,deleteComponent:r,deleteContentType:l,isAttributeModal:i,isCustomFieldModal:c,isComponentAttribute:d,isComponentToDzModal:g,isContentTypeModal:f,isCreatingComponent:y,isCreatingComponentAttribute:b,isCreatingComponentInDz:h,isCreatingComponentWhileAddingAField:D,isCreatingContentType:L,isCreatingDz:Z,isComponentModal:_,isDzAttribute:G,isEditingAttribute:S,isEditingCategory:W,isInFirstComponentStep:F,onSubmitAddComponentAttribute:Q,onSubmitAddComponentToDz:de,onSubmitCreateContentType:Te,onSubmitCreateComponent:$e,onSubmitCreateDz:q,onSubmitEditAttribute:Ze,onSubmitEditCategory:ce,onSubmitEditComponent:Ie,onSubmitEditContentType:be,onSubmitEditCustomFieldAttribute:ye,onSubmitEditDz:Ye,onClickFinish:xe})=>{const{formatMessage:ie}=(0,v.Z)();return g?h?a.createElement(fe.z,{variant:"secondary",type:"submit",onClick:N=>{N.preventDefault(),de(N,!0)},startIcon:a.createElement(Ge.Z,null)},ie({id:(0,p.Z)("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})):a.createElement(fe.z,{variant:"default",type:"submit",onClick:N=>{N.preventDefault(),de(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"})):i&&G&&!Z?a.createElement(fe.z,{variant:"default",type:"submit",onClick:N=>{N.preventDefault(),xe(),Ye(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"})):i&&G&&Z?a.createElement(a.Fragment,null,a.createElement(fe.z,{variant:"secondary",type:"submit",onClick:N=>{N.preventDefault(),q(N,!0)},startIcon:a.createElement(Ge.Z,null)},ie({id:(0,p.Z)("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"}))):i&&d?F?a.createElement(fe.z,{variant:"secondary",type:"submit",onClick:N=>{N.preventDefault(),Q(N,!0)}},ie(b?{id:(0,p.Z)("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:(0,p.Z)("form.button.select-component"),defaultMessage:"Configure the component"})):a.createElement(a.Fragment,null,a.createElement(fe.z,{variant:"secondary",type:"submit",onClick:N=>{N.preventDefault(),Q(N,!0)},startIcon:a.createElement(Ge.Z,null)},ie(D?{id:(0,p.Z)("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:(0,p.Z)("form.button.add-field"),defaultMessage:"Add another field"})),a.createElement(fe.z,{variant:"default",type:"button",onClick:N=>{N.preventDefault(),xe(),Q(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"}))):i&&!d&&!G?a.createElement(a.Fragment,null,a.createElement(fe.z,{type:S?"button":"submit",variant:"secondary",onClick:N=>{N.preventDefault(),Ze(N,!0)},startIcon:a.createElement(Ge.Z,null)},ie({id:(0,p.Z)("form.button.add-field"),defaultMessage:"Add another field"})),a.createElement(fe.z,{type:S?"submit":"button",variant:"default",onClick:N=>{N.preventDefault(),xe(),Ze(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"}))):f?a.createElement(a.Fragment,null,!L&&a.createElement(a.Fragment,null,a.createElement(fe.z,{type:"button",variant:"danger",onClick:N=>{N.preventDefault(),l()}},ie({id:"global.delete",defaultMessage:"Delete"})),a.createElement(fe.z,{type:"submit",variant:"default",onClick:N=>{N.preventDefault(),be(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"}))),L&&a.createElement(fe.z,{type:"submit",variant:"secondary",onClick:N=>{N.preventDefault(),Te(N,!0)}},ie({id:"global.continue",defaultMessage:"Continue"}))):_?a.createElement(a.Fragment,null,!y&&a.createElement(a.Fragment,null,a.createElement(fe.z,{type:"button",variant:"danger",onClick:N=>{N.preventDefault(),r()}},ie({id:"global.delete",defaultMessage:"Delete"})),a.createElement(fe.z,{type:"submit",variant:"default",onClick:N=>{N.preventDefault(),Ie(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"}))),y&&a.createElement(fe.z,{type:"submit",variant:"secondary",onClick:N=>{N.preventDefault(),$e(N,!0)}},ie({id:"global.continue",defaultMessage:"Continue"}))):W?a.createElement(a.Fragment,null,a.createElement(fe.z,{type:"button",variant:"danger",onClick:N=>{N.preventDefault(),n(e)}},ie({id:"global.delete",defaultMessage:"Delete"})),a.createElement(fe.z,{type:"submit",variant:"default",onClick:N=>{N.preventDefault(),ce(N)}},ie({id:"global.finish",defaultMessage:"finish"}))):c?a.createElement(a.Fragment,null,a.createElement(fe.z,{type:S?"button":"submit",variant:"secondary",onClick:N=>{N.preventDefault(),ye(N,!0)},startIcon:a.createElement(Ge.Z,null)},ie({id:(0,p.Z)("form.button.add-field"),defaultMessage:"Add another field"})),a.createElement(fe.z,{type:S?"submit":"button",variant:"default",onClick:N=>{N.preventDefault(),xe(),ye(N,!1)}},ie({id:"global.finish",defaultMessage:"Finish"}))):null};ga.defaultProps={categoryName:null,onClickFinish(){}},ga.propTypes={categoryName:s().string,deleteCategory:s().func.isRequired,deleteComponent:s().func.isRequired,deleteContentType:s().func.isRequired,isAttributeModal:s().bool.isRequired,isCustomFieldModal:s().bool.isRequired,isComponentAttribute:s().bool.isRequired,isComponentModal:s().bool.isRequired,isComponentToDzModal:s().bool.isRequired,isContentTypeModal:s().bool.isRequired,isCreatingComponent:s().bool.isRequired,isCreatingComponentAttribute:s().bool.isRequired,isCreatingComponentInDz:s().bool.isRequired,isCreatingComponentWhileAddingAField:s().bool.isRequired,isCreatingContentType:s().bool.isRequired,isCreatingDz:s().bool.isRequired,isDzAttribute:s().bool.isRequired,isEditingAttribute:s().bool.isRequired,isEditingCategory:s().bool.isRequired,isInFirstComponentStep:s().bool.isRequired,onSubmitAddComponentAttribute:s().func.isRequired,onSubmitAddComponentToDz:s().func.isRequired,onSubmitCreateContentType:s().func.isRequired,onSubmitCreateComponent:s().func.isRequired,onSubmitCreateDz:s().func.isRequired,onSubmitEditAttribute:s().func.isRequired,onSubmitEditCategory:s().func.isRequired,onSubmitEditComponent:s().func.isRequired,onSubmitEditContentType:s().func.isRequired,onSubmitEditCustomFieldAttribute:s().func.isRequired,onSubmitEditDz:s().func.isRequired,onClickFinish:s().func};const es=ga;var Co=o(18189);const To=()=>(0,u.jsx)($,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,u.jsx)(se,{variant:"pi",textColor:"neutral500",children:"/"})});To.displayName="Divider";const ts=(0,E.default)(ge)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,xo=({label:e,children:n,...r})=>{const l=a.Children.toArray(n);return(0,u.jsx)($,{"aria-label":e,...r,children:(0,u.jsx)(ts,{as:"ol",children:a.Children.map(l,(i,c)=>{const d=l.length>1&&c+1<l.length;return(0,u.jsxs)(ge,{inline:!0,as:"li",children:[i,d&&(0,u.jsx)(To,{})]})})})})};xo.displayName="Breadcrumbs";const Ro=({children:e,isCurrent:n=!1,...r})=>(0,u.jsx)($,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,u.jsx)(se,{variant:"pi",textColor:"neutral800",fontWeight:n?"bold":"normal","aria-current":n,...r,children:e})});Ro.displayName="Crumb";var ns=o(60793);const fa=({actionType:e,attributeName:n,attributeType:r,categoryName:l,contentTypeKind:i,dynamicZoneTarget:c,forTarget:d,modalType:g,targetUid:f,customFieldUid:y,showBackLink:b})=>{const{formatMessage:h}=(0,v.Z)(),{modifiedData:D}=(0,ke.Z)(),{onOpenModalAddField:L}=(0,tt.Z)();let Z,_=[];const G=D?.[d]?.[f]||D?.[d]||null;let S=G?.schema.displayName;if(g==="contentType"&&(Z=i),["component","editCategory"].includes(g)&&(Z="component"),["component","contentType"].includes(g)){let F=(0,p.Z)(`modalForm.component.header-${e}`);return g==="contentType"&&(F=(0,p.Z)(`modalForm.${i}.header-create`)),e==="edit"&&(F=(0,p.Z)("modalForm.header-edit")),a.createElement(Co.x,null,a.createElement(ne.k,null,a.createElement(M.x,null,a.createElement(Xt.Z,{type:Z})),a.createElement(M.x,{paddingLeft:3},a.createElement(me.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},h({id:F},{name:S})))))}return _=[{label:S,info:{category:G?.category||null,name:G?.schema.displayName}}],g==="chooseAttribute"&&(Z=["component","components"].includes(d)?"component":G.schema.kind),g==="addComponentToDynamicZone"&&(Z="dynamiczone",_.push({label:c})),(g==="attribute"||g==="customField")&&(Z=r,_.push({label:n})),g==="editCategory"&&(_=[{label:h({id:(0,p.Z)("modalForm.header.categories"),defaultMessage:"Categories"})},{label:l}]),a.createElement(Co.x,null,a.createElement(ne.k,{gap:3},b&&a.createElement(m.rU,{"aria-label":h({id:(0,p.Z)("modalForm.header.back"),defaultMessage:"Back"}),startIcon:a.createElement(ns.Z,null),onClick:()=>L({forTarget:d,targetUid:f}),to:"#back"}),a.createElement(Xt.Z,{type:Z,customField:y}),a.createElement(xo,{label:_.map(({label:F})=>F).join(",")},_.map(({label:F,info:Q},de,Te)=>{if(F=Ke()(F),!F)return null;const $e=`${F}.${de}`;return Q?.category&&(F=`${F} (${Ke()(Q.category)} - ${Ke()(Q.name)})`),a.createElement(Ro,{isCurrent:de===Te.length-1,key:$e},F)}))))};fa.defaultProps={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,contentTypeKind:null,targetUid:null,customFieldUid:null,showBackLink:!1},fa.propTypes={actionType:s().string,attributeName:s().string,attributeType:s().string,categoryName:s().string,contentTypeKind:s().string,dynamicZoneTarget:s().string,forTarget:s().oneOf(["contentType","component","components"]),modalType:s().string.isRequired,targetUid:s().string,customFieldUid:s().string,showBackLink:s().bool};const as=fa,os=({modalType:e,forTarget:n,kind:r,actionType:l,step:i})=>{switch(e){case"chooseAttribute":return(0,p.Z)(`modalForm.sub-header.chooseAttribute.${n.includes("component")?"component":r||"collectionType"}`);case"attribute":return(0,p.Z)(`modalForm.sub-header.attribute.${l}${i!=="null"&&i!==null&&l!=="edit"?".step":""}`);case"customField":return(0,p.Z)(`modalForm.sub-header.attribute.${l}`);case"addComponentToDynamicZone":return(0,p.Z)("modalForm.sub-header.addComponentToDynamicZone");default:return(0,p.Z)("configurations")}},ha=({actionType:e,modalType:n,forTarget:r,kind:l,step:i,attributeType:c,attributeName:d,customField:g})=>{const{formatMessage:f}=(0,v.Z)(),y=n==="customField"?g.intlLabel:{id:(0,p.Z)(`attribute.${c}`)};return a.createElement(ne.k,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1},a.createElement(me.Z,{as:"h2",variant:"beta"},f({id:os({actionType:e,forTarget:r,kind:l,step:i,modalType:n}),defaultMessage:"Add new field"},{type:Ke()(f(y)),name:Ke()(d),step:i})),a.createElement(me.Z,{variant:"pi",textColor:"neutral600"},f({id:(0,p.Z)(`attribute.${c}.description`),defaultMessage:"A type for modeling data"})))};ha.defaultProps={actionType:null,modalType:null,forTarget:null,kind:null,step:null,attributeType:null,attributeName:null,customField:null},ha.propTypes={actionType:s().string,modalType:s().string,forTarget:s().string,kind:s().string,step:s().string,attributeType:s().string,attributeName:s().string,customField:s().object};const rs=ha;var ss=o(32156),is=o(4090),ls=o(22996),ds=o(65093),cs=o(96073),Oo=o(37527),us=o(74273),ms=o(34263),Ao=o(25237);const ps=(0,E.default)(ne.k)`
  label {
    ${bo.k3}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,Po=({iconKey:e,name:n,onChange:r,isSelected:l,ariaLabel:i})=>a.createElement(ss.g,{name:n,required:!1},a.createElement(is.Q,{htmlFor:e,id:`${e}-label`},a.createElement(ls.T,null,a.createElement(ds._,{type:"radio",id:e,name:n,checked:l,onChange:r,value:e,"aria-checked":l,"aria-labelledby":`${e}-label`}),i),a.createElement(ne.k,{padding:2,cursor:"pointer",hasRadius:!0,background:l&&"primary200"},a.createElement(H.J,{as:Ao.c[e],color:l?"primary600":"neutral300"}))));Po.propTypes={iconKey:s().string.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,isSelected:s().bool.isRequired,ariaLabel:s().string.isRequired};const ya=({intlLabel:e,name:n,onChange:r,value:l})=>{const{formatMessage:i}=(0,v.Z)(),[c,d]=(0,a.useState)(!1),[g,f]=(0,a.useState)(""),y=Object.keys(Ao.c),[b,h]=(0,a.useState)(y),D=(0,a.useRef)(null),L=(0,a.useRef)(null),Z=()=>{d(!c)},_=({target:{value:W}})=>{f(W),h(()=>y.filter(F=>F.toLowerCase().includes(W.toLowerCase())))},G=()=>{Z(),f(""),h(y)},S=()=>{r({target:{name:n,value:""}})};return(0,a.useEffect)(()=>{c&&L.current.focus()},[c]),a.createElement(a.Fragment,null,a.createElement(ne.k,{justifyContent:"space-between",paddingBottom:2},a.createElement(me.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label"},i(e)),a.createElement(ne.k,{gap:1},c?a.createElement(cs.w,{ref:L,name:"searchbar",size:"S",placeholder:i({id:(0,p.Z)("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{g||Z()},onChange:_,value:g,onClear:G,clearLabel:i({id:(0,p.Z)("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"})},i({id:(0,p.Z)("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})):a.createElement(Oo.h,{ref:D,onClick:Z,"aria-label":i({id:(0,p.Z)("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:a.createElement(pe.Z,null),noBorder:!0}),l&&a.createElement(us.u,{description:i({id:(0,p.Z)("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"})},a.createElement(Oo.h,{onClick:S,"aria-label":i({id:(0,p.Z)("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:a.createElement(ms.Z,null),noBorder:!0})))),a.createElement(ps,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center"},b.length>0?b.map(W=>a.createElement(Po,{key:W,iconKey:W,name:n,onChange:r,isSelected:W===l,ariaLabel:i({id:(0,p.Z)("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:W})})):a.createElement(M.x,{padding:4,grow:2},a.createElement(me.Z,{variant:"delta",textColor:"neutral600",textAlign:"center"},i({id:(0,p.Z)("IconPicker.emptyState.label"),defaultMessage:"No icon found"})))))};ya.defaultProps={value:""},ya.propTypes={intlLabel:s().object.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().string};const gs=ya;var fs=o(23450),ba=o.n(fs),Zo=o(50478);const va=({description:e,error:n,intlLabel:r,modifiedData:l,name:i,onChange:c,value:d})=>{const{formatMessage:g}=(0,v.Z)(),f=(0,a.useRef)(c),y=l?.displayName||"";(0,a.useEffect)(()=>{if(y){const L=(0,Zo.Z)(y);try{const Z=ba()(L,2);f.current({target:{name:i,value:Z}})}catch{f.current({target:{name:i,value:L}})}}else f.current({target:{name:i,value:""}})},[y,i]);const b=n?g({id:n,defaultMessage:n}):"",h=e?g({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",D=g(r);return a.createElement(ua.o,{error:b,label:D,id:i,hint:h,name:i,onChange:c,value:d||""})};va.defaultProps={description:null,error:null,value:null},va.propTypes={description:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}),error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,modifiedData:s().object.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().string};const hs=va;var Ea=o(82534),we=o(62143),ys=o(51682),bs=o(91393);const vs=(0,E.default)(Mt)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:n})=>e?n.colors.neutral600:n.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${$t};
`,Do=a.forwardRef(({children:e,href:n,disabled:r=!1,startIcon:l,endIcon:i,isExternal:c=!0,...d},g)=>(0,u.jsxs)(vs,{ref:g,href:n,disabled:r,isExternal:c,...d,children:[l,(0,u.jsx)(se,{textColor:r?"neutral600":"primary600",children:e}),i,n&&!i&&c&&(0,u.jsx)(bs.Z,{})]}));Do.displayName="Link";var Es=o(64518);const Ma="success-light",Ca="danger-light",qt="default",Rt="tertiary",Ot="secondary",Lo="danger",$o="success",Ta="ghost",xa=[Ma,Ca],Ms=[qt,Rt,Ot,Lo,$o,Ta,...xa],Cs=["S","M","L"],Le=e=>e===Ma||e===Ca?`${e.substring(0,e.lastIndexOf("-"))}`:e===Rt?"neutral":e===qt||e===Ot||Ms.every(n=>n!==e)?"primary":`${e}`,Io=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${se} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,Ts=({theme:e,variant:n})=>[...xa,Ot].includes(n)?`
      background-color: ${e.colors.neutral0};
    `:n===Rt?`
      background-color: ${e.colors.neutral100};
    `:n===Ta?`
      background-color: ${e.colors.neutral100};
    `:n===qt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${Le(n)}500`]};
    background: ${e.colors[`${Le(n)}500`]};
  `,xs=({theme:e,variant:n})=>[...xa,Ot].includes(n)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Le(n)}600`]};
      ${se} {
        color: ${e.colors[`${Le(n)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${Le(n)}600`]};
        }
      }
    `:n===Rt?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${Le(n)}600`]};
    background: ${e.colors[`${Le(n)}600`]};
  `,Rs=({theme:e,variant:n})=>{switch(n){case Ca:case Ma:case Ot:return`
          border: 1px solid ${e.colors[`${Le(n)}200`]};
          background: ${e.colors[`${Le(n)}100`]};
          ${se} {
            color: ${e.colors[`${Le(n)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${Le(n)}700`]};
            }
          }
        `;case Rt:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${se} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Ta:return`
        border: 1px solid transparent;
        background: transparent;

        ${se} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case $o:case Lo:return`
          border: 1px solid ${e.colors[`${Le(n)}600`]};
          background: ${e.colors[`${Le(n)}600`]};
          ${se} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},Os=(0,E.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,As=(0,E.default)(Es.Z)`
  animation: ${Os} 2s infinite linear;
  will-change: transform;
`,Ps=(0,E.default)(vt)`
  height: ${({theme:e,size:n})=>e.sizes.button[n]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${Io}

    &:active {
      ${Io}
    }
  }

  &:hover {
    ${Ts}
  }

  &:active {
    ${xs}
  }

  ${Rs}
`,So=a.forwardRef(({variant:e=qt,startIcon:n,endIcon:r,disabled:l=!1,children:i,onClick:c,size:d=Cs[0],loading:g=!1,fullWidth:f=!1,...y},b)=>{const h=l||g;return(0,u.jsxs)(Ps,{ref:b,"aria-disabled":h,disabled:h,size:d,variant:e,onClick:D=>{!h&&c&&c(D)},fullWidth:f,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:f,justifyContent:f?"center":void 0,paddingLeft:4,paddingRight:4,width:f?"100%":void 0,...y,children:[(n||g)&&(0,u.jsx)($,{"aria-hidden":!0,children:g?(0,u.jsx)(As,{}):n}),(0,u.jsx)(se,{variant:d==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:i}),r&&(0,u.jsx)(ge,{"aria-hidden":!0,children:r})]})});So.displayName="Button";const Zs=we.fC,Ds=(0,a.forwardRef)(({size:e,endIcon:n=(0,u.jsx)(Et.Z,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...r},l)=>(0,u.jsx)(we.xz,{asChild:!0,children:(0,u.jsx)(So,{ref:l,type:"button",variant:"ghost",endIcon:n,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...r})})),Ls=(0,a.forwardRef)(({children:e,intersectionId:n,popoverPlacement:r="bottom-start",...l},i)=>{const[c,d]=r.split("-");return(0,u.jsx)(we.Uv,{children:(0,u.jsx)(we.VY,{align:d,side:c,loop:!0,asChild:!0,children:(0,u.jsxs)(Bo,{ref:i,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...l,children:[e,(0,u.jsx)($,{id:n,width:"100%",height:"1px"})]})})})}),Bo=(0,E.default)(ge)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,$s=({onSelect:e,disabled:n=!1,...r})=>(0,u.jsx)(we.ck,{asChild:!0,onSelect:e,disabled:n,children:r.isLink||r.isExternal?(0,u.jsx)(Is,{color:"neutral800",...r,isExternal:r.isExternal??!1,children:(0,u.jsx)(se,{children:r.children})}):(0,u.jsx)(jo,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...r,children:(0,u.jsx)(se,{children:r.children})})}),_o=({theme:e})=>(0,E.css)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${se} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${se} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,jo=(0,E.default)(ge)`
  ${_o}
`,Is=(0,E.default)(Do)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:n})=>K(e.colors,n,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${_o}
`,Dl=(0,a.forwardRef)((e,n)=>(0,u.jsx)(we.__,{asChild:!0,children:(0,u.jsx)(Ss,{ref:n,variant:"sigma",textColor:"neutral600",...e})})),Ss=(0,E.default)(se)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Ll=we.Tr,$l=(0,a.forwardRef)(({disabled:e=!1,...n},r)=>(0,u.jsx)(we.fF,{asChild:!0,disabled:e,children:(0,u.jsxs)(Bs,{ref:r,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...n,children:[(0,u.jsx)(se,{children:n.children}),(0,u.jsx)(_s,{height:12,width:12})]})})),Bs=(0,E.default)(jo)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,_s=(0,E.default)(ys.Z)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Il=(0,a.forwardRef)((e,n)=>(0,u.jsx)(we.Uv,{children:(0,u.jsx)(we.tu,{sideOffset:8,asChild:!0,children:(0,u.jsx)(Bo,{ref:n,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),js=Zs,Fs=Ds,Us=Ls,Ws=$s,Sl=null,Bl=null,_l=null,jl=null;var he=o(28861);const Ra=({oneThatIsCreatingARelationWithAnother:e,target:n})=>{const{contentTypes:r,sortedContentTypesList:l}=(0,ke.Z)(),i=(0,rt.I0)(),c=l.filter(uo),{plugin:d=null,schema:{displayName:g}={displayName:"error"}}=r?.[n]??{},f=({uid:y,plugin:b,title:h,restrictRelationsTo:D})=>()=>{const L=b?`${b}_${h}`:h;i({type:he.aG,target:{value:y,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:L,targetContentTypeAllowedRelations:D}})};return a.createElement(js,null,a.createElement(Ns,null,`${g} ${d?`(from: ${d})`:""}`),a.createElement(Us,{zIndex:5},c.map(({uid:y,title:b,restrictRelationsTo:h,plugin:D})=>a.createElement(Ws,{key:y,onSelect:f({uid:y,plugin:D,title:b,restrictRelationsTo:h})},b,"\xA0",D&&a.createElement(a.Fragment,null,"(from: ",D,")")))))};Ra.defaultProps={target:null},Ra.propTypes={oneThatIsCreatingARelationWithAnother:s().string.isRequired,target:s().string};const Ns=(0,E.default)(Fs)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,Ks=Ra,Oa=({disabled:e,error:n,header:r,isMain:l,name:i,onChange:c,oneThatIsCreatingARelationWithAnother:d,target:g,value:f})=>a.createElement(M.x,{background:"neutral100",hasRadius:!0,borderColor:"neutral200"},a.createElement(ne.k,{paddingTop:l?4:1,paddingBottom:l?3:1,justifyContent:"center"},l?a.createElement(me.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},r):a.createElement(Ks,{target:g,oneThatIsCreatingARelationWithAnother:d})),a.createElement(na.i,{background:"neutral200"}),a.createElement(M.x,{padding:4},a.createElement(m.jm,{disabled:e,error:n?.id||null,intlLabel:{id:(0,p.Z)("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:i,onChange:c,type:"text",value:f})));Oa.defaultProps={disabled:!1,error:null,header:null,isMain:!1,onChange(){},oneThatIsCreatingARelationWithAnother:null,target:null,value:""},Oa.propTypes={disabled:s().bool,error:s().object,header:s().string,isMain:s().bool,name:s().string.isRequired,onChange:s().func,oneThatIsCreatingARelationWithAnother:s().string,target:s().string,value:s().string};const Fo=Oa;var zs=o(95899),ks=o(4026),ws=o(41681),Hs=o(77543),Vs=o(98860),Gs=o(84410),Ys=o(39138),Uo=o.n(Ys);const Xs=(0,E.default)(M.x)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,Qs=(0,E.default)(M.x)`
  background: ${({theme:e,isSelected:n})=>e.colors[n?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:n})=>e.colors[n?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:n})=>e.colors[n?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,Js=(0,E.default)(ne.k)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,qs={oneWay:zs.Z,oneToOne:ks.Z,oneToMany:ws.Z,manyToOne:Hs.Z,manyToMany:Vs.Z,manyWay:Gs.Z},Aa=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:n,relationType:r,target:l})=>{const i=(0,rt.I0)(),{formatMessage:c}=(0,v.Z)(),{contentTypes:d,modifiedData:g}=(0,ke.Z)(),f=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],y=["oneWay","manyWay"],h=(e==="contentType"?k()(g,[e,"schema","kind"],""):e)==="collectionType"?f:y,D=r==="manyToOne",L=k()(d,[l,"schema","displayName"],"unknown"),Z=D?L:n,_=D?n:L,G=ba()(Z,r==="manyToMany"?2:1),S=k()(d,[l,"schema","restrictRelationsTo"],null),W=ba()(_,["manyToMany","oneToMany","manyToOne","manyWay"].includes(r)?2:1);return r?a.createElement(ne.k,{style:{flex:1}},a.createElement(Xs,null,a.createElement(ne.k,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center"},a.createElement(ra.k,{tagName:"button"},a.createElement(ne.k,{gap:3},h.map(F=>{const Q=qs[F],de=S===null||S.includes(F);return a.createElement(Qs,{as:"button",isSelected:r===F,disabled:!de,key:F,onClick:()=>{de&&i({type:he.QQ,target:{oneThatIsCreatingARelationWithAnother:n,targetContentType:l,value:F}})},padding:2,type:"button"},a.createElement(Q,{key:F}))}))))),a.createElement(Js,{justifyContent:"center"},a.createElement(me.Z,null,Uo()(G,{length:24}),"\xA0"),a.createElement(me.Z,{textColor:"primary600"},c({id:(0,p.Z)(`relation.${r}`)}),"\xA0"),a.createElement(me.Z,null,Uo()(W,{length:24})))):null};Aa.defaultProps={relationType:null,target:null},Aa.propTypes={naturePickerType:s().string.isRequired,oneThatIsCreatingARelationWithAnother:s().string.isRequired,relationType:s().string,target:s().string};const ei=Aa,Wo=({formErrors:e,mainBoxHeader:n,modifiedData:r,naturePickerType:l,onChange:i})=>{const c=(0,Ea.Z)(r.relation,r.targetAttribute);return a.createElement(ne.k,{style:{position:"relative"}},a.createElement(Fo,{isMain:!0,header:n,error:e?.name||null,name:"name",onChange:i,value:r?.name||""}),a.createElement(ei,{naturePickerType:l,oneThatIsCreatingARelationWithAnother:n,relationType:c,target:r.target}),a.createElement(Fo,{disabled:["oneWay","manyWay"].includes(c),error:e?.targetAttribute||null,name:"targetAttribute",onChange:i,oneThatIsCreatingARelationWithAnother:n,target:r.target,value:r?.targetAttribute||""}))};Wo.propTypes={formErrors:s().object.isRequired,mainBoxHeader:s().string.isRequired,modifiedData:s().object.isRequired,naturePickerType:s().string.isRequired,onChange:s().func.isRequired};const ti=Wo;var ni=o(63122),ai=o(85612);const Pa=({error:e,intlLabel:n,name:r,onChange:l,value:i})=>{const{formatMessage:c}=(0,v.Z)(),{allComponentsCategories:d}=(0,ke.Z)(),[g,f]=(0,a.useState)(d),y=e?c({id:e,defaultMessage:e}):"",b=c(n),h=L=>{l({target:{name:r,value:L,type:"select-category"}})},D=L=>{f(Z=>[...Z,L]),h(L)};return a.createElement(ni.XU,{error:y,id:r,label:b,name:r,onChange:h,onCreateOption:D,value:i},g.map(L=>a.createElement(ai.O,{key:L,value:L},L)))};Pa.defaultProps={error:null,value:null},Pa.propTypes={error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().string};const oi=Pa,Za=({error:e,intlLabel:n,isAddingAComponentToAnotherComponent:r,isCreating:l,isCreatingComponentWhileAddingAField:i,componentToCreate:c,name:d,onChange:g,targetUid:f,forTarget:y,value:b})=>{const{formatMessage:h}=(0,v.Z)(),D=e?h({id:e,defaultMessage:e}):"",L=h(n),{componentsGroupedByCategory:Z,componentsThatHaveOtherComponentInTheirAttributes:_}=(0,ke.Z)(),G=["component","components"].includes(y);let S=Object.entries(Z).reduce((W,F)=>{const[Q,de]=F,Te=de.map($e=>({uid:$e.uid,label:$e.schema.displayName,categoryName:Q}));return[...W,...Te]},[]);return r&&(S=S.filter(W=>!_.includes(W.uid))),G&&(S=S.filter(W=>W.uid!==f)),i&&(S=[{uid:b,label:c.displayName,categoryName:c.category}]),a.createElement(Qt.P,{disabled:i||!l,error:D,label:L,id:d,name:d,onChange:W=>{g({target:{name:d,value:W,type:"select-category"}})},value:b||""},S.map(W=>a.createElement(Jt.W,{key:W.uid,value:W.uid},`${W.categoryName} - ${W.label}`)))};Za.defaultProps={componentToCreate:null,error:null},Za.propTypes={componentToCreate:s().object,forTarget:s().string.isRequired,error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,isAddingAComponentToAnotherComponent:s().bool.isRequired,isCreating:s().bool.isRequired,isCreatingComponentWhileAddingAField:s().bool.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,targetUid:s().string.isRequired,value:s().string.isRequired};const ri=Za,No=({dynamicZoneTarget:e,intlLabel:n,name:r,onChange:l,value:i})=>{const{formatMessage:c}=(0,v.Z)(),{componentsGroupedByCategory:d,modifiedData:g}=(0,ke.Z)(),y=(aa(g.contentType.schema.attributes,e)||{}).components||[],b=Object.keys(d).reduce((L,Z)=>{const _=d[Z].filter(({uid:G})=>!y.includes(G));return _.length>0&&(L[Z]=_),L},{}),h=Object.entries(b).reduce((L,Z)=>{const[_,G]=Z,S={label:_,children:G.map(({uid:W,schema:{displayName:F}})=>({label:F,value:W}))};return L.push(S),L},[]),D=c({id:(0,p.Z)("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:i.length});return a.createElement(mo.Q,{id:"select1",label:c(n),customizeContent:()=>D,name:r,onChange:L=>{l({target:{name:r,value:L,type:"select-components"}})},options:h,value:i||[]})};No.propTypes={intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,dynamicZoneTarget:s().string.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().array.isRequired};const si=No,Da=({intlLabel:e,error:n,modifiedData:r,name:l,onChange:i,options:c,value:d})=>{const{formatMessage:g}=(0,v.Z)(),f=g(e),y=n?g({id:n,defaultMessage:n}):"",b=h=>{i({target:{name:l,value:h,type:"select"}}),d&&r.default!==void 0&&r.default!==null&&i({target:{name:"default",value:null}})};return a.createElement(Qt.P,{error:y,label:f,id:l,name:l,onChange:b,value:d||""},c.map(({metadatas:{intlLabel:h,disabled:D,hidden:L},key:Z,value:_})=>a.createElement(Jt.W,{key:Z,value:_,disabled:D,hidden:L},g({id:h.id,defaultMessage:h.defaultMessage},h.values))))};Da.defaultProps={error:void 0,value:""},Da.propTypes={error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,modifiedData:s().object.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,options:s().arrayOf(s().shape({metadatas:s().shape({intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,disabled:s().bool,hidden:s().bool}).isRequired,key:s().oneOfType([s().string,s().number]).isRequired,value:s().oneOfType([s().string,s().number]).isRequired}).isRequired).isRequired,value:s().string};const ii=Da,La=({intlLabel:e,error:n,modifiedData:r,name:l,onChange:i,options:c,value:d})=>{const{formatMessage:g}=(0,v.Z)(),f=g(e),y=n?g({id:n,defaultMessage:n}):"",b=h=>{i({target:{name:l,value:h,type:"select"}}),d&&(h==="biginteger"&&d!=="biginteger"&&(r.default!==void 0&&r.default!==null&&i({target:{name:"default",value:null}}),r.max!==void 0&&r.max!==null&&i({target:{name:"max",value:null}}),r.min!==void 0&&r.min!==null&&i({target:{name:"min",value:null}})),["decimal","float","integer"].includes(h)&&d==="biginteger"&&(r.default!==void 0&&r.default!==null&&i({target:{name:"default",value:null}}),r.max!==void 0&&r.max!==null&&i({target:{name:"max",value:null}}),r.min!==void 0&&r.min!==null&&i({target:{name:"min",value:null}})))};return a.createElement(Qt.P,{error:y,label:f,id:l,name:l,onChange:b,value:d||""},c.map(({metadatas:{intlLabel:h,disabled:D,hidden:L},key:Z,value:_})=>a.createElement(Jt.W,{key:Z,value:_,disabled:D,hidden:L},g(h))))};La.defaultProps={error:void 0,value:""},La.propTypes={error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,modifiedData:s().object.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,options:s().arrayOf(s().shape({metadatas:s().shape({intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,disabled:s().bool,hidden:s().bool}).isRequired,key:s().oneOfType([s().string,s().number]).isRequired,value:s().oneOfType([s().string,s().number]).isRequired}).isRequired).isRequired,value:s().string};const li=La,$a=({description:e,error:n,intlLabel:r,modifiedData:l,name:i,onChange:c,value:d})=>{const{formatMessage:g}=(0,v.Z)(),f=(0,a.useRef)(c),y=l?.displayName||"";(0,a.useEffect)(()=>{y?f.current({target:{name:i,value:(0,Zo.Z)(y)}}):f.current({target:{name:i,value:""}})},[y,i]);const b=n?g({id:n,defaultMessage:n}):"",h=e?g({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",D=g(r);return a.createElement(ua.o,{error:b,label:D,id:i,hint:h,name:i,onChange:c,value:d||""})};$a.defaultProps={description:null,error:null,value:null},$a.propTypes={description:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}),error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,modifiedData:s().object.isRequired,name:s().string.isRequired,onChange:s().func.isRequired,value:s().string};const di=$a,Ko=({form:e,formErrors:n,genericInputProps:r,modifiedData:l,onChange:i})=>{const{formatMessage:c}=(0,v.Z)();return e.map((d,g)=>d.items.length===0?null:a.createElement(M.x,{key:g},d.sectionTitle&&a.createElement(M.x,{paddingBottom:4},a.createElement(me.Z,{variant:"delta",as:"h3"},c(d.sectionTitle))),a.createElement(sa.r,{gap:4},d.items.map((f,y)=>{const b=`${g}.${y}`,h=k()(l,f.name,""),D=Object.keys(n).find(Z=>Z===f.name),L=D?n[D].id:k()(n,[...f.name.split(".").filter(Z=>Z!=="componentToCreate"),"id"],null);return f.type==="pushRight"?a.createElement(Yt.P,{col:f.size||6,key:f.name||b},a.createElement("div",null)):a.createElement(Yt.P,{col:f.size||6,key:f.name||b},a.createElement(m.jm,{...f,...r,error:L,onChange:i,value:h}))}))))};Ko.propTypes={form:s().arrayOf(s().object).isRequired,formErrors:s().object.isRequired,genericInputProps:s().object.isRequired,modifiedData:s().object.isRequired,onChange:s().func.isRequired};const zo=Ko;var ci=o(20603);const Ia=({description:e,disabled:n,error:r,intlLabel:l,labelAction:i,name:c,onChange:d,placeholder:g,value:f})=>{const{formatMessage:y}=(0,v.Z)(),b=r?y({id:r,defaultMessage:r}):"",h=e?y({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",D=y(l),L=g?y({id:g.id,defaultMessage:g.defaultMessage},{...g.values}):"",Z=Array.isArray(f)?f.join(`
`):"",_=G=>{const S=G.target.value.split(`
`);d({target:{name:c,value:S}})};return a.createElement(ci.g,{disabled:n,error:b,label:D,labelAction:i,id:c,hint:h,name:c,onChange:_,placeholder:L,value:Z},Z)};Ia.defaultProps={description:null,disabled:!1,error:"",labelAction:void 0,placeholder:null,value:""},Ia.propTypes={description:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}),disabled:s().bool,error:s().string,intlLabel:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}).isRequired,labelAction:s().element,name:s().string.isRequired,onChange:s().func.isRequired,placeholder:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired,values:s().object}),value:s().oneOfType([s().array,s().string])};const ui=Ia,He={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:(0,p.Z)("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},mi={sections:[{sectionTitle:null,items:[He]}]},Sa={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:(0,p.Z)("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:(0,p.Z)("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:(0,p.Z)("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:(0,p.Z)("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]};var I=o(87561);const ko=/^[A-Za-z][-_0-9A-Za-z]*$/,pi=e=>{const n={name:I.Z_().matches(ko,m.I0.regex).test({name:"nameNotAllowed",message:m.I0.unique,test(r){return r?!e.includes(r?.toLowerCase()):!1}}).required(m.I0.required)};return I.Ry(n)},gi={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:(0,p.Z)("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}};var ut=o(9816);const fi=(e,n,r)=>{const l={displayName:I.Z_().test({name:"nameAlreadyUsed",message:m.I0.unique,test(i){if(!i)return!1;const c=(0,ut.N)(i,r);return!e.includes(c)}}).test({name:"nameNotAllowed",message:(0,p.Z)("error.contentTypeName.reserved-name"),test(i){return i?!n.includes(i?.trim()?.toLowerCase()):!1}}).required(m.I0.required),category:I.Z_().matches(ko,m.I0.regex).required(m.I0.required),icon:I.Z_()};return I.Ry(l)},mt={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:(0,p.Z)("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:(0,p.Z)("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:(0,p.Z)("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},w={default:{name:"default",type:"text",intlLabel:{id:(0,p.Z)("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:(0,p.Z)("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:(0,p.Z)("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:(0,p.Z)("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:(0,p.Z)("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:(0,p.Z)("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:(0,p.Z)("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:(0,p.Z)("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:(0,p.Z)("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:(0,p.Z)("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:(0,p.Z)("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:(0,p.Z)("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:(0,p.Z)("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},wo={advanced:{boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:(0,p.Z)("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.private]}]}},component({repeatable:e},n){return n==="1"?{sections:mt.advanced("componentToCreate")}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.private,w.max,w.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...w.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.unique,w.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.max,w.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...w.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.unique,w.maxLength,w.minLength,w.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:(0,p.Z)("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((n,r)=>e.enum.indexOf(n)===r&&n).map(n=>({key:n,value:n,metadatas:{intlLabel:{id:`${n}.no-override`,defaultMessage:n}}}))]},{intlLabel:{id:(0,p.Z)("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:(0,p.Z)("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:(0,p.Z)("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.private]}]}},number(e){const n=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:n,intlLabel:{id:(0,p.Z)("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.unique,w.max,w.min,w.private]}]}},password(){return{sections:[{sectionTitle:null,items:[w.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.maxLength,w.minLength,w.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[w.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.maxLength,w.minLength,w.private]}]}},text(){return{sections:[{sectionTitle:null,items:[w.default,w.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.unique,w.maxLength,w.minLength,w.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...w.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[w.required,w.maxLength,w.minLength,w.private]}]}}},base:{component(e,n){if(n==="1"){const r=e.createComponent===!0?mt.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[Sa]},...r]}}return{sections:[{sectionTitle:null,items:[He,{name:"component",type:"select-component",intlLabel:{id:(0,p.Z)("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:(0,p.Z)("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:(0,p.Z)("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:(0,p.Z)("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:(0,p.Z)("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[He,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[He]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:(0,p.Z)("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:(0,p.Z)("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[He]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:(0,p.Z)("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:(0,p.Z)("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:(0,p.Z)("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:(0,p.Z)("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[He,{intlLabel:{id:(0,p.Z)("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:(0,p.Z)("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[He]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:(0,p.Z)("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:(0,p.Z)("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:(0,p.Z)("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:(0,p.Z)("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[He]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:(0,p.Z)("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:(0,p.Z)("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:(0,p.Z)("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:(0,p.Z)("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,n,r){const l=r.filter(({type:i})=>["string","text"].includes(i)).map(({name:i})=>({key:i,value:i,metadatas:{intlLabel:{id:`${i}.no-override`,defaultMessage:i}}}));return{sections:[{sectionTitle:null,items:[{...He,placeholder:{id:(0,p.Z)("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:(0,p.Z)("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...l]}]}]}}}};var hi=o(44908),yi=o.n(hi),bi=o(46831),vi=o.n(bi);const Ba=e=>vi()(e,{decamelize:!1,lowercase:!1,separator:"_"});var Ei=o(14841),_a=o.n(Ei);const Ho=/^[A-Za-z][_0-9A-Za-z]*$/,Vo=e=>({name:"attributeNameAlreadyUsed",message:m.I0.unique,test(n){return n?!e.includes(n):!1}}),Jl=(e,n,r)=>{const l=e?.schema?.attributes??{};return Object.keys(l).filter(i=>n?i!==r:!0)},ja=e=>({name:"forbiddenAttributeName",message:(0,p.Z)("error.attributeName.reserved-name"),test(n){return n?!e.includes(n):!1}}),A={default:()=>I.Z_().nullable(),max:()=>I.Rx().integer().nullable(),min:()=>I.Rx().integer().when("max",(e,n)=>e?n.max(e,(0,p.Z)("error.validation.minSupMax")):n).nullable(),maxLength:()=>I.Rx().integer().positive((0,p.Z)("error.validation.positive")).nullable(),minLength:()=>I.Rx().integer().min(0).when("maxLength",(e,n)=>e?n.max(e,(0,p.Z)("error.validation.minSupMax")):n).nullable(),name(e,n){return I.Z_().test(Vo(e)).test(ja(n)).matches(Ho,m.I0.regex).required(m.I0.required)},required:()=>I.O7(),type:()=>I.Z_().required(m.I0.required),unique:()=>I.O7().nullable()},Fa=(e,n)=>({name:A.name(e,n),type:A.type(),default:A.default(),unique:A.unique(),required:A.required(),maxLength:A.maxLength(),minLength:A.minLength(),regex:I.Z_().test({name:"isValidRegExpPattern",message:(0,p.Z)("error.validation.regex"),test(l){return new RegExp(l)!==null}}).nullable()}),Ua={name:"isMinSuperiorThanMax",message:(0,p.Z)("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:n}=this.parent;return!n||Number.isNaN(_a()(e))?!0:_a()(n)>=_a()(e)}},Wa={date(e,n){const r={name:A.name(e,n),type:A.type()};return I.Ry(r)},datetime(e,n){const r={name:A.name(e,n),type:A.type()};return I.Ry(r)},time(e,n){const r={name:A.name(e,n),type:A.type()};return I.Ry(r)},default(e,n){const r={name:A.name(e,n),type:A.type()};return I.Ry(r)},biginteger(e,n){const r={name:A.name(e,n),type:A.type(),default:I.Z_().nullable().matches(/^-?\d*$/),unique:A.unique(),required:A.required(),max:I.Z_().nullable().matches(/^-?\d*$/,m.I0.regex),min:I.Z_().nullable().test(Ua).matches(/^-?\d*$/,m.I0.regex)};return I.Ry(r)},boolean(e,n){const r={name:A.name(e,n),default:I.O7().nullable(),required:A.required(),unique:A.unique()};return I.Ry(r)},component(e,n){const r={name:A.name(e,n),type:A.type(),required:A.required(),max:A.max(),min:A.min(),component:I.Z_().required(m.I0.required)};return I.Ry(r)},decimal(e,n){const r={name:A.name(e,n),type:A.type(),default:I.Rx(),required:A.required(),max:I.Rx(),min:I.Rx().test(Ua)};return I.Ry(r)},dynamiczone(e,n){const r={name:A.name(e,n),type:A.type(),required:A.required(),max:A.max(),min:A.min()};return I.Ry(r)},email(e,n){const r={name:A.name(e,n),type:A.type(),default:I.Z_().email().nullable(),unique:A.unique(),required:A.required(),maxLength:A.maxLength(),minLength:A.minLength()};return I.Ry(r)},enumeration(e,n){const r=/^[_A-Za-z][_0-9A-Za-z]*$/,l={name:I.Z_().test(Vo(e)).test(ja(n)).matches(r,m.I0.regex).required(m.I0.required),type:A.type(),default:A.default(),unique:A.unique(),required:A.required(),enum:I.IX().of(I.Z_()).min(1,m.I0.min).test({name:"areEnumValuesUnique",message:(0,p.Z)("error.validation.enum-duplicate"),test(i){return!yi()(i.map(Ba).filter((d,g,f)=>f.indexOf(d)!==g)).length}}).test({name:"doesNotHaveEmptyValues",message:(0,p.Z)("error.validation.enum-empty-string"),test:i=>!i.map(Ba).some(c=>c==="")}).test({name:"doesMatchRegex",message:(0,p.Z)("error.validation.enum-regex"),test:i=>i.map(Ba).every(c=>r.test(c))}),enumName:I.Z_().nullable()};return I.Ry(l)},float(e,n){const r={name:A.name(e,n),type:A.type(),required:A.required(),default:I.Rx(),max:I.Rx(),min:I.Rx().test(Ua)};return I.Ry(r)},integer(e,n){const r={name:A.name(e,n),type:A.type(),default:I.Rx().integer(),unique:A.unique(),required:A.required(),max:A.max(),min:A.min()};return I.Ry(r)},json(e,n){const r={name:A.name(e,n),type:A.type(),required:A.required(),unique:A.unique()};return I.Ry(r)},media(e,n){const r={name:A.name(e,n),type:A.type(),multiple:I.O7(),required:A.required(),allowedTypes:I.IX().of(I.Z_().oneOf(["images","videos","files","audios"])).min(1).nullable()};return I.Ry(r)},password(e,n){const r={name:A.name(e,n),type:A.type(),default:A.default(),unique:A.unique(),required:A.required(),maxLength:A.maxLength(),minLength:A.minLength()};return I.Ry(r)},relation(e,n,r,{initialData:l,modifiedData:i}){const c={name:A.name(e,n),target:I.Z_().required(m.I0.required),relation:I.Z_().required(),type:I.Z_().required(),targetAttribute:I.Vo(()=>{const d=(0,Ea.Z)(i.relation,i.targetAttribute);if(d==="oneWay"||d==="manyWay")return I.Z_().nullable();let g=I.Z_().test(ja(n)),y=[...r.map(({name:b})=>b),i.name].filter(b=>b!==l.targetAttribute);return g.matches(Ho,m.I0.regex).test({name:"forbiddenTargetAttributeName",message:(0,p.Z)("error.validation.relation.targetAttribute-taken"),test(b){return b?!y.includes(b):!1}}).required(m.I0.required)})};return I.Ry(c)},richtext(e,n){const r={name:A.name(e,n),type:A.type(),default:A.default(),unique:A.unique(),required:A.required(),maxLength:A.maxLength(),minLength:A.minLength()};return I.Ry(r)},string(e,n){const r=Fa(e,n);return I.Ry(r)},text(e,n){const r=Fa(e,n);return I.Ry(r)},uid(e,n){const r=Fa(e,n);return I.Ry(r)}},Mi=({usedContentTypeNames:e=[],reservedModels:n=[],singularNames:r=[],pluralNames:l=[],collectionNames:i=[]})=>{const c={displayName:I.Z_().test({name:"nameAlreadyUsed",message:m.I0.unique,test(d){if(!d)return!1;const g=(0,ut.E)(d);return!e.includes(g)}}).test({name:"nameNotAllowed",message:(0,p.Z)("error.contentTypeName.reserved-name"),test(d){return d?!n.includes(d?.trim()?.toLowerCase()):!1}}).required(m.I0.required),pluralName:I.Z_().test({name:"pluralNameAlreadyUsed",message:m.I0.unique,test(d){return d?!l.includes(d):!1}}).test({name:"pluralNameAlreadyUsedAsSingular",message:(0,p.Z)("error.contentType.pluralName-equals-singularName"),test(d){return d?!r.includes(d):!1}}).test({name:"pluralAndSingularAreUnique",message:(0,p.Z)("error.contentType.pluralName-used"),test(d,g){return d?g.parent.singularName!==d:!1}}).test({name:"pluralNameNotAllowed",message:(0,p.Z)("error.contentTypeName.reserved-name"),test(d){return d?!n.includes(d?.trim()?.toLowerCase()):!1}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:(0,p.Z)("error.contentType.pluralName-equals-collectionName"),test(d){return d?!i.includes(d?.trim()?.toLowerCase()):!1}}).required(m.I0.required),singularName:I.Z_().test({name:"singularNameAlreadyUsed",message:m.I0.unique,test(d){return d?!r.includes(d):!1}}).test({name:"singularNameAlreadyUsedAsPlural",message:(0,p.Z)("error.contentType.singularName-equals-pluralName"),test(d){return d?!l.includes(d):!1}}).test({name:"pluralAndSingularAreUnique",message:(0,p.Z)("error.contentType.singularName-used"),test(d,g){return d?g.parent.pluralName!==d:!1}}).test({name:"singularNameNotAllowed",message:(0,p.Z)("error.contentTypeName.reserved-name"),test(d){return d?!n.includes(d?.trim()?.toLowerCase()):!1}}).required(m.I0.required),draftAndPublish:I.O7(),kind:I.Z_().oneOf(["singleType","collectionType"]),reviewWorkflows:I.O7()};return I.Ry(c)},Go={name:"displayName",type:"text",intlLabel:{id:(0,p.Z)("contentType.displayName.label"),defaultMessage:"Display name"}},Na={advanced:{default(){return{sections:[{items:[{intlLabel:{id:(0,p.Z)("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:(0,p.Z)("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[Go,{description:{id:(0,p.Z)("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:(0,p.Z)("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:(0,p.Z)("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:(0,p.Z)("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[Go,{disabled:!0,description:{id:(0,p.Z)("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:(0,p.Z)("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:(0,p.Z)("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:(0,p.Z)("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:(0,p.Z)("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:(0,p.Z)("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:(0,p.Z)("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:(0,p.Z)("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},Ka={advanced:{default(){return{sections:mt.advanced("componentToCreate.")}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[Sa]},...mt.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[Sa]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:(0,p.Z)("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},Yo=(e,n)=>{e.forEach(r=>{if(!("sectionTitle"in r)){n[0].items.push(r);return}n.push(r)})},Xo=(e,n)=>e.filter(({name:r})=>r!==n.initialData.name).map(({name:r})=>r),nt={customField:{schema({schemaAttributes:e,attributeType:n,customFieldValidator:r,reservedNames:l,schemaData:i,ctbFormsAPI:c}){const d=Xo(e,i),g=Wa[n](d,l.attributes);return c.makeCustomFieldValidator(g,r,d,l.attributes,i)},form:{base({customField:e}){const n=[{sectionTitle:null,items:[He]}];return e.options?.base&&Yo(e.options.base,n),{sections:n}},advanced({customField:e,data:n,step:r,extensions:l,...i}){const c=[{sectionTitle:null,items:[]}],d=l.getAdvancedForm(["attribute",e.type],{data:n,type:e.type,step:r,...i});if(e.options?.advanced&&Yo(e.options.advanced,c),d){const g={sectionTitle:{id:(0,p.Z)("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:d};c.push(g)}return{sections:c}}}},attribute:{schema(e,n,r,l,i,c){const d=e?.schema?.attributes??[],g=Xo(d,i);try{let f=Wa[n](g,r.attributes,l,i);return c.makeValidator(["attribute",n],f,g,r.attributes,l,i)}catch(f){return console.error("Error yup build schema",f),Wa.default(g,r.attributes)}},form:{advanced({data:e,type:n,step:r,extensions:l,...i}){try{const c=wo.advanced[n](e,r).sections,d=l.getAdvancedForm(["attribute",n],{data:e,type:n,step:r,...i});return{sections:c.reduce((f,y)=>(y.sectionTitle===null?f.push(y):f.push({...y,items:[...y.items,...d]}),f),[])}}catch(c){return console.error(c),{sections:[]}}},base({data:e,type:n,step:r,attributes:l}){try{return wo.base[n](e,r,l)}catch{return mi}}}},contentType:{schema(e,n,r,l,i,c){const d=Object.values(c).map(Z=>Z.schema.singularName),g=Object.values(c).map(Z=>Z?.schema?.pluralName??""),f=n?e.filter(Z=>Z!==r):e,y=n?d.filter(Z=>{const{schema:_}=c[r];return _.singularName!==Z}):d,b=n?g.filter(Z=>{const{schema:_}=c[r];return _.pluralName!==Z}):g,h=Object.values(c).map(Z=>Z?.schema?.collectionName??""),D=n?h.filter(Z=>{const{schema:_}=c[r],G=_.pluralName,S=_.collectionName;return Z!==G||Z!==S}):h,L=Mi({usedContentTypeNames:f,reservedModels:l.models,singularNames:y,pluralNames:b,collectionNames:D});return i.makeValidator(["contentType"],L,f,l.models,y,b)},form:{base({actionType:e}){return e==="create"?Na.base.create():Na.base.edit()},advanced({extensions:e}){const n=Na.advanced.default().sections.map(l=>l.items).flat(),r=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...n,...r]}]}}}},component:{schema(e,n,r,l=!1,i=null){const c=l?e.filter(d=>d!==i):e;return fi(c,r.models,n)},form:{advanced(){return{sections:mt.advanced()}},base(){return{sections:mt.base()}}}},addComponentToDynamicZone:{form:{advanced(){return Ka.advanced.default()},base({data:e}){return e?.createComponent??!1?Ka.base.createComponent():Ka.base.default()}}},editCategory:{schema(e,n){const r=e.filter(l=>l!==n.name).map(l=>l.toLowerCase());return pi(r)},form:{advanced:()=>({sections:[]}),base(){return gi.base}}}};var Qo=o(67100),Ci=o(87777);const Ti=()=>e=>e[`${ue.Z}_formModal`]||Ci.E,xi=()=>(0,Qo.P1)(Ti(),e=>e),Ri=(e,n)=>{const r=k()(e,["contentType","schema","kind"],"");return r==="singleType"||r===n.kind?!0:k()(e,["contentType","schema","attributes"],[]).filter(({relation:c,type:d,targetAttribute:g})=>{const f=(0,Ea.Z)(c,g);return d==="relation"&&!["oneWay","manyWay"].includes(f)}).length===0},Oi=(e="",n,r)=>{const l=["text","email","richtext","password","number","enumeration","date","media","boolean","json","relation"],i=e==="contentType",c=r.includes(n),d=!i&&!c;return i?[[...l,"uid"],["component","dynamiczone"]]:d?[l,["component"]]:[l]},Jo=e=>e.reduce((n,r)=>{const l=r.items.reduce((i,c)=>(c.name&&i.push(c.name),i),[]);return[...n,...l]},[]),Ai=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:n,onNavigateToAddCompoToDZModal:r,onNavigateToCreateComponentStep2:l,actionType:i,attributeName:c,attributeType:d,customFieldUid:g,categoryName:f,dynamicZoneTarget:y,forTarget:b,modalType:h,isOpen:D,showBackLink:L,kind:Z,step:_,targetUid:G}=(0,tt.Z)(),S=(0,m.mZ)().get(g),W=(0,a.useRef)(),F=(0,a.useMemo)(xi,[]),Q=(0,rt.I0)(),de=(0,m.lm)(),Te=(0,rt.v9)(ae=>F(ae),rt.wU),{push:$e}=(0,R.k6)(),{trackUsage:q}=(0,m.rS)(),{formatMessage:Ze}=(0,v.Z)(),{getPlugin:ce}=(0,m.j1)(),be=ce(ue.Z).apis.forms,ye=be.components.inputs,{addAttribute:Ye,addCustomFieldAttribute:xe,addCreatedComponentToDynamicZone:ie,allComponentsCategories:N,changeDynamicZoneComponents:ka,contentTypes:pt,components:Pt,createSchema:gt,deleteCategory:wa,deleteData:tn,editCategory:Ha,editCustomFieldAttribute:Va,submitData:Ga,modifiedData:Oe,nestedComponents:Ya,setModifiedData:Xa,sortedContentTypesList:Qa,updateSchema:nn,reservedNames:at}=(0,ke.Z)(),{componentToCreate:Zt,formErrors:Xe,initialData:Ee,isCreatingComponentWhileAddingAField:Dt,modifiedData:x}=Te,z=b==="contentType"||b==="component"?[b]:[b,G];(0,a.useEffect)(()=>{if(D){const ae=Qa.filter(uo);h==="editCategory"&&Xa(),i==="edit"&&h==="attribute"&&b==="contentType"&&q("willEditFieldOfContentType");const Be=[...z,"schema","attributes"],Ue=aa(k()(Oe,Be,[]),y)||null;if(h==="editCategory"&&i==="edit"&&Q({type:he._H,modalType:h,actionType:i,data:{name:f}}),h==="contentType"&&i==="create"&&Q({type:he._H,modalType:h,actionType:i,data:{draftAndPublish:!0},pluginOptions:{}}),h==="contentType"&&i==="edit"){const{displayName:re,draftAndPublish:Me,kind:We,pluginOptions:Pe,pluralName:El,reviewWorkflows:Ml,singularName:Cl}=k()(Oe,[...z,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});Q({type:he._H,actionType:i,modalType:h,data:{displayName:re,draftAndPublish:Me,kind:We,pluginOptions:Pe,pluralName:El,reviewWorkflows:Ml??!1,singularName:Cl}})}if(h==="component"&&i==="edit"){const re=k()(Oe,z,{});Q({type:he._H,actionType:i,modalType:h,data:{displayName:re.schema.displayName,category:re.category,icon:re.schema.icon}})}if(h==="addComponentToDynamicZone"&&i==="edit"){const re={...Ue,components:[],name:y,createComponent:!1,componentToCreate:{type:"component"}};Q({type:he.VZ,attributeToEdit:re})}if(d){const Me={...aa(k()(Oe,Be,[]),c),name:c};d==="component"&&i==="edit"&&(Me.repeatable||so()(Me,"repeatable",!1)),Q(h==="customField"?{type:he.OY,customField:S,isEditing:i==="edit",modifiedDataToSetForEditing:Me,forTarget:b}:{type:he.S0,attributeType:d,nameToSetForRelation:k()(ae,["0","title"],"error"),targetUid:k()(ae,["0","uid"],"error"),isEditing:i==="edit",modifiedDataToSetForEditing:Me,step:_,forTarget:b})}}else Q({type:he.c2})},[i,c,d,f,y,b,D,h]);const ee=h==="contentType",ve=h==="component",Ae=h==="attribute",Se=h==="customField",Qe=d==="component"&&Ae,st=i==="create",ot=k()(x,"createComponent",!1)||Dt,ft=_==="1",cr=h==="editCategory",ur=h==="chooseAttribute",Ja=(0,ut.E)(x.displayName||""),qa=k()(Oe,[...z,"schema","attributes"],null),sl=async()=>{let ae;const Be=ot&&_==="1"?k()(x,"componentToCreate",{}):x;if(ee)ae=nt.contentType.schema(Object.keys(pt),i==="edit",k()(Oe,[...z,"uid"],null),at,be,pt);else if(ve)ae=nt.component.schema(Object.keys(Pt),x.category||"",at,i==="edit",k()(Oe,[...z,"uid"],null),be);else if(Se)ae=nt.customField.schema({schemaAttributes:k()(Oe,[...z,"schema","attributes"],[]),attributeType:S.type,reservedNames:at,schemaData:{modifiedData:x,initialData:Ee},ctbFormsAPI:be,customFieldValidator:S.options?.validator});else if(Qe&&ot&&ft)ae=nt.component.schema(Object.keys(Pt),k()(x,"componentToCreate.category",""),at,be);else if(Ae&&!ft){const Ue=d==="relation"?"relation":x.type;let re=[];if(Ue==="relation"){const Me=k()(x,["target"],null);re=k()(pt,[Me,"schema","attributes"],[]).filter(({name:Pe})=>i!=="edit"?!0:Pe!==Ee.targetAttribute)}ae=nt.attribute.schema(k()(Oe,z,{}),Ue,at,re,{modifiedData:x,initialData:Ee},be)}else if(cr)ae=nt.editCategory.schema(N,Ee,be);else if(ft&&ot)ae=nt.component.schema(Object.keys(Pt),k()(x,"componentToCreate.category",""),at,be);else return;await ae.validate(Be,{abortEarly:!1})},mr=(0,a.useCallback)(({target:{name:ae,value:Be,type:Ue,...re}})=>{const Me=["enumName","max","min","maxLength","minLength","regex","default"];let We;Me.includes(ae)&&Be===""?We=null:We=Be;const Pe=Object.assign({},Xe);ae==="max"&&delete Pe.min,ae==="maxLength"&&delete Pe.minLength,delete Pe[ae],Q({type:he.Ey,errors:Pe}),Q({type:he.P0,keys:ae.split("."),value:We,...re})},[Q,Xe]),Fe=async(ae,Be=st)=>{ae.preventDefault();try{await sl(),dl(Be);const Ue=b==="components"?G:Ja;if(ee)if(st)gt({...x,kind:Z},h,Ja),$e({pathname:`/plugins/${ue.Z}/content-types/${Ja}`}),n({forTarget:b,targetUid:Ue});else{Ri(Oe,x)?(e(),Ga(x)):de({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(h==="component")if(st){const re=(0,ut.N)(x.displayName,x.category),{category:Me,...We}=x;gt(We,"component",re,Me),$e({pathname:`/plugins/${ue.Z}/component-categories/${Me}/${re}`}),n({forTarget:b,targetUid:re})}else{nn(x,h,G),e();return}else if(cr){if(co()(Ee.name)===co()(x.name)){e();return}Ha(Ee.name,x);return}else if(Se){const re={attributeToSet:{...x,customField:g},forTarget:b,targetUid:G,initialAttribute:Ee};i==="edit"?Va(re):xe(re),Be?n({forTarget:b,targetUid:Ue}):e();return}else if(Ae&&!ot){if(d==="dynamiczone"){Ye(x,b,G,i==="edit",Ee),st?(Q({type:he.I}),W.current._handlers.setSelectedTabIndex(0),r({dynamicZoneTarget:x.name})):e();return}if(!Qe){Ye(x,b,G,i==="edit",Ee),Be?n({forTarget:b,targetUid:Ue}):e();return}if(ft){l(),Q({type:he.yC,forTarget:b});return}Ye(x,b,G,i==="edit",Ee,!0),Be?n({forTarget:b,targetUid:G}):e()}else if(Ae&&ot){if(ft){q("willCreateComponentFromAttributesModal"),Q({type:he.oF,forTarget:b}),l();return}const{category:re,type:Me,...We}=Zt,Pe=(0,ut.N)(Zt.displayName,re);gt(We,Me,Pe,re,ot),Ye(x,b,G,!1),Q({type:he.c2}),Be?n({forTarget:"components",targetUid:Pe}):e();return}else{if(ft)if(ot){const{category:re,type:Me,...We}=x.componentToCreate,Pe=(0,ut.N)(x.componentToCreate.displayName,re);gt(We,Me,Pe,re,ot),ie(y,[Pe]),n({forTarget:"components",targetUid:Pe})}else ka(y,x.components),e();else console.error("This case is not handled");return}Q({type:he.c2})}catch(Ue){const re=(0,m.CJ)(Ue);console.log({err:Ue,errors:re}),Q({type:he.Ey,errors:re})}},il=()=>{window.confirm(Ze({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),Q({type:he.c2}))},pr=()=>{Tt()(x,Ee)?(e(),Q({type:he.c2})):il()},ll=ae=>{if(ae==="advanced"){if(ee){q("didSelectContentTypeSettings");return}b==="contentType"&&q("didSelectContentTypeFieldSettings")}},dl=ae=>{h==="attribute"&&b==="contentType"&&d!=="dynamiczone"&&ae&&q("willAddMoreFieldToContentType")},cl=()=>!!(h==="editCategory"||h==="component"||Pr()(x,"createComponent")),ul=Oi(b,G,Ya);if(!D||!h)return null;const gr=k()(nt,[h,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),ml=b==="components"||b==="component",fr={customInputs:{"allowed-types-select":Lr,"boolean-radio-group":Yr,"checkbox-with-number-field":Qr,"icon-picker":gs,"content-type-radio-group":Jr,"radio-group":ca,relation:ti,"select-category":oi,"select-component":ri,"select-components":si,"select-default-boolean":Vr,"select-number":li,"select-date":ii,"toggle-draft-publish":qr,"text-plural":hs,"text-singular":di,"textarea-enum":ui,...ye},componentToCreate:Zt,dynamicZoneTarget:y,formErrors:Xe,isAddingAComponentToAnotherComponent:ml,isCreatingComponentWhileAddingAField:Dt,mainBoxHeader:k()(Oe,[...z,"schema","displayName"],""),modifiedData:x,naturePickerType:b,isCreating:st,targetUid:G,forTarget:b},hr=gr.advanced({data:x,type:d,step:_,actionType:i,attributes:qa,extensions:be,forTarget:b,contentTypeSchema:Oe.contentType||{},customField:S}).sections,yr=gr.base({data:x,type:d,step:_,actionType:i,attributes:qa,extensions:be,forTarget:b,contentTypeSchema:Oe.contentType||{},customField:S}).sections,pl=Jo(yr),gl=Jo(hr),fl=Object.keys(Xe).some(ae=>pl.includes(ae)),hl=Object.keys(Xe).some(ae=>gl.includes(ae)),yl=k()(pt,[G,"schema","kind"]),bl=()=>i==="edit"&&qa.every(({name:ae})=>ae!==x?.name),vl=()=>{bl()&&q("didEditFieldNameOnContentType")};return a.createElement(Rr.P,{onClose:pr,labelledBy:"title"},a.createElement(as,{actionType:i,attributeName:c,categoryName:f,contentTypeKind:Z,dynamicZoneTarget:y,modalType:h,forTarget:b,targetUid:G,attributeType:d,customFieldUid:g,showBackLink:L}),ur&&a.createElement(Hr,{attributes:ul,forTarget:b,kind:yl||"collectionType"}),!ur&&a.createElement("form",{onSubmit:Fe},a.createElement(io.f,null,a.createElement(lo.v,{label:"todo",id:"tabs",variant:"simple",ref:W,onTabChange:ae=>{ae===1&&ll("advanced")}},a.createElement(ne.k,{justifyContent:"space-between"},a.createElement(rs,{actionType:i,forTarget:b,kind:Z,step:_,modalType:h,attributeType:d,attributeName:c,customField:S}),a.createElement(dt.m,null,a.createElement(dt.O,{hasError:fl},Ze({id:(0,p.Z)("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})),a.createElement(dt.O,{hasError:hl,disabled:cl()},Ze({id:(0,p.Z)("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})))),a.createElement(na.i,null),a.createElement(M.x,{paddingTop:6},a.createElement(ct.n,null,a.createElement(ct.x,null,a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:6},a.createElement(zo,{form:yr,formErrors:Xe,genericInputProps:fr,modifiedData:x,onChange:mr}))),a.createElement(ct.x,null,a.createElement(ne.k,{direction:"column",alignItems:"stretch",gap:6},a.createElement(zo,{form:hr,formErrors:Xe,genericInputProps:fr,modifiedData:x,onChange:mr}))))))),a.createElement(Or.m,{endActions:a.createElement(es,{deleteCategory:wa,deleteContentType:tn,deleteComponent:tn,categoryName:Ee.name,isAttributeModal:h==="attribute",isCustomFieldModal:h==="customField",isComponentToDzModal:h==="addComponentToDynamicZone",isComponentAttribute:d==="component",isComponentModal:h==="component",isContentTypeModal:h==="contentType",isCreatingComponent:i==="create",isCreatingDz:i==="create",isCreatingComponentAttribute:x.createComponent||!1,isCreatingComponentInDz:x.createComponent||!1,isCreatingComponentWhileAddingAField:Dt,isCreatingContentType:i==="create",isEditingAttribute:i==="edit",isDzAttribute:d==="dynamiczone",isEditingCategory:h==="editCategory",isInFirstComponentStep:_==="1",onSubmitAddComponentAttribute:Fe,onSubmitAddComponentToDz:Fe,onSubmitCreateComponent:Fe,onSubmitCreateContentType:Fe,onSubmitCreateDz:Fe,onSubmitEditAttribute:Fe,onSubmitEditCategory:Fe,onSubmitEditComponent:Fe,onSubmitEditContentType:Fe,onSubmitEditCustomFieldAttribute:Fe,onSubmitEditDz:Fe,onClickFinish:vl}),startActions:a.createElement(fe.z,{variant:"tertiary",onClick:pr},Ze({id:"app.components.Button.cancel",defaultMessage:"Cancel"}))})))};var Ce=o(97699),Pi=o(21957);const Zi=()=>e=>e[`${ue.Z}_dataManagerProvider`]||Pi.E,Di=()=>(0,Qo.P1)(Zi(),e=>e);var Li=o(68929),$i=o.n(Li),Ii=o(57557),qo=o.n(Ii),Si=o(89734),Bi=o.n(Si);const _i=(e,n)=>{const r=Object.keys(e).filter(l=>{const i=k()(e,l,{}),c=k()(n,l,{}),d=k()(i,["isTemporary"],!1),g=!Tt()(i,c);return d||g});return(0,lt.Z)(r)},ji=(e,n)=>{const r=tr(k()(e,"schema.attributes",[]),n),l=k()(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},l,{category:e.category},qo()(e.schema,"attributes"),{attributes:r})},er=(e,n=!1)=>{const r=k()(e,"uid",null),l=tr(k()(e,"schema.attributes",[]),r),i=n?{category:k()(e,"category","")}:{},c=Object.assign(i,qo()(e.schema,"attributes"),{attributes:l});return delete c.uid,delete c.isTemporary,delete c.visible,delete c.restrictRelationsTo,c},tr=(e,n)=>e.reduce((r,{name:l,...i})=>{const c=i,d=c.target===n,g=c.type==="relation",f=k()(c,"targetAttribute",null);if(!d)if(g){const y=Object.assign({},c,{targetAttribute:nr(f)});r[l]=en(y)}else r[l]=en(c);if(d){const y=c.target,b=Object.assign({},c,{target:y,targetAttribute:nr(f)});r[l]=en(b)}if(c.customField){const y={...c,type:"customField"};r[l]=en(y)}return r},{}),nr=e=>e==="-"?null:e,en=e=>Object.keys(e).reduce((n,r)=>(e[r]!==null&&r!=="plugin"&&(n[r]=e[r]),n),{}),Fi=(e,n,r,l=!1)=>_i(e,n).map(d=>{const g=k()(e,d,{});return ji(g,r,l)}),Ui=e=>Bi()(Object.keys(e).map(n=>({visible:e[n].schema.visible,name:n,title:e[n].schema.displayName,plugin:e[n].plugin||null,uid:n,to:`/plugins/${ue.Z}/content-types/${n}`,kind:e[n].schema.kind,restrictRelationsTo:e[n].schema.restrictRelationsTo})).filter(n=>n!==null),n=>$i()(n.title)),ar=e=>e.reduce((n,r)=>(n[r.uid]=r,n),{}),Wi=(e,n,r,l)=>{const i=n.reduce((g,f)=>{const y=k()(r,f,{});return g[f]=y,g},{});return{[l?"contentType":"component"]:e,components:i}},Ni=e=>Object.keys(e).reduce((n,r)=>{const l=e[r].schema;return n[r]={...e[r],schema:{...l,attributes:Ki(l.attributes)}},n},{}),Ki=e=>Object.keys(e).reduce((n,r)=>(n.push({...e[r],name:r}),n),[]),or=Ni;var zi=o(26223);const ki=e=>{const n=Object.keys(e).reduce((r,l)=>{const i=k()(e,[l],{}),c=i.uid;return wi(i)&&r.push(c),r},[]);return(0,lt.Z)(n)},wi=e=>k()(e,["schema","attributes"],[]).some(r=>{const{type:l}=r;return l==="component"}),Hi=e=>{const n=Object.keys(e).reduce((r,l)=>{const i=e?.[l]?.schema?.attributes??[],c=Vi(i);return[...r,...c]},[]);return(0,lt.Z)(n)},Vi=e=>e.reduce((n,r)=>{const{type:l,component:i}=r;return l==="component"&&n.push(i),n},[]),rr=Hi,Gi=(e,n)=>{const r=Object.keys(e).map(l=>k()(e,[l,...n],""));return(0,lt.Z)(r)},sr="did-not-kill-server",Yi="server is down";function At(e,n){return new Promise(r=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":!1}}).then(l=>{if(l.status>=400)throw new Error(Yi);if(!n)throw new Error(sr);r(e)}).catch(l=>{setTimeout(()=>At(e,l.message!==sr).then(r),100)})})}const Xi=e=>Object.values(e.attributes).filter(({type:r})=>r==="dynamiczone").every(({components:r})=>Array.isArray(r)&&r.length>0),za=({children:e,components:n,contentTypes:r,isLoading:l,isLoadingForDataToBeSet:i,initialData:c,modifiedData:d,reservedNames:g})=>{const f=(0,rt.I0)(),y=(0,m.lm)(),{lockAppWithAutoreload:b,unlockAppWithAutoreload:h}=(0,m.Vu)(),{setCurrentStep:D}=(0,m.c1)(),{getPlugin:L}=(0,m.j1)(),{apis:Z}=L(ue.Z),{autoReload:_}=(0,m.L7)(),{formatMessage:G}=(0,v.Z)(),{trackUsage:S}=(0,m.rS)(),{refetchPermissions:W}=(0,m.vn)(),{pathname:F}=(0,R.TH)(),{onCloseModal:Q}=(0,tt.Z)(),de=(0,R.$B)(`/plugins/${ue.Z}/content-types/:uid`),Te=(0,R.$B)(`/plugins/${ue.Z}/component-categories/:categoryUid/:componentUid`),$e=(0,m.kY)(),{put:q,post:Ze,del:ce}=$e,Ie=(0,a.useRef)();Ie.current=G;const be=_,ye=de!==null,Ye=ye?"contentType":"component",xe=ye?k()(de,"params.uid",null):k()(Te,"params.componentUid",null),ie=(0,a.useRef)(),N=ye?"content-types":"components";ie.current=async()=>{try{const[{data:{data:x}},{data:{data:z}},{data:ee}]=await Promise.all(["components","content-types","reserved-names"].map(st=>$e.get(`/${ue.Z}/${st}`))),ve=ar(x),Ae=or(ve),Se=ar(z),Qe=or(Se);f({type:Ce.Id,components:Ae,contentTypes:Qe,reservedNames:ee})}catch(x){console.error({err:x}),y({type:"warning",message:{id:"notification.error"}})}},(0,a.useEffect)(()=>(ie.current(),()=>{f({type:Ce.Zl})}),[]),(0,a.useEffect)(()=>{!l&&xe&&nn()},[l,F,xe]),(0,a.useEffect)(()=>{_||y({type:"info",message:{id:(0,p.Z)("notification.info.autoreaload-disable")}})},[_,y]);const ka=(x,z,ee,ve=!1,Ae,Se=!1)=>{const Qe=ve?Ce.JO:Ce.gz;f({type:Qe,attributeToSet:x,forTarget:z,targetUid:ee,initialAttribute:Ae,shouldAddComponentToData:Se})},pt=({attributeToSet:x,forTarget:z,targetUid:ee,initialAttribute:ve})=>{f({type:Ce.Ir,attributeToSet:x,forTarget:z,targetUid:ee,initialAttribute:ve})},Pt=({attributeToSet:x,forTarget:z,targetUid:ee,initialAttribute:ve})=>{f({type:Ce.Ly,attributeToSet:x,forTarget:z,targetUid:ee,initialAttribute:ve})},gt=(x,z)=>{f({type:Ce.Uu,dynamicZoneTarget:x,componentsToAdd:z})},wa=(x,z,ee,ve,Ae=!1)=>{const Se=z==="contentType"?Ce.Sh:Ce.VR;f({type:Se,data:x,componentCategory:ve,schemaType:z,uid:ee,shouldAddComponentToData:Ae})},tn=(x,z)=>{f({type:Ce.o_,dynamicZoneTarget:x,newComponents:z})},Ha=(x,z,ee="")=>{const ve=x==="components"?Ce.lw:Ce.ai;x==="contentType"&&S("willDeleteFieldOfContentType"),f({type:ve,mainDataKey:x,attributeToRemoveName:z,componentUid:ee})},Va=async x=>{try{const z=`/${ue.Z}/component-categories/${x}`,ee=window.confirm(G({id:(0,p.Z)("popUpWarning.bodyMessage.category.delete")}));Q(),ee&&(b(),await ce(z),await At(!0),await h(),await Ee())}catch(z){console.error({err:z}),y({type:"warning",message:{id:"notification.error"}})}finally{h()}},Ga=async()=>{try{const x=`/${ue.Z}/${N}/${xe}`,z=k()(d,[Ye,"isTemporary"],!1),ee=window.confirm(G({id:(0,p.Z)(`popUpWarning.bodyMessage.${ye?"contentType":"component"}.delete`)}));if(Q(),ee){if(z){f({type:Ce.Ap});return}b(),await ce(x),await At(!0),await h(),await Ee()}}catch(x){console.error({err:x}),y({type:"warning",message:{id:"notification.error"}})}finally{h()}},Oe=async(x,z)=>{try{const ee=`/${ue.Z}/component-categories/${x}`;Q(),b(),await q(ee,z),await At(!0),await h(),await Ee()}catch(ee){console.error({err:ee}),y({type:"warning",message:{id:"notification.error"}})}finally{h()}},Ya=()=>{const x=Object.assign({},n,d.components);if(!ye){const ee=k()(d,"component",{});so()(x,k()(ee,["uid"],""),ee)}const z=ki(x);return(0,lt.Z)(z)},Xa=()=>{const x=rr(n),z=rr(d.components||{});return(0,lt.Z)([...z,...x])},Qa=(x,z)=>{f({type:Ce.NG,dzName:x,componentToRemoveIndex:z})},nn=()=>{const x=ye?r:n,z=k()(x,xe,{schema:{attributes:[]}}),ee=(0,zi.Z)(z.schema.attributes,n),ve=Wi(z,ee,n,ye),Ae=k()(z,"isTemporary",!1)&&Mr()(k()(z,"schema.attributes",[]))===0;f({type:Ce.xx,schemaToSet:ve,hasJustCreatedSchema:Ae})},at=(0,a.useMemo)(()=>{const x=ye?r:n;return xe==="create-content-type"?!1:!Object.keys(x).includes(xe)&&!l},[n,r,xe,ye,l]),Zt=(0,a.useMemo)(()=>{const x=Object.keys(r).filter(z=>k()(r,[z,"schema","visible"],!0)).sort();return k()(x,"0","create-content-type")},[r]);if(at)return a.createElement(R.l_,{to:`/plugins/${ue.Z}/content-types/${Zt}`});const Xe=async x=>{try{const z=k()(d,[Ye,"isTemporary"],!1),ee={components:Fi(d.components,n,xe,z)};if(ye){const Se=Z.forms.mutateContentTypeSchema({...er(d.contentType),...x},c.contentType);if(!Xi(Se)){y({type:"warning",message:{id:(0,p.Z)("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}ee.contentType=Se,S("willSaveContentType")}else ee.component=er(d.component,!0),S("willSaveComponent");b();const ve=`/${ue.Z}/${N}`,Ae=z?ve:`${ve}/${xe}`;if(z?await Ze(Ae,ee):await q(Ae,ee),await At(!0),await h(),z&&(c.contentType?.schema.kind==="collectionType"||c.contentType?.schema.kind==="singleType")&&D("contentTypeBuilder.success"),ye){S("didSaveContentType");const Se=k()(ee,["contentType","schema","name"],""),Qe=k()(c,["contentType","schema","name"],"");!z&&Se!==Qe&&S("didEditNameOfContentType")}else S("didSaveComponent");await Ee()}catch(z){ye||S("didNotSaveComponent"),console.error({err:z.response}),y({type:"warning",message:{id:"notification.error"}})}finally{h()}},Ee=async()=>{await W()},Dt=(x,z,ee)=>{f({type:Ce.bi,data:x,schemaType:z,uid:ee})};return a.createElement(xr.Z.Provider,{value:{addAttribute:ka,addCustomFieldAttribute:pt,addCreatedComponentToDynamicZone:gt,allComponentsCategories:Gi(n,["category"]),changeDynamicZoneComponents:tn,components:n,componentsGroupedByCategory:br()(n,"category"),componentsThatHaveOtherComponentInTheirAttributes:Ya(),contentTypes:r,createSchema:wa,deleteCategory:Va,deleteData:Ga,editCategory:Oe,editCustomFieldAttribute:Pt,isInDevelopmentMode:be,initialData:c,isInContentTypeView:ye,modifiedData:d,nestedComponents:Xa(),removeAttribute:Ha,removeComponentFromDynamicZone:Qa,reservedNames:g,setModifiedData:nn,sortedContentTypesList:Ui(r),submitData:Xe,updateSchema:Dt}},i?a.createElement(m.dO,null):a.createElement(a.Fragment,null,e,be&&a.createElement(Ai,null)))};za.defaultProps={components:{}},za.propTypes={children:s().node.isRequired,components:s().object,contentTypes:s().object.isRequired,isLoading:s().bool.isRequired,isLoadingForDataToBeSet:s().bool.isRequired,initialData:s().object.isRequired,modifiedData:s().object.isRequired,reservedNames:s().object.isRequired};const Qi=Di(),Ji=(0,rt.$j)(Qi,null),qi=(0,Tr.compose)(Ji)((0,a.memo)(za));var el=o(6356);const ir={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},lr=({children:e})=>{const[n,r]=(0,a.useState)(ir),{trackUsage:l}=(0,m.rS)(),i=({attributeType:S,customFieldUid:W})=>{r(F=>({...F,actionType:"create",modalType:"customField",attributeType:S,customFieldUid:W}))},c=({attributeType:S,step:W})=>{n.forTarget==="contentType"&&l("didSelectContentTypeFieldType",{type:S}),r(F=>({...F,actionType:"create",modalType:"attribute",step:W,attributeType:S,showBackLink:!0}))},d=({dynamicZoneTarget:S,targetUid:W})=>{r(F=>({...F,dynamicZoneTarget:S,targetUid:W,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},g=({forTarget:S,targetUid:W})=>{r(F=>({...F,actionType:"create",forTarget:S,targetUid:W,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},f=S=>{r(W=>({...W,...S,isOpen:!0}))},y=S=>{r(W=>({...W,categoryName:S,actionType:"edit",modalType:"editCategory",isOpen:!0}))},b=({forTarget:S,targetUid:W,attributeName:F,attributeType:Q,customFieldUid:de})=>{r(Te=>({...Te,modalType:"customField",customFieldUid:de,actionType:"edit",forTarget:S,targetUid:W,attributeName:F,attributeType:Q,isOpen:!0}))},h=({forTarget:S,targetUid:W,attributeName:F,attributeType:Q,step:de})=>{r(Te=>({...Te,modalType:"attribute",actionType:"edit",forTarget:S,targetUid:W,attributeName:F,attributeType:Q,step:de,isOpen:!0}))},D=({modalType:S,forTarget:W,targetUid:F,kind:Q})=>{r(de=>({...de,modalType:S,actionType:"edit",forTarget:W,targetUid:F,kind:Q,isOpen:!0}))},L=()=>{r(ir)},Z=({forTarget:S,targetUid:W})=>{r(F=>({...F,forTarget:S,targetUid:W,modalType:"chooseAttribute"}))},_=()=>{r(S=>({...S,attributeType:"component",modalType:"attribute",step:"2"}))},G=({dynamicZoneTarget:S})=>{r(W=>({...W,dynamicZoneTarget:S,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return a.createElement(el.Z.Provider,{value:{...n,onClickSelectField:c,onClickSelectCustomField:i,onCloseModal:L,onNavigateToChooseAttributeModal:Z,onNavigateToAddCompoToDZModal:G,onOpenModalAddComponentsToDZ:d,onNavigateToCreateComponentStep2:_,onOpenModalAddField:g,onOpenModalCreateSchema:f,onOpenModalEditCategory:y,onOpenModalEditField:h,onOpenModalEditCustomField:b,onOpenModalEditSchema:D,setFormModalNavigationState:r}},e)};lr.propTypes={children:s().node.isRequired};const tl=lr;var nl=o(5391);const al=(0,a.lazy)(()=>o.e(5905).then(o.bind(o,3500))),ol=()=>{const{url:e}=(0,R.$B)(),{categoryUid:n}=(0,R.UO)();return a.createElement(a.Suspense,{fallback:a.createElement(m.dO,null)},a.createElement(R.rs,null,a.createElement(R.AW,{path:`${e}/:componentUid`},a.createElement(al,{categoryId:n}))))},dr=(0,a.lazy)(()=>o.e(5905).then(o.bind(o,3500))),rl=()=>{const{formatMessage:e}=(0,v.Z)(),n=e({id:`${ue.Z}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:r}=(0,m.c1)(),l=(0,a.useRef)(r);return(0,a.useEffect)(()=>{l.current&&l.current("contentTypeBuilder")},[]),a.createElement(m.O4,{permissions:nl._.main},a.createElement(C.q,{title:n}),a.createElement(tl,null,a.createElement(qi,null,a.createElement(T.A,{sideNav:a.createElement(qn,null)},a.createElement(a.Suspense,{fallback:a.createElement(m.dO,null)},a.createElement(R.rs,null,a.createElement(R.AW,{path:`/plugins/${ue.Z}/content-types/create-content-type`,component:dr}),a.createElement(R.AW,{path:`/plugins/${ue.Z}/content-types/:uid`,component:dr}),a.createElement(R.AW,{path:`/plugins/${ue.Z}/component-categories/:categoryUid`,component:ol})))))))}},90635:(P,B,o)=>{"use strict";o.d(B,{Z:()=>m});var a=o(72966);const m=C=>`${a.Z}.${C}`},44174:P=>{function B(o,a,T,m){for(var C=-1,v=o==null?0:o.length;++C<v;){var R=o[C];a(m,R,T(R),o)}return m}P.exports=B},47443:(P,B,o)=>{var a=o(42118);function T(m,C){var v=m==null?0:m.length;return!!v&&a(m,C,0)>-1}P.exports=T},1196:P=>{function B(o,a,T){for(var m=-1,C=o==null?0:o.length;++m<C;)if(T(a,o[m]))return!0;return!1}P.exports=B},48983:(P,B,o)=>{var a=o(40371),T=a("length");P.exports=T},81119:(P,B,o)=>{var a=o(89881);function T(m,C,v,R){return a(m,function(M,U,H){C(R,M,v(M),H)}),R}P.exports=T},89881:(P,B,o)=>{var a=o(47816),T=o(99291),m=T(a);P.exports=m},41848:P=>{function B(o,a,T,m){for(var C=o.length,v=T+(m?1:-1);m?v--:++v<C;)if(a(o[v],v,o))return v;return-1}P.exports=B},42118:(P,B,o)=>{var a=o(41848),T=o(62722),m=o(42351);function C(v,R,M){return R===R?m(v,R,M):a(v,T,M)}P.exports=C},62722:P=>{function B(o){return o!==o}P.exports=B},23933:(P,B,o)=>{var a=o(44239),T=o(37005),m="[object RegExp]";function C(v){return T(v)&&a(v)==m}P.exports=C},69199:(P,B,o)=>{var a=o(89881),T=o(98612);function m(C,v){var R=-1,M=T(C)?Array(C.length):[];return a(C,function(U,H,u){M[++R]=v(U,H,u)}),M}P.exports=m},82689:(P,B,o)=>{var a=o(29932),T=o(97786),m=o(67206),C=o(69199),v=o(71131),R=o(7518),M=o(85022),U=o(6557),H=o(1469);function u(E,O,j){O.length?O=a(O,function(Y){return H(Y)?function($){return T($,Y.length===1?Y[0]:Y)}:Y}):O=[U];var V=-1;O=a(O,R(m));var K=C(E,function(Y,$,X){var J=a(O,function(te){return te(Y)});return{criteria:J,index:++V,value:Y}});return v(K,function(Y,$){return M(Y,$,j)})}P.exports=u},71131:P=>{function B(o,a){var T=o.length;for(o.sort(a);T--;)o[T]=o[T].value;return o}P.exports=B},45652:(P,B,o)=>{var a=o(88668),T=o(47443),m=o(1196),C=o(74757),v=o(23593),R=o(21814),M=200;function U(H,u,E){var O=-1,j=T,V=H.length,K=!0,Y=[],$=Y;if(E)K=!1,j=m;else if(V>=M){var X=u?null:v(H);if(X)return R(X);K=!1,j=C,$=new a}else $=u?[]:Y;e:for(;++O<V;){var J=H[O],te=u?u(J):J;if(J=E||J!==0?J:0,K&&te===te){for(var oe=$.length;oe--;)if($[oe]===te)continue e;u&&$.push(te),Y.push(J)}else j($,te,E)||($!==Y&&$.push(te),Y.push(J))}return Y}P.exports=U},26393:(P,B,o)=>{var a=o(33448);function T(m,C){if(m!==C){var v=m!==void 0,R=m===null,M=m===m,U=a(m),H=C!==void 0,u=C===null,E=C===C,O=a(C);if(!u&&!O&&!U&&m>C||U&&H&&E&&!u&&!O||R&&H&&E||!v&&E||!M)return 1;if(!R&&!U&&!O&&m<C||O&&v&&M&&!R&&!U||u&&v&&M||!H&&M||!E)return-1}return 0}P.exports=T},85022:(P,B,o)=>{var a=o(26393);function T(m,C,v){for(var R=-1,M=m.criteria,U=C.criteria,H=M.length,u=v.length;++R<H;){var E=a(M[R],U[R]);if(E){if(R>=u)return E;var O=v[R];return E*(O=="desc"?-1:1)}}return m.index-C.index}P.exports=T},55189:(P,B,o)=>{var a=o(44174),T=o(81119),m=o(67206),C=o(1469);function v(R,M){return function(U,H){var u=C(U)?a:T,E=M?M():{};return u(U,R,m(H,2),E)}}P.exports=v},99291:(P,B,o)=>{var a=o(98612);function T(m,C){return function(v,R){if(v==null)return v;if(!a(v))return m(v,R);for(var M=v.length,U=C?M:-1,H=Object(v);(C?U--:++U<M)&&R(H[U],U,H)!==!1;);return v}}P.exports=T},23593:(P,B,o)=>{var a=o(58525),T=o(50308),m=o(21814),C=1/0,v=a&&1/m(new a([,-0]))[1]==C?function(R){return new a(R)}:T;P.exports=v},42351:P=>{function B(o,a,T){for(var m=T-1,C=o.length;++m<C;)if(o[m]===a)return m;return-1}P.exports=B},88016:(P,B,o)=>{var a=o(48983),T=o(62689),m=o(21903);function C(v){return T(v)?m(v):a(v)}P.exports=C},21903:P=>{var B="\\ud800-\\udfff",o="\\u0300-\\u036f",a="\\ufe20-\\ufe2f",T="\\u20d0-\\u20ff",m=o+a+T,C="\\ufe0e\\ufe0f",v="["+B+"]",R="["+m+"]",M="\\ud83c[\\udffb-\\udfff]",U="(?:"+R+"|"+M+")",H="[^"+B+"]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",E="[\\ud800-\\udbff][\\udc00-\\udfff]",O="\\u200d",j=U+"?",V="["+C+"]?",K="(?:"+O+"(?:"+[H,u,E].join("|")+")"+V+j+")*",Y=V+j+K,$="(?:"+[H+R+"?",R,u,E,v].join("|")+")",X=RegExp(M+"(?="+M+")|"+$+Y,"g");function J(te){for(var oe=X.lastIndex=0;X.test(te);)++oe;return oe}P.exports=J},7739:(P,B,o)=>{var a=o(89465),T=o(55189),m=Object.prototype,C=m.hasOwnProperty,v=T(function(R,M,U){C.call(R,U)?R[U].push(M):a(R,U,[M])});P.exports=v},96347:(P,B,o)=>{var a=o(23933),T=o(7518),m=o(31167),C=m&&m.isRegExp,v=C?T(C):a;P.exports=v},47037:(P,B,o)=>{var a=o(44239),T=o(1469),m=o(37005),C="[object String]";function v(R){return typeof R=="string"||!T(R)&&m(R)&&a(R)==C}P.exports=v},50308:P=>{function B(){}P.exports=B},84238:(P,B,o)=>{var a=o(280),T=o(64160),m=o(98612),C=o(47037),v=o(88016),R="[object Map]",M="[object Set]";function U(H){if(H==null)return 0;if(m(H))return C(H)?v(H):H.length;var u=T(H);return u==R||u==M?H.size:a(H).length}P.exports=U},89734:(P,B,o)=>{var a=o(21078),T=o(82689),m=o(5976),C=o(16612),v=m(function(R,M){if(R==null)return[];var U=M.length;return U>1&&C(R,M[0],M[1])?M=[]:U>2&&C(M[0],M[1],M[2])&&(M=[M[0]]),T(R,a(M,1),[])});P.exports=v},7334:(P,B,o)=>{var a=o(79833);function T(m){return a(m).toLowerCase()}P.exports=T},39138:(P,B,o)=>{var a=o(80531),T=o(40180),m=o(62689),C=o(13218),v=o(96347),R=o(88016),M=o(83140),U=o(40554),H=o(79833),u=30,E="...",O=/\w*$/;function j(V,K){var Y=u,$=E;if(C(K)){var X="separator"in K?K.separator:X;Y="length"in K?U(K.length):Y,$="omission"in K?a(K.omission):$}V=H(V);var J=V.length;if(m(V)){var te=M(V);J=te.length}if(Y>=J)return V;var oe=Y-R($);if(oe<1)return $;var le=te?T(te,0,oe).join(""):V.slice(0,oe);if(X===void 0)return le+$;if(te&&(oe+=le.length-oe),v(X)){if(V.slice(oe).search(X)){var pe,_e=le;for(X.global||(X=RegExp(X.source,H(O.exec(X))+"g")),X.lastIndex=0;pe=X.exec(_e);)var Re=pe.index;le=le.slice(0,Re===void 0?oe:Re)}}else if(V.indexOf(a(X),oe)!=oe){var je=le.lastIndexOf(X);je>-1&&(le=le.slice(0,je))}return le+$}P.exports=j},44908:(P,B,o)=>{var a=o(45652);function T(m){return m&&m.length?a(m):[]}P.exports=T},85612:(P,B,o)=>{"use strict";o.d(B,{O:()=>T});var a=o(63122);const T=a.Wx},45349:(P,B,o)=>{"use strict";o.d(B,{A:()=>R});var a=o(85893),T=o(88972),m=o(50781);const C=(0,T.default)(m.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:M})=>M?"auto 1fr":"1fr"};
`,v=(0,T.default)(m.x)`
  overflow-x: hidden;
`,R=({sideNav:M,children:U})=>(0,a.jsxs)(C,{hasSideNav:!!M,children:[M,(0,a.jsx)(v,{paddingBottom:10,children:U})]})},51503:(P,B,o)=>{"use strict";o.d(B,{r:()=>E});var a=o(85893),T=o(67294),m=o(91393),C=o(73727),v=o(88972),R=o(27882),M=o(78549),U=o(50781);const H=v.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:O})=>O?"none":void 0};
  color: ${({disabled:O,theme:j})=>O?j.colors.neutral600:j.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${M.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:O})=>O.colors.primary500};
  }

  &:active {
    color: ${({theme:O})=>O.colors.primary700};
  }

  ${R.BF};
`,u=(0,v.default)(U.x)`
  display: flex;
`,E=T.forwardRef(({children:O,href:j,to:V,disabled:K=!1,startIcon:Y,endIcon:$,...X},J)=>(0,a.jsxs)(H,{as:V&&!K?C.OL:"a",target:j?"_blank":void 0,rel:j?"noreferrer noopener":void 0,to:K?void 0:V,href:K?"#":j,disabled:K,ref:J,...X,children:[Y&&(0,a.jsx)(u,{as:"span","aria-hidden":!0,paddingRight:2,children:Y}),(0,a.jsx)(M.Z,{children:O}),$&&!j&&(0,a.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:$}),j&&(0,a.jsx)(u,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,a.jsx)(m.Z,{})})]}))},31439:(P,B,o)=>{"use strict";o.d(B,{Q:()=>C});var a=o(85893),T=o(88972),m=o(55482);const C=({options:R,...M})=>(0,a.jsx)(m.NU,{...M,children:R.map(U=>"children"in U?(0,a.jsx)(m.Ab,{label:U.label,values:U.children.map(H=>H.value.toString()),children:U.children.map(H=>(0,a.jsx)(v,{value:H.value,children:H.label},H.value))},U.label):(0,a.jsx)(m.ML,{value:U.value,children:U.label},U.value))}),v=(0,T.default)(m.ML)`
  padding-left: ${({theme:R})=>R.spaces[7]};
`}}]);
