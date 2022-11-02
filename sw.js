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
    "url": "assets/AllEmailView.5671b89b.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.73c2ef94.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5c78dd7a.css",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.8eb4984d.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.294fddcb.js",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.51cd9366.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.513176b4.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppModal.3961ff28.js",
    "revision": null
  }, {
    "url": "assets/AppModal.8343d420.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.25744ddf.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.d1ea90c7.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.3c3be784.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.88e00644.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.d7254370.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.69f36370.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.6f919239.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.6f5914c0.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.7bad5fd9.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.686782ba.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.8f768f3e.js",
    "revision": null
  }, {
    "url": "assets/index.6b721bd6.js",
    "revision": null
  }, {
    "url": "assets/index.7ff7691b.css",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/notes.d382e69d.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.13653a70.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.35785205.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.0504092b.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.27468696.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.3539898b.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.5197a868.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.ed1b9fd4.js",
    "revision": null
  }, {
    "url": "assets/ProjectsView.973ac42e.css",
    "revision": null
  }, {
    "url": "assets/ProjectsView.f5a68796.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.7deb1a08.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.8a8089d8.js",
    "revision": null
  }, {
    "url": "assets/SignupView.bdde3149.css",
    "revision": null
  }, {
    "url": "assets/SignupView.ced0104d.js",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.f2755a0d.js",
    "revision": null
  }, {
    "url": "assets/style.6cb993d2.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/todo.d60ee802.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.0509bc0e.js",
    "revision": null
  }, {
    "url": "assets/twitter.b4c20ffe.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.d1a38d89.css",
    "revision": null
  }, {
    "url": "assets/UpdateNote.ec9b8ead.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.08edec3f.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.adc0ce13.css",
    "revision": null
  }, {
    "url": "assets/web.22922f78.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "623ee9611b8e380d85cb09ba3b371a0c"
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
