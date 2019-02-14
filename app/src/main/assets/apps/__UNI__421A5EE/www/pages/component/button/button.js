
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"_button { margin-top: ",[0,30],"; margin-bottom: ",[0,30],"; }\n.",[1],"button-sp-area { margin: 0 auto; width: 60%; }\n.",[1],"mini-btn { margin-right: ",[0,10],"; }\n",],undefined,{path:"./pages/component/button/button.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/button/button.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      