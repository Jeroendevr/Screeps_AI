class CreepBody {

    // NOTE: Class for organizing bodypart arrays
    // When exporting
    constructor () {
      this.spawn = 'Spawn1'
      this.SPAWN_ENERGY = Game.spawns[this.spawn].store.getCapacity(RESOURCE_ENERGY)
      // console.log("The amount of energy for this spawn is " + this.SPAWN_ENERGY);
    }

    parts(role) {
      switch (role) {
        case 'upgrader' :
          let BODY_ARR = Array()
          function fill_body_arr(value, key, map) {
            while (value >= 1 ) {
              BODY_ARR.push(key)
              value -= 1
            }
          }
          body_upgrader.forEach(fill_body_arr)
          const copies_of_body_arr_possible = 0
          return BODY_ARR

          break
        default:
          console.log("No parts found for role "+ role);
      }

    }

    _creep_cost(BODY_ARR) {
        let total_cost = 0

        function calc_total(value, index, object) {
          total_cost += BODYPART_COST[value]
        }

        BODY_ARR.forEach(calc_total)
        return total_cost
      }
}
module.exports = new CreepBody()

const body_upgrader = new Map([
  // NOTE: Body parts as keys, ratio as numbers
  [MOVE, 1],
  [CARRY, 2],
  [WORK, 1]
  // [1,[WORK,CARRY,CARRY,CARRY,MOVE]],
  // [2,[WORK,CARRY,CARRY,MOVE]]
])

const body_soldier = new Map([
  [1,[[MOVE,ATTACK,ATTACK,TOUGH,TOUGH]]],
  [2,[[]]]
])
