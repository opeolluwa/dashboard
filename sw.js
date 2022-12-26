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
    "url": "assets/AllEmailView.75939cec.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.5e991bc7.js",
    "revision": null
  }, {
    "url": "assets/AllNotesEntry.896d12cf.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.19815307.css",
    "revision": null
  }, {
    "url": "assets/AllTodoViews.eec4f040.js",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.52e2987e.css",
    "revision": null
  }, {
    "url": "assets/AppEmptyState.9d1679c7.js",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.1ad86955.css",
    "revision": null
  }, {
    "url": "assets/AppNetworkError.a14167d3.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2470bbd9.js",
    "revision": null
  }, {
    "url": "assets/BaseTextarea.2be742d1.css",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.76e65322.js",
    "revision": null
  }, {
    "url": "assets/ConfirmOtpView.83fd9378.css",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.500c9565.js",
    "revision": null
  }, {
    "url": "assets/CreateEmailView.be01e759.css",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.44cb4ae3.js",
    "revision": null
  }, {
    "url": "assets/CreateNoteView.f2e9e709.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.0625a00a.css",
    "revision": null
  }, {
    "url": "assets/CreateTodoView.cf032a0a.js",
    "revision": null
  }, {
    "url": "assets/EmailIndexView.a5a6d080.js",
    "revision": null
  }, {
    "url": "assets/emails.2ede78fb.js",
    "revision": null
  }, {
    "url": "assets/ImportantEmailView.859bc1ec.js",
    "revision": null
  }, {
    "url": "assets/index.40e12837.css",
    "revision": null
  }, {
    "url": "assets/index.867c1d86.js",
    "revision": null
  }, {
    "url": "assets/index.c56900c7.js",
    "revision": null
  }, {
    "url": "assets/notes.389e7e00.js",
    "revision": null
  }, {
    "url": "assets/NotesIndexView.6b27a7e4.js",
    "revision": null
  }, {
    "url": "assets/NotFoundView.a763002d.css",
    "revision": null
  }, {
    "url": "assets/NotFoundView.eff61bbf.js",
    "revision": null
  }, {
    "url": "assets/NotificationView.090c0d6c.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.16d838e1.js",
    "revision": null
  }, {
    "url": "assets/PasswordResetView.62f524ab.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.89d60941.css",
    "revision": null
  }, {
    "url": "assets/ProfileView.9a910c72.js",
    "revision": null
  }, {
    "url": "assets/SettingsView.474e6fb0.css",
    "revision": null
  }, {
    "url": "assets/SettingsView.e3ba03d3.js",
    "revision": null
  }, {
    "url": "assets/SignupView.00f910fe.js",
    "revision": null
  }, {
    "url": "assets/SignupView.a52701fe.css",
    "revision": null
  }, {
    "url": "assets/StarredEmailView.3c032570.js",
    "revision": null
  }, {
    "url": "assets/style.0a7ccb3b.js",
    "revision": null
  }, {
    "url": "assets/style.8b0c9dff.css",
    "revision": null
  }, {
    "url": "assets/tasks.bb470a30.js",
    "revision": null
  }, {
    "url": "assets/TodoIndexView.fa182d02.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.a8be4c08.js",
    "revision": null
  }, {
    "url": "assets/UpdateNote.c006e7c5.css",
    "revision": null
  }, {
    "url": "assets/ViewEmail.2096e502.css",
    "revision": null
  }, {
    "url": "assets/ViewEmail.25f2b723.js",
    "revision": null
  }, {
    "url": "assets/ViewNote.217e3269.css",
    "revision": null
  }, {
    "url": "assets/ViewNote.8d6ae495.js",
    "revision": null
  }, {
    "url": "assets/web.08516be7.js",
    "revision": null
  }, {
    "url": "assets/web.247cda5b.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "bd3dd99e6fa50d35233b55c2fa52dfe9"
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
