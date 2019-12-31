import Bowerman from '../js/class/Bowerman.js';
import Swordsman from '../js/class/Swordsman.js';
import Magician from '../js/class/Magician.js';
import Daemon from '../js/class/Daemon.js';
import Undead from '../js/class/Undead.js';
import Zombie from '../js/class/Zombie.js';

test('Bowerman', () => {
  const received = new Bowerman('Igor');
  const expected = {
    name: 'Igor',
    level: 1,
    health: 100,
    type: 'Bowerman',
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Swordsman', () => {
  const received = new Swordsman('Igor');
  const expected = {
    name: 'Igor',
    level: 1,
    health: 100,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});

test('Magician', () => {
  const received = new Magician('Igor');
  const expected = {
    name: 'Igor',
    level: 1,
    health: 100,
    type: 'Magician',
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Daemon', () => {
  const received = new Daemon('Igor');
  const expected = {
    name: 'Igor',
    level: 1,
    health: 100,
    type: 'Daemon',
    attack: 10,
    defence: 40,
  };
  expect(received).toEqual(expected);
});

test('Undead', () => {
  const received = new Undead('Igor');
  const expected = {
    name: 'Igor',
    level: 1,
    health: 100,
    type: 'Undead',
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('Zombie', () => {
  const received = new Zombie('Igor');
  const expected = {
    name: 'Igor',
    level: 1,
    health: 100,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  expect(received).toEqual(expected);
});
