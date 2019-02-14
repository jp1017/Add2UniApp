
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-picker-view { width: 100%; height: ",[0,600],"; margin-top:",[0,20],"; }\n.",[1],"item { line-height: ",[0,100],"; text-align: center; }\n",],undefined,{path:"./pages/component/picker-view/picker-view.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/picker-view/picker-view.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      