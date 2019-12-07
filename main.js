var fs = require('fs');
var cidrtomerge = fs.readFileSync('/dev/stdin').toString().split("\n").filter(item => item);
//console.log(cidrtomerge);

const cidrTools = require('cidr-tools');
var processed = cidrTools.merge(cidrtomerge);
console.log(processed.join('\n'));
