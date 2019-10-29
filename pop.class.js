class PopulationManager {

  constructor () {
    this.spawnAvailable = this._checkAvailable()


    console.log("Spawn available " + this.spawnAvailable)

  }

  _checkAvailable () {
    console.log('availability checked')
    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});

        return false
    } else {
      return true
    }
  }

  spawn(role) {

    switch (role) {
      case 'harvester' :
        console.log('Spawning new harvester: ' + newName(role))
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {memory: {role: role}})
        break

      case 'builder' :
        console.log('Spwaning new builder: ' + newName(role))
        break

      default:
        console.log("no role found")

      }

    }
}


module.exports = new PopulationManager()

function newName(role){
  return role + Game.time
}
