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
    "url": "assets/AllEmailView.1c76c050.css",
    "revision": null
  }, {
    "url": "assets/AllEmailView.26ce29ae.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5b97f36d.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.896d12cf.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.19815307.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.f2c86f13.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.f3a7a0a7.js",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.046f6c87.js",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.1ad86955.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.8f11b227.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.151294f8.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.83fd9378.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.11437453.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.d599f526.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.f2e9e709.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.0625a00a.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.3b1b8b20.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.81dc2df5.js",
    "revision": null
  }, {
    "url": "assets/emails.9442720b.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.4f3bddc1.js",
    "revision": null
  }, {
    "url": "assets/index.6a4c3616.js",
    "revision": null
  }, {
    "url": "assets/index.82fbb030.css",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/notes.c1806401.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.764dcb45.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.56c7cdbb.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotificationView.cb991125.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.62f524ab.css",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.b86cf514.js",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.bcad6e30.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.e4131597.js",
    "revision": null
  }, {
    "url": "assets/SignupView.39bbb88b.js",
    "revision": null
  }, {
    "url": "assets/SignupView.886b0c25.css",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.79cc1543.js",
    "revision": null
  }, {
    "url": "assets/style.24b26588.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/tasks.b4e5e76f.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.55ad3edc.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.6f1be006.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/ViewEmail.7c46c37c.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.8cece419.js",
    "revision": null
  }, {
    "url": "assets/web.0e78d22e.js",
    "revision": null
  }, {
    "url": "assets/web.4b758ec0.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "870bbdf206f00faa1dbcccec6f40f8b0"
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
