parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V8Mk":[function(require,module,exports) {
var u=u||{};u.Geometry=function(){},u.Geometry.intersectLineLine=function(u,r){var v=(u.intercept-r.intercept)/(r.slope-u.slope);return{x:v,y:u.slope*v+u.intercept}},u.Geometry.distanceFromOrigin=function(u){return Math.sqrt(Math.pow(u.x,2)+Math.pow(u.y,2))},u.Geometry.distanceLineFromOrigin=function(u){return Math.abs(u.intercept)/Math.sqrt(Math.pow(u.slope,2)+1)},u.Geometry.perpendicularThroughPoint=function(u,r){var v=-1/u.slope;return{slope:v,intercept:r.y-v*r.x}},u.Geometry.angleFromOrigin=function(u){return Math.atan2(u.y,u.x)},u.Geometry.normalizeAngle=function(u){var r=2*Math.PI;return(u%r+r)%r},u.Geometry.lengthOfRayUntilIntersect=function(u,r){return r.intercept/(Math.sin(u)-r.slope*Math.cos(u))},u.Hsluv=function(){},u.Hsluv.getBounds=function(r){for(var v=[],l=Math.pow(r+16,3)/1560896,o=l>u.Hsluv.epsilon?l:r/u.Hsluv.kappa,s=0;s<3;)for(var n=s++,t=u.Hsluv.m[n][0],e=u.Hsluv.m[n][1],H=u.Hsluv.m[n][2],h=0;h<2;){var a=h++,c=(284517*t-94839*H)*o,i=(838422*H+769860*e+731718*t)*r*o-769860*a*r,T=(632260*H-126452*e)*o+126452*a;v.push({slope:c/T,intercept:i/T})}return v},u.Hsluv.maxSafeChromaForL=function(r){for(var v=u.Hsluv.getBounds(r),l=1/0,o=0;o<v.length;){var s=v[o];++o;var n=u.Geometry.distanceLineFromOrigin(s);l=Math.min(l,n)}return l},u.Hsluv.maxChromaForLH=function(r,v){for(var l=v/360*Math.PI*2,o=u.Hsluv.getBounds(r),s=1/0,n=0;n<o.length;){var t=o[n];++n;var e=u.Geometry.lengthOfRayUntilIntersect(l,t);e>=0&&(s=Math.min(s,e))}return s},u.Hsluv.dotProduct=function(u,r){for(var v=0,l=0,o=u.length;l<o;){var s=l++;v+=u[s]*r[s]}return v},u.Hsluv.fromLinear=function(u){return u<=.0031308?12.92*u:1.055*Math.pow(u,.4166666666666667)-.055},u.Hsluv.toLinear=function(u){return u>.04045?Math.pow((u+.055)/1.055,2.4):u/12.92},u.Hsluv.xyzToRgb=function(r){return[u.Hsluv.fromLinear(u.Hsluv.dotProduct(u.Hsluv.m[0],r)),u.Hsluv.fromLinear(u.Hsluv.dotProduct(u.Hsluv.m[1],r)),u.Hsluv.fromLinear(u.Hsluv.dotProduct(u.Hsluv.m[2],r))]},u.Hsluv.rgbToXyz=function(r){var v=[u.Hsluv.toLinear(r[0]),u.Hsluv.toLinear(r[1]),u.Hsluv.toLinear(r[2])];return[u.Hsluv.dotProduct(u.Hsluv.minv[0],v),u.Hsluv.dotProduct(u.Hsluv.minv[1],v),u.Hsluv.dotProduct(u.Hsluv.minv[2],v)]},u.Hsluv.yToL=function(r){return r<=u.Hsluv.epsilon?r/u.Hsluv.refY*u.Hsluv.kappa:116*Math.pow(r/u.Hsluv.refY,.3333333333333333)-16},u.Hsluv.lToY=function(r){return r<=8?u.Hsluv.refY*r/u.Hsluv.kappa:u.Hsluv.refY*Math.pow((r+16)/116,3)},u.Hsluv.xyzToLuv=function(r){var v=r[0],l=r[1],o=v+15*l+3*r[2],s=4*v,n=9*l;0!=o?(s/=o,n/=o):(s=NaN,n=NaN);var t=u.Hsluv.yToL(l);return 0==t?[0,0,0]:[t,13*t*(s-u.Hsluv.refU),13*t*(n-u.Hsluv.refV)]},u.Hsluv.luvToXyz=function(r){var v=r[0],l=r[1],o=r[2];if(0==v)return[0,0,0];var s=l/(13*v)+u.Hsluv.refU,n=o/(13*v)+u.Hsluv.refV,t=u.Hsluv.lToY(v),e=0-9*t*s/((s-4)*n-s*n);return[e,t,(9*t-15*n*t-n*e)/(3*n)]},u.Hsluv.luvToLch=function(u){var r,v=u[0],l=u[1],o=u[2],s=Math.sqrt(l*l+o*o);s<1e-8?r=0:(r=180*Math.atan2(o,l)/Math.PI)<0&&(r=360+r);return[v,s,r]},u.Hsluv.lchToLuv=function(u){var r=u[0],v=u[1],l=u[2]/360*2*Math.PI;return[r,Math.cos(l)*v,Math.sin(l)*v]},u.Hsluv.hsluvToLch=function(r){var v=r[0],l=r[1],o=r[2];return o>99.9999999?[100,0,v]:o<1e-8?[0,0,v]:[o,u.Hsluv.maxChromaForLH(o,v)/100*l,v]},u.Hsluv.lchToHsluv=function(r){var v=r[0],l=r[1],o=r[2];return v>99.9999999?[o,0,100]:v<1e-8?[o,0,0]:[o,l/u.Hsluv.maxChromaForLH(v,o)*100,v]},u.Hsluv.hpluvToLch=function(r){var v=r[0],l=r[1],o=r[2];return o>99.9999999?[100,0,v]:o<1e-8?[0,0,v]:[o,u.Hsluv.maxSafeChromaForL(o)/100*l,v]},u.Hsluv.lchToHpluv=function(r){var v=r[0],l=r[1],o=r[2];return v>99.9999999?[o,0,100]:v<1e-8?[o,0,0]:[o,l/u.Hsluv.maxSafeChromaForL(v)*100,v]},u.Hsluv.rgbToHex=function(r){for(var v="#",l=0;l<3;){var o=r[l++],s=Math.round(255*o),n=s%16,t=(s-n)/16|0;v+=u.Hsluv.hexChars.charAt(t)+u.Hsluv.hexChars.charAt(n)}return v},u.Hsluv.hexToRgb=function(r){r=r.toLowerCase();for(var v=[],l=0;l<3;){var o=l++,s=16*u.Hsluv.hexChars.indexOf(r.charAt(2*o+1))+u.Hsluv.hexChars.indexOf(r.charAt(2*o+2));v.push(s/255)}return v},u.Hsluv.lchToRgb=function(r){return u.Hsluv.xyzToRgb(u.Hsluv.luvToXyz(u.Hsluv.lchToLuv(r)))},u.Hsluv.rgbToLch=function(r){return u.Hsluv.luvToLch(u.Hsluv.xyzToLuv(u.Hsluv.rgbToXyz(r)))},u.Hsluv.hsluvToRgb=function(r){return u.Hsluv.lchToRgb(u.Hsluv.hsluvToLch(r))},u.Hsluv.rgbToHsluv=function(r){return u.Hsluv.lchToHsluv(u.Hsluv.rgbToLch(r))},u.Hsluv.hpluvToRgb=function(r){return u.Hsluv.lchToRgb(u.Hsluv.hpluvToLch(r))},u.Hsluv.rgbToHpluv=function(r){return u.Hsluv.lchToHpluv(u.Hsluv.rgbToLch(r))},u.Hsluv.hsluvToHex=function(r){return u.Hsluv.rgbToHex(u.Hsluv.hsluvToRgb(r))},u.Hsluv.hpluvToHex=function(r){return u.Hsluv.rgbToHex(u.Hsluv.hpluvToRgb(r))},u.Hsluv.hexToHsluv=function(r){return u.Hsluv.rgbToHsluv(u.Hsluv.hexToRgb(r))},u.Hsluv.hexToHpluv=function(r){return u.Hsluv.rgbToHpluv(u.Hsluv.hexToRgb(r))},u.Hsluv.m=[[3.240969941904521,-1.537383177570093,-.498610760293],[-.96924363628087,1.87596750150772,.041555057407175],[.055630079696993,-.20397695888897,1.056971514242878]],u.Hsluv.minv=[[.41239079926595,.35758433938387,.18048078840183],[.21263900587151,.71516867876775,.072192315360733],[.019330818715591,.11919477979462,.95053215224966]],u.Hsluv.refY=1,u.Hsluv.refU=.19783000664283,u.Hsluv.refV=.46831999493879,u.Hsluv.kappa=903.2962962,u.Hsluv.epsilon=.0088564516,u.Hsluv.hexChars="0123456789abcdef";var r={hsluvToRgb:u.Hsluv.hsluvToRgb,rgbToHsluv:u.Hsluv.rgbToHsluv,hpluvToRgb:u.Hsluv.hpluvToRgb,rgbToHpluv:u.Hsluv.rgbToHpluv,hsluvToHex:u.Hsluv.hsluvToHex,hexToHsluv:u.Hsluv.hexToHsluv,hpluvToHex:u.Hsluv.hpluvToHex,hexToHpluv:u.Hsluv.hexToHpluv,lchToHpluv:u.Hsluv.lchToHpluv,hpluvToLch:u.Hsluv.hpluvToLch,lchToHsluv:u.Hsluv.lchToHsluv,hsluvToLch:u.Hsluv.hsluvToLch,lchToLuv:u.Hsluv.lchToLuv,luvToLch:u.Hsluv.luvToLch,xyzToLuv:u.Hsluv.xyzToLuv,luvToXyz:u.Hsluv.luvToXyz,xyzToRgb:u.Hsluv.xyzToRgb,rgbToXyz:u.Hsluv.rgbToXyz,lchToRgb:u.Hsluv.lchToRgb,rgbToLch:u.Hsluv.rgbToLch};module.exports=r;
},{}],"hWRZ":[function(require,module,exports) {
var global = arguments[3];
var r=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=h,exports.iteratee=m,exports.restArguments=j,exports.forEach=exports.each=k,exports.collect=exports.map=I,exports.detect=exports.find=T,exports.select=exports.filter=F,exports.reject=W,exports.all=exports.every=D,exports.any=exports.some=q,exports.include=exports.includes=exports.contains=z,exports.pluck=L,exports.where=V,exports.findWhere=K,exports.max=J,exports.min=U,exports.shuffle=$,exports.sample=C,exports.sortBy=G,exports.toArray=rr,exports.size=tr,exports.take=exports.head=exports.first=er,exports.initial=or,exports.last=ur,exports.drop=exports.tail=exports.rest=ir,exports.compact=ar,exports.flatten=pr,exports.unique=exports.uniq=fr,exports.intersection=xr,exports.unzip=hr,exports.object=gr,exports.sortedIndex=jr,exports.range=Ar,exports.chunk=Or,exports.memoize=Nr,exports.throttle=Tr,exports.debounce=Fr,exports.wrap=Wr,exports.negate=Dr,exports.compose=qr,exports.after=zr,exports.before=Pr,exports.keys=Ur,exports.allKeys=$r,exports.values=Cr,exports.mapObject=Gr,exports.pairs=Hr,exports.invert=Qr,exports.methods=exports.functions=Xr,exports.findKey=tt,exports.create=it,exports.clone=at,exports.tap=st,exports.isMatch=pt,exports.isEqual=lt,exports.isEmpty=xt,exports.isElement=vt,exports.isObject=gt,exports.isFinite=Nt,exports.isNaN=Bt,exports.isBoolean=Rt,exports.isNull=Tt,exports.isUndefined=Ft,exports.has=Wt,exports.identity=Dt,exports.constant=qt,exports.noop=zt,exports.property=Pt,exports.propertyOf=Lt,exports.matches=exports.matcher=Vt,exports.times=Kt,exports.random=Jt,exports.result=Xt,exports.uniqueId=Zt,exports.template=un,exports.chain=an,exports.mixin=pn,exports.templateSettings=exports.unescape=exports.escape=exports.now=exports.isWeakSet=exports.isSet=exports.isWeakMap=exports.isMap=exports.isSymbol=exports.isError=exports.isRegExp=exports.isDate=exports.isNumber=exports.isString=exports.isFunction=exports.isArguments=exports.isArray=exports.defaults=exports.omit=exports.pick=exports.assign=exports.extendOwn=exports.extend=exports.once=exports.defer=exports.delay=exports.bindAll=exports.partial=exports.bind=exports.lastIndexOf=exports.indexOf=exports.findLastIndex=exports.findIndex=exports.zip=exports.difference=exports.union=exports.without=exports.partition=exports.countBy=exports.indexBy=exports.groupBy=exports.invoke=exports.foldr=exports.reduceRight=exports.inject=exports.foldl=exports.reduce=exports.VERSION=void 0;var t="object"==typeof self&&self.self===self&&self||"object"==typeof r&&r.global===r&&r||Function("return this")()||{},n=Array.prototype,e=Object.prototype,o="undefined"!=typeof Symbol?Symbol.prototype:null,u=n.push,i=n.slice,a=e.toString,s=e.hasOwnProperty,p=Array.isArray,c=Object.keys,f=Object.create,l=t.isNaN,x=t.isFinite,v=function(){};function h(r){return r instanceof h?r:this instanceof h?void(this._wrapped=r):new h(r)}var d=h.VERSION="1.10.2";function g(r,t,n){if(void 0===t)return r;switch(null==n?3:n){case 1:return function(n){return r.call(t,n)};case 3:return function(n,e,o){return r.call(t,n,e,o)};case 4:return function(n,e,o,u){return r.call(t,n,e,o,u)}}return function(){return r.apply(t,arguments)}}function y(r,t,n){return null==r?Dt:mt(r)?g(r,t,n):gt(r)&&!dt(r)?Vt(r):Pt(r)}function m(r,t){return y(r,t,1/0)}function b(r,t,n){return h.iteratee!==m?h.iteratee(r,t):y(r,t,n)}function j(r,t){return t=null==t?r.length-1:+t,function(){for(var n=Math.max(arguments.length-t,0),e=Array(n),o=0;o<n;o++)e[o]=arguments[o+t];switch(t){case 0:return r.call(this,e);case 1:return r.call(this,arguments[0],e);case 2:return r.call(this,arguments[0],arguments[1],e)}var u=Array(t+1);for(o=0;o<t;o++)u[o]=arguments[o];return u[t]=e,r.apply(this,u)}}function _(r){if(!gt(r))return{};if(f)return f(r);v.prototype=r;var t=new v;return v.prototype=null,t}function S(r){return function(t){return null==t?void 0:t[r]}}function w(r,t){return null!=r&&s.call(r,t)}function A(r,t){for(var n=t.length,e=0;e<n;e++){if(null==r)return;r=r[t[e]]}return n?r:void 0}exports.VERSION=d,h.iteratee=m;var O=Math.pow(2,53)-1,M=S("length");function E(r){var t=M(r);return"number"==typeof t&&t>=0&&t<=O}function k(r,t,n){var e,o;if(t=g(t,n),E(r))for(e=0,o=r.length;e<o;e++)t(r[e],e,r);else{var u=Ur(r);for(e=0,o=u.length;e<o;e++)t(r[u[e]],u[e],r)}return r}function I(r,t,n){t=b(t,n);for(var e=!E(r)&&Ur(r),o=(e||r).length,u=Array(o),i=0;i<o;i++){var a=e?e[i]:i;u[i]=t(r[a],a,r)}return u}function N(r){return function(t,n,e,o){var u=arguments.length>=3;return function(t,n,e,o){var u=!E(t)&&Ur(t),i=(u||t).length,a=r>0?0:i-1;for(o||(e=t[u?u[a]:a],a+=r);a>=0&&a<i;a+=r){var s=u?u[a]:a;e=n(e,t[s],s,t)}return e}(t,g(n,o,4),e,u)}}var B=N(1);exports.inject=exports.foldl=exports.reduce=B;var R=N(-1);function T(r,t,n){var e=(E(r)?mr:tt)(r,t,n);if(void 0!==e&&-1!==e)return r[e]}function F(r,t,n){var e=[];return t=b(t,n),k(r,function(r,n,o){t(r,n,o)&&e.push(r)}),e}function W(r,t,n){return F(r,Dr(b(t)),n)}function D(r,t,n){t=b(t,n);for(var e=!E(r)&&Ur(r),o=(e||r).length,u=0;u<o;u++){var i=e?e[u]:u;if(!t(r[i],i,r))return!1}return!0}function q(r,t,n){t=b(t,n);for(var e=!E(r)&&Ur(r),o=(e||r).length,u=0;u<o;u++){var i=e?e[u]:u;if(t(r[i],i,r))return!0}return!1}function z(r,t,n,e){return E(r)||(r=Cr(r)),("number"!=typeof n||e)&&(n=0),Sr(r,t,n)>=0}exports.foldr=exports.reduceRight=R;var P=j(function(r,t,n){var e,o;return mt(t)?o=t:dt(t)&&(e=t.slice(0,-1),t=t[t.length-1]),I(r,function(r){var u=o;if(!u){if(e&&e.length&&(r=A(r,e)),null==r)return;u=r[t]}return null==u?u:u.apply(r,n)})});function L(r,t){return I(r,Pt(t))}function V(r,t){return F(r,Vt(t))}function K(r,t){return T(r,Vt(t))}function J(r,t,n){var e,o,u=-1/0,i=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof r[0]&&null!=r)for(var a=0,s=(r=E(r)?r:Cr(r)).length;a<s;a++)null!=(e=r[a])&&e>u&&(u=e);else t=b(t,n),k(r,function(r,n,e){((o=t(r,n,e))>i||o===-1/0&&u===-1/0)&&(u=r,i=o)});return u}function U(r,t,n){var e,o,u=1/0,i=1/0;if(null==t||"number"==typeof t&&"object"!=typeof r[0]&&null!=r)for(var a=0,s=(r=E(r)?r:Cr(r)).length;a<s;a++)null!=(e=r[a])&&e<u&&(u=e);else t=b(t,n),k(r,function(r,n,e){((o=t(r,n,e))<i||o===1/0&&u===1/0)&&(u=r,i=o)});return u}function $(r){return C(r,1/0)}function C(r,t,n){if(null==t||n)return E(r)||(r=Cr(r)),r[Jt(r.length-1)];var e=E(r)?at(r):Cr(r),o=M(e);t=Math.max(Math.min(t,o),0);for(var u=o-1,i=0;i<t;i++){var a=Jt(i,u),s=e[i];e[i]=e[a],e[a]=s}return e.slice(0,t)}function G(r,t,n){var e=0;return t=b(t,n),L(I(r,function(r,n,o){return{value:r,index:e++,criteria:t(r,n,o)}}).sort(function(r,t){var n=r.criteria,e=t.criteria;if(n!==e){if(n>e||void 0===n)return 1;if(n<e||void 0===e)return-1}return r.index-t.index}),"value")}function H(r,t){return function(n,e,o){var u=t?[[],[]]:{};return e=b(e,o),k(n,function(t,o){var i=e(t,o,n);r(u,t,i)}),u}}exports.invoke=P;var Q=H(function(r,t,n){w(r,n)?r[n].push(t):r[n]=[t]});exports.groupBy=Q;var X=H(function(r,t,n){r[n]=t});exports.indexBy=X;var Y=H(function(r,t,n){w(r,n)?r[n]++:r[n]=1});exports.countBy=Y;var Z=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function rr(r){return r?dt(r)?i.call(r):bt(r)?r.match(Z):E(r)?I(r,Dt):Cr(r):[]}function tr(r){return null==r?0:E(r)?r.length:Ur(r).length}var nr=H(function(r,t,n){r[n?0:1].push(t)},!0);function er(r,t,n){return null==r||r.length<1?null==t?void 0:[]:null==t||n?r[0]:or(r,r.length-t)}function or(r,t,n){return i.call(r,0,Math.max(0,r.length-(null==t||n?1:t)))}function ur(r,t,n){return null==r||r.length<1?null==t?void 0:[]:null==t||n?r[r.length-1]:ir(r,Math.max(0,r.length-t))}function ir(r,t,n){return i.call(r,null==t||n?1:t)}function ar(r){return F(r,Boolean)}function sr(r,t,n,e){for(var o=(e=e||[]).length,u=0,i=M(r);u<i;u++){var a=r[u];if(E(a)&&(dt(a)||yt(a)))if(t)for(var s=0,p=a.length;s<p;)e[o++]=a[s++];else sr(a,t,n,e),o=e.length;else n||(e[o++]=a)}return e}function pr(r,t){return sr(r,t,!1)}exports.partition=nr;var cr=j(function(r,t){return vr(r,t)});function fr(r,t,n,e){Rt(t)||(e=n,n=t,t=!1),null!=n&&(n=b(n,e));for(var o=[],u=[],i=0,a=M(r);i<a;i++){var s=r[i],p=n?n(s,i,r):s;t&&!n?(i&&u===p||o.push(s),u=p):n?z(u,p)||(u.push(p),o.push(s)):z(o,s)||o.push(s)}return o}exports.without=cr;var lr=j(function(r){return fr(sr(r,!0,!0))});function xr(r){for(var t=[],n=arguments.length,e=0,o=M(r);e<o;e++){var u=r[e];if(!z(t,u)){var i;for(i=1;i<n&&z(arguments[i],u);i++);i===n&&t.push(u)}}return t}exports.union=lr;var vr=j(function(r,t){return t=sr(t,!0,!0),F(r,function(r){return!z(t,r)})});function hr(r){for(var t=r&&J(r,M).length||0,n=Array(t),e=0;e<t;e++)n[e]=L(r,e);return n}exports.difference=vr;var dr=j(hr);function gr(r,t){for(var n={},e=0,o=M(r);e<o;e++)t?n[r[e]]=t[e]:n[r[e][0]]=r[e][1];return n}function yr(r){return function(t,n,e){n=b(n,e);for(var o=M(t),u=r>0?0:o-1;u>=0&&u<o;u+=r)if(n(t[u],u,t))return u;return-1}}exports.zip=dr;var mr=yr(1);exports.findIndex=mr;var br=yr(-1);function jr(r,t,n,e){for(var o=(n=b(n,e,1))(t),u=0,i=M(r);u<i;){var a=Math.floor((u+i)/2);n(r[a])<o?u=a+1:i=a}return u}function _r(r,t,n){return function(e,o,u){var a=0,s=M(e);if("number"==typeof u)r>0?a=u>=0?u:Math.max(u+s,a):s=u>=0?Math.min(u+1,s):u+s+1;else if(n&&u&&s)return e[u=n(e,o)]===o?u:-1;if(o!=o)return(u=t(i.call(e,a,s),Bt))>=0?u+a:-1;for(u=r>0?a:s-1;u>=0&&u<s;u+=r)if(e[u]===o)return u;return-1}}exports.findLastIndex=br;var Sr=_r(1,mr,jr);exports.indexOf=Sr;var wr=_r(-1,br);function Ar(r,t,n){null==t&&(t=r||0,r=0),n||(n=t<r?-1:1);for(var e=Math.max(Math.ceil((t-r)/n),0),o=Array(e),u=0;u<e;u++,r+=n)o[u]=r;return o}function Or(r,t){if(null==t||t<1)return[];for(var n=[],e=0,o=r.length;e<o;)n.push(i.call(r,e,e+=t));return n}function Mr(r,t,n,e,o){if(!(e instanceof t))return r.apply(n,o);var u=_(r.prototype),i=r.apply(u,o);return gt(i)?i:u}exports.lastIndexOf=wr;var Er=j(function(r,t,n){if(!mt(r))throw new TypeError("Bind must be called on a function");var e=j(function(o){return Mr(r,e,t,this,n.concat(o))});return e});exports.bind=Er;var kr=j(function(r,t){var n=kr.placeholder,e=function(){for(var o=0,u=t.length,i=Array(u),a=0;a<u;a++)i[a]=t[a]===n?arguments[o++]:t[a];for(;o<arguments.length;)i.push(arguments[o++]);return Mr(r,e,this,this,i)};return e});exports.partial=kr,kr.placeholder=h;var Ir=j(function(r,t){var n=(t=sr(t,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var e=t[n];r[e]=Er(r[e],r)}});function Nr(r,t){var n=function(e){var o=n.cache,u=""+(t?t.apply(this,arguments):e);return w(o,u)||(o[u]=r.apply(this,arguments)),o[u]};return n.cache={},n}exports.bindAll=Ir;var Br=j(function(r,t,n){return setTimeout(function(){return r.apply(null,n)},t)});exports.delay=Br;var Rr=kr(Br,h,1);function Tr(r,t,n){var e,o,u,i,a=0;n||(n={});var s=function(){a=!1===n.leading?0:Ut(),e=null,i=r.apply(o,u),e||(o=u=null)},p=function(){var p=Ut();a||!1!==n.leading||(a=p);var c=t-(p-a);return o=this,u=arguments,c<=0||c>t?(e&&(clearTimeout(e),e=null),a=p,i=r.apply(o,u),e||(o=u=null)):e||!1===n.trailing||(e=setTimeout(s,c)),i};return p.cancel=function(){clearTimeout(e),a=0,e=o=u=null},p}function Fr(r,t,n){var e,o,u=function(t,n){e=null,n&&(o=r.apply(t,n))},i=j(function(i){if(e&&clearTimeout(e),n){var a=!e;e=setTimeout(u,t),a&&(o=r.apply(this,i))}else e=Br(u,t,this,i);return o});return i.cancel=function(){clearTimeout(e),e=null},i}function Wr(r,t){return kr(t,r)}function Dr(r){return function(){return!r.apply(this,arguments)}}function qr(){var r=arguments,t=r.length-1;return function(){for(var n=t,e=r[t].apply(this,arguments);n--;)e=r[n].call(this,e);return e}}function zr(r,t){return function(){if(--r<1)return t.apply(this,arguments)}}function Pr(r,t){var n;return function(){return--r>0&&(n=t.apply(this,arguments)),r<=1&&(t=null),n}}exports.defer=Rr;var Lr=kr(Pr,2);exports.once=Lr;var Vr=!{toString:null}.propertyIsEnumerable("toString"),Kr=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function Jr(r,t){var n=Kr.length,o=r.constructor,u=mt(o)&&o.prototype||e,i="constructor";for(w(r,i)&&!z(t,i)&&t.push(i);n--;)(i=Kr[n])in r&&r[i]!==u[i]&&!z(t,i)&&t.push(i)}function Ur(r){if(!gt(r))return[];if(c)return c(r);var t=[];for(var n in r)w(r,n)&&t.push(n);return Vr&&Jr(r,t),t}function $r(r){if(!gt(r))return[];var t=[];for(var n in r)t.push(n);return Vr&&Jr(r,t),t}function Cr(r){for(var t=Ur(r),n=t.length,e=Array(n),o=0;o<n;o++)e[o]=r[t[o]];return e}function Gr(r,t,n){t=b(t,n);for(var e=Ur(r),o=e.length,u={},i=0;i<o;i++){var a=e[i];u[a]=t(r[a],a,r)}return u}function Hr(r){for(var t=Ur(r),n=t.length,e=Array(n),o=0;o<n;o++)e[o]=[t[o],r[t[o]]];return e}function Qr(r){for(var t={},n=Ur(r),e=0,o=n.length;e<o;e++)t[r[n[e]]]=n[e];return t}function Xr(r){var t=[];for(var n in r)mt(r[n])&&t.push(n);return t.sort()}function Yr(r,t){return function(n){var e=arguments.length;if(t&&(n=Object(n)),e<2||null==n)return n;for(var o=1;o<e;o++)for(var u=arguments[o],i=r(u),a=i.length,s=0;s<a;s++){var p=i[s];t&&void 0!==n[p]||(n[p]=u[p])}return n}}var Zr=Yr($r);exports.extend=Zr;var rt=Yr(Ur);function tt(r,t,n){t=b(t,n);for(var e,o=Ur(r),u=0,i=o.length;u<i;u++)if(t(r[e=o[u]],e,r))return e}function nt(r,t,n){return t in n}exports.assign=exports.extendOwn=rt;var et=j(function(r,t){var n={},e=t[0];if(null==r)return n;mt(e)?(t.length>1&&(e=g(e,t[1])),t=$r(r)):(e=nt,t=sr(t,!1,!1),r=Object(r));for(var o=0,u=t.length;o<u;o++){var i=t[o],a=r[i];e(a,i,r)&&(n[i]=a)}return n});exports.pick=et;var ot=j(function(r,t){var n,e=t[0];return mt(e)?(e=Dr(e),t.length>1&&(n=t[1])):(t=I(sr(t,!1,!1),String),e=function(r,n){return!z(t,n)}),et(r,e,n)});exports.omit=ot;var ut=Yr($r,!0);function it(r,t){var n=_(r);return t&&rt(n,t),n}function at(r){return gt(r)?dt(r)?r.slice():Zr({},r):r}function st(r,t){return t(r),r}function pt(r,t){var n=Ur(t),e=n.length;if(null==r)return!e;for(var o=Object(r),u=0;u<e;u++){var i=n[u];if(t[i]!==o[i]||!(i in o))return!1}return!0}function ct(r,t,n,e){if(r===t)return 0!==r||1/r==1/t;if(null==r||null==t)return!1;if(r!=r)return t!=t;var o=typeof r;return("function"===o||"object"===o||"object"==typeof t)&&ft(r,t,n,e)}function ft(r,t,n,e){r instanceof h&&(r=r._wrapped),t instanceof h&&(t=t._wrapped);var u=a.call(r);if(u!==a.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return o.valueOf.call(r)===o.valueOf.call(t)}var i="[object Array]"===u;if(!i){if("object"!=typeof r||"object"!=typeof t)return!1;var s=r.constructor,p=t.constructor;if(s!==p&&!(mt(s)&&s instanceof s&&mt(p)&&p instanceof p)&&"constructor"in r&&"constructor"in t)return!1}e=e||[];for(var c=(n=n||[]).length;c--;)if(n[c]===r)return e[c]===t;if(n.push(r),e.push(t),i){if((c=r.length)!==t.length)return!1;for(;c--;)if(!ct(r[c],t[c],n,e))return!1}else{var f,l=Ur(r);if(c=l.length,Ur(t).length!==c)return!1;for(;c--;)if(!w(t,f=l[c])||!ct(r[f],t[f],n,e))return!1}return n.pop(),e.pop(),!0}function lt(r,t){return ct(r,t)}function xt(r){return null==r||(E(r)&&(dt(r)||bt(r)||yt(r))?0===r.length:0===Ur(r).length)}function vt(r){return!(!r||1!==r.nodeType)}function ht(r){return function(t){return a.call(t)==="[object "+r+"]"}}exports.defaults=ut;var dt=p||ht("Array");function gt(r){var t=typeof r;return"function"===t||"object"===t&&!!r}exports.isArray=dt;var yt=ht("Arguments");exports.isArguments=yt;var mt=ht("Function");exports.isFunction=mt;var bt=ht("String");exports.isString=bt;var jt=ht("Number");exports.isNumber=jt;var _t=ht("Date");exports.isDate=_t;var St=ht("RegExp");exports.isRegExp=St;var wt=ht("Error");exports.isError=wt;var At=ht("Symbol");exports.isSymbol=At;var Ot=ht("Map");exports.isMap=Ot;var Mt=ht("WeakMap");exports.isWeakMap=Mt;var Et=ht("Set");exports.isSet=Et;var kt=ht("WeakSet");exports.isWeakSet=kt,function(){yt(arguments)||(exports.isArguments=yt=function(r){return w(r,"callee")})}();var It=t.document&&t.document.childNodes;function Nt(r){return!At(r)&&x(r)&&!l(parseFloat(r))}function Bt(r){return jt(r)&&l(r)}function Rt(r){return!0===r||!1===r||"[object Boolean]"===a.call(r)}function Tt(r){return null===r}function Ft(r){return void 0===r}function Wt(r,t){if(!dt(t))return w(r,t);for(var n=t.length,e=0;e<n;e++){var o=t[e];if(null==r||!s.call(r,o))return!1;r=r[o]}return!!n}function Dt(r){return r}function qt(r){return function(){return r}}function zt(){}function Pt(r){return dt(r)?function(t){return A(t,r)}:S(r)}function Lt(r){return null==r?function(){}:function(t){return dt(t)?A(r,t):r[t]}}function Vt(r){return r=rt({},r),function(t){return pt(t,r)}}function Kt(r,t,n){var e=Array(Math.max(0,r));t=g(t,n,1);for(var o=0;o<r;o++)e[o]=t(o);return e}function Jt(r,t){return null==t&&(t=r,r=0),r+Math.floor(Math.random()*(t-r+1))}"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof It&&(exports.isFunction=mt=function(r){return"function"==typeof r||!1});var Ut=Date.now||function(){return(new Date).getTime()};exports.now=Ut;var $t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Ct=Qr($t);function Gt(r){var t=function(t){return r[t]},n="(?:"+Ur(r).join("|")+")",e=RegExp(n),o=RegExp(n,"g");return function(r){return r=null==r?"":""+r,e.test(r)?r.replace(o,t):r}}var Ht=Gt($t);exports.escape=Ht;var Qt=Gt(Ct);function Xt(r,t,n){dt(t)||(t=[t]);var e=t.length;if(!e)return mt(n)?n.call(r):n;for(var o=0;o<e;o++){var u=null==r?void 0:r[t[o]];void 0===u&&(u=n,o=e),r=mt(u)?u.call(r):u}return r}exports.unescape=Qt;var Yt=0;function Zt(r){var t=++Yt+"";return r?r+t:t}var rn=h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};exports.templateSettings=rn;var tn=/(.)^/,nn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},en=/\\|'|\r|\n|\u2028|\u2029/g,on=function(r){return"\\"+nn[r]};function un(r,t,n){!t&&n&&(t=n),t=ut({},t,h.templateSettings);var e,o=RegExp([(t.escape||tn).source,(t.interpolate||tn).source,(t.evaluate||tn).source].join("|")+"|$","g"),u=0,i="__p+='";r.replace(o,function(t,n,e,o,a){return i+=r.slice(u,a).replace(en,on),u=a+t.length,n?i+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{e=new Function(t.variable||"obj","_",i)}catch(p){throw p.source=i,p}var a=function(r){return e.call(this,r,h)},s=t.variable||"obj";return a.source="function("+s+"){\n"+i+"}",a}function an(r){var t=h(r);return t._chain=!0,t}function sn(r,t){return r._chain?h(t).chain():t}function pn(r){return k(Xr(r),function(t){var n=h[t]=r[t];h.prototype[t]=function(){var r=[this._wrapped];return u.apply(r,arguments),sn(this,n.apply(h,r))}}),h}k(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=n[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],sn(this,n)}}),k(["concat","join","slice"],function(r){var t=n[r];h.prototype[r]=function(){return sn(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)};
},{}],"SKyo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("./index.js"));function t(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return t=function(){return e},e}function r(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=t();if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}var n=(0,e.mixin)(e);n._=n;var o=n;exports.default=o;
},{"./index.js":"hWRZ"}],"W0EG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={};Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return t.default}});var t=u(require("./index-default.js")),r=require("./index.js");function u(e){return e&&e.__esModule?e:{default:e}}Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&(Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}}))});
},{"./index-default.js":"SKyo","./index.js":"hWRZ"}],"XVYC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.genPalette=t;var e=require("hsluv"),r=require("underscore");function u(e,r,u){for(var t=[],o=(r-e)/(u-1),n=0;n<u;n++)t.push(Math.round(1e3*(e+o*n))/1e3);return t}function t(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"NORMAL",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9,s=[],a=[],c=e.hexToHsluv(t),h=c[0],v=c[1];s.push(100),s=s.concat(u(v,68*v/88,n-1)),a=u(98,25,n),"DULL"==o?s=u(45*v/88,35*v/88,n):"BRIGHT"==o&&((s=[]).push(100),s=s.concat(u(v,100,n-1)),a=u(98,40,n));var i=[];return r.zip(s,a).forEach(function(r){var u=r[0],t=r[1];i.push(e.hsluvToHex([h,u,t]))}),i}
},{"hsluv":"V8Mk","underscore":"W0EG"}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("./hsp_calc"),n=["#ffffff","#333333"];document.getElementById("generate").onclick=function(){var n=document.getElementById("hex").value,t=document.getElementById("palette"),l=document.querySelector("input[name=type]:checked").value,c=(0,e.genPalette)(n,l),d=0;t.innerHTML="",c.forEach(function(e){d+=100;var n=document.createElement("div");n.innerHTML='<div class="flex items-center m-2 py-2 pl-2 pr-4 bg-white rounded-md shadow flex-auto">\n                        <div class="ml-4 h-12 w-12 rounded-lg shadow-inner flex-none" style="background-color: '.concat(e,';"></div>\n                        <div class="flex flex-wrap items-center text-blue-700 leading-none pl-1 mr-2">\n                          <div class="ml-4 m-1 font-bold">').concat(d,'</div>\n                          <div class="ml-4 m-1 font-light w-16">').concat(e,"</div>\n                        </div>\n                      </div>"),t.appendChild(n)})};
},{"./hsp_calc":"XVYC"}]},{},["A2T1"], null)
//# sourceMappingURL=/app.061c491f.js.map