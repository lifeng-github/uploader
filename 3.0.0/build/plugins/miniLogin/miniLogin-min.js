/*!build time : 2015-03-18 11:02:28 AM*/
KISSY.add("kg/uploader/3.0.0/plugins/miniLogin/miniLogin",function(a,b,c,d,e){function f(a){var b=this;f.superclass.constructor.call(b,a)}b.all;return a.extend(f,c,{pluginInitializer:function(a){return a?void a.on("select",function(){var b=e.check();if(!b){var c=a.get("autoUpload"),f=!1;c&&(a.set("autoUpload",!1),f=!0),e.show({},function(){d(a,function(){a.uploadFiles()}),f&&a.set("autoUpload",!0)})}}):!1}},{ATTRS:{pluginId:{value:"miniLogin"}}}),f},{requires:["node","base","../../token","tbc/mini-login/1.4.0/"]});