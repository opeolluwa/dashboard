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
    "url": "assets/AllEmailView.4cde24c8.js",
    "revision": null
  }, {
    "url": "assets/AllEmailView.6a397453.css",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5c78dd7a.css",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5cf0d47c.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.09ae4f85.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.d8a000c5.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.1fc242ba.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppModal.8343d420.css",
    "revision": null
  }, {
    "url": "assets/AppModal.f2a002ff.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.0e9c386b.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.d3027d9c.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.e6bea473.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.c7d55be1.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.5c9c6613.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.7a36fab9.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.353cf66a.js",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.8523a69b.css",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.a103d9fb.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.8f768f3e.js",
    "revision": null
  }, {
    "url": "assets/index.10e65604.css",
    "revision": null
  }, {
    "url": "assets/index.4f427258.js",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/notes.5ef7c5c4.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.c41e82e0.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotFoundView.e79b01ab.js",
    "revision": null
  }, {
    "url": "assets/NotificationView.8a768331.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.70c52c29.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.a3d73724.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.b3e73db1.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.68312557.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.f6aef149.js",
    "revision": null
  }, {
    "url": "assets/SignupView.6c5aebe7.css",
    "revision": null
  }, {
    "url": "assets/SignupView.9e741a02.js",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.f2755a0d.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/style.f03fdcfc.js",
    "revision": null
  }, {
    "url": "assets/tasks.9bfd13e4.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.69f24e9c.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/UpdateNote.f9daf6c5.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.cd815a6d.js",
    "revision": null
  }, {
    "url": "assets/web.4a491601.js",
    "revision": null
  }, {
    "url": "assets/web.6b296c55.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "12f1d029cc46914e0743023d9c06e6db"
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
