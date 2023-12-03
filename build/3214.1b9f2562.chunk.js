"use strict";(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[3214],{35063:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(91554),d=n(60665),o=(i=>i&&i.__esModule?i:{default:i})(l).default(d.Box)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:i})=>i}, 1fr);
  ${({theme:i,gap:T})=>s("gap",T,i)}
`,a=i=>{const{gap:T="0",gridCols:x=12,...f}=i;return e.jsx(o,{gap:T,gridCols:x,...f})};r.Grid=a},91259:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(88972),l=n(60665),c=(t=>t&&t.__esModule?t:{default:t})(e).default(l.Box)`
  grid-column: span ${({col:t})=>t};
  max-width: 100%;

  ${({theme:t})=>t.mediaQueries.tablet} {
    grid-column: span ${({s:t})=>t};
  }

  ${({theme:t})=>t.mediaQueries.mobile} {
    grid-column: span ${({xs:t})=>t};
  }
`;r.GridItem=c},8066:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(90291),s=({startActions:d,endActions:c})=>!d&&!c?null:e.jsxs(l.Flex,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[e.jsx(l.Flex,{gap:2,wrap:"wrap",children:d}),e.jsx(l.Flex,{gap:2,shrink:0,wrap:"wrap",children:c})]});r.ActionLayout=s},69786:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(60665),s=({children:d})=>e.jsx(l.Box,{paddingLeft:10,paddingRight:10,children:d});r.ContentLayout=s},12283:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(88972),d=(c=>c&&c.__esModule?c:{default:c})(e).default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:c})=>c.spaces[4]};
`;r.GridLayout=d},11756:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=n(88972),d=n(90082),c=n(30860),t=n(60665),o=n(90291),a=n(4583),i=g=>g&&g.__esModule?g:{default:g},T=i(l),x=i(s),f=g=>{const u=l.useRef(null),[P,O]=l.useState(null),[M,v]=d.useElementOnScreen({root:null,rootMargin:"0px",threshold:0});return c.useResizeObserver(M,()=>{M.current&&O(M.current.getBoundingClientRect())}),l.useEffect(()=>{u.current&&O(u.current.getBoundingClientRect())},[u]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{height:P?.height},ref:M,children:v&&e.jsx(E,{ref:u,...g})}),!v&&e.jsx(E,{...g,sticky:!0,width:P?.width})]})};f.displayName="HeaderLayout";const m=x.default(t.Box)`
  width: ${({width:g})=>g?`${g/16}rem`:void 0};
  z-index: ${({theme:g})=>g.zIndices[1]};
`,E=T.default.forwardRef(({navigationAction:g,primaryAction:u,secondaryAction:P,subtitle:O,title:M,sticky:v,width:y,...h},b)=>{const C=typeof O=="string";return v?e.jsx(m,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:e.jsxs(o.Flex,{justifyContent:"space-between",children:[e.jsxs(o.Flex,{children:[g&&e.jsx(t.Box,{paddingRight:3,children:g}),e.jsxs(t.Box,{children:[e.jsx(a.Typography,{variant:"beta",as:"h1",...h,children:M}),C?e.jsx(a.Typography,{variant:"pi",textColor:"neutral600",children:O}):O]}),P?e.jsx(t.Box,{paddingLeft:4,children:P}):null]}),e.jsx(o.Flex,{children:u?e.jsx(t.Box,{paddingLeft:2,children:u}):void 0})]})}):e.jsxs(t.Box,{ref:b,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:g?6:8,background:"neutral100","data-strapi-header":!0,children:[g?e.jsx(t.Box,{paddingBottom:2,children:g}):null,e.jsxs(o.Flex,{justifyContent:"space-between",children:[e.jsxs(o.Flex,{minWidth:0,children:[e.jsx(a.Typography,{as:"h1",variant:"alpha",...h,children:M}),P?e.jsx(t.Box,{paddingLeft:4,children:P}):null]}),u]}),C?e.jsx(a.Typography,{variant:"epsilon",textColor:"neutral600",as:"p",children:O}):O]})});r.BaseHeaderLayout=E,r.HeaderLayout=f},68:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(60665),c=(i=>i&&i.__esModule?i:{default:i})(l),t=c.default(s.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:i})=>i?"auto 1fr":"1fr"};
`,o=c.default(s.Box)`
  overflow-x: hidden;
