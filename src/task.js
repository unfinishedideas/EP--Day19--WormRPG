export class Task {
  constructor(statUsed, difficulty, name, description){
    this.statUsed = statUsed;
    this.difficulty = difficulty;
    this.name = name;
    this.description = description;
  }
  skillCheck(player, roll){
    let playerSkill;
    let playerScore = 0;
    if (this.statUsed === "tech"){
      playerSkill = player.tech;
    }
    else if (this.statUsed === "dex"){
      playerSkill = player.dex;
    }
    else if (this.statUsed === "cha"){
      playerSkill = player.cha;
    }
    else {
      console.log("something went wrong with get stat");
    }

    playerScore = (playerSkill + roll);

    if (this.difficulty <= playerScore){
      player.xp += 1;
      return true;
    }
    else {
      return false;
    }
  }
}
