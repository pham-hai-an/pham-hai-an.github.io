"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[3171],{6886:function(e,t,n){n.d(t,{ZP:function(){return S}});var i=n(3366),o=n(7462),r=n(7294),a=n(3680),s=n(5408),l=n(9707),c=n(4780),d=n(7088),p=n(4502),u=n(2734);var m=r.createContext(),h=n(4867);function b(e){return(0,h.Z)("MuiGrid",e)}const g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=(0,n(1588).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...g.map((e=>`grid-xs-${e}`)),...g.map((e=>`grid-sm-${e}`)),...g.map((e=>`grid-md-${e}`)),...g.map((e=>`grid-lg-${e}`)),...g.map((e=>`grid-xl-${e}`))]),w=n(5893);const k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function y(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}const x=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{container:i,direction:o,item:r,spacing:a,wrap:s,zeroMinWidth:l,breakpoints:c}=n;let d=[];i&&(d=function(e,t,n={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]];const i=[];return t.forEach((t=>{const o=e[t];Number(o)>0&&i.push(n[`spacing-${t}-${String(o)}`])})),i}(a,c,t));const p=[];return c.forEach((e=>{const i=n[e];i&&p.push(t[`grid-${e}-${String(i)}`])})),[t.root,i&&t.container,r&&t.item,l&&t.zeroMinWidth,...d,"row"!==o&&t[`direction-xs-${String(o)}`],"wrap"!==s&&t[`wrap-xs-${String(s)}`],...p]}})((({ownerState:e})=>(0,o.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${f.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let o={};if(n&&0!==i){const t=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});o=(0,s.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${y(n)}`,[`& > .${f.item}`]:{paddingTop:y(n)}}:{}}))}return o}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let o={};if(n&&0!==i){const t=(0,s.P$)({values:i,breakpoints:e.breakpoints.values});o=(0,s.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${y(n)})`,marginLeft:`-${y(n)}`,[`& > .${f.item}`]:{paddingLeft:y(n)}}:{}}))}return o}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((i,r)=>{let a={};if(t[r]&&(n=t[r]),!n)return i;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),c="object"==typeof l?l[r]:l;if(null==c)return i;const d=Math.round(n/c*1e8)/1e6+"%";let p={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${d} + ${y(n)})`;p={flexBasis:e,maxWidth:e}}}a=(0,o.Z)({flexBasis:d,flexGrow:0,maxWidth:d},p)}return 0===e.breakpoints.values[r]?Object.assign(i,a):i[e.breakpoints.up(r)]=a,i}),{})}));const v=e=>{const{classes:t,container:n,direction:i,item:o,spacing:r,wrap:a,zeroMinWidth:s,breakpoints:l}=e;let d=[];n&&(d=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];const n=[];return t.forEach((t=>{const i=e[t];if(Number(i)>0){const e=`spacing-${t}-${String(i)}`;n.push(e)}})),n}(r,l));const p=[];l.forEach((t=>{const n=e[t];n&&p.push(`grid-${t}-${String(n)}`)}));const u={root:["root",n&&"container",o&&"item",s&&"zeroMinWidth",...d,"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==a&&`wrap-xs-${String(a)}`,...p]};return(0,c.Z)(u,b,t)},$=r.forwardRef((function(e,t){const n=(0,p.Z)({props:e,name:"MuiGrid"}),{breakpoints:s}=(0,u.Z)(),c=(0,l.Z)(n),{className:d,columns:h,columnSpacing:b,component:g="div",container:f=!1,direction:y="row",item:$=!1,rowSpacing:S,spacing:N=0,wrap:W="wrap",zeroMinWidth:Z=!1}=c,M=(0,i.Z)(c,k),E=S||N,T=b||N,C=r.useContext(m),z=f?h||12:C,P={},G=(0,o.Z)({},M);s.keys.forEach((e=>{null!=M[e]&&(P[e]=M[e],delete G[e])}));const L=(0,o.Z)({},c,{columns:z,container:f,direction:y,item:$,rowSpacing:E,columnSpacing:T,wrap:W,zeroMinWidth:Z,spacing:N},P,{breakpoints:s.keys}),D=v(L);return(0,w.jsx)(m.Provider,{value:z,children:(0,w.jsx)(x,(0,o.Z)({ownerState:L,className:(0,a.Z)(D.root,d),as:g,ref:t},G))})}));var S=$},4567:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=n(1583),s=n(6886),l=["components"],c={},d="Embedding on Weebly",p={unversionedId:"admin/embedding-on-website/weebly",id:"admin/embedding-on-website/weebly",title:"Embedding on Weebly",description:"If you have a Weebly website and want to enhance it with live streams or short video playlists, you can easily do so with LORA. This guide will take you through the straightforward steps required to embed your live stream player or playlists on your Weebly site using the appropriate embed code. The steps are relevant for the following types of embed codes:",source:"@site/docs/admin/embedding-on-website/weebly.mdx",sourceDirName:"admin/embedding-on-website",slug:"/admin/embedding-on-website/weebly",permalink:"/admin/embedding-on-website/weebly",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"player",previous:{title:"Embedding on Squarespace",permalink:"/admin/embedding-on-website/squarespace"},next:{title:"Embedding on Shopify",permalink:"/admin/embedding-on-website/shopify"}},u={},m=[],h={toc:m};function b(e){var t=e.components,c=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"embedding-on-weebly"},"Embedding on Weebly"),(0,r.kt)("p",null,"If you have a Weebly website and want to enhance it with live streams or short video playlists, you can easily do so with LORA. This guide will take you through the straightforward steps required to embed your live stream player or playlists on your Weebly site using the appropriate embed code. The steps are relevant for the following types of embed codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Individual short videos"),(0,r.kt)("li",{parentName:"ul"},"Short video playlists"),(0,r.kt)("li",{parentName:"ul"},"Live show (both ",(0,r.kt)("b",null,"\u201cWatch Now\u201d")," button and Direct Display codes)"),(0,r.kt)("li",{parentName:"ul"},"Show lineup")),(0,r.kt)("p",null,"To embed your content onto Weebly:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to your Weebly account and go to the site editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("b",null,'"Embed Code"')," element from the sidebar on the left-hand side."),(0,r.kt)(s.ZP,{container:!0,mdxType:"Grid"},(0,r.kt)(s.ZP,{item:!0,xs:12,sm:4,mdxType:"Grid"},(0,r.kt)(a.Z,{src:n(3621).Z,mdxType:"ZoomImage"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag and drop the ",(0,r.kt)("b",null,'"Embed Code"')," element to the location on your page where you want the code to appear.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("b",null,'"Embed Code"')," element to open the editing window and click on ",(0,r.kt)("b",null,"\u201cEdit Custom HTML\u201d"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the code you want to embed into the text box provided.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you are using the live show direct display embed code, you can adjust the size of the video by editing the width and height attributes in the embed code.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("b",null,'"Publish"')," button to save the changes to your page."))))}b.isMDXComponent=!0},3621:function(e,t,n){t.Z=n.p+"assets/images/Weebly 1-885f7ad45f5d65d9e08068f1579f0a29.png"}}]);