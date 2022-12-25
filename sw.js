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
    "url": "assets/AllEmailView.1e54f45f.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.69abaa02.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.896d12cf.css",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.9caac35d.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.19815307.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.f5828d5e.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.e86fcbd9.js",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.1ad86955.css",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.ad9924f5.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.acd78f2b.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.83fd9378.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.bb526802.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.4d4ca756.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.6547c78c.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.f2e9e709.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.0625a00a.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.cdf7393d.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.45c8f65b.js",
    "revision": null
  }, {
    "url": "assets/emails.93522249.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.45d95787.js",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/index.b7d7334b.css",
    "revision": null
  }, {
    "url": "assets/index.e76f23a9.js",
    "revision": null
  }, {
    "url": "assets/notes.4a622a49.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.b18a18de.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotFoundView.d9cd924b.js",
    "revision": null
  }, {
    "url": "assets/NotificationView.160281d0.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.62f524ab.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.6b2187b7.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.9d3c88df.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.cc96a9a4.js",
    "revision": null
  }, {
    "url": "assets/SignupView.4ebad15f.js",
    "revision": null
  }, {
    "url": "assets/SignupView.886b0c25.css",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.87597054.js",
    "revision": null
  }, {
    "url": "assets/style.4f394f04.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/tasks.39b24e77.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.87dd1b97.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.57a676bb.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/ViewEmail.4adeb957.js",
    "revision": null
  }, {
    "url": "assets/ViewEmail.56a948e5.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.76e4157a.js",
    "revision": null
  }, {
    "url": "assets/web.3d63c4b5.js",
    "revision": null
  }, {
    "url": "assets/web.6938ddd1.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "c526db7545c213289d78e482b1dc3d69"
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
