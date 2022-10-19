/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3589c0c5'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/AppEmptyState.4904ab3a.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.6ba0bb58.js",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.55ad7347.js",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.fac5fc55.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.991c0360.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.f0398b4b.css",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.f2d86dd3.js",
    "revision": null
  }, {
    "url": "assets/EmailView.071c2441.js",
    "revision": null
  }, {
    "url": "assets/EmailView.a8a9e8cd.css",
    "revision": null
  }, {
    "url": "assets/index.4d1a3d89.css",
    "revision": null
  }, {
    "url": "assets/index.654f0b58.js",
    "revision": null
  }, {
    "url": "assets/NotesView.170b651b.css",
    "revision": null
  }, {
    "url": "assets/NotesView.6851980a.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.3da22071.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.c49cc0d1.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.c4a997d9.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.bb73555f.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.3290f7f4.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.bfe5167c.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.6149bac7.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.d23dddc6.css",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "4fc5116e7628529bf8b2ebc06e64d38d"
  }, {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  }, {
    "url": "manifest.webmanifest",
    "revision": "2278a49869c66e44212511dd80370d3c"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
