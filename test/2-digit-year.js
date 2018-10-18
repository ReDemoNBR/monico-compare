const test = require("./test");

let codes = ["%y 18", "%y18"];
let list = [
    ["2018-03-14T04:30:45Z", true],
    ["2018-03-16T04:30:45Z", true],
    ["2018-03-16T23:59:51Z", true],
    ["2019-03-16T00:01:00Z", false],
    ["2018-03-15T23:59:59.999Z", true],
    ["2018-13-16T18:22:35Z", false],
    ["2018-02-30T18:22:35Z", false]
];
test(list, codes);
let codes2 = ["%y < 20", "%y <20", "%y< 20", "%y<20"];
let list2 = [
    ["1998-03-03T04:30:45Z", false],
    ["2018-03-09T04:30:45Z", true],
    ["2098-03-07T23:59:51Z", false],
    ["2018-03-01T00:01:00Z", true],
    ["2018-03-15T23:59:59.999Z", true],
    ["2018-13-16T18:22:35Z", false],
    ["2018-02-30T18:22:35Z", false]
];
test(list2, codes2);