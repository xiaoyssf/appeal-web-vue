import{a as o,o as l,c,d as i,e as u,b as n,x as p,y as x,z as w,u as r,i as V,F as D,A as S,g as k}from"./index-9b11d99e.js";import{_ as B}from"./home-defbbc4a.js";const C=""+new URL("cardIcon-36fc285d.svg",import.meta.url).href;const U={class:""},b={key:0,src:C,alt:"",class:"card-icon"},I=["src"],N={class:"card-text"},P=["src"],E={__name:"upload",props:{uploadText:{type:String,default:""},uploadFileList:{typeof:Array,default:[],required:!0},spectDemo:{type:Boolean,default:!1},spectStore:{type:Boolean,default:!1}},emits:["remove"],setup(e,{emit:F}){const m=o(0),_=s=>{m.value=0,t.value=""},f=s=>{t.value=s.url},t=o(""),a=o(!1),g=s=>{t.value=s.url,a.value=!0};return(s,d)=>{const v=S,h=k;return l(),c(D,null,[i(v,{limit:1,accept:".png,.jpg,.jpeg,",class:w({hidden:r(t),spectDemo:e.spectDemo,spectStore:e.spectStore}),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1,"list-type":"picture-card","on-preview":g,"on-remove":_,"on-change":f},{default:u(()=>[n("div",U,[e.spectDemo?(l(),c("img",b)):p("",!0),e.spectStore?(l(),c("img",{key:1,src:e.uploadText!="上传营业执照"?"/src/assets/store.svg":"/src/assets/card.svg",alt:"",class:"card-business-icon"},null,8,I)):p("",!0),n("div",N,x(e.uploadText),1)])]),_:1},8,["class"]),i(h,{modelValue:r(a),"onUpdate:modelValue":d[0]||(d[0]=y=>V(a)?a.value=y:null),width:"600px"},{default:u(()=>[n("img",{class:"preview-img",src:r(t),alt:"Preview Image"},null,8,P)]),_:1},8,["modelValue"])],64)}}},j=B(E,[["__scopeId","data-v-861677c5"]]);export{j as default};
