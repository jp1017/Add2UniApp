
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { height: auto; min-height: 100%; }\n.",[1],"uni-card { -webkit-box-shadow: none; box-shadow: none; }\n.",[1],"uni-list:after { height: 0; }\n.",[1],"uni-list:before { height: 0; }\n.",[1],"uni-hello-text { word-break: break-all; }\n",],undefined,{path:"./pages/tabBar/template/template.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/template/template.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      