Specs

DiceRoller object - takes number of sides and returns a random int between 1 and # of sides

Character Creation:----------------------------------

Player Types:
  SocialEngineer - Preferred Stat: CHA, parameters: name rolls for DEX, TECH
  ComputerHacker - Preferred Stat: TECH, parameters: name rolls for CHA, DEX
  SafeCracker - Preferred Stat: DEX, parameters: name, rolls for TECH, CHA

  Initial rolls - 12-sided

PartyObj - holds player objects


Battle System:---------------------------------------

Actions: roll 6-sided die and add relevant stat
Pick a lock - 18
dex-14 + roll
if >= 18 then: success

types of actions:
Convincing people
Picking Locks
Hacking Computers


Leveling:--------------------------------------------

once XP reaches a number level up and add 1 to stats.


Inventory:-------------------------------------------

stored in each players INV array. Each item is a unique object that boosts stats
Red Team Field Manual - boosts tech considerably
Rubber Ducky - boosts tech
Keycard - boosts dex


Narrative:--------------------------------------------

Team is waiting for assignment


  Bank robbery assignment: $1000
    talk to employees - get info
      Succeed: xp + 1, inventory + keycard
      Fail: -$40
        try and break in
          Succeed: xp +1,
          Fail: -$40 and return to try to break in
        Hack computer - get funds
          Succeed: xp +1 - end
          Fail: -$100 and try again - 4 chances
            Fail: back to convince people; no money

  Fail: Change rich kid's grades: $800


Task {
  this.type;
  this.difficulty;

}
