if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, l) => {
    const r =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[r]) return;
    let t = {};
    const o = (e) => i(e, r),
      u = { module: { uri: r }, exports: t, require: o };
    s[r] = Promise.all(n.map((e) => u[e] || o(e))).then((e) => (l(...e), t));
  };
}
define(["./workbox-3ea082d2"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/EmailView.68af9660.js", revision: null },
        { url: "assets/EmailView.e294e0ee.css", revision: null },
        { url: "assets/index.8dfa9ff3.js", revision: null },
        { url: "assets/index.a929e2d0.css", revision: null },
        { url: "assets/NotFoundView.0bbcb3cf.js", revision: null },
        { url: "assets/NotFoundView.56e125dd.css", revision: null },
        { url: "assets/NotificationView.8eb80c53.js", revision: null },
        { url: "assets/ProjectsView.33bacfe2.css", revision: null },
        { url: "assets/ProjectsView.ebf1df98.js", revision: null },
        { url: "assets/SettingsView.4bad085f.js", revision: null },
        { url: "assets/TodoView.6b3342c9.js", revision: null },
        { url: "index.html", revision: "bf8e7810f5ea52aced41af7b0bc07ca1" },
        { url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "manifest.webmanifest",
          revision: "be6c3e61887c27cf84f3ea878a4bf206",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
