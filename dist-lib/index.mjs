import e from '@mui/material/Button/index.js'
import t from '@mui/material/Container/index.js'
import n from '@mui/material/Dialog/index.js'
import r from '@mui/material/DialogActions/index.js'
import i from '@mui/material/DialogContent/index.js'
import a from '@mui/material/DialogTitle/index.js'
import o from '@mui/material/Fab/index.js'
import s from '@mui/material/styles/useTheme'
import c from '@mui/material/Tooltip/index.js'
import l from '@mui/material/utils/createSvgIcon.js'
import { Fragment as u, jsx as d, jsxs as f } from 'react/jsx-runtime'
import p from '@mui/material/Box/index.js'
import m from '@mui/material/Grid/index.js'
import h from '@mui/material/useMediaQuery/index.js'
import * as g from 'react'
import _, {
  Children as v,
  Component as y,
  Fragment as b,
  createContext as x,
  createElement as S,
  forwardRef as C,
  isValidElement as w,
  useCallback as T,
  useContext as E,
  useEffect as D,
  useId as O,
  useInsertionEffect as ee,
  useLayoutEffect as te,
  useMemo as k,
  useRef as A,
  useState as j,
} from 'react'
import ne from '@mui/material/Divider/index.js'
import re from '@mui/material/Paper/index.js'
import {
  darken as ie,
  lighten as ae,
  styled as oe,
} from '@mui/material/styles/index.js'
import se from '@mui/material/Typography/index.js'
import '@emotion/styled'
import { keyframes as ce } from '@emotion/react'
import { useSyncExternalStoreWithSelector as le } from 'use-sync-external-store/shim/with-selector'
import 'use-sync-external-store/shim'
import M from '@mui/material/Accordion/index.js'
import ue from '@mui/material/AccordionActions/index.js'
import de from '@mui/material/AccordionSummary/index.js'
import fe from '@mui/material/Chip/index.js'
import pe from '@mui/material/Stack/index.js'
import me from 'react-node-to-string'
import '@mui/material/Alert/index.js'
import '@mui/material/Slide/index.js'
import '@mui/material/Snackbar/index.js'
//#region \0rolldown/runtime.js
var he = Object.create,
  ge = Object.defineProperty,
  _e = Object.getOwnPropertyDescriptor,
  ve = Object.getOwnPropertyNames,
  ye = Object.getPrototypeOf,
  be = Object.prototype.hasOwnProperty,
  xe = (e, t) => () => (e && (t = e((e = 0))), t),
  N = (e, t) => () => (
    t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports
  ),
  Se = (e, t) => {
    let n = {}
    for (var r in e)
      ge(n, r, {
        get: e[r],
        enumerable: !0,
      })
    return t || ge(n, Symbol.toStringTag, { value: 'Module' }), n
  },
  Ce = (e, t, n, r) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (var i = ve(t), a = 0, o = i.length, s; a < o; a++)
        (s = i[a]),
          !be.call(e, s) &&
            s !== n &&
            ge(e, s, {
              get: (e => t[e]).bind(null, s),
              enumerable: !(r = _e(t, s)) || r.enumerable,
            })
    return e
  },
  we = (e, t, n) => (
    (n = e == null ? {} : he(ye(e))),
    Ce(
      t || !e || !e.__esModule
        ? ge(n, 'default', {
            value: e,
            enumerable: !0,
          })
        : n,
      e
    )
  ),
  Te = e =>
    be.call(e, 'module.exports')
      ? e['module.exports']
      : Ce(ge({}, '__esModule', { value: !0 }), e),
  Ee =
    /* @__PURE__ */ 'Aardvark.Albatross.Alligator.Alpaca.Angelfish.Anglerfish.Ant.Anteater.Antelope.Antlion.Ape.Armadillo.Asp.Baboon.Badger.Bandicoot.Barnacle.Barracuda.Basilisk.Bass.Bat.Bear.Beaver.Bee.Beetle.Bird.Bison.Blackbird.Boar.Bobcat.Bonobo.Bug.Butterfly.Buzzard.Camel.Capybara.Cardinal.Caribou.Cat.Caterpillar.Catfish.Cattle.Chameleon.Cheetah.Chickadee.Chicken.Chimpanzee.Chinchilla.Chipmunk.Clam.Clownfish.Cobra.Condor.Coral.Cougar.Coyote.Crab.Crane.Crawdad.Crayfish.Cricket.Crocodile.Crow.Cuckoo.Deer.Dingo.Dinosaur.Dog.Dolphin.Donkey.Dove.Dragon.Dragonfly.Duck.Eagle.Earthworm.Echidna.Egret.Elephant.Elk.Emu.Ermine.Falcon.Ferret.Finch.Firefly.Fish.Flamingo.Fowl.Fox.Frog.Gazelle.Gecko.Gerbil.Gibbon.Giraffe.Goat.Goldfish.Goose.Gopher.Gorilla.Grasshopper.Grouse.Gull.Guppy.Hamster.Hare.Harrier.Hawk.Hedgehog.Heron.Hippopotamus.Horse.Hummingbird.Hyena.Iguana.Impala.Jackal.Jaguar.Jay.Jellyfish.Kangaroo.Kingfisher.Kiwi.Koala.Koi.Ladybug.Lark.Lemming.Lemur.Leopard.Lion.Llama.Lobster.Loon.Lynx.Macaw.Mackerel.Mammal.Manatee.Mandrill.Marlin.Marmoset.Marmot.Marsupial.Mastodon.Meerkat.Mink.Minnow.Mockingbird.Mole.Mongoose.Monkey.Moose.Mosquito.Mouse.Mule.Muskox.Narwhal.Ocelot.Octopus.Opossum.Orangutan.Orca.Ostrich.Otter.Owl.Ox.Panda.Panther.Parakeet.Parrot.Partridge.Peacock.Pelican.Penguin.Pig.Pigeon.Platypus.Pony.Porcupine.Porpoise.Puffin.Puma.Python.Quail.Quokka.Rabbit.Raccoon.Raven.Reindeer.Rhinoceros.Roadrunner.Rooster.Salamander.Salmon.Seahorse.Shark.Sheep.Shrew.Sloth.Snail.Sparrow.Squid.Squirrel.Starfish.Stingray.Stoat.Stork.Sturgeon.Swan.Swift.Swordfish.Tapir.Tarsier.Tern.Tiger.Tortoise.Toucan.Turkey.Turtle.Tyrannosaurus.Vole.Wallaby.Walrus.Warbler.Whale.Wildcat.Wolf.Wolverine.Wombat.Woodpecker.Wren.Yak.Zebra'.split(
      '.'
    ),
  De =
    /* @__PURE__ */ 'Adorable.Adventurous.Agreeable.Alert.Amused.Attractive.Average.Beautiful.Blushing.Brainy.Brave.Bright.Busy.Calm.Careful.Cautious.Charming.Cheerful.Clever.Cloudy.Colorful.Comfortable.Concerned.Cooperative.Courageous.Crazy.Curious.Cute.Delightful.Determined.Distinct.Dizzy.Elated.Elegant.Enchanting.Encouraging.Energetic.Enthusiastic.Excited.Exuberant.Famous.Fancy.Fantastic.Fierce.Fine.Friendly.Funny.Gentle.Gifted.Glamorous.Gleaming.Glorious.Gorgeous.Graceful.Handsome.Happy.Healthy.Helpful.Hilarious.Important.Inquisitive.Jolly.Joyous.Kind.Light.Lively.Lovely.Lucky.Magnificent.Mysterious.Nice.Nutty.Outrageous.Outstanding.Perfect.Pleasant.Poised.Powerful.Precious.Proud.Puzzled.Quaint.Relieved.Shiny.Silly.Sleepy.Smiling.Sparkling.Splendid.Stormy.Strange.Successful.Tame.Thankful.Thoughtful.Tough.Victorious.Vivacious.Wandering.Wide-eyed.Wild.Witty.Zany'.split(
      '.'
    ),
  Oe = function (e) {
    return e.split('').reduce(function (e, t, n) {
      return e + t.charCodeAt(0) * n
    }, 0)
  },
  ke = function (e, t) {
    var n = t === void 0 ? {} : t,
      r = n.adjectives,
      i = r === void 0 ? De : r,
      a = n.animalNames,
      o = a === void 0 ? Ee : a,
      s = Oe(e),
      c = i[s % i.length],
      l = o[(s + Oe(c)) % o.length]
    return c + ' ' + l
  },
  Ae = e => Array.isArray(e),
  je =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVRIie2UMQ7DIAxFTVUJZcnIBTggU0+RKQfMBTJmQUx0aEDY2FSkdMvbwMn//o4VgJshrFOEdYr/N+m57xalKYaloqKd4o9uk4TzqnrmcqJW5+lOEH92m3BnmqZALJyU86+rDeFEK0E8Fp0Ps/PYyHklzrwwbnWADAAA5lfAJkSMQ9qiLL7tIV9Sw9OsuTmSO+p+2wNYU4zrk0QhAyEJl6Dq3hqNkiCS8JU1TcLWaJRANGGgBdQ9Fc0f+ft6Z8QEzMy7hLkX4rFo1PkvwokqgTV6iLBEhPL3cAMAb8x5cUBYehurAAAAAElFTkSuQmCC',
  Me =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbRJREFUSInVlDFrwkAYhh+lKB2CToVupW5C6VgQOrl07OoiCrp37WKhS/5CQUERxNVR/0CgowhxUtwEJyWDxKHpkNxpktNYLYV+S+AueZ/3e7/cwX+v2C9oOIf04ueKr6cVlsMc62klCDsb4CyHOWzLhLmBbZlKyKkAZzGrA7BJleE6txdycZLzPrBqwtwg4UE0LYttmW5HO/VTgLOeVrAtk6SWxQaSWhZWTWwPlFg1fR/Iqd89u22Nenv/LGcxq4cEAJgbbkxA+t7w6caFeKmYoavXJEjlPLFquo6Fc7YzSGrZkLgEiBqMOyqIs+wjY7HiD248XtYJbxaXt42QeAiggDjraUU6tC0T7etTwkQn6SeU4hAxZOEcAs+5IYeavqnuFVd24CvPuXAqn976VYS4BIx6xFrtSWhzN2vbMtmkyrKDfZkH62BEu4PNv1QBA8/QUeKRAJF1/q1BV69t13UovL47B87McYDHDwCDrl5jMO749rp6jQLREN9JLhUzcqPVniiFg9VqTw6dfnUHrfaEUjGjFA/+DFEdHH3ZCeFjct8t38viighGdYqwEhAEnSP8Z/UN/uTZrzroGIUAAAAASUVORK5CYII=',
  Ne =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABB0lEQVRIS82VvQ3CQAyFnRUoGIGWgoYSMQUVJQswBwtQUjEFoqShoGUEClYAOZLRi3P+OaRISRUS8z4/2+c0NPDVDKxP4wIsF5PP7f6uSiodzOLn4542uwPVQMYH4KGocZFyIOXBictC0oDL9UGv54mms23LWa/mqV6EAM6exflCQBbiAlC8BMhATIDUXUoi2WsX/NvrRxFgiUuTayA9gBYvlUYDJKbkpAPIiFsuLMgPgLMudbcaGz1HJy2gVjxygae9A8DMvSw9gC6V6yAqhU5I4nsO/imTNUl6GfamiAN470eNts4C/x+/F+ZBExBuUDzVerNqYXkf7iIUsu69L1y4TTMAL+YLkFzsGSkFyYQAAAAASUVORK5CYIIA',
  Pe =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAbVJREFUSIntlMtKw0AUhr/YokRqkSAGurAUgiLSraZvkT5BnsGlO3d5jj5B8wKum7qTrlqE0o0QkFm0xWys40InTm3Sm7gQ/GFIzgx855x/LvAXZNdMAFmtlwD4/KbxVlIQNfzAkYA8udhHj40fFC79wJmb6HcFUSjwA4fWzSPVesnYOkG1XmLUm0oAP3Dod0W6FoWC08uyMbgf85MOMA8KJJOZVLHrWZxdWQBpBzvbgMtHRQCZTGbS9SyuW+e4nkUUfnXhBw6j3lQWNwErW8bPr7jeR6WNpk3ldJ9G004TqL2wa+b6HSi4Hzi4nkWjadNo2nTaMU+DFzrtGPiwRtkUDxPW6kCH97sirVp10GnHRKHAPCgYyWQm9Q1f2cF3uK6nwctcnExmWJVdIwoFVmXXAJafoqzKATrteO4/CgXlo6Ixfn5dYOQmWGaL7vnZlUXr5jGXlWnRurYoeLVeyi00b2GlLTp81Jvm8RcT2DWTeJhIdRSX2bIKDhkWxcNk4RHLs2UVPDMBkFqjLhFsZouuzIumX/9tbNFVyJi7hTcOj/dSeBQKHu7ExvA8ye/j8/X81+/oHfIfC2frtx3xAAAAAElFTkSuQmCC',
  Fe =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAArUlEQVRIie2UsRWAIAxET58jULuJm1m6mZtQuwMWyhNjOAgWNl6FIP8IpwF+fa2ucV+oZVkNAgCsy/HgN2B0x3iadZ7FIERwVGqQM+mtcL9dkyk8p5oKHidnklWUKqiCp1VJMYOwLvfNcszAJQP15KPTM2BZaBmY7jzVm6+oWdRA3jG789yPZq5ACz0HB4CBwWR4WpgMzhaKQZ9gCi8tqo2tFmx5Sbbm1hb/6yPtXRM6Z/YOWwgAAAAASUVORK5CYII=',
  Ie =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAu0lEQVRIie1UuxGDMAyVOUomYA52yRzpU9IzR3bJHExArzQg54S+puIur0On97GFBXB3lAYOZvhZA5wfE3283h9Xo2sVj6JPM4CSAwRuIHMCjtD1SidAoaaJub3cAPEpMBZRyOolk+IRWlCWqi3OYN3yohrnMKD06wYwDj6Z18ah1nYt/DUwk3FDLmjhym8awt/guoE2TG34HOJDi5I1Q/ehZcUtDl9i6rrYU9VGu0/cRcSVqecwwb6b4wsIwjy5qWuN/wAAAABJRU5ErkJggg==',
  Le =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPlJREFUSInlVbENgzAQPCJLVJ6ABtGlSpMJWIANskeKVBTZIxt4ASagSUUXpWECqkhIThHkfJwHbBAoUk5y43/u/t7mDfwdolRqn/zNkuTeAlMQuCT1VV4XjdP3Q9AduVlRKs0eifWirwINAFEqoe7NRyCLJQCY/SyWqAuT88XHnYEuE56cElOUyWuBcWML6C6RJaKgTnaHoxGyRaiAIR+DLX69nHtFJl/TIRGKVf8D5xaNYX97cy/uYPVRMbtNtD0A40CFYp6CBW5U6NNWIHu03mR29QB/BkFetV5OVChYcnaDQAPAkBsVCuSVibFcLvN87BWb/Sb8Np74sVisxYmO1AAAAABJRU5ErkJggg==',
  Re =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0klEQVRIie1UwRGEMAgkV8JVYAOWRjWUZgNWYAvxYzJkDwg697vbGWeMJLuyQIj+mKAEsZrc90igikhfMPNjkVdEfhHTta7G3inwr5C8WILOWROYQQGSASLSH0pmZFnUyQhqYcVnAqkiNxzLSu99G77NGiBsUy1yLGt/vyPiWoTQpFqMKLbLEzAtikQ8hHNgoYmgTVmBkBxFGpjZtSldAw+KXIt0IavyqSwaOcG0Y+zWHDjkH2d0zLMovDKivsfY7MJyU/f2YyxzI5qpfxtDZ/wWThNOcCnuawEeAAAAAElFTkSuQmCC',
  ze =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANtJREFUSEu1lNkRwyAMRO1OKCQdpBFKopF0kELohIycwYOFWB0e82cD+1YX+/bw2h/W38KAnHPj5kopk14IIIl3GIe4AVy81npop5TOgEbIBEChI+cEkiAXABKwNIMEOQEedwg2QihVB8DinLtbQcIAErRCxo66RKAJaPvSXLgA1tzTud6qU5G9Ll1zYCm21q7qJEch0jtEZqZJfn1a+77/7UuLf0v/pDP9vvgWRSCr1Jkfu2gkELCKBKWE76kRIDFUJ1gDns8O8Th3AbTeR/tqiu6Ii3NwV5Df/wGYQa4ZirxeRgAAAABJRU5ErkJgggAA',
  Be =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALJJREFUSInV1cENgzAMBdDfqovQOToT5zBBOXeL7MEcMIp7akWM3Vi2OdRHK37fKAKAk+uS5JDmRgMIAKZSmuZznr/2LYJzeN023Ieh6V0zcak8ASrOt/cGmHHAf8k0lSLi+wsGAk/Q2zwSQMsI1FoPON/eE0DLeABVXGxY8Mermf28xaJlDdDwblkOunHL4RDeGwjjv4ZScG0wDZeGU3EOpON75BQcYJ+KbJwX/3H/R70B5PVOSsiwgM8AAAAASUVORK5CYII=',
  Ve =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlklEQVRIie1VQQqAMAzLxO/5AP+y4/7iA3zgPDikbG1XrYKIAWFsWRLSgcCPNyOXz8UL0qWUEgAgxujiDb14RYBLeIhrkJI1AlVC7cxsIAnBKm4xaEwoeuKAYQZenKqIg6eipv913tfTYp+DVBE7XAq6pzzl/gyUdIEzbkjKWa44mVZE9zWt8aK5mff4M/0Nbof1J/QhbIFgQxZVKNMbAAAAAElFTkSuQmCC',
  He =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAk0lEQVRoge2UoRGAMBAECZYS8HRDw5QSnxKig88gfgaxl59befPi12wZzz22idr6dp3HPEvu5UtgJXb6gb9YgCaPQG3980B9d4VoLECTU0ClMJHdFaKxAE0eAcXCRHZXiMYCNDkFVAoT2V0hGgvQ5BFQLExkd4VoLECTU0ClMJHdFaKxAE0eAcXCRHZXiMYCNMsLvBG5ypkvoIETAAAAAElFTkSuQmCC',
  Ue =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACA0lEQVRYR6WXwWrEMAxEHViWQr+vp576ab332F8rlKWQ4lCHeKLnkdNclk1iWRqPZpTl47WsX49Snu+ltN+n+618P35K+3XP9f3yd1Gc9rzFPf5fakL1hm6qQa8mpUVGSVQw2rUnFCXlFjcEtGJNnoqJ3ls+325rPR69skHd8VIcKmJDKLu5InaqwtygfY5I7wjRWRPRqUIiNL2vCG8IUZfQ2btkXFKj7jtxSInquo1OiSTDcbVDiCpzxL2KcKRHO0IaVJGiFv9vsopY12UOTkqSkqIiSYTr/sv7S1mrUuqZO+I6RHV9llMhh5wuOSSVi474nQ41hLIVkTg6iaAiNPnOyxRWJwGuu2ZpsHGouT0tniWmG2HoJNo+HYecV7n5iHTMjTahl9FmmmT2WLOcUVoMEcoOZWQvxMHRUHByexrKiMCuO0dGWtdq0UOEssfodIsaJhJfnIdIqd3mkWEekaDn7f6leciNpU4qRkmh28+2MHUVEZukIPQyNxeRFMwacqR7nXWMztopueMctbomFc5DjrhkD7NdGSWJX66kyKRTxInMp09NrPMyt4mbZ2YRHSF8cntqWWcDVFS2+0K3J3twycwSegqhkfEdn7nJMRsnnBiJwGSMo6+GYyLZwf64Zv/qcHOPSyKbvIsT6pALTpxxOuS6scY9uX1WUZ2+ULe6BvgFS/BfKlY4GqkAAAAASUVORK5CYIIA',
  We =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYIIA',
  Ge = {
    carrot: je,
    corn: Me,
    garlic: Ne,
    pea: Pe,
    potato: Fe,
    pumpkin: Ie,
    rain: ze,
    shovel: Be,
    sprinkler: Ve,
    tomato: Le,
    water: Re,
  },
  Ke = {
    dirt: Ue,
    pixel: We,
    brownDotBackground: He,
  },
  qe = e => e in Ge,
  Je = l(
    /* @__PURE__ */ d('path', {
      d: 'M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z',
    }),
    'AccountBalance'
  ),
  Ye = l(
    /* @__PURE__ */ d('path', {
      d: 'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
    }),
    'AttachMoney'
  ),
  Xe = l(
    /* @__PURE__ */ d('path', {
      d: 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    }),
    'KeyboardArrowDown'
  ),
  Ze = l(
    /* @__PURE__ */ d('path', {
      d: 'M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    }),
    'KeyboardArrowUp'
  )
l(
  /* @__PURE__ */ d('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' }),
  'Add'
),
  l(/* @__PURE__ */ d('path', { d: 'M19 13H5v-2h14v2z' }), 'Remove')
//#endregion
//#region src/game/types/index.ts
var P = /* @__PURE__ */ (function (e) {
    return (
      (e.CROP = 'CROP'),
      (e.EVENT = 'EVENT'),
      (e.TOOL = 'TOOL'),
      (e.WATER = 'WATER'),
      e
    )
  })({}),
  Qe = e => e.type === 'WATER',
  $e = e => e.type === 'EVENT',
  et = e => e.type === 'TOOL',
  F = /* @__PURE__ */ (function (e) {
    return (
      (e.DANGEROUSLY_SET_CONTEXT = 'DANGEROUSLY_SET_CONTEXT'),
      (e.HARVEST_CROP = 'HARVEST_CROP'),
      (e.INIT = 'INIT'),
      (e.OPERATION_ABORTED = 'OPERATION_ABORTED'),
      (e.RESUME = 'RESUME'),
      (e.PLAY_CARD = 'PLAY_CARD'),
      (e.PLAY_CROP = 'PLAY_CROP'),
      (e.PLAY_EVENT = 'PLAY_EVENT'),
      (e.PLAY_TOOL = 'PLAY_TOOL'),
      (e.PLAY_PLANTABLE_TOOL = 'PLAY_PLANTABLE_TOOL'),
      (e.PLAY_WATER = 'PLAY_WATER'),
      (e.DISCARD_CARD_FROM_FIELD = 'DISCARD_CARD_FROM_FIELD'),
      (e.PLAYER_RAN_OUT_OF_FUNDS = 'PLAYER_RAN_OUT_OF_FUNDS'),
      (e.PROMPT_BOT_FOR_SETUP_ACTION = 'PROMPT_BOT_FOR_SETUP_ACTION'),
      (e.PROMPT_BOT_FOR_TURN_ACTION = 'PROMPT_BOT_FOR_TURN_ACTION'),
      (e.PROMPT_PLAYER_FOR_CROP_TO_WATER = 'PROMPT_PLAYER_FOR_CROP_TO_WATER'),
      (e.PROMPT_PLAYER_FOR_SETUP_ACTION = 'PROMPT_PLAYER_FOR_SETUP_ACTION'),
      (e.PROMPT_PLAYER_FOR_TURN_ACTION = 'PROMPT_PLAYER_FOR_TURN_ACTION'),
      (e.SELECT_CROP_TO_WATER = 'SELECT_CROP_TO_WATER'),
      (e.SELECT_CARD_POSITION = 'SELECT_CARD_POSITION'),
      (e.SET_SHELL = 'SET_SHELL'),
      (e.START_TURN = 'START_TURN'),
      (e.BOT_TURN_INITIALIZED = 'BOT_TURN_INITIALIZED'),
      (e.BOT_TURN_PHASE_COMPLETE = 'BOT_TURN_PHASE_COMPLETE'),
      e
    )
  })({}),
  I = /* @__PURE__ */ (function (e) {
    return (
      (e.INITIALIZING = 'INITIALIZING'),
      (e.PLACING_CROP = 'PLACING_CROP'),
      (e.PLAYING_CROPS = 'PLAYING_CROPS'),
      (e.WATERING_CROPS = 'WATERING_CROPS'),
      (e.WATERING_CROP = 'WATERING_CROP'),
      (e.PLAYING_EVENTS = 'PLAYING_EVENTS'),
      (e.PLAYING_TOOLS = 'PLAYING_TOOLS'),
      (e.HARVESTING_CROPS = 'HARVESTING_CROPS'),
      (e.HARVESTING_CROP = 'HARVESTING_CROP'),
      (e.DONE = 'DONE'),
      e
    )
  })({}),
  L = /* @__PURE__ */ (function (e) {
    return (
      (e.UNINITIALIZED = 'UNINITIALIZED'),
      (e.CHOOSING_CARD_POSITION = 'CHOOSING_CARD_POSITION'),
      (e.GAME_OVER = 'GAME_OVER'),
      (e.PERFORMING_BOT_SETUP_ACTION = 'PERFORMING_BOT_SETUP_ACTION'),
      (e.PERFORMING_BOT_TURN_ACTION = 'PERFORMING_BOT_TURN_ACTION'),
      (e.PLANTING_CARD = 'PLANTING_CARD'),
      (e.PLAYER_WATERING_CROP = 'PLAYER_WATERING_CROP'),
      (e.PLAYING_CARD = 'PLAYING_CARD'),
      (e.PLAYING_EVENT = 'PLAYING_EVENT'),
      (e.PLAYING_TOOL = 'PLAYING_TOOL'),
      (e.WAITING_FOR_PLAYER_SETUP_ACTION = 'WAITING_FOR_PLAYER_SETUP_ACTION'),
      (e.WAITING_FOR_PLAYER_TURN_ACTION = 'WAITING_FOR_PLAYER_TURN_ACTION'),
      e
    )
  })({}),
  tt = /* @__PURE__ */ (function (e) {
    return (
      (e.IS_BOT_PHASE_PLAYING_EVENTS = 'IS_BOT_PHASE_PLAYING_EVENTS'),
      (e.IS_BOT_PHASE_PLAYING_TOOLS = 'IS_BOT_PHASE_PLAYING_TOOLS'),
      (e.IS_SELECTED_IDX_VALID = 'IS_SELECTED_IDX_VALID'),
      (e.IS_SETUP_PHASE = 'IS_SETUP_PHASE'),
      e
    )
  })({}),
  nt = /* @__PURE__ */ (function (e) {
    return (
      (e.CARDS_DRAWN = 'CARDS_DRAWN'),
      (e.CROP_HARVESTED = 'CROP_HARVESTED'),
      (e.CARD_DISCARDED = 'CARD_DISCARDED'),
      (e.CROP_WATERED = 'CROP_WATERED'),
      (e.EVENT_CARD_PLAYED = 'EVENT_CARD_PLAYED'),
      (e.TOOL_CARD_PLAYED = 'TOOL_CARD_PLAYED'),
      (e.ALL_CROPS_WATERED = 'ALL_CROPS_WATERED'),
      e
    )
  })({}),
  rt = []
for (let e = 0; e < 256; ++e) rt.push((e + 256).toString(16).slice(1))
function it(e, t = 0) {
  return (
    rt[e[t + 0]] +
    rt[e[t + 1]] +
    rt[e[t + 2]] +
    rt[e[t + 3]] +
    '-' +
    rt[e[t + 4]] +
    rt[e[t + 5]] +
    '-' +
    rt[e[t + 6]] +
    rt[e[t + 7]] +
    '-' +
    rt[e[t + 8]] +
    rt[e[t + 9]] +
    '-' +
    rt[e[t + 10]] +
    rt[e[t + 11]] +
    rt[e[t + 12]] +
    rt[e[t + 13]] +
    rt[e[t + 14]] +
    rt[e[t + 15]]
  ).toLowerCase()
}
//#endregion
//#region node_modules/uuid/dist/rng.js
var at = new Uint8Array(16)
function ot() {
  return crypto.getRandomValues(at)
}
//#endregion
//#region node_modules/uuid/dist/v4.js
function st(e, t, n) {
  return !t && !e && crypto.randomUUID ? crypto.randomUUID() : ct(e, t, n)
}
function ct(e, t, n) {
  e ||= {}
  let r = e.random ?? e.rng?.() ?? ot()
  if (r.length < 16) throw Error('Random bytes length must be >= 16')
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`)
    for (let e = 0; e < 16; ++e) t[n + e] = r[e]
    return t
  }
  return it(r)
}
//#endregion
//#region src/game/cards/crops/baseToCrop.ts
var lt = e =>
    Object.freeze({
      type: P.CROP,
      ...e,
    }),
  ut = lt({
    id: 'carrot',
    name: 'Carrot',
    waterToMature: 3,
  }),
  dt = lt({
    id: 'corn',
    name: 'Corn',
    waterToMature: 8,
  }),
  ft = lt({
    id: 'garlic',
    name: 'Garlic',
    waterToMature: 11,
  }),
  pt = lt({
    id: 'pea',
    name: 'Pea',
    waterToMature: 9,
  }),
  mt = lt({
    id: 'potato',
    name: 'Potato',
    waterToMature: 5,
  }),
  ht = lt({
    id: 'pumpkin',
    name: 'Pumpkin',
    waterToMature: 4,
  }),
  gt = lt({
    id: 'tomato',
    name: 'Tomato',
    waterToMature: 13,
  }),
  _t = /* @__PURE__ */ Se({
    carrot: () => ut,
    corn: () => dt,
    garlic: () => ft,
    pea: () => pt,
    potato: () => mt,
    pumpkin: () => ht,
    tomato: () => gt,
  }),
  vt = (e, t) => ({
    ...e,
    ...t,
  }),
  yt = (e, t) =>
    vt(e, {
      table: {
        ...e.table,
        ...t,
      },
    }),
  bt = (e, t, n) => {
    let r = z.getPlayer(e, t)
    return (
      (e = yt(e, {
        players: {
          ...e.table.players,
          [t]: {
            ...r,
            ...n,
          },
        },
      })),
      e
    )
  },
  xt = (e, t, n) => {
    let { field: r } = z.getPlayer(e, t)
    return (
      (e = bt(e, t, {
        field: {
          ...r,
          ...n,
        },
      })),
      e
    )
  },
  St = Object.freeze({
    type: P.EVENT,
    id: 'rain',
    name: 'Rain',
    description: 'Waters all unwatered, planted crops for **all** players.',
    applyEffect: e => {
      let { match: t } = e
      for (let e in t.table.players) {
        let n = t.table.players[e]
        if (!n) continue
        let r = n.field.cards.map(n =>
          !n || !un(n) || (e === t.currentPlayerId && n.wasWateredDuringTurn)
            ? n
            : {
                ...n,
                wasWateredDuringTurn: !0,
                waterCards: n.waterCards + 1,
              }
        )
        t = xt(t, e, { cards: r })
      }
      return (
        e.shell.triggerNotification({
          type: nt.ALL_CROPS_WATERED,
          payload: {},
        }),
        {
          ...e,
          match: t,
        }
      )
    },
  }),
  Ct = /* @__PURE__ */ Se({ rain: () => St }),
  wt = /* @__PURE__ */ N((e, t) => {
    ;(function (e, t, n) {
      function r(e) {
        var t = this,
          n = o()
        ;(t.next = function () {
          var e = 2091639 * t.s0 + t.c * 23283064365386963e-26
          return (t.s0 = t.s1), (t.s1 = t.s2), (t.s2 = e - (t.c = e | 0))
        }),
          (t.c = 1),
          (t.s0 = n(' ')),
          (t.s1 = n(' ')),
          (t.s2 = n(' ')),
          (t.s0 -= n(e)),
          t.s0 < 0 && (t.s0 += 1),
          (t.s1 -= n(e)),
          t.s1 < 0 && (t.s1 += 1),
          (t.s2 -= n(e)),
          t.s2 < 0 && (t.s2 += 1),
          (n = null)
      }
      function i(e, t) {
        return (t.c = e.c), (t.s0 = e.s0), (t.s1 = e.s1), (t.s2 = e.s2), t
      }
      function a(e, t) {
        var n = new r(e),
          a = t && t.state,
          o = n.next
        return (
          (o.int32 = function () {
            return (n.next() * 4294967296) | 0
          }),
          (o.double = function () {
            return o() + ((o() * 2097152) | 0) * 11102230246251565e-32
          }),
          (o.quick = o),
          a &&
            (typeof a == 'object' && i(a, n),
            (o.state = function () {
              return i(n, {})
            })),
          o
        )
      }
      function o() {
        var e = 4022871197
        return function (t) {
          t = String(t)
          for (var n = 0; n < t.length; n++) {
            e += t.charCodeAt(n)
            var r = 0.02519603282416938 * e
            ;(e = r >>> 0),
              (r -= e),
              (r *= e),
              (e = r >>> 0),
              (r -= e),
              (e += r * 4294967296)
          }
          return (e >>> 0) * 23283064365386963e-26
        }
      }
      t && t.exports
        ? (t.exports = a)
        : n && n.amd
        ? n(function () {
            return a
          })
        : (this.alea = a)
    })(e, typeof t == 'object' && t, typeof define == 'function' && define)
  }),
  Tt = /* @__PURE__ */ N((e, t) => {
    ;(function (e, t, n) {
      function r(e) {
        var t = this,
          n = ''
        ;(t.x = 0),
          (t.y = 0),
          (t.z = 0),
          (t.w = 0),
          (t.next = function () {
            var e = t.x ^ (t.x << 11)
            return (
              (t.x = t.y),
              (t.y = t.z),
              (t.z = t.w),
              (t.w ^= (t.w >>> 19) ^ e ^ (e >>> 8))
            )
          }),
          e === (e | 0) ? (t.x = e) : (n += e)
        for (var r = 0; r < n.length + 64; r++)
          (t.x ^= n.charCodeAt(r) | 0), t.next()
      }
      function i(e, t) {
        return (t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t
      }
      function a(e, t) {
        var n = new r(e),
          a = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296
          }
        return (
          (o.double = function () {
            do
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
            while (e === 0)
            return e
          }),
          (o.int32 = n.next),
          (o.quick = o),
          a &&
            (typeof a == 'object' && i(a, n),
            (o.state = function () {
              return i(n, {})
            })),
          o
        )
      }
      t && t.exports
        ? (t.exports = a)
        : n && n.amd
        ? n(function () {
            return a
          })
        : (this.xor128 = a)
    })(e, typeof t == 'object' && t, typeof define == 'function' && define)
  }),
  Et = /* @__PURE__ */ N((e, t) => {
    ;(function (e, t, n) {
      function r(e) {
        var t = this,
          n = ''
        ;(t.next = function () {
          var e = t.x ^ (t.x >>> 2)
          return (
            (t.x = t.y),
            (t.y = t.z),
            (t.z = t.w),
            (t.w = t.v),
            ((t.d = (t.d + 362437) | 0) +
              (t.v = t.v ^ (t.v << 4) ^ (e ^ (e << 1)))) |
              0
          )
        }),
          (t.x = 0),
          (t.y = 0),
          (t.z = 0),
          (t.w = 0),
          (t.v = 0),
          e === (e | 0) ? (t.x = e) : (n += e)
        for (var r = 0; r < n.length + 64; r++)
          (t.x ^= n.charCodeAt(r) | 0),
            r == n.length && (t.d = (t.x << 10) ^ (t.x >>> 4)),
            t.next()
      }
      function i(e, t) {
        return (
          (t.x = e.x),
          (t.y = e.y),
          (t.z = e.z),
          (t.w = e.w),
          (t.v = e.v),
          (t.d = e.d),
          t
        )
      }
      function a(e, t) {
        var n = new r(e),
          a = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296
          }
        return (
          (o.double = function () {
            do
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
            while (e === 0)
            return e
          }),
          (o.int32 = n.next),
          (o.quick = o),
          a &&
            (typeof a == 'object' && i(a, n),
            (o.state = function () {
              return i(n, {})
            })),
          o
        )
      }
      t && t.exports
        ? (t.exports = a)
        : n && n.amd
        ? n(function () {
            return a
          })
        : (this.xorwow = a)
    })(e, typeof t == 'object' && t, typeof define == 'function' && define)
  }),
  Dt = /* @__PURE__ */ N((e, t) => {
    ;(function (e, t, n) {
      function r(e) {
        var t = this
        t.next = function () {
          var e = t.x,
            n = t.i,
            r = e[n],
            i
          return (
            (r ^= r >>> 7),
            (i = r ^ (r << 24)),
            (r = e[(n + 1) & 7]),
            (i ^= r ^ (r >>> 10)),
            (r = e[(n + 3) & 7]),
            (i ^= r ^ (r >>> 3)),
            (r = e[(n + 4) & 7]),
            (i ^= r ^ (r << 7)),
            (r = e[(n + 7) & 7]),
            (r ^= r << 13),
            (i ^= r ^ (r << 9)),
            (e[n] = i),
            (t.i = (n + 1) & 7),
            i
          )
        }
        function n(e, t) {
          var n,
            r = []
          if (t === (t | 0)) r[0] = t
          else
            for (t = '' + t, n = 0; n < t.length; ++n)
              r[n & 7] =
                (r[n & 7] << 15) ^ ((t.charCodeAt(n) + r[(n + 1) & 7]) << 13)
          for (; r.length < 8; ) r.push(0)
          for (n = 0; n < 8 && r[n] === 0; ++n);
          for (
            n == 8 ? (r[7] = -1) : r[n], e.x = r, e.i = 0, n = 256;
            n > 0;
            --n
          )
            e.next()
        }
        n(t, e)
      }
      function i(e, t) {
        return (t.x = e.x.slice()), (t.i = e.i), t
      }
      function a(e, t) {
        e ??= +(/* @__PURE__ */ new Date())
        var n = new r(e),
          a = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296
          }
        return (
          (o.double = function () {
            do
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
            while (e === 0)
            return e
          }),
          (o.int32 = n.next),
          (o.quick = o),
          a &&
            (a.x && i(a, n),
            (o.state = function () {
              return i(n, {})
            })),
          o
        )
      }
      t && t.exports
        ? (t.exports = a)
        : n && n.amd
        ? n(function () {
            return a
          })
        : (this.xorshift7 = a)
    })(e, typeof t == 'object' && t, typeof define == 'function' && define)
  }),
  Ot = /* @__PURE__ */ N((e, t) => {
    ;(function (e, t, n) {
      function r(e) {
        var t = this
        t.next = function () {
          var e = t.w,
            n = t.X,
            r = t.i,
            i,
            a
          return (
            (t.w = e = (e + 1640531527) | 0),
            (a = n[(r + 34) & 127]),
            (i = n[(r = (r + 1) & 127)]),
            (a ^= a << 13),
            (i ^= i << 17),
            (a ^= a >>> 15),
            (i ^= i >>> 12),
            (a = n[r] = a ^ i),
            (t.i = r),
            (a + (e ^ (e >>> 16))) | 0
          )
        }
        function n(e, t) {
          var n,
            r,
            i,
            a,
            o,
            s = [],
            c = 128
          for (
            t === (t | 0)
              ? ((r = t), (t = null))
              : ((t += '\0'), (r = 0), (c = Math.max(c, t.length))),
              i = 0,
              a = -32;
            a < c;
            ++a
          )
            t && (r ^= t.charCodeAt((a + 32) % t.length)),
              a === 0 && (o = r),
              (r ^= r << 10),
              (r ^= r >>> 15),
              (r ^= r << 4),
              (r ^= r >>> 13),
              a >= 0 &&
                ((o = (o + 1640531527) | 0),
                (n = s[a & 127] ^= r + o),
                (i = n == 0 ? i + 1 : 0))
          for (
            i >= 128 && (s[((t && t.length) || 0) & 127] = -1),
              i = 127,
              a = 512;
            a > 0;
            --a
          )
            (r = s[(i + 34) & 127]),
              (n = s[(i = (i + 1) & 127)]),
              (r ^= r << 13),
              (n ^= n << 17),
              (r ^= r >>> 15),
              (n ^= n >>> 12),
              (s[i] = r ^ n)
          ;(e.w = o), (e.X = s), (e.i = i)
        }
        n(t, e)
      }
      function i(e, t) {
        return (t.i = e.i), (t.w = e.w), (t.X = e.X.slice()), t
      }
      function a(e, t) {
        e ??= +(/* @__PURE__ */ new Date())
        var n = new r(e),
          a = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296
          }
        return (
          (o.double = function () {
            do
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
            while (e === 0)
            return e
          }),
          (o.int32 = n.next),
          (o.quick = o),
          a &&
            (a.X && i(a, n),
            (o.state = function () {
              return i(n, {})
            })),
          o
        )
      }
      t && t.exports
        ? (t.exports = a)
        : n && n.amd
        ? n(function () {
            return a
          })
        : (this.xor4096 = a)
    })(e, typeof t == 'object' && t, typeof define == 'function' && define)
  }),
  kt = /* @__PURE__ */ N((e, t) => {
    ;(function (e, t, n) {
      function r(e) {
        var t = this,
          n = ''
        ;(t.next = function () {
          var e = t.b,
            n = t.c,
            r = t.d,
            i = t.a
          return (
            (e = (e << 25) ^ (e >>> 7) ^ n),
            (n = (n - r) | 0),
            (r = (r << 24) ^ (r >>> 8) ^ i),
            (i = (i - e) | 0),
            (t.b = e = (e << 20) ^ (e >>> 12) ^ n),
            (t.c = n = (n - r) | 0),
            (t.d = (r << 16) ^ (n >>> 16) ^ i),
            (t.a = (i - e) | 0)
          )
        }),
          (t.a = 0),
          (t.b = 0),
          (t.c = -1640531527),
          (t.d = 1367130551),
          e === Math.floor(e)
            ? ((t.a = (e / 4294967296) | 0), (t.b = e | 0))
            : (n += e)
        for (var r = 0; r < n.length + 20; r++)
          (t.b ^= n.charCodeAt(r) | 0), t.next()
      }
      function i(e, t) {
        return (t.a = e.a), (t.b = e.b), (t.c = e.c), (t.d = e.d), t
      }
      function a(e, t) {
        var n = new r(e),
          a = t && t.state,
          o = function () {
            return (n.next() >>> 0) / 4294967296
          }
        return (
          (o.double = function () {
            do
              var e =
                ((n.next() >>> 11) + (n.next() >>> 0) / 4294967296) / (1 << 21)
            while (e === 0)
            return e
          }),
          (o.int32 = n.next),
          (o.quick = o),
          a &&
            (typeof a == 'object' && i(a, n),
            (o.state = function () {
              return i(n, {})
            })),
          o
        )
      }
      t && t.exports
        ? (t.exports = a)
        : n && n.amd
        ? n(function () {
            return a
          })
        : (this.tychei = a)
    })(e, typeof t == 'object' && t, typeof define == 'function' && define)
  }),
  At = /* @__PURE__ */ N((e, t) => {
    t.exports = {}
  }),
  jt = /* @__PURE__ */ N((e, t) => {
    ;(function (e, n, r) {
      var i = 256,
        a = 6,
        o = 52,
        s = 'random',
        c = r.pow(i, a),
        l = r.pow(2, o),
        u = l * 2,
        d = i - 1,
        f
      function p(e, t, o) {
        var d = []
        t = t == 1 ? { entropy: !0 } : t || {}
        var f = _(g(t.entropy ? [e, y(n)] : e ?? v(), 3), d),
          p = new m(d),
          b = function () {
            for (var e = p.g(a), t = c, n = 0; e < l; )
              (e = (e + n) * i), (t *= i), (n = p.g(1))
            for (; e >= u; ) (e /= 2), (t /= 2), (n >>>= 1)
            return (e + n) / t
          }
        return (
          (b.int32 = function () {
            return p.g(4) | 0
          }),
          (b.quick = function () {
            return p.g(4) / 4294967296
          }),
          (b.double = b),
          _(y(p.S), n),
          (
            t.pass ||
            o ||
            function (e, t, n, i) {
              return (
                i &&
                  (i.S && h(i, p),
                  (e.state = function () {
                    return h(p, {})
                  })),
                n ? ((r[s] = e), t) : e
              )
            }
          )(b, f, 'global' in t ? t.global : this == r, t.state)
        )
      }
      function m(e) {
        var t,
          n = e.length,
          r = this,
          a = 0,
          o = (r.i = r.j = 0),
          s = (r.S = [])
        for (n || (e = [n++]); a < i; ) s[a] = a++
        for (a = 0; a < i; a++)
          (s[a] = s[(o = d & (o + e[a % n] + (t = s[a])))]), (s[o] = t)
        ;(r.g = function (e) {
          for (var t, n = 0, a = r.i, o = r.j, s = r.S; e--; )
            (t = s[(a = d & (a + 1))]),
              (n = n * i + s[d & ((s[a] = s[(o = d & (o + t))]) + (s[o] = t))])
          return (r.i = a), (r.j = o), n
        })(i)
      }
      function h(e, t) {
        return (t.i = e.i), (t.j = e.j), (t.S = e.S.slice()), t
      }
      function g(e, t) {
        var n = [],
          r = typeof e,
          i
        if (t && r == 'object')
          for (i in e)
            try {
              n.push(g(e[i], t - 1))
            } catch {}
        return n.length ? n : r == 'string' ? e : e + '\0'
      }
      function _(e, t) {
        for (var n = e + '', r, i = 0; i < n.length; )
          t[d & i] = d & ((r ^= t[d & i] * 19) + n.charCodeAt(i++))
        return y(t)
      }
      function v() {
        try {
          var t
          return (
            f && (t = f.randomBytes)
              ? (t = t(i))
              : ((t = new Uint8Array(i)),
                (e.crypto || e.msCrypto).getRandomValues(t)),
            y(t)
          )
        } catch {
          var r = e.navigator,
            a = r && r.plugins
          return [+(/* @__PURE__ */ new Date()), e, a, e.screen, y(n)]
        }
      }
      function y(e) {
        return String.fromCharCode.apply(0, e)
      }
      if ((_(r.random(), n), typeof t == 'object' && t.exports)) {
        t.exports = p
        try {
          f = At()
        } catch {}
      } else
        typeof define == 'function' && define.amd
          ? define(function () {
              return p
            })
          : (r['seed' + s] = p)
    })(typeof self < 'u' ? self : e, [], Math)
  }),
  Mt = /* @__PURE__ */ we(
    /* @__PURE__ */ N((e, t) => {
      var n = wt(),
        r = Tt(),
        i = Et(),
        a = Dt(),
        o = Ot(),
        s = kt(),
        c = jt()
      ;(c.alea = n),
        (c.xor128 = r),
        (c.xorwow = i),
        (c.xorshift7 = a),
        (c.xor4096 = o),
        (c.tychei = s),
        (t.exports = c)
    })()
  ),
  Nt = new (class {
    constructor(e) {
      this.rng = e ? (0, Mt.default)(e) : () => Math.random()
    }
    generate() {
      return this.rng()
    }
    shuffle(e) {
      let t = [...e]
      for (let e = t.length - 1; e > 0; e--) {
        let n = Math.floor(this.generate() * (e + 1)),
          r = t[e]
        ;(t[e] = t[n]), (t[n] = r)
      }
      return t
    }
    randomIndex(e) {
      if (e.length !== 0) return Math.floor(this.generate() * e.length)
    }
    chooseElement(e) {
      let t = this.randomIndex(e)
      if (t !== void 0) return e[t]
    }
    chooseIntegerBetween(e, t) {
      if (![e, t].every(Number.isInteger))
        throw Error(`chooseInteger requires integers. Received: ${e} and ${t}`)
      let n = Math.min(e, t),
        r = Math.max(e, t)
      if (n === void 0 || r === void 0)
        throw TypeError(
          `chooseInteger requires two numbers. Received: ${e} and ${t}`
        )
      return Math.floor(this.generate() * (r - n + 1)) + n
    }
  })(new URLSearchParams(window.location.search).get('seed')),
  Pt = (e, t, n = 1) => {
    let r = z.getPlayer(e, t),
      i = [...r.hand],
      a = [...r.deck],
      o = [...r.discardPile],
      s = a.slice(0, n)
    return (
      (a = a.slice(n)),
      (i = [...i, ...s]),
      a.length === 0 && ((a = Nt.shuffle(o)), (o = [])),
      (e = bt(e, t, {
        deck: a,
        hand: i,
        discardPile: o,
      })),
      e
    )
  },
  Ft = class extends Error {
    constructor(e) {
      super(`[PlayerOutOfFundsError] Player ${e} is out of funds.`),
        (this.playerId = e)
    }
  },
  It = class extends Error {
    constructor(e) {
      super(...arguments), (this.message = `[MatchStateCorruptError] ${e}`)
    }
  },
  Lt = class extends Error {
    constructor(e) {
      super(`[GameStateCorruptError] ${e}`)
    }
  },
  Rt = class extends Error {
    constructor(e) {
      super(...arguments),
        (this.message = `[FieldFullError] Player ${e} has no room in the field.`)
    }
  },
  zt = class extends Error {
    constructor(e, t) {
      super(...arguments),
        (this.message = `[InvalidCardIndexError] Card index ${e} is out of bounds for player ${t}.`)
    }
  },
  Bt = class extends Error {
    constructor(e) {
      super(...arguments), (this.message = `[InvalidCardError] ${e}`)
    }
  },
  Vt = class extends Error {
    constructor(e) {
      super(...arguments),
        (this.message = `[PlayerNotFoundError] Player ${e} not found.`)
    }
  },
  Ht = class extends Error {
    constructor(e) {
      super(...arguments), (this.message = `[UnimplementedError] ${e}`)
    }
  }
//#endregion
//#region src/game/types/assertions/index.ts
function R(e, t = `${String(e)} is null or undefined`) {
  if (e == null) throw TypeError(t)
}
function Ut(e) {
  if (!(e in Qt)) throw new It(`${e} is not a valid tool card ID`)
}
function Wt(e) {
  if (!$e(e)) throw new It(`${e.id} is not an event card`)
}
function Gt(e) {
  if (!et(e)) throw new It(`${e.id} is not a tool card`)
}
function Kt(e) {
  if (!(e in L)) throw TypeError(`${e} is not a MatchState`)
}
function qt(e) {
  if (hn(e)) throw TypeError('stateValue is not a string')
  if (!(e in I)) throw TypeError(`${e} is not a BotTurnActionState`)
}
function Jt(e) {
  if (!un(e)) throw TypeError(`${JSON.stringify(e)} is not IPlayedCrop`)
}
//#endregion
//#region src/game/cards/tools/shovel.ts
var Yt = Object.freeze({
    type: P.TOOL,
    id: 'shovel',
    name: 'Shovel',
    description:
      'Draw two cards from the deck. If played, skip the card draw at the start of the next turn.',
    applyEffect: e => {
      let { match: t } = e,
        { currentPlayerId: n } = t
      return (
        R(n),
        (t = Pt(t, n, 2)),
        e.shell.triggerNotification({
          type: nt.CARDS_DRAWN,
          payload: {
            howMany: 2,
            playerId: n,
          },
        }),
        {
          ...e,
          match: t,
        }
      )
    },
    onStartFollowingTurn: e => ({
      ...e,
      match: {
        ...e.match,
        cardsToDrawAtTurnStart: 0,
      },
    }),
  }),
  Xt = (e, t, n, r) => {
    let { cards: i } = z.getPlayer(e, t).field,
      a = i[n]
    if (!a)
      throw RangeError(
        `cropIdx ${n} references a crop that is not in the field.`
      )
    Jt(a)
    let o = [
      ...i.slice(0, n),
      {
        ...a,
        ...r,
      },
      ...i.slice(n + 1),
    ]
    return (e = xt(e, t, { cards: o })), e
  },
  Zt = Object.freeze({
    type: P.TOOL,
    id: 'sprinkler',
    name: 'Sprinkler',
    description:
      'Waters adjacent crop cards at the start of the owners turn when planted in the Field.',
    isPlantable: !0,
    applyDailyEffect: (e, t) => {
      let {
          match: { currentPlayerId: n },
        } = e,
        { match: r } = e
      R(n)
      let i = r.table.players[n]
      R(i)
      let a = t - 1,
        o = t + 1,
        s = i.field.cards[a],
        c = i.field.cards[o]
      for (let { maybeCard: e, idx: t } of [
        {
          maybeCard: s,
          idx: a,
        },
        {
          maybeCard: c,
          idx: o,
        },
      ])
        !un(e) ||
          e.wasWateredDuringTurn ||
          (r = Xt(r, n, t, {
            wasWateredDuringTurn: !0,
            waterCards: e.waterCards + 1,
          }))
      return (
        (e = {
          ...e,
          match: r,
        }),
        e
      )
    },
  }),
  Qt = /* @__PURE__ */ Se({
    shovel: () => Yt,
    sprinkler: () => Zt,
  }),
  $t = Object.freeze({
    type: P.WATER,
    id: 'water',
    name: 'Water',
  }),
  en = /* @__PURE__ */ Se({ water: () => $t }),
  tn = /* @__PURE__ */ Se({
    allCards: () => rn,
    carrot: () => ut,
    corn: () => dt,
    cropCards: () => _t,
    eventCards: () => Ct,
    garlic: () => ft,
    instantiate: () => nn,
    pea: () => pt,
    potato: () => mt,
    pumpkin: () => ht,
    rain: () => St,
    shovel: () => Yt,
    sprinkler: () => Zt,
    tomato: () => gt,
    toolCards: () => Qt,
    water: () => $t,
    waterCards: () => en,
  }),
  nn = e => ({
    ...e,
    instanceId: st(),
  }),
  rn = Object.fromEntries(
    Object.values({
      ..._t,
      ...Ct,
      ...Qt,
      ...en,
    }).map(e => [e.id, e])
  ),
  an = e => typeof e == 'object' && !!e,
  on = e =>
    an(e)
      ? 'id' in e &&
        typeof e.id == 'string' &&
        'type' in e &&
        typeof e.type == 'string' &&
        e.type in P &&
        'instanceId' in e &&
        typeof e.instanceId == 'string'
      : !1,
  sn = e =>
    an(e)
      ? 'id' in e && typeof e.id == 'string' && 'type' in e && e.type === P.CROP
      : !1,
  cn = e => e.type === P.CROP,
  ln = e => (e.type === P.TOOL && e.isPlantable ? !0 : cn(e)),
  un = e => {
    if (!an(e)) return !1
    let t = e
    return (
      'instance' in t &&
      on(t.instance) &&
      cn(t.instance) &&
      'waterCards' in t &&
      typeof t.waterCards == 'number' &&
      'wasWateredDuringTurn' in t &&
      typeof t.wasWateredDuringTurn == 'boolean'
    )
  },
  dn = e => {
    if (!an(e)) return !1
    let t = e
    return 'instance' in t && on(t.instance) && et(t.instance)
  },
  fn = e => un(e) || dn(e),
  pn = e => e in tn,
  mn = e =>
    an(e) &&
    'id' in e &&
    typeof e.id == 'string' &&
    pn(e.id) &&
    'name' in e &&
    typeof e.name == 'string' &&
    'type' in e &&
    typeof e.type == 'string' &&
    e.type in P,
  hn = e => an(e),
  z = new (class {
    constructor() {
      ;(this.getCardInstanceFromHand = (e, t, n) => {
        let { hand: r } = this.getPlayer(e, t),
          i = r[n]
        if (!i) throw Error(`Card index ${n} is not in player ${t}'s hand`)
        return i
      }),
        (this.getPlayedCardFromField = (e, t, n) => {
          let { cards: r } = this.getPlayer(e, t).field,
            i = r[n]
          if (!i) throw new zt(n, t)
          return i
        }),
        (this.getOpponentPlayerIds = e =>
          Object.keys(e.table.players).filter(
            t => t !== e.sessionOwnerPlayerId
          )),
        (this.getPlayer = (e, t) => {
          let n = e.table.players[t]
          if (!n) throw new Vt(t)
          return n
        }),
        (this.findCropIndexesInDeck = (e, t, n = 1) => {
          let { deck: r } = this.getPlayer(e, t),
            i = []
          for (let e = 0; e < n && e <= r.length - 1 && i.length < n; e++) {
            let t = r[e]
            t && cn(t) && (i = [...i, e])
          }
          return i
        }),
        (this.findCropIndexesInPlayerHand = (e, t) =>
          this.getPlayer(e, t).hand.reduce(
            (e, t, n) => (cn(t) && (e = [...e, n]), e),
            []
          )),
        (this.findWaterIndexesInPlayerHand = (e, t) =>
          this.getPlayer(e, t).hand.reduce(
            (e, t, n) => (Qe(t) && (e = [...e, n]), e),
            []
          )),
        (this.findEventIndexesInPlayerHand = (e, t) =>
          this.getPlayer(e, t).hand.reduce(
            (e, t, n) => ($e(t) && (e = [...e, n]), e),
            []
          )),
        (this.findToolIndexesInPlayerHand = (e, t) =>
          this.getPlayer(e, t).hand.reduce(
            (e, t, n) => (et(t) && (e = [...e, n]), e),
            []
          )),
        (this.playerIds = e => Object.keys(e.table.players).sort()),
        (this.nextPlayerIndex = e => {
          let { currentPlayerId: t } = e
          R(t)
          let n = Object.keys(e.table.players).sort()
          return (n.indexOf(t) + 1) % n.length
        }),
        (this.fullPlots = (e, t) => {
          let { field: n } = z.getPlayer(e, t),
            { cards: r } = n
          return r.filter(e => !!e)
        })
    }
    getCropFromHand(e, t, n) {
      let r = this.getCardInstanceFromHand(e, t, n)
      if (!sn(r)) throw new Bt(`${r.id} is not a crop card.`)
      return r
    }
  })(),
  B = /* @__PURE__ */ (function (e) {
    return (e.SMALL = 'SMALL'), (e.MEDIUM = 'MEDIUM'), (e.LARGE = 'LARGE'), e
  })({}),
  gn = {
    [B.SMALL]: {
      height: '14rem',
      width: '8rem',
    },
    [B.MEDIUM]: {
      height: '21rem',
      width: '12rem',
    },
    [B.LARGE]: {
      height: '28rem',
      width: '16rem',
    },
  },
  _n = 20,
  vn = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
    toJSON: () => {
      throw Error('Unimplemented toJSON called')
    },
  },
  yn = ({ cardSize: e }) => {
    let t = s(),
      n = A(),
      [r, i] = j(vn)
    D(() => {
      let e = () => {
        n.current && i(n.current.getBoundingClientRect())
      }
      return (
        e(),
        window.addEventListener('resize', e),
        () => {
          window.removeEventListener('resize', e)
        }
      )
    }, [n])
    let a = window.innerWidth / 2,
      o = window.innerHeight / 2,
      c = `calc(${r.left}px + ${gn[e].width} / 2)`,
      l = `calc(${r.top}px + ${gn[e].height} / 2)`,
      u = `calc(${a}px - ${c})`,
      d = `calc(${o}px - ${l})`
    return {
      containerRef: n,
      selectedCardSxProps: {
        boxShadow: t.shadows[11],
        transform: `translate(${u}, ${d}) scale(1)`,
        zIndex: _n,
      },
    }
  }
//#endregion
//#region node_modules/comma-separated-tokens/index.js
function bn(e, t) {
  let n = t || {}
  return (e[e.length - 1] === '' ? [...e, ''] : e)
    .join((n.padRight ? ' ' : '') + ',' + (n.padLeft === !1 ? '' : ' '))
    .trim()
}
//#endregion
//#region node_modules/estree-util-is-identifier-name/lib/index.js
var xn = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Sn = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Cn = {}
function wn(e, t) {
  return ((t || Cn).jsx ? Sn : xn).test(e)
}
//#endregion
//#region node_modules/hast-util-whitespace/lib/index.js
var Tn = /[ \t\n\f\r]/g
function En(e) {
  return typeof e == 'object' ? (e.type === 'text' ? Dn(e.value) : !1) : Dn(e)
}
function Dn(e) {
  return e.replace(Tn, '') === ''
}
//#endregion
//#region node_modules/property-information/lib/util/schema.js
var On = class {
  constructor(e, t, n) {
    ;(this.normal = t), (this.property = e), n && (this.space = n)
  }
}
;(On.prototype.normal = {}),
  (On.prototype.property = {}),
  (On.prototype.space = void 0)
//#endregion
//#region node_modules/property-information/lib/util/merge.js
function kn(e, t) {
  let n = {},
    r = {}
  for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal)
  return new On(n, r, t)
}
//#endregion
//#region node_modules/property-information/lib/normalize.js
function An(e) {
  return e.toLowerCase()
}
//#endregion
//#region node_modules/property-information/lib/util/info.js
var jn = class {
  constructor(e, t) {
    ;(this.attribute = t), (this.property = e)
  }
}
;(jn.prototype.attribute = ''),
  (jn.prototype.booleanish = !1),
  (jn.prototype.boolean = !1),
  (jn.prototype.commaOrSpaceSeparated = !1),
  (jn.prototype.commaSeparated = !1),
  (jn.prototype.defined = !1),
  (jn.prototype.mustUseProperty = !1),
  (jn.prototype.number = !1),
  (jn.prototype.overloadedBoolean = !1),
  (jn.prototype.property = ''),
  (jn.prototype.spaceSeparated = !1),
  (jn.prototype.space = void 0)
//#endregion
//#region node_modules/property-information/lib/util/types.js
var Mn = /* @__PURE__ */ Se({
    boolean: () => V,
    booleanish: () => H,
    commaOrSpaceSeparated: () => In,
    commaSeparated: () => Fn,
    number: () => U,
    overloadedBoolean: () => Pn,
    spaceSeparated: () => W,
  }),
  Nn = 0,
  V = Ln(),
  H = Ln(),
  Pn = Ln(),
  U = Ln(),
  W = Ln(),
  Fn = Ln(),
  In = Ln()
function Ln() {
  return 2 ** ++Nn
}
//#endregion
//#region node_modules/property-information/lib/util/defined-info.js
var Rn = Object.keys(Mn),
  zn = class extends jn {
    constructor(e, t, n, r) {
      let i = -1
      if ((super(e, t), Bn(this, 'space', r), typeof n == 'number'))
        for (; ++i < Rn.length; ) {
          let e = Rn[i]
          Bn(this, Rn[i], (n & Mn[e]) === Mn[e])
        }
    }
  }
zn.prototype.defined = !0
function Bn(e, t, n) {
  n && (e[t] = n)
}
//#endregion
//#region node_modules/property-information/lib/util/create.js
function Vn(e) {
  let t = {},
    n = {}
  for (let [r, i] of Object.entries(e.properties)) {
    let a = new zn(r, e.transform(e.attributes || {}, r), i, e.space)
    e.mustUseProperty &&
      e.mustUseProperty.includes(r) &&
      (a.mustUseProperty = !0),
      (t[r] = a),
      (n[An(r)] = r),
      (n[An(a.attribute)] = r)
  }
  return new On(t, n, e.space)
}
//#endregion
//#region node_modules/property-information/lib/aria.js
var Hn = Vn({
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
    role: null,
  },
  transform(e, t) {
    return t === 'role' ? t : 'aria-' + t.slice(4).toLowerCase()
  },
})
//#endregion
//#region node_modules/property-information/lib/util/case-sensitive-transform.js
function Un(e, t) {
  return t in e ? e[t] : t
}
//#endregion
//#region node_modules/property-information/lib/util/case-insensitive-transform.js
function Wn(e, t) {
  return Un(e, t.toLowerCase())
}
//#endregion
//#region node_modules/property-information/lib/html.js
var Gn = Vn({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Fn,
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
      coords: U | Fn,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: V,
      defer: V,
      dir: null,
      dirName: null,
      disabled: V,
      download: Pn,
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
      hidden: Pn,
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
      unselectable: null,
    },
    space: 'html',
    transform: Wn,
  }),
  Kn = Vn({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: In,
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
      g1: Fn,
      g2: Fn,
      glyphName: Fn,
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
      kernelMatrix: In,
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
      property: In,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: In,
      rev: In,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: In,
      requiredFeatures: In,
      requiredFonts: In,
      requiredFormats: In,
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
      strokeDashArray: In,
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
      systemLanguage: In,
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
      typeOf: In,
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
      zoomAndPan: null,
    },
    space: 'svg',
    transform: Un,
  }),
  qn = Vn({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(e, t) {
      return 'xlink:' + t.slice(5).toLowerCase()
    },
  }),
  Jn = Vn({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: {
      xmlnsXLink: null,
      xmlns: null,
    },
    space: 'xmlns',
    transform: Wn,
  }),
  Yn = Vn({
    properties: {
      xmlBase: null,
      xmlLang: null,
      xmlSpace: null,
    },
    space: 'xml',
    transform(e, t) {
      return 'xml:' + t.slice(3).toLowerCase()
    },
  }),
  Xn = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Zn = /[A-Z]/g,
  Qn = /-[a-z]/g,
  $n = /^data[-\w.:]+$/i
function er(e, t) {
  let n = An(t),
    r = t,
    i = jn
  if (n in e.normal) return e.property[e.normal[n]]
  if (n.length > 4 && n.slice(0, 4) === 'data' && $n.test(t)) {
    if (t.charAt(4) === '-') {
      let e = t.slice(5).replace(Qn, nr)
      r = 'data' + e.charAt(0).toUpperCase() + e.slice(1)
    } else {
      let e = t.slice(4)
      if (!Qn.test(e)) {
        let n = e.replace(Zn, tr)
        n.charAt(0) !== '-' && (n = '-' + n), (t = 'data' + n)
      }
    }
    i = zn
  }
  return new i(r, t)
}
function tr(e) {
  return '-' + e.toLowerCase()
}
function nr(e) {
  return e.charAt(1).toUpperCase()
}
//#endregion
//#region node_modules/property-information/index.js
var rr = kn([Hn, Gn, qn, Jn, Yn], 'html'),
  ir = kn([Hn, Kn, qn, Jn, Yn], 'svg')
//#endregion
//#region node_modules/space-separated-tokens/index.js
function ar(e) {
  return e.join(' ').trim()
}
//#endregion
//#region node_modules/inline-style-parser/index.js
var or = /* @__PURE__ */ N((e, t) => {
    var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      r = /\n/g,
      i = /^\s*/,
      a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      o = /^:\s*/,
      s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      c = /^[;\s]*/,
      l = /^\s+|\s+$/g,
      u = '\n',
      d = '/',
      f = '*',
      p = '',
      m = 'comment',
      h = 'declaration'
    t.exports = function (e, t) {
      if (typeof e != 'string')
        throw TypeError('First argument must be a string')
      if (!e) return []
      t ||= {}
      var l = 1,
        _ = 1
      function v(e) {
        var t = e.match(r)
        t && (l += t.length)
        var n = e.lastIndexOf(u)
        _ = ~n ? e.length - n : _ + e.length
      }
      function y() {
        var e = {
          line: l,
          column: _,
        }
        return function (t) {
          return (t.position = new b(e)), w(), t
        }
      }
      function b(e) {
        ;(this.start = e),
          (this.end = {
            line: l,
            column: _,
          }),
          (this.source = t.source)
      }
      b.prototype.content = e
      var x = []
      function S(n) {
        var r = /* @__PURE__ */ Error(t.source + ':' + l + ':' + _ + ': ' + n)
        if (
          ((r.reason = n),
          (r.filename = t.source),
          (r.line = l),
          (r.column = _),
          (r.source = e),
          t.silent)
        )
          x.push(r)
        else throw r
      }
      function C(t) {
        var n = t.exec(e)
        if (n) {
          var r = n[0]
          return v(r), (e = e.slice(r.length)), n
        }
      }
      function w() {
        C(i)
      }
      function T(e) {
        var t
        for (e ||= []; (t = E()); ) t !== !1 && e.push(t)
        return e
      }
      function E() {
        var t = y()
        if (!(d != e.charAt(0) || f != e.charAt(1))) {
          for (
            var n = 2;
            p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));

          )
            ++n
          if (((n += 2), p === e.charAt(n - 1)))
            return S('End of comment missing')
          var r = e.slice(2, n - 2)
          return (
            (_ += 2),
            v(r),
            (e = e.slice(n)),
            (_ += 2),
            t({
              type: m,
              comment: r,
            })
          )
        }
      }
      function D() {
        var e = y(),
          t = C(a)
        if (t) {
          if ((E(), !C(o))) return S("property missing ':'")
          var r = C(s),
            i = e({
              type: h,
              property: g(t[0].replace(n, p)),
              value: r ? g(r[0].replace(n, p)) : p,
            })
          return C(c), i
        }
      }
      function O() {
        var e = []
        T(e)
        for (var t; (t = D()); ) t !== !1 && (e.push(t), T(e))
        return e
      }
      return w(), O()
    }
    function g(e) {
      return e ? e.replace(l, p) : p
    }
  }),
  sr = /* @__PURE__ */ N(e => {
    var t =
      (e && e.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e }
      }
    Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = r)
    var n = t(or())
    function r(e, t) {
      var r = null
      if (!e || typeof e != 'string') return r
      var i = (0, n.default)(e),
        a = typeof t == 'function'
      return (
        i.forEach(function (e) {
          if (e.type === 'declaration') {
            var n = e.property,
              i = e.value
            a ? t(n, i, e) : i && ((r ||= {}), (r[n] = i))
          }
        }),
        r
      )
    }
  }),
  cr = /* @__PURE__ */ N(e => {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.camelCase = void 0)
    var t = /^--[a-zA-Z0-9_-]+$/,
      n = /-([a-z])/g,
      r = /^[^-]+$/,
      i = /^-(webkit|moz|ms|o|khtml)-/,
      a = /^-(ms)-/,
      o = function (e) {
        return !e || r.test(e) || t.test(e)
      },
      s = function (e, t) {
        return t.toUpperCase()
      },
      c = function (e, t) {
        return `${t}-`
      }
    e.camelCase = function (e, t) {
      return (
        t === void 0 && (t = {}),
        o(e)
          ? e
          : ((e = e.toLowerCase()),
            (e = t.reactCompat ? e.replace(a, c) : e.replace(i, c)),
            e.replace(n, s))
      )
    }
  }),
  lr = /* @__PURE__ */ N((e, t) => {
    var n = (
        (e && e.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e }
        }
      )(sr()),
      r = cr()
    function i(e, t) {
      var i = {}
      return (
        !e ||
          typeof e != 'string' ||
          (0, n.default)(e, function (e, n) {
            e && n && (i[(0, r.camelCase)(e, t)] = n)
          }),
        i
      )
    }
    ;(i.default = i), (t.exports = i)
  }),
  ur = fr('end'),
  dr = fr('start')
function fr(e) {
  return t
  function t(t) {
    let n = (t && t.position && t.position[e]) || {}
    if (
      typeof n.line == 'number' &&
      n.line > 0 &&
      typeof n.column == 'number' &&
      n.column > 0
    )
      return {
        line: n.line,
        column: n.column,
        offset:
          typeof n.offset == 'number' && n.offset > -1 ? n.offset : void 0,
      }
  }
}
function pr(e) {
  let t = dr(e),
    n = ur(e)
  if (t && n)
    return {
      start: t,
      end: n,
    }
}
//#endregion
//#region node_modules/unist-util-stringify-position/lib/index.js
function mr(e) {
  return !e || typeof e != 'object'
    ? ''
    : 'position' in e || 'type' in e
    ? gr(e.position)
    : 'start' in e || 'end' in e
    ? gr(e)
    : 'line' in e || 'column' in e
    ? hr(e)
    : ''
}
function hr(e) {
  return _r(e && e.line) + ':' + _r(e && e.column)
}
function gr(e) {
  return hr(e && e.start) + '-' + hr(e && e.end)
}
function _r(e) {
  return e && typeof e == 'number' ? e : 1
}
//#endregion
//#region node_modules/vfile-message/lib/index.js
var vr = class extends Error {
  constructor(e, t, n) {
    super(), typeof t == 'string' && ((n = t), (t = void 0))
    let r = '',
      i = {},
      a = !1
    if (
      (t &&
        (i =
          ('line' in t && 'column' in t) || ('start' in t && 'end' in t)
            ? { place: t }
            : 'type' in t
            ? {
                ancestors: [t],
                place: t.position,
              }
            : { ...t }),
      typeof e == 'string'
        ? (r = e)
        : !i.cause && e && ((a = !0), (r = e.message), (i.cause = e)),
      !i.ruleId && !i.source && typeof n == 'string')
    ) {
      let e = n.indexOf(':')
      e === -1
        ? (i.ruleId = n)
        : ((i.source = n.slice(0, e)), (i.ruleId = n.slice(e + 1)))
    }
    if (!i.place && i.ancestors && i.ancestors) {
      let e = i.ancestors[i.ancestors.length - 1]
      e && (i.place = e.position)
    }
    let o = i.place && 'start' in i.place ? i.place.start : i.place
    ;(this.ancestors = i.ancestors || void 0),
      (this.cause = i.cause || void 0),
      (this.column = o ? o.column : void 0),
      (this.fatal = void 0),
      this.file,
      (this.message = r),
      (this.line = o ? o.line : void 0),
      (this.name = mr(i.place) || '1:1'),
      (this.place = i.place || void 0),
      (this.reason = this.message),
      (this.ruleId = i.ruleId || void 0),
      (this.source = i.source || void 0),
      (this.stack =
        a && i.cause && typeof i.cause.stack == 'string' ? i.cause.stack : ''),
      this.actual,
      this.expected,
      this.note,
      this.url
  }
}
;(vr.prototype.file = ''),
  (vr.prototype.name = ''),
  (vr.prototype.reason = ''),
  (vr.prototype.message = ''),
  (vr.prototype.stack = ''),
  (vr.prototype.column = void 0),
  (vr.prototype.line = void 0),
  (vr.prototype.ancestors = void 0),
  (vr.prototype.cause = void 0),
  (vr.prototype.fatal = void 0),
  (vr.prototype.place = void 0),
  (vr.prototype.ruleId = void 0),
  (vr.prototype.source = void 0)
//#endregion
//#region node_modules/hast-util-to-jsx-runtime/lib/index.js
var yr = /* @__PURE__ */ we(lr(), 1),
  br = {}.hasOwnProperty,
  xr = /* @__PURE__ */ new Map(),
  Sr = /[A-Z]/g,
  Cr = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  wr = new Set(['td', 'th'])
function Tr(e, t) {
  if (!t || t.Fragment === void 0)
    throw TypeError('Expected `Fragment` in options')
  let n = t.filePath || void 0,
    r
  if (t.development) {
    if (typeof t.jsxDEV != 'function')
      throw TypeError('Expected `jsxDEV` in options when `development: true`')
    r = Ir(n, t.jsxDEV)
  } else {
    if (typeof t.jsx != 'function')
      throw TypeError('Expected `jsx` in production options')
    if (typeof t.jsxs != 'function')
      throw TypeError('Expected `jsxs` in production options')
    r = Fr(n, t.jsx, t.jsxs)
  }
  let i = {
      Fragment: t.Fragment,
      ancestors: [],
      components: t.components || {},
      create: r,
      elementAttributeNameCase: t.elementAttributeNameCase || 'react',
      evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
      filePath: n,
      ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
      passKeys: t.passKeys !== !1,
      passNode: t.passNode || !1,
      schema: t.space === 'svg' ? ir : rr,
      stylePropertyNameCase: t.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: t.tableCellAlignToStyle !== !1,
    },
    a = Er(i, e, void 0)
  return a && typeof a != 'string'
    ? a
    : i.create(e, i.Fragment, { children: a || void 0 }, void 0)
}
function Er(e, t, n) {
  if (t.type === 'element') return Dr(e, t, n)
  if (t.type === 'mdxFlowExpression' || t.type === 'mdxTextExpression')
    return Or(e, t)
  if (t.type === 'mdxJsxFlowElement' || t.type === 'mdxJsxTextElement')
    return Ar(e, t, n)
  if (t.type === 'mdxjsEsm') return kr(e, t)
  if (t.type === 'root') return jr(e, t, n)
  if (t.type === 'text') return Mr(e, t)
}
function Dr(e, t, n) {
  let r = e.schema,
    i = r
  t.tagName.toLowerCase() === 'svg' &&
    r.space === 'html' &&
    ((i = ir), (e.schema = i)),
    e.ancestors.push(t)
  let a = Hr(e, t.tagName, !1),
    o = Lr(e, t),
    s = zr(e, t)
  return (
    Cr.has(t.tagName) &&
      (s = s.filter(function (e) {
        return typeof e == 'string' ? !En(e) : !0
      })),
    Nr(e, o, a, t),
    Pr(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  )
}
function Or(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    let n = t.data.estree.body[0]
    return n.type, e.evaluater.evaluateExpression(n.expression)
  }
  Ur(e, t.position)
}
function kr(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return e.evaluater.evaluateProgram(t.data.estree)
  Ur(e, t.position)
}
function Ar(e, t, n) {
  let r = e.schema,
    i = r
  t.name === 'svg' && r.space === 'html' && ((i = ir), (e.schema = i)),
    e.ancestors.push(t)
  let a = t.name === null ? e.Fragment : Hr(e, t.name, !0),
    o = Rr(e, t),
    s = zr(e, t)
  return (
    Nr(e, o, a, t),
    Pr(o, s),
    e.ancestors.pop(),
    (e.schema = r),
    e.create(t, a, o, n)
  )
}
function jr(e, t, n) {
  let r = {}
  return Pr(r, zr(e, t)), e.create(t, e.Fragment, r, n)
}
function Mr(e, t) {
  return t.value
}
function Nr(e, t, n, r) {
  typeof n != 'string' && n !== e.Fragment && e.passNode && (t.node = r)
}
function Pr(e, t) {
  if (t.length > 0) {
    let n = t.length > 1 ? t : t[0]
    n && (e.children = n)
  }
}
function Fr(e, t, n) {
  return r
  function r(e, r, i, a) {
    let o = Array.isArray(i.children) ? n : t
    return a ? o(r, i, a) : o(r, i)
  }
}
function Ir(e, t) {
  return n
  function n(n, r, i, a) {
    let o = Array.isArray(i.children),
      s = dr(n)
    return t(
      r,
      i,
      a,
      o,
      {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0,
      },
      void 0
    )
  }
}
function Lr(e, t) {
  let n = {},
    r,
    i
  for (i in t.properties)
    if (i !== 'children' && br.call(t.properties, i)) {
      let a = Br(e, i, t.properties[i])
      if (a) {
        let [i, o] = a
        e.tableCellAlignToStyle &&
        i === 'align' &&
        typeof o == 'string' &&
        wr.has(t.tagName)
          ? (r = o)
          : (n[i] = o)
      }
    }
  if (r) {
    let t = (n.style ||= {})
    t[e.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = r
  }
  return n
}
function Rr(e, t) {
  let n = {}
  for (let r of t.attributes)
    if (r.type === 'mdxJsxExpressionAttribute')
      if (r.data && r.data.estree && e.evaluater) {
        let t = r.data.estree.body[0]
        t.type
        let i = t.expression
        i.type
        let a = i.properties[0]
        a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument))
      } else Ur(e, t.position)
    else {
      let i = r.name,
        a
      if (r.value && typeof r.value == 'object')
        if (r.value.data && r.value.data.estree && e.evaluater) {
          let t = r.value.data.estree.body[0]
          t.type, (a = e.evaluater.evaluateExpression(t.expression))
        } else Ur(e, t.position)
      else a = r.value === null ? !0 : r.value
      n[i] = a
    }
  return n
}
function zr(e, t) {
  let n = [],
    r = -1,
    i = e.passKeys ? /* @__PURE__ */ new Map() : xr
  for (; ++r < t.children.length; ) {
    let a = t.children[r],
      o
    if (e.passKeys) {
      let e =
        a.type === 'element'
          ? a.tagName
          : a.type === 'mdxJsxFlowElement' || a.type === 'mdxJsxTextElement'
          ? a.name
          : void 0
      if (e) {
        let t = i.get(e) || 0
        ;(o = e + '-' + t), i.set(e, t + 1)
      }
    }
    let s = Er(e, a, o)
    s !== void 0 && n.push(s)
  }
  return n
}
function Br(e, t, n) {
  let r = er(e.schema, t)
  if (!(n == null || (typeof n == 'number' && Number.isNaN(n)))) {
    if (
      (Array.isArray(n) && (n = r.commaSeparated ? bn(n) : ar(n)),
      r.property === 'style')
    ) {
      let t = typeof n == 'object' ? n : Vr(e, String(n))
      return e.stylePropertyNameCase === 'css' && (t = Wr(t)), ['style', t]
    }
    return [
      e.elementAttributeNameCase === 'react' && r.space
        ? Xn[r.property] || r.property
        : r.attribute,
      n,
    ]
  }
}
function Vr(e, t) {
  try {
    return (0, yr.default)(t, { reactCompat: !0 })
  } catch (t) {
    if (e.ignoreInvalidStyle) return {}
    let n = t,
      r = new vr('Cannot parse `style` attribute', {
        ancestors: e.ancestors,
        cause: n,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      })
    throw (
      ((r.file = e.filePath || void 0),
      (r.url =
        'https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-parse-style-attribute'),
      r)
    )
  }
}
function Hr(e, t, n) {
  let r
  if (!n)
    r = {
      type: 'Literal',
      value: t,
    }
  else if (t.includes('.')) {
    let e = t.split('.'),
      n = -1,
      i
    for (; ++n < e.length; ) {
      let t = wn(e[n])
        ? {
            type: 'Identifier',
            name: e[n],
          }
        : {
            type: 'Literal',
            value: e[n],
          }
      i = i
        ? {
            type: 'MemberExpression',
            object: i,
            property: t,
            computed: !!(n && t.type === 'Literal'),
            optional: !1,
          }
        : t
    }
    r = i
  } else
    r =
      wn(t) && !/^[a-z]/.test(t)
        ? {
            type: 'Identifier',
            name: t,
          }
        : {
            type: 'Literal',
            value: t,
          }
  if (r.type === 'Literal') {
    let t = r.value
    return br.call(e.components, t) ? e.components[t] : t
  }
  if (e.evaluater) return e.evaluater.evaluateExpression(r)
  Ur(e)
}
function Ur(e, t) {
  let n = new vr('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: e.ancestors,
    place: t,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  })
  throw (
    ((n.file = e.filePath || void 0),
    (n.url =
      'https://github.com/syntax-tree/hast-util-to-jsx-runtime#cannot-handle-mdx-estrees-without-createevaluater'),
    n)
  )
}
function Wr(e) {
  let t = {},
    n
  for (n in e) br.call(e, n) && (t[Gr(n)] = e[n])
  return t
}
function Gr(e) {
  let t = e.replace(Sr, Kr)
  return t.slice(0, 3) === 'ms-' && (t = '-' + t), t
}
function Kr(e) {
  return '-' + e.toLowerCase()
}
//#endregion
//#region node_modules/html-url-attributes/lib/index.js
var qr = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: [
      'audio',
      'embed',
      'iframe',
      'img',
      'input',
      'script',
      'source',
      'track',
      'video',
    ],
  },
  Jr = {}
function Yr(e, t) {
  let n = t || Jr
  return Xr(
    e,
    typeof n.includeImageAlt == 'boolean' ? n.includeImageAlt : !0,
    typeof n.includeHtml == 'boolean' ? n.includeHtml : !0
  )
}
function Xr(e, t, n) {
  if (Qr(e)) {
    if ('value' in e) return e.type === 'html' && !n ? '' : e.value
    if (t && 'alt' in e && e.alt) return e.alt
    if ('children' in e) return Zr(e.children, t, n)
  }
  return Array.isArray(e) ? Zr(e, t, n) : ''
}
function Zr(e, t, n) {
  let r = [],
    i = -1
  for (; ++i < e.length; ) r[i] = Xr(e[i], t, n)
  return r.join('')
}
function Qr(e) {
  return !!(e && typeof e == 'object')
}
//#endregion
//#region node_modules/decode-named-character-reference/index.dom.js
var $r = document.createElement('i')
function ei(e) {
  let t = '&' + e + ';'
  $r.innerHTML = t
  let n = $r.textContent
  return (n.charCodeAt(n.length - 1) === 59 && e !== 'semi') || n === t ? !1 : n
}
//#endregion
//#region node_modules/micromark-util-chunked/index.js
function ti(e, t, n, r) {
  let i = e.length,
    a = 0,
    o
  if (
    ((t = t < 0 ? (-t > i ? 0 : i + t) : t > i ? i : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (o = Array.from(r)), o.unshift(t, n), e.splice(...o)
  else
    for (n && e.splice(t, n); a < r.length; )
      (o = r.slice(a, a + 1e4)),
        o.unshift(t, 0),
        e.splice(...o),
        (a += 1e4),
        (t += 1e4)
}
function ni(e, t) {
  return e.length > 0 ? (ti(e, e.length, 0, t), e) : t
}
//#endregion
//#region node_modules/micromark-util-combine-extensions/index.js
var ri = {}.hasOwnProperty
function ii(e) {
  let t = {},
    n = -1
  for (; ++n < e.length; ) ai(t, e[n])
  return t
}
function ai(e, t) {
  let n
  for (n in t) {
    let r = (ri.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      i = t[n],
      a
    if (i)
      for (a in i) {
        ri.call(r, a) || (r[a] = [])
        let e = i[a]
        oi(r[a], Array.isArray(e) ? e : e ? [e] : [])
      }
  }
}
function oi(e, t) {
  let n = -1,
    r = []
  for (; ++n < t.length; ) (t[n].add === 'after' ? e : r).push(t[n])
  ti(e, 0, 0, r)
}
//#endregion
//#region node_modules/micromark-util-decode-numeric-character-reference/index.js
function si(e, t) {
  let n = Number.parseInt(e, t)
  return n < 9 ||
    n === 11 ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    (n & 65535) == 65535 ||
    (n & 65535) == 65534 ||
    n > 1114111
    ? '�'
    : String.fromCodePoint(n)
}
//#endregion
//#region node_modules/micromark-util-normalize-identifier/index.js
function ci(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase()
}
//#endregion
//#region node_modules/micromark-util-character/index.js
var li = yi(/[A-Za-z]/),
  ui = yi(/[\dA-Za-z]/),
  di = yi(/[#-'*+\--9=?A-Z^-~]/)
function fi(e) {
  return e !== null && (e < 32 || e === 127)
}
var pi = yi(/\d/),
  mi = yi(/[\dA-Fa-f]/),
  hi = yi(/[!-/:-@[-`{-~]/)
function G(e) {
  return e !== null && e < -2
}
function gi(e) {
  return e !== null && (e < 0 || e === 32)
}
function K(e) {
  return e === -2 || e === -1 || e === 32
}
var _i = yi(/\p{P}|\p{S}/u),
  vi = yi(/\s/)
function yi(e) {
  return t
  function t(t) {
    return t !== null && t > -1 && e.test(String.fromCharCode(t))
  }
}
//#endregion
//#region node_modules/micromark-util-sanitize-uri/index.js
function bi(e) {
  let t = [],
    n = -1,
    r = 0,
    i = 0
  for (; ++n < e.length; ) {
    let a = e.charCodeAt(n),
      o = ''
    if (a === 37 && ui(e.charCodeAt(n + 1)) && ui(e.charCodeAt(n + 2))) i = 2
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) ||
        (o = String.fromCharCode(a))
    else if (a > 55295 && a < 57344) {
      let t = e.charCodeAt(n + 1)
      a < 56320 && t > 56319 && t < 57344
        ? ((o = String.fromCharCode(a, t)), (i = 1))
        : (o = '�')
    } else o = String.fromCharCode(a)
    ;(o &&=
      (t.push(e.slice(r, n), encodeURIComponent(o)), (r = n + i + 1), '')),
      (i &&= ((n += i), 0))
  }
  return t.join('') + e.slice(r)
}
//#endregion
//#region node_modules/micromark-factory-space/index.js
function q(e, t, n, r) {
  let i = r ? r - 1 : Infinity,
    a = 0
  return o
  function o(r) {
    return K(r) ? (e.enter(n), s(r)) : t(r)
  }
  function s(r) {
    return K(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r))
  }
}
//#endregion
//#region node_modules/micromark/lib/initialize/content.js
var xi = { tokenize: Si }
function Si(e) {
  let t = e.attempt(this.parser.constructs.contentInitial, r, i),
    n
  return t
  function r(n) {
    if (n === null) {
      e.consume(n)
      return
    }
    return (
      e.enter('lineEnding'),
      e.consume(n),
      e.exit('lineEnding'),
      q(e, t, 'linePrefix')
    )
  }
  function i(t) {
    return e.enter('paragraph'), a(t)
  }
  function a(t) {
    let r = e.enter('chunkText', {
      contentType: 'text',
      previous: n,
    })
    return n && (n.next = r), (n = r), o(t)
  }
  function o(t) {
    if (t === null) {
      e.exit('chunkText'), e.exit('paragraph'), e.consume(t)
      return
    }
    return G(t) ? (e.consume(t), e.exit('chunkText'), a) : (e.consume(t), o)
  }
}
//#endregion
//#region node_modules/micromark/lib/initialize/document.js
var Ci = { tokenize: Ti },
  wi = { tokenize: Ei }
function Ti(e) {
  let t = this,
    n = [],
    r = 0,
    i,
    a,
    o
  return s
  function s(i) {
    if (r < n.length) {
      let a = n[r]
      return (t.containerState = a[1]), e.attempt(a[0].continuation, c, l)(i)
    }
    return l(i)
  }
  function c(e) {
    if ((r++, t.containerState._closeFlow)) {
      ;(t.containerState._closeFlow = void 0), i && v()
      let n = t.events.length,
        a = n,
        o
      for (; a--; )
        if (t.events[a][0] === 'exit' && t.events[a][1].type === 'chunkFlow') {
          o = t.events[a][1].end
          break
        }
      _(r)
      let s = n
      for (; s < t.events.length; ) (t.events[s][1].end = { ...o }), s++
      return (
        ti(t.events, a + 1, 0, t.events.slice(n)), (t.events.length = s), l(e)
      )
    }
    return s(e)
  }
  function l(a) {
    if (r === n.length) {
      if (!i) return f(a)
      if (i.currentConstruct && i.currentConstruct.concrete) return m(a)
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack)
    }
    return (t.containerState = {}), e.check(wi, u, d)(a)
  }
  function u(e) {
    return i && v(), _(r), f(e)
  }
  function d(e) {
    return (
      (t.parser.lazy[t.now().line] = r !== n.length), (o = t.now().offset), m(e)
    )
  }
  function f(n) {
    return (t.containerState = {}), e.attempt(wi, p, m)(n)
  }
  function p(e) {
    return r++, n.push([t.currentConstruct, t.containerState]), f(e)
  }
  function m(n) {
    if (n === null) {
      i && v(), _(0), e.consume(n)
      return
    }
    return (
      (i ||= t.parser.flow(t.now())),
      e.enter('chunkFlow', {
        _tokenizer: i,
        contentType: 'flow',
        previous: a,
      }),
      h(n)
    )
  }
  function h(n) {
    if (n === null) {
      g(e.exit('chunkFlow'), !0), _(0), e.consume(n)
      return
    }
    return G(n)
      ? (e.consume(n),
        g(e.exit('chunkFlow')),
        (r = 0),
        (t.interrupt = void 0),
        s)
      : (e.consume(n), h)
  }
  function g(e, n) {
    let s = t.sliceStream(e)
    if (
      (n && s.push(null),
      (e.previous = a),
      a && (a.next = e),
      (a = e),
      i.defineSkip(e.start),
      i.write(s),
      t.parser.lazy[e.start.line])
    ) {
      let e = i.events.length
      for (; e--; )
        if (
          i.events[e][1].start.offset < o &&
          (!i.events[e][1].end || i.events[e][1].end.offset > o)
        )
          return
      let n = t.events.length,
        a = n,
        s,
        c
      for (; a--; )
        if (t.events[a][0] === 'exit' && t.events[a][1].type === 'chunkFlow') {
          if (s) {
            c = t.events[a][1].end
            break
          }
          s = !0
        }
      for (_(r), e = n; e < t.events.length; )
        (t.events[e][1].end = { ...c }), e++
      ti(t.events, a + 1, 0, t.events.slice(n)), (t.events.length = e)
    }
  }
  function _(r) {
    let i = n.length
    for (; i-- > r; ) {
      let r = n[i]
      ;(t.containerState = r[1]), r[0].exit.call(t, e)
    }
    n.length = r
  }
  function v() {
    i.write([null]),
      (a = void 0),
      (i = void 0),
      (t.containerState._closeFlow = void 0)
  }
}
function Ei(e, t, n) {
  return q(
    e,
    e.attempt(this.parser.constructs.document, t, n),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
  )
}
//#endregion
//#region node_modules/micromark-util-classify-character/index.js
function Di(e) {
  if (e === null || gi(e) || vi(e)) return 1
  if (_i(e)) return 2
}
//#endregion
//#region node_modules/micromark-util-resolve-all/index.js
function Oi(e, t, n) {
  let r = [],
    i = -1
  for (; ++i < e.length; ) {
    let a = e[i].resolveAll
    a && !r.includes(a) && ((t = a(t, n)), r.push(a))
  }
  return t
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/attention.js
var ki = {
  name: 'attention',
  resolveAll: Ai,
  tokenize: ji,
}
function Ai(e, t) {
  let n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u
  for (; ++n < e.length; )
    if (
      e[n][0] === 'enter' &&
      e[n][1].type === 'attentionSequence' &&
      e[n][1]._close
    ) {
      for (r = n; r--; )
        if (
          e[r][0] === 'exit' &&
          e[r][1].type === 'attentionSequence' &&
          e[r][1]._open &&
          t.sliceSerialize(e[r][1]).charCodeAt(0) ===
            t.sliceSerialize(e[n][1]).charCodeAt(0)
        ) {
          if (
            (e[r][1]._close || e[n][1]._open) &&
            (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
            !(
              (e[r][1].end.offset -
                e[r][1].start.offset +
                e[n][1].end.offset -
                e[n][1].start.offset) %
              3
            )
          )
            continue
          c =
            e[r][1].end.offset - e[r][1].start.offset > 1 &&
            e[n][1].end.offset - e[n][1].start.offset > 1
              ? 2
              : 1
          let d = { ...e[r][1].end },
            f = { ...e[n][1].start }
          Mi(d, -c),
            Mi(f, c),
            (o = {
              type: c > 1 ? 'strongSequence' : 'emphasisSequence',
              start: d,
              end: { ...e[r][1].end },
            }),
            (s = {
              type: c > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...e[n][1].start },
              end: f,
            }),
            (a = {
              type: c > 1 ? 'strongText' : 'emphasisText',
              start: { ...e[r][1].end },
              end: { ...e[n][1].start },
            }),
            (i = {
              type: c > 1 ? 'strong' : 'emphasis',
              start: { ...o.start },
              end: { ...s.end },
            }),
            (e[r][1].end = { ...o.start }),
            (e[n][1].start = { ...s.end }),
            (l = []),
            e[r][1].end.offset - e[r][1].start.offset &&
              (l = ni(l, [
                ['enter', e[r][1], t],
                ['exit', e[r][1], t],
              ])),
            (l = ni(l, [
              ['enter', i, t],
              ['enter', o, t],
              ['exit', o, t],
              ['enter', a, t],
            ])),
            (l = ni(
              l,
              Oi(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)
            )),
            (l = ni(l, [
              ['exit', a, t],
              ['enter', s, t],
              ['exit', s, t],
              ['exit', i, t],
            ])),
            e[n][1].end.offset - e[n][1].start.offset
              ? ((u = 2),
                (l = ni(l, [
                  ['enter', e[n][1], t],
                  ['exit', e[n][1], t],
                ])))
              : (u = 0),
            ti(e, r - 1, n - r + 3, l),
            (n = r + l.length - u - 2)
          break
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === 'attentionSequence' && (e[n][1].type = 'data')
  return e
}
function ji(e, t) {
  let n = this.parser.constructs.attentionMarkers.null,
    r = this.previous,
    i = Di(r),
    a
  return o
  function o(t) {
    return (a = t), e.enter('attentionSequence'), s(t)
  }
  function s(o) {
    if (o === a) return e.consume(o), s
    let c = e.exit('attentionSequence'),
      l = Di(o),
      u = !l || (l === 2 && i) || n.includes(o),
      d = !i || (i === 2 && l) || n.includes(r)
    return (
      (c._open = !!(a === 42 ? u : u && (i || !d))),
      (c._close = !!(a === 42 ? d : d && (l || !u))),
      t(o)
    )
  }
}
function Mi(e, t) {
  ;(e.column += t), (e.offset += t), (e._bufferIndex += t)
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/autolink.js
var Ni = {
  name: 'autolink',
  tokenize: Pi,
}
function Pi(e, t, n) {
  let r = 0
  return i
  function i(t) {
    return (
      e.enter('autolink'),
      e.enter('autolinkMarker'),
      e.consume(t),
      e.exit('autolinkMarker'),
      e.enter('autolinkProtocol'),
      a
    )
  }
  function a(t) {
    return li(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t)
  }
  function o(e) {
    return e === 43 || e === 45 || e === 46 || ui(e) ? ((r = 1), s(e)) : l(e)
  }
  function s(t) {
    return t === 58
      ? (e.consume(t), (r = 0), c)
      : (t === 43 || t === 45 || t === 46 || ui(t)) && r++ < 32
      ? (e.consume(t), s)
      : ((r = 0), l(t))
  }
  function c(r) {
    return r === 62
      ? (e.exit('autolinkProtocol'),
        e.enter('autolinkMarker'),
        e.consume(r),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        t)
      : r === null || r === 32 || r === 60 || fi(r)
      ? n(r)
      : (e.consume(r), c)
  }
  function l(t) {
    return t === 64 ? (e.consume(t), u) : di(t) ? (e.consume(t), l) : n(t)
  }
  function u(e) {
    return ui(e) ? d(e) : n(e)
  }
  function d(n) {
    return n === 46
      ? (e.consume(n), (r = 0), u)
      : n === 62
      ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'),
        e.enter('autolinkMarker'),
        e.consume(n),
        e.exit('autolinkMarker'),
        e.exit('autolink'),
        t)
      : f(n)
  }
  function f(t) {
    if ((t === 45 || ui(t)) && r++ < 63) {
      let n = t === 45 ? f : d
      return e.consume(t), n
    }
    return n(t)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/blank-line.js
var Fi = {
  partial: !0,
  tokenize: Ii,
}
function Ii(e, t, n) {
  return r
  function r(t) {
    return K(t) ? q(e, i, 'linePrefix')(t) : i(t)
  }
  function i(e) {
    return e === null || G(e) ? t(e) : n(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/block-quote.js
var Li = {
  continuation: { tokenize: zi },
  exit: Bi,
  name: 'blockQuote',
  tokenize: Ri,
}
function Ri(e, t, n) {
  let r = this
  return i
  function i(t) {
    if (t === 62) {
      let n = r.containerState
      return (
        (n.open ||= (e.enter('blockQuote', { _container: !0 }), !0)),
        e.enter('blockQuotePrefix'),
        e.enter('blockQuoteMarker'),
        e.consume(t),
        e.exit('blockQuoteMarker'),
        a
      )
    }
    return n(t)
  }
  function a(n) {
    return K(n)
      ? (e.enter('blockQuotePrefixWhitespace'),
        e.consume(n),
        e.exit('blockQuotePrefixWhitespace'),
        e.exit('blockQuotePrefix'),
        t)
      : (e.exit('blockQuotePrefix'), t(n))
  }
}
function zi(e, t, n) {
  let r = this
  return i
  function i(t) {
    return K(t)
      ? q(
          e,
          a,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(t)
      : a(t)
  }
  function a(r) {
    return e.attempt(Li, t, n)(r)
  }
}
function Bi(e) {
  e.exit('blockQuote')
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-escape.js
var Vi = {
  name: 'characterEscape',
  tokenize: Hi,
}
function Hi(e, t, n) {
  return r
  function r(t) {
    return (
      e.enter('characterEscape'),
      e.enter('escapeMarker'),
      e.consume(t),
      e.exit('escapeMarker'),
      i
    )
  }
  function i(r) {
    return hi(r)
      ? (e.enter('characterEscapeValue'),
        e.consume(r),
        e.exit('characterEscapeValue'),
        e.exit('characterEscape'),
        t)
      : n(r)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/character-reference.js
var Ui = {
  name: 'characterReference',
  tokenize: Wi,
}
function Wi(e, t, n) {
  let r = this,
    i = 0,
    a,
    o
  return s
  function s(t) {
    return (
      e.enter('characterReference'),
      e.enter('characterReferenceMarker'),
      e.consume(t),
      e.exit('characterReferenceMarker'),
      c
    )
  }
  function c(t) {
    return t === 35
      ? (e.enter('characterReferenceMarkerNumeric'),
        e.consume(t),
        e.exit('characterReferenceMarkerNumeric'),
        l)
      : (e.enter('characterReferenceValue'), (a = 31), (o = ui), u(t))
  }
  function l(t) {
    return t === 88 || t === 120
      ? (e.enter('characterReferenceMarkerHexadecimal'),
        e.consume(t),
        e.exit('characterReferenceMarkerHexadecimal'),
        e.enter('characterReferenceValue'),
        (a = 6),
        (o = mi),
        u)
      : (e.enter('characterReferenceValue'), (a = 7), (o = pi), u(t))
  }
  function u(s) {
    if (s === 59 && i) {
      let i = e.exit('characterReferenceValue')
      return o === ui && !ei(r.sliceSerialize(i))
        ? n(s)
        : (e.enter('characterReferenceMarker'),
          e.consume(s),
          e.exit('characterReferenceMarker'),
          e.exit('characterReference'),
          t)
    }
    return o(s) && i++ < a ? (e.consume(s), u) : n(s)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-fenced.js
var Gi = {
    partial: !0,
    tokenize: Ji,
  },
  Ki = {
    concrete: !0,
    name: 'codeFenced',
    tokenize: qi,
  }
function qi(e, t, n) {
  let r = this,
    i = {
      partial: !0,
      tokenize: x,
    },
    a = 0,
    o = 0,
    s
  return c
  function c(e) {
    return l(e)
  }
  function l(t) {
    let n = r.events[r.events.length - 1]
    return (
      (a =
        n && n[1].type === 'linePrefix'
          ? n[2].sliceSerialize(n[1], !0).length
          : 0),
      (s = t),
      e.enter('codeFenced'),
      e.enter('codeFencedFence'),
      e.enter('codeFencedFenceSequence'),
      u(t)
    )
  }
  function u(t) {
    return t === s
      ? (o++, e.consume(t), u)
      : o < 3
      ? n(t)
      : (e.exit('codeFencedFenceSequence'),
        K(t) ? q(e, d, 'whitespace')(t) : d(t))
  }
  function d(n) {
    return n === null || G(n)
      ? (e.exit('codeFencedFence'), r.interrupt ? t(n) : e.check(Gi, h, b)(n))
      : (e.enter('codeFencedFenceInfo'),
        e.enter('chunkString', { contentType: 'string' }),
        f(n))
  }
  function f(t) {
    return t === null || G(t)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceInfo'), d(t))
      : K(t)
      ? (e.exit('chunkString'),
        e.exit('codeFencedFenceInfo'),
        q(e, p, 'whitespace')(t))
      : t === 96 && t === s
      ? n(t)
      : (e.consume(t), f)
  }
  function p(t) {
    return t === null || G(t)
      ? d(t)
      : (e.enter('codeFencedFenceMeta'),
        e.enter('chunkString', { contentType: 'string' }),
        m(t))
  }
  function m(t) {
    return t === null || G(t)
      ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), d(t))
      : t === 96 && t === s
      ? n(t)
      : (e.consume(t), m)
  }
  function h(t) {
    return e.attempt(i, b, g)(t)
  }
  function g(t) {
    return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), _
  }
  function _(t) {
    return a > 0 && K(t) ? q(e, v, 'linePrefix', a + 1)(t) : v(t)
  }
  function v(t) {
    return t === null || G(t)
      ? e.check(Gi, h, b)(t)
      : (e.enter('codeFlowValue'), y(t))
  }
  function y(t) {
    return t === null || G(t)
      ? (e.exit('codeFlowValue'), v(t))
      : (e.consume(t), y)
  }
  function b(n) {
    return e.exit('codeFenced'), t(n)
  }
  function x(e, t, n) {
    let i = 0
    return a
    function a(t) {
      return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), c
    }
    function c(t) {
      return (
        e.enter('codeFencedFence'),
        K(t)
          ? q(
              e,
              l,
              'linePrefix',
              r.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 4
            )(t)
          : l(t)
      )
    }
    function l(t) {
      return t === s ? (e.enter('codeFencedFenceSequence'), u(t)) : n(t)
    }
    function u(t) {
      return t === s
        ? (i++, e.consume(t), u)
        : i >= o
        ? (e.exit('codeFencedFenceSequence'),
          K(t) ? q(e, d, 'whitespace')(t) : d(t))
        : n(t)
    }
    function d(r) {
      return r === null || G(r) ? (e.exit('codeFencedFence'), t(r)) : n(r)
    }
  }
}
function Ji(e, t, n) {
  let r = this
  return i
  function i(t) {
    return t === null
      ? n(t)
      : (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), a)
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-indented.js
var Yi = {
    name: 'codeIndented',
    tokenize: Zi,
  },
  Xi = {
    partial: !0,
    tokenize: Qi,
  }
function Zi(e, t, n) {
  let r = this
  return i
  function i(t) {
    return e.enter('codeIndented'), q(e, a, 'linePrefix', 5)(t)
  }
  function a(e) {
    let t = r.events[r.events.length - 1]
    return t &&
      t[1].type === 'linePrefix' &&
      t[2].sliceSerialize(t[1], !0).length >= 4
      ? o(e)
      : n(e)
  }
  function o(t) {
    return t === null
      ? c(t)
      : G(t)
      ? e.attempt(Xi, o, c)(t)
      : (e.enter('codeFlowValue'), s(t))
  }
  function s(t) {
    return t === null || G(t)
      ? (e.exit('codeFlowValue'), o(t))
      : (e.consume(t), s)
  }
  function c(n) {
    return e.exit('codeIndented'), t(n)
  }
}
function Qi(e, t, n) {
  let r = this
  return i
  function i(t) {
    return r.parser.lazy[r.now().line]
      ? n(t)
      : G(t)
      ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i)
      : q(e, a, 'linePrefix', 5)(t)
  }
  function a(e) {
    let a = r.events[r.events.length - 1]
    return a &&
      a[1].type === 'linePrefix' &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(e)
      : G(e)
      ? i(e)
      : n(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/code-text.js
var $i = {
  name: 'codeText',
  previous: ta,
  resolve: ea,
  tokenize: na,
}
function ea(e) {
  let t = e.length - 4,
    n = 3,
    r,
    i
  if (
    (e[n][1].type === 'lineEnding' || e[n][1].type === 'space') &&
    (e[t][1].type === 'lineEnding' || e[t][1].type === 'space')
  ) {
    for (r = n; ++r < t; )
      if (e[r][1].type === 'codeTextData') {
        ;(e[n][1].type = 'codeTextPadding'),
          (e[t][1].type = 'codeTextPadding'),
          (n += 2),
          (t -= 2)
        break
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0
      ? r !== t && e[r][1].type !== 'lineEnding' && (i = r)
      : (r === t || e[r][1].type === 'lineEnding') &&
        ((e[i][1].type = 'codeTextData'),
        r !== i + 2 &&
          ((e[i][1].end = e[r - 1][1].end),
          e.splice(i + 2, r - i - 2),
          (t -= r - i - 2),
          (r = i + 2)),
        (i = void 0))
  return e
}
function ta(e) {
  return (
    e !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  )
}
function na(e, t, n) {
  let r = 0,
    i,
    a
  return o
  function o(t) {
    return e.enter('codeText'), e.enter('codeTextSequence'), s(t)
  }
  function s(t) {
    return t === 96
      ? (e.consume(t), r++, s)
      : (e.exit('codeTextSequence'), c(t))
  }
  function c(t) {
    return t === null
      ? n(t)
      : t === 32
      ? (e.enter('space'), e.consume(t), e.exit('space'), c)
      : t === 96
      ? ((a = e.enter('codeTextSequence')), (i = 0), u(t))
      : G(t)
      ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), c)
      : (e.enter('codeTextData'), l(t))
  }
  function l(t) {
    return t === null || t === 32 || t === 96 || G(t)
      ? (e.exit('codeTextData'), c(t))
      : (e.consume(t), l)
  }
  function u(n) {
    return n === 96
      ? (e.consume(n), i++, u)
      : i === r
      ? (e.exit('codeTextSequence'), e.exit('codeText'), t(n))
      : ((a.type = 'codeTextData'), l(n))
  }
}
//#endregion
//#region node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var ra = class {
  constructor(e) {
    ;(this.left = e ? [...e] : []), (this.right = [])
  }
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw RangeError(
        'Cannot access index `' +
          e +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`'
      )
    return e < this.left.length
      ? this.left[e]
      : this.right[this.right.length - e + this.left.length - 1]
  }
  get length() {
    return this.left.length + this.right.length
  }
  shift() {
    return this.setCursor(0), this.right.pop()
  }
  slice(e, t) {
    let n = t ?? Infinity
    return n < this.left.length
      ? this.left.slice(e, n)
      : e > this.left.length
      ? this.right
          .slice(
            this.right.length - n + this.left.length,
            this.right.length - e + this.left.length
          )
          .reverse()
      : this.left
          .slice(e)
          .concat(
            this.right.slice(this.right.length - n + this.left.length).reverse()
          )
  }
  splice(e, t, n) {
    let r = t || 0
    this.setCursor(Math.trunc(e))
    let i = this.right.splice(this.right.length - r, Infinity)
    return n && ia(this.left, n), i.reverse()
  }
  pop() {
    return this.setCursor(Infinity), this.left.pop()
  }
  push(e) {
    this.setCursor(Infinity), this.left.push(e)
  }
  pushMany(e) {
    this.setCursor(Infinity), ia(this.left, e)
  }
  unshift(e) {
    this.setCursor(0), this.right.push(e)
  }
  unshiftMany(e) {
    this.setCursor(0), ia(this.right, e.reverse())
  }
  setCursor(e) {
    if (
      !(
        e === this.left.length ||
        (e > this.left.length && this.right.length === 0) ||
        (e < 0 && this.left.length === 0)
      )
    )
      if (e < this.left.length) {
        let t = this.left.splice(e, Infinity)
        ia(this.right, t.reverse())
      } else {
        let t = this.right.splice(
          this.left.length + this.right.length - e,
          Infinity
        )
        ia(this.left, t.reverse())
      }
  }
}
function ia(e, t) {
  let n = 0
  if (t.length < 1e4) e.push(...t)
  else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), (n += 1e4)
}
//#endregion
//#region node_modules/micromark-util-subtokenize/index.js
function aa(e) {
  let t = {},
    n = -1,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u = new ra(e)
  for (; ++n < u.length; ) {
    for (; n in t; ) n = t[n]
    if (
      ((r = u.get(n)),
      n &&
        r[1].type === 'chunkFlow' &&
        u.get(n - 1)[1].type === 'listItemPrefix' &&
        ((c = r[1]._tokenizer.events),
        (a = 0),
        a < c.length && c[a][1].type === 'lineEndingBlank' && (a += 2),
        a < c.length && c[a][1].type === 'content'))
    )
      for (; ++a < c.length && c[a][1].type !== 'content'; )
        c[a][1].type === 'chunkText' &&
          ((c[a][1]._isInFirstContentOfListItem = !0), a++)
    if (r[0] === 'enter')
      r[1].contentType && (Object.assign(t, oa(u, n)), (n = t[n]), (l = !0))
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (
          ((o = u.get(a)),
          o[1].type === 'lineEnding' || o[1].type === 'lineEndingBlank')
        )
          o[0] === 'enter' &&
            (i && (u.get(i)[1].type = 'lineEndingBlank'),
            (o[1].type = 'lineEnding'),
            (i = a))
        else if (
          !(o[1].type === 'linePrefix' || o[1].type === 'listItemIndent')
        )
          break
      i &&
        ((r[1].end = { ...u.get(i)[1].start }),
        (s = u.slice(i, n)),
        s.unshift(r),
        u.splice(i, n - i + 1, s))
    }
  }
  return ti(e, 0, Infinity, u.slice(0)), !l
}
function oa(e, t) {
  let n = e.get(t)[1],
    r = e.get(t)[2],
    i = t - 1,
    a = [],
    o = n._tokenizer
  o ||
    ((o = r.parser[n.contentType](n.start)),
    n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0))
  let s = o.events,
    c = [],
    l = {},
    u,
    d,
    f = -1,
    p = n,
    m = 0,
    h = 0,
    g = [h]
  for (; p; ) {
    for (; e.get(++i)[1] !== p; );
    a.push(i),
      p._tokenizer ||
        ((u = r.sliceStream(p)),
        p.next || u.push(null),
        d && o.defineSkip(p.start),
        p._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = !0),
        o.write(u),
        p._isInFirstContentOfListItem &&
          (o._gfmTasklistFirstContentOfListItem = void 0)),
      (d = p),
      (p = p.next)
  }
  for (p = n; ++f < s.length; )
    s[f][0] === 'exit' &&
      s[f - 1][0] === 'enter' &&
      s[f][1].type === s[f - 1][1].type &&
      s[f][1].start.line !== s[f][1].end.line &&
      ((h = f + 1),
      g.push(h),
      (p._tokenizer = void 0),
      (p.previous = void 0),
      (p = p.next))
  for (
    o.events = [],
      p ? ((p._tokenizer = void 0), (p.previous = void 0)) : g.pop(),
      f = g.length;
    f--;

  ) {
    let t = s.slice(g[f], g[f + 1]),
      n = a.pop()
    c.push([n, n + t.length - 1]), e.splice(n, 2, t)
  }
  for (c.reverse(), f = -1; ++f < c.length; )
    (l[m + c[f][0]] = m + c[f][1]), (m += c[f][1] - c[f][0] - 1)
  return l
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/content.js
var sa = {
    resolve: la,
    tokenize: ua,
  },
  ca = {
    partial: !0,
    tokenize: da,
  }
function la(e) {
  return aa(e), e
}
function ua(e, t) {
  let n
  return r
  function r(t) {
    return (
      e.enter('content'),
      (n = e.enter('chunkContent', { contentType: 'content' })),
      i(t)
    )
  }
  function i(t) {
    return t === null ? a(t) : G(t) ? e.check(ca, o, a)(t) : (e.consume(t), i)
  }
  function a(n) {
    return e.exit('chunkContent'), e.exit('content'), t(n)
  }
  function o(t) {
    return (
      e.consume(t),
      e.exit('chunkContent'),
      (n.next = e.enter('chunkContent', {
        contentType: 'content',
        previous: n,
      })),
      (n = n.next),
      i
    )
  }
}
function da(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (
      e.exit('chunkContent'),
      e.enter('lineEnding'),
      e.consume(t),
      e.exit('lineEnding'),
      q(e, a, 'linePrefix')
    )
  }
  function a(i) {
    if (i === null || G(i)) return n(i)
    let a = r.events[r.events.length - 1]
    return !r.parser.constructs.disable.null.includes('codeIndented') &&
      a &&
      a[1].type === 'linePrefix' &&
      a[2].sliceSerialize(a[1], !0).length >= 4
      ? t(i)
      : e.interrupt(r.parser.constructs.flow, n, t)(i)
  }
}
//#endregion
//#region node_modules/micromark-factory-destination/index.js
function fa(e, t, n, r, i, a, o, s, c) {
  let l = c || Infinity,
    u = 0
  return d
  function d(t) {
    return t === 60
      ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f)
      : t === null || t === 32 || t === 41 || fi(t)
      ? n(t)
      : (e.enter(r),
        e.enter(o),
        e.enter(s),
        e.enter('chunkString', { contentType: 'string' }),
        h(t))
  }
  function f(n) {
    return n === 62
      ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t)
      : (e.enter(s), e.enter('chunkString', { contentType: 'string' }), p(n))
  }
  function p(t) {
    return t === 62
      ? (e.exit('chunkString'), e.exit(s), f(t))
      : t === null || t === 60 || G(t)
      ? n(t)
      : (e.consume(t), t === 92 ? m : p)
  }
  function m(t) {
    return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t)
  }
  function h(i) {
    return !u && (i === null || i === 41 || gi(i))
      ? (e.exit('chunkString'), e.exit(s), e.exit(o), e.exit(r), t(i))
      : u < l && i === 40
      ? (e.consume(i), u++, h)
      : i === 41
      ? (e.consume(i), u--, h)
      : i === null || i === 32 || i === 40 || fi(i)
      ? n(i)
      : (e.consume(i), i === 92 ? g : h)
  }
  function g(t) {
    return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t)
  }
}
//#endregion
//#region node_modules/micromark-factory-label/index.js
function pa(e, t, n, r, i, a) {
  let o = this,
    s = 0,
    c
  return l
  function l(t) {
    return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u
  }
  function u(l) {
    return s > 999 ||
      l === null ||
      l === 91 ||
      (l === 93 && !c) ||
      (l === 94 && !s && '_hiddenFootnoteSupport' in o.parser.constructs)
      ? n(l)
      : l === 93
      ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t)
      : G(l)
      ? (e.enter('lineEnding'), e.consume(l), e.exit('lineEnding'), u)
      : (e.enter('chunkString', { contentType: 'string' }), d(l))
  }
  function d(t) {
    return t === null || t === 91 || t === 93 || G(t) || s++ > 999
      ? (e.exit('chunkString'), u(t))
      : (e.consume(t), (c ||= !K(t)), t === 92 ? f : d)
  }
  function f(t) {
    return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t)
  }
}
//#endregion
//#region node_modules/micromark-factory-title/index.js
function ma(e, t, n, r, i, a) {
  let o
  return s
  function s(t) {
    return t === 34 || t === 39 || t === 40
      ? (e.enter(r),
        e.enter(i),
        e.consume(t),
        e.exit(i),
        (o = t === 40 ? 41 : t),
        c)
      : n(t)
  }
  function c(n) {
    return n === o
      ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t)
      : (e.enter(a), l(n))
  }
  function l(t) {
    return t === o
      ? (e.exit(a), c(o))
      : t === null
      ? n(t)
      : G(t)
      ? (e.enter('lineEnding'),
        e.consume(t),
        e.exit('lineEnding'),
        q(e, l, 'linePrefix'))
      : (e.enter('chunkString', { contentType: 'string' }), u(t))
  }
  function u(t) {
    return t === o || t === null || G(t)
      ? (e.exit('chunkString'), l(t))
      : (e.consume(t), t === 92 ? d : u)
  }
  function d(t) {
    return t === o || t === 92 ? (e.consume(t), u) : u(t)
  }
}
//#endregion
//#region node_modules/micromark-factory-whitespace/index.js
function ha(e, t) {
  let n
  return r
  function r(i) {
    return G(i)
      ? (e.enter('lineEnding'), e.consume(i), e.exit('lineEnding'), (n = !0), r)
      : K(i)
      ? q(e, r, n ? 'linePrefix' : 'lineSuffix')(i)
      : t(i)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/definition.js
var ga = {
    name: 'definition',
    tokenize: va,
  },
  _a = {
    partial: !0,
    tokenize: ya,
  }
function va(e, t, n) {
  let r = this,
    i
  return a
  function a(t) {
    return e.enter('definition'), o(t)
  }
  function o(t) {
    return pa.call(
      r,
      e,
      s,
      n,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString'
    )(t)
  }
  function s(t) {
    return (
      (i = ci(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))),
      t === 58
        ? (e.enter('definitionMarker'),
          e.consume(t),
          e.exit('definitionMarker'),
          c)
        : n(t)
    )
  }
  function c(t) {
    return gi(t) ? ha(e, l)(t) : l(t)
  }
  function l(t) {
    return fa(
      e,
      u,
      n,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString'
    )(t)
  }
  function u(t) {
    return e.attempt(_a, d, d)(t)
  }
  function d(t) {
    return K(t) ? q(e, f, 'whitespace')(t) : f(t)
  }
  function f(a) {
    return a === null || G(a)
      ? (e.exit('definition'), r.parser.defined.push(i), t(a))
      : n(a)
  }
}
function ya(e, t, n) {
  return r
  function r(t) {
    return gi(t) ? ha(e, i)(t) : n(t)
  }
  function i(t) {
    return ma(
      e,
      a,
      n,
      'definitionTitle',
      'definitionTitleMarker',
      'definitionTitleString'
    )(t)
  }
  function a(t) {
    return K(t) ? q(e, o, 'whitespace')(t) : o(t)
  }
  function o(e) {
    return e === null || G(e) ? t(e) : n(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var ba = {
  name: 'hardBreakEscape',
  tokenize: xa,
}
function xa(e, t, n) {
  return r
  function r(t) {
    return e.enter('hardBreakEscape'), e.consume(t), i
  }
  function i(r) {
    return G(r) ? (e.exit('hardBreakEscape'), t(r)) : n(r)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/heading-atx.js
var Sa = {
  name: 'headingAtx',
  resolve: Ca,
  tokenize: wa,
}
function Ca(e, t) {
  let n = e.length - 2,
    r = 3,
    i,
    a
  return (
    e[r][1].type === 'whitespace' && (r += 2),
    n - 2 > r && e[n][1].type === 'whitespace' && (n -= 2),
    e[n][1].type === 'atxHeadingSequence' &&
      (r === n - 1 || (n - 4 > r && e[n - 2][1].type === 'whitespace')) &&
      (n -= r + 1 === n ? 2 : 4),
    n > r &&
      ((i = {
        type: 'atxHeadingText',
        start: e[r][1].start,
        end: e[n][1].end,
      }),
      (a = {
        type: 'chunkText',
        start: e[r][1].start,
        end: e[n][1].end,
        contentType: 'text',
      }),
      ti(e, r, n - r + 1, [
        ['enter', i, t],
        ['enter', a, t],
        ['exit', a, t],
        ['exit', i, t],
      ])),
    e
  )
}
function wa(e, t, n) {
  let r = 0
  return i
  function i(t) {
    return e.enter('atxHeading'), a(t)
  }
  function a(t) {
    return e.enter('atxHeadingSequence'), o(t)
  }
  function o(t) {
    return t === 35 && r++ < 6
      ? (e.consume(t), o)
      : t === null || gi(t)
      ? (e.exit('atxHeadingSequence'), s(t))
      : n(t)
  }
  function s(n) {
    return n === 35
      ? (e.enter('atxHeadingSequence'), c(n))
      : n === null || G(n)
      ? (e.exit('atxHeading'), t(n))
      : K(n)
      ? q(e, s, 'whitespace')(n)
      : (e.enter('atxHeadingText'), l(n))
  }
  function c(t) {
    return t === 35 ? (e.consume(t), c) : (e.exit('atxHeadingSequence'), s(t))
  }
  function l(t) {
    return t === null || t === 35 || gi(t)
      ? (e.exit('atxHeadingText'), s(t))
      : (e.consume(t), l)
  }
}
//#endregion
//#region node_modules/micromark-util-html-tag-name/index.js
var Ta =
    /* @__PURE__ */ 'address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul'.split(
      '.'
    ),
  Ea = ['pre', 'script', 'style', 'textarea'],
  Da = {
    concrete: !0,
    name: 'htmlFlow',
    resolveTo: Aa,
    tokenize: ja,
  },
  Oa = {
    partial: !0,
    tokenize: Na,
  },
  ka = {
    partial: !0,
    tokenize: Ma,
  }
function Aa(e) {
  let t = e.length
  for (; t-- && !(e[t][0] === 'enter' && e[t][1].type === 'htmlFlow'); );
  return (
    t > 1 &&
      e[t - 2][1].type === 'linePrefix' &&
      ((e[t][1].start = e[t - 2][1].start),
      (e[t + 1][1].start = e[t - 2][1].start),
      e.splice(t - 2, 2)),
    e
  )
}
function ja(e, t, n) {
  let r = this,
    i,
    a,
    o,
    s,
    c
  return l
  function l(e) {
    return u(e)
  }
  function u(t) {
    return e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(t), d
  }
  function d(s) {
    return s === 33
      ? (e.consume(s), f)
      : s === 47
      ? (e.consume(s), (a = !0), h)
      : s === 63
      ? (e.consume(s), (i = 3), r.interrupt ? t : ie)
      : li(s)
      ? (e.consume(s), (o = String.fromCharCode(s)), g)
      : n(s)
  }
  function f(a) {
    return a === 45
      ? (e.consume(a), (i = 2), p)
      : a === 91
      ? (e.consume(a), (i = 5), (s = 0), m)
      : li(a)
      ? (e.consume(a), (i = 4), r.interrupt ? t : ie)
      : n(a)
  }
  function p(i) {
    return i === 45 ? (e.consume(i), r.interrupt ? t : ie) : n(i)
  }
  function m(i) {
    return i === 'CDATA['.charCodeAt(s++)
      ? (e.consume(i), s === 6 ? (r.interrupt ? t : O) : m)
      : n(i)
  }
  function h(t) {
    return li(t) ? (e.consume(t), (o = String.fromCharCode(t)), g) : n(t)
  }
  function g(s) {
    if (s === null || s === 47 || s === 62 || gi(s)) {
      let c = s === 47,
        l = o.toLowerCase()
      return !c && !a && Ea.includes(l)
        ? ((i = 1), r.interrupt ? t(s) : O(s))
        : Ta.includes(o.toLowerCase())
        ? ((i = 6), c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s))
        : ((i = 7),
          r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s))
    }
    return s === 45 || ui(s)
      ? (e.consume(s), (o += String.fromCharCode(s)), g)
      : n(s)
  }
  function _(i) {
    return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i)
  }
  function v(t) {
    return K(t) ? (e.consume(t), v) : E(t)
  }
  function y(t) {
    return t === 47
      ? (e.consume(t), E)
      : t === 58 || t === 95 || li(t)
      ? (e.consume(t), b)
      : K(t)
      ? (e.consume(t), y)
      : E(t)
  }
  function b(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || ui(t)
      ? (e.consume(t), b)
      : x(t)
  }
  function x(t) {
    return t === 61 ? (e.consume(t), S) : K(t) ? (e.consume(t), x) : y(t)
  }
  function S(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
      ? (e.consume(t), (c = t), C)
      : K(t)
      ? (e.consume(t), S)
      : w(t)
  }
  function C(t) {
    return t === c
      ? (e.consume(t), (c = null), T)
      : t === null || G(t)
      ? n(t)
      : (e.consume(t), C)
  }
  function w(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 47 ||
      t === 60 ||
      t === 61 ||
      t === 62 ||
      t === 96 ||
      gi(t)
      ? x(t)
      : (e.consume(t), w)
  }
  function T(e) {
    return e === 47 || e === 62 || K(e) ? y(e) : n(e)
  }
  function E(t) {
    return t === 62 ? (e.consume(t), D) : n(t)
  }
  function D(t) {
    return t === null || G(t) ? O(t) : K(t) ? (e.consume(t), D) : n(t)
  }
  function O(t) {
    return t === 45 && i === 2
      ? (e.consume(t), A)
      : t === 60 && i === 1
      ? (e.consume(t), j)
      : t === 62 && i === 4
      ? (e.consume(t), ae)
      : t === 63 && i === 3
      ? (e.consume(t), ie)
      : t === 93 && i === 5
      ? (e.consume(t), re)
      : G(t) && (i === 6 || i === 7)
      ? (e.exit('htmlFlowData'), e.check(Oa, oe, ee)(t))
      : t === null || G(t)
      ? (e.exit('htmlFlowData'), ee(t))
      : (e.consume(t), O)
  }
  function ee(t) {
    return e.check(ka, te, oe)(t)
  }
  function te(t) {
    return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), k
  }
  function k(t) {
    return t === null || G(t) ? ee(t) : (e.enter('htmlFlowData'), O(t))
  }
  function A(t) {
    return t === 45 ? (e.consume(t), ie) : O(t)
  }
  function j(t) {
    return t === 47 ? (e.consume(t), (o = ''), ne) : O(t)
  }
  function ne(t) {
    if (t === 62) {
      let n = o.toLowerCase()
      return Ea.includes(n) ? (e.consume(t), ae) : O(t)
    }
    return li(t) && o.length < 8
      ? (e.consume(t), (o += String.fromCharCode(t)), ne)
      : O(t)
  }
  function re(t) {
    return t === 93 ? (e.consume(t), ie) : O(t)
  }
  function ie(t) {
    return t === 62
      ? (e.consume(t), ae)
      : t === 45 && i === 2
      ? (e.consume(t), ie)
      : O(t)
  }
  function ae(t) {
    return t === null || G(t)
      ? (e.exit('htmlFlowData'), oe(t))
      : (e.consume(t), ae)
  }
  function oe(n) {
    return e.exit('htmlFlow'), t(n)
  }
}
function Ma(e, t, n) {
  let r = this
  return i
  function i(t) {
    return G(t)
      ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), a)
      : n(t)
  }
  function a(e) {
    return r.parser.lazy[r.now().line] ? n(e) : t(e)
  }
}
function Na(e, t, n) {
  return r
  function r(r) {
    return (
      e.enter('lineEnding'),
      e.consume(r),
      e.exit('lineEnding'),
      e.attempt(Fi, t, n)
    )
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/html-text.js
var Pa = {
  name: 'htmlText',
  tokenize: Fa,
}
function Fa(e, t, n) {
  let r = this,
    i,
    a,
    o
  return s
  function s(t) {
    return e.enter('htmlText'), e.enter('htmlTextData'), e.consume(t), c
  }
  function c(t) {
    return t === 33
      ? (e.consume(t), l)
      : t === 47
      ? (e.consume(t), x)
      : t === 63
      ? (e.consume(t), y)
      : li(t)
      ? (e.consume(t), w)
      : n(t)
  }
  function l(t) {
    return t === 45
      ? (e.consume(t), u)
      : t === 91
      ? (e.consume(t), (a = 0), m)
      : li(t)
      ? (e.consume(t), v)
      : n(t)
  }
  function u(t) {
    return t === 45 ? (e.consume(t), p) : n(t)
  }
  function d(t) {
    return t === null
      ? n(t)
      : t === 45
      ? (e.consume(t), f)
      : G(t)
      ? ((o = d), j(t))
      : (e.consume(t), d)
  }
  function f(t) {
    return t === 45 ? (e.consume(t), p) : d(t)
  }
  function p(e) {
    return e === 62 ? A(e) : e === 45 ? f(e) : d(e)
  }
  function m(t) {
    return t === 'CDATA['.charCodeAt(a++)
      ? (e.consume(t), a === 6 ? h : m)
      : n(t)
  }
  function h(t) {
    return t === null
      ? n(t)
      : t === 93
      ? (e.consume(t), g)
      : G(t)
      ? ((o = h), j(t))
      : (e.consume(t), h)
  }
  function g(t) {
    return t === 93 ? (e.consume(t), _) : h(t)
  }
  function _(t) {
    return t === 62 ? A(t) : t === 93 ? (e.consume(t), _) : h(t)
  }
  function v(t) {
    return t === null || t === 62
      ? A(t)
      : G(t)
      ? ((o = v), j(t))
      : (e.consume(t), v)
  }
  function y(t) {
    return t === null
      ? n(t)
      : t === 63
      ? (e.consume(t), b)
      : G(t)
      ? ((o = y), j(t))
      : (e.consume(t), y)
  }
  function b(e) {
    return e === 62 ? A(e) : y(e)
  }
  function x(t) {
    return li(t) ? (e.consume(t), S) : n(t)
  }
  function S(t) {
    return t === 45 || ui(t) ? (e.consume(t), S) : C(t)
  }
  function C(t) {
    return G(t) ? ((o = C), j(t)) : K(t) ? (e.consume(t), C) : A(t)
  }
  function w(t) {
    return t === 45 || ui(t)
      ? (e.consume(t), w)
      : t === 47 || t === 62 || gi(t)
      ? T(t)
      : n(t)
  }
  function T(t) {
    return t === 47
      ? (e.consume(t), A)
      : t === 58 || t === 95 || li(t)
      ? (e.consume(t), E)
      : G(t)
      ? ((o = T), j(t))
      : K(t)
      ? (e.consume(t), T)
      : A(t)
  }
  function E(t) {
    return t === 45 || t === 46 || t === 58 || t === 95 || ui(t)
      ? (e.consume(t), E)
      : D(t)
  }
  function D(t) {
    return t === 61
      ? (e.consume(t), O)
      : G(t)
      ? ((o = D), j(t))
      : K(t)
      ? (e.consume(t), D)
      : T(t)
  }
  function O(t) {
    return t === null || t === 60 || t === 61 || t === 62 || t === 96
      ? n(t)
      : t === 34 || t === 39
      ? (e.consume(t), (i = t), ee)
      : G(t)
      ? ((o = O), j(t))
      : K(t)
      ? (e.consume(t), O)
      : (e.consume(t), te)
  }
  function ee(t) {
    return t === i
      ? (e.consume(t), (i = void 0), k)
      : t === null
      ? n(t)
      : G(t)
      ? ((o = ee), j(t))
      : (e.consume(t), ee)
  }
  function te(t) {
    return t === null ||
      t === 34 ||
      t === 39 ||
      t === 60 ||
      t === 61 ||
      t === 96
      ? n(t)
      : t === 47 || t === 62 || gi(t)
      ? T(t)
      : (e.consume(t), te)
  }
  function k(e) {
    return e === 47 || e === 62 || gi(e) ? T(e) : n(e)
  }
  function A(r) {
    return r === 62
      ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), t)
      : n(r)
  }
  function j(t) {
    return (
      e.exit('htmlTextData'),
      e.enter('lineEnding'),
      e.consume(t),
      e.exit('lineEnding'),
      ne
    )
  }
  function ne(t) {
    return K(t)
      ? q(
          e,
          re,
          'linePrefix',
          r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
        )(t)
      : re(t)
  }
  function re(t) {
    return e.enter('htmlTextData'), o(t)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-end.js
var Ia = {
    name: 'labelEnd',
    resolveAll: Ba,
    resolveTo: Va,
    tokenize: Ha,
  },
  La = { tokenize: Ua },
  Ra = { tokenize: Wa },
  za = { tokenize: Ga }
function Ba(e) {
  let t = -1,
    n = []
  for (; ++t < e.length; ) {
    let r = e[t][1]
    if (
      (n.push(e[t]),
      r.type === 'labelImage' ||
        r.type === 'labelLink' ||
        r.type === 'labelEnd')
    ) {
      let e = r.type === 'labelImage' ? 4 : 2
      ;(r.type = 'data'), (t += e)
    }
  }
  return e.length !== n.length && ti(e, 0, e.length, n), e
}
function Va(e, t) {
  let n = e.length,
    r = 0,
    i,
    a,
    o,
    s
  for (; n--; )
    if (((i = e[n][1]), a)) {
      if (i.type === 'link' || (i.type === 'labelLink' && i._inactive)) break
      e[n][0] === 'enter' && i.type === 'labelLink' && (i._inactive = !0)
    } else if (o) {
      if (
        e[n][0] === 'enter' &&
        (i.type === 'labelImage' || i.type === 'labelLink') &&
        !i._balanced &&
        ((a = n), i.type !== 'labelLink')
      ) {
        r = 2
        break
      }
    } else i.type === 'labelEnd' && (o = n)
  let c = {
      type: e[a][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...e[a][1].start },
      end: { ...e[e.length - 1][1].end },
    },
    l = {
      type: 'label',
      start: { ...e[a][1].start },
      end: { ...e[o][1].end },
    },
    u = {
      type: 'labelText',
      start: { ...e[a + r + 2][1].end },
      end: { ...e[o - 2][1].start },
    }
  return (
    (s = [
      ['enter', c, t],
      ['enter', l, t],
    ]),
    (s = ni(s, e.slice(a + 1, a + r + 3))),
    (s = ni(s, [['enter', u, t]])),
    (s = ni(
      s,
      Oi(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)
    )),
    (s = ni(s, [['exit', u, t], e[o - 2], e[o - 1], ['exit', l, t]])),
    (s = ni(s, e.slice(o + 1))),
    (s = ni(s, [['exit', c, t]])),
    ti(e, a, e.length, s),
    e
  )
}
function Ha(e, t, n) {
  let r = this,
    i = r.events.length,
    a,
    o
  for (; i--; )
    if (
      (r.events[i][1].type === 'labelImage' ||
        r.events[i][1].type === 'labelLink') &&
      !r.events[i][1]._balanced
    ) {
      a = r.events[i][1]
      break
    }
  return s
  function s(t) {
    return a
      ? a._inactive
        ? d(t)
        : ((o = r.parser.defined.includes(
            ci(
              r.sliceSerialize({
                start: a.end,
                end: r.now(),
              })
            )
          )),
          e.enter('labelEnd'),
          e.enter('labelMarker'),
          e.consume(t),
          e.exit('labelMarker'),
          e.exit('labelEnd'),
          c)
      : n(t)
  }
  function c(t) {
    return t === 40
      ? e.attempt(La, u, o ? u : d)(t)
      : t === 91
      ? e.attempt(Ra, u, o ? l : d)(t)
      : o
      ? u(t)
      : d(t)
  }
  function l(t) {
    return e.attempt(za, u, d)(t)
  }
  function u(e) {
    return t(e)
  }
  function d(e) {
    return (a._balanced = !0), n(e)
  }
}
function Ua(e, t, n) {
  return r
  function r(t) {
    return (
      e.enter('resource'),
      e.enter('resourceMarker'),
      e.consume(t),
      e.exit('resourceMarker'),
      i
    )
  }
  function i(t) {
    return gi(t) ? ha(e, a)(t) : a(t)
  }
  function a(t) {
    return t === 41
      ? u(t)
      : fa(
          e,
          o,
          s,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32
        )(t)
  }
  function o(t) {
    return gi(t) ? ha(e, c)(t) : u(t)
  }
  function s(e) {
    return n(e)
  }
  function c(t) {
    return t === 34 || t === 39 || t === 40
      ? ma(
          e,
          l,
          n,
          'resourceTitle',
          'resourceTitleMarker',
          'resourceTitleString'
        )(t)
      : u(t)
  }
  function l(t) {
    return gi(t) ? ha(e, u)(t) : u(t)
  }
  function u(r) {
    return r === 41
      ? (e.enter('resourceMarker'),
        e.consume(r),
        e.exit('resourceMarker'),
        e.exit('resource'),
        t)
      : n(r)
  }
}
function Wa(e, t, n) {
  let r = this
  return i
  function i(t) {
    return pa.call(
      r,
      e,
      a,
      o,
      'reference',
      'referenceMarker',
      'referenceString'
    )(t)
  }
  function a(e) {
    return r.parser.defined.includes(
      ci(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
    )
      ? t(e)
      : n(e)
  }
  function o(e) {
    return n(e)
  }
}
function Ga(e, t, n) {
  return r
  function r(t) {
    return (
      e.enter('reference'),
      e.enter('referenceMarker'),
      e.consume(t),
      e.exit('referenceMarker'),
      i
    )
  }
  function i(r) {
    return r === 93
      ? (e.enter('referenceMarker'),
        e.consume(r),
        e.exit('referenceMarker'),
        e.exit('reference'),
        t)
      : n(r)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-image.js
var Ka = {
  name: 'labelStartImage',
  resolveAll: Ia.resolveAll,
  tokenize: qa,
}
function qa(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (
      e.enter('labelImage'),
      e.enter('labelImageMarker'),
      e.consume(t),
      e.exit('labelImageMarker'),
      a
    )
  }
  function a(t) {
    return t === 91
      ? (e.enter('labelMarker'),
        e.consume(t),
        e.exit('labelMarker'),
        e.exit('labelImage'),
        o)
      : n(t)
  }
  function o(e) {
    /* c8 ignore next 3 */
    return e === 94 && '_hiddenFootnoteSupport' in r.parser.constructs
      ? n(e)
      : t(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/label-start-link.js
var Ja = {
  name: 'labelStartLink',
  resolveAll: Ia.resolveAll,
  tokenize: Ya,
}
function Ya(e, t, n) {
  let r = this
  return i
  function i(t) {
    return (
      e.enter('labelLink'),
      e.enter('labelMarker'),
      e.consume(t),
      e.exit('labelMarker'),
      e.exit('labelLink'),
      a
    )
  }
  function a(e) {
    /* c8 ignore next 3 */
    return e === 94 && '_hiddenFootnoteSupport' in r.parser.constructs
      ? n(e)
      : t(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/line-ending.js
var Xa = {
  name: 'lineEnding',
  tokenize: Za,
}
function Za(e, t) {
  return n
  function n(n) {
    return (
      e.enter('lineEnding'),
      e.consume(n),
      e.exit('lineEnding'),
      q(e, t, 'linePrefix')
    )
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/thematic-break.js
var Qa = {
  name: 'thematicBreak',
  tokenize: $a,
}
function $a(e, t, n) {
  let r = 0,
    i
  return a
  function a(t) {
    return e.enter('thematicBreak'), o(t)
  }
  function o(e) {
    return (i = e), s(e)
  }
  function s(a) {
    return a === i
      ? (e.enter('thematicBreakSequence'), c(a))
      : r >= 3 && (a === null || G(a))
      ? (e.exit('thematicBreak'), t(a))
      : n(a)
  }
  function c(t) {
    return t === i
      ? (e.consume(t), r++, c)
      : (e.exit('thematicBreakSequence'),
        K(t) ? q(e, s, 'whitespace')(t) : s(t))
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/list.js
var eo = {
    continuation: { tokenize: io },
    exit: oo,
    name: 'list',
    tokenize: ro,
  },
  to = {
    partial: !0,
    tokenize: so,
  },
  no = {
    partial: !0,
    tokenize: ao,
  }
function ro(e, t, n) {
  let r = this,
    i = r.events[r.events.length - 1],
    a =
      i && i[1].type === 'linePrefix'
        ? i[2].sliceSerialize(i[1], !0).length
        : 0,
    o = 0
  return s
  function s(t) {
    let i =
      r.containerState.type ||
      (t === 42 || t === 43 || t === 45 ? 'listUnordered' : 'listOrdered')
    if (
      i === 'listUnordered'
        ? !r.containerState.marker || t === r.containerState.marker
        : pi(t)
    ) {
      if (
        (r.containerState.type ||
          ((r.containerState.type = i), e.enter(i, { _container: !0 })),
        i === 'listUnordered')
      )
        return (
          e.enter('listItemPrefix'),
          t === 42 || t === 45 ? e.check(Qa, n, l)(t) : l(t)
        )
      if (!r.interrupt || t === 49)
        return e.enter('listItemPrefix'), e.enter('listItemValue'), c(t)
    }
    return n(t)
  }
  function c(t) {
    return pi(t) && ++o < 10
      ? (e.consume(t), c)
      : (!r.interrupt || o < 2) &&
        (r.containerState.marker
          ? t === r.containerState.marker
          : t === 41 || t === 46)
      ? (e.exit('listItemValue'), l(t))
      : n(t)
  }
  function l(t) {
    return (
      e.enter('listItemMarker'),
      e.consume(t),
      e.exit('listItemMarker'),
      (r.containerState.marker = r.containerState.marker || t),
      e.check(Fi, r.interrupt ? n : u, e.attempt(to, f, d))
    )
  }
  function u(e) {
    return (r.containerState.initialBlankLine = !0), a++, f(e)
  }
  function d(t) {
    return K(t)
      ? (e.enter('listItemPrefixWhitespace'),
        e.consume(t),
        e.exit('listItemPrefixWhitespace'),
        f)
      : n(t)
  }
  function f(n) {
    return (
      (r.containerState.size =
        a + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
      t(n)
    )
  }
}
function io(e, t, n) {
  let r = this
  return (r.containerState._closeFlow = void 0), e.check(Fi, i, a)
  function i(n) {
    return (
      (r.containerState.furtherBlankLines =
        r.containerState.furtherBlankLines ||
        r.containerState.initialBlankLine),
      q(e, t, 'listItemIndent', r.containerState.size + 1)(n)
    )
  }
  function a(n) {
    return r.containerState.furtherBlankLines || !K(n)
      ? ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        o(n))
      : ((r.containerState.furtherBlankLines = void 0),
        (r.containerState.initialBlankLine = void 0),
        e.attempt(no, t, o)(n))
  }
  function o(i) {
    return (
      (r.containerState._closeFlow = !0),
      (r.interrupt = void 0),
      q(
        e,
        e.attempt(eo, t, n),
        'linePrefix',
        r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4
      )(i)
    )
  }
}
function ao(e, t, n) {
  let r = this
  return q(e, i, 'listItemIndent', r.containerState.size + 1)
  function i(e) {
    let i = r.events[r.events.length - 1]
    return i &&
      i[1].type === 'listItemIndent' &&
      i[2].sliceSerialize(i[1], !0).length === r.containerState.size
      ? t(e)
      : n(e)
  }
}
function oo(e) {
  e.exit(this.containerState.type)
}
function so(e, t, n) {
  let r = this
  return q(
    e,
    i,
    'listItemPrefixWhitespace',
    r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
  )
  function i(e) {
    let i = r.events[r.events.length - 1]
    return !K(e) && i && i[1].type === 'listItemPrefixWhitespace' ? t(e) : n(e)
  }
}
//#endregion
//#region node_modules/micromark-core-commonmark/lib/setext-underline.js
var co = {
  name: 'setextUnderline',
  resolveTo: lo,
  tokenize: uo,
}
function lo(e, t) {
  let n = e.length,
    r,
    i,
    a
  for (; n--; )
    if (e[n][0] === 'enter') {
      if (e[n][1].type === 'content') {
        r = n
        break
      }
      e[n][1].type === 'paragraph' && (i = n)
    } else
      e[n][1].type === 'content' && e.splice(n, 1),
        !a && e[n][1].type === 'definition' && (a = n)
  let o = {
    type: 'setextHeading',
    start: { ...e[r][1].start },
    end: { ...e[e.length - 1][1].end },
  }
  return (
    (e[i][1].type = 'setextHeadingText'),
    a
      ? (e.splice(i, 0, ['enter', o, t]),
        e.splice(a + 1, 0, ['exit', e[r][1], t]),
        (e[r][1].end = { ...e[a][1].end }))
      : (e[r][1] = o),
    e.push(['exit', o, t]),
    e
  )
}
function uo(e, t, n) {
  let r = this,
    i
  return a
  function a(t) {
    let a = r.events.length,
      s
    for (; a--; )
      if (
        r.events[a][1].type !== 'lineEnding' &&
        r.events[a][1].type !== 'linePrefix' &&
        r.events[a][1].type !== 'content'
      ) {
        s = r.events[a][1].type === 'paragraph'
        break
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || s)
      ? (e.enter('setextHeadingLine'), (i = t), o(t))
      : n(t)
  }
  function o(t) {
    return e.enter('setextHeadingLineSequence'), s(t)
  }
  function s(t) {
    return t === i
      ? (e.consume(t), s)
      : (e.exit('setextHeadingLineSequence'),
        K(t) ? q(e, c, 'lineSuffix')(t) : c(t))
  }
  function c(r) {
    return r === null || G(r) ? (e.exit('setextHeadingLine'), t(r)) : n(r)
  }
}
//#endregion
//#region node_modules/micromark/lib/initialize/flow.js
var fo = { tokenize: po }
function po(e) {
  let t = this,
    n = e.attempt(
      Fi,
      r,
      e.attempt(
        this.parser.constructs.flowInitial,
        i,
        q(
          e,
          e.attempt(this.parser.constructs.flow, i, e.attempt(sa, i)),
          'linePrefix'
        )
      )
    )
  return n
  function r(r) {
    if (r === null) {
      e.consume(r)
      return
    }
    return (
      e.enter('lineEndingBlank'),
      e.consume(r),
      e.exit('lineEndingBlank'),
      (t.currentConstruct = void 0),
      n
    )
  }
  function i(r) {
    if (r === null) {
      e.consume(r)
      return
    }
    return (
      e.enter('lineEnding'),
      e.consume(r),
      e.exit('lineEnding'),
      (t.currentConstruct = void 0),
      n
    )
  }
}
//#endregion
//#region node_modules/micromark/lib/initialize/text.js
var mo = { resolveAll: vo() },
  ho = _o('string'),
  go = _o('text')
function _o(e) {
  return {
    resolveAll: vo(e === 'text' ? yo : void 0),
    tokenize: t,
  }
  function t(t) {
    let n = this,
      r = this.parser.constructs[e],
      i = t.attempt(r, a, o)
    return a
    function a(e) {
      return c(e) ? i(e) : o(e)
    }
    function o(e) {
      if (e === null) {
        t.consume(e)
        return
      }
      return t.enter('data'), t.consume(e), s
    }
    function s(e) {
      return c(e) ? (t.exit('data'), i(e)) : (t.consume(e), s)
    }
    function c(e) {
      if (e === null) return !0
      let t = r[e],
        i = -1
      if (t)
        for (; ++i < t.length; ) {
          let e = t[i]
          if (!e.previous || e.previous.call(n, n.previous)) return !0
        }
      return !1
    }
  }
}
function vo(e) {
  return t
  function t(t, n) {
    let r = -1,
      i
    for (; ++r <= t.length; )
      i === void 0
        ? t[r] && t[r][1].type === 'data' && ((i = r), r++)
        : (!t[r] || t[r][1].type !== 'data') &&
          (r !== i + 2 &&
            ((t[i][1].end = t[r - 1][1].end),
            t.splice(i + 2, r - i - 2),
            (r = i + 2)),
          (i = void 0))
    return e ? e(t, n) : t
  }
}
function yo(e, t) {
  let n = 0
  for (; ++n <= e.length; )
    if (
      (n === e.length || e[n][1].type === 'lineEnding') &&
      e[n - 1][1].type === 'data'
    ) {
      let r = e[n - 1][1],
        i = t.sliceStream(r),
        a = i.length,
        o = -1,
        s = 0,
        c
      for (; a--; ) {
        let e = i[a]
        if (typeof e == 'string') {
          for (o = e.length; e.charCodeAt(o - 1) === 32; ) s++, o--
          if (o) break
          o = -1
        } else if (e === -2) (c = !0), s++
        else if (e !== -1) {
          a++
          break
        }
      }
      if ((t._contentTypeTextTrailing && n === e.length && (s = 0), s)) {
        let i = {
          type:
            n === e.length || c || s < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s,
          },
          end: { ...r.end },
        }
        ;(r.end = { ...i.start }),
          r.start.offset === r.end.offset
            ? Object.assign(r, i)
            : (e.splice(n, 0, ['enter', i, t], ['exit', i, t]), (n += 2))
      }
      n++
    }
  return e
}
//#endregion
//#region node_modules/micromark/lib/constructs.js
var bo = /* @__PURE__ */ Se({
    attentionMarkers: () => Oo,
    contentInitial: () => So,
    disable: () => ko,
    document: () => xo,
    flow: () => wo,
    flowInitial: () => Co,
    insideSpan: () => Do,
    string: () => To,
    text: () => Eo,
  }),
  xo = {
    42: eo,
    43: eo,
    45: eo,
    48: eo,
    49: eo,
    50: eo,
    51: eo,
    52: eo,
    53: eo,
    54: eo,
    55: eo,
    56: eo,
    57: eo,
    62: Li,
  },
  So = { 91: ga },
  Co = {
    [-2]: Yi,
    [-1]: Yi,
    32: Yi,
  },
  wo = {
    35: Sa,
    42: Qa,
    45: [co, Qa],
    60: Da,
    61: co,
    95: Qa,
    96: Ki,
    126: Ki,
  },
  To = {
    38: Ui,
    92: Vi,
  },
  Eo = {
    [-5]: Xa,
    [-4]: Xa,
    [-3]: Xa,
    33: Ka,
    38: Ui,
    42: ki,
    60: [Ni, Pa],
    91: Ja,
    92: [ba, Vi],
    93: Ia,
    95: ki,
    96: $i,
  },
  Do = { null: [ki, mo] },
  Oo = { null: [42, 95] },
  ko = { null: [] }
//#endregion
//#region node_modules/micromark/lib/create-tokenizer.js
function Ao(e, t, n) {
  let r = {
      _bufferIndex: -1,
      _index: 0,
      line: (n && n.line) || 1,
      column: (n && n.column) || 1,
      offset: (n && n.offset) || 0,
    },
    i = {},
    a = [],
    o = [],
    s = [],
    c = {
      attempt: C(x),
      check: C(S),
      consume: v,
      enter: y,
      exit: b,
      interrupt: C(S, { interrupt: !0 }),
    },
    l = {
      code: null,
      containerState: {},
      defineSkip: h,
      events: [],
      now: m,
      parser: e,
      previous: null,
      sliceSerialize: f,
      sliceStream: p,
      write: d,
    },
    u = t.tokenize.call(l, c)
  return t.resolveAll && a.push(t), l
  function d(e) {
    return (
      (o = ni(o, e)),
      g(),
      o[o.length - 1] === null
        ? (w(t, 0), (l.events = Oi(a, l.events, l)), l.events)
        : []
    )
  }
  function f(e, t) {
    return Mo(p(e), t)
  }
  function p(e) {
    return jo(o, e)
  }
  function m() {
    let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r
    return {
      _bufferIndex: e,
      _index: t,
      line: n,
      column: i,
      offset: a,
    }
  }
  function h(e) {
    ;(i[e.line] = e.column), E()
  }
  function g() {
    let e
    for (; r._index < o.length; ) {
      let t = o[r._index]
      if (typeof t == 'string')
        for (
          e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === e && r._bufferIndex < t.length;

        )
          _(t.charCodeAt(r._bufferIndex))
      else _(t)
    }
  }
  function _(e) {
    u = u(e)
  }
  function v(e) {
    G(e)
      ? (r.line++, (r.column = 1), (r.offset += e === -3 ? 2 : 1), E())
      : e !== -1 && (r.column++, r.offset++),
      r._bufferIndex < 0
        ? r._index++
        : (r._bufferIndex++,
          r._bufferIndex === o[r._index].length &&
            ((r._bufferIndex = -1), r._index++)),
      (l.previous = e)
  }
  function y(e, t) {
    let n = t || {}
    return (
      (n.type = e),
      (n.start = m()),
      l.events.push(['enter', n, l]),
      s.push(n),
      n
    )
  }
  function b(e) {
    let t = s.pop()
    return (t.end = m()), l.events.push(['exit', t, l]), t
  }
  function x(e, t) {
    w(e, t.from)
  }
  function S(e, t) {
    t.restore()
  }
  function C(e, t) {
    return n
    function n(n, r, i) {
      let a, o, s, u
      return Array.isArray(n) ? f(n) : 'tokenize' in n ? f([n]) : d(n)
      function d(e) {
        return t
        function t(t) {
          let n = t !== null && e[t],
            r = t !== null && e.null
          return f([
            ...(Array.isArray(n) ? n : n ? [n] : []),
            ...(Array.isArray(r) ? r : r ? [r] : []),
          ])(t)
        }
      }
      function f(e) {
        return (a = e), (o = 0), e.length === 0 ? i : p(e[o])
      }
      function p(e) {
        return n
        function n(n) {
          return (
            (u = T()),
            (s = e),
            e.partial || (l.currentConstruct = e),
            e.name && l.parser.constructs.disable.null.includes(e.name)
              ? h(n)
              : e.tokenize.call(
                  t ? Object.assign(Object.create(l), t) : l,
                  c,
                  m,
                  h
                )(n)
          )
        }
      }
      function m(t) {
        return e(s, u), r
      }
      function h(e) {
        return u.restore(), ++o < a.length ? p(a[o]) : i
      }
    }
  }
  function w(e, t) {
    e.resolveAll && !a.includes(e) && a.push(e),
      e.resolve &&
        ti(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)),
      e.resolveTo && (l.events = e.resolveTo(l.events, l))
  }
  function T() {
    let e = m(),
      t = l.previous,
      n = l.currentConstruct,
      i = l.events.length,
      a = Array.from(s)
    return {
      from: i,
      restore: o,
    }
    function o() {
      ;(r = e),
        (l.previous = t),
        (l.currentConstruct = n),
        (l.events.length = i),
        (s = a),
        E()
    }
  }
  function E() {
    r.line in i &&
      r.column < 2 &&
      ((r.column = i[r.line]), (r.offset += i[r.line] - 1))
  }
}
function jo(e, t) {
  let n = t.start._index,
    r = t.start._bufferIndex,
    i = t.end._index,
    a = t.end._bufferIndex,
    o
  if (n === i) o = [e[n].slice(r, a)]
  else {
    if (((o = e.slice(n, i)), r > -1)) {
      let e = o[0]
      typeof e == 'string' ? (o[0] = e.slice(r)) : o.shift()
    }
    a > 0 && o.push(e[i].slice(0, a))
  }
  return o
}
function Mo(e, t) {
  let n = -1,
    r = [],
    i
  for (; ++n < e.length; ) {
    let a = e[n],
      o
    if (typeof a == 'string') o = a
    else
      switch (a) {
        case -5:
          o = '\r'
          break
        case -4:
          o = '\n'
          break
        case -3:
          o = '\r\n'
          break
        case -2:
          o = t ? ' ' : '	'
          break
        case -1:
          if (!t && i) continue
          o = ' '
          break
        default:
          o = String.fromCharCode(a)
      }
    ;(i = a === -2), r.push(o)
  }
  return r.join('')
}
//#endregion
//#region node_modules/micromark/lib/parse.js
function No(e) {
  let t = {
    constructs: ii([bo, ...((e || {}).extensions || [])]),
    content: n(xi),
    defined: [],
    document: n(Ci),
    flow: n(fo),
    lazy: {},
    string: n(ho),
    text: n(go),
  }
  return t
  function n(e) {
    return n
    function n(n) {
      return Ao(t, e, n)
    }
  }
}
//#endregion
//#region node_modules/micromark/lib/postprocess.js
function Po(e) {
  for (; !aa(e); );
  return e
}
//#endregion
//#region node_modules/micromark/lib/preprocess.js
var Fo = /[\0\t\n\r]/g
function Io() {
  let e = 1,
    t = '',
    n = !0,
    r
  return i
  function i(i, a, o) {
    let s = [],
      c,
      l,
      u,
      d,
      f
    for (
      i =
        t +
        (typeof i == 'string'
          ? i.toString()
          : new TextDecoder(a || void 0).decode(i)),
        u = 0,
        t = '',
        n &&= (i.charCodeAt(0) === 65279 && u++, void 0);
      u < i.length;

    ) {
      if (
        ((Fo.lastIndex = u),
        (c = Fo.exec(i)),
        (d = c && c.index !== void 0 ? c.index : i.length),
        (f = i.charCodeAt(d)),
        !c)
      ) {
        t = i.slice(u)
        break
      }
      if (f === 10 && u === d && r) s.push(-3), (r = void 0)
      else
        switch (
          ((r &&= (s.push(-5), void 0)),
          u < d && (s.push(i.slice(u, d)), (e += d - u)),
          f)
        ) {
          case 0:
            s.push(65533), e++
            break
          case 9:
            for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l; ) s.push(-1)
            break
          case 10:
            s.push(-4), (e = 1)
            break
          default:
            ;(r = !0), (e = 1)
        }
      u = d + 1
    }
    return o && (r && s.push(-5), t && s.push(t), s.push(null)), s
  }
}
//#endregion
//#region node_modules/micromark-util-decode-string/index.js
var Lo = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function Ro(e) {
  return e.replace(Lo, zo)
}
function zo(e, t, n) {
  if (t) return t
  if (n.charCodeAt(0) === 35) {
    let e = n.charCodeAt(1),
      t = e === 120 || e === 88
    return si(n.slice(t ? 2 : 1), t ? 16 : 10)
  }
  return ei(n) || e
}
//#endregion
//#region node_modules/mdast-util-from-markdown/lib/index.js
var Bo = {}.hasOwnProperty
function Vo(e, t, n) {
  return (
    typeof t != 'string' && ((n = t), (t = void 0)),
    Ho(n)(Po(No(n).document().write(Io()(e, t, !0))))
  )
}
function Ho(e) {
  let t = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: a(N),
      autolinkProtocol: T,
      autolinkEmail: T,
      atxHeading: a(ve),
      blockQuote: a(pe),
      characterEscape: T,
      characterReference: T,
      codeFenced: a(me),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(me, o),
      codeText: a(he, o),
      codeTextData: T,
      data: T,
      codeFlowValue: T,
      definition: a(ge),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(_e),
      hardBreakEscape: a(ye),
      hardBreakTrailing: a(ye),
      htmlFlow: a(be, o),
      htmlFlowData: T,
      htmlText: a(be, o),
      htmlTextData: T,
      image: a(xe),
      label: o,
      link: a(N),
      listItem: a(Ce),
      listItemValue: f,
      listOrdered: a(Se, d),
      listUnordered: a(Se),
      paragraph: a(we),
      reference: se,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(ve),
      strong: a(Te),
      thematicBreak: a(De),
    },
    exit: {
      atxHeading: c(),
      atxHeadingSequence: x,
      autolink: c(),
      autolinkEmail: fe,
      autolinkProtocol: de,
      blockQuote: c(),
      characterEscapeValue: E,
      characterReferenceMarkerHexadecimal: le,
      characterReferenceMarkerNumeric: le,
      characterReferenceValue: M,
      characterReference: ue,
      codeFenced: c(g),
      codeFencedFence: h,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: m,
      codeFlowValue: E,
      codeIndented: c(_),
      codeText: c(k),
      codeTextData: E,
      data: E,
      definition: c(),
      definitionDestinationString: b,
      definitionLabelString: v,
      definitionTitleString: y,
      emphasis: c(),
      hardBreakEscape: c(O),
      hardBreakTrailing: c(O),
      htmlFlow: c(ee),
      htmlFlowData: E,
      htmlText: c(te),
      htmlTextData: E,
      image: c(j),
      label: re,
      labelText: ne,
      lineEnding: D,
      link: c(A),
      listItem: c(),
      listOrdered: c(),
      listUnordered: c(),
      paragraph: c(),
      referenceString: ce,
      resourceDestinationString: ie,
      resourceTitleString: ae,
      resource: oe,
      setextHeading: c(w),
      setextHeadingLineSequence: C,
      setextHeadingText: S,
      strong: c(),
      thematicBreak: c(),
    },
  }
  Wo(t, (e || {}).mdastExtensions || [])
  let n = {}
  return r
  function r(e) {
    let r = {
        type: 'root',
        children: [],
      },
      a = {
        stack: [r],
        tokenStack: [],
        config: t,
        enter: s,
        exit: l,
        buffer: o,
        resume: u,
        data: n,
      },
      c = [],
      d = -1
    for (; ++d < e.length; )
      (e[d][1].type === 'listOrdered' || e[d][1].type === 'listUnordered') &&
        (e[d][0] === 'enter' ? c.push(d) : (d = i(e, c.pop(), d)))
    for (d = -1; ++d < e.length; ) {
      let n = t[e[d][0]]
      Bo.call(n, e[d][1].type) &&
        n[e[d][1].type].call(
          Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a),
          e[d][1]
        )
    }
    if (a.tokenStack.length > 0) {
      let e = a.tokenStack[a.tokenStack.length - 1]
      ;(e[1] || Ko).call(a, void 0, e[0])
    }
    for (
      r.position = {
        start: Uo(
          e.length > 0
            ? e[0][1].start
            : {
                line: 1,
                column: 1,
                offset: 0,
              }
        ),
        end: Uo(
          e.length > 0
            ? e[e.length - 2][1].end
            : {
                line: 1,
                column: 1,
                offset: 0,
              }
        ),
      },
        d = -1;
      ++d < t.transforms.length;

    )
      r = t.transforms[d](r) || r
    return r
  }
  function i(e, t, n) {
    let r = t - 1,
      i = -1,
      a = !1,
      o,
      s,
      c,
      l
    for (; ++r <= n; ) {
      let t = e[r]
      switch (t[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote':
          t[0] === 'enter' ? i++ : i--, (l = void 0)
          break
        case 'lineEndingBlank':
          t[0] === 'enter' && (o && !l && !i && !c && (c = r), (l = void 0))
          break
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break
        default:
          l = void 0
      }
      if (
        (!i && t[0] === 'enter' && t[1].type === 'listItemPrefix') ||
        (i === -1 &&
          t[0] === 'exit' &&
          (t[1].type === 'listUnordered' || t[1].type === 'listOrdered'))
      ) {
        if (o) {
          let i = r
          for (s = void 0; i--; ) {
            let t = e[i]
            if (t[1].type === 'lineEnding' || t[1].type === 'lineEndingBlank') {
              if (t[0] === 'exit') continue
              s && ((e[s][1].type = 'lineEndingBlank'), (a = !0)),
                (t[1].type = 'lineEnding'),
                (s = i)
            } else if (
              !(
                t[1].type === 'linePrefix' ||
                t[1].type === 'blockQuotePrefix' ||
                t[1].type === 'blockQuotePrefixWhitespace' ||
                t[1].type === 'blockQuoteMarker' ||
                t[1].type === 'listItemIndent'
              )
            )
              break
          }
          c && (!s || c < s) && (o._spread = !0),
            (o.end = Object.assign({}, s ? e[s][1].start : t[1].end)),
            e.splice(s || r, 0, ['exit', o, t[2]]),
            r++,
            n++
        }
        if (t[1].type === 'listItemPrefix') {
          let i = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, t[1].start),
            end: void 0,
          }
          ;(o = i),
            e.splice(r, 0, ['enter', i, t[2]]),
            r++,
            n++,
            (c = void 0),
            (l = !0)
        }
      }
    }
    return (e[t][1]._spread = a), n
  }
  function a(e, t) {
    return n
    function n(n) {
      s.call(this, e(n), n), t && t.call(this, n)
    }
  }
  function o() {
    this.stack.push({
      type: 'fragment',
      children: [],
    })
  }
  function s(e, t, n) {
    this.stack[this.stack.length - 1].children.push(e),
      this.stack.push(e),
      this.tokenStack.push([t, n || void 0]),
      (e.position = {
        start: Uo(t.start),
        end: void 0,
      })
  }
  function c(e) {
    return t
    function t(t) {
      e && e.call(this, t), l.call(this, t)
    }
  }
  function l(e, t) {
    let n = this.stack.pop(),
      r = this.tokenStack.pop()
    if (r)
      r[0].type !== e.type &&
        (t ? t.call(this, e, r[0]) : (r[1] || Ko).call(this, e, r[0]))
    else
      throw Error(
        'Cannot close `' +
          e.type +
          '` (' +
          mr({
            start: e.start,
            end: e.end,
          }) +
          '): it’s not open'
      )
    n.position.end = Uo(e.end)
  }
  function u() {
    return Yr(this.stack.pop())
  }
  function d() {
    this.data.expectingFirstListItemValue = !0
  }
  function f(e) {
    if (this.data.expectingFirstListItemValue) {
      let t = this.stack[this.stack.length - 2]
      ;(t.start = Number.parseInt(this.sliceSerialize(e), 10)),
        (this.data.expectingFirstListItemValue = void 0)
    }
  }
  function p() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.lang = e
  }
  function m() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.meta = e
  }
  function h() {
    this.data.flowCodeInside || (this.buffer(), (this.data.flowCodeInside = !0))
  }
  function g() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    ;(t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')),
      (this.data.flowCodeInside = void 0)
  }
  function _() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e.replace(/(\r?\n|\r)$/g, '')
  }
  function v(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1]
    ;(n.label = t), (n.identifier = ci(this.sliceSerialize(e)).toLowerCase())
  }
  function y() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.title = e
  }
  function b() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.url = e
  }
  function x(e) {
    let t = this.stack[this.stack.length - 1]
    t.depth ||= this.sliceSerialize(e).length
  }
  function S() {
    this.data.setextHeadingSlurpLineEnding = !0
  }
  function C(e) {
    let t = this.stack[this.stack.length - 1]
    t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = void 0
  }
  function T(e) {
    let t = this.stack[this.stack.length - 1].children,
      n = t[t.length - 1]
    ;(!n || n.type !== 'text') &&
      ((n = Ee()),
      (n.position = {
        start: Uo(e.start),
        end: void 0,
      }),
      t.push(n)),
      this.stack.push(n)
  }
  function E(e) {
    let t = this.stack.pop()
    ;(t.value += this.sliceSerialize(e)), (t.position.end = Uo(e.end))
  }
  function D(e) {
    let n = this.stack[this.stack.length - 1]
    if (this.data.atHardBreak) {
      let t = n.children[n.children.length - 1]
      ;(t.position.end = Uo(e.end)), (this.data.atHardBreak = void 0)
      return
    }
    !this.data.setextHeadingSlurpLineEnding &&
      t.canContainEols.includes(n.type) &&
      (T.call(this, e), E.call(this, e))
  }
  function O() {
    this.data.atHardBreak = !0
  }
  function ee() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e
  }
  function te() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e
  }
  function k() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.value = e
  }
  function A() {
    let e = this.stack[this.stack.length - 1]
    if (this.data.inReference) {
      let t = this.data.referenceType || 'shortcut'
      ;(e.type += 'Reference'),
        (e.referenceType = t),
        delete e.url,
        delete e.title
    } else delete e.identifier, delete e.label
    this.data.referenceType = void 0
  }
  function j() {
    let e = this.stack[this.stack.length - 1]
    if (this.data.inReference) {
      let t = this.data.referenceType || 'shortcut'
      ;(e.type += 'Reference'),
        (e.referenceType = t),
        delete e.url,
        delete e.title
    } else delete e.identifier, delete e.label
    this.data.referenceType = void 0
  }
  function ne(e) {
    let t = this.sliceSerialize(e),
      n = this.stack[this.stack.length - 2]
    ;(n.label = Ro(t)), (n.identifier = ci(t).toLowerCase())
  }
  function re() {
    let e = this.stack[this.stack.length - 1],
      t = this.resume(),
      n = this.stack[this.stack.length - 1]
    ;(this.data.inReference = !0),
      n.type === 'link' ? (n.children = e.children) : (n.alt = t)
  }
  function ie() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.url = e
  }
  function ae() {
    let e = this.resume(),
      t = this.stack[this.stack.length - 1]
    t.title = e
  }
  function oe() {
    this.data.inReference = void 0
  }
  function se() {
    this.data.referenceType = 'collapsed'
  }
  function ce(e) {
    let t = this.resume(),
      n = this.stack[this.stack.length - 1]
    ;(n.label = t),
      (n.identifier = ci(this.sliceSerialize(e)).toLowerCase()),
      (this.data.referenceType = 'full')
  }
  function le(e) {
    this.data.characterReferenceType = e.type
  }
  function M(e) {
    let t = this.sliceSerialize(e),
      n = this.data.characterReferenceType,
      r
    n
      ? ((r = si(t, n === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (r = ei(t))
    let i = this.stack[this.stack.length - 1]
    i.value += r
  }
  function ue(e) {
    let t = this.stack.pop()
    t.position.end = Uo(e.end)
  }
  function de(e) {
    E.call(this, e)
    let t = this.stack[this.stack.length - 1]
    t.url = this.sliceSerialize(e)
  }
  function fe(e) {
    E.call(this, e)
    let t = this.stack[this.stack.length - 1]
    t.url = 'mailto:' + this.sliceSerialize(e)
  }
  function pe() {
    return {
      type: 'blockquote',
      children: [],
    }
  }
  function me() {
    return {
      type: 'code',
      lang: null,
      meta: null,
      value: '',
    }
  }
  function he() {
    return {
      type: 'inlineCode',
      value: '',
    }
  }
  function ge() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: '',
    }
  }
  function _e() {
    return {
      type: 'emphasis',
      children: [],
    }
  }
  function ve() {
    return {
      type: 'heading',
      depth: 0,
      children: [],
    }
  }
  function ye() {
    return { type: 'break' }
  }
  function be() {
    return {
      type: 'html',
      value: '',
    }
  }
  function xe() {
    return {
      type: 'image',
      title: null,
      url: '',
      alt: null,
    }
  }
  function N() {
    return {
      type: 'link',
      title: null,
      url: '',
      children: [],
    }
  }
  function Se(e) {
    return {
      type: 'list',
      ordered: e.type === 'listOrdered',
      start: null,
      spread: e._spread,
      children: [],
    }
  }
  function Ce(e) {
    return {
      type: 'listItem',
      spread: e._spread,
      checked: null,
      children: [],
    }
  }
  function we() {
    return {
      type: 'paragraph',
      children: [],
    }
  }
  function Te() {
    return {
      type: 'strong',
      children: [],
    }
  }
  function Ee() {
    return {
      type: 'text',
      value: '',
    }
  }
  function De() {
    return { type: 'thematicBreak' }
  }
}
function Uo(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset,
  }
}
function Wo(e, t) {
  let n = -1
  for (; ++n < t.length; ) {
    let r = t[n]
    Array.isArray(r) ? Wo(e, r) : Go(e, r)
  }
}
function Go(e, t) {
  let n
  for (n in t)
    if (Bo.call(t, n))
      switch (n) {
        case 'canContainEols': {
          let r = t[n]
          r && e[n].push(...r)
          break
        }
        case 'transforms': {
          let r = t[n]
          r && e[n].push(...r)
          break
        }
        case 'enter':
        case 'exit': {
          let r = t[n]
          r && Object.assign(e[n], r)
          break
        }
      }
}
function Ko(e, t) {
  throw Error(
    e
      ? 'Cannot close `' +
          e.type +
          '` (' +
          mr({
            start: e.start,
            end: e.end,
          }) +
          '): a different token (`' +
          t.type +
          '`, ' +
          mr({
            start: t.start,
            end: t.end,
          }) +
          ') is open'
      : 'Cannot close document, a token (`' +
          t.type +
          '`, ' +
          mr({
            start: t.start,
            end: t.end,
          }) +
          ') is still open'
  )
}
//#endregion
//#region node_modules/remark-parse/lib/index.js
function qo(e) {
  let t = this
  t.parser = n
  function n(n) {
    return Vo(n, {
      ...t.data('settings'),
      ...e,
      extensions: t.data('micromarkExtensions') || [],
      mdastExtensions: t.data('fromMarkdownExtensions') || [],
    })
  }
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function Jo(e, t) {
  let n = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: e.wrap(e.all(t), !0),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/break.js
function Yo(e, t) {
  let n = {
    type: 'element',
    tagName: 'br',
    properties: {},
    children: [],
  }
  return (
    e.patch(t, n),
    [
      e.applyData(t, n),
      {
        type: 'text',
        value: '\n',
      },
    ]
  )
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/code.js
function Xo(e, t) {
  let n = t.value ? t.value + '\n' : '',
    r = {},
    i = t.lang ? t.lang.split(/\s+/) : []
  i.length > 0 && (r.className = ['language-' + i[0]])
  let a = {
    type: 'element',
    tagName: 'code',
    properties: r,
    children: [
      {
        type: 'text',
        value: n,
      },
    ],
  }
  return (
    t.meta && (a.data = { meta: t.meta }),
    e.patch(t, a),
    (a = e.applyData(t, a)),
    (a = {
      type: 'element',
      tagName: 'pre',
      properties: {},
      children: [a],
    }),
    e.patch(t, a),
    a
  )
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/delete.js
function Zo(e, t) {
  let n = {
    type: 'element',
    tagName: 'del',
    properties: {},
    children: e.all(t),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function Qo(e, t) {
  let n = {
    type: 'element',
    tagName: 'em',
    properties: {},
    children: e.all(t),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function $o(e, t) {
  let n =
      typeof e.options.clobberPrefix == 'string'
        ? e.options.clobberPrefix
        : 'user-content-',
    r = String(t.identifier).toUpperCase(),
    i = bi(r.toLowerCase()),
    a = e.footnoteOrder.indexOf(r),
    o,
    s = e.footnoteCounts.get(r)
  s === void 0
    ? ((s = 0), e.footnoteOrder.push(r), (o = e.footnoteOrder.length))
    : (o = a + 1),
    (s += 1),
    e.footnoteCounts.set(r, s)
  let c = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + n + 'fn-' + i,
      id: n + 'fnref-' + i + (s > 1 ? '-' + s : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [
      {
        type: 'text',
        value: String(o),
      },
    ],
  }
  e.patch(t, c)
  let l = {
    type: 'element',
    tagName: 'sup',
    properties: {},
    children: [c],
  }
  return e.patch(t, l), e.applyData(t, l)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/heading.js
function es(e, t) {
  let n = {
    type: 'element',
    tagName: 'h' + t.depth,
    properties: {},
    children: e.all(t),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/html.js
function ts(e, t) {
  if (e.options.allowDangerousHtml) {
    let n = {
      type: 'raw',
      value: t.value,
    }
    return e.patch(t, n), e.applyData(t, n)
  }
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/revert.js
function ns(e, t) {
  let n = t.referenceType,
    r = ']'
  if (
    (n === 'collapsed'
      ? (r += '[]')
      : n === 'full' && (r += '[' + (t.label || t.identifier) + ']'),
    t.type === 'imageReference')
  )
    return [
      {
        type: 'text',
        value: '![' + t.alt + r,
      },
    ]
  let i = e.all(t),
    a = i[0]
  a && a.type === 'text'
    ? (a.value = '[' + a.value)
    : i.unshift({
        type: 'text',
        value: '[',
      })
  let o = i[i.length - 1]
  return (
    o && o.type === 'text'
      ? (o.value += r)
      : i.push({
          type: 'text',
          value: r,
        }),
    i
  )
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function rs(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n)
  if (!r) return ns(e, t)
  let i = {
    src: bi(r.url || ''),
    alt: t.alt,
  }
  r.title !== null && r.title !== void 0 && (i.title = r.title)
  let a = {
    type: 'element',
    tagName: 'img',
    properties: i,
    children: [],
  }
  return e.patch(t, a), e.applyData(t, a)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/image.js
function is(e, t) {
  let n = { src: bi(t.url) }
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt),
    t.title !== null && t.title !== void 0 && (n.title = t.title)
  let r = {
    type: 'element',
    tagName: 'img',
    properties: n,
    children: [],
  }
  return e.patch(t, r), e.applyData(t, r)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function as(e, t) {
  let n = {
    type: 'text',
    value: t.value.replace(/\r?\n|\r/g, ' '),
  }
  e.patch(t, n)
  let r = {
    type: 'element',
    tagName: 'code',
    properties: {},
    children: [n],
  }
  return e.patch(t, r), e.applyData(t, r)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function os(e, t) {
  let n = String(t.identifier).toUpperCase(),
    r = e.definitionById.get(n)
  if (!r) return ns(e, t)
  let i = { href: bi(r.url || '') }
  r.title !== null && r.title !== void 0 && (i.title = r.title)
  let a = {
    type: 'element',
    tagName: 'a',
    properties: i,
    children: e.all(t),
  }
  return e.patch(t, a), e.applyData(t, a)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/link.js
function ss(e, t) {
  let n = { href: bi(t.url) }
  t.title !== null && t.title !== void 0 && (n.title = t.title)
  let r = {
    type: 'element',
    tagName: 'a',
    properties: n,
    children: e.all(t),
  }
  return e.patch(t, r), e.applyData(t, r)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function cs(e, t, n) {
  let r = e.all(t),
    i = n ? ls(n) : us(t),
    a = {},
    o = []
  if (typeof t.checked == 'boolean') {
    let e = r[0],
      n
    e && e.type === 'element' && e.tagName === 'p'
      ? (n = e)
      : ((n = {
          type: 'element',
          tagName: 'p',
          properties: {},
          children: [],
        }),
        r.unshift(n)),
      n.children.length > 0 &&
        n.children.unshift({
          type: 'text',
          value: ' ',
        }),
      n.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: {
          type: 'checkbox',
          checked: t.checked,
          disabled: !0,
        },
        children: [],
      }),
      (a.className = ['task-list-item'])
  }
  let s = -1
  for (; ++s < r.length; ) {
    let e = r[s]
    ;(i || s !== 0 || e.type !== 'element' || e.tagName !== 'p') &&
      o.push({
        type: 'text',
        value: '\n',
      }),
      e.type === 'element' && e.tagName === 'p' && !i
        ? o.push(...e.children)
        : o.push(e)
  }
  let c = r[r.length - 1]
  c &&
    (i || c.type !== 'element' || c.tagName !== 'p') &&
    o.push({
      type: 'text',
      value: '\n',
    })
  let l = {
    type: 'element',
    tagName: 'li',
    properties: a,
    children: o,
  }
  return e.patch(t, l), e.applyData(t, l)
}
function ls(e) {
  let t = !1
  if (e.type === 'list') {
    t = e.spread || !1
    let n = e.children,
      r = -1
    for (; !t && ++r < n.length; ) t = us(n[r])
  }
  return t
}
function us(e) {
  return e.spread ?? e.children.length > 1
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/list.js
function ds(e, t) {
  let n = {},
    r = e.all(t),
    i = -1
  for (
    typeof t.start == 'number' && t.start !== 1 && (n.start = t.start);
    ++i < r.length;

  ) {
    let e = r[i]
    if (
      e.type === 'element' &&
      e.tagName === 'li' &&
      e.properties &&
      Array.isArray(e.properties.className) &&
      e.properties.className.includes('task-list-item')
    ) {
      n.className = ['contains-task-list']
      break
    }
  }
  let a = {
    type: 'element',
    tagName: t.ordered ? 'ol' : 'ul',
    properties: n,
    children: e.wrap(r, !0),
  }
  return e.patch(t, a), e.applyData(t, a)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function fs(e, t) {
  let n = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: e.all(t),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/root.js
function ps(e, t) {
  let n = {
    type: 'root',
    children: e.wrap(e.all(t)),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/strong.js
function ms(e, t) {
  let n = {
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: e.all(t),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table.js
function hs(e, t) {
  let n = e.all(t),
    r = n.shift(),
    i = []
  if (r) {
    let n = {
      type: 'element',
      tagName: 'thead',
      properties: {},
      children: e.wrap([r], !0),
    }
    e.patch(t.children[0], n), i.push(n)
  }
  if (n.length > 0) {
    let r = {
        type: 'element',
        tagName: 'tbody',
        properties: {},
        children: e.wrap(n, !0),
      },
      a = dr(t.children[1]),
      o = ur(t.children[t.children.length - 1])
    a &&
      o &&
      (r.position = {
        start: a,
        end: o,
      }),
      i.push(r)
  }
  let a = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: e.wrap(i, !0),
  }
  return e.patch(t, a), e.applyData(t, a)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function gs(e, t, n) {
  let r = n ? n.children : void 0,
    i = (r ? r.indexOf(t) : 1) === 0 ? 'th' : 'td',
    a = n && n.type === 'table' ? n.align : void 0,
    o = a ? a.length : t.children.length,
    s = -1,
    c = []
  for (; ++s < o; ) {
    let n = t.children[s],
      r = {},
      o = a ? a[s] : void 0
    o && (r.align = o)
    let l = {
      type: 'element',
      tagName: i,
      properties: r,
      children: [],
    }
    n && ((l.children = e.all(n)), e.patch(n, l), (l = e.applyData(n, l))),
      c.push(l)
  }
  let l = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: e.wrap(c, !0),
  }
  return e.patch(t, l), e.applyData(t, l)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function _s(e, t) {
  let n = {
    type: 'element',
    tagName: 'td',
    properties: {},
    children: e.all(t),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/trim-lines/index.js
var vs = 9,
  ys = 32
function bs(e) {
  let t = String(e),
    n = /\r?\n|\r/g,
    r = n.exec(t),
    i = 0,
    a = []
  for (; r; )
    a.push(xs(t.slice(i, r.index), i > 0, !0), r[0]),
      (i = r.index + r[0].length),
      (r = n.exec(t))
  return a.push(xs(t.slice(i), i > 0, !1)), a.join('')
}
function xs(e, t, n) {
  let r = 0,
    i = e.length
  if (t) {
    let t = e.codePointAt(r)
    for (; t === vs || t === ys; ) r++, (t = e.codePointAt(r))
  }
  if (n) {
    let t = e.codePointAt(i - 1)
    for (; t === vs || t === ys; ) i--, (t = e.codePointAt(i - 1))
  }
  return i > r ? e.slice(r, i) : ''
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/text.js
function Ss(e, t) {
  let n = {
    type: 'text',
    value: bs(String(t.value)),
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Cs(e, t) {
  let n = {
    type: 'element',
    tagName: 'hr',
    properties: {},
    children: [],
  }
  return e.patch(t, n), e.applyData(t, n)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/handlers/index.js
var ws = {
  blockquote: Jo,
  break: Yo,
  code: Xo,
  delete: Zo,
  emphasis: Qo,
  footnoteReference: $o,
  heading: es,
  html: ts,
  imageReference: rs,
  image: is,
  inlineCode: as,
  linkReference: os,
  link: ss,
  listItem: cs,
  list: ds,
  paragraph: fs,
  root: ps,
  strong: ms,
  table: hs,
  tableCell: _s,
  tableRow: gs,
  text: Ss,
  thematicBreak: Cs,
  toml: Ts,
  yaml: Ts,
  definition: Ts,
  footnoteDefinition: Ts,
}
function Ts() {}
//#endregion
//#region node_modules/@ungap/structured-clone/esm/deserialize.js
var Es = typeof self == 'object' ? self : globalThis,
  Ds = (e, t) => {
    let n = (t, n) => (e.set(n, t), t),
      r = i => {
        if (e.has(i)) return e.get(i)
        let [a, o] = t[i]
        switch (a) {
          case 0:
          case -1:
            return n(o, i)
          case 1: {
            let e = n([], i)
            for (let t of o) e.push(r(t))
            return e
          }
          case 2: {
            let e = n({}, i)
            for (let [t, n] of o) e[r(t)] = r(n)
            return e
          }
          case 3:
            return n(new Date(o), i)
          case 4: {
            let { source: e, flags: t } = o
            return n(new RegExp(e, t), i)
          }
          case 5: {
            let e = n(/* @__PURE__ */ new Map(), i)
            for (let [t, n] of o) e.set(r(t), r(n))
            return e
          }
          case 6: {
            let e = n(/* @__PURE__ */ new Set(), i)
            for (let t of o) e.add(r(t))
            return e
          }
          case 7: {
            let { name: e, message: t } = o
            return n(new Es[e](t), i)
          }
          case 8:
            return n(BigInt(o), i)
          case 'BigInt':
            return n(Object(BigInt(o)), i)
          case 'ArrayBuffer':
            return n(new Uint8Array(o).buffer, o)
          case 'DataView': {
            let { buffer: e } = new Uint8Array(o)
            return n(new DataView(e), o)
          }
        }
        return n(new Es[a](o), i)
      }
    return r
  },
  Os = e => Ds(/* @__PURE__ */ new Map(), e)(0),
  ks = '',
  { toString: As } = {},
  { keys: js } = Object,
  Ms = e => {
    let t = typeof e
    if (t !== 'object' || !e) return [0, t]
    let n = As.call(e).slice(8, -1)
    switch (n) {
      case 'Array':
        return [1, ks]
      case 'Object':
        return [2, ks]
      case 'Date':
        return [3, ks]
      case 'RegExp':
        return [4, ks]
      case 'Map':
        return [5, ks]
      case 'Set':
        return [6, ks]
      case 'DataView':
        return [1, n]
    }
    return n.includes('Array') ? [1, n] : n.includes('Error') ? [7, n] : [2, n]
  },
  Ns = ([e, t]) => e === 0 && (t === 'function' || t === 'symbol'),
  Ps = (e, t, n, r) => {
    let i = (e, t) => {
        let i = r.push(e) - 1
        return n.set(t, i), i
      },
      a = r => {
        if (n.has(r)) return n.get(r)
        let [o, s] = Ms(r)
        switch (o) {
          case 0: {
            let t = r
            switch (s) {
              case 'bigint':
                ;(o = 8), (t = r.toString())
                break
              case 'function':
              case 'symbol':
                if (e) throw TypeError('unable to serialize ' + s)
                t = null
                break
              case 'undefined':
                return i([-1], r)
            }
            return i([o, t], r)
          }
          case 1: {
            if (s) {
              let e = r
              return (
                s === 'DataView'
                  ? (e = new Uint8Array(r.buffer))
                  : s === 'ArrayBuffer' && (e = new Uint8Array(r)),
                i([s, [...e]], r)
              )
            }
            let e = [],
              t = i([o, e], r)
            for (let t of r) e.push(a(t))
            return t
          }
          case 2: {
            if (s)
              switch (s) {
                case 'BigInt':
                  return i([s, r.toString()], r)
                case 'Boolean':
                case 'Number':
                case 'String':
                  return i([s, r.valueOf()], r)
              }
            if (t && 'toJSON' in r) return a(r.toJSON())
            let n = [],
              c = i([o, n], r)
            for (let t of js(r)) (e || !Ns(Ms(r[t]))) && n.push([a(t), a(r[t])])
            return c
          }
          case 3:
            return i([o, r.toISOString()], r)
          case 4: {
            let { source: e, flags: t } = r
            return i(
              [
                o,
                {
                  source: e,
                  flags: t,
                },
              ],
              r
            )
          }
          case 5: {
            let t = [],
              n = i([o, t], r)
            for (let [n, i] of r)
              (e || !(Ns(Ms(n)) || Ns(Ms(i)))) && t.push([a(n), a(i)])
            return n
          }
          case 6: {
            let t = [],
              n = i([o, t], r)
            for (let n of r) (e || !Ns(Ms(n))) && t.push(a(n))
            return n
          }
        }
        let { message: c } = r
        return i(
          [
            o,
            {
              name: s,
              message: c,
            },
          ],
          r
        )
      }
    return a
  },
  Fs = (e, { json: t, lossy: n } = {}) => {
    let r = []
    return Ps(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r
  },
  Is =
    typeof structuredClone == 'function'
      ? (e, t) =>
          t && ('json' in t || 'lossy' in t) ? Os(Fs(e, t)) : structuredClone(e)
      : (e, t) => Os(Fs(e, t))
//#endregion
//#region node_modules/mdast-util-to-hast/lib/footer.js
function Ls(e, t) {
  let n = [
    {
      type: 'text',
      value: '↩',
    },
  ]
  return (
    t > 1 &&
      n.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [
          {
            type: 'text',
            value: String(t),
          },
        ],
      }),
    n
  )
}
function Rs(e, t) {
  return 'Back to reference ' + (e + 1) + (t > 1 ? '-' + t : '')
}
function zs(e) {
  let t =
      typeof e.options.clobberPrefix == 'string'
        ? e.options.clobberPrefix
        : 'user-content-',
    n = e.options.footnoteBackContent || Ls,
    r = e.options.footnoteBackLabel || Rs,
    i = e.options.footnoteLabel || 'Footnotes',
    a = e.options.footnoteLabelTagName || 'h2',
    o = e.options.footnoteLabelProperties || { className: ['sr-only'] },
    s = [],
    c = -1
  for (; ++c < e.footnoteOrder.length; ) {
    let i = e.footnoteById.get(e.footnoteOrder[c])
    if (!i) continue
    let a = e.all(i),
      o = String(i.identifier).toUpperCase(),
      l = bi(o.toLowerCase()),
      u = 0,
      d = [],
      f = e.footnoteCounts.get(o)
    for (; f !== void 0 && ++u <= f; ) {
      d.length > 0 &&
        d.push({
          type: 'text',
          value: ' ',
        })
      let e = typeof n == 'string' ? n : n(c, u)
      typeof e == 'string' &&
        (e = {
          type: 'text',
          value: e,
        }),
        d.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + t + 'fnref-' + l + (u > 1 ? '-' + u : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof r == 'string' ? r : r(c, u),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(e) ? e : [e],
        })
    }
    let p = a[a.length - 1]
    if (p && p.type === 'element' && p.tagName === 'p') {
      let e = p.children[p.children.length - 1]
      e && e.type === 'text'
        ? (e.value += ' ')
        : p.children.push({
            type: 'text',
            value: ' ',
          }),
        p.children.push(...d)
    } else a.push(...d)
    let m = {
      type: 'element',
      tagName: 'li',
      properties: { id: t + 'fn-' + l },
      children: e.wrap(a, !0),
    }
    e.patch(i, m), s.push(m)
  }
  if (s.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: {
        dataFootnotes: !0,
        className: ['footnotes'],
      },
      children: [
        {
          type: 'element',
          tagName: a,
          properties: {
            ...Is(o),
            id: 'footnote-label',
          },
          children: [
            {
              type: 'text',
              value: i,
            },
          ],
        },
        {
          type: 'text',
          value: '\n',
        },
        {
          type: 'element',
          tagName: 'ol',
          properties: {},
          children: e.wrap(s, !0),
        },
        {
          type: 'text',
          value: '\n',
        },
      ],
    }
}
//#endregion
//#region node_modules/unist-util-is/lib/index.js
var Bs = function (e) {
  if (e == null) return Gs
  if (typeof e == 'function') return Ws(e)
  if (typeof e == 'object') return Array.isArray(e) ? Vs(e) : Hs(e)
  if (typeof e == 'string') return Us(e)
  throw Error('Expected function, string, or object as test')
}
function Vs(e) {
  let t = [],
    n = -1
  for (; ++n < e.length; ) t[n] = Bs(e[n])
  return Ws(r)
  function r(...e) {
    let n = -1
    for (; ++n < t.length; ) if (t[n].apply(this, e)) return !0
    return !1
  }
}
function Hs(e) {
  let t = e
  return Ws(n)
  function n(n) {
    let r = n,
      i
    for (i in e) if (r[i] !== t[i]) return !1
    return !0
  }
}
function Us(e) {
  return Ws(t)
  function t(t) {
    return t && t.type === e
  }
}
function Ws(e) {
  return t
  function t(t, n, r) {
    return !!(
      Ks(t) && e.call(this, t, typeof n == 'number' ? n : void 0, r || void 0)
    )
  }
}
function Gs() {
  return !0
}
function Ks(e) {
  return typeof e == 'object' && !!e && 'type' in e
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/color.js
function qs(e) {
  return e
}
//#endregion
//#region node_modules/unist-util-visit-parents/lib/index.js
var Js = []
function Ys(e, t, n, r) {
  let i
  typeof t == 'function' && typeof n != 'function'
    ? ((r = n), (n = t))
    : (i = t)
  let a = Bs(i),
    o = r ? -1 : 1
  s(e, void 0, [])()
  function s(e, i, c) {
    let l = e && typeof e == 'object' ? e : {}
    if (typeof l.type == 'string') {
      let t =
        typeof l.tagName == 'string'
          ? l.tagName
          : typeof l.name == 'string'
          ? l.name
          : void 0
      Object.defineProperty(u, 'name', {
        value: 'node (' + qs(e.type + (t ? '<' + t + '>' : '')) + ')',
      })
    }
    return u
    function u() {
      let l = Js,
        u,
        d,
        f
      if (
        (!t || a(e, i, c[c.length - 1] || void 0)) &&
        ((l = Xs(n(e, c))), l[0] === !1)
      )
        return l
      if ('children' in e && e.children) {
        let t = e
        if (t.children && l[0] !== 'skip')
          for (
            d = (r ? t.children.length : -1) + o, f = c.concat(t);
            d > -1 && d < t.children.length;

          ) {
            let e = t.children[d]
            if (((u = s(e, d, f)()), u[0] === !1)) return u
            d = typeof u[1] == 'number' ? u[1] : d + o
          }
      }
      return l
    }
  }
}
function Xs(e) {
  return Array.isArray(e)
    ? e
    : typeof e == 'number'
    ? [!0, e]
    : e == null
    ? Js
    : [e]
}
//#endregion
//#region node_modules/unist-util-visit/lib/index.js
function Zs(e, t, n, r) {
  let i, a, o
  typeof t == 'function' && typeof n != 'function'
    ? ((a = void 0), (o = t), (i = n))
    : ((a = t), (o = n), (i = r)),
    Ys(e, a, s, i)
  function s(e, t) {
    let n = t[t.length - 1],
      r = n ? n.children.indexOf(e) : void 0
    return o(e, r, n)
  }
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/state.js
var Qs = {}.hasOwnProperty,
  $s = {}
function ec(e, t) {
  let n = t || $s,
    r = /* @__PURE__ */ new Map(),
    i = /* @__PURE__ */ new Map(),
    a = {
      all: s,
      applyData: nc,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: /* @__PURE__ */ new Map(),
      footnoteOrder: [],
      handlers: {
        ...ws,
        ...n.handlers,
      },
      one: o,
      options: n,
      patch: tc,
      wrap: ic,
    }
  return (
    Zs(e, function (e) {
      if (e.type === 'definition' || e.type === 'footnoteDefinition') {
        let t = e.type === 'definition' ? r : i,
          n = String(e.identifier).toUpperCase()
        t.has(n) || t.set(n, e)
      }
    }),
    a
  )
  function o(e, t) {
    let n = e.type,
      r = a.handlers[n]
    if (Qs.call(a.handlers, n) && r) return r(a, e, t)
    if (a.options.passThrough && a.options.passThrough.includes(n)) {
      if ('children' in e) {
        let { children: t, ...n } = e,
          r = Is(n)
        return (r.children = a.all(e)), r
      }
      return Is(e)
    }
    return (a.options.unknownHandler || rc)(a, e, t)
  }
  function s(e) {
    let t = []
    if ('children' in e) {
      let n = e.children,
        r = -1
      for (; ++r < n.length; ) {
        let i = a.one(n[r], e)
        if (i) {
          if (
            r &&
            n[r - 1].type === 'break' &&
            (!Array.isArray(i) && i.type === 'text' && (i.value = ac(i.value)),
            !Array.isArray(i) && i.type === 'element')
          ) {
            let e = i.children[0]
            e && e.type === 'text' && (e.value = ac(e.value))
          }
          Array.isArray(i) ? t.push(...i) : t.push(i)
        }
      }
    }
    return t
  }
}
function tc(e, t) {
  e.position && (t.position = pr(e))
}
function nc(e, t) {
  let n = t
  if (e && e.data) {
    let t = e.data.hName,
      r = e.data.hChildren,
      i = e.data.hProperties
    typeof t == 'string' &&
      (n.type === 'element'
        ? (n.tagName = t)
        : (n = {
            type: 'element',
            tagName: t,
            properties: {},
            children: 'children' in n ? n.children : [n],
          })),
      n.type === 'element' && i && Object.assign(n.properties, Is(i)),
      'children' in n && n.children && r != null && (n.children = r)
  }
  return n
}
function rc(e, t) {
  let n = t.data || {},
    r =
      'value' in t && !(Qs.call(n, 'hProperties') || Qs.call(n, 'hChildren'))
        ? {
            type: 'text',
            value: t.value,
          }
        : {
            type: 'element',
            tagName: 'div',
            properties: {},
            children: e.all(t),
          }
  return e.patch(t, r), e.applyData(t, r)
}
function ic(e, t) {
  let n = [],
    r = -1
  for (
    t &&
    n.push({
      type: 'text',
      value: '\n',
    });
    ++r < e.length;

  )
    r &&
      n.push({
        type: 'text',
        value: '\n',
      }),
      n.push(e[r])
  return (
    t &&
      e.length > 0 &&
      n.push({
        type: 'text',
        value: '\n',
      }),
    n
  )
}
function ac(e) {
  let t = 0,
    n = e.charCodeAt(t)
  for (; n === 9 || n === 32; ) t++, (n = e.charCodeAt(t))
  return e.slice(t)
}
//#endregion
//#region node_modules/mdast-util-to-hast/lib/index.js
function oc(e, t) {
  let n = ec(e, t),
    r = n.one(e, void 0),
    i = zs(n),
    a = Array.isArray(r)
      ? {
          type: 'root',
          children: r,
        }
      : r || {
          type: 'root',
          children: [],
        }
  return (
    i &&
      ('children' in a,
      a.children.push(
        {
          type: 'text',
          value: '\n',
        },
        i
      )),
    a
  )
}
//#endregion
//#region node_modules/remark-rehype/lib/index.js
function sc(e, t) {
  return e && 'run' in e
    ? async function (n, r) {
        let i = oc(n, {
          file: r,
          ...t,
        })
        await e.run(i, r)
      }
    : function (n, r) {
        return oc(n, {
          file: r,
          ...(e || t),
        })
      }
}
//#endregion
//#region node_modules/bail/index.js
function cc(e) {
  if (e) throw e
}
//#endregion
//#region node_modules/extend/index.js
var lc = /* @__PURE__ */ N((e, t) => {
  var n = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString,
    i = Object.defineProperty,
    a = Object.getOwnPropertyDescriptor,
    o = function (e) {
      return typeof Array.isArray == 'function'
        ? Array.isArray(e)
        : r.call(e) === '[object Array]'
    },
    s = function (e) {
      if (!e || r.call(e) !== '[object Object]') return !1
      var t = n.call(e, 'constructor'),
        i =
          e.constructor &&
          e.constructor.prototype &&
          n.call(e.constructor.prototype, 'isPrototypeOf')
      if (e.constructor && !t && !i) return !1
      for (var a in e);
      return a === void 0 || n.call(e, a)
    },
    c = function (e, t) {
      i && t.name === '__proto__'
        ? i(e, t.name, {
            enumerable: !0,
            configurable: !0,
            value: t.newValue,
            writable: !0,
          })
        : (e[t.name] = t.newValue)
    },
    l = function (e, t) {
      if (t === '__proto__') {
        if (!n.call(e, t)) return
        if (a) return a(e, t).value
      }
      return e[t]
    }
  t.exports = function e() {
    var t,
      n,
      r,
      i,
      a,
      u,
      d = arguments[0],
      f = 1,
      p = arguments.length,
      m = !1
    for (
      typeof d == 'boolean' && ((m = d), (d = arguments[1] || {}), (f = 2)),
        (d == null || (typeof d != 'object' && typeof d != 'function')) &&
          (d = {});
      f < p;
      ++f
    )
      if (((t = arguments[f]), t != null))
        for (n in t)
          (r = l(d, n)),
            (i = l(t, n)),
            d !== i &&
              (m && i && (s(i) || (a = o(i)))
                ? (a
                    ? ((a = !1), (u = r && o(r) ? r : []))
                    : (u = r && s(r) ? r : {}),
                  c(d, {
                    name: n,
                    newValue: e(m, u, i),
                  }))
                : i !== void 0 &&
                  c(d, {
                    name: n,
                    newValue: i,
                  }))
    return d
  }
})
//#endregion
//#region node_modules/is-plain-obj/index.js
function uc(e) {
  if (typeof e != 'object' || !e) return !1
  let t = Object.getPrototypeOf(e)
  return (
    (t === null ||
      t === Object.prototype ||
      Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  )
}
//#endregion
//#region node_modules/trough/lib/index.js
function dc() {
  let e = [],
    t = {
      run: n,
      use: r,
    }
  return t
  function n(...t) {
    let n = -1,
      r = t.pop()
    if (typeof r != 'function')
      throw TypeError('Expected function as last argument, not ' + r)
    i(null, ...t)
    function i(a, ...o) {
      let s = e[++n],
        c = -1
      if (a) {
        r(a)
        return
      }
      for (; ++c < t.length; )
        (o[c] === null || o[c] === void 0) && (o[c] = t[c])
      ;(t = o), s ? fc(s, i)(...o) : r(null, ...o)
    }
  }
  function r(n) {
    if (typeof n != 'function')
      throw TypeError('Expected `middelware` to be a function, not ' + n)
    return e.push(n), t
  }
}
function fc(e, t) {
  let n
  return r
  function r(...t) {
    let r = e.length > t.length,
      o
    r && t.push(i)
    try {
      o = e.apply(this, t)
    } catch (e) {
      let t = e
      if (r && n) throw t
      return i(t)
    }
    r ||
      (o && o.then && typeof o.then == 'function'
        ? o.then(a, i)
        : o instanceof Error
        ? i(o)
        : a(o))
  }
  function i(e, ...r) {
    n || ((n = !0), t(e, ...r))
  }
  function a(e) {
    i(null, e)
  }
}
//#endregion
//#region node_modules/vfile/lib/minpath.browser.js
var pc = {
  basename: mc,
  dirname: hc,
  extname: gc,
  join: _c,
  sep: '/',
}
function mc(e, t) {
  if (t !== void 0 && typeof t != 'string')
    throw TypeError('"ext" argument must be a string')
  bc(e)
  let n = 0,
    r = -1,
    i = e.length,
    a
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1
          break
        }
      } else r < 0 && ((a = !0), (r = i + 1))
    return r < 0 ? '' : e.slice(n, r)
  }
  if (t === e) return ''
  let o = -1,
    s = t.length - 1
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1
        break
      }
    } else
      o < 0 && ((a = !0), (o = i + 1)),
        s > -1 &&
          (e.codePointAt(i) === t.codePointAt(s--)
            ? s < 0 && (r = i)
            : ((s = -1), (r = o)))
  return n === r ? (r = o) : r < 0 && (r = e.length), e.slice(n, r)
}
function hc(e) {
  if ((bc(e), e.length === 0)) return '.'
  let t = -1,
    n = e.length,
    r
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n
        break
      }
    } else r ||= !0
  return t < 0
    ? e.codePointAt(0) === 47
      ? '/'
      : '.'
    : t === 1 && e.codePointAt(0) === 47
    ? '//'
    : e.slice(0, t)
}
function gc(e) {
  bc(e)
  let t = e.length,
    n = -1,
    r = 0,
    i = -1,
    a = 0,
    o
  for (; t--; ) {
    let s = e.codePointAt(t)
    if (s === 47) {
      if (o) {
        r = t + 1
        break
      }
      continue
    }
    n < 0 && ((o = !0), (n = t + 1)),
      s === 46 ? (i < 0 ? (i = t) : a !== 1 && (a = 1)) : i > -1 && (a = -1)
  }
  return i < 0 || n < 0 || a === 0 || (a === 1 && i === n - 1 && i === r + 1)
    ? ''
    : e.slice(i, n)
}
function _c(...e) {
  let t = -1,
    n
  for (; ++t < e.length; )
    bc(e[t]), e[t] && (n = n === void 0 ? e[t] : n + '/' + e[t])
  return n === void 0 ? '.' : vc(n)
}
function vc(e) {
  bc(e)
  let t = e.codePointAt(0) === 47,
    n = yc(e, !t)
  return (
    n.length === 0 && !t && (n = '.'),
    n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += '/'),
    t ? '/' + n : n
  )
}
function yc(e, t) {
  let n = '',
    r = 0,
    i = -1,
    a = 0,
    o = -1,
    s,
    c
  for (; ++o <= e.length; ) {
    if (o < e.length) s = e.codePointAt(o)
    else if (s === 47) break
    else s = 47
    if (s === 47) {
      if (!(i === o - 1 || a === 1))
        if (i !== o - 1 && a === 2) {
          if (
            n.length < 2 ||
            r !== 2 ||
            n.codePointAt(n.length - 1) !== 46 ||
            n.codePointAt(n.length - 2) !== 46
          ) {
            if (n.length > 2) {
              if (((c = n.lastIndexOf('/')), c !== n.length - 1)) {
                c < 0
                  ? ((n = ''), (r = 0))
                  : ((n = n.slice(0, c)),
                    (r = n.length - 1 - n.lastIndexOf('/'))),
                  (i = o),
                  (a = 0)
                continue
              }
            } else if (n.length > 0) {
              ;(n = ''), (r = 0), (i = o), (a = 0)
              continue
            }
          }
          t && ((n = n.length > 0 ? n + '/..' : '..'), (r = 2))
        } else
          n.length > 0
            ? (n += '/' + e.slice(i + 1, o))
            : (n = e.slice(i + 1, o)),
            (r = o - i - 1)
      ;(i = o), (a = 0)
    } else s === 46 && a > -1 ? a++ : (a = -1)
  }
  return n
}
function bc(e) {
  if (typeof e != 'string')
    throw TypeError('Path must be a string. Received ' + JSON.stringify(e))
}
//#endregion
//#region node_modules/vfile/lib/minproc.browser.js
var xc = { cwd: Sc }
function Sc() {
  return '/'
}
//#endregion
//#region node_modules/vfile/lib/minurl.shared.js
function Cc(e) {
  return !!(
    typeof e == 'object' &&
    e &&
    'href' in e &&
    e.href &&
    'protocol' in e &&
    e.protocol &&
    e.auth === void 0
  )
}
//#endregion
//#region node_modules/vfile/lib/minurl.browser.js
function wc(e) {
  if (typeof e == 'string') e = new URL(e)
  else if (!Cc(e)) {
    let t = /* @__PURE__ */ TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        '`'
    )
    throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t)
  }
  if (e.protocol !== 'file:') {
    let e = /* @__PURE__ */ TypeError('The URL must be of scheme file')
    throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e)
  }
  return Tc(e)
}
function Tc(e) {
  if (e.hostname !== '') {
    let e = /* @__PURE__ */ TypeError(
      'File URL host must be "localhost" or empty on darwin'
    )
    throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e)
  }
  let t = e.pathname,
    n = -1
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      let e = t.codePointAt(n + 2)
      if (e === 70 || e === 102) {
        let e = /* @__PURE__ */ TypeError(
          'File URL path must not include encoded / characters'
        )
        throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e)
      }
    }
  return decodeURIComponent(t)
}
//#endregion
//#region node_modules/vfile/lib/index.js
var Ec = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'],
  Dc = class {
    constructor(e) {
      let t
      ;(t = e
        ? Cc(e)
          ? { path: e }
          : typeof e == 'string' || jc(e)
          ? { value: e }
          : e
        : {}),
        (this.cwd = 'cwd' in t ? '' : xc.cwd()),
        (this.data = {}),
        (this.history = []),
        (this.messages = []),
        this.value,
        this.map,
        this.result,
        this.stored
      let n = -1
      for (; ++n < Ec.length; ) {
        let e = Ec[n]
        e in t &&
          t[e] !== void 0 &&
          t[e] !== null &&
          (this[e] = e === 'history' ? [...t[e]] : t[e])
      }
      let r
      for (r in t) Ec.includes(r) || (this[r] = t[r])
    }
    get basename() {
      return typeof this.path == 'string' ? pc.basename(this.path) : void 0
    }
    set basename(e) {
      kc(e, 'basename'),
        Oc(e, 'basename'),
        (this.path = pc.join(this.dirname || '', e))
    }
    get dirname() {
      return typeof this.path == 'string' ? pc.dirname(this.path) : void 0
    }
    set dirname(e) {
      Ac(this.basename, 'dirname'),
        (this.path = pc.join(e || '', this.basename))
    }
    get extname() {
      return typeof this.path == 'string' ? pc.extname(this.path) : void 0
    }
    set extname(e) {
      if ((Oc(e, 'extname'), Ac(this.dirname, 'extname'), e)) {
        if (e.codePointAt(0) !== 46)
          throw Error('`extname` must start with `.`')
        if (e.includes('.', 1))
          throw Error('`extname` cannot contain multiple dots')
      }
      this.path = pc.join(this.dirname, this.stem + (e || ''))
    }
    get path() {
      return this.history[this.history.length - 1]
    }
    set path(e) {
      Cc(e) && (e = wc(e)),
        kc(e, 'path'),
        this.path !== e && this.history.push(e)
    }
    get stem() {
      return typeof this.path == 'string'
        ? pc.basename(this.path, this.extname)
        : void 0
    }
    set stem(e) {
      kc(e, 'stem'),
        Oc(e, 'stem'),
        (this.path = pc.join(this.dirname || '', e + (this.extname || '')))
    }
    fail(e, t, n) {
      let r = this.message(e, t, n)
      throw ((r.fatal = !0), r)
    }
    info(e, t, n) {
      let r = this.message(e, t, n)
      return (r.fatal = void 0), r
    }
    message(e, t, n) {
      let r = new vr(e, t, n)
      return (
        this.path &&
          ((r.name = this.path + ':' + r.name), (r.file = this.path)),
        (r.fatal = !1),
        this.messages.push(r),
        r
      )
    }
    toString(e) {
      return this.value === void 0
        ? ''
        : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(e || void 0).decode(this.value)
    }
  }
function Oc(e, t) {
  if (e && e.includes(pc.sep))
    throw Error('`' + t + '` cannot be a path: did not expect `' + pc.sep + '`')
}
function kc(e, t) {
  if (!e) throw Error('`' + t + '` cannot be empty')
}
function Ac(e, t) {
  if (!e) throw Error('Setting `' + t + '` requires `path` to be set too')
}
function jc(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e)
}
//#endregion
//#region node_modules/unified/lib/callable-instance.js
var Mc = function (e) {
    let t = this.constructor.prototype,
      n = t[e],
      r = function () {
        return n.apply(r, arguments)
      }
    return Object.setPrototypeOf(r, t), r
  },
  Nc = /* @__PURE__ */ we(lc(), 1),
  Pc = {}.hasOwnProperty,
  Fc = new (class e extends Mc {
    constructor() {
      super('copy'),
        (this.Compiler = void 0),
        (this.Parser = void 0),
        (this.attachers = []),
        (this.compiler = void 0),
        (this.freezeIndex = -1),
        (this.frozen = void 0),
        (this.namespace = {}),
        (this.parser = void 0),
        (this.transformers = dc())
    }
    copy() {
      let t = new e(),
        n = -1
      for (; ++n < this.attachers.length; ) {
        let e = this.attachers[n]
        t.use(...e)
      }
      return t.data((0, Nc.default)(!0, {}, this.namespace)), t
    }
    data(e, t) {
      return typeof e == 'string'
        ? arguments.length === 2
          ? (Rc('data', this.frozen), (this.namespace[e] = t), this)
          : (Pc.call(this.namespace, e) && this.namespace[e]) || void 0
        : e
        ? (Rc('data', this.frozen), (this.namespace = e), this)
        : this.namespace
    }
    freeze() {
      if (this.frozen) return this
      let e = this
      for (; ++this.freezeIndex < this.attachers.length; ) {
        let [t, ...n] = this.attachers[this.freezeIndex]
        if (n[0] === !1) continue
        n[0] === !0 && (n[0] = void 0)
        let r = t.call(e, ...n)
        typeof r == 'function' && this.transformers.use(r)
      }
      return (this.frozen = !0), (this.freezeIndex = Infinity), this
    }
    parse(e) {
      this.freeze()
      let t = Vc(e),
        n = this.parser || this.Parser
      return Ic('parse', n), n(String(t), t)
    }
    process(e, t) {
      let n = this
      return (
        this.freeze(),
        Ic('process', this.parser || this.Parser),
        Lc('process', this.compiler || this.Compiler),
        t ? r(void 0, t) : new Promise(r)
      )
      function r(r, i) {
        let a = Vc(e),
          o = n.parse(a)
        n.run(o, a, function (e, t, r) {
          if (e || !t || !r) return s(e)
          let i = t,
            a = n.stringify(i, r)
          Uc(a) ? (r.value = a) : (r.result = a), s(e, r)
        })
        function s(e, n) {
          e || !n ? i(e) : r ? r(n) : t(void 0, n)
        }
      }
    }
    processSync(e) {
      let t = !1,
        n
      return (
        this.freeze(),
        Ic('processSync', this.parser || this.Parser),
        Lc('processSync', this.compiler || this.Compiler),
        this.process(e, r),
        Bc('processSync', 'process', t),
        n
      )
      function r(e, r) {
        ;(t = !0), cc(e), (n = r)
      }
    }
    run(e, t, n) {
      zc(e), this.freeze()
      let r = this.transformers
      return (
        !n && typeof t == 'function' && ((n = t), (t = void 0)),
        n ? i(void 0, n) : new Promise(i)
      )
      function i(i, a) {
        let o = Vc(t)
        r.run(e, o, s)
        function s(t, r, o) {
          let s = r || e
          t ? a(t) : i ? i(s) : n(void 0, s, o)
        }
      }
    }
    runSync(e, t) {
      let n = !1,
        r
      return this.run(e, t, i), Bc('runSync', 'run', n), r
      function i(e, t) {
        cc(e), (r = t), (n = !0)
      }
    }
    stringify(e, t) {
      this.freeze()
      let n = Vc(t),
        r = this.compiler || this.Compiler
      return Lc('stringify', r), zc(e), r(e, n)
    }
    use(e, ...t) {
      let n = this.attachers,
        r = this.namespace
      if ((Rc('use', this.frozen), e != null))
        if (typeof e == 'function') s(e, t)
        else if (typeof e == 'object') Array.isArray(e) ? o(e) : a(e)
        else throw TypeError('Expected usable value, not `' + e + '`')
      return this
      function i(e) {
        if (typeof e == 'function') s(e, [])
        else if (typeof e == 'object')
          if (Array.isArray(e)) {
            let [t, ...n] = e
            s(t, n)
          } else a(e)
        else throw TypeError('Expected usable value, not `' + e + '`')
      }
      function a(e) {
        if (!('plugins' in e) && !('settings' in e))
          throw Error(
            'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither'
          )
        o(e.plugins),
          e.settings &&
            (r.settings = (0, Nc.default)(!0, r.settings, e.settings))
      }
      function o(e) {
        let t = -1
        if (e != null)
          if (Array.isArray(e))
            for (; ++t < e.length; ) {
              let n = e[t]
              i(n)
            }
          else throw TypeError('Expected a list of plugins, not `' + e + '`')
      }
      function s(e, t) {
        let r = -1,
          i = -1
        for (; ++r < n.length; )
          if (n[r][0] === e) {
            i = r
            break
          }
        if (i === -1) n.push([e, ...t])
        else if (t.length > 0) {
          let [r, ...a] = t,
            o = n[i][1]
          uc(o) && uc(r) && (r = (0, Nc.default)(!0, o, r)),
            (n[i] = [e, r, ...a])
        }
      }
    }
  })().freeze()
function Ic(e, t) {
  if (typeof t != 'function')
    throw TypeError('Cannot `' + e + '` without `parser`')
}
function Lc(e, t) {
  if (typeof t != 'function')
    throw TypeError('Cannot `' + e + '` without `compiler`')
}
function Rc(e, t) {
  if (t)
    throw Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    )
}
function zc(e) {
  if (!uc(e) || typeof e.type != 'string')
    throw TypeError('Expected node, got `' + e + '`')
}
function Bc(e, t, n) {
  if (!n) throw Error('`' + e + '` finished async. Use `' + t + '` instead')
}
function Vc(e) {
  return Hc(e) ? e : new Dc(e)
}
function Hc(e) {
  return !!(e && typeof e == 'object' && 'message' in e && 'messages' in e)
}
function Uc(e) {
  return typeof e == 'string' || Wc(e)
}
function Wc(e) {
  return !!(e && typeof e == 'object' && 'byteLength' in e && 'byteOffset' in e)
}
//#endregion
//#region node_modules/react-markdown/lib/index.js
var Gc = [],
  Kc = { allowDangerousHtml: !0 },
  qc = /^(https?|ircs?|mailto|xmpp)$/i,
  Jc = [
    {
      from: 'astPlugins',
      id: 'remove-buggy-html-in-markdown-parser',
    },
    {
      from: 'allowDangerousHtml',
      id: 'remove-buggy-html-in-markdown-parser',
    },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    {
      from: 'className',
      id: 'remove-classname',
    },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    {
      from: 'escapeHtml',
      id: 'remove-buggy-html-in-markdown-parser',
    },
    {
      from: 'includeElementIndex',
      id: '#remove-includeelementindex',
    },
    {
      from: 'includeNodeIndex',
      id: 'change-includenodeindex-to-includeelementindex',
    },
    {
      from: 'linkTarget',
      id: 'remove-linktarget',
    },
    {
      from: 'plugins',
      id: 'change-plugins-to-remarkplugins',
      to: 'remarkPlugins',
    },
    {
      from: 'rawSourcePos',
      id: '#remove-rawsourcepos',
    },
    {
      from: 'renderers',
      id: 'change-renderers-to-components',
      to: 'components',
    },
    {
      from: 'source',
      id: 'change-source-to-children',
      to: 'children',
    },
    {
      from: 'sourcePos',
      id: '#remove-sourcepos',
    },
    {
      from: 'transformImageUri',
      id: '#add-urltransform',
      to: 'urlTransform',
    },
    {
      from: 'transformLinkUri',
      id: '#add-urltransform',
      to: 'urlTransform',
    },
  ]
function Yc(e) {
  let t = Xc(e),
    n = Zc(e)
  return Qc(t.runSync(t.parse(n), n), e)
}
function Xc(e) {
  let t = e.rehypePlugins || Gc,
    n = e.remarkPlugins || Gc,
    r = e.remarkRehypeOptions
      ? {
          ...e.remarkRehypeOptions,
          ...Kc,
        }
      : Kc
  return Fc().use(qo).use(n).use(sc, r).use(t)
}
function Zc(e) {
  let t = e.children || '',
    n = new Dc()
  return typeof t == 'string' ? (n.value = t) : '' + t, n
}
function Qc(e, t) {
  let n = t.allowedElements,
    r = t.allowElement,
    i = t.components,
    a = t.disallowedElements,
    o = t.skipHtml,
    s = t.unwrapDisallowed,
    c = t.urlTransform || $c
  for (let e of Jc)
    Object.hasOwn(t, e.from) &&
      '' + e.from + (e.to ? 'use `' + e.to + '` instead' : 'remove it') + e.id
  return (
    Zs(e, l),
    Tr(e, {
      Fragment: u,
      components: i,
      ignoreInvalidStyle: !0,
      jsx: d,
      jsxs: f,
      passKeys: !0,
      passNode: !0,
    })
  )
  function l(e, t, i) {
    if (e.type === 'raw' && i && typeof t == 'number')
      return (
        o
          ? i.children.splice(t, 1)
          : (i.children[t] = {
              type: 'text',
              value: e.value,
            }),
        t
      )
    if (e.type === 'element') {
      let t
      for (t in qr)
        if (Object.hasOwn(qr, t) && Object.hasOwn(e.properties, t)) {
          let n = e.properties[t],
            r = qr[t]
          ;(r === null || r.includes(e.tagName)) &&
            (e.properties[t] = c(String(n || ''), t, e))
        }
    }
    if (e.type === 'element') {
      let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1
      if (
        (!o && r && typeof t == 'number' && (o = !r(e, t, i)),
        o && i && typeof t == 'number')
      )
        return (
          s && e.children
            ? i.children.splice(t, 1, ...e.children)
            : i.children.splice(t, 1),
          t
        )
    }
  }
}
function $c(e) {
  let t = e.indexOf(':'),
    n = e.indexOf('?'),
    r = e.indexOf('#'),
    i = e.indexOf('/')
  return t === -1 ||
    (i !== -1 && t > i) ||
    (n !== -1 && t > n) ||
    (r !== -1 && t > r) ||
    qc.test(e.slice(0, t))
    ? e
    : ''
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/warn-once.mjs
var el = /* @__PURE__ */ new Set()
function tl(e, t, n) {
  e || el.has(t) || (console.warn(t), n && console.warn(n), el.add(t))
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-proxy.mjs
function nl(e) {
  if (typeof Proxy > 'u') return e
  let t = /* @__PURE__ */ new Map()
  return new Proxy(
    (...t) => (
      process.env.NODE_ENV !== 'production' &&
        tl(!1, 'motion() is deprecated. Use motion.create() instead.'),
      e(...t)
    ),
    {
      get: (n, r) =>
        r === 'create' ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
    }
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function rl(e) {
  return typeof e == 'object' && !!e && typeof e.start == 'function'
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var il = e => Array.isArray(e)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/shallow-compare.mjs
function al(e, t) {
  if (!Array.isArray(t)) return !1
  let n = t.length
  if (n !== e.length) return !1
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1
  return !0
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs
function ol(e) {
  return typeof e == 'string' || Array.isArray(e)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs
function sl(e) {
  let t = [{}, {}]
  return (
    e?.values.forEach((e, n) => {
      ;(t[0][n] = e.get()), (t[1][n] = e.getVelocity())
    }),
    t
  )
}
function cl(e, t, n, r) {
  if (typeof t == 'function') {
    let [i, a] = sl(r)
    t = t(n === void 0 ? e.custom : n, i, a)
  }
  if (
    (typeof t == 'string' && (t = e.variants && e.variants[t]),
    typeof t == 'function')
  ) {
    let [i, a] = sl(r)
    t = t(n === void 0 ? e.custom : n, i, a)
  }
  return t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function ll(e, t, n) {
  let r = e.getProps()
  return cl(r, t, n === void 0 ? r.custom : n, e)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs
var ul = [
    'animate',
    'whileInView',
    'whileFocus',
    'whileHover',
    'whileTap',
    'whileDrag',
    'exit',
  ],
  dl = ['initial', ...ul],
  fl = [
    'transformPerspective',
    'x',
    'y',
    'z',
    'translateX',
    'translateY',
    'translateZ',
    'scale',
    'scaleX',
    'scaleY',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'skew',
    'skewX',
    'skewY',
  ],
  pl = new Set(fl),
  ml = e => e * 1e3,
  hl = e => e / 1e3,
  gl = {
    type: 'spring',
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
  },
  _l = e => ({
    type: 'spring',
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  vl = {
    type: 'keyframes',
    duration: 0.8,
  },
  yl = {
    type: 'keyframes',
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
  },
  bl = (e, { keyframes: t }) =>
    t.length > 2 ? vl : pl.has(e) ? (e.startsWith('scale') ? _l(t[1]) : gl) : yl
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/get-value-transition.mjs
function xl(e, t) {
  return e ? e[t] || e.default || e : void 0
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/GlobalConfig.mjs
var Sl = {
    skipAnimations: !1,
    useManualTiming: !1,
  },
  Cl = { current: !1 },
  wl = e => e !== null
function Tl(e, { repeat: t, repeatType: n = 'loop' }, r) {
  let i = e.filter(wl),
    a = t && n !== 'loop' && t % 2 == 1 ? 0 : i.length - 1
  return !a || r === void 0 ? i[a] : r
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/noop.mjs
var J = e => e
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/render-step.mjs
function El(e) {
  let t = /* @__PURE__ */ new Set(),
    n = /* @__PURE__ */ new Set(),
    r = !1,
    i = !1,
    a = /* @__PURE__ */ new WeakSet(),
    o = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1,
    }
  function s(t) {
    a.has(t) && (c.schedule(t), e()), t(o)
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n
      return i && a.add(e), s.has(e) || s.add(e), e
    },
    cancel: e => {
      n.delete(e), a.delete(e)
    },
    process: e => {
      if (((o = e), r)) {
        i = !0
        return
      }
      ;(r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(s),
        (r = !1),
        i && ((i = !1), c.process(e))
    },
  }
  return c
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/batcher.mjs
var Dl = [
    'read',
    'resolveKeyframes',
    'update',
    'preRender',
    'render',
    'postRender',
  ],
  Ol = 40
function kl(e, t) {
  let n = !1,
    r = !0,
    i = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1,
    },
    a = () => (n = !0),
    o = Dl.reduce((e, t) => ((e[t] = El(a)), e), {}),
    {
      read: s,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      let a = Sl.useManualTiming ? i.timestamp : performance.now()
      ;(n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Ol), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p))
    },
    m = () => {
      ;(n = !0), (r = !0), i.isProcessing || e(p)
    }
  return {
    schedule: Dl.reduce((e, t) => {
      let r = o[t]
      return (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))), e
    }, {}),
    cancel: e => {
      for (let t = 0; t < Dl.length; t++) o[Dl[t]].cancel(e)
    },
    state: i,
    steps: o,
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/frame.mjs
var {
    schedule: Y,
    cancel: Al,
    state: jl,
    steps: Ml,
  } = kl(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : J, !0),
  Nl = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Pl = 1e-7,
  Fl = 12
function Il(e, t, n, r, i) {
  let a,
    o,
    s = 0
  do (o = t + (n - t) / 2), (a = Nl(o, r, i) - e), a > 0 ? (n = o) : (t = o)
  while (Math.abs(a) > Pl && ++s < Fl)
  return o
}
function Ll(e, t, n, r) {
  if (e === t && n === r) return J
  let i = t => Il(t, 0, 1, e, n)
  return e => (e === 0 || e === 1 ? e : Nl(i(e), t, r))
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/easing/modifiers/mirror.mjs
var Rl = e => t => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  zl = e => t => 1 - e(1 - t),
  Bl = /*@__PURE__*/ Ll(0.33, 1.53, 0.69, 0.99),
  Vl = /*@__PURE__*/ zl(Bl),
  Hl = /*@__PURE__*/ Rl(Vl),
  Ul = e => ((e *= 2) < 1 ? 0.5 * Vl(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  Wl = e => 1 - Math.sin(Math.acos(e)),
  Gl = zl(Wl),
  Kl = Rl(Wl),
  ql = e => /^0[^.\s]+$/u.test(e)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-none.mjs
function Jl(e) {
  return typeof e == 'number'
    ? e === 0
    : e === null
    ? !0
    : e === 'none' || e === '0' || ql(e)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/errors.mjs
var Yl = J,
  Xl = J
process.env.NODE_ENV !== 'production' &&
  ((Yl = (e, t) => {
    !e && typeof console < 'u' && console.warn(t)
  }),
  (Xl = (e, t) => {
    if (!e) throw Error(t)
  }))
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/is-numerical-string.mjs
var Zl = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Ql = e => t => typeof t == 'string' && t.startsWith(e),
  $l = /*@__PURE__*/ Ql('--'),
  eu = /*@__PURE__*/ Ql('var(--'),
  tu = e => (eu(e) ? nu.test(e.split('/*')[0].trim()) : !1),
  nu =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ru = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
function iu(e) {
  let t = ru.exec(e)
  if (!t) return [,]
  let [, n, r, i] = t
  return [`--${n ?? r}`, i]
}
var au = 4
function ou(e, t, n = 1) {
  Xl(
    n <= au,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  )
  let [r, i] = iu(e)
  if (!r) return
  let a = window.getComputedStyle(t).getPropertyValue(r)
  if (a) {
    let e = a.trim()
    return Zl(e) ? parseFloat(e) : e
  }
  return tu(i) ? ou(i, t, n + 1) : i
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/clamp.mjs
var su = (e, t, n) => (n > t ? t : n < e ? e : n),
  cu = {
    test: e => typeof e == 'number',
    parse: parseFloat,
    transform: e => e,
  },
  lu = {
    ...cu,
    transform: e => su(0, 1, e),
  },
  uu = {
    ...cu,
    default: 1,
  },
  du = e => ({
    test: t =>
      typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`,
  }),
  fu = /*@__PURE__*/ du('deg'),
  pu = /*@__PURE__*/ du('%'),
  X = /*@__PURE__*/ du('px'),
  mu = /*@__PURE__*/ du('vh'),
  hu = /*@__PURE__*/ du('vw'),
  gu = {
    ...pu,
    parse: e => pu.parse(e) / 100,
    transform: e => pu.transform(e * 100),
  },
  _u = new Set([
    'width',
    'height',
    'top',
    'left',
    'right',
    'bottom',
    'x',
    'y',
    'translateX',
    'translateY',
  ]),
  vu = e => e === cu || e === X,
  yu = (e, t) => parseFloat(e.split(', ')[t]),
  bu =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === 'none' || !r) return 0
      let i = r.match(/^matrix3d\((.+)\)$/u)
      if (i) return yu(i[1], t)
      {
        let t = r.match(/^matrix\((.+)\)$/u)
        return t ? yu(t[1], e) : 0
      }
    },
  xu = new Set(['x', 'y', 'z']),
  Su = fl.filter(e => !xu.has(e))
function Cu(e) {
  let t = []
  return (
    Su.forEach(n => {
      let r = e.getValue(n)
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith('scale')))
    }),
    t
  )
}
var wu = {
  width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: bu(4, 13),
  y: bu(5, 14),
}
;(wu.translateX = wu.x), (wu.translateY = wu.y)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/test.mjs
var Tu = e => t => t.test(e),
  Eu = [
    cu,
    X,
    pu,
    fu,
    hu,
    mu,
    {
      test: e => e === 'auto',
      parse: e => e,
    },
  ],
  Du = e => Eu.find(Tu(e)),
  Ou = /* @__PURE__ */ new Set(),
  ku = !1,
  Au = !1
function ju() {
  if (Au) {
    let e = Array.from(Ou).filter(e => e.needsMeasurement),
      t = new Set(e.map(e => e.element)),
      n = /* @__PURE__ */ new Map()
    t.forEach(e => {
      let t = Cu(e)
      t.length && (n.set(e, t), e.render())
    }),
      e.forEach(e => e.measureInitialState()),
      t.forEach(e => {
        e.render()
        let t = n.get(e)
        t &&
          t.forEach(([t, n]) => {
            var r
            ;(r = e.getValue(t)) == null || r.set(n)
          })
      }),
      e.forEach(e => e.measureEndState()),
      e.forEach(e => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY)
      })
  }
  ;(Au = !1), (ku = !1), Ou.forEach(e => e.complete()), Ou.clear()
}
function Mu() {
  Ou.forEach(e => {
    e.readKeyframes(), e.needsMeasurement && (Au = !0)
  })
}
function Nu() {
  Mu(), ju()
}
var Pu = class {
    constructor(e, t, n, r, i, a = !1) {
      ;(this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a)
    }
    scheduleResolve() {
      ;(this.isScheduled = !0),
        this.isAsync
          ? (Ou.add(this),
            ku || ((ku = !0), Y.read(Mu), Y.resolveKeyframes(ju)))
          : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1]
            if (i !== void 0) e[0] = i
            else if (n && t) {
              let r = n.readValue(t, a)
              r != null && (e[0] = r)
            }
            e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0])
          } else e[i] = e[i - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ;(this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Ou.delete(this)
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Ou.delete(this))
    }
    resume() {
      this.isComplete || this.scheduleResolve()
    }
  },
  Fu = e => Math.round(e * 1e5) / 1e5,
  Iu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/is-nullish.mjs
function Lu(e) {
  return e == null
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/utils/single-color-regex.mjs
var Ru =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  zu = (e, t) => n =>
    !!(
      (typeof n == 'string' && Ru.test(n) && n.startsWith(e)) ||
      (t && !Lu(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Bu = (e, t, n) => r => {
    if (typeof r != 'string') return r
    let [i, a, o, s] = r.match(Iu)
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    }
  },
  Vu = e => su(0, 255, e),
  Hu = {
    ...cu,
    transform: e => Math.round(Vu(e)),
  },
  Uu = {
    test: /*@__PURE__*/ zu('rgb', 'red'),
    parse: /*@__PURE__*/ Bu('red', 'green', 'blue'),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      'rgba(' +
      Hu.transform(e) +
      ', ' +
      Hu.transform(t) +
      ', ' +
      Hu.transform(n) +
      ', ' +
      Fu(lu.transform(r)) +
      ')',
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/color/hex.mjs
function Wu(e) {
  let t = '',
    n = '',
    r = '',
    i = ''
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  )
}
var Gu = {
    test: /*@__PURE__*/ zu('#'),
    parse: Wu,
    transform: Uu.transform,
  },
  Ku = {
    test: /*@__PURE__*/ zu('hsl', 'hue'),
    parse: /*@__PURE__*/ Bu('hue', 'saturation', 'lightness'),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      'hsla(' +
      Math.round(e) +
      ', ' +
      pu.transform(Fu(t)) +
      ', ' +
      pu.transform(Fu(n)) +
      ', ' +
      Fu(lu.transform(r)) +
      ')',
  },
  qu = {
    test: e => Uu.test(e) || Gu.test(e) || Ku.test(e),
    parse: e =>
      Uu.test(e) ? Uu.parse(e) : Ku.test(e) ? Ku.parse(e) : Gu.parse(e),
    transform: e =>
      typeof e == 'string'
        ? e
        : e.hasOwnProperty('red')
        ? Uu.transform(e)
        : Ku.transform(e),
  },
  Ju =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/types/complex/index.mjs
function Yu(e) {
  return (
    isNaN(e) &&
    typeof e == 'string' &&
    (e.match(Iu)?.length || 0) + (e.match(Ju)?.length || 0) > 0
  )
}
var Xu = 'number',
  Zu = 'color',
  Qu = 'var',
  $u = 'var(',
  ed = '${}',
  td =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu
function nd(e) {
  let t = e.toString(),
    n = [],
    r = {
      color: [],
      number: [],
      var: [],
    },
    i = [],
    a = 0
  return {
    values: n,
    split: t
      .replace(
        td,
        e => (
          qu.test(e)
            ? (r.color.push(a), i.push(Zu), n.push(qu.parse(e)))
            : e.startsWith($u)
            ? (r.var.push(a), i.push(Qu), n.push(e))
            : (r.number.push(a), i.push(Xu), n.push(parseFloat(e))),
          ++a,
          ed
        )
      )
      .split(ed),
    indexes: r,
    types: i,
  }
}
function rd(e) {
  return nd(e).values
}
function id(e) {
  let { split: t, types: n } = nd(e),
    r = t.length
  return e => {
    let i = ''
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a]
        t === Xu
          ? (i += Fu(e[a]))
          : t === Zu
          ? (i += qu.transform(e[a]))
          : (i += e[a])
      }
    return i
  }
}
var ad = e => (typeof e == 'number' ? 0 : e)
function od(e) {
  let t = rd(e)
  return id(e)(t.map(ad))
}
var sd = {
    test: Yu,
    parse: rd,
    createTransformer: id,
    getAnimatableNone: od,
  },
  cd = new Set(['brightness', 'contrast', 'saturate', 'opacity'])
function ld(e) {
  let [t, n] = e.slice(0, -1).split('(')
  if (t === 'drop-shadow') return e
  let [r] = n.match(Iu) || []
  if (!r) return e
  let i = n.replace(r, ''),
    a = +!!cd.has(t)
  return r !== n && (a *= 100), t + '(' + a + i + ')'
}
var ud = /\b([a-z-]*)\(.*?\)/gu,
  dd = {
    ...sd,
    getAnimatableNone: e => {
      let t = e.match(ud)
      return t ? t.map(ld).join(' ') : e
    },
  },
  fd = {
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
    backgroundPositionY: X,
  },
  pd = {
    rotate: fu,
    rotateX: fu,
    rotateY: fu,
    rotateZ: fu,
    scale: uu,
    scaleX: uu,
    scaleY: uu,
    scaleZ: uu,
    skew: fu,
    skewX: fu,
    skewY: fu,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: lu,
    originX: gu,
    originY: gu,
    originZ: X,
  },
  md = {
    ...cu,
    transform: Math.round,
  },
  hd = {
    ...fd,
    ...pd,
    zIndex: md,
    size: X,
    fillOpacity: lu,
    strokeOpacity: lu,
    numOctaves: md,
  },
  gd = {
    ...hd,
    color: qu,
    backgroundColor: qu,
    outlineColor: qu,
    fill: qu,
    stroke: qu,
    borderColor: qu,
    borderTopColor: qu,
    borderRightColor: qu,
    borderBottomColor: qu,
    borderLeftColor: qu,
    filter: dd,
    WebkitFilter: dd,
  },
  _d = e => gd[e]
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function vd(e, t) {
  let n = _d(e)
  return (
    n !== dd && (n = sd), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/make-none-animatable.mjs
var yd = new Set(['auto', 'none', '0'])
function bd(e, t, n) {
  let r = 0,
    i
  for (; r < e.length && !i; ) {
    let t = e[r]
    typeof t == 'string' && !yd.has(t) && nd(t).values.length && (i = e[r]), r++
  }
  if (i && n) for (let r of t) e[r] = vd(n, i)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/DOMKeyframesResolver.mjs
var xd = class extends Pu {
  constructor(e, t, n, r, i) {
    super(e, t, n, r, i, !0)
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this
    if (!t || !t.current) return
    super.readKeyframes()
    for (let n = 0; n < e.length; n++) {
      let r = e[n]
      if (typeof r == 'string' && ((r = r.trim()), tu(r))) {
        let i = ou(r, t.current)
        i !== void 0 && (e[n] = i),
          n === e.length - 1 && (this.finalKeyframe = r)
      }
    }
    if ((this.resolveNoneKeyframes(), !_u.has(n) || e.length !== 2)) return
    let [r, i] = e,
      a = Du(r),
      o = Du(i)
    if (a !== o)
      if (vu(a) && vu(o))
        for (let t = 0; t < e.length; t++) {
          let n = e[t]
          typeof n == 'string' && (e[t] = parseFloat(n))
        }
      else this.needsMeasurement = !0
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = []
    for (let t = 0; t < e.length; t++) Jl(e[t]) && n.push(t)
    n.length && bd(e, n, t)
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this
    if (!e || !e.current) return
    n === 'height' && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = wu[n](
        e.measureViewportBox(),
        window.getComputedStyle(e.current)
      )),
      (t[0] = this.measuredOrigin)
    let r = t[t.length - 1]
    r !== void 0 && e.getValue(n, r).jump(r, !1)
  }
  measureEndState() {
    let { element: e, name: t, unresolvedKeyframes: n } = this
    if (!e || !e.current) return
    let r = e.getValue(t)
    r && r.jump(this.measuredOrigin, !1)
    let i = n.length - 1,
      a = n[i]
    ;(n[i] = wu[t](e.measureViewportBox(), window.getComputedStyle(e.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([t, n]) => {
          e.getValue(t).set(n)
        }),
      this.resolveNoneKeyframes()
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/is-generator.mjs
function Sd(e) {
  return typeof e == 'function'
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/sync-time.mjs
var Cd
function wd() {
  Cd = void 0
}
var Td = {
    now: () => (
      Cd === void 0 &&
        Td.set(
          jl.isProcessing || Sl.useManualTiming
            ? jl.timestamp
            : performance.now()
        ),
      Cd
    ),
    set: e => {
      ;(Cd = e), queueMicrotask(wd)
    },
  },
  Ed = (e, t) =>
    t === 'zIndex'
      ? !1
      : !!(
          typeof e == 'number' ||
          Array.isArray(e) ||
          (typeof e == 'string' &&
            (sd.test(e) || e === '0') &&
            !e.startsWith('url('))
        )
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/utils/can-animate.mjs
function Dd(e) {
  let t = e[0]
  if (e.length === 1) return !0
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0
}
function Od(e, t, n, r) {
  let i = e[0]
  if (i === null) return !1
  if (t === 'display' || t === 'visibility') return !0
  let a = e[e.length - 1],
    o = Ed(i, t),
    s = Ed(a, t)
  return (
    Yl(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`
    ),
    !o || !s ? !1 : Dd(e) || ((n === 'spring' || Sd(n)) && r)
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/BaseAnimation.mjs
var kd = 40,
  Ad = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = 'keyframes',
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = 'loop',
      ...o
    }) {
      ;(this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = Td.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise()
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > kd
        ? this.resolvedAt
        : this.createdAt
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && Nu(), this._resolved
      )
    }
    onKeyframesResolved(e, t) {
      ;(this.resolvedAt = Td.now()), (this.hasAttemptedResolve = !0)
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options
      if (!c && !Od(e, n, r, i))
        if (Cl.current || !a) {
          s?.(Tl(e, this.options, t)), o?.(), this.resolveFinishedPromise()
          return
        } else this.options.duration = 0
      let l = this.initPlayback(e, t)
      l !== !1 &&
        ((this._resolved = {
          keyframes: e,
          finalKeyframe: t,
          ...l,
        }),
        this.onPostResolved())
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t)
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise(e => {
        this.resolveFinishedPromise = e
      })
    }
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/velocity-per-second.mjs
function jd(e, t) {
  return t ? (1e3 / t) * e : 0
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/utils/velocity.mjs
var Md = 5
function Nd(e, t, n) {
  let r = Math.max(t - Md, 0)
  return jd(n - e(r), t - r)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/find.mjs
var Pd = 0.001,
  Fd = 0.01,
  Id = 0.05
function Ld({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, a
  Yl(e <= ml(10), 'Spring duration must be 10 seconds or less')
  let o = 1 - t
  ;(o = su(Id, 1, o)),
    (e = su(Fd, 10, hl(e))),
    o < 1
      ? ((i = t => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = Bd(t, o),
            c = Math.exp(-i)
          return Pd - (a / s) * c
        }),
        (a = t => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = Bd(t ** 2, o)
          return ((-i(t) + Pd > 0 ? -1 : 1) * ((a - s) * c)) / l
        }))
      : ((i = t => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = t => Math.exp(-t * e) * ((n - t) * (e * e))))
  let s = 5 / e,
    c = zd(i, a, s)
  if (((e = ml(e)), isNaN(c)))
    return {
      stiffness: 100,
      damping: 10,
      duration: e,
    }
  {
    let t = c ** 2 * r
    return {
      stiffness: t,
      damping: o * 2 * Math.sqrt(r * t),
      duration: e,
    }
  }
}
var Rd = 12
function zd(e, t, n) {
  let r = n
  for (let n = 1; n < Rd; n++) r -= e(r) / t(r)
  return r
}
function Bd(e, t) {
  return e * Math.sqrt(1 - t * t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/spring/index.mjs
var Vd = ['duration', 'bounce'],
  Hd = ['stiffness', 'damping', 'mass']
function Ud(e, t) {
  return t.some(t => e[t] !== void 0)
}
function Wd(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  }
  if (!Ud(e, Hd) && Ud(e, Vd)) {
    let n = Ld(e)
    ;(t = {
      ...t,
      ...n,
      mass: 1,
    }),
      (t.isResolvedFromDuration = !0)
  }
  return t
}
function Gd({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    a = e[e.length - 1],
    o = {
      done: !1,
      value: i,
    },
    {
      stiffness: s,
      damping: c,
      mass: l,
      duration: u,
      velocity: d,
      isResolvedFromDuration: f,
    } = Wd({
      ...r,
      velocity: -hl(r.velocity || 0),
    }),
    p = d || 0,
    m = c / (2 * Math.sqrt(s * l)),
    h = a - i,
    g = hl(Math.sqrt(s / l)),
    _ = Math.abs(h) < 5
  ;(n ||= _ ? 0.01 : 2), (t ||= _ ? 0.005 : 0.5)
  let v
  if (m < 1) {
    let e = Bd(g, m)
    v = t =>
      a -
      Math.exp(-m * g * t) *
        (((p + m * g * h) / e) * Math.sin(e * t) + h * Math.cos(e * t))
  } else if (m === 1) v = e => a - Math.exp(-g * e) * (h + (p + g * h) * e)
  else {
    let e = g * Math.sqrt(m * m - 1)
    v = t => {
      let n = Math.exp(-m * g * t),
        r = Math.min(e * t, 300)
      return (
        a - (n * ((p + m * g * h) * Math.sinh(r) + e * h * Math.cosh(r))) / e
      )
    }
  }
  return {
    calculatedDuration: (f && u) || null,
    next: e => {
      let r = v(e)
      if (f) o.done = e >= u
      else {
        let i = 0
        m < 1 && (i = e === 0 ? ml(p) : Nd(v, e, r))
        let s = Math.abs(i) <= n,
          c = Math.abs(a - r) <= t
        o.done = s && c
      }
      return (o.value = o.done ? a : r), o
    },
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/inertia.mjs
function Kd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = {
      done: !1,
      value: d,
    },
    p = e => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = e =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
        ? s
        : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g)
  _ !== g && (h = _ - d)
  let v = e => -h * Math.exp(-e / r),
    y = e => _ + v(e),
    b = e => {
      let t = v(e),
        n = y(e)
      ;(f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n)
    },
    x,
    S,
    C = e => {
      p(f.value) &&
        ((x = e),
        (S = Gd({
          keyframes: [f.value, m(f.value)],
          velocity: Nd(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })))
    }
  return (
    C(0),
    {
      calculatedDuration: null,
      next: e => {
        let t = !1
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        )
      },
    }
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/easing/ease.mjs
var qd = /*@__PURE__*/ Ll(0.42, 0, 1, 1),
  Jd = /*@__PURE__*/ Ll(0, 0, 0.58, 1),
  Yd = /*@__PURE__*/ Ll(0.42, 0, 0.58, 1),
  Xd = e => Array.isArray(e) && typeof e[0] != 'number',
  Zd = e => Array.isArray(e) && typeof e[0] == 'number',
  Qd = {
    linear: J,
    easeIn: qd,
    easeInOut: Yd,
    easeOut: Jd,
    circIn: Wl,
    circInOut: Kl,
    circOut: Gl,
    backIn: Vl,
    backInOut: Hl,
    backOut: Bl,
    anticipate: Ul,
  },
  $d = e => {
    if (Zd(e)) {
      Xl(
        e.length === 4,
        'Cubic bezier arrays must contain four numerical values.'
      )
      let [t, n, r, i] = e
      return Ll(t, n, r, i)
    } else if (typeof e == 'string')
      return Xl(Qd[e] !== void 0, `Invalid easing type '${e}'`), Qd[e]
    return e
  },
  ef = (e, t) => n => t(e(n)),
  tf = (...e) => e.reduce(ef),
  nf = (e, t, n) => {
    let r = t - e
    return r === 0 ? 1 : (n - e) / r
  },
  Z = (e, t, n) => e + (t - e) * n
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/hsla-to-rgba.mjs
function rf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  )
}
function af({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ;(e /= 360), (t /= 100), (n /= 100)
  let i = 0,
    a = 0,
    o = 0
  if (!t) i = a = o = n
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r
    ;(i = rf(s, r, e + 1 / 3)), (a = rf(s, r, e)), (o = rf(s, r, e - 1 / 3))
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/immediate.mjs
function of(e, t) {
  return n => (n > 0 ? t : e)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/color.mjs
var sf = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r
    return i < 0 ? 0 : Math.sqrt(i)
  },
  cf = [Gu, Uu, Ku],
  lf = e => cf.find(t => t.test(e))
function uf(e) {
  let t = lf(e)
  if (
    (Yl(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1
  let n = t.parse(e)
  return t === Ku && (n = af(n)), n
}
var df = (e, t) => {
    let n = uf(e),
      r = uf(t)
    if (!n || !r) return of(e, t)
    let i = { ...n }
    return e => (
      (i.red = sf(n.red, r.red, e)),
      (i.green = sf(n.green, r.green, e)),
      (i.blue = sf(n.blue, r.blue, e)),
      (i.alpha = Z(n.alpha, r.alpha, e)),
      Uu.transform(i)
    )
  },
  ff = new Set(['none', 'hidden'])
function pf(e, t) {
  return ff.has(e) ? n => (n <= 0 ? e : t) : n => (n >= 1 ? t : e)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/complex.mjs
function mf(e, t) {
  return n => Z(e, t, n)
}
function hf(e) {
  return typeof e == 'number'
    ? mf
    : typeof e == 'string'
    ? tu(e)
      ? of
      : qu.test(e)
      ? df
      : yf
    : Array.isArray(e)
    ? gf
    : typeof e == 'object'
    ? qu.test(e)
      ? df
      : _f
    : of
}
function gf(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => hf(e)(e, t[n]))
  return e => {
    for (let t = 0; t < r; t++) n[t] = i[t](e)
    return n
  }
}
function _f(e, t) {
  let n = {
      ...e,
      ...t,
    },
    r = {}
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = hf(e[i])(e[i], t[i]))
  return e => {
    for (let t in r) n[t] = r[t](e)
    return n
  }
}
function vf(e, t) {
  let n = [],
    r = {
      color: 0,
      var: 0,
      number: 0,
    }
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]]
    ;(n[i] = e.values[o] ?? 0), r[a]++
  }
  return n
}
var yf = (e, t) => {
  let n = sd.createTransformer(t),
    r = nd(e),
    i = nd(t)
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ff.has(e) && !i.values.length) || (ff.has(t) && !r.values.length)
      ? pf(e, t)
      : tf(gf(vf(r, i), i.values), n)
    : (Yl(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      of(e, t))
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/mix/index.mjs
function bf(e, t, n) {
  return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
    ? Z(e, t, n)
    : hf(e)(e, t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/interpolate.mjs
function xf(e, t, n) {
  let r = [],
    i = n || bf,
    a = e.length - 1
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1])
    t && (a = tf(Array.isArray(t) ? t[n] || J : t, a)), r.push(a)
  }
  return r
}
function Sf(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length
  if (
    (Xl(a === t.length, 'Both input and output ranges must be the same length'),
    a === 1)
  )
    return () => t[0]
  if (a === 2 && e[0] === e[1]) return () => t[1]
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()))
  let o = xf(t, r, i),
    s = o.length,
    c = t => {
      let n = 0
      if (s > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
      let r = nf(e[n], e[n + 1], t)
      return o[n](r)
    }
  return n ? t => c(su(e[0], e[a - 1], t)) : c
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/fill.mjs
function Cf(e, t) {
  let n = e[e.length - 1]
  for (let r = 1; r <= t; r++) {
    let i = nf(0, t, r)
    e.push(Z(n, 1, i))
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/default.mjs
function wf(e) {
  let t = [0]
  return Cf(t, e.length - 1), t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/offsets/time.mjs
function Tf(e, t) {
  return e.map(e => e * t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/generators/keyframes.mjs
function Ef(e, t) {
  return e.map(() => t || Yd).splice(0, e.length - 1)
}
function Df({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = 'easeInOut',
}) {
  let i = Xd(r) ? r.map($d) : $d(r),
    a = {
      done: !1,
      value: t[0],
    },
    o = Sf(Tf(n && n.length === t.length ? n : wf(t), e), t, {
      ease: Array.isArray(i) ? i : Ef(t, i),
    })
  return {
    calculatedDuration: e,
    next: t => ((a.value = o(t)), (a.done = t >= e), a),
  }
}
function Of(e) {
  let t = 0,
    n = e.next(t)
  for (; !n.done && t < 2e4; ) (t += 50), (n = e.next(t))
  return t >= 2e4 ? Infinity : t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/drivers/driver-frameloop.mjs
var kf = e => {
    let t = ({ timestamp: t }) => e(t)
    return {
      start: () => Y.update(t, !0),
      stop: () => Al(t),
      now: () => (jl.isProcessing ? jl.timestamp : Td.now()),
    }
  },
  Af = {
    decay: Kd,
    inertia: Kd,
    tween: Df,
    keyframes: Df,
    spring: Gd,
  },
  jf = e => e / 100,
  Mf = class extends Ad {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = 'running'),
        (this.startTime = null),
        (this.state = 'idle'),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === 'idle')
          )
            return
          this.teardown()
          let { onStop: e } = this.options
          e && e()
        })
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        a = r?.KeyframeResolver || Pu,
        o = (e, t) => this.onKeyframesResolved(e, t)
      ;(this.resolver = new a(i, o, t, n, r)), this.resolver.scheduleResolve()
    }
    initPlayback(e) {
      let {
          type: t = 'keyframes',
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = Sd(t) ? t : Af[t] || Df,
        s,
        c
      o !== Df &&
        typeof e[0] != 'number' &&
        (process.env.NODE_ENV !== 'production' &&
          Xl(
            e.length === 2,
            `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`
          ),
        (s = tf(jf, bf(e[0], e[1]))),
        (e = [0, 100]))
      let l = o({
        ...this.options,
        keyframes: e,
      })
      i === 'mirror' &&
        (c = o({
          ...this.options,
          keyframes: [...e].reverse(),
          velocity: -a,
        })),
        l.calculatedDuration === null && (l.calculatedDuration = Of(l))
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      }
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options
      this.play(),
        this.pendingPlayState === 'paused' || !e
          ? this.pause()
          : (this.state = this.pendingPlayState)
    }
    tick(e, t = !1) {
      let { resolved: n } = this
      if (!n) {
        let { keyframes: e } = this.options
        return {
          done: !0,
          value: e[e.length - 1],
        }
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n
      if (this.startTime === null) return i.next(0)
      let {
        delay: d,
        repeat: f,
        repeatType: p,
        repeatDelay: m,
        onUpdate: h,
      } = this.options
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime === null
          ? (this.currentTime = Math.round(e - this.startTime) * this.speed)
          : (this.currentTime = this.holdTime)
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l
      ;(this.currentTime = Math.max(g, 0)),
        this.state === 'finished' &&
          this.holdTime === null &&
          (this.currentTime = l)
      let v = this.currentTime,
        y = i
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1
        !n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 &&
            (p === 'reverse'
              ? ((n = 1 - n), m && (n -= m / u))
              : p === 'mirror' && (y = a)),
          (v = su(0, 1, n) * u)
      }
      let b = _
        ? {
            done: !1,
            value: s[0],
          }
        : y.next(v)
      o && (b.value = o(b.value))
      let { done: x } = b
      !_ &&
        c !== null &&
        (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0)
      let S =
        this.holdTime === null &&
        (this.state === 'finished' || (this.state === 'running' && x))
      return (
        S && r !== void 0 && (b.value = Tl(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      )
    }
    get duration() {
      let { resolved: e } = this
      return e ? hl(e.calculatedDuration) : 0
    }
    get time() {
      return hl(this.currentTime)
    }
    set time(e) {
      ;(e = ml(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver && (this.startTime = this.driver.now() - e / this.speed)
    }
    get speed() {
      return this.playbackSpeed
    }
    set speed(e) {
      let t = this.playbackSpeed !== e
      ;(this.playbackSpeed = e), t && (this.time = hl(this.currentTime))
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = 'running'
        return
      }
      if (this.isStopped) return
      let { driver: e = kf, onPlay: t, startTime: n } = this.options
      ;(this.driver ||= e(e => this.tick(e))), t && t()
      let r = this.driver.now()
      this.holdTime === null
        ? this.startTime
          ? this.state === 'finished' && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === 'finished' && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = 'running'),
        this.driver.start()
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = 'paused'
        return
      }
      ;(this.state = 'paused'), (this.holdTime = this.currentTime ?? 0)
    }
    complete() {
      this.state !== 'running' && this.play(),
        (this.pendingPlayState = this.state = 'finished'),
        (this.holdTime = null)
    }
    finish() {
      this.teardown(), (this.state = 'finished')
      let { onComplete: e } = this.options
      e && e()
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
      ;(this.state = 'idle'),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel()
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0)
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0)
    }
  },
  Nf = new Set(['opacity', 'clipPath', 'filter', 'transform']),
  Pf = 10,
  Ff = (e, t) => {
    let n = '',
      r = Math.max(Math.round(t / Pf), 2)
    for (let t = 0; t < r; t++) n += e(nf(0, r - 1, t)) + ', '
    return `linear(${n.substring(0, n.length - 2)})`
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/memo.mjs
function If(e) {
  let t
  return () => (t === void 0 && (t = e()), t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-flags.mjs
var Lf = { linearEasing: void 0 }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/memo-supports.mjs
function Rf(e, t) {
  let n = If(e)
  return () => Lf[t] ?? n()
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-linear-easing.mjs
var zf = /*@__PURE__*/ Rf(() => {
  try {
    document
      .createElement('div')
      .animate({ opacity: 0 }, { easing: 'linear(0, 1)' })
  } catch {
    return !1
  }
  return !0
}, 'linearEasing')
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/easing.mjs
function Bf(e) {
  return !!(
    (typeof e == 'function' && zf()) ||
    !e ||
    (typeof e == 'string' && (e in Hf || zf())) ||
    Zd(e) ||
    (Array.isArray(e) && e.every(Bf))
  )
}
var Vf = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Hf = {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    circIn: /*@__PURE__*/ Vf([0, 0.65, 0.55, 1]),
    circOut: /*@__PURE__*/ Vf([0.55, 0, 1, 0.45]),
    backIn: /*@__PURE__*/ Vf([0.31, 0.01, 0.66, -0.59]),
    backOut: /*@__PURE__*/ Vf([0.33, 1.53, 0.69, 0.99]),
  }
function Uf(e, t) {
  if (e)
    return typeof e == 'function' && zf()
      ? Ff(e, t)
      : Zd(e)
      ? Vf(e)
      : Array.isArray(e)
      ? e.map(e => Uf(e, t) || Hf.easeOut)
      : Hf[e]
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/index.mjs
function Wf(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = 'loop',
    ease: s = 'easeInOut',
    times: c,
  } = {}
) {
  let l = { [t]: n }
  c && (l.offset = c)
  let u = Uf(s, i)
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? 'linear' : u,
      fill: 'both',
      iterations: a + 1,
      direction: o === 'reverse' ? 'alternate' : 'normal',
    })
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/attach-timeline.mjs
function Gf(e, t) {
  ;(e.timeline = t), (e.onfinish = null)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/supports-waapi.mjs
var Kf = /*@__PURE__*/ If(() =>
    Object.hasOwnProperty.call(Element.prototype, 'animate')
  ),
  qf = 10,
  Jf = 2e4
function Yf(e) {
  return Sd(e.type) || e.type === 'spring' || !Bf(e.ease)
}
function Xf(e, t) {
  let n = new Mf({
      ...t,
      keyframes: e,
      repeat: 0,
      delay: 0,
      isGenerator: !0,
    }),
    r = {
      done: !1,
      value: e[0],
    },
    i = [],
    a = 0
  for (; !r.done && a < Jf; ) (r = n.sample(a)), i.push(r.value), (a += qf)
  return {
    times: void 0,
    keyframes: i,
    duration: a - qf,
    ease: 'linear',
  }
}
var Zf = {
  anticipate: Ul,
  backInOut: Hl,
  circInOut: Kl,
}
function Qf(e) {
  return e in Zf
}
var $f = class extends Ad {
    constructor(e) {
      super(e)
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options
      ;(this.resolver = new xd(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r
      )),
        this.resolver.scheduleResolve()
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options
      if (!o.owner?.current) return !1
      if (
        (typeof i == 'string' && zf() && Qf(i) && (i = Zf[i]), Yf(this.options))
      ) {
        let {
            onComplete: t,
            onUpdate: o,
            motionValue: s,
            element: c,
            ...l
          } = this.options,
          u = Xf(e, l)
        ;(e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = 'keyframes')
      }
      let l = Wf(o.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      })
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (Gf(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options
              o.set(Tl(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise()
            }),
        {
          animation: l,
          duration: n,
          times: r,
          type: a,
          ease: i,
          keyframes: e,
        }
      )
    }
    get duration() {
      let { resolved: e } = this
      if (!e) return 0
      let { duration: t } = e
      return hl(t)
    }
    get time() {
      let { resolved: e } = this
      if (!e) return 0
      let { animation: t } = e
      return hl(t.currentTime || 0)
    }
    set time(e) {
      let { resolved: t } = this
      if (!t) return
      let { animation: n } = t
      n.currentTime = ml(e)
    }
    get speed() {
      let { resolved: e } = this
      if (!e) return 1
      let { animation: t } = e
      return t.playbackRate
    }
    set speed(e) {
      let { resolved: t } = this
      if (!t) return
      let { animation: n } = t
      n.playbackRate = e
    }
    get state() {
      let { resolved: e } = this
      if (!e) return 'idle'
      let { animation: t } = e
      return t.playState
    }
    get startTime() {
      let { resolved: e } = this
      if (!e) return null
      let { animation: t } = e
      return t.startTime
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e
      else {
        let { resolved: t } = this
        if (!t) return J
        let { animation: n } = t
        Gf(n, e)
      }
      return J
    }
    play() {
      if (this.isStopped) return
      let { resolved: e } = this
      if (!e) return
      let { animation: t } = e
      t.playState === 'finished' && this.updateFinishedPromise(), t.play()
    }
    pause() {
      let { resolved: e } = this
      if (!e) return
      let { animation: t } = e
      t.pause()
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
      )
        return
      this.resolveFinishedPromise(), this.updateFinishedPromise()
      let { resolved: e } = this
      if (!e) return
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e
      if (t.playState === 'idle' || t.playState === 'finished') return
      if (this.time) {
        let {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: c,
            ...l
          } = this.options,
          u = new Mf({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = ml(this.time)
        e.setWithVelocity(u.sample(d - qf).value, u.sample(d).value, qf)
      }
      let { onStop: s } = this.options
      s && s(), this.cancel()
    }
    complete() {
      let { resolved: e } = this
      e && e.animation.finish()
    }
    cancel() {
      let { resolved: e } = this
      e && e.animation.cancel()
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e
      return (
        Kf() &&
        n &&
        Nf.has(n) &&
        t &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate &&
        !r &&
        i !== 'mirror' &&
        a !== 0 &&
        o !== 'inertia'
      )
    }
  },
  ep = If(() => window.ScrollTimeline !== void 0),
  tp = class {
    constructor(e) {
      ;(this.stop = () => this.runAll('stop')),
        (this.animations = e.filter(Boolean))
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t)
    }
    getAll(e) {
      return this.animations[0][e]
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
    }
    attachTimeline(e, t) {
      let n = this.animations.map(n =>
        ep() && n.attachTimeline ? n.attachTimeline(e) : t(n)
      )
      return () => {
        n.forEach((e, t) => {
          e && e(), this.animations[t].stop()
        })
      }
    }
    get time() {
      return this.getAll('time')
    }
    set time(e) {
      this.setAll('time', e)
    }
    get speed() {
      return this.getAll('speed')
    }
    set speed(e) {
      this.setAll('speed', e)
    }
    get startTime() {
      return this.getAll('startTime')
    }
    get duration() {
      let e = 0
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration)
      return e
    }
    runAll(e) {
      this.animations.forEach(t => t[e]())
    }
    play() {
      this.runAll('play')
    }
    pause() {
      this.runAll('pause')
    }
    cancel() {
      this.runAll('cancel')
    }
    complete() {
      this.runAll('complete')
    }
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function np({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/motion-value.mjs
var rp =
    (e, t, n, r = {}, i, a) =>
    o => {
      let s = xl(r, e) || {},
        c = s.delay || r.delay || 0,
        { elapsed: l = 0 } = r
      l -= ml(c)
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: 'easeOut',
        velocity: t.getVelocity(),
        ...s,
        delay: -l,
        onUpdate: e => {
          t.set(e), s.onUpdate && s.onUpdate(e)
        },
        onComplete: () => {
          o(), s.onComplete && s.onComplete()
        },
        name: e,
        motionValue: t,
        element: a ? void 0 : i,
      }
      np(s) ||
        (u = {
          ...u,
          ...bl(e, u),
        }),
        (u.duration &&= ml(u.duration)),
        (u.repeatDelay &&= ml(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from)
      let d = !1
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (d = !0)),
        (Cl.current || Sl.skipAnimations) &&
          ((d = !0), (u.duration = 0), (u.delay = 0)),
        d && !a && t.get() !== void 0)
      ) {
        let e = Tl(u.keyframes, s)
        if (e !== void 0)
          return (
            Y.update(() => {
              u.onUpdate(e), u.onComplete()
            }),
            new tp([])
          )
      }
      return !a && $f.supports(u) ? new $f(u) : new Mf(u)
    },
  ip = e => !!(e && typeof e == 'object' && e.mix && e.toValue),
  ap = e => (il(e) ? e[e.length - 1] || 0 : e)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/array.mjs
function op(e, t) {
  e.indexOf(t) === -1 && e.push(t)
}
function sp(e, t) {
  let n = e.indexOf(t)
  n > -1 && e.splice(n, 1)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/subscription-manager.mjs
var cp = class {
    constructor() {
      this.subscriptions = []
    }
    add(e) {
      return op(this.subscriptions, e), () => sp(this.subscriptions, e)
    }
    notify(e, t, n) {
      let r = this.subscriptions.length
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n)
        else
          for (let i = 0; i < r; i++) {
            let r = this.subscriptions[i]
            r && r(e, t, n)
          }
    }
    getSize() {
      return this.subscriptions.length
    }
    clear() {
      this.subscriptions.length = 0
    }
  },
  lp = 30,
  up = e => !isNaN(parseFloat(e)),
  dp = { current: void 0 },
  fp = class {
    constructor(e, t = {}) {
      ;(this.version = '11.11.13'),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = Td.now()
          this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current)
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner)
    }
    setCurrent(e) {
      ;(this.current = e),
        (this.updatedAt = Td.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = up(this.current))
    }
    setPrevFrameValue(e = this.current) {
      ;(this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt)
    }
    onChange(e) {
      return (
        process.env.NODE_ENV !== 'production' &&
          tl(
            !1,
            'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'
          ),
        this.on('change', e)
      )
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new cp())
      let n = this.events[e].add(t)
      return e === 'change'
        ? () => {
            n(),
              Y.read(() => {
                this.events.change.getSize() || this.stop()
              })
          }
        : n
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear()
    }
    attach(e, t) {
      ;(this.passiveEffect = e), (this.stopPassiveEffect = t)
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify)
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n)
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
      return dp.current && dp.current.push(this), this.current
    }
    getPrevious() {
      return this.prev
    }
    getVelocity() {
      let e = Td.now()
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > lp
      )
        return 0
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, lp)
      return jd(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
    }
    start(e) {
      return (
        this.stop(),
        new Promise(t => {
          ;(this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation()
        })
      )
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
      return !!this.animation
    }
    clearAnimation() {
      delete this.animation
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
  }
function pp(e, t) {
  return new fp(e, t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs
function mp(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pp(n))
}
function hp(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = ll(e, t) || {}
  i = {
    ...i,
    ...n,
  }
  for (let t in i) mp(e, t, ap(i[t]))
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var gp = e => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
  _p = 'data-' + gp('framerAppearId')
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function vp(e) {
  return e.props[_p]
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/utils/is-motion-value.mjs
var yp = e => !!(e && e.getVelocity)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs
function bp(e) {
  return !!(yp(e) && e.add)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function xp(e, t) {
  let n = e.getValue('willChange')
  if (bp(n)) return n.add(t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function Sp({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0
  return (t[n] = !1), r
}
function Cp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t
  r && (a = r)
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i]
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t]
    if (i === void 0 || (l && Sp(l, t))) continue
    let o = {
        delay: n,
        ...xl(a || {}, t),
      },
      u = !1
    if (window.MotionHandoffAnimation) {
      let n = vp(e)
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, Y)
        e !== null && ((o.startTime = e), (u = !0))
      }
    }
    xp(e, t),
      r.start(
        rp(t, r, i, e.shouldReduceMotion && pl.has(t) ? { type: !1 } : o, e, u)
      )
    let d = r.animation
    d && c.push(d)
  }
  return (
    o &&
      Promise.all(c).then(() => {
        Y.update(() => {
          o && hp(e, o)
        })
      }),
    c
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function wp(e, t, n = {}) {
  let r = ll(e, t, n.type === 'exit' ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {}
  n.transitionOverride && (i = n.transitionOverride)
  let a = r ? () => Promise.all(Cp(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i
            return Tp(e, t, a + r, o, s, n)
          }
        : () => Promise.resolve(),
    { when: s } = i
  if (s) {
    let [e, t] = s === 'beforeChildren' ? [a, o] : [o, a]
    return e().then(() => t())
  } else return Promise.all([a(), o(n.delay)])
}
function Tp(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r
  return (
    Array.from(e.variantChildren)
      .sort(Ep)
      .forEach((e, r) => {
        e.notify('AnimationStart', t),
          o.push(
            wp(e, t, {
              ...a,
              delay: n + c(r),
            }).then(() => e.notify('AnimationComplete', t))
          )
      }),
    Promise.all(o)
  )
}
function Ep(e, t) {
  return e.sortNodePosition(t)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function Dp(e, t, n = {}) {
  e.notify('AnimationStart', t)
  let r
  if (Array.isArray(t)) {
    let i = t.map(t => wp(e, t, n))
    r = Promise.all(i)
  } else if (typeof t == 'string') r = wp(e, t, n)
  else {
    let i = typeof t == 'function' ? ll(e, t, n.custom) : t
    r = Promise.all(Cp(e, i, n))
  }
  return r.then(() => {
    e.notify('AnimationComplete', t)
  })
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/get-variant-context.mjs
var Op = dl.length
function kp(e) {
  if (!e) return
  if (!e.isControllingVariants) {
    let t = (e.parent && kp(e.parent)) || {}
    return e.props.initial !== void 0 && (t.initial = e.props.initial), t
  }
  let t = {}
  for (let n = 0; n < Op; n++) {
    let r = dl[n],
      i = e.props[r]
    ;(ol(i) || i === !1) && (t[r] = i)
  }
  return t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/animation-state.mjs
var Ap = [...ul].reverse(),
  jp = ul.length
function Mp(e) {
  return t => Promise.all(t.map(({ animation: t, options: n }) => Dp(e, t, n)))
}
function Np(e) {
  let t = Mp(e),
    n = Ip(),
    r = !0,
    i = t => (n, r) => {
      let i = ll(e, r, t === 'exit' ? e.presenceContext?.custom : void 0)
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i
        n = {
          ...n,
          ...r,
          ...t,
        }
      }
      return n
    }
  function a(n) {
    t = n(e)
  }
  function o(a) {
    let { props: o } = e,
      s = kp(e.parent) || {},
      c = [],
      l = /* @__PURE__ */ new Set(),
      u = {},
      d = Infinity
    for (let t = 0; t < jp; t++) {
      let f = Ap[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = ol(m),
        g = f === a ? p.isActive : null
      g === !1 && (d = t)
      let _ = m === s[f] && m !== o[f] && h
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          rl(m) ||
          typeof m == 'boolean')
      )
        continue
      let v = Pp(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {})
      g === !1 && (S = {})
      let { prevResolvedValues: C = {} } = p,
        w = {
          ...C,
          ...S,
        },
        T = t => {
          ;(y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0)
          let n = e.getValue(t)
          n && (n.liveStyle = !1)
        }
      for (let e in w) {
        let t = S[e],
          n = C[e]
        if (u.hasOwnProperty(e)) continue
        let r = !1
        ;(r = il(t) && il(n) ? !al(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : T(e)
            : t !== void 0 && l.has(e)
            ? T(e)
            : (p.protectedKeys[e] = !0)
      }
      ;(p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive &&
          (u = {
            ...u,
            ...S,
          }),
        r && e.blockInitialAnimation && (y = !1),
        y &&
          (!(_ && v) || b) &&
          c.push(
            ...x.map(e => ({
              animation: e,
              options: { type: f },
            }))
          )
    }
    if (l.size) {
      let t = {}
      l.forEach(n => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n)
        i && (i.liveStyle = !0), (t[n] = r ?? null)
      }),
        c.push({ animation: t })
    }
    let f = !!c.length
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    )
  }
  function s(t, r) {
    var i
    if (n[t].isActive === r) return Promise.resolve()
    ;(i = e.variantChildren) == null ||
      i.forEach(e => e.animationState?.setActive(t, r)),
      (n[t].isActive = r)
    let a = o(t)
    for (let e in n) n[e].protectedKeys = {}
    return a
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      ;(n = Ip()), (r = !0)
    },
  }
}
function Pp(e, t) {
  return typeof t == 'string' ? t !== e : Array.isArray(t) ? !al(t, e) : !1
}
function Fp(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  }
}
function Ip() {
  return {
    animate: Fp(!0),
    whileInView: Fp(),
    whileHover: Fp(),
    whileTap: Fp(),
    whileDrag: Fp(),
    whileFocus: Fp(),
    exit: Fp(),
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/Feature.mjs
var Lp = class {
    constructor(e) {
      ;(this.isMounted = !1), (this.node = e)
    }
    update() {}
  },
  Rp = class extends Lp {
    constructor(e) {
      super(e), (e.animationState ||= Np(e))
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps()
      rl(e) && (this.unmountControls = e.subscribe(this.node))
    }
    mount() {
      this.updateAnimationControlsSubscription()
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {}
      e !== t && this.updateAnimationControlsSubscription()
    }
    unmount() {
      var e
      this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this)
    }
  },
  zp = 0,
  Bp = {
    animation: { Feature: Rp },
    exit: {
      Feature: class extends Lp {
        constructor() {
          super(...arguments), (this.id = zp++)
        }
        update() {
          if (!this.node.presenceContext) return
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {}
          if (!this.node.animationState || e === n) return
          let r = this.node.animationState.setActive('exit', !e)
          t && !e && r.then(() => t(this.id))
        }
        mount() {
          let { register: e } = this.node.presenceContext || {}
          e && (this.unmount = e(this.id))
        }
        unmount() {}
      },
    },
  },
  Vp = e =>
    e.pointerType === 'mouse'
      ? typeof e.button != 'number' || e.button <= 0
      : e.isPrimary !== !1
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/event-info.mjs
function Hp(e, t = 'page') {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`],
    },
  }
}
var Up = e => t => Vp(t) && e(t, Hp(t))
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/add-dom-event.mjs
function Wp(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/events/add-pointer-event.mjs
function Gp(e, t, n, r) {
  return Wp(e, t, Up(n), r)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/distance.mjs
var Kp = (e, t) => Math.abs(e - t)
function qp(e, t) {
  let n = Kp(e.x, t.x),
    r = Kp(e.y, t.y)
  return Math.sqrt(n ** 2 + r ** 2)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/pan/PanSession.mjs
var Jp = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return
        let e = Zp(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n =
            qp(e.offset, {
              x: 0,
              y: 0,
            }) >= 3
        if (!t && !n) return
        let { point: r } = e,
          { timestamp: i } = jl
        this.history.push({
          ...r,
          timestamp: i,
        })
        let { onStart: a, onMove: o } = this.handlers
        t ||
          (a && a(this.lastMoveEvent, e),
          (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e)
      }),
      (this.handlePointerMove = (e, t) => {
        ;(this.lastMoveEvent = e),
          (this.lastMoveEventInfo = Yp(t, this.transformPagePoint)),
          Y.update(this.updatePoint, !0)
      }),
      (this.handlePointerUp = (e, t) => {
        this.end()
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers
        if (
          (this.dragSnapToOrigin && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return
        let a = Zp(
          e.type === 'pointercancel'
            ? this.lastMoveEventInfo
            : Yp(t, this.transformPagePoint),
          this.history
        )
        this.startEvent && n && n(e, a), r && r(e, a)
      }),
      !Vp(e))
    )
      return
    ;(this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window)
    let a = Yp(Hp(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = jl
    this.history = [
      {
        ...o,
        timestamp: s,
      },
    ]
    let { onSessionStart: c } = t
    c && c(e, Zp(a, this.history)),
      (this.removeListeners = tf(
        Gp(this.contextWindow, 'pointermove', this.handlePointerMove),
        Gp(this.contextWindow, 'pointerup', this.handlePointerUp),
        Gp(this.contextWindow, 'pointercancel', this.handlePointerUp)
      ))
  }
  updateHandlers(e) {
    this.handlers = e
  }
  end() {
    this.removeListeners && this.removeListeners(), Al(this.updatePoint)
  }
}
function Yp(e, t) {
  return t ? { point: t(e.point) } : e
}
function Xp(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y,
  }
}
function Zp({ point: e }, t) {
  return {
    point: e,
    delta: Xp(e, $p(t)),
    offset: Xp(e, Qp(t)),
    velocity: em(t, 0.1),
  }
}
function Qp(e) {
  return e[0]
}
function $p(e) {
  return e[e.length - 1]
}
function em(e, t) {
  if (e.length < 2)
    return {
      x: 0,
      y: 0,
    }
  let n = e.length - 1,
    r = null,
    i = $p(e)
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ml(t))); ) n--
  if (!r)
    return {
      x: 0,
      y: 0,
    }
  let a = hl(i.timestamp - r.timestamp)
  if (a === 0)
    return {
      x: 0,
      y: 0,
    }
  let o = {
    x: (i.x - r.x) / a,
    y: (i.y - r.y) / a,
  }
  return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function tm(e) {
  let t = null
  return () =>
    t === null
      ? ((t = e),
        () => {
          t = null
        })
      : !1
}
var nm = tm('dragHorizontal'),
  rm = tm('dragVertical')
function im(e) {
  let t = !1
  if (e === 'y') t = rm()
  else if (e === 'x') t = nm()
  else {
    let e = nm(),
      n = rm()
    e && n
      ? (t = () => {
          e(), n()
        })
      : (e && e(), n && n())
  }
  return t
}
function am() {
  let e = im(!0)
  return e ? (e(), !1) : !0
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/is-ref-object.mjs
function om(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.hasOwnProperty.call(e, 'current')
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var sm = 0.9999,
  cm = 1.0001,
  lm = -0.01,
  um = 0.01
function dm(e) {
  return e.max - e.min
}
function fm(e, t, n) {
  return Math.abs(e - t) <= n
}
function pm(e, t, n, r = 0.5) {
  ;(e.origin = r),
    (e.originPoint = Z(t.min, t.max, e.origin)),
    (e.scale = dm(n) / dm(t)),
    (e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= sm && e.scale <= cm) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= lm && e.translate <= um) || isNaN(e.translate)) &&
      (e.translate = 0)
}
function mm(e, t, n, r) {
  pm(e.x, t.x, n.x, r ? r.originX : void 0),
    pm(e.y, t.y, n.y, r ? r.originY : void 0)
}
function hm(e, t, n) {
  ;(e.min = n.min + t.min), (e.max = e.min + dm(t))
}
function gm(e, t, n) {
  hm(e.x, t.x, n.x), hm(e.y, t.y, n.y)
}
function _m(e, t, n) {
  ;(e.min = t.min - n.min), (e.max = e.min + dm(t))
}
function vm(e, t, n) {
  _m(e.x, t.x, n.x), _m(e.y, t.y, n.y)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function ym(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
  )
}
function bm(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  }
}
function xm(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: bm(e.x, n, i),
    y: bm(e.y, t, r),
  }
}
function Sm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    {
      min: n,
      max: r,
    }
  )
}
function Cm(e, t) {
  return {
    x: Sm(e.x, t.x),
    y: Sm(e.y, t.y),
  }
}
function wm(e, t) {
  let n = 0.5,
    r = dm(e),
    i = dm(t)
  return (
    i > r
      ? (n = nf(t.min, t.max - r, e.min))
      : r > i && (n = nf(e.min, e.max - i, t.min)),
    su(0, 1, n)
  )
}
function Tm(e, t) {
  let n = {}
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  )
}
var Em = 0.35
function Dm(e = Em) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Em),
    {
      x: Om(e, 'left', 'right'),
      y: Om(e, 'top', 'bottom'),
    }
  )
}
function Om(e, t, n) {
  return {
    min: km(e, t),
    max: km(e, n),
  }
}
function km(e, t) {
  return typeof e == 'number' ? e : e[t] || 0
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs
var Am = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
  }),
  jm = () => ({
    x: Am(),
    y: Am(),
  }),
  Mm = () => ({
    min: 0,
    max: 0,
  }),
  Q = () => ({
    x: Mm(),
    y: Mm(),
  })
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/each-axis.mjs
function Nm(e) {
  return [e('x'), e('y')]
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs
function Pm({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: {
      min: t,
      max: n,
    },
    y: {
      min: e,
      max: r,
    },
  }
}
function Fm({ x: e, y: t }) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min,
  }
}
function Im(e, t) {
  if (!t) return e
  let n = t({
      x: e.left,
      y: e.top,
    }),
    r = t({
      x: e.right,
      y: e.bottom,
    })
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x,
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs
function Lm(e) {
  return e === void 0 || e === 1
}
function Rm({ scale: e, scaleX: t, scaleY: n }) {
  return !Lm(e) || !Lm(t) || !Lm(n)
}
function zm(e) {
  return (
    Rm(e) ||
    Bm(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  )
}
function Bm(e) {
  return Vm(e.x) || Vm(e.y)
}
function Vm(e) {
  return e && e !== '0%'
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function Hm(e, t, n) {
  return n + t * (e - n)
}
function Um(e, t, n, r, i) {
  return i !== void 0 && (e = Hm(e, i, r)), Hm(e, n, r) + t
}
function Wm(e, t = 0, n = 1, r, i) {
  ;(e.min = Um(e.min, t, n, r, i)), (e.max = Um(e.max, t, n, r, i))
}
function Gm(e, { x: t, y: n }) {
  Wm(e.x, t.translate, t.scale, t.originPoint),
    Wm(e.y, n.translate, n.scale, n.originPoint)
}
var Km = 0.999999999999,
  qm = 1.0000000000001
function Jm(e, t, n, r = !1) {
  let i = n.length
  if (!i) return
  t.x = t.y = 1
  let a, o
  for (let s = 0; s < i; s++) {
    ;(a = n[s]), (o = a.projectionDelta)
    let { visualElement: i } = a.options
    ;(i && i.props.style && i.props.style.display === 'contents') ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Zm(e, {
          x: -a.scroll.offset.x,
          y: -a.scroll.offset.y,
        }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Gm(e, o)),
      r && zm(a.latestValues) && Zm(e, a.latestValues))
  }
  t.x < qm && t.x > Km && (t.x = 1), t.y < qm && t.y > Km && (t.y = 1)
}
function Ym(e, t) {
  ;(e.min += t), (e.max += t)
}
function Xm(e, t, n, r, i = 0.5) {
  Wm(e, t, n, Z(e.min, e.max, i), r)
}
function Zm(e, t) {
  Xm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Xm(e.y, t.y, t.scaleY, t.scale, t.originY)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs
function Qm(e, t) {
  return Pm(Im(e.getBoundingClientRect(), t))
}
function $m(e, t, n) {
  let r = Qm(e, n),
    { scroll: i } = t
  return i && (Ym(r.x, i.offset.x), Ym(r.y, i.offset.y)), r
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/get-context-window.mjs
var eh = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  th = /* @__PURE__ */ new WeakMap(),
  nh = class {
    constructor(e) {
      ;(this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = {
          x: 0,
          y: 0,
        }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = Q()),
        (this.visualElement = e)
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement
      if (n && n.isPresent === !1) return
      let r = e => {
          let { dragSnapToOrigin: n } = this.getProps()
          n ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Hp(e, 'page').point)
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps()
          if (
            n &&
            !r &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = im(n)),
            !this.openGlobalLock)
          )
            return
          ;(this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Nm(e => {
              let t = this.getAxisMotionValue(e).get() || 0
              if (pu.test(t)) {
                let { projection: n } = this.visualElement
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e]
                  r && (t = dm(r) * (parseFloat(t) / 100))
                }
              }
              this.originPoint[e] = t
            }),
            i && Y.postRender(() => i(e, t)),
            xp(this.visualElement, 'transform')
          let { animationState: a } = this.visualElement
          a && a.setActive('whileDrag', !0)
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps()
          if (!n && !this.openGlobalLock) return
          let { offset: o } = t
          if (r && this.currentDirection === null) {
            ;(this.currentDirection = ih(o)),
              this.currentDirection !== null && i && i(this.currentDirection)
            return
          }
          this.updateAxis('x', t.point, o),
            this.updateAxis('y', t.point, o),
            this.visualElement.render(),
            a && a(e, t)
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          Nm(
            e =>
              this.getAnimationState(e) === 'paused' &&
              this.getAxisMotionValue(e).animation?.play()
          ),
        { dragSnapToOrigin: c } = this.getProps()
      this.panSession = new Jp(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: a,
          onSessionEnd: o,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: eh(this.visualElement),
        }
      )
    }
    stop(e, t) {
      let n = this.isDragging
      if ((this.cancel(), !n)) return
      let { velocity: r } = t
      this.startAnimation(r)
      let { onDragEnd: i } = this.getProps()
      i && Y.postRender(() => i(e, t))
    }
    cancel() {
      this.isDragging = !1
      let { projection: e, animationState: t } = this.visualElement
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0)
      let { dragPropagation: n } = this.getProps()
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive('whileDrag', !1)
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps()
      if (!n || !rh(e, r, this.currentDirection)) return
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e]
      this.constraints &&
        this.constraints[e] &&
        (a = ym(a, this.constraints[e], this.elastic[e])),
        i.set(a)
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints
      e && om(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : e && n
        ? (this.constraints = xm(n.layoutBox, e))
        : (this.constraints = !1),
        (this.elastic = Dm(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Nm(e => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = Tm(n.layoutBox[e], this.constraints[e]))
          })
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps()
      if (!e || !om(e)) return !1
      let n = e.current
      Xl(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      )
      let { projection: r } = this.visualElement
      if (!r || !r.layout) return !1
      let i = $m(n, r.root, this.visualElement.getTransformPagePoint()),
        a = Cm(r.layout.layoutBox, i)
      if (t) {
        let e = t(Fm(a))
        ;(this.hasMutatedConstraints = !!e), e && (a = Pm(e))
      }
      return a
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = Nm(o => {
          if (!rh(o, t, this.currentDirection)) return
          let c = (s && s[o]) || {}
          a &&
            (c = {
              min: 0,
              max: 0,
            })
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: 'inertia',
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            }
          return this.startAxisValueAnimation(o, d)
        })
      return Promise.all(c).then(o)
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e)
      return (
        xp(this.visualElement, e),
        n.start(rp(e, n, 0, t, this.visualElement, !1))
      )
    }
    stopAnimation() {
      Nm(e => this.getAxisMotionValue(e).stop())
    }
    pauseAnimation() {
      Nm(e => this.getAxisMotionValue(e).animation?.pause())
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps()
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      )
    }
    snapToCursor(e) {
      Nm(t => {
        let { drag: n } = this.getProps()
        if (!rh(t, n, this.currentDirection)) return
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t)
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t]
          i.set(e[t] - Z(n, a, 0.5))
        }
      })
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement
      if (!om(t) || !n || !this.constraints) return
      this.stopAnimation()
      let r = {
        x: 0,
        y: 0,
      }
      Nm(e => {
        let t = this.getAxisMotionValue(e)
        if (t && this.constraints !== !1) {
          let n = t.get()
          r[e] = wm(
            {
              min: n,
              max: n,
            },
            this.constraints[e]
          )
        }
      })
      let { transformTemplate: i } = this.visualElement.getProps()
      ;(this.visualElement.current.style.transform = i ? i({}, '') : 'none'),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Nm(t => {
          if (!rh(t, e, null)) return
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t]
          n.set(Z(i, a, r[t]))
        })
    }
    addListeners() {
      if (!this.visualElement.current) return
      th.set(this.visualElement, this)
      let e = this.visualElement.current,
        t = Gp(e, 'pointerdown', e => {
          let { drag: t, dragListener: n = !0 } = this.getProps()
          t && n && this.start(e)
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps()
          om(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints())
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener('measure', n)
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        Y.read(n)
      let a = Wp(window, 'resize', () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(
          'didUpdate',
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (Nm(t => {
                let n = this.getAxisMotionValue(t)
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate))
              }),
              this.visualElement.render())
          }
        )
      return () => {
        a(), t(), i(), o && o()
      }
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = Em,
          dragMomentum: o = !0,
        } = e
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      }
    }
  }
function rh(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e)
}
function ih(e, t = 10) {
  let n = null
  return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/index.mjs
var ah = class extends Lp {
    constructor(e) {
      super(e),
        (this.removeGroupControls = J),
        (this.removeListeners = J),
        (this.controls = new nh(e))
    }
    mount() {
      let { dragControls: e } = this.node.getProps()
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || J)
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners()
    }
  },
  oh = e => (t, n) => {
    e && Y.postRender(() => e(t, n))
  },
  sh = class extends Lp {
    constructor() {
      super(...arguments), (this.removePointerDownListener = J)
    }
    onPointerDown(e) {
      this.session = new Jp(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: eh(this.node),
      })
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps()
      return {
        onSessionStart: oh(e),
        onStart: oh(t),
        onMove: n,
        onEnd: (e, t) => {
          delete this.session, r && Y.postRender(() => r(e, t))
        },
      }
    }
    mount() {
      this.removePointerDownListener = Gp(this.node.current, 'pointerdown', e =>
        this.onPointerDown(e)
      )
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end()
    }
  },
  ch = x(null)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function lh() {
  let e = E(ch)
  if (e === null) return [!0, null]
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = O()
  D(() => r(i), [])
  let a = T(() => n && n(i), [i, n])
  return !t && n ? [!1, a] : [!0]
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/LayoutGroupContext.mjs
var uh = x({}),
  dh = x({}),
  fh = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1,
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function ph(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100
}
var mh = {
    correct: (e, t) => {
      if (!t.target) return e
      if (typeof e == 'string')
        if (X.test(e)) e = parseFloat(e)
        else return e
      return `${ph(e, t.target.x)}% ${ph(e, t.target.y)}%`
    },
  },
  hh = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = sd.parse(e)
      if (i.length > 5) return r
      let a = sd.createTransformer(e),
        o = typeof i[0] == 'number' ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y
      ;(i[0 + o] /= s), (i[1 + o] /= c)
      let l = Z(s, c, 0.5)
      return (
        typeof i[2 + o] == 'number' && (i[2 + o] /= l),
        typeof i[3 + o] == 'number' && (i[3 + o] /= l),
        a(i)
      )
    },
  },
  gh = {}
function _h(e) {
  Object.assign(gh, e)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/frameloop/microtask.mjs
var { schedule: vh, cancel: yh } = kl(queueMicrotask, !1),
  bh = class extends y {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e
      _h(Sh),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener('animationComplete', () => {
            this.safeToRemove()
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (fh.hasEverUpdated = !0)
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                Y.postRender(() => {
                  let e = a.getStack()
                  ;(!e || !e.members.length) && this.safeToRemove()
                })),
          null)
        : null
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement
      e &&
        (e.root.didUpdate(),
        vh.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r))
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props
      e && e()
    }
    render() {
      return null
    }
  }
function xh(e) {
  let [t, n] = lh(),
    r = E(uh)
  return d(bh, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E(dh),
    isPresent: t,
    safeToRemove: n,
  })
}
var Sh = {
    borderRadius: {
      ...mh,
      applyTo: [
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
      ],
    },
    borderTopLeftRadius: mh,
    borderTopRightRadius: mh,
    borderBottomLeftRadius: mh,
    borderBottomRightRadius: mh,
    boxShadow: hh,
  },
  Ch = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
  wh = Ch.length,
  Th = e => (typeof e == 'string' ? parseFloat(e) : e),
  Eh = e => typeof e == 'number' || X.test(e)
function Dh(e, t, n, r, i, a) {
  i
    ? ((e.opacity = Z(0, n.opacity === void 0 ? 1 : n.opacity, kh(r))),
      (e.opacityExit = Z(t.opacity === void 0 ? 1 : t.opacity, 0, Ah(r))))
    : a &&
      (e.opacity = Z(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r
      ))
  for (let i = 0; i < wh; i++) {
    let a = `border${Ch[i]}Radius`,
      o = Oh(t, a),
      s = Oh(n, a)
    ;(o === void 0 && s === void 0) ||
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || Eh(o) === Eh(s)
        ? ((e[a] = Math.max(Z(Th(o), Th(s), r), 0)),
          (pu.test(s) || pu.test(o)) && (e[a] += '%'))
        : (e[a] = s))
  }
  ;(t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r))
}
function Oh(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t]
}
var kh = /*@__PURE__*/ jh(0, 0.5, Gl),
  Ah = /*@__PURE__*/ jh(0.5, 0.95, J)
function jh(e, t, n) {
  return r => (r < e ? 0 : r > t ? 1 : n(nf(e, t, r)))
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/copy.mjs
function Mh(e, t) {
  ;(e.min = t.min), (e.max = t.max)
}
function Nh(e, t) {
  Mh(e.x, t.x), Mh(e.y, t.y)
}
function Ph(e, t) {
  ;(e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function Fh(e, t, n, r, i) {
  return (
    (e -= t), (e = Hm(e, 1 / n, r)), i !== void 0 && (e = Hm(e, 1 / i, r)), e
  )
}
function Ih(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (pu.test(t) &&
      ((t = parseFloat(t)), (t = Z(o.min, o.max, t / 100) - o.min)),
    typeof t != 'number')
  )
    return
  let s = Z(a.min, a.max, r)
  e === a && (s -= t),
    (e.min = Fh(e.min, t, n, s, i)),
    (e.max = Fh(e.max, t, n, s, i))
}
function Lh(e, t, [n, r, i], a, o) {
  Ih(e, t[n], t[r], t[i], t.scale, a, o)
}
var Rh = ['x', 'scaleX', 'originX'],
  zh = ['y', 'scaleY', 'originY']
function Bh(e, t, n, r) {
  Lh(e.x, t, Rh, n ? n.x : void 0, r ? r.x : void 0),
    Lh(e.y, t, zh, n ? n.y : void 0, r ? r.y : void 0)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/utils.mjs
function Vh(e) {
  return e.translate === 0 && e.scale === 1
}
function Hh(e) {
  return Vh(e.x) && Vh(e.y)
}
function Uh(e, t) {
  return e.min === t.min && e.max === t.max
}
function Wh(e, t) {
  return Uh(e.x, t.x) && Uh(e.y, t.y)
}
function Gh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  )
}
function Kh(e, t) {
  return Gh(e.x, t.x) && Gh(e.y, t.y)
}
function qh(e) {
  return dm(e.x) / dm(e.y)
}
function Jh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/shared/stack.mjs
var Yh = class {
  constructor() {
    this.members = []
  }
  add(e) {
    op(this.members, e), e.scheduleRender()
  }
  remove(e) {
    if (
      (sp(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1]
      e && this.promote(e)
    }
  }
  relegate(e) {
    let t = this.members.findIndex(t => e === t)
    if (t === 0) return !1
    let n
    for (let e = t; e >= 0; e--) {
      let t = this.members[e]
      if (t.isPresent !== !1) {
        n = t
        break
      }
    }
    return n ? (this.promote(n), !0) : !1
  }
  promote(e, t) {
    let n = this.lead
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0)
      let { crossfade: r } = e.options
      r === !1 && n.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(e => {
      let { options: t, resumingFrom: n } = e
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete()
    })
  }
  scheduleRender() {
    this.members.forEach(e => {
      e.instance && e.scheduleRender(!1)
    })
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/transform.mjs
function Xh(e, t, n) {
  let r = '',
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n
    e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `)
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y
  return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || 'none'
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var Zh = (e, t) => e.depth - t.depth,
  Qh = class {
    constructor() {
      ;(this.children = []), (this.isDirty = !1)
    }
    add(e) {
      op(this.children, e), (this.isDirty = !0)
    }
    remove(e) {
      sp(this.children, e), (this.isDirty = !0)
    }
    forEach(e) {
      this.isDirty && this.children.sort(Zh),
        (this.isDirty = !1),
        this.children.forEach(e)
    }
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function $h(e) {
  let t = yp(e) ? e.get() : e
  return ip(t) ? t.toValue() : t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/delay.mjs
function eg(e, t) {
  let n = Td.now(),
    r = ({ timestamp: i }) => {
      let a = i - n
      a >= t && (Al(r), e(a - t))
    }
  return Y.read(r, !0), () => Al(r)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-element.mjs
function tg(e) {
  return e instanceof SVGElement && e.tagName !== 'svg'
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs
function ng(e, t, n) {
  let r = yp(e) ? e : pp(e)
  return r.start(rp('', r, t, n)), r.animation
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/node/create-projection-node.mjs
var rg = {
    type: 'projectionFrame',
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ig = typeof window < 'u' && window.MotionDebug !== void 0,
  ag = ['', 'X', 'Y', 'Z'],
  og = { visibility: 'hidden' },
  sg = 1e3,
  cg = 0
function lg(e, t, n, r) {
  let { latestValues: i } = t
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0))
}
function ug(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return
  let { visualElement: t } = e.options
  if (!t) return
  let n = vp(t)
  if (window.MotionHasOptimisedAnimation(n, 'transform')) {
    let { layout: t, layoutId: r } = e.options
    window.MotionCancelOptimisedAnimation(n, 'transform', Y, !(t || r))
  }
  let { parent: r } = e
  r && !r.hasCheckedOptimisedAppear && ug(r)
}
function dg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ;(this.id = cg++),
        (this.animationId = 0),
        (this.children = /* @__PURE__ */ new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = {
          x: 1,
          y: 1,
        }),
        (this.eventHandlers = /* @__PURE__ */ new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots())
        }),
        (this.updateProjection = () => {
          ;(this.projectionUpdateScheduled = !1),
            ig &&
              (rg.totalNodes =
                rg.resolvedTargetDeltas =
                rg.recalculatedProjection =
                  0),
            this.nodes.forEach(mg),
            this.nodes.forEach(xg),
            this.nodes.forEach(Sg),
            this.nodes.forEach(hg),
            ig && window.MotionDebug.record(rg)
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = /* @__PURE__ */ new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0)
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0
      this.root === this && (this.nodes = new Qh())
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new cp()),
        this.eventHandlers.get(e).add(t)
      )
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e)
      n && n.notify(...t)
    }
    hasListeners(e) {
      return this.eventHandlers.has(e)
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return
      ;(this.isSVG = tg(t)), (this.instance = t)
      let { layoutId: r, layout: i, visualElement: a } = this.options
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1)
        e(t, () => {
          ;(this.root.updateBlockedByResize = !0),
            n && n(),
            (n = eg(r, 250)),
            fh.hasAnimatedSinceResize &&
              ((fh.hasAnimatedSinceResize = !1), this.nodes.forEach(bg))
        })
      }
      r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            'didUpdate',
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ;(this.target = void 0), (this.relativeTarget = void 0)
                return
              }
              let i = this.options.transition || a.getDefaultTransition() || kg,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  a.getProps(),
                c = !this.targetLayout || !Kh(this.targetLayout, r) || n,
                l = !t && n
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l)
                let t = {
                  ...xl(i, 'layout'),
                  onPlay: o,
                  onComplete: s,
                }
                ;(a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t)
              } else
                t || bg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete()
              this.targetLayout = r
            }
          )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this)
      let e = this.getStack()
      e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Al(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      )
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Cg),
        this.animationId++)
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options
      return e && e.getProps().transformTemplate
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete()
        return
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          ug(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return
      this.isLayoutDirty = !0
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e]
        ;(t.shouldResetTransform = !0),
          t.updateScroll('snapshot'),
          t.options.layoutRoot && t.willUpdate(!1)
      }
      let { layoutId: t, layout: n } = this.options
      if (t === void 0 && !n) return
      let r = this.getTransformTemplate()
      ;(this.prevTransformTemplateValue = r
        ? r(this.latestValues, '')
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners('willUpdate')
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(_g)
        return
      }
      this.isUpdating || this.nodes.forEach(vg),
        (this.isUpdating = !1),
        this.nodes.forEach(yg),
        this.nodes.forEach(fg),
        this.nodes.forEach(pg),
        this.clearAllSnapshots()
      let e = Td.now()
      ;(jl.delta = su(0, 1e3 / 60, e - jl.timestamp)),
        (jl.timestamp = e),
        (jl.isProcessing = !0),
        Ml.update.process(jl),
        Ml.preRender.process(jl),
        Ml.render.process(jl),
        (jl.isProcessing = !1)
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), vh.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(gg), this.sharedNodes.forEach(wg)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Y.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      Y.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed()
      })
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure())
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll()
      let e = this.layout
      ;(this.layout = this.measure(!1)),
        (this.layoutCorrected = Q()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners('measure', this.layout.layoutBox)
      let { visualElement: t } = this.options
      t &&
        t.notify(
          'LayoutMeasure',
          this.layout.layoutBox,
          e ? e.layoutBox : void 0
        )
    }
    updateScroll(e = 'measure') {
      let t = !!(this.options.layoutScroll && this.instance)
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance)
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        }
      }
    }
    resetTransform() {
      if (!i) return
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !Hh(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, '') : void 0,
        a = r !== this.prevTransformTemplateValue
      e &&
        (t || zm(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender())
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t)
      return (
        e && (n = this.removeTransform(n)),
        Ng(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      )
    }
    measurePageBox() {
      let { visualElement: e } = this.options
      if (!e) return Q()
      let t = e.measureViewportBox()
      if (!(this.scroll?.wasRoot || this.path.some(Fg))) {
        let { scroll: e } = this.root
        e && (Ym(t.x, e.offset.x), Ym(t.y, e.offset.y))
      }
      return t
    }
    removeElementScroll(e) {
      let t = Q()
      if ((Nh(t, e), this.scroll?.wasRoot)) return t
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && Nh(t, e), Ym(t.x, i.offset.x), Ym(t.y, i.offset.y))
      }
      return t
    }
    applyTransform(e, t = !1) {
      let n = Q()
      Nh(n, e)
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e]
        !t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          Zm(n, {
            x: -r.scroll.offset.x,
            y: -r.scroll.offset.y,
          }),
          zm(r.latestValues) && Zm(n, r.latestValues)
      }
      return zm(this.latestValues) && Zm(n, this.latestValues), n
    }
    removeTransform(e) {
      let t = Q()
      Nh(t, e)
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e]
        if (!n.instance || !zm(n.latestValues)) continue
        Rm(n.latestValues) && n.updateSnapshot()
        let r = Q()
        Nh(r, n.measurePageBox()),
          Bh(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r)
      }
      return zm(this.latestValues) && Bh(t, this.latestValues), t
    }
    setTargetDelta(e) {
      ;(this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0)
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 ? !0 : e.crossfade,
      }
    }
    clearMeasurements() {
      ;(this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1)
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== jl.timestamp &&
        this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead()
      ;(this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty)
      let n = !!this.resumingFrom || this !== t
      if (
        !(
          e ||
          (n && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return
      let { layout: r, layoutId: i } = this.options
      if (!(!this.layout || !(r || i))) {
        if (
          ((this.resolvedRelativeTargetAt = jl.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent()
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Q()),
              (this.relativeTargetOrigin = Q()),
              vm(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                e.layout.layoutBox
              ),
              Nh(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0)
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Q()), (this.targetWithTransforms = Q())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                gm(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Nh(this.target, this.layout.layoutBox),
                Gm(this.target, this.targetDelta))
              : Nh(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1
            let e = this.getClosestProjectingParent()
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Q()),
                (this.relativeTargetOrigin = Q()),
                vm(this.relativeTargetOrigin, this.target, e.target),
                Nh(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0)
          }
          ig && rg.resolvedTargetDeltas++
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Rm(this.parent.latestValues) ||
          Bm(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      )
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === jl.timestamp && (n = !1),
        n)
      )
        return
      let { layout: r, layoutId: i } = this.options
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return
      Nh(this.layoutCorrected, this.layout.layoutBox)
      let a = this.treeScale.x,
        o = this.treeScale.y
      Jm(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = Q()))
      let { target: s } = e
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender())
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Ph(this.prevProjectionDelta.x, this.projectionDelta.x),
          Ph(this.prevProjectionDelta.y, this.projectionDelta.y)),
        mm(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !Jh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Jh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners('projectionUpdate', s)),
        ig && rg.recalculatedProjection++
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(e = !0) {
      var t
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack()
        e && e.scheduleRender()
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      ;(this.prevProjectionDelta = jm()),
        (this.projectionDelta = jm()),
        (this.projectionDeltaWithTransform = jm())
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = jm()
      ;(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t)
      let o = Q(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Og))
      this.animationProgress = 0
      let d
      ;(this.mixTargetDelta = t => {
        let n = t / 1e3
        Tg(a.x, e.x, n),
          Tg(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (vm(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Dg(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && Wh(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= Q()),
            Nh(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), Dh(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n)
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(e) {
      this.notifyListeners('animationStart'),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (Al(this.pendingAnimation), void 0)),
        (this.pendingAnimation = Y.update(() => {
          ;(fh.hasAnimatedSinceResize = !0),
            (this.currentAnimation = ng(0, sg, {
              ...e,
              onUpdate: t => {
                this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
              },
              onComplete: () => {
                e.onComplete && e.onComplete(), this.completeAnimation()
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0)
        }))
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0))
      let e = this.getStack()
      e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners('animationComplete')
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(sg),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e
      if (!(!t || !n || !r)) {
        if (
          this !== e &&
          this.layout &&
          r &&
          Pg(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || Q()
          let t = dm(this.layout.layoutBox.x)
          ;(n.x.min = e.target.x.min), (n.x.max = n.x.min + t)
          let r = dm(this.layout.layoutBox.y)
          ;(n.y.min = e.target.y.min), (n.y.max = n.y.min + r)
        }
        Nh(t, n),
          Zm(t, i),
          mm(this.projectionDeltaWithTransform, this.layoutCorrected, t, i)
      }
    }
    registerSharedNode(e, t) {
      this.sharedNodes.has(e) || this.sharedNodes.set(e, new Yh()),
        this.sharedNodes.get(e).add(t)
      let n = t.options.initialPromotionConfig
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      })
    }
    isLead() {
      let e = this.getStack()
      return e ? e.lead === this : !0
    }
    getLead() {
      let { layoutId: e } = this.options
      return (e && this.getStack()?.lead) || this
    }
    getPrevLead() {
      let { layoutId: e } = this.options
      return e ? this.getStack()?.prevLead : void 0
    }
    getStack() {
      let { layoutId: e } = this.options
      if (e) return this.root.sharedNodes.get(e)
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack()
      r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t })
    }
    relegate() {
      let e = this.getStack()
      return e ? e.relegate(this) : !1
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options
      if (!e) return
      let t = !1,
        { latestValues: n } = e
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return
      let r = {}
      n.z && lg('z', e, r, this.animationValues)
      for (let t = 0; t < ag.length; t++)
        lg(`rotate${ag[t]}`, e, r, this.animationValues),
          lg(`skew${ag[t]}`, e, r, this.animationValues)
      e.render()
      for (let t in r)
        e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t])
      e.scheduleRender()
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return
      if (!this.isVisible) return og
      let t = { visibility: '' },
        n = this.getTransformTemplate()
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ''),
          (t.pointerEvents = $h(e?.pointerEvents) || ''),
          (t.transform = n ? n(this.latestValues, '') : 'none'),
          t
        )
      let r = this.getLead()
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {}
        return (
          this.options.layoutId &&
            ((t.opacity =
              this.latestValues.opacity === void 0
                ? 1
                : this.latestValues.opacity),
            (t.pointerEvents = $h(e?.pointerEvents) || '')),
          this.hasProjected &&
            !zm(this.latestValues) &&
            ((t.transform = n ? n({}, '') : 'none'), (this.hasProjected = !1)),
          t
        )
      }
      let i = r.animationValues || r.latestValues
      this.applyTransformsToTarget(),
        (t.transform = Xh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          i
        )),
        n && (t.transform = n(i, t.transform))
      let { x: a, y: o } = this.projectionDelta
      ;(t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        r.animationValues
          ? (t.opacity =
              r === this
                ? i.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : i.opacityExit)
          : (t.opacity =
              r === this
                ? i.opacity === void 0
                  ? ''
                  : i.opacity
                : i.opacityExit === void 0
                ? 0
                : i.opacityExit)
      for (let e in gh) {
        if (i[e] === void 0) continue
        let { correct: n, applyTo: a } = gh[e],
          o = t.transform === 'none' ? i[e] : n(i[e], r)
        if (a) {
          let e = a.length
          for (let n = 0; n < e; n++) t[a[n]] = o
        } else t[e] = o
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? $h(e?.pointerEvents) || '' : 'none'),
        t
      )
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(e => e.currentAnimation?.stop()),
        this.root.nodes.forEach(_g),
        this.root.sharedNodes.clear()
    }
  }
}
function fg(e) {
  e.updateLayout()
}
function pg(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot
  if (e.isLead() && e.layout && t && e.hasListeners('didUpdate')) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source
    i === 'size'
      ? Nm(e => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = dm(r)
          ;(r.min = n[e].min), (r.max = r.min + i)
        })
      : Pg(i, t.layoutBox, n) &&
        Nm(r => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = dm(n[r])
          ;(i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o))
        })
    let o = jm()
    mm(o, n, t.layoutBox)
    let s = jm()
    a ? mm(s, e.applyTransform(r, !0), t.measuredBox) : mm(s, n, t.layoutBox)
    let c = !Hh(o),
      l = !1
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent()
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r
        if (i && a) {
          let o = Q()
          vm(o, t.layoutBox, i.layoutBox)
          let s = Q()
          vm(s, n, a.layoutBox),
            Kh(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r))
        }
      }
    }
    e.notifyListeners('didUpdate', {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    })
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options
    t && t()
  }
  e.options.transition = void 0
}
function mg(e) {
  ig && rg.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty))
}
function hg(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function gg(e) {
  e.clearSnapshot()
}
function _g(e) {
  e.clearMeasurements()
}
function vg(e) {
  e.isLayoutDirty = !1
}
function yg(e) {
  let { visualElement: t } = e.options
  t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
    e.resetTransform()
}
function bg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0)
}
function xg(e) {
  e.resolveTargetDelta()
}
function Sg(e) {
  e.calcProjection()
}
function Cg(e) {
  e.resetSkewAndRotation()
}
function wg(e) {
  e.removeLeadSnapshot()
}
function Tg(e, t, n) {
  ;(e.translate = Z(t.translate, 0, n)),
    (e.scale = Z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint)
}
function Eg(e, t, n, r) {
  ;(e.min = Z(t.min, n.min, r)), (e.max = Z(t.max, n.max, r))
}
function Dg(e, t, n, r) {
  Eg(e.x, t.x, n.x, r), Eg(e.y, t.y, n.y, r)
}
function Og(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
var kg = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
  },
  Ag = e =>
    typeof navigator < 'u' &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  jg = Ag('applewebkit/') && !Ag('chrome/') ? Math.round : J
function Mg(e) {
  ;(e.min = jg(e.min)), (e.max = jg(e.max))
}
function Ng(e) {
  Mg(e.x), Mg(e.y)
}
function Pg(e, t, n) {
  return e === 'position' || (e === 'preserve-aspect' && !fm(qh(t), qh(n), 0.2))
}
function Fg(e) {
  return e !== e.root && e.scroll?.wasRoot
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var Ig = dg({
    attachResizeListener: (e, t) => Wp(e, 'resize', t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Lg = { current: void 0 },
  Rg = dg({
    measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop,
    }),
    defaultParent: () => {
      if (!Lg.current) {
        let e = new Ig({})
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Lg.current = e)
      }
      return Lg.current
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? 'none' : t
    },
    checkIsScrollRoot: e => window.getComputedStyle(e).position === 'fixed',
  }),
  zg = {
    pan: { Feature: sh },
    drag: {
      Feature: ah,
      ProjectionNode: Rg,
      MeasureLayout: xh,
    },
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/hover.mjs
function Bg(e, t) {
  let n = t ? 'pointerenter' : 'pointerleave',
    r = t ? 'onHoverStart' : 'onHoverEnd'
  return Gp(
    e.current,
    n,
    (n, i) => {
      if (n.pointerType === 'touch' || am()) return
      let a = e.getProps()
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive('whileHover', t)
      let o = a[r]
      o && Y.postRender(() => o(n, i))
    },
    { passive: !e.getProps()[r] }
  )
}
var Vg = class extends Lp {
    mount() {
      this.unmount = tf(Bg(this.node, !0), Bg(this.node, !1))
    }
    unmount() {}
  },
  Hg = class extends Lp {
    constructor() {
      super(...arguments), (this.isActive = !1)
    }
    onFocus() {
      let e = !1
      try {
        e = this.node.current.matches(':focus-visible')
      } catch {
        e = !0
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive('whileFocus', !0),
        (this.isActive = !0))
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive('whileFocus', !1),
        (this.isActive = !1))
    }
    mount() {
      this.unmount = tf(
        Wp(this.node.current, 'focus', () => this.onFocus()),
        Wp(this.node.current, 'blur', () => this.onBlur())
      )
    }
    unmount() {}
  },
  Ug = (e, t) => (t ? (e === t ? !0 : Ug(e, t.parentElement)) : !1)
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/gestures/press.mjs
function Wg(e, t) {
  if (!t) return
  let n = new PointerEvent('pointer' + e)
  t(n, Hp(n))
}
var Gg = class extends Lp {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = J),
        (this.removeEndListeners = J),
        (this.removeAccessibleListeners = J),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return
          this.removeEndListeners()
          let n = this.node.getProps(),
            r = Gp(
              window,
              'pointerup',
              (e, t) => {
                if (!this.checkPressEnd()) return
                let {
                    onTap: n,
                    onTapCancel: r,
                    globalTapTarget: i,
                  } = this.node.getProps(),
                  a = !i && !Ug(this.node.current, e.target) ? r : n
                a && Y.update(() => a(e, t))
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            i = Gp(window, 'pointercancel', (e, t) => this.cancelPress(e, t), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            })
          ;(this.removeEndListeners = tf(r, i)), this.startPress(e, t)
        }),
        (this.startAccessiblePress = () => {
          let e = Wp(this.node.current, 'keydown', e => {
              if (e.key !== 'Enter' || this.isPressing) return
              let t = e => {
                e.key !== 'Enter' ||
                  !this.checkPressEnd() ||
                  Wg('up', (e, t) => {
                    let { onTap: n } = this.node.getProps()
                    n && Y.postRender(() => n(e, t))
                  })
              }
              this.removeEndListeners(),
                (this.removeEndListeners = Wp(this.node.current, 'keyup', t)),
                Wg('down', (e, t) => {
                  this.startPress(e, t)
                })
            }),
            t = Wp(this.node.current, 'blur', () => {
              this.isPressing && Wg('cancel', (e, t) => this.cancelPress(e, t))
            })
          this.removeAccessibleListeners = tf(e, t)
        })
    }
    startPress(e, t) {
      this.isPressing = !0
      let { onTapStart: n, whileTap: r } = this.node.getProps()
      r &&
        this.node.animationState &&
        this.node.animationState.setActive('whileTap', !0),
        n && Y.postRender(() => n(e, t))
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive('whileTap', !1),
        !am()
      )
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return
      let { onTapCancel: n } = this.node.getProps()
      n && Y.postRender(() => n(e, t))
    }
    mount() {
      let e = this.node.getProps(),
        t = Gp(
          e.globalTapTarget ? window : this.node.current,
          'pointerdown',
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = Wp(this.node.current, 'focus', this.startAccessiblePress)
      this.removeStartListeners = tf(t, n)
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
  },
  Kg = /* @__PURE__ */ new WeakMap(),
  qg = /* @__PURE__ */ new WeakMap(),
  Jg = e => {
    let t = Kg.get(e.target)
    t && t(e)
  },
  Yg = e => {
    e.forEach(Jg)
  }
function Xg({ root: e, ...t }) {
  let n = e || document
  qg.has(n) || qg.set(n, {})
  let r = qg.get(n),
    i = JSON.stringify(t)
  return (
    r[i] ||
      (r[i] = new IntersectionObserver(Yg, {
        root: e,
        ...t,
      })),
    r[i]
  )
}
function Zg(e, t, n) {
  let r = Xg(t)
  return (
    Kg.set(e, n),
    r.observe(e),
    () => {
      Kg.delete(e), r.unobserve(e)
    }
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/viewport/index.mjs
var Qg = {
    some: 0,
    all: 1,
  },
  $g = class extends Lp {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1)
    }
    startObserver() {
      this.unmount()
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = 'some', once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == 'number' ? r : Qg[r],
        }
      return Zg(this.node.current, a, e => {
        let { isIntersecting: t } = e
        if (
          this.isInView === t ||
          ((this.isInView = t), i && !t && this.hasEnteredView)
        )
          return
        t && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive('whileInView', t)
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r
        a && a(e)
      })
    }
    mount() {
      this.startObserver()
    }
    update() {
      if (typeof IntersectionObserver > 'u') return
      let { props: e, prevProps: t } = this.node
      ;['amount', 'margin', 'root'].some(e_(e, t)) && this.startObserver()
    }
    unmount() {}
  }
function e_({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return n => e[n] !== t[n]
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/gestures.mjs
var t_ = {
    inView: { Feature: $g },
    tap: { Feature: Gg },
    focus: { Feature: Hg },
    hover: { Feature: Vg },
  },
  n_ = {
    layout: {
      ProjectionNode: Rg,
      MeasureLayout: xh,
    },
  },
  r_ = x({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: 'never',
  }),
  i_ = x({}),
  a_ = typeof window < 'u',
  o_ = a_ ? te : D,
  s_ = x({ strict: !1 })
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function c_(e, t, n, r, i) {
  let { visualElement: a } = E(i_),
    o = E(s_),
    s = E(ch),
    c = E(r_).reducedMotion,
    l = A()
  ;(r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      }))
  let u = l.current,
    d = E(dh)
  u &&
    !u.projection &&
    i &&
    (u.type === 'html' || u.type === 'svg') &&
    l_(l.current, n, i, d)
  let f = A(!1)
  ee(() => {
    u && f.current && u.update(n, s)
  })
  let p = n[_p],
    m = A(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p)
    )
  return (
    o_(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        vh.render(u.render),
        m.current && u.animationState && u.animationState.animateChanges())
    }),
    D(() => {
      u &&
        (!m.current && u.animationState && u.animationState.animateChanges(),
        (m.current &&=
          (queueMicrotask(() => {
            var e
            ;(e = window.MotionHandoffMarkAsComplete) == null ||
              e.call(window, p)
          }),
          !1)))
    }),
    u
  )
}
function l_(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
  } = t
  ;(e.projection = new n(
    e.latestValues,
    t['data-framer-portal-id'] ? void 0 : u_(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && om(s)),
      visualElement: e,
      animationType: typeof a == 'string' ? a : 'both',
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    })
}
function u_(e) {
  if (e) return e.options.allowProjection === !1 ? u_(e.parent) : e.projection
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function d_(e, t, n) {
  return T(
    r => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == 'function' ? n(r) : om(n) && (n.current = r))
    },
    [t]
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function f_(e) {
  return rl(e.animate) || dl.some(t => ol(e[t]))
}
function p_(e) {
  return !!(f_(e) || e.variants)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/utils.mjs
function m_(e, t) {
  if (f_(e)) {
    let { initial: t, animate: n } = e
    return {
      initial: t === !1 || ol(t) ? t : void 0,
      animate: ol(n) ? n : void 0,
    }
  }
  return e.inherit === !1 ? {} : t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/create.mjs
function h_(e) {
  let { initial: t, animate: n } = m_(e, E(i_))
  return k(
    () => ({
      initial: t,
      animate: n,
    }),
    [g_(t), g_(n)]
  )
}
function g_(e) {
  return Array.isArray(e) ? e.join(' ') : e
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/definitions.mjs
var __ = {
    animation: [
      'animate',
      'variants',
      'whileHover',
      'whileTap',
      'exit',
      'whileInView',
      'whileFocus',
      'whileDrag',
    ],
    exit: ['exit'],
    drag: ['drag', 'dragControls'],
    focus: ['whileFocus'],
    hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
    tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
    pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
    inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
    layout: ['layout', 'layoutId'],
  },
  v_ = {}
for (let e in __) v_[e] = { isEnabled: t => __[e].some(e => !!t[e]) }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/features/load-features.mjs
function y_(e) {
  for (let t in e)
    v_[t] = {
      ...v_[t],
      ...e[t],
    }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/symbol.mjs
var b_ = Symbol.for('motionComponentSymbol')
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/index.mjs
function x_({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && y_(e)
  function a(a, o) {
    let s,
      c = {
        ...E(r_),
        ...a,
        layoutId: S_(a),
      },
      { isStatic: l } = c,
      u = h_(a),
      p = r(a, l)
    if (!l && a_) {
      C_(c, e)
      let n = w_(c)
      ;(s = n.MeasureLayout),
        (u.visualElement = c_(i, p, c, t, n.ProjectionNode))
    }
    return f(i_.Provider, {
      value: u,
      children: [
        s && u.visualElement
          ? d(s, {
              visualElement: u.visualElement,
              ...c,
            })
          : null,
        n(i, a, d_(p, u.visualElement, o), p, l, u.visualElement),
      ],
    })
  }
  let o = C(a)
  return (o[b_] = i), o
}
function S_({ layoutId: e }) {
  let t = E(uh).id
  return t && e !== void 0 ? t + '-' + e : e
}
function C_(e, t) {
  let n = E(s_).strict
  if (process.env.NODE_ENV !== 'production' && t && n) {
    let t =
      'You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.'
    e.ignoreStrict ? Yl(!1, t) : Xl(!1, t)
  }
}
function w_(e) {
  let { drag: t, layout: n } = v_
  if (!t && !n) return {}
  let r = {
    ...t,
    ...n,
  }
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var T_ = [
  'animate',
  'circle',
  'defs',
  'desc',
  'ellipse',
  'g',
  'image',
  'line',
  'filter',
  'marker',
  'mask',
  'metadata',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'rect',
  'stop',
  'switch',
  'symbol',
  'svg',
  'text',
  'tspan',
  'use',
  'view',
]
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function E_(e) {
  return typeof e != 'string' || e.includes('-')
    ? !1
    : !!(T_.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs
function D_(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r))
  for (let t in n) e.style.setProperty(t, n[t])
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var O_ = new Set([
  'baseFrequency',
  'diffuseConstant',
  'kernelMatrix',
  'kernelUnitLength',
  'keySplines',
  'keyTimes',
  'limitingConeAngle',
  'markerHeight',
  'markerWidth',
  'numOctaves',
  'targetX',
  'targetY',
  'surfaceScale',
  'specularConstant',
  'specularExponent',
  'stdDeviation',
  'tableValues',
  'viewBox',
  'gradientTransform',
  'pathLength',
  'startOffset',
  'textLength',
  'lengthAdjust',
])
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs
function k_(e, t, n, r) {
  D_(e, t, void 0, r)
  for (let n in t.attrs) e.setAttribute(O_.has(n) ? n : gp(n), t.attrs[n])
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function A_(e, { layout: t, layoutId: n }) {
  return (
    pl.has(e) ||
    e.startsWith('origin') ||
    ((t || n !== void 0) && (!!gh[e] || e === 'opacity'))
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function j_(e, t, n) {
  let { style: r } = e,
    i = {}
  for (let a in r)
    (yp(r[a]) ||
      (t.style && yp(t.style[a])) ||
      A_(a, e) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a])
  return i
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function M_(e, t, n) {
  let r = j_(e, t, n)
  for (let n in e)
    if (yp(e[n]) || yp(t[n])) {
      let t =
        fl.indexOf(n) === -1
          ? n
          : 'attr' + n.charAt(0).toUpperCase() + n.substring(1)
      r[t] = e[n]
    }
  return r
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/use-constant.mjs
function N_(e) {
  let t = A(null)
  return t.current === null && (t.current = e()), t.current
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function P_(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  a
) {
  let o = {
    latestValues: I_(r, i, a, e),
    renderState: t(),
  }
  return n && (o.mount = e => n(r, e, o)), o
}
var F_ = e => (t, n) => {
  let r = E(i_),
    i = E(ch),
    a = () => P_(e, t, r, i)
  return n ? a() : N_(a)
}
function I_(e, t, n, r) {
  let i = {},
    a = r(e, {})
  for (let e in a) i[e] = $h(a[e])
  let { initial: o, animate: s } = e,
    c = f_(e),
    l = p_(e)
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate))
  let u = n ? n.initial === !1 : !1
  u ||= o === !1
  let d = u ? s : o
  if (d && typeof d != 'boolean' && !rl(d)) {
    let t = Array.isArray(d) ? d : [d]
    for (let n = 0; n < t.length; n++) {
      let r = cl(e, t[n])
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r
        for (let e in n) {
          let t = n[e]
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0
            t = t[e]
          }
          t !== null && (i[e] = t)
        }
        for (let t in e) i[t] = e[t]
      }
    }
  }
  return i
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var L_ = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  }),
  R_ = () => ({
    ...L_(),
    attrs: {},
  }),
  z_ = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
  B_ = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    transformPerspective: 'perspective',
  },
  V_ = fl.length
function H_(e, t, n) {
  let r = '',
    i = !0
  for (let a = 0; a < V_; a++) {
    let o = fl[a],
      s = e[o]
    if (s === void 0) continue
    let c = !0
    if (
      ((c =
        typeof s == 'number'
          ? s === +!!o.startsWith('scale')
          : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = z_(s, hd[o])
      if (!c) {
        i = !1
        let t = B_[o] || o
        r += `${t}(${e}) `
      }
      n && (t[o] = e)
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs
function U_(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1
  for (let e in t) {
    let n = t[e]
    if (pl.has(e)) {
      o = !0
      continue
    } else if ($l(e)) {
      i[e] = n
      continue
    } else {
      let t = z_(n, hd[e])
      e.startsWith('origin') ? ((s = !0), (a[e] = t)) : (r[e] = t)
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = H_(t, e.transform, n))
        : (r.transform &&= 'none')),
    s)
  ) {
    let { originX: e = '50%', originY: t = '50%', originZ: n = 0 } = a
    r.transformOrigin = `${e} ${t} ${n}`
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function W_(e, t, n) {
  return typeof e == 'string' ? e : X.transform(t + n * e)
}
function G_(e, t, n) {
  return `${W_(t, e.x, e.width)} ${W_(n, e.y, e.height)}`
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs
var K_ = {
    offset: 'stroke-dashoffset',
    array: 'stroke-dasharray',
  },
  q_ = {
    offset: 'strokeDashoffset',
    array: 'strokeDasharray',
  }
function J_(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1
  let a = i ? K_ : q_
  e[a.offset] = X.transform(-r)
  let o = X.transform(t),
    s = X.transform(n)
  e[a.array] = `${o} ${s}`
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function Y_(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d
) {
  if ((U_(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox)
    return
  }
  ;(e.attrs = e.style), (e.style = {})
  let { attrs: f, style: p, dimensions: m } = e
  f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = G_(
        m,
        i === void 0 ? 0.5 : i,
        a === void 0 ? 0.5 : a
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && J_(f, o, s, c, !1)
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
var X_ = e => typeof e == 'string' && e.toLowerCase() === 'svg',
  Z_ = {
    useVisualState: F_({
      scrapeMotionValuesFromProps: M_,
      createRenderState: R_,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        Y.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == 'function'
                ? t.getBBox()
                : t.getBoundingClientRect()
          } catch {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
            }
          }
        }),
          Y.render(() => {
            Y_(n, r, X_(t.tagName), e.transformTemplate), k_(t, n)
          })
      },
    }),
  },
  Q_ = {
    useVisualState: F_({
      scrapeMotionValuesFromProps: j_,
      createRenderState: L_,
    }),
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/use-props.mjs
function $_(e, t, n) {
  for (let r in t) !yp(t[r]) && !A_(r, n) && (e[r] = t[r])
}
function ev({ transformTemplate: e }, t) {
  return k(() => {
    let n = L_()
    return U_(n, t, e), Object.assign({}, n.vars, n.style)
  }, [t])
}
function tv(e, t) {
  let n = e.style || {},
    r = {}
  return $_(r, n, e), Object.assign(r, ev(e, t)), r
}
function nv(e, t) {
  let n = {},
    r = tv(e, t)
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
      (r.touchAction =
        e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/valid-prop.mjs
var rv = new Set(
  /* @__PURE__ */ 'animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport'.split(
    '.'
  )
)
function iv(e) {
  return (
    e.startsWith('while') ||
    (e.startsWith('drag') && e !== 'draggable') ||
    e.startsWith('layout') ||
    e.startsWith('onTap') ||
    e.startsWith('onPan') ||
    e.startsWith('onLayout') ||
    rv.has(e)
  )
}
//#endregion
//#region node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function av(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var ov = xe(() => {}),
  sv = /* @__PURE__ */ Se({ default: () => lv }),
  cv,
  lv,
  uv = xe(() => {
    ov(),
      (cv =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/),
      (lv = /* #__PURE__ */ av(function (e) {
        return (
          cv.test(e) ||
          (e.charCodeAt(0) === 111 &&
            e.charCodeAt(1) === 110 &&
            e.charCodeAt(2) < 91)
        )
      }))
  }),
  dv = e => !iv(e)
function fv(e) {
  e && (dv = t => (t.startsWith('on') ? !iv(t) : e(t)))
}
try {
  fv((uv(), Te(sv)).default)
} catch {}
function pv(e, t, n) {
  let r = {}
  for (let i in e)
    (i === 'values' && typeof e.values == 'object') ||
      ((dv(i) ||
        (n === !0 && iv(i)) ||
        (!t && !iv(i)) ||
        (e.draggable && i.startsWith('onDrag'))) &&
        (r[i] = e[i]))
  return r
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/svg/use-props.mjs
function mv(e, t, n, r) {
  let i = k(() => {
    let n = R_()
    return (
      Y_(n, t, X_(r), e.transformTemplate),
      {
        ...n.attrs,
        style: { ...n.style },
      }
    )
  }, [t])
  if (e.style) {
    let t = {}
    $_(t, e.style, e),
      (i.style = {
        ...t,
        ...i.style,
      })
  }
  return i
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/dom/use-render.mjs
function hv(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (E_(t) ? mv : nv)(n, i, a, t),
      s = pv(n, typeof t == 'string', e),
      c =
        t === b
          ? {}
          : {
              ...s,
              ...o,
              ref: r,
            },
      { children: l } = n,
      u = k(() => (yp(l) ? l.get() : l), [l])
    return S(t, {
      ...c,
      children: u,
    })
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-factory.mjs
function gv(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return x_({
      ...(E_(n) ? Z_ : Q_),
      preloadedFeatures: e,
      useRender: hv(r),
      createVisualElement: t,
      Component: n,
    })
  }
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/state.mjs
var _v = { current: null },
  vv = { current: !1 }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs
function yv() {
  if (((vv.current = !0), a_))
    if (window.matchMedia) {
      let e = window.matchMedia('(prefers-reduced-motion)'),
        t = () => (_v.current = e.matches)
      e.addListener(t), t()
    } else _v.current = !1
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs
function bv(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r]
    if (yp(i))
      e.addValue(r, i),
        process.env.NODE_ENV === 'development' &&
          tl(
            i.version === '11.11.13',
            `Attempting to mix Motion versions ${i.version} with 11.11.13 may not work as expected.`
          )
    else if (yp(a)) e.addValue(r, pp(i, { owner: e }))
    else if (a !== i)
      if (e.hasValue(r)) {
        let t = e.getValue(r)
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i)
      } else {
        let t = e.getStaticValue(r)
        e.addValue(r, pp(t === void 0 ? i : t, { owner: e }))
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r)
  return t
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs
var xv = /* @__PURE__ */ new WeakMap(),
  Sv = [...Eu, qu, sd],
  Cv = e => Sv.find(Tu(e)),
  wv = [
    'AnimationStart',
    'AnimationComplete',
    'Update',
    'BeforeLayoutMeasure',
    'LayoutMeasure',
    'LayoutAnimationStart',
    'LayoutAnimationComplete',
  ],
  Tv = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {}
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {}
    ) {
      ;(this.current = null),
        (this.children = /* @__PURE__ */ new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = /* @__PURE__ */ new Map()),
        (this.KeyframeResolver = Pu),
        (this.features = {}),
        (this.valueSubscriptions = /* @__PURE__ */ new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify('Update', this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ))
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = Td.now()
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), Y.render(this.render, !1, !0))
        })
      let { latestValues: s, renderState: c } = a
      ;(this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = f_(t)),
        (this.isVariantNode = p_(t)),
        this.isVariantNode &&
          (this.variantChildren = /* @__PURE__ */ new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current))
      let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this
      )
      for (let e in u) {
        let t = u[e]
        s[e] !== void 0 && yp(t) && t.set(s[e], !1)
      }
    }
    mount(e) {
      ;(this.current = e),
        xv.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        vv.current || yv(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === 'never'
            ? !1
            : this.reducedMotionConfig === 'always'
            ? !0
            : _v.current),
        process.env.NODE_ENV !== 'production' &&
          tl(
            this.shouldReduceMotion !== !0,
            'You have Reduced Motion enabled on your device. Animations may not appear as expected.'
          ),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
      xv.delete(this.current),
        this.projection && this.projection.unmount(),
        Al(this.notifyUpdate),
        Al(this.render),
        this.valueSubscriptions.forEach(e => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this)
      for (let e in this.events) this.events[e].clear()
      for (let e in this.features) {
        let t = this.features[e]
        t && (t.unmount(), (t.isMounted = !1))
      }
      this.current = null
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)()
      let n = pl.has(e),
        r = t.on('change', t => {
          ;(this.latestValues[e] = t),
            this.props.onUpdate && Y.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0)
        }),
        i = t.on('renderRequest', this.scheduleRender),
        a
      window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), i(), a && a(), t.owner && t.stop()
        })
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current)
    }
    updateFeatures() {
      let e = 'animation'
      for (e in v_) {
        let t = v_[e]
        if (!t) continue
        let { isEnabled: n, Feature: r } = t
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e]
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0))
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : Q()
    }
    getStaticValue(e) {
      return this.latestValues[e]
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t
    }
    update(e, t) {
      ;(e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t)
      for (let t = 0; t < wv.length; t++) {
        let n = wv[t]
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n])
        let r = e['on' + n]
        r && (this.propEventSubscriptions[n] = this.on(n, r))
      }
      ;(this.prevMotionValues = bv(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
      return this.props
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0
    }
    getDefaultTransition() {
      return this.props.transition
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode()
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        )
    }
    addValue(e, t) {
      let n = this.values.get(e)
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()))
    }
    removeValue(e) {
      this.values.delete(e)
      let t = this.valueSubscriptions.get(e)
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState)
    }
    hasValue(e) {
      return this.values.has(e)
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e]) return this.props.values[e]
      let n = this.values.get(e)
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = pp(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      )
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options)
      return (
        n != null &&
          (typeof n == 'string' && (Zl(n) || ql(n))
            ? (n = parseFloat(n))
            : !Cv(n) && sd.test(t) && (n = vd(e, t)),
          this.setBaseTarget(e, yp(n) ? n.get() : n)),
        yp(n) ? n.get() : n
      )
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n
      if (typeof t == 'string' || typeof t == 'object') {
        let r = cl(this.props, t, this.presenceContext?.custom)
        r && (n = r[e])
      }
      if (t && n !== void 0) return n
      let r = this.getBaseTargetFromProps(this.props, e)
      return r !== void 0 && !yp(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
        ? void 0
        : this.baseTarget[e]
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new cp()), this.events[e].add(t)
      )
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t)
    }
  },
  Ev = class extends Tv {
    constructor() {
      super(...arguments), (this.KeyframeResolver = xd)
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e]
    }
  }
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function Dv(e) {
  return window.getComputedStyle(e)
}
var Ov = class extends Ev {
    constructor() {
      super(...arguments), (this.type = 'html'), (this.renderInstance = D_)
    }
    readValueFromInstance(e, t) {
      if (pl.has(t)) {
        let e = _d(t)
        return (e && e.default) || 0
      } else {
        let n = Dv(e),
          r = ($l(t) ? n.getPropertyValue(t) : n[t]) || 0
        return typeof r == 'string' ? r.trim() : r
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return Qm(e, t)
    }
    build(e, t, n) {
      U_(e, t, n.transformTemplate)
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return j_(e, t, n)
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription)
      let { children: e } = this.props
      yp(e) &&
        (this.childSubscription = e.on('change', e => {
          this.current && (this.current.textContent = `${e}`)
        }))
    }
  },
  kv = class extends Ev {
    constructor() {
      super(...arguments),
        (this.type = 'svg'),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = Q)
    }
    getBaseTargetFromProps(e, t) {
      return e[t]
    }
    readValueFromInstance(e, t) {
      if (pl.has(t)) {
        let e = _d(t)
        return (e && e.default) || 0
      }
      return (t = O_.has(t) ? t : gp(t)), e.getAttribute(t)
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return M_(e, t, n)
    }
    build(e, t, n) {
      Y_(e, t, this.isSVGTag, n.transformTemplate)
    }
    renderInstance(e, t, n, r) {
      k_(e, t, n, r)
    }
    mount(e) {
      ;(this.isSVGTag = X_(e.tagName)), super.mount(e)
    }
  },
  Av = (e, t) => (E_(e) ? new kv(t) : new Ov(t, { allowProjection: e !== b })),
  jv = /*@__PURE__*/ nl(
    /* @__PURE__ */ gv(
      {
        ...Bp,
        ...t_,
        ...zg,
        ...n_,
      },
      Av
    )
  ),
  Mv = class extends g.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current
        ;(e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft)
      }
      return null
    }
    componentDidUpdate() {}
    render() {
      return this.props.children
    }
  }
function Nv({ children: e, isPresent: t }) {
  let n = O(),
    r = A(null),
    i = A({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    }),
    { nonce: a } = E(r_)
  return (
    ee(() => {
      let { width: e, height: o, top: s, left: c } = i.current
      if (t || !r.current || !e || !o) return
      r.current.dataset.motionPopId = n
      let l = document.createElement('style')
      return (
        a && (l.nonce = a),
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l)
        }
      )
    }, [t]),
    d(Mv, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: g.cloneElement(e, { ref: r }),
    })
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Pv = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = N_(Fv),
    c = O(),
    l = T(
      e => {
        s.set(e, !0)
        for (let e of s.values()) if (!e) return
        r && r()
      },
      [s, r]
    ),
    u = k(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: l,
        register: e => (s.set(e, !1), () => s.delete(e)),
      }),
      a ? [Math.random(), l] : [n, l]
    )
  return (
    k(() => {
      s.forEach((e, t) => s.set(t, !1))
    }, [n]),
    g.useEffect(() => {
      !n && !s.size && r && r()
    }, [n]),
    o === 'popLayout' &&
      (e = d(Nv, {
        isPresent: n,
        children: e,
      })),
    d(ch.Provider, {
      value: u,
      children: e,
    })
  )
}
function Fv() {
  return /* @__PURE__ */ new Map()
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var Iv = e => e.key || ''
function Lv(e) {
  let t = []
  return (
    v.forEach(e, e => {
      w(e) && t.push(e)
    }),
    t
  )
}
//#endregion
//#region node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Rv = ({
    children: e,
    exitBeforeEnter: t,
    custom: n,
    initial: r = !0,
    onExitComplete: i,
    presenceAffectsLayout: a = !0,
    mode: o = 'sync',
  }) => {
    Xl(!t, "Replace exitBeforeEnter with mode='wait'")
    let s = k(() => Lv(e), [e]),
      c = s.map(Iv),
      l = A(!0),
      f = A(s),
      p = N_(() => /* @__PURE__ */ new Map()),
      [m, h] = j(s),
      [g, _] = j(s)
    o_(() => {
      ;(l.current = !1), (f.current = s)
      for (let e = 0; e < g.length; e++) {
        let t = Iv(g[e])
        c.includes(t) ? p.delete(t) : p.get(t) !== !0 && p.set(t, !1)
      }
    }, [g, c.length, c.join('-')])
    let v = []
    if (s !== m) {
      let e = [...s]
      for (let t = 0; t < g.length; t++) {
        let n = g[t],
          r = Iv(n)
        c.includes(r) || (e.splice(t, 0, n), v.push(n))
      }
      o === 'wait' && v.length && (e = v), _(Lv(e)), h(s)
      return
    }
    process.env.NODE_ENV !== 'production' &&
      o === 'wait' &&
      g.length > 1 &&
      console.warn(
        'You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'
      )
    let { forceRender: y } = E(uh)
    return d(u, {
      children: g.map(e => {
        let t = Iv(e),
          u = s === g || c.includes(t)
        return d(
          Pv,
          {
            isPresent: u,
            initial: !l.current || r ? void 0 : !1,
            custom: u ? void 0 : n,
            presenceAffectsLayout: a,
            mode: o,
            onExitComplete: u
              ? void 0
              : () => {
                  if (p.has(t)) p.set(t, !0)
                  else return
                  let e = !0
                  p.forEach(t => {
                    t || (e = !1)
                  }),
                    e && (y?.(), _(f.current), i && i())
                },
            children: e,
          },
          t
        )
      }),
    })
  },
  zv = ce`
  0% {
    background-position: 0 0;
  }
  50.01% {
    background-position: 200% 0;
  }
  100% {
    background-position: 0 0;
  }
`,
  Bv = ({ theme: e, prefersReducedMotion: t, spread: n = 24 }) => ({
    position: 'relative',
    outlineColor: 'rgba(0, 0, 0, 0) !important',
    '&:before, &:after': {
      content: "''",
      position: 'absolute',
      top: '-2px',
      borderRadius: `${Math.floor(e.shape.borderRadius * 1.5)}px`,
      left: '-2px',
      width: 'calc(100% + 4px)',
      height: 'calc(100% + 4px)',
      background:
        'linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000)',
      backgroundSize: '400%',
      zIndex: -1,
      animation: t ? void 0 : `${zv} 20s linear infinite`,
    },
    '&:after': {
      top: '-8px',
      left: '-8px',
      width: 'calc(100% + 16px)',
      height: 'calc(100% + 16px)',
      filter: `blur(${n}px)`,
      opacity: '0.9',
    },
  }),
  Vv = oe('img')({}),
  Hv = e => {
    let t = qe(e.id)
    return (
      t || console.error(`Card ID ${e.id} does not have an image configured`),
      t ? Ge[e.id] : Ke.pixel
    )
  },
  Uv = 'Card',
  Wv = 'CardFlipWrapper',
  Gv = '#0072ff',
  Kv = '#0fc400',
  qv = '#ff7510',
  Jv = ({ theme: e, isBuffedCrop: t, prefersReducedMotion: n }) =>
    t
      ? Bv({
          theme: e,
          prefersReducedMotion: n,
          spread: 12,
        })
      : { filter: `drop-shadow(0px 0px 24px ${Kv})` },
  Yv = _.forwardRef(function (
    {
      cardInstance: t,
      cardIdxInHand: n,
      cardIdxInField: r,
      cropIdxInFieldToHarvest: i,
      cropIdxInFieldToWater: a,
      playerId: o,
      children: l,
      disableEnterAnimation: u = !1,
      imageScale: m = 0.75,
      isFlipped: g = !1,
      paperProps: _,
      size: v = B.MEDIUM,
      sx: y = [],
      isBuffedCrop: b = !1,
      isSessionOwnersCard: x = !1,
      showPlayCardButton: S = !1,
      playButtonDisabled: C = !1,
      showWaterCropButton: w = !1,
      showHarvestCropButton: T = !1,
      showWaterableState: E = !1,
      showHarvestableState: D = !1,
      showDiscardButton: O = !1,
      tooltipTitle: ee = '',
      onPlayCard: te,
      onWaterCrop: k,
      onHarvestCrop: j,
      onDiscardCard: oe,
      ...ce
    },
    le
  ) {
    let M = s(),
      ue = A(null),
      de = h('(prefers-reduced-motion: reduce)')
    return /* @__PURE__ */ d(Rv, {
      children: /* @__PURE__ */ d(p, {
        ref: le,
        className: Uv,
        sx: [
          {
            perspective: '1000px',
            height: gn[v].height,
            width: gn[v].width,
          },
          ...(Ae(y) ? y : [y]),
        ],
        ...ce,
        children: /* @__PURE__ */ d(jv.div, {
          initial: u ? !1 : { scale: 0 },
          animate: { scale: 1 },
          style: {
            originX: 0.5,
            originY: 0.5,
          },
          children: /* @__PURE__ */ d(c, {
            title: ee,
            placement: 'top',
            arrow: !0,
            children: /* @__PURE__ */ f(p, {
              className: Wv,
              sx: [
                {
                  height: gn[v].height,
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  width: gn[v].width,
                  ...(g && { transform: 'rotateY(180deg)' }),
                  transition: M.transitions.create(['transform', 'box-shadow']),
                },
              ],
              children: [
                /* @__PURE__ */ f(re, {
                  ref: ue,
                  ..._,
                  sx: [
                    {
                      backfaceVisibility: 'hidden',
                      background:
                        M.palette.mode === 'light'
                          ? ie(M.palette.background.paper, 0.05)
                          : ae(M.palette.background.paper, 0.15),
                      display: 'flex',
                      flexDirection: 'column',
                      height: 1,
                      outlineColor: M.palette.background.default,
                      outlineStyle: 'solid',
                      outlineWidth: 2,
                      p: M.spacing(1),
                      position: 'absolute',
                      width: 1,
                      ...(E && { filter: `drop-shadow(0px 0px 24px ${Gv})` }),
                      ...(D && {
                        ...(x &&
                          Jv({
                            theme: M,
                            isBuffedCrop: b,
                            prefersReducedMotion: de,
                          })),
                        ...(!x && {
                          filter: `drop-shadow(0px 0px 24px ${qv})`,
                        }),
                      }),
                    },
                  ],
                  children: [
                    /* @__PURE__ */ d(se, {
                      variant: v === B.SMALL ? 'caption' : 'overline',
                      sx: {
                        fontWeight: M.typography.fontWeightBold,
                        textTransform: 'uppercase',
                      },
                      children: t.name,
                    }),
                    /* @__PURE__ */ d(p, {
                      sx: {
                        height: '50%',
                        display: 'flex',
                        background: M.palette.common.white,
                        backgroundImage: `url(${Ke.dirt})`,
                        backgroundSize: '100%',
                        backgroundRepeat: 'repeat',
                        borderColor: M.palette.divider,
                        borderRadius: `${M.shape.borderRadius}px`,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        imageRendering: 'pixelated',
                      },
                      children: /* @__PURE__ */ d(Vv, {
                        src: Hv(t),
                        alt: t.name,
                        sx: {
                          height: `${100 * m}%`,
                          p: 0,
                          m: 'auto',
                          imageRendering: 'pixelated',
                          filter: `drop-shadow(0 0 5px ${M.palette.common.white})`,
                        },
                      }),
                    }),
                    /* @__PURE__ */ d(ne, { sx: { my: M.spacing(1) } }),
                    /* @__PURE__ */ d(p, {
                      sx: {
                        height: '50%',
                        overflow: 'auto',
                        ...(v === B.SMALL && {
                          fontSize: M.typography.caption.fontSize,
                          lineHeight: M.typography.caption.lineHeight,
                          '> p': { my: 0 },
                        }),
                      },
                      children: l,
                    }),
                    S &&
                      /* @__PURE__ */ d(p, {
                        position: 'absolute',
                        right: '-100%',
                        width: 1,
                        px: 1,
                        children: /* @__PURE__ */ d(se, {
                          children: /* @__PURE__ */ f(e, {
                            variant: 'contained',
                            disabled: C,
                            onClick: () => void te?.(),
                            children: [
                              cn(t) && 'Play crop',
                              Qe(t) && 'Water a crop',
                              $e(t) && 'Play event',
                              et(t) && 'Play tool',
                            ],
                          }),
                        }),
                      }),
                    w &&
                      /* @__PURE__ */ d(p, {
                        position: 'absolute',
                        right: '-100%',
                        width: 1,
                        px: 1,
                        children: /* @__PURE__ */ d(se, {
                          children: /* @__PURE__ */ d(e, {
                            variant: 'contained',
                            onClick: k,
                            children: 'Water crop',
                          }),
                        }),
                      }),
                    T &&
                      /* @__PURE__ */ d(p, {
                        position: 'absolute',
                        right: '-100%',
                        width: 1,
                        px: 1,
                        children: /* @__PURE__ */ d(se, {
                          children: /* @__PURE__ */ d(e, {
                            variant: 'contained',
                            color: 'success',
                            onClick: j,
                            children: 'Harvest crop',
                          }),
                        }),
                      }),
                    O &&
                      /* @__PURE__ */ d(p, {
                        position: 'absolute',
                        right: '-100%',
                        width: 1,
                        px: 1,
                        children: /* @__PURE__ */ d(se, {
                          children: /* @__PURE__ */ d(e, {
                            variant: 'contained',
                            color: 'error',
                            onClick: oe,
                            children: 'Discard',
                          }),
                        }),
                      }),
                  ],
                }),
                /* @__PURE__ */ d(re, {
                  ..._,
                  sx: {
                    alignItems: 'center',
                    backgroundColor: M.palette.background.default,
                    backfaceVisibility: 'hidden',
                    color: M.palette.common.white,
                    display: 'flex',
                    height: 1,
                    position: 'absolute',
                    textAlign: 'center',
                    transform: 'rotateY(180deg)',
                    width: 1,
                  },
                  children: /* @__PURE__ */ d(se, {
                    variant: 'h2',
                    sx: {
                      ...(v === B.SMALL && M.typography.h6),
                      ...(v === B.MEDIUM && M.typography.h5),
                      ...(v === B.LARGE && M.typography.h4),
                    },
                    children: 'Farmhand Shuffle',
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    })
  }),
  Xv = ({ crop: e, playedCrop: t }) =>
    t
      ? /* @__PURE__ */ f(se, {
          children: [
            'Water cards attached: ',
            t.waterCards,
            '/',
            e.waterToMature,
          ],
        })
      : /* @__PURE__ */ f(se, {
          children: ['Water needed to mature: ', e.waterToMature],
        }),
  Zv = te
//#endregion
//#region node_modules/xstate/dev/dist/xstate-dev.esm.js
function Qv() {
  if (typeof globalThis < 'u') return globalThis
  if (typeof self < 'u') return self
  if (typeof window < 'u') return window
  if (typeof global < 'u') return global
}
function $v() {
  let e = Qv()
  if (e.__xstate__) return e.__xstate__
}
var ey = e => {
    if (typeof window > 'u') return
    let t = $v()
    t && t.register(e)
  },
  ty = class {
    constructor(e) {
      ;(this._process = e),
        (this._active = !1),
        (this._current = null),
        (this._last = null)
    }
    start() {
      ;(this._active = !0), this.flush()
    }
    clear() {
      this._current &&
        ((this._current.next = null), (this._last = this._current))
    }
    enqueue(e) {
      let t = {
        value: e,
        next: null,
      }
      if (this._current) {
        ;(this._last.next = t), (this._last = t)
        return
      }
      ;(this._current = t), (this._last = t), this._active && this.flush()
    }
    flush() {
      for (; this._current; ) {
        let e = this._current
        this._process(e.value), (this._current = e.next)
      }
      this._last = null
    }
  },
  ny = '',
  ry = '#',
  iy = '*',
  ay = 'xstate.init',
  oy = 'xstate.stop'
function sy(e, t) {
  return { type: `xstate.after.${e}.${t}` }
}
function cy(e, t) {
  return {
    type: `xstate.done.state.${e}`,
    output: t,
  }
}
function ly(e, t) {
  return {
    type: `xstate.done.actor.${e}`,
    output: t,
    actorId: e,
  }
}
function uy(e, t) {
  return {
    type: `xstate.error.actor.${e}`,
    error: t,
    actorId: e,
  }
}
function dy(e) {
  return {
    type: ay,
    input: e,
  }
}
function fy(e) {
  setTimeout(() => {
    throw e
  })
}
var py = (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
function my(e, t) {
  let n = gy(e),
    r = gy(t)
  return typeof r == 'string'
    ? typeof n == 'string'
      ? r === n
      : !1
    : typeof n == 'string'
    ? n in r
    : Object.keys(n).every(e => (e in r ? my(n[e], r[e]) : !1))
}
function hy(e) {
  if (Sy(e)) return e
  let t = [],
    n = ''
  for (let r = 0; r < e.length; r++) {
    switch (e.charCodeAt(r)) {
      case 92:
        ;(n += e[r + 1]), r++
        continue
      case 46:
        t.push(n), (n = '')
        continue
    }
    n += e[r]
  }
  return t.push(n), t
}
function gy(e) {
  return Wb(e) ? e.value : typeof e == 'string' ? _y(hy(e)) : e
}
function _y(e) {
  if (e.length === 1) return e[0]
  let t = {},
    n = t
  for (let t = 0; t < e.length - 1; t++)
    if (t === e.length - 2) n[e[t]] = e[t + 1]
    else {
      let r = n
      ;(n = {}), (r[e[t]] = n)
    }
  return t
}
function vy(e, t) {
  let n = {},
    r = Object.keys(e)
  for (let i = 0; i < r.length; i++) {
    let a = r[i]
    n[a] = t(e[a], a, e, i)
  }
  return n
}
function yy(e) {
  return Sy(e) ? e : [e]
}
function by(e) {
  return e === void 0 ? [] : yy(e)
}
function xy(e, t, n, r) {
  return typeof e == 'function'
    ? e({
        context: t,
        event: n,
        self: r,
      })
    : e
}
function Sy(e) {
  return Array.isArray(e)
}
function Cy(e) {
  return e.type.startsWith('xstate.error.actor')
}
function wy(e) {
  return yy(e).map(e =>
    e === void 0 || typeof e == 'string' ? { target: e } : e
  )
}
function Ty(e) {
  if (!(e === void 0 || e === ny)) return by(e)
}
function Ey(e, t, n) {
  let r = typeof e == 'object',
    i = r ? e : void 0
  return {
    next: (r ? e.next : e)?.bind(i),
    error: (r ? e.error : t)?.bind(i),
    complete: (r ? e.complete : n)?.bind(i),
  }
}
function Dy(e, t) {
  return `${t}.${e}`
}
function Oy(e, t) {
  let n = t.match(/^xstate\.invoke\.(\d+)\.(.*)/)
  if (!n) return e.implementations.actors[t]
  let [, r, i] = n,
    a = e.getStateNodeById(i).config.invoke
  return (Array.isArray(a) ? a[r] : a).src
}
function ky(e, t) {
  return `${e.sessionId}.${t}`
}
var Ay = 0
function jy(e, t) {
  let n = /* @__PURE__ */ new Map(),
    r = /* @__PURE__ */ new Map(),
    i = /* @__PURE__ */ new WeakMap(),
    a = /* @__PURE__ */ new Set(),
    o = {},
    { clock: s, logger: c } = t,
    l = {
      schedule: (e, t, n, r, i = Math.random().toString(36).slice(2)) => {
        let a = {
            source: e,
            target: t,
            event: n,
            delay: r,
            id: i,
            startedAt: Date.now(),
          },
          c = ky(e, i)
        ;(u._snapshot._scheduledEvents[c] = a),
          (o[c] = s.setTimeout(() => {
            delete o[c],
              delete u._snapshot._scheduledEvents[c],
              u._relay(e, t, n)
          }, r))
      },
      cancel: (e, t) => {
        let n = ky(e, t),
          r = o[n]
        delete o[n],
          delete u._snapshot._scheduledEvents[n],
          r !== void 0 && s.clearTimeout(r)
      },
      cancelAll: e => {
        for (let t in u._snapshot._scheduledEvents) {
          let n = u._snapshot._scheduledEvents[t]
          n.source === e && l.cancel(e, n.id)
        }
      },
    },
    u = {
      _snapshot: {
        _scheduledEvents: (t?.snapshot && t.snapshot.scheduler) ?? {},
      },
      _bookId: () => `x:${Ay++}`,
      _register: (e, t) => (n.set(e, t), e),
      _unregister: e => {
        n.delete(e.sessionId)
        let t = i.get(e)
        t !== void 0 && (r.delete(t), i.delete(e))
      },
      get: e => r.get(e),
      _set: (e, t) => {
        let n = r.get(e)
        if (n && n !== t)
          throw Error(`Actor with system ID '${e}' already exists.`)
        r.set(e, t), i.set(t, e)
      },
      inspect: e => {
        let t = Ey(e)
        return (
          a.add(t),
          {
            unsubscribe() {
              a.delete(t)
            },
          }
        )
      },
      _sendInspectionEvent: t => {
        if (!a.size) return
        let n = {
          ...t,
          rootId: e.sessionId,
        }
        a.forEach(e => e.next?.(n))
      },
      _relay: (e, t, n) => {
        u._sendInspectionEvent({
          type: '@xstate.event',
          sourceRef: e,
          actorRef: t,
          event: n,
        }),
          t._send(n)
      },
      scheduler: l,
      getSnapshot: () => ({
        _scheduledEvents: { ...u._snapshot._scheduledEvents },
      }),
      start: () => {
        let e = u._snapshot._scheduledEvents
        u._snapshot._scheduledEvents = {}
        for (let t in e) {
          let { source: n, target: r, event: i, delay: a, id: o } = e[t]
          l.schedule(n, r, i, a, o)
        }
      },
      _clock: s,
      _logger: c,
    }
  return u
}
var My = !1,
  Ny = /*#__PURE__*/ (function (e) {
    return (
      (e[(e.NotStarted = 0)] = 'NotStarted'),
      (e[(e.Running = 1)] = 'Running'),
      (e[(e.Stopped = 2)] = 'Stopped'),
      e
    )
  })({}),
  Py = {
    clock: {
      setTimeout: (e, t) => setTimeout(e, t),
      clearTimeout: e => clearTimeout(e),
    },
    logger: console.log.bind(console),
    devTools: !1,
  },
  Fy = class {
    constructor(e, t) {
      ;(this.logic = e),
        (this._snapshot = void 0),
        (this.clock = void 0),
        (this.options = void 0),
        (this.id = void 0),
        (this.mailbox = new ty(this._process.bind(this))),
        (this.observers = /* @__PURE__ */ new Set()),
        (this.eventListeners = /* @__PURE__ */ new Map()),
        (this.logger = void 0),
        (this._processingStatus = Ny.NotStarted),
        (this._parent = void 0),
        (this._syncSnapshot = void 0),
        (this.ref = void 0),
        (this._actorScope = void 0),
        (this._systemId = void 0),
        (this.sessionId = void 0),
        (this.system = void 0),
        (this._doneEvent = void 0),
        (this.src = void 0),
        (this._deferred = [])
      let n = {
          ...Py,
          ...t,
        },
        {
          clock: r,
          logger: i,
          parent: a,
          syncSnapshot: o,
          id: s,
          systemId: c,
          inspect: l,
        } = n
      ;(this.system = a
        ? a.system
        : jy(this, {
            clock: r,
            logger: i,
          })),
        l && !a && this.system.inspect(Ey(l)),
        (this.sessionId = this.system._bookId()),
        (this.id = s ?? this.sessionId),
        (this.logger = t?.logger ?? this.system._logger),
        (this.clock = t?.clock ?? this.system._clock),
        (this._parent = a),
        (this._syncSnapshot = o),
        (this.options = n),
        (this.src = n.src ?? e),
        (this.ref = this),
        (this._actorScope = {
          self: this,
          id: this.id,
          sessionId: this.sessionId,
          logger: this.logger,
          defer: e => {
            this._deferred.push(e)
          },
          system: this.system,
          stopChild: e => {
            if (e._parent !== this)
              throw Error(
                `Cannot stop child actor ${e.id} of ${this.id} because it is not a child`
              )
            e._stop()
          },
          emit: e => {
            let t = this.eventListeners.get(e.type),
              n = this.eventListeners.get('*')
            if (!t && !n) return
            let r = [...(t ? t.values() : []), ...(n ? n.values() : [])]
            for (let t of r) t(e)
          },
          actionExecutor: e => {
            let t = () => {
              if (
                (this._actorScope.system._sendInspectionEvent({
                  type: '@xstate.action',
                  actorRef: this,
                  action: {
                    type: e.type,
                    params: e.params,
                  },
                }),
                !e.exec)
              )
                return
              let t = My
              try {
                ;(My = !0), e.exec(e.info, e.params)
              } finally {
                My = t
              }
            }
            this._processingStatus === Ny.Running ? t() : this._deferred.push(t)
          },
        }),
        (this.send = this.send.bind(this)),
        this.system._sendInspectionEvent({
          type: '@xstate.actor',
          actorRef: this,
        }),
        c && ((this._systemId = c), this.system._set(c, this)),
        this._initState(t?.snapshot ?? t?.state),
        c && this._snapshot.status !== 'active' && this.system._unregister(this)
    }
    _initState(e) {
      try {
        this._snapshot = e
          ? this.logic.restoreSnapshot
            ? this.logic.restoreSnapshot(e, this._actorScope)
            : e
          : this.logic.getInitialSnapshot(this._actorScope, this.options?.input)
      } catch (e) {
        this._snapshot = {
          status: 'error',
          output: void 0,
          error: e,
        }
      }
    }
    update(e, t) {
      this._snapshot = e
      let n
      for (; (n = this._deferred.shift()); )
        try {
          n()
        } catch (t) {
          ;(this._deferred.length = 0),
            (this._snapshot = {
              ...e,
              status: 'error',
              error: t,
            })
        }
      switch (this._snapshot.status) {
        case 'active':
          for (let t of this.observers)
            try {
              t.next?.(e)
            } catch (e) {
              fy(e)
            }
          break
        case 'done':
          for (let t of this.observers)
            try {
              t.next?.(e)
            } catch (e) {
              fy(e)
            }
          this._stopProcedure(),
            this._complete(),
            (this._doneEvent = ly(this.id, this._snapshot.output)),
            this._parent &&
              this.system._relay(this, this._parent, this._doneEvent)
          break
        case 'error':
          this._error(this._snapshot.error)
          break
      }
      this.system._sendInspectionEvent({
        type: '@xstate.snapshot',
        actorRef: this,
        event: t,
        snapshot: e,
      })
    }
    subscribe(e, t, n) {
      let r = Ey(e, t, n)
      if (this._processingStatus !== Ny.Stopped) this.observers.add(r)
      else
        switch (this._snapshot.status) {
          case 'done':
            try {
              r.complete?.()
            } catch (e) {
              fy(e)
            }
            break
          case 'error': {
            let e = this._snapshot.error
            if (!r.error) fy(e)
            else
              try {
                r.error(e)
              } catch (e) {
                fy(e)
              }
            break
          }
        }
      return {
        unsubscribe: () => {
          this.observers.delete(r)
        },
      }
    }
    on(e, t) {
      let n = this.eventListeners.get(e)
      n || ((n = /* @__PURE__ */ new Set()), this.eventListeners.set(e, n))
      let r = t.bind(void 0)
      return (
        n.add(r),
        {
          unsubscribe: () => {
            n.delete(r)
          },
        }
      )
    }
    start() {
      if (this._processingStatus === Ny.Running) return this
      this._syncSnapshot &&
        this.subscribe({
          next: e => {
            e.status === 'active' &&
              this.system._relay(this, this._parent, {
                type: `xstate.snapshot.${this.id}`,
                snapshot: e,
              })
          },
          error: () => {},
        }),
        this.system._register(this.sessionId, this),
        this._systemId && this.system._set(this._systemId, this),
        (this._processingStatus = Ny.Running)
      let e = dy(this.options.input)
      switch (
        (this.system._sendInspectionEvent({
          type: '@xstate.event',
          sourceRef: this._parent,
          actorRef: this,
          event: e,
        }),
        this._snapshot.status)
      ) {
        case 'done':
          return this.update(this._snapshot, e), this
        case 'error':
          return this._error(this._snapshot.error), this
      }
      if ((this._parent || this.system.start(), this.logic.start))
        try {
          this.logic.start(this._snapshot, this._actorScope)
        } catch (e) {
          return (
            (this._snapshot = {
              ...this._snapshot,
              status: 'error',
              error: e,
            }),
            this._error(e),
            this
          )
        }
      return (
        this.update(this._snapshot, e),
        this.options.devTools && this.attachDevTools(),
        this.mailbox.start(),
        this
      )
    }
    _process(e) {
      let t, n
      try {
        t = this.logic.transition(this._snapshot, e, this._actorScope)
      } catch (e) {
        n = { err: e }
      }
      if (n) {
        let { err: e } = n
        ;(this._snapshot = {
          ...this._snapshot,
          status: 'error',
          error: e,
        }),
          this._error(e)
        return
      }
      this.update(t, e),
        e.type === 'xstate.stop' && (this._stopProcedure(), this._complete())
    }
    _stop() {
      return this._processingStatus === Ny.Stopped
        ? this
        : (this.mailbox.clear(),
          this._processingStatus === Ny.NotStarted
            ? ((this._processingStatus = Ny.Stopped), this)
            : (this.mailbox.enqueue({ type: oy }), this))
    }
    stop() {
      if (this._parent)
        throw Error('A non-root actor cannot be stopped directly.')
      return this._stop()
    }
    _complete() {
      for (let e of this.observers)
        try {
          e.complete?.()
        } catch (e) {
          fy(e)
        }
      this.observers.clear()
    }
    _reportError(e) {
      if (!this.observers.size) {
        this._parent || fy(e)
        return
      }
      let t = !1
      for (let n of this.observers) {
        let r = n.error
        t ||= !r
        try {
          r?.(e)
        } catch (e) {
          fy(e)
        }
      }
      this.observers.clear(), t && fy(e)
    }
    _error(e) {
      this._stopProcedure(),
        this._reportError(e),
        this._parent && this.system._relay(this, this._parent, uy(this.id, e))
    }
    _stopProcedure() {
      return this._processingStatus === Ny.Running
        ? (this.system.scheduler.cancelAll(this),
          this.mailbox.clear(),
          (this.mailbox = new ty(this._process.bind(this))),
          (this._processingStatus = Ny.Stopped),
          this.system._unregister(this),
          this)
        : this
    }
    _send(e) {
      this._processingStatus !== Ny.Stopped && this.mailbox.enqueue(e)
    }
    send(e) {
      this.system._relay(void 0, this, e)
    }
    attachDevTools() {
      let { devTools: e } = this.options
      e && (typeof e == 'function' ? e : ey)(this)
    }
    toJSON() {
      return {
        xstate$$type: 1,
        id: this.id,
      }
    }
    getPersistedSnapshot(e) {
      return this.logic.getPersistedSnapshot(this._snapshot, e)
    }
    [py]() {
      return this
    }
    getSnapshot() {
      return this._snapshot
    }
  }
function Iy(e, ...[t]) {
  return new Fy(e, t)
}
function Ly(e, t, n, r, { sendId: i }) {
  return [t, { sendId: typeof i == 'function' ? i(n, r) : i }, void 0]
}
function Ry(e, t) {
  e.defer(() => {
    e.system.scheduler.cancel(e.self, t.sendId)
  })
}
function zy(e) {
  function t(e, t) {}
  return (
    (t.type = 'xstate.cancel'),
    (t.sendId = e),
    (t.resolve = Ly),
    (t.execute = Ry),
    t
  )
}
function By(
  e,
  t,
  n,
  r,
  { id: i, systemId: a, src: o, input: s, syncSnapshot: c }
) {
  let l = typeof o == 'string' ? Oy(t.machine, o) : o,
    u = typeof i == 'function' ? i(n) : i,
    d,
    f
  return (
    l &&
      ((f =
        typeof s == 'function'
          ? s({
              context: t.context,
              event: n.event,
              self: e.self,
            })
          : s),
      (d = Iy(l, {
        id: u,
        src: o,
        parent: e.self,
        syncSnapshot: c,
        systemId: a,
        input: f,
      }))),
    [
      Zb(t, {
        children: {
          ...t.children,
          [u]: d,
        },
      }),
      {
        id: i,
        systemId: a,
        actorRef: d,
        src: o,
        input: f,
      },
      void 0,
    ]
  )
}
function Vy(e, { actorRef: t }) {
  t &&
    e.defer(() => {
      t._processingStatus !== Ny.Stopped && t.start()
    })
}
function Hy(
  ...[e, { id: t, systemId: n, input: r, syncSnapshot: i = !1 } = {}]
) {
  function a(e, t) {}
  return (
    (a.type = 'xstate.spawnChild'),
    (a.id = t),
    (a.systemId = n),
    (a.src = e),
    (a.input = r),
    (a.syncSnapshot = i),
    (a.resolve = By),
    (a.execute = Vy),
    a
  )
}
function Uy(e, t, n, r, { actorRef: i }) {
  let a = typeof i == 'function' ? i(n, r) : i,
    o = typeof a == 'string' ? t.children[a] : a,
    s = t.children
  return (
    o && ((s = { ...s }), delete s[o.id]), [Zb(t, { children: s }), o, void 0]
  )
}
function Wy(e, t) {
  if (t) {
    if ((e.system._unregister(t), t._processingStatus !== Ny.Running)) {
      e.stopChild(t)
      return
    }
    e.defer(() => {
      e.stopChild(t)
    })
  }
}
function Gy(e) {
  function t(e, t) {}
  return (
    (t.type = 'xstate.stopChild'),
    (t.actorRef = e),
    (t.resolve = Uy),
    (t.execute = Wy),
    t
  )
}
function Ky(e, t, n, r) {
  let { machine: i } = r,
    a = typeof e == 'function',
    o = a ? e : i.implementations.guards[typeof e == 'string' ? e : e.type]
  if (!a && !o)
    throw Error(
      `Guard '${typeof e == 'string' ? e : e.type}' is not implemented.'.`
    )
  if (typeof o != 'function') return Ky(o, t, n, r)
  let s = {
      context: t,
      event: n,
    },
    c =
      a || typeof e == 'string'
        ? void 0
        : 'params' in e
        ? typeof e.params == 'function'
          ? e.params({
              context: t,
              event: n,
            })
          : e.params
        : void 0
  return 'check' in o ? o.check(r, s, o) : o(s, c)
}
var qy = e => e.type === 'atomic' || e.type === 'final'
function Jy(e) {
  return Object.values(e.states).filter(e => e.type !== 'history')
}
function Yy(e, t) {
  let n = []
  if (t === e) return n
  let r = e.parent
  for (; r && r !== t; ) n.push(r), (r = r.parent)
  return n
}
function Xy(e) {
  let t = new Set(e),
    n = Qy(t)
  for (let e of t)
    if (e.type === 'compound' && (!n.get(e) || !n.get(e).length))
      ub(e).forEach(e => t.add(e))
    else if (e.type === 'parallel') {
      for (let n of Jy(e))
        if (n.type !== 'history' && !t.has(n)) {
          let e = ub(n)
          for (let n of e) t.add(n)
        }
    }
  for (let e of t) {
    let n = e.parent
    for (; n; ) t.add(n), (n = n.parent)
  }
  return t
}
function Zy(e, t) {
  let n = t.get(e)
  if (!n) return {}
  if (e.type === 'compound') {
    let e = n[0]
    if (e) {
      if (qy(e)) return e.key
    } else return {}
  }
  let r = {}
  for (let e of n) r[e.key] = Zy(e, t)
  return r
}
function Qy(e) {
  let t = /* @__PURE__ */ new Map()
  for (let n of e)
    t.has(n) || t.set(n, []),
      n.parent &&
        (t.has(n.parent) || t.set(n.parent, []), t.get(n.parent).push(n))
  return t
}
function $y(e, t) {
  return Zy(e, Qy(Xy(t)))
}
function eb(e, t) {
  return t.type === 'compound'
    ? Jy(t).some(t => t.type === 'final' && e.has(t))
    : t.type === 'parallel'
    ? Jy(t).every(t => eb(e, t))
    : t.type === 'final'
}
var tb = e => e[0] === ry
function nb(e, t) {
  return (
    e.transitions.get(t) ||
    [...e.transitions.keys()]
      .filter(e => {
        if (e === iy) return !0
        if (!e.endsWith('.*')) return !1
        let n = e.split('.'),
          r = t.split('.')
        for (let e = 0; e < n.length; e++) {
          let t = n[e],
            i = r[e]
          if (t === '*') return e === n.length - 1
          if (t !== i) return !1
        }
        return !0
      })
      .sort((e, t) => t.length - e.length)
      .flatMap(t => e.transitions.get(t))
  )
}
function rb(e) {
  let t = e.config.after
  if (!t) return []
  let n = t => {
    let n = sy(t, e.id),
      r = n.type
    return (
      e.entry.push(
        nx(n, {
          id: r,
          delay: t,
        })
      ),
      e.exit.push(zy(r)),
      r
    )
  }
  return Object.keys(t)
    .flatMap(e => {
      let r = t[e],
        i = typeof r == 'string' ? { target: r } : r,
        a = Number.isNaN(+e) ? e : +e,
        o = n(a)
      return by(i).map(e => ({
        ...e,
        event: o,
        delay: a,
      }))
    })
    .map(t => {
      let { delay: n } = t
      return {
        ...ib(e, t.event, t),
        delay: n,
      }
    })
}
function ib(e, t, n) {
  let r = Ty(n.target),
    i = n.reenter ?? !1,
    a = sb(e, r),
    o = {
      ...n,
      actions: by(n.actions),
      guard: n.guard,
      target: a,
      source: e,
      reenter: i,
      eventType: t,
      toJSON: () => ({
        ...o,
        source: `#${e.id}`,
        target: a ? a.map(e => `#${e.id}`) : void 0,
      }),
    }
  return o
}
function ab(e) {
  let t = /* @__PURE__ */ new Map()
  if (e.config.on)
    for (let n of Object.keys(e.config.on)) {
      if (n === '')
        throw Error(
          'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.'
        )
      let r = e.config.on[n]
      t.set(
        n,
        wy(r).map(t => ib(e, n, t))
      )
    }
  if (e.config.onDone) {
    let n = `xstate.done.state.${e.id}`
    t.set(
      n,
      wy(e.config.onDone).map(t => ib(e, n, t))
    )
  }
  for (let n of e.invoke) {
    if (n.onDone) {
      let r = `xstate.done.actor.${n.id}`
      t.set(
        r,
        wy(n.onDone).map(t => ib(e, r, t))
      )
    }
    if (n.onError) {
      let r = `xstate.error.actor.${n.id}`
      t.set(
        r,
        wy(n.onError).map(t => ib(e, r, t))
      )
    }
    if (n.onSnapshot) {
      let r = `xstate.snapshot.${n.id}`
      t.set(
        r,
        wy(n.onSnapshot).map(t => ib(e, r, t))
      )
    }
  }
  for (let n of e.after) {
    let e = t.get(n.eventType)
    e || ((e = []), t.set(n.eventType, e)), e.push(n)
  }
  return t
}
function ob(e, t) {
  let n = typeof t == 'string' ? e.states[t] : t ? e.states[t.target] : void 0
  if (!n && t)
    throw Error(
      `Initial state node "${t}" not found on parent state node #${e.id}`
    )
  let r = {
    source: e,
    actions: !t || typeof t == 'string' ? [] : by(t.actions),
    eventType: null,
    reenter: !1,
    target: n ? [n] : [],
    toJSON: () => ({
      ...r,
      source: `#${e.id}`,
      target: n ? [`#${n.id}`] : [],
    }),
  }
  return r
}
function sb(e, t) {
  if (t !== void 0)
    return t.map(t => {
      if (typeof t != 'string') return t
      if (tb(t)) return e.machine.getStateNodeById(t)
      let n = t[0] === '.'
      if (n && !e.parent) return pb(e, t.slice(1))
      let r = n ? e.key + t : t
      if (e.parent)
        try {
          return pb(e.parent, r)
        } catch (t) {
          throw Error(
            `Invalid transition definition for state node '${e.id}':\n${t.message}`
          )
        }
      else
        throw Error(
          `Invalid target: "${t}" is not a valid target from the root node. Did you mean ".${t}"?`
        )
    })
}
function cb(e) {
  let t = Ty(e.config.target)
  return t
    ? { target: t.map(t => (typeof t == 'string' ? pb(e.parent, t) : t)) }
    : e.parent.initial
}
function lb(e) {
  return e.type === 'history'
}
function ub(e) {
  let t = db(e)
  for (let n of t) for (let r of Yy(n, e)) t.add(r)
  return t
}
function db(e) {
  let t = /* @__PURE__ */ new Set()
  function n(e) {
    if (!t.has(e)) {
      if ((t.add(e), e.type === 'compound')) n(e.initial.target[0])
      else if (e.type === 'parallel') for (let t of Jy(e)) n(t)
    }
  }
  return n(e), t
}
function fb(e, t) {
  if (tb(t)) return e.machine.getStateNodeById(t)
  if (!e.states)
    throw Error(
      `Unable to retrieve child state '${t}' from '${e.id}'; no child states exist.`
    )
  let n = e.states[t]
  if (!n) throw Error(`Child state '${t}' does not exist on '${e.id}'`)
  return n
}
function pb(e, t) {
  if (typeof t == 'string' && tb(t))
    try {
      return e.machine.getStateNodeById(t)
    } catch {}
  let n = hy(t).slice(),
    r = e
  for (; n.length; ) {
    let e = n.shift()
    if (!e.length) break
    r = fb(r, e)
  }
  return r
}
function mb(e, t) {
  if (typeof t == 'string') {
    let n = e.states[t]
    if (!n) throw Error(`State '${t}' does not exist on '${e.id}'`)
    return [e, n]
  }
  let n = Object.keys(t),
    r = n.map(t => fb(e, t)).filter(Boolean)
  return [e.machine.root, e].concat(
    r,
    n.reduce((n, r) => {
      let i = fb(e, r)
      if (!i) return n
      let a = mb(i, t[r])
      return n.concat(a)
    }, [])
  )
}
function hb(e, t, n, r) {
  let i = fb(e, t).next(n, r)
  return !i || !i.length ? e.next(n, r) : i
}
function gb(e, t, n, r) {
  let i = Object.keys(t),
    a = vb(fb(e, i[0]), t[i[0]], n, r)
  return !a || !a.length ? e.next(n, r) : a
}
function _b(e, t, n, r) {
  let i = []
  for (let a of Object.keys(t)) {
    let o = t[a]
    if (!o) continue
    let s = vb(fb(e, a), o, n, r)
    s && i.push(...s)
  }
  return i.length ? i : e.next(n, r)
}
function vb(e, t, n, r) {
  return typeof t == 'string'
    ? hb(e, t, n, r)
    : Object.keys(t).length === 1
    ? gb(e, t, n, r)
    : _b(e, t, n, r)
}
function yb(e) {
  return Object.keys(e.states)
    .map(t => e.states[t])
    .filter(e => e.type === 'history')
}
function bb(e, t) {
  let n = e
  for (; n.parent && n.parent !== t; ) n = n.parent
  return n.parent === t
}
function xb(e, t) {
  let n = new Set(e),
    r = new Set(t)
  for (let e of n) if (r.has(e)) return !0
  for (let e of r) if (n.has(e)) return !0
  return !1
}
function Sb(e, t, n) {
  let r = /* @__PURE__ */ new Set()
  for (let i of e) {
    let e = !1,
      a = /* @__PURE__ */ new Set()
    for (let o of r)
      if (xb(Eb([i], t, n), Eb([o], t, n)))
        if (bb(i.source, o.source)) a.add(o)
        else {
          e = !0
          break
        }
    if (!e) {
      for (let e of a) r.delete(e)
      r.add(i)
    }
  }
  return Array.from(r)
}
function Cb(e) {
  let [t, ...n] = e
  for (let e of Yy(t, void 0)) if (n.every(t => bb(t, e))) return e
}
function wb(e, t) {
  if (!e.target) return []
  let n = /* @__PURE__ */ new Set()
  for (let r of e.target)
    if (lb(r))
      if (t[r.id]) for (let e of t[r.id]) n.add(e)
      else for (let e of wb(cb(r), t)) n.add(e)
    else n.add(r)
  return [...n]
}
function Tb(e, t) {
  let n = wb(e, t)
  if (!n) return
  if (!e.reenter && n.every(t => t === e.source || bb(t, e.source)))
    return e.source
  let r = Cb(n.concat(e.source))
  if (r) return r
  if (!e.reenter) return e.source.machine.root
}
function Eb(e, t, n) {
  let r = /* @__PURE__ */ new Set()
  for (let i of e)
    if (i.target?.length) {
      let e = Tb(i, n)
      i.reenter && i.source === e && r.add(e)
      for (let n of t) bb(n, e) && r.add(n)
    }
  return [...r]
}
function Db(e, t) {
  if (e.length !== t.size) return !1
  for (let n of e) if (!t.has(n)) return !1
  return !0
}
function Ob(e, t, n, r, i, a) {
  if (!e.length) return t
  let o = new Set(t._nodes),
    s = t.historyValue,
    c = Sb(e, o, s),
    l = t
  i || ([l, s] = Fb(l, r, n, c, o, s, a, n.actionExecutor)),
    (l = Rb(
      l,
      r,
      n,
      c.flatMap(e => e.actions),
      a,
      void 0
    )),
    (l = Ab(l, r, n, c, o, a, s, i))
  let u = [...o]
  l.status === 'done' &&
    (l = Rb(
      l,
      r,
      n,
      u.sort((e, t) => t.order - e.order).flatMap(e => e.exit),
      a,
      void 0
    ))
  try {
    return s === t.historyValue && Db(t._nodes, o)
      ? l
      : Zb(l, {
          _nodes: u,
          historyValue: s,
        })
  } catch (e) {
    throw e
  }
}
function kb(e, t, n, r, i) {
  if (r.output === void 0) return
  let a = cy(
    i.id,
    i.output !== void 0 && i.parent
      ? xy(i.output, e.context, t, n.self)
      : void 0
  )
  return xy(r.output, e.context, a, n.self)
}
function Ab(e, t, n, r, i, a, o, s) {
  let c = e,
    l = /* @__PURE__ */ new Set(),
    u = /* @__PURE__ */ new Set()
  jb(r, o, u, l), s && u.add(e.machine.root)
  let d = /* @__PURE__ */ new Set()
  for (let e of [...l].sort((e, t) => e.order - t.order)) {
    i.add(e)
    let r = []
    r.push(...e.entry)
    for (let t of e.invoke)
      r.push(
        Hy(t.src, {
          ...t,
          syncSnapshot: !!t.onSnapshot,
        })
      )
    if (u.has(e)) {
      let t = e.initial.actions
      r.push(...t)
    }
    if (
      ((c = Rb(
        c,
        t,
        n,
        r,
        a,
        e.invoke.map(e => e.id)
      )),
      e.type === 'final')
    ) {
      let r = e.parent,
        o = r?.type === 'parallel' ? r : r?.parent,
        s = o || e
      for (
        r?.type === 'compound' &&
        a.push(
          cy(
            r.id,
            e.output === void 0 ? void 0 : xy(e.output, c.context, t, n.self)
          )
        );
        o?.type === 'parallel' && !d.has(o) && eb(i, o);

      )
        d.add(o), a.push(cy(o.id)), (s = o), (o = o.parent)
      if (o) continue
      c = Zb(c, {
        status: 'done',
        output: kb(c, t, n, c.machine.root, s),
      })
    }
  }
  return c
}
function jb(e, t, n, r) {
  for (let i of e) {
    let e = Tb(i, t)
    for (let a of i.target || [])
      !lb(a) &&
        (i.source !== a || i.source !== e || i.reenter) &&
        (r.add(a), n.add(a)),
        Mb(a, t, n, r)
    let a = wb(i, t)
    for (let o of a) {
      let a = Yy(o, e)
      e?.type === 'parallel' && a.push(e),
        Nb(r, t, n, a, !i.source.parent && i.reenter ? void 0 : e)
    }
  }
}
function Mb(e, t, n, r) {
  if (lb(e))
    if (t[e.id]) {
      let i = t[e.id]
      for (let e of i) r.add(e), Mb(e, t, n, r)
      for (let a of i) Pb(a, e.parent, r, t, n)
    } else {
      let i = cb(e)
      for (let a of i.target)
        r.add(a), i === e.parent?.initial && n.add(e.parent), Mb(a, t, n, r)
      for (let a of i.target) Pb(a, e.parent, r, t, n)
    }
  else if (e.type === 'compound') {
    let [i] = e.initial.target
    lb(i) || (r.add(i), n.add(i)), Mb(i, t, n, r), Pb(i, e, r, t, n)
  } else if (e.type === 'parallel')
    for (let i of Jy(e).filter(e => !lb(e)))
      [...r].some(e => bb(e, i)) ||
        (lb(i) || (r.add(i), n.add(i)), Mb(i, t, n, r))
}
function Nb(e, t, n, r, i) {
  for (let a of r)
    if (((!i || bb(a, i)) && e.add(a), a.type === 'parallel'))
      for (let r of Jy(a).filter(e => !lb(e)))
        [...e].some(e => bb(e, r)) || (e.add(r), Mb(r, t, n, e))
}
function Pb(e, t, n, r, i) {
  Nb(n, r, i, Yy(e, t))
}
function Fb(e, t, n, r, i, a, o, s) {
  let c = e,
    l = Eb(r, i, a)
  l.sort((e, t) => t.order - e.order)
  let u
  for (let e of l)
    for (let t of yb(e)) {
      let n
      ;(n =
        t.history === 'deep' ? t => qy(t) && bb(t, e) : t => t.parent === e),
        (u ??= { ...a }),
        (u[t.id] = Array.from(i).filter(n))
    }
  for (let e of l)
    (c = Rb(c, t, n, [...e.exit, ...e.invoke.map(e => Gy(e.id))], o, void 0)),
      i.delete(e)
  return [c, u || a]
}
function Ib(e, t) {
  return e.implementations.actions[t]
}
function Lb(e, t, n, r, i, a) {
  let { machine: o } = e,
    s = e
  for (let e of r) {
    let r = typeof e == 'function',
      c = r ? e : Ib(o, typeof e == 'string' ? e : e.type),
      l = {
        context: s.context,
        event: t,
        self: n.self,
        system: n.system,
      },
      u =
        r || typeof e == 'string'
          ? void 0
          : 'params' in e
          ? typeof e.params == 'function'
            ? e.params({
                context: s.context,
                event: t,
              })
            : e.params
          : void 0
    if (!c || !('resolve' in c)) {
      n.actionExecutor({
        type:
          typeof e == 'string'
            ? e
            : typeof e == 'object'
            ? e.type
            : e.name || '(anonymous)',
        info: l,
        params: u,
        exec: c,
      })
      continue
    }
    let d = c,
      [f, p, m] = d.resolve(n, s, l, u, c, i)
    ;(s = f),
      'retryResolve' in d && a?.push([d, p]),
      'execute' in d &&
        n.actionExecutor({
          type: d.type,
          info: l,
          params: p,
          exec: d.execute.bind(null, n, p),
        }),
      m && (s = Lb(s, t, n, m, i, a))
  }
  return s
}
function Rb(e, t, n, r, i, a) {
  let o = a ? [] : void 0,
    s = Lb(
      e,
      t,
      n,
      r,
      {
        internalQueue: i,
        deferredActorIds: a,
      },
      o
    )
  return (
    o?.forEach(([e, t]) => {
      e.retryResolve(n, s, t)
    }),
    s
  )
}
function zb(e, t, n, r) {
  let i = e,
    a = []
  function o(e, t, r) {
    n.system._sendInspectionEvent({
      type: '@xstate.microstep',
      actorRef: n.self,
      event: t,
      snapshot: e,
      _transitions: r,
    }),
      a.push(e)
  }
  if (t.type === 'xstate.stop')
    return (
      (i = Zb(Bb(i, t, n), { status: 'stopped' })),
      o(i, t, []),
      {
        snapshot: i,
        microstates: a,
      }
    )
  let s = t
  if (s.type !== ay) {
    let t = s,
      c = Cy(t),
      l = Vb(t, i)
    if (c && !l.length)
      return (
        (i = Zb(e, {
          status: 'error',
          error: t.error,
        })),
        o(i, t, []),
        {
          snapshot: i,
          microstates: a,
        }
      )
    ;(i = Ob(l, e, n, s, !1, r)), o(i, t, l)
  }
  let c = !0
  for (; i.status === 'active'; ) {
    let e = c ? Hb(i, s) : [],
      t = e.length ? i : void 0
    if (!e.length) {
      if (!r.length) break
      ;(s = r.shift()), (e = Vb(s, i))
    }
    ;(i = Ob(e, i, n, s, !1, r)), (c = i !== t), o(i, s, e)
  }
  return (
    i.status !== 'active' && Bb(i, s, n),
    {
      snapshot: i,
      microstates: a,
    }
  )
}
function Bb(e, t, n) {
  return Rb(
    e,
    t,
    n,
    Object.values(e.children).map(e => Gy(e)),
    [],
    void 0
  )
}
function Vb(e, t) {
  return t.machine.getTransitionData(t, e)
}
function Hb(e, t) {
  let n = /* @__PURE__ */ new Set(),
    r = e._nodes.filter(qy)
  for (let i of r)
    loop: for (let r of [i].concat(Yy(i, void 0)))
      if (r.always) {
        for (let i of r.always)
          if (i.guard === void 0 || Ky(i.guard, e.context, t, e)) {
            n.add(i)
            break loop
          }
      }
  return Sb(Array.from(n), new Set(e._nodes), e.historyValue)
}
function Ub(e, t) {
  return $y(e, [...Xy(mb(e, t))])
}
function Wb(e) {
  return !!e && typeof e == 'object' && 'machine' in e && 'value' in e
}
var Gb = function (e) {
    return my(e, this.value)
  },
  Kb = function (e) {
    return this.tags.has(e)
  },
  qb = function (e) {
    let t = this.machine.getTransitionData(this, e)
    return !!t?.length && t.some(e => e.target !== void 0 || e.actions.length)
  },
  Jb = function () {
    let {
      _nodes: e,
      tags: t,
      machine: n,
      getMeta: r,
      toJSON: i,
      can: a,
      hasTag: o,
      matches: s,
      ...c
    } = this
    return {
      ...c,
      tags: Array.from(t),
    }
  },
  Yb = function () {
    return this._nodes.reduce(
      (e, t) => (t.meta !== void 0 && (e[t.id] = t.meta), e),
      {}
    )
  }
function Xb(e, t) {
  return {
    status: e.status,
    output: e.output,
    error: e.error,
    machine: t,
    context: e.context,
    _nodes: e._nodes,
    value: $y(t.root, e._nodes),
    tags: new Set(e._nodes.flatMap(e => e.tags)),
    children: e.children,
    historyValue: e.historyValue || {},
    matches: Gb,
    hasTag: Kb,
    can: qb,
    getMeta: Yb,
    toJSON: Jb,
  }
}
function Zb(e, t = {}) {
  return Xb(
    {
      ...e,
      ...t,
    },
    e.machine
  )
}
function Qb(e, t) {
  let {
      _nodes: n,
      tags: r,
      machine: i,
      children: a,
      context: o,
      can: s,
      hasTag: c,
      matches: l,
      getMeta: u,
      toJSON: d,
      ...f
    } = e,
    p = {}
  for (let e in a) {
    let n = a[e]
    p[e] = {
      snapshot: n.getPersistedSnapshot(t),
      src: n.src,
      systemId: n._systemId,
      syncSnapshot: n._syncSnapshot,
    }
  }
  return {
    ...f,
    context: $b(o),
    children: p,
  }
}
function $b(e) {
  let t
  for (let n in e) {
    let r = e[n]
    if (r && typeof r == 'object')
      if ('sessionId' in r && 'send' in r && 'ref' in r)
        (t ??= Array.isArray(e) ? e.slice() : { ...e }),
          (t[n] = {
            xstate$$type: 1,
            id: r.id,
          })
      else {
        let i = $b(r)
        i !== r && ((t ??= Array.isArray(e) ? e.slice() : { ...e }), (t[n] = i))
      }
  }
  return t ?? e
}
function ex(e, t, n, r, { event: i, id: a, delay: o }, { internalQueue: s }) {
  let c = t.machine.implementations.delays
  if (typeof i == 'string')
    throw Error(
      `Only event objects may be used with raise; use raise({ type: "${i}" }) instead`
    )
  let l = typeof i == 'function' ? i(n, r) : i,
    u
  if (typeof o == 'string') {
    let e = c && c[o]
    u = typeof e == 'function' ? e(n, r) : e
  } else u = typeof o == 'function' ? o(n, r) : o
  return (
    typeof u != 'number' && s.push(l),
    [
      t,
      {
        event: l,
        id: a,
        delay: u,
      },
      void 0,
    ]
  )
}
function tx(e, t) {
  let { event: n, delay: r, id: i } = t
  if (typeof r == 'number') {
    e.defer(() => {
      let t = e.self
      e.system.scheduler.schedule(t, t, n, r, i)
    })
    return
  }
}
function nx(e, t) {
  function n(e, t) {}
  return (
    (n.type = 'xstate.raise'),
    (n.event = e),
    (n.id = t?.id),
    (n.delay = t?.delay),
    (n.resolve = ex),
    (n.execute = tx),
    n
  )
}
//#endregion
//#region node_modules/xstate/dist/log-3d9d72a9.esm.js
function rx(e, { machine: t, context: n }, r, i) {
  let a = (a, o) => {
    if (typeof a == 'string') {
      let s = Oy(t, a)
      if (!s)
        throw Error(`Actor logic '${a}' not implemented in machine '${t.id}'`)
      let c = Iy(s, {
        id: o?.id,
        parent: e.self,
        syncSnapshot: o?.syncSnapshot,
        input:
          typeof o?.input == 'function'
            ? o.input({
                context: n,
                event: r,
                self: e.self,
              })
            : o?.input,
        src: a,
        systemId: o?.systemId,
      })
      return (i[c.id] = c), c
    } else
      return Iy(a, {
        id: o?.id,
        parent: e.self,
        syncSnapshot: o?.syncSnapshot,
        input: o?.input,
        src: a,
        systemId: o?.systemId,
      })
  }
  return (t, n) => {
    let r = a(t, n)
    return (
      (i[r.id] = r),
      e.defer(() => {
        r._processingStatus !== Ny.Stopped && r.start()
      }),
      r
    )
  }
}
function ix(e, t, n, r, { assignment: i }) {
  if (!t.context)
    throw Error(
      'Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.'
    )
  let a = {},
    o = {
      context: t.context,
      event: n.event,
      spawn: rx(e, t, n.event, a),
      self: e.self,
      system: e.system,
    },
    s = {}
  if (typeof i == 'function') s = i(o, r)
  else
    for (let e of Object.keys(i)) {
      let t = i[e]
      s[e] = typeof t == 'function' ? t(o, r) : t
    }
  return [
    Zb(t, {
      context: Object.assign({}, t.context, s),
      children: Object.keys(a).length
        ? {
            ...t.children,
            ...a,
          }
        : t.children,
    }),
    void 0,
    void 0,
  ]
}
function ax(e) {
  function t(e, t) {}
  return (t.type = 'xstate.assign'), (t.assignment = e), (t.resolve = ix), t
}
function ox(e, t, n, r, { event: i }) {
  return [t, { event: typeof i == 'function' ? i(n, r) : i }, void 0]
}
function sx(e, { event: t }) {
  e.defer(() => e.emit(t))
}
function cx(e) {
  function t(e, t) {}
  return (
    (t.type = 'xstate.emit'),
    (t.event = e),
    (t.resolve = ox),
    (t.execute = sx),
    t
  )
}
var lx = /*#__PURE__*/ (function (e) {
  return (e.Parent = '#_parent'), (e.Internal = '#_internal'), e
})({})
function ux(e, t, n, r, { to: i, event: a, id: o, delay: s }, c) {
  let l = t.machine.implementations.delays
  if (typeof a == 'string')
    throw Error(
      `Only event objects may be used with sendTo; use sendTo({ type: "${a}" }) instead`
    )
  let u = typeof a == 'function' ? a(n, r) : a,
    d
  if (typeof s == 'string') {
    let e = l && l[s]
    d = typeof e == 'function' ? e(n, r) : e
  } else d = typeof s == 'function' ? s(n, r) : s
  let f = typeof i == 'function' ? i(n, r) : i,
    p
  if (typeof f == 'string') {
    if (
      ((p =
        f === lx.Parent
          ? e.self._parent
          : f === lx.Internal
          ? e.self
          : f.startsWith('#_')
          ? t.children[f.slice(2)]
          : c.deferredActorIds?.includes(f)
          ? f
          : t.children[f]),
      !p)
    )
      throw Error(
        `Unable to send event to actor '${f}' from machine '${t.machine.id}'.`
      )
  } else p = f || e.self
  return [
    t,
    {
      to: p,
      targetId: typeof f == 'string' ? f : void 0,
      event: u,
      id: o,
      delay: d,
    },
    void 0,
  ]
}
function dx(e, t, n) {
  typeof n.to == 'string' && (n.to = t.children[n.to])
}
function fx(e, t) {
  e.defer(() => {
    let { to: n, event: r, delay: i, id: a } = t
    if (typeof i == 'number') {
      e.system.scheduler.schedule(e.self, n, r, i, a)
      return
    }
    e.system._relay(
      e.self,
      n,
      r.type === 'xstate.error' ? uy(e.self.id, r.data) : r
    )
  })
}
function px(e, t, n) {
  function r(e, t) {}
  return (
    (r.type = 'xstate.sendTo'),
    (r.to = e),
    (r.event = t),
    (r.id = n?.id),
    (r.delay = n?.delay),
    (r.resolve = ux),
    (r.retryResolve = dx),
    (r.execute = fx),
    r
  )
}
function mx(e, t) {
  return px(lx.Parent, e, t)
}
function hx(e, t, n, r, { collect: i }) {
  let a = [],
    o = function (e) {
      a.push(e)
    }
  return (
    (o.assign = (...e) => {
      a.push(ax(...e))
    }),
    (o.cancel = (...e) => {
      a.push(zy(...e))
    }),
    (o.raise = (...e) => {
      a.push(nx(...e))
    }),
    (o.sendTo = (...e) => {
      a.push(px(...e))
    }),
    (o.sendParent = (...e) => {
      a.push(mx(...e))
    }),
    (o.spawnChild = (...e) => {
      a.push(Hy(...e))
    }),
    (o.stopChild = (...e) => {
      a.push(Gy(...e))
    }),
    (o.emit = (...e) => {
      a.push(cx(...e))
    }),
    i(
      {
        context: n.context,
        event: n.event,
        enqueue: o,
        check: e => Ky(e, t.context, n.event, t),
        self: e.self,
        system: e.system,
      },
      r
    ),
    [t, void 0, a]
  )
}
function $(e) {
  function t(e, t) {}
  return (
    (t.type = 'xstate.enqueueActions'), (t.collect = e), (t.resolve = hx), t
  )
}
//#endregion
//#region node_modules/xstate/dist/xstate.esm.js
function gx(e, t) {
  let n = by(t)
  if (!n.includes(e.type)) {
    let t =
      n.length === 1 ? `type "${n[0]}"` : `one of types "${n.join('", "')}"`
    throw Error(`Expected event ${JSON.stringify(e)} to have ${t}`)
  }
}
var _x = /* @__PURE__ */ new WeakMap()
function vx(e, t, n) {
  let r = _x.get(e)
  return r ? t in r || (r[t] = n()) : ((r = { [t]: n() }), _x.set(e, r)), r[t]
}
var yx = {},
  bx = e =>
    typeof e == 'string'
      ? { type: e }
      : typeof e == 'function'
      ? 'resolve' in e
        ? { type: e.type }
        : { type: e.name }
      : e,
  xx = class e {
    constructor(t, n) {
      if (
        ((this.config = t),
        (this.key = void 0),
        (this.id = void 0),
        (this.type = void 0),
        (this.path = void 0),
        (this.states = void 0),
        (this.history = void 0),
        (this.entry = void 0),
        (this.exit = void 0),
        (this.parent = void 0),
        (this.machine = void 0),
        (this.meta = void 0),
        (this.output = void 0),
        (this.order = -1),
        (this.description = void 0),
        (this.tags = []),
        (this.transitions = void 0),
        (this.always = void 0),
        (this.parent = n._parent),
        (this.key = n._key),
        (this.machine = n._machine),
        (this.path = this.parent ? this.parent.path.concat(this.key) : []),
        (this.id = this.config.id || [this.machine.id, ...this.path].join('.')),
        (this.type =
          this.config.type ||
          (this.config.states && Object.keys(this.config.states).length
            ? 'compound'
            : this.config.history
            ? 'history'
            : 'atomic')),
        (this.description = this.config.description),
        (this.order = this.machine.idMap.size),
        this.machine.idMap.set(this.id, this),
        (this.states = this.config.states
          ? vy(
              this.config.states,
              (t, n) =>
                new e(t, {
                  _parent: this,
                  _key: n,
                  _machine: this.machine,
                })
            )
          : yx),
        this.type === 'compound' && !this.config.initial)
      )
        throw Error(
          `No initial state specified for compound state node "#${
            this.id
          }". Try adding { initial: "${
            Object.keys(this.states)[0]
          }" } to the state config.`
        )
      ;(this.history =
        this.config.history === !0 ? 'shallow' : this.config.history || !1),
        (this.entry = by(this.config.entry).slice()),
        (this.exit = by(this.config.exit).slice()),
        (this.meta = this.config.meta),
        (this.output =
          this.type === 'final' || !this.parent ? this.config.output : void 0),
        (this.tags = by(t.tags).slice())
    }
    _initialize() {
      ;(this.transitions = ab(this)),
        this.config.always &&
          (this.always = wy(this.config.always).map(e => ib(this, '', e))),
        Object.keys(this.states).forEach(e => {
          this.states[e]._initialize()
        })
    }
    get definition() {
      return {
        id: this.id,
        key: this.key,
        version: this.machine.version,
        type: this.type,
        initial: this.initial
          ? {
              target: this.initial.target,
              source: this,
              actions: this.initial.actions.map(bx),
              eventType: null,
              reenter: !1,
              toJSON: () => ({
                target: this.initial.target.map(e => `#${e.id}`),
                source: `#${this.id}`,
                actions: this.initial.actions.map(bx),
                eventType: null,
              }),
            }
          : void 0,
        history: this.history,
        states: vy(this.states, e => e.definition),
        on: this.on,
        transitions: [...this.transitions.values()].flat().map(e => ({
          ...e,
          actions: e.actions.map(bx),
        })),
        entry: this.entry.map(bx),
        exit: this.exit.map(bx),
        meta: this.meta,
        order: this.order || -1,
        output: this.output,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags,
      }
    }
    toJSON() {
      return this.definition
    }
    get invoke() {
      return vx(this, 'invoke', () =>
        by(this.config.invoke).map((e, t) => {
          let { src: n, systemId: r } = e,
            i = e.id ?? Dy(this.id, t),
            a = typeof n == 'string' ? n : `xstate.invoke.${Dy(this.id, t)}`
          return {
            ...e,
            src: a,
            id: i,
            systemId: r,
            toJSON() {
              let { onDone: t, onError: n, ...r } = e
              return {
                ...r,
                type: 'xstate.invoke',
                src: a,
                id: i,
              }
            },
          }
        })
      )
    }
    get on() {
      return vx(this, 'on', () =>
        [...this.transitions]
          .flatMap(([e, t]) => t.map(t => [e, t]))
          .reduce((e, [t, n]) => ((e[t] = e[t] || []), e[t].push(n), e), {})
      )
    }
    get after() {
      return vx(this, 'delayedTransitions', () => rb(this))
    }
    get initial() {
      return vx(this, 'initial', () => ob(this, this.config.initial))
    }
    next(e, t) {
      let n = t.type,
        r = [],
        i,
        a = vx(this, `candidates-${n}`, () => nb(this, n))
      for (let o of a) {
        let { guard: a } = o,
          s = e.context,
          c = !1
        try {
          c = !a || Ky(a, s, t, e)
        } catch (e) {
          let t =
            typeof a == 'string' ? a : typeof a == 'object' ? a.type : void 0
          throw Error(
            `Unable to evaluate guard ${
              t ? `'${t}' ` : ''
            }in transition for event '${n}' in state node '${this.id}':\n${
              e.message
            }`
          )
        }
        if (c) {
          r.push(...o.actions), (i = o)
          break
        }
      }
      return i ? [i] : void 0
    }
    get events() {
      return vx(this, 'events', () => {
        let { states: e } = this,
          t = new Set(this.ownEvents)
        if (e)
          for (let n of Object.keys(e)) {
            let r = e[n]
            if (r.states) for (let e of r.events) t.add(`${e}`)
          }
        return Array.from(t)
      })
    }
    get ownEvents() {
      let e = new Set(
        [...this.transitions.keys()].filter(e =>
          this.transitions
            .get(e)
            .some(e => !(!e.target && !e.actions.length && !e.reenter))
        )
      )
      return Array.from(e)
    }
  },
  Sx = class e {
    constructor(e, t) {
      ;(this.config = e),
        (this.version = void 0),
        (this.schemas = void 0),
        (this.implementations = void 0),
        (this.__xstatenode = !0),
        (this.idMap = /* @__PURE__ */ new Map()),
        (this.root = void 0),
        (this.id = void 0),
        (this.states = void 0),
        (this.events = void 0),
        (this.id = e.id || '(machine)'),
        (this.implementations = {
          actors: t?.actors ?? {},
          actions: t?.actions ?? {},
          delays: t?.delays ?? {},
          guards: t?.guards ?? {},
        }),
        (this.version = this.config.version),
        (this.schemas = this.config.schemas),
        (this.transition = this.transition.bind(this)),
        (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
        (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
        (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
        (this.start = this.start.bind(this)),
        (this.root = new xx(e, {
          _key: this.id,
          _machine: this,
        })),
        this.root._initialize(),
        (this.states = this.root.states),
        (this.events = this.root.events)
    }
    provide(t) {
      let { actions: n, guards: r, actors: i, delays: a } = this.implementations
      return new e(this.config, {
        actions: {
          ...n,
          ...t.actions,
        },
        guards: {
          ...r,
          ...t.guards,
        },
        actors: {
          ...i,
          ...t.actors,
        },
        delays: {
          ...a,
          ...t.delays,
        },
      })
    }
    resolveState(e) {
      let t = Ub(this.root, e.value),
        n = Xy(mb(this.root, t))
      return Xb(
        {
          _nodes: [...n],
          context: e.context || {},
          children: {},
          status: eb(n, this.root) ? 'done' : e.status || 'active',
          output: e.output,
          error: e.error,
          historyValue: e.historyValue,
        },
        this
      )
    }
    transition(e, t, n) {
      return zb(e, t, n, []).snapshot
    }
    microstep(e, t, n) {
      return zb(e, t, n, []).microstates
    }
    getTransitionData(e, t) {
      return vb(this.root, e.value, e, t) || []
    }
    getPreInitialState(e, t, n) {
      let { context: r } = this.config,
        i = Xb(
          {
            context: typeof r != 'function' && r ? r : {},
            _nodes: [this.root],
            children: {},
            status: 'active',
          },
          this
        )
      return typeof r == 'function'
        ? Rb(
            i,
            t,
            e,
            [
              ax(({ spawn: e, event: t, self: n }) =>
                r({
                  spawn: e,
                  input: t.input,
                  self: n,
                })
              ),
            ],
            n,
            void 0
          )
        : i
    }
    getInitialSnapshot(e, t) {
      let n = dy(t),
        r = [],
        i = this.getPreInitialState(e, n, r),
        { snapshot: a } = zb(
          Ob(
            [
              {
                target: [...db(this.root)],
                source: this.root,
                reenter: !0,
                actions: [],
                eventType: null,
                toJSON: null,
              },
            ],
            i,
            e,
            n,
            !0,
            r
          ),
          n,
          e,
          r
        )
      return a
    }
    start(e) {
      Object.values(e.children).forEach(e => {
        e.getSnapshot().status === 'active' && e.start()
      })
    }
    getStateNodeById(e) {
      let t = hy(e),
        n = t.slice(1),
        r = tb(t[0]) ? t[0].slice(1) : t[0],
        i = this.idMap.get(r)
      if (!i)
        throw Error(
          `Child state node '#${r}' does not exist on machine '${this.id}'`
        )
      return pb(i, n)
    }
    get definition() {
      return this.root.definition
    }
    toJSON() {
      return this.definition
    }
    getPersistedSnapshot(e, t) {
      return Qb(e, t)
    }
    restoreSnapshot(e, t) {
      let n = {},
        r = e.children
      Object.keys(r).forEach(e => {
        let i = r[e],
          a = i.snapshot,
          o = i.src,
          s = typeof o == 'string' ? Oy(this, o) : o
        s &&
          (n[e] = Iy(s, {
            id: e,
            parent: t.self,
            syncSnapshot: i.syncSnapshot,
            snapshot: a,
            src: o,
            systemId: i.systemId,
          }))
      })
      let i = Xb(
          {
            ...e,
            children: n,
            _nodes: Array.from(Xy(mb(this.root, e.value))),
          },
          this
        ),
        a = /* @__PURE__ */ new Set()
      function o(e, t) {
        if (!a.has(e)) {
          a.add(e)
          for (let n in e) {
            let r = e[n]
            if (r && typeof r == 'object') {
              if ('xstate$$type' in r && r.xstate$$type === 1) {
                e[n] = t[r.id]
                continue
              }
              o(r, t)
            }
          }
        }
      }
      return o(i.context, n), i
    }
  }
function Cx(e, t) {
  return new Sx(e, t)
}
function wx({ schemas: e, actors: t, actions: n, guards: r, delays: i }) {
  return {
    createMachine: a =>
      Cx(
        {
          ...a,
          schemas: e,
        },
        {
          actors: t,
          actions: n,
          guards: r,
          delays: i,
        }
      ),
  }
}
//#endregion
//#region node_modules/@xstate/react/dist/xstate-react.esm.js
var Tx = (e, t) => {
  t(e)
  let n = e.getSnapshot().children
  n &&
    Object.values(n).forEach(e => {
      Tx(e, t)
    })
}
function Ex(e) {
  let t = []
  Tx(e, e => {
    t.push([e, e.getSnapshot()]), (e.observers = /* @__PURE__ */ new Set())
  })
  let n = e.system.getSnapshot?.()
  e.stop(),
    (e.system._snapshot = n),
    t.forEach(([e, t]) => {
      ;(e._processingStatus = 0), (e._snapshot = t)
    })
}
function Dx(e, ...[t]) {
  let [[n, r], i] = j(() => {
    let n = Iy(e, t)
    return [e.config, n]
  })
  if (e.config !== n) {
    let n = Iy(e, {
      ...t,
      snapshot: r.getPersistedSnapshot({ __unsafeAllowInlineActors: !0 }),
    })
    i([e.config, n]), (r = n)
  }
  return (
    Zv(() => {
      r.logic.implementations = e.implementations
    }),
    r
  )
}
function Ox(e, ...[t, n]) {
  let r = Dx(e, t)
  return (
    D(() => {
      if (!n) return
      let e = r.subscribe(Ey(n))
      return () => {
        e.unsubscribe()
      }
    }, [n]),
    D(
      () => (
        r.start(),
        () => {
          Ex(r)
        }
      ),
      [r]
    ),
    r
  )
}
function kx(e, t) {
  return e === t
}
function Ax(e, t, n = kx) {
  let r = T(
      t => {
        if (!e) return () => {}
        let { unsubscribe: n } = e.subscribe(t)
        return n
      },
      [e]
    ),
    i = T(() => e?.getSnapshot(), [e])
  return le(r, i, i, t, n)
}
function jx(e, t) {
  let n = /*#__PURE__*/ g.createContext(null),
    r = n.Provider
  function i({ children: n, logic: i = e, machine: a, options: o }) {
    if (a)
      throw Error(
        'The "machine" prop has been deprecated. Please use "logic" instead.'
      )
    let s = Ox(i, {
      ...t,
      ...o,
    })
    return /*#__PURE__*/ g.createElement(r, {
      value: s,
      children: n,
    })
  }
  i.displayName = 'ActorProvider'
  function a() {
    let e = g.useContext(n)
    if (!e)
      throw Error(
        `You used a hook from "${i.displayName}" but it's not inside a <${i.displayName}> component.`
      )
    return e
  }
  function o(e, t) {
    return Ax(a(), e, t)
  }
  return {
    Provider: i,
    useActorRef: a,
    useSelector: o,
  }
}
//#endregion
//#region src/game/reducers/pull-card-from-deck/index.ts
var Mx = (e, t, n) => {
    let r = z.getPlayer(e, t),
      i = [...r.hand],
      a = [...r.deck],
      o = [...r.discardPile]
    if (n >= a.length) throw new zt(n, t)
    let [s] = a.slice(n, n + 1)
    if (!s) throw new zt(n, t)
    return (
      (a = [...a.slice(0, n), ...a.slice(n + 1)]),
      (i = [...i, s]),
      a.length === 0 && ((a = Nt.shuffle(o)), (o = [])),
      (e = bt(e, t, {
        deck: a,
        hand: i,
        discardPile: o,
      })),
      e
    )
  },
  Nx = (e, t) => {
    let n = z.getPlayer(e, t),
      r = z.findCropIndexesInDeck(e, t, n.deck.length),
      i = Nt.chooseElement(r)
    if (i === void 0)
      throw new It(
        'Could not select a crop card for starting hand: No crop cards available in deck.'
      )
    e = Mx(e, t, i)
    let a = z.getPlayer(e, t)
    return (e = bt(e, t, { hand: Nt.shuffle(a.hand) })), (e = Pt(e, t, 6)), e
  },
  Px = (e, t) => {
    let { deck: n } = z.getPlayer(e, t)
    return bt(e, t, { deck: Nt.shuffle(n) })
  },
  Fx = new (class {
    constructor() {
      this.playerSeed = e => {
        let { deck: t, id: n } = e
        if (t.length !== 60)
          throw new It(
            `Deck for player ${n} contains ${t.length} cards but must contain 60 cards instead`
          )
        if (!t.every(mn))
          throw new It(`Deck for player ${n} contain invalid cards`)
        if (!t.some(cn))
          throw new It(`Deck for player ${n} does not contain any crops`)
        return !0
      }
    }
  })(),
  Ix = new (class {
    buildField(e = {}) {
      return {
        cards: [],
        ...e,
      }
    }
    buildPlayer(e = {}) {
      return {
        id: st(),
        funds: 50,
        deck: [],
        hand: [],
        discardPile: [],
        field: this.buildField(e?.field),
        cardsPlayedDuringTurn: [],
        ...e,
      }
    }
    buildTable(e = {}) {
      return {
        players: {},
        communityFund: 100,
        ...e,
      }
    }
    buildMatch(e = {}, t = st()) {
      let n = this.buildTable(e?.table),
        { players: r } = n,
        [i = null] = Object.keys(r),
        a = {
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
          selectedWaterCardInHandIdx: e.selectedWaterCardInHandIdx ?? -1,
        }
      return (
        Object.keys(r).length === 0 &&
          (a = yt(a, {
            players: {
              ...a.table.players,
              [t]: this.buildPlayer({ id: t }),
            },
          })),
        a
      )
    }
    buildMatchForSession(e, t = e[0]?.id) {
      let n = this.buildMatch({}, t)
      for (let t of e) {
        Fx.playerSeed(t)
        let r = this.buildPlayer({
          ...t,
          funds: Math.floor(n.table.communityFund / e.length),
        })
        ;(n = yt(n, {
          players: {
            ...n.table.players,
            [r.id]: r,
          },
        })),
          (n = Px(n, r.id)),
          (n = Nx(n, r.id))
      }
      return (
        (n = yt(n, { communityFund: n.table.communityFund % e.length })),
        (n = vt(n, { currentPlayerId: n.sessionOwnerPlayerId })),
        n
      )
    }
    buildPlayedCrop(e) {
      return {
        instance: e,
        wasWateredDuringTurn: !1,
        waterCards: 0,
      }
    }
    buildPlayedTool(e) {
      return { instance: e }
    }
  })(),
  Lx = () => ({
    botState: {
      cropCardIndicesToHarvest: [],
      cropsToPlayDuringTurn: 0,
      fieldCropIndicesToWaterDuringTurn: [],
      toolCardsThatCanBePlayed: 0,
    },
    match: Ix.buildMatch({
      cardsToDrawAtTurnStart: 1,
      eventCardsThatCanBePlayed: 1,
      selectedWaterCardInHandIdx: -1,
      winner: null,
    }),
    shell: { triggerNotification: () => {} },
  }),
  Rx = new (class {
    getNumberOfCropCardsToPlay(e, t, { minimumCropsToPlay: n = 0 } = {}) {
      let r = z.getPlayer(e, t),
        i = z.findCropIndexesInPlayerHand(e, t),
        a = Math.max(n, Nt.chooseIntegerBetween(0, i.length)),
        o = 6 - r.field.cards.filter(e => !!e).length
      return Math.min(o, a, i.length)
    }
    getNumberOfEventCardsToPlay(e, t) {
      return +(z.findEventIndexesInPlayerHand(e, t).length > 0)
    }
    getNumberOfToolCardsToPlay(e, t) {
      let n = z.findToolIndexesInPlayerHand(e, t)
      return Nt.chooseIntegerBetween(0, n.length)
    }
    getEventCardIndexToPlay(e, t) {
      let n = z.findEventIndexesInPlayerHand(e, t)
      return Nt.chooseElement(n)
    }
    getToolCardIndexToPlay(e, t) {
      let n = z.findToolIndexesInPlayerHand(e, t)
      return Nt.chooseElement(n)
    }
    getCropCardIndicesToWater(e, t) {
      let {
          field: { cards: n },
          hand: r,
        } = z.getPlayer(e, t),
        i = [],
        { length: a } = r.filter(e => Qe(e))
      for (let e = 0; e < n.length && i.length !== a; e++) {
        let t = n[e]
        un(t) &&
          t.waterCards < t.instance.waterToMature &&
          t.wasWateredDuringTurn === !1 &&
          (i = [...i, e])
      }
      return i
    }
    getCropCardIndicesToHarvest(e, t) {
      let {
          field: { cards: n },
        } = z.getPlayer(e, t),
        r = []
      for (let e = 0; e < n.length; e++) {
        let t = n[e]
        un(t) && t.waterCards >= t.instance.waterToMature && (r = [...r, e])
      }
      return r
    }
    getOpenFieldPosition(e, t) {
      let { field: n } = z.getPlayer(e, t),
        { cards: r } = n,
        i = []
      for (let e = 0; e < Math.max(6, r.length); e++)
        r[e] === void 0 && (i = [...i, e])
      return Nt.chooseElement(i)
    }
  })(),
  zx = (e, t, n) => {
    let r = z.getPlayer(e, t),
      i = [...n, ...r.cardsPlayedDuringTurn]
    return (e = bt(e, t, { cardsPlayedDuringTurn: i })), e
  },
  Bx = (e, t) => {
    let n = (t, n) => {
      let r = z.getPlayer(e, t).hand[n]
      return R(r), zx(e, t, [r])
    }
    switch (t.type) {
      case F.SELECT_CARD_POSITION: {
        let { currentPlayerId: r } = e
        R(r), (e = n(r, t.cardIdxInHand))
        break
      }
      case F.PLAY_EVENT:
      case F.PLAY_TOOL:
      case F.PLAY_WATER: {
        let { currentPlayerId: r } = e
        R(r)
        let i = z.getPlayer(e, r).hand[t.cardIdxInHand]
        if ((R(i), et(i) && i.isPlantable)) break
        e = n(r, t.cardIdxInHand)
        break
      }
      default:
    }
    return e
  },
  Vx = {
    [L.CHOOSING_CARD_POSITION]: {
      on: {
        [F.SELECT_CARD_POSITION]: L.PLANTING_CARD,
        [F.OPERATION_ABORTED]: [
          {
            guard: tt.IS_SETUP_PHASE,
            target: L.WAITING_FOR_PLAYER_SETUP_ACTION,
          },
          { target: L.WAITING_FOR_PLAYER_TURN_ACTION },
        ],
      },
      entry: $(({ event: e, enqueue: t, context: { match: n } }) => {
        switch (e.type) {
          case F.PLAY_PLANTABLE_TOOL: {
            let { currentPlayerId: r, sessionOwnerPlayerId: i } = n,
              { playerId: a, cardIdxInHand: o } = e
            if ((R(r), r !== i)) {
              let e = Rx.getOpenFieldPosition(n, r)
              R(e),
                t.raise({
                  type: F.SELECT_CARD_POSITION,
                  cardIdxInHand: o,
                  fieldIdxToPlace: e,
                  playerId: a,
                })
            }
            break
          }
        }
        t.assign({ match: n })
      }),
      exit: $(({ event: e, enqueue: t, context: { match: n } }) => {
        switch (e.type) {
          case F.SELECT_CARD_POSITION:
            n = Bx(n, e)
            break
        }
        t.assign({ match: n })
      }),
    },
  },
  Hx = {
    [L.GAME_OVER]: {
      on: {
        [F.INIT]: {
          actions: $(({ event: e, enqueue: t }) => {
            gx(e, F.INIT)
            let { playerSeeds: n, userPlayerId: r } = e,
              i = Ix.buildMatchForSession(n, r),
              a = Lx()
            t.assign({
              ...a,
              match: i,
            }),
              t.raise({ type: F.PROMPT_PLAYER_FOR_SETUP_ACTION })
          }),
        },
        [F.PROMPT_PLAYER_FOR_SETUP_ACTION]: L.WAITING_FOR_PLAYER_SETUP_ACTION,
      },
      entry: $(({ event: e, enqueue: t, context: { match: n } }) => {
        gx(e, F.PLAYER_RAN_OUT_OF_FUNDS)
        let r = Object.keys(n.table.players).find(t => t !== e.playerId)
        if (r === void 0) throw new It('Winner could not be determined')
        t.assign({
          match: {
            ...n,
            winner: r,
          },
        })
      }),
    },
  },
  Ux = e => {
    let t = z.playerIds(e),
      n = z.nextPlayerIndex(e)
    return (e = vt(e, { currentPlayerId: t[n] })), e
  },
  Wx = new (class {
    removeAt(e, t) {
      if (t >= e.length) throw Error(`removeAt: Index ${t} out of bounds`)
      return e.filter((e, n) => n !== t)
    }
    replaceAt(e, t, n) {
      let r = e.slice(0, t),
        i = e.slice(t + 1)
      return [...Array.from({ length: t }, (e, t) => r[t]), n, ...i]
    }
  })(),
  Gx = (e, t, n, r) => {
    let { field: i } = z.getPlayer(e, t),
      { cards: a } = i
    if (z.fullPlots(e, t).length >= 6) throw new Rt(t)
    if (r === -1) throw new Lt('fieldIdxToPlace must not be -1')
    return (a = Wx.replaceAt(a, r, n)), (e = xt(e, t, { cards: a })), e
  },
  Kx = (e, t, n, r) => {
    let { hand: i } = z.getPlayer(e, t),
      a = i[n]
    if (!a) throw new zt(n, t)
    let o = Wx.removeAt(i, n),
      s
    if (cn(a))
      s = {
        instance: a,
        wasWateredDuringTurn: !1,
        waterCards: 0,
      }
    else if (et(a)) s = { instance: a }
    else throw new Bt(`${a.id} is not a plantable card.`)
    return (e = Gx(e, t, s, r)), (e = bt(e, t, { hand: o })), e
  },
  qx = {
    [L.PERFORMING_BOT_SETUP_ACTION]: {
      on: {
        [F.START_TURN]: {
          target: L.WAITING_FOR_PLAYER_TURN_ACTION,
          guard: tt.IS_SETUP_PHASE,
        },
        [F.PROMPT_BOT_FOR_SETUP_ACTION]: {
          actions: $(
            ({
              event: e,
              context: {
                match: t,
                botState: n,
                botState: { cropsToPlayDuringTurn: r },
              },
              enqueue: i,
            }) => {
              gx(e, F.PROMPT_BOT_FOR_SETUP_ACTION)
              let { currentPlayerId: a } = t
              if ((R(a), z.getPlayer(t, a).field.cards.length > 0 && r === 0))
                i.raise({ type: F.START_TURN })
              else {
                r === 0 &&
                  (r = Rx.getNumberOfCropCardsToPlay(t, a, {
                    minimumCropsToPlay: 1,
                  }))
                let e = z.findCropIndexesInPlayerHand(t, a),
                  n = Nt.chooseElement(e)
                if (n === void 0)
                  throw new It(
                    `Expected crops in hand but none were found for bot player ${a}`
                  )
                i.raise(
                  {
                    type: F.PLAY_CROP,
                    playerId: a,
                    cardIdxInHand: n,
                  },
                  { delay: 750 }
                )
              }
              i.assign({
                match: t,
                botState: {
                  ...n,
                  cropsToPlayDuringTurn: r,
                },
              })
            }
          ),
        },
        [F.PLAY_CROP]: {
          actions: $(({ event: e, context: { match: t }, enqueue: n }) => {
            gx(e, F.PLAY_CROP)
            let { cardIdxInHand: r } = e,
              { currentPlayerId: i } = t
            R(i), (t = Bx(t, e))
            let a = Rx.getOpenFieldPosition(t, i)
            if (a === void 0)
              throw new Lt(`${F.PLAY_CROP} event occurred for a full field`)
            n.raise({
              type: F.SELECT_CARD_POSITION,
              playerId: i,
              cardIdxInHand: r,
              fieldIdxToPlace: a,
            }),
              n.assign({ match: t })
          }),
        },
        [F.SELECT_CARD_POSITION]: {
          actions: $(
            ({
              event: e,
              context: {
                match: t,
                botState: n,
                botState: { cropsToPlayDuringTurn: r },
              },
              enqueue: i,
            }) => {
              gx(e, F.SELECT_CARD_POSITION)
              let { cardIdxInHand: a, playerId: o, fieldIdxToPlace: s } = e,
                { currentPlayerId: c } = t
              R(c),
                (t = Bx(t, e)),
                (t = Kx(t, o, a, s)),
                r--,
                i.raise({ type: F.PROMPT_BOT_FOR_SETUP_ACTION }),
                i.assign({
                  match: t,
                  botState: {
                    ...n,
                    cropsToPlayDuringTurn: r,
                  },
                })
            }
          ),
        },
      },
      entry: $(({ context: { match: e }, enqueue: t }) => {
        let { currentPlayerId: n } = e
        R(n),
          (e = Ux(e)),
          t.raise({ type: F.PROMPT_BOT_FOR_SETUP_ACTION }),
          t.assign({ match: e })
      }),
    },
  },
  Jx = new (class {
    constructor() {
      ;(this.getCropBaseValue = e => e.waterToMature * 2),
        (this.getCropSaleValue = (e, t) => {
          let n = this.getCropBaseValue(t)
          return (
            t.id === e.buffedCrop?.crop.id && (n *= e.buffedCrop.multiplier),
            t.id === e.nerfedCrop?.crop.id && (n *= e.nerfedCrop.multiplier),
            (n = Math.floor(n)),
            Math.min(n, e.table.communityFund)
          )
        })
    }
  })(),
  Yx = (e, t) => {
    let { communityFund: n } = e.table,
      r = Math.max(0, n + t)
    return (e = yt(e, { communityFund: r })), e
  },
  Xx = (e, t, n) => {
    let { funds: r } = z.getPlayer(e, t),
      i = Math.max(0, r + n)
    return (e = bt(e, t, { funds: i })), e
  },
  Zx = (e, t, n) => {
    let r = [n, ...z.getPlayer(e, t).discardPile]
    return (e = bt(e, t, { discardPile: r })), e
  },
  Qx = (e, t, n) => {
    let { field: r } = z.getPlayer(e, t),
      i = r.cards[n]
    if (!i) throw new zt(n, t)
    let { cards: a } = r
    return (
      (a = Wx.replaceAt(a, n, void 0)),
      (e = xt(e, t, { cards: a })),
      (e = Zx(e, t, i.instance)),
      e
    )
  },
  $x = (e, t, n) => {
    let r = z.getPlayedCardFromField(e, t, n)
    Jt(r)
    let i = Jx.getCropSaleValue(e, r.instance)
    return (e = Xx(e, t, i)), (e = Yx(e, -i)), (e = Qx(e, t, n)), e
  },
  eS = (e, t, n) => {
    let { hand: r } = z.getPlayer(e, t),
      i = r[n]
    if (!i) throw new zt(n, t)
    let a = Wx.removeAt(r, n)
    return (e = bt(e, t, { hand: a })), (e = Zx(e, t, i)), e
  },
  tS = /* @__PURE__ */ we(
    /* @__PURE__ */ N((e, t) => {
      var n = NaN,
        r = '[object Symbol]',
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        c = parseInt,
        l = Object.prototype.toString
      function u(e, t, n) {
        return (
          e === e &&
            (n !== void 0 && (e = e <= n ? e : n),
            t !== void 0 && (e = e >= t ? e : t)),
          e
        )
      }
      function d(e) {
        var t = typeof e
        return !!e && (t == 'object' || t == 'function')
      }
      function f(e) {
        return !!e && typeof e == 'object'
      }
      function p(e) {
        return typeof e == 'symbol' || (f(e) && l.call(e) == r)
      }
      function m(e) {
        if (typeof e == 'number') return e
        if (p(e)) return n
        if (d(e)) {
          var t = typeof e.valueOf == 'function' ? e.valueOf() : e
          e = d(t) ? t + '' : t
        }
        if (typeof e != 'string') return e === 0 ? e : +e
        e = e.replace(i, '')
        var r = o.test(e)
        return r || s.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? n : +e
      }
      function h(e, t, n) {
        return (
          n === void 0 && ((n = t), (t = void 0)),
          n !== void 0 && ((n = m(n)), (n = n === n ? n : 0)),
          t !== void 0 && ((t = m(t)), (t = t === t ? t : 0)),
          u(m(e), t, n)
        )
      }
      t.exports = h
    })()
  ),
  nS = (e, t, n) => {
    let { funds: r } = z.getPlayer(e, n),
      { communityFund: i } = e.table,
      a = (0, tS.default)(t, -i, r)
    return (e = Xx(e, n, -a)), (e = Yx(e, a)), e
  },
  rS = e => {
    let t = Object.values(e.table.players).reduce(
        (e, t) => [
          ...e,
          ...t.deck,
          ...t.hand,
          ...t.discardPile,
          ...t.field.cards.filter(e => e !== void 0).map(e => e.instance),
        ],
        []
      ),
      n = new Set(t.filter(cn).map(e => e.id)),
      r = Object.values(_t).filter(e => n.has(e.id)),
      [i, a] = Nt.shuffle(r)
    return (
      (e = vt(e, {
        buffedCrop: i
          ? {
              crop: i,
              multiplier: 2,
            }
          : null,
        nerfedCrop: a
          ? {
              crop: a,
              multiplier: 0.5,
            }
          : null,
      })),
      e
    )
  },
  iS = (e, t, n = 1) => {
    if (
      ((e = vt(e, { turn: e.turn + 1 })),
      (e = bt(e, t, { cardsPlayedDuringTurn: [] })),
      (e = nS(e, 5, t)),
      z.getPlayer(e, t).funds === 0)
    )
      throw new Ft(t)
    e = Pt(e, t, n)
    let r = z.getPlayer(e, t).field.cards
    for (let n = 0; n < r.length; n++) {
      let i = r[n]
      un(i) && (e = Xt(e, t, n, { wasWateredDuringTurn: !1 }))
    }
    return (e = rS(e)), e
  },
  aS = e => t => {
    try {
      return e(t)
    } catch (e) {
      if (e instanceof Ft) {
        let { enqueue: n } = t
        n.raise({
          type: F.PLAYER_RAN_OUT_OF_FUNDS,
          playerId: e.playerId,
        })
      } else throw (console.error(e), new It('Unexpected bot logic error'))
    }
  },
  oS = {
    [L.PERFORMING_BOT_TURN_ACTION]: {
      initial: I.INITIALIZING,
      exit: $(
        ({ event: e, context: { botState: t, match: n }, enqueue: r }) => {
          n = Bx(n, e)
          let { currentBotTurnPhase: i } = t
          switch (e.type) {
            case F.SELECT_CARD_POSITION:
              i = I.PLAYING_CROPS
              break
            case F.PLAY_EVENT:
              i = I.PLAYING_EVENTS
              break
            case F.PLAY_TOOL:
              i = I.PLAYING_TOOLS
              break
            default:
          }
          r.assign({
            match: n,
            botState: {
              ...t,
              currentBotTurnPhase: i,
            },
          })
        }
      ),
      on: {
        [F.PLAYER_RAN_OUT_OF_FUNDS]: L.GAME_OVER,
        [F.SELECT_CARD_POSITION]: L.PLANTING_CARD,
        [F.PLAY_EVENT]: L.PLAYING_EVENT,
        [F.PLAY_TOOL]: L.PLAYING_TOOL,
        [F.START_TURN]: L.WAITING_FOR_PLAYER_TURN_ACTION,
      },
      states: {
        [I.INITIALIZING]: {
          on: {
            [F.BOT_TURN_INITIALIZED]: [
              {
                guard: tt.IS_BOT_PHASE_PLAYING_EVENTS,
                target: I.PLAYING_EVENTS,
              },
              {
                guard: tt.IS_BOT_PHASE_PLAYING_TOOLS,
                target: I.PLAYING_TOOLS,
              },
              { target: I.PLAYING_CROPS },
            ],
          },
          entry: $(
            aS(
              ({
                event: e,
                context: t,
                context: { botState: n, match: r },
                enqueue: i,
              }) => {
                switch (e.type) {
                  case F.START_TURN: {
                    let e = r
                    r = Ux(r)
                    let { currentPlayerId: i } = r
                    R(i)
                    let a = e.table.players[i]
                    if (a)
                      for (let e of a.cardsPlayedDuringTurn)
                        et(e) &&
                          e.onStartFollowingTurn &&
                          (r = e.onStartFollowingTurn({
                            ...t,
                            match: r,
                          }).match)
                    ;(r = iS(r, i, r.cardsToDrawAtTurnStart)),
                      (t = _S.applyDailyEffects({
                        ...t,
                        match: r,
                      })),
                      (r = t.match),
                      (r = {
                        ...r,
                        eventCardsThatCanBePlayed:
                          Rx.getNumberOfEventCardsToPlay(r, i),
                      }),
                      (n = {
                        ...n,
                        cropsToPlayDuringTurn: Rx.getNumberOfCropCardsToPlay(
                          r,
                          i
                        ),
                        currentBotTurnPhase: void 0,
                        toolCardsThatCanBePlayed: Rx.getNumberOfToolCardsToPlay(
                          r,
                          i
                        ),
                      })
                    break
                  }
                  default:
                }
                i.assign({
                  botState: n,
                  match: r,
                }),
                  i.raise({ type: F.BOT_TURN_INITIALIZED })
              }
            )
          ),
        },
        [I.PLAYING_CROPS]: {
          on: {
            [F.PLAY_CROP]: I.PLACING_CROP,
            [F.BOT_TURN_PHASE_COMPLETE]: I.WATERING_CROPS,
          },
          entry: $(
            aS(
              ({
                context: {
                  botState: { cropsToPlayDuringTurn: e },
                  match: t,
                },
                enqueue: n,
              }) => {
                if (e > 0) {
                  let { currentPlayerId: e } = t
                  R(e)
                  let r = z.findCropIndexesInPlayerHand(t, e),
                    i = Nt.chooseElement(r)
                  if (i === void 0)
                    throw new It(
                      `areCropsToPlay is true but there are no crops in the hand of bot player ${e}`
                    )
                  n.raise(
                    {
                      type: F.PLAY_CROP,
                      playerId: e,
                      cardIdxInHand: i,
                    },
                    { delay: 750 }
                  )
                } else n.raise({ type: F.BOT_TURN_PHASE_COMPLETE })
              }
            )
          ),
        },
        [I.PLACING_CROP]: {
          on: { [F.BOT_TURN_PHASE_COMPLETE]: I.PLAYING_CROPS },
          entry: $(
            aS(({ context: { botState: e, match: t }, enqueue: n }) => {
              let { cropsToPlayDuringTurn: r } = e
              if (r > 0) {
                let { currentPlayerId: e } = t
                R(e)
                let r = z.findCropIndexesInPlayerHand(t, e),
                  i = Nt.chooseElement(r)
                if (i === void 0)
                  throw new It(
                    `areCropsToPlay is true but there are no crops in the hand of bot player ${e}`
                  )
                let a = Rx.getOpenFieldPosition(t, e)
                if (a === void 0)
                  throw new Lt(
                    `${F.BOT_TURN_PHASE_COMPLETE} event occurred for a full field`
                  )
                n.raise(
                  {
                    type: F.SELECT_CARD_POSITION,
                    playerId: e,
                    cardIdxInHand: i,
                    fieldIdxToPlace: a,
                  },
                  { delay: 750 }
                )
              } else n.raise({ type: F.BOT_TURN_PHASE_COMPLETE })
            })
          ),
        },
        [I.WATERING_CROPS]: {
          on: {
            [F.PLAY_WATER]: I.WATERING_CROP,
            [F.BOT_TURN_PHASE_COMPLETE]: I.PLAYING_EVENTS,
          },
          entry: $(
            aS(({ context: { botState: e, match: t }, enqueue: n }) => {
              let { currentPlayerId: r } = t
              R(r)
              let i = Rx.getCropCardIndicesToWater(t, r)
              if (i.length > 0) {
                let e = z.findWaterIndexesInPlayerHand(t, r)
                e[0] !== void 0 &&
                  n.raise(
                    {
                      type: F.PLAY_WATER,
                      cardIdxInHand: e[0],
                      playerId: r,
                    },
                    { delay: 750 }
                  )
              } else n.raise({ type: F.BOT_TURN_PHASE_COMPLETE })
              n.assign({
                botState: {
                  ...e,
                  fieldCropIndicesToWaterDuringTurn: i,
                },
              })
            })
          ),
        },
        [I.WATERING_CROP]: {
          on: { [F.BOT_TURN_PHASE_COMPLETE]: I.WATERING_CROPS },
          entry: $(
            ({
              event: e,
              context: {
                match: t,
                botState: { fieldCropIndicesToWaterDuringTurn: n },
                shell: { triggerNotification: r },
              },
              enqueue: i,
            }) => {
              t = Bx(t, e)
              let { currentPlayerId: a } = t
              R(a)
              let o = z.getPlayer(t, a),
                s = o.hand.findIndex(e => Qe(e)),
                [c] = n
              R(
                c,
                `fieldCropIndicesToWaterDuringTurn is empty in ${I.WATERING_CROP}`
              )
              let l = o.field.cards[c]
              Jt(l)
              let u = {
                ...l,
                wasWateredDuringTurn: !0,
                waterCards: l.waterCards + 1,
              }
              ;(t = Xt(t, a, c, u)),
                (t = eS(t, a, s)),
                r({
                  type: nt.CROP_WATERED,
                  payload: { cropWatered: l.instance },
                }),
                i.raise({ type: F.BOT_TURN_PHASE_COMPLETE }),
                i.assign({ match: t })
            }
          ),
        },
        [I.PLAYING_EVENTS]: {
          on: { [F.BOT_TURN_PHASE_COMPLETE]: I.PLAYING_TOOLS },
          entry: $(
            aS(({ context: { match: e }, enqueue: t }) => {
              if (e.eventCardsThatCanBePlayed > 0) {
                let { currentPlayerId: n } = e
                R(n)
                let r = Rx.getEventCardIndexToPlay(e, n)
                if (r === void 0)
                  throw new It(
                    `areEventCardsToPlay is true but there are no events in the hand of bot player ${n}`
                  )
                t.raise(
                  {
                    type: F.PLAY_EVENT,
                    cardIdxInHand: r,
                    playerId: n,
                  },
                  { delay: 750 }
                )
              } else t.raise({ type: F.BOT_TURN_PHASE_COMPLETE })
            })
          ),
        },
        [I.PLAYING_TOOLS]: {
          on: { [F.BOT_TURN_PHASE_COMPLETE]: I.HARVESTING_CROPS },
          entry: $(
            aS(({ context: { botState: e, match: t }, enqueue: n }) => {
              if (e.toolCardsThatCanBePlayed > 0) {
                let { currentPlayerId: e } = t
                R(e)
                let r = Rx.getToolCardIndexToPlay(t, e)
                if (r === void 0)
                  throw new It(
                    `areToolsToPlay is true but there are no tools in the hand of bot player ${e}`
                  )
                let i = t.table.players[e]?.hand[r]
                R(i, 'toolCardInstance is undefined'), Ut(i.id)
                let a = Qt[i.id],
                  o = a.isPlantable && z.fullPlots(t, e).length < 6
                if (!a.isPlantable || o) {
                  n.raise(
                    {
                      type: F.PLAY_TOOL,
                      cardIdxInHand: r,
                      playerId: e,
                    },
                    { delay: 750 }
                  )
                  return
                }
              }
              n.raise({ type: F.BOT_TURN_PHASE_COMPLETE })
            })
          ),
        },
        [I.HARVESTING_CROPS]: {
          on: {
            [F.HARVEST_CROP]: I.HARVESTING_CROP,
            [F.BOT_TURN_PHASE_COMPLETE]: I.DONE,
          },
          entry: $(
            aS(({ context: { botState: e, match: t }, enqueue: n }) => {
              let { currentPlayerId: r } = t
              R(r)
              let i = Rx.getCropCardIndicesToHarvest(t, r)
              i.length > 0
                ? i[0] !== void 0 &&
                  n.raise(
                    {
                      type: F.HARVEST_CROP,
                      playerId: r,
                      cropIdxInFieldToHarvest: i[0],
                    },
                    { delay: 750 }
                  )
                : n.raise({ type: F.BOT_TURN_PHASE_COMPLETE }),
                n.assign({
                  botState: {
                    ...e,
                    cropCardIndicesToHarvest: i,
                  },
                })
            })
          ),
        },
        [I.HARVESTING_CROP]: {
          on: { [F.BOT_TURN_PHASE_COMPLETE]: I.HARVESTING_CROPS },
          entry: $(
            ({
              context: {
                match: e,
                botState: {
                  cropCardIndicesToHarvest: [t],
                },
                shell: { triggerNotification: n },
              },
              enqueue: r,
            }) => {
              let { currentPlayerId: i } = e
              if ((R(i), t !== void 0)) {
                let r = z.getPlayer(e, i).field.cards[t]
                Jt(r),
                  (e = $x(e, i, t)),
                  n({
                    type: nt.CROP_HARVESTED,
                    payload: { cropHarvested: r.instance },
                  })
              }
              r.raise({ type: F.BOT_TURN_PHASE_COMPLETE }),
                r.assign({ match: e })
            }
          ),
        },
        [I.DONE]: {
          entry: $(({ enqueue: e }) => {
            e.raise({ type: F.START_TURN })
          }),
          type: 'final',
        },
      },
    },
  },
  sS = {
    [L.PLANTING_CARD]: {
      on: {
        [F.PROMPT_PLAYER_FOR_TURN_ACTION]: [
          {
            guard: tt.IS_SETUP_PHASE,
            target: L.WAITING_FOR_PLAYER_SETUP_ACTION,
          },
          { target: L.WAITING_FOR_PLAYER_TURN_ACTION },
        ],
        [F.PROMPT_BOT_FOR_TURN_ACTION]: L.PERFORMING_BOT_TURN_ACTION,
        [F.OPERATION_ABORTED]: L.WAITING_FOR_PLAYER_TURN_ACTION,
      },
      entry: $(
        ({
          event: e,
          context: {
            botState: t,
            botState: { cropsToPlayDuringTurn: n, toolCardsThatCanBePlayed: r },
            match: i,
            shell: { triggerNotification: a },
          },
          enqueue: o,
        }) => {
          gx(e, F.SELECT_CARD_POSITION)
          let { playerId: s, cardIdxInHand: c, fieldIdxToPlace: l } = e
          try {
            let e = z.getCardInstanceFromHand(i, s, c)
            i = Kx(i, s, c, l)
            let { currentPlayerId: t, sessionOwnerPlayerId: u } = i
            if (t === u)
              et(e) &&
                a({
                  type: nt.TOOL_CARD_PLAYED,
                  payload: { toolCard: e },
                }),
                o.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION })
            else {
              switch (e.type) {
                case P.CROP:
                  n > 0 && n--
                  break
                case P.TOOL:
                  r > 0 && r--
              }
              o.raise({ type: F.PROMPT_BOT_FOR_TURN_ACTION })
            }
          } catch (e) {
            console.error(e), o.raise({ type: F.OPERATION_ABORTED })
            return
          }
          o.assign({
            match: i,
            botState: {
              ...t,
              cropsToPlayDuringTurn: n,
              toolCardsThatCanBePlayed: r,
            },
          })
        }
      ),
      exit: $(({ event: e, context: t, enqueue: n }) => {
        let { match: r } = t
        switch (e.type) {
          case F.OPERATION_ABORTED:
            r = {
              ...r,
              selectedWaterCardInHandIdx: -1,
            }
            break
          default:
        }
        n.assign({ match: r })
      }),
    },
  },
  cS = {
    [L.PLAYER_WATERING_CROP]: {
      on: {
        [F.SELECT_CROP_TO_WATER]: {
          target: L.WAITING_FOR_PLAYER_TURN_ACTION,
          guard: tt.IS_SELECTED_IDX_VALID,
        },
        [F.OPERATION_ABORTED]: L.WAITING_FOR_PLAYER_TURN_ACTION,
      },
      entry: $(({ event: e, context: { match: t }, enqueue: n }) => {
        switch (e.type) {
          case F.PLAY_WATER: {
            let { cardIdxInHand: n } = e
            t = {
              ...t,
              selectedWaterCardInHandIdx: n,
            }
            break
          }
          default:
        }
        n.assign({ match: t })
      }),
      exit: $(
        ({
          event: e,
          context: {
            match: t,
            shell: { triggerNotification: n },
          },
          enqueue: r,
        }) => {
          let { selectedWaterCardInHandIdx: i } = t
          switch (e.type) {
            case F.SELECT_CROP_TO_WATER: {
              let {
                  playerId: r,
                  waterCardInHandIdx: a,
                  cropIdxInFieldToWater: o,
                } = e,
                s = z.getPlayer(t, r).field.cards[o]
              Jt(s)
              let c = {
                ...s,
                wasWateredDuringTurn: !0,
                waterCards: s.waterCards + 1,
              }
              ;(t = Xt(t, r, o, c)),
                (t = eS(t, r, a)),
                (i = -1),
                n({
                  type: nt.CROP_WATERED,
                  payload: { cropWatered: s.instance },
                })
              break
            }
            case F.OPERATION_ABORTED:
              i = -1
              break
            default:
          }
          r.assign({
            match: {
              ...t,
              selectedWaterCardInHandIdx: i,
            },
          })
        }
      ),
    },
  },
  lS = {
    [L.PLAYING_EVENT]: {
      on: {
        [F.PROMPT_PLAYER_FOR_TURN_ACTION]: L.WAITING_FOR_PLAYER_TURN_ACTION,
        [F.PROMPT_BOT_FOR_TURN_ACTION]: L.PERFORMING_BOT_TURN_ACTION,
      },
      entry: $(
        ({
          event: e,
          context: t,
          context: {
            match: n,
            shell: { triggerNotification: r },
          },
          enqueue: i,
        }) => {
          gx(e, F.PLAY_EVENT)
          let { currentPlayerId: a, sessionOwnerPlayerId: o } = n,
            { playerId: s, cardIdxInHand: c } = e,
            l = z.getCardInstanceFromHand(n, s, c)
          Wt(l),
            R(a),
            r({
              type: nt.EVENT_CARD_PLAYED,
              payload: { eventCard: l },
            }),
            (n = l.applyEffect(t).match),
            (n = eS(n, a, c)),
            a === o
              ? i.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION })
              : i.raise({ type: F.PROMPT_BOT_FOR_TURN_ACTION }),
            (n = {
              ...n,
              eventCardsThatCanBePlayed: n.eventCardsThatCanBePlayed - 1,
            }),
            i.assign({
              ...t,
              match: n,
            })
        }
      ),
    },
  },
  uS = {
    [L.PLAYING_TOOL]: {
      on: {
        [F.PROMPT_PLAYER_FOR_TURN_ACTION]: L.WAITING_FOR_PLAYER_TURN_ACTION,
        [F.PROMPT_BOT_FOR_TURN_ACTION]: L.PERFORMING_BOT_TURN_ACTION,
        [F.PLAY_PLANTABLE_TOOL]: L.CHOOSING_CARD_POSITION,
      },
      entry: $(
        ({
          event: e,
          context: t,
          context: {
            botState: n,
            match: r,
            shell: { triggerNotification: i },
          },
          enqueue: a,
        }) => {
          gx(e, F.PLAY_TOOL)
          let { currentPlayerId: o, sessionOwnerPlayerId: s } = r,
            { playerId: c, cardIdxInHand: l } = e,
            u = z.getCardInstanceFromHand(r, c, l)
          Gt(u),
            R(o),
            (!u.isPlantable || o !== s) &&
              i({
                type: nt.TOOL_CARD_PLAYED,
                payload: { toolCard: u },
              }),
            (r = u.applyEffect?.(t).match ?? r),
            u.isPlantable
              ? a.raise({
                  type: F.PLAY_PLANTABLE_TOOL,
                  cardIdxInHand: l,
                  playerId: o,
                })
              : ((r = eS(r, o, l)),
                o === s
                  ? a.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION })
                  : (a.raise({ type: F.PROMPT_BOT_FOR_TURN_ACTION }),
                    (n = {
                      ...n,
                      toolCardsThatCanBePlayed: n.toolCardsThatCanBePlayed - 1,
                    }))),
            a.assign({
              match: r,
              botState: n,
            })
        }
      ),
    },
  },
  dS = {
    [L.UNINITIALIZED]: {
      on: {
        [F.INIT]: {
          actions: $(({ event: e, enqueue: t }) => {
            gx(e, F.INIT)
            let { playerSeeds: n, userPlayerId: r } = e,
              i = Ix.buildMatchForSession(n, r)
            t.assign({ match: i }),
              t.raise({ type: F.PROMPT_PLAYER_FOR_SETUP_ACTION })
          }),
        },
        [F.RESUME]: {
          actions: $(({ event: e, enqueue: t }) => {
            gx(e, F.RESUME)
            let { match: n, botState: r, matchState: i, userPlayerId: a } = e
            t.assign({
              match: {
                ...n,
                sessionOwnerPlayerId: a,
              },
              botState: r,
            }),
              i === L.WAITING_FOR_PLAYER_SETUP_ACTION
                ? t.raise({ type: F.PROMPT_PLAYER_FOR_SETUP_ACTION })
                : t.raise({ type: F.PROMPT_PLAYER_FOR_TURN_ACTION })
          }),
        },
        [F.PROMPT_PLAYER_FOR_SETUP_ACTION]: L.WAITING_FOR_PLAYER_SETUP_ACTION,
        [F.PROMPT_PLAYER_FOR_TURN_ACTION]: L.WAITING_FOR_PLAYER_TURN_ACTION,
      },
    },
  },
  fS = {
    [L.WAITING_FOR_PLAYER_SETUP_ACTION]: {
      on: {
        [F.PROMPT_BOT_FOR_SETUP_ACTION]: L.PERFORMING_BOT_SETUP_ACTION,
        [F.PLAY_CROP]: L.CHOOSING_CARD_POSITION,
      },
    },
  },
  pS = (e, t, n = Infinity) => {
    let r = z.getPlayer(e, t).cardsPlayedDuringTurn.slice(n)
    return (e = bt(e, t, { cardsPlayedDuringTurn: r })), e
  },
  mS = {
    [L.WAITING_FOR_PLAYER_TURN_ACTION]: {
      on: {
        [F.PLAYER_RAN_OUT_OF_FUNDS]: L.GAME_OVER,
        [F.PLAY_CROP]: L.CHOOSING_CARD_POSITION,
        [F.PLAY_EVENT]: L.PLAYING_EVENT,
        [F.PLAY_WATER]: L.PLAYER_WATERING_CROP,
        [F.PLAY_TOOL]: L.PLAYING_TOOL,
        [F.START_TURN]: L.PERFORMING_BOT_TURN_ACTION,
        [F.HARVEST_CROP]: {
          actions: $(
            ({
              event: e,
              enqueue: t,
              context: {
                match: n,
                shell: { triggerNotification: r },
              },
            }) => {
              let { playerId: i, cropIdxInFieldToHarvest: a } = e,
                o = z.getPlayedCardFromField(n, i, a)
              Jt(o),
                (n = $x(n, i, a)),
                r({
                  type: nt.CROP_HARVESTED,
                  payload: { cropHarvested: o.instance },
                }),
                t.assign({ match: n })
            }
          ),
        },
        [F.DISCARD_CARD_FROM_FIELD]: {
          actions: $(
            ({
              event: e,
              enqueue: t,
              context: {
                match: n,
                shell: { triggerNotification: r },
              },
            }) => {
              let { playerId: i, cardIdxInField: a } = e,
                o = z.getPlayedCardFromField(n, i, a)
              ;(n = Qx(n, i, a)),
                r({
                  type: nt.CARD_DISCARDED,
                  payload: { cardDiscarded: o.instance },
                }),
                t.assign({ match: n })
            }
          ),
        },
      },
      entry: $(
        ({ event: e, context: t, context: { match: n }, enqueue: r }) => {
          try {
            switch (e.type) {
              case F.START_TURN: {
                n = {
                  ...n,
                  cardsToDrawAtTurnStart: 1,
                }
                let e = n
                n = Ux(n)
                let { currentPlayerId: r } = n
                R(r)
                let i = z.getPlayer(e, r)
                for (let e of i.cardsPlayedDuringTurn)
                  et(e) &&
                    e.onStartFollowingTurn &&
                    (n = e.onStartFollowingTurn({
                      ...t,
                      match: n,
                    }).match)
                ;(n = {
                  ...n,
                  eventCardsThatCanBePlayed: 1,
                }),
                  (n = iS(n, r, n.cardsToDrawAtTurnStart)),
                  (t = _S.applyDailyEffects({
                    ...t,
                    match: n,
                  })),
                  (n = t.match)
                break
              }
              case F.OPERATION_ABORTED: {
                let { currentPlayerId: e } = n
                R(e), (n = pS(n, e, 1))
                break
              }
              default:
            }
          } catch (e) {
            if (e instanceof Ft) {
              let { currentPlayerId: e } = n
              R(e),
                r.raise({
                  type: F.PLAYER_RAN_OUT_OF_FUNDS,
                  playerId: e,
                })
            } else console.error(e)
          }
          r.assign({
            ...t,
            match: n,
          })
        }
      ),
      exit: $(({ event: e, context: { match: t }, enqueue: n }) => {
        ;(t = Bx(t, e)), n.assign({ match: t })
      }),
    },
  },
  hS = {
    initial: L.UNINITIALIZED,
    on: {
      [F.DANGEROUSLY_SET_CONTEXT]: {
        actions: $(({ event: e, enqueue: t }) => {
          gx(e, F.DANGEROUSLY_SET_CONTEXT)
          let { type: n, ...r } = e
          t.assign(r)
        }),
      },
      [F.SET_SHELL]: {
        actions: $(({ event: e, enqueue: t }) => {
          gx(e, F.SET_SHELL)
          let { shell: n } = e
          t.assign({ shell: n })
        }),
      },
    },
    states: {
      ...dS,
      ...Hx,
      ...Vx,
      ...qx,
      ...oS,
      ...sS,
      ...cS,
      ...lS,
      ...uS,
      ...fS,
      ...mS,
    },
  },
  { createMachine: gS } = wx({
    types: {
      context: {},
      events: {},
    },
    guards: {
      [tt.IS_BOT_PHASE_PLAYING_EVENTS]: ({
        context: {
          botState: { currentBotTurnPhase: e },
        },
      }) => e === I.PLAYING_EVENTS,
      [tt.IS_BOT_PHASE_PLAYING_TOOLS]: ({
        context: {
          botState: { currentBotTurnPhase: e },
        },
      }) => e === I.PLAYING_TOOLS,
      [tt.IS_SELECTED_IDX_VALID]: ({ event: e, context: { match: t } }) => {
        let { currentPlayerId: n } = t
        switch ((R(n), e.type)) {
          case F.SELECT_CROP_TO_WATER: {
            let { cards: r } = z.getPlayer(t, n).field
            return r[e.cropIdxInFieldToWater] !== void 0
          }
          default:
        }
        return !0
      },
      [tt.IS_SETUP_PHASE]: ({ context: { match: e } }) => e.turn === 0,
    },
  }),
  _S = new (class {
    constructor() {
      ;(this.createMatchStateMachine = () =>
        gS({
          context: Lx(),
          ...hS,
        })),
        (this.startMatch = () => Iy(this.createMatchStateMachine()).start()),
        (this.applyDailyEffects = e => {
          let { match: t } = e,
            { currentPlayerId: n } = t
          R(n)
          let r = t.table.players[n]
          R(r)
          for (let n = 0; n < r.field.cards.length; n++) {
            let i = r.field.cards[n]
            i &&
              et(i.instance) &&
              i.instance.applyDailyEffect &&
              ((e = i.instance.applyDailyEffect(
                {
                  ...e,
                  match: t,
                },
                n
              )),
              (t = e.match))
          }
          return e
        })
    }
  })(),
  vS = jx(_S.createMatchStateMachine()),
  yS = () => {
    let { match: e, matchState: t } = vS.useSelector(
        ({ context: { match: e }, value: t }) => ({
          match: e,
          matchState: t,
        })
      ),
      n = t,
      r = null
    if (hn(t))
      if (L.PERFORMING_BOT_TURN_ACTION in t) {
        n = L.PERFORMING_BOT_TURN_ACTION
        let e = t[L.PERFORMING_BOT_TURN_ACTION]
        R(e), qt(e), (r = e)
      } else throw TypeError('Unexpected matchState shape')
    if (typeof n != 'string') throw TypeError('Actor state is not a string')
    return (
      Kt(n),
      {
        match: e,
        matchState: n,
        botTurnActionState: r,
      }
    )
  },
  bS = x({
    blockingOperation: () => {
      throw Error('Calling context method outside of ShellContext.Provider')
    },
    isHandInViewport: !0,
    setIsHandInViewport: () => {
      throw Error('Calling context method outside of ShellContext.Provider')
    },
    showNotification: () => {
      throw Error('Calling context method outside of ShellContext.Provider')
    },
    selectedHandCardIdx: -1,
    setSelectedHandCardIdx: () => {
      throw Error('Calling context method outside of ShellContext.Provider')
    },
  }),
  xS = e => {
    let {
        cardInstance: t,
        cardIdxInHand: n,
        cropIdxInFieldToWater: r,
        cropIdxInFieldToHarvest: i,
        cardIdxInField: a,
        playerId: o,
        onBeforePlay: s,
        canBeWatered: c = !1,
        canBeHarvested: l = !1,
        isFocused: u = !1,
        isInField: d = !1,
      } = e,
      { useActorRef: f } = vS,
      p = f(),
      { match: m, matchState: h } = yS(),
      { setIsHandInViewport: g, setSelectedHandCardIdx: _ } = E(bS),
      { eventCardsThatCanBePlayed: v, selectedWaterCardInHandIdx: y } = m,
      b = v > 0,
      x = async () => {
        let e = ln(t)
        switch (
          (e || _(-1),
          s && (await s()),
          R(n, 'cardIdxInHand is not a valid hand index'),
          t.type)
        ) {
          case P.CROP:
            p.send({
              type: F.PLAY_CROP,
              cardIdxInHand: n,
              playerId: o,
            }),
              g(!1)
            break
          case P.WATER:
            p.send({
              type: F.PLAY_WATER,
              cardIdxInHand: n,
              playerId: o,
            }),
              g(!1)
            break
          case P.EVENT:
            p.send({
              type: F.PLAY_EVENT,
              cardIdxInHand: n,
              playerId: o,
            })
            break
          case P.TOOL:
            p.send({
              type: F.PLAY_TOOL,
              cardIdxInHand: n,
              playerId: o,
            }),
              e && g(!1)
            break
          default:
        }
      },
      S = () => {
        R(r, 'cropIdxInFieldToWater is not a valid field index'),
          p.send({
            type: F.SELECT_CROP_TO_WATER,
            playerId: o,
            cropIdxInFieldToWater: r,
            waterCardInHandIdx: y,
          })
      },
      C = () => {
        R(i, 'cropIdxInFieldToHarvest is not a valid field index'),
          p.send({
            type: F.HARVEST_CROP,
            playerId: o,
            cropIdxInFieldToHarvest: i,
          })
      },
      w = () => {
        R(a, 'cardIdxInField is not a valid field index'),
          p.send({
            type: F.DISCARD_CARD_FROM_FIELD,
            playerId: o,
            cardIdxInField: a,
          })
      },
      T = o === m.sessionOwnerPlayerId,
      D = !1,
      O = !1,
      ee = !1,
      te = !1,
      k = !1,
      A = !1
    switch (t.type) {
      case P.CROP:
        ;(A = t.id === m.buffedCrop?.crop.id),
          T &&
            u &&
            !d &&
            [
              L.WAITING_FOR_PLAYER_TURN_ACTION,
              L.WAITING_FOR_PLAYER_SETUP_ACTION,
            ].includes(h) &&
            ((D = !0),
            z.getPlayer(m, o).field.cards.filter(e => e !== void 0).length >=
              6 && (O = !0)),
          T && u && d && c && [L.PLAYER_WATERING_CROP].includes(h) && (ee = !0),
          T &&
            u &&
            d &&
            l &&
            [L.WAITING_FOR_PLAYER_TURN_ACTION].includes(h) &&
            (te = !0)
        break
      case P.EVENT:
        T && u && b && h === L.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0)
        break
      case P.TOOL:
        T && u && !d && h === L.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0),
          T && d && u && (k = !0)
        break
      case P.WATER:
        T && u && h === L.WAITING_FOR_PLAYER_TURN_ACTION && (D = !0)
        break
      default:
    }
    let j =
        d &&
        c &&
        h === L.PLAYER_WATERING_CROP &&
        m.currentPlayerId === o &&
        cn(t),
      ne = d && l && cn(t) && h !== L.PLAYER_WATERING_CROP,
      re = ''
    return (
      T && (j ? (re = 'Needs water') : ne && (re = 'Ready to be harvested')),
      {
        isBuffedCrop: A,
        showPlayCardButton: D,
        playButtonDisabled: O,
        showWaterCropButton: ee,
        showHarvestCropButton: te,
        showWaterableState: j,
        showHarvestableState: ne,
        showDiscardButton: k,
        tooltipTitle: re,
        onPlayCard: x,
        onWaterCrop: S,
        onHarvestCrop: C,
        onDiscardCard: w,
        isSessionOwnersCard: T,
      }
    )
  },
  SS = e => cn(e.cardInstance),
  CS = e => Qe(e.cardInstance),
  wS = e => $e(e.cardInstance),
  TS = e => et(e.cardInstance),
  ES = C(function ({ playedCrop: e, ...t }, n) {
    let r = xS({
        playedCrop: e,
        ...t,
      }),
      {
        canBeHarvested: i,
        canBeWatered: a,
        isFocused: o,
        isInField: s,
        onBeforePlay: c,
        ...l
      } = t
    return /* @__PURE__ */ d(Yv, {
      ...l,
      ...r,
      ref: n,
      children: sn(t.cardInstance)
        ? /* @__PURE__ */ d(Xv, {
            crop: t.cardInstance,
            playedCrop: e,
          })
        : null,
    })
  }),
  DS = C(function (e, t) {
    let n = xS(e),
      {
        canBeHarvested: r,
        canBeWatered: i,
        isFocused: a,
        isInField: o,
        onBeforePlay: s,
        ...c
      } = e
    return /* @__PURE__ */ d(Yv, {
      ...c,
      ...n,
      ref: t,
    })
  }),
  OS = C(function (e, t) {
    let n = xS(e),
      {
        canBeHarvested: r,
        canBeWatered: i,
        isFocused: a,
        isInField: o,
        onBeforePlay: s,
        ...c
      } = e
    return /* @__PURE__ */ d(Yv, {
      ...c,
      ...n,
      ref: t,
      children: /* @__PURE__ */ d(Yc, { children: e.cardInstance.description }),
    })
  }),
  kS = C(function (e, t) {
    let n = xS(e),
      {
        canBeHarvested: r,
        canBeWatered: i,
        isFocused: a,
        isInField: o,
        onBeforePlay: s,
        ...c
      } = e
    return /* @__PURE__ */ d(Yv, {
      ...c,
      ...n,
      ref: t,
      children: /* @__PURE__ */ d(Yc, { children: e.cardInstance.description }),
    })
  }),
  AS = C(function (e, t) {
    if (SS(e))
      return /* @__PURE__ */ d(ES, {
        ...e,
        ref: t,
      })
    if (CS(e))
      return /* @__PURE__ */ d(DS, {
        ...e,
        ref: t,
      })
    if (wS(e))
      return /* @__PURE__ */ d(OS, {
        ...e,
        ref: t,
      })
    if (TS(e))
      return /* @__PURE__ */ d(kS, {
        ...e,
        ref: t,
      })
    throw new Ht('Unexpected CardType')
  }),
  jS = B.MEDIUM,
  MS = ({
    match: e,
    handleClickTopCard: t,
    isTopCardSelected: n,
    playerId: r,
    deckThicknessPx: i = 30,
    cardSize: a = jS,
    sx: o = [],
    ...c
  }) => {
    let { containerRef: l, selectedCardSxProps: u } = yn({ cardSize: a }),
      f = s(),
      m = z.getPlayer(e, r),
      h = r === e.sessionOwnerPlayerId
    return /* @__PURE__ */ d(p, {
      'data-testid': `deck_${r}`,
      height: gn[a].height,
      width: gn[a].width,
      position: 'relative',
      ref: l,
      sx: [
        { ...(!h && { transform: 'rotate(180deg)' }) },
        ...(Ae(o) ? o : [o]),
      ],
      ...c,
      children: m.deck.map((e, r) => {
        let o = (i / m.deck.length) * r,
          s = r === m.deck.length - 1
        return /* @__PURE__ */ d(
          AS,
          {
            cardInstance: e,
            playerId: m.id,
            position: 'absolute',
            isFlipped: !(s && n),
            size: a,
            sx: {
              transform: `translateX(${o}px) translateY(${o / 2}px)`,
              transition: f.transitions.create(['transform']),
              ...(s && n && u),
            },
            ...(s && { onClick: t }),
          },
          e.instanceId
        )
      }),
    })
  },
  NS = B.SMALL,
  PS = ({
    playerId: e,
    match: t,
    cardSize: n = NS,
    discardPileThicknessPx: r = 30,
    ...i
  }) => {
    let a = s(),
      o = z.getPlayer(t, e),
      l = e === t.sessionOwnerPlayerId
    return /* @__PURE__ */ d(p, {
      'data-testid': `discard-pile_${e}`,
      height: gn[n].height,
      width: gn[n].width,
      position: 'relative',
      sx: {
        transformStyle: 'preserve-3d',
        outlineStyle: 'solid',
        outlineWidth: '2px',
        outlineColor: a.palette.divider,
        borderRadius: a.shape.borderRadius,
        ...(!l && { transform: 'rotate(180deg)' }),
      },
      ...i,
      children: [...o.discardPile].reverse().map((t, i) => {
        let s = (r / o.discardPile.length) * i
        return /* @__PURE__ */ d(
          c,
          {
            title: t.name,
            placement: 'top',
            arrow: !0,
            children: /* @__PURE__ */ d(AS, {
              cardInstance: t,
              size: n,
              playerId: e,
              position: 'absolute',
              sx: {
                transform: `translateX(${s}px)`,
                transition: a.transitions.create(['transform']),
              },
            }),
          },
          t.instanceId
        )
      }),
    })
  },
  FS = /* @__PURE__ */ we(
    /* @__PURE__ */ N((e, t) => {
      var n = 'Expected a function',
        r = NaN,
        i = '[object Symbol]',
        a = /^\s+|\s+$/g,
        o = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        l = parseInt,
        u =
          typeof global == 'object' &&
          global &&
          global.Object === Object &&
          global,
        d = typeof self == 'object' && self && self.Object === Object && self,
        f = u || d || Function('return this')(),
        p = Object.prototype.toString,
        m = Math.max,
        h = Math.min,
        g = function () {
          return f.Date.now()
        }
      function _(e, t, r) {
        var i,
          a,
          o,
          s,
          c,
          l,
          u = 0,
          d = !1,
          f = !1,
          p = !0
        if (typeof e != 'function') throw TypeError(n)
        ;(t = x(t) || 0),
          v(r) &&
            ((d = !!r.leading),
            (f = 'maxWait' in r),
            (o = f ? m(x(r.maxWait) || 0, t) : o),
            (p = 'trailing' in r ? !!r.trailing : p))
        function _(t) {
          var n = i,
            r = a
          return (i = a = void 0), (u = t), (s = e.apply(r, n)), s
        }
        function y(e) {
          return (u = e), (c = setTimeout(C, t)), d ? _(e) : s
        }
        function b(e) {
          var n = e - l,
            r = e - u,
            i = t - n
          return f ? h(i, o - r) : i
        }
        function S(e) {
          var n = e - l,
            r = e - u
          return l === void 0 || n >= t || n < 0 || (f && r >= o)
        }
        function C() {
          var e = g()
          if (S(e)) return w(e)
          c = setTimeout(C, b(e))
        }
        function w(e) {
          return (c = void 0), p && i ? _(e) : ((i = a = void 0), s)
        }
        function T() {
          c !== void 0 && clearTimeout(c), (u = 0), (i = l = a = c = void 0)
        }
        function E() {
          return c === void 0 ? s : w(g())
        }
        function D() {
          var e = g(),
            n = S(e)
          if (((i = arguments), (a = this), (l = e), n)) {
            if (c === void 0) return y(l)
            if (f) return (c = setTimeout(C, t)), _(l)
          }
          return c === void 0 && (c = setTimeout(C, t)), s
        }
        return (D.cancel = T), (D.flush = E), D
      }
      function v(e) {
        var t = typeof e
        return !!e && (t == 'object' || t == 'function')
      }
      function y(e) {
        return !!e && typeof e == 'object'
      }
      function b(e) {
        return typeof e == 'symbol' || (y(e) && p.call(e) == i)
      }
      function x(e) {
        if (typeof e == 'number') return e
        if (b(e)) return r
        if (v(e)) {
          var t = typeof e.valueOf == 'function' ? e.valueOf() : e
          e = v(t) ? t + '' : t
        }
        if (typeof e != 'string') return e === 0 ? e : +e
        e = e.replace(a, '')
        var n = s.test(e)
        return n || c.test(e) ? l(e.slice(2), n ? 2 : 8) : o.test(e) ? r : +e
      }
      t.exports = _
    })(),
    1
  ),
  IS = typeof window < 'u' ? te : D
function LS(e, t, n, r) {
  let i = A(t)
  IS(() => {
    i.current = t
  }, [t]),
    D(() => {
      let t = n?.current ?? window
      if (!(t && t.addEventListener)) return
      let a = e => {
        i.current(e)
      }
      return (
        t.addEventListener(e, a, r),
        () => {
          t.removeEventListener(e, a, r)
        }
      )
    }, [e, n, r])
}
function RS(e) {
  let t = A(e)
  ;(t.current = e),
    D(
      () => () => {
        t.current()
      },
      []
    )
}
function zS(e, t = 500, n) {
  let r = A()
  RS(() => {
    r.current && r.current.cancel()
  })
  let i = k(() => {
    let i = (0, FS.default)(e, t, n),
      a = (...e) => i(...e)
    return (
      (a.cancel = () => {
        i.cancel()
      }),
      (a.isPending = () => !!r.current),
      (a.flush = () => i.flush()),
      a
    )
  }, [e, t, n])
  return (
    D(() => {
      r.current = (0, FS.default)(e, t, n)
    }, [e, t, n]),
    i
  )
}
var BS = typeof window > 'u'
function VS(e = {}) {
  let { initializeWithValue: t = !0 } = e
  BS && (t = !1)
  let [n, r] = j(() =>
      t
        ? {
            width: window.innerWidth,
            height: window.innerHeight,
          }
        : {
            width: void 0,
            height: void 0,
          }
    ),
    i = zS(r, e?.debounceDelay)
  function a() {
    ;(e?.debounceDelay ? i : r)({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  return (
    LS('resize', a),
    IS(() => {
      a()
    }, []),
    n
  )
}
//#endregion
//#region src/ui/components/PlayedCard/usePlayedCardLogic.ts
var HS = ({ playedCard: e }) => {
    let t = e.instance,
      n = 0,
      r = !1,
      i = !1
    return (
      dn(e) ||
        et(t) ||
        ((n = Math.max(e.waterCards, t.waterToMature)),
        (r = e.wasWateredDuringTurn === !1),
        (i = e.waterCards >= t.waterToMature)),
      {
        canBeWatered: r,
        canBeHarvested: i,
        waterIconsToRender: n,
      }
    )
  },
  US = 'PlayedCard',
  WS = ({
    isInBackground: e,
    playedCard: t,
    cardProps: { ref: n, ...r },
    ...i
  }) => {
    let a = s(),
      { size: o = B.MEDIUM } = r,
      {
        canBeWatered: c,
        canBeHarvested: l,
        waterIconsToRender: u,
      } = HS({ playedCard: t })
    return /* @__PURE__ */ f(p, {
      className: US,
      maxWidth: gn[o].width,
      ...i,
      children: [
        /* @__PURE__ */ d(AS, {
          size: o,
          canBeWatered: c,
          canBeHarvested: l,
          ...r,
        }),
        un(t) &&
          /* @__PURE__ */ d(m, {
            container: !0,
            spacing: 1,
            pt: 2.5,
            ml: a.spacing(-0.5),
            justifyContent: 'flex-start',
            children: Array(u)
              .fill(null)
              .map((n, r) => {
                let i = 1,
                  o = r < t.waterCards
                return (
                  e ? (i = 0) : o || (i = 0.25),
                  /* @__PURE__ */ d(
                    m,
                    {
                      item: !0,
                      sx: { pt: `${a.spacing(0)} !important` },
                      children: /* @__PURE__ */ d(Vv, {
                        src: Ge.water,
                        alt: 'Water card indicator',
                        sx: {
                          imageRendering: 'pixelated',
                          opacity: i,
                          transition: a.transitions.create(['opacity']),
                        },
                      }),
                    },
                    r
                  )
                )
              }),
          }),
      ],
    })
  },
  GS = ({ cardSize: e = B.SMALL, playerId: t, fieldIdx: n }) => {
    let r = s(),
      { useActorRef: i } = vS,
      a = i(),
      {
        matchState: o,
        match: { currentPlayerId: c, sessionOwnerPlayerId: l },
      } = yS(),
      { selectedHandCardIdx: u } = E(bS),
      f = c === l && c === t && o === L.CHOOSING_CARD_POSITION
    return /* @__PURE__ */ d(m, {
      item: !0,
      xs: 6,
      sm: 4,
      md: 2,
      children: /* @__PURE__ */ d(p, {
        height: gn[e].height,
        width: gn[e].width,
        onClick: () => {
          f &&
            a.send({
              type: F.SELECT_CARD_POSITION,
              playerId: t,
              cardIdxInHand: u,
              fieldIdxToPlace: n,
            })
        },
        sx: {
          mx: 'auto',
          outlineStyle: 'solid',
          outlineWidth: '2px',
          outlineColor: f ? r.palette.primary.light : r.palette.divider,
          borderRadius: r.shape.borderRadius,
          transition: r.transitions.create(['background', 'transform']),
          boxShadow: f ? `0 0 12px 4px ${r.palette.primary.light}` : 'none',
          alignContent: 'center',
          ...(f && {
            cursor: 'pointer',
            ':hover': {
              transform: 'scale(1.2)',
              background:
                r.palette.mode === 'light'
                  ? ie(r.palette.primary.light, 0.1)
                  : ae(r.palette.primary.light, 0.5),
              '> p': { opacity: 1 },
            },
          }),
        },
        children:
          f &&
          /* @__PURE__ */ d(se, {
            variant: 'caption',
            component: 'p',
            sx: {
              color: r.palette.primary.contrastText,
              fontWeight: r.typography.fontWeightBold,
              opacity: 0,
              textAlign: 'center',
              textTransform: 'uppercase',
              transition: r.transitions.create(['opacity']),
            },
            children: 'Place card',
          }),
      }),
    })
  },
  KS = -1,
  qS = -25,
  JS = 'Selected field card',
  YS = 'Unselected field card',
  XS = ({ playerId: e, match: t, cardSize: n = B.SMALL, ...r }) => {
    let i = z.getPlayer(t, e),
      a = e === t.sessionOwnerPlayerId,
      o = A(),
      c = s(),
      [l, u] = j(KS),
      [f, h] = j(''),
      { width: g, height: _ } = VS({ debounceDelay: 1 }),
      v = g / 2,
      y = _ / 2,
      b = () => {
        u(KS),
          document.activeElement instanceof HTMLElement &&
            document.activeElement.blur()
      },
      x = zS(
        () => {
          b()
        },
        void 0,
        { leading: !0 }
      )
    D(
      () => (
        window.addEventListener('resize', x),
        () => {
          window.removeEventListener('resize', x)
        }
      ),
      [x]
    ),
      D(() => {
        u(KS)
      }, [i.field])
    let S = (e, t) => {
        let { target: n } = e
        if (!n.classList.contains('PlayedCard')) return
        let r = n.getBoundingClientRect()
        h(
          `translateX(${v - (r.left + r.width / 2)}px) translateY(${
            y - (r.top + r.height / 2) + (a ? qS : 25)
          }px) scale(1.25)`
        ),
          u(t)
      },
      C = e => {
        switch (e.key) {
          case 'Escape':
            b()
            break
        }
      },
      w = e => {
        o.current && !o.current.contains(e.relatedTarget) && b()
      },
      T = [, , , , , ,].fill(void 0).map((e, t) => i.field.cards[t]),
      E = a ? T : [...T].reverse()
    return /* @__PURE__ */ d(p, {
      ...r,
      'data-testid': `field_${e}`,
      ref: o,
      onKeyDown: C,
      onBlur: w,
      children: /* @__PURE__ */ d(m, {
        container: !0,
        spacing: 2,
        alignItems: a ? 'flex-start' : 'flex-end',
        justifyContent: 'center',
        children: E.map((t, r) => {
          let o = a ? r : 5 - r
          if (!fn(t))
            return /* @__PURE__ */ d(
              GS,
              {
                cardSize: n,
                playerId: e,
                fieldIdx: o,
              },
              r
            )
          let { instance: s } = t,
            u = l === o,
            p = l !== KS && !u
          return /* @__PURE__ */ d(
            m,
            {
              item: !0,
              xs: 6,
              sm: 4,
              md: 2,
              children: /* @__PURE__ */ d(WS, {
                'aria-label': u ? JS : YS,
                tabIndex: 0,
                cardProps: {
                  cardInstance: s,
                  cardIdxInField: o,
                  cropIdxInFieldToWater: o,
                  cropIdxInFieldToHarvest: o,
                  isInField: !0,
                  isFocused: u,
                  playerId: i.id,
                  size: n,
                  ...(u && { elevation: 10 }),
                  paperProps: { ...(u && { elevation: 10 }) },
                },
                playedCard: t,
                isInBackground: p,
                onFocus: e => S(e, o),
                sx: {
                  mx: 'auto',
                  position: 'relative',
                  transition: c.transitions.create(['transform']),
                  outline: 'none',
                  transformStyle: 'preserve-3d',
                  ...(!a && { transform: 'rotate(180deg)' }),
                  ...(!u && { cursor: 'pointer' }),
                  ...(u && {
                    transform: f,
                    zIndex: 20,
                  }),
                },
              }),
            },
            s.instanceId
          )
        }),
      }),
    })
  },
  ZS = () => {
    let e = A(/* @__PURE__ */ new Map())
    return (
      D(() => {
        let { current: t } = e
        return () => {
          t.forEach(e => {
            e()
          })
        }
      }, []),
      {
        setRejectingTimeout: t =>
          new Promise((n, r) => {
            let i = setTimeout(() => {
              e.current.delete(i), n()
            }, t)
            e.current.set(i, r)
          }),
      }
    )
  },
  QS = new (class {
    constructor() {
      this.scaleNumber = (e, t, n, r, i) => ((e - t) * (i - r)) / (n - t) + r
    }
  })(),
  $S = 1,
  eC = 0.65,
  tC = e =>
    e > 60 ? 3 : e > 30 ? 5 : e > 20 ? 10 : e > 10 ? 15 : e > 5 ? 30 : 50,
  nC = ({ playerId: e, match: t, cardSize: n = B.LARGE, sx: r = [], ...i }) => {
    let {
        blockingOperation: a,
        isHandInViewport: o,
        setIsHandInViewport: c,
        selectedHandCardIdx: l,
        setSelectedHandCardIdx: u,
      } = E(bS),
      { setRejectingTimeout: f } = ZS(),
      { containerRef: m, selectedCardSxProps: h } = yn({ cardSize: n }),
      g = z.getPlayer(t, e),
      _ = s(),
      v = A(null)
    D(() => {
      o && l !== -1 && v.current?.focus()
    }, [o, v, l])
    let y = T(() => {
      u(-1),
        document.activeElement instanceof HTMLElement &&
          document.activeElement.blur()
    }, [u])
    D(() => {
      y(), c(!0)
    }, [g.hand, c, y])
    let b = e => {
        u(e)
      },
      x = e => {
        switch (e.key) {
          case 'Escape':
            y()
            break
        }
      },
      S = e => {
        m.current && !m.current.contains(e.relatedTarget) && y()
      },
      C = tC(g.hand.length),
      { width: w } = m.current?.getBoundingClientRect() ?? { width: 0 },
      O = async () => {
        await a(async () => {
          await f(_.transitions.duration.shortest)
        })
      }
    return /* @__PURE__ */ d(p, {
      ...i,
      'data-testid': `hand_${e}`,
      ref: m,
      sx: [
        {
          position: 'relative',
          minHeight: gn[n].height,
          transform: `translateY(${o ? 0 : gn[n].height})`,
          transition: _.transitions.create(['transform']),
          pointerEvents: o ? void 0 : 'none',
        },
        ...(Ae(r) ? r : [r]),
      ],
      onKeyDown: x,
      onBlur: S,
      children: g.hand.map((t, r) => {
        let i = C * g.hand.length,
          a = QS.scaleNumber(r / g.hand.length, 0, 1, -i, i),
          s = w / 2 + a,
          c = l === r && o,
          u = l !== -1 && o,
          f = ''
        return (
          c ||
            (f = `translateX(${`calc(-50% + ${C}px + ${s}px)`}) translateY(${
              u ? `calc(${gn[n].height} / 2)` : '0rem'
            }) rotate(-5deg) scale(${u ? eC : $S}) rotateY(25deg)`),
          /* @__PURE__ */ d(
            AS,
            {
              disableEnterAnimation: !0,
              cardInstance: t,
              cardIdxInHand: r,
              playerId: e,
              size: n,
              paperProps: { ...(c && { elevation: 10 }) },
              sx: {
                transform: f,
                position: 'absolute',
                transition: _.transitions.create(['transform']),
                cursor: 'pointer',
                ...(c && h),
              },
              onBeforePlay: O,
              onFocus: () => b(r),
              tabIndex: o ? 0 : -1,
              isFocused: c,
              ref: c ? v : void 0,
            },
            t.instanceId
          )
        )
      }),
    })
  },
  rC = ({ match: e, ...t }) => {
    let n = s(),
      { sessionOwnerPlayerId: r } = e,
      i = z.getOpponentPlayerIds(e),
      a = h(n.breakpoints.up('md')) ? B.MEDIUM : B.SMALL
    return /* @__PURE__ */ f(u, {
      children: [
        /* @__PURE__ */ f(m, {
          gap: 4,
          container: !0,
          ...t,
          'data-testid': `table_${e.sessionOwnerPlayerId}`,
          children: [
            /* @__PURE__ */ d(m, {
              item: !0,
              xs: 12,
              children: i.map(t =>
                /* @__PURE__ */ d(
                  XS,
                  {
                    match: e,
                    playerId: t,
                    cardSize: B.SMALL,
                  },
                  t
                )
              ),
            }),
            /* @__PURE__ */ d(m, {
              item: !0,
              xs: 12,
              children: /* @__PURE__ */ f(p, {
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'center',
                children: [
                  /* @__PURE__ */ d(MS, {
                    match: e,
                    playerId: r,
                    cardSize: B.SMALL,
                  }),
                  /* @__PURE__ */ d(PS, {
                    match: e,
                    playerId: r,
                  }),
                ],
              }),
            }),
            /* @__PURE__ */ d(m, {
              item: !0,
              xs: 12,
              children: /* @__PURE__ */ d(XS, {
                match: e,
                playerId: r,
              }),
            }),
          ],
        }),
        /* @__PURE__ */ d(p, {
          position: 'fixed',
          left: '50%',
          right: '50%',
          bottom: n.spacing(-8),
          children: /* @__PURE__ */ d(nC, {
            match: e,
            playerId: r,
            cardSize: a,
          }),
        }),
      ],
    })
  },
  iC = new Intl.NumberFormat(void 0, {
    style: 'decimal',
    useGrouping: !0,
  }).format.bind(null),
  aC = e => iC(e),
  oC = 10,
  sC = ({ match: t }) => {
    let n = s(),
      r = vS.useActorRef(),
      { setIsHandInViewport: i } = E(bS),
      {
        matchState: a,
        botTurnActionState: o,
        match: { currentPlayerId: l, sessionOwnerPlayerId: u },
      } = yS(),
      p = ke(l ?? ''),
      m = () => {
        r.send({ type: F.PROMPT_BOT_FOR_SETUP_ACTION })
      },
      h = () => {
        r.send({ type: F.START_TURN })
      },
      g = () => {
        r.send({ type: F.OPERATION_ABORTED }), i(!0)
      },
      _ = () => {
        r.send({ type: F.OPERATION_ABORTED }), i(!0)
      },
      v = null,
      y = l ? z.getPlayer(t, l) : null,
      b = ''
    switch (a) {
      case L.CHOOSING_CARD_POSITION:
        ;(b = 'Select a position in the field'),
          y?.id === t.sessionOwnerPlayerId &&
            (v = /* @__PURE__ */ d(e, {
              onClick: _,
              color: 'warning',
              children: 'Cancel placement',
            }))
        break
      case L.WAITING_FOR_PLAYER_SETUP_ACTION:
        ;(b = 'Set up your Field'),
          y &&
            y.field.cards.length > 0 &&
            (v = /* @__PURE__ */ d(e, {
              onClick: m,
              children: 'Complete setup',
            }))
        break
      case L.WAITING_FOR_PLAYER_TURN_ACTION:
        ;(b = 'Your turn'),
          y &&
            y.id === t.sessionOwnerPlayerId &&
            (v = /* @__PURE__ */ d(e, {
              onClick: h,
              children: 'End turn',
            }))
        break
      case L.PLAYER_WATERING_CROP:
        ;(b = 'Select a crop to water'),
          y &&
            y.id === t.sessionOwnerPlayerId &&
            (v = /* @__PURE__ */ d(e, {
              onClick: g,
              color: 'warning',
              children: 'Cancel watering',
            }))
        break
      case L.PERFORMING_BOT_TURN_ACTION:
        switch (((b = `${p}'s turn`), o)) {
          case I.PLAYING_CROPS:
          case I.PLACING_CROP:
            b = `${p} is planting crops`
            break
          case I.WATERING_CROPS:
          case I.WATERING_CROP:
            b = `${p} is watering crops`
            break
          case I.HARVESTING_CROPS:
          case I.HARVESTING_CROP:
            b = `${p} is harvesting crops`
            break
          case I.PLAYING_EVENTS:
            b = `${p} is playing Event cards`
            break
          case I.PLAYING_TOOLS:
            b = `${p} is playing Tool cards`
            break
          default:
        }
        break
      case L.PERFORMING_BOT_SETUP_ACTION:
        b = `${p} is setting their field up`
        break
      default:
    }
    let { [u]: x, ...S } = t.table.players
    if (!x) throw new It('Session owner player not found')
    let C = x.funds,
      w = Object.keys(S)[0],
      T = w ? z.getPlayer(t, w)?.funds : 0,
      D = ke(w ?? '')
    return /* @__PURE__ */ f(pe, {
      spacing: 1,
      children: [
        /* @__PURE__ */ f(pe, {
          direction: 'row',
          justifyContent: 'space-between',
          sx: { color: n.palette.common.white },
          children: [
            /* @__PURE__ */ d(c, {
              title: 'Your funds',
              arrow: !0,
              children: /* @__PURE__ */ f(pe, {
                direction: 'row',
                alignItems: 'center',
                color: {
                  cursor: 'help',
                  ...(C <= oC && { color: n.palette.error.dark }),
                },
                children: [
                  /* @__PURE__ */ d(Ye, {
                    sx: {
                      fontSize: n.typography.body1.fontSize,
                      lineHeight: n.typography.body1.lineHeight,
                    },
                  }),
                  /* @__PURE__ */ d(se, { children: aC(C) }),
                ],
              }),
            }),
            t.buffedCrop &&
              /* @__PURE__ */ d(c, {
                title: `Sell ${t.buffedCrop.crop.name} cards now for ${t.buffedCrop.multiplier}x value`,
                arrow: !0,
                children: /* @__PURE__ */ d(pe, {
                  direction: 'row',
                  alignItems: 'center',
                  children: /* @__PURE__ */ d(fe, {
                    color: 'success',
                    icon: /* @__PURE__ */ d(Ze, {}),
                    label: /* @__PURE__ */ d(Vv, {
                      src: Hv(t.buffedCrop.crop),
                      sx: {
                        imageRendering: 'pixelated',
                        filter: `drop-shadow(0 0 5px ${n.palette.common.white})`,
                      },
                    }),
                    sx: {
                      backgroundColor: n.palette.success.light,
                      outlineColor: n.palette.success.dark,
                      outlineWidth: 1,
                      outlineStyle: 'solid',
                    },
                  }),
                }),
              }),
            /* @__PURE__ */ d(c, {
              title: 'Community funds',
              arrow: !0,
              children: /* @__PURE__ */ f(pe, {
                direction: 'row',
                alignItems: 'center',
                spacing: 0.5,
                sx: { cursor: 'help' },
                children: [
                  /* @__PURE__ */ d(Je, {
                    sx: {
                      fontSize: n.typography.body1.fontSize,
                      lineHeight: n.typography.body1.lineHeight,
                    },
                  }),
                  /* @__PURE__ */ d(se, {
                    children: aC(t.table.communityFund),
                  }),
                ],
              }),
            }),
            t.nerfedCrop &&
              /* @__PURE__ */ d(c, {
                title: `${t.nerfedCrop.crop.name} cards now sell for ${t.nerfedCrop.multiplier}x value`,
                arrow: !0,
                children: /* @__PURE__ */ d(pe, {
                  direction: 'row',
                  alignItems: 'center',
                  children: /* @__PURE__ */ d(fe, {
                    sx: {
                      flexDirection: 'row-reverse',
                      '& .MuiSvgIcon-root': {
                        ml: -0.75,
                        mr: 0.75,
                      },
                      '& .MuiChip-label': { pr: 1 },
                      backgroundColor: n.palette.error.light,
                      outlineColor: n.palette.error.dark,
                      outlineWidth: 1,
                      outlineStyle: 'solid',
                    },
                    color: 'error',
                    icon: /* @__PURE__ */ d(Xe, {}),
                    label: /* @__PURE__ */ d(Vv, {
                      src: Hv(t.nerfedCrop.crop),
                      sx: {
                        imageRendering: 'pixelated',
                        filter: `drop-shadow(0 0 5px ${n.palette.common.black})`,
                      },
                    }),
                  }),
                }),
              }),
            /* @__PURE__ */ d(c, {
              title: `${D}'s funds`,
              arrow: !0,
              children: /* @__PURE__ */ f(pe, {
                direction: 'row',
                alignItems: 'center',
                sx: {
                  cursor: 'help',
                  ...(T !== void 0 &&
                    T <= oC && { color: n.palette.error.dark }),
                },
                children: [
                  /* @__PURE__ */ d(Ye, {
                    sx: {
                      fontSize: n.typography.body1.fontSize,
                      lineHeight: n.typography.body1.lineHeight,
                    },
                  }),
                  /* @__PURE__ */ d(se, {
                    children: T === void 0 ? '' : aC(T),
                  }),
                ],
              }),
            }),
          ],
        }),
        /* @__PURE__ */ f(M, {
          sx: {
            width: 1,
            mb: 2,
            borderRadius: `${n.shape.borderRadius}px`,
            '&.Mui-expanded': { mt: 1 },
          },
          expanded: v !== null,
          children: [
            /* @__PURE__ */ d(de, {
              sx: {
                '&:hover:not(.Mui-disabled)': { cursor: 'default' },
                '& .MuiAccordionSummary-content': { justifyContent: 'center' },
              },
              children: /* @__PURE__ */ d(se, {
                variant: 'h6',
                component: 'h1',
                textAlign: 'center',
                fontWeight: 'normal',
                children: b,
              }),
            }),
            /* @__PURE__ */ d(ue, {
              sx: { justifyContent: 'center' },
              children: v,
            }),
          ],
        }),
      ],
    })
  },
  cC = new URLSearchParams(window.location.search).has('debug'),
  lC = x({
    showNotification: () => {
      throw Error('Calling showNotification outside of NotificationProvider')
    },
  }),
  uC = () => E(lC),
  dC = ({ actorRef: e, match: t }) => {
    let { showNotification: n } = uC(),
      r = T(
        (e, t) => {
          cC && console.debug(`Notification: ${me(e)}`), n(e, t)
        },
        [n]
      ),
      i = t.currentPlayerId === t.sessionOwnerPlayerId
    return (
      D(() => {
        let n = ke(t.currentPlayerId ?? '')
        e.send({
          type: F.SET_SHELL,
          shell: {
            triggerNotification: ({ type: e, payload: t }) => {
              switch (e) {
                case nt.CARDS_DRAWN: {
                  let { howMany: e, playerId: n } = t
                  if (i)
                    r(
                      e === 1 ? 'You drew 1 card' : `You drew ${e} cards`,
                      'success'
                    )
                  else {
                    let t = ke(n)
                    r(
                      e === 1 ? `${t} drew 1 card` : `${t} drew ${e} cards`,
                      'warning'
                    )
                  }
                  break
                }
                case nt.CROP_HARVESTED: {
                  let {
                    cropHarvested: { name: e },
                  } = t
                  i
                    ? r(`You harvested and sold a ${e}`, 'success')
                    : r(`${n} harvested and sold a ${e}`, 'warning')
                  break
                }
                case nt.CARD_DISCARDED: {
                  let {
                    cardDiscarded: { name: e },
                  } = t
                  r(i ? `You discarded ${e}` : `${n} discarded ${e}`, 'info')
                  break
                }
                case nt.CROP_WATERED: {
                  let {
                    cropWatered: { name: e },
                  } = t
                  r(
                    i ? `You watered your ${e}` : `${n} watered their ${e}`,
                    'info'
                  )
                  break
                }
                case nt.EVENT_CARD_PLAYED: {
                  let { eventCard: e } = t
                  r(
                    i ? `You played ${e.name}` : `${n} played ${e.name}`,
                    'info'
                  )
                  break
                }
                case nt.TOOL_CARD_PLAYED: {
                  let { toolCard: e } = t
                  r(
                    i ? `You played ${e.name}` : `${n} played ${e.name}`,
                    'info'
                  )
                  break
                }
                case nt.ALL_CROPS_WATERED:
                  r('Watered all crops', 'info')
                  break
                default:
              }
            },
          },
        })
      }, [e, t.currentPlayerId, i, r]),
      { showNotification: r }
    )
  },
  fC = ({
    playerSeeds: e,
    userPlayerId: t,
    onMatchEnd: n,
    onCheckpoint: r,
    initialMatch: i,
  }) => {
    let a = vS.useActorRef(),
      { match: o, matchState: s } = yS(),
      c = vS.useSelector(({ context: e }) => e.botState),
      [l, u] = j(!0)
    D(() => {
      cC &&
        a.subscribe(e => {
          typeof e.value == 'string' &&
            console.debug(`State: ${e.value}`, e.context)
        })
    }, [a])
    let [d, f] = j(!1)
    D(() => {
      s === L.UNINITIALIZED &&
        (i
          ? a.send({
              type: F.RESUME,
              matchState: i.matchState,
              match: i.match,
              botState: i.botState,
              userPlayerId: t,
            })
          : a.send({
              type: F.INIT,
              playerSeeds: e,
              userPlayerId: t,
            }))
    }, [s, e, t, i, a]),
      D(() => {
        ;(s === L.WAITING_FOR_PLAYER_SETUP_ACTION ||
          s === L.WAITING_FOR_PLAYER_TURN_ACTION) &&
          r?.({
            matchState: s,
            match: o,
            botState: c,
          })
      }, [s])
    let p = A(!1)
    D(() => {
      s === L.GAME_OVER
        ? p.current || ((p.current = !0), n?.(o.winner))
        : (p.current = !1)
    }, [s, o.winner, n])
    let m = T(
        async e => {
          try {
            f(!0), await e()
          } catch {
          } finally {
            f(!1)
          }
        },
        [f]
      ),
      { showNotification: h } = dC({
        actorRef: a,
        match: o,
      }),
      [g, _] = j(-1),
      v = T(
        (...e) => {
          if (o.currentPlayerId === o.sessionOwnerPlayerId) return _(...e)
        },
        [o]
      ),
      y = k(
        () => ({
          blockingOperation: m,
          isHandInViewport: l,
          setIsHandInViewport: u,
          showNotification: h,
          selectedHandCardIdx: g,
          setSelectedHandCardIdx: v,
        }),
        [m, l, u, h, g, v]
      ),
      b = o.sessionOwnerPlayerId === o.currentPlayerId,
      x = d || !b,
      S = () => {
        u(e => !e)
      },
      C = () => {
        a.send({
          type: F.INIT,
          playerSeeds: e,
          userPlayerId: t,
        })
      },
      w = [L.PLAYER_WATERING_CROP].includes(s),
      E = l || w
    return {
      match: o,
      botState: c,
      handleHandVisibilityToggle: S,
      handleClickPlayAgain: C,
      isHandDisabled: w,
      isInputBlocked: x,
      shellContextValue: y,
      showGameOver: s === L.GAME_OVER,
      showHand: E,
    }
  },
  pC = ({
    playerSeeds: l,
    userPlayerId: u,
    fullHeight: p = !1,
    sx: m = [],
    onMatchEnd: h,
    onCheckpoint: g,
    renderStatusBarContent: _,
    renderGameOverContent: v,
    hideDefaultGameOverActions: y = !1,
    initialMatch: b,
    ...x
  }) => {
    let S = s(),
      {
        match: C,
        handleHandVisibilityToggle: w,
        handleClickPlayAgain: T,
        isHandDisabled: E,
        isInputBlocked: D,
        shellContextValue: O,
        showGameOver: ee,
        showHand: te,
      } = fC({
        playerSeeds: l,
        userPlayerId: u,
        onMatchEnd: h,
        onCheckpoint: g,
        initialMatch: b,
      }),
      { winner: k } = C
    return /* @__PURE__ */ d(bS.Provider, {
      value: O,
      children: /* @__PURE__ */ f(t, {
        maxWidth: !1,
        'data-testid': 'match',
        sx: [
          {
            backgroundColor: '#ffba4d',
            backgroundImage: `url(${Ke.brownDotBackground})`,
            backgroundSize: S.spacing(10),
            imageRendering: 'pixelated',
            pt: 1,
            pb: 10,
            overflow: 'auto',
            ...(D && { '*': { pointerEvents: 'none' } }),
            height: p ? '100vh' : void 0,
          },
          ...(Ae(m) ? m : [m]),
        ],
        ...x,
        children: [
          /* @__PURE__ */ d(sC, { match: C }),
          _?.(),
          /* @__PURE__ */ d(rC, {
            sx: { pt: 4 },
            match: C,
          }),
          /* @__PURE__ */ d(c, {
            arrow: !0,
            title: te ? 'Hide Hand' : 'Show Hand',
            children: /* @__PURE__ */ d(o, {
              color: 'secondary',
              disabled: D || E,
              onClick: w,
              sx: {
                position: 'fixed',
                bottom: S.spacing(2),
                left: S.spacing(2),
              },
              children: /* @__PURE__ */ d(Xe, {
                sx: {
                  transform: `rotate(${te ? 0 : 180}deg)`,
                  transition: S.transitions.create(['transform']),
                },
              }),
            }),
          }),
          /* @__PURE__ */ f(n, {
            open: ee,
            children: [
              /* @__PURE__ */ d(a, { children: 'Game Over' }),
              /* @__PURE__ */ f(i, {
                children: [
                  'Winner: ',
                  /* @__PURE__ */ d('strong', {
                    children: k ? ke(k) : 'No one',
                  }),
                  v?.(k),
                ],
              }),
              /* @__PURE__ */ d(r, {
                children:
                  !y &&
                  /* @__PURE__ */ d(e, {
                    onClick: T,
                    children: 'Play again',
                  }),
              }),
            ],
          }),
        ],
      }),
    })
  },
  mC = ({ ...e }) =>
    /* @__PURE__ */ d(vS.Provider, {
      children: /* @__PURE__ */ d(pC, { ...e }),
    }),
  hC = [
    [ut, 4],
    [ht, 4],
    [mt, 4],
    [dt, 4],
    [pt, 4],
    [ft, 4],
    [gt, 4],
  ],
  gC = 4,
  _C = 4,
  vC = 4,
  yC = hC.length + 3,
  bC = 60 - yC * 4
bC <= 0 &&
  console.warn(
    `starterDeck: WATER_COUNT computed as ${bC}. DECK_SIZE (60) may be too small for NON_WATER_CARD_TYPE_COUNT (${yC}) at MAX_INSTANCES_PER_CARD (4) copies each.`
  )
var xC = (e, t) => Array.from({ length: t }, () => nn(e)),
  SC = (e, t) => {
    let n = Math.min(e.length, t.length)
    return [
      ...Array.from({ length: n }, (n, r) => [e[r], t[r]]).flat(),
      ...e.slice(n),
      ...t.slice(n),
    ]
  },
  CC = () => {
    let e = hC.flatMap(([e, t]) => xC(e, t)),
      t = xC($t, bC),
      n = xC(St, gC),
      r = xC(Zt, _C),
      i = xC(Yt, vC)
    return [...SC(e, t), ...SC(SC(n, r), i)]
  },
  wC = e => ({
    id: e.id,
    instanceId: e.instanceId,
  }),
  TC = e => {
    let t = rn[e.id]
    if (!t)
      throw new Lt(`Card with ID "${e.id}" not found in card definitions.`)
    return {
      ...t,
      instanceId: e.instanceId,
    }
  },
  EC = e => {
    if (e)
      return {
        ...e,
        instance: wC(e.instance),
      }
  },
  DC = e => {
    if (e)
      return {
        ...e,
        instance: TC(e.instance),
      }
  },
  OC = e => ({
    ...e,
    deck: e.deck.map(wC),
    hand: e.hand.map(wC),
    discardPile: e.discardPile.map(wC),
    cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(wC),
    field: { cards: e.field.cards.map(EC) },
  }),
  kC = e => ({
    ...e,
    deck: e.deck.map(TC),
    hand: e.hand.map(TC),
    discardPile: e.discardPile.map(TC),
    cardsPlayedDuringTurn: e.cardsPlayedDuringTurn.map(TC),
    field: { cards: e.field.cards.map(DC) },
  }),
  AC = e => ({
    ...e,
    table: {
      ...e.table,
      players: Object.fromEntries(
        Object.entries(e.table.players).map(([e, t]) => [e, OC(t)])
      ),
    },
  }),
  jC = e => ({
    ...e,
    table: {
      ...e.table,
      players: Object.fromEntries(
        Object.entries(e.table.players).map(([e, t]) => [e, kC(t)])
      ),
    },
  })
//#endregion
export {
  mC as Match,
  L as MatchState,
  jC as deserializeMatch,
  AC as serializeMatch,
  CC as starterDeck,
}
