
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"title { padding: ",[0,10]," ",[0,25],"; }\n",],undefined,{path:"./pages/component/input/input.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/input/input.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      