templateManager.templates={'dasdafsgxzcvxztyrvasvcsdcmkjnposdafhoasfsadfhkljhsafklj1232132131256765234234':undefined,"underscore/asList":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<ul style="margin-top:-16px;padding-top:0px;">\r\n    ';
 for(i in that){ 
__p+='\r\n        ';
 if(['that','tM'].indexOf(i) == -1){
__p+='\r\n    <li style="margin-top:0px;padding-top:0px;"><b>'+
((__t=( i ))==null?'':__t)+
'</b>\r\n            ';
 if(typeof that[i] == 'object'){ 
__p+='\r\n                '+
((__t=( tM.render('asList',that[i]) ))==null?'':__t)+
'\r\n            ';
 }else{ 
__p+='\r\n                '+
((__t=( that[i] ))==null?'':__t)+
'\r\n            ';
 } 
__p+='\r\n        </li>\r\n        ';
 } 
__p+='\r\n    ';
 } 
__p+=' \r\n</ul>';
}
return __p;
}},"underscore/subtemplates/hallo":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div style="width:300px;padding:6px;background-color:lightgray;margin:2px;">\n    <h2>the hallo subTemplate</h2>\n    <div>we use age to show the age: '+
((__t=( age    ))==null?'':__t)+
'</div>\n    <div>and load then two more template. First the secondLevel/Hallo and then the firstLebel test2.html by usind "../test2"</div>\n    '+
((__t=( tM.render("secondLevel/hallo") ))==null?'':__t)+
'\n    '+
((__t=( tM.render("../test2") ))==null?'':__t)+
'\n</div>';
}
return __p;
}},"underscore/subtemplates/secondLevel/hallo":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div style="background:lightblue;border:solid 2px black;">hello2 in subtemplates/secondLevel\n</div>';
}
return __p;
}},"underscore/test":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<a href="index.html">index</a>\n    <div>takes the two params age and name, the name is directly printed here: '+
((__t=( name ))==null?'':__t)+
'.</div>\n    <div>This is a list of properties that all templateManager have. The sourcecode to create the List, demonstrates, that you can use pure Javascript inside the EJS templateengine.</div>\n    <ul>\n        ';
 for(var i in this.tM){ 
__p+='\n        <li>'+
((__t=( i.toString() ))==null?'':__t)+
'</li>\n        ';
 } 
__p+='\n    </ul>\n    <div>after that, a subtemplate is loaded and the input object is passed as data.</div>\n    <div>'+
((__t=( tM.render("subtemplates/hallo",that) ))==null?'':__t)+
'</div>\n\n<div>in the end we display some data using a recursive template</div><br>\n'+
((__t=( tM.render('asList',{a:'albert',b:'bert',c:{d:"dave",e:{tobias:'nickel'}},f:'fanni'})))==null?'':__t)+
'';
}
return __p;
}},"underscore/test2":{template:function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='hier ist test2!!';
}
return __p;
}}};