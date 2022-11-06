import{Z as w,Q as V,o as B,c as N,j as g,v as b,e as n,$ as L,s as M,C as j,a0 as E,a1 as $,w as C,d as z,I as F,B as R,a as H,S as J,A as K,z as Q,E as D,_ as Z,r as h,f as d,t as U,g as T,i as y,p as G,k as W,a2 as X}from"./index.4eaa9afa.js";var A={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return a=>["number","string","boolean"].indexOf(typeof a)!==-1||a==null},required:!1},modelValue:{validator:function(e){return a=>["number","string","boolean"].indexOf(typeof a)!==-1||a==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,a){const t=function(i,r,u){const{value:c,modelValue:s,falseValue:l,trueValue:o,disabled:v}=w(i),p=s&&s.value!==void 0?s:c,f=V(()=>p.value===o.value),k=m=>{r.emit("input",m),r.emit("update:modelValue",m),r.emit("change",m)},q=()=>{k(o.value)},I=()=>{k(l.value)};return[null,void 0,!1,0,"0","off"].indexOf(p.value)!==-1&&[l.value,o.value].indexOf(p.value)===-1&&I(),[!0,1,"1","on"].indexOf(p.value)!==-1&&[l.value,o.value].indexOf(p.value)===-1&&q(),{externalValue:p,checked:f,update:k,check:q,uncheck:I,handleInput:m=>{k(m.target.checked?o.value:l.value)},handleClick:()=>{v.value||(f.value?I():q())}}}(e,a),O=function(i,r,u){const{trueValue:c,falseValue:s,onLabel:l,offLabel:o}=w(i),v=u.checked,p=u.update;return{label:V(()=>{let f=v.value?l.value:o.value;return f||(f="&nbsp;"),f}),toggle:()=>{p(v.value?s.value:c.value)},on:()=>{p(c.value)},off:()=>{p(s.value)}}}(e,0,{checked:t.checked,update:t.update}),P=function(i,r,u){const c=w(i),s=c.disabled,l=u.checked,o=V(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...c.classes.value}));return{classList:V(()=>({container:o.value.container,toggle:[o.value.toggle,s.value?l.value?o.value.toggleOnDisabled:o.value.toggleOffDisabled:l.value?o.value.toggleOn:o.value.toggleOff],handle:[o.value.handle,s.value?l.value?o.value.handleOnDisabled:o.value.handleOffDisabled:l.value?o.value.handleOn:o.value.handleOff],label:o.value.label}))}}(e,0,{checked:t.checked}),_=function(i,r,u){const{disabled:c}=w(i),s=u.check,l=u.uncheck,o=u.checked;return{handleSpace:()=>{c.value||(o.value?l():s())}}}(e,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...P,...O,..._}}};const Y=["tabindex","aria-checked","aria-describedby","aria-labelledby"],x=["id","name","value","checked","disabled"],ee=["innerHTML"],ae=["checked"];A.render=function(e,a,t,O,P,_){return B(),N("div",E({class:e.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch"},t.aria,{onKeypress:a[1]||(a[1]=$(C((...i)=>e.handleSpace&&e.handleSpace(...i),["prevent"]),["space"]))}),[g(n("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:e.checked,disabled:t.disabled},null,8,x),[[b,!1]]),n("div",{class:L(e.classList.toggle),onClick:a[0]||(a[0]=(...i)=>e.handleClick&&e.handleClick(...i))},[n("span",{class:L(e.classList.handle)},null,2),M(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[n("span",{class:L(e.classList.label),innerHTML:e.label},null,10,ee)]),t.required?(B(),N("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,ae)):j("v-if",!0)],2)],16,Y)},A.__file="src/Toggle.vue";const le=z({name:"profile__pageView",components:{AppSwitch:A,Icon:F,BaseTextInput:R,BaseButton:H,Spinner:J},methods:{...K(D,["updateUserInformation","changePassword"]),toggleTheme(){this.preferences.theme=this.preferences.theme=="darkMode"?"":"darkMode",document.documentElement.setAttribute("data-theme",this.preferences.theme),localStorage.setItem("theme",this.preferences.theme)},updateProfile(){this.updateUserInformation(this.profile),console.log("updated")},async changePasswordRequest(){this.changePassword(this.security)}},computed:{...Q(D,["userInformation","isLoading"]),fullname(){var e;return String((e=this.userInformation)==null?void 0:e.fullname)||"Jane Doe"},username(){var e;return String((e=this.userInformation)==null?void 0:e.username)||"username"},email(){var e;return String((e=this.userInformation)==null?void 0:e.email)||"jane@mailer.com"},disabledState(){return this.isLoading===!0},profile:()=>({fullname:"",username:"",email:"",theme:""})},data:()=>({networkError:!1,preferences:{darkMode:!0,theme:"",showNetworkError:!1,allowPushNotifications:!1,enable2FA:!0},security:{newPassword:"",confirmPassword:""}})});const S=e=>(G("data-v-9fd10a5f"),e=e(),W(),e),ne={id:"profile__page"},oe={id:"avatar"},te=S(()=>n("img",{src:X,alt:"avatar"},null,-1)),se={id:"edit__button"},de={id:"user"},ie={id:"user__information"},re=S(()=>n("h3",null,"Account Information",-1)),ue={id:"preferences"},ce=S(()=>n("h3",null,"Preferences",-1)),pe=y(" dark mode "),fe=y(" network error message "),me=y(" allow push notifications "),he=y(" enable 2FA"),ge=S(()=>n("h3",null,"Security",-1));function be(e,a,t,O,P,_){const i=h("Icon"),r=h("BaseTextInput"),u=h("Spinner"),c=h("BaseButton"),s=h("AppSwitch");return B(),N("div",ne,[n("div",oe,[te,n("button",se,[d(i,{icon:"mdi:camera"})]),n("div",de,[n("h3",null,U(e.fullname),1),n("small",null,U(e.email),1)])]),n("section",ie,[re,n("form",{action:"",onSubmit:a[3]||(a[3]=C((...l)=>e.updateProfile&&e.updateProfile(...l),["prevent"]))},[d(r,{placeholder:"Jane Doe",label:"fullname",modelValue:e.fullname,"onUpdate:modelValue":a[0]||(a[0]=l=>e.fullname=l)},null,8,["modelValue"]),d(r,{placeholder:"jane@mailer.com",label:"email",type:"email",class:"field",modelValue:e.email,"onUpdate:modelValue":a[1]||(a[1]=l=>e.email=l)},null,8,["modelValue"]),d(r,{placeholder:"username",modelValue:e.username,"onUpdate:modelValue":a[2]||(a[2]=l=>e.username=l),label:"username",type:"text",class:"field"},null,8,["modelValue"]),d(c,{text:"",disabled:e.disabledState,class:"action__trigger"},{default:T(()=>[g(n("span",null,"Save Changes",512),[[b,!e.isLoading]]),g(d(u,{"animation-duration":1e3,size:30,color:"#101010"},null,512),[[b,e.isLoading]])]),_:1},8,["disabled"])],32)]),n("section",ue,[ce,n("div",null,[d(s,{modelValue:e.preferences.darkMode,"onUpdate:modelValue":a[4]||(a[4]=l=>e.preferences.darkMode=l),onClick:e.toggleTheme},null,8,["modelValue","onClick"]),pe]),n("div",null,[d(s,{modelValue:e.preferences.showNetworkError,"onUpdate:modelValue":a[5]||(a[5]=l=>e.preferences.showNetworkError=l)},null,8,["modelValue"]),fe]),n("div",null,[d(s,{modelValue:e.preferences.allowPushNotifications,"onUpdate:modelValue":a[6]||(a[6]=l=>e.preferences.allowPushNotifications=l)},null,8,["modelValue"]),me]),n("div",null,[d(s,{modelValue:e.preferences.enable2FA,"onUpdate:modelValue":a[7]||(a[7]=l=>e.preferences.enable2FA=l)},null,8,["modelValue"]),he])]),n("section",null,[ge,n("form",{action:"",onSubmit:a[10]||(a[10]=C((...l)=>e.changePasswordRequest&&e.changePasswordRequest(...l),["prevent"]))},[d(r,{placeholder:"new password","show-icon":!1,label:"New Password",type:"password",class:"field",modelValue:e.security.newPassword,"onUpdate:modelValue":a[8]||(a[8]=l=>e.security.newPassword=l)},null,8,["modelValue"]),d(r,{placeholder:"new password","show-icon":!1,label:"Confirm Password",type:"password",class:"field",modelValue:e.security.confirmPassword,"onUpdate:modelValue":a[9]||(a[9]=l=>e.security.confirmPassword=l)},null,8,["modelValue"]),d(c,{text:"",disabled:e.disabledState},{default:T(()=>[g(n("span",null,"Update Password",512),[[b,!e.isLoading]]),g(d(u,{"animation-duration":1e3,size:30,color:"#101010"},null,512),[[b,e.isLoading]])]),_:1},8,["disabled"])],32)])])}const ke=Z(le,[["render",be],["__scopeId","data-v-9fd10a5f"]]);export{ke as default};
