(this.webpackJsonpunsplash_gallery=this.webpackJsonpunsplash_gallery||[]).push([[0],{78:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e.n(a),i=e(25),s=e.n(i),o=e(11),u=e.n(o),j=e(7),b=e(26),l=e(14),p=e(4),f=e(5);function d(){var n=Object(p.a)(["\n  font-size: 50px;\n  @media (max-width: 374px) {\n    font-size: 30px;\n  }\n"]);return d=function(){return n},n}function x(){var n=Object(p.a)(["\n  max-width: 100%;\n  height: 20vh;\n  margin: 20px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return x=function(){return n},n}var h=f.b.header(x()),O=f.b.h1(d()),g=function(){return Object(r.jsx)(h,{children:Object(r.jsx)(O,{children:"Infinite Unsplash Gallery"})})};function m(){var n=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n  box-shadow: 0;\n  opacity: 0;\n"]);return m=function(){return n},n}function v(){var n=Object(p.a)(["\n  max-width: 70%;\n  margin: 20px auto;\n  display: grid;\n  grid-gap: 70px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: 350px;\n"]);return v=function(){return n},n}var y=f.b.section(v()),w=f.b.img(m()),k=e(32),E=function(n){var t=n.images,e=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=Object(j.a)(e.current.children).slice(-10);k.a.to(n,{duration:1,opacity:1,boxShadow:"0px 0px 30px 0px rgba(0, 0, 0, 0.8)",stagger:.3})}),[t]),Object(r.jsx)(y,{ref:e,children:t.map((function(n){var t=n.id,e=n.alt_description,a=n.urls.small;return Object(r.jsx)(w,{src:a,alt:e},t)}))})},S=e(13),M=e.n(S);function _(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _=function(){return n},n}function q(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(80vh - 40px);\n"]);return q=function(){return n},n}var z=Object(f.b)(M.a)(q()),I=Object(f.b)(M.a)(_()),J=function(){return Object(r.jsx)(z,{type:"Oval",color:"#000000",height:70,width:70})},Q=function(){return Object(r.jsx)(I,{type:"ThreeDots",color:"#000000",height:80,width:80})},C=e(30),F=e.n(C);function R(){var n=Object(p.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n"]);return R=function(){return n},n}function T(){var n=Object(p.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body{\n    font-family: 'Montserrat', sans-serif;\n  }\n"]);return T=function(){return n},n}var U=Object(f.a)(T()),A=f.b.h2(R()),B=e(31),D=e.n(B),G=function(){var n=Object(a.useState)([]),t=Object(l.a)(n,2),e=t[0],c=t[1],i=Object(a.useState)(),s=Object(l.a)(i,2),o=s[0],p=s[1],f=Object(a.useCallback)(Object(b.a)(u.a.mark((function n(){var t,r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t="https://api.unsplash.com/photos/random?client_id=".concat("YEn80n4RIPQAEvfqlQ3eTUiaa-3qO5WtKQCJ8qfy5cc","&count=10&orientation=portrait"),n.next=4,F.a.get(t);case 4:r=n.sent,a=r.data,c([].concat(Object(j.a)(e),Object(j.a)(a))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),"string"===typeof n.t0.response.data?p(n.t0.response.data):n.t0.response.data.errors&&p(n.t0.response.data.errors.join(", "));case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),[e]);return Object(a.useEffect)((function(){f()}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(U,{}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{}),o&&!e.length&&Object(r.jsx)(A,{children:o}),e.length||o?Object(r.jsx)(D.a,{pageStart:0,loadMore:f,hasMore:!0,loader:Object(r.jsx)(Q,{},0),children:Object(r.jsx)(E,{images:e})}):Object(r.jsx)(J,{}),o&&!!e.length&&Object(r.jsx)(A,{children:o})]})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.78fbc3bc.chunk.js.map