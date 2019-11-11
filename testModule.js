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

  function newName(role){
    return role + Game.time
  }

  var role = new Map([
    // NOTE: Map with all roles, used for reference and iteration
    [1, 'harvester'],
    [2, 'builder'],
    [3, 'upgrader'],
    [4, 'soldier']
  ]
  )

  var role_amount = new Map([
    // NOTE: Map with the preferred amount of creeps per role
    ['harvester', 2],
    ['builder', 1],
    ['soldier', 1]
  ])

  var body_parts = new Map([
    ['default',[WORK,CARRY,MOVE]],
    ['zwaard',[MOVE,MOVE,ATTACK,TOUGH,TOUGH]]
  ])


module.exports = new testModule()
