/* eslint-disable no-console */const e=document.querySelector(".wall"),t=document.querySelector(".spider"),i=e.clientWidth-t.clientWidth,l=e.clientHeight-t.clientHeight;document.addEventListener("click",c=>{if(c.target!==e)return;let n=c.offsetX-t.clientWidth/2,d=c.offsetY-t.clientHeight/2;n>i?n=i:n<0&&(n=0),d>l?d=l:d<0&&(d=0),t.style.top=`${d}px`,t.style.left=`${n}px`});//# sourceMappingURL=index.41d748a7.js.map

//# sourceMappingURL=index.41d748a7.js.map
