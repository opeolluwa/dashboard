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
    "url": "assets/AllNotesEntry.1510411b.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.f1695b86.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.73cc1daf.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.c4f030c6.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.5e69e4dc.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.60c8216c.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.5ff683c7.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.d4994696.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.64b8ace1.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.5a2017ef.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.634d1a1e.js",
    "revision": null
  }, {
    "url": "assets/default.c6fbe4cf.css",
    "revision": null
  }, {
    "url": "assets/default.d7ec03ea.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.13f7d0d6.js",
    "revision": null
  }, {
    "url": "assets/EmailView.98c87d8e.css",
    "revision": null
  }, {
    "url": "assets/EmailView.eaa75273.js",
    "revision": null
  }, {
    "url": "assets/index.3ccb1885.css",
    "revision": null
  }, {
    "url": "assets/index.f52672c7.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.3f4ceca1.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.6de01bd1.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.c49cc0d1.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.cfef6b39.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.2dc4ab10.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.39a2db76.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.22165116.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.90b5b6fb.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.d9b8833c.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.af61d06d.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.e33a7e8e.css",
    "revision": null
  }, {
    "url": "assets/SignupView.198e23c7.js",
    "revision": null
  }, {
    "url": "assets/SignupView.def4e36e.css",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.6298f799.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.644c76ed.css",
    "revision": null
  }, {
    "url": "assets/web.19256a64.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "784eb77b2b1158013b34fa5d04311b59"
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
