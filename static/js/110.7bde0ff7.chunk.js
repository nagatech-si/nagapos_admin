(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1192:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),i=t(23),c=t(16),s=t(15),o=t(0),l=t.n(o),u=t(27),b=t(5),d=t(25),m=t(130),p=t(10),h=t(107),v=Object(o.lazy)(function(){return t.e(111).then(t.bind(null,1180))}),S=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={export:!1,isLoading:!1,LaporanServices:[]},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(Object(b.l)("userdata"));this.setState({username:e.user_id})}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={tgl_awal:Object(b.e)(h(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(b.e)(h(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(b.m)("tgl_laporan",JSON.stringify(t)),Object(p.i)("service/get/report",t).then(function(e){0===e.data.length?(Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!"),a.setState({export:!1,isLoading:!1,LaporanServices:[]})):(Object(d.e)("success","Laporan Transaksi Service Tersedia"),Object(b.m)("tgl_laporan",JSON.stringify(t)),a.setState({export:!0,isLoading:!1,LaporanServices:e.data}))}).catch(function(e){Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!"),a.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.b,{to:"#"},"Laporan")),l.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Service")),l.a.createElement("h1",{className:"page-header"},"Laporan Service "),l.a.createElement(m.a,null,l.a.createElement(m.c,null,"Laporan Service"),l.a.createElement(m.b,null,l.a.createElement(v,{export:this.state.export,isLoading:this.state.isLoading,LaporanServices:this.state.LaporanServices,onSubmit:function(a){return e.handleSubmit(a)}}))))}}]),t}(o.Component);a.default=S}}]);
//# sourceMappingURL=110.7bde0ff7.chunk.js.map