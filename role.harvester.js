class roleHarvester {

  constructor () {
    this.targets = []
  }

  /** @param {Creep} creep **/
  run (creep) {
    this._find_targets(creep)

    if(creep.store.getFreeCapacity() > 0) {
      // If capacity available keep harvesting
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
      }
      else if (this.targets.length > 0) {
        // console.log('first spawn ' + this.targets[0]);
        console.log('Target length ' + this.targets.length);
        // Else find stuctures without free capacity
            // TODO: move to spawn if no free capacity
              if(creep.transfer(this.targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.say('🚛 Energy')
                if (creep.moveTo(this.targets[0], {visualizePathStyle: {stroke: '#ffffff'}}) == ERR_NO_PATH) {
                  creep.moveTo(this.targets[0], {reusePath : 5},
                    {visualizePathStyle: {stroke: '#ffffff'}})
              }
              }
      }
      else if (this.targets.length == 0) {
        // If no targets move to spawn
        const spawn = creep.room.find(FIND_STRUCTURES, {
          filter: (structure) => {
            return (structure.structureType == STRUCTURE_SPAWN)
          }
        })

        creep.moveTo(spawn[0],
          {visualizePathStyle: {stroke: '#ff40ff'}})
          // console.log(creep.moveTo(spawn[0],
          //   {visualizePathStyle: {stroke: '#ff40ff'}}));

      }

  }

  _find_targets(creep) {
    this.targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
        })
  }
};

module.exports = new roleHarvester()
