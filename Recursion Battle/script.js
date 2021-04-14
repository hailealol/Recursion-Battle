var enemies = [
  {
    name: "Eldon",
    type: "Spirit",
    specialAbility: "Speed",
    hitPoints: 30.0,
    power: 10.0,
    dodge: 20.0,
    block: 20.0,
  },
  {
    name: "Soren",
    type: "Undead",
    specialAbility: "Luck",
    hitPoints: 60.0,
    power: 30.0,
    dodge: 20.0,
    block: 20.0,
  },
  {
    name: "Zaine",
    type: "Ethereal",
    specialAbility: "Knowledge",
    hitPoints: 90.0,
    power: 30.0,
    dodge: 40.0,
    block: 30.0,
  },
  {
    name: "Ashen",
    type: "Undead",
    specialAbility: "Luck",
    hitPoints: 60.0,
    power: 50.0,
    dodge: 40.0,
    block: 40.0,
  },
  {
    name: "Aura",
    type: "Spirit",
    specialAbility: "Speed",
    hitPoints: 80.0,
    power: 50.0,
    dodge: 60.0,
    block: 60.0,
  },
];

var heroes = [
  {
    name: "Jade",
    type: "Human",
    experience: "Beginner",
    specialAbility: "Quick reflex",
    hitPoints: 50.0,
    power: 20.0,
    dodge: 50.0,
    block: 50.0,
  },
  {
    name: "Storm",
    type: "Undead",
    experience: "Expert",
    specialAbility: "Electric",
    hitPoints: 60.0,
    power: 60.0,
    dodge: 40.0,
    block: 40.0,
  },
];

var heroMultiplier = "";
function heroRoll() {
  heroMultiplier = Math.floor(Math.random() * 11);
  console.log("Hero roll: " + heroMultiplier);
}

var enemyMultiplier = "";
function enemyRoll() {
  enemyMultiplier = Math.floor(Math.random() * 11);
  console.log("Enemy roll: " + enemyMultiplier);
}

enemyRoll();
heroRoll();

function game() {
  randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
  randomHero = heroes[Math.floor(Math.random() * heroes.length)];

  function hero() {
    while (heroMultiplier >= enemyMultiplier && randomEnemy.hitPoints != 0) {
      randomEnemy.hitPoints -= 10;
      console.log(`${randomEnemy.name} loses 10 hp`);
      console.log(`${randomEnemy.name}'s health is ${randomEnemy.hitPoints}`);
      console.log("-------------------");
      heroRoll();
      enemyRoll();
      hero();
      if (randomEnemy.hitPoints == 0) {
        console.log("####Enemy has lost####");
        console.log("Game over-------------");
      }
    }
  }
  hero();

  function enemy() {
    while (enemyMultiplier >= heroMultiplier && randomHero.hitPoints != 0) {
      randomHero.hitPoints -= 10;
      console.log(`${randomHero.name} loses 10 hp`);
      console.log(`${randomHero.name}'s health is ${randomHero.hitPoints}`);
      console.log("-------------------");
      enemyRoll();
      heroRoll();
      hero();
      if (randomHero.hitPoints == 0) {
        console.log("####Hero has lost####");
        console.log("Game over-------------");
      }
    }
  }
  enemy();
}
game();
