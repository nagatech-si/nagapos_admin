(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1242:function(t,e,a){"use strict";a.r(e);var n=a(13),l=a(14),r=a(23),o=a(16),c=a(15),i=a(2),s=a(0),u=a.n(s),g=a(40),m=a(335),h=a(336),E=a(29),d=a(5),b=a(87),p=a(132),f=a(53),k=a.n(f),x=a(106),S=(a(222),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new x.default("l","mm",[297,210]),n=[],l=30,r=0,o=0,c=0,i=0;a.setFontSize(15),a.text("LAPORAN  STOCK HUTANG",14,15),a.setFontSize(20),a.text(Object(d.j)().nama_toko,200,15),a.setFontSize(8);var s=Object(d.j)().alamat_toko.length;s>20&&a.text(Object(d.j)().alamat_toko.slice(0,48),200,20),s>50&&a.text(Object(d.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN  STOCK HUTANG"}),a.text("PERIODE : ".concat(0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir),14,25),t=[[{content:"MODEL BARANG"},{content:"QTY",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}},{content:"BERAT + PLASTIK",styles:{halign:"right"}},{content:"HUTANG POKOK",styles:{halign:"right"}}]],e.forEach(function(t,e){r+=t.qty,o+=t.jumlah_hutang,c+=t.berat_emas,i+=t.berat_bruto,t.total_hutang;var a=[t.nama_barang,{content:parseInt(t.qty),styles:{halign:"right"}},{content:t.berat_emas.toFixed(2),styles:{halign:"right"}},{content:t.berat_bruto.toFixed(2),styles:{halign:"right"}},{content:parseInt(t.jumlah_hutang).toLocaleString("kr-KO"),styles:{halign:"right"}}];n.push(a)});var u=[{content:"Grand total",colSpan:1,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(r),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(c.toFixed(2)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(i.toFixed(2)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(o.toLocaleString("kr-KO")),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];n.push(u);var g=[{colSpan:3,content:"Printed By ".concat(JSON.parse(Object(d.l)("userdata")).user_id," / ").concat(Object(d.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(g),a.autoTable({head:t,body:n,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"}}),l=a.autoTableEndPosY()+3,n=[];var m=a.internal.getNumberOfPages(),h=a.internal.pageSize.width,E=a.internal.pageSize.height;a.setFontSize(10);for(var b=1;b<m+1;b++){var p=h/2,f=E-10;a.setPage(b),a.text("".concat(b," of ").concat(m),p,f,{align:"center"})}a.save("LAPORAN STOCK HUTANG.pdf")}),O=a(131),y=a.n(O),j=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var t=0,e=0,a=0,n=0;return this.props.data.forEach(function(l,r){l.total_hutang,n+=l.qty,t+=l.berat_emas,e+=l.berat_bruto,a+=l.jumlah_hutang}),u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Hutang Lunas",sheet:"Laporan Hutang Lunas",buttonText:"Export Exel"}),u.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"5"}," Laporan Transaksi Hutang Lunas ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"5"}," Periode  ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"5"}," ",0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+"s/d"+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"5"}," TOKO :  ",Object(d.j)().nama_toko," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"5"}," ALAMAT :  ",Object(d.j)().alamat_toko," ")),u.a.createElement("tr",null,u.a.createElement("th",{colSpan:"5"})),u.a.createElement("tr",null,u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"MODEL BARANG"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"QTY"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT + PLASTIK"),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HUTANG POKOK"))),u.a.createElement("tbody",null,this.props.data.map(function(t,e){return u.a.createElement(u.a.Fragment,null,u.a.createElement("tr",null,u.a.createElement("td",null," ",t.nama_barang),u.a.createElement("td",{style:{textAlign:"right"}}," ",t.qty),u.a.createElement("td",{style:{textAlign:"right"}}," ",t.berat_emas.toFixed(2)),u.a.createElement("td",{style:{textAlign:"right"}}," ",t.berat_bruto.toFixed(2)),u.a.createElement("td",{style:{textAlign:"right"}}," ",t.jumlah_hutang.toLocaleString("kr-KO"))))})),u.a.createElement("tfoot",null,u.a.createElement("tr",null,u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," Grand Total "),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",n," "),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",t.toFixed(2)," "),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",e.toFixed(2)),u.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"\xa0",a.toLocaleString("kr-KO"))))))}}]),a}(s.Component),v=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={date:new Date,columns:[{dataField:"nama_barang",text:"Model Barang",footer:function(t,e,a,n){return u.a.createElement("div",null,"Total Transaksi : ",l.props.LaporanStockHutang.length," ")}},{dataField:"qty",text:"Qty",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t)},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0)," ")}},{dataField:"berat_emas",text:"Berat",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toFixed(2))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toFixed(2)," ")}},{dataField:"berat_bruto",text:"Berat + Plastik",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toFixed(2))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toFixed(2)," ")}},{dataField:"jumlah_hutang",text:"Hutang Pokok",headerClasses:"text-right",formatter:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.toLocaleString("kr-ko"))},footer:function(t){return u.a.createElement("div",{className:"text-right"}," ",t.reduce(function(t,e){return t+e},0).toLocaleString("kr-KO")," ")}}]},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){S(this.props.LaporanStockHutang)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"render",value:function(){var t=this;return u.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(m.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement(m.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),u.a.createElement("div",{className:"col-lg-4"},u.a.createElement("div",{className:"text-right"},u.a.createElement("label",null,"\xa0"),u.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?u.a.createElement(u.a.Fragment,null,u.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),u.a.createElement("div",{className:"col-lg-12"},u.a.createElement(b.a,{keyField:"berat_bruto",data:this.props.export?this.props.LaporanStockHutang:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Stock Hutang Kosong"})),u.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-6"},u.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),u.a.createElement("div",{className:"col-lg-6"},u.a.createElement(j,{data:this.props.LaporanStockHutang}))))),this.props.isLoading?u.a.createElement(k.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(s.Component);v=Object(h.a)({form:"HeadLaporanStockHutang",enableReinitialize:!0,validate:p.a})(v);var _=Object(g.b)(function(t){return{initialValues:{tgl_awal:Object(d.h)(),tgl_akhir:Object(d.h)()}}})(v),L=function(t){Object(o.a)(a,t);var e=Object(c.a)(a);function a(t){var l;return Object(n.a)(this,a),(l=e.call(this,t)).state={isLoading:!1,LaporanStockHutang:[],export:!1},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(t){var e=this,a=Object(i.y)(Object(i.K)(new Date(t.tgl_awal)).format("YYYY-MM-DD")),n=Object(i.y)(Object(i.K)(new Date(t.tgl_akhir)).format("YYYY-MM-DD"));this.setState({isLoading:!0}),Object(i.B)("hutang/report-stock-hutang?tgl_from="+a+"&tgl_to="+n).then(function(t){if(0===t.data.length)return Object(i.t)("info","Laporan Stock Hutang Kosong"),e.setState({export:!1,isLoading:!1}),!1;Object(i.t)("success","Laporan Stock Hutang Tersedia"),e.setState({LaporanStockHutang:t.data,isLoading:!1,export:!0})}).catch(function(t){Object(i.t)("info","Data Yang Di Cari Tidak Ada !!!"),e.setState({export:!1,isLoading:!1})})}},{key:"render",value:function(){var t=this;return i.n.createElement("div",null,i.n.createElement("ol",{className:"breadcrumb float-xl-right"},i.n.createElement("li",{className:"breadcrumb-item"},i.n.createElement(i.g,{to:"#"},"Laporan")),i.n.createElement("li",{className:"breadcrumb-item active"},"Laporan Stock Hutang")),i.n.createElement("h1",{className:"page-header"},"Laporan Stock Hutang "),i.n.createElement(i.k,null,i.n.createElement(i.m,null,"Laporan Stock Hutang"),i.n.createElement("br",null),i.n.createElement(i.l,null,i.n.createElement(_,{export:this.state.export,isLoading:this.state.isLoading,LaporanStockHutang:this.state.LaporanStockHutang,onSubmit:function(e){return t.handleSubmit(e)}})),i.n.createElement("br",null)))}}]),a}(i.n.Component);L=Object(i.O)({form:"LaporanStockHutang",enableReinitialize:!0})(L);e.default=Object(i.u)(null)(L)}}]);
//# sourceMappingURL=82.362ba047.chunk.js.map