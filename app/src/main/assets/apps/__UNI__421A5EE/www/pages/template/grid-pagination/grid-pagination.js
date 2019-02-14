
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-list{ margin-bottom: ",[0,30],"; }\n.",[1],"uni-list-cell { -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start }\nwx-swiper{ height: ",[0,680],"; background:#f2f2f2; }\n",],undefined,{path:"./pages/template/grid-pagination/grid-pagination.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/grid-pagination/grid-pagination.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      