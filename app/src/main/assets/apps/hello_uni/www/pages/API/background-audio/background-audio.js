
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-image { width: ",[0,150],"; height: ",[0,150],"; }\n.",[1],"page-body-text { padding: 0 ",[0,30],"; }\n.",[1],"page-body-wrapper { margin-top: 0; }\n.",[1],"page-body-info { padding-bottom: ",[0,50],"; }\n.",[1],"time-big { font-size: ",[0,60],"; margin: ",[0,20],"; }\n.",[1],"slider { width:",[0,630],"; }\n.",[1],"play-time { font-size: ",[0,28],"; width:100%; padding: ",[0,20]," 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"page-body-buttons { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; margin-top: ",[0,100],"; }\n.",[1],"page-body-button { width: ",[0,250],"; text-align: center; }\n",],undefined,{path:"./pages/API/background-audio/background-audio.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/background-audio/background-audio.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      