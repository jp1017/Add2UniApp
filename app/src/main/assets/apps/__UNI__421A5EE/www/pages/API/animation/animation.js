
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"animation-element-wrapper { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; padding-top: ",[0,150],"; padding-bottom: ",[0,150],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; overflow: hidden; background-color: #ffffff; }\n.",[1],"animation-element { width: ",[0,200],"; height: ",[0,200],"; background-color: #1AAD19; }\n.",[1],"animation-buttons { padding:",[0,30]," 0; width: 100%; height: ",[0,360],"; }\n.",[1],"animation-button { float: left; line-height: 2; width: 44%; margin: ",[0,15]," 3%; }\n.",[1],"animation-button-reset { width: 94%; }\n",],undefined,{path:"./pages/API/animation/animation.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/animation/animation.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      