/*! For license information please see main.ea961bed.js.LICENSE.txt */
(()=>{var e={24:(e,t,n)=>{"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.r(t),n.d(t,{clsx:()=>i,default:()=>o});const o=i},43:(e,t,n)=>{"use strict";e.exports=n(202)},67:(e,t,n)=>{"use strict";e.exports=n(612)},136:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(43)),i=f(n(173)),o=f(n(950)),a=f(n(24)),l=n(212),s=n(777),u=n(447),c=f(n(935)),d=f(n(387));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class g extends r.Component{static getDerivedStateFromProps(e,t){let{position:n}=e,{prevPropsPosition:r}=t;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(e){super(e),m(this,"onDragStart",((e,t)=>{(0,d.default)("Draggable: onDragStart: %j",t);if(!1===this.props.onStart(e,(0,s.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),m(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",t);const n=(0,s.createDraggableData)(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[i,o]=(0,s.getBoundPosition)(this,r.x,r.y);r.x=i,r.y=o,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(e,n))return!1;this.setState(r)})),m(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,s.createDraggableData)(this,t)))return!1;(0,d.default)("Draggable: onDragStop: %j",t);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){"undefined"!==typeof window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:o.default.findDOMNode(this)}render(){const{axis:e,bounds:t,children:n,defaultPosition:i,defaultClassName:o,defaultClassNameDragging:u,defaultClassNameDragged:d,position:f,positionOffset:p,scale:m,...g}=this.props;let v={},y=null;const x=!Boolean(f)||this.state.dragging,b=f||i,w={x:(0,s.canDragX)(this)&&x?this.state.x:b.x,y:(0,s.canDragY)(this)&&x?this.state.y:b.y};this.state.isElementSVG?y=(0,l.createSVGTransform)(w,p):v=(0,l.createCSSTransform)(w,p);const S=(0,a.default)(n.props.className||"",o,{[u]:this.state.dragging,[d]:this.state.dragged});return r.createElement(c.default,h({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:S,style:{...n.props.style,...v},transform:y}))}}t.default=g,m(g,"displayName","Draggable"),m(g,"propTypes",{...c.default.propTypes,axis:i.default.oneOf(["both","x","y","none"]),bounds:i.default.oneOfType([i.default.shape({left:i.default.number,right:i.default.number,top:i.default.number,bottom:i.default.number}),i.default.string,i.default.oneOf([!1])]),defaultClassName:i.default.string,defaultClassNameDragging:i.default.string,defaultClassNameDragged:i.default.string,defaultPosition:i.default.shape({x:i.default.number,y:i.default.number}),positionOffset:i.default.shape({x:i.default.oneOfType([i.default.number,i.default.string]),y:i.default.oneOfType([i.default.number,i.default.string])}),position:i.default.shape({x:i.default.number,y:i.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),m(g,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},173:(e,t,n)=>{e.exports=n(497)()},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var i,o={},a=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:n,type:e,key:a,ref:l,props:o,_owner:k.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===o?"."+_(s,0):o,w(a)?(i="",null!=e&&(i=e.replace(T,"$&/")+"/"),P(a,t,i,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+_(l=e[u],u);s+=P(l,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,i,c=o+_(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},D={transition:null},L={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:D,ReactCurrentOwner:k};function N(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.act=N,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=N,t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.3.1"},212:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=u,t.addEvent=function(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,i):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&u(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){const n=s(e,t,"px");return{[(0,i.browserPrefixToKey)("transform",i.default)]:n}},t.createSVGTransform=function(e,t){return s(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,r.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,r.findInArray)(e.changedTouches,(e=>t===e.identifier))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.getTranslation=s,t.innerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingTop),t-=(0,r.int)(n.paddingBottom),t},t.innerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingLeft),t-=(0,r.int)(n.paddingRight),t},t.matchesSelector=l,t.matchesSelectorAndParentsTo=function(e,t,n){let r=e;do{if(l(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},t.offsetXYFromParent=function(e,t,n){const r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-r.left)/n,o=(e.clientY+t.scrollTop-r.top)/n;return{x:i,y:o}},t.outerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderTopWidth),t+=(0,r.int)(n.borderBottomWidth),t},t.outerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderLeftWidth),t+=(0,r.int)(n.borderRightWidth),t},t.removeClassName=c,t.removeEvent=function(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&c(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(t){}};var r=n(447),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(561));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}let a="";function l(e,t){return a||(a=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,r.isFunction)(e[t])}))),!!(0,r.isFunction)(e[a])&&e[a](t)}function s(e,t,n){let{x:r,y:i}=e,o="translate(".concat(r).concat(n,",").concat(i).concat(n,")");if(t){const e="".concat("string"===typeof t.x?t.x:t.x+n),r="".concat("string"===typeof t.y?t.y:t.y+n);o="translate(".concat(e,", ").concat(r,")")+o}return o}function u(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function c(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},387:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},447:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"===typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"===typeof e&&!isNaN(e)}},497:(e,t,n)=>{"use strict";var r=n(218);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},561:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=i,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=r;const n=["Moz","Webkit","O","ms"];function r(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window)return"";const r=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!r)return"";if(t in r)return"";for(let o=0;o<n.length;o++)if(i(t,n[o])in r)return n[o];return""}function i(e,t){return t?"".concat(t).concat(function(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}(e)):e}t.default=r()},579:(e,t,n)=>{"use strict";e.exports=n(153)},612:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<i&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<i&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,D(S);else{var t=r(c);null!==t&&L(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(C),C=-1),h=!0;var o=p;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var l=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&i(u),b(n)}else i(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&L(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,j=null,C=-1,T=5,_=-1;function P(){return!(t.unstable_now()-_<T)}function R(){if(null!==j){var e=t.unstable_now();_=e;var n=!0;try{n=j(!0,e)}finally{n?k():(E=!1,j=null)}}else E=!1}if("function"===typeof x)k=function(){x(R)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,O=z.port2;z.port1.onmessage=R,k=function(){O.postMessage(null)}}else k=function(){v(R,0)};function D(e){j=e,E||(E=!0,k())}function L(e,n){C=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,D(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(C),C=-1):g=!0,L(w,o-a))):(e.sortIndex=l,n(u,e),m||h||(m=!0,D(S))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},730:(e,t,n)=>{"use strict";var r=n(43),i=n(67);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),T=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var D=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var L=Symbol.iterator;function N(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=L&&e[L]||e["@@iterator"])?e:null}var A,F=Object.assign;function M(e){if(void 0===A)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return"\n"+A+e}var I=!1;function $(e,t){if(!e||I)return"";I=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(1!==a||1!==l)do{if(a--,0>--l||i[a]!==o[l]){var s="\n"+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{I=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function U(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case j:return"Profiler";case E:return"StrictMode";case P:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case T:return(e.displayName||"Context")+".Consumer";case C:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function X(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function K(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&X(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function je(e){if(e=xi(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function Ce(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function Te(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,je(e),t)for(e=0;e<t.length;e++)je(t[e])}}function _e(e,t){return e(t)}function Pe(){}var Re=!1;function ze(e,t,n){if(Re)return e(t,n);Re=!0;try{return _e(e,t,n)}finally{Re=!1,(null!==ke||null!==Ee)&&(Pe(),Te())}}function Oe(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var De=!1;if(c)try{var Le={};Object.defineProperty(Le,"passive",{get:function(){De=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch(ce){De=!1}function Ne(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ae=!1,Fe=null,Me=!1,Ie=null,$e={onError:function(e){Ae=!0,Fe=e}};function Ue(e,t,n,r,i,o,a,l,s){Ae=!1,Fe=null,Ne.apply($e,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ge=i.unstable_scheduleCallback,Xe=i.unstable_cancelCallback,Ke=i.unstable_shouldYield,Qe=i.unstable_requestPaint,qe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~i;0!==l?r=dt(l):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,jt,Ct=!1,Tt=[],_t=null,Pt=null,Rt=null,zt=new Map,Ot=new Map,Dt=[],Lt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":zt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ot.delete(t.pointerId)}}function At(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ft(e){var t=yi(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void jt(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function It(e,t,n){Mt(e)&&n.delete(t)}function $t(){Ct=!1,null!==_t&&Mt(_t)&&(_t=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Rt&&Mt(Rt)&&(Rt=null),zt.forEach(It),Ot.forEach(It)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,$t)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Tt.length){Ut(Tt[0],e);for(var n=1;n<Tt.length;n++){var r=Tt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&Ut(_t,e),null!==Pt&&Ut(Pt,e),null!==Rt&&Ut(Rt,e),zt.forEach(t),Ot.forEach(t),n=0;n<Dt.length;n++)(r=Dt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&null===(n=Dt[0]).blockedOn;)Ft(n),null===n.blockedOn&&Dt.shift()}var Wt=b.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var i=xt,o=Wt.transition;Wt.transition=null;try{xt=1,Gt(e,t,n,r)}finally{xt=i,Wt.transition=o}}function Yt(e,t,n,r){var i=xt,o=Wt.transition;Wt.transition=null;try{xt=4,Gt(e,t,n,r)}finally{xt=i,Wt.transition=o}}function Gt(e,t,n,r){if(Ht){var i=Kt(e,t,n,r);if(null===i)Hr(e,t,r,Xt,n),Nt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return _t=At(_t,e,t,n,r,i),!0;case"dragenter":return Pt=At(Pt,e,t,n,r,i),!0;case"mouseover":return Rt=At(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zt.set(o,At(zt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ot.set(o,At(Ot.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Nt(e,r),4&t&&-1<Lt.indexOf(e)){for(;null!==i;){var o=xi(i);if(null!==o&&wt(o),null===(o=Kt(e,t,n,r))&&Hr(e,t,r,Xt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Xt=null;function Kt(e,t,n,r){if(Xt=null,null!==(e=yi(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function Qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var qt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in qt?qt.value:qt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=F({},un,{view:0,detail:0}),fn=on(dn),pn=F({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(F({},pn,{dataTransfer:0})),gn=on(F({},dn,{relatedTarget:0})),vn=on(F({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=F({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(yn),bn=on(F({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function jn(){return En}var Cn=F({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tn=on(Cn),_n=on(F({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(F({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jn})),Rn=on(F({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=F({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),On=on(zn),Dn=[9,13,27,32],Ln=c&&"CompositionEvent"in window,Nn=null;c&&"documentMode"in document&&(Nn=document.documentMode);var An=c&&"TextEvent"in window&&!Nn,Fn=c&&(!Ln||Nn&&8<Nn&&11>=Nn),Mn=String.fromCharCode(32),In=!1;function $n(e,t){switch(e){case"keyup":return-1!==Dn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){Ce(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Gn=null;function Xn(e){Mr(e,0)}function Kn(e){if(G(bi(e)))return e}function Qn(e,t){if("change"===e)return t}var qn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;qn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Gn=Yn=null)}function nr(e){if("value"===e.propertyName&&Kn(Gn)){var t=[];Vn(t,Gn,e,we(e)),ze(Xn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Gn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Kn(Gn)}function or(e,t){if("click"===e)return Kn(t)}function ar(e,t){if("input"===e||"change"===e)return Kn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=X();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=X((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cr(n,o);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==X(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function jr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Cr=jr("animationend"),Tr=jr("animationiteration"),_r=jr("animationstart"),Pr=jr("transitionend"),Rr=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(e,t){Rr.set(e,t),s(t,[e])}for(var Dr=0;Dr<zr.length;Dr++){var Lr=zr[Dr];Or(Lr.toLowerCase(),"on"+(Lr[0].toUpperCase()+Lr.slice(1)))}Or(Cr,"onAnimationEnd"),Or(Tr,"onAnimationIteration"),Or(_r,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ar=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Fr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,l,s,u){if(Ue.apply(this,arguments),Ae){if(!Ae)throw Error(o(198));var c=Fe;Ae=!1,Fe=null,Me||(Me=!0,Ie=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Fr(i,l,u),o=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Fr(i,l,u),o=s}}}if(Me)throw e=Ie,Me=!1,Ie=null,e}function Ir(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach((function(t){"selectionchange"!==t&&(Ar.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,$r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Qt(t)){case 1:var i=Vt;break;case 4:i=Yt;break;default:i=Gt}n=i.bind(null,t,n,e),i=void 0,!De||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;a=a.return}for(;null!==l;){if(null===(a=yi(l)))return;if(5===(s=a.tag)||6===s){r=o=a;continue e}l=l.parentNode}}r=r.return}ze((function(){var r=o,i=we(n),a=[];e:{var l=Rr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Tn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case Cr:case Tr:case _r:s=vn;break;case Pr:s=Rn;break;case"scroll":s=fn;break;case"wheel":s=On;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Oe(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,i),a.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!yi(u)&&!u[hi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?yi(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=_n,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:bi(s),p=null==u?l:bi(u),(l=new c(m,h+"leave",s,n,i)).target=d,l.relatedTarget=p,m=null,yi(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Gr(p))h++;for(p=0,m=f;m;m=Gr(m))p++;for(;0<h-p;)c=Gr(c),h--;for(;0<p-h;)f=Gr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Gr(c),f=Gr(f)}c=null}else c=null;null!==s&&Xr(a,l,s,c,!1),null!==u&&null!==d&&Xr(a,d,u,c,!0)}if("select"===(s=(l=r?bi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Qn;else if(Hn(l))if(qn)g=ar;else{g=ir;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(a,g,n,i):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?bi(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var y;if(Ln)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bn?$n(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Fn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Bn&&(y=en()):(Jt="value"in(qt=i)?qt.value:qt.textContent,Bn=!0)),0<(v=Yr(r,x)).length&&(x=new bn(x,e,null,n,i),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=Un(n))&&(x.data=y))),(y=An?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(In=!0,Mn);case"textInput":return(e=t.data)===Mn&&In?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Ln&&$n(e,t)?(e=en(),Zt=Jt=qt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}Mr(a,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Oe(e,n))&&r.unshift(Vr(e,o,i)),null!=(o=Oe(e,t))&&r.push(Vr(e,o,i))),e=e.return}return r}function Gr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,i?null!=(s=Oe(n,o))&&a.unshift(Vr(n,s,l)):i||null!=(s=Oe(n,o))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Kr=/\r\n?/g,Qr=/\u0000|\uFFFD/g;function qr(e){return("string"===typeof e?e:""+e).replace(Kr,"\n").replace(Qr,"")}function Jr(e,t,n){if(t=qr(t),qr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(li)}:ri;function li(e){setTimeout((function(){throw e}))}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Bt(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,pi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[pi]||null}var Si=[],ki=-1;function Ei(e){return{current:e}}function ji(e){0>ki||(e.current=Si[ki],Si[ki]=null,ki--)}function Ci(e,t){ki++,Si[ki]=e.current,e.current=t}var Ti={},_i=Ei(Ti),Pi=Ei(!1),Ri=Ti;function zi(e,t){var n=e.type.contextTypes;if(!n)return Ti;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oi(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Di(){ji(Pi),ji(_i)}function Li(e,t,n){if(_i.current!==Ti)throw Error(o(168));Ci(_i,t),Ci(Pi,n)}function Ni(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return F({},n,r)}function Ai(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ti,Ri=_i.current,Ci(_i,e),Ci(Pi,Pi.current),!0}function Fi(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Ni(e,t,Ri),r.__reactInternalMemoizedMergedChildContext=e,ji(Pi),ji(_i),Ci(_i,e)):ji(Pi),Ci(Pi,n)}var Mi=null,Ii=!1,$i=!1;function Ui(e){null===Mi?Mi=[e]:Mi.push(e)}function Bi(){if(!$i&&null!==Mi){$i=!0;var e=0,t=xt;try{var n=Mi;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Mi=null,Ii=!1}catch(i){throw null!==Mi&&(Mi=Mi.slice(e+1)),Ge(Ze,Bi),i}finally{xt=t,$i=!1}}return null}var Wi=[],Hi=0,Vi=null,Yi=0,Gi=[],Xi=0,Ki=null,Qi=1,qi="";function Ji(e,t){Wi[Hi++]=Yi,Wi[Hi++]=Vi,Vi=e,Yi=t}function Zi(e,t,n){Gi[Xi++]=Qi,Gi[Xi++]=qi,Gi[Xi++]=Ki,Ki=e;var r=Qi;e=qi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Qi=1<<32-at(t)+i|n<<i|r,qi=o+e}else Qi=1<<o|n<<i|r,qi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Vi;)Vi=Wi[--Hi],Wi[Hi]=null,Yi=Wi[--Hi],Wi[Hi]=null;for(;e===Ki;)Ki=Gi[--Xi],Gi[Xi]=null,qi=Gi[--Xi],Gi[Xi]=null,Qi=Gi[--Xi],Gi[Xi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=zu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ki?{id:Qi,overflow:qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=zu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(io){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ui(n.nextSibling);var r=no;t&&lo(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!io)return co(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)ao(e,t),t=ui(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ui(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ui(e.nextSibling)}function ho(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Du(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Fu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===O&&xo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Lu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Nu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Fu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Lu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Mu(t,e.mode,n)).return=e,t;case O:return f(e,(0,t._init)(t._payload),n)}if(te(t)||N(t))return(t=Nu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case S:return n.key===i?c(e,t,n,r):null;case O:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||N(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case O:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||N(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(i,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(i,d),io&&Ji(i,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(i,l[m],s))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return io&&Ji(i,m),u}for(d=r(i,d);m<l.length;m++)null!==(g=h(d,i,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Ji(i,m),u}function g(i,l,s,u){var c=N(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=p(i,m,y.value,u);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(i,m),l=a(x,l,g),null===d?c=x:d.sibling=x,d=x,m=v}if(y.done)return n(i,m),io&&Ji(i,g),c;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(i,y.value,u))&&(l=a(y,l,g),null===d?c=y:d.sibling=y,d=y);return io&&Ji(i,g),c}for(m=r(i,m);!y.done;g++,y=s.next())null!==(y=h(m,i,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=a(y,l,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),io&&Ji(i,g),c}return function e(r,o,a,s){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===O&&xo(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=vo(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((o=Nu(a.props.children,r.mode,s,a.key)).return=r,r=o):((s=Lu(a.type,a.key,a.props,null,r.mode,s)).ref=vo(r,o,a),s.return=r,r=s)}return l(r);case S:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mu(a,r.mode,s)).return=r,r=o}return l(r);case O:return e(r,o,(c=a._init)(a._payload),s)}if(te(a))return m(r,o,a,s);if(N(a))return g(r,o,a,s);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Fu(a,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=bo(!0),So=bo(!1),ko=Ei(null),Eo=null,jo=null,Co=null;function To(){Co=jo=Eo=null}function _o(e){var t=ko.current;ji(ko),e._currentValue=t}function Po(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ro(e,t){Eo=e,Co=jo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function zo(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===jo){if(null===Eo)throw Error(o(308));jo=e,Eo.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return t}var Oo=null;function Do(e){null===Oo?Oo=[e]:Oo.push(e)}function Lo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Do(t)):(n.next=i.next,i.next=n),t.interleaved=n,No(e,r)}function No(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Ao=!1;function Fo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Io(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&_s)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,No(e,n)}return null===(i=r.interleaved)?(t.next=t,Do(r)):(t.next=i.next,i.next=t),r.interleaved=t,No(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;Ao=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?o=u:a.next=u,a=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=i.baseState;for(a=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=F({},d,f);break e;case 2:Ao=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(f=l).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);As|=a,e.lanes=a,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Vo={},Yo=Ei(Vo),Go=Ei(Vo),Xo=Ei(Vo);function Ko(e){if(e===Vo)throw Error(o(174));return e}function Qo(e,t){switch(Ci(Xo,t),Ci(Go,e),Ci(Yo,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}ji(Yo),Ci(Yo,t)}function qo(){ji(Yo),ji(Go),ji(Xo)}function Jo(e){Ko(Xo.current);var t=Ko(Yo.current),n=se(t,e.type);t!==n&&(Ci(Go,e),Ci(Yo,n))}function Zo(e){Go.current===e&&(ji(Yo),ji(Go))}var ea=Ei(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ua=null,ca=!1,da=!1,fa=0,pa=0;function ha(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:el,e=n(r,i),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(o(301));a+=1,ua=sa=null,t.updateQueue=null,ia.current=tl,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==sa&&null!==sa.next,aa=0,ua=sa=la=null,ca=!1,t)throw Error(o(300));return e}function va(){var e=0!==fa;return fa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?la.memoizedState=ua=e:ua=ua.next=e,ua}function xa(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ua?la.memoizedState:ua.next;if(null!==t)ua=t,sa=e;else{if(null===e)throw Error(o(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ua?la.memoizedState=ua=e:ua=ua.next=e}return ua}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=sa,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=l=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,la.lanes|=d,As|=d}c=c.next}while(null!==c&&c!==a);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,la.lanes|=a,As|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{a=e(a,l.action),l=l.next}while(l!==i);lr(a,t.memoizedState)||(xl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Ea(e,t){var n=la,r=xa(),i=t(),a=!lr(r.memoizedState,i);if(a&&(r.memoizedState=i,xl=!0),r=r.queue,Aa(Ta.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,za(9,Ca.bind(null,n,r,i,t),void 0,null),null===Ps)throw Error(o(349));0!==(30&aa)||ja(n,t,i)}return i}function ja(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ca(e,t,n,r){t.value=n,t.getSnapshot=r,_a(t)&&Pa(e)}function Ta(e,t,n){return n((function(){_a(t)&&Pa(e)}))}function _a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pa(e){var t=No(e,1);null!==t&&nu(t,e,1,-1)}function Ra(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Xa.bind(null,la,e),[t.memoizedState,e]}function za(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Oa(){return xa().memoizedState}function Da(e,t,n,r){var i=ya();la.flags|=e,i.memoizedState=za(1|t,n,void 0,void 0===r?null:r)}function La(e,t,n,r){var i=xa();r=void 0===r?null:r;var o=void 0;if(null!==sa){var a=sa.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=za(t,n,o,r))}la.flags|=e,i.memoizedState=za(1|t,n,o,r)}function Na(e,t){return Da(8390656,8,e,t)}function Aa(e,t){return La(2048,8,e,t)}function Fa(e,t){return La(4,2,e,t)}function Ma(e,t){return La(4,4,e,t)}function Ia(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $a(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,La(4,4,Ia.bind(null,t,e),n)}function Ua(){}function Ba(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),la.lanes|=n,As|=n,e.baseState=!0),t)}function Va(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{xt=n,oa.transition=r}}function Ya(){return xa().memoizedState}function Ga(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ka(e))Qa(t,n);else if(null!==(n=Lo(e,t,n,r))){nu(n,e,r,eu()),qa(n,t,r)}}function Xa(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(i.next=i,Do(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Lo(e,t,i,r))&&(nu(n,e,r,i=eu()),qa(n,t,r))}}function Ka(e){var t=e.alternate;return e===la||null!==t&&t===la}function Qa(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ja={readContext:zo,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:zo,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:zo,useEffect:Na,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Da(4194308,4,Ia.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Da(4194308,4,e,t)},useInsertionEffect:function(e,t){return Da(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ga.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:Ra,useDebugValue:Ua,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=Ra(!1),t=e[0];return e=Va.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ps)throw Error(o(349));0!==(30&aa)||ja(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Na(Ta.bind(null,r,a,e),[e]),r.flags|=2048,za(9,Ca.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=Ps.identifierPrefix;if(io){var n=qi;t=":"+t+"R"+(n=(Qi&~(1<<32-at(Qi)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:zo,useCallback:Ba,useContext:zo,useEffect:Aa,useImperativeHandle:$a,useInsertionEffect:Fa,useLayoutEffect:Ma,useMemo:Wa,useReducer:wa,useRef:Oa,useState:function(){return wa(ba)},useDebugValue:Ua,useDeferredValue:function(e){return Ha(xa(),sa.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1},tl={readContext:zo,useCallback:Ba,useContext:zo,useEffect:Aa,useImperativeHandle:$a,useInsertionEffect:Fa,useLayoutEffect:Ma,useMemo:Wa,useReducer:Sa,useRef:Oa,useState:function(){return Sa(ba)},useDebugValue:Ua,useDeferredValue:function(e){var t=xa();return null===sa?t.memoizedState=e:Ha(t,sa.memoizedState,e)},useTransition:function(){return[Sa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=F({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:F({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,i))&&(nu(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Io(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,i))&&(nu(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Io(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=$o(e,i,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function ol(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,o))}function al(e,t,n){var r=!1,i=Ti,o=t.contextType;return"object"===typeof o&&null!==o?o=zo(o):(i=Oi(t)?Ri:_i.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?zi(e,i):Ti),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fo(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=zo(o):(o=Oi(t)?Ri:_i.current,i.context=zi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Io(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Io(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=ju.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Io(-1,1)).tag=2,$o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var yl=b.ReactCurrentOwner,xl=!1;function bl(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var o=t.ref;return Ro(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||xl?(io&&n&&eo(t),t.flags|=1,bl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function Sl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Ou(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Lu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,kl(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Hl(e,t,i)}return t.flags|=1,(e=Du(o,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Hl(e,t,i);0!==(131072&e.flags)&&(xl=!0)}}return Cl(e,t,n,r,i)}function El(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Ds,Os),Os|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Ds,Os),Os|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ci(Ds,Os),Os|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ci(Ds,Os),Os|=r;return bl(e,t,i,n),t.child}function jl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,n,r,i){var o=Oi(n)?Ri:_i.current;return o=zi(t,o),Ro(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||xl?(io&&r&&eo(t),t.flags|=1,bl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function Tl(e,t,n,r,i){if(Oi(n)){var o=!0;Ai(t)}else o=!1;if(Ro(t,i),null===t.stateNode)Wl(e,t),al(t,n,r),sl(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=zo(u):u=zi(t,u=Oi(n)?Ri:_i.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,a,r,u),Ao=!1;var f=t.memoizedState;a.state=f,Wo(t,r,a,i),s=t.memoizedState,l!==r||f!==s||Pi.current||Ao?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Ao||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Mo(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=zo(s):s=zi(t,s=Oi(n)?Ri:_i.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,a,r,s),Ao=!1,f=t.memoizedState,a.state=f,Wo(t,r,a,i);var h=t.memoizedState;l!==d||f!==h||Pi.current||Ao?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Ao||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return _l(e,t,n,r,o,i)}function _l(e,t,n,r,i,o){jl(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Fi(t,n,!1),Hl(e,t,o);r=t.stateNode,yl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):bl(e,t,l,o),t.memoizedState=r.state,i&&Fi(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Li(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Li(0,t.context,!1),Qo(e,t.containerInfo)}function Rl(e,t,n,r,i){return ho(),mo(i),t.flags|=256,bl(e,t,n,r),t.child}var zl,Ol,Dl,Ll,Nl={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fl(e,t,n){var r,i=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Ci(ea,1&a),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Au(s,i,0,null),e=Nu(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Al(n),t.memoizedState=Nl,e):Ml(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,l){if(n)return 256&t.flags?(t.flags&=-257,Il(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Au({mode:"visible",children:r.children},i,0,null),(a=Nu(a,i,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Al(l),t.memoizedState=Nl,a);if(0===(1&t.mode))return Il(e,t,l,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Il(e,t,l,r=cl(a=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=Ps)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|l))?0:i)&&i!==a.retryLane&&(a.retryLane=i,No(e,i),nu(r,e,i,-1))}return mu(),Il(e,t,l,r=cl(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tu.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ui(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Gi[Xi++]=Qi,Gi[Xi++]=qi,Gi[Xi++]=Ki,Qi=e.id,qi=e.overflow,Ki=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(l){l=i.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Du(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Du(r,l):(l=Nu(l,s,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Al(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Nl,i}return e=(l=e.child).sibling,i=Du(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ml(e,t){return(t=Au({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Il(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Po(e.return,t,n)}function Ul(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),As|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Du(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Du(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Oi(t.type)&&Di(),Yl(t),null;case 3:return r=t.stateNode,qo(),ji(Pi),ji(_i),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(au(oo),oo=null))),Ol(e,t),Yl(t),null;case 5:Zo(t);var i=Ko(Xo.current);if(n=t.type,null!==e&&null!=t.stateNode)Dl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Yl(t),null}if(e=Ko(Yo.current),fo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fi]=t,r[pi]=a,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)Ir(Nr[i],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":Q(r,a),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ir("invalid",r);break;case"textarea":ie(r,a),Ir("invalid",r)}for(var s in ye(n,a),i=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Ir("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fi]=t,e[pi]=r,zl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),i=r;break;case"iframe":case"object":case"embed":Ir("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)Ir(Nr[i],e);i=r;break;case"source":Ir("error",e),i=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),i=r;break;case"details":Ir("toggle",e),i=r;break;case"input":Q(e,r),i=K(e,r),Ir("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ir("invalid",e)}for(a in ye(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Ir("scroll",e):null!=c&&x(e,a,c,s))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Ll(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Ko(Xo.current),Ko(Yo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Yl(t),null;case 13:if(ji(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,a=!1;else if(a=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[fi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),a=!1}else null!==oo&&(au(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ls&&(Ls=3):mu())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return qo(),Ol(e,t),null===e&&Br(t.stateNode.containerInfo),Yl(t),null;case 10:return _o(t.type._context),Yl(t),null;case 19:if(ji(ea),null===(a=t.memoizedState))return Yl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==Ls||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&qe()>Bs&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!io)return Yl(t),null}else 2*qe()-a.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=qe(),t.sibling=null,n=ea.current,Ci(ea,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Os)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Xl(e,t){switch(to(t),t.tag){case 1:return Oi(t.type)&&Di(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qo(),ji(Pi),ji(_i),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(ji(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return ji(ea),null;case 4:return qo(),null;case 10:return _o(t.type._context),null;case 22:case 23:return du(),null;default:return null}}zl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ol=function(){},Dl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ko(Yo.current);var o,a=null;switch(n){case"input":i=K(e,i),r=K(e,r),a=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Ir("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ll=function(e,t,n,r){n!==r&&(t.flags|=4)};var Kl=!1,Ql=!1,ql="function"===typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&es(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(l){}switch(n.tag){case 5:Ql||Zl(n,t);case 6:var r=cs,i=ds;cs=null,fs(e,t,n),ds=i,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Bt(e)):si(cs,n.stateNode));break;case 4:r=cs,i=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=i;break;case 0:case 11:case 14:case 15:if(!Ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&es(n,t,a),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!Ql&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Eu(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Ql=(r=Ql)||null!==n.memoizedState,fs(e,t,n),Ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new ql),t.forEach((function(t){var r=_u.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(a,l,i),cs=null,ds=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Eu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Eu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&q(i,a),xe(s,l);var c=xe(s,a);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):x(i,d,f,c)}switch(s){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[pi]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Us=qe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Ql=(c=Ql)||d,ms(t,e),Ql=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Jl=e,d=e.child;null!==d;){for(f=Jl=d;null!==Jl;){switch(h=(p=Jl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Jl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),us(e,ls(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(o(161))}}catch(l){Eu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Jl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Jl;){var i=Jl,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Kl;if(!a){var l=i.alternate,s=null!==l&&null!==l.memoizedState||Ql;l=Kl;var u=Ql;if(Kl=a,(Ql=s)&&!u)for(Jl=i;null!==Jl;)s=(a=Jl).child,22===a.tag&&null!==a.memoizedState?Ss(i):null!==s?(s.return=a,Jl=s):Ss(i);for(;null!==o;)Jl=o,xs(o,t,n),o=o.sibling;Jl=i,Kl=l,Ql=u}bs(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Jl=o):bs(e)}}function bs(e){for(;null!==Jl;){var t=Jl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Ql)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ho(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(o(163))}Ql||512&t.flags&&is(t)}catch(p){Eu(t,t.return,p)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function ws(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function Ss(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Eu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){Eu(t,i,s)}}var o=t.return;try{is(t)}catch(s){Eu(t,o,s)}break;case 5:var a=t.return;try{is(t)}catch(s){Eu(t,a,s)}}}catch(s){Eu(t,t.return,s)}if(t===e){Jl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Jl=l;break}Jl=t.return}}var ks,Es=Math.ceil,js=b.ReactCurrentDispatcher,Cs=b.ReactCurrentOwner,Ts=b.ReactCurrentBatchConfig,_s=0,Ps=null,Rs=null,zs=0,Os=0,Ds=Ei(0),Ls=0,Ns=null,As=0,Fs=0,Ms=0,Is=null,$s=null,Us=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,Ys=null,Gs=!1,Xs=null,Ks=0,Qs=0,qs=null,Js=-1,Zs=0;function eu(){return 0!==(6&_s)?qe():-1!==Js?Js:Js=qe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&_s)&&0!==zs?zs&-zs:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Qt(e.type)}function nu(e,t,n,r){if(50<Qs)throw Qs=0,qs=null,Error(o(185));vt(e,n,r),0!==(2&_s)&&e===Ps||(e===Ps&&(0===(2&_s)&&(Fs|=n),4===Ls&&lu(e,zs)),ru(e,r),1===n&&0===_s&&0===(1&t.mode)&&(Bs=qe()+500,Ii&&Bi()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),l=1<<a,s=i[a];-1===s?0!==(l&n)&&0===(l&r)||(i[a]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Ps?zs:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Ii=!0,Ui(e)}(su.bind(null,e)):Ui(su.bind(null,e)),ai((function(){0===(6&_s)&&Bi()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Js=-1,Zs=0,0!==(6&_s))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?zs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var i=_s;_s|=2;var a=hu();for(Ps===e&&zs===t||(Ws=null,Bs=qe()+500,fu(e,t));;)try{yu();break}catch(s){pu(e,s)}To(),js.current=a,_s=i,null!==Rs?t=0:(Ps=null,zs=0,t=Ls)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t)throw n=Ns,fu(e,0),lu(e,r),ru(e,qe()),n;if(6===t)lu(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lr(o(),i))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gu(e,r))&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t))throw n=Ns,fu(e,0),lu(e,r),ru(e,qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,$s,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-qe())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,$s,Ws),t);break}wu(e,$s,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>i&&(i=l),r&=~a}if(r=i,10<(r=(120>(r=qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Es(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,$s,Ws),r);break}wu(e,$s,Ws);break;default:throw Error(o(329))}}}return ru(e,qe()),e.callbackNode===n?iu.bind(null,e):null}function ou(e,t){var n=Is;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&au(t)),e}function au(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Ms,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&_s))throw Error(o(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,qe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ns,fu(e,0),lu(e,t),ru(e,qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,$s,Ws),ru(e,qe()),null}function uu(e,t){var n=_s;_s|=1;try{return e(t)}finally{0===(_s=n)&&(Bs=qe()+500,Ii&&Bi())}}function cu(e){null!==Xs&&0===Xs.tag&&0===(6&_s)&&Su();var t=_s;_s|=1;var n=Ts.transition,r=xt;try{if(Ts.transition=null,xt=1,e)return e()}finally{xt=r,Ts.transition=n,0===(6&(_s=t))&&Bi()}}function du(){Os=Ds.current,ji(Ds)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Rs)for(n=Rs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Di();break;case 3:qo(),ji(Pi),ji(_i),ra();break;case 5:Zo(r);break;case 4:qo();break;case 13:case 19:ji(ea);break;case 10:_o(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Rs=e=Du(e.current,null),zs=Os=t,Ls=0,Ns=null,Ms=Fs=As=0,$s=Is=null,null!==Oo){for(t=0;t<Oo.length;t++)if(null!==(r=(n=Oo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Oo=null}return e}function pu(e,t){for(;;){var n=Rs;try{if(To(),ia.current=Ja,ca){for(var r=la.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(aa=0,ua=sa=la=null,da=!1,fa=0,Cs.current=null,null===n||null===n.return){Ls=1,Ns=t,Rs=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=zs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(a,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(a,c,t),mu();break e}u=Error(o(426))}else if(io&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),mo(ul(u,s));break e}}a=u=ul(u,s),4!==Ls&&(Ls=2),null===Is?Is=[a]:Is.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,pl(0,u,t));break e;case 1:s=u;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ys||!Ys.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}bu(n)}catch(b){t=b,Rs===n&&null!==n&&(Rs=n=n.return);continue}break}}function hu(){var e=js.current;return js.current=Ja,null===e?Ja:e}function mu(){0!==Ls&&3!==Ls&&2!==Ls||(Ls=4),null===Ps||0===(268435455&As)&&0===(268435455&Fs)||lu(Ps,zs)}function gu(e,t){var n=_s;_s|=2;var r=hu();for(Ps===e&&zs===t||(Ws=null,fu(e,t));;)try{vu();break}catch(i){pu(e,i)}if(To(),_s=n,js.current=r,null!==Rs)throw Error(o(261));return Ps=null,zs=0,Ls}function vu(){for(;null!==Rs;)xu(Rs)}function yu(){for(;null!==Rs&&!Ke();)xu(Rs)}function xu(e){var t=ks(e.alternate,e,Os);e.memoizedProps=e.pendingProps,null===t?bu(e):Rs=t,Cs.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Gl(n,t,Os)))return void(Rs=n)}else{if(null!==(n=Xl(n,t)))return n.flags&=32767,void(Rs=n);if(null===e)return Ls=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===Ls&&(Ls=5)}function wu(e,t,n){var r=xt,i=Ts.transition;try{Ts.transition=null,xt=1,function(e,t,n,r){do{Su()}while(null!==Xs);if(0!==(6&_s))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Ps&&(Rs=Ps=null,zs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Gs||(Gs=!0,Pu(tt,(function(){return Su(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Ts.transition,Ts.transition=null;var l=xt;xt=1;var s=_s;_s|=4,Cs.current=null,function(e,t){if(ei=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(s=l+i),f!==a||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===i&&(s=l),p===a&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,ys(n,e,i),Qe(),_s=s,xt=l,Ts.transition=a}else e.current=n;if(Gs&&(Gs=!1,Xs=e,Ks=i),a=e.pendingLanes,0===a&&(Ys=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Ks)&&0!==e.tag&&Su(),a=e.pendingLanes,0!==(1&a)?e===qs?Qs++:(Qs=0,qs=e):Qs=0,Bi()}(e,t,n,r)}finally{Ts.transition=i,xt=r}return null}function Su(){if(null!==Xs){var e=bt(Ks),t=Ts.transition,n=xt;try{if(Ts.transition=null,xt=16>e?16:e,null===Xs)var r=!1;else{if(e=Xs,Xs=null,Ks=0,0!==(6&_s))throw Error(o(331));var i=_s;for(_s|=4,Jl=e.current;null!==Jl;){var a=Jl,l=a.child;if(0!==(16&Jl.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Jl=c;null!==Jl;){var d=Jl;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var f=d.child;if(null!==f)f.return=d,Jl=f;else for(;null!==Jl;){var p=(d=Jl).sibling,h=d.return;if(os(d),d===c){Jl=null;break}if(null!==p){p.return=h,Jl=p;break}Jl=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Jl=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,Jl=l;else e:for(;null!==Jl;){if(0!==(2048&(a=Jl).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Jl=y;break e}Jl=a.return}}var x=e.current;for(Jl=x;null!==Jl;){var b=(l=Jl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Jl=b;else e:for(l=x;null!==Jl;){if(0!==(2048&(s=Jl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){Eu(s,s.return,S)}if(s===l){Jl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Jl=w;break e}Jl=s.return}}if(_s=i,Bi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{xt=n,Ts.transition=t}}return!1}function ku(e,t,n){e=$o(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=$o(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function ju(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(zs&n)===n&&(4===Ls||3===Ls&&(130023424&zs)===zs&&500>qe()-Us?fu(e,0):Ms|=n),ru(e,t)}function Cu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=No(e,t))&&(vt(e,t,n),ru(e,n))}function Tu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Cu(e,n)}function _u(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Cu(e,n)}function Pu(e,t){return Ge(e,t)}function Ru(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zu(e,t,n,r){return new Ru(e,t,n,r)}function Ou(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Du(e,t){var n=e.alternate;return null===n?((n=zu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Lu(e,t,n,r,i,a){var l=2;if(r=e,"function"===typeof e)Ou(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case k:return Nu(n.children,i,a,t);case E:l=8,i|=8;break;case j:return(e=zu(12,n,t,2|i)).elementType=j,e.lanes=a,e;case P:return(e=zu(13,n,t,i)).elementType=P,e.lanes=a,e;case R:return(e=zu(19,n,t,i)).elementType=R,e.lanes=a,e;case D:return Au(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case C:l=10;break e;case T:l=9;break e;case _:l=11;break e;case z:l=14;break e;case O:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=zu(l,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Nu(e,t,n,r){return(e=zu(7,e,r,t)).lanes=n,e}function Au(e,t,n,r){return(e=zu(22,e,r,t)).elementType=D,e.lanes=n,e.stateNode={isHidden:!1},e}function Fu(e,t,n){return(e=zu(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=zu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Iu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,i,o,a,l,s){return e=new Iu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=zu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fo(o),e}function Uu(e){if(!e)return Ti;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oi(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Oi(n))return Ni(e,n,t)}return t}function Bu(e,t,n,r,i,o,a,l,s){return(e=$u(n,r,!0,e,0,o,0,l,s)).context=Uu(null),n=e.current,(o=Io(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,$o(n,o,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function Wu(e,t,n,r){var i=t.current,o=eu(),a=tu(i);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Io(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$o(i,t,a))&&(nu(e,i,a,o),Uo(e,i,a)),a}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}ks=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ho();break;case 5:Jo(t);break;case 1:Oi(t.type)&&Ai(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(ko,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Fl(e,t,n):(Ci(ea,1&ea.current),null!==(e=Hl(e,t,n))?e.sibling:null);Ci(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Hl(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,io&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var i=zi(t,_i.current);Ro(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oi(r)?(a=!0,Ai(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Fo(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=_l(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Ou(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===z)return 14}return 2}(r),e=nl(r,e),i){case 0:t=Cl(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Pl(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Mo(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Rl(e,t,r,n,i=ul(Error(o(423)),t));break e}if(r!==i){t=Rl(e,t,r,n,i=ul(Error(o(424)),t));break e}for(ro=ui(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Hl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,ni(r,i)?l=null:null!==a&&ni(r,a)&&(t.flags|=32),jl(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Fl(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,Ci(ko,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===i.children&&!Pi.current){t=Hl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Io(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Po(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Po(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}bl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ro(t,n),r=r(i=zo(i)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),Sl(e,t,r,i=nl(r.type,i),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Wl(e,t),t.tag=1,Oi(r)?(e=!0,Ai(t)):e=!1,Ro(t,n),al(t,r,i),sl(t,r,i,n),_l(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return El(e,t,n)}throw Error(o(156,t.tag))};var Gu="function"===typeof reportError?reportError:function(e){console.error(e)};function Xu(e){this._internalRoot=e}function Ku(e){this._internalRoot=e}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var l=i;i=function(){var e=Hu(a);l.call(e)}}Wu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hu(a);o.call(e)}}var a=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=a,e[hi]=a.current,Br(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=s,e[hi]=s.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,i,r);return Hu(a)}Ku.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wu(e,t,null,null)},Ku.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[hi]=null}},Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&0!==t&&t<Dt[n].priority;n++);Dt.splice(n,0,e),0===n&&Ft(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,qe()),0===(6&_s)&&(Bs=qe()+500,Bi()))}break;case 13:cu((function(){var t=No(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Yu(e,1)}},St=function(e){if(13===e.tag){var t=No(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=No(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},Et=function(){return xt},jt=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));G(r),J(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[xi,bi,wi,Ce,Te,uu]},tc={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Qu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Qu(e))throw Error(o(299));var n=!1,r="",i=Gu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Br(8===e.nodeType?e.parentNode:e),new Xu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!qu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",l=Gu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,i,0,a,l),e[hi]=t.current,Br(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ku(t)},t.render=function(e,t,n){if(!qu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!qu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},777:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,n){const i=!(0,r.isNum)(e.lastX),a=o(e);return i?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}},t.createDraggableData=function(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:a}=e.props;a="string"===typeof a?a:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(a);const l=o(e);if("string"===typeof a){const{ownerDocument:e}=l,t=e.defaultView;let n;if(n="parent"===a?l.parentNode:e.querySelector(a),!(n instanceof t.HTMLElement))throw new Error('Bounds selector "'+a+'" could not find an element.');const o=n,s=t.getComputedStyle(l),u=t.getComputedStyle(o);a={left:-l.offsetLeft+(0,r.int)(u.paddingLeft)+(0,r.int)(s.marginLeft),top:-l.offsetTop+(0,r.int)(u.paddingTop)+(0,r.int)(s.marginTop),right:(0,i.innerWidth)(o)-(0,i.outerWidth)(l)-l.offsetLeft+(0,r.int)(u.paddingRight)-(0,r.int)(s.marginRight),bottom:(0,i.innerHeight)(o)-(0,i.outerHeight)(l)-l.offsetTop+(0,r.int)(u.paddingBottom)-(0,r.int)(s.marginBottom)}}(0,r.isNum)(a.right)&&(t=Math.min(t,a.right));(0,r.isNum)(a.bottom)&&(n=Math.min(n,a.bottom));(0,r.isNum)(a.left)&&(t=Math.max(t,a.left));(0,r.isNum)(a.top)&&(n=Math.max(n,a.top));return[t,n]},t.getControlPosition=function(e,t,n){const r="number"===typeof t?(0,i.getTouch)(e,t):null;if("number"===typeof t&&!r)return null;const a=o(n),l=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,i.offsetXYFromParent)(r||e,l,n.props.scale)},t.snapToGrid=function(e,t,n){const r=Math.round(t/e[0])*e[0],i=Math.round(n/e[1])*e[1];return[r,i]};var r=n(447),i=n(212);function o(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},929:(e,t,n)=>{"use strict";const{default:r,DraggableCore:i}=n(136);e.exports=r,e.exports.default=r,e.exports.DraggableCore=i},935:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(43)),i=c(n(173)),o=c(n(950)),a=n(212),l=n(777),s=n(447),u=c(n(387));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={start:"touchstart",move:"touchmove",stop:"touchend"},h={start:"mousedown",move:"mousemove",stop:"mouseup"};let m=h;class g extends r.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"===typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!(0,a.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,a.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const r=(0,a.getTouchIdentifier)(e);this.touchIdentifier=r;const i=(0,l.getControlPosition)(e,r,this);if(null==i)return;const{x:o,y:s}=i,c=(0,l.createCoreData)(this,o,s);(0,u.default)("DraggableCore: handleDragStart: %j",c),(0,u.default)("calling",this.props.onStart);!1!==this.props.onStart(e,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(n),this.dragging=!0,this.lastX=o,this.lastY=s,(0,a.addEvent)(n,m.move,this.handleDrag),(0,a.addEvent)(n,m.stop,this.handleDragStop))})),f(this,"handleDrag",(e=>{const t=(0,l.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=(0,l.snapToGrid)(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}const i=(0,l.createCoreData)(this,n,r);(0,u.default)("DraggableCore: handleDrag: %j",i);if(!1!==this.props.onDrag(e,i)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(o){const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}})),f(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,l.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=(0,l.snapToGrid)(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}const i=(0,l.createCoreData)(this,n,r);if(!1===this.props.onStop(e,i)||!1===this.mounted)return!1;const o=this.findDOMNode();o&&this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(o.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,o&&((0,u.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(o.ownerDocument,m.move,this.handleDrag),(0,a.removeEvent)(o.ownerDocument,m.stop,this.handleDragStop))})),f(this,"onMouseDown",(e=>(m=h,this.handleDragStart(e)))),f(this,"onMouseUp",(e=>(m=h,this.handleDragStop(e)))),f(this,"onTouchStart",(e=>(m=p,this.handleDragStart(e)))),f(this,"onTouchEnd",(e=>(m=p,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,a.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,a.removeEvent)(t,h.move,this.handleDrag),(0,a.removeEvent)(t,p.move,this.handleDrag),(0,a.removeEvent)(t,h.stop,this.handleDragStop),(0,a.removeEvent)(t,p.stop,this.handleDragStop),(0,a.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:o.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}t.default=g,f(g,"displayName","DraggableCore"),f(g,"propTypes",{allowAnyClick:i.default.bool,children:i.default.node.isRequired,disabled:i.default.bool,enableUserSelectHack:i.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:i.default.arrayOf(i.default.number),handle:i.default.string,cancel:i.default.string,nodeRef:i.default.object,onStart:i.default.func,onDrag:i.default.func,onStop:i.default.func,onMouseDown:i.default.func,scale:i.default.number,className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe}),f(g,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function i(){return d((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return s("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function o(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function a(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:c=!1}=i,d=a.history,f="POP",p=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:f,location:y.location,delta:t})}function v(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let y={get action(){return f},get location(){return e(a,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(r,g),p=e,()=>{a.removeEventListener(r,g),p=null}},createHref:e=>t(a,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=s(y.location,e,t);n&&n(r,e),h=m()+1;let i=l(r,h),o=y.createHref(r);try{d.pushState(i,"",o)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;a.location.assign(o)}c&&p&&p({action:f,location:y.location,delta:1})},replace:function(e,t){f="REPLACE";let r=s(y.location,e,t);n&&n(r,e),h=m();let i=l(r,h),o=y.createHref(r);d.replaceState(i,"",o),c&&p&&p({action:f,location:y.location,delta:0})},go:e=>d.go(e)};return y}function f(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let i=T(("string"===typeof t?c(t):t).pathname||"/",n);if(null==i)return null;let o=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let l=0;null==a&&l<o.length;++l){let e=C(i);a=E(o[l],e,r)}return a}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,a)=>{let l={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=O([r,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),h(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:k(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))i(e,t,n);else i(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=m(r.join("/")),l=[];return l.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,x=1,b=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=y),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?x:b)),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=j({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=j({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:O([o,c.pathname]),pathnameBase:D(O([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=O([o,c.pathnameBase]))}return a}function j(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];a("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const a=s[n];return e[r]=i&&!a?void 0:(a||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function C(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return a(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e){let t=P(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function z(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=c(e):(r={...e},o(!r.pathname||!r.pathname.includes("?"),_("?","pathname","search",r)),o(!r.pathname||!r.pathname.includes("#"),_("#","pathname","hash",r)),o(!r.search||!r.search.includes("#"),_("#","search","hash",r)));let a,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?c(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:L(r),hash:N(i)}}(r,a),d=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}var O=e=>e.join("/").replace(/\/\/+/g,"/"),D=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",N=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function A(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var F=["POST","PUT","PATCH","DELETE"],M=(new Set(F),["GET",...F]);new Set(M),Symbol("ResetLoaderData");var I=e.createContext(null);I.displayName="DataRouter";var $=e.createContext(null);$.displayName="DataRouterState";var U=e.createContext({isTransitioning:!1});U.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var W=e.createContext(null);W.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var V=e.createContext(null);V.displayName="Location";var Y=e.createContext({outlet:null,matches:[],isDataRoute:!1});Y.displayName="Route";var G=e.createContext(null);G.displayName="RouteError";function X(){return null!=e.useContext(V)}function K(){return o(X(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(V).location}var Q="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q(t){e.useContext(H).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(Y);return t?function(){let{router:t}=le("useNavigate"),n=ue("useNavigate"),r=e.useRef(!1);q((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(r.current,Q),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){o(X(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(I),{basename:n,navigator:r}=e.useContext(H),{matches:i}=e.useContext(Y),{pathname:l}=K(),s=JSON.stringify(R(i)),u=e.useRef(!1);q((()=>{u.current=!0}));let c=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(u.current,Q),!u.current)return;if("number"===typeof e)return void r.go(e);let o=z(e,JSON.parse(s),l,"path"===i.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:O([n,o.pathname])),(i.replace?r.replace:r.push)(o,i.state,i)}),[n,r,s,l,t]);return c}()}e.createContext(null);function Z(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(Y),{pathname:i}=K(),o=JSON.stringify(R(r));return e.useMemo((()=>z(t,JSON.parse(o),i,"path"===n)),[t,o,i,n])}function ee(t,n,r,i){o(X(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:s}=e.useContext(H),{matches:u}=e.useContext(Y),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";fe(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=K();if(n){let e="string"===typeof n?c(n):n;o("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let x=v.pathname||"/",b=x;if("/"!==m){let e=m.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!s&&r&&r.matches&&r.matches.length>0?r.matches:f(t,{pathname:b});a(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),a(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=oe(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:O([m,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:O([m,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,i);return n&&S?e.createElement(V.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function te(){let t=ce(),n=A(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,l)}var ne=e.createElement(te,null),re=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Y.Provider,{value:this.props.routeContext},e.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:n,match:r,children:i}=t,o=e.useContext(I);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(Y.Provider,{value:n},i)}function oe(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,a=r?.errors;if(null!=a){let e=i.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let l=!1,s=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){l=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight(((t,o,u)=>{let c,d=!1,f=null,p=null;r&&(c=a&&o.route.id?a[o.route.id]:void 0,f=o.route.errorElement||ne,l&&(s<0&&0===u?(fe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===u&&(d=!0,p=o.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,u+1)),m=()=>{let n;return n=c?f:d?p:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(ie,{match:o,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===u)?e.createElement(re,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function ae(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function le(t){let n=e.useContext(I);return o(n,ae(t)),n}function se(t){let n=e.useContext($);return o(n,ae(t)),n}function ue(t){let n=function(t){let n=e.useContext(Y);return o(n,ae(t)),n}(t),r=n.matches[n.matches.length-1];return o(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ce(){let t=e.useContext(G),n=se("useRouteError"),r=ue("useRouteError");return void 0!==t?t:n.errors?.[r]}var de={};function fe(e,t,n){t||de[e]||(de[e]=!0,a(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ee(t,void 0,r,n)}));function pe(e){o(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function he(t){let{basename:n="/",children:r=null,location:i,navigationType:l="POP",navigator:s,static:u=!1}=t;o(!X(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),f=e.useMemo((()=>({basename:d,navigator:s,static:u,future:{}})),[d,s,u]);"string"===typeof i&&(i=c(i));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:v="default"}=i,y=e.useMemo((()=>{let e=T(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:l}}),[d,p,h,m,g,v,l]);return a(null!=y,`<Router basename="${d}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(H.Provider,{value:f},e.createElement(V.Provider,{children:r,value:y}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}e.Component;function ge(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let a=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,ge(t.props.children,a));o(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),o(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=ge(t.props.children,a)),r.push(l)})),r}var ve="get",ye="application/x-www-form-urlencoded";function xe(e){return null!=e&&"string"===typeof e.tagName}var be=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Se(e){return null==e||we.has(e)?e:(a(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ye}"`),null)}function ke(e,t){let n,r,i,o,a;if(xe(l=e)&&"form"===l.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?T(a,t):null,n=e.getAttribute("method")||ve,i=Se(e.getAttribute("enctype"))||ye,o=new FormData(e)}else if(function(e){return xe(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return xe(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?T(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ve,i=Se(e.getAttribute("formenctype"))||Se(a.getAttribute("enctype"))||ye,o=new FormData(a,e),!function(){if(null===be)try{new FormData(document.createElement("form"),0),be=!1}catch(e){be=!0}return be}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(xe(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ve,r=null,i=ye,a=e}var l;return o&&"text/plain"===i&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}function Ee(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function je(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function Ce(e){return null!=e&&"string"===typeof e.page}function Te(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function _e(e,t,n,r,i,o){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>a(e,t)||l(e,t))):"data"===o?t.filter(((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(a(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Pe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Re(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!Ce(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(o)||(n.add(o),e.push({key:o,link:i})),e}),[])}function ze(e){return{__html:e}}Symbol("SingleFetchRedirect");function Oe(e){let t="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}e.Component;function De(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(A(n))return e.createElement(Le,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Le,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),o)}function Le(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:o}=t,{routeModules:a}=Ie();return a.root?.Layout&&!i?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(Ye,null):null)))}function Ne(e){return!0===e}function Ae(){let t=e.useContext(I);return Ee(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Fe(){let t=e.useContext($);return Ee(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Me=e.createContext(void 0);function Ie(){let t=e.useContext(Me);return Ee(t,"You must render this element inside a <HydratedRouter> element"),t}function $e(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ue(e,t,n){if(n&&!Ve)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Be(t){let{page:n,...r}=t,{router:i}=Ae(),o=e.useMemo((()=>f(i.routes,n,i.basename)),[i.routes,n,i.basename]);return o?e.createElement(He,{page:n,matches:o,...r}):null}function We(t){let{manifest:n,routeModules:r}=Ie(),[i,o]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await je(r,n);return e.links?e.links():[]}return[]})));return Re(r.flat(1).filter(Te).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||o(t)})),()=>{e=!0}}),[t,n,r]),i}function He(t){let{page:n,matches:r,...i}=t,o=K(),{manifest:a,routeModules:l}=Ie(),{loaderData:s,matches:u}=Fe(),c=e.useMemo((()=>_e(n,r,u,a,o,"data")),[n,r,u,a,o]),d=e.useMemo((()=>_e(n,r,u,a,o,"assets")),[n,r,u,a,o]),f=e.useMemo((()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!c.some((e=>e.route.id===n.route.id))&&n.route.id in s&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Oe(n);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[s,o,a,c,r,n,l]),p=e.useMemo((()=>Pe(d,a)),[d,a]),h=We(d);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),p.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),h.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Me.displayName="FrameworkContext";var Ve=!1;function Ye(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:o,renderMeta:a}=Ie(),{router:l,static:s,staticContext:u}=Ae(),{matches:c}=Fe(),d=Ne(o);a&&(a.didRenderScripts=!0);let p=Ue(c,null,i);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let i=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=s?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];Ee(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:a,hydrateFallbackModule:l,module:s}=i,u=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:s,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(s)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(r.pop();r.length>0;)i.push(`/${r.join("/")}`),r.pop();i.forEach((e=>{let r=f(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(o),type:"module",async:!0}))}),[]),m=Ve?[]:n.entry.imports.concat(Pe(p,n,{includeHydrateFallback:!0}));return Ve?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),h);var g}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Xe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Xe&&(window.__reactRouterVersion="7.2.0")}catch(cu){}function Ke(t){let{basename:n,children:r,window:o}=t,a=e.useRef();null==a.current&&(a.current=i({window:o,v5Compat:!0}));let l=a.current,[s,u]=e.useState({action:l.action,location:l.location}),c=e.useCallback((t=>{e.startTransition((()=>u(t)))}),[u]);return e.useLayoutEffect((()=>l.listen(c)),[l,c]),e.createElement(he,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qe=e.forwardRef((function(t,n){let r,{onClick:i,discover:l="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:x}=e.useContext(H),b="string"===typeof m&&Qe.test(m),w=!1;if("string"===typeof m&&b&&(r=m,Xe))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=T(t.pathname,x);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(cu){a(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(X(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(H),{hash:a,pathname:l,search:s}=Z(t,{relative:n}),u=l;return"/"!==r&&(u="/"===l?r:O([r,l])),i.createHref({pathname:u,search:s,hash:a})}(m,{relative:c}),[k,E,j]=function(t,n){let r=e.useContext(Me),[i,o]=e.useState(!1),[a,l]=e.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&l(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let h=()=>{o(!0)},m=()=>{o(!1),l(!1)};return r?"intent"!==t?[a,p,{}]:[a,p,{onFocus:$e(s,h),onBlur:$e(u,m),onMouseEnter:$e(c,h),onMouseLeave:$e(d,m),onTouchStart:$e(f,h)}]:[!1,p,{}]}(s,y),C=function(t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=J(),c=K(),d=Z(t,{relative:a});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:u(c)===u(d);s(t,{replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:l})}}),[c,s,d,r,i,n,t,o,a,l])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:c,viewTransition:v});let _=e.createElement("a",{...y,...j,href:r||S,onClick:w||d?i:function(e){i&&i(e),e.defaultPrevented||C(e)},ref:Ge(n,E),target:h,"data-discover":b||"render"!==l?void 0:"true"});return k&&!b?e.createElement(e.Fragment,null,_,e.createElement(Be,{page:S})):_}));qe.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:l=!1,style:s,to:u,viewTransition:c,children:d,...f}=t,p=Z(u,{relative:f.relative}),h=K(),m=e.useContext($),{navigator:g,basename:v}=e.useContext(H),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(U);o(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=et("useViewTransitionState"),a=Z(t,{relative:n.relative});if(!r.isTransitioning)return!1;let l=T(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=T(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=j(a.pathname,s)||null!=j(a.pathname,l)}(p)&&!0===c,x=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,b=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,x=x.toLowerCase()),w&&v&&(w=T(w,v)||w);const S="/"!==x&&x.endsWith("/")?x.length-1:x.length;let k,E=b===x||!l&&b.startsWith(x)&&"/"===b.charAt(S),C=null!=w&&(w===x||!l&&w.startsWith(x)&&"/"===w.charAt(x.length)),_={isActive:E,isPending:C,isTransitioning:y},P=E?r:void 0;k="function"===typeof a?a(_):[a,E?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let R="function"===typeof s?s(_):s;return e.createElement(qe,{...f,"aria-current":P,className:k,ref:n,style:R,to:u,viewTransition:c},"function"===typeof d?d(_):d)})).displayName="NavLink";var Je=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:a,reloadDocument:l,replace:s,state:c,method:d=ve,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...v}=t,y=rt(),x=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),i=e.useContext(Y);o(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Z(t||".",{relative:n})},s=K();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!a.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:O([r,l.pathname]));return u(l)}(f,{relative:h}),b="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&Qe.test(f);return e.createElement("form",{ref:n,method:b,action:x,onSubmit:l?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:c,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function Ze(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function et(t){let n=e.useContext(I);return o(n,Ze(t)),n}Je.displayName="Form";var tt=0,nt=()=>`__${String(++tt)}__`;function rt(){let{router:t}=et("useSubmit"),{basename:n}=e.useContext(H),r=ue("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:a,encType:l,formData:s,body:u}=ke(e,n);if(!1===i.navigate){let e=i.fetcherKey||nt();await t.fetch(e,r,i.action||o,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var it=function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},it.apply(this,arguments)};Object.create;function ot(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var at=n(324),lt=n.n(at),st="-ms-",ut="-moz-",ct="-webkit-",dt="comm",ft="rule",pt="decl",ht="@keyframes",mt=Math.abs,gt=String.fromCharCode,vt=Object.assign;function yt(e){return e.trim()}function xt(e,t){return(e=t.exec(e))?e[0]:e}function bt(e,t,n){return e.replace(t,n)}function wt(e,t,n){return e.indexOf(t,n)}function St(e,t){return 0|e.charCodeAt(t)}function kt(e,t,n){return e.slice(t,n)}function Et(e){return e.length}function jt(e){return e.length}function Ct(e,t){return t.push(e),e}function Tt(e,t){return e.filter((function(e){return!xt(e,t)}))}var _t=1,Pt=1,Rt=0,zt=0,Ot=0,Dt="";function Lt(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:_t,column:Pt,length:a,return:"",siblings:l}}function Nt(e,t){return vt(Lt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function At(e){for(;e.root;)e=Nt(e.root,{children:[e]});Ct(e,e.siblings)}function Ft(){return Ot=zt>0?St(Dt,--zt):0,Pt--,10===Ot&&(Pt=1,_t--),Ot}function Mt(){return Ot=zt<Rt?St(Dt,zt++):0,Pt++,10===Ot&&(Pt=1,_t++),Ot}function It(){return St(Dt,zt)}function $t(){return zt}function Ut(e,t){return kt(Dt,e,t)}function Bt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return _t=Pt=1,Rt=Et(Dt=e),zt=0,[]}function Ht(e){return Dt="",e}function Vt(e){return yt(Ut(zt-1,Xt(91===e?e+2:40===e?e+1:e)))}function Yt(e){for(;(Ot=It())&&Ot<33;)Mt();return Bt(e)>2||Bt(Ot)>3?"":" "}function Gt(e,t){for(;--t&&Mt()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return Ut(e,$t()+(t<6&&32==It()&&32==Mt()))}function Xt(e){for(;Mt();)switch(Ot){case e:return zt;case 34:case 39:34!==e&&39!==e&&Xt(Ot);break;case 40:41===e&&Xt(e);break;case 92:Mt()}return zt}function Kt(e,t){for(;Mt()&&e+Ot!==57&&(e+Ot!==84||47!==It()););return"/*"+Ut(t,zt-1)+"*"+gt(47===e?e:Mt())}function Qt(e){for(;!Bt(It());)Mt();return Ut(e,zt)}function qt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pt:return e.return=e.return||e.value;case dt:return"";case ht:return e.return=e.value+"{"+qt(e.children,r)+"}";case ft:if(!Et(e.value=e.props.join(",")))return""}return Et(n=qt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zt(e,t,n){switch(function(e,t){return 45^St(e,0)?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}(e,t)){case 5103:return ct+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+e+ut+e+st+e+e;case 5936:switch(St(e,t+11)){case 114:return ct+e+st+bt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ct+e+st+bt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ct+e+st+bt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ct+e+st+e+e;case 6165:return ct+e+st+"flex-"+e+e;case 5187:return ct+e+bt(e,/(\w+).+(:[^]+)/,ct+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return ct+e+st+"flex-item-"+bt(e,/flex-|-self/g,"")+(xt(e,/flex-|baseline/)?"":st+"grid-row-"+bt(e,/flex-|-self/g,""))+e;case 4675:return ct+e+st+"flex-line-pack"+bt(e,/align-content|flex-|-self/g,"")+e;case 5548:return ct+e+st+bt(e,"shrink","negative")+e;case 5292:return ct+e+st+bt(e,"basis","preferred-size")+e;case 6060:return ct+"box-"+bt(e,"-grow","")+ct+e+st+bt(e,"grow","positive")+e;case 4554:return ct+bt(e,/([^-])(transform)/g,"$1"+ct+"$2")+e;case 6187:return bt(bt(bt(e,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),e,"")+e;case 5495:case 3959:return bt(e,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return bt(bt(e,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+e+e;case 4200:if(!xt(e,/flex-|baseline/))return st+"grid-column-align"+kt(e,t)+e;break;case 2592:case 3360:return st+bt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,xt(e.props,/grid-\w+-end/)}))?~wt(e+(n=n[t].value),"span",0)?e:st+bt(e,"-start","")+e+st+"grid-row-span:"+(~wt(n,"span",0)?xt(n,/\d+/):+xt(n,/\d+/)-+xt(e,/\d+/))+";":st+bt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return xt(e.props,/grid-\w+-start/)}))?e:st+bt(bt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return bt(e,/(.+)-inline(.+)/,ct+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Et(e)-1-t>6)switch(St(e,t+1)){case 109:if(45!==St(e,t+4))break;case 102:return bt(e,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+ut+(108==St(e,t+3)?"$3":"$2-$3"))+e;case 115:return~wt(e,"stretch",0)?Zt(bt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return bt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,l){return st+n+":"+r+l+(i?st+n+"-span:"+(o?a:+a-+r)+l:"")+e}));case 4949:if(121===St(e,t+6))return bt(e,":",":"+ct)+e;break;case 6444:switch(St(e,45===St(e,14)?18:11)){case 120:return bt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ct+(45===St(e,14)?"inline-":"")+"box$3$1"+ct+"$2$3$1"+st+"$2box$3")+e;case 100:return bt(e,":",":"+st)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(e,"scroll-","scroll-snap-")+e}return e}function en(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pt:return void(e.return=Zt(e.value,e.length,n));case ht:return qt([Nt(e,{value:bt(e.value,"@","@"+ct)})],r);case ft:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(xt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":At(Nt(e,{props:[bt(t,/:(read-\w+)/,":-moz-$1")]})),At(Nt(e,{props:[t]})),vt(e,{props:Tt(n,r)});break;case"::placeholder":At(Nt(e,{props:[bt(t,/:(plac\w+)/,":"+ct+"input-$1")]})),At(Nt(e,{props:[bt(t,/:(plac\w+)/,":-moz-$1")]})),At(Nt(e,{props:[bt(t,/:(plac\w+)/,st+"input-$1")]})),At(Nt(e,{props:[t]})),vt(e,{props:Tt(n,r)})}return""}))}}function tn(e){return Ht(nn("",null,null,null,[""],e=Wt(e),0,[0],e))}function nn(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,f=0,p=0,h=0,m=1,g=1,v=1,y=0,x="",b=i,w=o,S=r,k=x;g;)switch(h=y,y=Mt()){case 40:if(108!=h&&58==St(k,d-1)){-1!=wt(k+=bt(Vt(y),"&","&\f"),"&\f",mt(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Vt(y);break;case 9:case 10:case 13:case 32:k+=Yt(h);break;case 92:k+=Gt($t()-1,7);continue;case 47:switch(It()){case 42:case 47:Ct(on(Kt(Mt(),$t()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[u++]=Et(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=bt(k,/\f/g,"")),p>0&&Et(k)-d&&Ct(p>32?an(k+";",r,n,d-1,s):an(bt(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Ct(S=rn(k,t,n,u,c,i,l,x,b=[],w=[],d,o),o),123===y)if(0===c)nn(k,t,S,S,b,o,d,l,w);else switch(99===f&&110===St(k,3)?100:f){case 100:case 108:case 109:case 115:nn(e,S,S,r&&Ct(rn(e,S,S,0,0,i,l,x,i,b=[],d,w),w),i,w,d,l,r?b:w);break;default:nn(k,S,S,S,[""],w,0,l,w)}}u=c=p=0,m=v=1,x=k="",d=a;break;case 58:d=1+Et(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Ft())continue;switch(k+=gt(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:l[u++]=(Et(k)-1)*v,v=1;break;case 64:45===It()&&(k+=Vt(Mt())),f=It(),c=d=Et(x=k+=Qt($t())),y++;break;case 45:45===h&&2==Et(k)&&(m=0)}}return o}function rn(e,t,n,r,i,o,a,l,s,u,c,d){for(var f=i-1,p=0===i?o:[""],h=jt(p),m=0,g=0,v=0;m<r;++m)for(var y=0,x=kt(e,f+1,f=mt(g=a[m])),b=e;y<h;++y)(b=yt(g>0?p[y]+" "+x:bt(x,/&\f/g,p[y])))&&(s[v++]=b);return Lt(e,t,n,0===i?ft:l,s,u,c,d)}function on(e,t,n,r){return Lt(e,t,n,dt,gt(Ot),kt(e,2,-2),0,r)}function an(e,t,n,r,i){return Lt(e,t,n,pt,kt(e,0,r),kt(e,r+1,-1),r,i)}var ln={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",un="active",cn="data-styled-version",dn="6.1.15",fn="/*!sc*/\n",pn="undefined"!=typeof window&&"HTMLElement"in window,hn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),mn={},gn=(new Set,Object.freeze([])),vn=Object.freeze({});function yn(e,t,n){return void 0===n&&(n=vn),e.theme!==n.theme&&e.theme||t||n.theme}var xn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wn=/(^-|-$)/g;function Sn(e){return e.replace(bn,"-").replace(wn,"")}var kn=/(a)(d)/gi,En=function(e){return String.fromCharCode(e+(e>25?39:97))};function jn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=En(t%52)+n;return(En(t%52)+n).replace(kn,"$1-$2")}var Cn,Tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},_n=function(e){return Tn(5381,e)};function Pn(e){return jn(_n(e)>>>0)}function Rn(e){return e.displayName||e.name||"Component"}function zn(e){return"string"==typeof e&&!0}var On="function"==typeof Symbol&&Symbol.for,Dn=On?Symbol.for("react.memo"):60115,Ln=On?Symbol.for("react.forward_ref"):60112,Nn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},An={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mn=((Cn={})[Ln]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cn[Dn]=Fn,Cn);function In(e){return("type"in(t=e)&&t.type.$$typeof)===Dn?Fn:"$$typeof"in e?Mn[e.$$typeof]:Nn;var t}var $n=Object.defineProperty,Un=Object.getOwnPropertyNames,Bn=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Hn=Object.getPrototypeOf,Vn=Object.prototype;function Yn(e,t,n){if("string"!=typeof t){if(Vn){var r=Hn(t);r&&r!==Vn&&Yn(e,r,n)}var i=Un(t);Bn&&(i=i.concat(Bn(t)));for(var o=In(e),a=In(t),l=0;l<i.length;++l){var s=i[l];if(!(s in An||n&&n[s]||a&&s in a||o&&s in o)){var u=Wn(t,s);try{$n(e,s,u)}catch(e){}}}}return e}function Gn(e){return"function"==typeof e}function Xn(e){return"object"==typeof e&&"styledComponentId"in e}function Kn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function qn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Jn(e,t,n){if(void 0===n&&(n=!1),!n&&!qn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Jn(e[r],t[r]);else if(qn(t))for(var r in t)e[r]=Jn(e[r],t[r]);return e}function Zn(e,t){Object.defineProperty(e,"toString",{value:t})}function er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw er(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(fn);return t},e}(),nr=new Map,rr=new Map,ir=1,or=function(e){if(nr.has(e))return nr.get(e);for(;rr.has(ir);)ir++;var t=ir++;return nr.set(e,t),rr.set(t,e),t},ar=function(e,t){ir=t+1,nr.set(e,t),rr.set(t,e)},lr="style[".concat(sn,"][").concat(cn,'="').concat(dn,'"]'),sr=new RegExp("^".concat(sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ur=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},cr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fn),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(sr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(ar(c,u),ur(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},dr=function(e){for(var t=document.querySelectorAll(lr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(sn)!==un&&(cr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function fr(){return n.nc}var pr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(sn,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(sn,un),r.setAttribute(cn,dn);var a=fr();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},hr=function(){function e(e){this.element=pr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw er(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mr=function(){function e(e){this.element=pr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vr=pn,yr={isServer:!pn,useCSSOMInjection:!hn},xr=function(){function e(e,t,n){void 0===e&&(e=vn),void 0===t&&(t={});var r=this;this.options=it(it({},yr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pn&&vr&&(vr=!1,dr(this)),Zn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return rr.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var l="".concat(sn,".g").concat(n,'[id="').concat(i,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(fn)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return or(e)},e.prototype.rehydrate=function(){!this.server&&pn&&dr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(it(it({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gr(n):t?new hr(n):new mr(n)}(this.options),new tr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(or(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(or(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(or(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),br=/&/g,wr=/^\s*\/\/.*$/gm;function Sr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Sr(e.children,t)),e}))}function kr(e){var t,n,r,i=void 0===e?vn:e,o=i.options,a=void 0===o?vn:o,l=i.plugins,s=void 0===l?gn:l,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===ft&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(br,n).replace(r,u))})),a.prefix&&c.push(en),c.push(Jt);var d=function(e,i,o,l){void 0===i&&(i=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(wr,""),u=tn(o||i?"".concat(o," ").concat(i," { ").concat(s," }"):s);a.namespace&&(u=Sr(u,a.namespace));var d,f=[];return qt(u,function(e){var t=jt(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||er(15),Tn(e,t.name)}),5381).toString():"",d}var Er=new xr,jr=kr(),Cr=e.createContext({shouldForwardProp:void 0,styleSheet:Er,stylis:jr}),Tr=(Cr.Consumer,e.createContext(void 0));function _r(){return(0,e.useContext)(Cr)}function Pr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],o=_r().styleSheet,a=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return kr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){lt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:a,stylis:l}}),[t.shouldForwardProp,a,l]);return e.createElement(Cr.Provider,{value:s},e.createElement(Tr.Provider,{value:l},t.children))}var Rr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=jr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Zn(this,(function(){throw er(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=jr),this.name+e.hash},e}(),zr=function(e){return e>="A"&&e<="Z"};function Or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dr=function(e){return null==e||!1===e||""===e},Lr=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Dr(o)&&(Array.isArray(o)&&o.isCss||Gn(o)?r.push("".concat(Or(i),":"),o,";"):qn(o)?r.push.apply(r,ot(ot(["".concat(i," {")],Lr(o),!1),["}"],!1)):r.push("".concat(Or(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ln||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nr(e,t,n,r){return Dr(e)?[]:Xn(e)?[".".concat(e.styledComponentId)]:Gn(e)?!Gn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Nr(e(t),t,n,r):e instanceof Rr?n?(e.inject(n,r),[e.getName(r)]):[e]:qn(e)?Lr(e):Array.isArray(e)?Array.prototype.concat.apply(gn,e.map((function(e){return Nr(e,t,n,r)}))):[e.toString()];var i}function Ar(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!Xn(n))return!1}return!0}var Fr=_n(dn),Mr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Ar(e),this.componentId=t,this.baseHash=Tn(Fr,t),this.baseStyle=n,xr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Kn(r,this.staticRulesId);else{var i=Qn(Nr(this.rules,e,t,n)),o=jn(Tn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=Kn(r,o),this.staticRulesId=o}else{for(var l=Tn(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Qn(Nr(c,e,t,n));l=Tn(l,d+u),s+=d}}if(s){var f=jn(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Kn(r,f)}}return r},e}(),Ir=e.createContext(void 0);Ir.Consumer;var $r={};new Set;function Ur(t,n,r){var i=Xn(t),o=t,a=!zn(t),l=n.attrs,s=void 0===l?gn:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Sn(e);$r[n]=($r[n]||0)+1;var r="".concat(n,"-").concat(Pn(dn+n+$r[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return zn(e)?"styled.".concat(e):"Styled(".concat(Rn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Sn(n.displayName),"-").concat(n.componentId):n.componentId||c,h=i&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Mr(r,p,i?o.componentStyle:void 0);function x(t,n){return function(t,n,r){var i=t.attrs,o=t.componentStyle,a=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(Ir),d=_r(),f=t.shouldForwardProp||d.shouldForwardProp,p=yn(n,c,a)||vn,h=function(e,t,n){for(var r,i=it(it({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=Gn(r=e[o])?r(i):r;for(var l in a)i[l]="className"===l?Kn(i[l],a[l]):"style"===l?it(it({},i[l]),a[l]):a[l]}return t.className&&(i.className=Kn(i.className,t.className)),i}(i,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var y=function(e,t){var n=_r();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),x=Kn(l,s);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),g[zn(m)&&!xn.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,e.createElement)(m,g)}(b,t,n)}x.displayName=f;var b=e.forwardRef(x);return b.attrs=h,b.componentStyle=y,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=i?Kn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=p,b.target=i?o.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)Jn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Zn(b,(function(){return".".concat(b.styledComponentId)})),a&&Yn(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Br(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Wr=function(e){return Object.assign(e,{isCss:!0})};function Hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||qn(e))return Wr(Nr(Br(gn,ot([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Nr(r):Wr(Nr(Br(r,t)))}function Vr(e,t,n){if(void 0===n&&(n=vn),!t)throw er(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Hr.apply(void 0,ot([r],i,!1)))};return r.attrs=function(r){return Vr(e,t,it(it({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Vr(e,t,it(it({},n),r))},r}var Yr=function(e){return Vr(Ur,e)},Gr=Yr;xn.forEach((function(e){Gr[e]=Yr(e)}));var Xr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ar(e),xr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Qn(Nr(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&xr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Kr(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Hr.apply(void 0,ot([t],n,!1)),o="sc-global-".concat(Pn(JSON.stringify(i))),a=new Xr(i,o),l=function(t){var n=_r(),r=e.useContext(Ir),i=e.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return s(i,t,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,mn,n,i);else{var o=it(it({},t),{theme:yn(t,r,l.defaultProps)});a.renderStyles(e,o,n,i)}}return e.memo(l)}function Qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Qn(Hr.apply(void 0,ot([e],t,!1))),i=Pn(r);return new Rr(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=fr(),r=Qn([n&&'nonce="'.concat(n,'"'),"".concat(sn,'="true"'),"".concat(cn,'="').concat(dn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw er(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw er(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[sn]="",n[cn]=dn,n.dangerouslySetInnerHTML={__html:r},n),o=fr();return o&&(i.nonce=o),[e.createElement("style",it({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new xr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw er(2);return e.createElement(Pr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw er(3)}})(),"__sc-".concat(sn,"__");const qr=n.p+"static/media/logo.0c8f1b780a9bd49d8d6f.png";var Jr=n(579);const Zr=Gr.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(8px);
`,ei=Gr(qe)`
  display: flex;
  align-items: center;
  gap: 0.1rem;
  text-decoration: none;
  color: white;
`,ti=Gr.img`
  width: 40px;
  height: 40px;
  margin-right: 5px;
  object-fit: contain;
`,ni=Gr.span`
  font-size: 1.5rem;
  font-weight: bold;
  
  &:hover {
    text-decoration: none;
  }
`,ri=Gr.div`
  display: flex;
  gap: 1.5rem;
  z-index: 101;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,ii=Gr(qe)`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.85rem;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  &.active {
    color: rgba(255, 255, 255, 1);
  }
`,oi=Gr.div`
  display: flex;
  align-items: center;
`,ai=Gr.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,li=Gr.div`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  flex-direction: column;
  z-index: 99;
  
  @media (max-width: 768px) {
    display: ${e=>"true"===e["data-isopen"]?"flex":"none"};
  }
`,si=Gr(qe)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;
  transition: color 0.3s;
  text-align: center;
  
  &:hover {
    color: #ccc;
  }
  
  &.active {
    color: #fff;
    font-weight: bold;
  }
`,ui=Gr.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) translateY(-10px);
  background: rgb(15, 15, 15);
  min-width: 280px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  padding: 0.75rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: transparent;
  }
`,ci=Gr.div`
  position: relative;
  display: inline-block;

  &:hover ${ui} {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`,di=Gr(ii)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: ${e=>{let{$isToggleOnly:t}=e;return t?"none":"auto"}};
  
  &::after {
    content: '▼';
    font-size: 0.6rem;
    margin-left: 0.3rem;
    opacity: 0.6;
    transition: transform 0.3s ease;
  }

  ${ci}:hover &::after {
    transform: rotate(180deg);
  }

  &.active {
    color: rgba(255, 255, 255, 1);
  }
`,fi=Gr(qe)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: ${e=>e.$isActive?"#fff":"rgba(255, 255, 255, 0.7)"};
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,pi=Gr.span`
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 12px;
  background: rgba(255, 77, 0, 0.2);
  color: #FF4D00;
  margin-left: 8px;
`,hi=(Gr.div`
  display: flex;
  align-items: center;
`,Gr.a`
  background: none;
  border: none;
  color: white;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  margin-left: 1rem;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,Gr.a`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,Gr.span`
  font-size: 1.5rem;
`),mi=Gr.div`
  padding: 12px 24px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 8px;
  text-align: center;
  font-style: italic;
`;const gi=function(){const t=K(),[n,r]=(0,e.useState)((()=>t.pathname.startsWith("/geo-os")||"/partner-program"===t.pathname?"Geo OS":t.pathname.startsWith("/platform")||t.pathname.includes("operations")?"Platforms":"/manifesto"===t.pathname?"Manifesto":"/"===t.pathname?"Home":"")),[i,o]=(0,e.useState)(!1),[a,l]=(0,e.useState)(null);e.useEffect((()=>{t.pathname.startsWith("/geo-os")||"/partner-program"===t.pathname?r("Geo OS"):t.pathname.startsWith("/platform")||t.pathname.includes("operations")?r("Platforms"):"/manifesto"===t.pathname?r("Manifesto"):"/"===t.pathname?r("Home"):r("")}),[t.pathname]);const s=[{text:"Home",href:"/"},{text:"Geo OS",href:"/geo-os",dropdownItems:[{text:"Overview",href:"/geo-os"},{text:"Partner Program",href:"/partner-program"}]},{text:"Platforms",href:"/platform",dropdownItems:[{text:"Airfield Operations",href:"/platform/airfield-operations",isReady:!0},{text:"Maritime Operations",href:"/platform/maritime-operations",isReady:!1}]},{text:"Manifesto",href:"/manifesto"}],u=e=>{r(e),o(!1),l(null)};return(0,Jr.jsxs)(Jr.Fragment,{children:[(0,Jr.jsxs)(Zr,{children:[(0,Jr.jsxs)(ei,{as:qe,to:"/",children:[(0,Jr.jsx)(ti,{src:qr,alt:"GeoSpatios Logo"}),(0,Jr.jsx)(ni,{children:"GeoSpatios"})]}),(0,Jr.jsx)(ri,{children:s.map(((e,r)=>e.dropdownItems?(0,Jr.jsxs)(ci,{children:[(0,Jr.jsx)(di,{as:"div",onClick:()=>{return t=e.text,void l(a===t?null:t);var t},className:n===e.text?"active":"",children:e.text}),(0,Jr.jsxs)(ui,{$isOpen:a===e.text,children:[e.dropdownItems.map(((n,r)=>(0,Jr.jsxs)(fi,{to:n.href,onClick:()=>{l(null),u(e.text)},$isActive:t.pathname===n.href,children:[n.text,!1===n.isReady&&(0,Jr.jsx)(pi,{children:"Coming Soon"})]},r))),"Platforms"===e.text&&(0,Jr.jsx)(mi,{children:"More sectors coming soon..."})]})]},r):(0,Jr.jsx)(ii,{to:e.href,className:n===e.text?"active":"",onClick:()=>u(e.text),children:e.text},r)))}),(0,Jr.jsx)(oi,{children:(0,Jr.jsx)(ii,{to:"/careers",children:"Careers"})}),(0,Jr.jsx)(ai,{onClick:()=>o(!i),children:(0,Jr.jsx)(hi,{children:"\u2630"})})]}),(0,Jr.jsx)(li,{"data-isopen":i.toString(),children:s.map(((t,r)=>(0,Jr.jsxs)(e.Fragment,{children:[!t.isToggleOnly&&(0,Jr.jsx)(si,{to:t.href,className:n===t.text?"active":"",onClick:()=>u(t.text),children:t.text}),t.dropdownItems&&i&&t.dropdownItems.map(((e,n)=>(0,Jr.jsx)(si,{to:e.href,style:{paddingLeft:t.isToggleOnly?"1rem":"2rem"},onClick:()=>u(t.text),children:e.text},n)))]},r)))})]})};var vi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yi=e.createContext&&e.createContext(vi),xi=["attr","size","title"];function bi(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}function Si(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ki(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Si(Object(n),!0).forEach((function(t){Ei(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Si(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ei(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(t){return t&&t.map(((t,n)=>e.createElement(t.tag,ki({key:n},t.attr),ji(t.child))))}function Ci(t){return n=>e.createElement(Ti,wi({attr:ki({},t.attr)},n),ji(t.child))}function Ti(t){var n=n=>{var r,{attr:i,size:o,title:a}=t,l=bi(t,xi),s=o||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",wi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,l,{className:r,style:ki(ki({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&e.createElement("title",null,a),t.children)};return void 0!==yi?e.createElement(yi.Consumer,null,(e=>n(e))):n(vi)}function _i(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Pi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(e)}function Ri(e){return Ci({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function zi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function Oi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"},child:[]}]})(e)}function Di(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Li(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}const Ni=Gr.footer`
  width: 100%;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(10px);
  padding: 2rem 5%;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Ai=Gr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Fi=Gr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }
`,Mi=Gr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`,Ii=Gr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,$i=Gr.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,Ui=Gr.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`,Bi=Gr.div`
  display: flex;
  gap: 6rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`,Wi=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.75rem;
    font-weight: 500;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`,Hi=Gr(qe)`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.85rem;
  letter-spacing: 0.3px;
  
  &:hover {
    color: white;
  }
`,Vi=Gr.div`
  display: flex;
  gap: 1rem;
`,Yi=Gr.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateY(-3px);
  }
`,Gi=Gr.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  letter-spacing: 0.5px;
`,Xi=Gr.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 1.6;
`;const Ki=function(){const e=(new Date).getFullYear();return(0,Jr.jsx)(Ni,{children:(0,Jr.jsxs)(Ai,{children:[(0,Jr.jsxs)(Fi,{children:[(0,Jr.jsxs)(Ii,{children:[(0,Jr.jsx)($i,{src:qr,alt:"GeoSpatios Logo"}),(0,Jr.jsx)(Ui,{children:"GeoSpatios"})]}),(0,Jr.jsxs)(Bi,{children:[(0,Jr.jsxs)(Wi,{children:[(0,Jr.jsx)("h3",{children:"Company"}),(0,Jr.jsx)(Hi,{to:"/",children:"Home"}),(0,Jr.jsx)(Hi,{to:"/manifesto",children:"Manifesto"}),(0,Jr.jsx)(Hi,{to:"/careers",children:"Careers"})]}),(0,Jr.jsxs)(Wi,{children:[(0,Jr.jsx)("h3",{children:"Geo OS"}),(0,Jr.jsx)(Hi,{to:"/geo-os",children:"Overview"}),(0,Jr.jsx)(Hi,{to:"/geo-os/partner-program",children:"Partner Program"})]}),(0,Jr.jsxs)(Wi,{children:[(0,Jr.jsx)("h3",{children:"Platform"}),(0,Jr.jsx)(Hi,{to:"/platform/airfield-operations",children:"Airfield Operations"}),(0,Jr.jsx)(Hi,{to:"/platform/maritime-operations",children:"Maritime Operations"}),(0,Jr.jsx)(Hi,{to:"/platform/logistics-operations",children:"Logistics Operations"})]})]}),(0,Jr.jsx)(Vi,{children:(0,Jr.jsx)(Yi,{href:"https://linkedin.com/company/geospatios",target:"_blank",rel:"noopener noreferrer",children:(0,Jr.jsx)(_i,{})})})]}),(0,Jr.jsxs)(Mi,{children:[(0,Jr.jsxs)(Gi,{children:["\xa9 ",e," GeoSpatios. All rights reserved."]}),(0,Jr.jsx)(Xi,{children:"USA"})]})]})})},Qi=n.p+"static/media/land.4fed9cbf2e5d7f8c4d71.png",qi=(n.p,n.p+"static/media/space.f074e428c9564de2a940.png"),Ji=(n.p,n.p+"static/media/airspace.08300ac8930c713c18d0.jpeg"),Zi=n.p+"static/media/maritime.bdd6b35b878767658b67.jpeg",eo=Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,to=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: black;
  color: #fff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,no=Gr.div`
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: ${eo} 0.8s ease-out forwards;
  animation-delay: 1.1s;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ro=(Gr.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin: 2rem 0 3rem;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  animation: ${eo} 0.8s ease-out forwards;
  animation-delay: 0.8s;
  
  @media (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,Gr.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
  text-align: center;
  opacity: 0;
  animation: ${eo} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`),io=Gr.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
`,oo=Gr.div`
  position: relative;
  height: 100vh;
  padding: 0;
`,ao=Gr.div`
  position: relative;
  background: black;
  z-index: 3;
`,lo=Gr.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  z-index: 2;
  pointer-events: auto;
`,so=Gr.span`
  color: white;
  position: relative;
  display: inline;
  text-shadow: 0 0 20px rgb(0, 0, 0);
`,uo=Gr.p`
  font-size: 1.4rem;
  color: rgb(255, 255, 255);
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  max-width: 800px;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0, 0, 0),
               0 0 10px rgb(0, 0, 0);
  position: relative;
  z-index: 52;
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    padding: 0 15px;
  }
`,co=(Gr.div`
  text-align: center;
  
  h3 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: white;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
  }
`,Gr.a`
  padding: 14px 36px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(45deg,rgb(255, 255, 255),rgb(236, 236, 236));
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 500;
  position: relative;
  z-index: 52;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
  }
`),fo=Gr(co)`
  background: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,po=Gr.section`
  padding: 6rem 5% 4rem;
  background: #000000;
  position: relative;
  z-index: 10;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  &:nth-child(even) {
    background: #050505;
  }
`,ho=(Gr.div`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: white;
    
    span {
      background: linear-gradient(90deg, #3B82F6, #60A5FA);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }
`,Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Gr.div`
  background: #111111;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: rgba(59, 130, 246, 0.5);
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,Gr.div`
  font-size: 2.5rem;
  color: #3B82F6;
  margin-bottom: 1rem;
`,Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin: 3rem auto;
  max-width: 1000px;
  align-items: center;
`,Gr.div`
  background: #111111;
  height: 80px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(100%) brightness(1.8);
  transition: filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    filter: grayscale(0) brightness(1);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
  }
  
  img {
    max-width: 70%;
    max-height: 50px;
  }
`,Gr.div`
  text-align: center;
  padding: 4rem 2rem;
  background: #111111;
  border-radius: 16px;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: white;
  }
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`,Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100vh;
  position: relative;
  gap: 20px;
  background: black;
  z-index: 1;
  padding: 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
    gap: 20px;
  }
`),mo=Gr.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
    transition: background 0.3s ease;
  }

  &:hover {
    transform: scale(1.02);
    z-index: 2;
    
    &:before {
      background: rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`,go=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${e=>e.image});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${e=>e.image===Zi&&"\n    background-position: left center;\n  "}

  ${e=>e.image===qi&&"\n    background-position: right center;\n  "}

  ${mo}:hover & {
    transform: scale(1.1);
  }
`,vo=Gr.div`
  position: relative;
  z-index: 2;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  color: white;
  opacity: 0;
  transition: all 0.3s ease;
  padding-bottom: 4rem;
  width: 100%;

  ${mo}:hover & {
    opacity: 1;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9),
                 0 0 20px rgba(0, 0, 0, 0.8);
    transform: translateY(20px);
    transition: transform 0.3s ease;
    opacity: 0;
    
    ${mo}:hover & {
      transform: translateY(0);
      opacity: 1;
    }
  }

  p {
    font-size: 1.1rem;
    max-width: 300px;
    line-height: 1.6;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9),
                 0 0 20px rgba(0, 0, 0, 0.8);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease 0.1s;
    
    ${mo}:hover & {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,yo=Gr.img`
  width: 200px;
  height: auto;
  margin-bottom: 3rem;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`,xo=Gr.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`,bo=Gr.div`
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.progress}%;
    background: white;
    transition: width 0.3s ease;
  }
`,wo=Gr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
  opacity: ${e=>e.$isLoading?1:0};
  pointer-events: ${e=>e.$isLoading?"auto":"none"};
`;function So(){const[t,n]=(0,e.useState)(0),[r,i]=(0,e.useState)(!0),[o,a]=(0,e.useState)(new Set),l=[{title:"Land Operations",description:"Advanced geospatial intelligence for ground-based operations and logistics.",image:Qi},{title:"Maritime Operations",description:"Advanced maritime dispatch optimization and vessel traffic control for enhanced port operations and maritime safety.",image:Zi},{title:"Aerial Operations",description:"Advanced air traffic control automation with intelligent vectoring, dispatch optimization, and comprehensive flight operations management.",image:Ji},{title:"Space Operations",description:"Cutting-edge satellite tracking and space domain awareness.",image:qi}],[s,u]=((0,e.useMemo)((()=>({Airfield:"Enabling Optimized Flight Operations with intelligent command and control systems.",Sea:"Enhancing maritime security and efficiency with autonomous vessel management.",Land:"Coordinating ground forces with real-time situational awareness platforms.",Space:"Managing satellite constellations for secure communications and surveillance."})),[]),(0,e.useRef)(null),(0,e.useState)(l[0].title)),[c,d]=(0,e.useState)(!1);(0,e.useMemo)((()=>e=>{u(l[e].title)}),[l]);return(0,e.useEffect)((()=>{window.scrollTo(0,0);const e=setTimeout((()=>{d(!0)}),100);return()=>clearTimeout(e)}),[]),(0,e.useEffect)((()=>{l.forEach((e=>{const t=new Image;t.src=e.image,t.onload=()=>{a((t=>{if(t.has(e.image))return t;const r=new Set(t);r.add(e.image);const o=r.size/4*100;return n(o),4===r.size&&setTimeout((()=>{i(!1)}),500),r}))}}))}),[]),(0,Jr.jsxs)(to,{children:[(0,Jr.jsxs)(wo,{$isLoading:r,children:[(0,Jr.jsx)(yo,{src:qr,alt:"GeoSpatios Logo"}),(0,Jr.jsxs)(xo,{children:["Loading... ",Math.round(t),"%"]}),(0,Jr.jsx)(bo,{progress:t})]}),(0,Jr.jsxs)(io,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(oo,{children:[(0,Jr.jsx)(ho,{children:l.map(((e,t)=>(0,Jr.jsxs)(mo,{children:[(0,Jr.jsx)(go,{image:e.image}),(0,Jr.jsxs)(vo,{children:[(0,Jr.jsx)("h3",{children:e.title}),(0,Jr.jsx)("p",{children:e.description})]})]},t)))}),(0,Jr.jsxs)(lo,{children:[(0,Jr.jsxs)(ro,{children:["The Ecosystem for Automated"," ",(0,Jr.jsx)(so,{children:"Geospatial Operations"})," "]}),(0,Jr.jsxs)(uo,{children:["Empower enhanced efficiency, predictive intelligence,","\n","and operational resilience with AI built","\n","for geospatial decision-making"]}),(0,Jr.jsxs)(no,{children:[(0,Jr.jsx)(co,{href:"/contact",children:"Request Demo"}),(0,Jr.jsx)(fo,{href:"/manifesto",children:"Learn More"})]})]})]}),(0,Jr.jsxs)(ao,{children:[(0,Jr.jsx)(po,{}),(0,Jr.jsx)(po,{}),(0,Jr.jsx)(Ki,{})]})]})]})}const ko=e.memo(So),Eo=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #000;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,jo=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Co=Gr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`,To=Gr.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,_o=Gr.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,Po=Gr.a`
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(236, 236, 236));
  color: black;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
  }
`;const Ro=function(){return(0,Jr.jsxs)(Eo,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(jo,{children:[(0,Jr.jsxs)(Co,{children:[(0,Jr.jsx)(To,{children:"Oops, looks like you ran into some turbulence!"}),(0,Jr.jsx)(_o,{children:"This page is currently under construction. Our team is working hard to bring you cutting-edge geospatial solutions."}),(0,Jr.jsx)(Po,{href:"/",children:"Return to Home"})]}),(0,Jr.jsx)(Ki,{})]})]})};const zo=function(t){let{SIM_RESOLUTION:n=128,DYE_RESOLUTION:r=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:o=3.5,VELOCITY_DISSIPATION:a=2,PRESSURE:l=.1,PRESSURE_ITERATIONS:s=20,CURL:u=3,SPLAT_RADIUS:c=.1,SPLAT_FORCE:d=6e3,SHADING:f=!0,COLOR_UPDATE_SPEED:p=10,BACK_COLOR:h={r:.5,g:0,b:0},TRANSPARENT:m=!0}=t;const g=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=g.current;if(!e)return;let t={SIM_RESOLUTION:n,DYE_RESOLUTION:r,CAPTURE_RESOLUTION:i,DENSITY_DISSIPATION:o,VELOCITY_DISSIPATION:a,PRESSURE:l,PRESSURE_ITERATIONS:s,CURL:u,SPLAT_RADIUS:c,SPLAT_FORCE:d,SHADING:f,COLOR_UPDATE_SPEED:p,PAUSED:!1,BACK_COLOR:h,TRANSPARENT:m},v=[new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}];const{gl:y,ext:x}=function(e){const t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let n=e.getContext("webgl2",t);const r=!!n;r||(n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t));let i,o;r?(n.getExtension("EXT_color_buffer_float"),o=n.getExtension("OES_texture_float_linear")):(i=n.getExtension("OES_texture_half_float"),o=n.getExtension("OES_texture_half_float_linear"));n.clearColor(0,0,0,1);const a=r?n.HALF_FLOAT:i&&i.HALF_FLOAT_OES;let l,s,u;r?(l=b(n,n.RGBA16F,n.RGBA,a),s=b(n,n.RG16F,n.RG,a),u=b(n,n.R16F,n.RED,a)):(l=b(n,n.RGBA,n.RGBA,a),s=b(n,n.RGBA,n.RGBA,a),u=b(n,n.RGBA,n.RGBA,a));return{gl:n,ext:{formatRGBA:l,formatRG:s,formatR:u,halfFloatTexType:a,supportLinearFiltering:o}}}(e);function b(e,t,n,r){if(!function(e,t,n,r){const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,n,r,null);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER);return a===e.FRAMEBUFFER_COMPLETE}(e,t,n,r))switch(t){case e.R16F:return b(e,e.RG16F,e.RG,r);case e.RG16F:return b(e,e.RGBA16F,e.RGBA,r);default:return null}return{internalFormat:t,format:n}}x.supportLinearFiltering||(t.DYE_RESOLUTION=256,t.SHADING=!1);class w{constructor(e,t){this.uniforms={},this.program=S(e,t),this.uniforms=k(this.program)}bind(){y.useProgram(this.program)}}function S(e,t){let n=y.createProgram();return y.attachShader(n,e),y.attachShader(n,t),y.linkProgram(n),y.getProgramParameter(n,y.LINK_STATUS)||console.trace(y.getProgramInfoLog(n)),n}function k(e){let t=[],n=y.getProgramParameter(e,y.ACTIVE_UNIFORMS);for(let r=0;r<n;r++){let n=y.getActiveUniform(e,r).name;t[n]=y.getUniformLocation(e,n)}return t}function E(e,t,n){t=function(e,t){if(!t)return e;let n="";return t.forEach((e=>{n+="#define "+e+"\n"})),n+e}(t,n);const r=y.createShader(e);return y.shaderSource(r,t),y.compileShader(r),y.getShaderParameter(r,y.COMPILE_STATUS)||console.trace(y.getShaderInfoLog(r)),r}const j=E(y.VERTEX_SHADER,"\n        precision highp float;\n        attribute vec2 aPosition;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform vec2 texelSize;\n\n        void main () {\n            vUv = aPosition * 0.5 + 0.5;\n            vL = vUv - vec2(texelSize.x, 0.0);\n            vR = vUv + vec2(texelSize.x, 0.0);\n            vT = vUv + vec2(0.0, texelSize.y);\n            vB = vUv - vec2(0.0, texelSize.y);\n            gl_Position = vec4(aPosition, 0.0, 1.0);\n        }\n      "),C=E(y.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n\n        void main () {\n            gl_FragColor = texture2D(uTexture, vUv);\n        }\n      "),T=E(y.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform float value;\n\n        void main () {\n            gl_FragColor = value * texture2D(uTexture, vUv);\n        }\n      "),_=E(y.FRAGMENT_SHADER,"\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTarget;\n        uniform float aspectRatio;\n        uniform vec3 color;\n        uniform vec2 point;\n        uniform float radius;\n\n        void main () {\n            vec2 p = vUv - point.xy;\n            p.x *= aspectRatio;\n            vec3 splat = exp(-dot(p, p) / radius) * color;\n            vec3 base = texture2D(uTarget, vUv).xyz;\n            gl_FragColor = vec4(base + splat, 1.0);\n        }\n      "),P=E(y.FRAGMENT_SHADER,"\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uSource;\n        uniform vec2 texelSize;\n        uniform vec2 dyeTexelSize;\n        uniform float dt;\n        uniform float dissipation;\n\n        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n            vec2 st = uv / tsize - 0.5;\n            vec2 iuv = floor(st);\n            vec2 fuv = fract(st);\n\n            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n        }\n\n        void main () {\n            #ifdef MANUAL_FILTERING\n                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n                vec4 result = bilerp(uSource, coord, dyeTexelSize);\n            #else\n                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n                vec4 result = texture2D(uSource, coord);\n            #endif\n            float decay = 1.0 + dissipation * dt;\n            gl_FragColor = result / decay;\n        }\n      ",x.supportLinearFiltering?null:["MANUAL_FILTERING"]),R=E(y.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uVelocity, vL).x;\n            float R = texture2D(uVelocity, vR).x;\n            float T = texture2D(uVelocity, vT).y;\n            float B = texture2D(uVelocity, vB).y;\n\n            vec2 C = texture2D(uVelocity, vUv).xy;\n            if (vL.x < 0.0) { L = -C.x; }\n            if (vR.x > 1.0) { R = -C.x; }\n            if (vT.y > 1.0) { T = -C.y; }\n            if (vB.y < 0.0) { B = -C.y; }\n\n            float div = 0.5 * (R - L + T - B);\n            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n        }\n      "),z=E(y.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uVelocity, vL).y;\n            float R = texture2D(uVelocity, vR).y;\n            float T = texture2D(uVelocity, vT).x;\n            float B = texture2D(uVelocity, vB).x;\n            float vorticity = R - L - T + B;\n            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n        }\n      "),O=E(y.FRAGMENT_SHADER,"\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uCurl;\n        uniform float curl;\n        uniform float dt;\n\n        void main () {\n            float L = texture2D(uCurl, vL).x;\n            float R = texture2D(uCurl, vR).x;\n            float T = texture2D(uCurl, vT).x;\n            float B = texture2D(uCurl, vB).x;\n            float C = texture2D(uCurl, vUv).x;\n\n            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n            force /= length(force) + 0.0001;\n            force *= curl * C;\n            force.y *= -1.0;\n\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity += force * dt;\n            velocity = min(max(velocity, -1000.0), 1000.0);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n      "),D=E(y.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uDivergence;\n\n        void main () {\n            float L = texture2D(uPressure, vL).x;\n            float R = texture2D(uPressure, vR).x;\n            float T = texture2D(uPressure, vT).x;\n            float B = texture2D(uPressure, vB).x;\n            float C = texture2D(uPressure, vUv).x;\n            float divergence = texture2D(uDivergence, vUv).x;\n            float pressure = (L + R + B + T - divergence) * 0.25;\n            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n        }\n      "),L=E(y.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uPressure, vL).x;\n            float R = texture2D(uPressure, vR).x;\n            float T = texture2D(uPressure, vT).x;\n            float B = texture2D(uPressure, vB).x;\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity.xy -= vec2(R - L, T - B);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n      "),N=(y.bindBuffer(y.ARRAY_BUFFER,y.createBuffer()),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ELEMENT_ARRAY_BUFFER,y.createBuffer()),y.bufferData(y.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),y.STATIC_DRAW),y.vertexAttribPointer(0,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray(0),function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null==e?(y.viewport(0,0,y.drawingBufferWidth,y.drawingBufferHeight),y.bindFramebuffer(y.FRAMEBUFFER,null)):(y.viewport(0,0,e.width,e.height),y.bindFramebuffer(y.FRAMEBUFFER,e.fbo)),t&&(y.clearColor(0,0,0,1),y.clear(y.COLOR_BUFFER_BIT)),y.drawElements(y.TRIANGLES,6,y.UNSIGNED_SHORT,0)});let A,F,M,I,$;const U=new w(j,C),B=new w(j,T),W=new w(j,_),H=new w(j,P),V=new w(j,R),Y=new w(j,z),G=new w(j,O),X=new w(j,D),K=new w(j,L),Q=new class{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let r=0;r<e.length;r++)t+=de(e[r]);let n=this.programs[t];if(null==n){let r=E(y.FRAGMENT_SHADER,this.fragmentShaderSource,e);n=S(this.vertexShader,r),this.programs[t]=n}n!==this.activeProgram&&(this.uniforms=k(n),this.activeProgram=n)}bind(){y.useProgram(this.activeProgram)}}(j,"\n      precision highp float;\n      precision highp sampler2D;\n      varying vec2 vUv;\n      varying vec2 vL;\n      varying vec2 vR;\n      varying vec2 vT;\n      varying vec2 vB;\n      uniform sampler2D uTexture;\n      uniform sampler2D uDithering;\n      uniform vec2 ditherScale;\n      uniform vec2 texelSize;\n\n      vec3 linearToGamma (vec3 color) {\n          color = max(color, vec3(0));\n          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));\n      }\n\n      void main () {\n          vec3 c = texture2D(uTexture, vUv).rgb;\n          #ifdef SHADING\n              vec3 lc = texture2D(uTexture, vL).rgb;\n              vec3 rc = texture2D(uTexture, vR).rgb;\n              vec3 tc = texture2D(uTexture, vT).rgb;\n              vec3 bc = texture2D(uTexture, vB).rgb;\n\n              float dx = length(rc) - length(lc);\n              float dy = length(tc) - length(bc);\n\n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n\n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              c *= diffuse;\n          #endif\n\n          float a = max(c.r, max(c.g, c.b));\n          gl_FragColor = vec4(c, a);\n      }\n    ");function q(){let e=ue(t.SIM_RESOLUTION),n=ue(t.DYE_RESOLUTION);const r=x.halfFloatTexType,i=x.formatRGBA,o=x.formatRG,a=x.formatR,l=x.supportLinearFiltering?y.LINEAR:y.NEAREST;y.disable(y.BLEND),A=A?ee(A,n.width,n.height,i.internalFormat,i.format,r,l):Z(n.width,n.height,i.internalFormat,i.format,r,l),F=F?ee(F,e.width,e.height,o.internalFormat,o.format,r,l):Z(e.width,e.height,o.internalFormat,o.format,r,l),M=J(e.width,e.height,a.internalFormat,a.format,r,y.NEAREST),I=J(e.width,e.height,a.internalFormat,a.format,r,y.NEAREST),$=Z(e.width,e.height,a.internalFormat,a.format,r,y.NEAREST)}function J(e,t,n,r,i,o){y.activeTexture(y.TEXTURE0);let a=y.createTexture();y.bindTexture(y.TEXTURE_2D,a),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_MIN_FILTER,o),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_MAG_FILTER,o),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_WRAP_S,y.CLAMP_TO_EDGE),y.texParameteri(y.TEXTURE_2D,y.TEXTURE_WRAP_T,y.CLAMP_TO_EDGE),y.texImage2D(y.TEXTURE_2D,0,n,e,t,0,r,i,null);let l=y.createFramebuffer();return y.bindFramebuffer(y.FRAMEBUFFER,l),y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,a,0),y.viewport(0,0,e,t),y.clear(y.COLOR_BUFFER_BIT),{texture:a,fbo:l,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach:e=>(y.activeTexture(y.TEXTURE0+e),y.bindTexture(y.TEXTURE_2D,a),e)}}function Z(e,t,n,r,i,o){let a=J(e,t,n,r,i,o),l=J(e,t,n,r,i,o);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(e){a=e},get write(){return l},set write(e){l=e},swap(){let e=a;a=l,l=e}}}function ee(e,t,n,r,i,o,a){return e.width===t&&e.height===n||(e.read=function(e,t,n,r,i,o,a){let l=J(t,n,r,i,o,a);return U.bind(),y.uniform1i(U.uniforms.uTexture,e.attach(0)),N(l),l}(e.read,t,n,r,i,o,a),e.write=J(t,n,r,i,o,a),e.width=t,e.height=n,e.texelSizeX=1/t,e.texelSizeY=1/n),e}!function(){let e=[];t.SHADING&&e.push("SHADING"),Q.setKeywords(e)}(),q();let te=Date.now(),ne=0;function re(){const n=function(){let e=Date.now(),t=(e-te)/1e3;return t=Math.min(t,.016666),te=e,t}();var r;(function(){let t=ce(e.clientWidth),n=ce(e.clientHeight);if(e.width!==t||e.height!==n)return e.width=t,e.height=n,!0;return!1})()&&q(),function(e){ne+=e*t.COLOR_UPDATE_SPEED,ne>=1&&(ne=function(e,t,n){const r=n-t;return 0===r?t:(e-t)%r+t}(ne,0,1),v.forEach((e=>{e.color=se()})))}(n),v.forEach((e=>{e.moved&&(e.moved=!1,function(e){let n=e.deltaX*t.SPLAT_FORCE,r=e.deltaY*t.SPLAT_FORCE;ie(e.texcoordX,e.texcoordY,n,r,e.color)}(e))})),function(e){y.disable(y.BLEND),Y.bind(),y.uniform2f(Y.uniforms.texelSize,F.texelSizeX,F.texelSizeY),y.uniform1i(Y.uniforms.uVelocity,F.read.attach(0)),N(I),G.bind(),y.uniform2f(G.uniforms.texelSize,F.texelSizeX,F.texelSizeY),y.uniform1i(G.uniforms.uVelocity,F.read.attach(0)),y.uniform1i(G.uniforms.uCurl,I.attach(1)),y.uniform1f(G.uniforms.curl,t.CURL),y.uniform1f(G.uniforms.dt,e),N(F.write),F.swap(),V.bind(),y.uniform2f(V.uniforms.texelSize,F.texelSizeX,F.texelSizeY),y.uniform1i(V.uniforms.uVelocity,F.read.attach(0)),N(M),B.bind(),y.uniform1i(B.uniforms.uTexture,$.read.attach(0)),y.uniform1f(B.uniforms.value,t.PRESSURE),N($.write),$.swap(),X.bind(),y.uniform2f(X.uniforms.texelSize,F.texelSizeX,F.texelSizeY),y.uniform1i(X.uniforms.uDivergence,M.attach(0));for(let r=0;r<t.PRESSURE_ITERATIONS;r++)y.uniform1i(X.uniforms.uPressure,$.read.attach(1)),N($.write),$.swap();K.bind(),y.uniform2f(K.uniforms.texelSize,F.texelSizeX,F.texelSizeY),y.uniform1i(K.uniforms.uPressure,$.read.attach(0)),y.uniform1i(K.uniforms.uVelocity,F.read.attach(1)),N(F.write),F.swap(),H.bind(),y.uniform2f(H.uniforms.texelSize,F.texelSizeX,F.texelSizeY),x.supportLinearFiltering||y.uniform2f(H.uniforms.dyeTexelSize,F.texelSizeX,F.texelSizeY);let n=F.read.attach(0);y.uniform1i(H.uniforms.uVelocity,n),y.uniform1i(H.uniforms.uSource,n),y.uniform1f(H.uniforms.dt,e),y.uniform1f(H.uniforms.dissipation,t.VELOCITY_DISSIPATION),N(F.write),F.swap(),x.supportLinearFiltering||y.uniform2f(H.uniforms.dyeTexelSize,A.texelSizeX,A.texelSizeY);y.uniform1i(H.uniforms.uVelocity,F.read.attach(0)),y.uniform1i(H.uniforms.uSource,A.read.attach(1)),y.uniform1f(H.uniforms.dissipation,t.DENSITY_DISSIPATION),N(A.write),A.swap()}(n),r=null,y.blendFunc(y.ONE,y.ONE_MINUS_SRC_ALPHA),y.enable(y.BLEND),function(e){let n=null==e?y.drawingBufferWidth:e.width,r=null==e?y.drawingBufferHeight:e.height;Q.bind(),t.SHADING&&y.uniform2f(Q.uniforms.texelSize,1/n,1/r),y.uniform1i(Q.uniforms.uTexture,A.read.attach(0)),N(e)}(r),requestAnimationFrame(re)}function ie(n,r,i,o,a){W.bind(),y.uniform1i(W.uniforms.uTarget,F.read.attach(0)),y.uniform1f(W.uniforms.aspectRatio,e.width/e.height),y.uniform2f(W.uniforms.point,n,r),y.uniform3f(W.uniforms.color,i,o,0),y.uniform1f(W.uniforms.radius,function(t){let n=e.width/e.height;n>1&&(t*=n);return t}(t.SPLAT_RADIUS/100)),N(F.write),F.swap(),y.uniform1i(W.uniforms.uTarget,A.read.attach(0)),y.uniform3f(W.uniforms.color,a.r,a.g,a.b),N(A.write),A.swap()}function oe(t,n,r,i){t.id=n,t.down=!0,t.moved=!1,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=se()}function ae(t,n,r,i){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=n/e.width,t.texcoordY=1-r/e.height,t.deltaX=function(t){let n=e.width/e.height;n<1&&(t*=n);return t}(t.texcoordX-t.prevTexcoordX),t.deltaY=function(t){let n=e.width/e.height;n>1&&(t/=n);return t}(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=i}function le(e){e.down=!1}function se(){let e=function(e,t,n){let r,i,o,a,l,s,u,c;switch(a=Math.floor(6*e),l=6*e-a,s=n*(1-t),u=n*(1-l*t),c=n*(1-(1-l)*t),a%6){case 0:r=n,i=c,o=s;break;case 1:r=u,i=n,o=s;break;case 2:r=s,i=n,o=c;break;case 3:r=s,i=u,o=n;break;case 4:r=c,i=s,o=n;break;case 5:r=n,i=s,o=u}return{r:r,g:i,b:o}}(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function ue(e){let t=y.drawingBufferWidth/y.drawingBufferHeight;t<1&&(t=1/t);const n=Math.round(e),r=Math.round(e*t);return y.drawingBufferWidth>y.drawingBufferHeight?{width:r,height:n}:{width:n,height:r}}function ce(e){const t=window.devicePixelRatio||1;return Math.floor(e*t)}function de(e){if(0===e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}window.addEventListener("mousedown",(e=>{let t=v[0];oe(t,-1,ce(e.clientX),ce(e.clientY)),function(e){const t=se();t.r*=10,t.g*=10,t.b*=10;let n=10*(Math.random()-.5),r=30*(Math.random()-.5);ie(e.texcoordX,e.texcoordY,n,r,t)}(t)})),document.body.addEventListener("mousemove",(function e(t){let n=v[0],r=ce(t.clientX),i=ce(t.clientY),o=se();re(),ae(n,r,i,o),document.body.removeEventListener("mousemove",e)})),window.addEventListener("mousemove",(e=>{let t=v[0];ae(t,ce(e.clientX),ce(e.clientY),t.color)})),document.body.addEventListener("touchstart",(function e(t){const n=t.targetTouches;let r=v[0];for(let i=0;i<n.length;i++){let e=ce(n[i].clientX),t=ce(n[i].clientY);re(),oe(r,n[i].identifier,e,t)}document.body.removeEventListener("touchstart",e)})),window.addEventListener("touchstart",(e=>{const t=e.targetTouches;let n=v[0];for(let r=0;r<t.length;r++){let e=ce(t[r].clientX),i=ce(t[r].clientY);oe(n,t[r].identifier,e,i)}})),window.addEventListener("touchmove",(e=>{const t=e.targetTouches;let n=v[0];for(let r=0;r<t.length;r++){ae(n,ce(t[r].clientX),ce(t[r].clientY),n.color)}}),!1),window.addEventListener("touchend",(e=>{const t=e.changedTouches;let n=v[0];for(let r=0;r<t.length;r++)le(n)})),re()}),[n,r,i,o,a,l,s,u,c,d,f,p,h,m]),(0,Jr.jsx)("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:(0,Jr.jsx)("canvas",{ref:g,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})},Oo=Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Do=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
  scroll-behavior: smooth;
  overflow-y: auto;

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
`,Lo=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${Oo} 0.8s ease-out;
  scroll-behavior: smooth;
`,No=Gr.div`
  padding-top: 100px;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    padding-top: 80px;
    margin: 0 auto 1.5rem;
  }
`,Ao=Gr.h1`
  font-size: 3.75rem;
  margin-bottom: 1rem;
  color: white;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);

  @media (max-width: 768px) {
    font-size: 2.75rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`,Fo=Gr.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  padding: 0 1rem;
  }
`,Mo=Gr.div`
  text-align: center;
  margin: 4rem auto;
  max-width: 800px;

  @media (max-width: 768px) {
    margin: 3rem auto;
    padding: 0 1rem;
  }
`,Io=Gr.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #000;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  }
`,$o=Gr.div`
  background: transparent;
  padding: 60px 40px;
  border-radius: 10px;
  margin-bottom: 120px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-bottom: 80px;
  }
`,Uo=Gr.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 60px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`,Bo=Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Wo=Gr.div`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
`,Ho=Gr.h4`
  color: white;
  margin-bottom: 15px;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`,Vo=Gr.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,Yo=Gr.div`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    ${Wo} {
  color: white;
      transform: translateY(-2px);
    }
  }
`,Go=()=>((0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,Jr.jsxs)(Do,{children:[(0,Jr.jsx)(zo,{}),(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(Lo,{children:[(0,Jr.jsxs)(No,{children:[(0,Jr.jsx)(Ao,{children:"Geo OS"}),(0,Jr.jsx)(Fo,{children:"A modular and scalable software foundation optimized for AI-powered Autonomous Earth Operations."})]}),(0,Jr.jsxs)("div",{style:{maxWidth:"1200px",margin:"40px auto",padding:"0 20px"},children:[(0,Jr.jsxs)($o,{children:[(0,Jr.jsx)(Uo,{children:"System Architecture"}),(0,Jr.jsxs)(Bo,{children:[(0,Jr.jsxs)(Yo,{children:[(0,Jr.jsx)(Wo,{children:(0,Jr.jsx)(zi,{})}),(0,Jr.jsx)(Ho,{children:"Data Layer"}),(0,Jr.jsx)(Vo,{children:"Unified data storage and processing infrastructure"})]}),(0,Jr.jsxs)(Yo,{children:[(0,Jr.jsx)(Wo,{children:(0,Jr.jsx)(Pi,{})}),(0,Jr.jsx)(Ho,{children:"AI Layer"}),(0,Jr.jsx)(Vo,{children:"Advanced machine learning and decision systems"})]}),(0,Jr.jsxs)(Yo,{children:[(0,Jr.jsx)(Wo,{children:(0,Jr.jsx)(Oi,{})}),(0,Jr.jsx)(Ho,{children:"Function Layer"}),(0,Jr.jsx)(Vo,{children:"Modular Data Modeling and Optimization Algorithms"})]}),(0,Jr.jsxs)(Yo,{children:[(0,Jr.jsx)(Wo,{children:(0,Jr.jsx)(Ri,{})}),(0,Jr.jsx)(Ho,{children:"API Layer"}),(0,Jr.jsx)(Vo,{children:"Developer tools and interfaces"})]})]})]}),(0,Jr.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,Jr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,Jr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,Jr.jsx)("defs",{children:(0,Jr.jsxs)("linearGradient",{id:"dataGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,Jr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,Jr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,Jr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,Jr.jsx)("path",{d:"M-60,-60 L60,-60 L60,60 L-60,60 Z",fill:"url(#dataGradient)",stroke:"white",strokeWidth:"1.5"}),(0,Jr.jsx)("path",{d:"M60,-60 L100,-20 L100,100 L60,60 Z",fill:"url(#dataGradient)",stroke:"white",strokeWidth:"1.5"}),(0,Jr.jsx)("path",{d:"M-60,60 L60,60 L100,100 L-20,100 Z",fill:"url(#dataGradient)",stroke:"white",strokeWidth:"1.5"}),(0,Jr.jsx)("rect",{x:"-40",y:"-40",width:"30",height:"30",fill:"#0066FF",fillOpacity:"0.7",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("rect",{x:"20",y:"-20",width:"20",height:"20",fill:"#0066FF",fillOpacity:"0.7",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("rect",{x:"-30",y:"30",width:"40",height:"15",fill:"#0066FF",fillOpacity:"0.7",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("line",{x1:"-25",y1:"-25",x2:"30",y2:"-10",stroke:"#0066FF",strokeWidth:"1.5"}),(0,Jr.jsx)("line",{x1:"30",y1:"-10",x2:"-10",y2:"30",stroke:"#0066FF",strokeWidth:"1.5"})]})]})}),(0,Jr.jsx)("div",{style:{flex:"1"},children:(0,Jr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,Jr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS Data]"}),(0,Jr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Seamlessly integrates and harmonizes geospatial data from diverse sources into a unified operational data layer."}),(0,Jr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Universal Data Protocol"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"A unified language for all geospatial data types ensures seamless communication between systems."})]}),(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Robust Data Fusion"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Proprietary techniques for combining structured and unstructured data sources such as satellite imagery, weather data, and real-time observations."})]})]})]})})]}),(0,Jr.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,Jr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,Jr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,Jr.jsx)("defs",{children:(0,Jr.jsxs)("linearGradient",{id:"modelGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,Jr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,Jr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,Jr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,Jr.jsx)("circle",{cx:"-120",cy:"-80",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"-120",cy:"-40",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"-120",cy:"0",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"-120",cy:"40",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"-120",cy:"80",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"0",cy:"-60",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"0",cy:"-20",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"0",cy:"20",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"0",cy:"60",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"120",cy:"0",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("path",{d:"M-120,-80 L0,-60",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,-80 L0,-20",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,-40 L0,-60",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,-40 L0,-20",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,-40 L0,20",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,0 L0,-20",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,0 L0,20",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,40 L0,20",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,40 L0,60",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M-120,80 L0,60",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M0,-60 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M0,-20 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M0,20 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("path",{d:"M0,60 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,Jr.jsx)("circle",{cx:"-120",cy:"-40",r:"12",fill:"none",stroke:"#0066FF",strokeWidth:"1.5"}),(0,Jr.jsx)("circle",{cx:"0",cy:"20",r:"12",fill:"none",stroke:"#0066FF",strokeWidth:"1.5"}),(0,Jr.jsx)("circle",{cx:"120",cy:"0",r:"12",fill:"none",stroke:"#0066FF",strokeWidth:"1.5"}),(0,Jr.jsx)("path",{d:"M-120,-40 L0,20",stroke:"#0066FF",strokeWidth:"1.5"}),(0,Jr.jsx)("path",{d:"M0,20 L120,0",stroke:"#0066FF",strokeWidth:"1.5"})]})]})}),(0,Jr.jsx)("div",{style:{flex:"1"},children:(0,Jr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,Jr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS Model]"}),(0,Jr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Powers intelligent decision-making through advanced AI models specifically designed and optimized for geospatial analysis."}),(0,Jr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Earth Foundation Models"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Pre-trained large-scale models that understand Earth's physical dynamics at global scale."})]}),(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Predictive Analytics"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Forecasts environmental conditions and operational outcomes with superhuman accuracy."})]})]})]})})]}),(0,Jr.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,Jr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,Jr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,Jr.jsx)("defs",{children:(0,Jr.jsxs)("linearGradient",{id:"functionGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,Jr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,Jr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,Jr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,Jr.jsxs)("g",{transform:"translate(-65, -40)",children:[(0,Jr.jsx)("rect",{width:"50",height:"50",fill:"url(#functionGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,Jr.jsx)("path",{d:"M10,25 L40,25 M25,10 L25,40",stroke:"#0066FF",strokeWidth:"2"})]}),(0,Jr.jsxs)("g",{transform:"translate(65, -40)",children:[(0,Jr.jsx)("rect",{width:"50",height:"50",fill:"url(#functionGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,Jr.jsx)("path",{d:"M10,25 L40,25 M25,10 L25,40",stroke:"#0066FF",strokeWidth:"2"})]}),(0,Jr.jsxs)("g",{transform:"translate(0, 45)",children:[(0,Jr.jsx)("rect",{width:"50",height:"50",fill:"url(#functionGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,Jr.jsx)("path",{d:"M10,25 L40,25 M25,10 L25,40",stroke:"#0066FF",strokeWidth:"2"})]}),(0,Jr.jsx)("path",{d:"M-40,-15 L0,45",stroke:"#0066FF",strokeWidth:"1.5",fill:"none"}),(0,Jr.jsx)("path",{d:"M90,-15 L25,45",stroke:"#0066FF",strokeWidth:"1.5",fill:"none"})]})]})}),(0,Jr.jsx)("div",{style:{flex:"1"},children:(0,Jr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,Jr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS Functions]"}),(0,Jr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Modular, composable functions for building sophisticated Earth operations workflows easily accessible via APIs."}),(0,Jr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Function Marketplace"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Extensive library of pre-built functions for common Earth operations tasks."})]}),(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Custom Functions"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Build and deploy custom functions for specialized operational needs."})]})]})]})})]}),(0,Jr.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,Jr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,Jr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,Jr.jsx)("defs",{children:(0,Jr.jsxs)("linearGradient",{id:"sdkGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,Jr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,Jr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,Jr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,Jr.jsx)("rect",{x:"-100",y:"-80",width:"200",height:"160",fill:"url(#sdkGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,Jr.jsx)("line",{x1:"-80",y1:"-60",x2:"40",y2:"-60",stroke:"#0066FF",strokeWidth:"2"}),(0,Jr.jsx)("line",{x1:"-80",y1:"-30",x2:"60",y2:"-30",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("line",{x1:"-80",y1:"0",x2:"20",y2:"0",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("line",{x1:"-80",y1:"30",x2:"40",y2:"30",stroke:"#0066FF",strokeWidth:"2"}),(0,Jr.jsx)("circle",{cx:"-120",cy:"-40",r:"10",fill:"#0066FF",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("circle",{cx:"120",cy:"-40",r:"10",fill:"#0066FF",stroke:"white",strokeWidth:"1"}),(0,Jr.jsx)("path",{d:"M-120,-40 C-80,-40 80,-40 120,-40",stroke:"#0066FF",strokeWidth:"1.5",fill:"none"})]})]})}),(0,Jr.jsx)("div",{style:{flex:"1"},children:(0,Jr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,Jr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS SDK]"}),(0,Jr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Comprehensive development toolkit for building and deploying Earth-scale applications."}),(0,Jr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Developer Tools"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Rich set of APIs, libraries, and tools for rapid application development."})]}),(0,Jr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,Jr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Deployment Framework"}),(0,Jr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Streamlined deployment and scaling of Earth-scale applications."})]})]})]})})]}),(0,Jr.jsxs)(Mo,{children:[(0,Jr.jsx)(Ao,{style:{fontSize:"2.5rem",marginBottom:"30px"},children:"Ready to build with Geo OS?"}),(0,Jr.jsx)(Io,{href:"/partner-program",children:"Learn more about Partner Program"})]})]}),(0,Jr.jsx)(Ki,{})]})]})),Xo=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #000;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,Ko=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Qo=Gr.div`
  margin-top: 100px; /* Space for the fixed navbar */
  padding: 2rem 0;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`,qo=Gr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);
  text-align: center;
`,Jo=Gr.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3rem auto;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

  .tagline {
    display: block;
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: rgba(255, 255, 255, 1);
    font-weight: 500;
  }

  .description {
    display: block;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.8;
  }
`,Zo=Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 1800px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ea=Gr.div`
  background: rgba(30, 30, 30, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`,ta=Gr(ea)`
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.7), rgba(50, 50, 50, 0.7));
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(255, 255, 255, 0.1);
  }
`,na=Gr.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: white;
`,ra=Gr.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`,ia=Gr.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`,oa=Gr.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`,aa=Gr.button`
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  background: ${e=>e.disabled?"linear-gradient(45deg, rgb(150, 150, 150), rgb(100, 100, 100))":"linear-gradient(45deg, rgb(255, 255, 255), rgb(236, 236, 236))"};
  color: ${e=>e.disabled?"#444":"black"};
  font-size: 1rem;
  cursor: ${e=>e.disabled?"default":"pointer"};
  transition: transform 0.2s, box-shadow 0.2s;
  font-weight: 500;
  margin-top: auto;
  align-self: flex-start;

  &:hover {
    transform: ${e=>e.disabled?"none":"scale(1.05)"};
    box-shadow: ${e=>e.disabled?"none":"0 0 20px rgba(0, 0, 0, 0.9)"};
  }
`;const la=function(){(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]);const t=()=>{window.open("https://www.linkedin.com/company/geospatios","_blank")};return(0,Jr.jsxs)(Xo,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(Ko,{children:[(0,Jr.jsxs)(Qo,{children:[(0,Jr.jsx)(qo,{children:"Our Solutions"}),(0,Jr.jsxs)(Jo,{children:[(0,Jr.jsx)("span",{className:"tagline",children:"Comprehensive solutions for autonomous operations"}),(0,Jr.jsx)("span",{className:"description",children:"Our platform provides end-to-end solutions for managing and optimizing autonomous operations across all domains."})]}),(0,Jr.jsx)(Zo,{children:[{title:"Maritime Operations",description:"Transform vessel routing and port operations with real-time intelligence. Deploy our system or integrate our Platform.",features:["Dynamic route optimization with weather & traffic","Port congestion prediction","Fuel consumption analytics","Environmental compliance tools"]},{title:"Airspace Operations",description:"Power your flight operations with advanced geospatial solutions. Available as complete system or integration framework.",features:["Intelligent dispatch optimization","Seamless EFB integration","Real-time weather & NOTAM processing","Performance & emissions analytics"]},{title:"Air Traffic Management",description:"Optimize airspace efficiency with predictive analytics. Use our system or integrate our processing pipeline.",features:["Real-time capacity optimization","Predictive conflict resolution","Dynamic weather integration","Environmental impact analysis"]},{title:"Custom Integration",description:"Enhance your systems with our Geo OS Platform and let us help you build your ideal solution.",features:["Flexible API & SDK access","Custom pipeline integration","Advanced analytics engine","Full implementation support"],isCustom:!0}].map(((e,n)=>e.isCustom?(0,Jr.jsxs)(ta,{children:[(0,Jr.jsx)(na,{children:e.title}),(0,Jr.jsx)(ra,{children:e.description}),(0,Jr.jsx)(ia,{children:e.features.map(((e,t)=>(0,Jr.jsx)(oa,{children:e},t)))}),(0,Jr.jsx)(aa,{onClick:t,children:"Contact Us"})]},n):(0,Jr.jsxs)(ea,{children:[(0,Jr.jsx)(na,{children:e.title}),(0,Jr.jsx)(ra,{children:e.description}),(0,Jr.jsx)(ia,{children:e.features.map(((e,t)=>(0,Jr.jsx)(oa,{children:e},t)))}),(0,Jr.jsx)(aa,{disabled:"Maritime Operations"===e.title||"Air Traffic Management"===e.title,onClick:"Maritime Operations"===!e.title&&"Air Traffic Management"===!e.title?t:void 0,children:"Maritime Operations"===e.title||"Air Traffic Management"===e.title?"Coming Soon":"Contact Us"})]},n)))})]}),(0,Jr.jsx)(Ki,{})]})]})};var sa=n(929),ua=n.n(sa);const ca=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,da=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,fa=Gr.div`
  margin-top: 100px; /* Space for the fixed navbar */
  padding: 2rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,pa=Gr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);
  text-align: center;
`,ha=Gr.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
`,ma=(Gr.div`
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,Gr.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
`,Gr.div`
  margin: 2rem 0;
`,Gr.div`
  margin: 4rem 0;
`,Gr.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
`,Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Gr.div`
  background: rgba(30, 30, 30, 0.7);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`),ga=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,va=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`,ya=Gr.div`
  display: grid;
  grid-template-columns: 6fr 3fr;
  gap: 1.5rem;
  margin: 3rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,xa=Gr.div`
  position: relative;
  width: 100%;
  height: 850px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  
  @media (max-width: 768px) {
    height: 500px; /* Shorter height on mobile */
  }
`,ba=Gr.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: white;
  z-index: 10;
  pointer-events: none;
  white-space: nowrap;
`,wa=Gr.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100; /* Increase z-index to ensure it stays on top */
  
  &:hover {
    background: rgba(0, 0, 0, 0.9);
    border-color: rgba(255, 255, 255, 0.5);
  }
`,Sa=Gr.div`
  background: rgba(20, 20, 20, 0.9); /* Darker background for better visibility */
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 1.5rem;
  height: 850px; /* Fixed height to match the InteractiveDiagramContainer */
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1024px) {
    margin-top: 1rem;
    height: 500px; /* Match mobile height */
  }
`,ka=Gr.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
`,Ea=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`,ja=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  flex: 1; /* Allow this to take remaining space */
  padding-right: 0.5rem; /* Add some padding for the scrollbar */
`,Ca=Gr.div`
  width: 1800px;
  height: 1400px;
  transform-origin: 0 0;
`,Ta=Gr.circle`
  cursor: pointer;
  transition: r 0.3s, fill 0.3s;
  
  &:hover {
    r: ${e=>1.1*e.r};
    fill-opacity: 0.9;
  }
`,_a=Gr.text`
  text-anchor: middle;
  fill: white;
  font-size: ${e=>e.isCentral?"14px":"12px"};
  font-weight: ${e=>e.isCentral?"bold":"normal"};
  pointer-events: none;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  dy: ${e=>e.isCentral?"35px":"25px"};
  
  @media (max-width: 768px) {
    font-size: ${e=>e.isCentral?"12px":"10px"};
    dy: ${e=>e.isCentral?"30px":"22px"};
  }
`,Pa=Gr.path`
  stroke-width: ${e=>e.isHighlighted?2:1};
  stroke-opacity: ${e=>e.isHighlighted?.9:.6};
  fill: none;
`,Ra=Gr.image`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
`,za=Gr.g`
  color: white;
  font-size: ${e=>.5*e.size}px;
`,Oa=(Gr.div`
  display: none; /* Hide the mobile controls completely */
`,Gr.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,Gr.h3`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: white;
`);const Da=function(){const[t,n]=(0,e.useState)({x:-500,y:-300}),[r,i]=(0,e.useState)(1),[o,a]=(0,e.useState)(null),[l,s]=(0,e.useState)(null),u=[{id:"geos",x:900,y:700,r:50,label:"Geo OS",color:"#000000",type:"central",isLogo:!0},{id:"databases",x:900,y:500,r:35,label:"Databases",color:"#000000",type:"central",icon:"database"},{id:"foundation",x:650,y:700,r:35,label:"Foundation Models",color:"#000000",type:"central",icon:"brain"},{id:"modules",x:900,y:900,r:35,label:"Modularized Functions",color:"#000000",type:"central",icon:"puzzle"},{id:"applications",x:1150,y:700,r:35,label:"Applications",color:"#000000",type:"central",icon:"laptop"},{id:"weather",x:750,y:400,r:25,label:"Weather Radars",color:"#ffffff",type:"source"},{id:"satellite",x:900,y:350,r:25,label:"Satelites Images",color:"#ffffff",type:"source"},{id:"aircraft",x:1050,y:400,r:25,label:"Aircraft",color:"#ffffff",type:"source"},{id:"ship",x:1150,y:450,r:25,label:"Ship",color:"#ffffff",type:"source"},{id:"thirdparty",x:650,y:450,r:25,label:"3rd Party",color:"#ffffff",type:"source"},{id:"forecast",x:500,y:650,r:25,label:"Prediction",color:"#ffffff",type:"source"},{id:"translate",x:500,y:750,r:25,label:"Translation",color:"#ffffff",type:"source"},{id:"navigation",x:750,y:1e3,r:25,label:"Navigation",color:"#ffffff",type:"source"},{id:"route",x:900,y:1050,r:25,label:"Route Planning",color:"#ffffff",type:"source"},{id:"optimization",x:1050,y:1e3,r:25,label:"Constraint Optimization",color:"#ffffff",type:"source"},{id:"traffic",x:650,y:950,r:25,label:"Traffic Prediction",color:"#ffffff",type:"source"},{id:"agent",x:1150,y:950,r:25,label:"Agent Orchestration",color:"#ffffff",type:"source"},{id:"gui",x:1300,y:650,r:25,label:"Interative GUI",color:"#ffffff",type:"source"},{id:"efb",x:1300,y:750,r:25,label:"Pilot EFB",color:"#ffffff",type:"source"},{id:"dispatcher",x:1250,y:850,r:25,label:"Dispatch Platform",color:"#ffffff",type:"source"}],c={geos:{title:"Geo OS",description:"The core operating system that integrates geospatial data processing, foundation models, modular functions, and applications.",technologies:[{title:"Distributed Computing",description:"Scalable architecture for processing large volumes of geospatial data"},{title:"Real-time Processing",description:"Low-latency data handling for time-sensitive operations"},{title:"API Integration",description:"Unified interfaces for connecting with various data sources and applications"}]},databases:{title:"Databases",description:"Centralized storage and management of geospatial data from various sources.",technologies:[{title:"Spatial Databases",description:"Optimized storage for geographic information"},{title:"Time-series Data",description:"Efficient handling of temporal geospatial data"},{title:"Data Fusion",description:"Integration of multiple data sources into unified datasets"}]},foundation:{title:"Foundation Models",description:"Advanced AI models that process and interpret geospatial data for various applications.",technologies:[{title:"Geospatial Machine Learning",description:"Specialized algorithms for geographic data analysis"},{title:"Predictive Analytics",description:"Forecasting based on historical and real-time data"},{title:"Natural Language Processing",description:"Converting geospatial data to human-readable insights"}]},modules:{title:"Modules",description:"Specialized components that provide specific functionality to the GeoSpatios platform.",technologies:[{title:"Agent Orchestration",description:"Coordinates autonomous agents operating in complex geospatial environments."},{title:"Navigation Systems",description:"Advanced pathfinding and routing algorithms for optimal movement through space."},{title:"Constraint Optimization",description:"Solves complex multi-variable problems with spatial and temporal constraints."},{title:"Situation Prediction",description:"Forecasts future states of dynamic environments using historical and real-time data."}]},applications:{title:"Applications",description:"End-user solutions built on the GeoSpatios platform that solve specific industry challenges.",technologies:[{title:"Vessel Optimization",description:"Maximizes efficiency of maritime operations through optimal routing and scheduling."},{title:"Flight Planning",description:"Comprehensive flight path optimization considering weather, airspace, and operational constraints."},{title:"Air Traffic Prediction",description:"Forecasts air traffic patterns to improve safety and efficiency in congested airspace."},{title:"Visualization Tools",description:"Advanced visualization Platform that transform complex data into intuitive, actionable insights."}]}};return u.forEach((e=>{c[e.id]||(c[e.id]={title:e.label,description:`${e.label} is an important component in the GeoSpatios architecture.`,technologies:[{title:"Integration",description:`${e.label} integrates seamlessly with the GeoSpatios platform.`}]})})),(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,Jr.jsxs)(ca,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsx)(da,{children:(0,Jr.jsxs)(fa,{children:[(0,Jr.jsx)(pa,{children:"Our Technology"}),(0,Jr.jsx)(ha,{children:"At the heart of our platform lies a sophisticated architecture designed to handle the complexities of autonomous operations."}),(0,Jr.jsxs)(ya,{children:[(0,Jr.jsxs)(xa,{children:[(0,Jr.jsx)(ba,{children:"Click and drag to move the diagram"}),(0,Jr.jsx)(wa,{onClick:()=>{n({x:-500,y:-300}),i(1)},children:"Reset View"}),(0,Jr.jsx)(ua(),{position:t,onStop:(e,t)=>n({x:t.x,y:t.y}),onDrag:(e,t)=>e.stopPropagation(),cancel:".clickable-node",children:(0,Jr.jsx)(Ca,{style:{transform:`scale(${r})`},children:(0,Jr.jsxs)("svg",{width:"1800",height:"1400",viewBox:"0 0 1800 1400",children:[[{from:"geos",to:"databases",style:"solid"},{from:"geos",to:"foundation",style:"solid"},{from:"geos",to:"modules",style:"solid"},{from:"geos",to:"applications",style:"solid"},{from:"databases",to:"weather",style:"solid"},{from:"databases",to:"satellite",style:"solid"},{from:"databases",to:"aircraft",style:"solid"},{from:"databases",to:"ship",style:"solid"},{from:"databases",to:"thirdparty",style:"dotted"},{from:"foundation",to:"forecast",style:"solid"},{from:"foundation",to:"translate",style:"solid"},{from:"modules",to:"navigation",style:"solid"},{from:"modules",to:"route",style:"solid"},{from:"modules",to:"optimization",style:"solid"},{from:"modules",to:"traffic",style:"solid"},{from:"modules",to:"agent",style:"solid"},{from:"applications",to:"gui",style:"solid"},{from:"applications",to:"efb",style:"solid"},{from:"applications",to:"dispatcher",style:"solid"}].map(((e,t)=>{const n=u.find((t=>t.id===e.from)),r=u.find((t=>t.id===e.to)),i=o===e.from||o===e.to||l===e.from||l===e.to,a=(n.x+r.x)/2,s=(n.y+r.y)/2,c=r.x-n.x,d=.3*-(r.y-n.y),f=.3*c,p=`M ${n.x} ${n.y} Q ${a+d} ${s+f} ${r.x} ${r.y}`;return(0,Jr.jsx)(Pa,{d:p,stroke:"white",strokeDasharray:"dotted"===e.style?"5,5":"",isHighlighted:i},t)})),u.map((e=>(0,Jr.jsxs)("g",{className:"clickable-node",onMouseEnter:()=>a(e.id),onMouseLeave:()=>a(null),onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log("Node clicked with ID:",e.id),s((t=>t===e.id?null:e.id))},style:{cursor:"pointer"},children:[(0,Jr.jsx)(Ta,{cx:e.x,cy:e.y,r:e.r,fill:e.color,stroke:e.id===l?"white":"rgba(255, 255, 255, 0.5)",strokeWidth:e.id===l?3:1}),e.isLogo&&(0,Jr.jsx)(Ra,{href:qr,x:e.x-.7*e.r,y:e.y-.7*e.r,size:1.4*e.r,preserveAspectRatio:"xMidYMid meet"}),"database"===e.icon&&(0,Jr.jsx)(za,{size:e.r,children:(0,Jr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 472 512",fill:"white",children:(0,Jr.jsx)("path",{d:"M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"})})}),"puzzle"===e.icon&&(0,Jr.jsx)(za,{size:e.r,children:(0,Jr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 496 512",fill:"white",children:(0,Jr.jsx)("path",{d:"M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"})})}),"laptop"===e.icon&&(0,Jr.jsx)(za,{size:e.r,children:(0,Jr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 640 512",fill:"white",children:(0,Jr.jsx)("path",{d:"M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"})})}),"brain"===e.icon&&(0,Jr.jsx)(za,{size:e.r,children:(0,Jr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 512 512",fill:"white",children:(0,Jr.jsx)("path",{d:"M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56zM184 80c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184z"})})}),(0,Jr.jsx)(_a,{x:e.x,y:e.y+e.r+20,isCentral:"central"===e.type,children:e.label})]},e.id)))]})})})]}),(0,Jr.jsx)(Sa,{children:l?(0,Jr.jsxs)(Jr.Fragment,{children:[(0,Jr.jsx)(ka,{children:c[l].title}),(0,Jr.jsx)(Ea,{children:c[l].description}),(0,Jr.jsx)(Oa,{children:"Key Technologies:"}),(0,Jr.jsx)(ja,{children:c[l].technologies.map(((e,t)=>(0,Jr.jsxs)(ma,{children:[(0,Jr.jsx)(ga,{children:e.title}),(0,Jr.jsx)(va,{children:e.description})]},t)))})]}):(0,Jr.jsx)("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"center"},children:(0,Jr.jsx)("p",{children:"Click on a node in the diagram to view details"})})})]})]})})]})},La=Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Na=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
  scroll-behavior: smooth;
  overflow-y: auto;

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
`,Aa=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${La} 0.8s ease-out;
  scroll-behavior: smooth;
`,Fa=Gr.div`
  padding-top: 120px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 8rem;
`,Ma=Gr.h1`
  font-size: 3.75rem;
  margin-bottom: 2rem;
  color: white;
  line-height: 1.1;
  font-weight: 500;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ia=Gr.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,$a=Gr.div`
  max-width: 1400px;
  margin: 0 auto 12rem;
  padding: 0 2rem;
`,Ua=Gr.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: white;
  font-weight: 500;
  text-align: left;
`,Ba=Gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Wa=Gr.div`
  background: transparent;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`,Ha=Gr.div`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #3B82F6;
  display: flex;
  justify-content: center;
`,Va=Gr.h3`
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
`,Ya=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 auto;
  max-width: 90%;
`,Ga=Gr.div`
  text-align: center;
  margin: 6rem auto;
  max-width: 800px;
`,Xa=Gr.a`
  display: inline-block;
  padding: 1.2rem 3rem;
  background: white;
  color: #000;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
  }
`;const Ka=function(){(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]);const t=[{icon:(0,Jr.jsx)(Ri,{}),title:"Developer Resources",description:"Access comprehensive documentation, sandbox environments, and reference applications to build and deploy solutions on Geo OS for Earth-scale operations."},{icon:(0,Jr.jsx)(Li,{}),title:"Testing & Validation",description:"Utilize our testing frameworks and simulation environments to ensure your solutions meet the highest standards of reliability for mission-critical Earth operations."},{icon:(0,Jr.jsx)(Di,{}),title:"Integration Support",description:"Seamlessly integrate your solutions with Geo OS through our standardized APIs and SDKs, with direct access to our engineering team."}],n=[{icon:(0,Jr.jsx)(Pi,{}),title:"Early Access",description:"Get priority access to new APIs, features, and Platform capabilities before general release, enabling you to build cutting-edge Earth operations solutions."},{icon:(0,Jr.jsx)(Li,{}),title:"Technical Support",description:"Direct access to our engineering team for architecture reviews, technical guidance, and optimization of your integrated solutions."},{icon:(0,Jr.jsx)(Di,{}),title:"Innovation Partnership",description:"Collaborate on developing novel solutions and shape the future of autonomous Earth operations through direct input into our product roadmap."}];return(0,Jr.jsxs)(Na,{children:[(0,Jr.jsx)(zo,{}),(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(Aa,{children:[(0,Jr.jsxs)(Fa,{children:[(0,Jr.jsxs)(Ma,{children:["Open Ecosystem ",(0,Jr.jsx)("br",{})," for Autonomous Earth Operations"]}),(0,Jr.jsx)(Ia,{children:"The Geo OS Partner Program enables organizations to create, integrate, and deploy transformative solutions for next-generation Earth operations."})]}),(0,Jr.jsxs)($a,{children:[(0,Jr.jsx)(Ua,{children:"Partner Resources"}),(0,Jr.jsx)(Ba,{children:t.map(((e,t)=>(0,Jr.jsxs)(Wa,{children:[(0,Jr.jsx)(Ha,{children:e.icon}),(0,Jr.jsx)(Va,{children:e.title}),(0,Jr.jsx)(Ya,{children:e.description})]},`resource-${t}`)))})]}),(0,Jr.jsxs)($a,{children:[(0,Jr.jsx)(Ua,{children:"Partner Benefits"}),(0,Jr.jsx)(Ba,{children:n.map(((e,t)=>(0,Jr.jsxs)(Wa,{children:[(0,Jr.jsx)(Ha,{children:e.icon}),(0,Jr.jsx)(Va,{children:e.title}),(0,Jr.jsx)(Ya,{children:e.description})]},`benefit-${t}`)))})]}),(0,Jr.jsxs)(Ga,{children:[(0,Jr.jsx)(Ma,{style:{fontSize:"2.5rem",marginBottom:"30px"},children:"Ready to become a partner?"}),(0,Jr.jsx)(Xa,{href:"/contact",children:"Apply Now"})]}),(0,Jr.jsx)(Ki,{})]})]})},Qa=Gr.div`
  min-height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
`,qa=Gr.div`
  flex: 1;
  padding: 80px 5% 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`,Ja=Gr.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Za=Gr.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`,el=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,tl=Gr(qe)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
  }
`;const nl=function(){return(0,Jr.jsxs)(Qa,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(qa,{children:[(0,Jr.jsx)(Ja,{children:"Platform"}),(0,Jr.jsx)(Za,{children:"Explore our comprehensive suite of operational solutions designed to transform and automate complex geospatial operations across multiple domains."}),(0,Jr.jsx)(el,{children:[{title:"Airfield Operations",description:"Advanced air traffic management and ground operations optimization for modern airfields.",link:"/platform/airfield-operations"},{title:"Maritime Operations",description:"Comprehensive maritime domain awareness and vessel traffic management solutions.",link:"/platform/maritime-operations"},{title:"Logistics Operations",description:"End-to-end logistics optimization and supply chain intelligence platform.",link:"/platform/logistics-operations"}].map(((e,t)=>(0,Jr.jsxs)(tl,{to:e.link,children:[(0,Jr.jsx)("h2",{children:e.title}),(0,Jr.jsx)("p",{children:e.description})]},t)))})]}),(0,Jr.jsx)(Ki,{})]})},rl=n.p+"static/media/c-room.d33907fce5a933c06c3b.jpg",il=n.p+"static/media/dispatch.492fd7934bf821d0e779.png",ol=n.p+"static/media/pilot.2a1919d316a77bbbfbc9.png",al=Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ll=Qr`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,sl=Qr`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ul=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  isolation: isolate;
  scroll-behavior: smooth;
  overflow-y: auto;

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }

  /* Smooth Scroll Effect */
  & {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
`,cl=Gr.div`
  position: relative;
  z-index: 50;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${al} 0.8s ease-out;
  scroll-behavior: smooth;
`,dl=Gr.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${rl}) no-repeat center center;
  background-size: cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  }
`,fl=Gr.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 max(5%, 24px);
  display: flex;
  flex-direction: column;
`,pl=Gr.div`
  margin-top: auto;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,hl=Gr.div`
  flex: 1;
`,ml=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,gl=Gr.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  opacity: 0;
  animation: ${al} 0.8s ease forwards;
  animation-delay: 0.2s;
`,vl=Gr.h1`
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  color: white;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 15ch;
  opacity: 0;
  animation: ${al} 0.8s ease forwards;
  animation-delay: 0.4s;
`,yl=Gr.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
  margin-right: -5%;
`,xl=Gr.p`
  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 400px;
  text-align: left;
  font-weight: 400;
  margin-right: 5%;
  opacity: 0;
  animation: ${al} 0.8s ease forwards;
  animation-delay: 0.6s;
`,bl=Gr.div`
  position: relative;
  background: #000;
`,wl=Gr.div`
  padding: 120px 5%;
  background: #000;
`,Sl=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
`,kl=Gr.div`
  padding: 120px 0 60px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
`,El=Gr.h2`
  font-size: 3rem;
  color: white;
  line-height: 1.1;
  font-weight: 500;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?sl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-left: 0;
`,jl=Gr.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  color: white;
  text-align: left;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?sl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-left: 24px;
`,Cl=Gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Tl=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${e=>e.$image}) no-repeat center center;
  background-size: cover;
  opacity: ${e=>e.$isActive?1:0};
  transition: opacity 0.5s ease;
`,_l=Gr.div`
  padding: 0 24px;
  background: #000;
  position: relative;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 80px;
`,Pl=Gr.div`
  width: 100%;
  display: flex;
  position: relative;
  gap: 0;
  background: #000;
`,Rl=Gr.div`
  width: 8px;
  height: 8px;
  background: ${e=>e.$isActive?"#FF4D00":"rgba(255, 77, 0, 0.3)"};
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${al} 0.5s ease forwards;
  animation-delay: 0.2s;
`,zl=Gr.div`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  margin-bottom: ${e=>e.$isActive?"1rem":"0"};
  opacity: 0;
  animation: ${ll} 0.5s ease forwards;
  animation-delay: 0.3s;
`,Ol=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  animation: ${al} 0.5s ease forwards;
  animation-delay: 0.4s;
`,Dl=Gr.div`
  position: relative;
  flex: 1;
  width: ${e=>e.$isActive?"600px":"200px"};
  height: 600px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  background: #000;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-right: none;
  }

  &:hover {
    width: 600px;
  }
`,Ll=Gr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${e=>e.$isActive?"linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)":"none"};
  height: ${e=>e.$isActive?"50%":"auto"};
  
  ${Rl}, ${zl}, ${Ol} {
    animation-play-state: ${e=>e.$isActive?"running":"paused"};
  }

  ${Dl}:hover & {
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    height: 50%;

    ${Rl}, ${zl}, ${Ol} {
      animation-play-state: running;
    }
  }
`,Nl=Gr.div`
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?sl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${e=>e.$isVisible?.15*e.$index:0}s;
`,Al=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2rem;
`,Fl=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,Ml=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`;const Il=function(){const[t,n]=(0,e.useState)("dispatcher"),[r,i]=(0,e.useState)(!1),[o,a]=(0,e.useState)(!1),l=(0,e.useRef)(null),s=(0,e.useRef)(null);(0,e.useEffect)((()=>{window.scrollTo(0,0);const e={threshold:.15,rootMargin:"50px"},t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(i(!0),t.unobserve(e.target))}))}),e),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(a(!0),n.unobserve(e.target))}))}),e);return l.current&&t.observe(l.current),s.current&&n.observe(s.current),()=>{l.current&&t.unobserve(l.current),s.current&&n.unobserve(s.current)}}),[]);const u=[{id:"dispatcher",title:"Dispatcher",image:il,description:"Advanced dispatch optimization and fleet monitoring powered by GeoSpatial intelligence. Simulating the possible futures and identifying possible IROPs with Ultra-High-Resolution weather predictions and pattern analysis enable better planning and reduced operational costs."},{id:"pilot",title:"Pilot",image:ol,description:"Enhanced situational awareness and real-time decision-making through seamless EFB integration. Real-time updates and route optimization powered by superior weather predictions and cloud-native GeoSpatial Intelligence."},{id:"atc",title:"ATC",image:rl,description:"Streamlined Vectoring and Coordination with comprehensive situational awareness and Trajectory Predictions. Automated tools and predictive analytics optimize traffic flow and reduce controller workload."}];return(0,Jr.jsxs)(ul,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(cl,{children:[(0,Jr.jsx)(dl,{children:(0,Jr.jsx)(fl,{children:(0,Jr.jsxs)(pl,{children:[(0,Jr.jsx)(hl,{children:(0,Jr.jsxs)(ml,{children:[(0,Jr.jsx)(gl,{children:"[GEOSPATIAL INTELLIGENCE + FLIGHT OPERATIONS]"}),(0,Jr.jsx)(vl,{children:"Airfield Operations"})]})}),(0,Jr.jsx)(yl,{children:(0,Jr.jsx)(xl,{children:"Transform flight operations with superior weather prediction and GeoSpatial intelligence, enabling smarter decisions for dispatchers, pilots, and ATC."})})]})})}),(0,Jr.jsxs)(bl,{children:[(0,Jr.jsx)(kl,{ref:l,children:(0,Jr.jsx)(El,{$isVisible:r,children:"Enhanced operational Platform"})}),(0,Jr.jsx)(_l,{children:(0,Jr.jsx)(Pl,{children:u.map((e=>(0,Jr.jsxs)(Dl,{$isActive:t===e.id,onMouseEnter:()=>n(e.id),children:[(0,Jr.jsx)(Tl,{$image:e.image,$isActive:t===e.id}),(0,Jr.jsxs)(Ll,{$isActive:t===e.id,children:[(0,Jr.jsx)(Rl,{$isActive:t===e.id}),(0,Jr.jsx)(zl,{$isActive:t===e.id,children:e.title}),t===e.id&&(0,Jr.jsx)(Ol,{children:e.description})]})]},e.id)))})}),(0,Jr.jsx)(wl,{children:(0,Jr.jsxs)(Sl,{ref:s,children:[(0,Jr.jsx)(jl,{$isVisible:o,children:"Key Features + Platform"}),(0,Jr.jsx)(Cl,{children:[{number:"01",title:"Superior Weather Prediction",description:"Ultra-high-resolution weather forecasting powered by GeoSpatial AI, combining multiple data sources to enable better flight planning and reduce weather-related delays."},{number:"02",title:"Intelligent Dispatch System",description:"Optimize flight planning with AI-powered tools that leverage advanced GeoSpatial data to reduce fuel consumption and improve operational efficiency."},{number:"03",title:"Enhanced EFB Integration",description:"Provide pilots with real-time GeoSpatial insights, weather updates, and route optimization through seamless Electronic Flight Bag integration."},{number:"04",title:"Collaborative Operations",description:"Connect dispatch, flight crews, and ATC through a unified platform with real-time situational awareness and automated coordination tools."},{number:"05",title:"Comprehensive Data Sources",description:"Leveraging more than 100 data sources including weather, traffic, airspace, and flight plans from Private and Public providers, we provide the most comprehensive and accurate predictions."},{number:"06",title:"Seamless Integration",description:"Building on the modular and flexible foundation, we offer APIs that can be easily integrate to your applications for real-time situational awareness and decision-making."}].map(((e,t)=>(0,Jr.jsxs)(Nl,{$index:t,$isVisible:o,children:[(0,Jr.jsx)(Al,{children:e.number}),(0,Jr.jsx)(Fl,{children:e.title}),(0,Jr.jsx)(Ml,{children:e.description})]},t)))})]})}),(0,Jr.jsx)(Ki,{})]})]})]})},$l=n.p+"static/media/maritime-room.b11dd7e9c64fc34f0978.png",Ul=Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Bl=Qr`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Wl=Qr`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Hl=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  isolation: isolate;
  scroll-behavior: smooth;
  overflow-y: auto;

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }

  /* Smooth Scroll Effect */
  & {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }
`,Vl=Gr.div`
  position: relative;
  z-index: 50;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${Ul} 0.8s ease-out;
  scroll-behavior: smooth;
`,Yl=Gr.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${$l}) no-repeat center center;
  background-size: cover;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  }
`,Gl=Gr.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 max(5%, 24px);
  display: flex;
  flex-direction: column;
`,Xl=Gr.div`
  margin-top: auto;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,Kl=Gr.div`
  flex: 1;
`,Ql=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ql=Gr.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  opacity: 0;
  animation: ${Ul} 0.8s ease forwards;
  animation-delay: 0.2s;
`,Jl=Gr.h1`
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  color: white;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 15ch;
  opacity: 0;
  animation: ${Ul} 0.8s ease forwards;
  animation-delay: 0.4s;
`,Zl=Gr.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
  margin-right: -5%;
`,es=Gr.p`
  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 400px;
  text-align: left;
  font-weight: 400;
  margin-right: 5%;
  opacity: 0;
  animation: ${Ul} 0.8s ease forwards;
  animation-delay: 0.6s;
`,ts=Gr.div`
  position: relative;
  background: #000;
`,ns=Gr.div`
  padding: 120px 5%;
  background: #000;
`,rs=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
`,is=Gr.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  color: white;
  text-align: left;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Wl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`,os=Gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,as=Gr.div`
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Wl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${e=>e.$isVisible?.15*e.$index:0}s;
`,ls=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2rem;
`,ss=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,us=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`,cs=Gr.div`
  padding: 0 24px;
  background: #000;
  position: relative;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 80px;
`,ds=Gr.div`
  width: 100%;
  display: flex;
  position: relative;
  gap: 0;
  background: #000;
`,fs=Gr.div`
  position: relative;
  flex: 1;
  width: ${e=>e.$isActive?"600px":"200px"};
  height: 600px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  cursor: pointer;
  background: #000;
  border-right: 1px solid rgba(255, 255, 255, 0.2);

  &:last-child {
    border-right: none;
  }

  &:hover {
    width: 600px;
  }
`,ps=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${e=>e.$image}) no-repeat center center;
  background-size: 150% auto;
  transform: scale(1.1);
  opacity: ${e=>e.$isActive?1:0};
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${fs}:hover & {
    transform: scale(1.15);
  }
`,hs=Gr.div`
  width: 8px;
  height: 8px;
  background: ${e=>e.$isActive?"#0066FF":"rgba(0, 102, 255, 0.3)"};
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${Ul} 0.5s ease forwards;
  animation-delay: 0.2s;
`,ms=Gr.div`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  margin-bottom: ${e=>e.$isActive?"1rem":"0"};
  opacity: 0;
  animation: ${Bl} 0.5s ease forwards;
  animation-delay: 0.3s;
`,gs=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  animation: ${Ul} 0.5s ease forwards;
  animation-delay: 0.4s;
`,vs=Gr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${e=>e.$isActive?"linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)":"none"};
  height: ${e=>e.$isActive?"50%":"auto"};
  
  ${hs}, ${ms}, ${gs} {
    animation-play-state: ${e=>e.$isActive?"running":"paused"};
  }

  ${fs}:hover & {
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    height: 50%;

    ${hs}, ${ms}, ${gs} {
      animation-play-state: running;
    }
  }
`,ys=Gr.div`
  padding: 120px 0 60px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
`,xs=Gr.h2`
  font-size: 3rem;
  color: white;
  line-height: 1.1;
  font-weight: 500;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Wl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-left: 0;
`;const bs=function(){const[t,n]=(0,e.useState)("dispatcher"),[r,i]=(0,e.useState)(!1),[o,a]=(0,e.useState)(!1),l=(0,e.useRef)(null),s=(0,e.useRef)(null);(0,e.useEffect)((()=>{window.scrollTo(0,0);const e={threshold:.15,rootMargin:"50px"},t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(i(!0),t.unobserve(e.target))}))}),e),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(a(!0),n.unobserve(e.target))}))}),e);return l.current&&t.observe(l.current),s.current&&n.observe(s.current),()=>{l.current&&t.unobserve(l.current),s.current&&n.unobserve(s.current)}}),[]);const u=[{id:"dispatcher",title:"Dispatcher",image:$l,description:"Advanced maritime dispatch optimization and fleet monitoring powered by GeoSpatial intelligence. Real-time vessel tracking and route optimization enable better planning and reduced operational costs."},{id:"vtc",title:"VTC",image:$l,description:"Enhanced vessel traffic control with comprehensive situational awareness and predictive analytics. Real-time monitoring and AI-powered risk assessment ensure safe and efficient maritime operations."}];return(0,Jr.jsxs)(Hl,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(Vl,{children:[(0,Jr.jsx)(Yl,{children:(0,Jr.jsx)(Gl,{children:(0,Jr.jsxs)(Xl,{children:[(0,Jr.jsx)(Kl,{children:(0,Jr.jsxs)(Ql,{children:[(0,Jr.jsx)(ql,{children:"[GEOSPATIAL INTELLIGENCE + MARITIME]"}),(0,Jr.jsx)(Jl,{children:"Maritime Operations"})]})}),(0,Jr.jsx)(Zl,{children:(0,Jr.jsx)(es,{children:"Enhance maritime operations with advanced GeoSpatial intelligence and real-time vessel tracking for improved safety and efficiency."})})]})})}),(0,Jr.jsxs)(ts,{children:[(0,Jr.jsx)(ys,{ref:l,children:(0,Jr.jsx)(xs,{$isVisible:r,children:"Enhanced operational Platform"})}),(0,Jr.jsx)(cs,{children:(0,Jr.jsx)(ds,{children:u.map((e=>(0,Jr.jsxs)(fs,{$isActive:t===e.id,onMouseEnter:()=>n(e.id),children:[(0,Jr.jsx)(ps,{$image:e.image,$isActive:t===e.id}),(0,Jr.jsxs)(vs,{$isActive:t===e.id,children:[(0,Jr.jsx)(hs,{$isActive:t===e.id}),(0,Jr.jsx)(ms,{$isActive:t===e.id,children:e.title}),t===e.id&&(0,Jr.jsx)(gs,{children:e.description})]})]},e.id)))})}),(0,Jr.jsx)(ns,{children:(0,Jr.jsxs)(rs,{ref:s,children:[(0,Jr.jsx)(is,{$isVisible:o,children:"Key Features + Platform"}),(0,Jr.jsx)(os,{children:[{number:"01",title:"Maritime Domain Awareness",description:"Comprehensive maritime surveillance with AI-powered vessel detection, tracking, and behavior analysis for enhanced situational awareness."},{number:"02",title:"Advanced Weather Integration",description:"Superior maritime weather forecasting combining multiple models with real-time oceanographic and atmospheric data."},{number:"03",title:"Port Operations Optimization",description:"Intelligent scheduling and resource allocation for improved port efficiency and reduced vessel waiting times."},{number:"04",title:"Real-Time Route Planning",description:"Dynamic route optimization considering weather conditions, traffic patterns, and operational constraints."},{number:"05",title:"Secure Communications",description:"Encrypted data transmission and secure information sharing across maritime stakeholders and vessels."},{number:"06",title:"Environmental Monitoring",description:"Advanced monitoring of marine conditions and environmental compliance with AI-powered analytics."}].map(((e,t)=>(0,Jr.jsxs)(as,{$index:t,$isVisible:o,children:[(0,Jr.jsx)(ls,{children:e.number}),(0,Jr.jsx)(ss,{children:e.title}),(0,Jr.jsx)(us,{children:e.description})]},t)))})]})}),(0,Jr.jsx)(Ki,{})]})]})]})},ws=Qr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ss=(Qr`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
  scroll-behavior: smooth;

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    
    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }

  /* Smooth Scroll Effect */
  & {
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    overflow-y: overlay;
  }

  /* Add this to the root element */
  @media screen and (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`),ks=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${ws} 0.8s ease-out;
  scroll-behavior: smooth;
`,Es=Gr.div`
  padding-top: 120px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
`,js=Gr.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Cs=Gr.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,Ts=Gr.div`
  max-width: 800px;
  margin: 0 auto 6rem;
`,_s=Gr.div`
  margin-bottom: 4rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,Ps=Gr.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Rs=Gr.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  
  p {
    margin-bottom: 1.5rem;
  }
  
  strong {
    color: #3B82F6;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;Gr.span`
  color: #3B82F6;
  font-weight: 600;
`;const zs=function(){return(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,Jr.jsxs)(Ss,{children:[(0,Jr.jsx)(zo,{}),(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(ks,{children:[(0,Jr.jsxs)(Es,{children:[(0,Jr.jsx)(js,{children:"The GeoSpatios Manifesto"}),(0,Jr.jsx)(Cs,{children:"Building the operating system for global operations"})]}),(0,Jr.jsxs)(Ts,{children:[(0,Jr.jsxs)(_s,{children:[(0,Jr.jsx)(Ps,{children:"Automating the Earth"}),(0,Jr.jsxs)(Rs,{children:[(0,Jr.jsxs)("p",{children:["We are entering a new era where ",(0,Jr.jsx)("strong",{children:"autonomous systems"})," will transform how humans interact with our world. This era demands a new platform to enable thousands of different systems to work together in real-time across air, land, sea, and space."]}),(0,Jr.jsxs)("p",{children:["At GeoSpatios, we believe that automating global geospatial operations isn't just about efficiency\u2014it's about ",(0,Jr.jsx)("strong",{children:"expanding human potential"}),". When we remove the constraints of manual coordination and decision-making from complex operations, we unlock new possibilities for exploration, commerce, and safety at a planetary scale."]})]})]}),(0,Jr.jsxs)(_s,{children:[(0,Jr.jsx)(Ps,{children:"Beyond Human-in-the-Loop"}),(0,Jr.jsxs)(Rs,{children:[(0,Jr.jsxs)("p",{children:["The decision-making speed of autonomous systems greatly exceeds human capacity. Traditional human-in-the-loop approaches create bottlenecks that limit operational tempo and effectiveness. Our platform creates an ",(0,Jr.jsx)("strong",{children:"asymmetrical advantage"})," for its users by enabling machines to make decisions at machine speed while maintaining human oversight at the strategic level."]}),(0,Jr.jsxs)("p",{children:["This shift introduces new security challenges and requires radically new interfaces. We are developing novel interaction patterns that allow humans to direct and supervise autonomous fleets without becoming operational constraints. Our goal is to ",(0,Jr.jsx)("strong",{children:"multiply human capability"})," rather than simply automate existing workflows."]})]})]}),(0,Jr.jsxs)(_s,{children:[(0,Jr.jsx)(Ps,{children:"Geo OS Architecture"}),(0,Jr.jsxs)(Rs,{children:[(0,Jr.jsxs)("p",{children:["GeoSpatios is building ",(0,Jr.jsx)("strong",{children:"Geo OS"}),"\u2014a comprehensive operating system for global operations that integrates geospatial data processing, foundation models, modular functions, and applications. This unified platform enables informed decision-making at speeds and scales previously impossible."]}),(0,Jr.jsxs)("p",{children:["Our architecture combines four core components: a centralized ",(0,Jr.jsx)("strong",{children:"database layer"})," for diverse data sources, ",(0,Jr.jsx)("strong",{children:"foundation models"})," for advanced AI processing, ",(0,Jr.jsx)("strong",{children:"modularized functions"})," for specialized Platform, and ",(0,Jr.jsx)("strong",{children:"application interfaces"})," that deliver solutions to end users. Together, they form a complete system for automating complex global operations."]})]})]}),(0,Jr.jsxs)(_s,{children:[(0,Jr.jsx)(Ps,{children:"Cross-Industry Solutions"}),(0,Jr.jsxs)(Rs,{children:[(0,Jr.jsxs)("p",{children:["Our technology transcends industry boundaries to solve universal operational challenges: ",(0,Jr.jsx)("strong",{children:"resource optimization, risk management, logistics planning, and coordinated execution"})," across distributed assets. We deliver measurable improvements in operational efficiency and effectiveness."]}),(0,Jr.jsxs)("p",{children:["GeoSpatios technology enables operators to manage ",(0,Jr.jsx)("strong",{children:"hundreds of assets simultaneously"}),", turning what was once impossible into routine operations. Whether coordinating disaster response, optimizing global logistics, or managing complex infrastructure, our systems provide the backbone for a new era of global operations."]})]})]}),(0,Jr.jsxs)(_s,{children:[(0,Jr.jsx)(Ps,{children:"Our Mission"}),(0,Jr.jsx)(Rs,{children:(0,Jr.jsx)("p",{children:"GeoSpatios exists to preserve and extend human potential through technology. We're creating the infrastructure that enables humans to safely operate at global scale\u2014automating the routine so that people can focus on the exceptional."})})]})]}),(0,Jr.jsx)(Ki,{})]})]})};class Os{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const Ds={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},Ls=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},Ns=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await fetch(Ds.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),o=new Os(r.status,i);if(r.ok)return o;throw o},As=(e,t,n)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!==typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Fs=e=>e.webdriver||!e.languages||0===e.languages.length,Ms=()=>new Os(451,"Unavailable For Headless Browser"),Is=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=((e,t)=>e instanceof FormData?e.get(t):e[t])(t,e.watchVariable);return"string"===typeof n&&e.list.includes(n)},$s=()=>new Os(403,"Forbidden"),Us=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,i=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return i>0||(await n.set(r,Date.now().toString()),!1)},Bs=()=>new Os(429,"Too Many Requests"),Ws=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;const n=Ls(e);Ds.publicKey=n.publicKey,Ds.blockHeadless=n.blockHeadless,Ds.storageProvider=n.storageProvider,Ds.blockList=n.blockList,Ds.limitRate=n.limitRate,Ds.origin=n.origin||t},Hs=async(e,t,n,r)=>{const i=Ls(r),o=i.publicKey||Ds.publicKey,a=i.blockHeadless||Ds.blockHeadless,l=Ds.storageProvider||i.storageProvider,s={...Ds.blockList,...i.blockList},u={...Ds.limitRate,...i.limitRate};if(a&&Fs(navigator))return Promise.reject(Ms());const c=(e=>"string"===typeof e?document.querySelector(e):e)(n);As(o,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(c);const d=new FormData(c);return Is(s,d)?Promise.reject($s()):await Us(location.pathname,u,l)?Promise.reject(Bs()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),Ns("/api/v1.0/email/send-form",d))},Vs=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,Ys=Gr.div`
  position: relative;
  z-index: 50;
  padding: 120px 5% 60px;
  pointer-events: auto;
  max-width: 1200px;
  margin: 0 auto;
`,Gs=Gr.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Xs=Gr.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,Ks=Gr.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 20px;
  }
`,Qs=Gr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qs=Gr.div`
  margin-bottom: 24px;
`,Js=Gr.label`
  display: block;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`,Zs=Gr.input`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`,eu=Gr.select`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  option {
    background: #1a1a1a;
    color: white;
  }
`,tu=Gr.textarea`
  width: 100%;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`,nu=Gr.button`
  background: white;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 16px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,ru=Gr.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  color: #00ff00;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 24px;
`,iu=Gr.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: #ff0000;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 24px;
`,ou=()=>{const t=(0,e.useRef)(),[n,r]=((0,e.useRef)(),(0,e.useState)({submitting:!1,submitted:!1,error:null}));(0,e.useEffect)((()=>{Ws("jdMIZFvSFHNQfLeBN")}),[]);return(0,Jr.jsxs)(Vs,{children:[(0,Jr.jsx)(gi,{}),(0,Jr.jsxs)(Ys,{children:[(0,Jr.jsx)(Gs,{children:"Contact Us"}),(0,Jr.jsx)(Xs,{children:"Have questions about our Earth operations platform? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."}),(0,Jr.jsxs)(Ks,{ref:t,onSubmit:e=>{e.preventDefault(),r({submitting:!0,submitted:!1,error:null});const n=new FormData(t.current);console.log("Form Data:",{name:n.get("name"),company:n.get("company"),title:n.get("title"),email:n.get("email"),phone:n.get("phone"),country:n.get("country"),message:n.get("message")}),Hs("service_0v41bzd","template_n6s6wp8",t.current,"jdMIZFvSFHNQfLeBN").then((()=>{r({submitting:!1,submitted:!0,error:null}),t.current.reset()}),(e=>{r({submitting:!1,submitted:!1,error:"Failed to send message. Please try again."}),console.error("Error:",e)}))},children:[(0,Jr.jsxs)(Qs,{children:[(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"name",children:"Name *"}),(0,Jr.jsx)(Zs,{type:"text",id:"name",name:"name",placeholder:"Enter your full name",required:!0})]}),(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"company",children:"Company Name *"}),(0,Jr.jsx)(Zs,{type:"text",id:"company",name:"company",placeholder:"Enter your company name",required:!0})]}),(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"title",children:"Title *"}),(0,Jr.jsx)(Zs,{type:"text",id:"title",name:"title",placeholder:"Enter your job title",required:!0})]}),(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"email",children:"Email *"}),(0,Jr.jsx)(Zs,{type:"email",id:"email",name:"email",placeholder:"Enter your email address",required:!0})]}),(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"phone",children:"Phone Number"}),(0,Jr.jsx)(Zs,{type:"tel",id:"phone",name:"phone",placeholder:"Enter your phone number"})]}),(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"country",children:"Country *"}),(0,Jr.jsxs)(eu,{id:"country",name:"country",required:!0,children:[(0,Jr.jsx)("option",{value:"",children:"Select your country"}),(0,Jr.jsx)("option",{value:"US",children:"United States"}),(0,Jr.jsx)("option",{value:"UK",children:"United Kingdom"}),(0,Jr.jsx)("option",{value:"CA",children:"Canada"}),(0,Jr.jsx)("option",{value:"AU",children:"Australia"}),(0,Jr.jsx)("option",{value:"DE",children:"Germany"}),(0,Jr.jsx)("option",{value:"FR",children:"France"}),(0,Jr.jsx)("option",{value:"JP",children:"Japan"}),(0,Jr.jsx)("option",{value:"Other",children:"Other"})]})]})]}),(0,Jr.jsxs)(qs,{children:[(0,Jr.jsx)(Js,{htmlFor:"message",children:"Message *"}),(0,Jr.jsx)(tu,{id:"message",name:"message",placeholder:"Tell us about your needs and how we can help...",required:!0})]}),(0,Jr.jsx)(nu,{type:"submit",id:"button",disabled:n.submitting,children:n.submitting?"Sending...":"Send Message"}),n.submitted&&(0,Jr.jsx)(ru,{children:"Thank you for your message! We'll get back to you soon."}),n.error&&(0,Jr.jsx)(iu,{children:n.error})]})]}),(0,Jr.jsx)(Ki,{})]})},au=Kr`
  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000000;
    border-radius: 3px;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #333333;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #000000 rgba(255, 255, 255, 1.0);
  }
`,lu=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;const su=function(){return(0,Jr.jsxs)(lu,{children:[(0,Jr.jsx)(au,{}),(0,Jr.jsx)(Ke,{children:(0,Jr.jsxs)(me,{children:[(0,Jr.jsx)(pe,{path:"/",element:(0,Jr.jsx)(ko,{})}),(0,Jr.jsx)(pe,{path:"/geo-os",element:(0,Jr.jsx)(Go,{})}),(0,Jr.jsx)(pe,{path:"/solutions",element:(0,Jr.jsx)(la,{})}),(0,Jr.jsx)(pe,{path:"/technology",element:(0,Jr.jsx)(Da,{})}),(0,Jr.jsx)(pe,{path:"/partner-program",element:(0,Jr.jsx)(Ka,{})}),(0,Jr.jsx)(pe,{path:"/platform",element:(0,Jr.jsx)(nl,{})}),(0,Jr.jsx)(pe,{path:"/platform/airfield-operations",element:(0,Jr.jsx)(Il,{})}),(0,Jr.jsx)(pe,{path:"/platform/maritime-operations",element:(0,Jr.jsx)(bs,{})}),(0,Jr.jsx)(pe,{path:"/manifesto",element:(0,Jr.jsx)(zs,{})}),(0,Jr.jsx)(pe,{path:"/contact",element:(0,Jr.jsx)(ou,{})}),(0,Jr.jsx)(pe,{path:"/careers",element:(0,Jr.jsx)(Ro,{})}),(0,Jr.jsx)(pe,{path:"*",element:(0,Jr.jsx)(Ro,{})})]})})]})},uu=Kr`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #000;
    overflow-x: hidden;
  }

  canvas {
    width: 100% !important;
    height: 100% !important;
    display: block !important;
  }
`;t.createRoot(document.getElementById("root")).render((0,Jr.jsxs)(e.StrictMode,{children:[(0,Jr.jsx)(uu,{}),(0,Jr.jsx)(su,{})]}))})()})();
//# sourceMappingURL=main.ea961bed.js.map