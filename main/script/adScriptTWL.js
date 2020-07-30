var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

const customConfigObjectA = {
 "buckets" : [{
    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
    "min" : 0,
    "max" : 20,
    "increment" : 0.01  // from $0 to $20, 1-cent increments
    }]
};

var div_1_sizes = [[320, 100], [320, 50], [300, 100]];
var div_2_sizes = [300, 250];
var div_3_sizes = [[200, 200], [300, 250], [250, 250]];
var adUnits = [
    // {
    //   code: '/21928950349/thewall.in_NB_320x50',
    //     mediaTypes: {
    //         banner: {
    //             sizes: div_1_sizes
    //         }
    //     },
    //     bids: [
    //     	{ bidder: 'appnexus', params: { placementId: '19057843' } }, /* one placementId for all sizes  my appnexus bidder */
    //     	{ bidder: 'oftmedia', params: { placementId: '19671796' } },
    //     	{ bidder: '33across', params: { siteId : 'ai6yU0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
    //     	{ bidder: 'emx_digital', params: { tagid: '107912' } }, /* sizeless */
    //       { bidder: 'sovrn', params: {tagid: '714244'} },
    //       { bidder: 'criteo', params: {networkId: '10542'} },
    //       { bidder: 'criteointl', params: {networkId: '10545'} },
    //       { bidder: 'openx', params: {unit: '541046564', delDomain: 'yieldbird-d.openx.net'} },
    //     	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
    //       { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926310'} },
    //       { bidder: 'nobid', params: { siteId : '22027067872'} },
    //       //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
    //     	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } }
    //     ]
    // },
    {
      code: '/21928950349/thewall.in_NB_300x250',
        mediaTypes: {
            banner: {
                sizes: div_2_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19057843' } }, /* one placementId for all sizes  my appnexus bidder */
        	{ bidder: 'oftmedia', params: { placementId: '19671795' } },
        	{ bidder: '33across', params: { siteId : 'ai6yU0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
        	{ bidder: 'emx_digital', params: { tagid: '107912' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '735405'} },
          { bidder: 'openx', params: {unit: '541046564', delDomain: 'yieldbird-d.openx.net'} },
        	{ bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926308'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'nobid', params: { siteId : '22027067872'} },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
        	// { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } }
        ]
    },
    {
      code: '/21928950349/thewall.in_nb_300x250_hb',
        mediaTypes: {
            banner: {
                sizes: div_3_sizes
            }
        },
        bids: [
          { bidder: 'appnexus', params: { placementId: '19057843' } }, /* one placementId for all sizes  my appnexus bidder */
          { bidder: 'oftmedia', params: { placementId: '19671791' } },
          { bidder: '33across', params: { siteId : 'ai6yU0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
          { bidder: 'emx_digital', params: { tagid: '107912' } }, /* sizeless */
          { bidder: 'sovrn', params: {tagid: '735404'} },
          { bidder: 'openx', params: {unit: '541046564', delDomain: 'yieldbird-d.openx.net'} },
          { bidder: 'nobid', params: { siteId : '22027067872'} },
          { bidder: 'rhythmone', params: { placementId: '205945' } }, /* one placementId for all sizes */
          { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '2926309'} },
          { bidder: 'criteo', params: {networkId: '10542'} },
          { bidder: 'criteointl', params: {networkId: '10545'} },
          { bidder: 'nobid', params: { siteId : '22027067872'} },
          // //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
          // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } }
        ]
    }
];

// ======== DO NOT EDIT BELOW THIS LINE =========== //
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
    googletag.pubads().disableInitialLoad();
});

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

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
        syncDelay: PREBID_TIMEOUT*4, // 5 seconds after the auction
        filterSettings: { iframe: { bidders: [''], filter: 'exclude' }, image:  { bidders: '*', filter: 'include' } },
        // enableOverride: true // publisher will call `ubpbjs.triggerUserSyncs()'
      },
      debug: false,
      useBidCache: true,
      enableSendAllBids: false, // Default will be `true` as of 1.0
      bidderSequence: 'random', // Default is random
      publisherDomain: 'thewall.in',
      bidderTimeout: PREBID_TIMEOUT+500,
      //pubcid: {expInterval: },
      //currency: { 'adServerCurrency': "GBP", 'granularityMultiplier': 1, 'conversionRateFile': 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json', },
     });
    ubpbjs.requestBids({
        bidsBackHandler: initAdserver,
        timeout: PREBID_TIMEOUT
    });
});

