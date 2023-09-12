"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[8887],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,_=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(_,i(i({ref:t},u),{},{components:r})):n.createElement(_,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4343:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},s="Integrate with Carthage",l={unversionedId:"sdk/ios/integration/carthage",id:"sdk/ios/integration/carthage",title:"Integrate with Carthage",description:"_",source:"@site/docs/sdk/ios/integration/carthage.mdx",sourceDirName:"sdk/ios/integration",slug:"/sdk/ios/integration/carthage",permalink:"/sdk/ios/integration/carthage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"Integrate with CocoaPods",permalink:"/sdk/ios/integration/cocoaPods"},next:{title:"ShortVideoView",permalink:"/sdk/ios/shortVideoView/getting-started"}},u={},p=[{value:"Step 1 : Add frameworks",id:"step-1--add-frameworks",level:2},{value:"Step 2 : Update <strong>Cartfile</strong>",id:"step-2--update-cartfile",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrate-with-carthage"},"Integrate with Carthage"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ShortVideoSDK")," is distributed via ",(0,o.kt)("strong",{parentName:"p"},"xcframework")," which is recommended by Apple since WWDC 2019"),(0,o.kt)("h2",{id:"step-1--add-frameworks"},"Step 1 : Add frameworks"),(0,o.kt)("p",null,"Drag ",(0,o.kt)("inlineCode",{parentName:"p"},"LoraCore.xcframework")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LoraShortVideo.xcframework")," into ",(0,o.kt)("strong",{parentName:"p"},"Frameworks, Libraries, and\nEmbeded Contents"),"  and Select ",(0,o.kt)("strong",{parentName:"p"},"Embeded & Sign")),(0,o.kt)("h2",{id:"step-2--update-cartfile"},"Step 2 : Update ",(0,o.kt)("strong",{parentName:"h2"},"Cartfile")),(0,o.kt)("p",null,"You may encounter the build error or get crash: ",(0,o.kt)("inlineCode",{parentName:"p"},"dyld: Symbol not found")," on Xcode 12 and above when\nusing ",(0,o.kt)("strong",{parentName:"p"},"xcframework"),". Here is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/blob/master/Documentation/Xcode12Workaround.md"},"workaround")," to fix this issue"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create file ",(0,o.kt)("inlineCode",{parentName:"li"},"carthage.sh")," in your root project folder with this content")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# carthage.sh\n# Usage example: ./carthage.sh build --platform iOS\n\nset -euo pipefail\n\nxcconfig=$(mktemp /tmp/static.xcconfig.XXXXXX)\ntrap 'rm -f \"$xcconfig\"' INT TERM HUP EXIT\n\n# For Xcode 12 make sure EXCLUDED_ARCHS is set to arm architectures\notherwise\n# the build will fail on lipo due to duplicate architectures.\n\nCURRENT_XCODE_VERSION=\"$(xcodebuild -version | grep \"Xcode\" | cut -d' ' -\nf2 | cut -d'.' -f1)00\"\nCURRENT_XCODE_BUILD=$(xcodebuild -version | grep \"Build version\" | cut -d'\n' -f3)\n\necho\n\"EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_simulator__NATIVE_ARCH_64_BIT_x\n86_64__XCODE_${CURRENT_XCODE_VERSION}__BUILD_${CURRENT_XCODE_BUILD} =\narm64 arm64e armv7 armv7s armv6 armv8\" >> $xcconfig\n\necho\n'EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_simulator__NATIVE_ARCH_64_BIT_x\n86_64__XCODE_'${CURRENT_XCODE_VERSION}' =\n$(EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_simulator__NATIVE_ARCH_64_BIT_\nx86_64__XCODE_$(XCODE_VERSION_MAJOR)__BUILD_$(XCODE_PRODUCT_BUILD_VERSION)\n)' >> $xcconfig\necho 'EXCLUDED_ARCHS = $(inherited)\n$(EXCLUDED_ARCHS__EFFECTIVE_PLATFORM_SUFFIX_$(EFFECTIVE_PLATFORM_SUFFIX)__\nNATIVE_ARCH_64_BIT_$(NATIVE_ARCH_64_BIT)__XCODE_$(XCODE_VERSION_MAJOR))'\n>> $xcconfig\n\n# build all libraries for distribution\n# https://github.com/Carthage/Carthage/issues/\necho 'BUILD_LIBRARY_FOR_DISTRIBUTION=YES' >> $xcconfig\n\nexport XCODE_XCCONFIG_FILE=\"$xcconfig\"\ncarthage \"$@\"\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add run permission to this file by ",(0,o.kt)("inlineCode",{parentName:"li"},"chmod +x carthage.sh")),(0,o.kt)("li",{parentName:"ul"},"Instead of running ",(0,o.kt)("inlineCode",{parentName:"li"},"carthage")," command, we'll change to run ",(0,o.kt)("inlineCode",{parentName:"li"},"carthage.sh"),". Eg: ",(0,o.kt)("inlineCode",{parentName:"li"},"sh carthage.sh\nupdate --platform iOS --no-use-binaries --use-xcframeworks"))))}m.isMDXComponent=!0}}]);