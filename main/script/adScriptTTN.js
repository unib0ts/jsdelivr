var sizes = [[320, 50]];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 40000;

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var adUnits = [{
  code: '/21956033520/toptamilnews.com_NB_320x50',
  mediaTypes: {
	  banner: {
		  sizes: sizes
	  }
  },
  bids: [
    // {
    //   bidder: 'oftmedia',
    //   params: {placementId: '18671527'}
    // },
    {
      bidder: 'eplanning',
      params: {ci: '2cfed', ml: '1'}
    },
  ]
}];

var ubpbjs = ubpbjs || {};
ubpbjs.que = ubpbjs.que || [];

ubpbjs.que.push(function() {
  ubpbjs.addAdUnits(adUnits);
  ubpbjs.setConfig({
    userSync: {
        iframeEnabled: true
     },
   "currency": {
      // enables currency feature
      "adServerCurrency": "AED",
      "granularityMultiplier":3 ,
      // optionally override the default rate file
      "conversionRateFile": "https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/main/currency/currency.json",
      // optionally provide a default rate in case the file can't be read
      "defaultRates": { "USD": { "AED": 3.67 }}
    }
  });
  ubpbjs.requestBids({
    timeout: PREBID_TIMEOUT,
    adUnitCodes: ['/21956033520/toptamilnews.com_NB_320x50'],
    bidsBackHandler: initAdserver
  });
});

// ubpbjs.bidderSettings = {
//     oftmedia: {
//       bidCpmAdjustment: function(bidCpm){
//         return bidCpm*0.80;
//       }
// 	},
//     emx_digital: {
//       bidCpmAdjustment: function(bidCpm){
//         return bidCpm*0.80;
//       }
//     }
// };

ubpbjs.bidderSettings = {
    standard: {
        adserverTargeting: [{
            key: "hb_bidder",
            val: function(bidResponse) {
                return bidResponse.bidderCode;
            }
        }, {
            key: "hb_adid",
            val: function(bidResponse) {
                return bidResponse.adId;
            }
        }, {
            key: "hb_pb",
            val: function(bidResponse) {
                return bidResponse.pbHg;
            }
        }, {
            key: 'hb_size',
            val: function (bidResponse) {
                return bidResponse.size;
            }
        }, {
            key: 'hb_source',
            val: function (bidResponse) {
                return bidResponse.source;
            }
        }, {
            key: 'hb_format',
            val: function (bidResponse) {
                return bidResponse.mediaType;
            }
        }]
    }
}

var slot1;
googletag.cmd.push(function() {
  slot1 = googletag.defineSlot('/21956033520/toptamilnews.com_NB_320x50', sizes, 'div-ub-1')
	.addService(googletag.pubads());
  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
  googletag.pubads().addEventListener('slotRenderEnded', function(event) {
      if (event.slot === slot1) {
        ub_checkAdRendered();
      }
  });
});

function refreshBid() {
  ubpbjs.que.push(function() {
	  ubpbjs.requestBids({
		  timeout: PREBID_TIMEOUT,
		  adUnitCodes: ['/21956033520/toptamilnews.com_NB_320x50'],
		  bidsBackHandler: function() {
			  ubpbjs.setTargetingForGPTAsync(['/21956033520/toptamilnews.com_NB_320x50']);
			  googletag.pubads().refresh([slot1]);
		  }
	  });
  });
}

function initAdserver() {
  if (ubpbjs.initAdserverSet) return;
  ubpbjs.initAdserverSet = true;
  googletag.cmd.push(function() {
	  ubpbjs.setTargetingForGPTAsync && ubpbjs.setTargetingForGPTAsync();
	  googletag.pubads().refresh([slot1]);
  });
}

// in case ubpbjs doesn't load
setTimeout(function() {
  initAdserver();
}, FAILSAFE_TIMEOUT);


ub_adRefreshFlag = 0;
function ub_checkAdRendered(){
	adId = 'div-ub-1';
	var nodes = document.getElementById(adId).childNodes[0].childNodes;
	if(nodes.length && nodes[0].nodeName.toLowerCase() == 'iframe') {
    if(ub_adRefreshFlag != 1){
      setInterval(function() {
        ub_adRefreshFlag = 1;
        refreshBid();
      }, REFRESH_TIMEOUT);
    }
	 }
}
