class SpawnManager {

  getAvailableSpawns () {
      var availableSpawns = []
      for(var name in Game.spawns){
          if(Game.spawns[name].spawning){
              var spawningCreep = Game.creeps[Game.spawns[name].spawning.name]
              Game.spawns[name].room.visual.text("Spawning " + spawningCreep.memory.role, Game.spawns[name].pos.x + 1, Game.spawns[name].pos.y, {align: 'left', opacity: 0.8})
          } else {
              availableSpawns.push(Game.spawns[name])
          }
      }
      return availableSpawns
    }
  }

module.exports = new SpawnManager();
