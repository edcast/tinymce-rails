/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.10.0 (2021-10-11)
 */
!function(){"use strict";function a(t){return t.getParam("toc_class","mce-toc")}function s(t){var e=t.getParam("toc_header","h2");return/^h[1-6]$/.test(e)?e:"h2"}function u(n){return function(t){function e(){return t.setDisabled(n.mode.isReadOnly()||!(0<g(n).length))}return e(),n.on("LoadContent SetContent change",e),function(){return n.on("LoadContent SetContent change",e)}}}function d(t){var e,n,o,r="",i=g(t),c=function(t){for(var e=9,n=0;n<t.length;n++)if(1===(e=t[n].level<e?t[n].level:e))return e;return e}(i)-1;if(!i.length)return"";r+=(e=s(t),n=v.translate("Table of Contents"),o="</"+e+">","<"+e+' contenteditable="true">'+m.DOM.encode(n)+o);for(var l=0;l<i.length;l++){var a=i[l];a.element.id=a.id;var u=i[l+1]&&i[l+1].level;if(c===a.level)r+="<li>";else for(var d=c;d<a.level;d++)r+="<ul><li>";if(r+='<a href="#'+a.id+'">'+a.title+"</a>",u!==a.level&&u)for(d=a.level;u<d;d--)r+="</li></ul><li>";else r+="</li>",u||(r+="</ul>");c=a.level}return r}function f(t){var e=a(t),n=t.$("."+e);n.length&&t.undoManager.transact(function(){n.html(d(t))})}var t,e=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),v=tinymce.util.Tools.resolve("tinymce.util.I18n"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=(t=0,function(){return"mcetoc_"+(new Date).getTime().toString(32)+(t++).toString(32)}),g=function(n){var t,o=a(n),e=s(n),r=function(t){for(var e=[],n=1;n<=t;n++)e.push("h"+n);return e.join(",")}(1<=(t=parseInt(n.getParam("toc_depth","3"),10))&&t<=9?t:3),i=n.$(r);return i.length&&/^h[1-9]$/i.test(e)&&(i=i.filter(function(t,e){return!n.dom.hasClass(e.parentNode,o)})),c.map(i,function(t){return{id:t.id||l(),level:parseInt(t.nodeName.replace(/^H/i,""),10),title:n.$.text(t),element:t}})};e.add("toc",function(t){var c,e,n,o,r,i;function l(){return r.execCommand("mceInsertToc")}(c=t).addCommand("mceInsertToc",function(){var t,e,n,o,r,i;o=a(t=c),r=t.$("."+o),i=t,!r.length||0<i.dom.getParents(r[0],".mce-offscreen-selection").length?t.insertContent((n=d(e=t),'<div class="'+e.dom.encode(a(e))+'" contenteditable="false">'+n+"</div>")):f(t)}),c.addCommand("mceUpdateToc",function(){f(c)}),(r=t).ui.registry.addButton("toc",{icon:"toc",tooltip:"Table of contents",onAction:l,onSetup:u(r)}),r.ui.registry.addButton("tocupdate",{icon:"reload",tooltip:"Update",onAction:function(){return r.execCommand("mceUpdateToc")}}),r.ui.registry.addMenuItem("toc",{icon:"toc",text:"Table of contents",onAction:l,onSetup:u(r)}),r.ui.registry.addContextToolbar("toc",{items:"tocupdate",predicate:(i=r,function(t){return t&&i.dom.is(t,"."+a(i))&&i.getBody().contains(t)}),scope:"node",position:"node"}),n=(e=t).$,o=a(e),e.on("PreProcess",function(t){var e=n("."+o,t.node);e.length&&(e.removeAttr("contentEditable"),e.find("[contenteditable]").removeAttr("contentEditable"))}),e.on("SetContent",function(){var t=n("."+o);t.length&&(t.attr("contentEditable",!1),t.children(":first-child").attr("contentEditable",!0))})})}();