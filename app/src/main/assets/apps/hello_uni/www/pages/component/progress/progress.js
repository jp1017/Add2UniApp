
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"progress-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,50],"; margin-bottom: ",[0,60],"; }\n.",[1],"progress-cancel { margin-left: ",[0,40],"; }\n",],undefined,{path:"./pages/component/progress/progress.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/progress/progress.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      