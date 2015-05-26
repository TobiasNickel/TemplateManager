var TemplateManager = (function () {
    "use strict";

    /**
     * @class
     * helps to manage Templates
     *
     * @param enging {string} name if the template engine, "ejs", "underscore"
     */
    function TemplateManager(engine, defaults, basePath, fileExtension, nameOfTemplatemanager, baseName, templates) {
        if (engine instanceof TemplateManager) {
            var example = engine;
            engine = example.engine;
            defaults = example.defaults;
            basePath = example.basePath;
            fileExtension = example.fileExtension;
            nameOfTemplatemanager = example.nameOfTemplatemanager;
            baseName = example.baseName;
            templates = example.templates;
        }
        this.templates = templates ? templates : {};
        this.engine = engine.toLowerCase().trim();
        this.defaults = defaults ? defaults : {};
        this.basePath = basePath ? basePath : "/templates";
        this.fileExtension = fileExtension ? fileExtension : "html";
        this.nameOfTemplatemanager = nameOfTemplatemanager ? nameOfTemplatemanager : "templateManager";
        this.baseName = baseName ? baseName : "";

        switch (engine.toLowerCase().trim()) {
        case "ejs":
            this.compile = compileEJS;
            break;

        case "underscore":
            this.compile = compileUnderscore;
            break;
        case "mustache":
            this.compile = compileMustache;
            break;
        case "jade":
            this.compile = compileJade;
            break;
        case "dot":
            this.compile = compileDoT;
            break;
        default:
            throw "no valid templateEngine defined";
        }
        this.findTemplates();
    }
    /**
     * the compile method needs to take the text of the template and returns the rendering Method for a template.
     *
     * the rendering method. takes data to display and returns a the result.
     */
    function compileEJS(templateText) {
        var template = new EJS({
            text: templateText
        });
        return function renderEjsTemplate(data) {
            return template.render(data);
        };
    }
    function compileJade(templateText) {
        var template = jade.compile(templateText);
        //::test if the short version is working
        // var template = new jade.compile(templateText);
        // return function renderJadeTemplate(data) {
        //     return template(data);
        // };
    }
    function compileDoT(templateText) {
        return doT.compile( templateText );
        //::test if the short version is working
        // var template = new doT.compile( templateText );
        // return function renderDoTTemplate(data) {
        //     return template(data);
        // };
    }
    // underscore returnes a template, that is directlz usable
    function compileUnderscore(templateText) {
        return _.template(templateText);
    }
    // mustache has its own templateCache
    function compileMustache(templateText){
        return function(data){
            return Mustache.render(templateText,data);
        };
    }
    /**
     * end compile Methods
     */

    TemplateManager.prototype.render = function (name, data) {
        var options = {};
        options.that = options;
        extend(options, data);
        //preparing next templateManager for the template
        var nextTM = new TemplateManager(this);
        var lastSlash = name.lastIndexOf("/");
        if (lastSlash !== -1)
            nextTM.baseName += name.slice(0, lastSlash) + "/";
        options[this.nameOfTemplatemanager] = nextTM;

        if (name[0] === "/") {
            name = name.slice(1);
        } else {
            if (name[0] === "../") {
                name = name.slice(3);
            }
            name = this.baseName + name;
        }
        if (!this.templates[name]) {
            this.loadTemplateFile(name);
        }
        if (this.templates[name]) {
            if (this.templates[name].defaults) {
                extend(options, this.templates[name].defaults);
            }
            extend(options, this.defaults);
            return this.templates[name].template(options)
        } else {
            return "template " + name + " not found";
        }
    };
    TemplateManager.prototype.loadTemplateFile = function (name, defaults) {
        var request = newRequest();
        request.open("GET", this.basePath + "/" + name + "." + this.fileExtension, false);
        try {
            request.send(null);
        } catch (e) {
            return null;
        }

        if (request.status == 404 || request.status == 2 || (request.status == 0 && request.responseText == '')) {
            throw (new Error("can't load the template " + name));
            return null;
        }

        var templateText = request.responseText;

        this.templates[name] = {
            template: this.compile(templateText)
        };
        if (defaults) {
            this.templates[name].defaults = defaults;
        }
    };
    TemplateManager.prototype.findTemplates = function () {

        var templateTags = collectionToArray(
            document.getElementsByTagName("template")
        );
        templateTags = templateTags.concat(
            collectionToArray(
                document.querySelectorAll("script[type='text/template']")
            )
        );
        for (var i = 0; templateTag = templateTags[i]; i++) {
            var templateTag = templateTags[i]
            var templateText = templateTag.innerHTML.trim();
            var name = templateTag.id.trim();
            this.templates[name] = {
                template: this.compile(templateText)
            };
            templateTag.remove();
        }
    };


    function collectionToArray(collection) {
        var l = collection.length,
            out = [],
            i = 0;
        for (i = 0; i < l; i += 1) {
            out.push(collection[i]);
        }
        return out;
    };
    var newRequest = function () {
        var factories = [

            function () {
                return new ActiveXObject("Msxml2.XMLHTTP");
            },
            function () {
                return new XMLHttpRequest();
            },
            function () {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }];
        for (var i = 0; i < factories.length; i++) {
            try {
                var request = factories[i]();
                if (request != null) return request;
            } catch (e) {
                continue;
            }
        }
    }

    function extend(obj, withThis) {
        for (var i in withThis) {
            obj[i] = obj[i] !== undefined ? obj[i] : withThis[i];
        }
    }
    return TemplateManager;
}());
