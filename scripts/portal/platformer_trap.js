function enter(pi) {
    pi.getPlayer().getStat().heal(pi.getPlayer())
    switch (pi.getPlayer().getMapId()) {
        case 993001040:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4091, -2068));
            break;
        case 993001060:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4111, -3388));
            break;
        case 993001070:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-754, 92));
            break;
        case 993001080:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -268));
            break;
        case 993001090:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4175, -688));
            break;
        case 993001100:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3103, -208));
            break;
        case 993001110:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-300, 92));
            break;
        case 993001120:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001130:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-754, 92));
            break;
        case 993001140:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3104, -2128));
            break;
        case 993001150:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001160:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4111, -3388));
            break;
        case 993001170:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -268));
            break;
        case 993001180:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-510, 92));
            break;
        case 993001190:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-754, 92));
            break;
        case 993001200:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-2885, -148));
            break;
        case 993001210:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4148, 92));
            break;
        case 993001220:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-676, -268));
            break;
        case 993001230:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001240:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0F, 1000, 600));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0D, 0, 1000, 300, 0));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0B, 5));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001250:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001260:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-754, 92));
            break;
        case 993001270:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4111, -3388));
            break;
        case 993001280:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-676, -273));
            break;
        case 993001290:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3096, -208));
            break;
        case 993001300:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0F, 1000, 600));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0D, 0, 0, 0, 200));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-5218, 92));
            break;
        case 993001310:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-2964, 2132));
            break;
        case 993001320:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001330:
            pi.warp(993001330);
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3464, -28));
            break;
        case 993001340:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3514, -3748));
            break;
        case 993001350:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3830, -3780));
            break;
        case 993001360:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001370:
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4129, -88));
            break;
        case 993001380:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0F, 1000, 600));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0D, 0, 1000, 300, 0));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CameraCtrl(0x0B, 5));
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-4128, -88));
            break;
        case 993001390:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-3072, -88));
            break;
        case 993001400:
            pi.warp(pi.getPlayer().getMapId());
            pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.CharReLocationPacket(-5226, -128));
            break;
    }
    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.SendPacket(694, "05 00 00 00 D0 07 00 00 00"));
    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.playSE("Sound/Ambience.img/warning"));
    var rand = Packages.server.Randomizer.nextInt(11);
    switch (pi.getPlayer().getMapId()) {
        case 993001180:
            break;
        default:
            switch (rand) {
                case 0:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070200, 500, "����... �����߾����.", ""));
                    break;
                case 1:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070200, 500, "�̷� �Ϸ� �������� ����.", ""));
                    break;
                case 2:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070200, 500, "��! ��! ��! ��! �����ϴµ� �����߾�!", ""));
                    break;
                case 3:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070200, 500, "�ƹ��� ���� �� ����Ʈ 200���� �ؾ߰ڴ�.", ""));
                    break;
                case 4:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070201, 500, "��-���� ������ �� �ƴѰ���?", ""));
                    break;
                case 5:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070201, 500, "����...������.", ""));
                    break;
                case 6:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070202, 500, "�����ϱ� û���̴�.", ""));
                    break;
                case 7:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070202, 500, "��Ʈ �����ٱ�? ����.", ""));
                    break;
                case 8:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070202, 500, "������ �ȵ�����...������.", ""));
                    break;
                case 9:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070203, 500, "�� �� �� �ִٰ� �����Ѵ�. �Ƹ�...", ""));
                    break;
                case 10:
                    pi.getClient().getSession().writeAndFlush(Packages.tools.packet.SLFCGPacket.OnYellowDlg(9070203, 500, "�����ú����� ���� �������̱�.", ""));
                    break;
            }
            break;
    }

}