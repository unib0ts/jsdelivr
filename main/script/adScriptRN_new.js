var qw = document.querySelector('script[src="https://quizbot.playdoto.com/widget.js"]');
qw.onload = function(){
// if(typeof customConfigObjectA === 'undefined'){
  // setTimeout(function(){
  //quiz code
  // if (document.getElementById('unibots-qw')) {
  //   if (!mobileCheck()) {
  //     document.getElementById('unibots-qw').innerHTML = "<p id='doto-quizbot'> <script>(function(w,d,s,o,f,js,fjs){w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);}(window,document,'script','_hw','https://quizbot.playdoto.com/widget.js'));_hw('init',{publisherId:'RAF',embed:true,embedElementId:'doto-quizbot',isDesktop:true,widgetPublisherTitle:'Raftaar'});</script> </p>";
  //   }
  //   else {
  //     document.getElementById('unibots-qw').innerHTML = "<p id='doto-quizbot-m'> <script>(function(w,d,s,o,f,js,fjs){w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];js.id=o;js.src=f;js.async=1;fjs.parentNode.insertBefore(js,fjs);}(window,document,'script','_hwm','https://quizbot.playdoto.com/widget.js'));_hwm('init',{publisherId:'RAF',embed:true,embedElementId:'doto-quizbot-m',isDesktop:false,widgetPublisherTitle:'Raftaar'});</script> </p>";
  //   }
  //   loadAd('unibots-qw');
  // }

  var mybotstyleSheet='.ub-sticky-ad-container{width:100%;float:left;text-align:center;background:#fff;position:fixed;bottom:0;left:0;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;z-index:2147483647}.ub-sticky-ad{width:100%;z-index:2147483647;padding-top:4px}.close_ub-sticky-ad{display:none;position:absolute;top:-20px;background:#fff;color:#000;left:0px;pointer-events:all;height:20px;z-index:2147483647;width:30px;font-size:26px;line-height:23px;box-shadow:0 -3px 3px rgba(0,0,0,.2)!important;border-radius:2px 10px 0 0}.close_ub-sticky-addesk{display:none;top: -16px;right: -20px;font-size: 20px;padding: 0px 5px;border-radius: 50%;color: #fff;background: #000;position: absolute;pointer-events:all;cursor:pointer;z-index:2147483647;}.ub-sticky-ad-containerdesk{position:fixed;width:auto!important;bottom:0;left:50%;transform:translateX(-50%);z-index:2147483647}.article-ad-container{margin: 8px 0; clear:both;}';
	var css=document.createElement('style');
	css.type='text/css';
	css.appendChild(document.createTextNode(mybotstyleSheet));
	document.getElementsByTagName('head')[0].appendChild(css);

 var dfpjs = document.querySelector('script[src="https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021022501.js"]');
 function mobileCheck() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

  if (!mobileCheck()) {
		z= document.createElement('div');
		z.id = 'ub-sticky-ad-containerdesk';
		z.className = 'ub-sticky-ad-containerdesk';
		z.innerHTML ='<span class="close_ub-sticky-addesk" id="close_ub-sticky-ad" onclick="mybotubstickyadDesk()">\u0078</span><div class="ub-sticky-adDesk" id="desktopsticky"></div';
		x = document.querySelector('body');
		x.appendChild(z);
  }
  else {
    z1= document.createElement('div');
    z1.id = 'ub-sticky-ad-container';
    z1.className = 'ub-sticky-ad-container';
    z1.innerHTML ='<span class="close_ub-sticky-ad" id="close_ub-sticky-ad" onclick="mybotubstickyad()">\u0078</span><div class="ub-sticky-ad" id="mobilesticky"></div';
    x1 = document.querySelector('body');
    x1.appendChild(z1);
  }

 function mybotubstickyad() {
   document.getElementById('ub-sticky-ad-container').style.display='none';
 }

 function mybotubstickyadDesk() {
   document.getElementById('ub-sticky-ad-containerdesk').style.display='none';
 }

	var s0 = document.createElement('script');
	s0.src = "https://www.googletagservices.com/tag/js/gpt.js";
	s0.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(s0);

	var s1 = document.createElement('script');
	s1.async = "async";
	s1.src = "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/script/adScript.js";
	s1.type = "text/javascript";
	document.getElementsByTagName('head')[0].appendChild(s1);

	var div_1_sizes = [320, 50];
  var div_2_sizes = [[970, 90], [728, 90]];
  var div_3_sizes = [320, 50];
  var div_4_sizes = [468, 60];
  var adUnits = [];


  unibot1 = '<div id="div-gpt-ad-1617705616050-0">';
  unibot2 = '<div id="div-gpt-ad-1617705660422-0">';

  var PREBID_TIMEOUT = 2000;
  var FAILSAFE_TIMEOUT = 3000;
  var REFRESH_TIMEOUT = 60000;

  var GEO_CODE = '';
  (function (){
    var request = new XMLHttpRequest();
      url = 'https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ';
      request.open('GET', url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = request.responseText;
          data = JSON.parse(data);
          if(data.status == "success") {
            GEO_CODE = data.countryCode;
          }
          else {
            console.error("Geo Request Failed");
          }
        }
        else {
          console.error('Request failed from server');
        }
        mainHbRun();
      };
      request.onerror = function() {
        console.error('Request failed to Reach GEO Server');
        mainHbRun();
      };
      request.send();
  })();

  const customConfigObjectA = {
   "buckets" : [{
      "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
      "min" : 0,
      "max" : 20,
      "increment" : 0.01  // from $0 to $20, 1-cent increments
      }]
  };

