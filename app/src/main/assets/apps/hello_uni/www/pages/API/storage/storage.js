
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"btn-setstorage { background-color: #007aff; color: #ffffff; }\n",],undefined,{path:"./pages/API/storage/storage.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/storage/storage.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      