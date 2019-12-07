var fs = require('fs');
var cidrtomerge = fs.readFileSync('cidrtomerge.txt').toString().split("\n").filter(item => item);
//console.log(cidrtomerge);

const cidrTools = require('cidr-tools');
var processed = cidrTools.merge(cidrtomerge);
console.log(processed.join('\n'));