if (!mobileCheck()) {
	adUnits1 =
	{
			code: '/21956916242/raftaar.in_hb_dsk_728x90',
			mediaTypes: {
					banner: {
							sizes: div_2_sizes
					}
			},
			bids: [
				{ bidder: 'appnexus', params: { placementId: '19056632' } }, /* one placementId for all sizes  my appnexus bidder */
				{ bidder: 'oftmedia', params: { placementId: '20846125' } },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507447'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-627DB99869BD684EF784B49DBA9EAD7'} },
				{ bidder: '33across', params: { siteId : 'btgriSWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
				{ bidder: 'emx_digital', params: { tagid: '97512' } }, /* sizeless */
				{ bidder: 'sovrn', params: {tagid: '867112'} },
				{ bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
				{ bidder: 'criteo', params: {networkId: '10542'} },
				{ bidder: 'criteointl', params: {networkId: '10545'} },
				{ bidder: 'openx', params: {unit: '543980999', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
			 // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
			 // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
			 // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
			 { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
			 // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
			 { bidder: 'nobid', params: { siteId : '22049999728'} },
       { bidder: 'smartadserver', params: { siteId: '362143', pageId: '1289644', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
				//{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
				// { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
			]
	};
	adUnits.push(adUnits1);
}
else {
	adUnits1 =
	{
			code: '/21956916242/raftaar.in_hb_mb_320x50',
			mediaTypes: {
					banner: {
							sizes: div_1_sizes
					}
			},
			bids: [
			 { bidder: 'appnexus', params: { placementId: '19056632' } }, /* one placementId for all sizes  my appnexus bidder */
				{ bidder: 'oftmedia', params: { placementId: '20846125' } },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507447'} },
        { bidder: 'ucfunnel', params: { adid : 'ad-34B8E9962EB23433C3239BA2B86DDBE8'} },
				{ bidder: '33across', params: { siteId : 'btgriSWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
				{ bidder: 'emx_digital', params: { tagid: '97512' } }, /* sizeless */
				{ bidder: 'sovrn', params: {tagid: '867111'} },
			{ bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
      { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
			{ bidder: 'nobid', params: { siteId : '22049999728'} },
			{ bidder: 'criteo', params: {networkId: '10542'} },
			{ bidder: 'criteointl', params: {networkId: '10545'} },
			{ bidder: 'openx', params: {unit: '543980998', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
      { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
      { bidder: 'smartadserver', params: { siteId: '362143', pageId: '1289644', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
				//{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
				// { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
			]
	};
	adUnits.push(adUnits1);
}
if (document.getElementById('doto-mobile')) {
        adUnits1 =
        {
            code: '/21928950349/raftaar.in_quizbot_320x50',
            mediaTypes: {
                banner: {
                    sizes: div_3_sizes
                }
            },
            bids: [
              { bidder: 'appnexus', params: { placementId: '19056632' } }, /* one placementId for all sizes  my appnexus bidder */
       				{ bidder: 'oftmedia', params: { placementId: '20846125' } },
              //  { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507447'} },
              //  { bidder: 'ucfunnel', params: { adid : 'ad-34B8E9962EB23433C3239BA2B86DDBE8'} },
       				// { bidder: '33across', params: { siteId : 'btgriSWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
       				{ bidder: 'emx_digital', params: { tagid: '97512' } }, /* sizeless */
       				// { bidder: 'sovrn', params: {tagid: '867111'} },
       			{ bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
             { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
       			{ bidder: 'nobid', params: { siteId : '22049999728'} },
       			{ bidder: 'criteo', params: {networkId: '10542'} },
       			{ bidder: 'criteointl', params: {networkId: '10545'} },
       			// { bidder: 'openx', params: {unit: '543980998', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
             { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
            //  { bidder: 'smartadserver', params: { siteId: '362143', pageId: '1289644', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
            ]
        };
        adUnits.push(adUnits1);
      }
if (document.getElementById('doto-desktop')) {
            adUnits1 =
            {
                code: '/21928950349/raftaar.in_quizbot_468x60',
                mediaTypes: {
                    banner: {
                        sizes: div_4_sizes
                    }
                },
                bids: [
                  { bidder: 'appnexus', params: { placementId: '19056632' } }, /* one placementId for all sizes  my appnexus bidder */
           				{ bidder: 'oftmedia', params: { placementId: '20846125' } },
                   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3507447'} },
                  //  { bidder: 'ucfunnel', params: { adid : 'ad-34B8E9962EB23433C3239BA2B86DDBE8'} },
           				// { bidder: '33across', params: { siteId : 'btgriSWuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] },
           				{ bidder: 'emx_digital', params: { tagid: '97512' } }, /* sizeless */
           				// { bidder: 'sovrn', params: {tagid: '867111'} },
           			{ bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
           			{ bidder: 'nobid', params: { siteId : '22049999728'} },
           			{ bidder: 'criteo', params: {networkId: '10542'} },
           			{ bidder: 'criteointl', params: {networkId: '10545'} },
           			// { bidder: 'openx', params: {unit: '543980998', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                 { bidder: 'rhythmone', params: { placementId: '205945'} }, /* one placementId for all sizes */
                //  { bidder: 'smartadserver', params: { siteId: '362143', pageId: '1289644', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
                ]
            };
            adUnits.push(adUnits1);
        }
  // ======== DO NOT EDIT BELOW THIS LINE =========== //
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
  googletag.cmd.push(function() {
      googletag.pubads().disableInitialLoad();
  });

  var ubpbjs = ubpbjs || {};
  ubpbjs.que = ubpbjs.que || [];

  function mainHbRun(){
  ubpbjs.que.push(function() {
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.aliasBidder('criteo','criteointl');
      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.86; } },
        'pubmatic': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.74; } },
        'rubicon': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'openx': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.75; } },
        'criteo': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        'criteointl': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        'nobid': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'oftmedia': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.80; } },
        'sovrn': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.81; } },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'onetag': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        // 'sonobi': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },
        // 'smartadserver': { bidCpmAdjustment: function(bidCpm){ return bidCpm*0.85; } },

        '33across': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'emx_digital': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'rhythmone': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },
        'eplanning': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } }
      };
      ubpbjs.setConfig({

      	priceGranularity: customConfigObjectA,
       //consentManagement: { gdpr: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400, allowAuctionWithoutConsent: true }, usp: { cmpApi: 'iab', timeout: PREBID_TIMEOUT*400 } },
        //cache: {url: "https://prebid.adnxs.com/pbc/v1/cache"},
        userSync: {
            iframeEnabled: true,
            syncsPerBidder: 999, // and no more than 3 syncs at a time
            // syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
            filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
            // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
            userIds: [{
                name: "id5Id",
                params: {
                    partner: 438,            // change to the Partner Number you received from ID5
                },
                storage: {
                    type: "cookie",
                    name: "id5id.1st",       // create a cookie with this name
                    expires: 90,             // cookie lasts for 90 days
                    refreshInSeconds: 8*3600 // refresh ID every 8 hours to ensure it is fresh
                }
            }],
            auctionDelay: 500},
        debug: false,
        useBidCache: true,
        enableSendAllBids: false, // Default will be `true` as of 1.0
        bidderSequence: 'random', // Default is random
        publisherDomain: 'https://www.raftaar.in/',
        bidderTimeout: PREBID_TIMEOUT+500,
        //pubcid: {expInterval: },
        // "currency": {
        //    // enables currency feature
        //    "adServerCurrency": "AED",
        //    "granularityMultiplier":3 ,
        //    // optionally override the default rate file
        //    "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
        //    // optionally provide a default rate in case the file can't be read
        //    "defaultRates": { "USD": { "AED": 3.67 }}
        //  }
       });
      ubpbjs.requestBids({
          bidsBackHandler: initAdserver,
          timeout: PREBID_TIMEOUT,
          labels: [GEO_CODE],
        });
    });
    // in case ubpbjs doesn't load
    setTimeout(function() {
        initAdserver();
    }, FAILSAFE_TIMEOUT);
  }

  var mappings = {
    slots: [],
    adCode: [],
    slotNumbers: [],
    sizes: [],
    adId: [],
    renderedFlag: [false, false,false, false]
  };

  function ub_checkAdRendered(adId, ub_slot, adCode){
    ub_slotNum = ub_slot[ub_slot.length-1]-1;
    if(!mappings.renderedFlag[ub_slotNum]){
      adId1 = adId;
      var nodes = document.getElementById(adId1).childNodes[0].childNodes;
      if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
				document.getElementById('close_ub-sticky-ad').style.display = 'block';
        setTimeout(function() {
          refreshBid(ub_slot, adCode);
        }, REFRESH_TIMEOUT);
        mappings.renderedFlag[ub_slotNum] = true;
      }
    }
  }

  function refreshBid(ub_slot, adCode) {
    ubpbjs.que.push(function(){
      ubpbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        adUnitCodes: adCode,
        bidsBackHandler: function() {
          googletag.cmd.push(function() {
            ubpbjs.que.push(function() {
                ubpbjs.setTargetingForGPTAsync();
                googletag.pubads().refresh([ub_slot]);
                var adsCalled = false;
                for(var i=0;i<x.length;i++){
                  var bc = x[i].bidderCode;
                  if(bc=="openx"){
                    adsCalled = true;
                    callBotman();
                  }
                }
                if(!adsCalled){
                  callAdsUB();
                }
            });
          });
        }
      });
    });
  }

  function initAdserver() {
      if (ubpbjs.initAdserverSet) return;
      ubpbjs.initAdserverSet = true;
      googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh(mappings.slots);
              var x = ubpbjs.getAllPrebidWinningBids();
              var adsCalled = false;
              for(var i=0;i<x.length;i++){
                var bc = x[i].bidderCode;
                if(bc=="openx"){
                  adsCalled = true;
                  callBotman();
                }
              }
              if(!adsCalled){
                callAdsUB();
              }
          });
      });
  }


  var botmanCalled = false;
  var userStatusBM = '';
  function callBotman(){
    if(userStatusBM == ''){
      var request = new XMLHttpRequest();
      var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=irctc';
      request.open('GET', url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = request.responseText;
          if(data != ""){
            data = JSON.parse(data);
            userStatusBM = data;
            if(userStatusBM == "0" || userStatusBM == "3"){
              callAdsUB();
            }
            else{
              console.log('Not Valid Traffic for openx');
            }
          }
          else{
            console.error('Data not returned from server');
            callAdsUB();
          }
        }
        else {
          console.error('Request failed from server');
          callAdsUB();
        }
      };
      request.onerror = function() {
        console.error('Request failed to Reach Server');
        callAdsUB();
      };
      request.send();
    }
    else{
      if(userStatusBM == "0" || userStatusBM == "3"){
        callAdsUB();
      }
      else{
        console.log('Not Valid Traffic for openx');
      }
    }

  }

  function callAdsUB(){
  	googletag.pubads().refresh(mappings.slots);
  }

  function googleDefine(slotNumbers, adCode, sizes, adId){
    for(var i=0; i<slotNumbers.length;i++){
      eval('ub_slot'+slotNumbers[i]+ '= '+'googletag.defineSlot(adCode[i], sizes[i], adId[i])');
      var a = eval('ub_slot'+slotNumbers[i]);
      a.addService(googletag.pubads());
      mappings.slots.push(eval('ub_slot'+slotNumbers[i]));
    }
  }

  function googlePush(){
    googletag.cmd.push(function() {
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().setCentering(true);
      googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });
  }


