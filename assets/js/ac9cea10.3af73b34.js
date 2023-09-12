"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[2153],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2257:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={displayed_sidebar:"sdkSidebar"},d="Android Integration",u={unversionedId:"sdk/android/getting-started",id:"sdk/android/getting-started",title:"Android Integration",description:"LORA Short Video is an external LORA SDK module that can be used independently.",source:"@site/docs/sdk/android/getting-started.mdx",sourceDirName:"sdk/android",slug:"/sdk/android/getting-started",permalink:"/sdk/android/getting-started",draft:!1,tags:[],version:"current",frontMatter:{displayed_sidebar:"sdkSidebar"},sidebar:"sdkSidebar",previous:{title:"delegates",permalink:"/sdk/ios/shortVideoView/delegates"},next:{title:"ShortVideoView",permalink:"/sdk/android/shortVideoView/getting-started"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Project setup",id:"project-setup",level:3},{value:"Initialize the SDK",id:"initialize-the-sdk",level:3}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"android-integration"},"Android Integration"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"LORA Short Video is an external LORA SDK module that can be used independently."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Video Grid View"),(0,a.kt)("li",{parentName:"ul"},"Video Carousel View"),(0,a.kt)("li",{parentName:"ul"},"Video Story Block View"),(0,a.kt)("li",{parentName:"ul"},"Video Detail Player"),(0,a.kt)("li",{parentName:"ul"},"Playlist"),(0,a.kt)("li",{parentName:"ul"},"PiP")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"project-setup"},"Project setup"),(0,a.kt)("p",null,"The Short Video module requires a LORA core module, LORA common module, and other third-party libraries to function properly."),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},"    // sdk aar files & required dependencies\n    implementation (name:'lora-core-release', ext:'aar')\n    implementation (name:'lora-common-release', ext:'aar')\n    implementation (name:'lora-shortvideo-release', ext:'aar')\n    implementation 'io.insert-koin:koin-android:3.4.0'\n    implementation 'androidx.media3:media3-exoplayer:1.0.2'\n    implementation 'androidx.media3:media3-ui:1.0.2'\n    implementation 'androidx.media3:media3-exoplayer-hls:1.0.2'\n    implementation \"com.squareup.retrofit2:retrofit:2.9.0\"\n    implementation \"com.squareup.retrofit2:converter-gson:2.9.0\"\n    implementation \"com.squareup.okhttp3:logging-interceptor:4.9.0\"\n    implementation 'com.github.bumptech.glide:glide:4.15.1'\n    kapt 'com.github.bumptech.glide:compiler:4.15.1'\n")),(0,a.kt)("h3",{id:"initialize-the-sdk"},"Initialize the SDK"),(0,a.kt)("p",null,"The LORA SDK requires a license key for initialization. Please contact us for information about this key."),(0,a.kt)("p",null,"Use the following code to initialize the SDK. You can place it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreate")," of the main screen or in the application class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val loraSdkProvider = LoraSdkProvider(context)\nloraSdkProvider.init(LICENSE_KEY)\n")))}m.isMDXComponent=!0}}]);