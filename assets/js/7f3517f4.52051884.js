"use strict";(self.webpackChunkiframe_doc=self.webpackChunkiframe_doc||[]).push([[6758],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,k=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6201:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(4464);n(2389);var i=["components"],u={sidebar_position:3},d="Cart integration",c={unversionedId:"integrate/cart-integration",id:"integrate/cart-integration",title:"Cart integration",description:"Shopping is love, shopping is life! To watch your favorite host and shop at the same time, it\u2019s the best you can get in life!",source:"@site/docs/integrate/cart-integration.mdx",sourceDirName:"integrate",slug:"/integrate/cart-integration",permalink:"/integrate/cart-integration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Without trigger element",permalink:"/integrate/without-trigger-element"},next:{title:"Shopify",permalink:"/integrate/shopify"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Syncing more data to player products",id:"syncing-more-data-to-player-products",level:3},{value:"Handle Add To Cart event",id:"handle-add-to-cart-event",level:3},{value:"Handle Update Cart event",id:"handle-update-cart-event",level:3},{value:"Handle Go to Checkout event",id:"handle-go-to-checkout-event",level:3},{value:"Sync the player cart",id:"sync-the-player-cart",level:3}],m={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cart-integration"},"Cart integration"),(0,l.kt)("p",null,"Shopping is love, shopping is life! To watch your favorite host and shop at the same time, it\u2019s the best you can get in life!"),(0,l.kt)("p",null,"To boost a seamless and complete live shopping experience for our LORA, we need to enable users that are watching the live shows to be able to purchase any featured products in the live show. This experience should include the entire shopping experience from choosing a product size, quantity, design, and price to adding to the shopping cart and checking out."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Your e-commerce app/platform has available methods/API endpoint for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fetching product details"),(0,l.kt)("li",{parentName:"ul"},"Adding products to the cart"),(0,l.kt)("li",{parentName:"ul"},"Updating items in the cart"),(0,l.kt)("li",{parentName:"ul"},"Checking your cart status (optional)")),(0,l.kt)("p",null,"All events below ",(0,l.kt)("strong",{parentName:"p"},"have to")," be used after ",(0,l.kt)("a",{parentName:"p",href:"/player-api#initialize"},(0,l.kt)("inlineCode",{parentName:"a"},"BeLivePlayerWidget.initilize"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'const player = BeLivePlayerWidget.initialize({\n   showId: "SHOW_ID",\n});\n// Handle player events here\n// See the examples below\n')),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("p",null,"To make use of the player cart feature, you need to handle some cart-related events. You will find the list of required events and configurations with details and examples below."),(0,l.kt)("p",null,"Required events to be handled"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYNC_PRODUCT_DATA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ADD_TO_CART")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UPDATE_ITEM_IN_CART")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CHECKOUT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SYNC_CART_STATE"))),(0,l.kt)("h3",{id:"syncing-more-data-to-player-products"},"Syncing more data to player products"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Event name:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"BeLivePlayerWidget.PlayerEventType.SYNC_PRODUCT_DATA")),(0,l.kt)("admonition",{title:"TRIGGER",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"When the viewer opens the player"))),(0,l.kt)("p",null,"When adding products in the ",(0,l.kt)("a",{parentName:"p",href:"https://lora.belive.sg"},"LORA Dashboard"),", we only store the product's title, thumbnail, brand, and a product reference. However, to use the player cart feature, you need to hydrate this product with more product details such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"More product images"),(0,l.kt)("li",{parentName:"ul"},"Variations (color, size)"),(0,l.kt)("li",{parentName:"ul"},"Prices")),(0,l.kt)("p",null,"In order to do that, you will first have to write a method that fetches the product details from your inventory. Then you can use a player API method called ",(0,l.kt)("inlineCode",{parentName:"p"},"updateProduct(...)")," in order to hydrate products in the show with extra information."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Event payload"),(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"products"),(0,l.kt)("td",null,"Contains all show's products added through the LORA dashboard.",(0,l.kt)("br",null),"Each product object includes:",(0,l.kt)("br",null),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"url")," : URL of the product"),(0,l.kt)("li",null,(0,l.kt)("code",null,"ref")," : Product reference"),(0,l.kt)("li",null,(0,l.kt)("code",null,"id")," : LORA generated ID for each product in the player. This ",(0,l.kt)("code",null,"id")," is passed as the first argument of the ",(0,l.kt)("code",null,"player.updateProduct()")," method"))),(0,l.kt)("td",null,"Array")))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example code"),(0,l.kt)("div",null,(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},"player.on(BeLivePlayerWidget.PlayerEventType.SYNC_PRODUCT_DATA, (products) => {\n   products.forEach(async ({ ref: sku, id: loraProductId }) => {\n      const yourProduct = await yourGetProductMethod(sku);\n      player.updateProduct(loraProductId, {\n         name: yourProduct.name,\n         brand: yourProduct.brand,\n         shortDescription: yourProduct.shortDescription,\n         description: yourProduct.description,\n         defaultVariantIndex: 0,\n         colors: yourProduct.colors.map(color => ({\n               sku: color.sku,\n               colorName: color.colorName,\n               colorHexCode: color.colorHexCode,\n               images: color.images,\n               sizes: color.sizes.map(size => ({\n                  name: size.name,\n                  sku: size.sku,\n                  currentPrice: size.currentPrice,\n                  originalPrice: size.originalPrice,\n               }))\n         })),\n      })\n   })\n})  \n"))),(0,l.kt)("p",null,"Find more details on ",(0,l.kt)("a",{parentName:"p",href:"/player-api#updateproduct"},"Player API Reference"),"."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"handle-add-to-cart-event"},"Handle Add To Cart event"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Event name:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"BeLivePlayerWidget.PlayerEventType.ADD_TO_CART")),(0,l.kt)("admonition",{title:"TRIGGER",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"When a viewer clicks on ",(0,l.kt)("inlineCode",{parentName:"li"},"Add to Cart")," button inside the player"))),(0,l.kt)("p",null,"In the player, the viewer will be able to add products to the player cart."),(0,l.kt)("p",null,"To reflect this event to you native cart, you will need to use your own method to add the product to the cart in the ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerEventType.ADD_TO_CART")," event handler."),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"callback(true)"),", the product will be added to the player cart."),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"callback(false)"),", an appropriate error message will appear in the player. You can also modify your own error messages."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Event payload"),(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"addedItem.sku "),(0,l.kt)("td",null,"Contains your reference to the product"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,"To inform the player cart if the process of handling the event was successful or unsuccessful"),(0,l.kt)("td",null,"Function")))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example code"),(0,l.kt)("div",null,(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},"player.on(BeLivePlayerWidget.PlayerEventType.ADD_TO_CART, (addedItem, callback) => {\n   yourAddToCartMethod(addedItem.sku)\n      .then(() => {\n         callback(true); // item successfully added to cart\n      })\n      .catch(error => {\n         if (error.type === 'out-of-stock') {\n            // Unsuccessful due to 'out of stock'\n            callback({\n               success: false,\n               reason: 'out-of-stock',\n            });\n         } else {\n            // Unsuccessful due to other problems\n            callback(false);\n         }\n      });\n}); \n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Customizing cart operations error"),(0,l.kt)("div",null,(0,l.kt)("p",null,"Sometimes you might want to customize your own error messages for ",(0,l.kt)("code",null,"ADD_TO_CART")," and ",(0,l.kt)("code",null,"UPDATE_ITEM_IN_CART")," callbacks. You can do this by passing the below object as the argument when invoking callback method:"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"Usage Example")),(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},'callback({\n   success: false,\n   reason: "custom-error",\n   message: "This is my custom error message", //edit this by your choice\n});'))),(0,l.kt)("h3",{id:"handle-update-cart-event"},"Handle Update Cart event"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Event name:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"BeLivePlayerWidget.PlayerEventType.UPDATE_ITEM_IN_CART")),(0,l.kt)("admonition",{title:"TRIGGER",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Whenever the viewer modifies quantity from the player cart"),(0,l.kt)("li",{parentName:"ul"},"Whenever the viewer adds a product to the cart that is already in the player cart"))),(0,l.kt)("p",null,"In addition to adding items to the cart, a viewer can also increase or decrease the quantity of a previously added item, or even remove the item from the cart."),(0,l.kt)("p",null,"To reflect this event to you native cart, you will need to use your own method to update the product to the native cart within the ",(0,l.kt)("code",null,"PlayerEventType.UPDATE_ITEM_IN_CART")," event handler."),(0,l.kt)("p",null,"When ",(0,l.kt)("code",null,"callback(true)"),", the product will be added to the cart."),(0,l.kt)("p",null,"When ",(0,l.kt)("code",null,"callback(false)"),", an appropriate error message will appear in the player. You can also modify your own error messages."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Event payload"),(0,l.kt)("div",null,(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Description"),(0,l.kt)("th",null,"Type"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"updatedItem.sku "),(0,l.kt)("td",null,"Contains your reference to the product"),(0,l.kt)("td",null,"String")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"updatedItem.quantity "),(0,l.kt)("td",null,"number of products with above sku currently in the player cart "),(0,l.kt)("td",null,"Integer")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"updatedItem.previousQuantity "),(0,l.kt)("td",null,"number of products with above sku previously in the player cart "),(0,l.kt)("td",null,"Integer")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"callback"),(0,l.kt)("td",null,"To inform the player cart if the process of handling the event was successful or unsuccessful"),(0,l.kt)("td",null,"Function")))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example code"),(0,l.kt)("div",null,(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},"//The user wants to change the quantity of an item in cart\nplayer.on(BeLivePlayerWidget.PlayerEventType.UPDATE_ITEM_IN_CART, (updatedItem, callback) => {\n   \n   if (updatedItem.quantity > 0) {\n      yourUpdateCartMethod({\n         sku: updatedItem.sku,\n         quantity: updatedItem.quantity,\n      })\n      .then(() => {\n         // cart update was successful\n         callback(true);\n      })\n      .catch(function(error) {\n         if (error.type === 'out-of-stock') {\n            callback({\n               success: false,\n               reason: 'out-of-stock',\n            });\n         } else {\n            callback(false);\n         }\n      });\n   }\n   // user wants to remove the product from the cart\n   if (updatedItem.quantity === 0) {\n      yourMethodToDeleteItemFromCart(updatedItem.sku)\n         .then(() => {\n            // successfully deleted item\n            callback(true);\n         })\n         .catch(() => {\n            // failed to delete item\n            callback(false);\n         });\n   }\n})\n"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Customizing cart operations error"),(0,l.kt)("div",null,(0,l.kt)("p",null,"Sometimes you might want to customize your own error messages for ",(0,l.kt)("code",null,"ADD_TO_CART")," and ",(0,l.kt)("code",null,"UPDATE_ITEM_IN_CART")," callbacks. You can do this by passing the below object as the argument when invoking callback method:"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"Usage Example")),(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},'callback({\n   success: false,\n   reason: "custom-error",\n   message: "This is my custom error message", //edit this by your choice\n});'))),(0,l.kt)("h3",{id:"handle-go-to-checkout-event"},"Handle Go to Checkout event"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Event name:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"BeLivePlayerWidget.PlayerEventType.CHECKOUT")),(0,l.kt)("admonition",{title:"TRIGGER",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},'Whenever a viewer clicks the "Checkout" button inside the player cart'))),(0,l.kt)("p",null,"When the viewer is happy with their shopping cart, they can click the ",(0,l.kt)("strong",{parentName:"p"},"Checkout")," button inside the player cart."),(0,l.kt)("p",null,"To handle that, you should specify the location of your website cart inside ",(0,l.kt)("inlineCode",{parentName:"p"},"PlayerEventType.CHECKOUT"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example code"),(0,l.kt)("div",null,(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},'player.on(BeLivePlayerWidget.PlayerEventType.CHECKOUT, () => {\n  player.showCheckout(window.location.origin + "/cart");\n});\n'))),(0,l.kt)("h3",{id:"sync-the-player-cart"},"Sync the player cart"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Event name:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"BeLivePlayerWidget.PlayerEventType.SYNC_CART_STATE")),(0,l.kt)("admonition",{title:"TRIGGER",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Whenever the viewer navigates back to the player"))),(0,l.kt)("p",null,"Currently, the update cart does not support anything more than emptying the player cart."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Example code"),(0,l.kt)("div",null,(0,l.kt)(o.Z,{language:"js",mdxType:"CodeBlock"},"player.on(BeLivePlayerWidget.PlayerEventType.SYNC_CART_STATE, () => {\n   // Use your method to check cart state\n   yourMethodToGetCartItems().then((yourCartItems) => {\n      if (yourCartItems.length > 0) {\n         player.updateCart(\n            yourCartItems.map((yourCartItemData) => ({\n               sku: yourCartItemData.sku,\n               quantity: yourCartItemData.quantity,\n               imageUrl: yourCartItemData.imageUrl,\n               name: yourCartItemData.name,\n               description: yourCartItemData.description,\n               currentPrice: yourCartItemData.currentPrice,\n               originalPrice: yourCartItemData.originalPrice,\n               sizeName: yourCartItemData.sizeName,\n               colorName: yourCartItemData.colorName,\n            }))\n         );\n      } else {\n         // Emptying the in-player cart\n         player.updateCart([]);\n      }\n   });\n});\n         "))))}k.isMDXComponent=!0}}]);