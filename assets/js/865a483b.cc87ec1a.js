"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[4098],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=a,f=d["".concat(p,".").concat(y)]||d[y]||s[y]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1144:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={},p="Player behaviors",u={unversionedId:"sdk/android/shortVideoView/player-behaviors",id:"sdk/android/shortVideoView/player-behaviors",title:"Player behaviors",description:"Auto play",source:"@site/docs/sdk/android/shortVideoView/player-behaviors.mdx",sourceDirName:"sdk/android/shortVideoView",slug:"/sdk/android/shortVideoView/player-behaviors",permalink:"/sdk/android/shortVideoView/player-behaviors",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Detail player",permalink:"/sdk/android/shortVideoView/detail-player"},next:{title:"Short Video source",permalink:"/sdk/android/shortVideoView/video-source"}},c={},s=[{value:"Auto play",id:"auto-play",level:2},{value:"Player complete action",id:"player-complete-action",level:2}],d={toc:s};function y(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"player-behaviors"},"Player behaviors"),(0,o.kt)("h2",{id:"auto-play"},"Auto play"),(0,o.kt)("p",null,"For Carousel and Story Block, this flag will caused a video to play when it is visible on the screen. For Grid layout, this flag is ignored. The default value is true."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val playerCf = PlayerItemConfiguration().apply {\n    enableAutoPlay()\n    //\n    disableAutoPlay()\n}\n")),(0,o.kt)("h2",{id:"player-complete-action"},"Player complete action"),(0,o.kt)("p",null,"You can control the behavior when the player finishes a playback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val playerCf = PlayerItemConfiguration().apply {\n    actionOnCompleted = PlayerCompleteAction.STOP\n}\n")),(0,o.kt)("p",null,"Supported Actions:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"STOP"),(0,o.kt)("td",{parentName:"tr",align:null},"The player will always stop the video after playing it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"REPEAT"),(0,o.kt)("td",{parentName:"tr",align:null},"The player will always loop the current video.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PLAY_NEXT_ITEM"),(0,o.kt)("td",{parentName:"tr",align:null},"The player will always play the next video in the list after playing the current video. If the current video is the last item, the player will stop playing. This is the default value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PLAY_NEXT_ITEM_AND_LOOP"),(0,o.kt)("td",{parentName:"tr",align:null},"The player will always play the next video in the list after playing the current video. If the current video is the last item, the player will play the first item in the list. This behavior is same as the Loop from start setting at the CMS.")))))}y.isMDXComponent=!0}}]);