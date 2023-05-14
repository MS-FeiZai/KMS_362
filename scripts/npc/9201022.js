/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * NPCID : 9201022
 * ScriptName : Thomas
 * NPCNameFunc : 토마스 - 결혼식장 도우미
 * Location : 680000501 ( - )
 * Location : 680000500 ( - )
 * Location : 680000502 ( - )
 * 
 * @author T-Sun
 *
 */
var normalscrolls = [
    2040001, 2040002, 2040004, 2040005, 2040025, 2040026, 2040029, 2040031, 2040301, 2040302,
    2040317, 2040318, 2040321, 2040323, 2040326, 2040328, 2040401, 2040402, 2040418, 2040419,
    2040421, 2040422, 2040425, 2040427, 2040501, 2040502, 2040504, 2040505, 2040513, 2040514,
    2040516, 2040517, 2040532, 2040534, 2040601, 2040602, 2040618, 2040619, 2040621, 2040622,
    2040625, 2040627, 2040701, 2040702, 2040704, 2040705, 2040707, 2040708, 2040801, 2040802,
    2040804, 2040805, 2040824, 2040825, 2040901, 2040902, 2040924, 2040925, 2040927, 2040928,
    2040931, 2040933, 2041001, 2041002, 2041004, 2041005, 2041007, 2041008, 2041010, 2041011,
    2041013, 2041014, 2041016, 2041017, 2041019, 2041020, 2041022, 2041023, 2043001, 2043002,
    2043017, 2043019, 2043101, 2043102, 2043112, 2043114, 2043201, 2043202, 2043212, 2043214,
    2043301, 2043302, 2043701, 2043702, 2043801, 2043802, 2044001, 2044002, 2044012, 2044014,
    2044101, 2044102, 2044112, 2044114, 2044201, 2044202, 2044212, 2044214, 2044301, 2044302,
    2044312, 2044314, 2044401, 2044402, 2044412, 2044414, 2044501, 2044502, 2044601, 2044602,
    2044701, 2044702, 2044801, 2044802, 2044807, 2044809, 2044901, 2044902, 2048001, 2048002,
    2048004, 2048005, 2049100
];