`,a=({sideNav:i,children:T})=>e.jsxs(t,{hasSideNav:Boolean(i),children:[i,e.jsx(o,{paddingBottom:10,children:T})]});r.Layout=a},93070:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(35063),s=n(91259),d=n(60665),c=({startCol:t,endCol:o})=>e.jsxs(l.Grid,{gap:4,children:[e.jsx(s.GridItem,{col:9,s:12,children:e.jsx(d.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:t})}),e.jsx(s.GridItem,{col:3,s:12,children:e.jsx(d.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",children:o})})]});r.TwoColsLayout=c},58136:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(68),l=n(8066),s=n(69786),d=n(11756),c=n(93070),t=n(12283);r.Layout=e.Layout,r.ActionLayout=l.ActionLayout,r.ContentLayout=s.ContentLayout,r.BaseHeaderLayout=d.BaseHeaderLayout,r.HeaderLayout=d.HeaderLayout,r.TwoColsLayout=c.TwoColsLayout,r.GridLayout=t.GridLayout},59110:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=n(51226),d=n(15809),c=n(13270),t=n(60665),o=i=>e.jsx(a,{...i,as:"th"}),a=({coords:i={col:0,row:0},as:T="td",...x})=>{const f=l.useRef(null),{rowIndex:m,colIndex:E,setTableValues:g}=s.useTable(),[u,P]=l.useState(!1),O=y=>{const h=d.getFocusableNodes(f.current,!0);if(h.length===0||h.length===1&&d.getFocusableNodesWithKeyboardNav(h).length===0)return;if(h.length>1&&!h.find(C=>C.tagName!=="BUTTON")){y.preventDefault();const C=h.findIndex(D=>D===document.activeElement);if(y.key===c.KeyboardKeys.RIGHT){const D=h[C+1];D&&(y.stopPropagation(),D.focus())}else if(y.key===c.KeyboardKeys.LEFT){const D=h[C-1];D&&(y.stopPropagation(),D.focus())}return}const b=y.key===c.KeyboardKeys.ENTER;if(b&&!u)P(!0);else if((y.key===c.KeyboardKeys.ESCAPE||b)&&u){if(b&&document.activeElement?.tagName==="A")return;P(!1),f.current.focus()}else u&&y.stopPropagation()},M=m===i.row-1&&E===i.col-1;l.useLayoutEffect(()=>{const y=d.getFocusableNodes(f.current,!0);y.length===0||y.length===1&&d.getFocusableNodesWithKeyboardNav(y).length!==0||y.length>1&&Boolean(y.find(h=>h.tagName!=="BUTTON"))?(f.current.setAttribute("tabIndex",!u&&M?"0":"-1"),y.forEach((h,b)=>{h.setAttribute("tabIndex",u?"0":"-1"),u&&b===0&&h.focus()})):y.forEach(h=>{h.setAttribute("tabIndex",M?"0":"-1")})},[u,M]);const v=l.useCallback(()=>{const y=d.getFocusableNodes(f.current,!0);y.length>=1&&(d.getFocusableNodesWithKeyboardNav(y).length!==0||!y.find(h=>h.tagName!=="BUTTON"))&&P(!0),g({rowIndex:i.row-1,colIndex:i.col-1})},[i,g]);return l.useLayoutEffect(()=>{const y=f.current;return d.getFocusableNodes(y,!0).forEach(b=>{b.addEventListener("focus",v)}),()=>{d.getFocusableNodes(y,!0).forEach(C=>{C.removeEventListener("focus",v)})}},[v]),e.jsx(t.Box,{role:"gridcell",as:T,ref:f,onKeyDown:O,...x})};r.RawTd=a,r.RawTh=o},16532:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=n(97008),d=n(51226),c=n(13270),t=({colCount:o,rowCount:a,jumpStep:i=3,initialCol:T=0,initialRow:x=0,...f})=>{const m=l.useRef(null),E=l.useRef(!1),[g,u]=l.useState(x),[P,O]=l.useState(T),M=l.useCallback(({colIndex:h,rowIndex:b})=>{O(h),u(b)},[]);l.useEffect(()=>{E.current&&s.focusFocusable(m.current),E.current||(E.current=!0)},[P,g]);const v=h=>{switch(h.key){case c.KeyboardKeys.RIGHT:{h.preventDefault(),O(b=>b<o-1?b+1:b);break}case c.KeyboardKeys.LEFT:{h.preventDefault(),O(b=>b>0?b-1:b);break}case c.KeyboardKeys.UP:{h.preventDefault(),u(b=>b>0?b-1:b);break}case c.KeyboardKeys.DOWN:{h.preventDefault(),u(b=>b<a-1?b+1:b);break}case c.KeyboardKeys.HOME:{h.preventDefault(),h.ctrlKey&&u(0),O(0);break}case c.KeyboardKeys.END:{h.preventDefault(),h.ctrlKey&&u(a-1),O(o-1);break}case c.KeyboardKeys.PAGE_DOWN:{h.preventDefault(),u(b=>b+i<a?b+i:a-1);break}case c.KeyboardKeys.PAGE_UP:{h.preventDefault(),u(b=>b-i>0?b-i:0);break}}},y=l.useMemo(()=>({rowIndex:g,colIndex:P,setTableValues:M}),[P,g,M]);return e.jsx(d.RawTableContext.Provider,{value:y,children:e.jsx("table",{role:"grid",ref:m,"aria-rowcount":a,"aria-colcount":o,onKeyDown:v,...f})})};r.RawTable=t},51226:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(67294),l=e.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),s=()=>e.useContext(l);r.RawTableContext=l,r.useTable=s},54630:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=({children:d,...c})=>{const t=l.Children.toArray(d).map((o,a)=>l.isValidElement(o)?l.cloneElement(o,{"aria-rowindex":a+2}):o);return e.jsx("tbody",{...c,children:t})};r.RawTbody=s},62798:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=({children:d,...c})=>{const t=l.Children.toArray(d).map(o=>l.isValidElement(o)?l.cloneElement(o,{"aria-rowindex":1}):o);return e.jsx("thead",{...c,children:t})};r.RawThead=s},10964:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=n(60665),d=({children:c,...t})=>{const o=l.Children.toArray(c).map((a,i)=>l.isValidElement(a)?l.cloneElement(a,{"aria-colindex":i+1,coords:{col:i+1,row:t["aria-rowindex"]}}):a);return e.jsx(s.Box,{as:"tr",...t,children:o})};r.RawTr=d},97008:(p,r)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const n=e=>{const l=e.querySelector('[tabindex="0"]');l&&l.focus()};r.focusFocusable=n},60211:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(59110),d=n(90291),t=(x=>x&&x.__esModule?x:{default:x})(l),o=t.default(s.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:x})=>x.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,a=t.default.span`
  svg {
    height: ${4/16}rem;
  }
