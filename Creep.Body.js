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
      let BODY_ARR
      console.log("Searching parts for role " + role);
      function fill_body_arr(value, key, map) {
        console.log(key);
        BODY_ARR += key
      }

      body_upgrader.forEach(fill_body_arr)


      switch (role) {
        case 'upgrader' :
          let BODY_ARR = []
          for (var key in body_upgrader.keys()) {
            BODY_ARR += key
            console.log(BODY_ARR);
          }
          // if (body_upgrader.has(this.ROOMCONTROL) === true) {
          //     return body_upgrader.get(this.ROOMCONTROL)
          // }
          // else {
          //   console.log('Could not found parts for role ' + role + ' Matching level '
          //     + this.ROOMCONTROL);
          // }

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
  // [1,[WORK,CARRY,CARRY,CARRY,MOVE]],
  // [2,[WORK,CARRY,CARRY,MOVE]]
])

const body_soldier = new Map([
  [1,[[MOVE,ATTACK,ATTACK,TOUGH,TOUGH]]],
  [2,[[]]]
])
