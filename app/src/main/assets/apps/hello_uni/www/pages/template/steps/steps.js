
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{background:#FFFFFF;}\n",],undefined,{path:"./pages/template/steps/steps.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/steps/steps.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      