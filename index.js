var rp=require('request-promise');
var fs=require('fs');
var filepath = "mynewfile.txt";
var seatNumber = 427300; // starting seat
var options = {
    method: 'POST',
    uri: 'http://natega.youm7.com/Home/GetResultStage1/',
    form: {
        SeatNumber: seatNumber // Will be urlencoded
    },
    headers: {
         /*'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'*/  // Is set automatically
    }
};
for(var i=0;i<100;i++)
{
    options.form.SeatNumber+=i;
    rp(options)
    .then(function (body) {
        // POST succeeded...
        
    fs.appendFile(filepath,body+'\n', function (err) {
  if (err)  console.log(err);
  console.log('Saved!');
});
    })
    .catch(function (err) {
        // POST failed...
        console.log(err);
    });

}
