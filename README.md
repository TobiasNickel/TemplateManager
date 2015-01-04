# TemplateManager

This small framework help you to work with ejs or underscore templates. It let you easily structure your templete in a hierarchy. It enables to load subTemplates by providing a child templateManager to the used data-object. Now it can load templates from <template>-tags or via name throu ajax. 

## Usage
You can check everything in detail in the source of index.html and the Templates folder.


create an object of TemplateManager:
load your templatingEngine and the TemplateManagerClass.js in your HTML and then

var tM = new TemplateManager("EJS"); // you can also use "underscore"

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


## Development
This module is developed and maintained by Tobias Nickel, feel free to contact me here on Github.

In near future I want to compile all Templates on the Server using NodeJS to provide all templates using a single http request. I will also make it possible to use this TemplateManager as Engine in Express.js, that will allow you to use the same engine in Client and Server. After that, I will check out to Support more Engines, like Mustach and jade. Very important is also the support for dependency management, so I want to support requireJS and google-closure.

