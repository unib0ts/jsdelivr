mybotGACode = 'G-R8L5HEPRNB';
mybotgabywa = '<script async src="https://www.googletagmanager.com/gtag/js?id='+mybotGACode+'"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "'+mybotGACode+'");</script>';

// mybotadSmall = '<div id="div-ub-1"></div>';
mybotadTarget = '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script><div id="gpt-passback"><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("/21959913182/sakshi_hb_320x50_top_mobile_new", [[320, 100], [320, 50], [300, 50], [300, 100]], "gpt-passback").addService(googletag.pubads());googletag.pubads().set("page_url","sakshi.com");googletag.enableServices();googletag.display("gpt-passback");});</script></div>';

  ub_ga = document.createElement("div");
  ub_ga.id = "gabywa";
  document.getElementsByTagName("head")[0].appendChild(ub_ga);
  document.getElementById("gabywa").innerHTML = mybotgabywa;
  loadAd("gabywa");


   ub_passback1();

   setInterval(function(){
      try{
         colombia.refresh('div-clmb-ctn-462955-1')
      }catch(e){}
   }, 30000);

 function ub_passback1() {
 //     return new Promise(function(resolve, reject) {
       if(typeof colombia == 'undefined'){
       var colombia = colombia || {};
       colombia.fns = colombia.fns || [];
         (function() {
             var cads = document.createElement("script");
             cads.async = true;
             cads.type = "text/javascript";
             cads.src = "https://static.clmbtech.com/ctn/commons/js/colombia_v2.js";
             document.getElementsByTagName('head')[0].appendChild(cads);
         })();
       }

       var ub_passback = document.createElement("div");
       ub_passback.setAttribute("style", "float:left;min-height:2px;width:100%;position:absolute;bottom:0;");
       ub_passback.setAttribute("data-position", "1");
       ub_passback.setAttribute("data-section", "StroyPage");
       ub_passback.setAttribute("class", "colombia");


         ub_passback.setAttribute("data-ua", "M");
         ub_passback.setAttribute("data-slot", "462955");
         ub_passback.setAttribute("id", "div-clmb-ctn-462955-1");
         document.getElementsByTagName("body")[0].appendChild(ub_passback);

       cubespinnervisibility();
  }

 function cubespinnervisibility() {
   var ub_clmb = setInterval(clmbdiv, 500);

   function clmbdiv() {
         if (document.querySelector('#div-clmb-ctn-462955-1').childNodes) {
           if (document.querySelector('#div-clmb-ctn-462955-1').childNodes[0]) {
                 ub_iframe = document.getElementById('ifr_462955-1');
                 ub_innerDoc = (ub_iframe.contentDocument) ? ub_iframe.contentDocument : ub_iframe.contentWindow.document;
                 ub_innerDoc = ub_innerDoc.querySelector('.main_div_swiper');

                 ub_z2 = document.createElement("div");
                 ub_z2.id = "ub-cmpgn-ad";
                 ub_z2.setAttribute('href',"https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget");
                 ub_z2.style = "color:#fff;line-height:11px;border-radius:5px;font-size:10px;width:130px;position:absolute;top:10px;text-align:center;right:26px;background-repeat:no-repeat;background-position:center;background-color:#17479e;";
                 ub_z2.innerText = "Powered By Unibots";
                 ub_innerDoc.appendChild(ub_z2);

                 // ub_innerDoc.querySelector('#ub-cmpgn-ad').addEventListener('click', function() {
                 //   window.open('https://unibots.in/?utm_source=unibots&utm_medium=cubeadwidget', '_blank');
                 // });
                 clearInterval(ub_clmb);
           }
         }
   }
 }


 function loadAd(id, adUnits) {
     var elm = document.getElementById(id);
     var scripts = Array(elm.querySelectorAll("script"));
     scripts = scripts[0];
     for (var i = 0; i < scripts.length; i++) {
         oldScript = scripts[i];
         const newScript = document.createElement("script");
         var scriptAttr = Array(oldScript.attributes);
         scriptAttr = scriptAttr[0];
         for (var j = 0; j < scriptAttr.length; j++) {
             attr = scriptAttr[j];
             newScript.setAttribute(attr.name, attr.value);
         }
         newScript.appendChild(document.createTextNode(oldScript.innerHTML));
         newScript.onload = function () {
             if (adUnits !== undefined) {
                 smartyads.buildUnits(adUnits);
             }
         };
         oldScript.parentNode.replaceChild(newScript, oldScript);
     }
 }
