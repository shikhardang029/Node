//
// ────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: S Y N C   F I L E   R E A D I N G : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────
//

/* var fs = require('fs');
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("Program Ended");
console.log("Good Bye"); */

//
// ──────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: A S Y N C   F I L E   R E A D I N G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//

var fs = require('fs');
fs.readFile('input.txt',function (err,data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");
console.log("Good Bye")