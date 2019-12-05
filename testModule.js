class testModule {
    manage () {
      if ( this.spawnAvailable ) {
        const pos_roles = role.values()
        for ( var r of pos_roles ) {
          // For each role possible chech the amount of those roles wanted, if wanted then spawn
          if ( this.count_role(r) < role_amount.get(r) ) {
            this.spawn(r)
            break
          }
        }
      }
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
