import {
  _ as c,
  o as p,
  c as _,
  a as t,
  d as m,
  t as g,
  p as j,
  e as P,
  B,
  f as M,
  r as n,
  b as s,
  w as r,
  g as C,
  v as I,
  F as V,
} from "./index.8dfa9ff3.js";
const k = {},
  b = { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
  S = t(
    "path",
    { fill: "currentColor", d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" },
    null,
    -1
  ),
  y = [S];
function z(e, o) {
  return p(), _("svg", b, y);
}
const H = c(k, [["render", z]]),
  L = { props: { title: { type: String, required: !0, default: "Alert" } } };
const v = (e) => (j("data-v-3de496cf"), (e = e()), P(), e),
  x = { class: "modal" },
  A = v(() =>
    t(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        fill: "var(--default-red)",
      },
      [
        t("path", { fill: "none", d: "M0 0h24v24H0z" }),
        t("path", {
          d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z",
        }),
      ],
      -1
    )
  ),
  N = [A],
  T = { class: "check" },
  D = v(() =>
    t(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        fill: "var(--default-red)",
      },
      [
        t("path", { fill: "none", d: "M0 0h24v24H0z" }),
        t("path", {
          d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z",
        }),
      ],
      -1
    )
  ),
  F = [D];
function q(e, o, u, f, w, h) {
  return (
    p(),
    _(
      "div",
      {
        class: "modal-overlay",
        onClick: o[2] || (o[2] = (l) => e.$emit("close-modal")),
      },
      [
        t("div", x, [
          t(
            "div",
            {
              class: "close mobile",
              onClick: o[0] || (o[0] = (l) => e.$emit("close-modal")),
            },
            N
          ),
          t("div", T, [m(e.$slots, "icon", {}, void 0, !0)]),
          t("h6", null, g(u.title), 1),
          m(e.$slots, "content", {}, void 0, !0),
        ]),
        t(
          "div",
          {
            class: "close desktop",
            onClick: o[1] || (o[1] = (l) => e.$emit("close-modal")),
          },
          F
        ),
      ]
    )
  );
}
const E = c(L, [
    ["render", q],
    ["__scopeId", "data-v-3de496cf"],
  ]),
  Z = {
    name: "ProjectView",
    components: { BaseButton: B, IconPlus: H, AppModal: E, BaseTextInput: M },
    data: () => ({
      showProjectModal: !1,
      addProject: {
        name: "",
        description: "",
        url: "",
        image: "",
        github: "",
        technologies: "",
      },
    }),
  };
const G = { class: "header" };
function J(e, o, u, f, w, h) {
  const l = n("IconPlus"),
    a = n("BaseButton"),
    i = n("BaseTextInput"),
    $ = n("AppModal");
  return (
    p(),
    _(
      V,
      null,
      [
        t("div", G, [
          s(
            a,
            {
              text: "add new",
              class: "add-new-button",
              onClick: o[0] || (o[0] = (d) => (e.showProjectModal = !0)),
            },
            { default: r(() => [s(l)]), _: 1 }
          ),
        ]),
        s(
          a,
          {
            text: "",
            class: "add-new-fab",
            onClick: o[1] || (o[1] = (d) => (e.showProjectModal = !0)),
          },
          { default: r(() => [s(l)]), _: 1 }
        ),
        C(
          s(
            $,
            {
              onCloseModal: o[3] || (o[3] = (d) => (e.showProjectModal = !1)),
              title: "Add New Project",
            },
            {
              content: r(() => [
                t(
                  "form",
                  {
                    action: "",
                    onClick:
                      o[2] ||
                      (o[2] = (...d) =>
                        e.addNewProject && e.addNewProject(...d)),
                  },
                  [
                    s(
                      i,
                      {
                        label: "",
                        type: "text",
                        placeholder: "project name",
                        model: e.addProject.name,
                        class: "field",
                      },
                      null,
                      8,
                      ["model"]
                    ),
                    s(
                      i,
                      {
                        placeholder: " project description",
                        label: "",
                        model: e.addProject.description,
                        class: "field",
                      },
                      null,
                      8,
                      ["model"]
                    ),
                    s(
                      i,
                      {
                        placeholder: "github url",
                        label: "",
                        model: e.addProject.description,
                        class: "field",
                      },
                      null,
                      8,
                      ["model"]
                    ),
                    s(a, { text: "add project", class: "field" }),
                  ]
                ),
              ]),
              _: 1,
            },
            512
          ),
          [[I, e.showProjectModal]]
        ),
      ],
      64
    )
  );
}
const O = c(Z, [
  ["render", J],
  ["__scopeId", "data-v-6260f108"],
]);
export { O as default };
