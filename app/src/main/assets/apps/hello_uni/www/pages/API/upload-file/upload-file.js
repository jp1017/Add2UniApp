
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"image { width: 100%; }\n.",[1],"demo { background: #FFF; padding: ",[0,50],"; }\n",],undefined,{path:"./pages/API/upload-file/upload-file.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/upload-file/upload-file.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      