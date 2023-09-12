"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[972],{3066:function(e,t,a){a.r(t),a.d(t,{Table:function(){return k},assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),i=a(7294),l=a(3905),o=a(6066),p=["components"],d={sidebar_position:6},s="Player API",u={unversionedId:"player-api",id:"player-api",title:"Player API",description:"BeLivePlayerWidget",source:"@site/docs/player-api.mdx",sourceDirName:".",slug:"/player-api",permalink:"/player-api",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"player",previous:{title:"Example",permalink:"/example"},next:{title:"Frequently Asked Questions",permalink:"/faq"}},c={},m=[{value:"BeLivePlayerWidget",id:"beliveplayerwidget",level:2},{value:"<code>initialize</code>",id:"initialize",level:3},{value:"<code>PlayerEventType</code>",id:"playereventtype",level:3},{value:"<code>.READY</code>",id:"ready",level:4},{value:"<code>.CLOSE</code>",id:"close",level:4},{value:"<code>.NAVIGATE</code>",id:"navigate",level:4},{value:"<code>.MINIMIZED</code>",id:"minimized",level:4},{value:"<code>.UNMINIMIZED</code>",id:"unminimized",level:4},{value:"<code>NavigationMode</code>",id:"navigationmode",level:3},{value:"<code>.IFRAME</code>",id:"iframe",level:4},{value:"<code>.MANUAL</code>",id:"manual",level:4},{value:"<code>Button</code>",id:"button",level:3},{value:"<code>.MINIMIZE</code>",id:"minimize",level:4},{value:"<code>.CLOSE</code>",id:"close-1",level:4},{value:"<code>.LINK</code>",id:"link",level:4},{value:"PlayerWidget methods",id:"playerwidget-methods",level:2},{value:"<code>open()</code>",id:"open",level:3},{value:"<code>setUser(userCredential)</code>",id:"setuserusercredential",level:3},{value:"<code>minimize()</code>",id:"minimize-1",level:3},{value:"<code>unminimize()</code>",id:"unminimize",level:3},{value:"<code>close()</code>",id:"close-2",level:3},{value:"<code>on(eventName,callback)</code>",id:"oneventnamecallback",level:3},{value:"<code>off(eventName,callback)</code>",id:"offeventnamecallback",level:3},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",level:3},{value:"<code>showCheckout(url)</code>",id:"showcheckouturl",level:3},{value:"<code>updateCart(cartData)</code>",id:"updatecartcartdata",level:3},{value:"<code>updateProduct(productId, productDetail)</code>",id:"updateproductproductid-productdetail",level:3},{value:"Interfaces",id:"interfaces",level:2},{value:"<code>PlayerWidgetOption</code>",id:"playerwidgetoption",level:3},{value:"<code>ProductDetail</code>",id:"productdetail",level:3},{value:"<code>ProductColor</code>",id:"productcolor",level:4},{value:"<code>ProductSize</code>",id:"productsize",level:4},{value:"<code>UserCredential</code>",id:"usercredential",level:3}],k=function(e){var t=void 0===e?{}:e,a=t.id,n=t.data,r=void 0===n?[]:n,i=t.headers,o=void 0===i?[]:i;return(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,o.map((function(e,t){return(0,l.kt)("td",{key:"header-"+a+"-"+t},(0,l.kt)("b",null,e))})))),(0,l.kt)("tbody",null,r.map((function(e,t){return(0,l.kt)("tr",{key:"row-"+a+"-"+t},e.map((function(e,n){return(0,l.kt)("td",{key:"col-"+a+"-"+t+"-"+n},e)})))}))))},g={toc:m,Table:k};function h(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"player-api"},"Player API"),(0,l.kt)("h2",{id:"beliveplayerwidget"},"BeLivePlayerWidget"),(0,l.kt)("h3",{id:"initialize"},(0,l.kt)("inlineCode",{parentName:"h3"},"initialize")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"initialize(option: PlayerWidgetOption): PlayerWidget\n")),(0,l.kt)("p",null,"Initialize the widget and return the ",(0,l.kt)("a",{parentName:"p",href:"#playerwidget-methods"},"PlayerWidget")," instance"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"option"),": ",(0,l.kt)("a",{parentName:"strong",href:"#playerwidgetoption"},"PlayerWidgetOption")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"#playerwidget-methods"},"PlayerWidget"))),(0,l.kt)("h3",{id:"playereventtype"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlayerEventType")),(0,l.kt)("p",null,"An enumeration describing general events sent from the ",(0,l.kt)("a",{parentName:"p",href:"#playerwidget-api"},"Player"),".\nTo listen to events, use ",(0,l.kt)("a",{parentName:"p",href:"#on"},"PlayerWidget.on"),"."),(0,l.kt)("h4",{id:"ready"},(0,l.kt)("inlineCode",{parentName:"h4"},".READY")),(0,l.kt)("p",null,"Callback when player GUI is ready for any interactions"),(0,l.kt)("h4",{id:"close"},(0,l.kt)("inlineCode",{parentName:"h4"},".CLOSE")),(0,l.kt)("p",null,"Callback when users closed the player"),(0,l.kt)("h4",{id:"navigate"},(0,l.kt)("inlineCode",{parentName:"h4"},".NAVIGATE")),(0,l.kt)("p",null,"Callback when users navigate to a specific product url"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Only available when ",(0,l.kt)("a",{parentName:"p",href:"#navigationmode"},(0,l.kt)("strong",{parentName:"a"},"navigationMode"))," in ",(0,l.kt)("a",{parentName:"p",href:"#playerwidgetoption"},(0,l.kt)("strong",{parentName:"a"},"PlayerWidgetOption"))," is set to ",(0,l.kt)("a",{parentName:"p",href:"#manual"},(0,l.kt)("strong",{parentName:"a"},"BeLivePlayerWidget.NavigationMode.MANUAL")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#navigationdata"},(0,l.kt)("strong",{parentName:"a"},"NavigationData")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const player = BeLivePlayerWidget.initialize({\n   // rest of the configuration\n   // highlight-start\n   navigationMode: BeLivePlayerWidget.NavigationMode.MANUAL,\n   // highlight-end\n});\n\nplayer.on(BeLivePlayerWidget.PlayerEventType.NAVIGATE, (navigationData) => {\n   /*\n    * Triggered when a product is clicked.\n    *\n    * **navigationData.url** holds the targeted url specific in Bambuser Dashboard\n    *\n    * 1. Change url inside browser address bar\n    * eg. history.pushState({}, null, navigationData.url)\n    *\n    * 2. Load page content without reloading the page\n    * eg. Use React Router, AJAX , ...\n    *\n    */\n   // Your codes here\n});\n")),(0,l.kt)("h4",{id:"minimized"},(0,l.kt)("inlineCode",{parentName:"h4"},".MINIMIZED")),(0,l.kt)("p",null,"Callback when player is minimized"),(0,l.kt)("h4",{id:"unminimized"},(0,l.kt)("inlineCode",{parentName:"h4"},".UNMINIMIZED")),(0,l.kt)("p",null,"Callback when player is unminimized"),(0,l.kt)("h3",{id:"navigationmode"},(0,l.kt)("inlineCode",{parentName:"h3"},"NavigationMode")),(0,l.kt)("p",null,"An enumeration describing how users should be navigated\nThis will use to to specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"navigationMode")," in ",(0,l.kt)("a",{parentName:"p",href:"#playerwidgetoption"},(0,l.kt)("strong",{parentName:"a"},"PlayerWidgetOption"))),(0,l.kt)("h4",{id:"iframe"},(0,l.kt)("inlineCode",{parentName:"h4"},".IFRAME")),(0,l.kt)("p",null,"reload the overlay iframe (merchant website)"),(0,l.kt)("h4",{id:"manual"},(0,l.kt)("inlineCode",{parentName:"h4"},".MANUAL")),(0,l.kt)("p",null,"emit an event to the ",(0,l.kt)("a",{parentName:"p",href:"#playereventtype"},(0,l.kt)("strong",{parentName:"a"},"PlayerEventType.NAVIGATE"))," listener"),(0,l.kt)("h3",{id:"button"},(0,l.kt)("inlineCode",{parentName:"h3"},"Button")),(0,l.kt)("p",null,"Used to dictate the functionality of certain buttons inside the player.",(0,l.kt)("br",null),"\nTo customize buttons behave in the player use ",(0,l.kt)("inlineCode",{parentName:"p"},"buttons")," in ",(0,l.kt)("a",{parentName:"p",href:"#playerwidgetoption"},(0,l.kt)("strong",{parentName:"a"},"PlayerWidgetOption")),(0,l.kt)("br",null),"\nIt includes the below behavior options:"),(0,l.kt)("h4",{id:"minimize"},(0,l.kt)("inlineCode",{parentName:"h4"},".MINIMIZE")),(0,l.kt)("p",null,"Minimize the player and act accordingly for minimized context."),(0,l.kt)("h4",{id:"close-1"},(0,l.kt)("inlineCode",{parentName:"h4"},".CLOSE")),(0,l.kt)("p",null,"Close the player overlay."),(0,l.kt)("h4",{id:"link"},(0,l.kt)("inlineCode",{parentName:"h4"},".LINK")),(0,l.kt)("p",null,"The button should behave like a link, relative to the current context. Opens the product URL/ checkout URL in a new browser tab."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example:")),(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},"BeLivePlayerWidget.initialize({\n   buttons: {\n     // Set dismiss button behavior using a constant\n     // highlight-start\n     dismiss: BeLivePlayerWidget.Button.CLOSE,\n     // highlight-end\n   },\n})"),(0,l.kt)("h2",{id:"playerwidget-methods"},"PlayerWidget methods"),(0,l.kt)("h3",{id:"open"},(0,l.kt)("inlineCode",{parentName:"h3"},"open()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"open(showId?: string): PlayerWidget\n")),(0,l.kt)("p",null,"Open the player widget"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"showId: string")),"\nA unique ID of the live show that was created from LORA Dashboard\nDefaults to ",(0,l.kt)("a",{parentName:"li",href:"#playerwidgetoption"},(0,l.kt)("strong",{parentName:"a"},"PlayerWidgetOption.showId")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"#playerwidget-methods"},"PlayerWidget"))),(0,l.kt)("h3",{id:"setuserusercredential"},(0,l.kt)("inlineCode",{parentName:"h3"},"setUser(userCredential)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"setUser(user: UserCredential): PlayerWidget\n")),(0,l.kt)("p",null,"Set user credential"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"user")),": ",(0,l.kt)("a",{parentName:"li",href:"#usercredential"},(0,l.kt)("strong",{parentName:"a"},"UserCredential")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"#playerwidget-methods"},"PlayerWidget"))),(0,l.kt)("h3",{id:"minimize-1"},(0,l.kt)("inlineCode",{parentName:"h3"},"minimize()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"minimize(): void\n")),(0,l.kt)("p",null,"Minimizes the player"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h3",{id:"unminimize"},(0,l.kt)("inlineCode",{parentName:"h3"},"unminimize()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"unminimize(): void\n")),(0,l.kt)("p",null,"Maximizes the player when it's minimized"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h3",{id:"close-2"},(0,l.kt)("inlineCode",{parentName:"h3"},"close()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"close(): void\n")),(0,l.kt)("p",null,"Close the player widget"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h3",{id:"oneventnamecallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"on(eventName,callback)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"on<K>(name: K, fn: (payload: PlayerEventMap[K]) => void): PlayerWidget\n")),(0,l.kt)("p",null,"Adds an event listener to the player. ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerEventMap")," is a computed type which maps event names to their payloads."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"name: K")),"\nThe name of the event. Available events include ",(0,l.kt)("a",{parentName:"li",href:"#playereventtype"},"PlayerEventType")," events."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"fn: (payload: PlayerEventMap[K]) => void")),"\nThe handler function.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"#playerwidget-methods"},"PlayerWidget"))),(0,l.kt)("h3",{id:"offeventnamecallback"},(0,l.kt)("inlineCode",{parentName:"h3"},"off(eventName,callback)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"off<K>(name: K, fn: (payload: PlayerEventMap[K]) => void): PlayerWidget\n")),(0,l.kt)("p",null,"Removes an event listener from the player. ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerEventMap")," is a computed type which maps event names to their payloads."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"name: K")),"\nThe name of the event. Available events include ",(0,l.kt)("a",{parentName:"li",href:"#playereventtype"},"PlayerEventType")," events."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"fn: (payload: PlayerEventMap[K]) => void")),"\nThe handler function.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"#playerwidget-methods"},"PlayerWidget"))),(0,l.kt)("h3",{id:"removealllisteners"},(0,l.kt)("inlineCode",{parentName:"h3"},"removeAllListeners()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"removeAllListeners(): void\n")),(0,l.kt)("p",null,"Removes all event listeners defined by ",(0,l.kt)("a",{parentName:"p",href:"#on"},"PlayerWidget.on")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("h3",{id:"showcheckouturl"},(0,l.kt)("inlineCode",{parentName:"h3"},"showCheckout(url)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"showCheckout(url: string): void\n")),(0,l.kt)("p",null,"Navigate to a checkout page (or any other pages) when invoked."),(0,l.kt)("p",null,"This method uses the checkout button configuration to determine how to navigate to the target page. If no configuration is provided, it opens the URL in a new tab."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"checkout: BeLivePlayerWidget.Button.MINIMIZE")),(0,l.kt)("br",null),"\nMinimizes the player and opens the link on the same window")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"checkout: BeLivePlayerWidget.Button.LINK")),(0,l.kt)("br",null),"\nOpens the link in a new tab"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'player.on(BeLivePlayerWidget.PlayerEventType.CHECKOUT, () => {\n   player.showCheckout("https://example.com/checkout");\n});\n')),(0,l.kt)("h3",{id:"updatecartcartdata"},(0,l.kt)("inlineCode",{parentName:"h3"},"updateCart(cartData)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"updateCart(cartData: CartItem[]): void\n")),(0,l.kt)("p",null,"Update the player cart state."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"cartData:")," ",(0,l.kt)("a",{parentName:"strong",href:"#cartitem"},"CartItem[]")),(0,l.kt)("br",{parentName:"li"}),"An array of cart item")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"player.on(BeLivePlayerWidget.PlayerEventType.SYNC_CART_STATE, () => {\n   // Use your method to check cart state\n   yourMethodToGetCartItems().then((yourCartItems) => {\n      if (yourCartItems.length > 0) {\n         player.updateCart(\n            yourCartItems.map((yourCartItemData) => ({\n               sku: yourCartItemData.sku,\n               quantity: yourCartItemData.quantity,\n               imageUrl: yourCartItemData.imageUrl,\n               name: yourCartItemData.name,\n               description: yourCartItemData.description,\n               currentPrice: yourCartItemData.currentPrice,\n               originalPrice: yourCartItemData.originalPrice,\n               sizeName: yourCartItemData.sizeName,\n               colorName: yourCartItemData.colorName,\n            }))\n         );\n      } else {\n         // Emptying the in-player cart\n         player.updateCart([]);\n      }\n   });\n});\n")),(0,l.kt)("h3",{id:"updateproductproductid-productdetail"},(0,l.kt)("inlineCode",{parentName:"h3"},"updateProduct(productId, productDetail)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"updateProduct(productId: string, productDetail: Product): void\n")),(0,l.kt)("p",null,"Updates all necessary product details that allow the player to properly display a product."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"productId: string")),(0,l.kt)("br",{parentName:"li"}),"The LORA generated ID for each product of a show. Found in the ",(0,l.kt)("inlineCode",{parentName:"li"},"SYNC_PRODUCT_DATA")," event payload."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"productDetail"),": ",(0,l.kt)("a",{parentName:"strong",href:"#productdetail"},"ProductDetail")),(0,l.kt)("br",{parentName:"li"}),"Product details that allow the player to properly display a product")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns")," ",(0,l.kt)("em",{parentName:"p"},"void")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"player.on(BeLivePlayerWidget.PlayerEventType.SYNC_PRODUCT_DATA, (products) => {\n   products.forEach(async ({ ref: sku, id: loraProductId }) => {\n      const yourProduct = await yourGetProductMethod(sku);\n      player.updateProduct(loraProductId, {\n         name: yourProduct.name,\n         brand: yourProduct.brand,\n         shortDescription: yourProduct.shortDescription,\n         description: yourProduct.description,\n         defaultVariantIndex: 0,\n         colors: yourProduct.colors.map((color) => ({\n            name: color.name,\n            sku: color.sku,\n            colorName: color.colorName,\n            colorHexCode: color.colorHexCode,\n            images: color.images,\n            sizes: color.sizes.map((size) => ({\n               name: size.name,\n               sku: size.sku,\n               currentPrice: size.currentPrice,\n               originalPrice: size.originalPrice,\n            })),\n         })),\n      });\n   });\n});\n")),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("h3",{id:"playerwidgetoption"},(0,l.kt)("inlineCode",{parentName:"h3"},"PlayerWidgetOption")),(0,l.kt)("p",null,"Player configuration options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type PlayerWidgetOption = {\n   showId?: string;\n   triggerElement?: HTMLElement;\n   navigationMode?: NavigationMode;\n   buttons?: {\n      dismiss?: Button;\n      checkout?: Button;\n   };\n};\n")),(0,l.kt)(k,{id:"PlayerWidgetOption",headers:["Properties","Description","Type"],data:[["showId","A unique ID of the live show that was created from LORA Dashboard.","String"],["triggerElement","An element that opens the player on click event","HTMLElement"],["navigationMode",(0,l.kt)(i.Fragment,null,"The navigation behaviour when the user clicks on a product link.",(0,l.kt)("br",null),"Defaults to\xa0",(0,l.kt)("a",{href:"#navigationmode"},(0,l.kt)("strong",null,"BeLivePlayerWidget.NavigationMode.IFRAME"))),(0,l.kt)(i.Fragment,null,(0,l.kt)("a",{href:"#navigationmode"},(0,l.kt)("strong",null,"NavigationMode")))],["buttons",(0,l.kt)(i.Fragment,null,"Configures how buttons behave in the player. ",(0,l.kt)("br",null),"Reference:\xa0",(0,l.kt)("a",{href:"#button"},(0,l.kt)("strong",null,"BeLivePlayerWidget.Button")),",\xa0",(0,l.kt)("a",{href:"#showcheckout"},(0,l.kt)("code",null,"showCheckout()"))),"Object"]],mdxType:"Table"}),(0,l.kt)("h3",{id:"productdetail"},(0,l.kt)("inlineCode",{parentName:"h3"},"ProductDetail")),(0,l.kt)("p",null,"Product details that allow the player to properly display a product"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type Product = {\n   name?: string;\n   sku: string;\n   brand?: string;\n   shortDescription?: string;\n   description?: string;\n   defaultVariantIndex: number;\n   colors?: ProductColor[];\n};\n")),(0,l.kt)(k,{id:"ProductDetail",headers:["Properties","Description","Type"],data:[["name"," Name of the product.","String"],["sku",(0,l.kt)(i.Fragment,null,"sku (or any other identifier for your product)",(0,l.kt)("br",null),"NOTE: Should be the same as your product reference defined in LORA Dashboard)",(0,l.kt)("br",null)),"String"],["brand","(Optional) Brand name to display for the product","String"],["shortDescription","(Optional) Short product introductory text ","String"],["description","(Optional) Description for the product","String"],["defaultVariantIndex",(0,l.kt)(i.Fragment,null,"Describes which index in the variations list below contains the default variation",(0,l.kt)("br",null),"e.g. if variations contain colors, and you want to display the white version of a shirt, send the index for the white variation"),"Number"],["colors","List of colors for the variations",(0,l.kt)(i.Fragment,null,(0,l.kt)("a",{href:"#productcolor"},(0,l.kt)("strong",null,"ProductColor[]")))]],mdxType:"Table"}),(0,l.kt)("h4",{id:"productcolor"},(0,l.kt)("inlineCode",{parentName:"h4"},"ProductColor")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ProductColor = {\n   sku?: string;\n   colorName?: string;\n   colorHexCode?: string;\n   images?: string[];\n   sizes?: ProductSize[];\n};\n")),(0,l.kt)(k,{id:"ProductColor",headers:["Properties","Description","Type"],data:[["sku","sku (or any other identifier for your product) specific down to this variation","String"],["colorName","Color name in the variation dropdown selector","String"],["colorHexCode","(Optional) Color Hex code e.g. '#db0b5b'","String"],["images","List of image urls for the variation ordered the same as you want it displayed","String[]"],["sizes","List of sizes for the variations",(0,l.kt)(i.Fragment,null,(0,l.kt)("a",{href:"#productsize"},(0,l.kt)("strong",null,"ProductSize[]")))]],mdxType:"Table"}),(0,l.kt)("h4",{id:"productsize"},(0,l.kt)("inlineCode",{parentName:"h4"},"ProductSize")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ProductSize = {\n   sku?: string;\n   name?: string;\n   currentPrice?: number;\n   originalPrice?: number;\n};\n")),(0,l.kt)(k,{id:"ProductSize",headers:["Properties","Description","Type"],data:[["sku","sku (or any other identifier for your product) specific down to this size (used for add-to-cart)","String"],["name","Name of the size (used in dropdowns)","String"],["currentPrice","current price as a number","Number"],["originalPrice","(Optional) original price. Used in case the current is a sale price","Number"]],mdxType:"Table"}),(0,l.kt)("h3",{id:"usercredential"},(0,l.kt)("inlineCode",{parentName:"h3"},"UserCredential")),(0,l.kt)("p",null,"User information that will use for tracking purposes and displaying in live chat"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type UserCredential = {\n   id?: string;\n   displayName?: string;\n};\n")),(0,l.kt)(k,{id:"UserCredential",headers:["Properties","Description","Type"],data:[["id","A unique ID of a user that will use for tracking purposes","String"],["displayName","User display name that will use for tracking purposes and displaying in live chat","String"]],mdxType:"Table"}))}h.isMDXComponent=!0}}]);