var normalequips = [
    1002001, 1002012, 1002019, 1002033, 1002041, 1002042, 1002054, 1002060, 1002061, 1002062,
    1002063, 1002080, 1002081, 1002082, 1002083, 1002089, 1002090, 1002132, 1002133, 1002134,
    1002391, 1002392, 1002393, 1002394, 1002395, 1002452, 1002453, 1002454,
    1002455, 1002492, 1032000, 1032001, 1032002, 1032003, 1032009, 1032016, 1032017, 1032019,
    1032020, 1032021, 1032022, 1032026, 1032027, 1032028, 1040013, 1041012, 1060004, 1060005,
    1060007, 1062000, 1062001, 1072004, 1072008, 1072012, 1072017, 1072042, 1072043, 1072048,
    1072049, 1072054, 1072055, 1072056, 1072062, 1072063, 1072064, 1092003, 1092008, 1102026,
    1102027, 1102028, 1102029, 1102030, 1102031, 1102032, 1102033, 1102034, 1102035, 1102040,
    1102041, 1102042, 1102043, 1302007, 1302016, 1312000, 1322003, 1322007, 1322008, 1322009,
    1322012, 1322027, 1332020, 1372005, 1372006, 1432008, 1002002, 1002003, 1002004, 1002005,
    1002007, 1002009, 1002011, 1002022, 1002024, 1002025, 1002027, 1002028, 1002029, 1002030,
    1002039, 1002040, 1002043, 1002044, 1002045, 1002046, 1002049, 1002050, 1002051, 1002052,
    1002055, 1002056, 1002058, 1002059, 1002084, 1002085, 1002087, 1002088, 1002091, 1002092,
    1002093, 1002094, 1002095, 1002098, 1002099, 1002101, 1002338, 1002339, 1002340, 1002528,
    1002529, 1002530, 1002531, 1002532, 1040000, 1040009, 1040012, 1040015, 1040016, 1040021,
    1040026, 1040028, 1040029, 1040030, 1040037, 1040038, 1040039, 1040040, 1040041, 1040086,
    1040087, 1040088, 1040089, 1040090, 1040091, 1040092, 1040093, 1040102, 1040103, 1040104,
    1040111, 1040112, 1040113, 1041014, 1041019, 1041020, 1041021, 1041022, 1041023, 1041024,
    1041064, 1041084, 1041086, 1041087, 1041088, 1041089, 1041091, 1041092, 1041093, 1041097,
    1041098, 1041099, 1041119, 1041120, 1041121, 1050000, 1050005, 1050006, 1050007, 1050011,
    1050021, 1050022, 1050080, 1050081, 1050082, 1050083, 1051000, 1051001, 1051010, 1051011,
    1051012, 1051013, 1051014, 1051015, 1051016, 1051077, 1051078, 1051079, 1051080, 1060000,
    1060008, 1060009, 1060010, 1060011, 1060016, 1060017, 1060018, 1060019, 1060020, 1060027,
    1060028, 1060029, 1060030, 1060060, 1060074, 1060075, 1060076, 1060077, 1060078, 1060079,
    1060080, 1060081, 1060082, 1060090, 1060091, 1060092, 1060100, 1060101, 1060102, 1061014,
    1061015, 1061016, 1061017, 1061018, 1061019, 1061020, 1061023, 1061083, 1061084, 1061085,
    1061086, 1061087, 1061088, 1061090, 1061091, 1061092, 1061096, 1061097, 1061098, 1061118,
    1061119, 1061120, 1072000, 1072002, 1072007, 1072009, 1072011, 1072039, 1072041, 1072046,
    1072047, 1072050, 1072051, 1072052, 1072053, 1072112, 1072113, 1072127, 1072132, 1072134,
    1072147, 1072148, 1072149, 1072154, 1072155, 1072156, 1072168, 1072196, 1072197, 1072198,
    1072210, 1072211, 1072212, 1082000, 1082001, 1082003, 1082005, 1082006, 1082007, 1082008,
    1082010, 1082011, 1082023, 1082025, 1082059, 1082060, 1082061, 1082103, 1082104, 1082105,
    1082114, 1082115, 1082116, 1082117, 1082128, 1082129, 1082130, 1092002, 1092004, 1092005,
    1092006, 1092007, 1092010, 1092011, 1092012, 1092013, 1092014, 1092015, 1092016, 1092017,
    1092023, 1092024, 1092025, 1092026, 1092027, 1092028, 1302002, 1302004, 1302005, 1302008,
    1302009, 1302010, 1302012, 1302018, 1302023, 1312001, 1312003, 1312005, 1312006, 1312007,
    1312008, 1312010, 1312011, 1312015, 1312016, 1322014, 1322015, 1322016, 1322017, 1322019,
    1322020, 1322028, 1322029, 1402000, 1402002, 1402003, 1402004, 1402005, 1402006, 1402007,
    1402008, 1402012, 1402015, 1402016, 1402018, 1412000, 1412002, 1412003, 1412004, 1412005,
    1412006, 1412008, 1412009, 1412010, 1412012, 1422001, 1422002, 1422003, 1422005, 1422007,
    1422008, 1422010, 1422012, 1422013, 1432002, 1432003, 1432004, 1432005, 1432007, 1432010,
    1432011, 1442001, 1442003, 1442005, 1442006, 1442007, 1442008, 1442009, 1442020, 1002013,
    1002016, 1002017, 1002034, 1002035, 1002037, 1002038, 1002064, 1002065, 1002072, 1002073,
    1002074, 1002075, 1002102, 1002103, 1002104, 1002105, 1002106, 1002141, 1002142, 1002143,
    1002145, 1002151, 1002152, 1002155, 1002215, 1002216, 1002217, 1002242, 1002243, 1002244,
    1002245, 1002246, 1002252, 1002253, 1002254, 1002271, 1002272, 1002273, 1002274, 1002363,
    1002364, 1002365, 1002366, 1040004, 1040017, 1040018, 1040019, 1040020, 1041015, 1041016,
    1041017, 1041018, 1041025, 1041026, 1041029, 1041030, 1041031, 1041041, 1041042, 1041043,
    1041051, 1041052, 1041053, 1050001, 1050002, 1050003, 1050008, 1050009, 1050010, 1050023,
    1050024, 1050025, 1050026, 1050027, 1050028, 1050029, 1050030, 1050031, 1050035, 1050037,
    1050038, 1050039, 1050045, 1050046, 1050047, 1050048, 1050049, 1050053, 1050054, 1050055,
    1050056, 1050067, 1050068, 1050069, 1050070, 1050072, 1050073, 1050074, 1050092, 1050093,
    1050094, 1050095, 1051003, 1051004, 1051005, 1051023, 1051025, 1051026, 1051027, 1051030,
    1051031, 1051032, 1051033, 1051034, 1051044, 1051045, 1051046, 1051047, 1051052, 1051053,
    1051054, 1051055, 1051056, 1051057, 1051058, 1051094, 1051095, 1051096, 1051097, 1060012,
    1060013, 1060014, 1060015, 1061010, 1061011, 1061012, 1061013, 1061021, 1061022, 1061027,
    1061028, 1061034, 1061035, 1061036, 1061047, 1061048, 1061049, 1072006, 1072019, 1072020,
    1072021, 1072023, 1072024, 1072044, 1072045, 1072072, 1072073, 1072074, 1072075, 1072078,
    1072089, 1072090, 1072091, 1072114, 1072115, 1072117, 1072140, 1072142, 1072157, 1072158,
    1072159, 1072160, 1072169, 1072177, 1072178, 1072179, 1072206, 1072207, 1072208, 1072209,
    1082019, 1082021, 1082022, 1082026, 1082027, 1082028, 1082051, 1082052, 1082053, 1082054,
    1082062, 1082064, 1082080, 1082082, 1082086, 1082087, 1082088, 1082098, 1082099, 1082100,
    1082121, 1082122, 1082123, 1082131, 1082132, 1082133, 1082134, 1092021, 1092029, 1372000,
    1372001, 1372002, 1372003, 1372004, 1372009, 1372011, 1372012, 1372014, 1372015, 1372016,
    1382000, 1382001, 1382002, 1382003, 1382004, 1382005, 1382007, 1382008, 1382010, 1382017,
    1382018, 1382019, 1322000, 1322002, 1322004, 1002010, 1002057, 1002112, 1002113, 1002114,
    1002115, 1002116, 1002117, 1002118, 1002119, 1002120, 1002121, 1002135, 1002136, 1002138,
    1002139, 1002156, 1002157, 1002158, 1002159, 1002160, 1002161, 1002162, 1002164, 1002165,
    1002167, 1002168, 1002169, 1002211, 1002212, 1002213, 1002267, 1002268, 1002269, 1002270,
    1002275, 1002276, 1002277, 1002278, 1002286, 1002287, 1002288, 1002289, 1002402, 1002403,
    1002404, 1002405, 1040003, 1040007, 1040008, 1040011, 1040022, 1040023, 1040024, 1040025,
    1040067, 1040068, 1040069, 1040070, 1040071, 1040072, 1040073, 1040074, 1040075, 1040076,
    1040080, 1040081, 1041007, 1041008, 1041013, 1041027, 1041028, 1041032, 1041033, 1041034,
    1041035, 1041054, 1041055, 1041056, 1041061, 1041062, 1041063, 1041065, 1041066, 1041067,
    1041068, 1041069, 1041082, 1041083, 1050051, 1050052, 1050058, 1050059, 1050060, 1050061,
    1050062, 1050063, 1050064, 1050075, 1050076, 1050077, 1050078, 1050088, 1050089, 1050090,
    1050091, 1051037, 1051038, 1051039, 1051041, 1051042, 1051043, 1051062, 1051063, 1051064,
    1051065, 1051066, 1051067, 1051068, 1051069, 1051082, 1051083, 1051084, 1051085, 1060056,
    1060057, 1060058, 1060059, 1060061, 1060062, 1060063, 1060064, 1060065, 1060068, 1060069,
    1060070, 1061006, 1061009, 1061024, 1061025, 1061026, 1061050, 1061051, 1061052, 1061057,
    1061058, 1061059, 1061060, 1061061, 1061062, 1061063, 1061064, 1061080, 1061081, 1061082,
    1062002, 1062004, 1062006, 1072015, 1072016, 1072025, 1072026, 1072027, 1072034, 1072059,
    1072060, 1072061, 1072067, 1072068, 1072069, 1072079, 1072080, 1072082, 1072083, 1072101,
    1072102, 1072103, 1072118, 1072120, 1072121, 1072123, 1072124, 1072164, 1072165, 1072166,
    1072167, 1072170, 1072182, 1072183, 1072184, 1072185, 1072203, 1072204, 1072205, 1082012,
    1082014, 1082015, 1082016, 1082017, 1082018, 1082048, 1082049, 1082050, 1082068, 1082071,
    1082073, 1082083, 1082085, 1082089, 1082090, 1082091, 1082106, 1082107, 1082108, 1082109,
    1082110, 1082111, 1082112, 1082125, 1082126, 1082127, 1452000, 1452001, 1452002, 1452003,
    1452005, 1452006, 1452007, 1452008, 1452009, 1452010, 1452011, 1452012, 1452013, 1452014,
    1452015, 1452017, 1462000, 1462001, 1462002, 1462003, 1462004, 1462005, 1462006, 1462007,
    1462009, 1462010, 1462011, 1462012, 1462013, 1462018, 1002107, 1002108, 1002109, 1002110,
    1002111, 1002122, 1002123, 1002124, 1002125, 1002126, 1002127, 1002128, 1002129, 1002130,
    1002131, 1002146, 1002147, 1002148, 1002149, 1002150, 1002171, 1002172, 1002173, 1002175,
    1002176, 1002177, 1002179, 1002180, 1002182, 1002183, 1002184, 1002207, 1002208, 1002209,
    1002247, 1002248, 1002249, 1002281, 1002282, 1002283, 1002284, 1002285, 1002323, 1002324,
    1002325, 1002326, 1002327, 1002328, 1002329, 1002330, 1040031, 1040032, 1040033, 1040034,
    1040035, 1040042, 1040043, 1040044, 1040048, 1040049, 1040050, 1040057, 1040058, 1040059,
    1040060, 1040061, 1040062, 1040063, 1040082, 1040084, 1040094, 1040095, 1040096, 1040097,
    1040098, 1040099, 1040105, 1040106, 1040107, 1040108, 1040109, 1040110, 1040115, 1040116,
    1040117, 1040118, 1041003, 1041036, 1041037, 1041038, 1041039, 1041040, 1041044, 1041045,
    1041047, 1041048, 1041049, 1041050, 1041057, 1041058, 1041059, 1041060, 1041075, 1041076,
    1041077, 1041078, 1041079, 1041080, 1041094, 1041095, 1041100, 1041101, 1041102, 1041103,
    1041105, 1041106, 1041107, 1041115, 1041116, 1041117, 1041118, 1051006, 1051007, 1051008,
    1051009, 1060021, 1060022, 1060023, 1060024, 1060025, 1060031, 1060032, 1060033, 1060037,
    1060038, 1060039, 1060043, 1060044, 1060045, 1060046, 1060050, 1060051, 1060052, 1060071,
    1060072, 1060073, 1060083, 1060084, 1060085, 1060086, 1060087, 1060088, 1060093, 1060094,
    1060095, 1060097, 1060098, 1060099, 1060104, 1060105, 1060106, 1060107, 1061003, 1061029,
    1061030, 1061031, 1061032, 1061033, 1061037, 1061038, 1061040, 1061041, 1061042, 1061043,
    1061044, 1061045, 1061046, 1061053, 1061054, 1061055, 1061056, 1061069, 1061070, 1061071,
    1061076, 1061077, 1061078, 1061079, 1061093, 1061094, 1061099, 1061100, 1061101, 1061102,
    1061104, 1061105, 1061106, 1061114, 1061115, 1061116, 1061117, 1072022, 1072028, 1072029,
    1072030, 1072031, 1072032, 1072036, 1072065, 1072066, 1072070, 1072071, 1072084, 1072085,
    1072086, 1072087, 1072104, 1072105, 1072106, 1072107, 1072108, 1072109, 1072128, 1072131,
    1072150, 1072151, 1072152, 1072161, 1072162, 1072163, 1072171, 1072172, 1072173, 1072174,
    1072192, 1072193, 1072194, 1072195, 1082029, 1082030, 1082031, 1082033, 1082034, 1082037,
    1082038, 1082039, 1082042, 1082043, 1082044, 1082046, 1082066, 1082067, 1082074, 1082075,
    1082092, 1082093, 1082094, 1082095, 1082096, 1082097, 1082118, 1082119, 1082120, 1082142,
    1082143, 1082144, 1092018, 1092019, 1092020, 1332000, 1332001, 1332002, 1332003, 1332004,
    1332011, 1332013, 1332014, 1332018, 1332023, 1332027, 1332031, 1472000, 1472001,
    1472002, 1472003, 1472004, 1472005, 1472006, 1472007, 1472008, 1472009, 1472010, 1472011,
    1472012, 1472013, 1472014, 1472015, 1472016, 1472017, 1472018, 1472019, 1472020, 1472021,
    1472023, 1472024, 1472025, 1472026, 1472027, 1472028, 1472029, 1472031, 1472033, 1302003,
    1302006, 1322010, 1322011, 1332006, 1332008, 1332009, 1332010, 1332016, 1332019, 1332022,
    1332026, 1422006, 1402001, 1412001, 1422000, 1422004, 1432000, 1432001, 1442000, 1442004,
    1002610, 1002613, 1002616, 1002619, 1002634, 1002637, 1002640, 1002643, 1052095, 1052101,
    1052104, 1052107, 1052110, 1052116, 1052119, 1052122, 1052125, 1052128, 1072285, 1072288,
    1072291, 1072297, 1072306, 1072309, 1072312, 1072315, 1072338, 1082180, 1082186, 1082189,
    1082201, 1082204, 1082207, 1082210, 1482000, 1482001, 1482002, 1482003, 1482004, 1482005,
    1482006, 1482007, 1482009, 1482010, 1482011, 1492000, 1492001, 1492002, 1492003, 1492004,
    1492005, 1492006, 1492007, 1492009, 1492010, 1492011
];
var status = -1;
function action(mode, type, selection) {
    if (mode == 1 && type != 1) {
        status++;
    } else {
        if (type == 1 && mode == 1) {
            status++;
            selection = 1;
        } else if (type == 1 && mode == 0) {
            status++;
            selection = 0;
        } else {
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        cm.sendNext("결혼식을 진행하신 분들에게 작은 선물을 준비했습니다. 장비창, 소비창에 빈 칸이 있는지 확인해 주세요. 그럼, 안녕히 가십시오. 나가는 곳이 이쪽입니다.");
    } else if (status == 1) {
        if (cm.getInvSlots(1) >= 1 && cm.getInvSlots(2) >= 1) {
            if (Math.random() < 0.3)
                cm.gainItem(normalequips[Math.floor(Math.random() * normalequips.length)], 1);
            else
                cm.gainItem(normalscrolls[Math.floor(Math.random() * normalscrolls.length)], 1);
        } else {
            cm.sendOk("장비창, 소비창에 빈칸을 한 칸 이상 만드신 후 다시 말을 걸어주세요.");
            cm.dispose();
            return;
        }
        cm.warp(100000000);
        cm.dispose();
    }
}