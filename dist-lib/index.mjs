import e from "@mui/icons-material/KeyboardArrowDown.js";
import t from "@mui/material/Button/index.js";
import n from "@mui/material/Container/index.js";
import r from "@mui/material/Dialog/index.js";
import i from "@mui/material/DialogActions/index.js";
import a from "@mui/material/DialogContent/index.js";
import o from "@mui/material/DialogTitle/index.js";
import s from "@mui/material/Fab/index.js";
import c from "@mui/material/styles/useTheme";
import l from "@mui/material/Tooltip/index.js";
import u from "@mui/material/Box/index.js";
import d from "@mui/material/Grid/index.js";
import f from "@mui/material/useMediaQuery/index.js";
import * as p from "react";
import m, { Children as h, Component as g, Fragment as _, createContext as v, createElement as y, forwardRef as b, isValidElement as x, useCallback as S, useContext as C, useEffect as w, useId as T, useInsertionEffect as E, useLayoutEffect as D, useMemo as O, useRef as k, useState as A } from "react";
import { Fragment as ee, jsx as j, jsxs as M } from "react/jsx-runtime";
import te from "@mui/material/Divider/index.js";
import ne from "@mui/material/Paper/index.js";
import { darken as re, lighten as ie, styled as ae } from "@mui/material/styles/index.js";
import oe from "@mui/material/Typography/index.js";
import "@emotion/styled";
import { keyframes as se } from "@emotion/react";
import { useSyncExternalStoreWithSelector as ce } from "use-sync-external-store/shim/with-selector";
import "use-sync-external-store/shim";
import N from "@mui/icons-material/AccountBalance.js";
import le from "@mui/icons-material/AttachMoney.js";
import ue from "@mui/icons-material/KeyboardArrowUp.js";
import de from "@mui/material/Accordion/index.js";
import fe from "@mui/material/AccordionActions/index.js";
import pe from "@mui/material/AccordionSummary/index.js";
import me from "@mui/material/Chip/index.js";
import he from "@mui/material/Stack/index.js";
import ge from "react-node-to-string";
import "@mui/material/Alert/index.js";
import "@mui/material/Slide/index.js";
import "@mui/material/Snackbar/index.js";
//#region \0rolldown/runtime.js
var _e = Object.create, ve = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, be = Object.getOwnPropertyNames, xe = Object.getPrototypeOf, Se = Object.prototype.hasOwnProperty, Ce = (e, t) => () => (e && (t = e(e = 0)), t), we = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), Te = (e, t) => {
	let n = {};
	for (var r in e) ve(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || ve(n, Symbol.toStringTag, { value: "Module" }), n;
}, Ee = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = be(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !Se.call(e, s) && s !== n && ve(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ye(t, s)) || r.enumerable
	});
	return e;
}, De = (e, t, n) => (n = e == null ? {} : _e(xe(e)), Ee(t || !e || !e.__esModule ? ve(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Oe = (e) => Se.call(e, "module.exports") ? e["module.exports"] : Ee(ve({}, "__esModule", { value: !0 }), e), ke = /* @__PURE__ */ "Aardvark.Albatross.Alligator.Alpaca.Angelfish.Anglerfish.Ant.Anteater.Antelope.Antlion.Ape.Armadillo.Asp.Baboon.Badger.Bandicoot.Barnacle.Barracuda.Basilisk.Bass.Bat.Bear.Beaver.Bee.Beetle.Bird.Bison.Blackbird.Boar.Bobcat.Bonobo.Bug.Butterfly.Buzzard.Camel.Capybara.Cardinal.Caribou.Cat.Caterpillar.Catfish.Cattle.Chameleon.Cheetah.Chickadee.Chicken.Chimpanzee.Chinchilla.Chipmunk.Clam.Clownfish.Cobra.Condor.Coral.Cougar.Coyote.Crab.Crane.Crawdad.Crayfish.Cricket.Crocodile.Crow.Cuckoo.Deer.Dingo.Dinosaur.Dog.Dolphin.Donkey.Dove.Dragon.Dragonfly.Duck.Eagle.Earthworm.Echidna.Egret.Elephant.Elk.Emu.Ermine.Falcon.Ferret.Finch.Firefly.Fish.Flamingo.Fowl.Fox.Frog.Gazelle.Gecko.Gerbil.Gibbon.Giraffe.Goat.Goldfish.Goose.Gopher.Gorilla.Grasshopper.Grouse.Gull.Guppy.Hamster.Hare.Harrier.Hawk.Hedgehog.Heron.Hippopotamus.Horse.Hummingbird.Hyena.Iguana.Impala.Jackal.Jaguar.Jay.Jellyfish.Kangaroo.Kingfisher.Kiwi.Koala.Koi.Ladybug.Lark.Lemming.Lemur.Leopard.Lion.Llama.Lobster.Loon.Lynx.Macaw.Mackerel.Mammal.Manatee.Mandrill.Marlin.Marmoset.Marmot.Marsupial.Mastodon.Meerkat.Mink.Minnow.Mockingbird.Mole.Mongoose.Monkey.Moose.Mosquito.Mouse.Mule.Muskox.Narwhal.Ocelot.Octopus.Opossum.Orangutan.Orca.Ostrich.Otter.Owl.Ox.Panda.Panther.Parakeet.Parrot.Partridge.Peacock.Pelican.Penguin.Pig.Pigeon.Platypus.Pony.Porcupine.Porpoise.Puffin.Puma.Python.Quail.Quokka.Rabbit.Raccoon.Raven.Reindeer.Rhinoceros.Roadrunner.Rooster.Salamander.Salmon.Seahorse.Shark.Sheep.Shrew.Sloth.Snail.Sparrow.Squid.Squirrel.Starfish.Stingray.Stoat.Stork.Sturgeon.Swan.Swift.Swordfish.Tapir.Tarsier.Tern.Tiger.Tortoise.Toucan.Turkey.Turtle.Tyrannosaurus.Vole.Wallaby.Walrus.Warbler.Whale.Wildcat.Wolf.Wolverine.Wombat.Woodpecker.Wren.Yak.Zebra".split("."), Ae = /* @__PURE__ */ "Adorable.Adventurous.Agreeable.Alert.Amused.Attractive.Average.Beautiful.Blushing.Brainy.Brave.Bright.Busy.Calm.Careful.Cautious.Charming.Cheerful.Clever.Cloudy.Colorful.Comfortable.Concerned.Cooperative.Courageous.Crazy.Curious.Cute.Delightful.Determined.Distinct.Dizzy.Elated.Elegant.Enchanting.Encouraging.Energetic.Enthusiastic.Excited.Exuberant.Famous.Fancy.Fantastic.Fierce.Fine.Friendly.Funny.Gentle.Gifted.Glamorous.Gleaming.Glorious.Gorgeous.Graceful.Handsome.Happy.Healthy.Helpful.Hilarious.Important.Inquisitive.Jolly.Joyous.Kind.Light.Lively.Lovely.Lucky.Magnificent.Mysterious.Nice.Nutty.Outrageous.Outstanding.Perfect.Pleasant.Poised.Powerful.Precious.Proud.Puzzled.Quaint.Relieved.Shiny.Silly.Sleepy.Smiling.Sparkling.Splendid.Stormy.Strange.Successful.Tame.Thankful.Thoughtful.Tough.Victorious.Vivacious.Wandering.Wide-eyed.Wild.Witty.Zany".split("."), je = function(e) {
	return e.split("").reduce(function(e, t, n) {
		return e + t.charCodeAt(0) * n;
	}, 0);
}, Me = function(e, t) {
	var n = t === void 0 ? {} : t, r = n.adjectives, i = r === void 0 ? Ae : r, a = n.animalNames, o = a === void 0 ? ke : a, s = je(e), c = i[s % i.length], l = o[(s + je(c)) % o.length];
	return c + " " + l;
}, Ne = (e) => Array.isArray(e), Pe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVRIie2UMQ7DIAxFTVUJZcnIBTggU0+RKQfMBTJmQUx0aEDY2FSkdMvbwMn//o4VgJshrFOEdYr/N+m57xalKYaloqKd4o9uk4TzqnrmcqJW5+lOEH92m3BnmqZALJyU86+rDeFEK0E8Fp0Ps/PYyHklzrwwbnWADAAA5lfAJkSMQ9qiLL7tIV9Sw9OsuTmSO+p+2wNYU4zrk0QhAyEJl6Dq3hqNkiCS8JU1TcLWaJRANGGgBdQ9Fc0f+ft6Z8QEzMy7hLkX4rFo1PkvwokqgTV6iLBEhPL3cAMAb8x5cUBYehurAAAAAElFTkSuQmCC", Fe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSInVlDFrwkAYhh+lKB2CToVupW5C6VgQOrl07OoiCrp37WKhS/5CQUERxNVR/0CgowhxUtwEJyWDxKHpkNxpktNYLYV+S+AueZ/3e7/cwX+v2C9oOIf04ueKr6cVlsMc62klCDsb4CyHOWzLhLmBbZlKyKkAZzGrA7BJleE6txdycZLzPrBqwtwg4UE0LYttmW5HO/VTgLOeVrAtk6SWxQaSWhZWTWwPlFg1fR/Iqd89u22Nenv/LGcxq4cEAJgbbkxA+t7w6caFeKmYoavXJEjlPLFquo6Fc7YzSGrZkLgEiBqMOyqIs+wjY7HiD248XtYJbxaXt42QeAiggDjraUU6tC0T7etTwkQn6SeU4hAxZOEcAs+5IYeavqnuFVd24CvPuXAqn976VYS4BIx6xFrtSWhzN2vbMtmkyrKDfZkH62BEu4PNv1QBA8/QUeKRAJF1/q1BV69t13UovL47B87McYDHDwCDrl5jMO749rp6jQLREN9JLhUzcqPVniiFg9VqTw6dfnUHrfaEUjGjFA/+DFEdHH3ZCeFjct8t38viighGdYqwEhAEnSP8Z/UN/uTZrzroGIUAAAAASUVORK5CYII=", Ie = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVRIS82VvQ3CQAyFnRUoGIGWgoYSMQUVJQswBwtQUjEFoqShoGUEClYAOZLRi3P+OaRISRUS8z4/2+c0NPDVDKxP4wIsF5PP7f6uSiodzOLn4542uwPVQMYH4KGocZFyIOXBictC0oDL9UGv54mms23LWa/mqV6EAM6exflCQBbiAlC8BMhATIDUXUoi2WsX/NvrRxFgiUuTayA9gBYvlUYDJKbkpAPIiFsuLMgPgLMudbcaGz1HJy2gVjxygae9A8DMvSw9gC6V6yAqhU5I4nsO/imTNUl6GfamiAN470eNts4C/x+/F+ZBExBuUDzVerNqYXkf7iIUsu69L1y4TTMAL+YLkFzsGSkFyYQAAAAASUVORK5CYIIA", Le = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbVJREFUSIntlMtKw0AUhr/YokRqkSAGurAUgiLSraZvkT5BnsGlO3d5jj5B8wKum7qTrlqE0o0QkFm0xWys40InTm3Sm7gQ/GFIzgx855x/LvAXZNdMAFmtlwD4/KbxVlIQNfzAkYA8udhHj40fFC79wJmb6HcFUSjwA4fWzSPVesnYOkG1XmLUm0oAP3Dod0W6FoWC08uyMbgf85MOMA8KJJOZVLHrWZxdWQBpBzvbgMtHRQCZTGbS9SyuW+e4nkUUfnXhBw6j3lQWNwErW8bPr7jeR6WNpk3ldJ9G004TqL2wa+b6HSi4Hzi4nkWjadNo2nTaMU+DFzrtGPiwRtkUDxPW6kCH97sirVp10GnHRKHAPCgYyWQm9Q1f2cF3uK6nwctcnExmWJVdIwoFVmXXAJafoqzKATrteO4/CgXlo6Ixfn5dYOQmWGaL7vnZlUXr5jGXlWnRurYoeLVeyi00b2GlLTp81Jvm8RcT2DWTeJhIdRSX2bIKDhkWxcNk4RHLs2UVPDMBkFqjLhFsZouuzIumX/9tbNFVyJi7hTcOj/dSeBQKHu7ExvA8ye/j8/X81+/oHfIfC2frtx3xAAAAAElFTkSuQmCC", Re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVRIie2UsRWAIAxET58jULuJm1m6mZtQuwMWyhNjOAgWNl6FIP8IpwF+fa2ucV+oZVkNAgCsy/HgN2B0x3iadZ7FIERwVGqQM+mtcL9dkyk8p5oKHidnklWUKqiCp1VJMYOwLvfNcszAJQP15KPTM2BZaBmY7jzVm6+oWdRA3jG789yPZq5ACz0HB4CBwWR4WpgMzhaKQZ9gCi8tqo2tFmx5Sbbm1hb/6yPtXRM6Z/YOWwgAAAAASUVORK5CYII=", ze = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAu0lEQVRIie1UuxGDMAyVOUomYA52yRzpU9IzR3bJHExArzQg54S+puIur0On97GFBXB3lAYOZvhZA5wfE3283h9Xo2sVj6JPM4CSAwRuIHMCjtD1SidAoaaJub3cAPEpMBZRyOolk+IRWlCWqi3OYN3yohrnMKD06wYwDj6Z18ah1nYt/DUwk3FDLmjhym8awt/guoE2TG34HOJDi5I1Q/ehZcUtDl9i6rrYU9VGu0/cRcSVqecwwb6b4wsIwjy5qWuN/wAAAABJRU5ErkJggg==", Be = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPlJREFUSInlVbENgzAQPCJLVJ6ABtGlSpMJWIANskeKVBTZIxt4ASagSUUXpWECqkhIThHkfJwHbBAoUk5y43/u/t7mDfwdolRqn/zNkuTeAlMQuCT1VV4XjdP3Q9AduVlRKs0eifWirwINAFEqoe7NRyCLJQCY/SyWqAuT88XHnYEuE56cElOUyWuBcWML6C6RJaKgTnaHoxGyRaiAIR+DLX69nHtFJl/TIRGKVf8D5xaNYX97cy/uYPVRMbtNtD0A40CFYp6CBW5U6NNWIHu03mR29QB/BkFetV5OVChYcnaDQAPAkBsVCuSVibFcLvN87BWb/Sb8Np74sVisxYmO1AAAAABJRU5ErkJggg==", Ve = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0klEQVRIie1UwRGEMAgkV8JVYAOWRjWUZgNWYAvxYzJkDwg697vbGWeMJLuyQIj+mKAEsZrc90igikhfMPNjkVdEfhHTta7G3inwr5C8WILOWROYQQGSASLSH0pmZFnUyQhqYcVnAqkiNxzLSu99G77NGiBsUy1yLGt/vyPiWoTQpFqMKLbLEzAtikQ8hHNgoYmgTVmBkBxFGpjZtSldAw+KXIt0IavyqSwaOcG0Y+zWHDjkH2d0zLMovDKivsfY7MJyU/f2YyxzI5qpfxtDZ/wWThNOcCnuawEeAAAAAElFTkSuQmCC", He = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANtJREFUSEu1lNkRwyAMRO1OKCQdpBFKopF0kELohIycwYOFWB0e82cD+1YX+/bw2h/W38KAnHPj5kopk14IIIl3GIe4AVy81npop5TOgEbIBEChI+cEkiAXABKwNIMEOQEedwg2QihVB8DinLtbQcIAErRCxo66RKAJaPvSXLgA1tzTud6qU5G9Ll1zYCm21q7qJEch0jtEZqZJfn1a+77/7UuLf0v/pDP9vvgWRSCr1Jkfu2gkELCKBKWE76kRIDFUJ1gDns8O8Th3AbTeR/tqiu6Ii3NwV5Df/wGYQa4ZirxeRgAAAABJRU5ErkJgggAA", Ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALJJREFUSInV1cENgzAMBdDfqovQOToT5zBBOXeL7MEcMIp7akWM3Vi2OdRHK37fKAKAk+uS5JDmRgMIAKZSmuZznr/2LYJzeN023Ieh6V0zcak8ASrOt/cGmHHAf8k0lSLi+wsGAk/Q2zwSQMsI1FoPON/eE0DLeABVXGxY8Mermf28xaJlDdDwblkOunHL4RDeGwjjv4ZScG0wDZeGU3EOpON75BQcYJ+KbJwX/3H/R70B5PVOSsiwgM8AAAAASUVORK5CYII=", We = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVRIie1VQQqAMAzLxO/5AP+y4/7iA3zgPDikbG1XrYKIAWFsWRLSgcCPNyOXz8UL0qWUEgAgxujiDb14RYBLeIhrkJI1AlVC7cxsIAnBKm4xaEwoeuKAYQZenKqIg6eipv913tfTYp+DVBE7XAq6pzzl/gyUdIEzbkjKWa44mVZE9zWt8aK5mff4M/0Nbof1J/QhbIFgQxZVKNMbAAAAAElFTkSuQmCC", Ge = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVRoge2UoRGAMBAECZYS8HRDw5QSnxKig88gfgaxl59befPi12wZzz22idr6dp3HPEvu5UtgJXb6gb9YgCaPQG3980B9d4VoLECTU0ClMJHdFaKxAE0eAcXCRHZXiMYCNDkFVAoT2V0hGgvQ5BFQLExkd4VoLECTU0ClMJHdFaKxAE0eAcXCRHZXiMYCNMsLvBG5ypkvoIETAAAAAElFTkSuQmCC", Ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACA0lEQVRYR6WXwWrEMAxEHViWQr+vp576ab332F8rlKWQ4lCHeKLnkdNclk1iWRqPZpTl47WsX49Snu+ltN+n+618P35K+3XP9f3yd1Gc9rzFPf5fakL1hm6qQa8mpUVGSVQw2rUnFCXlFjcEtGJNnoqJ3ls+325rPR69skHd8VIcKmJDKLu5InaqwtygfY5I7wjRWRPRqUIiNL2vCG8IUZfQ2btkXFKj7jtxSInquo1OiSTDcbVDiCpzxL2KcKRHO0IaVJGiFv9vsopY12UOTkqSkqIiSYTr/sv7S1mrUuqZO+I6RHV9llMhh5wuOSSVi474nQ41hLIVkTg6iaAiNPnOyxRWJwGuu2ZpsHGouT0tniWmG2HoJNo+HYecV7n5iHTMjTahl9FmmmT2WLOcUVoMEcoOZWQvxMHRUHByexrKiMCuO0dGWtdq0UOEssfodIsaJhJfnIdIqd3mkWEekaDn7f6leciNpU4qRkmh28+2MHUVEZukIPQyNxeRFMwacqR7nXWMztopueMctbomFc5DjrhkD7NdGSWJX66kyKRTxInMp09NrPMyt4mbZ2YRHSF8cntqWWcDVFS2+0K3J3twycwSegqhkfEdn7nJMRsnnBiJwGSMo6+GYyLZwf64Zv/qcHOPSyKbvIsT6pALTpxxOuS6scY9uX1WUZ2+ULe6BvgFS/BfKlY4GqkAAAAASUVORK5CYIIA", qe = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYIIA", Je = {
	carrot: Pe,
	corn: Fe,
	garlic: Ie,
	pea: Le,
	potato: Re,
	pumpkin: ze,
	rain: He,
	shovel: Ue,
	sprinkler: We,
	tomato: Be,
	water: Ve
}, Ye = {
	dirt: Ke,
	pixel: qe,
	brownDotBackground: Ge
}, Xe = (e) => e in Je, P = /* @__PURE__ */ function(e) {
	return e.CROP = "CROP", e.EVENT = "EVENT", e.TOOL = "TOOL", e.WATER = "WATER", e;
}({}), Ze = (e) => e.type === "WATER", Qe = (e) => e.type === "EVENT", $e = (e) => e.type === "TOOL", F = /* @__PURE__ */ function(e) {
	return e.DANGEROUSLY_SET_CONTEXT = "DANGEROUSLY_SET_CONTEXT", e.HARVEST_CROP = "HARVEST_CROP", e.INIT = "INIT", e.OPERATION_ABORTED = "OPERATION_ABORTED", e.RESUME = "RESUME", e.PLAY_CARD = "PLAY_CARD", e.PLAY_CROP = "PLAY_CROP", e.PLAY_EVENT = "PLAY_EVENT", e.PLAY_TOOL = "PLAY_TOOL", e.PLAY_PLANTABLE_TOOL = "PLAY_PLANTABLE_TOOL", e.PLAY_WATER = "PLAY_WATER", e.DISCARD_CARD_FROM_FIELD = "DISCARD_CARD_FROM_FIELD", e.PLAYER_RAN_OUT_OF_FUNDS = "PLAYER_RAN_OUT_OF_FUNDS", e.PROMPT_BOT_FOR_SETUP_ACTION = "PROMPT_BOT_FOR_SETUP_ACTION", e.PROMPT_BOT_FOR_TURN_ACTION = "PROMPT_BOT_FOR_TURN_ACTION", e.PROMPT_PLAYER_FOR_CROP_TO_WATER = "PROMPT_PLAYER_FOR_CROP_TO_WATER", e.PROMPT_PLAYER_FOR_SETUP_ACTION = "PROMPT_PLAYER_FOR_SETUP_ACTION", e.PROMPT_PLAYER_FOR_TURN_ACTION = "PROMPT_PLAYER_FOR_TURN_ACTION", e.SELECT_CROP_TO_WATER = "SELECT_CROP_TO_WATER", e.SELECT_CARD_POSITION = "SELECT_CARD_POSITION", e.SET_SHELL = "SET_SHELL", e.START_TURN = "START_TURN", e.BOT_TURN_INITIALIZED = "BOT_TURN_INITIALIZED", e.BOT_TURN_PHASE_COMPLETE = "BOT_TURN_PHASE_COMPLETE", e;
}({}), I = /* @__PURE__ */ function(e) {
	return e.INITIALIZING = "INITIALIZING", e.PLACING_CROP = "PLACING_CROP", e.PLAYING_CROPS = "PLAYING_CROPS", e.WATERING_CROPS = "WATERING_CROPS", e.WATERING_CROP = "WATERING_CROP", e.PLAYING_EVENTS = "PLAYING_EVENTS", e.PLAYING_TOOLS = "PLAYING_TOOLS", e.HARVESTING_CROPS = "HARVESTING_CROPS", e.HARVESTING_CROP = "HARVESTING_CROP", e.DONE = "DONE", e;
}({}), L = /* @__PURE__ */ function(e) {
	return e.UNINITIALIZED = "UNINITIALIZED", e.CHOOSING_CARD_POSITION = "CHOOSING_CARD_POSITION", e.GAME_OVER = "GAME_OVER", e.PERFORMING_BOT_SETUP_ACTION = "PERFORMING_BOT_SETUP_ACTION", e.PERFORMING_BOT_TURN_ACTION = "PERFORMING_BOT_TURN_ACTION", e.PLANTING_CARD = "PLANTING_CARD", e.PLAYER_WATERING_CROP = "PLAYER_WATERING_CROP", e.PLAYING_CARD = "PLAYING_CARD", e.PLAYING_EVENT = "PLAYING_EVENT", e.PLAYING_TOOL = "PLAYING_TOOL", e.WAITING_FOR_PLAYER_SETUP_ACTION = "WAITING_FOR_PLAYER_SETUP_ACTION", e.WAITING_FOR_PLAYER_TURN_ACTION = "WAITING_FOR_PLAYER_TURN_ACTION", e;
}({}), et = /* @__PURE__ */ function(e) {
	return e.IS_BOT_PHASE_PLAYING_EVENTS = "IS_BOT_PHASE_PLAYING_EVENTS", e.IS_BOT_PHASE_PLAYING_TOOLS = "IS_BOT_PHASE_PLAYING_TOOLS", e.IS_SELECTED_IDX_VALID = "IS_SELECTED_IDX_VALID", e.IS_SETUP_PHASE = "IS_SETUP_PHASE", e;
}({}), tt = /* @__PURE__ */ function(e) {
	return e.CARDS_DRAWN = "CARDS_DRAWN", e.CROP_HARVESTED = "CROP_HARVESTED", e.CARD_DISCARDED = "CARD_DISCARDED", e.CROP_WATERED = "CROP_WATERED", e.EVENT_CARD_PLAYED = "EVENT_CARD_PLAYED", e.TOOL_CARD_PLAYED = "TOOL_CARD_PLAYED", e.ALL_CROPS_WATERED = "ALL_CROPS_WATERED", e;
}({}), nt = [];
for (let e = 0; e < 256; ++e) nt.push((e + 256).toString(16).slice(1));
function rt(e, t = 0) {
	return (nt[e[t + 0]] + nt[e[t + 1]] + nt[e[t + 2]] + nt[e[t + 3]] + "-" + nt[e[t + 4]] + nt[e[t + 5]] + "-" + nt[e[t + 6]] + nt[e[t + 7]] + "-" + nt[e[t + 8]] + nt[e[t + 9]] + "-" + nt[e[t + 10]] + nt[e[t + 11]] + nt[e[t + 12]] + nt[e[t + 13]] + nt[e[t + 14]] + nt[e[t + 15]]).toLowerCase();
}
//#endregion
//#region node_modules/uuid/dist/rng.js
var it = new Uint8Array(16);
function at() {
	return crypto.getRandomValues(it);
}
//#endregion
//#region node_modules/uuid/dist/v4.js
function ot(e, t, n) {
	return !t && !e && crypto.randomUUID ? crypto.randomUUID() : st(e, t, n);
}
function st(e, t, n) {
	e ||= {};
	let r = e.random ?? e.rng?.() ?? at();
	if (r.length < 16) throw Error("Random bytes length must be >= 16");
	if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
		if (n ||= 0, n < 0 || n + 16 > t.length) throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
		for (let e = 0; e < 16; ++e) t[n + e] = r[e];
		return t;
	}
	return rt(r);
}
//#endregion
//#region src/game/cards/crops/baseToCrop.ts
var ct = (e) => Object.freeze({
	type: P.CROP,
	...e
}), lt = ct({
	id: "carrot",
	name: "Carrot",
	waterToMature: 3
}), ut = ct({
	id: "corn",
	name: "Corn",
	waterToMature: 8
}), dt = ct({
	id: "garlic",
	name: "Garlic",
	waterToMature: 11
}), ft = ct({
	id: "pea",
	name: "Pea",
	waterToMature: 9
}), pt = ct({
	id: "potato",
	name: "Potato",
	waterToMature: 5
}), mt = ct({
	id: "pumpkin",
	name: "Pumpkin",
	waterToMature: 4
}), ht = ct({
	id: "tomato",
	name: "Tomato",
	waterToMature: 13
}), gt = /* @__PURE__ */ Te({
	carrot: () => lt,
	corn: () => ut,
	garlic: () => dt,
	pea: () => ft,
	potato: () => pt,
	pumpkin: () => mt,
	tomato: () => ht
}), _t = (e, t) => ({
	...e,
	...t
}), vt = (e, t) => _t(e, { table: {
	...e.table,
	...t
} }), yt = (e, t, n) => {
	let r = z.getPlayer(e, t);
	return e = vt(e, { players: {
		...e.table.players,
		[t]: {
			...r,
			...n
		}
	} }), e;
}, bt = (e, t, n) => {
	let { field: r } = z.getPlayer(e, t);
	return e = yt(e, t, { field: {
		...r,
		...n
	} }), e;
}, xt = Object.freeze({
	type: P.EVENT,
	id: "rain",
	name: "Rain",
	description: "Waters all unwatered, planted crops for **all** players.",
	applyEffect: (e) => {
		let { match: t } = e;
		for (let e in t.table.players) {
			let n = t.table.players[e];
			if (!n) continue;
			let r = n.field.cards.map((n) => !n || !ln(n) || e === t.currentPlayerId && n.wasWateredDuringTurn ? n : {
				...n,
				wasWateredDuringTurn: !0,
				waterCards: n.waterCards + 1
			});
			t = bt(t, e, { cards: r });
		}
		return e.shell.triggerNotification({
			type: tt.ALL_CROPS_WATERED,
			payload: {}
		}), {
			...e,
			match: t
		};
	}
}), St = /* @__PURE__ */ Te({ rain: () => xt }), Ct = /* @__PURE__ */ we(((e, t) => {
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
})), wt = /* @__PURE__ */ we(((e, t) => {
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
})), Tt = /* @__PURE__ */ we(((e, t) => {
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
})), Et = /* @__PURE__ */ we(((e, t) => {
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
})), Dt = /* @__PURE__ */ we(((e, t) => {
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
})), Ot = /* @__PURE__ */ we(((e, t) => {
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
})), kt = /* @__PURE__ */ we(((e, t) => {
	t.exports = {};
})), At = /* @__PURE__ */ we(((e, t) => {
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
				f = kt();
			} catch {}
		} else typeof define == "function" && define.amd ? define(function() {
			return p;
		}) : r["seed" + s] = p;
	})(typeof self < "u" ? self : e, [], Math);
})), jt = /* @__PURE__ */ De((/* @__PURE__ */ we(((e, t) => {
	var n = Ct(), r = wt(), i = Tt(), a = Et(), o = Dt(), s = Ot(), c = At();
	c.alea = n, c.xor128 = r, c.xorwow = i, c.xorshift7 = a, c.xor4096 = o, c.tychei = s, t.exports = c;
})))()), Mt = new class {
	constructor(e) {
		this.rng = e ? (0, jt.default)(e) : () => Math.random();
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
}(new URLSearchParams(window.location.search).get("seed")), Nt = (e, t, n = 1) => {
	let r = z.getPlayer(e, t), i = [...r.hand], a = [...r.deck], o = [...r.discardPile], s = a.slice(0, n);
	return a = a.slice(n), i = [...i, ...s], a.length === 0 && (a = Mt.shuffle(o), o = []), e = yt(e, t, {
		deck: a,
		hand: i,
		discardPile: o
	}), e;
}, Pt = class extends Error {
	constructor(e) {
		super(`[PlayerOutOfFundsError] Player ${e} is out of funds.`), this.playerId = e;
	}
}, Ft = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[MatchStateCorruptError] ${e}`;
	}
}, It = class extends Error {
	constructor(e) {
		super(`[GameStateCorruptError] ${e}`);
	}
}, Lt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[FieldFullError] Player ${e} has no room in the field.`;
	}
}, Rt = class extends Error {
	constructor(e, t) {
		super(...arguments), this.message = `[InvalidCardIndexError] Card index ${e} is out of bounds for player ${t}.`;
	}
}, zt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[InvalidCardError] ${e}`;
	}
}, Bt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[PlayerNotFoundError] Player ${e} not found.`;
	}
}, Vt = class extends Error {
	constructor(e) {
		super(...arguments), this.message = `[UnimplementedError] ${e}`;
	}
};
//#endregion
//#region src/game/types/assertions/index.ts
function R(e, t = `${String(e)} is null or undefined`) {
	if (e == null) throw TypeError(t);
}
function Ht(e) {
	if (!(e in Zt)) throw new Ft(`${e} is not a valid tool card ID`);
}
function Ut(e) {
	if (!Qe(e)) throw new Ft(`${e.id} is not an event card`);
}
function Wt(e) {
	if (!$e(e)) throw new Ft(`${e.id} is not a tool card`);
}
function Gt(e) {
	if (!(e in L)) throw TypeError(`${e} is not a MatchState`);
}
function Kt(e) {
	if (mn(e)) throw TypeError("stateValue is not a string");
	if (!(e in I)) throw TypeError(`${e} is not a BotTurnActionState`);
}
function qt(e) {
	if (!ln(e)) throw TypeError(`${JSON.stringify(e)} is not IPlayedCrop`);
}
//#endregion
//#region src/game/cards/tools/shovel.ts
var Jt = Object.freeze({
	type: P.TOOL,
	id: "shovel",
	name: "Shovel",
	description: "Draw two cards from the deck. If played, skip the card draw at the start of the next turn.",
	applyEffect: (e) => {
		let { match: t } = e, { currentPlayerId: n } = t;
		return R(n), t = Nt(t, n, 2), e.shell.triggerNotification({
			type: tt.CARDS_DRAWN,
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
}), Yt = (e, t, n, r) => {
	let { cards: i } = z.getPlayer(e, t).field, a = i[n];
	if (!a) throw RangeError(`cropIdx ${n} references a crop that is not in the field.`);
	qt(a);
	let o = [
		...i.slice(0, n),
		{
			...a,
			...r
		},
		...i.slice(n + 1)
	];
	return e = bt(e, t, { cards: o }), e;
}, Xt = Object.freeze({
	type: P.TOOL,
	id: "sprinkler",
	name: "Sprinkler",
	description: "Waters adjacent crop cards at the start of the owners turn when planted in the Field.",
	isPlantable: !0,
	applyDailyEffect: (e, t) => {
		let { match: { currentPlayerId: n } } = e, { match: r } = e;
		R(n);
		let i = r.table.players[n];
		R(i);
		let a = t - 1, o = t + 1, s = i.field.cards[a], c = i.field.cards[o];
		for (let { maybeCard: e, idx: t } of [{
			maybeCard: s,
			idx: a
		}, {
			maybeCard: c,
			idx: o
		}]) !ln(e) || e.wasWateredDuringTurn || (r = Yt(r, n, t, {
			wasWateredDuringTurn: !0,
			waterCards: e.waterCards + 1
		}));
		return e = {
			...e,
			match: r
		}, e;
	}
}), Zt = /* @__PURE__ */ Te({
	shovel: () => Jt,
	sprinkler: () => Xt
}), Qt = Object.freeze({
	type: P.WATER,
	id: "water",
	name: "Water"
}), $t = /* @__PURE__ */ Te({ water: () => Qt }), en = /* @__PURE__ */ Te({
	allCards: () => nn,
	carrot: () => lt,
	corn: () => ut,
	cropCards: () => gt,
	eventCards: () => St,
	garlic: () => dt,
	instantiate: () => tn,
	pea: () => ft,
	potato: () => pt,
	pumpkin: () => mt,
	rain: () => xt,
	shovel: () => Jt,
	sprinkler: () => Xt,
	tomato: () => ht,
	toolCards: () => Zt,
	water: () => Qt,
	waterCards: () => $t
}), tn = (e) => ({
	...e,
	instanceId: ot()
}), nn = Object.fromEntries(Object.values({
	...gt,
	...St,
	...Zt,
	...$t
}).map((e) => [e.id, e])), rn = (e) => typeof e == "object" && !!e, an = (e) => rn(e) ? "id" in e && typeof e.id == "string" && "type" in e && typeof e.type == "string" && e.type in P && "instanceId" in e && typeof e.instanceId == "string" : !1, on = (e) => rn(e) ? "id" in e && typeof e.id == "string" && "type" in e && e.type === P.CROP : !1, sn = (e) => e.type === P.CROP, cn = (e) => e.type === P.TOOL && e.isPlantable ? !0 : sn(e), ln = (e) => {
	if (!rn(e)) return !1;
	let t = e;
	return "instance" in t && an(t.instance) && sn(t.instance) && "waterCards" in t && typeof t.waterCards == "number" && "wasWateredDuringTurn" in t && typeof t.wasWateredDuringTurn == "boolean";
}, un = (e) => {
	if (!rn(e)) return !1;
	let t = e;
	return "instance" in t && an(t.instance) && $e(t.instance);
}, dn = (e) => ln(e) || un(e), fn = (e) => e in en, pn = (e) => rn(e) && "id" in e && typeof e.id == "string" && fn(e.id) && "name" in e && typeof e.name == "string" && "type" in e && typeof e.type == "string" && e.type in P, mn = (e) => rn(e), z = new class {
	constructor() {
		this.getCardInstanceFromHand = (e, t, n) => {
			let { hand: r } = this.getPlayer(e, t), i = r[n];
			if (!i) throw Error(`Card index ${n} is not in player ${t}'s hand`);
			return i;
		}, this.getPlayedCardFromField = (e, t, n) => {
			let { cards: r } = this.getPlayer(e, t).field, i = r[n];
			if (!i) throw new Rt(n, t);
			return i;
		}, this.getOpponentPlayerIds = (e) => Object.keys(e.table.players).filter((t) => t !== e.sessionOwnerPlayerId), this.getPlayer = (e, t) => {
			let n = e.table.players[t];
			if (!n) throw new Bt(t);
			return n;
		}, this.findCropIndexesInDeck = (e, t, n = 1) => {
			let { deck: r } = this.getPlayer(e, t), i = [];
			for (let e = 0; e < n && e <= r.length - 1 && i.length < n; e++) {
				let t = r[e];
				t && sn(t) && (i = [...i, e]);
			}
			return i;
		}, this.findCropIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (sn(t) && (e = [...e, n]), e), []), this.findWaterIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (Ze(t) && (e = [...e, n]), e), []), this.findEventIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => (Qe(t) && (e = [...e, n]), e), []), this.findToolIndexesInPlayerHand = (e, t) => this.getPlayer(e, t).hand.reduce((e, t, n) => ($e(t) && (e = [...e, n]), e), []), this.playerIds = (e) => Object.keys(e.table.players).sort(), this.nextPlayerIndex = (e) => {
			let { currentPlayerId: t } = e;
			R(t);
			let n = Object.keys(e.table.players).sort();
			return (n.indexOf(t) + 1) % n.length;
		}, this.fullPlots = (e, t) => {
			let { field: n } = z.getPlayer(e, t), { cards: r } = n;
			return r.filter((e) => !!e);
		};
	}
	getCropFromHand(e, t, n) {
		let r = this.getCardInstanceFromHand(e, t, n);
		if (!on(r)) throw new zt(`${r.id} is not a crop card.`);
		return r;
	}
}(), B = /* @__PURE__ */ function(e) {
	return e.SMALL = "SMALL", e.MEDIUM = "MEDIUM", e.LARGE = "LARGE", e;
}({}), hn = {
	[B.SMALL]: {
		height: "14rem",
		width: "8rem"
	},
	[B.MEDIUM]: {
		height: "21rem",
		width: "12rem"
	},
	[B.LARGE]: {
		height: "28rem",
		width: "16rem"
	}
}, gn = 20, _n = {
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
}, vn = ({ cardSize: e }) => {
	let t = c(), n = k(), [r, i] = A(_n);
	w(() => {
		let e = () => {
			n.current && i(n.current.getBoundingClientRect());
		};
		return e(), window.addEventListener("resize", e), () => {
			window.removeEventListener("resize", e);
		};
	}, [n]);
	let a = window.innerWidth / 2, o = window.innerHeight / 2, s = `calc(${r.left}px + ${hn[e].width} / 2)`, l = `calc(${r.top}px + ${hn[e].height} / 2)`, u = `calc(${a}px - ${s})`, d = `calc(${o}px - ${l})`;
	return {
		containerRef: n,
		selectedCardSxProps: {
			boxShadow: t.shadows[11],
			transform: `translate(${u}, ${d}) scale(1)`,
			zIndex: gn
		}
	};
};
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function yn(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var bn = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, xn = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Sn = {};
function Cn(e, t) {
	return ((t || Sn).jsx ? xn : bn).test(e);
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var wn = /[ \t\n\f\r]/g;
function Tn(e) {
	return typeof e == "object" ? e.type === "text" ? En(e.value) : !1 : En(e);
}
function En(e) {
	return e.replace(wn, "") === "";
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var Dn = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
Dn.prototype.normal = {}, Dn.prototype.property = {}, Dn.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function On(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new Dn(n, r, t);
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function kn(e) {
	return e.toLowerCase();
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var An = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
An.prototype.attribute = "", An.prototype.booleanish = !1, An.prototype.boolean = !1, An.prototype.commaOrSpaceSeparated = !1, An.prototype.commaSeparated = !1, An.prototype.defined = !1, An.prototype.mustUseProperty = !1, An.prototype.number = !1, An.prototype.overloadedBoolean = !1, An.prototype.property = "", An.prototype.spaceSeparated = !1, An.prototype.space = void 0;
//#endregion
//#region node_modules/property-information/lib/util/types.js
var jn = /* @__PURE__ */ Te({
	boolean: () => V,
	booleanish: () => H,
	commaOrSpaceSeparated: () => Fn,
	commaSeparated: () => Pn,
	number: () => U,
	overloadedBoolean: () => Nn,
	spaceSeparated: () => W
}), Mn = 0, V = In(), H = In(), Nn = In(), U = In(), W = In(), Pn = In(), Fn = In();
function In() {
	return 2 ** ++Mn;
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Ln = Object.keys(jn), Rn = class extends An {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), zn(this, "space", r), typeof n == "number") for (; ++i < Ln.length;) {
			let e = Ln[i];
			zn(this, Ln[i], (n & jn[e]) === jn[e]);
		}
	}
};
Rn.prototype.defined = !0;
function zn(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function Bn(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Rn(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[kn(r)] = r, n[kn(a.attribute)] = r;
	}
	return new Dn(t, n, e.space);
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Vn = Bn({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: H,
		ariaAutoComplete: null,
		ariaBusy: H,
		ariaChecked: H,
		ariaColCount: U,
		ariaColIndex: U,
		ariaColSpan: U,
		ariaControls: W,
		ariaCurrent: null,
		ariaDescribedBy: W,
		ariaDetails: null,
		ariaDisabled: H,
		ariaDropEffect: W,
		ariaErrorMessage: null,
		ariaExpanded: H,
		ariaFlowTo: W,
		ariaGrabbed: H,
		ariaHasPopup: null,
		ariaHidden: H,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: W,
		ariaLevel: U,
		ariaLive: null,
		ariaModal: H,
		ariaMultiLine: H,
		ariaMultiSelectable: H,
		ariaOrientation: null,
		ariaOwns: W,
		ariaPlaceholder: null,
		ariaPosInSet: U,
		ariaPressed: H,
		ariaReadOnly: H,
		ariaRelevant: null,
		ariaRequired: H,
		ariaRoleDescription: W,
		ariaRowCount: U,
		ariaRowIndex: U,
		ariaRowSpan: U,
		ariaSelected: H,
		ariaSetSize: U,
		ariaSort: null,
		ariaValueMax: U,
		ariaValueMin: U,
		ariaValueNow: U,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function Hn(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Un(e, t) {
	return Hn(e, t.toLowerCase());
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Wn = Bn({
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
		accept: Pn,
		acceptCharset: W,
		accessKey: W,
		action: null,
		allow: null,
		allowFullScreen: V,
		allowPaymentRequest: V,
		allowUserMedia: V,
		alt: null,
		as: null,
		async: V,
		autoCapitalize: null,
		autoComplete: W,
		autoFocus: V,
		autoPlay: V,
		blocking: W,
		capture: null,
		charSet: null,
		checked: V,
		cite: null,
		className: W,
		cols: U,
		colSpan: null,
		content: null,
		contentEditable: H,
		controls: V,
		controlsList: W,
		coords: U | Pn,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: V,
		defer: V,
		dir: null,
		dirName: null,
		disabled: V,
		download: Nn,
		draggable: H,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: V,
		formTarget: null,
		headers: W,
		height: U,
		hidden: Nn,
		high: U,
		href: null,
		hrefLang: null,
		htmlFor: W,
		httpEquiv: W,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: V,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: V,
		itemId: null,
		itemProp: W,
		itemRef: W,
		itemScope: V,
		itemType: W,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: V,
		low: U,
		manifest: null,
		max: null,
		maxLength: U,
		media: null,
		method: null,
		min: null,
		minLength: U,
		multiple: V,
		muted: V,
		name: null,
		nonce: null,
		noModule: V,
		noValidate: V,
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
		open: V,
		optimum: U,
		pattern: null,
		ping: W,
		placeholder: null,
		playsInline: V,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: V,
		referrerPolicy: null,
		rel: W,
		required: V,
		reversed: V,
		rows: U,
		rowSpan: U,
		sandbox: W,
		scope: null,
		scoped: V,
		seamless: V,
		selected: V,
		shadowRootClonable: V,
		shadowRootDelegatesFocus: V,
		shadowRootMode: null,
		shape: null,
		size: U,
		sizes: null,
		slot: null,
		span: U,
		spellCheck: H,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: U,
		step: null,
		style: null,
		tabIndex: U,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: V,
		useMap: null,
		value: H,
		width: U,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: W,
		axis: null,
		background: null,
		bgColor: null,
		border: U,
		borderColor: null,
		bottomMargin: U,
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
		compact: V,
		declare: V,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: U,
		leftMargin: U,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: U,
		marginWidth: U,
		noResize: V,
		noHref: V,
		noShade: V,
		noWrap: V,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: U,
		rules: null,
		scheme: null,
		scrolling: H,
		standby: null,
		summary: null,
		text: null,
		topMargin: U,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: U,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: V,
		disableRemotePlayback: V,
		prefix: null,
		property: null,
		results: U,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: Un
}), Gn = Bn({
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
		about: Fn,
		accentHeight: U,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: U,
		amplitude: U,
		arabicForm: null,
		ascent: U,
		attributeName: null,
		attributeType: null,
		azimuth: U,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: U,
		by: null,
		calcMode: null,
		capHeight: U,
		className: W,
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
		descent: U,
		diffuseConstant: U,
		direction: null,
		display: null,
		dur: null,
		divisor: U,
		dominantBaseline: null,
		download: V,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: U,
		enableBackground: null,
		end: null,
		event: null,
		exponent: U,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: U,
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
		g1: Pn,
		g2: Pn,
		glyphName: Pn,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: U,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: U,
		horizOriginX: U,
		horizOriginY: U,
		id: null,
		ideographic: U,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: U,
		k: U,
		k1: U,
		k2: U,
		k3: U,
		k4: U,
		kernelMatrix: Fn,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: U,
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
		mediaSize: U,
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
		overlinePosition: U,
		overlineThickness: U,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: U,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: W,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: U,
		pointsAtY: U,
		pointsAtZ: U,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: Fn,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: Fn,
		rev: Fn,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: Fn,
		requiredFeatures: Fn,
		requiredFonts: Fn,
		requiredFormats: Fn,
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
		specularConstant: U,
		specularExponent: U,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: U,
		strikethroughThickness: U,
		string: null,
		stroke: null,
		strokeDashArray: Fn,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: U,
		strokeOpacity: U,
		strokeWidth: null,
		style: null,
		surfaceScale: U,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: Fn,
		tabIndex: U,
		tableValues: null,
		target: null,
		targetX: U,
		targetY: U,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: Fn,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: U,
		underlineThickness: U,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: U,
		values: null,
		vAlphabetic: U,
		vMathematical: U,
		vectorEffect: null,
		vHanging: U,
		vIdeographic: U,
		version: null,
		vertAdvY: U,
		vertOriginX: U,
		vertOriginY: U,
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
		xHeight: U,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: Hn
}), Kn = Bn({
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
}), qn = Bn({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Un
}), Jn = Bn({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Yn = {
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
}, Xn = /[A-Z]/g, Zn = /-[a-z]/g, Qn = /^data[-\w.:]+$/i;
function $n(e, t) {
	let n = kn(t), r = t, i = An;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Qn.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Zn, tr);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Zn.test(e)) {
				let n = e.replace(Xn, er);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Rn;
	}
	return new i(r, t);
}
function er(e) {
	return "-" + e.toLowerCase();
}
function tr(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/property-information/index.js
var nr = On([
	Vn,
	Wn,
	Kn,
	qn,
	Jn
], "html"), rr = On([
	Vn,
	Gn,
	Kn,
	qn,
	Jn
], "svg");
//#endregion
//#region node_modules/space-separated-tokens/index.js
function ir(e) {
	return e.join(" ").trim();
}
//#endregion
//#region node_modules/inline-style-parser/index.js
var ar = /* @__PURE__ */ we(((e, t) => {
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
})), or = /* @__PURE__ */ we(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(ar());
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
})), sr = /* @__PURE__ */ we(((e) => {
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
})), cr = /* @__PURE__ */ we(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(or()), r = sr();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), lr = dr("end"), ur = dr("start");
function dr(e) {
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
function fr(e) {
	let t = ur(e), n = lr(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function pr(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? hr(e.position) : "start" in e || "end" in e ? hr(e) : "line" in e || "column" in e ? mr(e) : "";
}
function mr(e) {
	return gr(e && e.line) + ":" + gr(e && e.column);
}
function hr(e) {
	return mr(e && e.start) + "-" + mr(e && e.end);
}
function gr(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var _r = class extends Error {
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
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file, this.message = r, this.line = o ? o.line : void 0, this.name = pr(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual, this.expected, this.note, this.url;
	}
};
_r.prototype.file = "", _r.prototype.name = "", _r.prototype.reason = "", _r.prototype.message = "", _r.prototype.stack = "", _r.prototype.column = void 0, _r.prototype.line = void 0, _r.prototype.ancestors = void 0, _r.prototype.cause = void 0, _r.prototype.fatal = void 0, _r.prototype.place = void 0, _r.prototype.ruleId = void 0, _r.prototype.source = void 0;
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var vr = /* @__PURE__ */ De(cr(), 1), yr = {}.hasOwnProperty, br = /* @__PURE__ */ new Map(), xr = /[A-Z]/g, Sr = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), Cr = new Set(["td", "th"]);
function wr(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Fr(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = Pr(n, t.jsx, t.jsxs);
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
		schema: t.space === "svg" ? rr : nr,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Tr(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Tr(e, t, n) {
	if (t.type === "element") return Er(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Dr(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return kr(e, t, n);
	if (t.type === "mdxjsEsm") return Or(e, t);
	if (t.type === "root") return Ar(e, t, n);
	if (t.type === "text") return jr(e, t);
}
function Er(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = rr, e.schema = i), e.ancestors.push(t);
	let a = Vr(e, t.tagName, !1), o = Ir(e, t), s = Rr(e, t);
	return Sr.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !Tn(e) : !0;
	})), Mr(e, o, a, t), Nr(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Dr(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Hr(e, t.position);
}
function Or(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Hr(e, t.position);
}
function kr(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = rr, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Vr(e, t.name, !0), o = Lr(e, t), s = Rr(e, t);
	return Mr(e, o, a, t), Nr(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Ar(e, t, n) {
	let r = {};
	return Nr(r, Rr(e, t)), e.create(t, e.Fragment, r, n);
}
function jr(e, t) {
	return t.value;
}
function Mr(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function Nr(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function Pr(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Fr(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = ur(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Ir(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && yr.call(t.properties, i)) {
		let a = zr(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && Cr.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Lr(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else Hr(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else Hr(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Rr(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : br;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Tr(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function zr(e, t, n) {
	let r = $n(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? yn(n) : ir(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Br(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Ur(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Yn[r.property] || r.property : r.attribute, n];
	}
}
function Br(e, t) {
	try {
		return (0, vr.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new _r("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute", r;
	}
}
function Vr(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = Cn(e[n]) ? {
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
	} else r = Cn(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return yr.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Hr(e);
}
function Hr(e, t) {
	let n = new _r("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = "https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Ur(e) {
	let t = {}, n;
	for (n in e) yr.call(e, n) && (t[Wr(n)] = e[n]);
	return t;
}
function Wr(e) {
	let t = e.replace(xr, Gr);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Gr(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var Kr = {
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
}, qr = {};
function Jr(e, t) {
	let n = t || qr;
	return Yr(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function Yr(e, t, n) {
	if (Zr(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Xr(e.children, t, n);
	}
	return Array.isArray(e) ? Xr(e, t, n) : "";
}
function Xr(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Yr(e[i], t, n);
	return r.join("");
}
function Zr(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var Qr = document.createElement("i");
function $r(e) {
	let t = "&" + e + ";";
	Qr.innerHTML = t;
	let n = Qr.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function ei(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function ti(e, t) {
	return e.length > 0 ? (ei(e, e.length, 0, t), e) : t;
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var ni = {}.hasOwnProperty;
function ri(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) ii(t, e[n]);
	return t;
}
function ii(e, t) {
	let n;
	for (n in t) {
		let r = (ni.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			ni.call(r, a) || (r[a] = []);
			let e = i[a];
			ai(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function ai(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	ei(e, 0, 0, r);
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function oi(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function si(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var ci = vi(/[A-Za-z]/), li = vi(/[\dA-Za-z]/), ui = vi(/[#-'*+\--9=?A-Z^-~]/);
function di(e) {
	return e !== null && (e < 32 || e === 127);
}
var fi = vi(/\d/), pi = vi(/[\dA-Fa-f]/), mi = vi(/[!-/:-@[-`{-~]/);
function G(e) {
	return e !== null && e < -2;
}
function hi(e) {
	return e !== null && (e < 0 || e === 32);
}
function K(e) {
	return e === -2 || e === -1 || e === 32;
}
var gi = vi(/\p{P}|\p{S}/u), _i = vi(/\s/);
function vi(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function yi(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && li(e.charCodeAt(n + 1)) && li(e.charCodeAt(n + 2))) i = 2;
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
function q(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return K(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return K(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var bi = { tokenize: xi };
function xi(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), q(e, t, "linePrefix");
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
		return G(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var Si = { tokenize: wi }, Ci = { tokenize: Ti };
function wi(e) {
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
			return ei(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Ci, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Ci, p, m)(n);
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
		return G(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
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
			ei(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
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
function Ti(e, t, n) {
	return q(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Ei(e) {
	if (e === null || hi(e) || _i(e)) return 1;
	if (gi(e)) return 2;
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function Di(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var Oi = {
	name: "attention",
	resolveAll: ki,
	tokenize: Ai
};
function ki(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			ji(d, -c), ji(f, c), o = {
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
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = ti(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = ti(l, [
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
			]), l = ti(l, Di(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = ti(l, [
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
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = ti(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, ei(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Ai(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ei(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Ei(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function ji(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Mi = {
	name: "autolink",
	tokenize: Ni
};
function Ni(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return ci(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || li(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || li(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || di(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : ui(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return li(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || li(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var Pi = {
	partial: !0,
	tokenize: Fi
};
function Fi(e, t, n) {
	return r;
	function r(t) {
		return K(t) ? q(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || G(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var Ii = {
	continuation: { tokenize: Ri },
	exit: zi,
	name: "blockQuote",
	tokenize: Li
};
function Li(e, t, n) {
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
		return K(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Ri(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return K(t) ? q(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Ii, t, n)(r);
	}
}
function zi(e) {
	e.exit("blockQuote");
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Bi = {
	name: "characterEscape",
	tokenize: Vi
};
function Vi(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return mi(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var Hi = {
	name: "characterReference",
	tokenize: Ui
};
function Ui(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = li, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = pi, u) : (e.enter("characterReferenceValue"), a = 7, o = fi, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === li && !$r(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Wi = {
	partial: !0,
	tokenize: qi
}, Gi = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Ki
};
function Ki(e, t, n) {
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
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), K(t) ? q(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || G(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Wi, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || G(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : K(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), q(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || G(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || G(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && K(t) ? q(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || G(t) ? e.check(Wi, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || G(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
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
			return e.enter("codeFencedFence"), K(t) ? q(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), K(t) ? q(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || G(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function qi(e, t, n) {
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
var Ji = {
	name: "codeIndented",
	tokenize: Xi
}, Yi = {
	partial: !0,
	tokenize: Zi
};
function Xi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), q(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : G(t) ? e.attempt(Yi, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || G(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Zi(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : G(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : q(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : G(e) ? i(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var Qi = {
	name: "codeText",
	previous: ea,
	resolve: $i,
	tokenize: ta
};
function $i(e) {
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
function ea(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ta(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : G(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || G(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var na = class {
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
		return n && ra(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), ra(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), ra(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			ra(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			ra(this.left, t.reverse());
		}
	}
};
function ra(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function ia(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new na(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, aa(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return ei(e, 0, Infinity, u.slice(0)), !l;
}
function aa(e, t) {
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
var oa = {
	resolve: ca,
	tokenize: la
}, sa = {
	partial: !0,
	tokenize: ua
};
function ca(e) {
	return ia(e), e;
}
function la(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : G(t) ? e.check(sa, o, a)(t) : (e.consume(t), i);
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
function ua(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), q(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || G(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function da(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || di(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || G(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || hi(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || di(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function fa(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : G(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || G(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !K(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function pa(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : G(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), q(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || G(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function ma(e, t) {
	let n;
	return r;
	function r(i) {
		return G(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : K(i) ? q(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var ha = {
	name: "definition",
	tokenize: _a
}, ga = {
	partial: !0,
	tokenize: va
};
function _a(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return fa.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = si(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return hi(t) ? ma(e, l)(t) : l(t);
	}
	function l(t) {
		return da(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(ga, d, d)(t);
	}
	function d(t) {
		return K(t) ? q(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || G(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function va(e, t, n) {
	return r;
	function r(t) {
		return hi(t) ? ma(e, i)(t) : n(t);
	}
	function i(t) {
		return pa(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return K(t) ? q(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || G(e) ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var ya = {
	name: "hardBreakEscape",
	tokenize: ba
};
function ba(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return G(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var xa = {
	name: "headingAtx",
	resolve: Sa,
	tokenize: Ca
};
function Sa(e, t) {
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
	}, ei(e, r, n - r + 1, [
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
function Ca(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || hi(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || G(n) ? (e.exit("atxHeading"), t(n)) : K(n) ? q(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || hi(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var wa = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Ta = [
	"pre",
	"script",
	"style",
	"textarea"
], Ea = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: ka,
	tokenize: Aa
}, Da = {
	partial: !0,
	tokenize: Ma
}, Oa = {
	partial: !0,
	tokenize: ja
};
function ka(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Aa(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : re) : ci(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : ci(a) ? (e.consume(a), i = 4, r.interrupt ? t : re) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : re) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return ci(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || hi(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Ta.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : wa.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || li(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return K(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || ci(t) ? (e.consume(t), b) : K(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || li(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : K(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : K(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || G(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || hi(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || K(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || G(t) ? O(t) : K(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), j) : t === 60 && i === 1 ? (e.consume(t), M) : t === 62 && i === 4 ? (e.consume(t), ie) : t === 63 && i === 3 ? (e.consume(t), re) : t === 93 && i === 5 ? (e.consume(t), ne) : G(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Da, ae, k)(t)) : t === null || G(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(Oa, A, ae)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ee;
	}
	function ee(t) {
		return t === null || G(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function j(t) {
		return t === 45 ? (e.consume(t), re) : O(t);
	}
	function M(t) {
		return t === 47 ? (e.consume(t), o = "", te) : O(t);
	}
	function te(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Ta.includes(n) ? (e.consume(t), ie) : O(t);
		}
		return ci(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), te) : O(t);
	}
	function ne(t) {
		return t === 93 ? (e.consume(t), re) : O(t);
	}
	function re(t) {
		return t === 62 ? (e.consume(t), ie) : t === 45 && i === 2 ? (e.consume(t), re) : O(t);
	}
	function ie(t) {
		return t === null || G(t) ? (e.exit("htmlFlowData"), ae(t)) : (e.consume(t), ie);
	}
	function ae(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function ja(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return G(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function Ma(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Pi, t, n);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Na = {
	name: "htmlText",
	tokenize: Pa
};
function Pa(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : ci(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : ci(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : G(t) ? (o = d, M(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? j(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : G(t) ? (o = h, M(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? j(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? j(t) : G(t) ? (o = v, M(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : G(t) ? (o = y, M(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? j(e) : y(e);
	}
	function x(t) {
		return ci(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || li(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return G(t) ? (o = C, M(t)) : K(t) ? (e.consume(t), C) : j(t);
	}
	function w(t) {
		return t === 45 || li(t) ? (e.consume(t), w) : t === 47 || t === 62 || hi(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), j) : t === 58 || t === 95 || ci(t) ? (e.consume(t), E) : G(t) ? (o = T, M(t)) : K(t) ? (e.consume(t), T) : j(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || li(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : G(t) ? (o = D, M(t)) : K(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : G(t) ? (o = O, M(t)) : K(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, ee) : t === null ? n(t) : G(t) ? (o = k, M(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || hi(t) ? T(t) : (e.consume(t), A);
	}
	function ee(e) {
		return e === 47 || e === 62 || hi(e) ? T(e) : n(e);
	}
	function j(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function M(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), te;
	}
	function te(t) {
		return K(t) ? q(e, ne, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : ne(t);
	}
	function ne(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var Fa = {
	name: "labelEnd",
	resolveAll: za,
	resolveTo: Ba,
	tokenize: Va
}, Ia = { tokenize: Ha }, La = { tokenize: Ua }, Ra = { tokenize: Wa };
function za(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && ei(e, 0, e.length, n), e;
}
function Ba(e, t) {
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
	]], s = ti(s, e.slice(a + 1, a + r + 3)), s = ti(s, [[
		"enter",
		u,
		t
	]]), s = ti(s, Di(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = ti(s, [
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
	]), s = ti(s, e.slice(o + 1)), s = ti(s, [[
		"exit",
		c,
		t
	]]), ei(e, a, e.length, s), e;
}
function Va(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(si(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Ia, u, o ? u : d)(t) : t === 91 ? e.attempt(La, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Ra, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Ha(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return hi(t) ? ma(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : da(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return hi(t) ? ma(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? pa(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return hi(t) ? ma(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Ua(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return fa.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(si(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Wa(e, t, n) {
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
var Ga = {
	name: "labelStartImage",
	resolveAll: Fa.resolveAll,
	tokenize: Ka
};
function Ka(e, t, n) {
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
var qa = {
	name: "labelStartLink",
	resolveAll: Fa.resolveAll,
	tokenize: Ja
};
function Ja(e, t, n) {
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
var Ya = {
	name: "lineEnding",
	tokenize: Xa
};
function Xa(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), q(e, t, "linePrefix");
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var Za = {
	name: "thematicBreak",
	tokenize: Qa
};
function Qa(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || G(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), K(t) ? q(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var $a = {
	continuation: { tokenize: ro },
	exit: ao,
	name: "list",
	tokenize: no
}, eo = {
	partial: !0,
	tokenize: oo
}, to = {
	partial: !0,
	tokenize: io
};
function no(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : fi(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(Za, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return fi(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Pi, r.interrupt ? n : u, e.attempt(eo, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return K(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function ro(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Pi, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, q(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !K(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(to, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, q(e, e.attempt($a, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function io(e, t, n) {
	let r = this;
	return q(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function ao(e) {
	e.exit(this.containerState.type);
}
function oo(e, t, n) {
	let r = this;
	return q(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !K(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var so = {
	name: "setextUnderline",
	resolveTo: co,
	tokenize: lo
};
function co(e, t) {
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
function lo(e, t, n) {
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
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), K(t) ? q(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || G(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var uo = { tokenize: fo };
function fo(e) {
	let t = this, n = e.attempt(Pi, r, e.attempt(this.parser.constructs.flowInitial, i, q(e, e.attempt(this.parser.constructs.flow, i, e.attempt(oa, i)), "linePrefix")));
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
var po = { resolveAll: _o() }, mo = go("string"), ho = go("text");
function go(e) {
	return {
		resolveAll: _o(e === "text" ? vo : void 0),
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
function _o(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function vo(e, t) {
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
var yo = /* @__PURE__ */ Te({
	attentionMarkers: () => Do,
	contentInitial: () => xo,
	disable: () => Oo,
	document: () => bo,
	flow: () => Co,
	flowInitial: () => So,
	insideSpan: () => Eo,
	string: () => wo,
	text: () => To
}), bo = {
	42: $a,
	43: $a,
	45: $a,
	48: $a,
	49: $a,
	50: $a,
	51: $a,
	52: $a,
	53: $a,
	54: $a,
	55: $a,
	56: $a,
	57: $a,
	62: Ii
}, xo = { 91: ha }, So = {
	[-2]: Ji,
	[-1]: Ji,
	32: Ji
}, Co = {
	35: xa,
	42: Za,
	45: [so, Za],
	60: Ea,
	61: so,
	95: Za,
	96: Gi,
	126: Gi
}, wo = {
	38: Hi,
	92: Bi
}, To = {
	[-5]: Ya,
	[-4]: Ya,
	[-3]: Ya,
	33: Ga,
	38: Hi,
	42: Oi,
	60: [Mi, Na],
	91: qa,
	92: [ya, Bi],
	93: Fa,
	95: Oi,
	96: Qi
}, Eo = { null: [Oi, po] }, Do = { null: [42, 95] }, Oo = { null: [] };
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function ko(e, t, n) {
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
		return o = ti(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Di(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return jo(p(e), t);
	}
	function p(e) {
		return Ao(o, e);
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
		G(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
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
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && ei(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
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
function Ao(e, t) {
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
function jo(e, t) {
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
function Mo(e) {
	let t = {
		constructs: ri([yo, ...(e || {}).extensions || []]),
		content: n(bi),
		defined: [],
		document: n(Si),
		flow: n(uo),
		lazy: {},
		string: n(mo),
		text: n(ho)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return ko(t, e, n);
		}
	}
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function No(e) {
	for (; !ia(e););
	return e;
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var Po = /[\0\t\n\r]/g;
function Fo() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Po.lastIndex = u, c = Po.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
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
var Io = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Lo(e) {
	return e.replace(Io, Ro);
}
function Ro(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return oi(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return $r(n) || e;
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var zo = {}.hasOwnProperty;
function Bo(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), Vo(n)(No(Mo(n).document().write(Fo()(e, t, !0))));
}
function Vo(e) {
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
			reference: oe,
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
			characterReferenceMarkerHexadecimal: ce,
			characterReferenceMarkerNumeric: ce,
			characterReferenceValue: N,
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
			image: c(M),
			label: ne,
			labelText: te,
			lineEnding: D,
			link: c(j),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: se,
			resourceDestinationString: re,
			resourceTitleString: ie,
			resource: ae,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	Uo(t, (e || {}).mdastExtensions || []);
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
			zo.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Go).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: Ho(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: Ho(e.length > 0 ? e[e.length - 2][1].end : {
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
			start: Ho(t.start),
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
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Go).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + pr({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = Ho(e.end);
	}
	function u() {
		return Jr(this.stack.pop());
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
		n.label = t, n.identifier = si(this.sliceSerialize(e)).toLowerCase();
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
			start: Ho(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = Ho(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = Ho(e.end), this.data.atHardBreak = void 0;
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
	function j() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function te(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = Lo(t), n.identifier = si(t).toLowerCase();
	}
	function ne() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function re() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function ie() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function ae() {
		this.data.inReference = void 0;
	}
	function oe() {
		this.data.referenceType = "collapsed";
	}
	function se(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = si(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function ce(e) {
		this.data.characterReferenceType = e.type;
	}
	function N(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = oi(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = $r(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function le(e) {
		let t = this.stack.pop();
		t.position.end = Ho(e.end);
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
function Ho(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Uo(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Uo(e, r) : Wo(e, r);
	}
}
function Wo(e, t) {
	let n;
	for (n in t) if (zo.call(t, n)) switch (n) {
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
function Go(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + pr({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + pr({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + pr({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function Ko(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Bo(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function qo(e, t) {
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
function Jo(e, t) {
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
function Yo(e, t) {
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
function Xo(e, t) {
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
function Zo(e, t) {
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
function Qo(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = yi(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
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
function $o(e, t) {
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
function es(e, t) {
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
function ts(e, t) {
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
function ns(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return ts(e, t);
	let i = {
		src: yi(r.url || ""),
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
function rs(e, t) {
	let n = { src: yi(t.url) };
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
function is(e, t) {
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
function as(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return ts(e, t);
	let i = { href: yi(r.url || "") };
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
function os(e, t) {
	let n = { href: yi(t.url) };
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
function ss(e, t, n) {
	let r = e.all(t), i = n ? cs(n) : ls(t), a = {}, o = [];
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
function cs(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = ls(n[r]);
	}
	return t;
}
function ls(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function us(e, t) {
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
function ds(e, t) {
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
function fs(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function ps(e, t) {
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
function ms(e, t) {
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
		}, a = ur(t.children[1]), o = lr(t.children[t.children.length - 1]);
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
function hs(e, t, n) {
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
function gs(e, t) {
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
var _s = 9, vs = 32;
function ys(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(bs(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(bs(t.slice(i), i > 0, !1)), a.join("");
}
function bs(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === _s || t === vs;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === _s || t === vs;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function xs(e, t) {
	let n = {
		type: "text",
		value: ys(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Ss(e, t) {
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
var Cs = {
	blockquote: qo,
	break: Jo,
	code: Yo,
	delete: Xo,
	emphasis: Zo,
	footnoteReference: Qo,
	heading: $o,
	html: es,
	imageReference: ns,
	image: rs,
	inlineCode: is,
	linkReference: as,
	link: os,
	listItem: ss,
	list: us,
	paragraph: ds,
	root: fs,
	strong: ps,
	table: ms,
	tableCell: gs,
	tableRow: hs,
	text: xs,
	thematicBreak: Ss,
	toml: ws,
	yaml: ws,
	definition: ws,
	footnoteDefinition: ws
};
function ws() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var Ts = typeof self == "object" ? self : globalThis, Es = (e, t) => {
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
				return n(new Ts[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Ts[a](o), i);
	};
	return r;
}, Ds = (e) => Es(/* @__PURE__ */ new Map(), e)(0), Os = "", { toString: ks } = {}, { keys: As } = Object, js = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = ks.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Os];
		case "Object": return [2, Os];
		case "Date": return [3, Os];
		case "RegExp": return [4, Os];
		case "Map": return [5, Os];
		case "Set": return [6, Os];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Ms = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Ns = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = js(r);
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
				for (let t of As(r)) (e || !Ms(js(r[t]))) && n.push([a(t), a(r[t])]);
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
				for (let [n, i] of r) (e || !(Ms(js(n)) || Ms(js(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Ms(js(n))) && t.push(a(n));
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
}, Ps = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Ns(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Fs = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Ds(Ps(e, t)) : structuredClone(e) : (e, t) => Ds(Ps(e, t));
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Is(e, t) {
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
function Ls(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Rs(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Is, r = e.options.footnoteBackLabel || Ls, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = yi(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
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
					...Fs(o),
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
var zs = (function(e) {
	if (e == null) return Ws;
	if (typeof e == "function") return Us(e);
	if (typeof e == "object") return Array.isArray(e) ? Bs(e) : Vs(e);
	if (typeof e == "string") return Hs(e);
	throw Error("Expected function, string, or object as test");
});
function Bs(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = zs(e[n]);
	return Us(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function Vs(e) {
	let t = e;
	return Us(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Hs(e) {
	return Us(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Us(e) {
	return t;
	function t(t, n, r) {
		return !!(Gs(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Ws() {
	return !0;
}
function Gs(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function Ks(e) {
	return e;
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var qs = [];
function Js(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = zs(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Ks(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = qs, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Ys(n(e, c)), l[0] === !1)) return l;
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
function Ys(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? qs : [e];
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Xs(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Js(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Zs = {}.hasOwnProperty, Qs = {};
function $s(e, t) {
	let n = t || Qs, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: tc,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Cs,
			...n.handlers
		},
		one: o,
		options: n,
		patch: ec,
		wrap: rc
	};
	return Xs(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Zs.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Fs(n);
				return r.children = a.all(e), r;
			}
			return Fs(e);
		}
		return (a.options.unknownHandler || nc)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = ic(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = ic(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function ec(e, t) {
	e.position && (t.position = fr(e));
}
function tc(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Fs(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function nc(e, t) {
	let n = t.data || {}, r = "value" in t && !(Zs.call(n, "hProperties") || Zs.call(n, "hChildren")) ? {
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
function rc(e, t) {
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
function ic(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function ac(e, t) {
	let n = $s(e, t), r = n.one(e, void 0), i = Rs(n), a = Array.isArray(r) ? {
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
function oc(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = ac(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return ac(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region node_modules/bail/index.js
function sc(e) {
	if (e) throw e;
}
//#endregion
//#region node_modules/extend/index.js
var cc = /* @__PURE__ */ we(((e, t) => {
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
function lc(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region node_modules/trough/lib/index.js
function uc() {
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
			t = o, s ? dc(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function dc(e, t) {
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
var fc = {
	basename: pc,
	dirname: mc,
	extname: hc,
	join: gc,
	sep: "/"
};
function pc(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	yc(e);
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
function mc(e) {
	if (yc(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function hc(e) {
	yc(e);
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
function gc(...e) {
	let t = -1, n;
	for (; ++t < e.length;) yc(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : _c(n);
}
function _c(e) {
	yc(e);
	let t = e.codePointAt(0) === 47, n = vc(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function vc(e, t) {
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
function yc(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var bc = { cwd: xc };
function xc() {
	return "/";
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Sc(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function Cc(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!Sc(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return wc(e);
}
function wc(e) {
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
var Tc = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], Ec = class {
	constructor(e) {
		let t;
		t = e ? Sc(e) ? { path: e } : typeof e == "string" || Ac(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : bc.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < Tc.length;) {
			let e = Tc[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) Tc.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? fc.basename(this.path) : void 0;
	}
	set basename(e) {
		Oc(e, "basename"), Dc(e, "basename"), this.path = fc.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? fc.dirname(this.path) : void 0;
	}
	set dirname(e) {
		kc(this.basename, "dirname"), this.path = fc.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? fc.extname(this.path) : void 0;
	}
	set extname(e) {
		if (Dc(e, "extname"), kc(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = fc.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		Sc(e) && (e = Cc(e)), Oc(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? fc.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Oc(e, "stem"), Dc(e, "stem"), this.path = fc.join(this.dirname || "", e + (this.extname || ""));
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
		let r = new _r(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function Dc(e, t) {
	if (e && e.includes(fc.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + fc.sep + "`");
}
function Oc(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function kc(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function Ac(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var jc = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Mc = /* @__PURE__ */ De(cc(), 1), Nc = {}.hasOwnProperty, Pc = new class e extends jc {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = uc();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, Mc.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (Lc("data", this.frozen), this.namespace[e] = t, this) : Nc.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Lc("data", this.frozen), this.namespace = e, this) : this.namespace;
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
		let t = Bc(e), n = this.parser || this.Parser;
		return Fc("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Fc("process", this.parser || this.Parser), Ic("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = Bc(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				Hc(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Fc("processSync", this.parser || this.Parser), Ic("processSync", this.compiler || this.Compiler), this.process(e, r), zc("processSync", "process", t), n;
		function r(e, r) {
			t = !0, sc(e), n = r;
		}
	}
	run(e, t, n) {
		Rc(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = Bc(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), zc("runSync", "run", n), r;
		function i(e, t) {
			sc(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = Bc(t), r = this.compiler || this.Compiler;
		return Ic("stringify", r), Rc(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (Lc("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
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
			o(e.plugins), e.settings && (r.settings = (0, Mc.default)(!0, r.settings, e.settings));
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
				lc(o) && lc(r) && (r = (0, Mc.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Fc(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function Ic(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Lc(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Rc(e) {
	if (!lc(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function zc(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Bc(e) {
	return Vc(e) ? e : new Ec(e);
}
function Vc(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Hc(e) {
	return typeof e == "string" || Uc(e);
}
function Uc(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Wc = [], Gc = { allowDangerousHtml: !0 }, Kc = /^(https?|ircs?|mailto|xmpp)$/i, qc = [
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
function Jc(e) {
	let t = Yc(e), n = Xc(e);
	return Zc(t.runSync(t.parse(n), n), e);
}
function Yc(e) {
	let t = e.rehypePlugins || Wc, n = e.remarkPlugins || Wc, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Gc
	} : Gc;
	return Pc().use(Ko).use(n).use(oc, r).use(t);
}
function Xc(e) {
	let t = e.children || "", n = new Ec();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function Zc(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || Qc;
	for (let e of qc) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Xs(e, l), wr(e, {
		Fragment: ee,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: j,
		jsxs: M,
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
			for (t in Kr) if (Object.hasOwn(Kr, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Kr[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function Qc(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Kc.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs
var $c = /* @__PURE__ */ new Set();
function el(e, t, n) {
	e || $c.has(t) || (console.warn(t), n && console.warn(n), $c.add(t));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-proxy.mjs
function tl(e) {
	if (typeof Proxy > "u") return e;
	let t = /* @__PURE__ */ new Map();
	return new Proxy((...t) => (process.env.NODE_ENV !== "production" && el(!1, "motion() is deprecated. Use motion.create() instead."), e(...t)), { get: (n, r) => r === "create" ? e : (t.has(r) || t.set(r, e(r)), t.get(r)) });
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function nl(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var rl = (e) => Array.isArray(e);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/shallow-compare.mjs
function il(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs
function al(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs
function ol(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function sl(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = ol(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = ol(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function cl(e, t, n) {
	let r = e.getProps();
	return sl(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs
var ll = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], ul = ["initial", ...ll], dl = [
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
], fl = new Set(dl), pl = (e) => e * 1e3, ml = (e) => e / 1e3, hl = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, gl = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), _l = {
	type: "keyframes",
	duration: .8
}, vl = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, yl = (e, { keyframes: t }) => t.length > 2 ? _l : fl.has(e) ? e.startsWith("scale") ? gl(t[1]) : hl : vl;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs
function bl(e, t) {
	return e ? e[t] || e.default || e : void 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs
var xl = {
	skipAnimations: !1,
	useManualTiming: !1
}, Sl = { current: !1 }, Cl = (e) => e !== null;
function wl(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(Cl), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/noop.mjs
var Tl = (e) => e;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs
function El(e) {
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
var Dl = [
	"read",
	"resolveKeyframes",
	"update",
	"preRender",
	"render",
	"postRender"
], Ol = 40;
function kl(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = Dl.reduce((e, t) => (e[t] = El(a), e), {}), { read: s, resolveKeyframes: c, update: l, preRender: u, render: d, postRender: f } = o, p = () => {
		let a = xl.useManualTiming ? i.timestamp : performance.now();
		n = !1, i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Ol), 1), i.timestamp = a, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), i.isProcessing = !1, n && t && (r = !1, e(p));
	}, m = () => {
		n = !0, r = !0, i.isProcessing || e(p);
	};
	return {
		schedule: Dl.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < Dl.length; t++) o[Dl[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs
var { schedule: J, cancel: Al, state: Y, steps: jl } = kl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Tl, !0), Ml = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Nl = 1e-7, Pl = 12;
function Fl(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Ml(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Nl && ++s < Pl);
	return o;
}
function Il(e, t, n, r) {
	if (e === t && n === r) return Tl;
	let i = (t) => Fl(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : Ml(i(e), t, r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs
var Ll = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Rl = (e) => (t) => 1 - e(1 - t), zl = /*@__PURE__*/ Il(.33, 1.53, .69, .99), Bl = /*@__PURE__*/ Rl(zl), Vl = /*@__PURE__*/ Ll(Bl), Hl = (e) => (e *= 2) < 1 ? .5 * Bl(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Ul = (e) => 1 - Math.sin(Math.acos(e)), Wl = Rl(Ul), Gl = Ll(Ul), Kl = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs
function ql(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || Kl(e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/errors.mjs
var Jl = Tl, Yl = Tl;
process.env.NODE_ENV !== "production" && (Jl = (e, t) => {
	!e && typeof console < "u" && console.warn(t);
}, Yl = (e, t) => {
	if (!e) throw Error(t);
});
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs
var Xl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Zl = (e) => (t) => typeof t == "string" && t.startsWith(e), Ql = /*@__PURE__*/ Zl("--"), $l = /*@__PURE__*/ Zl("var(--"), eu = (e) => $l(e) ? tu.test(e.split("/*")[0].trim()) : !1, tu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, nu = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ru(e) {
	let t = nu.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var iu = 4;
function au(e, t, n = 1) {
	Yl(n <= iu, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
	let [r, i] = ru(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Xl(e) ? parseFloat(e) : e;
	}
	return eu(i) ? au(i, t, n + 1) : i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs
var ou = (e, t, n) => n > t ? t : n < e ? e : n, su = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, cu = {
	...su,
	transform: (e) => ou(0, 1, e)
}, lu = {
	...su,
	default: 1
}, uu = (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), du = /*@__PURE__*/ uu("deg"), fu = /*@__PURE__*/ uu("%"), X = /*@__PURE__*/ uu("px"), pu = /*@__PURE__*/ uu("vh"), mu = /*@__PURE__*/ uu("vw"), hu = {
	...fu,
	parse: (e) => fu.parse(e) / 100,
	transform: (e) => fu.transform(e * 100)
}, gu = new Set([
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
]), _u = (e) => e === su || e === X, vu = (e, t) => parseFloat(e.split(", ")[t]), yu = (e, t) => (n, { transform: r }) => {
	if (r === "none" || !r) return 0;
	let i = r.match(/^matrix3d\((.+)\)$/u);
	if (i) return vu(i[1], t);
	{
		let t = r.match(/^matrix\((.+)\)$/u);
		return t ? vu(t[1], e) : 0;
	}
}, bu = new Set([
	"x",
	"y",
	"z"
]), xu = dl.filter((e) => !bu.has(e));
function Su(e) {
	let t = [];
	return xu.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var Cu = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: yu(4, 13),
	y: yu(5, 14)
};
Cu.translateX = Cu.x, Cu.translateY = Cu.y;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs
var wu = (e) => (t) => t.test(e), Tu = [
	su,
	X,
	fu,
	du,
	mu,
	pu,
	{
		test: (e) => e === "auto",
		parse: (e) => e
	}
], Eu = (e) => Tu.find(wu(e)), Du = /* @__PURE__ */ new Set(), Ou = !1, ku = !1;
function Au() {
	if (ku) {
		let e = Array.from(Du).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = Su(e);
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
	ku = !1, Ou = !1, Du.forEach((e) => e.complete()), Du.clear();
}
function ju() {
	Du.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (ku = !0);
	});
}
function Mu() {
	ju(), Au();
}
var Nu = class {
	constructor(e, t, n, r, i, a = !1) {
		this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.isScheduled = !0, this.isAsync ? (Du.add(this), Ou || (Ou = !0, J.read(ju), J.resolveKeyframes(Au))) : (this.readKeyframes(), this.complete());
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
		this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Du.delete(this);
	}
	cancel() {
		this.isComplete || (this.isScheduled = !1, Du.delete(this));
	}
	resume() {
		this.isComplete || this.scheduleResolve();
	}
}, Pu = (e) => Math.round(e * 1e5) / 1e5, Fu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function Iu(e) {
	return e == null;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var Lu = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ru = (e, t) => (n) => !!(typeof n == "string" && Lu.test(n) && n.startsWith(e) || t && !Iu(n) && Object.prototype.hasOwnProperty.call(n, t)), zu = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Fu);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Bu = (e) => ou(0, 255, e), Vu = {
	...su,
	transform: (e) => Math.round(Bu(e))
}, Hu = {
	test: /*@__PURE__*/ Ru("rgb", "red"),
	parse: /*@__PURE__*/ zu("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Vu.transform(e) + ", " + Vu.transform(t) + ", " + Vu.transform(n) + ", " + Pu(cu.transform(r)) + ")"
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs
function Uu(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var Wu = {
	test: /*@__PURE__*/ Ru("#"),
	parse: Uu,
	transform: Hu.transform
}, Gu = {
	test: /*@__PURE__*/ Ru("hsl", "hue"),
	parse: /*@__PURE__*/ zu("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + fu.transform(Pu(t)) + ", " + fu.transform(Pu(n)) + ", " + Pu(cu.transform(r)) + ")"
}, Ku = {
	test: (e) => Hu.test(e) || Wu.test(e) || Gu.test(e),
	parse: (e) => Hu.test(e) ? Hu.parse(e) : Gu.test(e) ? Gu.parse(e) : Wu.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Hu.transform(e) : Gu.transform(e)
}, qu = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs
function Ju(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Fu)?.length || 0) + (e.match(qu)?.length || 0) > 0;
}
var Yu = "number", Xu = "color", Zu = "var", Qu = "var(", $u = "${}", ed = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function td(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(ed, (e) => (Ku.test(e) ? (r.color.push(a), i.push(Xu), n.push(Ku.parse(e))) : e.startsWith(Qu) ? (r.var.push(a), i.push(Zu), n.push(e)) : (r.number.push(a), i.push(Yu), n.push(parseFloat(e))), ++a, $u)).split($u),
		indexes: r,
		types: i
	};
}
function nd(e) {
	return td(e).values;
}
function rd(e) {
	let { split: t, types: n } = td(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			t === Yu ? i += Pu(e[a]) : t === Xu ? i += Ku.transform(e[a]) : i += e[a];
		}
		return i;
	};
}
var id = (e) => typeof e == "number" ? 0 : e;
function ad(e) {
	let t = nd(e);
	return rd(e)(t.map(id));
}
var od = {
	test: Ju,
	parse: nd,
	createTransformer: rd,
	getAnimatableNone: ad
}, sd = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function cd(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Fu) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!sd.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var ld = /\b([a-z-]*)\(.*?\)/gu, ud = {
	...od,
	getAnimatableNone: (e) => {
		let t = e.match(ld);
		return t ? t.map(cd).join(" ") : e;
	}
}, dd = {
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
}, fd = {
	rotate: du,
	rotateX: du,
	rotateY: du,
	rotateZ: du,
	scale: lu,
	scaleX: lu,
	scaleY: lu,
	scaleZ: lu,
	skew: du,
	skewX: du,
	skewY: du,
	distance: X,
	translateX: X,
	translateY: X,
	translateZ: X,
	x: X,
	y: X,
	z: X,
	perspective: X,
	transformPerspective: X,
	opacity: cu,
	originX: hu,
	originY: hu,
	originZ: X
}, pd = {
	...su,
	transform: Math.round
}, md = {
	...dd,
	...fd,
	zIndex: pd,
	size: X,
	fillOpacity: cu,
	strokeOpacity: cu,
	numOctaves: pd
}, hd = {
	...md,
	color: Ku,
	backgroundColor: Ku,
	outlineColor: Ku,
	fill: Ku,
	stroke: Ku,
	borderColor: Ku,
	borderTopColor: Ku,
	borderRightColor: Ku,
	borderBottomColor: Ku,
	borderLeftColor: Ku,
	filter: ud,
	WebkitFilter: ud
}, gd = (e) => hd[e];
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function _d(e, t) {
	let n = gd(e);
	return n !== ud && (n = od), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var vd = new Set([
	"auto",
	"none",
	"0"
]);
function yd(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !vd.has(t) && td(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = _d(n, i);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var bd = class extends Nu {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), eu(r))) {
				let i = au(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !gu.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Eu(r), o = Eu(i);
		if (a !== o) if (_u(a) && _u(o)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) ql(e[t]) && n.push(t);
		n.length && yd(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Cu[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = Cu[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs
function xd(e) {
	return typeof e == "function";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs
var Sd;
function Cd() {
	Sd = void 0;
}
var wd = {
	now: () => (Sd === void 0 && wd.set(Y.isProcessing || xl.useManualTiming ? Y.timestamp : performance.now()), Sd),
	set: (e) => {
		Sd = e, queueMicrotask(Cd);
	}
}, Td = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (od.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function Ed(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Dd(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Td(i, t), s = Td(a, t);
	return Jl(o === s, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`), !o || !s ? !1 : Ed(e) || (n === "spring" || xd(n)) && r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var Od = 40, kd = class {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", ...o }) {
		this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = wd.now(), this.options = {
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
		return this.resolvedAt && this.resolvedAt - this.createdAt > Od ? this.resolvedAt : this.createdAt;
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && Mu(), this._resolved;
	}
	onKeyframesResolved(e, t) {
		this.resolvedAt = wd.now(), this.hasAttemptedResolve = !0;
		let { name: n, type: r, velocity: i, delay: a, onComplete: o, onUpdate: s, isGenerator: c } = this.options;
		if (!c && !Dd(e, n, r, i)) if (Sl.current || !a) {
			s?.(wl(e, this.options, t)), o?.(), this.resolveFinishedPromise();
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
function Ad(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var jd = 5;
function Md(e, t, n) {
	let r = Math.max(t - jd, 0);
	return Ad(n - e(r), t - r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs
var Nd = .001, Pd = .01, Fd = .05;
function Id({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
	let i, a;
	Jl(e <= pl(10), "Spring duration must be 10 seconds or less");
	let o = 1 - t;
	o = ou(Fd, 1, o), e = ou(Pd, 10, ml(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = zd(t, o), c = Math.exp(-i);
		return Nd - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = zd(t ** 2, o);
		return (-i(t) + Nd > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Rd(i, a, s);
	if (e = pl(e), isNaN(c)) return {
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
var Ld = 12;
function Rd(e, t, n) {
	let r = n;
	for (let n = 1; n < Ld; n++) r -= e(r) / t(r);
	return r;
}
function zd(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs
var Bd = ["duration", "bounce"], Vd = [
	"stiffness",
	"damping",
	"mass"
];
function Hd(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Ud(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e
	};
	if (!Hd(e, Vd) && Hd(e, Bd)) {
		let n = Id(e);
		t = {
			...t,
			...n,
			mass: 1
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function Wd({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	let i = e[0], a = e[e.length - 1], o = {
		done: !1,
		value: i
	}, { stiffness: s, damping: c, mass: l, duration: u, velocity: d, isResolvedFromDuration: f } = Ud({
		...r,
		velocity: -ml(r.velocity || 0)
	}), p = d || 0, m = c / (2 * Math.sqrt(s * l)), h = a - i, g = ml(Math.sqrt(s / l)), _ = Math.abs(h) < 5;
	n ||= _ ? .01 : 2, t ||= _ ? .005 : .5;
	let v;
	if (m < 1) {
		let e = zd(g, m);
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
				m < 1 && (i = e === 0 ? pl(p) : Md(v, e, r));
				let s = Math.abs(i) <= n, c = Math.abs(a - r) <= t;
				o.done = s && c;
			}
			return o.value = o.done ? a : r, o;
		}
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs
function Gd({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = Wd({
			keyframes: [f.value, m(f.value)],
			velocity: Md(y, e, f.value),
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
var Kd = /*@__PURE__*/ Il(.42, 0, 1, 1), qd = /*@__PURE__*/ Il(0, 0, .58, 1), Jd = /*@__PURE__*/ Il(.42, 0, .58, 1), Yd = (e) => Array.isArray(e) && typeof e[0] != "number", Xd = (e) => Array.isArray(e) && typeof e[0] == "number", Zd = {
	linear: Tl,
	easeIn: Kd,
	easeInOut: Jd,
	easeOut: qd,
	circIn: Ul,
	circInOut: Gl,
	circOut: Wl,
	backIn: Bl,
	backInOut: Vl,
	backOut: zl,
	anticipate: Hl
}, Qd = (e) => {
	if (Xd(e)) {
		Yl(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [t, n, r, i] = e;
		return Il(t, n, r, i);
	} else if (typeof e == "string") return Yl(Zd[e] !== void 0, `Invalid easing type '${e}'`), Zd[e];
	return e;
}, $d = (e, t) => (n) => t(e(n)), ef = (...e) => e.reduce($d), tf = (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Z = (e, t, n) => e + (t - e) * n;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function nf(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function rf({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = nf(s, r, e + 1 / 3), a = nf(s, r, e), o = nf(s, r, e - 1 / 3);
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
function af(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs
var of = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, sf = [
	Wu,
	Hu,
	Gu
], cf = (e) => sf.find((t) => t.test(e));
function lf(e) {
	let t = cf(e);
	if (Jl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
	let n = t.parse(e);
	return t === Gu && (n = rf(n)), n;
}
var uf = (e, t) => {
	let n = lf(e), r = lf(t);
	if (!n || !r) return af(e, t);
	let i = { ...n };
	return (e) => (i.red = of(n.red, r.red, e), i.green = of(n.green, r.green, e), i.blue = of(n.blue, r.blue, e), i.alpha = Z(n.alpha, r.alpha, e), Hu.transform(i));
}, df = new Set(["none", "hidden"]);
function ff(e, t) {
	return df.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs
function pf(e, t) {
	return (n) => Z(e, t, n);
}
function mf(e) {
	return typeof e == "number" ? pf : typeof e == "string" ? eu(e) ? af : Ku.test(e) ? uf : vf : Array.isArray(e) ? hf : typeof e == "object" ? Ku.test(e) ? uf : gf : af;
}
function hf(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => mf(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function gf(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = mf(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function _f(e, t) {
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
var vf = (e, t) => {
	let n = od.createTransformer(t), r = td(e), i = td(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? df.has(e) && !i.values.length || df.has(t) && !r.values.length ? ff(e, t) : ef(hf(_f(r, i), i.values), n) : (Jl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), af(e, t));
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs
function yf(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Z(e, t, n) : mf(e)(e, t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs
function bf(e, t, n) {
	let r = [], i = n || yf, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = ef(Array.isArray(t) ? t[n] || Tl : t, a)), r.push(a);
	}
	return r;
}
function xf(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (Yl(a === t.length, "Both input and output ranges must be the same length"), a === 1) return () => t[0];
	if (a === 2 && e[0] === e[1]) return () => t[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let o = bf(t, r, i), s = o.length, c = (t) => {
		let n = 0;
		if (s > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
		let r = tf(e[n], e[n + 1], t);
		return o[n](r);
	};
	return n ? (t) => c(ou(e[0], e[a - 1], t)) : c;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs
function Sf(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = tf(0, t, r);
		e.push(Z(n, 1, i));
	}
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs
function Cf(e) {
	let t = [0];
	return Sf(t, e.length - 1), t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs
function wf(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs
function Tf(e, t) {
	return e.map(() => t || Jd).splice(0, e.length - 1);
}
function Ef({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = Yd(r) ? r.map(Qd) : Qd(r), a = {
		done: !1,
		value: t[0]
	}, o = xf(wf(n && n.length === t.length ? n : Cf(t), e), t, { ease: Array.isArray(i) ? i : Tf(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
function Df(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var Of = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: () => J.update(t, !0),
		stop: () => Al(t),
		now: () => Y.isProcessing ? Y.timestamp : wd.now()
	};
}, kf = {
	decay: Gd,
	inertia: Gd,
	tween: Ef,
	keyframes: Ef,
	spring: Wd
}, Af = (e) => e / 100, jf = class extends kd {
	constructor(e) {
		super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
			if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle") return;
			this.teardown();
			let { onStop: e } = this.options;
			e && e();
		};
		let { name: t, motionValue: n, element: r, keyframes: i } = this.options, a = r?.KeyframeResolver || Nu, o = (e, t) => this.onKeyframesResolved(e, t);
		this.resolver = new a(i, o, t, n, r), this.resolver.scheduleResolve();
	}
	initPlayback(e) {
		let { type: t = "keyframes", repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = this.options, o = xd(t) ? t : kf[t] || Ef, s, c;
		o !== Ef && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && Yl(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), s = ef(Af, yf(e[0], e[1])), e = [0, 100]);
		let l = o({
			...this.options,
			keyframes: e
		});
		i === "mirror" && (c = o({
			...this.options,
			keyframes: [...e].reverse(),
			velocity: -a
		})), l.calculatedDuration === null && (l.calculatedDuration = Df(l));
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
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, f + 1), t % 2 && (p === "reverse" ? (n = 1 - n, m && (n -= m / u)) : p === "mirror" && (y = a)), v = ou(0, 1, n) * u;
		}
		let b = _ ? {
			done: !1,
			value: s[0]
		} : y.next(v);
		o && (b.value = o(b.value));
		let { done: x } = b;
		!_ && c !== null && (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && r !== void 0 && (b.value = wl(s, this.options, r)), h && h(b.value), S && this.finish(), b;
	}
	get duration() {
		let { resolved: e } = this;
		return e ? ml(e.calculatedDuration) : 0;
	}
	get time() {
		return ml(this.currentTime);
	}
	set time(e) {
		e = pl(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		this.playbackSpeed = e, t && (this.time = ml(this.currentTime));
	}
	play() {
		if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
			this.pendingPlayState = "running";
			return;
		}
		if (this.isStopped) return;
		let { driver: e = Of, onPlay: t, startTime: n } = this.options;
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
}, Mf = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Nf = 10, Pf = (e, t) => {
	let n = "", r = Math.max(Math.round(t / Nf), 2);
	for (let t = 0; t < r; t++) n += e(tf(0, r - 1, t)) + ", ";
	return `linear(${n.substring(0, n.length - 2)})`;
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs
function Ff(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs
var If = { linearEasing: void 0 };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs
function Lf(e, t) {
	let n = Ff(e);
	return () => If[t] ?? n();
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs
var Rf = /*@__PURE__*/ Lf(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing");
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function zf(e) {
	return !!(typeof e == "function" && Rf() || !e || typeof e == "string" && (e in Vf || Rf()) || Xd(e) || Array.isArray(e) && e.every(zf));
}
var Bf = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Vf = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Bf([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Bf([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Bf([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Bf([
		.33,
		1.53,
		.69,
		.99
	])
};
function Hf(e, t) {
	if (e) return typeof e == "function" && Rf() ? Pf(e, t) : Xd(e) ? Bf(e) : Array.isArray(e) ? e.map((e) => Hf(e, t) || Vf.easeOut) : Vf[e];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs
function Uf(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeInOut", times: c } = {}) {
	let l = { [t]: n };
	c && (l.offset = c);
	let u = Hf(s, i);
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
function Wf(e, t) {
	e.timeline = t, e.onfinish = null;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var Gf = /*@__PURE__*/ Ff(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Kf = 10, qf = 2e4;
function Jf(e) {
	return xd(e.type) || e.type === "spring" || !zf(e.ease);
}
function Yf(e, t) {
	let n = new jf({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0
	}), r = {
		done: !1,
		value: e[0]
	}, i = [], a = 0;
	for (; !r.done && a < qf;) r = n.sample(a), i.push(r.value), a += Kf;
	return {
		times: void 0,
		keyframes: i,
		duration: a - Kf,
		ease: "linear"
	};
}
var Xf = {
	anticipate: Hl,
	backInOut: Vl,
	circInOut: Gl
};
function Zf(e) {
	return e in Xf;
}
var Qf = class extends kd {
	constructor(e) {
		super(e);
		let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
		this.resolver = new bd(i, (e, t) => this.onKeyframesResolved(e, t), t, n, r), this.resolver.scheduleResolve();
	}
	initPlayback(e, t) {
		let { duration: n = 300, times: r, ease: i, type: a, motionValue: o, name: s, startTime: c } = this.options;
		if (!o.owner?.current) return !1;
		if (typeof i == "string" && Rf() && Zf(i) && (i = Xf[i]), Jf(this.options)) {
			let { onComplete: t, onUpdate: o, motionValue: s, element: c, ...l } = this.options, u = Yf(e, l);
			e = u.keyframes, e.length === 1 && (e[1] = e[0]), n = u.duration, r = u.times, i = u.ease, a = "keyframes";
		}
		let l = Uf(o.owner.current, s, e, {
			...this.options,
			duration: n,
			times: r,
			ease: i
		});
		return l.startTime = c ?? this.calcStartTime(), this.pendingTimeline ? (Wf(l, this.pendingTimeline), this.pendingTimeline = void 0) : l.onfinish = () => {
			let { onComplete: n } = this.options;
			o.set(wl(e, this.options, t)), n && n(), this.cancel(), this.resolveFinishedPromise();
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
		return ml(t);
	}
	get time() {
		let { resolved: e } = this;
		if (!e) return 0;
		let { animation: t } = e;
		return ml(t.currentTime || 0);
	}
	set time(e) {
		let { resolved: t } = this;
		if (!t) return;
		let { animation: n } = t;
		n.currentTime = pl(e);
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
			if (!t) return Tl;
			let { animation: n } = t;
			Wf(n, e);
		}
		return Tl;
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
			let { motionValue: e, onUpdate: t, onComplete: s, element: c, ...l } = this.options, u = new jf({
				...l,
				keyframes: n,
				duration: r,
				type: i,
				ease: a,
				times: o,
				isGenerator: !0
			}), d = pl(this.time);
			e.setWithVelocity(u.sample(d - Kf).value, u.sample(d).value, Kf);
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
		return Gf() && n && Mf.has(n) && t && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate && !r && i !== "mirror" && a !== 0 && o !== "inertia";
	}
}, $f = Ff(() => window.ScrollTimeline !== void 0), ep = class {
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
		let n = this.animations.map((n) => $f() && n.attachTimeline ? n.attachTimeline(e) : t(n));
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
function tp({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: s, from: c, elapsed: l, ...u }) {
	return !!Object.keys(u).length;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var np = (e, t, n, r = {}, i, a) => (o) => {
	let s = bl(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= pl(c);
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
	tp(s) || (u = {
		...u,
		...yl(e, u)
	}), u.duration &&= pl(u.duration), u.repeatDelay &&= pl(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), (Sl.current || xl.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), d && !a && t.get() !== void 0) {
		let e = wl(u.keyframes, s);
		if (e !== void 0) return J.update(() => {
			u.onUpdate(e), u.onComplete();
		}), new ep([]);
	}
	return !a && Qf.supports(u) ? new Qf(u) : new jf(u);
}, rp = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), ip = (e) => rl(e) ? e[e.length - 1] || 0 : e;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs
function ap(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function op(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs
var sp = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return ap(this.subscriptions, e), () => op(this.subscriptions, e);
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
}, cp = 30, lp = (e) => !isNaN(parseFloat(e)), up = { current: void 0 }, dp = class {
	constructor(e, t = {}) {
		this.version = "11.11.13", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
			let n = wd.now();
			this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), t && this.events.renderRequest && this.events.renderRequest.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = wd.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = lp(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && el(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new sp());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), J.read(() => {
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
		return up.current && up.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = wd.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > cp) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, cp);
		return Ad(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
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
function fp(e, t) {
	return new dp(e, t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs
function pp(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fp(n));
}
function mp(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = cl(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) pp(e, t, ip(i[t]));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var hp = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), gp = "data-" + hp("framerAppearId");
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function _p(e) {
	return e.props[gp];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs
var vp = (e) => !!(e && e.getVelocity);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs
function yp(e) {
	return !!(vp(e) && e.add);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function bp(e, t) {
	let n = e.getValue("willChange");
	if (yp(n)) return n.add(t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function xp({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Sp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
	r && (a = r);
	let c = [], l = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || l && xp(l, t)) continue;
		let o = {
			delay: n,
			...bl(a || {}, t)
		}, u = !1;
		if (window.MotionHandoffAnimation) {
			let n = _p(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, J);
				e !== null && (o.startTime = e, u = !0);
			}
		}
		bp(e, t), r.start(np(t, r, i, e.shouldReduceMotion && fl.has(t) ? { type: !1 } : o, e, u));
		let d = r.animation;
		d && c.push(d);
	}
	return o && Promise.all(c).then(() => {
		J.update(() => {
			o && mp(e, o);
		});
	}), c;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function Cp(e, t, n = {}) {
	let r = cl(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Sp(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return wp(e, t, a + r, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function wp(e, t, n = 0, r = 0, i = 1, a) {
	let o = [], s = (e.variantChildren.size - 1) * r, c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
	return Array.from(e.variantChildren).sort(Tp).forEach((e, r) => {
		e.notify("AnimationStart", t), o.push(Cp(e, t, {
			...a,
			delay: n + c(r)
		}).then(() => e.notify("AnimationComplete", t)));
	}), Promise.all(o);
}
function Tp(e, t) {
	return e.sortNodePosition(t);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function Ep(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Cp(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Cp(e, t, n);
	else {
		let i = typeof t == "function" ? cl(e, t, n.custom) : t;
		r = Promise.all(Sp(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/get-variant-context.mjs
var Dp = ul.length;
function Op(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Op(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Dp; n++) {
		let r = ul[n], i = e.props[r];
		(al(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/animation-state.mjs
var kp = [...ll].reverse(), Ap = ll.length;
function jp(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Ep(e, t, n)));
}
function Mp(e) {
	let t = jp(e), n = Fp(), r = !0, i = (t) => (n, r) => {
		let i = cl(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
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
		let { props: o } = e, s = Op(e.parent) || {}, c = [], l = /* @__PURE__ */ new Set(), u = {}, d = Infinity;
		for (let t = 0; t < Ap; t++) {
			let f = kp[t], p = n[f], m = o[f] === void 0 ? s[f] : o[f], h = al(m), g = f === a ? p.isActive : null;
			g === !1 && (d = t);
			let _ = m === s[f] && m !== o[f] && h;
			if (_ && r && e.manuallyAnimateOnMount && (_ = !1), p.protectedKeys = { ...u }, !p.isActive && g === null || !m && !p.prevProp || nl(m) || typeof m == "boolean") continue;
			let v = Np(p.prevProp, m), y = v || f === a && p.isActive && !_ && h || t > d && h, b = !1, x = Array.isArray(m) ? m : [m], S = x.reduce(i(f), {});
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
				r = rl(t) && rl(n) ? !il(t, n) : t !== n, r ? t == null ? l.add(e) : T(e) : t !== void 0 && l.has(e) ? T(e) : p.protectedKeys[e] = !0;
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
			n = Fp(), r = !0;
		}
	};
}
function Np(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !il(t, e) : !1;
}
function Pp(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function Fp() {
	return {
		animate: Pp(!0),
		whileInView: Pp(),
		whileHover: Pp(),
		whileTap: Pp(),
		whileDrag: Pp(),
		whileFocus: Pp(),
		exit: Pp()
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/Feature.mjs
var Ip = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, Lp = class extends Ip {
	constructor(e) {
		super(e), e.animationState ||= Mp(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		nl(e) && (this.unmountControls = e.subscribe(this.node));
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
}, Rp = 0, zp = {
	animation: { Feature: Lp },
	exit: { Feature: class extends Ip {
		constructor() {
			super(...arguments), this.id = Rp++;
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
}, Bp = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/event-info.mjs
function Vp(e, t = "page") {
	return { point: {
		x: e[`${t}X`],
		y: e[`${t}Y`]
	} };
}
var Hp = (e) => (t) => Bp(t) && e(t, Vp(t));
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/add-dom-event.mjs
function Up(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/add-pointer-event.mjs
function Wp(e, t, n, r) {
	return Up(e, t, Hp(n), r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/distance.mjs
var Gp = (e, t) => Math.abs(e - t);
function Kp(e, t) {
	let n = Gp(e.x, t.x), r = Gp(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/pan/PanSession.mjs
var qp = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let e = Xp(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Kp(e.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = Y;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastMoveEventInfo = Jp(t, this.transformPagePoint), J.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Xp(e.type === "pointercancel" ? this.lastMoveEventInfo : Jp(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !Bp(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window;
		let a = Jp(Vp(e), this.transformPagePoint), { point: o } = a, { timestamp: s } = Y;
		this.history = [{
			...o,
			timestamp: s
		}];
		let { onSessionStart: c } = t;
		c && c(e, Xp(a, this.history)), this.removeListeners = ef(Wp(this.contextWindow, "pointermove", this.handlePointerMove), Wp(this.contextWindow, "pointerup", this.handlePointerUp), Wp(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), Al(this.updatePoint);
	}
};
function Jp(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Yp(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Xp({ point: e }, t) {
	return {
		point: e,
		delta: Yp(e, Qp(t)),
		offset: Yp(e, Zp(t)),
		velocity: $p(t, .1)
	};
}
function Zp(e) {
	return e[0];
}
function Qp(e) {
	return e[e.length - 1];
}
function $p(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = Qp(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > pl(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	let a = ml(i.timestamp - r.timestamp);
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
function em(e) {
	let t = null;
	return () => t === null ? (t = e, () => {
		t = null;
	}) : !1;
}
var tm = em("dragHorizontal"), nm = em("dragVertical");
function rm(e) {
	let t = !1;
	if (e === "y") t = nm();
	else if (e === "x") t = tm();
	else {
		let e = tm(), n = nm();
		e && n ? t = () => {
			e(), n();
		} : (e && e(), n && n());
	}
	return t;
}
function im() {
	let e = rm(!0);
	return e ? (e(), !1) : !0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/is-ref-object.mjs
function am(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var om = .9999, sm = 1.0001, cm = -.01, lm = .01;
function um(e) {
	return e.max - e.min;
}
function dm(e, t, n) {
	return Math.abs(e - t) <= n;
}
function fm(e, t, n, r = .5) {
	e.origin = r, e.originPoint = Z(t.min, t.max, e.origin), e.scale = um(n) / um(t), e.translate = Z(n.min, n.max, e.origin) - e.originPoint, (e.scale >= om && e.scale <= sm || isNaN(e.scale)) && (e.scale = 1), (e.translate >= cm && e.translate <= lm || isNaN(e.translate)) && (e.translate = 0);
}
function pm(e, t, n, r) {
	fm(e.x, t.x, n.x, r ? r.originX : void 0), fm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function mm(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + um(t);
}
function hm(e, t, n) {
	mm(e.x, t.x, n.x), mm(e.y, t.y, n.y);
}
function gm(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + um(t);
}
function _m(e, t, n) {
	gm(e.x, t.x, n.x), gm(e.y, t.y, n.y);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function vm(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? Z(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)), e;
}
function ym(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function bm(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: ym(e.x, n, i),
		y: ym(e.y, t, r)
	};
}
function xm(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function Sm(e, t) {
	return {
		x: xm(e.x, t.x),
		y: xm(e.y, t.y)
	};
}
function Cm(e, t) {
	let n = .5, r = um(e), i = um(t);
	return i > r ? n = tf(t.min, t.max - r, e.min) : r > i && (n = tf(e.min, e.max - i, t.min)), ou(0, 1, n);
}
function wm(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Tm = .35;
function Em(e = Tm) {
	return e === !1 ? e = 0 : e === !0 && (e = Tm), {
		x: Dm(e, "left", "right"),
		y: Dm(e, "top", "bottom")
	};
}
function Dm(e, t, n) {
	return {
		min: Om(e, t),
		max: Om(e, n)
	};
}
function Om(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs
var km = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Am = () => ({
	x: km(),
	y: km()
}), jm = () => ({
	min: 0,
	max: 0
}), Q = () => ({
	x: jm(),
	y: jm()
});
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/each-axis.mjs
function Mm(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs
function Nm({ top: e, left: t, right: n, bottom: r }) {
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
function Pm({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function Fm(e, t) {
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
function Im(e) {
	return e === void 0 || e === 1;
}
function Lm({ scale: e, scaleX: t, scaleY: n }) {
	return !Im(e) || !Im(t) || !Im(n);
}
function Rm(e) {
	return Lm(e) || zm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function zm(e) {
	return Bm(e.x) || Bm(e.y);
}
function Bm(e) {
	return e && e !== "0%";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function Vm(e, t, n) {
	return n + t * (e - n);
}
function Hm(e, t, n, r, i) {
	return i !== void 0 && (e = Vm(e, i, r)), Vm(e, n, r) + t;
}
function Um(e, t = 0, n = 1, r, i) {
	e.min = Hm(e.min, t, n, r, i), e.max = Hm(e.max, t, n, r, i);
}
function Wm(e, { x: t, y: n }) {
	Um(e.x, t.translate, t.scale, t.originPoint), Um(e.y, n.translate, n.scale, n.originPoint);
}
var Gm = .999999999999, Km = 1.0000000000001;
function qm(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && Xm(e, {
			x: -a.scroll.offset.x,
			y: -a.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, Wm(e, o)), r && Rm(a.latestValues) && Xm(e, a.latestValues));
	}
	t.x < Km && t.x > Gm && (t.x = 1), t.y < Km && t.y > Gm && (t.y = 1);
}
function Jm(e, t) {
	e.min += t, e.max += t;
}
function Ym(e, t, n, r, i = .5) {
	Um(e, t, n, Z(e.min, e.max, i), r);
}
function Xm(e, t) {
	Ym(e.x, t.x, t.scaleX, t.scale, t.originX), Ym(e.y, t.y, t.scaleY, t.scale, t.originY);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs
function Zm(e, t) {
	return Nm(Fm(e.getBoundingClientRect(), t));
}
function Qm(e, t, n) {
	let r = Zm(e, n), { scroll: i } = t;
	return i && (Jm(r.x, i.offset.x), Jm(r.y, i.offset.y)), r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/get-context-window.mjs
var $m = ({ current: e }) => e ? e.ownerDocument.defaultView : null, eh = /* @__PURE__ */ new WeakMap(), th = class {
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
			n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(Vp(e, "page").point);
		}, i = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = rm(n), !this.openGlobalLock)) return;
			this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Mm((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (fu.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = um(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && J.postRender(() => i(e, t)), bp(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, a = (e, t) => {
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openGlobalLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = rh(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && a(e, t);
		}, o = (e, t) => this.stop(e, t), s = () => Mm((e) => this.getAnimationState(e) === "paused" && this.getAxisMotionValue(e).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
		this.panSession = new qp(e, {
			onSessionStart: r,
			onStart: i,
			onMove: a,
			onSessionEnd: o,
			resumeAnimation: s
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: c,
			contextWindow: $m(this.visualElement)
		});
	}
	stop(e, t) {
		let n = this.isDragging;
		if (this.cancel(), !n) return;
		let { velocity: r } = t;
		this.startAnimation(r);
		let { onDragEnd: i } = this.getProps();
		i && J.postRender(() => i(e, t));
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
		if (!n || !nh(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = vm(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && am(e) ? this.constraints ||= this.resolveRefConstraints() : e && n ? this.constraints = bm(n.layoutBox, e) : this.constraints = !1, this.elastic = Em(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Mm((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = wm(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !am(e)) return !1;
		let n = e.current;
		Yl(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Qm(n, r.root, this.visualElement.getTransformPagePoint()), a = Sm(r.layout.layoutBox, i);
		if (t) {
			let e = t(Pm(a));
			this.hasMutatedConstraints = !!e, e && (a = Nm(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Mm((o) => {
			if (!nh(o, t, this.currentDirection)) return;
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
		return bp(this.visualElement, e), n.start(np(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Mm((e) => this.getAxisMotionValue(e).stop());
	}
	pauseAnimation() {
		Mm((e) => this.getAxisMotionValue(e).animation?.pause());
	}
	getAnimationState(e) {
		return this.getAxisMotionValue(e).animation?.state;
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		Mm((t) => {
			let { drag: n } = this.getProps();
			if (!nh(t, n, this.currentDirection)) return;
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
		if (!am(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Mm((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = Cm({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Mm((t) => {
			if (!nh(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(Z(i, a, r[t]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		eh.set(this.visualElement, this);
		let e = this.visualElement.current, t = Wp(e, "pointerdown", (e) => {
			let { drag: t, dragListener: n = !0 } = this.getProps();
			t && n && this.start(e);
		}), n = () => {
			let { dragConstraints: e } = this.getProps();
			am(e) && e.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: r } = this.visualElement, i = r.addEventListener("measure", n);
		r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), J.read(n);
		let a = Up(window, "resize", () => this.scalePositionWithinConstraints()), o = r.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Mm((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			a(), t(), i(), o && o();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = Tm, dragMomentum: o = !0 } = e;
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
function nh(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function rh(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/index.mjs
var ih = class extends Ip {
	constructor(e) {
		super(e), this.removeGroupControls = Tl, this.removeListeners = Tl, this.controls = new th(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Tl;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, ah = (e) => (t, n) => {
	e && J.postRender(() => e(t, n));
}, oh = class extends Ip {
	constructor() {
		super(...arguments), this.removePointerDownListener = Tl;
	}
	onPointerDown(e) {
		this.session = new qp(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: $m(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: ah(e),
			onStart: ah(t),
			onMove: n,
			onEnd: (e, t) => {
				delete this.session, r && J.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = Wp(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, sh = v(null);
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function ch() {
	let e = C(sh);
	if (e === null) return [!0, null];
	let { isPresent: t, onExitComplete: n, register: r } = e, i = T();
	w(() => r(i), []);
	let a = S(() => n && n(i), [i, n]);
	return !t && n ? [!1, a] : [!0];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/LayoutGroupContext.mjs
var lh = v({}), uh = v({}), dh = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function fh(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var ph = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if (X.test(e)) e = parseFloat(e);
	else return e;
	return `${fh(e, t.target.x)}% ${fh(e, t.target.y)}%`;
} }, mh = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = od.parse(e);
	if (i.length > 5) return r;
	let a = od.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = Z(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, hh = {};
function gh(e) {
	Object.assign(hh, e);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/microtask.mjs
var { schedule: _h, cancel: vh } = kl(queueMicrotask, !1), yh = class extends g {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		gh(xh), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			onExitComplete: () => this.safeToRemove()
		})), dh.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, a = n.projection;
		return a ? (a.isPresent = i, r || e.layoutDependency !== t || t === void 0 ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || J.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: e } = this.props.visualElement;
		e && (e.root.didUpdate(), _h.postRender(() => {
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
function bh(e) {
	let [t, n] = ch(), r = C(lh);
	return j(yh, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: C(uh),
		isPresent: t,
		safeToRemove: n
	});
}
var xh = {
	borderRadius: {
		...ph,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: ph,
	borderTopRightRadius: ph,
	borderBottomLeftRadius: ph,
	borderBottomRightRadius: ph,
	boxShadow: mh
}, Sh = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], Ch = Sh.length, wh = (e) => typeof e == "string" ? parseFloat(e) : e, Th = (e) => typeof e == "number" || X.test(e);
function Eh(e, t, n, r, i, a) {
	i ? (e.opacity = Z(0, n.opacity === void 0 ? 1 : n.opacity, Oh(r)), e.opacityExit = Z(t.opacity === void 0 ? 1 : t.opacity, 0, kh(r))) : a && (e.opacity = Z(t.opacity === void 0 ? 1 : t.opacity, n.opacity === void 0 ? 1 : n.opacity, r));
	for (let i = 0; i < Ch; i++) {
		let a = `border${Sh[i]}Radius`, o = Dh(t, a), s = Dh(n, a);
		o === void 0 && s === void 0 || (o ||= 0, s ||= 0, o === 0 || s === 0 || Th(o) === Th(s) ? (e[a] = Math.max(Z(wh(o), wh(s), r), 0), (fu.test(s) || fu.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function Dh(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Oh = /*@__PURE__*/ Ah(0, .5, Wl), kh = /*@__PURE__*/ Ah(.5, .95, Tl);
function Ah(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(tf(e, t, r));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/copy.mjs
function jh(e, t) {
	e.min = t.min, e.max = t.max;
}
function Mh(e, t) {
	jh(e.x, t.x), jh(e.y, t.y);
}
function Nh(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function Ph(e, t, n, r, i) {
	return e -= t, e = Vm(e, 1 / n, r), i !== void 0 && (e = Vm(e, 1 / i, r)), e;
}
function Fh(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (fu.test(t) && (t = parseFloat(t), t = Z(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = Z(a.min, a.max, r);
	e === a && (s -= t), e.min = Ph(e.min, t, n, s, i), e.max = Ph(e.max, t, n, s, i);
}
function Ih(e, t, [n, r, i], a, o) {
	Fh(e, t[n], t[r], t[i], t.scale, a, o);
}
var Lh = [
	"x",
	"scaleX",
	"originX"
], Rh = [
	"y",
	"scaleY",
	"originY"
];
function zh(e, t, n, r) {
	Ih(e.x, t, Lh, n ? n.x : void 0, r ? r.x : void 0), Ih(e.y, t, Rh, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/utils.mjs
function Bh(e) {
	return e.translate === 0 && e.scale === 1;
}
function Vh(e) {
	return Bh(e.x) && Bh(e.y);
}
function Hh(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Uh(e, t) {
	return Hh(e.x, t.x) && Hh(e.y, t.y);
}
function Wh(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Gh(e, t) {
	return Wh(e.x, t.x) && Wh(e.y, t.y);
}
function Kh(e) {
	return um(e.x) / um(e.y);
}
function qh(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/shared/stack.mjs
var Jh = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		ap(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if (op(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function Yh(e, t, n) {
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
var Xh = (e, t) => e.depth - t.depth, Zh = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		ap(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		op(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Xh), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function Qh(e) {
	let t = vp(e) ? e.get() : e;
	return rp(t) ? t.toValue() : t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/delay.mjs
function $h(e, t) {
	let n = wd.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (Al(r), e(a - t));
	};
	return J.read(r, !0), () => Al(r);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function eg(e) {
	return e instanceof SVGElement && e.tagName !== "svg";
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs
function tg(e, t, n) {
	let r = vp(e) ? e : fp(e);
	return r.start(np("", r, t, n)), r.animation;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/node/create-projection-node.mjs
var ng = {
	type: "projectionFrame",
	totalNodes: 0,
	resolvedTargetDeltas: 0,
	recalculatedProjection: 0
}, rg = typeof window < "u" && window.MotionDebug !== void 0, ig = [
	"",
	"X",
	"Y",
	"Z"
], ag = { visibility: "hidden" }, og = 1e3, sg = 0;
function cg(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function lg(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = _p(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", J, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && lg(r);
}
function ug({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = sg++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, rg && (ng.totalNodes = ng.resolvedTargetDeltas = ng.recalculatedProjection = 0), this.nodes.forEach(pg), this.nodes.forEach(bg), this.nodes.forEach(xg), this.nodes.forEach(mg), rg && window.MotionDebug.record(ng);
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Zh());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new sp()), this.eventHandlers.get(e).add(t);
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
			this.isSVG = eg(t), this.instance = t;
			let { layoutId: r, layout: i, visualElement: a } = this.options;
			if (a && !a.current && a.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (i || r) && (this.isLayoutDirty = !0), e) {
				let n, r = () => this.root.updateBlockedByResize = !1;
				e(t, () => {
					this.root.updateBlockedByResize = !0, n && n(), n = $h(r, 250), dh.hasAnimatedSinceResize && (dh.hasAnimatedSinceResize = !1, this.nodes.forEach(yg));
				});
			}
			r && this.root.registerSharedNode(r, this), this.options.animate !== !1 && a && (r || i) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeTargetChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let i = this.options.transition || a.getDefaultTransition() || Og, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = a.getProps(), c = !this.targetLayout || !Gh(this.targetLayout, r) || n, l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(e, l);
					let t = {
						...bl(i, "layout"),
						onPlay: o,
						onComplete: s
					};
					(a.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t);
				} else t || yg(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, Al(this.updateProjection);
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
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Sg), this.animationId++);
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
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && lg(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(gg);
				return;
			}
			this.isUpdating || this.nodes.forEach(_g), this.isUpdating = !1, this.nodes.forEach(vg), this.nodes.forEach(dg), this.nodes.forEach(fg), this.clearAllSnapshots();
			let e = wd.now();
			Y.delta = ou(0, 1e3 / 60, e - Y.timestamp), Y.timestamp = e, Y.isProcessing = !0, jl.update.process(Y), jl.preRender.process(Y), jl.render.process(Y), Y.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, _h.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(hg), this.sharedNodes.forEach(Cg);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, J.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			J.postRender(() => {
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
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !Vh(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && (t || Rm(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Mg(n), {
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
			if (!(this.scroll?.wasRoot || this.path.some(Pg))) {
				let { scroll: e } = this.root;
				e && (Jm(t.x, e.offset.x), Jm(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = Q();
			if (Mh(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && Mh(t, e), Jm(t.x, i.offset.x), Jm(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1) {
			let n = Q();
			Mh(n, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && Xm(n, {
					x: -r.scroll.offset.x,
					y: -r.scroll.offset.y
				}), Rm(r.latestValues) && Xm(n, r.latestValues);
			}
			return Rm(this.latestValues) && Xm(n, this.latestValues), n;
		}
		removeTransform(e) {
			let t = Q();
			Mh(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!n.instance || !Rm(n.latestValues)) continue;
				Lm(n.latestValues) && n.updateSnapshot();
				let r = Q();
				Mh(r, n.measurePageBox()), zh(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
			}
			return Rm(this.latestValues) && zh(t, this.latestValues), t;
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
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Y.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!(!this.layout || !(r || i))) {
				if (this.resolvedRelativeTargetAt = Y.timestamp, !this.targetDelta && !this.relativeTarget) {
					let e = this.getClosestProjectingParent();
					e && e.layout && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Q(), this.relativeTargetOrigin = Q(), _m(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Mh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = Q(), this.targetWithTransforms = Q()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), hm(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Mh(this.target, this.layout.layoutBox), Wm(this.target, this.targetDelta)) : Mh(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						let e = this.getClosestProjectingParent();
						e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Q(), this.relativeTargetOrigin = Q(), _m(this.relativeTargetOrigin, this.target, e.target), Mh(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
					}
					rg && ng.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Lm(this.parent.latestValues) || zm(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === Y.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			Mh(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			qm(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = Q());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Nh(this.prevProjectionDelta.x, this.projectionDelta.x), Nh(this.prevProjectionDelta.y, this.projectionDelta.y)), pm(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !qh(this.projectionDelta.x, this.prevProjectionDelta.x) || !qh(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), rg && ng.recalculatedProjection++;
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
			this.prevProjectionDelta = Am(), this.projectionDelta = Am(), this.projectionDeltaWithTransform = Am();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = Am();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = Q(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Dg));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				wg(a.x, e.x, n), wg(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_m(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Eg(this.relativeTarget, this.relativeTargetOrigin, o, n), d && Uh(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= Q(), Mh(d, this.relativeTarget)), s && (this.animationValues = i, Eh(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation &&= (Al(this.pendingAnimation), void 0), this.pendingAnimation = J.update(() => {
				dh.hasAnimatedSinceResize = !0, this.currentAnimation = tg(0, og, {
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
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(og), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Ng(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || Q();
					let t = um(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = um(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				Mh(t, n), Xm(t, i), pm(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new Jh()), this.sharedNodes.get(e).add(t);
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
			n.z && cg("z", e, r, this.animationValues);
			for (let t = 0; t < ig.length; t++) cg(`rotate${ig[t]}`, e, r, this.animationValues), cg(`skew${ig[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		getProjectionStyles(e) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return ag;
			let t = { visibility: "" }, n = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, t.opacity = "", t.pointerEvents = Qh(e?.pointerEvents) || "", t.transform = n ? n(this.latestValues, "") : "none", t;
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				let t = {};
				return this.options.layoutId && (t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, t.pointerEvents = Qh(e?.pointerEvents) || ""), this.hasProjected && !Rm(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1), t;
			}
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget(), t.transform = Yh(this.projectionDeltaWithTransform, this.treeScale, i), n && (t.transform = n(i, t.transform));
			let { x: a, y: o } = this.projectionDelta;
			t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`, r.animationValues ? t.opacity = r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : t.opacity = r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let e in hh) {
				if (i[e] === void 0) continue;
				let { correct: n, applyTo: a } = hh[e], o = t.transform === "none" ? i[e] : n(i[e], r);
				if (a) {
					let e = a.length;
					for (let n = 0; n < e; n++) t[a[n]] = o;
				} else t[e] = o;
			}
			return this.options.layoutId && (t.pointerEvents = r === this ? Qh(e?.pointerEvents) || "" : "none"), t;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(gg), this.root.sharedNodes.clear();
		}
	};
}
function dg(e) {
	e.updateLayout();
}
function fg(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		i === "size" ? Mm((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = um(r);
			r.min = n[e].min, r.max = r.min + i;
		}) : Ng(i, t.layoutBox, n) && Mm((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = um(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Am();
		pm(o, n, t.layoutBox);
		let s = Am();
		a ? pm(s, e.applyTransform(r, !0), t.measuredBox) : pm(s, n, t.layoutBox);
		let c = !Vh(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = Q();
					_m(o, t.layoutBox, i.layoutBox);
					let s = Q();
					_m(s, n, a.layoutBox), Gh(o, s) || (l = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r);
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
function pg(e) {
	rg && ng.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function mg(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function hg(e) {
	e.clearSnapshot();
}
function gg(e) {
	e.clearMeasurements();
}
function _g(e) {
	e.isLayoutDirty = !1;
}
function vg(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function yg(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function bg(e) {
	e.resolveTargetDelta();
}
function xg(e) {
	e.calcProjection();
}
function Sg(e) {
	e.resetSkewAndRotation();
}
function Cg(e) {
	e.removeLeadSnapshot();
}
function wg(e, t, n) {
	e.translate = Z(t.translate, 0, n), e.scale = Z(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Tg(e, t, n, r) {
	e.min = Z(t.min, n.min, r), e.max = Z(t.max, n.max, r);
}
function Eg(e, t, n, r) {
	Tg(e.x, t.x, n.x, r), Tg(e.y, t.y, n.y, r);
}
function Dg(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Og = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, kg = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ag = kg("applewebkit/") && !kg("chrome/") ? Math.round : Tl;
function jg(e) {
	e.min = Ag(e.min), e.max = Ag(e.max);
}
function Mg(e) {
	jg(e.x), jg(e.y);
}
function Ng(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !dm(Kh(t), Kh(n), .2);
}
function Pg(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var Fg = ug({
	attachResizeListener: (e, t) => Up(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), Ig = { current: void 0 }, Lg = ug({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Ig.current) {
			let e = new Fg({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Ig.current = e;
		}
		return Ig.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Rg = {
	pan: { Feature: oh },
	drag: {
		Feature: ih,
		ProjectionNode: Lg,
		MeasureLayout: bh
	}
};
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/hover.mjs
function zg(e, t) {
	let n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd";
	return Wp(e.current, n, (n, i) => {
		if (n.pointerType === "touch" || im()) return;
		let a = e.getProps();
		e.animationState && a.whileHover && e.animationState.setActive("whileHover", t);
		let o = a[r];
		o && J.postRender(() => o(n, i));
	}, { passive: !e.getProps()[r] });
}
var Bg = class extends Ip {
	mount() {
		this.unmount = ef(zg(this.node, !0), zg(this.node, !1));
	}
	unmount() {}
}, Vg = class extends Ip {
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
		this.unmount = ef(Up(this.node.current, "focus", () => this.onFocus()), Up(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
}, Hg = (e, t) => t ? e === t ? !0 : Hg(e, t.parentElement) : !1;
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/press.mjs
function Ug(e, t) {
	if (!t) return;
	let n = new PointerEvent("pointer" + e);
	t(n, Vp(n));
}
var Wg = class extends Ip {
	constructor() {
		super(...arguments), this.removeStartListeners = Tl, this.removeEndListeners = Tl, this.removeAccessibleListeners = Tl, this.startPointerPress = (e, t) => {
			if (this.isPressing) return;
			this.removeEndListeners();
			let n = this.node.getProps(), r = Wp(window, "pointerup", (e, t) => {
				if (!this.checkPressEnd()) return;
				let { onTap: n, onTapCancel: r, globalTapTarget: i } = this.node.getProps(), a = !i && !Hg(this.node.current, e.target) ? r : n;
				a && J.update(() => a(e, t));
			}, { passive: !(n.onTap || n.onPointerUp) }), i = Wp(window, "pointercancel", (e, t) => this.cancelPress(e, t), { passive: !(n.onTapCancel || n.onPointerCancel) });
			this.removeEndListeners = ef(r, i), this.startPress(e, t);
		}, this.startAccessiblePress = () => {
			let e = Up(this.node.current, "keydown", (e) => {
				if (e.key !== "Enter" || this.isPressing) return;
				let t = (e) => {
					e.key !== "Enter" || !this.checkPressEnd() || Ug("up", (e, t) => {
						let { onTap: n } = this.node.getProps();
						n && J.postRender(() => n(e, t));
					});
				};
				this.removeEndListeners(), this.removeEndListeners = Up(this.node.current, "keyup", t), Ug("down", (e, t) => {
					this.startPress(e, t);
				});
			}), t = Up(this.node.current, "blur", () => {
				this.isPressing && Ug("cancel", (e, t) => this.cancelPress(e, t));
			});
			this.removeAccessibleListeners = ef(e, t);
		};
	}
	startPress(e, t) {
		this.isPressing = !0;
		let { onTapStart: n, whileTap: r } = this.node.getProps();
		r && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && J.postRender(() => n(e, t));
	}
	checkPressEnd() {
		return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !im();
	}
	cancelPress(e, t) {
		if (!this.checkPressEnd()) return;
		let { onTapCancel: n } = this.node.getProps();
		n && J.postRender(() => n(e, t));
	}
	mount() {
		let e = this.node.getProps(), t = Wp(e.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, { passive: !(e.onTapStart || e.onPointerStart) }), n = Up(this.node.current, "focus", this.startAccessiblePress);
		this.removeStartListeners = ef(t, n);
	}
	unmount() {
		this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
	}
}, Gg = /* @__PURE__ */ new WeakMap(), Kg = /* @__PURE__ */ new WeakMap(), qg = (e) => {
	let t = Gg.get(e.target);
	t && t(e);
}, Jg = (e) => {
	e.forEach(qg);
};
function Yg({ root: e, ...t }) {
	let n = e || document;
	Kg.has(n) || Kg.set(n, {});
	let r = Kg.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(Jg, {
		root: e,
		...t
	})), r[i];
}
function Xg(e, t, n) {
	let r = Yg(t);
	return Gg.set(e, n), r.observe(e), () => {
		Gg.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/viewport/index.mjs
var Zg = {
	some: 0,
	all: 1
}, Qg = class extends Ip {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : Zg[r]
		};
		return Xg(this.node.current, a, (e) => {
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
		].some($g(e, t)) && this.startObserver();
	}
	unmount() {}
};
function $g({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/gestures.mjs
var e_ = {
	inView: { Feature: Qg },
	tap: { Feature: Wg },
	focus: { Feature: Vg },
	hover: { Feature: Bg }
}, t_ = { layout: {
	ProjectionNode: Lg,
	MeasureLayout: bh
} }, n_ = v({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
}), r_ = v({}), i_ = typeof window < "u", a_ = i_ ? D : w, o_ = v({ strict: !1 });
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function s_(e, t, n, r, i) {
	let { visualElement: a } = C(r_), o = C(o_), s = C(sh), c = C(n_).reducedMotion, l = k();
	r ||= o.renderer, !l.current && r && (l.current = r(e, {
		visualState: t,
		parent: a,
		props: n,
		presenceContext: s,
		blockInitialAnimation: s ? s.initial === !1 : !1,
		reducedMotionConfig: c
	}));
	let u = l.current, d = C(uh);
	u && !u.projection && i && (u.type === "html" || u.type === "svg") && c_(l.current, n, i, d);
	let f = k(!1);
	E(() => {
		u && f.current && u.update(n, s);
	});
	let p = n[gp], m = k(!!p && !window.MotionHandoffIsComplete?.call(window, p) && window.MotionHasOptimisedAnimation?.call(window, p));
	return a_(() => {
		u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), _h.render(u.render), m.current && u.animationState && u.animationState.animateChanges());
	}), w(() => {
		u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current &&= (queueMicrotask(() => {
			var e;
			(e = window.MotionHandoffMarkAsComplete) == null || e.call(window, p);
		}), !1));
	}), u;
}
function c_(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : l_(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && am(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		layoutScroll: c,
		layoutRoot: l
	});
}
function l_(e) {
	if (e) return e.options.allowProjection === !1 ? l_(e.parent) : e.projection;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function u_(e, t, n) {
	return S((r) => {
		r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : am(n) && (n.current = r));
	}, [t]);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function d_(e) {
	return nl(e.animate) || ul.some((t) => al(e[t]));
}
function f_(e) {
	return !!(d_(e) || e.variants);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/utils.mjs
function p_(e, t) {
	if (d_(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || al(t) ? t : void 0,
			animate: al(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/create.mjs
function m_(e) {
	let { initial: t, animate: n } = p_(e, C(r_));
	return O(() => ({
		initial: t,
		animate: n
	}), [h_(t), h_(n)]);
}
function h_(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs
var g_ = {
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
}, __ = {};
for (let e in g_) __[e] = { isEnabled: (t) => g_[e].some((e) => !!t[e]) };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/load-features.mjs
function v_(e) {
	for (let t in e) __[t] = {
		...__[t],
		...e[t]
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/symbol.mjs
var y_ = Symbol.for("motionComponentSymbol");
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/index.mjs
function b_({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
	e && v_(e);
	function a(a, o) {
		let s, c = {
			...C(n_),
			...a,
			layoutId: x_(a)
		}, { isStatic: l } = c, u = m_(a), d = r(a, l);
		if (!l && i_) {
			S_(c, e);
			let n = C_(c);
			s = n.MeasureLayout, u.visualElement = s_(i, d, c, t, n.ProjectionNode);
		}
		return M(r_.Provider, {
			value: u,
			children: [s && u.visualElement ? j(s, {
				visualElement: u.visualElement,
				...c
			}) : null, n(i, a, u_(d, u.visualElement, o), d, l, u.visualElement)]
		});
	}
	let o = b(a);
	return o[y_] = i, o;
}
function x_({ layoutId: e }) {
	let t = C(lh).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function S_(e, t) {
	let n = C(o_).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? Jl(!1, t) : Yl(!1, t);
	}
}
function C_(e) {
	let { drag: t, layout: n } = __;
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
var w_ = [
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
function T_(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(w_.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs
function E_(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (let t in n) e.style.setProperty(t, n[t]);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var D_ = new Set([
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
function O_(e, t, n, r) {
	E_(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(D_.has(n) ? n : hp(n), t.attrs[n]);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function k_(e, { layout: t, layoutId: n }) {
	return fl.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!hh[e] || e === "opacity");
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function A_(e, t, n) {
	let { style: r } = e, i = {};
	for (let a in r) (vp(r[a]) || t.style && vp(t.style[a]) || k_(a, e) || n?.getValue(a)?.liveStyle !== void 0) && (i[a] = r[a]);
	return i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function j_(e, t, n) {
	let r = A_(e, t, n);
	for (let n in e) if (vp(e[n]) || vp(t[n])) {
		let t = dl.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/use-constant.mjs
function M_(e) {
	let t = k(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function N_({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, i, a) {
	let o = {
		latestValues: F_(r, i, a, e),
		renderState: t()
	};
	return n && (o.mount = (e) => n(r, e, o)), o;
}
var P_ = (e) => (t, n) => {
	let r = C(r_), i = C(sh), a = () => N_(e, t, r, i);
	return n ? a() : M_(a);
};
function F_(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = Qh(a[e]);
	let { initial: o, animate: s } = e, c = d_(e), l = f_(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !nl(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = sl(e, t[n]);
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
var I_ = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), L_ = () => ({
	...I_(),
	attrs: {}
}), R_ = (e, t) => t && typeof e == "number" ? t.transform(e) : e, z_ = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, B_ = dl.length;
function V_(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < B_; a++) {
		let o = dl[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (c = typeof s == "number" ? s === +!!o.startsWith("scale") : parseFloat(s) === 0, !c || n) {
			let e = R_(s, md[o]);
			if (!c) {
				i = !1;
				let t = z_[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs
function H_(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (fl.has(e)) {
			o = !0;
			continue;
		} else if (Ql(e)) {
			i[e] = n;
			continue;
		} else {
			let t = R_(n, md[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = V_(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function U_(e, t, n) {
	return typeof e == "string" ? e : X.transform(t + n * e);
}
function W_(e, t, n) {
	return `${U_(t, e.x, e.width)} ${U_(n, e.y, e.height)}`;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs
var G_ = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, K_ = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function q_(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? G_ : K_;
	e[a.offset] = X.transform(-r);
	let o = X.transform(t), s = X.transform(n);
	e[a.array] = `${o} ${s}`;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function J_(e, { attrX: t, attrY: n, attrScale: r, originX: i, originY: a, pathLength: o, pathSpacing: s = 1, pathOffset: c = 0, ...l }, u, d) {
	if (H_(e, l, d), u) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: f, style: p, dimensions: m } = e;
	f.transform && (m && (p.transform = f.transform), delete f.transform), m && (i !== void 0 || a !== void 0 || p.transform) && (p.transformOrigin = W_(m, i === void 0 ? .5 : i, a === void 0 ? .5 : a)), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), o !== void 0 && q_(f, o, s, c, !1);
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var Y_ = (e) => typeof e == "string" && e.toLowerCase() === "svg", X_ = { useVisualState: P_({
	scrapeMotionValuesFromProps: j_,
	createRenderState: L_,
	onMount: (e, t, { renderState: n, latestValues: r }) => {
		J.read(() => {
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
		}), J.render(() => {
			J_(n, r, Y_(t.tagName), e.transformTemplate), O_(t, n);
		});
	}
}) }, Z_ = { useVisualState: P_({
	scrapeMotionValuesFromProps: A_,
	createRenderState: I_
}) };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/use-props.mjs
function Q_(e, t, n) {
	for (let r in t) !vp(t[r]) && !k_(r, n) && (e[r] = t[r]);
}
function $_({ transformTemplate: e }, t) {
	return O(() => {
		let n = I_();
		return H_(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function ev(e, t) {
	let n = e.style || {}, r = {};
	return Q_(r, n, e), Object.assign(r, $_(e, t)), r;
}
function tv(e, t) {
	let n = {}, r = ev(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/valid-prop.mjs
var nv = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function rv(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || nv.has(e);
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function iv(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var av = Ce((() => {})), ov = /* @__PURE__ */ Te({ default: () => cv }), sv, cv, lv = Ce((() => {
	av(), sv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, cv = /* #__PURE__ */ iv(function(e) {
		return sv.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), uv = (e) => !rv(e);
function dv(e) {
	e && (uv = (t) => t.startsWith("on") ? !rv(t) : e(t));
}
try {
	dv((lv(), Oe(ov)).default);
} catch {}
function fv(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || (uv(i) || n === !0 && rv(i) || !t && !rv(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/use-props.mjs
function pv(e, t, n, r) {
	let i = O(() => {
		let n = L_();
		return J_(n, t, Y_(r), e.transformTemplate), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Q_(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/use-render.mjs
function mv(e = !1) {
	return (t, n, r, { latestValues: i }, a) => {
		let o = (T_(t) ? pv : tv)(n, i, a, t), s = fv(n, typeof t == "string", e), c = t === _ ? {} : {
			...s,
			...o,
			ref: r
		}, { children: l } = n, u = O(() => vp(l) ? l.get() : l, [l]);
		return y(t, {
			...c,
			children: u
		});
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-factory.mjs
function hv(e, t) {
	return function(n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
		return b_({
			...T_(n) ? X_ : Z_,
			preloadedFeatures: e,
			useRender: mv(r),
			createVisualElement: t,
			Component: n
		});
	};
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs
var gv = { current: null }, _v = { current: !1 };
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs
function vv() {
	if (_v.current = !0, i_) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => gv.current = e.matches;
		e.addListener(t), t();
	} else gv.current = !1;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs
function yv(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (vp(i)) e.addValue(r, i), process.env.NODE_ENV === "development" && el(i.version === "11.11.13", `Attempting to mix Motion versions ${i.version} with 11.11.13 may not work as expected.`);
		else if (vp(a)) e.addValue(r, fp(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, fp(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs
var bv = /* @__PURE__ */ new WeakMap(), xv = [
	...Tu,
	Ku,
	od
], Sv = (e) => xv.find(wu(e)), Cv = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], wv = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: a }, o = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Nu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = wd.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, J.render(this.render, !1, !0));
		};
		let { latestValues: s, renderState: c } = a;
		this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = t.initial ? { ...s } : {}, this.renderState = c, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = d_(t), this.isVariantNode = f_(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in u) {
			let t = u[e];
			s[e] !== void 0 && vp(t) && t.set(s[e], !1);
		}
	}
	mount(e) {
		this.current = e, bv.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), _v.current || vv(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gv.current, process.env.NODE_ENV !== "production" && el(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		bv.delete(this.current), this.projection && this.projection.unmount(), Al(this.notifyUpdate), Al(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	bindToMotionValue(e, t) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
		let n = fl.has(e), r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && J.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
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
		for (e in __) {
			let t = __[e];
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
		for (let t = 0; t < Cv.length; t++) {
			let n = Cv[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = yv(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
		return n === void 0 && t !== void 0 && (n = fp(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Xl(n) || Kl(n)) ? n = parseFloat(n) : !Sv(n) && od.test(t) && (n = _d(e, t)), this.setBaseTarget(e, vp(n) ? n.get() : n)), vp(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = sl(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !vp(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new sp()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
}, Tv = class extends wv {
	constructor() {
		super(...arguments), this.KeyframeResolver = bd;
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
function Ev(e) {
	return window.getComputedStyle(e);
}
var Dv = class extends Tv {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = E_;
	}
	readValueFromInstance(e, t) {
		if (fl.has(t)) {
			let e = gd(t);
			return e && e.default || 0;
		} else {
			let n = Ev(e), r = (Ql(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Zm(e, t);
	}
	build(e, t, n) {
		H_(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return A_(e, t, n);
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		vp(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Ov = class extends Tv {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Q;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (fl.has(t)) {
			let e = gd(t);
			return e && e.default || 0;
		}
		return t = D_.has(t) ? t : hp(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return j_(e, t, n);
	}
	build(e, t, n) {
		J_(e, t, this.isSVGTag, n.transformTemplate);
	}
	renderInstance(e, t, n, r) {
		O_(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Y_(e.tagName), super.mount(e);
	}
}, kv = (e, t) => T_(e) ? new Ov(t) : new Dv(t, { allowProjection: e !== _ }), Av = /*@__PURE__*/ tl(/* @__PURE__ */ hv({
	...zp,
	...e_,
	...Rg,
	...t_
}, kv)), jv = class extends p.Component {
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
function Mv({ children: e, isPresent: t }) {
	let n = T(), r = k(null), i = k({
		width: 0,
		height: 0,
		top: 0,
		left: 0
	}), { nonce: a } = C(n_);
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
	}, [t]), j(jv, {
		isPresent: t,
		childRef: r,
		sizeRef: i,
		children: p.cloneElement(e, { ref: r })
	});
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Nv = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o }) => {
	let s = M_(Pv), c = T(), l = S((e) => {
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
	}, [n]), o === "popLayout" && (e = j(Mv, {
		isPresent: n,
		children: e
	})), j(sh.Provider, {
		value: u,
		children: e
	});
};
function Pv() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var Fv = (e) => e.key || "";
function Iv(e) {
	let t = [];
	return h.forEach(e, (e) => {
		x(e) && t.push(e);
	}), t;
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Lv = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: i, presenceAffectsLayout: a = !0, mode: o = "sync" }) => {
	Yl(!t, "Replace exitBeforeEnter with mode='wait'");
	let s = O(() => Iv(e), [e]), c = s.map(Fv), l = k(!0), u = k(s), d = M_(() => /* @__PURE__ */ new Map()), [f, p] = A(s), [m, h] = A(s);
	a_(() => {
		l.current = !1, u.current = s;
		for (let e = 0; e < m.length; e++) {
			let t = Fv(m[e]);
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
			let n = m[t], r = Fv(n);
			c.includes(r) || (e.splice(t, 0, n), g.push(n));
		}
		o === "wait" && g.length && (e = g), h(Iv(e)), p(s);
		return;
	}
	process.env.NODE_ENV !== "production" && o === "wait" && m.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: _ } = C(lh);
	return j(ee, { children: m.map((e) => {
		let t = Fv(e), f = s === m || c.includes(t);
		return j(Nv, {
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
}, Rv = se`
  0% {
    background-position: 0 0;
  }
  50.01% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }
`, zv = ({ theme: e, prefersReducedMotion: t, spread: n = 24 }) => ({
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
		animation: t ? void 0 : `${Rv} 20s linear infinite`
	},
	"&:after": {
		top: "-8px",
		left: "-8px",
		width: "calc(100% + 16px)",
		height: "calc(100% + 16px)",
		filter: `blur(${n}px)`,
		opacity: "0.9"
	}
}), Bv = ae("img")({}), Vv = (e) => {
	let t = Xe(e.id);
	return t || console.error(`Card ID ${e.id} does not have an image configured`), t ? Je[e.id] : Ye.pixel;
}, Hv = "Card", Uv = "CardFlipWrapper", Wv = "#0072ff", Gv = "#0fc400", Kv = "#ff7510", qv = ({ theme: e, isBuffedCrop: t, prefersReducedMotion: n }) => t ? zv({
	theme: e,
	prefersReducedMotion: n,
	spread: 12
}) : { filter: `drop-shadow(0px 0px 24px ${Gv})` }, Jv = m.forwardRef(function({ cardInstance: e, cardIdxInHand: n, cardIdxInField: r, cropIdxInFieldToHarvest: i, cropIdxInFieldToWater: a, playerId: o, children: s, disableEnterAnimation: d = !1, imageScale: p = .75, isFlipped: m = !1, paperProps: h, size: g = B.MEDIUM, sx: _ = [], isBuffedCrop: v = !1, isSessionOwnersCard: y = !1, showPlayCardButton: b = !1, playButtonDisabled: x = !1, showWaterCropButton: S = !1, showHarvestCropButton: C = !1, showWaterableState: w = !1, showHarvestableState: T = !1, showDiscardButton: E = !1, tooltipTitle: D = "", onPlayCard: O, onWaterCrop: A, onHarvestCrop: ee, onDiscardCard: ae, ...se }, ce) {
	let N = c(), le = k(null), ue = f("(prefers-reduced-motion: reduce)");
	return /* @__PURE__ */ j(Lv, { children: /* @__PURE__ */ j(u, {
		ref: ce,
		className: Hv,
		sx: [{
			perspective: "1000px",
			height: hn[g].height,
			width: hn[g].width
		}, ...Ne(_) ? _ : [_]],
		...se,
		children: /* @__PURE__ */ j(Av.div, {
			initial: d ? !1 : { scale: 0 },
			animate: { scale: 1 },
			style: {
				originX: .5,
				originY: .5
			},
			children: /* @__PURE__ */ j(l, {
				title: D,
				placement: "top",
				arrow: !0,
				children: /* @__PURE__ */ M(u, {
					className: Uv,
					sx: [{
						height: hn[g].height,
						position: "relative",
						transformStyle: "preserve-3d",
						width: hn[g].width,
						...m && { transform: "rotateY(180deg)" },
						transition: N.transitions.create(["transform", "box-shadow"])
					}],
					children: [/* @__PURE__ */ M(ne, {
						ref: le,
						...h,
						sx: [{
							backfaceVisibility: "hidden",
							background: N.palette.mode === "light" ? re(N.palette.background.paper, .05) : ie(N.palette.background.paper, .15),
							display: "flex",
							flexDirection: "column",
							height: 1,
							outlineColor: N.palette.background.default,
							outlineStyle: "solid",
							outlineWidth: 2,
							p: N.spacing(1),
							position: "absolute",
							width: 1,
							...w && { filter: `drop-shadow(0px 0px 24px ${Wv})` },
							...T && {
								...y && qv({
									theme: N,
									isBuffedCrop: v,
									prefersReducedMotion: ue
								}),
								...!y && { filter: `drop-shadow(0px 0px 24px ${Kv})` }
							}
						}],
						children: [
							/* @__PURE__ */ j(oe, {
								variant: g === B.SMALL ? "caption" : "overline",
								sx: {
									fontWeight: N.typography.fontWeightBold,
									textTransform: "uppercase"
								},
								children: e.name
							}),
							/* @__PURE__ */ j(u, {
								sx: {
									height: "50%",
									display: "flex",
									background: N.palette.common.white,
									backgroundImage: `url(${Ye.dirt})`,
									backgroundSize: "100%",
									backgroundRepeat: "repeat",
									borderColor: N.palette.divider,
									borderRadius: `${N.shape.borderRadius}px`,
									borderWidth: 1,
									borderStyle: "solid",
									imageRendering: "pixelated"
								},
								children: /* @__PURE__ */ j(Bv, {
									src: Vv(e),
									alt: e.name,
									sx: {
										height: `${100 * p}%`,
										p: 0,
										m: "auto",
										imageRendering: "pixelated",
										filter: `drop-shadow(0 0 5px ${N.palette.common.white})`
									}
								})
							}),
							/* @__PURE__ */ j(te, { sx: { my: N.spacing(1) } }),
							/* @__PURE__ */ j(u, {
								sx: {
									height: "50%",
									overflow: "auto",
									...g === B.SMALL && {
										fontSize: N.typography.caption.fontSize,
										lineHeight: N.typography.caption.lineHeight,
										"> p": { my: 0 }
									}
								},
								children: s
							}),
							b && /* @__PURE__ */ j(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ j(oe, { children: /* @__PURE__ */ M(t, {
									variant: "contained",
									disabled: x,
									onClick: () => void O?.(),
									children: [
										sn(e) && "Play crop",
										Ze(e) && "Water a crop",
										Qe(e) && "Play event",
										$e(e) && "Play tool"
									]
								}) })
							}),
							S && /* @__PURE__ */ j(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ j(oe, { children: /* @__PURE__ */ j(t, {
									variant: "contained",
									onClick: A,
									children: "Water crop"
								}) })
							}),
							C && /* @__PURE__ */ j(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ j(oe, { children: /* @__PURE__ */ j(t, {
									variant: "contained",
									color: "success",
									onClick: ee,
									children: "Harvest crop"
								}) })
							}),
							E && /* @__PURE__ */ j(u, {
								position: "absolute",
								right: "-100%",
								width: 1,
								px: 1,
								children: /* @__PURE__ */ j(oe, { children: /* @__PURE__ */ j(t, {
									variant: "contained",
									color: "error",
									onClick: ae,
									children: "Discard"
								}) })
							})
						]
					}), /* @__PURE__ */ j(ne, {
						...h,
						sx: {
							alignItems: "center",
							backgroundColor: N.palette.background.default,
							backfaceVisibility: "hidden",
							color: N.palette.common.white,
							display: "flex",
							height: 1,
							position: "absolute",
							textAlign: "center",
							transform: "rotateY(180deg)",
							width: 1
						},
						children: /* @__PURE__ */ j(oe, {
							variant: "h2",
							sx: {
								...g === B.SMALL && N.typography.h6,
								...g === B.MEDIUM && N.typography.h5,
								...g === B.LARGE && N.typography.h4
							},
							children: "Farmhand Shuffle"
						})
					})]
				})
			})
		})
	}) });
}), Yv = ({ crop: e, playedCrop: t }) => t ? /* @__PURE__ */ M(oe, { children: [
	"Water cards attached: ",
	t.waterCards,
	"/",
	e.waterToMature
] }) : /* @__PURE__ */ M(oe, { children: ["Water needed to mature: ", e.waterToMature] }), Xv = D;
//#endregion
//#region node_modules/xstate/dev/dist/xstate-dev.esm.js
function Zv() {
	if (typeof globalThis < "u") return globalThis;
	if (typeof self < "u") return self;
	if (typeof window < "u") return window;
	if (typeof global < "u") return global;
}
function Qv() {
	let e = Zv();
	if (e.__xstate__) return e.__xstate__;
}
var $v = (e) => {
	if (typeof window > "u") return;
	let t = Qv();
	t && t.register(e);
}, ey = class {
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
}, ty = "", ny = "#", ry = "*", iy = "xstate.init", ay = "xstate.stop";
function oy(e, t) {
	return { type: `xstate.after.${e}.${t}` };
}
function sy(e, t) {
	return {
		type: `xstate.done.state.${e}`,
		output: t
	};
}
function cy(e, t) {
	return {
		type: `xstate.done.actor.${e}`,
		output: t,
		actorId: e
	};
}
function ly(e, t) {
	return {
		type: `xstate.error.actor.${e}`,
		error: t,
		actorId: e
	};
}
function uy(e) {
	return {
		type: iy,
		input: e
	};
}
function dy(e) {
	setTimeout(() => {
		throw e;
	});
}
var fy = typeof Symbol == "function" && Symbol.observable || "@@observable";
function py(e, t) {
	let n = hy(e), r = hy(t);
	return typeof r == "string" ? typeof n == "string" ? r === n : !1 : typeof n == "string" ? n in r : Object.keys(n).every((e) => e in r ? py(n[e], r[e]) : !1);
}
function my(e) {
	if (xy(e)) return e;
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
function hy(e) {
	return Ub(e) ? e.value : typeof e == "string" ? gy(my(e)) : e;
}
function gy(e) {
	if (e.length === 1) return e[0];
	let t = {}, n = t;
	for (let t = 0; t < e.length - 1; t++) if (t === e.length - 2) n[e[t]] = e[t + 1];
	else {
		let r = n;
		n = {}, r[e[t]] = n;
	}
	return t;
}
function _y(e, t) {
	let n = {}, r = Object.keys(e);
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		n[a] = t(e[a], a, e, i);
	}
	return n;
}
function vy(e) {
	return xy(e) ? e : [e];
}
function yy(e) {
	return e === void 0 ? [] : vy(e);
}
function by(e, t, n, r) {
	return typeof e == "function" ? e({
		context: t,
		event: n,
		self: r
	}) : e;
}
function xy(e) {
	return Array.isArray(e);
}
function Sy(e) {
	return e.type.startsWith("xstate.error.actor");
}
function Cy(e) {
	return vy(e).map((e) => e === void 0 || typeof e == "string" ? { target: e } : e);
}
function wy(e) {
	if (!(e === void 0 || e === ty)) return yy(e);
}
function Ty(e, t, n) {
	let r = typeof e == "object", i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
function Ey(e, t) {
	return `${t}.${e}`;
}
function Dy(e, t) {
	let n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/);
	if (!n) return e.implementations.actors[t];
	let [, r, i] = n, a = e.getStateNodeById(i).config.invoke;
	return (Array.isArray(a) ? a[r] : a).src;
}
function Oy(e, t) {
	return `${e.sessionId}.${t}`;
}
var ky = 0;
function Ay(e, t) {
	let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new Set(), o = {}, { clock: s, logger: c } = t, l = {
		schedule: (e, t, n, r, i = Math.random().toString(36).slice(2)) => {
			let a = {
				source: e,
				target: t,
				event: n,
				delay: r,
				id: i,
				startedAt: Date.now()
			}, c = Oy(e, i);
			u._snapshot._scheduledEvents[c] = a, o[c] = s.setTimeout(() => {
				delete o[c], delete u._snapshot._scheduledEvents[c], u._relay(e, t, n);
			}, r);
		},
		cancel: (e, t) => {
			let n = Oy(e, t), r = o[n];
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
		_bookId: () => `x:${ky++}`,
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
			let t = Ty(e);
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
var jy = !1, My = /*#__PURE__*/ function(e) {
	return e[e.NotStarted = 0] = "NotStarted", e[e.Running = 1] = "Running", e[e.Stopped = 2] = "Stopped", e;
}({}), Ny = {
	clock: {
		setTimeout: (e, t) => setTimeout(e, t),
		clearTimeout: (e) => clearTimeout(e)
	},
	logger: console.log.bind(console),
	devTools: !1
}, Py = class {
	constructor(e, t) {
		this.logic = e, this._snapshot = void 0, this.clock = void 0, this.options = void 0, this.id = void 0, this.mailbox = new ey(this._process.bind(this)), this.observers = /* @__PURE__ */ new Set(), this.eventListeners = /* @__PURE__ */ new Map(), this.logger = void 0, this._processingStatus = My.NotStarted, this._parent = void 0, this._syncSnapshot = void 0, this.ref = void 0, this._actorScope = void 0, this._systemId = void 0, this.sessionId = void 0, this.system = void 0, this._doneEvent = void 0, this.src = void 0, this._deferred = [];
		let n = {
			...Ny,
			...t
		}, { clock: r, logger: i, parent: a, syncSnapshot: o, id: s, systemId: c, inspect: l } = n;
		this.system = a ? a.system : Ay(this, {
			clock: r,
			logger: i
		}), l && !a && this.system.inspect(Ty(l)), this.sessionId = this.system._bookId(), this.id = s ?? this.sessionId, this.logger = t?.logger ?? this.system._logger, this.clock = t?.clock ?? this.system._clock, this._parent = a, this._syncSnapshot = o, this.options = n, this.src = n.src ?? e, this.ref = this, this._actorScope = {
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
					let t = jy;
					try {
						jy = !0, e.exec(e.info, e.params);
					} finally {
						jy = t;
					}
				};
				this._processingStatus === My.Running ? t() : this._deferred.push(t);
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
					dy(e);
				}
				break;
			case "done":
				for (let t of this.observers) try {
					t.next?.(e);
				} catch (e) {
					dy(e);
				}
				this._stopProcedure(), this._complete(), this._doneEvent = cy(this.id, this._snapshot.output), this._parent && this.system._relay(this, this._parent, this._doneEvent);
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
		let r = Ty(e, t, n);
		if (this._processingStatus !== My.Stopped) this.observers.add(r);
		else switch (this._snapshot.status) {
			case "done":
				try {
					r.complete?.();
				} catch (e) {
					dy(e);
				}
				break;
			case "error": {
				let e = this._snapshot.error;
				if (!r.error) dy(e);
				else try {
					r.error(e);
				} catch (e) {
					dy(e);
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
		if (this._processingStatus === My.Running) return this;
		this._syncSnapshot && this.subscribe({
			next: (e) => {
				e.status === "active" && this.system._relay(this, this._parent, {
					type: `xstate.snapshot.${this.id}`,
					snapshot: e
				});
			},
			error: () => {}
		}), this.system._register(this.sessionId, this), this._systemId && this.system._set(this._systemId, this), this._processingStatus = My.Running;
		let e = uy(this.options.input);
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
		return this._processingStatus === My.Stopped ? this : (this.mailbox.clear(), this._processingStatus === My.NotStarted ? (this._processingStatus = My.Stopped, this) : (this.mailbox.enqueue({ type: ay }), this));
	}
	stop() {
		if (this._parent) throw Error("A non-root actor cannot be stopped directly.");
		return this._stop();
	}
	_complete() {
		for (let e of this.observers) try {
			e.complete?.();
		} catch (e) {
			dy(e);
		}
		this.observers.clear();
	}
	_reportError(e) {
		if (!this.observers.size) {
			this._parent || dy(e);
			return;
		}
		let t = !1;
		for (let n of this.observers) {
			let r = n.error;
			t ||= !r;
			try {
				r?.(e);
			} catch (e) {
				dy(e);
			}
		}
		this.observers.clear(), t && dy(e);
	}
	_error(e) {
		this._stopProcedure(), this._reportError(e), this._parent && this.system._relay(this, this._parent, ly(this.id, e));
	}
	_stopProcedure() {
		return this._processingStatus === My.Running ? (this.system.scheduler.cancelAll(this), this.mailbox.clear(), this.mailbox = new ey(this._process.bind(this)), this._processingStatus = My.Stopped, this.system._unregister(this), this) : this;
	}
	_send(e) {
		this._processingStatus !== My.Stopped && this.mailbox.enqueue(e);
	}
	send(e) {
		this.system._relay(void 0, this, e);
	}
	attachDevTools() {
		let { devTools: e } = this.options;
		e && (typeof e == "function" ? e : $v)(this);
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
	[fy]() {
		return this;
	}
	getSnapshot() {
		return this._snapshot;
	}
};
function Fy(e, ...[t]) {
	return new Py(e, t);
}
function Iy(e, t, n, r, { sendId: i }) {
	return [
		t,
		{ sendId: typeof i == "function" ? i(n, r) : i },
		void 0
	];
}
function Ly(e, t) {
	e.defer(() => {
		e.system.scheduler.cancel(e.self, t.sendId);
	});
}
function Ry(e) {
	function t(e, t) {}
	return t.type = "xstate.cancel", t.sendId = e, t.resolve = Iy, t.execute = Ly, t;
}
function zy(e, t, n, r, { id: i, systemId: a, src: o, input: s, syncSnapshot: c }) {
	let l = typeof o == "string" ? Dy(t.machine, o) : o, u = typeof i == "function" ? i(n) : i, d, f;
	return l && (f = typeof s == "function" ? s({
		context: t.context,
		event: n.event,
		self: e.self
	}) : s, d = Fy(l, {
		id: u,
		src: o,
		parent: e.self,
		syncSnapshot: c,
		systemId: a,
		input: f
	})), [
		Xb(t, { children: {
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
function By(e, { actorRef: t }) {
	t && e.defer(() => {
		t._processingStatus !== My.Stopped && t.start();
	});
}
function Vy(...[e, { id: t, systemId: n, input: r, syncSnapshot: i = !1 } = {}]) {
	function a(e, t) {}
	return a.type = "xstate.spawnChild", a.id = t, a.systemId = n, a.src = e, a.input = r, a.syncSnapshot = i, a.resolve = zy, a.execute = By, a;
}
function Hy(e, t, n, r, { actorRef: i }) {
	let a = typeof i == "function" ? i(n, r) : i, o = typeof a == "string" ? t.children[a] : a, s = t.children;
	return o && (s = { ...s }, delete s[o.id]), [
		Xb(t, { children: s }),
		o,
		void 0
	];
}
function Uy(e, t) {
	if (t) {
		if (e.system._unregister(t), t._processingStatus !== My.Running) {
			e.stopChild(t);
			return;
		}
		e.defer(() => {
			e.stopChild(t);
		});
	}
}
function Wy(e) {
	function t(e, t) {}
	return t.type = "xstate.stopChild", t.actorRef = e, t.resolve = Hy, t.execute = Uy, t;
}
function Gy(e, t, n, r) {
	let { machine: i } = r, a = typeof e == "function", o = a ? e : i.implementations.guards[typeof e == "string" ? e : e.type];
	if (!a && !o) throw Error(`Guard '${typeof e == "string" ? e : e.type}' is not implemented.'.`);
	if (typeof o != "function") return Gy(o, t, n, r);
	let s = {
		context: t,
		event: n
	}, c = a || typeof e == "string" ? void 0 : "params" in e ? typeof e.params == "function" ? e.params({
		context: t,
		event: n
	}) : e.params : void 0;
	return "check" in o ? o.check(r, s, o) : o(s, c);
}
var Ky = (e) => e.type === "atomic" || e.type === "final";
function qy(e) {
	return Object.values(e.states).filter((e) => e.type !== "history");
}
function Jy(e, t) {
	let n = [];
	if (t === e) return n;
	let r = e.parent;
	for (; r && r !== t;) n.push(r), r = r.parent;
	return n;
}
function Yy(e) {
	let t = new Set(e), n = Zy(t);
	for (let e of t) if (e.type === "compound" && (!n.get(e) || !n.get(e).length)) lb(e).forEach((e) => t.add(e));
	else if (e.type === "parallel") {
		for (let n of qy(e)) if (n.type !== "history" && !t.has(n)) {
			let e = lb(n);
			for (let n of e) t.add(n);
		}
	}
	for (let e of t) {
		let n = e.parent;
		for (; n;) t.add(n), n = n.parent;
	}
	return t;
}
function Xy(e, t) {
	let n = t.get(e);
	if (!n) return {};
	if (e.type === "compound") {
		let e = n[0];
		if (e) {
			if (Ky(e)) return e.key;
		} else return {};
	}
	let r = {};
	for (let e of n) r[e.key] = Xy(e, t);
	return r;
}
function Zy(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.has(n) || t.set(n, []), n.parent && (t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n));
	return t;
}
function Qy(e, t) {
	return Xy(e, Zy(Yy(t)));
}
function $y(e, t) {
	return t.type === "compound" ? qy(t).some((t) => t.type === "final" && e.has(t)) : t.type === "parallel" ? qy(t).every((t) => $y(e, t)) : t.type === "final";
}
var eb = (e) => e[0] === ny;
function tb(e, t) {
	return e.transitions.get(t) || [...e.transitions.keys()].filter((e) => {
		if (e === ry) return !0;
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
function nb(e) {
	let t = e.config.after;
	if (!t) return [];
	let n = (t) => {
		let n = oy(t, e.id), r = n.type;
		return e.entry.push(tx(n, {
			id: r,
			delay: t
		})), e.exit.push(Ry(r)), r;
	};
	return Object.keys(t).flatMap((e) => {
		let r = t[e], i = typeof r == "string" ? { target: r } : r, a = Number.isNaN(+e) ? e : +e, o = n(a);
		return yy(i).map((e) => ({
			...e,
			event: o,
			delay: a
		}));
	}).map((t) => {
		let { delay: n } = t;
		return {
			...rb(e, t.event, t),
			delay: n
		};
	});
}
function rb(e, t, n) {
	let r = wy(n.target), i = n.reenter ?? !1, a = ob(e, r), o = {
		...n,
		actions: yy(n.actions),
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
function ib(e) {
	let t = /* @__PURE__ */ new Map();
	if (e.config.on) for (let n of Object.keys(e.config.on)) {
		if (n === "") throw Error("Null events (\"\") cannot be specified as a transition key. Use `always: { ... }` instead.");
		let r = e.config.on[n];
		t.set(n, Cy(r).map((t) => rb(e, n, t)));
	}
	if (e.config.onDone) {
		let n = `xstate.done.state.${e.id}`;
		t.set(n, Cy(e.config.onDone).map((t) => rb(e, n, t)));
	}
	for (let n of e.invoke) {
		if (n.onDone) {
			let r = `xstate.done.actor.${n.id}`;
			t.set(r, Cy(n.onDone).map((t) => rb(e, r, t)));
		}
		if (n.onError) {
			let r = `xstate.error.actor.${n.id}`;
			t.set(r, Cy(n.onError).map((t) => rb(e, r, t)));
		}
		if (n.onSnapshot) {
			let r = `xstate.snapshot.${n.id}`;
			t.set(r, Cy(n.onSnapshot).map((t) => rb(e, r, t)));
		}
	}
	for (let n of e.after) {
		let e = t.get(n.eventType);
		e || (e = [], t.set(n.eventType, e)), e.push(n);
	}
	return t;
}
function ab(e, t) {
	let n = typeof t == "string" ? e.states[t] : t ? e.states[t.target] : void 0;
	if (!n && t) throw Error(`Initial state node "${t}" not found on parent state node #${e.id}`);
	let r = {
		source: e,
		actions: !t || typeof t == "string" ? [] : yy(t.actions),
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
function ob(e, t) {
	if (t !== void 0) return t.map((t) => {
		if (typeof t != "string") return t;
		if (eb(t)) return e.machine.getStateNodeById(t);
		let n = t[0] === ".";
		if (n && !e.parent) return fb(e, t.slice(1));
		let r = n ? e.key + t : t;
		if (e.parent) try {
			return fb(e.parent, r);
		} catch (t) {
			throw Error(`Invalid transition definition for state node '${e.id}':\n${t.message}`);
		}
		else throw Error(`Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`);
	});
}
function sb(e) {
	let t = wy(e.config.target);
	return t ? { target: t.map((t) => typeof t == "string" ? fb(e.parent, t) : t) } : e.parent.initial;
}
function cb(e) {
	return e.type === "history";
}
function lb(e) {
	let t = ub(e);
	for (let n of t) for (let r of Jy(n, e)) t.add(r);
	return t;
}
function ub(e) {
	let t = /* @__PURE__ */ new Set();
	function n(e) {
		if (!t.has(e)) {
			if (t.add(e), e.type === "compound") n(e.initial.target[0]);
			else if (e.type === "parallel") for (let t of qy(e)) n(t);
		}
	}
	return n(e), t;
}
function db(e, t) {
	if (eb(t)) return e.machine.getStateNodeById(t);
	if (!e.states) throw Error(`Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`);
	let n = e.states[t];
	if (!n) throw Error(`Child state '${t}' does not exist on '${e.id}'`);
	return n;
}
function fb(e, t) {
	if (typeof t == "string" && eb(t)) try {
		return e.machine.getStateNodeById(t);
	} catch {}
	let n = my(t).slice(), r = e;
	for (; n.length;) {
		let e = n.shift();
		if (!e.length) break;
		r = db(r, e);
	}
	return r;
}
function pb(e, t) {
	if (typeof t == "string") {
		let n = e.states[t];
		if (!n) throw Error(`State '${t}' does not exist on '${e.id}'`);
		return [e, n];
	}
	let n = Object.keys(t), r = n.map((t) => db(e, t)).filter(Boolean);
	return [e.machine.root, e].concat(r, n.reduce((n, r) => {
		let i = db(e, r);
		if (!i) return n;
		let a = pb(i, t[r]);
		return n.concat(a);
	}, []));
}
function mb(e, t, n, r) {
	let i = db(e, t).next(n, r);
	return !i || !i.length ? e.next(n, r) : i;
}
function hb(e, t, n, r) {
	let i = Object.keys(t), a = _b(db(e, i[0]), t[i[0]], n, r);
	return !a || !a.length ? e.next(n, r) : a;
}
function gb(e, t, n, r) {
	let i = [];
	for (let a of Object.keys(t)) {
		let o = t[a];
		if (!o) continue;
		let s = _b(db(e, a), o, n, r);
		s && i.push(...s);
	}
	return i.length ? i : e.next(n, r);
}
function _b(e, t, n, r) {
	return typeof t == "string" ? mb(e, t, n, r) : Object.keys(t).length === 1 ? hb(e, t, n, r) : gb(e, t, n, r);
}
function vb(e) {
	return Object.keys(e.states).map((t) => e.states[t]).filter((e) => e.type === "history");
}
function yb(e, t) {
	let n = e;
	for (; n.parent && n.parent !== t;) n = n.parent;
	return n.parent === t;
}
function bb(e, t) {
	let n = new Set(e), r = new Set(t);
	for (let e of n) if (r.has(e)) return !0;
	for (let e of r) if (n.has(e)) return !0;
	return !1;
}
function xb(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) {
		let e = !1, a = /* @__PURE__ */ new Set();
		for (let o of r) if (bb(Tb([i], t, n), Tb([o], t, n))) if (yb(i.source, o.source)) a.add(o);
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
function Sb(e) {
	let [t, ...n] = e;
	for (let e of Jy(t, void 0)) if (n.every((t) => yb(t, e))) return e;
}
function Cb(e, t) {
	if (!e.target) return [];
	let n = /* @__PURE__ */ new Set();
	for (let r of e.target) if (cb(r)) if (t[r.id]) for (let e of t[r.id]) n.add(e);
	else for (let e of Cb(sb(r), t)) n.add(e);
	else n.add(r);
	return [...n];
}
function wb(e, t) {
	let n = Cb(e, t);
	if (!n) return;
	if (!e.reenter && n.every((t) => t === e.source || yb(t, e.source))) return e.source;
	let r = Sb(n.concat(e.source));
	if (r) return r;
	if (!e.reenter) return e.source.machine.root;
}
function Tb(e, t, n) {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) if (i.target?.length) {
		let e = wb(i, n);
		i.reenter && i.source === e && r.add(e);
		for (let n of t) yb(n, e) && r.add(n);
	}
	return [...r];
}
function Eb(e, t) {
	if (e.length !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Db(e, t, n, r, i, a) {
	if (!e.length) return t;
	let o = new Set(t._nodes), s = t.historyValue, c = xb(e, o, s), l = t;
	i || ([l, s] = Pb(l, r, n, c, o, s, a, n.actionExecutor)), l = Lb(l, r, n, c.flatMap((e) => e.actions), a, void 0), l = kb(l, r, n, c, o, a, s, i);
	let u = [...o];
	l.status === "done" && (l = Lb(l, r, n, u.sort((e, t) => t.order - e.order).flatMap((e) => e.exit), a, void 0));
	try {
		return s === t.historyValue && Eb(t._nodes, o) ? l : Xb(l, {
			_nodes: u,
			historyValue: s
		});
	} catch (e) {
		throw e;
	}
}
function Ob(e, t, n, r, i) {
	if (r.output === void 0) return;
	let a = sy(i.id, i.output !== void 0 && i.parent ? by(i.output, e.context, t, n.self) : void 0);
	return by(r.output, e.context, a, n.self);
}
function kb(e, t, n, r, i, a, o, s) {
	let c = e, l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
	Ab(r, o, u, l), s && u.add(e.machine.root);
	let d = /* @__PURE__ */ new Set();
	for (let e of [...l].sort((e, t) => e.order - t.order)) {
		i.add(e);
		let r = [];
		r.push(...e.entry);
		for (let t of e.invoke) r.push(Vy(t.src, {
			...t,
			syncSnapshot: !!t.onSnapshot
		}));
		if (u.has(e)) {
			let t = e.initial.actions;
			r.push(...t);
		}
		if (c = Lb(c, t, n, r, a, e.invoke.map((e) => e.id)), e.type === "final") {
			let r = e.parent, o = r?.type === "parallel" ? r : r?.parent, s = o || e;
			for (r?.type === "compound" && a.push(sy(r.id, e.output === void 0 ? void 0 : by(e.output, c.context, t, n.self))); o?.type === "parallel" && !d.has(o) && $y(i, o);) d.add(o), a.push(sy(o.id)), s = o, o = o.parent;
			if (o) continue;
			c = Xb(c, {
				status: "done",
				output: Ob(c, t, n, c.machine.root, s)
			});
		}
	}
	return c;
}
function Ab(e, t, n, r) {
	for (let i of e) {
		let e = wb(i, t);
		for (let a of i.target || []) !cb(a) && (i.source !== a || i.source !== e || i.reenter) && (r.add(a), n.add(a)), jb(a, t, n, r);
		let a = Cb(i, t);
		for (let o of a) {
			let a = Jy(o, e);
			e?.type === "parallel" && a.push(e), Mb(r, t, n, a, !i.source.parent && i.reenter ? void 0 : e);
		}
	}
}
function jb(e, t, n, r) {
	if (cb(e)) if (t[e.id]) {
		let i = t[e.id];
		for (let e of i) r.add(e), jb(e, t, n, r);
		for (let a of i) Nb(a, e.parent, r, t, n);
	} else {
		let i = sb(e);
		for (let a of i.target) r.add(a), i === e.parent?.initial && n.add(e.parent), jb(a, t, n, r);
		for (let a of i.target) Nb(a, e.parent, r, t, n);
	}
	else if (e.type === "compound") {
		let [i] = e.initial.target;
		cb(i) || (r.add(i), n.add(i)), jb(i, t, n, r), Nb(i, e, r, t, n);
	} else if (e.type === "parallel") for (let i of qy(e).filter((e) => !cb(e))) [...r].some((e) => yb(e, i)) || (cb(i) || (r.add(i), n.add(i)), jb(i, t, n, r));
}
function Mb(e, t, n, r, i) {
	for (let a of r) if ((!i || yb(a, i)) && e.add(a), a.type === "parallel") for (let r of qy(a).filter((e) => !cb(e))) [...e].some((e) => yb(e, r)) || (e.add(r), jb(r, t, n, e));
}
function Nb(e, t, n, r, i) {
	Mb(n, r, i, Jy(e, t));
}
function Pb(e, t, n, r, i, a, o, s) {
	let c = e, l = Tb(r, i, a);
	l.sort((e, t) => t.order - e.order);
	let u;
	for (let e of l) for (let t of vb(e)) {
		let n;
		n = t.history === "deep" ? (t) => Ky(t) && yb(t, e) : (t) => t.parent === e, u ??= { ...a }, u[t.id] = Array.from(i).filter(n);
	}
	for (let e of l) c = Lb(c, t, n, [...e.exit, ...e.invoke.map((e) => Wy(e.id))], o, void 0), i.delete(e);
	return [c, u || a];
}
function Fb(e, t) {
	return e.implementations.actions[t];
}
function Ib(e, t, n, r, i, a) {
	let { machine: o } = e, s = e;
	for (let e of r) {
		let r = typeof e == "function", c = r ? e : Fb(o, typeof e == "string" ? e : e.type), l = {
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
		}), m && (s = Ib(s, t, n, m, i, a));
	}
	return s;
}
function Lb(e, t, n, r, i, a) {
	let o = a ? [] : void 0, s = Ib(e, t, n, r, {
		internalQueue: i,
		deferredActorIds: a
	}, o);
	return o?.forEach(([e, t]) => {
		e.retryResolve(n, s, t);
	}), s;
}
function Rb(e, t, n, r) {
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
	if (t.type === "xstate.stop") return i = Xb(zb(i, t, n), { status: "stopped" }), o(i, t, []), {
		snapshot: i,
		microstates: a
	};
	let s = t;
	if (s.type !== iy) {
		let t = s, c = Sy(t), l = Bb(t, i);
		if (c && !l.length) return i = Xb(e, {
			status: "error",
			error: t.error
		}), o(i, t, []), {
			snapshot: i,
			microstates: a
		};
		i = Db(l, e, n, s, !1, r), o(i, t, l);
	}
	let c = !0;
	for (; i.status === "active";) {
		let e = c ? Vb(i, s) : [], t = e.length ? i : void 0;
		if (!e.length) {
			if (!r.length) break;
			s = r.shift(), e = Bb(s, i);
		}
		i = Db(e, i, n, s, !1, r), c = i !== t, o(i, s, e);
	}
	return i.status !== "active" && zb(i, s, n), {
		snapshot: i,
		microstates: a
	};
}
function zb(e, t, n) {
	return Lb(e, t, n, Object.values(e.children).map((e) => Wy(e)), [], void 0);
}
function Bb(e, t) {
	return t.machine.getTransitionData(t, e);
}
function Vb(e, t) {
	let n = /* @__PURE__ */ new Set(), r = e._nodes.filter(Ky);
	for (let i of r) loop: for (let r of [i].concat(Jy(i, void 0))) if (r.always) {
		for (let i of r.always) if (i.guard === void 0 || Gy(i.guard, e.context, t, e)) {
			n.add(i);
			break loop;
		}
	}
	return xb(Array.from(n), new Set(e._nodes), e.historyValue);
}
function Hb(e, t) {
	return Qy(e, [...Yy(pb(e, t))]);
}
function Ub(e) {
	return !!e && typeof e == "object" && "machine" in e && "value" in e;
}
var Wb = function(e) {
	return py(e, this.value);
}, Gb = function(e) {
	return this.tags.has(e);
}, Kb = function(e) {
	let t = this.machine.getTransitionData(this, e);
	return !!t?.length && t.some((e) => e.target !== void 0 || e.actions.length);
}, qb = function() {
	let { _nodes: e, tags: t, machine: n, getMeta: r, toJSON: i, can: a, hasTag: o, matches: s, ...c } = this;
	return {
		...c,
		tags: Array.from(t)
	};
}, Jb = function() {
	return this._nodes.reduce((e, t) => (t.meta !== void 0 && (e[t.id] = t.meta), e), {});
};
function Yb(e, t) {
	return {
		status: e.status,
		output: e.output,
		error: e.error,
		machine: t,
		context: e.context,
		_nodes: e._nodes,
		value: Qy(t.root, e._nodes),
		tags: new Set(e._nodes.flatMap((e) => e.tags)),
		children: e.children,
		historyValue: e.historyValue || {},
		matches: Wb,
		hasTag: Gb,
		can: Kb,
		getMeta: Jb,
		toJSON: qb
	};
}
function Xb(e, t = {}) {
	return Yb({
		...e,
		...t
	}, e.machine);
}
function Zb(e, t) {
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
		context: Qb(o),
		children: p
	};
}
function Qb(e) {
	let t;
	for (let n in e) {
		let r = e[n];
		if (r && typeof r == "object") if ("sessionId" in r && "send" in r && "ref" in r) t ??= Array.isArray(e) ? e.slice() : { ...e }, t[n] = {
			xstate$$type: 1,
			id: r.id
		};
		else {
			let i = Qb(r);
			i !== r && (t ??= Array.isArray(e) ? e.slice() : { ...e }, t[n] = i);
		}
	}
	return t ?? e;
}
function $b(e, t, n, r, { event: i, id: a, delay: o }, { internalQueue: s }) {
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
function ex(e, t) {
	let { event: n, delay: r, id: i } = t;
	if (typeof r == "number") {
		e.defer(() => {
			let t = e.self;
			e.system.scheduler.schedule(t, t, n, r, i);
		});
		return;
	}
}
function tx(e, t) {
	function n(e, t) {}
	return n.type = "xstate.raise", n.event = e, n.id = t?.id, n.delay = t?.delay, n.resolve = $b, n.execute = ex, n;
}
//#endregion
//#region node_modules/xstate/dist/log-3d9d72a9.esm.js
function nx(e, { machine: t, context: n }, r, i) {
	let a = (a, o) => {
		if (typeof a == "string") {
			let s = Dy(t, a);
			if (!s) throw Error(`Actor logic '${a}' not implemented in machine '${t.id}'`);
			let c = Fy(s, {
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
		} else return Fy(a, {
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
			r._processingStatus !== My.Stopped && r.start();
		}), r;
	};
}
function rx(e, t, n, r, { assignment: i }) {
	if (!t.context) throw Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
	let a = {}, o = {
		context: t.context,
		event: n.event,
		spawn: nx(e, t, n.event, a),
		self: e.self,
		system: e.system
	}, s = {};
	if (typeof i == "function") s = i(o, r);
	else for (let e of Object.keys(i)) {
		let t = i[e];
		s[e] = typeof t == "function" ? t(o, r) : t;
	}
	return [
		Xb(t, {
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
function ix(e) {
	function t(e, t) {}
	return t.type = "xstate.assign", t.assignment = e, t.resolve = rx, t;
}
function ax(e, t, n, r, { event: i }) {
	return [
		t,
		{ event: typeof i == "function" ? i(n, r) : i },
		void 0
	];
}
function ox(e, { event: t }) {
	e.defer(() => e.emit(t));
}
function sx(e) {
	function t(e, t) {}
	return t.type = "xstate.emit", t.event = e, t.resolve = ax, t.execute = ox, t;
}
var cx = /*#__PURE__*/ function(e) {
	return e.Parent = "#_parent", e.Internal = "#_internal", e;
}({});
function lx(e, t, n, r, { to: i, event: a, id: o, delay: s }, c) {
	let l = t.machine.implementations.delays;
	if (typeof a == "string") throw Error(`Only event objects may be used with sendTo; use sendTo({ type: "${a}" }) instead`);
	let u = typeof a == "function" ? a(n, r) : a, d;
	if (typeof s == "string") {
		let e = l && l[s];
		d = typeof e == "function" ? e(n, r) : e;
	} else d = typeof s == "function" ? s(n, r) : s;
	let f = typeof i == "function" ? i(n, r) : i, p;
	if (typeof f == "string") {
		if (p = f === cx.Parent ? e.self._parent : f === cx.Internal ? e.self : f.startsWith("#_") ? t.children[f.slice(2)] : c.deferredActorIds?.includes(f) ? f : t.children[f], !p) throw Error(`Unable to send event to actor '${f}' from machine '${t.machine.id}'.`);
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
function ux(e, t, n) {
	typeof n.to == "string" && (n.to = t.children[n.to]);
}
function dx(e, t) {
	e.defer(() => {
		let { to: n, event: r, delay: i, id: a } = t;
		if (typeof i == "number") {
			e.system.scheduler.schedule(e.self, n, r, i, a);
			return;
		}
		e.system._relay(e.self, n, r.type === "xstate.error" ? ly(e.self.id, r.data) : r);
	});
}
function fx(e, t, n) {
	function r(e, t) {}
	return r.type = "xstate.sendTo", r.to = e, r.event = t, r.id = n?.id, r.delay = n?.delay, r.resolve = lx, r.retryResolve = ux, r.execute = dx, r;
}
function px(e, t) {
	return fx(cx.Parent, e, t);
}
function mx(e, t, n, r, { collect: i }) {
	let a = [], o = function(e) {
		a.push(e);
	};
	return o.assign = (...e) => {
		a.push(ix(...e));
	}, o.cancel = (...e) => {
		a.push(Ry(...e));
	}, o.raise = (...e) => {
		a.push(tx(...e));
	}, o.sendTo = (...e) => {
		a.push(fx(...e));
	}, o.sendParent = (...e) => {
		a.push(px(...e));
	}, o.spawnChild = (...e) => {
		a.push(Vy(...e));
	}, o.stopChild = (...e) => {
		a.push(Wy(...e));
	}, o.emit = (...e) => {
		a.push(sx(...e));
	}, i({
		context: n.context,
		event: n.event,
		enqueue: o,
		check: (e) => Gy(e, t.context, n.event, t),
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
	return t.type = "xstate.enqueueActions", t.collect = e, t.resolve = mx, t;
}
//#endregion
//#region node_modules/xstate/dist/xstate.esm.js
function hx(e, t) {
	let n = yy(t);
	if (!n.includes(e.type)) {
		let t = n.length === 1 ? `type "${n[0]}"` : `one of types "${n.join("\", \"")}"`;
		throw Error(`Expected event ${JSON.stringify(e)} to have ${t}`);
	}
}
var gx = /* @__PURE__ */ new WeakMap();
function _x(e, t, n) {
	let r = gx.get(e);
	return r ? t in r || (r[t] = n()) : (r = { [t]: n() }, gx.set(e, r)), r[t];
}
var vx = {}, yx = (e) => typeof e == "string" ? { type: e } : typeof e == "function" ? "resolve" in e ? { type: e.type } : { type: e.name } : e, bx = class e {
	constructor(t, n) {
		if (this.config = t, this.key = void 0, this.id = void 0, this.type = void 0, this.path = void 0, this.states = void 0, this.history = void 0, this.entry = void 0, this.exit = void 0, this.parent = void 0, this.machine = void 0, this.meta = void 0, this.output = void 0, this.order = -1, this.description = void 0, this.tags = [], this.transitions = void 0, this.always = void 0, this.parent = n._parent, this.key = n._key, this.machine = n._machine, this.path = this.parent ? this.parent.path.concat(this.key) : [], this.id = this.config.id || [this.machine.id, ...this.path].join("."), this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic"), this.description = this.config.description, this.order = this.machine.idMap.size, this.machine.idMap.set(this.id, this), this.states = this.config.states ? _y(this.config.states, (t, n) => new e(t, {
			_parent: this,
			_key: n,
			_machine: this.machine
		})) : vx, this.type === "compound" && !this.config.initial) throw Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
		this.history = this.config.history === !0 ? "shallow" : this.config.history || !1, this.entry = yy(this.config.entry).slice(), this.exit = yy(this.config.exit).slice(), this.meta = this.config.meta, this.output = this.type === "final" || !this.parent ? this.config.output : void 0, this.tags = yy(t.tags).slice();
	}
	_initialize() {
		this.transitions = ib(this), this.config.always && (this.always = Cy(this.config.always).map((e) => rb(this, "", e))), Object.keys(this.states).forEach((e) => {
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
				actions: this.initial.actions.map(yx),
				eventType: null,
				reenter: !1,
				toJSON: () => ({
					target: this.initial.target.map((e) => `#${e.id}`),
					source: `#${this.id}`,
					actions: this.initial.actions.map(yx),
					eventType: null
				})
			} : void 0,
			history: this.history,
			states: _y(this.states, (e) => e.definition),
			on: this.on,
			transitions: [...this.transitions.values()].flat().map((e) => ({
				...e,
				actions: e.actions.map(yx)
			})),
			entry: this.entry.map(yx),
			exit: this.exit.map(yx),
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
		return _x(this, "invoke", () => yy(this.config.invoke).map((e, t) => {
			let { src: n, systemId: r } = e, i = e.id ?? Ey(this.id, t), a = typeof n == "string" ? n : `xstate.invoke.${Ey(this.id, t)}`;
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
		return _x(this, "on", () => [...this.transitions].flatMap(([e, t]) => t.map((t) => [e, t])).reduce((e, [t, n]) => (e[t] = e[t] || [], e[t].push(n), e), {}));
	}
	get after() {
		return _x(this, "delayedTransitions", () => nb(this));
	}
	get initial() {
		return _x(this, "initial", () => ab(this, this.config.initial));
	}
	next(e, t) {
		let n = t.type, r = [], i, a = _x(this, `candidates-${n}`, () => tb(this, n));
		for (let o of a) {
			let { guard: a } = o, s = e.context, c = !1;
			try {
				c = !a || Gy(a, s, t, e);
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
		return _x(this, "events", () => {
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
}, xx = class e {
	constructor(e, t) {
		this.config = e, this.version = void 0, this.schemas = void 0, this.implementations = void 0, this.__xstatenode = !0, this.idMap = /* @__PURE__ */ new Map(), this.root = void 0, this.id = void 0, this.states = void 0, this.events = void 0, this.id = e.id || "(machine)", this.implementations = {
			actors: t?.actors ?? {},
			actions: t?.actions ?? {},
			delays: t?.delays ?? {},
			guards: t?.guards ?? {}
		}, this.version = this.config.version, this.schemas = this.config.schemas, this.transition = this.transition.bind(this), this.getInitialSnapshot = this.getInitialSnapshot.bind(this), this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this), this.restoreSnapshot = this.restoreSnapshot.bind(this), this.start = this.start.bind(this), this.root = new bx(e, {
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
		let t = Hb(this.root, e.value), n = Yy(pb(this.root, t));
		return Yb({
			_nodes: [...n],
			context: e.context || {},
			children: {},
			status: $y(n, this.root) ? "done" : e.status || "active",
			output: e.output,
			error: e.error,
			historyValue: e.historyValue
		}, this);
	}
	transition(e, t, n) {
		return Rb(e, t, n, []).snapshot;
	}
	microstep(e, t, n) {
		return Rb(e, t, n, []).microstates;
	}
	getTransitionData(e, t) {
		return _b(this.root, e.value, e, t) || [];
	}
	getPreInitialState(e, t, n) {
		let { context: r } = this.config, i = Yb({
			context: typeof r != "function" && r ? r : {},
			_nodes: [this.root],
			children: {},
			status: "active"
		}, this);
		return typeof r == "function" ? Lb(i, t, e, [ix(({ spawn: e, event: t, self: n }) => r({
			spawn: e,
			input: t.input,
			self: n
		}))], n, void 0) : i;
	}
	getInitialSnapshot(e, t) {
		let n = uy(t), r = [], i = this.getPreInitialState(e, n, r), { snapshot: a } = Rb(Db([{
			target: [...ub(this.root)],
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
		let t = my(e), n = t.slice(1), r = eb(t[0]) ? t[0].slice(1) : t[0], i = this.idMap.get(r);
		if (!i) throw Error(`Child state node '#${r}' does not exist on machine '${this.id}'`);
		return fb(i, n);
	}
	get definition() {
		return this.root.definition;
	}
	toJSON() {
		return this.definition;
	}
	getPersistedSnapshot(e, t) {
		return Zb(e, t);
	}
	restoreSnapshot(e, t) {
		let n = {}, r = e.children;
		Object.keys(r).forEach((e) => {
			let i = r[e], a = i.snapshot, o = i.src, s = typeof o == "string" ? Dy(this, o) : o;
			s && (n[e] = Fy(s, {
				id: e,
				parent: t.self,
				syncSnapshot: i.syncSnapshot,
				snapshot: a,
				src: o,
				systemId: i.systemId
			}));
		});
		let i = Yb({
			...e,
			children: n,
			_nodes: Array.from(Yy(pb(this.root, e.value)))
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
function Sx(e, t) {
	return new xx(e, t);
}
function Cx({ schemas: e, actors: t, actions: n, guards: r, delays: i }) {
	return { createMachine: (a) => Sx({
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
//#region node_modules/@xstate/react/dist/xstate-react.esm.js
var wx = (e, t) => {
	t(e);
	let n = e.getSnapshot().children;
	n && Object.values(n).forEach((e) => {
		wx(e, t);
	});
};
function Tx(e) {
	let t = [];
	wx(e, (e) => {
		t.push([e, e.getSnapshot()]), e.observers = /* @__PURE__ */ new Set();
	});
	let n = e.system.getSnapshot?.();
	e.stop(), e.system._snapshot = n, t.forEach(([e, t]) => {
		e._processingStatus = 0, e._snapshot = t;
	});
}
function Ex(e, ...[t]) {
	let [[n, r], i] = A(() => {
		let n = Fy(e, t);
		return [e.config, n];
	});
	if (e.config !== n) {
		let n = Fy(e, {
			...t,
			snapshot: r.getPersistedSnapshot({ __unsafeAllowInlineActors: !0 })
		});
		i([e.config, n]), r = n;
	}
	return Xv(() => {
		r.logic.implementations = e.implementations;
	}), r;
}
function Dx(e, ...[t, n]) {
	let r = Ex(e, t);
	return w(() => {
		if (!n) return;
		let e = r.subscribe(Ty(n));
		return () => {
			e.unsubscribe();
		};
	}, [n]), w(() => (r.start(), () => {
		Tx(r);
	}), [r]), r;
}
function Ox(e, t) {
	return e === t;
}
function kx(e, t, n = Ox) {
	let r = S((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = S(() => e?.getSnapshot(), [e]);
	return ce(r, i, i, t, n);
}
function Ax(e, t) {
	let n = /*#__PURE__*/ p.createContext(null), r = n.Provider;
	function i({ children: n, logic: i = e, machine: a, options: o }) {
		if (a) throw Error("The \"machine\" prop has been deprecated. Please use \"logic\" instead.");
		let s = Dx(i, {
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
		return kx(a(), e, t);
	}
	return {
		Provider: i,
		useActorRef: a,
		useSelector: o
	};
}
//#endregion
//#region src/game/reducers/pull-card-from-deck/index.ts
var jx = (e, t, n) => {
	let r = z.getPlayer(e, t), i = [...r.hand], a = [...r.deck], o = [...r.discardPile];
	if (n >= a.length) throw new Rt(n, t);
	let [s] = a.slice(n, n + 1);
	if (!s) throw new Rt(n, t);
	return a = [...a.slice(0, n), ...a.slice(n + 1)], i = [...i, s], a.length === 0 && (a = Mt.shuffle(o), o = []), e = yt(e, t, {
		deck: a,
		hand: i,
		discardPile: o
	}), e;
}, Mx = (e, t) => {
	let n = z.getPlayer(e, t), r = z.findCropIndexesInDeck(e, t, n.deck.length), i = Mt.chooseElement(r);
	if (i === void 0) throw new Ft("Could not select a crop card for starting hand: No crop cards available in deck.");
	e = jx(e, t, i);
	let a = z.getPlayer(e, t);
	return e = yt(e, t, { hand: Mt.shuffle(a.hand) }), e = Nt(e, t, 6), e;
}, Nx = (e, t) => {
	let { deck: n } = z.getPlayer(e, t);
	return yt(e, t, { deck: Mt.shuffle(n) });
}, Px = new class {
	constructor() {
		this.playerSeed = (e) => {
			let { deck: t, id: n } = e;
			if (t.length !== 60) throw new Ft(`Deck for player ${n} contains ${t.length} cards but must contain 60 cards instead`);
			if (!t.every(pn)) throw new Ft(`Deck for player ${n} contain invalid cards`);
			if (!t.some(sn)) throw new Ft(`Deck for player ${n} does not contain any crops`);
			return !0;
		};
	}
}(), Fx = new class {
	buildField(e = {}) {
		return {
			cards: [],
			...e
		};
	}
	buildPlayer(e = {}) {
		return {
			id: ot(),
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
	buildMatch(e = {}, t = ot()) {
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
		return Object.keys(r).length === 0 && (a = vt(a, { players: {
			...a.table.players,
			[t]: this.buildPlayer({ id: t })
		} })), a;
	}
	buildMatchForSession(e, t = e[0]?.id) {
		let n = this.buildMatch({}, t);
		for (let t of e) {
			Px.playerSeed(t);
			let r = this.buildPlayer({
				...t,
				funds: Math.floor(n.table.communityFund / e.length)
			});
			n = vt(n, { players: {
				...n.table.players,
				[r.id]: r
			} }), n = Nx(n, r.id), n = Mx(n, r.id);
		}
		return n = vt(n, { communityFund: n.table.communityFund % e.length }), n = _t(n, { currentPlayerId: n.sessionOwnerPlayerId }), n;
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
}(), Ix = () => ({
	botState: {
		cropCardIndicesToHarvest: [],
		cropsToPlayDuringTurn: 0,
		fieldCropIndicesToWaterDuringTurn: [],
		toolCardsThatCanBePlayed: 0
	},
	match: Fx.buildMatch({
		cardsToDrawAtTurnStart: 1,
		eventCardsThatCanBePlayed: 1,
		selectedWaterCardInHandIdx: -1,
		winner: null
	}),
	shell: { triggerNotification: () => {} }
}), Lx = new class {
	getNumberOfCropCardsToPlay(e, t, { minimumCropsToPlay: n = 0 } = {}) {
		let r = z.getPlayer(e, t), i = z.findCropIndexesInPlayerHand(e, t), a = Math.max(n, Mt.chooseIntegerBetween(0, i.length)), o = 6 - r.field.cards.filter((e) => !!e).length;
		return Math.min(o, a, i.length);
	}
	getNumberOfEventCardsToPlay(e, t) {
		return +(z.findEventIndexesInPlayerHand(e, t).length > 0);
	}
	getNumberOfToolCardsToPlay(e, t) {
		let n = z.findToolIndexesInPlayerHand(e, t);
		return Mt.chooseIntegerBetween(0, n.length);
	}
	getEventCardIndexToPlay(e, t) {
		let n = z.findEventIndexesInPlayerHand(e, t);
		return Mt.chooseElement(n);
	}
	getToolCardIndexToPlay(e, t) {
		let n = z.findToolIndexesInPlayerHand(e, t);
		return Mt.chooseElement(n);
	}
	getCropCardIndicesToWater(e, t) {
		let { field: { cards: n }, hand: r } = z.getPlayer(e, t), i = [], { length: a } = r.filter((e) => Ze(e));
		for (let e = 0; e < n.length && i.length !== a; e++) {
			let t = n[e];
			ln(t) && t.waterCards < t.instance.waterToMature && t.wasWateredDuringTurn === !1 && (i = [...i, e]);
		}
		return i;
	}
	getCropCardIndicesToHarvest(e, t) {
		let { field: { cards: n } } = z.getPlayer(e, t), r = [];
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			ln(t) && t.waterCards >= t.instance.waterToMature && (r = [...r, e]);
		}
		return r;
	}
	getOpenFieldPosition(e, t) {
		let { field: n } = z.getPlayer(e, t), { cards: r } = n, i = [];
		for (let e = 0; e < Math.max(6, r.length); e++) r[e] === void 0 && (i = [...i, e]);
		return Mt.chooseElement(i);
	}
}(), Rx = (e, t, n) => {
	let r = z.getPlayer(e, t), i = [...n, ...r.cardsPlayedDuringTurn];
	return e = yt(e, t, { cardsPlayedDuringTurn: i }), e;
}, zx = (e, t) => {
	let n = (t, n) => {
		let r = z.getPlayer(e, t).hand[n];
		return R(r), Rx(e, t, [r]);
	};
	switch (t.type) {
		case F.SELECT_CARD_POSITION: {
			let { currentPlayerId: r } = e;
			R(r), e = n(r, t.cardIdxInHand);
			break;
		}
		case F.PLAY_EVENT:
		case F.PLAY_TOOL:
		case F.PLAY_WATER: {
			let { currentPlayerId: r } = e;
			R(r);
			let i = z.getPlayer(e, r).hand[t.cardIdxInHand];
			if (R(i), $e(i) && i.isPlantable) break;
			e = n(r, t.cardIdxInHand);
			break;
		}
		default:
	}
	return e;
}, Bx = { [L.CHOOSING_CARD_POSITION]: {
	on: {
		[F.SELECT_CARD_POSITION]: L.PLANTING_CARD,
		[F.OPERATION_ABORTED]: [{
			guard: et.IS_SETUP_PHASE,
			target: L.WAITING_FOR_PLAYER_SETUP_ACTION
		}, { target: L.WAITING_FOR_PLAYER_TURN_ACTION }]
	},
	entry: $(({ event: e, enqueue: t, context: { match: n } }) => {
		switch (e.type) {
			case F.PLAY_PLANTABLE_TOOL: {
				let { currentPlayerId: r, sessionOwnerPlayerId: i } = n, { playerId: a, cardIdxInHand: o } = e;
				if (R(r), r !== i) {
					let e = Lx.getOpenFieldPosition(n, r);
					R(e), t.raise({
						type: F.SELECT_CARD_POSITION,
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
			case F.SELECT_CARD_POSITION:
				n = zx(n, e);
				break;
		}
		t.assign({ match: n });
	})
} }, Vx = { [L.GAME_OVER]: {
	on: {
		[F.INIT]: { actions: $(({ event: e, enqueue: t }) => {
			hx(e, F.INIT);
			let { playerSeeds: n, userPlayerId: r } = e, i = Fx.buildMatchForSession(n, r), a = Ix();
			t.assign({
				...a,
				match: i
			}), t.raise({ type: F.PROMPT_PLAYER_FOR_SETUP_ACTION });
		}) },
		[F.PROMPT_PLAYER_FOR_SETUP_ACTION]: L.WAITING_FOR_PLAYER_SETUP_ACTION
	},
	entry: $(({ event: e, enqueue: t, context: { match: n } }) => {
		hx(e, F.PLAYER_RAN_OUT_OF_FUNDS);
		let r = Object.keys(n.table.players).find((t) => t !== e.playerId);
		if (r === void 0) throw new Ft("Winner could not be determined");
		t.assign({ match: {
			...n,
			winner: r
		} });
	})
} }, Hx = (e) => {
	let t = z.playerIds(e), n = z.nextPlayerIndex(e);
	return e = _t(e, { currentPlayerId: t[n] }), e;
}, Ux = new class {
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
}(), Wx = (e, t, n, r) => {
	let { field: i } = z.getPlayer(e, t), { cards: a } = i;
	if (z.fullPlots(e, t).length >= 6) throw new Lt(t);
	if (r === -1) throw new It("fieldIdxToPlace must not be -1");
	return a = Ux.replaceAt(a, r, n), e = bt(e, t, { cards: a }), e;
}, Gx = (e, t, n, r) => {
	let { hand: i } = z.getPlayer(e, t), a = i[n];
	if (!a) throw new Rt(n, t);
	let o = Ux.removeAt(i, n), s;
	if (sn(a)) s = {
		instance: a,
		wasWateredDuringTurn: !1,
		waterCards: 0
	};
	else if ($e(a)) s = { instance: a };
	else throw new zt(`${a.id} is not a plantable card.`);
	return e = Wx(e, t, s, r), e = yt(e, t, { hand: o }), e;
}, Kx = { [L.PERFORMING_BOT_SETUP_ACTION]: {
	on: {
		[F.START_TURN]: {
			target: L.WAITING_FOR_PLAYER_TURN_ACTION,
			guard: et.IS_SETUP_PHASE
		},
		[F.PROMPT_BOT_FOR_SETUP_ACTION]: { actions: $(({ event: e, context: { match: t, botState: n, botState: { cropsToPlayDuringTurn: r } }, enqueue: i }) => {
			hx(e, F.PROMPT_BOT_FOR_SETUP_ACTION);
			let { currentPlayerId: a } = t;
			if (R(a), z.getPlayer(t, a).field.cards.length > 0 && r === 0) i.raise({ type: F.START_TURN });
			else {
				r === 0 && (r = Lx.getNumberOfCropCardsToPlay(t, a, { minimumCropsToPlay: 1 }));
				let e = z.findCropIndexesInPlayerHand(t, a), n = Mt.chooseElement(e);
				if (n === void 0) throw new Ft(`Expected crops in hand but none were found for bot player ${a}`);
				i.raise({
					type: F.PLAY_CROP,
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
		[F.PLAY_CROP]: { actions: $(({ event: e, context: { match: t }, enqueue: n }) => {
			hx(e, F.PLAY_CROP);
			let { cardIdxInHand: r } = e, { currentPlayerId: i } = t;
			R(i), t = zx(t, e);
			let a = Lx.getOpenFieldPosition(t, i);
			if (a === void 0) throw new It(`${F.PLAY_CROP} event occurred for a full field`);
			n.raise({
				type: F.SELECT_CARD_POSITION,
				playerId: i,
				cardIdxInHand: r,
				fieldIdxToPlace: a
			}), n.assign({ match: t });
		}) },
		[F.SELECT_CARD_POSITION]: { actions: $(({ event: e, context: { match: t, botState: n, botState: { cropsToPlayDuringTurn: r } }, enqueue: i }) => {
			hx(e, F.SELECT_CARD_POSITION);
			let { cardIdxInHand: a, playerId: o, fieldIdxToPlace: s } = e, { currentPlayerId: c } = t;
			R(c), t = zx(t, e), t = Gx(t, o, a, s), r--, i.raise({ type: F.PROMPT_BOT_FOR_SETUP_ACTION }), i.assign({
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
		R(n), e = Hx(e), t.raise({ type: F.PROMPT_BOT_FOR_SETUP_ACTION }), t.assign({ match: e });
	})
} }, qx = new class {
	constructor() {
		this.getCropBaseValue = (e) => e.waterToMature * 2, this.getCropSaleValue = (e, t) => {
			let n = this.getCropBaseValue(t);
			return t.id === e.buffedCrop?.crop.id && (n *= e.buffedCrop.multiplier), t.id === e.nerfedCrop?.crop.id && (n *= e.nerfedCrop.multiplier), n = Math.floor(n), Math.min(n, e.table.communityFund);
		};
	}
}(), Jx = (e, t) => {
	let { communityFund: n } = e.table, r = Math.max(0, n + t);
	return e = vt(e, { communityFund: r }), e;
}, Yx = (e, t, n) => {
	let { funds: r } = z.getPlayer(e, t), i = Math.max(0, r + n);
	return e = yt(e, t, { funds: i }), e;
}, Xx = (e, t, n) => {
	let r = [n, ...z.getPlayer(e, t).discardPile];
	return e = yt(e, t, { discardPile: r }), e;
}, Zx = (e, t, n) => {
	let { field: r } = z.getPlayer(e, t), i = r.cards[n];
	if (!i) throw new Rt(n, t);
	let { cards: a } = r;
	return a = Ux.replaceAt(a, n, void 0), e = bt(e, t, { cards: a }), e = Xx(e, t, i.instance), e;
}, Qx = (e, t, n) => {
	let r = z.getPlayedCardFromField(e, t, n);
	qt(r);
	let i = qx.getCropSaleValue(e, r.instance);
	return e = Yx(e, t, i), e = Jx(e, -i), e = Zx(e, t, n), e;
}, $x = (e, t, n) => {
	let { hand: r } = z.getPlayer(e, t), i = r[n];
	if (!i) throw new Rt(n, t);
	let a = Ux.removeAt(r, n);
	return e = yt(e, t, { hand: a }), e = Xx(e, t, i), e;
}, eS = /* @__PURE__ */ De((/* @__PURE__ */ we(((e, t) => {
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
})))()), tS = (e, t, n) => {
	let { funds: r } = z.getPlayer(e, n), { communityFund: i } = e.table, a = (0, eS.default)(t, -i, r);
	return e = Yx(e, n, -a), e = Jx(e, a), e;
}, nS = (e) => {
	let t = Object.values(e.table.players).reduce((e, t) => [
		...e,
		...t.deck,
		...t.hand,
		...t.discardPile,
		...t.field.cards.filter((e) => e !== void 0).map((e) => e.instance)
	], []), n = new Set(t.filter(sn).map((e) => e.id)), r = Object.values(gt).filter((e) => n.has(e.id)), [i, a] = Mt.shuffle(r);
	return e = _t(e, {
		buffedCrop: i ? {
			crop: i,
			multiplier: 2
		} : null,
		nerfedCrop: a ? {
			crop: a,
			multiplier: .5
		} : null
	}), e;
}, rS = (e, t, n = 1) => {
	if (e = _t(e, { turn: e.turn + 1 }), e = yt(e, t, { cardsPlayedDuringTurn: [] }), e = tS(e, 5, t), z.getPlayer(e, t).funds === 0) throw new Pt(t);
	e = Nt(e, t, n);
	let r = z.getPlayer(e, t).field.cards;
	for (let n = 0; n < r.length; n++) {
		let i = r[n];
		ln(i) && (e = Yt(e, t, n, { wasWateredDuringTurn: !1 }));
	}
	return e = nS(e), e;
}, iS = (e) => (t) => {
	try {
		return e(t);
	} catch (e) {
		if (e instanceof Pt) {
			let { enqueue: n } = t;
			n.raise({
				type: F.PLAYER_RAN_OUT_OF_FUNDS,
				playerId: e.playerId
			});
		} else throw console.error(e), new Ft("Unexpected bot logic error");
	}
}, aS = { [L.PERFORMING_BOT_TURN_ACTION]: {
	initial: I.INITIALIZING,
	exit: $(({ event: e, context: { botState: t, match: n }, enqueue: r }) => {
		n = zx(n, e);
		let { currentBotTurnPhase: i } = t;
		switch (e.type) {
			case F.SELECT_CARD_POSITION:
				i = I.PLAYING_CROPS;
				break;
			case F.PLAY_EVENT:
				i = I.PLAYING_EVENTS;
				break;
			case F.PLAY_TOOL:
				i = I.PLAYING_TOOLS;
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
		[F.PLAYER_RAN_OUT_OF_FUNDS]: L.GAME_OVER,
		[F.SELECT_CARD_POSITION]: L.PLANTING_CARD,
		[F.PLAY_EVENT]: L.PLAYING_EVENT,
		[F.PLAY_TOOL]: L.PLAYING_TOOL,
		[F.START_TURN]: L.WAITING_FOR_PLAYER_TURN_ACTION
	},
	states: {
		[I.INITIALIZING]: {
			on: { [F.BOT_TURN_INITIALIZED]: [
				{
					guard: et.IS_BOT_PHASE_PLAYING_EVENTS,
					target: I.PLAYING_EVENTS
				},
				{
					guard: et.IS_BOT_PHASE_PLAYING_TOOLS,
					target: I.PLAYING_TOOLS
				},
				{ target: I.PLAYING_CROPS }
			] },
			entry: $(iS(({ event: e, context: t, context: { botState: n, match: r }, enqueue: i }) => {
				switch (e.type) {
					case F.START_TURN: {
						let e = r;
						r = Hx(r);
						let { currentPlayerId: i } = r;
						R(i);
						let a = e.table.players[i];
						if (a) for (let e of a.cardsPlayedDuringTurn) $e(e) && e.onStartFollowingTurn && (r = e.onStartFollowingTurn({
							...t,
							match: r
						}).match);
						r = rS(r, i, r.cardsToDrawAtTurnStart), t = gS.applyDailyEffects({
							...t,
							match: r
						}), r = t.match, r = {
							...r,
							eventCardsThatCanBePlayed: Lx.getNumberOfEventCardsToPlay(r, i)
						}, n = {
							...n,
							cropsToPlayDuringTurn: Lx.getNumberOfCropCardsToPlay(r, i),
							currentBotTurnPhase: void 0,
							toolCardsThatCanBePlayed: Lx.getNumberOfToolCardsToPlay(r, i)
						};
						break;
					}
					default:
				}
				i.assign({
					botState: n,
					match: r
				}), i.raise({ type: F.BOT_TURN_INITIALIZED });
			}))
		},
		[I.PLAYING_CROPS]: {
			on: {
				[F.PLAY_CROP]: I.PLACING_CROP,
				[F.BOT_TURN_PHASE_COMPLETE]: I.WATERING_CROPS
			},
			entry: $(iS(({ context: { botState: { cropsToPlayDuringTurn: e }, match: t }, enqueue: n }) => {
				if (e > 0) {
					let { currentPlayerId: e } = t;
					R(e);
					let r = z.findCropIndexesInPlayerHand(t, e), i = Mt.chooseElement(r);
					if (i === void 0) throw new Ft(`areCropsToPlay is true but there are no crops in the hand of bot player ${e}`);
					n.raise({
						type: F.PLAY_CROP,
						playerId: e,
						cardIdxInHand: i
					}, { delay: 750 });
				} else n.raise({ type: F.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[I.PLACING_CROP]: {
			on: { [F.BOT_TURN_PHASE_COMPLETE]: I.PLAYING_CROPS },
			entry: $(iS(({ context: { botState: e, match: t }, enqueue: n }) => {
				let { cropsToPlayDuringTurn: r } = e;
				if (r > 0) {
					let { currentPlayerId: e } = t;
					R(e);
					let r = z.findCropIndexesInPlayerHand(t, e), i = Mt.chooseElement(r);
					if (i === void 0) throw new Ft(`areCropsToPlay is true but there are no crops in the hand of bot player ${e}`);
					let a = Lx.getOpenFieldPosition(t, e);
					if (a === void 0) throw new It(`${F.BOT_TURN_PHASE_COMPLETE} event occurred for a full field`);
					n.raise({
						type: F.SELECT_CARD_POSITION,
						playerId: e,
						cardIdxInHand: i,
						fieldIdxToPlace: a
					}, { delay: 750 });
				} else n.raise({ type: F.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[I.WATERING_CROPS]: {
			on: {
				[F.PLAY_WATER]: I.WATERING_CROP,
				[F.BOT_TURN_PHASE_COMPLETE]: I.PLAYING_EVENTS
			},
			entry: $(iS(({ context: { botState: e, match: t }, enqueue: n }) => {
				let { currentPlayerId: r } = t;
				R(r);
				let i = Lx.getCropCardIndicesToWater(t, r);
				if (i.length > 0) {
					let e = z.findWaterIndexesInPlayerHand(t, r);
					e[0] !== void 0 && n.raise({
						type: F.PLAY_WATER,
						cardIdxInHand: e[0],
						playerId: r
					}, { delay: 750 });
				} else n.raise({ type: F.BOT_TURN_PHASE_COMPLETE });
				n.assign({ botState: {
					...e,
					fieldCropIndicesToWaterDuringTurn: i
				} });
			}))
		},
		[I.WATERING_CROP]: {
			on: { [F.BOT_TURN_PHASE_COMPLETE]: I.WATERING_CROPS },
			entry: $(({ event: e, context: { match: t, botState: { fieldCropIndicesToWaterDuringTurn: n }, shell: { triggerNotification: r } }, enqueue: i }) => {
				t = zx(t, e);
				let { currentPlayerId: a } = t;
				R(a);
				let o = z.getPlayer(t, a), s = o.hand.findIndex((e) => Ze(e)), [c] = n;
				R(c, `fieldCropIndicesToWaterDuringTurn is empty in ${I.WATERING_CROP}`);
				let l = o.field.cards[c];
				qt(l);
				let u = {
					...l,
					wasWateredDuringTurn: !0,
					waterCards: l.waterCards + 1
				};
				t = Yt(t, a, c, u), t = $x(t, a, s), r({
					type: tt.CROP_WATERED,
					payload: { cropWatered: l.instance }
				}), i.raise({ type: F.BOT_TURN_PHASE_COMPLETE }), i.assign({ match: t });
			})
		},
		[I.PLAYING_EVENTS]: {
			on: { [F.BOT_TURN_PHASE_COMPLETE]: I.PLAYING_TOOLS },
			entry: $(iS(({ context: { match: e }, enqueue: t }) => {
				if (e.eventCardsThatCanBePlayed > 0) {
					let { currentPlayerId: n } = e;
					R(n);
					let r = Lx.getEventCardIndexToPlay(e, n);
					if (r === void 0) throw new Ft(`areEventCardsToPlay is true but there are no events in the hand of bot player ${n}`);
					t.raise({
						type: F.PLAY_EVENT,
						cardIdxInHand: r,
						playerId: n
					}, { delay: 750 });
				} else t.raise({ type: F.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[I.PLAYING_TOOLS]: {
			on: { [F.BOT_TURN_PHASE_COMPLETE]: I.HARVESTING_CROPS },
			entry: $(iS(({ context: { botState: e, match: t }, enqueue: n }) => {
				if (e.toolCardsThatCanBePlayed > 0) {
					let { currentPlayerId: e } = t;
					R(e);
					let r = Lx.getToolCardIndexToPlay(t, e);
					if (r === void 0) throw new Ft(`areToolsToPlay is true but there are no tools in the hand of bot player ${e}`);
					let i = t.table.players[e]?.hand[r];
					R(i, "toolCardInstance is undefined"), Ht(i.id);
					let a = Zt[i.id], o = a.isPlantable && z.fullPlots(t, e).length < 6;
					if (!a.isPlantable || o) {
						n.raise({
							type: F.PLAY_TOOL,
							cardIdxInHand: r,
							playerId: e
						}, { delay: 750 });
						return;
					}
				}
				n.raise({ type: F.BOT_TURN_PHASE_COMPLETE });
			}))
		},
		[I.HARVESTING_CROPS]: {
			on: {
				[F.HARVEST_CROP]: I.HARVESTING_CROP,
				[F.BOT_TURN_PHASE_COMPLETE]: I.DONE
			},
			entry: $(iS(({ context: { botState: e, match: t }, enqueue: n }) => {
				let { currentPlayerId: r } = t;
				R(r);
				let i = Lx.getCropCardIndicesToHarvest(t, r);
				i.length > 0 ? i[0] !== void 0 && n.raise({
					type: F.HARVEST_CROP,
					playerId: r,
					cropIdxInFieldToHarvest: i[0]
				}, { delay: 750 }) : n.raise({ type: F.BOT_TURN_PHASE_COMPLETE }), n.assign({ botState: {
					...e,
					cropCardIndicesToHarvest: i
				} });
			}))
		},
		[I.HARVESTING_CROP]: {
			on: { [F.BOT_TURN_PHASE_COMPLETE]: I.HARVESTING_CROPS },
			entry: $(({ context: { match: e, botState: { cropCardIndicesToHarvest: [t] }, shell: { triggerNotification: n } }, enqueue: r }) => {
				let { currentPlayerId: i } = e;
				if (R(i), t !== void 0) {
					let r = z.getPlayer(e, i).field.cards[t];
					qt(r), e = Qx(e, i, t), n({
						type: tt.CROP_HARVESTED,
						payload: { cropHarvested: r.instance }
					});
				}
				r.raise({ type: F.BOT_TURN_PHASE_COMPLETE }), r.assign({ match: e });
			})
		},
		[I.DONE]: {
			entry: $(({ enqueue: e }) => {
				e.raise({ type: F.START_TURN });
			}),
			type: "final"
		}
	}
} }, oS = { [L.PLANTING_CARD]: {
	on: {
		[F.PROMPT_PLAYER_FOR_TURN_ACTION]: [{
			guard: et.IS_SETUP_PHASE,
			target: L.WAITING_FOR_PLAYER_SETUP_ACTION
		}, { target: L.WAITING_FOR_PLAYER_TURN_ACTION }],
		[F.PROMPT_BOT_FOR_TURN_ACTION]: L.PERFORMING_BOT_TURN_ACTION,
		[F.OPERATION_ABORTED]: L.WAITING_FOR_PLAYER_TURN_ACTION
	},
	entry: $(({ event: e, context: { botState: t, botState: { cropsToPlayDuringTurn: n, toolCardsThatCanBePlayed: r }, match: i, shell: { triggerNotification: a } }, enqueue: o }) => {
		hx(e, F.SELECT_CARD_POSITION);
		let { playerId: s, cardIdxInHand: c, fieldIdxToPlace: l } = e;
		try {
			let e = z.getCardInstanceFromHand(i, s, c);
			i = Gx(i, s, c, l);
			let { currentPlayerId: t, sessionOwnerPlayerId: u } = i;
			if (t === u) $e(e) && a({
				type: tt.TOOL_CARD_PLAYED,
				payload: { toolCard: e }
			}), o.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION });
			else {
				switch (e.type) {
					case P.CROP:
						n > 0 && n--;
						break;
					case P.TOOL: r > 0 && r--;
				}
				o.raise({ type: F.PROMPT_BOT_FOR_TURN_ACTION });
			}
		} catch (e) {
			console.error(e), o.raise({ type: F.OPERATION_ABORTED });
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
			case F.OPERATION_ABORTED:
				r = {
					...r,
					selectedWaterCardInHandIdx: -1
				};
				break;
			default:
		}
		n.assign({ match: r });
	})
} }, sS = { [L.PLAYER_WATERING_CROP]: {
	on: {
		[F.SELECT_CROP_TO_WATER]: {
			target: L.WAITING_FOR_PLAYER_TURN_ACTION,
			guard: et.IS_SELECTED_IDX_VALID
		},
		[F.OPERATION_ABORTED]: L.WAITING_FOR_PLAYER_TURN_ACTION
	},
	entry: $(({ event: e, context: { match: t }, enqueue: n }) => {
		switch (e.type) {
			case F.PLAY_WATER: {
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
			case F.SELECT_CROP_TO_WATER: {
				let { playerId: r, waterCardInHandIdx: a, cropIdxInFieldToWater: o } = e, s = z.getPlayer(t, r).field.cards[o];
				qt(s);
				let c = {
					...s,
					wasWateredDuringTurn: !0,
					waterCards: s.waterCards + 1
				};
				t = Yt(t, r, o, c), t = $x(t, r, a), i = -1, n({
					type: tt.CROP_WATERED,
					payload: { cropWatered: s.instance }
				});
				break;
			}
			case F.OPERATION_ABORTED:
				i = -1;
				break;
			default:
		}
		r.assign({ match: {
			...t,
			selectedWaterCardInHandIdx: i
		} });
	})
} }, cS = { [L.PLAYING_EVENT]: {
	on: {
		[F.PROMPT_PLAYER_FOR_TURN_ACTION]: L.WAITING_FOR_PLAYER_TURN_ACTION,
		[F.PROMPT_BOT_FOR_TURN_ACTION]: L.PERFORMING_BOT_TURN_ACTION
	},
	entry: $(({ event: e, context: t, context: { match: n, shell: { triggerNotification: r } }, enqueue: i }) => {
		hx(e, F.PLAY_EVENT);
		let { currentPlayerId: a, sessionOwnerPlayerId: o } = n, { playerId: s, cardIdxInHand: c } = e, l = z.getCardInstanceFromHand(n, s, c);
		Ut(l), R(a), r({
			type: tt.EVENT_CARD_PLAYED,
			payload: { eventCard: l }
		}), n = l.applyEffect(t).match, n = $x(n, a, c), a === o ? i.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION }) : i.raise({ type: F.PROMPT_BOT_FOR_TURN_ACTION }), n = {
			...n,
			eventCardsThatCanBePlayed: n.eventCardsThatCanBePlayed - 1
		}, i.assign({
			...t,
			match: n
		});
	})
} }, lS = { [L.PLAYING_TOOL]: {
	on: {
		[F.PROMPT_PLAYER_FOR_TURN_ACTION]: L.WAITING_FOR_PLAYER_TURN_ACTION,
		[F.PROMPT_BOT_FOR_TURN_ACTION]: L.PERFORMING_BOT_TURN_ACTION,
		[F.PLAY_PLANTABLE_TOOL]: L.CHOOSING_CARD_POSITION
	},
	entry: $(({ event: e, context: t, context: { botState: n, match: r, shell: { triggerNotification: i } }, enqueue: a }) => {
		hx(e, F.PLAY_TOOL);
		let { currentPlayerId: o, sessionOwnerPlayerId: s } = r, { playerId: c, cardIdxInHand: l } = e, u = z.getCardInstanceFromHand(r, c, l);
		Wt(u), R(o), (!u.isPlantable || o !== s) && i({
			type: tt.TOOL_CARD_PLAYED,
			payload: { toolCard: u }
		}), r = u.applyEffect?.(t).match ?? r, u.isPlantable ? a.raise({
			type: F.PLAY_PLANTABLE_TOOL,
			cardIdxInHand: l,
			playerId: o
		}) : (r = $x(r, o, l), o === s ? a.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION }) : (a.raise({ type: F.PROMPT_BOT_FOR_TURN_ACTION }), n = {
			...n,
			toolCardsThatCanBePlayed: n.toolCardsThatCanBePlayed - 1
		})), a.assign({
			match: r,
			botState: n
		});
	})
} }, uS = { [L.UNINITIALIZED]: { on: {
	[F.INIT]: { actions: $(({ event: e, enqueue: t }) => {
		hx(e, F.INIT);
		let { playerSeeds: n, userPlayerId: r } = e, i = Fx.buildMatchForSession(n, r);
		t.assign({ match: i }), t.raise({ type: F.PROMPT_PLAYER_FOR_SETUP_ACTION });
	}) },
	[F.RESUME]: { actions: $(({ event: e, enqueue: t }) => {
		hx(e, F.RESUME);
		let { match: n, botState: r, matchState: i, userPlayerId: a } = e;
		t.assign({
			match: {
				...n,
				sessionOwnerPlayerId: a
			},
			botState: r
		}), i === L.WAITING_FOR_PLAYER_SETUP_ACTION ? t.raise({ type: F.PROMPT_PLAYER_FOR_SETUP_ACTION }) : t.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION });
	}) },
	[F.PROMPT_PLAYER_FOR_SETUP_ACTION]: L.WAITING_FOR_PLAYER_SETUP_ACTION,
	[F.PROMPT_PLAYER_FOR_TURN_ACTION]: L.WAITING_FOR_PLAYER_TURN_ACTION
} } }, dS = { [L.WAITING_FOR_PLAYER_SETUP_ACTION]: { on: {
	[F.PROMPT_BOT_FOR_SETUP_ACTION]: L.PERFORMING_BOT_SETUP_ACTION,
	[F.PLAY_CROP]: L.CHOOSING_CARD_POSITION
} } }, fS = (e, t, n = Infinity) => {
	let r = z.getPlayer(e, t).cardsPlayedDuringTurn.slice(n);
	return e = yt(e, t, { cardsPlayedDuringTurn: r }), e;
}, pS = { [L.WAITING_FOR_PLAYER_TURN_ACTION]: {
	on: {
		[F.PLAYER_RAN_OUT_OF_FUNDS]: L.GAME_OVER,
		[F.PLAY_CROP]: L.CHOOSING_CARD_POSITION,
		[F.PLAY_EVENT]: L.PLAYING_EVENT,
		[F.PLAY_WATER]: L.PLAYER_WATERING_CROP,
		[F.PLAY_TOOL]: L.PLAYING_TOOL,
		[F.START_TURN]: L.PERFORMING_BOT_TURN_ACTION,
		[F.HARVEST_CROP]: { actions: $(({ event: e, enqueue: t, context: { match: n, shell: { triggerNotification: r } } }) => {
			let { playerId: i, cropIdxInFieldToHarvest: a } = e, o = z.getPlayedCardFromField(n, i, a);
			qt(o), n = Qx(n, i, a), r({
				type: tt.CROP_HARVESTED,
				payload: { cropHarvested: o.instance }
			}), t.assign({ match: n });
		}) },
		[F.DISCARD_CARD_FROM_FIELD]: { actions: $(({ event: e, enqueue: t, context: { match: n, shell: { triggerNotification: r } } }) => {
			let { playerId: i, cardIdxInField: a } = e, o = z.getPlayedCardFromField(n, i, a);
			n = Zx(n, i, a), r({
				type: tt.CARD_DISCARDED,
				payload: { cardDiscarded: o.instance }
			}), t.assign({ match: n });
		}) }
	},
	entry: $(({ event: e, context: t, context: { match: n }, enqueue: r }) => {
		try {
			switch (e.type) {
				case F.START_TURN: {
					n = {
						...n,
						cardsToDrawAtTurnStart: 1
					};
					let e = n;
					n = Hx(n);
					let { currentPlayerId: r } = n;
					R(r);
					let i = z.getPlayer(e, r);
					for (let e of i.cardsPlayedDuringTurn) $e(e) && e.onStartFollowingTurn && (n = e.onStartFollowingTurn({
						...t,
						match: n
					}).match);
					n = {
						...n,
						eventCardsThatCanBePlayed: 1
					}, n = rS(n, r, n.cardsToDrawAtTurnStart), t = gS.applyDailyEffects({
						...t,
						match: n
					}), n = t.match;
					break;
				}
				case F.OPERATION_ABORTED: {
					let { currentPlayerId: e } = n;
					R(e), n = fS(n, e, 1);
					break;
				}
				default:
			}
		} catch (e) {
			if (e instanceof Pt) {
				let { currentPlayerId: e } = n;
				R(e), r.raise({
					type: F.PLAYER_RAN_OUT_OF_FUNDS,
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
		t = zx(t, e), n.assign({ match: t });
	})
} }, mS = {
	initial: L.UNINITIALIZED,
	on: {
		[F.DANGEROUSLY_SET_CONTEXT]: { actions: $(({ event: e, enqueue: t }) => {
			hx(e, F.DANGEROUSLY_SET_CONTEXT);
			let { type: n, ...r } = e;
			t.assign(r);
		}) },
		[F.SET_SHELL]: { actions: $(({ event: e, enqueue: t }) => {
			hx(e, F.SET_SHELL);
			let { shell: n } = e;
			t.assign({ shell: n });
		}) }
	},
	states: {
		...uS,
		...Vx,
		...Bx,
		...Kx,
		...aS,
		...oS,
		...sS,
		...cS,
		...lS,
		...dS,
		...pS
	}
}, { createMachine: hS } = Cx({
	types: {
		context: {},
		events: {}
	},
	guards: {
		[et.IS_BOT_PHASE_PLAYING_EVENTS]: ({ context: { botState: { currentBotTurnPhase: e } } }) => e === I.PLAYING_EVENTS,
		[et.IS_BOT_PHASE_PLAYING_TOOLS]: ({ context: { botState: { currentBotTurnPhase: e } } }) => e === I.PLAYING_TOOLS,
		[et.IS_SELECTED_IDX_VALID]: ({ event: e, context: { match: t } }) => {
			let { currentPlayerId: n } = t;
			switch (R(n), e.type) {
				case F.SELECT_CROP_TO_WATER: {
					let { cards: r } = z.getPlayer(t, n).field;
					return r[e.cropIdxInFieldToWater] !== void 0;
				}
				default:
			}
			return !0;
		},
		[et.IS_SETUP_PHASE]: ({ context: { match: e } }) => e.turn === 0
	}
}), gS = new class {
	constructor() {
		this.createMatchStateMachine = () => hS({
			context: Ix(),
			...mS
		}), this.startMatch = () => Fy(this.createMatchStateMachine()).start(), this.applyDailyEffects = (e) => {
			let { match: t } = e, { currentPlayerId: n } = t;
			R(n);
			let r = t.table.players[n];
			R(r);
			for (let n = 0; n < r.field.cards.length; n++) {
				let i = r.field.cards[n];
				i && $e(i.instance) && i.instance.applyDailyEffect && (e = i.instance.applyDailyEffect({
					...e,
					match: t
				}, n), t = e.match);
			}
			return e;
		};
	}
}(), _S = Ax(gS.createMatchStateMachine()), vS = () => {
	let { match: e, matchState: t } = _S.useSelector(({ context: { match: e }, value: t }) => ({
		match: e,
		matchState: t
	})), n = t, r = null;
	if (mn(t)) if (L.PERFORMING_BOT_TURN_ACTION in t) {
		n = L.PERFORMING_BOT_TURN_ACTION;
		let e = t[L.PERFORMING_BOT_TURN_ACTION];
		R(e), Kt(e), r = e;
	} else throw TypeError("Unexpected matchState shape");
	if (typeof n != "string") throw TypeError("Actor state is not a string");
	return Gt(n), {
		match: e,
		matchState: n,
		botTurnActionState: r
	};
}, yS = v({
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
}), bS = (e) => {
	let { cardInstance: t, cardIdxInHand: n, cropIdxInFieldToWater: r, cropIdxInFieldToHarvest: i, cardIdxInField: a, playerId: o, onBeforePlay: s, canBeWatered: c = !1, canBeHarvested: l = !1, isFocused: u = !1, isInField: d = !1 } = e, { useActorRef: f } = _S, p = f(), { match: m, matchState: h } = vS(), { setIsHandInViewport: g, setSelectedHandCardIdx: _ } = C(yS), { eventCardsThatCanBePlayed: v, selectedWaterCardInHandIdx: y } = m, b = v > 0, x = async () => {
		let e = cn(t);
		switch (e || _(-1), s && await s(), R(n, "cardIdxInHand is not a valid hand index"), t.type) {
			case P.CROP:
				p.send({
					type: F.PLAY_CROP,
					cardIdxInHand: n,
					playerId: o
				}), g(!1);
				break;
			case P.WATER:
				p.send({
					type: F.PLAY_WATER,
					cardIdxInHand: n,
					playerId: o
				}), g(!1);
				break;
			case P.EVENT:
				p.send({
					type: F.PLAY_EVENT,
					cardIdxInHand: n,
					playerId: o
				});
				break;
			case P.TOOL:
				p.send({
					type: F.PLAY_TOOL,
					cardIdxInHand: n,
					playerId: o
				}), e && g(!1);
				break;
			default:
		}
	}, S = () => {
		R(r, "cropIdxInFieldToWater is not a valid field index"), p.send({
			type: F.SELECT_CROP_TO_WATER,
			playerId: o,
			cropIdxInFieldToWater: r,
			waterCardInHandIdx: y
		});
	}, w = () => {
		R(i, "cropIdxInFieldToHarvest is not a valid field index"), p.send({
			type: F.HARVEST_CROP,
			playerId: o,
			cropIdxInFieldToHarvest: i
		});
	}, T = () => {
		R(a, "cardIdxInField is not a valid field index"), p.send({
			type: F.DISCARD_CARD_FROM_FIELD,
			playerId: o,
			cardIdxInField: a
		});
	}, E = o === m.sessionOwnerPlayerId, D = !1, O = !1, k = !1, A = !1, ee = !1, j = !1;
	switch (t.type) {
		case P.CROP:
			j = t.id === m.buffedCrop?.crop.id, E && u && !d && [L.WAITING_FOR_PLAYER_TURN_ACTION, L.WAITING_FOR_PLAYER_SETUP_ACTION].includes(h) && (D = !0, z.getPlayer(m, o).field.cards.filter((e) => e !== void 0).length >= 6 && (O = !0)), E && u && d && c && [L.PLAYER_WATERING_CROP].includes(h) && (k = !0), E && u && d && l && [L.WAITING_FOR_PLAYER_TURN_ACTION].includes(h) && (A = !0);
			break;
		case P.EVENT:
			E && u && b && h === L.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0);
			break;
		case P.TOOL:
			E && u && !d && h === L.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0), E && d && u && (ee = !0);
			break;
		case P.WATER:
			E && u && h === L.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0);
			break;
		default:
	}
	let M = d && c && h === L.PLAYER_WATERING_CROP && m.currentPlayerId === o && sn(t), te = d && l && sn(t) && h !== L.PLAYER_WATERING_CROP, ne = "";
	return E && (M ? ne = "Needs water" : te && (ne = "Ready to be harvested")), {
		isBuffedCrop: j,
		showPlayCardButton: D,
		playButtonDisabled: O,
		showWaterCropButton: k,
		showHarvestCropButton: A,
		showWaterableState: M,
		showHarvestableState: te,
		showDiscardButton: ee,
		tooltipTitle: ne,
		onPlayCard: x,
		onWaterCrop: S,
		onHarvestCrop: w,
		onDiscardCard: T,
		isSessionOwnersCard: E
	};
}, xS = (e) => sn(e.cardInstance), SS = (e) => Ze(e.cardInstance), CS = (e) => Qe(e.cardInstance), wS = (e) => $e(e.cardInstance), TS = b(function({ playedCrop: e, ...t }, n) {
	let r = bS({
		playedCrop: e,
		...t
	}), { canBeHarvested: i, canBeWatered: a, isFocused: o, isInField: s, onBeforePlay: c, ...l } = t;
	return /* @__PURE__ */ j(Jv, {
		...l,
		...r,
		ref: n,
		children: on(t.cardInstance) ? /* @__PURE__ */ j(Yv, {
			crop: t.cardInstance,
			playedCrop: e
		}) : null
	});
}), ES = b(function(e, t) {
	let n = bS(e), { canBeHarvested: r, canBeWatered: i, isFocused: a, isInField: o, onBeforePlay: s, ...c } = e;
	return /* @__PURE__ */ j(Jv, {
		...c,
		...n,
		ref: t
	});
}), DS = b(function(e, t) {
	let n = bS(e), { canBeHarvested: r, canBeWatered: i, isFocused: a, isInField: o, onBeforePlay: s, ...c } = e;
	return /* @__PURE__ */ j(Jv, {
		...c,
		...n,
		ref: t,
		children: /* @__PURE__ */ j(Jc, { children: e.cardInstance.description })
	});
}), OS = b(function(e, t) {
	let n = bS(e), { canBeHarvested: r, canBeWatered: i, isFocused: a, isInField: o, onBeforePlay: s, ...c } = e;
	return /* @__PURE__ */ j(Jv, {
		...c,
		...n,
		ref: t,
		children: /* @__PURE__ */ j(Jc, { children: e.cardInstance.description })
	});
}), kS = b(function(e, t) {
	if (xS(e)) return /* @__PURE__ */ j(TS, {
		...e,
		ref: t
	});
	if (SS(e)) return /* @__PURE__ */ j(ES, {
		...e,
		ref: t
	});
	if (CS(e)) return /* @__PURE__ */ j(DS, {
		...e,
		ref: t
	});
	if (wS(e)) return /* @__PURE__ */ j(OS, {
		...e,
		ref: t
	});
	throw new Vt("Unexpected CardType");
}), AS = B.MEDIUM, jS = ({ match: e, handleClickTopCard: t, isTopCardSelected: n, playerId: r, deckThicknessPx: i = 30, cardSize: a = AS, sx: o = [], ...s }) => {
	let { containerRef: l, selectedCardSxProps: d } = vn({ cardSize: a }), f = c(), p = z.getPlayer(e, r), m = r === e.sessionOwnerPlayerId;
	return /* @__PURE__ */ j(u, {
		"data-testid": `deck_${r}`,
		height: hn[a].height,
		width: hn[a].width,
		position: "relative",
		ref: l,
		sx: [{ ...!m && { transform: "rotate(180deg)" } }, ...Ne(o) ? o : [o]],
		...s,
		children: p.deck.map((e, r) => {
			let o = i / p.deck.length * r, s = r === p.deck.length - 1;
			return /* @__PURE__ */ j(kS, {
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
}, MS = B.SMALL, NS = ({ playerId: e, match: t, cardSize: n = MS, discardPileThicknessPx: r = 30, ...i }) => {
	let a = c(), o = z.getPlayer(t, e), s = e === t.sessionOwnerPlayerId;
	return /* @__PURE__ */ j(u, {
		"data-testid": `discard-pile_${e}`,
		height: hn[n].height,
		width: hn[n].width,
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
			return /* @__PURE__ */ j(l, {
				title: t.name,
				placement: "top",
				arrow: !0,
				children: /* @__PURE__ */ j(kS, {
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
}, PS = /* @__PURE__ */ De((/* @__PURE__ */ we(((e, t) => {
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
})))(), 1), FS = typeof window < "u" ? D : w;
function IS(e, t, n, r) {
	let i = k(t);
	FS(() => {
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
function LS(e) {
	let t = k(e);
	t.current = e, w(() => () => {
		t.current();
	}, []);
}
function RS(e, t = 500, n) {
	let r = k();
	LS(() => {
		r.current && r.current.cancel();
	});
	let i = O(() => {
		let i = (0, PS.default)(e, t, n), a = (...e) => i(...e);
		return a.cancel = () => {
			i.cancel();
		}, a.isPending = () => !!r.current, a.flush = () => i.flush(), a;
	}, [
		e,
		t,
		n
	]);
	return w(() => {
		r.current = (0, PS.default)(e, t, n);
	}, [
		e,
		t,
		n
	]), i;
}
var zS = typeof window > "u";
function BS(e = {}) {
	let { initializeWithValue: t = !0 } = e;
	zS && (t = !1);
	let [n, r] = A(() => t ? {
		width: window.innerWidth,
		height: window.innerHeight
	} : {
		width: void 0,
		height: void 0
	}), i = RS(r, e?.debounceDelay);
	function a() {
		(e?.debounceDelay ? i : r)({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}
	return IS("resize", a), FS(() => {
		a();
	}, []), n;
}
//#endregion
//#region src/ui/components/PlayedCard/usePlayedCardLogic.ts
var VS = ({ playedCard: e }) => {
	let t = e.instance, n = 0, r = !1, i = !1;
	return un(e) || $e(t) || (n = Math.max(e.waterCards, t.waterToMature), r = e.wasWateredDuringTurn === !1, i = e.waterCards >= t.waterToMature), {
		canBeWatered: r,
		canBeHarvested: i,
		waterIconsToRender: n
	};
}, HS = "PlayedCard", US = ({ isInBackground: e, playedCard: t, cardProps: { ref: n, ...r }, ...i }) => {
	let a = c(), { size: o = B.MEDIUM } = r, { canBeWatered: s, canBeHarvested: l, waterIconsToRender: f } = VS({ playedCard: t });
	return /* @__PURE__ */ M(u, {
		className: HS,
		maxWidth: hn[o].width,
		...i,
		children: [/* @__PURE__ */ j(kS, {
			size: o,
			canBeWatered: s,
			canBeHarvested: l,
			...r
		}), ln(t) && /* @__PURE__ */ j(d, {
			container: !0,
			spacing: 1,
			pt: 2.5,
			ml: a.spacing(-.5),
			justifyContent: "flex-start",
			children: Array(f).fill(null).map((n, r) => {
				let i = 1, o = r < t.waterCards;
				return e ? i = 0 : o || (i = .25), /* @__PURE__ */ j(d, {
					item: !0,
					sx: { pt: `${a.spacing(0)} !important` },
					children: /* @__PURE__ */ j(Bv, {
						src: Je.water,
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
}, WS = ({ cardSize: e = B.SMALL, playerId: t, fieldIdx: n }) => {
	let r = c(), { useActorRef: i } = _S, a = i(), { matchState: o, match: { currentPlayerId: s, sessionOwnerPlayerId: l } } = vS(), { selectedHandCardIdx: f } = C(yS), p = s === l && s === t && o === L.CHOOSING_CARD_POSITION;
	return /* @__PURE__ */ j(d, {
		item: !0,
		xs: 6,
		sm: 4,
		md: 2,
		children: /* @__PURE__ */ j(u, {
			height: hn[e].height,
			width: hn[e].width,
			onClick: () => {
				p && a.send({
					type: F.SELECT_CARD_POSITION,
					playerId: t,
					cardIdxInHand: f,
					fieldIdxToPlace: n
				});
			},
			sx: {
				mx: "auto",
				outlineStyle: "solid",
				outlineWidth: "2px",
				outlineColor: p ? r.palette.primary.light : r.palette.divider,
				borderRadius: r.shape.borderRadius,
				transition: r.transitions.create(["background", "transform"]),
				boxShadow: p ? `0 0 12px 4px ${r.palette.primary.light}` : "none",
				alignContent: "center",
				...p && {
					cursor: "pointer",
					":hover": {
						transform: "scale(1.2)",
						background: r.palette.mode === "light" ? re(r.palette.primary.light, .1) : ie(r.palette.primary.light, .5),
						"> p": { opacity: 1 }
					}
				}
			},
			children: p && /* @__PURE__ */ j(oe, {
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
}, GS = -1, KS = -25, qS = "Selected field card", JS = "Unselected field card", YS = ({ playerId: e, match: t, cardSize: n = B.SMALL, ...r }) => {
	let i = z.getPlayer(t, e), a = e === t.sessionOwnerPlayerId, o = k(), s = c(), [l, f] = A(GS), [p, m] = A(""), { width: h, height: g } = BS({ debounceDelay: 1 }), _ = h / 2, v = g / 2, y = () => {
		f(GS), document.activeElement instanceof HTMLElement && document.activeElement.blur();
	}, b = RS(() => {
		y();
	}, void 0, { leading: !0 });
	w(() => (window.addEventListener("resize", b), () => {
		window.removeEventListener("resize", b);
	}), [b]), w(() => {
		f(GS);
	}, [i.field]);
	let x = (e, t) => {
		let { target: n } = e;
		if (!n.classList.contains("PlayedCard")) return;
		let r = n.getBoundingClientRect();
		m(`translateX(${_ - (r.left + r.width / 2)}px) translateY(${v - (r.top + r.height / 2) + (a ? KS : 25)}px) scale(1.25)`), f(t);
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
	return /* @__PURE__ */ j(u, {
		...r,
		"data-testid": `field_${e}`,
		ref: o,
		onKeyDown: S,
		onBlur: C,
		children: /* @__PURE__ */ j(d, {
			container: !0,
			spacing: 2,
			alignItems: a ? "flex-start" : "flex-end",
			justifyContent: "center",
			children: E.map((t, r) => {
				let o = a ? r : 5 - r;
				if (!dn(t)) return /* @__PURE__ */ j(WS, {
					cardSize: n,
					playerId: e,
					fieldIdx: o
				}, r);
				let { instance: c } = t, u = l === o, f = l !== GS && !u;
				return /* @__PURE__ */ j(d, {
					item: !0,
					xs: 6,
					sm: 4,
					md: 2,
					children: /* @__PURE__ */ j(US, {
						"aria-label": u ? qS : JS,
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
}, XS = () => {
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
}, ZS = new class {
	constructor() {
		this.scaleNumber = (e, t, n, r, i) => (e - t) * (i - r) / (n - t) + r;
	}
}(), QS = 1, $S = .65, eC = (e) => e > 60 ? 3 : e > 30 ? 5 : e > 20 ? 10 : e > 10 ? 15 : e > 5 ? 30 : 50, tC = ({ playerId: e, match: t, cardSize: n = B.LARGE, sx: r = [], ...i }) => {
	let { blockingOperation: a, isHandInViewport: o, setIsHandInViewport: s, selectedHandCardIdx: l, setSelectedHandCardIdx: d } = C(yS), { setRejectingTimeout: f } = XS(), { containerRef: p, selectedCardSxProps: m } = vn({ cardSize: n }), h = z.getPlayer(t, e), g = c(), _ = k(null);
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
	}, T = eC(h.hand.length), { width: E } = p.current?.getBoundingClientRect() ?? { width: 0 }, D = async () => {
		await a(async () => {
			await f(g.transitions.duration.shortest);
		});
	};
	return /* @__PURE__ */ j(u, {
		...i,
		"data-testid": `hand_${e}`,
		ref: p,
		sx: [{
			position: "relative",
			minHeight: hn[n].height,
			transform: `translateY(${o ? 0 : hn[n].height})`,
			transition: g.transitions.create(["transform"]),
			pointerEvents: o ? void 0 : "none"
		}, ...Ne(r) ? r : [r]],
		onKeyDown: b,
		onBlur: x,
		children: h.hand.map((t, r) => {
			let i = T * h.hand.length, a = ZS.scaleNumber(r / h.hand.length, 0, 1, -i, i), s = E / 2 + a, c = l === r && o, u = l !== -1 && o, d = "";
			return c || (d = `translateX(${`calc(-50% + ${T}px + ${s}px)`}) translateY(${u ? `calc(${hn[n].height} / 2)` : "0rem"}) rotate(-5deg) scale(${u ? $S : QS}) rotateY(25deg)`), /* @__PURE__ */ j(kS, {
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
}, nC = ({ match: e, ...t }) => {
	let n = c(), { sessionOwnerPlayerId: r } = e, i = z.getOpponentPlayerIds(e), a = f(n.breakpoints.up("md")) ? B.MEDIUM : B.SMALL;
	return /* @__PURE__ */ M(ee, { children: [/* @__PURE__ */ M(d, {
		gap: 4,
		container: !0,
		...t,
		"data-testid": `table_${e.sessionOwnerPlayerId}`,
		children: [
			/* @__PURE__ */ j(d, {
				item: !0,
				xs: 12,
				children: i.map((t) => /* @__PURE__ */ j(YS, {
					match: e,
					playerId: t,
					cardSize: B.SMALL
				}, t))
			}),
			/* @__PURE__ */ j(d, {
				item: !0,
				xs: 12,
				children: /* @__PURE__ */ M(u, {
					display: "flex",
					justifyContent: "space-between",
					alignContent: "center",
					children: [/* @__PURE__ */ j(jS, {
						match: e,
						playerId: r,
						cardSize: B.SMALL
					}), /* @__PURE__ */ j(NS, {
						match: e,
						playerId: r
					})]
				})
			}),
			/* @__PURE__ */ j(d, {
				item: !0,
				xs: 12,
				children: /* @__PURE__ */ j(YS, {
					match: e,
					playerId: r
				})
			})
		]
	}), /* @__PURE__ */ j(u, {
		position: "fixed",
		left: "50%",
		right: "50%",
		bottom: n.spacing(-8),
		children: /* @__PURE__ */ j(tC, {
			match: e,
			playerId: r,
			cardSize: a
		})
	})] });
}, rC = new Intl.NumberFormat(void 0, {
	style: "decimal",
	useGrouping: !0
}).format.bind(null), iC = (e) => rC(e), aC = 10, oC = ({ match: n }) => {
	let r = c(), i = _S.useActorRef(), { setIsHandInViewport: a } = C(yS), { matchState: o, botTurnActionState: s, match: { currentPlayerId: u, sessionOwnerPlayerId: d } } = vS(), f = Me(u ?? ""), p = () => {
		i.send({ type: F.PROMPT_BOT_FOR_SETUP_ACTION });
	}, m = () => {
		i.send({ type: F.START_TURN });
	}, h = () => {
		i.send({ type: F.OPERATION_ABORTED }), a(!0);
	}, g = () => {
		i.send({ type: F.OPERATION_ABORTED }), a(!0);
	}, _ = null, v = u ? z.getPlayer(n, u) : null, y = "";
	switch (o) {
		case L.CHOOSING_CARD_POSITION:
			y = "Select a position in the field", v?.id === n.sessionOwnerPlayerId && (_ = /* @__PURE__ */ j(t, {
				onClick: g,
				color: "warning",
				children: "Cancel placement"
			}));
			break;
		case L.WAITING_FOR_PLAYER_SETUP_ACTION:
			y = "Set up your Field", v && v.field.cards.length > 0 && (_ = /* @__PURE__ */ j(t, {
				onClick: p,
				children: "Complete setup"
			}));
			break;
		case L.WAITING_FOR_PLAYER_TURN_ACTION:
			y = "Your turn", v && v.id === n.sessionOwnerPlayerId && (_ = /* @__PURE__ */ j(t, {
				onClick: m,
				children: "End turn"
			}));
			break;
		case L.PLAYER_WATERING_CROP:
			y = "Select a crop to water", v && v.id === n.sessionOwnerPlayerId && (_ = /* @__PURE__ */ j(t, {
				onClick: h,
				color: "warning",
				children: "Cancel watering"
			}));
			break;
		case L.PERFORMING_BOT_TURN_ACTION:
			switch (y = `${f}'s turn`, s) {
				case I.PLAYING_CROPS:
				case I.PLACING_CROP:
					y = `${f} is planting crops`;
					break;
				case I.WATERING_CROPS:
				case I.WATERING_CROP:
					y = `${f} is watering crops`;
					break;
				case I.HARVESTING_CROPS:
				case I.HARVESTING_CROP:
					y = `${f} is harvesting crops`;
					break;
				case I.PLAYING_EVENTS:
					y = `${f} is playing Event cards`;
					break;
				case I.PLAYING_TOOLS:
					y = `${f} is playing Tool cards`;
					break;
				default:
			}
			break;
		case L.PERFORMING_BOT_SETUP_ACTION:
			y = `${f} is setting their field up`;
			break;
		default:
	}
	let { [d]: b, ...x } = n.table.players;
	if (!b) throw new Ft("Session owner player not found");
	let S = b.funds, w = Object.keys(x)[0], T = w ? z.getPlayer(n, w)?.funds : 0, E = Me(w ?? "");
	return /* @__PURE__ */ M(he, {
		spacing: 1,
		children: [/* @__PURE__ */ M(he, {
			direction: "row",
			justifyContent: "space-between",
			sx: { color: r.palette.common.white },
			children: [
				/* @__PURE__ */ j(l, {
					title: "Your funds",
					arrow: !0,
					children: /* @__PURE__ */ M(he, {
						direction: "row",
						alignItems: "center",
						color: {
							cursor: "help",
							...S <= aC && { color: r.palette.error.dark }
						},
						children: [/* @__PURE__ */ j(le, { sx: {
							fontSize: r.typography.body1.fontSize,
							lineHeight: r.typography.body1.lineHeight
						} }), /* @__PURE__ */ j(oe, { children: iC(S) })]
					})
				}),
				n.buffedCrop && /* @__PURE__ */ j(l, {
					title: `Sell ${n.buffedCrop.crop.name} cards now for ${n.buffedCrop.multiplier}x value`,
					arrow: !0,
					children: /* @__PURE__ */ j(he, {
						direction: "row",
						alignItems: "center",
						children: /* @__PURE__ */ j(me, {
							color: "success",
							icon: /* @__PURE__ */ j(ue, {}),
							label: /* @__PURE__ */ j(Bv, {
								src: Vv(n.buffedCrop.crop),
								sx: {
									imageRendering: "pixelated",
									filter: `drop-shadow(0 0 5px ${r.palette.common.white})`
								}
							}),
							sx: {
								backgroundColor: r.palette.success.light,
								outlineColor: r.palette.success.dark,
								outlineWidth: 1,
								outlineStyle: "solid"
							}
						})
					})
				}),
				/* @__PURE__ */ j(l, {
					title: "Community funds",
					arrow: !0,
					children: /* @__PURE__ */ M(he, {
						direction: "row",
						alignItems: "center",
						spacing: .5,
						sx: { cursor: "help" },
						children: [/* @__PURE__ */ j(N, { sx: {
							fontSize: r.typography.body1.fontSize,
							lineHeight: r.typography.body1.lineHeight
						} }), /* @__PURE__ */ j(oe, { children: iC(n.table.communityFund) })]
					})
				}),
				n.nerfedCrop && /* @__PURE__ */ j(l, {
					title: `${n.nerfedCrop.crop.name} cards now sell for ${n.nerfedCrop.multiplier}x value`,
					arrow: !0,
					children: /* @__PURE__ */ j(he, {
						direction: "row",
						alignItems: "center",
						children: /* @__PURE__ */ j(me, {
							sx: {
								flexDirection: "row-reverse",
								"& .MuiSvgIcon-root": {
									ml: -.75,
									mr: .75
								},
								"& .MuiChip-label": { pr: 1 },
								backgroundColor: r.palette.error.light,
								outlineColor: r.palette.error.dark,
								outlineWidth: 1,
								outlineStyle: "solid"
							},
							color: "error",
							icon: /* @__PURE__ */ j(e, {}),
							label: /* @__PURE__ */ j(Bv, {
								src: Vv(n.nerfedCrop.crop),
								sx: {
									imageRendering: "pixelated",
									filter: `drop-shadow(0 0 5px ${r.palette.common.black})`
								}
							})
						})
					})
				}),
				/* @__PURE__ */ j(l, {
					title: `${E}'s funds`,
					arrow: !0,
					children: /* @__PURE__ */ M(he, {
						direction: "row",
						alignItems: "center",
						sx: {
							cursor: "help",
							...T !== void 0 && T <= aC && { color: r.palette.error.dark }
						},
						children: [/* @__PURE__ */ j(le, { sx: {
							fontSize: r.typography.body1.fontSize,
							lineHeight: r.typography.body1.lineHeight
						} }), /* @__PURE__ */ j(oe, { children: T === void 0 ? "" : iC(T) })]
					})
				})
			]
		}), /* @__PURE__ */ M(de, {
			sx: {
				width: 1,
				mb: 2,
				borderRadius: `${r.shape.borderRadius}px`,
				"&.Mui-expanded": { mt: 1 }
			},
			expanded: _ !== null,
			children: [/* @__PURE__ */ j(pe, {
				sx: {
					"&:hover:not(.Mui-disabled)": { cursor: "default" },
					"& .MuiAccordionSummary-content": { justifyContent: "center" }
				},
				children: /* @__PURE__ */ j(oe, {
					variant: "h6",
					component: "h1",
					textAlign: "center",
					fontWeight: "normal",
					children: y
				})
			}), /* @__PURE__ */ j(fe, {
				sx: { justifyContent: "center" },
				children: _
			})]
		})]
	});
}, sC = new URLSearchParams(window.location.search).has("debug"), cC = v({ showNotification: () => {
	throw Error("Calling showNotification outside of NotificationProvider");
} }), lC = () => C(cC), uC = ({ actorRef: e, match: t }) => {
	let { showNotification: n } = lC(), r = S((e, t) => {
		sC && console.debug(`Notification: ${ge(e)}`), n(e, t);
	}, [n]), i = t.currentPlayerId === t.sessionOwnerPlayerId;
	return w(() => {
		let n = Me(t.currentPlayerId ?? "");
		e.send({
			type: F.SET_SHELL,
			shell: { triggerNotification: ({ type: e, payload: t }) => {
				switch (e) {
					case tt.CARDS_DRAWN: {
						let { howMany: e, playerId: n } = t;
						if (i) r(e === 1 ? "You drew 1 card" : `You drew ${e} cards`, "success");
						else {
							let t = Me(n);
							r(e === 1 ? `${t} drew 1 card` : `${t} drew ${e} cards`, "warning");
						}
						break;
					}
					case tt.CROP_HARVESTED: {
						let { cropHarvested: { name: e } } = t;
						i ? r(`You harvested and sold a ${e}`, "success") : r(`${n} harvested and sold a ${e}`, "warning");
						break;
					}
					case tt.CARD_DISCARDED: {
						let { cardDiscarded: { name: e } } = t;
						r(i ? `You discarded ${e}` : `${n} discarded ${e}`, "info");
						break;
					}
					case tt.CROP_WATERED: {
						let { cropWatered: { name: e } } = t;
						r(i ? `You watered your ${e}` : `${n} watered their ${e}`, "info");
						break;
					}
					case tt.EVENT_CARD_PLAYED: {
						let { eventCard: e } = t;
						r(i ? `You played ${e.name}` : `${n} played ${e.name}`, "info");
						break;
					}
					case tt.TOOL_CARD_PLAYED: {
						let { toolCard: e } = t;
						r(i ? `You played ${e.name}` : `${n} played ${e.name}`, "info");
						break;
					}
					case tt.ALL_CROPS_WATERED:
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
}, dC = ({ playerSeeds: e, userPlayerId: t, onMatchEnd: n, onCheckpoint: r, initialMatch: i }) => {
	let a = _S.useActorRef(), { match: o, matchState: s } = vS(), c = _S.useSelector(({ context: e }) => e.botState), [l, u] = A(!0);
	w(() => {
		sC && a.subscribe((e) => {
			typeof e.value == "string" && console.debug(`State: ${e.value}`, e.context);
		});
	}, [a]);
	let [d, f] = A(!1);
	w(() => {
		s === L.UNINITIALIZED && (i ? a.send({
			type: F.RESUME,
			matchState: i.matchState,
			match: i.match,
			botState: i.botState,
			userPlayerId: t
		}) : a.send({
			type: F.INIT,
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
		(s === L.WAITING_FOR_PLAYER_SETUP_ACTION || s === L.WAITING_FOR_PLAYER_TURN_ACTION) && r?.({
			matchState: s,
			match: o,
			botState: c
		});
	}, [s]);
	let p = k(!1);
	w(() => {
		s === L.GAME_OVER ? p.current || (p.current = !0, n?.(o.winner)) : p.current = !1;
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
	}, [f]), { showNotification: h } = uC({
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
			type: F.INIT,
			playerSeeds: e,
			userPlayerId: t
		});
	}, E = [L.PLAYER_WATERING_CROP].includes(s), D = l || E;
	return {
		match: o,
		botState: c,
		handleHandVisibilityToggle: C,
		handleClickPlayAgain: T,
		isHandDisabled: E,
		isInputBlocked: x,
		shellContextValue: y,
		showGameOver: s === L.GAME_OVER,
		showHand: D
	};
}, fC = ({ playerSeeds: u, userPlayerId: d, fullHeight: f = !1, sx: p = [], onMatchEnd: m, onCheckpoint: h, renderStatusBarContent: g, renderGameOverContent: _, hideDefaultGameOverActions: v = !1, initialMatch: y, ...b }) => {
	let x = c(), { match: S, handleHandVisibilityToggle: C, handleClickPlayAgain: w, isHandDisabled: T, isInputBlocked: E, shellContextValue: D, showGameOver: O, showHand: k } = dC({
		playerSeeds: u,
		userPlayerId: d,
		onMatchEnd: m,
		onCheckpoint: h,
		initialMatch: y
	}), { winner: A } = S;
	return /* @__PURE__ */ j(yS.Provider, {
		value: D,
		children: /* @__PURE__ */ M(n, {
			maxWidth: !1,
			"data-testid": "match",
			sx: [{
				backgroundColor: "#ffba4d",
				backgroundImage: `url(${Ye.brownDotBackground})`,
				backgroundSize: x.spacing(10),
				imageRendering: "pixelated",
				pt: 1,
				pb: 10,
				overflow: "auto",
				...E && { "*": { pointerEvents: "none" } },
				height: f ? "100vh" : void 0
			}, ...Ne(p) ? p : [p]],
			...b,
			children: [
				/* @__PURE__ */ j(oC, { match: S }),
				g?.(),
				/* @__PURE__ */ j(nC, {
					sx: { pt: 4 },
					match: S
				}),
				/* @__PURE__ */ j(l, {
					arrow: !0,
					title: k ? "Hide Hand" : "Show Hand",
					children: /* @__PURE__ */ j(s, {
						color: "secondary",
						disabled: E || T,
						onClick: C,
						sx: {
							position: "fixed",
							bottom: x.spacing(2),
							left: x.spacing(2)
						},
						children: /* @__PURE__ */ j(e, { sx: {
							transform: `rotate(${k ? 0 : 180}deg)`,
							transition: x.transitions.create(["transform"])
						} })
					})
				}),
				/* @__PURE__ */ M(r, {
					open: O,
					children: [
						/* @__PURE__ */ j(o, { children: "Game Over" }),
						/* @__PURE__ */ M(a, { children: [
							"Winner: ",
							/* @__PURE__ */ j("strong", { children: A ? Me(A) : "No one" }),
							_?.(A)
						] }),
						/* @__PURE__ */ j(i, { children: !v && /* @__PURE__ */ j(t, {
							onClick: w,
							children: "Play again"
						}) })
					]
				})
			]
		})
	});
}, pC = ({ ...e }) => /* @__PURE__ */ j(_S.Provider, { children: /* @__PURE__ */ j(fC, { ...e }) }), mC = [
	[lt, 4],
	[mt, 4],
	[pt, 4],
	[ut, 4],
	[ft, 4],
	[dt, 4],
	[ht, 4]
], hC = 4, gC = 4, _C = 4, vC = mC.length + 3, yC = 60 - vC * 4;
yC <= 0 && console.warn(`starterDeck: WATER_COUNT computed as ${yC}. DECK_SIZE (60) may be too small for NON_WATER_CARD_TYPE_COUNT (${vC}) at MAX_INSTANCES_PER_CARD (4) copies each.`);
var bC = (e, t) => Array.from({ length: t }, () => tn(e)), xC = (e, t) => {
	let n = Math.min(e.length, t.length);
	return [
		...Array.from({ length: n }, (n, r) => [e[r], t[r]]).flat(),
		...e.slice(n),
		...t.slice(n)
	];
}, SC = () => {
	let e = mC.flatMap(([e, t]) => bC(e, t)), t = bC(Qt, yC), n = bC(xt, hC), r = bC(Xt, gC), i = bC(Jt, _C);
	return [...xC(e, t), ...xC(xC(n, r), i)];
}, CC = (e) => ({
	id: e.id,
	instanceId: e.instanceId
}), wC = (e) => {
	let t = nn[e.id];
	if (!t) throw new It(`Card with ID "${e.id}" not found in card definitions.`);
	return {
		...t,
		instanceId: e.instanceId
	};
}, TC = (e) => {
	if (e) return {
		...e,
		instance: CC(e.instance)
	};
}, EC = (e) => {
	if (e) return {
		...e,
		instance: wC(e.instance)
	};
}, DC = (e) => ({
	...e,
	deck: e.deck.map(CC),
	hand: e.hand.map(CC),
	discardPile: e.discardPile.map(CC),
	cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(CC),
	field: { cards: e.field.cards.map(TC) }
}), OC = (e) => ({
	...e,
	deck: e.deck.map(wC),
	hand: e.hand.map(wC),
	discardPile: e.discardPile.map(wC),
	cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(wC),
	field: { cards: e.field.cards.map(EC) }
}), kC = (e) => ({
	...e,
	table: {
		...e.table,
		players: Object.fromEntries(Object.entries(e.table.players).map(([e, t]) => [e, DC(t)]))
	}
}), AC = (e) => ({
	...e,
	table: {
		...e.table,
		players: Object.fromEntries(Object.entries(e.table.players).map(([e, t]) => [e, OC(t)]))
	}
});
//#endregion
export { pC as Match, L as MatchState, AC as deserializeMatch, kC as serializeMatch, SC as starterDeck };
