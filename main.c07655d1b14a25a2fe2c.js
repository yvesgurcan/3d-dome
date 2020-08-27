(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.38","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n.n(o),c=n(17),l=n(3),s=n(20),u=n(28),m=n.n(u),d=n(9),p=n.n(d),h=n(5),b=n(29),g=n.n(b),f=n(10);function v(){var e=g()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return v=function(){return e},e}var E=Object(f.a)(v()),w=n(12),y=n.n(w),M=n(1),O=n(33),k=n(21);Object(h.b)({OrbitControls:O.a,DeviceOrientationControls:k.a});var j=new M.Vector3(0,0,1),P=new M.Euler,I=new M.Quaternion,x=new M.Quaternion(-Math.sqrt(.5),0,0,Math.sqrt(.5));var C=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,i=e.target,c=void 0===i?[3,.08,0]:i,l=y()(e,["autoRotate","delayRotation","target"]),s=Object(a.useRef)(),u=Object(h.e)(),m=u.camera,d=u.gl,b=new k.a(m);function g(e){console.log({event:e}),s.current.deviceOrientation=e}console.log({controls:b});var f=0,v=0;return Object(a.useEffect)((function(){return console.log("useEffect"),"undefined"!=typeof DeviceOrientationEvent&&DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission():console.error("DeviceOrientationEvent is undefined"),s.current.update=function(){console.log("update orientation");var e=s.current,t=e.deviceOrientation.alpha?M.Math.degToRad(e.deviceOrientation.alpha):0,n=e.deviceOrientation.beta?M.Math.degToRad(e.deviceOrientation.beta):0,a=e.deviceOrientation.gamma?M.Math.degToRad(e.deviceOrientation.gamma):0,r=e.screenOrientation?M.Math.degToRad(e.screenOrientation):0,o=(new M.Quaternion).copy(e.object.quaternion);!function(e,t,n,a,r){P.set(n,t,-a,"YXZ"),e.setFromEuler(P),e.multiply(x),e.multiply(I.setFromAxisAngle(j,-r))}(o,t,n,a,r);var i=function(e,t,n,a){var r,o,i,c=e*t+n*a;if(c>.499)return i=2*Math.atan2(e,a),r=Math.PI/2,o=0,new M.Vector3(r,o,i);if(c<-.499)return i=-2*Math.atan2(e,a),r=-Math.PI/2,o=0,new M.Vector3(r,o,i);var l=e*e,s=t*t,u=n*n;return i=Math.atan2(2*t*a-2*e*n,1-2*s-2*u),r=Math.asin(2*c),o=Math.atan2(2*e*a-2*t*n,1-2*l-2*u),new M.Vector3(r,o,i)}(o.x,o.y,o.z,o.w);e.rotateLeft((f-i.z)/2),f=i.z,e.rotateUp(v-i.y),v=i.y,console.log({oC:e,alpha:t,beta:n,gamma:a,orient:r,currentQ:o,lastGamma:f,lastBeta:v})},window.addEventListener("deviceorientation",g,!1),function(){window.removeEventListener("deviceorientation",g)}}),[]),Object(h.c)((function(){b.update(),o||s.current.update()})),r.a.createElement("orbitControls",p()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[m,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},l))},R=function(){return r.a.createElement(C,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:0,maxAzimuthAngle:Math.PI,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},L=n(23),D=function(){var e=Object(a.useMemo)((function(){var e=new M.Mesh(new M.CylinderGeometry(6,6,20,60,4)),t=new M.Mesh(new M.CylinderGeometry(5,5,20,60,4)),n=new L.a(t),a=new L.a(e).subtract(n).toMesh();a.material=new M.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:M.FlatShading});var r=(new M.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return a.material.map=r,a.position.y=9.48,a}));return r.a.createElement("primitive",{object:e})},z=function(){return r.a.createElement("mesh",{position:[.5,-.35,0]},r.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},A=n(16);function S(e){var t=e.to,n=void 0===t?"/triforce":t,a=Object(h.d)(A.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return a.scene.scale.set(.007,.007,.007),r.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},r.a.createElement("primitive",{object:a.scene,position:[0,0,.5]}))}var T=function(){return r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(S,null))},G=function(e){e.color;var t=e.position,n=void 0===t?[0,0,0]:t,a=e.dimension,o=void 0===a?[0,0,0]:a,i=y()(e,["color","position","dimension"]);return r.a.createElement("mesh",p()({position:n},i),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:o}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},q=function(){return r.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},r.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:M.DoubleSide}))};function F(e){var t=Object(a.useRef)(),n=Object(h.e)().setDefaultCamera;return Object(a.useEffect)((function(){return n(t.current)}),[]),Object(h.c)((function(){return t.current.updateMatrixWorld()})),r.a.createElement("perspectiveCamera",p()({ref:t},e))}var H=function(){return r.a.createElement("span",null,r.a.createElement(E,null),r.a.createElement(h.a,{style:{background:"rgb(140, 140, 255)"}},r.a.createElement(F,{position:[4,0,0]}),"localhost"===location.hostname?r.a.createElement(C,null):r.a.createElement(R,null),r.a.createElement("ambientLight",{intensity:.85}),r.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),r.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),r.a.createElement(z,null),r.a.createElement(T,null),r.a.createElement(G,{position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),r.a.createElement(G,{position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),r.a.createElement(G,{position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),r.a.createElement(G,{position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),r.a.createElement(q,null),r.a.createElement(D,null)))},N=f.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),B=f.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor}));function Q(){var e=null;return(e=Object(h.d)(A.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf")).scene.scale.set(.007,.007,.007),r.a.createElement("mesh",{rotation:[0,Math.PI/2,0]},r.a.createElement("primitive",{object:e.scene,position:[0,0,0]}))}var V=function(){return r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(Q,null))};function J(e){var t=Object(a.useRef)(),n=Object(h.e)().setDefaultCamera;return Object(a.useEffect)((function(){return n(t.current)}),[]),Object(h.c)((function(){return t.current.updateMatrixWorld()})),r.a.createElement("perspectiveCamera",p()({ref:t},e))}var U=function(e){var t=e.display;return r.a.createElement(W,{displayRoom:t},r.a.createElement(N,null,r.a.createElement(B,{backgroundColor:"rgb(0, 168, 224, 0.75)"},r.a.createElement(c.b,{to:"/"},"Back"),r.a.createElement(h.a,null,r.a.createElement(J,{position:[-.85,.5,-.5]}),r.a.createElement(C,{autoRotate:!0,target:[0,.1,0]}),r.a.createElement("directionalLight",{color:"white",intensity:1,position:[-1,-1,0]}),r.a.createElement("directionalLight",{color:"white",intensity:.85,position:[-1,-1,0]}),r.a.createElement("directionalLight",{color:"white",intensity:1,position:[1,1,0]}),r.a.createElement("directionalLight",{color:"white",intensity:1,position:[1,1,1]}),r.a.createElement("directionalLight",{color:"white",intensity:.8,position:[1,-5,1]}),r.a.createElement(V,null)))))},W=f.b.div.withConfig({displayName:"TriforceRoom__HideAndSeek",componentId:"sc-1emic2t-0"})(["display:",";"],(function(e){return e.displayRoom?"block":"none"}));console.log(s.name,s.version);var Y,Z=document.getElementById("root");Y=document.createElement("div"),document.body.appendChild(Y),m.a.init({container:Y,tool:["console","elements"]}),i.a.render(r.a.createElement(c.a,null,r.a.createElement(l.a,{component:function(e){var t=e.history;return window.appHistory=t,r.a.createElement(H,null)}}),r.a.createElement(l.a,{component:function(e){var t=e.history;return r.a.createElement(U,{display:"/triforce"===t.location.pathname})}})),Z)}},[[52,1,2]]]);