
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"scroll-Y { height: ",[0,300],"; }\n.",[1],"scroll-view_H { white-space: nowrap; width: 100%; }\n.",[1],"scroll-view-item { height: ",[0,300],"; line-height: ",[0,300],"; text-align: center; font-size: ",[0,36],"; }\n.",[1],"scroll-view-item_H { display: inline-block; width: 100%; height: ",[0,300],"; line-height: ",[0,300],"; text-align: center; font-size: ",[0,36],"; }\n",],undefined,{path:"./pages/component/scroll-view/scroll-view.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/scroll-view/scroll-view.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      