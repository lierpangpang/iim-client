import{b as c,e as n,f as s,k as l,i as e,c as r,t as a,j as d,F as u,b4 as v,x as p,y as m}from"./index-38fe6f11.js";const b="/logo.png",_="iim",g="1.0.0",f="electron/main.js",y={dev:"vite --mode development",build:"vite build","build:dev":"vite build --mode development",preview:"vite preview",electron:"wait-on tcp:5174 && cross-env NODE_ENV=development PROT=5174 electron .","electron:dev":'concurrently -k "npm run dev" "npm run electron"',"electron:build":"vite build --mode electron && electron-builder --mac && electron-builder --win --x64","electron:build-mac":"vite build --mode electron && electron-builder --mac","electron:build-win":"vite build --mode electron && electron-builder --win --x64"},h={"@highlightjs/vue-plugin":"^2.1.0","@kangc/v-md-editor":"^2.3.15","@vueup/vue-quill":"^1.2.0",axios:"^0.26.0","highlight.js":"^11.5.0","js-audio-recorder":"^1.0.7",pinia:"^2.0.35","pinia-plugin-persistedstate":"^3.1.0",quill:"^1.3.7","quill-image-uploader":"^1.3.0","quill-mention":"^3.2.0",vue:"^3.3.2","vue-cropper":"^1.0.8","vue-router":"^4.1.6","vue-tsc":"^1.6.4","vue-virtual-scroll-list":"^2.3.5","vue-virtual-scroller":"^2.0.0-beta.8",vuedraggable:"^4.1.0",xgplayer:"^3.0.4"},w={"@icon-park/vue-next":"^1.4.2","@tsconfig/node18":"^2.0.1","@types/vue":"^2.0.0","@vitejs/plugin-vue":"^4.1.0","@vitejs/plugin-vue-jsx":"^3.0.1","@vue/tsconfig":"^0.4.0",concurrently:"^7.3.0","cross-env":"^7.0.3",electron:"^19.1.9","electron-builder":"^23.6.0",less:"^4.1.2","less-loader":"^10.2.0","naive-ui":"^2.34.4",typescript:"^5.0.4",vite:"^4.3.2","vite-plugin-compression":"^0.5.1","wait-on":"^6.0.1"},I={appId:"ai.iim",productName:"IIM",copyright:"Copyright © 2023 IIM",mac:{category:"public.app-category.utilities",icon:"build/icons/iim-mac.png"},win:{icon:"build/icons/iim-mac.png",target:[{target:"nsis"}]},nsis:{oneClick:!1,allowToChangeInstallationDirectory:!0,installerIcon:"build/icons/iim-win.ico",uninstallerIcon:"build/icons/iim-win.ico",installerHeaderIcon:"build/icons/iim-win.ico",createDesktopShortcut:!0,createStartMenuShortcut:!0,shortcutName:"iim-icon"},files:["dist/**/*","electron/**/*"],directories:{buildResources:"assets",output:"dist_electron"}},x={name:_,private:!0,version:g,main:f,scripts:y,dependencies:h,devDependencies:w,build:I};const t=i=>(p("data-v-f04773bc"),i=i(),m(),i),j=t(()=>e("img",{class:"logo",src:b},null,-1)),k={class:"section"},S={class:"copyright"},N=t(()=>e("span",null,"Copyright © 2023 IIM. All Rights Reserved.",-1)),D=t(()=>e("br",null,null,-1)),C=v('<div class="fly-box" data-v-f04773bc><div class="fly bg-fly-circle1" data-v-f04773bc></div><div class="fly bg-fly-circle2" data-v-f04773bc></div><div class="fly bg-fly-circle3" data-v-f04773bc></div><div class="fly bg-fly-circle4" data-v-f04773bc></div></div>',1),q={__name:"layout",setup(i){return(M,R)=>{const o=n("router-view");return s(),l(u,null,[j,e("section",k,[r(o)]),e("div",S,[N,D,e("span",null,"v"+a(d(x).version),1)]),C],64)}}},B=c(q,[["__scopeId","data-v-f04773bc"]]);export{B as default};
