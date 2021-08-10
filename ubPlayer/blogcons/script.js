function isMobile() {
  var check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

function loadDynamicStyles(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('HEAD')[0].appendChild(link);
}

loadDynamicStyles("https://cdn.jsdelivr.net/npm/video.js@7.11.8/dist/video-js.min.css");
loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.css");
loadDynamicStyles("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.css");


function loadDynamicScript(url, tag, callback) {
  var s1 = document.createElement("script");
  s1.setAttribute("src", url);
  document.getElementsByTagName('body')[0].appendChild(s1);
  s1.onload = function () {
      scripts[tag] = true;
      if (callback) { callback() }
  }
}

var scripts = {
  "vjs": false,
  "vjs_ads": false,
  "vjs_ima": false,
  "can-autoplay": false
}

function listen_scripts() {
  var ub_interval = setInterval(() => {
      flag = false;
      for (x in scripts) {
          if (scripts[x] == false) { flag = true };
      }
      if (!flag) {
          console.log('all loaded');
          console.log(scripts);
          clearInterval(ub_interval);
          checkUnmutedAutoplaySupport();
          // isNearViewport(document.querySelector('#unibots-video'));
      }
  }, 500);
}

listen_scripts();


var ubIma = document.createElement("script");
ubIma.setAttribute("src", "https://imasdk.googleapis.com/js/sdkloader/ima3.js");
document.getElementsByTagName("body")[0].appendChild(ubIma);

ubIma.onload = function () {
  // load_player();
  loadDynamicScript("https://vjs.zencdn.net/7.11.4/video.min.js","vjs",post_scripts);

  var myPlayer ='<div id="ubVideo" class="ub-unloaded"><video id="content_video" class="video-js" playsinline controls="true" preload="auto"></video></div>';
  if (document.getElementById("unibots-video")) {
    document.getElementById("unibots-video").innerHTML = myPlayer;
  }
};

var post_scripts = () => {
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-contrib-ads@6.8.0/dist/videojs.ads.js", "vjs_ads");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.js", "vjs_ima");
  loadDynamicScript("https://cdn.jsdelivr.net/npm/can-autoplay@3.0.0/build/can-autoplay.min.js", "can-autoplay");
}

var autoplayAllowed = false;
var autoplayRequiresMute = false;
var ubPlayer;
var wrapperDiv;
var xml_path;
var stickyFlag = false;
var nearViewportFlag = false;
var viewportfirstFlag = false;
var checkFiftyViewportOne = false;
var checkFiftyViewportTwo = false;
var atleastOneAdServed = false;

function checkUnmutedAutoplaySupport() {
  canAutoplay.video({ timeout: 500, muted: false }).then(function (response) {
          if (response.result === false) {
              // Unmuted autoplay is not allowed.
              checkMutedAutoplaySupport();
          } else {
              // Unmuted autoplay is allowed.
              autoplayAllowed = true;
              autoplayRequiresMute = false;
              initPlayer();
          }
      })
}

