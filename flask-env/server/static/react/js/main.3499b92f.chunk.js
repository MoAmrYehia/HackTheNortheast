(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"media/logo_b.1aba88ac.png"},28:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=a(14),i=a(15),m=a(18),u=a(17),s=a(16),d=a(3),p=a(11),h=a.n(p);var f=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("img",{src:h.a,width:"500",height:"500",className:"d-inline-block align-top",alt:"SkillRoad logo"}))},E=a(27);var b=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(f,null),l.a.createElement("div",{className:"text-center"},l.a.createElement("p",null,"SkillRoad is a career advisor platform that allows our users to be ready for their next career level. ",l.a.createElement("br",null),"It is your guide to finding the appropriate career path for you.")),l.a.createElement("div",{className:"text-center"},l.a.createElement(s.b,{to:"/profile"},l.a.createElement(E.a,{variant:"dark"},"Start your SkillRoad"))))},g=a(13);var v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{bg:"dark",variant:"dark"},l.a.createElement(g.a.Brand,{href:"#home"},l.a.createElement("img",{alt:"",src:h.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","SkillRoad")))};var k=function(){return l.a.createElement("h1",null,"Profile Page")},y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0],loaded:0})},n.onClickHandler=function(){var e=new FormData;e.append("file",n.state.selectedFile),fetch("/api/upload/",{method:"POST",body:e}).then((function(e){console.log(e.statusText)}))},n.state={selectedFile:null},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("input",{type:"file",name:"file",onChange:this.onChangeHandler}),l.a.createElement("button",{type:"button",class:"btn btn-success btn-block",onClick:this.onClickHandler},"Upload"))}}]),a}(n.Component);var C=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{bg:"dark",variant:"dark"},l.a.createElement(g.a.Brand,{href:"#home"},l.a.createElement("img",{alt:"",src:h.a,width:"30",height:"30",className:"d-inline-block align-top"})," ","SkillRoad")))},j=(a(38),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:"#9CF6F6"},l.a.createElement(C,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:b}),l.a.createElement(d.a,{path:"/submit",component:y}),l.a.createElement(d.a,{path:"/profile",component:k}),l.a.createElement(d.a,{path:"/footer",component:v}))))}}]),a}(n.Component));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.3499b92f.chunk.js.map