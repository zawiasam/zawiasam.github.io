webpackJsonp([2,3],{0:function(t,e){t.exports=React},116:function(t,e){t.exports=firebase},117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(118);e.default=r.a.production},118:function(t,e,n){"use strict";const r={production:{authDomain:"ireal-text-editor.firebaseapp.com",apiKey:"AIzaSyDuFMhGDCnLynLD-HLg5gzDY1x1-KZpssg",databaseURL:"https://ireal-text-editor.firebaseio.com",projectId:"ireal-text-editor",storageBucket:"ireal-text-editor.appspot.com",messagingSenderId:"1060242801088"},develop:{authDomain:"ireal-text-editor.firebaseapp.com",apiKey:"AIzaSyDuFMhGDCnLynLD-HLg5gzDY1x1-KZpssg",databaseURL:"https://ireal-text-editor.firebaseio.com",projectId:"ireal-text-editor",storageBucket:"ireal-text-editor.appspot.com",messagingSenderId:"1060242801088"}};e.a=r},119:function(t,e,n){"use strict";function r(t,e){return console.log("map: ",e.match.params),{defaultValue:t.selectedSong,songId:e.match.params.id}}function o(t){return{onChange:function(e){return t(Object(a.d)(e))},onSave:function(e){return t(Object(a.d)(e))},onSongDownload:function(e){t(Object(a.a)()),t(Object(a.b)(e))}}}n.d(e,"a",function(){return u});var i=n(321),a=n(255),c=n(54),u=Object(c.b)(r,o)(i.a)},22:function(t,e){t.exports=ReactDOM},255:function(t,e,n){"use strict";function r(t,e){return{type:"@APP/FETCH_SONG/REQUEST",uid:t,songId:e}}function o(t){return{type:"@APP/FETCH_SONG/SUCCESS",song:t}}function i(t){return{type:"@APP/SONG_LIST/REQUEST",uid:t}}function a(t){return{type:"@APP/SONG_LIST/SUCCESS",songList:t||[]}}function c(t){return{type:"@APP/SONG_STORE/REQUEST",songData:v({},t)}}function u(){return{type:"@APP/SONG_STORE/SUCCESS"}}function s(){return{type:"@APP/SONG_CLEAR"}}function l(t,e){var n=Object(g.a)(t);return n||e(Object(m.b)()),n}function p(t){return function(e,n){var i=l(n(),e);if(i)if(e(r(i,t)),t){var a="users/"+i+"/chords/"+t;Object(y.a)(e).document(a).get(function(t){e(o(t))},function(){return e(Object(h.a)())})}else e(o(_()))}}e.a=s,n.d(e,"d",function(){return b}),e.b=p,n.d(e,"c",function(){return O});var f=n(605),d=n(256),h=(n.n(d),n(658)),y=n(268),g=n(668),m=n(270),v=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},b=function(t){return function(e,n){var r=l(n(),e);r&&(e(c(t)),Object(y.a)(e).collection("users/"+r+"/chords").put({body:t,id:t.id},function(){e(u()),e(Object(h.b)({autoclose:!1,type:"success",message:"Document saved correctly"}))},function(){return e(Object(h.a)())}))}},_=function(){return{title:"New song",composer:"Unknown Composer",style:"Medium Swing",keySignature:"C",transpostion:"n",measure:"4/4",id:Object(f.a)(),song:""}},O=function(){return function(t,e){var n=l(e(),t);n&&(t(i(n)),Object(y.a)(t).collection("users/"+n+"/chords").get(function(e){t(a(e))},function(){return t(Object(h.a)())}))}}},268:function(t,e,n){"use strict";function r(t){i.auth().onAuthStateChanged(t)}function o(t){return t(Object(c.a)(!0)),{document:function(e){return{get:function(n,r){i.firestore().doc(e).get().then(function(e){n(e.data()),t(Object(c.a)(!1))}).catch(function(){r(),t(Object(c.a)(!1))})}}},collection:function(e){return{get:function(n,r){i.firestore().collection(e).get().then(function(e){var r=[];e.forEach(function(t){r.push(t.data())}),n(r),t(Object(c.a)(!1))}).catch(function(){r(),t(Object(c.a)(!1))})},put:function(n,r,o){var a=n.id,u=n.body;if(null===a)throw"Null argument exception";i.firestore().collection(e).doc(a).set(u).then(function(){r(),t(Object(c.a)(!1))}).catch(function(){o(),t(Object(c.a)(!1))})}}}}}e.b=r,e.a=o;var i=n(659),a=(n.n(i),n(256)),c=(n.n(a),n(269))},269:function(t,e,n){"use strict";function r(t){return{type:"@APP/STATE/LOADING",loading:t}}n.d(e,"a",function(){return r})},270:function(t,e,n){"use strict";function r(t){return{loginRequest:t,type:"@APP/LOGIN/REQUEST"}}function o(){return{type:"@APP/LOGOUT/REQUEST",logoutRequest:{isAuthorized:!1}}}function i(){return function(t,e){t(Object(c.a)(!0)),Object(a.b)(function(e){t(e?r({userInfo:e,isAuthorized:!e.isAnonymous}):o()),t(Object(c.a)(!1))})}}n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i});var a=n(268),c=n(269)},272:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"store",function(){return y});var a=n(0),c=(n.n(a),n(22)),u=(n.n(c),n(54)),s=n(110),l=n(116),p=(n.n(l),n(117)),f=(n(320),n(119),n(669)),d=n(687),h=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=Object(d.a)({});l.initializeApp(p.default);var g=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,t),h(e,[{key:"render",value:function(){return a.createElement(s.a,null,a.createElement("div",null,a.createElement(s.c,{path:"/",component:f.a})))}}]),e}(a.Component);Object(c.render)(a.createElement(u.a,{store:y},a.createElement(g,null)),document.getElementById("root"))},320:function(t,e,n){"use strict";var r=n(0);n.n(r),n(119),this&&this.__assign||Object.assign},321:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),o=(n.n(r),n(322)),i=n(604),a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},u={textAlign:"center",display:"flex"},s=function(t){function e(e){var n=t.call(this,e)||this;return n.handleSongSave=function(t){n.props.onSave&&n.props.onSave(c({},n.state,{song:t}))},n.state=c({},e.defaultValue),n.handleSongChange=n.handleSongChange.bind(n),n.handleSongInfoChange=n.handleSongInfoChange.bind(n),e.onSongDownload&&e.onSongDownload(e.songId||""),n}return a(e,t),e.prototype.componentWillReceiveProps=function(t){t.defaultValue!==this.props.defaultValue?this.setState(c({},t.defaultValue)):t.songId===this.props.songId&&t.songId||this.props.onSongDownload(t.songId||"")},e.prototype.handleSongInfoChange=function(t){this.setState(t)},e.prototype.handleSongChange=function(t){this.props.onChange&&this.props.onChange(c({},this.state,{song:t}))},e.prototype.render=function(){console.log("render");var t=c({},this.state);return r.createElement("div",{style:u},r.createElement(i.a,{defaultValue:{title:t.title,composer:t.composer,style:t.style,keySignature:t.keySignature,transpostion:t.transpostion,measure:t.measure},onChange:this.handleSongInfoChange}),r.createElement("div",{style:{width:"100%"}},r.createElement(o.a,{onSubmit:this.handleSongChange,onSave:this.handleSongSave,song:t.song}),r.createElement("pre",null,"x - repeat one prev. chord"),r.createElement("pre",null,"% - repeat two prev. chords"),r.createElement("pre",null,"n - N.C."),r.createElement("pre",null,", - seperate chords")))},e}(r.Component)},322:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(68)),i=n(60),a=n.n(i),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(e){var n=t.call(this,e)||this;return n.handleSave=function(){n.onSave(n.state.chordsText)},n.state={chordsText:n.props.song||""},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handlePrettify=n.handlePrettify.bind(n),n.clearText=n.clearText.bind(n),n.onSubmit=n.onSubmit.bind(n),n}return c(e,t),e.prototype.componentWillReceiveProps=function(t){t.song!==this.props.song&&this.setState({chordsText:t.song})},e.prototype.clearText=function(){this.setState({chordsText:""})},e.prototype.formatValue=function(t){return t.replace(" ",".").replace(/\n/g,"").replace(/\r/g,"").replace(/([^\|]+\|[^\|]+\|[^\|]+\|[^\|]+\|)/g,function(t,e){return t+"\n"})},e.prototype.handlePrettify=function(){var t=this.formatValue(this.state.chordsText);this.setState({chordsText:t})},e.prototype.handleChange=function(t){var e=t.currentTarget.value;this.setState({chordsText:e})},e.prototype.handleSubmit=function(){this.onSubmit(this.state.chordsText)},e.prototype.onSave=function(t){this.props.onSave&&this.props.onSave(t)},e.prototype.onSubmit=function(t){this.props.onSubmit&&this.props.onSubmit(t)},e.prototype.render=function(){var t={margin:12},e={fontFamily:'"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'};return r.createElement("div",null,r.createElement("div",null,r.createElement(o.f,{id:"chords",label:"Chords",multiline:!0,rows:"4",margin:"normal",onChange:this.handleChange,fullWidth:!0,InputProps:{style:e},value:this.state.chordsText})),r.createElement("div",null,r.createElement(a.a,{variant:"raised",color:"primary",onClick:this.handleSave,style:t},"save"),r.createElement(a.a,{variant:"raised",color:"secondary",onClick:this.handleSubmit,style:t},"generate song"),r.createElement(a.a,{variant:"raised",onClick:this.handlePrettify,style:t},"prettify a little"),r.createElement(a.a,{variant:"raised",onClick:this.clearText,style:t},"clear")))},e}(r.Component)},604:function(t,e,n){"use strict";n.d(e,"a",function(){return l});var r=n(0),o=(n.n(r),n(68)),i=n(149),a=(n.n(i),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),c=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},u=function(t){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:t.spacing.unit,marginRight:t.spacing.unit,marginTop:t.spacing.unit,marginBottom:t.spacing.unit/2,width:200},menu:{width:200}}},s=function(t){function e(e){var n=t.call(this,e)||this;return n.state=c({},n.props.defaultValue),n.doChanged=n.doChanged.bind(n),n}return a(e,t),e.prototype.componentWillReceiveProps=function(t){t.defaultValue!==this.props.defaultValue&&this.setState(c({},t.defaultValue))},e.prototype.doChanged=function(t){var e=c({},t);this.props.onChange&&this.props.onChange(e),this.setState(e)},e.prototype.render=function(){var t=this,e=this.state,n=this.props.classes;return r.createElement("div",{style:{display:"block"}},r.createElement(o.f,{className:n.textField,value:e.composer,fullWidth:!0,label:"Composer",onChange:function(e){t.doChanged({composer:e.currentTarget.value})}}),r.createElement("br",null),r.createElement(o.f,{className:n.textField,value:e.title,fullWidth:!0,label:"Title"}),r.createElement("br",null),r.createElement(o.f,{className:n.textField,value:e.style,fullWidth:!0,label:"Style"}),r.createElement("br",null),r.createElement(o.f,{className:n.textField,value:e.measure,fullWidth:!0,label:"Measure"}),r.createElement("br",null),r.createElement(o.f,{className:n.textField,value:e.keySignature,fullWidth:!0,label:"Key"}))},e}(r.Component),l=Object(i.withStyles)(u)(s)},605:function(t,e,n){"use strict";var r=n(606);n.d(e,"a",function(){return r.a})},606:function(t,e,n){"use strict";function r(t,e){if(t!==e)throw new TypeError("Cannot instantiate an arrow function")}function o(){var t=this;return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(e){return r(this,t),(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}.bind(this))}n.d(e,"a",function(){return o})},658:function(t,e,n){"use strict";function r(t){return{type:"@APP/NOTIFY/SHOW",notification:t}}function o(){return{type:"@APP/NOTIFY/SHOW",notification:{autoclose:!1,type:"failure",message:"Something went wrong, sorry!, please contact me."}}}n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o})},668:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){var e=null;return t.authState.userInfo&&(e=t.authState.userInfo.uid),e}},669:function(t,e,n){"use strict";function r(t,e){return{userInfo:t.authState.userInfo,isAuthorized:t.authState.isAuthorized}}function o(t){return{onAuthStateChanged:function(){return t(Object(s.a)())}}}n.d(e,"a",function(){return b});var i=n(0),a=(n.n(i),n(670)),c=n(673),u=n(110),s=n(270),l=n(54),p=n(678),f=n(681),d=n(271),h=n(119),y=n(685),g=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),m=function(t){function e(e){return t.call(this,e)||this}return g(e,t),e.prototype.componentDidMount=function(){this.props.onAuthStateChanged()},e.prototype.render=function(){var t=this.props.userInfo?{photoURL:this.props.userInfo.photoURL,displayName:this.props.userInfo.displayName||this.props.userInfo.email}:null;return null!=this.props.isAuthorized?this.props.isAuthorized&&t?i.createElement(i.Fragment,null,i.createElement(a.a,{displayName:t.displayName,photoURL:t.photoURL}),this.props.authorizedContent):i.createElement(c.a,null):null},e}(i.Component),v=function(t){var e=t.userInfo,n=t.isAuthorized,r=t.onAuthStateChanged;return i.createElement("div",null,i.createElement(f.a,null),i.createElement(m,{userInfo:e,isAuthorized:n,authorizedContent:i.createElement(u.d,null,i.createElement(d.b,{path:"/editor/:id?",component:h.a}),i.createElement(d.b,{exact:!0,path:"/songList",component:y.a})),onAuthStateChanged:r}),i.createElement(p.a,null))},b=Object(l.b)(r,o)(v)},670:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(671)),i=n(672),a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),c={paddingRight:"8px"},u=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement(i.a,null),r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{style:c},"Nice to see you",r.createElement("br",null),this.props.displayName||""),r.createElement(o.a,{photoUrl:this.props.photoURL}))},e}(r.Component)},671:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(60)),i=n.n(o),a=n(116),c=(n.n(a),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.logoutHandle=function(){a.auth().signOut()},e}return c(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement("div",null,r.createElement("img",{style:{height:"36px",width:"36px"},src:this.props.photoUrl||"/default/profile/avatar.png"})),r.createElement("div",null,r.createElement(i.a,{variant:"raised",onClick:this.logoutHandle},"Logout")))},e}(r.Component)},672:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(110)),i=n(60),a=n.n(i),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){return r.createElement("div",null,r.createElement(o.b,{style:{textDecoration:"none",color:"inherit"},to:"/songList"},r.createElement(a.a,{variant:"raised"},"My songs")),r.createElement(o.b,{style:{textDecoration:"none",color:"inherit"},to:"/editor"},r.createElement(a.a,{variant:"raised"},"Start a new song")))},e}(r.Component)},673:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(674)),i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a={padding:"8px"},c=function(t){function e(e){var n=t.call(this,e)||this;return n.state={user:void 0},n}return i(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement("div",{style:{flexGrow:1}}),r.createElement("div",{style:a},"Welcome Stanger"),r.createElement(o.a,null))},e}(r.Component)},674:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),o=(n.n(r),n(60)),i=n.n(o),a=n(116),c=(n.n(a),n(675)),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loginHandle=function(){var t=e,n=new a.auth.GoogleAuthProvider;a.auth().signInWithPopup(n).then(function(t){t.credential.accessToken}).catch(function(e){e.code,e.message,e.email,e.credential;console.dir(e),t.setState({user:void 0})})},e}return u(e,t),e.prototype.render=function(){return r.createElement("div",{style:{display:"flex"}},r.createElement("div",null,r.createElement("img",{style:{height:"36px",width:"36px"},src:c.a.paperBagPerson})),r.createElement("div",null,r.createElement(i.a,{variant:"raised",onClick:this.loginHandle},"I don't wanna be a stranger")))},e}(r.Component)},675:function(t,e,n){"use strict";var r=n(676);n.d(e,"a",function(){return r.a})},676:function(t,e,n){"use strict";var r=n(677),o=n.n(r);e.a={paperBagPerson:o.a}},677:function(t,e){t.exports="app/build/icons/bbd27d60b4786c102f4d8c8d2b1de5c7.svg"},678:function(t,e,n){"use strict";function r(t){return a({},t.notification)}n.d(e,"a",function(){return c});var o=n(679),i=n(54),a=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},c=Object(i.b)(r)(o.a)},679:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(68)),i=n(680),a=n.n(i),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(e){var n=t.call(this,e)||this;return n.state={visible:void 0!==e.message},n}return c(e,t),e.prototype.componentWillReceiveProps=function(t){this.setState({visible:this.props.message!==t.message})},e.prototype.render=function(){var t=this,e=this.props;return r.createElement(o.e,{anchorOrigin:{horizontal:"center",vertical:"top"},open:this.state.visible,onClose:function(){t.setState({visible:!1})},autoHideDuration:e.autoclose?6e3:void 0,SnackbarContentProps:{style:{backgroundColor:"success"===e.type?"green":"red"}},message:r.createElement("span",{id:"message-id"},e.message),action:[r.createElement(o.c,{key:"close","aria-label":"Close",color:"inherit",onClick:function(){t.setState({visible:!1})}},r.createElement(a.a,null))]})},e}(r.Component)},681:function(t,e,n){"use strict";function r(t){return{loading:t.appState.loading}}n.d(e,"a",function(){return a});var o=n(682),i=n(54),a=Object(i.b)(r)(o.a)},682:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=(n.n(r),n(68)),i=n(683),a=n.n(i),c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.render=function(){var t=this.props.loading;return r.createElement("div",{className:a.a.placeHolder},r.createElement(o.b,{in:t,style:{transitionDelay:t?"800ms":"0ms"},unmountOnExit:!0},r.createElement(o.d,null)))},e}(r.Component)},683:function(t,e){t.exports={placeHolder:"_17bHNEzdedB8tfmLgUrluu"}},685:function(t,e,n){"use strict";function r(t,e){return{getSongs:function(){return t(Object(a.c)())}}}function o(t,e){var n=void 0;return t.authState.userInfo&&(n=t.authState.userInfo.uid),{songs:t.songList,uid:n}}n.d(e,"a",function(){return u});var i=n(686),a=n(255),c=n(54),u=Object(c.b)(o,r)(i.a)},686:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),o=(n.n(r),n(148)),i=n.n(o),a=n(271),c=n(68),u=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={navigate:null},e.navigeteTo=function(t){e.setState({navigate:t})},e}return u(e,t),e.prototype.componentDidMount=function(){this.props.getSongs()},e.prototype.componentWillReceiveProps=function(t){t.uid&&this.props.uid!==t.uid&&this.props.getSongs()},e.prototype.render=function(){var t=this,e=this.props.songs,n=this.state.navigate;if(n)return r.createElement(a.a,{to:n,push:!0});if(!e)return null;var u=e.length;return r.createElement("div",null,r.createElement(i.a,{component:"nav"},e&&e.map(function(e,n){return r.createElement(r.Fragment,null,r.createElement(o.ListItem,{button:!0,key:e.id,onClick:function(){t.navigeteTo("/editor/"+e.id)}},r.createElement(o.ListItemText,{primary:e.title})),n!==u-1?r.createElement(c.a,null):r.createElement(r.Fragment,null))})))},e}(r.Component)},687:function(t,e,n){"use strict";var r=n(688);n.d(e,"a",function(){return r.a})},688:function(t,e,n){"use strict";function r(t){return Object(o.d)(i.a,Object(o.a)(c.a))}n.d(e,"a",function(){return r});var o=n(108),i=n(689),a=n(695),c=n.n(a)},689:function(t,e,n){"use strict";var r=n(108),o=n(690),i=n(691),a=n(692),c=n(693),u=n(694),s=Object(r.c)({appState:u.a,authState:o.a,songList:i.a,notification:a.a,selectedSong:c.a});e.a=s},690:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t={userInfo:null,isAuthorized:null}),e.type){case"@APP/LOGIN/REQUEST":return o({},t,e.loginRequest);case"@APP/LOGOUT/REQUEST":return o({},t,{isAuthorized:e.logoutRequest.isAuthorized});default:return t}}e.a=r;var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},691:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=[]),e.type){case"@APP/SONG_LIST/SUCCESS":return e.songList.slice();default:return t.slice()}}e.a=r},692:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t={autoclose:!0,message:void 0,type:"failure"}),e.type){case"@APP/NOTIFY/SHOW":return o({},e.notification);default:return t}}e.a=r;var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},693:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t=o({},i)),e.type){case"@APP/FETCH_SONG/SUCCESS":return e.song;case"@APP/SONG_CLEAR":return o({},i);default:return t}}e.a=r;var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i={title:"",composer:"",style:"",keySignature:"",transpostion:"",measure:"",song:"",id:""}},694:function(t,e,n){"use strict";function r(t,e){switch(void 0===t&&(t={loading:!1}),e.type){case"@APP/STATE/LOADING":return{loading:e.loading};default:return t}}e.a=r}},[272]);