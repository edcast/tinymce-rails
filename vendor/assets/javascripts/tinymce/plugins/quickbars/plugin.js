/**
 * TinyMCE version 6.5.1 (2023-06-19)
 */
!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const e=t=>e=>typeof e===t,o=("string",t=>"string"===(t=>{const e=typeof t;return null===t?"null":"object"===e&&Array.isArray(t)?"array":"object"===e&&(o=n=t,(r=String).prototype.isPrototypeOf(o)||(null===(i=n.constructor)||void 0===i?void 0:i.name)===r.name)?"string":e;var o,n,r,i})(t));const n=e("boolean"),r=e("function"),i=t=>e=>e.options.get(t),s=i("quickbars_selection_toolbar"),a=i("quickbars_insert_toolbar"),l=i("quickbars_image_toolbar");let c=0;var u=tinymce.util.Tools.resolve("tinymce.util.Delay");const d=t=>{t.ui.registry.addButton("quickimage",{icon:"image",tooltip:"Insert image",onAction:()=>{(t=>new Promise((e=>{let o=!1;const n=document.createElement("input");n.type="file",n.accept="image/*",n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0.001",document.body.appendChild(n);const r=t=>{var r;o||(null===(r=n.parentNode)||void 0===r||r.removeChild(n),o=!0,e(t))},i=t=>{r(Array.prototype.slice.call(t.target.files))};n.addEventListener("input",i),n.addEventListener("change",i);const s=e=>{const n=()=>{r([])};o||("focusin"===e.type?u.setEditorTimeout(t,n,1e3):n()),t.off("focusin remove",s)};t.on("focusin remove",s),n.click()})))(t).then((e=>{if(e.length>0){const o=e[0];(t=>new Promise((e=>{const o=new FileReader;o.onloadend=()=>{e(o.result.split(",")[1])},o.readAsDataURL(t)})))(o).then((e=>{((t,e,o)=>{const n=t.editorUpload.blobCache,r=n.create((t=>{const e=(new Date).getTime(),o=Math.floor(1e9*Math.random());return c++,"mceu_"+o+c+String(e)})(),o,e);n.add(r),t.insertContent(t.dom.createHTML("img",{src:r.blobUri()}))})(t,e,o)}))}}))}}),t.ui.registry.addButton("quicktable",{icon:"table",tooltip:"Insert table",onAction:()=>{((t,e,o)=>{t.execCommand("mceInsertTable",!1,{rows:2,columns:2})})(t)}})},m=(!1,()=>false);class h{constructor(t,e){this.tag=t,this.value=e}static some(t){return new h(!0,t)}static none(){return h.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?h.some(t(this.value)):h.none()}bind(t){return this.tag?t(this.value):h.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:h.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(null!=t?t:"Called getOrDie on None")}static from(t){return null==t?h.none():h.some(t)}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}h.singletonNone=new h(!1),"undefined"!=typeof window?window:Function("return this;")();var g=(t,e,o,n,i)=>t(o,n)?h.some(o):r(i)&&i(o)?h.none():e(o,n,i);const b=t=>{if(null==t)throw new Error("Node cannot be null or undefined");return{dom:t}},p=b,f=(t,e)=>{const o=t.dom;if(1!==o.nodeType)return!1;{const t=o;if(void 0!==t.matches)return t.matches(e);if(void 0!==t.msMatchesSelector)return t.msMatchesSelector(e);if(void 0!==t.webkitMatchesSelector)return t.webkitMatchesSelector(e);if(void 0!==t.mozMatchesSelector)return t.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")}},v=(t,e,o)=>{let n=t.dom;const i=r(o)?o:m;for(;n.parentNode;){n=n.parentNode;const t=p(n);if(e(t))return h.some(t);if(i(t))break}return h.none()},y=(t,e,o)=>v(t,(t=>f(t,e)),o),k=t=>{const e=a(t);e.length>0&&t.ui.registry.addContextToolbar("quickblock",{predicate:e=>{const o=p(e),n=t.schema.getTextBlockElements(),r=e=>e.dom===t.getBody();return!((t,e)=>{const o=t.dom;return!(!o||!o.hasAttribute)&&o.hasAttribute("data-mce-bogus")})(o)&&((t,e,o)=>g(((t,e)=>f(t,e)),y,t,'table,[data-mce-bogus="all"]',o))(o,0,r).fold((()=>((t,e,o)=>((t,e,o)=>g(((t,e)=>e(t)),v,t,e,o))(t,e,o).isSome())(o,(e=>e.dom.nodeName.toLowerCase()in n&&t.dom.isEmpty(e.dom)),r)),m)},items:e,position:"line",scope:"editor"})};t.add("quickbars",(t=>{(t=>{const e=t.options.register,r=t=>e=>{const r=n(e)||o(e);return r?n(e)?{value:e?t:"",valid:r}:{value:e.trim(),valid:r}:{valid:!1,message:"Must be a boolean or string."}},i="bold italic | quicklink h2 h3 blockquote";e("quickbars_selection_toolbar",{processor:r(i),default:i});const s="quickimage quicktable";e("quickbars_insert_toolbar",{processor:r(s),default:s});const a="alignleft aligncenter alignright";e("quickbars_image_toolbar",{processor:r(a),default:a})})(t),d(t),k(t),(t=>{const e=e=>t.dom.isEditable(e),o=t=>"IMG"===t.nodeName||"FIGURE"===t.nodeName&&/image/i.test(t.className)&&e(t.parentElement),n=l(t);n.length>0&&t.ui.registry.addContextToolbar("imageselection",{predicate:o,items:n,position:"node"});const r=s(t);r.length>0&&t.ui.registry.addContextToolbar("textselection",{predicate:n=>!o(n)&&!t.selection.isCollapsed()&&e(n),items:r,position:"selection",scope:"editor"})})(t)}))}();