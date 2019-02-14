
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"uni-mask { position: fixed; z-index: 998; top: 0; right: 0; bottom: 0; left: 0; background-color: rgba(0, 0, 0, .3); }\n.",[1],"uni-popup { position: absolute; z-index: 999; background-color: #ffffff; -webkit-box-shadow: 0 0 ",[0,30]," rgba(0, 0, 0, .1); box-shadow: 0 0 ",[0,30]," rgba(0, 0, 0, .1); }\n.",[1],"uni-popup-middle { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: ",[0,380],"; height: ",[0,380],"; border-radius: ",[0,10],"; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding: ",[0,30],"; }\n.",[1],"uni-popup-top { top: 0; left: 0; width: 100%; height: ",[0,100],"; line-height: ",[0,100],"; text-align: center; }\n.",[1],"uni-popup-bottom { left: 0; bottom: 0; width: 100%; height: ",[0,100],"; line-height: ",[0,100],"; text-align: center; }\n",],undefined,{path:"./pages/template/popup/popup.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/popup/popup.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      