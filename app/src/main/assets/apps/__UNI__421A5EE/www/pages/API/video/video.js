
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"video{width:100%;}\n",],undefined,{path:"./pages/API/video/video.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/video/video.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      