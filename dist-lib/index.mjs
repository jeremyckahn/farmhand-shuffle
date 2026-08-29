import { KeyboardArrowDown as e } from "@mui/icons-material";
import t from "@mui/material/Button";
import n from "@mui/material/Container";
import r from "@mui/material/Dialog";
import i from "@mui/material/DialogActions";
import a from "@mui/material/DialogContent";
import o from "@mui/material/DialogTitle";
import s from "@mui/material/Fab";
import c from "@mui/material/styles/useTheme";
import l from "@mui/material/Tooltip";
import u from "@mui/material/Box";
import d from "@mui/material/Grid";
import f from "@mui/material/useMediaQuery";
import * as p from "react";
import m, { Children as h, Component as g, Fragment as _, createContext as v, createElement as y, forwardRef as b, isValidElement as x, useCallback as S, useContext as C, useEffect as w, useId as T, useInsertionEffect as E, useLayoutEffect as D, useMemo as O, useRef as k, useState as A } from "react";
import { Box as ee, Grid as te, Typography as ne, darken as re, lighten as j, useTheme as ie } from "@mui/material";
import { Fragment as ae, jsx as M, jsxs as N } from "react/jsx-runtime";
import oe from "@mui/material/Divider";
import se from "@mui/material/Paper";
import { darken as ce, lighten as le, styled as ue } from "@mui/material/styles";
import de from "@mui/material/Typography";
import "@emotion/styled";
import { keyframes as fe } from "@emotion/react";
import pe from "@mui/icons-material/AccountBalance";
import me from "@mui/icons-material/AttachMoney";
import he from "@mui/icons-material/KeyboardArrowDown";
import ge from "@mui/icons-material/KeyboardArrowUp";
import _e from "@mui/material/Accordion";
import ve from "@mui/material/AccordionActions";
import ye from "@mui/material/AccordionSummary";
import be from "@mui/material/Chip";
import xe from "@mui/material/Stack";
import "@mui/material/Alert";
import "@mui/material/Slide";
import "@mui/material/Snackbar";
//#region \0rolldown/runtime.js
var Se = Object.create, Ce = Object.defineProperty, we = Object.getOwnPropertyDescriptor, Te = Object.getOwnPropertyNames, Ee = Object.getPrototypeOf, De = Object.prototype.hasOwnProperty, Oe = (e, t) => () => (e && (t = e(e = 0)), t), P = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), ke = (e, t) => {
	let n = {};
	for (var r in e) Ce(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ce(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ae = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = Te(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !De.call(e, s) && s !== n && Ce(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = we(t, s)) || r.enumerable
	});
	return e;
}, je = (e, t, n) => (n = e == null ? {} : Se(Ee(e)), Ae(t || !e || !e.__esModule ? Ce(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Me = (e) => De.call(e, "module.exports") ? e["module.exports"] : Ae(Ce({}, "__esModule", { value: !0 }), e), Ne = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), Pe = /* @__PURE__ */ "Aardvark.Albatross.Alligator.Alpaca.Angelfish.Anglerfish.Ant.Anteater.Antelope.Antlion.Ape.Armadillo.Asp.Baboon.Badger.Bandicoot.Barnacle.Barracuda.Basilisk.Bass.Bat.Bear.Beaver.Bee.Beetle.Bird.Bison.Blackbird.Boar.Bobcat.Bonobo.Bug.Butterfly.Buzzard.Camel.Capybara.Cardinal.Caribou.Cat.Caterpillar.Catfish.Cattle.Chameleon.Cheetah.Chickadee.Chicken.Chimpanzee.Chinchilla.Chipmunk.Clam.Clownfish.Cobra.Condor.Coral.Cougar.Coyote.Crab.Crane.Crawdad.Crayfish.Cricket.Crocodile.Crow.Cuckoo.Deer.Dingo.Dinosaur.Dog.Dolphin.Donkey.Dove.Dragon.Dragonfly.Duck.Eagle.Earthworm.Echidna.Egret.Elephant.Elk.Emu.Ermine.Falcon.Ferret.Finch.Firefly.Fish.Flamingo.Fowl.Fox.Frog.Gazelle.Gecko.Gerbil.Gibbon.Giraffe.Goat.Goldfish.Goose.Gopher.Gorilla.Grasshopper.Grouse.Gull.Guppy.Hamster.Hare.Harrier.Hawk.Hedgehog.Heron.Hippopotamus.Horse.Hummingbird.Hyena.Iguana.Impala.Jackal.Jaguar.Jay.Jellyfish.Kangaroo.Kingfisher.Kiwi.Koala.Koi.Ladybug.Lark.Lemming.Lemur.Leopard.Lion.Llama.Lobster.Loon.Lynx.Macaw.Mackerel.Mammal.Manatee.Mandrill.Marlin.Marmoset.Marmot.Marsupial.Mastodon.Meerkat.Mink.Minnow.Mockingbird.Mole.Mongoose.Monkey.Moose.Mosquito.Mouse.Mule.Muskox.Narwhal.Ocelot.Octopus.Opossum.Orangutan.Orca.Ostrich.Otter.Owl.Ox.Panda.Panther.Parakeet.Parrot.Partridge.Peacock.Pelican.Penguin.Pig.Pigeon.Platypus.Pony.Porcupine.Porpoise.Puffin.Puma.Python.Quail.Quokka.Rabbit.Raccoon.Raven.Reindeer.Rhinoceros.Roadrunner.Rooster.Salamander.Salmon.Seahorse.Shark.Sheep.Shrew.Sloth.Snail.Sparrow.Squid.Squirrel.Starfish.Stingray.Stoat.Stork.Sturgeon.Swan.Swift.Swordfish.Tapir.Tarsier.Tern.Tiger.Tortoise.Toucan.Turkey.Turtle.Tyrannosaurus.Vole.Wallaby.Walrus.Warbler.Whale.Wildcat.Wolf.Wolverine.Wombat.Woodpecker.Wren.Yak.Zebra".split("."), Fe = /* @__PURE__ */ "Adorable.Adventurous.Agreeable.Alert.Amused.Attractive.Average.Beautiful.Blushing.Brainy.Brave.Bright.Busy.Calm.Careful.Cautious.Charming.Cheerful.Clever.Cloudy.Colorful.Comfortable.Concerned.Cooperative.Courageous.Crazy.Curious.Cute.Delightful.Determined.Distinct.Dizzy.Elated.Elegant.Enchanting.Encouraging.Energetic.Enthusiastic.Excited.Exuberant.Famous.Fancy.Fantastic.Fierce.Fine.Friendly.Funny.Gentle.Gifted.Glamorous.Gleaming.Glorious.Gorgeous.Graceful.Handsome.Happy.Healthy.Helpful.Hilarious.Important.Inquisitive.Jolly.Joyous.Kind.Light.Lively.Lovely.Lucky.Magnificent.Mysterious.Nice.Nutty.Outrageous.Outstanding.Perfect.Pleasant.Poised.Powerful.Precious.Proud.Puzzled.Quaint.Relieved.Shiny.Silly.Sleepy.Smiling.Sparkling.Splendid.Stormy.Strange.Successful.Tame.Thankful.Thoughtful.Tough.Victorious.Vivacious.Wandering.Wide-eyed.Wild.Witty.Zany".split("."), Ie = function(e) {
	return e.split("").reduce(function(e, t, n) {
		return e + t.charCodeAt(0) * n;
	}, 0);
}, Le = function(e, t) {
	var n = t === void 0 ? {} : t, r = n.adjectives, i = r === void 0 ? Fe : r, a = n.animalNames, o = a === void 0 ? Pe : a, s = Ie(e), c = i[s % i.length], l = o[(s + Ie(c)) % o.length];
	return c + " " + l;
}, Re = (e) => Array.isArray(e), ze = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVRIie2UMQ7DIAxFTVUJZcnIBTggU0+RKQfMBTJmQUx0aEDY2FSkdMvbwMn//o4VgJshrFOEdYr/N+m57xalKYaloqKd4o9uk4TzqnrmcqJW5+lOEH92m3BnmqZALJyU86+rDeFEK0E8Fp0Ps/PYyHklzrwwbnWADAAA5lfAJkSMQ9qiLL7tIV9Sw9OsuTmSO+p+2wNYU4zrk0QhAyEJl6Dq3hqNkiCS8JU1TcLWaJRANGGgBdQ9Fc0f+ft6Z8QEzMy7hLkX4rFo1PkvwokqgTV6iLBEhPL3cAMAb8x5cUBYehurAAAAAElFTkSuQmCC", Be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSInVlDFrwkAYhh+lKB2CToVupW5C6VgQOrl07OoiCrp37WKhS/5CQUERxNVR/0CgowhxUtwEJyWDxKHpkNxpktNYLYV+S+AueZ/3e7/cwX+v2C9oOIf04ueKr6cVlsMc62klCDsb4CyHOWzLhLmBbZlKyKkAZzGrA7BJleE6txdycZLzPrBqwtwg4UE0LYttmW5HO/VTgLOeVrAtk6SWxQaSWhZWTWwPlFg1fR/Iqd89u22Nenv/LGcxq4cEAJgbbkxA+t7w6caFeKmYoavXJEjlPLFquo6Fc7YzSGrZkLgEiBqMOyqIs+wjY7HiD248XtYJbxaXt42QeAiggDjraUU6tC0T7etTwkQn6SeU4hAxZOEcAs+5IYeavqnuFVd24CvPuXAqn976VYS4BIx6xFrtSWhzN2vbMtmkyrKDfZkH62BEu4PNv1QBA8/QUeKRAJF1/q1BV69t13UovL47B87McYDHDwCDrl5jMO749rp6jQLREN9JLhUzcqPVniiFg9VqTw6dfnUHrfaEUjGjFA/+DFEdHH3ZCeFjct8t38viighGdYqwEhAEnSP8Z/UN/uTZrzroGIUAAAAASUVORK5CYII=", Ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVRIS82VvQ3CQAyFnRUoGIGWgoYSMQUVJQswBwtQUjEFoqShoGUEClYAOZLRi3P+OaRISRUS8z4/2+c0NPDVDKxP4wIsF5PP7f6uSiodzOLn4542uwPVQMYH4KGocZFyIOXBictC0oDL9UGv54mms23LWa/mqV6EAM6exflCQBbiAlC8BMhATIDUXUoi2WsX/NvrRxFgiUuTayA9gBYvlUYDJKbkpAPIiFsuLMgPgLMudbcaGz1HJy2gVjxygae9A8DMvSw9gC6V6yAqhU5I4nsO/imTNUl6GfamiAN470eNts4C/x+/F+ZBExBuUDzVerNqYXkf7iIUsu69L1y4TTMAL+YLkFzsGSkFyYQAAAAASUVORK5CYIIA", He = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbVJREFUSIntlMtKw0AUhr/YokRqkSAGurAUgiLSraZvkT5BnsGlO3d5jj5B8wKum7qTrlqE0o0QkFm0xWys40InTm3Sm7gQ/GFIzgx855x/LvAXZNdMAFmtlwD4/KbxVlIQNfzAkYA8udhHj40fFC79wJmb6HcFUSjwA4fWzSPVesnYOkG1XmLUm0oAP3Dod0W6FoWC08uyMbgf85MOMA8KJJOZVLHrWZxdWQBpBzvbgMtHRQCZTGbS9SyuW+e4nkUUfnXhBw6j3lQWNwErW8bPr7jeR6WNpk3ldJ9G004TqL2wa+b6HSi4Hzi4nkWjadNo2nTaMU+DFzrtGPiwRtkUDxPW6kCH97sirVp10GnHRKHAPCgYyWQm9Q1f2cF3uK6nwctcnExmWJVdIwoFVmXXAJafoqzKATrteO4/CgXlo6Ixfn5dYOQmWGaL7vnZlUXr5jGXlWnRurYoeLVeyi00b2GlLTp81Jvm8RcT2DWTeJhIdRSX2bIKDhkWxcNk4RHLs2UVPDMBkFqjLhFsZouuzIumX/9tbNFVyJi7hTcOj/dSeBQKHu7ExvA8ye/j8/X81+/oHfIfC2frtx3xAAAAAElFTkSuQmCC", Ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVRIie2UsRWAIAxET58jULuJm1m6mZtQuwMWyhNjOAgWNl6FIP8IpwF+fa2ucV+oZVkNAgCsy/HgN2B0x3iadZ7FIERwVGqQM+mtcL9dkyk8p5oKHidnklWUKqiCp1VJMYOwLvfNcszAJQP15KPTM2BZaBmY7jzVm6+oWdRA3jG789yPZq5ACz0HB4CBwWR4WpgMzhaKQZ9gCi8tqo2tFmx5Sbbm1hb/6yPtXRM6Z/YOWwgAAAAASUVORK5CYII=", We = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAu0lEQVRIie1UuxGDMAyVOUomYA52yRzpU9IzR3bJHExArzQg54S+puIur0On97GFBXB3lAYOZvhZA5wfE3283h9Xo2sVj6JPM4CSAwRuIHMCjtD1SidAoaaJub3cAPEpMBZRyOolk+IRWlCWqi3OYN3yohrnMKD06wYwDj6Z18ah1nYt/DUwk3FDLmjhym8awt/guoE2TG34HOJDi5I1Q/ehZcUtDl9i6rrYU9VGu0/cRcSVqecwwb6b4wsIwjy5qWuN/wAAAABJRU5ErkJggg==", Ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPlJREFUSInlVbENgzAQPCJLVJ6ABtGlSpMJWIANskeKVBTZIxt4ASagSUUXpWECqkhIThHkfJwHbBAoUk5y43/u/t7mDfwdolRqn/zNkuTeAlMQuCT1VV4XjdP3Q9AduVlRKs0eifWirwINAFEqoe7NRyCLJQCY/SyWqAuT88XHnYEuE56cElOUyWuBcWML6C6RJaKgTnaHoxGyRaiAIR+DLX69nHtFJl/TIRGKVf8D5xaNYX97cy/uYPVRMbtNtD0A40CFYp6CBW5U6NNWIHu03mR29QB/BkFetV5OVChYcnaDQAPAkBsVCuSVibFcLvN87BWb/Sb8Np74sVisxYmO1AAAAABJRU5ErkJggg==", Ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0klEQVRIie1UwRGEMAgkV8JVYAOWRjWUZgNWYAvxYzJkDwg697vbGWeMJLuyQIj+mKAEsZrc90igikhfMPNjkVdEfhHTta7G3inwr5C8WILOWROYQQGSASLSH0pmZFnUyQhqYcVnAqkiNxzLSu99G77NGiBsUy1yLGt/vyPiWoTQpFqMKLbLEzAtikQ8hHNgoYmgTVmBkBxFGpjZtSldAw+KXIt0IavyqSwaOcG0Y+zWHDjkH2d0zLMovDKivsfY7MJyU/f2YyxzI5qpfxtDZ/wWThNOcCnuawEeAAAAAElFTkSuQmCC", qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANtJREFUSEu1lNkRwyAMRO1OKCQdpBFKopF0kELohIycwYOFWB0e82cD+1YX+/bw2h/W38KAnHPj5kopk14IIIl3GIe4AVy81npop5TOgEbIBEChI+cEkiAXABKwNIMEOQEedwg2QihVB8DinLtbQcIAErRCxo66RKAJaPvSXLgA1tzTud6qU5G9Ll1zYCm21q7qJEch0jtEZqZJfn1a+77/7UuLf0v/pDP9vvgWRSCr1Jkfu2gkELCKBKWE76kRIDFUJ1gDns8O8Th3AbTeR/tqiu6Ii3NwV5Df/wGYQa4ZirxeRgAAAABJRU5ErkJgggAA", Je = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALJJREFUSInV1cENgzAMBdDfqovQOToT5zBBOXeL7MEcMIp7akWM3Vi2OdRHK37fKAKAk+uS5JDmRgMIAKZSmuZznr/2LYJzeN023Ieh6V0zcak8ASrOt/cGmHHAf8k0lSLi+wsGAk/Q2zwSQMsI1FoPON/eE0DLeABVXGxY8Mermf28xaJlDdDwblkOunHL4RDeGwjjv4ZScG0wDZeGU3EOpON75BQcYJ+KbJwX/3H/R70B5PVOSsiwgM8AAAAASUVORK5CYII=", Ye = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVRIie1VQQqAMAzLxO/5AP+y4/7iA3zgPDikbG1XrYKIAWFsWRLSgcCPNyOXz8UL0qWUEgAgxujiDb14RYBLeIhrkJI1AlVC7cxsIAnBKm4xaEwoeuKAYQZenKqIg6eipv913tfTYp+DVBE7XAq6pzzl/gyUdIEzbkjKWa44mVZE9zWt8aK5mff4M/0Nbof1J/QhbIFgQxZVKNMbAAAAAElFTkSuQmCC", Xe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVRoge2UoRGAMBAECZYS8HRDw5QSnxKig88gfgaxl59befPi12wZzz22idr6dp3HPEvu5UtgJXb6gb9YgCaPQG3980B9d4VoLECTU0ClMJHdFaKxAE0eAcXCRHZXiMYCNDkFVAoT2V0hGgvQ5BFQLExkd4VoLECTU0ClMJHdFaKxAE0eAcXCRHZXiMYCNMsLvBG5ypkvoIETAAAAAElFTkSuQmCC", Ze = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACA0lEQVRYR6WXwWrEMAxEHViWQr+vp576ab332F8rlKWQ4lCHeKLnkdNclk1iWRqPZpTl47WsX49Snu+ltN+n+618P35K+3XP9f3yd1Gc9rzFPf5fakL1hm6qQa8mpUVGSVQw2rUnFCXlFjcEtGJNnoqJ3ls+325rPR69skHd8VIcKmJDKLu5InaqwtygfY5I7wjRWRPRqUIiNL2vCG8IUZfQ2btkXFKj7jtxSInquo1OiSTDcbVDiCpzxL2KcKRHO0IaVJGiFv9vsopY12UOTkqSkqIiSYTr/sv7S1mrUuqZO+I6RHV9llMhh5wuOSSVi474nQ41hLIVkTg6iaAiNPnOyxRWJwGuu2ZpsHGouT0tniWmG2HoJNo+HYecV7n5iHTMjTahl9FmmmT2WLOcUVoMEcoOZWQvxMHRUHByexrKiMCuO0dGWtdq0UOEssfodIsaJhJfnIdIqd3mkWEekaDn7f6leciNpU4qRkmh28+2MHUVEZukIPQyNxeRFMwacqR7nXWMztopueMctbomFc5DjrhkD7NdGSWJX66kyKRTxInMp09NrPMyt4mbZ2YRHSF8cntqWWcDVFS2+0K3J3twycwSegqhkfEdn7nJMRsnnBiJwGSMo6+GYyLZwf64Zv/qcHOPSyKbvIsT6pALTpxxOuS6scY9uX1WUZ2+ULe6BvgFS/BfKlY4GqkAAAAASUVORK5CYIIA", Qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYIIA", $e = {
	carrot: ze,
	corn: Be,
	garlic: Ve,
	pea: He,
	potato: Ue,
	pumpkin: We,
	rain: qe,
	shovel: Je,
	sprinkler: Ye,
	tomato: Ge,
	water: Ke
}, et = {
	dirt: Ze,
	pixel: Qe,
	brownDotBackground: Xe
}, tt = (e) => e in $e, F = /* @__PURE__ */ function(e) {
	return e.CROP = "CROP", e.EVENT = "EVENT", e.TOOL = "TOOL", e.WATER = "WATER", e;
}({}), nt = (e) => e.type === "WATER", rt = (e) => e.type === "EVENT", it = (e) => e.type === "TOOL", I = /* @__PURE__ */ function(e) {
	return e.DANGEROUSLY_SET_CONTEXT = "DANGEROUSLY_SET_CONTEXT", e.HARVEST_CROP = "HARVEST_CROP", e.INIT = "INIT", e.OPERATION_ABORTED = "OPERATION_ABORTED", e.RESUME = "RESUME", e.PLAY_CARD = "PLAY_CARD", e.PLAY_CROP = "PLAY_CROP", e.PLAY_EVENT = "PLAY_EVENT", e.PLAY_TOOL = "PLAY_TOOL", e.PLAY_PLANTABLE_TOOL = "PLAY_PLANTABLE_TOOL", e.PLAY_WATER = "PLAY_WATER", e.DISCARD_CARD_FROM_FIELD = "DISCARD_CARD_FROM_FIELD", e.PLAYER_RAN_OUT_OF_FUNDS = "PLAYER_RAN_OUT_OF_FUNDS", e.PROMPT_BOT_FOR_SETUP_ACTION = "PROMPT_BOT_FOR_SETUP_ACTION", e.PROMPT_BOT_FOR_TURN_ACTION = "PROMPT_BOT_FOR_TURN_ACTION", e.PROMPT_PLAYER_FOR_CROP_TO_WATER = "PROMPT_PLAYER_FOR_CROP_TO_WATER", e.PROMPT_PLAYER_FOR_SETUP_ACTION = "PROMPT_PLAYER_FOR_SETUP_ACTION", e.PROMPT_PLAYER_FOR_TURN_ACTION = "PROMPT_PLAYER_FOR_TURN_ACTION", e.SELECT_CROP_TO_WATER = "SELECT_CROP_TO_WATER", e.SELECT_CARD_POSITION = "SELECT_CARD_POSITION", e.SET_SHELL = "SET_SHELL", e.START_TURN = "START_TURN", e.BOT_TURN_INITIALIZED = "BOT_TURN_INITIALIZED", e.BOT_TURN_PHASE_COMPLETE = "BOT_TURN_PHASE_COMPLETE", e;
}({}), L = /* @__PURE__ */ function(e) {
	return e.INITIALIZING = "INITIALIZING", e.PLACING_CROP = "PLACING_CROP", e.PLAYING_CROPS = "PLAYING_CROPS", e.WATERING_CROPS = "WATERING_CROPS", e.WATERING_CROP = "WATERING_CROP", e.PLAYING_EVENTS = "PLAYING_EVENTS", e.PLAYING_TOOLS = "PLAYING_TOOLS", e.HARVESTING_CROPS = "HARVESTING_CROPS", e.HARVESTING_CROP = "HARVESTING_CROP", e.DONE = "DONE", e;
}({}), R = /* @__PURE__ */ function(e) {
	return e.UNINITIALIZED = "UNINITIALIZED", e.CHOOSING_CARD_POSITION = "CHOOSING_CARD_POSITION", e.GAME_OVER = "GAME_OVER", e.PERFORMING_BOT_SETUP_ACTION = "PERFORMING_BOT_SETUP_ACTION", e.PERFORMING_BOT_TURN_ACTION = "PERFORMING_BOT_TURN_ACTION", e.PLANTING_CARD = "PLANTING_CARD", e.PLAYER_WATERING_CROP = "PLAYER_WATERING_CROP", e.PLAYING_CARD = "PLAYING_CARD", e.PLAYING_EVENT = "PLAYING_EVENT", e.PLAYING_TOOL = "PLAYING_TOOL", e.WAITING_FOR_PLAYER_SETUP_ACTION = "WAITING_FOR_PLAYER_SETUP_ACTION", e.WAITING_FOR_PLAYER_TURN_ACTION = "WAITING_FOR_PLAYER_TURN_ACTION", e;
}({}), at = /* @__PURE__ */ function(e) {
	return e.IS_BOT_PHASE_PLAYING_EVENTS = "IS_BOT_PHASE_PLAYING_EVENTS", e.IS_BOT_PHASE_PLAYING_TOOLS = "IS_BOT_PHASE_PLAYING_TOOLS", e.IS_SELECTED_IDX_VALID = "IS_SELECTED_IDX_VALID", e.IS_SETUP_PHASE = "IS_SETUP_PHASE", e;
}({}), ot = /* @__PURE__ */ function(e) {
	return e.CARDS_DRAWN = "CARDS_DRAWN", e.CROP_HARVESTED = "CROP_HARVESTED", e.CARD_DISCARDED = "CARD_DISCARDED", e.CROP_WATERED = "CROP_WATERED", e.EVENT_CARD_PLAYED = "EVENT_CARD_PLAYED", e.TOOL_CARD_PLAYED = "TOOL_CARD_PLAYED", e.ALL_CROPS_WATERED = "ALL_CROPS_WATERED", e;
}({}), st = [];
for (let e = 0; e < 256; ++e) st.push((e + 256).toString(16).slice(1));
function ct(e, t = 0) {
	return (st[e[t + 0]] + st[e[t + 1]] + st[e[t + 2]] + st[e[t + 3]] + "-" + st[e[t + 4]] + st[e[t + 5]] + "-" + st[e[t + 6]] + st[e[t + 7]] + "-" + st[e[t + 8]] + st[e[t + 9]] + "-" + st[e[t + 10]] + st[e[t + 11]] + st[e[t + 12]] + st[e[t + 13]] + st[e[t + 14]] + st[e[t + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/uuid/dist/rng.js
var lt = new Uint8Array(16);
function ut() {
	return crypto.getRandomValues(lt);
}
//#endregion
//#region node_modules/uuid/dist/v4.js
function dt(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : ft(e, t, n);
}
function ft(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? ut();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return ct(r);
}
//#endregion
//#region src/game/cards/crops/baseToCrop.ts
var pt = (e) => Object.freeze({
	type: F.CROP,
	...e
}), mt = pt({
	id: "carrot",
	name: "Carrot",
	waterToMature: 3
}), ht = pt({
	id: "corn",
	name: "Corn",
	waterToMature: 8
}), gt = pt({
	id: "garlic",
	name: "Garlic",
	waterToMature: 11
}), _t = pt({
	id: "pea",
	name: "Pea",
	waterToMature: 9
}), vt = pt({
	id: "potato",
	name: "Potato",
	waterToMature: 5
}), yt = pt({
	id: "pumpkin",
	name: "Pumpkin",
	waterToMature: 4
}), bt = pt({
	id: "tomato",
	name: "Tomato",
	waterToMature: 13
}), xt = /* @__PURE__ */ ke({
	carrot: () => mt,
	corn: () => ht,
	garlic: () => gt,
	pea: () => _t,
	potato: () => vt,
	pumpkin: () => yt,
	tomato: () => bt
}), St = (e, t) => ({
	...e,
	...t
}), Ct = (e, t) => St(e, { table: {
	...e.table,
	...t
} }), wt = (e, t, n) => {
	let r = B.getPlayer(e, t);
	return e = Ct(e, { players: {
		...e.table.players,
		[t]: {
			...r,
			...n
		}
	} }), e;
}, Tt = (e, t, n) => {
	let { field: r } = B.getPlayer(e, t);
	return e = wt(e, t, { field: {
		...r,
		...n
	} }), e;
}, Et = Object.freeze({
	type: F.EVENT,
	id: "rain",
	name: "Rain",
	description: "Waters all unwatered, planted crops for **all** players.",
	applyEffect: (e) => {
		let { match: t } = e;
		for (let e in t.table.players) {
			let n = t.table.players[e];
			if (!n) continue;
			let r = n.field.cards.map((n) => !n || !mn(n) || e === t.currentPlayerId && n.wasWateredDuringTurn ? n : {
				...n,
				wasWateredDuringTurn: !0,
				waterCards: n.waterCards + 1
			});
			t = Tt(t, e, { cards: r });
		}
		return e.shell.triggerNotification({
			type: ot.ALL_CROPS_WATERED,
			payload: {}
		}), {
			...e,
			match: t
		};
	}
}), Dt = /* @__PURE__ */ ke({ rain: () => Et }), Ot = /* @__PURE__ */ P(((e, t) => {
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
})), kt = /* @__PURE__ */ P(((e, t) => {
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
})), At = /* @__PURE__ */ P(((e, t) => {
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
})), jt = /* @__PURE__ */ P(((e, t) => {
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
})), Mt = /* @__PURE__ */ P(((e, t) => {
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
})), Nt = /* @__PURE__ */ P(((e, t) => {
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
})), Pt = /* @__PURE__ */ P(((e, t) => {
	t.exports = {};
})), Ft = /* @__PURE__ */ P(((e, t) => {
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
				f = Pt();
			} catch {}
		} else typeof define == "function" && define.amd ? define(function() {
			return p;
		}) : r["seed" + s] = p;
	})(typeof self < "u" ? self : e, [], Math);
})), It = /* @__PURE__ */ je((/* @__PURE__ */ P(((e, t) => {
	var n = Ot(), r = kt(), i = At(), a = jt(), o = Mt(), s = Nt(), c = Ft();
	c.alea = n, c.xor128 = r, c.xorwow = i, c.xorshift7 = a, c.xor4096 = o, c.tychei = s, t.exports = c;
})))()), Lt = new class {
	constructor(e) {
		this.rng = e ? (0, It.default)(e) : () => Math.random();
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
}(new URLSearchParams(window.location.search).get("seed")), Rt = (e, t, n = 1) => {
	let r = B.getPlayer(e, t), i = [...r.hand], a = [...r.deck], o = [...r.discardPile], s = a.slice(0, n);
	return a = a.slice(n), i = [...i, ...s], a.length === 0 && (a = Lt.shuffle(o), o = []), e = wt(e, t, {
		deck: a,
		hand: i,
		discardPile: o
	}), e;
}, zt = class extends Error {
	constructor(e) {
		super(`[PlayerOutOfFundsError] Player ${e} is out of funds.`), this.playerId = e;
	}
}, Bt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[MatchStateCorruptError] ${e}`;
	}
}, Vt = class extends Error {
	constructor(e) {
		super(`[GameStateCorruptError] ${e}`);
	}
}, Ht = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[FieldFullError] Player ${e} has no room in the field.`;
	}
}, Ut = class extends Error {
	constructor(e, t) {
		super(...arguments), this.message = `[InvalidCardIndexError] Card index ${e} is out of bounds for player ${t}.`;
	}
}, Wt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[InvalidCardError] ${e}`;
	}
}, Gt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[PlayerNotFoundError] Player ${e} not found.`;
	}
}, Kt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[UnimplementedError] ${e}`;
	}
};
//#endregion
//#region src/game/types/assertions/index.ts
function z(e, t = `${String(e)} is null or undefined`) {
	if (e == null) throw TypeError(t);
}
function qt(e) {
	if (!(e in nn)) throw new Bt(`${e} is not a valid tool card ID`);
}
function Jt(e) {
	if (!rt(e)) throw new Bt(`${e.id} is not an event card`);
}
function Yt(e) {
	if (!it(e)) throw new Bt(`${e.id} is not a tool card`);
}
function Xt(e) {
	if (!(e in R)) throw TypeError(`${e} is not a MatchState`);
}
function Zt(e) {
	if (yn(e)) throw TypeError("stateValue is not a string");
	if (!(e in L)) throw TypeError(`${e} is not a BotTurnActionState`);
}
function Qt(e) {
	if (!mn(e)) throw TypeError(`${JSON.stringify(e)} is not IPlayedCrop`);
}
//#endregion
//#region src/game/cards/tools/shovel.ts
var $t = Object.freeze({
	type: F.TOOL,
	id: "shovel",
	name: "Shovel",
	description: "Draw two cards from the deck. If played, skip the card draw at the start of the next turn.",
	applyEffect: (e) => {
		let { match: t } = e, { currentPlayerId: n } = t;
		return z(n), t = Rt(t, n, 2), e.shell.triggerNotification({
			type: ot.CARDS_DRAWN,
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
}), en = (e, t, n, r) => {
	let { cards: i } = B.getPlayer(e, t).field, a = i[n];
	if (!a) throw RangeError(`cropIdx ${n} references a crop that is not in the field.`);
	Qt(a);
	let o = [
		...i.slice(0, n),
		{
			...a,
			...r
		},
		...i.slice(n + 1)
	];
	return e = Tt(e, t, { cards: o }), e;
}, tn = Object.freeze({
	type: F.TOOL,
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
		}]) !mn(e) || e.wasWateredDuringTurn || (r = en(r, n, t, {
			wasWateredDuringTurn: !0,
			waterCards: e.waterCards + 1
		}));
		return e = {
			...e,
			match: r
		}, e;
	}
}), nn = /* @__PURE__ */ ke({
	shovel: () => $t,
	sprinkler: () => tn
}), rn = Object.freeze({
	type: F.WATER,
	id: "water",
	name: "Water"
}), an = /* @__PURE__ */ ke({ water: () => rn }), on = /* @__PURE__ */ ke({
	allCards: () => cn,
	carrot: () => mt,
	corn: () => ht,
	cropCards: () => xt,
	eventCards: () => Dt,
	garlic: () => gt,
	instantiate: () => sn,
	pea: () => _t,
	potato: () => vt,
	pumpkin: () => yt,
	rain: () => Et,
	shovel: () => $t,
	sprinkler: () => tn,
	tomato: () => bt,
	toolCards: () => nn,
	water: () => rn,
	waterCards: () => an
}), sn = (e) => ({
	...e,
	instanceId: dt()
}), cn = Object.fromEntries(Object.values({
	...xt,
	...Dt,
	...nn,
	...an
}).map((e) => [e.id, e])), ln = (e) => typeof e == "object" && !!e, un = (e) => ln(e) ? "id" in e && typeof e.id == "string" && "type" in e && typeof e.type == "string" && e.type in F && "instanceId" in e && typeof e.instanceId == "string" : !1, dn = (e) => ln(e) ? "id" in e && typeof e.id == "string" && "type" in e && e.type === F.CROP : !1, fn = (e) => e.type === F.CROP, pn = (e) => e.type === F.TOOL && e.isPlantable ? !0 : fn(e), mn = (e) => {
	if (!ln(e)) return !1;
	let t = e;
	return "instance" in t && un(t.instance) && fn(t.instance) && "waterCards" in t && typeof t.waterCards == "number" && "wasWateredDuringTurn" in t && typeof t.wasWateredDuringTurn == "boolean";
}, hn = (e) => {
	if (!ln(e)) return !1;
	let t = e;
	return "instance" in t && un(t.instance) && it(t.instance);
}, gn = (e) => mn(e) || hn(e), _n = (e) => e in on, vn = (e) => ln(e) && "id" in e && typeof e.id == "string" && _n(e.id) && "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && e.type in F, yn = (e) => ln(e), B = new class {
	constructor() {
		this.getCardInstanceFromHand = (e, t, n) => {
			let { hand: r } = this.getPlayer(e, t), i = r[n];
			if (!i) throw Error(`Card index ${n} is not in player ${t}'s hand`);
			return i;
		}, this.getPlayedCardFromField = (e, t, n) => {
			let { cards: r } = this.getPlayer(e, t).field, i = r[n];
			if (!i) throw new Ut(n, t);
			return i;
		}, this.getOpponentPlayerIds = (e) => Object.keys(e.table.players).filter((t) => t !== e.sessionOwnerPlayerId), this.getPlayer = (e, t) => {
			let n = e.table.players[t];
			if (!n) throw new Gt(t);
			return n;
		}, this.findCropIndexesInDeck = (e, t, n = 1) => {
			let { deck: r } = this.getPlayer(e, t), i = [];
			for (let e = 0; e < n && e <= r.length - 1 && i.length < n; e++) {
				let t = r[e];
				t && fn(t) && (i = [...i, e]);
			}
			return i;
		}, this.findCropIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (fn(t) && (e = [...e, n]), e), []), this.findWaterIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (nt(t) && (e = [...e, n]), e), []), this.findEventIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (rt(t) && (e = [...e, n]), e), []), this.findToolIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (it(t) && (e = [...e, n]), e), []), this.playerIds = (e) => Object.keys(e.table.players).sort(), this.nextPlayerIndex = (e) => {
			let { currentPlayerId: t } = e;
			z(t);
			let n = Object.keys(e.table.players).sort();
			return (n.indexOf(t) + 1) % n.length;
		}, this.fullPlots = (e, t) => {
			let { field: n } = B.getPlayer(e, t), { cards: r } = n;
			return r.filter((e) => !!e);
		};
	}
	getCropFromHand(e, t, n) {
		let r = this.getCardInstanceFromHand(e, t, n);
		if (!dn(r)) throw new Wt(`${r.id} is not a crop card.`);
		return r;
	}
}(), V = /* @__PURE__ */ function(e) {
	return e.SMALL = "SMALL", e.MEDIUM = "MEDIUM", e.LARGE = "LARGE", e;
}({}), bn = {
	[V.SMALL]: {
		height: "14rem",
		width: "8rem"
	},
	[V.MEDIUM]: {
		height: "21rem",
		width: "12rem"
	},
	[V.LARGE]: {
		height: "28rem",
		width: "16rem"
	}
}, xn = 20, Sn = {
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
	x: 0,
	y: 0,
	toJSON: () => {
		throw Error("Unimplemented toJSON called");
	}
}, Cn = ({ cardSize: e }) => {
	let t = ie(), n = k(), [r, i] = A(Sn);
	w(() => {
		let e = () => {
			n.current && i(n.current.getBoundingClientRect());
		};
		return e(), window.addEventListener("resize", e), () => {
			window.removeEventListener("resize", e);
		};
	}, [n]);
	let a = window.innerWidth / 2, o = window.innerHeight / 2, s = `calc(${r.left}px + ${bn[e].width} / 2)`, c = `calc(${r.top}px + ${bn[e].height} / 2)`, l = `calc(${a}px - ${s})`, u = `calc(${o}px - ${c})`;
	return {
		containerRef: n,
		selectedCardSxProps: {
			boxShadow: t.shadows[11],
			transform: `translate(${l}, ${u}) scale(1)`,
			zIndex: xn
		}
	};
};
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function wn(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var Tn = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, En = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Dn = {};
function On(e, t) {
	return ((t || Dn).jsx ? En : Tn).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var kn = /[ \t\n\f\r]/g;
function An(e) {
	return typeof e == "object" ? e.type === "text" ? jn(e.value) : !1 : jn(e);
}
function jn(e) {
	return e.replace(kn, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var Mn = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Mn.prototype.normal = {}, Mn.prototype.property = {}, Mn.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function Nn(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Mn(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function Pn(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var Fn = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
Fn.prototype.attribute = "", Fn.prototype.booleanish = !1, Fn.prototype.boolean = !1, Fn.prototype.commaOrSpaceSeparated = !1, Fn.prototype.commaSeparated = !1, Fn.prototype.defined = !1, Fn.prototype.mustUseProperty = !1, Fn.prototype.number = !1, Fn.prototype.overloadedBoolean = !1, Fn.prototype.property = "", Fn.prototype.spaceSeparated = !1, Fn.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var In = /* @__PURE__ */ ke({
	boolean: () => H,
	booleanish: () => U,
	commaOrSpaceSeparated: () => Bn,
	commaSeparated: () => zn,
	number: () => W,
	overloadedBoolean: () => Rn,
	spaceSeparated: () => G
}), Ln = 0, H = Vn(), U = Vn(), Rn = Vn(), W = Vn(), G = Vn(), zn = Vn(), Bn = Vn();
function Vn() {
	return 2 ** ++Ln;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Hn = Object.keys(In), Un = class extends Fn {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Wn(this, "space", r), typeof n == "number") for (; ++i < Hn.length;) {
			let e = Hn[i];
			Wn(this, Hn[i], (n & In[e]) === In[e]);
		}
	}
};
Un.prototype.defined = !0;
function Wn(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function Gn(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Un(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Pn(r)] = r, n[Pn(a.attribute)] = r;
	}
	return new Mn(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Kn = Gn({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: U,
		ariaAutoComplete: null,
		ariaBusy: U,
		ariaChecked: U,
		ariaColCount: W,
		ariaColIndex: W,
		ariaColSpan: W,
		ariaControls: G,
		ariaCurrent: null,
		ariaDescribedBy: G,
		ariaDetails: null,
		ariaDisabled: U,
		ariaDropEffect: G,
		ariaErrorMessage: null,
		ariaExpanded: U,
		ariaFlowTo: G,
		ariaGrabbed: U,
		ariaHasPopup: null,
		ariaHidden: U,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: G,
		ariaLevel: W,
		ariaLive: null,
		ariaModal: U,
		ariaMultiLine: U,
		ariaMultiSelectable: U,
		ariaOrientation: null,
		ariaOwns: G,
		ariaPlaceholder: null,
		ariaPosInSet: W,
		ariaPressed: U,
		ariaReadOnly: U,
		ariaRelevant: null,
		ariaRequired: U,
		ariaRoleDescription: G,
		ariaRowCount: W,
		ariaRowIndex: W,
		ariaRowSpan: W,
		ariaSelected: U,
		ariaSetSize: W,
		ariaSort: null,
		ariaValueMax: W,
		ariaValueMin: W,
		ariaValueNow: W,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function qn(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Jn(e, t) {
	return qn(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Yn = Gn({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: zn,
		acceptCharset: G,
		accessKey: G,
		action: null,
		allow: null,
		allowFullScreen: H,
		allowPaymentRequest: H,
		allowUserMedia: H,
		alt: null,
		as: null,
		async: H,
		autoCapitalize: null,
		autoComplete: G,
		autoFocus: H,
		autoPlay: H,
		blocking: G,
		capture: null,
		charSet: null,
		checked: H,
		cite: null,
		className: G,
		cols: W,
		colSpan: null,
		content: null,
		contentEditable: U,
		controls: H,
		controlsList: G,
		coords: W | zn,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: H,
		defer: H,
		dir: null,
		dirName: null,
		disabled: H,
		download: Rn,
		draggable: U,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: H,
		formTarget: null,
		headers: G,
		height: W,
		hidden: Rn,
		high: W,
		href: null,
		hrefLang: null,
		htmlFor: G,
		httpEquiv: G,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: H,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: H,
		itemId: null,
		itemProp: G,
		itemRef: G,
		itemScope: H,
		itemType: G,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: H,
		low: W,
		manifest: null,
		max: null,
		maxLength: W,
		media: null,
		method: null,
		min: null,
		minLength: W,
		multiple: H,
		muted: H,
		name: null,
		nonce: null,
		noModule: H,
		noValidate: H,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: H,
		optimum: W,
		pattern: null,
		ping: G,
		placeholder: null,
		playsInline: H,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: H,
		referrerPolicy: null,
		rel: G,
		required: H,
		reversed: H,
		rows: W,
		rowSpan: W,
		sandbox: G,
		scope: null,
		scoped: H,
		seamless: H,
		selected: H,
		shadowRootClonable: H,
		shadowRootDelegatesFocus: H,
		shadowRootMode: null,
		shape: null,
		size: W,
		sizes: null,
		slot: null,
		span: W,
		spellCheck: U,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: W,
		step: null,
		style: null,
		tabIndex: W,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: H,
		useMap: null,
		value: U,
		width: W,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: G,
		axis: null,
		background: null,
		bgColor: null,
		border: W,
		borderColor: null,
		bottomMargin: W,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: H,
		declare: H,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: W,
		leftMargin: W,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: W,
		marginWidth: W,
		noResize: H,
		noHref: H,
		noShade: H,
		noWrap: H,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: W,
		rules: null,
		scheme: null,
		scrolling: U,
		standby: null,
		summary: null,
		text: null,
		topMargin: W,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: W,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: H,
		disableRemotePlayback: H,
		prefix: null,
		property: null,
		results: W,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: Jn
}), Xn = Gn({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: Bn,
		accentHeight: W,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: W,
		amplitude: W,
		arabicForm: null,
		ascent: W,
		attributeName: null,
		attributeType: null,
		azimuth: W,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: W,
		by: null,
		calcMode: null,
		capHeight: W,
		className: G,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: W,
		diffuseConstant: W,
		direction: null,
		display: null,
		dur: null,
		divisor: W,
		dominantBaseline: null,
		download: H,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: W,
		enableBackground: null,
		end: null,
		event: null,
		exponent: W,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: W,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: zn,
		g2: zn,
		glyphName: zn,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: W,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: W,
		horizOriginX: W,
		horizOriginY: W,
		id: null,
		ideographic: W,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: W,
		k: W,
		k1: W,
		k2: W,
		k3: W,
		k4: W,
		kernelMatrix: Bn,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: W,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: W,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: W,
		overlineThickness: W,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: W,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: G,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: W,
		pointsAtY: W,
		pointsAtZ: W,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: Bn,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: Bn,
		rev: Bn,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: Bn,
		requiredFeatures: Bn,
		requiredFonts: Bn,
		requiredFormats: Bn,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: W,
		specularExponent: W,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: W,
		strikethroughThickness: W,
		string: null,
		stroke: null,
		strokeDashArray: Bn,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: W,
		strokeOpacity: W,
		strokeWidth: null,
		style: null,
		surfaceScale: W,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: Bn,
		tabIndex: W,
		tableValues: null,
		target: null,
		targetX: W,
		targetY: W,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: Bn,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: W,
		underlineThickness: W,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: W,
		values: null,
		vAlphabetic: W,
		vMathematical: W,
		vectorEffect: null,
		vHanging: W,
		vIdeographic: W,
		version: null,
		vertAdvY: W,
		vertOriginX: W,
		vertOriginY: W,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: W,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: qn
}), Zn = Gn({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), Qn = Gn({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Jn
}), $n = Gn({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), er = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, tr = /[A-Z]/g, nr = /-[a-z]/g, rr = /^data[-\w.:]+$/i;
function ir(e, t) {
	let n = Pn(t), r = t, i = Fn;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && rr.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(nr, or);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!nr.test(e)) {
				let n = e.replace(tr, ar);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Un;
	}
	return new i(r, t);
}
function ar(e) {
	return "-" + e.toLowerCase();
}
function or(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var sr = Nn([
	Kn,
	Yn,
	Zn,
	Qn,
	$n
], "html"), cr = Nn([
	Kn,
	Xn,
	Zn,
	Qn,
	$n
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function lr(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/index.js
var ur = /* @__PURE__ */ P(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	t.exports = function(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, _ = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			_ = ~n ? e.length - n : _ + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: _
			};
			return function(t) {
				return t.position = new b(e), w(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: _
			}, this.source = t.source;
		}
		b.prototype.content = e;
		var x = [];
		function S(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + _ + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = _, r.source = e, t.silent) x.push(r);
			else throw r;
		}
		function C(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function w() {
			C(i);
		}
		function T(e) {
			var t;
			for (e ||= []; t = E();) t !== !1 && e.push(t);
			return e;
		}
		function E() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return S("End of comment missing");
				var r = e.slice(2, n - 2);
				return _ += 2, v(r), e = e.slice(n), _ += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function D() {
			var e = y(), t = C(a);
			if (t) {
				if (E(), !C(o)) return S("property missing ':'");
				var r = C(s), i = e({
					type: h,
					property: g(t[0].replace(n, p)),
					value: r ? g(r[0].replace(n, p)) : p
				});
				return C(c), i;
			}
		}
		function O() {
			var e = [];
			T(e);
			for (var t; t = D();) t !== !1 && (e.push(t), T(e));
			return e;
		}
		return w(), O();
	};
	function g(e) {
		return e ? e.replace(l, p) : p;
	}
})), dr = /* @__PURE__ */ P(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(ur());
	function r(e, t) {
		var r = null;
		if (!e || typeof e != "string") return r;
		var i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach(function(e) {
			if (e.type === "declaration") {
				var n = e.property, i = e.value;
				a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
			}
		}), r;
	}
})), fr = /* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), pr = /* @__PURE__ */ P(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(dr()), r = fr();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), mr = gr("end"), hr = gr("start");
function gr(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function _r(e) {
	let t = hr(e), n = mr(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function vr(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? br(e.position) : "start" in e || "end" in e ? br(e) : "line" in e || "column" in e ? yr(e) : "";
}
function yr(e) {
	return xr(e && e.line) + ":" + xr(e && e.column);
}
function br(e) {
	return yr(e && e.start) + "-" + yr(e && e.end);
}
function xr(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var Sr = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = o ? o.line : void 0, this.name = vr(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual, this.expected, this.note, this.url;
	}
};
Sr.prototype.file = "", Sr.prototype.name = "", Sr.prototype.reason = "", Sr.prototype.message = "", Sr.prototype.stack = "", Sr.prototype.column = void 0, Sr.prototype.line = void 0, Sr.prototype.ancestors = void 0, Sr.prototype.cause = void 0, Sr.prototype.fatal = void 0, Sr.prototype.place = void 0, Sr.prototype.ruleId = void 0, Sr.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var Cr = /* @__PURE__ */ je(pr(), 1), wr = {}.hasOwnProperty, Tr = /* @__PURE__ */ new Map(), Er = /[A-Z]/g, Dr = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Or = new Set(["td", "th"]);
function kr(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Br(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = zr(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? cr : sr,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Ar(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Ar(e, t, n) {
	if (t.type === "element") return jr(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Mr(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Pr(e, t, n);
	if (t.type === "mdxjsEsm") return Nr(e, t);
	if (t.type === "root") return Fr(e, t, n);
	if (t.type === "text") return Ir(e, t);
}
function jr(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = cr, e.schema = i), e.ancestors.push(t);
	let a = Kr(e, t.tagName, !1), o = Vr(e, t), s = Ur(e, t);
	return Dr.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !An(e) : !0;
	})), Lr(e, o, a, t), Rr(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Mr(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	qr(e, t.position);
}
function Nr(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	qr(e, t.position);
}
function Pr(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = cr, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Kr(e, t.name, !0), o = Hr(e, t), s = Ur(e, t);
	return Lr(e, o, a, t), Rr(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Fr(e, t, n) {
	let r = {};
	return Rr(r, Ur(e, t)), e.create(t, e.Fragment, r, n);
}
function Ir(e, t) {
	return t.value;
}
function Lr(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Rr(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function zr(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Br(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = hr(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Vr(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && wr.call(t.properties, i)) {
		let a = Wr(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Or.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Hr(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else qr(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else qr(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Ur(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : Tr;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Ar(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Wr(e, t, n) {
	let r = ir(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? wn(n) : lr(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Gr(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Jr(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? er[r.property] || r.property : r.attribute, n];
	}
}
function Gr(e, t) {
	try {
		return (0, Cr.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new Sr("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute", r;
	}
}
function Kr(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = On(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = On(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return wr.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	qr(e);
}
function qr(e, t) {
	let n = new Sr("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Jr(e) {
	let t = {}, n;
	for (n in e) wr.call(e, n) && (t[Yr(n)] = e[n]);
	return t;
}
function Yr(e) {
	let t = e.replace(Er, Xr);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Xr(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Zr = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, Qr = {};
function $r(e, t) {
	let n = t || Qr;
	return ei(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function ei(e, t, n) {
	if (ni(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return ti(e.children, t, n);
	}
	return Array.isArray(e) ? ti(e, t, n) : "";
}
function ti(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = ei(e[i], t, n);
	return r.join("");
}
function ni(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var ri = document.createElement("i");
function ii(e) {
	let t = "&" + e + ";";
	ri.innerHTML = t;
	let n = ri.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function ai(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function oi(e, t) {
	return e.length > 0 ? (ai(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var si = {}.hasOwnProperty;
function ci(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) li(t, e[n]);
	return t;
}
function li(e, t) {
	let n;
	for (n in t) {
		let r = (si.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			si.call(r, a) || (r[a] = []);
			let e = i[a];
			ui(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function ui(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	ai(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function di(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function fi(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var pi = Ci(/[A-Za-z]/), mi = Ci(/[\dA-Za-z]/), hi = Ci(/[#-'*+\--9=?A-Z^-~]/);
function gi(e) {
	return e !== null && (e < 32 || e === 127);
}
var _i = Ci(/\d/), vi = Ci(/[\dA-Fa-f]/), yi = Ci(/[!-/:-@[-`{-~]/);
function K(e) {
	return e !== null && e < -2;
}
function bi(e) {
	return e !== null && (e < 0 || e === 32);
}
function q(e) {
	return e === -2 || e === -1 || e === 32;
}
var xi = Ci(/\p{P}|\p{S}/u), Si = Ci(/\s/);
function Ci(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function wi(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && mi(e.charCodeAt(n + 1)) && mi(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function J(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return q(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return q(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var Ti = { tokenize: Ei };
function Ei(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), J(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return K(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var Di = { tokenize: ki }, Oi = { tokenize: Ai };
function ki(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return ai(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Oi, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Oi, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return K(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			ai(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Ai(e, t, n) {
	return J(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function ji(e) {
	if (e === null || bi(e) || Si(e)) return 1;
	if (xi(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function Mi(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var Ni = {
	name: "attention",
	resolveAll: Pi,
	tokenize: Fi
};
function Pi(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Ii(d, -c), Ii(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = oi(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = oi(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = oi(l, Mi(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = oi(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = oi(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, ai(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Fi(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = ji(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = ji(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Ii(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Li = {
	name: "autolink",
	tokenize: Ri
};
function Ri(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return pi(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || mi(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || mi(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || gi(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : hi(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return mi(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || mi(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var zi = {
	partial: !0,
	tokenize: Bi
};
function Bi(e, t, n) {
	return r;
	function r(t) {
		return q(t) ? J(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || K(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var Vi = {
	continuation: { tokenize: Ui },
	exit: Wi,
	name: "blockQuote",
	tokenize: Hi
};
function Hi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Ui(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return q(t) ? J(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Vi, t, n)(r);
	}
}
function Wi(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Gi = {
	name: "characterEscape",
	tokenize: Ki
};
function Ki(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return yi(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var qi = {
	name: "characterReference",
	tokenize: Ji
};
function Ji(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = mi, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = vi, u) : (e.enter("characterReferenceValue"), a = 7, o = _i, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === mi && !ii(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Yi = {
	partial: !0,
	tokenize: Qi
}, Xi = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Zi
};
function Zi(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), q(t) ? J(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || K(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Yi, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || K(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : q(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), J(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || K(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || K(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && q(t) ? J(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || K(t) ? e.check(Yi, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || K(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), q(t) ? J(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), q(t) ? J(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || K(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Qi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var $i = {
	name: "codeIndented",
	tokenize: ta
}, ea = {
	partial: !0,
	tokenize: na
};
function ta(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), J(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : K(t) ? e.attempt(ea, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || K(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function na(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : K(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : J(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : K(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var ra = {
	name: "codeText",
	previous: aa,
	resolve: ia,
	tokenize: oa
};
function ia(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function aa(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function oa(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : K(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || K(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var sa = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && ca(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), ca(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), ca(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			ca(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			ca(this.left, t.reverse());
		}
	}
};
function ca(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function la(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new sa(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, ua(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return ai(e, 0, Infinity, u.slice(0)), !l;
}
function ua(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var da = {
	resolve: pa,
	tokenize: ma
}, fa = {
	partial: !0,
	tokenize: ha
};
function pa(e) {
	return la(e), e;
}
function ma(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : K(t) ? e.check(fa, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function ha(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || K(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function ga(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || gi(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || K(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || bi(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || gi(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function _a(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : K(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || K(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !q(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function va(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : K(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || K(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function ya(e, t) {
	let n;
	return r;
	function r(i) {
		return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : q(i) ? J(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var ba = {
	name: "definition",
	tokenize: Sa
}, xa = {
	partial: !0,
	tokenize: Ca
};
function Sa(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return _a.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = fi(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return bi(t) ? ya(e, l)(t) : l(t);
	}
	function l(t) {
		return ga(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(xa, d, d)(t);
	}
	function d(t) {
		return q(t) ? J(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || K(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Ca(e, t, n) {
	return r;
	function r(t) {
		return bi(t) ? ya(e, i)(t) : n(t);
	}
	function i(t) {
		return va(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return q(t) ? J(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || K(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var wa = {
	name: "hardBreakEscape",
	tokenize: Ta
};
function Ta(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return K(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Ea = {
	name: "headingAtx",
	resolve: Da,
	tokenize: Oa
};
function Da(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, ai(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function Oa(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || bi(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || K(n) ? (e.exit("atxHeading"), t(n)) : q(n) ? J(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || bi(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var ka = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Aa = [
	"pre",
	"script",
	"style",
	"textarea"
], ja = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: Pa,
	tokenize: Fa
}, Ma = {
	partial: !0,
	tokenize: La
}, Na = {
	partial: !0,
	tokenize: Ia
};
function Pa(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Fa(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ie) : pi(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : pi(a) ? (e.consume(a), i = 4, r.interrupt ? t : ie) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ie) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return pi(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || bi(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Aa.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : ka.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || mi(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return q(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || pi(t) ? (e.consume(t), b) : q(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || mi(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : q(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : q(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || K(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || bi(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || q(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || K(t) ? O(t) : q(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), te) : t === 60 && i === 1 ? (e.consume(t), ne) : t === 62 && i === 4 ? (e.consume(t), ae) : t === 63 && i === 3 ? (e.consume(t), ie) : t === 93 && i === 5 ? (e.consume(t), j) : K(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Ma, M, k)(t)) : t === null || K(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(Na, A, M)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ee;
	}
	function ee(t) {
		return t === null || K(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function te(t) {
		return t === 45 ? (e.consume(t), ie) : O(t);
	}
	function ne(t) {
		return t === 47 ? (e.consume(t), o = "", re) : O(t);
	}
	function re(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Aa.includes(n) ? (e.consume(t), ae) : O(t);
		}
		return pi(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), re) : O(t);
	}
	function j(t) {
		return t === 93 ? (e.consume(t), ie) : O(t);
	}
	function ie(t) {
		return t === 62 ? (e.consume(t), ae) : t === 45 && i === 2 ? (e.consume(t), ie) : O(t);
	}
	function ae(t) {
		return t === null || K(t) ? (e.exit("htmlFlowData"), M(t)) : (e.consume(t), ae);
	}
	function M(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Ia(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return K(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function La(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(zi, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Ra = {
	name: "htmlText",
	tokenize: za
};
function za(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : pi(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : pi(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : K(t) ? (o = d, ne(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? te(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : K(t) ? (o = h, ne(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? te(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? te(t) : K(t) ? (o = v, ne(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : K(t) ? (o = y, ne(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? te(e) : y(e);
	}
	function x(t) {
		return pi(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || mi(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return K(t) ? (o = C, ne(t)) : q(t) ? (e.consume(t), C) : te(t);
	}
	function w(t) {
		return t === 45 || mi(t) ? (e.consume(t), w) : t === 47 || t === 62 || bi(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), te) : t === 58 || t === 95 || pi(t) ? (e.consume(t), E) : K(t) ? (o = T, ne(t)) : q(t) ? (e.consume(t), T) : te(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || mi(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : K(t) ? (o = D, ne(t)) : q(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : K(t) ? (o = O, ne(t)) : q(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, ee) : t === null ? n(t) : K(t) ? (o = k, ne(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || bi(t) ? T(t) : (e.consume(t), A);
	}
	function ee(e) {
		return e === 47 || e === 62 || bi(e) ? T(e) : n(e);
	}
	function te(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function ne(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), re;
	}
	function re(t) {
		return q(t) ? J(e, j, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : j(t);
	}
	function j(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var Ba = {
	name: "labelEnd",
	resolveAll: Wa,
	resolveTo: Ga,
	tokenize: Ka
}, Va = { tokenize: qa }, Ha = { tokenize: Ja }, Ua = { tokenize: Ya };
function Wa(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && ai(e, 0, e.length, n), e;
}
function Ga(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = oi(s, e.slice(a + 1, a + r + 3)), s = oi(s, [[
		"enter",
		u,
		t
	]]), s = oi(s, Mi(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = oi(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = oi(s, e.slice(o + 1)), s = oi(s, [[
		"exit",
		c,
		t
	]]), ai(e, a, e.length, s), e;
}
function Ka(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(fi(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Va, u, o ? u : d)(t) : t === 91 ? e.attempt(Ha, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Ua, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function qa(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return bi(t) ? ya(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : ga(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return bi(t) ? ya(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? va(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return bi(t) ? ya(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Ja(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return _a.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(fi(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Ya(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var Xa = {
	name: "labelStartImage",
	resolveAll: Ba.resolveAll,
	tokenize: Za
};
function Za(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var Qa = {
	name: "labelStartLink",
	resolveAll: Ba.resolveAll,
	tokenize: $a
};
function $a(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var eo = {
	name: "lineEnding",
	tokenize: to
};
function to(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), J(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var no = {
	name: "thematicBreak",
	tokenize: ro
};
function ro(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || K(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), q(t) ? J(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var io = {
	continuation: { tokenize: co },
	exit: uo,
	name: "list",
	tokenize: so
}, ao = {
	partial: !0,
	tokenize: fo
}, oo = {
	partial: !0,
	tokenize: lo
};
function so(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : _i(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(no, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return _i(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(zi, r.interrupt ? n : u, e.attempt(ao, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function co(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(zi, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, J(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(oo, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, J(e, e.attempt(io, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function lo(e, t, n) {
	let r = this;
	return J(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function uo(e) {
	e.exit(this.containerState.type);
}
function fo(e, t, n) {
	let r = this;
	return J(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !q(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var po = {
	name: "setextUnderline",
	resolveTo: mo,
	tokenize: ho
};
function mo(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function ho(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), q(t) ? J(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || K(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var go = { tokenize: _o };
function _o(e) {
	let t = this, n = e.attempt(zi, r, e.attempt(this.parser.constructs.flowInitial, i, J(e, e.attempt(this.parser.constructs.flow, i, e.attempt(da, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var vo = { resolveAll: So() }, yo = xo("string"), bo = xo("text");
function xo(e) {
	return {
		resolveAll: So(e === "text" ? Co : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function So(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function Co(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var wo = /* @__PURE__ */ ke({
	attentionMarkers: () => Mo,
	contentInitial: () => Eo,
	disable: () => No,
	document: () => To,
	flow: () => Oo,
	flowInitial: () => Do,
	insideSpan: () => jo,
	string: () => ko,
	text: () => Ao
}), To = {
	42: io,
	43: io,
	45: io,
	48: io,
	49: io,
	50: io,
	51: io,
	52: io,
	53: io,
	54: io,
	55: io,
	56: io,
	57: io,
	62: Vi
}, Eo = { 91: ba }, Do = {
	[-2]: $i,
	[-1]: $i,
	32: $i
}, Oo = {
	35: Ea,
	42: no,
	45: [po, no],
	60: ja,
	61: po,
	95: no,
	96: Xi,
	126: Xi
}, ko = {
	38: qi,
	92: Gi
}, Ao = {
	[-5]: eo,
	[-4]: eo,
	[-3]: eo,
	33: Xa,
	38: qi,
	42: Ni,
	60: [Li, Ra],
	91: Qa,
	92: [wa, Gi],
	93: Ba,
	95: Ni,
	96: ra
}, jo = { null: [Ni, vo] }, Mo = { null: [42, 95] }, No = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Po(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = oi(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Mi(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Io(p(e), t);
	}
	function p(e) {
		return Fo(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		K(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && ai(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function Fo(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Io(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function Lo(e) {
	let t = {
		constructs: ci([wo, ...(e || {}).extensions || []]),
		content: n(Ti),
		defined: [],
		document: n(Di),
		flow: n(go),
		lazy: {},
		string: n(yo),
		text: n(bo)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Po(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function Ro(e) {
	for (; !la(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var zo = /[\0\t\n\r]/g;
function Bo() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (zo.lastIndex = u, c = zo.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var Vo = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ho(e) {
	return e.replace(Vo, Uo);
}
function Uo(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return di(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return ii(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var Wo = {}.hasOwnProperty;
function Go(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), Ko(n)(Ro(Lo(n).document().write(Bo()(e, t, !0))));
}
function Ko(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(xe),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(_e),
			blockQuote: a(fe),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(pe),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(pe, o),
			codeText: a(me, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(he),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(ge),
			hardBreakEscape: a(ve),
			hardBreakTrailing: a(ve),
			htmlFlow: a(ye, o),
			htmlFlowData: T,
			htmlText: a(ye, o),
			htmlTextData: T,
			image: a(be),
			label: o,
			link: a(xe),
			listItem: a(Ce),
			listItemValue: f,
			listOrdered: a(Se, d),
			listUnordered: a(Se),
			paragraph: a(we),
			reference: N,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(_e),
			strong: a(Te),
			thematicBreak: a(De)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: de,
			autolinkProtocol: ue,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: se,
			characterReferenceMarkerNumeric: se,
			characterReferenceValue: ce,
			characterReference: le,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(ee),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(O),
			hardBreakTrailing: c(O),
			htmlFlow: c(k),
			htmlFlowData: E,
			htmlText: c(A),
			htmlTextData: E,
			image: c(ne),
			label: j,
			labelText: re,
			lineEnding: D,
			link: c(te),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: oe,
			resourceDestinationString: ie,
			resourceTitleString: ae,
			resource: M,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Jo(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			Wo.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Xo).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: qo(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: qo(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: qo(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Xo).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + vr({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = qo(e.end);
	}
	function u() {
		return $r(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = fi(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = Ee(), n.position = {
			start: qo(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = qo(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = qo(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function O() {
		this.data.atHardBreak = !0;
	}
	function k() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ee() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function te() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function ne() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function re(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = Ho(t), n.identifier = fi(t).toLowerCase();
	}
	function j() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function ie() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function ae() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function M() {
		this.data.inReference = void 0;
	}
	function N() {
		this.data.referenceType = "collapsed";
	}
	function oe(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = fi(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function se(e) {
		this.data.characterReferenceType = e.type;
	}
	function ce(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = di(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = ii(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function le(e) {
		let t = this.stack.pop();
		t.position.end = qo(e.end);
	}
	function ue(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function de(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function fe() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function pe() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function me() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function he() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function ge() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function _e() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function ve() {
		return { type: "break" };
	}
	function ye() {
		return {
			type: "html",
			value: ""
		};
	}
	function be() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function xe() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function Se(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function Ce(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function we() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function Te() {
		return {
			type: "strong",
			children: []
		};
	}
	function Ee() {
		return {
			type: "text",
			value: ""
		};
	}
	function De() {
		return { type: "thematicBreak" };
	}
}
function qo(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Jo(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Jo(e, r) : Yo(e, r);
	}
}
function Yo(e, t) {
	let n;
	for (n in t) if (Wo.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function Xo(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + vr({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + vr({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + vr({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function Zo(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Go(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function Qo(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function $o(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function es(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function ts(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function ns(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function rs(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = wi(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function is(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function as(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function os(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function ss(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return os(e, t);
	let i = {
		src: wi(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function cs(e, t) {
	let n = { src: wi(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function ls(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function us(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return os(e, t);
	let i = { href: wi(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function ds(e, t) {
	let n = { href: wi(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function fs(e, t, n) {
	let r = e.all(t), i = n ? ps(n) : ms(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function ps(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = ms(n[r]);
	}
	return t;
}
function ms(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function hs(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function gs(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function _s(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function vs(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function ys(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = hr(t.children[1]), o = mr(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function bs(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function xs(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/trim-lines/index.js
var Ss = 9, Cs = 32;
function ws(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Ts(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Ts(t.slice(i), i > 0, !1)), a.join("");
}
function Ts(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Ss || t === Cs;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Ss || t === Cs;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Es(e, t) {
	let n = {
		type: "text",
		value: ws(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Ds(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var Os = {
	blockquote: Qo,
	break: $o,
	code: es,
	delete: ts,
	emphasis: ns,
	footnoteReference: rs,
	heading: is,
	html: as,
	imageReference: ss,
	image: cs,
	inlineCode: ls,
	linkReference: us,
	link: ds,
	listItem: fs,
	list: hs,
	paragraph: gs,
	root: _s,
	strong: vs,
	table: ys,
	tableCell: xs,
	tableRow: bs,
	text: Es,
	thematicBreak: Ds,
	toml: ks,
	yaml: ks,
	definition: ks,
	footnoteDefinition: ks
};
function ks() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var As = typeof self == "object" ? self : globalThis, js = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new As[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new As[a](o), i);
	};
	return r;
}, Ms = (e) => js(/* @__PURE__ */ new Map(), e)(0), Ns = "", { toString: Ps } = {}, { keys: Fs } = Object, Is = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = Ps.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Ns];
		case "Object": return [2, Ns];
		case "Date": return [3, Ns];
		case "RegExp": return [4, Ns];
		case "Map": return [5, Ns];
		case "Set": return [6, Ns];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Ls = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Rs = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = Is(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of Fs(r)) (e || !Ls(Is(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Ls(Is(n)) || Ls(Is(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Ls(Is(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, zs = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Rs(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Bs = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Ms(zs(e, t)) : structuredClone(e) : (e, t) => Ms(zs(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Vs(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function Hs(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Us(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Vs, r = e.options.footnoteBackLabel || Hs, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = wi(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Bs(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var Ws = (function(e) {
	if (e == null) return Ys;
	if (typeof e == "function") return Js(e);
	if (typeof e == "object") return Array.isArray(e) ? Gs(e) : Ks(e);
	if (typeof e == "string") return qs(e);
	throw Error("Expected function, string, or object as test");
});
function Gs(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = Ws(e[n]);
	return Js(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function Ks(e) {
	let t = e;
	return Js(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function qs(e) {
	return Js(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Js(e) {
	return t;
	function t(t, n, r) {
		return !!(Xs(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Ys() {
	return !0;
}
function Xs(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function Zs(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Qs = [];
function $s(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = Ws(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Zs(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Qs, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = ec(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function ec(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Qs : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function tc(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), $s(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var nc = {}.hasOwnProperty, rc = {};
function ic(e, t) {
	let n = t || rc, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: oc,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Os,
			...n.handlers
		},
		one: o,
		options: n,
		patch: ac,
		wrap: cc
	};
	return tc(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (nc.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Bs(n);
				return r.children = a.all(e), r;
			}
			return Bs(e);
		}
		return (a.options.unknownHandler || sc)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = lc(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = lc(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function ac(e, t) {
	e.position && (t.position = _r(e));
}
function oc(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Bs(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function sc(e, t) {
	let n = t.data || {}, r = "value" in t && !(nc.call(n, "hProperties") || nc.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function cc(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function lc(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function uc(e, t) {
	let n = ic(e, t), r = n.one(e, void 0), i = Us(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function dc(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = uc(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return uc(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function fc(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var pc = /* @__PURE__ */ P(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
}));
//#endregion
//#region node_modules/is-plain-obj/index.js
function mc(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function hc() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? gc(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function gc(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var _c = {
	basename: vc,
	dirname: yc,
	extname: bc,
	join: xc,
	sep: "/"
};
function vc(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	wc(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function yc(e) {
	if (wc(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function bc(e) {
	wc(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function xc(...e) {
	let t = -1, n;
	for (; ++t < e.length;) wc(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : Sc(n);
}
function Sc(e) {
	wc(e);
	let t = e.codePointAt(0) === 47, n = Cc(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Cc(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function wc(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var Tc = { cwd: Ec };
function Ec() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Dc(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function Oc(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Dc(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return kc(e);
}
function kc(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region node_modules/vfile/lib/index.js
var Ac = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], jc = class {
	constructor(e) {
		let t;
		t = e ? Dc(e) ? { path: e } : typeof e == "string" || Fc(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : Tc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Ac.length;) {
			let e = Ac[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Ac.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? _c.basename(this.path) : void 0;
	}
	set basename(e) {
		Nc(e, "basename"), Mc(e, "basename"), this.path = _c.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? _c.dirname(this.path) : void 0;
	}
	set dirname(e) {
		Pc(this.basename, "dirname"), this.path = _c.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? _c.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Mc(e, "extname"), Pc(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = _c.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Dc(e) && (e = Oc(e)), Nc(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? _c.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Nc(e, "stem"), Mc(e, "stem"), this.path = _c.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new Sr(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Mc(e, t) {
	if (e && e.includes(_c.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + _c.sep + "`");
}
function Nc(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function Pc(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Fc(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var Ic = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Lc = /* @__PURE__ */ je(pc(), 1), Rc = {}.hasOwnProperty, zc = new class e extends Ic {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = hc();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, Lc.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (Hc("data", this.frozen), this.namespace[e] = t, this) : Rc.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Hc("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = Gc(e), n = this.parser || this.Parser;
		return Bc("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Bc("process", this.parser || this.Parser), Vc("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = Gc(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				qc(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Bc("processSync", this.parser || this.Parser), Vc("processSync", this.compiler || this.Compiler), this.process(e, r), Wc("processSync", "process", t), n;
		function r(e, r) {
			t = !0, fc(e), n = r;
		}
	}
	run(e, t, n) {
		Uc(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = Gc(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), Wc("runSync", "run", n), r;
		function i(e, t) {
			fc(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = Gc(t), r = this.compiler || this.Compiler;
		return Vc("stringify", r), Uc(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (Hc("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, Lc.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				mc(o) && mc(r) && (r = (0, Lc.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Bc(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Vc(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Hc(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Uc(e) {
	if (!mc(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function Wc(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Gc(e) {
	return Kc(e) ? e : new jc(e);
}
function Kc(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function qc(e) {
	return typeof e == "string" || Jc(e);
}
function Jc(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Yc = [], Xc = { allowDangerousHtml: !0 }, Zc = /^(https?|ircs?|mailto|xmpp)$/i, Qc = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function $c(e) {
	let t = el(e), n = tl(e);
	return nl(t.runSync(t.parse(n), n), e);
}
function el(e) {
	let t = e.rehypePlugins || Yc, n = e.remarkPlugins || Yc, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Xc
	} : Xc;
	return zc().use(Zo).use(n).use(dc, r).use(t);
}
function tl(e) {
	let t = e.children || "", n = new jc();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function nl(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || rl;
	for (let e of Qc) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return tc(e, l), kr(e, {
		Fragment: ae,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: M,
		jsxs: N,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in Zr) if (Object.hasOwn(Zr, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Zr[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function rl(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Zc.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs
var il = /* @__PURE__ */ new Set();
function al(e, t, n) {
	e || il.has(t) || (console.warn(t), n && console.warn(n), il.add(t));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-proxy.mjs
function ol(e) {
	if (typeof Proxy > "u") return e;
	let t = /* @__PURE__ */ new Map();
	return new Proxy((...t) => (process.env.NODE_ENV !== "production" && al(!1, "motion() is deprecated. Use motion.create() instead."), e(...t)), { get: (n, r) => r === "create" ? e : (t.has(r) || t.set(r, e(r)), t.get(r)) });
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function sl(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var cl = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/shallow-compare.mjs
function ll(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs
function ul(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs
function dl(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function fl(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = dl(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = dl(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function pl(e, t, n) {
	let r = e.getProps();
	return fl(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs
var ml = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], hl = ["initial", ...ml], gl = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], _l = new Set(gl), vl = (e) => e * 1e3, yl = (e) => e / 1e3, bl = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, xl = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Sl = {
	type: "keyframes",
	duration: .8
}, Cl = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, wl = (e, { keyframes: t }) => t.length > 2 ? Sl : _l.has(e) ? e.startsWith("scale") ? xl(t[1]) : bl : Cl;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs
function Tl(e, t) {
	return e ? e[t] || e.default || e : void 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs
var El = {
	skipAnimations: !1,
	useManualTiming: !1
}, Dl = { current: !1 }, Ol = (e) => e !== null;
function kl(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(Ol), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/noop.mjs
var Al = (e) => e;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs
function jl(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a = /* @__PURE__ */ new WeakSet(), o = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function s(t) {
		a.has(t) && (c.schedule(t), e()), t(o);
	}
	let c = {
		schedule: (e, i = !1, o = !1) => {
			let s = o && r ? t : n;
			return i && a.add(e), s.has(e) || s.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), a.delete(e);
		},
		process: (e) => {
			if (o = e, r) {
				i = !0;
				return;
			}
			r = !0, [t, n] = [n, t], n.clear(), t.forEach(s), r = !1, i && (i = !1, c.process(e));
		}
	};
	return c;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs
var Ml = [
	"read",
	"resolveKeyframes",
	"update",
	"preRender",
	"render",
	"postRender"
], Nl = 40;
function Pl(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = Ml.reduce((e, t) => (e[t] = jl(a), e), {}), { read: s, resolveKeyframes: c, update: l, preRender: u, render: d, postRender: f } = o, p = () => {
		let a = El.useManualTiming ? i.timestamp : performance.now();
		n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Nl), 1), i.timestamp = a, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), i.isProcessing = !1, n && t && (r = !1, e(p));
	}, m = () => {
		n = !0, r = !0, i.isProcessing || e(p);
	};
	return {
		schedule: Ml.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < Ml.length; t++) o[Ml[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs
var { schedule: Y, cancel: Fl, state: Il, steps: Ll } = Pl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Al, !0), Rl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, zl = 1e-7, Bl = 12;
function Vl(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Rl(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > zl && ++s < Bl);
	return o;
}
function Hl(e, t, n, r) {
	if (e === t && n === r) return Al;
	let i = (t) => Vl(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Rl(i(e), t, r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs
var Ul = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Wl = (e) => (t) => 1 - e(1 - t), Gl = /*@__PURE__*/ Hl(.33, 1.53, .69, .99), Kl = /*@__PURE__*/ Wl(Gl), ql = /*@__PURE__*/ Ul(Kl), Jl = (e) => (e *= 2) < 1 ? .5 * Kl(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Yl = (e) => 1 - Math.sin(Math.acos(e)), Xl = Wl(Yl), Zl = Ul(Yl), Ql = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs
function $l(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || Ql(e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/errors.mjs
var eu = Al, tu = Al;
process.env.NODE_ENV !== "production" && (eu = (e, t) => {
	!e && typeof console < "u" && console.warn(t);
}, tu = (e, t) => {
	if (!e) throw Error(t);
});
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs
var nu = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), ru = (e) => (t) => typeof t == "string" && t.startsWith(e), iu = /*@__PURE__*/ ru("--"), au = /*@__PURE__*/ ru("var(--"), ou = (e) => au(e) ? su.test(e.split("/*")[0].trim()) : !1, su = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, cu = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function lu(e) {
	let t = cu.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var uu = 4;
function du(e, t, n = 1) {
	tu(n <= uu, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
	let [r, i] = lu(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return nu(e) ? parseFloat(e) : e;
	}
	return ou(i) ? du(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs
var fu = (e, t, n) => n > t ? t : n < e ? e : n, pu = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, mu = {
	...pu,
	transform: (e) => fu(0, 1, e)
}, hu = {
	...pu,
	default: 1
}, gu = (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), _u = /*@__PURE__*/ gu("deg"), vu = /*@__PURE__*/ gu("%"), X = /*@__PURE__*/ gu("px"), yu = /*@__PURE__*/ gu("vh"), bu = /*@__PURE__*/ gu("vw"), xu = {
	...vu,
	parse: (e) => vu.parse(e) / 100,
	transform: (e) => vu.transform(e * 100)
}, Su = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	"x",
	"y",
	"translateX",
	"translateY"
]), Cu = (e) => e === pu || e === X, wu = (e, t) => parseFloat(e.split(", ")[t]), Tu = (e, t) => (n, { transform: r }) => {
	if (r === "none" || !r) return 0;
	let i = r.match(/^matrix3d\((.+)\)$/u);
	if (i) return wu(i[1], t);
	{
		let t = r.match(/^matrix\((.+)\)$/u);
		return t ? wu(t[1], e) : 0;
	}
}, Eu = new Set([
	"x",
	"y",
	"z"
]), Du = gl.filter((e) => !Eu.has(e));
function Ou(e) {
	let t = [];
	return Du.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var ku = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: Tu(4, 13),
	y: Tu(5, 14)
};
ku.translateX = ku.x, ku.translateY = ku.y;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs
var Au = (e) => (t) => t.test(e), ju = [
	pu,
	X,
	vu,
	_u,
	bu,
	yu,
	{
		test: (e) => e === "auto",
		parse: (e) => e
	}
], Mu = (e) => ju.find(Au(e)), Nu = /* @__PURE__ */ new Set(), Pu = !1, Fu = !1;
function Iu() {
	if (Fu) {
		let e = Array.from(Nu).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Ou(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				var r;
				(r = e.getValue(t)) == null || r.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Fu = !1, Pu = !1, Nu.forEach((e) => e.complete()), Nu.clear();
}
function Lu() {
	Nu.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Fu = !0);
	});
}
function Ru() {
	Lu(), Iu();
}
var zu = class {
	constructor(e, t, n, r, i, a = !1) {
		this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.isScheduled = !0, this.isAsync ? (Nu.add(this), Pu || (Pu = !0, Y.read(Lu), Y.resolveKeyframes(Iu))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		for (let i = 0; i < e.length; i++) if (e[i] === null) if (i === 0) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		} else e[i] = e[i - 1];
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Nu.delete(this);
	}
	cancel() {
		this.isComplete || (this.isScheduled = !1, Nu.delete(this));
	}
	resume() {
		this.isComplete || this.scheduleResolve();
	}
}, Bu = (e) => Math.round(e * 1e5) / 1e5, Vu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function Hu(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var Uu = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Wu = (e, t) => (n) => !!(typeof n == "string" && Uu.test(n) && n.startsWith(e) || t && !Hu(n) && Object.prototype.hasOwnProperty.call(n, t)), Gu = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Vu);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Ku = (e) => fu(0, 255, e), qu = {
	...pu,
	transform: (e) => Math.round(Ku(e))
}, Ju = {
	test: /*@__PURE__*/ Wu("rgb", "red"),
	parse: /*@__PURE__*/ Gu("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + qu.transform(e) + ", " + qu.transform(t) + ", " + qu.transform(n) + ", " + Bu(mu.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs
function Yu(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Xu = {
	test: /*@__PURE__*/ Wu("#"),
	parse: Yu,
	transform: Ju.transform
}, Zu = {
	test: /*@__PURE__*/ Wu("hsl", "hue"),
	parse: /*@__PURE__*/ Gu("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + vu.transform(Bu(t)) + ", " + vu.transform(Bu(n)) + ", " + Bu(mu.transform(r)) + ")"
}, Qu = {
	test: (e) => Ju.test(e) || Xu.test(e) || Zu.test(e),
	parse: (e) => Ju.test(e) ? Ju.parse(e) : Zu.test(e) ? Zu.parse(e) : Xu.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Ju.transform(e) : Zu.transform(e)
}, $u = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs
function ed(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Vu)?.length || 0) + (e.match($u)?.length || 0) > 0;
}
var td = "number", nd = "color", rd = "var", id = "var(", ad = "${}", od = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function sd(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(od, (e) => (Qu.test(e) ? (r.color.push(a), i.push(nd), n.push(Qu.parse(e))) : e.startsWith(id) ? (r.var.push(a), i.push(rd), n.push(e)) : (r.number.push(a), i.push(td), n.push(parseFloat(e))), ++a, ad)).split(ad),
		indexes: r,
		types: i
	};
}
function cd(e) {
	return sd(e).values;
}
function ld(e) {
	let { split: t, types: n } = sd(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			t === td ? i += Bu(e[a]) : t === nd ? i += Qu.transform(e[a]) : i += e[a];
		}
		return i;
	};
}
var ud = (e) => typeof e == "number" ? 0 : e;
function dd(e) {
	let t = cd(e);
	return ld(e)(t.map(ud));
}
var fd = {
	test: ed,
	parse: cd,
	createTransformer: ld,
	getAnimatableNone: dd
}, pd = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function md(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Vu) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!pd.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var hd = /\b([a-z-]*)\(.*?\)/gu, gd = {
	...fd,
	getAnimatableNone: (e) => {
		let t = e.match(hd);
		return t ? t.map(md).join(" ") : e;
	}
}, _d = {
	borderWidth: X,
	borderTopWidth: X,
	borderRightWidth: X,
	borderBottomWidth: X,
	borderLeftWidth: X,
	borderRadius: X,
	radius: X,
	borderTopLeftRadius: X,
	borderTopRightRadius: X,
	borderBottomRightRadius: X,
	borderBottomLeftRadius: X,
	width: X,
	maxWidth: X,
	height: X,
	maxHeight: X,
	top: X,
	right: X,
	bottom: X,
	left: X,
	padding: X,
	paddingTop: X,
	paddingRight: X,
	paddingBottom: X,
	paddingLeft: X,
	margin: X,
	marginTop: X,
	marginRight: X,
	marginBottom: X,
	marginLeft: X,
	backgroundPositionX: X,
	backgroundPositionY: X
}, vd = {
	rotate: _u,
	rotateX: _u,
	rotateY: _u,
	rotateZ: _u,
	scale: hu,
	scaleX: hu,
	scaleY: hu,
	scaleZ: hu,
	skew: _u,
	skewX: _u,
	skewY: _u,
	distance: X,
	translateX: X,
	translateY: X,
	translateZ: X,
	x: X,
	y: X,
	z: X,
	perspective: X,
	transformPerspective: X,
	opacity: mu,
	originX: xu,
	originY: xu,
	originZ: X
}, yd = {
	...pu,
	transform: Math.round
}, bd = {
	..._d,
	...vd,
	zIndex: yd,
	size: X,
	fillOpacity: mu,
	strokeOpacity: mu,
	numOctaves: yd
}, xd = {
	...bd,
	color: Qu,
	backgroundColor: Qu,
	outlineColor: Qu,
	fill: Qu,
	stroke: Qu,
	borderColor: Qu,
	borderTopColor: Qu,
	borderRightColor: Qu,
	borderBottomColor: Qu,
	borderLeftColor: Qu,
	filter: gd,
	WebkitFilter: gd
}, Sd = (e) => xd[e];
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function Cd(e, t) {
	let n = Sd(e);
	return n !== gd && (n = fd), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var wd = new Set([
	"auto",
	"none",
	"0"
]);
function Td(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !wd.has(t) && sd(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Cd(n, i);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var Ed = class extends zu {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), ou(r))) {
				let i = du(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Su.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Mu(r), o = Mu(i);
		if (a !== o) if (Cu(a) && Cu(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) $l(e[t]) && n.push(t);
		n.length && Td(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ku[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = ku[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs
function Dd(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs
var Od;
function kd() {
	Od = void 0;
}
var Ad = {
	now: () => (Od === void 0 && Ad.set(Il.isProcessing || El.useManualTiming ? Il.timestamp : performance.now()), Od),
	set: (e) => {
		Od = e, queueMicrotask(kd);
	}
}, jd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (fd.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function Md(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Nd(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = jd(i, t), s = jd(a, t);
	return eu(o === s, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`), !o || !s ? !1 : Md(e) || (n === "spring" || Dd(n)) && r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var Pd = 40, Fd = class {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", ...o }) {
		this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Ad.now(), this.options = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			...o
		}, this.updateFinishedPromise();
	}
	calcStartTime() {
		return this.resolvedAt && this.resolvedAt - this.createdAt > Pd ? this.resolvedAt : this.createdAt;
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && Ru(), this._resolved;
	}
	onKeyframesResolved(e, t) {
		this.resolvedAt = Ad.now(), this.hasAttemptedResolve = !0;
		let { name: n, type: r, velocity: i, delay: a, onComplete: o, onUpdate: s, isGenerator: c } = this.options;
		if (!c && !Nd(e, n, r, i)) if (Dl.current || !a) {
			s?.(kl(e, this.options, t)), o?.(), this.resolveFinishedPromise();
			return;
		} else this.options.duration = 0;
		let l = this.initPlayback(e, t);
		l !== !1 && (this._resolved = {
			keyframes: e,
			finalKeyframe: t,
			...l
		}, this.onPostResolved());
	}
	onPostResolved() {}
	then(e, t) {
		return this.currentFinishedPromise.then(e, t);
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise((e) => {
			this.resolveFinishedPromise = e;
		});
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs
function Id(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var Ld = 5;
function Rd(e, t, n) {
	let r = Math.max(t - Ld, 0);
	return Id(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs
var zd = .001, Bd = .01, Vd = .05;
function Hd({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
	let i, a;
	eu(e <= vl(10), "Spring duration must be 10 seconds or less");
	let o = 1 - t;
	o = fu(Vd, 1, o), e = fu(Bd, 10, yl(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Gd(t, o), c = Math.exp(-i);
		return zd - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Gd(t ** 2, o);
		return (-i(t) + zd > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Wd(i, a, s);
	if (e = vl(e), isNaN(c)) return {
		stiffness: 100,
		damping: 10,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Ud = 12;
function Wd(e, t, n) {
	let r = n;
	for (let n = 1; n < Ud; n++) r -= e(r) / t(r);
	return r;
}
function Gd(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs
var Kd = ["duration", "bounce"], qd = [
	"stiffness",
	"damping",
	"mass"
];
function Jd(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Yd(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Jd(e, qd) && Jd(e, Kd)) {
		let n = Hd(e);
		t = {
			...t,
			...n,
			mass: 1
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Xd({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	let i = e[0], a = e[e.length - 1], o = {
		done: !1,
		value: i
	}, { stiffness: s, damping: c, mass: l, duration: u, velocity: d, isResolvedFromDuration: f } = Yd({
		...r,
		velocity: -yl(r.velocity || 0)
	}), p = d || 0, m = c / (2 * Math.sqrt(s * l)), h = a - i, g = yl(Math.sqrt(s / l)), _ = Math.abs(h) < 5;
	n ||= _ ? .01 : 2, t ||= _ ? .005 : .5;
	let v;
	if (m < 1) {
		let e = Gd(g, m);
		v = (t) => a - Math.exp(-m * g * t) * ((p + m * g * h) / e * Math.sin(e * t) + h * Math.cos(e * t));
	} else if (m === 1) v = (e) => a - Math.exp(-g * e) * (h + (p + g * h) * e);
	else {
		let e = g * Math.sqrt(m * m - 1);
		v = (t) => {
			let n = Math.exp(-m * g * t), r = Math.min(e * t, 300);
			return a - n * ((p + m * g * h) * Math.sinh(r) + e * h * Math.cosh(r)) / e;
		};
	}
	return {
		calculatedDuration: f && u || null,
		next: (e) => {
			let r = v(e);
			if (f) o.done = e >= u;
			else {
				let i = 0;
				m < 1 && (i = e === 0 ? vl(p) : Rd(v, e, r));
				let s = Math.abs(i) <= n, c = Math.abs(a - r) <= t;
				o.done = s && c;
			}
			return o.value = o.done ? a : r, o;
		}
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs
function Zd({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Xd({
			keyframes: [f.value, m(f.value)],
			velocity: Rd(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs
var Qd = /*@__PURE__*/ Hl(.42, 0, 1, 1), $d = /*@__PURE__*/ Hl(0, 0, .58, 1), ef = /*@__PURE__*/ Hl(.42, 0, .58, 1), tf = (e) => Array.isArray(e) && typeof e[0] != "number", nf = (e) => Array.isArray(e) && typeof e[0] == "number", rf = {
	linear: Al,
	easeIn: Qd,
	easeInOut: ef,
	easeOut: $d,
	circIn: Yl,
	circInOut: Zl,
	circOut: Xl,
	backIn: Kl,
	backInOut: ql,
	backOut: Gl,
	anticipate: Jl
}, af = (e) => {
	if (nf(e)) {
		tu(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [t, n, r, i] = e;
		return Hl(t, n, r, i);
	} else if (typeof e == "string") return tu(rf[e] !== void 0, `Invalid easing type '${e}'`), rf[e];
	return e;
}, of = (e, t) => (n) => t(e(n)), sf = (...e) => e.reduce(of), cf = (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Z = (e, t, n) => e + (t - e) * n;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function lf(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function uf({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = lf(s, r, e + 1 / 3), a = lf(s, r, e), o = lf(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs
function df(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs
var ff = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, pf = [
	Xu,
	Ju,
	Zu
], mf = (e) => pf.find((t) => t.test(e));
function hf(e) {
	let t = mf(e);
	if (eu(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
	let n = t.parse(e);
	return t === Zu && (n = uf(n)), n;
}
var gf = (e, t) => {
	let n = hf(e), r = hf(t);
	if (!n || !r) return df(e, t);
	let i = { ...n };
	return (e) => (i.red = ff(n.red, r.red, e), i.green = ff(n.green, r.green, e), i.blue = ff(n.blue, r.blue, e), i.alpha = Z(n.alpha, r.alpha, e), Ju.transform(i));
}, _f = new Set(["none", "hidden"]);
function vf(e, t) {
	return _f.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs
function yf(e, t) {
	return (n) => Z(e, t, n);
}
function bf(e) {
	return typeof e == "number" ? yf : typeof e == "string" ? ou(e) ? df : Qu.test(e) ? gf : wf : Array.isArray(e) ? xf : typeof e == "object" ? Qu.test(e) ? gf : Sf : df;
}
function xf(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => bf(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Sf(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = bf(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Cf(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var wf = (e, t) => {
	let n = fd.createTransformer(t), r = sd(e), i = sd(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? _f.has(e) && !i.values.length || _f.has(t) && !r.values.length ? vf(e, t) : sf(xf(Cf(r, i), i.values), n) : (eu(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), df(e, t));
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs
function Tf(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Z(e, t, n) : bf(e)(e, t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs
function Ef(e, t, n) {
	let r = [], i = n || Tf, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = sf(Array.isArray(t) ? t[n] || Al : t, a)), r.push(a);
	}
	return r;
}
function Df(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (tu(a === t.length, "Both input and output ranges must be the same length"), a === 1) return () => t[0];
	if (a === 2 && e[0] === e[1]) return () => t[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let o = Ef(t, r, i), s = o.length, c = (t) => {
		let n = 0;
		if (s > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
		let r = cf(e[n], e[n + 1], t);
		return o[n](r);
	};
	return n ? (t) => c(fu(e[0], e[a - 1], t)) : c;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs
function Of(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = cf(0, t, r);
		e.push(Z(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs
function kf(e) {
	let t = [0];
	return Of(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs
function Af(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs
function jf(e, t) {
	return e.map(() => t || ef).splice(0, e.length - 1);
}
function Mf({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = tf(r) ? r.map(af) : af(r), a = {
		done: !1,
		value: t[0]
	}, o = Df(Af(n && n.length === t.length ? n : kf(t), e), t, { ease: Array.isArray(i) ? i : jf(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
function Nf(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var Pf = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: () => Y.update(t, !0),
		stop: () => Fl(t),
		now: () => Il.isProcessing ? Il.timestamp : Ad.now()
	};
}, Ff = {
	decay: Zd,
	inertia: Zd,
	tween: Mf,
	keyframes: Mf,
	spring: Xd
}, If = (e) => e / 100, Lf = class extends Fd {
	constructor(e) {
		super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.teardown();
			let { onStop: e } = this.options;
			e && e();
		};
		let { name: t, motionValue: n, element: r, keyframes: i } = this.options, a = r?.KeyframeResolver || zu, o = (e, t) => this.onKeyframesResolved(e, t);
		this.resolver = new a(i, o, t, n, r), this.resolver.scheduleResolve();
	}
	initPlayback(e) {
		let { type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = this.options, o = Dd(t) ? t : Ff[t] || Mf, s, c;
		o !== Mf && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && tu(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), s = sf(If, Tf(e[0], e[1])), e = [0, 100]);
		let l = o({
			...this.options,
			keyframes: e
		});
		i === "mirror" && (c = o({
			...this.options,
			keyframes: [...e].reverse(),
			velocity: -a
		})), l.calculatedDuration === null && (l.calculatedDuration = Nf(l));
		let { calculatedDuration: u } = l, d = u + r, f = d * (n + 1) - r;
		return {
			generator: l,
			mirroredGenerator: c,
			mapPercentToKeyframes: s,
			calculatedDuration: u,
			resolvedDuration: d,
			totalDuration: f
		};
	}
	onPostResolved() {
		let { autoplay: e = !0 } = this.options;
		this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
	}
	tick(e, t = !1) {
		let { resolved: n } = this;
		if (!n) {
			let { keyframes: e } = this.options;
			return {
				done: !0,
				value: e[e.length - 1]
			};
		}
		let { finalKeyframe: r, generator: i, mirroredGenerator: a, mapPercentToKeyframes: o, keyframes: s, calculatedDuration: c, totalDuration: l, resolvedDuration: u } = n;
		if (this.startTime === null) return i.next(0);
		let { delay: d, repeat: f, repeatType: p, repeatDelay: m, onUpdate: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - l / this.speed, this.startTime)), t ? this.currentTime = e : this.holdTime === null ? this.currentTime = Math.round(e - this.startTime) * this.speed : this.currentTime = this.holdTime;
		let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1), _ = this.speed >= 0 ? g < 0 : g > l;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = l);
		let v = this.currentTime, y = i;
		if (f) {
			let e = Math.min(this.currentTime, l) / u, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, f + 1), t % 2 && (p === "reverse" ? (n = 1 - n, m && (n -= m / u)) : p === "mirror" && (y = a)), v = fu(0, 1, n) * u;
		}
		let b = _ ? {
			done: !1,
			value: s[0]
		} : y.next(v);
		o && (b.value = o(b.value));
		let { done: x } = b;
		!_ && c !== null && (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && r !== void 0 && (b.value = kl(s, this.options, r)), h && h(b.value), S && this.finish(), b;
	}
	get duration() {
		let { resolved: e } = this;
		return e ? yl(e.calculatedDuration) : 0;
	}
	get time() {
		return yl(this.currentTime);
	}
	set time(e) {
		e = vl(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		this.playbackSpeed = e, t && (this.time = yl(this.currentTime));
	}
	play() {
		if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
			this.pendingPlayState = "running";
			return;
		}
		if (this.isStopped) return;
		let { driver: e = Pf, onPlay: t, startTime: n } = this.options;
		this.driver ||= e((e) => this.tick(e)), t && t();
		let r = this.driver.now();
		this.holdTime === null ? this.startTime ? this.state === "finished" && (this.startTime = r) : this.startTime = n ?? this.calcStartTime() : this.startTime = r - this.holdTime, this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		if (!this._resolved) {
			this.pendingPlayState = "paused";
			return;
		}
		this.state = "paused", this.holdTime = this.currentTime ?? 0;
	}
	complete() {
		this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.teardown(), this.state = "finished";
		let { onComplete: e } = this.options;
		e && e();
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
}, Rf = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), zf = 10, Bf = (e, t) => {
	let n = "", r = Math.max(Math.round(t / zf), 2);
	for (let t = 0; t < r; t++) n += e(cf(0, r - 1, t)) + ", ";
	return `linear(${n.substring(0, n.length - 2)})`;
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs
function Vf(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs
var Hf = { linearEasing: void 0 };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs
function Uf(e, t) {
	let n = Vf(e);
	return () => Hf[t] ?? n();
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs
var Wf = /*@__PURE__*/ Uf(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing");
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function Gf(e) {
	return !!(typeof e == "function" && Wf() || !e || typeof e == "string" && (e in qf || Wf()) || nf(e) || Array.isArray(e) && e.every(Gf));
}
var Kf = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, qf = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Kf([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Kf([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Kf([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Kf([
		.33,
		1.53,
		.69,
		.99
	])
};
function Jf(e, t) {
	if (e) return typeof e == "function" && Wf() ? Bf(e, t) : nf(e) ? Kf(e) : Array.isArray(e) ? e.map((e) => Jf(e, t) || qf.easeOut) : qf[e];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs
function Yf(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeInOut", times: c } = {}) {
	let l = { [t]: n };
	c && (l.offset = c);
	let u = Jf(s, i);
	return Array.isArray(u) && (l.easing = u), e.animate(l, {
		delay: r,
		duration: i,
		easing: Array.isArray(u) ? "linear" : u,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	});
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs
function Xf(e, t) {
	e.timeline = t, e.onfinish = null;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var Zf = /*@__PURE__*/ Vf(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Qf = 10, $f = 2e4;
function ep(e) {
	return Dd(e.type) || e.type === "spring" || !Gf(e.ease);
}
function tp(e, t) {
	let n = new Lf({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0
	}), r = {
		done: !1,
		value: e[0]
	}, i = [], a = 0;
	for (; !r.done && a < $f;) r = n.sample(a), i.push(r.value), a += Qf;
	return {
		times: void 0,
		keyframes: i,
		duration: a - Qf,
		ease: "linear"
	};
}
var np = {
	anticipate: Jl,
	backInOut: ql,
	circInOut: Zl
};
function rp(e) {
	return e in np;
}
var ip = class extends Fd {
	constructor(e) {
		super(e);
		let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
		this.resolver = new Ed(i, (e, t) => this.onKeyframesResolved(e, t), t, n, r), this.resolver.scheduleResolve();
	}
	initPlayback(e, t) {
		let { duration: n = 300, times: r, ease: i, type: a, motionValue: o, name: s, startTime: c } = this.options;
		if (!o.owner?.current) return !1;
		if (typeof i == "string" && Wf() && rp(i) && (i = np[i]), ep(this.options)) {
			let { onComplete: t, onUpdate: o, motionValue: s, element: c, ...l } = this.options, u = tp(e, l);
			e = u.keyframes, e.length === 1 && (e[1] = e[0]), n = u.duration, r = u.times, i = u.ease, a = "keyframes";
		}
		let l = Yf(o.owner.current, s, e, {
			...this.options,
			duration: n,
			times: r,
			ease: i
		});
		return l.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Xf(l, this.pendingTimeline), this.pendingTimeline = void 0) : l.onfinish = () => {
			let { onComplete: n } = this.options;
			o.set(kl(e, this.options, t)), n && n(), this.cancel(), this.resolveFinishedPromise();
		}, {
			animation: l,
			duration: n,
			times: r,
			type: a,
			ease: i,
			keyframes: e
		};
	}
	get duration() {
		let { resolved: e } = this;
		if (!e) return 0;
		let { duration: t } = e;
		return yl(t);
	}
	get time() {
		let { resolved: e } = this;
		if (!e) return 0;
		let { animation: t } = e;
		return yl(t.currentTime || 0);
	}
	set time(e) {
		let { resolved: t } = this;
		if (!t) return;
		let { animation: n } = t;
		n.currentTime = vl(e);
	}
	get speed() {
		let { resolved: e } = this;
		if (!e) return 1;
		let { animation: t } = e;
		return t.playbackRate;
	}
	set speed(e) {
		let { resolved: t } = this;
		if (!t) return;
		let { animation: n } = t;
		n.playbackRate = e;
	}
	get state() {
		let { resolved: e } = this;
		if (!e) return "idle";
		let { animation: t } = e;
		return t.playState;
	}
	get startTime() {
		let { resolved: e } = this;
		if (!e) return null;
		let { animation: t } = e;
		return t.startTime;
	}
	attachTimeline(e) {
		if (!this._resolved) this.pendingTimeline = e;
		else {
			let { resolved: t } = this;
			if (!t) return Al;
			let { animation: n } = t;
			Xf(n, e);
		}
		return Al;
	}
	play() {
		if (this.isStopped) return;
		let { resolved: e } = this;
		if (!e) return;
		let { animation: t } = e;
		t.playState === "finished" && this.updateFinishedPromise(), t.play();
	}
	pause() {
		let { resolved: e } = this;
		if (!e) return;
		let { animation: t } = e;
		t.pause();
	}
	stop() {
		if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
		this.resolveFinishedPromise(), this.updateFinishedPromise();
		let { resolved: e } = this;
		if (!e) return;
		let { animation: t, keyframes: n, duration: r, type: i, ease: a, times: o } = e;
		if (t.playState === "idle" || t.playState === "finished") return;
		if (this.time) {
			let { motionValue: e, onUpdate: t, onComplete: s, element: c, ...l } = this.options, u = new Lf({
				...l,
				keyframes: n,
				duration: r,
				type: i,
				ease: a,
				times: o,
				isGenerator: !0
			}), d = vl(this.time);
			e.setWithVelocity(u.sample(d - Qf).value, u.sample(d).value, Qf);
		}
		let { onStop: s } = this.options;
		s && s(), this.cancel();
	}
	complete() {
		let { resolved: e } = this;
		e && e.animation.finish();
	}
	cancel() {
		let { resolved: e } = this;
		e && e.animation.cancel();
	}
	static supports(e) {
		let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
		return Zf() && n && Rf.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && i !== "mirror" && a !== 0 && o !== "inertia";
	}
}, ap = Vf(() => window.ScrollTimeline !== void 0), op = class {
	constructor(e) {
		this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
	}
	then(e, t) {
		return Promise.all(this.animations).then(e).catch(t);
	}
	getAll(e) {
		return this.animations[0][e];
	}
	setAll(e, t) {
		for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t;
	}
	attachTimeline(e, t) {
		let n = this.animations.map((n) => ap() && n.attachTimeline ? n.attachTimeline(e) : t(n));
		return () => {
			n.forEach((e, t) => {
				e && e(), this.animations[t].stop();
			});
		};
	}
	get time() {
		return this.getAll("time");
	}
	set time(e) {
		this.setAll("time", e);
	}
	get speed() {
		return this.getAll("speed");
	}
	set speed(e) {
		this.setAll("speed", e);
	}
	get startTime() {
		return this.getAll("startTime");
	}
	get duration() {
		let e = 0;
		for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
		return e;
	}
	runAll(e) {
		this.animations.forEach((t) => t[e]());
	}
	play() {
		this.runAll("play");
	}
	pause() {
		this.runAll("pause");
	}
	cancel() {
		this.runAll("cancel");
	}
	complete() {
		this.runAll("complete");
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function sp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: s, from: c, elapsed: l, ...u }) {
	return !!Object.keys(u).length;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var cp = (e, t, n, r = {}, i, a) => (o) => {
	let s = Tl(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= vl(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	sp(s) || (u = {
		...u,
		...wl(e, u)
	}), u.duration &&= vl(u.duration), u.repeatDelay &&= vl(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), (Dl.current || El.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), d && !a && t.get() !== void 0) {
		let e = kl(u.keyframes, s);
		if (e !== void 0) return Y.update(() => {
			u.onUpdate(e), u.onComplete();
		}), new op([]);
	}
	return !a && ip.supports(u) ? new ip(u) : new Lf(u);
}, lp = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), up = (e) => cl(e) ? e[e.length - 1] || 0 : e;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs
function dp(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function fp(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs
var pp = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return dp(this.subscriptions, e), () => fp(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, mp = 30, hp = (e) => !isNaN(parseFloat(e)), gp = { current: void 0 }, _p = class {
	constructor(e, t = {}) {
		this.version = "11.11.13", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
			let n = Ad.now();
			this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = Ad.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = hp(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && al(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new pp());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), Y.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e, t = !0) {
		!t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return gp.current && gp.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = Ad.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > mp) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, mp);
		return Id(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function vp(e, t) {
	return new _p(e, t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs
function yp(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, vp(n));
}
function bp(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = pl(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) yp(e, t, up(i[t]));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var xp = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Sp = "data-" + xp("framerAppearId");
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function Cp(e) {
	return e.props[Sp];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs
var wp = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs
function Tp(e) {
	return !!(wp(e) && e.add);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function Ep(e, t) {
	let n = e.getValue("willChange");
	if (Tp(n)) return n.add(t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function Dp({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Op(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
	r && (a = r);
	let c = [], l = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || l && Dp(l, t)) continue;
		let o = {
			delay: n,
			...Tl(a || {}, t)
		}, u = !1;
		if (window.MotionHandoffAnimation) {
			let n = Cp(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, Y);
				e !== null && (o.startTime = e, u = !0);
			}
		}
		Ep(e, t), r.start(cp(t, r, i, e.shouldReduceMotion && _l.has(t) ? { type: !1 } : o, e, u));
		let d = r.animation;
		d && c.push(d);
	}
	return o && Promise.all(c).then(() => {
		Y.update(() => {
			o && bp(e, o);
		});
	}), c;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function kp(e, t, n = {}) {
	let r = pl(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Op(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Ap(e, t, a + r, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function Ap(e, t, n = 0, r = 0, i = 1, a) {
	let o = [], s = (e.variantChildren.size - 1) * r, c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
	return Array.from(e.variantChildren).sort(jp).forEach((e, r) => {
		e.notify("AnimationStart", t), o.push(kp(e, t, {
			...a,
			delay: n + c(r)
		}).then(() => e.notify("AnimationComplete", t)));
	}), Promise.all(o);
}
function jp(e, t) {
	return e.sortNodePosition(t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function Mp(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => kp(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = kp(e, t, n);
	else {
		let i = typeof t == "function" ? pl(e, t, n.custom) : t;
		r = Promise.all(Op(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/get-variant-context.mjs
var Np = hl.length;
function Pp(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Pp(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Np; n++) {
		let r = hl[n], i = e.props[r];
		(ul(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/animation-state.mjs
var Fp = [...ml].reverse(), Ip = ml.length;
function Lp(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Mp(e, t, n)));
}
function Rp(e) {
	let t = Lp(e), n = Vp(), r = !0, i = (t) => (n, r) => {
		let i = pl(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function a(n) {
		t = n(e);
	}
	function o(a) {
		let { props: o } = e, s = Pp(e.parent) || {}, c = [], l = /* @__PURE__ */ new Set(), u = {}, d = Infinity;
		for (let t = 0; t < Ip; t++) {
			let f = Fp[t], p = n[f], m = o[f] === void 0 ? s[f] : o[f], h = ul(m), g = f === a ? p.isActive : null;
			g === !1 && (d = t);
			let _ = m === s[f] && m !== o[f] && h;
			if (_ && r && e.manuallyAnimateOnMount && (_ = !1), p.protectedKeys = { ...u }, !p.isActive && g === null || !m && !p.prevProp || sl(m) || typeof m == "boolean") continue;
			let v = zp(p.prevProp, m), y = v || f === a && p.isActive && !_ && h || t > d && h, b = !1, x = Array.isArray(m) ? m : [m], S = x.reduce(i(f), {});
			g === !1 && (S = {});
			let { prevResolvedValues: C = {} } = p, w = {
				...C,
				...S
			}, T = (t) => {
				y = !0, l.has(t) && (b = !0, l.delete(t)), p.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in w) {
				let t = S[e], n = C[e];
				if (u.hasOwnProperty(e)) continue;
				let r = !1;
				r = cl(t) && cl(n) ? !ll(t, n) : t !== n, r ? t == null ? l.add(e) : T(e) : t !== void 0 && l.has(e) ? T(e) : p.protectedKeys[e] = !0;
			}
			p.prevProp = m, p.prevResolvedValues = S, p.isActive && (u = {
				...u,
				...S
			}), r && e.blockInitialAnimation && (y = !1), y && (!(_ && v) || b) && c.push(...x.map((e) => ({
				animation: e,
				options: { type: f }
			})));
		}
		if (l.size) {
			let t = {};
			l.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), c.push({ animation: t });
		}
		let f = !!c.length;
		return r && (o.initial === !1 || o.initial === o.animate) && !e.manuallyAnimateOnMount && (f = !1), r = !1, f ? t(c) : Promise.resolve();
	}
	function s(t, r) {
		var i;
		if (n[t].isActive === r) return Promise.resolve();
		(i = e.variantChildren) == null || i.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let a = o(t);
		for (let e in n) n[e].protectedKeys = {};
		return a;
	}
	return {
		animateChanges: o,
		setActive: s,
		setAnimateFunction: a,
		getState: () => n,
		reset: () => {
			n = Vp(), r = !0;
		}
	};
}
function zp(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !ll(t, e) : !1;
}
function Bp(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Vp() {
	return {
		animate: Bp(!0),
		whileInView: Bp(),
		whileHover: Bp(),
		whileTap: Bp(),
		whileDrag: Bp(),
		whileFocus: Bp(),
		exit: Bp()
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/Feature.mjs
var Hp = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, Up = class extends Hp {
	constructor(e) {
		super(e), e.animationState ||= Rp(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		sl(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		var e;
		this.node.animationState.reset(), (e = this.unmountControls) == null || e.call(this);
	}
}, Wp = 0, Gp = {
	animation: { Feature: Up },
	exit: { Feature: class extends Hp {
		constructor() {
			super(...arguments), this.id = Wp++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => t(this.id));
		}
		mount() {
			let { register: e } = this.node.presenceContext || {};
			e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
}, Kp = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/event-info.mjs
function qp(e, t = "page") {
	return { point: {
		x: e[`${t}X`],
		y: e[`${t}Y`]
	} };
}
var Jp = (e) => (t) => Kp(t) && e(t, qp(t));
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/add-dom-event.mjs
function Yp(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/add-pointer-event.mjs
function Xp(e, t, n, r) {
	return Yp(e, t, Jp(n), r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/distance.mjs
var Zp = (e, t) => Math.abs(e - t);
function Qp(e, t) {
	let n = Zp(e.x, t.x), r = Zp(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/pan/PanSession.mjs
var $p = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let e = nm(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Qp(e.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = Il;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastMoveEventInfo = em(t, this.transformPagePoint), Y.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = nm(e.type === "pointercancel" ? this.lastMoveEventInfo : em(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Kp(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window;
		let a = em(qp(e), this.transformPagePoint), { point: o } = a, { timestamp: s } = Il;
		this.history = [{
			...o,
			timestamp: s
		}];
		let { onSessionStart: c } = t;
		c && c(e, nm(a, this.history)), this.removeListeners = sf(Xp(this.contextWindow, "pointermove", this.handlePointerMove), Xp(this.contextWindow, "pointerup", this.handlePointerUp), Xp(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), Fl(this.updatePoint);
	}
};
function em(e, t) {
	return t ? { point: t(e.point) } : e;
}
function tm(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function nm({ point: e }, t) {
	return {
		point: e,
		delta: tm(e, im(t)),
		offset: tm(e, rm(t)),
		velocity: am(t, .1)
	};
}
function rm(e) {
	return e[0];
}
function im(e) {
	return e[e.length - 1];
}
function am(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = im(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > vl(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	let a = yl(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function om(e) {
	let t = null;
	return () => t === null ? (t = e, () => {
		t = null;
	}) : !1;
}
var sm = om("dragHorizontal"), cm = om("dragVertical");
function lm(e) {
	let t = !1;
	if (e === "y") t = cm();
	else if (e === "x") t = sm();
	else {
		let e = sm(), n = cm();
		e && n ? t = () => {
			e(), n();
		} : (e && e(), n && n());
	}
	return t;
}
function um() {
	let e = lm(!0);
	return e ? (e(), !1) : !0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/is-ref-object.mjs
function dm(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var fm = .9999, pm = 1.0001, mm = -.01, hm = .01;
function gm(e) {
	return e.max - e.min;
}
function _m(e, t, n) {
	return Math.abs(e - t) <= n;
}
function vm(e, t, n, r = .5) {
	e.origin = r, e.originPoint = Z(t.min, t.max, e.origin), e.scale = gm(n) / gm(t), e.translate = Z(n.min, n.max, e.origin) - e.originPoint, (e.scale >= fm && e.scale <= pm || isNaN(e.scale)) && (e.scale = 1), (e.translate >= mm && e.translate <= hm || isNaN(e.translate)) && (e.translate = 0);
}
function ym(e, t, n, r) {
	vm(e.x, t.x, n.x, r ? r.originX : void 0), vm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function bm(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + gm(t);
}
function xm(e, t, n) {
	bm(e.x, t.x, n.x), bm(e.y, t.y, n.y);
}
function Sm(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + gm(t);
}
function Cm(e, t, n) {
	Sm(e.x, t.x, n.x), Sm(e.y, t.y, n.y);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function wm(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? Z(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)), e;
}
function Tm(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function Em(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: Tm(e.x, n, i),
		y: Tm(e.y, t, r)
	};
}
function Dm(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Om(e, t) {
	return {
		x: Dm(e.x, t.x),
		y: Dm(e.y, t.y)
	};
}
function km(e, t) {
	let n = .5, r = gm(e), i = gm(t);
	return i > r ? n = cf(t.min, t.max - r, e.min) : r > i && (n = cf(e.min, e.max - i, t.min)), fu(0, 1, n);
}
function Am(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var jm = .35;
function Mm(e = jm) {
	return e === !1 ? e = 0 : e === !0 && (e = jm), {
		x: Nm(e, "left", "right"),
		y: Nm(e, "top", "bottom")
	};
}
function Nm(e, t, n) {
	return {
		min: Pm(e, t),
		max: Pm(e, n)
	};
}
function Pm(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs
var Fm = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Im = () => ({
	x: Fm(),
	y: Fm()
}), Lm = () => ({
	min: 0,
	max: 0
}), Q = () => ({
	x: Lm(),
	y: Lm()
});
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/each-axis.mjs
function Rm(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs
function zm({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Bm({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Vm(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs
function Hm(e) {
	return e === void 0 || e === 1;
}
function Um({ scale: e, scaleX: t, scaleY: n }) {
	return !Hm(e) || !Hm(t) || !Hm(n);
}
function Wm(e) {
	return Um(e) || Gm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Gm(e) {
	return Km(e.x) || Km(e.y);
}
function Km(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function qm(e, t, n) {
	return n + t * (e - n);
}
function Jm(e, t, n, r, i) {
	return i !== void 0 && (e = qm(e, i, r)), qm(e, n, r) + t;
}
function Ym(e, t = 0, n = 1, r, i) {
	e.min = Jm(e.min, t, n, r, i), e.max = Jm(e.max, t, n, r, i);
}
function Xm(e, { x: t, y: n }) {
	Ym(e.x, t.translate, t.scale, t.originPoint), Ym(e.y, n.translate, n.scale, n.originPoint);
}
var Zm = .999999999999, Qm = 1.0000000000001;
function $m(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && nh(e, {
			x: -a.scroll.offset.x,
			y: -a.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, Xm(e, o)), r && Wm(a.latestValues) && nh(e, a.latestValues));
	}
	t.x < Qm && t.x > Zm && (t.x = 1), t.y < Qm && t.y > Zm && (t.y = 1);
}
function eh(e, t) {
	e.min += t, e.max += t;
}
function th(e, t, n, r, i = .5) {
	Ym(e, t, n, Z(e.min, e.max, i), r);
}
function nh(e, t) {
	th(e.x, t.x, t.scaleX, t.scale, t.originX), th(e.y, t.y, t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs
function rh(e, t) {
	return zm(Vm(e.getBoundingClientRect(), t));
}
function ih(e, t, n) {
	let r = rh(e, n), { scroll: i } = t;
	return i && (eh(r.x, i.offset.x), eh(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/get-context-window.mjs
var ah = ({ current: e }) => e ? e.ownerDocument.defaultView : null, oh = /* @__PURE__ */ new WeakMap(), sh = class {
	constructor(e) {
		this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Q(), this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1 } = {}) {
		let { presenceContext: n } = this.visualElement;
		if (n && n.isPresent === !1) return;
		let r = (e) => {
			let { dragSnapToOrigin: n } = this.getProps();
			n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(qp(e, "page").point);
		}, i = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = lm(n), !this.openGlobalLock)) return;
			this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Rm((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (vu.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = gm(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && Y.postRender(() => i(e, t)), Ep(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, a = (e, t) => {
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openGlobalLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = lh(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && a(e, t);
		}, o = (e, t) => this.stop(e, t), s = () => Rm((e) => this.getAnimationState(e) === "paused" && this.getAxisMotionValue(e).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
		this.panSession = new $p(e, {
			onSessionStart: r,
			onStart: i,
			onMove: a,
			onSessionEnd: o,
			resumeAnimation: s
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: c,
			contextWindow: ah(this.visualElement)
		});
	}
	stop(e, t) {
		let n = this.isDragging;
		if (this.cancel(), !n) return;
		let { velocity: r } = t;
		this.startAnimation(r);
		let { onDragEnd: i } = this.getProps();
		i && Y.postRender(() => i(e, t));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: n } = this.getProps();
		!n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), t && t.setActive("whileDrag", !1);
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !ch(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = wm(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && dm(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = Em(n.layoutBox, e) : this.constraints = !1, this.elastic = Mm(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Rm((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = Am(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !dm(e)) return !1;
		let n = e.current;
		tu(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = ih(n, r.root, this.visualElement.getTransformPagePoint()), a = Om(r.layout.layoutBox, i);
		if (t) {
			let e = t(Bm(a));
			this.hasMutatedConstraints = !!e, e && (a = zm(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Rm((o) => {
			if (!ch(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			a && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return Ep(this.visualElement, e), n.start(cp(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Rm((e) => this.getAxisMotionValue(e).stop());
	}
	pauseAnimation() {
		Rm((e) => this.getAxisMotionValue(e).animation?.pause());
	}
	getAnimationState(e) {
		return this.getAxisMotionValue(e).animation?.state;
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		Rm((t) => {
			let { drag: n } = this.getProps();
			if (!ch(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t];
				i.set(e[t] - Z(n, a, .5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!dm(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Rm((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = km({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Rm((t) => {
			if (!ch(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(Z(i, a, r[t]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		oh.set(this.visualElement, this);
		let e = this.visualElement.current, t = Xp(e, "pointerdown", (e) => {
			let { drag: t, dragListener: n = !0 } = this.getProps();
			t && n && this.start(e);
		}), n = () => {
			let { dragConstraints: e } = this.getProps();
			dm(e) && e.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: r } = this.visualElement, i = r.addEventListener("measure", n);
		r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), Y.read(n);
		let a = Yp(window, "resize", () => this.scalePositionWithinConstraints()), o = r.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Rm((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			a(), t(), i(), o && o();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = jm, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function ch(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function lh(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/index.mjs
var uh = class extends Hp {
	constructor(e) {
		super(e), this.removeGroupControls = Al, this.removeListeners = Al, this.controls = new sh(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Al;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, dh = (e) => (t, n) => {
	e && Y.postRender(() => e(t, n));
}, fh = class extends Hp {
	constructor() {
		super(...arguments), this.removePointerDownListener = Al;
	}
	onPointerDown(e) {
		this.session = new $p(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: ah(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: dh(e),
			onStart: dh(t),
			onMove: n,
			onEnd: (e, t) => {
				delete this.session, r && Y.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = Xp(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, ph = v(null);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function mh() {
	let e = C(ph);
	if (e === null) return [!0, null];
	let { isPresent: t, onExitComplete: n, register: r } = e, i = T();
	w(() => r(i), []);
	let a = S(() => n && n(i), [i, n]);
	return !t && n ? [!1, a] : [!0];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/LayoutGroupContext.mjs
var hh = v({}), gh = v({}), _h = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function vh(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var yh = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (X.test(e)) e = parseFloat(e);
	else return e;
	return `${vh(e, t.target.x)}% ${vh(e, t.target.y)}%`;
} }, bh = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = fd.parse(e);
	if (i.length > 5) return r;
	let a = fd.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = Z(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, xh = {};
function Sh(e) {
	Object.assign(xh, e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/microtask.mjs
var { schedule: Ch, cancel: wh } = Pl(queueMicrotask, !1), Th = class extends g {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		Sh(Dh), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			onExitComplete: () => this.safeToRemove()
		})), _h.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, a = n.projection;
		return a ? (a.isPresent = i, r || e.layoutDependency !== t || t === void 0 ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || Y.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: e } = this.props.visualElement;
		e && (e.root.didUpdate(), Ch.postRender(() => {
			!e.currentAnimation && e.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function Eh(e) {
	let [t, n] = mh(), r = C(hh);
	return M(Th, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: C(gh),
		isPresent: t,
		safeToRemove: n
	});
}
var Dh = {
	borderRadius: {
		...yh,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: yh,
	borderTopRightRadius: yh,
	borderBottomLeftRadius: yh,
	borderBottomRightRadius: yh,
	boxShadow: bh
}, Oh = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], kh = Oh.length, Ah = (e) => typeof e == "string" ? parseFloat(e) : e, jh = (e) => typeof e == "number" || X.test(e);
function Mh(e, t, n, r, i, a) {
	i ? (e.opacity = Z(0, n.opacity === void 0 ? 1 : n.opacity, Ph(r)), e.opacityExit = Z(t.opacity === void 0 ? 1 : t.opacity, 0, Fh(r))) : a && (e.opacity = Z(t.opacity === void 0 ? 1 : t.opacity, n.opacity === void 0 ? 1 : n.opacity, r));
	for (let i = 0; i < kh; i++) {
		let a = `border${Oh[i]}Radius`, o = Nh(t, a), s = Nh(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || jh(o) === jh(s) ? (e[a] = Math.max(Z(Ah(o), Ah(s), r), 0), (vu.test(s) || vu.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function Nh(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Ph = /*@__PURE__*/ Ih(0, .5, Xl), Fh = /*@__PURE__*/ Ih(.5, .95, Al);
function Ih(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(cf(e, t, r));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/copy.mjs
function Lh(e, t) {
	e.min = t.min, e.max = t.max;
}
function Rh(e, t) {
	Lh(e.x, t.x), Lh(e.y, t.y);
}
function zh(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function Bh(e, t, n, r, i) {
	return e -= t, e = qm(e, 1 / n, r), i !== void 0 && (e = qm(e, 1 / i, r)), e;
}
function Vh(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (vu.test(t) && (t = parseFloat(t), t = Z(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = Z(a.min, a.max, r);
	e === a && (s -= t), e.min = Bh(e.min, t, n, s, i), e.max = Bh(e.max, t, n, s, i);
}
function Hh(e, t, [n, r, i], a, o) {
	Vh(e, t[n], t[r], t[i], t.scale, a, o);
}
var Uh = [
	"x",
	"scaleX",
	"originX"
], Wh = [
	"y",
	"scaleY",
	"originY"
];
function Gh(e, t, n, r) {
	Hh(e.x, t, Uh, n ? n.x : void 0, r ? r.x : void 0), Hh(e.y, t, Wh, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/utils.mjs
function Kh(e) {
	return e.translate === 0 && e.scale === 1;
}
function qh(e) {
	return Kh(e.x) && Kh(e.y);
}
function Jh(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Yh(e, t) {
	return Jh(e.x, t.x) && Jh(e.y, t.y);
}
function Xh(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Zh(e, t) {
	return Xh(e.x, t.x) && Xh(e.y, t.y);
}
function Qh(e) {
	return gm(e.x) / gm(e.y);
}
function $h(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/shared/stack.mjs
var eg = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		dp(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if (fp(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		let t = this.members.findIndex((t) => e === t);
		if (t === 0) return !1;
		let n;
		for (let e = t; e >= 0; e--) {
			let t = this.members[e];
			if (t.isPresent !== !1) {
				n = t;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
			let { crossfade: r } = e.options;
			r === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			let { options: t, resumingFrom: n } = e;
			t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => {
			e.instance && e.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/transform.mjs
function tg(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var ng = (e, t) => e.depth - t.depth, rg = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		dp(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		fp(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(ng), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function ig(e) {
	let t = wp(e) ? e.get() : e;
	return lp(t) ? t.toValue() : t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/delay.mjs
function ag(e, t) {
	let n = Ad.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (Fl(r), e(a - t));
	};
	return Y.read(r, !0), () => Fl(r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function og(e) {
	return e instanceof SVGElement && e.tagName !== "svg";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs
function sg(e, t, n) {
	let r = wp(e) ? e : vp(e);
	return r.start(cp("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/node/create-projection-node.mjs
var cg = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0
}, lg = typeof window < "u" && window.MotionDebug !== void 0, ug = [
	"",
	"X",
	"Y",
	"Z"
], dg = { visibility: "hidden" }, fg = 1e3, pg = 0;
function mg(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function hg(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Cp(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", Y, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && hg(r);
}
function gg({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = pg++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, lg && (cg.totalNodes = cg.resolvedTargetDeltas = cg.recalculatedProjection = 0), this.nodes.forEach(yg), this.nodes.forEach(Eg), this.nodes.forEach(Dg), this.nodes.forEach(bg), lg && window.MotionDebug.record(cg);
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new rg());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new pp()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t, n = this.root.hasTreeAnimated) {
			if (this.instance) return;
			this.isSVG = og(t), this.instance = t;
			let { layoutId: r, layout: i, visualElement: a } = this.options;
			if (a && !a.current && a.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (i || r) && (this.isLayoutDirty = !0), e) {
				let n, r = () => this.root.updateBlockedByResize = !1;
				e(t, () => {
					this.root.updateBlockedByResize = !0, n && n(), n = ag(r, 250), _h.hasAnimatedSinceResize && (_h.hasAnimatedSinceResize = !1, this.nodes.forEach(Tg));
				});
			}
			r && this.root.registerSharedNode(r, this), this.options.animate !== !1 && a && (r || i) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let i = this.options.transition || a.getDefaultTransition() || Pg, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = a.getProps(), c = !this.targetLayout || !Zh(this.targetLayout, r) || n, l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, l);
					let t = {
						...Tl(i, "layout"),
						onPlay: o,
						onComplete: s
					};
					(a.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t);
				} else t || Tg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Fl(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Og), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Sg);
				return;
			}
			this.isUpdating || this.nodes.forEach(Cg), this.isUpdating = !1, this.nodes.forEach(wg), this.nodes.forEach(_g), this.nodes.forEach(vg), this.clearAllSnapshots();
			let e = Ad.now();
			Il.delta = fu(0, 1e3 / 60, e - Il.timestamp), Il.timestamp = e, Il.isProcessing = !0, Ll.update.process(Il), Ll.preRender.process(Il), Ll.render.process(Il), Il.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, Ch.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(xg), this.sharedNodes.forEach(kg);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Y.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			Y.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = Q(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !qh(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && (t || Wm(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Rg(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return Q();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Bg))) {
				let { scroll: e } = this.root;
				e && (eh(t.x, e.offset.x), eh(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = Q();
			if (Rh(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Rh(t, e), eh(t.x, i.offset.x), eh(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1) {
			let n = Q();
			Rh(n, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && nh(n, {
					x: -r.scroll.offset.x,
					y: -r.scroll.offset.y
				}), Wm(r.latestValues) && nh(n, r.latestValues);
			}
			return Wm(this.latestValues) && nh(n, this.latestValues), n;
		}
		removeTransform(e) {
			let t = Q();
			Rh(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!n.instance || !Wm(n.latestValues)) continue;
				Um(n.latestValues) && n.updateSnapshot();
				let r = Q();
				Rh(r, n.measurePageBox()), Gh(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
			}
			return Wm(this.latestValues) && Gh(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 ? !0 : e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Il.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!(!this.layout || !(r || i))) {
				if (this.resolvedRelativeTargetAt = Il.timestamp, !this.targetDelta && !this.relativeTarget) {
					let e = this.getClosestProjectingParent();
					e && e.layout && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Q(), this.relativeTargetOrigin = Q(), Cm(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Rh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = Q(), this.targetWithTransforms = Q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), xm(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Rh(this.target, this.layout.layoutBox), Xm(this.target, this.targetDelta)) : Rh(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						let e = this.getClosestProjectingParent();
						e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Q(), this.relativeTargetOrigin = Q(), Cm(this.relativeTargetOrigin, this.target, e.target), Rh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
					}
					lg && cg.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Um(this.parent.latestValues) || Gm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === Il.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Rh(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			$m(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Q());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (zh(this.prevProjectionDelta.x, this.projectionDelta.x), zh(this.prevProjectionDelta.y, this.projectionDelta.y)), ym(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !$h(this.projectionDelta.x, this.prevProjectionDelta.x) || !$h(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), lg && cg.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			var t;
			if ((t = this.options.visualElement) == null || t.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = Im(), this.projectionDelta = Im(), this.projectionDeltaWithTransform = Im();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = Im();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = Q(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Ng));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Ag(a.x, e.x, n), Ag(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Cm(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Mg(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Yh(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= Q(), Rh(d, this.relativeTarget)), s && (this.animationValues = i, Mh(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation &&= (Fl(this.pendingAnimation), void 0), this.pendingAnimation = Y.update(() => {
				_h.hasAnimatedSinceResize = !0, this.currentAnimation = sg(0, fg, {
					...e,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onComplete: () => {
						e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(fg), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && zg(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || Q();
					let t = gm(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = gm(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Rh(t, n), nh(t, i), ym(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new eg()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return e ? e.lead === this : !0;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && mg("z", e, r, this.animationValues);
			for (let t = 0; t < ug.length; t++) mg(`rotate${ug[t]}`, e, r, this.animationValues), mg(`skew${ug[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		getProjectionStyles(e) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return dg;
			let t = { visibility: "" }, n = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, t.opacity = "", t.pointerEvents = ig(e?.pointerEvents) || "", t.transform = n ? n(this.latestValues, "") : "none", t;
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				let t = {};
				return this.options.layoutId && (t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, t.pointerEvents = ig(e?.pointerEvents) || ""), this.hasProjected && !Wm(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1), t;
			}
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget(), t.transform = tg(this.projectionDeltaWithTransform, this.treeScale, i), n && (t.transform = n(i, t.transform));
			let { x: a, y: o } = this.projectionDelta;
			t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`, r.animationValues ? t.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : t.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let e in xh) {
				if (i[e] === void 0) continue;
				let { correct: n, applyTo: a } = xh[e], o = t.transform === "none" ? i[e] : n(i[e], r);
				if (a) {
					let e = a.length;
					for (let n = 0; n < e; n++) t[a[n]] = o;
				} else t[e] = o;
			}
			return this.options.layoutId && (t.pointerEvents = r === this ? ig(e?.pointerEvents) || "" : "none"), t;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Sg), this.root.sharedNodes.clear();
		}
	};
}
function _g(e) {
	e.updateLayout();
}
function vg(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		i === "size" ? Rm((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = gm(r);
			r.min = n[e].min, r.max = r.min + i;
		}) : zg(i, t.layoutBox, n) && Rm((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = gm(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Im();
		ym(o, n, t.layoutBox);
		let s = Im();
		a ? ym(s, e.applyTransform(r, !0), t.measuredBox) : ym(s, n, t.layoutBox);
		let c = !qh(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = Q();
					Cm(o, t.layoutBox, i.layoutBox);
					let s = Q();
					Cm(s, n, a.layoutBox), Zh(o, s) || (l = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeTargetChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function yg(e) {
	lg && cg.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function bg(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function xg(e) {
	e.clearSnapshot();
}
function Sg(e) {
	e.clearMeasurements();
}
function Cg(e) {
	e.isLayoutDirty = !1;
}
function wg(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Tg(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Eg(e) {
	e.resolveTargetDelta();
}
function Dg(e) {
	e.calcProjection();
}
function Og(e) {
	e.resetSkewAndRotation();
}
function kg(e) {
	e.removeLeadSnapshot();
}
function Ag(e, t, n) {
	e.translate = Z(t.translate, 0, n), e.scale = Z(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function jg(e, t, n, r) {
	e.min = Z(t.min, n.min, r), e.max = Z(t.max, n.max, r);
}
function Mg(e, t, n, r) {
	jg(e.x, t.x, n.x, r), jg(e.y, t.y, n.y, r);
}
function Ng(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Pg = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, Fg = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ig = Fg("applewebkit/") && !Fg("chrome/") ? Math.round : Al;
function Lg(e) {
	e.min = Ig(e.min), e.max = Ig(e.max);
}
function Rg(e) {
	Lg(e.x), Lg(e.y);
}
function zg(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !_m(Qh(t), Qh(n), .2);
}
function Bg(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var Vg = gg({
	attachResizeListener: (e, t) => Yp(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), Hg = { current: void 0 }, Ug = gg({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Hg.current) {
			let e = new Vg({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Hg.current = e;
		}
		return Hg.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Wg = {
	pan: { Feature: fh },
	drag: {
		Feature: uh,
		ProjectionNode: Ug,
		MeasureLayout: Eh
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/hover.mjs
function Gg(e, t) {
	let n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd";
	return Xp(e.current, n, (n, i) => {
		if (n.pointerType === "touch" || um()) return;
		let a = e.getProps();
		e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
		let o = a[r];
		o && Y.postRender(() => o(n, i));
	}, { passive: !e.getProps()[r] });
}
var Kg = class extends Hp {
	mount() {
		this.unmount = sf(Gg(this.node, !0), Gg(this.node, !1));
	}
	unmount() {}
}, qg = class extends Hp {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = sf(Yp(this.node.current, "focus", () => this.onFocus()), Yp(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
}, Jg = (e, t) => t ? e === t ? !0 : Jg(e, t.parentElement) : !1;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/press.mjs
function Yg(e, t) {
	if (!t) return;
	let n = new PointerEvent("pointer" + e);
	t(n, qp(n));
}
var Xg = class extends Hp {
	constructor() {
		super(...arguments), this.removeStartListeners = Al, this.removeEndListeners = Al, this.removeAccessibleListeners = Al, this.startPointerPress = (e, t) => {
			if (this.isPressing) return;
			this.removeEndListeners();
			let n = this.node.getProps(), r = Xp(window, "pointerup", (e, t) => {
				if (!this.checkPressEnd()) return;
				let { onTap: n, onTapCancel: r, globalTapTarget: i } = this.node.getProps(), a = !i && !Jg(this.node.current, e.target) ? r : n;
				a && Y.update(() => a(e, t));
			}, { passive: !(n.onTap || n.onPointerUp) }), i = Xp(window, "pointercancel", (e, t) => this.cancelPress(e, t), { passive: !(n.onTapCancel || n.onPointerCancel) });
			this.removeEndListeners = sf(r, i), this.startPress(e, t);
		}, this.startAccessiblePress = () => {
			let e = Yp(this.node.current, "keydown", (e) => {
				if (e.key !== "Enter" || this.isPressing) return;
				let t = (e) => {
					e.key !== "Enter" || !this.checkPressEnd() || Yg("up", (e, t) => {
						let { onTap: n } = this.node.getProps();
						n && Y.postRender(() => n(e, t));
					});
				};
				this.removeEndListeners(), this.removeEndListeners = Yp(this.node.current, "keyup", t), Yg("down", (e, t) => {
					this.startPress(e, t);
				});
			}), t = Yp(this.node.current, "blur", () => {
				this.isPressing && Yg("cancel", (e, t) => this.cancelPress(e, t));
			});
			this.removeAccessibleListeners = sf(e, t);
		};
	}
	startPress(e, t) {
		this.isPressing = !0;
		let { onTapStart: n, whileTap: r } = this.node.getProps();
		r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && Y.postRender(() => n(e, t));
	}
	checkPressEnd() {
		return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !um();
	}
	cancelPress(e, t) {
		if (!this.checkPressEnd()) return;
		let { onTapCancel: n } = this.node.getProps();
		n && Y.postRender(() => n(e, t));
	}
	mount() {
		let e = this.node.getProps(), t = Xp(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), n = Yp(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = sf(t, n);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}, Zg = /* @__PURE__ */ new WeakMap(), Qg = /* @__PURE__ */ new WeakMap(), $g = (e) => {
	let t = Zg.get(e.target);
	t && t(e);
}, e_ = (e) => {
	e.forEach($g);
};
function t_({ root: e, ...t }) {
	let n = e || document;
	Qg.has(n) || Qg.set(n, {});
	let r = Qg.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(e_, {
		root: e,
		...t
	})), r[i];
}
function n_(e, t, n) {
	let r = t_(t);
	return Zg.set(e, n), r.observe(e), () => {
		Zg.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/viewport/index.mjs
var r_ = {
	some: 0,
	all: 1
}, i_ = class extends Hp {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : r_[r]
		};
		return n_(this.node.current, a, (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(a_(e, t)) && this.startObserver();
	}
	unmount() {}
};
function a_({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/gestures.mjs
var o_ = {
	inView: { Feature: i_ },
	tap: { Feature: Xg },
	focus: { Feature: qg },
	hover: { Feature: Kg }
}, s_ = { layout: {
	ProjectionNode: Ug,
	MeasureLayout: Eh
} }, c_ = v({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
}), l_ = v({}), u_ = typeof window < "u", d_ = u_ ? D : w, f_ = v({ strict: !1 });
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function p_(e, t, n, r, i) {
	let { visualElement: a } = C(l_), o = C(f_), s = C(ph), c = C(c_).reducedMotion, l = k();
	r ||= o.renderer, !l.current && r && (l.current = r(e, {
		visualState: t,
		parent: a,
		props: n,
		presenceContext: s,
		blockInitialAnimation: s ? s.initial === !1 : !1,
		reducedMotionConfig: c
	}));
	let u = l.current, d = C(gh);
	u && !u.projection && i && (u.type === "html" || u.type === "svg") && m_(l.current, n, i, d);
	let f = k(!1);
	E(() => {
		u && f.current && u.update(n, s);
	});
	let p = n[Sp], m = k(!!p && !window.MotionHandoffIsComplete?.call(window, p) && window.MotionHasOptimisedAnimation?.call(window, p));
	return d_(() => {
		u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), Ch.render(u.render), m.current && u.animationState && u.animationState.animateChanges());
	}), w(() => {
		u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current &&= (queueMicrotask(() => {
			var e;
			(e = window.MotionHandoffMarkAsComplete) == null || e.call(window, p);
		}), !1));
	}), u;
}
function m_(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : h_(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && dm(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		layoutScroll: c,
		layoutRoot: l
	});
}
function h_(e) {
	if (e) return e.options.allowProjection === !1 ? h_(e.parent) : e.projection;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function g_(e, t, n) {
	return S((r) => {
		r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : dm(n) && (n.current = r));
	}, [t]);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function __(e) {
	return sl(e.animate) || hl.some((t) => ul(e[t]));
}
function v_(e) {
	return !!(__(e) || e.variants);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/utils.mjs
function y_(e, t) {
	if (__(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || ul(t) ? t : void 0,
			animate: ul(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/create.mjs
function b_(e) {
	let { initial: t, animate: n } = y_(e, C(l_));
	return O(() => ({
		initial: t,
		animate: n
	}), [x_(t), x_(n)]);
}
function x_(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs
var S_ = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, C_ = {};
for (let e in S_) C_[e] = { isEnabled: (t) => S_[e].some((e) => !!t[e]) };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/load-features.mjs
function w_(e) {
	for (let t in e) C_[t] = {
		...C_[t],
		...e[t]
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/symbol.mjs
var T_ = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/index.mjs
function E_({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
	e && w_(e);
	function a(a, o) {
		let s, c = {
			...C(c_),
			...a,
			layoutId: D_(a)
		}, { isStatic: l } = c, u = b_(a), d = r(a, l);
		if (!l && u_) {
			O_(c, e);
			let n = k_(c);
			s = n.MeasureLayout, u.visualElement = p_(i, d, c, t, n.ProjectionNode);
		}
		return N(l_.Provider, {
			value: u,
			children: [s && u.visualElement ? M(s, {
				visualElement: u.visualElement,
				...c
			}) : null, n(i, a, g_(d, u.visualElement, o), d, l, u.visualElement)]
		});
	}
	let o = b(a);
	return o[T_] = i, o;
}
function D_({ layoutId: e }) {
	let t = C(hh).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function O_(e, t) {
	let n = C(f_).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? eu(!1, t) : tu(!1, t);
	}
}
function k_(e) {
	let { drag: t, layout: n } = C_;
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var A_ = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function j_(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(A_.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs
function M_(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (let t in n) e.style.setProperty(t, n[t]);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var N_ = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs
function P_(e, t, n, r) {
	M_(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(N_.has(n) ? n : xp(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function F_(e, { layout: t, layoutId: n }) {
	return _l.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!xh[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function I_(e, t, n) {
	let { style: r } = e, i = {};
	for (let a in r) (wp(r[a]) || t.style && wp(t.style[a]) || F_(a, e) || n?.getValue(a)?.liveStyle !== void 0) && (i[a] = r[a]);
	return i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function L_(e, t, n) {
	let r = I_(e, t, n);
	for (let n in e) if (wp(e[n]) || wp(t[n])) {
		let t = gl.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/use-constant.mjs
function R_(e) {
	let t = k(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function z_({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, a) {
	let o = {
		latestValues: V_(r, i, a, e),
		renderState: t()
	};
	return n && (o.mount = (e) => n(r, e, o)), o;
}
var B_ = (e) => (t, n) => {
	let r = C(l_), i = C(ph), a = () => z_(e, t, r, i);
	return n ? a() : R_(a);
};
function V_(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = ig(a[e]);
	let { initial: o, animate: s } = e, c = __(e), l = v_(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !sl(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = fl(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var H_ = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), U_ = () => ({
	...H_(),
	attrs: {}
}), W_ = (e, t) => t && typeof e == "number" ? t.transform(e) : e, G_ = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, K_ = gl.length;
function q_(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < K_; a++) {
		let o = gl[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (c = typeof s == "number" ? s === +!!o.startsWith("scale") : parseFloat(s) === 0, !c || n) {
			let e = W_(s, bd[o]);
			if (!c) {
				i = !1;
				let t = G_[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs
function J_(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (_l.has(e)) {
			o = !0;
			continue;
		} else if (iu(e)) {
			i[e] = n;
			continue;
		} else {
			let t = W_(n, bd[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = q_(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function Y_(e, t, n) {
	return typeof e == "string" ? e : X.transform(t + n * e);
}
function X_(e, t, n) {
	return `${Y_(t, e.x, e.width)} ${Y_(n, e.y, e.height)}`;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs
var Z_ = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Q_ = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function $_(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Z_ : Q_;
	e[a.offset] = X.transform(-r);
	let o = X.transform(t), s = X.transform(n);
	e[a.array] = `${o} ${s}`;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function ev(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: a, pathLength: o, pathSpacing: s = 1, pathOffset: c = 0, ...l }, u, d) {
	if (J_(e, l, d), u) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: f, style: p, dimensions: m } = e;
	f.transform && (m && (p.transform = f.transform), delete f.transform), m && (i !== void 0 || a !== void 0 || p.transform) && (p.transformOrigin = X_(m, i === void 0 ? .5 : i, a === void 0 ? .5 : a)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), o !== void 0 && $_(f, o, s, c, !1);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var tv = (e) => typeof e == "string" && e.toLowerCase() === "svg", nv = { useVisualState: B_({
	scrapeMotionValuesFromProps: L_,
	createRenderState: U_,
	onMount: (e, t, { renderState: n, latestValues: r }) => {
		Y.read(() => {
			try {
				n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
			} catch {
				n.dimensions = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				};
			}
		}), Y.render(() => {
			ev(n, r, tv(t.tagName), e.transformTemplate), P_(t, n);
		});
	}
}) }, rv = { useVisualState: B_({
	scrapeMotionValuesFromProps: I_,
	createRenderState: H_
}) };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/use-props.mjs
function iv(e, t, n) {
	for (let r in t) !wp(t[r]) && !F_(r, n) && (e[r] = t[r]);
}
function av({ transformTemplate: e }, t) {
	return O(() => {
		let n = H_();
		return J_(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function ov(e, t) {
	let n = e.style || {}, r = {};
	return iv(r, n, e), Object.assign(r, av(e, t)), r;
}
function sv(e, t) {
	let n = {}, r = ov(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/valid-prop.mjs
var cv = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function lv(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || cv.has(e);
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function uv(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var dv = Oe((() => {})), fv = /* @__PURE__ */ ke({ default: () => mv }), pv, mv, hv = Oe((() => {
	dv(), pv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mv = /* #__PURE__ */ uv(function(e) {
		return pv.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), gv = (e) => !lv(e);
function _v(e) {
	e && (gv = (t) => t.startsWith("on") ? !lv(t) : e(t));
}
try {
	_v((hv(), Me(fv)).default);
} catch {}
function vv(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || (gv(i) || n === !0 && lv(i) || !t && !lv(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/use-props.mjs
function yv(e, t, n, r) {
	let i = O(() => {
		let n = U_();
		return ev(n, t, tv(r), e.transformTemplate), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		iv(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/use-render.mjs
function bv(e = !1) {
	return (t, n, r, { latestValues: i }, a) => {
		let o = (j_(t) ? yv : sv)(n, i, a, t), s = vv(n, typeof t == "string", e), c = t === _ ? {} : {
			...s,
			...o,
			ref: r
		}, { children: l } = n, u = O(() => wp(l) ? l.get() : l, [l]);
		return y(t, {
			...c,
			children: u
		});
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-factory.mjs
function xv(e, t) {
	return function(n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
		return E_({
			...j_(n) ? nv : rv,
			preloadedFeatures: e,
			useRender: bv(r),
			createVisualElement: t,
			Component: n
		});
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs
var Sv = { current: null }, Cv = { current: !1 };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs
function wv() {
	if (Cv.current = !0, u_) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Sv.current = e.matches;
		e.addListener(t), t();
	} else Sv.current = !1;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs
function Tv(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (wp(i)) e.addValue(r, i), process.env.NODE_ENV === "development" && al(i.version === "11.11.13", `Attempting to mix Motion versions ${i.version} with 11.11.13 may not work as expected.`);
		else if (wp(a)) e.addValue(r, vp(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, vp(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs
var Ev = /* @__PURE__ */ new WeakMap(), Dv = [
	...ju,
	Qu,
	fd
], Ov = (e) => Dv.find(Au(e)), kv = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Av = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: a }, o = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = zu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = Ad.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, Y.render(this.render, !1, !0));
		};
		let { latestValues: s, renderState: c } = a;
		this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = t.initial ? { ...s } : {}, this.renderState = c, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = __(t), this.isVariantNode = v_(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in u) {
			let t = u[e];
			s[e] !== void 0 && wp(t) && t.set(s[e], !1);
		}
	}
	mount(e) {
		this.current = e, Ev.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), Cv.current || wv(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Sv.current, process.env.NODE_ENV !== "production" && al(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		Ev.delete(this.current), this.projection && this.projection.unmount(), Fl(this.notifyUpdate), Fl(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	bindToMotionValue(e, t) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
		let n = _l.has(e), r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && Y.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
		}), i = t.on("renderRequest", this.scheduleRender), a;
		window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i(), a && a(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in C_) {
			let t = C_[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Q();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < kv.length; t++) {
			let n = kv[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Tv(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = vp(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (nu(n) || Ql(n)) ? n = parseFloat(n) : !Ov(n) && fd.test(t) && (n = Cd(e, t)), this.setBaseTarget(e, wp(n) ? n.get() : n)), wp(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = fl(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !wp(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new pp()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
}, jv = class extends Av {
	constructor() {
		super(...arguments), this.KeyframeResolver = Ed;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		return e.style ? e.style[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function Mv(e) {
	return window.getComputedStyle(e);
}
var Nv = class extends jv {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = M_;
	}
	readValueFromInstance(e, t) {
		if (_l.has(t)) {
			let e = Sd(t);
			return e && e.default || 0;
		} else {
			let n = Mv(e), r = (iu(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return rh(e, t);
	}
	build(e, t, n) {
		J_(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return I_(e, t, n);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		wp(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Pv = class extends jv {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Q;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (_l.has(t)) {
			let e = Sd(t);
			return e && e.default || 0;
		}
		return t = N_.has(t) ? t : xp(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return L_(e, t, n);
	}
	build(e, t, n) {
		ev(e, t, this.isSVGTag, n.transformTemplate);
	}
	renderInstance(e, t, n, r) {
		P_(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = tv(e.tagName), super.mount(e);
	}
}, Fv = (e, t) => j_(e) ? new Pv(t) : new Nv(t, { allowProjection: e !== _ }), Iv = /*@__PURE__*/ ol(/* @__PURE__ */ xv({
	...Gp,
	...o_,
	...Wg,
	...s_
}, Fv)), Lv = class extends p.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (t && e.isPresent && !this.props.isPresent) {
			let e = this.props.sizeRef.current;
			e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Rv({ children: e, isPresent: t }) {
	let n = T(), r = k(null), i = k({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	}), { nonce: a } = C(c_);
	return E(() => {
		let { width: e, height: o, top: s, left: c } = i.current;
		if (t || !r.current || !e || !o) return;
		r.current.dataset.motionPopId = n;
		let l = document.createElement("style");
		return a && (l.nonce = a), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `), () => {
			document.head.removeChild(l);
		};
	}, [t]), M(Lv, {
		isPresent: t,
		childRef: r,
		sizeRef: i,
		children: p.cloneElement(e, { ref: r })
	});
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var zv = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o }) => {
	let s = R_(Bv), c = T(), l = S((e) => {
		s.set(e, !0);
		for (let e of s.values()) if (!e) return;
		r && r();
	}, [s, r]), u = O(() => ({
		id: c,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: l,
		register: (e) => (s.set(e, !1), () => s.delete(e))
	}), a ? [Math.random(), l] : [n, l]);
	return O(() => {
		s.forEach((e, t) => s.set(t, !1));
	}, [n]), p.useEffect(() => {
		!n && !s.size && r && r();
	}, [n]), o === "popLayout" && (e = M(Rv, {
		isPresent: n,
		children: e
	})), M(ph.Provider, {
		value: u,
		children: e
	});
};
function Bv() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var Vv = (e) => e.key || "";
function Hv(e) {
	let t = [];
	return h.forEach(e, (e) => {
		x(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Uv = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: i, presenceAffectsLayout: a = !0, mode: o = "sync" }) => {
	tu(!t, "Replace exitBeforeEnter with mode='wait'");
	let s = O(() => Hv(e), [e]), c = s.map(Vv), l = k(!0), u = k(s), d = R_(() => /* @__PURE__ */ new Map()), [f, p] = A(s), [m, h] = A(s);
	d_(() => {
		l.current = !1, u.current = s;
		for (let e = 0; e < m.length; e++) {
			let t = Vv(m[e]);
			c.includes(t) ? d.delete(t) : d.get(t) !== !0 && d.set(t, !1);
		}
	}, [
		m,
		c.length,
		c.join("-")
	]);
	let g = [];
	if (s !== f) {
		let e = [...s];
		for (let t = 0; t < m.length; t++) {
			let n = m[t], r = Vv(n);
			c.includes(r) || (e.splice(t, 0, n), g.push(n));
		}
		o === "wait" && g.length && (e = g), h(Hv(e)), p(s);
		return;
	}
	process.env.NODE_ENV !== "production" && o === "wait" && m.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: _ } = C(hh);
	return M(ae, { children: m.map((e) => {
		let t = Vv(e), f = s === m || c.includes(t);
		return M(zv, {
			isPresent: f,
			initial: !l.current || r ? void 0 : !1,
			custom: f ? void 0 : n,
			presenceAffectsLayout: a,
			mode: o,
			onExitComplete: f ? void 0 : () => {
				if (d.has(t)) d.set(t, !0);
				else return;
				let e = !0;
				d.forEach((t) => {
					t || (e = !1);
				}), e && (_?.(), h(u.current), i && i());
			},
			children: e
		}, t);
	}) });
}, Wv = fe`
  0% {
    background-position: 0 0;
  }
  50.01% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }
`, Gv = ({ theme: e, prefersReducedMotion: t, spread: n = 24 }) => ({
	position: "relative",
	outlineColor: "rgba(0, 0, 0, 0) !important",
	"&:before, &:after": {
		content: "''",
		position: "absolute",
		top: "-2px",
		borderRadius: `${Math.floor(e.shape.borderRadius * 1.5)}px`,
		left: "-2px",
		width: "calc(100% + 4px)",
		height: "calc(100% + 4px)",
		background: "linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)",
		backgroundSize: "400%",
		zIndex: -1,
		animation: t ? void 0 : `${Wv} 20s linear infinite`
	},
	"&:after": {
		top: "-8px",
		left: "-8px",
		width: "calc(100% + 16px)",
		height: "calc(100% + 16px)",
		filter: `blur(${n}px)`,
		opacity: "0.9"
	}
}), Kv = ue("img")({}), qv = (e) => {
	let t = tt(e.id);
	return t || console.error(`Card ID ${e.id} does not have an image configured`), t ? $e[e.id] : et.pixel;
}, Jv = "Card", Yv = "CardFlipWrapper", Xv = "#0072ff", Zv = "#0fc400", Qv = "#ff7510", $v = ({ theme: e, isBuffedCrop: t, prefersReducedMotion: n }) => t ? Gv({
	theme: e,
	prefersReducedMotion: n,
	spread: 12
}) : { filter: `drop-shadow(0px 0px 24px ${Zv})` }, ey = m.forwardRef(function({ cardInstance: e, cardIdxInHand: n, cardIdxInField: r, cropIdxInFieldToHarvest: i, cropIdxInFieldToWater: a, playerId: o, children: s, disableEnterAnimation: d = !1, imageScale: p = .75, isFlipped: m = !1, paperProps: h, size: g = V.MEDIUM, sx: _ = [], isBuffedCrop: v = !1, isSessionOwnersCard: y = !1, showPlayCardButton: b = !1, playButtonDisabled: x = !1, showWaterCropButton: S = !1, showHarvestCropButton: C = !1, showWaterableState: w = !1, showHarvestableState: T = !1, showDiscardButton: E = !1, tooltipTitle: D = "", onPlayCard: O, onWaterCrop: A, onHarvestCrop: ee, onDiscardCard: te, ...ne }, re) {
	let j = c(), ie = k(null), ae = f("(prefers-reduced-motion: reduce)");
	return /* @__PURE__ */ M(Uv, { children: /* @__PURE__ */ M(u, {
		ref: re,
		className: Jv,
		sx: [{
			perspective: "1000px",
			height: bn[g].height,
			width: bn[g].width
		}, ...Re(_) ? _ : [_]],
		...ne,
		children: /* @__PURE__ */ M(Iv.div, {
			initial: d ? !1 : { scale: 0 },
			animate: { scale: 1 },
			style: {
				originX: .5,
				originY: .5
			},
			children: /* @__PURE__ */ M(l, {
				title: D,
				placement: "top",
				arrow: !0,
				children: /* @__PURE__ */ N(u, {
					className: Yv,
					sx: [{
						height: bn[g].height,
						position: "relative",
						transformStyle: "preserve-3d",
						width: bn[g].width,
						...m && { transform: "rotateY(180deg)" },
						transition: j.transitions.create(["transform", "box-shadow"])
					}],
					children: [/* @__PURE__ */ N(se, {
						ref: ie,
						...h,
						sx: [{
							backfaceVisibility: "hidden",
							background: j.palette.mode === "light" ? ce(j.palette.background.paper, .05) : le(j.palette.background.paper, .15),
							display: "flex",
							flexDirection: "column",
							height: 1,
							outlineColor: j.palette.background.default,
							outlineStyle: "solid",
							outlineWidth: 2,
							p: j.spacing(1),
							position: "absolute",
							width: 1,
							...w && { filter: `drop-shadow(0px 0px 24px ${Xv})` },
							...T && {
								...y && $v({
									theme: j,
									isBuffedCrop: v,
									prefersReducedMotion: ae
								}),
								...!y && { filter: `drop-shadow(0px 0px 24px ${Qv})` }
							}
						}],
						children: [
							/* @__PURE__ */ M(de, {
								variant: g === V.SMALL ? "caption" : "overline",
								sx: {
									fontWeight: j.typography.fontWeightBold,
									textTransform: "uppercase"
								},
								children: e.name
							}),
							/* @__PURE__ */ M(u, {
								sx: {
									height: "50%",
									display: "flex",
									background: j.palette.common.white,
									backgroundImage: `url(${et.dirt})`,
									backgroundSize: "100%",
									backgroundRepeat: "repeat",
									borderColor: j.palette.divider,
									borderRadius: `${j.shape.borderRadius}px`,
									borderWidth: 1,
									borderStyle: "solid",
									imageRendering: "pixelated"
								},
								children: /* @__PURE__ */ M(Kv, {
									src: qv(e),
									alt: e.name,
									sx: {
										height: `${100 * p}%`,
										p: 0,
										m: "auto",
										imageRendering: "pixelated",
										filter: `drop-shadow(0 0 5px ${j.palette.common.white})`
									}
								})
							}),
							/* @__PURE__ */ M(oe, { sx: { my: j.spacing(1) } }),
							/* @__PURE__ */ M(u, {
								sx: {
									height: "50%",
									overflow: "auto",
									...g === V.SMALL && {
										fontSize: j.typography.caption.fontSize,
										lineHeight: j.typography.caption.lineHeight,
										"> p": { my: 0 }
									}
								},
								children: s
							}),
							b && /* @__PURE__ */ M(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ M(de, { children: /* @__PURE__ */ N(t, {
									variant: "contained",
									disabled: x,
									onClick: () => void O?.(),
									children: [
										fn(e) && "Play crop",
										nt(e) && "Water a crop",
										rt(e) && "Play event",
										it(e) && "Play tool"
									]
								}) })
							}),
							S && /* @__PURE__ */ M(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ M(de, { children: /* @__PURE__ */ M(t, {
									variant: "contained",
									onClick: A,
									children: "Water crop"
								}) })
							}),
							C && /* @__PURE__ */ M(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ M(de, { children: /* @__PURE__ */ M(t, {
									variant: "contained",
									color: "success",
									onClick: ee,
									children: "Harvest crop"
								}) })
							}),
							E && /* @__PURE__ */ M(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ M(de, { children: /* @__PURE__ */ M(t, {
									variant: "contained",
									color: "error",
									onClick: te,
									children: "Discard"
								}) })
							})
						]
					}), /* @__PURE__ */ M(se, {
						...h,
						sx: {
							alignItems: "center",
							backgroundColor: j.palette.background.default,
							backfaceVisibility: "hidden",
							color: j.palette.common.white,
							display: "flex",
							height: 1,
							position: "absolute",
							textAlign: "center",
							transform: "rotateY(180deg)",
							width: 1
						},
						children: /* @__PURE__ */ M(de, {
							variant: "h2",
							sx: {
								...g === V.SMALL && j.typography.h6,
								...g === V.MEDIUM && j.typography.h5,
								...g === V.LARGE && j.typography.h4
							},
							children: "Farmhand Shuffle"
						})
					})]
				})
			})
		})
	}) });
}), ty = ({ crop: e, playedCrop: t }) => t ? /* @__PURE__ */ N(de, { children: [
	"Water cards attached: ",
	t.waterCards,
	"/",
	e.waterToMature
] }) : /* @__PURE__ */ N(de, { children: ["Water needed to mature: ", e.waterToMature] }), ny = D;
//#endregion
//#region node_modules/xstate/dev/dist/xstate-dev.esm.js
function ry() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
}
function iy() {
	let e = ry();
	if (e.__xstate__) return e.__xstate__;
}
var ay = (e) => {
	if (typeof window > "u") return;
	let t = iy();
	t && t.register(e);
}, oy = class {
	constructor(e) {
		this._process = e, this._active = !1, this._current = null, this._last = null;
	}
	start() {
		this._active = !0, this.flush();
	}
	clear() {
		this._current && (this._current.next = null, this._last = this._current);
	}
	enqueue(e) {
		let t = {
			value: e,
			next: null
		};
		if (this._current) {
			this._last.next = t, this._last = t;
			return;
		}
		this._current = t, this._last = t, this._active && this.flush();
	}
	flush() {
		for (; this._current;) {
			let e = this._current;
			this._process(e.value), this._current = e.next;
		}
		this._last = null;
	}
}, sy = "", cy = "#", ly = "*", uy = "xstate.init", dy = "xstate.stop";
function fy(e, t) {
	return { type: `xstate.after.${e}.${t}` };
}
function py(e, t) {
	return {
		type: `xstate.done.state.${e}`,
		output: t
	};
}
function my(e, t) {
	return {
		type: `xstate.done.actor.${e}`,
		output: t,
		actorId: e
	};
}
function hy(e, t) {
	return {
		type: `xstate.error.actor.${e}`,
		error: t,
		actorId: e
	};
}
function gy(e) {
	return {
		type: uy,
		input: e
	};
}
function _y(e) {
	setTimeout(() => {
		throw e;
	});
}
var vy = typeof Symbol == "function" && Symbol.observable || "@@observable";
function yy(e, t) {
	let n = xy(e), r = xy(t);
	return typeof r == "string" ? typeof n == "string" ? r === n : !1 : typeof n == "string" ? n in r : Object.keys(n).every((e) => e in r ? yy(n[e], r[e]) : !1);
}
function by(e) {
	if (Dy(e)) return e;
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		switch (e.charCodeAt(r)) {
			case 92:
				n += e[r + 1], r++;
				continue;
			case 46:
				t.push(n), n = "";
				continue;
		}
		n += e[r];
	}
	return t.push(n), t;
}
function xy(e) {
	return Yb(e) ? e.value : typeof e == "string" ? Sy(by(e)) : e;
}
function Sy(e) {
	if (e.length === 1) return e[0];
	let t = {}, n = t;
	for (let t = 0; t < e.length - 1; t++) if (t === e.length - 2) n[e[t]] = e[t + 1];
	else {
		let r = n;
		n = {}, r[e[t]] = n;
	}
	return t;
}
function Cy(e, t) {
	let n = {}, r = Object.keys(e);
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		n[a] = t(e[a], a, e, i);
	}
	return n;
}
function wy(e) {
	return Dy(e) ? e : [e];
}
function Ty(e) {
	return e === void 0 ? [] : wy(e);
}
function Ey(e, t, n, r) {
	return typeof e == "function" ? e({
		context: t,
		event: n,
		self: r
	}) : e;
}
function Dy(e) {
	return Array.isArray(e);
}
function Oy(e) {
	return e.type.startsWith("xstate.error.actor");
}
function ky(e) {
	return wy(e).map((e) => e === void 0 || typeof e == "string" ? { target: e } : e);
}
function Ay(e) {
	if (!(e === void 0 || e === sy)) return Ty(e);
}
function jy(e, t, n) {
	let r = typeof e == "object", i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
function My(e, t) {
	return `${t}.${e}`;
}
function Ny(e, t) {
	let n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
	if (!n) return e.implementations.actors[t];
	let [, r, i] = n, a = e.getStateNodeById(i).config.invoke;
	return (Array.isArray(a) ? a[r] : a).src;
}
function Py(e, t) {
	return `${e.sessionId}.${t}`;
}
var Fy = 0;
function Iy(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new Set(), o = {}, { clock: s, logger: c } = t, l = {
		schedule: (e, t, n, r, i = Math.random().toString(36).slice(2)) => {
			let a = {
				source: e,
				target: t,
				event: n,
				delay: r,
				id: i,
				startedAt: Date.now()
			}, c = Py(e, i);
			u._snapshot._scheduledEvents[c] = a, o[c] = s.setTimeout(() => {
				delete o[c], delete u._snapshot._scheduledEvents[c], u._relay(e, t, n);
			}, r);
		},
		cancel: (e, t) => {
			let n = Py(e, t), r = o[n];
			delete o[n], delete u._snapshot._scheduledEvents[n], r !== void 0 && s.clearTimeout(r);
		},
		cancelAll: (e) => {
			for (let t in u._snapshot._scheduledEvents) {
				let n = u._snapshot._scheduledEvents[t];
				n.source === e && l.cancel(e, n.id);
			}
		}
	}, u = {
		_snapshot: { _scheduledEvents: (t?.snapshot && t.snapshot.scheduler) ?? {} },
		_bookId: () => `x:${Fy++}`,
		_register: (e, t) => (n.set(e, t), e),
		_unregister: (e) => {
			n.delete(e.sessionId);
			let t = i.get(e);
			t !== void 0 && (r.delete(t), i.delete(e));
		},
		get: (e) => r.get(e),
		_set: (e, t) => {
			let n = r.get(e);
			if (n && n !== t) throw Error(`Actor with system ID '${e}' already exists.`);
			r.set(e, t), i.set(t, e);
		},
		inspect: (e) => {
			let t = jy(e);
			return a.add(t), { unsubscribe() {
				a.delete(t);
			} };
		},
		_sendInspectionEvent: (t) => {
			if (!a.size) return;
			let n = {
				...t,
				rootId: e.sessionId
			};
			a.forEach((e) => e.next?.(n));
		},
		_relay: (e, t, n) => {
			u._sendInspectionEvent({
				type: "@xstate.event",
				sourceRef: e,
				actorRef: t,
				event: n
			}), t._send(n);
		},
		scheduler: l,
		getSnapshot: () => ({ _scheduledEvents: { ...u._snapshot._scheduledEvents } }),
		start: () => {
			let e = u._snapshot._scheduledEvents;
			u._snapshot._scheduledEvents = {};
			for (let t in e) {
				let { source: n, target: r, event: i, delay: a, id: o } = e[t];
				l.schedule(n, r, i, a, o);
			}
		},
		_clock: s,
		_logger: c
	};
	return u;
}
var Ly = !1, Ry = /*#__PURE__*/ function(e) {
	return e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped", e;
}({}), zy = {
	clock: {
		setTimeout: (e, t) => setTimeout(e, t),
		clearTimeout: (e) => clearTimeout(e)
	},
	logger: console.log.bind(console),
	devTools: !1
}, By = class {
	constructor(e, t) {
		this.logic = e, this._snapshot = void 0, this.clock = void 0, this.options = void 0, this.id = void 0, this.mailbox = new oy(this._process.bind(this)), this.observers = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Map(), this.logger = void 0, this._processingStatus = Ry.NotStarted, this._parent = void 0, this._syncSnapshot = void 0, this.ref = void 0, this._actorScope = void 0, this._systemId = void 0, this.sessionId = void 0, this.system = void 0, this._doneEvent = void 0, this.src = void 0, this._deferred = [];
		let n = {
			...zy,
			...t
		}, { clock: r, logger: i, parent: a, syncSnapshot: o, id: s, systemId: c, inspect: l } = n;
		this.system = a ? a.system : Iy(this, {
			clock: r,
			logger: i
		}), l && !a && this.system.inspect(jy(l)), this.sessionId = this.system._bookId(), this.id = s ?? this.sessionId, this.logger = t?.logger ?? this.system._logger, this.clock = t?.clock ?? this.system._clock, this._parent = a, this._syncSnapshot = o, this.options = n, this.src = n.src ?? e, this.ref = this, this._actorScope = {
			self: this,
			id: this.id,
			sessionId: this.sessionId,
			logger: this.logger,
			defer: (e) => {
				this._deferred.push(e);
			},
			system: this.system,
			stopChild: (e) => {
				if (e._parent !== this) throw Error(`Cannot stop child actor ${e.id} of ${this.id} because it is not a child`);
				e._stop();
			},
			emit: (e) => {
				let t = this.eventListeners.get(e.type), n = this.eventListeners.get("*");
				if (!t && !n) return;
				let r = [...t ? t.values() : [], ...n ? n.values() : []];
				for (let t of r) t(e);
			},
			actionExecutor: (e) => {
				let t = () => {
					if (this._actorScope.system._sendInspectionEvent({
						type: "@xstate.action",
						actorRef: this,
						action: {
							type: e.type,
							params: e.params
						}
					}), !e.exec) return;
					let t = Ly;
					try {
						Ly = !0, e.exec(e.info, e.params);
					} finally {
						Ly = t;
					}
				};
				this._processingStatus === Ry.Running ? t() : this._deferred.push(t);
			}
		}, this.send = this.send.bind(this), this.system._sendInspectionEvent({
			type: "@xstate.actor",
			actorRef: this
		}), c && (this._systemId = c, this.system._set(c, this)), this._initState(t?.snapshot ?? t?.state), c && this._snapshot.status !== "active" && this.system._unregister(this);
	}
	_initState(e) {
		try {
			this._snapshot = e ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(e, this._actorScope) : e : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
		} catch (e) {
			this._snapshot = {
				status: "error",
				output: void 0,
				error: e
			};
		}
	}
	update(e, t) {
		this._snapshot = e;
		let n;
		for (; n = this._deferred.shift();) try {
			n();
		} catch (t) {
			this._deferred.length = 0, this._snapshot = {
				...e,
				status: "error",
				error: t
			};
		}
		switch (this._snapshot.status) {
			case "active":
				for (let t of this.observers) try {
					t.next?.(e);
				} catch (e) {
					_y(e);
				}
				break;
			case "done":
				for (let t of this.observers) try {
					t.next?.(e);
				} catch (e) {
					_y(e);
				}
				this._stopProcedure(), this._complete(), this._doneEvent = my(this.id, this._snapshot.output), this._parent && this.system._relay(this, this._parent, this._doneEvent);
				break;
			case "error":
				this._error(this._snapshot.error);
				break;
		}
		this.system._sendInspectionEvent({
			type: "@xstate.snapshot",
			actorRef: this,
			event: t,
			snapshot: e
		});
	}
	subscribe(e, t, n) {
		let r = jy(e, t, n);
		if (this._processingStatus !== Ry.Stopped) this.observers.add(r);
		else switch (this._snapshot.status) {
			case "done":
				try {
					r.complete?.();
				} catch (e) {
					_y(e);
				}
				break;
			case "error": {
				let e = this._snapshot.error;
				if (!r.error) _y(e);
				else try {
					r.error(e);
				} catch (e) {
					_y(e);
				}
				break;
			}
		}
		return { unsubscribe: () => {
			this.observers.delete(r);
		} };
	}
	on(e, t) {
		let n = this.eventListeners.get(e);
		n || (n = /* @__PURE__ */ new Set(), this.eventListeners.set(e, n));
		let r = t.bind(void 0);
		return n.add(r), { unsubscribe: () => {
			n.delete(r);
		} };
	}
	start() {
		if (this._processingStatus === Ry.Running) return this;
		this._syncSnapshot && this.subscribe({
			next: (e) => {
				e.status === "active" && this.system._relay(this, this._parent, {
					type: `xstate.snapshot.${this.id}`,
					snapshot: e
				});
			},
			error: () => {}
		}), this.system._register(this.sessionId, this), this._systemId && this.system._set(this._systemId, this), this._processingStatus = Ry.Running;
		let e = gy(this.options.input);
		switch (this.system._sendInspectionEvent({
			type: "@xstate.event",
			sourceRef: this._parent,
			actorRef: this,
			event: e
		}), this._snapshot.status) {
			case "done": return this.update(this._snapshot, e), this;
			case "error": return this._error(this._snapshot.error), this;
		}
		if (this._parent || this.system.start(), this.logic.start) try {
			this.logic.start(this._snapshot, this._actorScope);
		} catch (e) {
			return this._snapshot = {
				...this._snapshot,
				status: "error",
				error: e
			}, this._error(e), this;
		}
		return this.update(this._snapshot, e), this.options.devTools && this.attachDevTools(), this.mailbox.start(), this;
	}
	_process(e) {
		let t, n;
		try {
			t = this.logic.transition(this._snapshot, e, this._actorScope);
		} catch (e) {
			n = { err: e };
		}
		if (n) {
			let { err: e } = n;
			this._snapshot = {
				...this._snapshot,
				status: "error",
				error: e
			}, this._error(e);
			return;
		}
		this.update(t, e), e.type === "xstate.stop" && (this._stopProcedure(), this._complete());
	}
	_stop() {
		return this._processingStatus === Ry.Stopped ? this : (this.mailbox.clear(), this._processingStatus === Ry.NotStarted ? (this._processingStatus = Ry.Stopped, this) : (this.mailbox.enqueue({ type: dy }), this));
	}
	stop() {
		if (this._parent) throw Error("A non-root actor cannot be stopped directly.");
		return this._stop();
	}
	_complete() {
		for (let e of this.observers) try {
			e.complete?.();
		} catch (e) {
			_y(e);
		}
		this.observers.clear();
	}
	_reportError(e) {
		if (!this.observers.size) {
			this._parent || _y(e);
			return;
		}
		let t = !1;
		for (let n of this.observers) {
			let r = n.error;
			t ||= !r;
			try {
				r?.(e);
			} catch (e) {
				_y(e);
			}
		}
		this.observers.clear(), t && _y(e);
	}
	_error(e) {
		this._stopProcedure(), this._reportError(e), this._parent && this.system._relay(this, this._parent, hy(this.id, e));
	}
	_stopProcedure() {
		return this._processingStatus === Ry.Running ? (this.system.scheduler.cancelAll(this), this.mailbox.clear(), this.mailbox = new oy(this._process.bind(this)), this._processingStatus = Ry.Stopped, this.system._unregister(this), this) : this;
	}
	_send(e) {
		this._processingStatus !== Ry.Stopped && this.mailbox.enqueue(e);
	}
	send(e) {
		this.system._relay(void 0, this, e);
	}
	attachDevTools() {
		let { devTools: e } = this.options;
		e && (typeof e == "function" ? e : ay)(this);
	}
	toJSON() {
		return {
			xstate$$type: 1,
			id: this.id
		};
	}
	getPersistedSnapshot(e) {
		return this.logic.getPersistedSnapshot(this._snapshot, e);
	}
	[vy]() {
		return this;
	}
	getSnapshot() {
		return this._snapshot;
	}
};
function Vy(e, ...[t]) {
	return new By(e, t);
}
function Hy(e, t, n, r, { sendId: i }) {
	return [
		t,
		{ sendId: typeof i == "function" ? i(n, r) : i },
		void 0
	];
}
function Uy(e, t) {
	e.defer(() => {
		e.system.scheduler.cancel(e.self, t.sendId);
	});
}
function Wy(e) {
	function t(e, t) {}
	return t.type = "xstate.cancel", t.sendId = e, t.resolve = Hy, t.execute = Uy, t;
}
function Gy(e, t, n, r, { id: i, systemId: a, src: o, input: s, syncSnapshot: c }) {
	let l = typeof o == "string" ? Ny(t.machine, o) : o, u = typeof i == "function" ? i(n) : i, d, f;
	return l && (f = typeof s == "function" ? s({
		context: t.context,
		event: n.event,
		self: e.self
	}) : s, d = Vy(l, {
		id: u,
		src: o,
		parent: e.self,
		syncSnapshot: c,
		systemId: a,
		input: f
	})), [
		nx(t, { children: {
			...t.children,
			[u]: d
		} }),
		{
			id: i,
			systemId: a,
			actorRef: d,
			src: o,
			input: f
		},
		void 0
	];
}
function Ky(e, { actorRef: t }) {
	t && e.defer(() => {
		t._processingStatus !== Ry.Stopped && t.start();
	});
}
function qy(...[e, { id: t, systemId: n, input: r, syncSnapshot: i = !1 } = {}]) {
	function a(e, t) {}
	return a.type = "xstate.spawnChild", a.id = t, a.systemId = n, a.src = e, a.input = r, a.syncSnapshot = i, a.resolve = Gy, a.execute = Ky, a;
}
function Jy(e, t, n, r, { actorRef: i }) {
	let a = typeof i == "function" ? i(n, r) : i, o = typeof a == "string" ? t.children[a] : a, s = t.children;
	return o && (s = { ...s }, delete s[o.id]), [
		nx(t, { children: s }),
		o,
		void 0
	];
}
function Yy(e, t) {
	if (t) {
		if (e.system._unregister(t), t._processingStatus !== Ry.Running) {
			e.stopChild(t);
			return;
		}
		e.defer(() => {
			e.stopChild(t);
		});
	}
}
function Xy(e) {
	function t(e, t) {}
	return t.type = "xstate.stopChild", t.actorRef = e, t.resolve = Jy, t.execute = Yy, t;
}
function Zy(e, t, n, r) {
	let { machine: i } = r, a = typeof e == "function", o = a ? e : i.implementations.guards[typeof e == "string" ? e : e.type];
	if (!a && !o) throw Error(`Guard '${typeof e == "string" ? e : e.type}' is not implemented.'.`);
	if (typeof o != "function") return Zy(o, t, n, r);
	let s = {
		context: t,
		event: n
	}, c = a || typeof e == "string" ? void 0 : "params" in e ? typeof e.params == "function" ? e.params({
		context: t,
		event: n
	}) : e.params : void 0;
	return "check" in o ? o.check(r, s, o) : o(s, c);
}
var Qy = (e) => e.type === "atomic" || e.type === "final";
function $y(e) {
	return Object.values(e.states).filter((e) => e.type !== "history");
}
function eb(e, t) {
	let n = [];
	if (t === e) return n;
	let r = e.parent;
	for (; r && r !== t;) n.push(r), r = r.parent;
	return n;
}
function tb(e) {
	let t = new Set(e), n = rb(t);
	for (let e of t) if (e.type === "compound" && (!n.get(e) || !n.get(e).length)) hb(e).forEach((e) => t.add(e));
	else if (e.type === "parallel") {
		for (let n of $y(e)) if (n.type !== "history" && !t.has(n)) {
			let e = hb(n);
			for (let n of e) t.add(n);
		}
	}
	for (let e of t) {
		let n = e.parent;
		for (; n;) t.add(n), n = n.parent;
	}
	return t;
}
function nb(e, t) {
	let n = t.get(e);
	if (!n) return {};
	if (e.type === "compound") {
		let e = n[0];
		if (e) {
			if (Qy(e)) return e.key;
		} else return {};
	}
	let r = {};
	for (let e of n) r[e.key] = nb(e, t);
	return r;
}
function rb(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.has(n) || t.set(n, []), n.parent && (t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n));
	return t;
}
function ib(e, t) {
	return nb(e, rb(tb(t)));
}
function ab(e, t) {
	return t.type === "compound" ? $y(t).some((t) => t.type === "final" && e.has(t)) : t.type === "parallel" ? $y(t).every((t) => ab(e, t)) : t.type === "final";
}
var ob = (e) => e[0] === cy;
function sb(e, t) {
	return e.transitions.get(t) || [...e.transitions.keys()].filter((e) => {
		if (e === ly) return !0;
		if (!e.endsWith(".*")) return !1;
		let n = e.split("."), r = t.split(".");
		for (let e = 0; e < n.length; e++) {
			let t = n[e], i = r[e];
			if (t === "*") return e === n.length - 1;
			if (t !== i) return !1;
		}
		return !0;
	}).sort((e, t) => t.length - e.length).flatMap((t) => e.transitions.get(t));
}
function cb(e) {
	let t = e.config.after;
	if (!t) return [];
	let n = (t) => {
		let n = fy(t, e.id), r = n.type;
		return e.entry.push(sx(n, {
			id: r,
			delay: t
		})), e.exit.push(Wy(r)), r;
	};
	return Object.keys(t).flatMap((e) => {
		let r = t[e], i = typeof r == "string" ? { target: r } : r, a = Number.isNaN(+e) ? e : +e, o = n(a);
		return Ty(i).map((e) => ({
			...e,
			event: o,
			delay: a
		}));
	}).map((t) => {
		let { delay: n } = t;
		return {
			...lb(e, t.event, t),
			delay: n
		};
	});
}
function lb(e, t, n) {
	let r = Ay(n.target), i = n.reenter ?? !1, a = fb(e, r), o = {
		...n,
		actions: Ty(n.actions),
		guard: n.guard,
		target: a,
		source: e,
		reenter: i,
		eventType: t,
		toJSON: () => ({
			...o,
			source: `#${e.id}`,
			target: a ? a.map((e) => `#${e.id}`) : void 0
		})
	};
	return o;
}
function ub(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.config.on) for (let n of Object.keys(e.config.on)) {
		if (n === "") throw Error("Null events (\"\") cannot be specified as a transition key. Use `always: { ... }` instead.");
		let r = e.config.on[n];
		t.set(n, ky(r).map((t) => lb(e, n, t)));
	}
	if (e.config.onDone) {
		let n = `xstate.done.state.${e.id}`;
		t.set(n, ky(e.config.onDone).map((t) => lb(e, n, t)));
	}
	for (let n of e.invoke) {
		if (n.onDone) {
			let r = `xstate.done.actor.${n.id}`;
			t.set(r, ky(n.onDone).map((t) => lb(e, r, t)));
		}
		if (n.onError) {
			let r = `xstate.error.actor.${n.id}`;
			t.set(r, ky(n.onError).map((t) => lb(e, r, t)));
		}
		if (n.onSnapshot) {
			let r = `xstate.snapshot.${n.id}`;
			t.set(r, ky(n.onSnapshot).map((t) => lb(e, r, t)));
		}
	}
	for (let n of e.after) {
		let e = t.get(n.eventType);
		e || (e = [], t.set(n.eventType, e)), e.push(n);
	}
	return t;
}
function db(e, t) {
	let n = typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
	if (!n && t) throw Error(`Initial state node "${t}" not found on parent state node #${e.id}`);
	let r = {
		source: e,
		actions: !t || typeof t == "string" ? [] : Ty(t.actions),
		eventType: null,
		reenter: !1,
		target: n ? [n] : [],
		toJSON: () => ({
			...r,
			source: `#${e.id}`,
			target: n ? [`#${n.id}`] : []
		})
	};
	return r;
}
function fb(e, t) {
	if (t !== void 0) return t.map((t) => {
		if (typeof t != "string") return t;
		if (ob(t)) return e.machine.getStateNodeById(t);
		let n = t[0] === ".";
		if (n && !e.parent) return vb(e, t.slice(1));
		let r = n ? e.key + t : t;
		if (e.parent) try {
			return vb(e.parent, r);
		} catch (t) {
			throw Error(`Invalid transition definition for state node '${e.id}':\n${t.message}`);
		}
		else throw Error(`Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`);
	});
}
function pb(e) {
	let t = Ay(e.config.target);
	return t ? { target: t.map((t) => typeof t == "string" ? vb(e.parent, t) : t) } : e.parent.initial;
}
function mb(e) {
	return e.type === "history";
}
function hb(e) {
	let t = gb(e);
	for (let n of t) for (let r of eb(n, e)) t.add(r);
	return t;
}
function gb(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		if (!t.has(e)) {
			if (t.add(e), e.type === "compound") n(e.initial.target[0]);
			else if (e.type === "parallel") for (let t of $y(e)) n(t);
		}
	}
	return n(e), t;
}
function _b(e, t) {
	if (ob(t)) return e.machine.getStateNodeById(t);
	if (!e.states) throw Error(`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`);
	let n = e.states[t];
	if (!n) throw Error(`Child state '${t}' does not exist on '${e.id}'`);
	return n;
}
function vb(e, t) {
	if (typeof t == "string" && ob(t)) try {
		return e.machine.getStateNodeById(t);
	} catch {}
	let n = by(t).slice(), r = e;
	for (; n.length;) {
		let e = n.shift();
		if (!e.length) break;
		r = _b(r, e);
	}
	return r;
}
function yb(e, t) {
	if (typeof t == "string") {
		let n = e.states[t];
		if (!n) throw Error(`State '${t}' does not exist on '${e.id}'`);
		return [e, n];
	}
	let n = Object.keys(t), r = n.map((t) => _b(e, t)).filter(Boolean);
	return [e.machine.root, e].concat(r, n.reduce((n, r) => {
		let i = _b(e, r);
		if (!i) return n;
		let a = yb(i, t[r]);
		return n.concat(a);
	}, []));
}
function bb(e, t, n, r) {
	let i = _b(e, t).next(n, r);
	return !i || !i.length ? e.next(n, r) : i;
}
function xb(e, t, n, r) {
	let i = Object.keys(t), a = Cb(_b(e, i[0]), t[i[0]], n, r);
	return !a || !a.length ? e.next(n, r) : a;
}
function Sb(e, t, n, r) {
	let i = [];
	for (let a of Object.keys(t)) {
		let o = t[a];
		if (!o) continue;
		let s = Cb(_b(e, a), o, n, r);
		s && i.push(...s);
	}
	return i.length ? i : e.next(n, r);
}
function Cb(e, t, n, r) {
	return typeof t == "string" ? bb(e, t, n, r) : Object.keys(t).length === 1 ? xb(e, t, n, r) : Sb(e, t, n, r);
}
function wb(e) {
	return Object.keys(e.states).map((t) => e.states[t]).filter((e) => e.type === "history");
}
function Tb(e, t) {
	let n = e;
	for (; n.parent && n.parent !== t;) n = n.parent;
	return n.parent === t;
}
function Eb(e, t) {
	let n = new Set(e), r = new Set(t);
	for (let e of n) if (r.has(e)) return !0;
	for (let e of r) if (n.has(e)) return !0;
	return !1;
}
function Db(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) {
		let e = !1, a = /* @__PURE__ */ new Set();
		for (let o of r) if (Eb(jb([i], t, n), jb([o], t, n))) if (Tb(i.source, o.source)) a.add(o);
		else {
			e = !0;
			break;
		}
		if (!e) {
			for (let e of a) r.delete(e);
			r.add(i);
		}
	}
	return Array.from(r);
}
function Ob(e) {
	let [t, ...n] = e;
	for (let e of eb(t, void 0)) if (n.every((t) => Tb(t, e))) return e;
}
function kb(e, t) {
	if (!e.target) return [];
	let n = /* @__PURE__ */ new Set();
	for (let r of e.target) if (mb(r)) if (t[r.id]) for (let e of t[r.id]) n.add(e);
	else for (let e of kb(pb(r), t)) n.add(e);
	else n.add(r);
	return [...n];
}
function Ab(e, t) {
	let n = kb(e, t);
	if (!n) return;
	if (!e.reenter && n.every((t) => t === e.source || Tb(t, e.source))) return e.source;
	let r = Ob(n.concat(e.source));
	if (r) return r;
	if (!e.reenter) return e.source.machine.root;
}
function jb(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) if (i.target?.length) {
		let e = Ab(i, n);
		i.reenter && i.source === e && r.add(e);
		for (let n of t) Tb(n, e) && r.add(n);
	}
	return [...r];
}
function Mb(e, t) {
	if (e.length !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Nb(e, t, n, r, i, a) {
	if (!e.length) return t;
	let o = new Set(t._nodes), s = t.historyValue, c = Db(e, o, s), l = t;
	i || ([l, s] = Bb(l, r, n, c, o, s, a, n.actionExecutor)), l = Ub(l, r, n, c.flatMap((e) => e.actions), a, void 0), l = Fb(l, r, n, c, o, a, s, i);
	let u = [...o];
	l.status === "done" && (l = Ub(l, r, n, u.sort((e, t) => t.order - e.order).flatMap((e) => e.exit), a, void 0));
	try {
		return s === t.historyValue && Mb(t._nodes, o) ? l : nx(l, {
			_nodes: u,
			historyValue: s
		});
	} catch (e) {
		throw e;
	}
}
function Pb(e, t, n, r, i) {
	if (r.output === void 0) return;
	let a = py(i.id, i.output !== void 0 && i.parent ? Ey(i.output, e.context, t, n.self) : void 0);
	return Ey(r.output, e.context, a, n.self);
}
function Fb(e, t, n, r, i, a, o, s) {
	let c = e, l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
	Ib(r, o, u, l), s && u.add(e.machine.root);
	let d = /* @__PURE__ */ new Set();
	for (let e of [...l].sort((e, t) => e.order - t.order)) {
		i.add(e);
		let r = [];
		r.push(...e.entry);
		for (let t of e.invoke) r.push(qy(t.src, {
			...t,
			syncSnapshot: !!t.onSnapshot
		}));
		if (u.has(e)) {
			let t = e.initial.actions;
			r.push(...t);
		}
		if (c = Ub(c, t, n, r, a, e.invoke.map((e) => e.id)), e.type === "final") {
			let r = e.parent, o = r?.type === "parallel" ? r : r?.parent, s = o || e;
			for (r?.type === "compound" && a.push(py(r.id, e.output === void 0 ? void 0 : Ey(e.output, c.context, t, n.self))); o?.type === "parallel" && !d.has(o) && ab(i, o);) d.add(o), a.push(py(o.id)), s = o, o = o.parent;
			if (o) continue;
			c = nx(c, {
				status: "done",
				output: Pb(c, t, n, c.machine.root, s)
			});
		}
	}
	return c;
}
function Ib(e, t, n, r) {
	for (let i of e) {
		let e = Ab(i, t);
		for (let a of i.target || []) !mb(a) && (i.source !== a || i.source !== e || i.reenter) && (r.add(a), n.add(a)), Lb(a, t, n, r);
		let a = kb(i, t);
		for (let o of a) {
			let a = eb(o, e);
			e?.type === "parallel" && a.push(e), Rb(r, t, n, a, !i.source.parent && i.reenter ? void 0 : e);
		}
	}
}
function Lb(e, t, n, r) {
	if (mb(e)) if (t[e.id]) {
		let i = t[e.id];
		for (let e of i) r.add(e), Lb(e, t, n, r);
		for (let a of i) zb(a, e.parent, r, t, n);
	} else {
		let i = pb(e);
		for (let a of i.target) r.add(a), i === e.parent?.initial && n.add(e.parent), Lb(a, t, n, r);
		for (let a of i.target) zb(a, e.parent, r, t, n);
	}
	else if (e.type === "compound") {
		let [i] = e.initial.target;
		mb(i) || (r.add(i), n.add(i)), Lb(i, t, n, r), zb(i, e, r, t, n);
	} else if (e.type === "parallel") for (let i of $y(e).filter((e) => !mb(e))) [...r].some((e) => Tb(e, i)) || (mb(i) || (r.add(i), n.add(i)), Lb(i, t, n, r));
}
function Rb(e, t, n, r, i) {
	for (let a of r) if ((!i || Tb(a, i)) && e.add(a), a.type === "parallel") for (let r of $y(a).filter((e) => !mb(e))) [...e].some((e) => Tb(e, r)) || (e.add(r), Lb(r, t, n, e));
}
function zb(e, t, n, r, i) {
	Rb(n, r, i, eb(e, t));
}
function Bb(e, t, n, r, i, a, o, s) {
	let c = e, l = jb(r, i, a);
	l.sort((e, t) => t.order - e.order);
	let u;
	for (let e of l) for (let t of wb(e)) {
		let n;
		n = t.history === "deep" ? (t) => Qy(t) && Tb(t, e) : (t) => t.parent === e, u ??= { ...a }, u[t.id] = Array.from(i).filter(n);
	}
	for (let e of l) c = Ub(c, t, n, [...e.exit, ...e.invoke.map((e) => Xy(e.id))], o, void 0), i.delete(e);
	return [c, u || a];
}
function Vb(e, t) {
	return e.implementations.actions[t];
}
function Hb(e, t, n, r, i, a) {
	let { machine: o } = e, s = e;
	for (let e of r) {
		let r = typeof e == "function", c = r ? e : Vb(o, typeof e == "string" ? e : e.type), l = {
			context: s.context,
			event: t,
			self: n.self,
			system: n.system
		}, u = r || typeof e == "string" ? void 0 : "params" in e ? typeof e.params == "function" ? e.params({
			context: s.context,
			event: t
		}) : e.params : void 0;
		if (!c || !("resolve" in c)) {
			n.actionExecutor({
				type: typeof e == "string" ? e : typeof e == "object" ? e.type : e.name || "(anonymous)",
				info: l,
				params: u,
				exec: c
			});
			continue;
		}
		let d = c, [f, p, m] = d.resolve(n, s, l, u, c, i);
		s = f, "retryResolve" in d && a?.push([d, p]), "execute" in d && n.actionExecutor({
			type: d.type,
			info: l,
			params: p,
			exec: d.execute.bind(null, n, p)
		}), m && (s = Hb(s, t, n, m, i, a));
	}
	return s;
}
function Ub(e, t, n, r, i, a) {
	let o = a ? [] : void 0, s = Hb(e, t, n, r, {
		internalQueue: i,
		deferredActorIds: a
	}, o);
	return o?.forEach(([e, t]) => {
		e.retryResolve(n, s, t);
	}), s;
}
function Wb(e, t, n, r) {
	let i = e, a = [];
	function o(e, t, r) {
		n.system._sendInspectionEvent({
			type: "@xstate.microstep",
			actorRef: n.self,
			event: t,
			snapshot: e,
			_transitions: r
		}), a.push(e);
	}
	if (t.type === "xstate.stop") return i = nx(Gb(i, t, n), { status: "stopped" }), o(i, t, []), {
		snapshot: i,
		microstates: a
	};
	let s = t;
	if (s.type !== uy) {
		let t = s, c = Oy(t), l = Kb(t, i);
		if (c && !l.length) return i = nx(e, {
			status: "error",
			error: t.error
		}), o(i, t, []), {
			snapshot: i,
			microstates: a
		};
		i = Nb(l, e, n, s, !1, r), o(i, t, l);
	}
	let c = !0;
	for (; i.status === "active";) {
		let e = c ? qb(i, s) : [], t = e.length ? i : void 0;
		if (!e.length) {
			if (!r.length) break;
			s = r.shift(), e = Kb(s, i);
		}
		i = Nb(e, i, n, s, !1, r), c = i !== t, o(i, s, e);
	}
	return i.status !== "active" && Gb(i, s, n), {
		snapshot: i,
		microstates: a
	};
}
function Gb(e, t, n) {
	return Ub(e, t, n, Object.values(e.children).map((e) => Xy(e)), [], void 0);
}
function Kb(e, t) {
	return t.machine.getTransitionData(t, e);
}
function qb(e, t) {
	let n = /* @__PURE__ */ new Set(), r = e._nodes.filter(Qy);
	for (let i of r) loop: for (let r of [i].concat(eb(i, void 0))) if (r.always) {
		for (let i of r.always) if (i.guard === void 0 || Zy(i.guard, e.context, t, e)) {
			n.add(i);
			break loop;
		}
	}
	return Db(Array.from(n), new Set(e._nodes), e.historyValue);
}
function Jb(e, t) {
	return ib(e, [...tb(yb(e, t))]);
}
function Yb(e) {
	return !!e && typeof e == "object" && "machine" in e && "value" in e;
}
var Xb = function(e) {
	return yy(e, this.value);
}, Zb = function(e) {
	return this.tags.has(e);
}, Qb = function(e) {
	let t = this.machine.getTransitionData(this, e);
	return !!t?.length && t.some((e) => e.target !== void 0 || e.actions.length);
}, $b = function() {
	let { _nodes: e, tags: t, machine: n, getMeta: r, toJSON: i, can: a, hasTag: o, matches: s, ...c } = this;
	return {
		...c,
		tags: Array.from(t)
	};
}, ex = function() {
	return this._nodes.reduce((e, t) => (t.meta !== void 0 && (e[t.id] = t.meta), e), {});
};
function tx(e, t) {
	return {
		status: e.status,
		output: e.output,
		error: e.error,
		machine: t,
		context: e.context,
		_nodes: e._nodes,
		value: ib(t.root, e._nodes),
		tags: new Set(e._nodes.flatMap((e) => e.tags)),
		children: e.children,
		historyValue: e.historyValue || {},
		matches: Xb,
		hasTag: Zb,
		can: Qb,
		getMeta: ex,
		toJSON: $b
	};
}
function nx(e, t = {}) {
	return tx({
		...e,
		...t
	}, e.machine);
}
function rx(e, t) {
	let { _nodes: n, tags: r, machine: i, children: a, context: o, can: s, hasTag: c, matches: l, getMeta: u, toJSON: d, ...f } = e, p = {};
	for (let e in a) {
		let n = a[e];
		p[e] = {
			snapshot: n.getPersistedSnapshot(t),
			src: n.src,
			systemId: n._systemId,
			syncSnapshot: n._syncSnapshot
		};
	}
	return {
		...f,
		context: ix(o),
		children: p
	};
}
function ix(e) {
	let t;
	for (let n in e) {
		let r = e[n];
		if (r && typeof r == "object") if ("sessionId" in r && "send" in r && "ref" in r) t ??= Array.isArray(e) ? e.slice() : { ...e }, t[n] = {
			xstate$$type: 1,
			id: r.id
		};
		else {
			let i = ix(r);
			i !== r && (t ??= Array.isArray(e) ? e.slice() : { ...e }, t[n] = i);
		}
	}
	return t ?? e;
}
function ax(e, t, n, r, { event: i, id: a, delay: o }, { internalQueue: s }) {
	let c = t.machine.implementations.delays;
	if (typeof i == "string") throw Error(`Only event objects may be used with raise; use raise({ type: "${i}" }) instead`);
	let l = typeof i == "function" ? i(n, r) : i, u;
	if (typeof o == "string") {
		let e = c && c[o];
		u = typeof e == "function" ? e(n, r) : e;
	} else u = typeof o == "function" ? o(n, r) : o;
	return typeof u != "number" && s.push(l), [
		t,
		{
			event: l,
			id: a,
			delay: u
		},
		void 0
	];
}
function ox(e, t) {
	let { event: n, delay: r, id: i } = t;
	if (typeof r == "number") {
		e.defer(() => {
			let t = e.self;
			e.system.scheduler.schedule(t, t, n, r, i);
		});
		return;
	}
}
function sx(e, t) {
	function n(e, t) {}
	return n.type = "xstate.raise", n.event = e, n.id = t?.id, n.delay = t?.delay, n.resolve = ax, n.execute = ox, n;
}
//#endregion
//#region node_modules/xstate/dist/log-3d9d72a9.esm.js
function cx(e, { machine: t, context: n }, r, i) {
	let a = (a, o) => {
		if (typeof a == "string") {
			let s = Ny(t, a);
			if (!s) throw Error(`Actor logic '${a}' not implemented in machine '${t.id}'`);
			let c = Vy(s, {
				id: o?.id,
				parent: e.self,
				syncSnapshot: o?.syncSnapshot,
				input: typeof o?.input == "function" ? o.input({
					context: n,
					event: r,
					self: e.self
				}) : o?.input,
				src: a,
				systemId: o?.systemId
			});
			return i[c.id] = c, c;
		} else return Vy(a, {
			id: o?.id,
			parent: e.self,
			syncSnapshot: o?.syncSnapshot,
			input: o?.input,
			src: a,
			systemId: o?.systemId
		});
	};
	return (t, n) => {
		let r = a(t, n);
		return i[r.id] = r, e.defer(() => {
			r._processingStatus !== Ry.Stopped && r.start();
		}), r;
	};
}
function lx(e, t, n, r, { assignment: i }) {
	if (!t.context) throw Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
	let a = {}, o = {
		context: t.context,
		event: n.event,
		spawn: cx(e, t, n.event, a),
		self: e.self,
		system: e.system
	}, s = {};
	if (typeof i == "function") s = i(o, r);
	else for (let e of Object.keys(i)) {
		let t = i[e];
		s[e] = typeof t == "function" ? t(o, r) : t;
	}
	return [
		nx(t, {
			context: Object.assign({}, t.context, s),
			children: Object.keys(a).length ? {
				...t.children,
				...a
			} : t.children
		}),
		void 0,
		void 0
	];
}
function ux(e) {
	function t(e, t) {}
	return t.type = "xstate.assign", t.assignment = e, t.resolve = lx, t;
}
function dx(e, t, n, r, { event: i }) {
	return [
		t,
		{ event: typeof i == "function" ? i(n, r) : i },
		void 0
	];
}
function fx(e, { event: t }) {
	e.defer(() => e.emit(t));
}
function px(e) {
	function t(e, t) {}
	return t.type = "xstate.emit", t.event = e, t.resolve = dx, t.execute = fx, t;
}
var mx = /*#__PURE__*/ function(e) {
	return e.Parent = "#_parent", e.Internal = "#_internal", e;
}({});
function hx(e, t, n, r, { to: i, event: a, id: o, delay: s }, c) {
	let l = t.machine.implementations.delays;
	if (typeof a == "string") throw Error(`Only event objects may be used with sendTo; use sendTo({ type: "${a}" }) instead`);
	let u = typeof a == "function" ? a(n, r) : a, d;
	if (typeof s == "string") {
		let e = l && l[s];
		d = typeof e == "function" ? e(n, r) : e;
	} else d = typeof s == "function" ? s(n, r) : s;
	let f = typeof i == "function" ? i(n, r) : i, p;
	if (typeof f == "string") {
		if (p = f === mx.Parent ? e.self._parent : f === mx.Internal ? e.self : f.startsWith("#_") ? t.children[f.slice(2)] : c.deferredActorIds?.includes(f) ? f : t.children[f], !p) throw Error(`Unable to send event to actor '${f}' from machine '${t.machine.id}'.`);
	} else p = f || e.self;
	return [
		t,
		{
			to: p,
			targetId: typeof f == "string" ? f : void 0,
			event: u,
			id: o,
			delay: d
		},
		void 0
	];
}
function gx(e, t, n) {
	typeof n.to == "string" && (n.to = t.children[n.to]);
}
function _x(e, t) {
	e.defer(() => {
		let { to: n, event: r, delay: i, id: a } = t;
		if (typeof i == "number") {
			e.system.scheduler.schedule(e.self, n, r, i, a);
			return;
		}
		e.system._relay(e.self, n, r.type === "xstate.error" ? hy(e.self.id, r.data) : r);
	});
}
function vx(e, t, n) {
	function r(e, t) {}
	return r.type = "xstate.sendTo", r.to = e, r.event = t, r.id = n?.id, r.delay = n?.delay, r.resolve = hx, r.retryResolve = gx, r.execute = _x, r;
}
function yx(e, t) {
	return vx(mx.Parent, e, t);
}
function bx(e, t, n, r, { collect: i }) {
	let a = [], o = function(e) {
		a.push(e);
	};
	return o.assign = (...e) => {
		a.push(ux(...e));
	}, o.cancel = (...e) => {
		a.push(Wy(...e));
	}, o.raise = (...e) => {
		a.push(sx(...e));
	}, o.sendTo = (...e) => {
		a.push(vx(...e));
	}, o.sendParent = (...e) => {
		a.push(yx(...e));
	}, o.spawnChild = (...e) => {
		a.push(qy(...e));
	}, o.stopChild = (...e) => {
		a.push(Xy(...e));
	}, o.emit = (...e) => {
		a.push(px(...e));
	}, i({
		context: n.context,
		event: n.event,
		enqueue: o,
		check: (e) => Zy(e, t.context, n.event, t),
		self: e.self,
		system: e.system
	}, r), [
		t,
		void 0,
		a
	];
}
function $(e) {
	function t(e, t) {}
	return t.type = "xstate.enqueueActions", t.collect = e, t.resolve = bx, t;
}
//#endregion
//#region node_modules/xstate/dist/xstate.esm.js
function xx(e, t) {
	let n = Ty(t);
	if (!n.includes(e.type)) {
		let t = n.length === 1 ? `type "${n[0]}"` : `one of types "${n.join("\", \"")}"`;
		throw Error(`Expected event ${JSON.stringify(e)} to have ${t}`);
	}
}
var Sx = /* @__PURE__ */ new WeakMap();
function Cx(e, t, n) {
	let r = Sx.get(e);
	return r ? t in r || (r[t] = n()) : (r = { [t]: n() }, Sx.set(e, r)), r[t];
}
var wx = {}, Tx = (e) => typeof e == "string" ? { type: e } : typeof e == "function" ? "resolve" in e ? { type: e.type } : { type: e.name } : e, Ex = class e {
	constructor(t, n) {
		if (this.config = t, this.key = void 0, this.id = void 0, this.type = void 0, this.path = void 0, this.states = void 0, this.history = void 0, this.entry = void 0, this.exit = void 0, this.parent = void 0, this.machine = void 0, this.meta = void 0, this.output = void 0, this.order = -1, this.description = void 0, this.tags = [], this.transitions = void 0, this.always = void 0, this.parent = n._parent, this.key = n._key, this.machine = n._machine, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.id = this.config.id || [this.machine.id, ...this.path].join("."), this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.description = this.config.description, this.order = this.machine.idMap.size, this.machine.idMap.set(this.id, this), this.states = this.config.states ? Cy(this.config.states, (t, n) => new e(t, {
			_parent: this,
			_key: n,
			_machine: this.machine
		})) : wx, this.type === "compound" && !this.config.initial) throw Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
		this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this.entry = Ty(this.config.entry).slice(), this.exit = Ty(this.config.exit).slice(), this.meta = this.config.meta, this.output = this.type === "final" || !this.parent ? this.config.output : void 0, this.tags = Ty(t.tags).slice();
	}
	_initialize() {
		this.transitions = ub(this), this.config.always && (this.always = ky(this.config.always).map((e) => lb(this, "", e))), Object.keys(this.states).forEach((e) => {
			this.states[e]._initialize();
		});
	}
	get definition() {
		return {
			id: this.id,
			key: this.key,
			version: this.machine.version,
			type: this.type,
			initial: this.initial ? {
				target: this.initial.target,
				source: this,
				actions: this.initial.actions.map(Tx),
				eventType: null,
				reenter: !1,
				toJSON: () => ({
					target: this.initial.target.map((e) => `#${e.id}`),
					source: `#${this.id}`,
					actions: this.initial.actions.map(Tx),
					eventType: null
				})
			} : void 0,
			history: this.history,
			states: Cy(this.states, (e) => e.definition),
			on: this.on,
			transitions: [...this.transitions.values()].flat().map((e) => ({
				...e,
				actions: e.actions.map(Tx)
			})),
			entry: this.entry.map(Tx),
			exit: this.exit.map(Tx),
			meta: this.meta,
			order: this.order || -1,
			output: this.output,
			invoke: this.invoke,
			description: this.description,
			tags: this.tags
		};
	}
	toJSON() {
		return this.definition;
	}
	get invoke() {
		return Cx(this, "invoke", () => Ty(this.config.invoke).map((e, t) => {
			let { src: n, systemId: r } = e, i = e.id ?? My(this.id, t), a = typeof n == "string" ? n : `xstate.invoke.${My(this.id, t)}`;
			return {
				...e,
				src: a,
				id: i,
				systemId: r,
				toJSON() {
					let { onDone: t, onError: n, ...r } = e;
					return {
						...r,
						type: "xstate.invoke",
						src: a,
						id: i
					};
				}
			};
		}));
	}
	get on() {
		return Cx(this, "on", () => [...this.transitions].flatMap(([e, t]) => t.map((t) => [e, t])).reduce((e, [t, n]) => (e[t] = e[t] || [], e[t].push(n), e), {}));
	}
	get after() {
		return Cx(this, "delayedTransitions", () => cb(this));
	}
	get initial() {
		return Cx(this, "initial", () => db(this, this.config.initial));
	}
	next(e, t) {
		let n = t.type, r = [], i, a = Cx(this, `candidates-${n}`, () => sb(this, n));
		for (let o of a) {
			let { guard: a } = o, s = e.context, c = !1;
			try {
				c = !a || Zy(a, s, t, e);
			} catch (e) {
				let t = typeof a == "string" ? a : typeof a == "object" ? a.type : void 0;
				throw Error(`Unable to evaluate guard ${t ? `'${t}' ` : ""}in transition for event '${n}' in state node '${this.id}':\n${e.message}`);
			}
			if (c) {
				r.push(...o.actions), i = o;
				break;
			}
		}
		return i ? [i] : void 0;
	}
	get events() {
		return Cx(this, "events", () => {
			let { states: e } = this, t = new Set(this.ownEvents);
			if (e) for (let n of Object.keys(e)) {
				let r = e[n];
				if (r.states) for (let e of r.events) t.add(`${e}`);
			}
			return Array.from(t);
		});
	}
	get ownEvents() {
		let e = new Set([...this.transitions.keys()].filter((e) => this.transitions.get(e).some((e) => !(!e.target && !e.actions.length && !e.reenter))));
		return Array.from(e);
	}
}, Dx = class e {
	constructor(e, t) {
		this.config = e, this.version = void 0, this.schemas = void 0, this.implementations = void 0, this.__xstatenode = !0, this.idMap = /* @__PURE__ */ new Map(), this.root = void 0, this.id = void 0, this.states = void 0, this.events = void 0, this.id = e.id || "(machine)", this.implementations = {
			actors: t?.actors ?? {},
			actions: t?.actions ?? {},
			delays: t?.delays ?? {},
			guards: t?.guards ?? {}
		}, this.version = this.config.version, this.schemas = this.config.schemas, this.transition = this.transition.bind(this), this.getInitialSnapshot = this.getInitialSnapshot.bind(this), this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this), this.restoreSnapshot = this.restoreSnapshot.bind(this), this.start = this.start.bind(this), this.root = new Ex(e, {
			_key: this.id,
			_machine: this
		}), this.root._initialize(), this.states = this.root.states, this.events = this.root.events;
	}
	provide(t) {
		let { actions: n, guards: r, actors: i, delays: a } = this.implementations;
		return new e(this.config, {
			actions: {
				...n,
				...t.actions
			},
			guards: {
				...r,
				...t.guards
			},
			actors: {
				...i,
				...t.actors
			},
			delays: {
				...a,
				...t.delays
			}
		});
	}
	resolveState(e) {
		let t = Jb(this.root, e.value), n = tb(yb(this.root, t));
		return tx({
			_nodes: [...n],
			context: e.context || {},
			children: {},
			status: ab(n, this.root) ? "done" : e.status || "active",
			output: e.output,
			error: e.error,
			historyValue: e.historyValue
		}, this);
	}
	transition(e, t, n) {
		return Wb(e, t, n, []).snapshot;
	}
	microstep(e, t, n) {
		return Wb(e, t, n, []).microstates;
	}
	getTransitionData(e, t) {
		return Cb(this.root, e.value, e, t) || [];
	}
	getPreInitialState(e, t, n) {
		let { context: r } = this.config, i = tx({
			context: typeof r != "function" && r ? r : {},
			_nodes: [this.root],
			children: {},
			status: "active"
		}, this);
		return typeof r == "function" ? Ub(i, t, e, [ux(({ spawn: e, event: t, self: n }) => r({
			spawn: e,
			input: t.input,
			self: n
		}))], n, void 0) : i;
	}
	getInitialSnapshot(e, t) {
		let n = gy(t), r = [], i = this.getPreInitialState(e, n, r), { snapshot: a } = Wb(Nb([{
			target: [...gb(this.root)],
			source: this.root,
			reenter: !0,
			actions: [],
			eventType: null,
			toJSON: null
		}], i, e, n, !0, r), n, e, r);
		return a;
	}
	start(e) {
		Object.values(e.children).forEach((e) => {
			e.getSnapshot().status === "active" && e.start();
		});
	}
	getStateNodeById(e) {
		let t = by(e), n = t.slice(1), r = ob(t[0]) ? t[0].slice(1) : t[0], i = this.idMap.get(r);
		if (!i) throw Error(`Child state node '#${r}' does not exist on machine '${this.id}'`);
		return vb(i, n);
	}
	get definition() {
		return this.root.definition;
	}
	toJSON() {
		return this.definition;
	}
	getPersistedSnapshot(e, t) {
		return rx(e, t);
	}
	restoreSnapshot(e, t) {
		let n = {}, r = e.children;
		Object.keys(r).forEach((e) => {
			let i = r[e], a = i.snapshot, o = i.src, s = typeof o == "string" ? Ny(this, o) : o;
			s && (n[e] = Vy(s, {
				id: e,
				parent: t.self,
				syncSnapshot: i.syncSnapshot,
				snapshot: a,
				src: o,
				systemId: i.systemId
			}));
		});
		let i = tx({
			...e,
			children: n,
			_nodes: Array.from(tb(yb(this.root, e.value)))
		}, this), a = /* @__PURE__ */ new Set();
		function o(e, t) {
			if (!a.has(e)) {
				a.add(e);
				for (let n in e) {
					let r = e[n];
					if (r && typeof r == "object") {
						if ("xstate$$type" in r && r.xstate$$type === 1) {
							e[n] = t[r.id];
							continue;
						}
						o(r, t);
					}
				}
			}
		}
		return o(i.context, n), i;
	}
};
function Ox(e, t) {
	return new Dx(e, t);
}
function kx({ schemas: e, actors: t, actions: n, guards: r, delays: i }) {
	return { createMachine: (a) => Ox({
		...a,
		schemas: e
	}, {
		actors: t,
		actions: n,
		guards: r,
		delays: i
	}) };
}
//#endregion
//#region node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.js
var Ax = /* @__PURE__ */ P(((e) => {
	var t = Ne("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, o = t.useLayoutEffect, s = t.useDebugValue;
	function c(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), c = r[0].inst, u = r[1];
		return o(function() {
			c.value = n, c.getSnapshot = t, l(c) && u({ inst: c });
		}, [
			e,
			n,
			t
		]), a(function() {
			return l(c) && u({ inst: c }), e(function() {
				l(c) && u({ inst: c });
			});
		}, [e]), s(n), n;
	}
	function l(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function u(e, t) {
		return t();
	}
	var d = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? u : c;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? d : t.useSyncExternalStore;
})), jx = /* @__PURE__ */ P(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			d || a.startTransition === void 0 || (d = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!f) {
				var i = t();
				o(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
			}
			i = s({ inst: {
				value: n,
				getSnapshot: t
			} });
			var p = i[0].inst, m = i[1];
			return l(function() {
				p.value = n, p.getSnapshot = t, r(p) && m({ inst: p });
			}, [
				e,
				n,
				t
			]), c(function() {
				return r(p) && m({ inst: p }), e(function() {
					r(p) && m({ inst: p });
				});
			}, [e]), u(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !o(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = Ne("react"), o = typeof Object.is == "function" ? Object.is : t, s = a.useState, c = a.useEffect, l = a.useLayoutEffect, u = a.useDebugValue, d = !1, f = !1, p = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? p : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Mx = /* @__PURE__ */ P(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ax() : t.exports = jx();
})), Nx = /* @__PURE__ */ P(((e) => {
	var t = Ne("react"), n = Mx();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, o = t.useRef, s = t.useEffect, c = t.useMemo, l = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
		var d = o(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = c(function() {
			function e(e) {
				if (!a) {
					if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
						var t = f.value;
						if (u(t, e)) return s = t;
					}
					return s = e;
				}
				if (t = s, i(o, e)) return t;
				var n = r(e);
				return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
			}
			var a = !1, o, s, c = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, c === null ? void 0 : function() {
				return e(c());
			}];
		}, [
			t,
			n,
			r,
			u
		]);
		var p = a(e, d[0], d[1]);
		return s(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), l(p), p;
	};
})), Px = /* @__PURE__ */ P(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var n = Ne("react"), r = Mx(), i = typeof Object.is == "function" ? Object.is : t, a = r.useSyncExternalStore, o = n.useRef, s = n.useEffect, c = n.useMemo, l = n.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, t, n, r, u) {
			var d = o(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = c(function() {
				function e(e) {
					if (!a) {
						if (a = !0, o = e, e = r(e), u !== void 0 && f.hasValue) {
							var t = f.value;
							if (u(t, e)) return s = t;
						}
						return s = e;
					}
					if (t = s, i(o, e)) return t;
					var n = r(e);
					return u !== void 0 && u(t, n) ? (o = e, t) : (o = e, s = n);
				}
				var a = !1, o, s, c = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, c === null ? void 0 : function() {
					return e(c());
				}];
			}, [
				t,
				n,
				r,
				u
			]);
			var p = a(e, d[0], d[1]);
			return s(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), l(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Fx = (/* @__PURE__ */ P(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Nx() : t.exports = Px();
})))();
Mx();
var Ix = (e, t) => {
	t(e);
	let n = e.getSnapshot().children;
	n && Object.values(n).forEach((e) => {
		Ix(e, t);
	});
};
function Lx(e) {
	let t = [];
	Ix(e, (e) => {
		t.push([e, e.getSnapshot()]), e.observers = /* @__PURE__ */ new Set();
	});
	let n = e.system.getSnapshot?.();
	e.stop(), e.system._snapshot = n, t.forEach(([e, t]) => {
		e._processingStatus = 0, e._snapshot = t;
	});
}
function Rx(e, ...[t]) {
	let [[n, r], i] = A(() => {
		let n = Vy(e, t);
		return [e.config, n];
	});
	if (e.config !== n) {
		let n = Vy(e, {
			...t,
			snapshot: r.getPersistedSnapshot({ __unsafeAllowInlineActors: !0 })
		});
		i([e.config, n]), r = n;
	}
	return ny(() => {
		r.logic.implementations = e.implementations;
	}), r;
}
function zx(e, ...[t, n]) {
	let r = Rx(e, t);
	return w(() => {
		if (!n) return;
		let e = r.subscribe(jy(n));
		return () => {
			e.unsubscribe();
		};
	}, [n]), w(() => (r.start(), () => {
		Lx(r);
	}), [r]), r;
}
function Bx(e, t) {
	return e === t;
}
function Vx(e, t, n = Bx) {
	let r = S((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = S(() => e?.getSnapshot(), [e]);
	return (0, Fx.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
function Hx(e, t) {
	let n = /*#__PURE__*/ p.createContext(null), r = n.Provider;
	function i({ children: n, logic: i = e, machine: a, options: o }) {
		if (a) throw Error("The \"machine\" prop has been deprecated. Please use \"logic\" instead.");
		let s = zx(i, {
			...t,
			...o
		});
		return /*#__PURE__*/ p.createElement(r, {
			value: s,
			children: n
		});
	}
	i.displayName = "ActorProvider";
	function a() {
		let e = p.useContext(n);
		if (!e) throw Error(`You used a hook from "${i.displayName}" but it's not inside a <${i.displayName}> component.`);
		return e;
	}
	function o(e, t) {
		return Vx(a(), e, t);
	}
	return {
		Provider: i,
		useActorRef: a,
		useSelector: o
	};
}
//#endregion
//#region src/game/reducers/pull-card-from-deck/index.ts
var Ux = (e, t, n) => {
	let r = B.getPlayer(e, t), i = [...r.hand], a = [...r.deck], o = [...r.discardPile];
	if (n >= a.length) throw new Ut(n, t);
	let [s] = a.slice(n, n + 1);
	if (!s) throw new Ut(n, t);
	return a = [...a.slice(0, n), ...a.slice(n + 1)], i = [...i, s], a.length === 0 && (a = Lt.shuffle(o), o = []), e = wt(e, t, {
		deck: a,
		hand: i,
		discardPile: o
	}), e;
}, Wx = (e, t) => {
	let n = B.getPlayer(e, t), r = B.findCropIndexesInDeck(e, t, n.deck.length), i = Lt.chooseElement(r);
	if (i === void 0) throw new Bt("Could not select a crop card for starting hand: No crop cards available in deck.");
	e = Ux(e, t, i);
	let a = B.getPlayer(e, t);
	return e = wt(e, t, { hand: Lt.shuffle(a.hand) }), e = Rt(e, t, 6), e;
}, Gx = (e, t) => {
	let { deck: n } = B.getPlayer(e, t);
	return wt(e, t, { deck: Lt.shuffle(n) });
}, Kx = new class {
	constructor() {
		this.playerSeed = (e) => {
			let { deck: t, id: n } = e;
			if (t.length !== 60) throw new Bt(`Deck for player ${n} contains ${t.length} cards but must contain 60 cards instead`);
			if (!t.every(vn)) throw new Bt(`Deck for player ${n} contain invalid cards`);
			if (!t.some(fn)) throw new Bt(`Deck for player ${n} does not contain any crops`);
			return !0;
		};
	}
}(), qx = new class {
	buildField(e = {}) {
		return {
			cards: [],
			...e
		};
	}
	buildPlayer(e = {}) {
		return {
			id: dt(),
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
	buildMatch(e = {}, t = dt()) {
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
		return Object.keys(r).length === 0 && (a = Ct(a, { players: {
			...a.table.players,
			[t]: this.buildPlayer({ id: t })
		} })), a;
	}
	buildMatchForSession(e, t = e[0]?.id) {
		let n = this.buildMatch({}, t);
		for (let t of e) {
			Kx.playerSeed(t);
			let r = this.buildPlayer({
				...t,
				funds: Math.floor(n.table.communityFund / e.length)
			});
			n = Ct(n, { players: {
				...n.table.players,
				[r.id]: r
			} }), n = Gx(n, r.id), n = Wx(n, r.id);
		}
		return n = Ct(n, { communityFund: n.table.communityFund % e.length }), n = St(n, { currentPlayerId: n.sessionOwnerPlayerId }), n;
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
}(), Jx = () => ({
	botState: {
		cropCardIndicesToHarvest: [],
		cropsToPlayDuringTurn: 0,
		fieldCropIndicesToWaterDuringTurn: [],
		toolCardsThatCanBePlayed: 0
	},
	match: qx.buildMatch({
		cardsToDrawAtTurnStart: 1,
		eventCardsThatCanBePlayed: 1,
		selectedWaterCardInHandIdx: -1,
		winner: null
	}),
	shell: { triggerNotification: () => {} }
}), Yx = new class {
	getNumberOfCropCardsToPlay(e, t, { minimumCropsToPlay: n = 0 } = {}) {
		let r = B.getPlayer(e, t), i = B.findCropIndexesInPlayerHand(e, t), a = Math.max(n, Lt.chooseIntegerBetween(0, i.length)), o = 6 - r.field.cards.filter((e) => !!e).length;
		return Math.min(o, a, i.length);
	}
	getNumberOfEventCardsToPlay(e, t) {
		return +(B.findEventIndexesInPlayerHand(e, t).length > 0);
	}
	getNumberOfToolCardsToPlay(e, t) {
		let n = B.findToolIndexesInPlayerHand(e, t);
		return Lt.chooseIntegerBetween(0, n.length);
	}
	getEventCardIndexToPlay(e, t) {
		let n = B.findEventIndexesInPlayerHand(e, t);
		return Lt.chooseElement(n);
	}
	getToolCardIndexToPlay(e, t) {
		let n = B.findToolIndexesInPlayerHand(e, t);
		return Lt.chooseElement(n);
	}
	getCropCardIndicesToWater(e, t) {
		let { field: { cards: n }, hand: r } = B.getPlayer(e, t), i = [], { length: a } = r.filter((e) => nt(e));
		for (let e = 0; e < n.length && i.length !== a; e++) {
			let t = n[e];
			mn(t) && t.waterCards < t.instance.waterToMature && t.wasWateredDuringTurn === !1 && (i = [...i, e]);
		}
		return i;
	}
	getCropCardIndicesToHarvest(e, t) {
		let { field: { cards: n } } = B.getPlayer(e, t), r = [];
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			mn(t) && t.waterCards >= t.instance.waterToMature && (r = [...r, e]);
		}
		return r;
	}
	getOpenFieldPosition(e, t) {
		let { field: n } = B.getPlayer(e, t), { cards: r } = n, i = [];
		for (let e = 0; e < Math.max(6, r.length); e++) r[e] === void 0 && (i = [...i, e]);
		return Lt.chooseElement(i);
	}
}(), Xx = (e, t, n) => {
	let r = B.getPlayer(e, t), i = [...n, ...r.cardsPlayedDuringTurn];
	return e = wt(e, t, { cardsPlayedDuringTurn: i }), e;
}, Zx = (e, t) => {
	let n = (t, n) => {
		let r = B.getPlayer(e, t).hand[n];
		return z(r), Xx(e, t, [r]);
	};
	switch (t.type) {
		case I.SELECT_CARD_POSITION: {
			let { currentPlayerId: r } = e;
			z(r), e = n(r, t.cardIdxInHand);
			break;
		}
		case I.PLAY_EVENT:
		case I.PLAY_TOOL:
		case I.PLAY_WATER: {
			let { currentPlayerId: r } = e;
			z(r);
			let i = B.getPlayer(e, r).hand[t.cardIdxInHand];
			if (z(i), it(i) && i.isPlantable) break;
			e = n(r, t.cardIdxInHand);
			break;
		}
		default:
	}
	return e;
}, Qx = { [R.CHOOSING_CARD_POSITION]: {
	on: {
		[I.SELECT_CARD_POSITION]: R.PLANTING_CARD,
		[I.OPERATION_ABORTED]: [{
			guard: at.IS_SETUP_PHASE,
			target: R.WAITING_FOR_PLAYER_SETUP_ACTION
		}, { target: R.WAITING_FOR_PLAYER_TURN_ACTION }]
	},
	entry: $(({ event: e, enqueue: t, context: { match: n } }) => {
		switch (e.type) {
			case I.PLAY_PLANTABLE_TOOL: {
				let { currentPlayerId: r, sessionOwnerPlayerId: i } = n, { playerId: a, cardIdxInHand: o } = e;
				if (z(r), r !== i) {
					let e = Yx.getOpenFieldPosition(n, r);
					z(e), t.raise({
						type: I.SELECT_CARD_POSITION,
						cardIdxInHand: o,
						fieldIdxToPlace: e,
						playerId: a
					});
				}
				break;
			}
		}
		t.assign({ match: n });
	}),
	exit: $(({ event: e, enqueue: t, context: { match: n } }) => {
		switch (e.type) {
			case I.SELECT_CARD_POSITION:
				n = Zx(n, e);
				break;
		}
		t.assign({ match: n });
	})
} }, $x = { [R.GAME_OVER]: {
	on: {
		[I.INIT]: { actions: $(({ event: e, enqueue: t }) => {
			xx(e, I.INIT);
			let { playerSeeds: n, userPlayerId: r } = e, i = qx.buildMatchForSession(n, r), a = Jx();
			t.assign({
				...a,
				match: i
			}), t.raise({ type: I.PROMPT_PLAYER_FOR_SETUP_ACTION });
		}) },
		[I.PROMPT_PLAYER_FOR_SETUP_ACTION]: R.WAITING_FOR_PLAYER_SETUP_ACTION
	},
	entry: $(({ event: e, enqueue: t, context: { match: n } }) => {
		xx(e, I.PLAYER_RAN_OUT_OF_FUNDS);
		let r = Object.keys(n.table.players).find((t) => t !== e.playerId);
		if (r === void 0) throw new Bt("Winner could not be determined");
		t.assign({ match: {
			...n,
			winner: r
		} });
	})
} }, eS = (e) => {
	let t = B.playerIds(e), n = B.nextPlayerIndex(e);
	return e = St(e, { currentPlayerId: t[n] }), e;
}, tS = new class {
	removeAt(e, t) {
		if (t >= e.length) throw Error(`removeAt: Index ${t} out of bounds`);
		return e.filter((e, n) => n !== t);
	}
	replaceAt(e, t, n) {
		let r = e.slice(0, t), i = e.slice(t + 1);
		return [
			...Array.from({ length: t }, (e, t) => r[t]),
			n,
			...i
		];
	}
}(), nS = (e, t, n, r) => {
	let { field: i } = B.getPlayer(e, t), { cards: a } = i;
	if (B.fullPlots(e, t).length >= 6) throw new Ht(t);
	if (r === -1) throw new Vt("fieldIdxToPlace must not be -1");
	return a = tS.replaceAt(a, r, n), e = Tt(e, t, { cards: a }), e;
}, rS = (e, t, n, r) => {
	let { hand: i } = B.getPlayer(e, t), a = i[n];
	if (!a) throw new Ut(n, t);
	let o = tS.removeAt(i, n), s;
	if (fn(a)) s = {
		instance: a,
		wasWateredDuringTurn: !1,
		waterCards: 0
	};
	else if (it(a)) s = { instance: a };
	else throw new Wt(`${a.id} is not a plantable card.`);
	return e = nS(e, t, s, r), e = wt(e, t, { hand: o }), e;
}, iS = { [R.PERFORMING_BOT_SETUP_ACTION]: {
	on: {
		[I.START_TURN]: {
			target: R.WAITING_FOR_PLAYER_TURN_ACTION,
			guard: at.IS_SETUP_PHASE
		},
		[I.PROMPT_BOT_FOR_SETUP_ACTION]: { actions: $(({ event: e, context: { match: t, botState: n, botState: { cropsToPlayDuringTurn: r } }, enqueue: i }) => {
			xx(e, I.PROMPT_BOT_FOR_SETUP_ACTION);
			let { currentPlayerId: a } = t;
			if (z(a), B.getPlayer(t, a).field.cards.length > 0 && r === 0) i.raise({ type: I.START_TURN });
			else {
				r === 0 && (r = Yx.getNumberOfCropCardsToPlay(t, a, { minimumCropsToPlay: 1 }));
				let e = B.findCropIndexesInPlayerHand(t, a), n = Lt.chooseElement(e);
				if (n === void 0) throw new Bt(`Expected crops in hand but none were found for bot player ${a}`);
				i.raise({
					type: I.PLAY_CROP,
					playerId: a,
					cardIdxInHand: n
				}, { delay: 750 });
			}
			i.assign({
				match: t,
				botState: {
					...n,
					cropsToPlayDuringTurn: r
				}
			});
		}) },
		[I.PLAY_CROP]: { actions: $(({ event: e, context: { match: t }, enqueue: n }) => {
			xx(e, I.PLAY_CROP);
			let { cardIdxInHand: r } = e, { currentPlayerId: i } = t;
			z(i), t = Zx(t, e);
			let a = Yx.getOpenFieldPosition(t, i);
			if (a === void 0) throw new Vt(`${I.PLAY_CROP} event occurred for a full field`);
			n.raise({
				type: I.SELECT_CARD_POSITION,
				playerId: i,
				cardIdxInHand: r,
				fieldIdxToPlace: a
			}), n.assign({ match: t });
		}) },
		[I.SELECT_CARD_POSITION]: { actions: $(({ event: e, context: { match: t, botState: n, botState: { cropsToPlayDuringTurn: r } }, enqueue: i }) => {
			xx(e, I.SELECT_CARD_POSITION);
			let { cardIdxInHand: a, playerId: o, fieldIdxToPlace: s } = e, { currentPlayerId: c } = t;
			z(c), t = Zx(t, e), t = rS(t, o, a, s), r--, i.raise({ type: I.PROMPT_BOT_FOR_SETUP_ACTION }), i.assign({
				match: t,
				botState: {
					...n,
					cropsToPlayDuringTurn: r
				}
			});
		}) }
	},
	entry: $(({ context: { match: e }, enqueue: t }) => {
		let { currentPlayerId: n } = e;
		z(n), e = eS(e), t.raise({ type: I.PROMPT_BOT_FOR_SETUP_ACTION }), t.assign({ match: e });
	})
} }, aS = new class {
	constructor() {
		this.getCropBaseValue = (e) => e.waterToMature * 2, this.getCropSaleValue = (e, t) => {
			let n = this.getCropBaseValue(t);
			return t.id === e.buffedCrop?.crop.id && (n *= e.buffedCrop.multiplier), t.id === e.nerfedCrop?.crop.id && (n *= e.nerfedCrop.multiplier), n = Math.floor(n), Math.min(n, e.table.communityFund);
		};
	}
}(), oS = (e, t) => {
	let { communityFund: n } = e.table, r = Math.max(0, n + t);
	return e = Ct(e, { communityFund: r }), e;
}, sS = (e, t, n) => {
	let { funds: r } = B.getPlayer(e, t), i = Math.max(0, r + n);
	return e = wt(e, t, { funds: i }), e;
}, cS = (e, t, n) => {
	let r = [n, ...B.getPlayer(e, t).discardPile];
	return e = wt(e, t, { discardPile: r }), e;
}, lS = (e, t, n) => {
	let { field: r } = B.getPlayer(e, t), i = r.cards[n];
	if (!i) throw new Ut(n, t);
	let { cards: a } = r;
	return a = tS.replaceAt(a, n, void 0), e = Tt(e, t, { cards: a }), e = cS(e, t, i.instance), e;
}, uS = (e, t, n) => {
	let r = B.getPlayedCardFromField(e, t, n);
	Qt(r);
	let i = aS.getCropSaleValue(e, r.instance);
	return e = sS(e, t, i), e = oS(e, -i), e = lS(e, t, n), e;
}, dS = (e, t, n) => {
	let { hand: r } = B.getPlayer(e, t), i = r[n];
	if (!i) throw new Ut(n, t);
	let a = tS.removeAt(r, n);
	return e = wt(e, t, { hand: a }), e = cS(e, t, i), e;
}, fS = /* @__PURE__ */ je((/* @__PURE__ */ P(((e, t) => {
	var n = NaN, r = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, c = parseInt, l = Object.prototype.toString;
	function u(e, t, n) {
		return e === e && (n !== void 0 && (e = e <= n ? e : n), t !== void 0 && (e = e >= t ? e : t)), e;
	}
	function d(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function f(e) {
		return !!e && typeof e == "object";
	}
	function p(e) {
		return typeof e == "symbol" || f(e) && l.call(e) == r;
	}
	function m(e) {
		if (typeof e == "number") return e;
		if (p(e)) return n;
		if (d(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = d(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(i, "");
		var r = o.test(e);
		return r || s.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? n : +e;
	}
	function h(e, t, n) {
		return n === void 0 && (n = t, t = void 0), n !== void 0 && (n = m(n), n = n === n ? n : 0), t !== void 0 && (t = m(t), t = t === t ? t : 0), u(m(e), t, n);
	}
	t.exports = h;
})))()), pS = (e, t, n) => {
	let { funds: r } = B.getPlayer(e, n), { communityFund: i } = e.table, a = (0, fS.default)(t, -i, r);
	return e = sS(e, n, -a), e = oS(e, a), e;
}, mS = (e) => {
	let t = Object.values(e.table.players).reduce((e, t) => [
		...e,
		...t.deck,
		...t.hand,
		...t.discardPile,
		...t.field.cards.filter((e) => e !== void 0).map((e) => e.instance)
	], []), n = new Set(t.filter(fn).map((e) => e.id)), r = Object.values(xt).filter((e) => n.has(e.id)), [i, a] = Lt.shuffle(r);
	return e = St(e, {
		buffedCrop: i ? {
			crop: i,
			multiplier: 2
		} : null,
		nerfedCrop: a ? {
			crop: a,
			multiplier: .5
		} : null
	}), e;
}, hS = (e, t, n = 1) => {
	if (e = St(e, { turn: e.turn + 1 }), e = wt(e, t, { cardsPlayedDuringTurn: [] }), e = pS(e, 5, t), B.getPlayer(e, t).funds === 0) throw new zt(t);
	e = Rt(e, t, n);
	let r = B.getPlayer(e, t).field.cards;
	for (let n = 0; n < r.length; n++) {
		let i = r[n];
		mn(i) && (e = en(e, t, n, { wasWateredDuringTurn: !1 }));
	}
	return e = mS(e), e;
}, gS = (e) => (t) => {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof zt) {
			let { enqueue: n } = t;
			n.raise({
				type: I.PLAYER_RAN_OUT_OF_FUNDS,
				playerId: e.playerId
			});
		} else throw console.error(e), new Bt("Unexpected bot logic error");
	}
}, _S = { [R.PERFORMING_BOT_TURN_ACTION]: {
	initial: L.INITIALIZING,
	exit: $(({ event: e, context: { botState: t, match: n }, enqueue: r }) => {
		n = Zx(n, e);
		let { currentBotTurnPhase: i } = t;
		switch (e.type) {
			case I.SELECT_CARD_POSITION:
				i = L.PLAYING_CROPS;
				break;
			case I.PLAY_EVENT:
				i = L.PLAYING_EVENTS;
				break;
			case I.PLAY_TOOL:
				i = L.PLAYING_TOOLS;
				break;
			default:
		}
		r.assign({
			match: n,
			botState: {
				...t,
				currentBotTurnPhase: i
			}
		});
	}),
	on: {
		[I.PLAYER_RAN_OUT_OF_FUNDS]: R.GAME_OVER,
		[I.SELECT_CARD_POSITION]: R.PLANTING_CARD,
		[I.PLAY_EVENT]: R.PLAYING_EVENT,
		[I.PLAY_TOOL]: R.PLAYING_TOOL,
		[I.START_TURN]: R.WAITING_FOR_PLAYER_TURN_ACTION
	},
	states: {
		[L.INITIALIZING]: {
			on: { [I.BOT_TURN_INITIALIZED]: [
				{
					guard: at.IS_BOT_PHASE_PLAYING_EVENTS,
					target: L.PLAYING_EVENTS
				},
				{
					guard: at.IS_BOT_PHASE_PLAYING_TOOLS,
					target: L.PLAYING_TOOLS
				},
				{ target: L.PLAYING_CROPS }
			] },
			entry: $(gS(({ event: e, context: t, context: { botState: n, match: r }, enqueue: i }) => {
				switch (e.type) {
					case I.START_TURN: {
						let e = r;
						r = eS(r);
						let { currentPlayerId: i } = r;
						z(i);
						let a = e.table.players[i];
						if (a) for (let e of a.cardsPlayedDuringTurn) it(e) && e.onStartFollowingTurn && (r = e.onStartFollowingTurn({
							...t,
							match: r
						}).match);
						r = hS(r, i, r.cardsToDrawAtTurnStart), t = OS.applyDailyEffects({
							...t,
							match: r
						}), r = t.match, r = {
							...r,
							eventCardsThatCanBePlayed: Yx.getNumberOfEventCardsToPlay(r, i)
						}, n = {
							...n,
							cropsToPlayDuringTurn: Yx.getNumberOfCropCardsToPlay(r, i),
							currentBotTurnPhase: void 0,
							toolCardsThatCanBePlayed: Yx.getNumberOfToolCardsToPlay(r, i)
						};
						break;
					}
					default:
				}
				i.assign({
					botState: n,
					match: r
				}), i.raise({ type: I.BOT_TURN_INITIALIZED });
			}))
		},
		[L.PLAYING_CROPS]: {
			on: {
				[I.PLAY_CROP]: L.PLACING_CROP,
				[I.BOT_TURN_PHASE_COMPLETE]: L.WATERING_CROPS
			},
			entry: $(gS(({ context: { botState: { cropsToPlayDuringTurn: e }, match: t }, enqueue: n }) => {
				if (e > 0) {
					let { currentPlayerId: e } = t;
					z(e);
					let r = B.findCropIndexesInPlayerHand(t, e), i = Lt.chooseElement(r);
					if (i === void 0) throw new Bt(`areCropsToPlay is true but there are no crops in the hand of bot player ${e}`);
					n.raise({
						type: I.PLAY_CROP,
						playerId: e,
						cardIdxInHand: i
					}, { delay: 750 });
				} else n.raise({ type: I.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[L.PLACING_CROP]: {
			on: { [I.BOT_TURN_PHASE_COMPLETE]: L.PLAYING_CROPS },
			entry: $(gS(({ context: { botState: e, match: t }, enqueue: n }) => {
				let { cropsToPlayDuringTurn: r } = e;
				if (r > 0) {
					let { currentPlayerId: e } = t;
					z(e);
					let r = B.findCropIndexesInPlayerHand(t, e), i = Lt.chooseElement(r);
					if (i === void 0) throw new Bt(`areCropsToPlay is true but there are no crops in the hand of bot player ${e}`);
					let a = Yx.getOpenFieldPosition(t, e);
					if (a === void 0) throw new Vt(`${I.BOT_TURN_PHASE_COMPLETE} event occurred for a full field`);
					n.raise({
						type: I.SELECT_CARD_POSITION,
						playerId: e,
						cardIdxInHand: i,
						fieldIdxToPlace: a
					}, { delay: 750 });
				} else n.raise({ type: I.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[L.WATERING_CROPS]: {
			on: {
				[I.PLAY_WATER]: L.WATERING_CROP,
				[I.BOT_TURN_PHASE_COMPLETE]: L.PLAYING_EVENTS
			},
			entry: $(gS(({ context: { botState: e, match: t }, enqueue: n }) => {
				let { currentPlayerId: r } = t;
				z(r);
				let i = Yx.getCropCardIndicesToWater(t, r);
				if (i.length > 0) {
					let e = B.findWaterIndexesInPlayerHand(t, r);
					e[0] !== void 0 && n.raise({
						type: I.PLAY_WATER,
						cardIdxInHand: e[0],
						playerId: r
					}, { delay: 750 });
				} else n.raise({ type: I.BOT_TURN_PHASE_COMPLETE });
				n.assign({ botState: {
					...e,
					fieldCropIndicesToWaterDuringTurn: i
				} });
			}))
		},
		[L.WATERING_CROP]: {
			on: { [I.BOT_TURN_PHASE_COMPLETE]: L.WATERING_CROPS },
			entry: $(({ event: e, context: { match: t, botState: { fieldCropIndicesToWaterDuringTurn: n }, shell: { triggerNotification: r } }, enqueue: i }) => {
				t = Zx(t, e);
				let { currentPlayerId: a } = t;
				z(a);
				let o = B.getPlayer(t, a), s = o.hand.findIndex((e) => nt(e)), [c] = n;
				z(c, `fieldCropIndicesToWaterDuringTurn is empty in ${L.WATERING_CROP}`);
				let l = o.field.cards[c];
				Qt(l);
				let u = {
					...l,
					wasWateredDuringTurn: !0,
					waterCards: l.waterCards + 1
				};
				t = en(t, a, c, u), t = dS(t, a, s), r({
					type: ot.CROP_WATERED,
					payload: { cropWatered: l.instance }
				}), i.raise({ type: I.BOT_TURN_PHASE_COMPLETE }), i.assign({ match: t });
			})
		},
		[L.PLAYING_EVENTS]: {
			on: { [I.BOT_TURN_PHASE_COMPLETE]: L.PLAYING_TOOLS },
			entry: $(gS(({ context: { match: e }, enqueue: t }) => {
				if (e.eventCardsThatCanBePlayed > 0) {
					let { currentPlayerId: n } = e;
					z(n);
					let r = Yx.getEventCardIndexToPlay(e, n);
					if (r === void 0) throw new Bt(`areEventCardsToPlay is true but there are no events in the hand of bot player ${n}`);
					t.raise({
						type: I.PLAY_EVENT,
						cardIdxInHand: r,
						playerId: n
					}, { delay: 750 });
				} else t.raise({ type: I.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[L.PLAYING_TOOLS]: {
			on: { [I.BOT_TURN_PHASE_COMPLETE]: L.HARVESTING_CROPS },
			entry: $(gS(({ context: { botState: e, match: t }, enqueue: n }) => {
				if (e.toolCardsThatCanBePlayed > 0) {
					let { currentPlayerId: e } = t;
					z(e);
					let r = Yx.getToolCardIndexToPlay(t, e);
					if (r === void 0) throw new Bt(`areToolsToPlay is true but there are no tools in the hand of bot player ${e}`);
					let i = t.table.players[e]?.hand[r];
					z(i, "toolCardInstance is undefined"), qt(i.id);
					let a = nn[i.id], o = a.isPlantable && B.fullPlots(t, e).length < 6;
					if (!a.isPlantable || o) {
						n.raise({
							type: I.PLAY_TOOL,
							cardIdxInHand: r,
							playerId: e
						}, { delay: 750 });
						return;
					}
				}
				n.raise({ type: I.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[L.HARVESTING_CROPS]: {
			on: {
				[I.HARVEST_CROP]: L.HARVESTING_CROP,
				[I.BOT_TURN_PHASE_COMPLETE]: L.DONE
			},
			entry: $(gS(({ context: { botState: e, match: t }, enqueue: n }) => {
				let { currentPlayerId: r } = t;
				z(r);
				let i = Yx.getCropCardIndicesToHarvest(t, r);
				i.length > 0 ? i[0] !== void 0 && n.raise({
					type: I.HARVEST_CROP,
					playerId: r,
					cropIdxInFieldToHarvest: i[0]
				}, { delay: 750 }) : n.raise({ type: I.BOT_TURN_PHASE_COMPLETE }), n.assign({ botState: {
					...e,
					cropCardIndicesToHarvest: i
				} });
			}))
		},
		[L.HARVESTING_CROP]: {
			on: { [I.BOT_TURN_PHASE_COMPLETE]: L.HARVESTING_CROPS },
			entry: $(({ context: { match: e, botState: { cropCardIndicesToHarvest: [t] }, shell: { triggerNotification: n } }, enqueue: r }) => {
				let { currentPlayerId: i } = e;
				if (z(i), t !== void 0) {
					let r = B.getPlayer(e, i).field.cards[t];
					Qt(r), e = uS(e, i, t), n({
						type: ot.CROP_HARVESTED,
						payload: { cropHarvested: r.instance }
					});
				}
				r.raise({ type: I.BOT_TURN_PHASE_COMPLETE }), r.assign({ match: e });
			})
		},
		[L.DONE]: {
			entry: $(({ enqueue: e }) => {
				e.raise({ type: I.START_TURN });
			}),
			type: "final"
		}
	}
} }, vS = { [R.PLANTING_CARD]: {
	on: {
		[I.PROMPT_PLAYER_FOR_TURN_ACTION]: [{
			guard: at.IS_SETUP_PHASE,
			target: R.WAITING_FOR_PLAYER_SETUP_ACTION
		}, { target: R.WAITING_FOR_PLAYER_TURN_ACTION }],
		[I.PROMPT_BOT_FOR_TURN_ACTION]: R.PERFORMING_BOT_TURN_ACTION,
		[I.OPERATION_ABORTED]: R.WAITING_FOR_PLAYER_TURN_ACTION
	},
	entry: $(({ event: e, context: { botState: t, botState: { cropsToPlayDuringTurn: n, toolCardsThatCanBePlayed: r }, match: i, shell: { triggerNotification: a } }, enqueue: o }) => {
		xx(e, I.SELECT_CARD_POSITION);
		let { playerId: s, cardIdxInHand: c, fieldIdxToPlace: l } = e;
		try {
			let e = B.getCardInstanceFromHand(i, s, c);
			i = rS(i, s, c, l);
			let { currentPlayerId: t, sessionOwnerPlayerId: u } = i;
			if (t === u) it(e) && a({
				type: ot.TOOL_CARD_PLAYED,
				payload: { toolCard: e }
			}), o.raise({ type: I.PROMPT_PLAYER_FOR_TURN_ACTION });
			else {
				switch (e.type) {
					case F.CROP:
						n > 0 && n--;
						break;
					case F.TOOL: r > 0 && r--;
				}
				o.raise({ type: I.PROMPT_BOT_FOR_TURN_ACTION });
			}
		} catch (e) {
			console.error(e), o.raise({ type: I.OPERATION_ABORTED });
			return;
		}
		o.assign({
			match: i,
			botState: {
				...t,
				cropsToPlayDuringTurn: n,
				toolCardsThatCanBePlayed: r
			}
		});
	}),
	exit: $(({ event: e, context: t, enqueue: n }) => {
		let { match: r } = t;
		switch (e.type) {
			case I.OPERATION_ABORTED:
				r = {
					...r,
					selectedWaterCardInHandIdx: -1
				};
				break;
			default:
		}
		n.assign({ match: r });
	})
} }, yS = { [R.PLAYER_WATERING_CROP]: {
	on: {
		[I.SELECT_CROP_TO_WATER]: {
			target: R.WAITING_FOR_PLAYER_TURN_ACTION,
			guard: at.IS_SELECTED_IDX_VALID
		},
		[I.OPERATION_ABORTED]: R.WAITING_FOR_PLAYER_TURN_ACTION
	},
	entry: $(({ event: e, context: { match: t }, enqueue: n }) => {
		switch (e.type) {
			case I.PLAY_WATER: {
				let { cardIdxInHand: n } = e;
				t = {
					...t,
					selectedWaterCardInHandIdx: n
				};
				break;
			}
			default:
		}
		n.assign({ match: t });
	}),
	exit: $(({ event: e, context: { match: t, shell: { triggerNotification: n } }, enqueue: r }) => {
		let { selectedWaterCardInHandIdx: i } = t;
		switch (e.type) {
			case I.SELECT_CROP_TO_WATER: {
				let { playerId: r, waterCardInHandIdx: a, cropIdxInFieldToWater: o } = e, s = B.getPlayer(t, r).field.cards[o];
				Qt(s);
				let c = {
					...s,
					wasWateredDuringTurn: !0,
					waterCards: s.waterCards + 1
				};
				t = en(t, r, o, c), t = dS(t, r, a), i = -1, n({
					type: ot.CROP_WATERED,
					payload: { cropWatered: s.instance }
				});
				break;
			}
			case I.OPERATION_ABORTED:
				i = -1;
				break;
			default:
		}
		r.assign({ match: {
			...t,
			selectedWaterCardInHandIdx: i
		} });
	})
} }, bS = { [R.PLAYING_EVENT]: {
	on: {
		[I.PROMPT_PLAYER_FOR_TURN_ACTION]: R.WAITING_FOR_PLAYER_TURN_ACTION,
		[I.PROMPT_BOT_FOR_TURN_ACTION]: R.PERFORMING_BOT_TURN_ACTION
	},
	entry: $(({ event: e, context: t, context: { match: n, shell: { triggerNotification: r } }, enqueue: i }) => {
		xx(e, I.PLAY_EVENT);
		let { currentPlayerId: a, sessionOwnerPlayerId: o } = n, { playerId: s, cardIdxInHand: c } = e, l = B.getCardInstanceFromHand(n, s, c);
		Jt(l), z(a), r({
			type: ot.EVENT_CARD_PLAYED,
			payload: { eventCard: l }
		}), n = l.applyEffect(t).match, n = dS(n, a, c), a === o ? i.raise({ type: I.PROMPT_PLAYER_FOR_TURN_ACTION }) : i.raise({ type: I.PROMPT_BOT_FOR_TURN_ACTION }), n = {
			...n,
			eventCardsThatCanBePlayed: n.eventCardsThatCanBePlayed - 1
		}, i.assign({
			...t,
			match: n
		});
	})
} }, xS = { [R.PLAYING_TOOL]: {
	on: {
		[I.PROMPT_PLAYER_FOR_TURN_ACTION]: R.WAITING_FOR_PLAYER_TURN_ACTION,
		[I.PROMPT_BOT_FOR_TURN_ACTION]: R.PERFORMING_BOT_TURN_ACTION,
		[I.PLAY_PLANTABLE_TOOL]: R.CHOOSING_CARD_POSITION
	},
	entry: $(({ event: e, context: t, context: { botState: n, match: r, shell: { triggerNotification: i } }, enqueue: a }) => {
		xx(e, I.PLAY_TOOL);
		let { currentPlayerId: o, sessionOwnerPlayerId: s } = r, { playerId: c, cardIdxInHand: l } = e, u = B.getCardInstanceFromHand(r, c, l);
		Yt(u), z(o), (!u.isPlantable || o !== s) && i({
			type: ot.TOOL_CARD_PLAYED,
			payload: { toolCard: u }
		}), r = u.applyEffect?.(t).match ?? r, u.isPlantable ? a.raise({
			type: I.PLAY_PLANTABLE_TOOL,
			cardIdxInHand: l,
			playerId: o
		}) : (r = dS(r, o, l), o === s ? a.raise({ type: I.PROMPT_PLAYER_FOR_TURN_ACTION }) : (a.raise({ type: I.PROMPT_BOT_FOR_TURN_ACTION }), n = {
			...n,
			toolCardsThatCanBePlayed: n.toolCardsThatCanBePlayed - 1
		})), a.assign({
			match: r,
			botState: n
		});
	})
} }, SS = { [R.UNINITIALIZED]: { on: {
	[I.INIT]: { actions: $(({ event: e, enqueue: t }) => {
		xx(e, I.INIT);
		let { playerSeeds: n, userPlayerId: r } = e, i = qx.buildMatchForSession(n, r);
		t.assign({ match: i }), t.raise({ type: I.PROMPT_PLAYER_FOR_SETUP_ACTION });
	}) },
	[I.RESUME]: { actions: $(({ event: e, enqueue: t }) => {
		xx(e, I.RESUME);
		let { match: n, botState: r, matchState: i, userPlayerId: a } = e;
		t.assign({
			match: {
				...n,
				sessionOwnerPlayerId: a
			},
			botState: r
		}), i === R.WAITING_FOR_PLAYER_SETUP_ACTION ? t.raise({ type: I.PROMPT_PLAYER_FOR_SETUP_ACTION }) : t.raise({ type: I.PROMPT_PLAYER_FOR_TURN_ACTION });
	}) },
	[I.PROMPT_PLAYER_FOR_SETUP_ACTION]: R.WAITING_FOR_PLAYER_SETUP_ACTION,
	[I.PROMPT_PLAYER_FOR_TURN_ACTION]: R.WAITING_FOR_PLAYER_TURN_ACTION
} } }, CS = { [R.WAITING_FOR_PLAYER_SETUP_ACTION]: { on: {
	[I.PROMPT_BOT_FOR_SETUP_ACTION]: R.PERFORMING_BOT_SETUP_ACTION,
	[I.PLAY_CROP]: R.CHOOSING_CARD_POSITION
} } }, wS = (e, t, n = Infinity) => {
	let r = B.getPlayer(e, t).cardsPlayedDuringTurn.slice(n);
	return e = wt(e, t, { cardsPlayedDuringTurn: r }), e;
}, TS = { [R.WAITING_FOR_PLAYER_TURN_ACTION]: {
	on: {
		[I.PLAYER_RAN_OUT_OF_FUNDS]: R.GAME_OVER,
		[I.PLAY_CROP]: R.CHOOSING_CARD_POSITION,
		[I.PLAY_EVENT]: R.PLAYING_EVENT,
		[I.PLAY_WATER]: R.PLAYER_WATERING_CROP,
		[I.PLAY_TOOL]: R.PLAYING_TOOL,
		[I.START_TURN]: R.PERFORMING_BOT_TURN_ACTION,
		[I.HARVEST_CROP]: { actions: $(({ event: e, enqueue: t, context: { match: n, shell: { triggerNotification: r } } }) => {
			let { playerId: i, cropIdxInFieldToHarvest: a } = e, o = B.getPlayedCardFromField(n, i, a);
			Qt(o), n = uS(n, i, a), r({
				type: ot.CROP_HARVESTED,
				payload: { cropHarvested: o.instance }
			}), t.assign({ match: n });
		}) },
		[I.DISCARD_CARD_FROM_FIELD]: { actions: $(({ event: e, enqueue: t, context: { match: n, shell: { triggerNotification: r } } }) => {
			let { playerId: i, cardIdxInField: a } = e, o = B.getPlayedCardFromField(n, i, a);
			n = lS(n, i, a), r({
				type: ot.CARD_DISCARDED,
				payload: { cardDiscarded: o.instance }
			}), t.assign({ match: n });
		}) }
	},
	entry: $(({ event: e, context: t, context: { match: n }, enqueue: r }) => {
		try {
			switch (e.type) {
				case I.START_TURN: {
					n = {
						...n,
						cardsToDrawAtTurnStart: 1
					};
					let e = n;
					n = eS(n);
					let { currentPlayerId: r } = n;
					z(r);
					let i = B.getPlayer(e, r);
					for (let e of i.cardsPlayedDuringTurn) it(e) && e.onStartFollowingTurn && (n = e.onStartFollowingTurn({
						...t,
						match: n
					}).match);
					n = {
						...n,
						eventCardsThatCanBePlayed: 1
					}, n = hS(n, r, n.cardsToDrawAtTurnStart), t = OS.applyDailyEffects({
						...t,
						match: n
					}), n = t.match;
					break;
				}
				case I.OPERATION_ABORTED: {
					let { currentPlayerId: e } = n;
					z(e), n = wS(n, e, 1);
					break;
				}
				default:
			}
		} catch (e) {
			if (e instanceof zt) {
				let { currentPlayerId: e } = n;
				z(e), r.raise({
					type: I.PLAYER_RAN_OUT_OF_FUNDS,
					playerId: e
				});
			} else console.error(e);
		}
		r.assign({
			...t,
			match: n
		});
	}),
	exit: $(({ event: e, context: { match: t }, enqueue: n }) => {
		t = Zx(t, e), n.assign({ match: t });
	})
} }, ES = {
	initial: R.UNINITIALIZED,
	on: {
		[I.DANGEROUSLY_SET_CONTEXT]: { actions: $(({ event: e, enqueue: t }) => {
			xx(e, I.DANGEROUSLY_SET_CONTEXT);
			let { type: n, ...r } = e;
			t.assign(r);
		}) },
		[I.SET_SHELL]: { actions: $(({ event: e, enqueue: t }) => {
			xx(e, I.SET_SHELL);
			let { shell: n } = e;
			t.assign({ shell: n });
		}) }
	},
	states: {
		...SS,
		...$x,
		...Qx,
		...iS,
		..._S,
		...vS,
		...yS,
		...bS,
		...xS,
		...CS,
		...TS
	}
}, { createMachine: DS } = kx({
	types: {
		context: {},
		events: {}
	},
	guards: {
		[at.IS_BOT_PHASE_PLAYING_EVENTS]: ({ context: { botState: { currentBotTurnPhase: e } } }) => e === L.PLAYING_EVENTS,
		[at.IS_BOT_PHASE_PLAYING_TOOLS]: ({ context: { botState: { currentBotTurnPhase: e } } }) => e === L.PLAYING_TOOLS,
		[at.IS_SELECTED_IDX_VALID]: ({ event: e, context: { match: t } }) => {
			let { currentPlayerId: n } = t;
			switch (z(n), e.type) {
				case I.SELECT_CROP_TO_WATER: {
					let { cards: r } = B.getPlayer(t, n).field;
					return r[e.cropIdxInFieldToWater] !== void 0;
				}
				default:
			}
			return !0;
		},
		[at.IS_SETUP_PHASE]: ({ context: { match: e } }) => e.turn === 0
	}
}), OS = new class {
	constructor() {
		this.createMatchStateMachine = () => DS({
			context: Jx(),
			...ES
		}), this.startMatch = () => Vy(this.createMatchStateMachine()).start(), this.applyDailyEffects = (e) => {
			let { match: t } = e, { currentPlayerId: n } = t;
			z(n);
			let r = t.table.players[n];
			z(r);
			for (let n = 0; n < r.field.cards.length; n++) {
				let i = r.field.cards[n];
				i && it(i.instance) && i.instance.applyDailyEffect && (e = i.instance.applyDailyEffect({
					...e,
					match: t
				}, n), t = e.match);
			}
			return e;
		};
	}
}(), kS = Hx(OS.createMatchStateMachine()), AS = () => {
	let { match: e, matchState: t } = kS.useSelector(({ context: { match: e }, value: t }) => ({
		match: e,
		matchState: t
	})), n = t, r = null;
	if (yn(t)) if (R.PERFORMING_BOT_TURN_ACTION in t) {
		n = R.PERFORMING_BOT_TURN_ACTION;
		let e = t[R.PERFORMING_BOT_TURN_ACTION];
		z(e), Zt(e), r = e;
	} else throw TypeError("Unexpected matchState shape");
	if (typeof n != "string") throw TypeError("Actor state is not a string");
	return Xt(n), {
		match: e,
		matchState: n,
		botTurnActionState: r
	};
}, jS = v({
	blockingOperation: () => {
		throw Error("Calling context method outside of ShellContext.Provider");
	},
	isHandInViewport: !0,
	setIsHandInViewport: () => {
		throw Error("Calling context method outside of ShellContext.Provider");
	},
	showNotification: () => {
		throw Error("Calling context method outside of ShellContext.Provider");
	},
	selectedHandCardIdx: -1,
	setSelectedHandCardIdx: () => {
		throw Error("Calling context method outside of ShellContext.Provider");
	}
}), MS = (e) => {
	let { cardInstance: t, cardIdxInHand: n, cropIdxInFieldToWater: r, cropIdxInFieldToHarvest: i, cardIdxInField: a, playerId: o, onBeforePlay: s, canBeWatered: c = !1, canBeHarvested: l = !1, isFocused: u = !1, isInField: d = !1 } = e, { useActorRef: f } = kS, p = f(), { match: m, matchState: h } = AS(), { setIsHandInViewport: g, setSelectedHandCardIdx: _ } = C(jS), { eventCardsThatCanBePlayed: v, selectedWaterCardInHandIdx: y } = m, b = v > 0, x = async () => {
		let e = pn(t);
		switch (e || _(-1), s && await s(), z(n, "cardIdxInHand is not a valid hand index"), t.type) {
			case F.CROP:
				p.send({
					type: I.PLAY_CROP,
					cardIdxInHand: n,
					playerId: o
				}), g(!1);
				break;
			case F.WATER:
				p.send({
					type: I.PLAY_WATER,
					cardIdxInHand: n,
					playerId: o
				}), g(!1);
				break;
			case F.EVENT:
				p.send({
					type: I.PLAY_EVENT,
					cardIdxInHand: n,
					playerId: o
				});
				break;
			case F.TOOL:
				p.send({
					type: I.PLAY_TOOL,
					cardIdxInHand: n,
					playerId: o
				}), e && g(!1);
				break;
			default:
		}
	}, S = () => {
		z(r, "cropIdxInFieldToWater is not a valid field index"), p.send({
			type: I.SELECT_CROP_TO_WATER,
			playerId: o,
			cropIdxInFieldToWater: r,
			waterCardInHandIdx: y
		});
	}, w = () => {
		z(i, "cropIdxInFieldToHarvest is not a valid field index"), p.send({
			type: I.HARVEST_CROP,
			playerId: o,
			cropIdxInFieldToHarvest: i
		});
	}, T = () => {
		z(a, "cardIdxInField is not a valid field index"), p.send({
			type: I.DISCARD_CARD_FROM_FIELD,
			playerId: o,
			cardIdxInField: a
		});
	}, E = o === m.sessionOwnerPlayerId, D = !1, O = !1, k = !1, A = !1, ee = !1, te = !1;
	switch (t.type) {
		case F.CROP:
			te = t.id === m.buffedCrop?.crop.id, E && u && !d && [R.WAITING_FOR_PLAYER_TURN_ACTION, R.WAITING_FOR_PLAYER_SETUP_ACTION].includes(h) && (D = !0, B.getPlayer(m, o).field.cards.filter((e) => e !== void 0).length >= 6 && (O = !0)), E && u && d && c && [R.PLAYER_WATERING_CROP].includes(h) && (k = !0), E && u && d && l && [R.WAITING_FOR_PLAYER_TURN_ACTION].includes(h) && (A = !0);
			break;
		case F.EVENT:
			E && u && b && h === R.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0);
			break;
		case F.TOOL:
			E && u && !d && h === R.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0), E && d && u && (ee = !0);
			break;
		case F.WATER:
			E && u && h === R.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0);
			break;
		default:
	}
	let ne = d && c && h === R.PLAYER_WATERING_CROP && m.currentPlayerId === o && fn(t), re = d && l && fn(t) && h !== R.PLAYER_WATERING_CROP, j = "";
	return E && (ne ? j = "Needs water" : re && (j = "Ready to be harvested")), {
		isBuffedCrop: te,
		showPlayCardButton: D,
		playButtonDisabled: O,
		showWaterCropButton: k,
		showHarvestCropButton: A,
		showWaterableState: ne,
		showHarvestableState: re,
		showDiscardButton: ee,
		tooltipTitle: j,
		onPlayCard: x,
		onWaterCrop: S,
		onHarvestCrop: w,
		onDiscardCard: T,
		isSessionOwnersCard: E
	};
}, NS = (e) => fn(e.cardInstance), PS = (e) => nt(e.cardInstance), FS = (e) => rt(e.cardInstance), IS = (e) => it(e.cardInstance), LS = b(function({ playedCrop: e, ...t }, n) {
	let r = MS({
		playedCrop: e,
		...t
	}), { canBeHarvested: i, canBeWatered: a, isFocused: o, isInField: s, onBeforePlay: c, ...l } = t;
	return /* @__PURE__ */ M(ey, {
		...l,
		...r,
		ref: n,
		children: dn(t.cardInstance) ? /* @__PURE__ */ M(ty, {
			crop: t.cardInstance,
			playedCrop: e
		}) : null
	});
}), RS = b(function(e, t) {
	let n = MS(e), { canBeHarvested: r, canBeWatered: i, isFocused: a, isInField: o, onBeforePlay: s, ...c } = e;
	return /* @__PURE__ */ M(ey, {
		...c,
		...n,
		ref: t
	});
}), zS = b(function(e, t) {
	let n = MS(e), { canBeHarvested: r, canBeWatered: i, isFocused: a, isInField: o, onBeforePlay: s, ...c } = e;
	return /* @__PURE__ */ M(ey, {
		...c,
		...n,
		ref: t,
		children: /* @__PURE__ */ M($c, { children: e.cardInstance.description })
	});
}), BS = b(function(e, t) {
	let n = MS(e), { canBeHarvested: r, canBeWatered: i, isFocused: a, isInField: o, onBeforePlay: s, ...c } = e;
	return /* @__PURE__ */ M(ey, {
		...c,
		...n,
		ref: t,
		children: /* @__PURE__ */ M($c, { children: e.cardInstance.description })
	});
}), VS = b(function(e, t) {
	if (NS(e)) return /* @__PURE__ */ M(LS, {
		...e,
		ref: t
	});
	if (PS(e)) return /* @__PURE__ */ M(RS, {
		...e,
		ref: t
	});
	if (FS(e)) return /* @__PURE__ */ M(zS, {
		...e,
		ref: t
	});
	if (IS(e)) return /* @__PURE__ */ M(BS, {
		...e,
		ref: t
	});
	throw new Kt("Unexpected CardType");
}), HS = V.MEDIUM, US = ({ match: e, handleClickTopCard: t, isTopCardSelected: n, playerId: r, deckThicknessPx: i = 30, cardSize: a = HS, sx: o = [], ...s }) => {
	let { containerRef: l, selectedCardSxProps: d } = Cn({ cardSize: a }), f = c(), p = B.getPlayer(e, r), m = r === e.sessionOwnerPlayerId;
	return /* @__PURE__ */ M(u, {
		"data-testid": `deck_${r}`,
		height: bn[a].height,
		width: bn[a].width,
		position: "relative",
		ref: l,
		sx: [{ ...!m && { transform: "rotate(180deg)" } }, ...Re(o) ? o : [o]],
		...s,
		children: p.deck.map((e, r) => {
			let o = i / p.deck.length * r, s = r === p.deck.length - 1;
			return /* @__PURE__ */ M(VS, {
				cardInstance: e,
				playerId: p.id,
				position: "absolute",
				isFlipped: !(s && n),
				size: a,
				sx: {
					transform: `translateX(${o}px) translateY(${o / 2}px)`,
					transition: f.transitions.create(["transform"]),
					...s && n && d
				},
				...s && { onClick: t }
			}, e.instanceId);
		})
	});
}, WS = V.SMALL, GS = ({ playerId: e, match: t, cardSize: n = WS, discardPileThicknessPx: r = 30, ...i }) => {
	let a = c(), o = B.getPlayer(t, e), s = e === t.sessionOwnerPlayerId;
	return /* @__PURE__ */ M(u, {
		"data-testid": `discard-pile_${e}`,
		height: bn[n].height,
		width: bn[n].width,
		position: "relative",
		sx: {
			transformStyle: "preserve-3d",
			outlineStyle: "solid",
			outlineWidth: "2px",
			outlineColor: a.palette.divider,
			borderRadius: a.shape.borderRadius,
			...!s && { transform: "rotate(180deg)" }
		},
		...i,
		children: [...o.discardPile].reverse().map((t, i) => {
			let s = r / o.discardPile.length * i;
			return /* @__PURE__ */ M(l, {
				title: t.name,
				placement: "top",
				arrow: !0,
				children: /* @__PURE__ */ M(VS, {
					cardInstance: t,
					size: n,
					playerId: e,
					position: "absolute",
					sx: {
						transform: `translateX(${s}px)`,
						transition: a.transitions.create(["transform"])
					}
				})
			}, t.instanceId);
		})
	});
}, KS = /* @__PURE__ */ je((/* @__PURE__ */ P(((e, t) => {
	var n = "Expected a function", r = NaN, i = "[object Symbol]", a = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, c = /^0o[0-7]+$/i, l = parseInt, u = typeof global == "object" && global && global.Object === Object && global, d = typeof self == "object" && self && self.Object === Object && self, f = u || d || Function("return this")(), p = Object.prototype.toString, m = Math.max, h = Math.min, g = function() {
		return f.Date.now();
	};
	function _(e, t, r) {
		var i, a, o, s, c, l, u = 0, d = !1, f = !1, p = !0;
		if (typeof e != "function") throw TypeError(n);
		t = x(t) || 0, v(r) && (d = !!r.leading, f = "maxWait" in r, o = f ? m(x(r.maxWait) || 0, t) : o, p = "trailing" in r ? !!r.trailing : p);
		function _(t) {
			var n = i, r = a;
			return i = a = void 0, u = t, s = e.apply(r, n), s;
		}
		function y(e) {
			return u = e, c = setTimeout(C, t), d ? _(e) : s;
		}
		function b(e) {
			var n = e - l, r = e - u, i = t - n;
			return f ? h(i, o - r) : i;
		}
		function S(e) {
			var n = e - l, r = e - u;
			return l === void 0 || n >= t || n < 0 || f && r >= o;
		}
		function C() {
			var e = g();
			if (S(e)) return w(e);
			c = setTimeout(C, b(e));
		}
		function w(e) {
			return c = void 0, p && i ? _(e) : (i = a = void 0, s);
		}
		function T() {
			c !== void 0 && clearTimeout(c), u = 0, i = l = a = c = void 0;
		}
		function E() {
			return c === void 0 ? s : w(g());
		}
		function D() {
			var e = g(), n = S(e);
			if (i = arguments, a = this, l = e, n) {
				if (c === void 0) return y(l);
				if (f) return c = setTimeout(C, t), _(l);
			}
			return c === void 0 && (c = setTimeout(C, t)), s;
		}
		return D.cancel = T, D.flush = E, D;
	}
	function v(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function y(e) {
		return !!e && typeof e == "object";
	}
	function b(e) {
		return typeof e == "symbol" || y(e) && p.call(e) == i;
	}
	function x(e) {
		if (typeof e == "number") return e;
		if (b(e)) return r;
		if (v(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = v(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(a, "");
		var n = s.test(e);
		return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : o.test(e) ? r : +e;
	}
	t.exports = _;
})))(), 1), qS = typeof window < "u" ? D : w;
function JS(e, t, n, r) {
	let i = k(t);
	qS(() => {
		i.current = t;
	}, [t]), w(() => {
		let t = n?.current ?? window;
		if (!(t && t.addEventListener)) return;
		let a = (e) => {
			i.current(e);
		};
		return t.addEventListener(e, a, r), () => {
			t.removeEventListener(e, a, r);
		};
	}, [
		e,
		n,
		r
	]);
}
function YS(e) {
	let t = k(e);
	t.current = e, w(() => () => {
		t.current();
	}, []);
}
function XS(e, t = 500, n) {
	let r = k();
	YS(() => {
		r.current && r.current.cancel();
	});
	let i = O(() => {
		let i = (0, KS.default)(e, t, n), a = (...e) => i(...e);
		return a.cancel = () => {
			i.cancel();
		}, a.isPending = () => !!r.current, a.flush = () => i.flush(), a;
	}, [
		e,
		t,
		n
	]);
	return w(() => {
		r.current = (0, KS.default)(e, t, n);
	}, [
		e,
		t,
		n
	]), i;
}
var ZS = typeof window > "u";
function QS(e = {}) {
	let { initializeWithValue: t = !0 } = e;
	ZS && (t = !1);
	let [n, r] = A(() => t ? {
		width: window.innerWidth,
		height: window.innerHeight
	} : {
		width: void 0,
		height: void 0
	}), i = XS(r, e?.debounceDelay);
	function a() {
		(e?.debounceDelay ? i : r)({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}
	return JS("resize", a), qS(() => {
		a();
	}, []), n;
}
//#endregion
//#region src/ui/components/PlayedCard/usePlayedCardLogic.ts
var $S = ({ playedCard: e }) => {
	let t = e.instance, n = 0, r = !1, i = !1;
	return hn(e) || it(t) || (n = Math.max(e.waterCards, t.waterToMature), r = e.wasWateredDuringTurn === !1, i = e.waterCards >= t.waterToMature), {
		canBeWatered: r,
		canBeHarvested: i,
		waterIconsToRender: n
	};
}, eC = "PlayedCard", tC = ({ isInBackground: e, playedCard: t, cardProps: { ref: n, ...r }, ...i }) => {
	let a = c(), { size: o = V.MEDIUM } = r, { canBeWatered: s, canBeHarvested: l, waterIconsToRender: f } = $S({ playedCard: t });
	return /* @__PURE__ */ N(u, {
		className: eC,
		maxWidth: bn[o].width,
		...i,
		children: [/* @__PURE__ */ M(VS, {
			size: o,
			canBeWatered: s,
			canBeHarvested: l,
			...r
		}), mn(t) && /* @__PURE__ */ M(d, {
			container: !0,
			spacing: 1,
			pt: 2.5,
			ml: a.spacing(-.5),
			justifyContent: "flex-start",
			children: Array(f).fill(null).map((n, r) => {
				let i = 1, o = r < t.waterCards;
				return e ? i = 0 : o || (i = .25), /* @__PURE__ */ M(d, {
					item: !0,
					sx: { pt: `${a.spacing(0)} !important` },
					children: /* @__PURE__ */ M(Kv, {
						src: $e.water,
						alt: "Water card indicator",
						sx: {
							imageRendering: "pixelated",
							opacity: i,
							transition: a.transitions.create(["opacity"])
						}
					})
				}, r);
			})
		})]
	});
}, nC = ({ cardSize: e = V.SMALL, playerId: t, fieldIdx: n }) => {
	let r = ie(), { useActorRef: i } = kS, a = i(), { matchState: o, match: { currentPlayerId: s, sessionOwnerPlayerId: c } } = AS(), { selectedHandCardIdx: l } = C(jS), u = s === c && s === t && o === R.CHOOSING_CARD_POSITION;
	return /* @__PURE__ */ M(te, {
		item: !0,
		xs: 6,
		sm: 4,
		md: 2,
		children: /* @__PURE__ */ M(ee, {
			height: bn[e].height,
			width: bn[e].width,
			onClick: () => {
				u && a.send({
					type: I.SELECT_CARD_POSITION,
					playerId: t,
					cardIdxInHand: l,
					fieldIdxToPlace: n
				});
			},
			sx: {
				mx: "auto",
				outlineStyle: "solid",
				outlineWidth: "2px",
				outlineColor: u ? r.palette.primary.light : r.palette.divider,
				borderRadius: r.shape.borderRadius,
				transition: r.transitions.create(["background", "transform"]),
				boxShadow: u ? `0 0 12px 4px ${r.palette.primary.light}` : "none",
				alignContent: "center",
				...u && {
					cursor: "pointer",
					":hover": {
						transform: "scale(1.2)",
						background: r.palette.mode === "light" ? re(r.palette.primary.light, .1) : j(r.palette.primary.light, .5),
						"> p": { opacity: 1 }
					}
				}
			},
			children: u && /* @__PURE__ */ M(ne, {
				variant: "caption",
				component: "p",
				sx: {
					color: r.palette.primary.contrastText,
					fontWeight: r.typography.fontWeightBold,
					opacity: 0,
					textAlign: "center",
					textTransform: "uppercase",
					transition: r.transitions.create(["opacity"])
				},
				children: "Place card"
			})
		})
	});
}, rC = -1, iC = -25, aC = "Selected field card", oC = "Unselected field card", sC = ({ playerId: e, match: t, cardSize: n = V.SMALL, ...r }) => {
	let i = B.getPlayer(t, e), a = e === t.sessionOwnerPlayerId, o = k(), s = c(), [l, f] = A(rC), [p, m] = A(""), { width: h, height: g } = QS({ debounceDelay: 1 }), _ = h / 2, v = g / 2, y = () => {
		f(rC), document.activeElement instanceof HTMLElement && document.activeElement.blur();
	}, b = XS(() => {
		y();
	}, void 0, { leading: !0 });
	w(() => (window.addEventListener("resize", b), () => {
		window.removeEventListener("resize", b);
	}), [b]), w(() => {
		f(rC);
	}, [i.field]);
	let x = (e, t) => {
		let { target: n } = e;
		if (!n.classList.contains("PlayedCard")) return;
		let r = n.getBoundingClientRect();
		m(`translateX(${_ - (r.left + r.width / 2)}px) translateY(${v - (r.top + r.height / 2) + (a ? iC : 25)}px) scale(1.25)`), f(t);
	}, S = (e) => {
		switch (e.key) {
			case "Escape":
				y();
				break;
		}
	}, C = (e) => {
		o.current && !o.current.contains(e.relatedTarget) && y();
	}, T = [
		,
		,
		,
		,
		,
		,
	].fill(void 0).map((e, t) => i.field.cards[t]), E = a ? T : [...T].reverse();
	return /* @__PURE__ */ M(u, {
		...r,
		"data-testid": `field_${e}`,
		ref: o,
		onKeyDown: S,
		onBlur: C,
		children: /* @__PURE__ */ M(d, {
			container: !0,
			spacing: 2,
			alignItems: a ? "flex-start" : "flex-end",
			justifyContent: "center",
			children: E.map((t, r) => {
				let o = a ? r : 5 - r;
				if (!gn(t)) return /* @__PURE__ */ M(nC, {
					cardSize: n,
					playerId: e,
					fieldIdx: o
				}, r);
				let { instance: c } = t, u = l === o, f = l !== rC && !u;
				return /* @__PURE__ */ M(d, {
					item: !0,
					xs: 6,
					sm: 4,
					md: 2,
					children: /* @__PURE__ */ M(tC, {
						"aria-label": u ? aC : oC,
						tabIndex: 0,
						cardProps: {
							cardInstance: c,
							cardIdxInField: o,
							cropIdxInFieldToWater: o,
							cropIdxInFieldToHarvest: o,
							isInField: !0,
							isFocused: u,
							playerId: i.id,
							size: n,
							...u && { elevation: 10 },
							paperProps: { ...u && { elevation: 10 } }
						},
						playedCard: t,
						isInBackground: f,
						onFocus: (e) => x(e, o),
						sx: {
							mx: "auto",
							position: "relative",
							transition: s.transitions.create(["transform"]),
							outline: "none",
							transformStyle: "preserve-3d",
							...!a && { transform: "rotate(180deg)" },
							...!u && { cursor: "pointer" },
							...u && {
								transform: p,
								zIndex: 20
							}
						}
					})
				}, c.instanceId);
			})
		})
	});
}, cC = () => {
	let e = k(/* @__PURE__ */ new Map());
	return w(() => {
		let { current: t } = e;
		return () => {
			t.forEach((e) => {
				e();
			});
		};
	}, []), { setRejectingTimeout: (t) => new Promise((n, r) => {
		let i = setTimeout(() => {
			e.current.delete(i), n();
		}, t);
		e.current.set(i, r);
	}) };
}, lC = new class {
	constructor() {
		this.scaleNumber = (e, t, n, r, i) => (e - t) * (i - r) / (n - t) + r;
	}
}(), uC = 1, dC = .65, fC = (e) => e > 60 ? 3 : e > 30 ? 5 : e > 20 ? 10 : e > 10 ? 15 : e > 5 ? 30 : 50, pC = ({ playerId: e, match: t, cardSize: n = V.LARGE, sx: r = [], ...i }) => {
	let { blockingOperation: a, isHandInViewport: o, setIsHandInViewport: s, selectedHandCardIdx: l, setSelectedHandCardIdx: d } = C(jS), { setRejectingTimeout: f } = cC(), { containerRef: p, selectedCardSxProps: m } = Cn({ cardSize: n }), h = B.getPlayer(t, e), g = c(), _ = k(null);
	w(() => {
		o && l !== -1 && _.current?.focus();
	}, [
		o,
		_,
		l
	]);
	let v = S(() => {
		d(-1), document.activeElement instanceof HTMLElement && document.activeElement.blur();
	}, [d]);
	w(() => {
		v(), s(!0);
	}, [
		h.hand,
		s,
		v
	]);
	let y = (e) => {
		d(e);
	}, b = (e) => {
		switch (e.key) {
			case "Escape":
				v();
				break;
		}
	}, x = (e) => {
		p.current && !p.current.contains(e.relatedTarget) && v();
	}, T = fC(h.hand.length), { width: E } = p.current?.getBoundingClientRect() ?? { width: 0 }, D = async () => {
		await a(async () => {
			await f(g.transitions.duration.shortest);
		});
	};
	return /* @__PURE__ */ M(u, {
		...i,
		"data-testid": `hand_${e}`,
		ref: p,
		sx: [{
			position: "relative",
			minHeight: bn[n].height,
			transform: `translateY(${o ? 0 : bn[n].height})`,
			transition: g.transitions.create(["transform"]),
			pointerEvents: o ? void 0 : "none"
		}, ...Re(r) ? r : [r]],
		onKeyDown: b,
		onBlur: x,
		children: h.hand.map((t, r) => {
			let i = T * h.hand.length, a = lC.scaleNumber(r / h.hand.length, 0, 1, -i, i), s = E / 2 + a, c = l === r && o, u = l !== -1 && o, d = "";
			return c || (d = `translateX(${`calc(-50% + ${T}px + ${s}px)`}) translateY(${u ? `calc(${bn[n].height} / 2)` : "0rem"}) rotate(-5deg) scale(${u ? dC : uC}) rotateY(25deg)`), /* @__PURE__ */ M(VS, {
				disableEnterAnimation: !0,
				cardInstance: t,
				cardIdxInHand: r,
				playerId: e,
				size: n,
				paperProps: { ...c && { elevation: 10 } },
				sx: {
					transform: d,
					position: "absolute",
					transition: g.transitions.create(["transform"]),
					cursor: "pointer",
					...c && m
				},
				onBeforePlay: D,
				onFocus: () => y(r),
				tabIndex: o ? 0 : -1,
				isFocused: c,
				ref: c ? _ : void 0
			}, t.instanceId);
		})
	});
}, mC = ({ match: e, ...t }) => {
	let n = c(), { sessionOwnerPlayerId: r } = e, i = B.getOpponentPlayerIds(e), a = f(n.breakpoints.up("md")) ? V.MEDIUM : V.SMALL;
	return /* @__PURE__ */ N(ae, { children: [/* @__PURE__ */ N(d, {
		gap: 4,
		container: !0,
		...t,
		"data-testid": `table_${e.sessionOwnerPlayerId}`,
		children: [
			/* @__PURE__ */ M(d, {
				item: !0,
				xs: 12,
				children: i.map((t) => /* @__PURE__ */ M(sC, {
					match: e,
					playerId: t,
					cardSize: V.SMALL
				}, t))
			}),
			/* @__PURE__ */ M(d, {
				item: !0,
				xs: 12,
				children: /* @__PURE__ */ N(u, {
					display: "flex",
					justifyContent: "space-between",
					alignContent: "center",
					children: [/* @__PURE__ */ M(US, {
						match: e,
						playerId: r,
						cardSize: V.SMALL
					}), /* @__PURE__ */ M(GS, {
						match: e,
						playerId: r
					})]
				})
			}),
			/* @__PURE__ */ M(d, {
				item: !0,
				xs: 12,
				children: /* @__PURE__ */ M(sC, {
					match: e,
					playerId: r
				})
			})
		]
	}), /* @__PURE__ */ M(u, {
		position: "fixed",
		left: "50%",
		right: "50%",
		bottom: n.spacing(-8),
		children: /* @__PURE__ */ M(pC, {
			match: e,
			playerId: r,
			cardSize: a
		})
	})] });
}, hC = new Intl.NumberFormat(void 0, {
	style: "decimal",
	useGrouping: !0
}).format.bind(null), gC = (e) => hC(e), _C = 10, vC = ({ match: e }) => {
	let n = c(), r = kS.useActorRef(), { setIsHandInViewport: i } = C(jS), { matchState: a, botTurnActionState: o, match: { currentPlayerId: s, sessionOwnerPlayerId: u } } = AS(), d = Le(s ?? ""), f = () => {
		r.send({ type: I.PROMPT_BOT_FOR_SETUP_ACTION });
	}, p = () => {
		r.send({ type: I.START_TURN });
	}, m = () => {
		r.send({ type: I.OPERATION_ABORTED }), i(!0);
	}, h = () => {
		r.send({ type: I.OPERATION_ABORTED }), i(!0);
	}, g = null, _ = s ? B.getPlayer(e, s) : null, v = "";
	switch (a) {
		case R.CHOOSING_CARD_POSITION:
			v = "Select a position in the field", _?.id === e.sessionOwnerPlayerId && (g = /* @__PURE__ */ M(t, {
				onClick: h,
				color: "warning",
				children: "Cancel placement"
			}));
			break;
		case R.WAITING_FOR_PLAYER_SETUP_ACTION:
			v = "Set up your Field", _ && _.field.cards.length > 0 && (g = /* @__PURE__ */ M(t, {
				onClick: f,
				children: "Complete setup"
			}));
			break;
		case R.WAITING_FOR_PLAYER_TURN_ACTION:
			v = "Your turn", _ && _.id === e.sessionOwnerPlayerId && (g = /* @__PURE__ */ M(t, {
				onClick: p,
				children: "End turn"
			}));
			break;
		case R.PLAYER_WATERING_CROP:
			v = "Select a crop to water", _ && _.id === e.sessionOwnerPlayerId && (g = /* @__PURE__ */ M(t, {
				onClick: m,
				color: "warning",
				children: "Cancel watering"
			}));
			break;
		case R.PERFORMING_BOT_TURN_ACTION:
			switch (v = `${d}'s turn`, o) {
				case L.PLAYING_CROPS:
				case L.PLACING_CROP:
					v = `${d} is planting crops`;
					break;
				case L.WATERING_CROPS:
				case L.WATERING_CROP:
					v = `${d} is watering crops`;
					break;
				case L.HARVESTING_CROPS:
				case L.HARVESTING_CROP:
					v = `${d} is harvesting crops`;
					break;
				case L.PLAYING_EVENTS:
					v = `${d} is playing Event cards`;
					break;
				case L.PLAYING_TOOLS:
					v = `${d} is playing Tool cards`;
					break;
				default:
			}
			break;
		case R.PERFORMING_BOT_SETUP_ACTION:
			v = `${d} is setting their field up`;
			break;
		default:
	}
	let { [u]: y, ...b } = e.table.players;
	if (!y) throw new Bt("Session owner player not found");
	let x = y.funds, S = Object.keys(b)[0], w = S ? B.getPlayer(e, S)?.funds : 0, T = Le(S ?? "");
	return /* @__PURE__ */ N(xe, {
		spacing: 1,
		children: [/* @__PURE__ */ N(xe, {
			direction: "row",
			justifyContent: "space-between",
			sx: { color: n.palette.common.white },
			children: [
				/* @__PURE__ */ M(l, {
					title: "Your funds",
					arrow: !0,
					children: /* @__PURE__ */ N(xe, {
						direction: "row",
						alignItems: "center",
						color: {
							cursor: "help",
							...x <= _C && { color: n.palette.error.dark }
						},
						children: [/* @__PURE__ */ M(me, { sx: {
							fontSize: n.typography.body1.fontSize,
							lineHeight: n.typography.body1.lineHeight
						} }), /* @__PURE__ */ M(de, { children: gC(x) })]
					})
				}),
				e.buffedCrop && /* @__PURE__ */ M(l, {
					title: `Sell ${e.buffedCrop.crop.name} cards now for ${e.buffedCrop.multiplier}x value`,
					arrow: !0,
					children: /* @__PURE__ */ M(xe, {
						direction: "row",
						alignItems: "center",
						children: /* @__PURE__ */ M(be, {
							color: "success",
							icon: /* @__PURE__ */ M(ge, {}),
							label: /* @__PURE__ */ M(Kv, {
								src: qv(e.buffedCrop.crop),
								sx: {
									imageRendering: "pixelated",
									filter: `drop-shadow(0 0 5px ${n.palette.common.white})`
								}
							}),
							sx: {
								backgroundColor: n.palette.success.light,
								outlineColor: n.palette.success.dark,
								outlineWidth: 1,
								outlineStyle: "solid"
							}
						})
					})
				}),
				/* @__PURE__ */ M(l, {
					title: "Community funds",
					arrow: !0,
					children: /* @__PURE__ */ N(xe, {
						direction: "row",
						alignItems: "center",
						spacing: .5,
						sx: { cursor: "help" },
						children: [/* @__PURE__ */ M(pe, { sx: {
							fontSize: n.typography.body1.fontSize,
							lineHeight: n.typography.body1.lineHeight
						} }), /* @__PURE__ */ M(de, { children: gC(e.table.communityFund) })]
					})
				}),
				e.nerfedCrop && /* @__PURE__ */ M(l, {
					title: `${e.nerfedCrop.crop.name} cards now sell for ${e.nerfedCrop.multiplier}x value`,
					arrow: !0,
					children: /* @__PURE__ */ M(xe, {
						direction: "row",
						alignItems: "center",
						children: /* @__PURE__ */ M(be, {
							sx: {
								flexDirection: "row-reverse",
								"& .MuiSvgIcon-root": {
									ml: -.75,
									mr: .75
								},
								"& .MuiChip-label": { pr: 1 },
								backgroundColor: n.palette.error.light,
								outlineColor: n.palette.error.dark,
								outlineWidth: 1,
								outlineStyle: "solid"
							},
							color: "error",
							icon: /* @__PURE__ */ M(he, {}),
							label: /* @__PURE__ */ M(Kv, {
								src: qv(e.nerfedCrop.crop),
								sx: {
									imageRendering: "pixelated",
									filter: `drop-shadow(0 0 5px ${n.palette.common.black})`
								}
							})
						})
					})
				}),
				/* @__PURE__ */ M(l, {
					title: `${T}'s funds`,
					arrow: !0,
					children: /* @__PURE__ */ N(xe, {
						direction: "row",
						alignItems: "center",
						sx: {
							cursor: "help",
							...w !== void 0 && w <= _C && { color: n.palette.error.dark }
						},
						children: [/* @__PURE__ */ M(me, { sx: {
							fontSize: n.typography.body1.fontSize,
							lineHeight: n.typography.body1.lineHeight
						} }), /* @__PURE__ */ M(de, { children: w === void 0 ? "" : gC(w) })]
					})
				})
			]
		}), /* @__PURE__ */ N(_e, {
			sx: {
				width: 1,
				mb: 2,
				borderRadius: `${n.shape.borderRadius}px`,
				"&.Mui-expanded": { mt: 1 }
			},
			expanded: g !== null,
			children: [/* @__PURE__ */ M(ye, {
				sx: {
					"&:hover:not(.Mui-disabled)": { cursor: "default" },
					"& .MuiAccordionSummary-content": { justifyContent: "center" }
				},
				children: /* @__PURE__ */ M(de, {
					variant: "h6",
					component: "h1",
					textAlign: "center",
					fontWeight: "normal",
					children: v
				})
			}), /* @__PURE__ */ M(ve, {
				sx: { justifyContent: "center" },
				children: g
			})]
		})]
	});
}, yC = new URLSearchParams(window.location.search).has("debug"), bC = /* @__PURE__ */ je((/* @__PURE__ */ P(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ne("react"), n = function(e) {
		let r = "";
		return typeof e == "string" ? r = e : typeof e == "number" ? r = e.toString() : e instanceof Array ? e.forEach(function(e) {
			r += n(e);
		}) : (0, t.isValidElement)(e) && (r += n(e.props.children)), r;
	};
	e.default = n;
})))()), xC = v({ showNotification: () => {
	throw Error("Calling showNotification outside of NotificationProvider");
} }), SC = () => C(xC), CC = ({ actorRef: e, match: t }) => {
	let { showNotification: n } = SC(), r = S((e, t) => {
		yC && console.debug(`Notification: ${(0, bC.default)(e)}`), n(e, t);
	}, [n]), i = t.currentPlayerId === t.sessionOwnerPlayerId;
	return w(() => {
		let n = Le(t.currentPlayerId ?? "");
		e.send({
			type: I.SET_SHELL,
			shell: { triggerNotification: ({ type: e, payload: t }) => {
				switch (e) {
					case ot.CARDS_DRAWN: {
						let { howMany: e, playerId: n } = t;
						if (i) r(e === 1 ? "You drew 1 card" : `You drew ${e} cards`, "success");
						else {
							let t = Le(n);
							r(e === 1 ? `${t} drew 1 card` : `${t} drew ${e} cards`, "warning");
						}
						break;
					}
					case ot.CROP_HARVESTED: {
						let { cropHarvested: { name: e } } = t;
						i ? r(`You harvested and sold a ${e}`, "success") : r(`${n} harvested and sold a ${e}`, "warning");
						break;
					}
					case ot.CARD_DISCARDED: {
						let { cardDiscarded: { name: e } } = t;
						r(i ? `You discarded ${e}` : `${n} discarded ${e}`, "info");
						break;
					}
					case ot.CROP_WATERED: {
						let { cropWatered: { name: e } } = t;
						r(i ? `You watered your ${e}` : `${n} watered their ${e}`, "info");
						break;
					}
					case ot.EVENT_CARD_PLAYED: {
						let { eventCard: e } = t;
						r(i ? `You played ${e.name}` : `${n} played ${e.name}`, "info");
						break;
					}
					case ot.TOOL_CARD_PLAYED: {
						let { toolCard: e } = t;
						r(i ? `You played ${e.name}` : `${n} played ${e.name}`, "info");
						break;
					}
					case ot.ALL_CROPS_WATERED:
						r("Watered all crops", "info");
						break;
					default:
				}
			} }
		});
	}, [
		e,
		t.currentPlayerId,
		i,
		r
	]), { showNotification: r };
}, wC = ({ playerSeeds: e, userPlayerId: t, onMatchEnd: n, onCheckpoint: r, initialMatch: i }) => {
	let a = kS.useActorRef(), { match: o, matchState: s } = AS(), c = kS.useSelector(({ context: e }) => e.botState), [l, u] = A(!0);
	w(() => {
		yC && a.subscribe((e) => {
			typeof e.value == "string" && console.debug(`State: ${e.value}`, e.context);
		});
	}, [a]);
	let [d, f] = A(!1);
	w(() => {
		s === R.UNINITIALIZED && (i ? a.send({
			type: I.RESUME,
			matchState: i.matchState,
			match: i.match,
			botState: i.botState,
			userPlayerId: t
		}) : a.send({
			type: I.INIT,
			playerSeeds: e,
			userPlayerId: t
		}));
	}, [
		s,
		e,
		t,
		i,
		a
	]), w(() => {
		(s === R.WAITING_FOR_PLAYER_SETUP_ACTION || s === R.WAITING_FOR_PLAYER_TURN_ACTION) && r?.({
			matchState: s,
			match: o,
			botState: c
		});
	}, [s]);
	let p = k(!1);
	w(() => {
		s === R.GAME_OVER ? p.current || (p.current = !0, n?.(o.winner)) : p.current = !1;
	}, [
		s,
		o.winner,
		n
	]);
	let m = S(async (e) => {
		try {
			f(!0), await e();
		} catch {} finally {
			f(!1);
		}
	}, [f]), { showNotification: h } = CC({
		actorRef: a,
		match: o
	}), [g, _] = A(-1), v = S((...e) => {
		if (o.currentPlayerId === o.sessionOwnerPlayerId) return _(...e);
	}, [o]), y = O(() => ({
		blockingOperation: m,
		isHandInViewport: l,
		setIsHandInViewport: u,
		showNotification: h,
		selectedHandCardIdx: g,
		setSelectedHandCardIdx: v
	}), [
		m,
		l,
		u,
		h,
		g,
		v
	]), b = o.sessionOwnerPlayerId === o.currentPlayerId, x = d || !b, C = () => {
		u((e) => !e);
	}, T = () => {
		a.send({
			type: I.INIT,
			playerSeeds: e,
			userPlayerId: t
		});
	}, E = [R.PLAYER_WATERING_CROP].includes(s), D = l || E;
	return {
		match: o,
		botState: c,
		handleHandVisibilityToggle: C,
		handleClickPlayAgain: T,
		isHandDisabled: E,
		isInputBlocked: x,
		shellContextValue: y,
		showGameOver: s === R.GAME_OVER,
		showHand: D
	};
}, TC = ({ playerSeeds: u, userPlayerId: d, fullHeight: f = !1, sx: p = [], onMatchEnd: m, onCheckpoint: h, renderStatusBarContent: g, renderGameOverContent: _, hideDefaultGameOverActions: v = !1, initialMatch: y, ...b }) => {
	let x = c(), { match: S, handleHandVisibilityToggle: C, handleClickPlayAgain: w, isHandDisabled: T, isInputBlocked: E, shellContextValue: D, showGameOver: O, showHand: k } = wC({
		playerSeeds: u,
		userPlayerId: d,
		onMatchEnd: m,
		onCheckpoint: h,
		initialMatch: y
	}), { winner: A } = S;
	return /* @__PURE__ */ M(jS.Provider, {
		value: D,
		children: /* @__PURE__ */ N(n, {
			maxWidth: !1,
			"data-testid": "match",
			sx: [{
				backgroundColor: "#ffba4d",
				backgroundImage: `url(${et.brownDotBackground})`,
				backgroundSize: x.spacing(10),
				imageRendering: "pixelated",
				pt: 1,
				pb: 10,
				overflow: "auto",
				...E && { "*": { pointerEvents: "none" } },
				height: f ? "100vh" : void 0
			}, ...Re(p) ? p : [p]],
			...b,
			children: [
				/* @__PURE__ */ M(vC, { match: S }),
				g?.(),
				/* @__PURE__ */ M(mC, {
					sx: { pt: 4 },
					match: S
				}),
				/* @__PURE__ */ M(l, {
					arrow: !0,
					title: k ? "Hide Hand" : "Show Hand",
					children: /* @__PURE__ */ M(s, {
						color: "secondary",
						disabled: E || T,
						onClick: C,
						sx: {
							position: "fixed",
							bottom: x.spacing(2),
							left: x.spacing(2)
						},
						children: /* @__PURE__ */ M(e, { sx: {
							transform: `rotate(${k ? 0 : 180}deg)`,
							transition: x.transitions.create(["transform"])
						} })
					})
				}),
				/* @__PURE__ */ N(r, {
					open: O,
					children: [
						/* @__PURE__ */ M(o, { children: "Game Over" }),
						/* @__PURE__ */ N(a, { children: [
							"Winner: ",
							/* @__PURE__ */ M("strong", { children: A ? Le(A) : "No one" }),
							_?.(A)
						] }),
						/* @__PURE__ */ M(i, { children: !v && /* @__PURE__ */ M(t, {
							onClick: w,
							children: "Play again"
						}) })
					]
				})
			]
		})
	});
}, EC = ({ ...e }) => /* @__PURE__ */ M(kS.Provider, { children: /* @__PURE__ */ M(TC, { ...e }) }), DC = [
	[mt, 4],
	[yt, 4],
	[vt, 4],
	[ht, 4],
	[_t, 4],
	[gt, 4],
	[bt, 4]
], OC = 4, kC = 4, AC = 4, jC = DC.length + 3, MC = 60 - jC * 4;
MC <= 0 && console.warn(`starterDeck: WATER_COUNT computed as ${MC}. DECK_SIZE (60) may be too small for NON_WATER_CARD_TYPE_COUNT (${jC}) at MAX_INSTANCES_PER_CARD (4) copies each.`);
var NC = (e, t) => Array.from({ length: t }, () => sn(e)), PC = (e, t) => {
	let n = Math.min(e.length, t.length);
	return [
		...Array.from({ length: n }, (n, r) => [e[r], t[r]]).flat(),
		...e.slice(n),
		...t.slice(n)
	];
}, FC = () => {
	let e = DC.flatMap(([e, t]) => NC(e, t)), t = NC(rn, MC), n = NC(Et, OC), r = NC(tn, kC), i = NC($t, AC);
	return [...PC(e, t), ...PC(PC(n, r), i)];
}, IC = (e) => ({
	id: e.id,
	instanceId: e.instanceId
}), LC = (e) => {
	let t = cn[e.id];
	if (!t) throw new Vt(`Card with ID "${e.id}" not found in card definitions.`);
	return {
		...t,
		instanceId: e.instanceId
	};
}, RC = (e) => {
	if (e) return {
		...e,
		instance: IC(e.instance)
	};
}, zC = (e) => {
	if (e) return {
		...e,
		instance: LC(e.instance)
	};
}, BC = (e) => ({
	...e,
	deck: e.deck.map(IC),
	hand: e.hand.map(IC),
	discardPile: e.discardPile.map(IC),
	cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(IC),
	field: { cards: e.field.cards.map(RC) }
}), VC = (e) => ({
	...e,
	deck: e.deck.map(LC),
	hand: e.hand.map(LC),
	discardPile: e.discardPile.map(LC),
	cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(LC),
	field: { cards: e.field.cards.map(zC) }
}), HC = (e) => ({
	...e,
	table: {
		...e.table,
		players: Object.fromEntries(Object.entries(e.table.players).map(([e, t]) => [e, BC(t)]))
	}
}), UC = (e) => ({
	...e,
	table: {
		...e.table,
		players: Object.fromEntries(Object.entries(e.table.players).map(([e, t]) => [e, VC(t)]))
	}
});
//#endregion
export { EC as Match, R as MatchState, UC as deserializeMatch, HC as serializeMatch, FC as starterDeck };
