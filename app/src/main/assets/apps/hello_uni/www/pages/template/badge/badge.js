
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-badge{margin: ",[0,20],";}\n",],undefined,{path:"./pages/template/badge/badge.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/badge/badge.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      