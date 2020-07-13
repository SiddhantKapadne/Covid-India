(this["webpackJsonpcovid-in"]=this["webpackJsonpcovid-in"]||[]).push([[0],{200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(72),o=a.n(i),c=(a(85),a(12)),l=a(13),s=a(15),d=a(14),m=a(202),E=a(35),A=a(218),u=a(219),p=a(220),h=a(222),g=a(73),v=a.n(g),f=a(19),b=a.n(f),C=a(6),I=a.n(C),y=a(9),S=a.n(y),k=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={statewise:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.covid19india.org/data.json").then((function(t){var a=t.data.statewise.slice(0,1);e.setState({statewise:a})}))}},{key:"render",value:function(){var e=this.state.statewise.map((function(e){return r.a.createElement(m.a,{key:e.state,variant:"outlined",className:S.a.mainCard},r.a.createElement(E.a,{className:S.a.title},"Confirmed"),r.a.createElement(E.a,{style:{color:"#e53935",fontSize:"25px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.confirmed,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#ef5350",fontSize:"12px",fontWeight:"bold"}},"Today +",r.a.createElement(I.a,{start:0,end:e.deltaconfirmed,duration:2.75,separator:","})))})),t=this.state.statewise.map((function(e){return r.a.createElement(m.a,{key:e.state,variant:"outlined",className:S.a.mainCard},r.a.createElement(E.a,{className:S.a.title},"Recovered"),r.a.createElement(E.a,{style:{color:"#43a047",fontSize:"25px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.recovered,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#66bb6a",fontSize:"12px",fontWeight:"bold"}},"Today +",r.a.createElement(I.a,{start:0,end:e.deltarecovered,duration:2.75,separator:","})))})),a=this.state.statewise.map((function(e){return r.a.createElement(m.a,{key:e.state,variant:"outlined",className:S.a.mainCard},r.a.createElement(E.a,{className:S.a.title},"Deaths"),r.a.createElement(E.a,{style:{color:"#757575",fontSize:"25px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.deaths,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#bdbdbd",fontSize:"12px",fontWeight:"bold"}},"Today +",r.a.createElement(I.a,{start:0,end:e.deltadeaths,duration:2.75,separator:","})))})),n=this.state.statewise.map((function(e){return r.a.createElement(m.a,{key:e.state,variant:"outlined",className:S.a.mainCard},r.a.createElement(E.a,{className:S.a.title},"Active"),r.a.createElement(E.a,{style:{color:"#c0ca33",fontSize:"25px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.active,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#bdbdbd",fontSize:"12px",fontWeight:"bold"}},e.lastupdatedtime))}));return r.a.createElement("div",{className:"India"},r.a.createElement(A.a,{container:!0,spacing:3},r.a.createElement(A.a,{item:!0,xs:12,align:"center"},r.a.createElement(u.a,{variant:"outlined"},r.a.createElement(p.a,{avatar:r.a.createElement(h.a,{src:v.a,variant:"square"}),title:r.a.createElement(E.a,{variant:"h5"},"INDIA"),subheader:"Covid-19 Tracker"})))),r.a.createElement(A.a,{container:!0,spacing:3,className:S.a.mainCards},r.a.createElement(A.a,{item:!0,xs:6,md:3,align:"center"},e),r.a.createElement(A.a,{item:!0,xs:6,md:3,align:"center"},t),r.a.createElement(A.a,{item:!0,xs:6,md:3,align:"center"},a),r.a.createElement(A.a,{item:!0,xs:6,md:3,align:"center"},n)))}}]),a}(n.Component),Q=a(221),j=a(18),w=a(26),x=a.n(w),J=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={states:[],dist:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.covid19india.org/data.json").then((function(t){var a=t.data.statewise.slice(1,37);e.setState({states:a})}))}},{key:"render",value:function(){var e=this.state.states.map((function(e){return r.a.createElement(A.a,{container:!0,spacing:3},r.a.createElement(A.a,{item:!0,xs:12,md:12},r.a.createElement(u.a,{variant:"outlined"},r.a.createElement(p.a,{avatar:r.a.createElement(h.a,{style:{background:"#1e88e5",fontWeight:"bold"}},e.statecode),title:r.a.createElement(E.a,null,e.state),subheader:r.a.createElement(E.a,{style:{color:"#bdbdbd",fontSize:"12px"}},e.lastupdatedtime)}),r.a.createElement(Q.a,{align:"center"},r.a.createElement(A.a,{container:!0,spacing:3},r.a.createElement(A.a,{item:!0,xs:6,md:3},r.a.createElement(m.a,{elevation:0},r.a.createElement(E.a,{className:x.a.title,style:{fontSize:"14px"}},"Confirmed"),r.a.createElement(E.a,{style:{color:"#e53935",fontSize:"20px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.confirmed,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#ef5350",fontSize:"16px",fontWeight:"bold"}},"+",r.a.createElement(I.a,{start:0,end:e.deltaconfirmed,duration:2.75,separator:","})))),r.a.createElement(A.a,{item:!0,xs:6,md:3},r.a.createElement(m.a,{elevation:0},r.a.createElement(E.a,{className:x.a.title,style:{fontSize:"14px"}},"Recovered"),r.a.createElement(E.a,{style:{color:"#43a047",fontSize:"20px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.recovered,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#66bb6a",fontSize:"16px",fontWeight:"bold"}},"+",r.a.createElement(I.a,{start:0,end:e.deltarecovered,duration:2.75,separator:","})))),r.a.createElement(A.a,{item:!0,xs:6,md:3},r.a.createElement(m.a,{elevation:0},r.a.createElement(E.a,{className:x.a.title,style:{fontSize:"14px"}},"Deaths"),r.a.createElement(E.a,{style:{color:"#757575",fontSize:"20px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.deaths,duration:2.75,separator:","})),r.a.createElement(E.a,{style:{color:"#bdbdbd",fontSize:"16px",fontWeight:"bold"}},"+",r.a.createElement(I.a,{start:0,end:e.deltadeaths,duration:2.75,separator:","})))),r.a.createElement(A.a,{item:!0,xs:6,md:3},r.a.createElement(m.a,{elevation:0},r.a.createElement(E.a,{className:x.a.title,style:{fontSize:"14px"}},"Active"),r.a.createElement(E.a,{style:{color:"#c0ca33",fontSize:"20px",fontWeight:"bold"}},r.a.createElement(I.a,{start:0,end:e.active,duration:2.75,separator:","})))),r.a.createElement(A.a,{item:!0,xs:12,md:6},r.a.createElement(m.a,{elevation:0},r.a.createElement(j.b,{data:{labels:["Confirmed","Recovered","Deaths","Acitve"],datasets:[{backgroundColor:["#0288d1","#43a047","#e53935","#c0ca33"],data:[e.confirmed,e.recovered,e.deaths,e.active]}]},options:{legend:{display:!0,position:"bottom"}}}))),r.a.createElement(A.a,{item:!0,xs:12,md:6},r.a.createElement(m.a,{elevation:0},r.a.createElement(j.c,{data:{labels:["Confirmed","Recovered","Deaths","Acitve"],datasets:[{backgroundColor:["#0288d1","#43a047","#e53935","#c0ca33"],data:[e.confirmed,e.recovered,e.deaths,e.active]}]},options:{legend:{display:!1,position:"bottom"}}})))),r.a.createElement(A.a,{item:!0,xs:12})))))}));return r.a.createElement("div",null,r.a.createElement(A.a,{container:!0,spacing:10},r.a.createElement(A.a,{item:!0,xs:12,md:12},e)))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={ind:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.covid19india.org/data.json").then((function(t){var a=t.data.statewise.slice(0,1);e.setState({ind:a})}))}},{key:"render",value:function(){var e=this.state.ind.map((function(e){return r.a.createElement(j.a,{data:{labels:["Confirmed","Recovered","Deaths","Acitve"],datasets:[{backgroundColor:["#0288d1","#43a047","#e53935","#c0ca33"],data:[e.confirmed,e.recovered,e.deaths,e.active]}]},options:{legend:{display:!1}}})})),t=this.state.ind.map((function(e){return r.a.createElement(j.c,{data:{labels:["Confirmed","Recovered","Deaths","Acitve"],datasets:[{backgroundColor:["#0288d1","#43a047","#e53935","#c0ca33"],data:[e.confirmed,e.recovered,e.deaths,e.active]}]},options:{legend:{display:!1}}})})),a=this.state.ind.map((function(e){return r.a.createElement(j.d,{data:{labels:["Confirmed","Recovered","Deaths","Acitve"],datasets:[{backgroundColor:["#0288d1","#43a047","#e53935","#c0ca33"],data:[e.confirmed,e.recovered,e.deaths,e.active]}]},options:{legend:{display:!0}}})}));return r.a.createElement("div",null,r.a.createElement(A.a,{container:!0,spacing:3},r.a.createElement(A.a,{item:!0,xs:12,md:4,align:"center"},r.a.createElement(m.a,{variant:"outlined"},t)),r.a.createElement(A.a,{item:!0,xs:12,md:4,align:"center"},r.a.createElement(m.a,{variant:"outlined"},a)),r.a.createElement(A.a,{item:!0,xs:12,md:4,align:"center"},r.a.createElement(m.a,{variant:"outlined"},e))))}}]),a}(n.Component),R=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Covid"},r.a.createElement(k,null),r.a.createElement(O,null),r.a.createElement(J,null))}}]),a}(n.Component);a(200);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,a){e.exports={title:"State_title__1CKNZ"}},73:function(e,t){e.exports="data:image/png;base64,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"},80:function(e,t,a){e.exports=a(201)},85:function(e,t,a){},9:function(e,t,a){e.exports={title:"India_title__24rg1",mainCard:"India_mainCard__1so8K"}}},[[80,1,2]]]);
//# sourceMappingURL=main.53702eef.chunk.js.map