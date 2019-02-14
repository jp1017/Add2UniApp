
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"_button { background-color: #007aff; color: #ffffff; }\n",],undefined,{path:"./pages/API/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      