(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(14),n=c.n(a),r=c(6),l=(c(49),c(50),c(71),c(72),c(73),c(2)),i=c(11),o=c(1),d=function(){var e=Object(i.c)((function(e){return e.addItem}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.b,{to:"/cart",className:"btn btn-outline-primary ms-2",children:[Object(o.jsx)("span",{className:"fa fa-shopping-cart me-1"})," (",e.length,")"]})})},j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.b,{to:"/session",className:"btn btn-outline-primary ms-2",children:[Object(o.jsx)("span",{className:"fa fa-sign-in me-1"})," Iniciar sesi\xf3n"]})})},b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.b,{to:"/registration",className:"btn btn-outline-primary ms-2",children:[Object(o.jsx)("span",{className:"fa fa-user-plus me-1"})," Reg\xedstrate"]})})},m=c(5),h=c.n(m),u=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(l.a)(n,2);i[0],i[1];h.a.defaults.withCredentials=!0;return Object(s.useEffect)((function(){h.a.get("http://localhost:3001/login").then((function(e){1==e.data.loggedIn&&a(e.data.user[0].user)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light ",children:Object(o.jsxs)("div",{className:"container-fluid py-2",children:[Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)(r.b,{className:"nav-link text-primary",to:"/",children:Object(o.jsx)("div",{class:"container",style:{"padding-left":"20px",text:"center","font-family":"Arial, Helvetica, sans-serif",color:"black","font-size":"25px"},children:"Hospital del celular"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link",to:"/products",children:"Productos"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link",to:"/about",children:"Acerca de"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link",to:"/contact",children:"Citas"})}),"admin"==c&&Object(o.jsx)("li",{classname:"nav-item",children:Object(o.jsx)(r.b,{className:"nav-link",to:"/citas",children:"Consultar"})})]}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",style:{"padding-top":"15px",textAlign:"center",height:"10px"},children:Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:""==c?Object(o.jsx)("p",{}):Object(o.jsx)("div",{className:"container-sm",children:Object(o.jsxs)("p",{className:"p-1 bg-primary text-white rounded glyphicon-user",children:[Object(o.jsx)("span",{className:"fa fa-user me-1"}),"Usuario: ",c]})})})})}),""==c&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(b,{})]}),Object(o.jsx)(d,{}),""==!c&&Object(o.jsxs)("button",{onClick:function(){h.a.post("http://localhost:3001/logout",{}).then((function(e){console.log(e)})),window.location.reload()},className:"btn btn-outline-primary ms-2",children:[Object(o.jsx)("span",{className:"fa fa-sign-out me-1"}),"Cerrar sesi\xf3n"]})]})]})})})},x=function(){return Object(o.jsx)("div",{})},O=[{id:0,title:"Cargador lightning iPhone",price:350,desc:"Cargador de 20W, producto de alta calidad.",img:"/assets/images/products/cargador1.jpg"},{id:1,title:"Funda clear iPhone 11",price:150,desc:"Producto de alta calidad a precio rebajado.",img:"/assets/images/products/funda1.jpg"},{id:2,title:"Audifonos",price:95,desc:"Producto de alta calidad a precio rebajado",img:"/assets/images/products/audifonos.jpg"},{id:3,title:"iPhone 12",price:1150,desc:"Pantalla: 6.1, 1170 x 2532 pixels Procesador: Apple A14 Bionic Almacenamiento: 64GB, C\xe1mara: Dual, 12MP+12MP",img:"/assets/images/products/iphone12.png"},{id:4,title:"iPhone 12 Pro",price:1200,desc:"Pantalla: 6.1 1170 x 2532 pixels Procesador: Apple A14 Bionic Almacenamiento: 128GB Expansi\xf3n: sin microSD",img:"/assets/images/products/iphone12pro.png"},{id:5,title:"iPhone 12 Pro Max",price:1250,desc:"Pantalla: 6.7, 1284 x 2778 pixels Procesador: Apple A14 Bionic Almacenamiento: 128GB, C\xe1mara: Cu\xe1druple, 12MP+12MP +12MP+LiDAR",img:"/assets/images/products/iphone12promax.png"},{id:6,title:"Pocophone X3",price:5500,desc:"Pantalla: 6.67in, 1080 x 2400 pixels. Procesador: Snapdragon 732G 2.3GHz, RAM: 6GB, Almacenamiento: 64GB, Bater\xeda: 5160 mAh",img:"/assets/images/products/celular1.jpg"},{id:7,title:"Audifonos Airpods Apple",price:2e3,desc:"Los AirPods cambiar\xe1n para siempre la forma en que usas los aud\xedfonos.",img:"/assets/images/products/audifonos1.jpg"},{id:8,title:"Audifonos Airpods PRO Apple",price:4e3,desc:"Los AirPods Pro son unos auriculares inal\xe1mbricos Bluetooth con cancelaci\xf3n activa de ruido de la empresa estadounidense Apple.",img:"/assets/images/products/audifonos2.jpg"},{id:9,title:"Funda Pocophone X3 - fibra carbono",price:150,desc:"Accesorio ergon\xf3mico para tu dispotivio m\xf3vil.",img:"/assets/images/products/funda2.jpg"},{id:10,title:"Auriculares Samsung",price:200,desc:"Con\xe9ctate con la M\xfasica hoy mismo, producto al\xe1mbrico.",img:"/assets/images/products/audifonos3.jpg"},{id:11,title:"Cargador Samsung V8",price:300,desc:"Cargador con entrada micro usb, de 15W.",img:"/assets/images/products/cargador2.jpg"}],p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"container py-5",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsx)("h1",{children:"Cat\xe1logo de productos"}),Object(o.jsx)("hr",{})]})})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-around",children:O.map((function(e){return Object(o.jsxs)("div",{class:"card my-5 py-4 animate__animated animate__zoomIn",style:{width:"18rem"},children:[Object(o.jsx)("img",{src:e.img,class:"card-img-top",alt:e.title}),Object(o.jsxs)("div",{class:"card-body text-center",children:[Object(o.jsx)("h5",{class:"card-title",children:e.title}),Object(o.jsxs)("p",{className:"lead",children:["$",e.price," MXN"]}),Object(o.jsx)(r.b,{to:"/products/".concat(e.id),class:"btn btn-outline-primary",children:"Comprar"})]})]},e.id)}))})})]})},g=c(13),f=function(){return Object(o.jsx)("div",{className:"animate__animated animate__fadeIn",children:Object(o.jsx)(g.a,{showIndicators:!0,showControls:!0,fade:!0,children:Object(o.jsxs)(g.d,{children:[Object(o.jsxs)(g.e,{className:"active",children:[Object(o.jsx)(g.c,{src:"/assets/images/home/img4.png",alt:"..."}),Object(o.jsxs)(g.b,{children:[Object(o.jsx)("h4",{children:Object(o.jsx)("b",{children:"Accesorios para tu celular"})}),Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"Adquiere productos de gran calidad a buen precio, que esperas!"})})]})]}),Object(o.jsxs)(g.e,{children:[Object(o.jsx)(g.c,{src:"/assets/images/home/img7.jpg",alt:"..."}),Object(o.jsxs)(g.b,{children:[Object(o.jsx)("h4",{children:Object(o.jsx)("b",{children:"Celulares"})}),Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"Adquiere equipos con nosotros totalmente nuevos!"})})]})]}),Object(o.jsxs)(g.e,{children:[Object(o.jsx)(g.c,{src:"/assets/images/home/img6.jpg",alt:"..."}),Object(o.jsxs)(g.b,{children:[Object(o.jsx)("h4",{children:Object(o.jsx)("b",{children:"Apple"})}),Object(o.jsx)("h5",{children:Object(o.jsx)("b",{children:"Adquiere productos y accesorios apple!"})})]})]})]})})})},v=(c(102),function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container py-5 my-5",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-6",children:[Object(o.jsx)("h1",{className:"text-primary fw-bold mb-4",children:"Acerca de nosotros"}),Object(o.jsx)("p",{className:"lead mb-4",children:"Somos una microempresa que lleva a\xf1os en el mercado/industria de la reparaci\xf3n celular, esta ha tenido con el tiempo varios establecimientos para poderse expandir y as\xed llegar a mas personas. Con\xf3cenos en Enrique P\xe9rez Arce 5301, Benito Ju\xe1rez, 82180 Mazatl\xe1n, Sin."}),Object(o.jsx)(r.b,{to:"/contact",className:"btn btn-outline-primary px-3",children:"Poner cita"}),Object(o.jsx)("br",{})]}),Object(o.jsx)("div",{className:"col-md-6 d-flex justify-content-center animate__animated animate__fadeInRight",children:Object(o.jsx)("img",{src:"/assets/images/local.jfif",alt:"About Us",class:"img-fluid rounded mx-auto d-block ",height:"400px",width:"450px"})})]}),Object(o.jsx)("h4",{className:" text-primary fw-bold mb-4 ",children:"Horarios de atenci\xf3n"}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Lunes - s\xe1bado",Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:Object(o.jsx)("p",{children:"10:00 a.m - 6:30 p.m"})})})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("li",{children:["Domingo",Object(o.jsx)("ul",{children:Object(o.jsx)("li",{children:"10:00 a.m - 3:00 p.m"})})]})]})]})})}),N=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),m=b[0],u=b[1],x=Object(s.useState)(""),O=Object(l.a)(x,2),p=O[0],g=O[1],f=Object(s.useState)(""),v=Object(l.a)(f,2),N=v[0],y=v[1],C=Object(s.useState)(""),w=Object(l.a)(C,2),S=w[0],P=w[1],A=Object(s.useState)(""),I=Object(l.a)(A,2),F=I[0],E=I[1],k=Object(s.useState)(""),q=Object(l.a)(k,2),D=q[0],_=q[1],M=Object(s.useState)(""),T=Object(l.a)(M,2),B=T[0],z=T[1],L=""==c||""==i||""==m||""==p||""==N||""==S||""==F||"09:30"==S||"09:00"==S||"08:30"==S||"08:00"==S||"07:30"==S||"07:00"==S||"06:00"==S||"05:30"==S||"05:00"==S||"04:30"==S||"04:00"==S||"03:30"==S||"03:00"==S||"02:30"==S||"02:00"==S||"01:30"==S||"01:00"==S||"00:30"==S||"00:00"==S||"18:30"==S||"19:00"==S||"19:30"==S||"20:00"==S||"20:30"==S||"21:00"==S||"21:30"==S||"22:00"==S||"22:30"==S||"23:00"==S||"23:30"==S;h.a.defaults.withCredentials=!0;return Object(s.useEffect)((function(){h.a.get("http://localhost:3001/login").then((function(e){1==e.data.loggedIn&&z(e.data.user[0].user)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container mb-5",children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center py-4 my-4",children:[Object(o.jsx)("h1",{children:"Agendar cita"}),Object(o.jsx)("hr",{})]})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md 5 d-flex justify-content-center animate__animated animate__fadeInLeft",children:Object(o.jsx)("img",{src:"/assets/images/citas.png",alt:"Contact Us",height:"300px",width:"300px"})}),Object(o.jsx)("div",{className:"col-md-6",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"Nombre completo."}),Object(o.jsx)("input",{type:"text",required:!0,onChange:function(e){a(e.target.value)},class:"form-control",id:"exampleForm",placeholder:B})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"N\xfamero de tel\xe9fono."}),Object(o.jsx)("input",{type:"text",required:!0,onChange:function(e){d(e.target.value)},maxLength:"10",class:"form-control",id:"exampleForm",placeholder:"Ej. 6691010203"})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"Direcci\xf3n de correo electr\xf3nico."}),Object(o.jsx)("input",{type:"email",required:!0,onChange:function(e){u(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Ej. nombre@hotmail.com"})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"Dispositivo."}),Object(o.jsx)("input",{type:"text",required:!0,onChange:function(e){g(e.target.value)},class:"form-control",id:"exampleFormControlInput1",placeholder:"Ej. Iphone 12, Motorola G7"})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"Descripci\xf3n del fallo."}),Object(o.jsx)("textarea",{required:!0,onChange:function(e){y(e.target.value)},class:"form-control",id:"exampleFormControlTextarea1",rows:"5",placeholder:"El equipo tiene la pantalla quebrada."})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"Fecha."}),Object(o.jsx)("input",{type:"date",required:!0,onChange:function(e){E(e.target.value)},class:"form-control",id:"exampleFormControlInput3"})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{for:"",class:"form-label",children:"Hora."}),Object(o.jsx)("input",{type:"time",min:"10:00",max:"18:00",required:!0,onChange:function(e){P(e.target.value)},class:"form-control",id:"exampleFormControlInput2"})]}),Object(o.jsx)("h5",{children:D}),Object(o.jsx)("br",{}),Object(o.jsx)("center",{children:Object(o.jsx)("button",{onClick:function(){L?_(Object(o.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Por favor, ingrese los datos correspondientes."})):h.a.post("http://localhost:3001/appointment",{name:c,phone:i,email:m,device:p,description:N,time:S,date:F}).then((function(e){console.log(e),_(Object(o.jsx)("div",{class:"alert alert-success",role:"alert",children:"Cita agendada con exito!"})),setTimeout((function(){window.location.reload()}),2e3)}))},type:"submit",class:"btn btn-outline-primary col-3",children:"Agendar cita"})})]})})]})]})})},y=c(4),C=function(e){return{type:"DELITEM",payload:e}},w=function(){var e=Object(s.useState)("A\xf1adir al carrito"),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(y.g)(),r=O.filter((function(e){return e.id==n.id}))[0];console.log(r);var d=Object(i.b)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container my-5 py-3",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-6 d-flex justify-content-center mx-auto product",children:Object(o.jsx)("img",{src:r.img,alt:r.title,height:"400px"})}),Object(o.jsxs)("div",{className:"col-md-6 d-flex flex-column justify-content-center",children:[Object(o.jsx)("h1",{className:"display-5 fw-bold",children:r.title}),Object(o.jsx)("hr",{}),Object(o.jsxs)("h2",{className:"my-4",children:["$",r.price]}),Object(o.jsx)("p",{className:"lead",children:r.desc}),Object(o.jsx)("button",{onClick:function(){return function(e){"A\xf1adir al carrito"===c?(d(function(e){return{type:"ADDITEM",payload:e}}(e)),a("Remover del carrito")):(d(C(e)),a("A\xf1adir al carrito"))}(r)},className:"btn btn-outline-primary my-5",children:c})]})]})})})},S=function(){var e=Object(i.c)((function(e){return e.addItem})),t=Object(i.b)();return Object(o.jsxs)(o.Fragment,{children:[0===e.length&&Object(o.jsx)("div",{className:"px-4 my-5 bg-light rounded-3 py-5",children:Object(o.jsx)("div",{className:"container py-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("h3",{children:"El carrito est\xe1 vacio."})})})}),0!==e.length&&e.map((function(e){return Object(o.jsx)("div",{className:"px-4 my-5 bg-light rounded-3",children:Object(o.jsxs)("div",{className:"container py-4",children:[Object(o.jsx)("button",{onClick:function(){t(C(e))},className:"btn-close float-end","aria-label":"Close"}),Object(o.jsxs)("div",{className:"row justify-content-center",children:[Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)("img",{src:e.img,alt:e.title,height:"200px",width:"180px"})}),Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("p",{className:"lead fw-bold",children:["$",e.price]})]})]})]})},e.id)})),0!==e.length&&Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(r.b,{to:"/checkout",className:"btn btn-outline-primary mb-5 w-25 mx-auto",children:"Proceder con el env\xedo"})})})]})},P=c(27),A=c.n(P),I=c(41);function F(e){var t=e.total,c=Object(s.useRef)(),a=t.toString(),n=parseFloat(a).toFixed(2),r=Object(s.useState)(""),i=Object(l.a)(r,2),d=i[0],j=i[1];return Object(s.useEffect)((function(){window.paypal.Buttons({createOrder:function(e,t,c){return t.order.create({intent:"CAPTURE",purchase_units:[{description:"Accesorios para celular",amount:{currency_code:"MXN",value:n}}]})},onApprove:function(){var e=Object(I.a)(A.a.mark((function e(t,c){var s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.order.capture();case 2:s=e.sent,console.log(s),j(Object(o.jsx)("div",{class:"alert alert-success",role:"alert",children:"\xa1El pago en PayPal se ha realizado con \xe9xito!"}));case 5:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}).render(c.current)}),[]),console.log(n),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{ref:c}),Object(o.jsx)("h5",{children:d})]})}var E=function(){var e=Object(i.c)((function(e){return e.addItem})),t=Object(s.useState)(""),c=Object(l.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),d=Object(l.a)(r,2),j=d[0],b=d[1],m=Object(s.useState)(""),u=Object(l.a)(m,2),x=u[0],O=u[1],p=Object(s.useState)(""),g=Object(l.a)(p,2),f=g[0],v=g[1],N=Object(s.useState)(""),y=Object(l.a)(N,2),C=y[0],w=y[1],S=Object(s.useState)(""),P=Object(l.a)(S,2),A=P[0],I=P[1],E=Object(s.useState)(""),k=Object(l.a)(E,2),q=k[0],D=k[1],_=Object(s.useState)(""),M=Object(l.a)(_,2),T=M[0],B=M[1],z=""==a||""==j||""==x||""==f||""==C||""==A||""==q;h.a.defaults.withCredentials=!0;var L=0,R=Object(s.useState)(!1),G=Object(l.a)(R,2),H=G[0],U=G[1];return Object(o.jsxs)(o.Fragment,{children:[0===e.length&&Object(o.jsx)("div",{className:"px-4 my-5 bg-light rounded-3 py-5",children:Object(o.jsx)("div",{className:"container py-4",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("h3",{children:"El carrito se encuentra vac\xedo por el momento."})})})}),0!==e.length&&Object(o.jsx)("div",{className:"container my-5",children:Object(o.jsxs)("div",{className:"row g-5",children:[Object(o.jsxs)("div",{className:"col-md-5 col-lg-4 order-md-last",children:[Object(o.jsxs)("h4",{className:"d-flex justify-content-between align-items-center mb-3",children:[Object(o.jsx)("span",{className:"text-primary",children:"Tu carrito"}),Object(o.jsx)("span",{className:"badge bg-primary rounded-pill",children:e.length})]}),Object(o.jsxs)("ul",{className:"list-group mb-3",children:[e.map((function(e){return L+=e.price,Object(o.jsxs)("li",{className:"list-group-item d-flex justify-content-between lh-sm",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h6",{className:"my-0",children:e.title})}),Object(o.jsxs)("span",{className:"text-muted",children:["$",e.price]})]})})),Object(o.jsxs)("li",{className:"list-group-item d-flex justify-content-between",children:[Object(o.jsx)("span",{children:"Total (MXN)"}),Object(o.jsxs)("strong",{children:["$",L]})]})]})]}),Object(o.jsxs)("div",{className:"col-md-7 col-lg-8",children:[Object(o.jsx)("h4",{className:"mb-3",children:"Datos de env\xedo"}),Object(o.jsxs)("form",{className:"needs-validation",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsxs)("div",{className:"row g-3",children:[Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsx)("label",{htmlFor:"firstName",className:"form-label",children:"Nombre(s)"}),Object(o.jsx)("input",{type:"text",onChange:function(e){n(e.target.value)},className:"form-control",id:"name",placeholder:"",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese un Nombre valido."})]}),Object(o.jsxs)("div",{className:"col-sm-6",children:[Object(o.jsx)("label",{htmlFor:"lastName",className:"form-label",children:"Apellidos"}),Object(o.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)},className:"form-control",id:"lastname",placeholder:"",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese Apellidos validos."})]}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("label",{htmlFor:"email",className:"form-label",children:"Correo electronico"}),Object(o.jsx)("input",{type:"email",onChange:function(e){O(e.target.value)},className:"form-control",id:"email",placeholder:"Ej. tu@ejemplo.com",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese un correo electronico valido para actualizaciones de su envio."})]}),Object(o.jsxs)("div",{className:"col-12",children:[Object(o.jsx)("label",{htmlFor:"address",className:"form-label",children:"Direcci\xf3n"}),Object(o.jsx)("input",{type:"text",onChange:function(e){v(e.target.value)},className:"form-control",id:"address",placeholder:"Ej. Villa Florida Calle Tauro #1246",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese una direcci\xf3n de envio."})]}),Object(o.jsxs)("div",{className:"col-md-5",children:[Object(o.jsx)("label",{htmlFor:"state",className:"form-label",children:"Estado"}),Object(o.jsx)("input",{type:"text",onChange:function(e){w(e.target.value)},className:"form-control",id:"state",placeholder:"Ej. Sinaloa",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese un Estado valido."})]}),Object(o.jsxs)("div",{className:"col-md-4",children:[Object(o.jsx)("label",{htmlFor:"city",className:"form-label",children:"Ciudad"}),Object(o.jsx)("input",{type:"text",onChange:function(e){I(e.target.value)},className:"form-control",id:"city",placeholder:"Ej. Mazatlan",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese una ciudad valida."})]}),Object(o.jsxs)("div",{className:"col-md-3",children:[Object(o.jsx)("label",{htmlFor:"zip",className:"form-label",children:"C\xf3digo Postal"}),Object(o.jsx)("input",{type:"text",onChange:function(e){D(e.target.value)},className:"form-control",id:"zip",placeholder:"Ej. 82000",required:!0}),Object(o.jsx)("div",{className:"invalid-feedback",children:"Ingrese su codigo postal."})]})]}),Object(o.jsx)("hr",{className:"my-4"}),Object(o.jsx)("h4",{className:"mb-3",children:"Metodo de pago"}),Object(o.jsx)("center",{children:H?Object(o.jsx)(F,{total:L}):Object(o.jsx)("button",{className:"w-100 btn btn-outline-primary col-3",onClick:function(){U(!0)},children:"Pago en Paypal"})}),Object(o.jsx)("hr",{className:"my-4"}),Object(o.jsx)("h5",{children:T}),Object(o.jsx)("button",{className:"w-100 btn btn-primary btn-lg",onClick:function(t){!0===z&&B(Object(o.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Por favor, ingrese los datos faltantes"})),e.map((function(e){!1===z&&h.a.post("http://localhost:3001/shipment",{FirstName:a,LastName:j,mail:x,address:f,state:C,city:A,ZipCode:q,product:e.title,price:e.price}).then((function(e){console.log(e),B(Object(o.jsx)("div",{class:"alert alert-success",role:"alert",children:"Compra realizada con \xe9xito."})),setTimeout((function(){window.location.reload()}),6e3)}))}))},type:"submit",children:"Finalizar compra"})]})]})]})})]})},k=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),m=b[0],u=b[1],x=Object(s.useState)(""),O=Object(l.a)(x,2),p=O[0],g=O[1];h.a.defaults.withCredentials=!0;return Object(s.useEffect)((function(){h.a.get("http://localhost:3001/login").then((function(e){1==e.data.loggedIn&&u(e.data.user[0].user)}))}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("center",{children:Object(o.jsx)("h1",{children:"Inicio de sesi\xf3n"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"container",children:Object(o.jsxs)("center",{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleInput",className:"form-label",children:"Nombre de usuario "}),Object(o.jsx)("div",{class:"form-group col-md-4",children:Object(o.jsx)("input",{type:"text",required:!0,onChange:function(e){a(e.target.value)},className:"form-control",id:"exampleInput2"})})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Contrase\xf1a"}),Object(o.jsx)("div",{class:"form-group col-md-4",children:Object(o.jsx)("input",{type:"password",required:!0,onChange:function(e){d(e.target.value)},className:"form-control",id:"exampleInputPassword2"})})]}),Object(o.jsx)("h5",{children:p}),Object(o.jsx)("button",{type:"submit",onClick:function(){h.a.post("http://localhost:3001/login",{username:c,password:i}).then((function(e){e.data.message?g(e.data.message):console.log(e)})),setTimeout((function(){window.location.reload()}),300)},className:"btn btn-outline-primary mt-5",children:"Iniciar sesi\xf3n"}),""!==m&&Object(o.jsx)(y.a,{to:"/Home"})]})})]})},q=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),m=b[0],u=b[1];h.a.defaults.withCredentials=!0;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("center",{children:Object(o.jsx)("h1",{children:"Registro de usuario"})}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"container",children:Object(o.jsxs)("center",{children:[Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleInput",className:"form-label",children:"Nombre de usuario"}),Object(o.jsx)("div",{class:"form-group col-md-4",children:Object(o.jsx)("input",{type:"text",required:!0,onChange:function(e){a(e.target.value)},className:"form-control",id:"exampleInput"})})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Contrase\xf1a"}),Object(o.jsx)("div",{class:"form-group col-md-4",children:Object(o.jsx)("input",{type:"password",required:!0,onChange:function(e){d(e.target.value)},className:"form-control",id:"exampleInputPassword1"})})]}),Object(o.jsx)("h5",{children:m}),Object(o.jsx)("button",{onClick:function(){""==c?u("Se debe ingresar al menos un nombre de usuario"):h.a.post("http://localhost:3001/register",{username:c,password:i}).then((function(e){console.log(e),e.data.affectedRows>0?u("Se ha creado el usuario de manera exitosa"):u("No se podido crear el usuario")})),setTimeout((function(){window.location.reload()}),1e3)},type:"submit",className:"btn btn-outline-primary mt-5",children:"Registrar"})]})})]})};function D(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),r=Object(l.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(""),b=Object(l.a)(j,2),m=b[0],u=b[1];h.a.defaults.withCredentials=!0;return Object(s.useEffect)((function(){h.a.get("http://localhost:3001/login").then((function(e){1==e.data.loggedIn&&u(e.data.user[0].user)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"col-12 text-center py-4 my-4",children:[Object(o.jsx)("h1",{children:"Consulta de citas y env\xedos"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{class:"container-fluid mb-5",children:Object(o.jsxs)("div",{class:"alert alert-warning",role:"alert",children:[Object(o.jsx)("strong",{children:"Nota:"})," Si al oprimir el bot\xf3n no aparece informaci\xf3n, entonces a\xfan no hay registros."]})})]}),"admin"==m?Object(o.jsx)("div",{children:Object(o.jsxs)("center",{children:[Object(o.jsx)("button",{onClick:function(){h.a.get("http://localhost:3001/select").then((function(e){a(e.data)}))},className:"btn btn-outline-primary",children:"Consultar las citas"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"table-responsive",children:Object(o.jsx)("table",{class:"table table-striped",children:Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{class:"table-info",children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Nombre"}),Object(o.jsx)("th",{children:"Numero telefonico"}),Object(o.jsx)("th",{children:"Correo"}),Object(o.jsx)("th",{children:"Dispositivo"}),Object(o.jsx)("th",{children:"Descripci\xf3n"}),Object(o.jsx)("th",{children:"Hora"}),Object(o.jsx)("th",{children:"Fecha"})]})})})}),c.map((function(e,t){return Object(o.jsx)("div",{class:"table-responsive",children:Object(o.jsx)("table",{class:"table table-striped table-hover",children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id_cita}),Object(o.jsx)("td",{children:e.nombreCompleto}),Object(o.jsx)("td",{children:e.numeroTelefono}),Object(o.jsx)("td",{children:e.correo}),Object(o.jsx)("td",{children:e.dispositivo}),Object(o.jsx)("td",{children:e.descripcion}),Object(o.jsx)("td",{children:e.hora}),Object(o.jsx)("td",{children:e.fecha})]})})})})}))," ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){h.a.get("http://localhost:3001/selectShipment").then((function(e){d(e.data)}))},className:"btn btn-outline-primary",children:"Consultar los envios"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"table-responsive",children:Object(o.jsx)("table",{class:"table table-striped",children:Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{class:"table-info",children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Nombre"}),Object(o.jsx)("th",{children:"Apellido"}),Object(o.jsx)("th",{children:"Correo"}),Object(o.jsx)("th",{children:"Direcci\xf3n"}),Object(o.jsx)("th",{children:"Estado"}),Object(o.jsx)("th",{children:"Ciudad"}),Object(o.jsx)("th",{children:"CP"}),Object(o.jsx)("th",{children:"Producto"}),Object(o.jsx)("th",{children:"Precio"})]})})})}),i.map((function(e,t){return Object(o.jsx)("div",{class:"table-responsive",children:Object(o.jsx)("table",{class:"table table-striped table-hover",children:Object(o.jsx)("tbody",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id_envio}),Object(o.jsx)("td",{children:e.nombre}),Object(o.jsx)("td",{children:e.apellido}),Object(o.jsx)("td",{children:e.correo}),Object(o.jsx)("td",{children:e.direccion}),Object(o.jsx)("td",{children:e.estado}),Object(o.jsx)("td",{children:e.ciudad}),Object(o.jsx)("td",{children:e.CP}),Object(o.jsx)("td",{children:e.producto}),Object(o.jsx)("td",{children:e.precio})]})})})})}))]})}):Object(o.jsx)("center",{children:Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(o.jsx)("h2",{children:"Usted no tiene acceso a este m\xf3dulo, si se trata de un error por favor ponerse en contacto"})})})]})}var _=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{}),Object(o.jsxs)(y.d,{children:[Object(o.jsx)(y.b,{exact:!0,path:"/",component:f}),Object(o.jsx)(y.b,{exact:!0,path:"/products",component:p}),Object(o.jsx)(y.b,{exact:!0,path:"/products/:id",component:w}),Object(o.jsx)(y.b,{exact:!0,path:"/cart",component:S}),Object(o.jsx)(y.b,{exact:!0,path:"/checkout",component:E}),Object(o.jsx)(y.b,{exact:!0,path:"/about",component:v}),Object(o.jsx)(y.b,{exact:!0,path:"/contact",component:N}),Object(o.jsx)(y.b,{exact:!0,path:"/session",component:k}),Object(o.jsx)(y.b,{exact:!0,path:"/registration",component:q}),Object(o.jsx)(y.b,{exact:!0,path:"/citas",component:D}),Object(o.jsx)(y.a,{to:"/"})]}),Object(o.jsx)(x,{})]})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},T=c(21),B=c(42),z=[],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDITEM":return[].concat(Object(B.a)(e),[t.payload]);case"DELITEM":return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},R=Object(T.a)({addItem:L}),G=Object(T.b)(R);n.a.render(Object(o.jsx)(r.a,{children:Object(o.jsx)(i.a,{store:G,children:Object(o.jsx)(_,{})})}),document.getElementById("root")),M()},72:function(e,t,c){},73:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.200788e0.chunk.js.map