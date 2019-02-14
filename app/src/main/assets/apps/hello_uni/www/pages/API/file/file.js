
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"image { width: 100%; height: ",[0,360],"; }\n.",[1],"btn-savefile { background-color: #007aff; color: #ffffff; }\n",],undefined,{path:"./pages/API/file/file.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/file/file.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      