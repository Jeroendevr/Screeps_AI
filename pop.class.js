class PopulationManager {

  constructor () {
    console.log('Constructor called')

    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});
    }
  }

  spawn(role) {
    switch (role) {
      case 'harvester' :
        console.log('Spwaning new harvester: ' + newName(role))
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {memory: {role: role}})
        break

      case 'builder' :
        console.log('Spwaning new builder: ' + newName(role))

      default:
        console.log("no role found")

      }

    }
}


module.exports = new PopulationManager()

function newName(role){
  var newName = role + Game.time
}
