import{r as V,a as c,o as v,c as g,w as D,u as o,b as s,d as e,e as l,i as I,F as S,E as N,f as O,g as B,v as C,h as P,j as R,k as L,l as j,m as h,n as A,p as q,q as z,s as G,t as M,_ as $}from"./index-786f54df.js";const H=""+new URL("success-1ce9e749.svg",import.meta.url).href;const J=(f,m)=>{const a=f.__vccOpts||f;for(const[i,_]of m)a[i]=_;return a},K={class:"content"},Q={style:{"margin-left":"20px"}},W={style:{"margin-left":"20px"}},X={class:"foot"},Y={__name:"home",setup(f){const m=R(()=>$(()=>import("./upload-85338542.js"),["./upload-85338542.js","./index-786f54df.js","./index-2c37f7ce.css","./upload-8f2f44d6.css"],import.meta.url)),a=V({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""});c(),c(""),V({idFile:"",idFileDif:"",cardFile:"",cardFileDif:"",businessFile:"",storeFile:"",storeRoomFile:""});const i=c(!1),_=c(!1),x=()=>{console.log("submit!"),i.value=!0,setTimeout(()=>{i.value=!1,_.value=!0},1500)};return(ee,t)=>{const p=L,d=j,u=h,r=A,b=q,y=z,E=G,k=M,w=N,F=O,T=B,U=C;return v(),g(S,null,[D((v(),g("div",K,[t[12]||(t[12]=s("header",{class:"header-title"},"商户解冻资金申诉材料",-1)),e(w,{class:"scrow"},{default:l(()=>[e(k,{style:{width:"100%"},model:o(a),"label-width":"160"},{default:l(()=>[e(r,null,{default:l(()=>[e(u,{span:12},{default:l(()=>[e(d,{label:"商户名"},{default:l(()=>[e(p,{modelValue:o(a).storeName,"onUpdate:modelValue":t[0]||(t[0]=n=>o(a).storeName=n),placeholder:"请输入商户名"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:12},{default:l(()=>[e(d,{label:"商户号"},{default:l(()=>[e(p,{modelValue:o(a).storeId,"onUpdate:modelValue":t[1]||(t[1]=n=>o(a).storeId=n),placeholder:"请输入商户号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{span:12},{default:l(()=>[e(d,{label:"联系人姓名"},{default:l(()=>[e(p,{modelValue:o(a).name,"onUpdate:modelValue":t[2]||(t[2]=n=>o(a).name=n),placeholder:"请输入联系人姓名"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:12},{default:l(()=>[e(d,{label:"联系人手机号",maxlength:"20"},{default:l(()=>[e(p,{modelValue:o(a).mobi,"onUpdate:modelValue":t[3]||(t[3]=n=>o(a).mobi=n),placeholder:"请输入联系人手机号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{span:12},{default:l(()=>[e(d,{label:"法人/负责人"},{default:l(()=>[e(p,{modelValue:o(a).workName,"onUpdate:modelValue":t[4]||(t[4]=n=>o(a).workName=n),placeholder:"请输入法人/负责人"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:12},{default:l(()=>[e(d,{label:"身份证号码"},{default:l(()=>[e(p,{modelValue:o(a).id,"onUpdate:modelValue":t[5]||(t[5]=n=>o(a).id=n),placeholder:"请输入身份证号码"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{span:12},{default:l(()=>[e(d,{label:"结算银行卡号"},{default:l(()=>[e(p,{modelValue:o(a).bankId,"onUpdate:modelValue":t[6]||(t[6]=n=>o(a).bankId=n),placeholder:"请输入结算银行卡号"},null,8,["modelValue"])]),_:1})]),_:1}),e(u,{span:12},{default:l(()=>[e(d,{label:"开户姓名"},{default:l(()=>[e(p,{modelValue:o(a).bankName,"onUpdate:modelValue":t[7]||(t[7]=n=>o(a).bankName=n),placeholder:"请输入开户姓名"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(u,{span:12},{default:l(()=>[e(d,{label:"支付类型"},{default:l(()=>[e(y,{modelValue:o(a).region,"onUpdate:modelValue":t[8]||(t[8]=n=>o(a).region=n),placeholder:"请选择支付类型"},{default:l(()=>[e(b,{label:"微信",value:"微信"}),e(b,{label:"支付宝",value:"支付宝"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(u,{span:12},{default:l(()=>[e(d,{label:"支付时间"},{default:l(()=>[e(E,{modelValue:o(a).date,"onUpdate:modelValue":t[9]||(t[9]=n=>o(a).date=n),type:"date",placeholder:"请选择支付时间"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(d,{label:"身份证照片"},{default:l(()=>[s("div",null,[e(o(m),{uploadText:"上传身份证正面",spectDemo:""})]),s("div",Q,[e(o(m),{uploadText:"上传身份证反面",spectDemo:""})])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(d,{label:"银行卡照片"},{default:l(()=>[s("div",null,[e(o(m),{uploadText:"上传银行卡正面",spectDemo:""})]),s("div",W,[e(o(m),{uploadText:"上传银行卡反面",spectDemo:""})])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(d,{label:"营业执照"},{default:l(()=>[s("div",null,[e(o(m),{uploadText:"上传营业执照",spectStore:!0})])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(d,{label:"门头照"},{default:l(()=>[s("div",null,[e(o(m),{uploadText:"上传门头照",spectStore:!0})])]),_:1})]),_:1}),e(r,null,{default:l(()=>[e(d,{label:"室内照"},{default:l(()=>[s("div",null,[e(o(m),{uploadText:"上传室内照",spectStore:!0})])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),s("div",X,[e(F,{style:{padding:"20px 40px"},type:"primary",onClick:x},{default:l(()=>t[11]||(t[11]=[P("提交申诉")])),_:1})])])),[[U,o(i)]]),e(T,{"align-center":"",modelValue:o(_),"onUpdate:modelValue":t[10]||(t[10]=n=>I(_)?_.value=n:null),width:"500px",center:""},{default:l(()=>t[13]||(t[13]=[s("div",{class:"successBox"},[s("img",{class:"success",src:H,alt:""}),s("div",{class:"successText"},"提交成功"),s("div",{class:"successContent"},"您的申诉材料已提交成功，请您根据冻结金额时长进行等待。具体情况会下发至贵公司邮箱。")],-1)])),_:1},8,["modelValue"])],64)}}},Z=J(Y,[["__scopeId","data-v-1437cf8b"]]),oe=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{J as _,oe as h};
