(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){},1398:function(e,t,n){"use strict";n.r(t);var o=n(24),r=n.n(o),a=n(7),i=n.n(a),c=n(0),l=n.n(c),s=n(59),u=n.n(s),m=n(25),d=n(3),p=n(15),f=n(61),b=n.n(f),h=n(4);function g(){var e=b()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return g=function(){return e},e}var E=Object(h.a)(g()),v=n(65),w=n.n(v),y=n(26),k=n(66),j=n.n(k),O=function(){return Object(c.useEffect)((function(){var e;e=document.createElement("div"),document.body.appendChild(e),j.a.init({container:e,tool:["console","elements"]}),console.info(y.name,y.version),window.io=p.a}),[]),l.a.createElement(P,null,y.version,l.a.createElement(w.a,null)," ",l.a.createElement("button",{onClick:function(){localStorage.removeItem("3d-dome-orientationPermission"),window.location.reload()}},"Reset permissions"))},P=h.b.div.withConfig({displayName:"DeveloperTools",componentId:"lysyo6-0"})(["position:fixed;bottom:1rem;left:1rem;color:white;z-index:9999;background:rgb(0,0,0,0.3);padding:0.3rem;padding-left:0.5rem;padding-right:0.5rem;border-radius:0.5rem;"]),C=n(35),I=n.n(C),S=n(67),M=n.n(S),x=n(5),_=n(1),R=function(){var e=Object(x.e)(),t=e.gl,n=e.scene,o=(new _.TextureLoader).load("public/tf7/kloppenheim_06.jpg",(function(){var e=new _.WebGLCubeRenderTarget(o.image.height);e.fromEquirectangularTexture(t,o),n.background=e}));return null},L=h.b.div.withConfig({displayName:"ScreenMask",componentId:"if13kp-0"})(["width:100vw;height:100vh;background:black;display:flex;justify-content:center;align-items:center;color:white;"]),z=n(11),N=n.n(z),D=function(e){var t=Object(c.useRef)(),n=Object(x.e)().setDefaultCamera;return Object(c.useEffect)((function(){n(t.current)}),[]),Object(x.c)((function(){t.current.updateMatrixWorld()})),l.a.createElement("perspectiveCamera",N()({ref:t},e))},F=n(13),A=n.n(F),T=n(72);Object(x.b)({OrbitControls:T.a});var G=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,r=e.target,a=void 0===r?[1,.08,0]:r,i=A()(e,["autoRotate","delayRotation","target"]),s=Object(c.useRef)(),u=Object(x.e)(),m=u.camera,d=u.gl;return Object(x.c)((function(){o||s.current.update()})),l.a.createElement("orbitControls",N()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[m,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:a},i))},H=function(){return l.a.createElement(G,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},W=n(73);Object(x.b)({DeviceOrientationControls:W.a});var q=function(){var e=Object(c.useRef)(),t=Object(x.e)().camera;return Object(c.useEffect)((function(){return e.current.connect(),function(){e.current.disconnect()}}),[]),Object(x.c)((function(n){var o=n.gl,r=n.scene;e.current.update(),o.render(r,t)})),l.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},B=function(e){var t=e.orientationPermission,n=e.localHost;return l.a.createElement(l.a.Fragment,null,"denied"!==t?null:n?l.a.createElement(G,null):l.a.createElement(H,null),"granted"===t&&l.a.createElement(q,null))},Q=n(37),U=function(){var e=Object(c.useMemo)((function(){var e=new _.Mesh(new _.CylinderGeometry(6,6,.8,60,4)),t=new _.Mesh(new _.CylinderGeometry(5.1,5.1,.8,60,4)),n=new Q.a(t),o=new Q.a(e).subtract(n).toMesh();return o.material=new _.MeshPhongMaterial({color:"#222",shininess:0,metalness:0,flatShading:_.FlatShading}),o.position.y=-.3,o}));return l.a.createElement("primitive",{object:e})},J=function(){return l.a.createElement("mesh",{position:[.5,-.35,0]},l.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},K=n(74),V=[0,Math.PI/2,0];function Y(e){var t=e.modelPath,n=e.position,o=e.to,r=void 0===o?"":o,a=e.rotation,i=void 0===a?V:a,c=e.scale,s=void 0===c?1:c,u=Object(x.d)(K.a,"public/"+t);l.a.useEffect((function(){u.scene.scale.set(s,s,s)}),[u]);var m=function(){r&&window.appHistory.push(r)};return l.a.createElement("mesh",{rotation:i,onClick:m,onPointerUp:m},l.a.createElement("primitive",{object:u.scene,position:n}))}var Z=function(e){return l.a.createElement(c.Suspense,{fallback:null},l.a.createElement(Y,e))},$=function(e){var t=e.position,n=void 0===t?[0,0,0]:t,o=e.dimension,r=void 0===o?[1,1,1,1]:o,a=A()(e,["position","dimension"]),i=Object(c.useRef)(),s=Object(c.useRef)(),u=Object(c.useRef)();return Object(c.useEffect)((function(){if(!i.current){var e=document.createElement("video");e.src="public/wonderwoman.mp4",e.loop=!0,i.current=e}if(!s.current){var t=document.createElement("canvas");t.width=400,t.height=400;var n=t.getContext("2d");n.fillStyle="rgb(0, 0, 0, 0.5)",n.fillRect(0,0,t.width,t.height),u.current=n;var o=new _.Texture(t);o.minFilter=_.LinearFilter,o.magFilter=_.LinearFilter,s.current=o}})),Object(x.c)((function(){i.current&&u.current&&(u.current.drawImage(i.current,0,0),s.current.needsUpdate=!0)})),l.a.createElement(l.a.Fragment,null,l.a.createElement("mesh",N()({position:n},a,{onClick:function(){i.current.paused?i.current.play():i.current.pause()}}),l.a.createElement("planeGeometry",{attach:"geometry",args:r}),l.a.createElement("meshBasicMaterial",{attach:"material",map:s.current,overdraw:!0,side:_.DoubleSide})))},X=function(e){var t=e.to,n=void 0===t?"":t,o=e.video,r=void 0!==o&&o,a=(e.color,e.position),i=void 0===a?[0,0,0]:a,c=e.dimension,s=void 0===c?[0,0,0]:c,u=A()(e,["to","video","color","position","dimension"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("mesh",N()({position:i},u,{onClick:function(){return!r&&window.appHistory.push(n)},onPointerUp:function(){return!r&&window.appHistory.push(n)}}),l.a.createElement("boxBufferGeometry",{attach:"geometry",args:s}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1})),r&&l.a.createElement($,{video:r,position:1===r?[1.4,.3,1.4]:[1.4,.3,-1.4],dimension:[.9,1.6,1,1],rotation:1===r?[0,-Math.PI/4,0]:[0,Math.PI/4,0]}))},ee=function(){return l.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},l.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(20, 20, 20)",metalness:0,specular:1710618,shininess:0,side:_.DoubleSide}))},te=function(){var e=l.a.useState(0),t=i()(e,2),n=t[0],o=t[1];return Object(x.c)((function(){o((function(e){return e+.005}))})),l.a.createElement(l.a.Fragment,null,l.a.createElement("pointLight",{color:"white",intensity:1,position:[4*Math.sin(n),1.5,4*Math.cos(n)]}),l.a.createElement("pointLight",{color:"white",intensity:1,position:[4*Math.sin(n+Math.PI),1.5,4*Math.cos(n+Math.PI)]}))},ne=[.1,1.7,.9],oe=function(e){e.io;var t=Object(c.useState)(!1),n=i()(t,2),o=n[0],r=n[1],a=Object(c.useState)(!0),s=i()(a,2),u=s[0],m=s[1],d=Object(c.useState)(),p=i()(d,2),f=p[0],b=p[1];function h(){return(h=M()(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o&&console.error("Device orientation permissions can not be set on localhost (not secure). Sorry!"),"function"==typeof DeviceOrientationEvent.requestPermission){e.next=8;break}if(!navigator.userAgent.toLowerCase().includes("android")){e.next=8;break}return console.info("Android device detected. Permission granted by default."),b("granted"),e.abrupt("return");case 8:return e.next=10,DeviceOrientationEvent.requestPermission();case 10:t=e.sent,console.info({permission:t}),b(t),localStorage.setItem("3d-dome-orientationPermission",t),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("An error occurred while setting device orientation permission. Permission denied."),console.error(e.t0),b("denied"),localStorage.setItem("3d-dome-orientationPermission","denied");case 22:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e;r("localhost"===location.hostname?(console.info("This is localhost."),!0):(console.info("This is not localhost."),!1)),(e=localStorage.getItem("3d-dome-orientationPermission"))&&b(e),m(!1)}),[]),u?l.a.createElement(L,null,"Loading..."):f?l.a.createElement(x.a,null,l.a.createElement(D,{position:[0,0,0]}),l.a.createElement(B,{orientationPermission:f,localHost:o}),l.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},l.a.createElement("ambientLight",{intensity:.85}),l.a.createElement(te,null),l.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),l.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),l.a.createElement("directionalLight",{color:"white",intensity:.2,position:[10,6,5]}),l.a.createElement(R,null),l.a.createElement(ee,null),l.a.createElement(U,null),l.a.createElement(X,{video:1,position:[1.25,.3,1.5],dimension:ne,rotation:[0,Math.PI/4,0]}),l.a.createElement(X,{video:2,position:[1.25,.3,-1.5],dimension:ne,rotation:[0,-Math.PI/4,0]}),l.a.createElement(X,{to:"/kiosk3",position:[-1.5,.3,-1.25],dimension:ne,rotation:[0,-Math.PI/8,0]}),l.a.createElement(X,{to:"/kiosk4",position:[-1.5,.3,1.25],dimension:ne,rotation:[0,Math.PI/8,0]}),l.a.createElement(J,null),l.a.createElement(Z,{modelPath:"tf7/wings.glb",position:[.06,-.3,.7]}),l.a.createElement(Z,{to:"/pedestal",modelPath:"tf7/att_pg_manniTest_low.glb",position:[.05,-.23,.5]}),l.a.createElement(Z,{modelPath:"tf7/pong_arcade_cabin/scene.gltf",position:[1,.5,3],rotation:[0,1.8,0],scale:8e-4}),l.a.createElement(Z,{to:"/hat",modelPath:"tf7/weathered_pith_hat/scene.gltf",position:[-2.1,0,2.1],scale:.005}))):l.a.createElement(L,null,l.a.createElement("button",{onClick:function(){return h.apply(this,arguments)}},"Enable access device orientation"))},re=n(14),ae=n.n(re),ie=h.b.div.withConfig({displayName:"ViewContent",componentId:"sc-1m2f6qh-0"})(["background:",";padding:5rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),ce=function(e){var t=e.back,n=e.children,o=A()(e,["back","children"]);return l.a.createElement(le,o,l.a.createElement(ie,null,void 0!==t?t:l.a.createElement(m.b,{to:"/"},"Back"),n))},le=h.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-1ju6635-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;min-height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),se=n(40),ue=n.n(se);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){ue()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=function(e){var t=e.io,n=e.roomId,o=e.selectedRef,a=e.selected,i=e.setSelected;function s(e){var t=[];return a?(Object.keys(a).forEach((function(n){if(a[n]&&a[n]===e){ae.a.seed(n.split().map((function(e){return e.charCodeAt(0)})));var o=ae.a.name.findName();t=[].concat(r()(t),[o])}})),t):[]}Object(c.useEffect)((function(){console.log("mounted")}),[]),Object(c.useEffect)((function(){t&&t.on("answer",(function(e){var t=de(de({},o.current),{},ue()({},e.userId,e.answer));i(t),o.current=t}))}),[t]);var u=l.a.createElement("div",null,"When did ",l.a.createElement("i",null,"Wonder Woman")," make her first appearance?");return l.a.createElement(be,null,l.a.createElement(fe,null,u),[1912,2010,1941,1963].map((function(e){var o=s(e);return l.a.createElement(he,{key:e,selectedByUser:!!t&&s(e).filter((function(e){return e===t.id})).length>0},l.a.createElement("span",{onClick:function(){return function(e){t.emit("answer",{answer:e,roomId:n,userId:t.id})}(e)}},e),l.a.createElement(ge,null,o.length>0?"Selected by: ".concat(o.join(", ")):""))})))},fe=h.b.div.withConfig({displayName:"Quiz__Question",componentId:"t6csu7-0"})(["padding-bottom:1rem;"]),be=h.b.div.withConfig({displayName:"Quiz",componentId:"t6csu7-1"})(["text-align:center;font-size:2rem;padding-top:2rem;padding-bottom:2rem;"]),he=h.b.div.withConfig({displayName:"Quiz__Answer",componentId:"t6csu7-2"})(["padding:1rem;span{cursor:pointer;",":hover{color:black;}}"],(function(e){return e.selectedByUser?"color: black;":""})),ge=h.b.div.withConfig({displayName:"Quiz__Selectors",componentId:"t6csu7-3"})(["font-size:0.8rem;"]),Ee=(h.b.div.withConfig({displayName:"Quiz__More",componentId:"t6csu7-4"})(["padding-top:1.5rem;"]),function(e){var t=e.color,n=e.io,o=e.roomLog,r=e.selectedRef,a=e.selected,s=e.setSelected,u=Object(c.useState)(""),m=i()(u,2),p=m[0],f=m[1],b=Object(c.useState)("something"),h=i()(b,2),g=h[0],E=h[1],v=Object(d.e)(),w=v.search,y=v.pathname,k=Object(c.useMemo)((function(){return w.indexOf("?join=")>-1?w.replace("?join=",""):n&&n.id}),[w,n]),j=Object(c.useMemo)((function(){if(k){var e=window.location,t=e.protocol,n=e.hostname,o=e.port;return"".concat(t,"//").concat(n).concat(o?":".concat(o):"","/#").concat(y,"?join=").concat(k)}}),[n,k]);return Object(c.useEffect)((function(){if(n&&n.id){ae.a.seed(n.id.split().map((function(e){return e.charCodeAt(0)})));var e=ae.a.name.findName();f(e)}}),[n]),Object(c.useEffect)((function(){n&&n.id&&w.indexOf("?join=")>-1&&(console.log("Request to join ".concat(k,".")),n.emit("joinRoom",k))}),[n]),l.a.createElement(ce,{zIndex:800,backgroundColor:t},l.a.createElement(ve,null,l.a.createElement(we,null,"Welcome, ",p,"!"),l.a.createElement("br",null),l.a.createElement(we,null,"Send this link to your friends to invite them to play with you:"," ",l.a.createElement("a",{target:"_blank",href:j},j)),l.a.createElement(pe,{io:n,roomId:k,selectedRef:r,selected:a,setSelected:s}),l.a.createElement("hr",null),l.a.createElement("br",null),o.length>0&&l.a.createElement("div",null,l.a.createElement("b",null,"Messages:"),l.a.createElement("br",null),l.a.createElement("div",null,o.map((function(e){return l.a.createElement("div",{key:Math.random()},e)})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.emit("message",{input:"".concat(p," said: ").concat(g),roomId:k}),E("")}},l.a.createElement("label",null,"Say something to your friends:"," ",l.a.createElement("input",{value:g,onChange:function(e){return E(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Send")))))}),ve=h.b.div.withConfig({displayName:"Kiosk__Content",componentId:"o2rhws-0"})(["padding-top:2rem;"]),we=h.b.div.withConfig({displayName:"Kiosk__Centered",componentId:"o2rhws-1"})(["text-align:center;"]),ye=function(e){return l.a.createElement("model-viewer",N()({"ar-modes":"quick-look webxr scene-viewer",ar:!0,"auto-rotate":!0,"camera-controls":!0},e))},ke=function(){return l.a.createElement(ye,{src:"public/triforce2/scene.gltf","ios-src":"public/triforce.usdz"})},je=function(e){var t=e.color;return l.a.createElement(ce,{backgroundColor:t},l.a.createElement(Oe,null,l.a.createElement(ke,null)))},Oe=h.b.div.withConfig({displayName:"Pedestal__Content",componentId:"sc-1lq04xy-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),Pe=function(){return l.a.createElement(ye,{src:"public/tf7/weathered_pith_hat/scene.gltf","ios-src":"public/tf7/Weathered_Pith_Hat.usdz"})},Ce=function(e){var t=e.color;return l.a.createElement(ce,{backgroundColor:t},l.a.createElement(Ie,null,l.a.createElement(Pe,null)))},Ie=h.b.div.withConfig({displayName:"Hat__Content",componentId:"sc-1g7jotc-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),Se=document.getElementById("root"),Me=function(){var e=Object(c.useState)([]),t=i()(e,2),n=t[0],o=t[1],a=Object(c.useRef)([]),s=Object(c.useState)(),u=i()(s,2),f=u[0],b=u[1],h=Object(c.useRef)({}),g=Object(c.useState)({}),v=i()(g,2),w=v[0],y=v[1];return Object(c.useEffect)((function(){p.a.on("connect",(function(){p.a.ready=!0,b(p.a)})),p.a.on("message",(function(e){console.log("Message received",{message:e}),a.current=[].concat(r()(a.current),[e]),o(a.current)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(O,null),l.a.createElement(m.a,null,l.a.createElement(d.a,{component:function(e){var t=e.history;return window.appHistory=t,l.a.createElement(oe,{io:f})}}),l.a.createElement(d.a,{path:"/pedestal",component:function(){return l.a.createElement(je,{color:"rgb(0, 168, 224, 0.75)"})}}),l.a.createElement(d.a,{path:"/hat",component:function(){return l.a.createElement(Ce,{color:"rgb(100, 100, 100, 0.75)"})}}),l.a.createElement(d.a,{path:"/kiosk1",component:function(){return l.a.createElement(Ee,{color:"orange",io:f,roomLog:n,selectedRef:h,selected:w,setSelected:y})}}),l.a.createElement(d.a,{path:"/kiosk2",component:function(){return l.a.createElement(Ee,{color:"blue",io:f,roomLog:n,selectedRef:h,selected:w,setSelected:y})}}),l.a.createElement(d.a,{path:"/kiosk3",component:function(){return l.a.createElement(Ee,{color:"green",io:f,roomLog:n,selectedRef:h,selected:w,setSelected:y})}}),l.a.createElement(d.a,{path:"/kiosk4",component:function(){return l.a.createElement(Ee,{color:"rgb(180, 180, 0)",io:f,roomLog:n,selectedRef:h,selected:w,setSelected:y})}})))};u.a.render(l.a.createElement(Me,null),Se)},15:function(e,t,n){"use strict";(function(e){var o=n(60),r=n.n(o),a=e.env.WEBSOCKET,i=void 0===a?"https://gloria.yvesgurcan.com":a,c="localhost"===location.hostname?"http://localhost:3000":i,l=r()(c);t.a=l}).call(this,n(21))},26:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.89","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^6.1.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","faker":"^5.1.0","react-fps-stats":"^0.1.3","react-stats":"0.0.5","react-three-fiber":"^4.2.20","socket.io-client":"^2.3.0","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')}},[[1398,1,2]]]);