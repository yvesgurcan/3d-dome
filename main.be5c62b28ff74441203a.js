(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t){},1398:function(e,t,n){"use strict";n.r(t);var o=n(24),r=n.n(o),a=n(10),i=n.n(a),c=n(0),l=n.n(c),s=n(59),u=n.n(s),m=n(25),d=n(3),p=n(14),f=n(61),b=n.n(f),g=n(4);function h(){var e=b()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return h=function(){return e},e}var E=Object(g.a)(h()),v=n(65),y=n.n(v),w=n(26),k=n(66),j=n.n(k),O=function(){return Object(c.useEffect)((function(){var e;e=document.createElement("div"),document.body.appendChild(e),j.a.init({container:e,tool:["console","elements"]}),console.info(w.name,w.version),window.io=p.a}),[]),l.a.createElement(P,null,w.version,l.a.createElement(y.a,null)," ",l.a.createElement("button",{onClick:function(){localStorage.removeItem("3d-dome-orientationPermission"),window.location.reload()}},"Reset permissions"))},P=g.b.div.withConfig({displayName:"DeveloperTools",componentId:"lysyo6-0"})(["position:fixed;bottom:1rem;left:1rem;color:white;z-index:9999;background:rgb(0,0,0,0.3);padding:0.3rem;padding-left:0.5rem;padding-right:0.5rem;border-radius:0.5rem;"]),C=n(35),x=n.n(C),I=n(67),S=n.n(I),M=n(5),R=n(1),z=function(){var e=Object(M.e)().scene,t=(new R.CubeTextureLoader).load(["public/space-skybox/1.jpg","public/space-skybox/2.jpg","public/space-skybox/3.jpg","public/space-skybox/4.jpg","public/space-skybox/5.jpg","public/space-skybox/6.jpg"]);return e.background=t,null},L=g.b.div.withConfig({displayName:"ScreenMask",componentId:"if13kp-0"})(["width:100vw;height:100vh;background:black;display:flex;justify-content:center;align-items:center;color:white;"]),N=n(12),D=n.n(N),_=function(e){var t=Object(c.useRef)(),n=Object(M.e)().setDefaultCamera;return Object(c.useEffect)((function(){n(t.current)}),[]),Object(M.c)((function(){t.current.updateMatrixWorld()})),l.a.createElement("perspectiveCamera",D()({ref:t},e))},A=n(18),T=n.n(A),H=n(72);Object(M.b)({OrbitControls:H.a});var G=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,r=e.target,a=void 0===r?[1,.08,0]:r,i=T()(e,["autoRotate","delayRotation","target"]),s=Object(c.useRef)(),u=Object(M.e)(),m=u.camera,d=u.gl;return Object(M.c)((function(){o||s.current.update()})),l.a.createElement("orbitControls",D()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[m,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:a},i))},q=function(){return l.a.createElement(G,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},B=n(73);Object(M.b)({DeviceOrientationControls:B.a});var F=function(){var e=Object(c.useRef)(),t=Object(M.e)().camera;return Object(c.useEffect)((function(){return e.current.connect(),function(){e.current.disconnect()}}),[]),Object(M.c)((function(n){var o=n.gl,r=n.scene;e.current.update(),o.render(r,t)})),l.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},Q=function(e){var t=e.orientationPermission,n=e.localHost;return l.a.createElement(l.a.Fragment,null,"denied"!==t?null:n?l.a.createElement(G,null):l.a.createElement(q,null),"granted"===t&&l.a.createElement(F,null))},W=n(37),U=function(){var e=Object(c.useMemo)((function(){var e=new R.Mesh(new R.CylinderGeometry(6,6,.4,60,4)),t=new R.Mesh(new R.CylinderGeometry(5.1,5.1,.4,60,4)),n=new W.a(t),o=new W.a(e).subtract(n).toMesh();o.material=new R.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:R.FlatShading});var r=(new R.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return o.material.map=r,o.position.y=-.3,o}));return l.a.createElement("primitive",{object:e})},J=function(){return l.a.createElement("mesh",{position:[.5,-.35,0]},l.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},K=n(74);function V(e){var t=e.to,n=void 0===t?"/pedestal":t,o=e.position,r=e.modelPath,a=void 0===r?"triforce":r,i=(Object(c.useRef)(0),Object(M.d)(K.a,"public/".concat(a,"/scene.gltf")));return i.scene.scale.set(.007,.007,.007),Object(M.c)((function(){})),console.log(a),l.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},l.a.createElement("primitive",{object:i.scene,position:o}))}var Y=function(e){return l.a.createElement(c.Suspense,{fallback:null},l.a.createElement(V,e))},Z=function(e){var t=e.to,n=void 0===t?"":t,o=(e.color,e.position),r=void 0===o?[0,0,0]:o,a=e.dimension,i=void 0===a?[0,0,0]:a,c=T()(e,["to","color","position","dimension"]);return l.a.createElement("mesh",D()({position:r},c,{onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}}),l.a.createElement("boxBufferGeometry",{attach:"geometry",args:i}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},$=function(){return l.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},l.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:R.DoubleSide}))},X=function(e){e.io;var t=Object(c.useState)(!1),n=i()(t,2),o=n[0],r=n[1],a=Object(c.useState)(!0),s=i()(a,2),u=s[0],m=s[1],d=Object(c.useState)(),p=i()(d,2),f=p[0],b=p[1];function g(){return(g=S()(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o&&console.error("Device orientation permissions can not be set on localhost (not secure). Sorry!"),"function"==typeof DeviceOrientationEvent.requestPermission){e.next=8;break}if(!navigator.userAgent.toLowerCase().includes("android")){e.next=8;break}return console.info("Android device detected. Permission granted by default."),b("granted"),e.abrupt("return");case 8:return e.next=10,DeviceOrientationEvent.requestPermission();case 10:t=e.sent,console.info({permission:t}),b(t),localStorage.setItem("3d-dome-orientationPermission",t),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("An error occurred while setting device orientation permission. Permission denied."),console.error(e.t0),b("denied"),localStorage.setItem("3d-dome-orientationPermission","denied");case 22:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e;r("localhost"===location.hostname?(console.info("This is localhost."),!0):(console.info("This is not localhost."),!1)),(e=localStorage.getItem("3d-dome-orientationPermission"))&&b(e),m(!1)}),[]),u?l.a.createElement(L,null,"Loading..."):f?l.a.createElement(M.a,null,l.a.createElement(_,{position:[0,0,0]}),l.a.createElement(Q,{orientationPermission:f,localHost:o}),l.a.createElement(Y,{pathModel:"triforce4",position:[2,1,0]}),l.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},l.a.createElement("ambientLight",{intensity:.85}),l.a.createElement("spotLight",{color:"white",intensity:.1,position:[-20,20,0]}),l.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),l.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),l.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),l.a.createElement(z,null),l.a.createElement($,null),l.a.createElement(U,null),l.a.createElement(Z,{to:"/kiosk1",position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),l.a.createElement(Z,{to:"/kiosk2",position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),l.a.createElement(Z,{to:"/kiosk3",position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),l.a.createElement(Z,{to:"/kiosk4",position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),l.a.createElement(J,null),l.a.createElement(Y,{modelPath:"triforce",position:[0,0,.5]}))):l.a.createElement(L,null,l.a.createElement("button",{onClick:function(){return g.apply(this,arguments)}},"Enable access device orientation"))},ee=n(13),te=n.n(ee),ne=g.b.div.withConfig({displayName:"ViewContent",componentId:"sc-1m2f6qh-0"})(["background:",";padding:5rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),oe=function(e){var t=e.back,n=e.children,o=T()(e,["back","children"]);return l.a.createElement(re,o,l.a.createElement(ne,null,void 0!==t?t:l.a.createElement(m.b,{to:"/"},"Back"),n))},re=g.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-1ju6635-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;min-height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),ae=n(40),ie=n.n(ae);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){ie()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=function(e){var t=e.io,n=e.roomId,o=e.selectedRef,a=e.selected,i=e.setSelected;function s(e){var t=[];return a?(Object.keys(a).forEach((function(n){if(a[n]&&a[n]===e){te.a.seed(n.split().map((function(e){return e.charCodeAt(0)})));var o=te.a.name.findName();t=[].concat(r()(t),[o])}})),t):[]}Object(c.useEffect)((function(){console.log("mounted")}),[]),Object(c.useEffect)((function(){t&&t.on("answer",(function(e){var t=le(le({},o.current),{},ie()({},e.userId,e.answer));i(t),o.current=t}))}),[t]);var u=l.a.createElement("div",null,"When did ",l.a.createElement("i",null,"Wonder Woman")," make her first appearance?");return l.a.createElement(me,null,l.a.createElement(ue,null,u),[1912,2010,1941,1963].map((function(e){var o=s(e);return l.a.createElement(de,{key:e,selectedByUser:!!t&&s(e).filter((function(e){return e===t.id})).length>0},l.a.createElement("span",{onClick:function(){return function(e){t.emit("answer",{answer:e,roomId:n,userId:t.id})}(e)}},e),l.a.createElement(pe,null,o.length>0?"Selected by: ".concat(o.join(", ")):""))})))},ue=g.b.div.withConfig({displayName:"Quiz__Question",componentId:"t6csu7-0"})(["padding-bottom:1rem;"]),me=g.b.div.withConfig({displayName:"Quiz",componentId:"t6csu7-1"})(["text-align:center;font-size:2rem;padding-top:2rem;padding-bottom:2rem;"]),de=g.b.div.withConfig({displayName:"Quiz__Answer",componentId:"t6csu7-2"})(["padding:1rem;span{cursor:pointer;",":hover{color:black;}}"],(function(e){return e.selectedByUser?"color: black;":""})),pe=g.b.div.withConfig({displayName:"Quiz__Selectors",componentId:"t6csu7-3"})(["font-size:0.8rem;"]),fe=(g.b.div.withConfig({displayName:"Quiz__More",componentId:"t6csu7-4"})(["padding-top:1.5rem;"]),function(e){var t=e.color,n=e.io,o=e.roomLog,r=e.selectedRef,a=e.selected,s=e.setSelected,u=Object(c.useState)(""),m=i()(u,2),p=m[0],f=m[1],b=Object(c.useState)("something"),g=i()(b,2),h=g[0],E=g[1],v=Object(d.e)(),y=v.search,w=v.pathname,k=Object(c.useMemo)((function(){return y.indexOf("?join=")>-1?y.replace("?join=",""):n&&n.id}),[y,n]),j=Object(c.useMemo)((function(){if(k){var e=window.location,t=e.protocol,n=e.hostname,o=e.port;return"".concat(t,"//").concat(n).concat(o?":".concat(o):"","/#").concat(w,"?join=").concat(k)}}),[n,k]);return Object(c.useEffect)((function(){if(n&&n.id){te.a.seed(n.id.split().map((function(e){return e.charCodeAt(0)})));var e=te.a.name.findName();f(e)}}),[n]),Object(c.useEffect)((function(){n&&n.id&&y.indexOf("?join=")>-1&&(console.log("Request to join ".concat(k,".")),n.emit("joinRoom",k))}),[n]),l.a.createElement(oe,{zIndex:800,backgroundColor:t},l.a.createElement(be,null,l.a.createElement(ge,null,"Welcome, ",p,"!"),l.a.createElement("br",null),l.a.createElement(ge,null,"Send this link to your friends to invite them to play with you:"," ",l.a.createElement("a",{target:"_blank",href:j},j)),l.a.createElement(se,{io:n,roomId:k,selectedRef:r,selected:a,setSelected:s}),l.a.createElement("hr",null),l.a.createElement("br",null),o.length>0&&l.a.createElement("div",null,l.a.createElement("b",null,"Messages:"),l.a.createElement("br",null),l.a.createElement("div",null,o.map((function(e){return l.a.createElement("div",{key:Math.random()},e)})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.emit("message",{input:"".concat(p," said: ").concat(h),roomId:k}),E("")}},l.a.createElement("label",null,"Say something to your friends:"," ",l.a.createElement("input",{value:h,onChange:function(e){return E(e.target.value)}}),l.a.createElement("button",{type:"submit"},"Send")))))}),be=g.b.div.withConfig({displayName:"Kiosk__Content",componentId:"o2rhws-0"})(["padding-top:2rem;"]),ge=g.b.div.withConfig({displayName:"Kiosk__Centered",componentId:"o2rhws-1"})(["text-align:center;"]),he=function(e){return l.a.createElement("model-viewer",D()({"ar-modes":"quick-look webxr scene-viewer",ar:!0,"auto-rotate":!0,"camera-controls":!0},e))},Ee=function(){return l.a.createElement(he,{src:"public/triforce2/scene.gltf","ios-src":"public/triforce.usdz"})},ve=function(e){var t=e.color;return l.a.createElement(oe,{backgroundColor:t},l.a.createElement(ye,null,l.a.createElement(Ee,null)))},ye=g.b.div.withConfig({displayName:"Pedestal__Content",componentId:"sc-1lq04xy-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),we=document.getElementById("root"),ke=function(){var e=Object(c.useState)([]),t=i()(e,2),n=t[0],o=t[1],a=Object(c.useRef)([]),s=Object(c.useState)(),u=i()(s,2),f=u[0],b=u[1],g=Object(c.useRef)({}),h=Object(c.useState)({}),v=i()(h,2),y=v[0],w=v[1];return Object(c.useEffect)((function(){p.a.on("connect",(function(){p.a.ready=!0,b(p.a)})),p.a.on("message",(function(e){console.log("Message received",{message:e}),a.current=[].concat(r()(a.current),[e]),o(a.current)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(O,null),l.a.createElement(m.a,null,l.a.createElement(d.a,{component:function(e){var t=e.history;return window.appHistory=t,l.a.createElement(X,{io:f})}}),l.a.createElement(d.a,{path:"/pedestal",component:function(){return l.a.createElement(ve,{color:"rgb(0, 168, 224, 0.75)"})}}),l.a.createElement(d.a,{path:"/kiosk1",component:function(){return l.a.createElement(fe,{color:"orange",io:f,roomLog:n,selectedRef:g,selected:y,setSelected:w})}}),l.a.createElement(d.a,{path:"/kiosk2",component:function(){return l.a.createElement(fe,{color:"blue",io:f,roomLog:n,selectedRef:g,selected:y,setSelected:w})}}),l.a.createElement(d.a,{path:"/kiosk3",component:function(){return l.a.createElement(fe,{color:"green",io:f,roomLog:n,selectedRef:g,selected:y,setSelected:w})}}),l.a.createElement(d.a,{path:"/kiosk4",component:function(){return l.a.createElement(fe,{color:"rgb(180, 180, 0)",io:f,roomLog:n,selectedRef:g,selected:y,setSelected:w})}})))};u.a.render(l.a.createElement(ke,null),we)},14:function(e,t,n){"use strict";(function(e){var o=n(60),r=n.n(o),a=e.env.WEBSOCKET,i=void 0===a?"https://gloria.yvesgurcan.com":a,c="localhost"===location.hostname?"http://localhost:3000":i,l=r()(c);t.a=l}).call(this,n(21))},26:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.84","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","copy-webpack-plugin":"^6.1.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","faker":"^5.1.0","react-fps-stats":"^0.1.3","react-stats":"0.0.5","react-three-fiber":"^4.2.20","socket.io-client":"^2.3.0","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')}},[[1398,1,2]]]);