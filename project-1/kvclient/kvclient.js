var thrift = require('thrift');

var KVStorage = require('./gen-nodejs/KVStore.js');
var ttypes = require('./gen-nodejs/kvstore_types');

var connection = thrift.createConnection('localhost', 3000);
var client = thrift.createClient(KVStorage, connection);

let action = null;
let my_key = null;
let my_value = null;

if(process.argv.length<4 || process.argv.length>5){
  console.log('\n\n');
  console.error('Incorrect command. It should be: \nnode kvclient <subcmd> <my_key> [my_value]');
  connection.end();
}

process.argv.forEach(function(val, index, array) {
    switch(index){
      case 2 : action = val; break;
      case 3 : my_key = val; break;
      case 4 : my_value = val; break;
      default: break;
    }
});


if(action=='get'){
  client.kvget(my_key, function(err, result) {
    if (err) {
      var res = new ttypes.Result({value: null, error: ttypes.ErrorCode.kError, errortext: 'there was an error'});
      console.log('\n\n');
      console.error(res);
      console.log('\n\n');
    }else if(result.error == ttypes.ErrorCode.kSuccess){
      console.log('\n\n');
      console.log('Value: ',result.value);
      console.log('\n\n');
    }else{
      console.log('\n\n');
      console.error(result.errortext);
      console.log('\n\n');
    }
    connection.end();
  });
} else if(action=='set'){
    client.kvset(my_key, my_value, function(err, result) {
      if (err) {
        //console.error(err);
      } else {
        //console.log("client stored:", my_key);
      }
      connection.end();
    });
} else if(action=='del'){
  client.kvdelete(my_key, function(err, result) {
    if (err) {
      //console.error(err);
    } else {
      //console.log("client deleted:", my_key);
    }
    connection.end();
  });
}


connection.on('error', function(err) {
  var res = new ttypes.Result({value: null, error: ttypes.ErrorCode.kError, errortext: 'There was an error'});
  console.log('\n\n')
  console.error(res.errortext);
  console.log('\n\n');
  connection.end();
});
