/*Class Rover details:
  Four properties:
  1) position
  2) mode
  3) generatorWatts
  4) receiveMessage - function

An object representing the mars rover. 
*/

// Class Name Rover

class Rover {
   constructor(position, mode, generatorWatts ) {
     this.position = position;
     this.mode = mode ;
     this.generatorWatts = generatorWatts ;
   }
   receiveMessage(message){
      //handles the various types of commands it receives and updates the rover’s properties.
   }

}

module.exports = Rover;