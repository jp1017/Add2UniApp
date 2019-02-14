
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-form-item .",[1],"title { padding: ",[0,20]," 0; }\n",],undefined,{path:"./pages/component/form/form.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/form/form.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      