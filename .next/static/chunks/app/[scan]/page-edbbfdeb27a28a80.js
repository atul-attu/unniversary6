(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{6006:function(e,n,s){Promise.resolve().then(s.bind(s,6328))},5601:function(e,n){"use strict";function s(){return null}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return s}}),("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},4930:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return i}});let l=s(6921);s(3827),s(4090);let r=l._(s(4795));function i(e,n){let s={loading:e=>{let{error:n,isLoading:s,pastDelay:l}=e;return null}};return"function"==typeof e&&(s.loader=e),(0,r.default)({...s,...n})}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},7447:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{getImageProps:function(){return a},default:function(){return c}});let l=s(6921),r=s(8630),i=s(1749),t=l._(s(536)),a=e=>{let{props:n}=(0,r.getImgProps)(e,{defaultLoader:t.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(n))void 0===s&&delete n[e];return{props:n}},c=i.Image},9721:function(e,n,s){"use strict";function l(e){let{reason:n,children:s}=e;return s}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"BailoutToCSR",{enumerable:!0,get:function(){return l}}),s(9775)},4795:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});let l=s(3827),r=s(4090),i=s(9721);function t(e){var n;return{default:null!=(n=null==e?void 0:e.default)?n:e}}let a={loader:()=>Promise.resolve(t(()=>null)),loading:null,ssr:!0},c=function(e){let n={...a,...e},s=(0,r.lazy)(()=>n.loader().then(t)),c=n.loading;function d(e){let t=c?(0,l.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,a=n.ssr?(0,l.jsx)(s,{...e}):(0,l.jsx)(i.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(s,{...e})});return(0,l.jsx)(r.Suspense,{fallback:t,children:a})}return d.displayName="LoadableComponent",d}},6328:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return u}});var l=s(3827),r=s(7907);s(5601),s(7447);var i=s(8792),t=s(7908);s(4930);var a=s(4090),c=s(9941),d=s(7385),o=s.n(d);function u(e){let{params:n}=e;(0,r.useRouter)(),n.scan;let[s,d]=(0,a.useState)(""),[u,h]=(0,a.useState)(""),[j,x]=(0,a.useState)(""),[p,f]=(0,a.useState)(""),[g,m]=(0,a.useState)([]);(0,a.useRef)(null);let[b,y]=(0,a.useState)(),[S,v]=(0,a.useState)(),[A,_]=(0,a.useState)(),[w,O]=(0,a.useState)(),[P,R]=(0,a.useState)(),[N,k]=(0,a.useState)(),[M,C]=(0,a.useState)(!1),[I,B]=(0,a.useState)(!0),[E,U]=(0,a.useState)({}),[T,V]=(0,a.useState)(!1),[J,K]=(0,a.useState)(!1);(0,r.useRouter)();let Q=async e=>{let n=localStorage.getItem("unniversary"),s=JSON.parse(n);if(console.log("current login",n),e){let n=JSON.stringify(e);if(console.log(e,"text2",n[9]),console.log("test data"),"6"===n[9]){console.log("suscess");let e={scanQr:"yes",number:s.phonenumber};console.log(e);let n=await t.Z.post("https://unniversary.ujustconnect.com/QRScan.php",e).catch(e=>console.log("Error: ",e));n&&n.data&&(console.log(n,"scan done"),console.log(n.data))}}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:"wrapperScan",style:{backgroundImage:"url(".concat(c.Z.src,")")},children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)("img",{src:"/universary.svg"})}),T?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"welcomemessage",children:(0,l.jsx)("img",{src:"/Tagline.png"})}),(0,l.jsxs)("div",{className:"programsequence",children:[(0,l.jsx)("h2",{children:"Trajectory"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Ganesh Vandana"}),(0,l.jsx)("p",{children:"Prarthana by Ashwin Joshi"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Welcome Note"}),(0,l.jsx)("p",{children:"Abhishek and Gaurav"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Journey"}),(0,l.jsx)("p",{children:"Journey Video"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Value Introduction"}),(0,l.jsx)("p",{children:"Poem by Sonali Korde "})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Integrity"}),(0,l.jsx)("p",{children:"Song by Rajendra Bhide"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Responsible"}),(0,l.jsx)("p",{children:"Song by Rajendra Bhide"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Selfless"}),(0,l.jsx)("p",{children:"Song by Satish Thampi"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Award"}),(0,l.jsx)("p",{children:"Most Exploring Orbiter"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Fairness"}),(0,l.jsx)("p",{children:"Poem by Rupali Kamat / Song by Kishore Hegde"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Inclusive"}),(0,l.jsx)("p",{children:"Song by Sudhakar Patole"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Openness"}),(0,l.jsx)("p",{children:"Dance by Minal Govalkar"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Award "}),(0,l.jsx)("p",{children:"Most Responsible Cosmonaut"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Authenticity "}),(0,l.jsx)("p",{children:"Game activity by Smita Kadu"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Caring "}),(0,l.jsx)("p",{children:"Poem by Kanchan Utekar"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Awareness "}),(0,l.jsx)("p",{children:"Magic Show by Deepak Pande"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Award "}),(0,l.jsx)("p",{children:"Most Selfless Propeller"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Explore "}),(0,l.jsx)("p",{children:"Game activity by Smita Kadu"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Communication "}),(0,l.jsx)("p",{children:"Standup performance by Rashmi Agaskar"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Bold "}),(0,l.jsx)("p",{children:"Supernova Walk"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Award  "}),(0,l.jsx)("p",{children:"The ContriOrbitor"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Nucleus Team  "}),(0,l.jsx)("p",{children:"Journey / Rewards & Recongnization"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Something + Business"}),(0,l.jsx)("p",{children:"By Founders"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Open Space"}),(0,l.jsx)("p",{children:"Open Space"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h6",{children:"Dinner"}),(0,l.jsx)("p",{children:"Dinner"})]})]})]})]}):(0,l.jsxs)("div",{className:"QrcodeContainer",children:[(0,l.jsx)(o(),{delay:300,style:{width:"100%"},onError:e=>{console.log(e)},onScan:Q}),(0,l.jsx)("h2",{children:"Scan here"})]}),T?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"footerHome",children:(0,l.jsx)("h2",{children:"Please Scan here to Experience Space"})})}),J?(0,l.jsxs)("div",{className:"c-popupbg",children:[(0,l.jsx)("div",{className:"bg-popup"}),(0,l.jsx)("div",{className:"c-loginpopup",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"/images/cancel_icon.png"}),(0,l.jsx)("h5",{children:"You are trying to login from wrong device "})]})})]}):null,(0,l.jsx)("div",{className:"socialmediaIcon",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"https://www.instagram.com/ujustbeuniverse/",target:"_blank",children:(0,l.jsx)("img",{src:"/instagram.png"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"https://www.youtube.com/@UJustbeUniverse",target:"_blank",children:(0,l.jsx)("img",{src:"/youtube.png"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"https://www.facebook.com/UJustBeUniverse1",target:"_blank",children:(0,l.jsx)("img",{src:"/facebook.png"})})})]})})]})})}},9941:function(e,n){"use strict";n.Z={src:"/_next/static/media/spaceimg.5b495dfd.png",height:1381,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAARElEQVR42iWIwQ3AMAwCORI1727S/Wdr7NopAnHAuh9ATI/lQ5aU+TqV+p1h+ivaFac2CqHa8/xBFzVCrcm43MAQRvoARHMeZsM6TAkAAAAASUVORK5CYII=",blurWidth:4,blurHeight:8}}},function(e){e.O(0,[623,682,278,971,69,744],function(){return e(e.s=6006)}),_N_E=e.O()}]);