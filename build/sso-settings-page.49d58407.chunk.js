"use strict";(self.webpackChunkseafood_backend=self.webpackChunkseafood_backend||[]).push([[302],{51754:(U,m,e)=>{e.d(m,{F:()=>L});var t=e(60797),S=e(86896),E=e(88767);const L=(M={},p={})=>{const{id:i="",...f}=M,{get:y}=(0,t.kY)(),{locale:r}=(0,S.Z)(),O=(0,t.Xe)(r,{sensitivity:"base"}),{data:n,error:C,isError:h,isLoading:o,refetch:I}=(0,E.useQuery)(["roles",i,f],async()=>{const{data:c}=await y(`/admin/roles/${i??""}`,{params:f});return c},p);let g=[];return i&&n?g=[n.data]:Array.isArray(n?.data)&&(g=n.data),{roles:g.sort((c,A)=>O.compare(c.name,A.name)),error:C,isError:h,isLoading:o,refetch:I}}},29388:(U,m,e)=>{e.r(m),e.d(m,{SingleSignOn:()=>B,default:()=>Z});var t=e(67294),S=e(45349),E=e(57713),L=e(79371),M=e(19442),p=e(26789),i=e(75878),f=e(78549),y=e(9370),r=e(61585),O=e(58885),n=e(50614),C=e(473),h=e(55482),o=e(60797),I=e(8675),g=e(18446),c=e.n(g),A=e(86896),b=e(86706),x=e(92807),F=e(51754),T=e(36364),u=e(87561);const W=u.Ry().shape({autoRegister:u.Xg().required(o.I0.required),defaultRole:u.nK().when("autoRegister",(a,l)=>a?l.required(o.I0.required):l.nullable()),ssoLockedRoles:u.IX().nullable().of(u.nK().when("ssoLockedRoles",(a,l)=>a?l.required(o.I0.required):l.nullable()))}),B=()=>{(0,o.go)();const{formatMessage:a}=(0,A.Z)(),l=(0,b.v9)(T._),{isLoading:k,allowedActions:{canUpdate:P,canReadRoles:G}}=(0,o.ss)({...l.settings.sso,readRoles:l.settings.roles.read}),[{formErrors:d,initialData:X,isLoading:z,modifiedData:v,showHeaderButtonLoader:H},,{handleChange:R,handleSubmit:N}]=(0,x.G4)("/admin/providers/options",W,()=>{},["autoRegister","defaultRole","ssoLockedRoles"]),{roles:K,isLoading:Q}=(0,F.F)(void 0,{enabled:G}),Y=k||Q||z;return t.createElement(S.A,null,t.createElement(o.SL,{name:"SSO"}),t.createElement(E.o,{tabIndex:-1},t.createElement("form",{onSubmit:N},t.createElement(L.T,{primaryAction:t.createElement(M.z,{"data-testid":"save-button",disabled:c()(X,v),loading:H,startIcon:t.createElement(I.Z,null),type:"submit",size:"L"},a({id:"global.save",defaultMessage:"Save"})),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),t.createElement(p.D,null,Y?t.createElement(o.dO,null):t.createElement(i.k,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},t.createElement(f.Z,{variant:"delta",as:"h2"},a({id:"global.settings",defaultMessage:"Settings"})),t.createElement(y.r,{gap:4},t.createElement(r.P,{col:6,m:6,s:12},t.createElement(O.s,{"aria-label":"autoRegister","data-testid":"autoRegister",disabled:!P,checked:v.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:s=>{R({target:{name:"autoRegister",value:s.target.checked}})}})),t.createElement(r.P,{col:6,m:6,s:12},t.createElement(n.P,{disabled:!P,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:d.defaultRole?a({id:d.defaultRole.id,defaultMessage:d.defaultRole.id}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:s=>{R({target:{name:"defaultRole",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:v.defaultRole},K.map(({id:s,name:D})=>t.createElement(C.W,{key:s,value:s.toString()},D)))),t.createElement(r.P,{col:6,m:6,s:12},t.createElement(h.NU,{disabled:!P,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:d.ssoLockedRoles?a({id:d.ssoLockedRoles.id,defaultMessage:d.ssoLockedRoles.id}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:s=>{R({target:{name:"ssoLockedRoles",value:s}})},placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>{R({target:{name:"ssoLockedRoles",emptyArray:[]}})},value:v.ssoLockedRoles||[],withTags:!0},K.map(({id:s,name:D})=>t.createElement(h.ML,{key:s,value:s.toString()},D))))))))))},Z=()=>{const a=(0,b.v9)(T._);return t.createElement(o.O4,{permissions:a.settings.sso.main},t.createElement(B,null))}}}]);
