
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"list-view { padding:",[0,10]," 0; }\n.",[1],"list-item { margin: ",[0,20]," 0; height: ",[0,100],"; line-height: ",[0,100],"; width: 100%; border-radius: ",[0,10],"; border: ",[0,1]," solid #eee; text-align: center; background:#FFF; }\n",],undefined,{path:"./pages/template/load-more/load-more.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/load-more/load-more.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      