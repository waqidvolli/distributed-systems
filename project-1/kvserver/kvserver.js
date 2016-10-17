var thrift = require('thrift');

var KVStore = require('./gen-nodejs/KVStore.js');
var ttypes = require('./gen-nodejs/kvstore_types.js');

//The object that will store the key-value pair
var items = {};

var server = thrift.createServer(KVStore, {
  kvset: function(my_key,my_value, result) {
    try{
      console.log("kvset: ", my_key, my_value);
      items[my_key] = my_value;
      key = my_key;
      value = my_value;
      var res = new ttypes.Result({value: my_value, error: ttypes.ErrorCode.kSuccess, errortext: ''});
      result(null, res);
    }catch(err){
      var res = new ttypes.Result({value: null, error: ttypes.ErrorCode.kError, errortext: 'There was an error on the server.'});
      result(null, res);
    }
  },

  kvget: function(my_key, result) {
    try{
      console.log("kvget: ", my_key);
      var res;
      if(items[my_key]){
        res = new ttypes.Result({value: items[my_key],error: ttypes.ErrorCode.kSuccess, errortext: ''});
      }else{
        res = new ttypes.Result({value: null,error: ttypes.ErrorCode.kKeyNotFound, errortext: 'key not found'});
      }
      result(null, res);
    }catch(err){
      var res = new ttypes.Result({value: null, error: ttypes.ErrorCode.kError, errortext: 'There was an error on the server.'});
      result(null, res);
    }
  },

  kvdelete: function(my_key, result) {
    try{
      console.log("kvdelete: ", my_key);
      if(items[my_key]){
        delete items[my_key];
        var res = new ttypes.Result({value: items[my_key],error: ttypes.ErrorCode.kSuccess, errortext: ''});
        result(null, res);
      }else{
        var res = new ttypes.Result({value: items[my_key],error: ttypes.ErrorCode.kKeyNotFound, errortext: 'key not found'});
        result(null, res);
      }

    }catch(err){
      var res = new ttypes.Result({value: null, error: ttypes.ErrorCode.kError, errortext: 'There was an error on the server.'});
      result(null, res);
    }
  }
});

server.listen(3000);
