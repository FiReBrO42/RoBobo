import{c as w}from"./commonFn-K-un-C6t.js";import{_ as $,r as _,l as T,m as q,c as l,e as t,n as x,t as r,F as u,h as p,o,q as y,p as A,f as B}from"./index-CLEPv04n.js";const h=g=>(A("data-v-b033e154"),g=g(),B(),g),I={class:"top"},M=h(()=>t("h2",{class:"title"},"服飾",-1)),D={class:"type-container"},E={class:"type-list-container"},F=["data-condition","onClick"],N=["data-condition","onClick"],V=h(()=>t("div",{class:"type-list-icon-click"},[t("svg",{"aria-hidden":"true",class:"icon"},[t("use",{"xlink:href":"#icon-click"})])],-1)),z={class:"content-container"},O={class:"list-container"},j=["data-card"],G={class:"list-menu-container"},H={class:"list-menu-bottom-container"},J=h(()=>t("h2",null,"連結出處",-1)),K=h(()=>t("svg",{class:"icon icon-polyShadow"},[t("use",{"xlink:href":"#icon-poring-shadow"})],-1)),P=[K],Q={class:"list-img"},R=["src"],W={class:"list-name"},X=["data-card-btn","onClick"],Y=h(()=>t("span",null,null,-1)),Z=h(()=>t("span",null,null,-1)),tt=h(()=>t("span",null,null,-1)),nt=[Y,Z,tt],et={__name:"ClothingList",setup(g){const{getImage:a}=w(),f=e=>{const i=document.querySelector(`[data-card="card-${e}"]`),s=document.querySelector(`[data-card-btn="card-btn-${e}"]`);i.classList.toggle("active"),s.classList.toggle("active")},d=_({name:"全部",status:!0}),c=_([]),v={headTop:"頭上",headMid:"頭中",headBottom:"頭下",headAll:"頭上中下",shawl:"披肩"},S={enchant:"可附魔"},b=()=>{if(d.value.status=!0,d.value.status){for(const e in v)document.querySelector(`[data-condition="condition-${e}"]`).classList.remove("active");c.value=[]}},k=e=>{const i=document.querySelector(`[data-condition="condition-${e}"]`);if(d.value.status=!1,i)if(i.classList.toggle("active"))c.value.push(e);else{const n=c.value.indexOf(e);n>-1&&c.value.splice(n,1)}},L=_([{type:"headTop",name:"1小棉被帽子是多餘的",content:"小棉被帽子是多餘的<3",enchant:"可至綿綿島附魔",enchantStatus:!0,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headMid",name:"1小棉被",content:"小棉被帽子是多餘的<3",enchant:"可至綿綿島附魔",enchantStatus:!0,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headBottom",name:"1帽子是多餘的",content:"小棉被帽子是多餘的<3",enchant:"可至綿綿島附魔",enchantStatus:!0,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"shawl",name:"2多餘",content:"小棉被帽子是多餘的<3",enchant:"",enchantStatus:!1,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headAll",name:"1帽子",content:"小棉被帽子是多餘的<3",enchant:"可至綿綿島附魔",enchantStatus:!0,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headTop",name:"2小棉被帽子是多餘的",content:"小棉被帽子是多餘的<3",enchant:"",enchantStatus:!1,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headTop",name:"2小棉被多餘的",content:"小棉被帽子是多餘的<3",enchant:"",enchantStatus:!1,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headTop",name:"2小棉餘的",content:"小棉被帽子是多餘的<3",enchant:"",enchantStatus:!1,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"shawl",name:"1小棉被帽子是多餘的",content:"小棉被帽子是多餘的<3",enchant:"可至綿綿島附魔",enchantStatus:!0,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"headMid",name:"1小棉被帽子是多餘的",content:"小棉被帽子是多餘的<3",enchant:"可至綿綿島附魔",enchantStatus:!0,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")},{type:"shawl",name:"2小棉被帽子是多餘的",content:"小棉被帽子是多餘的<3",enchant:"",enchantStatus:!1,links:[],imgUrl:a("/img/clothingList/clothingList-1.png")}]),C=T(()=>{let e=[...L.value];return c.value.length>0&&!(c.value.length===1&&c.value.includes("enchant"))&&(e=L.value.filter(i=>c.value.includes(i.type))),c.value.includes("enchant")&&(e=e.filter(i=>i.enchantStatus)),e});return q(()=>c.value.length,()=>{c.value.length<=0&&(d.value.status=!0)}),(e,i)=>(o(),l(u,null,[t("div",I,[M,t("div",D,[t("ul",E,[t("li",{class:x(["type-list",{active:d.value.status}]),onClick:i[0]||(i[0]=s=>b())},r(d.value.name),3),(o(),l(u,null,p(v,(s,n)=>t("li",{class:"type-list",key:n,"data-condition":"condition-"+n,onClick:m=>k(n)},r(s),9,F)),64)),(o(),l(u,null,p(S,(s,n)=>t("li",{class:"type-list type-list-icon-click-container",key:n,"data-condition":"condition-"+n,onClick:m=>k(n)},[V,y(" "+r(s),1)],8,N)),64))])])]),t("div",z,[t("ul",O,[(o(!0),l(u,null,p(C.value,(s,n)=>(o(),l("li",{class:"list",key:n,"data-card":"card-"+n},[t("div",G,[t("h2",null,r(s.content),1),t("p",null,[y("---"),t("span",null,r(s.enchant),1)])]),t("div",H,[J,(o(!0),l(u,null,p(s.links,(m,U)=>(o(),l("a",{class:"list-menu-bottom-link",href:"link",target:"_blank",key:U},P))),128))]),t("figure",Q,[t("img",{src:s.imgUrl,alt:""},null,8,R),t("figcaption",W,r(s.name),1)]),t("div",{class:"list-menu-btn","data-card-btn":"card-btn-"+n,onClick:m=>f(n)},nt,8,X)],8,j))),128))])])],64))}},at=$(et,[["__scopeId","data-v-b033e154"]]);export{at as default};
