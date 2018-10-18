const test = require("./test");

let codes = ["%A Friday", "%AFriday", "%A friday", "%Afriday", "%A FRIDAY", "%AFRIDAY", "%A FriDay", "%AFriDay"];
let list = [
    ["2018-09-14T04:30:45Z", true],
    ["2018-03-16T04:30:45Z", true],
    ["2018-08-31T23:59:51Z", true],
    ["2018-03-16T00:01:00Z", true],
    ["2018-03-15T23:59:59.999Z", false],
    ["2018-13-16T18:22:35Z", false],
    ["2018-02-30T18:22:35Z", false]
];
test(list, codes);
