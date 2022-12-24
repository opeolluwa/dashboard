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
    "url": "assets/AllEmailView.136c8729.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.1f786646.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.2e830691.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5c78dd7a.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.010ccab1.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.19815307.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.6578e18a.js",
    "revision": null
  }, {
    "url": "assets/AppModal.117e258f.js",
    "revision": null
  }, {
    "url": "assets/AppModal.8343d420.css",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.1ad86955.css",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.vue_vue_type_style_index_0_scoped_cec126d1_lang.db4e1938.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.d6ecf40f.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.27cfc284.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.83fd9378.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.f93d1afb.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.f2e9e709.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.f710864f.js",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.0625a00a.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.5f0a2666.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.7a328beb.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.02675496.js",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/index.a4ded047.js",
    "revision": null
  }, {
    "url": "assets/index.b3a4b9d3.css",
    "revision": null
  }, {
    "url": "assets/notes.47ae4e08.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.df63e8bc.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.07111f46.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.c0da4f00.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.62f524ab.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.853ed21f.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.c2a8bdf8.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.f9e37127.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.d5d4e6f1.js",
    "revision": null
  }, {
    "url": "assets/SignupView.886b0c25.css",
    "revision": null
  }, {
    "url": "assets/SignupView.94fa508b.js",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.6f3dbc54.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/style.f53f47b2.js",
    "revision": null
  }, {
    "url": "assets/tasks.30f19b58.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.e41470f8.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/UpdateNote.ef04a7ed.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.77dd5ed8.js",
    "revision": null
  }, {
    "url": "assets/web.7e444847.js",
    "revision": null
  }, {
    "url": "assets/web.cd236cf3.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "0437682923511e9f143915e0b2bfc3cb"
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
