const CB  = require('Creep.Body')

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
        const count = _.filter(Game.creeps, (creep) => creep.memory.role == role).length
          return count
        console.log('could not find '+ role + ' to count');
    }
  }

  spawn(role) {
    let body
    switch (role) {
      case 'harvester' :
        if ( Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {dryRun: true} ) == OK ) {
            console.log('Spawning new harvester: ' + newName(role))
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
              {memory: {role: role}} )
          }
        break

      case 'builder' :
        if( Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {dryRun: true} ) == OK  ) {
            console.log('Spawning new builder: ' + newName(role))
            Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
              {memory: {role: role}})
          }
        break

      case 'soldier':
        // soldier is spawnAvailable then spawns
        body = body_parts.get('zwaard')
        if (this._spawn_able(body) ) {
          Game.spawns['Spawn1'].spawnCreep(body, newName(role),
            {memory: {role: role}} )
        }
        break

        case 'upgrader' :
          body = CB.parts(role)
          // console.log(body);
          if (this._spawn_able(body) ) {
            Game.spawns['Spawn1'].spawnCreep(body, newName(role),
              {memory: {role: role}} )
          }

        break
      default:
        console.log("no role found for " + role)
      }

    }
    _dry_run() {
      // TODO 2 : Create abstraction of body_parts based on roles
    }

    _spawn_able(body) {
      if ( Game.spawns['Spawn1'].spawnCreep(body, 'spawn_able',
        {dryRun: true} ) == OK) {
            return true
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
  [2, 'builder'],
  [3, 'upgrader'],
  [4, 'soldier']
]
)

var role_amount = new Map([
  // NOTE: Map with the preferred amount of creeps per role
  ['harvester', 2],
  ['builder', 1],
  ['soldier', 1],
  ['upgrader',1]
])

var body_parts = new Map([
  // TODO: 4 Create a bodyparts class
  ['default',[WORK,CARRY,MOVE]],
  ['zwaard',[MOVE,MOVE,ATTACK,TOUGH,TOUGH]]
])
