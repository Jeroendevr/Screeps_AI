const SM = require('manager_spawn');
const utils = require('code_utils')

class BuildingPlanner {

  plan() {
    this._plan_extension()

    }
  _plan_extension(){
         // console.log("Planning to build extention")
         var availableSpawns = SM.getAvailableSpawns()
         if (availableSpawns.length == 0){
             return
         }
         var spawn = availableSpawns.pop()
         var radius = 2
         for(var x of utils.range(spawn.pos.x-radius, spawn.pos.x+radius+1)){
             for(var y of utils.range(spawn.pos.y-radius, spawn.pos.y+radius+1)){
                 if(this._checkSurroundingsForClear(x, y, 1, spawn.room)){
                     console.log("Spawning building site at:",x,y)
                     console.log(spawn.room.createConstructionSite(x, y, STRUCTURE_EXTENSION))
                     return
                 }
             }
         }
     }
    _checkSurroundingsForClear(x, y, radius, room) {
        for(var xTile of utils.range(x-radius, x+radius)){
            for(var yTile of utils.range(y-radius, y+radius)){
                var tileDetails = room.lookAt(xTile, yTile)
                if(tileDetails.length > 1){
                    return 0
                }
            }
        }
        return 1
    }
  }



  // NOTE: Function to dynamically add extensions


module.exports = new BuildingPlanner()
