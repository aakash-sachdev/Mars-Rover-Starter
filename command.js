/*building Class through which object will be created:
  commandType is a string strings
  commandTypes are coupled with a value property
*/

// Class Name Command

class Command {
  //Constructor with two properties: commandType and Value
  constructor(commandType, value) {
    this.commandType = commandType;
    // Logic for  checking commandType input  
    if (!commandType) {
    throw Error("Command type required.");
    }
    this.value = value;
  }
}

//Export Command class as command
module.exports = Command;