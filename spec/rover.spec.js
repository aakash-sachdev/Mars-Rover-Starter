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
    expect(response.results[1].roverStatus.mode).toEqual('NORMAL');
    expect(response.results[1].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[1].roverStatus.position).toEqual(87382098);
    // expect(response.results[0]).toEqual({completed: true, roverStatus : {mode: "NORMAL", generatorWatts : 110, position: 87382098}});
  });
  
  // 10 test -responds correctly to the status check command:
  it("responds correctly to the status check command", function() {
    let testPosition = new Rover(87382098); // New position assigned
    let commands =  [new Command('STATUS_CHECK')]; // checking Satus check command
    let message = new Message('Test message for status check', commands);
    let response = testPosition.receiveMessage(message);
    expect(response.results[0].completed).toEqual(true);
    expect(response.results[1].roverStatus.mode).toEqual('NORMAL');
    expect(response.results[1].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[1].roverStatus.position).toEqual(87382098);
    // expect(response.results[0]).toEqual({completed: true, roverStatus : {mode: "NORMAL", generatorWatts : 110, position: 87382098}});
  });


});
