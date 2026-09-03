//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (e && (t = e(e = 0)), t), s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), c = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, l = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, u = (n, r, a) => (a = n == null ? {} : e(i(n)), l(r || !n || !n.__esModule ? t(a, "default", {
	value: n,
	enumerable: !0
}) : a, n)), d = (e) => a.call(e, "module.exports") ? e["module.exports"] : l(t({}, "__esModule", { value: !0 }), e), f = /* @__PURE__ */ function(e) {
	return e.CROP = "CROP", e.EVENT = "EVENT", e.TOOL = "TOOL", e.WATER = "WATER", e;
}({}), p = (e) => e.type === "WATER", m = (e) => e.type === "EVENT", h = (e) => e.type === "TOOL", g = /* @__PURE__ */ function(e) {
	return e.DANGEROUSLY_SET_CONTEXT = "DANGEROUSLY_SET_CONTEXT", e.HARVEST_CROP = "HARVEST_CROP", e.INIT = "INIT", e.OPERATION_ABORTED = "OPERATION_ABORTED", e.RESUME = "RESUME", e.PLAY_CARD = "PLAY_CARD", e.PLAY_CROP = "PLAY_CROP", e.PLAY_EVENT = "PLAY_EVENT", e.PLAY_TOOL = "PLAY_TOOL", e.PLAY_PLANTABLE_TOOL = "PLAY_PLANTABLE_TOOL", e.PLAY_WATER = "PLAY_WATER", e.DISCARD_CARD_FROM_FIELD = "DISCARD_CARD_FROM_FIELD", e.PLAYER_RAN_OUT_OF_FUNDS = "PLAYER_RAN_OUT_OF_FUNDS", e.PROMPT_BOT_FOR_SETUP_ACTION = "PROMPT_BOT_FOR_SETUP_ACTION", e.PROMPT_BOT_FOR_TURN_ACTION = "PROMPT_BOT_FOR_TURN_ACTION", e.PROMPT_PLAYER_FOR_CROP_TO_WATER = "PROMPT_PLAYER_FOR_CROP_TO_WATER", e.PROMPT_PLAYER_FOR_SETUP_ACTION = "PROMPT_PLAYER_FOR_SETUP_ACTION", e.PROMPT_PLAYER_FOR_TURN_ACTION = "PROMPT_PLAYER_FOR_TURN_ACTION", e.SELECT_CROP_TO_WATER = "SELECT_CROP_TO_WATER", e.SELECT_CARD_POSITION = "SELECT_CARD_POSITION", e.SET_SHELL = "SET_SHELL", e.START_TURN = "START_TURN", e.BOT_TURN_INITIALIZED = "BOT_TURN_INITIALIZED", e.BOT_TURN_PHASE_COMPLETE = "BOT_TURN_PHASE_COMPLETE", e;
}({}), _ = /* @__PURE__ */ function(e) {
	return e.INITIALIZING = "INITIALIZING", e.PLACING_CROP = "PLACING_CROP", e.PLAYING_CROPS = "PLAYING_CROPS", e.WATERING_CROPS = "WATERING_CROPS", e.WATERING_CROP = "WATERING_CROP", e.PLAYING_EVENTS = "PLAYING_EVENTS", e.PLAYING_TOOLS = "PLAYING_TOOLS", e.HARVESTING_CROPS = "HARVESTING_CROPS", e.HARVESTING_CROP = "HARVESTING_CROP", e.DONE = "DONE", e;
}({}), v = /* @__PURE__ */ function(e) {
	return e.UNINITIALIZED = "UNINITIALIZED", e.CHOOSING_CARD_POSITION = "CHOOSING_CARD_POSITION", e.GAME_OVER = "GAME_OVER", e.PERFORMING_BOT_SETUP_ACTION = "PERFORMING_BOT_SETUP_ACTION", e.PERFORMING_BOT_TURN_ACTION = "PERFORMING_BOT_TURN_ACTION", e.PLANTING_CARD = "PLANTING_CARD", e.PLAYER_WATERING_CROP = "PLAYER_WATERING_CROP", e.PLAYING_CARD = "PLAYING_CARD", e.PLAYING_EVENT = "PLAYING_EVENT", e.PLAYING_TOOL = "PLAYING_TOOL", e.WAITING_FOR_PLAYER_SETUP_ACTION = "WAITING_FOR_PLAYER_SETUP_ACTION", e.WAITING_FOR_PLAYER_TURN_ACTION = "WAITING_FOR_PLAYER_TURN_ACTION", e;
}({}), y = /* @__PURE__ */ function(e) {
	return e.IS_BOT_PHASE_PLAYING_EVENTS = "IS_BOT_PHASE_PLAYING_EVENTS", e.IS_BOT_PHASE_PLAYING_TOOLS = "IS_BOT_PHASE_PLAYING_TOOLS", e.IS_SELECTED_IDX_VALID = "IS_SELECTED_IDX_VALID", e.IS_SETUP_PHASE = "IS_SETUP_PHASE", e;
}({}), b = /* @__PURE__ */ function(e) {
	return e.CARDS_DRAWN = "CARDS_DRAWN", e.CROP_HARVESTED = "CROP_HARVESTED", e.CARD_DISCARDED = "CARD_DISCARDED", e.CROP_WATERED = "CROP_WATERED", e.EVENT_CARD_PLAYED = "EVENT_CARD_PLAYED", e.TOOL_CARD_PLAYED = "TOOL_CARD_PLAYED", e.ALL_CROPS_WATERED = "ALL_CROPS_WATERED", e;
}({}), x = [];
for (let e = 0; e < 256; ++e) x.push((e + 256).toString(16).slice(1));
function ee(e, t = 0) {
	return (x[e[t + 0]] + x[e[t + 1]] + x[e[t + 2]] + x[e[t + 3]] + "-" + x[e[t + 4]] + x[e[t + 5]] + "-" + x[e[t + 6]] + x[e[t + 7]] + "-" + x[e[t + 8]] + x[e[t + 9]] + "-" + x[e[t + 10]] + x[e[t + 11]] + x[e[t + 12]] + x[e[t + 13]] + x[e[t + 14]] + x[e[t + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/uuid/dist/rng.js
var te = new Uint8Array(16);
function ne() {
	return crypto.getRandomValues(te);
}
//#endregion
//#region node_modules/uuid/dist/v4.js
function S(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : re(e, t, n);
}
function re(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? ne();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return ee(r);
}
//#endregion
//#region src/game/cards/crops/baseToCrop.ts
var C = (e) => Object.freeze({
	type: f.CROP,
	...e
}), w = C({
	id: "carrot",
	name: "Carrot",
	waterToMature: 3
}), T = C({
	id: "corn",
	name: "Corn",
	waterToMature: 8
}), E = C({
	id: "garlic",
	name: "Garlic",
	waterToMature: 11
}), D = C({
	id: "pea",
	name: "Pea",
	waterToMature: 9
}), O = C({
	id: "potato",
	name: "Potato",
	waterToMature: 5
}), k = C({
	id: "pumpkin",
	name: "Pumpkin",
	waterToMature: 4
}), A = C({
	id: "tomato",
	name: "Tomato",
	waterToMature: 13
}), ie = /* @__PURE__ */ c({
	carrot: () => w,
	corn: () => T,
	garlic: () => E,
	pea: () => D,
	potato: () => O,
	pumpkin: () => k,
	tomato: () => A
}), ae = (e, t) => ({
	...e,
	...t
}), j = (e, t) => ae(e, { table: {
	...e.table,
	...t
} }), M = (e, t, n) => {
	let r = q.getPlayer(e, t);
	return e = j(e, { players: {
		...e.table.players,
		[t]: {
			...r,
			...n
		}
	} }), e;
}, N = (e, t, n) => {
	let { field: r } = q.getPlayer(e, t);
	return e = M(e, t, { field: {
		...r,
		...n
	} }), e;
}, P = Object.freeze({
	type: f.EVENT,
	id: "rain",
	name: "Rain",
	description: "Waters all unwatered, planted crops for **all** players.",
	applyEffect: (e) => {
		let { match: t } = e;
		for (let e in t.table.players) {
			let n = t.table.players[e];
			if (!n) continue;
			let r = n.field.cards.map((n) => !n || !K(n) || e === t.currentPlayerId && n.wasWateredDuringTurn ? n : {
				...n,
				wasWateredDuringTurn: !0,
				waterCards: n.waterCards + 1
			});
			t = N(t, e, { cards: r });
		}
		return e.shell.triggerNotification({
			type: b.ALL_CROPS_WATERED,
			payload: {}
		}), {
			...e,
			match: t
		};
	}
}), oe = /* @__PURE__ */ c({ rain: () => P }), se = /* @__PURE__ */ s(((e, t) => {
	(function(e, t, n) {
		function r(e) {
			var t = this, n = o();
			t.next = function() {
				var e = 2091639 * t.s0 + t.c * 23283064365386963e-26;
				return t.s0 = t.s1, t.s1 = t.s2, t.s2 = e - (t.c = e | 0);
			}, t.c = 1, t.s0 = n(" "), t.s1 = n(" "), t.s2 = n(" "), t.s0 -= n(e), t.s0 < 0 && (t.s0 += 1), t.s1 -= n(e), t.s1 < 0 && (t.s1 += 1), t.s2 -= n(e), t.s2 < 0 && (t.s2 += 1), n = null;
		}
		function i(e, t) {
			return t.c = e.c, t.s0 = e.s0, t.s1 = e.s1, t.s2 = e.s2, t;
		}
		function a(e, t) {
			var n = new r(e), a = t && t.state, o = n.next;
			return o.int32 = function() {
				return n.next() * 4294967296 | 0;
			}, o.double = function() {
				return o() + (o() * 2097152 | 0) * 11102230246251565e-32;
			}, o.quick = o, a && (typeof a == "object" && i(a, n), o.state = function() {
				return i(n, {});
			}), o;
		}
		function o() {
			var e = 4022871197;
			return function(t) {
				t = String(t);
				for (var n = 0; n < t.length; n++) {
					e += t.charCodeAt(n);
					var r = .02519603282416938 * e;
					e = r >>> 0, r -= e, r *= e, e = r >>> 0, r -= e, e += r * 4294967296;
				}
				return (e >>> 0) * 23283064365386963e-26;
			};
		}
		t && t.exports ? t.exports = a : n && n.amd ? n(function() {
			return a;
		}) : this.alea = a;
	})(e, typeof t == "object" && t, typeof define == "function" && define);
})), ce = /* @__PURE__ */ s(((e, t) => {
	(function(e, t, n) {
		function r(e) {
			var t = this, n = "";
			t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.next = function() {
				var e = t.x ^ t.x << 11;
				return t.x = t.y, t.y = t.z, t.z = t.w, t.w ^= t.w >>> 19 ^ e ^ e >>> 8;
			}, e === (e | 0) ? t.x = e : n += e;
			for (var r = 0; r < n.length + 64; r++) t.x ^= n.charCodeAt(r) | 0, t.next();
		}
		function i(e, t) {
			return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t;
		}
		function a(e, t) {
			var n = new r(e), a = t && t.state, o = function() {
				return (n.next() >>> 0) / 4294967296;
			};
			return o.double = function() {
				do
					var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
				while (e === 0);
				return e;
			}, o.int32 = n.next, o.quick = o, a && (typeof a == "object" && i(a, n), o.state = function() {
				return i(n, {});
			}), o;
		}
		t && t.exports ? t.exports = a : n && n.amd ? n(function() {
			return a;
		}) : this.xor128 = a;
	})(e, typeof t == "object" && t, typeof define == "function" && define);
})), le = /* @__PURE__ */ s(((e, t) => {
	(function(e, t, n) {
		function r(e) {
			var t = this, n = "";
			t.next = function() {
				var e = t.x ^ t.x >>> 2;
				return t.x = t.y, t.y = t.z, t.z = t.w, t.w = t.v, (t.d = t.d + 362437 | 0) + (t.v = t.v ^ t.v << 4 ^ (e ^ e << 1)) | 0;
			}, t.x = 0, t.y = 0, t.z = 0, t.w = 0, t.v = 0, e === (e | 0) ? t.x = e : n += e;
			for (var r = 0; r < n.length + 64; r++) t.x ^= n.charCodeAt(r) | 0, r == n.length && (t.d = t.x << 10 ^ t.x >>> 4), t.next();
		}
		function i(e, t) {
			return t.x = e.x, t.y = e.y, t.z = e.z, t.w = e.w, t.v = e.v, t.d = e.d, t;
		}
		function a(e, t) {
			var n = new r(e), a = t && t.state, o = function() {
				return (n.next() >>> 0) / 4294967296;
			};
			return o.double = function() {
				do
					var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
				while (e === 0);
				return e;
			}, o.int32 = n.next, o.quick = o, a && (typeof a == "object" && i(a, n), o.state = function() {
				return i(n, {});
			}), o;
		}
		t && t.exports ? t.exports = a : n && n.amd ? n(function() {
			return a;
		}) : this.xorwow = a;
	})(e, typeof t == "object" && t, typeof define == "function" && define);
})), ue = /* @__PURE__ */ s(((e, t) => {
	(function(e, t, n) {
		function r(e) {
			var t = this;
			t.next = function() {
				var e = t.x, n = t.i, r = e[n], i;
				return r ^= r >>> 7, i = r ^ r << 24, r = e[n + 1 & 7], i ^= r ^ r >>> 10, r = e[n + 3 & 7], i ^= r ^ r >>> 3, r = e[n + 4 & 7], i ^= r ^ r << 7, r = e[n + 7 & 7], r ^= r << 13, i ^= r ^ r << 9, e[n] = i, t.i = n + 1 & 7, i;
			};
			function n(e, t) {
				var n, r = [];
				if (t === (t | 0)) r[0] = t;
				else for (t = "" + t, n = 0; n < t.length; ++n) r[n & 7] = r[n & 7] << 15 ^ t.charCodeAt(n) + r[n + 1 & 7] << 13;
				for (; r.length < 8;) r.push(0);
				for (n = 0; n < 8 && r[n] === 0; ++n);
				for (n == 8 ? r[7] = -1 : r[n], e.x = r, e.i = 0, n = 256; n > 0; --n) e.next();
			}
			n(t, e);
		}
		function i(e, t) {
			return t.x = e.x.slice(), t.i = e.i, t;
		}
		function a(e, t) {
			e ??= +/* @__PURE__ */ new Date();
			var n = new r(e), a = t && t.state, o = function() {
				return (n.next() >>> 0) / 4294967296;
			};
			return o.double = function() {
				do
					var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
				while (e === 0);
				return e;
			}, o.int32 = n.next, o.quick = o, a && (a.x && i(a, n), o.state = function() {
				return i(n, {});
			}), o;
		}
		t && t.exports ? t.exports = a : n && n.amd ? n(function() {
			return a;
		}) : this.xorshift7 = a;
	})(e, typeof t == "object" && t, typeof define == "function" && define);
})), de = /* @__PURE__ */ s(((e, t) => {
	(function(e, t, n) {
		function r(e) {
			var t = this;
			t.next = function() {
				var e = t.w, n = t.X, r = t.i, i, a;
				return t.w = e = e + 1640531527 | 0, a = n[r + 34 & 127], i = n[r = r + 1 & 127], a ^= a << 13, i ^= i << 17, a ^= a >>> 15, i ^= i >>> 12, a = n[r] = a ^ i, t.i = r, a + (e ^ e >>> 16) | 0;
			};
			function n(e, t) {
				var n, r, i, a, o, s = [], c = 128;
				for (t === (t | 0) ? (r = t, t = null) : (t += "\0", r = 0, c = Math.max(c, t.length)), i = 0, a = -32; a < c; ++a) t && (r ^= t.charCodeAt((a + 32) % t.length)), a === 0 && (o = r), r ^= r << 10, r ^= r >>> 15, r ^= r << 4, r ^= r >>> 13, a >= 0 && (o = o + 1640531527 | 0, n = s[a & 127] ^= r + o, i = n == 0 ? i + 1 : 0);
				for (i >= 128 && (s[(t && t.length || 0) & 127] = -1), i = 127, a = 512; a > 0; --a) r = s[i + 34 & 127], n = s[i = i + 1 & 127], r ^= r << 13, n ^= n << 17, r ^= r >>> 15, n ^= n >>> 12, s[i] = r ^ n;
				e.w = o, e.X = s, e.i = i;
			}
			n(t, e);
		}
		function i(e, t) {
			return t.i = e.i, t.w = e.w, t.X = e.X.slice(), t;
		}
		function a(e, t) {
			e ??= +/* @__PURE__ */ new Date();
			var n = new r(e), a = t && t.state, o = function() {
				return (n.next() >>> 0) / 4294967296;
			};
			return o.double = function() {
				do
					var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
				while (e === 0);
				return e;
			}, o.int32 = n.next, o.quick = o, a && (a.X && i(a, n), o.state = function() {
				return i(n, {});
			}), o;
		}
		t && t.exports ? t.exports = a : n && n.amd ? n(function() {
			return a;
		}) : this.xor4096 = a;
	})(e, typeof t == "object" && t, typeof define == "function" && define);
})), fe = /* @__PURE__ */ s(((e, t) => {
	(function(e, t, n) {
		function r(e) {
			var t = this, n = "";
			t.next = function() {
				var e = t.b, n = t.c, r = t.d, i = t.a;
				return e = e << 25 ^ e >>> 7 ^ n, n = n - r | 0, r = r << 24 ^ r >>> 8 ^ i, i = i - e | 0, t.b = e = e << 20 ^ e >>> 12 ^ n, t.c = n = n - r | 0, t.d = r << 16 ^ n >>> 16 ^ i, t.a = i - e | 0;
			}, t.a = 0, t.b = 0, t.c = -1640531527, t.d = 1367130551, e === Math.floor(e) ? (t.a = e / 4294967296 | 0, t.b = e | 0) : n += e;
			for (var r = 0; r < n.length + 20; r++) t.b ^= n.charCodeAt(r) | 0, t.next();
		}
		function i(e, t) {
			return t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t;
		}
		function a(e, t) {
			var n = new r(e), a = t && t.state, o = function() {
				return (n.next() >>> 0) / 4294967296;
			};
			return o.double = function() {
				do
					var e = ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21);
				while (e === 0);
				return e;
			}, o.int32 = n.next, o.quick = o, a && (typeof a == "object" && i(a, n), o.state = function() {
				return i(n, {});
			}), o;
		}
		t && t.exports ? t.exports = a : n && n.amd ? n(function() {
			return a;
		}) : this.tychei = a;
	})(e, typeof t == "object" && t, typeof define == "function" && define);
})), pe = /* @__PURE__ */ s(((e, t) => {
	t.exports = {};
})), me = /* @__PURE__ */ s(((e, t) => {
	(function(e, n, r) {
		var i = 256, a = 6, o = 52, s = "random", c = r.pow(i, a), l = r.pow(2, o), u = l * 2, d = i - 1, f;
		function p(e, t, o) {
			var d = [];
			t = t == 1 ? { entropy: !0 } : t || {};
			var f = _(g(t.entropy ? [e, y(n)] : e ?? v(), 3), d), p = new m(d), b = function() {
				for (var e = p.g(a), t = c, n = 0; e < l;) e = (e + n) * i, t *= i, n = p.g(1);
				for (; e >= u;) e /= 2, t /= 2, n >>>= 1;
				return (e + n) / t;
			};
			return b.int32 = function() {
				return p.g(4) | 0;
			}, b.quick = function() {
				return p.g(4) / 4294967296;
			}, b.double = b, _(y(p.S), n), (t.pass || o || function(e, t, n, i) {
				return i && (i.S && h(i, p), e.state = function() {
					return h(p, {});
				}), n ? (r[s] = e, t) : e;
			})(b, f, "global" in t ? t.global : this == r, t.state);
		}
		function m(e) {
			var t, n = e.length, r = this, a = 0, o = r.i = r.j = 0, s = r.S = [];
			for (n || (e = [n++]); a < i;) s[a] = a++;
			for (a = 0; a < i; a++) s[a] = s[o = d & o + e[a % n] + (t = s[a])], s[o] = t;
			(r.g = function(e) {
				for (var t, n = 0, a = r.i, o = r.j, s = r.S; e--;) t = s[a = d & a + 1], n = n * i + s[d & (s[a] = s[o = d & o + t]) + (s[o] = t)];
				return r.i = a, r.j = o, n;
			})(i);
		}
		function h(e, t) {
			return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t;
		}
		function g(e, t) {
			var n = [], r = typeof e, i;
			if (t && r == "object") for (i in e) try {
				n.push(g(e[i], t - 1));
			} catch {}
			return n.length ? n : r == "string" ? e : e + "\0";
		}
		function _(e, t) {
			for (var n = e + "", r, i = 0; i < n.length;) t[d & i] = d & (r ^= t[d & i] * 19) + n.charCodeAt(i++);
			return y(t);
		}
		function v() {
			try {
				var t;
				return f && (t = f.randomBytes) ? t = t(i) : (t = new Uint8Array(i), (e.crypto || e.msCrypto).getRandomValues(t)), y(t);
			} catch {
				var r = e.navigator, a = r && r.plugins;
				return [
					+/* @__PURE__ */ new Date(),
					e,
					a,
					e.screen,
					y(n)
				];
			}
		}
		function y(e) {
			return String.fromCharCode.apply(0, e);
		}
		if (_(r.random(), n), typeof t == "object" && t.exports) {
			t.exports = p;
			try {
				f = pe();
			} catch {}
		} else typeof define == "function" && define.amd ? define(function() {
			return p;
		}) : r["seed" + s] = p;
	})(typeof self < "u" ? self : e, [], Math);
})), he = /* @__PURE__ */ u((/* @__PURE__ */ s(((e, t) => {
	var n = se(), r = ce(), i = le(), a = ue(), o = de(), s = fe(), c = me();
	c.alea = n, c.xor128 = r, c.xorwow = i, c.xorshift7 = a, c.xor4096 = o, c.tychei = s, t.exports = c;
})))()), F = new class {
	constructor(e) {
		this.rng = e ? (0, he.default)(e) : () => Math.random();
	}
	generate() {
		return this.rng();
	}
	shuffle(e) {
		let t = [...e];
		for (let e = t.length - 1; e > 0; e--) {
			let n = Math.floor(this.generate() * (e + 1)), r = t[e];
			t[e] = t[n], t[n] = r;
		}
		return t;
	}
	randomIndex(e) {
		if (e.length !== 0) return Math.floor(this.generate() * e.length);
	}
	chooseElement(e) {
		let t = this.randomIndex(e);
		if (t !== void 0) return e[t];
	}
	chooseIntegerBetween(e, t) {
		if (![e, t].every(Number.isInteger)) throw Error(`chooseInteger requires integers. Received: ${e} and ${t}`);
		let n = Math.min(e, t), r = Math.max(e, t);
		if (n === void 0 || r === void 0) throw TypeError(`chooseInteger requires two numbers. Received: ${e} and ${t}`);
		return Math.floor(this.generate() * (r - n + 1)) + n;
	}
}(typeof window > "u" ? null : new URLSearchParams(window.location.search).get("seed")), I = (e, t, n = 1) => {
	let r = q.getPlayer(e, t), i = [...r.hand], a = [...r.deck], o = [...r.discardPile], s = a.slice(0, n);
	return a = a.slice(n), i = [...i, ...s], a.length === 0 && (a = F.shuffle(o), o = []), e = M(e, t, {
		deck: a,
		hand: i,
		discardPile: o
	}), e;
}, ge = class extends Error {
	constructor(e) {
		super(`[PlayerOutOfFundsError] Player ${e} is out of funds.`), this.playerId = e;
	}
}, L = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[MatchStateCorruptError] ${e}`;
	}
}, _e = class extends Error {
	constructor(e) {
		super(`[GameStateCorruptError] ${e}`);
	}
}, ve = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[FieldFullError] Player ${e} has no room in the field.`;
	}
}, R = class extends Error {
	constructor(e, t) {
		super(...arguments), this.message = `[InvalidCardIndexError] Card index ${e} is out of bounds for player ${t}.`;
	}
}, ye = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[InvalidCardError] ${e}`;
	}
}, be = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[PlayerNotFoundError] Player ${e} not found.`;
	}
}, xe = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[UnimplementedError] ${e}`;
	}
};
//#endregion
//#region src/game/types/assertions/index.ts
function z(e, t = `${String(e)} is null or undefined`) {
	if (e == null) throw TypeError(t);
}
function Se(e) {
	if (!(e in H)) throw new L(`${e} is not a valid tool card ID`);
}
function Ce(e) {
	if (!m(e)) throw new L(`${e.id} is not an event card`);
}
function we(e) {
	if (!h(e)) throw new L(`${e.id} is not a tool card`);
}
function Te(e) {
	if (!(e in v)) throw TypeError(`${e} is not a MatchState`);
}
function Ee(e) {
	if (Be(e)) throw TypeError("stateValue is not a string");
	if (!(e in _)) throw TypeError(`${e} is not a BotTurnActionState`);
}
function De(e) {
	if (!K(e)) throw TypeError(`${JSON.stringify(e)} is not IPlayedCrop`);
}
//#endregion
//#region src/game/cards/tools/shovel.ts
var B = Object.freeze({
	type: f.TOOL,
	id: "shovel",
	name: "Shovel",
	description: "Draw two cards from the deck. If played, skip the card draw at the start of the next turn.",
	applyEffect: (e) => {
		let { match: t } = e, { currentPlayerId: n } = t;
		return z(n), t = I(t, n, 2), e.shell.triggerNotification({
			type: b.CARDS_DRAWN,
			payload: {
				howMany: 2,
				playerId: n
			}
		}), {
			...e,
			match: t
		};
	},
	onStartFollowingTurn: (e) => ({
		...e,
		match: {
			...e.match,
			cardsToDrawAtTurnStart: 0
		}
	})
}), Oe = (e, t, n, r) => {
	let { cards: i } = q.getPlayer(e, t).field, a = i[n];
	if (!a) throw RangeError(`cropIdx ${n} references a crop that is not in the field.`);
	De(a);
	let o = [
		...i.slice(0, n),
		{
			...a,
			...r
		},
		...i.slice(n + 1)
	];
	return e = N(e, t, { cards: o }), e;
}, V = Object.freeze({
	type: f.TOOL,
	id: "sprinkler",
	name: "Sprinkler",
	description: "Waters adjacent crop cards at the start of the owners turn when planted in the Field.",
	isPlantable: !0,
	applyDailyEffect: (e, t) => {
		let { match: { currentPlayerId: n } } = e, { match: r } = e;
		z(n);
		let i = r.table.players[n];
		z(i);
		let a = t - 1, o = t + 1, s = i.field.cards[a], c = i.field.cards[o];
		for (let { maybeCard: e, idx: t } of [{
			maybeCard: s,
			idx: a
		}, {
			maybeCard: c,
			idx: o
		}]) !K(e) || e.wasWateredDuringTurn || (r = Oe(r, n, t, {
			wasWateredDuringTurn: !0,
			waterCards: e.waterCards + 1
		}));
		return e = {
			...e,
			match: r
		}, e;
	}
}), H = /* @__PURE__ */ c({
	shovel: () => B,
	sprinkler: () => V
}), U = Object.freeze({
	type: f.WATER,
	id: "water",
	name: "Water"
}), ke = /* @__PURE__ */ c({ water: () => U }), Ae = /* @__PURE__ */ c({
	allCards: () => Me,
	carrot: () => w,
	corn: () => T,
	cropCards: () => ie,
	eventCards: () => oe,
	garlic: () => E,
	instantiate: () => je,
	pea: () => D,
	potato: () => O,
	pumpkin: () => k,
	rain: () => P,
	shovel: () => B,
	sprinkler: () => V,
	tomato: () => A,
	toolCards: () => H,
	water: () => U,
	waterCards: () => ke
}), je = (e) => ({
	...e,
	instanceId: S()
}), Me = Object.fromEntries(Object.values({
	...ie,
	...oe,
	...H,
	...ke
}).map((e) => [e.id, e])), W = (e) => typeof e == "object" && !!e, Ne = (e) => W(e) ? "id" in e && typeof e.id == "string" && "type" in e && typeof e.type == "string" && e.type in f && "instanceId" in e && typeof e.instanceId == "string" : !1, Pe = (e) => W(e) ? "id" in e && typeof e.id == "string" && "type" in e && e.type === f.CROP : !1, G = (e) => e.type === f.CROP, Fe = (e) => e.type === f.TOOL && e.isPlantable ? !0 : G(e), K = (e) => {
	if (!W(e)) return !1;
	let t = e;
	return "instance" in t && Ne(t.instance) && G(t.instance) && "waterCards" in t && typeof t.waterCards == "number" && "wasWateredDuringTurn" in t && typeof t.wasWateredDuringTurn == "boolean";
}, Ie = (e) => {
	if (!W(e)) return !1;
	let t = e;
	return "instance" in t && Ne(t.instance) && h(t.instance);
}, Le = (e) => K(e) || Ie(e), Re = (e) => e in Ae, ze = (e) => W(e) && "id" in e && typeof e.id == "string" && Re(e.id) && "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && e.type in f, Be = (e) => W(e), q = new class {
	constructor() {
		this.getCardInstanceFromHand = (e, t, n) => {
			let { hand: r } = this.getPlayer(e, t), i = r[n];
			if (!i) throw Error(`Card index ${n} is not in player ${t}'s hand`);
			return i;
		}, this.getPlayedCardFromField = (e, t, n) => {
			let { cards: r } = this.getPlayer(e, t).field, i = r[n];
			if (!i) throw new R(n, t);
			return i;
		}, this.getOpponentPlayerIds = (e) => Object.keys(e.table.players).filter((t) => t !== e.sessionOwnerPlayerId), this.getPlayer = (e, t) => {
			let n = e.table.players[t];
			if (!n) throw new be(t);
			return n;
		}, this.findCropIndexesInDeck = (e, t, n = 1) => {
			let { deck: r } = this.getPlayer(e, t), i = [];
			for (let e = 0; e < n && e <= r.length - 1 && i.length < n; e++) {
				let t = r[e];
				t && G(t) && (i = [...i, e]);
			}
			return i;
		}, this.findCropIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (G(t) && (e = [...e, n]), e), []), this.findWaterIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (p(t) && (e = [...e, n]), e), []), this.findEventIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (m(t) && (e = [...e, n]), e), []), this.findToolIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (h(t) && (e = [...e, n]), e), []), this.playerIds = (e) => Object.keys(e.table.players).sort(), this.nextPlayerIndex = (e) => {
			let { currentPlayerId: t } = e;
			z(t);
			let n = Object.keys(e.table.players).sort();
			return (n.indexOf(t) + 1) % n.length;
		}, this.fullPlots = (e, t) => {
			let { field: n } = q.getPlayer(e, t), { cards: r } = n;
			return r.filter((e) => !!e);
		};
	}
	getCropFromHand(e, t, n) {
		let r = this.getCardInstanceFromHand(e, t, n);
		if (!Pe(r)) throw new ye(`${r.id} is not a crop card.`);
		return r;
	}
}(), Ve = (e, t, n) => {
	let r = q.getPlayer(e, t), i = [...r.hand], a = [...r.deck], o = [...r.discardPile];
	if (n >= a.length) throw new R(n, t);
	let [s] = a.slice(n, n + 1);
	if (!s) throw new R(n, t);
	return a = [...a.slice(0, n), ...a.slice(n + 1)], i = [...i, s], a.length === 0 && (a = F.shuffle(o), o = []), e = M(e, t, {
		deck: a,
		hand: i,
		discardPile: o
	}), e;
}, He = (e, t) => {
	let n = q.getPlayer(e, t), r = q.findCropIndexesInDeck(e, t, n.deck.length), i = F.chooseElement(r);
	if (i === void 0) throw new L("Could not select a crop card for starting hand: No crop cards available in deck.");
	e = Ve(e, t, i);
	let a = q.getPlayer(e, t);
	return e = M(e, t, { hand: F.shuffle(a.hand) }), e = I(e, t, 6), e;
}, Ue = (e, t) => {
	let { deck: n } = q.getPlayer(e, t);
	return M(e, t, { deck: F.shuffle(n) });
}, We = new class {
	constructor() {
		this.playerSeed = (e) => {
			let { deck: t, id: n } = e;
			if (t.length !== 60) throw new L(`Deck for player ${n} contains ${t.length} cards but must contain 60 cards instead`);
			if (!t.every(ze)) throw new L(`Deck for player ${n} contain invalid cards`);
			if (!t.some(G)) throw new L(`Deck for player ${n} does not contain any crops`);
			return !0;
		};
	}
}(), Ge = new class {
	buildField(e = {}) {
		return {
			cards: [],
			...e
		};
	}
	buildPlayer(e = {}) {
		return {
			id: S(),
			funds: 50,
			deck: [],
			hand: [],
			discardPile: [],
			field: this.buildField(e?.field),
			cardsPlayedDuringTurn: [],
			...e
		};
	}
	buildTable(e = {}) {
		return {
			players: {},
			communityFund: 100,
			...e
		};
	}
	buildMatch(e = {}, t = S()) {
		let n = this.buildTable(e?.table), { players: r } = n, [i = null] = Object.keys(r), a = {
			sessionOwnerPlayerId: t,
			table: n,
			turn: 0,
			currentPlayerId: i,
			buffedCrop: null,
			nerfedCrop: null,
			cardsToDrawAtTurnStart: 0,
			eventCardsThatCanBePlayed: 0,
			winner: null,
			...e,
			selectedWaterCardInHandIdx: e.selectedWaterCardInHandIdx ?? -1
		};
		return Object.keys(r).length === 0 && (a = j(a, { players: {
			...a.table.players,
			[t]: this.buildPlayer({ id: t })
		} })), a;
	}
	buildMatchForSession(e, t = e[0]?.id) {
		let n = this.buildMatch({}, t);
		for (let t of e) {
			We.playerSeed(t);
			let r = this.buildPlayer({
				...t,
				funds: Math.floor(n.table.communityFund / e.length)
			});
			n = j(n, { players: {
				...n.table.players,
				[r.id]: r
			} }), n = Ue(n, r.id), n = He(n, r.id);
		}
		return n = j(n, { communityFund: n.table.communityFund % e.length }), n = ae(n, { currentPlayerId: n.sessionOwnerPlayerId }), n;
	}
	buildPlayedCrop(e) {
		return {
			instance: e,
			wasWateredDuringTurn: !1,
			waterCards: 0
		};
	}
	buildPlayedTool(e) {
		return { instance: e };
	}
}(), Ke = [
	[w, 4],
	[k, 4],
	[O, 4],
	[T, 4],
	[D, 4],
	[E, 4],
	[A, 4]
], qe = 4, Je = 4, Ye = 4, Xe = Ke.length + 3, J = 60 - Xe * 4;
J <= 0 && console.warn(`starterDeck: WATER_COUNT computed as ${J}. DECK_SIZE (60) may be too small for NON_WATER_CARD_TYPE_COUNT (${Xe}) at MAX_INSTANCES_PER_CARD (4) copies each.`);
var Y = (e, t) => Array.from({ length: t }, () => je(e)), X = (e, t) => {
	let n = Math.min(e.length, t.length);
	return [
		...Array.from({ length: n }, (n, r) => [e[r], t[r]]).flat(),
		...e.slice(n),
		...t.slice(n)
	];
}, Z = () => {
	let e = Ke.flatMap(([e, t]) => Y(e, t)), t = Y(U, J), n = Y(P, qe), r = Y(V, Je), i = Y(B, Ye);
	return [...X(e, t), ...X(X(n, r), i)];
}, Ze = {
	cropCardIndicesToHarvest: [],
	cropsToPlayDuringTurn: 0,
	fieldCropIndicesToWaterDuringTurn: [],
	toolCardsThatCanBePlayed: 0
}, Qe = ({ sessionOwnerPlayerId: e, opponentPlayerId: t, losingPlayerId: n }) => {
	if (n !== e && n !== t) throw Error("losingPlayerId must equal sessionOwnerPlayerId or opponentPlayerId");
	let r = Ge.buildMatchForSession([{
		id: e,
		deck: Z()
	}, {
		id: t,
		deck: Z()
	}], e);
	return r = {
		...r,
		cardsToDrawAtTurnStart: 1,
		eventCardsThatCanBePlayed: 1
	}, r = M(r, n, { funds: 4 }), {
		match: r,
		botState: Ze
	};
}, Q = (e) => ({
	id: e.id,
	instanceId: e.instanceId
}), $ = (e) => {
	let t = Me[e.id];
	if (!t) throw new _e(`Card with ID "${e.id}" not found in card definitions.`);
	return {
		...t,
		instanceId: e.instanceId
	};
}, $e = (e) => {
	if (e) return {
		...e,
		instance: Q(e.instance)
	};
}, et = (e) => {
	if (e) return {
		...e,
		instance: $(e.instance)
	};
}, tt = (e) => ({
	...e,
	deck: e.deck.map(Q),
	hand: e.hand.map(Q),
	discardPile: e.discardPile.map(Q),
	cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(Q),
	field: { cards: e.field.cards.map($e) }
}), nt = (e) => ({
	...e,
	deck: e.deck.map($),
	hand: e.hand.map($),
	discardPile: e.discardPile.map($),
	cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map($),
	field: { cards: e.field.cards.map(et) }
}), rt = (e) => ({
	...e,
	table: {
		...e.table,
		players: Object.fromEntries(Object.entries(e.table.players).map(([e, t]) => [e, tt(t)]))
	}
}), it = (e) => ({
	...e,
	table: {
		...e.table,
		players: Object.fromEntries(Object.entries(e.table.players).map(([e, t]) => [e, nt(t)]))
	}
});
//#endregion
export { xe as A, g as B, Te as C, R as D, ye as E, j as F, h as G, y as H, ae as I, o as J, p as K, ie as L, F as M, N, L as O, M as P, _ as R, Ee as S, _e as T, b as U, v as V, m as W, d as X, c as Y, u as Z, Ce as _, Z as a, Se as b, Pe as c, Le as d, K as f, Oe as g, H as h, Ze as i, I as j, ge as k, G as l, Be as m, rt as n, Ge as o, Ie as p, s as q, Qe as r, q as s, it as t, Fe as u, z as v, ve as w, we as x, De as y, f as z };
