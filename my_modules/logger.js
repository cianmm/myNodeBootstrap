module.exports = function(req, res, next){

  var start, time, stream, message;
  start = +new Date();
  stream = process.stdout;

  res.on('finish', function(){
    time = +new Date() - start;
    message = req.method + " request to " + req.url + "\n" +
              "Took:" + time + " ms\n\n";
    stream.write(message);
  })
  next();
}
