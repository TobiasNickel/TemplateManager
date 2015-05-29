# TemplateManager

This small framework help you to work with mustache, jade, ejs, doT or underscore templates. It let you easily structure your templete in a hierarchy. It enables to load subTemplates by providing a child templateManager to the used data-object. Now it can load templates from <template>-tags or via name throu ajax. 

## Features
-loading templates dynamicly from the server during development
-merge templates for Production to JS
-load your templates hirarchic from your filesystem
-build recursive templates

## Usage
You can check everything in detail in the source of index.html and the Templates folder.


create an object of TemplateManager:
load your templatingEngine and the TemplateManagerClass.js in your HTML and then

var tM = new TemplateManager("EJS"); // you can also use "underscore", "jade", "mustache", "dot"

### set the basic properties. 
    tM.defaults;    // basic object that will be passed to every template
    tM.basePath;    // the rootpath for the templates, default is ./templates 
    tM.fileExtension; // FileExtension the extension that all files have. default is HTML
    tM.nameOfTemplatemanager; // name of the templateManager that is passed to the Templates.
    tM.baseName;    // baseName is usually empty. it is used internally for hirarchy
    tM.templates;   // templates the list of cached templates
    
### methods
usually you only need the render method.

    tM.render("sub/name",data);
    
this method will load the template and render them.

If you initialise the tM before all HTML is interpreted including all the templates, you can run 

    tM.findTemplates(); 
    
by yourselfe. it will find and compile all templates in the HTML that have an id-Attribute.

the other methods compile and loadTemplateFileare, are used internally.

It is possible to compile the themplates in a folder to one file, that can be merged to your js. 

## Development
This module is developed and maintained by Tobias Nickel, feel free to contact me here on Github.

I will check out to Support more Engines, like  haml and Hogan. Very important is also the support for dependency management, so I want to support requireJS and google-closure.


###Developer
Tobias Nickel  
![alt text](https://avatars1.githubusercontent.com/u/4189801?s=150) 
