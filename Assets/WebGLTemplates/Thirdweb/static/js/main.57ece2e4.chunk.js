(this["webpackJsonpunity-webgl-template"]=this["webpackJsonpunity-webgl-template"]||[]).push([[0],{112:function(e,t,n){"use strict";n.r(t);var i=n(38),r=n.n(i),c=n(74),a=n.n(c),s=(n(93),n(3)),o=n.n(s),u=n(75),l=n(77),d=n(23),w=n(76),h=n(43);var b=function(){var e=Object(i.useRef)(null),t=Object(i.useRef)(new l.ThirdwebBridgeSDK("https://rpc-mumbai.maticvigil.com"));Object(i.useEffect)((function(){if(e.current)var t=setInterval((function(){window.createUnityInstance&&(clearInterval(t),window.createUnityInstance(e.current,window.unityConfig).then((function(e){window.unityInstance=e})))}),500)}),[e]);var n=Object(i.useCallback)(Object(u.a)(o.a.mark((function e(){var n,i,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new w.a("<MAGIC_PUBLISHABLE_KEY>",{network:{chainId:80001,rpcUrl:"https://rpc-mumbai.maticvigil.com"}}),e.next=3,n.auth.loginWithMagicLink({email:"example@email.com"});case 3:return i=new d.a.providers.Web3Provider(n.rpcProvider),r=i.getSigner(),t.current.setProviderOrSigner(r),e.t0=console,e.next=9,r.getAddress();case 9:e.t1=e.sent,e.t0.log.call(e.t0,"logged in address",e.t1);case 11:case"end":return e.stop()}}),e)}))),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:n,children:"Connect with magic.link"}),Object(h.jsx)("canvas",{ref:e,id:"unity-canvas",width:"960",height:"600",style:{width:"960px",height:"600px",cursor:"default"}})]})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root"))},93:function(e,t,n){},98:function(e,t){}},[[112,1,2]]]);
//# sourceMappingURL=main.57ece2e4.chunk.js.map