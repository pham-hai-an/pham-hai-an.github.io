"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[466],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=o,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9360:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},u="Carousel layout",d={unversionedId:"sdk/android/shortVideoView/carousel-layout",id:"sdk/android/shortVideoView/carousel-layout",title:"Carousel layout",description:"Carousel layout brings a video preview feature to the ShortVideoView. It display the videos horizontally in single row",source:"@site/docs/sdk/android/shortVideoView/carousel-layout.mdx",sourceDirName:"sdk/android/shortVideoView",slug:"/sdk/android/shortVideoView/carousel-layout",permalink:"/sdk/android/shortVideoView/carousel-layout",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Grid layout",permalink:"/sdk/android/shortVideoView/grid-layout"},next:{title:"Story Block layout",permalink:"/sdk/android/shortVideoView/storyblock-layout"}},s={},c=[{value:"Carousel Item",id:"carousel-item",level:2}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"carousel-layout"},"Carousel layout"),(0,a.kt)("p",null,"Carousel layout brings a video preview feature to the ShortVideoView. It display the videos horizontally in single row"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"val cfBuilder = ViewConfig.Builder(this) // `this` is a context\ncfBuilder.videoSource(source)\nval carouselLoCf = ShortVideoCarouselLayout.createDefaultConfig(this)\ncfBuilder.layoutConfig(carouselLoCf)\nshortVideoView.init(cfBuilder.build())\n")),(0,a.kt)("h2",{id:"carousel-item"},"Carousel Item"),(0,a.kt)("p",null,"For Carousel item, you can customize the below UI components/attrs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Video title text view (the layoutGravity attr is ignored)"),(0,a.kt)("li",{parentName:"ul"},"Item's corner radius"),(0,a.kt)("li",{parentName:"ul"},"Progress bar"),(0,a.kt)("li",{parentName:"ul"},"Play/pause, mute button"),(0,a.kt)("li",{parentName:"ul"},"Video thumbnail scale mode"),(0,a.kt)("li",{parentName:"ul"},"Video scale mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"val loCf = ShortVideoCarouselLayout.createDefaultConfig(this)\nloCf.itemConfiguration?.let { cf ->\n    cf.videoScaleMode = BlsPlayerScaleMode.DEFAULT\n}\n")),(0,a.kt)("p",null,"Supported video scale mode:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Scale mode"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,a.kt)("td",{parentName:"tr",align:null},"The SDK will choose the best scale mode bases on video/device orientation. This is the default value and it is recommended to use this mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FIT"),(0,a.kt)("td",{parentName:"tr",align:null},"Make the video fit the view and keep the ratio in at least 1 dimension (width or height)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FILL"),(0,a.kt)("td",{parentName:"tr",align:null},"Zoom the video and do not keep the ratio to fit the view in both width and height")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FIXED_WIDTH"),(0,a.kt)("td",{parentName:"tr",align:null},"Make the video fit the view width and keep the ratio")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FIXED_HEIGHT"),(0,a.kt)("td",{parentName:"tr",align:null},"Make the video fit the view height and keep the ratio")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ZOOM"),(0,a.kt)("td",{parentName:"tr",align:null},"Zoom the video and keep the ratio to fit the view in both width and height")))))}m.isMDXComponent=!0}}]);