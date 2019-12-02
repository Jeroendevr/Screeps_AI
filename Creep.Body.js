class CreepBody {

    // NOTE: Class for organizing bodypart arrays
    // When exporting
    constructor () {
    this.spawn = 'Spawn1'
    // this.ROOMCONTROL = Game.spawns[this.spawn].room.controller.level()
    // console.log('Room control level is '+ Game.spawns[this.spawn].room.controller.level);
    this.SPAWN_ENERGY = Game.spawns[this.spawn].store.getCapacity(RESOURCE_ENERGY)
    console.log("The amount of energy for this spawn is " + this.SPAWN_ENERGY);

    }

    parts(role) {
      let BODY_ARR = []
      console.log("Searching parts for role " + role);
      function fill_body_arr(value, key, map) {
        BODY_ARR.push(key)
      }

      switch (role) {
        case 'upgrader' :
          body_upgrader.forEach(fill_body_arr)
          console.log('The body part list is ' + BODY_ARR)
          return BODY_ARR
          break
        default:
          console.log("No parts found for role "+ role);
      }
    }
  }
module.exports = new CreepBody()

const body_upgrader = new Map([
  // NOTE: Body parts as keys, ratio as numbers
  [MOVE, 1],
  [CARRY, 1],
  [WORK, 1]
])

const body_soldier = new Map([
  [1,[[MOVE,ATTACK,ATTACK,TOUGH,TOUGH]]],
  [2,[[]]]
])
