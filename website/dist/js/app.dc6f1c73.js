(function(){"use strict";var e={6705:function(e,t,a){var r=a(5130),o=a(6768);const n={id:"app"};function s(e,t,a,r,s,u){const i=(0,o.g2)("NavBarComponent"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(i),(0,o.bF)(l)])}const u={class:"navbar"};function i(e,t,a,r,n,s){const i=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",u,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/"},{default:(0,o.k6)((()=>[(0,o.eW)("Home")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/projects"},{default:(0,o.k6)((()=>[(0,o.eW)("Projects")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/about"},{default:(0,o.k6)((()=>[(0,o.eW)("About")])),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(i,{to:"/contact"},{default:(0,o.k6)((()=>[(0,o.eW)("Contact")])),_:1})])])])}var l={name:"NavBarComponent"},c=a(1241);const d=(0,c.A)(l,[["render",i]]);var m=d,p={name:"App",components:{NavBarComponent:m}};const g=(0,c.A)(p,[["render",s]]);var v=g,h=a(973);const b=e=>((0,o.Qi)("data-v-2493a3fd"),e=e(),(0,o.jt)(),e),f={class:"home"},k=b((()=>(0,o.Lk)("h1",null,"Home Page - Damian Miskow",-1))),L=b((()=>(0,o.Lk)("p",null,"Welcome to the Home page.",-1))),j=[k,L];function y(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",f,j)}var w={name:"HomePage"};const C=(0,c.A)(w,[["render",y],["__scopeId","data-v-2493a3fd"]]);var A=C;const P=e=>((0,o.Qi)("data-v-1be00696"),e=e(),(0,o.jt)(),e),_={class:"about"},S=P((()=>(0,o.Lk)("h1",null,"About Page",-1))),I=P((()=>(0,o.Lk)("p",null,"Welcome to the About page.",-1))),E=[S,I];function X(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",_,E)}var M={name:"AboutPage"};const O=(0,c.A)(M,[["render",X],["__scopeId","data-v-1be00696"]]);var Q=O;const T=e=>((0,o.Qi)("data-v-7c5d9d9e"),e=e(),(0,o.jt)(),e),V={class:"contact"},x=T((()=>(0,o.Lk)("h1",null,"Contact Page",-1))),N=T((()=>(0,o.Lk)("p",null,"Welcome to the Contact page.",-1))),U=[x,N];function F(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",V,U)}var W={name:"ContactPage"};const q=(0,c.A)(W,[["render",F],["__scopeId","data-v-7c5d9d9e"]]);var J=q,R=a(4232);const D=e=>((0,o.Qi)("data-v-4d76aa76"),e=e(),(0,o.jt)(),e),H={class:"projects"},$=D((()=>(0,o.Lk)("h1",null,"Projects Page",-1))),z={class:"buttons-container"},K={class:"project-content"},B={class:"project-name"},Z={class:"project-description"};function G(e,t,a,r,n,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",H,[$,(0,o.Lk)("div",z,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.projects,(e=>((0,o.uX)(),(0,o.Wv)(u,{key:e.name,to:e.route,class:"project-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",K,[(0,o.Lk)("div",B,(0,R.v_)(e.name),1),(0,o.Lk)("div",Z,(0,R.v_)(e.description),1)])])),_:2},1032,["to"])))),128))])])}var Y={name:"ProjectsPage",data(){return{projects:[{name:"Credit Card Validation",route:"/projects/cardvalidationproject",description:"Validate credit card numbers"},{name:"Login Page",route:"/projects/loginpageproject",description:"Log-in to see the page"},{name:"AWS Connection",route:"/projects/awslambda",description:"Connects to AWS API"},{name:"Project 4",route:"#",description:"Description for Project 4"}]}}};const ee=(0,c.A)(Y,[["render",G],["__scopeId","data-v-4d76aa76"]]);var te=ee;const ae=e=>((0,o.Qi)("data-v-fe4367ca"),e=e(),(0,o.jt)(),e),re={class:"app"},oe=ae((()=>(0,o.Lk)("h1",null,"Card Validation",-1))),ne=ae((()=>(0,o.Lk)("label",{for:"card_number"},"Please Enter Card Number:",-1))),se=ae((()=>(0,o.Lk)("button",{type:"submit"},"Validate",-1)));function ue(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",re,[oe,(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>n.validateCard&&n.validateCard(...e)),["prevent"]))},[ne,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.cardNumber=e),id:"card_number",required:""},null,512),[[r.Jo,n.cardNumber]]),se],32),null!==n.result?((0,o.uX)(),(0,o.CE)("p",{key:0,style:(0,R.Tr)({color:n.resultColor})},(0,R.v_)(n.result),5)):(0,o.Q3)("",!0)])}var ie=a(144),le=a(4373),ce={name:"CardValProject",setup(){const e=(0,ie.KR)(""),t=(0,ie.KR)(null),a=(0,ie.KR)("black"),r=async()=>{try{console.log("Sending POST request with card number:",e.value);const r=await le.A.post("http://54.226.145.66:5000/validate",{card_number:e.value});console.log("Response:",r.data),r.data.is_valid?(t.value="The card number is valid!",a.value="green"):(t.value="The card number is invalid!",a.value="red")}catch(r){console.error("There was an error validating the card:",r),t.value="An error occurred. Please try again.",a.value="red"}};return{cardNumber:e,result:t,resultColor:a,validateCard:r}}};const de=(0,c.A)(ce,[["render",ue],["__scopeId","data-v-fe4367ca"]]);var me=de;const pe=e=>((0,o.Qi)("data-v-196d00bc"),e=e(),(0,o.jt)(),e),ge={class:"login-page"},ve={class:"welcome-container"},he=pe((()=>(0,o.Lk)("h1",null,"Login",-1))),be={class:"input-group"},fe=pe((()=>(0,o.Lk)("label",{for:"username"},"Username:",-1))),ke={class:"input-group"},Le=pe((()=>(0,o.Lk)("label",{for:"password"},"Password:",-1))),je=pe((()=>(0,o.Lk)("button",{type:"submit"},"Login",-1))),ye={key:0,class:"error"},we={key:0};function Ce(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",ge,[(0,o.Lk)("div",ve,[he,(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>u.login&&u.login(...e)),["prevent"]))},[(0,o.Lk)("div",be,[fe,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),id:"username",required:""},null,512),[[r.Jo,s.username]])]),(0,o.Lk)("div",ke,[Le,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),id:"password",required:""},null,512),[[r.Jo,s.password]])]),je,s.errorMessage?((0,o.uX)(),(0,o.CE)("p",ye,(0,R.v_)(s.errorMessage),1)):(0,o.Q3)("",!0)],32),s.isAuthenticated?((0,o.uX)(),(0,o.CE)("p",we,"User: "+(0,R.v_)(s.username),1)):(0,o.Q3)("",!0)])])}a(4114);var Ae={name:"LoginPage",data(){return{username:"",password:"",errorMessage:"",isAuthenticated:!1}},methods:{async login(){try{const e=await le.A.post("https://z0ulxi5dc1.execute-api.us-east-1.amazonaws.com/FirstStage/lambdatest1/login",{username:this.username,password:this.password});e.data.authenticated&&(this.errorMessage="",localStorage.setItem("authenticated","true"),localStorage.setItem("username",this.username),this.isAuthenticated=!0,setTimeout((()=>{localStorage.removeItem("authenticated"),localStorage.removeItem("username"),this.isAuthenticated=!1}),2e4),this.$router.push({name:"Login Page Project"}))}catch(e){e.response?this.errorMessage=e.response.data.message||"Login failed":e.request?this.errorMessage="No response from server":this.errorMessage="Error: "+e.message}}},mounted(){if(localStorage.getItem("authenticated")){const e=localStorage.getItem("authenticated");if(e){const e=Date.now(),t=localStorage.getItem("loginTime");!t||e-t>2e4?localStorage.removeItem("authenticated"):(this.isAuthenticated=!0,this.username=localStorage.getItem("username")||"")}}}};const Pe=(0,c.A)(Ae,[["render",Ce],["__scopeId","data-v-196d00bc"]]);var _e=Pe;const Se=e=>((0,o.Qi)("data-v-e67fe082"),e=e(),(0,o.jt)(),e),Ie={class:"login-page"},Ee={class:"welcome-container"},Xe=Se((()=>(0,o.Lk)("h1",null,"Login",-1))),Me={class:"input-group"},Oe=Se((()=>(0,o.Lk)("label",{for:"username"},"Username:",-1))),Qe={class:"input-group"},Te=Se((()=>(0,o.Lk)("label",{for:"password"},"Password:",-1))),Ve=Se((()=>(0,o.Lk)("button",{type:"submit"},"Login",-1))),xe={key:0,class:"error"},Ne={key:0};function Ue(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",Ie,[(0,o.Lk)("div",Ee,[Xe,(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>u.login&&u.login(...e)),["prevent"]))},[(0,o.Lk)("div",Me,[Oe,(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),id:"username",required:""},null,512),[[r.Jo,s.username]])]),(0,o.Lk)("div",Qe,[Te,(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),id:"password",required:""},null,512),[[r.Jo,s.password]])]),Ve,s.errorMessage?((0,o.uX)(),(0,o.CE)("p",xe,(0,R.v_)(s.errorMessage),1)):(0,o.Q3)("",!0)],32),s.isAuthenticated?((0,o.uX)(),(0,o.CE)("p",Ne,"User: "+(0,R.v_)(s.username),1)):(0,o.Q3)("",!0)])])}var Fe={name:"LoginPage",data(){return{username:"",password:"",errorMessage:"",isAuthenticated:!1}},methods:{async login(){try{const e=await le.A.post("http://54.226.145.66:5000/login",{username:this.username,password:this.password});e.data.authenticated&&(this.errorMessage="",localStorage.setItem("authenticated","true"),localStorage.setItem("username",this.username),this.isAuthenticated=!0,setTimeout((()=>{localStorage.removeItem("authenticated"),localStorage.removeItem("username"),this.isAuthenticated=!1}),2e4),this.$router.push({name:"Login Page Project"}))}catch(e){e.response?this.errorMessage=e.response.data.message||"Login failed":e.request?this.errorMessage="No response from server":this.errorMessage="Error: "+e.message}}},mounted(){if(localStorage.getItem("authenticated")){const e=localStorage.getItem("authenticated");if(e){const e=Date.now(),t=localStorage.getItem("loginTime");!t||e-t>2e4?localStorage.removeItem("authenticated"):(this.isAuthenticated=!0,this.username=localStorage.getItem("username")||"")}}}};const We=(0,c.A)(Fe,[["render",Ue],["__scopeId","data-v-e67fe082"]]);var qe=We;const Je=e=>((0,o.Qi)("data-v-3e37ca99"),e=e(),(0,o.jt)(),e),Re=Je((()=>(0,o.Lk)("h1",null,"API Calculator",-1))),De={key:0},He={key:1},$e={style:{color:"red"}};function ze(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",null,[Re,(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.num1=e),type:"number",placeholder:"Enter first number"},null,512),[[r.Jo,s.num1]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.op=e),placeholder:"Enter operator"},null,512),[[r.Jo,s.op]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.num2=e),type:"number",placeholder:"Enter second number"},null,512),[[r.Jo,s.num2]]),(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>u.sendNumbers&&u.sendNumbers(...e))},"Send Numbers")]),null!==s.result?((0,o.uX)(),(0,o.CE)("div",De,[(0,o.Lk)("h2",null,"Result: "+(0,R.v_)(s.result),1)])):(0,o.Q3)("",!0),s.error?((0,o.uX)(),(0,o.CE)("div",He,[(0,o.Lk)("h2",$e,"Error: "+(0,R.v_)(s.error),1)])):(0,o.Q3)("",!0)])}var Ke={data(){return{op:null,num1:null,num2:null,result:null,error:null}},methods:{async sendNumbers(){try{this.error=null;const e={op:this.op,num1:this.num1,num2:this.num2},t="https://z0ulxi5dc1.execute-api.us-east-1.amazonaws.com/FirstStage/lambdatest1",a="UJlrdJRmRL1RalQOP8RA542u7FpZPT399OggdL1d",r=await le.A.post(t,e,{headers:{"Content-Type":"application/json","x-api-key":a}});this.result=r.data.result}catch(e){this.error=e.response?e.response.data.message:e.message,this.result=null}}}};const Be=(0,c.A)(Ke,[["render",ze],["__scopeId","data-v-3e37ca99"]]);var Ze=Be;const Ge=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:Q},{path:"/contact",name:"Contact",component:J},{path:"/projects",name:"Projects",component:te},{path:"/projects/cardvalidationproject",name:"Card Validation Project",component:me},{path:"/projects/loginpageproject",name:"Login Page Project",component:_e,meta:{requiresAuth:!0}},{path:"/projects/awslambda",name:"AWS Lambda",component:Ze},{path:"/login",name:"Login",component:qe}],Ye=(0,h.aE)({history:(0,h.LA)("/"),routes:Ge});Ye.beforeEach(((e,t,a)=>{const r="true"===localStorage.getItem("authenticated");e.matched.some((e=>e.meta.requiresAuth))&&!r?a({name:"Login"}):a()}));var et=Ye;(0,r.Ef)(v).use(et).mount("#app")}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,n){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],n=e[c][2];for(var u=!0,i=0;i<r.length;i++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(u=!1,n<s&&(s=n));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,s=r[0],u=r[1],i=r[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);if(i)var c=i(a)}for(t&&t(r);l<s.length;l++)n=s[l],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(6705)}));r=a.O(r)})();
//# sourceMappingURL=app.dc6f1c73.js.map