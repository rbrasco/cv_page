(this.webpackJsonpcv_page=this.webpackJsonpcv_page||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(23),r=a.n(l),c=(a(37),a(24)),o=a(25),s=a(30),m=a(28),d=a(10),u=a(2),p=a(29),f=a(12),b={title:"About me",author:{name:"Roger",study:"Mathmatics"},"strong points":["Responsible","Persistent","Hard-working","Learning facility"],motivations:["Eager to start new projects","To step out my comfort zone"],skills:{"team-wise":"Great communication and networking skills. Comfortable workingin in a team environment","personal-wise":"Ability to not crack under pressure"},"coding knowladge":["Python, Selenium webdriver","Reactjs, JavaScript, HTML, CSS & SASS","JAVA","C family"]},_={info:b,experience:{title:"Work experience by importance",top:{company:"Scytl",position:"Software developer intern",duration:"1 year",job:["Took part in the team of managers on the services Bitbucket, Jira, Jenkins and Nexus","Continuous integration and process automation scripts","Fullstack developer in Internal Tools team"]},mid:{company:"Snorkel DC",position:"Divemaster",duration:"4 months",job:["Diving guide","Shop attendant"]},low:{company:"ICM CSIC",position:"Electronic technic intern",duration:"2 months",job:["Provided help to the technical team of the Technology Laboratory in ICM CSIC Biology Institute"]}},education:{title:"Education level and lenguages","Field studies":{university:"Universitat de Barcelona",degree:"Mathematics",duration:"2016 - Present"},"Professional studies":{organization:"PADI",level:"Divemaster",issued_date:"2017"},"Health studies":{organization:"Rescatadores SL",degree:"Beach Lifeguard",issued_date:"2016"},lenguages:{catalan:"Native",spanish:"Native",english:"Advanced"}},teaching:b,contact:{title:"Please contact me from the options below",home:"Barcelona",mail:"brascoroger@gmail.com",linkedIn:"linkedin.com/in/rbrasco"}},h={info:{dir:"about.me",key:"info",label:"info.yml"},experience:{dir:"work",key:"experience",label:"experience.yml"},education:{dir:"accomplishment",key:"education",label:"education.yml"},teaching:{dir:"teaching",key:"teaching",label:"teaching.yml"},contact:{dir:"for.you",key:"contact",label:"contact.yml"}},v=a(16),y=a.n(v),E=a(3),g=function(e){return i.a.createElement("div",{className:"tabBar",id:"tB"},e.map((function(e){return function(e){var t=e.key,a=e.label,n=e.active,l=void 0!==n&&n;return i.a.createElement("div",{className:l?"tab":"tab shadow",key:t},i.a.createElement(d.b,{className:"link",to:"/"+t},i.a.createElement("button",{className:"tabBttn"},a)),i.a.createElement(d.b,{className:l?"linkX":"linkX dis",to:"/"},i.a.createElement(y.a,{className:l?"xBttn":"xBttn shadow",fontSize:E.isMobile?"large":"small"})))}(e)})))};function k(e){return null===document.getElementById(e)?new Promise((function(e){requestAnimationFrame(e)})).then((function(){return k(e)})):Promise.resolve(document.getElementById(e).scrollWidth>document.getElementById(e).clientWidth)}var N=Object(u.h)((function(){var e=Object(u.g)().pathname.replace("/",""),t=Object.keys(h).map((function(e){return e})),a=Object.keys(h).map((function(t){return Object(f.a)(Object(f.a)({},h[t]),{},{active:e===t})})),n=i.a.useState(!0),l=Object(p.a)(n,2),r=l[0],c=l[1];return k("tB").then((function(e){c(e)})),i.a.useEffect((function(){window.addEventListener("resize",(function(){k("tB").then((function(e){c(e)}))}))})),i.a.createElement("div",{className:"tabComponent"},g(a),""===e?null:function(e,t){var a=e.dir,n=e.label;return i.a.createElement("div",{className:t?"path moved":"path"},i.a.createElement("div",{className:"path_text"},"rogerbras.co >"),i.a.createElement("div",{className:"path_text"},a+" >"),i.a.createElement("div",{className:"path_text"},n))}(a[t.indexOf(e)],r))})),w=a(26),x=a.n(w),j=a(27),O=a.n(j),C=function(){return i.a.createElement("div",{className:"wBttns"},i.a.createElement("div",{className:"trans"}),i.a.createElement("div",{className:"wTitle"},"Personal Page Project - CODE"),i.a.createElement("div",{className:"wIconsWrapper"},i.a.createElement(x.a,{className:"wIcons",fontSize:E.isMobile?"large":"small"}),i.a.createElement(O.a,{className:"wIcons",fontSize:E.isMobile?"large":"small"}),i.a.createElement(y.a,{className:"wIcons red",fontSize:E.isMobile?"large":"small"})))},S=1,M=function(e){var t=e.i,a=e.key,n=e.label,l=e.depth,r=void 0===l?0:l,c=e.array,o=void 0!==c&&c;return i.a.createElement("div",{className:"line",key:t},i.a.createElement("div",{className:0===r?"n_line":"n_line moved"},t),i.a.createElement("div",{className:"key_text"+r},a),""===a?null:i.a.createElement("div",{className:"dots"},":"),o?i.a.createElement("div",{className:"dash"}," - "):null,i.a.createElement("div",{className:E.isMobile?"label_text lt_mobile":"label_text"},n))},B=function(e,t,a){return i.a.createElement("div",{key:t+S},M({i:S++,key:t,label:"",depth:a}),Object.keys(e).map((function(t){return M({i:S++,key:e instanceof Array?"":t,label:e[t],depth:a+1,array:e instanceof Array})})))},I=Object(u.h)((function(e){var t=e.info;return S=1,i.a.createElement("div",{className:E.isMobile?"page pmobile":"page"},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object.keys(e).map((function(a){return"string"===typeof e[a]?M({i:S++,key:a,label:e[a],depth:t}):i.a.createElement("div",{key:a+S},M({i:S++,key:a,label:""}),Object.keys(e[a]).map((function(n){return"string"===typeof e[a][n]?M({i:S++,key:e[a]instanceof Array?"":n,label:e[a][n],depth:t+1,array:e[a]instanceof Array}):B(e[a][n],n,t+1)})))}))}(t),M({i:S++,key:"",label:""}))})),T=a(17),z=a.n(T),P=[["","    ____","   /\\___\\","  /\\ \\___\\","  \\ \\/ / /","   \\/_/_/",""],["   ______","  /\\_____\\","  \\ \\__/_/","  /\\ \\___\\","  \\ \\/ / /","   \\/_/_/",""],["   ______","  /\\_____\\","  \\ \\__/_/_","  /\\ \\_____\\","  \\ \\/ / / /","   \\/_/\\/ /","      \\/_/"],["   ______","  /\\_____\\"," _\\ \\__/_/_","/\\_\\ \\_____\\","\\ \\ \\/ / / /"," \\ \\/ /\\/ /","  \\/_/\\/_/"]],A=function(){var e=E.isMobile?300:100,t=E.isMobile?300:150,a=E.isMobile?40:15,n=0,l=0,r=Array(2*P.length).fill(0).map((function(e,t){return t>P.length-1?2*P.length-t-1:t}));r.splice(2*P.length-1,1),r.splice(P.length,1);return i.a.createElement(z.a,{setup:function(a,n){a.createCanvas(t,e).parent(n)},draw:function(i){!function(e){e.millis()-l>1e3&&(n++,l=e.millis())}(i),i.background("#2c2e3b"),i.fill("#f1fa8c"),i.textSize(a),i.textFont("monospace"),function(i){for(var l=0;l<P[n%4].length;l++)i.text(P[r[n%r.length]][l],t/2-3.4*a,e/2-4*a+a*(l+1))}(i)},className:"asciiCanvas"})},W=Object(u.h)((function(){return i.a.createElement("div",{className:"default"},i.a.createElement(A,{className:"dLogo"}),i.a.createElement("div",{className:"dTextWrapper"},i.a.createElement("p",{className:"dText"},i.a.createElement("span",{className:"dBlue"},"rogerbras.co")),i.a.createElement("p",{className:"dText"},"Welcome to my original idea for a ",i.a.createElement("span",{className:"dYellow"},"CV page")),i.a.createElement("p",{className:"dText"},"It pretends to be a window of a code editor"),i.a.createElement("p",{className:"dText"},"Where every ",i.a.createElement("span",{className:"dPurple"},".yml")," file displays information in a nice way"),i.a.createElement("p",{className:"dText"},"Inspired by ",i.a.createElement("span",{className:"dRed"},"VS CODE")," and ",i.a.createElement("span",{className:"dRed"},"Dracula's Theme")," colors"),i.a.createElement("p",{className:"dText"},"Complitly done with ",i.a.createElement("span",{className:"dPurple"},"Reactjs"),", full code at ",i.a.createElement("span",{className:"dRed"},"Github")),i.a.createElement("p",{className:"dText"},"Click on a tab to ",i.a.createElement("span",{className:"dYellow"},"start")),i.a.createElement("p",{className:"dText"},i.a.createElement("span",{className:"dBlue"},"PDF version")),i.a.createElement("p",{className:"dText"},"JUNE - 2020")))})),D=function(e){var t=e.dict,a=e.isMobile;return i.a.createElement("div",{className:a?"mobile":"window"},i.a.createElement(C,null),i.a.createElement(N,null),i.a.createElement(u.d,{location:Object(u.g)()},Object.keys(t).map((function(e){return i.a.createElement(u.b,{path:"/"+e,key:e,component:function(){return i.a.createElement(I,{info:t[e]})}})})),i.a.createElement(u.b,{exact:!0,path:"/",component:W}),i.a.createElement(u.a,{to:"/"})))},R=a(14),J=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},L=function(e,t){return{x:J(-e,e),y:J(-t,t),z:J(0,e)}},F=function(){var e=window.innerHeight,t=document.body.clientWidth,a=Array(2e3).fill(),n={};a.forEach((function(a,i){return n=Object(f.a)(Object(f.a)({},n),{},Object(R.a)({},"".concat(i),L(t,e)))}));var l=function(e,a){e.fill(255),e.noStroke();var i=e.map(n[a].x/n[a].z,0,1,0,t),l=e.map(n[a].y/n[a].z,0,1,0,t),r=e.map(n[a].z,0,t,6,0);e.ellipse(i,l,r,r)},r=function(a,i){n[i].z-=.05,n[i].z<1&&(n[i]=L(t,e))};return i.a.createElement(z.a,{setup:function(a,n){a.createCanvas(t,e).parent(n)},draw:function(n){t=document.body.clientWidth,e=window.innerHeight,n.resizeCanvas(t,e,!0),n.background("#090b14"),n.translate(t/2,e/2);for(var i=0;i<a.length;i++)r(0,i),l(n,i)}})},H=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(D,{dict:_,isMobile:E.isMobile}),E.isMobile?null:i.a.createElement(F,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b1a18647.chunk.js.map