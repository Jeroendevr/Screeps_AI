class PopulationManager {

  constructor () {
    this.spawnAvailable = this._checkAvailable()
  }

  _checkAvailable () {
    // console.log('availability checked')
    if(Game.spawns['Spawn1'].spawning) {
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1,
            Game.spawns['Spawn1'].pos.y,
            {align: 'left', opacity: 0.8});

        return false
    }
    else {
      return true
    }
  }

  manage () {
    if ( this.spawnAvailable ) {
      var val = role.values()
      for ( var r of val ) {
        if ( this.count_role(r) < role_amount.get(r) ) {
          this.spawn(r)
        }
      }
    }
  }

  count_role (role) {
    /* count_role ('harvester') = 2
    */
    switch (role) {
      case 'harvester' :
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == role);
        return harvesters.length
      case 'builder' :
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == role);
        return builders.length
      default :
        return 1
    }
  }

  spawn(role) {
    switch (role) {
      case 'harvester' :
        console.log('Spawning new harvester: ' + newName(role))
        if ( Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {dryRun: true} ) == OK ) {
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
              {memory: {role: role}} )
          }
        break

      case 'builder' :
        console.log('Spawning new builder: ' + newName(role))
        if( Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {dryRun: true} ) == OK  ) {
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
              {memory: {role: role}})
          }
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

var role = new Map([
  // NOTE: Map with all roles, used for reference and iteration
  [1, 'harvester'],
  [2, 'builder']
  //[3, 'upgrader']
]
)

var role_amount = new Map([
  // NOTE: Map with the preferred amount of creeps per role
  ['harvester', 2],
  ['builder', 1]
])

var body_parts = new Map([
  ['default',[WORK,CARRY,MOVE]],
])
