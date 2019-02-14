
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"canvas { width: ",[0,610],"; height: ",[0,610],"; background-color: #fff; }\n",],undefined,{path:"./pages/component/canvas/canvas.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/canvas/canvas.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      