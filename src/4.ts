class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}
class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}
abstract class House {
  door: boolean = false;
  key: Key;
  tenants: Person[] = [];
  abstract openDoor(key: Key): void;
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person) {
    if (this.door === true) {
      return this.tenants.push(person);
    }
  }
}
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      return (this.door = true);
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
