/*!build time : 2015-03-18 11:02:28 AM*/
KISSY.add("kg/uploader/3.0.0/plugins/cross/xmppUtil",function(a){var b={begin:!1,localMap:{},token:"",maxid:0,initOcsIm:function(b,c){var d=this;a.IO({dataType:"jsonp",url:"//ocs.service.taobao.com/bfm.glyz",data:{tk:b,version:2,callback:"callbackX",maxid:c},jsonp:"callbackName",success:function(b){for(var c=0;c<b.length;c++){var e=parseInt(b[c].head.id);e>d.maxid&&(d.maxid=e);var f=b[c].cmd,g=b[c].body;"string"==typeof g&&(g=g.replace("\r\n",""),g=KISSY.JSON.parse(g));var h=g.subType,i=g.data,j=d.localMap[h],k=j.param;if(f&&"qrcodeCancle"==f)return j.hide(j),void a.later(function(){d.initOcsIm(d.token,d.maxid)},2e3);k.xmppcallback({data:i,bizMap:k})}a.later(function(){d.initOcsIm(d.token,d.maxid)},700)},error:function(b,c,d){a.log(c),a.log(d)}})},setToken:function(a){this.token=a},init:function(a){var b=this;1!=b.begin&&(b.begin=!0,b.initOcsIm(a,0))},registerXmpp:function(a,b){this.localMap[a]=b}};return b});