webpackJsonp([0],{0:function(e,t){e.exports=React},11:function(e,t){e.exports=ReactDOM},149:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),l=n.n(i),u=n(11),c=(n.n(u),n(150)),s=n(363),b=n(131),f=n.n(b),h=(n(55),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p={textAlign:"center",display:"flex"},d=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={title:"My song",composer:"Unknown Composer",style:"Medium Swing",keySignature:"C",transpostion:"n",measure:"4/4",song:"....|....|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|..F.|G-...|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|....|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb...|..F.|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-..F|Bb...|Eb7...|....|F.G-.|.F,Bb.|..Eb7.|....|..G-.|..Bb.|..Eb.|....|F.G-.|...Bb|....|Eb...|..Bb.|Eb..F|G-...|F...|Bb...|Eb...|F.G-.|Dsus4...|D...|Eb..F|G-...|F...|Bb...|Eb..F|G-...|Eb...|....|G-..F|Bb...|Eb7...|..F.|G-..F|Bb...|Eb7...|....|G-...|Bb...|Eb7...|...F|.G-.F|.Bb..|.Eb7..|....|G-.F.|Bb...|....|....|"},n.handleSongChange=n.handleSongChange.bind(n),n.handleSongInfoChange=n.handleSongInfoChange.bind(n),n.encodeLink=n.encodeLink.bind(n),n}return a(t,e),h(t,[{key:"handleSongInfoChange",value:function(e){this.setState(e)}},{key:"encodeLink",value:function(e){var t=[e.title,e.composer,e.style,e.key,e.transpostion,"[T"+String(e.measure.replace("/",""))].join("="),n=(e.song||"").replace(/\./g," ").replace(/\|+$/,"").replace(/\n/g,"").replace(/\r/g,"")+"Z ";return e.song.length>0?"irealbook://"+encodeURIComponent(t+n):""}},{key:"handleSongChange",value:function(e){var t=this.encodeLink(this.state);t&&window.open(t,"_blank")}},{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement("div",{style:p},l.a.createElement(s.a,{defaultValue:{title:"My song",composer:"Unknown Composer",style:"Medium Swing",key:"C",transpostion:"n",measure:"4/4"},onChange:this.handleSongInfoChange}),l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(c.a,{onSubmit:this.handleSongChange,song:this.state.song}),l.a.createElement("pre",null,"x - repeat one prev. chord"),l.a.createElement("pre",null,"% - repeat two prev. chords"),l.a.createElement("pre",null,"n - N.C."))))}}]),t}(l.a.Component);Object(u.render)(l.a.createElement(d,null),document.getElementById("root"))},150:function(e,t,n){"use strict";function r(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return b});var l=n(0),u=n.n(l),c=n(55),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={chordsText:n.props.song||""},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handlePrettify=n.handlePrettify.bind(n),n.clearText=n.clearText.bind(n),n.onSubmit=n.onSubmit.bind(n),n}return i(t,e),s(t,[{key:"clearText",value:function(){this.setState({chordsText:""}),this.onSubmit("")}},{key:"formatValue",value:function(e){var t=this;return e.replace(" ",".").replace(/\n/g,"").replace(/\r/g,"").replace(/([^\|]+\|[^\|]+\|[^\|]+\|[^\|]+\|)/g,function(e,n){return r(this,t),e+"\n"}.bind(this))}},{key:"handlePrettify",value:function(){var e=this.formatValue(this.state.chordsText);this.setState({chordsText:e})}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({chordsText:t})}},{key:"handleSubmit",value:function(){this.onSubmit(this.state.chordsText)}},{key:"onSubmit",value:function(e){this.props.onSubmit&&this.props.onSubmit(e)}},{key:"render",value:function(){var e={margin:12},t={fontFamily:'"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace'};return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.b,{id:"chords",floatingLabelText:"Chords",multiLine:!0,rows:2,rowsMax:10,value:this.state.chordsText,onChange:this.handleChange,style:t,fullWidth:!0})),u.a.createElement("div",null,u.a.createElement(c.a,{onClick:this.handlePrettify,style:e,label:"prettify a little"}),u.a.createElement(c.a,{onClick:this.handleSubmit,style:e,label:"generate song"}),u.a.createElement(c.a,{onClick:this.clearText,style:e,label:"clear"})))}}]),t}(u.a.Component)},363:function(e,t,n){"use strict";function r(e,t){if(e!==t)throw new TypeError("Cannot instantiate an arrow function")}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return b});var l=n(0),u=n.n(l),c=n(55),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=Object.assign({chordsText:n.props.song||""},n.props.defaultValue),n.doChanged=n.doChanged.bind(n),n}return i(t,e),s(t,[{key:"doChanged",value:function(e){var t=Object.assign({},this.state,e);this.props.onChange&&this.props.onChange(t),this.setState(e)}},{key:"render",value:function(){var e=this,t=this.props.defaultValue;return u.a.createElement("div",{style:{display:"block"}},u.a.createElement(c.b,{defaultValue:t.composer||"",floatingLabelText:"Composer",onChange:function(t){r(this,e),this.doChanged({composer:t.target.value})}.bind(this)}),u.a.createElement("br",null),u.a.createElement(c.b,{defaultValue:t.title||"",floatingLabelText:"Title",onChange:function(t){r(this,e),this.doChanged({title:t.target.value})}.bind(this)}),u.a.createElement("br",null),u.a.createElement(c.b,{value:t.style||"",floatingLabelText:"Style"}),u.a.createElement("br",null),u.a.createElement(c.b,{value:t.measure||"",floatingLabelText:"Measure"}),u.a.createElement("br",null),u.a.createElement(c.b,{value:t.key||"",floatingLabelText:"Key"}))}}]),t}(u.a.Component)}},[149]);