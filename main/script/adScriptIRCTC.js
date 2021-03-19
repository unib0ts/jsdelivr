if(typeof customConfigObjectA === 'undefined'){
  unibot1 = '<div id="div-gpt-ad-1601280866524-0">';
  unibot2 = '<div id="div-gpt-ad-1602952013756-0">';
  unibot3 = '<div id="div-gpt-ad-1602953590737-0">';
  ub_banner_ad1 = '<div id="div-gpt-ad-1610698887085-0">';
  ub_banner_ad2 = '<div id="div-gpt-ad-1613478315967-0">';
  ub_banner_ad3 = '<div id="div-gpt-ad-1613478570078-0">';
  // ub_sticky_ad = '<div id="div-gpt-ad-1610698846439-0">';
  // if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
  //   document.getElementById('ATD_Ad_IRCTC_320x50').innerHTML = unibot1;
  // }
  // var s3 = document.createElement('script');
  // s3.setAttribute("data-ad-client", "ca-pub-6376205116838079");
  // s3.async = true;
  // s3.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  // document.getElementsByTagName('head')[0].appendChild(s3);

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
  var div_2_sizes = [300, 250];
  // var div_3_sizes = [320, 50];
  // var div_4_sizes = [300, 600];
  var adUnits = [];

  var PREBID_TIMEOUT = 1000;
  var FAILSAFE_TIMEOUT = 3000;
  var REFRESH_TIMEOUT = 45000;

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

  currentDate = new Date();
  currentTS = currentDate.getDate();


  if((1<= currentTS) && (currentTS<=10)){
    if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
            adUnits1 =
            {
                code: '/21956916242/irctc.co.in_hb_320x50',
                mediaTypes: {
                    banner: {
                        sizes: div_1_sizes
                    }
                },
                bids: [
                 { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
                 { bidder: 'sovrn', params: {tagid: '777761'} },
                 { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
                 // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
                 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
                 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3225511'} },
                 { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA2B3DA64937EF89E83A4D6BDA938'} },
                 { bidder: 'criteo', params: {networkId: '10542'} },
                 { bidder: 'criteointl', params: {networkId: '10545'} },
                 { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                 // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
                 // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
                 // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
                 { bidder: 'openx', params: {unit: '543530412', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                 // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
                 // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
                 { bidder: 'nobid', params: { siteId : '22125676635'} },
                  //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
                  // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
                ]
            };
            adUnits.push(adUnits1);
          }
    if (document.getElementById('div-gpt-ad-1613413260012-0')) {
              adUnits1 =
              {
                  code: '/22140546871/irctc.co.in_cb_300x250',
                  mediaTypes: {
                      banner: {
                          sizes: div_2_sizes
                      }
                  },
                  bids: [
                   { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
                   // // { bidder: 'sovrn', params: {tagid: '777761'} },
                   // { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
                   // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
                   { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
                   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3438289'} },
                   // { bidder: 'ucfunnel', params: { adid : 'ad-AA7B29A67394A8EA08ED22964449BDBB'} },
                   // { bidder: 'criteo', params: {networkId: '10542'} },
                   // { bidder: 'criteointl', params: {networkId: '10545'} },
                   // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                   // // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
                   // // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
                   // // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
                   // { bidder: 'openx', params: {unit: '543981200', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                   // // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
                   // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
                   // { bidder: 'nobid', params: { siteId : '22125676635'} },
                    //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
                    // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
                  ]
              };
              adUnits.push(adUnits1);
          }
  }
  else if ((11<= currentTS) && (currentTS<=20)) {
    if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
            adUnits1 =
            {
                code: '/22140546871/irctc.co.in_hb_320x50',
                mediaTypes: {
                    banner: {
                        sizes: div_1_sizes
                    }
                },
                bids: [
                 { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
                 // { bidder: 'sovrn', params: {tagid: '777761'} },
                 { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
                 // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
                 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
                 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3225511'} },
                 // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA2B3DA64937EF89E83A4D6BDA938'} },
                 { bidder: 'criteo', params: {networkId: '10542'} },
                 { bidder: 'criteointl', params: {networkId: '10545'} },
                 { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                 // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
                 // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
                 // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
                 { bidder: 'openx', params: {unit: '543530412', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                 // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
                 // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
                 { bidder: 'nobid', params: { siteId : '22125676635'} },
                  //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
                  // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
                ]
            };
            adUnits.push(adUnits1);
          }
    if (document.getElementById('div-gpt-ad-1613413260012-0')) {
              adUnits1 =
              {
                  code: '/22142075243/irctc.co.in_cb_300x250_1',
                  mediaTypes: {
                      banner: {
                          sizes: div_2_sizes
                      }
                  },
                  bids: [
                   { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
                   // // { bidder: 'sovrn', params: {tagid: '777761'} },
                   // { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
                   // // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
                   { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
                   { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3438289'} },
                   // // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA2B3DA64937EF89E83A4D6BDA938'} },
                   // { bidder: 'criteo', params: {networkId: '10542'} },
                   // { bidder: 'criteointl', params: {networkId: '10545'} },
                   // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                   // // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
                   // // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
                   // // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
                   // { bidder: 'openx', params: {unit: '543530412', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                   // // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
                   // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
                   // { bidder: 'nobid', params: { siteId : '22125676635'} },
                    //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
                    // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
                  ]
              };
              adUnits.push(adUnits1);
          }
  }
  else {
    if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
            adUnits1 =
            {
                code: '/22142075243/irctc.co.in_hb_320x50',
                mediaTypes: {
                    banner: {
                        sizes: div_1_sizes
                    }
                },
                bids: [
                 { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
                 // { bidder: 'sovrn', params: {tagid: '777761'} },
                 { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
                 // // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
                 { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
                 { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3225511'} },
                 // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA2B3DA64937EF89E83A4D6BDA938'} },
                 { bidder: 'criteo', params: {networkId: '10542'} },
                 { bidder: 'criteointl', params: {networkId: '10545'} },
                 { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
                 // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
                 // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
                 // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
                 { bidder: 'openx', params: {unit: '543530412', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
                 // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
                 // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
                 { bidder: 'nobid', params: { siteId : '22125676635'} },
                  //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
                  // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
                ]
            };
            adUnits.push(adUnits1);
    }
    if (document.getElementById('div-gpt-ad-1613413260012-0')) {
        adUnits1 =
        {
            code: '/22057354005/irctc.co.in_cb_300x250_2',
            mediaTypes: {
                banner: {
                    sizes: div_2_sizes
                }
            },
            bids: [
             { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
             // // { bidder: 'sovrn', params: {tagid: '777761'} },
             // { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93232', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
             // // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
             { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
             { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3438289'} },
             // // { bidder: 'ucfunnel', params: { adid : 'ad-AA7BA2B3DA64937EF89E83A4D6BDA938'} },
             // { bidder: 'criteo', params: {networkId: '10542'} },
             // { bidder: 'criteointl', params: {networkId: '10545'} },
             // { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
             // // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
             // // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
             // // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
             // { bidder: 'openx', params: {unit: '543530412', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
             // // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
             // // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
             // { bidder: 'nobid', params: { siteId : '22125676635'} },
              //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
              // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
            ]
        };
        adUnits.push(adUnits1);
    }
  }
  // if (document.getElementById('ub-sticky-ad')) {
  //         adUnits1 =
  //         {
  //             code: '/22140546871/irctc.co.in_cb_320x50',
  //             mediaTypes: {
  //                 banner: {
  //                     sizes: div_3_sizes
  //                 }
  //             },
  //             bids: [
  //              { bidder: 'appnexus', params: { placementId: '20253127' } }, /* one placementId for all sizes  my appnexus bidder */
  //              { bidder: 'sovrn', params: {tagid: '777761'} },
  //              { bidder: 'smartadserver', params: { siteId: '372446', pageId: '1309518', formatId: '93231', domain: 'https://prg8.smartadserver.com' }, labelAny: ["US", "CA"] },
  //              // // //{ bidder: 'sonobi', params: { placement_id: 'e061c85c1bf277a0a913', ad_unit: 'ragalahari_NB_728x90' } },
  //              // { bidder: 'onetag', params: { pubId: '60c32c42465aac2' } },
  //              { bidder: 'pubmatic', params: { publisherId : '159448', adSlot: '3438287'} },
  //              { bidder: 'ucfunnel', params: { adid : 'ad-D2346A2839A338B6CBED4E8EDB84DEE'} },
  //              { bidder: 'criteo', params: {networkId: '10542'} },
  //              { bidder: 'criteointl', params: {networkId: '10545'} },
  //              { bidder: 'adyoulike', params: { placement: '2c2ca1653a87dd3ebe409bd5efbd611b'}, labelAll: ["US"] },
  //              // // // { bidder: 'oftmedia', params: { placementId: '18671523' } },
  //              // // { bidder: '33across', params: { siteId : 'c879m0WuGr6PjyaKlId8sQ', productId: 'siab' } }, /*All sizes*/
  //              // // // { bidder: 'emx_digital', params: { tagid: '97458' } }, /* sizeless */
  //              { bidder: 'openx', params: {unit: '543981199', delDomain: 'unibots-d.openx.net'}, labelAny: ["US", "CA"] },
  //              // // // { bidder: 'rhythmone', params: { placementId: '211538'}}, /* one placementId for all sizes */
  //              // // // { bidder: 'eplanning', params: { ci: '2cfed', ml: '1' } },
  //              { bidder: 'nobid', params: { siteId : '22125676635'} },
  //               //{ bidder: 'adsolut', params: {zoneId: '107071', host: 'cpm.adsolut.in'} },
  //               // { bidder: 'rubicon', params: {accountId: '11734', siteId: '323604', zoneId: '1680004'} }
  //             ]
  //         };
  //         adUnits.push(adUnits1);
  //       }
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
        publisherDomain: 'https://www.irctc.co.in/',
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
    renderedFlag: [false, false, false, false, false, false]
  };

  if((1<= currentTS) && (currentTS<=10)){
   ubad1();
  }
  else if ((11<= currentTS) && (currentTS<=20)) {
   ubad2();
  }
  else {
    ubad3();
  }

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
    ubpbjs.que.push(function(){
      ubpbjs.requestBids({
        timeout: PREBID_TIMEOUT,
        adUnitCodes: adCode,
        bidsBackHandler: function() {
          googletag.cmd.push(function() {
            ubpbjs.que.push(function() {
                ubpbjs.setTargetingForGPTAsync();
                // googletag.pubads().refresh([ub_slot]);
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
              // googletag.pubads().refresh(mappings.slots);
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
      // googletag.pubads().set("page_url",'https://www.irctc.co.in/');
      googletag.enableServices();
    });
  }

  function ubad1() {
    if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
      document.getElementById('ATD_Ad_IRCTC_320x50').innerHTML = unibot1;
      mappings.slotNumbers.push(1);
      mappings.adCode.push('/21956916242/irctc.co.in_hb_320x50');
      mappings.sizes.push(div_1_sizes);
      mappings.adId.push('div-gpt-ad-1601280866524-0');
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot1) {
            ub_checkAdRendered('div-gpt-ad-1601280866524-0', ub_slot1, ['/21956916242/irctc.co.in_hb_320x50']);
          }
        });
      });
    }
    if (document.getElementById('div-gpt-ad-1613413260012-0')) {
      // document.getElementById('ub-banner-ad').innerHTML = ub_banner_ad1;
      document.getElementById('div-gpt-ad-1613413260012-0').innerHTML = ub_banner_ad1;
      mappings.slotNumbers.push(4);
      mappings.adCode.push('/22140546871/irctc.co.in_cb_300x250');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1610698887085-0');
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot4) {
            ub_checkAdRendered('div-gpt-ad-1610698887085-0', ub_slot4, ['/22140546871/irctc.co.in_cb_300x250']);
          }
        });
      });
    }
  }
  function ubad2() {
    if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
      document.getElementById('ATD_Ad_IRCTC_320x50').innerHTML = unibot2;
      mappings.slotNumbers.push(2);
      mappings.adCode.push('/22140546871/irctc.co.in_hb_320x50');
      mappings.sizes.push(div_1_sizes);
      mappings.adId.push('div-gpt-ad-1602952013756-0');
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot2) {
            ub_checkAdRendered('div-gpt-ad-1602952013756-0', ub_slot2, ['/22140546871/irctc.co.in_hb_320x50']);
          }
        });
      });

    }
    if (document.getElementById('div-gpt-ad-1613413260012-0')) {
      // document.getElementById('ub-banner-ad').innerHTML = ub_banner_ad2;
      document.getElementById('div-gpt-ad-1613413260012-0').innerHTML = ub_banner_ad2;
      mappings.slotNumbers.push(5);
      mappings.adCode.push('/22142075243/irctc.co.in_cb_300x250_1');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1613478315967-0');
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot5) {
            ub_checkAdRendered('div-gpt-ad-1613478315967-0', ub_slot5, ['/22142075243/irctc.co.in_cb_300x250_1']);
          }
        });
      });
    }
  }
  function ubad3() {
    if (document.getElementById('ATD_Ad_IRCTC_320x50')) {
      document.getElementById('ATD_Ad_IRCTC_320x50').innerHTML = unibot3;
      mappings.slotNumbers.push(3);
      mappings.adCode.push('/22142075243/irctc.co.in_hb_320x50');
      mappings.sizes.push(div_1_sizes);
      mappings.adId.push('div-gpt-ad-1602953590737-0');
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot3) {
            ub_checkAdRendered('div-gpt-ad-1602953590737-0', ub_slot3, ['/22142075243/irctc.co.in_hb_320x50']);
          }
        });
      });
    }
    if (document.getElementById('div-gpt-ad-1613413260012-0')) {
      // document.getElementById('ub-banner-ad').innerHTML = ub_banner_ad3;
      document.getElementById('div-gpt-ad-1613413260012-0').innerHTML = ub_banner_ad3;
      mappings.slotNumbers.push(6);
      mappings.adCode.push('/22057354005/irctc.co.in_cb_300x250_2');
      mappings.sizes.push(div_2_sizes);
      mappings.adId.push('div-gpt-ad-1613478570078-0');
      googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
          if (event.slot === ub_slot6) {
            ub_checkAdRendered('div-gpt-ad-1613478570078-0', ub_slot6, ['/22057354005/irctc.co.in_cb_300x250_2']);
          }
        });
      });
    }
  }

  // if (document.getElementById('ub-sticky-ad')) {
  //   document.getElementById('ub-sticky-ad').innerHTML = ub_sticky_ad;
  //   mappings.slotNumbers.push(4);
  //   mappings.adCode.push('/22140546871/irctc.co.in_cb_320x50');
  //   mappings.sizes.push(div_3_sizes);
  //   mappings.adId.push('div-gpt-ad-1610698846439-0');
  //   googletag.cmd.push(function() {
  //     googletag.pubads().addEventListener('slotRenderEnded', function(event) {
  //       if (event.slot === ub_slot4) {
  //         ub_checkAdRendered('div-gpt-ad-1610698846439-0', ub_slot4, ['/22140546871/irctc.co.in_cb_320x50']);
  //       }
  //     });
  //   });
  // }

  if(typeof googletag.defineSlot === "function"){
    googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
    googlePush();
  }
  else{
    setTimeout(function(){
      googletag.cmd.push(function() {
        googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
        googlePush();
      });
      // googleDefine(mappings.slotNumbers, mappings.adCode, mappings.sizes, mappings.adId);
      // googlePush();
    }, 500);
  }
  // setTimeout(function() {
  //     initAdserver();
  // }, FAILSAFE_TIMEOUT);
}
