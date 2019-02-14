
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-mask { background: rgba(0, 0, 0, 0.6); position: fixed; width: 100%; height: 100%; left: 0; top: 0; z-index: 1; }\n.",[1],"uni-banner { width: 70%; position: fixed; left: 50%; top: 50%; background: #FFF; border-radius: ",[0,10],"; z-index: 99; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); }\n",],undefined,{path:"./pages/template/sbanner/sbanner.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/sbanner/sbanner.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      