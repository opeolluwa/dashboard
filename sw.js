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
    "url": "assets/AllEmailView.b7d20847.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.c2d9dadf.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5c78dd7a.css",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.f77689c8.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.19815307.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.fcc39cb2.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.9b4226d7.js",
    "revision": null
  }, {
    "url": "assets/AppModal.4128b41c.js",
    "revision": null
  }, {
    "url": "assets/AppModal.8343d420.css",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.1ad86955.css",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.550ad12a.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.77e52fab.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.83fd9378.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.d646998d.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.abf80ba9.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.dc60e8a7.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.f2e9e709.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.0625a00a.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.594d9f87.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.70529379.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.095f2bde.js",
    "revision": null
  }, {
    "url": "assets/index.430f0fbb.js",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/index.b3a4b9d3.css",
    "revision": null
  }, {
    "url": "assets/notes.16b8e6f2.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.891b1f88.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotFoundView.cd7f3d7e.js",
    "revision": null
  }, {
    "url": "assets/NotificationView.9f8a09fe.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.62f524ab.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.7150d0a4.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.07088c57.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.dfb4f6e4.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.17eff5ea.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SignupView.26801b9b.js",
    "revision": null
  }, {
    "url": "assets/SignupView.886b0c25.css",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.e9c9bc0d.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/style.8e45b15d.js",
    "revision": null
  }, {
    "url": "assets/tasks.e76ed17a.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.574b5a0d.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.4c43c6e6.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.8037646b.js",
    "revision": null
  }, {
    "url": "assets/web.c114fed2.js",
    "revision": null
  }, {
    "url": "assets/web.ed29ee60.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "fb9bc9fc13c6ad7a2ecec131728e5451"
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
