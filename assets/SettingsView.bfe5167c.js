import{l as m,m as b,o as S,a as D,j as U,v as C,b as t,n as Q,k as _,q as T,s as x,u as N,h as R,d as q,I as F,f as K,x as L,y as M,_ as G,r as H,e as c,t as O,z as E,p as z,i as P}from"./index.654f0b58.js";var V={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return l=>["number","string","boolean"].indexOf(typeof l)!==-1||l==null},required:!1},modelValue:{validator:function(e){return l=>["number","string","boolean"].indexOf(typeof l)!==-1||l==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(e,l){const n=function(d,u,s){const{value:o,modelValue:A,falseValue:i,trueValue:a,disabled:p}=m(d),r=A&&A.value!==void 0?A:o,g=b(()=>r.value===a.value),f=h=>{u.emit("input",h),u.emit("update:modelValue",h),u.emit("change",h)},I=()=>{f(a.value)},y=()=>{f(i.value)};return[null,void 0,!1,0,"0","off"].indexOf(r.value)!==-1&&[i.value,a.value].indexOf(r.value)===-1&&y(),[!0,1,"1","on"].indexOf(r.value)!==-1&&[i.value,a.value].indexOf(r.value)===-1&&I(),{externalValue:r,checked:g,update:f,check:I,uncheck:y,handleInput:h=>{f(h.target.checked?a.value:i.value)},handleClick:()=>{p.value||(g.value?y():I())}}}(e,l),v=function(d,u,s){const{trueValue:o,falseValue:A,onLabel:i,offLabel:a}=m(d),p=s.checked,r=s.update;return{label:b(()=>{let g=p.value?i.value:a.value;return g||(g="&nbsp;"),g}),toggle:()=>{r(p.value?A.value:o.value)},on:()=>{r(o.value)},off:()=>{r(A.value)}}}(e,0,{checked:n.checked,update:n.update}),w=function(d,u,s){const o=m(d),A=o.disabled,i=s.checked,a=b(()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...o.classes.value}));return{classList:b(()=>({container:a.value.container,toggle:[a.value.toggle,A.value?i.value?a.value.toggleOnDisabled:a.value.toggleOffDisabled:i.value?a.value.toggleOn:a.value.toggleOff],handle:[a.value.handle,A.value?i.value?a.value.handleOnDisabled:a.value.handleOffDisabled:i.value?a.value.handleOn:a.value.handleOff],label:a.value.label}))}}(e,0,{checked:n.checked}),k=function(d,u,s){const{disabled:o}=m(d),A=s.check,i=s.uncheck,a=s.checked;return{handleSpace:()=>{o.value||(a.value?i():A())}}}(e,0,{check:n.check,uncheck:n.uncheck,checked:n.checked});return{...n,...w,...v,...k}}};const j=["tabindex","aria-checked","aria-describedby","aria-labelledby"],J=["id","name","value","checked","disabled"],Y=["innerHTML"],W=["checked"];V.render=function(e,l,n,v,w,k){return S(),D("div",x({class:e.classList.container,tabindex:n.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":n.describedby,"aria-labelledby":n.labelledby,role:"switch"},n.aria,{onKeypress:l[1]||(l[1]=N(R((...d)=>e.handleSpace&&e.handleSpace(...d),["prevent"]),["space"]))}),[U(t("input",{type:"checkbox",id:n.id,name:n.name,value:n.trueValue,checked:e.checked,disabled:n.disabled},null,8,J),[[C,!1]]),t("div",{class:Q(e.classList.toggle),onClick:l[0]||(l[0]=(...d)=>e.handleClick&&e.handleClick(...d))},[t("span",{class:Q(e.classList.handle)},null,2),_(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[t("span",{class:Q(e.classList.label),innerHTML:e.label},null,10,Y)]),n.required?(S(),D("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,W)):T("v-if",!0)],2)],16,j)},V.__file="src/Toggle.vue";const Z=q({name:"SettingsView",components:{AppSwitch:V,Icon:F,BaseTextInput:K},methods:{toggleTheme(){this.settings.theme=this.settings.theme=="darkMode"?"":"darkMode",document.documentElement.setAttribute("data-theme",this.settings.theme),localStorage.setItem("theme",this.settings.theme)}},computed:{...L(M,["userInformation"]),fullname(){var e;return((e=this.userInformation)==null?void 0:e.fullname)||""},username(){var e;return((e=this.userInformation)==null?void 0:e.username)||""},email(){var e;return((e=this.userInformation)==null?void 0:e.email)||""}},data:()=>({networkError:!1,settings:{darkMode:!0,theme:"",showNetworkError:!1,allowPushNotifications:!1}})}),X="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCACWAJYDAREAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAEGBwIEBQMI/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/RQAIUEKQFAAAAIUhSApCkKQoIUgKQFAAAABAUEKAQoAO6ZMds84xk64BQCFAIUhlhsQ+oB0zWB4xACkKAAewbZOYAB1DTp8AAAAAbIMsAAANdmHgAAhQDbR7QAABhhr0FIUAAG0DIighyBxMEMIABCgEBlBsspAAcTT554AIUgBQbIMrKAcTXxhwIUgBQQpD3TZZ3QDxTWh55QQAAA5GwzLygAHyNeGJFBCkABsgy0HEFBQQ1uYoCAoIZQbNABCgAHyNPnQIUApuE9EoAAAAMRNcgAHtm2CFAAIciAp8TShwABm5noABCgAAGpjxCAGxzLgAAAAADWhiwP/xAA3EAABAwEGAwYDBwUBAAAAAAABAgMEEQAFBhAgITFBYQcwUXGBoSKRsRITQkNSwdEUFSMyQOH/2gAIAQEAAT8A0UzpkbU7quVc65Vy55Vzrly/4KZnRXTd1zzb0URGYUsA0K+CR5k7Wi9nr6xWTMbR0bSVe5pY9nbFNpzleqBaXgCayCYz7T4HI1QfStR72lQn4LhaksracG9Fileo8bbWGmuiuVbYXwmbxCZk0FMXihHAudegsyy3HaS00hKG0jZKdgBon3dGvNgsyWgtHLxB8QeRtiHDz1xv81xXD8DlPY9frlW1bDKurDV0f3i80NqB+4b+NzyHL1O1kIShKUpASkCgA1T4LV5Q3Yz4q24PUHkR1Fp0N2BLejO0DjSiD4HwI8xv3eAYQYupyQR8chfsNh71ypq7QIQanRpQ/OQUnzTz+RHd4USBh6CB+k/U9x2hAf0EQ8w6QPkcq9zgiSH7hbRzYWpB+dR7HOuntDkgrhRgdwFLPrsPoe5ratsEXsIN4riuGjUqgBPALHD51IyrpW4htClrIShIJJPIDibX7eRvW9H5I/0JojokbD+dNcqZb5Co3BoRwI5WwtihF4NJiS1gTE7BR2Dn/umoAJNsXYoTLC4EJVWeDjoOy+g6Z1y5ZeOdM7mwreF6fYdCfuGDuHV/UDifp1td0V2HGQy7JckrT+NYAPt+5J0X/c8m+I33TE1bA5op8K/Mjf6jpa87lm3SukpkpSTQLG6T5H9jvamdLHKtq22ttZtCnVpbQkqWogAAVJPhbDuDm4gRJnpDkjiG+KUfybDU8w3IbU06gLbUKFKhUG2JMIKghcqCFLjDdbfNHUeI9xauddO5thLDgu9oTJKay1iqUn8sH9zp52OjF+GxAWZsVNIqz8aB+An9j7HPlpwXcovCaZbyax45BHgpfIenG1O6fjtyWXGXUhTTgKVDxBtfV1rui8HoqqlINUK8UngdSUlZAAJJNABxJtcl3Juu7I8YAfaSKr6qO57zHV2CTd6ZiB/ljHc8yk/waHVhKEJt+Rwd0M1dPpw97UypalqWpopamUmOiTHeYWKodSUHyO1nmVRn3WVii21FJ8waHT2dxx9udIPEBKB61J77FscRr/lgDZZCx6gE++jnbs/RS6H181PkfIDuaacfICb4aV+pgH3UM//EABQRAQAAAAAAAAAAAAAAAAAAAID/2gAIAQIBAT8ANP8A/8QAFBEBAAAAAAAAAAAAAAAAAAAAgP/aAAgBAwEBPwA0/wD/2Q==";const B=e=>(z("data-v-ada62d2d"),e=e(),P(),e),$={id:"settings"},ee={id:"avatar"},ae=B(()=>t("img",{src:X,alt:"avatar"},null,-1)),le={id:"edit"},te={id:"user"},ne=B(()=>t("h3",null,"Account Information",-1)),oe=B(()=>t("h3",null,"Preferences",-1)),de=E(" dark mode "),se=E(" network error message "),ie=E(" allow push notifications "),Ae=B(()=>t("section",null,[t("h3",null,"Security")],-1));function ue(e,l,n,v,w,k){const d=H("Icon"),u=H("BaseTextInput"),s=H("AppSwitch");return S(),D("div",$,[t("div",ee,[ae,t("button",le,[c(d,{icon:"mdi:pencil"})]),t("div",te,[t("h3",null,O(e.fullname),1),t("small",null,O(e.email),1)])]),t("section",null,[ne,c(u,{placeholder:"fullname",label:"fullname"}),c(u,{placeholder:"email",label:"email",type:"email",class:"field"}),c(u,{placeholder:"email",label:"email",type:"email",class:"field"})]),t("section",null,[oe,t("div",null,[c(s,{modelValue:e.settings.darkMode,"onUpdate:modelValue":l[0]||(l[0]=o=>e.settings.darkMode=o),onClick:e.toggleTheme},null,8,["modelValue","onClick"]),de]),t("div",null,[c(s,{modelValue:e.settings.showNetworkError,"onUpdate:modelValue":l[1]||(l[1]=o=>e.settings.showNetworkError=o)},null,8,["modelValue"]),se]),t("div",null,[c(s,{modelValue:e.settings.allowPushNotifications,"onUpdate:modelValue":l[2]||(l[2]=o=>e.settings.allowPushNotifications=o)},null,8,["modelValue"]),ie])]),Ae])}const ce=G(Z,[["render",ue],["__scopeId","data-v-ada62d2d"]]);export{ce as default};
