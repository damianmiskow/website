(function(){"use strict";var e={9358:function(e,t,a){var r=a(5130),o=a(6768);const n={id:"app"};function s(e,t,a,r,s,u){const l=(0,o.g2)("NavBarComponent"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(l),(0,o.bF)(i)])}const u={class:"navbar"};function l(e,t,a,r,n,s){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",u,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Home")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/projects"},{default:(0,o.k6)((()=>t[1]||(t[1]=[(0,o.eW)("Projects")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/about"},{default:(0,o.k6)((()=>t[2]||(t[2]=[(0,o.eW)("About")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(l,{to:"/contact"},{default:(0,o.k6)((()=>t[3]||(t[3]=[(0,o.eW)("Contact")]))),_:1})])])])}var i={name:"NavBarComponent"},c=a(1241);const d=(0,c.A)(i,[["render",l]]);var m=d,p={name:"App",components:{NavBarComponent:m}};const h=(0,c.A)(p,[["render",s]]);var v=h,g=(a(8992),a(7550),a(1387));const b={class:"home"};function f(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",b,t[0]||(t[0]=[(0,o.Lk)("h1",null,"Home Page - Damian Miskow",-1),(0,o.Lk)("p",null,"Welcome to the Home page.",-1)]))}var k={name:"HomePage"};const L=(0,c.A)(k,[["render",f],["__scopeId","data-v-2493a3fd"]]);var y=L;const w={class:"about"};function C(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",w,t[0]||(t[0]=[(0,o.Lk)("h1",null,"About Page",-1),(0,o.Lk)("p",null,"Welcome to the About page.",-1)]))}var _={name:"AboutPage"};const j=(0,c.A)(_,[["render",C],["__scopeId","data-v-1be00696"]]);var A=j;const P={class:"contact"};function S(e,t,a,r,n,s){return(0,o.uX)(),(0,o.CE)("div",P,t[0]||(t[0]=[(0,o.Lk)("h1",null,"Contact Page",-1),(0,o.Lk)("p",null,"Welcome to the Contact page.",-1)]))}var E={name:"ContactPage"};const I=(0,c.A)(E,[["render",S],["__scopeId","data-v-7c5d9d9e"]]);var X=I,M=a(4232);const V={class:"projects"},N={class:"buttons-container"},U={class:"project-content"},x={class:"project-name"},O={class:"project-description"};function T(e,t,a,n,s,u){const l=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",V,[t[1]||(t[1]=(0,o.Lk)("h1",null,"Projects Page",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.searchQuery=e),placeholder:"Search projects...",class:"search-bar"},null,512),[[r.Jo,s.searchQuery]]),(0,o.Lk)("div",N,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(u.filteredProjects,(e=>((0,o.uX)(),(0,o.Wv)(l,{key:e.name,to:e.route,class:"project-button"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",U,[(0,o.Lk)("div",x,(0,M.v_)(e.name),1),(0,o.Lk)("div",O,(0,M.v_)(e.description),1)])])),_:2},1032,["to"])))),128))])])}a(4520);var Q={name:"ProjectsPage",data(){return{searchQuery:"",projects:[{name:"Credit Card Validation",route:"/projects/cardvalidationproject",description:"Validate credit card numbers"},{name:"Login Page",route:"/projects/loginpageproject",description:"Log-in to see the page"},{name:"Calculator AWS",route:"/projects/awslambda",description:"Simple calculator meant to test AWS API and Lambda functionsI"},{name:"Project 4",route:"#",description:" "}]}},computed:{filteredProjects(){return this.projects.filter((e=>e.name.toLowerCase().includes(this.searchQuery.toLowerCase())||e.description.toLowerCase().includes(this.searchQuery.toLowerCase())))}}};const W=(0,c.A)(Q,[["render",T],["__scopeId","data-v-3ac562b0"]]);var q=W;const J={class:"app"};function F(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",J,[t[4]||(t[4]=(0,o.Lk)("h1",null,"Card Validation",-1)),(0,o.Lk)("form",{onSubmit:t[1]||(t[1]=(0,r.D$)(((...e)=>n.validateCard&&n.validateCard(...e)),["prevent"]))},[t[2]||(t[2]=(0,o.Lk)("label",{for:"card_number"},"Please Enter Card Number:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.cardNumber=e),id:"card_number",required:""},null,512),[[r.Jo,n.cardNumber]]),t[3]||(t[3]=(0,o.Lk)("button",{type:"submit"},"Validate",-1))],32),null!==n.result?((0,o.uX)(),(0,o.CE)("p",{key:0,style:(0,M.Tr)({color:n.resultColor}),class:"response-box"},(0,M.v_)(n.result),5)):(0,o.Q3)("",!0)])}var D=a(144),R=a(4373),H={name:"CardValProject",setup(){const e=(0,D.KR)(""),t=(0,D.KR)(null),a=(0,D.KR)("black"),r=async()=>{if(!e.value)return t.value="Please enter a card number.",void(a.value="red");const r=parseInt(e.value,10);if(isNaN(r))return t.value="Invalid card number format.",void(a.value="red");try{console.log("Sending POST request with card number:",r);const e="https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/cardvali",o=await R.A.post(e,{card_num:r});console.log("Response:",o.data),o.data.is_valid?(t.value="The card number is valid!",a.value="green"):(t.value="The card number is invalid!",a.value="red")}catch(o){console.error("There was an error validating the card:",o),t.value="An error occurred. Please try again.",a.value="red"}};return{cardNumber:e,result:t,resultColor:a,validateCard:r}}};const K=(0,c.A)(H,[["render",F],["__scopeId","data-v-81de9e44"]]);var $=K;const z={class:"login-page"},B={class:"welcome-container"},Y={class:"input-group"},G={class:"input-group"},Z={key:0,class:"error"},ee={key:0};function te(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",z,[(0,o.Lk)("div",B,[t[6]||(t[6]=(0,o.Lk)("h1",null,"Login",-1)),(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>u.login&&u.login(...e)),["prevent"]))},[(0,o.Lk)("div",Y,[t[3]||(t[3]=(0,o.Lk)("label",{for:"username"},"Username:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),id:"username",required:""},null,512),[[r.Jo,s.username]])]),(0,o.Lk)("div",G,[t[4]||(t[4]=(0,o.Lk)("label",{for:"password"},"Password:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),id:"password",required:""},null,512),[[r.Jo,s.password]])]),t[5]||(t[5]=(0,o.Lk)("button",{type:"submit"},"Login",-1)),s.errorMessage?((0,o.uX)(),(0,o.CE)("p",Z,(0,M.v_)(s.errorMessage),1)):(0,o.Q3)("",!0)],32),s.isAuthenticated?((0,o.uX)(),(0,o.CE)("p",ee,"User: "+(0,M.v_)(s.username),1)):(0,o.Q3)("",!0)])])}a(4114);var ae={name:"LoginPage",data(){return{username:"",password:"",errorMessage:"",isAuthenticated:!1}},methods:{async login(){try{const e=await R.A.post("https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/calc/login",{username:this.username,password:this.password});e.data.authenticated&&(this.errorMessage="",localStorage.setItem("authenticated","true"),localStorage.setItem("username",this.username),this.isAuthenticated=!0,setTimeout((()=>{localStorage.removeItem("authenticated"),localStorage.removeItem("username"),this.isAuthenticated=!1}),2e4),this.$router.push({name:"Login Page Project"}))}catch(e){e.response?this.errorMessage=e.response.data.message||"Login failed":e.request?this.errorMessage="No response from server":this.errorMessage="Error: "+e.message}}},mounted(){if(localStorage.getItem("authenticated")){const e=localStorage.getItem("authenticated");if(e){const e=Date.now(),t=localStorage.getItem("loginTime");!t||e-t>2e4?localStorage.removeItem("authenticated"):(this.isAuthenticated=!0,this.username=localStorage.getItem("username")||"")}}}};const re=(0,c.A)(ae,[["render",te],["__scopeId","data-v-210061fe"]]);var oe=re;const ne={class:"login-page"},se={class:"welcome-container"},ue={class:"input-group"},le={class:"input-group"},ie={key:0,class:"error"},ce={key:0};function de(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",ne,[(0,o.Lk)("div",se,[t[6]||(t[6]=(0,o.Lk)("h1",null,"Login",-1)),(0,o.Lk)("form",{onSubmit:t[2]||(t[2]=(0,r.D$)(((...e)=>u.login&&u.login(...e)),["prevent"]))},[(0,o.Lk)("div",ue,[t[3]||(t[3]=(0,o.Lk)("label",{for:"username"},"Username:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>s.username=e),id:"username",required:""},null,512),[[r.Jo,s.username]])]),(0,o.Lk)("div",le,[t[4]||(t[4]=(0,o.Lk)("label",{for:"password"},"Password:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e),id:"password",required:""},null,512),[[r.Jo,s.password]])]),t[5]||(t[5]=(0,o.Lk)("button",{type:"submit"},"Login",-1)),s.errorMessage?((0,o.uX)(),(0,o.CE)("p",ie,(0,M.v_)(s.errorMessage),1)):(0,o.Q3)("",!0)],32),s.isAuthenticated?((0,o.uX)(),(0,o.CE)("p",ce,"User: "+(0,M.v_)(s.username),1)):(0,o.Q3)("",!0)])])}var me={name:"LoginPage",data(){return{username:"",password:"",errorMessage:"",isAuthenticated:!1}},methods:{async login(){try{const e=await R.A.post("http://54.226.145.66:5000/login",{username:this.username,password:this.password});e.data.authenticated&&(this.errorMessage="",localStorage.setItem("authenticated","true"),localStorage.setItem("username",this.username),this.isAuthenticated=!0,setTimeout((()=>{localStorage.removeItem("authenticated"),localStorage.removeItem("username"),this.isAuthenticated=!1}),2e4),this.$router.push({name:"Login Page Project"}))}catch(e){e.response?this.errorMessage=e.response.data.message||"Login failed":e.request?this.errorMessage="No response from server":this.errorMessage="Error: "+e.message}}},mounted(){if(localStorage.getItem("authenticated")){const e=localStorage.getItem("authenticated");if(e){const e=Date.now(),t=localStorage.getItem("loginTime");!t||e-t>2e4?localStorage.removeItem("authenticated"):(this.isAuthenticated=!0,this.username=localStorage.getItem("username")||"")}}}};const pe=(0,c.A)(me,[["render",de],["__scopeId","data-v-49eec3fe"]]);var he=pe;const ve={key:0},ge={key:1},be={style:{color:"red"}};function fe(e,t,a,n,s,u){return(0,o.uX)(),(0,o.CE)("div",null,[t[4]||(t[4]=(0,o.Lk)("h1",null,"API Calculator",-1)),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.num1=e),type:"number",placeholder:"Enter first number"},null,512),[[r.Jo,s.num1]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>s.op=e),placeholder:"Enter operator"},null,512),[[r.Jo,s.op]]),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.num2=e),type:"number",placeholder:"Enter second number"},null,512),[[r.Jo,s.num2]]),(0,o.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>u.sendNumbers&&u.sendNumbers(...e))},"Send Numbers")]),null!==s.result?((0,o.uX)(),(0,o.CE)("div",ve,[(0,o.Lk)("h2",null,"Result: "+(0,M.v_)(s.result),1)])):(0,o.Q3)("",!0),s.error?((0,o.uX)(),(0,o.CE)("div",ge,[(0,o.Lk)("h2",be,"Error: "+(0,M.v_)(s.error),1)])):(0,o.Q3)("",!0)])}var ke={data(){return{op:null,num1:null,num2:null,result:null,error:null}},methods:{async sendNumbers(){try{this.error=null;const e={op:this.op,num1:this.num1,num2:this.num2},t="https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/calc",a={NODE_ENV:"production",VUE_APP_API_URL:"https://amohkkjuo8.execute-api.us-east-1.amazonaws.com/dev/calc",BASE_URL:"/"}.VUE_APP_API_KEY,r=await R.A.post(t,e,{headers:{"Content-Type":"application/json","x-api-key":a}});this.result=r.data.result}catch(e){this.error=e.response?e.response.data.message:e.message,this.result=null}}}};const Le=(0,c.A)(ke,[["render",fe],["__scopeId","data-v-3e37ca99"]]);var ye=Le;const we=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:A},{path:"/contact",name:"Contact",component:X},{path:"/projects",name:"Projects",component:q},{path:"/projects/cardvalidationproject",name:"Card Validation Project",component:$},{path:"/projects/loginpageproject",name:"Login Page Project",component:oe,meta:{requiresAuth:!0}},{path:"/projects/awslambda",name:"AWS Lambda",component:ye},{path:"/login",name:"Login",component:he}],Ce=(0,g.aE)({history:(0,g.LA)("/"),routes:we});Ce.beforeEach(((e,t,a)=>{const r="true"===localStorage.getItem("authenticated");e.matched.some((e=>e.meta.requiresAuth))&&!r?a({name:"Login"}):a()}));var _e=Ce;(0,r.Ef)(v).use(_e).mount("#app")}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,o,n){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],n=e[c][2];for(var u=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(u=!1,n<s&&(s=n));if(u){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[r,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,s=r[0],u=r[1],l=r[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);if(l)var c=l(a)}for(t&&t(r);i<s.length;i++)n=s[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(c)},r=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[504],(function(){return a(9358)}));r=a.O(r)})();
//# sourceMappingURL=app.b0bb57c1.js.map