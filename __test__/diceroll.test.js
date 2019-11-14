import { DiceRoller } from './../src/diceroll.js';


describe('DiceRoller', () => {
  test('should check if RollDice returns a number', () => {
    var roller = new DiceRoller(20)
    expect(roller.rollDice()).toBeLessThanOrEqual(20);
  });
});