function checkMutedAutoplaySupport() {
  canAutoplay.video({ timeout: 500, muted: true }).then(function (response) {
          if (response.result === false) {
              console.log("// Muted autoplay is not allowed.");
              autoplayAllowed = false;
              autoplayRequiresMute = false;
          } else {
              console.log("// Muted autoplay is allowed.");
              autoplayAllowed = true;
              autoplayRequiresMute = true;
          }
          initPlayer();
      })
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function initPlayer() {

  if (document.getElementById('unibots-video')) {
      var video = document.getElementById('content_video');
      videojs.browser.IS_IOS ? video.setAttribute('playsinline', '') : '';
      let adsIndex = 1;
      let firstFlag = true;

      var vjsOptions = {
          autoplay: false,
          muted: false,
          loadingSpinner: false,
          bigPlayButton: false,
          width: 344,
          height: 258,
          controlBar: {
              volumePanel: {
                  inline: false,
                  vertical: true
              },
              'pictureInPictureToggle': false,
              'fullscreenToggle': false,
          }
      }

      ts = + new Date();
      var desc_url = encodeURIComponent(window.location.href);
      // var desc_url = "https%3A%2F%2Fandhrajyothy.com";

      var adsArray = [
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpta_preroll&description_url=' + desc_url + '&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 5,
          src: 'adx'
        },
        {
          ads: [
            'https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=blogcons.com_adx_preroll&ad_type=video&description_url=' + desc_url + '&videoad_start_delay=0&hl=en&vpmute=0&vpa=auto&adsafe=low',
          ],
          type: 'preroll',
          delay: 0,
          src: 'adx'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpta_preroll&description_url=' + desc_url + '&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 5,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpta_preroll&description_url=' + desc_url + '&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 20,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'gpt'
        },
        {
          ads: [
            'https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=blogcons.com_adxa1_preroll&ad_type=video&description_url=' + desc_url + '&videoad_start_delay=0&vpa=auto&vpmute=0&max_ad_duration=18000000&sdmax=18000000&adsafe=low&hl=en',
          ],
          type: 'preroll',
          delay: 15,
          src: 'mixed'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'mixed'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 10,
          src: 'mixedReverse'
        },
        {
          ads: [
            'https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=blogcons.com_adx_preroll&ad_type=video&description_url=' + desc_url + '&videoad_start_delay=0&hl=en&vpmute=0&vpa=auto&adsafe=low',
          ],
          type: 'preroll',
          delay: 0,
          src: 'mixedReverse'
        },
        {
          ads: [
            'https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=blogcons.com_adxa1_preroll&ad_type=video&description_url=' + desc_url + '&videoad_start_delay=0&vpa=auto&vpmute=0&max_ad_duration=18000000&sdmax=18000000&adsafe=low&hl=en',
          ],
          type: 'preroll',
          delay: 30,
          src: 'adx'
        },
        {
          ads: [
            'https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-2730263451308801&slotname=blogcons.com_adx_preroll&ad_type=video&description_url=' + desc_url + '&videoad_start_delay=0&hl=en&vpmute=0&vpa=auto&adsafe=low',
          ],
          type: 'preroll',
          delay: 0,
          src: 'adx'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpta_preroll&description_url=' + desc_url + '&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 10,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpta_preroll&description_url=' + desc_url + '&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 10,
          src: 'gpt'
        },
        {
          ads: [
            'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          ],
          type: 'preroll',
          delay: 0,
          src: 'gpt'
        }
      ];

      var makePrerollRequestNew = (index, singleAdStructure = false) => {
          return adsArray[index]["ads"][0]
      }

      
      // var ubPlayer_src = [
      //     "https://cdn.unibots.in/abn/cgjg.mp4",
      //     "https://cdn.unibots.in/abn/changes_in_ap_bjp.mp4",
      //     "https://cdn.unibots.in/abn/debut.mp4",
      //     "https://cdn.unibots.in/abn/forest_officer_vs_potu_rangarao.mp4"
      // ];
      // var src_index = Math.floor(Math.random() * 3) + 1;


      ubPlayer = videojs('content_video', vjsOptions);
      ubPlayer.src({
          type: "video/mp4",
          src: "https://cdn.unibots.in/yoga.mp4",
      });

      var imaOptions = {
          id: "content_video",
          adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21928950349/blogcons.com_gpt_preroll&description_url='+desc_url+'&vpos=preroll&tfcd=0&npa=0&sz=256x144%7C384x216%7C400x225%7C640x360&max_ad_duration=360000000&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s',
          disableCustomPlaybackForIOS10Plus: true,
          contribAdsSettings: {
              debug: true,
          },
          // autoPlayAdBreaks: false,
          vastLoadTimeout: 2e4,
          adsManagerLoadedCallback: () => {
                ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.COMPLETE,() => {
                    // console.log("ad completed");
                    stickyFlag = false;
                    // console.log(`Triggered ${stickyFlag}`)
                    toggleSticky();
                });
                ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.SKIPPED,() => {
                    // console.log("ads SKIPPED");
                    stickyFlag = false;
                    toggleSticky();
                });
                ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.STARTED,() => {
                    // console.log("ads started");
                    stickyFlag = true;
                    toggleSticky();
                });
                ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.LOADED,(e) => {
                    // console.log("AD LOADED \n",e);
                    stickyFlag = true;
                    showPlayer();
                    ubPlayer.autoplay(true);
                    ubPlayer.play();
                    ubPlayer.ima.resumeAd();
                    toggleSticky();
                });

                ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED, () => {
                    ubPlayer.ima.getAdsManager().destroy();
                    ubPlayer.ima.controller.sdkImpl.adsLoader.contentComplete();
                    // ubPlayer.ima.AdsLoader.contentComplete();
                    if (adsIndex < adsArray.length) {
                      console.log(adsIndex);
                      newIMA(adsIndex++);
                    }
                });
                ubPlayer.ima.addEventListener(google.ima.AdEvent.Type.SKIPPED, () => {
                    ubPlayer.ima.getAdsManager().destroy();
                    ubPlayer.ima.controller.sdkImpl.adsLoader.contentComplete();
                    // ubPlayer.ima.AdsLoader.contentComplete();
                    if (adsIndex < adsArray.length) {
                      console.log(adsIndex);
                      newIMA(adsIndex++);
                    }
                });
          }
      };
      ubPlayer.ima(imaOptions);
      
      let newIMA = (adsIndex) => {
          setTimeout(() => {
              ubPlayer.ima.changeAdTag(makePrerollRequestNew(adsIndex));
              ubPlayer.ima.requestAds();
          }, adsArray[adsIndex].delay * 1000); //While using Defined ad dealy
      }

      ubPlayer.on('adserror', function (err) {
          if (err.data.AdError.getErrorCode() == 1009) {
              ubPlayer.ima.controller.sdkImpl.adsLoader.contentComplete();
              // ubPlayer.ima.AdsLoader.contentComplete();
              if (adsIndex < adsArray.length) {
                  newIMA(adsIndex++);
              }
          }
          else {
              console.log(err.data.AdError.getMessage());
          }
              showPlayer();
              runVideo();
          }.bind(ubPlayer)
      );

      // ubPlayer.on('loadedmetadata', () => {
      //     // console.log("ads ready");
      //     showPlayer();
      // });

      const runVideo = () => {
          if (firstFlag) {
              firstFlag = false;
              if (autoplayAllowed) {
                  if (autoplayRequiresMute) {
                      ubPlayer.muted(true);
                  }
                  ubPlayer.muted(true);
                  ubPlayer.autoplay(true);
                  ubPlayer.play();
              }

              if (!autoplayAllowed) {
                  ubPlayer.muted(true);
                  ubPlayer.autoplay(true);
                  ubPlayer.play();

                  if (navigator.userAgent.match(/iPhone/i) ||
                      navigator.userAgent.match(/iPad/i) ||
                      navigator.userAgent.match(/Android/i)) {
                      startEvent = 'touchend';
                  }

                  wrapperDiv = document.getElementById('content_video');
                  wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);
              }
              //only if page loaded with player inviewport
              if(isInViewport(document.querySelector('#unibots-video'))){
                  ubPlayer.autoplay(true);
                  ubPlayer.play();
              }
          }

      }
      ubPlayer.on('adsready', () => {
          runVideo();
      })

      ubPlayer.on('play', () => {
          ubPlayer.volume(0.1);
          if (!ubPlayer.muted()) {
              ubPlayer.muted(true);
          }
      });

      var button = videojs.getComponent('CloseButton');
      var CloseButton = videojs.extend(button, {
          constructor: function () {
              button.apply(this, arguments);
              this.controlText("Close Player");
              // this.addClass('vjs-icon-cancel');
          },
          handleClick: function () {
              this.player().dispose();
          }
      });
      videojs.registerComponent('CloseButton', CloseButton);
      ubPlayer.addChild('CloseButton');

      // var button = videojs.getComponent("button");
      // var clButton = videojs.extend(button, {
      //     constructor: function () {
      //         button.apply(this, arguments);
      //         this.controlText("View More");
      //         this.addClass("vjs-customButton");
      //     },
      //     handleClick: function () {
      //         window.open(
      //             "https://www.youtube.com/channel/UC_2irx_BQR7RsBKmUV9fePQ",
      //             "_blank"
      //         );
      //     },
      // });
      // videojs.registerComponent("Mybutton", clButton);
      // ubPlayer.addChild("Mybutton");

      //close player on video end.
      ubPlayer.on('timeupdate', function () {
          if (ubPlayer.currentTime() == ubPlayer.duration()) {
              console.log('video is ended');
              ubPlayer.dispose();
          }
      });
      setLogo();

      // if (!isMobile() && window.location.href != "https://docbao.vn/") {
      if (document.getElementById("unibots-video")) {
          window.addEventListener('scroll', function () {
              toggleSticky();
          });
      // }

          
       //end of if statement   
      } 

      // window.addEventListener('scroll', function () {
      //     if(checkfifty(document.querySelector("#unibots-video"))){
      //         // console.log("inviewport");
      //         if(!checkFiftyViewportOne){
      //             checkFiftyViewportOne = true;
      //             checkFiftyViewportTwo = true;
      //             ubPlayer.autoplay(true);
      //             ubPlayer.play();                  
      //             if(ubPlayer.ads.inAdBreak()){
      //                   ubPlayer.ima.resumeAd();
      //             }
      //         }
      //     }else{
      //         // console.log("outofview");
      //         if(!checkFiftyViewportTwo){
      //             ubPlayer.on('ready',()=>{
      //                 ubPlayer.autoplay(true);
      //                 ubPlayer.pause();
      //                 if(ubPlayer.ads.inAdBreak()){
      //                     ubPlayer.ima.pauseAd();
      //                 }
      //             });
      //         }
      //     }
      // });
      // isNearViewport(document.querySelector('#unibots-video'));

  }
}
const toggleSticky = () => {
  let currentPlayer = document.querySelector('#unibots-video');
  let targetDiv = document.getElementById("ubVideo");

  if (isInViewport(currentPlayer)) {
      if (targetDiv.classList.contains("ubsticky")) {
          targetDiv.classList.remove("ubsticky");
      }
  } else {
      if (stickyFlag) {
          if (!targetDiv.classList.contains("ubsticky")) {
              targetDiv.classList.add("ubsticky");
          }
      }
      else {
          if (targetDiv.classList.contains("ubsticky")) {
              targetDiv.classList.remove("ubsticky");
          }
      }
  }
}


