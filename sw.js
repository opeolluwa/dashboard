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
    "url": "assets/AllNotesEntry.497ecafd.css",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.c4a818a6.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.73cc1daf.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.a7d6b79c.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.5e69e4dc.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.833f088e.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.074e2388.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.b26aa88b.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.e449811a.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.5a2017ef.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.d2daa23d.js",
    "revision": null
  }, {
    "url": "assets/default.61abfcc7.js",
    "revision": null
  }, {
    "url": "assets/default.c6fbe4cf.css",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.efeedb2f.js",
    "revision": null
  }, {
    "url": "assets/EmailView.98c87d8e.css",
    "revision": null
  }, {
    "url": "assets/EmailView.e57f0ea3.js",
    "revision": null
  }, {
    "url": "assets/index.389419c1.js",
    "revision": null
  }, {
    "url": "assets/index.c59014e5.css",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.595bb5d6.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.92ebb7ee.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.c49cc0d1.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.18d60d4f.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.a4eda510.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.d7aa02db.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.8be6677c.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.c2f854d1.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.19dea7e6.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.dc6059c9.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.e33a7e8e.css",
    "revision": null
  }, {
    "url": "assets/SignupView.49708c89.js",
    "revision": null
  }, {
    "url": "assets/SignupView.9b82ab1d.css",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.644c76ed.css",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.863e7997.js",
    "revision": null
  }, {
    "url": "assets/web.790bdaa6.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "cc4695487b8a9179ec0faac73c2f2222"
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
