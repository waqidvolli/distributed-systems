var thrift = require('thrift');

var KVStorage = require('./gen-nodejs/KVStore.js');
var ttypes = require('./gen-nodejs/kvstore_types');

//The variables that will store the command line arguments
var host = null;
var port = null;
var command = null;
var my_key = null;
var my_value = null;

//Check if its a valid command
if(process.argv.length<6 || process.argv.length>7){
  console.log('\n');
  console.error('Incorrect command. It should be: \nnode kvclient -server [host:port] [subcmd] [my_key] <my_value>');
  console.log('\n');
  process.exit(2);
}else {
  process.argv.forEach(function(val, index, array) {
    switch(index){
      case 3 :
        host = val.split(':')[0];
        port = val.split(':')[1];
        break;
      case 4 :
        action = val;
        break;
      case 5 :
        my_key = val;
        break;
      case 6 :
        my_value = val;
        break;
      default: break;
    }
  });
}

var connection = thrift.createConnection(host, port);
var client = thrift.createClient(KVStorage, connection);

if(action=='-get'){ //If GET command
  client.kvget(my_key, function(err, result) {
    if (err || result.error == ttypes.ErrorCode.kError) {
      console.log('\n');
      console.error(('There was an error on the server.'));
      console.log('\n');
      process.exit(2);
    }else if(result.error == ttypes.ErrorCode.kSuccess){
      console.log('\n');
      console.log('Value: ',result.value);
      console.log('\n');
      process.exit(0);
    }else{
      console.log('\n');
      console.error((result.errortext));
      console.log('\n');
      process.exit(1);
    }
  });
} else if(action=='-set'){  //If SET command
    client.kvset(my_key, my_value, function(err, result) {
      if (err || result.error == ttypes.ErrorCode.kError) {
        process.exit(2);
      } else {
        process.exit(0);
      }
    });
} else if(action=='-del'){  //If DEL command
  client.kvdelete(my_key, function(err, result) {
    if (err || result.error == ttypes.ErrorCode.kError) {
      process.exit(2);
    } else {
      process.exit(0);
    }
  });
}

//If an uncaught exception occured such as if the server is not available.
process.on('uncaughtException', function (err) {
    console.log('\n');
    console.error((err.errno));
    console.log('\n');
    process.exit(2)
});