function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.bottom > 0 &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight);
}

// function isNearViewport(el) {
//   let observer = new IntersectionObserver(function (entries) {
//       if (entries[0].isIntersecting) {
//           if (!viewportfirstFlag) {
//               // checkUnmutedAutoplaySupport();
//             viewportfirstFlag = true;
//             ubPlayer.play();
//             if(ubPlayer.ads.inAdBreak()){
//                 ubPlayer.ima.resumeAd();
//             }
//           }
//           nearViewportFlag = true;

//       }
//       if (!(entries[0].isIntersecting)) {
//             if(!viewportfirstFlag){
//               ubPlayer.pause();                  
//               if(ubPlayer.ads.inAdBreak()){
//                 ubPlayer.ima.pauseAd();
//               }
//             }
//            nearViewportFlag = false;
//       }
//   }, { threshold: [0], rootMargin: "640px 0px 640px 0px" });
//   observer.observe(el);
// }

function checkfifty(el) {
  const rect = el.getBoundingClientRect();
  
  return rect.top + (rect.height/2) > 0 &&
      rect.left + (rect.width/2) > 0 &&
      rect.top + (rect.height/2) < (window.innerHeight || document.documentElement.clientHeight) && 
      rect.left + (rect.width/2) < (window.innerWidth || document.documentElement.clientWidth);
}


