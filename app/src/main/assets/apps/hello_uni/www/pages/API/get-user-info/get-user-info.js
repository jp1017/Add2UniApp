
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"userinfo-avatar { border-radius: ",[0,128],"; width: ",[0,128],"; height: ",[0,128],"; }\n",],undefined,{path:"./pages/API/get-user-info/get-user-info.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/get-user-info/get-user-info.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      