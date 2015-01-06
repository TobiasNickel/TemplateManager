templateManager.templates={'dasdafsgxzcvxztyrvasvcsdcmkjnposdafhoasfsadfhkljhsafklj1232132131256765234234':undefined,"subtemplates/hallo":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div style="width:300px;padding:6px;background-color:lightgray;margin:2px;">\n    <h2>the hallo subTemplate</h2>\n    <div>we use age to show the age: [%= age    %]</div>\n    <div>and load then two more template. First the secondLevel/Hallo and then the firstLebel test2.html by usind "../test2"</div>\n    [%= tM.render("secondLevel/hallo") %]\n    [%= tM.render("../test2") %]\n</div>';
}
return __p;
}},"subtemplates/secondLevel/hallo":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div style="background:lightblue;border:solid 2px black;">hello2 in subtemplates/secondLevel\n</div>';
}
return __p;
}},"test":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='\n    <div>takes the two params age and name, the name is directly printed here: [%= name %].</div>\n    <div>This is a list of properties that all templateManager have. The sourcecode to create the List, demonstrates, that you can use pure Javascript inside the EJS templateengine.</div>\n    <ul>\n        [% for(var i in this.tM){ %]\n        <li>[%= i.toString() %]</li>\n        [% } %]\n    </ul>\n    <div>after that, a subtemplate is loaded and the input object is passed as data.</div>\n    <div>[%= tM.render("subtemplates/hallo",that) %]</div>\n';
}
return __p;
}},"test2":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='hier ist test2!!';
}
return __p;
}}};