"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={},i="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Cmdr has no dependencies which makes it incredibly portable and easy to include in your game.",source:"@site/docs/01-installation.md",sourceDirName:".",slug:"/installation",permalink:"/Cmdr/beta/docs/installation",draft:!1,editUrl:"https://github.com/evaera/cmdr/edit/master/docs/01-installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/Cmdr/beta/docs/intro"},next:{title:"Set-up",permalink:"/Cmdr/beta/docs/setup"}},s={},d=[{value:"Model file (recommended)",id:"model-file-recommended",level:2},{value:"Wally (recommended) (requires Rojo)",id:"wally-recommended-requires-rojo",level:2},{value:"Submodule (advanced) (requires Rojo)",id:"submodule-advanced-requires-rojo",level:2},{value:"Manual (not recommended) (requires Rojo)",id:"manual-not-recommended-requires-rojo",level:2},{value:"Roblox models (not supported)",id:"roblox-models-not-supported",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Cmdr has no dependencies which makes it incredibly portable and easy to include in your game."),(0,r.kt)("p",null,"We recommend installing Cmdr in a place only visible on the server (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerScriptService")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerStorage"),"). By installing it in a shared place (like ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicatedStorage"),"), installing to the server realm helps guard against mistakes and provides for better optimisation. Plus, there have sometimes been reports of weird, random issues caused by installing Cmdr in a shared place."),(0,r.kt)("p",null,"You can choose one of many installation methods. While there are other potential installation methods, we recommend sticking to one of the below, unless you're sure you know what you're doing."),(0,r.kt)("admonition",{title:"Heads up",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There are plenty of resources available to help you with Cmdr, such as this website and our Discord server, but we've been made aware of a number of DevForum guides and YouTube videos which provide incorrect or outdated instructions."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We recommend you stick to our official resources, especially if you're new to Cmdr.")," If you decide to use unofficial resources, then the level of support we can provide (for instance in our Discord server) is limited.")),(0,r.kt)("admonition",{title:"Do not modify the source code",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Please ",(0,r.kt)("strong",{parentName:"p"},"do not")," modify the source code of Cmdr for your game. Instead, use its API to customise the behaviour you want. Modifying the source code makes it much harder for you to receive future updates."),(0,r.kt)("p",{parentName:"admonition"},"There shouldn't be any reason why you need to modify the source code of Cmdr (unless you're ",(0,r.kt)("a",{parentName:"p",href:"/docs/contribute"},"adding a new feature or fixing a bug"),"). If there's something you think we're missing, please ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/cmdr/issues"},"open an issue"),".")),(0,r.kt)("h2",{id:"model-file-recommended"},"Model file (recommended)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can visit the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evaera/Cmdr/releases/latest"},"latest release"),' page. At the bottom of the page, you\'ll find an "Assets" section, then download ',(0,r.kt)("inlineCode",{parentName:"li"},"Cmdr.rbxm"))),(0,r.kt)("p",null,"If you're using Roblox Studio:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"You can either:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"drag or drop the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cmdr.rbxm")," file into the viewport (central window)"),(0,r.kt)("li",{parentName:"ul"},"select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Model")," tab, then under the ",(0,r.kt)("inlineCode",{parentName:"li"},"Advanced")," section click ",(0,r.kt)("inlineCode",{parentName:"li"},"Model"),". Then, navigate to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cmdr.rbxm")," file and click ",(0,r.kt)("inlineCode",{parentName:"li"},"Open")))),(0,r.kt)("li",{parentName:"ol"},"Make sure you move the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cmdr")," ModuleScript to wherever you want it (as above, we recommend you keep it on the server)"),(0,r.kt)("li",{parentName:"ol"},"Proceed to ",(0,r.kt)("a",{parentName:"li",href:"/docs/setup"},"Setup"))),(0,r.kt)("p",null,"If you're using Rojo, you can either add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmdr.rbxm")," file to your project file (usually called ",(0,r.kt)("inlineCode",{parentName:"p"},"default.project.json"),"), or put the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmdr.rbxm")," file into a directory that you've got set up to sync already. ",(0,r.kt)("a",{parentName:"p",href:"https://rojo.space"},"Rojo's documentation")," can help you with this."),(0,r.kt)("h2",{id:"wally-recommended-requires-rojo"},"Wally (recommended) (requires Rojo)"),(0,r.kt)("p",null,"Cmdr is published on the wally registry as ",(0,r.kt)("a",{parentName:"p",href:"https://wally.run/package/evaera/cmdr"},(0,r.kt)("inlineCode",{parentName:"a"},"evaera/cmdr")),"; you should be cautious about the potential for malware and ",(0,r.kt)("strong",{parentName:"p"},"only use the official package"),"."),(0,r.kt)("p",null,"You can easily add Cmdr to your project's ",(0,r.kt)("inlineCode",{parentName:"p"},"wally.toml")," file. If you're experiencing difficulties, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UpliftGames/wally#manifest-format"},"Wally's documentation")," can help."),(0,r.kt)("p",null,"We recommend adding Cmdr to the 'server realm', you can do this by putting it under the ",(0,r.kt)("inlineCode",{parentName:"p"},"server-dependencies")," section. This'll put it in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerPackages")," folder (which you'll then need to sync into your game using Rojo)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[server-dependencies]\nCmdr = "evaera/cmdr@^1.9.0"\n')),(0,r.kt)("p",null,"Make sure you check what the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/Cmdr/releases/latest"},"latest version")," is. The caret (^) will tell Wally to automatically upgrade to the newest compatible version if available, which we recommend doing."),(0,r.kt)("h2",{id:"submodule-advanced-requires-rojo"},"Submodule (advanced) (requires Rojo)"),(0,r.kt)("p",null,"If your project is using Rojo and Git, then you can use Git Submodules to include Cmdr into your project, and then sync it into your game using Rojo."),(0,r.kt)("p",null,"This will include a lot of unnecessary files into your project though, like the website and documentation, so you should make sure you only pull or sync the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmdr")," directory (which is the library source code)."),(0,r.kt)("p",null,"We recommend 'pinning' to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/Cmdr/releases/latest"},"latest version"),"'s tag, rather than using the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. This is because pre-release versions may have unexpected bugs, glitches or changes, and we may not be able to offer you support unless you're using the latest released version."),(0,r.kt)("h2",{id:"manual-not-recommended-requires-rojo"},"Manual (not recommended) (requires Rojo)"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone")," or GitHub's Download button, you can download a copy of the source code and then take the ",(0,r.kt)("inlineCode",{parentName:"p"},"Cmdr")," directory and sync this into your place."),(0,r.kt)("p",null,"We recommend downloading the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evaera/Cmdr/releases/latest"},"latest version")," rather than using the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch. This is because pre-release versions may have unexpected bugs, glitches or changes, and we may not be able to offer you support unless you're using the latest released version."),(0,r.kt)("h2",{id:"roblox-models-not-supported"},"Roblox models (not supported)"),(0,r.kt)("p",null,"Cmdr is not published to the Roblox creator marketplace. Owing to the prevalence of malware, you ",(0,r.kt)("strong",{parentName:"p"},"should not use any publish of Cmdr on the Roblox library"),", and instead use one of the above installation methods."),(0,r.kt)("p",null,"If you're experiencing difficulties and need help, then you can find advice on getting help ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro"},"in the Introduction page"),"."))}c.isMDXComponent=!0}}]);