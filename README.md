[![Build Status](https://travis-ci.org/maksimr/introtask-space.svg?branch=master)](https://travis-ci.org/maksimr/introtask-space)

The task for admission to the School of Interface Development in [Yandex](https://company.yandex.com/)[1]


## Description
You are pilot of the cargo intergalactic ship. Your job is to transport cargo from one planet to another.
The cargo capacity of your ship is limited, so for one trip you may take no more than N(kg) payload.
Your ship is able to report its status (location and load) and fly to any point in the space or planet.
Planet may contain cargo that can be loaded on the ship or unloaded back to the planet.


## Task
The file [task.js](src/task.js) contain interfaces of the ship and the planet.
These interfaces are not complete and will likely require improvements.
You should complete interfaces.


## Use case
Transport cargo with weight 1000(T) from the planet *B* to the planet *A*.

```js
    var vessel = new Vessel('Yandex', [0,0], 1000);
    var planetA = new Planet('A', [0,0], 0);
    var planetB = new Planet('B', [100, 100], 5000);

    // Check current state of the ship and planets
    vessel.report();  // > Ship "Yandex". Location: 0,0. Empty.
    planetA.report(); // > Planet "A". Location: 0,0. Empty.
    planetB.report(); // > Planet "B". Location: 100,100. Available cargo: 5000(T).

    vessel.flyTo(planetB);
    planetB.loadCargoTo(vessel, 1000);
    vessel.report(); // > Ship "Yandex". Location: 'B'. Occupy: 1000 from 1000(T).

    vessel.flyTo(planetA);
    planetA.unloadCargoFrom(vessel, 500);
    vessel.report();  // > Ship "Yandex". Location: 'A'. Occupy: 500 из 1000(T).
    planetA.report(); // > Planet "A". Location: 0,0. Available cargo: 500(T).
    planetB.report(); // > Planet "B". Location: 100,100. Available cargo: 4000(T).
```


[1] 2013 year
