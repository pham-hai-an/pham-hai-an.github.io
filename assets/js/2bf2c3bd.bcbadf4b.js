"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[1315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),c=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7305:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={},u="Detail Player",c={unversionedId:"sdk/ios/shortVideoView/detail-player",id:"sdk/ios/shortVideoView/detail-player",title:"Detail Player",description:"When video item is clicked, a detail video screen will open to play this video. This screen supports products",source:"@site/docs/sdk/ios/shortVideoView/detail-player.mdx",sourceDirName:"sdk/ios/shortVideoView",slug:"/sdk/ios/shortVideoView/detail-player",permalink:"/sdk/ios/shortVideoView/detail-player",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Storyblock Layout",permalink:"/sdk/ios/shortVideoView/storyblock-layout"},next:{title:"Player behaviors",permalink:"/sdk/ios/shortVideoView/player-behaviors"}},p={},s=[{value:"Detail Player Item",id:"detail-player-item",level:2},{value:"Product Item",id:"product-item",level:2},{value:"Q&amp;A Item",id:"qa-item",level:2},{value:"Poll Item",id:"poll-item",level:2},{value:"PiP",id:"pip",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"detail-player"},"Detail Player"),(0,o.kt)("p",null,"When video item is clicked, a detail video screen will open to play this video. This screen supports products\nview, video seeking, PIP. Detail Player is a internal controller, we don't allow to change it but you can config\nUI and player behavior of this screen via ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.detailConfiguration"),". If you don't want this\nscreen show up, set ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration.detailConfiguration = nil")," Below is list of attributes can be\nedit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Allow scroll"),(0,o.kt)("li",{parentName:"ul"},"Background color"),(0,o.kt)("li",{parentName:"ul"},"Previous button: if you want to hide it, simply set it to ",(0,o.kt)("inlineCode",{parentName:"li"},"nil")),(0,o.kt)("li",{parentName:"ul"},"Next button: if you want to hide it, simply set it to ",(0,o.kt)("inlineCode",{parentName:"li"},"nil")),(0,o.kt)("li",{parentName:"ul"},"Close button: if you want to hide it, simply set it to ",(0,o.kt)("inlineCode",{parentName:"li"},"nil"))),(0,o.kt)("h2",{id:"detail-player-item"},"Detail Player Item"),(0,o.kt)("p",null,"To change UI of detail player item, ",(0,o.kt)("strong",{parentName:"p"},"ShortVideoSDK")," supports below attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Background color"),(0,o.kt)("li",{parentName:"ul"},"Corner radius"),(0,o.kt)("li",{parentName:"ul"},"Title"),(0,o.kt)("li",{parentName:"ul"},"Progress seek bar"),(0,o.kt)("li",{parentName:"ul"},"Play/pause button"),(0,o.kt)("li",{parentName:"ul"},"Mute/unmute button"),(0,o.kt)("li",{parentName:"ul"},"PIP button"),(0,o.kt)("li",{parentName:"ul"},"Share button"),(0,o.kt)("li",{parentName:"ul"},"Thumbnail scale mode"),(0,o.kt)("li",{parentName:"ul"},"Video scale mode")),(0,o.kt)("h2",{id:"product-item"},"Product Item"),(0,o.kt)("p",null,"A list of products can be attached to a video item and it will be displayed in the detail. Each product item\nmight contain a Shop CTA (Call to action) button which opens the product URL in an external browser (you\ncan override this behavior). The product item UI can also be customized:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Background color"),(0,o.kt)("li",{parentName:"ul"},"Corner radius"),(0,o.kt)("li",{parentName:"ul"},"Title"),(0,o.kt)("li",{parentName:"ul"},"CTA button: Text, Color, Image"),(0,o.kt)("li",{parentName:"ul"},"Thumbnail scale mode")),(0,o.kt)("h2",{id:"qa-item"},"Q&A Item"),(0,o.kt)("p",null,"A Q&A can be attached to a video item and it will be displayed in the detail. Each Q&A item contain a CTA\n(Call to action) button which submit the answer. The Q&A item UI can also be customized:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CTA button: Text Color, Background Color")),(0,o.kt)("h2",{id:"poll-item"},"Poll Item"),(0,o.kt)("p",null,"A Poll can be attached to a video item and it will be displayed in the detail. Each Poll item contain a CTA (Call\nto action) button which submit the answer. The Poll item UI can also be customized:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CTA button: Text Color, Background Color")),(0,o.kt)("h2",{id:"pip"},"PiP"),(0,o.kt)("p",null,"The detail player supports play a video in PIP mode. You can disable this feature by hiding the PIP button\nby set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),"."))}m.isMDXComponent=!0}}]);