const CB  = require('Creep.Body')

class PopulationManager {

  constructor () {
    this.spawnAvailable = this._checkAvailable()
    this.SPAWN = 'Spawn1'
    this.ROOMCONTROL_LVL = Game.spawns[this.SPAWN].room.controller.level
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
        if ( this.count_role(r) < this._role_amount(r) ) {
          this.spawn(r)
          break
        }
      }
    }
  }

  _role_amount (role) {
    const ROLE_AMOUNT = new Map([
      ['harvester',[2,2,2]],
      ['upgrader', [1,2,2]],
      ['soldier',[1,1,1]]
    ])

    switch (role) {
      case 'builder':
        return this._builder_amount()
        break
      default:
        if ( ROLE_AMOUNT.has(role) === true) {
            const ROLE_ARRAY = ROLE_AMOUNT.get(role)
            //todo first check for size of the defined array
            if (ROLE_ARRAY => ROOMCONTROL_LVL) {
              return ROLE_ARRAY[this.ROOMCONTROL_LVL - 1]
            }
            else {
              console.log('There is no amount of creeps defined for this role ' + role );
            }
        }
        else {
          console.log('No amounts defined for role ' + role);
        }
      }
    }

  _builder_amount() {
    // If there is a construction site return amount if there is none return 0
    const CONSTRUCTION_SITES = (_.filter(Game.spawns['Spawn1'].room.find(FIND_MY_CONSTRUCTION_SITES))).length;
    console.log('amount of construction sites is ' + CONSTRUCTION_SITES)
    if (isNaN(CONSTRUCTION_SITES)) {
      console.log('builder amount cannot compute construction sites');
    }
    else {
      // console.log(CONSTRUCTION_SITES);
      if (CONSTRUCTION_SITES === 0) {
        return 0
      }
      else {
        return 1
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
      default :
        const count = _.filter(Game.creeps, (creep) => creep.memory.role == role).length
        // console.log('returning ' + role + ' with ' + count);
          return count
        }
      console.log('could not find '+ role + ' to count');
  }

  spawn(role) {
    let body = []
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
        // console.log('This is a body array' + body);
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
])

var body_parts = new Map([
  // TODO: 4 Create a bodyparts class
  ['default',[WORK,CARRY,MOVE]],
  ['zwaard',[MOVE,MOVE,ATTACK,TOUGH,TOUGH]]
])
