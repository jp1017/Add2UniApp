
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"swiper { height: ",[0,300],"; }\n.",[1],"swiper-item { display: block; height: ",[0,300],"; line-height: ",[0,300],"; text-align: center; }\n.",[1],"swiper-list { margin-top: ",[0,40],"; margin-bottom: 0; }\n.",[1],"uni-common-mt{ margin-top:",[0,60],"; position:relative; }\n.",[1],"info { position: absolute; right:",[0,20],"; }\n",],undefined,{path:"./pages/component/swiper/swiper.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/swiper/swiper.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      