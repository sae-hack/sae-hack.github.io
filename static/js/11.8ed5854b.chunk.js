(this["webpackJsonprealtime-transcribe-react"]=this["webpackJsonprealtime-transcribe-react"]||[]).push([[11],{532:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image",(function(){return l}));var r=n(17),i=n(36),o=n(178),a=(n(28),n(136),n(572)),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},s=new i.a("S3Image"),l=function(){function e(e){Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=o.a.Public}return e.prototype.watchHandler=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.componentWillLoad=function(){return c(this,void 0,void 0,(function(){return u(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),[2]}}))}))},e.prototype.load=function(){return c(this,void 0,void 0,(function(){var e,t,n,r,i,o,c,l,f,h,p;return u(this,(function(u){switch(u.label){case 0:if(t=(e=this).imgKey,n=e.path,r=e.body,i=e.contentType,o=e.level,c=e.track,l=e.identityId,!t&&!n)return s.debug("empty imgKey and path"),[2];f=t||n,s.debug("loading "+f+"..."),u.label=1;case 1:return u.trys.push([1,5,,6]),r?[4,Object(a.e)(t,r,o,c,i,s)]:[3,3];case 2:u.sent(),u.label=3;case 3:return h=this,[4,Object(a.c)(f,o,c,l,s)];case 4:return h.src=u.sent(),[3,6];case 5:throw p=u.sent(),s.debug(p),new Error(p);case 6:return[2]}}))}))},e.prototype.render=function(){return Object(r.i)(r.b,null,this.src&&Object(r.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))},Object.defineProperty(e,"watchers",{get:function(){return{body:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();l.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"},572:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return f}));var r=n(28),i=n(136),o=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,i=e.type,o=encodeURI(n);return t&&((o="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:i}):encodeURI(JSON.stringify(t)))||(o="empty_key")),o.replace(/\s/g,"_")},s=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(r.m);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.get(e,{level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug("Storage image get",o),[2,o];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))},l=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(r.m);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i.a.get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug(o),[4,(l=o.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(l)})))];case 3:return[2,a.sent()];case 4:throw s=a.sent(),new Error(s);case 5:return[2]}var l}))}))},f=function(e,t,n,c,u,s){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.put)throw new Error(r.m);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.put(e,t,{contentType:u,level:n,track:c})];case 2:return o=a.sent(),s.debug("Upload data",o),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=11.8ed5854b.chunk.js.map