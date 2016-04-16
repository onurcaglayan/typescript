/* jshint esnext: true */

var path = require("path");

console.log(`Dosya isimi: ${path.basename(__filename)}`);

function innerFunction() {
    
    return `several things to display`;
}
