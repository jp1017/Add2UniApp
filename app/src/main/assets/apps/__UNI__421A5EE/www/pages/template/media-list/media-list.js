
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"title { padding: ",[0,20],"; }\n",],undefined,{path:"./pages/template/media-list/media-list.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/media-list/media-list.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      