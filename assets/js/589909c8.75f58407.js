"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[6645],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(y,a(a({ref:t},u),{},{components:r})):o.createElement(y,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3447:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],s={},l="ShortVideoSource",c={unversionedId:"sdk/ios/shortVideoView/short-video-source",id:"sdk/ios/shortVideoView/short-video-source",title:"ShortVideoSource",description:"ShortVideoSDK supports 2 types of video sources",source:"@site/docs/sdk/ios/shortVideoView/short-video-source.mdx",sourceDirName:"sdk/ios/shortVideoView",slug:"/sdk/ios/shortVideoView/short-video-source",permalink:"/sdk/ios/shortVideoView/short-video-source",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Player behaviors",permalink:"/sdk/ios/shortVideoView/player-behaviors"},next:{title:"Play & Pause",permalink:"/sdk/ios/shortVideoView/play-and-pause"}},u={},p=[{value:"Playlist",id:"playlist",level:2},{value:"Single",id:"single",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"shortvideosource"},"ShortVideoSource"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ShortVideoSDK")," supports 2 types of video sources"),(0,i.kt)("h2",{id:"playlist"},"Playlist"),(0,i.kt)("p",null,"The playlist video source will fetch all the available videos from a specific playlist by an ID. To create a\nplaylist source, use the below API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ShortVideoSource.init(playlistId: String, maxItemsCount: Int? = nil)\n")),(0,i.kt)("p",null,"Setting a ",(0,i.kt)("inlineCode",{parentName:"p"},"maxVideoItemsCount")," greater than 0 will limit the number of videos to load, set ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," to show all\nvideo in playlist."),(0,i.kt)("h2",{id:"single"},"Single"),(0,i.kt)("p",null,"The single video source will fetch a single video by a video id. To create a single source, use the below API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ShortVideoSource.init(videoId: String)\n")))}f.isMDXComponent=!0}}]);