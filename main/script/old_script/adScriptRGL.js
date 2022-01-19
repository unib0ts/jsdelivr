// var s1 = document.createElement('script');
// s1.async = true;
// s1.setAttribute("id", "AV5f53b797a87256261f0b676c");
// s1.type = "text/javascript";
// s1.src = "https://tg1.aniview.com//api/adserver/spt?AV_TAGID=5f53b797a87256261f0b676c&AV_PUBLISHERID=5f466e970d71fa6f143050a9";
// document.getElementsByTagName('head')[0].appendChild(s1);
function mobileCheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

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

var div_1_sizes = [320, 50];
var div_2_sizes = [[728, 90], [468, 60]];
var adUnits = [];

  if(mobileCheck()){
    adUnits1 = {
           code: '/21928950349,22560027500/ragalahari.com_nb_320x50',
           mediaTypes: {
             native: {
               image: {
                 // sizes: [300, 100],
                 aspect_ratios: [{
                   min_width: 100,        /* Optional */
                   min_height: 50,       /* Optional */
                   ratio_width: 2,        /* Required */
                   ratio_height: 1,       /* Required */
                 }],
                 sendId: true
               },
               title: {
                 len: 50,
                 sendId: true
               },
               sponsoredBy: {
                 required: true,
                 sendId: true
               },
               clickUrl: {
                 required: true,
                 sendId: true
               }
             }
           },
           bids: [
             { bidder: 'appnexus', params: { placementId: '19056651' } }
             //{ bidder: 'oftmedia', params: { placementId: '18677505' } }
           ]
       },
    adUnits.push(adUnits1);
    adUnits1 = {
       code: '/21928950349,22560027500/ragalahari.com_nb_320x50',
       mediaTypes: {
     	  banner: {
     		  sizes: div_1_sizes
     	  }
       },
       bids: [
         { bidder: 'appnexus', params: { placementId: '19056651' } }, /* one placementId for all sizes  my appnexus bidder */
         { bidder: 'sovrn', params: {tagid: '710744'} },
         //{ bidder: 'oftmedia', params: { placementId: '18677505' } },
         { bidder: '33across', params: { siteId : 'c2MPT8WuGr6PjyaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
         { bidder: 'emx_digital', params: { tagid: '97514' } }, /* sizeless */
         // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
         { bidder: 'openx', params: {unit: '543530441', delDomain: 'unibots-d.openx.net'}},
         // { bidder: 'criteo', params: {networkId: '4902'} },
         { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2934578'} },
         { bidder: 'nobid', params: { siteId : '22049999731'} },
         { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
         // { bidder: 'criteo', params: {networkId: '10542'} },
         // { bidder: 'criteointl', params: {networkId: '10545'} },
         { bidder: 'ucfunnel', params: { adid : 'ad-E2B422827779D832C7A7B7EAA87E27A6'} },
           { bidder: 'smartadserver', params: { siteId: '362144', pageId: '1289645', formatId: '93231', domain: 'https://prg8.smartadserver.com' }},
          { bidder: 'sonobi', params: { placement_id: '1bfe1d896ceadf495e0e', ad_unit: 'ragalahari.com_NB_320x50' } },
          { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
          { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
         //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265424'} }
       ]
     }
    adUnits.push(adUnits1);

  }
  else{
    adUnits1 = {
      code: '/21928950349,22560027500/ragalahari.com_NB_728x90',
      mediaTypes: {
        banner: {
          sizes: div_2_sizes
        }
      },
      bids: [
        { bidder: 'appnexus', params: { placementId: '19056651' } }, /* one placementId for all sizes  my appnexus bidder */
        { bidder: 'sovrn', params: {tagid: '736462'} },
        //{ bidder: 'oftmedia', params: { placementId: '18677505' } },
        { bidder: '33across', params: { siteId : 'bNbIJABuar6PWLaKlId8sQ', productId: 'siab' }, labelAll: ["US"] }, /*All sizes*/
        { bidder: 'emx_digital', params: { tagid: '97514' } }, /* sizeless */
        // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
        { bidder: 'openx', params: {unit: '543851457', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
        { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2934577'} },
        { bidder: 'nobid', params: { siteId : '22049999731'} },
        // { bidder: 'criteo', params: {networkId: '10542'} },
        // { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'ucfunnel', params: { adid : 'ad-772877476E3A87DEC24E6E28438B499'} },
          { bidder: 'smartadserver', params: { siteId: '362144', pageId: '1289645', formatId: '93233', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
        { bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
        { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
        { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
        // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          { bidder: 'rubicon', params: {accountId: '23976', siteId: '400078', zoneId: '2265424'} }
      ]
      }
    adUnits.push(adUnits1);
  }


var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

var mappings = {
  slots: [],
  adCode: [],
  slotNumbers: [],
  sizes: [],
  adId: [],
  renderedFlag: [false, false]
};

function ub_checkAdRendered(adId, ub_slot, adCode){
  ub_slotNum = ub_slot[ub_slot.length-1]-1;
  if(!mappings.renderedFlag[ub_slotNum]){
    adId1 = adId;
    var nodes = document.getElementById(adId1).childNodes[0].childNodes;
    if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
      setTimeout(function() {
        refreshBid(ub_slot, adCode);
      }, REFRESH_TIMEOUT);
      mappings.renderedFlag[ub_slotNum] = true;
    }
  }
}

function refreshBid(ub_slot, adCode) {
  ubpbjs.que.push(function () {
    ubpbjs.requestBids({
      timeout: PREBID_TIMEOUT,
      adUnitCodes: adCode,
      bidsBackHandler: function (bids) {
        googletag.cmd.push(function () {
          ubpbjs.que.push(function () {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slot]);
            // console.log('HB server request');
          });
        });
        // callAds(bids);
      }
    });
  });
}

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function () {
    ubpbjs.que.push(function () {
      ubpbjs.setTargetingForGPTAsync();
      googletag.pubads().refresh(mappings.slots);
    });
  });
  // callAds(bids);
}


function callAds(bids = {}) {
  let ubBidscheckFlag = false;
  if (Object.keys(bids).length === 0 && bids.constructor === Object){}
  else {
    bids[Object.keys(bids)].bids.forEach((bid) => {
      if (bid.cpm > 0.01) {
        ubBidscheckFlag = true;
      }
    })
  }

  if (ubBidscheckFlag) {
    googletag.cmd.push(function () {
      ubpbjs.que.push(function () {
        ubpbjs.setTargetingForGPTAsync();
        googletag.pubads().refresh(mappings.slots);
        console.log('HB server request');
      });
    });
  }
  else{
    googletag.cmd.push(function () {
      googletag.pubads().refresh(mappings.slots);
      console.log('Only Google server request');
    });
  }
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

if(mobileCheck()){
  mappings.slotNumbers.push(1);
  mappings.adCode.push('/21928950349,22560027500/ragalahari.com_nb_320x50');
  mappings.sizes.push(div_1_sizes);
  mappings.adId.push('div-ub-1');
  googletag.cmd.push(function() {
    // callAPStagBids(); //Ap part
    // callAPSAds(mappings.adCode, mappings.slots);
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot1) {
        ub_checkAdRendered('div-ub-1', ub_slot1, ['/21928950349,22560027500/ragalahari.com_nb_320x50']);
      }
    });
  });
}
else {
  mappings.slotNumbers.push(2);
  mappings.adCode.push('/21928950349,22560027500/ragalahari.com_NB_728x90');
  mappings.sizes.push(div_2_sizes);
  mappings.adId.push('div-gpt-ad-1591180877761-0');
  googletag.cmd.push(function() {
    // callAPStagBids(); //Ap part
    // callAPSAds(mappings.adCode, mappings.slots);
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === ub_slot2) {
        ub_checkAdRendered('div-gpt-ad-1591180877761-0', ub_slot2, ['/21928950349,22560027500/ragalahari.com_NB_728x90']);
      }
    });
  });
}

if(typeof googletag.defineSlot === "function"){
  googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
  googlePush();
}
else{
  // setTimeout(function(){
    googletag.cmd.push(function() {
      googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      googlePush();
    });
  // }, 500);
}

var botmanCalled = false;
var userStatusBM = '';
function callBotman(){
  if(userStatusBM == ''){
    var request = new XMLHttpRequest();
    var url = 'https://ep7.10777.api.botman.ninja/ic2.php?m=AF&t=prebid&s=10777&b=10777&s15=ragalahari';
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
  if(mobileCheck === 'function'){
    if(mobileCheck()){
      googletag.pubads().refresh([ub_slot1]);
    }
    else {
      googletag.pubads().refresh([ub_slot2]);
    }
  }
  else {
      if(mobileCheckAdSript()){
         googletag.pubads().refresh([ub_slot1]);
      }
      else {
        googletag.pubads().refresh([ub_slot2]);
      }
  }
}

function mainHbRun(){
  ubpbjs.que.push(function() {
      ubpbjs.setBidderConfig({
      bidders: ['emx_digital'],   // can list more bidders here if they share the same config
      config: {
        schain: {
          validation: "relaxed",
          config: {
            ver:"1.0",
            complete: 1,
            nodes: [
              {
                asi:"unibots.in",   //directseller
                sid:"1504",     //seller_id
                hp:1
              },
            ]
          }
        }
      }
      });
      ubpbjs.addAdUnits(adUnits);
      ubpbjs.aliasBidder('criteo','criteointl');
      ubpbjs.bidderSettings = {
        'appnexus': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.86; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'pubmatic': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.74; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'rubicon': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'openx': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'criteo': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.75; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'nobid': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'oftmedia': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.80; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'sovrn': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 0.81; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        //'adsolut': { bidCpmAdjustment: function(bidCpm){ return bidCpm*1.00; } },

        '33across': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'emx_digital': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'rhythmone': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'eplanning': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'adyoulike': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'smartadserver': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'onetag': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } },
        'ucfunnel': { bidCpmAdjustment: function (bidCpm) { let temp = bidCpm * 1.00; temp = temp - 0.0323; return temp > 0 ? temp : 0; } }
      };
      ubpbjs.setConfig({
        floors: {
          currency: 'USD',
          // skipRate: 5,
          // modelVersion: 'Sports Ad Unit Floors',
          schema: {
              fields: ['mediaType']
          },
          values: {
              'banner': 0.01,
          }
        },
        schain: {
         validation: "relaxed",
         config: {
           ver:"1.0",
           complete: 1,
           nodes: [
             {
               asi:"unibots.in",
               sid:"86",
               hp:1
             }
           ]
         }
       },
       rubicon: {singleRequest: true},
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
            auctionDelay: 500
        },
        debug: false,
        useBidCache: true,
        enableSendAllBids: false, // Default will be `true` as of 1.0
        bidderSequence: 'random', // Default is random
        publisherDomain: 'https://www.ragalahari.com/',
        bidderTimeout: PREBID_TIMEOUT+500,
        //pubcid: {expInterval: },
        //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
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