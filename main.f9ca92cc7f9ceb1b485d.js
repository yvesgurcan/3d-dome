(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.59","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')},61:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(26),i=n.n(a),c=n(16),s=n(3),l=n(19),u=n(27),m=n.n(u),d=n(20),p=n.n(d),b=n(28),h=n.n(b),f=n(29),g=n.n(f),v=n(9),w=n.n(v),y=n(5),E=n(30),k=n.n(E),O=n(10);function x(){var e=k()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return x=function(){return e},e}var j=Object(O.a)(x()),P=n(12),M=n.n(P),C=n(34);Object(y.b)({OrbitControls:C.a});var I=function(e){var t=e.autoRotate,n=void 0!==t&&t,a=e.delayRotation,i=e.target,c=void 0===i?[1,.08,0]:i,s=M()(e,["autoRotate","delayRotation","target"]),l=Object(r.useRef)(),u=Object(y.e)(),m=u.camera,d=u.gl;return Object(y.c)((function(){a||l.current.update()})),o.a.createElement("orbitControls",w()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:l,args:[m,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},s))},D=function(){return o.a.createElement(I,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},R=n(39);Object(y.b)({DeviceOrientationControls:R.a});var L=function(){var e=Object(r.useRef)(),t=Object(y.e)().camera;return Object(r.useEffect)((function(){return e.current.connect(),function(){e.current.disconnect()}}),[]),Object(y.c)((function(n){var r=n.gl,o=n.scene;e.current.update(),r.render(o,t)})),o.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},S=n(1),z=n(22),q=function(){var e=Object(r.useMemo)((function(){var e=new S.Mesh(new S.CylinderGeometry(6,6,20,60,4)),t=new S.Mesh(new S.CylinderGeometry(5,5,20,60,4)),n=new z.a(t),r=new z.a(e).subtract(n).toMesh();r.material=new S.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:S.FlatShading});var o=(new S.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return r.material.map=o,r.position.y=9.48,r}));return o.a.createElement("primitive",{object:e})},G=function(){return o.a.createElement("mesh",{position:[.5,-.35,0]},o.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},T=n(40);function A(e){var t=e.to,n=void 0===t?"/triforce":t,a=Object(r.useRef)(0),i=Object(y.d)(T.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return i.scene.scale.set(.007,.007,.007),Object(y.c)((function(){i.scene.rotation.y+=.02,0===a.current?a.current=200:(a.current>100?i.scene.position.y=i.scene.position.y-200/3e5:i.scene.position.y=i.scene.position.y+200/3e5,a.current=a.current-1)})),o.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},o.a.createElement("primitive",{object:i.scene,position:[0,0,.5]}))}var H=function(){return o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(A,null))},N=function(e){e.color;var t=e.position,n=void 0===t?[0,0,0]:t,r=e.dimension,a=void 0===r?[0,0,0]:r,i=M()(e,["color","position","dimension"]);return o.a.createElement("mesh",w()({position:n},i),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:a}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},F=function(){return o.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},o.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:S.DoubleSide}))};function B(e){var t=Object(r.useRef)(),n=Object(y.e)().setDefaultCamera;return Object(r.useEffect)((function(){n(t.current)}),[]),Object(y.c)((function(){t.current.updateMatrixWorld()})),o.a.createElement("perspectiveCamera",w()({ref:t},e))}var J,_=function(){var e=Object(r.useState)(!1),t=g()(e,2),n=t[0],a=t[1],i=function(e){n||a(!0)};return Object(r.useEffect)((function(){function e(){return(e=h()(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.info("Checking device orientation permission..."),void 0!==L){e.next=5;break}console.error("DeviceOrientation is undefined. Is this a secure connection over HTTPS?"),e.next=19;break;case 5:if("function"!=typeof L.requestPermission){e.next=17;break}return e.next=8,L.requestPermission();case 8:if("granted"!==e.sent){e.next=14;break}return console.info("Device orientation permission granted."),e.abrupt("return",!0);case 14:console.error("Device orientation permission denied.");case 15:e.next=19;break;case 17:return console.info("DeviceOrientation.requestPermission is not a function. Can not ask for permission to use device orientation."),e.abrupt("return",!0);case 19:return e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return e.apply(this,arguments)}().then((function(e){e&&(console.info("Setting up device orientation listener..."),window.addEventListener("deviceorientation",i,!1))})),function(){window.removeEventListener("deviceorientation",i)}}),[]),o.a.createElement("span",null,o.a.createElement(j,null),o.a.createElement("br",null),o.a.createElement("button",{type:"checkbox",onClick:function(){console.info("start"),console.log("requestOrientationPermission"),DeviceOrientationEvent.requestPermission().then((function(e){console.log(e),"granted"==e&&window.addEventListener("deviceorientation",(function(e){console.log("oi")}))})).catch(console.error)}},"Enable access device orientation"),o.a.createElement(y.a,{style:{background:"rgb(140, 140, 255)"}},o.a.createElement(B,{position:[0,0,0]}),n?null:"localhost"===location.hostname?o.a.createElement(I,null):o.a.createElement(D,null),n&&o.a.createElement(L,null),o.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},o.a.createElement("ambientLight",{intensity:.85}),o.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),o.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),o.a.createElement(G,null),o.a.createElement(H,null),o.a.createElement(N,{position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),o.a.createElement(N,{position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),o.a.createElement(N,{position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),o.a.createElement(N,{position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),o.a.createElement(F,null),o.a.createElement(q,null))))},U=O.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),V=O.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),W=function(){return o.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","ios-src":"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz","ar-modes":"webxr scene-viewer quick-look",ar:!0,"auto-rotate":!0,"camera-controls":!0})},Y=O.b.div.withConfig({displayName:"TriforceModal__CenteredViewer",componentId:"k0zb01-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),Z=document.getElementById("root");J=document.createElement("div"),document.body.appendChild(J),m.a.init({container:J,tool:["console","elements"]}),console.info(l.name,l.version),i.a.render(o.a.createElement(c.a,null,o.a.createElement(s.a,{component:function(e){var t=e.history;return window.appHistory=t,"/ar"===t.location.pathname?null:o.a.createElement(_,null)}}),o.a.createElement(s.a,{path:"/triforce",component:function(){return o.a.createElement(U,null,o.a.createElement(V,{backgroundColor:"rgb(0, 168, 224, 0.75)"},o.a.createElement(c.b,{to:"/"},"Back"),o.a.createElement(Y,null,o.a.createElement(W,null))))}}),o.a.createElement(s.a,{path:"/ar",component:function(){return o.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","auto-rotate":!0,"camera-controls":!0,ar:!0,"ar-modes":"webxr scene-viewer quick-look","ar-scale":"auto","ios-src":"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz"})}})),Z)}},[[61,1,2]]]);