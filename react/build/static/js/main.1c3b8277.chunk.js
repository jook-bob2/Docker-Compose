(this.webpackJsonpmanagement=this.webpackJsonpmanagement||[]).push([[0],{117:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=(a(95),a(53)),s=a.n(o),c=a(70),m=a(17),u=a(18),h=a(23),p=a(22),d=a(47),f=a(159),b=a(160),g=a(171),E=a(158),v=a(156),y=a(157),C=a(152),j=a(121),O=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(u.a)(a,[{key:"deleteCustomer",value:function(e){fetch("/api/customers/"+e,{method:"DELETE"}),this.props.stateRefresh()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"contained",color:"secondary",onClick:this.handleClickOpen},"\uc0ad\uc81c"),r.a.createElement(g.a,{open:this.state.open,onClose:this.handleClose},r.a.createElement(v.a,{onClose:this.handleClose},"\uc0ad\uc81c \uacbd\uace0"),r.a.createElement(y.a,null,r.a.createElement(j.a,{gutterBottom:!0},"\uc120\ud0dd\ud55c \uace0\uac1d \uc815\ubcf4\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4.")),r.a.createElement(E.a,null,r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:function(t){e.deleteCustomer(e.props.id)}},"\uc0ad\uc81c"),r.a.createElement(C.a,{variant:"outlined",color:"primary",onClick:this.handleClose},"\ub2eb\uae30"))))}}]),a}(r.a.Component),k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(b.a,null,this.props.id),r.a.createElement(b.a,null,r.a.createElement("img",{src:this.props.image,alt:"profile",width:64})),r.a.createElement(b.a,null,this.props.name),r.a.createElement(b.a,null,this.props.birthday),r.a.createElement(b.a,null,this.props.gender),r.a.createElement(b.a,null,this.props.job),r.a.createElement(b.a,null,r.a.createElement(O,{stateRefresh:this.props.stateRefresh,id:this.props.id})))}}]),a}(r.a.Component),w=a(72),N=a(169),S=a(4),R=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).addCustomer=function(){var e=new FormData;e.append("image",n.state.file),e.append("name",n.state.userName),e.append("birthday",n.state.birthday),e.append("gender",n.state.gender),e.append("job",n.state.job);return Object(w.post)("/api/customers",e,{headers:{"content-type":"multipart/form-data"}})},n.handleClickOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({file:null,userName:"",birthday:"",gender:"",job:"",fileName:"",open:!1})},n.handleFormSubmit=function(e){e.preventDefault(),n.addCustomer().then((function(e){console.log(e.data),n.props.stateRefresh()})),n.setState({file:null,userName:"",birthday:"",gender:"",job:"",fileName:"",open:!1})},n.handleFileChange=function(e){n.setState({file:e.target.files[0],fileName:e.target.value})},n.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.state={file:null,userName:"",birthday:"",gender:"",job:"",fileName:"",open:!1},n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"\uace0\uac1d \ucd94\uac00\ud558\uae30"),r.a.createElement(g.a,{open:this.state.open,onClose:this.handleClose},r.a.createElement(v.a,null,"\uace0\uac1d \ucd94\uac00"),r.a.createElement(y.a,null,r.a.createElement("input",{className:e.hidden,accept:"image/*",id:"raised-button-file",type:"file",file:this.state.file,value:this.state.fileName,onChange:this.handleFileChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"raised-button-file"},r.a.createElement(C.a,{variant:"contained",color:"primary",component:"span",name:"file"},""===this.state.fileName?"\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \uc120\ud0dd":this.state.fileName)),r.a.createElement("br",null),r.a.createElement(N.a,{label:"\uc774\ub984",type:"text",name:"userName",value:this.state.userName,onChange:this.handleValueChange}),r.a.createElement("br",null),r.a.createElement(N.a,{label:"\uc0dd\ub144\uc6d4\uc77c",type:"text",name:"birthday",value:this.state.birthday,onChange:this.handleValueChange}),r.a.createElement("br",null),r.a.createElement(N.a,{label:"\uc131\ubcc4",type:"text",name:"gender",value:this.state.gender,onChange:this.handleValueChange}),r.a.createElement("br",null),r.a.createElement(N.a,{label:"\uc9c1\uc5c5",type:"text",name:"job",value:this.state.job,onChange:this.handleValueChange}),r.a.createElement("br",null)),r.a.createElement(E.a,null,r.a.createElement(C.a,{variant:"contained",color:"primary",onClick:this.handleFormSubmit},"\ucd94\uac00"),r.a.createElement(C.a,{variant:"outlined",color:"primary",onClick:this.handleClose},"\ub2eb\uae30"))))}}]),a}(r.a.Component),x=Object(S.a)((function(e){return{hidden:{display:"none"}}}))(R),F=(a(117),a(120)),I=a(164),V=a(165),B=a(166),K=a(167),L=a(161),D=a(162),W=a(163),A=a(172),H=a(8),J=a(73),M=a.n(J),T=a(74),z=a.n(T),G=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).stateRefresh=function(){n.setState({customers:"",completed:0,searchKeyword:""}),n.callApi().then((function(e){return n.setState({customers:e})})).catch((function(e){return console.log(e)}))},n.callApi=Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/customers");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)}))),n.progress=function(){var e=n.state.completed;n.setState({completed:e>=100?0:e+1})},n.handleValueChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.state={customers:"",completed:0,searchKeyword:""},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(this.progress,20),this.callApi().then((function(t){return e.setState({customers:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(L.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(W.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(M.a,null)),r.a.createElement(j.a,{className:t.title,variant:"h6",noWrap:!0},"\uace0\uac1d \uad00\ub9ac \uc2dc\uc2a4\ud15c"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(z.a,null)),r.a.createElement(A.a,{placeholder:"\uac80\uc0c9\ud558\uae30",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},name:"searchKeyword",value:this.state.searchKeyword,onChange:this.handleValueChange})))),r.a.createElement("div",{className:t.menu},r.a.createElement(x,{stateRefresh:this.stateRefresh})),r.a.createElement(F.a,{className:t.paper},r.a.createElement(I.a,{className:t.table},r.a.createElement(V.a,null,r.a.createElement(f.a,null,["\ubc88\ud638","\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0","\uc774\ub984","\uc0dd\ub144\uc6d4\uc77c","\uc131\ubcc4","\uc9c1\uc5c5","\uc124\uc815"].map((function(e){return r.a.createElement(b.a,{className:t.tableHead},e)})))),r.a.createElement(B.a,null,this.state.customers?this.state.customers.filter((function(t){return t.name.indexOf(e.state.searchKeyword)>-1})).map((function(t){return r.a.createElement(k,{stateRefresh:e.stateRefresh,key:t.id,id:t.id,image:t.image,name:t.name,birthday:t.birthday,gender:t.gender,job:t.job})})):r.a.createElement(f.a,null,r.a.createElement(b.a,{colSpan:"6",align:"center"},r.a.createElement(K.a,{className:t.progress,variant:"determinate",value:this.state.completed})))))))}}]),a}(n.Component),P=Object(S.a)((function(e){return{root:{width:"100%",minWidth:1080},paper:{marginLeft:18,marginRight:18},progress:{margin:"theme.spacing.unit * 2"},menuButton:{marginRight:e.spacing(2)},title:Object(d.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(d.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(H.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(H.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(d.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),tableHead:{fontSize:"1.0rem"},menu:{marginTop:15,marginBottom:15,display:"flex",justifyContent:"center"}}}))(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(75),q=a(168),Q=Object($.a)({typography:{fontFamily:'"Noto Sans KR", serif'}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q.a,{theme:Q},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(119)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.1c3b8277.chunk.js.map