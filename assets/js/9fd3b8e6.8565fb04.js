"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Upscalers"},i=void 0,s={unversionedId:"image_enhancers",id:"image_enhancers",title:"Upscalers",description:"\x3c!--",source:"@site/docs/6.image_enhancers.md",sourceDirName:".",slug:"/image_enhancers",permalink:"/sygil-webui/docs/image_enhancers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/6.image_enhancers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Upscalers"},sidebar:"tutorialSidebar",previous:{title:"Gradio Web UI Interface",permalink:"/sygil-webui/docs/gradio-interface"},next:{title:"concepts-library",permalink:"/sygil-webui/docs/concepts-library"}},l={},u=[{value:"GFPGAN",id:"gfpgan",level:2},{value:"RealESRGAN",id:"realesrgan",level:2},{value:"GoBig (Gradio only currently)",id:"gobig-gradio-only-currently",level:2},{value:"Latent Diffusion Super Resolution - LSDR (Gradio only currently)",id:"latent-diffusion-super-resolution---lsdr-gradio-only-currently",level:2},{value:"GoLatent (Gradio only currently)",id:"golatent-gradio-only-currently",level:2},{value:"Future Additions",id:"future-additions",level:2}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Included with both versions of the Web UI Interface are a series of image restorers and upscalers. They are included to help users create outputs with restored features, such as better faces, or at larger resolutions than Stable Diffusion is able to natively output."),(0,r.kt)("h2",{id:"gfpgan"},"GFPGAN"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5089).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"GFPGAN is designed to help restore faces in Stable Diffusion outputs. If you have ever tried to generate images with people in them, you know why having a face restorer can come in handy. This is where GFPGAN comes in handy. It uses it's own GAN to detect and restore the faces of subjects within an image. It greatly helps to enhance the details in human faces, while also fixing issues with asymmetry or awkward looking eyes."),(0,r.kt)("p",null,"If you want to use GFPGAN to improve generated faces, you need to download the models for it separately if you are on Windows or doing so manually on Linux.\nDownload ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.3.pth"},"GFPGANv1.3.pth")," and put it\ninto the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sygil-webui/models/gfpgan")," directory after you have setup the conda environment for the first time."),(0,r.kt)("h2",{id:"realesrgan"},"RealESRGAN"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8006).Z,width:"2048",height:"1024"})),(0,r.kt)("p",null,"RealESRGAN is a 4x upscaler built into both versions of the Web UI interface. It uses its own GAN to upscale images while retaining details of an image. Two different versions of RealESRGAN can be used, ",(0,r.kt)("inlineCode",{parentName:"p"},"RealESRGAN 4X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"RealESRGAN 4X Anime"),". Despite the name, don't hesitate to try either version when upscaling an image to see which works best for a given output."),(0,r.kt)("p",null,"If you want to use RealESRGAN to upscale your images, you need to download the models for it separately if you are on Windows or doing so manually on Linux.\nDownload ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth"},"RealESRGAN_x4plus.pth")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth"},"RealESRGAN_x4plus_anime_6B.pth"),".\nPut them into the ",(0,r.kt)("inlineCode",{parentName:"p"},"sygil-webui/models/realesrgan")," directory after you have setup the conda environment for the first time."),(0,r.kt)("h2",{id:"gobig-gradio-only-currently"},"GoBig (Gradio only currently)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"GoBig is a 2X upscaler that uses RealESRGAN to upscale the image and then slice it into small parts, each part gets diffused further by SD to create more details, great for adding and increasing details but will change the composition, might also fix issues like eyes etc. The settings are similar to Image2Image, with regards to strength and seed of the generation."),(0,r.kt)("p",null,"To use GoBig, you will need to download the RealESRGAN models as directed above."),(0,r.kt)("h2",{id:"latent-diffusion-super-resolution---lsdr-gradio-only-currently"},"Latent Diffusion Super Resolution - LSDR (Gradio only currently)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"LSDR is a 4X upscaler with high VRAM usage that uses a Latent Diffusion model to upscale the image. This will accentuate the details of an image, but won't change the composition. This might introduce sharpening, but it is great for textures or compositions with plenty of details. However, it is slower and will use more VRAM."),(0,r.kt)("p",null,"If you want to use LSDR to upscale your images, you need to download the models for it separately if you are on Windows or doing so manually on Linux.\nDownload the LDSR ",(0,r.kt)("a",{parentName:"p",href:"https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1"},"project.yaml")," and ",(0,r.kt)("a",{parentName:"p",href:"https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1"}," model last.cpkt"),". Rename ",(0,r.kt)("inlineCode",{parentName:"p"},"last.ckpt")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"model.ckpt")," and place both in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sygil-webui/models/ldsr")," directory after you have setup the conda environment for the first time.  "),(0,r.kt)("h2",{id:"golatent-gradio-only-currently"},"GoLatent (Gradio only currently)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"GoLatent is an 8X upscaler with high VRAM usage. It uses GoBig to add details and then uses a Latent Diffusion (LSDR) model to upscale the image. This will result in less artifacts and sharpening. Use the settings to feed GoBig settings that will contribute to the result. Please note, this mode is considerably slower and uses significantly more VRAM."),(0,r.kt)("p",null,"To use GoLatent, you will need to download the appropriate LSDR models as described above."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"future-additions"},"Future Additions"),(0,r.kt)("p",null,"Currently, these are the 4 main enhancers and upscalers used in the project, but more may be implemented in the future. Stay Tuned!"))}c.isMDXComponent=!0},5089:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/GFPGAN-9909322f78ae9e67efff221c5459b6b5.png"},8006:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/RealESRGAN-7820b3dda15d2ba05435ab9789b625f4.png"}}]);