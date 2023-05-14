package server.quest;

import client.*;
import client.inventory.Item;
import client.inventory.MapleInventoryType;
import client.inventory.MaplePet;
import constants.GameConstants;
import tools.Pair;

import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.LinkedList;
import java.util.List;

public class MapleQuestRequirement implements Serializable
{
  private static final long serialVersionUID = 9179541993413738569L;
  
  private final MapleQuest quest;
  
  private final MapleQuestRequirementType type;
  
  private int intStore;
  
  private String stringStore;
  
  private List<Pair<Integer, Integer>> dataStore;
  
  public MapleQuestRequirement(MapleQuest quest, MapleQuestRequirementType type, ResultSet rse) throws SQLException
  {
    String[] first, second;
    int i;
    this.type = type;
    this.quest = quest;
    switch (type)
    {
      case pet:
      case mbcard:
      case mob:
      case item:
      case quest:
      case skill:
      case job:
        this.dataStore = new LinkedList<>();
        first = rse.getString("intStoresFirst").split(", ");
        second = rse.getString("intStoresSecond").split(", ");
        if (first.length <= 0 && rse.getString("intStoresFirst").length() > 0)
        {
          this.dataStore.add(new Pair<>(Integer.valueOf(Integer.parseInt(rse.getString("intStoresFirst"))), Integer.valueOf(Integer.parseInt(rse.getString("intStoresSecond")))));
        }
        for (i = 0; i < first.length; i++)
        {
          if (first[i].length() > 0 && second[i].length() > 0)
          {
            this.dataStore.add(new Pair<>(Integer.valueOf(Integer.parseInt(first[i])), Integer.valueOf(Integer.parseInt(second[i]))));
          }
        }
        break;
      case partyQuest_S:
      case dayByDay:
      case normalAutoStart:
      case subJobFlags:
      case fieldEnter:
      case pettamenessmin:
      case npc:
      case questComplete:
      case pop:
      case interval:
      case mbmin:
      case lvmax:
      case lvmin:
        this.intStore = Integer.parseInt(rse.getString("stringStore"));
        break;
      case end:
        this.stringStore = rse.getString("stringStore");
        break;
    }
  }
  
  public boolean check(MapleCharacter c, Integer npcid)
  {
    String timeStr;
    Calendar cal;
    int[] partyQuests;
    int sRankings;
    switch (this.type)
    {
      case job:
        for (Pair<Integer, Integer> a : this.dataStore)
        {
          if (a.getRight().intValue() == c.getJob() || c.isGM())
          {
            return true;
          }
        }
        return false;
      case skill:
        for (Pair<Integer, Integer> a : this.dataStore)
        {
          boolean acquire = (a.getRight().intValue() > 0);
          int skill = a.getLeft().intValue();
          Skill skil = SkillFactory.getSkill(skill);
          if (acquire)
          {
            if (skil.isFourthJob())
            {
              if (c.getMasterLevel(skil) == 0)
              {
                return false;
              }
              continue;
            }
            if (c.getSkillLevel(skil) == 0)
            {
              return false;
            }
            continue;
          }
          if (c.getSkillLevel(skil) > 0 || c.getMasterLevel(skil) > 0)
          {
            return false;
          }
        }
        return true;
      case quest:
        for (Pair<Integer, Integer> a : this.dataStore)
        {
          MapleQuestStatus q = c.getQuest(MapleQuest.getInstance(a.getLeft().intValue()));
          int state = a.getRight().intValue();
          if (state == 0 || (
              q == null && state == 0))
          {
            continue;
          }
          if (q == null || q.getStatus() != state)
          {
            return false;
          }
        }
        return true;
      case item:
        for (Pair<Integer, Integer> a : this.dataStore)
        {
          int itemId = a.getLeft().intValue();
          short quantity = 0;
          MapleInventoryType iType = GameConstants.getInventoryType(itemId);
          for (Item item : c.getInventory(iType).listById(itemId))
          {
            quantity = (short) (quantity + item.getQuantity());
          }
          int count = a.getRight().intValue();
          if (quantity < count || (count <= 0 && quantity > 0))
          {
            return false;
          }
        }
        return true;
      case lvmin:
        return (c.getLevel() >= this.intStore);
      case lvmax:
        return (c.getLevel() <= this.intStore);
      case end:
        timeStr = this.stringStore;
        if (timeStr == null || timeStr.length() <= 0)
        {
          return true;
        }
        cal = Calendar.getInstance();
        cal.set(Integer.parseInt(timeStr.substring(0, 4)), Integer.parseInt(timeStr.substring(4, 6)), Integer.parseInt(timeStr.substring(6, 8)), Integer.parseInt(timeStr.substring(8, 10)), 0);
        return (cal.getTimeInMillis() >= System.currentTimeMillis());
      case mob:
        for (Pair<Integer, Integer> a : this.dataStore)
        {
          int mobId = a.getLeft().intValue();
          int killReq = a.getRight().intValue();
          if (c.getQuest(this.quest).getMobKills(mobId) < killReq)
          {
            return false;
          }
        }
        return true;
      case npc:
        return (npcid == null || npcid.intValue() == this.intStore);
      case fieldEnter:
        if (this.intStore > 0)
        {
          return (this.intStore == c.getMapId());
        }
        return true;
      case pop:
        return (c.getFame() >= this.intStore);
      case questComplete:
        return (c.getNumQuest() >= this.intStore);
      case interval:
        return (c.getQuest(this.quest).getStatus() != 2 || c.getQuest(this.quest).getCompletionTime() <= System.currentTimeMillis() - (this.intStore * 60L) * 1000L);
      case pet:
        for (Pair<Integer, Integer> a : this.dataStore)
        {
          if (c.getPetById(a.getRight().intValue()) != -1)
          {
            return true;
          }
        }
        return false;
      case pettamenessmin:
        for (MaplePet pet : c.getPets())
        {
          if (pet.getSummoned() && pet.getCloseness() >= this.intStore)
          {
            return true;
          }
        }
        return false;
      case partyQuest_S:
        partyQuests = new int[]{1200, 1201, 1202, 1203, 1204, 1205, 1206, 1300, 1301, 1302};
        sRankings = 0;
        for (int i : partyQuests)
        {
          String rank = c.getOneInfo(i, "rank");
          if (rank != null && rank.equals("S"))
          {
            sRankings++;
          }
        }
        return (sRankings >= 5);
      case subJobFlags:
        return (c.getSubcategory() == this.intStore / 2);
      case craftMin:
      case willMin:
      case charismaMin:
      case insightMin:
      case charmMin:
      case senseMin:
        return (c.getTrait(MapleTrait.MapleTraitType.getByQuestName(this.type.name())).getLevel() >= this.intStore);
    }
    return true;
  }
  
  public MapleQuestRequirementType getType()
  {
    return this.type;
  }
  
  public String toString()
  {
    return this.type.toString();
  }
  
  public List<Pair<Integer, Integer>> getDataStore()
  {
    return this.dataStore;
  }
}
