if(!!global.window){    throw "this script should run in NodeJS"; }

var fs = require("fs");

var basePath = "./templates";
var fileExtension = "html";

var outfile = "./templates.js";
var variableName="templateManager.templates";
var _ = require("underscore");



function getJSObject(basePath, baseName, fileExtension, out) {
    var files = fs.readdirSync(basePath);
    //    console.log(files);
    for (var i = 0; i < files.length; i++) {
        var fStats = fs.statSync(basePath + "/" + files[i]);
        if (fStats.isDirectory()) {
            getJSObject(basePath + "/" + files[i], baseName == "" ? files[i] : baseName + "/" + files[i], fileExtension, out);
        } else {
            if (files[i].indexOf("." + fileExtension) === files[i].length - 1 - fileExtension.length)
                var text=fs.readFileSync(basePath + "/" + files[i])+"";
                name=baseName == "" ? files[i] : baseName + "/" + files[i];
                name=name.slice(0,name.indexOf("."+"html"))
                out[name] = _.template(text).source;
        }
    }
    return out;
}
var result = getJSObject(basePath, "", fileExtension, {});

var out=variableName+"={'dasdafsgxzcvxztyrvasvcsdcmkjnposdafhoasfsadfhkljhsafklj1232132131256765234234':undefined";
for(var i in result){
    out=out+',"'+i+'":{template:'+result[i]+"}";
}
out=out+"};";
//console.log(out);
fs.writeFileSync(outfile, out, {flag:"w"});
