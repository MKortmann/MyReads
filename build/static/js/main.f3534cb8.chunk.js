(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/mk.03a5d818.svg"},22:function(e,t,a){e.exports=a.p+"static/media/search.3e25163a.svg"},23:function(e,t,a){e.exports={Loader:"spinner_Loader__3zPMX",load5:"spinner_load5__2oAgy"}},24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(18),c=a.n(r),i=a(10),l=a(4),s=a(5),u=a(7),m=a(6),d=a(8),h=a(3),p=a(12),b=a(15),g="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:k},y=function(e,t){return fetch("".concat(g,"/books/").concat(e.id),{method:"PUT",headers:Object(b.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e){return fetch("".concat(g,"/search"),{method:"POST",headers:Object(b.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},E=(a(29),a(19)),w=a.n(E);var S={background:"#343a40",color:"white",padding:0,margin:0},B={color:"#20c997",textDecoration:"underline",fontSize:"25px",paddingTop:0,marginTop:0},j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"logo"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{style:{padding:0,margin:"15px"}},"MyReads"))),n.a.createElement("nav",{style:S},n.a.createElement("img",{src:w.a,alt:"logo-img"}),n.a.createElement("span",{style:{paddingTop:"10px"}},n.a.createElement(h.c,{to:"/",exact:!0,activeStyle:B},"Home"),n.a.createElement(h.c,{to:"/search",activeStyle:B},"Search"),n.a.createElement(h.c,{to:"/about",activeStyle:B},"About"))))};var A=function(e){return n.a.createElement("div",{style:{textAlign:"center",fontSize:"25px"}},n.a.createElement("h2",null,"About"),n.a.createElement("div",null,n.a.createElement("p",null,"The Allowed Search Terms are:"),n.a.createElement("div",{style:{margin:"47px"}},["Android","Art","Artificial Intelligence","Astronomy","Austen","Baseball","Basketball","Bhagat","Biography","Brief","Business","Camus","Cervantes","Christie","Classics","Comics","Cook","Cricket","Cycling","Desai","Design","Development","Digital Marketing","Drama","Drawing","Dumas","Education","Everything","Fantasy","Film","Finance","First","Fitness","Football","Future","Games","Gandhi","Homer","Horror","Hugo","Ibsen","Journey","Kafka","King","Lahiri","Larsson","Learn","Literary Fiction","Make","Manage","Marquez","Money","Mystery","Negotiate","Painting","Philosophy","Photography","Poetry","Production","Programming","React","Redux","River","Robotics","Rowling","Satire","Science Fiction","Shakespeare","Singh","Swimming","Tale","Thrun","Time","Tolstoy","Travel","Ultimate","Virtual Reality","Web Development","iOS"].map(function(e,t){return n.a.createElement("span",{key:t,style:{listStyle:"none"}},t,"- ",e," ")}))))},C=a(36);var O={margin:"0",fontSize:"12px"},R=function(e){return void 0!==e.authors?e.authors.map(function(e){return n.a.createElement("div",{key:C(),style:O},e)}):n.a.createElement("div",{key:C()})};var N=function(e){var t="Not In Library",a={textAlign:"center",width:128,marginTop:-20,color:"white",backgroundColor:"#17a2b8",opacity:"0.8"};if(e.storedBooks.forEach(function(o){o.id===e.book.id&&(t=o.shelf,a={textAlign:"center",width:128,marginTop:-20,color:"white",backgroundColor:"#007bff",opacity:"0.8"})}),void 0!==e.book.shelf)switch(e.book.shelf){case"currentlyReading":t="currentlyReading",a={textAlign:"center",width:128,marginTop:-20,color:"white",backgroundColor:"#007bff",opacity:"0.8"};break;case"wantToRead":t="wantToRead",a={textAlign:"center",width:128,marginTop:-20,color:"white",backgroundColor:"#dc3545",opacity:"0.7"};break;case"read":t="read",a={textAlign:"center",width:128,marginTop:-20,color:"white",backgroundColor:"#6c757d",opacity:"0.7"};break;default:t="Not In Library",a={textAlign:"center",width:128,marginTop:-20,color:"white",backgroundColor:"#17a2b8",opacity:"0.7"}}return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{style:a},t))};var T=function(e){return void 0!==e.book.imageLinks?n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url("+e.book.imageLinks.thumbnail+")"}},n.a.createElement(N,{book:e.book,storedBooks:e.storedBooks})):n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,background:"white"}},n.a.createElement(N,{book:e.book,storedBooks:e.storedBooks}))},x=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"checkBookShelf",value:function(e){var t="none";return Object(i.a)(this.props.storedBooks).forEach(function(a){if(a.id===e.id)return t=a.shelf}),t}},{key:"render",value:function(){var e=this;return this.props.books.map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement(T,{book:t,storedBooks:e.props.storedBooks}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{onChange:e.props.move.bind(e,t),value:t.shelf?t.shelf:e.checkBookShelf(t)},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title",style:{color:"#007bff"}},t.title),n.a.createElement(R,{authors:t.authors})))})}}]),t}(o.Component);var F=function(e){var t=e.title,a={textAlign:"center",color:"white",backgroundColor:"#dc3545",opacity:"0.7"};switch(e.title){case"Currently Reading":a={textAlign:"center",color:"white",backgroundColor:"#007bff",opacity:"0.8"};break;case"Want To Read":a={textAlign:"center",color:"white",backgroundColor:"#dc3545",opacity:"0.7"};break;case"Read":a={textAlign:"center",color:"white",backgroundColor:"#6c757d",opacity:"0.7"};break;default:return!1}return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{className:"bookshelf-title",style:a},t))},M=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"bookshelf"},n.a.createElement(F,{title:this.props.title}),n.a.createElement("ol",{className:"books-grid"},n.a.createElement(x,{books:this.props.books,storedBooks:this.props.storedBooks,move:this.props.move})))}}]),t}(o.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.refs.inputField.focus()}},{key:"render",value:function(){return n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement(h.b,{to:"/"},n.a.createElement("button",{className:"close-search",style:{cursor:"pointer"}},"Close")),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{ref:"inputField",type:"text",onChange:this.props.search.bind(this),placeholder:"Search by title or author"}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"})))}}]),t}(o.Component),P=a(22),L=a.n(P),I=a(23),z=a.n(I),H=function(){return n.a.createElement("div",{className:z.a.Loader},"Loading...")},_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],currentlyReading:[],wantToRead:[],read:[],searchedBooks:[],loading:!0},a.reorganizeBooks=function(){var e=[],t=[],o=[];Object(i.a)(a.state.books).forEach(function(a){switch(a.shelf){case"currentlyReading":e.push(a);break;case"wantToRead":t.push(a);break;case"read":o.push(a);break;default:return!1}}),a.setState({currentlyReading:e,wantToRead:t,read:o})},a.move=function(e,t){y(e,t.target.value).then(function(e){a.componentDidMount()})},a.search=function(e){if(""!==e.target.value)v(e.target.value).then(function(e){a.setState({searchedBooks:e})});else{a.setState({searchedBooks:[]})}},a.Home=function(){return n.a.createElement("div",{className:"list-books"},a.state.loading?n.a.createElement(H,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(M,{books:a.state.currentlyReading,storedBooks:a.state.books,title:"Currently Reading",move:a.move}),n.a.createElement(M,{books:a.state.wantToRead,storedBooks:a.state.books,title:"Want To Read",move:a.move}),n.a.createElement(M,{books:a.state.read,storedBooks:a.state.books,title:"Read",move:a.move}),n.a.createElement("div",{className:"open-search"},n.a.createElement(h.b,{to:"/search"},n.a.createElement("button",null,"Search")))))},a.Search=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(D,{search:a.search,closeSearchPage:a.closeSearchPage}),a.state.searchedBooks.length>0?n.a.createElement(M,{books:a.state.searchedBooks,storedBooks:a.state.books,title:"Searched Books",move:a.move}):n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",null,"No Book Founded"),n.a.createElement("img",{src:L.a,alt:"search-img"})))},a.About=function(){return n.a.createElement(A,null)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("[App.js] - Component Did Mount"),fetch("".concat(g,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){e.setState({books:t,loading:!1}),e.reorganizeBooks()}).catch(function(t){e.setState({loading:!0}),console.log("Something wen wrong at [App.js]: ComponentDidMount -> BOOKS.API, error: ".concat(t)),alert("Please, check your internet connection and reload the App!! Is the problem solved? If not, please, contact your webmaster!")})}},{key:"render",value:function(){return n.a.createElement(h.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(j,null)),n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/",exact:!0,component:this.Home}),n.a.createElement(p.a,{path:"/search",component:this.Search}),n.a.createElement(p.a,{path:"/about",component:this.About}),n.a.createElement(p.a,{render:function(){return n.a.createElement("h1",{style:{textAlign:"center"}},"Not found")}})))}}]),t}(n.a.Component);a(40);c.a.render(n.a.createElement(_,null),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.f3534cb8.chunk.js.map