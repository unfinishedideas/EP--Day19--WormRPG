import { Task } from './../src/task.js';
import { Player } from './../src/player.js';

describe('Task', () => {

  test('should check if a player wins the check', () => {
    let newPlayer = new Player("Jim")
    let newTask = new Task('tech', 17)
    newPlayer.addAttributes("hacker", 3, 5);
    expect(newTask.skillCheck(newPlayer, 1)).toEqual(true);
  });
  test('should check if a player loses the check', () => {
    let newPlayer = new Player("Jim")
    let newTask = new Task('tech', 300)
    newPlayer.addAttributes("hacker", 3, 5);
    expect(newTask.skillCheck(newPlayer, 1)).toEqual(false);
  });
});