function initAdDisplayContainer() {
  ubPlayer.ima.initializeAdDisplayContainer();
  wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}

var startEvent = 'click';

function showPlayer() {
  document.querySelector("#ubVideo").classList.remove("ub-unloaded");
  document.querySelector("#ubVideo").classList.add("ub-loaded");
}
function hidePlayer() {
  document.querySelector("#ubVideo").classList.remove("ub-loaded");
  document.querySelector("#ubVideo").classList.add("ub-unloaded");
}


function setLogo() {
  let i = document.createElement("a");
  i.href = "https://unibots.in";
  i.target = "_blank";
  i.id = "ubp_logo";
  i.classList.add = "ubp_logo";
  i.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/unib0ts/unibots@latest/ubPlayer/ub/logo.svg" alt="Unibots.in" style="vertical-align:middle;height:11px">';
  ubPlayer.el_.appendChild(i);
}
function ready(fn){if(document.readyState!='loading'){fn()}else if(document.addEventListener){document.addEventListener('DOMContentLoaded',fn)}else{document.attachEvent('onreadystatechange',function(){if(document.readyState!='loading');fn()})}}window.ready(function(){var html='';var element=document.querySelector('body');var child=document.createElement('div');child.innerHTML=html;element.appendChild(child);var rule='video{max-width:100%;vertical-align:bottom}.ub-unloaded{display:none}.ub-loaded{display:flex;justify-content:center}.ubsticky{position:fixed;bottom:0;right:10px;z-index:2147489999!important;animation:an 0.8s}.ubsticky .content_video-dimensions{width:320px!important;height:180px!important}.video-js .vjs-control.vjs-close-button{right:-17px!important;top:-26px!important}#unibots-video,#unibots-video-sticky{margin:35px 0}.video-js .vjs-control.vjs-close-button .vjs-icon-placeholder:before,.vjs-icon-cancel:before{color:black!important}#ubp_logo{background:#fff;position:absolute;padding:3px 5px 2px 5px;right:0px!important;bottom:35px!important;width:40px!important;border-top-left-radius:8px;border-bottom-left-radius:8px;transition:bottom 0.4s ease-in-out;height:11px!important;font-size:10px;box-sizing:content-box!important;line-height:11px!important}#ubp_logo img{margin:0px!important;box-shadow:none!important;border-radius:0px!important;padding:0px!important;width:100%!important;height:11px!important;object-fit:unset!important;border:none!important}.vjs-customButton::before{content:"View More"}.vjs-customButton{height:30px!important;border:solid 1px;width:26%!important;background-image:-webkit-linear-gradient(top,rgba(0,0,0,.8),rgba(0,0,0,.7) 40%,rgba(0,0,0,0) 99%)!important;color:#fff!important;cursor:pointer!important;display:inline-block!important;font-family:arial,sans-serif!important;font-weight:normal!important;font-size:14px!important;line-height:normal!important;padding:5px!important}@media (max-width:481px){.ubsticky{width:320px!important}#ubVideo{margin:30px 0px!important}}';var css=document.createElement('style');css.type='text/css';if(css.styleSheet){css.styleSheet.cssText=rule}else{css.appendChild(document.createTextNode(rule))}document.getElementsByTagName('head')[0].appendChild(css)});