function enter(pi) {
var portal = ["01st", "05st", "06st", "08st", "11st"];
var random = Math.floor(Math.random() * portal.length);
        var portalPos = new java.awt.Point(pi.getPlayer().getMap().getPortal(portal[random]).getPosition());
        if(random == 4){
            pi.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.environmentChange("Map/Effect.img/quest/party/clear", 4));
            pi.getPlayer().getMap().broadcastMessage(Packages.tools.packet.CField.achievementRatio(45));
        }
        pi.getPlayer().getClient().getSession().writeAndFlush(Packages.tools.packet.CField.instantMapWarp(pi.getPlayer(), pi.getPlayer().getMap().getPortal(portal[random]).getId()));
        pi.getPlayer().getMap().movePlayer(pi.getPlayer(), new java.awt.Point(pi.getPlayer().getMap().getPortal(portal[random]).getPosition()));
}