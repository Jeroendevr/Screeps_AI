class CreepBody {

    // NOTE: Class for organizing bodypart arrays
    // When exporting
    constructor () {
    this.spawn = 'Spawn1'
    // this.ROOMCONTROL = Game.spawns[this.spawn].room.controller.level()
    // console.log('Room control level is '+ Game.spawns[this.spawn].room.controller.level);
    this.ROOMCONTROL = Game.spawns[this.spawn].room.controller.level
    }

    parts(role) {
      switch (role) {
        case 'upgrader' :
          if (body_upgrader.has(this.ROOMCONTROL) === true) {
              return body_upgrader.get(this.ROOMCONTROL)
          }
          else {
            console.log('Could not found parts for role ' + role + ' Matching level '
              + this.ROOMCONTROL);
          }

          break
        default:
          console.log("No parts found for role "+ role);
      }

    }
  }
module.exports = new CreepBody()

const body_upgrader = new Map([
  [1,[WORK,CARRY,CARRY,CARRY,MOVE]],
  [2,[WORK,CARRY,CARRY,MOVE]]
])

const body_soldier = new Map([
  [1,[[MOVE,ATTACK,ATTACK,TOUGH,TOUGH]]],
  [2,[[]]]
])
