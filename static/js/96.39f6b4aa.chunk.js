(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1184:function(t,e,a){"use strict";a.r(e);var n=a(13),r=a(14),l=a(23),o=a(16),i=a(15),c=a(0),s=a.n(c),g=a(40),E=a(335),h=a(336),u=a(29),m=a(5),p=a(87),d=a(132),b=a(131),f=a.n(b),k=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=0,a=0,n=0,r=0,l=0,o=0,i=0,c=0,g=0,E=0,h=0,u=0;return this.props.data.forEach(function(t,e){t.pembayaran.forEach(function(t,e){c="CASH"===t.jenis?parseInt(c)+parseInt(t.jumlah_in):parseInt(c),g="TRANSFER"===t.jenis?parseInt(g)+parseInt(t.jumlah_in):parseInt(g),E="DEBET"===t.jenis?parseInt(E)+parseInt(t.jumlah_in):parseInt(E),h="CREDIT"===t.jenis?parseInt(h)+parseInt(t.jumlah_in):parseInt(h),u="TUKAR"===t.jenis?parseInt(u)+parseInt(t.jumlah_in):parseInt(u)})}),this.props.data.forEach(function(t,c){t.detail.forEach(function(t,a){t.stock_on_hand,t.berat_atribut,e+=t.berat,n+=t.harga_jual,i+=t.ongkos,o+=t.harga_total,t.harga_gram,r+=t.harga_atribut,l+=t.berat_selisih}),a+=t.detail.length}),s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Transaksi Penjualan",sheet:"Laporan Transaksi Penjualan",buttonText:"Export Exel"}),s.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"15",style:{textAlign:"center"}}," ","LAPORAN TRANSAKSI PENJUALAN"," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"15"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"15"}," ",0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"15"}," TOKO :  ",Object(m.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"15"}," ALAMAT :  ",Object(m.j)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"15"})),s.a.createElement("tr",null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO FJ"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA MEMBER"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),"SEMUA"===this.props.type_laporan?null:s.a.createElement(s.a.Fragment,null,s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT SELISIH")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA JUAL"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA ATRIBUT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"ONGKOS"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"HARGA TOTAL"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"CASH"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TRANSFER"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"CREDIT"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"DEBET"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TUKAR"))),s.a.createElement("tbody",null,this.props.data.map(function(e,a){return s.a.createElement(s.a.Fragment,null,e.detail.map(function(a,n){return s.a.createElement("tr",{key:n},s.a.createElement("td",null,a.no_faktur_jual),s.a.createElement("td",null,a.nama_customer),s.a.createElement("td",{style:{textAlign:"right"}},Object(m.f)(a.berat,2)),"SEMUA"===t.props.type_laporan?null:s.a.createElement("td",{style:{textAlign:"right"}},Object(m.f)(a.berat_selisih,2)),s.a.createElement("td",{style:{textAlign:"right"}},a.harga_jual.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},a.harga_atribut.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},a.ongkos.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},a.harga_total.toLocaleString("kr-KO")),s.a.createElement("td",{style:{textAlign:"right"}},void 0===e.pembayaran?0:0!==e.pembayaran.filter(function(t){return"CASH"===t.jenis}).length?e.pembayaran.filter(function(t){return"CASH"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0===e.pembayaran?0:0!==e.pembayaran.filter(function(t){return"TRANSFER"===t.jenis}).length?e.pembayaran.filter(function(t){return"TRANSFER"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0===e.pembayaran?0:0!==e.pembayaran.filter(function(t){return"CREDIT"===t.jenis}).length?e.pembayaran.filter(function(t){return"CREDIT"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0===e.pembayaran?0:0!==e.pembayaran.filter(function(t){return"DEBET"===t.jenis}).length?e.pembayaran.filter(function(t){return"DEBET"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0),s.a.createElement("td",{style:{textAlign:"right"}},void 0===e.pembayaran?0:0!==e.pembayaran.filter(function(t){return"TUKAR"===t.jenis}).length?e.pembayaran.filter(function(t){return"TUKAR"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0))}))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"2",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Grand Total : ",a),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},Object(m.f)(Object(m.k)(e),3)),"SEMUA"===this.props.type_laporan?null:s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},Object(m.f)(Object(m.k)(l),3)),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},n.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},r.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},i.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},o.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},c.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},g.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},h.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},E.toLocaleString("kr-KO")),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},u.toLocaleString("kr-KO"))))))}}]),a}(c.Component),S=a(106),y=(a(222),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new S.default("l","mm",[297,210])),n=[],r=30,l=0,o=0,i=0,c=0,s=0,g=0,E=0,h=0,u=0,p=0,d=0,b=0,f=0,k=0,y=0,A=0,O=0,j=Object(m.j)().alamat_toko.length;a.setFontSize(15),a.text("LAPORAN TRANSAKSI PENJUALAN",14,15),a.setFontSize(20),a.text(Object(m.j)().nama_toko,200,15),a.setFontSize(8),j>20&&a.text(Object(m.j)().alamat_toko.slice(0,48),200,20),j>50&&a.text(Object(m.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN TRANSAKSI PENJUALAN"}),a.text("PERIODE : ".concat(0===Object(m.l)("tgl_laporan").length?null:JSON.parse(Object(m.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(m.l)("tgl_laporan")).tgl_akhir),14,25);t.forEach(function(t,e){t.pembayaran.forEach(function(t,e){f="CASH"===t.jenis?parseInt(f)+parseInt(t.jumlah_in):parseInt(f),k="TRANSFER"===t.jenis?parseInt(k)+parseInt(t.jumlah_in):parseInt(k),y="DEBET"===t.jenis?parseInt(y)+parseInt(t.jumlah_in):parseInt(y),A="CREDIT"===t.jenis?parseInt(A)+parseInt(t.jumlah_in):parseInt(A),O="TUKAR"===t.jenis?parseInt(O)+parseInt(t.jumlah_in):parseInt(O)})}),t.forEach(function(t,a){h=void 0===t.pembayaran?0:0!==t.pembayaran.filter(function(t){return"CASH"===t.jenis}).length?t.pembayaran.filter(function(t){return"CASH"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0,u=void 0===t.pembayaran?0:0!==t.pembayaran.filter(function(t){return"TRANSFER"===t.jenis}).length?t.pembayaran.filter(function(t){return"TRANSFER"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0,p=void 0===t.pembayaran?0:0!==t.pembayaran.filter(function(t){return"DEBET"===t.jenis}).length?t.pembayaran.filter(function(t){return"DEBET"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0,d=void 0===t.pembayaran?0:0!==t.pembayaran.filter(function(t){return"CREDIT"===t.jenis}).length?t.pembayaran.filter(function(t){return"CREDIT"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0,b=void 0===t.pembayaran?0:0!==t.pembayaran.filter(function(t){return"TUKAR"===t.jenis}).length?t.pembayaran.filter(function(t){return"TUKAR"===t.jenis})[0].jumlah_in.toLocaleString("kr-KO"):0,t.detail.forEach(function(t,a){var r=[t.no_faktur_jual,t.nama_customer,{content:Object(m.f)(t.berat,3),styles:{halign:"right",textColor:"#000"}},{content:parseInt(t.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(parseInt(t.harga_atribut)).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(parseInt(t.ongkos)).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:parseInt(t.harga_total).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(h),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(u),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(d),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(p),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(b),styles:{halign:"right",textColor:"#000"}}],E=[t.no_faktur_jual,t.nama_customer,{content:Object(m.f)(t.berat,3),styles:{halign:"right",textColor:"#000"}},{content:Object(m.f)(t.berat_selisih,3),styles:{halign:"right",textColor:"#000"}},{content:parseInt(t.harga_jual).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(parseInt(t.harga_atribut)).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(parseInt(t.ongkos)).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:parseInt(t.harga_total).toLocaleString("kr-KO"),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(h),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(u),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(d),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(p),styles:{halign:"right",textColor:"#000"}},{content:Object(m.k)(b),styles:{halign:"right",textColor:"#000"}},t.kode_marketplace];parseFloat(t.berat_awal),l+=parseFloat(t.berat),o+=parseFloat(t.berat_selisih),i+=parseInt(t.ongkos),c+=parseInt(t.harga_jual),parseInt(t.berat_atribut),s+=parseInt(t.harga_atribut),parseInt(t.harga_gram),g+=parseInt(t.harga_total),parseFloat(t.berat_awal),parseFloat(t.berat),parseFloat(t.berat_selisih),parseInt(t.ongkos),parseInt(t.harga_jual),parseInt(t.berat_atribut),parseInt(t.harga_atribut),parseInt(t.harga_gram),parseInt(t.harga_total),"SELISIH"===e?n.push(E):n.push(r)}),E+=t.detail.length,t.detail.length});var x=[{content:"Total Transaksi Penjualan : ".concat(E),colSpan:2,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.f)(l,3)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(c).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.k)(parseInt(s).toLocaleString("kr-KO"))),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.k)(parseInt(i)).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(g).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===f?"":parseInt(f).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===k?"":parseInt(k).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===A?"":parseInt(A).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===y?"":parseInt(y).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===O?"":parseInt(O).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}],_=[{content:"Total Transaksi Penjualan : ".concat(E),colSpan:2,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.f)(l,3)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.f)(o,3)),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(c).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(s).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(m.k)(parseInt(i)).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(parseInt(g).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===f?"":parseInt(f).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===k?"":parseInt(k).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===A?"":parseInt(A).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===y?"":parseInt(y).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(0===O?"":parseInt(O).toLocaleString("kr-KO")),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];n.push("SEMUA"===e?x:_);var C=[{content:"Printed By ".concat(JSON.parse(Object(m.l)("userdata")).user_id," / ").concat(Object(m.i)()),colSpan:13,styles:{fontStyle:"italic",textColor:"#000"}}];n.push(C),a.autoTable({head:"SEMUA"===e?[[{content:"NO FJ"},{content:"NAMA MEMBER"},{content:"BERAT",styles:{halign:"right"}},{content:"HARGA JUAL",styles:{halign:"right"}},{content:"HARGA ATRIBUT",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}},{content:"HARGA TOTAL",styles:{halign:"right"}},{content:"CASH",styles:{halign:"right"}},{content:"TRANSFER",styles:{halign:"right"}},{content:"CREDIT",styles:{halign:"right"}},{content:"DEBET",styles:{halign:"right"}},{content:"TUKAR",styles:{halign:"right"}}]]:[[{content:"NO FJ"},{content:"NAMA MEMBER"},{content:"BERAT"},{content:"BERAT SELISIH"},{content:"HARGA JUAL"},{content:"HARGA ATRIBUT"},{content:"ONGKOS"},{content:"HARGA TOTAL"},{content:"CASH"},{content:"TRANSFER"},{content:"CREDIT"},{content:"DEBET"},{content:"TUKAR"}]],body:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"},tableLineColor:[255,255,255],tableLineWidth:1}),r=a.autoTableEndPosY()+3,n=[];var L=a.internal.getNumberOfPages(),I=a.internal.pageSize.width,N=a.internal.pageSize.height;a.setFontSize(10);for(var v=1;v<L+1;v++){var T=I/2,K=N-10;a.setPage(v),a.text("".concat(v," of ").concat(L),T,K,{align:"center"})}a.save("LAPORAN TRANSAKSI PENJUALAN.pdf")}),A=a(53),O=a.n(A),j=a(12),x=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={date:new Date,type_laporan:"SEMUA",databarang:[]},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.change("type","SEMUA"),this.props.change("type_transaksi","SEMUA"),this.props.change("marketplace","SEMUA"),this.props.change("kode_group","ALL"),this.props.change("jenis_group","ALL"),this.props.dispatch(Object(j.u)()),this.props.dispatch(Object(j.rb)())}},{key:"exportPdf",value:function(){y(this.props.LaporanDataPenjualan,this.state.type_laporan)}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){this.setState({tgl_akhir:new Date(t)})}},{key:"typeLaporan",value:function(t){"SEMUA"===t?this.setState({type_laporan:"SEMUA"}):this.setState({type_laporan:"SELISIH"})}},{key:"render",value:function(){var t=this,e=[{value:"SEMUA",name:"SEMUA"}];this.props.getDataMarketplace.forEach(function(t){var a={value:t.kode_marketplace,name:t.kode_marketplace+" - "+t.nama_marketplace};e.push(a)});var a=[],n=0,r=0,l=0,o=0,i=0,c=0;this.props.LaporanDataPenjualan.forEach(function(t){t.detail.forEach(function(t){a.push(t),n+=t.berat,r+=t.berat_selisih,o+=t.harga_atribut,l+=t.ongkos,i+=t.harga_jual,c+=t.harga_total,t.harga_gram})});var g=[{value:"ALL",name:"SEMUA"}];this.props.GetDataGroup.forEach(function(t){var e={name:t.kode_group,value:t.kode_group};g.push(e)});var h=[{dataField:"no_faktur_jual",text:"No FJ",footerAttrs:{colSpan:"2"},footer:function(t,e,n,r){return s.a.createElement("div",null,"Total Barang : ",a.length," ")}},{dataField:"nama_customer",text:"Nama Member"},{dataField:"berat",text:"Berat",headerClasses:"text-right",footer:function(t,e,a,r){return s.a.createElement("div",{className:"text-right"},Object(m.f)(n,3)," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},Object(m.f)(t,3))}},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},i.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_atribut",text:"Harga Atribut",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},o.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},l.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},c.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}}],d=[{dataField:"no_faktur_jual",text:"No FJ",footerAttrs:{colSpan:"2"},footer:function(t,e,n,r){return s.a.createElement("div",null,"Total Barang : ",a.length," ")}},{dataField:"nama_customer",text:"Nama Member"},{dataField:"berat",text:"Berat",headerClasses:"text-right",footer:function(t,e,a,r){return s.a.createElement("div",{className:"text-right"},Object(m.f)(n,3)," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},Object(m.f)(t,3))}},{dataField:"berat_selisih",text:"Berat Selisih",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},Object(m.f)(r,3)," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},Object(m.f)(t,3))}},{dataField:"harga_jual",text:"Harga Jual",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},i.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_atribut",text:"Harga Atribut",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},o.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"ongkos",text:"Ongkos",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},l.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}},{dataField:"harga_total",text:"Harga Total",headerClasses:"text-right",footer:function(t,e,a,n){return s.a.createElement("div",{className:"text-right"},c.toLocaleString("kr-KO")," ")},formatter:function(t){return s.a.createElement("div",{className:"text-right"},t.toLocaleString("kr-KO"))}}],b={renderer:function(t){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},"Berat Awal : ",Object(m.f)(t.berat_awal,3)," ",s.a.createElement("br",null),"Berat Selisih : ",Object(m.f)(t.berat_selisih,3)," ",s.a.createElement("br",null),"Nama Atribut : ",t.nama_atribut," ",s.a.createElement("br",null),"Berat Atribut : ",t.berat_atribut," ",s.a.createElement("br",null),"Harga Atribut : ",t.harga_atribut.toLocaleString("kr-KO")," ",s.a.createElement("br",null),"Ongkos : ",t.ongkos.toLocaleString("kr-KO")," ",s.a.createElement("br",null),"Harga/Gram : ",t.harga_gram.toLocaleString("kr-KO")," ",s.a.createElement("br",null),"Nama Member : ",t.nama_customer," ",s.a.createElement("br",null))))},showExpandColumn:!0,expandByColumnOnly:!0};return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(E.a,{name:"tgl_awal",component:u.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(E.a,{name:"tgl_akhir",component:u.c,type:"text",selected:this.state.tgl_akhir,onChange:function(e){return t.setLastDate(e)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(E.a,{name:"type",component:u.f,onChange:function(e){return t.typeLaporan(e)},options:[{value:"SEMUA",name:"SEMUA"},{value:"SELISIH",name:"SELISIH"}],label:"Type Laporan",placeholder:"Pilih Type"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(E.a,{name:"type_transaksi",component:u.f,options:[{value:"SEMUA",name:"SEMUA"},{value:"PENJUALAN",name:"PENJUALAN"},{value:"AMBILTITIPAN",name:"AMBIL TITIPAN"},{value:"AMBILPESANAN",name:"AMBIL PESANAN"}],label:"Type Transaksi",placeholder:"Pilih Type Transaksi"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(E.a,{name:"kode_group",component:u.f,options:g,onChange:function(e){return t.setState({kode_group:e})},label:"Kode Group",placeholder:"Pilih Kode Group"})),s.a.createElement("div",{className:"col-lg-3"},s.a.createElement(E.a,{name:"jenis_group",component:u.f,options:[{value:"ALL",name:"SEMUA"},{value:"MUDA",name:"MUDA"},{value:"TUA",name:"TUA"}],label:"Jenis Group",placeholder:"Pilih Jenis Group"})),s.a.createElement("div",{className:"col-lg-2"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",null,"\xa0"),s.a.createElement("br",null),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-12"},s.a.createElement(p.a,{keyField:"no_faktur_jual",data:this.props.export?a:[],columns:"SELISIH"===this.state.type_laporan?d:h,empty:!0,textEmpty:"Data Laporan Transaksi Penjualan Kosong",expandRow:b})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(k,{data:this.props.LaporanDataPenjualan,type_laporan:this.state.type_laporan}))))),this.props.isLoading?s.a.createElement(O.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),a}(c.Component);x=Object(h.a)({form:"HeadFormLaporanPenjualanBarang",enableReinitialize:!0,validate:d.a})(x);e.default=Object(g.b)(function(t){return{getDataMarketplace:t.datamaster.getDataMarketplace,GetDataGroup:t.datamaster.GetDataGroup,initialValues:{tgl_awal:Object(m.h)(),tgl_akhir:Object(m.h)()}}})(x)}}]);
//# sourceMappingURL=96.39f6b4aa.chunk.js.map