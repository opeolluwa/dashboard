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
    "url": "assets/AllEmailView.6a397453.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.855df8b9.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.07f2cdbc.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5c78dd7a.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.08162f19.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.d8a000c5.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.c39ccfba.js",
    "revision": null
  }, {
    "url": "assets/AppModal.8343d420.css",
    "revision": null
  }, {
    "url": "assets/AppModal.93a3ca82.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.4a19b034.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.cfe23610.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.e6bea473.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.930651a0.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.485737f3.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.7a36fab9.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.8523a69b.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.9266415f.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.fbf03e52.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.8f768f3e.js",
    "revision": null
  }, {
    "url": "assets/index.037a80a8.js",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/index.e9ec245d.css",
    "revision": null
  }, {
    "url": "assets/notes.ff0f5829.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.a850cabd.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotFoundView.e0824a20.js",
    "revision": null
  }, {
    "url": "assets/NotificationView.b50817e8.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.20a8b9f6.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.70c52c29.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.c2269be5.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.f814225a.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.467409da.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SignupView.6c5aebe7.css",
    "revision": null
  }, {
    "url": "assets/SignupView.aedb9bb3.js",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.f2755a0d.js",
    "revision": null
  }, {
    "url": "assets/style.3cdaf85a.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/tasks.86701183.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.e0453ee2.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.3071920b.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.45067e0e.js",
    "revision": null
  }, {
    "url": "assets/web.8ff70dc4.js",
    "revision": null
  }, {
    "url": "assets/web.df76fa5a.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "63ec36cf2ecd4a51e9c4e60acceb6d00"
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
