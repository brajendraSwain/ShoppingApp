"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('shopping-app/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'shopping-app/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _shoppingAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _shoppingAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _shoppingAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _shoppingAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('shopping-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'shopping-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _shoppingAppConfigEnvironment) {

  var name = _shoppingAppConfigEnvironment['default'].APP.name;
  var version = _shoppingAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('shopping-app/controllers/application', ['exports', 'ember', 'shopping-app/models/app-store'], function (exports, _ember, _shoppingAppModelsAppStore) {

	var pageNameObj = {
		home: 'home',
		profile: 'profile',
		promote: 'promote'
	};

	exports['default'] = _ember['default'].Controller.extend({
		isLoginTrue: false,
		isHomeActive: true,
		isProfileActive: false,
		isPromoteActive: false,
		activatePage: function activatePage(pageName) {
			this.set('isHomeActive', pageName === pageNameObj.home);
			this.set('isProfileActive', pageName === pageNameObj.profile);
			this.set('isPromoteActive', pageName === pageNameObj.promote);
			console.log('this', this);
		},
		actions: {
			homeBtnClicked: function homeBtnClicked() {
				// this.transitionTo('mainPage');
				this.activatePage(pageNameObj.home);
			},
			profileBtnClicked: function profileBtnClicked() {
				if (!this.isLoginTrue) {
					return;
				}
				// this.transitionTo('mainPage');
				this.activatePage(pageNameObj.profile);
			},
			promoteBtnClicked: function promoteBtnClicked() {
				if (!this.isLoginTrue) {
					return;
				}
				// this.transitionTo('mainPage');
				this.activatePage(pageNameObj.promote);
			}
		}
	});
});
define('shopping-app/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('shopping-app/controllers/log-in', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('shopping-app/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('shopping-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'shopping-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _shoppingAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_shoppingAppConfigEnvironment['default'].APP.name, _shoppingAppConfigEnvironment['default'].APP.version)
  };
});
define('shopping-app/initializers/export-application-global', ['exports', 'ember', 'shopping-app/config/environment'], function (exports, _ember, _shoppingAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_shoppingAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _shoppingAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_shoppingAppConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('shopping-app/models/app-store', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    pageSelected: _emberData['default'].attr('string')
  });
});
define('shopping-app/router', ['exports', 'ember', 'shopping-app/config/environment'], function (exports, _ember, _shoppingAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _shoppingAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('logIn');
    this.route('home');
    this.route('signUp');
  });

  exports['default'] = Router;
});
define('shopping-app/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('shopping-app/routes/log-in', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('shopping-app/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("shopping-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "shopping-app/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container app");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid header");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "nav nav-tabs nav-justified");
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "role", "presentation");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode("Home");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "role", "presentation");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "/prof");
        var el6 = dom.createTextNode("Profile");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "role", "presentation");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "href", "/prom");
        var el6 = dom.createTextNode("Promote");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n		");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [0]);
        var element3 = dom.childAt(element0, [3]);
        var element4 = dom.childAt(element3, [0]);
        var element5 = dom.childAt(element0, [5]);
        var element6 = dom.childAt(element5, [0]);
        var morphs = new Array(7);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createElementMorph(element2);
        morphs[2] = dom.createAttrMorph(element3, 'class');
        morphs[3] = dom.createElementMorph(element4);
        morphs[4] = dom.createAttrMorph(element5, 'class');
        morphs[5] = dom.createElementMorph(element6);
        morphs[6] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "isHomeActive", []], "active", ""], [], []]]]], ["element", "action", ["homeBtnClicked"], [], ["loc", [null, [4, 81], [4, 108]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "isProfileActive", []], "active", ""], [], []]]]], ["element", "action", ["profileBtnClicked"], [], ["loc", [null, [5, 88], [5, 118]]]], ["attribute", "class", ["concat", [["subexpr", "if", [["get", "isPromoteActive", []], "active", ""], [], []]]]], ["element", "action", ["promoteBtnClicked"], [], ["loc", [null, [6, 88], [6, 118]]]], ["content", "outlet", ["loc", [null, [11, 0], [11, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("shopping-app/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 33,
            "column": 0
          }
        },
        "moduleName": "shopping-app/templates/home.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container app-body");
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "link-div");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "style", "float: right;font-weight: 900;");
        dom.setAttribute(el3, "href", "/logIn");
        var el4 = dom.createTextNode("Sign Out");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-3 box");
        var el5 = dom.createTextNode(".col-md-3");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-8 box");
        var el5 = dom.createTextNode(".col-md-8");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4 box");
        var el5 = dom.createTextNode(".col-md-4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4 box");
        var el5 = dom.createTextNode(".col-md-4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4 box");
        var el5 = dom.createTextNode(".col-md-4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-md-4 box");
        var el5 = dom.createTextNode(".col-md-4");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [32, 0], [32, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("shopping-app/templates/log-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "shopping-app/templates/log-in.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container app-body");
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "login-box");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-section");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "class", "form-control");
        dom.setAttribute(el4, "placeholder", "Username");
        dom.setAttribute(el4, "aria-describedby", "basic-addon1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "class", "form-control password");
        dom.setAttribute(el4, "placeholder", "Password");
        dom.setAttribute(el4, "aria-describedby", "basic-addon1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "buttonSection");
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-primary");
        var el5 = dom.createTextNode("Sign In");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-primary");
        var el5 = dom.createTextNode("Don't have an account");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [13, 0], [13, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("shopping-app/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "shopping-app/templates/sign-up.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container app-body");
        var el2 = dom.createTextNode("\n		");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "signUp-box");
        var el3 = dom.createTextNode("\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group myAppGroup");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input-group-addon appText");
        dom.setAttribute(el4, "id", "basic-addon1");
        var el5 = dom.createTextNode("User Name");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "text");
        dom.setAttribute(el4, "class", "form-control");
        dom.setAttribute(el4, "placeholder", "Username");
        dom.setAttribute(el4, "aria-describedby", "basic-addon1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group myAppGroup");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input-group-addon appText");
        dom.setAttribute(el4, "id", "basic-addon1");
        var el5 = dom.createTextNode("Email");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "email");
        dom.setAttribute(el4, "class", "form-control");
        dom.setAttribute(el4, "placeholder", "email");
        dom.setAttribute(el4, "aria-describedby", "basic-addon1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group myAppGroup");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input-group-addon appText");
        dom.setAttribute(el4, "id", "basic-addon1");
        var el5 = dom.createTextNode("Password");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "class", "form-control");
        dom.setAttribute(el4, "placeholder", "Password");
        dom.setAttribute(el4, "aria-describedby", "basic-addon1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "input-group myAppGroup");
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "input-group-addon appText");
        dom.setAttribute(el4, "id", "basic-addon1");
        var el5 = dom.createTextNode("Re-enter Password");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			  ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "password");
        dom.setAttribute(el4, "class", "form-control");
        dom.setAttribute(el4, "placeholder", "Password");
        dom.setAttribute(el4, "aria-describedby", "basic-addon1");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n			");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "buttonSection");
        var el4 = dom.createTextNode("\n				");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4, "type", "button");
        dom.setAttribute(el4, "class", "btn btn-primary");
        var el5 = dom.createTextNode("Register");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n			");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [28, 0], [28, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('shopping-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'shopping-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("shopping-app/app")["default"].create({"name":"shopping-app","version":"0.0.0+15d326c0"});
}

/* jshint ignore:end */
//# sourceMappingURL=shopping-app.map