class testModule {
    list_sources(creep) {

        const sources = creep.room.find(FIND_SOURCES)
        const source_id = sources[0].id
        console.log('The possible sources are ' + sources)
        creep.memory.source_id = source_id
        console.log('Source ID is ' + source_id);
        console.log('Current position ' + creep.pos );

    }

    spawn(role) {
      switch (role) {
        case 'soldier':
          // soldier is spawnAvailable then spawns
          // TODO: create a abstraction of the dryRun
          const body = body_parts.get('zwaard')
          if (this._spawn_able(body) ) {
            Game.spawns['Spawn1'].spawnCreep(body, newName(role),
              {memory: {role: role}} )
          }
          break
        default:
          console.log("no role found for " + role)
        }

      }

      _spawn_able(body) {
        if ( Game.spawns['Spawn1'].spawnCreep(body, 'spawn_able',
          {dryRun: true} ) == OK) {
              return true
          }
      }
}


module.exports = new testModule()
