import {
  I as u,
  _ as a,
  r as c,
  o as i,
  c as l,
  a as n,
  t as s,
  b as t,
  F as h,
} from "./index.8dfa9ff3.js";
const f = {
  props: {
    title: { type: String, required: !0, default: "Alert" },
    content: {
      type: String,
      required: !0,
      default: "This is an example truncated email content...",
    },
  },
  components: { Icon: u },
};
const v = { class: "email-item" },
  y = { class: "email-content" },
  w = n("input", { type: "checkbox", name: "select", class: "" }, null, -1),
  b = { class: "title" },
  x = { class: "content" },
  I = { class: "email-controls" };
function g(r, m, o, d, p, _) {
  const e = c("Icon");
  return (
    i(),
    l("div", v, [
      n("div", y, [
        w,
        n("div", b, s(o.title), 1),
        n("span", x, s(o.content), 1),
      ]),
      n("div", I, [
        t(e, { icon: "mdi:star-outline", class: "star-email" }),
        t(e, { icon: "mdi:trash-can-outline", class: "delete" }),
        t(e, { icon: "mdi:dots-vertical", class: "more-options" }),
      ]),
    ])
  );
}
const $ = a(f, [["render", g]]),
  E = { name: "EmailView", components: { EmailItem: $ } };
function k(r, m, o, d, p, _) {
  const e = c("EmailItem");
  return (
    i(),
    l(
      h,
      null,
      [
        t(e, {
          title: "Re: charles@example.com",
          content:
            "past compound cast solution observe word typical major thy smoke tone recently sport appropriate wherever feed discovery universe fall probably due dead me learn",
        }),
        t(e, {
          title: "Invitation for interview",
          content:
            "spell position ocean serve natural fly enter becoming worker heavy want divide fog lamp shells pilot white sold successful blind choice willing start alone",
        }),
        t(e, {
          title: "Promotion",
          content:
            "behind palace shelter raw sea means mathematics ball policeman value alphabet party fly machinery draw bit exercise church ants tune oldest wrote load direct",
        }),
      ],
      64
    )
  );
}
const B = a(E, [["render", k]]);
export { B as default };
