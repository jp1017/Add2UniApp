
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-card{ margin-top:",[0,50],"; }\n.",[1],"page { padding-top: ",[0,60],"; background: #efeff4; }\n.",[1],"image-view { height: ",[0,480],"; overflow: hidden; }\n.",[1],"image { width: 100%; }\n",],undefined,{path:"./pages/template/cardview/cardview.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/cardview/cardview.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      