"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[4780],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),y=n,m=d["".concat(u,".").concat(y)]||d[y]||p[y]||i;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3227:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={},u="Storyblock Layout",c={unversionedId:"sdk/ios/shortVideoView/storyblock-layout",id:"sdk/ios/shortVideoView/storyblock-layout",title:"Storyblock Layout",description:"The storyblock layout is designed to support a horizontal scroll direction.",source:"@site/docs/sdk/ios/shortVideoView/storyblock-layout.mdx",sourceDirName:"sdk/ios/shortVideoView",slug:"/sdk/ios/shortVideoView/storyblock-layout",permalink:"/sdk/ios/shortVideoView/storyblock-layout",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Carousel Layout",permalink:"/sdk/ios/shortVideoView/carousel-layout"},next:{title:"Detail Player",permalink:"/sdk/ios/shortVideoView/detail-player"}},s={},p=[{value:"Storyblock Item",id:"storyblock-item",level:2}],d={toc:p};function y(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"storyblock-layout"},"Storyblock Layout"),(0,i.kt)("p",null,"The storyblock layout is designed to support a horizontal scroll direction. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let layout = ShortVideoStoryBlockLayout.default\nlet configuration = ShortVideoConfiguration()\nconfiguration.layout = layout\n.\n.\n.\nshortVideoView.configuration = configuration\n")),(0,i.kt)("p",null,"You have the ability to disable scrolling, update item configurations, and customize the next/previous buttons. Here are the attributes that can be customized:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Container background color"),(0,i.kt)("li",{parentName:"ul"},"Background color"),(0,i.kt)("li",{parentName:"ul"},"Previous button (set to ",(0,i.kt)("inlineCode",{parentName:"li"},"nil")," to hide it)"),(0,i.kt)("li",{parentName:"ul"},"Next button (set to ",(0,i.kt)("inlineCode",{parentName:"li"},"nil")," to hide it)")),(0,i.kt)("h2",{id:"storyblock-item"},"Storyblock Item"),(0,i.kt)("p",null,"For customization of individual storyblock items, the ",(0,i.kt)("inlineCode",{parentName:"p"},"LORA Short Video SDK")," provides the following attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Background color"),(0,i.kt)("li",{parentName:"ul"},"Corner radius"),(0,i.kt)("li",{parentName:"ul"},"Title"),(0,i.kt)("li",{parentName:"ul"},"Progress"),(0,i.kt)("li",{parentName:"ul"},"Play/pause button"),(0,i.kt)("li",{parentName:"ul"},"Mute/unmute button"),(0,i.kt)("li",{parentName:"ul"},"Fullscreen button"),(0,i.kt)("li",{parentName:"ul"},"Share button"),(0,i.kt)("li",{parentName:"ul"},"Thumbnail scale mode"),(0,i.kt)("li",{parentName:"ul"},"Video scale mode")))}y.isMDXComponent=!0}}]);