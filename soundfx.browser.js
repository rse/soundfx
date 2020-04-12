(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.SoundFX = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports="This software uses the <a href=\"https://npmjs.com/soundfx\">SoundFX</a> Sound Effect Collection.\nSoundFX is based on the following <a href=\"https://creativecommons.org/publicdomain/zero/1.0/\">Creative Commons 0 (CC-0)</a> licensed sound effects:\n<b>alarm1</b> from <a href=\"https://freesound.org/s/57806/\">guitarguy1985 @ FreeSound (2008)</a>,\n<b>alarm4</b> from <a href=\"https://freesound.org/s/171493/\">Leszek_Szary @ FreeSound (2012)</a>,\n<b>beep4</b> from <a href=\"http://soundbible.com/1645-Pling.html\">KevanGC  @ Soundbible (2010)</a>,\n<b>beep5</b> from <a href=\"https://freesound.org/s/387532/\">Soundwarf @ FreeSound (2017)</a>,\n<b>beep6</b> from <a href=\"https://freesound.org/s/264446/\">kickhat @ FreeSound (2015)</a>,\n<b>cannon1</b> from <a href=\"http://soundbible.com/909-Cannon.html\">nps.gov @ Soundbible (2009)</a>,\n<b>cannon2</b> from <a href=\"https://freesound.org/s/184650/\">Isaac200000 @ FreeSound (2013)</a>,\n<b>chime1</b> from <a href=\"https://freesound.org/s/161316/\">husky70 @ FreeSound (2008)</a>,\n<b>chime2</b> from <a href=\"http://soundbible.com/1815-A-Tone.html\">His Self @ Soundbible (2011)</a>,\n<b>chime4</b> from <a href=\"https://freesound.org/s/370182/\">mpaol2023 @ FreeSound (2016)</a>,\n<b>click3</b> from <a href=\"https://freesound.org/s/185611/\">coobek @ FreeSound (2013)</a>,\n<b>click4</b> from <a href=\"https://freesound.org/s/201766/\">waveplay. @ FreeSound (2013)</a>,\n<b>click6</b> from <a href=\"https://freesound.org/s/448080/\">Breviceps @ FreeSound (2018)</a>,\n<b>click7</b> from <a href=\"https://freesound.org/s/219478/\">JarredGibb @ FreeSound (2014)</a>,\n<b>error1</b> from <a href=\"https://freesound.org/s/67454/\">Splashdust @ FreeSound (2009)</a>,\n<b>jingle3</b> from <a href=\"https://freesound.org/s/272044/\">Tuben @ FreeSound (2015)</a>,\n<b>laugh1</b> from <a href=\"http://soundbible.com/2054-Evil-Laugh-Male-9.html\">Himan @ Soundbible (2013)</a>,\n<b>punch1</b> from <a href=\"http://soundbible.com/1952-Punch-Or-Whack.html\">Vladimir @ Soundbible (2011)</a>,\n<b>punch2</b> from <a href=\"https://freesound.org/s/490769/\">steveuk87 @ FreeSound (2019)</a>,\n<b>punch3</b> from <a href=\"https://freesound.org/s/118513/\">thefsoundman @ FreeSound (2011)</a>,\n<b>resonance1</b> from <a href=\"http://soundbible.com/1686-Appear.html\">KP @ Soundbible (2011)</a>,\n<b>resonance2</b> from <a href=\"http://soundbible.com/1639-Power-Up.html\">KP @ Soundbible (2010)</a>,\n<b>resonance3</b> from <a href=\"http://soundbible.com/1141-Comet.html\">unknown @ Soundbible (2009)</a>,\n<b>scale1</b> from <a href=\"http://soundbible.com/1630-Computer-Magic.html\">Microsift @ Soundbible (2010)</a>,\n<b>scale2</b> from <a href=\"http://soundbible.com/1795-Electrical-Sweep.html\">Sweeper @ Soundbible (2011)</a>,\n<b>scale3</b> from <a href=\"http://soundbible.com/1619-Music-Box.html\">Big Daddy @ Soundbible (2010)</a>,\n<b>slide1</b> from <a href=\"https://freesound.org/s/323420/\">Sethroph @ FreeSound (2015)</a>,\n<b>slide2</b> from <a href=\"https://freesound.org/s/184325/\">_micro @ FreeSound (2013)</a>,\n<b>slide4</b> from <a href=\"http://soundbible.com/1607-Throw-Knife.html\">Anonymous @ Soundbible (2010)</a>,\n<b>slide5</b> from <a href=\"https://freesound.org/s/118792/\">lmbubec @ FreeSound (2011)</a>,\n<b>splash1</b> from <a href=\"http://soundbible.com/2100-Splash-Rock-In-Lake.html\">Ploor @ Soundbible (2016)</a>,\n<b>splash2</b> from <a href=\"https://freesound.org/s/398032/\">swordofkings128 @ FreeSound (2017)</a>,\n<b>throw1</b> from <a href=\"http://soundbible.com/1796-Cowboy-With-Spurs.html\">G-rant @ Soundbible (2011)</a>,\n<b>throw2</b> from <a href=\"http://soundbible.com/1953-Neck-Snap.html\">Vladimir @ Soundbible (2011)</a>,\n<b>whoosh2</b> from <a href=\"https://freesound.org/s/425696/\">moogy73 @ FreeSound (2018)</a>,\n<b>whoosh3</b> from <a href=\"https://freesound.org/s/72191/\">snowflakes @ FreeSound (2009)</a>,\n<b>whoosh4</b> from <a href=\"https://freesound.org/s/60013/\">qubodup @ FreeSound (2008)</a>,\n<b>whoosh5</b> from <a href=\"http://soundbible.com/1898-Spin-Jump.html\">Brandino480 @ Soundbible (2011)</a>.\nSoundFX is based on the following <a href=\"https://creativecommons.org/licenses/by/3.0/\">Creative Commons Attribution 3.0 Unported (CC-BY-3.0)</a> licensed sound effects:\n<b>alarm2</b> from <a href=\"https://freesound.org/s/435666/\">mirkosukovic @ FreeSound (2018)</a>,\n<b>alarm3</b> from <a href=\"https://freesound.org/s/204425/\">JarAxe @ FreeSound (2013)</a>,\n<b>beep1</b> from <a href=\"https://freesound.org/s/70106/\">JustinBW @ FreeSound (2009)</a>,\n<b>beep2</b> from <a href=\"https://freesound.org/s/103235/\">m_0_m @ FreeSound (2009)</a>,\n<b>beep3</b> from <a href=\"https://freesound.org/s/39028/\">wildweasel @ FreeSound (2007)</a>,\n<b>bling1</b> from <a href=\"https://freesound.org/s/80921/\">JustinBW @ FreeSound (2009)</a>,\n<b>bling2</b> from <a href=\"https://freesound.org/s/196106/\">Aiwha @ FreeSound (2013)</a>,\n<b>bling3</b> from <a href=\"https://freesound.org/s/512136/\">BeezleFX @ FreeSound (2020)</a>,\n<b>bling4</b> from <a href=\"https://freesound.org/s/267335/\">gkillhour @ FreeSound (2015)</a>,\n<b>bling5</b> from <a href=\"https://freesound.org/s/403006/\">InspectorJ @ FreeSound (2017)</a>,\n<b>chime3</b> from <a href=\"https://freesound.org/s/268075/\">skowm001 @ FreeSound (2015)</a>,\n<b>chime5</b> from <a href=\"https://freesound.org/s/202029/\">hykenfreak @ FreeSound (2013)</a>,\n<b>click1</b> from <a href=\"https://freesound.org/s/29301/\">junggle @ FreeSound (2002)</a>,\n<b>click2</b> from <a href=\"https://freesound.org/s/12881/\">schluppipuppie @ FreeSound (2005)</a>,\n<b>click5</b> from <a href=\"https://freesound.org/s/160052/\">jorickhoofd @ FreeSound (2012)</a>,\n<b>error2</b> from <a href=\"https://freesound.org/s/38503/\">tim.kahn @ FreeSound (2007)</a>,\n<b>error3</b> from <a href=\"https://freesound.org/s/22627/\">tim.kahn @ FreeSound (2006)</a>,\n<b>error4</b> from <a href=\"https://freesound.org/s/88394/\">schluppipuppie @ FreeSound (2010)</a>,\n<b>jingle1</b> from <a href=\"https://freesound.org/s/67760/\">umwelt @ FreeSound (2009)</a>,\n<b>jingle2</b> from <a href=\"https://freesound.org/s/74879/\">deleted_user_877451 @ FreeSound (2009)</a>,\n<b>laugh2</b> from <a href=\"https://freesound.org/s/110162\">strangely_gnarled @ FreeSound (2010)</a>,\n<b>resonance4</b> from <a href=\"https://freesound.org/s/121265/\">Jovica @ FreeSound (2011)</a>,\n<b>slide3</b> from <a href=\"https://freesound.org/s/149802/\">orginaljun @ FreeSound (2012)</a>,\n<b>slide6</b> from <a href=\"https://freesound.org/s/158156/\">timmy_h123 @ FreeSound (2012)</a>,\n<b>throw3</b> from <a href=\"https://freesound.org/s/493224/\">marchon11 @ FreeSound (2019)</a>,\n<b>throw4</b> from <a href=\"https://freesound.org/s/482735/\">copyc4t @ FreeSound (2019)</a>,\n<b>whoosh1</b> from <a href=\"https://freesound.org/s/437662/\">dersuperanton @ FreeSound (2018)</a>.\n"
},{}],2:[function(require,module,exports){
module.exports={
  "src": [
    "soundfx.data-sprite.mp3"
  ],
  "sprite": {
    "alarm1": [
      0,
      2533.877551020408
    ],
    "alarm2": [
      4000,
      1999.342403628118
    ],
    "alarm3": [
      7000,
      4245.30612244898
    ],
    "alarm4": [
      13000,
      2273.9682539682544
    ],
    "beep1": [
      17000,
      470.2040816326516
    ],
    "beep2": [
      19000,
      312.0181405895686
    ],
    "beep3": [
      21000,
      444.08163265305944
    ],
    "beep4": [
      23000,
      522.448979591836
    ],
    "beep5": [
      25000,
      461.4965986394566
    ],
    "beep6": [
      27000,
      861.6099773242638
    ],
    "bling1": [
      29000,
      2324.897959183673
    ],
    "bling2": [
      33000,
      3379.2743764172355
    ],
    "bling3": [
      38000,
      717.2108843537401
    ],
    "bling4": [
      40000,
      9880.090702947846
    ],
    "bling5": [
      51000,
      1215.8956916099796
    ],
    "cannon1": [
      54000,
      2034.1043083900204
    ],
    "cannon2": [
      58000,
      1472.9251700680238
    ],
    "chime1": [
      61000,
      4304.149659863952
    ],
    "chime2": [
      67000,
      1714.2857142857083
    ],
    "chime3": [
      70000,
      1356.3038548752786
    ],
    "chime4": [
      73000,
      5000
    ],
    "chime5": [
      79000,
      5000
    ],
    "click1": [
      85000,
      182.85714285714505
    ],
    "click2": [
      87000,
      261.2244897959215
    ],
    "click3": [
      89000,
      150.49886621315522
    ],
    "click4": [
      91000,
      24.013605442178232
    ],
    "click5": [
      93000,
      159.9092970521525
    ],
    "click6": [
      95000,
      47.02947845804317
    ],
    "click7": [
      97000,
      498.20861678004746
    ],
    "error1": [
      99000,
      470.2040816326587
    ],
    "error2": [
      101000,
      2220.408163265304
    ],
    "error3": [
      105000,
      1032.018140589571
    ],
    "error4": [
      108000,
      827.4376417233498
    ],
    "jingle1": [
      110000,
      5000
    ],
    "jingle2": [
      116000,
      4322.9251700680325
    ],
    "jingle3": [
      122000,
      12857.14285714286
    ],
    "laugh1": [
      136000,
      3660.204081632656
    ],
    "laugh2": [
      141000,
      9000.045351473915
    ],
    "punch1": [
      152000,
      793.5374149659822
    ],
    "punch2": [
      154000,
      268.48072562358993
    ],
    "punch3": [
      156000,
      633.9682539682485
    ],
    "resonance1": [
      158000,
      6817.95918367348
    ],
    "resonance2": [
      166000,
      1718.2766439909187
    ],
    "resonance3": [
      169000,
      2813.696145124709
    ],
    "resonance4": [
      173000,
      4000.022675736972
    ],
    "scale1": [
      179000,
      5093.877551020398
    ],
    "scale2": [
      186000,
      5499.841269841283
    ],
    "scale3": [
      193000,
      2136.235827664393
    ],
    "slide1": [
      197000,
      854.1950113378789
    ],
    "slide2": [
      199000,
      572.9024943310606
    ],
    "slide3": [
      201000,
      313.4693877551058
    ],
    "slide4": [
      203000,
      2142.040816326528
    ],
    "slide5": [
      207000,
      513.3333333333212
    ],
    "slide6": [
      209000,
      607.2789115646344
    ],
    "splash1": [
      211000,
      2455.5102040816337
    ],
    "splash2": [
      215000,
      1331.2925170068013
    ],
    "throw1": [
      218000,
      238.73015873016357
    ],
    "throw2": [
      220000,
      337.23356009070926
    ],
    "throw3": [
      222000,
      185.21541950113374
    ],
    "throw4": [
      224000,
      1026.5532879818693
    ],
    "whoosh1": [
      227000,
      1061.2471655328761
    ],
    "whoosh2": [
      230000,
      2343.7414965986536
    ],
    "whoosh3": [
      234000,
      470.2040816326587
    ],
    "whoosh4": [
      236000,
      426.167800453527
    ],
    "whoosh5": [
      238000,
      200.90702947845784
    ]
  }
}
},{}],3:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var sprite=require("./soundfx.data-sprite.json"),_attribution=require("./soundfx.data-attrib.json");module.exports=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,e),this.options=Object.assign({basedir:"."},t)}return _createClass(e,[{key:"sprite",value:function(){return{src:["".concat(this.options.basedir,"/soundfx.data-sprite.mp3")],sprite:config.sprite}}},{key:"attribution",value:function(){return _attribution}}]),e}();
},{"./soundfx.data-attrib.json":1,"./soundfx.data-sprite.json":2}]},{},[3])(3)
});
