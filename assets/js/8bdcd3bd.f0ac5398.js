"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[6065],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),f=i,h=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},6908:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={},c="ShortVideoView",d={unversionedId:"sdk/ios/shortVideoView/getting-started",id:"sdk/ios/shortVideoView/getting-started",title:"ShortVideoView",description:"The ShortVideoView serves as an entry point within the UI and is",source:"@site/docs/sdk/ios/shortVideoView/getting-started.mdx",sourceDirName:"sdk/ios/shortVideoView",slug:"/sdk/ios/shortVideoView/getting-started",permalink:"/sdk/ios/shortVideoView/getting-started",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Initialize SDK",permalink:"/sdk/ios/initialize"},next:{title:"Grid Layout",permalink:"/sdk/ios/shortVideoView/grid-layout"}},p={},u=[],l={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shortvideoview"},"ShortVideoView"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ShortVideoView")," serves as an entry point within the UI and is\ndesigned to present a variety of video view types: vertical grid,\nhorizontal grid, and carousel. When a user clicks on a video item, it\ntriggers the opening of the primary player, which then plays\nthe selected video. Incorporating a ",(0,o.kt)("inlineCode",{parentName:"p"},"ShortVideoView")," is as\nstraightforward as adding any other view, and it can be accomplished\nthrough either Storyboard or code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let shortVideoView = ShortVideoView(frame: self.view.bounds)\n")),(0,o.kt)("p",null,"Upon execution, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ShortVideoView")," fetches video data from a\n",(0,o.kt)("inlineCode",{parentName:"p"},"ShortVideoSource"),". This source is defined by a\n",(0,o.kt)("inlineCode",{parentName:"p"},"ShortVideoConfiguration"),", which determines the layout type and\noffers customization options for the UI. Additionally, it manages\ncertain fundamental player behaviors."))}f.isMDXComponent=!0}}]);