if (!mobileCheck()) {
  document.getElementById('desktopsticky').innerHTML='<div id="div-gpt-ad-1614757950116-0">';
	mappings.slotNumbers.push(2);
  mappings.adCode.push('/21956916242/raftaar.in_hb_dsk_728x90');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1614757950116-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1614757950116-0', ub_slot2, ['/21956916242/raftaar.in_hb_dsk_728x90']);
      }
    });
  });
}
else {
  document.getElementById('mobilesticky').innerHTML='<div id="div-gpt-ad-1614757921889-0">';
	mappings.slotNumbers.push(1);
  mappings.adCode.push('/21956916242/raftaar.in_hb_mb_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-gpt-ad-1614757921889-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-gpt-ad-1614757921889-0', ub_slot1, ['/21956916242/raftaar.in_hb_mb_320x50']);
      }
    });
  });
}

if (document.getElementById('doto-mobile')) {
  document.getElementById('doto-mobile').innerHTML = unibot1;
  mappings.slotNumbers.push(3);
  mappings.adCode.push('/21957769615/news18.com_quizbot_320x50');
  mappings.sizes.push(div_3_sizes);
  mappings.adId.push('div-gpt-ad-1617705616050-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot3) {
        ub_checkAdRendered('div-gpt-ad-1617705616050-0', ub_slot3, ['/21957769615/news18.com_quizbot_320x50']);
      }
    });
  });
}
if (document.getElementById('doto-desktop')) {
  document.getElementById('doto-desktop').innerHTML = unibot2;
  mappings.slotNumbers.push(4);
  mappings.adCode.push('/21928950349/raftaar.in_quizbot_468x60');
  mappings.sizes.push(div_4_sizes);
  mappings.adId.push('div-gpt-ad-1617705660422-0');
  googletag.cmd.push(function() {
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot4) {
        ub_checkAdRendered('div-gpt-ad-1617705660422-0', ub_slot4, ['/21928950349/raftaar.in_quizbot_468x60']);
      }
    });
  });
}

  if(typeof googletag.defineSlot === "function"){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
    googlePush();
  }
  else{
		setTimeout(function(){
	    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
	    googlePush();
	  }, 500);
  // }
 }

 // function loadAd(id, adUnits){
 // 	var elm = document.getElementById(id);
 // 	var scripts = Array(elm.querySelectorAll("script"));
 // 	scripts = scripts[0];
 // 	for(var i=0; i<scripts.length; i++) {
 // 		oldScript = scripts[i];
 // 		const newScript = document.createElement("script");
 // 		var scriptAttr = Array(oldScript.attributes);
 // 		scriptAttr = scriptAttr[0];
 // 		for(var j=0; j<scriptAttr.length; j++) {
 // 			attr = scriptAttr[j];
 // 			newScript.setAttribute(attr.name, attr.value);
 // 		}
 //     newScript.appendChild(document.createTextNode(oldScript.innerHTML));
 // 		newScript.onload = function() {
 // 			if(adUnits !== undefined) {
 // 				smartyads.buildUnits(adUnits);
 // 			}
 // 		};
 //     oldScript.parentNode.replaceChild(newScript, oldScript);
 // 	}
 // }
 	// }, 1000);
}
