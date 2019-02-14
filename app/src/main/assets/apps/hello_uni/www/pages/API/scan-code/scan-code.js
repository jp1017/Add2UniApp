
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"scan-result { min-height: ",[0,50],"; line-height: ",[0,50],"; }\n",],undefined,{path:"./pages/API/scan-code/scan-code.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/scan-code/scan-code.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      