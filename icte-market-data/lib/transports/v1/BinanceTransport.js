'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});var BinanceProxy_1=require('./BinanceProxy');var BinanceConstant_1=require('./BinanceConstant');var MsgFactory_1=require('./MsgFactory');var MdConstant_1=require('../api/MdConstant');var MdUtils_1=require('../api/MdUtils');var BinanceTransport=function(){var _0x446440=function(){var _0x253e7d=!![];return function(_0x4ea476,_0x5879b7){var _0x1347e2=_0x253e7d?function(){if(_0x5879b7){var _0x4bd24e=_0x5879b7['apply'](_0x4ea476,arguments);_0x5879b7=null;return _0x4bd24e;}}:function(){};_0x253e7d=![];return _0x1347e2;};}();var _0x5740b3=_0x446440(this,function(){var _0x70b90c=function(){return'\x64\x65\x76';},_0x43d0c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x2b67ce=function(){var _0x1d7789=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x1d7789['\x74\x65\x73\x74'](_0x70b90c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x470fb5=function(){var _0x2c8afd=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x2c8afd['\x74\x65\x73\x74'](_0x43d0c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x30eed3=function(_0x541791){var _0x1af1b8=~-0x1>>0x1+0xff%0x0;if(_0x541791['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1af1b8)){_0x59a3ec(_0x541791);}};var _0x59a3ec=function(_0x39bfc7){var _0x39d754=~-0x4>>0x1+0xff%0x0;if(_0x39bfc7['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x39d754){_0x30eed3(_0x39bfc7);}};if(!_0x2b67ce()){if(!_0x470fb5()){_0x30eed3('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x30eed3('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x30eed3('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x5740b3();var _0x3fb765={};_0x3fb765['GbqIg']='3|2|0|1|5|4';_0x3fb765['NUWJw']=function(_0x42b21f,_0x12e6d1){return _0x42b21f in _0x12e6d1;};_0x3fb765['eraSL']=function(_0x3ec440,_0x29f850){return _0x3ec440/_0x29f850;};_0x3fb765['WeWZk']=function(_0x59abae,_0x36b164){return _0x59abae*_0x36b164;};_0x3fb765['QnIdW']=function(_0x41e1e8,_0x536466){return _0x41e1e8%_0x536466;};_0x3fb765['dvUyL']=function(_0x3bba03,_0x4e7276){return _0x3bba03*_0x4e7276;};_0x3fb765['ZexAc']=function(_0x112b68,_0x58b742){return _0x112b68/_0x58b742;};function _0x1ae074(_0x5461fc){this['subscriptions']={};this['_connected']=![];this['cb']=_0x5461fc;}_0x1ae074['prototype']['isConnected']=function(){return this['_connected'];};_0x1ae074['prototype']['connect']=function(_0x30ed38){this['init']();};_0x1ae074['prototype']['init']=function(){var _0x41b8ad=_0x3fb765['GbqIg']['split']('|'),_0x39ef17=0x0;while(!![]){switch(_0x41b8ad[_0x39ef17++]){case'0':this['proxy']['on'](BinanceConstant_1['BinanceConstant']['OPENEVENT'],function(_0x3a776a){_0x1a769a['_connected']=!![];});continue;case'1':this['proxy']['on'](BinanceConstant_1['BinanceConstant']['CLOSEEVENT'],function(_0x45309c){_0x1a769a['_connected']=![];});continue;case'2':this['proxy']=new BinanceProxy_1['BinanceProxy']();continue;case'3':var _0x1a769a=this;continue;case'4':this['proxy']['on'](BinanceConstant_1['BinanceConstant']['TICKEREVENT'],function(_0x510fae,_0x203c42){_0x1a769a['processMessage'](_0x510fae,_0x203c42);});continue;case'5':this['proxy']['on'](BinanceConstant_1['BinanceConstant']['ERROREVENT'],function(_0x30f569){});continue;}break;}};_0x1ae074['prototype']['processMessage']=function(_0x566c0d,_0x816685){if(_0x3fb765['NUWJw'](_0x566c0d,BinanceConstant_1['BinanceConstant']['PAIRS'])){var _0x137351='5|4|1|6|3|7|2|0'['split']('|'),_0x5d4030=0x0;while(!![]){switch(_0x137351[_0x5d4030++]){case'0':this['cb']['on'](_0x5b99d5);continue;case'1':var _0xac9e69=_0x3fb765['eraSL'](Math['trunc'](_0x3fb765['WeWZk'](_0x816685['a'],BinanceConstant_1['BinanceConstant']['DIV'])),BinanceConstant_1['BinanceConstant']['DIV']);continue;case'2':_0x5b99d5['buffer'](MdUtils_1['MdUtils']['getMsSinceMidnight'](),BinanceConstant_1['BinanceConstant']['PAIRS'][_0x566c0d]['symbol'],Math['trunc'](_0x2c3fda),Math['trunc'](_0x3fb765['WeWZk'](_0x3fb765['QnIdW'](_0x2c3fda,0x1),BinanceConstant_1['BinanceConstant']['DIV'])),Math['trunc'](_0x96f398),Math['trunc'](_0x3fb765['WeWZk'](_0x3fb765['QnIdW'](_0x96f398,0x1),BinanceConstant_1['BinanceConstant']['DIV'])),Math['trunc'](_0xac9e69),Math['trunc'](_0x3fb765['WeWZk'](_0x3fb765['QnIdW'](_0xac9e69,0x1),BinanceConstant_1['BinanceConstant']['DIV'])),MdConstant_1['MdConstant']['BinanceTransport'],BinanceConstant_1['BinanceConstant']['PAIRS'][_0x566c0d]['bench']);continue;case'3':var _0x5fd97d=_0x3fb765['eraSL'](Math['trunc'](_0x3fb765['WeWZk'](_0x816685['A'],BinanceConstant_1['BinanceConstant']['DIV'])),BinanceConstant_1['BinanceConstant']['DIV']);continue;case'4':var _0x96f398=Math['trunc'](_0x3fb765['dvUyL'](_0x816685['b'],BinanceConstant_1['BinanceConstant']['DIV']))/BinanceConstant_1['BinanceConstant']['DIV'];continue;case'5':var _0x5b99d5=MsgFactory_1['MsgFactory']['level1Msg'];continue;case'6':var _0x3c9685=Math['trunc'](_0x816685['B']*BinanceConstant_1['BinanceConstant']['DIV'])/BinanceConstant_1['BinanceConstant']['DIV'];continue;case'7':var _0x2c3fda=_0x3fb765['ZexAc'](Math['trunc'](_0x3fb765['dvUyL'](_0x816685['c'],BinanceConstant_1['BinanceConstant']['DIV'])),BinanceConstant_1['BinanceConstant']['DIV']);continue;}break;}}};return _0x1ae074;}();exports['BinanceTransport']=BinanceTransport;
//# sourceMappingURL=BinanceTransport.js.map