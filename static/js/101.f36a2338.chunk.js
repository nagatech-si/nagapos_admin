(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1239:function(t,e,a){"use strict";a.r(e);var n=a(13),l=a(14),r=a(23),o=a(16),c=a(15),i=a(2),s=a(0),g=a.n(s),d=a(40),m=a(335),u=a(336),h=a(29),b=a(5),p=a(87),E=a(132),k=a(53),O=a.n(k),S=a(106),f=(a(222),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new S.default("l","mm",[297,210])),n=[],l=30;a.setFontSize(15),a.text("LAPORAN STOCK JUAL",14,15),a.setFontSize(20),a.text(Object(b.j)().nama_toko,200,15),a.setFontSize(8);var r=Object(b.j)().alamat_toko.length;r>20&&a.text(Object(b.j)().alamat_toko.slice(0,48),200,20),r>50&&a.text(Object(b.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN STOCK JUAL"}),a.text("PERIODE : ".concat(0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"BARCODE"},{content:"KODE JENIS"},{content:"NAMA BARANG"},{content:"BERAT",styles:{halign:"right"}},{content:"HARGA / GRAM",styles:{halign:"right"}},{content:"HARGA JUAL",styles:{halign:"right"}},{content:"HARGA ATRIBUT",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"TOTAL",styles:{halign:"right"}}]];var o=0;e.forEach(function(t,e){o+=t.harga_total;var a=[t.kode_barcode,t.kode_dept,t.nama_barang,{content:t.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(t.harga_gram).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_atribut).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}},{content:parseInt(t.harga_total).toLocaleString("kr-KO"),styles:{halign:"right"}}];n.push(a)});var c=[{content:"Total Transaksi: ".concat(e.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push(c);var i=[{content:"Printed By ".concat(JSON.parse(Object(b.l)("userdata")).user_id," / ").concat(Object(b.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(i),a.autoTable({head:t,body:n,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),l=a.autoTableEndPosY()+3,n=[];var s=a.internal.getNumberOfPages(),g=a.internal.pageSize.width,d=a.internal.pageSize.height;a.setFontSize(10);for(var m=1;m<s+1;m++){var u=g/2,h=d-10;a.setPage(m),a.text("".concat(m," of ").concat(s),u,h,{align:"center"})}a.save("LAPORAN STOCK JUAL.pdf")}),A=a(131),_=a.n(A),L=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement(_.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Stock Jual",sheet:"Laporan Stock Jual",buttonText:"Export Exel"}),g.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9",style:{textAlign:"center"}}," ","LAPORAN Stock Jual"," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," Periode ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," ",0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," TOKO : ",Object(b.j)().nama_toko," ")),g.a.createElement("tr",null,g.a.createElement("th",{colSpan:"9"}," ALAMAT : ",Object(b.j)().alamat_toko," ")),g.a.createElement("tr",null),g.a.createElement("tr",null,g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BARCODE"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"QTY"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE JENIS"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA / GRAM"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA JUAL"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA ATRIBUT"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"HARGA TOTAL"))),g.a.createElement("tbody",null,this.props.data.map(function(t,e){return g.a.createElement("tr",{key:e},g.a.createElement("td",null,t.kode_barcode),g.a.createElement("td",null,t.kode_dept),g.a.createElement("td",null,t.nama_barang),g.a.createElement("td",{style:{textAlign:"right"}},t.berat.toFixed(2)),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_gram.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_jual.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_atribut.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.ongkos.toLocaleString("kr-KO")),g.a.createElement("td",{style:{textAlign:"right"}},t.harga_total.toLocaleString("kr-KO")))})),g.a.createElement("tfoot",null,g.a.createElement("tr",null,g.a.createElement("td",{colSpan:"8",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total Barang :"),g.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.harga_total}).reduce(function(t,e){return t+e},0).toLocaleString("ko-KO")," ")))))}}]),a}(s.Component),x=a(12),v=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={date:new Date},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){f(this.props.LaporanStockJual)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"componentDidMount",value:function(){var t=this;this.props.dispatch(Object(x.ob)()),this.props.dispatch(Object(x.kb)()),setTimeout(function(){t.props.change("kode_dept","ALL"),t.props.change("kode_baki","ALL")},100)}},{key:"render",value:function(){var t=this,e=[{value:"ALL",name:"SEMUA"}];this.props.databaki.forEach(function(t){var a={value:t.kode_baki,name:t.kode_baki+" - "+t.nama_baki};e.push(a)});var a=[{value:"ALL",name:"SEMUA"}];this.props.dataJenis.forEach(function(t){var e={value:t.kode_dept,name:t.kode_dept+" - "+t.nama_dept};a.push(e)});var n=[{dataField:"kode_barcode",text:"Kode Barcode",footerAttrs:{colSpan:"8"},footer:function(t){return g.a.createElement("div",null,"Total Transaksi : ",t.length," ")}},{dataField:"kode_dept",text:"Kode Jenis"},{dataField:"nama_barang",text:"Nama Barang"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"},Object(b.f)(t,3))}},{dataField:"harga_gram",text:"Harga / Gram",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_atribut",text:"Harga Atribut",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(t){return g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:function(t,e,a,n){return g.a.createElement("div",{className:"text-right"},t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO"))},formatter:function(t){return g.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}}];return g.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{name:"tgl_awal",component:h.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{name:"tgl_akhir",component:h.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{label:"Jenis",name:"kode_dept",options:a,placeholder:"Silahkan Pilih Kode Jenis",component:h.f})),g.a.createElement("div",{className:"col-lg-2"},g.a.createElement(m.a,{label:"Kode Baki",name:"kode_baki",options:e,placeholder:"Silahkan Pilih Kode Baki",component:h.f})),g.a.createElement("div",{className:"col-lg-4"},g.a.createElement("div",{className:"text-right"},g.a.createElement("label",null,"\xa0"),g.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?g.a.createElement(g.a.Fragment,null,g.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),g.a.createElement("div",{className:"col-lg-12"},g.a.createElement(p.a,{keyField:"kode_barcode",data:this.props.export?this.props.LaporanStockJual:[],columns:n,empty:!0,textEmpty:"Data Laporan Stock Jual Kosong"})),g.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},g.a.createElement("div",{className:"row"},g.a.createElement("div",{className:"col-lg-6"},g.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),g.a.createElement("div",{className:"col-lg-6"},g.a.createElement(L,{data:this.props.LaporanStockJual}))))),this.props.isLoading?g.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);v=Object(u.a)({form:"HeadLaporanServiceAmbil",enableReinitialize:!0,validate:E.a})(v);var y=Object(d.b)(function(t){return{databaki:t.datamaster.getDataBaki,dataJenis:t.datamaster.getDataJenis,initialValues:{tgl_awal:Object(b.h)(),tgl_akhir:Object(b.h)()}}})(v),j=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={isLoading:!1,LaporanStockJual:[],export:!1},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(t){var e=this,a={tgl_from:Object(i.y)(Object(i.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_to:Object(i.y)(Object(i.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD")),kode_dept:t.kode_dept,kode_baki:t.kode_baki},n={tgl_awal:Object(i.y)(Object(i.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(i.y)(Object(i.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(i.N)("penjualan/report-stock-terjual",a).then(function(t){if(0===t.data.length)return Object(i.t)("info","Laporan Stock Terjual Kosong"),e.setState({export:!1,isLoading:!1}),!1;Object(i.t)("success","Laporan Stock Jual Tersedia"),Object(i.J)("tgl_laporan",JSON.stringify(n)),e.setState({LaporanStockJual:t.data,isLoading:!1,export:!0})}).catch(function(t){Object(i.t)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var t=this;return i.n.createElement("div",null,i.n.createElement("ol",{className:"breadcrumb float-xl-right"},i.n.createElement("li",{className:"breadcrumb-item"},i.n.createElement(i.g,{to:"#"},"Laporan")),i.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Stock Jual")),i.n.createElement("h1",{className:"page-header"},"Laporan Stock Jual "),i.n.createElement(i.k,null,i.n.createElement(i.m,null,"Laporan Stock Jual"),i.n.createElement("br",null),i.n.createElement(i.l,null,i.n.createElement(y,{export:this.state.export,isLoading:this.state.isLoading,LaporanStockJual:this.state.LaporanStockJual,onSubmit:function(e){return t.handleSubmit(e)}})),i.n.createElement("br",null)))}}]),a}(i.n.Component);j=Object(i.O)({form:"LaporanStockJual",enableReinitialize:!0})(j);e.default=Object(i.u)(null)(j)}}]);
//# sourceMappingURL=101.f36a2338.chunk.js.map