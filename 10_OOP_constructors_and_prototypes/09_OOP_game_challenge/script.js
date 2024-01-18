//OOP Game challenge

function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (xp) {
  this.points += xp;
  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }
  console.log(this.describe());
};

Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points.`;
};

const Player1 = new Player("Bob");
const Player2 = new Player("Rob");

Player1.gainXp(4);
Player2.gainXp(7);
Player1.gainXp(6);
Player2.gainXp(3);
Player1.gainXp(2);
Player2.gainXp(9);
Player1.gainXp(3);
Player2.gainXp(7);

// console.log(Player1.describe());
// console.log(Player2.describe());
