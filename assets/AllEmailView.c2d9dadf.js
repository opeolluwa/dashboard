import{I as y,_ as u,r as n,o,c as m,e as i,t as f,y as d,z as I,f as r,p as v,k as $,d as A,g as w,A as x,C as b,x as B,b as N,D as F,E as q,F as g,G as C,H as T}from"./index.430f0fbb.js";import{A as R}from"./AppNetworkError.550ad12a.js";import{A as V}from"./AppEmptyState.9b4226d7.js";const z={props:{title:{type:String,required:!0,default:"Example title"},content:{type:String,required:!0,default:"This is an example truncated email content..."},isStarred:{type:Boolean,default:!1}},components:{Icon:y},mounted(){}};const D=e=>(v("data-v-5827683a"),e=e(),$(),e),L={class:"email__item"},O=D(()=>i("input",{type:"checkbox",name:"select",class:""},null,-1)),H={class:"email__content"},j={class:"title"},G={class:"content"},J={class:"email__controls"};function K(e,t,a,l,p,E){const s=n("Icon");return o(),m("div",L,[O,i("div",H,[i("div",j,f(a.title),1),i("span",G,f(a.content),1)]),i("div",J,[a.isStarred?(o(),d(s,{key:0,icon:"mdi:star",class:I([a.isStarred?"starred__email":"","star"])},null,8,["class"])):(o(),d(s,{key:1,icon:"mdi:star-outline",class:"email"})),r(s,{icon:"mdi:trash-can-outline",class:"delete"}),r(s,{icon:"mdi:dots-vertical",class:"more-options"})])])}const U=u(z,[["render",K],["__scopeId","data-v-5827683a"]]),M=A({name:"FavActionButton",components:{Icon:y},props:{route:{type:String,required:!0,default:"404"},icon:{type:String,required:!0,default:"mdi:plus"}}});function P(e,t,a,l,p,E){const s=n("Icon"),_=n("RouterLink");return o(),d(_,{to:{name:e.route},class:"fab"},{default:w(()=>[r(s,{icon:e.icon},null,8,["icon"])]),_:1},8,["to"])}const Q=u(M,[["render",P]]),h=x(),S=b("emailStore",{state:()=>({allEmails:[],trashedEmails:[],draftedEmails:[],starredEmails:[]}),getters:{getInbox:e=>e.allEmails,getEmailById:e=>t=>{var a;return(a=e.allEmails)==null?void 0:a.filter(l=>l.id===String(t))[0]},getStarredEmail:e=>{var t;return(t=e.allEmails)==null?void 0:t.filter(a=>a.isStarred==!0)},getDeletedEmail:e=>{var t;return(t=e.allEmails)==null?void 0:t.filter(a=>a.isStarred==!0)}},actions:{async fetchAllEmails(){const e=h.getAuthToken?h.getAuthToken:await B("authorizationToken");try{const{data:t}=await N.get("/emails?page=1&noOfRows=10",{headers:{Authorization:`Bearer ${e}`}});this.allEmails=t.data.emails,console.log(JSON.stringify(t))}catch(t){console.log(t.message)}}}}),W=A({name:"EmailView",components:{EmailItem:U,Fab:Q,AppNetworkError:R,AppEmptyState:V},created(){this.getEmailsRequest()},methods:{...F(S,{getEmailsRequest:"fetchAllEmails"})},computed:{...q(S,["allEmails"])}});function X(e,t,a,l,p,E){const s=n("EmailItem"),_=n("AppNetworkError"),k=n("Fab");return o(),m(g,null,[(o(!0),m(g,null,C(e.allEmails,c=>(o(),m("div",{key:c.id.toString()},[r(s,{title:c.emailSubject.toString(),content:c.emailBody.toString(),"is-starred":c.isStarred},null,8,["title","content","is-starred"])]))),128)),e.allEmails.length===0?(o(),d(_,{key:0})):T("",!0),r(k,{route:"new-email",icon:"mdi:email-plus-outline"})],64)}const te=u(W,[["render",X]]);export{te as default};