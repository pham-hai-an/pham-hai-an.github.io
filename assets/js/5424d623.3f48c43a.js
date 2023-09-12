"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[978],{3396:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(7294),a=n(7586),i=n(2797),r=n(3330),s=n(8862),l=n(3508),d=n(1927),u=n(2949),c=n(8239);var h=function(e){var t=e.children,n=(0,u.I)().colorMode,a=o.useMemo((function(){return(0,c.Z)({palette:{mode:n}})}),[n]);return o.createElement(d.Z,{theme:a},t)};function p(e){var t=e.data,n=e.active,d=void 0!==n&&n,u=o.useState([]),c=u[0],p=u[1];return o.createElement(h,null,t.map((function(e,t){return o.createElement(a.Z,{key:"question-"+t,elevation:0,expanded:c.indexOf(""+t)>-1,onChange:(n=""+t,function(e,t){var o=c.filter((function(e){return+e!=+n}));o.length===c.length?p((function(e){return[].concat(e,[n])})):p(o)}),sx:Object.assign({borderRadius:"8px !important",border:function(e){return"1.5px solid "+e.palette.grey[200]},p:"12px 8px",mt:"16px","&:first-of-type":{mt:0},"&:before":{display:"none"}},d&&{borderWidth:"2px",borderColor:"var(--ifm-color-primary)"},{"&.Mui-expanded":{mb:0,borderWidth:"2px",borderColor:"var(--ifm-color-primary)"}})},o.createElement(r.Z,{sx:Object.assign({},d&&{color:"var(--ifm-color-primary)"},{"&.Mui-expanded":{color:"var(--ifm-color-primary)",minHeight:"auto"},".MuiAccordionSummary-content.Mui-expanded":{m:"12px 0"},".MuiAccordionSummary-expandIconWrapper":{color:"currentcolor"}}),expandIcon:o.createElement(l.Z,null)},o.createElement(s.Z,{sx:{fontWeight:"bold",width:"100%",flexShrink:0}},e.question)),o.createElement(i.Z,{sx:{pt:0,pb:"12px","& p, & li > p":{margin:"0 0 8px"}}},"string"==typeof e.answer?o.createElement(s.Z,{sx:{color:"text.secondary"}},e.answer):e.answer));var n})))}},3714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=(n(6066),n(3396),n(5729),["components"]),s={sidebar_position:4},l="Advanced usage",d={unversionedId:"advanced-usage",id:"advanced-usage",title:"Advanced usage",description:"Set user credential",source:"@site/docs/advanced-usage.mdx",sourceDirName:".",slug:"/advanced-usage",permalink:"/advanced-usage",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4}},u={},c=[{value:"Set user credential",id:"set-user-credential",level:2},{value:"Registers event listeners",id:"registers-event-listeners",level:2},{value:"Remove registered event listeners",id:"remove-registered-event-listeners",level:2},{value:"Remove all event listeners",id:"remove-all-event-listeners",level:2},{value:"In-app Browser",id:"in-app-browser",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],h={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("h2",{id:"set-user-credential"},"Set user credential"),(0,i.kt)("p",null,"This user information are for setting display info for the live chat feature."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This function is optional, When not specify, we will generate random user informations.")),(0,i.kt)("p",null,"Simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"setUser")," function to do this"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'player.setUser({\n   id: "123",\n   displayName: "ABC",\n});\n')),(0,i.kt)("h2",{id:"registers-event-listeners"},"Registers event listeners"),(0,i.kt)("p",null,"Register any event listeners from the ",(0,i.kt)("a",{parentName:"p",href:"./player-api#playereventtype"},"PlayerEventType")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'player.on(BeLivePlayerWidget.PlayerEventType.READY, () => {\n   console.log("Player Widget READY");\n});\n\nplayer.on(BeLivePlayerWidget.PlayerEventType.MINIMIZED, () => {\n   console.log("Player Widget MINIMIZED");\n});\n\nplayer.on(BeLivePlayerWidget.PlayerEventType.UNMINIMIZED, () => {\n   console.log("Player Widget UNMINIMIZED");\n});\n\nplayer.on(BeLivePlayerWidget.PlayerEventType.CLOSE, () => {\n   console.log("Player Widget CLOSE");\n});\n')),(0,i.kt)("h2",{id:"remove-registered-event-listeners"},"Remove registered event listeners"),(0,i.kt)("p",null,"Remove any registered listener from the ",(0,i.kt)("a",{parentName:"p",href:"./player-api#playereventtype"},"PlayerEventType")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function onPlayerReady() {\n   console.log("Player Widget Ready");\n}\n\n// Register the listener\nplayer.on(BeLivePlayerWidget.PlayerEventType.READY, onPlayerReady);\n\n// Remove the listener\nplayer.off(BeLivePlayerWidget.PlayerEventType.READY, onPlayerReady);\n')),(0,i.kt)("h2",{id:"remove-all-event-listeners"},"Remove all event listeners"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'function onPlayerReady() {\n   console.log("Player Widget Ready");\n}\n\nplayer.on(BeLivePlayerWidget.PlayerEventType.READY, () => {\n   console.log("Player Widget ready");\n});\n\nplayer.on(BeLivePlayerWidget.PlayerEventType.CLOSE, () => {\n   console.log("Player Widget was closed");\n});\n\n// Remove all listeners above\nplayer.removeAllListeners();\n')),(0,i.kt)("h2",{id:"in-app-browser"},"In-app Browser"),(0,i.kt)("h3",{id:"android"},"Android"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"I have embedded the LORA show script in Android WebView but when the viewers click on the \u201cProduct URL\u201d while watching a live or recorded show, it doesn't open in a new tab or window. How can I achieve this behavior?"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"To achieve this behavior, additional configurations are required. Please refer to the  Kotlin code snippet as shown below.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"javaScriptEnabled = true\nwebViewClient = default impl\n\nsetSupportMultipleWindows(true)\nwebChromeClient = custom impl\n// This SupportMultipleWindows setting will allow the webview to open a new window when needed\n// (such as links with target=\u201d_blank\u201d attribute)\n// When this setting is true, the onCreateWindow method will be called in a WebChromeClient\n    object : WebChromeClient() {\n\n        override fun onCreateWindow(\n            view: WebView?,\n            isDialog: Boolean,\n            isUserGesture: Boolean,\n            resultMsg: Message?\n        ): Boolean {\n            val newWebView = WebView(context)\n            // Make sure to setup this new webview first\n            setupWebView(newWebView)\n            val transport = resultMsg?.obj as WebViewTransport\n            transport.webView = newWebView\n            resultMsg.sendToTarget()\n            // Open a new dialog to see the content of this web view\n            openUrlInNewWindow(newWebView)\n            return true\n        }\n    }\n")),(0,i.kt)("h3",{id:"ios"},"iOS"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"One of the most commonly seen issues is when viewers are watching the live show via iOS WebView, the show automatically enters into a fullscreen mode. To prevent this from happening, please refer to the configuration settings as shown below."))),(0,i.kt)("p",null,"WebView Library : ",(0,i.kt)("inlineCode",{parentName:"p"},"WKWebView")),(0,i.kt)("p",null,"The following APIs are required for optimizing playback in iOS WebView. Please set them before starting the WebView.\n(Part of ",(0,i.kt)("inlineCode",{parentName:"p"},"WKWebViewConfiguration"),")."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Native iOS (Swift)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"\n// WKWebViewConfiguration\nlet config = WKWebViewConfiguration()\nconfig.allowsInlineMediaPlayback = true\n\n// for iOS 10.0 and above (Set to empty Array which is equivalent to WKAudiovisualMediaTypeNone)\nconfig.mediaTypesRequiringUserActionForPlayback = []\n// for iOS 9.0 and below (deprecated)\nconfig.mediaPlaybackRequiresUserAction = false\n\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"React Native Webview (Using ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/react-native-webview/react-native-webview/blob/master/docs/Reference.md#mediaplaybackrequiresuseraction"},"react-native-webview library"),")")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"allowsInlineMediaPlayback={true}\nmediaPlaybackRequiresUserAction={false}\n\n")))}p.isMDXComponent=!0},5729:function(e){e.exports=JSON.parse('{"Tb":"https://lora-sdk.belive.sg/branching-video/latest/video.min.js","LS":"https://lora-sdk.belive.sg/player-widget/latest/player.min.js","sb":[{"X":[{"question":"What browsers does the player support?","answer":"Our player is supported on Chrome, Safari, Microsoft Edge and Firefox browsers."},{"question":"Is the player responsive to video screens?","answer":"Yes, the video player is responsive to desktop and mobile screens."},{"question":"Can I run multiple live shows at the same time?","answer":"Yes, multiple shows can run concurrently if they are from different host accounts."},{"question":"How do I let registered users of my website chat in their usernames?","answer":"To allow users to live chat in their own usernames, you may refer to this documentation."},{"question":"When a viewer clicks on the products, why does my live show not convert into a miniplayer/ Picture-in-picture?","answer":"The video player only converts into a miniplayer if the product link is in the same domain."}]},{"X":[{"question":"I forgot my CMS log in password. How can I reset it?","answer":"You can contact your Key Account Manager to reset your password."},{"question":"Can my hosts log into the CMS?","answer":"No, only admin accounts can be used to log into the CMS. Host accounts will only have access to the host app."}]},{"X":[{"question":"Why can I see a white/square background in the icons I uploaded?","answer":"To avoid having backgrounds appearing in your icons, we recommend using .PNG images with transparent background."},{"question":"What is Accent colour?","answer":"The accent colour in themes is the colour of the admin\'s message background colour in the live chat, the colour of your product prices as well as the viewer\'s Send message button."}]},{"X":[{"question":"Why is my live video buffering?","answer":"The video quality and framerate is dependent on the broadcaster\'s network. Our live streaming technology adjusts the video\'s resolution and framerate adapts to the capacity of the broadcaster\'s network at any given moment. By lowering the video\'s quality when the network\'s capacity goes down, we reduce the risk of interruptions in the stream."}]},{"X":[{"question":"Can I pin products or comments on the host app and CMS at the same?","answer":"Yes. However, we recommend sticking to moderating on one platform at a time."},{"question":"Can I sort products or chat on the host app and CMS at the same time?","answer":"Yes. However, we recommend sticking to moderating on one platform at a time."},{"question":"Why is my video feed not loading?","answer":"Ensure that your devices are connected to strong internet connection and that your host phone is not running any other broadcasting sources (Google Meet, Zoom), in the background."},{"question":"How do I block profanities or sensitive words in the live chat?","answer":"You can input words in the profanity filter under the Settings page. The profanity filter is not case-sensitive and you can input an unlimited number of words."},{"question":"What happens if I mute a viewer?","answer":"Your viewer will see a pop up message saying that the Admin of the show has muted them, and they will no longer see the chat box to type their messages in. They can still read the ongoing live chat and watch the live show."},{"question":"Can all viewers see the message when I Reply a viewer\'s message?","answer":"Yes, all viewers can see your reply message."}]},{"X":[{"question":"Can viewers still watch the live video recording after the live show ends?","answer":"Yes, your viewers will be able to watch the live show recording if it was saved and still embedded on your website."},{"question":"What happens if I delete a show that is still embedded on my website?","answer":"If you delete a show that was still embedded on your website, your website visitors will see a message saying that the show is not available anymore upon clicking the \'Watch Show\' button."},{"question":"At what situations will viewers see the placeholder image?","answer":"Viewers will see the placeholder image if the live show has ended but not saved."}]},{"X":[{"question":"Why can\'t I send messages on the host app?","answer":"Ensure that the mobile device of the host app has strong internet connection, and you do not have any broadcasting other apps (Google Meet, Zoom, etc) running in the background."},{"question":"What if my host phone runs out of battery in the middle of the live show?","answer":"Your live show will end and it will be saved into your CMS."},{"question":"If I\'m using an external broadcasting source, do I still need the host app?","answer":"No, you do not need the host app if you are using an external broadcasting source."},{"question":"My host forgot their log in password, how can I reset it?","answer":"You can reset passwords of host accounts in the CMS, under \'Accounts\'."},{"question":"Can multiple users log into the same host account at once?","answer":"No, for security reasons the host account can only be used in one device at a time. If another user logs into the account, the first user will automatically be logged out."}]},{"X":[{"question":"Can viewers chat on a video show?","answer":"No, viewers cannot chat in a video show."},{"question":"What\'s the difference between a video show and a live show?","answer":"You can upload prerecorded videos for a video show and there will not be any live chat. You can add products into both live shows and video shows."}]},{"X":[{"question":"What is the recommended upload speed?","answer":"We recommend that the host phone\'s upload speed is at least 7 Mbps for a high quality video feed. You may use fast.com to run a network test."},{"question":"How do I ensure my internet connection is good?","answer":"You may use fast.com to run a network test."}]},{"X":[{"question":"Why are the statistics for my recorded shows not reflected in the Analytics page?","answer":"The statistics for recorded shows will only be reflected after five minutes."},{"question":"What does the peak time graph show?","answer":"The peak time graph illustrates the moments in the live show where your engagement and viewership reached its highest."}]},{"X":[{"question":"I would like to trigger miniplayer when a user clicks on Product URL. Is there any specific rule for it?","answer":"Make sure that Product URL is the same domain as where you are embeding show script."}]}]}')}}]);