`,i=({children:x,action:f,...m})=>e.jsx(o,{as:s.RawTh,...m,children:e.jsxs(d.Flex,{children:[x,e.jsx(a,{children:f})]})}),T=({children:x,...f})=>e.jsx(o,{...f,children:x});r.Td=T,r.Th=i},20950:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(60665),d=n(27906),c=n(90291),t=n(4583),a=(f=>f&&f.__esModule?f:{default:f})(l),i=a.default(s.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:f})=>f.colors.primary600};
  }
`,T=a.default(s.Box)`
  border-radius: 0 0 ${({theme:f})=>f.borderRadius} ${({theme:f})=>f.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,x=({children:f,icon:m,...E})=>e.jsxs("div",{children:[e.jsx(d.Divider,{}),e.jsx(T,{as:"button",background:"primary100",padding:5,...E,children:e.jsxs(c.Flex,{children:[e.jsx(i,{"aria-hidden":!0,background:"primary200",children:m}),e.jsx(s.Box,{paddingLeft:3,children:e.jsx(t.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:f})})]})})]});r.TFooter=x},47260:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(67294),s=n(88972),d=n(16532),c=n(60665),o=(m=>m&&m.__esModule?m:{default:m})(s),a=o.default(c.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:m})=>m.colors.neutral150};
`,i=o.default(d.RawTable)`
  width: 100%;
  white-space: nowrap;
`,T=o.default(c.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:m})=>m==="both"||m==="left"?"''":void 0};
    box-shadow: ${({theme:m})=>m.shadows.tableShadow};
    width: ${({theme:m})=>m.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:m})=>m==="both"||m==="right"?"''":void 0};
    box-shadow: ${({theme:m})=>m.shadows.tableShadow};
    width: ${({theme:m})=>m.spaces[2]};
    right: 0;
    top: 0;
  }
`,x=o.default(c.Box)`
  overflow-x: auto;
`,f=({footer:m,...E})=>{const g=l.useRef(null),[u,P]=l.useState(),O=M=>{const v=M.target.scrollWidth-M.target.clientWidth;if(M.target.scrollLeft===0){P("right");return}if(M.target.scrollLeft===v){P("left");return}M.target.scrollLeft>0&&P("both")};return l.useEffect(()=>{g.current.scrollWidth>g.current.clientWidth&&P("right")},[]),e.jsxs(a,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(T,{overflowing:u,position:"relative",children:e.jsx(x,{ref:g,onScroll:O,paddingLeft:6,paddingRight:6,children:e.jsx(i,{...E})})}),m]})};r.Table=f},30076:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(54630),t=(a=>a&&a.__esModule?a:{default:a})(l).default(s.RawTbody)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,o=({children:a,...i})=>e.jsx(t,{...i,children:a});r.Tbody=o},7815:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(62798),t=(a=>a&&a.__esModule?a:{default:a})(l).default(s.RawThead)`
  border-bottom: 1px solid ${({theme:a})=>a.colors.neutral150};
`,o=({children:a,...i})=>e.jsx(t,{...i,children:a});r.Thead=o},16444:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(85893),l=n(88972),s=n(10964),t=(a=>a&&a.__esModule?a:{default:a})(l).default(s.RawTr)`
  border-bottom: 1px solid ${({theme:a})=>a.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:a})=>a.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:a})=>a.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: ${56/16}rem;
  }
