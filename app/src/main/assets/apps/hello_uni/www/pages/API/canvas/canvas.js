
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"canvas-element-wrapper { display: block; margin-bottom: ",[0,100],"; }\n.",[1],"canvas-element { width: 100%; height: ",[0,500],"; background-color: #ffffff; }\n.",[1],"canvas-buttons { padding: ",[0,30]," ",[0,50]," ",[0,10],"; width: 100%; height: ",[0,360],"; -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"canvas-button { float: left; line-height: 2; width: ",[0,300],"; margin: ",[0,15]," ",[0,12],"; }\n",],undefined,{path:"./pages/API/canvas/canvas.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/API/canvas/canvas.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      