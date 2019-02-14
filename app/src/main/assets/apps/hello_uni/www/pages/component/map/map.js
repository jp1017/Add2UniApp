
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"_map { width: 100%; height: ",[0,600],"; }\n",],undefined,{path:"./pages/component/map/map.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/map/map.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      