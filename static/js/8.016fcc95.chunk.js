(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1222:function(a,e,t){"use strict";t.r(e);var n=t(13),r=t(14),s=t(23),o=t(16),i=t(15),c=t(0),l=t.n(c),m=t(40),u=t(27),p=t(22),d=t.n(p),b=t(154),h=t(130),g=t(46),_=t(336),f=t(12),v=t(5),k=t(223),y=t(25),E=t(87),S=t(10),O=t(743),j=t(335),N=t(29),I=t(88),C=t(751),M=[{value:"MEMBER",name:"MEMBER"},{value:"NONMEMBER",name:"NON MEMBER"}],T=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={showMember:!0},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.sb)());var a=null===localStorage.getItem("data_customer_services_tmp")?[]:JSON.parse(localStorage.getItem("data_customer_services_tmp")||[]);a&&"MEMBER"===a.jenis_pelanggan?this.setState({showMember:!1}):(this.setState({showMember:!0}),this.props.change("jenis_pelanggan","NONMEMBER"))}},{key:"changemember",value:function(a){"MEMBER"===a?(this.setState({showMember:!1}),document.getElementById("kode_member").focus()):(document.getElementById("nama_customer").focus(),this.props.change("kode_customer",""),this.props.change("nama_customer",""),this.props.change("no_hp",""),this.props.change("alamat_customer",""),this.setState({showMember:!0}))}},{key:"getMember",value:function(a){var e=this;Object(S.c)("member/get/by-kode-member/"+a).then(function(a){0===a.data.length?Object(y.e)("info","Member Yang Anda Masukan Tidak Ada !!!"):a.data.forEach(function(a,t){e.props.change("nama_customer",a.nama_customer),e.props.change("no_hp",a.no_hp),e.props.change("alamat_customer",a.alamat_customer)})}).catch(function(a){Object(y.e)("info","Terjadi Kesalahan SIlahkan Ulangi Kembali !!!")})}},{key:"render",value:function(){var a=this;return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement(j.a,{name:"kode_sales",label:"Pilih Kode Sales",placeholder:"Masukan Kode Sales",options:this.props.DataSales.filter(function(a){return void 0!==a.kode_sales}).map(function(a){return{value:a.kode_sales,name:a.kode_sales}}),component:N.f})),l.a.createElement("div",{className:"col-4"},l.a.createElement(j.a,{name:"jenis_pelanggan",label:"Pilih Pelanggan",onChange:function(e){return a.changemember(e)},placeholder:"Silahkan Pilih Pelanggan",options:M,component:N.f})),l.a.createElement("div",{className:"col-4"},l.a.createElement(j.a,{id:"kode_member",name:"kode_customer",onChange:function(e){return a.getMember(e.target.value)},component:N.e,type:"text",readOnly:this.state.showMember,label:"Kode Customer",placeholder:"Masukan Kode Customer"})),l.a.createElement("div",{className:"col-4"},l.a.createElement(j.a,{id:"nama_customer",name:"nama_customer",component:N.e,type:"text",label:"Nama Customer",placeholder:"Masukan Nama Customer"})),l.a.createElement("div",{className:"col-4"},l.a.createElement(j.a,{name:"no_hp",component:N.e,type:"text",normalize:I.c,label:"No Hp",placeholder:"Masukan No Hp"})),l.a.createElement("div",{className:"col-4"},l.a.createElement(j.a,{name:"alamat_customer",component:N.e,type:"textarea",label:"Alamat Customer",placeholder:"Masukan Alamat Customer"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-8"}),l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoadingDataCustomer,type:"submit"},this.props.isLoadingDataCustomer?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(c.Component);T=Object(_.a)({form:"ModalDataCustomer",enableReinitialize:!0,validate:C.a})(T);var B=Object(m.b)(function(a){var e=null===localStorage.getItem("data_customer_services_tmp")?[]:JSON.parse(localStorage.getItem("data_customer_services_tmp")||[]);return{initialValues:{kode_sales:e.kode_sales||"",jenis_pelanggan:e.jenis_pelanggan||"",kode_customer:e.kode_customer||"",nama_customer:e.nama_customer||"",no_hp:e.no_hp||"",alamat_customer:e.alamat_customer||""},DataSales:a.datamaster.getDataSales}},null)(T),x=t(2),D=t(732),A=Object(x.w)({prefix:"Rp. ",locale:"kr-KO"}),w=[{value:"CASH",name:"CASH"},{value:"DEBET",name:"DEBET"},{value:"TRANSFER",name:"TRANSFER"},{value:"CREDIT",name:"CREDIT"}],R=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,type_pembayaran:"CASH",lebih:!1,columns:[{dataField:"type",text:"Type",footerAttrs:{colSpan:"1"},footer:"Grand Total"},{dataField:"Total",text:"Total",footer:""}]},r.setStartDate=r.setStartDate.bind(Object(s.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var a=this;this.props.dispatch(Object(f.sb)());var e=JSON.parse(Object(x.I)("data_barang_services")),t=0;e.forEach(function(e,n){t+=e.total,a.props.change("grand_total_pembayaran",t),a.props.change("harus_bayar_rp",t)}),this.props.change("jenis","CASH"),setTimeout(function(){document.getElementById("cash_trx_penjualan").focus()},100)}},{key:"hitungTotal",value:function(){this.props.change("kembali",this.props.kembali),this.props.change("nominal_kembali",this.props.nominal_kembali)}},{key:"pilihPembyaran",value:function(a){"CASH"===a?this.setState({type_pembayaran:"CASH"}):"TRANSFER"===a?this.setState({type_pembayaran:"TRANSFER"}):"DEBET"===a?this.setState({type_pembayaran:"DEBET"}):this.setState({type_pembayaran:"CREDIT"}),this.props.change("cash","")}},{key:"setStartDate",value:function(a){this.setState({tgl_awal:new Date(a)})}},{key:"copyValue",value:function(a){this.props.change("cash",parseInt(Object(x.j)(a)))}},{key:"render",value:function(){var a=this;return x.n.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,Object.assign({name:"grand_total_pembayaran",component:x.p,type:"text",onChange:this.hitungTotal(),readOnly:!0},A,{label:"Total Harga Jual",placeholder:"Total Harga Jual"}))),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,Object.assign({id:"harus_bayar_rp",name:"harus_bayar_rp",component:x.p,type:"text",onChange:this.hitungTotal(),readOnly:!0},A,{label:"Harus Bayar Rp",placeholder:"Harus Bayar Rp"}))),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,{name:"jenis",label:"Pilih Jenis Bayar",placeholder:"Pilih Jenis Pembayaran",options:w,onChange:function(e){return a.pilihPembyaran(e)},component:x.q})),x.n.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":(this.state.type_pembayaran,"block")}},x.n.createElement(x.c,{tabIndex:"1",name:"nama_bank",id:"nama_bank",component:x.p,type:"text",label:"Bank",placeholder:"Masukan Nama Bank"})),x.n.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":"DEBET"===this.state.type_pembayaran?"none":"block"}},x.n.createElement(x.c,{tabIndex:"1",name:"no_card",id:"no_card",component:x.p,type:"text",label:"TRANSFER"===this.state.type_pembayaran?"No Rek":"Card No",placeholder:"TRANSFER"===this.state.type_pembayaran?"Masukan No Rek":"Masukan Card No"})),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,Object.assign({tabIndex:"1",name:"cash",id:"cash_trx_penjualan",component:x.p,type:"text",label:"Nominal",onChange:this.hitungTotal()},A,{normalize:x.j,placeholder:"Masukan Nominal"}))),x.n.createElement("div",{className:"col-6",style:{display:"CREDIT"===this.state.type_pembayaran?"block":"none"}},x.n.createElement(x.c,{tabIndex:"1",name:"fee",id:"fee",component:x.p,type:"text",label:"Fee (%)",normalize:x.j,placeholder:"5"})),x.n.createElement("div",{className:"col-6 d-none"},x.n.createElement(x.c,{tabIndex:"1",name:"nominal_kembali",component:x.p,type:"text",label:"Nominal",placeholder:"Masukan Nominal"})),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,{name:"kembali",id:"sisa_bayar",component:x.p,type:"text",readOnly:!0,label:"Sisa",onFocus:function(e){return a.copyValue(e.target.value)},placeholder:"Sisa Pembayaran"})),x.n.createElement("div",{className:"CASH"===this.state.type_pembayaran?"col-6 text-right":"TRANSFER"===this.state.type_pembayaran?"col-6 text-right":"col-12 text-right"},x.n.createElement("br",null),x.n.createElement("label",null,"\xa0"),x.n.createElement("button",{tabIndex:"2",disabled:this.props.notif,className:"btn btn-primary"}," ",x.n.createElement("i",{className:"fa fa-plus"})))))}}]),t}(x.b);R=Object(x.O)({form:"HeadInputPembayaran",enableReinitialize:!0,validate:D.a})(R);var F=Object(x.x)("HeadInputPembayaran"),L=Object(x.u)(function(a){var e=F(a,"grand_total_pembayaran","harus_bayar_rp","cash"),t=e.cash,n=e.harus_bayar_rp,r=JSON.parse(localStorage.getItem("trx_pemabayaran_services"))||[],s=0;r.forEach(function(a){s=a.nominal+s});var o=parseFloat(s||0)-parseFloat(n||0);return{kembali:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),nominal_kembali:o+parseInt(t),initialValues:{estimasi_pesanan:Object(x.E)()}}})(R),K=t(53),J=t.n(K),P=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,type_pembayaran:"CASH",columns:[{dataField:"jenis",text:"Jenis",footerAttrs:{colSpan:"2"},footer:"Grand Total"},{dataField:"keterangan",text:"Keterangan"},{dataField:"nominal",text:"Total",formatter:function(a){return x.n.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return x.n.createElement("div",{className:"row text-center"},x.n.createElement("div",{className:"col-12"},x.n.createElement("button",{type:"button",disabled:"TITIPAN"===e.keterangan,onClick:function(){return r.hapusdata(t)},className:"btn btn-danger mr-3"},x.n.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},r}return Object(r.a)(t,[{key:"hapusdata",value:function(a){var e=this;x.r.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=Object(x.D)("trx_pemabayaran_services");n.splice(a,1),Object(x.Q)("trx_pemabayaran_services",n),e.setState({status:"berhasil"})}})}},{key:"simpanPembayaran",value:function(a){if(void 0===a.no_card&&"CASH"!==a.jenis&&"DEBET"!==a.jenis)return Object(x.t)("info","Nomor kartu tidak boleh kosong"),!1;if(void 0===a.nama_bank&&"CASH"!==a.jenis)return Object(x.t)("info","Nama Bank tidak boleh kosong"),!1;if(void 0===a.cash||"0"===a.cash)return Object(x.t)("info","Nominal tidak boleh kosong"),!1;var e={total_transaksi:a.harus_bayar_rp,sisa_bayar:a.nominal_kembali};Object(x.Q)("sisa_bayar_services",e);var t=JSON.parse(localStorage.getItem("trx_pemabayaran_services"))||[];if("CASH"===a.jenis||t.length){if("CASH"!==a.jenis){if(a.kembali.replace(/[^0-9]/g,"")-a.cash<0&&0!==parseInt(a.kembali))return Object(x.t)("info","Pembayaran tidak boleh lebih dari sisa"),!1;if(t.reduce(function(a,e){return a+e.nominal},0)>=a.harus_bayar_rp)return Object(x.t)("info","Pembayaran Sudah Cukup"),!1}}else if(a.kembali.replace(/[^0-9]/g,"")-a.cash<0)return Object(x.t)("info","Pembayaran tidak boleh lebih dari sisa"),!1;if(Object(x.Q)("estimasi_service",Object(x.y)(Object(x.K)(new Date(a.estimasi_service)).format("YYYY-MM-DD"))),t.findIndex(function(a){return"CASH"===a.jenis})>=0){if(a.kembali.replace(/[^0-9]/g,"")-a.cash<0&&t.reduce(function(a,e){return a+e.nominal},0)>a.harus_bayar_rp)return Object(x.t)("info","Pembayaran Sudah Cukup"),!1;if(t.reduce(function(a,e){return a+e.nominal},0)>=a.harus_bayar_rp)return Object(x.t)("info","Pembayaran Sudah Cukup"),!1}if(-1===t.findIndex(function(e){return e.jenis===a.jenis})){var n="";n="CASH"===a.jenis?"CASH":"TRANSFER"===a.jenis?a.no_card+" - "+a.nama_bank:a.nama_bank;var r={jenis:a.jenis,nominal:parseInt(a.cash),nama_bank:void 0!==a.nama_bank?a.nama_bank.toUpperCase():"-",fee:"CREDIT"===a.jenis&&a.fee||0,no_card:a.no_card||"-",keterangan:n.toUpperCase()};t.push(r),this.setState({masuk:!0}),Object(x.Q)("trx_pemabayaran_services",t)}else{var s=Object(x.D)("trx_pemabayaran_services");s=s.map(function(e){return e.jenis===a.jenis&&(e.nominal+=parseInt(a.cash)),e}),Object(x.Q)("trx_pemabayaran_services",s),this.setState({status:!0})}}},{key:"render",value:function(){var a=this;return x.n.createElement(x.n.Fragment,null,x.n.createElement(L,{onSubmit:function(e){return a.simpanPembayaran(e)}}),x.n.createElement("hr",null),x.n.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},x.n.createElement(x.s,{keyField:"jenis",exportCsv:!1,data:Object(x.D)("trx_pemabayaran_services")||[],columns:this.state.columns,empty:!0,pagination:"off",textEmpty:"Data Pembayaran Kosong"}),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-6"}),x.n.createElement("div",{className:"col-6 text-right"},x.n.createElement("button",{className:"btn btn-primary",disabled:this.props.isLoading,onClick:function(){return a.props.bayarSekarang()},type:"button"},this.props.isLoading?x.n.createElement(x.n.Fragment,null,x.n.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Diproses"):"Bayar Sekarang"))),this.props.isLoading?x.n.createElement(J.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null))}}]),t}(x.b);P=Object(x.O)({form:"ModalPembayaran",enableReinitialize:!0,validate:D.a})(P);var H=Object(x.u)(function(a){var e=Object(x.D)("data_barang_penjualan_tmp")||[],t="PENJUALAN";return e.forEach(function(a){t="-"===a.no_titip_group?"PENJUALAN":"TITIPAN"}),{status:t}})(P),U=t(339),Y=t(133),z=function(a){var e={};return a.nama_barang||(e.nama_barang="Nama Barang Tidak Boleh Kosong"),a.berat||(e.berat="Berat Tidak Boleh Kosong"),a.ongkos||(e.ongkos="Ongkos Tidak Boleh Kosong"),e},V=Object(Y.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),Q=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,harga_jual:!0,berat_jual:!0,hargapergram:!0,ongkos:!0,total:!0},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.sb)()),setTimeout(function(){document.getElementById("nama_barang").focus()},100)}},{key:"getBarcode",value:function(a){var e=this;-1===(JSON.parse(localStorage.getItem("data_barang_penjualan_tmp"))||[]).findIndex(function(e){return e.kode_barcode===a})?Object(S.c)("barang/get/by-kode-barcode/"+a).then(function(a){0===a.data.length?(Object(y.e)("info","Data Yang Dicari Tidak Ada"),e.props.change("nama_barang",""),e.props.change("nama_atribut",""),e.props.change("berat_atribut",""),e.props.change("harga_atribut",""),e.props.change("berat","")):a.data.forEach(function(a,t){e.props.change("nama_barang",a.nama_barang),e.props.change("nama_atribut",a.nama_atribut),e.props.change("berat_atribut",a.berat_atribut),e.props.change("harga_atribut",a.harga_atribut),e.props.change("berat",a.berat),e.setState({harga_jual:!1,berat_jual:!1,hargapergram:!1,ongkos:!1})})}).catch(function(a){Object(y.e)("info","Data Yang Dicari Tidak Ada")}):Object(y.e)("info","Barang Sudah Ada Di Tabel")}},{key:"hitungTotal",value:function(){this.props.change("total",this.props.total)}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()},autoComplete:"off"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(j.a,{tabIndex:"1",id:"nama_barang",name:"nama_barang",label:"Nama Barang",type:"text",placeholder:"Masukan Nama Barang",component:N.e})),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(j.a,{tabIndex:"2",name:"berat",label:"Berat Barang",onChange:this.hitungTotal(),type:"text",normalize:I.a,placeholder:"Masukan Berat Barang",component:N.e}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(j.a,{tabIndex:"3",name:"jumlah",label:"Jumlah",type:"number",readOnly:!0,defaultValue:"1",onChange:this.hitungTotal(),placeholder:"Masukan Jumlah",component:N.e})),l.a.createElement("div",{className:"col-12 col-md-6"},l.a.createElement(j.a,Object.assign({tabIndex:"4",name:"ongkos",label:"Ongkos",type:"telp"},V,{placeholder:"Masukan Ongkos",component:N.e})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-12"},l.a.createElement(j.a,Object.assign({name:"total",label:"Total",type:"telp",readOnly:!0,placeholder:"Masukan Total",component:N.e},V))),l.a.createElement("div",{className:"col-12 col-md-12"},l.a.createElement(j.a,{tabIndex:"5",name:"deskripsi",label:"Deskripsi",type:"textarea",placeholder:"Masukan Deskripsi",component:N.e}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6"}),l.a.createElement("div",{className:"col-6"},l.a.createElement("button",{tabIndex:"6",className:"btn btn-primary btn-block",disabled:this.props.submitting,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),t}(c.Component);Q=Object(_.a)({form:"ModalTambahBarang",enableReinitialize:!0,validate:z})(Q);var G=Object(m.b)(function(a){var e=Object(U.a)("ModalTambahBarang")(a,"ongkos","jumlah"),t=e.ongkos,n=e.jumlah;return{initialValues:{jumlah:"1"},total:parseFloat(t||0)*parseFloat(n||0)||0,DataSales:a.datamaster.getDataSales}})(Q),q=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,isLoadingBatal:!1,isLoadingDataCustomer:!1,FormModal:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.sb)())}},{key:"getBarcode",value:function(a){var e=this;Object(S.c)("barang/get/by-kode-barcode/"+a).then(function(a){0===a.data.length?(Object(y.e)("info","Data Yang Dicari Tidak Ada"),e.props.change("nama_barang",""),e.props.change("nama_atribut",""),e.props.change("berat_atribut",""),e.props.change("harga_atribut","")):a.data.forEach(function(a,t){e.props.change("nama_barang",a.nama_barang),e.props.change("nama_atribut",a.nama_atribut),e.props.change("berat_atribut",a.berat_atribut),e.props.change("harga_atribut",a.harga_atribut)})}).catch(function(a){Object(y.e)("info","Data Yang Dicari Tidak Ada")})}},{key:"handleSubmit",value:function(a){var e=this,t={alamat_customer:a.alamat_customer||"-",jenis_pelanggan:a.jenis_pelanggan||"NONMEMBER",kode_customer:"NONMEMBER"===a.jenis_pelanggan?"NONMEMBER":a.kode_customer,kode_sales:a.kode_sales,nama_customer:a.nama_customer||"REGULER",no_hp:a.no_hp||"-"};this.setState({isLoadingDataCustomer:!0}),localStorage.setItem("data_customer_services_tmp",JSON.stringify(t)),setTimeout(function(){e.setState({isLoadingDataCustomer:!1}),e.props.dispatch(Object(f.Ab)())},500)}},{key:"simpanBarang",value:function(a){a={nama_barang:a.nama_barang.toUpperCase()||"-",berat:parseFloat(a.berat)||0,jumlah:parseFloat(a.jumlah)||0,ongkos:parseInt(a.ongkos)||0,total:parseInt(a.total)||0,deskripsi:void 0===a.deskripsi?a.nama_barang.toUpperCase():a.deskripsi.toUpperCase()||"-"};var e=JSON.parse(localStorage.getItem("data_barang_services"))||[];this.props.dispatch(Object(g.d)("ModalTambahBarang")),document.getElementById("nama_barang").focus(),e.push(a),localStorage.setItem("data_barang_services",JSON.stringify(e)),this.props.dispatch(Object(b.d)(e)),this.props.dispatch(Object(f.Ab)()),Object(y.e)("success","Barang Berhasil Ditambahkan"),this.props.change("nama_barang","")}},{key:"bayarSekarang",value:function(a){var e=this;if(Object(v.g)("trx_pemabayaran_services").length<=0)return Object(y.e)("info","Mohon Tambahkan metode pembayaran minimal 1.."),!1;this.setState({isLoading:!0});var t=Object(v.g)("trx_pemabayaran_services"),n=[],r=0,s=0;t.forEach(function(a){"CASH"===a.jenis?(s=parseInt(a.nominal)<=Math.abs(parseInt(Object(v.g)("sisa_bayar_services").sisa_bayar))?Math.abs(parseInt(Object(v.g)("sisa_bayar_services").sisa_bayar)-parseInt(a.nominal)):parseInt(a.nominal),s=parseInt(a.nominal)>=Math.abs(parseInt(Object(v.g)("sisa_bayar_services").total_transaksi))?parseInt(a.nominal)-Math.abs(parseInt(Object(v.g)("sisa_bayar_services").sisa_bayar)):parseInt(a.nominal)):s=parseInt(a.nominal);var e={jenis:a.jenis,keterangan:a.keterangan,fee:"CREDIT"===a.jenis&&parseInt(a.fee)||0,jumlah_rp:s};r=a.nominal+r,n.push(e)});var o=JSON.parse(localStorage.getItem("data_customer_services_tmp")),i=JSON.parse(localStorage.getItem("data_barang_services")),c=[];i.forEach(function(a,e){var t={nama_barang:a.nama_barang,berat:a.berat,jumlah:a.jumlah,ongkos:a.ongkos,total_rp:a.total_rp,deskripsi:a.deskripsi};c.push(t)});var l={kode_sales:o.kode_sales,nama_customer:o.nama_customer,kode_member:"NONMEMBER"===o.jenis_pelanggan?o.jenis_pelanggan:o.kode_customer,alamat_customer:o.alamat_customer,no_hp:o.no_hp,total:parseInt(Object(v.g)("sisa_bayar_services").total_transaksi),dp_rp:parseInt(r)<parseInt(Object(v.g)("sisa_bayar_services").total_transaksi)?parseInt(r):parseInt(r)>=parseInt(Object(v.g)("sisa_bayar_services").total_transaksi)?parseInt(Object(v.g)("sisa_bayar_services").total_transaksi):0,detail_barang:c,pembayaran:n};Object(S.g)("service/simpan",l).then(function(a){e.setState({isLoading:!1}),Object(y.e)("success","Transksi Service Berhasil");for(var t=[],n=0;n<2;n++){var r="";a.data.forEach(function(a,e){var t=a.n_alamat_customer.length;r+="========================================\n",r+="             NOTA SERVICE               \n",r+="========================================\nTanggal          : ".concat(a.tgl_system,"\nKode Sales       : ").concat(a.kode_sales,"\nNama Customer    : ").concat(a.nama_customer,"\nNo Hp            : ").concat(a.no_hp,"\nAlamat Customer  : ").concat(a.n_alamat_customer.slice(0,20),"\nTotal Service    : ").concat(a.total_service.toLocaleString("kr-KO"),"\n"),t>20&&(r+="      ".concat(a.n_alamat_customer.slice(20,40),"\n")),t>40&&(r+="      ".concat(a.n_alamat_customer.slice(40,60),"\n")),r+="========================================\n",r+="Keterangan\n",r+="========================================\n";var n=0;a.detail_barang.forEach(function(e,t){n+=e.ongkos;var s=e.deskripsi.length;e.harga_nota,r+="Nama Barang      : ".concat(e.nama_barang,"\n"),r+="Berat            : ".concat(e.berat.toFixed(3),"\n"),r+="Jumlah           : ".concat(e.jumlah.toLocaleString("kr-KO"),"\n"),r+="Ongkos           : ".concat(e.ongkos.toLocaleString("kr-KO"),"\n"),r+="deskripsi        : ".concat(e.deskripsi.slice(0,20),"\n"),s>20&&(r+="                   ".concat(a.deskripsi.slice(20,40))),s>40&&(r+="                   ".concat(a.deskripsi.slice(40,60))),r+="========================================\n"}),r+="Total Ongkos     : ".concat(n.toLocaleString("kr-KO"),"\n"),r+="========================================\n",r+="                               TTD      \n",r+="                                        \n",r+="                                        \n",r+="                                        \n",r+="                         (             )\n",r+="                                        \n",r+="                                        \n",r+="                                        \n"}),t.push(r)}document.getElementById("myInput").value=t.join("")}).then(function(){var a=document.createElement("a"),e=new Blob([document.getElementById("myInput").value],{type:"text/plain;charset=utf-8"});a.href=URL.createObjectURL(e),a.download="autoprint_service.txt",document.body.appendChild(a),a.click()}).then(function(){e.props.dispatch(Object(f.Ab)())}).then(function(){e.props.dispatch(Object(g.d)("ModalPembayaran"))}).then(function(){localStorage.setItem("data_customer_services_tmp",JSON.stringify([])),localStorage.setItem("data_barang_services",JSON.stringify([])),localStorage.setItem("sisa_bayar_services",JSON.stringify([])),localStorage.setItem("trx_pemabayaran_services",JSON.stringify([])),e.setState({isLoading:!1})}).then(function(){e.props.dispatch(Object(b.d)([]))}).catch(function(a){return e.errorhandling(a)})}},{key:"errorhandling",value:function(a){console.log(a),this.setState({isLoading:!1}),Object(y.e)("info","Transaksi Gagal Disimpan")}},{key:"ShowModalBarang",value:function(){this.props.dispatch(Object(f.Bb)()),this.setState({FormModal:"ShowModalBarang"})}},{key:"ShowModalCustomer",value:function(){this.setState({FormModal:"ShowModalCustomer"}),this.props.dispatch(Object(f.Bb)())}},{key:"showModalPembayaran",value:function(){var a=JSON.parse(localStorage.getItem("data_customer_services_tmp"))||[],e=JSON.parse(localStorage.getItem("data_barang_services"))||[];0===a.length||0===e.length?Object(y.e)("info","Data Customer Atau Data Barang Belum Diisi !!!"):(this.setState({FormModal:"ShowModalPembayaran"}),this.props.dispatch(Object(f.Bb)()))}},{key:"batalServices",value:function(){var a=this;this.setState({isLoadingBatal:!0}),setTimeout(function(){localStorage.setItem("data_customer_services_tmp",JSON.stringify([])),a.props.dispatch(Object(b.d)([])),localStorage.setItem("data_barang_services",JSON.stringify([])),a.setState({isLoadingBatal:!1})},500)}},{key:"render",value:function(){var a=this;return l.a.createElement(h.a,null,l.a.createElement("textarea",{style:{display:"none"},id:"myInput",rows:"100",cols:"100"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement(E.a,{keyField:"nama_barang",exportCsv:!1,data:0===this.props.setTransaksiServices.length?JSON.parse(localStorage.getItem("data_barang_services"))||[]:this.props.setTransaksiServices||[],tambahData:!0,btnText:"Tambah Data Customer",columns:this.props.columns,btnOptional:!0,namaCustomer:!0,jenisCustomer:!0,form:"Service",btnTextOptional:"Tambah Data Barang",handleClick:function(){return a.ShowModalCustomer()},handleClickOptional:function(){return a.ShowModalBarang()},empty:!0,textEmpty:"Data Barang Kosong"}))),l.a.createElement(k.a,{size:"ShowModalCustomer"===this.state.FormModal?"xl":"ShowModalBarang"===this.state.FormModal?"L":"P",title:l.a.createElement(W,{state:this.state.FormModal}),content:"ShowModalCustomer"===this.state.FormModal?l.a.createElement(B,{isLoadingDataCustomer:this.state.isLoadingDataCustomer,onSubmit:function(e){return a.handleSubmit(e)}}):"ShowModalBarang"===this.state.FormModal?l.a.createElement(G,{onSubmit:function(e){return a.simpanBarang(e)}}):l.a.createElement(H,{isLoading:this.state.isLoading,bayarSekarang:function(e){return a.bayarSekarang(e)}})}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("button",{onClick:function(){return a.showModalPembayaran()},className:"btn btn-primary",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data Services"),"\xa0",l.a.createElement("button",{onClick:function(){return a.batalServices()},className:"btn btn-warning",disabled:this.state.isLoadingBatal,type:"button"},this.state.isLoadingBatal?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Reset"):"Reset"))))}}]),t}(c.Component);function W(a,e){return"ShowModalCustomer"===a.state?"Form Data Customer":"ShowModalBarang"===a.state?"Form Data Barang":"Form Pembayaran"}q=Object(_.a)({form:"HeadServices",enableReinitialize:!0,validate:O.a})(q);var X=Object(m.b)(function(a){return{setTransaksiServices:a.services.setTransaksiServices,DataSales:a.datamaster.getDataSales,hideModal:a.datamaster.modalDialog}},null)(q),Z=function(a){Object(o.a)(t,a);var e=Object(i.a)(t);function t(a){var r;return Object(n.a)(this,t),(r=e.call(this,a)).state={isLoading:!1,columns:[{dataField:"nama_barang",text:"Nama Barang",footer:"Total"},{dataField:"berat",text:"Berat",footer:function(a){return a.reduce(function(a,e){return a+e},0).toFixed(1)}},{dataField:"jumlah",text:"Jumlah",formatter:function(a){return l.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"ongkos",text:"Ongkos",formatter:function(a){return l.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"total",text:"Total Rp",formatter:function(a){return l.a.createElement("span",null,parseInt(a).toLocaleString("kr-KO"))},footer:function(a){return parseInt(a.reduce(function(a,e){return a+e},0)).toLocaleString("kr-KO")}},{dataField:"deskripsi",text:"Deskripsi",footer:""},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,e,t){return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{type:"button",onClick:function(){return r.hapusdata(t)},className:"btn btn-danger mr-3"},l.a.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},r.handleSubmit=r.handleSubmit.bind(Object(s.a)(r)),r}return Object(r.a)(t,[{key:"hapusdata",value:function(a){var e=this;d.a.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=JSON.parse(localStorage.getItem("data_barang_services"));n.splice(a,1),localStorage.setItem("data_barang_services",JSON.stringify(n)),e.props.dispatch(Object(b.d)(n)),e.setState({berhasil:!0})}})}},{key:"componentWillUnmount",value:function(){localStorage.setItem("data_customer_services_tmp",JSON.stringify([])),localStorage.setItem("data_barang_services",JSON.stringify([]))}},{key:"handleSubmit",value:function(a){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(u.b,{to:"#"},"Services")),l.a.createElement("li",{className:"breadcrumb-item active"},"Transaksi Services")),l.a.createElement("h1",{className:"page-header"},"Transaksi Services "),l.a.createElement(h.a,null,l.a.createElement(h.c,null,"Transaksi Services"),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(X,{isLoading:this.state.isLoading,columns:this.state.columns})),l.a.createElement("br",null)))}}]),t}(l.a.Component);e.default=Object(m.b)(function(a){return{dataservices:a.services.setTransaksiServices}},null)(Z)},732:function(a,e,t){"use strict";e.a=function(a){var e={};return a.jenis||(e.jenis="Jenis Tidak Boleh Kosong"),e}},743:function(a,e,t){"use strict";e.a=function(a){var e={};return a.user_id||(e.user_id="User Id Tidak Boleh Kosong"),a.user_name||(e.user_name="Username Tidak Boleh Kosong"),a.level||(e.level="Level Harus Dipilih "),e}},751:function(a,e,t){"use strict";e.a=function(a){var e={};return a.kode_sales||(e.kode_sales="Kode Sales Harus Dipilih"),a.nama_customer||(e.nama_customer="Nama Customer Harus Diisi"),a.no_hp||(e.no_hp="No Hp Harus Diisi"),a.alamat||(e.alamat="Alamat Harus Diisi"),e}}}]);
//# sourceMappingURL=8.016fcc95.chunk.js.map