import{E as v,f as d,j as r,b as m,d as h,o as g,a as x,G as _,h as i,H as C,T as y}from"./index-0eb9d4e3.js";import{c as S,B as b,i as k}from"./index.esm-26cb0869.js";import{S as N}from"./chunk-6FWJQRCB-6a5b5395.js";var[w,p]=v("Card"),j=d(function(s,e){const{className:t,...c}=s,a=p();return r(m.div,{ref:e,className:h("chakra-card__body",t),__css:a.body,...c})}),B=d(function(s,e){const{className:t,justify:c,...a}=s,n=p();return r(m.div,{ref:e,className:h("chakra-card__footer",t),__css:{display:"flex",justifyContent:c,...n.footer},...a})}),T=d(function(s,e){const{className:t,...c}=s,a=p();return r(m.div,{ref:e,className:h("chakra-card__header",t),__css:a.header,...c})}),z=d(function(s,e){const{className:t,children:c,direction:a="column",justify:n,align:u,...f}=g(s),l=x("Card",s);return r(m.div,{ref:e,className:h("chakra-card",t),__css:{display:"flex",flexDirection:a,justifyContent:n,alignItems:u,position:"relative",minWidth:0,wordWrap:"break-word",...l.container},...f,children:r(w,{value:l,children:c})})});function E({type:o,openEdit:s,data:e}){const t=_(),c=()=>{o==="active"&&t("detail-task/1"),s()},a={important:"red.400",easy:"green.400",medium:"blue.400",ignore:"yellow.400"},n={base:"full",md:"calc(50% - 2rem)",lg:"calc(33.33% - 2rem)",xl:"calc(25% - 2rem)"},u={base:"full",md:"calc(50% - 2rem)",lg:"calc(33.33% - 2rem)",xl:"calc(33.33% - 2rem)"},f=l=>{l.stopPropagation(),console.log("trash")};return i(z,{onClick:c,w:o==="active"?n:u,margin:{base:"1rem 0",md:"1rem"},borderWidth:"thin",borderColor:e.header.level==="important"?a.important:e.header.level==="easy"?a.easy:e.header.level==="medium"?a.medium:a.ignore,children:[r(T,{children:r(C,{size:"md",children:`${e.header.word} (${e.header.type}) ${e.header.ipa} : ${e.header.translate}`})}),r(j,{children:i(S,{children:[r(C,{size:"xs",textTransform:"uppercase",children:"Exam"}),r(y,{pt:"2",fontSize:"sm",children:e.header.example}),i(y,{pt:"2",fontSize:"sm",children:["dich: ",e.header.translateExample]})]})}),o!=="active"&&i(B,{children:[r(N,{}),i(b,{colorScheme:"red",w:"max-content",display:"flex",alignItems:"center",gap:"0.5rem",p:"1rem",onClick:f,children:[r(y,{children:r(k,{width:"1rem",height:"1rem",mr:"2rem"})}),"delete"]})]})]})}export{E as C};
