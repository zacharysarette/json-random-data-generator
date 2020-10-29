#!/usr/bin/env node

var params = require("./arguments");
var fs = require("fs");
var utils = require("./utils");

var theFields = require("../configs/" + params.c).theFields; // needed
var getTheValues = require("./theValues"); // needed

console.log("Going to write into existing file");

// d is for data
var d = "{\n";

// $ is for adding to the d
function $(s = "\n") {
  d += s;
}

var generateobject = function (fields) {
  var values = getTheValues(fields);
  if (values.length !== fields.length) return;
  $("{");
  for (var i = fields.length - 1; i > -1; i--) {
    $('\n"');
    $(fields[i].name);
    $('":');
    $(
      typeof values[i] === "string"
        ? utils.wrapStringInQuotes(values[i])
        : values[i]
    );
    if (i !== 0) $(",");
  }
  $("\n}");
};

// This is where the magic happens
$(`"${params.a}":[`);
utils.doXTimes(params.n, generateobject, [theFields], function () {
  $(",\n");
});
$("]\n}\n");

var fileName = "./exports/" + params.f;

fs.writeFile(fileName, d, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Data written successfully!");
});
