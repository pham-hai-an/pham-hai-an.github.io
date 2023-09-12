"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[3957],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(r),y=n,f=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return r?o.createElement(f,l(l({ref:t},s),{},{components:r})):o.createElement(f,l({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var c=2;c<i;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4832:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return d}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),l=["components"],a={},u="Story Block layout",c={unversionedId:"sdk/android/shortVideoView/storyblock-layout",id:"sdk/android/shortVideoView/storyblock-layout",title:"Story Block layout",description:"Similar to the Carousel layout, the Story Block layout displays videos horizontally, but only one video is visible at a time.",source:"@site/docs/sdk/android/shortVideoView/storyblock-layout.mdx",sourceDirName:"sdk/android/shortVideoView",slug:"/sdk/android/shortVideoView/storyblock-layout",permalink:"/sdk/android/shortVideoView/storyblock-layout",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Carousel layout",permalink:"/sdk/android/shortVideoView/carousel-layout"},next:{title:"Detail player",permalink:"/sdk/android/shortVideoView/detail-player"}},s={},d=[{value:"Story Block Item",id:"story-block-item",level:2}],p={toc:d};function y(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"story-block-layout"},"Story Block layout"),(0,i.kt)("p",null,"Similar to the Carousel layout, the Story Block layout displays videos horizontally, but only one video is visible at a time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val cfBuilder = ViewConfig.Builder(this) // `this` is a context\ncfBuilder.videoSource(source)\nval storyBlockLoCf = ShortVideoStoryBlockLayout.createDefaultConfig(this)\ncfBuilder.layoutConfig(storyBlockLoCf)\nshortVideoView.init(cfBuilder.build())\n")),(0,i.kt)("p",null,"You have the ability to disable scrolling and customize the next/previous\nbuttons. Below are the attributes available for customization:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable/Disable scrolling"),(0,i.kt)("li",{parentName:"ul"},"Container background color"),(0,i.kt)("li",{parentName:"ul"},"Item background color"),(0,i.kt)("li",{parentName:"ul"},"Previous button (set to null to hide)"),(0,i.kt)("li",{parentName:"ul"},"Next button (set to null to hide)")),(0,i.kt)("h2",{id:"story-block-item"},"Story Block Item"),(0,i.kt)("p",null,"For Story Block items, you can customize the following UI components/attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Video title text view (the layoutGravity attr is ignored)"),(0,i.kt)("li",{parentName:"ul"},"Item's corner radius"),(0,i.kt)("li",{parentName:"ul"},"Progress bar"),(0,i.kt)("li",{parentName:"ul"},"Play/pause, mute, full screen, share button"),(0,i.kt)("li",{parentName:"ul"},"Video thumbnail scale mode"),(0,i.kt)("li",{parentName:"ul"},"Video scale mode")))}y.isMDXComponent=!0}}]);