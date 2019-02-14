
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-image { width: ",[0,150],"; height: ",[0,150],"; }\n.",[1],"page-body-wrapper { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; margin-bottom: ",[0,300],"; }\n.",[1],"page-body-time { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"time-big { font-size: ",[0,60],"; margin: ",[0,20],"; }\n.",[1],"time-small { font-size: ",[0,30],"; }\n.",[1],"page-body-buttons { margin-top: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"page-body-button { width: ",[0,250],"; text-align: center; }\n.",[1],"button-stop-record { width: ",[0,110],"; height: ",[0,110],"; border: ",[0,20]," solid #fff; background-color: #f55c23; border-radius: ",[0,130],"; margin: 0 auto; }\n",],undefined,{path:"./pages/API/voice/voice.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/voice/voice.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      