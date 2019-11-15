export class Party{
  constructor(){
    this.playerArray = [];
    this.funds = 1000;
  }
  addChar(character) {
    this.playerArray.push(character);
  }
}
