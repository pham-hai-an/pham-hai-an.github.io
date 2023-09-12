"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[4975],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),l=u(n),p=r,m=l["".concat(c,".").concat(p)]||l[p]||d[p]||i;return n?o.createElement(m,s(s({ref:t},h),{},{components:n})):o.createElement(m,s({ref:t},h))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=l;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return h},default:function(){return w},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=n(4464),a=n(5729),c=["components"],u={slug:"/branching-video",sidebar_position:1},h="Branching Video",d={unversionedId:"branching/getting-started",id:"branching/getting-started",title:"Branching Video",description:"Embed code snippet",source:"@site/docs/branching/getting-started.mdx",sourceDirName:"branching",slug:"/branching-video",permalink:"/branching-video",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/branching-video",sidebar_position:1}},l={},p=[{value:"Embed code snippet",id:"embed-code-snippet",level:2}],m={toc:p};function w(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"branching-video"},"Branching Video"),(0,i.kt)("h2",{id:"embed-code-snippet"},"Embed code snippet"),(0,i.kt)(s.Z,{language:"html",mdxType:"CodeBlock"},'<div id="branching-video"></div>\n<script src="'+a.Tb+'"><\/script>\n<script>\n   var video = new BeLiveVideoWidget({\n      container: document.getElementById("branching-video"),\n      videoId: "VIDEO_ID",\n   })\n<\/script>'))}w.isMDXComponent=!0},5729:function(e){e.exports=JSON.parse('{"Tb":"https://lora-sdk.belive.sg/branching-video/latest/video.min.js","LS":"https://lora-sdk.belive.sg/player-widget/latest/player.min.js","sb":[{"X":[{"question":"What browsers does the player support?","answer":"Our player is supported on Chrome, Safari, Microsoft Edge and Firefox browsers."},{"question":"Is the player responsive to video screens?","answer":"Yes, the video player is responsive to desktop and mobile screens."},{"question":"Can I run multiple live shows at the same time?","answer":"Yes, multiple shows can run concurrently if they are from different host accounts."},{"question":"How do I let registered users of my website chat in their usernames?","answer":"To allow users to live chat in their own usernames, you may refer to this documentation."},{"question":"When a viewer clicks on the products, why does my live show not convert into a miniplayer/ Picture-in-picture?","answer":"The video player only converts into a miniplayer if the product link is in the same domain."}]},{"X":[{"question":"How do I add more Admin roles?","answer":"You can contact your Key Account Manager to add more Admin roles for your CMS."},{"question":"Can my hosts log into the CMS?","answer":"No, only admin accounts can be used to log into the CMS. Host accounts will only have access to the host app."}]},{"X":[{"question":"Why can I see a white/square background in the icons I uploaded?","answer":"To avoid having backgrounds appearing in your icons, we recommend using .PNG images with transparent background."},{"question":"What is Accent colour?","answer":"The accent colour in themes is the colour of the admin\'s message background colour in the live chat, the colour of your product prices as well as the viewer\'s Send message button."}]},{"X":[{"question":"Why is my live video buffering?","answer":"The video quality and framerate is dependent on the broadcaster\'s network. Our live streaming technology adjusts the video\'s resolution and framerate adapts to the capacity of the broadcaster\'s network at any given moment. By lowering the video\'s quality when the network\'s capacity goes down, we reduce the risk of interruptions in the stream."}]},{"X":[{"question":"Can I pin products or comments on the host app and CMS at the same?","answer":"Yes. However, we recommend sticking to moderating on one platform at a time."},{"question":"Can I sort products or chat on the host app and CMS at the same time?","answer":"Yes. However, we recommend sticking to moderating on one platform at a time."},{"question":"Why is my video feed not loading?","answer":"Ensure that your devices are connected to strong internet connection and that your host phone is not running any other broadcasting sources (Google Meet, Zoom), in the background."},{"question":"How do I block profanities or sensitive words in the live chat?","answer":"You can input words in the profanity filter under the Settings page. The profanity filter is not case-sensitive and you can input an unlimited number of words."},{"question":"What happens if I mute a viewer?","answer":"Your viewer will see a pop up message saying that the Admin of the show has muted them, and they will no longer see the chat box to type their messages in. They can still read the ongoing live chat and watch the live show."},{"question":"Can all viewers see the message when I Reply a viewer\'s message?","answer":"Yes, all viewers can see your reply message."}]},{"X":[{"question":"Can viewers still watch the live video recording after the live show ends?","answer":"Yes, your viewers will be able to watch the live show recording if it was saved and still embedded on your website."},{"question":"What happens if I delete a show that is still embedded on my website?","answer":"If you delete a show that was still embedded on your website, your website visitors will see a message saying that the show is not available anymore upon clicking the \'Watch Show\' button."},{"question":"At what situations will viewers see the placeholder image?","answer":"Viewers will see the placeholder image if the live show has ended but not saved."}]},{"X":[{"question":"Why can\'t I send messages on the host app?","answer":"Ensure that the mobile device of the host app has strong internet connection, and you do not have any broadcasting other apps (Google Meet, Zoom, etc) running in the background."},{"question":"What if my host phone runs out of battery in the middle of the live show?","answer":"Your live show will end and it will be saved into your CMS."},{"question":"If I\'m using an external broadcasting source, do I still need the host app?","answer":"No, you do not need the host app if you are using an external broadcasting source."},{"question":"My host forgot their log in password, how can I reset it?","answer":"You can reset passwords of host accounts in the CMS, under \'Accounts\'."},{"question":"Can multiple users log into the same host account at once?","answer":"No, for security reasons the host account can only be used in one device at a time. If another user logs into the account, the first user will automatically be logged out."}]},{"X":[{"question":"Can viewers chat on a video show?","answer":"No, viewers cannot chat in a video show."},{"question":"What\'s the difference between a video show and a live show?","answer":"You can upload prerecorded videos for a video show and there will not be any live chat. You can add products into both live shows and video shows."}]},{"X":[{"question":"What is the recommended upload speed?","answer":"We recommend that the host phone\'s upload speed is at least 7 Mbps for a high quality video feed. You may use fast.com to run a network test."},{"question":"How do I ensure my internet connection is good?","answer":"You may use fast.com to run a network test."}]},{"X":[{"question":"Why are the statistics for my recorded shows not reflected in the Analytics page?","answer":"The statistics for recorded shows will only be reflected after five minutes."},{"question":"What does the peak time graph show?","answer":"The peak time graph illustrates the moments in the live show where your engagement and viewership reached its highest."}]},{"X":[{"question":"I would like to trigger miniplayer when a user clicks on Product URL. Is there any specific rule for it?","answer":"Make sure that Product URL is the same domain as where you are embeding show script."}]},{"X":[{"question":"Why do I see the BeLive logo or grey icon as my product image?","answer":"If you see a BeLive logo or grey picture icon as your product image, your product image URL might have been blocked from being used by the original owner. You will have to replace the image with a different one."},{"question":"Is there a limit to the number of products I have in the Excel spreadsheet?","answer":"No, there is no limit."},{"question":"Can I upload the filled-in template in a different format?","answer":"The supported formats for bulk uploading a file are .xls and .csv."}]},{"X":[{"question":"Can two shows go live at the same time?","answer":"One host can only start one live show at a time. However, you can have multiple hosts going live at the same time from different host accounts."}]}]}')}}]);