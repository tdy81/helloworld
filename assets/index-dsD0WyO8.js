(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();(function(){const n=document.querySelector("#canvas1"),r=n.getContext("2d");r.canvas.width=window.innerWidth,r.canvas.height=window.innerHeight;let o;function s(i,c,h,d,a,l){this.x=i,this.y=c,this.directionX=h,this.directionY=d,this.size=a,this.color=l}s.prototype.draw=function(){r.beginPath(),r.arc(this.x,this.y,this.size,0,Math.PI*2,!1),r.fillStyle=this.color,r.fill()},s.prototype.update=function(){(this.x+this.size>n.width||this.x-this.size<0)&&(this.directionX=-this.directionX),(this.y+this.size>n.height||this.y-this.size<0)&&(this.directionY=-this.directionY),this.x+=this.directionX,this.y+=this.directionY,this.draw()};function t(){o=[];for(let i=0;i<50;i++){let c=Math.random()*10,h=Math.random()*(innerWidth-c*2),d=Math.random()*(innerHeight-c*2),a=Math.random()*.4-.2,l=Math.random()*.4-.2,f="#bac4b8";o.push(new s(h,d,a,l,c,f))}}function e(){requestAnimationFrame(e),r.clearRect(0,0,innerWidth,innerHeight);for(let i=0;i<o.length;i++)o[i].update()}t(),e(),window.addEventListener("resize",function(){n.width=this.innerWidth,n.height=this.innerHeight,t()})})();
