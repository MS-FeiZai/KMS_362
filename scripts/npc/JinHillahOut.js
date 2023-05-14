﻿var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        if (cm.getPlayer().getMap().getNumMonsters() > 0) {
            cm.sendYesNoS("이곳은 위험하다. 전투를 포기하고 밖으로 나갈까?", 0x26);
        } else {
            cm.sendYesNoS("진 힐라를 물리쳤다. '욕망의 제단 입구'로 돌아갈까?", 0x26);
        }
    } else if (status == 1) {
        cm.getPlayer().addKV("bossPractice", "0");
	cm.getPlayer().cancelEffectFromBuffStat(Packages.client.MapleBuffStat.DebuffIncHp);
        cm.warp(450011990, 1);
        cm.dispose();
    }
}