const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');


describe("Rover class", function() {

  // 7 test - checking that constructor sets position and default values for mode and generatorWatts:
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let roverPosition = new Rover(55555);
    expect(roverPosition.position).toBe(55555);
    expect(roverPosition.mode).toBe('NORMAL');
    expect(roverPosition.generatorWatts).toBe(110);
  });
  
  // 8 test - response returned by receiveMessage contains the name of the message:
  it("response returned by receiveMessage contains the name of the message", function() {
    let testCommands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Testing message', testCommands);
    let rover = new Rover(66666);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    expect(response.message).toBe('Testing message');
  });
  
  // 9 test - response returned by receiveMessage includes two results if two commands are sent in the message:
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let testPosition = new Rover(77777); // New position assigned
    let commands =  [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')]; // Sent two commands
    let message = new Message('Test message', commands);
    let response = testPosition.receiveMessage(message);
    // console.log(response.results) // To check what is the out put and it was a single object
    expect((response.results).length).toBe(commands.length); // two number is returning error, if the command number changes it it will update.
  });
  
  // 10 test -responds correctly to the status check command:
  it("responds correctly to the status check command", function() {
    let testPosition = new Rover(87382098); // New position assigned
    let commands =  [new Command('STATUS_CHECK')]; // checking Satus check command
    let message = new Message('Test message for status check', commands);
    let response = testPosition.receiveMessage(message);
    expect(response.results[0].completed).toEqual(true);
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[0].roverStatus.position).toEqual(87382098);
    expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
    // expect(response.results[0]).toEqual({completed: true, roverStatus : {mode: "NORMAL", generatorWatts : 110, position: 87382098}});
  });
  
  // 11 test - responds correctly to the mode change command:
  it("responds correctly to the mode change command", function() {
    let testPosition = new Rover(88888); // New position assigned
    let commands =  [new Command('MODE_CHANGE', 'LOW_POWER')]; // checking Mode change command
    let message = new Message('Test message for MODE_CHANGE', commands);
    let response = testPosition.receiveMessage(message);
    expect(response.results[0].completed).toEqual(true);
    // expect(response.results[1].roverStatus.mode).toEqual('LOW_POWER');
    expect(testPosition.mode).toEqual('LOW_POWER');
  });
  
  // 12 test - responds with a false completed value when attempting to move in LOW_POWER mode:
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let testPosition = new Rover(99999); // New position assigned
    let commands =  [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1111)]; // checking Mode change command
    let message = new Message('Test message for move in LOW_POWER mode', commands);
    let response = testPosition.receiveMessage(message);
    expect(response.results[1]).toEqual({completed: false});
    // expect(response.results[1].roverStatus.mode).toEqual('LOW_POWER');
    expect(testPosition.position).toEqual(99999);
  });
  
  // 13 test - responds with the position for the move command:
  it("responds with the position for the move command", function() {
    let testPosition = new Rover(11111); // New position assigned
    let commands =  [new Command('MOVE', 22222)]; // checking Move command
    let message = new Message('Test message for position of the move command', commands);
    let response = testPosition.receiveMessage(message);
    expect(response.results[0]).toEqual({completed: true});
    expect(testPosition.position).toEqual(22222);
  });


});
