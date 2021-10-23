!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Glide = e() }(this, function () { "use strict"; var t = { type: "slider", startAt: 0, perView: 1, focusAt: 0, gap: 10, autoplay: !1, hoverpause: !0, keyboard: !0, bound: !1, swipeThreshold: 80, dragThreshold: 120, perTouch: !1, touchRatio: .5, touchAngle: 45, animationDuration: 400, rewind: !0, rewindDuration: 800, animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)", throttle: 10, direction: "ltr", peek: 0, breakpoints: {}, classes: { direction: { ltr: "glide--ltr", rtl: "glide--rtl" }, slider: "glide--slider", carousel: "glide--carousel", swipeable: "glide--swipeable", dragging: "glide--dragging", cloneSlide: "glide__slide--clone", activeNav: "glide__bullet--active", activeSlide: "glide__slide--active", disabledArrow: "glide__arrow--disabled" } }; function e(t) { console.error("[Glide warn]: " + t) } var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, i = function (t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }, r = function () { function t(t, e) { for (var n = 0; n < e.length; n++) { var i = e[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) } } return function (e, n, i) { return n && t(e.prototype, n), i && t(e, i), e } }(), o = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]) } return t }, s = function (t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }; function u(t) { return parseInt(t) } function a(t) { return "string" == typeof t } function c(t) { var e = void 0 === t ? "undefined" : n(t); return "function" === e || "object" === e && !!t } function l(t) { return "function" == typeof t } function f(t) { return void 0 === t } function d(t) { return t.constructor === Array } function h(t, e, n) { Object.defineProperty(t, e, n) } function v(t, e) { var n = o({}, t, e); return e.hasOwnProperty("classes") && (n.classes = o({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = o({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty("breakpoints") && (n.breakpoints = o({}, t.breakpoints, e.breakpoints)), n } var p = function () { function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; i(this, t), this.events = e, this.hop = e.hasOwnProperty } return r(t, [{ key: "on", value: function (t, e) { if (d(t)) for (var n = 0; n < t.length; n++)this.on(t[n], e); this.hop.call(this.events, t) || (this.events[t] = []); var i = this.events[t].push(e) - 1; return { remove: function () { delete this.events[t][i] } } } }, { key: "emit", value: function (t, e) { if (d(t)) for (var n = 0; n < t.length; n++)this.emit(t[n], e); this.hop.call(this.events, t) && this.events[t].forEach(function (t) { t(e || {}) }) } }]), t }(), m = function () { function n(e) { var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; i(this, n), this._c = {}, this._t = [], this._e = new p, this.disabled = !1, this.selector = e, this.settings = v(t, r), this.index = this.settings.startAt } return r(n, [{ key: "mount", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this._e.emit("mount.before"), c(t) ? this._c = function (t, n, i) { var r = {}; for (var o in n) l(n[o]) ? r[o] = n[o](t, r, i) : e("Extension must be a function"); for (var s in r) l(r[s].mount) && r[s].mount(); return r }(this, t, this._e) : e("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this } }, { key: "mutate", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []; return d(t) ? this._t = t : e("You need to provide a array on `mutate()`"), this } }, { key: "update", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return this.settings = v(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this } }, { key: "go", value: function (t) { return this._c.Run.make(t), this } }, { key: "move", value: function (t) { return this._c.Transition.disable(), this._c.Move.make(t), this } }, { key: "destroy", value: function () { return this._e.emit("destroy"), this } }, { key: "play", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]; return t && (this.settings.autoplay = t), this._e.emit("play"), this } }, { key: "pause", value: function () { return this._e.emit("pause"), this } }, { key: "disable", value: function () { return this.disabled = !0, this } }, { key: "enable", value: function () { return this.disabled = !1, this } }, { key: "on", value: function (t, e) { return this._e.on(t, e), this } }, { key: "isType", value: function (t) { return this.settings.type === t } }, { key: "settings", get: function () { return this._o }, set: function (t) { c(t) ? this._o = t : e("Options must be an `object` instance.") } }, { key: "index", get: function () { return this._i }, set: function (t) { this._i = u(t) } }, { key: "type", get: function () { return this.settings.type } }, { key: "disabled", get: function () { return this._d }, set: function (t) { this._d = !!t } }]), n }(); function g() { return (new Date).getTime() } function y(t, e, n) { var i = void 0, r = void 0, o = void 0, s = void 0, u = 0; n || (n = {}); var a = function () { u = !1 === n.leading ? 0 : g(), i = null, s = t.apply(r, o), i || (r = o = null) }, c = function () { var c = g(); u || !1 !== n.leading || (u = c); var l = e - (c - u); return r = this, o = arguments, l <= 0 || l > e ? (i && (clearTimeout(i), i = null), u = c, s = t.apply(r, o), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(a, l)), s }; return c.cancel = function () { clearTimeout(i), u = 0, i = r = o = null }, c } var b = { ltr: ["marginLeft", "marginRight"], rtl: ["marginRight", "marginLeft"] }; function w(t) { if (t && t.parentNode) { for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n } return [] } function _(t) { return !!(t && t instanceof window.HTMLElement) } var k = '[data-glide-el="track"]'; var S = function () { function t() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; i(this, t), this.listeners = e } return r(t, [{ key: "on", value: function (t, e, n) { var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]; a(t) && (t = [t]); for (var r = 0; r < t.length; r++)this.listeners[t[r]] = n, e.addEventListener(t[r], this.listeners[t[r]], i) } }, { key: "off", value: function (t, e) { var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]; a(t) && (t = [t]); for (var i = 0; i < t.length; i++)e.removeEventListener(t[i], this.listeners[t[i]], n) } }, { key: "destroy", value: function () { delete this.listeners } }]), t }(); var H = ["ltr", "rtl"], T = { ">": "<", "<": ">", "=": "=" }; function x(t, e) { return { modify: function (t) { return e.Direction.is("rtl") ? -t : t } } } function O(t, e) { return { modify: function (n) { return n + e.Gaps.value * t.index } } } function A(t, e) { return { modify: function (t) { return t + e.Clones.grow / 2 } } } function M(t, e) { return { modify: function (n) { if (t.settings.focusAt >= 0) { var i = e.Peek.value; return c(i) ? n - i.before : n - i } return n } } } function C(t, e) { return { modify: function (n) { var i = e.Gaps.value, r = e.Sizes.width, o = t.settings.focusAt, s = e.Sizes.slideWidth; return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o } } } var P = !1; try { var j = Object.defineProperty({}, "passive", { get: function () { P = !0 } }); window.addEventListener("testPassive", null, j), window.removeEventListener("testPassive", null, j) } catch (t) { } var L = P, z = ["touchstart", "mousedown"], D = ["touchmove", "mousemove"], E = ["touchend", "touchcancel", "mouseup", "mouseleave"], R = ["mousedown", "mousemove", "mouseup", "mouseleave"]; var W = '[data-glide-el="controls[nav]"]', G = '[data-glide-el^="controls"]'; function B(t) { return c(t) ? (n = t, Object.keys(n).sort().reduce(function (t, e) { return t[e] = n[e], t[e], t }, {})) : (e("Breakpoints option must be an object"), {}); var n } var N = { Html: function (t, n) { var i = { mount: function () { this.root = t.selector, this.track = this.root.querySelector(k), this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (e) { return !e.classList.contains(t.settings.classes.cloneSlide) }) } }; return h(i, "root", { get: function () { return i._r }, set: function (t) { a(t) && (t = document.querySelector(t)), _(t) ? i._r = t : e("Root element must be a existing Html node") } }), h(i, "track", { get: function () { return i._t }, set: function (t) { _(t) ? i._t = t : e("Could not find track element. Please use " + k + " attribute.") } }), h(i, "wrapper", { get: function () { return i.track.children[0] } }), i }, Translate: function (t, n, i) { var r = { set: function (i) { var r = function (t, n, i) { var r = [O, A, M, C].concat(t._t, [x]); return { mutate: function (o) { for (var s = 0; s < r.length; s++) { var u = r[s]; l(u) && l(u().modify) ? o = u(t, n, i).modify(o) : e("Transformer should be a function that returns an object with `modify()` method") } return o } } }(t, n).mutate(i); n.Html.wrapper.style.transform = "translate3d(" + -1 * r + "px, 0px, 0px)" }, remove: function () { n.Html.wrapper.style.transform = "" } }; return i.on("move", function (e) { var o = n.Gaps.value, s = n.Sizes.length, u = n.Sizes.slideWidth; return t.isType("carousel") && n.Run.isOffset("<") ? (n.Transition.after(function () { i.emit("translate.jump"), r.set(u * (s - 1)) }), r.set(-u - o * s)) : t.isType("carousel") && n.Run.isOffset(">") ? (n.Transition.after(function () { i.emit("translate.jump"), r.set(0) }), r.set(u * s + o * s)) : r.set(e.movement) }), i.on("destroy", function () { r.remove() }), r }, Transition: function (t, e, n) { var i = !1, r = { compose: function (e) { var n = t.settings; return i ? e + " 0ms " + n.animationTimingFunc : e + " " + this.duration + "ms " + n.animationTimingFunc }, set: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform"; e.Html.wrapper.style.transition = this.compose(t) }, remove: function () { e.Html.wrapper.style.transition = "" }, after: function (t) { setTimeout(function () { t() }, this.duration) }, enable: function () { i = !1, this.set() }, disable: function () { i = !0, this.set() } }; return h(r, "duration", { get: function () { var n = t.settings; return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration } }), n.on("move", function () { r.set() }), n.on(["build.before", "resize", "translate.jump"], function () { r.disable() }), n.on("run", function () { r.enable() }), n.on("destroy", function () { r.remove() }), r }, Direction: function (t, n, i) { var r = { mount: function () { this.value = t.settings.direction }, resolve: function (t) { var e = t.slice(0, 1); return this.is("rtl") ? t.split(e).join(T[e]) : t }, is: function (t) { return this.value === t }, addClass: function () { n.Html.root.classList.add(t.settings.classes.direction[this.value]) }, removeClass: function () { n.Html.root.classList.remove(t.settings.classes.direction[this.value]) } }; return h(r, "value", { get: function () { return r._v }, set: function (t) { H.indexOf(t) > -1 ? r._v = t : e("Direction value must be `ltr` or `rtl`") } }), i.on(["destroy", "update"], function () { r.removeClass() }), i.on("update", function () { r.mount() }), i.on(["build.before", "update"], function () { r.addClass() }), r }, Peek: function (t, e, n) { var i = { mount: function () { this.value = t.settings.peek } }; return h(i, "value", { get: function () { return i._v }, set: function (t) { c(t) ? (t.before = u(t.before), t.after = u(t.after)) : t = u(t), i._v = t } }), h(i, "reductor", { get: function () { var e = i.value, n = t.settings.perView; return c(e) ? e.before / n + e.after / n : 2 * e / n } }), n.on(["resize", "update"], function () { i.mount() }), i }, Sizes: function (t, e, n) { var i = { setupSlides: function () { for (var t = this.slideWidth + "px", n = e.Html.slides, i = 0; i < n.length; i++)n[i].style.width = t }, setupWrapper: function (t) { e.Html.wrapper.style.width = this.wrapperSize + "px" }, remove: function () { for (var t = e.Html.slides, n = 0; n < t.length; n++)t[n].style.width = ""; e.Html.wrapper.style.width = "" } }; return h(i, "length", { get: function () { return e.Html.slides.length } }), h(i, "width", { get: function () { return e.Html.root.offsetWidth } }), h(i, "wrapperSize", { get: function () { return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow } }), h(i, "slideWidth", { get: function () { return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor } }), n.on(["build.before", "resize", "update"], function () { i.setupSlides(), i.setupWrapper() }), n.on("destroy", function () { i.remove() }), i }, Gaps: function (t, e, n) { var i = { apply: function (t) { for (var n = 0, i = t.length; n < i; n++) { var r = t[n].style, o = e.Direction.value; r[b[o][0]] = 0 !== n ? this.value / 2 + "px" : "", n !== t.length - 1 ? r[b[o][1]] = this.value / 2 + "px" : r[b[o][1]] = "" } }, remove: function (t) { for (var e = 0, n = t.length; e < n; e++) { var i = t[e].style; i.marginLeft = "", i.marginRight = "" } } }; return h(i, "value", { get: function () { return u(t.settings.gap) } }), h(i, "grow", { get: function () { return i.value * (e.Sizes.length - 1) } }), h(i, "reductor", { get: function () { var e = t.settings.perView; return i.value * (e - 1) / e } }), n.on(["build.after", "update"], y(function () { i.apply(e.Html.wrapper.children) }, 30)), n.on("destroy", function () { i.remove(e.Html.wrapper.children) }), i }, Move: function (t, e, n) { var i = { mount: function () { this._o = 0 }, make: function () { var t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; this.offset = i, n.emit("move", { movement: this.value }), e.Transition.after(function () { n.emit("move.after", { movement: t.value }) }) } }; return h(i, "offset", { get: function () { return i._o }, set: function (t) { i._o = f(t) ? 0 : u(t) } }), h(i, "translate", { get: function () { return e.Sizes.slideWidth * t.index } }), h(i, "value", { get: function () { var t = this.offset, n = this.translate; return e.Direction.is("rtl") ? n + t : n - t } }), n.on(["build.before", "run"], function () { i.make() }), i }, Clones: function (t, e, n) { var i = { mount: function () { this.items = [], t.isType("carousel") && (this.items = this.collect()) }, collect: function () { for (var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = e.Html.slides, r = t.settings, o = r.perView, s = r.classes, u = o + +!!t.settings.peek, a = i.slice(0, u), c = i.slice(-u), l = 0; l < Math.max(1, Math.floor(o / i.length)); l++) { for (var f = 0; f < a.length; f++) { var d = a[f].cloneNode(!0); d.classList.add(s.cloneSlide), n.push(d) } for (var h = 0; h < c.length; h++) { var v = c[h].cloneNode(!0); v.classList.add(s.cloneSlide), n.unshift(v) } } return n }, append: function () { for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), s = t.slice(0, o).reverse(), u = t.slice(o, t.length), a = e.Sizes.slideWidth + "px", c = 0; c < u.length; c++)i.appendChild(u[c]); for (var l = 0; l < s.length; l++)i.insertBefore(s[l], r[0]); for (var f = 0; f < t.length; f++)t[f].style.width = a }, remove: function () { for (var t = this.items, n = 0; n < t.length; n++)e.Html.wrapper.removeChild(t[n]) } }; return h(i, "grow", { get: function () { return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length } }), n.on("update", function () { i.remove(), i.mount(), i.append() }), n.on("build.before", function () { t.isType("carousel") && i.append() }), n.on("destroy", function () { i.remove() }), i }, Resize: function (t, e, n) { var i = new S, r = { mount: function () { this.bind() }, bind: function () { i.on("resize", window, y(function () { n.emit("resize") }, t.settings.throttle)) }, unbind: function () { i.off("resize", window) } }; return n.on("destroy", function () { r.unbind(), i.destroy() }), r }, Build: function (t, e, n) { var i = { mount: function () { n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after") }, typeClass: function () { e.Html.root.classList.add(t.settings.classes[t.settings.type]) }, activeClass: function () { var n = t.settings.classes, i = e.Html.slides[t.index]; i && (i.classList.add(n.activeSlide), w(i).forEach(function (t) { t.classList.remove(n.activeSlide) })) }, removeClasses: function () { var n = t.settings.classes; e.Html.root.classList.remove(n[t.settings.type]), e.Html.slides.forEach(function (t) { t.classList.remove(n.activeSlide) }) } }; return n.on(["destroy", "update"], function () { i.removeClasses() }), n.on(["resize", "update"], function () { i.mount() }), n.on("move.after", function () { i.activeClass() }), i }, Run: function (t, n, i) { var r = { mount: function () { this._o = !1 }, make: function (e) { var r = this; t.disabled || (t.disable(), this.move = e, i.emit("run.before", this.move), this.calculate(), i.emit("run", this.move), n.Transition.after(function () { r.isStart() && i.emit("run.start", r.move), r.isEnd() && i.emit("run.end", r.move), (r.isOffset("<") || r.isOffset(">")) && (r._o = !1, i.emit("run.offset", r.move)), i.emit("run.after", r.move), t.enable() })) }, calculate: function () { var n = this.move, i = this.length, r = n.steps, o = n.direction, s = "number" == typeof u(r) && 0 !== u(r); switch (o) { case ">": ">" === r ? t.index = i : this.isEnd() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = 0) : s ? t.index += Math.min(i - t.index, -u(r)) : t.index++; break; case "<": "<" === r ? t.index = 0 : this.isStart() ? t.isType("slider") && !t.settings.rewind || (this._o = !0, t.index = i) : s ? t.index -= Math.min(t.index, u(r)) : t.index--; break; case "=": t.index = r; break; default: e("Invalid direction pattern [" + o + r + "] has been used") } }, isStart: function () { return 0 === t.index }, isEnd: function () { return t.index === this.length }, isOffset: function (t) { return this._o && this.move.direction === t } }; return h(r, "move", { get: function () { return this._m }, set: function (t) { var e = t.substr(1); this._m = { direction: t.substr(0, 1), steps: e ? u(e) ? u(e) : e : 0 } } }), h(r, "length", { get: function () { var e = t.settings, i = n.Html.slides.length; return t.isType("slider") && "center" !== e.focusAt && e.bound ? i - 1 - (u(e.perView) - 1) + u(e.focusAt) : i - 1 } }), h(r, "offset", { get: function () { return this._o } }), r }, Swipe: function (t, e, n) { var i = new S, r = 0, o = 0, s = 0, a = !1, c = !!L && { passive: !0 }, l = { mount: function () { this.bindSwipeStart() }, start: function (e) { if (!a && !t.disabled) { this.disable(); var i = this.touches(e); r = null, o = u(i.pageX), s = u(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start") } }, move: function (i) { if (!t.disabled) { var a = t.settings, c = a.touchAngle, l = a.touchRatio, f = a.classes, d = this.touches(i), h = u(d.pageX) - o, v = u(d.pageY) - s, p = Math.abs(h << 2), m = Math.abs(v << 2), g = Math.sqrt(p + m), y = Math.sqrt(m); if (!(180 * (r = Math.asin(y / g)) / Math.PI < c)) return !1; i.stopPropagation(), e.Move.make(h * parseFloat(l)), e.Html.root.classList.add(f.dragging), n.emit("swipe.move") } }, end: function (i) { if (!t.disabled) { var s = t.settings, a = this.touches(i), c = this.threshold(i), l = a.pageX - o, f = 180 * r / Math.PI, d = Math.round(l / e.Sizes.slideWidth); this.enable(), l > c && f < s.touchAngle ? (s.perTouch && (d = Math.min(d, u(s.perTouch))), e.Direction.is("rtl") && (d = -d), e.Run.make(e.Direction.resolve("<" + d))) : l < -c && f < s.touchAngle ? (s.perTouch && (d = Math.max(d, -u(s.perTouch))), e.Direction.is("rtl") && (d = -d), e.Run.make(e.Direction.resolve(">" + d))) : e.Move.make(), e.Html.root.classList.remove(s.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end") } }, bindSwipeStart: function () { var n = this, r = t.settings; r.swipeThreshold && i.on(z[0], e.Html.wrapper, function (t) { n.start(t) }, c), r.dragThreshold && i.on(z[1], e.Html.wrapper, function (t) { n.start(t) }, c) }, unbindSwipeStart: function () { i.off(z[0], e.Html.wrapper, c), i.off(z[1], e.Html.wrapper, c) }, bindSwipeMove: function () { var n = this; i.on(D, e.Html.wrapper, y(function (t) { n.move(t) }, t.settings.throttle), c) }, unbindSwipeMove: function () { i.off(D, e.Html.wrapper, c) }, bindSwipeEnd: function () { var t = this; i.on(E, e.Html.wrapper, function (e) { t.end(e) }) }, unbindSwipeEnd: function () { i.off(E, e.Html.wrapper) }, touches: function (t) { return R.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0] }, threshold: function (e) { var n = t.settings; return R.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold }, enable: function () { return a = !1, e.Transition.enable(), this }, disable: function () { return a = !0, e.Transition.disable(), this } }; return n.on("build.after", function () { e.Html.root.classList.add(t.settings.classes.swipeable) }), n.on("destroy", function () { l.unbindSwipeStart(), l.unbindSwipeMove(), l.unbindSwipeEnd(), i.destroy() }), l }, Images: function (t, e, n) { var i = new S, r = { mount: function () { this.bind() }, bind: function () { i.on("dragstart", e.Html.wrapper, this.dragstart) }, unbind: function () { i.off("dragstart", e.Html.wrapper) }, dragstart: function (t) { t.preventDefault() } }; return n.on("destroy", function () { r.unbind(), i.destroy() }), r }, Anchors: function (t, e, n) { var i = new S, r = !1, o = !1, s = { mount: function () { this._a = e.Html.wrapper.querySelectorAll("a"), this.bind() }, bind: function () { i.on("click", e.Html.wrapper, this.click) }, unbind: function () { i.off("click", e.Html.wrapper) }, click: function (t) { o && (t.stopPropagation(), t.preventDefault()) }, detach: function () { if (o = !0, !r) { for (var t = 0; t < this.items.length; t++)this.items[t].draggable = !1, this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href"); r = !0 } return this }, attach: function () { if (o = !1, r) { for (var t = 0; t < this.items.length; t++)this.items[t].draggable = !0, this.items[t].setAttribute("href", this.items[t].getAttribute("data-href")); r = !1 } return this } }; return h(s, "items", { get: function () { return s._a } }), n.on("swipe.move", function () { s.detach() }), n.on("swipe.end", function () { e.Transition.after(function () { s.attach() }) }), n.on("destroy", function () { s.attach(), s.unbind(), i.destroy() }), s }, Controls: function (t, e, n) { var i = new S, r = !!L && { passive: !0 }, o = { mount: function () { this._n = e.Html.root.querySelectorAll(W), this._c = e.Html.root.querySelectorAll(G), this.addBindings() }, setActive: function () { for (var t = 0; t < this._n.length; t++)this.addClass(this._n[t].children) }, removeActive: function () { for (var t = 0; t < this._n.length; t++)this.removeClass(this._n[t].children) }, addClass: function (e) { var n = t.settings, i = e[t.index]; i && (i.classList.add(n.classes.activeNav), w(i).forEach(function (t) { t.classList.remove(n.classes.activeNav) })) }, removeClass: function (e) { var n = e[t.index]; n && n.classList.remove(t.settings.classes.activeNav) }, addBindings: function () { for (var t = 0; t < this._c.length; t++)this.bind(this._c[t].children) }, removeBindings: function () { for (var t = 0; t < this._c.length; t++)this.unbind(this._c[t].children) }, bind: function (t) { for (var e = 0; e < t.length; e++)i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, r) }, unbind: function (t) { for (var e = 0; e < t.length; e++)i.off(["click", "touchstart"], t[e]) }, click: function (t) { t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir"))) } }; return h(o, "items", { get: function () { return o._c } }), n.on(["mount.after", "move.after"], function () { o.setActive() }), n.on("destroy", function () { o.removeBindings(), o.removeActive(), i.destroy() }), o }, Keyboard: function (t, e, n) { var i = new S, r = { mount: function () { t.settings.keyboard && this.bind() }, bind: function () { i.on("keyup", document, this.press) }, unbind: function () { i.off("keyup", document) }, press: function (t) { 39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<")) } }; return n.on(["destroy", "update"], function () { r.unbind() }), n.on("update", function () { r.mount() }), n.on("destroy", function () { i.destroy() }), r }, Autoplay: function (t, e, n) { var i = new S, r = { mount: function () { this.start(), t.settings.hoverpause && this.bind() }, start: function () { var n = this; t.settings.autoplay && f(this._i) && (this._i = setInterval(function () { n.stop(), e.Run.make(">"), n.start() }, this.time)) }, stop: function () { this._i = clearInterval(this._i) }, bind: function () { var t = this; i.on("mouseover", e.Html.root, function () { t.stop() }), i.on("mouseout", e.Html.root, function () { t.start() }) }, unbind: function () { i.off(["mouseover", "mouseout"], e.Html.root) } }; return h(r, "time", { get: function () { var n = e.Html.slides[t.index].getAttribute("data-glide-autoplay"); return u(n || t.settings.autoplay) } }), n.on(["destroy", "update"], function () { r.unbind() }), n.on(["run.before", "pause", "destroy", "swipe.start", "update"], function () { r.stop() }), n.on(["run.after", "play", "swipe.end"], function () { r.start() }), n.on("update", function () { r.mount() }), n.on("destroy", function () { i.destroy() }), r }, Breakpoints: function (t, e, n) { var i = new S, r = t.settings, s = B(r.breakpoints), u = o({}, r), a = { match: function (t) { if (void 0 !== window.matchMedia) for (var e in t) if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e]; return u } }; return o(r, a.match(s)), i.on("resize", window, y(function () { t.settings = v(r, a.match(s)) }, t.settings.throttle)), n.on("update", function () { s = B(s), u = o({}, r) }), n.on("destroy", function () { i.off("resize", window) }), a } }; return function (t) { function e() { return i(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)) } return function (t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }(e, m), r(e, [{ key: "mount", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return function t(e, n, i) { null === e && (e = Function.prototype); var r = Object.getOwnPropertyDescriptor(e, n); if (void 0 === r) { var o = Object.getPrototypeOf(e); return null === o ? void 0 : t(o, n, i) } if ("value" in r) return r.value; var s = r.get; return void 0 !== s ? s.call(i) : void 0 }(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "mount", this).call(this, o({}, N, t)) } }]), e }() });