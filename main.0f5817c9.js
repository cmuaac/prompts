function x(){}function te(e,t){for(const n in t)e[n]=t[n];return e}function ne(e){return e()}function K(){return Object.create(null)}function C(e){e.forEach(ne)}function de(e){return"function"==typeof e}function z(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function he(e){return 0===Object.keys(e).length}let J,W=!1;function me(){W=!0}function pe(){W=!1}function ge(e,t,n,r){for(;e<t;){const o=e+(t-e>>1);n(o)<=r?e=o+1:t=o}return e}function $e(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let o=0;for(let e=0;e<t.length;e++){const i=t[e].claim_order,c=(o>0&&t[n[o]].claim_order<=i?o+1:ge(1,o,(e=>t[n[e]].claim_order),i))-1;r[e]=n[c]+1;const l=c+1;n[l]=e,o=Math.max(l,o)}const i=[],c=[];let l=t.length-1;for(let e=n[o]+1;0!=e;e=r[e-1]){for(i.push(t[e-1]);l>=e;l--)c.push(t[l]);l--}for(;l>=0;l--)c.push(t[l]);i.reverse(),c.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<c.length;t++){for(;n<i.length&&c[t].claim_order>=i[n].claim_order;)n++;const r=n<i.length?i[n]:null;e.insertBefore(c[t],r)}}function m(e,t){if(W){for($e(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(void 0!==t.claim_order||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||null!==t.nextSibling)&&e.appendChild(t)}function I(e,t,n){W&&!n?m(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function d(e){e.parentNode.removeChild(e)}function ye(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function $(e){return document.createTextNode(e)}function ie(){return $(" ")}function R(){return $("")}function be(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function q(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function j(e){return Array.from(e.childNodes)}function xe(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function re(e,t,n,r,o=!1){xe(e);const i=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const i=e[r];if(t(i)){const t=n(i);return void 0===t?e.splice(r,1):e[r]=t,o||(e.claim_info.last_index=r),i}}for(let r=e.claim_info.last_index-1;r>=0;r--){const i=e[r];if(t(i)){const t=n(i);return void 0===t?e.splice(r,1):e[r]=t,o?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,i}}return r()})();return i.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,i}function ve(e,t,n,r){return re(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const o=e.attributes[r];n[o.name]||t.push(o.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function S(e,t,n){return ve(e,t,n,b)}function A(e,t){return re(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>$(t)),!0)}function le(e){return A(e," ")}function X(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Y(e,t){e.value=t??""}function N(e){J=e}const E=[],Q=[],D=[],U=[],ke=Promise.resolve();let V=!1;function we(){V||(V=!0,ke.then(ce))}function G(e){D.push(e)}function Ee(e){U.push(e)}const H=new Set;let O=0;function ce(){const e=J;do{for(;O<E.length;){const e=E[O];O++,N(e),Se(e.$$)}for(N(null),E.length=0,O=0;Q.length;)Q.pop()();for(let e=0;e<D.length;e+=1){const t=D[e];H.has(t)||(H.add(t),t())}D.length=0}while(E.length);for(;U.length;)U.pop()();V=!1,H.clear(),N(e)}function Se(e){if(null!==e.fragment){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}const P=new Set;let g;function oe(){g={r:0,c:[],p:g}}function fe(){g.r||C(g.c),g=g.p}function _(e,t){e&&e.i&&(P.delete(e),e.i(t))}function h(e,t,n,r){if(e&&e.o){if(P.has(e))return;P.add(e),g.c.push((()=>{P.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function ue(e,t){const n={},r={},o={$$scope:1};let i=e.length;for(;i--;){const c=e[i],l=t[i];if(l){for(const e in c)e in l||(r[e]=1);for(const e in l)o[e]||(n[e]=l[e],o[e]=1);e[i]=l}else for(const e in c)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ae(e){return"object"==typeof e&&null!==e?e:{}}function Ae(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}function L(e){e&&e.c()}function B(e,t){e&&e.l(t)}function v(e,t,n,r){const{fragment:o,on_mount:i,on_destroy:c,after_update:l}=e.$$;o&&o.m(t,n),r||G((()=>{const t=i.map(ne).filter(de);c?c.push(...t):C(t),e.$$.on_mount=[]})),l.forEach(G)}function k(e,t){const n=e.$$;null!==n.fragment&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){-1===e.$$.dirty[0]&&(E.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,n,r,o,i,c,l=[-1]){const a=J;N(e);const u=e.$$={fragment:null,ctx:null,props:i,update:x,not_equal:o,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:K(),dirty:l,skip_bound:!1,root:t.target||a.$$.root};c&&c(u.root);let s=!1;if(u.ctx=n?n(e,t.props||{},((t,n,...r)=>{const i=r.length?r[0]:n;return u.ctx&&o(u.ctx[t],u.ctx[t]=i)&&(!u.skip_bound&&u.bound[t]&&u.bound[t](i),s&&Ne(e,t)),n})):[],u.update(),s=!0,C(u.before_update),u.fragment=!!r&&r(u.ctx),t.target){if(t.hydrate){me();const e=j(t.target);u.fragment&&u.fragment.l(e),e.forEach(d)}else u.fragment&&u.fragment.c();t.intro&&_(e.$$.fragment),v(e,t.target,t.anchor,t.customElement),pe(),ce()}N(a)}class F{$destroy(){k(this,1),this.$destroy=x}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!he(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var se={exports:{}};!function(e,t){var n;n={},se.exports=n,n.simpleFilter=function(e,t){return t.filter((function(t){return n.test(e,t)}))},n.test=function(e,t){return null!==n.match(e,t)},n.match=function(e,t,n){n=n||{};var r,o=0,i=[],c=t.length,l=0,a=0,u=n.pre||"",s=n.post||"",f=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var d=0;d<c;d++)r=t[d],f[d]===e[o]?(r=u+r+s,o+=1,a+=1+a):a=0,l+=a,i[i.length]=r;return o===e.length?(l=f===e?1/0:l,{rendered:i.join(""),score:l}):null},n.filter=function(e,t,r){return t&&0!==t.length?"string"!=typeof e?t:(r=r||{},t.reduce((function(t,o,i,c){var l=o;r.extract&&(l=r.extract(o));var a=n.match(e,l,r);return null!=a&&(t[t.length]={string:a.rendered,score:a.score,index:i,original:o}),t}),[]).sort((function(e,t){return t.score-e.score||e.index-t.index}))):[]}}();const je=se.exports;function Le(e){let t,n,r,o;return{c(){t=b("li"),n=$(e[0]),r=$(": "),o=$(e[1])},l(i){t=S(i,"LI",{});var c=j(t);n=A(c,e[0]),r=A(c,": "),o=A(c,e[1]),c.forEach(d)},m(e,i){I(e,t,i),m(t,n),m(t,r),m(t,o)},p(e,[t]){1&t&&X(n,e[0]),2&t&&X(o,e[1])},i:x,o:x,d(e){e&&d(t)}}}function Be(e,t,n){let{name:r}=t,{description:o}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"description"in e&&n(1,o=e.description)},[r,o]}class _e extends F{constructor(e){super(),T(this,e,Be,Le,z,{name:0,description:1})}}function Z(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ce(e){let t,n;const r=[e[3]];let o={};for(let e=0;e<r.length;e+=1)o=te(o,r[e]);return t=new _e({props:o}),{c(){L(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){v(t,e,r),n=!0},p(e,n){const o=1&n?ue(r,[ae(e[3])]):{};t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ze(e){let t,n;const r=[e[3].original];let o={};for(let e=0;e<r.length;e+=1)o=te(o,r[e]);return t=new _e({props:o}),{c(){L(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){v(t,e,r),n=!0},p(e,n){const o=1&n?ue(r,[ae(e[3].original)]):{};t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function ee(e){let t,n,r,o;const i=[ze,Ce],c=[];function l(e,t){return e[3].original?0:1}return t=l(e),n=c[t]=i[t](e),{c(){n.c(),r=R()},l(e){n.l(e),r=R()},m(e,n){c[t].m(e,n),I(e,r,n),o=!0},p(e,o){let a=t;t=l(e),t===a?c[t].p(e,o):(oe(),h(c[a],1,1,(()=>{c[a]=null})),fe(),n=c[t],n?n.p(e,o):(n=c[t]=i[t](e),n.c()),_(n,1),n.m(r.parentNode,r))},i(e){o||(_(n),o=!0)},o(e){h(n),o=!1},d(e){c[t].d(e),e&&d(r)}}}function Ie(e){let t,n,r=e[0],o=[];for(let t=0;t<r.length;t+=1)o[t]=ee(Z(e,r,t));const i=e=>h(o[e],1,1,(()=>{o[e]=null}));return{c(){t=b("ul");for(let e=0;e<o.length;e+=1)o[e].c()},l(e){t=S(e,"UL",{});var n=j(t);for(let e=0;e<o.length;e+=1)o[e].l(n);n.forEach(d)},m(e,r){I(e,t,r);for(let e=0;e<o.length;e+=1)o[e].m(t,null);n=!0},p(e,[n]){if(1&n){let c;for(r=e[0],c=0;c<r.length;c+=1){const i=Z(e,r,c);o[c]?(o[c].p(i,n),_(o[c],1)):(o[c]=ee(i),o[c].c(),_(o[c],1),o[c].m(t,null))}for(oe(),c=r.length;c<o.length;c+=1)i(c);fe()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)_(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)h(o[e]);n=!1},d(e){e&&d(t),ye(o,e)}}}function Te(e,t,n){let r,{items:o}=t,{filter_text:i}=t;return e.$$set=e=>{"items"in e&&n(1,o=e.items),"filter_text"in e&&n(2,i=e.filter_text)},e.$$.update=()=>{6&e.$$.dirty&&n(0,r=je.filter(i,o,{extract:e=>e.name+e.description}))},[r,o,i]}class Fe extends F{constructor(e){super(),T(this,e,Te,Ie,z,{items:1,filter_text:2})}}function Me(e){let t,n;return t=new Fe({props:{items:e[1],filter_text:e[0]}}),{c(){L(t.$$.fragment)},l(e){B(t.$$.fragment,e)},m(e,r){v(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.filter_text=e[0]),t.$set(r)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){k(t,e)}}}function Oe(e,t,n){let{filter_text:r}=t;return e.$$set=e=>{"filter_text"in e&&n(0,r=e.filter_text)},[r,[{name:"Foo",description:"The classic name"},{name:"Bar",description:"The classic counterpart to Foo"},{name:"Baz",description:"A controversial third choice"},{name:"Qux",description:"A rarely-seen fourth option"},{name:"FooBar",description:"What in the"}]]}class De extends F{constructor(e){super(),T(this,e,Oe,Me,z,{filter_text:0})}}function Pe(e){let t,n,r,o,i,c,l;return{c(){t=b("div"),n=b("label"),r=$("🔎"),o=ie(),i=b("input"),this.h()},l(e){t=S(e,"DIV",{});var c=j(t);n=S(c,"LABEL",{for:!0});var l=j(n);r=A(l,"🔎"),l.forEach(d),o=le(c),i=S(c,"INPUT",{id:!0,placeholder:!0}),c.forEach(d),this.h()},h(){q(n,"for","searchbar"),q(i,"id","searchbar"),q(i,"placeholder","Filter prompts...")},m(a,u){I(a,t,u),m(t,n),m(n,r),m(t,o),m(t,i),Y(i,e[0]),c||(l=be(i,"input",e[1]),c=!0)},p(e,[t]){1&t&&i.value!==e[0]&&Y(i,e[0])},i:x,o:x,d(e){e&&d(t),c=!1,l()}}}function We(e,t,n){let{value:r}=t;return e.$$set=e=>{"value"in e&&n(0,r=e.value)},[r,function(){r=this.value,n(0,r)}]}class qe extends F{constructor(e){super(),T(this,e,We,Pe,z,{value:0})}}function He(e){let t,n,r,o,i;function c(t){e[1](t)}let l={};return void 0!==e[0]&&(l.value=e[0]),t=new qe({props:l}),Q.push((()=>Ae(t,"value",c))),o=new De({props:{filter_text:e[0]}}),{c(){L(t.$$.fragment),r=ie(),L(o.$$.fragment)},l(e){B(t.$$.fragment,e),r=le(e),B(o.$$.fragment,e)},m(e,n){v(t,e,n),I(e,r,n),v(o,e,n),i=!0},p(e,[r]){const i={};!n&&1&r&&(n=!0,i.value=e[0],Ee((()=>n=!1))),t.$set(i);const c={};1&r&&(c.filter_text=e[0]),o.$set(c)},i(e){i||(_(t.$$.fragment,e),_(o.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),h(o.$$.fragment,e),i=!1},d(e){k(t,e),e&&d(r),k(o,e)}}}function Qe(e,t,n){let r;return[r,function(e){r=e,n(0,r)}]}class Ue extends F{constructor(e){super(),T(this,e,Qe,He,z,{})}}export{Ue as default};