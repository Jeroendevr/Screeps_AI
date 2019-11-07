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

  manage () {
    if ( this.spawnAvailable) {
    // TODO p1: for every role if count is lower then number spawn.
    var val = role.values()
    for ( var r of val ) {
       // console.log('Managing '+ r)
       // console.log(this.count_role() < role_amount.get(r) )
       if ( this.count_role(r) < role_amount.get(r) ){
         this.spawn(r)
       }
    }

  }
  }

  count_role (role) {
    // // TODO: iterate through all roles and count their numbers
    switch (role) {
      case 'harvester' :
        return 2
      default :
        return 0
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
        console.log('Spawning new builder: ' + newName(role))
        Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName(role),
          {memory: {role: role}})
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
  [1, 'harvester'],
  [2, 'builder']
  //[3, 'upgrader']
]
)

var role_amount = new Map([
  ['harvester', 2],
  ['builder', 1]
])
