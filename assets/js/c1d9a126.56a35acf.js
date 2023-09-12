"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[5724],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return m}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),m=r,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return i?n.createElement(h,a(a({ref:t},c),{},{components:i})):n.createElement(h,a({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},4043:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return s}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],l={},u="Detail player",d={unversionedId:"sdk/android/shortVideoView/detail-player",id:"sdk/android/shortVideoView/detail-player",title:"Detail player",description:"The Short Video module provides a detail player as an internal screen (activity) that opens when clicking on a video item.",source:"@site/docs/sdk/android/shortVideoView/detail-player.mdx",sourceDirName:"sdk/android/shortVideoView",slug:"/sdk/android/shortVideoView/detail-player",permalink:"/sdk/android/shortVideoView/detail-player",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Story Block layout",permalink:"/sdk/android/shortVideoView/storyblock-layout"},next:{title:"Player behaviors",permalink:"/sdk/android/shortVideoView/player-behaviors"}},c={},s=[{value:"Detail Item",id:"detail-item",level:2},{value:"Product list",id:"product-list",level:2},{value:"Q&amp;A item",id:"qa-item",level:2},{value:"Poll item",id:"poll-item",level:2},{value:"Picture in Picture (PiP)",id:"picture-in-picture-pip",level:2}],p={toc:s};function m(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"detail-player"},"Detail player"),(0,o.kt)("p",null,"The Short Video module provides a detail player as an internal screen (activity) that opens when clicking on a video item.\nThis screen includes a video player with various functions and an overlay data detail.\nYou can navigate between items by swipe up and down gestures or using navigation buttons.\nThe UI and player behavior can be configured when setting up the Grid, Carousel, or Story Block layout."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"val gridCfBuilder = ViewConfig.Builder(this)\n// Create the detail view config\nval detailCfBuilder = DetailViewConfig.Builder(this)\ndetailCfBuilder.layoutConfig(ShortVideoDetailLayout.createDefaultConfig(this))\ndetailCfBuilder.playerConfig(PlayerItemConfiguration())\n// Set the detail view config\ngridCfBuilder.detailViewConfig(detailCfBuilder.build())\nshortVideoView.init(gridCfBuilder.build())\n")),(0,o.kt)("p",null,"The following attributes can be adjusted:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable/Disable scrolling"),(0,o.kt)("li",{parentName:"ul"},"Item background color"),(0,o.kt)("li",{parentName:"ul"},"Previous button (set to null to hide)"),(0,o.kt)("li",{parentName:"ul"},"Next button (set to null to hide)")),(0,o.kt)("h2",{id:"detail-item"},"Detail Item"),(0,o.kt)("p",null,"For detail items, you can customize the following UI components/attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Video title, duration text view (the layoutGravity attr is ignored)"),(0,o.kt)("li",{parentName:"ul"},"Item's corner radius"),(0,o.kt)("li",{parentName:"ul"},"Seek bar"),(0,o.kt)("li",{parentName:"ul"},"Play/pause, mute, pip, share, close button"),(0,o.kt)("li",{parentName:"ul"},"Video thumbnail scale mode"),(0,o.kt)("li",{parentName:"ul"},"Video scale mode"),(0,o.kt)("li",{parentName:"ul"},"Product item view.")),(0,o.kt)("h2",{id:"product-list"},"Product list"),(0,o.kt)("p",null,"A list of products can be attached to a video item, displayed in the main player.\nEach product item might contain a Shop CTA button that opens the product URL in an external browser (this behavior can be overridden).\nThe product item UI can also be customized."),(0,o.kt)("p",null,"For product item layout, you can customize the below UI components/attrs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Product title text view (the layoutGravity attr is ignored)"),(0,o.kt)("li",{parentName:"ul"},"Item's corner radius/background"),(0,o.kt)("li",{parentName:"ul"},"Shop CTA text color and icon resource."),(0,o.kt)("li",{parentName:"ul"},"Shop CTA text content. If set, it will override the remote value."),(0,o.kt)("li",{parentName:"ul"},"Product thumbnail scale mode")),(0,o.kt)("h2",{id:"qa-item"},"Q&A item"),(0,o.kt)("p",null,"A Q&A can be attached to a video item and displayed in the detail.\nEach Q&A item contains a Call to Action (CTA) button that submits an answer.\nThe Q&A item UI can also be customized:"),(0,o.kt)("p",null,"For Q&A item layout, you can customize the below UI components/attrs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CTA button: Text Color, Background Color. Other UI components color will be generated from this CTA button colors")),(0,o.kt)("h2",{id:"poll-item"},"Poll item"),(0,o.kt)("p",null,"A Poll can be attached to a video item and displayed in the detail.\nEach Poll item contains a Call to Action (CTA) button that submits an option.\nThe Poll item UI can also be customized:"),(0,o.kt)("p",null,"For Poll item layout, you can customize the below UI components/attrs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CTA button: Text Color, Background Color. Other UI components color will be generated from this CTA button colors")),(0,o.kt)("h2",{id:"picture-in-picture-pip"},"Picture in Picture (PiP)"),(0,o.kt)("p",null,"The detail player supports playing a video in Picture in Picture (PiP) mode on devices that support PiP (Android 8+).\nYou can disable this feature by hiding the PiP button."))}m.isMDXComponent=!0}}]);