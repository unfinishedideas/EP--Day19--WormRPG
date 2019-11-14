import { Player } from './../src/player.js';

describe('Player', () => {

  test('should check if we can make a hacker with tech = 14', () => {
    var newPlayer = new Player("Jim")
    newPlayer.addAttributes("hacker", 3, 5);
    expect(newPlayer.tech).toEqual(16);
  });

  test('should check if we can make a hacker with tech = 14', () => {
    var newPlayer = new Player("Jim")
    newPlayer.addAttributes("hacker", 3, 5);
    expect(newPlayer.dex).toEqual(3);
  });

});
