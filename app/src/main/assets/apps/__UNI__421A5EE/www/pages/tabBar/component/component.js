
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { height: auto; min-height: 100%; }\n.",[1],"uni-card { -webkit-box-shadow: none; box-shadow: none; }\n.",[1],"uni-list:after { height: 0; }\n.",[1],"uni-list:before { height: 0; }\n",],undefined,{path:"./pages/tabBar/component/component.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/tabBar/component/component.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      