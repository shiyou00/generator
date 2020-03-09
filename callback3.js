const fs = require("fs");
const Thunk = require("./libs/thunk").Thunk;
const readFileThunk = Thunk(fs.readFile);
const run = require("./libs/run").run;

const gen = function* (){
  const r1 = yield readFileThunk('./foo.txt',"utf8");
  console.log(r1.toString());
  const r2 = yield readFileThunk('./bar.txt','utf8');
  console.log(r2.toString());
};

run(gen);

