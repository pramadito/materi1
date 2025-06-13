class Employee {
  name: string; // public
  #email: string; // private
  salary: number;
  hoursWork: number;

  constructor(name: string, email: string) {
    this.name = name;
    this.#email = email;
    this.salary = 0;
    this.hoursWork = 0;
  }
  addWorksHours(hours: number) {
    this.hoursWork += hours;
    return `added ${this.hoursWork} hours`;
  }
  checkWorksHours() {
    return `${this.hoursWork} hours`;
  }
  work() {
    return `${this.name} is working`;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, email: string) {
    super(name, email);
  }

  totalSalary() {
    if (this.hoursWork > 6) {
      return this.hoursWork * 75000;
    } else {
      return this.hoursWork * 100000;
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name: string, email: string) {
    super(name, email);
  }

  totalSalary() {
    if (this.hoursWork > 6) {
      return this.hoursWork * 30000;
    } else {
      return this.hoursWork * 50000;
    }
  }
}

const fullTimeEmployee = new FullTimeEmployee("test", "test");
console.log(fullTimeEmployee.addWorksHours(7));

console.log(fullTimeEmployee.checkWorksHours());
console.log(fullTimeEmployee.totalSalary());

// no 2

class PlayerShooting {
  name: string;
  health: number;
  power: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  damage(power: number) {}
  numberItem() {}
  showStatus() {}
}

class ShootingGameWell {
  player1: object[];
  player2: object[];

  constructor(player1: object[], player2: object[]) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getRandomItem() {}
  start() {}
}

/*

Property → name, health (default 100), power (default 10)
damage(power) →  subtract player health
useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)


*/

//02

class Player {
  name: string;
  health: number;
  power: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.power = 10;
  }
  damage(power: number) {
    this.health -= power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }
  
  showStatus(){
    return `${this.name} -> health: ${this.health} | power: ${this.power}`;
  }
}

class ShootingGame {
  player1: Player;
  player2: Player;

  constructor(player1:Player, player2:Player){
    //console.log(player1);
    //console.log(player2);

    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem(){
    /**
     *  power = 10 , health = 0
     *  power = 0 , health = 10
     *  power = 10, health = 10
     *  power = 0, health = 0
     */
  }
}

const player1 = new Player("budi");
const player2 = new Player("joko");

const shootingGame = new ShootingGame(player1,player2)