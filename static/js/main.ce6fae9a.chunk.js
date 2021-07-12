(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),o=r.n(c),i=(r(91),r(92),r(16)),s=function(e){return e.profile},l=r(30),u=r.n(l),j=r(38),p=r(10),d=r(57),b=r.n(d),O=b.a.create({baseURL:"https://tager.dev.ozitag.com/api",headers:{Accept:"application/json","Content-Type":"application/json"}}),f=b.a.create({baseURL:"https://tager.dev.ozitag.com/api",headers:{Accept:"application/json","Content-Type":"application/json"}});O.interceptors.request.use((function(e){var t=JSON.parse(localStorage.getItem("token")||"{}"),r=t.data.data.accessToken;return t&&(e.headers.Authorization="Bearer ".concat(r)),e}),(function(e){return Promise.reject(e)}));var m={logIn:function(e,t){return f.post("/auth/user",JSON.stringify({email:e,password:t,clientId:1}))},logOut:function(){return O.post("/tager/user/profile/logout")},getUserProfile:function(){return O.get("/tager/user/profile")}},h={loading:!1,user:null,error:null},g=function(e){return{type:"GET-PROFILE-SUCCESS",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET-PROFILE":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,user:null,error:null});case"GET-PROFILE-SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,user:t.payload});case"GET-PROFILE-FAILURE":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,error:t.payload});default:return e}},x={isSubmitting:!1,currentUser:null,error:null},S=function(e){return{type:"LOGIN-SUCCESS",payload:e}},y=function(e){return{type:"LOGOUT-FAILURE",payload:e}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(p.a)(Object(p.a)({},e),{},{isSubmitting:!0,error:null});case"LOGIN-SUCCESS":return Object(p.a)(Object(p.a)({},e),{},{isSubmitting:!1,currentUser:t.payload});case"LOGIN-FAILURE":return Object(p.a)(Object(p.a)({},e),{},{isSubmitting:!1,error:t.payload});case"LOGOUT-SUCCESS":return x;case"LOGOUT-FAILURE":return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},E=r(155),I=r(51),L=r.n(I),w=r(147),C=r(151),_=r(6),N=function(){var e=Object(i.c)(),t=Object(i.d)(s,i.b),r=t.loading,a=t.user,c=t.error;Object(n.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.getUserProfile();case 3:r=e.sent,t(g(r.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:"GET-PROFILE-FAILURE",payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(_.jsxs)("div",{className:L.a.container,children:[c&&Object(_.jsx)("p",{className:"error",children:c.message}),Object(_.jsx)(w.a,{variant:"h5",component:"h5",gutterBottom:!0,children:"User profile:"}),Object(_.jsxs)("div",{className:L.a.code,children:[r&&Object(_.jsx)(C.a,{}),a&&Object(_.jsx)("pre",{className:L.a.pre,children:JSON.stringify(a,null,2)})]}),Object(_.jsx)(E.a,{variant:"contained",color:"secondary",onClick:function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.logOut();case 3:r=e.sent,t({type:"LOGOUT-SUCCESS",payload:r.data}),localStorage.removeItem("token"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(y(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})]})},P=r(42),F=r(12),R=r(49),T=function(e){return e.auth},k=function(e){var t=e.children,r=Object(R.a)(e,["children"]),n=Object(i.d)(T,i.b).currentUser;return Object(_.jsx)(F.b,Object(p.a)(Object(p.a)({},r),{},{render:function(e){var r=e.location;return n?Object(_.jsx)(F.a,{to:{pathname:"/profile",state:{from:r}}}):t}}))},G=function(e){var t=e.children,r=Object(R.a)(e,["children"]),n=Object(i.d)(T,i.b).currentUser;return Object(_.jsx)(F.b,Object(p.a)(Object(p.a)({},r),{},{render:function(e){var r=e.location;return n?t:Object(_.jsx)(F.a,{to:{pathname:"/login",state:{from:r}}})}}))},A=r(156),J=r(152),B=r(154),z=r(153),Z=r(79),q=r(40),D=r.n(q),H=function(){var e=Object(i.c)(),t=Object(i.d)(T,i.b),r=t.isSubmitting,n=t.error,a=Object(Z.a)({validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required email",e.password||(t.password="Required password"),t},initialValues:{email:"user@ozitag.com",password:"user"},onSubmit:function(t){var r,n;e((r=t.email,n=t.password,function(){var e=Object(j.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.logIn(r,n);case 3:a=e.sent,t(S(a)),localStorage.setItem("token",JSON.stringify(a)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),t(y(e.t0)),localStorage.removeItem("token");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}});return Object(_.jsxs)("div",{className:D.a.container,children:[n&&Object(_.jsx)("p",{className:D.a.error,children:n.message}),Object(_.jsx)(w.a,{variant:"h3",component:"h2",gutterBottom:!0,children:"Log in"}),Object(_.jsx)("form",{onSubmit:a.handleSubmit,children:Object(_.jsxs)(A.a,{children:[Object(_.jsxs)(J.a,{children:[Object(_.jsx)(B.a,Object(p.a)({type:"email",label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?Object(_.jsx)("div",{className:D.a.error,children:a.errors.email}):null,Object(_.jsx)(B.a,Object(p.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?Object(_.jsx)("div",{className:D.a.error,children:a.errors.password}):null,r&&Object(_.jsx)(z.a,{})]}),Object(_.jsx)(E.a,{variant:"contained",color:"primary",type:"submit",disabled:r,children:"Submit"})]})})]})};var M=function(){return Object(_.jsx)(P.a,{children:Object(_.jsxs)(F.d,{children:[Object(_.jsx)(F.b,{path:["/login-form","/"],exact:!0,children:Object(_.jsx)(F.a,{to:"/login/"})}),Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(k,{path:"/login",children:Object(_.jsx)(H,{})}),Object(_.jsx)(G,{path:"/profile",children:Object(_.jsx)(N,{})})]})]})})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,157)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))},$=r(52),K=r(78),Q=Object($.b)({auth:U,profile:v}),W=Object($.c)(Q,Object($.a)(K.a));o.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(i.a,{store:W,children:Object(_.jsx)(M,{})})}),document.getElementById("root")),V()},40:function(e,t,r){e.exports={container:"login_container__23Tpl",form:"login_form__29o9p",error:"login_error__28RHN"}},51:function(e,t,r){e.exports={container:"Profile_container__3iCys",code:"Profile_code__3DSP9",pre:"Profile_pre__hdZUx"}},91:function(e,t,r){},92:function(e,t,r){}},[[118,1,2]]]);
//# sourceMappingURL=main.ce6fae9a.chunk.js.map