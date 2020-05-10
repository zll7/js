'use strict';

var fs = require('fs');


fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        write(data)
    }
});

function write(readData) {
    var data = 'write data';
    fs.writeFile('sample.txt', readData + data, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('ok.');
        }
    });
}
