(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1211:function(t,e,a){"use strict";a.r(e);var n=a(13),o=a(14),i=a(16),s=a(15),c=a(0),l=a.n(c),d=a(36),r=a(22),u=a.n(r),m=a(5),h=a(25),f=a(10),p=a(30),b=Object(c.lazy)(function(){return Promise.all([a.e(13),a.e(121)]).then(a.bind(null,1190))}),g=function(t){Object(i.a)(c,t);var e=Object(s.a)(c);function c(t){var a;return Object(n.a)(this,c),(a=e.call(this,t)).state={date:""},a.getDate=function(){var t=(new Date).toDateString();a.setState({date:t})},a.state={isLoading:!1},a}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var t=this;localStorage.setItem("base_url",JSON.stringify(window.location.href)),Object(m.l)("islogin")===Object(m.i)()&&this.props.history.push("/dashboard"),window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",function(t){window.history.pushState(null,document.title,window.location.href)}),this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1),this.context.handleSetBodyWhiteBg(!0),this.getDate(),Object(f.c)("system/get").then(function(e){var a={alamat_toko:e.data[0].alamat_toko,nama_toko:e.data[0].nama_toko};Object(m.p)("data_toko",a),t.setState({alamat_toko:e.data[0].alamat_toko,nama_toko:e.data[0].nama_toko})}).catch(function(e){t.setState({alamat_toko:"",nama_toko:""})})}},{key:"componentWillUnmount",value:function(){this.context.handleSetPageSidebar(!0),this.context.handleSetPageHeader(!0),this.context.handleSetBodyWhiteBg(!1)}},{key:"onfiled",value:function(t){console.log(t),u.a.fire({title:"Oopss !!!",text:void 0===t.response?"Terjadi Kesalahan Saat Request Data":t.response.data,icon:"info"}),this.setState({isLoading:!1})}},{key:"onSubmit",value:function(t){var e=this,a={user_id:t.user_id,password:t.password};this.setState({isLoading:!0}),Object(f.g)("users/login",a).then(function(e){Object(m.m)("userdata",JSON.stringify(e.data)),Object(m.m)("token",e.data.token),Object(m.m)("islogin",Object(m.i)()),document.getElementById("logindata").value=t.user_id,Object(f.d)("para-system/type/module").then(function(t){Object(m.p)("module",t.data.filter(function(t){return"true"===t.value}))})}).then(function(){Object(f.c)("akses-user/id/"+t.user_id).then(function(t){localStorage.setItem("menu",JSON.stringify(t.data))}).catch(function(t){Object(h.e)("info",t.response.data)})}).then(function(){return e.props.history.push("/dashboard")}).catch(function(t){return e.onfiled(t)})}},{key:"TextFilenotapesanan",value:function(){var t=document.createElement("a"),e=new Blob([document.getElementById("logindata").value],{type:"text/plain;charset=utf-8"});t.href=URL.createObjectURL(e),t.download="timbangan.txt",document.body.appendChild(t),t.click()}},{key:"render",value:function(){var t=this;return l.a.createElement("div",{className:"login login-with-news-feed"},l.a.createElement("div",{className:"news-feed"},l.a.createElement("div",{className:"news-image",style:{backgroundImage:"url(".concat(a(920),")")}}),l.a.createElement("div",{className:"news-caption text-center"},l.a.createElement("textarea",{style:{display:"none"},id:"logindata",rows:"100",cols:"100"}),l.a.createElement("p",null,this.state.alamat_toko))),l.a.createElement("div",{className:"right-content"},l.a.createElement(b,{isLoading:this.state.isLoading,nama_toko:this.state.nama_toko,onSubmit:function(e){return t.onSubmit(e)}})))}}]),c}(l.a.Component);g.contextType=p.a,e.default=Object(d.f)(g)},920:function(t,e,a){t.exports=a.p+"static/media/backround-kresno.57bcbf16.png"}}]);
//# sourceMappingURL=46.134e6c73.chunk.js.map