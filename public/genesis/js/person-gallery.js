const personvideoArr=document.querySelectorAll(".c-p-video");function addListener(e){e.playbackRate=1.5,e.addEventListener("mouseover",function(){e.play()}),e.addEventListener("mouseout",function(){e.pause(),e.currentTime=0})}personvideoArr.forEach(e=>addListener(e));