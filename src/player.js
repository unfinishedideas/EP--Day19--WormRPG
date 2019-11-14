
export class Player {
  constructor(name){
    this.name = name;
    this.tech = 0;
    this.dex = 0;
    this.cha = 0;
    this.level = 1;
    this.xp = 0;
    this.inventory = [];
  }
  addAttributes(type, roll1, roll2) {
    if (type === "hacker") {
      this.type = "hacker";
      this.tech = 16;
      this.dex = roll1;
      this.cha = roll2;
    } else if (type === "SafeCracker") {
      this.type = "SafeCracker";
      this.dex = 16;
      this.tech = roll1;
      this.cha = roll2;
    } else if (type === "social") {
      this.type = "social";
      this.cha = 16;
      this.dex = roll1;
      this.tech = roll2;
    }

  }
}
