/*! For license information please see main.208c1a36.js.LICENSE.txt */
(()=>{var e={24:(e,t,n)=>{"use strict";function r(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}n.r(t),n.d(t,{clsx:()=>i,default:()=>o});const o=i},43:(e,t,n)=>{"use strict";e.exports=n(202)},67:(e,t,n)=>{"use strict";e.exports=n(612)},136:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(43)),i=f(n(173)),o=f(n(950)),a=f(n(24)),l=n(212),s=n(777),u=n(447),c=f(n(935)),d=f(n(387));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class g extends r.Component{static getDerivedStateFromProps(e,t){let{position:n}=e,{prevPropsPosition:r}=t;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(e){super(e),m(this,"onDragStart",((e,t)=>{(0,d.default)("Draggable: onDragStart: %j",t);if(!1===this.props.onStart(e,(0,s.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),m(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",t);const n=(0,s.createDraggableData)(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[i,o]=(0,s.getBoundPosition)(this,r.x,r.y);r.x=i,r.y=o,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(e,n))return!1;this.setState(r)})),m(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,s.createDraggableData)(this,t)))return!1;(0,d.default)("Draggable: onDragStop: %j",t);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){"undefined"!==typeof window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:o.default.findDOMNode(this)}render(){const{axis:e,bounds:t,children:n,defaultPosition:i,defaultClassName:o,defaultClassNameDragging:u,defaultClassNameDragged:d,position:f,positionOffset:p,scale:m,...g}=this.props;let v={},x=null;const y=!Boolean(f)||this.state.dragging,b=f||i,w={x:(0,s.canDragX)(this)&&y?this.state.x:b.x,y:(0,s.canDragY)(this)&&y?this.state.y:b.y};this.state.isElementSVG?x=(0,l.createSVGTransform)(w,p):v=(0,l.createCSSTransform)(w,p);const S=(0,a.default)(n.props.className||"",o,{[u]:this.state.dragging,[d]:this.state.dragged});return r.createElement(c.default,h({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:S,style:{...n.props.style,...v},transform:x}))}}t.default=g,m(g,"displayName","Draggable"),m(g,"propTypes",{...c.default.propTypes,axis:i.default.oneOf(["both","x","y","none"]),bounds:i.default.oneOfType([i.default.shape({left:i.default.number,right:i.default.number,top:i.default.number,bottom:i.default.number}),i.default.string,i.default.oneOf([!1])]),defaultClassName:i.default.string,defaultClassNameDragging:i.default.string,defaultClassNameDragged:i.default.string,defaultPosition:i.default.shape({x:i.default.number,y:i.default.number}),positionOffset:i.default.shape({x:i.default.oneOfType([i.default.number,i.default.string]),y:i.default.oneOfType([i.default.number,i.default.string])}),position:i.default.shape({x:i.default.number,y:i.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),m(g,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},173:(e,t,n)=>{e.exports=n(497)()},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function x(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=v.prototype;var b=y.prototype=new x;b.constructor=y,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var i,o={},a=null,l=null;if(null!=t)for(i in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!k.hasOwnProperty(i)&&(o[i]=t[i]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in s=e.defaultProps)void 0===o[i]&&(o[i]=s[i]);return{$$typeof:n,type:e,key:a,ref:l,props:o,_owner:E.current}}function j(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,i,o,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return a=a(s=e),e=""===o?"."+T(s,0):o,w(a)?(i="",null!=e&&(i=e.replace(C,"$&/")+"/"),P(a,t,i,"",(function(e){return e}))):null!=a&&(j(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+T(l=e[u],u);s+=P(l,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=P(l=l.value,t,i,c=o+T(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function R(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},A={transition:null},D={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:A,ReactCurrentOwner:E};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!j(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=y,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.act=O,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,l=E.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)S.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:z}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=A.transition;A.transition={};try{e()}finally{A.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return L.current.useCallback(e,t)},t.useContext=function(e){return L.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return L.current.useDeferredValue(e)},t.useEffect=function(e,t){return L.current.useEffect(e,t)},t.useId=function(){return L.current.useId()},t.useImperativeHandle=function(e,t,n){return L.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return L.current.useMemo(e,t)},t.useReducer=function(e,t,n){return L.current.useReducer(e,t,n)},t.useRef=function(e){return L.current.useRef(e)},t.useState=function(e){return L.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return L.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return L.current.useTransition()},t.version="18.3.1"},212:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=u,t.addEvent=function(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,i):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&u(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){const n=s(e,t,"px");return{[(0,i.browserPrefixToKey)("transform",i.default)]:n}},t.createSVGTransform=function(e,t){return s(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,r.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,r.findInArray)(e.changedTouches,(e=>t===e.identifier))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.getTranslation=s,t.innerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingTop),t-=(0,r.int)(n.paddingBottom),t},t.innerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingLeft),t-=(0,r.int)(n.paddingRight),t},t.matchesSelector=l,t.matchesSelectorAndParentsTo=function(e,t,n){let r=e;do{if(l(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},t.offsetXYFromParent=function(e,t,n){const r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-r.left)/n,o=(e.clientY+t.scrollTop-r.top)/n;return{x:i,y:o}},t.outerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderTopWidth),t+=(0,r.int)(n.borderBottomWidth),t},t.outerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderLeftWidth),t+=(0,r.int)(n.borderRightWidth),t},t.removeClassName=c,t.removeEvent=function(e,t,n,r){if(!e)return;const i={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&c(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(t){}};var r=n(447),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(561));function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}let a="";function l(e,t){return a||(a=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,r.isFunction)(e[t])}))),!!(0,r.isFunction)(e[a])&&e[a](t)}function s(e,t,n){let{x:r,y:i}=e,o="translate(".concat(r).concat(n,",").concat(i).concat(n,")");if(t){const e="".concat("string"===typeof t.x?t.x:t.x+n),r="".concat("string"===typeof t.y?t.y:t.y+n);o="translate(".concat(e,", ").concat(r,")")+o}return o}function u(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function c(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function s(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function u(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function c(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},387:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},447:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"===typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"===typeof e&&!isNaN(e)}},497:(e,t,n)=>{"use strict";var r=n(218);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},561:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=i,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=r;const n=["Moz","Webkit","O","ms"];function r(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"===typeof window)return"";const r=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!r)return"";if(t in r)return"";for(let o=0;o<n.length;o++)if(i(t,n[o])in r)return n[o];return""}function i(e,t){return t?"".concat(t).concat(function(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}(e)):e}t.default=r()},579:(e,t,n)=>{"use strict";e.exports=n(153)},612:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<i&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<i&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,x="function"===typeof clearTimeout?clearTimeout:null,y="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,A(S);else{var t=r(c);null!==t&&D(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,x(j),j=-1),h=!0;var o=p;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!P());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var l=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&i(u),b(n)}else i(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&D(w,d.startTime-n),s=!1}return s}finally{f=null,p=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,_=null,j=-1,C=5,T=-1;function P(){return!(t.unstable_now()-T<C)}function R(){if(null!==_){var e=t.unstable_now();T=e;var n=!0;try{n=_(!0,e)}finally{n?E():(k=!1,_=null)}}else k=!1}if("function"===typeof y)E=function(){y(R)};else if("undefined"!==typeof MessageChannel){var z=new MessageChannel,L=z.port2;z.port1.onmessage=R,E=function(){L.postMessage(null)}}else E=function(){v(R,0)};function A(e){_=e,k||(k=!0,E())}function D(e,n){j=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,A(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(x(j),j=-1):g=!0,D(w,o-a))):(e.sortIndex=l,n(u,e),m||h||(m=!0,A(S))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},730:(e,t,n)=>{"use strict";var r=n(43),i=n(67);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}function y(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,x);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,x);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,x);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),C=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),L=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var A=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var D=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var N,I=Object.assign;function M(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var F=!1;function $(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(1!==a||1!==l)do{if(a--,0>--l||i[a]!==o[l]){var s="\n"+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=a&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function U(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case E:return"Fragment";case S:return"Portal";case _:return"Profiler";case k:return"StrictMode";case P:return"Suspense";case R:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case j:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case z:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function W(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function G(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function K(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function X(e,t){var n=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function J(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&y(e,"checked",t,!1)}function q(e,t){Q(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&K(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xe(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ye(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,Ee=null,ke=null;function _e(e){if(e=yi(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function je(e){Ee?ke?ke.push(e):ke=[e]:Ee=e}function Ce(){if(Ee){var e=Ee,t=ke;if(ke=Ee=null,_e(e),t)for(e=0;e<t.length;e++)_e(t[e])}}function Te(e,t){return e(t)}function Pe(){}var Re=!1;function ze(e,t,n){if(Re)return e(t,n);Re=!0;try{return Te(e,t,n)}finally{Re=!1,(null!==Ee||null!==ke)&&(Pe(),Ce())}}function Le(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ae=!1;if(c)try{var De={};Object.defineProperty(De,"passive",{get:function(){Ae=!0}}),window.addEventListener("test",De,De),window.removeEventListener("test",De,De)}catch(ce){Ae=!1}function Oe(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ne=!1,Ie=null,Me=!1,Fe=null,$e={onError:function(e){Ne=!0,Ie=e}};function Ue(e,t,n,r,i,o,a,l,s){Ne=!1,Ie=null,Oe.apply($e,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function We(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ge=i.unstable_scheduleCallback,Ke=i.unstable_cancelCallback,Xe=i.unstable_shouldYield,Je=i.unstable_requestPaint,Qe=i.unstable_now,qe=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var l=a&~i;0!==l?r=dt(l):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var yt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,Et,kt,_t,jt=!1,Ct=[],Tt=null,Pt=null,Rt=null,zt=new Map,Lt=new Map,At=[],Dt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":zt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lt.delete(t.pointerId)}}function Nt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=yi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function It(e){var t=xi(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=We(n)))return e.blockedOn=t,void _t(e.priority,(function(){Et(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=yi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Ft(e,t,n){Mt(e)&&n.delete(t)}function $t(){jt=!1,null!==Tt&&Mt(Tt)&&(Tt=null),null!==Pt&&Mt(Pt)&&(Pt=null),null!==Rt&&Mt(Rt)&&(Rt=null),zt.forEach(Ft),Lt.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,jt||(jt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,$t)))}function Bt(e){function t(t){return Ut(t,e)}if(0<Ct.length){Ut(Ct[0],e);for(var n=1;n<Ct.length;n++){var r=Ct[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ut(Tt,e),null!==Pt&&Ut(Pt,e),null!==Rt&&Ut(Rt,e),zt.forEach(t),Lt.forEach(t),n=0;n<At.length;n++)(r=At[n]).blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&null===(n=At[0]).blockedOn;)It(n),null===n.blockedOn&&At.shift()}var Wt=b.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var i=yt,o=Wt.transition;Wt.transition=null;try{yt=1,Gt(e,t,n,r)}finally{yt=i,Wt.transition=o}}function Yt(e,t,n,r){var i=yt,o=Wt.transition;Wt.transition=null;try{yt=4,Gt(e,t,n,r)}finally{yt=i,Wt.transition=o}}function Gt(e,t,n,r){if(Ht){var i=Xt(e,t,n,r);if(null===i)Hr(e,t,r,Kt,n),Ot(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=Nt(Tt,e,t,n,r,i),!0;case"dragenter":return Pt=Nt(Pt,e,t,n,r,i),!0;case"mouseover":return Rt=Nt(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return zt.set(o,Nt(zt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Lt.set(o,Nt(Lt.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Ot(e,r),4&t&&-1<Dt.indexOf(e)){for(;null!==i;){var o=yi(i);if(null!==o&&wt(o),null===(o=Xt(e,t,n,r))&&Hr(e,t,r,Kt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Kt=null;function Xt(e,t,n,r){if(Kt=null,null!==(e=xi(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=We(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kt=e,null}function Jt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qe()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Qt=null,qt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=qt,r=n.length,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=I({},un,{view:0,detail:0}),fn=on(dn),pn=I({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_n,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=on(pn),mn=on(I({},pn,{dataTransfer:0})),gn=on(I({},dn,{relatedTarget:0})),vn=on(I({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),xn=I({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yn=on(xn),bn=on(I({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},En={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=En[e])&&!!t[e]}function _n(){return kn}var jn=I({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_n,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Cn=on(jn),Tn=on(I({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Pn=on(I({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_n})),Rn=on(I({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),zn=I({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ln=on(zn),An=[9,13,27,32],Dn=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var Nn=c&&"TextEvent"in window&&!On,In=c&&(!Dn||On&&8<On&&11>=On),Mn=String.fromCharCode(32),Fn=!1;function $n(e,t){switch(e){case"keyup":return-1!==An.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Wn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wn[e.type]:"textarea"===t}function Vn(e,t,n,r){je(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Gn=null;function Kn(e){Mr(e,0)}function Xn(e){if(G(bi(e)))return e}function Jn(e,t){if("change"===e)return t}var Qn=!1;if(c){var qn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}qn=Zn}else qn=!1;Qn=qn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Gn=Yn=null)}function nr(e){if("value"===e.propertyName&&Xn(Gn)){var t=[];Vn(t,Gn,e,we(e)),ze(Kn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Gn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Xn(Gn)}function or(e,t){if("click"===e)return Xn(t)}function ar(e,t){if("input"===e||"change"===e)return Xn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!lr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=K();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=K((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cr(n,o);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,xr=null,yr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yr||null==gr||gr!==K(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},xr&&sr(xr,r)||(xr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Er={},kr={};function _r(e){if(Er[e])return Er[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in kr)return Er[e]=n[t];return e}c&&(kr=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var jr=_r("animationend"),Cr=_r("animationiteration"),Tr=_r("animationstart"),Pr=_r("transitionend"),Rr=new Map,zr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){Rr.set(e,t),s(t,[e])}for(var Ar=0;Ar<zr.length;Ar++){var Dr=zr[Ar];Lr(Dr.toLowerCase(),"on"+(Dr[0].toUpperCase()+Dr.slice(1)))}Lr(jr,"onAnimationEnd"),Lr(Cr,"onAnimationIteration"),Lr(Tr,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(Pr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Ir(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,l,s,u){if(Ue.apply(this,arguments),Ne){if(!Ne)throw Error(o(198));var c=Ie;Ne=!1,Ie=null,Me||(Me=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Ir(i,l,u),o=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Ir(i,l,u),o=s}}}if(Me)throw e=Fe,Me=!1,Fe=null,e}function Fr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Wr(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Wr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ur]){e[Ur]=!0,a.forEach((function(t){"selectionchange"!==t&&(Nr.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,$r("selectionchange",!1,t))}}function Wr(e,t,n,r){switch(Jt(t)){case 1:var i=Vt;break;case 4:i=Yt;break;default:i=Gt}n=i.bind(null,t,n,e),i=void 0,!Ae||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===i||8===l.nodeType&&l.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var s=a.tag;if((3===s||4===s)&&((s=a.stateNode.containerInfo)===i||8===s.nodeType&&s.parentNode===i))return;a=a.return}for(;null!==l;){if(null===(a=xi(l)))return;if(5===(s=a.tag)||6===s){r=o=a;continue e}l=l.parentNode}}r=r.return}ze((function(){var r=o,i=we(n),a=[];e:{var l=Rr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Cn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Pn;break;case jr:case Cr:case Tr:s=vn;break;case Pr:s=Rn;break;case"scroll":s=fn;break;case"wheel":s=Ln;break;case"copy":case"cut":case"paste":s=yn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Le(h,f))&&c.push(Vr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,i),a.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!xi(u)&&!u[hi])&&(s||l)&&(l=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?xi(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:bi(s),p=null==u?l:bi(u),(l=new c(m,h+"leave",s,n,i)).target=d,l.relatedTarget=p,m=null,xi(i)===r&&((c=new c(f,h+"enter",u,n,i)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Gr(p))h++;for(p=0,m=f;m;m=Gr(m))p++;for(;0<h-p;)c=Gr(c),h--;for(;0<p-h;)f=Gr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Gr(c),f=Gr(f)}c=null}else c=null;null!==s&&Kr(a,l,s,c,!1),null!==u&&null!==d&&Kr(a,d,u,c,!0)}if("select"===(s=(l=r?bi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Jn;else if(Hn(l))if(Qn)g=ar;else{g=ir;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=or);switch(g&&(g=g(e,r))?Vn(a,g,n,i):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?bi(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,xr=null);break;case"focusout":xr=vr=gr=null;break;case"mousedown":yr=!0;break;case"contextmenu":case"mouseup":case"dragend":yr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var x;if(Dn)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Bn?$n(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(In&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==y?"onCompositionEnd"===y&&Bn&&(x=en()):(qt="value"in(Qt=i)?Qt.value:Qt.textContent,Bn=!0)),0<(v=Yr(r,y)).length&&(y=new bn(y,e,null,n,i),a.push({event:y,listeners:v}),x?y.data=x:null!==(x=Un(n))&&(y.data=x))),(x=Nn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Fn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Dn&&$n(e,t)?(e=en(),Zt=qt=Qt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return In&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=x))}Mr(a,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Le(e,n))&&r.unshift(Vr(e,o,i)),null!=(o=Le(e,t))&&r.push(Vr(e,o,i))),e=e.return}return r}function Gr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Kr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,i?null!=(s=Le(n,o))&&a.unshift(Vr(n,s,l)):i||null!=(s=Le(n,o))&&a.push(Vr(n,s,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Xr=/\r\n?/g,Jr=/\u0000|\uFFFD/g;function Qr(e){return("string"===typeof e?e:""+e).replace(Xr,"\n").replace(Jr,"")}function qr(e,t,n){if(t=Qr(t),Qr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(li)}:ri;function li(e){setTimeout((function(){throw e}))}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Bt(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,pi="__reactProps$"+di,hi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function xi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function yi(e){return!(e=e[fi]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[pi]||null}var Si=[],Ei=-1;function ki(e){return{current:e}}function _i(e){0>Ei||(e.current=Si[Ei],Si[Ei]=null,Ei--)}function ji(e,t){Ei++,Si[Ei]=e.current,e.current=t}var Ci={},Ti=ki(Ci),Pi=ki(!1),Ri=Ci;function zi(e,t){var n=e.type.contextTypes;if(!n)return Ci;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Li(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ai(){_i(Pi),_i(Ti)}function Di(e,t,n){if(Ti.current!==Ci)throw Error(o(168));ji(Ti,t),ji(Pi,n)}function Oi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,W(e)||"Unknown",i));return I({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ci,Ri=Ti.current,ji(Ti,e),ji(Pi,Pi.current),!0}function Ii(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Oi(e,t,Ri),r.__reactInternalMemoizedMergedChildContext=e,_i(Pi),_i(Ti),ji(Ti,e)):_i(Pi),ji(Pi,n)}var Mi=null,Fi=!1,$i=!1;function Ui(e){null===Mi?Mi=[e]:Mi.push(e)}function Bi(){if(!$i&&null!==Mi){$i=!0;var e=0,t=yt;try{var n=Mi;for(yt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Mi=null,Fi=!1}catch(i){throw null!==Mi&&(Mi=Mi.slice(e+1)),Ge(Ze,Bi),i}finally{yt=t,$i=!1}}return null}var Wi=[],Hi=0,Vi=null,Yi=0,Gi=[],Ki=0,Xi=null,Ji=1,Qi="";function qi(e,t){Wi[Hi++]=Yi,Wi[Hi++]=Vi,Vi=e,Yi=t}function Zi(e,t,n){Gi[Ki++]=Ji,Gi[Ki++]=Qi,Gi[Ki++]=Xi,Xi=e;var r=Ji;e=Qi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ji=1<<32-at(t)+i|n<<i|r,Qi=o+e}else Ji=1<<o|n<<i|r,Qi=e}function eo(e){null!==e.return&&(qi(e,1),Zi(e,1,0))}function to(e){for(;e===Vi;)Vi=Wi[--Hi],Wi[Hi]=null,Yi=Wi[--Hi],Wi[Hi]=null;for(;e===Xi;)Xi=Gi[--Ki],Gi[Ki]=null,Qi=Gi[--Ki],Gi[Ki]=null,Ji=Gi[--Ki],Gi[Ki]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=zu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Xi?{id:Ji,overflow:Qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=zu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(io){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ui(n.nextSibling);var r=no;t&&lo(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!io)return co(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw po(),Error(o(418));for(;t;)ao(e,t),t=ui(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ui(e.stateNode.nextSibling):null;return!0}function po(){for(var e=ro;e;)e=ui(e.nextSibling)}function ho(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function xo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Au(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Iu(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===E?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===L&&yo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Du(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Iu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Du(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=Mu(t,e.mode,n)).return=e,t;case L:return f(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Ou(t,e.mode,n,null)).return=e,t;xo(e,t)}return null}function p(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case S:return n.key===i?c(e,t,n,r):null;case L:return p(e,t,(i=n._init)(n._payload),r)}if(te(n)||O(n))return null!==i?null:d(e,t,n,r,null);xo(e,n)}return null}function h(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case L:return h(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||O(r))return d(t,e=e.get(n)||null,r,i,null);xo(t,r)}return null}function m(i,o,l,s){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(i,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===l.length)return n(i,d),io&&qi(i,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(i,l[m],s))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return io&&qi(i,m),u}for(d=r(i,d);m<l.length;m++)null!==(g=h(d,i,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(i,e)})),io&&qi(i,m),u}function g(i,l,s,u){var c=O(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,m=l,g=l=0,v=null,x=s.next();null!==m&&!x.done;g++,x=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var y=p(i,m,x.value,u);if(null===y){null===m&&(m=v);break}e&&m&&null===y.alternate&&t(i,m),l=a(y,l,g),null===d?c=y:d.sibling=y,d=y,m=v}if(x.done)return n(i,m),io&&qi(i,g),c;if(null===m){for(;!x.done;g++,x=s.next())null!==(x=f(i,x.value,u))&&(l=a(x,l,g),null===d?c=x:d.sibling=x,d=x);return io&&qi(i,g),c}for(m=r(i,m);!x.done;g++,x=s.next())null!==(x=h(m,i,g,x.value,u))&&(e&&null!==x.alternate&&m.delete(null===x.key?g:x.key),l=a(x,l,g),null===d?c=x:d.sibling=x,d=x);return e&&m.forEach((function(e){return t(i,e)})),io&&qi(i,g),c}return function e(r,o,a,s){if("object"===typeof a&&null!==a&&a.type===E&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===E){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===L&&yo(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=vo(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===E?((o=Ou(a.props.children,r.mode,s,a.key)).return=r,r=o):((s=Du(a.type,a.key,a.props,null,r.mode,s)).ref=vo(r,o,a),s.return=r,r=s)}return l(r);case S:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Mu(a,r.mode,s)).return=r,r=o}return l(r);case L:return e(r,o,(c=a._init)(a._payload),s)}if(te(a))return m(r,o,a,s);if(O(a))return g(r,o,a,s);xo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Iu(a,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=bo(!0),So=bo(!1),Eo=ki(null),ko=null,_o=null,jo=null;function Co(){jo=_o=ko=null}function To(e){var t=Eo.current;_i(Eo),e._currentValue=t}function Po(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ro(e,t){ko=e,jo=_o=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function zo(e){var t=e._currentValue;if(jo!==e)if(e={context:e,memoizedValue:t,next:null},null===_o){if(null===ko)throw Error(o(308));_o=e,ko.dependencies={lanes:0,firstContext:e}}else _o=_o.next=e;return t}var Lo=null;function Ao(e){null===Lo?Lo=[e]:Lo.push(e)}function Do(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Ao(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oo(e,r)}function Oo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var No=!1;function Io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ts)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oo(e,n)}return null===(i=r.interleaved)?(t.next=t,Ao(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oo(e,n)}function Uo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var i=e.updateQueue;No=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(null!==l){i.shared.pending=null;var s=l,u=s.next;s.next=null,null===a?o=u:a.next=u,a=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=i.baseState;for(a=0,c=u=s=null,l=o;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=I({},d,f);break e;case 2:No=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,a|=f;if(null===(l=l.next)){if(null===(l=i.shared.pending))break;l=(f=l).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Ns|=a,e.lanes=a,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Vo={},Yo=ki(Vo),Go=ki(Vo),Ko=ki(Vo);function Xo(e){if(e===Vo)throw Error(o(174));return e}function Jo(e,t){switch(ji(Ko,t),ji(Go,e),ji(Yo,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}_i(Yo),ji(Yo,t)}function Qo(){_i(Yo),_i(Go),_i(Ko)}function qo(e){Xo(Ko.current);var t=Xo(Yo.current),n=se(t,e.type);t!==n&&(ji(Go,e),ji(Yo,n))}function Zo(e){Go.current===e&&(_i(Yo),_i(Go))}var ea=ki(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,la=null,sa=null,ua=null,ca=!1,da=!1,fa=0,pa=0;function ha(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,la=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:el,e=n(r,i),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(o(301));a+=1,ua=sa=null,t.updateQueue=null,ia.current=tl,e=n(r,i)}while(da)}if(ia.current=qa,t=null!==sa&&null!==sa.next,aa=0,ua=sa=la=null,ca=!1,t)throw Error(o(300));return e}function va(){var e=0!==fa;return fa=0,e}function xa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?la.memoizedState=ua=e:ua=ua.next=e,ua}function ya(){if(null===sa){var e=la.alternate;e=null!==e?e.memoizedState:null}else e=sa.next;var t=null===ua?la.memoizedState:ua.next;if(null!==t)ua=t,sa=e;else{if(null===e)throw Error(o(310));e={memoizedState:(sa=e).memoizedState,baseState:sa.baseState,baseQueue:sa.baseQueue,queue:sa.queue,next:null},null===ua?la.memoizedState=ua=e:ua=ua.next=e}return ua}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=ya(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=sa,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var l=i.next;i.next=a.next,a.next=l}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var s=l=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,la.lanes|=d,Ns|=d}c=c.next}while(null!==c&&c!==a);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,la.lanes|=a,Ns|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=ya(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var l=i=i.next;do{a=e(a,l.action),l=l.next}while(l!==i);lr(a,t.memoizedState)||(yl=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ea(){}function ka(e,t){var n=la,r=ya(),i=t(),a=!lr(r.memoizedState,i);if(a&&(r.memoizedState=i,yl=!0),r=r.queue,Na(Ca.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,za(9,ja.bind(null,n,r,i,t),void 0,null),null===Ps)throw Error(o(349));0!==(30&aa)||_a(n,t,i)}return i}function _a(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ja(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&Pa(e)}function Ca(e,t,n){return n((function(){Ta(t)&&Pa(e)}))}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Pa(e){var t=Oo(e,1);null!==t&&nu(t,e,1,-1)}function Ra(e){var t=xa();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Ka.bind(null,la,e),[t.memoizedState,e]}function za(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=la.updateQueue)?(t={lastEffect:null,stores:null},la.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function La(){return ya().memoizedState}function Aa(e,t,n,r){var i=xa();la.flags|=e,i.memoizedState=za(1|t,n,void 0,void 0===r?null:r)}function Da(e,t,n,r){var i=ya();r=void 0===r?null:r;var o=void 0;if(null!==sa){var a=sa.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=za(t,n,o,r))}la.flags|=e,i.memoizedState=za(1|t,n,o,r)}function Oa(e,t){return Aa(8390656,8,e,t)}function Na(e,t){return Da(2048,8,e,t)}function Ia(e,t){return Da(4,2,e,t)}function Ma(e,t){return Da(4,4,e,t)}function Fa(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $a(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Da(4,4,Fa.bind(null,t,e),n)}function Ua(){}function Ba(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wa(e,t){var n=ya();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),la.lanes|=n,Ns|=n,e.baseState=!0),t)}function Va(e,t){var n=yt;yt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{yt=n,oa.transition=r}}function Ya(){return ya().memoizedState}function Ga(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Xa(e))Ja(t,n);else if(null!==(n=Do(e,t,n,r))){nu(n,e,r,eu()),Qa(n,t,r)}}function Ka(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))Ja(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,lr(l,a)){var s=t.interleaved;return null===s?(i.next=i,Ao(t)):(i.next=s.next,s.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Do(e,t,i,r))&&(nu(n,e,r,i=eu()),Qa(n,t,r))}}function Xa(e){var t=e.alternate;return e===la||null!==t&&t===la}function Ja(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,xt(e,n)}}var qa={readContext:zo,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useInsertionEffect:ha,useLayoutEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useMutableSource:ha,useSyncExternalStore:ha,useId:ha,unstable_isNewReconciler:!1},Za={readContext:zo,useCallback:function(e,t){return xa().memoizedState=[e,void 0===t?null:t],e},useContext:zo,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Aa(4194308,4,Fa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Aa(4,2,e,t)},useMemo:function(e,t){var n=xa();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xa();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ga.bind(null,la,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},xa().memoizedState=e},useState:Ra,useDebugValue:Ua,useDeferredValue:function(e){return xa().memoizedState=e},useTransition:function(){var e=Ra(!1),t=e[0];return e=Va.bind(null,e[1]),xa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=la,i=xa();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ps)throw Error(o(349));0!==(30&aa)||_a(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Oa(Ca.bind(null,r,a,e),[e]),r.flags|=2048,za(9,ja.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=xa(),t=Ps.identifierPrefix;if(io){var n=Qi;t=":"+t+"R"+(n=(Ji&~(1<<32-at(Ji)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=pa++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:zo,useCallback:Ba,useContext:zo,useEffect:Na,useImperativeHandle:$a,useInsertionEffect:Ia,useLayoutEffect:Ma,useMemo:Wa,useReducer:wa,useRef:La,useState:function(){return wa(ba)},useDebugValue:Ua,useDeferredValue:function(e){return Ha(ya(),sa.memoizedState,e)},useTransition:function(){return[wa(ba)[0],ya().memoizedState]},useMutableSource:Ea,useSyncExternalStore:ka,useId:Ya,unstable_isNewReconciler:!1},tl={readContext:zo,useCallback:Ba,useContext:zo,useEffect:Na,useImperativeHandle:$a,useInsertionEffect:Ia,useLayoutEffect:Ma,useMemo:Wa,useReducer:Sa,useRef:La,useState:function(){return Sa(ba)},useDebugValue:Ua,useDeferredValue:function(e){var t=ya();return null===sa?t.memoizedState=e:Ha(t,sa.memoizedState,e)},useTransition:function(){return[Sa(ba)[0],ya().memoizedState]},useMutableSource:Ea,useSyncExternalStore:ka,useId:Ya,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=I({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:I({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Fo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,i))&&(nu(t,e,i,r),Uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Fo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,i))&&(nu(t,e,i,r),Uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Fo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=$o(e,i,r))&&(nu(t,e,r,n),Uo(t,e,r))}};function ol(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,o))}function al(e,t,n){var r=!1,i=Ci,o=t.contextType;return"object"===typeof o&&null!==o?o=zo(o):(i=Li(t)?Ri:Ti.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?zi(e,i):Ci),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Io(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=zo(o):(o=Li(t)?Ri:Ti.current,i.context=zi(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Wo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ys?Ys=new Set([this]):Ys.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=_u.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,$o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var xl=b.ReactCurrentOwner,yl=!1;function bl(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var o=t.ref;return Ro(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||yl?(io&&n&&eo(t),t.flags|=1,bl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function Sl(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Lu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Du(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,El(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(a,r)&&e.ref===t.ref)return Hl(e,t,i)}return t.flags|=1,(e=Au(o,r)).ref=t.ref,e.return=t,t.child=e}function El(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Hl(e,t,i);0!==(131072&e.flags)&&(yl=!0)}}return jl(e,t,n,r,i)}function kl(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ji(As,Ls),Ls|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ji(As,Ls),Ls|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,ji(As,Ls),Ls|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,ji(As,Ls),Ls|=r;return bl(e,t,i,n),t.child}function _l(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,r,i){var o=Li(n)?Ri:Ti.current;return o=zi(t,o),Ro(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||yl?(io&&r&&eo(t),t.flags|=1,bl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hl(e,t,i))}function Cl(e,t,n,r,i){if(Li(n)){var o=!0;Ni(t)}else o=!1;if(Ro(t,i),null===t.stateNode)Wl(e,t),al(t,n,r),sl(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=zo(u):u=zi(t,u=Li(n)?Ri:Ti.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,a,r,u),No=!1;var f=t.memoizedState;a.state=f,Wo(t,r,a,i),s=t.memoizedState,l!==r||f!==s||Pi.current||No?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=No||ol(t,n,l,r,f,s,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Mo(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(s=n.contextType)&&null!==s?s=zo(s):s=zi(t,s=Li(n)?Ri:Ti.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,a,r,s),No=!1,f=t.memoizedState,a.state=f,Wo(t,r,a,i);var h=t.memoizedState;l!==d||f!==h||Pi.current||No?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=No||ol(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,h,s),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),a.props=r,a.state=h,a.context=s,r=u):("function"!==typeof a.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,o,i)}function Tl(e,t,n,r,i,o){_l(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Ii(t,n,!1),Hl(e,t,o);r=t.stateNode,xl.current=t;var l=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):bl(e,t,l,o),t.memoizedState=r.state,i&&Ii(t,n,!0),t.child}function Pl(e){var t=e.stateNode;t.pendingContext?Di(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Di(0,t.context,!1),Jo(e,t.containerInfo)}function Rl(e,t,n,r,i){return ho(),mo(i),t.flags|=256,bl(e,t,n,r),t.child}var zl,Ll,Al,Dl,Ol={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Il(e,t,n){var r,i=t.pendingProps,a=ea.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),ji(ea,1&a),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,l?(i=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&i)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Nu(s,i,0,null),e=Ou(e,i,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Nl(n),t.memoizedState=Ol,e):Ml(t,s));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Nu({mode:"visible",children:r.children},i,0,null),(a=Ou(a,i,l,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Nl(l),t.memoizedState=Ol,a);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=cl(a=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),yl||s){if(null!==(r=Ps)){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|l))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Oo(e,i),nu(r,e,i,-1))}return mu(),Fl(e,t,l,r=cl(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Cu.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ui(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Gi[Ki++]=Ji,Gi[Ki++]=Qi,Gi[Ki++]=Xi,Ji=e.id,Qi=e.overflow,Xi=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,s,i,r,a,n);if(l){l=i.fallback,s=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&s)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=Au(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?l=Au(r,l):(l=Ou(l,s,n,null)).flags|=2,l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,s=null===(s=e.child.memoizedState)?Nl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ol,i}return e=(l=e.child).sibling,i=Au(l,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ml(e,t){return(t=Nu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Po(e.return,t,n)}function Ul(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bl(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ji(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ul(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ul(t,!0,n,null,o);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ns|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Au(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Au(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Yl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gl(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yl(t),null;case 1:case 17:return Li(t.type)&&Ai(),Yl(t),null;case 3:return r=t.stateNode,Qo(),_i(Pi),_i(Ti),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(au(oo),oo=null))),Ll(e,t),Yl(t),null;case 5:Zo(t);var i=Xo(Ko.current);if(n=t.type,null!==e&&null!=t.stateNode)Al(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Yl(t),null}if(e=Xo(Yo.current),fo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fi]=t,r[pi]=a,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(i=0;i<Or.length;i++)Fr(Or[i],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":J(r,a),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Fr("invalid",r);break;case"textarea":ie(r,a),Fr("invalid",r)}for(var s in xe(n,a),i=null,a)if(a.hasOwnProperty(s)){var u=a[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&qr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&qr(r.textContent,u,e),i=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fi]=t,e[pi]=r,zl(e,t,!1,!1),t.stateNode=e;e:{switch(s=ye(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),i=r;break;case"iframe":case"object":case"embed":Fr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Or.length;i++)Fr(Or[i],e);i=r;break;case"source":Fr("error",e),i=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),i=r;break;case"details":Fr("toggle",e),i=r;break;case"input":J(e,r),i=X(e,r),Fr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=I({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Fr("invalid",e)}for(a in xe(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(l.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Fr("scroll",e):null!=c&&y(e,a,c,s))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Yl(t),null;case 6:if(e&&null!=t.stateNode)Dl(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Xo(Ko.current),Xo(Yo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:qr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&qr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Yl(t),null;case 13:if(_i(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))po(),ho(),t.flags|=98560,a=!1;else if(a=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[fi]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Yl(t),a=!1}else null!==oo&&(au(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ds&&(Ds=3):mu())),null!==t.updateQueue&&(t.flags|=4),Yl(t),null);case 4:return Qo(),Ll(e,t),null===e&&Br(t.stateNode.containerInfo),Yl(t),null;case 10:return To(t.type._context),Yl(t),null;case 19:if(_i(ea),null===(a=t.memoizedState))return Yl(t),null;if(r=0!==(128&t.flags),null===(s=a.rendering))if(r)Vl(a,!1);else{if(0!==Ds||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ta(e))){for(t.flags|=128,Vl(a,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(s=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ji(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Qe()>Bs&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!s.alternate&&!io)return Yl(t),null}else 2*Qe()-a.renderingStartTime>Bs&&1073741824!==n&&(t.flags|=128,r=!0,Vl(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=a.last)?n.sibling=s:t.child=s,a.last=s)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Qe(),t.sibling=null,n=ea.current,ji(ea,r?1&n|2:1&n),t):(Yl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Ls)&&(Yl(t),6&t.subtreeFlags&&(t.flags|=8192)):Yl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Kl(e,t){switch(to(t),t.tag){case 1:return Li(t.type)&&Ai(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Qo(),_i(Pi),_i(Ti),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(_i(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return _i(ea),null;case 4:return Qo(),null;case 10:return To(t.type._context),null;case 22:case 23:return du(),null;default:return null}}zl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ll=function(){},Al=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xo(Yo.current);var o,a=null;switch(n){case"input":i=X(e,i),r=X(e,r),a=[];break;case"select":i=I({},i,{value:void 0}),r=I({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in xe(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Dl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Xl=!1,Jl=!1,Ql="function"===typeof WeakSet?WeakSet:Set,ql=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ku(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ku(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&es(t,n,o)}i=i.next}while(i!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function is(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[pi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function as(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||as(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(l){}switch(n.tag){case 5:Jl||Zl(n,t);case 6:var r=cs,i=ds;cs=null,fs(e,t,n),ds=i,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Bt(e)):si(cs,n.stateNode));break;case 4:r=cs,i=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=i;break;case 0:case 11:case 14:case 15:if(!Jl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&es(n,t,a),i=i.next}while(i!==r)}fs(e,t,n);break;case 1:if(!Jl&&(Zl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ku(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(Jl=(r=Jl)||null!==n.memoizedState,fs(e,t,n),Jl=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ql),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));ps(a,l,i),cs=null,ds=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){ku(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){ku(e,e.return,g)}try{ns(5,e,e.return)}catch(g){ku(e,e.return,g)}}break;case 1:ms(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(ms(t,e),vs(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){ku(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,l=null!==n?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===a.type&&null!=a.name&&Q(i,a),ye(s,l);var c=ye(s,a);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):y(i,d,f,c)}switch(s){case"input":q(i,a);break;case"textarea":oe(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var h=a.value;null!=h?ne(i,!!a.multiple,h,!1):p!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[pi]=a}catch(g){ku(e,e.return,g)}}break;case 6:if(ms(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){ku(e,e.return,g)}}break;case 3:if(ms(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){ku(e,e.return,g)}break;case 4:default:ms(t,e),vs(e);break;case 13:ms(t,e),vs(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Us=Qe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Jl=(c=Jl)||d,ms(t,e),Jl=c):ms(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(ql=e,d=e.child;null!==d;){for(f=ql=d;null!==ql;){switch(h=(p=ql).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Zl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){ku(r,n,g)}}break;case 5:Zl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,ql=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){ku(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){ku(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(as(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),us(e,ls(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ss(e,ls(e),a);break;default:throw Error(o(161))}}catch(l){ku(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function xs(e,t,n){ql=e,ys(e,t,n)}function ys(e,t,n){for(var r=0!==(1&e.mode);null!==ql;){var i=ql,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Xl;if(!a){var l=i.alternate,s=null!==l&&null!==l.memoizedState||Jl;l=Xl;var u=Jl;if(Xl=a,(Jl=s)&&!u)for(ql=i;null!==ql;)s=(a=ql).child,22===a.tag&&null!==a.memoizedState?Ss(i):null!==s?(s.return=a,ql=s):Ss(i);for(;null!==o;)ql=o,ys(o,t,n),o=o.sibling;ql=i,Xl=l,Jl=u}bs(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,ql=o):bs(e)}}function bs(e){for(;null!==ql;){var t=ql;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Jl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Jl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ho(t,a,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(o(163))}Jl||512&t.flags&&is(t)}catch(p){ku(t,t.return,p)}}if(t===e){ql=null;break}if(null!==(n=t.sibling)){n.return=t.return,ql=n;break}ql=t.return}}function ws(e){for(;null!==ql;){var t=ql;if(t===e){ql=null;break}var n=t.sibling;if(null!==n){n.return=t.return,ql=n;break}ql=t.return}}function Ss(e){for(;null!==ql;){var t=ql;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ku(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(s){ku(t,i,s)}}var o=t.return;try{is(t)}catch(s){ku(t,o,s)}break;case 5:var a=t.return;try{is(t)}catch(s){ku(t,a,s)}}}catch(s){ku(t,t.return,s)}if(t===e){ql=null;break}var l=t.sibling;if(null!==l){l.return=t.return,ql=l;break}ql=t.return}}var Es,ks=Math.ceil,_s=b.ReactCurrentDispatcher,js=b.ReactCurrentOwner,Cs=b.ReactCurrentBatchConfig,Ts=0,Ps=null,Rs=null,zs=0,Ls=0,As=ki(0),Ds=0,Os=null,Ns=0,Is=0,Ms=0,Fs=null,$s=null,Us=0,Bs=1/0,Ws=null,Hs=!1,Vs=null,Ys=null,Gs=!1,Ks=null,Xs=0,Js=0,Qs=null,qs=-1,Zs=0;function eu(){return 0!==(6&Ts)?Qe():-1!==qs?qs:qs=Qe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ts)&&0!==zs?zs&-zs:null!==go.transition?(0===Zs&&(Zs=mt()),Zs):0!==(e=yt)?e:e=void 0===(e=window.event)?16:Jt(e.type)}function nu(e,t,n,r){if(50<Js)throw Js=0,Qs=null,Error(o(185));vt(e,n,r),0!==(2&Ts)&&e===Ps||(e===Ps&&(0===(2&Ts)&&(Is|=n),4===Ds&&lu(e,zs)),ru(e,r),1===n&&0===Ts&&0===(1&t.mode)&&(Bs=Qe()+500,Fi&&Bi()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),l=1<<a,s=i[a];-1===s?0!==(l&n)&&0===(l&r)||(i[a]=pt(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=ft(e,e===Ps?zs:0);if(0===r)null!==n&&Ke(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ke(n),1===t)0===e.tag?function(e){Fi=!0,Ui(e)}(su.bind(null,e)):Ui(su.bind(null,e)),ai((function(){0===(6&Ts)&&Bi()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Pu(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(qs=-1,Zs=0,0!==(6&Ts))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===Ps?zs:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var i=Ts;Ts|=2;var a=hu();for(Ps===e&&zs===t||(Ws=null,Bs=Qe()+500,fu(e,t));;)try{xu();break}catch(s){pu(e,s)}Co(),_s.current=a,Ts=i,null!==Rs?t=0:(Ps=null,zs=0,t=Ds)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t)throw n=Os,fu(e,0),lu(e,r),ru(e,Qe()),n;if(6===t)lu(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!lr(o(),i))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gu(e,r))&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t))throw n=Os,fu(e,0),lu(e,r),ru(e,Qe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,$s,Ws);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Qe())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,$s,Ws),t);break}wu(e,$s,Ws);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-at(r);a=1<<l,(l=t[l])>i&&(i=l),r&=~a}if(r=i,10<(r=(120>(r=Qe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ks(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,$s,Ws),r);break}wu(e,$s,Ws);break;default:throw Error(o(329))}}}return ru(e,Qe()),e.callbackNode===n?iu.bind(null,e):null}function ou(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=$s,$s=n,null!==t&&au(t)),e}function au(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Ms,t&=~Is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ts))throw Error(o(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Qe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Os,fu(e,0),lu(e,t),ru(e,Qe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,$s,Ws),ru(e,Qe()),null}function uu(e,t){var n=Ts;Ts|=1;try{return e(t)}finally{0===(Ts=n)&&(Bs=Qe()+500,Fi&&Bi())}}function cu(e){null!==Ks&&0===Ks.tag&&0===(6&Ts)&&Su();var t=Ts;Ts|=1;var n=Cs.transition,r=yt;try{if(Cs.transition=null,yt=1,e)return e()}finally{yt=r,Cs.transition=n,0===(6&(Ts=t))&&Bi()}}function du(){Ls=As.current,_i(As)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Rs)for(n=Rs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ai();break;case 3:Qo(),_i(Pi),_i(Ti),ra();break;case 5:Zo(r);break;case 4:Qo();break;case 13:case 19:_i(ea);break;case 10:To(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ps=e,Rs=e=Au(e.current,null),zs=Ls=t,Ds=0,Os=null,Ms=Is=Ns=0,$s=Fs=null,null!==Lo){for(t=0;t<Lo.length;t++)if(null!==(r=(n=Lo[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Lo=null}return e}function pu(e,t){for(;;){var n=Rs;try{if(Co(),ia.current=qa,ca){for(var r=la.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(aa=0,ua=sa=la=null,da=!1,fa=0,js.current=null,null===n||null===n.return){Ds=1,Os=t,Rs=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=zs,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&ml(a,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(a,c,t),mu();break e}u=Error(o(426))}else if(io&&1&s.mode){var v=gl(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),mo(ul(u,s));break e}}a=u=ul(u,s),4!==Ds&&(Ds=2),null===Fs?Fs=[a]:Fs.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,pl(0,u,t));break e;case 1:s=u;var x=a.type,y=a.stateNode;if(0===(128&a.flags)&&("function"===typeof x.getDerivedStateFromError||null!==y&&"function"===typeof y.componentDidCatch&&(null===Ys||!Ys.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,hl(a,s,t));break e}}a=a.return}while(null!==a)}bu(n)}catch(b){t=b,Rs===n&&null!==n&&(Rs=n=n.return);continue}break}}function hu(){var e=_s.current;return _s.current=qa,null===e?qa:e}function mu(){0!==Ds&&3!==Ds&&2!==Ds||(Ds=4),null===Ps||0===(268435455&Ns)&&0===(268435455&Is)||lu(Ps,zs)}function gu(e,t){var n=Ts;Ts|=2;var r=hu();for(Ps===e&&zs===t||(Ws=null,fu(e,t));;)try{vu();break}catch(i){pu(e,i)}if(Co(),Ts=n,_s.current=r,null!==Rs)throw Error(o(261));return Ps=null,zs=0,Ds}function vu(){for(;null!==Rs;)yu(Rs)}function xu(){for(;null!==Rs&&!Xe();)yu(Rs)}function yu(e){var t=Es(e.alternate,e,Ls);e.memoizedProps=e.pendingProps,null===t?bu(e):Rs=t,js.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Gl(n,t,Ls)))return void(Rs=n)}else{if(null!==(n=Kl(n,t)))return n.flags&=32767,void(Rs=n);if(null===e)return Ds=6,void(Rs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Rs=t);Rs=t=e}while(null!==t);0===Ds&&(Ds=5)}function wu(e,t,n){var r=yt,i=Cs.transition;try{Cs.transition=null,yt=1,function(e,t,n,r){do{Su()}while(null!==Ks);if(0!==(6&Ts))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===Ps&&(Rs=Ps=null,zs=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Gs||(Gs=!0,Pu(tt,(function(){return Su(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=Cs.transition,Cs.transition=null;var l=yt;yt=1;var s=Ts;Ts|=4,js.current=null,function(e,t){if(ei=Ht,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==i&&3!==f.nodeType||(s=l+i),f!==a||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===i&&(s=l),p===a&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,ql=t;null!==ql;)if(e=(t=ql).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ql=e;else for(;null!==ql;){t=ql;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,x=t.stateNode,y=x.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),v);x.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){ku(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,ql=e;break}ql=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ti),Ht=!!ei,ti=ei=null,e.current=n,xs(n,e,i),Je(),Ts=s,yt=l,Cs.transition=a}else e.current=n;if(Gs&&(Gs=!1,Ks=e,Xs=i),a=e.pendingLanes,0===a&&(Ys=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Qe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&Xs)&&0!==e.tag&&Su(),a=e.pendingLanes,0!==(1&a)?e===Qs?Js++:(Js=0,Qs=e):Js=0,Bi()}(e,t,n,r)}finally{Cs.transition=i,yt=r}return null}function Su(){if(null!==Ks){var e=bt(Xs),t=Cs.transition,n=yt;try{if(Cs.transition=null,yt=16>e?16:e,null===Ks)var r=!1;else{if(e=Ks,Ks=null,Xs=0,0!==(6&Ts))throw Error(o(331));var i=Ts;for(Ts|=4,ql=e.current;null!==ql;){var a=ql,l=a.child;if(0!==(16&ql.flags)){var s=a.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(ql=c;null!==ql;){var d=ql;switch(d.tag){case 0:case 11:case 15:ns(8,d,a)}var f=d.child;if(null!==f)f.return=d,ql=f;else for(;null!==ql;){var p=(d=ql).sibling,h=d.return;if(os(d),d===c){ql=null;break}if(null!==p){p.return=h,ql=p;break}ql=h}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}ql=a}}if(0!==(2064&a.subtreeFlags)&&null!==l)l.return=a,ql=l;else e:for(;null!==ql;){if(0!==(2048&(a=ql).flags))switch(a.tag){case 0:case 11:case 15:ns(9,a,a.return)}var x=a.sibling;if(null!==x){x.return=a.return,ql=x;break e}ql=a.return}}var y=e.current;for(ql=y;null!==ql;){var b=(l=ql).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,ql=b;else e:for(l=y;null!==ql;){if(0!==(2048&(s=ql).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(S){ku(s,s.return,S)}if(s===l){ql=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,ql=w;break e}ql=s.return}}if(Ts=i,Bi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{yt=n,Cs.transition=t}}return!1}function Eu(e,t,n){e=$o(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function ku(e,t,n){if(3===e.tag)Eu(e,e,n);else for(;null!==t;){if(3===t.tag){Eu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ys||!Ys.has(r))){t=$o(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function _u(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ps===e&&(zs&n)===n&&(4===Ds||3===Ds&&(130023424&zs)===zs&&500>Qe()-Us?fu(e,0):Ms|=n),ru(e,t)}function ju(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Oo(e,t))&&(vt(e,t,n),ru(e,n))}function Cu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),ju(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),ju(e,n)}function Pu(e,t){return Ge(e,t)}function Ru(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zu(e,t,n,r){return new Ru(e,t,n,r)}function Lu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Au(e,t){var n=e.alternate;return null===n?((n=zu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Du(e,t,n,r,i,a){var l=2;if(r=e,"function"===typeof e)Lu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case E:return Ou(n.children,i,a,t);case k:l=8,i|=8;break;case _:return(e=zu(12,n,t,2|i)).elementType=_,e.lanes=a,e;case P:return(e=zu(13,n,t,i)).elementType=P,e.lanes=a,e;case R:return(e=zu(19,n,t,i)).elementType=R,e.lanes=a,e;case A:return Nu(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case j:l=10;break e;case C:l=9;break e;case T:l=11;break e;case z:l=14;break e;case L:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=zu(l,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Ou(e,t,n,r){return(e=zu(7,e,r,t)).lanes=n,e}function Nu(e,t,n,r){return(e=zu(22,e,r,t)).elementType=A,e.lanes=n,e.stateNode={isHidden:!1},e}function Iu(e,t,n){return(e=zu(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=zu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,i,o,a,l,s){return e=new Fu(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=zu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Io(o),e}function Uu(e){if(!e)return Ci;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Li(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Li(n))return Oi(e,n,t)}return t}function Bu(e,t,n,r,i,o,a,l,s){return(e=$u(n,r,!0,e,0,o,0,l,s)).context=Uu(null),n=e.current,(o=Fo(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,$o(n,o,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function Wu(e,t,n,r){var i=t.current,o=eu(),a=tu(i);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$o(i,t,a))&&(nu(e,i,a,o),Uo(e,i,a)),a}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Es=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Pi.current)yl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Pl(t),ho();break;case 5:qo(t);break;case 1:Li(t.type)&&Ni(t);break;case 4:Jo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ji(Eo,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ji(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Il(e,t,n):(ji(ea,1&ea.current),null!==(e=Hl(e,t,n))?e.sibling:null);ji(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),ji(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,kl(e,t,n)}return Hl(e,t,n)}(e,t,n);yl=0!==(131072&e.flags)}else yl=!1,io&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wl(e,t),e=t.pendingProps;var i=zi(t,Ti.current);Ro(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Li(r)?(a=!0,Ni(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Io(t),i.updater=il,t.stateNode=i,i._reactInternals=t,sl(t,r,e,n),t=Tl(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Lu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===z)return 14}return 2}(r),e=nl(r,e),i){case 0:t=jl(null,t,r,e,n);break e;case 1:t=Cl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=Sl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,jl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Cl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Pl(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,Mo(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Rl(e,t,r,n,i=ul(Error(o(423)),t));break e}if(r!==i){t=Rl(e,t,r,n,i=ul(Error(o(424)),t));break e}for(ro=ui(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===i){t=Hl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return qo(t),null===e&&uo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,l=i.children,ni(r,i)?l=null:null!==a&&ni(r,a)&&(t.flags|=32),_l(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Il(e,t,n);case 4:return Jo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,ji(Eo,r._currentValue),r._currentValue=l,null!==a)if(lr(a.value,l)){if(a.children===i.children&&!Pi.current){t=Hl(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var s=a.dependencies;if(null!==s){l=a.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Fo(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Po(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===a.tag)l=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Po(l,n,t),l=a.sibling}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===t){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}bl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ro(t,n),r=r(i=zo(i)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),Sl(e,t,r,i=nl(r.type,i),n);case 15:return El(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),Wl(e,t),t.tag=1,Li(r)?(e=!0,Ni(t)):e=!1,Ro(t,n),al(t,r,i),sl(t,r,i,n),Tl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return kl(e,t,n)}throw Error(o(156,t.tag))};var Gu="function"===typeof reportError?reportError:function(e){console.error(e)};function Ku(e){this._internalRoot=e}function Xu(e){this._internalRoot=e}function Ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qu(){}function Zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var l=i;i=function(){var e=Hu(a);l.call(e)}}Wu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hu(a);o.call(e)}}var a=Bu(t,r,e,0,null,!1,0,"",qu);return e._reactRootContainer=a,e[hi]=a.current,Br(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",qu);return e._reactRootContainer=s,e[hi]=s.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Wu(t,s,n,r)})),s}(n,t,e,i,r);return Hu(a)}Xu.prototype.render=Ku.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Wu(e,t,null,null)},Xu.prototype.unmount=Ku.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Wu(null,e,null,null)})),t[hi]=null}},Xu.prototype.unstable_scheduleHydration=function(e){if(e){var t=kt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&0!==t&&t<At[n].priority;n++);At.splice(n,0,e),0===n&&It(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(xt(t,1|n),ru(t,Qe()),0===(6&Ts)&&(Bs=Qe()+500,Bi()))}break;case 13:cu((function(){var t=Oo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Yu(e,1)}},St=function(e){if(13===e.tag){var t=Oo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},Et=function(e){if(13===e.tag){var t=tu(e),n=Oo(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},kt=function(){return yt},_t=function(e,t){var n=yt;try{return yt=e,t()}finally{yt=n}},Se=function(e,t,n){switch(t){case"input":if(q(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));G(r),q(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,Pe=cu;var ec={usingClientEntryPoint:!1,Events:[yi,bi,wi,je,Ce,uu]},tc={findFiberByHostInstance:xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Ju(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Ju(e))throw Error(o(299));var n=!1,r="",i=Gu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Br(8===e.nodeType?e.parentNode:e),new Ku(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Qu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Ju(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",l=Gu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,i,0,a,l),e[hi]=t.current,Br(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Xu(t)},t.render=function(e,t,n){if(!Qu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Qu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[hi]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},777:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,n){const i=!(0,r.isNum)(e.lastX),a=o(e);return i?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}},t.createDraggableData=function(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:a}=e.props;a="string"===typeof a?a:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(a);const l=o(e);if("string"===typeof a){const{ownerDocument:e}=l,t=e.defaultView;let n;if(n="parent"===a?l.parentNode:e.querySelector(a),!(n instanceof t.HTMLElement))throw new Error('Bounds selector "'+a+'" could not find an element.');const o=n,s=t.getComputedStyle(l),u=t.getComputedStyle(o);a={left:-l.offsetLeft+(0,r.int)(u.paddingLeft)+(0,r.int)(s.marginLeft),top:-l.offsetTop+(0,r.int)(u.paddingTop)+(0,r.int)(s.marginTop),right:(0,i.innerWidth)(o)-(0,i.outerWidth)(l)-l.offsetLeft+(0,r.int)(u.paddingRight)-(0,r.int)(s.marginRight),bottom:(0,i.innerHeight)(o)-(0,i.outerHeight)(l)-l.offsetTop+(0,r.int)(u.paddingBottom)-(0,r.int)(s.marginBottom)}}(0,r.isNum)(a.right)&&(t=Math.min(t,a.right));(0,r.isNum)(a.bottom)&&(n=Math.min(n,a.bottom));(0,r.isNum)(a.left)&&(t=Math.max(t,a.left));(0,r.isNum)(a.top)&&(n=Math.max(n,a.top));return[t,n]},t.getControlPosition=function(e,t,n){const r="number"===typeof t?(0,i.getTouch)(e,t):null;if("number"===typeof t&&!r)return null;const a=o(n),l=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,i.offsetXYFromParent)(r||e,l,n.props.scale)},t.snapToGrid=function(e,t,n){const r=Math.round(t/e[0])*e[0],i=Math.round(n/e[1])*e[1];return[r,i]};var r=n(447),i=n(212);function o(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},929:(e,t,n)=>{"use strict";const{default:r,DraggableCore:i}=n(136);e.exports=r,e.exports.default=r,e.exports.DraggableCore=i},935:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(43)),i=c(n(173)),o=c(n(950)),a=n(212),l=n(777),s=n(447),u=c(n(387));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={start:"touchstart",move:"touchmove",stop:"touchend"},h={start:"mousedown",move:"mousemove",stop:"mouseup"};let m=h;class g extends r.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"===typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!(0,a.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,a.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const r=(0,a.getTouchIdentifier)(e);this.touchIdentifier=r;const i=(0,l.getControlPosition)(e,r,this);if(null==i)return;const{x:o,y:s}=i,c=(0,l.createCoreData)(this,o,s);(0,u.default)("DraggableCore: handleDragStart: %j",c),(0,u.default)("calling",this.props.onStart);!1!==this.props.onStart(e,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(n),this.dragging=!0,this.lastX=o,this.lastY=s,(0,a.addEvent)(n,m.move,this.handleDrag),(0,a.addEvent)(n,m.stop,this.handleDragStop))})),f(this,"handleDrag",(e=>{const t=(0,l.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=(0,l.snapToGrid)(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}const i=(0,l.createCoreData)(this,n,r);(0,u.default)("DraggableCore: handleDrag: %j",i);if(!1!==this.props.onDrag(e,i)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(o){const e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}})),f(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,l.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=(0,l.snapToGrid)(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}const i=(0,l.createCoreData)(this,n,r);if(!1===this.props.onStop(e,i)||!1===this.mounted)return!1;const o=this.findDOMNode();o&&this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(o.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,o&&((0,u.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(o.ownerDocument,m.move,this.handleDrag),(0,a.removeEvent)(o.ownerDocument,m.stop,this.handleDragStop))})),f(this,"onMouseDown",(e=>(m=h,this.handleDragStart(e)))),f(this,"onMouseUp",(e=>(m=h,this.handleDragStop(e)))),f(this,"onTouchStart",(e=>(m=p,this.handleDragStart(e)))),f(this,"onTouchEnd",(e=>(m=p,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,a.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,a.removeEvent)(t,h.move,this.handleDrag),(0,a.removeEvent)(t,p.move,this.handleDrag),(0,a.removeEvent)(t,h.stop,this.handleDragStop),(0,a.removeEvent)(t,p.stop,this.handleDragStop),(0,a.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:o.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}t.default=g,f(g,"displayName","DraggableCore"),f(g,"propTypes",{allowAnyClick:i.default.bool,children:i.default.node.isRequired,disabled:i.default.bool,enableUserSelectHack:i.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:i.default.arrayOf(i.default.number),handle:i.default.string,cancel:i.default.string,nodeRef:i.default.object,onStart:i.default.func,onDrag:i.default.func,onStop:i.default.func,onMouseDown:i.default.func,scale:i.default.number,className:s.dontSetMe,style:s.dontSetMe,transform:s.dontSetMe}),f(g,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function i(){return d((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return s("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:u(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function o(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function a(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?c(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function c(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:c=!1}=i,d=a.history,f="POP",p=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){f="POP";let e=m(),t=null==e?null:e-h;h=e,p&&p({action:f,location:x.location,delta:t})}function v(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:u(e);return n=n.replace(/ $/,"%20"),o(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let x={get action(){return f},get location(){return e(a,d)},listen(e){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(r,g),p=e,()=>{a.removeEventListener(r,g),p=null}},createHref:e=>t(a,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f="PUSH";let r=s(x.location,e,t);n&&n(r,e),h=m()+1;let i=l(r,h),o=x.createHref(r);try{d.pushState(i,"",o)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;a.location.assign(o)}c&&p&&p({action:f,location:x.location,delta:1})},replace:function(e,t){f="REPLACE";let r=s(x.location,e,t);n&&n(r,e),h=m();let i=l(r,h),o=x.createHref(r);d.replaceState(i,"",o),c&&p&&p({action:f,location:x.location,delta:0})},go:e=>d.go(e)};return x}function f(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let i=C(("string"===typeof t?c(t):t).pathname||"/",n);if(null==i)return null;let o=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let a=null;for(let l=0;null==a&&l<o.length;++l){let e=j(i);a=k(o[l],e,r)}return a}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,a)=>{let l={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};l.relativePath.startsWith("/")&&(o(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=L([r,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(o(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),h(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))i(e,t,n);else i(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return i?[o,""]:[o];let a=m(r.join("/")),l=[];return l.push(...a.map((e=>""===e?o:[o,e].join("/")))),i&&l.push(...a),l.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,x=2,y=1,b=10,w=-2,S=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=x),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?y:b)),r)}function k(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(i,c.params),a.push({params:i,pathname:L([o,c.pathname]),pathnameBase:A(L([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=L([o,c.pathnameBase]))}return a}function _(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];a("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let o=new RegExp(i,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const a=s[n];return e[r]=i&&!a?void 0:(a||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function j(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return a(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function C(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function T(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e){let t=P(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function z(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=c(e):(r={...e},o(!r.pathname||!r.pathname.includes("?"),T("?","pathname","search",r)),o(!r.pathname||!r.pathname.includes("#"),T("#","pathname","hash",r)),o(!r.search||!r.search.includes("#"),T("#","search","hash",r)));let a,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)a=n;else{let e=t.length-1;if(!i&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?c(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:D(r),hash:O(i)}}(r,a),d=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return u.pathname.endsWith("/")||!d&&!f||(u.pathname+="/"),u}var L=e=>e.join("/").replace(/\/\/+/g,"/"),A=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function N(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var I=["POST","PUT","PATCH","DELETE"],M=(new Set(I),["GET",...I]);new Set(M),Symbol("ResetLoaderData");var F=e.createContext(null);F.displayName="DataRouter";var $=e.createContext(null);$.displayName="DataRouterState";var U=e.createContext({isTransitioning:!1});U.displayName="ViewTransition";var B=e.createContext(new Map);B.displayName="Fetchers";var W=e.createContext(null);W.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var V=e.createContext(null);V.displayName="Location";var Y=e.createContext({outlet:null,matches:[],isDataRoute:!1});Y.displayName="Route";var G=e.createContext(null);G.displayName="RouteError";function K(){return null!=e.useContext(V)}function X(){return o(K(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(V).location}var J="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q(t){e.useContext(H).static||e.useLayoutEffect(t)}function q(){let{isDataRoute:t}=e.useContext(Y);return t?function(){let{router:t}=le("useNavigate"),n=ue("useNavigate"),r=e.useRef(!1);Q((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(r.current,J),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){o(K(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext(F),{basename:n,navigator:r}=e.useContext(H),{matches:i}=e.useContext(Y),{pathname:l}=X(),s=JSON.stringify(R(i)),u=e.useRef(!1);Q((()=>{u.current=!0}));let c=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(u.current,J),!u.current)return;if("number"===typeof e)return void r.go(e);let o=z(e,JSON.parse(s),l,"path"===i.relative);null==t&&"/"!==n&&(o.pathname="/"===o.pathname?n:L([n,o.pathname])),(i.replace?r.replace:r.push)(o,i.state,i)}),[n,r,s,l,t]);return c}()}e.createContext(null);function Z(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(Y),{pathname:i}=X(),o=JSON.stringify(R(r));return e.useMemo((()=>z(t,JSON.parse(o),i,"path"===n)),[t,o,i,n])}function ee(t,n,r,i){o(K(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:s}=e.useContext(H),{matches:u}=e.useContext(Y),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";fe(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,x=X();if(n){let e="string"===typeof n?c(n):n;o("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=x;let y=v.pathname||"/",b=y;if("/"!==m){let e=m.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!s&&r&&r.matches&&r.matches.length>0?r.matches:f(t,{pathname:b});a(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),a(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=oe(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},p,e.params),pathname:L([m,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:L([m,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,r,i);return n&&S?e.createElement(V.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function te(){let t=ce(),n=N(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},a={padding:"2px 4px",backgroundColor:i},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:o},r):null,l)}var ne=e.createElement(te,null),re=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Y.Provider,{value:this.props.routeContext},e.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ie(t){let{routeContext:n,match:r,children:i}=t,o=e.useContext(F);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(Y.Provider,{value:n},i)}function oe(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,a=r?.errors;if(null!=a){let e=i.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));o(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let l=!1,s=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,o=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||o){l=!0,i=s>=0?i.slice(0,s+1):[i[0]];break}}}return i.reduceRight(((t,o,u)=>{let c,d=!1,f=null,p=null;r&&(c=a&&o.route.id?a[o.route.id]:void 0,f=o.route.errorElement||ne,l&&(s<0&&0===u?(fe("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===u&&(d=!0,p=o.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,u+1)),m=()=>{let n;return n=c?f:d?p:o.route.Component?e.createElement(o.route.Component,null):o.route.element?o.route.element:t,e.createElement(ie,{match:o,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(o.route.ErrorBoundary||o.route.errorElement||0===u)?e.createElement(re,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function ae(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function le(t){let n=e.useContext(F);return o(n,ae(t)),n}function se(t){let n=e.useContext($);return o(n,ae(t)),n}function ue(t){let n=function(t){let n=e.useContext(Y);return o(n,ae(t)),n}(t),r=n.matches[n.matches.length-1];return o(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function ce(){let t=e.useContext(G),n=se("useRouteError"),r=ue("useRouteError");return void 0!==t?t:n.errors?.[r]}var de={};function fe(e,t,n){t||de[e]||(de[e]=!0,a(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ee(t,void 0,r,n)}));function pe(e){o(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function he(t){let{basename:n="/",children:r=null,location:i,navigationType:l="POP",navigator:s,static:u=!1}=t;o(!K(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),f=e.useMemo((()=>({basename:d,navigator:s,static:u,future:{}})),[d,s,u]);"string"===typeof i&&(i=c(i));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:v="default"}=i,x=e.useMemo((()=>{let e=C(p,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:l}}),[d,p,h,m,g,v,l]);return a(null!=x,`<Router basename="${d}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==x?null:e.createElement(H.Provider,{value:f},e.createElement(V.Provider,{children:r,value:x}))}function me(e){let{children:t,location:n}=e;return ee(ge(t),n)}e.Component;function ge(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let a=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,ge(t.props.children,a));o(t.type===pe,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),o(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=ge(t.props.children,a)),r.push(l)})),r}var ve="get",xe="application/x-www-form-urlencoded";function ye(e){return null!=e&&"string"===typeof e.tagName}var be=null;var we=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Se(e){return null==e||we.has(e)?e:(a(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xe}"`),null)}function Ee(e,t){let n,r,i,o,a;if(ye(l=e)&&"form"===l.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?C(a,t):null,n=e.getAttribute("method")||ve,i=Se(e.getAttribute("enctype"))||xe,o=new FormData(e)}else if(function(e){return ye(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return ye(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?C(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||ve,i=Se(e.getAttribute("formenctype"))||Se(a.getAttribute("enctype"))||xe,o=new FormData(a,e),!function(){if(null===be)try{new FormData(document.createElement("form"),0),be=!1}catch(e){be=!0}return be}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";o.append(`${e}x`,"0"),o.append(`${e}y`,"0")}else t&&o.append(t,r)}}else{if(ye(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ve,r=null,i=xe,a=e}var l;return o&&"text/plain"===i&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}function ke(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function _e(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function je(e){return null!=e&&"string"===typeof e.page}function Ce(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Te(e,t,n,r,i,o){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===o?t.filter(((e,t)=>a(e,t)||l(e,t))):"data"===o?t.filter(((t,o)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(a(t,o)||l(t,o))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Pe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Re(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!je(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let o=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(o)||(n.add(o),e.push({key:o,link:i})),e}),[])}function ze(e){return{__html:e}}Symbol("SingleFetchRedirect");function Le(e){let t="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===t.pathname?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}e.Component;function Ae(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,o=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(N(n))return e.createElement(De,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),o);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(De,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),o)}function De(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:o}=t,{routeModules:a}=Fe();return a.root?.Layout&&!i?o:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},o,r?e.createElement(Ye,null):null)))}function Oe(e){return!0===e}function Ne(){let t=e.useContext(F);return ke(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ie(){let t=e.useContext($);return ke(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Me=e.createContext(void 0);function Fe(){let t=e.useContext(Me);return ke(t,"You must render this element inside a <HydratedRouter> element"),t}function $e(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ue(e,t,n){if(n&&!Ve)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Be(t){let{page:n,...r}=t,{router:i}=Ne(),o=e.useMemo((()=>f(i.routes,n,i.basename)),[i.routes,n,i.basename]);return o?e.createElement(He,{page:n,matches:o,...r}):null}function We(t){let{manifest:n,routeModules:r}=Fe(),[i,o]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await _e(r,n);return e.links?e.links():[]}return[]})));return Re(r.flat(1).filter(Ce).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||o(t)})),()=>{e=!0}}),[t,n,r]),i}function He(t){let{page:n,matches:r,...i}=t,o=X(),{manifest:a,routeModules:l}=Fe(),{loaderData:s,matches:u}=Ie(),c=e.useMemo((()=>Te(n,r,u,a,o,"data")),[n,r,u,a,o]),d=e.useMemo((()=>Te(n,r,u,a,o,"assets")),[n,r,u,a,o]),f=e.useMemo((()=>{if(n===o.pathname+o.search+o.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!c.some((e=>e.route.id===n.route.id))&&n.route.id in s&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Le(n);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[s,o,a,c,r,n,l]),p=e.useMemo((()=>Pe(d,a)),[d,a]),h=We(d);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),p.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),h.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Me.displayName="FrameworkContext";var Ve=!1;function Ye(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:o,renderMeta:a}=Fe(),{router:l,static:s,staticContext:u}=Ne(),{matches:c}=Ie(),d=Oe(o);a&&(a.didRenderScripts=!0);let p=Ue(c,null,i);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let i=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",o=s?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${p.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];ke(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:o,clientLoaderModule:a,hydrateFallbackModule:l,module:s}=i,u=[...o?[{module:o,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:s,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(s)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let n=new Set(t.state.matches.map((e=>e.route.id))),r=t.state.location.pathname.split("/").filter(Boolean),i=["/"];for(r.pop();r.length>0;)i.push(`/${r.join("/")}`),r.pop();i.forEach((e=>{let r=f(t.routes,e,t.basename);r&&r.forEach((e=>n.add(e.route.id)))}));let o=[...n].reduce(((t,n)=>Object.assign(t,{[n]:e.routes[n]})),{});return{...e,routes:o}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(o),type:"module",async:!0}))}),[]),m=Ve?[]:n.entry.imports.concat(Pe(p,n,{includeHydrateFallback:!0}));return Ve?null:e.createElement(e.Fragment,null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin}),[...new Set(g)].map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin}))),h);var g}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Ke="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ke&&(window.__reactRouterVersion="7.2.0")}catch(bu){}function Xe(t){let{basename:n,children:r,window:o}=t,a=e.useRef();null==a.current&&(a.current=i({window:o,v5Compat:!0}));let l=a.current,[s,u]=e.useState({action:l.action,location:l.location}),c=e.useCallback((t=>{e.startTransition((()=>u(t)))}),[u]);return e.useLayoutEffect((()=>l.listen(c)),[l,c]),e.createElement(he,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var Je=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qe=e.forwardRef((function(t,n){let r,{onClick:i,discover:l="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:v,...x}=t,{basename:y}=e.useContext(H),b="string"===typeof m&&Je.test(m),w=!1;if("string"===typeof m&&b&&(r=m,Ke))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=C(t.pathname,y);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(bu){a(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(K(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(H),{hash:a,pathname:l,search:s}=Z(t,{relative:n}),u=l;return"/"!==r&&(u="/"===l?r:L([r,l])),i.createHref({pathname:u,search:s,hash:a})}(m,{relative:c}),[E,k,_]=function(t,n){let r=e.useContext(Me),[i,o]=e.useState(!1),[a,l]=e.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=n,p=e.useRef(null);e.useEffect((()=>{if("render"===t&&l(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{l(e.isIntersecting)}))}),{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{l(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let h=()=>{o(!0)},m=()=>{o(!1),l(!1)};return r?"intent"!==t?[a,p,{}]:[a,p,{onFocus:$e(s,h),onBlur:$e(u,m),onMouseEnter:$e(c,h),onMouseLeave:$e(d,m),onTouchStart:$e(f,h)}]:[!1,p,{}]}(s,x),j=function(t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=q(),c=X(),d=Z(t,{relative:a});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:u(c)===u(d);s(t,{replace:n,state:i,preventScrollReset:o,relative:a,viewTransition:l})}}),[c,s,d,r,i,n,t,o,a,l])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:c,viewTransition:v});let T=e.createElement("a",{...x,..._,href:r||S,onClick:w||d?i:function(e){i&&i(e),e.defaultPrevented||j(e)},ref:Ge(n,k),target:h,"data-discover":b||"render"!==l?void 0:"true"});return E&&!b?e.createElement(e.Fragment,null,T,e.createElement(Be,{page:S})):T}));Qe.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:a="",end:l=!1,style:s,to:u,viewTransition:c,children:d,...f}=t,p=Z(u,{relative:f.relative}),h=X(),m=e.useContext($),{navigator:g,basename:v}=e.useContext(H),x=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(U);o(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=et("useViewTransitionState"),a=Z(t,{relative:n.relative});if(!r.isTransitioning)return!1;let l=C(r.currentLocation.pathname,i)||r.currentLocation.pathname,s=C(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=_(a.pathname,s)||null!=_(a.pathname,l)}(p)&&!0===c,y=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,b=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&v&&(w=C(w,v)||w);const S="/"!==y&&y.endsWith("/")?y.length-1:y.length;let E,k=b===y||!l&&b.startsWith(y)&&"/"===b.charAt(S),j=null!=w&&(w===y||!l&&w.startsWith(y)&&"/"===w.charAt(y.length)),T={isActive:k,isPending:j,isTransitioning:x},P=k?r:void 0;E="function"===typeof a?a(T):[a,k?"active":null,j?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R="function"===typeof s?s(T):s;return e.createElement(Qe,{...f,"aria-current":P,className:E,ref:n,style:R,to:u,viewTransition:c},"function"===typeof d?d(T):d)})).displayName="NavLink";var qe=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:a,reloadDocument:l,replace:s,state:c,method:d=ve,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...v}=t,x=rt(),y=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),i=e.useContext(Y);o(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Z(t||".",{relative:n})},s=X();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!a.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:L([r,l.pathname]));return u(l)}(f,{relative:h}),b="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&Je.test(f);return e.createElement("form",{ref:n,method:b,action:y,onSubmit:l?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;x(t||e.currentTarget,{fetcherKey:i,method:n,navigate:a,replace:s,state:c,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function Ze(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function et(t){let n=e.useContext(F);return o(n,Ze(t)),n}qe.displayName="Form";var tt=0,nt=()=>`__${String(++tt)}__`;function rt(){let{router:t}=et("useSubmit"),{basename:n}=e.useContext(H),r=ue("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:o,method:a,encType:l,formData:s,body:u}=Ee(e,n);if(!1===i.navigate){let e=i.fetcherKey||nt();await t.fetch(e,r,i.action||o,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:s,body:u,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var it=function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},it.apply(this,arguments)};Object.create;function ot(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var at=n(324),lt=n.n(at),st="-ms-",ut="-moz-",ct="-webkit-",dt="comm",ft="rule",pt="decl",ht="@keyframes",mt=Math.abs,gt=String.fromCharCode,vt=Object.assign;function xt(e){return e.trim()}function yt(e,t){return(e=t.exec(e))?e[0]:e}function bt(e,t,n){return e.replace(t,n)}function wt(e,t,n){return e.indexOf(t,n)}function St(e,t){return 0|e.charCodeAt(t)}function Et(e,t,n){return e.slice(t,n)}function kt(e){return e.length}function _t(e){return e.length}function jt(e,t){return t.push(e),e}function Ct(e,t){return e.filter((function(e){return!yt(e,t)}))}var Tt=1,Pt=1,Rt=0,zt=0,Lt=0,At="";function Dt(e,t,n,r,i,o,a,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Tt,column:Pt,length:a,return:"",siblings:l}}function Ot(e,t){return vt(Dt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Nt(e){for(;e.root;)e=Ot(e.root,{children:[e]});jt(e,e.siblings)}function It(){return Lt=zt>0?St(At,--zt):0,Pt--,10===Lt&&(Pt=1,Tt--),Lt}function Mt(){return Lt=zt<Rt?St(At,zt++):0,Pt++,10===Lt&&(Pt=1,Tt++),Lt}function Ft(){return St(At,zt)}function $t(){return zt}function Ut(e,t){return Et(At,e,t)}function Bt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Wt(e){return Tt=Pt=1,Rt=kt(At=e),zt=0,[]}function Ht(e){return At="",e}function Vt(e){return xt(Ut(zt-1,Kt(91===e?e+2:40===e?e+1:e)))}function Yt(e){for(;(Lt=Ft())&&Lt<33;)Mt();return Bt(e)>2||Bt(Lt)>3?"":" "}function Gt(e,t){for(;--t&&Mt()&&!(Lt<48||Lt>102||Lt>57&&Lt<65||Lt>70&&Lt<97););return Ut(e,$t()+(t<6&&32==Ft()&&32==Mt()))}function Kt(e){for(;Mt();)switch(Lt){case e:return zt;case 34:case 39:34!==e&&39!==e&&Kt(Lt);break;case 40:41===e&&Kt(e);break;case 92:Mt()}return zt}function Xt(e,t){for(;Mt()&&e+Lt!==57&&(e+Lt!==84||47!==Ft()););return"/*"+Ut(t,zt-1)+"*"+gt(47===e?e:Mt())}function Jt(e){for(;!Bt(Ft());)Mt();return Ut(e,zt)}function Qt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function qt(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case pt:return e.return=e.return||e.value;case dt:return"";case ht:return e.return=e.value+"{"+Qt(e.children,r)+"}";case ft:if(!kt(e.value=e.props.join(",")))return""}return kt(n=Qt(e.children,r))?e.return=e.value+"{"+n+"}":""}function Zt(e,t,n){switch(function(e,t){return 45^St(e,0)?(((t<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}(e,t)){case 5103:return ct+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ct+e+e;case 4789:return ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ct+e+ut+e+st+e+e;case 5936:switch(St(e,t+11)){case 114:return ct+e+st+bt(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ct+e+st+bt(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ct+e+st+bt(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ct+e+st+e+e;case 6165:return ct+e+st+"flex-"+e+e;case 5187:return ct+e+bt(e,/(\w+).+(:[^]+)/,ct+"box-$1$2"+st+"flex-$1$2")+e;case 5443:return ct+e+st+"flex-item-"+bt(e,/flex-|-self/g,"")+(yt(e,/flex-|baseline/)?"":st+"grid-row-"+bt(e,/flex-|-self/g,""))+e;case 4675:return ct+e+st+"flex-line-pack"+bt(e,/align-content|flex-|-self/g,"")+e;case 5548:return ct+e+st+bt(e,"shrink","negative")+e;case 5292:return ct+e+st+bt(e,"basis","preferred-size")+e;case 6060:return ct+"box-"+bt(e,"-grow","")+ct+e+st+bt(e,"grow","positive")+e;case 4554:return ct+bt(e,/([^-])(transform)/g,"$1"+ct+"$2")+e;case 6187:return bt(bt(bt(e,/(zoom-|grab)/,ct+"$1"),/(image-set)/,ct+"$1"),e,"")+e;case 5495:case 3959:return bt(e,/(image-set\([^]*)/,ct+"$1$`$1");case 4968:return bt(bt(e,/(.+:)(flex-)?(.*)/,ct+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ct+e+e;case 4200:if(!yt(e,/flex-|baseline/))return st+"grid-column-align"+Et(e,t)+e;break;case 2592:case 3360:return st+bt(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,yt(e.props,/grid-\w+-end/)}))?~wt(e+(n=n[t].value),"span",0)?e:st+bt(e,"-start","")+e+st+"grid-row-span:"+(~wt(n,"span",0)?yt(n,/\d+/):+yt(n,/\d+/)-+yt(e,/\d+/))+";":st+bt(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return yt(e.props,/grid-\w+-start/)}))?e:st+bt(bt(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return bt(e,/(.+)-inline(.+)/,ct+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kt(e)-1-t>6)switch(St(e,t+1)){case 109:if(45!==St(e,t+4))break;case 102:return bt(e,/(.+:)(.+)-([^]+)/,"$1"+ct+"$2-$3$1"+ut+(108==St(e,t+3)?"$3":"$2-$3"))+e;case 115:return~wt(e,"stretch",0)?Zt(bt(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return bt(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,l){return st+n+":"+r+l+(i?st+n+"-span:"+(o?a:+a-+r)+l:"")+e}));case 4949:if(121===St(e,t+6))return bt(e,":",":"+ct)+e;break;case 6444:switch(St(e,45===St(e,14)?18:11)){case 120:return bt(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ct+(45===St(e,14)?"inline-":"")+"box$3$1"+ct+"$2$3$1"+st+"$2box$3")+e;case 100:return bt(e,":",":"+st)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return bt(e,"scroll-","scroll-snap-")+e}return e}function en(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case pt:return void(e.return=Zt(e.value,e.length,n));case ht:return Qt([Ot(e,{value:bt(e.value,"@","@"+ct)})],r);case ft:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(yt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Nt(Ot(e,{props:[bt(t,/:(read-\w+)/,":-moz-$1")]})),Nt(Ot(e,{props:[t]})),vt(e,{props:Ct(n,r)});break;case"::placeholder":Nt(Ot(e,{props:[bt(t,/:(plac\w+)/,":"+ct+"input-$1")]})),Nt(Ot(e,{props:[bt(t,/:(plac\w+)/,":-moz-$1")]})),Nt(Ot(e,{props:[bt(t,/:(plac\w+)/,st+"input-$1")]})),Nt(Ot(e,{props:[t]})),vt(e,{props:Ct(n,r)})}return""}))}}function tn(e){return Ht(nn("",null,null,null,[""],e=Wt(e),0,[0],e))}function nn(e,t,n,r,i,o,a,l,s){for(var u=0,c=0,d=a,f=0,p=0,h=0,m=1,g=1,v=1,x=0,y="",b=i,w=o,S=r,E=y;g;)switch(h=x,x=Mt()){case 40:if(108!=h&&58==St(E,d-1)){-1!=wt(E+=bt(Vt(x),"&","&\f"),"&\f",mt(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:E+=Vt(x);break;case 9:case 10:case 13:case 32:E+=Yt(h);break;case 92:E+=Gt($t()-1,7);continue;case 47:switch(Ft()){case 42:case 47:jt(on(Xt(Mt(),$t()),t,n,s),s);break;default:E+="/"}break;case 123*m:l[u++]=kt(E)*v;case 125*m:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+c:-1==v&&(E=bt(E,/\f/g,"")),p>0&&kt(E)-d&&jt(p>32?an(E+";",r,n,d-1,s):an(bt(E," ","")+";",r,n,d-2,s),s);break;case 59:E+=";";default:if(jt(S=rn(E,t,n,u,c,i,l,y,b=[],w=[],d,o),o),123===x)if(0===c)nn(E,t,S,S,b,o,d,l,w);else switch(99===f&&110===St(E,3)?100:f){case 100:case 108:case 109:case 115:nn(e,S,S,r&&jt(rn(e,S,S,0,0,i,l,y,i,b=[],d,w),w),i,w,d,l,r?b:w);break;default:nn(E,S,S,S,[""],w,0,l,w)}}u=c=p=0,m=v=1,y=E="",d=a;break;case 58:d=1+kt(E),p=h;default:if(m<1)if(123==x)--m;else if(125==x&&0==m++&&125==It())continue;switch(E+=gt(x),x*m){case 38:v=c>0?1:(E+="\f",-1);break;case 44:l[u++]=(kt(E)-1)*v,v=1;break;case 64:45===Ft()&&(E+=Vt(Mt())),f=Ft(),c=d=kt(y=E+=Jt($t())),x++;break;case 45:45===h&&2==kt(E)&&(m=0)}}return o}function rn(e,t,n,r,i,o,a,l,s,u,c,d){for(var f=i-1,p=0===i?o:[""],h=_t(p),m=0,g=0,v=0;m<r;++m)for(var x=0,y=Et(e,f+1,f=mt(g=a[m])),b=e;x<h;++x)(b=xt(g>0?p[x]+" "+y:bt(y,/&\f/g,p[x])))&&(s[v++]=b);return Dt(e,t,n,0===i?ft:l,s,u,c,d)}function on(e,t,n,r){return Dt(e,t,n,dt,gt(Lt),Et(e,2,-2),0,r)}function an(e,t,n,r,i){return Dt(e,t,n,pt,Et(e,0,r),Et(e,r+1,-1),r,i)}var ln={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.SC_ATTR)||"data-styled",un="active",cn="data-styled-version",dn="6.1.15",fn="/*!sc*/\n",pn="undefined"!=typeof window&&"HTMLElement"in window,hn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_EMAILJS_SERVICE_ID:"service_0v41bzd",REACT_APP_EMAILJS_TEMPLATE_ID:"template_n6s6wp8",REACT_APP_EMAILJS_PUBLIC_KEY:"jdMIZFvSFHNQfLeBN"}.SC_DISABLE_SPEEDY)),mn={},gn=(new Set,Object.freeze([])),vn=Object.freeze({});function xn(e,t,n){return void 0===n&&(n=vn),e.theme!==n.theme&&e.theme||t||n.theme}var yn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wn=/(^-|-$)/g;function Sn(e){return e.replace(bn,"-").replace(wn,"")}var En=/(a)(d)/gi,kn=function(e){return String.fromCharCode(e+(e>25?39:97))};function _n(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=kn(t%52)+n;return(kn(t%52)+n).replace(En,"$1-$2")}var jn,Cn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tn=function(e){return Cn(5381,e)};function Pn(e){return _n(Tn(e)>>>0)}function Rn(e){return e.displayName||e.name||"Component"}function zn(e){return"string"==typeof e&&!0}var Ln="function"==typeof Symbol&&Symbol.for,An=Ln?Symbol.for("react.memo"):60115,Dn=Ln?Symbol.for("react.forward_ref"):60112,On={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},In={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mn=((jn={})[Dn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jn[An]=In,jn);function Fn(e){return("type"in(t=e)&&t.type.$$typeof)===An?In:"$$typeof"in e?Mn[e.$$typeof]:On;var t}var $n=Object.defineProperty,Un=Object.getOwnPropertyNames,Bn=Object.getOwnPropertySymbols,Wn=Object.getOwnPropertyDescriptor,Hn=Object.getPrototypeOf,Vn=Object.prototype;function Yn(e,t,n){if("string"!=typeof t){if(Vn){var r=Hn(t);r&&r!==Vn&&Yn(e,r,n)}var i=Un(t);Bn&&(i=i.concat(Bn(t)));for(var o=Fn(e),a=Fn(t),l=0;l<i.length;++l){var s=i[l];if(!(s in Nn||n&&n[s]||a&&s in a||o&&s in o)){var u=Wn(t,s);try{$n(e,s,u)}catch(e){}}}}return e}function Gn(e){return"function"==typeof e}function Kn(e){return"object"==typeof e&&"styledComponentId"in e}function Xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Qn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qn(e,t,n){if(void 0===n&&(n=!1),!n&&!Qn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qn(e[r],t[r]);else if(Qn(t))for(var r in t)e[r]=qn(e[r],t[r]);return e}function Zn(e,t){Object.defineProperty(e,"toString",{value:t})}function er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var tr=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw er(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(fn);return t},e}(),nr=new Map,rr=new Map,ir=1,or=function(e){if(nr.has(e))return nr.get(e);for(;rr.has(ir);)ir++;var t=ir++;return nr.set(e,t),rr.set(t,e),t},ar=function(e,t){ir=t+1,nr.set(e,t),rr.set(t,e)},lr="style[".concat(sn,"][").concat(cn,'="').concat(dn,'"]'),sr=new RegExp("^".concat(sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ur=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},cr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(fn),i=[],o=0,a=r.length;o<a;o++){var l=r[o].trim();if(l){var s=l.match(sr);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(ar(c,u),ur(e,c,s[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},dr=function(e){for(var t=document.querySelectorAll(lr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(sn)!==un&&(cr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function fr(){return n.nc}var pr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(sn,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(sn,un),r.setAttribute(cn,dn);var a=fr();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},hr=function(){function e(e){this.element=pr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw er(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mr=function(){function e(e){this.element=pr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),gr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),vr=pn,xr={isServer:!pn,useCSSOMInjection:!hn},yr=function(){function e(e,t,n){void 0===e&&(e=vn),void 0===t&&(t={});var r=this;this.options=it(it({},xr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pn&&vr&&(vr=!1,dr(this)),Zn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return rr.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var l="".concat(sn,".g").concat(n,'[id="').concat(i,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(fn)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return or(e)},e.prototype.rehydrate=function(){!this.server&&pn&&dr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(it(it({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new gr(n):t?new hr(n):new mr(n)}(this.options),new tr(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(or(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(or(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(or(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),br=/&/g,wr=/^\s*\/\/.*$/gm;function Sr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Sr(e.children,t)),e}))}function Er(e){var t,n,r,i=void 0===e?vn:e,o=i.options,a=void 0===o?vn:o,l=i.plugins,s=void 0===l?gn:l,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===ft&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(br,n).replace(r,u))})),a.prefix&&c.push(en),c.push(qt);var d=function(e,i,o,l){void 0===i&&(i=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(wr,""),u=tn(o||i?"".concat(o," ").concat(i," { ").concat(s," }"):s);a.namespace&&(u=Sr(u,a.namespace));var d,f=[];return Qt(u,function(e){var t=_t(e);return function(n,r,i,o){for(var a="",l=0;l<t;l++)a+=e[l](n,r,i,o)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce((function(e,t){return t.name||er(15),Cn(e,t.name)}),5381).toString():"",d}var kr=new yr,_r=Er(),jr=e.createContext({shouldForwardProp:void 0,styleSheet:kr,stylis:_r}),Cr=(jr.Consumer,e.createContext(void 0));function Tr(){return(0,e.useContext)(jr)}function Pr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],o=Tr().styleSheet,a=(0,e.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),l=(0,e.useMemo)((function(){return Er({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){lt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var s=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:a,stylis:l}}),[t.shouldForwardProp,a,l]);return e.createElement(jr.Provider,{value:s},e.createElement(Cr.Provider,{value:l},t.children))}var Rr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=_r);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Zn(this,(function(){throw er(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=_r),this.name+e.hash},e}(),zr=function(e){return e>="A"&&e<="Z"};function Lr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ar=function(e){return null==e||!1===e||""===e},Dr=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Ar(o)&&(Array.isArray(o)&&o.isCss||Gn(o)?r.push("".concat(Lr(i),":"),o,";"):Qn(o)?r.push.apply(r,ot(ot(["".concat(i," {")],Dr(o),!1),["}"],!1)):r.push("".concat(Lr(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in ln||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Or(e,t,n,r){return Ar(e)?[]:Kn(e)?[".".concat(e.styledComponentId)]:Gn(e)?!Gn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Or(e(t),t,n,r):e instanceof Rr?n?(e.inject(n,r),[e.getName(r)]):[e]:Qn(e)?Dr(e):Array.isArray(e)?Array.prototype.concat.apply(gn,e.map((function(e){return Or(e,t,n,r)}))):[e.toString()];var i}function Nr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!Kn(n))return!1}return!0}var Ir=Tn(dn),Mr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Nr(e),this.componentId=t,this.baseHash=Cn(Ir,t),this.baseStyle=n,yr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Xn(r,this.staticRulesId);else{var i=Jn(Or(this.rules,e,t,n)),o=_n(Cn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=Xn(r,o),this.staticRulesId=o}else{for(var l=Cn(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=Jn(Or(c,e,t,n));l=Cn(l,d+u),s+=d}}if(s){var f=_n(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=Xn(r,f)}}return r},e}(),Fr=e.createContext(void 0);Fr.Consumer;var $r={};new Set;function Ur(t,n,r){var i=Kn(t),o=t,a=!zn(t),l=n.attrs,s=void 0===l?gn:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Sn(e);$r[n]=($r[n]||0)+1;var r="".concat(n,"-").concat(Pn(dn+n+$r[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return zn(e)?"styled.".concat(e):"Styled(".concat(Rn(e),")")}(t):d,p=n.displayName&&n.componentId?"".concat(Sn(n.displayName),"-").concat(n.componentId):n.componentId||c,h=i&&o.attrs?o.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var x=new Mr(r,p,i?o.componentStyle:void 0);function y(t,n){return function(t,n,r){var i=t.attrs,o=t.componentStyle,a=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,u=t.target,c=e.useContext(Fr),d=Tr(),f=t.shouldForwardProp||d.shouldForwardProp,p=xn(n,c,a)||vn,h=function(e,t,n){for(var r,i=it(it({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=Gn(r=e[o])?r(i):r;for(var l in a)i[l]="className"===l?Xn(i[l],a[l]):"style"===l?it(it({},i[l]),a[l]):a[l]}return t.className&&(i.className=Xn(i.className,t.className)),i}(i,n,p),m=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===p||("forwardedAs"===v?g.as=h.forwardedAs:f&&!f(v,m)||(g[v]=h[v]));var x=function(e,t){var n=Tr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),y=Xn(l,s);return x&&(y+=" "+x),h.className&&(y+=" "+h.className),g[zn(m)&&!yn.has(m)?"class":"className"]=y,r&&(g.ref=r),(0,e.createElement)(m,g)}(b,t,n)}y.displayName=f;var b=e.forwardRef(y);return b.attrs=h,b.componentStyle=x,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=i?Xn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=p,b.target=i?o.target:t,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)qn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),Zn(b,(function(){return".".concat(b.styledComponentId)})),a&&Yn(b,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Br(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Wr=function(e){return Object.assign(e,{isCss:!0})};function Hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||Qn(e))return Wr(Or(Br(gn,ot([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Or(r):Wr(Or(Br(r,t)))}function Vr(e,t,n){if(void 0===n&&(n=vn),!t)throw er(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Hr.apply(void 0,ot([r],i,!1)))};return r.attrs=function(r){return Vr(e,t,it(it({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Vr(e,t,it(it({},n),r))},r}var Yr=function(e){return Vr(Ur,e)},Gr=Yr;yn.forEach((function(e){Gr[e]=Yr(e)}));var Kr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Nr(e),yr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(Jn(Or(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&yr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Xr(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Hr.apply(void 0,ot([t],n,!1)),o="sc-global-".concat(Pn(JSON.stringify(i))),a=new Kr(i,o),l=function(t){var n=Tr(),r=e.useContext(Fr),i=e.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return s(i,t,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,mn,n,i);else{var o=it(it({},t),{theme:xn(t,r,l.defaultProps)});a.renderStyles(e,o,n,i)}}return e.memo(l)}function Jr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jn(Hr.apply(void 0,ot([e],t,!1))),i=Pn(r);return new Rr(i,r)}(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=fr(),r=Jn([n&&'nonce="'.concat(n,'"'),"".concat(sn,'="true"'),"".concat(cn,'="').concat(dn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw er(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw er(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[sn]="",n[cn]=dn,n.dangerouslySetInnerHTML={__html:r},n),o=fr();return o&&(i.nonce=o),[e.createElement("style",it({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new yr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw er(2);return e.createElement(Pr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw er(3)}})(),"__sc-".concat(sn,"__");const Qr=n.p+"static/media/logo.0c8f1b780a9bd49d8d6f.png";var qr=n(579);const Zr=Gr.nav`
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
`,ei=Gr(Qe)`
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
`,ii=Gr(Qe)`
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
`,si=Gr.div`
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:after {
    content: '▼';
    font-size: 0.8rem;
    position: absolute;
    right: 30%;
    transform: ${e=>e.$isExpanded?"rotate(180deg)":"rotate(0)"};
    transition: transform 0.3s ease;
  }
`,ui=Gr(Qe)`
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

  &.submenu {
    font-size: 1.1rem;
    padding-left: 2rem;
    color: rgba(255, 255, 255, 0.8);
    display: ${e=>e.$isExpanded?"block":"none"};
  }
`,ci=Gr.div`
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
`,di=Gr.div`
  position: relative;
  display: inline-block;

  &:hover ${ci} {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`,fi=Gr(ii)`
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

  ${di}:hover &::after {
    transform: rotate(180deg);
  }

  &.active {
    color: rgba(255, 255, 255, 1);
  }
`,pi=Gr(Qe)`
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
`,hi=Gr.span`
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 12px;
  background: rgba(255, 77, 0, 0.2);
  color: #FF4D00;
  margin-left: 8px;
`,mi=(Gr.div`
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
`),gi=Gr.div`
  padding: 12px 24px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 8px;
  text-align: center;
  font-style: italic;
`;const vi=function(){const t=X(),[n,r]=(0,e.useState)((()=>t.pathname.startsWith("/geo-os")||"/partner-program"===t.pathname?"Geo OS":t.pathname.startsWith("/platform")||t.pathname.includes("operations")?"Platforms":"/manifesto"===t.pathname?"Manifesto":"/"===t.pathname?"Home":"")),[i,o]=(0,e.useState)(!1),[a,l]=(0,e.useState)({});e.useEffect((()=>{t.pathname.startsWith("/geo-os")||"/partner-program"===t.pathname?r("Geo OS"):t.pathname.startsWith("/platform")||t.pathname.includes("operations")?r("Platforms"):"/manifesto"===t.pathname?r("Manifesto"):"/"===t.pathname?r("Home"):r("")}),[t.pathname]);const s=e=>{r(e),o(!1)},u=e=>{l((t=>({...t,[e]:!t[e]})))};return(0,qr.jsxs)(qr.Fragment,{children:[(0,qr.jsxs)(Zr,{children:[(0,qr.jsxs)(ei,{as:Qe,to:"/",children:[(0,qr.jsx)(ti,{src:Qr,alt:"GeoSpatios Logo"}),(0,qr.jsx)(ni,{children:"GeoSpatios"})]}),(0,qr.jsx)(ri,{children:[{text:"Home",href:"/"},{text:"Geo OS",href:"/geo-os",dropdownItems:[{text:"Overview",href:"/geo-os"},{text:"Partner Program",href:"/partner-program"}]},{text:"Platforms",href:"/platform",dropdownItems:[{text:"Airfield Operations",href:"/platform/airfield-operations",isReady:!0},{text:"Maritime Operations",href:"/platform/maritime-operations",isReady:!1}]},{text:"Manifesto",href:"/manifesto"}].map(((e,r)=>e.dropdownItems?(0,qr.jsxs)(di,{children:[(0,qr.jsx)(fi,{as:"div",onClick:()=>u(e.text),className:n===e.text?"active":"",children:e.text}),(0,qr.jsxs)(ci,{$isOpen:a[e.text],children:[e.dropdownItems.map(((n,r)=>(0,qr.jsxs)(pi,{to:n.href,onClick:()=>{u(e.text),s(e.text)},$isActive:t.pathname===n.href,children:[n.text,!1===n.isReady&&(0,qr.jsx)(hi,{children:"Coming Soon"})]},r))),"Platforms"===e.text&&(0,qr.jsx)(gi,{children:"More sectors coming soon..."})]})]},r):(0,qr.jsx)(ii,{to:e.href,className:n===e.text?"active":"",onClick:()=>s(e.text),children:e.text},r)))}),(0,qr.jsx)(oi,{children:(0,qr.jsx)(ii,{to:"/careers",children:"Careers"})}),(0,qr.jsx)(ai,{onClick:()=>o(!i),children:(0,qr.jsx)(mi,{children:"\u2630"})})]}),(0,qr.jsxs)(li,{"data-isopen":i.toString(),children:[(0,qr.jsx)(ui,{to:"/",onClick:()=>s("Home"),children:"Home"}),(0,qr.jsx)(si,{$isExpanded:a["Geo OS"],onClick:()=>u("Geo OS"),children:"Geo OS"}),(0,qr.jsx)(ui,{to:"/geo-os",className:"submenu",$isExpanded:a["Geo OS"],onClick:()=>s("Geo OS"),children:"Overview"}),(0,qr.jsx)(ui,{to:"/partner-program",className:"submenu",$isExpanded:a["Geo OS"],onClick:()=>s("Geo OS"),children:"Partner Program"}),(0,qr.jsx)(si,{$isExpanded:a.Platforms,onClick:()=>u("Platforms"),children:"Platforms"}),(0,qr.jsx)(ui,{to:"/platform/airfield-operations",className:"submenu",$isExpanded:a.Platforms,onClick:()=>s("Platforms"),children:"Airfield Operations"}),(0,qr.jsx)(ui,{to:"/platform/maritime-operations",className:"submenu",$isExpanded:a.Platforms,onClick:()=>s("Platforms"),children:"Maritime Operations"}),(0,qr.jsx)(ui,{to:"/manifesto",onClick:()=>s("Manifesto"),children:"Manifesto"}),(0,qr.jsx)(ui,{to:"/careers",children:"Careers"})]})]})};var xi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yi=e.createContext&&e.createContext(xi),bi=["attr","size","title"];function wi(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}function Ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ki(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ei(Object(n),!0).forEach((function(t){_i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(t){return t&&t.map(((t,n)=>e.createElement(t.tag,ki({key:n},t.attr),ji(t.child))))}function Ci(t){return n=>e.createElement(Ti,Si({attr:ki({},t.attr)},n),ji(t.child))}function Ti(t){var n=n=>{var r,{attr:i,size:o,title:a}=t,l=wi(t,bi),s=o||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),e.createElement("svg",Si({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,l,{className:r,style:ki(ki({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&e.createElement("title",null,a),t.children)};return void 0!==yi?e.createElement(yi.Consumer,null,(e=>n(e))):n(xi)}function Pi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function Ri(e){return Ci({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(e)}function zi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Li(e){return Ci({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(e)}function Ai(e){return Ci({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"},child:[]}]})(e)}function Di(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(e)}function Oi(e){return Ci({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}const Ni=Gr.footer`
  width: 100%;
  background: rgb(0, 0, 0);
  backdrop-filter: blur(10px);
  padding: 2rem 5%;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Ii=Gr.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Mi=Gr.div`
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
`,Fi=Gr.div`
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
`,$i=Gr.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Ui=Gr.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`,Bi=Gr.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`,Wi=Gr.div`
  display: flex;
  gap: 6rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`,Hi=Gr.div`
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
`,Vi=Gr(Qe)`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.85rem;
  letter-spacing: 0.3px;
  
  &:hover {
    color: white;
  }
`,Yi=Gr.div`
  display: flex;
  gap: 1rem;
`,Gi=Gr.a`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateY(-3px);
  }
`,Ki=Gr.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  letter-spacing: 0.5px;
`,Xi=Gr.div`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  line-height: 1.6;
`;const Ji=function(){const e=(new Date).getFullYear();return(0,qr.jsx)(Ni,{children:(0,qr.jsxs)(Ii,{children:[(0,qr.jsxs)(Mi,{children:[(0,qr.jsxs)($i,{children:[(0,qr.jsx)(Ui,{src:Qr,alt:"GeoSpatios Logo"}),(0,qr.jsx)(Bi,{children:"GeoSpatios"})]}),(0,qr.jsxs)(Wi,{children:[(0,qr.jsxs)(Hi,{children:[(0,qr.jsx)("h3",{children:"Company"}),(0,qr.jsx)(Vi,{to:"/",children:"Home"}),(0,qr.jsx)(Vi,{to:"/manifesto",children:"Manifesto"}),(0,qr.jsx)(Vi,{to:"/careers",children:"Careers"})]}),(0,qr.jsxs)(Hi,{children:[(0,qr.jsx)("h3",{children:"Geo OS"}),(0,qr.jsx)(Vi,{to:"/geo-os",children:"Overview"}),(0,qr.jsx)(Vi,{to:"/geo-os/partner-program",children:"Partner Program"})]}),(0,qr.jsxs)(Hi,{children:[(0,qr.jsx)("h3",{children:"Platform"}),(0,qr.jsx)(Vi,{to:"/platform/airfield-operations",children:"Airfield Operations"}),(0,qr.jsx)(Vi,{to:"/platform/maritime-operations",children:"Maritime Operations"}),(0,qr.jsx)(Vi,{to:"/platform/logistics-operations",children:"Logistics Operations"})]})]}),(0,qr.jsx)(Yi,{children:(0,qr.jsx)(Gi,{href:"https://linkedin.com/company/geospatios",target:"_blank",rel:"noopener noreferrer",children:(0,qr.jsx)(Pi,{})})})]}),(0,qr.jsxs)(Fi,{children:[(0,qr.jsxs)(Ki,{children:["\xa9 ",e," GeoSpatios. All rights reserved."]}),(0,qr.jsx)(Xi,{children:"USA"})]})]})})},Qi=n.p+"static/media/home.9257cd443485f894346d.webm",qi=n.p+"static/media/phone.b3f02e037834117bf503.webm",Zi=Jr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,eo=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: black;
  color: #fff;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`,to=Gr.div`
  display: flex;
  gap: 1rem;
  opacity: 0;
  animation: ${Zi} 0.8s ease-out forwards;
  animation-delay: 1.1s;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    max-width: 300px;
  }
`,no=(Gr.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin: 2rem 0 3rem;
  width: 100%;
  pointer-events: none;
  opacity: 0;
  animation: ${Zi} 0.8s ease-out forwards;
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
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  opacity: 0;
  animation: ${Zi} 0.8s ease-out forwards;
  animation-delay: 0.5s;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9),
                 0 0 20px rgba(0, 0, 0, 0.8);
    padding: 0 10px;
  }
`),ro=Gr.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 768px) {
    min-height: 100vh;
  }

  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
`,io=Gr.div`
  position: relative;
  height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    position: relative;
    overflow: visible;
  }
`,oo=Gr.div`
  position: relative;
  background: black;
  z-index: 3;
`,ao=Gr.div`
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

  @media (max-width: 768px) {
    position: absolute;
    padding: 0 20px;
    z-index: 2;
    margin: 0 auto;
    top: 50vh;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
`,lo=(Gr.span`
  color: white;
  position: relative;
  display: inline;
  text-shadow: 0 0 20px rgb(0, 0, 0);
`,Gr.p`
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
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9),
                 0 0 20px rgba(0, 0, 0, 0.8);
  }
`),so=(Gr.div`
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
`),uo=Gr.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`,co=Gr.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
`,fo=Gr.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  
  &.mobile-video {
    display: none;
  }
  
  &.desktop-video {
    display: block;
  }
  
  @media (max-width: 768px) {
    &.mobile-video {
      display: block;
    }
    
    &.desktop-video {
      display: none;
    }
  }
  
  &.video-error {
    display: none;
  }
`,po=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`,ho=Gr.div`
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
`,mo=Gr.img`
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
`,go=Gr.div`
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
`,vo=Gr.div`
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
`,xo=Gr.section`
  padding: 6rem 5% 4rem;
  background: #000000;
  position: relative;
  z-index: 10;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  &:nth-child(even) {
    background: #050505;
  }
`;function yo(){const[t,n]=(0,e.useState)(0),[r,i]=(0,e.useState)(!0),[o,a]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{window.scrollTo(0,0);const e=()=>{a(window.innerWidth<=768)};e(),window.addEventListener("resize",e);const t=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(t),window.removeEventListener("resize",e)}}),[]),(0,e.useEffect)((()=>{let e=0;const t=()=>{e++;n(e/2*100),2===e&&setTimeout((()=>{i(!1)}),500)},r=document.createElement("video");r.innerHTML=`\n      <source src="${Qi}" type="video/webm" />\n      <source src="${Qi.replace(".webm",".mp4")}" type="video/mp4" />\n    `,r.load(),r.oncanplaythrough=t,r.onerror=t;const o=document.createElement("video");o.innerHTML=`\n      <source src="${qi}" type="video/webm" />\n      <source src="${qi.replace(".webm",".mp4")}" type="video/mp4" />\n    `,o.load(),o.oncanplaythrough=t,o.onerror=t}),[]),(0,e.useEffect)((()=>{if(!r){const e=document.querySelector(".desktop-video"),t=document.querySelector(".mobile-video"),n=e=>{if(e&&e.paused){const t=e.play();void 0!==t&&t.catch((()=>{const t=()=>{e.play(),document.removeEventListener("touchstart",t),document.removeEventListener("click",t),document.removeEventListener("scroll",t)};document.addEventListener("touchstart",t),document.addEventListener("click",t),document.addEventListener("scroll",t)}))}};setTimeout((()=>{o&&t?n(t):e&&n(e)}),1e3)}}),[r,o]),(0,qr.jsxs)(eo,{children:[(0,qr.jsxs)(co,{children:[(0,qr.jsxs)(fo,{className:"desktop-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:"","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",onError:e=>e.target.classList.add("video-error"),onLoadStart:e=>{const t=e.target;t.play().catch((()=>{document.addEventListener("touchstart",(()=>t.play()),{once:!0})}))},children:[(0,qr.jsx)("source",{src:Qi,type:"video/webm"}),(0,qr.jsx)("source",{src:Qi.replace(".webm",".mp4"),type:"video/mp4"})]}),(0,qr.jsxs)(fo,{className:"mobile-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:"","webkit-playsinline":"true","x5-playsinline":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"false",onError:e=>e.target.classList.add("video-error"),onLoadStart:e=>{const t=e.target;t.play().catch((()=>{document.addEventListener("touchstart",(()=>t.play()),{once:!0})}))},children:[(0,qr.jsx)("source",{src:qi,type:"video/webm"}),(0,qr.jsx)("source",{src:qi.replace(".webm",".mp4"),type:"video/mp4"})]}),(0,qr.jsx)(po,{})]}),(0,qr.jsxs)(ho,{$isLoading:r,children:[(0,qr.jsx)(mo,{src:Qr,alt:"GeoSpatios Logo"}),(0,qr.jsxs)(go,{children:["Loading... ",Math.round(t),"%"]}),(0,qr.jsx)(vo,{progress:t})]}),(0,qr.jsxs)(ro,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsx)(io,{children:(0,qr.jsxs)(ao,{children:[(0,qr.jsxs)(no,{children:["AI Command & Control ",(0,qr.jsx)("br",{})," for the Physical World"]}),(0,qr.jsxs)(lo,{children:["Unite high-stakes operations in one command center, ",(0,qr.jsx)("br",{}),"from data to decisions at machine speed"]}),(0,qr.jsxs)(to,{children:[(0,qr.jsx)(so,{href:"https://form.typeform.com/to/rx0GxJYm",rel:"noopener noreferrer",children:"Request Demo"}),(0,qr.jsx)(uo,{href:"/manifesto",children:"Learn More"})]})]})}),(0,qr.jsxs)(oo,{children:[(0,qr.jsx)(xo,{}),(0,qr.jsx)(Ji,{})]})]})]})}const bo=e.memo(yo),wo=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #000;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,So=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Eo=Gr.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`,ko=Gr.h1`
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
`,jo=Gr.a`
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
`;const Co=function(){return(0,qr.jsxs)(wo,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsxs)(So,{children:[(0,qr.jsxs)(Eo,{children:[(0,qr.jsx)(ko,{children:"Oops, looks like you ran into some turbulence!"}),(0,qr.jsx)(_o,{children:"This page is currently under construction. Our team is working hard to bring you cutting-edge geospatial solutions."}),(0,qr.jsx)(jo,{href:"/",children:"Return to Home"})]}),(0,qr.jsx)(Ji,{})]})]})};const To=function(t){let{SIM_RESOLUTION:n=128,DYE_RESOLUTION:r=1440,CAPTURE_RESOLUTION:i=512,DENSITY_DISSIPATION:o=3.5,VELOCITY_DISSIPATION:a=2,PRESSURE:l=.1,PRESSURE_ITERATIONS:s=20,CURL:u=3,SPLAT_RADIUS:c=.1,SPLAT_FORCE:d=6e3,SHADING:f=!0,COLOR_UPDATE_SPEED:p=10,BACK_COLOR:h={r:.5,g:0,b:0},TRANSPARENT:m=!0}=t;const g=(0,e.useRef)(null);return(0,e.useEffect)((()=>{const e=g.current;if(!e)return;let t={SIM_RESOLUTION:n,DYE_RESOLUTION:r,CAPTURE_RESOLUTION:i,DENSITY_DISSIPATION:o,VELOCITY_DISSIPATION:a,PRESSURE:l,PRESSURE_ITERATIONS:s,CURL:u,SPLAT_RADIUS:c,SPLAT_FORCE:d,SHADING:f,COLOR_UPDATE_SPEED:p,PAUSED:!1,BACK_COLOR:h,TRANSPARENT:m},v=[new function(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}];const{gl:x,ext:y}=function(e){const t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let n=e.getContext("webgl2",t);const r=!!n;r||(n=e.getContext("webgl",t)||e.getContext("experimental-webgl",t));let i,o;r?(n.getExtension("EXT_color_buffer_float"),o=n.getExtension("OES_texture_float_linear")):(i=n.getExtension("OES_texture_half_float"),o=n.getExtension("OES_texture_half_float_linear"));n.clearColor(0,0,0,1);const a=r?n.HALF_FLOAT:i&&i.HALF_FLOAT_OES;let l,s,u;r?(l=b(n,n.RGBA16F,n.RGBA,a),s=b(n,n.RG16F,n.RG,a),u=b(n,n.R16F,n.RED,a)):(l=b(n,n.RGBA,n.RGBA,a),s=b(n,n.RGBA,n.RGBA,a),u=b(n,n.RGBA,n.RGBA,a));return{gl:n,ext:{formatRGBA:l,formatRG:s,formatR:u,halfFloatTexType:a,supportLinearFiltering:o}}}(e);function b(e,t,n,r){if(!function(e,t,n,r){const i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,n,r,null);const o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);const a=e.checkFramebufferStatus(e.FRAMEBUFFER);return a===e.FRAMEBUFFER_COMPLETE}(e,t,n,r))switch(t){case e.R16F:return b(e,e.RG16F,e.RG,r);case e.RG16F:return b(e,e.RGBA16F,e.RGBA,r);default:return null}return{internalFormat:t,format:n}}y.supportLinearFiltering||(t.DYE_RESOLUTION=256,t.SHADING=!1);class w{constructor(e,t){this.uniforms={},this.program=S(e,t),this.uniforms=E(this.program)}bind(){x.useProgram(this.program)}}function S(e,t){let n=x.createProgram();return x.attachShader(n,e),x.attachShader(n,t),x.linkProgram(n),x.getProgramParameter(n,x.LINK_STATUS)||console.trace(x.getProgramInfoLog(n)),n}function E(e){let t=[],n=x.getProgramParameter(e,x.ACTIVE_UNIFORMS);for(let r=0;r<n;r++){let n=x.getActiveUniform(e,r).name;t[n]=x.getUniformLocation(e,n)}return t}function k(e,t,n){t=function(e,t){if(!t)return e;let n="";return t.forEach((e=>{n+="#define "+e+"\n"})),n+e}(t,n);const r=x.createShader(e);return x.shaderSource(r,t),x.compileShader(r),x.getShaderParameter(r,x.COMPILE_STATUS)||console.trace(x.getShaderInfoLog(r)),r}const _=k(x.VERTEX_SHADER,"\n        precision highp float;\n        attribute vec2 aPosition;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform vec2 texelSize;\n\n        void main () {\n            vUv = aPosition * 0.5 + 0.5;\n            vL = vUv - vec2(texelSize.x, 0.0);\n            vR = vUv + vec2(texelSize.x, 0.0);\n            vT = vUv + vec2(0.0, texelSize.y);\n            vB = vUv - vec2(0.0, texelSize.y);\n            gl_Position = vec4(aPosition, 0.0, 1.0);\n        }\n      "),j=k(x.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n\n        void main () {\n            gl_FragColor = texture2D(uTexture, vUv);\n        }\n      "),C=k(x.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        uniform sampler2D uTexture;\n        uniform float value;\n\n        void main () {\n            gl_FragColor = value * texture2D(uTexture, vUv);\n        }\n      "),T=k(x.FRAGMENT_SHADER,"\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uTarget;\n        uniform float aspectRatio;\n        uniform vec3 color;\n        uniform vec2 point;\n        uniform float radius;\n\n        void main () {\n            vec2 p = vUv - point.xy;\n            p.x *= aspectRatio;\n            vec3 splat = exp(-dot(p, p) / radius) * color;\n            vec3 base = texture2D(uTarget, vUv).xyz;\n            gl_FragColor = vec4(base + splat, 1.0);\n        }\n      "),P=k(x.FRAGMENT_SHADER,"\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uSource;\n        uniform vec2 texelSize;\n        uniform vec2 dyeTexelSize;\n        uniform float dt;\n        uniform float dissipation;\n\n        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n            vec2 st = uv / tsize - 0.5;\n            vec2 iuv = floor(st);\n            vec2 fuv = fract(st);\n\n            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n        }\n\n        void main () {\n            #ifdef MANUAL_FILTERING\n                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n                vec4 result = bilerp(uSource, coord, dyeTexelSize);\n            #else\n                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n                vec4 result = texture2D(uSource, coord);\n            #endif\n            float decay = 1.0 + dissipation * dt;\n            gl_FragColor = result / decay;\n        }\n      ",y.supportLinearFiltering?null:["MANUAL_FILTERING"]),R=k(x.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uVelocity, vL).x;\n            float R = texture2D(uVelocity, vR).x;\n            float T = texture2D(uVelocity, vT).y;\n            float B = texture2D(uVelocity, vB).y;\n\n            vec2 C = texture2D(uVelocity, vUv).xy;\n            if (vL.x < 0.0) { L = -C.x; }\n            if (vR.x > 1.0) { R = -C.x; }\n            if (vT.y > 1.0) { T = -C.y; }\n            if (vB.y < 0.0) { B = -C.y; }\n\n            float div = 0.5 * (R - L + T - B);\n            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n        }\n      "),z=k(x.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uVelocity, vL).y;\n            float R = texture2D(uVelocity, vR).y;\n            float T = texture2D(uVelocity, vT).x;\n            float B = texture2D(uVelocity, vB).x;\n            float vorticity = R - L - T + B;\n            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n        }\n      "),L=k(x.FRAGMENT_SHADER,"\n        precision highp float;\n        precision highp sampler2D;\n        varying vec2 vUv;\n        varying vec2 vL;\n        varying vec2 vR;\n        varying vec2 vT;\n        varying vec2 vB;\n        uniform sampler2D uVelocity;\n        uniform sampler2D uCurl;\n        uniform float curl;\n        uniform float dt;\n\n        void main () {\n            float L = texture2D(uCurl, vL).x;\n            float R = texture2D(uCurl, vR).x;\n            float T = texture2D(uCurl, vT).x;\n            float B = texture2D(uCurl, vB).x;\n            float C = texture2D(uCurl, vUv).x;\n\n            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n            force /= length(force) + 0.0001;\n            force *= curl * C;\n            force.y *= -1.0;\n\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity += force * dt;\n            velocity = min(max(velocity, -1000.0), 1000.0);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n      "),A=k(x.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uDivergence;\n\n        void main () {\n            float L = texture2D(uPressure, vL).x;\n            float R = texture2D(uPressure, vR).x;\n            float T = texture2D(uPressure, vT).x;\n            float B = texture2D(uPressure, vB).x;\n            float C = texture2D(uPressure, vUv).x;\n            float divergence = texture2D(uDivergence, vUv).x;\n            float pressure = (L + R + B + T - divergence) * 0.25;\n            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n        }\n      "),D=k(x.FRAGMENT_SHADER,"\n        precision mediump float;\n        precision mediump sampler2D;\n        varying highp vec2 vUv;\n        varying highp vec2 vL;\n        varying highp vec2 vR;\n        varying highp vec2 vT;\n        varying highp vec2 vB;\n        uniform sampler2D uPressure;\n        uniform sampler2D uVelocity;\n\n        void main () {\n            float L = texture2D(uPressure, vL).x;\n            float R = texture2D(uPressure, vR).x;\n            float T = texture2D(uPressure, vT).x;\n            float B = texture2D(uPressure, vB).x;\n            vec2 velocity = texture2D(uVelocity, vUv).xy;\n            velocity.xy -= vec2(R - L, T - B);\n            gl_FragColor = vec4(velocity, 0.0, 1.0);\n        }\n      "),O=(x.bindBuffer(x.ARRAY_BUFFER,x.createBuffer()),x.bufferData(x.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),x.STATIC_DRAW),x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,x.createBuffer()),x.bufferData(x.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),x.STATIC_DRAW),x.vertexAttribPointer(0,2,x.FLOAT,!1,0,0),x.enableVertexAttribArray(0),function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];null==e?(x.viewport(0,0,x.drawingBufferWidth,x.drawingBufferHeight),x.bindFramebuffer(x.FRAMEBUFFER,null)):(x.viewport(0,0,e.width,e.height),x.bindFramebuffer(x.FRAMEBUFFER,e.fbo)),t&&(x.clearColor(0,0,0,1),x.clear(x.COLOR_BUFFER_BIT)),x.drawElements(x.TRIANGLES,6,x.UNSIGNED_SHORT,0)});let N,I,M,F,$;const U=new w(_,j),B=new w(_,C),W=new w(_,T),H=new w(_,P),V=new w(_,R),Y=new w(_,z),G=new w(_,L),K=new w(_,A),X=new w(_,D),J=new class{constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(e){let t=0;for(let r=0;r<e.length;r++)t+=de(e[r]);let n=this.programs[t];if(null==n){let r=k(x.FRAGMENT_SHADER,this.fragmentShaderSource,e);n=S(this.vertexShader,r),this.programs[t]=n}n!==this.activeProgram&&(this.uniforms=E(n),this.activeProgram=n)}bind(){x.useProgram(this.activeProgram)}}(_,"\n      precision highp float;\n      precision highp sampler2D;\n      varying vec2 vUv;\n      varying vec2 vL;\n      varying vec2 vR;\n      varying vec2 vT;\n      varying vec2 vB;\n      uniform sampler2D uTexture;\n      uniform sampler2D uDithering;\n      uniform vec2 ditherScale;\n      uniform vec2 texelSize;\n\n      vec3 linearToGamma (vec3 color) {\n          color = max(color, vec3(0));\n          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));\n      }\n\n      void main () {\n          vec3 c = texture2D(uTexture, vUv).rgb;\n          #ifdef SHADING\n              vec3 lc = texture2D(uTexture, vL).rgb;\n              vec3 rc = texture2D(uTexture, vR).rgb;\n              vec3 tc = texture2D(uTexture, vT).rgb;\n              vec3 bc = texture2D(uTexture, vB).rgb;\n\n              float dx = length(rc) - length(lc);\n              float dy = length(tc) - length(bc);\n\n              vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n              vec3 l = vec3(0.0, 0.0, 1.0);\n\n              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n              c *= diffuse;\n          #endif\n\n          float a = max(c.r, max(c.g, c.b));\n          gl_FragColor = vec4(c, a);\n      }\n    ");function Q(){let e=ue(t.SIM_RESOLUTION),n=ue(t.DYE_RESOLUTION);const r=y.halfFloatTexType,i=y.formatRGBA,o=y.formatRG,a=y.formatR,l=y.supportLinearFiltering?x.LINEAR:x.NEAREST;x.disable(x.BLEND),N=N?ee(N,n.width,n.height,i.internalFormat,i.format,r,l):Z(n.width,n.height,i.internalFormat,i.format,r,l),I=I?ee(I,e.width,e.height,o.internalFormat,o.format,r,l):Z(e.width,e.height,o.internalFormat,o.format,r,l),M=q(e.width,e.height,a.internalFormat,a.format,r,x.NEAREST),F=q(e.width,e.height,a.internalFormat,a.format,r,x.NEAREST),$=Z(e.width,e.height,a.internalFormat,a.format,r,x.NEAREST)}function q(e,t,n,r,i,o){x.activeTexture(x.TEXTURE0);let a=x.createTexture();x.bindTexture(x.TEXTURE_2D,a),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MIN_FILTER,o),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_MAG_FILTER,o),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_S,x.CLAMP_TO_EDGE),x.texParameteri(x.TEXTURE_2D,x.TEXTURE_WRAP_T,x.CLAMP_TO_EDGE),x.texImage2D(x.TEXTURE_2D,0,n,e,t,0,r,i,null);let l=x.createFramebuffer();return x.bindFramebuffer(x.FRAMEBUFFER,l),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,a,0),x.viewport(0,0,e,t),x.clear(x.COLOR_BUFFER_BIT),{texture:a,fbo:l,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach:e=>(x.activeTexture(x.TEXTURE0+e),x.bindTexture(x.TEXTURE_2D,a),e)}}function Z(e,t,n,r,i,o){let a=q(e,t,n,r,i,o),l=q(e,t,n,r,i,o);return{width:e,height:t,texelSizeX:a.texelSizeX,texelSizeY:a.texelSizeY,get read(){return a},set read(e){a=e},get write(){return l},set write(e){l=e},swap(){let e=a;a=l,l=e}}}function ee(e,t,n,r,i,o,a){return e.width===t&&e.height===n||(e.read=function(e,t,n,r,i,o,a){let l=q(t,n,r,i,o,a);return U.bind(),x.uniform1i(U.uniforms.uTexture,e.attach(0)),O(l),l}(e.read,t,n,r,i,o,a),e.write=q(t,n,r,i,o,a),e.width=t,e.height=n,e.texelSizeX=1/t,e.texelSizeY=1/n),e}!function(){let e=[];t.SHADING&&e.push("SHADING"),J.setKeywords(e)}(),Q();let te=Date.now(),ne=0;function re(){const n=function(){let e=Date.now(),t=(e-te)/1e3;return t=Math.min(t,.016666),te=e,t}();var r;(function(){let t=ce(e.clientWidth),n=ce(e.clientHeight);if(e.width!==t||e.height!==n)return e.width=t,e.height=n,!0;return!1})()&&Q(),function(e){ne+=e*t.COLOR_UPDATE_SPEED,ne>=1&&(ne=function(e,t,n){const r=n-t;return 0===r?t:(e-t)%r+t}(ne,0,1),v.forEach((e=>{e.color=se()})))}(n),v.forEach((e=>{e.moved&&(e.moved=!1,function(e){let n=e.deltaX*t.SPLAT_FORCE,r=e.deltaY*t.SPLAT_FORCE;ie(e.texcoordX,e.texcoordY,n,r,e.color)}(e))})),function(e){x.disable(x.BLEND),Y.bind(),x.uniform2f(Y.uniforms.texelSize,I.texelSizeX,I.texelSizeY),x.uniform1i(Y.uniforms.uVelocity,I.read.attach(0)),O(F),G.bind(),x.uniform2f(G.uniforms.texelSize,I.texelSizeX,I.texelSizeY),x.uniform1i(G.uniforms.uVelocity,I.read.attach(0)),x.uniform1i(G.uniforms.uCurl,F.attach(1)),x.uniform1f(G.uniforms.curl,t.CURL),x.uniform1f(G.uniforms.dt,e),O(I.write),I.swap(),V.bind(),x.uniform2f(V.uniforms.texelSize,I.texelSizeX,I.texelSizeY),x.uniform1i(V.uniforms.uVelocity,I.read.attach(0)),O(M),B.bind(),x.uniform1i(B.uniforms.uTexture,$.read.attach(0)),x.uniform1f(B.uniforms.value,t.PRESSURE),O($.write),$.swap(),K.bind(),x.uniform2f(K.uniforms.texelSize,I.texelSizeX,I.texelSizeY),x.uniform1i(K.uniforms.uDivergence,M.attach(0));for(let r=0;r<t.PRESSURE_ITERATIONS;r++)x.uniform1i(K.uniforms.uPressure,$.read.attach(1)),O($.write),$.swap();X.bind(),x.uniform2f(X.uniforms.texelSize,I.texelSizeX,I.texelSizeY),x.uniform1i(X.uniforms.uPressure,$.read.attach(0)),x.uniform1i(X.uniforms.uVelocity,I.read.attach(1)),O(I.write),I.swap(),H.bind(),x.uniform2f(H.uniforms.texelSize,I.texelSizeX,I.texelSizeY),y.supportLinearFiltering||x.uniform2f(H.uniforms.dyeTexelSize,I.texelSizeX,I.texelSizeY);let n=I.read.attach(0);x.uniform1i(H.uniforms.uVelocity,n),x.uniform1i(H.uniforms.uSource,n),x.uniform1f(H.uniforms.dt,e),x.uniform1f(H.uniforms.dissipation,t.VELOCITY_DISSIPATION),O(I.write),I.swap(),y.supportLinearFiltering||x.uniform2f(H.uniforms.dyeTexelSize,N.texelSizeX,N.texelSizeY);x.uniform1i(H.uniforms.uVelocity,I.read.attach(0)),x.uniform1i(H.uniforms.uSource,N.read.attach(1)),x.uniform1f(H.uniforms.dissipation,t.DENSITY_DISSIPATION),O(N.write),N.swap()}(n),r=null,x.blendFunc(x.ONE,x.ONE_MINUS_SRC_ALPHA),x.enable(x.BLEND),function(e){let n=null==e?x.drawingBufferWidth:e.width,r=null==e?x.drawingBufferHeight:e.height;J.bind(),t.SHADING&&x.uniform2f(J.uniforms.texelSize,1/n,1/r),x.uniform1i(J.uniforms.uTexture,N.read.attach(0)),O(e)}(r),requestAnimationFrame(re)}function ie(n,r,i,o,a){W.bind(),x.uniform1i(W.uniforms.uTarget,I.read.attach(0)),x.uniform1f(W.uniforms.aspectRatio,e.width/e.height),x.uniform2f(W.uniforms.point,n,r),x.uniform3f(W.uniforms.color,i,o,0),x.uniform1f(W.uniforms.radius,function(t){let n=e.width/e.height;n>1&&(t*=n);return t}(t.SPLAT_RADIUS/100)),O(I.write),I.swap(),x.uniform1i(W.uniforms.uTarget,N.read.attach(0)),x.uniform3f(W.uniforms.color,a.r,a.g,a.b),O(N.write),N.swap()}function oe(t,n,r,i){t.id=n,t.down=!0,t.moved=!1,t.texcoordX=r/e.width,t.texcoordY=1-i/e.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=se()}function ae(t,n,r,i){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=n/e.width,t.texcoordY=1-r/e.height,t.deltaX=function(t){let n=e.width/e.height;n<1&&(t*=n);return t}(t.texcoordX-t.prevTexcoordX),t.deltaY=function(t){let n=e.width/e.height;n>1&&(t/=n);return t}(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=i}function le(e){e.down=!1}function se(){let e=function(e,t,n){let r,i,o,a,l,s,u,c;switch(a=Math.floor(6*e),l=6*e-a,s=n*(1-t),u=n*(1-l*t),c=n*(1-(1-l)*t),a%6){case 0:r=n,i=c,o=s;break;case 1:r=u,i=n,o=s;break;case 2:r=s,i=n,o=c;break;case 3:r=s,i=u,o=n;break;case 4:r=c,i=s,o=n;break;case 5:r=n,i=s,o=u}return{r:r,g:i,b:o}}(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function ue(e){let t=x.drawingBufferWidth/x.drawingBufferHeight;t<1&&(t=1/t);const n=Math.round(e),r=Math.round(e*t);return x.drawingBufferWidth>x.drawingBufferHeight?{width:r,height:n}:{width:n,height:r}}function ce(e){const t=window.devicePixelRatio||1;return Math.floor(e*t)}function de(e){if(0===e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}window.addEventListener("mousedown",(e=>{let t=v[0];oe(t,-1,ce(e.clientX),ce(e.clientY)),function(e){const t=se();t.r*=10,t.g*=10,t.b*=10;let n=10*(Math.random()-.5),r=30*(Math.random()-.5);ie(e.texcoordX,e.texcoordY,n,r,t)}(t)})),document.body.addEventListener("mousemove",(function e(t){let n=v[0],r=ce(t.clientX),i=ce(t.clientY),o=se();re(),ae(n,r,i,o),document.body.removeEventListener("mousemove",e)})),window.addEventListener("mousemove",(e=>{let t=v[0];ae(t,ce(e.clientX),ce(e.clientY),t.color)})),document.body.addEventListener("touchstart",(function e(t){const n=t.targetTouches;let r=v[0];for(let i=0;i<n.length;i++){let e=ce(n[i].clientX),t=ce(n[i].clientY);re(),oe(r,n[i].identifier,e,t)}document.body.removeEventListener("touchstart",e)})),window.addEventListener("touchstart",(e=>{const t=e.targetTouches;let n=v[0];for(let r=0;r<t.length;r++){let e=ce(t[r].clientX),i=ce(t[r].clientY);oe(n,t[r].identifier,e,i)}})),window.addEventListener("touchmove",(e=>{const t=e.targetTouches;let n=v[0];for(let r=0;r<t.length;r++){ae(n,ce(t[r].clientX),ce(t[r].clientY),n.color)}}),!1),window.addEventListener("touchend",(e=>{const t=e.changedTouches;let n=v[0];for(let r=0;r<t.length;r++)le(n)})),re()}),[n,r,i,o,a,l,s,u,c,d,f,p,h,m]),(0,qr.jsx)("div",{style:{position:"fixed",top:0,left:0,zIndex:50,pointerEvents:"none",width:"100%",height:"100%"},children:(0,qr.jsx)("canvas",{ref:g,id:"fluid",style:{width:"100vw",height:"100vh",display:"block"}})})},Po=Jr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ro=Gr.div`
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
`,zo=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${Po} 0.8s ease-out;
  scroll-behavior: smooth;
`,Lo=Gr.div`
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
`,Do=Gr.p`
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
`,Oo=Gr.div`
  text-align: center;
  margin: 4rem auto;
  max-width: 800px;

  @media (max-width: 768px) {
    margin: 3rem auto;
    padding: 0 1rem;
  }
`,No=Gr.a`
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
`,Io=Gr.div`
  background: transparent;
  padding: 60px 40px;
  border-radius: 10px;
  margin-bottom: 120px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin-bottom: 80px;
  }
`,Mo=Gr.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 60px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`,Fo=Gr.div`
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
`,$o=Gr.div`
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 20px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
`,Uo=Gr.h4`
  color: white;
  margin-bottom: 15px;
  font-size: 1.2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`,Bo=Gr.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.5;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,Wo=Gr.div`
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    ${$o} {
  color: white;
      transform: translateY(-2px);
    }
  }
`,Ho=()=>((0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,qr.jsxs)(Ro,{children:[(0,qr.jsx)(To,{}),(0,qr.jsx)(vi,{}),(0,qr.jsxs)(zo,{children:[(0,qr.jsxs)(Lo,{children:[(0,qr.jsx)(Ao,{children:"Geo OS"}),(0,qr.jsx)(Do,{children:"A modular and scalable Open Framework optimized for Mission Autonomy."})]}),(0,qr.jsxs)("div",{style:{maxWidth:"1200px",margin:"40px auto",padding:"0 20px"},children:[(0,qr.jsxs)(Io,{children:[(0,qr.jsx)(Mo,{children:"System Architecture"}),(0,qr.jsxs)(Fo,{children:[(0,qr.jsxs)(Wo,{children:[(0,qr.jsx)($o,{children:(0,qr.jsx)(Li,{})}),(0,qr.jsx)(Uo,{children:"Data Layer"}),(0,qr.jsx)(Bo,{children:"Unified data storage and processing infrastructure"})]}),(0,qr.jsxs)(Wo,{children:[(0,qr.jsx)($o,{children:(0,qr.jsx)(Ri,{})}),(0,qr.jsx)(Uo,{children:"AI Layer"}),(0,qr.jsx)(Bo,{children:"Advanced machine learning and decision systems"})]}),(0,qr.jsxs)(Wo,{children:[(0,qr.jsx)($o,{children:(0,qr.jsx)(Ai,{})}),(0,qr.jsx)(Uo,{children:"Function Layer"}),(0,qr.jsx)(Bo,{children:"Modular Data Modeling and Optimization Algorithms"})]}),(0,qr.jsxs)(Wo,{children:[(0,qr.jsx)($o,{children:(0,qr.jsx)(zi,{})}),(0,qr.jsx)(Uo,{children:"API Layer"}),(0,qr.jsx)(Bo,{children:"Developer tools and interfaces"})]})]})]}),(0,qr.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,qr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,qr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,qr.jsx)("defs",{children:(0,qr.jsxs)("linearGradient",{id:"dataGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,qr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,qr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,qr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,qr.jsx)("path",{d:"M-60,-60 L60,-60 L60,60 L-60,60 Z",fill:"url(#dataGradient)",stroke:"white",strokeWidth:"1.5"}),(0,qr.jsx)("path",{d:"M60,-60 L100,-20 L100,100 L60,60 Z",fill:"url(#dataGradient)",stroke:"white",strokeWidth:"1.5"}),(0,qr.jsx)("path",{d:"M-60,60 L60,60 L100,100 L-20,100 Z",fill:"url(#dataGradient)",stroke:"white",strokeWidth:"1.5"}),(0,qr.jsx)("rect",{x:"-40",y:"-40",width:"30",height:"30",fill:"#0066FF",fillOpacity:"0.7",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("rect",{x:"20",y:"-20",width:"20",height:"20",fill:"#0066FF",fillOpacity:"0.7",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("rect",{x:"-30",y:"30",width:"40",height:"15",fill:"#0066FF",fillOpacity:"0.7",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("line",{x1:"-25",y1:"-25",x2:"30",y2:"-10",stroke:"#0066FF",strokeWidth:"1.5"}),(0,qr.jsx)("line",{x1:"30",y1:"-10",x2:"-10",y2:"30",stroke:"#0066FF",strokeWidth:"1.5"})]})]})}),(0,qr.jsx)("div",{style:{flex:"1"},children:(0,qr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,qr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS Data]"}),(0,qr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Seamlessly integrates and harmonizes data across land, sea, air, and space to provide a comprehensive all-domain data engine."}),(0,qr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Universal Data Protocol"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"A unified language for all geospatial data types ensures seamless communication between systems."})]}),(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Robust Data Fusion"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Proprietary techniques for combining structured and unstructured data sources such as static charts, satellite imagery, weather data, and real-time observations."})]})]})]})})]}),(0,qr.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,qr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,qr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,qr.jsx)("defs",{children:(0,qr.jsxs)("linearGradient",{id:"modelGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,qr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,qr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,qr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,qr.jsx)("circle",{cx:"-120",cy:"-80",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"-120",cy:"-40",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"-120",cy:"0",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"-120",cy:"40",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"-120",cy:"80",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"0",cy:"-60",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"0",cy:"-20",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"0",cy:"20",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"0",cy:"60",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"120",cy:"0",r:"8",fill:"#222",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("path",{d:"M-120,-80 L0,-60",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,-80 L0,-20",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,-40 L0,-60",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,-40 L0,-20",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,-40 L0,20",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,0 L0,-20",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,0 L0,20",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,40 L0,20",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,40 L0,60",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M-120,80 L0,60",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M0,-60 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M0,-20 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M0,20 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("path",{d:"M0,60 L120,0",stroke:"white",strokeWidth:"0.5"}),(0,qr.jsx)("circle",{cx:"-120",cy:"-40",r:"12",fill:"none",stroke:"#0066FF",strokeWidth:"1.5"}),(0,qr.jsx)("circle",{cx:"0",cy:"20",r:"12",fill:"none",stroke:"#0066FF",strokeWidth:"1.5"}),(0,qr.jsx)("circle",{cx:"120",cy:"0",r:"12",fill:"none",stroke:"#0066FF",strokeWidth:"1.5"}),(0,qr.jsx)("path",{d:"M-120,-40 L0,20",stroke:"#0066FF",strokeWidth:"1.5"}),(0,qr.jsx)("path",{d:"M0,20 L120,0",stroke:"#0066FF",strokeWidth:"1.5"})]})]})}),(0,qr.jsx)("div",{style:{flex:"1"},children:(0,qr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,qr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS Model]"}),(0,qr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Powers intelligent decision-making through advanced AI models specifically designed and optimized for geospatial analysis."}),(0,qr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Earth Foundation Models"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Pre-trained large-scale models that understand Earth's physical dynamics at global scale."})]}),(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Predictive Analytics"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Forecasts environmental conditions and operational outcomes with superhuman accuracy."})]})]})]})})]}),(0,qr.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,qr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,qr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,qr.jsx)("defs",{children:(0,qr.jsxs)("linearGradient",{id:"functionGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,qr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,qr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,qr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,qr.jsxs)("g",{transform:"translate(-65, -40)",children:[(0,qr.jsx)("rect",{width:"50",height:"50",fill:"url(#functionGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,qr.jsx)("path",{d:"M10,25 L40,25 M25,10 L25,40",stroke:"#0066FF",strokeWidth:"2"})]}),(0,qr.jsxs)("g",{transform:"translate(65, -40)",children:[(0,qr.jsx)("rect",{width:"50",height:"50",fill:"url(#functionGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,qr.jsx)("path",{d:"M10,25 L40,25 M25,10 L25,40",stroke:"#0066FF",strokeWidth:"2"})]}),(0,qr.jsxs)("g",{transform:"translate(0, 45)",children:[(0,qr.jsx)("rect",{width:"50",height:"50",fill:"url(#functionGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,qr.jsx)("path",{d:"M10,25 L40,25 M25,10 L25,40",stroke:"#0066FF",strokeWidth:"2"})]}),(0,qr.jsx)("path",{d:"M-40,-15 L0,45",stroke:"#0066FF",strokeWidth:"1.5",fill:"none"}),(0,qr.jsx)("path",{d:"M90,-15 L25,45",stroke:"#0066FF",strokeWidth:"1.5",fill:"none"})]})]})}),(0,qr.jsx)("div",{style:{flex:"1"},children:(0,qr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,qr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS Functions]"}),(0,qr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Modular, composable functions for building sophisticated Earth operations workflows easily accessible via APIs."}),(0,qr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Function Marketplace"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Extensive library of pre-built functions for common Earth operations tasks."})]}),(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Custom Functions"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Build and deploy custom functions for specialized operational needs."})]})]})]})})]}),(0,qr.jsxs)("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center",marginBottom:"120px",gap:"80px"},children:[(0,qr.jsx)("div",{style:{flex:"0 0 40%"},children:(0,qr.jsxs)("svg",{width:"100%",height:"300",viewBox:"0 0 400 300",children:[(0,qr.jsx)("defs",{children:(0,qr.jsxs)("linearGradient",{id:"sdkGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,qr.jsx)("stop",{offset:"0%",stopColor:"#111"}),(0,qr.jsx)("stop",{offset:"100%",stopColor:"#333"})]})}),(0,qr.jsxs)("g",{transform:"translate(200, 150)",children:[(0,qr.jsx)("rect",{x:"-100",y:"-80",width:"200",height:"160",fill:"url(#sdkGradient)",stroke:"white",strokeWidth:"1.5",rx:"5"}),(0,qr.jsx)("line",{x1:"-80",y1:"-60",x2:"40",y2:"-60",stroke:"#0066FF",strokeWidth:"2"}),(0,qr.jsx)("line",{x1:"-80",y1:"-30",x2:"60",y2:"-30",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("line",{x1:"-80",y1:"0",x2:"20",y2:"0",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("line",{x1:"-80",y1:"30",x2:"40",y2:"30",stroke:"#0066FF",strokeWidth:"2"}),(0,qr.jsx)("circle",{cx:"-120",cy:"-40",r:"10",fill:"#0066FF",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("circle",{cx:"120",cy:"-40",r:"10",fill:"#0066FF",stroke:"white",strokeWidth:"1"}),(0,qr.jsx)("path",{d:"M-120,-40 C-80,-40 80,-40 120,-40",stroke:"#0066FF",strokeWidth:"1.5",fill:"none"})]})]})}),(0,qr.jsx)("div",{style:{flex:"1"},children:(0,qr.jsxs)("div",{style:{borderLeft:"4px solid white",paddingLeft:"30px"},children:[(0,qr.jsx)("h3",{style:{fontSize:"2rem",fontWeight:"bold",color:"white",marginBottom:"20px"},children:"[Geo OS SDK]"}),(0,qr.jsx)("p",{style:{fontSize:"1.2rem",color:"rgba(255, 255, 255, 0.9)",lineHeight:"1.6",marginBottom:"30px"},children:"Comprehensive development toolkit for building and deploying Earth-scale applications."}),(0,qr.jsxs)("ul",{style:{listStyle:"none",padding:0,margin:0},children:[(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Developer Tools"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Rich set of APIs, libraries, and tools for rapid application development."})]}),(0,qr.jsxs)("li",{style:{marginBottom:"20px"},children:[(0,qr.jsx)("h4",{style:{fontSize:"1.3rem",color:"white",marginBottom:"10px"},children:"Deployment Framework"}),(0,qr.jsx)("p",{style:{fontSize:"1rem",color:"rgba(255, 255, 255, 0.8)",lineHeight:"1.5"},children:"Streamlined deployment and scaling of Earth-scale applications."})]})]})]})})]}),(0,qr.jsxs)(Oo,{children:[(0,qr.jsx)(Ao,{style:{fontSize:"2.5rem",marginBottom:"30px"},children:"Ready to build with Geo OS?"}),(0,qr.jsx)(No,{href:"/partner-program",children:"Learn more about Partner Program"})]})]}),(0,qr.jsx)(Ji,{})]})]})),Vo=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #000;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,Yo=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Go=Gr.div`
  margin-top: 100px; /* Space for the fixed navbar */
  padding: 2rem 0;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`,Ko=Gr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);
  text-align: center;
`,Xo=Gr.p`
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
`,Jo=Gr.div`
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
`,Qo=Gr.div`
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
`,qo=Gr(Qo)`
  background: linear-gradient(135deg, rgba(30, 30, 30, 0.7), rgba(50, 50, 50, 0.7));
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(255, 255, 255, 0.1);
  }
`,Zo=Gr.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: white;
`,ea=Gr.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
`,ta=Gr.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`,na=Gr.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`,ra=Gr.button`
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
`;const ia=function(){(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]);const t=()=>{window.open("https://www.linkedin.com/company/geospatios","_blank")};return(0,qr.jsxs)(Vo,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsxs)(Yo,{children:[(0,qr.jsxs)(Go,{children:[(0,qr.jsx)(Ko,{children:"Our Solutions"}),(0,qr.jsxs)(Xo,{children:[(0,qr.jsx)("span",{className:"tagline",children:"Comprehensive solutions for autonomous operations"}),(0,qr.jsx)("span",{className:"description",children:"Our platform provides end-to-end solutions for managing and optimizing autonomous operations across all domains."})]}),(0,qr.jsx)(Jo,{children:[{title:"Maritime Operations",description:"Transform vessel routing and port operations with real-time intelligence. Deploy our system or integrate our Platform.",features:["Dynamic route optimization with weather & traffic","Port congestion prediction","Fuel consumption analytics","Environmental compliance tools"]},{title:"Airspace Operations",description:"Power your flight operations with advanced geospatial solutions. Available as complete system or integration framework.",features:["Intelligent dispatch optimization","Seamless EFB integration","Real-time weather & NOTAM processing","Performance & emissions analytics"]},{title:"Air Traffic Management",description:"Optimize airspace efficiency with predictive analytics. Use our system or integrate our processing pipeline.",features:["Real-time capacity optimization","Predictive conflict resolution","Dynamic weather integration","Environmental impact analysis"]},{title:"Custom Integration",description:"Enhance your systems with our Geo OS Platform and let us help you build your ideal solution.",features:["Flexible API & SDK access","Custom pipeline integration","Advanced analytics engine","Full implementation support"],isCustom:!0}].map(((e,n)=>e.isCustom?(0,qr.jsxs)(qo,{children:[(0,qr.jsx)(Zo,{children:e.title}),(0,qr.jsx)(ea,{children:e.description}),(0,qr.jsx)(ta,{children:e.features.map(((e,t)=>(0,qr.jsx)(na,{children:e},t)))}),(0,qr.jsx)(ra,{onClick:t,children:"Contact Us"})]},n):(0,qr.jsxs)(Qo,{children:[(0,qr.jsx)(Zo,{children:e.title}),(0,qr.jsx)(ea,{children:e.description}),(0,qr.jsx)(ta,{children:e.features.map(((e,t)=>(0,qr.jsx)(na,{children:e},t)))}),(0,qr.jsx)(ra,{disabled:"Maritime Operations"===e.title||"Air Traffic Management"===e.title,onClick:"Maritime Operations"===!e.title&&"Air Traffic Management"===!e.title?t:void 0,children:"Maritime Operations"===e.title||"Air Traffic Management"===e.title?"Coming Soon":"Contact Us"})]},n)))})]}),(0,qr.jsx)(Ji,{})]})]})};var oa=n(929),aa=n.n(oa);const la=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,sa=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,ua=Gr.div`
  margin-top: 100px; /* Space for the fixed navbar */
  padding: 2rem 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`,ca=Gr.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);
  text-align: center;
`,da=Gr.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
`,fa=(Gr.div`
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
`),pa=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,ha=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`,ma=Gr.div`
  display: grid;
  grid-template-columns: 6fr 3fr;
  gap: 1.5rem;
  margin: 3rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,ga=Gr.div`
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
`,va=Gr.div`
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
`,xa=Gr.button`
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
`,ya=Gr.div`
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
`,ba=Gr.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
`,wa=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
`,Sa=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  flex: 1; /* Allow this to take remaining space */
  padding-right: 0.5rem; /* Add some padding for the scrollbar */
`,Ea=Gr.div`
  width: 1800px;
  height: 1400px;
  transform-origin: 0 0;
`,ka=Gr.circle`
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
`,ja=Gr.path`
  stroke-width: ${e=>e.isHighlighted?2:1};
  stroke-opacity: ${e=>e.isHighlighted?.9:.6};
  fill: none;
`,Ca=Gr.image`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
`,Ta=Gr.g`
  color: white;
  font-size: ${e=>.5*e.size}px;
`,Pa=(Gr.div`
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
`);const Ra=function(){const[t,n]=(0,e.useState)({x:-500,y:-300}),[r,i]=(0,e.useState)(1),[o,a]=(0,e.useState)(null),[l,s]=(0,e.useState)(null),u=[{id:"geos",x:900,y:700,r:50,label:"Geo OS",color:"#000000",type:"central",isLogo:!0},{id:"databases",x:900,y:500,r:35,label:"Databases",color:"#000000",type:"central",icon:"database"},{id:"foundation",x:650,y:700,r:35,label:"Foundation Models",color:"#000000",type:"central",icon:"brain"},{id:"modules",x:900,y:900,r:35,label:"Modularized Functions",color:"#000000",type:"central",icon:"puzzle"},{id:"applications",x:1150,y:700,r:35,label:"Applications",color:"#000000",type:"central",icon:"laptop"},{id:"weather",x:750,y:400,r:25,label:"Weather Radars",color:"#ffffff",type:"source"},{id:"satellite",x:900,y:350,r:25,label:"Satelites Images",color:"#ffffff",type:"source"},{id:"aircraft",x:1050,y:400,r:25,label:"Aircraft",color:"#ffffff",type:"source"},{id:"ship",x:1150,y:450,r:25,label:"Ship",color:"#ffffff",type:"source"},{id:"thirdparty",x:650,y:450,r:25,label:"3rd Party",color:"#ffffff",type:"source"},{id:"forecast",x:500,y:650,r:25,label:"Prediction",color:"#ffffff",type:"source"},{id:"translate",x:500,y:750,r:25,label:"Translation",color:"#ffffff",type:"source"},{id:"navigation",x:750,y:1e3,r:25,label:"Navigation",color:"#ffffff",type:"source"},{id:"route",x:900,y:1050,r:25,label:"Route Planning",color:"#ffffff",type:"source"},{id:"optimization",x:1050,y:1e3,r:25,label:"Constraint Optimization",color:"#ffffff",type:"source"},{id:"traffic",x:650,y:950,r:25,label:"Traffic Prediction",color:"#ffffff",type:"source"},{id:"agent",x:1150,y:950,r:25,label:"Agent Orchestration",color:"#ffffff",type:"source"},{id:"gui",x:1300,y:650,r:25,label:"Interative GUI",color:"#ffffff",type:"source"},{id:"efb",x:1300,y:750,r:25,label:"Pilot EFB",color:"#ffffff",type:"source"},{id:"dispatcher",x:1250,y:850,r:25,label:"Dispatch Platform",color:"#ffffff",type:"source"}],c={geos:{title:"Geo OS",description:"The core operating system that integrates geospatial data processing, foundation models, modular functions, and applications.",technologies:[{title:"Distributed Computing",description:"Scalable architecture for processing large volumes of geospatial data"},{title:"Real-time Processing",description:"Low-latency data handling for time-sensitive operations"},{title:"API Integration",description:"Unified interfaces for connecting with various data sources and applications"}]},databases:{title:"Databases",description:"Centralized storage and management of geospatial data from various sources.",technologies:[{title:"Spatial Databases",description:"Optimized storage for geographic information"},{title:"Time-series Data",description:"Efficient handling of temporal geospatial data"},{title:"Data Fusion",description:"Integration of multiple data sources into unified datasets"}]},foundation:{title:"Foundation Models",description:"Advanced AI models that process and interpret geospatial data for various applications.",technologies:[{title:"Geospatial Machine Learning",description:"Specialized algorithms for geographic data analysis"},{title:"Predictive Analytics",description:"Forecasting based on historical and real-time data"},{title:"Natural Language Processing",description:"Converting geospatial data to human-readable insights"}]},modules:{title:"Modules",description:"Specialized components that provide specific functionality to the GeoSpatios platform.",technologies:[{title:"Agent Orchestration",description:"Coordinates autonomous agents operating in complex geospatial environments."},{title:"Navigation Systems",description:"Advanced pathfinding and routing algorithms for optimal movement through space."},{title:"Constraint Optimization",description:"Solves complex multi-variable problems with spatial and temporal constraints."},{title:"Situation Prediction",description:"Forecasts future states of dynamic environments using historical and real-time data."}]},applications:{title:"Applications",description:"End-user solutions built on the GeoSpatios platform that solve specific industry challenges.",technologies:[{title:"Vessel Optimization",description:"Maximizes efficiency of maritime operations through optimal routing and scheduling."},{title:"Flight Planning",description:"Comprehensive flight path optimization considering weather, airspace, and operational constraints."},{title:"Air Traffic Prediction",description:"Forecasts air traffic patterns to improve safety and efficiency in congested airspace."},{title:"Visualization Tools",description:"Advanced visualization Platform that transform complex data into intuitive, actionable insights."}]}};return u.forEach((e=>{c[e.id]||(c[e.id]={title:e.label,description:`${e.label} is an important component in the GeoSpatios architecture.`,technologies:[{title:"Integration",description:`${e.label} integrates seamlessly with the GeoSpatios platform.`}]})})),(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,qr.jsxs)(la,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsx)(sa,{children:(0,qr.jsxs)(ua,{children:[(0,qr.jsx)(ca,{children:"Our Technology"}),(0,qr.jsx)(da,{children:"At the heart of our platform lies a sophisticated architecture designed to handle the complexities of autonomous operations."}),(0,qr.jsxs)(ma,{children:[(0,qr.jsxs)(ga,{children:[(0,qr.jsx)(va,{children:"Click and drag to move the diagram"}),(0,qr.jsx)(xa,{onClick:()=>{n({x:-500,y:-300}),i(1)},children:"Reset View"}),(0,qr.jsx)(aa(),{position:t,onStop:(e,t)=>n({x:t.x,y:t.y}),onDrag:(e,t)=>e.stopPropagation(),cancel:".clickable-node",children:(0,qr.jsx)(Ea,{style:{transform:`scale(${r})`},children:(0,qr.jsxs)("svg",{width:"1800",height:"1400",viewBox:"0 0 1800 1400",children:[[{from:"geos",to:"databases",style:"solid"},{from:"geos",to:"foundation",style:"solid"},{from:"geos",to:"modules",style:"solid"},{from:"geos",to:"applications",style:"solid"},{from:"databases",to:"weather",style:"solid"},{from:"databases",to:"satellite",style:"solid"},{from:"databases",to:"aircraft",style:"solid"},{from:"databases",to:"ship",style:"solid"},{from:"databases",to:"thirdparty",style:"dotted"},{from:"foundation",to:"forecast",style:"solid"},{from:"foundation",to:"translate",style:"solid"},{from:"modules",to:"navigation",style:"solid"},{from:"modules",to:"route",style:"solid"},{from:"modules",to:"optimization",style:"solid"},{from:"modules",to:"traffic",style:"solid"},{from:"modules",to:"agent",style:"solid"},{from:"applications",to:"gui",style:"solid"},{from:"applications",to:"efb",style:"solid"},{from:"applications",to:"dispatcher",style:"solid"}].map(((e,t)=>{const n=u.find((t=>t.id===e.from)),r=u.find((t=>t.id===e.to)),i=o===e.from||o===e.to||l===e.from||l===e.to,a=(n.x+r.x)/2,s=(n.y+r.y)/2,c=r.x-n.x,d=.3*-(r.y-n.y),f=.3*c,p=`M ${n.x} ${n.y} Q ${a+d} ${s+f} ${r.x} ${r.y}`;return(0,qr.jsx)(ja,{d:p,stroke:"white",strokeDasharray:"dotted"===e.style?"5,5":"",isHighlighted:i},t)})),u.map((e=>(0,qr.jsxs)("g",{className:"clickable-node",onMouseEnter:()=>a(e.id),onMouseLeave:()=>a(null),onClick:t=>{t.preventDefault(),t.stopPropagation(),console.log("Node clicked with ID:",e.id),s((t=>t===e.id?null:e.id))},style:{cursor:"pointer"},children:[(0,qr.jsx)(ka,{cx:e.x,cy:e.y,r:e.r,fill:e.color,stroke:e.id===l?"white":"rgba(255, 255, 255, 0.5)",strokeWidth:e.id===l?3:1}),e.isLogo&&(0,qr.jsx)(Ca,{href:Qr,x:e.x-.7*e.r,y:e.y-.7*e.r,size:1.4*e.r,preserveAspectRatio:"xMidYMid meet"}),"database"===e.icon&&(0,qr.jsx)(Ta,{size:e.r,children:(0,qr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 472 512",fill:"white",children:(0,qr.jsx)("path",{d:"M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"})})}),"puzzle"===e.icon&&(0,qr.jsx)(Ta,{size:e.r,children:(0,qr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 496 512",fill:"white",children:(0,qr.jsx)("path",{d:"M519.442 288.651c-41.519 0-59.5 31.593-82.058 31.593C377.409 320.244 432 144 432 144s-196.288 80-196.288-3.297c0-35.827 36.288-46.25 36.288-85.985C272 19.216 243.885 0 210.539 0c-34.654 0-66.366 18.891-66.366 56.346 0 41.364 31.711 59.277 31.711 81.75C175.885 207.719 0 166.758 0 166.758v333.237s178.635 41.047 178.635-28.662c0-22.473-40-40.107-40-81.471 0-37.456 29.25-56.346 63.577-56.346 33.673 0 61.788 19.216 61.788 54.717 0 39.735-36.288 50.158-36.288 85.985 0 60.803 129.675 25.73 181.23 25.73 0 0-34.725-120.101 25.827-120.101 35.962 0 46.423 36.152 86.308 36.152C556.712 416 576 387.99 576 354.443c0-34.199-18.962-65.792-56.558-65.792z"})})}),"laptop"===e.icon&&(0,qr.jsx)(Ta,{size:e.r,children:(0,qr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 640 512",fill:"white",children:(0,qr.jsx)("path",{d:"M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"})})}),"brain"===e.icon&&(0,qr.jsx)(Ta,{size:e.r,children:(0,qr.jsx)("svg",{x:e.x-.4*e.r,y:e.y-.4*e.r,width:.8*e.r,height:.8*e.r,viewBox:"0 0 512 512",fill:"white",children:(0,qr.jsx)("path",{d:"M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56zM184 80c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184zm0 64c-8.8 0-16 7.2-16 16s7.2 16 16 16H328c8.8 0 16-7.2 16-16s-7.2-16-16-16H184z"})})}),(0,qr.jsx)(_a,{x:e.x,y:e.y+e.r+20,isCentral:"central"===e.type,children:e.label})]},e.id)))]})})})]}),(0,qr.jsx)(ya,{children:l?(0,qr.jsxs)(qr.Fragment,{children:[(0,qr.jsx)(ba,{children:c[l].title}),(0,qr.jsx)(wa,{children:c[l].description}),(0,qr.jsx)(Pa,{children:"Key Technologies:"}),(0,qr.jsx)(Sa,{children:c[l].technologies.map(((e,t)=>(0,qr.jsxs)(fa,{children:[(0,qr.jsx)(pa,{children:e.title}),(0,qr.jsx)(ha,{children:e.description})]},t)))})]}):(0,qr.jsx)("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"center"},children:(0,qr.jsx)("p",{children:"Click on a node in the diagram to view details"})})})]})]})})]})},za=Jr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,La=Gr.div`
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
  animation: ${za} 0.8s ease-out;
  scroll-behavior: smooth;
`,Da=Gr.div`
  padding-top: 120px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 8rem;
`,Oa=Gr.h1`
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
`,Na=Gr.p`
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
`,Ia=Gr.div`
  max-width: 1400px;
  margin: 0 auto 12rem;
  padding: 0 2rem;
`,Ma=Gr.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: white;
  font-weight: 500;
  text-align: left;
`,Fa=Gr.div`
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
`,$a=Gr.div`
  background: transparent;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`,Ua=Gr.div`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: #3B82F6;
  display: flex;
  justify-content: center;
`,Ba=Gr.h3`
  font-size: 1.5rem;
  color: white;
  font-weight: 500;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 1.5rem;
`,Wa=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0 auto;
  max-width: 90%;
`,Ha=Gr.div`
  text-align: center;
  margin: 6rem auto;
  max-width: 800px;
`,Va=Gr.a`
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
`;const Ya=function(){(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]);const t=[{icon:(0,qr.jsx)(zi,{}),title:"Developer Resources",description:"Access comprehensive documentation, sandbox environments, and reference applications to build and deploy solutions on Geo OS for Earth-scale operations."},{icon:(0,qr.jsx)(Oi,{}),title:"Testing & Validation",description:"Utilize our testing frameworks and simulation environments to ensure your solutions meet the highest standards of reliability for mission-critical Earth operations."},{icon:(0,qr.jsx)(Di,{}),title:"Integration Support",description:"Seamlessly integrate your solutions with Geo OS through our standardized APIs and SDKs, with direct access to our engineering team."}],n=[{icon:(0,qr.jsx)(Ri,{}),title:"Early Access",description:"Get priority access to new APIs, features, and Platform capabilities before general release, enabling you to build cutting-edge Earth operations solutions."},{icon:(0,qr.jsx)(Oi,{}),title:"Technical Support",description:"Direct access to our engineering team for architecture reviews, technical guidance, and optimization of your integrated solutions."},{icon:(0,qr.jsx)(Di,{}),title:"Innovation Partnership",description:"Collaborate on developing novel solutions and shape the future of autonomous Earth operations through direct input into our product roadmap."}];return(0,qr.jsxs)(La,{children:[(0,qr.jsx)(To,{}),(0,qr.jsx)(vi,{}),(0,qr.jsxs)(Aa,{children:[(0,qr.jsxs)(Da,{children:[(0,qr.jsxs)(Oa,{children:["Open Ecosystem ",(0,qr.jsx)("br",{})," for Autonomous Earth Operations"]}),(0,qr.jsx)(Na,{children:"The Geo OS Partner Program enables organizations to create, integrate, and deploy transformative solutions for next-generation Earth operations."})]}),(0,qr.jsxs)(Ia,{children:[(0,qr.jsx)(Ma,{children:"Partner Resources"}),(0,qr.jsx)(Fa,{children:t.map(((e,t)=>(0,qr.jsxs)($a,{children:[(0,qr.jsx)(Ua,{children:e.icon}),(0,qr.jsx)(Ba,{children:e.title}),(0,qr.jsx)(Wa,{children:e.description})]},`resource-${t}`)))})]}),(0,qr.jsxs)(Ia,{children:[(0,qr.jsx)(Ma,{children:"Partner Benefits"}),(0,qr.jsx)(Fa,{children:n.map(((e,t)=>(0,qr.jsxs)($a,{children:[(0,qr.jsx)(Ua,{children:e.icon}),(0,qr.jsx)(Ba,{children:e.title}),(0,qr.jsx)(Wa,{children:e.description})]},`benefit-${t}`)))})]}),(0,qr.jsxs)(Ha,{children:[(0,qr.jsx)(Oa,{style:{fontSize:"2.5rem",marginBottom:"30px"},children:"Ready to become a partner?"}),(0,qr.jsx)(Va,{href:"https://form.typeform.com/to/rx0GxJYm",rel:"noopener noreferrer",children:"Apply Now"})]}),(0,qr.jsx)(Ji,{})]})]})},Ga=Gr.div`
  min-height: 100vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
`,Ka=Gr.div`
  flex: 1;
  padding: 80px 5% 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
`,Xa=Gr.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ja=Gr.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`,Qa=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qa=Gr(Qe)`
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
`;const Za=function(){return(0,qr.jsxs)(Ga,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsxs)(Ka,{children:[(0,qr.jsx)(Xa,{children:"Platform"}),(0,qr.jsx)(Ja,{children:"Explore our comprehensive suite of operational solutions designed to transform and automate complex geospatial operations across multiple domains."}),(0,qr.jsx)(Qa,{children:[{title:"Airfield Operations",description:"Advanced air traffic management and ground operations optimization for modern airfields.",link:"/platform/airfield-operations"},{title:"Maritime Operations",description:"Comprehensive maritime domain awareness and vessel traffic management solutions.",link:"/platform/maritime-operations"},{title:"Logistics Operations",description:"End-to-end logistics optimization and supply chain intelligence platform.",link:"/platform/logistics-operations"}].map(((e,t)=>(0,qr.jsxs)(qa,{to:e.link,children:[(0,qr.jsx)("h2",{children:e.title}),(0,qr.jsx)("p",{children:e.description})]},t)))})]}),(0,qr.jsx)(Ji,{})]})},el=n.p+"static/media/c-room.d33907fce5a933c06c3b.jpg",tl=n.p+"static/media/dispatch.492fd7934bf821d0e779.png",nl=n.p+"static/media/pilot.2a1919d316a77bbbfbc9.png",rl=n.p+"static/media/air-video.035ebb1815f409626497.webm",il=Jr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ol=Jr`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,al=Jr`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ll=Gr.div`
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
`,sl=Gr.div`
  position: relative;
  z-index: 50;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${il} 0.8s ease-out;
  scroll-behavior: smooth;
`,ul=Gr.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: transparent;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  }
`,cl=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
`,dl=Gr.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  
  &.video-error {
    display: none;
  }
`,fl=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
`,pl=Gr.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 max(5%, 24px);
  display: flex;
  flex-direction: column;
`,hl=Gr.div`
  margin-top: auto;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 80px;
    align-items: flex-start;
  }
`,ml=Gr.div`
  flex: 1;
`,gl=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,vl=Gr.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  opacity: 0;
  animation: ${il} 0.8s ease forwards;
  animation-delay: 0.2s;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    letter-spacing: 1px;
  }
`,xl=Gr.h1`
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  color: white;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 15ch;
  opacity: 0;
  animation: ${il} 0.8s ease forwards;
  animation-delay: 0.4s;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3rem);
    max-width: 100%;
  }
`,yl=Gr.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-right: 0;
  margin-right: 0;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-right: 0;
    padding-right: 0;
  }
`,bl=Gr.p`
  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 500px;
  text-align: left;
  font-weight: 400;
  margin-right: 0;
  opacity: 0;
  animation: ${il} 0.8s ease forwards;
  animation-delay: 0.6s;
  
  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
    font-size: 1.125rem;
  }
`,wl=Gr.div`
  position: relative;
  background: #000;
`,Sl=Gr.div`
  padding: 120px 5%;
  background: #000;
  
  @media (max-width: 768px) {
    padding: 100px 24px;
  }
`,El=Gr.div`
  padding: 200px 5% 160px 5%;
  background: #000000;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 180px 24px 140px 24px;
  }
`,kl=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
`,_l=Gr.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 2rem;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?il:"none"} 0.8s ease forwards;
  animation-delay: 0.2s;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: 1.5rem;
  }
`,jl=Gr.p`
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?il:"none"} 0.8s ease forwards;
  animation-delay: 0.4s;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 100%;
  }
`,Cl=Gr.span`
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
`,Tl=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
`,Pl=Gr.div`
  padding: 120px 0 60px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
  
  @media (max-width: 768px) {
    padding: 100px 24px 60px;
  }
`,Rl=Gr.h2`
  font-size: 3rem;
  color: white;
  line-height: 1.1;
  font-weight: 500;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?al:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-left: 0;
`,zl=Gr.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  color: white;
  text-align: left;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?al:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-left: 24px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
    margin-left: 0;
  }
`,Ll=Gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`,Al=Gr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${e=>e.$image}) no-repeat center center;
  background-size: cover;
  opacity: ${e=>e.$isActive?1:0};
  transition: opacity 0.5s ease;
`,Dl=Gr.div`
  padding: 0 24px;
  background: #000;
  position: relative;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    padding: 0 24px;
    margin-bottom: 80px;
  }
`,Ol=Gr.div`
  width: 100%;
  display: flex;
  position: relative;
  gap: 0;
  background: #000;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
  }
`,Nl=Gr.div`
  width: 8px;
  height: 8px;
  background: ${e=>e.$isActive?"#FF4D00":"rgba(255, 77, 0, 0.3)"};
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${il} 0.5s ease forwards;
  animation-delay: 0.2s;
`,Il=Gr.div`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  margin-bottom: ${e=>e.$isActive?"1rem":"0"};
  opacity: 0;
  animation: ${ol} 0.5s ease forwards;
  animation-delay: 0.3s;
`,Ml=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  animation: ${il} 0.5s ease forwards;
  animation-delay: 0.4s;
`,Fl=Gr.div`
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
  
  @media (max-width: 768px) {
    width: 100% !important;
    height: 400px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      width: 100% !important;
    }
  }
`,$l=Gr.div`
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
  
  ${Nl}, ${Il}, ${Ml} {
    animation-play-state: ${e=>e.$isActive?"running":"paused"};
  }

  ${Fl}:hover & {
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    height: 50%;

    ${Nl}, ${Il}, ${Ml} {
      animation-play-state: running;
    }
  }
  
  @media (max-width: 768px) {
    position: relative;
    height: 100% !important;
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
    justify-content: flex-end;
    padding: 2.5rem;
  }
`,Ul=Gr.div`
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?al:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${e=>e.$isVisible?.15*e.$index:0}s;
`,Bl=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2rem;
`,Wl=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,Hl=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`;const Vl=function(){const[t,n]=(0,e.useState)("dispatcher"),[r,i]=(0,e.useState)(!1),[o,a]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),u=(0,e.useRef)(null),c=(0,e.useRef)(null),d=(0,e.useRef)(null);(0,e.useEffect)((()=>{window.scrollTo(0,0);const e={threshold:.15,rootMargin:"50px"},t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(i(!0),t.unobserve(e.target))}))}),e),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(a(!0),n.unobserve(e.target))}))}),e),r=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(s(!0),r.unobserve(e.target))}))}),e);return u.current&&t.observe(u.current),c.current&&n.observe(c.current),d.current&&r.observe(d.current),()=>{u.current&&t.unobserve(u.current),c.current&&n.unobserve(c.current),d.current&&r.unobserve(d.current)}}),[]);const f=[{id:"dispatcher",title:"Dispatcher",image:tl,description:"Advanced dispatch optimization and fleet monitoring powered by GeoSpatial intelligence. Simulating the possible futures and identifying possible IROPs with Ultra-High-Resolution weather predictions and pattern analysis enable better planning and reduced operational costs."},{id:"pilot",title:"Pilot",image:nl,description:"Enhanced situational awareness and real-time decision-making through seamless EFB integration. Real-time updates and route optimization powered by superior weather predictions and cloud-native GeoSpatial Intelligence."},{id:"atc",title:"ATC",image:el,description:"Streamlined Vectoring and Coordination with comprehensive situational awareness and Trajectory Predictions. Automated tools and predictive analytics optimize traffic flow and reduce controller workload."}];return(0,qr.jsxs)(ll,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsxs)(sl,{children:[(0,qr.jsxs)(ul,{children:[(0,qr.jsxs)(cl,{children:[(0,qr.jsx)(dl,{src:rl,type:"video/webm",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto",poster:"",onError:e=>e.target.classList.add("video-error")}),(0,qr.jsx)(fl,{})]}),(0,qr.jsx)(pl,{children:(0,qr.jsxs)(hl,{children:[(0,qr.jsx)(ml,{children:(0,qr.jsxs)(gl,{children:[(0,qr.jsx)(vl,{children:"AI-Native OS for Coordinating Airspace & Airline Operations"}),(0,qr.jsx)(xl,{children:"Air-OS"})]})}),(0,qr.jsx)(yl,{children:(0,qr.jsx)(bl,{children:"Air-OS reinvents the way operators use software: no more toggling between systems, no more manual coordination, just one predictive platform that turns 45 minutes of fragmented decision-making into 10 seconds of clarity."})})]})})]}),(0,qr.jsx)(El,{ref:d,children:(0,qr.jsxs)(kl,{children:[(0,qr.jsx)(_l,{$isVisible:l,children:"End Fragmentation"}),(0,qr.jsxs)(jl,{$isVisible:l,children:["Instead of a collection of tools, Air-OS unifies your stack into one predictive platform that ",(0,qr.jsx)(Cl,{children:"learns"})," from the past, ",(0,qr.jsx)("br",{})," ",(0,qr.jsx)(Cl,{children:"adapts"})," in real time, and ",(0,qr.jsx)(Cl,{children:"executes"})," in seconds."]})]})}),(0,qr.jsxs)(wl,{children:[(0,qr.jsx)(Pl,{ref:u,children:(0,qr.jsx)(Rl,{$isVisible:r,children:"Enhanced operational Platform"})}),(0,qr.jsx)(Dl,{children:(0,qr.jsx)(Ol,{children:f.map((e=>(0,qr.jsxs)(Fl,{$isActive:t===e.id,onMouseEnter:()=>n(e.id),children:[(0,qr.jsx)(Al,{$image:e.image,$isActive:t===e.id}),(0,qr.jsxs)($l,{$isActive:t===e.id,children:[(0,qr.jsx)(Nl,{$isActive:t===e.id}),(0,qr.jsx)(Il,{$isActive:t===e.id,children:e.title}),t===e.id&&(0,qr.jsx)(Ml,{children:e.description})]})]},e.id)))})}),(0,qr.jsx)(Sl,{children:(0,qr.jsxs)(Tl,{ref:c,children:[(0,qr.jsx)(zl,{$isVisible:o,children:"Key Features + Platform"}),(0,qr.jsx)(Ll,{children:[{number:"01",title:"Predict Weather & Traffic",description:"Ultra-high-resolution AI-driven forecasts anticipate weather, traffic, and congestion before they form."},{number:"02",title:"Streamlined Coordination",description:"Eliminate inefficiency and tool overload. Air-OS replaces hundreds of logins with one platform that unifies workflows across teams and systems."},{number:"03",title:"Enhanced EFB Integration",description:"Provide pilots with real-time GeoSpatial insights, weather updates, and route optimization through seamless Electronic Flight Bag integration."},{number:"04",title:"Auto-Sync Operations",description:"Keep dispatchers, pilots, and ATC in sync automatically, and shares live context and updates across every role without manual coordination."},{number:"05",title:" Disruption Simulator",description:"Run \u201cwhat-if\u201d simulations across IROPs, weather, or network constraints. Understand cascading impacts and evaluate trade-offs between cost, time, and safety before making a move."},{number:"06",title:"Seamless Integration",description:"Air-OS plugs into your existing tech stack with modular APIs, extending predictive intelligence without replacing your systems."}].map(((e,t)=>(0,qr.jsxs)(Ul,{$index:t,$isVisible:o,children:[(0,qr.jsx)(Bl,{children:e.number}),(0,qr.jsx)(Wl,{children:e.title}),(0,qr.jsx)(Hl,{children:e.description})]},t)))})]})}),(0,qr.jsx)(Ji,{})]})]})]})},Yl=n.p+"static/media/maritime-room.b11dd7e9c64fc34f0978.png",Gl=Jr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Kl=Jr`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Xl=Jr`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Jl=Gr.div`
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
`,Ql=Gr.div`
  position: relative;
  z-index: 50;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${Gl} 0.8s ease-out;
  scroll-behavior: smooth;
`,ql=Gr.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${Yl}) no-repeat center center;
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
`,Zl=Gr.div`
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
`,es=Gr.div`
  margin-top: auto;
  margin-bottom: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,ts=Gr.div`
  flex: 1;
`,ns=Gr.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,rs=Gr.div`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  opacity: 0;
  animation: ${Gl} 0.8s ease forwards;
  animation-delay: 0.2s;
`,is=Gr.h1`
  font-size: clamp(2.5rem, 6vw, 5.5rem);
  color: white;
  line-height: 1;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-align: left;
  max-width: 15ch;
  opacity: 0;
  animation: ${Gl} 0.8s ease forwards;
  animation-delay: 0.4s;
`,os=Gr.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 0;
  margin-right: -5%;
`,as=Gr.p`
  font-size: clamp(1.125rem, 1.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 400px;
  text-align: left;
  font-weight: 400;
  margin-right: 5%;
  opacity: 0;
  animation: ${Gl} 0.8s ease forwards;
  animation-delay: 0.6s;
`,ls=Gr.div`
  position: relative;
  background: #000;
`,ss=Gr.div`
  padding: 120px 5%;
  background: #000;
  
  @media (max-width: 768px) {
    padding: 80px 24px;
  }
`,us=Gr.div`
  padding: 200px 5% 160px 5%;
  background: #000000;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 180px 24px 140px 24px;
  }
`,cs=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
`,ds=Gr.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 2rem;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Gl:"none"} 0.8s ease forwards;
  animation-delay: 0.2s;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
    margin-bottom: 1.5rem;
  }
`,fs=Gr.p`
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Gl:"none"} 0.8s ease forwards;
  animation-delay: 0.4s;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    max-width: 100%;
  }
`,ps=Gr.div`
  max-width: 1400px;
  margin: 0 auto;
`,hs=Gr.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  color: white;
  text-align: left;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Xl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`,ms=Gr.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gs=Gr.div`
  padding: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Xl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${e=>e.$isVisible?.15*e.$index:0}s;
`,vs=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2rem;
`,xs=Gr.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
`,ys=Gr.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
`,bs=Gr.div`
  padding: 0 24px;
  background: #000;
  position: relative;
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 80px;
`,ws=Gr.div`
  width: 100%;
  display: flex;
  position: relative;
  gap: 0;
  background: #000;
`,Ss=Gr.div`
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
`,Es=Gr.div`
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

  ${Ss}:hover & {
    transform: scale(1.15);
  }
`,ks=Gr.div`
  width: 8px;
  height: 8px;
  background: ${e=>e.$isActive?"#0066FF":"rgba(0, 102, 255, 0.3)"};
  margin-bottom: 1rem;
  opacity: 0;
  animation: ${Gl} 0.5s ease forwards;
  animation-delay: 0.2s;
`,_s=Gr.div`
  font-size: 1.25rem;
  color: white;
  font-weight: 500;
  margin-bottom: ${e=>e.$isActive?"1rem":"0"};
  opacity: 0;
  animation: ${Kl} 0.5s ease forwards;
  animation-delay: 0.3s;
`,js=Gr.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 400px;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  animation: ${Gl} 0.5s ease forwards;
  animation-delay: 0.4s;
`,Cs=Gr.div`
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
  
  ${ks}, ${_s}, ${js} {
    animation-play-state: ${e=>e.$isActive?"running":"paused"};
  }

  ${Ss}:hover & {
    background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
    height: 50%;

    ${ks}, ${_s}, ${js} {
      animation-play-state: running;
    }
  }
`,Ts=Gr.div`
  padding: 120px 0 60px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
`,Ps=Gr.h2`
  font-size: 3rem;
  color: white;
  line-height: 1.1;
  font-weight: 500;
  opacity: 0;
  visibility: ${e=>e.$isVisible?"visible":"hidden"};
  animation: ${e=>e.$isVisible?Xl:"none"} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  margin-left: 0;
`;const Rs=function(){const[t,n]=(0,e.useState)("dispatcher"),[r,i]=(0,e.useState)(!1),[o,a]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),u=(0,e.useRef)(null),c=(0,e.useRef)(null),d=(0,e.useRef)(null);(0,e.useEffect)((()=>{window.scrollTo(0,0);const e={threshold:.15,rootMargin:"50px"},t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(i(!0),t.unobserve(e.target))}))}),e),n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(a(!0),n.unobserve(e.target))}))}),e),r=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(s(!0),r.unobserve(e.target))}))}),e);return u.current&&t.observe(u.current),c.current&&n.observe(c.current),d.current&&r.observe(d.current),()=>{u.current&&t.unobserve(u.current),c.current&&n.unobserve(c.current),d.current&&r.unobserve(d.current)}}),[]);const f=[{id:"dispatcher",title:"Dispatcher",image:Yl,description:"Advanced dispatch optimization and fleet monitoring powered by GeoSpatial intelligence. Simulating the possible futures and identifying possible disruptions with Ultra-High-Resolution weather predictions and pattern analysis enable better planning and reduced operational costs."},{id:"vtc",title:"VTC",image:Yl,description:"Enhanced vessel traffic control with comprehensive situational awareness and predictive analytics. Real-time monitoring and AI-powered risk assessment ensure safe and efficient maritime operations."}];return(0,qr.jsxs)(Jl,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsxs)(Ql,{children:[(0,qr.jsx)(ql,{children:(0,qr.jsx)(Zl,{children:(0,qr.jsxs)(es,{children:[(0,qr.jsx)(ts,{children:(0,qr.jsxs)(ns,{children:[(0,qr.jsx)(rs,{children:"AI Command & Control for Maritime Operations"}),(0,qr.jsx)(is,{children:"Maritime Operations"})]})}),(0,qr.jsx)(os,{children:(0,qr.jsx)(as,{children:"Transform maritime operations with predictive command and control, enabling smarter decisions for dispatchers, vessel operators, and port authorities."})})]})})}),(0,qr.jsx)(us,{ref:d,children:(0,qr.jsxs)(cs,{children:[(0,qr.jsx)(ds,{$isVisible:l,children:"Coming Soon"}),(0,qr.jsxs)(fs,{$isVisible:l,children:["This section is under development. ",(0,qr.jsx)("br",{})," Stay tuned for exciting updates!"]})]})}),(0,qr.jsxs)(ls,{children:[(0,qr.jsx)(Ts,{ref:u,children:(0,qr.jsx)(Ps,{$isVisible:r,children:"Enhanced operational Platform"})}),(0,qr.jsx)(bs,{children:(0,qr.jsx)(ws,{children:f.map((e=>(0,qr.jsxs)(Ss,{$isActive:t===e.id,onMouseEnter:()=>n(e.id),children:[(0,qr.jsx)(Es,{$image:e.image,$isActive:t===e.id}),(0,qr.jsxs)(Cs,{$isActive:t===e.id,children:[(0,qr.jsx)(ks,{$isActive:t===e.id}),(0,qr.jsx)(_s,{$isActive:t===e.id,children:e.title}),t===e.id&&(0,qr.jsx)(js,{children:e.description})]})]},e.id)))})}),(0,qr.jsx)(ss,{children:(0,qr.jsxs)(ps,{ref:c,children:[(0,qr.jsx)(hs,{$isVisible:o,children:"Key Features + Platform"}),(0,qr.jsx)(ms,{children:[{number:"01",title:"Predict Weather & Seas",description:"AI-driven forecasts anticipate weather, sea conditions, and congestion before they form."},{number:"02",title:"Streamlined Coordination",description:"Eliminate inefficiency and tool overload. Sea-OS replaces hundreds of logins with one platform that unifies workflows across teams and systems."},{number:"03",title:"Port Operations Optimization",description:"Intelligent scheduling and resource allocation for improved port efficiency and reduced vessel waiting times."},{number:"04",title:"Auto-Sync Operations",description:"Keep dispatchers, vessel operators, and VTC in sync automatically, and shares live context and updates across every role without manual coordination."},{number:"05",title:"Secure Communications",description:"Encrypted data transmission and secure information sharing across maritime stakeholders and vessels."},{number:"06",title:"Seamless Integration",description:"Sea-OS plugs into your existing tech stack with modular APIs, extending predictive intelligence without replacing your systems."}].map(((e,t)=>(0,qr.jsxs)(gs,{$index:t,$isVisible:o,children:[(0,qr.jsx)(vs,{children:e.number}),(0,qr.jsx)(xs,{children:e.title}),(0,qr.jsx)(ys,{children:e.description})]},t)))})]})}),(0,qr.jsx)(Ji,{})]})]})]})},zs=Jr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ls=(Jr`
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
`),As=Gr.div`
  position: relative;
  z-index: 50;
  padding: 0 5%;
  pointer-events: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${zs} 0.8s ease-out;
  scroll-behavior: smooth;
`,Ds=Gr.div`
  padding-top: 120px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
`,Os=Gr.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.2;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.79);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ns=Gr.p`
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
`,Is=Gr.div`
  max-width: 800px;
  margin: 0 auto 6rem;
`,Ms=Gr.div`
  margin-bottom: 4rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,Fs=Gr.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,$s=Gr.div`
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
`;const Us=function(){return(0,e.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,qr.jsxs)(Ls,{children:[(0,qr.jsx)(To,{}),(0,qr.jsx)(vi,{}),(0,qr.jsxs)(As,{children:[(0,qr.jsxs)(Ds,{children:[(0,qr.jsx)(Os,{children:"The GeoSpatios Manifesto"}),(0,qr.jsx)(Ns,{children:"Building the ecosystem for autonomous operations"})]}),(0,qr.jsxs)(Is,{children:[(0,qr.jsxs)(Ms,{children:[(0,qr.jsx)(Fs,{children:"The Operational Gap"}),(0,qr.jsxs)($s,{children:[(0,qr.jsxs)("p",{children:["In today's world, ",(0,qr.jsx)("strong",{children:"high-stakes operations remain fragmented"}),". While boardrooms leverage advanced analytics and real-time data, frontline operators struggle with piecing together disconnected systems, manual processes, and point solutions that create more complexity than clarity."]}),(0,qr.jsxs)("p",{children:["This fragmentation creates a dangerous gap between strategic vision and operational reality. When critical decisions require human operators to process multiple data streams manually, the result is inevitable: ",(0,qr.jsx)("strong",{children:"delayed decisions, missed opportunities, and increased operational risk"}),"."]})]})]}),(0,qr.jsxs)(Ms,{children:[(0,qr.jsx)(Fs,{children:"Beyond Human-in-the-Loop"}),(0,qr.jsxs)($s,{children:[(0,qr.jsxs)("p",{children:["The future of operations demands more than just automations. It requires ",(0,qr.jsx)("strong",{children:"intelligent orchestration at machine speed"}),". Traditional approaches that rely solely on human processing create bottlenecks in operational tempo and effectiveness. Our approach transforms this paradigm by enabling systems to make decisions at digital speed while maintaining human oversight at the strategic level."]}),(0,qr.jsxs)("p",{children:["Our goal is to ",(0,qr.jsx)("strong",{children:"multiply human capability"})," rather than simply automate existing workflows. By unifying fragmented systems into one command center, we enable operators to focus on strategic decisions while our digital operators handle the complexity of real-time coordination and execution."]})]})]}),(0,qr.jsxs)(Ms,{children:[(0,qr.jsx)(Fs,{children:"The Digital Factory"}),(0,qr.jsxs)($s,{children:[(0,qr.jsxs)("p",{children:["GeoSpatios is building ",(0,qr.jsx)("strong",{children:"Geo-OS"}),", our digital factory for creating operational intelligence. This unified Operating System combines geospatial data processing, foundation models, and modular functions into a powerful infrastructure that enables rapid development of specialized digital operators at planetary scale."]}),(0,qr.jsxs)("p",{children:["Through Geo-OS's modular architecture, we can quickly assemble and deploy ",(0,qr.jsx)("strong",{children:"digital operators"})," tailored to specific operational domains. Each digital operator inherits core capabilities while being customized for its unique operational context\u2014whether that's air traffic control, maritime dispatch, or emergency response."]})]})]}),(0,qr.jsxs)(Ms,{children:[(0,qr.jsx)(Fs,{children:"Digital Operators in Action"}),(0,qr.jsxs)($s,{children:[(0,qr.jsxs)("p",{children:["Our digital operators transform fragmented operations into unified command & control. Each operator bridges the gap between strategic, tactical, and operational layers\u2014processing millions of data points to enable ",(0,qr.jsx)("strong",{children:"confident decision-making at machine speed"}),"."]}),(0,qr.jsxs)("p",{children:["From coordinating thousands of flights to optimizing global maritime routes, from emergency response to space operations, these digital operators work 24/7 to ",(0,qr.jsx)("strong",{children:"orchestrate complex missions with unprecedented speed and precision"}),". What was once impossible becomes standard operating procedure."]})]})]}),(0,qr.jsxs)(Ms,{children:[(0,qr.jsx)(Fs,{children:"Our Mission"}),(0,qr.jsx)($s,{children:(0,qr.jsx)("p",{children:"GeoSpatios exists to change how humans handle high-stakes operations. We're creating the infrastructure that enables humans to safely operate at global scale, automating the routine so that people can focus on the exceptional."})})]})]}),(0,qr.jsx)(Ji,{})]})]})};class Bs{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Network Error";this.status=e,this.text=t}}const Ws={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!==typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},Hs=e=>e?"string"===typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},Vs=async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=await fetch(Ws.origin+e,{method:"POST",headers:n,body:t}),i=await r.text(),o=new Bs(r.status,i);if(r.ok)return o;throw o},Ys=(e,t,n)=>{if(!e||"string"!==typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!==typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||"string"!==typeof n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Gs=e=>e.webdriver||!e.languages||0===e.languages.length,Ks=()=>new Bs(451,"Unavailable For Headless Browser"),Xs=(e,t)=>{if((e=>!e.list?.length||!e.watchVariable)(e))return!1;((e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!==typeof t)throw"The BlockList watchVariable has to be a string"})(e.list,e.watchVariable);const n=((e,t)=>e instanceof FormData?e.get(t):e[t])(t,e.watchVariable);return"string"===typeof n&&e.list.includes(n)},Js=()=>new Bs(403,"Forbidden"),Qs=async(e,t,n)=>{if(!t.throttle||!n)return!1;((e,t)=>{if("number"!==typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!==typeof t)throw"The LimitRate ID has to be a non-empty string"})(t.throttle,t.id);const r=t.id||e,i=await(async(e,t,n)=>{const r=Number(await n.get(e)||0);return t-Date.now()+r})(r,t.throttle,n);return i>0||(await n.set(r,Date.now().toString()),!1)},qs=()=>new Bs(429,"Too Many Requests"),Zs={init:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://api.emailjs.com";if(!e)return;const n=Hs(e);Ws.publicKey=n.publicKey,Ws.blockHeadless=n.blockHeadless,Ws.storageProvider=n.storageProvider,Ws.blockList=n.blockList,Ws.limitRate=n.limitRate,Ws.origin=n.origin||t},send:async(e,t,n,r)=>{const i=Hs(r),o=i.publicKey||Ws.publicKey,a=i.blockHeadless||Ws.blockHeadless,l=i.storageProvider||Ws.storageProvider,s={...Ws.blockList,...i.blockList},u={...Ws.limitRate,...i.limitRate};if(a&&Gs(navigator))return Promise.reject(Ks());if(Ys(o,e,t),(e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(n),n&&Xs(s,n))return Promise.reject(Js());if(await Qs(location.pathname,u,l))return Promise.reject(qs());const c={lib_version:"4.4.1",user_id:o,service_id:e,template_id:t,template_params:n};return Vs("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:async(e,t,n,r)=>{const i=Hs(r),o=i.publicKey||Ws.publicKey,a=i.blockHeadless||Ws.blockHeadless,l=Ws.storageProvider||i.storageProvider,s={...Ws.blockList,...i.blockList},u={...Ws.limitRate,...i.limitRate};if(a&&Gs(navigator))return Promise.reject(Ks());const c=(e=>"string"===typeof e?document.querySelector(e):e)(n);Ys(o,e,t),(e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(c);const d=new FormData(c);return Xs(s,d)?Promise.reject(Js()):await Qs(location.pathname,u,l)?Promise.reject(qs()):(d.append("lib_version","4.4.1"),d.append("service_id",e),d.append("template_id",t),d.append("user_id",o),Vs("/api/v1.0/email/send-form",d))},EmailJSResponseStatus:Bs},eu=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: transparent;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
`,tu=Gr.div`
  position: relative;
  z-index: 50;
  padding: 120px 5% 60px;
  pointer-events: auto;
  max-width: 1200px;
  margin: 0 auto;
`,nu=Gr.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  text-align: center;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,ru=Gr.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`,iu=Gr.form`
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
`,ou=Gr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,au=Gr.div`
  margin-bottom: 24px;
`,lu=Gr.label`
  display: block;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
`,su=Gr.input`
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
`,uu=Gr.select`
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
`,cu=Gr.textarea`
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
`,du=Gr.button`
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
`,fu=Gr.button`
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    background: #ff5252;
    transform: translateY(-1px);
  }
`,pu=Gr.div`
  background: rgba(0, 255, 0, 0.1);
  border: 1px solid rgba(0, 255, 0, 0.2);
  color: #00ff00;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 24px;
`,hu=Gr.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
  color: #ff0000;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  margin-top: 24px;
`,mu=()=>{const t=(0,e.useRef)(),[n,r]=((0,e.useRef)(),(0,e.useState)({submitting:!1,submitted:!1,error:null})),i={serviceId:"service_0v41bzd",templateId:"template_n6s6wp8",publicKey:"jdMIZFvSFHNQfLeBN"};(0,e.useEffect)((()=>{console.log("=== EmailJS Debug Info ==="),console.log("Environment variables:",{serviceId:"service_0v41bzd",templateId:"template_n6s6wp8",publicKey:"jdMIZFvSFHNQfLeBN"}),console.log("Final config:",i),console.log("EmailJS object:",Zs),console.log("NODE_ENV:","production");try{Zs.init(i.publicKey),console.log("EmailJS initialized successfully")}catch(e){console.error("Error initializing EmailJS:",e)}}),[i.publicKey]);return(0,qr.jsxs)(eu,{children:[(0,qr.jsx)(vi,{}),(0,qr.jsxs)(tu,{children:[(0,qr.jsx)(nu,{children:"Contact Us"}),(0,qr.jsxs)(ru,{children:["We\u2019re bringing AI-native co-pilot to help you fly smarter. ",(0,qr.jsx)("br",{})," If you want to get early access, sign up below and we'll get back to you as soon as possible :)"]}),(0,qr.jsxs)(iu,{ref:t,onSubmit:e=>{if(e.preventDefault(),console.log("=== Form Submission Started ==="),r({submitting:!0,submitted:!1,error:null}),!t.current)return console.error("Form reference is null"),void r({submitting:!1,submitted:!1,error:"Form reference error. Please refresh the page and try again."});const n=new FormData(t.current),o={name:n.get("name"),company:n.get("company"),title:n.get("title"),email:n.get("email"),phone:n.get("phone"),country:n.get("country"),message:n.get("message")};if(console.log("Form Data:",o),console.log("Environment:","production"),console.log("Current URL:",window.location.href),console.log("EmailJS config being used:",i),!o.name||!o.company||!o.title||!o.email||!o.message)return console.error("Validation failed - missing required fields"),void r({submitting:!1,submitted:!1,error:"Please fill in all required fields."});const a=setTimeout((()=>{console.error("EmailJS request timed out"),r({submitting:!1,submitted:!1,error:"Request timed out. Please check your internet connection and try again."})}),15e3);console.log("Attempting to send email via EmailJS..."),Zs.sendForm(i.serviceId,i.templateId,t.current,i.publicKey).then((e=>{console.log("EmailJS success result:",e),clearTimeout(a),r({submitting:!1,submitted:!0,error:null}),t.current.reset(),console.log("Email sent successfully")})).catch((e=>{console.error("EmailJS error caught:",e),clearTimeout(a),console.error("EmailJS Error Details:",{status:e.status,text:e.text,name:e.name,message:e.message,stack:e.stack});let t="Failed to send message. Please try again.";400===e.status?t="Invalid request. Please check your form data.":401===e.status?t="Authentication failed. Please contact support.":402===e.status?t="Service quota exceeded. Please try again later.":404===e.status?t="Service not found. Please contact support.":429===e.status?t="Too many requests. Please wait a moment and try again.":e.text&&e.text.includes("CORS")?t="Network error. Please try again or contact support.":navigator.onLine||(t="No internet connection. Please check your connection and try again."),r({submitting:!1,submitted:!1,error:t})}))},children:[(0,qr.jsxs)(ou,{children:[(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"name",children:"Name *"}),(0,qr.jsx)(su,{type:"text",id:"name",name:"name",placeholder:"Enter your full name",required:!0})]}),(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"company",children:"Organization *"}),(0,qr.jsx)(su,{type:"text",id:"company",name:"company",placeholder:"(Airline, charter service, or individual pilot)",required:!0})]}),(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"title",children:"Title *"}),(0,qr.jsx)(su,{type:"text",id:"title",name:"title",placeholder:"Enter your job title",required:!0})]}),(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"email",children:"Email *"}),(0,qr.jsx)(su,{type:"email",id:"email",name:"email",placeholder:"Enter your email address",required:!0})]}),(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"phone",children:"Phone Number"}),(0,qr.jsx)(su,{type:"tel",id:"phone",name:"phone",placeholder:"Enter your phone number"})]}),(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"country",children:"State *"}),(0,qr.jsxs)(uu,{id:"country",name:"country",required:!0,children:[(0,qr.jsx)("option",{value:"",children:"Select your state"}),(0,qr.jsx)("option",{value:"AL",children:"Alabama"}),(0,qr.jsx)("option",{value:"AK",children:"Alaska"}),(0,qr.jsx)("option",{value:"AZ",children:"Arizona"}),(0,qr.jsx)("option",{value:"AR",children:"Arkansas"}),(0,qr.jsx)("option",{value:"CA",children:"California"}),(0,qr.jsx)("option",{value:"CO",children:"Colorado"}),(0,qr.jsx)("option",{value:"CT",children:"Connecticut"}),(0,qr.jsx)("option",{value:"DE",children:"Delaware"}),(0,qr.jsx)("option",{value:"FL",children:"Florida"}),(0,qr.jsx)("option",{value:"GA",children:"Georgia"}),(0,qr.jsx)("option",{value:"HI",children:"Hawaii"}),(0,qr.jsx)("option",{value:"ID",children:"Idaho"}),(0,qr.jsx)("option",{value:"IL",children:"Illinois"}),(0,qr.jsx)("option",{value:"IN",children:"Indiana"}),(0,qr.jsx)("option",{value:"IA",children:"Iowa"}),(0,qr.jsx)("option",{value:"KS",children:"Kansas"}),(0,qr.jsx)("option",{value:"KY",children:"Kentucky"}),(0,qr.jsx)("option",{value:"LA",children:"Louisiana"}),(0,qr.jsx)("option",{value:"ME",children:"Maine"}),(0,qr.jsx)("option",{value:"MD",children:"Maryland"}),(0,qr.jsx)("option",{value:"MA",children:"Massachusetts"}),(0,qr.jsx)("option",{value:"MI",children:"Michigan"}),(0,qr.jsx)("option",{value:"MN",children:"Minnesota"}),(0,qr.jsx)("option",{value:"MS",children:"Mississippi"}),(0,qr.jsx)("option",{value:"MO",children:"Missouri"}),(0,qr.jsx)("option",{value:"MT",children:"Montana"}),(0,qr.jsx)("option",{value:"NE",children:"Nebraska"}),(0,qr.jsx)("option",{value:"NV",children:"Nevada"}),(0,qr.jsx)("option",{value:"NH",children:"New Hampshire"}),(0,qr.jsx)("option",{value:"NJ",children:"New Jersey"}),(0,qr.jsx)("option",{value:"NM",children:"New Mexico"}),(0,qr.jsx)("option",{value:"NY",children:"New York"}),(0,qr.jsx)("option",{value:"NC",children:"North Carolina"}),(0,qr.jsx)("option",{value:"ND",children:"North Dakota"}),(0,qr.jsx)("option",{value:"OH",children:"Ohio"}),(0,qr.jsx)("option",{value:"OK",children:"Oklahoma"}),(0,qr.jsx)("option",{value:"OR",children:"Oregon"}),(0,qr.jsx)("option",{value:"PA",children:"Pennsylvania"}),(0,qr.jsx)("option",{value:"RI",children:"Rhode Island"}),(0,qr.jsx)("option",{value:"SC",children:"South Carolina"}),(0,qr.jsx)("option",{value:"SD",children:"South Dakota"}),(0,qr.jsx)("option",{value:"TN",children:"Tennessee"}),(0,qr.jsx)("option",{value:"TX",children:"Texas"}),(0,qr.jsx)("option",{value:"UT",children:"Utah"}),(0,qr.jsx)("option",{value:"VT",children:"Vermont"}),(0,qr.jsx)("option",{value:"VA",children:"Virginia"}),(0,qr.jsx)("option",{value:"WA",children:"Washington"})]})]})]}),(0,qr.jsxs)(au,{children:[(0,qr.jsx)(lu,{htmlFor:"message",children:"What challenges do you want Air-OS to help with? *"}),(0,qr.jsx)(cu,{id:"message",name:"message",placeholder:"weather avoidance, airport comms, route planning, fuel management, crew scheduling, information overload, etc.",required:!0})]}),(0,qr.jsx)(du,{type:"submit",id:"button",disabled:n.submitting,children:n.submitting?"Sending...":"Join Beta"}),(0,qr.jsx)(fu,{onClick:async()=>{console.log("Testing EmailJS connection...");try{const e={name:"Test User",company:"Test Company",title:"Test Title",email:"test@example.com",phone:"555-1234",country:"CA",message:"This is a test message"},t=await Zs.send(i.serviceId,i.templateId,e,i.publicKey);console.log("EmailJS test successful:",t),alert("EmailJS test successful! Check console for details.")}catch(e){console.error("EmailJS test failed:",e),alert("EmailJS test failed! Check console for error details.")}},children:"Test EmailJS Connection"}),n.submitted&&(0,qr.jsx)(pu,{children:"Thank you for your message! We'll get back to you soon."}),n.error&&(0,qr.jsx)(hu,{children:n.error})]})]}),(0,qr.jsx)(Ji,{})]})},gu=Xr`
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
`,vu=Gr.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;const xu=function(){return(0,qr.jsxs)(vu,{children:[(0,qr.jsx)(gu,{}),(0,qr.jsx)(Xe,{children:(0,qr.jsxs)(me,{children:[(0,qr.jsx)(pe,{path:"/",element:(0,qr.jsx)(bo,{})}),(0,qr.jsx)(pe,{path:"/geo-os",element:(0,qr.jsx)(Ho,{})}),(0,qr.jsx)(pe,{path:"/solutions",element:(0,qr.jsx)(ia,{})}),(0,qr.jsx)(pe,{path:"/technology",element:(0,qr.jsx)(Ra,{})}),(0,qr.jsx)(pe,{path:"/partner-program",element:(0,qr.jsx)(Ya,{})}),(0,qr.jsx)(pe,{path:"/platform",element:(0,qr.jsx)(Za,{})}),(0,qr.jsx)(pe,{path:"/platform/airfield-operations",element:(0,qr.jsx)(Vl,{})}),(0,qr.jsx)(pe,{path:"/platform/maritime-operations",element:(0,qr.jsx)(Rs,{})}),(0,qr.jsx)(pe,{path:"/manifesto",element:(0,qr.jsx)(Us,{})}),(0,qr.jsx)(pe,{path:"/contact",element:(0,qr.jsx)(mu,{})}),(0,qr.jsx)(pe,{path:"/careers",element:(0,qr.jsx)(Co,{})}),(0,qr.jsx)(pe,{path:"*",element:(0,qr.jsx)(Co,{})})]})})]})},yu=Xr`
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
`;t.createRoot(document.getElementById("root")).render((0,qr.jsxs)(e.StrictMode,{children:[(0,qr.jsx)(yu,{}),(0,qr.jsx)(xu,{})]}))})()})();
//# sourceMappingURL=main.208c1a36.js.map