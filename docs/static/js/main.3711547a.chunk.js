(this["webpackJsonpapp-web"]=this["webpackJsonpapp-web"]||[]).push([[0],{32:function(e,a,t){e.exports=t.p+"static/media/avatar.0d855cb8.png"},40:function(e,a,t){e.exports=t(50)},49:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=t(12),m=function(e){var a=e.user,t=a.nombre,n=a.apellido;return r.a.createElement("h4",null,"Hola, ",t," ",n)},i=t(32),s=t.n(i),u=Object(n.forwardRef)((function(e,a){return r.a.createElement("img",{src:s.a,alt:"avatar",className:"avatar__img",id:"img-avatar",ref:a})})),d=Object(n.forwardRef)((function(e,a){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Striata"),r.a.createElement("div",{className:"header__right"},r.a.createElement(m,{user:{nombre:"Eduardo",apellido:"Gonzalez"}}),r.a.createElement(u,{ref:a})))})),f=t(70),E=t(71),b=t(72),p=function(){return r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,null,"Nombre"),r.a.createElement(b.a,null,"Oficio"),r.a.createElement(b.a,null,"Eliminar")))},v=t(78),h=t(73),j=function(e){var a=e.users,t=e.deleteUser,n=a.map((function(e,a){return r.a.createElement(E.a,{key:a},r.a.createElement(b.a,null,e.name),r.a.createElement(b.a,null,e.job),r.a.createElement(b.a,null,r.a.createElement(v.a,{className:"Mui-button",variant:"contained",color:"secondary",onClick:function(){return t(a)}},"Delete")))}));return r.a.createElement(h.a,null,n)},g=t(74),N=t(75),w=function(e){var a=e.users,t=e.deleteUser;return r.a.createElement(g.a,{item:!0,xs:8},r.a.createElement(N.a,null,r.a.createElement(p,null),r.a.createElement(j,{users:a,deleteUser:t})))},O=t(37),_=t(28),y=t(30),A=function(e){var a=e.mensaje;return r.a.createElement("span",{className:"error"},a)},C=t(81),U=t(80),x=t(79),S=t(82),k=t(76),R=t(77),B=Object(n.forwardRef)((function(e,a){var t=e.setUsers,l=e.handleUpload,c=Object(n.useState)({name:"",job:""}),m=Object(o.a)(c,2),i=m[0],s=m[1],u=Object(n.useState)(!1),d=Object(o.a)(u,2),f=d[0],E=d[1],b=function(e){s(Object(y.a)(Object(y.a)({},i),{},Object(_.a)({},e.target.name,e.target.value)))};return r.a.createElement(g.a,{item:!0,md:4},r.a.createElement("section",{className:"form"},r.a.createElement("form",{className:"form-material",onSubmit:function(e){e.preventDefault(),""!==i.name.trim()&&""!==i.job.trim()?(t((function(e){return[].concat(Object(O.a)(e),[i])})),E(!1),s({name:"",job:""})):E(!0)}},f&&r.a.createElement(A,{mensaje:"Ambos campos son obligatorios"}),r.a.createElement("h2",{className:"form-material__title"},"Agregar Datos"),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,md:12},r.a.createElement(C.a,null,r.a.createElement(U.a,{htmlFor:"name"},"Nombre"),r.a.createElement(x.a,{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(k.a,null)),id:"name",name:"name",type:"text",value:i.name,onChange:b}))),r.a.createElement(g.a,{item:!0,md:12},r.a.createElement(C.a,null,r.a.createElement(U.a,{htmlFor:"job"},"Oficio"),r.a.createElement(x.a,{startAdornment:r.a.createElement(S.a,{position:"start"},r.a.createElement(R.a,null)),id:"job",name:"job",type:"text",value:i.job,onChange:b}))),r.a.createElement(g.a,{item:!0,md:12},r.a.createElement(v.a,{variant:"contained",color:"primary",type:"submit"},"Cargar Datos")))),r.a.createElement("div",{className:"avatar"},r.a.createElement("h2",{className:"avatar__title"},"Cambiar Avatar"),r.a.createElement("div",{className:"avatar__field"},r.a.createElement("label",{htmlFor:"inputId"},"Selecionar archivo")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"file",name:"",id:"inputId",ref:a.inputFile,accept:"image/*"}),r.a.createElement("span",{id:"input-name",ref:a.inputName})),r.a.createElement("div",{className:""},r.a.createElement(v.a,{variant:"contained",color:"primary",type:"submit",onClick:l},"Guardar")))))})),D=t(23),F=t.n(D),z=Object(n.forwardRef)((function(e,a){var t=e.date,l=e.handleUpload,c=Object(n.useState)([{name:"Luis",job:"Programador"},{name:"Noelia",job:"Profesora"},{name:"Ada",job:"Cient\xedfica"},{name:"Bill Gates",job:"Programador"},{name:"Gary McKinnon",job:"Administrador"},{name:"Elon Musk",job:"F\xedsico"}]),m=Object(o.a)(c,2),i=m[0],s=m[1];return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"date"},r.a.createElement("h4",null,t)),r.a.createElement("div",{className:"data"},r.a.createElement(w,{users:i,deleteUser:function(e){F.a.fire({title:"Est\xe1s seguro?",text:"Eliminar\xe1 un registro",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Eliminar!",cancelButtonText:"Cancelar"}).then((function(a){a.value&&(F.a.fire({title:"Eliminado!",text:"Acaba de eliminar un registro",icon:"success"}),s(i.filter((function(a,t){return t!==e}))))}))}}),r.a.createElement(B,{setUsers:s,handleUpload:l,ref:a})))})),G=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h4",{className:"footer__copy"},"\xa9 Todos los derechos reservados"),r.a.createElement("a",{className:"footer__author",href:"https://eduardo-gonzalez-portafolio.now.sh/",target:"blank"},r.a.createElement("h4",{className:"footer__author-name"},"Eduardo Gonz\xe1lez")))};var I=function(){var e=Object(n.useState)(new Date),a=Object(o.a)(e,2),t=a[0],l=a[1],c=r.a.createRef(),m=r.a.createRef(),i=r.a.createRef();return Object(n.useEffect)((function(){var e=setInterval((function(){l(new Date)}),1e3);return function(){clearInterval(e)}})),r.a.createElement("div",{className:"App"},r.a.createElement(d,{ref:c}),r.a.createElement(z,{date:t.toLocaleTimeString(),handleUpload:function(){if(m.current.files[0]){var e=new FileReader;e.readAsDataURL(m.current.files[0]),e.onload=function(){i.current.textContent=m.current.files[0].name,c.current.src=e.result,F.a.fire({imageUrl:e.result,imageWidth:250,imageAlt:"Avatar"})}}},ref:{inputFile:m,inputName:i}}),r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.3711547a.chunk.js.map