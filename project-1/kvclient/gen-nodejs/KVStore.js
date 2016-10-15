//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./kvstore_types');
//HELPER FUNCTIONS AND STRUCTURES

KVStore_kvset_args = function(args) {
  this.key = null;
  this.value = null;
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key;
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
  }
};
KVStore_kvset_args.prototype = {};
KVStore_kvset_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

KVStore_kvset_args.prototype.write = function(output) {
  output.writeStructBegin('KVStore_kvset_args');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 2);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

KVStore_kvset_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Result(args.success);
    }
  }
};
KVStore_kvset_result.prototype = {};
KVStore_kvset_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

KVStore_kvset_result.prototype.write = function(output) {
  output.writeStructBegin('KVStore_kvset_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

KVStore_kvget_args = function(args) {
  this.key = null;
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key;
    }
  }
};
KVStore_kvget_args.prototype = {};
KVStore_kvget_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

KVStore_kvget_args.prototype.write = function(output) {
  output.writeStructBegin('KVStore_kvget_args');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

KVStore_kvget_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Result(args.success);
    }
  }
};
KVStore_kvget_result.prototype = {};
KVStore_kvget_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

KVStore_kvget_result.prototype.write = function(output) {
  output.writeStructBegin('KVStore_kvget_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

KVStore_kvdelete_args = function(args) {
  this.key = null;
  if (args) {
    if (args.key !== undefined && args.key !== null) {
      this.key = args.key;
    }
  }
};
KVStore_kvdelete_args.prototype = {};
KVStore_kvdelete_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.key = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

KVStore_kvdelete_args.prototype.write = function(output) {
  output.writeStructBegin('KVStore_kvdelete_args');
  if (this.key !== null && this.key !== undefined) {
    output.writeFieldBegin('key', Thrift.Type.STRING, 1);
    output.writeString(this.key);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

KVStore_kvdelete_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Result(args.success);
    }
  }
};
KVStore_kvdelete_result.prototype = {};
KVStore_kvdelete_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Result();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

KVStore_kvdelete_result.prototype.write = function(output) {
  output.writeStructBegin('KVStore_kvdelete_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

KVStoreClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
KVStoreClient.prototype = {};
KVStoreClient.prototype.seqid = function() { return this._seqid; }
KVStoreClient.prototype.new_seqid = function() { return this._seqid += 1; }
KVStoreClient.prototype.kvset = function(key, value, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_kvset(key, value);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_kvset(key, value);
  }
};

KVStoreClient.prototype.send_kvset = function(key, value) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('kvset', Thrift.MessageType.CALL, this.seqid());
  var args = new KVStore_kvset_args();
  args.key = key;
  args.value = value;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

KVStoreClient.prototype.recv_kvset = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new KVStore_kvset_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('kvset failed: unknown result');
};
KVStoreClient.prototype.kvget = function(key, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_kvget(key);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_kvget(key);
  }
};

KVStoreClient.prototype.send_kvget = function(key) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('kvget', Thrift.MessageType.CALL, this.seqid());
  var args = new KVStore_kvget_args();
  args.key = key;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

KVStoreClient.prototype.recv_kvget = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new KVStore_kvget_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('kvget failed: unknown result');
};
KVStoreClient.prototype.kvdelete = function(key, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_kvdelete(key);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_kvdelete(key);
  }
};

KVStoreClient.prototype.send_kvdelete = function(key) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('kvdelete', Thrift.MessageType.CALL, this.seqid());
  var args = new KVStore_kvdelete_args();
  args.key = key;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

KVStoreClient.prototype.recv_kvdelete = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new KVStore_kvdelete_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('kvdelete failed: unknown result');
};
KVStoreProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
KVStoreProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

KVStoreProcessor.prototype.process_kvset = function(seqid, input, output) {
  var args = new KVStore_kvset_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.kvset.length === 2) {
    Q.fcall(this._handler.kvset, args.key, args.value)
      .then(function(result) {
        var result = new KVStore_kvset_result({success: result});
        output.writeMessageBegin("kvset", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("kvset", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.kvset(args.key, args.value, function (err, result) {
      if (err == null) {
        var result = new KVStore_kvset_result((err != null ? err : {success: result}));
        output.writeMessageBegin("kvset", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("kvset", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

KVStoreProcessor.prototype.process_kvget = function(seqid, input, output) {
  var args = new KVStore_kvget_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.kvget.length === 1) {
    Q.fcall(this._handler.kvget, args.key)
      .then(function(result) {
        var result = new KVStore_kvget_result({success: result});
        output.writeMessageBegin("kvget", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("kvget", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.kvget(args.key, function (err, result) {
      if (err == null) {
        var result = new KVStore_kvget_result((err != null ? err : {success: result}));
        output.writeMessageBegin("kvget", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("kvget", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

KVStoreProcessor.prototype.process_kvdelete = function(seqid, input, output) {
  var args = new KVStore_kvdelete_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.kvdelete.length === 1) {
    Q.fcall(this._handler.kvdelete, args.key)
      .then(function(result) {
        var result = new KVStore_kvdelete_result({success: result});
        output.writeMessageBegin("kvdelete", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("kvdelete", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.kvdelete(args.key, function (err, result) {
      if (err == null) {
        var result = new KVStore_kvdelete_result((err != null ? err : {success: result}));
        output.writeMessageBegin("kvdelete", Thrift.MessageType.REPLY, seqid);
      } else {
        var result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("kvdelete", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

