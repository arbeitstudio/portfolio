const observer=new IntersectionObserver(a=>{a.forEach(a=>{a.isIntersecting&&(a.target.classList.contains("anim-slide-right-appear")?a.target.classList.add("slide-right-appear"):a.target.classList.contains("anim-slide-up-appear")?a.target.classList.add("slide-up-appear"):a.target.classList.contains("anim-appear")?a.target.classList.add("appear"):a.target.classList.contains("anim-slide-down-appear")?a.target.classList.add("slide-down-appear"):a.target.classList.contains("anim-slide-in-place-right")?a.target.classList.add("slide-in-place-right"):a.target.classList.contains("anim-gallery-staggered-appear")?applyCssToChildren(a,"staggered-appear"):a.target.classList.contains("anim-slide-left-appear")&&a.target.classList.add("slide-left-appear"))})});function applyDelayToChildren(a,e){a=Array.from(a.children);let s=1;a.forEach(a=>{a.style.transitionDelay=s*e+"s",s++})}function applyCssToChildren(a,e){Array.from(a.target.children).forEach(a=>{a.classList.add(e)})}function preprocessTargets(){document.querySelectorAll(".anim-gallery-staggered-appear").forEach(a=>{applyDelayToChildren(a,.1)})}console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"),preprocessTargets();const query=".anim-slide-down-appear,.anim-slide-right-appear,.anim-slide-up-appear,.anim-appear,.anim-slide-in-place-right,.anim-gallery-staggered-appear,.anim-slide-left-appear";let targets=document.querySelectorAll(query);targets.forEach(a=>{observer.observe(a)});