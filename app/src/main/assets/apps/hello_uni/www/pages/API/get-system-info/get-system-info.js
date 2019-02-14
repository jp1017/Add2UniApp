
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-pd { padding-left: ",[0,30],"; }\n",],undefined,{path:"./pages/API/get-system-info/get-system-info.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/get-system-info/get-system-info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      