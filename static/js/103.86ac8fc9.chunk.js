(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1203:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),i=t(23),l=t(16),s=t(15),o=t(0),u=t.n(o),c=t(27),p=t(5),d=t(25),b=t(130),m=t(10),j=t(107),g=Object(o.lazy)(function(){return t.e(31).then(t.bind(null,1178))}),h=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,LaporanPenjualanSales:[],export:!1,isDetail:!1,isRekap:!1},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(Object(p.l)("userdata"));this.setState({username:e.user_id})}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0,isRekap:"DETAIL"===e.type});var t={tgl_awal:Object(p.e)(j(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(p.e)(j(new Date(e.tgl_akhir)).format("YYYY-MM-DD")),kode_sales:e.kode_sales,type:e.type,kode_group:e.kode_group,jenis_group:e.jenis_group};Object(m.i)("penjualan/get/reportsales",t).then(function(e){0===e.data.length?(Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!"),a.setState({LaporanPenjualanSales:[],isLoading:!1,export:!1})):(Object(p.m)("tgl_laporan",JSON.stringify(t)),Object(d.e)("success","Laporan Penjualan Sales Tersedia"),a.setState({LaporanPenjualanSales:[]}),a.setState({LaporanPenjualanSales:e.data,isLoading:!1,export:!0}))}).catch(function(e){a.errorHandling(e)})}},{key:"errorHandling",value:function(e){this.setState({isLoading:!1,export:!1}),Object(d.e)("info","Data Yang Di Cari Tidak Ada")}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement("ol",{className:"breadcrumb float-xl-right"},u.a.createElement("li",{className:"breadcrumb-item"},u.a.createElement(c.b,{to:"#"},"Laporan")),u.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Sales")),u.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Sales "),u.a.createElement(b.a,null,u.a.createElement(b.c,null,"Laporan Penjualan Sales"),u.a.createElement(b.b,null,u.a.createElement(g,{export:this.state.export,isLoading:this.state.isLoading,isRekap:this.state.isRekap,LaporanPenjualanSales:this.state.LaporanPenjualanSales,onSubmit:function(a){return e.handleSubmit(a)}}))))}}]),t}(o.Component);a.default=h}}]);
//# sourceMappingURL=103.86ac8fc9.chunk.js.map