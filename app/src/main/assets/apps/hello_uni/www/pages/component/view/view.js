
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"flex-item { width: 33.3%; height: ",[0,200],"; text-align: center; line-height: ",[0,200],"; }\n.",[1],"flex-item-V { width: 100%; height: ",[0,150],"; text-align: center; line-height: ",[0,150],"; }\n.",[1],"text{ margin:",[0,15]," ",[0,10],"; padding: 0 ",[0,20],"; background-color: #ebebeb; height: ",[0,70],"; line-height: ",[0,70],"; text-align: center; color: #777; font-size: ",[0,26],"; }\n.",[1],"desc{ }\n",],undefined,{path:"./pages/component/view/view.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/component/view/view.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      