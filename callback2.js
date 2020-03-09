const fs = require("fs");
const Thunk = require("./libs/thunk").Thunk;
const readFileThunk = Thunk(fs.readFile);

const gen = function* (){
  const r1 = yield readFileThunk('./foo.txt',"utf8");
  console.log(r1.toString());
  const r2 = yield readFileThunk('./bar.txt','utf8');
  console.log(r2.toString());
};

const g = gen();

const r1 = g.next();
r1.value(function (err, data) {
  if (err) throw err;
  const r2 = g.next(data);
  r2.value(function (err, data) {
    if (err) throw err;
    g.next(data);
  });
});
