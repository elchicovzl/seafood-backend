"use strict";(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[3981],{62019:(S,h,t)=>{t.r(h),t.d(h,{HomePageCE:()=>z,default:()=>je});var e=t(67294),s=t(50781),l=t(45349),g=t(57713),m=t(9370),d=t(61585),a=t(60797),o=t(64593),r=t(50841),u=t(86896),M=t(680);function T(n,c){var i=n.values,p=(0,r._T)(n,["values"]),y=c.values,C=(0,r._T)(c,["values"]);return(0,M.wU)(y,i)&&(0,M.wU)(p,C)}function L(n){var c=(0,u.Z)(),i=c.formatMessage,p=c.textComponent,y=p===void 0?e.Fragment:p,C=n.id,W=n.description,A=n.defaultMessage,x=n.values,b=n.children,B=n.tagName,Z=B===void 0?y:B,N=n.ignoreTag,He={id:C,description:W,defaultMessage:A},j=i(He,x,{ignoreTag:N});return typeof b=="function"?b(Array.isArray(j)?j:[j]):Z?e.createElement(Z,null,e.Children.toArray(j)):e.createElement(e.Fragment,null,j)}L.displayName="FormattedMessage";var $=e.memo(L,T);$.displayName="MemoizedFormattedMessage";const O=$;var D=t(16550),f=t(88972),v=t(75878),k=t(78549),R=t(19442),I=t(69858),Q=t(99571),Y=t(45697),E=t.n(Y),P=t(16334),w=t(43234),J=t(2364);const G=({type:n,title:c,number:i,content:p,hasLine:y})=>{const{formatMessage:C}=(0,u.Z)();return e.createElement(s.x,null,e.createElement(v.k,null,e.createElement(s.x,{minWidth:(0,a.Q1)(30),marginRight:5},e.createElement(J.Z,{type:n,number:i})),e.createElement(k.Z,{variant:"delta",as:"h3"},C(c))),e.createElement(v.k,{alignItems:"flex-start"},e.createElement(v.k,{justifyContent:"center",minWidth:(0,a.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},y&&e.createElement(w.Z,{type:n,minHeight:n===P.lW?(0,a.Q1)(85):(0,a.Q1)(65)})),e.createElement(s.x,{marginTop:2},n===P.lW&&p)))};G.defaultProps={content:void 0,number:void 0,type:P.VM,hasLine:!0},G.propTypes={content:E().node,number:E().number,title:E().shape({id:E().string,defaultMessage:E().string}).isRequired,type:E().oneOf([P.lW,P.hx,P.VM]),hasLine:E().bool};const X=G,_=(n,c)=>n===-1||c<n?P.hx:c>n?P.VM:P.lW,U=({sections:n,currentSectionKey:c})=>{const i=n.findIndex(p=>p.key===c);return e.createElement(s.x,null,n.map((p,y)=>e.createElement(X,{key:p.key,title:p.title,content:p.content,number:y+1,type:_(i,y),hasLine:y!==n.length-1})))};U.defaultProps={currentSectionKey:void 0},U.propTypes={sections:E().arrayOf(E().shape({key:E().string.isRequired,title:E().shape({id:E().string,defaultMessage:E().string}).isRequired,content:E().node})).isRequired,currentSectionKey:E().string};const q=U,ee=()=>{const{guidedTourState:n,setSkipped:c}=(0,a.c1)(),{formatMessage:i}=(0,u.Z)(),{trackUsage:p}=(0,a.rS)(),y=Object.entries(Q.Z).map(([x,b])=>({key:x,title:b.home.title,content:e.createElement(a.Qj,{onClick:()=>p(b.home.trackingEvent),to:b.home.cta.target,endIcon:e.createElement(I.Z,null)},i(b.home.cta.title))})),W=y.map(x=>({isDone:Object.entries(n[x.key]).every(([,b])=>b),...x})).find(x=>!x.isDone)?.key,A=()=>{c(!0),p("didSkipGuidedtour")};return e.createElement(s.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(k.Z,{variant:"beta",as:"h2"},i({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(q,{sections:y,currentSectionKey:W})),e.createElement(v.k,{justifyContent:"flex-end"},e.createElement(R.z,{variant:"tertiary",onClick:A},i({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},te=n=>Object.entries(n).every(([,c])=>Object.entries(c).every(([,i])=>i));var oe=t(92686),ne=t(80902);const ae=t.p+"7e9af4fb7e723fcebf1f.svg";var re=t(28077),se=t(37855),le=t(12951),ie=t(2204);const ce=t.p+"27d16aefee06412db90a.png",de=t.p+"bb4d0d527bdfb161bc5a.svg",ue=t.p+"bb3108f7fd1e6179bde1.svg",me=f.default.a`
  text-decoration: none;
`,pe=(0,f.default)(s.x)`
  background-image: url(${({backgroundImage:n})=>n});
`,ge=(0,f.default)(v.k)`
  background: rgba(255, 255, 255, 0.3);
`,fe=()=>{const{formatMessage:n}=(0,u.Z)(),{trackUsage:c}=(0,a.rS)();return e.createElement(me,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{c("didClickOnTryStrapiCloudSection")}},e.createElement(v.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(pe,{backgroundImage:ce,hasRadius:!0,padding:3},e.createElement(ge,{width:(0,a.Q1)(32),height:(0,a.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:ue,alt:n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(v.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(v.k,null,e.createElement(k.Z,{fontWeight:"semiBold",variant:"pi"},n({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(k.Z,{textColor:"neutral600"},n({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(s.x,{src:de,position:"absolute",top:0,right:0,as:"img"}))))},H=f.default.a`
  text-decoration: none;
`,Ee=()=>{const{formatMessage:n}=(0,u.Z)(),{trackUsage:c}=(0,a.rS)(),i=p=>{c(p)};return e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(fe,null),e.createElement(H,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>i("didClickonReadTheDocumentationSection")},e.createElement(a.Y_,{title:n({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:n({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(re.Z,null),iconBackground:"primary100"})),e.createElement(H,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>i("didClickonCodeExampleSection")},e.createElement(a.Y_,{title:n({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:n({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(se.Z,null),iconBackground:"warning100"})),e.createElement(H,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>i("didClickonTutorialSection")},e.createElement(a.Y_,{title:n({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:n({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(le.Z,null),iconBackground:"secondary100"})),e.createElement(H,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>i("didClickonBlogSection")},e.createElement(a.Y_,{title:n({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:n({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ie.Z,null),iconBackground:"alternative100"})))};var V=t(29430);const he=(0,f.default)(k.Z)`
  word-break: break-word;
`,K=({hasCreatedContentType:n,onCreateCT:c})=>{const{formatMessage:i}=(0,u.Z)();return e.createElement("div",null,e.createElement(s.x,{paddingLeft:6,paddingBottom:10},e.createElement(v.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(k.Z,{as:"h1",variant:"alpha"},i(n?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(he,{textColor:"neutral600",variant:"epsilon"},i(n?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),n?e.createElement(V.r,{isExternal:!0,href:"https://strapi.io/blog"},i({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(R.z,{size:"L",onClick:c,endIcon:e.createElement(I.Z,null)},i({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};K.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},K.propTypes={hasCreatedContentType:E().bool,onCreateCT:E().func};const ye=K;var ve=t(94101),Me=t(88514),Ce=t(93768),be=t(34012),ke=t(52551),Pe=t(93570),xe=t(86820),Te=t(91393);const Be=(0,f.default)(Me.Z)`
  path {
    fill: #7289da !important;
  }
`,$e=(0,f.default)(Ce.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,F=(0,f.default)(be.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,Se=(0,f.default)(ke.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Le=(0,f.default)(Pe.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,De=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(xe.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(Be,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement($e,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(Se,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Le,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(F,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(F,null),alt:"career"}],Oe=(0,f.default)(ve.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:n})=>n.spaces[6]};
    height: ${({theme:n})=>n.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Re=(0,f.default)(m.r)`
  row-gap: ${({theme:n})=>n.spaces[2]};
  column-gap: ${({theme:n})=>n.spaces[4]};
`,Ie=()=>{const{formatMessage:n}=(0,u.Z)(),{communityEdition:c}=(0,a.L7)(),i=[...De,{icon:e.createElement(F,null),link:c?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(s.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(s.x,{paddingBottom:7},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(k.Z,{variant:"delta",as:"h2",id:"join-the-community"},n({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(k.Z,{textColor:"neutral600"},n({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(V.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Te.Z,null)},n({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Re,null,i.map(({icon:p,link:y,name:C})=>e.createElement(d.P,{col:6,s:12,key:C.id},e.createElement(Oe,{size:"L",startIcon:p,variant:"tertiary",href:y,isExternal:!0},n(C))))))},We=(0,f.default)(s.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,z=()=>{const{collectionTypes:n,singleTypes:c,isLoading:i}=(0,oe.G)(),{guidedTourState:p,isGuidedTourVisible:y,isSkipped:C}=(0,a.c1)(),W=!te(p)&&y&&!C,{push:A}=(0,D.k6)(),x=B=>{B.preventDefault(),A("/plugins/content-type-builder/content-types/create-content-type")},b=(0,e.useMemo)(()=>{const B=Z=>Z.filter(N=>N.isDisplayed);return B(n).length>1||B(c).length>0},[n,c]);return i?e.createElement(a.dO,null):e.createElement(l.A,null,e.createElement(O,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},B=>e.createElement(o.q,{title:B[0]})),e.createElement(g.o,null,e.createElement(We,null,e.createElement("img",{alt:"","aria-hidden":!0,src:ae})),e.createElement(s.x,{padding:10},e.createElement(m.r,null,e.createElement(d.P,{col:8,s:12},e.createElement(ye,{onCreateCT:x,hasCreatedContentType:b}))),e.createElement(m.r,{gap:6},e.createElement(d.P,{col:8,s:12},W?e.createElement(ee,null):e.createElement(Ee,null)),e.createElement(d.P,{col:4,s:12},e.createElement(Ie,null))))))};function Ae(){const n=(0,ne.c)(z,async()=>(await t.e(8296).then(t.bind(t,66831))).HomePageEE);return n?e.createElement(n,null):null}const je=Ae},45349:(S,h,t)=>{t.d(h,{A:()=>d});var e=t(85893),s=t(88972),l=t(50781);const g=(0,s.default)(l.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,s.default)(l.x)`
  overflow-x: hidden;
`,d=({sideNav:a,children:o})=>(0,e.jsxs)(g,{hasSideNav:!!a,children:[a,(0,e.jsx)(m,{paddingBottom:10,children:o})]})},20501:(S,h,t)=>{t.d(h,{G:()=>d,Y:()=>a});var e=t(85893),s=t(67294),l=t(88972),g=t(66362),m=t(96987);const d=(0,l.default)(m.k)`
  > svg {
    height: ${({theme:o})=>o.spaces[3]};
    width: ${({theme:o})=>o.spaces[3]};

    > g,
    path {
      fill: ${({theme:o})=>o.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${g.BF}
`,a=s.forwardRef(({disabled:o,children:r,background:u="neutral0",...M},T)=>(0,e.jsx)(d,{ref:T,"aria-disabled":o,as:"button",type:"button",disabled:o,padding:2,hasRadius:!0,background:u,borderColor:"neutral200",cursor:"pointer",...M,children:r}));a.displayName="BaseButton"},4071:(S,h,t)=>{t.d(h,{G$:()=>s,Gt:()=>M,MG:()=>e,MR:()=>a,T:()=>d,TP:()=>l,Vb:()=>m,Vv:()=>r,ZC:()=>u,gK:()=>g,wG:()=>o});const e="success-light",s="danger-light",l="default",g="tertiary",m="secondary",d="danger",a="success",o="ghost",r=[e,s],u=[l,g,m,d,a,o,...r],M=["S","M","L"]},62485:(S,h,t)=>{t.d(h,{PD:()=>a,sg:()=>g,tB:()=>d,yP:()=>m});var e=t(4071),s=t(10574);const l=o=>o===e.MG||o===e.G$?`${o.substring(0,o.lastIndexOf("-"))}`:o===e.gK?"neutral":o===e.TP||o===e.Vb||e.ZC.every(r=>r!==o)?"primary":`${o}`,g=({theme:o})=>`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    ${s.Z} {
      color: ${o.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${o.colors.neutral600};
      }
    }
  `,m=({theme:o,variant:r})=>[...e.Vv,e.Vb].includes(r)?`
      background-color: ${o.colors.neutral0};
    `:r===e.gK?`
      background-color: ${o.colors.neutral100};
    `:r===e.wG?`
      background-color: ${o.colors.neutral100};
    `:r===e.TP?`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:`
    border: 1px solid ${o.colors[`${l(r)}500`]};
    background: ${o.colors[`${l(r)}500`]};
  `,d=({theme:o,variant:r})=>[...e.Vv,e.Vb].includes(r)?`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${l(r)}600`]};
      ${s.Z} {
        color: ${o.colors[`${l(r)}600`]};
      }
      svg {
        > g, path {
          fill: ${o.colors[`${l(r)}600`]};
        }
      }
    `:r===e.gK?`
      background-color: ${o.colors.neutral150};
    `:`
    border: 1px solid ${o.colors[`${l(r)}600`]};
    background: ${o.colors[`${l(r)}600`]};
  `,a=({theme:o,variant:r})=>{switch(r){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${o.colors[`${l(r)}200`]};
          background: ${o.colors[`${l(r)}100`]};
          ${s.Z} {
            color: ${o.colors[`${l(r)}700`]};
          }
          svg {
            > g, path {
              fill: ${o.colors[`${l(r)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${o.colors.neutral200};
          background: ${o.colors.neutral0};
          ${s.Z} {
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

        ${s.Z} {
          color: ${o.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${o.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${o.colors[`${l(r)}600`]};
          background: ${o.colors[`${l(r)}600`]};
          ${s.Z} {
            color: ${o.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${o.colors.buttonNeutral0};
            }
          }
        `}}},66362:(S,h,t)=>{t.d(h,{BF:()=>g,k3:()=>l});var e=t(88972);const s=m=>({theme:d,size:a})=>d.sizes[m][a],l=(m="&")=>({theme:d,hasError:a=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${m}:focus-within {
      border: 1px solid ${a?d.colors.danger600:d.colors.primary600};
      box-shadow: ${a?d.colors.danger600:d.colors.primary600} 0px 0px 0px 2px;
    }
  `,g=({theme:m})=>(0,e.css)`
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
      border: 2px solid ${m.colors.primary600};
    }
  }
`},94101:(S,h,t)=>{t.d(h,{Q:()=>u});var e=t(85893),s=t(67294),l=t(88972),g=t(62485),m=t(20501),d=t(53342),a=t(96987),o=t(10574);const r=(0,l.default)(m.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${g.sg}
    &:active {
      ${g.sg}
    }
  }

  &:hover {
    ${g.yP}
  }

  &:active {
    ${g.tB}
  }

  ${g.PD}
`,u=s.forwardRef(({variant:M="default",startIcon:T,endIcon:L,disabled:$=!1,children:O,size:D="S",as:f=d.f,...v},k)=>{const R=D==="S"?2:"10px",I=4;return(0,e.jsxs)(r,{ref:k,"aria-disabled":$,size:D,variant:M,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:R,paddingLeft:I,paddingRight:I,paddingTop:R,pointerEvents:$?"none":void 0,...v,as:f||d.f,children:[T&&(0,e.jsx)(a.k,{"aria-hidden":!0,children:T}),(0,e.jsx)(o.Z,{variant:D==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:O}),L&&(0,e.jsx)(a.k,{"aria-hidden":!0,children:L})]})});u.displayName="LinkButton"},29430:(S,h,t)=>{t.d(h,{r:()=>r});var e=t(85893),s=t(67294),l=t(91393),g=t(88972),m=t(66362),d=t(53342),a=t(10574);const o=(0,g.default)(d.f)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:u})=>u.spaces[2]};
  pointer-events: ${({disabled:u})=>u?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:u,theme:M})=>u?M.colors.neutral600:M.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:u})=>u.colors.primary500};
  }

  &:active {
    color: ${({theme:u})=>u.colors.primary700};
  }

  ${m.BF};
`,r=s.forwardRef(({children:u,href:M,disabled:T=!1,startIcon:L,endIcon:$,isExternal:O=!0,...D},f)=>(0,e.jsxs)(o,{ref:f,href:M,disabled:T,isExternal:O,...D,children:[L,(0,e.jsx)(a.Z,{textColor:T?"neutral600":"primary600",children:u}),$,M&&!$&&O&&(0,e.jsx)(l.Z,{})]}));r.displayName="Link"}}]);
