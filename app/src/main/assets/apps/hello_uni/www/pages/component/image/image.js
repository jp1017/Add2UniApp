
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"image { margin:",[0,40]," 0; width: ",[0,200],"; }\n",],undefined,{path:"./pages/component/image/image.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/image/image.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      