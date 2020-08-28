(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.51","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')},61:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(27),i=n.n(a),c=n(17),s=n(4),l=n(20),u=n(28),m=n.n(u),p=n(21),d=n.n(p),b=n(29),h=n.n(b),f=n(30),g=n.n(f),v=n(9),E=n.n(v),y=n(3),w=n(31),O=n.n(w),k=n(10);function j(){var e=O()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return j=function(){return e},e}var M=Object(k.a)(j()),P=n(12),x=n.n(P),C=n(35);Object(y.b)({OrbitControls:C.a});var I=function(e){var t=e.autoRotate,n=void 0!==t&&t,a=e.delayRotation,i=e.target,c=void 0===i?[1,.08,0]:i,s=x()(e,["autoRotate","delayRotation","target"]),l=Object(r.useRef)(),u=Object(y.e)(),m=u.camera,p=u.gl;return Object(y.c)((function(){a||l.current.update()})),o.a.createElement("orbitControls",E()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:l,args:[m,p.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},s))},R=function(){return o.a.createElement(I,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},D=n(40);Object(y.b)({DeviceOrientationControls:D.a});var L=function(){var e=Object(r.useRef)(),t=Object(y.e)().camera;return Object(r.useEffect)((function(){e.current.connect()}),[]),Object(y.c)((function(n){var r=n.gl,o=n.scene;e.current.update(),r.render(o,t)})),o.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},S=n(1),A=n(23),G=function(){var e=Object(r.useMemo)((function(){var e=new S.Mesh(new S.CylinderGeometry(6,6,20,60,4)),t=new S.Mesh(new S.CylinderGeometry(5,5,20,60,4)),n=new A.a(t),r=new A.a(e).subtract(n).toMesh();r.material=new S.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:S.FlatShading});var o=(new S.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return r.material.map=o,r.position.y=9.48,r}));return o.a.createElement("primitive",{object:e})},T=function(){return o.a.createElement("mesh",{position:[.5,-.35,0]},o.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},z=n(16);function H(e){var t=e.to,n=void 0===t?"/triforce":t,a=Object(r.useRef)(0),i=Object(y.d)(z.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return i.scene.scale.set(.007,.007,.007),Object(y.c)((function(){i.scene.rotation.y+=.02,0===a.current?a.current=200:(a.current>100?i.scene.position.y=i.scene.position.y-200/3e5:i.scene.position.y=i.scene.position.y+200/3e5,a.current=a.current-1)})),o.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},o.a.createElement("primitive",{object:i.scene,position:[0,0,.5]}))}var N=function(){return o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(H,null))},q=function(e){e.color;var t=e.position,n=void 0===t?[0,0,0]:t,r=e.dimension,a=void 0===r?[0,0,0]:r,i=x()(e,["color","position","dimension"]);return o.a.createElement("mesh",E()({position:n},i),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:a}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},F=function(){return o.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},o.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:S.DoubleSide}))};function B(e){var t=Object(r.useRef)(),n=Object(y.e)().setDefaultCamera;return Object(r.useEffect)((function(){n(t.current)}),[]),Object(y.c)((function(){t.current.updateMatrixWorld()})),o.a.createElement("perspectiveCamera",E()({ref:t},e))}var J=function(){var e=Object(r.useState)(!1),t=g()(e,2),n=t[0],a=t[1],i=function(e){n||a(!0)};return Object(r.useEffect)((function(){function e(){return(e=h()(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.info("Checking device orientation permissions..."),"undefined"!=typeof DeviceOrientationEvent){e.next=5;break}console.error("DeviceOrientationEvent is undefined. Is this a secure connection over HTTPS?"),e.next=13;break;case 5:if(!DeviceOrientationEvent||"function"!=typeof DeviceOrientationEvent.requestPermission){e.next=12;break}return e.next=8,DeviceOrientationEvent.requestPermission();case 8:"granted"===e.sent?console.info("Device orientation permission granted."):console.error("Device orientation permission denied."),e.next=13;break;case 12:console.info("DeviceOrientationEvent.requestPermission is not a function. Can not ask for permission to use device orientation.");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),window.addEventListener("deviceorientation",i,!1),function(){window.removeEventListener("deviceorientation",i)}}),[]),o.a.createElement("span",null,o.a.createElement(M,null),o.a.createElement(y.a,{style:{background:"rgb(140, 140, 255)"}},o.a.createElement(B,{position:[0,0,0]}),n?null:"localhost"===location.hostname?o.a.createElement(I,null):o.a.createElement(R,null),n&&o.a.createElement(L,null),o.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},o.a.createElement("ambientLight",{intensity:.85}),o.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),o.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),o.a.createElement(T,null),o.a.createElement(N,null),o.a.createElement(q,{position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),o.a.createElement(q,{position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),o.a.createElement(q,{position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),o.a.createElement(q,{position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),o.a.createElement(F,null),o.a.createElement(G,null))))},W=k.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),_=k.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor}));function U(){var e=null;return(e=Object(y.d)(z.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf")).scene.scale.set(.007,.007,.007),o.a.createElement("mesh",{rotation:[0,Math.PI/2,0]},o.a.createElement("primitive",{object:e.scene,position:[0,0,0]}))}var Y=function(){return o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(U,null))};function Z(e){var t=Object(r.useRef)(),n=Object(y.e)().setDefaultCamera;return Object(r.useEffect)((function(){return n(t.current)}),[]),Object(y.c)((function(){return t.current.updateMatrixWorld()})),o.a.createElement("perspectiveCamera",E()({ref:t},e))}var $,K=function(e){var t=e.display;return o.a.createElement(Q,{displayRoom:t},o.a.createElement(W,null,o.a.createElement(_,{backgroundColor:"rgb(0, 168, 224, 0.75)"},o.a.createElement(c.b,{to:"/"},"Back"),o.a.createElement(y.a,null,o.a.createElement(Z,{position:[-.85,.5,-.5]}),o.a.createElement(I,{autoRotate:!0,target:[0,.1,0]}),o.a.createElement("directionalLight",{color:"white",intensity:1,position:[-1,-1,0]}),o.a.createElement("directionalLight",{color:"white",intensity:.85,position:[-1,-1,0]}),o.a.createElement("directionalLight",{color:"white",intensity:1,position:[1,1,0]}),o.a.createElement("directionalLight",{color:"white",intensity:1,position:[1,1,1]}),o.a.createElement("directionalLight",{color:"white",intensity:.8,position:[1,-5,1]}),o.a.createElement(Y,null)))))},Q=k.b.div.withConfig({displayName:"TriforceRoom__HideAndSeek",componentId:"sc-1emic2t-0"})(["display:",";"],(function(e){return e.displayRoom?"block":"none"})),V=document.getElementById("root");$=document.createElement("div"),document.body.appendChild($),m.a.init({container:$,tool:["console","elements"]}),console.info(l.name,l.version),i.a.render(o.a.createElement(c.a,null,o.a.createElement(s.a,{component:function(e){var t=e.history;return window.appHistory=t,o.a.createElement(J,null)}}),o.a.createElement(s.a,{component:function(e){var t=e.history;return o.a.createElement(K,{display:"/triforce"===t.location.pathname})}})),V)}},[[61,1,2]]]);