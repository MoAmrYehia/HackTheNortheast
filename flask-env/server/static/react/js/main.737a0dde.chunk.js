(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){e.exports=a(40)},39:function(e,t,a){e.exports=a.p+"media/logo_b.1aba88ac.png"},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=a(11),i=a(12),m=a(14),u=a(13),s=a(9),b=a(3),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/",className:"nav-link"}," ","Home"," ")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/header",className:"nav-link"},"Header")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/footer",className:"nav-link"},"Footer")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/submit",className:"nav-link"},"FileSubmission"))))}}]),a}(l.a.Component);var d=function(){return l.a.createElement("h1",null,"Footer")};var h=function(){return l.a.createElement("h1",null,"Profile Page")};var p=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(d,null))},g=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0],loaded:0})},n.onClickHandler=function(){var e=new FormData;e.append("file",n.state.selectedFile),fetch("/api/upload/",{method:"POST",body:e}).then((function(e){console.log(e.statusText)}))},n.state={selectedFile:null},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"file",name:"file",onChange:this.onChangeHandler}),l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.onClickHandler},"Upload"))}}]),a}(n.Component),f=a(8);a(39);var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{bg:"light"},l.a.createElement(f.a.Brand,{href:"#home"},"Brand link")),l.a.createElement("br",null),l.a.createElement(f.a,{bg:"light"},l.a.createElement(f.a.Brand,null,"Brand text")),l.a.createElement("br",null),l.a.createElement(f.a,{bg:"dark"},l.a.createElement(f.a.Brand,{href:"#home"},l.a.createElement("img",{src:"logo_b.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"React Bootstrap logo"}))),l.a.createElement("br",null),l.a.createElement(f.a,{bg:"dark",variant:"dark"},l.a.createElement(f.a.Brand,{href:"#home"},l.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","React Bootstrap")))},k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement("hr",null),l.a.createElement(b.c,null,l.a.createElement(b.a,{exact:!0,path:"/",component:p}),l.a.createElement(b.a,{path:"/submit",component:g}),l.a.createElement(b.a,{path:"/footer",component:d}))))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.737a0dde.chunk.js.map