const Command = require ("./command") 
const Message = require ("./message")

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
   constructor(position, mode = 'NORMAL', generatorWatts = 110 ) {
     this.position = position; // number representing the rover’s position.
     this.mode = mode ;
     this.generatorWatts = generatorWatts ;
   }
   receiveMessage(message){ //handles the various types of commands it receives and updates the rover’s properties.
      
      let results = []; // Each element in the array is an object that corresponds to one Command in message.commands.

      for (let i = 0; i < message.commands.length; i++) {
         let commandRover = message.commands[i];
         // let result = {};
         // results.push(commandRover);

         if(commandRover.commandType === 'STATUS_CHECK' ) {

            results.push({completed: true}, {roverStatus : {mode: "NORMAL", generatorWatts : 110, position: 87382098}})
            // result.completed= true; result.roverStatus= {mode: this.mode, generatorWatts : this.generatorWatts, position: this.position}
         }
      }

      return {
         message: message.name,
         results: results
      }
   }
}

module.exports = Rover;