
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"cell-pd { padding: ",[0,22]," ",[0,30],"; }\n.",[1],"list-pd { margin-top: ",[0,50],"; }\n",],undefined,{path:"./pages/API/image/image.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/image/image.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      