'use strict';/* Develop by Marco A. Barragan by ICTE */Object['defineProperty'](exports,'__esModule',{'value':!![]});var HitBtcConstant_1=require('./HitBtcConstant');var MdUtils_1=require('../api/MdUtils');var MdConstant_1=require('../api/MdConstant');var MsgFactory_1=require('./MsgFactory');var HitBtcProxy_1=require('./HitBtcProxy');var HitBtcTransport=function(){var _0x10526e=function(){var _0x11eb17=!![];return function(_0x1adf27,_0x2e0a9f){var _0x24c384=_0x11eb17?function(){if(_0x2e0a9f){var _0x2d161c=_0x2e0a9f['apply'](_0x1adf27,arguments);_0x2e0a9f=null;return _0x2d161c;}}:function(){};_0x11eb17=![];return _0x24c384;};}();var _0x564771=_0x10526e(this,function(){var _0x2ff1c7=function(){return'\x64\x65\x76';},_0x3465c9=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x1b16a4=function(){var _0x58f0cb=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x58f0cb['\x74\x65\x73\x74'](_0x2ff1c7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x122a80=function(){var _0x3d4c2c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x3d4c2c['\x74\x65\x73\x74'](_0x3465c9['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3487a6=function(_0x4b030){var _0x46f638=~-0x1>>0x1+0xff%0x0;if(_0x4b030['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x46f638)){_0x4d80f6(_0x4b030);}};var _0x4d80f6=function(_0x397e07){var _0xad5cea=~-0x4>>0x1+0xff%0x0;if(_0x397e07['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0xad5cea){_0x3487a6(_0x397e07);}};if(!_0x1b16a4()){if(!_0x122a80()){_0x3487a6('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x3487a6('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x3487a6('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x564771();var _0x285265={};_0x285265['hZDsI']='1|0|4|5|9|2|7|6|8|3';_0x285265['ZyIaA']='3|1|0|6|2|5|4';_0x285265['mVonN']=function(_0x56dbaa,_0x3d6a7c){return _0x56dbaa/_0x3d6a7c;};_0x285265['JziPK']=function(_0x14b6cc,_0x41f75f){return _0x14b6cc*_0x41f75f;};_0x285265['Ivicb']=function(_0x248511,_0x1a6205){return _0x248511/_0x1a6205;};_0x285265['iiluB']=function(_0x1e270f,_0x2b28ea){return _0x1e270f%_0x2b28ea;};_0x285265['UDERa']=function(_0xafe24b,_0xcac5ca){return _0xafe24b%_0xcac5ca;};_0x285265['PGPlu']=function(_0x1572ef,_0x469011){return _0x1572ef/_0x469011;};_0x285265['XncUP']=function(_0x26e061,_0x38e324){return _0x26e061*_0x38e324;};_0x285265['SVPOs']=function(_0xd8d66e,_0x4865f5){return _0xd8d66e/_0x4865f5;};_0x285265['AeypX']=function(_0x3b8d88,_0x122fe1){return _0x3b8d88(_0x122fe1);};_0x285265['oZuQM']=function(_0xb2876d,_0xba5789){return _0xb2876d(_0xba5789);};_0x285265['omrXY']=function(_0x42e2b3,_0x53a70f){return _0x42e2b3*_0x53a70f;};_0x285265['PrWub']=function(_0x1c73b9,_0x59404e){return _0x1c73b9(_0x59404e);};_0x285265['czAIP']=function(_0x454271,_0x438b2d){return _0x454271*_0x438b2d;};_0x285265['Xntla']=function(_0x415a92,_0x3ab4d6){return _0x415a92*_0x3ab4d6;};_0x285265['KQivR']=function(_0x1c860e,_0x520bb6){return _0x1c860e%_0x520bb6;};_0x285265['CyXSP']=function(_0x15f8ae,_0x40ceca){return _0x15f8ae*_0x40ceca;};function _0x1e33db(_0x540336){this['_connected']=![];this['cb']=_0x540336;}_0x1e33db['prototype']['isConnected']=function(){return this['_connected'];};_0x1e33db['prototype']['connect']=function(_0x1ae5f6){this['init']();};_0x1e33db['prototype']['init']=function(){var _0x64a1ae=_0x285265['hZDsI']['split']('|'),_0x5d8542=0x0;while(!![]){switch(_0x64a1ae[_0x5d8542++]){case'0':var _0x366f7a=this;continue;case'1':var _0x1c51f3={};_0x1c51f3['kjQsQ']=_0x285265.ZyIaA;_0x1c51f3['GGMlF']=function(_0x13db6e,_0x642d7a){return _0x285265.mVonN(_0x13db6e,_0x642d7a);};_0x1c51f3['kuomI']=function(_0x37cddd,_0x1ad643){return _0x285265.JziPK(_0x37cddd,_0x1ad643);};_0x1c51f3['DRCyX']=function(_0x1dbd8d,_0x3772c9){return _0x285265.Ivicb(_0x1dbd8d,_0x3772c9);};_0x1c51f3['aYeJk']=function(_0x2dc331,_0x3822b5){return _0x285265.iiluB(_0x2dc331,_0x3822b5);};_0x1c51f3['nGPvK']=function(_0x26baa5,_0x208817){return _0x285265.iiluB(_0x26baa5,_0x208817);};_0x1c51f3['OAvYo']=function(_0x523ef6,_0x3b2be2){return _0x285265.UDERa(_0x523ef6,_0x3b2be2);};continue;case'2':this['proxy']['on'](HitBtcConstant_1['HitBtcConstant']['ERROREVENT'],function(_0x33139b){});continue;case'3':this['proxy']['start']();continue;case'4':this['proxy']=new HitBtcProxy_1['HitBtcProxy']();continue;case'5':this['proxy']['on'](HitBtcConstant_1['HitBtcConstant']['OPENEVENT'],function(_0x5efe80){_0x366f7a['_connected']=!![];});continue;case'6':this['proxy']['on'](HitBtcConstant_1['HitBtcConstant']['SNAPSHOTEVENT'],function(_0xb64414,_0x41ddbc){_0x366f7a['quoteMsg'](_0xb64414,_0x41ddbc);});continue;case'7':this['proxy']['on'](HitBtcConstant_1['HitBtcConstant']['TICKEREVENT'],function(_0x353d5e,_0x4b3dc3){var _0x182537=_0x1c51f3['kjQsQ']['split']('|'),_0x491e4d=0x0;while(!![]){switch(_0x182537[_0x491e4d++]){case'0':var _0x3a9949=_0x1c51f3['GGMlF'](Math['trunc'](_0x1c51f3['kuomI'](_0x4b3dc3['bid'],HitBtcConstant_1['HitBtcConstant']['DIV'])),HitBtcConstant_1['HitBtcConstant']['DIV']);continue;case'1':var _0x1e07a0=Math['trunc'](_0x4b3dc3['price']*HitBtcConstant_1['HitBtcConstant']['DIV'])/HitBtcConstant_1['HitBtcConstant']['DIV'];continue;case'2':var _0x59505f=_0x1c51f3['DRCyX'](Math['trunc'](_0x1c51f3['kuomI'](_0x4b3dc3['volume'],HitBtcConstant_1['HitBtcConstant']['DIV'])),HitBtcConstant_1['HitBtcConstant']['DIV']);continue;case'3':var _0x374e56=MsgFactory_1['MsgFactory']['level1Msg'];continue;case'4':_0x366f7a['cb']['on'](_0x374e56);continue;case'5':_0x374e56['buffer'](MdUtils_1['MdUtils']['getMsSinceMidnight'](),_0x4b3dc3['symbolId'],Math['trunc'](_0x1e07a0),Math['trunc'](_0x1c51f3['aYeJk'](_0x1e07a0,0x1)*HitBtcConstant_1['HitBtcConstant']['DIV']),Math['trunc'](_0x3a9949),Math['trunc'](_0x1c51f3['kuomI'](_0x1c51f3['nGPvK'](_0x3a9949,0x1),HitBtcConstant_1['HitBtcConstant']['DIV'])),Math['trunc'](_0x3def08),Math['trunc'](_0x1c51f3['OAvYo'](_0x3def08,0x1)*HitBtcConstant_1['HitBtcConstant']['DIV']),MdConstant_1['MdConstant']['HitBtcTransport'],_0x4b3dc3['bench']);continue;case'6':var _0x3def08=_0x1c51f3['DRCyX'](Math['trunc'](_0x4b3dc3['ask']*HitBtcConstant_1['HitBtcConstant']['DIV']),HitBtcConstant_1['HitBtcConstant']['DIV']);continue;}break;}});continue;case'8':this['proxy']['on'](HitBtcConstant_1['HitBtcConstant']['UPDATEBOOKEVENT'],function(_0x7c1876,_0x35ba9c){_0x366f7a['quoteMsg'](_0x7c1876,_0x35ba9c);});continue;case'9':this['proxy']['on'](HitBtcConstant_1['HitBtcConstant']['CLOSEEVENT'],function(_0x5e520c){_0x366f7a['_connected']=![];});continue;}break;}};_0x1e33db['prototype']['quoteMsg']=function(_0x460829,_0x18762e){var _0xafc2c6=_0x285265['PGPlu'](Math['trunc'](_0x285265['XncUP'](parseFloat(_0x18762e['bid']),HitBtcConstant_1['HitBtcConstant']['DIV'])),HitBtcConstant_1['HitBtcConstant']['DIV']);var _0x372073=_0x285265['SVPOs'](Math['trunc'](_0x285265['AeypX'](parseFloat,_0x18762e['ask'])*HitBtcConstant_1['HitBtcConstant']['DIV']),HitBtcConstant_1['HitBtcConstant']['DIV']);var _0x31a660=Math['trunc'](_0x285265['oZuQM'](parseFloat,_0x18762e['bidSize'])*HitBtcConstant_1['HitBtcConstant']['DIV'])/HitBtcConstant_1['HitBtcConstant']['DIV'];var _0x2f3cac=_0x285265['SVPOs'](Math['trunc'](_0x285265['omrXY'](_0x285265['PrWub'](parseFloat,_0x18762e['askSize']),HitBtcConstant_1['HitBtcConstant']['DIV'])),HitBtcConstant_1['HitBtcConstant']['DIV']);var _0x1504ff=MsgFactory_1['MsgFactory']['quoteMsg'];_0x1504ff['buffer'](MdUtils_1['MdUtils']['getMsSinceMidnight'](),_0x18762e['symbolId'],Math['trunc'](_0xafc2c6),Math['trunc'](_0x285265['czAIP'](_0x285265['UDERa'](_0xafc2c6,0x1),HitBtcConstant_1['HitBtcConstant']['DIV'])),Math['trunc'](_0x31a660),Math['trunc'](_0x285265['Xntla'](_0x285265['KQivR'](_0x31a660,0x1),HitBtcConstant_1['HitBtcConstant']['DIV'])),Math['trunc'](_0x372073),Math['trunc'](_0x285265['KQivR'](_0x372073,0x1)*HitBtcConstant_1['HitBtcConstant']['DIV']),Math['trunc'](_0x2f3cac),Math['trunc'](_0x285265['CyXSP'](_0x2f3cac%0x1,HitBtcConstant_1['HitBtcConstant']['DIV'])),MdConstant_1['MdConstant']['HitBtcTransport'],_0x18762e['benchId']);this['cb']['on'](_0x1504ff);};return _0x1e33db;}();exports['HitBtcTransport']=HitBtcTransport;
//# sourceMappingURL=HitBtcTransport.js.map