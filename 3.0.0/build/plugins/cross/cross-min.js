/*!build time : 2015-03-18 11:02:28 AM*/
KISSY.add("kg/uploader/3.0.0/plugins/cross/xmppUtil",function(a){var b={begin:!1,localMap:{},token:"",maxid:0,initOcsIm:function(b,c){var d=this;a.IO({dataType:"jsonp",url:"//ocs.service.taobao.com/bfm.glyz",data:{tk:b,version:2,callback:"callbackX",maxid:c},jsonp:"callbackName",success:function(b){for(var c=0;c<b.length;c++){var e=parseInt(b[c].head.id);e>d.maxid&&(d.maxid=e);var f=b[c].cmd,g=b[c].body;"string"==typeof g&&(g=g.replace("\r\n",""),g=KISSY.JSON.parse(g));var h=g.subType,i=g.data,j=d.localMap[h],k=j.param;if(f&&"qrcodeCancle"==f)return j.hide(j),void a.later(function(){d.initOcsIm(d.token,d.maxid)},2e3);k.xmppcallback({data:i,bizMap:k})}a.later(function(){d.initOcsIm(d.token,d.maxid)},700)},error:function(b,c,d){a.log(c),a.log(d)}})},setToken:function(a){this.token=a},init:function(a){var b=this;1!=b.begin&&(b.begin=!0,b.initOcsIm(a,0))},registerXmpp:function(a,b){this.localMap[a]=b}};return b}),KISSY.add("kg/uploader/3.0.0/plugins/cross/qrcode",function(a,b,c,d){function e(b){var d={},e=b||{},f=e.bizMap;delete e.bizMap,a.mix(d,e),a.each(f,function(a,b){d["biz_"+b]=a}),d.subType||(d.subType="qrcode"+a.guid()),d.title&&(d.title=encodeURIComponent(d.title)),this.callback=b.callback,this.param=d,this.isRender=!1,this.isBind=!1,this.xmppUtil=n;var g=this;6==c.ie&&(g.$mask4ie6=a.all('<iframe src="about:blank" style="display:none; left:-9999px; top:-9999px;" class="tb-qrcode-sb-mask-4-ie6" ></iframe>'),a.ready(function(){a.all("body").append(g.$mask4ie6)}))}var f=b.all,g="//m.service.taobao.com/getQrCode.htm",h="//m.service.taobao.com/checkApp.htm",i="//m.service.taobao.com/qrCodeApi.htm",j="%E6%AD%A3%E5%9C%A8%E8%8E%B7%E5%8F%96%E4%BA%8C%E7%BB%B4%E7%A0%81..",k="";k+='	<div class="qrcode">',k+='<div class="loading"></div>',k+="	</div>";var l='<div class="qrcode-qr"><div class="hd">\u63a8\u8350\u4f7f\u7528<a href="//app.taobao.com/software/detail.htm?spm=a210u.1000874.0.0.BEz792&appId=520001" target="_blank">\u6dd8\u5b9d\u5ba2\u6237\u7aef</a>\u626b\u63cf\u4e0b\u9762\u7684\u4e8c\u7ef4\u7801\uff1a</div>';l+='<div class="bd">',l+='<div><span class="J_qrimg">'+decodeURIComponent(j)+"</span></div>",l+="</div>",l+='<div class="ft">',l+='<a href="#" class="J_close"><span>\u5173\u95ed</span></a>',l+="</div>",l+='<div class="preview-tip">\u5982\u679c\u624b\u673a\u7aef\u63d0\u793a\u4e0a\u4f20\u6210\u529f\uff0c\u9875\u9762\u6ca1\u6709\u6dfb\u52a0\u56fe\u7247\uff0c<br/>\u8bf7\u70b9\u51fb<a class="J_preview">\u624b\u52a8\u63d2\u5165</a></div>',l+="</div></div>";var m='<div class="app-title"><h3>\u8bf7\u6253\u5f00\u60a8\u624b\u673a\u4e0a\u7684\u6dd8\u5b9d\u5ba2\u6237\u7aef\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u624b\u673a\u4e0a\u4f20\u56fe\u7247\uff01</h3></div>';m+='<div class="app-body"><span>\u82e5\u957f\u65f6\u95f4\u6ca1\u6536\u5230\u6d88\u606f\uff0c\u5148\u624b\u52a8\u5f00\u542f\u6dd8\u5b9d\u5ba2\u6237\u7aef\uff0c\u518d\u70b9\u51fb</span><span><span class="J_QrCountdown count-down" data-count="10"></span><button class="J_QrRetry retry" type="button" style="display: none;">\u91cd\u53d1\u6d88\u606f</button></span></div>',m+='<div class="app-ft"><span><a href="#" class="J_App_Cancle">\u653e\u5f03\u4f20\u56fe</a></span></div>';var n=d;return a.augment(e,a.EventTarget,{checkApp:function(){var b=this;b.param.daily&&"true"==b.param.daily&&(h="//m.service.daily.taobao.net/checkApp.htm"),b.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:h,data:b.param,jsonpCallback:"CheckApp",success:function(a){var c=a;return b.param.qrid=c.qrid,b.param.mk=c.mk,b.param.t=c.t,b.xmppUtil.setToken(b.param.qrid),b.xmppUtil.init(b.param.qrid),c.appResult&&1==c.appResult?(b.container.addClass("qrcode-app").html(m),b.countDown(b.container.one(".J_QrCountdown"),function(){b.container.one(".J_QrCountdown").hide(),b.container.one(".J_QrRetry").show()}),b.isCheckApp=!0,void(b.$mask4ie6&&b.$mask4ie6.css({width:362,height:173}))):(b.container.html(l),b.getQR(function(){b.container.children().slideDown(.3)}),b.$mask4ie6&&b.$mask4ie6.css({width:222,height:294}),void(callback&&callback.call(b)))}})},countDown:function(a,b){var c=this,d=a.attr("data-count")||10,e=d;a.html(e+"\u79d2"),c.countdownInterval&&clearInterval(c.countdownInterval),c.countdownInterval=setInterval(function(){a.html(--e+"\u79d2"),"0"==e&&(clearInterval(c.countdownInterval),b())},1e3)},getQR:function(b){var c=this;c.param.daily&&"true"==c.param.daily&&(g="//m.service.daily.taobao.net/getQrCode.htm"),c.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:g,data:c.param,jsonpCallback:"QrCodeGetPic",success:function(a){var d=a,e=c.container.one(".J_qrimg"),f=document.createElement("img");f.onload=function(){e.html("").append(f),b&&b()},f.src=d.picurl}})},render:function(){var a=this,b=f(k);f(document.body).append(b),a.container=b,a.isRender=!0,a.bindEvent(),a.xmpp()},bindEvent:function(){var b=this;b.param.daily&&"true"==b.param.daily&&(i="//m.service.daily.taobao.net/qrCodeApi.htm"),b.container.delegate("click",".J_QrRetry",function(){b.param.api="retry",b.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:i,data:b.param,jsonpCallback:"QrCodeRetry",success:function(a){b.container.one(".J_QrCountdown").show(),b.countDown(b.container.one(".J_QrCountdown"),function(){b.container.one(".J_QrCountdown").hide(),b.container.one(".J_QrRetry").show()}),b.container.one(".J_QrRetry").hide()},error:function(){}})}),b.container.delegate("click",".J_App_Cancle",function(){b.param.daily&&"true"==b.param.daily&&(i="//m.service.daily.taobao.net/qrCodeApi.htm"),b.param.api="cancle",b.param._tt=(new Date).getTime(),a.IO({dataType:"jsonp",url:i,data:b.param,jsonpCallback:"QrCodeCancle",success:function(a){b.container.hide(),6==c.ie&&b.$mask4ie6.hide()},error:function(){}})}),b.container.delegate("click",".J_close",function(a){a.halt(),b.container.hide(),b.$mask4ie6&&b.$mask4ie6.css({left:-9999,top:-9999}).hide()}),b.container.delegate("click",".J_preview",function(a){a.halt(),b.previewUploadResult(b.param)})},show:function(){var a=this;a.isRender||a.render(),a.container.fadeIn(.3,function(){a.checkApp()}),a.$mask4ie6&&setTimeout(function(){a.$mask4ie6.css({left:a.container.css("left"),top:a.container.css("top")}).show()})},hide:function(a){var b=a||this;b.$mask4ie6&&b.$mask4ie6.css({left:-9999,top:-9999}).hide(),b.container.hide(),b.countdownInterval&&clearInterval(b.countdownInterval)},xmpp:function(){var a=this;a.xmppUtil.registerXmpp(a.param.subType,a)},xmppcallback:function(){},previewUploadResult:function(b){var c=this;a.IO({dataType:"jsonp",url:"//m.service.taobao.com/previewUploadResult.htm",jsonpCallback:"getPreviewResult",data:{qrid:b.qrid,mk:b.mk},success:function(a){1==a.success&&a.data&&c.param.xmppcallback(a.data)},error:function(){}})},offset:function(a,b){this.container.css({top:a,left:b})}}),e},{requires:["node","ua","./xmppUtil"]}),KISSY.add("kg/uploader/3.0.0/plugins/cross/cross",function(a,b,c,d){function e(){var a=arguments[1]||location.hostname,b=a.split("."),c=b.length,d=arguments[0]||(3>c?0:1);return(d>=c||2>c-d)&&(d=c-2),b.slice(d).join(".")}function f(){var a=e(-1);return"net"==a}function g(a){var b=this;g.superclass.constructor.call(b,a),b.set("userConfig",a)}var h="",i=b.all,j="//img01.daily.taobaocdn.net/consult/",k="//img02.taobaocdn.com/consult/";return a.extend(g,c,{pluginInitializer:function(a){if(!a)return!1;var b=this;b.set("uploader",a);var c=b.get("target");return c.length?void c.on("click",b._clickHandler,b):!1},_clickHandler:function(){var a=this,b=a._renderQR();if(!b)return!0;var c=a.get("target"),d=c.offset();b.show(),b.offset(d.top,d.left+c.outerWidth()+10)},_renderQR:function(){var a=this,b=a.get("qr");if(b)return b;var c=a._config();return b=new d(c),a.set("qr",b),b},_config:function(){var b=this,c=b.get("uploader"),d=c.getPlugin("auth"),e=b.get("userConfig"),g=e;if(d){var h={max:d.get("max"),type:d.get("allowExts").replace(/,/g,"/")};g=a.merge(h,e)}var i=f();b.set("daily",i);var l=i&&j||k;return b.set("imageUrl",l),a.mix(g,{daily:i,xmppcallback:function(a){b._xmppcallback(a.data)}}),g},_xmppcallback:function(b){var c=this;if(!a.isObject(b))return!1;a.log("mpp\u8fd4\u56de\u7684\u6587\u4ef6\u6570\u636e\u662f\uff1a"),a.log(b);var d=c.get("qr");if(!d)return!1;d.hide();{var e=c.get("uploader"),f=e.get("queue");c.get("imageUrl")}a.each(b.picUrls,function(a,c){var d={name:b.tfsUrls[c],url:a},g=f.add(d);g.result=d;var h=f.getFileIndex(g.id);f.fileStatus(h,"success"),e.fire("success",{index:h,file:g,result:d})})}},{ATTRS:{pluginId:{value:"mobileUploader"},target:{value:h,getter:function(a){return i(a)}},uploader:{value:h},userConfig:{value:{}},imageUrl:{value:h},qr:{value:h}}}),g},{requires:["node","base","./qrcode"]});