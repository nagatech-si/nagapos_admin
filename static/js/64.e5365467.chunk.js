(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1259:function(t,a,e){"use strict";e.r(a);var n=e(13),i=e(14),o=e(23),s=e(16),c=e(15),u=e(0),r=e.n(u),l=e(27),d=e(130),m=e(12),k=e(40),b=e(22),g=e.n(b),h=e(25),p=e(46),f=e(10),E=e(5),O=e(87),T=e(335),j=e(336),v=e(29),_=function(t,a){var e={};return t.kode_tukang||(e.kode_tukang="Kode Tukang Tidak Boleh Kosong"),t.nama_tukang||(e.nama_tukang="Nama Tukang Tidak Boleh Kosong"),e},y=e(53),S=e.n(y),D=function(t){Object(s.a)(e,t);var a=Object(c.a)(e);function e(){var t;Object(n.a)(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=a.call.apply(a,[this].concat(o))).state={aktif:!1},t}return Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.props.isEdit?document.getElementById("nama_tukang").focus():document.getElementById("kode_tukang").focus()},100)}},{key:"render",value:function(){var t=this;return r.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()}},r.a.createElement(T.a,{tabIndex:"1",id:"kode_tukang",name:"kode_tukang",component:v.e,type:"text",label:"Kode Tukang",placeholder:"Masukan Kode Tukang",readOnly:this.props.isEdit}),r.a.createElement(T.a,{tabIndex:"2",id:"nama_tukang",name:"nama_tukang",component:v.e,type:"text",label:"Nama Tukang",onBlur:function(){return t.setState({aktif:!0})},placeholder:"Masukan Nama Tukang"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-right"},r.a.createElement("button",{className:"btn btn-white",onClick:function(){return t.props.dispatch(Object(m.Ab)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",r.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?r.a.createElement(S.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),e}(u.Component);D=Object(j.a)({form:"ModalTukang",enableReinitialize:!0,validate:_})(D);var M=Object(k.b)(function(t){if(null!==t.datamaster.ShowModalTukang)return{initialValues:{kode_tukang:t.datamaster.ShowModalTukang.kode_sales,nama_tukang:t.datamaster.ShowModalTukang.nama_tukang}}},null)(D),N=e(223),w=function(t,a){g.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Tukang "+t+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(f.b)("tukang/delete/by-kode-tukang/"+t,{data:{kode_tukang:t}}).then(function(){Object(h.d)("Data Berhasil Di Hapus").then(function(){return a(Object(m.tb)())})}).catch(function(t){Object(h.e)("error",t.response.data)})})},x=function(t){Object(s.a)(e,t);var a=Object(c.a)(e);function e(t){var i;return Object(n.a)(this,e),(i=a.call(this,t)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kode_tukang",text:"Kode Tukang",sort:!0},{dataField:"nama_tukang",text:"Nama Tukang"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(t,a){var e={kode_sales:a.kode_tukang,nama_tukang:a.nama_tukang};return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){return i.formEditTukang(e)},className:"btn btn-primary mr-3"},r.a.createElement("i",{className:"fa fa-edit"})),r.a.createElement("button",{onClick:function(){return w(a.kode_tukang,i.props.dispatch)},className:"btn btn-danger"},r.a.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(o.a)(i)),i}return Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.tb)())}},{key:"handleSubmit",value:function(t){var a=this;this.setState({isLoading:!0});var e={nama_tukang:t.nama_tukang},n={kode_tukang:t.kode_tukang,nama_tukang:t.nama_tukang};this.state.isEdit?Object(f.k)("tukang/edit/by-kode-tukang/"+t.kode_tukang,e).then(function(){a.props.dispatch(Object(m.Ab)())}).then(function(){Object(h.e)("success","Data Berhasil Diedit")}).then(function(){a.props.dispatch(Object(m.tb)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(p.d)("ModalTukang"))}).catch(function(t){Object(h.e)("info","Terjadi Kesalahan Saat Mengirim Data"),a.setState({isLoading:!1})}):Object(f.g)("tukang/add",n).then(function(){a.props.dispatch(Object(m.Ab)())}).then(function(){Object(h.e)("success","Data Berhasil Simpan")}).then(function(){a.props.dispatch(Object(m.tb)())}).then(function(){a.props.dispatch(Object(p.d)("ModalTukang"))}).then(function(){a.setState({isLoading:!1})}).catch(function(e){return Object(E.a)(e,"tukang/reactive/by-kode-tukang/",t.kode_tukang,n,a.props.dispatch,Object(m.tb)(),Object(m.Ab)(),"ModalTukang").then(function(){a.setState({isLoading:!1})})})}},{key:"formEditTukang",value:function(t){this.props.dispatch(Object(m.Bb)()),this.props.dispatch(Object(m.hb)(t)),this.setState({isEdit:!0})}},{key:"ShowModalTukang",value:function(){this.props.dispatch(Object(m.Bb)()),this.props.dispatch(Object(m.hb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",null,r.a.createElement("ol",{className:"breadcrumb float-xl-right"},r.a.createElement("li",{className:"breadcrumb-item"},r.a.createElement(l.b,{to:"#"},"Data Master")),r.a.createElement("li",{className:"breadcrumb-item active"},"Master Tukang")),r.a.createElement("h1",{className:"page-header"},"Master Tukang "),r.a.createElement(d.a,null,r.a.createElement(d.c,null,"Master Tukang"),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{keyField:"kode_tukang",tambahData:!0,handleClick:function(){return t.ShowModalTukang()},exportCsv:!0,data:this.props.DataTukang,columns:this.state.columns,empty:this.props.DataTukang,textEmpty:"Data Tukang Kosong"})),r.a.createElement("br",null),r.a.createElement(N.a,{size:"P",title:this.state.isEdit?"Edit Data Tukang":"Tambah Data Tukang",content:r.a.createElement(M,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(a){return t.handleSubmit(a)}})})))}}]),e}(r.a.Component);a.default=Object(k.b)(function(t){return{DataTukang:t.datamaster.getDataTukang,hideModal:t.datamaster.modalDialog}},null)(x)}}]);
//# sourceMappingURL=64.e5365467.chunk.js.map