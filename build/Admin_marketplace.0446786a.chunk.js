"use strict";(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[5516],{63109:(O,R,t)=>{t.d(R,{Z:()=>g});var e=t(67294);const g=(y,b)=>{const[c,P]=(0,e.useState)(y);return(0,e.useEffect)(()=>{const a=setTimeout(()=>{P(y)},b);return()=>{clearTimeout(a)}},[y,b]),c}},91278:(O,R,t)=>{t.r(R),t.d(R,{MarketPlacePage:()=>be,default:()=>Mt});var e=t(67294),h=t(45349),g=t(57713),y=t(26789),b=t(20107),c=t(75878),P=t(61738),a=t(50781),u=t(96073),T=t(54375),p=t(60797),A=t(64593),C=t(86896),U=t(86706),Q=t(63109);const H=()=>{const s=typeof navigator<"u"&&typeof navigator.onLine=="boolean"?navigator.onLine:!0,[r,l]=(0,e.useState)(s),i=()=>l(!0),o=()=>l(!1);return(0,e.useEffect)(()=>(window.addEventListener("online",i),window.addEventListener("offline",o),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",o)}),[]),r};var Y=t(36364),D=t(80907),F=t(80631),j=t(91393);const xe=()=>{const{formatMessage:s}=(0,C.Z)(),{trackUsage:r}=(0,p.rS)();return e.createElement("a",{href:"https://strapi.canny.io/plugin-requests",target:"_blank",rel:"noopener noreferrer nofollow",style:{textDecoration:"none"},onClick:()=>r("didMissMarketplacePlugin")},e.createElement(p.Y_,{title:s({id:"admin.pages.MarketPlacePage.missingPlugin.title",defaultMessage:"Documentation"}),subtitle:s({id:"admin.pages.MarketPlacePage.missingPlugin.description",defaultMessage:"Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!"}),icon:e.createElement(F.Z,null),iconBackground:"alternative100",endAction:e.createElement(D.J,{as:j.Z,color:"neutral600",width:3,height:3,marginLeft:2})}))};var Se=t(14020),J=t(19442),Te=t(15800),$e=t(36002),De=t(45697),n=t.n(De),N=t(88972),Oe=t(92545),oe=t(50614),le=t(473);const ie=({message:s,value:r,onChange:l,possibleFilters:i,onClear:o,customizeContent:f})=>{const d=(m,M)=>`${m} (${M})`;return e.createElement(oe.P,{"data-testid":`${s}-button`,label:s,placeholder:s,size:"M",onChange:l,onClear:o,value:r,customizeContent:f,multi:!0},Object.entries(i).map(([m,M])=>e.createElement(le.W,{"data-testid":`${m}-${M}`,key:m,value:m},d(m,M))))};ie.propTypes={message:n().string.isRequired,value:n().array.isRequired,onChange:n().func.isRequired,possibleFilters:n().object.isRequired,onClear:n().func.isRequired,customizeContent:n().func.isRequired};const ce=ie,de=({source:s,onToggle:r,query:l,npmPackageType:i,possibleCategories:o,possibleCollections:f,handleSelectChange:d,handleSelectClear:m})=>{const{formatMessage:M}=(0,C.Z)();return e.createElement(Oe.J2,{source:s,onDismiss:r,padding:3,spacing:4},e.createElement(Le,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ce,{message:M({id:"admin.pages.MarketPlacePage.filters.collections",defaultMessage:"Collections"}),value:l?.collections||[],onChange:v=>{d({collections:v})},onClear:()=>m("collections"),possibleFilters:f,customizeContent:v=>M({id:"admin.pages.MarketPlacePage.filters.collectionsSelected",defaultMessage:"{count, plural, =0 {No collections} one {# collection} other {# collections}} selected"},{count:v.length})}),i==="plugin"&&e.createElement(ce,{message:M({id:"admin.pages.MarketPlacePage.filters.categories",defaultMessage:"Categories"}),value:l?.categories||[],onChange:v=>{d({categories:v})},onClear:()=>m("categories"),possibleFilters:o,customizeContent:v=>M({id:"admin.pages.MarketPlacePage.filters.categoriesSelected",defaultMessage:"{count, plural, =0 {No categories} one {# category} other {# categories}} selected"},{count:v.length}),name:"categories"})))};de.propTypes={onToggle:n().func.isRequired,source:n().shape({current:n().instanceOf(Element)}).isRequired,query:n().object.isRequired,npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const Be=de,Le=(0,N.default)(c.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,X=({name:s,handleRemove:r})=>e.createElement(a.x,{padding:1},e.createElement(Se.V,{icon:e.createElement(Te.Z,null),onClick:r},s)),Ie=(0,N.default)(J.z)`
  height: ${({theme:s})=>s.sizes.input.S};
`,ue=({possibleCollections:s,possibleCategories:r,npmPackageType:l,query:i,handleSelectClear:o,handleSelectChange:f})=>{const[d,m]=(0,e.useState)(!1),M=(0,e.useRef)(),{formatMessage:v}=(0,C.Z)(),k=()=>m(E=>!E),x=(E,S)=>{const L={[S]:i[S].filter(Z=>Z!==E)};f(L)};return e.createElement(e.Fragment,null,e.createElement(a.x,{paddingTop:1,paddingBottom:1},e.createElement(Ie,{variant:"tertiary",ref:M,"data-testid":"filters-button",startIcon:e.createElement($e.Z,null),onClick:k,size:"S"},v({id:"app.utils.filters",defaultMessage:"Filters"})),d&&e.createElement(Be,{onToggle:k,source:M,query:i,handleSelectClear:o,handleSelectChange:f,possibleCollections:s,possibleCategories:r,npmPackageType:l})),i.collections?.map(E=>e.createElement(X,{name:E,key:E,handleRemove:()=>x(E,"collections")})),l==="plugin"&&i.categories?.map(E=>e.createElement(X,{name:E,key:E,handleRemove:()=>x(E,"categories")})))};X.propTypes={name:n().string.isRequired,handleRemove:n().func.isRequired},ue.propTypes={npmPackageType:n().oneOf(["plugin","provider"]).isRequired,possibleCollections:n().object.isRequired,possibleCategories:n().object.isRequired,query:n().object.isRequired,handleSelectChange:n().func.isRequired,handleSelectClear:n().func.isRequired};const Ae=ue;var Ne=t(28809),Ze=t(9370),je=t(61585),B=t(78549),Ue=t(58252),Ve=t(62372);const Fe=(0,N.default)(a.x)`
  background: ${({theme:s})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${s.colors.neutral150} 100%)`};
  opacity: 0.33;
`,Ge=()=>e.createElement(Ve.M,null,Array(12).fill(null).map((s,r)=>e.createElement(Fe,{key:`empty-plugin-card-${r}`,height:"234px",hasRadius:!0}))),ge=({content:s})=>e.createElement(a.x,{position:"relative","data-testid":"marketplace-results"},e.createElement(Ge,null),e.createElement(a.x,{position:"absolute",top:11,width:"100%"},e.createElement(c.k,{alignItems:"center",justifyContent:"center",direction:"column"},e.createElement(D.J,{as:Ue.Z,color:"",width:"160px",height:"88px"}),e.createElement(a.x,{paddingTop:6},e.createElement(B.Z,{variant:"delta",as:"p",textColor:"neutral600"},s)))));ge.propTypes={content:n().string.isRequired};const We=ge;var q=t(74273),pe=t(94101),Ke=t(60324),we=t(23450),ze=t.n(we),Qe=t(61473),He=t(8675),me=t(70780),Ye=t(81249),fe=t.n(Ye);const G=({description:s,installMessage:r,disabled:l,handleCopy:i,pluginName:o})=>e.createElement(q.u,{"data-testid":`tooltip-${o}`,description:s},e.createElement(a.x,null,e.createElement(J.z,{size:"S",startIcon:e.createElement(me.Z,null),variant:"secondary",disabled:l,onClick:i},r))),_=({strapiPeerDepVersion:s,strapiAppVersion:r,handleCopy:l,pluginName:i})=>{const{formatMessage:o}=(0,C.Z)(),f=fe().validRange(s),d=fe().satisfies(r,f),m=o({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"});if(r){if(!f)return e.createElement(G,{installMessage:m,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version.null",defaultMessage:'Unable to verify compatibility with your Strapi version: "{strapiAppVersion}"'},{strapiAppVersion:r}),handleCopy:l});if(!d)return e.createElement(G,{installMessage:m,pluginName:i,description:o({id:"admin.pages.MarketPlacePage.plugin.version",defaultMessage:'Update your Strapi version: "{strapiAppVersion}" to: "{versionRange}"'},{strapiAppVersion:r,versionRange:f}),disabled:!0})}return e.createElement(J.z,{size:"S",startIcon:e.createElement(me.Z,null),variant:"secondary",onClick:l},m)};G.defaultProps={disabled:!1,handleCopy:null},G.propTypes={description:n().string.isRequired,installMessage:n().string.isRequired,disabled:n().bool,handleCopy:n().func,pluginName:n().string.isRequired},_.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},_.propTypes={strapiAppVersion:n().string,strapiPeerDepVersion:n().string,handleCopy:n().func.isRequired,pluginName:n().string.isRequired};const Je=_,ee=({isInstalled:s,isInDevelopmentMode:r,commandToCopy:l,strapiAppVersion:i,strapiPeerDepVersion:o,pluginName:f})=>{const d=(0,p.lm)(),{formatMessage:m}=(0,C.Z)(),{trackUsage:M}=(0,p.rS)(),{copy:v}=(0,p.VP)(),k=async()=>{await v(l)&&(M("willInstallPlugin"),d({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}}))};return s?e.createElement(a.x,{paddingLeft:4},e.createElement(D.J,{as:He.Z,marginRight:2,width:12,height:12,color:"success600"}),e.createElement(B.Z,{variant:"omega",textColor:"success600",fontWeight:"bold"},m({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):r?e.createElement(Je,{strapiAppVersion:i,strapiPeerDepVersion:o,handleCopy:k,pluginName:f}):null};ee.defaultProps={strapiAppVersion:null,strapiPeerDepVersion:null},ee.propTypes={isInstalled:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,commandToCopy:n().string.isRequired,strapiAppVersion:n().string,strapiPeerDepVersion:n().string,pluginName:n().string.isRequired};const Xe=ee;var qe=t(81984),_e=t(86820),et=t(71125),tt=t(52794);const at=(0,N.default)(qe.i)`
  width: ${(0,p.Q1)(12)};
  transform: rotate(90deg);
`,te=({githubStars:s,npmDownloads:r,npmPackageType:l})=>{const{formatMessage:i}=(0,C.Z)();return e.createElement(c.k,{gap:1},!!s&&e.createElement(e.Fragment,null,e.createElement(D.J,{as:_e.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),"aria-hidden":!0}),e.createElement(D.J,{as:et.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),color:"warning500","aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.githubStars`,defaultMessage:"This {package} was starred {starsCount} on GitHub"},{starsCount:s,package:l})},e.createElement(B.Z,{variant:"pi",textColor:"neutral800"},s)),e.createElement(at,{unsetMargin:!1,background:"neutral200"})),e.createElement(D.J,{as:tt.Z,height:(0,p.Q1)(12),width:(0,p.Q1)(12),"aria-hidden":!0}),e.createElement("p",{"aria-label":i({id:`admin.pages.MarketPlacePage.${l}.downloads`,defaultMessage:"This {package} has {downloadsCount} weekly downloads"},{downloadsCount:r,package:l})},e.createElement(B.Z,{variant:"pi",textColor:"neutral800"},r)))};te.defaultProps={githubStars:0,npmDownloads:0},te.propTypes={githubStars:n().number,npmDownloads:n().number,npmPackageType:n().string.isRequired};const nt=te,st=(0,N.default)(B.Z)`
  /* stylelint-disable value-no-vendor-prefix, property-no-vendor-prefix */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* stylelint-enable value-no-vendor-prefix, property-no-vendor-prefix */
  overflow: hidden;
`,ae=({npmPackage:s,isInstalled:r,useYarn:l,isInDevelopmentMode:i,npmPackageType:o,strapiAppVersion:f})=>{const{attributes:d}=s,{formatMessage:m}=(0,C.Z)(),{trackUsage:M}=(0,p.rS)(),v=l?`yarn add ${d.npmPackageName}`:`npm install ${d.npmPackageName}`,k=m({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"}),x=`https://market.strapi.io/${ze().plural(o)}/${d.slug}`;return e.createElement(c.k,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:4,paddingBottom:4,paddingLeft:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal","data-testid":"npm-package-card"},e.createElement(a.x,null,e.createElement(c.k,{direction:"row",justifyContent:"space-between",alignItems:"flex-start"},e.createElement(a.x,{as:"img",src:d.logo.url,alt:`${d.name} logo`,hasRadius:!0,width:11,height:11}),e.createElement(nt,{githubStars:d.githubStars,npmDownloads:d.npmDownloads,npmPackageType:o})),e.createElement(a.x,{paddingTop:4},e.createElement(B.Z,{as:"h3",variant:"delta"},e.createElement(c.k,{alignItems:"center"},d.name,d.validated&&!d.madeByStrapi&&e.createElement(q.u,{description:m({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},e.createElement(c.k,null,e.createElement(D.J,{as:Ke.Z,marginLeft:2,color:"success600"}))),d.madeByStrapi&&e.createElement(q.u,{description:k},e.createElement(c.k,null,e.createElement(a.x,{as:"img",src:Qe,alt:k,marginLeft:1,width:6,height:"auto"})))))),e.createElement(a.x,{paddingTop:2},e.createElement(st,{as:"p",variant:"omega",textColor:"neutral600"},d.description))),e.createElement(c.k,{gap:2,style:{alignSelf:"flex-end"},paddingTop:6},e.createElement(pe.Q,{size:"S",href:x,isExternal:!0,endIcon:e.createElement(j.Z,null),"aria-label":m({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:d.name}),variant:"tertiary",onClick:()=>M("didPluginLearnMore")},m({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"More"})),e.createElement(Xe,{isInstalled:r,isInDevelopmentMode:i,commandToCopy:v,strapiAppVersion:f,strapiPeerDepVersion:d.strapiVersion,pluginName:d.name})))};ae.defaultProps={isInDevelopmentMode:!1,strapiAppVersion:null},ae.propTypes={npmPackage:n().shape({id:n().string.isRequired,attributes:n().shape({name:n().string.isRequired,description:n().string.isRequired,slug:n().string.isRequired,npmPackageName:n().string.isRequired,npmPackageUrl:n().string.isRequired,repositoryUrl:n().string.isRequired,logo:n().object.isRequired,developerName:n().string.isRequired,validated:n().bool.isRequired,madeByStrapi:n().bool.isRequired,strapiCompatibility:n().oneOf(["v3","v4"]),strapiVersion:n().string,githubStars:n().number,npmDownloads:n().number}).isRequired}).isRequired,isInstalled:n().bool.isRequired,useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool,npmPackageType:n().string.isRequired,strapiAppVersion:n().string};const rt=ae,ne=({status:s,npmPackages:r,installedPackageNames:l,useYarn:i,isInDevelopmentMode:o,npmPackageType:f,strapiAppVersion:d,debouncedSearch:m})=>{const{formatMessage:M}=(0,C.Z)();if(s==="error")return e.createElement(c.k,{paddingTop:8},e.createElement(p.Hn,null));if(s==="loading")return e.createElement(c.k,{justifyContent:"center",paddingTop:8},e.createElement(Ne.a,null,"Loading content..."));const v=M({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:m});return r.length===0?e.createElement(We,{content:v}):e.createElement(Ze.r,{gap:4,"data-testid":"marketplace-results"},r.map(k=>e.createElement(je.P,{col:4,s:6,xs:12,style:{height:"100%"},key:k.id},e.createElement(rt,{npmPackage:k,isInstalled:l.includes(k.attributes.npmPackageName),useYarn:i,isInDevelopmentMode:o,npmPackageType:f,strapiAppVersion:d}))))};ne.defaultProps={npmPackages:[],installedPackageNames:[],strapiAppVersion:null,debouncedSearch:""},ne.propTypes={status:n().string.isRequired,npmPackages:n().array,installedPackageNames:n().arrayOf(n().string),useYarn:n().bool.isRequired,isInDevelopmentMode:n().bool.isRequired,npmPackageType:n().string.isRequired,strapiAppVersion:n().string,debouncedSearch:n().string};const Pe=ne,Ee=({pagination:s})=>e.createElement(a.x,{paddingTop:4},e.createElement(c.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(p.v4,{options:["12","24","50","100"],defaultValue:"24"}),e.createElement(p.tU,{pagination:s})));Ee.propTypes={pagination:n().shape({page:n().number.isRequired,pageCount:n().number.isRequired,pageSize:n().number.isRequired,total:n().number.isRequired}).isRequired};const ot=Ee,lt=t.p+"9d5d788027e86620c234.svg";var it=t(79371),ct=t(76838);const se=({isOnline:s,npmPackageType:r})=>{const{formatMessage:l}=(0,C.Z)(),{trackUsage:i}=(0,p.rS)(),o=r==="provider"?"didSubmitProvider":"didSubmitPlugin";return e.createElement(it.T,{title:l({id:"global.marketplace",defaultMessage:"Marketplace"}),subtitle:l({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:s&&e.createElement(pe.Q,{startIcon:e.createElement(ct.Z,null),variant:"tertiary",href:`https://market.strapi.io/submit-${r}`,onClick:()=>i(o),isExternal:!0},l({id:`admin.pages.MarketPlacePage.submit.${r}.link`,defaultMessage:`Submit ${r}`}))})},he=se;se.defaultProps={npmPackageType:"plugin"},se.propTypes={isOnline:n().bool.isRequired,npmPackageType:n().string};const dt=()=>{const{formatMessage:s}=(0,C.Z)();return e.createElement(h.A,null,e.createElement(g.o,null,e.createElement(he,{isOnline:!1}),e.createElement(c.k,{width:"100%",direction:"column",alignItems:"center",justifyContent:"center",paddingTop:(0,p.Q1)(120)},e.createElement(a.x,{paddingBottom:2},e.createElement(B.Z,{textColor:"neutral700",variant:"alpha"},s({id:"admin.pages.MarketPlacePage.offline.title",defaultMessage:"You are offline"}))),e.createElement(a.x,{paddingBottom:6},e.createElement(B.Z,{textColor:"neutral700",variant:"epsilon"},s({id:"admin.pages.MarketPlacePage.offline.subtitle",defaultMessage:"You need to be connected to the Internet to access Strapi Market."}))),e.createElement("img",{src:lt,alt:"offline",style:{width:"88px",height:"88px"}}))))},ut=(0,N.default)(a.x)`
  font-weight: ${({theme:s})=>s.fontWeights.semiBold};

  span {
    font-size: ${({theme:s})=>s.fontSizes[1]};
  }

  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`,Me=({sortQuery:s,handleSelectChange:r})=>{const{formatMessage:l}=(0,C.Z)(),i={"name:asc":{selected:{id:"admin.pages.MarketPlacePage.sort.alphabetical.selected",defaultMessage:"Sort by alphabetical order"},option:{id:"admin.pages.MarketPlacePage.sort.alphabetical",defaultMessage:"Alphabetical order"}},"submissionDate:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.newest.selected",defaultMessage:"Sort by newest"},option:{id:"admin.pages.MarketPlacePage.sort.newest",defaultMessage:"Newest"}},"githubStars:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.githubStars.selected",defaultMessage:"Sort by GitHub stars"},option:{id:"admin.pages.MarketPlacePage.sort.githubStars",defaultMessage:"Number of GitHub stars"}},"npmDownloads:desc":{selected:{id:"admin.pages.MarketPlacePage.sort.npmDownloads.selected",defaultMessage:"Sort by npm downloads"},option:{id:"admin.pages.MarketPlacePage.sort.npmDownloads",defaultMessage:"Number of downloads"}}};return e.createElement(ut,null,e.createElement(oe.P,{size:"S",id:"sort-by-select",value:s,customizeContent:()=>l(i[s].selected),onChange:o=>{r({sort:o})},label:l({id:"admin.pages.MarketPlacePage.sort.label",defaultMessage:"Sort by"})},Object.entries(i).map(([o,f])=>e.createElement(le.W,{key:o,value:o},l(f.option)))))};Me.propTypes={sortQuery:n().string.isRequired,handleSelectChange:n().func.isRequired};const gt=Me;var pt=t(46683),mt=t(80129),W=t.n(mt),ve=t(88767);const ye="https://market-api.strapi.io",ft=(s,r={})=>{const l=(0,p.lm)();return(0,ve.useQuery)(["marketplace","plugins",r],async()=>{try{const i=W().stringify(W().parse(r)),o=await fetch(`${ye}/plugins?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace plugins.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},Pt=(s,r={})=>{const l=(0,p.lm)();return(0,ve.useQuery)(["marketplace","providers",r],async()=>{try{const i=W().stringify(W().parse(r)),o=await fetch(`${ye}/providers?${i}`);if(!o.ok)throw new Error("Failed to fetch marketplace providers.");return await o.json()}catch{}return null},{onSuccess(){s&&s()},onError(){l({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};function Et({npmPackageType:s,debouncedSearch:r,query:l,tabQuery:i}){const{notifyStatus:o}=(0,pt.G)(),{formatMessage:f}=(0,C.Z)(),d=f({id:"global.marketplace",defaultMessage:"Marketplace"}),m=()=>{o(f({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:d}))},M={page:l?.page||1,pageSize:l?.pageSize||24},{data:v,status:k}=ft(m,{...i.plugin,pagination:M,search:r}),{data:x,status:E}=Pt(m,{...i.provider,pagination:M,search:r}),S=s==="plugin"?v:x,L=s==="plugin"?k:E,[Z,K]=(0,e.useState)({}),[w,z]=(0,e.useState)({});(0,e.useEffect)(()=>{L==="success"&&K(S.meta.collections),k==="success"&&z(v.meta.categories)},[v?.meta.categories,k,S?.meta.collections,L]);const{pagination:re}=L==="success"?S.meta:{};return{pluginsResponse:v,providersResponse:x,pluginsStatus:k,providersStatus:E,possibleCollections:Z,possibleCategories:w,pagination:re}}const ht=Et,be=()=>{const{formatMessage:s}=(0,C.Z)(),{trackUsage:r}=(0,p.rS)(),l=(0,e.useRef)(r),i=(0,p.lm)(),[{query:o},f]=(0,p.Kx)(),d=(0,Q.Z)(o?.search,500)||"",{autoReload:m,dependencies:M,useYarn:v,strapiVersion:k}=(0,p.L7)(),x=H(),E=o?.npmPackageType||"plugin",[S,L]=(0,e.useState)({plugin:E==="plugin"?{...o}:{},provider:E==="provider"?{...o}:{}});(0,p.go)(),(0,e.useEffect)(()=>{l.current("didGoToMarketplace")},[]),(0,e.useEffect)(()=>{m||i({type:"info",message:{id:"admin.pages.MarketPlacePage.production",defaultMessage:"Manage plugins from the development environment"}})},[i,m]);const{pluginsResponse:Z,providersResponse:K,pluginsStatus:w,providersStatus:z,possibleCollections:re,possibleCategories:vt,pagination:ke}=ht({npmPackageType:E,debouncedSearch:d,query:o,tabQuery:S});if(!x)return e.createElement(dt,null);const yt=I=>{const $=I===0?"plugin":"provider",kt=S[$]&&Object.keys(S[$]).length;f(kt?{...S[$],search:o?.search||"",npmPackageType:$,page:1}:{npmPackageType:$,collections:[],categories:[],sort:"name:asc",page:1,search:o?.search||""})},Re=I=>{f({...I,page:1}),L($=>({...$,[E]:{...$[E],...I}}))},bt=I=>{f({[I]:[],page:null},"remove"),L($=>({...$,[E]:{}}))},Ce=Object.keys(M);return e.createElement(h.A,null,e.createElement(g.o,null,e.createElement(A.q,{title:s({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),e.createElement(he,{isOnline:x,npmPackageType:E}),e.createElement(y.D,null,e.createElement(b.v,{label:s({id:"admin.pages.MarketPlacePage.tab-group.label",defaultMessage:"Plugins and Providers for Strapi"}),id:"tabs",variant:"simple",initialSelectedTabIndex:["plugin","provider"].indexOf(E),onTabChange:yt},e.createElement(c.k,{justifyContent:"space-between",paddingBottom:4},e.createElement(P.m,null,e.createElement(P.O,null,s({id:"admin.pages.MarketPlacePage.plugins",defaultMessage:"Plugins"})," ",w==="success"?`(${Z.meta.pagination.total})`:"..."),e.createElement(P.O,null,s({id:"admin.pages.MarketPlacePage.providers",defaultMessage:"Providers"})," ",z==="success"?`(${K.meta.pagination.total})`:"...")),e.createElement(a.x,{width:"25%"},e.createElement(u.w,{name:"searchbar",onClear:()=>f({search:"",page:1}),value:o?.search,onChange:I=>f({search:I.target.value,page:1}),clearLabel:s({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the search"}),placeholder:s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})},s({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search"})))),e.createElement(c.k,{paddingBottom:4,gap:2},e.createElement(gt,{sortQuery:o?.sort||"name:asc",handleSelectChange:Re}),e.createElement(Ae,{npmPackageType:E,possibleCollections:re,possibleCategories:vt,query:o||{},handleSelectChange:Re,handleSelectClear:bt})),e.createElement(T.n,null,e.createElement(T.x,null,e.createElement(Pe,{npmPackages:Z?.data,status:w,installedPackageNames:Ce,useYarn:v,isInDevelopmentMode:m,npmPackageType:"plugin",strapiAppVersion:k,debouncedSearch:d})),e.createElement(T.x,null,e.createElement(Pe,{npmPackages:K?.data,status:z,installedPackageNames:Ce,useYarn:v,isInDevelopmentMode:m,npmPackageType:"provider",debouncedSearch:d})))),ke&&e.createElement(ot,{pagination:ke}),e.createElement(a.x,{paddingTop:8},e.createElement(xe,null)))))},Mt=()=>{const s=(0,U.v9)(Y._);return e.createElement(p.O4,{permissions:s.marketplace.main},e.createElement(be,null))}},62372:(O,R,t)=>{t.d(R,{M:()=>h});var e=t(88972);const h=e.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:g})=>g.spaces[4]};
`},45349:(O,R,t)=>{t.d(R,{A:()=>c});var e=t(85893),h=t(88972),g=t(50781);const y=(0,h.default)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:P})=>P?"auto 1fr":"1fr"};
`,b=(0,h.default)(g.x)`
  overflow-x: hidden;
`,c=({sideNav:P,children:a})=>(0,e.jsxs)(y,{hasSideNav:!!P,children:[P,(0,e.jsx)(b,{paddingBottom:10,children:a})]})},20501:(O,R,t)=>{t.d(R,{G:()=>c,Y:()=>P});var e=t(85893),h=t(67294),g=t(88972),y=t(66362),b=t(96987);const c=(0,g.default)(b.k)`
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

  ${y.BF}
`,P=h.forwardRef(({disabled:a,children:u,background:T="neutral0",...p},A)=>(0,e.jsx)(c,{ref:A,"aria-disabled":a,as:"button",type:"button",disabled:a,padding:2,hasRadius:!0,background:T,borderColor:"neutral200",cursor:"pointer",...p,children:u}));P.displayName="BaseButton"},4071:(O,R,t)=>{t.d(R,{G$:()=>h,Gt:()=>p,MG:()=>e,MR:()=>P,T:()=>c,TP:()=>g,Vb:()=>b,Vv:()=>u,ZC:()=>T,gK:()=>y,wG:()=>a});const e="success-light",h="danger-light",g="default",y="tertiary",b="secondary",c="danger",P="success",a="ghost",u=[e,h],T=[g,y,b,c,P,a,...u],p=["S","M","L"]},62485:(O,R,t)=>{t.d(R,{PD:()=>P,sg:()=>y,tB:()=>c,yP:()=>b});var e=t(4071),h=t(10574);const g=a=>a===e.MG||a===e.G$?`${a.substring(0,a.lastIndexOf("-"))}`:a===e.gK?"neutral":a===e.TP||a===e.Vb||e.ZC.every(u=>u!==a)?"primary":`${a}`,y=({theme:a})=>`
    border: 1px solid ${a.colors.neutral200};
    background: ${a.colors.neutral150};
    ${h.Z} {
      color: ${a.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${a.colors.neutral600};
      }
    }
  `,b=({theme:a,variant:u})=>[...e.Vv,e.Vb].includes(u)?`
      background-color: ${a.colors.neutral0};
    `:u===e.gK?`
      background-color: ${a.colors.neutral100};
    `:u===e.wG?`
      background-color: ${a.colors.neutral100};
    `:u===e.TP?`
      border: 1px solid ${a.colors.buttonPrimary500};
      background: ${a.colors.buttonPrimary500};
    `:`
    border: 1px solid ${a.colors[`${g(u)}500`]};
    background: ${a.colors[`${g(u)}500`]};
  `,c=({theme:a,variant:u})=>[...e.Vv,e.Vb].includes(u)?`
      background-color: ${a.colors.neutral0};
      border: 1px solid ${a.colors[`${g(u)}600`]};
      ${h.Z} {
        color: ${a.colors[`${g(u)}600`]};
      }
      svg {
        > g, path {
          fill: ${a.colors[`${g(u)}600`]};
        }
      }
    `:u===e.gK?`
      background-color: ${a.colors.neutral150};
    `:`
    border: 1px solid ${a.colors[`${g(u)}600`]};
    background: ${a.colors[`${g(u)}600`]};
  `,P=({theme:a,variant:u})=>{switch(u){case e.G$:case e.MG:case e.Vb:return`
          border: 1px solid ${a.colors[`${g(u)}200`]};
          background: ${a.colors[`${g(u)}100`]};
          ${h.Z} {
            color: ${a.colors[`${g(u)}700`]};
          }
          svg {
            > g, path {
              fill: ${a.colors[`${g(u)}700`]};
            }
          }
        `;case e.gK:return`
          border: 1px solid ${a.colors.neutral200};
          background: ${a.colors.neutral0};
          ${h.Z} {
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

        ${h.Z} {
          color: ${a.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${a.colors.neutral500};
          }
        }
      `;case e.MR:case e.T:return`
          border: 1px solid ${a.colors[`${g(u)}600`]};
          background: ${a.colors[`${g(u)}600`]};
          ${h.Z} {
            color: ${a.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${a.colors.buttonNeutral0};
            }
          }
        `}}},66362:(O,R,t)=>{t.d(R,{BF:()=>y,k3:()=>g});var e=t(88972);const h=b=>({theme:c,size:P})=>c.sizes[b][P],g=(b="&")=>({theme:c,hasError:P=!1})=>(0,e.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${b}:focus-within {
      border: 1px solid ${P?c.colors.danger600:c.colors.primary600};
      box-shadow: ${P?c.colors.danger600:c.colors.primary600} 0px 0px 0px 2px;
    }
  `,y=({theme:b})=>(0,e.css)`
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
      border: 2px solid ${b.colors.primary600};
    }
  }
`},94101:(O,R,t)=>{t.d(R,{Q:()=>T});var e=t(85893),h=t(67294),g=t(88972),y=t(62485),b=t(20501),c=t(53342),P=t(96987),a=t(10574);const u=(0,g.default)(b.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${y.sg}
    &:active {
      ${y.sg}
    }
  }

  &:hover {
    ${y.yP}
  }

  &:active {
    ${y.tB}
  }

  ${y.PD}
`,T=h.forwardRef(({variant:p="default",startIcon:A,endIcon:C,disabled:U=!1,children:Q,size:V="S",as:H=c.f,...Y},D)=>{const F=V==="S"?2:"10px",j=4;return(0,e.jsxs)(u,{ref:D,"aria-disabled":U,size:V,variant:p,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:F,paddingLeft:j,paddingRight:j,paddingTop:F,pointerEvents:U?"none":void 0,...Y,as:H||c.f,children:[A&&(0,e.jsx)(P.k,{"aria-hidden":!0,children:A}),(0,e.jsx)(a.Z,{variant:V==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:Q}),C&&(0,e.jsx)(P.k,{"aria-hidden":!0,children:C})]})});T.displayName="LinkButton"}}]);