`,o=a=>e.jsx(t,{...a});r.Tr=o},14772:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(47260),l=n(30076),s=n(7815),d=n(16444),c=n(60211),t=n(20950);r.Table=e.Table,r.Tbody=l.Tbody,r.Thead=s.Thead,r.Tr=d.Tr,r.Td=c.Td,r.Th=c.Th,r.TFooter=t.TFooter},90082:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(67294),l=s=>{const d=e.useRef(null),[c,t]=e.useState(!0),o=([a])=>{t(a.isIntersecting)};return e.useEffect(()=>{const a=d.current,i=new IntersectionObserver(o,s);return a&&i.observe(d.current),()=>{a&&i.disconnect()}},[d,s]),[d,c]};r.useElementOnScreen=l},30860:(p,r,n)=>{Object.defineProperty(r,Symbol.toStringTag,{value:"Module"});const e=n(67294),l=n(61299),s=(d,c)=>{const t=l.useCallbackRef(c);e.useLayoutEffect(()=>{const o=new ResizeObserver(t);return Array.isArray(d)?d.forEach(a=>{a.current&&o.observe(a.current)}):d.current&&o.observe(d.current),()=>{o.disconnect()}},[d,t])};r.useResizeObserver=s},47089:(p,r,n)=>{const e=n(85893),l=d=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:e.jsx("path",{fill:"#212134",d:"M6.17 18a3 3 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2v-2h4.17Zm6-7a3 3 0 0 1 5.66 0H22v2h-4.17a3 3 0 0 1-5.66 0H2v-2h10.17Zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3 3 0 0 1-5.66 0H2V4h4.17Z"})}),s=l;p.exports=s},75098:(p,r,n)=>{const e=n(85893),l=d=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 32",...d,children:[e.jsx("path",{fill:"#4945FF",d:"M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"}),e.jsx("path",{fill:"#fff",d:"M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 0 1-.474.942 1.705 1.705 0 0 1-.887.504 1.64 1.64 0 0 1-1.002-.105 1.76 1.76 0 0 1-.778-.678A1.924 1.924 0 0 1 14 9.841a1.9 1.9 0 0 1 .508-1.302c.325-.345.766-.539 1.225-.539ZM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24Z"})]}),s=l;p.exports=s},46003:(p,r,n)=>{const e=n(85893),l=d=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...d,children:e.jsx("path",{fill:"#212134",d:"M24 13.604a.3.3 0 0 1-.3.3h-9.795V23.7a.3.3 0 0 1-.3.3h-3.21a.3.3 0 0 1-.3-.3v-9.795H.3a.3.3 0 0 1-.3-.3v-3.21a.3.3 0 0 1 .3-.3h9.795V.3a.3.3 0 0 1 .3-.3h3.21a.3.3 0 0 1 .3.3v9.795H23.7a.3.3 0 0 1 .3.3v3.21Z"})}),s=l;p.exports=s},13214:(p,r,n)=>{n.r(r),n.d(r,{default:()=>Te});var e=n(67294),l=n(16550),s=n(60797),d=n(53603),c=n.n(d),t=n(93289),o=n(86896),a=n(29759);const i=async()=>{try{return await(0,s.WY)(`/${c()}/component`,{method:"GET"})}catch{return null}},T=async()=>{try{return await(0,s.WY)(`/${c()}/content-types`,{method:"GET"})}catch{return null}},x=async()=>{try{return(await(0,s.WY)(`/${c()}/component`,{method:"POST"},!0)).json()}catch{return null}};var f=n(86931),m=n(94101),E=n(84704),g=n(66342),u=n(14772),P=n(46003),O=n.n(P),M=n(27589),v=n(50781),y=n(76687),h=n(37307),b=n(35163),C=n(62372),D=n(60881),de=n(18189),ie=n(48683),ce=n(45124),ue=n(47089),ge=n.n(ue),fe=n(75098),Q=n.n(fe);const Y=n(97585).Z,G=({item:S})=>{const R=(0,s.lm)(),[w,K]=(0,e.useState)(!0),[F,W]=(0,e.useState)(!0),[k,A]=(0,e.useState)(!0),[I,V]=(0,e.useState)(!0),[N,X]=(0,e.useState)(!0),[J,_]=(0,e.useState)(!0),[q,ee]=(0,e.useState)(!0),[te,ne]=(0,e.useState)(!0),[ae,oe]=(0,e.useState)(!0),[se,le]=(0,e.useState)(!0),[H,re]=(0,e.useState)(null),[Se,z]=(0,e.useState)(!1),{formatMessage:j}=(0,o.Z)();(0,e.useEffect)(()=>{(async()=>{const B=await Y.get();re(B)})()},[]);const $e=$=>{const B=H[S?.uid];K(B?.seoChecks?.metaTitle),W(B?.seoChecks?.metaDescription),A(B?.seoChecks?.metaRobots),V(B?.seoChecks?.metaSocial),X(B?.seoChecks?.wordCount),_(B?.seoChecks?.canonicalUrl),ee(B?.seoChecks?.keywordDensity),ne(B?.seoChecks?.structuredData),oe(B?.seoChecks?.alternativeText),le(B?.seoChecks?.lastUpdatedAt),z(Z=>!Z)},ve=$=>{const B={...H,[S?.uid]:{collectionName:H[S?.uid]?.collectionName,seoChecks:{metaTitle:w,metaDescription:F,metaRobots:k,metaSocial:I,wordCount:N,canonicalUrl:J,keywordDensity:q,structuredData:te,alternativeText:ae,lastUpdatedAt:se}}};Y.set(B).then(async()=>{re(B),z(Z=>!Z)}),R({type:"success",message:{id:"notification.success.settings",defaultMessage:`Settings saved for ${H[S?.uid]?.collectionName} content-type.`}})};return e.createElement(e.Fragment,null,e.createElement(b.Button,{variant:"tertiary",startIcon:e.createElement(ge(),null),onClick:$=>$e($)},j({id:(0,a.O)("SEOPage.info.config"),defaultMessage:"Settings"})),Se&&e.createElement(D.P,{onClose:()=>z($=>!$),labelledBy:"title"},e.createElement(de.x,null,e.createElement(E.Typography,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},j({id:(0,a.O)("SEOPage.info.settings"),defaultMessage:"Settings"}))),e.createElement(ie.f,null,e.createElement(v.x,{paddingBottom:8,paddingTop:4},e.createElement(s.Y_,{title:j({id:"Information",defaultMessage:"Information"}),subtitle:j({id:(0,a.O)("HomePage.info.settings.information"),defaultMessage:"Disable SEO checks for this specific content-type."}),icon:e.createElement(Q(),null),iconBackground:"primary100"})),e.createElement(C.M,null,e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:w,onChange:()=>K($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.meta-title-check"),defaultMessage:"Meta Title"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:F,onChange:()=>W($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.meta-description-check"),defaultMessage:"Meta Description"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:k,onChange:()=>A($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.meta-robots-check"),defaultMessage:"Meta Robots"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:I,onChange:()=>V($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.meta-social-check"),defaultMessage:"Meta Social"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:N,onChange:()=>X($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.word-count-check"),defaultMessage:"Word Count"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:J,onChange:()=>_($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.canonical-url-check"),defaultMessage:"Canonical URL"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:q,onChange:()=>ee($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.keyword-density-check"),defaultMessage:"Keyword Density"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:te,onChange:()=>ne($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.structured-data-check"),defaultMessage:"Structured Data"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:ae,onChange:()=>oe($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.alternative-text-check"),defaultMessage:"Alt Text"})))),e.createElement(v.x,{padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow"},e.createElement(y.K,{horizontal:!0,spacing:4,padding:3},e.createElement(h.Switch,{label:"Switch",selected:se,onChange:()=>le($=>!$)}),e.createElement(E.Typography,{variant:"delta"},j({id:(0,a.O)("SEOPage.info.settings.last-updated-at-check"),defaultMessage:"Last Updated At"})))))),e.createElement(ce.m,{startActions:e.createElement(b.Button,{onClick:()=>z($=>!$),variant:"tertiary"},j({id:(0,a.O)("SEOPage.info.settings.cancel.button"),defaultMessage:"Cancel"})),endActions:e.createElement(e.Fragment,null,e.createElement(b.Button,{onClick:$=>ve($)},j({id:(0,a.O)("SEOPage.info.settings.save.button"),defaultMessage:"Save"})))})))};var L=n(63038),he=n(96486),U=n.n(he);const me=({contentTypes:S})=>{const{formatMessage:R}=(0,o.Z)();return e.createElement(e.Fragment,null,e.createElement(t.Box,{padding:8},e.createElement(L.TabGroup,{label:"label",id:"tabs",variant:"simple"},e.createElement(L.Tabs,null,e.createElement(L.Tab,null,e.createElement(E.Typography,null,R({id:(0,a.O)("SEOPage.tab.collection-type-title"),defaultMessage:"Collection Types"}))),e.createElement(L.Tab,null,e.createElement(E.Typography,{variant:"omega"},R({id:(0,a.O)("SEOPage.tab.single-type-title"),defaultMessage:"Single Types"}))),e.createElement(L.Tab,null,e.createElement(E.Typography,{variant:"omega"},R({id:(0,a.O)("SEOPage.tab.plugin-title"),defaultMessage:"Plugins"})))),e.createElement(L.TabPanels,null,e.createElement(L.TabPanel,null,e.createElement(u.Table,{colCount:2,rowCount:S.collectionTypes.length},e.createElement(u.Thead,null,e.createElement(u.Tr,null,e.createElement(u.Th,null,e.createElement(E.Typography,{variant:"sigma"},R({id:(0,a.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"}))))),e.createElement(u.Tbody,null,S&&S.collectionTypes&&!U().isEmpty(S.collectionTypes)?S.collectionTypes.map(w=>e.createElement(u.Tr,{key:w.uid},e.createElement(u.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},w.globalId)),e.createElement(u.Td,null,e.createElement(f.Flex,{justifyContent:"right",alignItems:"right"},w.seo?e.createElement(G,{item:w}):e.createElement(m.Q,{startIcon:e.createElement(O(),null),variant:"secondary",href:`/plugins/content-type-builder/content-types/${w.uid}`},R({id:(0,a.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):e.createElement(t.Box,{padding:8,background:"neutral0"},e.createElement(g.EmptyStateLayout,{icon:e.createElement(M.w,null),content:R({id:(0,a.O)("SEOPage.info.no-collection-types"),defaultMessage:"You don't have any collection-types yet..."}),action:e.createElement(m.Q,{to:"/plugins/content-type-builder",variant:"secondary",startIcon:e.createElement(O(),null)},R({id:(0,a.O)("SEOPage.info.create-collection-type"),defaultMessage:"Create your first collection-type"}))}))))),e.createElement(L.TabPanel,null,e.createElement(u.Table,{colCount:2,rowCount:S.singleTypes.length},e.createElement(u.Thead,null,e.createElement(u.Tr,null,e.createElement(u.Th,null,e.createElement(E.Typography,{variant:"sigma"},R({id:(0,a.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"}))))),e.createElement(u.Tbody,null,S&&S.singleTypes&&!U().isEmpty(S.singleTypes)?S.singleTypes.map(w=>e.createElement(u.Tr,{key:w.uid},e.createElement(u.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},w.globalId)),e.createElement(u.Td,null,e.createElement(f.Flex,{justifyContent:"right",alignItems:"right"},w.seo?e.createElement(G,{item:w}):e.createElement(m.Q,{startIcon:e.createElement(O(),null),variant:"secondary",href:`/admin/plugins/content-type-builder/content-types/${w.uid}`},R({id:(0,a.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):e.createElement(t.Box,{padding:8,background:"neutral0"},e.createElement(g.EmptyStateLayout,{icon:e.createElement(M.w,null),content:R({id:(0,a.O)("SEOPage.info.no-single-types"),defaultMessage:"You don't have any single-types yet..."}),action:e.createElement(m.Q,{to:"/admin/plugins/content-type-builder",variant:"secondary",startIcon:e.createElement(O(),null)},R({id:(0,a.O)("SEOPage.info.create-single-type"),defaultMessage:"Create your first single-type"}))}))))),e.createElement(L.TabPanel,null,e.createElement(u.Table,{colCount:2,rowCount:S.plugins.length},e.createElement(u.Thead,null,e.createElement(u.Tr,null,e.createElement(u.Th,null,e.createElement(E.Typography,{variant:"sigma"},R({id:(0,a.O)("SEOPage.tab-panel.column-name"),defaultMessage:"Name"}))))),e.createElement(u.Tbody,null,S&&S.plugins&&!U().isEmpty(S.plugins)?S.plugins.map(w=>e.createElement(u.Tr,{key:w.uid},e.createElement(u.Td,null,e.createElement(E.Typography,{textColor:"neutral800"},w.globalId)),e.createElement(u.Td,null,e.createElement(f.Flex,{justifyContent:"right",alignItems:"right"},w.seo?e.createElement(G,{item:w}):e.createElement(m.Q,{startIcon:e.createElement(O(),null),variant:"secondary",href:`/admin/plugins/content-type-builder/content-types/${w.uid}`},R({id:(0,a.O)("SEOPage.info.add"),defaultMessage:"Add component"})))))):e.createElement(t.Box,{padding:8,background:"neutral0"},e.createElement(g.EmptyStateLayout,{icon:e.createElement(M.w,null),content:R({id:(0,a.O)("SEOPage.info.no-plugin-content-type"),defaultMessage:"You don't have any plugin content-type yet..."})})))))))))};var pe=n(58136);const ye=S=>{const{formatMessage:R}=(0,o.Z)();return e.createElement(t.Box,{background:"neutral100"},e.createElement(pe.BaseHeaderLayout,{secondaryAction:S?null:e.createElement(LinkButton,{variant:"tertiary",to:"/admin/plugins/content-type-builder/component-categories/shared/shared.seo",startIcon:e.createElement(Pencil,null)},R({id:(0,a.O)("SEOPage.header.button.edit-component"),defaultMessage:"Edit SEO component"})),title:R({id:(0,a.O)("SEOPage.header.title"),defaultMessage:"SEO"}),subtitle:R({id:(0,a.O)("SEOPage.header.subtitle"),defaultMessage:"Optimize your content to be SEO friendly"}),as:"h2"}))},Ee=()=>{const{formatMessage:S}=(0,o.Z)(),{lockAppWithAutoreload:R,unlockAppWithAutoreload:w}=(0,s.Vu)(),[K,F]=(0,e.useState)(!0),[W,k]=(0,e.useState)(!1),A=(0,e.useRef)({}),I=(0,e.useRef)({});return(0,e.useEffect)(()=>{(async()=>{if(A.current=await i(),I.current=await T(),!A.current)try{R(),await x()}catch(N){console.log(N)}finally{w(),k(!0)}})().then(()=>{F(!1)})},[W]),K?e.createElement(s.dO,null):e.createElement(e.Fragment,null,e.createElement(ye,{seoComponent:A.current}),e.createElement(t.Box,{paddingLeft:8,paddingRight:8},e.createElement(s.Y_,{title:S({id:"Information",defaultMessage:"Information"}),subtitle:S({id:(0,a.O)("HomePage.info.information"),defaultMessage:"When adding your SEO component, make sure to name it 'seo' and to include it in the root of your Content-Type."}),icon:e.createElement(Q(),null),iconBackground:"primary100"})),e.createElement(me,{contentTypes:I.current}))},be=(0,e.memo)(Ee);var xe=n(32141);const Te=()=>e.createElement(s.O4,{permissions:xe.Z.main},e.createElement("div",null,e.createElement(l.rs,null,e.createElement(l.AW,{path:`/plugins/${c()}`,component:be,exact:!0}))))},62372:(p,r,n)=>{n.d(r,{M:()=>l});var e=n(88972);const l=e.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:s})=>s.spaces[4]};
`},20501:(p,r,n)=>{n.d(r,{G:()=>t,Y:()=>o});var e=n(85893),l=n(67294),s=n(88972),d=n(66362),c=n(96987);const t=(0,s.default)(c.k)`
  > svg {
    height: ${({theme:a})=>a.spaces[3]};
    width: ${({theme:a})=>a.spaces[3]};

    > g,
    path {
      fill: ${({theme:a})=>a.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${d.BF}
`,o=l.forwardRef(({disabled:a,children:i,background:T="neutral0",...x},f)=>(0,e.jsx)(t,{ref:f,"aria-disabled":a,as:"button",type:"button",disabled:a,padding:2,hasRadius:!0,background:T,borderColor:"neutral200",cursor:"pointer",...x,children:i}));o.displayName="BaseButton"},53342:(p,r,n)=>{n.d(r,{f:()=>d});var e=n(85893),l=n(67294),s=n(16607);const d=l.forwardRef(({href:c,rel:t="noreferrer noopener",target:o="_self",disabled:a=!1,isExternal:i=!1,...T},x)=>(0,e.jsx)(s.x,{as:"a",ref:x,target:i?"_blank":o,rel:i?t:void 0,href:a?"#":c,"aria-disabled":a,cursor:"pointer",...T}));d.displayName="BaseLink"},16607:(p,r,n)=>{n.d(r,{x:()=>c});var e=n(88972),l=n(33368),s=n(79581);const d={color:!0,cursor:!0,height:!0,width:!0},c=e.default.div.withConfig({shouldForwardProp:(t,o)=>!d[t]&&o(t)})`
  // Font
  font-size: ${({fontSize:t,theme:o})=>(0,s.$)(o.fontSizes,t,t)};

  // Colors
  background: ${({theme:t,background:o})=>(0,s.$)(t.colors,o,o)};
  color: ${({theme:t,color:o})=>(0,s.$)(t.colors,o,void 0)};

  // Spaces
  ${({theme:t,padding:o})=>(0,l.Z)("padding",o,t)}
  ${({theme:t,paddingTop:o})=>(0,l.Z)("padding-top",o,t)}
  ${({theme:t,paddingRight:o})=>(0,l.Z)("padding-right",o,t)}
  ${({theme:t,paddingBottom:o})=>(0,l.Z)("padding-bottom",o,t)}
  ${({theme:t,paddingLeft:o})=>(0,l.Z)("padding-left",o,t)}
  ${({theme:t,marginLeft:o})=>(0,l.Z)("margin-left",o,t)}
  ${({theme:t,marginRight:o})=>(0,l.Z)("margin-right",o,t)}
  ${({theme:t,marginTop:o})=>(0,l.Z)("margin-top",o,t)}
  ${({theme:t,marginBottom:o})=>(0,l.Z)("margin-bottom",o,t)}

  // Responsive hiding
  ${({theme:t,hiddenS:o})=>o?`${t.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:t,hiddenXS:o})=>o?`${t.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:t,hasRadius:o,borderRadius:a})=>o?t.borderRadius:a};
  border-style: ${({borderStyle:t})=>t};
  border-width: ${({borderWidth:t})=>t};
  border-color: ${({borderColor:t,theme:o})=>(0,s.$)(o.colors,t,void 0)};
  border: ${({theme:t,borderColor:o,borderStyle:a,borderWidth:i})=>{if(o&&!a&&typeof i>"u")return`1px solid ${t.colors[o]}`}};

  // Shadows
  box-shadow: ${({theme:t,shadow:o})=>(0,s.$)(t.shadows,o,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:t})=>t};
  &:hover {
    ${({_hover:t,theme:o})=>t?t(o):void 0}
  }

  // Display
  display: ${({display:t})=>t};

  // Position
  position: ${({position:t})=>t};
  left: ${({left:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  right: ${({right:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  top: ${({top:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  bottom: ${({bottom:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  z-index: ${({zIndex:t})=>t};
  overflow: ${({overflow:t})=>t};

  // Size
  width: ${({width:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  max-width: ${({maxWidth:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  min-width: ${({minWidth:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  height: ${({height:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  max-height: ${({maxHeight:t,theme:o})=>(0,s.$)(o.spaces,t,t)};
  min-height: ${({minHeight:t,theme:o})=>(0,s.$)(o.spaces,t,t)};

  // Animation
  transition: ${({transition:t})=>t};
  transform: ${({transform:t})=>t};
  animation: ${({animation:t})=>t};

  //Flexbox children props
  flex-shrink: ${({shrink:t})=>t};
  flex-grow: ${({grow:t})=>t};
  flex-basis: ${({basis:t})=>t};
  flex: ${({flex:t})=>t};

  // Text
  text-align: ${({textAlign:t})=>t};
  text-transform: ${({textTransform:t})=>t};
  line-height: ${({theme:t,lineHeight:o})=>(0,s.$)(t.lineHeights,o,o)};

  // Cursor
  cursor: ${({cursor:t})=>t};
`},4071:(p,r,n)=>{n.d(r,{G$:()=>l,Gt:()=>x,MG:()=>e,MR:()=>o,T:()=>t,TP:()=>s,Vb:()=>c,Vv:()=>i,ZC:()=>T,gK:()=>d,wG:()=>a});const e="success-light",l="danger-light",s="default",d="tertiary",c="secondary",t="danger",o="success",a="ghost",i=[e,l],T=[s,d,c,t,o,a,...i],x=["S","M","L"]},62485:(p,r,n)=>{n.d(r,{PD:()=>o,sg:()=>d,tB:()=>t,yP:()=>c});var e=n(4071),l=n(10574);const s=a=>a===e.MG||a===e.G$?`${a.substring(0,a.lastIndexOf("-"))}`:a===e.gK?"neutral":a===e.TP||a===e.Vb||e.ZC.every(i=>i!==a)?"primary":`${a}`,d=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${l.Z} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,c=({theme:a,variant:i})=>[...e.Vv,e.Vb].includes(i)?`
      background-color: ${a.colors.neutral0};
    `:i===e.gK?`
      background-color: ${a.colors.neutral100};
    `:i===e.wG?`
      background-color: ${a.colors.neutral100};
    `:i===e.TP?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${s(i)}500`]};
    background: ${a.colors[`${s(i)}500`]};
  `,t=({theme:a,variant:i})=>[...e.Vv,e.Vb].includes(i)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${s(i)}600`]};
      ${l.Z} {
        color: ${a.colors[`${s(i)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${s(i)}600`]};
        }
      }
    `:i===e.gK?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${s(i)}600`]};
    background: ${a.colors[`${s(i)}600`]};
  `,o=({theme:a,variant:i})=>{switch(i){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${a.colors[`${s(i)}200`]};
          background: ${a.colors[`${s(i)}100`]};
          ${l.Z} {
            color: ${a.colors[`${s(i)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${s(i)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${l.Z} {
            color: ${a.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${a.colors.neutral800};
            }
          }
        `;case e.wG:return`
        border: 1px solid transparent;
        background: transparent;

        ${l.Z} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${a.colors[`${s(i)}600`]};
          background: ${a.colors[`${s(i)}600`]};
          ${l.Z} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}}},96987:(p,r,n)=>{n.d(r,{k:()=>c});var e=n(88972),l=n(33368),s=n(16607);const d={direction:!0},c=(0,e.default)(s.x).withConfig({shouldForwardProp:(t,o)=>!d[t]&&o(t)})`
  align-items: ${({alignItems:t="center"})=>t};
  display: ${({display:t="flex",inline:o})=>o?"inline-flex":t};
  flex-direction: ${({direction:t="row"})=>t};
  flex-shrink: ${({shrink:t})=>t};
  flex-wrap: ${({wrap:t})=>t};
  ${({gap:t,theme:o})=>(0,l.Z)("gap",t,o)};
  justify-content: ${({justifyContent:t})=>t};
`},10574:(p,r,n)=>{n.d(r,{Z:()=>E});var e=n(88972);const l="alpha",s="beta",d="delta",c="epsilon",t="omega",o="pi",a="sigma",i=[l,s,d,c,t,o,a],T=({ellipsis:g=!1})=>g&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,x=({variant:g=t,theme:u})=>{switch(g){case l:return`
        font-weight: ${u.fontWeights.bold};
        font-size: ${u.fontSizes[5]};
        line-height: ${u.lineHeights[2]};
      `;case s:return`
        font-weight: ${u.fontWeights.bold};
        font-size: ${u.fontSizes[4]};
        line-height: ${u.lineHeights[1]};
      `;case d:return`
        font-weight: ${u.fontWeights.semiBold};
        font-size: ${u.fontSizes[3]};
        line-height: ${u.lineHeights[2]};
      `;case c:return`
        font-size: ${u.fontSizes[3]};
        line-height: ${u.lineHeights[6]};
      `;case t:return`
        font-size: ${u.fontSizes[2]};
        line-height: ${u.lineHeights[4]};
      `;case o:return`
        font-size: ${u.fontSizes[1]};
        line-height: ${u.lineHeights[3]};
      `;case a:return`
        font-weight: ${u.fontWeights.bold};
        font-size: ${u.fontSizes[0]};
        line-height: ${u.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${u.fontSizes[2]};
      `}};var f=n(79581);const m={fontSize:!0,fontWeight:!0},E=e.default.span.withConfig({shouldForwardProp:(g,u)=>!m[g]&&u(g)})`
  ${x}
  ${T}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:g,fontWeight:u})=>(0,f.$)(g.fontWeights,u,void 0)};
  font-size: ${({theme:g,fontSize:u})=>(0,f.$)(g.fontSizes,u,void 0)};
  line-height: ${({theme:g,lineHeight:u})=>(0,f.$)(g.lineHeights,u,u)};
  color: ${({theme:g,textColor:u})=>g.colors[u||"neutral800"]};
  text-align: ${({textAlign:g})=>g};
  text-decoration: ${({textDecoration:g})=>g};
  text-transform: ${({textTransform:g})=>g};
`},33368:(p,r,n)=>{n.d(r,{Z:()=>e});const e=(l,s,d)=>{if(!s)return;if(typeof s=="object")return(Array.isArray(s)?s:[s?.desktop,s?.tablet,s?.mobile]).reduce((a,i,T)=>{if(i)switch(T){case 0:return`${a}${l}: ${d.spaces[i]};`;case 1:return`${a}${d.mediaQueries.tablet}{${l}: ${d.spaces[i]};}`;case 2:return`${a}${d.mediaQueries.mobile}{${l}: ${d.spaces[i]};}`;default:return a}return a},"");const c=d.spaces[s]??s;return`${l}: ${c};`}},79581:(p,r,n)=>{n.d(r,{$:()=>s});function e(d,c){return typeof d=="string"?!1:c in d}function l(d){return d&&typeof d=="object"&&!Array.isArray(d)}function s(d,c,t){return c&&e(d,c)?d[c]:t}},66362:(p,r,n)=>{n.d(r,{BF:()=>d,k3:()=>s});var e=n(88972);const l=c=>({theme:t,size:o})=>t.sizes[c][o],s=(c="&")=>({theme:t,hasError:o=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${c}:focus-within {
      border: 1px solid ${o?t.colors.danger600:t.colors.primary600};
      box-shadow: ${o?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,d=({theme:c})=>(0,e.css)`
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
      border: 2px solid ${c.colors.primary600};
    }
  }
`},94101:(p,r,n)=>{n.d(r,{Q:()=>T});var e=n(85893),l=n(67294),s=n(88972),d=n(62485),c=n(20501),t=n(53342),o=n(96987),a=n(10574);const i=(0,s.default)(c.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${d.sg}
    &:active {
      ${d.sg}
    }
  }

  &:hover {
    ${d.yP}
  }

  &:active {
    ${d.tB}
  }

  ${d.PD}
`,T=l.forwardRef(({variant:x="default",startIcon:f,endIcon:m,disabled:E=!1,children:g,size:u="S",as:P=t.f,...O},M)=>{const v=u==="S"?2:"10px",y=4;return(0,e.jsxs)(i,{ref:M,"aria-disabled":E,size:u,variant:x,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:v,paddingLeft:y,paddingRight:y,paddingTop:v,pointerEvents:E?"none":void 0,...O,as:P||t.f,children:[f&&(0,e.jsx)(o.k,{"aria-hidden":!0,children:f}),(0,e.jsx)(a.Z,{variant:u==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:g}),m&&(0,e.jsx)(o.k,{"aria-hidden":!0,children:m})]})});T.displayName="LinkButton"}}]);
