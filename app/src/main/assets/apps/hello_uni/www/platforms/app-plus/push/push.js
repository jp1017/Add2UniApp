
      !(function(){
        var uniAppViewReadyCallback = function(){
          document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/push/push.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      