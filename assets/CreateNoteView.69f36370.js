import{d as m,a as E,B as f,u as B,_,r as a,o as n,c as l,f as d,l as y,e as s,j as h,C as w,w as v,p as V,k as b}from"./index.6b721bd6.js";import{B as x}from"./BaseTextarea.d1ea90c7.js";import{E as C}from"./style.6cb993d2.js";import{u as M}from"./notes.d382e69d.js";const N=m({name:"CreateNewNoteEntry",data:()=>({note:{title:"",content:""},useMdEditor:!1,mdToolBarExclude:["github"]}),components:{BaseButton:E,BaseTextInput:f,BaseTextarea:x,MdEditor:C},methods:{...B(M,["createNewEntry"]),async addEntry(){await this.createNewEntry({...this.note})&&(Object.assign(this.note,{title:"",content:""}),this.$router.replace({name:"all-notes"}))}}});const r=e=>(V("data-v-d39ac61a"),e=e(),b(),e),T={key:1,id:"md__editor"},k=r(()=>s("label",{for:"Content"},"Content",-1)),I={id:"editor__type"},S=["toolbarsExclude"],g=r(()=>s("label",{for:"editor-style"},"Use Markdown Editor",-1));function U(e,t,$,R,j,q){const i=a("BaseTextInput"),u=a("BaseTextarea"),p=a("MdEditor"),c=a("BaseButton");return n(),l("form",{onSubmit:t[4]||(t[4]=v((...o)=>e.addEntry&&e.addEntry(...o),["prevent"]))},[d(i,{label:"title",type:"text",placeholder:"Ex: how to create repo",modelValue:e.note.title,"onUpdate:modelValue":t[0]||(t[0]=o=>e.note.title=o),class:"field"},null,8,["modelValue"]),e.useMdEditor?(n(),l("div",T,[k,d(p,{modelValue:e.note.content,"onUpdate:modelValue":t[2]||(t[2]=o=>e.note.content=o),preview:!1,language:"en-US",placeholder:"provide note details here",style:{"margin-bottom":"20px"}},null,8,["modelValue"])])):(n(),y(u,{key:0,placeholder:"provide note details here",label:"content",modelValue:e.note.content,"onUpdate:modelValue":t[1]||(t[1]=o=>e.note.content=o)},null,8,["modelValue"])),s("div",I,[h(s("input",{type:"checkbox",name:"editor-style",id:"","onUpdate:modelValue":t[3]||(t[3]=o=>e.useMdEditor=o),toolbarsExclude:e.mdToolBarExclude,showCodeRowNumber:!0},null,8,S),[[w,e.useMdEditor]]),g]),d(c,{text:"Save Entry",class:"field"})],32)}const F=_(N,[["render",U],["__scopeId","data-v-d39ac61a"]]);export{F as default};