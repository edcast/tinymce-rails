tinymce.PluginManager.add("visualblocks",function(e,t){var n,a,r;window.NodeList&&(e.addCommand("mceVisualBlocks",function(){var i,o=e.dom;n||(n=o.uniqueId(),i=o.create("link",{id:n,rel:"stylesheet",href:t+"/css/visualblocks.css"}),e.getDoc().getElementsByTagName("head")[0].appendChild(i)),e.on("PreviewFormats AfterPreviewFormats",function(t){r&&o.toggleClass(e.getBody(),"mce-visualblocks","afterpreviewformats"==t.type)}),o.toggleClass(e.getBody(),"mce-visualblocks"),r=e.dom.hasClass(e.getBody(),"mce-visualblocks"),a&&a.active(o.hasClass(e.getBody(),"mce-visualblocks"))}),e.addButton("visualblocks",{title:"Show blocks",cmd:"mceVisualBlocks"}),e.addMenuItem("visualblocks",{text:"Show blocks",cmd:"mceVisualBlocks",onPostRender:function(){a=this,a.active(e.dom.hasClass(e.getBody(),"mce-visualblocks"))},selectable:!0,context:"view",prependToContext:!0}),e.on("init",function(){e.settings.visualblocks_default_state&&e.execCommand("mceVisualBlocks",!1,null,{skip_focus:!0})}))});