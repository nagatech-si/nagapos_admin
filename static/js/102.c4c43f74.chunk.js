(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1204:function(a,e,t){"use strict";t.r(e);var n=t(13),r=t(14),i=t(23),l=t(16),c=t(15),o=t(0),s=t.n(o),u=t(27),b=t(5),d=t(25),m=t(130),p=t(10),h=t(107),j=Object(o.lazy)(function(){return t.e(26).then(t.bind(null,1185))}),g=function(a){Object(l.a)(t,a);var e=Object(c.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,LaporanPenjualanBayar:[],export:!1},r.handleSubmit=r.handleSubmit.bind(Object(i.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var a=JSON.parse(Object(b.l)("userdata"));this.setState({username:a.user_id})}},{key:"handleSubmit",value:function(a){var e=this;this.setState({isLoading:!0});var t={tgl_awal:Object(b.e)(h(new Date(a.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(b.e)(h(new Date(a.tgl_akhir)).format("YYYY-MM-DD"))};Object(p.e)("penjualan/get/reportbayar",t).then(function(a){0===a.data.length?(Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})):(Object(d.e)("success","Data Laporan Transaksi Penjualan Tersedia"),Object(b.m)("tgl_laporan",JSON.stringify(t)),e.setState({export:!0,isLoading:!1,LaporanPenjualanBayar:a.data}))}).catch(function(a){e.setState({export:!1,isLoading:!1}),Object(d.e)("info","Data Yang Di Cari Tidak Ada !!!")})}},{key:"render",value:function(){var a=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(u.b,{to:"#"},"Laporan")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Penjualan Bayar")),s.a.createElement("h1",{className:"page-header"},"Laporan Penjualan Bayar "),s.a.createElement(m.a,null,s.a.createElement(m.c,null,"Laporan Penjualan Bayar"),s.a.createElement(m.b,null,s.a.createElement(j,{export:this.state.export,isLoading:this.state.isLoading,LaporanPenjualanBayar:this.state.LaporanPenjualanBayar,onSubmit:function(e){return a.handleSubmit(e)}}))))}}]),t}(o.Component);e.default=g}}]);
//# sourceMappingURL=102.c4c43f74.chunk.js.map