function initAdserver() {
    if (ubpbjs.initAdserverSet) return;
    ubpbjs.initAdserverSet = true;
    googletag.cmd.push(function() {
        ubpbjs.que.push(function() {
            ubpbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh([ub_slot2, ub_slot3]);
        });
    });
}
// in case ubpbjs doesn't load
setTimeout(function() {
    initAdserver();
}, FAILSAFE_TIMEOUT);

var ub_slot1, ub_slot2, ub_slot3;
googletag.cmd.push(function() {
    // ub_slot1 = googletag.defineSlot('/21928950349/thewall.in_NB_320x50', div_1_sizes, 'div-ub-1').addService(googletag.pubads());
    ub_slot2 = googletag.defineSlot('/21928950349/thewall.in_NB_300x250', div_2_sizes, 'div-ub-2').addService(googletag.pubads());
    ub_slot3 = googletag.defineSlot('/21928950349/thewall.in_nb_300x250_hb', div_3_sizes, 'div-gpt-ad-1589043268569-0').addService(googletag.pubads());
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().setCentering(true);
    googletag.pubads().setPrivacySettings({ 'restrictDataProcessing': true });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.pubads().addEventListener('slotRenderEnded', function(event) {
        // if (event.slot === ub_slot1) {
        //   ub_checkAd1Rendered();
        // }
       if (event.slot === ub_slot2) {
          ub_checkAd2Rendered();
        }
        else if (event.slot === ub_slot3) {
          ub_checkAd3Rendered();
        }
        else if ((event.slot === ub_slot2) && (event.slot === ub_slot3)) {
          // ub_checkAd1Rendered();
          ub_checkAd2Rendered();
          ub_checkAd3Rendered();
        }
    });
});

function refreshBid(ub_slot) {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  // adUnitCodes: ['/21928950349/thewall.in_NB_320x50', '/21928950349/thewall.in_NB_300x250', '/21928950349/thewall.in_nb_300x250_hb'],
      adUnitCodes: ['/21928950349/thewall.in_NB_300x250', '/21928950349/thewall.in_nb_300x250_hb'],
		  bidsBackHandler: function() {
        googletag.cmd.push(function() {
          ubpbjs.que.push(function() {
              ubpbjs.setTargetingForGPTAsync();
              googletag.pubads().refresh([ub_slot]);
          });
        });
		  }
	  });
  });
}

// ub_ad1RefreshFlag = 0;
// function ub_checkAd1Rendered(){
// 	adId1 = 'div-ub-1';
// 	var nodes = document.getElementById(adId1).childNodes[0].childNodes;
// 	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
//     if(ub_ad1RefreshFlag != 1){
//       setInterval(function() {
//         ub_ad1RefreshFlag = 1;
//         refreshBid(ub_slot1);
//       }, REFRESH_TIMEOUT);
//     }
// 	 }
// }

ub_ad2RefreshFlag = 0;
function ub_checkAd2Rendered(){
	adId2 = 'div-ub-2';
	var nodes = document.getElementById(adId2).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad2RefreshFlag != 1){
      setInterval(function() {
        ub_ad2RefreshFlag = 1;
        refreshBid(ub_slot2);
      }, REFRESH_TIMEOUT);
    }
	 }
}

ub_ad3RefreshFlag = 0;
function ub_checkAd3Rendered(){
	adId3 = 'div-gpt-ad-1589043268569-0';
	var nodes = document.getElementById(adId3).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_ad3RefreshFlag != 1){
      setInterval(function() {
        ub_ad3RefreshFlag = 1;
        refreshBid(ub_slot3);
      }, REFRESH_TIMEOUT);
    }
	 }
}
