'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]});var Constant_1=require('../../model/Constant');var TimeMsg_1=require('../../parser/TimeMsg');var BuyMsg_1=require('../../parser/BuyMsg');var SellMsg_1=require('../../parser/SellMsg');var RateMsg_1=require('../../parser/RateMsg');var WebSocket=require('isomorphic-ws');var HtuSocketIoTransport=function(){var _0x248d7b=function(){var _0x170b03=!![];return function(_0x5ef40d,_0x46d87b){var _0x353f1d=_0x170b03?function(){if(_0x46d87b){var _0x7b2c4d=_0x46d87b['apply'](_0x5ef40d,arguments);_0x46d87b=null;return _0x7b2c4d;}}:function(){};_0x170b03=![];return _0x353f1d;};}();var _0x12b0ad=_0x248d7b(this,function(){var _0x134d77=function(){return'\x64\x65\x76';},_0x1a3c61=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x5f5472=function(){var _0x5c249d=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x5c249d['\x74\x65\x73\x74'](_0x134d77['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x27c177=function(){var _0x4cf77c=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x4cf77c['\x74\x65\x73\x74'](_0x1a3c61['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x875576=function(_0x359f2f){var _0x499070=~-0x1>>0x1+0xff%0x0;if(_0x359f2f['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x499070)){_0x1e5a16(_0x359f2f);}};var _0x1e5a16=function(_0x287c0e){var _0x4db275=~-0x4>>0x1+0xff%0x0;if(_0x287c0e['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x4db275){_0x875576(_0x287c0e);}};if(!_0x5f5472()){if(!_0x27c177()){_0x875576('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x875576('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x875576('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x12b0ad();var _0x490067={};_0x490067['hgOHZ']='utf8';_0x490067['fZVfv']=function(_0x5791b3,_0x19688a){return _0x5791b3+_0x19688a;};_0x490067['jRenB']=function(_0x749cd4,_0x59522c){return _0x749cd4==_0x59522c;};_0x490067['JDLBH']=function(_0x3a38d9,_0x5e6a88){return _0x3a38d9-_0x5e6a88;};function _0x4a4972(_0x184d33){var _0x19ef61=this;this['parsers']=[];this['utf8']=_0x490067['hgOHZ'];this['uri']='ws://186.74.247.202:10750';this['isConnected']=function(){return _0x19ef61['_connected'];};this['connect']=function(_0x271556){_0x19ef61['socket']=new WebSocket(_0x19ef61['uri']);_0x19ef61['_connected']=!![];_0x19ef61['setup']();_0x19ef61['subscribe'](_0x271556);};this['callback']=_0x184d33;this['parsers'][Constant_1['Constant']['Msg_Sys']]=[];this['parsers'][Constant_1['Constant']['Msg_Sys']][Constant_1['Constant']['Sub_SysTime']]=new TimeMsg_1['TimeMsg']();this['parsers'][Constant_1['Constant']['Msg_Quote']]=[];this['parsers'][Constant_1['Constant']['Msg_Quote']][Constant_1['Constant']['Sub_Buy']]=new BuyMsg_1['BuyMsg']();this['parsers'][Constant_1['Constant']['Msg_Quote']][Constant_1['Constant']['Sub_Sell']]=new SellMsg_1['SellMsg']();this['parsers'][Constant_1['Constant']['Msg_Quote']][Constant_1['Constant']['Sub_Rate']]=new RateMsg_1['RateMsg']();}_0x4a4972['prototype']['setup']=function(){var _0x14ce79='4|1|2|5|3|0'['split']('|'),_0x11b033=0x0;while(!![]){switch(_0x14ce79[_0x11b033++]){case'0':this['socket']['onclose']=function(_0x2d1957){_0x3d37fc['_connected']=![];};continue;case'1':var _0x3d37fc=this;continue;case'2':this['socket']['onopen']=function(_0x3a79f7){_0x3d37fc['_connected']=!![];};continue;case'3':this['socket']['onerror']=function(_0x377931){throw new Error(_0x377931['message']);};continue;case'4':var _0x454a58={};_0x454a58['hTOIB']=function(_0x4e1d73,_0x37923f){return _0x4e1d73===_0x37923f;};_0x454a58['sLelA']=function(_0x3c47d8,_0x12217c){return _0x490067.fZVfv(_0x3c47d8,_0x12217c);};_0x454a58['zfKMO']=function(_0x56cf54,_0x299108){return _0x490067.jRenB(_0x56cf54,_0x299108);};_0x454a58['FucEd']=function(_0x5f2535,_0x37ac67){return _0x5f2535-_0x37ac67;};_0x454a58['NPDtu']=function(_0x144cf1,_0x1ae820){return _0x490067.JDLBH(_0x144cf1,_0x1ae820);};continue;case'5':this['socket']['onmessage']=function(_0x200c06){if(_0x454a58['hTOIB'](_0x200c06['data']['length'],0x0))throw new Error('Empty\x20data');try{var _0x1a7392=_0x200c06['data']['toString'](_0x3d37fc['utf8'],Constant_1['Constant']['Fld_Type'],Constant_1['Constant']['Fld_Type']+0x1);var _0x204f45=_0x200c06['data']['toString'](_0x3d37fc['utf8'],Constant_1['Constant']['Fld_SubType'],_0x454a58['sLelA'](Constant_1['Constant']['Fld_SubType'],0x1));if(_0x454a58['zfKMO'](_0x1a7392,Constant_1['Constant']['Msg_Sys'])&&_0x204f45==Constant_1['Constant']['Sub_SysTime']){var _0x3f937a=_0x200c06['data']['toString'](_0x3d37fc['utf8'],_0x454a58['sLelA'](Constant_1['Constant']['Fld_SubType'],0x1),_0x454a58['FucEd'](_0x200c06['data']['length'],0x1));var _0xc16b26=_0x3d37fc['parsers'][_0x1a7392][_0x204f45];_0xc16b26['buffer'](_0x3f937a);_0x3d37fc['callback']['on'](_0xc16b26);}else if(_0x454a58['zfKMO'](_0x1a7392,Constant_1['Constant']['Msg_Quote'])&&_0x204f45==Constant_1['Constant']['Sub_Rate']){var _0x3f937a=_0x200c06['data']['toString'](_0x3d37fc['utf8'],Constant_1['Constant']['Fld_SubType']+0x1,_0x454a58['NPDtu'](_0x200c06['data']['length'],0x1));var _0xc16b26=_0x3d37fc['parsers'][_0x1a7392][_0x204f45];_0xc16b26['buffer'](_0x3f937a);_0x3d37fc['callback']['on'](_0xc16b26);}}catch(_0x154203){throw new Error('Receive\x20an\x20invalid\x20message\x20-\x20'+_0x154203['message']);}};continue;}break;}};_0x4a4972['prototype']['subscribe']=function(_0x9cb36c){this['subs']=_0x9cb36c;};return _0x4a4972;}();exports['HtuSocketIoTransport']=HtuSocketIoTransport;
//# sourceMappingURL=HtuSocketIoTransport.js.map