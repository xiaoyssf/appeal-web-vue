import{_ as D,r as b,a as g,o as f,c,b as i,d as l,w as t,u as a,E as R,e as L,f as I,g as P,h as B,i as S,j as T,k as j,l as N,m as O,n as $}from"./index-10f02869.js";const y=""+new URL("cardIcon-36fc285d.svg",import.meta.url).href,A=""+new URL("card-6857db66.svg",import.meta.url).href;const G={class:"content"},q=["src"],z={style:{"margin-left":"20px"}},H=["src"],J={__name:"home",setup(K){const n=b({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),V=g();g("");const u=b({type:"",fileList:[],idFile:"",idFileDif:"",cardFile:"",cardFileDif:"",businessFile:"",storeFile:"",storeRoomFile:""}),k=m=>{const e=m.target;let s=new FileReader;s.readAsDataURL(e.files[0]),s.onloadend=function(d){switch(u.type){case"id":u.idFile=d.target.result;break;case"idDif":u.idFileDif=d.target.result;break}},console.log(e,e.files[0])},_=m=>{u.type=m,V.value.click()},F=()=>{console.log("submit!")};return(m,e)=>{const s=I,d=P,r=B,p=S,v=T,U=j,w=N,E=O,x=$,C=R;return f(),c("div",G,[e[19]||(e[19]=i("header",{class:"header-title"},"商户解冻资金申诉材料",-1)),l(C,{style:{width:"100%","max-width":"900px"},model:a(n),"label-width":"130"},{default:t(()=>[l(p,null,{default:t(()=>[l(r,{span:12},{default:t(()=>[l(d,{label:"商户名"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[0]||(e[0]=o=>a(n).name=o),placeholder:"请输入商户名"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{span:12},{default:t(()=>[l(d,{label:"商户号"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[1]||(e[1]=o=>a(n).name=o),placeholder:"请输入商户号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(p,null,{default:t(()=>[l(r,{span:12},{default:t(()=>[l(d,{label:"联系人姓名"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[2]||(e[2]=o=>a(n).name=o),placeholder:"请输入联系人姓名"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{span:12},{default:t(()=>[l(d,{label:"联系人手机号"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[3]||(e[3]=o=>a(n).name=o),placeholder:"请输入联系人手机号"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(p,null,{default:t(()=>[l(r,{span:12},{default:t(()=>[l(d,{label:"法人/负责人"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[4]||(e[4]=o=>a(n).name=o),placeholder:"请输入法人/负责人"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{span:12},{default:t(()=>[l(d,{label:"身份证号码"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[5]||(e[5]=o=>a(n).name=o),placeholder:"请输入身份证号码"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(p,null,{default:t(()=>[l(r,{span:12},{default:t(()=>[l(d,{label:"结算银行卡号"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[6]||(e[6]=o=>a(n).name=o),placeholder:"请输入结算银行卡号"},null,8,["modelValue"])]),_:1})]),_:1}),l(r,{span:12},{default:t(()=>[l(d,{label:"开户姓名"},{default:t(()=>[l(s,{modelValue:a(n).name,"onUpdate:modelValue":e[7]||(e[7]=o=>a(n).name=o),placeholder:"请输入开户姓名"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(p,null,{default:t(()=>[l(r,{span:12},{default:t(()=>[l(d,{label:"支付类型"},{default:t(()=>[l(U,{modelValue:a(n).region,"onUpdate:modelValue":e[8]||(e[8]=o=>a(n).region=o),placeholder:"请选择支付类型"},{default:t(()=>[l(v,{label:"微信",value:"微信"}),l(v,{label:"支付宝",value:"支付宝"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(r,{span:12},{default:t(()=>[l(d,{label:"支付时间"},{default:t(()=>[l(w,{modelValue:a(n).date1,"onUpdate:modelValue":e[9]||(e[9]=o=>a(n).date1=o),type:"date",placeholder:"请选择支付时间"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),l(d,{label:"营业执照"},{default:t(()=>[i("input",{ref_key:"fileUpload",ref:V,style:{display:"none"},type:"file",id:"fileUpload",accept:".png,.jpg,.jpeg,.bmp,.gif",onChange:e[10]||(e[10]=o=>k(o))},null,544),i("div",null,[a(u).idFile?(f(),c("img",{key:0,src:a(u).idFile,alt:"",class:"card"},null,8,q)):(f(),c("div",{key:1,class:"cardTemplate card",onClick:e[11]||(e[11]=o=>_("id"))},e[15]||(e[15]=[i("img",{src:y,alt:"",class:"card-icon"},null,-1),i("div",{class:"card-text"},"上传身份证正面",-1)])))]),i("div",z,[a(u).idFileDif?(f(),c("img",{key:0,src:a(u).idFileDif,alt:"",class:"card"},null,8,H)):(f(),c("div",{key:1,class:"cardTemplate card",onClick:e[12]||(e[12]=o=>_("idDif"))},e[16]||(e[16]=[i("img",{src:y,alt:"",class:"card-icon"},null,-1),i("div",{class:"card-text"},"上传身份证反面",-1)])))])]),_:1}),l(d,{label:"营业执照"},{default:t(()=>[l(E,{"file-list":a(u).fileList,"onUpdate:fileList":e[14]||(e[14]=o=>a(u).fileList=o),limit:1,action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15","auto-upload":!1,"list-type":"picture-card","on-preview":m.handlePictureCardPreview,"on-remove":m.handleRemove},{default:t(()=>[i("div",{class:"",onClick:e[13]||(e[13]=o=>_(1))},e[17]||(e[17]=[i("img",{src:A,alt:"",class:"card-business-icon"},null,-1),i("div",{class:"card-text"},"上传身份证正面",-1)]))]),_:1},8,["file-list","on-preview","on-remove"])]),_:1}),l(d,null,{default:t(()=>[l(x,{type:"primary",onClick:F},{default:t(()=>e[18]||(e[18]=[L("提交申诉")])),_:1})]),_:1})]),_:1},8,["model"])])}}},Q=D(J,[["__scopeId","data-v-309d36d1"]]);export{Q as default};
