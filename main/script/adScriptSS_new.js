!function(e,a,d,i,s,n,t){function o(d,i){a[e]._Q.push([d,i])}a[e]||(a[e]={init:function(){o("i",arguments)},fetchBids:function(){o("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},(n=d.createElement(i)).async=!0,n.src="//c.amazon-adsystem.com/aax2/apstag.js",(t=d.getElementsByTagName(i)[0]).parentNode.insertBefore(n,t))}("apstag",window,document,"script");var requestManager={adserverRequestSent:!1,aps:!1,prebid:!1};apstag.init({pubID:"8282b9c6-324d-4939-b1ea-958d67a9e637",adServer:"googletag"}),apSlots=[];var PREBID_TIMEOUT=2e3,FAILSAFE_TIMEOUT=3e3,REFRESH_TIMEOUT=6e4,GEO_CODE="";!function(){var e=new XMLHttpRequest;url="https://pro.ip-api.com/json/?fields=status,message,countryCode&key=LWKtz4EzQwMJRyQ",e.open("GET",url,!0),e.onload=function(){if(e.status>=200&&e.status<400){var a=e.responseText;"success"==(a=JSON.parse(a)).status?GEO_CODE=a.countryCode:console.error("Geo Request Failed")}else console.error("Request failed from server");mainHbRun()},e.onerror=function(){console.error("Request failed to Reach GEO Server"),mainHbRun()},e.send()}();const customConfigObjectA={buckets:[{precision:2,min:0,max:20,increment:.01}]};var div_1_sizes=[320,50],adUnits=[{code:"/1062118/Sakshi_RoadBlock_Dynapar_320x50_2022",mediaTypes:{banner:{sizes:div_1_sizes}},bids:[]}],googletag=googletag||{};googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){googletag.pubads().disableInitialLoad()});var ubpbjs=ubpbjs||{};function mainHbRun(){ubpbjs.que.push(function(){ubpbjs.setBidderConfig({bidders:["emx_digital"],config:{schain:{validation:"relaxed",config:{ver:"1.0",complete:1,nodes:[{asi:"unibots.in",sid:"1504",hp:1}]}}}}),ubpbjs.addAdUnits(adUnits),ubpbjs.aliasBidder("criteo","criteointl"),ubpbjs.bidderSettings={appnexus:{bidCpmAdjustment:function(e){return.86*e}},pubmatic:{bidCpmAdjustment:function(e){return.74*e}},rubicon:{bidCpmAdjustment:function(e){return.75*e}},criteo:{bidCpmAdjustment:function(e){return.75*e}},criteointl:{bidCpmAdjustment:function(e){return.75*e}},nobid:{bidCpmAdjustment:function(e){return 1*e}},oftmedia:{bidCpmAdjustment:function(e){return.8*e}},sovrn:{bidCpmAdjustment:function(e){return.81*e}},onetag:{bidCpmAdjustment:function(e){return.85*e}},"33across":{bidCpmAdjustment:function(e){return 1*e}},emx_digital:{bidCpmAdjustment:function(e){return 1*e}},rhythmone:{bidCpmAdjustment:function(e){return 1*e}},eplanning:{bidCpmAdjustment:function(e){return 1*e}}},ubpbjs.setConfig({rubicon:{singleRequest:!0},priceGranularity:customConfigObjectA,userSync:{iframeEnabled:!0,aliasSyncEnabled:!0,syncsPerBidder:999,filterSettings:{iframe:{bidders:[""],filter:"exclude"},image:{bidders:"*",filter:"include"}},userIds:[{name:"id5Id",params:{partner:438},storage:{type:"cookie",name:"id5id.1st",expires:90,refreshInSeconds:28800}}],auctionDelay:500},debug:!1,useBidCache:!0,enableSendAllBids:!1,bidderSequence:"random",publisherDomain:"https://www.sakshi.com/",bidderTimeout:PREBID_TIMEOUT+500})})}ubpbjs.que=ubpbjs.que||[];var s0=document.createElement("script");s0.src="https://securepubads.g.doubleclick.net/tag/js/gpt.js",s0.async="async",document.getElementsByTagName("head")[0].appendChild(s0),googletag.cmd.push(function(){googletag.defineSlot("/1062118/Unibot_Count_Pixel",[1,1],"div-gpt-ad-1638776087773-0").addService(googletag.pubads()),googletag.pubads().enableSingleRequest(),googletag.enableServices()});var ubsmall_slot1,ub_div1=document.createElement("div");function addNewsBotAd(){changeConfigToUSD(),googletag.cmd.push(function(){ubsmall_slot1=googletag.defineSlot("/1062118/Sakshi_RoadBlock_Dynapar_320x50_2022",div_1_sizes,"div-ub-1").addService(googletag.pubads()),googletag.pubads().collapseEmptyDivs(!0),googletag.pubads().setCentering(!0),googletag.pubads().setPrivacySettings({restrictDataProcessing:!0}),googletag.pubads().enableSingleRequest(),googletag.enableServices(),googletag.pubads().addEventListener("slotRenderEnded",function(e){"/1062118/Sakshi_RoadBlock_Dynapar_320x50_2022"===e.slot.getAdUnitPath()&&ub_checkAd1Rendered()})}),ubpbjs.que.push(function(){ubpbjs.requestBids({bidsBackHandler:initAdserver,timeout:PREBID_TIMEOUT})}),setTimeout(function(){initAdserver()},FAILSAFE_TIMEOUT)}function initAdserver(){ubpbjs.initAdserverSet||(ubpbjs.initAdserverSet=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(ubsmall_slot1)})}))}function refreshBid(e){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:["/1062118/Sakshi_RoadBlock_Dynapar_320x50_2022"],bidsBackHandler:function(){googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh([e])})})}})})}function ub_checkAd1Rendered(e){adId1="div-ub-1";document.getElementById(adId1).childNodes[0].childNodes}ub_div1.id="div-gpt-ad-1638776087773-0",ub_div1.innerHTML="<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1638776087773-0'); });<\/script>",document.getElementsByTagName("body")[0].appendChild(ub_div1),ub_ad1RefreshFlag=0;var mapping_full_hb={slots:[],adCode:[],slotNumbers:[],sizes:[],renderedFlag:[]},adUnits_full_hb=[],hb_full_common_bidders=[{bidder:"appnexus",params:{placementId:"19056673"}},{bidder:"oftmedia",params:{placementId:"20846125"}},{bidder:"adtelligent",params:{aid:726034}},{bidder:"33across",params:{siteId:"bPSPrGBuar6PWLaKlId8sQ",productId:"siab"},labelAll:["US"]},{bidder:"emx_digital",params:{tagid:"97515"}},{bidder:"rhythmone",params:{placementId:"205945"}},{bidder:"nobid",params:{siteId:"21987177881"}},{bidder:"onetag",params:{pubId:"60c32c42465aac2"}},{bidder:"rubicon",params:{accountId:"23976",siteId:"400078",zoneId:"2250744"}},{bidder:"adyoulike",params:{placementId:"2c2ca1653a87dd3ebe409bd5efbd611b"}}],mappings_full_hb_config={targetUnits:["div-gpt-ad-1618912602160-0","div-gpt-ad-1560233013253-0","div-gpt-ad-1560233087431-0","div-gpt-ad-1560233164388-0","div-gpt-ad-1511158697910-0","div-gpt-ad-1560232191899-0","div-gpt-ad-1560232377479-0","div-gpt-ad-1560232639192-0","div-gpt-ad-1560232568452-0","div-gpt-ad-1581144177758-0","div-gpt-ad-1560239369280-0","div-gpt-ad-1560239486596-0","div-gpt-ad-1560239628175-0","div-gpt-ad-1560239573343-0","div-gpt-ad-1560239855905-0","div-gpt-ad-1560239903945-0","div-gpt-ad-1577422203984-0","div-gpt-ad-1568699263235-0","div-gpt-ad-1560250742070-0","div-gpt-ad-1586515781967-0","div-gpt-ad-1560250931202-0","div-gpt-ad-1560250977307-0","div-gpt-ad-1560251033850-0","div-gpt-ad-1576678733140-0","div-gpt-ad-1560253279705-0","div-gpt-ad-1560253328585-0","div-gpt-ad-1560253372486-0","div-gpt-ad-1560253430624-0","div-gpt-ad-1579844188157-0","div-gpt-ad-1578660796348-0","div-gpt-ad-1540359629900-0","div-gpt-ad-1593080960785-0","div-gpt-ad-1599810044319-0","div-gpt-ad-1602146792829-0","div-gpt-ad-1602146824870-0","div-gpt-ad-1602146890612-0","div-gpt-ad-1643610918487-0"],adUnitNames:["/1062118/sakshiNew_Mobile_Inarticle2","/1062118/sakshiNew_box1_300x250","/1062118/sakshiNew_box2_300x250","/1062118/sakshiNew_Box3_300x250","/1062118/fullstories_300x50_firstslot","/1062118/sakshiNew_HP","/1062118/sakshiNew_skin_Left","/1062118/sakshiNew_skin_right","/1062118/SakshiNew_HP_Box_300x600","/1062118/Desktop_HP_300x100","/1062118/sakshiNew_Artclepage_LB","/1062118/sakshiNew_Artclepage_Skin_Left","/1062118/sakshiNew_Artclepage_skin_right","/1062118/sakshiNew_Artclepage_300x600","/1062118/sakshiNew_Artclepage_box1","/1062118/sakshiNew_Artclepage_Box2","/1062118/sakshiNew_Artclepage_INarticle","/1062118/Sakshi-Anchor_Ad","/1062118/Sakshi_Moblile_LB","/1062118/sakshiNEw_resp_Box2","/1062118/sakshiNEw_resp_Box3","/1062118/sakshiNEw_resp_Box4","/1062118/sakshiNEw_resp_Box5","/1062118/MobileMasthead_ROS_300x250","/1062118/sakshiNew_article_Box2","/1062118/sakshiNew_article_Box3","/1062118/sakshiNew_article_Box4","/1062118/sakshiNew_article_Box5","/1062118/320x50_Mobile_LB_New","/1062118/sakshinew_resp_Box1_entertainment_300x250","/1062118/MobileMasthead_HP_300x250","/1062118/Sakshi_RoadBlock_Dynapar_320x50_2022","/21959913182/sakshi_hb_320x50_top_mobile_new","/1062118/Mobile_Articlepage_adslot3","/1062118/Sakshi_Photos_Mobile_1","/1062118/Sakshi_Videos_Mobile_1","/1062118/Sakshi_Cartoon_Mobile_1","/1062118/SakshiNew_desk_home_header_728x90"],sizes:[[300,250],[300,250],[300,250],[300,250],[300,50],[[970,90],[728,90]],[[120,600],[160,600]],[[160,600],[120,600]],[[300,600],[300,250],[160,600],[120,600]],[300,100],[[970,90],[728,90]],[[160,600],[120,600]],[[160,600],[120,600]],[[300,600],[300,250],[160,600]],[[300,250]],[[300,250]],[[1,1],[300,250]],[[320,50],[300,50]],[[300,250],[336,280]],[[300,250],[320,100],[320,50],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[300,250],[336,280]],[[320,100],[336,280],[300,250]],[320,50],[300,250],[300,250],[[320,100],[320,50],[300,50],[300,100]],[[300,250],[336,280]],[300,250],[300,250],[300,250],[728,90]],bids:[hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"888283"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543454990",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-47B477B7EAE8E8D91E847D927E3ADB9E"}},{bidder:"sovrn",params:{tagid:"744054"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543454990",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-34B844B42E683D77172D342E3BEDE89"}},{bidder:"sovrn",params:{tagid:"744064"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543458039",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-273677374AE28722F88E8A44D97786B6"}},{bidder:"sovrn",params:{tagid:"744057"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543455757",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-9A29AA2A4B67A93E14E2DB89D46AB38A"}},{bidder:"sovrn",params:{tagid:"744089"}},{bidder:"openx",params:{unit:"543459080",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-2736773728B9D2B2F3D462BAA9E47DE"}},{bidder:"sovrn",params:{tagid:"744083"}},{bidder:"adsolut",params:{zoneId:"149450",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543458137",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-627D227296BD29340E4B3BAE2DE29847"}},{bidder:"sovrn",params:{tagid:"744068"}},{bidder:"openx",params:{unit:"543271183",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-77287727D6DA73DB18DA34BE26A9944"}},{bidder:"sovrn",params:{tagid:"744079"}},{bidder:"openx",params:{unit:"543457046",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-34B844B46E2AB22BF3B886BB7377366B"}},{bidder:"sovrn",params:{tagid:"744058"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"54345592",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-273677372287649D0862D9E6EA2B7499"}},{bidder:"openx",params:{unit:"543458925",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-273677379833D44E03D462BAA9E47DA"}},{bidder:"adsolut",params:{zoneId:"149450",host:"cpm.adsolut.in"}},{bidder:"sovrn",params:{tagid:"744067"}},{bidder:"openx",params:{unit:"543271061",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-273677378AA6A74DF862D9E6EA2B749D"}},{bidder:"sovrn",params:{tagid:"744072"}},{bidder:"openx",params:{unit:"543454901",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-34B844B42A372B3EF7B924368A9EE47"}},{bidder:"sovrn",params:{tagid:"744082"}},{bidder:"openx",params:{unit:"543457850",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-627D2272869AB2EBFE4B3BAE2DE29883"}},{bidder:"sovrn",params:{tagid:"744059"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543456852",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-D23422328E43D246082936DEA497769"}},{bidder:"sovrn",params:{tagid:"744075"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543455615",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-AA7BAA7A44AB44A2F8377E3328228EE4"}},{bidder:"sovrn",params:{tagid:"744066"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543270894",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-77287727DD6EDEBEFBD4DE4A6DEA6423"}},{bidder:"sovrn",params:{tagid:"744078"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543456697",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-AA7BAA7A4E24733DF88A83EE2BDD89EB"}},{bidder:"sovrn",params:{tagid:"744069"}},{bidder:"adsolut",params:{zoneId:"149449",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543271469",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-8A29AA2AE7D4AEA2C9EA42D6638A7E2"}},{bidder:"sovrn",params:{tagid:"744065"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543268667",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-8A29AA2A77AEDA980B6B327396D3E286"}},{bidder:"sovrn",params:{tagid:"744077"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543456615",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-77287727B84E4A39F837B439BD9792D"}},{bidder:"sovrn",params:{tagid:"744071"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543454780",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-47B477B724D23824FE74724BD72BD467"}},{bidder:"sovrn",params:{tagid:"744081"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543457464",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-E2B422B2D46D88E919E886E964D9E84"}},{bidder:"sovrn",params:{tagid:"744074"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543455522",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-AA7BAA7A26E69A99F838B4DB736B24A4"}},{bidder:"sovrn",params:{tagid:"744052"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543270086",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-77287727DB934E26FB94D68EDB736A89"}},{bidder:"sovrn",params:{tagid:"744076"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543456534",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-8A29AA2A8A7B2B32F9EA42D6638A7EA"}},{bidder:"sovrn",params:{tagid:"744070"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543454681",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-D2342232928E9D4E1D2DB37BA29B836E"}},{bidder:"sovrn",params:{tagid:"744080"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543457388",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-627D227282B62E84F6283AD447B892D"}},{bidder:"sovrn",params:{tagid:"744073"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543455356",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-9A29AA2A48973EBEC7E6DB3E746D76A"}},{bidder:"sovrn",params:{tagid:"744090"}},{bidder:"adsolut",params:{zoneId:"149449",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543459177",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-AA7BAA7A872EB3EA18377E3328228EEE"}},{bidder:"sovrn",params:{tagid:"744062"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543457236",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"ucfunnel",params:{adid:"ad-9A29AA22ADED76DD14D2B2A48348E9D8"}},{bidder:"sovrn",params:{tagid:"744032"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}},{bidder:"openx",params:{unit:"543268501",delDomain:"unibots-d.openx.net"},labelAny:["US","CA"]}]),hb_full_common_bidders.concat([{bidder:"adsolut",params:{zoneId:"149449",host:"cpm.adsolut.in"}}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"708881"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"789455"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"789456"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}}]),hb_full_common_bidders.concat([{bidder:"sovrn",params:{tagid:"789457"}},{bidder:"unibots",params:{zoneId:144261,host:"cpm.unibots.in"}},{bidder:"adsolut",params:{zoneId:"149448",host:"cpm.adsolut.in"}}]),hb_full_common_bidders.concat([])],isAP:[!1,!1,!1,!1,!1,!0,!0,!0,!0,!1,!0,!0,!0,!0,!1,!1,!0,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},mappings_extra_units_config={adUnitNames:["/1062118/Streamlyn_Test_Outstream_Dec-21","/1062118/TEST_INTERSTITIAL_DESK","/1062118/Mobile_home_LB2_300x250","/1062118/1x1_Sakshi.com_Live_Outstream_Desktop","/1062118/1x1_Sakshi.com_Live_Outstream_Mobile","/1062118/Intersitial_640x480_Desktop","/1062118/Intersitial_320x480_mobile","/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Homepage","/1062118/1x1_Sakshi.com_Live_Outstream_Desktop_Articlepage","/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Articlepage","/1062118/1x1_Sakshi.com_Live_Outstream_Mobile_Homepage","/1009127/Sakshi_DBS_Carousel","/1062118/sakshiNew_cinema_sports_Bussiness_box1","/1062118/sakshiNew_cinema_sports_Bussiness_box2","/1062118/sakshiNew_cinema_sports_Bussiness_box5","/21796214895/542194_Sakshi_block_1","/21796214895/542194_Sakshi_block_2","/21796214895/542194_Sakshi_block_3","/1062118/Intersitial_640x480_Desktop_Articlepage","/1062118/Intersitial_320x480_mobile_Articlepage","/1062118/masthead_2_inarticle_300x250","/1062118/AMP_Top_header_300x250","/1062118/Article_In_Image_ad_1x1","/1062118/sakshi_new_728x90_home_mid","/1062118/desktop_endofarticle_300x250","/1062118/desktop_468x60_home","/1062118/desktop_468x60_home_2","/1062118/Unibot_Count_Pixel","/1062118/sakshi_belowrichcards_Desk_Article_300X250","/1062118/Sakshi_Coronapage_300X250_2022","/1062118/sakshi_300X250_belowemojis_Article","/1062118/sakshi_HP_below_mainnews","/1062118/Sakshi_mobile_above_Cartoon","/1062118/SakshiNew_HP_Desk_RHS_secondfold","/1062118/SakshiNew_Article_Desk_RHS_secondfold","/1062118/sakshiNew_Mobile_Inarticle2","/1062118/sakshiNew_box1_300x250","/1062118/sakshiNew_box2_300x250","/1062118/sakshiNew_Box3_300x250","/1062118/fullstories_300x50_firstslot","/1062118/sakshiNew_HP","/1062118/sakshiNew_skin_Left","/1062118/sakshiNew_skin_right","/1062118/SakshiNew_HP_Box_300x600","/1062118/Desktop_HP_300x100","/1062118/sakshiNew_Artclepage_LB","/1062118/sakshiNew_Artclepage_Skin_Left","/1062118/sakshiNew_Artclepage_skin_right","/1062118/sakshiNew_Artclepage_300x600","/1062118/sakshiNew_Artclepage_box1","/1062118/sakshiNew_Artclepage_Box2","/1062118/sakshiNew_Artclepage_INarticle","/1062118/Sakshi-Anchor_Ad","/1062118/Sakshi_Moblile_LB","/1062118/sakshiNEw_resp_Box2","/1062118/sakshiNEw_resp_Box3","/1062118/sakshiNEw_resp_Box4","/1062118/sakshiNEw_resp_Box5","/1062118/MobileMasthead_ROS_300x250","/1062118/sakshiNew_article_Box2","/1062118/sakshiNew_article_Box3","/1062118/sakshiNew_article_Box4","/1062118/sakshiNew_article_Box5","/1062118/320x50_Mobile_LB_New","/1062118/sakshinew_resp_Box1_entertainment_300x250","/1062118/MobileMasthead_HP_300x250","/1062118/Sakshi_RoadBlock_Dynapar_320x50_2022","/21959913182/sakshi_hb_320x50_top_mobile_new","/1062118/Mobile_Articlepage_adslot3","/1062118/Sakshi_Photos_Mobile_1","/1062118/Sakshi_Videos_Mobile_1","/1062118/Sakshi_Cartoon_Mobile_1","/1062118/SakshiNew_desk_home_header_728x90"]},mappings_extra_units={slots:[],adUnitNames:[]};function checkHBUnits(){addNewsBotAd(),changeConfigToHB(),callMapUnits()}function fillRefreshMap(){googletag.cmd.push(function(){googletag.pubads().addEventListener("slotRenderEnded",function(e){var a=document.getElementById(e.slot.getSlotId().getDomId()).childNodes[0].childNodes;"iframe"==(a.length&&a[0].nodeName.toLowerCase())&&refreshBidfull([e.slot],[e.slot.getSlotId().getAdUnitPath()])})})}function refreshBidfull(e,a){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:a,adUnits:adUnits_full_hb,bidsBackHandler:function(){googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(e)})})}})})}function callFullHBAds(e,a){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnits:adUnits_full_hb,adUnitCodes:e,bidsBackHandler:function(){ubpbjs.initAdserverSetHB=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(a)})})}})})}function callExtraHBAds(e,a){ubpbjs.que.push(function(){ubpbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:e,bidsBackHandler:function(){ubpbjs.initAdserverSetHB=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(a)})})}})})}function initAdserver_hb_full(){ubpbjs.initAdserverSetHB||(ubpbjs.initAdserverSetHB=!0,googletag.cmd.push(function(){ubpbjs.que.push(function(){ubpbjs.setTargetingForGPTAsync(),googletag.pubads().refresh(mapping_full_hb.slots)})}))}function changeConfigToUSD(){ubpbjs.que.push(function(){ubpbjs.setConfig({currency:{adServerCurrency:"USD",granularityMultiplier:1,conversionRateFile:"https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",defaultRates:{USD:{USD:1}}}})})}function changeConfigToHB(){ubpbjs.que.push(function(){ubpbjs.setConfig({currency:{adServerCurrency:"INR",granularityMultiplier:75,conversionRateFile:"https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",defaultRates:{USD:{INR:75}}}})})}function biddersBack(){requestManager.aps&&requestManager.prebid&&sendAdserverRequest()}function sendAdserverRequest(){!0!==requestManager.adserverRequestSent&&(requestManager.adserverRequestSent=!0,googletag.cmd.push(function(){googletag.pubads().refresh(mapping_full_hb.slots),googletag.pubads().refresh(mappings_extra_units.slots)}))}function callAPStagBids(){apstag.fetchBids({slots:apSlots,timeout:2e3},function(e){googletag.cmd.push(function(){apstag.setDisplayBids(),requestManager.aps=!0,biddersBack()})})}function callMapUnits(){googletag.cmd.push(function(){for(x=googletag.pubads().getSlots(),x_len=x.length,i=0;i<x.length;i++)mappings_extra_units_config.adUnitNames.includes(x[i].getSlotId().getAdUnitPath())&&(mappings_extra_units.slots.push(x[i]),mappings_extra_units.adUnitNames.push(x[i]));callExtraHBAds(mappings_extra_units.adUnitNames,mappings_extra_units.slots)})}function mobileCheckHB(){var e,a=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0),a}hb_ran=!1,checkHBUnits();
