(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),i=n.n(o),c=n(6),l=n(17),s=n(3),u=n(9),m=n.n(u),h=n(5),d=n(26),p=n.n(d),b=n(11);function g(){var e=p()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return g=function(){return e},e}var f=Object(b.a)(g()),E=n(12),y=n.n(E),v=n(1),w=n(30);Object(h.b)({OrbitControls:w.a});var M=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,i=e.target,c=void 0===i?[3,.08,0]:i,l=y()(e,["autoRotate","delayRotation","target"]),s=Object(a.useRef)(),u=Object(h.e)(),d=u.camera,p=u.gl;return Object(h.c)((function(){o||s.current.update()})),r.a.createElement("orbitControls",m()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[d,p.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},l))},j=function(){return r.a.createElement(M,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:0,maxAzimuthAngle:Math.PI,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},O=n(21),P=function(){var e=Object(a.useMemo)((function(){var e=new v.Mesh(new v.CylinderGeometry(6,6,20,60,4)),t=new v.Mesh(new v.CylinderGeometry(5,5,20,60,4)),n=new O.a(t),a=new O.a(e).subtract(n).toMesh();a.material=new v.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:v.FlatShading});var r=(new v.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return a.material.map=r,a.position.y=9.48,a}));return r.a.createElement("primitive",{object:e})},I=function(){return r.a.createElement("mesh",{position:[.5,-.35,0]},r.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},x=n(16);function C(e){var t=e.to,n=void 0===t?"/triforce":t,a=Object(h.d)(x.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return a.scene.scale.set(.007,.007,.007),r.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},r.a.createElement("primitive",{object:a.scene,position:[0,0,.5]}))}var k=function(){return r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(C,null))},R=function(e){e.color;var t=e.position,n=void 0===t?[0,0,0]:t,a=e.dimension,o=void 0===a?[0,0,0]:a,i=y()(e,["color","position","dimension"]);return r.a.createElement("mesh",m()({position:n},i),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:o}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},L=function(){return r.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},r.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:v.DoubleSide}))};function S(e){var t=Object(a.useRef)(),n=Object(h.e)().setDefaultCamera;return Object(a.useEffect)((function(){return n(t.current)}),[]),Object(h.c)((function(){return t.current.updateMatrixWorld()})),r.a.createElement("perspectiveCamera",m()({ref:t},e))}var z=function(){return r.a.createElement("span",null,r.a.createElement(f,null),r.a.createElement(h.a,{style:{background:"rgb(140, 140, 255)"}},r.a.createElement(S,{position:[4,0,0]}),"localhost"===location.hostname?r.a.createElement(M,null):r.a.createElement(j,null),r.a.createElement("ambientLight",{intensity:.85}),r.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),r.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),r.a.createElement(I,null),r.a.createElement(k,null),r.a.createElement(R,{position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),r.a.createElement(R,{position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),r.a.createElement(R,{position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),r.a.createElement(R,{position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),r.a.createElement(L,null),r.a.createElement(P,null)))},A=b.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),G=b.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor}));function D(){var e=Object(h.d)(x.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf");return e.scene.scale.set(.007,.007,.007),r.a.createElement("mesh",{rotation:[0,Math.PI/2,0]},r.a.createElement("primitive",{object:e.scene,position:[0,0,0]}))}var H=function(){return r.a.createElement(a.Suspense,{fallback:null},r.a.createElement(D,null))};function B(e){var t=Object(a.useRef)(),n=Object(h.e)().setDefaultCamera;return Object(a.useEffect)((function(){return n(t.current)}),[]),Object(h.c)((function(){return t.current.updateMatrixWorld()})),r.a.createElement("perspectiveCamera",m()({ref:t},e))}var F=document.getElementById("root"),T=Object(c.a)();i.a.render(r.a.createElement(l.a,{history:T},r.a.createElement(s.a,{component:function(e){var t=e.history;return window.appHistory=t,r.a.createElement(z,null)}}),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/triforce",component:function(){return r.a.createElement(A,null,r.a.createElement(G,{backgroundColor:"rgb(0, 168, 224, 0.75)"},r.a.createElement(l.b,{to:"/"},"Back"),r.a.createElement(h.a,null,r.a.createElement(B,{position:[-.9,0,0]}),r.a.createElement(M,{autoRotate:!0,target:[0,0,0]}),r.a.createElement(H,null))))}}))),F)}},[[49,1,2]]]);