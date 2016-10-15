//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
ttypes.ErrorCode = {
  'kSuccess' : 0,
  'kKeyNotFound' : 1,
  'kError' : 2
};
Result = module.exports.Result = function(args) {
  this.value = null;
  this.error = null;
  this.errortext = null;
  if (args) {
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
    if (args.error !== undefined && args.error !== null) {
      this.error = args.error;
    }
    if (args.errortext !== undefined && args.errortext !== null) {
      this.errortext = args.errortext;
    }
  }
};
Result.prototype = {};
Result.prototype.read = function(input) {
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
        this.value = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.error = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.errortext = input.readString();
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

Result.prototype.write = function(output) {
  output.writeStructBegin('Result');
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeString(this.value);
    output.writeFieldEnd();
  }
  if (this.error !== null && this.error !== undefined) {
    output.writeFieldBegin('error', Thrift.Type.I32, 2);
    output.writeI32(this.error);
    output.writeFieldEnd();
  }
  if (this.errortext !== null && this.errortext !== undefined) {
    output.writeFieldBegin('errortext', Thrift.Type.STRING, 3);
    output.writeString(this.errortext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

