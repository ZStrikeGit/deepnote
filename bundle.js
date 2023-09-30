!function e(t, n, r) {
    function o(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u)
                    return u(s, !0);
                if (i)
                    return i(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var c = n[s] = {
                exports: {}
            };
            t[s][0].call(c.exports, function(e) {
                var n = t[s][1][e];
                return o(n ? n : e)
            }, c, c.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof require && require, s = 0; s < r.length; s++)
        o(r[s]);
    return o
}({
    "/projects/prj-thx/index.js": [function(e) {
        "use strict";
        e("./lib/util/override-clone-uniforms")();
        var t = e("./lib/createEmbed")
          , n = document.querySelector("#canvas");
        t(n)
    }
    , {
        "./lib/createEmbed": "/projects/prj-thx/lib/createEmbed.js",
        "./lib/util/override-clone-uniforms": "/projects/prj-thx/lib/util/override-clone-uniforms.js"
    }],
    "/projects/prj-thx/lib/assets/EquiToCube.js": [function(e, t) {
        "use strict";
        function n(e) {
            if (this.renderer = e,
            null === o) {
                var t = e.getContext();
                o = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)
            }
            this.material = new THREE.MeshBasicMaterial({
                map: null,
                side: THREE.BackSide
            }),
            i || (i = new THREE.SphereBufferGeometry(100,256,64)),
            this.mesh = new THREE.Mesh(i,this.material),
            this.scene = new THREE.Scene,
            this.scene.add(this.mesh);
            var n = Math.min(r, o);
            this.camera = new THREE.CubeCamera(1,1e3,n),
            this.cubeTexture = this.camera.renderTarget.texture,
            clearTimeout(s),
            s = setTimeout(function() {
                i.dispose()
            }, 3e3)
        }
        var r = 1024
          , o = null
          , i = void 0
          , s = void 0;
        t.exports = n,
        n.prototype.convert = function(e) {
            this.material.map = e,
            this.material.needsUpdate = !0,
            this.camera.updateCubeMap(this.renderer, this.scene)
        }
    }
    , {}],
    "/projects/prj-thx/lib/assets/index.js": [function(e, t) {
        (function(n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n),
                    r && e(t, r),
                    t
                }
            }()
              , s = e("path")
              , a = e("object-assign")
              , u = e("map-limit")
              , l = function() {}
              , c = function(e) {
                return /\.(jpe?g|png|gif|bmp|tga|tif)$/i.test(e)
            }
              , d = e("./loadTexture")
              , p = e("./loadAudio")
              , f = e("./loadEnvMap")
              , h = e("load-img")
              , m = function() {
                function e() {
                    r(this, e),
                    this._cache = {},
                    this._queue = [],
                    this._renderer = null,
                    this._asyncLimit = 10
                }
                return i(e, [{
                    key: "includeAll",
                    value: function() {
                        var e = this
                          , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return t = Array.isArray(t) ? t : [t],
                        t.map(function(t) {
                            return e.include(t)
                        })
                    }
                }, {
                    key: "include",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!e || "object" !== ("undefined" == typeof e ? "undefined" : o(e)))
                            throw new Error("First parameter must be an object!");
                        if (!e.url)
                            throw new TypeError("Must specify a URL or opt.url for AssetManager#include()");
                        e = a({}, e),
                        e.key = e.key || e.url;
                        var t = this._getQueued(e.key);
                        return t || this._queue.push(e),
                        e.key
                    }
                }, {
                    key: "_getQueued",
                    value: function(e) {
                        for (var t = 0; t < this._queue.length; t++) {
                            var n = this._queue[t];
                            if (n.key === e)
                                return n
                        }
                        return null
                    }
                }, {
                    key: "get",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        if (!e)
                            throw new TypeError("Must specify a key or URL for AssetManager#get()");
                        return e in this._cache || console.warn("Could not find an asset by the key or URL " + e),
                        this._cache[e]
                    }
                }, {
                    key: "setRenderer",
                    value: function(e) {
                        this._renderer = e
                    }
                }, {
                    key: "load",
                    value: function() {
                        var e = this
                          , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l
                          , n = this._queue.slice();
                        this._queue.length = 0,
                        u(n, this._asyncLimit, function(t, n) {
                            e.loadItem(t, n)
                        }, t)
                    }
                }, {
                    key: "loadItem",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l
                          , r = e.url
                          , i = s.extname(r)
                          , a = e.key || r
                          , u = this._cache
                          , m = this._renderer;
                        if (!(a in u)) {
                            var v = function(e, n) {
                                e ? delete u[r] : u[r] = n,
                                t && t(e, n)
                            };
                            if (e.envMap)
                                return f(r, e, m, v);
                            if (c(i)) {
                                var x = void 0;
                                return x = e.texture !== !1 ? d(r, e, m, v) : h(r, e, v),
                                u[a] = x,
                                x
                            }
                            if (/.(wav|mp3|ogg|mp4)$/i.test(i)) {
                                if (!e.audioContext)
                                    throw new TypeError("AudioContext not specified for asset: " + r);
                                return void p(r, e.audioContext, v)
                            }
                            throw new Error("Could not load " + r + ", unknown file extension!")
                        }
                        var g = function() {
                            var e = u[a];
                            return n.nextTick(function() {
                                return t(null, e)
                            }),
                            {
                                v: e
                            }
                        }();
                        return "object" === ("undefined" == typeof g ? "undefined" : o(g)) ? g.v : void 0
                    }
                }]),
                e
            }();
            t.exports = new m
        }
        ).call(this, e("_process"))
    }
    , {
        "./loadAudio": "/projects/prj-thx/lib/assets/loadAudio.js",
        "./loadEnvMap": "/projects/prj-thx/lib/assets/loadEnvMap.js",
        "./loadTexture": "/projects/prj-thx/lib/assets/loadTexture.js",
        _process: "/projects/prj-thx/node_modules/process/browser.js",
        "load-img": "/projects/prj-thx/node_modules/load-img/index.js",
        "map-limit": "/projects/prj-thx/node_modules/map-limit/index.js",
        "object-assign": "/projects/prj-thx/node_modules/object-assign/index.js",
        path: "/projects/prj-thx/node_modules/path-browserify/index.js"
    }],
    "/projects/prj-thx/lib/assets/loadAudio.js": [function(e, t) {
        "use strict";
        function n(e, t) {
            function n(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                t.decodeAudioData(e, function(e) {
                    n(null, e)
                }, function(e) {
                    return n(e)
                })
            }
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
            r({
                uri: e,
                responseType: "arraybuffer"
            }, function(e, t, r) {
                return e ? i(e) : void n(r, i)
            })
        }
        var r = e("xhr")
          , o = function() {};
        t.exports = n
    }
    , {
        xhr: "/projects/prj-thx/node_modules/xhr/index.js"
    }],
    "/projects/prj-thx/lib/assets/loadEnvMap.js": [function(e, t) {
        "use strict";
        function n(e, t) {
            return [e + "px" + t, e + "nx" + t, e + "py" + t, e + "ny" + t, e + "pz" + t, e + "nz" + t]
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , o = function() {}
          , i = e("./EquiToCube")
          , s = e("./loadTexture")
          , a = e("clamp");
        t.exports = function(e, t, u, l) {
            function c() {
                var t = new Error("Could not load PBR map: " + e);
                console.error(t),
                l(t),
                l = o
            }
            function d(e) {
                if (t.pbr || "number" == typeof t.level) {
                    var n = new THREE.PMREMGenerator(e);
                    if (n.update(u),
                    t.pbr) {
                        var r = new THREE.PMREMCubeUVPacker(n.cubeLods);
                        r.update(u);
                        var i = r.CubeUVRenderTarget;
                        e = i.texture
                    } else {
                        var s = a(Math.floor(t.level), 0, n.cubeLods.length);
                        e = n.cubeLods[s].texture
                    }
                }
                t.mapping && (e.mapping = t.mapping),
                l(null, e),
                l = o
            }
            if (!u)
                throw new Error("PBR Map requires renderer to be set on AssetManager!");
            if (!t.equirectangular) {
                var p = t.hdr
                  , f = p ? ".hdr" : ".png"
                  , h = n(e, f);
                return p ? (new THREE.HDRCubeTextureLoader).load(THREE.UnsignedByteType, h, d, o, c) : (new THREE.CubeTextureLoader).load(h, function(e) {
                    e.encoding = THREE.RGBM16Encoding,
                    d(e)
                }, o, c)
            }
            var m = function() {
                var t = new i(u);
                return s(e, {}, u, function(e, n) {
                    return e ? l(e) : (t.convert(n),
                    n.dispose(),
                    n.image.data = null,
                    void d(t.cubeTexture))
                }),
                {
                    v: t.cubeTexture
                }
            }();
            return "object" === ("undefined" == typeof m ? "undefined" : r(m)) ? m.v : void 0
        }
    }
    , {
        "./EquiToCube": "/projects/prj-thx/lib/assets/EquiToCube.js",
        "./loadTexture": "/projects/prj-thx/lib/assets/loadTexture.js",
        clamp: "/projects/prj-thx/node_modules/clamp/index.js"
    }],
    "/projects/prj-thx/lib/assets/loadTexture.js": [function(e, t) {
        "use strict";
        function n(e, t) {
            e.needsUpdate = !0,
            "boolean" == typeof t.flipY && (e.flipY = t.flipY),
            "undefined" != typeof t.mapping && (e.mapping = t.mapping),
            "undefined" != typeof t.format && (e.format = t.format),
            e.wrapS = t.wrapS || THREE.ClampToEdgeWrapping,
            e.wrapT = t.wrapT || THREE.ClampToEdgeWrapping,
            e.minFilter = t.minFilter || THREE.LinearMipMapLinearFilter,
            e.magFilter = t.magFilter || THREE.LinearFilter,
            e.generateMipmaps = t.generateMipmaps !== !1
        }
        function r() {}
        var o = e("object-assign")
          , i = function() {};
        t.exports = function(e, t, s, a) {
            "function" == typeof t && (a = t,
            t = {}),
            t = o({}, t),
            a = a || i;
            var u = new r;
            u.encoding = t.encoding || THREE.LinearEncoding;
            var l = u.load(e, function(r) {
                r.name = e,
                n(r, t),
                s && s.setTexture2D(r, 0),
                a(null, r)
            }, function() {}, function() {
                var t = "Could not load texture " + e;
                console.error(t),
                a(new Error(t))
            }, t);
            return l
        }
        ,
        r.prototype.load = function(e, t, n, r, o) {
            var i = new THREE.Texture;
            o && o.encoding && (i.encoding = o.encoding);
            var s = new window.Image;
            return s.onload = function() {
                i.image = s,
                i.needsUpdate = !0,
                t(i)
            }
            ,
            s.onerror = function(e) {
                r(e)
            }
            ,
            s.src = e,
            i
        }
    }
    , {
        "object-assign": "/projects/prj-thx/node_modules/object-assign/index.js"
    }],
    "/projects/prj-thx/lib/components/createAudio.js": [function(e, t) {
        "use strict";
        {
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
              , r = (e("xhr"),
            e("tweenr")())
              , o = e("soundbank-reverb")
              , i = (e("map-limit"),
            e("../assets"))
              , s = e("../util/query")
              , a = new (window.AudioContext || window.webkitAudioContext)
              , u = i.include({
                url: "assets/audio/deepnote.mp3",
                audioContext: a
            })
              , l = i.include({
                url: "assets/audio/impulse.mp3",
                audioContext: a
            })
              , c = e("element-class")
              , d = document.querySelector(".volume");
            document.querySelector(".volume > .on"),
            document.querySelector(".volume > .off")
        }
        t.exports = function() {
            function e() {
                _.gain.value = P || I || O ? 0 : 1
            }
            function t() {
                d.addEventListener("mousedown", function(t) {
                    t.preventDefault(),
                    I = !I,
                    I ? c(d).add("muted") : c(d).remove("muted"),
                    e()
                })
            }
            function p() {
                var t, n;
                "undefined" != typeof document.hidden ? (t = "hidden",
                n = "visibilitychange") : "undefined" != typeof document.msHidden && (t = "msHidden",
                n = "msvisibilitychange"),
                document.addEventListener(n, function() {
                    O = Boolean(document[t]),
                    e()
                })
            }
            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (C) {
                    var t = a.createBufferSource();
                    t.buffer = C,
                    t.start(0 === e ? 0 : a.currentTime + e),
                    t.connect(S),
                    t.onended = function() {
                        console.log("impulse end"),
                        t.disconnect()
                    }
                    ,
                    R = t
                }
            }
            function h() {
                L = 0,
                r.cancel(),
                k.value = 1,
                m(),
                A && y(A)
            }
            function m() {
                E.wet.value = k.value,
                E.dry.value = 1 - k.value
            }
            function v() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                M && (A || !function() {
                    b();
                    var t = a.createBufferSource();
                    t.connect(T),
                    t.onended = function() {
                        y(t),
                        h()
                    }
                    ,
                    t.buffer = M,
                    L = e,
                    t.start(0, L),
                    T.gain.value = 0,
                    D = a.currentTime,
                    A = t,
                    k.value = 1
                }(),
                m(),
                r.cancel(),
                r.to(k, {
                    value: 0,
                    delay: t,
                    duration: .5,
                    ease: "expoOut"
                }).on("update", m),
                r.to(T.gain, {
                    value: 1,
                    delay: t,
                    duration: 1,
                    ease: "expoOut"
                }))
            }
            function x() {
                C && R && R.stop()
            }
            function g() {
                M && A && !function() {
                    r.cancel();
                    var e = A;
                    r.to(k, {
                        value: 1,
                        duration: .05,
                        ease: "expoOut"
                    }).on("update", m),
                    r.to(T.gain, {
                        value: 0,
                        duration: .5,
                        ease: "quatOut"
                    }).on("complete", function(t) {
                        if (!t.cancelling) {
                            var n = a.currentTime;
                            L += n - D,
                            y(e)
                        }
                    })
                }()
            }
            function j(e) {
                if (w) {
                    var t = o(a);
                    return t.time = 5,
                    t.wet.value = 0,
                    t.dry.value = 1,
                    t.filterType = "highpass",
                    t.cutoff.value = 700,
                    t.connect(e),
                    t
                }
                var r = function() {
                    var t = a.createGain()
                      , n = a.createGain()
                      , r = a.createGain()
                      , o = a.createBiquadFilter();
                    return t.connect(n),
                    t.connect(r),
                    o.type = "highpass",
                    o.frequency.value = 1e3,
                    n.connect(e),
                    r.connect(o),
                    o.connect(e),
                    Object.defineProperties(t, {
                        wet: {
                            get: function() {
                                return r.gain
                            }
                        },
                        dry: {
                            get: function() {
                                return n.gain
                            }
                        }
                    }),
                    t.wet.value = 0,
                    t.dry.value = 1,
                    {
                        v: t
                    }
                }();
                return "object" === ("undefined" == typeof r ? "undefined" : n(r)) ? r.v : void 0
            }
            function y(e) {
                e && (e.stop(0),
                e.disconnect(),
                e === A && (A = null))
            }
            function b() {
                "suspended" === a.state && "function" == typeof a.resume && a.resume()
            }
            var _ = a.createGain();
            _.connect(a.destination);
            var w = a.sampleRate <= 96e3
              , E = j(_)
              , T = a.createGain();
            T.connect(E);
            var S = a.createGain();
            S.connect(_),
            S.gain.value = .35;
            var M = i.get(u)
              , C = i.get(l)
              , A = void 0
              , R = void 0
              , D = 0
              , L = 0
              , k = {
                value: 0
            }
              , I = Boolean(s.banner)
              , O = !1
              , P = !1;
            return t(),
            p(),
            e(),
            {
                getCurrentTime: function() {
                    if (!A)
                        return 0;
                    var e = a.currentTime;
                    return L + (e - D)
                },
                playImpulse: f,
                setTouchMute: function(t) {
                    P = t,
                    e()
                },
                isTouchMute: function() {
                    return P
                },
                fadeIn: v,
                fadeOut: g,
                killImpulse: x,
                reset: h
            }
        }
    }
    , {
        "../assets": "/projects/prj-thx/lib/assets/index.js",
        "../util/query": "/projects/prj-thx/lib/util/query.js",
        "element-class": "/projects/prj-thx/node_modules/element-class/index.js",
        "map-limit": "/projects/prj-thx/node_modules/map-limit/index.js",
        "soundbank-reverb": "/projects/prj-thx/node_modules/soundbank-reverb/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js",
        xhr: "/projects/prj-thx/node_modules/xhr/index.js"
    }],
    "/projects/prj-thx/lib/components/createCrystals.js": [function(e, t) {
        "use strict";
        var n = e("new-array")
          , r = e("../assets")
          , o = e("tweenr")
          , i = (o(),
        o())
          , s = e("lerp")
          , a = e("smoothstep")
          , u = (e("eases"),
        e("clamp"))
          , l = e("../shaders/CrystalMaterial")
          , c = e("../util/random")
          , d = c.randomFloat
          , p = c.simplex
          , f = e("three-buffer-vertex-data")
          , h = e("../util/query")
          , m = e("../util/isMobile")
          , v = e("defined")
          , x = v(h.glossiness, 1)
          , g = {
            url: "assets/textures/pisaRGBM16/",
            envMap: !0,
            level: x
        }
          , j = r.include(g);
        t.exports = function(e) {
            function t(t) {
                t /= 1e3;
                for (var n = T.getState(), r = T.getClimax(), o = T.isInputDown(), i = T.isClimax(), l = 0; l < X.length; l++)
                    X[l].z *= W;
                h.climax && (n = 1,
                r = 1,
                o = !0,
                i = !0);
                var c = s(1, 4.5, n * r) * q;
                ee.forEach(function(l, d) {
                    l.material.uniforms.fadeIn.value = k.value,
                    l.material.uniforms.audioState.value = n,
                    l.material.uniforms.audioClimax.value = r,
                    l.material.uniforms.mousePosition.value.copy(K),
                    l.material.uniforms.resolution.value.set(e.width, e.height),
                    l.material.uniforms.time.value += t * c;
                    var p = a(0, .15, n)
                      , f = s(O, P, p)
                      , h = s(f, z, r);
                    l.material.uniforms.vertexWeight.value = h,
                    2 === d && l.material.color.setStyle("white"),
                    (o || i) && (l.material.uniforms.inputTime.value += t * c * r);
                    var m = t * s(l.minSpeed, l.maxSpeed, n);
                    o || i ? (l.rippleAcceleration += m,
                    l.rippleAcceleration = u(l.rippleAcceleration, U, B)) : l.rippleAcceleration *= N,
                    0 === n && (l.rippleAcceleration = U),
                    l.material.uniforms.rippleTime.value += l.rippleAcceleration * q
                })
            }
            function o() {
                i.cancel().to(k, {
                    value: 1,
                    delay: 0,
                    duration: 2,
                    ease: "quadOut"
                })
            }
            function c(e, t) {
                return t.set(e),
                t
            }
            function x(e) {
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e = Array.isArray(e) ? e : [e],
                c(e[0], D),
                c(e[1] || e[0], L),
                te.color1 = D.getStyle(),
                ee.forEach(function(e, t) {
                    var n = 0 === t ? D : L;
                    e.material.uniforms.color1.value.copy(n)
                })
            }
            function g() {
                ee.forEach(function(e, t) {
                    var n = 0 === t ? D : L;
                    e.material.uniforms.color1.value.copy(n)
                })
            }
            function y(t, n) {
                if (Z = !0,
                K.x = n[0] / e.width * 2 - 1,
                K.y = (e.height - 1 - n[1]) / e.height * 2 - 1,
                K.distanceTo($) >= V) {
                    J++;
                    for (var r = G - 1; r > 0; r--) {
                        var o = X[r - 1];
                        X[r].copy(o)
                    }
                    Y.copy(K).sub($),
                    Y.clampScalar(-Q, Q);
                    var i = X[0].z;
                    J >= G && (i += .1 * Y.length()),
                    i = Math.min(1, i),
                    X[0].set(K.x, K.y, i),
                    $.copy(K)
                }
            }
            function b(e) {
                var t = F
                  , n = H.clone();
                h.wireMix && (n.wireframe = 0 === e,
                n.wireframe && (n.envMap = void 0,
                n.needUpdate = !0)),
                n.uniforms = THREE.UniformsUtils.clone(n.uniforms),
                n.uniforms.index.value = 1 >= R ? 0 : e / (R - 1),
                n.uniforms.mouseOffsetStrengths.value = X;
                var r = new THREE.Mesh(t,n)
                  , o = .001
                  , i = .15;
                return r.minSpeed = o,
                r.frustumCulled = !1,
                r.maxSpeed = i,
                r.rippleAcceleration = 0,
                r.position.z = -4,
                r
            }
            function _(e, t) {
                var n = new THREE.PlaneGeometry(e,e,t,t)
                  , r = n.vertices;
                n.faces.forEach(function(e, t) {
                    var n = e.a
                      , o = e.b
                      , i = e.c
                      , s = r[n]
                      , a = r[o]
                      , u = r[i]
                      , l = [s, a, u];
                    l.forEach(function(e) {
                        var n = Math.sin(40 * Math.sqrt(e.x * e.x + e.y * e.y))
                          , r = 2
                          , o = .02;
                        e.x += o * p.noise3D(e.y * r, n, t),
                        e.y += o * p.noise3D(e.x * r, n, t)
                    })
                });
                var o = []
                  , i = []
                  , s = n.faceVertexUvs[0]
                  , a = []
                  , u = []
                  , l = new THREE.Vector3
                  , c = new THREE.BufferGeometry
                  , h = !1;
                return h || n.faces.forEach(function(e, t) {
                    var n = e.a
                      , c = e.b
                      , p = e.c
                      , f = r[n]
                      , h = r[c]
                      , m = r[p]
                      , v = [f, h, m]
                      , x = s[t];
                    l.set(0, 0, 0),
                    v.forEach(function(e, t) {
                        l.add(e),
                        i.push(e.x, e.y, e.z),
                        o.push(x[t].toArray())
                    }),
                    l.divideScalar(3);
                    var g = l.toArray();
                    a.push(g, g, g);
                    var j = d(1);
                    u.push(j, j, j)
                }),
                f.attr(c, "position", i, 3),
                f.attr(c, "centroid", a, 3),
                f.attr(c, "uv", o, 2),
                f.attr(c, "sparkleWeight", u, 1),
                n.dispose(),
                c
            }
            function w() {
                var e = function() {
                    ee.forEach(function(e, t) {
                        var n = e.material;
                        n.shininess = te.shininess,
                        n.opacity = te.opacity,
                        n.envMap = te.envMap ? I : void 0,
                        n.wireframe = te.wireMix ? 0 === t : te.wireframe,
                        n.uniforms.rippleMin.value = te.rippleMin,
                        n.uniforms.rippleMax.value = te.rippleMax,
                        n.uniforms.spin.value = te.spin,
                        n.uniforms.vertexNoise.value = te.vertexNoise,
                        n.uniforms.sparkles.value = te.sparkles,
                        n.needsUpdate = !0
                    }),
                    O = te.vertexWeightIdle,
                    z = te.vertexWeightClimax,
                    q = te.speed,
                    D.setStyle(te.color1),
                    g()
                }
                  , t = E.gui
                  , n = t.addFolder("scene");
                n.add(te, "wireframe").onFinishChange(e),
                n.add(te, "wireMix").onFinishChange(e),
                n.add(te, "envMap").onFinishChange(e),
                n.add(te, "shininess", 0, 200).onChange(e),
                n.add(te, "opacity", 0, 1).onChange(e),
                n.add(te, "spin", 0, 1).onChange(e),
                n.add(te, "sparkles", 0, 1).onChange(e),
                n.addColor(te, "color1").onChange(e).listen();
                var r = t.addFolder("shader");
                r.add(te, "speed", 0, 10).onChange(e),
                r.add(te, "rippleMin", 0, 100).onChange(e),
                r.add(te, "rippleMax", 0, 100).onChange(e),
                r.add(te, "vertexWeightIdle", 0, .5).onChange(e),
                r.add(te, "vertexWeightClimax", 0, .5).onChange(e)
            }
            var E = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , T = E.input
              , S = E.gui
              , M = (e.camera.getWorldPosition().z,
            new THREE.Object3D)
              , C = v(h.subdiv, m ? 110 : 150)
              , A = 20
              , R = v(h.numLayers, 2)
              , D = new THREE.Color
              , L = new THREE.Color
              , k = {
                value: 0
            }
              , I = r.get(j)
              , O = .45
              , P = .1
              , z = .37
              , q = .8
              , F = _(A, C)
              , H = new l({
                side: m ? THREE.FrontSide : THREE.DoubleSide,
                shininess: v(h.shininess, 200),
                opacity: v(h.opacity, 1),
                depthTest: !1,
                depthWrite: !1,
                blending: THREE.AdditiveBlending,
                transparent: !0,
                shading: THREE.FlatShading,
                envMap: h.envMap !== !1 ? I : void 0,
                wireframe: Boolean(h.wireframe)
            })
              , N = .975
              , U = .01
              , B = .1
              , V = .01
              , G = l.MOUSE_CAPACITY
              , W = h.bigMouse ? .98 : .97
              , X = n(G).map(function() {
                return new THREE.Vector3
            })
              , Y = new THREE.Vector2
              , Q = .65
              , K = new THREE.Vector2(-2,-2)
              , $ = K.clone()
              , Z = (K.clone(),
            !1)
              , J = 0
              , ee = n(R).map(function(e, t) {
                return b(t)
            });
            ee.forEach(function(e) {
                return M.add(e)
            });
            var te = {
                envMap: Boolean(h.envMap !== !1),
                shininess: H.shininess,
                wireframe: Boolean(h.wireframe),
                wireMix: Boolean(h.wireMix),
                opacity: H.opacity,
                color1: D.getStyle(),
                speed: q,
                sparkles: H.uniforms.sparkles.value,
                spin: H.uniforms.spin.value,
                vertexWeightIdle: O,
                vertexWeightClimax: z,
                vertexNoise: H.uniforms.vertexNoise.value,
                rippleMin: H.uniforms.rippleMin.value,
                rippleMax: H.uniforms.rippleMax.value
            };
            return S && w(),
            {
                setColor: x,
                fadeIn: o,
                object3d: M,
                update: t,
                onMouseMove: y
            }
        }
    }
    , {
        "../assets": "/projects/prj-thx/lib/assets/index.js",
        "../shaders/CrystalMaterial": "/projects/prj-thx/lib/shaders/CrystalMaterial.js",
        "../util/isMobile": "/projects/prj-thx/lib/util/isMobile.js",
        "../util/query": "/projects/prj-thx/lib/util/query.js",
        "../util/random": "/projects/prj-thx/lib/util/random.js",
        clamp: "/projects/prj-thx/node_modules/clamp/index.js",
        defined: "/projects/prj-thx/node_modules/defined/index.js",
        eases: "/projects/prj-thx/node_modules/eases/index.js",
        lerp: "/projects/prj-thx/node_modules/lerp/index.js",
        "new-array": "/projects/prj-thx/node_modules/new-array/index.js",
        smoothstep: "/projects/prj-thx/node_modules/smoothstep/index.js",
        "three-buffer-vertex-data": "/projects/prj-thx/node_modules/three-buffer-vertex-data/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/components/createInput.js": [function(e, t) {
        "use strict";
        var n = (e("clamp"),
        e("tweenr"))
          , r = Object.keys(e("eases"))
          , o = e("events").EventEmitter
          , i = e("object-assign")
          , s = e("lodash.throttle")
          , a = e("touches")
          , u = e("mouse-event-offset")
          , l = e("./createAudio")
          , c = e("../util/isMobile")
          , d = e("../util/query")
          , p = n()
          , f = n()
          , h = n()
          , m = d.banner
          , v = 300;
        t.exports = function(e) {
            function t(t) {
                m || 0 !== t.button || (t.preventDefault(),
                u(t, e, I),
                R.emit("input-down", t, I),
                k(t))
            }
            function n(t) {
                m || (u(t, e, I),
                R.emit("input-up", t, I),
                w(t))
            }
            function x(t) {
                u(t, e, I),
                R.emit("input-move", t, I)
            }
            function g() {
                e.addEventListener("mousedown", t, !1),
                e.addEventListener("mousemove", x, !1),
                document.addEventListener("mouseup", n, !1)
            }
            function j() {
                e.removeEventListener("mousedown", t, !1),
                e.removeEventListener("mousemove", x, !1),
                document.removeEventListener("mouseup", n, !1)
            }
            function y() {
                B.value = 1,
                E(),
                N.fadeIn(K.initialRampTime)
            }
            function b() {
                if (U = !0,
                !W) {
                    var e = v / 1e3;
                    N.reset(),
                    c || N.playImpulse(c ? e : 0),
                    N.fadeIn(void 0, c ? e : 0),
                    X = 1,
                    p.cancel(),
                    S({
                        targetValue: 1,
                        delay: c ? e : 0,
                        totalSeconds: K.initialRampTime,
                        ease: K.initialEase
                    }),
                    h.cancel(),
                    S({
                        targetValue: 1,
                        delay: c ? e : 0,
                        target: G,
                        totalSeconds: K.timeForClimax,
                        ease: "quadOut",
                        timeline: h
                    }),
                    R.emit("charge-start")
                }
            }
            function _() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
                W || (X = -1,
                p.cancel(),
                S({
                    targetValue: 0,
                    totalSeconds: K.fadeOutTime,
                    ease: K.fadeOutEase
                }).on("complete", function() {
                    X = 0
                }),
                h.cancel(),
                S({
                    targetValue: 0,
                    target: G,
                    totalSeconds: 1,
                    ease: "quadInOut",
                    timeline: h
                }),
                e && N.killImpulse(),
                N.fadeOut(),
                R.emit("charge-end"))
            }
            function w() {
                U = !1,
                _()
            }
            function E() {
                f.cancel().to(V, {
                    duration: K.climaxRampTime,
                    value: 1,
                    ease: K.climaxRampEase
                }),
                W = !0,
                S({
                    targetValue: 0,
                    totalSeconds: K.finalFadeOutTime,
                    ease: K.finalFadeOutEase,
                    delay: K.sustainTime
                }).on("start", function() {
                    R.emit("audio-ending", {
                        duration: K.finalFadeOutTime,
                        ease: K.finalFadeOutEase
                    }),
                    h.cancel(),
                    S({
                        targetValue: 0,
                        target: G,
                        totalSeconds: 1,
                        ease: "quadInOut",
                        timeline: h
                    })
                }).on("update", function() {
                    V.value = B.value
                }).on("complete", function() {
                    W = !1,
                    Q = !1,
                    console.log("reset to zero"),
                    N.reset(),
                    X = 0,
                    R.emit("audio-end"),
                    R.emit("charge-end")
                })
            }
            function T() {
                var e = N.getCurrentTime();
                !W && e >= K.timeForClimax && E(),
                !Q && e >= Y && (R.emit("color-change"),
                Q = !0),
                $ && ($.state.style.display = K.debug ? "block" : "none",
                $.fade.style.display = K.debug ? "block" : "none",
                $.fade.style.background = W ? "green" : "white",
                $.fade.style.width = Math.floor(100 * B.value) + "%",
                $.state.style.width = Math.floor(100 * V.value) + "%")
            }
            function S(e) {
                var t = e.targetValue
                  , n = e.totalSeconds
                  , r = e.ease
                  , o = e.target
                  , i = void 0 === o ? B : o
                  , s = e.timeline
                  , a = void 0 === s ? p : s
                  , u = e.delay
                  , l = void 0 === u ? 0 : u
                  , c = 1 / n
                  , d = i.value
                  , f = Math.abs(d - t)
                  , h = f / c;
                return a.to(i, {
                    value: t,
                    duration: h,
                    ease: r,
                    delay: l
                })
            }
            function M() {
                var e = document.createElement("div");
                i(e.style, {
                    zIndex: "100",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "0%",
                    height: "5px",
                    background: "blue"
                }),
                document.body.appendChild(e);
                var t = document.createElement("div");
                return i(t.style, {
                    zIndex: "100",
                    position: "fixed",
                    top: "5px",
                    left: 0,
                    width: "0%",
                    height: "5px",
                    background: "red"
                }),
                document.body.appendChild(t),
                {
                    fade: e,
                    state: t
                }
            }
            function C() {
                var e = D.addFolder("timing");
                e.add(K, "initialRampTime", 1, 10).name("initialFadeIn"),
                e.add(K, "initialEase", r).name("iniitialInEase"),
                e.add(K, "fadeOutTime", 1, 10).name("earlyFadeOut"),
                e.add(K, "fadeOutEase", r).name("earlyOutEase"),
                e.add(K, "finalFadeOutTime", 1, 10).name("endFadeOut"),
                e.add(K, "finalFadeOutEase", r).name("endOutEase"),
                e.add(K, "timeForClimax", 1, 10).name("climaxAfter"),
                e.add(K, "climaxRampTime", 0, 6).name("climaxFadeIn"),
                e.add(K, "climaxRampEase", r).name("climaxInEase"),
                e.add(K, "sustainTime", 1, 10).name("climaxDuration"),
                e.add(K, "debug").onChange(function() {})
            }
            var A = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , R = new o
              , D = A.gui
              , L = !0
              , k = s(b, 100)
              , I = [0, 0]
              , O = null
              , P = new THREE.Vector2
              , z = new THREE.Vector2
              , q = !1
              , F = function() {
                var e = !1;
                return O && (clearTimeout(O),
                O = null,
                e = !0),
                e
            }
              , H = a(e, {
                target: e,
                type: "touch",
                filtered: !0,
                preventSimulated: !1
            }).on("start", function(e, t) {
                m || (F(),
                P.fromArray(t),
                O = setTimeout(function() {
                    e.preventDefault(),
                    q = !0,
                    R.emit("input-start", e, t)
                }, v),
                k(e))
            }).on("move", function(e, t) {
                q && e.preventDefault();
                var n = !1;
                if (!q) {
                    var r = z.fromArray(t).distanceTo(P);
                    r > 10 && (n = F())
                }
                n ? _(!0) : R.emit("input-move", e, t)
            }).on("end", function(e, t) {
                m || (q = !1,
                F(),
                e.preventDefault(),
                R.emit("input-end", e, t),
                w(e))
            });
            g();
            var N = l()
              , U = !1
              , B = {
                value: 0
            }
              , V = {
                value: 0
            }
              , G = {
                value: 0
            }
              , W = !1
              , X = 0
              , Y = 7
              , Q = !1
              , K = {
                debug: Boolean(d.debugAudio),
                climaxRampTime: 4.3,
                initialRampTime: 10,
                timeForClimax: 3.7,
                sustainTime: 9,
                fadeOutTime: 4,
                finalFadeOutTime: 10,
                finalFadeOutEase: "quadOut",
                climaxRampEase: "sineOut",
                fadeOutEase: "quadInOut",
                initialEase: "sineOut"
            }
              , $ = void 0;
            return (K.debug || D) && ($ = M()),
            d.climax && y(),
            i(R, {
                update: T,
                enable: function() {
                    L || (L = !0,
                    H.enable(),
                    g())
                },
                disable: function() {
                    L && (L = !1,
                    H.disable(),
                    j())
                },
                getDirection: function() {
                    return X
                },
                isInputDown: function() {
                    return U
                },
                isClimax: function() {
                    return W
                },
                getClimax: function() {
                    return V.value
                },
                getState: function() {
                    return B.value
                }
            }),
            D && C(),
            R
        }
    }
    , {
        "../util/isMobile": "/projects/prj-thx/lib/util/isMobile.js",
        "../util/query": "/projects/prj-thx/lib/util/query.js",
        "./createAudio": "/projects/prj-thx/lib/components/createAudio.js",
        clamp: "/projects/prj-thx/node_modules/clamp/index.js",
        eases: "/projects/prj-thx/node_modules/eases/index.js",
        events: "/projects/prj-thx/node_modules/events/events.js",
        "lodash.throttle": "/projects/prj-thx/node_modules/lodash.throttle/index.js",
        "mouse-event-offset": "/projects/prj-thx/node_modules/mouse-event-offset/index.js",
        "object-assign": "/projects/prj-thx/node_modules/object-assign/index.js",
        touches: "/projects/prj-thx/node_modules/touches/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/components/createLights.js": [function(e, t) {
        "use strict";
        var n = e("mouse-event-offset")
          , r = e("tweenr")()
          , o = e("lerp");
        t.exports = function(e) {
            function t() {
                var t = [0, 0];
                e.canvas.addEventListener("mousemove", function(o) {
                    n(o, e.canvas, t),
                    r.cancel().to(u, {
                        x: t[0] / e.width * 2 - 1,
                        y: t[1] / e.height * 2 - 1,
                        ease: "expoOut",
                        duration: .5
                    })
                })
            }
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , s = new THREE.Vector3
              , a = new THREE.Object3D
              , u = new THREE.Vector2
              , l = new THREE.Quaternion
              , c = new THREE.Quaternion
              , d = new THREE.Vector3(1,0,0)
              , p = new THREE.Vector3(0,1,0)
              , f = 0
              , h = 0
              , m = 4
              , v = 5
              , x = 6.5
              , g = 1
              , j = 58
              , y = "#8d50ff"
              , b = new THREE.PointLight(y,x,j,g);
            a.add(b);
            var _ = 0
              , w = new THREE.AmbientLight("#000");
            a.add(w);
            var E = {
                ambient: w.color.getStyle(),
                intensityClimax: 10,
                intensityIdle: 1.25,
                falloffClimax: b.distance,
                falloffIdle: 30,
                radius: m,
                mouseScale: v,
                color: b.color.getStyle()
            }
              , T = i.gui;
            if (T) {
                var S = function() {
                    b.color.setStyle(E.color),
                    w.color.setStyle(E.ambient),
                    m = E.radius,
                    v = E.mouseScale
                }
                  , M = T.addFolder("lights");
                M.add(E, "intensityIdle", 0, 20).onChange(S),
                M.add(E, "intensityClimax", 0, 20).onChange(S),
                M.add(E, "falloffIdle", 0, 100).onChange(S),
                M.add(E, "falloffClimax", 0, 100).onChange(S),
                M.add(E, "radius", 0, 10).onChange(S),
                M.add(E, "mouseScale", 0, 90).onChange(S),
                M.addColor(E, "color").onChange(S),
                M.addColor(E, "ambient").onChange(S)
            }
            return t(),
            {
                object3d: a,
                update: function() {
                    var e = Math.PI / 2
                      , t = 0;
                    b.position.x = Math.sin(e) * Math.sin(t),
                    b.position.y = Math.cos(e),
                    b.position.z = Math.sin(e) * Math.cos(t);
                    var n = v * Math.PI / 180
                      , r = u.y * n
                      , i = u.x * n;
                    l.setFromAxisAngle(d, -r),
                    c.setFromAxisAngle(p, -i),
                    l.multiply(c),
                    b.position.applyQuaternion(l),
                    b.position.multiplyScalar(m),
                    b.distance = o(E.falloffIdle, E.falloffClimax, f),
                    b.intensity = o(E.intensityIdle, E.intensityClimax, f),
                    b.lookAt(s)
                },
                onMouseMove: function(t, n) {
                    _ = 2 * (1 - n[0] / e.width) - 1
                },
                setState: function(e, t) {
                    f = e,
                    h = t
                },
                setColor: function(e, t) {
                    b.color.set(e),
                    w.color.set(t)
                },
                getSunColor: function() {
                    return b.color
                },
                getSunPosition: function() {
                    return b.position
                }
            }
        }
    }
    , {
        lerp: "/projects/prj-thx/node_modules/lerp/index.js",
        "mouse-event-offset": "/projects/prj-thx/node_modules/mouse-event-offset/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/components/createShockwave.js": [function(e, t) {
        "use strict";
        var n = e("tweenr")()
          , r = (e("mouse-event-offset"),
        e("touches"))
          , o = e("../util/query");
        t.exports = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            e.canvas)
              , i = new THREE.Vector2
              , s = {
                strength: 0,
                radius: 0
            };
            return o.banner || r(t, {
                filtered: !0,
                preventSimulated: !1
            }).on("start", function(t, r) {
                0 === t.button && (i.x = r[0] / e.width,
                i.y = (e.height - 1 - r[1]) / e.height,
                s.radius = 0,
                s.strength = 1,
                n.cancel().to(s, {
                    duration: 1,
                    ease: "expoOut",
                    radius: 1
                }),
                n.to(s, {
                    duration: 2,
                    ease: "quadOut",
                    strength: 0
                }))
            }),
            {
                update: function() {
                    e.post.shockwave && e.post.shockwave.setShockwave(i, s.radius, s.strength)
                }
            }
        }
    }
    , {
        "../util/query": "/projects/prj-thx/lib/util/query.js",
        "mouse-event-offset": "/projects/prj-thx/node_modules/mouse-event-offset/index.js",
        touches: "/projects/prj-thx/node_modules/touches/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/createApp.js": [function(e, t) {
        "use strict";
        function n() {
            function e() {
                var e = new l(Q,G);
                if (X.addPass(e),
                !r && m.fxaa !== !1 && (Z.fxaa = new s.ShaderPass(a()),
                X.addPass(Z.fxaa),
                E)) {
                    var t = E.addFolder("anti-alias");
                    t.add(Z.fxaa, "enabled")
                }
                Z.bloom = new u(Q,G,{
                    gui: E,
                    gammaOutput: H.gammaFactor
                }),
                X.addPass(Z.bloom),
                Z.shockwave = Z.bloom,
                X.passes[X.passes.length - 1].renderToScreen = !0
            }
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , t = J.width / J.height
                  , n = 16 / 9
                  , r = n / t * 1;
                if (G.scale.set(r, r, r),
                K)
                    $.update(),
                    G.position.fromArray($.position),
                    G.up.fromArray($.up),
                    W.fromArray($.direction).add(G.position),
                    G.lookAt(W);
                else {
                    var o = Math.PI / 2
                      , i = 0;
                    G.position.x = Math.sin(o) * Math.sin(i),
                    G.position.y = Math.cos(o),
                    G.position.z = Math.sin(o) * Math.cos(i);
                    var s = S * r
                      , a = M * Math.PI / 180
                      , u = O.y * a * (1 - T)
                      , l = O.x * a * (1 - T);
                    P.setFromAxisAngle(q, -u),
                    z.setFromAxisAngle(F, -l),
                    P.multiply(z),
                    G.position.applyQuaternion(P),
                    G.position.multiplyScalar(s),
                    W.set(0, 0, 0),
                    G.lookAt(W)
                }
                G.aspect = t,
                G.updateProjectionMatrix(),
                X.passes.forEach(function(t) {
                    "function" == typeof t.tick && t.tick(e)
                })
            }
            function n() {
                X.passes.length >= 2 ? X.render() : H.render(Q, G)
            }
            function g() {
                var e = 20
                  , n = Math.max(2, window.innerWidth)
                  , r = Math.max(2, window.innerHeight)
                  , o = c(m.width, n)
                  , i = c(m.height, r)
                  , s = !1;
                if (s) {
                    var a = 720
                      , u = a / 1.6;
                    (o > a || i > u) && (o -= 2 * e,
                    i -= 2 * e),
                    o > a && (o = Math.min(a, o)),
                    i > u && (i = Math.min(u, i))
                }
                m.alignTop ? J.left = J.top = 0 : (J.left = Math.floor((n - o) / 2),
                J.top = Math.floor((r - i) / 2)),
                N.style.left = J.left + "px",
                N.style.top = J.top + "px",
                N.style.position = "absolute",
                J.width = o,
                J.height = i;
                var l = c(v, D());
                l !== R && (H.setPixelRatio(l),
                R = l),
                H.setSize(o, i),
                X.passes.forEach(function(e) {
                    e.uniforms && e.uniforms.resolution && e.uniforms.resolution.value.set(Math.floor(o * l), Math.floor(i * l))
                }),
                Y.forEach(function(e) {
                    e.setSize(o * l, i * l)
                }),
                t(0),
                w.emit("resize")
            }
            function j() {
                var e = function() {
                    var e = new THREE.WebGLRenderTarget(Math.max(2, window.innerWidth),Math.max(2, window.innerHeight));
                    return e.texture.minFilter = THREE.NearestFilter,
                    e.texture.magFilter = THREE.NearestFilter,
                    e.texture.generateMipmaps = !1,
                    e.texture.format = THREE.RGBFormat,
                    e
                }
                  , t = e()
                  , n = e();
                return new s(H,t,n)
            }
            function y() {
                var e = [0, 0];
                window.addEventListener("mousemove", function(t) {
                    f(t, J.canvas, e),
                    p.cancel().to(O, {
                        x: e[0] / J.width * 2 - 1,
                        y: e[1] / J.height * 2 - 1,
                        ease: "expoOut",
                        duration: .5
                    })
                })
            }
            function b() {
                window.addEventListener("deviceorientation", function(e) {
                    var t = 20
                      , n = 20
                      , r = d(-e.beta / t, -1, 1)
                      , o = d(e.gamma / n, -1, 1);
                    p.cancel().to(O, {
                        x: o,
                        y: r,
                        ease: "expoOut",
                        duration: .5
                    })
                }, !1)
            }
            var _ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , w = new h
              , E = _.gui
              , T = 0
              , S = 3.5
              , M = 2
              , C = Math.min(r ? 1.5 : 2, window.devicePixelRatio)
              , A = Math.min(1.5, C, window.devicePixelRatio)
              , R = 1
              , D = function() {
                var e = window.innerWidth * window.innerHeight
                  , t = 638400;
                return e > t ? A : C
            }
              , L = (c(v, D()),
            m.post !== !1)
              , k = !r && !L
              , I = !1
              , O = new THREE.Vector2
              , P = new THREE.Quaternion
              , z = new THREE.Quaternion
              , q = new THREE.Vector3(1,0,0)
              , F = new THREE.Vector3(0,1,0)
              , H = new THREE.WebGLRenderer(i({
                alpha: !1,
                stencil: !1,
                antialias: k
            }, _));
            H.setPixelRatio(R),
            H.gammaFactor = 2.2,
            (!L || I) && (H.gammaOutput = !0);
            var N = H.domElement
              , U = .1
              , B = 100
              , V = 65
              , G = new THREE.PerspectiveCamera(V,1,U,B)
              , W = new THREE.Vector3
              , X = j()
              , Y = [X.renderTarget1, X.renderTarget2]
              , Q = new THREE.Scene
              , K = !1
              , $ = void 0;
            K && ($ = o(i({
                canvas: N,
                distanceBounds: [.15, 8],
                distance: S
            }, _))),
            window.addEventListener("resize", g),
            window.addEventListener("orientationchange", g);
            var Z = {
                enabled: !1
            };
            L && (Z.enabled = !0,
            e());
            var J = i(w, {
                tick: t,
                camera: G,
                scene: Q,
                renderer: H,
                canvas: N,
                setState: x,
                resize: g,
                render: n,
                post: Z
            });
            J.width = 0,
            J.height = 0,
            J.top = 0,
            J.left = 0,
            g(),
            t();
            var ee = window.innerWidth
              , te = window.innerHeight;
            return setTimeout(function() {
                (ee !== window.innerWidth || te !== window.innerHeight) && g()
            }, 750),
            r ? b() : y(),
            J
        }
        var r = e("./util/isMobile")
          , o = e("orbit-controls")
          , i = e("object-assign")
          , s = e("./post/EffectComposer")
          , a = e("three-shader-fxaa")
          , u = e("./post/BloomTexturePass")
          , l = e("./post/RenderPass")
          , c = e("defined")
          , d = (e("lerp"),
        e("clamp"))
          , p = e("tweenr")()
          , f = e("mouse-event-offset")
          , h = e("events").EventEmitter
          , m = (/(iOS|iPhone|iPod|iPad)/i.test(navigator.userAgent),
        e("./util/query"))
          , v = m.dpr
          , x = function() {};
        t.exports = n
    }
    , {
        "./post/BloomTexturePass": "/projects/prj-thx/lib/post/BloomTexturePass.js",
        "./post/EffectComposer": "/projects/prj-thx/lib/post/EffectComposer.js",
        "./post/RenderPass": "/projects/prj-thx/lib/post/RenderPass.js",
        "./util/isMobile": "/projects/prj-thx/lib/util/isMobile.js",
        "./util/query": "/projects/prj-thx/lib/util/query.js",
        clamp: "/projects/prj-thx/node_modules/clamp/index.js",
        defined: "/projects/prj-thx/node_modules/defined/index.js",
        events: "/projects/prj-thx/node_modules/events/events.js",
        lerp: "/projects/prj-thx/node_modules/lerp/index.js",
        "mouse-event-offset": "/projects/prj-thx/node_modules/mouse-event-offset/index.js",
        "object-assign": "/projects/prj-thx/node_modules/object-assign/index.js",
        "orbit-controls": "/projects/prj-thx/node_modules/orbit-controls/index.js",
        "three-shader-fxaa": "/projects/prj-thx/node_modules/three-shader-fxaa/build/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/createEmbed.js": [function(e, t) {
        "use strict";
        var n = e("tweenr")
          , r = n()
          , o = n()
          , i = n()
          , s = n()
          , a = n()
          , u = e("dom-css")
          , l = e("./createApp")
          , c = e("raf-loop")
          , d = e("./components/createLights")
          , p = e("./components/createInput")
          , f = e("./components/createCrystals")
          , h = e("./components/createShockwave")
          , m = e("./assets")
          , v = e("./util/query")
          , x = e("element-class")
          , g = (e("touches"),
        e("lerp"))
          , j = e("lodash.throttle")
          , y = e("./util/isMobile")
          , b = void 0
          , _ = function() {}
          , w = document.querySelector(".logo")
          , E = document.querySelector(".info")
          , T = document.querySelector(".info-icon")
          , S = [document.querySelector(".info-volume"), document.querySelector(".info-input")]
          , M = (document.querySelector(".bar"),
        document.querySelector(".scroll-icon"))
          , C = e("./util/palettes")()
          , A = window._isSlowLoader;
        window.devicePixelRatio >= 2 && x(T).add("scale-animation");
        var R = v.banner
          , D = v.noUI;
        if (R || D) {
            var L = [".scroll-container", ".info-container", "#logo-container", ".volume"];
            L.forEach(function(e) {
                document.querySelector(e).style.display = "none"
            })
        }
        window._slowLoadTimer && window.clearTimeout(window._slowLoadTimer),
        t.exports = function(e) {
            function t() {
                U.canvas.addEventListener("mousedown", z, !1),
                document.addEventListener("mouseup", q, !1)
            }
            function n() {
                U.canvas.removeEventListener("mousedown", z, !1),
                document.removeEventListener("mouseup", q, !1)
            }
            function L() {
                function n(e) {
                    if (!(F && F.scrollY / U.height > .95)) {
                        P += e,
                        b.update(e);
                        var t = b.getState()
                          , n = b.getClimax();
                        U.setState(t, n),
                        _.setState(t, n);
                        var r = g(l.value, .8, t);
                        r !== s && (s = r,
                        u(w, {
                            opacity: l.opacity,
                            transform: "scale3d(" + r + ", " + r + ", 1.0)"
                        })),
                        m.forEach(function(t) {
                            return "function" == typeof t.update && t.update(e)
                        }),
                        U.tick(e),
                        U.render()
                    }
                }
                function i() {
                    y && (document.querySelector(".input-type").textContent = "tap");
                    var e = {
                        value: parseFloat(E.style.opacity) || 0
                    }
                      , t = {
                        value: 0
                    };
                    S.forEach(function(e, t) {
                        return u(e, "opacity", 0 === t ? 1 : 0)
                    }),
                    u(T, "opacity", 0);
                    var n = function() {
                        u(E, "opacity", e.value)
                    };
                    E.style.display = "",
                    u(E, "opacity", 0),
                    o.cancel().to(e, {
                        value: 1,
                        delay: N,
                        ease: "quadOut",
                        duration: 1
                    }).on("update", n).once("complete", k),
                    a.to(t, {
                        duration: 1,
                        value: 1,
                        delay: N + .5,
                        ease: "quadOut"
                    }).on("update", function() {
                        return u(T, "opacity", t.value)
                    }),
                    b.on("charge-start", function() {
                        o.cancel().to(e, {
                            value: 0,
                            ease: "quadOut",
                            duration: 1
                        }).on("update", n)
                    }),
                    b.on("charge-end", function() {
                        o.cancel().to(e, {
                            value: 1,
                            delay: N,
                            ease: "quadOut",
                            duration: 1
                        }).on("update", n)
                    })
                }
                R || t(),
                U.canvas.style.display = "",
                document.querySelector(".loader").style.display = "none";
                var s = A ? 1 : .95
                  , l = {
                    value: s,
                    opacity: A ? 1 : 0
                }
                  , m = []
                  , x = function(e) {
                    return e && m.push(e),
                    e
                }
                  , b = x(p(e, {
                    gui: O
                }))
                  , _ = x(d(U, {
                    gui: O
                }));
                x(h(U));
                var M = x(f(U, {
                    input: b,
                    gui: O
                }));
                m.forEach(function(e) {
                    return e.object3d && U.scene.add(e.object3d)
                }),
                c(n).start(),
                U.resize(),
                n(0);
                var L = C.getCurrent();
                M.setColor(L.color),
                _.setColor(L.light, L.ambient),
                R || D || (w.style.display = "block",
                i()),
                M.fadeIn(),
                r.to(l, {
                    opacity: 1,
                    duration: 1,
                    ease: "quadOut",
                    value: 1
                });
                var I = function() {
                    C.next(function(e) {
                        _.setColor(e.light, e.ambient),
                        M.setColor(e.color)
                    })
                }
                  , z = j(function() {
                    b.isClimax() || I()
                }, 500);
                b.on("input-move", function(e, t) {
                    M.onMouseMove(e, t),
                    _.onMouseMove(e, t)
                }),
                v.colorOnClick ? b.on("input-start", z) : b.on("color-change", I)
            }
            function k() {
                var e = 0
                  , t = !0
                  , n = S.map(function(e, t) {
                    return {
                        value: 0 === t ? 1 : 0
                    }
                })
                  , r = function() {
                    S.forEach(function(e, t) {
                        return u(e, "opacity", n[t].value)
                    })
                }
                  , o = function s() {
                    var o = n[e]
                      , a = (S[e],
                    t ? 2 : 4)
                      , u = .5
                      , l = 1;
                    i.cancel().to(o, {
                        value: 0,
                        delay: a,
                        duration: u,
                        ease: "quadOut"
                    }).on("update", r),
                    e++,
                    e >= S.length && (e = 0);
                    {
                        var c = n[e];
                        S[e]
                    }
                    i.to(c, {
                        value: 1,
                        duration: l,
                        delay: u + a,
                        ease: "quadIn"
                    }).on("update", r).on("complete", s),
                    t = !1
                };
                o()
            }
            function I() {
                if (F) {
                    var e = function n() {
                        s.cancel(),
                        F.removeEventListener("wheel", n, !1),
                        window.removeEventListener("wheel", n, !1),
                        F.removeEventListener("touchstart", n, !1),
                        window.removeEventListener("touchstart", n, !1)
                    }
                      , t = function() {
                        F.addEventListener("wheel", e, !1),
                        window.addEventListener("wheel", e, !1);
                        var t = {
                            value: F.scrollY
                        };
                        s.to(t, {
                            value: U.height,
                            duration: 1,
                            ease: "quadInOut"
                        }).on("update", function() {
                            return F.scrollTo(0, t.value)
                        }).on("start", function() {
                            F.addEventListener("touchstart", e, !1),
                            window.addEventListener("touchstart", e, !1)
                        })
                    };
                    M.addEventListener("touchstart", function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        t()
                    }, !1),
                    M.addEventListener("mousedown", function(e) {
                        return e.preventDefault()
                    }),
                    M.addEventListener("click", function(e) {
                        e.stopPropagation(),
                        t()
                    }, !1)
                }
            }
            var O = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
            void 0);
            "undefined" != typeof b && (O = new b.GUI);
            var P = 0
              , z = function() {
                return x(U.canvas).add("grabbing")
            }
              , q = function() {
                return x(U.canvas).remove("grabbing")
            };
            O && !v.gui && (O = null,
            document.querySelector(".dg.ac").style.display = "none");
            var F = window.parent === window ? null : window.parent
              , H = "black"
              , N = 2
              , U = l({
                gui: O,
                canvas: e
            });
            U.renderer.sortObjects = !1,
            document.body.style.background = H,
            U.renderer.setClearColor(H),
            R || x(e).add("grab"),
            m.setRenderer(U.renderer),
            m.load(function(e) {
                e && console.error(e),
                L()
            }),
            window.enable = t,
            window.disable = n,
            R || D || I()
        }
    }
    , {
        "./assets": "/projects/prj-thx/lib/assets/index.js",
        "./components/createCrystals": "/projects/prj-thx/lib/components/createCrystals.js",
        "./components/createInput": "/projects/prj-thx/lib/components/createInput.js",
        "./components/createLights": "/projects/prj-thx/lib/components/createLights.js",
        "./components/createShockwave": "/projects/prj-thx/lib/components/createShockwave.js",
        "./createApp": "/projects/prj-thx/lib/createApp.js",
        "./util/isMobile": "/projects/prj-thx/lib/util/isMobile.js",
        "./util/palettes": "/projects/prj-thx/lib/util/palettes.js",
        "./util/query": "/projects/prj-thx/lib/util/query.js",
        "dom-css": "/projects/prj-thx/node_modules/dom-css/index.js",
        "element-class": "/projects/prj-thx/node_modules/element-class/index.js",
        lerp: "/projects/prj-thx/node_modules/lerp/index.js",
        "lodash.throttle": "/projects/prj-thx/node_modules/lodash.throttle/index.js",
        "raf-loop": "/projects/prj-thx/node_modules/raf-loop/index.js",
        touches: "/projects/prj-thx/node_modules/touches/index.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/post/BloomTexturePass.js": [function(e, t) {
        "use strict";
        function n(e, t) {
            var n = this
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            this.scene = e,
            this.camera = t,
            this.debugCopyShader = new THREE.ShaderMaterial(i),
            this._lastWidth = null,
            this._lastHeight = null,
            this._blurTarget = null,
            this._thresholdTarget = null,
            this.enabled = !0,
            this.needsSwap = !0,
            this.oldColor = new THREE.Color,
            this.oldAlpha = 1,
            this.clearColor = new THREE.Color("#fff"),
            this.clearAlpha = 0,
            this.thresholdBackground = new THREE.Color(o.background),
            this.thresholdShader = new THREE.RawShaderMaterial({
                vertexShader: r(["#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * position;\n}\n"]),
                fragmentShader: r(["precision highp float;\n#define GLSLIFY 1\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec3 background;\nuniform float lumaThreshold;\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\nvoid main () {\n  gl_FragColor = texture2D(tDiffuse, vUv);\n  float L = luma(gl_FragColor.rgb);\n  gl_FragColor.rgb *= smoothstep(0.0, lumaThreshold, L);\n  // gl_FragColor.rgb *= step(lumaThreshold, L);\n  // gl_FragColor.rgb *= step(0.001, L);\n  // float t = smoothstep(0.15, 0.5, L);\n  // gl_FragColor.rgb = mix(background, gl_FragColor.rgb, t);\n}\n"]),
                uniforms: {
                    lumaThreshold: {
                        type: "f",
                        value: c(l.lumaThreshold, .35)
                    },
                    background: {
                        type: "c",
                        value: this.thresholdBackground
                    },
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    resolution: {
                        type: "v2",
                        value: new THREE.Vector2(1,1)
                    }
                }
            }),
            this.thresholdShader.name = "bloom-threhsold-material",
            this.postShader = new THREE.RawShaderMaterial({
                vertexShader: r(["#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * position;\n}\n"]),
                fragmentShader: r(["precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform float radius;\n\nvec3 tex(vec2 uv);\n\n#define ITERATIONS 10\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\n#ifndef TAU\n  #define TAU 6.28318530718\n#endif\n\n//Use last part of hash function to generate new random radius and angle\nvec2 mult(inout vec2 r) {\n  r = fract(r * vec2(12.9898,78.233));\n  return sqrt(r.x + .001) * vec2(sin(r.y * TAU), cos(r.y * TAU));\n}\n\nvec3 blur(vec2 uv, float radius, float aspect, float offset) {\n  vec2 circle = vec2(radius);\n  circle.x *= aspect;\n  vec2 rnd = vec2(random(vec2(uv + offset)));\n\n  vec3 acc = vec3(0.0);\n  for (int i = 0; i < ITERATIONS; i++) {\n    acc += tex(uv + circle * mult(rnd)).xyz;\n  }\n  return acc / float(ITERATIONS);\n}\n\nvec3 blur(vec2 uv, float radius, float aspect) {\n  return blur(uv, radius, aspect, 0.0);\n}\n\nvec3 blur(vec2 uv, float radius) {\n  return blur(uv, radius, 1.0);\n}\n\nvec3 tex(vec2 uv) {\n  vec3 rgb = texture2D(tDiffuse, uv).rgb;\n  return rgb;\n  // return threshold > 0.2 ? rgb : vec3(0.0);\n  // return step(1.0 - t, rgb);\n  // return smoothstep(vec3(0.0), vec3(, threshold);\n}\n\nvoid main () {\n  float aspect = resolution.x / resolution.y;\n  \n  //jitter the noise but not every frame\n  // float tick = 0.0;//floor(fract(iGlobalTime)*20.0);\n  // float jitter = mod(tick * 382.0231, 21.321);\n  \n  // vec3 blurred = vec3(0.0);\n  // blurred += 0.6 * blur(vUv, 0.3, 1.0 / aspect, jitter);\n  \n  vec3 blurred = blur(vUv, radius, 1.0 / aspect, radius);\n  gl_FragColor.rgb = blurred;\n  gl_FragColor.a = 1.0;\n  \n  // gl_FragColor = texture2D(tDiffuse, vUv);\n}"]),
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    radius: {
                        type: "f",
                        value: 1
                    },
                    resolution: {
                        type: "v2",
                        value: new THREE.Vector2(1,1)
                    }
                }
            }),
            this.postShader.name = "bloom-blur-material",
            this.gaussianShader = new THREE.RawShaderMaterial({
                vertexShader: r(["#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * position;\n}\n"]),
                fragmentShader: r(["precision highp float;\n#define GLSLIFY 1\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 resolution;\nuniform vec2 direction;\nuniform float radius;\n\nvec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n  vec4 color = vec4(0.0);\n  vec2 off1 = vec2(1.3333333333333333) * direction;\n  color += texture2D(image, uv) * 0.29411764705882354;\n  color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;\n  color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;\n  return color; \n}\n\nvoid main () {\n  gl_FragColor = blur5(tDiffuse, vUv, resolution.xy, direction);\n  gl_FragColor.a = 1.0;\n}"]),
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    direction: {
                        type: "v2",
                        value: new THREE.Vector2
                    },
                    resolution: {
                        type: "v2",
                        value: new THREE.Vector2(1,1)
                    }
                }
            }),
            this.gaussianShader.name = "bloom-gaussian-blur-material";
            var a = {};
            o.gammaOutput && (a.GAMMA_OUTPUT = o.gammaOutput.toFixed(1)),
            this.combineShader = new THREE.RawShaderMaterial({
                vertexShader: r(["#define GLSLIFY 1\nattribute vec4 position;\nattribute vec2 uv;\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * position;\n}\n"]),
                fragmentShader: s(r(["precision mediump float;\n#define GLSLIFY 1\n\n#define SHOCKWAVE\n// #define LENS_DISTORT\n#define FILM_GRAIN\n#define VIGNETTE\n// #define ALLOW_GRAYSCALE\n\nvarying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform sampler2D tBloomDiffuse;\nuniform vec2 resolution;\n\n#ifdef LENS_DISTORT\nuniform float lensDistort;\nuniform float lensDistortK;\nuniform float lensDistortCubicK;\nuniform float lensDistortScale;\n#endif\n\n#ifdef SHOCKWAVE\n#define shockwaveSize 0.35\n#define shockwaveX 10.0\n#define shockwaveY 0.2\n#define shockwaveZ 0.1\nuniform vec2 shockwavePosition;\nuniform float shockwaveStrength;\nuniform float shockwaveRadius;\n\nvec2 applyShockwave (vec2 uv) {\n  vec2 texCoord = uv;\n  vec2 delta = texCoord - shockwavePosition;\n  delta.x *= resolution.x / resolution.y;\n  float dist = length(delta);\n  float radius = shockwaveRadius * shockwaveSize;\n  if ((dist <= (radius + shockwaveZ)) && (dist >= (radius - shockwaveZ)) ) \n  {\n    float diff = (dist - radius); \n    float powDiff = 1.0 - pow(abs(diff * shockwaveX), shockwaveY); \n    float diffTime = diff * powDiff; \n    vec2 diffUV = normalize(texCoord - shockwavePosition); \n    texCoord += (diffUV * diffTime) * shockwaveStrength;\n  }\n  return texCoord;\n}\n#endif\n\n#ifdef ALLOW_GRAYSCALE\nuniform bool grayscale;\n#endif\n\n#ifdef FILM_GRAIN\nuniform float grainStrength;\n#endif\n\n#ifdef VIGNETTE\nuniform float vignetteMin;\nuniform float vignetteMax;\nuniform float vignetteStrength;\n#endif\n\nuniform float bloomOpacity;\nuniform sampler2D lensDustTexture;\nuniform vec2 lensDustResolution;\n\nhighp float random(vec2 co)\n{\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt= dot(co.xy ,vec2(a,b));\n    highp float sn= mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nfloat luma(vec3 color) {\n  return dot(color, vec3(0.299, 0.587, 0.114));\n}\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\nvec2 backgroundUV (vec2 uv_0, vec2 resolution_0, vec2 texResolution) {\n  float tAspect = texResolution.x / texResolution.y;\n  float pAspect = resolution_0.x / resolution_0.y;\n  float pwidth = resolution_0.x;\n  float pheight = resolution_0.y;\n  \n  float width = 0.0;\n  float height = 0.0;  \n  if (tAspect > pAspect) {\n    height = pheight;\n    width = height * tAspect; \n  } else {\n    width = pwidth;\n    height = width / tAspect;\n  }\n  float x = (pwidth - width) / 2.0;\n  float y = (pheight - height) / 2.0;\n  vec2 nUv = uv_0;\n  nUv -= vec2(x, y) / resolution_0;\n  nUv /= vec2(width, height) / resolution_0;\n  return nUv;\n}\n\nvec3 applyLensDistort (sampler2D map, vec2 uv, float distort, float k, float kCube, float scale) {\n  vec3 eta = vec3(1.0 + distort * 0.9, 1.0 + distort * 0.6, 1.0 + distort * 0.3);\n  \n  //texture coordinates\n  vec2 delta = uv - 0.5;\n  float r2 = delta.x * delta.x + delta.y * delta.y;\n  float f = 0.0;\n\n  //only compute the cubic distortion if necessary\n  if( kCube == 0.0)\n  {\n      f = 1.0 + r2 * k;\n  }else {\n      f = 1.0 + r2 * (k + kCube * sqrt(r2));\n  }\n\n  // get the right pixel for the current position\n  vec2 rCoords = (f * eta.r) * scale * (delta) + 0.5;\n  vec2 gCoords = (f * eta.g) * scale * (delta) + 0.5;\n  vec2 bCoords = (f * eta.b) * scale * (delta) + 0.5;\n\n  vec3 inputDistort = vec3(0.0); \n  inputDistort.r = texture2D(map, rCoords).r;\n  inputDistort.g = texture2D(map, gCoords).g;\n  inputDistort.b = texture2D(map, bCoords).b;\n  return inputDistort;\n}\n\nvoid main () {\n  #ifdef SHOCKWAVE\n  vec2 texCoord = applyShockwave(vUv);\n  #else\n  vec2 texCoord = vUv;\n  #endif\n\n  #ifdef LENS_DISTORT\n    vec3 distortRGB = applyLensDistort(tDiffuse, texCoord, lensDistort, lensDistortK, lensDistortCubicK, lensDistortScale);\n    vec4 background = vec4(distortRGB, 1.0);\n  #else\n    vec4 background = texture2D(tDiffuse, texCoord);\n  #endif\n\n  vec4 foreground = texture2D(tBloomDiffuse, texCoord);\n  gl_FragColor = background + foreground * bloomOpacity;\n\n  #ifdef VIGNETTE\n  vec2 cUv = vUv - 0.5;\n  float vignetteBlur = 1.0;\n  float center = length(cUv);\n  float vignette = smoothstep(vignetteMin, vignetteMax, center);\n  vec3 vignetteColor = mix(vec3(0.0), foreground.rgb, vignetteBlur);\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, vignetteColor, vignette * vignetteStrength);\n  #endif\n\n  #ifdef FILM_GRAIN\n  float deband = random(gl_FragCoord.xy) / 255.0;\n  gl_FragColor.rgb += deband * grainStrength;\n  #endif\n\n  // float L = luma(gl_FragColor.rgb);\n  // L = smoothstep(0.0, 0.1, L);\n  // vec2 bgUV = backgroundUV(vUv, resolution, lensDustResolution);\n  // vec4 lensColor = texture2D(lensDustTexture, bgUV);\n  // gl_FragColor.rgb += lensColor.rgb * L * 0.5;\n\n  #ifdef ALLOW_GRAYSCALE\n  if (grayscale) {\n    gl_FragColor.rgb = vec3(luma(gl_FragColor.rgb));\n  }\n  #endif\n\n  #ifdef GAMMA_OUTPUT\n    gl_FragColor.rgb = pow(gl_FragColor.rgb, vec3(1.0 / GAMMA_OUTPUT));\n  #endif\n}"]), a),
                uniforms: {
                    vignetteMin: {
                        type: "f",
                        value: .43
                    },
                    vignetteMax: {
                        type: "f",
                        value: .73
                    },
                    lensDistort: {
                        type: "f",
                        value: .02
                    },
                    lensDistortK: {
                        type: "f",
                        value: .5
                    },
                    lensDistortCubicK: {
                        type: "f",
                        value: 1
                    },
                    lensDistortScale: {
                        type: "f",
                        value: .94
                    },
                    vignetteStrength: {
                        type: "f",
                        value: 1
                    },
                    bloomOpacity: {
                        type: "f",
                        value: .7
                    },
                    resolution: {
                        type: "v2",
                        value: new THREE.Vector2
                    },
                    tDiffuse: {
                        type: "t",
                        value: null
                    },
                    grayscale: {
                        type: "i",
                        value: 0
                    },
                    grainStrength: {
                        type: "f",
                        value: window.devicePixelRatio >= 2 ? 1.5 : 0
                    },
                    tBloomDiffuse: {
                        type: "t",
                        value: null
                    },
                    shockwavePosition: {
                        type: "v2",
                        value: new THREE.Vector2
                    },
                    shockwaveStrength: {
                        type: "f",
                        value: 0
                    },
                    shockwaveRadius: {
                        type: "f",
                        value: 0
                    }
                }
            }),
            this.combineShader.name = "bloom-combine-material",
            this.postCamera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
            this.postScene = new THREE.Scene,
            this.postQuad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2)),
            this.postQuad.name = "godray-post-quad",
            this.postScene.add(this.postQuad),
            this.renderToScreen = !1,
            this.blurRadius = 1,
            this.isGaussian = !0;
            var u = o.gui;
            u && !function() {
                var e = u.addFolder("post-fx")
                  , t = {
                    radius: n.blurRadius,
                    isGaussian: n.isGaussian,
                    grayscale: 1 === n.combineShader.uniforms.grayscale.value,
                    lensDistort: n.combineShader.uniforms.lensDistort.value,
                    lensDistortK: n.combineShader.uniforms.lensDistortK.value,
                    lensDistortCubicK: n.combineShader.uniforms.lensDistortCubicK.value,
                    lensDistortScale: n.combineShader.uniforms.lensDistortScale.value,
                    grain: n.combineShader.uniforms.grainStrength.value,
                    opacity: n.combineShader.uniforms.bloomOpacity.value,
                    threshold: n.thresholdShader.uniforms.lumaThreshold.value,
                    vignetteMin: n.combineShader.uniforms.vignetteMin.value,
                    vignetteMax: n.combineShader.uniforms.vignetteMax.value,
                    vignetteStrength: n.combineShader.uniforms.vignetteStrength.value
                }
                  , r = function() {
                    n.blurRadius = t.radius,
                    n.isGaussian = t.isGaussian,
                    n.combineShader.uniforms.grayscale.value = t.grayscale ? 1 : 0,
                    n.combineShader.uniforms.grainStrength.value = t.grain,
                    n.combineShader.uniforms.bloomOpacity.value = t.opacity,
                    n.combineShader.uniforms.vignetteMin.value = t.vignetteMin,
                    n.combineShader.uniforms.vignetteMax.value = t.vignetteMax,
                    n.combineShader.uniforms.vignetteStrength.value = t.vignetteStrength,
                    n.combineShader.uniforms.lensDistort.value = t.lensDistort,
                    n.combineShader.uniforms.lensDistortK.value = t.lensDistortK,
                    n.combineShader.uniforms.lensDistortCubicK.value = t.lensDistortCubicK,
                    n.combineShader.uniforms.lensDistortScale.value = t.lensDistortScale,
                    n.thresholdShader.uniforms.lumaThreshold.value = t.threshold
                };
                e.add(t, "isGaussian").onChange(r),
                e.add(t, "threshold", 0, 1).onChange(r),
                e.add(t, "radius", 0, 2).onChange(r),
                e.add(t, "opacity", 0, 2).onChange(r),
                e.add(t, "grain", 0, 10).onChange(r),
                e.add(t, "vignetteMin", 0, 1).onChange(r),
                e.add(t, "vignetteMax", 0, 1).onChange(r),
                e.add(t, "vignetteStrength", 0, 1).onChange(r)
            }()
        }
        var r = e("glslify")
          , o = (e("path"),
        e("clamp"))
          , i = e("three-copyshader")
          , s = e("glsl-inject-defines")
          , a = 3
          , u = 2048
          , l = e("../util/query")
          , c = e("defined")
          , d = [1, 1];
        t.exports = n,
        n.prototype = {
            tick: function() {},
            setShockwave: function(e, t, n) {
                this.combineShader.uniforms.shockwavePosition.value.copy(e),
                this.combineShader.uniforms.shockwaveRadius.value = t,
                this.combineShader.uniforms.shockwaveStrength.value = n
            },
            _updateTargets: function(e) {
                var t = e.width
                  , n = e.height
                  , r = o(Math.floor(t / a), 2, u)
                  , i = o(Math.floor(n / a), 2, u);
                this._thresholdTarget && this._blurTarget ? (this._thresholdTarget.width !== t || this._thresholdTarget.height !== n) && (this._thresholdTarget.setSize(r, i),
                this._blurTarget.setSize(r, i),
                this._blurTarget2.setSize(r, i)) : (this._blurTarget = new THREE.WebGLRenderTarget(r,i),
                this._blurTarget.texture.minFilter = THREE.LinearFilter,
                this._blurTarget.texture.magFilter = THREE.LinearFilter,
                this._blurTarget.texture.generateMipmaps = !1,
                this._blurTarget.depthBuffer = !0,
                this._blurTarget.stencilBuffer = !1,
                this._blurTarget2 = this._blurTarget.clone(),
                this._thresholdTarget = this._blurTarget.clone())
            },
            render: function(e, t, n) {
                this._updateTargets(n);
                var r = this.renderToScreen ? void 0 : t;
                this.oldColor.copy(e.getClearColor()),
                this.oldAlpha = e.getClearAlpha();
                var o = e.autoClear;
                e.setClearColor(this.clearColor, this.clearAlpha),
                e.autoClear = !1,
                e.clearTarget(this._thresholdTarget, !0, !0, !1),
                this.postScene.overrideMaterial = this.thresholdShader,
                this.thresholdShader.uniforms.resolution.value.set(this._thresholdTarget.width, this._thresholdTarget.height),
                this.thresholdShader.uniforms.tDiffuse.value = n.texture,
                e.render(this.postScene, this.postCamera, this._thresholdTarget, !0);
                var i = void 0;
                if (this.isGaussian) {
                    var s = this._blurTarget
                      , a = this._blurTarget2
                      , u = 2 * d.length;
                    this.postScene.overrideMaterial = this.gaussianShader,
                    this.gaussianShader.uniforms.resolution.value.set(this._thresholdTarget.width, this._thresholdTarget.height);
                    for (var l = 0; u > l; l++) {
                        var c = d[Math.floor(l / 2)]
                          , p = this.blurRadius * c;
                        0 === l && (s = this._thresholdTarget),
                        this.gaussianShader.uniforms.tDiffuse.value = s.texture;
                        var f = this.gaussianShader.uniforms.direction.value;
                        l % 2 === 0 ? f.set(p, 0) : f.set(0, p),
                        e.render(this.postScene, this.postCamera, a, !0);
                        var h = s;
                        s = a,
                        a = h
                    }
                    i = a
                } else {
                    var m = .5 * this.blurRadius;
                    this.postScene.overrideMaterial = this.postShader,
                    this.postShader.uniforms.resolution.value.set(this._thresholdTarget.width, this._thresholdTarget.height),
                    this.postShader.uniforms.tDiffuse.value = this._thresholdTarget.texture,
                    this.postShader.uniforms.radius.value = .15 * m,
                    e.render(this.postScene, this.postCamera, this._blurTarget, !0),
                    this.postShader.uniforms.tDiffuse.value = this._blurTarget.texture,
                    this.postShader.uniforms.radius.value = .5 * m,
                    e.render(this.postScene, this.postCamera, this._thresholdTarget, !0),
                    i = this._thresholdTarget
                }
                this.postScene.overrideMaterial = this.combineShader,
                this.combineShader.uniforms.tDiffuse.value = n.texture,
                this.combineShader.uniforms.tBloomDiffuse.value = i.texture;
                var v = e.getPixelRatio();
                this.combineShader.uniforms.resolution.value.set(r ? r.width : window.innerWidth * v, r ? r.height : window.innerHeight * v),
                e.render(this.postScene, this.postCamera, r, !0),
                e.setClearColor(this.oldColor, this.oldAlpha),
                e.autoClear = o
            }
        }
    }
    , {
        "../util/query": "/projects/prj-thx/lib/util/query.js",
        clamp: "/projects/prj-thx/node_modules/clamp/index.js",
        defined: "/projects/prj-thx/node_modules/defined/index.js",
        "glsl-inject-defines": "/projects/prj-thx/node_modules/glsl-inject-defines/string.js",
        glslify: "/projects/prj-thx/node_modules/glslify/browser.js",
        path: "/projects/prj-thx/node_modules/path-browserify/index.js",
        "three-copyshader": "/projects/prj-thx/node_modules/three-copyshader/index.js"
    }],
    "/projects/prj-thx/lib/post/EffectComposer.js": [function(e, t) {
        "use strict";
        function n(e, t, n, i) {
            if (this.renderer = e,
            void 0 === t)
                throw new Error("must specify targets");
            this.renderTarget1 = t,
            this.renderTarget2 = n,
            this.initialRenderTarget = i,
            this.writeBuffer = this.renderTarget1,
            this.readBuffer = this.renderTarget2,
            this.passes = [],
            this.copyPass = new o(r)
        }
        t.exports = n;
        var r = n.CopyShader = e("three-copyshader")
          , o = (n.RenderPass = e("three-effectcomposer/lib/renderpass")(THREE),
        n.ShaderPass = e("./ShaderPass")(THREE, n))
          , i = n.MaskPass = e("three-effectcomposer/lib/maskpass")(THREE)
          , s = n.ClearMaskPass = e("three-effectcomposer/lib/clearmaskpass")(THREE);
        n.prototype = {
            swapBuffers: function() {
                var e = this.readBuffer;
                this.readBuffer = this.writeBuffer,
                this.writeBuffer = e
            },
            addPass: function(e) {
                this.passes.push(e)
            },
            clearPasses: function() {
                this.passes.length = 0
            },
            insertPass: function(e, t) {
                this.passes.splice(t, 0, e),
                this.initialClearColor = new THREE.Color(1,0,0)
            },
            render: function(e) {
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2;
                var t, n, r, o = !1, a = this.passes.length;
                for (n = 0,
                r = 0; a > n; n++)
                    if (t = this.passes[n],
                    t.enabled) {
                        var u, l, c = Boolean(this.initialRenderTarget);
                        c && 1 >= r ? (l = this.writeBuffer,
                        u = this.initialRenderTarget) : (l = this.writeBuffer,
                        u = this.readBuffer);
                        var d;
                        this.depthTexture ? d = this.depthTexture : this.initialRenderTarget && (d = 0 === r ? void 0 : this.initialRenderTarget.depthTexture);
                        var p = this.initialRenderTarget ? this.initialRenderTarget.attachments : void 0;
                        if (t.render(this.renderer, l, u, e, o, d, p),
                        t.needsSwap) {
                            if (o) {
                                var f = this.renderer.context;
                                f.stencilFunc(f.NOTEQUAL, 1, 4294967295),
                                this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                                f.stencilFunc(f.EQUAL, 1, 4294967295)
                            }
                            this.swapBuffers()
                        }
                        t instanceof i ? o = !0 : t instanceof s && (o = !1),
                        r++
                    }
            },
            reset: function(e) {
                void 0 === e && (e = this.renderTarget1.clone(),
                e.width = window.innerWidth,
                e.height = window.innerHeight),
                this.renderTarget1 = e,
                this.renderTarget2 = e.clone(),
                this.writeBuffer = this.renderTarget1,
                this.readBuffer = this.renderTarget2
            },
            setSize: function(e, t) {
                var n = this.renderTarget1.clone();
                n.width = e,
                n.height = t,
                this.reset(n)
            }
        },
        n.camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1),
        n.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),
        n.scene = new THREE.Scene,
        n.scene.add(n.quad)
    }
    , {
        "./ShaderPass": "/projects/prj-thx/lib/post/ShaderPass.js",
        "three-copyshader": "/projects/prj-thx/node_modules/three-copyshader/index.js",
        "three-effectcomposer/lib/clearmaskpass": "/projects/prj-thx/node_modules/three-effectcomposer/lib/clearmaskpass.js",
        "three-effectcomposer/lib/maskpass": "/projects/prj-thx/node_modules/three-effectcomposer/lib/maskpass.js",
        "three-effectcomposer/lib/renderpass": "/projects/prj-thx/node_modules/three-effectcomposer/lib/renderpass.js"
    }],
    "/projects/prj-thx/lib/post/Pass.js": [function(e, t) {
        "use strict";
        function n() {
            this.enabled = !0,
            this.needsSwap = !0,
            this.clear = !1,
            this.renderToScreen = !1
        }
        t.exports = n,
        Object.assign(n.prototype, {
            setSize: function() {},
            render: function() {
                console.error("Pass: .render() must be implemented in derived pass.")
            }
        })
    }
    , {}],
    "/projects/prj-thx/lib/post/RenderPass.js": [function(e, t) {
        "use strict";
        function n(e, t, n, o, i) {
            r.call(this),
            this.scene = e,
            this.camera = t,
            this.overrideMaterial = n,
            this.clearColor = o,
            this.clearAlpha = void 0 !== i ? i : 0,
            this.gammaInput = void 0,
            this.gammaOutput = void 0,
            this.clear = !0,
            this.needsSwap = !1
        }
        var r = e("./Pass");
        t.exports = n,
        n.prototype = Object.assign(Object.create(r.prototype), {
            constructor: n,
            render: function(e, t, n) {
                var r = e.autoClear;
                e.autoClear = !1;
                var o = e.gammaInput
                  , i = e.gammaOutput;
                "boolean" == typeof this.gammaInput && (e.gammaInput = this.gammaInput),
                "boolean" == typeof this.gammaOutput && (e.gammaOutput = this.gammaOutput),
                this.scene.overrideMaterial = this.overrideMaterial;
                var s, a;
                this.clearColor && (s = e.getClearColor().getHex(),
                a = e.getClearAlpha(),
                e.setClearColor(this.clearColor, this.clearAlpha)),
                e.render(this.scene, this.camera, this.renderToScreen ? null : n, this.clear),
                this.clearColor && e.setClearColor(s, a),
                this.scene.overrideMaterial = null,
                e.autoClear = r,
                e.gammaInput = o,
                e.gammaOutput = i
            }
        })
    }
    , {
        "./Pass": "/projects/prj-thx/lib/post/Pass.js"
    }],
    "/projects/prj-thx/lib/post/ShaderPass.js": [function(e, t) {
        "use strict";
        t.exports = function(e, t) {
            function n(t, r) {
                return this instanceof n ? (this.textureID = void 0 !== r ? r : "tDiffuse",
                this.uniforms = e.UniformsUtils.clone(t.uniforms),
                this.material = new e.ShaderMaterial({
                    uniforms: this.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                }),
                this.renderToScreen = !1,
                this.enabled = !0,
                this.needsSwap = !0,
                void (this.clear = !1)) : new n(t,r)
            }
            return n.prototype = {
                render: function(e, n, r) {
                    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = r.texture),
                    t.quad.material = this.material,
                    this.renderToScreen ? e.render(t.scene, t.camera) : e.render(t.scene, t.camera, n, this.clear)
                }
            },
            n
        }
    }
    , {}],
    "/projects/prj-thx/lib/shaders/CrystalMaterial.js": [function(e, t) {
        "use strict";
        function n(e) {
            e = i({}, e),
            THREE.MeshPhongMaterial.call(this),
            this.uniforms = i({}, THREE.ShaderLib.phong.uniforms, {
                time: {
                    type: "f",
                    value: 0
                },
                rippleMin: {
                    type: "f",
                    value: 7
                },
                rippleMax: {
                    type: "f",
                    value: 63
                },
                fadeIn: {
                    type: "f",
                    value: 1
                },
                rippleTime: {
                    type: "f",
                    value: 0
                },
                inputTime: {
                    type: "f",
                    value: 0
                },
                spin: {
                    type: "f",
                    value: .5
                },
                vertexWeight: {
                    type: "f",
                    value: .1
                },
                vertexNoise: {
                    type: "f",
                    value: .1
                },
                audioState: {
                    type: "f",
                    value: 1
                },
                sparkles: {
                    type: "f",
                    value: .1
                },
                color1: {
                    type: "c",
                    value: new THREE.Color
                },
                audioClimax: {
                    type: "f",
                    value: 1
                },
                index: {
                    type: "f",
                    value: 0
                },
                mouseOffsetStrengths: {
                    type: "v3v",
                    value: s(l).map(function() {
                        return new THREE.Vector3
                    })
                },
                mousePosition: {
                    type: "v2",
                    value: new THREE.Vector2
                },
                resolution: {
                    type: "v2",
                    value: new THREE.Vector2
                }
            }),
            delete e.lengthSegments,
            delete e.radialSegments,
            r(this),
            this.setValues(e)
        }
        function r(e) {
            e.vertexShader = p,
            e.fragmentShader = d,
            e.type = "CrystalMaterial"
        }
        var o = e("glslify")
          , i = (e("path"),
        e("object-assign"))
          , s = (e("defined"),
        e("new-array"))
          , a = e("glsl-inject-defines")
          , u = e("../util/isMobile")
          , l = 7
          , c = {};
        u || (c.HIGH_QUALITY = !0),
        c.MOUSE_CAPACITY = String(l);
        var d = o(["#define GLSLIFY 1\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nuniform float time;\nuniform float fadeIn;\nuniform vec3 color1;\nuniform float rippleTime;\nuniform float audioState;\nuniform float audioClimax;\n// uniform vec3 palette[5];\nvarying float vRipple;\nvarying float vSparkle;\nvarying vec2 vUv;\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n\n  #include <clipping_planes_fragment>\n\n  float rippleNorm = vRipple * 0.5 + 0.5;\n  float alpha = opacity * mix(1.0, 0.05, rippleNorm);\n\n  vec3 inColor = color1;\n  float dist = length(vUv - 0.5);\n\n  float blackHole = mix(1.0, smoothstep(0.1, 0.2, dist), 1.0);\n  float edges = smoothstep(0.5, 0.4, dist);\n  alpha *= blackHole * fadeIn * edges;\n\n  // inColor = mix(inColor, inColor * 2.0, 1.0 - rippleNorm);\n  // alpha = vSparkle;\n  vec4 diffuseColor = vec4(vec3(inColor), alpha);\n  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n  vec3 totalEmissiveRadiance = emissive;\n\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <specularmap_fragment>\n  #include <normal_flip>\n  #include <normal_fragment>\n  #include <emissivemap_fragment>\n\n  // accumulation\n  #include <lights_phong_fragment>\n  material.specularStrength = mix(1.0, 5.0, vSparkle);\n  #include <lights_template>\n\n  // modulation\n  #include <aomap_fragment>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  #include <envmap_fragment>\n\n  gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n  // gl_FragColor = vec4(vec3(vTriangleColor), 1.0);\n}\n"])
          , p = a(o(["#define GLSLIFY 1\n#define PHONG\n\n#ifdef HIGH_QUALITY\n  #define SPARKLE\n  #define FADE_IN\n  #define SPIN\n  #define RIPPLE_MOUSE\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n  varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289_0(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289_0(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute_0(vec4 x) {\n     return mod289_0(((x*34.0)+1.0)*x);\n}\n\nfloat permute_0(float x) {\n     return mod289_0(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_0(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt_0(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise_0(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289_0(i);\n  float j0 = permute_0( permute_0( permute_0( permute_0(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute_0( permute_0( permute_0( permute_0 (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0_0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt_0(vec4(dot(p0_0,p0_0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt_0(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0_0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1(vec4 x) {\n     return mod289_1(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_1(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_0 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_0;\n  vec3 i1 = min( g_0.xyz, l.zxy );\n  vec3 i2 = max( g_0.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_1(i);\n  vec4 p = permute_1( permute_1( permute_1(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_1 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_1(vec4(dot(p0_1,p0_1), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_1 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_1,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_2(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289_2(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute_2(vec3 x) {\n  return mod289_2(((x*34.0)+1.0)*x);\n}\n\nfloat snoise_2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289_2(i); // Avoid truncation effects in permutation\n  vec3 p = permute_2( permute_2( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\nfloat quadraticInOut(float t) {\n  float p = 2.0 * t * t;\n  return t < 0.5 ? p : -p + (4.0 * t) - 1.0;\n}\n\nfloat exponentialInOut(float t) {\n  return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n      ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n      : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\n\nvec2 rotate (vec2 vector, float cosTheta, float sinTheta) {\n  float x = vector.x;\n  float y = vector.y;\n  float nx = x * cosTheta - y * sinTheta;\n  float ny = x * sinTheta + y * cosTheta;\n  return vec2(nx, ny);\n}\n\nvec4 randomQuaternion (float u1, float u2, float u3) {\n  float sq1 = sqrt(1.0 - u1);\n  float sq2 = sqrt(u1);\n\n  float theta1 = PI * 2.0 * u2;\n  float theta2 = PI * 2.0 * u3;\n\n  float x = sin(theta1) * sq1;\n  float y = cos(theta1) * sq1;\n  float z = sin(theta2) * sq2;\n  float w = cos(theta2) * sq2;\n  return vec4(x, y, z, w);\n}\n\n// from http://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm\nfloat udRoundBox(vec2 p, vec2 b, float r) {\n  return length(max(abs(p)-b+r,0.0))-r;\n}\n\nfloat linearstep (float lo, float hi, float x) {\n  return (clamp(x, lo, hi) - lo) / (hi - lo);\n}\n\nvec3 randomSphere (float scale, float n1, float n2) {\n  float r = n1 * 2.0 * PI;\n  float z = n2 * 2.0 - 1.0;\n  float zScale = sqrt(1.0 - z * z) * scale;\n  float tx = cos(r) * zScale;\n  float ty = sin(r) * zScale;\n  float tz = z * scale;\n  return vec3(tx, ty, tz);\n}\n\n// rotate vector\nvec3 quaternionRotation (vec4 q, vec3 v) {\n  return v + 2.0 * cross(q.xyz, cross(q.xyz, v) + q.w * v);\n}\n\nattribute vec3 centroid;\nattribute float sparkleWeight;\nuniform float audioState;\nuniform float audioClimax;\nuniform float time;\nuniform float vertexWeight;\nuniform float vertexNoise;\nuniform float rippleTime;\nuniform float index;\nuniform float sparkles;\nuniform float inputTime;\nuniform float fadeIn;\n\nuniform float rippleMin;\nuniform float rippleMax;\nuniform float spin;\n\nuniform vec2 mousePosition;\nuniform vec2 resolution;\nuniform vec3 color1;\n\nuniform vec3 mouseOffsetStrengths[MOUSE_CAPACITY];\n\nvarying float vRipple;\nvarying vec2 vUv;\nvarying float vSparkle;\n\nvec3 createSphere (vec3 position) {\n  vec3 transformed = position;\n  transformed.x *= 2.0;\n  float R = 4.0;\n  float lat = (uv.x * 2.0 - 1.0) * (PI / 2.0);\n  float lon = (uv.y * 2.0 - 1.0) * PI;\n  transformed.x = R * cos(lat) * cos(lon);\n  transformed.y = R * cos(lat) * sin(lon);\n  transformed.z = R * sin(lat);\n  return transformed;\n}\n\nfloat mouseMoveTest (vec3 transformed, float aspect, mat4 projModelView) {\n  // do a hit test now that position has changed\n  vec4 projectedPos = projModelView * vec4(transformed.xyz, 1.0);\n  vec2 tScreenPosition = projectedPos.xy / projectedPos.w;\n  float sum = 0.0;\n  \n  for (int i = 0; i < MOUSE_CAPACITY; i++) {\n    vec3 offsetStrength = mouseOffsetStrengths[i];\n    vec2 offset = offsetStrength.xy;\n    float strength = offsetStrength.z;\n\n    vec2 mouseMoveDelta = offset - tScreenPosition;\n    mouseMoveDelta.x *= aspect;\n\n    float mouseMoveRadius = strength * 5.0;\n    float mouseRadiusSq = mouseMoveRadius * mouseMoveRadius;\n    float lenSq = mouseMoveDelta.x * mouseMoveDelta.x + mouseMoveDelta.y * mouseMoveDelta.y;\n    float mouseMoveScale = 1.0 - clamp(lenSq / mouseRadiusSq, 0.0, 1.0);\n\n    sum += mouseMoveScale * strength;\n  }\n  return sum;\n}\n\nvoid main() {\n\n  vUv = uv;\n  #include <uv2_vertex>\n  #include <color_vertex>\n\n  #include <beginnormal_vertex>\n  #include <morphnormal_vertex>\n  #include <skinbase_vertex>\n  #include <skinnormal_vertex>\n  #include <defaultnormal_vertex>\n\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n\n  vNormal = normalize( transformedNormal );\n\n#endif\n\n  ///\n  vec2 mouseNorm = mousePosition * 0.5 + 0.5;\n\n  float dist = length(uv - 0.5);\n  float sinNorm = (sin(time) * 0.5 + 0.5);\n  float sinCosNorm = (sin(cos(time)) * 0.5 + 0.5);\n  float ripples = mix(rippleMin, rippleMax, audioState);\n  float ripples2 = mix(5.0, 30.0, audioState);\n  float rippleSize = ripples;\n  \n  float rippleIdle = sin(dist * rippleSize - time);\n  float rippleAnim = sin(dist * rippleSize - inputTime);\n  float ripple = mix(rippleIdle, rippleAnim, audioState);\n  float ripple2 = sin(dist * ripples2 + sinNorm * 1.0);\n  float rippleNorm = ripple * 0.5 + 0.5;\n  float mouseLength = length(mousePosition);\n  float mouseCenter = length(mouseNorm - 0.5);\n\n  float bigRipple = sin(dist * 20.0 + rippleTime) * 0.075;\n\n  float aspect = resolution.x / resolution.y;\n  mat4 projModelView = projectionMatrix * modelViewMatrix;\n  \n  float mouseRadius = 0.5;\n\n  vec3 transformed = vec3(position.xyz);\n\n  vec3 vertexPoint = centroid.xyz;\n  float vertexIndex = index;\n  \n  #ifdef HIGH_QUALITY\n  float vertexDistance = (snoise_0(vec4(vertexPoint.xy * vertexNoise, ripple, vertexIndex)) * 0.5 + 0.5);\n  #else\n  float vertexDistance = (snoise_1(vec3(vertexPoint.xy * vertexNoise, ripple)) * 0.5 + 0.5);\n  #endif\n\n  float darkness = 1.0;//mix(1.0, mouseLength, audioState);\n  float rippleMouseOff = 0.5;\n  #ifdef RIPPLE_MOUSE\n    float rippleOffset = snoise_0(vec4(vertexPoint.xy * rippleMouseOff, vertexIndex, mousePosition.x));\n  #else\n    float rippleOffset = snoise_1(vec3(vertexPoint.xy * rippleMouseOff, vertexIndex));\n  #endif\n  ripple += rippleOffset * vertexDistance;\n\n  float zOff = 0.0;\n  zOff += ripple;\n  zOff -= ripple2 * 0.5;\n  zOff += bigRipple * audioClimax;\n  transformed.z += zOff;\n\n  // apply mouse ripple\n  transformed.z *= fadeIn;\n  \n  float modVertexWeight = vertexWeight;\n\n  vec3 curPoint = centroid.xyz;\n  vec3 vertexDirection = normalize(position.xyz - curPoint);\n  float vertexOffsetWeight = modVertexWeight * vertexDistance;\n  float vertexOffset = (snoise_0(vec4(uv.xy * (1.0 - rippleNorm), time, vertexIndex)) * 0.5 + 0.5);\n  transformed -= vertexDirection * vertexOffsetWeight * vertexOffset * darkness;\n\n  #ifdef SPIN  \n    vec2 original = transformed.xy;\n    float angle = snoise_2(vec2(dist, ripple2 * 0.5)) * 0.25;\n    // float angle = (dist * PI * 2.0) * ripple2 * 0.25;\n    float tcos = cos(angle);\n    float tsin = sin(angle);\n    transformed.xy = rotate(transformed.xy, tcos, tsin);\n    transformed.xy = mix(original.xy, transformed.xy, spin * (1.0 - audioClimax));\n  #endif\n\n  #ifdef FADE_IN\n    #ifndef SPIN\n      float tcos = 0.0;\n      float tsin = 0.0;\n    #endif\n    if (fadeIn < 1.0) {\n      float fadeAngle = mix(PI * 1.0, PI * 2.0, fadeIn);\n      tcos = cos(fadeAngle);\n      tsin = sin(fadeAngle);\n      transformed.xyz -= centroid.xyz;\n      transformed.xy = rotate(transformed.xy, tcos, tsin);\n      transformed.xyz += centroid.xyz;\n    }\n  #endif\n\n  #ifdef SPARKLE\n    float s = step(1.0 - sparkles, snoise_2(vec2(sparkleWeight, ripple * dist)));\n    vSparkle = clamp(s, 0.0, 1.0);\n  #else\n    vSparkle = 0.0;\n  #endif\n  vRipple = ripple;\n\n  #ifdef HIGH_QUALITY\n    // mouse fancy :D\n    float mouseSum = mouseMoveTest(transformed, aspect, projModelView);\n    // transformed.xyz -= centroid;\n    // float a = 2.0 * PI * 0.5 * (mouseSum * 2.0 - 1.0);\n    // transformed.xy = rotate(transformed.xy, cos(a), sin(a));\n    // transformed.xyz += centroid;\n    vSparkle = mouseSum * 15.0;\n    transformed.z -= mouseSum * 0.5;\n    // transformed.z -= smoothstep(0.1, 1.0, mouseSum) * 5.0;\n    // modVertexWeight = mix(modVertexWeight, 0.05, mouseSum);\n  #endif\n\n  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n\n  #include <logdepthbuf_vertex>\n  #include <clipping_planes_vertex>\n\n  vViewPosition = - mvPosition.xyz;\n\n  #include <worldpos_vertex>\n  #include <envmap_vertex>\n  #include <shadowmap_vertex>\n\n}\n"]), c);
        t.exports = n,
        n.prototype = Object.create(THREE.MeshPhongMaterial.prototype),
        n.prototype.constructor = n,
        n.prototype.isMeshPhongMaterial = !0,
        n.MOUSE_CAPACITY = l,
        n.prototype.copy = function(e) {
            return THREE.MeshPhongMaterial.prototype.copy.call(this, e),
            this.uniforms = THREE.UniformsUtils.clone(e.uniforms),
            r(this),
            this
        }
    }
    , {
        "../util/isMobile": "/projects/prj-thx/lib/util/isMobile.js",
        defined: "/projects/prj-thx/node_modules/defined/index.js",
        "glsl-inject-defines": "/projects/prj-thx/node_modules/glsl-inject-defines/string.js",
        glslify: "/projects/prj-thx/node_modules/glslify/browser.js",
        "new-array": "/projects/prj-thx/node_modules/new-array/index.js",
        "object-assign": "/projects/prj-thx/node_modules/object-assign/index.js",
        path: "/projects/prj-thx/node_modules/path-browserify/index.js"
    }],
    "/projects/prj-thx/lib/util/isMobile.js": [function(e, t) {
        "use strict";
        t.exports = /(iPhone|iPad|iPod|Android)/i.test(window.navigator.userAgent)
    }
    , {}],
    "/projects/prj-thx/lib/util/override-clone-uniforms.js": [function(e, t) {
        "use strict";
        function n(e) {
            var t = {};
            for (var n in e) {
                t[n] = {};
                for (var r in e[n]) {
                    var o = e[n][r];
                    t[n][r] = o && (o.isColor || o.isMatrix3 || o.isMatrix4 || o.isVector2 || o.isVector3 || o.isVector4 || o.isTexture) ? o.clone() : Array.isArray(o) ? o.slice() : o
                }
            }
            return t
        }
        t.exports = function() {
            THREE.UniformsUtils.clone = n
        }
    }
    , {}],
    "/projects/prj-thx/lib/util/palettes.js": [function(e, t) {
        "use strict";
        var n = e("tweenr")()
          , r = function() {}
          , o = e("./query")
          , i = {
            light: "#5a50ff",
            ambient: "#5664cd",
            color: ["#0065f7", "#1c27e1"]
        }
          , s = {
            light: "#8d50ff",
            ambient: "#000",
            color: ["#7400f7", "#b21ce1"]
        }
          , a = {
            light: "#ff9c2d",
            ambient: "#b34141",
            color: ["#eb5a1d", "#e2b11d"]
        }
          , u = [i, a, s]
          , l = u.map(function(e) {
            return Object.keys(e).forEach(function(t) {
                if ("string" == typeof e[t])
                    e[t] = new THREE.Color(e[t]);
                else {
                    if (!Array.isArray(e[t]))
                        throw new TypeError("unknown type");
                    e[t] = e[t].map(function(e) {
                        return new THREE.Color(e)
                    })
                }
            }),
            e
        });
        t.exports = function() {
            function e() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r;
                s.set(d),
                a.set(p),
                u.set(f),
                c.set(h),
                t++,
                i = l[t % l.length],
                x.value = 0,
                n.cancel().to(x, {
                    duration: o.colorOnClick ? 2 : 1,
                    ease: "quadOut",
                    value: 1
                }).on("update", function() {
                    var t = x.value;
                    d.copy(s).lerp(i.light, t),
                    p.copy(a).lerp(i.ambient, t),
                    f.copy(u).lerp(i.color[0], t),
                    h.copy(c).lerp(i.color[1] || i.color[0], t),
                    e(v)
                })
            }
            var t = 0
              , i = l[t]
              , s = new THREE.Color
              , a = new THREE.Color
              , u = new THREE.Color
              , c = new THREE.Color
              , d = new THREE.Color
              , p = new THREE.Color
              , f = new THREE.Color
              , h = new THREE.Color
              , m = [f, h]
              , v = {
                light: d,
                ambient: p,
                color: m
            }
              , x = {
                value: 0
            };
            return d.set(i.light),
            p.set(i.ambient),
            f.set(i.color[0]),
            h.set(i.color[1] || i.color[0]),
            {
                getCurrent: function() {
                    return i
                },
                next: e
            }
        }
    }
    , {
        "./query": "/projects/prj-thx/lib/util/query.js",
        tweenr: "/projects/prj-thx/node_modules/tweenr/index.js"
    }],
    "/projects/prj-thx/lib/util/query.js": [function(e, t) {
        "use strict";
        function n() {
            if ("undefined" == typeof window)
                return {};
            var e = o.parse(window.location.search);
            return Object.keys(e).forEach(function(t) {
                null === e[t] && (e[t] = !0),
                "false" === e[t] && (e[t] = !1),
                "true" === e[t] && (e[t] = !0),
                r(e[t]) && (e[t] = Number(e[t]))
            }),
            e
        }
        function r(e) {
            return "number" == typeof e ? !0 : /^0x[0-9a-f]+$/i.test(e) ? !0 : /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(e)
        }
        var o = e("query-string");
        t.exports = n()
    }
    , {
        "query-string": "/projects/prj-thx/node_modules/query-string/index.js"
    }],
    "/projects/prj-thx/lib/util/random.js": [function(e, t) {
        "use strict";
        var n = String(e("./query").seed || "5")
          , r = e("seed-random")
          , o = e("simplex-noise");
        t.exports.random = r(n),
        t.exports.simplex = new o(t.exports.random),
        t.exports.randomSign = function() {
            return t.exports.random() > .5 ? 1 : -1
        }
        ,
        t.exports.randomFloat = function(e, n) {
            if (void 0 === n && (n = e,
            e = 0),
            "number" != typeof e || "number" != typeof n)
                throw new TypeError("Expected all arguments to be numbers");
            return t.exports.random() * (n - e) + e
        }
        ,
        t.exports.randomCircle = function(e, n) {
            n = n || 1;
            var r = 2 * t.exports.random() * Math.PI;
            return e[0] = Math.cos(r) * n,
            e[1] = Math.sin(r) * n,
            e
        }
        ,
        t.exports.randomSphere = function(e, n) {
            n = n || 1;
            var r = 2 * t.exports.random() * Math.PI
              , o = 2 * t.exports.random() - 1
              , i = Math.sqrt(1 - o * o) * n;
            return e[0] = Math.cos(r) * i,
            e[1] = Math.sin(r) * i,
            e[2] = o * n,
            e
        }
    }
    , {
        "./query": "/projects/prj-thx/lib/util/query.js",
        "seed-random": "/projects/prj-thx/node_modules/seed-random/index.js",
        "simplex-noise": "/projects/prj-thx/node_modules/simplex-noise/simplex-noise.js"
    }],
    "/projects/prj-thx/node_modules/add-px-to-style/index.js": [function(e, t) {
        var n = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridRow: !0,
            gridColumn: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        };
        t.exports = function(e, t) {
            return "number" != typeof t || n[e] ? t : t + "px"
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/an-array/index.js": [function(e, t) {
        function n(e) {
            return e.BYTES_PER_ELEMENT && "[object ArrayBuffer]" === r.call(e.buffer) || Array.isArray(e)
        }
        var r = Object.prototype.toString;
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/clamp/index.js": [function(e, t) {
        function n(e, t, n) {
            return n > t ? t > e ? t : e > n ? n : e : n > e ? n : e > t ? t : e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/defined/index.js": [function(e, t) {
        t.exports = function() {
            for (var e = 0; e < arguments.length; e++)
                if (void 0 !== arguments[e])
                    return arguments[e]
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/dom-css/index.js": [function(e, t) {
        function n(e, t, n) {
            var r = u[t];
            if ("undefined" == typeof r && (r = o(t)),
            r) {
                if (void 0 === n)
                    return e.style[r];
                e.style[r] = l(r, n)
            }
        }
        function r(e, t) {
            for (var r in t)
                t.hasOwnProperty(r) && n(e, r, t[r])
        }
        function o(e) {
            var t = a(e)
              , n = s(t);
            return u[t] = u[e] = u[n] = n,
            n
        }
        function i() {
            2 === arguments.length ? "string" == typeof arguments[1] ? arguments[0].style.cssText = arguments[1] : r(arguments[0], arguments[1]) : n(arguments[0], arguments[1], arguments[2])
        }
        var s = e("prefix-style")
          , a = e("to-camel-case")
          , u = {
            "float": "cssFloat"
        }
          , l = e("add-px-to-style");
        t.exports = i,
        t.exports.set = i,
        t.exports.get = function(e, t) {
            return Array.isArray(t) ? t.reduce(function(t, r) {
                return t[r] = n(e, r || ""),
                t
            }, {}) : n(e, t || "")
        }
    }
    , {
        "add-px-to-style": "/projects/prj-thx/node_modules/add-px-to-style/index.js",
        "prefix-style": "/projects/prj-thx/node_modules/prefix-style/index.js",
        "to-camel-case": "/projects/prj-thx/node_modules/to-camel-case/index.js"
    }],
    "/projects/prj-thx/node_modules/dprop/index.js": [function(e, t) {
        function n(e, t) {
            return {
                configurable: !0,
                enumerable: !0,
                get: e,
                set: t
            }
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/dtype/index.js": [function(e, t) {
        t.exports = function(e) {
            switch (e) {
            case "int8":
                return Int8Array;
            case "int16":
                return Int16Array;
            case "int32":
                return Int32Array;
            case "uint8":
                return Uint8Array;
            case "uint16":
                return Uint16Array;
            case "uint32":
                return Uint32Array;
            case "float32":
                return Float32Array;
            case "float64":
                return Float64Array;
            case "array":
                return Array;
            case "uint8_clamped":
                return Uint8ClampedArray
            }
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/back-in-out.js": [function(e, t) {
        function n(e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/back-in.js": [function(e, t) {
        function n(e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/back-out.js": [function(e, t) {
        function n(e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/bounce-in-out.js": [function(e, t) {
        function n(e) {
            return .5 > e ? .5 * (1 - r(1 - 2 * e)) : .5 * r(2 * e - 1) + .5
        }
        var r = e("./bounce-out");
        t.exports = n
    }
    , {
        "./bounce-out": "/projects/prj-thx/node_modules/eases/bounce-out.js"
    }],
    "/projects/prj-thx/node_modules/eases/bounce-in.js": [function(e, t) {
        function n(e) {
            return 1 - r(1 - e)
        }
        var r = e("./bounce-out");
        t.exports = n
    }
    , {
        "./bounce-out": "/projects/prj-thx/node_modules/eases/bounce-out.js"
    }],
    "/projects/prj-thx/node_modules/eases/bounce-out.js": [function(e, t) {
        function n(e) {
            var t = 4 / 11
              , n = 8 / 11
              , r = .9
              , o = 4356 / 361
              , i = 35442 / 1805
              , s = 16061 / 1805
              , a = e * e;
            return t > e ? 7.5625 * a : n > e ? 9.075 * a - 9.9 * e + 3.4 : r > e ? o * a - i * e + s : 10.8 * e * e - 20.52 * e + 10.72
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/circ-in-out.js": [function(e, t) {
        function n(e) {
            return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/circ-in.js": [function(e, t) {
        function n(e) {
            return 1 - Math.sqrt(1 - e * e)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/circ-out.js": [function(e, t) {
        function n(e) {
            return Math.sqrt(1 - --e * e)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/cubic-in-out.js": [function(e, t) {
        function n(e) {
            return .5 > e ? 4 * e * e * e : .5 * Math.pow(2 * e - 2, 3) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/cubic-in.js": [function(e, t) {
        function n(e) {
            return e * e * e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/cubic-out.js": [function(e, t) {
        function n(e) {
            var t = e - 1;
            return t * t * t + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/elastic-in-out.js": [function(e, t) {
        function n(e) {
            return .5 > e ? .5 * Math.sin(13 * Math.PI / 2 * 2 * e) * Math.pow(2, 10 * (2 * e - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * e - 1 + 1)) * Math.pow(2, -10 * (2 * e - 1)) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/elastic-in.js": [function(e, t) {
        function n(e) {
            return Math.sin(13 * e * Math.PI / 2) * Math.pow(2, 10 * (e - 1))
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/elastic-out.js": [function(e, t) {
        function n(e) {
            return Math.sin(-13 * (e + 1) * Math.PI / 2) * Math.pow(2, -10 * e) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/expo-in-out.js": [function(e, t) {
        function n(e) {
            return 0 === e || 1 === e ? e : .5 > e ? .5 * Math.pow(2, 20 * e - 10) : -.5 * Math.pow(2, 10 - 20 * e) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/expo-in.js": [function(e, t) {
        function n(e) {
            return 0 === e ? e : Math.pow(2, 10 * (e - 1))
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/expo-out.js": [function(e, t) {
        function n(e) {
            return 1 === e ? e : 1 - Math.pow(2, -10 * e)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/index.js": [function(e, t) {
        t.exports = {
            backInOut: e("./back-in-out"),
            backIn: e("./back-in"),
            backOut: e("./back-out"),
            bounceInOut: e("./bounce-in-out"),
            bounceIn: e("./bounce-in"),
            bounceOut: e("./bounce-out"),
            circInOut: e("./circ-in-out"),
            circIn: e("./circ-in"),
            circOut: e("./circ-out"),
            cubicInOut: e("./cubic-in-out"),
            cubicIn: e("./cubic-in"),
            cubicOut: e("./cubic-out"),
            elasticInOut: e("./elastic-in-out"),
            elasticIn: e("./elastic-in"),
            elasticOut: e("./elastic-out"),
            expoInOut: e("./expo-in-out"),
            expoIn: e("./expo-in"),
            expoOut: e("./expo-out"),
            linear: e("./linear"),
            quadInOut: e("./quad-in-out"),
            quadIn: e("./quad-in"),
            quadOut: e("./quad-out"),
            quartInOut: e("./quart-in-out"),
            quartIn: e("./quart-in"),
            quartOut: e("./quart-out"),
            quintInOut: e("./quint-in-out"),
            quintIn: e("./quint-in"),
            quintOut: e("./quint-out"),
            sineInOut: e("./sine-in-out"),
            sineIn: e("./sine-in"),
            sineOut: e("./sine-out")
        }
    }
    , {
        "./back-in": "/projects/prj-thx/node_modules/eases/back-in.js",
        "./back-in-out": "/projects/prj-thx/node_modules/eases/back-in-out.js",
        "./back-out": "/projects/prj-thx/node_modules/eases/back-out.js",
        "./bounce-in": "/projects/prj-thx/node_modules/eases/bounce-in.js",
        "./bounce-in-out": "/projects/prj-thx/node_modules/eases/bounce-in-out.js",
        "./bounce-out": "/projects/prj-thx/node_modules/eases/bounce-out.js",
        "./circ-in": "/projects/prj-thx/node_modules/eases/circ-in.js",
        "./circ-in-out": "/projects/prj-thx/node_modules/eases/circ-in-out.js",
        "./circ-out": "/projects/prj-thx/node_modules/eases/circ-out.js",
        "./cubic-in": "/projects/prj-thx/node_modules/eases/cubic-in.js",
        "./cubic-in-out": "/projects/prj-thx/node_modules/eases/cubic-in-out.js",
        "./cubic-out": "/projects/prj-thx/node_modules/eases/cubic-out.js",
        "./elastic-in": "/projects/prj-thx/node_modules/eases/elastic-in.js",
        "./elastic-in-out": "/projects/prj-thx/node_modules/eases/elastic-in-out.js",
        "./elastic-out": "/projects/prj-thx/node_modules/eases/elastic-out.js",
        "./expo-in": "/projects/prj-thx/node_modules/eases/expo-in.js",
        "./expo-in-out": "/projects/prj-thx/node_modules/eases/expo-in-out.js",
        "./expo-out": "/projects/prj-thx/node_modules/eases/expo-out.js",
        "./linear": "/projects/prj-thx/node_modules/eases/linear.js",
        "./quad-in": "/projects/prj-thx/node_modules/eases/quad-in.js",
        "./quad-in-out": "/projects/prj-thx/node_modules/eases/quad-in-out.js",
        "./quad-out": "/projects/prj-thx/node_modules/eases/quad-out.js",
        "./quart-in": "/projects/prj-thx/node_modules/eases/quart-in.js",
        "./quart-in-out": "/projects/prj-thx/node_modules/eases/quart-in-out.js",
        "./quart-out": "/projects/prj-thx/node_modules/eases/quart-out.js",
        "./quint-in": "/projects/prj-thx/node_modules/eases/quint-in.js",
        "./quint-in-out": "/projects/prj-thx/node_modules/eases/quint-in-out.js",
        "./quint-out": "/projects/prj-thx/node_modules/eases/quint-out.js",
        "./sine-in": "/projects/prj-thx/node_modules/eases/sine-in.js",
        "./sine-in-out": "/projects/prj-thx/node_modules/eases/sine-in-out.js",
        "./sine-out": "/projects/prj-thx/node_modules/eases/sine-out.js"
    }],
    "/projects/prj-thx/node_modules/eases/linear.js": [function(e, t) {
        function n(e) {
            return e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quad-in-out.js": [function(e, t) {
        function n(e) {
            return e /= .5,
            1 > e ? .5 * e * e : (e--,
            -.5 * (e * (e - 2) - 1))
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quad-in.js": [function(e, t) {
        function n(e) {
            return e * e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quad-out.js": [function(e, t) {
        function n(e) {
            return -e * (e - 2)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quart-in-out.js": [function(e, t) {
        function n(e) {
            return .5 > e ? 8 * Math.pow(e, 4) : -8 * Math.pow(e - 1, 4) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quart-in.js": [function(e, t) {
        function n(e) {
            return Math.pow(e, 4)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quart-out.js": [function(e, t) {
        function n(e) {
            return Math.pow(e - 1, 3) * (1 - e) + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quint-in-out.js": [function(e, t) {
        function n(e) {
            return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quint-in.js": [function(e, t) {
        function n(e) {
            return e * e * e * e * e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/quint-out.js": [function(e, t) {
        function n(e) {
            return --e * e * e * e * e + 1
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/sine-in-out.js": [function(e, t) {
        function n(e) {
            return -.5 * (Math.cos(Math.PI * e) - 1)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/sine-in.js": [function(e, t) {
        function n(e) {
            var t = Math.cos(e * Math.PI * .5);
            return Math.abs(t) < 1e-14 ? 1 : 1 - t
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/eases/sine-out.js": [function(e, t) {
        function n(e) {
            return Math.sin(e * Math.PI / 2)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/element-class/index.js": [function(e, t) {
        function n(e, t) {
            if (e.indexOf)
                return e.indexOf(t);
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }
        function r(e) {
            if (!(this instanceof r))
                return new r(e);
            e || (e = {}),
            e.nodeType && (e = {
                el: e
            }),
            this.opts = e,
            this.el = e.el || document.body,
            "object" != typeof this.el && (this.el = document.querySelector(this.el))
        }
        t.exports = function(e) {
            return new r(e)
        }
        ,
        r.prototype.add = function(e) {
            var t = this.el;
            if (t) {
                if ("" === t.className)
                    return t.className = e;
                var r = t.className.split(" ");
                return n(r, e) > -1 ? r : (r.push(e),
                t.className = r.join(" "),
                r)
            }
        }
        ,
        r.prototype.remove = function(e) {
            var t = this.el;
            if (t && "" !== t.className) {
                var r = t.className.split(" ")
                  , o = n(r, e);
                return o > -1 && r.splice(o, 1),
                t.className = r.join(" "),
                r
            }
        }
        ,
        r.prototype.has = function(e) {
            var t = this.el;
            if (t) {
                var r = t.className.split(" ");
                return n(r, e) > -1
            }
        }
        ,
        r.prototype.toggle = function(e) {
            var t = this.el;
            t && (this.has(e) ? this.remove(e) : this.add(e))
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/events/events.js": [function(e, t) {
        function n() {
            this._events = this._events || {},
            this._maxListeners = this._maxListeners || void 0
        }
        function r(e) {
            return "function" == typeof e
        }
        function o(e) {
            return "number" == typeof e
        }
        function i(e) {
            return "object" == typeof e && null !== e
        }
        function s(e) {
            return void 0 === e
        }
        t.exports = n,
        n.EventEmitter = n,
        n.prototype._events = void 0,
        n.prototype._maxListeners = void 0,
        n.defaultMaxListeners = 10,
        n.prototype.setMaxListeners = function(e) {
            if (!o(e) || 0 > e || isNaN(e))
                throw TypeError("n must be a positive number");
            return this._maxListeners = e,
            this
        }
        ,
        n.prototype.emit = function(e) {
            var t, n, o, a, u, l;
            if (this._events || (this._events = {}),
            "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                if (t = arguments[1],
                t instanceof Error)
                    throw t;
                var c = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw c.context = t,
                c
            }
            if (n = this._events[e],
            s(n))
                return !1;
            if (r(n))
                switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    a = Array.prototype.slice.call(arguments, 1),
                    n.apply(this, a)
                }
            else if (i(n))
                for (a = Array.prototype.slice.call(arguments, 1),
                l = n.slice(),
                o = l.length,
                u = 0; o > u; u++)
                    l[u].apply(this, a);
            return !0
        }
        ,
        n.prototype.addListener = function(e, t) {
            var o;
            if (!r(t))
                throw TypeError("listener must be a function");
            return this._events || (this._events = {}),
            this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t),
            this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
            i(this._events[e]) && !this._events[e].warned && (o = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners,
            o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0,
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
            "function" == typeof console.trace && console.trace())),
            this
        }
        ,
        n.prototype.on = n.prototype.addListener,
        n.prototype.once = function(e, t) {
            function n() {
                this.removeListener(e, n),
                o || (o = !0,
                t.apply(this, arguments))
            }
            if (!r(t))
                throw TypeError("listener must be a function");
            var o = !1;
            return n.listener = t,
            this.on(e, n),
            this
        }
        ,
        n.prototype.removeListener = function(e, t) {
            var n, o, s, a;
            if (!r(t))
                throw TypeError("listener must be a function");
            if (!this._events || !this._events[e])
                return this;
            if (n = this._events[e],
            s = n.length,
            o = -1,
            n === t || r(n.listener) && n.listener === t)
                delete this._events[e],
                this._events.removeListener && this.emit("removeListener", e, t);
            else if (i(n)) {
                for (a = s; a-- > 0; )
                    if (n[a] === t || n[a].listener && n[a].listener === t) {
                        o = a;
                        break
                    }
                if (0 > o)
                    return this;
                1 === n.length ? (n.length = 0,
                delete this._events[e]) : n.splice(o, 1),
                this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }
        ,
        n.prototype.removeAllListeners = function(e) {
            var t, n;
            if (!this._events)
                return this;
            if (!this._events.removeListener)
                return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                this;
            if (0 === arguments.length) {
                for (t in this._events)
                    "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"),
                this._events = {},
                this
            }
            if (n = this._events[e],
            r(n))
                this.removeListener(e, n);
            else if (n)
                for (; n.length; )
                    this.removeListener(e, n[n.length - 1]);
            return delete this._events[e],
            this
        }
        ,
        n.prototype.listeners = function(e) {
            var t;
            return t = this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }
        ,
        n.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (r(t))
                    return 1;
                if (t)
                    return t.length
            }
            return 0
        }
        ,
        n.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/flatten-vertex-data/index.js": [function(e, t) {
        function n(e, t, n) {
            if (!e)
                throw new TypeError("must specify data as first parameter");
            if (n = 0 | +(n || 0),
            Array.isArray(e) && Array.isArray(e[0])) {
                var o = e[0].length
                  , i = e.length * o;
                t && "string" != typeof t || (t = new (r(t || "float32"))(i + n));
                var s = t.length - n;
                if (i !== s)
                    throw new Error("source length " + i + " (" + o + "x" + e.length + ") does not match destination length " + s);
                for (var a = 0, u = n; a < e.length; a++)
                    for (var l = 0; o > l; l++)
                        t[u++] = e[a][l]
            } else if (t && "string" != typeof t)
                t.set(e, n);
            else {
                var c = r(t || "float32");
                0 === n ? t = new c(e) : (t = new c(e.length + n),
                t.set(e, n))
            }
            return t
        }
        var r = e("dtype");
        t.exports = n
    }
    , {
        dtype: "/projects/prj-thx/node_modules/dtype/index.js"
    }],
    "/projects/prj-thx/node_modules/for-each/index.js": [function(e, t) {
        function n(e, t, n) {
            if (!s(t))
                throw new TypeError("iterator must be a function");
            arguments.length < 3 && (n = this),
            "[object Array]" === a.call(e) ? r(e, t, n) : "string" == typeof e ? o(e, t, n) : i(e, t, n)
        }
        function r(e, t, n) {
            for (var r = 0, o = e.length; o > r; r++)
                u.call(e, r) && t.call(n, e[r], r, e)
        }
        function o(e, t, n) {
            for (var r = 0, o = e.length; o > r; r++)
                t.call(n, e.charAt(r), r, e)
        }
        function i(e, t, n) {
            for (var r in e)
                u.call(e, r) && t.call(n, e[r], r, e)
        }
        var s = e("is-function");
        t.exports = n;
        var a = Object.prototype.toString
          , u = Object.prototype.hasOwnProperty
    }
    , {
        "is-function": "/projects/prj-thx/node_modules/is-function/index.js"
    }],
    "/projects/prj-thx/node_modules/gl-quat/invert.js": [function(e, t) {
        function n(e, t) {
            var n = t[0]
              , r = t[1]
              , o = t[2]
              , i = t[3]
              , s = n * n + r * r + o * o + i * i
              , a = s ? 1 / s : 0;
            return e[0] = -n * a,
            e[1] = -r * a,
            e[2] = -o * a,
            e[3] = i * a,
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-quat/normalize.js": [function(e, t) {
        t.exports = e("gl-vec4/normalize")
    }
    , {
        "gl-vec4/normalize": "/projects/prj-thx/node_modules/gl-vec4/normalize.js"
    }],
    "/projects/prj-thx/node_modules/gl-vec2/distance.js": [function(e, t) {
        function n(e, t) {
            var n = t[0] - e[0]
              , r = t[1] - e[1];
            return Math.sqrt(n * n + r * r)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/add.js": [function(e, t) {
        function n(e, t, n) {
            return e[0] = t[0] + n[0],
            e[1] = t[1] + n[1],
            e[2] = t[2] + n[2],
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/copy.js": [function(e, t) {
        function n(e, t) {
            return e[0] = t[0],
            e[1] = t[1],
            e[2] = t[2],
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/cross.js": [function(e, t) {
        function n(e, t, n) {
            var r = t[0]
              , o = t[1]
              , i = t[2]
              , s = n[0]
              , a = n[1]
              , u = n[2];
            return e[0] = o * u - i * a,
            e[1] = i * s - r * u,
            e[2] = r * a - o * s,
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/dot.js": [function(e, t) {
        function n(e, t) {
            return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/length.js": [function(e, t) {
        function n(e) {
            var t = e[0]
              , n = e[1]
              , r = e[2];
            return Math.sqrt(t * t + n * n + r * r)
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/normalize.js": [function(e, t) {
        function n(e, t) {
            var n = t[0]
              , r = t[1]
              , o = t[2]
              , i = n * n + r * r + o * o;
            return i > 0 && (i = 1 / Math.sqrt(i),
            e[0] = t[0] * i,
            e[1] = t[1] * i,
            e[2] = t[2] * i),
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/set.js": [function(e, t) {
        function n(e, t, n, r) {
            return e[0] = t,
            e[1] = n,
            e[2] = r,
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/subtract.js": [function(e, t) {
        function n(e, t, n) {
            return e[0] = t[0] - n[0],
            e[1] = t[1] - n[1],
            e[2] = t[2] - n[2],
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec3/transformQuat.js": [function(e, t) {
        function n(e, t, n) {
            var r = t[0]
              , o = t[1]
              , i = t[2]
              , s = n[0]
              , a = n[1]
              , u = n[2]
              , l = n[3]
              , c = l * r + a * i - u * o
              , d = l * o + u * r - s * i
              , p = l * i + s * o - a * r
              , f = -s * r - a * o - u * i;
            return e[0] = c * l + f * -s + d * -u - p * -a,
            e[1] = d * l + f * -a + p * -s - c * -u,
            e[2] = p * l + f * -u + c * -a - d * -s,
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/gl-vec4/normalize.js": [function(e, t) {
        function n(e, t) {
            var n = t[0]
              , r = t[1]
              , o = t[2]
              , i = t[3]
              , s = n * n + r * r + o * o + i * i;
            return s > 0 && (s = 1 / Math.sqrt(s),
            e[0] = n * s,
            e[1] = r * s,
            e[2] = o * s,
            e[3] = i * s),
            e
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/global/window.js": [function(e, t) {
        (function(e) {
            t.exports = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {}
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    "/projects/prj-thx/node_modules/glsl-inject-defines/string.js": [function(e, t) {
        var n = e("glsl-tokenizer")
          , r = e("glsl-token-string")
          , o = e("glsl-token-inject-block");
        t.exports = function(e, t) {
            if (!t)
                return e;
            var i = Object.keys(t);
            if (0 === i.length)
                return e;
            for (var s = n(e), a = i.length - 1; a >= 0; a--) {
                var u = i[a]
                  , l = String(t[u]);
                l && (l = " " + l),
                o(s, {
                    type: "preprocessor",
                    data: "#define " + u + l
                })
            }
            return r(s)
        }
    }
    , {
        "glsl-token-inject-block": "/projects/prj-thx/node_modules/glsl-token-inject-block/index.js",
        "glsl-token-string": "/projects/prj-thx/node_modules/glsl-token-string/index.js",
        "glsl-tokenizer": "/projects/prj-thx/node_modules/glsl-tokenizer/string.js"
    }],
    "/projects/prj-thx/node_modules/glsl-token-inject-block/index.js": [function(e, t) {
        function n(e, t) {
            Array.isArray(t) || (t = [t]);
            var n = r(e)
              , o = n > 0 ? e[n - 1] : null;
            o && s.test(o.data) && e.splice(n++, 0, i),
            e.splice.apply(e, [n, 0].concat(t));
            var a = n + t.length;
            return e[a] && /[^\r\n]$/.test(e[a].data) && e.splice(a, 0, i),
            e
        }
        function r(e) {
            for (var t = -1, n = 0; n < e.length; n++) {
                var r = e[n];
                if ("preprocessor" === r.type)
                    /^#(extension|version)/.test(r.data) && (t = Math.max(t, n));
                else if ("keyword" === r.type && "precision" === r.data) {
                    var i = o(e, n);
                    if (-1 === i)
                        throw new Error("precision statement not followed by any semicolons!");
                    t = Math.max(t, i)
                }
            }
            return t + 1
        }
        function o(e, t) {
            for (var n = t; n < e.length; n++)
                if ("operator" === e[n].type && ";" === e[n].data)
                    return n;
            return -1
        }
        t.exports = n;
        var i = {
            data: "\n",
            type: "whitespace"
        }
          , s = /[^\r\n]$/
    }
    , {}],
    "/projects/prj-thx/node_modules/glsl-token-string/index.js": [function(e, t) {
        function n(e) {
            for (var t = [], n = 0; n < e.length; n++)
                "eof" !== e[n].type && t.push(e[n].data);
            return t.join("")
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/glsl-tokenizer/index.js": [function(e, t) {
        function n(e) {
            function t(e) {
                e.length && U.push({
                    type: _[H],
                    data: e,
                    position: G,
                    line: B,
                    column: V
                })
            }
            function n(e) {
                q = 0,
                Y += e,
                z = Y.length;
                for (var t; O = Y[q],
                z > q; ) {
                    switch (t = q,
                    H) {
                    case c:
                        q = C();
                        break;
                    case d:
                        q = M();
                        break;
                    case p:
                        q = S();
                        break;
                    case f:
                        q = A();
                        break;
                    case h:
                        q = L();
                        break;
                    case b:
                        q = D();
                        break;
                    case m:
                        q = k();
                        break;
                    case l:
                        q = I();
                        break;
                    case j:
                        q = T();
                        break;
                    case u:
                        q = E()
                    }
                    if (t !== q)
                        switch (Y[t]) {
                        case "\n":
                            V = 0,
                            ++B;
                            break;
                        default:
                            ++V
                        }
                }
                return F += q,
                Y = Y.slice(q),
                U
            }
            function w() {
                return N.length && t(N.join("")),
                H = y,
                t("(eof)"),
                U
            }
            function E() {
                return N = N.length ? [] : N,
                "/" === P && "*" === O ? (G = F + q - 1,
                H = c,
                P = O,
                q + 1) : "/" === P && "/" === O ? (G = F + q - 1,
                H = d,
                P = O,
                q + 1) : "#" === O ? (H = p,
                G = F + q,
                q) : /\s/.test(O) ? (H = j,
                G = F + q,
                q) : (W = /\d/.test(O),
                X = /[^\w_]/.test(O),
                G = F + q,
                H = W ? h : X ? f : l,
                q)
            }
            function T() {
                return /[^\s]/g.test(O) ? (t(N.join("")),
                H = u,
                q) : (N.push(O),
                P = O,
                q + 1)
            }
            function S() {
                return "\r" !== O && "\n" !== O || "\\" === P ? (N.push(O),
                P = O,
                q + 1) : (t(N.join("")),
                H = u,
                q)
            }
            function M() {
                return S()
            }
            function C() {
                return "/" === O && "*" === P ? (N.push(O),
                t(N.join("")),
                H = u,
                q + 1) : (N.push(O),
                P = O,
                q + 1)
            }
            function A() {
                if ("." === P && /\d/.test(O))
                    return H = m,
                    q;
                if ("/" === P && "*" === O)
                    return H = c,
                    q;
                if ("/" === P && "/" === O)
                    return H = d,
                    q;
                if ("." === O && N.length) {
                    for (; R(N); )
                        ;
                    return H = m,
                    q
                }
                if (";" === O || ")" === O || "(" === O) {
                    if (N.length)
                        for (; R(N); )
                            ;
                    return t(O),
                    H = u,
                    q + 1
                }
                var e = 2 === N.length && "=" !== O;
                if (/[\w_\d\s]/.test(O) || e) {
                    for (; R(N); )
                        ;
                    return H = u,
                    q
                }
                return N.push(O),
                P = O,
                q + 1
            }
            function R(e) {
                for (var n, r, i = 0; ; ) {
                    if (n = o.indexOf(e.slice(0, e.length + i).join("")),
                    r = o[n],
                    -1 === n) {
                        if (i-- + e.length > 0)
                            continue;
                        r = e.slice(0, 1).join("")
                    }
                    return t(r),
                    G += r.length,
                    N = N.slice(r.length),
                    N.length
                }
            }
            function D() {
                return /[^a-fA-F0-9]/.test(O) ? (t(N.join("")),
                H = u,
                q) : (N.push(O),
                P = O,
                q + 1)
            }
            function L() {
                return "." === O ? (N.push(O),
                H = m,
                P = O,
                q + 1) : /[eE]/.test(O) ? (N.push(O),
                H = m,
                P = O,
                q + 1) : "x" === O && 1 === N.length && "0" === N[0] ? (H = b,
                N.push(O),
                P = O,
                q + 1) : /[^\d]/.test(O) ? (t(N.join("")),
                H = u,
                q) : (N.push(O),
                P = O,
                q + 1)
            }
            function k() {
                return "f" === O && (N.push(O),
                P = O,
                q += 1),
                /[eE]/.test(O) ? (N.push(O),
                P = O,
                q + 1) : "-" === O && /[eE]/.test(P) ? (N.push(O),
                P = O,
                q + 1) : /[^\d]/.test(O) ? (t(N.join("")),
                H = u,
                q) : (N.push(O),
                P = O,
                q + 1)
            }
            function I() {
                if (/[^\d\w_]/.test(O)) {
                    var e = N.join("");
                    return H = K.indexOf(e) > -1 ? g : Q.indexOf(e) > -1 ? x : v,
                    t(N.join("")),
                    H = u,
                    q
                }
                return N.push(O),
                P = O,
                q + 1
            }
            var O, P, z, q = 0, F = 0, H = u, N = [], U = [], B = 1, V = 0, G = 0, W = !1, X = !1, Y = "";
            e = e || {};
            var Q = i
              , K = r;
            return "300 es" === e.version && (Q = a,
            K = s),
            function(e) {
                return U = [],
                null !== e ? n(e.replace ? e.replace(/\r\n/g, "\n") : e) : w()
            }
        }
        t.exports = n;
        var r = e("./lib/literals")
          , o = e("./lib/operators")
          , i = e("./lib/builtins")
          , s = e("./lib/literals-300es")
          , a = e("./lib/builtins-300es")
          , u = 999
          , l = 9999
          , c = 0
          , d = 1
          , p = 2
          , f = 3
          , h = 4
          , m = 5
          , v = 6
          , x = 7
          , g = 8
          , j = 9
          , y = 10
          , b = 11
          , _ = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"]
    }
    , {
        "./lib/builtins": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/builtins.js",
        "./lib/builtins-300es": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/builtins-300es.js",
        "./lib/literals": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/literals.js",
        "./lib/literals-300es": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/literals-300es.js",
        "./lib/operators": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/operators.js"
    }],
    "/projects/prj-thx/node_modules/glsl-tokenizer/lib/builtins-300es.js": [function(e, t) {
        var n = e("./builtins");
        n = n.slice().filter(function(e) {
            return !/^(gl\_|texture)/.test(e)
        }),
        t.exports = n.concat(["gl_VertexID", "gl_InstanceID", "gl_Position", "gl_PointSize", "gl_FragCoord", "gl_FrontFacing", "gl_FragDepth", "gl_PointCoord", "gl_MaxVertexAttribs", "gl_MaxVertexUniformVectors", "gl_MaxVertexOutputVectors", "gl_MaxFragmentInputVectors", "gl_MaxVertexTextureImageUnits", "gl_MaxCombinedTextureImageUnits", "gl_MaxTextureImageUnits", "gl_MaxFragmentUniformVectors", "gl_MaxDrawBuffers", "gl_MinProgramTexelOffset", "gl_MaxProgramTexelOffset", "gl_DepthRangeParameters", "gl_DepthRange", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"])
    }
    , {
        "./builtins": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/builtins.js"
    }],
    "/projects/prj-thx/node_modules/glsl-tokenizer/lib/builtins.js": [function(e, t) {
        t.exports = ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT"]
    }
    , {}],
    "/projects/prj-thx/node_modules/glsl-tokenizer/lib/literals-300es.js": [function(e, t) {
        var n = e("./literals");
        t.exports = n.slice().concat(["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray"]);
    }
    , {
        "./literals": "/projects/prj-thx/node_modules/glsl-tokenizer/lib/literals.js"
    }],
    "/projects/prj-thx/node_modules/glsl-tokenizer/lib/literals.js": [function(e, t) {
        t.exports = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]
    }
    , {}],
    "/projects/prj-thx/node_modules/glsl-tokenizer/lib/operators.js": [function(e, t) {
        t.exports = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"]
    }
    , {}],
    "/projects/prj-thx/node_modules/glsl-tokenizer/string.js": [function(e, t) {
        function n(e, t) {
            var n = r(t)
              , o = [];
            return o = o.concat(n(e)),
            o = o.concat(n(null))
        }
        var r = e("./index");
        t.exports = n
    }
    , {
        "./index": "/projects/prj-thx/node_modules/glsl-tokenizer/index.js"
    }],
    "/projects/prj-thx/node_modules/glslify/browser.js": [function(e, t) {
        t.exports = function(e) {
            "string" == typeof e && (e = [e]);
            for (var t = [].slice.call(arguments, 1), n = [], r = 0; r < e.length - 1; r++)
                n.push(e[r], t[r] || "");
            return n.push(e[r]),
            n.join("")
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/inherits/inherits_browser.js": [function(e, t) {
        t.exports = "function" == typeof Object.create ? function(e, t) {
            e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : function(e, t) {
            e.super_ = t;
            var n = function() {};
            n.prototype = t.prototype,
            e.prototype = new n,
            e.prototype.constructor = e
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/is-function/index.js": [function(e, t) {
        function n(e) {
            var t = r.call(e);
            return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
        }
        t.exports = n;
        var r = Object.prototype.toString
    }
    , {}],
    "/projects/prj-thx/node_modules/lerp-array/index.js": [function(e, t) {
        var n = e("lerp");
        t.exports = function(e, t, r, o) {
            if ("number" == typeof e && "number" == typeof t)
                return n(e, t, r);
            var i = Math.min(e.length, t.length);
            o = o || new Array(i);
            for (var s = 0; i > s; s++)
                o[s] = n(e[s], t[s], r);
            return o
        }
    }
    , {
        lerp: "/projects/prj-thx/node_modules/lerp/index.js"
    }],
    "/projects/prj-thx/node_modules/lerp/index.js": [function(e, t) {
        function n(e, t, n) {
            return e * (1 - n) + t * n
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/load-img/index.js": [function(e, t) {
        function n(e, t, n) {
            "function" == typeof t && (n = t,
            t = null);
            var r, o = document.createElement("img");
            return o.onload = function() {
                r || (r = !0,
                n && n(void 0, o))
            }
            ,
            o.onerror = function() {
                r || (r = !0,
                n && n(new Error('Unable to load "' + e + '"'), o))
            }
            ,
            t && t.crossOrigin && (o.crossOrigin = t.crossOrigin),
            o.src = e,
            o
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/lodash.throttle/index.js": [function(e, t) {
        (function(e) {
            function n(e, t, n) {
                function r(t) {
                    var n = m
                      , r = v;
                    return m = v = void 0,
                    E = t,
                    g = e.apply(r, n)
                }
                function i(e) {
                    return E = e,
                    j = setTimeout(c, t),
                    T ? r(e) : g
                }
                function s(e) {
                    var n = e - y
                      , r = e - E
                      , o = t - n;
                    return S ? _(o, x - r) : o
                }
                function l(e) {
                    var n = e - y
                      , r = e - E;
                    return void 0 === y || n >= t || 0 > n || S && r >= x
                }
                function c() {
                    var e = w();
                    return l(e) ? d(e) : void (j = setTimeout(c, s(e)))
                }
                function d(e) {
                    return j = void 0,
                    M && m ? r(e) : (m = v = void 0,
                    g)
                }
                function p() {
                    void 0 !== j && clearTimeout(j),
                    E = 0,
                    m = y = v = j = void 0
                }
                function f() {
                    return void 0 === j ? g : d(w())
                }
                function h() {
                    var e = w()
                      , n = l(e);
                    if (m = arguments,
                    v = this,
                    y = e,
                    n) {
                        if (void 0 === j)
                            return i(y);
                        if (S)
                            return j = setTimeout(c, t),
                            r(y)
                    }
                    return void 0 === j && (j = setTimeout(c, t)),
                    g
                }
                var m, v, x, g, j, y, E = 0, T = !1, S = !1, M = !0;
                if ("function" != typeof e)
                    throw new TypeError(u);
                return t = a(t) || 0,
                o(n) && (T = !!n.leading,
                S = "maxWait"in n,
                x = S ? b(a(n.maxWait) || 0, t) : x,
                M = "trailing"in n ? !!n.trailing : M),
                h.cancel = p,
                h.flush = f,
                h
            }
            function r(e, t, r) {
                var i = !0
                  , s = !0;
                if ("function" != typeof e)
                    throw new TypeError(u);
                return o(r) && (i = "leading"in r ? !!r.leading : i,
                s = "trailing"in r ? !!r.trailing : s),
                n(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: s
                })
            }
            function o(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function i(e) {
                return !!e && "object" == typeof e
            }
            function s(e) {
                return "symbol" == typeof e || i(e) && y.call(e) == c
            }
            function a(e) {
                if ("number" == typeof e)
                    return e;
                if (s(e))
                    return l;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = f.test(e);
                return n || h.test(e) ? m(e.slice(2), n ? 2 : 8) : p.test(e) ? l : +e
            }
            var u = "Expected a function"
              , l = 0 / 0
              , c = "[object Symbol]"
              , d = /^\s+|\s+$/g
              , p = /^[-+]0x[0-9a-f]+$/i
              , f = /^0b[01]+$/i
              , h = /^0o[0-7]+$/i
              , m = parseInt
              , v = "object" == typeof e && e && e.Object === Object && e
              , x = "object" == typeof self && self && self.Object === Object && self
              , g = v || x || Function("return this")()
              , j = Object.prototype
              , y = j.toString
              , b = Math.max
              , _ = Math.min
              , w = function() {
                return g.Date.now()
            };
            t.exports = r
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    "/projects/prj-thx/node_modules/map-limit/index.js": [function(e, t) {
        function n(e, t, n, i) {
            function s() {
                if (l === f)
                    return i(null, d);
                for (; t > p && !c && h !== f; )
                    u()
            }
            function a(e) {
                return c = !0,
                i(e)
            }
            function u() {
                var t = h++;
                p += 1,
                n(e[t], function(e, n) {
                    return e ? a(e) : (d[t] = n,
                    l += 1,
                    p -= 1,
                    void s())
                })
            }
            var l = 0
              , c = !1
              , d = []
              , p = 0
              , f = e.length
              , h = 0;
            if (i = r(i || o),
            "function" != typeof n)
                throw new Error("Iterator function must be passed as the third argument");
            for (var m = 0; f > m; m++)
                d[m] = null;
            s()
        }
        var r = e("once")
          , o = function() {};
        t.exports = n
    }
    , {
        once: "/projects/prj-thx/node_modules/map-limit/node_modules/once/once.js"
    }],
    "/projects/prj-thx/node_modules/map-limit/node_modules/once/once.js": [function(e, t) {
        function n(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0,
                t.value = e.apply(this, arguments))
            };
            return t.called = !1,
            t
        }
        var r = e("wrappy");
        t.exports = r(n),
        n.proto = n(function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return n(this)
                },
                configurable: !0
            })
        })
    }
    , {
        wrappy: "/projects/prj-thx/node_modules/wrappy/wrappy.js"
    }],
    "/projects/prj-thx/node_modules/mixes/index.js": [function(e, t) {
        function n(e, t) {
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    if ("function" == typeof i)
                        e[n] = i;
                    else if (i && "object" == typeof i) {
                        var s = r(o, i);
                        Object.defineProperty(e, n, s)
                    }
                }
        }
        var r = e("xtend")
          , o = {
            enumerable: !0,
            configurable: !0
        };
        t.exports = function(e, t) {
            n(e.prototype, t)
        }
        ,
        t.exports.mix = n
    }
    , {
        xtend: "/projects/prj-thx/node_modules/xtend/immutable.js"
    }],
    "/projects/prj-thx/node_modules/mouse-event-offset/index.js": [function(e, t) {
        function n(e, t, n) {
            t = t || e.currentTarget || e.srcElement,
            Array.isArray(n) || (n = [0, 0]);
            var o = e.clientX || 0
              , i = e.clientY || 0
              , s = r(t);
            return n[0] = o - s.left,
            n[1] = i - s.top,
            n
        }
        function r(e) {
            return e === window || e === document || e === document.body ? o : e.getBoundingClientRect()
        }
        var o = {
            left: 0,
            top: 0
        };
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/mouse-wheel/wheel.js": [function(e, t) {
        "use strict";
        function n(e, t, n) {
            "function" == typeof e && (n = !!t,
            t = e,
            e = window);
            var o = r("ex", e)
              , i = function(e) {
                n && e.preventDefault();
                var r = e.deltaX || 0
                  , i = e.deltaY || 0
                  , s = e.deltaZ || 0
                  , a = e.deltaMode
                  , u = 1;
                switch (a) {
                case 1:
                    u = o;
                    break;
                case 2:
                    u = window.innerHeight
                }
                return r *= u,
                i *= u,
                s *= u,
                r || i || s ? t(r, i, s, e) : void 0
            };
            return e.addEventListener("wheel", i),
            i
        }
        var r = e("to-px");
        t.exports = n
    }
    , {
        "to-px": "/projects/prj-thx/node_modules/to-px/topx.js"
    }],
    "/projects/prj-thx/node_modules/new-array/index.js": [function(e, t) {
        function n(e, t) {
            e = e || 0;
            for (var n = new Array(e), r = 0; e > r; r++)
                n[r] = t;
            return n
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/object-assign/index.js": [function(e, t) {
        "use strict";
        function n(e) {
            if (null === e || void 0 === e)
                throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }
        function r() {
            try {
                if (!Object.assign)
                    return !1;
                var e = new String("abc");
                if (e[5] = "de",
                "5" === Object.getOwnPropertyNames(e)[0])
                    return !1;
                for (var t = {}, n = 0; 10 > n; n++)
                    t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                });
                if ("0123456789" !== r.join(""))
                    return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    o[e] = e
                }),
                "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, o)).join("") ? !1 : !0
            } catch (i) {
                return !1
            }
        }
        var o = Object.prototype.hasOwnProperty
          , i = Object.prototype.propertyIsEnumerable;
        t.exports = r() ? Object.assign : function(e) {
            for (var t, r, s = n(e), a = 1; a < arguments.length; a++) {
                t = Object(arguments[a]);
                for (var u in t)
                    o.call(t, u) && (s[u] = t[u]);
                if (Object.getOwnPropertySymbols) {
                    r = Object.getOwnPropertySymbols(t);
                    for (var l = 0; l < r.length; l++)
                        i.call(t, r[l]) && (s[r[l]] = t[r[l]])
                }
            }
            return s
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/orbit-controls/index.js": [function(e, t) {
        function n(e) {
            function t(e, t) {
                var n = 2 * Math.PI;
                x[0] -= n * e * b.rotateSpeed,
                x[1] -= n * t * b.rotateSpeed
            }
            function n(e) {
                x[2] += e * b.zoomSpeed
            }
            function f(e) {
                x[2] -= e * b.pinchSpeed
            }
            function h() {
                var e = b.up || c;
                a(j, e, c),
                u(y, j);
                var t = b.distance;
                l.subtract(g, b.position, b.target),
                l.transformQuat(g, g, j);
                var n = Math.atan2(g[0], g[2])
                  , o = Math.atan2(Math.sqrt(g[0] * g[0] + g[2] * g[2]), g[1]);
                n += x[0],
                o += x[1],
                n = i(n, b.thetaBounds[0], b.thetaBounds[1]),
                o = i(o, b.phiBounds[0], b.phiBounds[1]),
                o = i(o, d, Math.PI - d),
                t += x[2],
                t = i(t, b.distanceBounds[0], b.distanceBounds[1]);
                var s = Math.abs(t) <= d ? d : t;
                g[0] = s * Math.sin(o) * Math.sin(n),
                g[1] = s * Math.cos(o),
                g[2] = s * Math.sin(o) * Math.cos(n),
                b.phi = o,
                b.theta = n,
                b.distance = t,
                l.transformQuat(g, g, y),
                l.add(b.position, b.target, g),
                r(b.direction, e, b.position, b.target);
                for (var p = "number" == typeof b.damping ? b.damping : 1, f = 0; f < x.length; f++)
                    x[f] *= 1 - p
            }
            function m(e, t, n) {
                e && l.copy(e, b.position),
                t && l.copy(t, b.direction),
                n && l.copy(n, b.up)
            }
            function v() {
                var e = Math.max(d, b.distance);
                b.position[0] = e * Math.sin(b.phi) * Math.sin(b.theta),
                b.position[1] = e * Math.cos(b.phi),
                b.position[2] = e * Math.sin(b.phi) * Math.cos(b.theta),
                l.add(b.position, b.position, b.target)
            }
            e = e || {};
            var x = [0, 0, 0]
              , g = [0, 0, 0]
              , j = [0, 0, 0, 1]
              , y = j.slice()
              , b = {
                update: h,
                copyInto: m,
                position: e.position ? e.position.slice() : [0, 0, 1],
                direction: [0, 0, -1],
                up: e.up ? e.up.slice() : [0, 1, 0],
                target: e.target ? e.target.slice() : [0, 0, 0],
                phi: o(e.phi, Math.PI / 2),
                theta: e.theta || 0,
                distance: o(e.distance, 1),
                damping: o(e.damping, .25),
                rotateSpeed: o(e.rotateSpeed, .28),
                zoomSpeed: o(e.zoomSpeed, .0075),
                pinchSpeed: o(e.pinchSpeed, .0075),
                pinch: e.pinching !== !1,
                zoom: e.zoom !== !1,
                rotate: e.rotate !== !1,
                phiBounds: e.phiBounds || [0, Math.PI],
                thetaBounds: e.thetaBounds || [-(1 / 0), 1 / 0],
                distanceBounds: e.distanceBounds || [0, 1 / 0]
            };
            "number" != typeof e.distance && (l.subtract(p, b.position, b.target),
            b.distance = l.length(p)),
            v();
            const _ = s({
                parent: e.parent || window,
                element: e.element,
                rotate: e.rotate !== !1 ? t : null,
                zoom: e.zoom !== !1 ? n : null,
                pinch: e.pinch !== !1 ? f : null
            });
            return b.enable = _.enable,
            b.disable = _.disable,
            b
        }
        function r(e, t, n, r) {
            l.copy(e, r),
            l.subtract(e, e, n),
            l.normalize(e, e)
        }
        var o = e("defined")
          , i = e("clamp")
          , s = e("./lib/input")
          , a = e("quat-from-unit-vec3")
          , u = e("gl-quat/invert")
          , l = {
            length: e("gl-vec3/length"),
            add: e("gl-vec3/add"),
            subtract: e("gl-vec3/subtract"),
            transformQuat: e("gl-vec3/transformQuat"),
            copy: e("gl-vec3/copy"),
            normalize: e("gl-vec3/normalize"),
            cross: e("gl-vec3/cross")
        }
          , c = [0, 1, 0]
          , d = Math.pow(2, -23)
          , p = [0, 0, 0];
        t.exports = n
    }
    , {
        "./lib/input": "/projects/prj-thx/node_modules/orbit-controls/lib/input.js",
        clamp: "/projects/prj-thx/node_modules/clamp/index.js",
        defined: "/projects/prj-thx/node_modules/defined/index.js",
        "gl-quat/invert": "/projects/prj-thx/node_modules/gl-quat/invert.js",
        "gl-vec3/add": "/projects/prj-thx/node_modules/gl-vec3/add.js",
        "gl-vec3/copy": "/projects/prj-thx/node_modules/gl-vec3/copy.js",
        "gl-vec3/cross": "/projects/prj-thx/node_modules/gl-vec3/cross.js",
        "gl-vec3/length": "/projects/prj-thx/node_modules/gl-vec3/length.js",
        "gl-vec3/normalize": "/projects/prj-thx/node_modules/gl-vec3/normalize.js",
        "gl-vec3/subtract": "/projects/prj-thx/node_modules/gl-vec3/subtract.js",
        "gl-vec3/transformQuat": "/projects/prj-thx/node_modules/gl-vec3/transformQuat.js",
        "quat-from-unit-vec3": "/projects/prj-thx/node_modules/quat-from-unit-vec3/index.js"
    }],
    "/projects/prj-thx/node_modules/orbit-controls/lib/input.js": [function(e, t) {
        function n(e) {
            function t() {
                C || (C = !0,
                T && (g = r(j, function(e, t) {
                    T(t)
                }, !0)),
                S && (y.addEventListener("mousedown", p, !1),
                y.addEventListener("mousemove", h, !1),
                y.addEventListener("mouseup", f, !1)),
                (S || M) && (x = i(j),
                j.addEventListener("touchstart", s, !1),
                S && (j.addEventListener("touchmove", a, !1),
                x.on("place", u),
                x.on("lift", l)),
                M && x.on("change", d)))
            }
            function n() {
                C && (C = !1,
                g && j.removeEventListener("wheel", g),
                x && (x.disable(),
                j.removeEventListener("touchstart", s, !1),
                S && j.removeEventListener("touchmove", a, !1)),
                S && (y.removeEventListener("mousedown", p, !1),
                y.removeEventListener("mousemove", h, !1),
                y.removeEventListener("mouseup", f, !1)))
            }
            function s(e) {
                e.preventDefault()
            }
            function a(e) {
                if (_ && !c())
                    for (var t = 0; t < e.changedTouches.length; t++) {
                        var n = e.changedTouches[t]
                          , r = x.indexOfTouch(n)
                          , o = M ? -1 !== r : 0 === r;
                        if (o) {
                            h(n);
                            break
                        }
                    }
            }
            function u(e, t) {
                if (_ = !c()) {
                    var n = t || e;
                    p(n)
                }
            }
            function l(e, t) {
                _ = !c(),
                _ && t && o(t, j, b)
            }
            function c() {
                return x.pinching && M
            }
            function d(e, t) {
                M(e - t)
            }
            function p(e) {
                o(e, j, b),
                m(b) && (_ = !0)
            }
            function f() {
                _ = !1
            }
            function h(e) {
                var t = o(e, j, w);
                if (x && c())
                    return void (b = t);
                if (_) {
                    var n = v(E)
                      , r = (t[0] - b[0]) / n[0]
                      , i = (t[1] - b[1]) / n[1];
                    S(r, i),
                    b[0] = t[0],
                    b[1] = t[1]
                }
            }
            function m(e) {
                if (j === window || j === document || j === document.body)
                    return !0;
                var t = j.getBoundingClientRect();
                return e[0] >= 0 && e[1] >= 0 && e[0] < t.width && e[1] < t.height
            }
            function v(e) {
                var t = j;
                return (t === window || t === document || t === document.body) && (t = document.documentElement),
                e[0] = t.clientWidth,
                e[1] = t.clientHeight,
                e
            }
            var x, g, j = e.element || window, y = e.parent || j, b = [0, 0], _ = !1, w = [0, 0], E = [0, 0], T = e.zoom, S = e.rotate, M = e.pinch, C = !1;
            return t(),
            {
                enable: t,
                disable: n
            }
        }
        var r = e("mouse-wheel")
          , o = e("mouse-event-offset")
          , i = e("touch-pinch");
        t.exports = n
    }
    , {
        "mouse-event-offset": "/projects/prj-thx/node_modules/mouse-event-offset/index.js",
        "mouse-wheel": "/projects/prj-thx/node_modules/mouse-wheel/wheel.js",
        "touch-pinch": "/projects/prj-thx/node_modules/touch-pinch/index.js"
    }],
    "/projects/prj-thx/node_modules/own-enumerable-keys/index.js": [function(e, t) {
        function n(e) {
            var t = Object.getOwnPropertyNames(e);
            return Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(e))),
            t.filter(function(t) {
                return r.call(e, t)
            })
        }
        var r = Object.prototype.propertyIsEnumerable;
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/parse-headers/parse-headers.js": [function(e, t) {
        var n = e("trim")
          , r = e("for-each")
          , o = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        t.exports = function(e) {
            if (!e)
                return {};
            var t = {};
            return r(n(e).split("\n"), function(e) {
                var r = e.indexOf(":")
                  , i = n(e.slice(0, r)).toLowerCase()
                  , s = n(e.slice(r + 1));
                "undefined" == typeof t[i] ? t[i] = s : o(t[i]) ? t[i].push(s) : t[i] = [t[i], s]
            }),
            t
        }
    }
    , {
        "for-each": "/projects/prj-thx/node_modules/for-each/index.js",
        trim: "/projects/prj-thx/node_modules/trim/index.js"
    }],
    "/projects/prj-thx/node_modules/parse-unit/index.js": [function(e, t) {
        t.exports = function(e, t) {
            t || (t = [0, ""]),
            e = String(e);
            var n = parseFloat(e, 10);
            return t[0] = n,
            t[1] = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "",
            t
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/path-browserify/index.js": [function(e, t, n) {
        (function(e) {
            function t(e, t) {
                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                    var o = e[r];
                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1),
                    n++) : n && (e.splice(r, 1),
                    n--)
                }
                if (t)
                    for (; n--; n)
                        e.unshift("..");
                return e
            }
            function r(e, t) {
                if (e.filter)
                    return e.filter(t);
                for (var n = [], r = 0; r < e.length; r++)
                    t(e[r], r, e) && n.push(e[r]);
                return n
            }
            var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
              , i = function(e) {
                return o.exec(e).slice(1)
            };
            n.resolve = function() {
                for (var n = "", o = !1, i = arguments.length - 1; i >= -1 && !o; i--) {
                    var s = i >= 0 ? arguments[i] : e.cwd();
                    if ("string" != typeof s)
                        throw new TypeError("Arguments to path.resolve must be strings");
                    s && (n = s + "/" + n,
                    o = "/" === s.charAt(0))
                }
                return n = t(r(n.split("/"), function(e) {
                    return !!e
                }), !o).join("/"),
                (o ? "/" : "") + n || "."
            }
            ,
            n.normalize = function(e) {
                var o = n.isAbsolute(e)
                  , i = "/" === s(e, -1);
                return e = t(r(e.split("/"), function(e) {
                    return !!e
                }), !o).join("/"),
                e || o || (e = "."),
                e && i && (e += "/"),
                (o ? "/" : "") + e
            }
            ,
            n.isAbsolute = function(e) {
                return "/" === e.charAt(0)
            }
            ,
            n.join = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return n.normalize(r(e, function(e) {
                    if ("string" != typeof e)
                        throw new TypeError("Arguments to path.join must be strings");
                    return e
                }).join("/"))
            }
            ,
            n.relative = function(e, t) {
                function r(e) {
                    for (var t = 0; t < e.length && "" === e[t]; t++)
                        ;
                    for (var n = e.length - 1; n >= 0 && "" === e[n]; n--)
                        ;
                    return t > n ? [] : e.slice(t, n - t + 1)
                }
                e = n.resolve(e).substr(1),
                t = n.resolve(t).substr(1);
                for (var o = r(e.split("/")), i = r(t.split("/")), s = Math.min(o.length, i.length), a = s, u = 0; s > u; u++)
                    if (o[u] !== i[u]) {
                        a = u;
                        break
                    }
                for (var l = [], u = a; u < o.length; u++)
                    l.push("..");
                return l = l.concat(i.slice(a)),
                l.join("/")
            }
            ,
            n.sep = "/",
            n.delimiter = ":",
            n.dirname = function(e) {
                var t = i(e)
                  , n = t[0]
                  , r = t[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)),
                n + r) : "."
            }
            ,
            n.basename = function(e, t) {
                var n = i(e)[2];
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)),
                n
            }
            ,
            n.extname = function(e) {
                return i(e)[3]
            }
            ;
            var s = "b" === "ab".substr(-1) ? function(e, t, n) {
                return e.substr(t, n)
            }
            : function(e, t, n) {
                return 0 > t && (t = e.length + t),
                e.substr(t, n)
            }
        }
        ).call(this, e("_process"))
    }
    , {
        _process: "/projects/prj-thx/node_modules/process/browser.js"
    }],
    "/projects/prj-thx/node_modules/performance-now/lib/performance-now.js": [function(e, t) {
        (function(e) {
            (function() {
                var n, r, o;
                "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function() {
                    return performance.now()
                }
                : "undefined" != typeof e && null !== e && e.hrtime ? (t.exports = function() {
                    return (n() - o) / 1e6
                }
                ,
                r = e.hrtime,
                n = function() {
                    var e;
                    return e = r(),
                    1e9 * e[0] + e[1]
                }
                ,
                o = n()) : Date.now ? (t.exports = function() {
                    return Date.now() - o
                }
                ,
                o = Date.now()) : (t.exports = function() {
                    return (new Date).getTime() - o
                }
                ,
                o = (new Date).getTime())
            }
            ).call(this)
        }
        ).call(this, e("_process"))
    }
    , {
        _process: "/projects/prj-thx/node_modules/process/browser.js"
    }],
    "/projects/prj-thx/node_modules/prefix-style/index.js": [function(e, t) {
        var n = null
          , r = ["Webkit", "Moz", "O", "ms"];
        t.exports = function(e) {
            n || (n = document.createElement("div"));
            var t = n.style;
            if (e in t)
                return e;
            for (var o = e.charAt(0).toUpperCase() + e.slice(1), i = r.length; i >= 0; i--) {
                var s = r[i] + o;
                if (s in t)
                    return s
            }
            return !1
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/process/browser.js": [function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(e) {
            if (c === setTimeout)
                return setTimeout(e, 0);
            if ((c === n || !c) && setTimeout)
                return c = setTimeout,
                setTimeout(e, 0);
            try {
                return c(e, 0)
            } catch (t) {
                try {
                    return c.call(null, e, 0)
                } catch (t) {
                    return c.call(this, e, 0)
                }
            }
        }
        function i(e) {
            if (d === clearTimeout)
                return clearTimeout(e);
            if ((d === r || !d) && clearTimeout)
                return d = clearTimeout,
                clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }
        function s() {
            m && f && (m = !1,
            f.length ? h = f.concat(h) : v = -1,
            h.length && a())
        }
        function a() {
            if (!m) {
                var e = o(s);
                m = !0;
                for (var t = h.length; t; ) {
                    for (f = h,
                    h = []; ++v < t; )
                        f && f[v].run();
                    v = -1,
                    t = h.length
                }
                f = null,
                m = !1,
                i(e)
            }
        }
        function u(e, t) {
            this.fun = e,
            this.array = t
        }
        function l() {}
        var c, d, p = t.exports = {};
        !function() {
            try {
                c = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                c = n
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                d = r
            }
        }();
        var f, h = [], m = !1, v = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            h.push(new u(e,t)),
            1 !== h.length || m || o(a)
        }
        ,
        u.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        p.title = "browser",
        p.browser = !0,
        p.env = {},
        p.argv = [],
        p.version = "",
        p.versions = {},
        p.on = l,
        p.addListener = l,
        p.once = l,
        p.off = l,
        p.removeListener = l,
        p.removeAllListeners = l,
        p.emit = l,
        p.binding = function() {
            throw new Error("process.binding is not supported")
        }
        ,
        p.cwd = function() {
            return "/"
        }
        ,
        p.chdir = function() {
            throw new Error("process.chdir is not supported")
        }
        ,
        p.umask = function() {
            return 0
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/quat-from-unit-vec3/index.js": [function(e, t) {
        function n(e, t, n) {
            var l = r(t, n) + 1;
            return u > l ? (l = 0,
            Math.abs(t[0]) > Math.abs(t[2]) ? o(a, -t[1], t[0], 0) : o(a, 0, -t[2], t[1])) : s(a, t, n),
            e[0] = a[0],
            e[1] = a[1],
            e[2] = a[2],
            e[3] = l,
            i(e, e),
            e
        }
        var r = e("gl-vec3/dot")
          , o = e("gl-vec3/set")
          , i = e("gl-quat/normalize")
          , s = e("gl-vec3/cross")
          , a = [0, 0, 0]
          , u = 1e-6;
        t.exports = n
    }
    , {
        "gl-quat/normalize": "/projects/prj-thx/node_modules/gl-quat/normalize.js",
        "gl-vec3/cross": "/projects/prj-thx/node_modules/gl-vec3/cross.js",
        "gl-vec3/dot": "/projects/prj-thx/node_modules/gl-vec3/dot.js",
        "gl-vec3/set": "/projects/prj-thx/node_modules/gl-vec3/set.js"
    }],
    "/projects/prj-thx/node_modules/query-string/index.js": [function(e, t, n) {
        "use strict";
        function r(e, t) {
            return t.encode ? t.strict ? o(e) : encodeURIComponent(e) : e
        }
        var o = e("strict-uri-encode")
          , i = e("object-assign");
        n.extract = function(e) {
            return e.split("?")[1] || ""
        }
        ,
        n.parse = function(e) {
            var t = Object.create(null);
            return "string" != typeof e ? t : (e = e.trim().replace(/^(\?|#|&)/, "")) ? (e.split("&").forEach(function(e) {
                var n = e.replace(/\+/g, " ").split("=")
                  , r = n.shift()
                  , o = n.length > 0 ? n.join("=") : void 0;
                r = decodeURIComponent(r),
                o = void 0 === o ? null : decodeURIComponent(o),
                void 0 === t[r] ? t[r] = o : Array.isArray(t[r]) ? t[r].push(o) : t[r] = [t[r], o]
            }),
            t) : t
        }
        ,
        n.stringify = function(e, t) {
            var n = {
                encode: !0,
                strict: !0
            };
            return t = i(n, t),
            e ? Object.keys(e).sort().map(function(n) {
                var o = e[n];
                if (void 0 === o)
                    return "";
                if (null === o)
                    return r(n, t);
                if (Array.isArray(o)) {
                    var i = [];
                    return o.slice().forEach(function(e) {
                        void 0 !== e && i.push(null === e ? r(n, t) : r(n, t) + "=" + r(e, t))
                    }),
                    i.join("&")
                }
                return r(n, t) + "=" + r(o, t)
            }).filter(function(e) {
                return e.length > 0
            }).join("&") : ""
        }
    }
    , {
        "object-assign": "/projects/prj-thx/node_modules/object-assign/index.js",
        "strict-uri-encode": "/projects/prj-thx/node_modules/strict-uri-encode/index.js"
    }],
    "/projects/prj-thx/node_modules/raf-loop/index.js": [function(e, t) {
        function n(e) {
            return this instanceof n ? (this.running = !1,
            this.last = i(),
            this._frame = 0,
            this._tick = this.tick.bind(this),
            void (e && this.on("tick", e))) : new n(e)
        }
        var r = e("inherits")
          , o = e("events").EventEmitter
          , i = e("right-now")
          , s = e("raf");
        t.exports = n,
        r(n, o),
        n.prototype.start = function() {
            return this.running ? void 0 : (this.running = !0,
            this.last = i(),
            this._frame = s(this._tick),
            this)
        }
        ,
        n.prototype.stop = function() {
            return this.running = !1,
            0 !== this._frame && s.cancel(this._frame),
            this._frame = 0,
            this
        }
        ,
        n.prototype.tick = function() {
            this._frame = s(this._tick);
            var e = i()
              , t = e - this.last;
            this.emit("tick", t),
            this.last = e
        }
    }
    , {
        events: "/projects/prj-thx/node_modules/events/events.js",
        inherits: "/projects/prj-thx/node_modules/inherits/inherits_browser.js",
        raf: "/projects/prj-thx/node_modules/raf/index.js",
        "right-now": "/projects/prj-thx/node_modules/right-now/browser.js"
    }],
    "/projects/prj-thx/node_modules/raf/index.js": [function(e, t) {
        (function(n) {
            for (var r = e("performance-now"), o = "undefined" == typeof window ? n : window, i = ["moz", "webkit"], s = "AnimationFrame", a = o["request" + s], u = o["cancel" + s] || o["cancelRequest" + s], l = 0; !a && l < i.length; l++)
                a = o[i[l] + "Request" + s],
                u = o[i[l] + "Cancel" + s] || o[i[l] + "CancelRequest" + s];
            if (!a || !u) {
                var c = 0
                  , d = 0
                  , p = []
                  , f = 1e3 / 60;
                a = function(e) {
                    if (0 === p.length) {
                        var t = r()
                          , n = Math.max(0, f - (t - c));
                        c = n + t,
                        setTimeout(function() {
                            var e = p.slice(0);
                            p.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled)
                                    try {
                                        e[t].callback(c)
                                    } catch (n) {
                                        setTimeout(function() {
                                            throw n
                                        }, 0)
                                    }
                        }, Math.round(n))
                    }
                    return p.push({
                        handle: ++d,
                        callback: e,
                        cancelled: !1
                    }),
                    d
                }
                ,
                u = function(e) {
                    for (var t = 0; t < p.length; t++)
                        p[t].handle === e && (p[t].cancelled = !0)
                }
            }
            t.exports = function(e) {
                return a.call(o, e)
            }
            ,
            t.exports.cancel = function() {
                u.apply(o, arguments)
            }
            ,
            t.exports.polyfill = function() {
                o.requestAnimationFrame = a,
                o.cancelAnimationFrame = u
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "performance-now": "/projects/prj-thx/node_modules/performance-now/lib/performance-now.js"
    }],
    "/projects/prj-thx/node_modules/right-now/browser.js": [function(e, t) {
        (function(e) {
            t.exports = e.performance && e.performance.now ? function() {
                return performance.now()
            }
            : Date.now || function() {
                return +new Date
            }
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    "/projects/prj-thx/node_modules/seed-random/index.js": [function(e, t) {
        (function(e) {
            "use strict";
            function n(e) {
                var t, n = e.length, r = this, o = 0, i = r.i = r.j = 0, s = r.S = [];
                for (n || (e = [n++]); a > o; )
                    s[o] = o++;
                for (o = 0; a > o; o++)
                    s[o] = s[i = m & i + e[o % n] + (t = s[o])],
                    s[i] = t;
                (r.g = function(e) {
                    for (var t, n = 0, o = r.i, i = r.j, s = r.S; e--; )
                        t = s[o = m & o + 1],
                        n = n * a + s[m & (s[o] = s[i = m & i + t]) + (s[i] = t)];
                    return r.i = o,
                    r.j = i,
                    n
                }
                )(a)
            }
            function r(e, t) {
                var n, o = [], i = (typeof e)[0];
                if (t && "o" == i)
                    for (n in e)
                        try {
                            o.push(r(e[n], t - 1))
                        } catch (s) {}
                return o.length ? o : "s" == i ? e : e + "\x00"
            }
            function o(e, t) {
                for (var n, r = e + "", o = 0; o < r.length; )
                    t[m & o] = m & (n ^= 19 * t[m & o]) + r.charCodeAt(o++);
                return s(t)
            }
            function i(e) {
                try {
                    return d.crypto.getRandomValues(e = new Uint8Array(a)),
                    s(e)
                } catch (t) {
                    return [+new Date, d, d.navigator && d.navigator.plugins, d.screen, s(c)]
                }
            }
            function s(e) {
                return String.fromCharCode.apply(0, e)
            }
            var a = 256
              , u = 6
              , l = 52
              , c = []
              , d = "undefined" == typeof e ? window : e
              , p = Math.pow(a, u)
              , f = Math.pow(2, l)
              , h = 2 * f
              , m = a - 1
              , v = Math.random;
            t.exports = function(e, l) {
                if (l && l.global === !0)
                    return l.global = !1,
                    Math.random = t.exports(e, l),
                    l.global = !0,
                    Math.random;
                var d = l && l.entropy || !1
                  , m = []
                  , v = (o(r(d ? [e, s(c)] : 0 in arguments ? e : i(), 3), m),
                new n(m));
                return o(s(v.S), c),
                function() {
                    for (var e = v.g(u), t = p, n = 0; f > e; )
                        e = (e + n) * a,
                        t *= a,
                        n = v.g(1);
                    for (; e >= h; )
                        e /= 2,
                        t /= 2,
                        n >>>= 1;
                    return (e + n) / t
                }
            }
            ,
            t.exports.resetGlobal = function() {
                Math.random = v
            }
            ,
            o(Math.random(), c)
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    "/projects/prj-thx/node_modules/simplex-noise/simplex-noise.js": [function(e, t, n) {
        !function() {
            "use strict";
            function e(e) {
                e || (e = Math.random),
                this.p = new Uint8Array(256),
                this.perm = new Uint8Array(512),
                this.permMod12 = new Uint8Array(512);
                for (var t = 0; 256 > t; t++)
                    this.p[t] = 256 * e();
                for (t = 0; 512 > t; t++)
                    this.perm[t] = this.p[255 & t],
                    this.permMod12[t] = this.perm[t] % 12
            }
            var r = .5 * (Math.sqrt(3) - 1)
              , o = (3 - Math.sqrt(3)) / 6
              , i = 1 / 3
              , s = 1 / 6
              , a = (Math.sqrt(5) - 1) / 4
              , u = (5 - Math.sqrt(5)) / 20;
            e.prototype = {
                grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
                grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
                noise2D: function(e, t) {
                    var n, i, s = this.permMod12, a = this.perm, u = this.grad3, l = 0, c = 0, d = 0, p = (e + t) * r, f = Math.floor(e + p), h = Math.floor(t + p), m = (f + h) * o, v = f - m, x = h - m, g = e - v, j = t - x;
                    g > j ? (n = 1,
                    i = 0) : (n = 0,
                    i = 1);
                    var y = g - n + o
                      , b = j - i + o
                      , _ = g - 1 + 2 * o
                      , w = j - 1 + 2 * o
                      , E = 255 & f
                      , T = 255 & h
                      , S = .5 - g * g - j * j;
                    if (S >= 0) {
                        var M = 3 * s[E + a[T]];
                        S *= S,
                        l = S * S * (u[M] * g + u[M + 1] * j)
                    }
                    var C = .5 - y * y - b * b;
                    if (C >= 0) {
                        var A = 3 * s[E + n + a[T + i]];
                        C *= C,
                        c = C * C * (u[A] * y + u[A + 1] * b)
                    }
                    var R = .5 - _ * _ - w * w;
                    if (R >= 0) {
                        var D = 3 * s[E + 1 + a[T + 1]];
                        R *= R,
                        d = R * R * (u[D] * _ + u[D + 1] * w)
                    }
                    return 70 * (l + c + d)
                },
                noise3D: function(e, t, n) {
                    var r, o, a, u, l, c, d, p, f, h, m = this.permMod12, v = this.perm, x = this.grad3, g = (e + t + n) * i, j = Math.floor(e + g), y = Math.floor(t + g), b = Math.floor(n + g), _ = (j + y + b) * s, w = j - _, E = y - _, T = b - _, S = e - w, M = t - E, C = n - T;
                    S >= M ? M >= C ? (l = 1,
                    c = 0,
                    d = 0,
                    p = 1,
                    f = 1,
                    h = 0) : S >= C ? (l = 1,
                    c = 0,
                    d = 0,
                    p = 1,
                    f = 0,
                    h = 1) : (l = 0,
                    c = 0,
                    d = 1,
                    p = 1,
                    f = 0,
                    h = 1) : C > M ? (l = 0,
                    c = 0,
                    d = 1,
                    p = 0,
                    f = 1,
                    h = 1) : C > S ? (l = 0,
                    c = 1,
                    d = 0,
                    p = 0,
                    f = 1,
                    h = 1) : (l = 0,
                    c = 1,
                    d = 0,
                    p = 1,
                    f = 1,
                    h = 0);
                    var A = S - l + s
                      , R = M - c + s
                      , D = C - d + s
                      , L = S - p + 2 * s
                      , k = M - f + 2 * s
                      , I = C - h + 2 * s
                      , O = S - 1 + 3 * s
                      , P = M - 1 + 3 * s
                      , z = C - 1 + 3 * s
                      , q = 255 & j
                      , F = 255 & y
                      , H = 255 & b
                      , N = .6 - S * S - M * M - C * C;
                    if (0 > N)
                        r = 0;
                    else {
                        var U = 3 * m[q + v[F + v[H]]];
                        N *= N,
                        r = N * N * (x[U] * S + x[U + 1] * M + x[U + 2] * C)
                    }
                    var B = .6 - A * A - R * R - D * D;
                    if (0 > B)
                        o = 0;
                    else {
                        var V = 3 * m[q + l + v[F + c + v[H + d]]];
                        B *= B,
                        o = B * B * (x[V] * A + x[V + 1] * R + x[V + 2] * D)
                    }
                    var G = .6 - L * L - k * k - I * I;
                    if (0 > G)
                        a = 0;
                    else {
                        var W = 3 * m[q + p + v[F + f + v[H + h]]];
                        G *= G,
                        a = G * G * (x[W] * L + x[W + 1] * k + x[W + 2] * I)
                    }
                    var X = .6 - O * O - P * P - z * z;
                    if (0 > X)
                        u = 0;
                    else {
                        var Y = 3 * m[q + 1 + v[F + 1 + v[H + 1]]];
                        X *= X,
                        u = X * X * (x[Y] * O + x[Y + 1] * P + x[Y + 2] * z)
                    }
                    return 32 * (r + o + a + u)
                },
                noise4D: function(e, t, n, r) {
                    var o, i, s, l, c, d = (this.permMod12,
                    this.perm), p = this.grad4, f = (e + t + n + r) * a, h = Math.floor(e + f), m = Math.floor(t + f), v = Math.floor(n + f), x = Math.floor(r + f), g = (h + m + v + x) * u, j = h - g, y = m - g, b = v - g, _ = x - g, w = e - j, E = t - y, T = n - b, S = r - _, M = 0, C = 0, A = 0, R = 0;
                    w > E ? M++ : C++,
                    w > T ? M++ : A++,
                    w > S ? M++ : R++,
                    E > T ? C++ : A++,
                    E > S ? C++ : R++,
                    T > S ? A++ : R++;
                    var D, L, k, I, O, P, z, q, F, H, N, U;
                    D = M >= 3 ? 1 : 0,
                    L = C >= 3 ? 1 : 0,
                    k = A >= 3 ? 1 : 0,
                    I = R >= 3 ? 1 : 0,
                    O = M >= 2 ? 1 : 0,
                    P = C >= 2 ? 1 : 0,
                    z = A >= 2 ? 1 : 0,
                    q = R >= 2 ? 1 : 0,
                    F = M >= 1 ? 1 : 0,
                    H = C >= 1 ? 1 : 0,
                    N = A >= 1 ? 1 : 0,
                    U = R >= 1 ? 1 : 0;
                    var B = w - D + u
                      , V = E - L + u
                      , G = T - k + u
                      , W = S - I + u
                      , X = w - O + 2 * u
                      , Y = E - P + 2 * u
                      , Q = T - z + 2 * u
                      , K = S - q + 2 * u
                      , $ = w - F + 3 * u
                      , Z = E - H + 3 * u
                      , J = T - N + 3 * u
                      , ee = S - U + 3 * u
                      , te = w - 1 + 4 * u
                      , ne = E - 1 + 4 * u
                      , re = T - 1 + 4 * u
                      , oe = S - 1 + 4 * u
                      , ie = 255 & h
                      , se = 255 & m
                      , ae = 255 & v
                      , ue = 255 & x
                      , le = .6 - w * w - E * E - T * T - S * S;
                    if (0 > le)
                        o = 0;
                    else {
                        var ce = d[ie + d[se + d[ae + d[ue]]]] % 32 * 4;
                        le *= le,
                        o = le * le * (p[ce] * w + p[ce + 1] * E + p[ce + 2] * T + p[ce + 3] * S)
                    }
                    var de = .6 - B * B - V * V - G * G - W * W;
                    if (0 > de)
                        i = 0;
                    else {
                        var pe = d[ie + D + d[se + L + d[ae + k + d[ue + I]]]] % 32 * 4;
                        de *= de,
                        i = de * de * (p[pe] * B + p[pe + 1] * V + p[pe + 2] * G + p[pe + 3] * W)
                    }
                    var fe = .6 - X * X - Y * Y - Q * Q - K * K;
                    if (0 > fe)
                        s = 0;
                    else {
                        var he = d[ie + O + d[se + P + d[ae + z + d[ue + q]]]] % 32 * 4;
                        fe *= fe,
                        s = fe * fe * (p[he] * X + p[he + 1] * Y + p[he + 2] * Q + p[he + 3] * K)
                    }
                    var me = .6 - $ * $ - Z * Z - J * J - ee * ee;
                    if (0 > me)
                        l = 0;
                    else {
                        var ve = d[ie + F + d[se + H + d[ae + N + d[ue + U]]]] % 32 * 4;
                        me *= me,
                        l = me * me * (p[ve] * $ + p[ve + 1] * Z + p[ve + 2] * J + p[ve + 3] * ee)
                    }
                    var xe = .6 - te * te - ne * ne - re * re - oe * oe;
                    if (0 > xe)
                        c = 0;
                    else {
                        var ge = d[ie + 1 + d[se + 1 + d[ae + 1 + d[ue + 1]]]] % 32 * 4;
                        xe *= xe,
                        c = xe * xe * (p[ge] * te + p[ge + 1] * ne + p[ge + 2] * re + p[ge + 3] * oe)
                    }
                    return 27 * (o + i + s + l + c)
                }
            },
            "undefined" != typeof define && define.amd && define(function() {
                return e
            }),
            "undefined" != typeof n ? n.SimplexNoise = e : "undefined" != typeof window && (window.SimplexNoise = e),
            "undefined" != typeof t && (t.exports = e)
        }()
    }
    , {}],
    "/projects/prj-thx/node_modules/smoothstep/index.js": [function(e, t) {
        t.exports = function(e, t, n) {
            var r = Math.max(0, Math.min(1, (n - e) / (t - e)));
            return r * r * (3 - 2 * r)
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/soundbank-reverb/build-impulse.js": [function(e, t) {
        function n(e, t, n, u) {
            a += 1;
            var l = s[a] = {
                id: a,
                cb: u,
                length: e,
                decay: t,
                reverse: n,
                impulseL: new Float32Array(e),
                impulseR: new Float32Array(e)
            };
            return i.push([l.id, 0, Math.min(o, e)]),
            setTimeout(r, 1),
            a
        }
        function r() {
            var e = i.shift();
            if (e) {
                var t = s[e[0]];
                if (t) {
                    for (var n = t.length, a = t.decay, u = t.reverse, l = e[1], c = e[2], d = t.impulseL, p = t.impulseR, f = l; c > f; f++) {
                        var h = u ? n - f : f;
                        d[f] = (2 * Math.random() - 1) * Math.pow(1 - h / n, a),
                        p[f] = (2 * Math.random() - 1) * Math.pow(1 - h / n, a)
                    }
                    c >= n - 1 ? (delete s[e[0]],
                    t.cb([t.impulseL, t.impulseR])) : i.push([t.id, c, Math.min(c + o, n)])
                }
            }
            i.length && setTimeout(r, 5)
        }
        t.exports = n;
        var o = 2048
          , i = []
          , s = {}
          , a = 0;
        n.cancel = function(e) {
            return s[e] ? (delete s[e],
            !0) : !1
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/soundbank-reverb/index.js": [function(e, t) {
        function n(e) {
            var t = e.createGain()
              , n = t._dry = e.createGain()
              , r = t._wet = e.createGain()
              , i = t.output = e.createGain()
              , s = t._convolver = e.createConvolver()
              , a = t._filter = e.createBiquadFilter();
            return t.connect(n),
            t.connect(r),
            s.connect(a),
            n.connect(i),
            r.connect(s),
            a.connect(i),
            Object.defineProperties(t, o),
            t._time = 3,
            t._decay = 2,
            t._reverse = !1,
            t.cutoff.value = 2e4,
            t.filterType = "lowpass",
            t._building = !1,
            t._buildImpulse(),
            t
        }
        var r = e("./build-impulse");
        t.exports = n;
        var o = {
            connect: {
                value: function() {
                    this.output.connect.apply(this.output, arguments)
                }
            },
            disconnect: {
                value: function() {
                    this.output.disconnect.apply(this.output, arguments)
                }
            },
            wet: {
                get: function() {
                    return this._wet.gain
                }
            },
            dry: {
                get: function() {
                    return this._dry.gain
                }
            },
            cutoff: {
                get: function() {
                    return this._filter.frequency
                }
            },
            filterType: {
                get: function() {
                    return this._filter.type
                },
                set: function(e) {
                    this._filter.type = e
                }
            },
            _buildImpulse: {
                value: function() {
                    var e = this
                      , t = e.context.sampleRate
                      , n = Math.max(t * e.time, 1);
                    e._building && r.cancel(e._building),
                    e._building = r(n, e.decay, e.reverse, function(r) {
                        var o = e.context.createBuffer(2, n, t);
                        o.getChannelData(0).set(r[0]),
                        o.getChannelData(1).set(r[1]),
                        e._convolver.buffer = o,
                        e._building = !1
                    })
                }
            },
            time: {
                enumerable: !0,
                get: function() {
                    return this._time
                },
                set: function(e) {
                    this._time = e,
                    this._buildImpulse()
                }
            },
            decay: {
                enumerable: !0,
                get: function() {
                    return this._decay
                },
                set: function(e) {
                    this._decay = e,
                    this._buildImpulse()
                }
            },
            reverse: {
                enumerable: !0,
                get: function() {
                    return this._reverse
                },
                set: function(e) {
                    this._reverse = e,
                    this._buildImpulse()
                }
            }
        }
    }
    , {
        "./build-impulse": "/projects/prj-thx/node_modules/soundbank-reverb/build-impulse.js"
    }],
    "/projects/prj-thx/node_modules/strict-uri-encode/index.js": [function(e, t) {
        "use strict";
        t.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/three-buffer-vertex-data/index.js": [function(e, t) {
        function n(e, t, n, r) {
            "number" != typeof n && (n = 1),
            "string" != typeof r && (r = "uint16");
            var i = !e.index && "function" != typeof e.setIndex
              , s = i ? e.getAttribute("index") : e.index
              , a = o(s, t, n, r);
            a && (i ? e.addAttribute("index", a) : e.index = a)
        }
        function r(e, t, n, r, i) {
            if ("number" != typeof r && (r = 3),
            "string" != typeof i && (i = "float32"),
            Array.isArray(n) && Array.isArray(n[0]) && n[0].length !== r)
                throw new Error("Nested vertex array has unexpected size; expected " + r + " but found " + n[0].length);
            var s = e.getAttribute(t)
              , a = o(s, n, r, i);
            a && e.addAttribute(t, a)
        }
        function o(e, t, n, r) {
            if (t = t || [],
            !e || i(e, t, n)) {
                t = s(t, r);
                var o = e && "function" != typeof e.setArray;
                return (!e || o) && (o && !a && (a = !0,
                console.warn(["A WebGL buffer is being updated with a new size or itemSize, ", "however this version of ThreeJS only supports fixed-size buffers.", "\nThe old buffer may still be kept in memory.\n", "To avoid memory leaks, it is recommended that you dispose ", "your geometries and create new ones, or update to ThreeJS r82 or newer.\n", "See here for discussion:\n", "https://github.com/mrdoob/three.js/pull/9631"].join(""))),
                e = new THREE.BufferAttribute(t,n)),
                e.itemSize = n,
                e.needsUpdate = !0,
                "function" == typeof e.setArray && e.setArray(t),
                e
            }
            return s(t, e.array),
            e.needsUpdate = !0,
            null
        }
        function i(e, t, n) {
            if (e.itemSize !== n)
                return !0;
            if (!e.array)
                return !0;
            var r = e.array.length;
            return Array.isArray(t) && Array.isArray(t[0]) ? r !== t.length * n : r !== t.length
        }
        var s = e("flatten-vertex-data")
          , a = !1;
        t.exports.attr = r,
        t.exports.index = n
    }
    , {
        "flatten-vertex-data": "/projects/prj-thx/node_modules/flatten-vertex-data/index.js"
    }],
    "/projects/prj-thx/node_modules/three-copyshader/index.js": [function(e, t) {
        t.exports = {
            uniforms: {
                tDiffuse: {
                    type: "t",
                    value: null
                },
                opacity: {
                    type: "f",
                    value: 1
                }
            },
            vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
            fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/three-effectcomposer/lib/clearmaskpass.js": [function(e, t) {
        t.exports = function() {
            function e() {
                return this instanceof e ? void (this.enabled = !0) : new e(scene,camera)
            }
            return e.prototype = {
                render: function(e) {
                    var t = e.context;
                    t.disable(t.STENCIL_TEST)
                }
            },
            e
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/three-effectcomposer/lib/maskpass.js": [function(e, t) {
        t.exports = function() {
            function e(t, n) {
                return this instanceof e ? (this.scene = t,
                this.camera = n,
                this.enabled = !0,
                this.clear = !0,
                this.needsSwap = !1,
                void (this.inverse = !1)) : new e(t,n)
            }
            return e.prototype = {
                render: function(e, t, n) {
                    var r = e.context;
                    r.colorMask(!1, !1, !1, !1),
                    r.depthMask(!1);
                    var o, i;
                    this.inverse ? (o = 0,
                    i = 1) : (o = 1,
                    i = 0),
                    r.enable(r.STENCIL_TEST),
                    r.stencilOp(r.REPLACE, r.REPLACE, r.REPLACE),
                    r.stencilFunc(r.ALWAYS, o, 4294967295),
                    r.clearStencil(i),
                    e.render(this.scene, this.camera, n, this.clear),
                    e.render(this.scene, this.camera, t, this.clear),
                    r.colorMask(!0, !0, !0, !0),
                    r.depthMask(!0),
                    r.stencilFunc(r.EQUAL, 1, 4294967295),
                    r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
                }
            },
            e
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/three-effectcomposer/lib/renderpass.js": [function(e, t) {
        t.exports = function(e) {
            function t(n, r, o, i, s) {
                return this instanceof t ? (this.scene = n,
                this.camera = r,
                this.overrideMaterial = o,
                this.clearColor = i,
                this.clearAlpha = void 0 !== s ? s : 1,
                this.oldClearColor = new e.Color,
                this.oldClearAlpha = 1,
                this.enabled = !0,
                this.clear = !0,
                void (this.needsSwap = !1)) : new t(n,r,o,i,s)
            }
            return t.prototype = {
                render: function(e, t, n) {
                    this.scene.overrideMaterial = this.overrideMaterial,
                    this.clearColor && (this.oldClearColor.copy(e.getClearColor()),
                    this.oldClearAlpha = e.getClearAlpha(),
                    e.setClearColor(this.clearColor, this.clearAlpha)),
                    e.render(this.scene, this.camera, n, this.clear),
                    this.clearColor && e.setClearColor(this.oldClearColor, this.oldClearAlpha),
                    this.scene.overrideMaterial = null
                }
            },
            t
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/three-shader-fxaa/build/index.js": [function(e, t) {
        (function(e) {
            function n(t) {
                if ("undefined" == typeof e.THREE)
                    throw new TypeError("You must have THREE in global scope for this module.");
                return t = t || {},
                {
                    uniforms: {
                        tDiffuse: {
                            type: "t",
                            value: new THREE.Texture
                        },
                        resolution: {
                            type: "v2",
                            value: t.resolution || new THREE.Vector2
                        }
                    },
                    vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec2 resolution;\n\nvoid main() {\n  vUv = uv;\n  vec2 fragCoord = uv * resolution;\n  vec2 inverseVP = 1.0 / resolution.xy;\n  v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n  v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n  v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n  v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n  v_rgbM = vec2(fragCoord * inverseVP);\n\n  gl_Position = projectionMatrix *\n              modelViewMatrix *\n              vec4(position,1.0);\n}\n",
                    fragmentShader: '#define GLSLIFY 1\nvarying vec2 vUv;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n//make sure to have a resolution uniform set to the screen size\nuniform vec2 resolution;\nuniform sampler2D tDiffuse;\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa_1540259130(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n  vec2 fragCoord = vUv * resolution;   \n  gl_FragColor = fxaa_1540259130(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n'
                }
            }
            t.exports = n
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    "/projects/prj-thx/node_modules/to-camel-case/index.js": [function(e, t) {
        function n(e) {
            return r(e).replace(/\s(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        var r = e("to-space-case");
        t.exports = n
    }
    , {
        "to-space-case": "/projects/prj-thx/node_modules/to-space-case/index.js"
    }],
    "/projects/prj-thx/node_modules/to-no-case/index.js": [function(e, t) {
        function n(e) {
            return i.test(e) ? e.toLowerCase() : s.test(e) ? (r(e) || e).toLowerCase() : a.test(e) ? o(e).toLowerCase() : e.toLowerCase()
        }
        function r(e) {
            return e.replace(u, function(e, t) {
                return t ? " " + t : ""
            })
        }
        function o(e) {
            return e.replace(l, function(e, t, n) {
                return t + " " + n.toLowerCase().split("").join(" ")
            })
        }
        t.exports = n;
        var i = /\s/
          , s = /(_|-|\.|:)/
          , a = /([a-z][A-Z]|[A-Z][a-z])/
          , u = /[\W_]+(.|$)/g
          , l = /(.)([A-Z]+)/g
    }
    , {}],
    "/projects/prj-thx/node_modules/to-px/topx.js": [function(e, t) {
        "use strict";
        function n(e, t) {
            var n = i(getComputedStyle(e).getPropertyValue(t));
            return n[0] * o(n[1], e)
        }
        function r(e, t) {
            var r = document.createElement("div");
            r.style["font-size"] = "128" + e,
            t.appendChild(r);
            var o = n(r, "font-size") / 128;
            return t.removeChild(r),
            o
        }
        function o(e, t) {
            switch (t = t || document.body,
            e = (e || "px").trim().toLowerCase(),
            (t === window || t === document) && (t = document.body),
            e) {
            case "%":
                return t.clientHeight / 100;
            case "ch":
            case "ex":
                return r(e, t);
            case "em":
                return n(t, "font-size");
            case "rem":
                return n(document.body, "font-size");
            case "vw":
                return window.innerWidth / 100;
            case "vh":
                return window.innerHeight / 100;
            case "vmin":
                return Math.min(window.innerWidth, window.innerHeight) / 100;
            case "vmax":
                return Math.max(window.innerWidth, window.innerHeight) / 100;
            case "in":
                return s;
            case "cm":
                return s / 2.54;
            case "mm":
                return s / 25.4;
            case "pt":
                return s / 72;
            case "pc":
                return s / 6
            }
            return 1
        }
        var i = e("parse-unit");
        t.exports = o;
        var s = 96
    }
    , {
        "parse-unit": "/projects/prj-thx/node_modules/parse-unit/index.js"
    }],
    "/projects/prj-thx/node_modules/to-space-case/index.js": [function(e, t) {
        function n(e) {
            return r(e).replace(/[\W_]+(.|$)/g, function(e, t) {
                return t ? " " + t : ""
            }).trim()
        }
        var r = e("to-no-case");
        t.exports = n
    }
    , {
        "to-no-case": "/projects/prj-thx/node_modules/to-no-case/index.js"
    }],
    "/projects/prj-thx/node_modules/touch-pinch/index.js": [function(e, t) {
        function n(e) {
            function t(e) {
                for (var t = e.identifier, n = 0; n < h.length; n++)
                    if (h[n] && h[n].touch && h[n].touch.identifier === t)
                        return n;
                return -1
            }
            function n() {
                g || (g = !0,
                e.addEventListener("touchstart", l, !1),
                e.addEventListener("touchmove", c, !1),
                e.addEventListener("touchend", d, !1),
                e.addEventListener("touchcancel", d, !1))
            }
            function u() {
                g && (g = !1,
                e.removeEventListener("touchstart", l, !1),
                e.removeEventListener("touchmove", c, !1),
                e.removeEventListener("touchend", d, !1),
                e.removeEventListener("touchcancel", d, !1))
            }
            function l(n) {
                for (var o = 0; o < n.changedTouches.length; o++) {
                    var i = n.changedTouches[o]
                      , s = i.identifier
                      , u = t(s);
                    if (-1 === u && 2 > m) {
                        var l = 0 === m
                          , c = h[0] ? 1 : 0
                          , d = h[0] ? 0 : 1
                          , g = new r;
                        h[c] = g,
                        m++,
                        g.touch = i,
                        a(i, e, g.position);
                        var j = h[d] ? h[d].touch : void 0;
                        if (f.emit("place", i, j),
                        !l) {
                            var y = p();
                            x = !1,
                            f.emit("start", y),
                            v = y
                        }
                    }
                }
            }
            function c(n) {
                for (var r = !1, o = 0; o < n.changedTouches.length; o++) {
                    var i = n.changedTouches[o]
                      , s = t(i);
                    -1 !== s && (r = !0,
                    h[s].touch = i,
                    a(i, e, h[s].position))
                }
                if (2 === m && r) {
                    var u = p();
                    f.emit("change", u, v),
                    v = u
                }
            }
            function d(e) {
                for (var n = 0; n < e.changedTouches.length; n++) {
                    var r = e.changedTouches[n]
                      , o = t(r);
                    if (-1 !== o) {
                        h[o] = null,
                        m--;
                        var i = 0 === o ? 1 : 0
                          , s = h[i] ? h[i].touch : void 0;
                        f.emit("lift", r, s)
                    }
                }
                x || 2 === m || (x = !0,
                f.emit("end"))
            }
            function p() {
                return 2 > m ? 0 : o(h[0].position, h[1].position)
            }
            e = e || window;
            var f = new i
              , h = [null, null]
              , m = 0
              , v = 0
              , x = !1
              , g = !1;
            return Object.defineProperties(f, {
                pinching: s(function() {
                    return 2 === m
                }),
                fingers: s(function() {
                    return h
                })
            }),
            n(),
            f.enable = n,
            f.disable = u,
            f.indexOfTouch = t,
            f
        }
        function r() {
            this.position = [0, 0],
            this.touch = null
        }
        var o = e("gl-vec2/distance")
          , i = e("events").EventEmitter
          , s = e("dprop")
          , a = e("mouse-event-offset");
        t.exports = n
    }
    , {
        dprop: "/projects/prj-thx/node_modules/dprop/index.js",
        events: "/projects/prj-thx/node_modules/events/events.js",
        "gl-vec2/distance": "/projects/prj-thx/node_modules/gl-vec2/distance.js",
        "mouse-event-offset": "/projects/prj-thx/node_modules/mouse-event-offset/index.js"
    }],
    "/projects/prj-thx/node_modules/touches/index.js": [function(e, t) {
        function n(e, t) {
            var n = e.clientX || 0
              , r = e.clientY || 0
              , o = a(t);
            return [n - o.left, r - o.top]
        }
        function r(e, t) {
            return Array.prototype.slice.call(e).filter(function(e) {
                return e.target === t
            })[0] || e[0]
        }
        function o(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n].identifier === t)
                    return e[n];
            return null
        }
        function i(e, t) {
            return function(n) {
                t ? e.addEventListener(n.type, n.listener) : e.removeEventListener(n.type, n.listener)
            }
        }
        function s(e) {
            return e.replace(/^(touch|mouse)/, "").replace(/up$/, "end").replace(/down$/, "start")
        }
        function a(e) {
            return e === window || e === document || e === document.body ? c : e.getBoundingClientRect()
        }
        var u = e("events/")
          , l = ["touchstart", "touchmove", "touchend", "touchcancel", "mousedown", "mousemove", "mouseup"]
          , c = {
            left: 0,
            top: 0
        };
        t.exports = function(e, t) {
            function a(e, t) {
                var n;
                return d && /^touch(end|cancel)/.test(t) ? (n = o(e.changedTouches, d.identifier || 0),
                n && (d = null)) : !d && /^touchstart/.test(t) ? d = n = r(e.changedTouches, c.target) : d && (n = o(e.changedTouches, d.identifier || 0)),
                n
            }
            t = t || {},
            e = e || window;
            var c = new u;
            c.target = t.target || e;
            var d = null
              , p = t.filtered
              , f = l;
            "string" == typeof t.type && (f = l.filter(function(e) {
                return 0 === e.indexOf(t.type)
            }));
            var h = f.map(function(e) {
                var o = s(e)
                  , i = function(i) {
                    var s = i;
                    if (/^touch/.test(e) && (/^touchend$/.test(e) && t.preventSimulated !== !1 && i.preventDefault(),
                    s = p ? a(i, e) : r(i.changedTouches, c.target)),
                    s) {
                        var u = n(s, c.target);
                        c.emit(o, i, u)
                    }
                };
                return {
                    type: e,
                    listener: i
                }
            });
            return c.enable = function() {
                return h.forEach(i(e, !0)),
                c
            }
            ,
            c.disable = function() {
                return h.forEach(i(e, !1)),
                c
            }
            ,
            c.enable(),
            c
        }
    }
    , {
        "events/": "/projects/prj-thx/node_modules/events/events.js"
    }],
    "/projects/prj-thx/node_modules/trim/index.js": [function(e, t, n) {
        function r(e) {
            return e.replace(/^\s*|\s*$/g, "")
        }
        n = t.exports = r,
        n.left = function(e) {
            return e.replace(/^\s*/, "")
        }
        ,
        n.right = function(e) {
            return e.replace(/\s*$/, "")
        }
    }
    , {}],
    "/projects/prj-thx/node_modules/tween-base/index.js": [function(e, t) {
        function n(e) {
            s.call(this),
            this.duration = e && e.duration || 0,
            this.delay = e && e.delay || 0,
            this.time = 0,
            this.ease = e && e.ease,
            this.active = !0,
            this.enabled = !0,
            this.cancelling = !1,
            this._started = !1
        }
        function r(e, t) {
            return "function" == typeof e.ease ? e.ease(t) : i(t)
        }
        var o = function() {}
          , i = e("eases/linear")
          , s = e("events").EventEmitter
          , a = e("inherits");
        a(n, s),
        n.prototype.lerp = o,
        n.prototype.ready = o,
        n.prototype.cancel = function() {
            return this.cancelling = !0,
            this
        }
        ,
        n.prototype.tick = function(e, t) {
            if (t = "function" == typeof t ? t : r,
            this.cancelling && this.active && (this.active = !1,
            this.emit("cancelling", this),
            this.emit("complete", this)),
            this.active && this.enabled) {
                {
                    this.time
                }
                this.time += e;
                var n = (this.time - this.delay) / this.duration;
                this.time - this.delay > 0 && (this._started || (this._started = !0,
                this.ready(),
                this.emit("start", this)),
                0 > n ? n = 0 : n > 1 && (n = 1),
                n = t(this, n),
                this.lerp(n),
                this.emit("update", this)),
                this.time >= this.duration + this.delay && (this.active = !1,
                this.emit("complete", this))
            }
        }
        ,
        t.exports = n
    }
    , {
        "eases/linear": "/projects/prj-thx/node_modules/eases/linear.js",
        events: "/projects/prj-thx/node_modules/events/events.js",
        inherits: "/projects/prj-thx/node_modules/inherits/inherits_browser.js"
    }],
    "/projects/prj-thx/node_modules/tween-objects/index.js": [function(e, t) {
        var n = e("./lib/object")
          , r = e("./lib/group");
        t.exports = function(e, t) {
            var o = Array.isArray(e) ? new r(e,t) : new n(e,t);
            return o
        }
    }
    , {
        "./lib/group": "/projects/prj-thx/node_modules/tween-objects/lib/group.js",
        "./lib/object": "/projects/prj-thx/node_modules/tween-objects/lib/object.js"
    }],
    "/projects/prj-thx/node_modules/tween-objects/lib/end-target.js": [function(e, t) {
        var n = e("tween-base")
          , r = e("an-array")
          , o = e("own-enumerable-keys")
          , i = o(new n);
        t.exports = function(e, t) {
            var n = []
              , s = o(t);
            for (var a in t)
                if (s.indexOf(a) >= 0 && a in e && -1 === i.indexOf(a)) {
                    var u = e[a]
                      , l = t[a];
                    "number" == typeof u && "number" == typeof l ? n.push({
                        key: a,
                        start: u,
                        end: l
                    }) : r(u) && r(l) && n.push({
                        key: a,
                        start: u.slice(),
                        end: l.slice()
                    })
                }
            return n
        }
    }
    , {
        "an-array": "/projects/prj-thx/node_modules/an-array/index.js",
        "own-enumerable-keys": "/projects/prj-thx/node_modules/own-enumerable-keys/index.js",
        "tween-base": "/projects/prj-thx/node_modules/tween-base/index.js"
    }],
    "/projects/prj-thx/node_modules/tween-objects/lib/group.js": [function(e, t) {
        function n(e, t) {
            i.call(this, t),
            this.target = e,
            this.end = [],
            this._options = t
        }
        var r = e("inherits")
          , o = e("lerp-array")
          , i = e("tween-base")
          , s = e("./end-target");
        r(n, i),
        n.prototype.ready = function() {
            this.end = this.target.map(function(e) {
                return s(e, this._options)
            }, this)
        }
        ,
        n.prototype.lerp = function(e) {
            for (var t = 0; t < this.end.length; t++)
                for (var n = this.end[t], r = this.target[t], i = 0; i < n.length; i++) {
                    var s = n[i]
                      , a = s.key;
                    r[a] = o(s.start, s.end, e, r[a])
                }
        }
        ,
        t.exports = n
    }
    , {
        "./end-target": "/projects/prj-thx/node_modules/tween-objects/lib/end-target.js",
        inherits: "/projects/prj-thx/node_modules/inherits/inherits_browser.js",
        "lerp-array": "/projects/prj-thx/node_modules/lerp-array/index.js",
        "tween-base": "/projects/prj-thx/node_modules/tween-base/index.js"
    }],
    "/projects/prj-thx/node_modules/tween-objects/lib/object.js": [function(e, t) {
        function n(e, t) {
            i.call(this, t),
            this.target = e,
            this.endings = void 0,
            this._options = t
        }
        var r = e("inherits")
          , o = e("lerp-array")
          , i = e("tween-base")
          , s = e("./end-target");
        r(n, i),
        n.prototype.ready = function() {
            this.endings = s(this.target, this._options)
        }
        ,
        n.prototype.lerp = function(e) {
            for (var t = 0; t < this.endings.length; t++) {
                var n = this.endings[t]
                  , r = n.key;
                this.target[r] = o(n.start, n.end, e, this.target[r])
            }
        }
        ,
        t.exports = n
    }
    , {
        "./end-target": "/projects/prj-thx/node_modules/tween-objects/lib/end-target.js",
        inherits: "/projects/prj-thx/node_modules/inherits/inherits_browser.js",
        "lerp-array": "/projects/prj-thx/node_modules/lerp-array/index.js",
        "tween-base": "/projects/prj-thx/node_modules/tween-base/index.js"
    }],
    "/projects/prj-thx/node_modules/tween-ticker/index.js": [function(e, t) {
        function n(e) {
            return this instanceof n ? (e = e || {},
            this.stack = [],
            this.defaultEase = e.defaultEase || i,
            this.eases = e.eases || {},
            void (this._applyEase = this.ease.bind(this))) : new n(e)
        }
        function r(e) {
            return "function" == typeof e.tick && "function" == typeof e.cancel
        }
        function o(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                "function" == typeof n.sync && n.sync()
            }
        }
        var i = e("eases/linear")
          , s = e("tween-objects")
          , a = e("tween-base");
        n.prototype.cancel = function() {
            for (var e = 0; e < this.stack.length; e++) {
                var t = this.stack[e];
                t.cancel(),
                t.tick(0)
            }
            return this.stack.length = 0,
            this
        }
        ,
        n.prototype.clear = n.prototype.cancel,
        n.prototype.to = function(e, t) {
            var n = e;
            if (t && "object" == typeof t)
                n = s(e, t);
            else if (e || t) {
                if (!r(n))
                    throw new Error("must provide options or a tween object")
            } else
                n = new a;
            return this.push(n)
        }
        ,
        n.prototype.push = function(e) {
            return this.stack.push(e),
            e
        }
        ,
        n.prototype.tick = function(e, t) {
            t = "function" == typeof t ? t : this._applyEase,
            e = "number" == typeof e ? e : 1 / 60;
            for (var n = 0; n < this.stack.length; n++)
                this.stack[n].tick(e, t);
            for (o(this.stack),
            n = this.stack.length - 1; n >= 0; n--)
                this.stack[n].active || this.stack.splice(n, 1)
        }
        ,
        n.prototype.ease = function(e, t) {
            var n = e.ease || this.defaultEase;
            return "string" == typeof n && (n = this.eases[n]),
            "function" != typeof n && (n = i),
            n(t)
        }
        ,
        t.exports = n
    }
    , {
        "eases/linear": "/projects/prj-thx/node_modules/eases/linear.js",
        "tween-base": "/projects/prj-thx/node_modules/tween-base/index.js",
        "tween-objects": "/projects/prj-thx/node_modules/tween-objects/index.js"
    }],
    "/projects/prj-thx/node_modules/tweenr/index.js": [function(e, t) {
        function n(e) {
            return this instanceof n ? (i.call(this, r(c, e)),
            s.call(this),
            this.timeScale = 1,
            this._handleTick = function(e) {
                e = Math.min(30, e),
                e /= 1e3,
                e *= this.timeScale,
                this.emit("tick", e),
                this.tick(e)
            }
            .bind(this),
            void l.on("tick", this._handleTick)) : new n(e)
        }
        var r = e("xtend")
          , o = e("eases")
          , i = e("tween-ticker")
          , s = e("events").EventEmitter
          , a = e("inherits")
          , u = e("mixes")
          , l = e("./loop")
          , c = {
            eases: o
        };
        t.exports = n,
        a(n, i),
        u(n, s.prototype),
        n.prototype.dispose = function() {
            l.removeListener("tick", this._handleTick)
        }
    }
    , {
        "./loop": "/projects/prj-thx/node_modules/tweenr/loop.js",
        eases: "/projects/prj-thx/node_modules/eases/index.js",
        events: "/projects/prj-thx/node_modules/events/events.js",
        inherits: "/projects/prj-thx/node_modules/inherits/inherits_browser.js",
        mixes: "/projects/prj-thx/node_modules/mixes/index.js",
        "tween-ticker": "/projects/prj-thx/node_modules/tween-ticker/index.js",
        xtend: "/projects/prj-thx/node_modules/xtend/immutable.js"
    }],
    "/projects/prj-thx/node_modules/tweenr/loop.js": [function(e, t) {
        var n = e("raf-loop")();
        n.setMaxListeners(1 / 0),
        n.start(),
        t.exports = n
    }
    , {
        "raf-loop": "/projects/prj-thx/node_modules/raf-loop/index.js"
    }],
    "/projects/prj-thx/node_modules/wrappy/wrappy.js": [function(e, t) {
        function n(e, t) {
            function r() {
                for (var t = new Array(arguments.length), n = 0; n < t.length; n++)
                    t[n] = arguments[n];
                var r = e.apply(this, t)
                  , o = t[t.length - 1];
                return "function" == typeof r && r !== o && Object.keys(o).forEach(function(e) {
                    r[e] = o[e]
                }),
                r
            }
            if (e && t)
                return n(e)(t);
            if ("function" != typeof e)
                throw new TypeError("need wrapper function");
            return Object.keys(e).forEach(function(t) {
                r[t] = e[t]
            }),
            r
        }
        t.exports = n
    }
    , {}],
    "/projects/prj-thx/node_modules/xhr/index.js": [function(e, t) {
        "use strict";
        function n(e, t) {
            for (var n = 0; n < e.length; n++)
                t(e[n])
        }
        function r(e) {
            for (var t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }
        function o(e, t, n) {
            var r = e;
            return c(t) ? (n = t,
            "string" == typeof e && (r = {
                uri: e
            })) : r = p(t, {
                uri: e
            }),
            r.callback = n,
            r
        }
        function i(e, t, n) {
            return t = o(e, t, n),
            s(t)
        }
        function s(e) {
            function t() {
                4 === p.readyState && s()
            }
            function n() {
                var e = void 0;
                if (e = p.response ? p.response : p.responseText || a(p),
                b)
                    try {
                        e = JSON.parse(e)
                    } catch (t) {}
                return e
            }
            function o(e) {
                return clearTimeout(m),
                e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))),
                e.statusCode = 0,
                l(e, c)
            }
            function s() {
                if (!h) {
                    var t;
                    clearTimeout(m),
                    t = e.useXDR && void 0 === p.status ? 200 : 1223 === p.status ? 204 : p.status;
                    var r = c
                      , o = null;
                    return 0 !== t ? (r = {
                        body: n(),
                        statusCode: t,
                        method: x,
                        headers: {},
                        url: v,
                        rawRequest: p
                    },
                    p.getAllResponseHeaders && (r.headers = d(p.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"),
                    l(o, r, r.body)
                }
            }
            if ("undefined" == typeof e.callback)
                throw new Error("callback argument missing");
            var u = !1
              , l = function(t, n, r) {
                u || (u = !0,
                e.callback(t, n, r))
            }
              , c = {
                body: void 0,
                headers: {},
                statusCode: 0,
                method: x,
                url: v,
                rawRequest: p
            }
              , p = e.xhr || null;
            p || (p = e.cors || e.useXDR ? new i.XDomainRequest : new i.XMLHttpRequest);
            var f, h, m, v = p.url = e.uri || e.url, x = p.method = e.method || "GET", g = e.body || e.data || null, j = p.headers = e.headers || {}, y = !!e.sync, b = !1;
            if ("json"in e && e.json !== !1 && (b = !0,
            j.accept || j.Accept || (j.Accept = "application/json"),
            "GET" !== x && "HEAD" !== x && (j["content-type"] || j["Content-Type"] || (j["Content-Type"] = "application/json"),
            g = JSON.stringify(e.json === !0 ? g : e.json))),
            p.onreadystatechange = t,
            p.onload = s,
            p.onerror = o,
            p.onprogress = function() {}
            ,
            p.onabort = function() {
                h = !0
            }
            ,
            p.ontimeout = o,
            p.open(x, v, !y, e.username, e.password),
            y || (p.withCredentials = !!e.withCredentials),
            !y && e.timeout > 0 && (m = setTimeout(function() {
                if (!h) {
                    h = !0,
                    p.abort("timeout");
                    var e = new Error("XMLHttpRequest timeout");
                    e.code = "ETIMEDOUT",
                    o(e)
                }
            }, e.timeout)),
            p.setRequestHeader)
                for (f in j)
                    j.hasOwnProperty(f) && p.setRequestHeader(f, j[f]);
            else if (e.headers && !r(e.headers))
                throw new Error("Headers cannot be set on an XDomainRequest object");
            return "responseType"in e && (p.responseType = e.responseType),
            "beforeSend"in e && "function" == typeof e.beforeSend && e.beforeSend(p),
            p.send(g),
            p
        }
        function a(e) {
            if ("document" === e.responseType)
                return e.responseXML;
            var t = 204 === e.status && e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
            return "" !== e.responseType || t ? null : e.responseXML
        }
        function u() {}
        var l = e("global/window")
          , c = e("is-function")
          , d = e("parse-headers")
          , p = e("xtend");
        t.exports = i,
        i.XMLHttpRequest = l.XMLHttpRequest || u,
        i.XDomainRequest = "withCredentials"in new i.XMLHttpRequest ? i.XMLHttpRequest : l.XDomainRequest,
        n(["get", "put", "post", "patch", "head", "delete"], function(e) {
            i["delete" === e ? "del" : e] = function(t, n, r) {
                return n = o(t, n, r),
                n.method = e.toUpperCase(),
                s(n)
            }
        })
    }
    , {
        "global/window": "/projects/prj-thx/node_modules/global/window.js",
        "is-function": "/projects/prj-thx/node_modules/is-function/index.js",
        "parse-headers": "/projects/prj-thx/node_modules/parse-headers/parse-headers.js",
        xtend: "/projects/prj-thx/node_modules/xtend/immutable.js"
    }],
    "/projects/prj-thx/node_modules/xtend/immutable.js": [function(e, t) {
        function n() {
            for (var e = {}, t = 0; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                    r.call(n, o) && (e[o] = n[o])
            }
            return e
        }
        t.exports = n;
        var r = Object.prototype.hasOwnProperty
    }
    , {}]
}, {}, ["/projects/prj-thx/index.js"]);
