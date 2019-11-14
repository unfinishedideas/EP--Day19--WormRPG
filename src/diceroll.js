export class DiceRoller{
  constructor(sides){
    this.sides = sides+1;
  }
  rollDice(){
    return Math.floor(Math.random() * (this.sides - 1) + 1);
  }
}
