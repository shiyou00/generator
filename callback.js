const fs = require("fs");
const Thunk = require("./libs/thunk").Thunk;

var readFileThunk = Thunk(fs.readFile);
readFileThunk("./foo.txt",'utf8')(function (err,data) {
  if(err) throw err;
  console.log(data); // test foo
});
