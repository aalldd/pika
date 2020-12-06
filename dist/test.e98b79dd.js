// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var string = "\n/*\u4F60\u597D\uFF0C\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5207\u56FE\u72D7\n\u63A5\u4E0B\u6765\u6211\u8981\u753B\u4E00\u53EA\u76AE\u5361\u4E18\uFF0C\u9996\u5148\u6211\u4EEC\u7ED9\u76AE\u80A4\u4E0A\u8272\n\u6CE8\uFF1A\u6B64css\u4EE3\u7801\u7531less\u7F16\u8BD1\u800C\u6765\uFF0C\u56E0\u6B64\u6BD4\u8F83\u5197\u957F*/\n      .skin {\n        position: relative;\n        height: 100vh;\n        background-color: #ffe600;\n        overflow: hidden;\n      }\n/*\u7136\u540E\u6211\u4EEC\u753B\u4E00\u53EA\u53EF\u7231\u7684\u5C0F\u9F3B\u5B50*/\n      .skin .nose {\n        position: relative;\n        left: 50%;\n        top: 145px;\n        margin-left: -10px;\n        width: 0px;\n        height: 0px;\n        border: 10px solid #000;\n        border-color: #000 transparent transparent;\n        border-bottom: none;\n        z-index: 10;\n      }\n      .skin .nose:hover {\n        transform-origin: center bottom;\n        animation: wave 0.3s infinite linear;\n      }\n      .skin .nose .yuan {\n        position: absolute;\n        width: 20px;\n        height: 6px;\n        top: -16px;\n        left: -10px;\n        border-radius: 14px 14px 0 0;\n        background-color: #000;\n      }\n/*\u6211\u4EEC\u753B\u4E24\u53EA\u5C0F\u773C\u775B\u548C\u6EF4\u6E9C\u6E9C\u7684\u773C\u73E0\u5B50*/\n      .skin .eye {\n        border: 2px solid #000;\n        width: 64px;\n        height: 64px;\n        position: absolute;\n        left: 50%;\n        top: 100px;\n        margin-left: -32px;\n        background-color: #2e2e2e;\n        border-radius: 50%;\n      }\n      .skin .eye::before {\n        content: \"\";\n        display: block;\n        background-color: #fff;\n        width: 30px;\n        height: 30px;\n        border: 3px solid #000;\n        border-radius: 50%;\n        position: relative;\n        left: 8px;\n        top: 2px;\n      }\n      .skin .left {\n        transform: translateX(-100px);\n      }\n      .skin .right {\n        transform: translateX(100px);\n      }\n/*\u6211\u4EEC\u753B\u76AE\u5361\u4E18\u7684\u4E24\u4E2A\u5507\u74E3\u5B50*/\n      .skin .mouth {\n        width: 160px;\n        height: 160px;\n        position: absolute;\n        left: 50%;\n        top: 175px;\n        margin-left: -80px;\n      }\n      .skin .mouth .up {\n        position: relative;\n        top: -10px;\n        z-index: 1;\n      }\n      .skin .mouth .up .lip {\n        border: 3px solid #000;\n        height: 30px;\n        width: 78px;\n        border-top-color: transparent;\n        border-right-color: transparent;\n        background-color: #ffe600;\n      }\n      .skin .mouth .up .lip::before {\n        content: \"\";\n        display: block;\n        width: 7px;\n        height: 30px;\n        background-color: #ffe600;\n      }\n      .skin .mouth .up .lip.leftl {\n        border-radius: 0 0 0 50px;\n        position: relative;\n        transform: rotate(-15deg);\n      }\n      .skin .mouth .up .lip.leftl::before {\n        position: absolute;\n        right: -5px;\n        bottom: 0;\n      }\n      .skin .mouth .up .lip.leftl::after {\n        content: \"\";\n        display: block;\n        width: 80px;\n        height: 5px;\n        position: absolute;\n        right: 0;\n        top: -5px;\n        background-color: #ffe600;\n      }\n      .skin .mouth .up .lip.rightl {\n        border-radius: 0 0 50px 0;\n        position: absolute;\n        right: 0;\n        top: 0;\n        transform: rotate(15deg);\n      }\n      .skin .mouth .up .lip.rightl::before {\n        position: absolute;\n        left: -5px;\n        bottom: 0;\n      }\n/*\u6211\u4EEC\u753B\u76AE\u5361\u4E18\u7684\u5634\u5DF4*/  \n      .skin .mouth .down {\n        height: 160px;\n        position: absolute;\n        top: 0;\n        width: 100%;\n        overflow: hidden;\n      }\n/*\u6211\u4EEC\u753B\u76AE\u5361\u4E18\u7684\u5C0F\u820C\u5934*/  \n      .skin .mouth .down .yuan1 {\n        border: 1px solid black;\n        width: 140px;\n        height: 500px;\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        margin-left: -70px;\n        border-radius: 65%;\n        background-color: #9b000a;\n        overflow: hidden;\n      }\n      .skin .mouth .down .yuan1 .yuan2 {\n        position: absolute;\n        bottom: -170px;\n        left: 50%;\n        margin-left: -80px;\n        width: 160px;\n        height: 300px;\n        background-color: #ff485f;\n        border-radius: 100px;\n      }\n/*\u6211\u4EEC\u753B\u76AE\u5361\u4E18\u7684\u5C0F\u8138\u86CB\u5B50*/ \n      .skin .facel {\n        position: absolute;\n        left: 50%;\n        border: 2px solid black;\n        width: 88px;\n        height: 88px;\n        top: 200px;\n        margin-left: -200px;\n        background-color: red;\n        border-radius: 50%;\n      }\n      .skin .facer {\n        position: absolute;\n        left: 50%;\n        border: 2px solid black;\n        width: 88px;\n        height: 88px;\n        top: 200px;\n        margin-left: 112px;\n        background-color: red;\n        border-radius: 50%;\n      }\n/*\u597D\u4E86\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60*/\n";
var string2 = '';
var player = {
  n: 1,
  id: undefined,
  time: 100,
  init: function init() {
    demo.innerText = string.substr(0, player.n);
    demo2.innerHTML = string.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n++;

    if (string[player.n] === '\n') {
      string2 += '<br>';
    } else if (string[player.n] === ' ') {
      // 如果是空格
      string2 += '&nbsp';
    } else {
      // 如果不是回车就照搬
      string2 += string[player.n];
    }

    demo.innerHTML = string2;
    demo2.innerHTML = string.substr(0, player.n);
    demo.scrollTop = demo.scrollHeight;

    if (player.n > string.length - 2) {
      window.clearInterval(player.id);
      return;
    }
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.time = 140;
    player.pause();
    player.play();
  },
  normal: function normal() {
    player.time = 70;
    player.pause();
    player.play();
  },
  fast: function fast() {
    player.time = 0;
    player.pause();
    player.play();
  }
};
player.init();
},{}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49378" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map