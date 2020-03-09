exports.run = function (fn) {
  const gen = fn();
  function next(err, data) {
    const result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }
  next();
};
