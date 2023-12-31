!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.THREE = e.THREE || {})
}(this, function(e) {
    "use strict";
    function t() {}
    function i(e, t) {
        this.x = e || 0,
        this.y = t || 0
    }
    function n(e, t, r, a, o, s, c, h, l, u) {
        Object.defineProperty(this, "id", {
            value: Qo++
        }),
        this.uuid = Jo.generateUUID(),
        this.name = "",
        this.image = void 0 !== e ? e : n.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== t ? t : n.DEFAULT_MAPPING,
        this.wrapS = void 0 !== r ? r : Va,
        this.wrapT = void 0 !== a ? a : Va,
        this.magFilter = void 0 !== o ? o : qa,
        this.minFilter = void 0 !== s ? s : Ja,
        this.anisotropy = void 0 !== l ? l : 1,
        this.format = void 0 !== c ? c : po,
        this.type = void 0 !== h ? h : Ka,
        this.offset = new i(0,0),
        this.repeat = new i(1,1),
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = void 0 !== u ? u : Go,
        this.version = 0,
        this.onUpdate = null
    }
    function r(e, t, i, n) {
        this.x = e || 0,
        this.y = t || 0,
        this.z = i || 0,
        this.w = void 0 !== n ? n : 1
    }
    function a(e, t, i) {
        this.uuid = Jo.generateUUID(),
        this.width = e,
        this.height = t,
        this.scissor = new r(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new r(0,0,e,t),
        i = i || {},
        void 0 === i.minFilter && (i.minFilter = qa),
        this.texture = new n(void 0,void 0,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
        this.depthBuffer = void 0 !== i.depthBuffer ? i.depthBuffer : !0,
        this.stencilBuffer = void 0 !== i.stencilBuffer ? i.stencilBuffer : !0,
        this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }
    function o(e, t, i) {
        a.call(this, e, t, i),
        this.activeCubeFace = 0,
        this.activeMipMapLevel = 0
    }
    function s(e, t, i, n) {
        this._x = e || 0,
        this._y = t || 0,
        this._z = i || 0,
        this._w = void 0 !== n ? n : 1
    }
    function c(e, t, i) {
        this.x = e || 0,
        this.y = t || 0,
        this.z = i || 0
    }
    function h() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    function l(e, t, i, r, a, o, s, c, h, l) {
        e = void 0 !== e ? e : [],
        t = void 0 !== t ? t : Ua,
        n.call(this, e, t, i, r, a, o, s, c, h, l),
        this.flipY = !1
    }
    function u() {
        this.seq = [],
        this.map = {}
    }
    function p(e, t, i) {
        var n = e[0];
        if (0 >= n || n > 0)
            return e;
        var r = t * i
          , a = es[r];
        if (void 0 === a && (a = new Float32Array(r),
        es[r] = a),
        0 !== t) {
            n.toArray(a, 0);
            for (var o = 1, s = 0; o !== t; ++o)
                s += i,
                e[o].toArray(a, s)
        }
        return a
    }
    function d(e, t) {
        var i = ts[t];
        void 0 === i && (i = new Int32Array(t),
        ts[t] = i);
        for (var n = 0; n !== t; ++n)
            i[n] = e.allocTextureUnit();
        return i
    }
    function f(e, t) {
        e.uniform1f(this.addr, t)
    }
    function m(e, t) {
        e.uniform1i(this.addr, t)
    }
    function g(e, t) {
        void 0 === t.x ? e.uniform2fv(this.addr, t) : e.uniform2f(this.addr, t.x, t.y)
    }
    function v(e, t) {
        void 0 !== t.x ? e.uniform3f(this.addr, t.x, t.y, t.z) : void 0 !== t.r ? e.uniform3f(this.addr, t.r, t.g, t.b) : e.uniform3fv(this.addr, t)
    }
    function y(e, t) {
        void 0 === t.x ? e.uniform4fv(this.addr, t) : e.uniform4f(this.addr, t.x, t.y, t.z, t.w)
    }
    function x(e, t) {
        e.uniformMatrix2fv(this.addr, !1, t.elements || t)
    }
    function b(e, t) {
        e.uniformMatrix3fv(this.addr, !1, t.elements || t)
    }
    function _(e, t) {
        e.uniformMatrix4fv(this.addr, !1, t.elements || t)
    }
    function w(e, t, i) {
        var n = i.allocTextureUnit();
        e.uniform1i(this.addr, n),
        i.setTexture2D(t || Ko, n)
    }
    function M(e, t, i) {
        var n = i.allocTextureUnit();
        e.uniform1i(this.addr, n),
        i.setTextureCube(t || $o, n)
    }
    function E(e, t) {
        e.uniform2iv(this.addr, t)
    }
    function T(e, t) {
        e.uniform3iv(this.addr, t)
    }
    function S(e, t) {
        e.uniform4iv(this.addr, t)
    }
    function A(e) {
        switch (e) {
        case 5126:
            return f;
        case 35664:
            return g;
        case 35665:
            return v;
        case 35666:
            return y;
        case 35674:
            return x;
        case 35675:
            return b;
        case 35676:
            return _;
        case 35678:
            return w;
        case 35680:
            return M;
        case 5124:
        case 35670:
            return m;
        case 35667:
        case 35671:
            return E;
        case 35668:
        case 35672:
            return T;
        case 35669:
        case 35673:
            return S
        }
    }
    function L(e, t) {
        e.uniform1fv(this.addr, t)
    }
    function R(e, t) {
        e.uniform1iv(this.addr, t)
    }
    function P(e, t) {
        e.uniform2fv(this.addr, p(t, this.size, 2))
    }
    function C(e, t) {
        e.uniform3fv(this.addr, p(t, this.size, 3))
    }
    function I(e, t) {
        e.uniform4fv(this.addr, p(t, this.size, 4))
    }
    function U(e, t) {
        e.uniformMatrix2fv(this.addr, !1, p(t, this.size, 4))
    }
    function D(e, t) {
        e.uniformMatrix3fv(this.addr, !1, p(t, this.size, 9))
    }
    function N(e, t) {
        e.uniformMatrix4fv(this.addr, !1, p(t, this.size, 16))
    }
    function O(e, t, i) {
        var n = t.length
          , r = d(i, n);
        e.uniform1iv(this.addr, r);
        for (var a = 0; a !== n; ++a)
            i.setTexture2D(t[a] || Ko, r[a])
    }
    function F(e, t, i) {
        var n = t.length
          , r = d(i, n);
        e.uniform1iv(this.addr, r);
        for (var a = 0; a !== n; ++a)
            i.setTextureCube(t[a] || $o, r[a])
    }
    function z(e) {
        switch (e) {
        case 5126:
            return L;
        case 35664:
            return P;
        case 35665:
            return C;
        case 35666:
            return I;
        case 35674:
            return U;
        case 35675:
            return D;
        case 35676:
            return N;
        case 35678:
            return O;
        case 35680:
            return F;
        case 5124:
        case 35670:
            return R;
        case 35667:
        case 35671:
            return E;
        case 35668:
        case 35672:
            return T;
        case 35669:
        case 35673:
            return S
        }
    }
    function B(e, t, i) {
        this.id = e,
        this.addr = i,
        this.setValue = A(t.type)
    }
    function G(e, t, i) {
        this.id = e,
        this.addr = i,
        this.size = t.size,
        this.setValue = z(t.type)
    }
    function H(e) {
        this.id = e,
        u.call(this)
    }
    function V(e, t) {
        e.seq.push(t),
        e.map[t.id] = t
    }
    function k(e, t, i) {
        var n = e.name
          , r = n.length;
        for (is.lastIndex = 0; ; ) {
            var a = is.exec(n)
              , o = is.lastIndex
              , s = a[1]
              , c = "]" === a[2]
              , h = a[3];
            if (c && (s = 0 | s),
            void 0 === h || "[" === h && o + 2 === r) {
                V(i, void 0 === h ? new B(s,e,t) : new G(s,e,t));
                break
            }
            var l = i.map
              , u = l[s];
            void 0 === u && (u = new H(s),
            V(i, u)),
            i = u
        }
    }
    function j(e, t, i) {
        u.call(this),
        this.renderer = i;
        for (var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), r = 0; r !== n; ++r) {
            var a = e.getActiveUniform(t, r)
              , o = a.name
              , s = e.getUniformLocation(t, o);
            k(a, s, this)
        }
    }
    function W(e, t, i) {
        return void 0 === t && void 0 === i ? this.set(e) : this.setRGB(e, t, i)
    }
    function X(e, t, i, r, a, o, s, c, h, l, u, p) {
        n.call(this, null, o, s, c, h, l, r, a, u, p),
        this.image = {
            data: e,
            width: t,
            height: i
        },
        this.magFilter = void 0 !== h ? h : Wa,
        this.minFilter = void 0 !== l ? l : Wa,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
    function Y(e, t) {
        this.min = void 0 !== e ? e : new i(+(1 / 0),+(1 / 0)),
        this.max = void 0 !== t ? t : new i(-(1 / 0),-(1 / 0))
    }
    function q(e, t) {
        function n() {
            var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
              , t = new Uint16Array([0, 1, 2, 0, 2, 3]);
            a = f.createBuffer(),
            o = f.createBuffer(),
            f.bindBuffer(f.ARRAY_BUFFER, a),
            f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW),
            f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o),
            f.bufferData(f.ELEMENT_ARRAY_BUFFER, t, f.STATIC_DRAW),
            p = f.createTexture(),
            d = f.createTexture(),
            m.bindTexture(f.TEXTURE_2D, p),
            f.texImage2D(f.TEXTURE_2D, 0, f.RGB, 16, 16, 0, f.RGB, f.UNSIGNED_BYTE, null),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
            m.bindTexture(f.TEXTURE_2D, d),
            f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, 16, 16, 0, f.RGBA, f.UNSIGNED_BYTE, null),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
            s = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
            },
            h = r(s),
            l = {
                vertex: f.getAttribLocation(h, "position"),
                uv: f.getAttribLocation(h, "uv")
            },
            u = {
                renderType: f.getUniformLocation(h, "renderType"),
                map: f.getUniformLocation(h, "map"),
                occlusionMap: f.getUniformLocation(h, "occlusionMap"),
                opacity: f.getUniformLocation(h, "opacity"),
                color: f.getUniformLocation(h, "color"),
                scale: f.getUniformLocation(h, "scale"),
                rotation: f.getUniformLocation(h, "rotation"),
                screenPosition: f.getUniformLocation(h, "screenPosition")
            }
        }
        function r(t) {
            var i = f.createProgram()
              , n = f.createShader(f.FRAGMENT_SHADER)
              , r = f.createShader(f.VERTEX_SHADER)
              , a = "precision " + e.getPrecision() + " float;\n";
            return f.shaderSource(n, a + t.fragmentShader),
            f.shaderSource(r, a + t.vertexShader),
            f.compileShader(n),
            f.compileShader(r),
            f.attachShader(i, n),
            f.attachShader(i, r),
            f.linkProgram(i),
            i
        }
        var a, o, s, h, l, u, p, d, f = e.context, m = e.state;
        this.render = function(r, s, g) {
            if (0 !== t.length) {
                var v = new c
                  , y = g.w / g.z
                  , x = .5 * g.z
                  , b = .5 * g.w
                  , _ = 16 / g.w
                  , w = new i(_ * y,_)
                  , M = new c(1,1,0)
                  , E = new i(1,1)
                  , T = new Y;
                T.min.set(g.x, g.y),
                T.max.set(g.x + (g.z - 16), g.y + (g.w - 16)),
                void 0 === h && n(),
                f.useProgram(h),
                m.initAttributes(),
                m.enableAttribute(l.vertex),
                m.enableAttribute(l.uv),
                m.disableUnusedAttributes(),
                f.uniform1i(u.occlusionMap, 0),
                f.uniform1i(u.map, 1),
                f.bindBuffer(f.ARRAY_BUFFER, a),
                f.vertexAttribPointer(l.vertex, 2, f.FLOAT, !1, 16, 0),
                f.vertexAttribPointer(l.uv, 2, f.FLOAT, !1, 16, 8),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o),
                m.disable(f.CULL_FACE),
                m.setDepthWrite(!1);
                for (var S = 0, A = t.length; A > S; S++) {
                    _ = 16 / g.w,
                    w.set(_ * y, _);
                    var L = t[S];
                    if (v.set(L.matrixWorld.elements[12], L.matrixWorld.elements[13], L.matrixWorld.elements[14]),
                    v.applyMatrix4(s.matrixWorldInverse),
                    v.applyProjection(s.projectionMatrix),
                    M.copy(v),
                    E.x = g.x + M.x * x + x - 8,
                    E.y = g.y + M.y * b + b - 8,
                    T.containsPoint(E) === !0) {
                        m.activeTexture(f.TEXTURE0),
                        m.bindTexture(f.TEXTURE_2D, null),
                        m.activeTexture(f.TEXTURE1),
                        m.bindTexture(f.TEXTURE_2D, p),
                        f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGB, E.x, E.y, 16, 16, 0),
                        f.uniform1i(u.renderType, 0),
                        f.uniform2f(u.scale, w.x, w.y),
                        f.uniform3f(u.screenPosition, M.x, M.y, M.z),
                        m.disable(f.BLEND),
                        m.enable(f.DEPTH_TEST),
                        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
                        m.activeTexture(f.TEXTURE0),
                        m.bindTexture(f.TEXTURE_2D, d),
                        f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGBA, E.x, E.y, 16, 16, 0),
                        f.uniform1i(u.renderType, 1),
                        m.disable(f.DEPTH_TEST),
                        m.activeTexture(f.TEXTURE1),
                        m.bindTexture(f.TEXTURE_2D, p),
                        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
                        L.positionScreen.copy(M),
                        L.customUpdateCallback ? L.customUpdateCallback(L) : L.updateLensFlares(),
                        f.uniform1i(u.renderType, 2),
                        m.enable(f.BLEND);
                        for (var R = 0, P = L.lensFlares.length; P > R; R++) {
                            var C = L.lensFlares[R];
                            C.opacity > .001 && C.scale > .001 && (M.x = C.x,
                            M.y = C.y,
                            M.z = C.z,
                            _ = C.size * C.scale / g.w,
                            w.x = _ * y,
                            w.y = _,
                            f.uniform3f(u.screenPosition, M.x, M.y, M.z),
                            f.uniform2f(u.scale, w.x, w.y),
                            f.uniform1f(u.rotation, C.rotation),
                            f.uniform1f(u.opacity, C.opacity),
                            f.uniform3f(u.color, C.color.r, C.color.g, C.color.b),
                            m.setBlending(C.blending, C.blendEquation, C.blendSrc, C.blendDst),
                            e.setTexture2D(C.texture, 1),
                            f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                m.enable(f.CULL_FACE),
                m.enable(f.DEPTH_TEST),
                m.setDepthWrite(!0),
                e.resetGLState()
            }
        }
    }
    function Z(e, t) {
        function i() {
            var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
              , t = new Uint16Array([0, 1, 2, 0, 2, 3]);
            o = f.createBuffer(),
            h = f.createBuffer(),
            f.bindBuffer(f.ARRAY_BUFFER, o),
            f.bufferData(f.ARRAY_BUFFER, e, f.STATIC_DRAW),
            f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, h),
            f.bufferData(f.ELEMENT_ARRAY_BUFFER, t, f.STATIC_DRAW),
            l = r(),
            u = {
                position: f.getAttribLocation(l, "position"),
                uv: f.getAttribLocation(l, "uv")
            },
            p = {
                uvOffset: f.getUniformLocation(l, "uvOffset"),
                uvScale: f.getUniformLocation(l, "uvScale"),
                rotation: f.getUniformLocation(l, "rotation"),
                scale: f.getUniformLocation(l, "scale"),
                color: f.getUniformLocation(l, "color"),
                map: f.getUniformLocation(l, "map"),
                opacity: f.getUniformLocation(l, "opacity"),
                modelViewMatrix: f.getUniformLocation(l, "modelViewMatrix"),
                projectionMatrix: f.getUniformLocation(l, "projectionMatrix"),
                fogType: f.getUniformLocation(l, "fogType"),
                fogDensity: f.getUniformLocation(l, "fogDensity"),
                fogNear: f.getUniformLocation(l, "fogNear"),
                fogFar: f.getUniformLocation(l, "fogFar"),
                fogColor: f.getUniformLocation(l, "fogColor"),
                alphaTest: f.getUniformLocation(l, "alphaTest")
            };
            var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            i.width = 8,
            i.height = 8;
            var a = i.getContext("2d");
            a.fillStyle = "white",
            a.fillRect(0, 0, 8, 8),
            d = new n(i),
            d.needsUpdate = !0
        }
        function r() {
            var t = f.createProgram()
              , i = f.createShader(f.VERTEX_SHADER)
              , n = f.createShader(f.FRAGMENT_SHADER);
            return f.shaderSource(i, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
            f.shaderSource(n, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
            f.compileShader(i),
            f.compileShader(n),
            f.attachShader(t, i),
            f.attachShader(t, n),
            f.linkProgram(t),
            t
        }
        function a(e, t) {
            return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
        }
        var o, h, l, u, p, d, f = e.context, m = e.state, g = new c, v = new s, y = new c;
        this.render = function(n, r) {
            if (0 !== t.length) {
                void 0 === l && i(),
                f.useProgram(l),
                m.initAttributes(),
                m.enableAttribute(u.position),
                m.enableAttribute(u.uv),
                m.disableUnusedAttributes(),
                m.disable(f.CULL_FACE),
                m.enable(f.BLEND),
                f.bindBuffer(f.ARRAY_BUFFER, o),
                f.vertexAttribPointer(u.position, 2, f.FLOAT, !1, 16, 0),
                f.vertexAttribPointer(u.uv, 2, f.FLOAT, !1, 16, 8),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, h),
                f.uniformMatrix4fv(p.projectionMatrix, !1, r.projectionMatrix.elements),
                m.activeTexture(f.TEXTURE0),
                f.uniform1i(p.map, 0);
                var s = 0
                  , c = 0
                  , x = n.fog;
                x ? (f.uniform3f(p.fogColor, x.color.r, x.color.g, x.color.b),
                x.isFog ? (f.uniform1f(p.fogNear, x.near),
                f.uniform1f(p.fogFar, x.far),
                f.uniform1i(p.fogType, 1),
                s = 1,
                c = 1) : x.isFogExp2 && (f.uniform1f(p.fogDensity, x.density),
                f.uniform1i(p.fogType, 2),
                s = 2,
                c = 2)) : (f.uniform1i(p.fogType, 0),
                s = 0,
                c = 0);
                for (var b = 0, _ = t.length; _ > b; b++) {
                    var w = t[b];
                    w.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, w.matrixWorld),
                    w.z = -w.modelViewMatrix.elements[14]
                }
                t.sort(a);
                for (var M = [], b = 0, _ = t.length; _ > b; b++) {
                    var w = t[b]
                      , E = w.material;
                    if (E.visible !== !1) {
                        f.uniform1f(p.alphaTest, E.alphaTest),
                        f.uniformMatrix4fv(p.modelViewMatrix, !1, w.modelViewMatrix.elements),
                        w.matrixWorld.decompose(g, v, y),
                        M[0] = y.x,
                        M[1] = y.y;
                        var T = 0;
                        n.fog && E.fog && (T = c),
                        s !== T && (f.uniform1i(p.fogType, T),
                        s = T),
                        null !== E.map ? (f.uniform2f(p.uvOffset, E.map.offset.x, E.map.offset.y),
                        f.uniform2f(p.uvScale, E.map.repeat.x, E.map.repeat.y)) : (f.uniform2f(p.uvOffset, 0, 0),
                        f.uniform2f(p.uvScale, 1, 1)),
                        f.uniform1f(p.opacity, E.opacity),
                        f.uniform3f(p.color, E.color.r, E.color.g, E.color.b),
                        f.uniform1f(p.rotation, E.rotation),
                        f.uniform2fv(p.scale, M),
                        m.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst),
                        m.setDepthTest(E.depthTest),
                        m.setDepthWrite(E.depthWrite),
                        E.map ? e.setTexture2D(E.map, 0) : e.setTexture2D(d, 0),
                        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0)
                    }
                }
                m.enable(f.CULL_FACE),
                e.resetGLState()
            }
        }
    }
    function J() {
        Object.defineProperty(this, "id", {
            value: ah++
        }),
        this.uuid = Jo.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.fog = !0,
        this.lights = !0,
        this.blending = qr,
        this.side = Br,
        this.shading = kr,
        this.vertexColors = jr,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = ha,
        this.blendDst = la,
        this.blendEquation = ea,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = xa,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.overdraw = 0,
        this.visible = !0,
        this._needsUpdate = !0
    }
    function Q(e) {
        J.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(e))
    }
    function K(e) {
        J.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = qo,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.setValues(e)
    }
    function $(e, t) {
        this.min = void 0 !== e ? e : new c(+(1 / 0),+(1 / 0),+(1 / 0)),
        this.max = void 0 !== t ? t : new c(-(1 / 0),-(1 / 0),-(1 / 0))
    }
    function ee(e, t) {
        this.center = void 0 !== e ? e : new c,
        this.radius = void 0 !== t ? t : 0
    }
    function te() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    function ie(e, t) {
        this.normal = void 0 !== e ? e : new c(1,0,0),
        this.constant = void 0 !== t ? t : 0
    }
    function ne(e, t, i, n, r, a) {
        this.planes = [void 0 !== e ? e : new ie, void 0 !== t ? t : new ie, void 0 !== i ? i : new ie, void 0 !== n ? n : new ie, void 0 !== r ? r : new ie, void 0 !== a ? a : new ie]
    }
    function re(e, t, n, o) {
        function s(t, i, n, r) {
            var a = t.geometry
              , o = null
              , s = E
              , c = t.customDepthMaterial;
            if (n && (s = T,
            c = t.customDistanceMaterial),
            c)
                o = c;
            else {
                var h = !1;
                i.morphTargets && (a && a.isBufferGeometry ? h = a.morphAttributes && a.morphAttributes.position && a.morphAttributes.position.length > 0 : a && a.isGeometry && (h = a.morphTargets && a.morphTargets.length > 0));
                var l = t.isSkinnedMesh && i.skinning
                  , u = 0;
                h && (u |= _),
                l && (u |= w),
                o = s[u]
            }
            if (e.localClippingEnabled && i.clipShadows === !0 && 0 !== i.clippingPlanes.length) {
                var p = o.uuid
                  , d = i.uuid
                  , f = S[p];
                void 0 === f && (f = {},
                S[p] = f);
                var m = f[d];
                void 0 === m && (m = o.clone(),
                f[d] = m),
                o = m
            }
            o.visible = i.visible,
            o.wireframe = i.wireframe;
            var g = i.side;
            return z.renderSingleSided && g == Hr && (g = Br),
            z.renderReverseSided && (g === Br ? g = Gr : g === Gr && (g = Br)),
            o.side = g,
            o.clipShadows = i.clipShadows,
            o.clippingPlanes = i.clippingPlanes,
            o.wireframeLinewidth = i.wireframeLinewidth,
            o.linewidth = i.linewidth,
            n && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(r),
            o
        }
        function l(e, t, i) {
            if (e.visible !== !1) {
                var n = 0 !== (e.layers.mask & t.layers.mask);
                if (n && (e.isMesh || e.isLine || e.isPoints) && e.castShadow && (e.frustumCulled === !1 || d.intersectsObject(e) === !0)) {
                    var r = e.material;
                    r.visible === !0 && (e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld),
                    b.push(e))
                }
                for (var a = e.children, o = 0, s = a.length; s > o; o++)
                    l(a[o], t, i)
            }
        }
        var u = e.context
          , p = e.state
          , d = new ne
          , f = new h
          , m = t.shadows
          , g = new i
          , v = new i(o.maxTextureSize,o.maxTextureSize)
          , y = new c
          , x = new c
          , b = []
          , _ = 1
          , w = 2
          , M = (_ | w) + 1
          , E = new Array(M)
          , T = new Array(M)
          , S = {}
          , A = [new c(1,0,0), new c(-1,0,0), new c(0,0,1), new c(0,0,-1), new c(0,1,0), new c(0,-1,0)]
          , L = [new c(0,1,0), new c(0,1,0), new c(0,1,0), new c(0,1,0), new c(0,0,1), new c(0,0,-1)]
          , R = [new r, new r, new r, new r, new r, new r]
          , P = new K;
        P.depthPacking = Zo,
        P.clipping = !0;
        for (var C = rh.distanceRGBA, I = Object.assign({}, C.uniforms), U = 0; U !== M; ++U) {
            var D = 0 !== (U & _)
              , N = 0 !== (U & w)
              , O = P.clone();
            O.morphTargets = D,
            O.skinning = N,
            E[U] = O;
            var F = new Q({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: I,
                vertexShader: C.vertexShader,
                fragmentShader: C.fragmentShader,
                morphTargets: D,
                skinning: N,
                clipping: !0
            });
            T[U] = F
        }
        var z = this;
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = Fr,
        this.renderReverseSided = !0,
        this.renderSingleSided = !0,
        this.render = function(t, i) {
            if (z.enabled !== !1 && (z.autoUpdate !== !1 || z.needsUpdate !== !1) && 0 !== m.length) {
                p.buffers.color.setClear(1, 1, 1, 1),
                p.disable(u.BLEND),
                p.setDepthTest(!0),
                p.setScissorTest(!1);
                for (var r, o, c = 0, h = m.length; h > c; c++) {
                    var _ = m[c]
                      , w = _.shadow;
                    if (void 0 !== w) {
                        var M = w.camera;
                        if (g.copy(w.mapSize),
                        g.min(v),
                        _ && _.isPointLight) {
                            r = 6,
                            o = !0;
                            var E = g.x
                              , T = g.y;
                            R[0].set(2 * E, T, E, T),
                            R[1].set(0, T, E, T),
                            R[2].set(3 * E, T, E, T),
                            R[3].set(E, T, E, T),
                            R[4].set(3 * E, 0, E, T),
                            R[5].set(E, 0, E, T),
                            g.x *= 4,
                            g.y *= 2
                        } else
                            r = 1,
                            o = !1;
                        if (null === w.map) {
                            var S = {
                                minFilter: Wa,
                                magFilter: Wa,
                                format: po
                            };
                            w.map = new a(g.x,g.y,S),
                            M.updateProjectionMatrix()
                        }
                        w.isSpotLightShadow && w.update(_),
                        w && w.isRectAreaLightShadow && w.update(_);
                        var P = w.map
                          , C = w.matrix;
                        x.setFromMatrixPosition(_.matrixWorld),
                        M.position.copy(x),
                        e.setRenderTarget(P),
                        e.clear();
                        for (var I = 0; r > I; I++) {
                            if (o) {
                                y.copy(M.position),
                                y.add(A[I]),
                                M.up.copy(L[I]),
                                M.lookAt(y);
                                var U = R[I];
                                p.viewport(U)
                            } else
                                y.setFromMatrixPosition(_.target.matrixWorld),
                                M.lookAt(y);
                            M.updateMatrixWorld(),
                            M.matrixWorldInverse.getInverse(M.matrixWorld),
                            C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                            C.multiply(M.projectionMatrix),
                            C.multiply(M.matrixWorldInverse),
                            f.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
                            d.setFromMatrix(f),
                            b.length = 0,
                            l(t, i, M);
                            for (var D = 0, N = b.length; N > D; D++) {
                                var O = b[D]
                                  , F = n.update(O)
                                  , B = O.material;
                                if (B && B.isMultiMaterial)
                                    for (var G = F.groups, H = B.materials, V = 0, k = G.length; k > V; V++) {
                                        var j = G[V]
                                          , W = H[j.materialIndex];
                                        if (W.visible === !0) {
                                            var X = s(O, W, o, x);
                                            e.renderBufferDirect(M, null, F, X, O, j)
                                        }
                                    }
                                else {
                                    var X = s(O, B, o, x);
                                    e.renderBufferDirect(M, null, F, X, O, null)
                                }
                            }
                        }
                    } else
                        console.warn("THREE.WebGLShadowMap:", _, "has no shadow.")
                }
                var Y = e.getClearColor()
                  , q = e.getClearAlpha();
                e.setClearColor(Y, q),
                z.needsUpdate = !1
            }
        }
    }
    function ae(e, t) {
        this.origin = void 0 !== e ? e : new c,
        this.direction = void 0 !== t ? t : new c
    }
    function oe(e, t, i, n) {
        this._x = e || 0,
        this._y = t || 0,
        this._z = i || 0,
        this._order = n || oe.DefaultOrder
    }
    function se() {
        this.mask = 1
    }
    function ce() {
        function e() {
            r.setFromEuler(n, !1)
        }
        function t() {
            n.setFromQuaternion(r, void 0, !1)
        }
        Object.defineProperty(this, "id", {
            value: oh++
        }),
        this.uuid = Jo.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = ce.DefaultUp.clone();
        var i = new c
          , n = new oe
          , r = new s
          , a = new c(1,1,1);
        n.onChange(e),
        r.onChange(t),
        Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: i
            },
            rotation: {
                enumerable: !0,
                value: n
            },
            quaternion: {
                enumerable: !0,
                value: r
            },
            scale: {
                enumerable: !0,
                value: a
            },
            modelViewMatrix: {
                value: new h
            },
            normalMatrix: {
                value: new te
            }
        }),
        this.matrix = new h,
        this.matrixWorld = new h,
        this.matrixAutoUpdate = ce.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new se,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {},
        this.onBeforeRender = function() {}
        ,
        this.onAfterRender = function() {}
    }
    function he(e, t) {
        this.start = void 0 !== e ? e : new c,
        this.end = void 0 !== t ? t : new c
    }
    function le(e, t, i) {
        this.a = void 0 !== e ? e : new c,
        this.b = void 0 !== t ? t : new c,
        this.c = void 0 !== i ? i : new c
    }
    function ue(e, t, i, n, r, a) {
        this.a = e,
        this.b = t,
        this.c = i,
        this.normal = n && n.isVector3 ? n : new c,
        this.vertexNormals = Array.isArray(n) ? n : [],
        this.color = r && r.isColor ? r : new W,
        this.vertexColors = Array.isArray(r) ? r : [],
        this.materialIndex = void 0 !== a ? a : 0
    }
    function pe(e) {
        J.call(this),
        this.type = "MeshBasicMaterial",
        this.color = new W(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = Ea,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(e)
    }
    function de(e, t, i) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = Jo.generateUUID(),
        this.array = e,
        this.itemSize = t,
        this.count = void 0 !== e ? e.length / t : 0,
        this.normalized = i === !0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.onUploadCallback = function() {}
        ,
        this.version = 0
    }
    function fe(e, t) {
        de.call(this, new Int8Array(e), t)
    }
    function me(e, t) {
        de.call(this, new Uint8Array(e), t)
    }
    function ge(e, t) {
        de.call(this, new Uint8ClampedArray(e), t)
    }
    function ve(e, t) {
        de.call(this, new Int16Array(e), t)
    }
    function ye(e, t) {
        de.call(this, new Uint16Array(e), t)
    }
    function xe(e, t) {
        de.call(this, new Int32Array(e), t)
    }
    function be(e, t) {
        de.call(this, new Uint32Array(e), t)
    }
    function _e(e, t) {
        de.call(this, new Float32Array(e), t)
    }
    function we(e, t) {
        de.call(this, new Float64Array(e), t)
    }
    function Me() {
        this.indices = [],
        this.vertices = [],
        this.normals = [],
        this.colors = [],
        this.uvs = [],
        this.uvs2 = [],
        this.groups = [],
        this.morphTargets = {},
        this.skinWeights = [],
        this.skinIndices = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.verticesNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function Ee() {
        Object.defineProperty(this, "id", {
            value: Te()
        }),
        this.uuid = Jo.generateUUID(),
        this.name = "",
        this.type = "Geometry",
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [[]],
        this.morphTargets = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.elementsNeedUpdate = !1,
        this.verticesNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.lineDistancesNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function Te() {
        return sh++
    }
    function Se() {
        Object.defineProperty(this, "id", {
            value: Te()
        }),
        this.uuid = Jo.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }
    function Ae(e, t) {
        ce.call(this),
        this.type = "Mesh",
        this.geometry = void 0 !== e ? e : new Se,
        this.material = void 0 !== t ? t : new pe({
            color: 16777215 * Math.random()
        }),
        this.drawMode = Fo,
        this.updateMorphTargets()
    }
    function Le(e, t, i, n, r, a) {
        function o(e, t, i) {
            var n = 0;
            return n += (e + 1) * (t + 1) * 2,
            n += (e + 1) * (i + 1) * 2,
            n += (i + 1) * (t + 1) * 2
        }
        function s(e, t, i) {
            var n = 0;
            return n += e * t * 2,
            n += e * i * 2,
            n += i * t * 2,
            6 * n
        }
        function h(e, t, i, n, r, a, o, s, h, u, p) {
            for (var w = a / h, M = o / u, E = a / 2, T = o / 2, S = s / 2, A = h + 1, L = u + 1, R = 0, P = 0, C = new c, I = 0; L > I; I++)
                for (var U = I * M - T, D = 0; A > D; D++) {
                    var N = D * w - E;
                    C[e] = N * n,
                    C[t] = U * r,
                    C[i] = S,
                    f[v] = C.x,
                    f[v + 1] = C.y,
                    f[v + 2] = C.z,
                    C[e] = 0,
                    C[t] = 0,
                    C[i] = s > 0 ? 1 : -1,
                    m[v] = C.x,
                    m[v + 1] = C.y,
                    m[v + 2] = C.z,
                    g[y] = D / h,
                    g[y + 1] = 1 - I / u,
                    v += 3,
                    y += 2,
                    R += 1
                }
            for (I = 0; u > I; I++)
                for (D = 0; h > D; D++) {
                    var O = b + D + A * I
                      , F = b + D + A * (I + 1)
                      , z = b + (D + 1) + A * (I + 1)
                      , B = b + (D + 1) + A * I;
                    d[x] = O,
                    d[x + 1] = F,
                    d[x + 2] = B,
                    d[x + 3] = F,
                    d[x + 4] = z,
                    d[x + 5] = B,
                    x += 6,
                    P += 6
                }
            l.addGroup(_, P, p),
            _ += P,
            b += R
        }
        Se.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var l = this;
        n = Math.floor(n) || 1,
        r = Math.floor(r) || 1,
        a = Math.floor(a) || 1;
        var u = o(n, r, a)
          , p = s(n, r, a)
          , d = new (p > 65535 ? Uint32Array : Uint16Array)(p)
          , f = new Float32Array(3 * u)
          , m = new Float32Array(3 * u)
          , g = new Float32Array(2 * u)
          , v = 0
          , y = 0
          , x = 0
          , b = 0
          , _ = 0;
        h("z", "y", "x", -1, -1, i, t, e, a, r, 0),
        h("z", "y", "x", 1, -1, i, t, -e, a, r, 1),
        h("x", "z", "y", 1, 1, e, i, t, n, a, 2),
        h("x", "z", "y", 1, -1, e, i, -t, n, a, 3),
        h("x", "y", "z", 1, -1, e, t, i, n, r, 4),
        h("x", "y", "z", -1, -1, e, t, -i, n, r, 5),
        this.setIndex(new de(d,1)),
        this.addAttribute("position", new de(f,3)),
        this.addAttribute("normal", new de(m,3)),
        this.addAttribute("uv", new de(g,2))
    }
    function Re(e, t, i, n) {
        Se.call(this),
        this.type = "PlaneBufferGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: n
        };
        for (var r = e / 2, a = t / 2, o = Math.floor(i) || 1, s = Math.floor(n) || 1, c = o + 1, h = s + 1, l = e / o, u = t / s, p = new Float32Array(c * h * 3), d = new Float32Array(c * h * 3), f = new Float32Array(c * h * 2), m = 0, g = 0, v = 0; h > v; v++)
            for (var y = v * u - a, x = 0; c > x; x++) {
                var b = x * l - r;
                p[m] = b,
                p[m + 1] = -y,
                d[m + 2] = 1,
                f[g] = x / o,
                f[g + 1] = 1 - v / s,
                m += 3,
                g += 2
            }
        m = 0;
        for (var _ = new (p.length / 3 > 65535 ? Uint32Array : Uint16Array)(o * s * 6), v = 0; s > v; v++)
            for (var x = 0; o > x; x++) {
                var w = x + c * v
                  , M = x + c * (v + 1)
                  , E = x + 1 + c * (v + 1)
                  , T = x + 1 + c * v;
                _[m] = w,
                _[m + 1] = M,
                _[m + 2] = T,
                _[m + 3] = M,
                _[m + 4] = E,
                _[m + 5] = T,
                m += 6
            }
        this.setIndex(new de(_,1)),
        this.addAttribute("position", new de(p,3)),
        this.addAttribute("normal", new de(d,3)),
        this.addAttribute("uv", new de(f,2))
    }
    function Pe() {
        ce.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new h,
        this.projectionMatrix = new h
    }
    function Ce(e, t, i, n) {
        Pe.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== e ? e : 50,
        this.zoom = 1,
        this.near = void 0 !== i ? i : .1,
        this.far = void 0 !== n ? n : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== t ? t : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    function Ie(e, t, i, n, r, a) {
        Pe.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = i,
        this.bottom = n,
        this.near = void 0 !== r ? r : .1,
        this.far = void 0 !== a ? a : 2e3,
        this.updateProjectionMatrix()
    }
    function Ue(e, t, i) {
        function n(e) {
            s = e
        }
        function r(i) {
            i.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (c = e.UNSIGNED_INT,
            h = 4) : (c = e.UNSIGNED_SHORT,
            h = 2)
        }
        function a(t, n) {
            e.drawElements(s, n, c, t * h),
            i.calls++,
            i.vertices += n,
            s === e.TRIANGLES && (i.faces += n / 3)
        }
        function o(n, r, a) {
            var o = t.get("ANGLE_instanced_arrays");
            return null === o ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (o.drawElementsInstancedANGLE(s, a, c, r * h, n.maxInstancedCount),
            i.calls++,
            i.vertices += a * n.maxInstancedCount,
            void (s === e.TRIANGLES && (i.faces += n.maxInstancedCount * a / 3)))
        }
        var s, c, h;
        return {
            setMode: n,
            setIndex: r,
            render: a,
            renderInstances: o
        }
    }
    function De(e, t, i) {
        function n(e) {
            o = e
        }
        function r(t, n) {
            e.drawArrays(o, t, n),
            i.calls++,
            i.vertices += n,
            o === e.TRIANGLES && (i.faces += n / 3)
        }
        function a(n) {
            var r = t.get("ANGLE_instanced_arrays");
            if (null === r)
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            var a = n.attributes.position
              , s = 0;
            a.isInterleavedBufferAttribute ? (s = a.data.count,
            r.drawArraysInstancedANGLE(o, 0, s, n.maxInstancedCount)) : (s = a.count,
            r.drawArraysInstancedANGLE(o, 0, s, n.maxInstancedCount)),
            i.calls++,
            i.vertices += s * n.maxInstancedCount,
            o === e.TRIANGLES && (i.faces += n.maxInstancedCount * s / 3)
        }
        var o;
        return {
            setMode: n,
            render: r,
            renderInstances: a
        }
    }
    function Ne() {
        var e = {};
        return {
            get: function(t) {
                if (void 0 !== e[t.id])
                    return e[t.id];
                var n;
                switch (t.type) {
                case "DirectionalLight":
                    n = {
                        direction: new c,
                        color: new W,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new i
                    };
                    break;
                case "SpotLight":
                    n = {
                        position: new c,
                        direction: new c,
                        color: new W,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new i
                    };
                    break;
                case "PointLight":
                    n = {
                        position: new c,
                        color: new W,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new i
                    };
                    break;
                case "HemisphereLight":
                    n = {
                        direction: new c,
                        skyColor: new W,
                        groundColor: new W
                    };
                    break;
                case "RectAreaLight":
                    n = {
                        color: new W,
                        position: new c,
                        halfWidth: new c,
                        halfHeight: new c
                    }
                }
                return e[t.id] = n,
                n
            }
        }
    }
    function Oe(e) {
        for (var t = e.split("\n"), i = 0; i < t.length; i++)
            t[i] = i + 1 + ": " + t[i];
        return t.join("\n")
    }
    function Fe(e, t, i) {
        var n = e.createShader(t);
        return e.shaderSource(n, i),
        e.compileShader(n),
        e.getShaderParameter(n, e.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== e.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", t === e.VERTEX_SHADER ? "vertex" : "fragment", e.getShaderInfoLog(n), Oe(i)),
        n
    }
    function ze(e) {
        switch (e) {
        case Go:
            return ["Linear", "( value )"];
        case Ho:
            return ["sRGB", "( value )"];
        case ko:
            return ["RGBE", "( value )"];
        case Wo:
            return ["RGBM", "( value, 7.0 )"];
        case Xo:
            return ["RGBM", "( value, 16.0 )"];
        case Yo:
            return ["RGBD", "( value, 256.0 )"];
        case Vo:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + e)
        }
    }
    function Be(e, t) {
        var i = ze(t);
        return "vec4 " + e + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
    }
    function Ge(e, t) {
        var i = ze(t);
        return "vec4 " + e + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
    }
    function He(e, t) {
        var i;
        switch (t) {
        case La:
            i = "Linear";
            break;
        case Ra:
            i = "Reinhard";
            break;
        case Pa:
            i = "Uncharted2";
            break;
        case Ca:
            i = "OptimizedCineon";
            break;
        default:
            throw new Error("unsupported toneMapping: " + t)
        }
        return "vec3 " + e + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
    }
    function Ve(e, t, i) {
        e = e || {};
        var n = [e.derivatives || t.envMapCubeUV || t.bumpMap || t.normalMap || t.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (e.fragDepth || t.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", e.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (e.shaderTextureLOD || t.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
        return n.filter(We).join("\n")
    }
    function ke(e) {
        var t = [];
        for (var i in e) {
            var n = e[i];
            n !== !1 && t.push("#define " + i + " " + n)
        }
        return t.join("\n")
    }
    function je(e, t) {
        for (var i = {}, n = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), r = 0; n > r; r++) {
            var a = e.getActiveAttrib(t, r)
              , o = a.name;
            i[o] = e.getAttribLocation(t, o)
        }
        return i
    }
    function We(e) {
        return "" !== e
    }
    function Xe(e, t) {
        return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    }
    function Ye(e) {
        function t(e, t) {
            var i = th[t];
            if (void 0 === i)
                throw new Error("Can not resolve #include <" + t + ">");
            return Ye(i)
        }
        var i = /#include +<([\w\d.]+)>/g;
        return e.replace(i, t)
    }
    function qe(e) {
        function t(e, t, i, n) {
            for (var r = "", a = parseInt(t); a < parseInt(i); a++)
                r += n.replace(/\[ i \]/g, "[ " + a + " ]");
            return r
        }
        var i = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
        return e.replace(i, t)
    }
    function Ze(e, t, i, n) {
        var r = e.context
          , a = i.extensions
          , o = i.defines
          , s = i.__webglShader.vertexShader
          , c = i.__webglShader.fragmentShader
          , h = "SHADOWMAP_TYPE_BASIC";
        n.shadowMapType === Fr ? h = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === zr && (h = "SHADOWMAP_TYPE_PCF_SOFT");
        var l = "ENVMAP_TYPE_CUBE"
          , u = "ENVMAP_MODE_REFLECTION"
          , p = "ENVMAP_BLENDING_MULTIPLY";
        if (n.envMap) {
            switch (i.envMap.mapping) {
            case Ua:
            case Da:
                l = "ENVMAP_TYPE_CUBE";
                break;
            case za:
            case Ba:
                l = "ENVMAP_TYPE_CUBE_UV";
                break;
            case Na:
            case Oa:
                l = "ENVMAP_TYPE_EQUIREC";
                break;
            case Fa:
                l = "ENVMAP_TYPE_SPHERE"
            }
            switch (i.envMap.mapping) {
            case Da:
            case Oa:
                u = "ENVMAP_MODE_REFRACTION"
            }
            switch (i.combine) {
            case Ea:
                p = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case Ta:
                p = "ENVMAP_BLENDING_MIX";
                break;
            case Sa:
                p = "ENVMAP_BLENDING_ADD"
            }
        }
        var d, f, m = e.gammaFactor > 0 ? e.gammaFactor : 1, g = Ve(a, n, e.extensions), v = ke(o), y = r.createProgram();
        i.isRawShaderMaterial ? (d = [v, "\n"].filter(We).join("\n"),
        f = [g, v, "\n"].filter(We).join("\n")) : (d = ["precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, v, n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + n.maxBones, n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(We).join("\n"),
        f = [g, "precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, v, n.alphaTest ? "#define ALPHATEST " + n.alphaTest : "", "#define GAMMA_FACTOR " + m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (n.numClippingPlanes - n.numClipIntersection), n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && e.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", n.envMap && e.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", n.toneMapping !== Aa ? "#define TONE_MAPPING" : "", n.toneMapping !== Aa ? th.tonemapping_pars_fragment : "", n.toneMapping !== Aa ? He("toneMapping", n.toneMapping) : "", n.outputEncoding || n.mapEncoding || n.envMapEncoding || n.emissiveMapEncoding ? th.encodings_pars_fragment : "", n.mapEncoding ? Be("mapTexelToLinear", n.mapEncoding) : "", n.envMapEncoding ? Be("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? Be("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.outputEncoding ? Ge("linearToOutputTexel", n.outputEncoding) : "", n.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(We).join("\n")),
        s = Ye(s, n),
        s = Xe(s, n),
        c = Ye(c, n),
        c = Xe(c, n),
        i.isShaderMaterial || (s = qe(s),
        c = qe(c));
        var x = d + s
          , b = f + c
          , _ = Fe(r, r.VERTEX_SHADER, x)
          , w = Fe(r, r.FRAGMENT_SHADER, b);
        r.attachShader(y, _),
        r.attachShader(y, w),
        void 0 !== i.index0AttributeName ? r.bindAttribLocation(y, 0, i.index0AttributeName) : n.morphTargets === !0 && r.bindAttribLocation(y, 0, "position"),
        r.linkProgram(y);
        var M = r.getProgramInfoLog(y)
          , E = r.getShaderInfoLog(_)
          , T = r.getShaderInfoLog(w)
          , S = !0
          , A = !0;
        r.getProgramParameter(y, r.LINK_STATUS) === !1 ? (S = !1,
        console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(y, r.VALIDATE_STATUS), "gl.getProgramInfoLog", M, E, T)) : "" !== M ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", M) : ("" === E || "" === T) && (A = !1),
        A && (this.diagnostics = {
            runnable: S,
            material: i,
            programLog: M,
            vertexShader: {
                log: E,
                prefix: d
            },
            fragmentShader: {
                log: T,
                prefix: f
            }
        }),
        r.deleteShader(_),
        r.deleteShader(w);
        var L;
        this.getUniforms = function() {
            return void 0 === L && (L = new j(r,y,e)),
            L
        }
        ;
        var R;
        return this.getAttributes = function() {
            return void 0 === R && (R = je(r, y)),
            R
        }
        ,
        this.destroy = function() {
            r.deleteProgram(y),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.id = ch++,
        this.code = t,
        this.usedTimes = 1,
        this.program = y,
        this.vertexShader = _,
        this.fragmentShader = w,
        this
    }
    function Je(e, t) {
        function i(e) {
            if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture)
                return 1024;
            var i = t.maxVertexUniforms
              , n = Math.floor((i - 20) / 4)
              , r = n;
            return void 0 !== e && e && e.isSkinnedMesh && (r = Math.min(e.skeleton.bones.length, r),
            r < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + r + " (try OpenGL instead of ANGLE)")),
            r
        }
        function n(e, t) {
            var i;
            return e ? e.isTexture ? i = e.encoding : e.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            i = e.texture.encoding) : i = Go,
            i === Go && t && (i = Vo),
            i
        }
        var r = []
          , a = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshToonMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        }
          , o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking"];
        this.getParameters = function(r, o, s, c, h, l) {
            var u = a[r.type]
              , p = i(l)
              , d = e.getPrecision();
            null !== r.precision && (d = t.getMaxPrecision(r.precision),
            d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead."));
            var f = e.getCurrentRenderTarget()
              , m = {
                shaderID: u,
                precision: d,
                supportsVertexTextures: t.vertexTextures,
                outputEncoding: n(f ? f.texture : null, e.gammaOutput),
                map: !!r.map,
                mapEncoding: n(r.map, e.gammaInput),
                envMap: !!r.envMap,
                envMapMode: r.envMap && r.envMap.mapping,
                envMapEncoding: n(r.envMap, e.gammaInput),
                envMapCubeUV: !!r.envMap && (r.envMap.mapping === za || r.envMap.mapping === Ba),
                lightMap: !!r.lightMap,
                aoMap: !!r.aoMap,
                emissiveMap: !!r.emissiveMap,
                emissiveMapEncoding: n(r.emissiveMap, e.gammaInput),
                bumpMap: !!r.bumpMap,
                normalMap: !!r.normalMap,
                displacementMap: !!r.displacementMap,
                roughnessMap: !!r.roughnessMap,
                metalnessMap: !!r.metalnessMap,
                specularMap: !!r.specularMap,
                alphaMap: !!r.alphaMap,
                gradientMap: !!r.gradientMap,
                combine: r.combine,
                vertexColors: r.vertexColors,
                fog: !!s,
                useFog: r.fog,
                fogExp: s && s.isFogExp2,
                flatShading: r.shading === Vr,
                sizeAttenuation: r.sizeAttenuation,
                logarithmicDepthBuffer: t.logarithmicDepthBuffer,
                skinning: r.skinning,
                maxBones: p,
                useVertexTexture: t.floatVertexTextures && l && l.skeleton && l.skeleton.useVertexTexture,
                morphTargets: r.morphTargets,
                morphNormals: r.morphNormals,
                maxMorphTargets: e.maxMorphTargets,
                maxMorphNormals: e.maxMorphNormals,
                numDirLights: o.directional.length,
                numPointLights: o.point.length,
                numSpotLights: o.spot.length,
                numRectAreaLights: o.rectArea.length,
                numHemiLights: o.hemi.length,
                numClippingPlanes: c,
                numClipIntersection: h,
                shadowMapEnabled: e.shadowMap.enabled && l.receiveShadow && o.shadows.length > 0,
                shadowMapType: e.shadowMap.type,
                toneMapping: e.toneMapping,
                physicallyCorrectLights: e.physicallyCorrectLights,
                premultipliedAlpha: r.premultipliedAlpha,
                alphaTest: r.alphaTest,
                doubleSided: r.side === Hr,
                flipSided: r.side === Gr,
                depthPacking: void 0 !== r.depthPacking ? r.depthPacking : !1
            };
            return m
        }
        ,
        this.getProgramCode = function(e, t) {
            var i = [];
            if (t.shaderID ? i.push(t.shaderID) : (i.push(e.fragmentShader),
            i.push(e.vertexShader)),
            void 0 !== e.defines)
                for (var n in e.defines)
                    i.push(n),
                    i.push(e.defines[n]);
            for (var r = 0; r < o.length; r++)
                i.push(t[o[r]]);
            return i.join()
        }
        ,
        this.acquireProgram = function(t, i, n) {
            for (var a, o = 0, s = r.length; s > o; o++) {
                var c = r[o];
                if (c.code === n) {
                    a = c,
                    ++a.usedTimes;
                    break
                }
            }
            return void 0 === a && (a = new Ze(e,n,t,i),
            r.push(a)),
            a
        }
        ,
        this.releaseProgram = function(e) {
            if (0 === --e.usedTimes) {
                var t = r.indexOf(e);
                r[t] = r[r.length - 1],
                r.pop(),
                e.destroy()
            }
        }
        ,
        this.programs = r
    }
    function Qe(e, t, i) {
        function n(e) {
            var r = e.target
              , s = c[r.id];
            null !== s.index && a(s.index),
            o(s.attributes),
            r.removeEventListener("dispose", n),
            delete c[r.id];
            var h = t.get(r);
            h.wireframe && a(h.wireframe),
            t["delete"](r);
            var l = t.get(s);
            l.wireframe && a(l.wireframe),
            t["delete"](s),
            i.memory.geometries--
        }
        function r(e) {
            return e.isInterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
        }
        function a(t) {
            var i = r(t);
            void 0 !== i && (e.deleteBuffer(i),
            s(t))
        }
        function o(e) {
            for (var t in e)
                a(e[t])
        }
        function s(e) {
            t["delete"](e.isInterleavedBufferAttribute ? e.data : e)
        }
        var c = {};
        return {
            get: function(e) {
                var t = e.geometry;
                if (void 0 !== c[t.id])
                    return c[t.id];
                t.addEventListener("dispose", n);
                var r;
                return t.isBufferGeometry ? r = t : t.isGeometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new Se).setFromObject(e)),
                r = t._bufferGeometry),
                c[t.id] = r,
                i.memory.geometries++,
                r
            }
        }
    }
    function Ke(e, t, i) {
        function n(t) {
            var i = l.get(t);
            t.geometry.isGeometry && i.updateFromObject(t);
            var n = i.index
              , a = i.attributes;
            null !== n && r(n, e.ELEMENT_ARRAY_BUFFER);
            for (var o in a)
                r(a[o], e.ARRAY_BUFFER);
            var s = i.morphAttributes;
            for (var o in s)
                for (var c = s[o], h = 0, u = c.length; u > h; h++)
                    r(c[h], e.ARRAY_BUFFER);
            return i
        }
        function r(e, i) {
            var n = e.isInterleavedBufferAttribute ? e.data : e
              , r = t.get(n);
            void 0 === r.__webglBuffer ? a(r, n, i) : r.version !== n.version && o(r, n, i)
        }
        function a(t, i, n) {
            t.__webglBuffer = e.createBuffer(),
            e.bindBuffer(n, t.__webglBuffer);
            var r = i.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
            e.bufferData(n, i.array, r);
            var a = e.FLOAT
              , o = i.array;
            o instanceof Float32Array ? a = e.FLOAT : o instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : o instanceof Uint16Array ? a = e.UNSIGNED_SHORT : o instanceof Int16Array ? a = e.SHORT : o instanceof Uint32Array ? a = e.UNSIGNED_INT : o instanceof Int32Array ? a = e.INT : o instanceof Int8Array ? a = e.BYTE : o instanceof Uint8Array && (a = e.UNSIGNED_BYTE),
            t.bytesPerElement = o.BYTES_PER_ELEMENT,
            t.type = a,
            t.version = i.version,
            i.onUploadCallback()
        }
        function o(t, i, n) {
            e.bindBuffer(n, t.__webglBuffer),
            i.dynamic === !1 ? e.bufferData(n, i.array, e.STATIC_DRAW) : -1 === i.updateRange.count ? e.bufferSubData(n, 0, i.array) : 0 === i.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(n, i.updateRange.offset * i.array.BYTES_PER_ELEMENT, i.array.subarray(i.updateRange.offset, i.updateRange.offset + i.updateRange.count)),
            i.updateRange.count = 0),
            t.version = i.version
        }
        function s(e) {
            return e.isInterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
        }
        function c(e) {
            return t.get(e.isInterleavedBufferAttribute ? e.data : e)
        }
        function h(i) {
            var n = t.get(i);
            if (void 0 !== n.wireframe)
                return n.wireframe;
            var a = []
              , o = i.index
              , s = i.attributes
              , c = s.position;
            if (null !== o)
                for (var h = o.array, l = 0, u = h.length; u > l; l += 3) {
                    var p = h[l + 0]
                      , d = h[l + 1]
                      , f = h[l + 2];
                    a.push(p, d, d, f, f, p)
                }
            else
                for (var h = s.position.array, l = 0, u = h.length / 3 - 1; u > l; l += 3) {
                    var p = l + 0
                      , d = l + 1
                      , f = l + 2;
                    a.push(p, d, d, f, f, p)
                }
            var m = c.count > 65535 ? Uint32Array : Uint16Array
              , g = new de(new m(a),1);
            return r(g, e.ELEMENT_ARRAY_BUFFER),
            n.wireframe = g,
            g
        }
        var l = new Qe(e,t,i);
        return {
            getAttributeBuffer: s,
            getAttributeProperties: c,
            getWireframeAttribute: h,
            update: n
        }
    }
    function $e(e, t, i, n, r, a, o) {
        function s(e, t) {
            if (e.width > t || e.height > t) {
                var i = t / Math.max(e.width, e.height)
                  , n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                n.width = Math.floor(e.width * i),
                n.height = Math.floor(e.height * i);
                var r = n.getContext("2d");
                return r.drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height),
                console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + n.width + "x" + n.height, e),
                n
            }
            return e
        }
        function c(e) {
            return Jo.isPowerOfTwo(e.width) && Jo.isPowerOfTwo(e.height)
        }
        function h(e) {
            if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
                var t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                t.width = Jo.nearestPowerOfTwo(e.width),
                t.height = Jo.nearestPowerOfTwo(e.height);
                var i = t.getContext("2d");
                return i.drawImage(e, 0, 0, t.width, t.height),
                console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + t.width + "x" + t.height, e),
                t
            }
            return e
        }
        function l(e) {
            return e.wrapS !== Va || e.wrapT !== Va ? !0 : e.minFilter !== Wa && e.minFilter !== qa ? !0 : !1
        }
        function u(t) {
            return t === Wa || t === Xa || t === Ya ? e.NEAREST : e.LINEAR
        }
        function p(e) {
            var t = e.target;
            t.removeEventListener("dispose", p),
            f(t),
            A.textures--
        }
        function d(e) {
            var t = e.target;
            t.removeEventListener("dispose", d),
            m(t),
            A.textures--
        }
        function f(t) {
            var i = n.get(t);
            if (t.image && i.__image__webglTextureCube)
                e.deleteTexture(i.__image__webglTextureCube);
            else {
                if (void 0 === i.__webglInit)
                    return;
                e.deleteTexture(i.__webglTexture)
            }
            n["delete"](t)
        }
        function m(t) {
            var i = n.get(t)
              , r = n.get(t.texture);
            if (t) {
                if (void 0 !== r.__webglTexture && e.deleteTexture(r.__webglTexture),
                t.depthTexture && t.depthTexture.dispose(),
                t.isWebGLRenderTargetCube)
                    for (var a = 0; 6 > a; a++)
                        e.deleteFramebuffer(i.__webglFramebuffer[a]),
                        i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer[a]);
                else
                    e.deleteFramebuffer(i.__webglFramebuffer),
                    i.__webglDepthbuffer && e.deleteRenderbuffer(i.__webglDepthbuffer);
                n["delete"](t.texture),
                n["delete"](t)
            }
        }
        function g(t, r) {
            var a = n.get(t);
            if (t.version > 0 && a.__version !== t.version) {
                var o = t.image;
                if (void 0 === o)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
                else {
                    if (o.complete !== !1)
                        return void b(a, t, r);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
                }
            }
            i.activeTexture(e.TEXTURE0 + r),
            i.bindTexture(e.TEXTURE_2D, a.__webglTexture)
        }
        function v(t, o) {
            var h = n.get(t);
            if (6 === t.image.length)
                if (t.version > 0 && h.__version !== t.version) {
                    h.__image__webglTextureCube || (t.addEventListener("dispose", p),
                    h.__image__webglTextureCube = e.createTexture(),
                    A.textures++),
                    i.activeTexture(e.TEXTURE0 + o),
                    i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                    for (var l = t && t.isCompressedTexture, u = t.image[0] && t.image[0].isDataTexture, d = [], f = 0; 6 > f; f++)
                        d[f] = l || u ? u ? t.image[f].image : t.image[f] : s(t.image[f], r.maxCubemapSize);
                    var m = d[0]
                      , g = c(m)
                      , v = a(t.format)
                      , y = a(t.type);
                    x(e.TEXTURE_CUBE_MAP, t, g);
                    for (var f = 0; 6 > f; f++)
                        if (l)
                            for (var b, _ = d[f].mipmaps, w = 0, M = _.length; M > w; w++)
                                b = _[w],
                                t.format !== po && t.format !== uo ? i.getCompressedTextureFormats().indexOf(v) > -1 ? i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, w, v, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, w, v, b.width, b.height, 0, v, y, b.data);
                        else
                            u ? i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, v, d[f].width, d[f].height, 0, v, y, d[f].data) : i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, v, v, y, d[f]);
                    t.generateMipmaps && g && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                    h.__version = t.version,
                    t.onUpdate && t.onUpdate(t)
                } else
                    i.activeTexture(e.TEXTURE0 + o),
                    i.bindTexture(e.TEXTURE_CUBE_MAP, h.__image__webglTextureCube)
        }
        function y(t, r) {
            i.activeTexture(e.TEXTURE0 + r),
            i.bindTexture(e.TEXTURE_CUBE_MAP, n.get(t).__webglTexture)
        }
        function x(i, o, s) {
            var c;
            if (s ? (e.texParameteri(i, e.TEXTURE_WRAP_S, a(o.wrapS)),
            e.texParameteri(i, e.TEXTURE_WRAP_T, a(o.wrapT)),
            e.texParameteri(i, e.TEXTURE_MAG_FILTER, a(o.magFilter)),
            e.texParameteri(i, e.TEXTURE_MIN_FILTER, a(o.minFilter))) : (e.texParameteri(i, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(i, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            (o.wrapS !== Va || o.wrapT !== Va) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o),
            e.texParameteri(i, e.TEXTURE_MAG_FILTER, u(o.magFilter)),
            e.texParameteri(i, e.TEXTURE_MIN_FILTER, u(o.minFilter)),
            o.minFilter !== Wa && o.minFilter !== qa && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)),
            c = t.get("EXT_texture_filter_anisotropic")) {
                if (o.type === ro && null === t.get("OES_texture_float_linear"))
                    return;
                if (o.type === ao && null === t.get("OES_texture_half_float_linear"))
                    return;
                (o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (e.texParameterf(i, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())),
                n.get(o).__currentAnisotropy = o.anisotropy)
            }
        }
        function b(t, n, o) {
            void 0 === t.__webglInit && (t.__webglInit = !0,
            n.addEventListener("dispose", p),
            t.__webglTexture = e.createTexture(),
            A.textures++),
            i.activeTexture(e.TEXTURE0 + o),
            i.bindTexture(e.TEXTURE_2D, t.__webglTexture),
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n.flipY),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha),
            e.pixelStorei(e.UNPACK_ALIGNMENT, n.unpackAlignment);
            var u = s(n.image, r.maxTextureSize);
            l(n) && c(u) === !1 && (u = h(u));
            var d = c(u)
              , f = a(n.format)
              , m = a(n.type);
            x(e.TEXTURE_2D, n, d);
            var g, v = n.mipmaps;
            if (n.isDepthTexture) {
                var y = e.DEPTH_COMPONENT;
                if (n.type === ro) {
                    if (!L)
                        throw new Error("Float Depth Texture only supported in WebGL2.0");
                    y = e.DEPTH_COMPONENT32F
                } else
                    L && (y = e.DEPTH_COMPONENT16);
                n.format === vo && y === e.DEPTH_COMPONENT && n.type !== to && n.type !== no && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
                n.type = to,
                m = a(n.type)),
                n.format === yo && (y = e.DEPTH_STENCIL,
                n.type !== ho && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
                n.type = ho,
                m = a(n.type))),
                i.texImage2D(e.TEXTURE_2D, 0, y, u.width, u.height, 0, f, m, null)
            } else if (n.isDataTexture)
                if (v.length > 0 && d) {
                    for (var b = 0, _ = v.length; _ > b; b++)
                        g = v[b],
                        i.texImage2D(e.TEXTURE_2D, b, f, g.width, g.height, 0, f, m, g.data);
                    n.generateMipmaps = !1
                } else
                    i.texImage2D(e.TEXTURE_2D, 0, f, u.width, u.height, 0, f, m, u.data);
            else if (n.isCompressedTexture)
                for (var b = 0, _ = v.length; _ > b; b++)
                    g = v[b],
                    n.format !== po && n.format !== uo ? i.getCompressedTextureFormats().indexOf(f) > -1 ? i.compressedTexImage2D(e.TEXTURE_2D, b, f, g.width, g.height, 0, g.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(e.TEXTURE_2D, b, f, g.width, g.height, 0, f, m, g.data);
            else if (v.length > 0 && d) {
                for (var b = 0, _ = v.length; _ > b; b++)
                    g = v[b],
                    i.texImage2D(e.TEXTURE_2D, b, f, f, m, g);
                n.generateMipmaps = !1
            } else
                i.texImage2D(e.TEXTURE_2D, 0, f, f, m, u);
            n.generateMipmaps && d && e.generateMipmap(e.TEXTURE_2D),
            t.__version = n.version,
            n.onUpdate && n.onUpdate(n)
        }
        function _(t, r, o, s) {
            var c = a(r.texture.format)
              , h = a(r.texture.type);
            i.texImage2D(s, 0, c, r.width, r.height, 0, c, h, null),
            e.bindFramebuffer(e.FRAMEBUFFER, t),
            e.framebufferTexture2D(e.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0),
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        function w(t, i) {
            e.bindRenderbuffer(e.RENDERBUFFER, t),
            i.depthBuffer && !i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, i.width, i.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : i.depthBuffer && i.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, i.width, i.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, i.width, i.height),
            e.bindRenderbuffer(e.RENDERBUFFER, null)
        }
        function M(t, i) {
            var r = i && i.isWebGLRenderTargetCube;
            if (r)
                throw new Error("Depth Texture with cube render targets is not supported!");
            if (e.bindFramebuffer(e.FRAMEBUFFER, t),
            !i.depthTexture || !i.depthTexture.isDepthTexture)
                throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width,
            i.depthTexture.image.height = i.height,
            i.depthTexture.needsUpdate = !0),
            g(i.depthTexture, 0);
            var a = n.get(i.depthTexture).__webglTexture;
            if (i.depthTexture.format === vo)
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a, 0);
            else {
                if (i.depthTexture.format !== yo)
                    throw new Error("Unknown depthTexture format");
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, a, 0)
            }
        }
        function E(t) {
            var i = n.get(t)
              , r = t.isWebGLRenderTargetCube === !0;
            if (t.depthTexture) {
                if (r)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                M(i.__webglFramebuffer, t)
            } else if (r) {
                i.__webglDepthbuffer = [];
                for (var a = 0; 6 > a; a++)
                    e.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[a]),
                    i.__webglDepthbuffer[a] = e.createRenderbuffer(),
                    w(i.__webglDepthbuffer[a], t)
            } else
                e.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer),
                i.__webglDepthbuffer = e.createRenderbuffer(),
                w(i.__webglDepthbuffer, t);
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        function T(t) {
            var r = n.get(t)
              , a = n.get(t.texture);
            t.addEventListener("dispose", d),
            a.__webglTexture = e.createTexture(),
            A.textures++;
            var o = t.isWebGLRenderTargetCube === !0
              , s = c(t);
            if (o) {
                r.__webglFramebuffer = [];
                for (var h = 0; 6 > h; h++)
                    r.__webglFramebuffer[h] = e.createFramebuffer()
            } else
                r.__webglFramebuffer = e.createFramebuffer();
            if (o) {
                i.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture),
                x(e.TEXTURE_CUBE_MAP, t.texture, s);
                for (var h = 0; 6 > h; h++)
                    _(r.__webglFramebuffer[h], t, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + h);
                t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                i.bindTexture(e.TEXTURE_CUBE_MAP, null)
            } else
                i.bindTexture(e.TEXTURE_2D, a.__webglTexture),
                x(e.TEXTURE_2D, t.texture, s),
                _(r.__webglFramebuffer, t, e.COLOR_ATTACHMENT0, e.TEXTURE_2D),
                t.texture.generateMipmaps && s && e.generateMipmap(e.TEXTURE_2D),
                i.bindTexture(e.TEXTURE_2D, null);
            t.depthBuffer && E(t)
        }
        function S(t) {
            var r = t.texture;
            if (r.generateMipmaps && c(t) && r.minFilter !== Wa && r.minFilter !== qa) {
                var a = t && t.isWebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D
                  , o = n.get(r).__webglTexture;
                i.bindTexture(a, o),
                e.generateMipmap(a),
                i.bindTexture(a, null)
            }
        }
        var A = o.memory
          , L = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
        this.setTexture2D = g,
        this.setTextureCube = v,
        this.setTextureCubeDynamic = y,
        this.setupRenderTarget = T,
        this.updateRenderTargetMipmap = S
    }
    function et() {
        var e = {};
        return {
            get: function(t) {
                var i = t.uuid
                  , n = e[i];
                return void 0 === n && (n = {},
                e[i] = n),
                n
            },
            "delete": function(t) {
                delete e[t.uuid]
            },
            clear: function() {
                e = {}
            }
        }
    }
    function tt(e, t, i) {
        function n() {
            var t = !1
              , i = new r
              , n = null
              , a = new r;
            return {
                setMask: function(i) {
                    n === i || t || (e.colorMask(i, i, i, i),
                    n = i)
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t, n, r, o, s) {
                    s === !0 && (t *= o,
                    n *= o,
                    r *= o),
                    i.set(t, n, r, o),
                    a.equals(i) === !1 && (e.clearColor(t, n, r, o),
                    a.copy(i))
                },
                reset: function() {
                    t = !1,
                    n = null,
                    a.set(0, 0, 0, 1)
                }
            }
        }
        function a() {
            var t = !1
              , i = null
              , n = null
              , r = null;
            return {
                setTest: function(t) {
                    t ? d(e.DEPTH_TEST) : f(e.DEPTH_TEST)
                },
                setMask: function(n) {
                    i === n || t || (e.depthMask(n),
                    i = n)
                },
                setFunc: function(t) {
                    if (n !== t) {
                        if (t)
                            switch (t) {
                            case ga:
                                e.depthFunc(e.NEVER);
                                break;
                            case va:
                                e.depthFunc(e.ALWAYS);
                                break;
                            case ya:
                                e.depthFunc(e.LESS);
                                break;
                            case xa:
                                e.depthFunc(e.LEQUAL);
                                break;
                            case ba:
                                e.depthFunc(e.EQUAL);
                                break;
                            case _a:
                                e.depthFunc(e.GEQUAL);
                                break;
                            case wa:
                                e.depthFunc(e.GREATER);
                                break;
                            case Ma:
                                e.depthFunc(e.NOTEQUAL);
                                break;
                            default:
                                e.depthFunc(e.LEQUAL)
                            }
                        else
                            e.depthFunc(e.LEQUAL);
                        n = t
                    }
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t) {
                    r !== t && (e.clearDepth(t),
                    r = t)
                },
                reset: function() {
                    t = !1,
                    i = null,
                    n = null,
                    r = null
                }
            }
        }
        function o() {
            var t = !1
              , i = null
              , n = null
              , r = null
              , a = null
              , o = null
              , s = null
              , c = null
              , h = null;
            return {
                setTest: function(t) {
                    t ? d(e.STENCIL_TEST) : f(e.STENCIL_TEST)
                },
                setMask: function(n) {
                    i === n || t || (e.stencilMask(n),
                    i = n)
                },
                setFunc: function(t, i, o) {
                    (n !== t || r !== i || a !== o) && (e.stencilFunc(t, i, o),
                    n = t,
                    r = i,
                    a = o)
                },
                setOp: function(t, i, n) {
                    (o !== t || s !== i || c !== n) && (e.stencilOp(t, i, n),
                    o = t,
                    s = i,
                    c = n)
                },
                setLocked: function(e) {
                    t = e
                },
                setClear: function(t) {
                    h !== t && (e.clearStencil(t),
                    h = t)
                },
                reset: function() {
                    t = !1,
                    i = null,
                    n = null,
                    r = null,
                    a = null,
                    o = null,
                    s = null,
                    c = null,
                    h = null
                }
            }
        }
        function s(t, i, n) {
            var r = new Uint8Array(4)
              , a = e.createTexture();
            e.bindTexture(t, a),
            e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST),
            e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
            for (var o = 0; n > o; o++)
                e.texImage2D(i + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, r);
            return a
        }
        function c() {
            z.setClear(0, 0, 0, 1),
            B.setClear(1),
            G.setClear(0),
            d(e.DEPTH_TEST),
            b(xa),
            T(!1),
            S(Cr),
            d(e.CULL_FACE),
            d(e.BLEND),
            g(qr)
        }
        function h() {
            for (var e = 0, t = V.length; t > e; e++)
                V[e] = 0
        }
        function l(i) {
            if (V[i] = 1,
            0 === k[i] && (e.enableVertexAttribArray(i),
            k[i] = 1),
            0 !== j[i]) {
                var n = t.get("ANGLE_instanced_arrays");
                n.vertexAttribDivisorANGLE(i, 0),
                j[i] = 0
            }
        }
        function u(t, i, n) {
            V[t] = 1,
            0 === k[t] && (e.enableVertexAttribArray(t),
            k[t] = 1),
            j[t] !== i && (n.vertexAttribDivisorANGLE(t, i),
            j[t] = i)
        }
        function p() {
            for (var t = 0, i = k.length; t !== i; ++t)
                k[t] !== V[t] && (e.disableVertexAttribArray(t),
                k[t] = 0)
        }
        function d(t) {
            W[t] !== !0 && (e.enable(t),
            W[t] = !0)
        }
        function f(t) {
            W[t] !== !1 && (e.disable(t),
            W[t] = !1)
        }
        function m() {
            if (null === X && (X = [],
            t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc") || t.get("WEBGL_compressed_texture_etc1")))
                for (var i = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++)
                    X.push(i[n]);
            return X
        }
        function g(t, n, r, a, o, s, c, h) {
            t !== Yr ? d(e.BLEND) : f(e.BLEND),
            (t !== Y || h !== ee) && (t === Zr ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
            e.blendFuncSeparate(e.ONE, e.ONE, e.ONE, e.ONE)) : (e.blendEquation(e.FUNC_ADD),
            e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === Jr ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
            e.blendFuncSeparate(e.ZERO, e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
            e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === Qr ? h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
            e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA)) : (e.blendEquation(e.FUNC_ADD),
            e.blendFunc(e.ZERO, e.SRC_COLOR)) : h ? (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
            e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)) : (e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
            e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)),
            Y = t,
            ee = h),
            t === Kr ? (o = o || n,
            s = s || r,
            c = c || a,
            (n !== q || o !== Q) && (e.blendEquationSeparate(i(n), i(o)),
            q = n,
            Q = o),
            (r !== Z || a !== J || s !== K || c !== $) && (e.blendFuncSeparate(i(r), i(a), i(s), i(c)),
            Z = r,
            J = a,
            K = s,
            $ = c)) : (q = null,
            Z = null,
            J = null,
            Q = null,
            K = null,
            $ = null)
        }
        function v(e) {
            z.setMask(e)
        }
        function y(e) {
            B.setTest(e)
        }
        function x(e) {
            B.setMask(e)
        }
        function b(e) {
            B.setFunc(e)
        }
        function _(e) {
            G.setTest(e)
        }
        function w(e) {
            G.setMask(e)
        }
        function M(e, t, i) {
            G.setFunc(e, t, i)
        }
        function E(e, t, i) {
            G.setOp(e, t, i)
        }
        function T(t) {
            te !== t && (e.frontFace(t ? e.CW : e.CCW),
            te = t)
        }
        function S(t) {
            t !== Pr ? (d(e.CULL_FACE),
            t !== ie && e.cullFace(t === Cr ? e.BACK : t === Ir ? e.FRONT : e.FRONT_AND_BACK)) : f(e.CULL_FACE),
            ie = t
        }
        function A(t) {
            t !== ne && (e.lineWidth(t),
            ne = t)
        }
        function L(t, i, n) {
            t ? (d(e.POLYGON_OFFSET_FILL),
            (re !== i || ae !== n) && (e.polygonOffset(i, n),
            re = i,
            ae = n)) : f(e.POLYGON_OFFSET_FILL)
        }
        function R() {
            return oe
        }
        function P(t) {
            oe = t,
            t ? d(e.SCISSOR_TEST) : f(e.SCISSOR_TEST)
        }
        function C(t) {
            void 0 === t && (t = e.TEXTURE0 + se - 1),
            ce !== t && (e.activeTexture(t),
            ce = t)
        }
        function I(t, i) {
            null === ce && C();
            var n = he[ce];
            void 0 === n && (n = {
                type: void 0,
                texture: void 0
            },
            he[ce] = n),
            (n.type !== t || n.texture !== i) && (e.bindTexture(t, i || pe[t]),
            n.type = t,
            n.texture = i)
        }
        function U() {
            try {
                e.compressedTexImage2D.apply(e, arguments)
            } catch (t) {
                console.error(t)
            }
        }
        function D() {
            try {
                e.texImage2D.apply(e, arguments)
            } catch (t) {
                console.error(t)
            }
        }
        function N(t) {
            le.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w),
            le.copy(t))
        }
        function O(t) {
            ue.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w),
            ue.copy(t))
        }
        function F() {
            for (var t = 0; t < k.length; t++)
                1 === k[t] && (e.disableVertexAttribArray(t),
                k[t] = 0);
            W = {},
            X = null,
            ce = null,
            he = {},
            Y = null,
            te = null,
            ie = null,
            z.reset(),
            B.reset(),
            G.reset()
        }
        var z = new n
          , B = new a
          , G = new o
          , H = e.getParameter(e.MAX_VERTEX_ATTRIBS)
          , V = new Uint8Array(H)
          , k = new Uint8Array(H)
          , j = new Uint8Array(H)
          , W = {}
          , X = null
          , Y = null
          , q = null
          , Z = null
          , J = null
          , Q = null
          , K = null
          , $ = null
          , ee = !1
          , te = null
          , ie = null
          , ne = null
          , re = null
          , ae = null
          , oe = null
          , se = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
          , ce = null
          , he = {}
          , le = new r
          , ue = new r
          , pe = {};
        return pe[e.TEXTURE_2D] = s(e.TEXTURE_2D, e.TEXTURE_2D, 1),
        pe[e.TEXTURE_CUBE_MAP] = s(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
        {
            buffers: {
                color: z,
                depth: B,
                stencil: G
            },
            init: c,
            initAttributes: h,
            enableAttribute: l,
            enableAttributeAndDivisor: u,
            disableUnusedAttributes: p,
            enable: d,
            disable: f,
            getCompressedTextureFormats: m,
            setBlending: g,
            setColorWrite: v,
            setDepthTest: y,
            setDepthWrite: x,
            setDepthFunc: b,
            setStencilTest: _,
            setStencilWrite: w,
            setStencilFunc: M,
            setStencilOp: E,
            setFlipSided: T,
            setCullFace: S,
            setLineWidth: A,
            setPolygonOffset: L,
            getScissorTest: R,
            setScissorTest: P,
            activeTexture: C,
            bindTexture: I,
            compressedTexImage2D: U,
            texImage2D: D,
            scissor: N,
            viewport: O,
            reset: F
        }
    }
    function it(e, t, i) {
        function n() {
            if (void 0 !== a)
                return a;
            var i = t.get("EXT_texture_filter_anisotropic");
            return a = null !== i ? e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
        function r(t) {
            if ("highp" === t) {
                if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0)
                    return "highp";
                t = "mediump"
            }
            return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        var a, o = void 0 !== i.precision ? i.precision : "highp", s = r(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
        o = s);
        var c = i.logarithmicDepthBuffer === !0 && !!t.get("EXT_frag_depth")
          , h = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
          , l = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
          , u = e.getParameter(e.MAX_TEXTURE_SIZE)
          , p = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
          , d = e.getParameter(e.MAX_VERTEX_ATTRIBS)
          , f = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
          , m = e.getParameter(e.MAX_VARYING_VECTORS)
          , g = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
          , v = l > 0
          , y = !!t.get("OES_texture_float")
          , x = v && y;
        return {
            getMaxAnisotropy: n,
            getMaxPrecision: r,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: l,
            maxTextureSize: u,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: x
        }
    }
    function nt(e) {
        var t = {};
        return {
            get: function(i) {
                if (void 0 !== t[i])
                    return t[i];
                var n;
                switch (i) {
                case "WEBGL_depth_texture":
                    n = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                case "WEBGL_compressed_texture_etc1":
                    n = e.getExtension("WEBGL_compressed_texture_etc1");
                    break;
                default:
                    n = e.getExtension(i)
                }
                return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."),
                t[i] = n,
                n
            }
        }
    }
    function rt() {
        function e() {
            h.value !== n && (h.value = n,
            h.needsUpdate = r > 0),
            i.numPlanes = r,
            i.numIntersection = 0
        }
        function t(e, t, n, r) {
            var a = null !== e ? e.length : 0
              , o = null;
            if (0 !== a) {
                if (o = h.value,
                r !== !0 || null === o) {
                    var l = n + 4 * a
                      , u = t.matrixWorldInverse;
                    c.getNormalMatrix(u),
                    (null === o || o.length < l) && (o = new Float32Array(l));
                    for (var p = 0, d = n; p !== a; ++p,
                    d += 4)
                        s.copy(e[p]).applyMatrix4(u, c),
                        s.normal.toArray(o, d),
                        o[d + 3] = s.constant
                }
                h.value = o,
                h.needsUpdate = !0
            }
            return i.numPlanes = a,
            o
        }
        var i = this
          , n = null
          , r = 0
          , a = !1
          , o = !1
          , s = new ie
          , c = new te
          , h = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = h,
        this.numPlanes = 0,
        this.numIntersection = 0,
        this.init = function(e, i, o) {
            var s = 0 !== e.length || i || 0 !== r || a;
            return a = i,
            n = t(e, o, 0),
            r = e.length,
            s
        }
        ,
        this.beginShadows = function() {
            o = !0,
            t(null)
        }
        ,
        this.endShadows = function() {
            o = !1,
            e()
        }
        ,
        this.setState = function(i, s, c, l, u, p) {
            if (!a || null === i || 0 === i.length || o && !c)
                o ? t(null) : e();
            else {
                var d = o ? 0 : r
                  , f = 4 * d
                  , m = u.clippingState || null;
                h.value = m,
                m = t(i, l, f, p);
                for (var g = 0; g !== f; ++g)
                    m[g] = n[g];
                u.clippingState = m,
                this.numIntersection = s ? this.numPlanes : 0,
                this.numPlanes += d
            }
        }
    }
    function at(e) {
        function t() {
            return null === ue ? Te : 1
        }
        function i() {
            ct.init(),
            ct.scissor(ve.copy(Pe).multiplyScalar(Te)),
            ct.viewport(xe.copy(Fe).multiplyScalar(Te)),
            ct.buffers.color.setClear(_e.r, _e.g, _e.b, we, Y)
        }
        function n() {
            le = null,
            ge = null,
            me = "",
            fe = -1,
            ct.reset()
        }
        function a(e) {
            e.preventDefault(),
            n(),
            i(),
            ht.clear()
        }
        function o(e) {
            var t = e.target;
            t.removeEventListener("dispose", o),
            s(t)
        }
        function s(e) {
            l(e),
            ht["delete"](e)
        }
        function l(e) {
            var t = ht.get(e).program;
            e.program = void 0,
            void 0 !== t && pt.releaseProgram(t)
        }
        function u(e, t, i, n) {
            var r;
            if (i && i.isInstancedBufferGeometry && (r = ot.get("ANGLE_instanced_arrays"),
            null === r))
                return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            void 0 === n && (n = 0),
            ct.initAttributes();
            var a = i.attributes
              , o = t.getAttributes()
              , s = e.defaultAttributeValues;
            for (var c in o) {
                var h = o[c];
                if (h >= 0) {
                    var l = a[c];
                    if (void 0 !== l) {
                        var u = l.normalized
                          , p = l.itemSize
                          , d = ut.getAttributeProperties(l)
                          , f = d.__webglBuffer
                          , m = d.type
                          , g = d.bytesPerElement;
                        if (l.isInterleavedBufferAttribute) {
                            var v = l.data
                              , y = v.stride
                              , x = l.offset;
                            v && v.isInstancedInterleavedBuffer ? (ct.enableAttributeAndDivisor(h, v.meshPerAttribute, r),
                            void 0 === i.maxInstancedCount && (i.maxInstancedCount = v.meshPerAttribute * v.count)) : ct.enableAttribute(h),
                            Ze.bindBuffer(Ze.ARRAY_BUFFER, f),
                            Ze.vertexAttribPointer(h, p, m, u, y * g, (n * y + x) * g)
                        } else
                            l.isInstancedBufferAttribute ? (ct.enableAttributeAndDivisor(h, l.meshPerAttribute, r),
                            void 0 === i.maxInstancedCount && (i.maxInstancedCount = l.meshPerAttribute * l.count)) : ct.enableAttribute(h),
                            Ze.bindBuffer(Ze.ARRAY_BUFFER, f),
                            Ze.vertexAttribPointer(h, p, m, u, 0, n * p * g)
                    } else if (void 0 !== s) {
                        var b = s[c];
                        if (void 0 !== b)
                            switch (b.length) {
                            case 2:
                                Ze.vertexAttrib2fv(h, b);
                                break;
                            case 3:
                                Ze.vertexAttrib3fv(h, b);
                                break;
                            case 4:
                                Ze.vertexAttrib4fv(h, b);
                                break;
                            default:
                                Ze.vertexAttrib1fv(h, b)
                            }
                    }
                }
            }
            ct.disableUnusedAttributes()
        }
        function p(e, t) {
            return Math.abs(t[0]) - Math.abs(e[0])
        }
        function d(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.program && t.material.program && e.material.program !== t.material.program ? e.material.program.id - t.material.program.id : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
        }
        function f(e, t) {
            return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
        }
        function m(e, t, i, n, r) {
            var a, o;
            i.transparent ? (a = ie,
            o = ++ae) : (a = $,
            o = ++te);
            var s = a[o];
            void 0 !== s ? (s.id = e.id,
            s.object = e,
            s.geometry = t,
            s.material = i,
            s.z = je.z,
            s.group = r) : (s = {
                id: e.id,
                object: e,
                geometry: t,
                material: i,
                z: je.z,
                group: r
            },
            a.push(s))
        }
        function g(e) {
            var t = e.geometry;
            return null === t.boundingSphere && t.computeBoundingSphere(),
            Ve.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
            y(Ve)
        }
        function v(e) {
            return Ve.center.set(0, 0, 0),
            Ve.radius = .7071067811865476,
            Ve.applyMatrix4(e.matrixWorld),
            y(Ve)
        }
        function y(e) {
            if (!ze.intersectsSphere(e))
                return !1;
            var t = Be.numPlanes;
            if (0 === t)
                return !0;
            var i = he.clippingPlanes
              , n = e.center
              , r = -e.radius
              , a = 0;
            do
                if (i[a].distanceToPoint(n) < r)
                    return !1;
            while (++a !== t);
            return !0
        }
        function x(e, t) {
            if (e.visible !== !1) {
                var i = 0 !== (e.layers.mask & t.layers.mask);
                if (i)
                    if (e.isLight)
                        K.push(e);
                    else if (e.isSprite)
                        (e.frustumCulled === !1 || v(e) === !0) && se.push(e);
                    else if (e.isLensFlare)
                        ce.push(e);
                    else if (e.isImmediateRenderObject)
                        he.sortObjects === !0 && (je.setFromMatrixPosition(e.matrixWorld),
                        je.applyProjection(ke)),
                        m(e, null, e.material, je.z, null);
                    else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(),
                    e.frustumCulled === !1 || g(e) === !0)) {
                        var n = e.material;
                        if (n.visible === !0) {
                            he.sortObjects === !0 && (je.setFromMatrixPosition(e.matrixWorld),
                            je.applyProjection(ke));
                            var r = ut.update(e);
                            if (n.isMultiMaterial)
                                for (var a = r.groups, o = n.materials, s = 0, c = a.length; c > s; s++) {
                                    var h = a[s]
                                      , l = o[h.materialIndex];
                                    l.visible === !0 && m(e, r, l, je.z, h)
                                }
                            else
                                m(e, r, n, je.z, null)
                        }
                    }
                for (var u = e.children, s = 0, c = u.length; c > s; s++)
                    x(u[s], t)
            }
        }
        function b(e, t, i, n) {
            for (var r = 0, a = e.length; a > r; r++) {
                var o = e[r]
                  , s = o.object
                  , c = o.geometry
                  , h = void 0 === n ? o.material : n
                  , l = o.group;
                if (s.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, s.matrixWorld),
                s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
                s.onBeforeRender(he, t, i, c, h, l),
                s.isImmediateRenderObject) {
                    w(h);
                    var u = M(i, t.fog, h, s);
                    me = "",
                    s.render(function(e) {
                        he.renderBufferImmediate(e, u, h)
                    })
                } else
                    he.renderBufferDirect(i, t.fog, c, h, s, l);
                s.onAfterRender(he, t, i, c, h, l)
            }
        }
        function _(e, t, i) {
            var n = ht.get(e)
              , r = pt.getParameters(e, Ye, t, Be.numPlanes, Be.numIntersection, i)
              , a = pt.getProgramCode(e, r)
              , s = n.program
              , c = !0;
            if (void 0 === s)
                e.addEventListener("dispose", o);
            else if (s.code !== a)
                l(e);
            else {
                if (void 0 !== r.shaderID)
                    return;
                c = !1
            }
            if (c) {
                if (r.shaderID) {
                    var h = rh[r.shaderID];
                    n.__webglShader = {
                        name: e.type,
                        uniforms: Object.assign({}, h.uniforms),
                        vertexShader: h.vertexShader,
                        fragmentShader: h.fragmentShader
                    }
                } else
                    n.__webglShader = {
                        name: e.type,
                        uniforms: e.uniforms,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader
                    };
                e.__webglShader = n.__webglShader,
                s = pt.acquireProgram(e, r, a),
                n.program = s,
                e.program = s
            }
            var u = s.getAttributes();
            if (e.morphTargets) {
                e.numSupportedMorphTargets = 0;
                for (var p = 0; p < he.maxMorphTargets; p++)
                    u["morphTarget" + p] >= 0 && e.numSupportedMorphTargets++
            }
            if (e.morphNormals) {
                e.numSupportedMorphNormals = 0;
                for (var p = 0; p < he.maxMorphNormals; p++)
                    u["morphNormal" + p] >= 0 && e.numSupportedMorphNormals++
            }
            var d = n.__webglShader.uniforms;
            (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (n.numClippingPlanes = Be.numPlanes,
            n.numIntersection = Be.numIntersection,
            d.clippingPlanes = Be.uniform),
            n.fog = t,
            n.lightsHash = Ye.hash,
            e.lights && (d.ambientLightColor.value = Ye.ambient,
            d.directionalLights.value = Ye.directional,
            d.spotLights.value = Ye.spot,
            d.rectAreaLights.value = Ye.rectArea,
            d.pointLights.value = Ye.point,
            d.hemisphereLights.value = Ye.hemi,
            d.directionalShadowMap.value = Ye.directionalShadowMap,
            d.directionalShadowMatrix.value = Ye.directionalShadowMatrix,
            d.spotShadowMap.value = Ye.spotShadowMap,
            d.spotShadowMatrix.value = Ye.spotShadowMatrix,
            d.pointShadowMap.value = Ye.pointShadowMap,
            d.pointShadowMatrix.value = Ye.pointShadowMatrix);
            var f = n.program.getUniforms()
              , m = j.seqWithValue(f.seq, d);
            n.uniformsList = m
        }
        function w(e) {
            e.side === Hr ? ct.disable(Ze.CULL_FACE) : ct.enable(Ze.CULL_FACE),
            ct.setFlipSided(e.side === Gr),
            e.transparent === !0 ? ct.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : ct.setBlending(Yr),
            ct.setDepthFunc(e.depthFunc),
            ct.setDepthTest(e.depthTest),
            ct.setDepthWrite(e.depthWrite),
            ct.setColorWrite(e.colorWrite),
            ct.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
        }
        function M(e, t, i, n) {
            be = 0;
            var r = ht.get(i);
            if (Ge && (He || e !== ge)) {
                var a = e === ge && i.id === fe;
                Be.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, e, r, a)
            }
            i.needsUpdate === !1 && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== t ? i.needsUpdate = !0 : i.lights && r.lightsHash !== Ye.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === Be.numPlanes && r.numIntersection === Be.numIntersection || (i.needsUpdate = !0)),
            i.needsUpdate && (_(i, t, n),
            i.needsUpdate = !1);
            var o = !1
              , s = !1
              , c = !1
              , h = r.program
              , l = h.getUniforms()
              , u = r.__webglShader.uniforms;
            if (h.id !== le && (Ze.useProgram(h.program),
            le = h.id,
            o = !0,
            s = !0,
            c = !0),
            i.id !== fe && (fe = i.id,
            s = !0),
            o || e !== ge) {
                if (l.set(Ze, e, "projectionMatrix"),
                st.logarithmicDepthBuffer && l.setValue(Ze, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)),
                e !== ge && (ge = e,
                s = !0,
                c = !0),
                i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
                    var p = l.map.cameraPosition;
                    void 0 !== p && p.setValue(Ze, je.setFromMatrixPosition(e.matrixWorld))
                }
                (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && l.setValue(Ze, "viewMatrix", e.matrixWorldInverse),
                l.set(Ze, he, "toneMappingExposure"),
                l.set(Ze, he, "toneMappingWhitePoint")
            }
            if (i.skinning) {
                l.setOptional(Ze, n, "bindMatrix"),
                l.setOptional(Ze, n, "bindMatrixInverse");
                var d = n.skeleton;
                d && (st.floatVertexTextures && d.useVertexTexture ? (l.set(Ze, d, "boneTexture"),
                l.set(Ze, d, "boneTextureWidth"),
                l.set(Ze, d, "boneTextureHeight")) : l.setOptional(Ze, d, "boneMatrices"))
            }
            return s && (i.lights && D(u, c),
            t && i.fog && L(u, t),
            (i.isMeshBasicMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshDepthMaterial) && E(u, i),
            i.isLineBasicMaterial ? T(u, i) : i.isLineDashedMaterial ? (T(u, i),
            S(u, i)) : i.isPointsMaterial ? A(u, i) : i.isMeshLambertMaterial ? R(u, i) : i.isMeshToonMaterial ? C(u, i) : i.isMeshPhongMaterial ? P(u, i) : i.isMeshPhysicalMaterial ? U(u, i) : i.isMeshStandardMaterial ? I(u, i) : i.isMeshDepthMaterial ? i.displacementMap && (u.displacementMap.value = i.displacementMap,
            u.displacementScale.value = i.displacementScale,
            u.displacementBias.value = i.displacementBias) : i.isMeshNormalMaterial && (u.opacity.value = i.opacity),
            j.upload(Ze, r.uniformsList, u, he)),
            l.set(Ze, n, "modelViewMatrix"),
            l.set(Ze, n, "normalMatrix"),
            l.setValue(Ze, "modelMatrix", n.matrixWorld),
            h
        }
        function E(e, t) {
            e.opacity.value = t.opacity,
            e.diffuse.value = t.color,
            t.emissive && e.emissive.value.copy(t.emissive).multiplyScalar(t.emissiveIntensity),
            e.map.value = t.map,
            e.specularMap.value = t.specularMap,
            e.alphaMap.value = t.alphaMap,
            t.lightMap && (e.lightMap.value = t.lightMap,
            e.lightMapIntensity.value = t.lightMapIntensity),
            t.aoMap && (e.aoMap.value = t.aoMap,
            e.aoMapIntensity.value = t.aoMapIntensity);
            var i;
            if (t.map ? i = t.map : t.specularMap ? i = t.specularMap : t.displacementMap ? i = t.displacementMap : t.normalMap ? i = t.normalMap : t.bumpMap ? i = t.bumpMap : t.roughnessMap ? i = t.roughnessMap : t.metalnessMap ? i = t.metalnessMap : t.alphaMap ? i = t.alphaMap : t.emissiveMap && (i = t.emissiveMap),
            void 0 !== i) {
                i.isWebGLRenderTarget && (i = i.texture);
                var n = i.offset
                  , r = i.repeat;
                e.offsetRepeat.value.set(n.x, n.y, r.x, r.y)
            }
            e.envMap.value = t.envMap,
            e.flipEnvMap.value = t.envMap && t.envMap.isCubeTexture ? -1 : 1,
            e.reflectivity.value = t.reflectivity,
            e.refractionRatio.value = t.refractionRatio
        }
        function T(e, t) {
            e.diffuse.value = t.color,
            e.opacity.value = t.opacity
        }
        function S(e, t) {
            e.dashSize.value = t.dashSize,
            e.totalSize.value = t.dashSize + t.gapSize,
            e.scale.value = t.scale
        }
        function A(e, t) {
            if (e.diffuse.value = t.color,
            e.opacity.value = t.opacity,
            e.size.value = t.size * Te,
            e.scale.value = .5 * Ee,
            e.map.value = t.map,
            null !== t.map) {
                var i = t.map.offset
                  , n = t.map.repeat;
                e.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
            }
        }
        function L(e, t) {
            e.fogColor.value = t.color,
            t.isFog ? (e.fogNear.value = t.near,
            e.fogFar.value = t.far) : t.isFogExp2 && (e.fogDensity.value = t.density)
        }
        function R(e, t) {
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap)
        }
        function P(e, t) {
            e.specular.value = t.specular,
            e.shininess.value = Math.max(t.shininess, 1e-4),
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
            t.bumpMap && (e.bumpMap.value = t.bumpMap,
            e.bumpScale.value = t.bumpScale),
            t.normalMap && (e.normalMap.value = t.normalMap,
            e.normalScale.value.copy(t.normalScale)),
            t.displacementMap && (e.displacementMap.value = t.displacementMap,
            e.displacementScale.value = t.displacementScale,
            e.displacementBias.value = t.displacementBias)
        }
        function C(e, t) {
            P(e, t),
            t.gradientMap && (e.gradientMap.value = t.gradientMap)
        }
        function I(e, t) {
            e.roughness.value = t.roughness,
            e.metalness.value = t.metalness,
            t.roughnessMap && (e.roughnessMap.value = t.roughnessMap),
            t.metalnessMap && (e.metalnessMap.value = t.metalnessMap),
            t.emissiveMap && (e.emissiveMap.value = t.emissiveMap),
            t.bumpMap && (e.bumpMap.value = t.bumpMap,
            e.bumpScale.value = t.bumpScale),
            t.normalMap && (e.normalMap.value = t.normalMap,
            e.normalScale.value.copy(t.normalScale)),
            t.displacementMap && (e.displacementMap.value = t.displacementMap,
            e.displacementScale.value = t.displacementScale,
            e.displacementBias.value = t.displacementBias),
            t.envMap && (e.envMapIntensity.value = t.envMapIntensity)
        }
        function U(e, t) {
            e.clearCoat.value = t.clearCoat,
            e.clearCoatRoughness.value = t.clearCoatRoughness,
            I(e, t)
        }
        function D(e, t) {
            e.ambientLightColor.needsUpdate = t,
            e.directionalLights.needsUpdate = t,
            e.pointLights.needsUpdate = t,
            e.spotLights.needsUpdate = t,
            e.rectAreaLights.needsUpdate = t,
            e.hemisphereLights.needsUpdate = t
        }
        function N(e) {
            for (var t = 0, i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                r.castShadow && (Ye.shadows[t++] = r)
            }
            Ye.shadows.length = t
        }
        function O(e, t) {
            var i, n, r, a, o, s, c, l = 0, u = 0, p = 0, d = t.matrixWorldInverse, f = 0, m = 0, g = 0, v = 0, y = 0;
            for (i = 0,
            n = e.length; n > i; i++)
                if (r = e[i],
                a = r.color,
                o = r.intensity,
                s = r.distance,
                c = r.shadow && r.shadow.map ? r.shadow.map.texture : null,
                r.isAmbientLight)
                    l += a.r * o,
                    u += a.g * o,
                    p += a.b * o;
                else if (r.isDirectionalLight) {
                    var x = dt.get(r);
                    x.color.copy(r.color).multiplyScalar(r.intensity),
                    x.direction.setFromMatrixPosition(r.matrixWorld),
                    je.setFromMatrixPosition(r.target.matrixWorld),
                    x.direction.sub(je),
                    x.direction.transformDirection(d),
                    x.shadow = r.castShadow,
                    r.castShadow && (x.shadowBias = r.shadow.bias,
                    x.shadowRadius = r.shadow.radius,
                    x.shadowMapSize = r.shadow.mapSize),
                    Ye.directionalShadowMap[f] = c,
                    Ye.directionalShadowMatrix[f] = r.shadow.matrix,
                    Ye.directional[f++] = x
                } else if (r.isSpotLight) {
                    var x = dt.get(r);
                    x.position.setFromMatrixPosition(r.matrixWorld),
                    x.position.applyMatrix4(d),
                    x.color.copy(a).multiplyScalar(o),
                    x.distance = s,
                    x.direction.setFromMatrixPosition(r.matrixWorld),
                    je.setFromMatrixPosition(r.target.matrixWorld),
                    x.direction.sub(je),
                    x.direction.transformDirection(d),
                    x.coneCos = Math.cos(r.angle),
                    x.penumbraCos = Math.cos(r.angle * (1 - r.penumbra)),
                    x.decay = 0 === r.distance ? 0 : r.decay,
                    x.shadow = r.castShadow,
                    r.castShadow && (x.shadowBias = r.shadow.bias,
                    x.shadowRadius = r.shadow.radius,
                    x.shadowMapSize = r.shadow.mapSize),
                    Ye.spotShadowMap[g] = c,
                    Ye.spotShadowMatrix[g] = r.shadow.matrix,
                    Ye.spot[g++] = x
                } else if (r.isRectAreaLight) {
                    var x = dt.get(r);
                    x.color.copy(a).multiplyScalar(o / (r.width * r.height)),
                    x.position.setFromMatrixPosition(r.matrixWorld),
                    x.position.applyMatrix4(d),
                    Xe.identity(),
                    We.copy(r.matrixWorld),
                    We.premultiply(d),
                    Xe.extractRotation(We),
                    x.halfWidth.set(.5 * r.width, 0, 0),
                    x.halfHeight.set(0, .5 * r.height, 0),
                    x.halfWidth.applyMatrix4(Xe),
                    x.halfHeight.applyMatrix4(Xe),
                    Ye.rectArea[v++] = x
                } else if (r.isPointLight) {
                    var x = dt.get(r);
                    x.position.setFromMatrixPosition(r.matrixWorld),
                    x.position.applyMatrix4(d),
                    x.color.copy(r.color).multiplyScalar(r.intensity),
                    x.distance = r.distance,
                    x.decay = 0 === r.distance ? 0 : r.decay,
                    x.shadow = r.castShadow,
                    r.castShadow && (x.shadowBias = r.shadow.bias,
                    x.shadowRadius = r.shadow.radius,
                    x.shadowMapSize = r.shadow.mapSize),
                    Ye.pointShadowMap[m] = c,
                    void 0 === Ye.pointShadowMatrix[m] && (Ye.pointShadowMatrix[m] = new h),
                    je.setFromMatrixPosition(r.matrixWorld).negate(),
                    Ye.pointShadowMatrix[m].identity().setPosition(je),
                    Ye.point[m++] = x
                } else if (r.isHemisphereLight) {
                    var x = dt.get(r);
                    x.direction.setFromMatrixPosition(r.matrixWorld),
                    x.direction.transformDirection(d),
                    x.direction.normalize(),
                    x.skyColor.copy(r.color).multiplyScalar(o),
                    x.groundColor.copy(r.groundColor).multiplyScalar(o),
                    Ye.hemi[y++] = x
                }
            Ye.ambient[0] = l,
            Ye.ambient[1] = u,
            Ye.ambient[2] = p,
            Ye.directional.length = f,
            Ye.spot.length = g,
            Ye.rectArea.length = v,
            Ye.point.length = m,
            Ye.hemi.length = y,
            Ye.hash = f + "," + m + "," + g + "," + v + "," + y + "," + Ye.shadows.length
        }
        function F() {
            var e = be;
            return e >= st.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + st.maxTextures),
            be += 1,
            e
        }
        function z(e) {
            var t;
            if (e === Ha)
                return Ze.REPEAT;
            if (e === Va)
                return Ze.CLAMP_TO_EDGE;
            if (e === ka)
                return Ze.MIRRORED_REPEAT;
            if (e === Wa)
                return Ze.NEAREST;
            if (e === Xa)
                return Ze.NEAREST_MIPMAP_NEAREST;
            if (e === Ya)
                return Ze.NEAREST_MIPMAP_LINEAR;
            if (e === qa)
                return Ze.LINEAR;
            if (e === Za)
                return Ze.LINEAR_MIPMAP_NEAREST;
            if (e === Ja)
                return Ze.LINEAR_MIPMAP_LINEAR;
            if (e === Ka)
                return Ze.UNSIGNED_BYTE;
            if (e === oo)
                return Ze.UNSIGNED_SHORT_4_4_4_4;
            if (e === so)
                return Ze.UNSIGNED_SHORT_5_5_5_1;
            if (e === co)
                return Ze.UNSIGNED_SHORT_5_6_5;
            if (e === $a)
                return Ze.BYTE;
            if (e === eo)
                return Ze.SHORT;
            if (e === to)
                return Ze.UNSIGNED_SHORT;
            if (e === io)
                return Ze.INT;
            if (e === no)
                return Ze.UNSIGNED_INT;
            if (e === ro)
                return Ze.FLOAT;
            if (e === ao && (t = ot.get("OES_texture_half_float"),
            null !== t))
                return t.HALF_FLOAT_OES;
            if (e === lo)
                return Ze.ALPHA;
            if (e === uo)
                return Ze.RGB;
            if (e === po)
                return Ze.RGBA;
            if (e === fo)
                return Ze.LUMINANCE;
            if (e === mo)
                return Ze.LUMINANCE_ALPHA;
            if (e === vo)
                return Ze.DEPTH_COMPONENT;
            if (e === yo)
                return Ze.DEPTH_STENCIL;
            if (e === ea)
                return Ze.FUNC_ADD;
            if (e === ta)
                return Ze.FUNC_SUBTRACT;
            if (e === ia)
                return Ze.FUNC_REVERSE_SUBTRACT;
            if (e === aa)
                return Ze.ZERO;
            if (e === oa)
                return Ze.ONE;
            if (e === sa)
                return Ze.SRC_COLOR;
            if (e === ca)
                return Ze.ONE_MINUS_SRC_COLOR;
            if (e === ha)
                return Ze.SRC_ALPHA;
            if (e === la)
                return Ze.ONE_MINUS_SRC_ALPHA;
            if (e === ua)
                return Ze.DST_ALPHA;
            if (e === pa)
                return Ze.ONE_MINUS_DST_ALPHA;
            if (e === da)
                return Ze.DST_COLOR;
            if (e === fa)
                return Ze.ONE_MINUS_DST_COLOR;
            if (e === ma)
                return Ze.SRC_ALPHA_SATURATE;
            if ((e === xo || e === bo || e === _o || e === wo) && (t = ot.get("WEBGL_compressed_texture_s3tc"),
            null !== t)) {
                if (e === xo)
                    return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (e === bo)
                    return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (e === _o)
                    return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (e === wo)
                    return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if ((e === Mo || e === Eo || e === To || e === So) && (t = ot.get("WEBGL_compressed_texture_pvrtc"),
            null !== t)) {
                if (e === Mo)
                    return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (e === Eo)
                    return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (e === To)
                    return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (e === So)
                    return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (e === Ao && (t = ot.get("WEBGL_compressed_texture_etc1"),
            null !== t))
                return t.COMPRESSED_RGB_ETC1_WEBGL;
            if ((e === na || e === ra) && (t = ot.get("EXT_blend_minmax"),
            null !== t)) {
                if (e === na)
                    return t.MIN_EXT;
                if (e === ra)
                    return t.MAX_EXT
            }
            return e === ho && (t = ot.get("WEBGL_depth_texture"),
            null !== t) ? t.UNSIGNED_INT_24_8_WEBGL : 0
        }
        console.log("THREE.WebGLRenderer", Lr),
        e = e || {};
        var B = void 0 !== e.canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , G = void 0 !== e.context ? e.context : null
          , H = void 0 !== e.alpha ? e.alpha : !1
          , V = void 0 !== e.depth ? e.depth : !0
          , k = void 0 !== e.stencil ? e.stencil : !0
          , X = void 0 !== e.antialias ? e.antialias : !1
          , Y = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0
          , J = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1
          , K = []
          , $ = []
          , te = -1
          , ie = []
          , ae = -1
          , oe = new Float32Array(8)
          , se = []
          , ce = [];
        this.domElement = B,
        this.context = null,
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.physicallyCorrectLights = !1,
        this.toneMapping = La,
        this.toneMappingExposure = 1,
        this.toneMappingWhitePoint = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var he = this
          , le = null
          , ue = null
          , de = null
          , fe = -1
          , me = ""
          , ge = null
          , ve = new r
          , ye = null
          , xe = new r
          , be = 0
          , _e = new W(0)
          , we = 0
          , Me = B.width
          , Ee = B.height
          , Te = 1
          , Pe = new r(0,0,Me,Ee)
          , Oe = !1
          , Fe = new r(0,0,Me,Ee)
          , ze = new ne
          , Be = new rt
          , Ge = !1
          , He = !1
          , Ve = new ee
          , ke = new h
          , je = new c
          , We = new h
          , Xe = new h
          , Ye = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            rectArea: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }
          , qe = {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        };
        this.info = {
            render: qe,
            memory: {
                geometries: 0,
                textures: 0
            },
            programs: null
        };
        var Ze;
        try {
            var Qe = {
                alpha: H,
                depth: V,
                stencil: k,
                antialias: X,
                premultipliedAlpha: Y,
                preserveDrawingBuffer: J
            };
            if (Ze = G || B.getContext("webgl", Qe) || B.getContext("experimental-webgl", Qe),
            null === Ze)
                throw null !== B.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === Ze.getShaderPrecisionFormat && (Ze.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            ),
            B.addEventListener("webglcontextlost", a, !1)
        } catch (at) {
            console.error("THREE.WebGLRenderer: " + at)
        }
        var ot = new nt(Ze);
        ot.get("WEBGL_depth_texture"),
        ot.get("OES_texture_float"),
        ot.get("OES_texture_float_linear"),
        ot.get("OES_texture_half_float"),
        ot.get("OES_texture_half_float_linear"),
        ot.get("OES_standard_derivatives"),
        ot.get("ANGLE_instanced_arrays"),
        ot.get("OES_element_index_uint") && (Se.MaxIndex = 4294967296);
        var st = new it(Ze,ot,e)
          , ct = new tt(Ze,ot,z)
          , ht = new et
          , lt = new $e(Ze,ot,ct,ht,st,z,this.info)
          , ut = new Ke(Ze,ht,this.info)
          , pt = new Je(this,st)
          , dt = new Ne;
        this.info.programs = pt.programs;
        var ft = new De(Ze,ot,qe)
          , mt = new Ue(Ze,ot,qe)
          , gt = new Ie(-1,1,1,-1,0,1)
          , vt = new Ce
          , yt = new Ae(new Re(2,2),new pe({
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }))
          , xt = rh.cube
          , bt = new Ae(new Le(5,5,5),new Q({
            uniforms: xt.uniforms,
            vertexShader: xt.vertexShader,
            fragmentShader: xt.fragmentShader,
            side: Gr,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        i(),
        this.context = Ze,
        this.capabilities = st,
        this.extensions = ot,
        this.properties = ht,
        this.state = ct;
        var _t = new re(this,Ye,ut,st);
        this.shadowMap = _t;
        var wt = new Z(this,se)
          , Mt = new q(this,ce);
        this.getContext = function() {
            return Ze
        }
        ,
        this.getContextAttributes = function() {
            return Ze.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            ot.get("WEBGL_lose_context").loseContext()
        }
        ,
        this.getMaxAnisotropy = function() {
            return st.getMaxAnisotropy()
        }
        ,
        this.getPrecision = function() {
            return st.precision
        }
        ,
        this.getPixelRatio = function() {
            return Te
        }
        ,
        this.setPixelRatio = function(e) {
            void 0 !== e && (Te = e,
            this.setSize(Fe.z, Fe.w, !1))
        }
        ,
        this.getSize = function() {
            return {
                width: Me,
                height: Ee
            }
        }
        ,
        this.setSize = function(e, t, i) {
            Me = e,
            Ee = t,
            B.width = e * Te,
            B.height = t * Te,
            i !== !1 && (B.style.width = e + "px",
            B.style.height = t + "px"),
            this.setViewport(0, 0, e, t)
        }
        ,
        this.setViewport = function(e, t, i, n) {
            ct.viewport(Fe.set(e, t, i, n))
        }
        ,
        this.setScissor = function(e, t, i, n) {
            ct.scissor(Pe.set(e, t, i, n))
        }
        ,
        this.setScissorTest = function(e) {
            ct.setScissorTest(Oe = e)
        }
        ,
        this.getClearColor = function() {
            return _e
        }
        ,
        this.setClearColor = function(e, t) {
            _e.set(e),
            we = void 0 !== t ? t : 1,
            ct.buffers.color.setClear(_e.r, _e.g, _e.b, we, Y)
        }
        ,
        this.getClearAlpha = function() {
            return we
        }
        ,
        this.setClearAlpha = function(e) {
            we = e,
            ct.buffers.color.setClear(_e.r, _e.g, _e.b, we, Y)
        }
        ,
        this.clear = function(e, t, i) {
            var n = 0;
            (void 0 === e || e) && (n |= Ze.COLOR_BUFFER_BIT),
            (void 0 === t || t) && (n |= Ze.DEPTH_BUFFER_BIT),
            (void 0 === i || i) && (n |= Ze.STENCIL_BUFFER_BIT),
            Ze.clear(n)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.clearTarget = function(e, t, i, n) {
            this.setRenderTarget(e),
            this.clear(t, i, n)
        }
        ,
        this.resetGLState = n,
        this.dispose = function() {
            ie = [],
            ae = -1,
            $ = [],
            te = -1,
            B.removeEventListener("webglcontextlost", a, !1)
        }
        ,
        this.renderBufferImmediate = function(e, t, i) {
            ct.initAttributes();
            var n = ht.get(e);
            e.hasPositions && !n.position && (n.position = Ze.createBuffer()),
            e.hasNormals && !n.normal && (n.normal = Ze.createBuffer()),
            e.hasUvs && !n.uv && (n.uv = Ze.createBuffer()),
            e.hasColors && !n.color && (n.color = Ze.createBuffer());
            var r = t.getAttributes();
            if (e.hasPositions && (Ze.bindBuffer(Ze.ARRAY_BUFFER, n.position),
            Ze.bufferData(Ze.ARRAY_BUFFER, e.positionArray, Ze.DYNAMIC_DRAW),
            ct.enableAttribute(r.position),
            Ze.vertexAttribPointer(r.position, 3, Ze.FLOAT, !1, 0, 0)),
            e.hasNormals) {
                if (Ze.bindBuffer(Ze.ARRAY_BUFFER, n.normal),
                !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && i.shading === Vr)
                    for (var a = 0, o = 3 * e.count; o > a; a += 9) {
                        var s = e.normalArray
                          , c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3
                          , h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3
                          , l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                        s[a + 0] = c,
                        s[a + 1] = h,
                        s[a + 2] = l,
                        s[a + 3] = c,
                        s[a + 4] = h,
                        s[a + 5] = l,
                        s[a + 6] = c,
                        s[a + 7] = h,
                        s[a + 8] = l
                    }
                Ze.bufferData(Ze.ARRAY_BUFFER, e.normalArray, Ze.DYNAMIC_DRAW),
                ct.enableAttribute(r.normal),
                Ze.vertexAttribPointer(r.normal, 3, Ze.FLOAT, !1, 0, 0)
            }
            e.hasUvs && i.map && (Ze.bindBuffer(Ze.ARRAY_BUFFER, n.uv),
            Ze.bufferData(Ze.ARRAY_BUFFER, e.uvArray, Ze.DYNAMIC_DRAW),
            ct.enableAttribute(r.uv),
            Ze.vertexAttribPointer(r.uv, 2, Ze.FLOAT, !1, 0, 0)),
            e.hasColors && i.vertexColors !== jr && (Ze.bindBuffer(Ze.ARRAY_BUFFER, n.color),
            Ze.bufferData(Ze.ARRAY_BUFFER, e.colorArray, Ze.DYNAMIC_DRAW),
            ct.enableAttribute(r.color),
            Ze.vertexAttribPointer(r.color, 3, Ze.FLOAT, !1, 0, 0)),
            ct.disableUnusedAttributes(),
            Ze.drawArrays(Ze.TRIANGLES, 0, e.count),
            e.count = 0
        }
        ,
        this.renderBufferDirect = function(e, i, n, r, a, o) {
            w(r);
            var s = M(e, i, r, a)
              , c = !1
              , h = n.id + "_" + s.id + "_" + r.wireframe;
            h !== me && (me = h,
            c = !0);
            var l = a.morphTargetInfluences;
            if (void 0 !== l) {
                for (var d = [], f = 0, m = l.length; m > f; f++) {
                    var g = l[f];
                    d.push([g, f])
                }
                d.sort(p),
                d.length > 8 && (d.length = 8);
                for (var v = n.morphAttributes, f = 0, m = d.length; m > f; f++) {
                    var g = d[f];
                    if (oe[f] = g[0],
                    0 !== g[0]) {
                        var y = g[1];
                        r.morphTargets === !0 && v.position && n.addAttribute("morphTarget" + f, v.position[y]),
                        r.morphNormals === !0 && v.normal && n.addAttribute("morphNormal" + f, v.normal[y])
                    } else
                        r.morphTargets === !0 && n.removeAttribute("morphTarget" + f),
                        r.morphNormals === !0 && n.removeAttribute("morphNormal" + f)
                }
                for (var f = d.length, x = oe.length; x > f; f++)
                    oe[f] = 0;
                s.getUniforms().setValue(Ze, "morphTargetInfluences", oe),
                c = !0
            }
            var y = n.index
              , b = n.attributes.position
              , _ = 1;
            r.wireframe === !0 && (y = ut.getWireframeAttribute(n),
            _ = 2);
            var E;
            null !== y ? (E = mt,
            E.setIndex(y)) : E = ft,
            c && (u(r, s, n),
            null !== y && Ze.bindBuffer(Ze.ELEMENT_ARRAY_BUFFER, ut.getAttributeBuffer(y)));
            var T = 0;
            null !== y ? T = y.count : void 0 !== b && (T = b.count);
            var S = n.drawRange.start * _
              , A = n.drawRange.count * _
              , L = null !== o ? o.start * _ : 0
              , R = null !== o ? o.count * _ : 1 / 0
              , P = Math.max(S, L)
              , C = Math.min(T, S + A, L + R) - 1
              , I = Math.max(0, C - P + 1);
            if (0 !== I) {
                if (a.isMesh)
                    if (r.wireframe === !0)
                        ct.setLineWidth(r.wireframeLinewidth * t()),
                        E.setMode(Ze.LINES);
                    else
                        switch (a.drawMode) {
                        case Fo:
                            E.setMode(Ze.TRIANGLES);
                            break;
                        case zo:
                            E.setMode(Ze.TRIANGLE_STRIP);
                            break;
                        case Bo:
                            E.setMode(Ze.TRIANGLE_FAN)
                        }
                else if (a.isLine) {
                    var U = r.linewidth;
                    void 0 === U && (U = 1),
                    ct.setLineWidth(U * t()),
                    E.setMode(a.isLineSegments ? Ze.LINES : Ze.LINE_STRIP)
                } else
                    a.isPoints && E.setMode(Ze.POINTS);
                n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && E.renderInstances(n, P, I) : E.render(P, I)
            }
        }
        ,
        this.render = function(e, t, i, n) {
            if (void 0 !== t && t.isCamera !== !0)
                return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            me = "",
            fe = -1,
            ge = null,
            e.autoUpdate === !0 && e.updateMatrixWorld(),
            null === t.parent && t.updateMatrixWorld(),
            t.matrixWorldInverse.getInverse(t.matrixWorld),
            ke.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            ze.setFromMatrix(ke),
            K.length = 0,
            te = -1,
            ae = -1,
            se.length = 0,
            ce.length = 0,
            He = this.localClippingEnabled,
            Ge = Be.init(this.clippingPlanes, He, t),
            x(e, t),
            $.length = te + 1,
            ie.length = ae + 1,
            he.sortObjects === !0 && ($.sort(d),
            ie.sort(f)),
            Ge && Be.beginShadows(),
            N(K),
            _t.render(e, t),
            O(K, t),
            Ge && Be.endShadows(),
            qe.calls = 0,
            qe.vertices = 0,
            qe.faces = 0,
            qe.points = 0,
            void 0 === i && (i = null),
            this.setRenderTarget(i);
            var r = e.background;
            if (null === r ? ct.buffers.color.setClear(_e.r, _e.g, _e.b, we, Y) : r && r.isColor && (ct.buffers.color.setClear(r.r, r.g, r.b, 1, Y),
            n = !0),
            (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
            r && r.isCubeTexture ? (vt.projectionMatrix.copy(t.projectionMatrix),
            vt.matrixWorld.extractRotation(t.matrixWorld),
            vt.matrixWorldInverse.getInverse(vt.matrixWorld),
            bt.material.uniforms.tCube.value = r,
            bt.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse, bt.matrixWorld),
            ut.update(bt),
            he.renderBufferDirect(vt, null, bt.geometry, bt.material, bt, null)) : r && r.isTexture && (yt.material.map = r,
            ut.update(yt),
            he.renderBufferDirect(gt, null, yt.geometry, yt.material, yt, null)),
            e.overrideMaterial) {
                var a = e.overrideMaterial;
                b($, e, t, a),
                b(ie, e, t, a)
            } else
                ct.setBlending(Yr),
                b($, e, t),
                b(ie, e, t);
            wt.render(e, t),
            Mt.render(e, t, xe),
            i && lt.updateRenderTargetMipmap(i),
            ct.setDepthTest(!0),
            ct.setDepthWrite(!0),
            ct.setColorWrite(!0)
        }
        ,
        this.setFaceCulling = function(e, t) {
            ct.setCullFace(e),
            ct.setFlipSided(t === Dr)
        }
        ,
        this.allocTextureUnit = F,
        this.setTexture2D = function() {
            var e = !1;
            return function(t, i) {
                t && t.isWebGLRenderTarget && (e || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
                e = !0),
                t = t.texture),
                lt.setTexture2D(t, i)
            }
        }(),
        this.setTexture = function() {
            var e = !1;
            return function(t, i) {
                e || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
                e = !0),
                lt.setTexture2D(t, i)
            }
        }(),
        this.setTextureCube = function() {
            var e = !1;
            return function(t, i) {
                t && t.isWebGLRenderTargetCube && (e || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
                e = !0),
                t = t.texture),
                t && t.isCubeTexture || Array.isArray(t.image) && 6 === t.image.length ? lt.setTextureCube(t, i) : lt.setTextureCubeDynamic(t, i)
            }
        }(),
        this.getCurrentRenderTarget = function() {
            return ue
        }
        ,
        this.setRenderTarget = function(e) {
            ue = e,
            e && void 0 === ht.get(e).__webglFramebuffer && lt.setupRenderTarget(e);
            var t, i = e && e.isWebGLRenderTargetCube;
            if (e) {
                var n = ht.get(e);
                t = i ? n.__webglFramebuffer[e.activeCubeFace] : n.__webglFramebuffer,
                ve.copy(e.scissor),
                ye = e.scissorTest,
                xe.copy(e.viewport)
            } else
                t = null,
                ve.copy(Pe).multiplyScalar(Te),
                ye = Oe,
                xe.copy(Fe).multiplyScalar(Te);
            if (de !== t && (Ze.bindFramebuffer(Ze.FRAMEBUFFER, t),
            de = t),
            ct.scissor(ve),
            ct.setScissorTest(ye),
            ct.viewport(xe),
            i) {
                var r = ht.get(e.texture);
                Ze.framebufferTexture2D(Ze.FRAMEBUFFER, Ze.COLOR_ATTACHMENT0, Ze.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, r.__webglTexture, e.activeMipMapLevel)
            }
        }
        ,
        this.readRenderTargetPixels = function(e, t, i, n, r, a) {
            if ((e && e.isWebGLRenderTarget) === !1)
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            var o = ht.get(e).__webglFramebuffer;
            if (o) {
                var s = !1;
                o !== de && (Ze.bindFramebuffer(Ze.FRAMEBUFFER, o),
                s = !0);
                try {
                    var c = e.texture
                      , h = c.format
                      , l = c.type;
                    if (h !== po && z(h) !== Ze.getParameter(Ze.IMPLEMENTATION_COLOR_READ_FORMAT))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(l === Ka || z(l) === Ze.getParameter(Ze.IMPLEMENTATION_COLOR_READ_TYPE) || l === ro && (ot.get("OES_texture_float") || ot.get("WEBGL_color_buffer_float")) || l === ao && ot.get("EXT_color_buffer_half_float")))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    Ze.checkFramebufferStatus(Ze.FRAMEBUFFER) === Ze.FRAMEBUFFER_COMPLETE ? t >= 0 && t <= e.width - n && i >= 0 && i <= e.height - r && Ze.readPixels(t, i, n, r, z(h), z(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    s && Ze.bindFramebuffer(Ze.FRAMEBUFFER, de)
                }
            }
        }
    }
    function ot(e, t) {
        this.name = "",
        this.color = new W(e),
        this.density = void 0 !== t ? t : 25e-5
    }
    function st(e, t, i) {
        this.name = "",
        this.color = new W(e),
        this.near = void 0 !== t ? t : 1,
        this.far = void 0 !== i ? i : 1e3
    }
    function ct() {
        ce.call(this),
        this.type = "Scene",
        this.background = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0
    }
    function ht(e, t, i, n, r) {
        ce.call(this),
        this.lensFlares = [],
        this.positionScreen = new c,
        this.customUpdateCallback = void 0,
        void 0 !== e && this.add(e, t, i, n, r)
    }
    function lt(e) {
        J.call(this),
        this.type = "SpriteMaterial",
        this.color = new W(16777215),
        this.map = null,
        this.rotation = 0,
        this.fog = !1,
        this.lights = !1,
        this.setValues(e)
    }
    function ut(e) {
        ce.call(this),
        this.type = "Sprite",
        this.material = void 0 !== e ? e : new lt
    }
    function pt() {
        ce.call(this),
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }
    function dt(e, t, i) {
        if (this.useVertexTexture = void 0 !== i ? i : !0,
        this.identityMatrix = new h,
        e = e || [],
        this.bones = e.slice(0),
        this.useVertexTexture) {
            var n = Math.sqrt(4 * this.bones.length);
            n = Jo.nextPowerOfTwo(Math.ceil(n)),
            n = Math.max(n, 4),
            this.boneTextureWidth = n,
            this.boneTextureHeight = n,
            this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
            this.boneTexture = new X(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,po,ro)
        } else
            this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === t)
            this.calculateInverses();
        else if (this.bones.length === t.length)
            this.boneInverses = t.slice(0);
        else {
            console.warn("THREE.Skeleton bonInverses is the wrong length."),
            this.boneInverses = [];
            for (var r = 0, a = this.bones.length; a > r; r++)
                this.boneInverses.push(new h)
        }
    }
    function ft() {
        ce.call(this),
        this.type = "Bone"
    }
    function mt(e, t, i) {
        Ae.call(this, e, t),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new h,
        this.bindMatrixInverse = new h;
        var n = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var r, a, o = 0, s = this.geometry.bones.length; s > o; ++o)
                a = this.geometry.bones[o],
                r = new ft,
                n.push(r),
                r.name = a.name,
                r.position.fromArray(a.pos),
                r.quaternion.fromArray(a.rotq),
                void 0 !== a.scl && r.scale.fromArray(a.scl);
            for (var o = 0, s = this.geometry.bones.length; s > o; ++o)
                a = this.geometry.bones[o],
                -1 !== a.parent && null !== a.parent && void 0 !== n[a.parent] ? n[a.parent].add(n[o]) : this.add(n[o])
        }
        this.normalizeSkinWeights(),
        this.updateMatrixWorld(!0),
        this.bind(new dt(n,void 0,i), this.matrixWorld)
    }
    function gt(e) {
        J.call(this),
        this.type = "LineBasicMaterial",
        this.color = new W(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.lights = !1,
        this.setValues(e)
    }
    function vt(e, t, i) {
        return 1 === i ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
        new yt(e,t)) : (ce.call(this),
        this.type = "Line",
        this.geometry = void 0 !== e ? e : new Se,
        void (this.material = void 0 !== t ? t : new gt({
            color: 16777215 * Math.random()
        })))
    }
    function yt(e, t) {
        vt.call(this, e, t),
        this.type = "LineSegments"
    }
    function xt(e) {
        J.call(this),
        this.type = "PointsMaterial",
        this.color = new W(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.lights = !1,
        this.setValues(e)
    }
    function bt(e, t) {
        ce.call(this),
        this.type = "Points",
        this.geometry = void 0 !== e ? e : new Se,
        this.material = void 0 !== t ? t : new xt({
            color: 16777215 * Math.random()
        })
    }
    function _t() {
        ce.call(this),
        this.type = "Group"
    }
    function wt(e, t, i, r, a, o, s, c, h) {
        function l() {
            requestAnimationFrame(l),
            e.readyState >= e.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
        }
        n.call(this, e, t, i, r, a, o, s, c, h),
        this.generateMipmaps = !1;
        var u = this;
        l()
    }
    function Mt(e, t, i, r, a, o, s, c, h, l, u, p) {
        n.call(this, null, o, s, c, h, l, r, a, u, p),
        this.image = {
            width: t,
            height: i
        },
        this.mipmaps = e,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function Et(e, t, i, r, a, o, s, c, h) {
        n.call(this, e, t, i, r, a, o, s, c, h),
        this.needsUpdate = !0
    }
    function Tt(e, t, i, r, a, o, s, c, h, l) {
        if (l = void 0 !== l ? l : vo,
        l !== vo && l !== yo)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && l === vo && (i = to),
        void 0 === i && l === yo && (i = ho),
        n.call(this, null, r, a, o, s, c, l, i, h),
        this.image = {
            width: e,
            height: t
        },
        this.magFilter = void 0 !== s ? s : Wa,
        this.minFilter = void 0 !== c ? c : Wa,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function St(e) {
        function t(e, t) {
            return e - t
        }
        Se.call(this);
        var i = [0, 0]
          , n = {}
          , r = ["a", "b", "c"];
        if (e && e.isGeometry) {
            for (var a = e.vertices, o = e.faces, s = 0, c = new Uint32Array(6 * o.length), h = 0, l = o.length; l > h; h++)
                for (var u = o[h], p = 0; 3 > p; p++) {
                    i[0] = u[r[p]],
                    i[1] = u[r[(p + 1) % 3]],
                    i.sort(t);
                    var d = i.toString();
                    void 0 === n[d] && (c[2 * s] = i[0],
                    c[2 * s + 1] = i[1],
                    n[d] = !0,
                    s++)
                }
            for (var f = new Float32Array(2 * s * 3), h = 0, l = s; l > h; h++)
                for (var p = 0; 2 > p; p++) {
                    var m = a[c[2 * h + p]]
                      , g = 6 * h + 3 * p;
                    f[g + 0] = m.x,
                    f[g + 1] = m.y,
                    f[g + 2] = m.z
                }
            this.addAttribute("position", new de(f,3))
        } else if (e && e.isBufferGeometry)
            if (null !== e.index) {
                var v = e.index.array
                  , a = e.attributes.position
                  , y = e.groups
                  , s = 0;
                0 === y.length && e.addGroup(0, v.length);
                for (var c = new Uint32Array(2 * v.length), x = 0, b = y.length; b > x; ++x)
                    for (var _ = y[x], w = _.start, M = _.count, h = w, E = w + M; E > h; h += 3)
                        for (var p = 0; 3 > p; p++) {
                            i[0] = v[h + p],
                            i[1] = v[h + (p + 1) % 3],
                            i.sort(t);
                            var d = i.toString();
                            void 0 === n[d] && (c[2 * s] = i[0],
                            c[2 * s + 1] = i[1],
                            n[d] = !0,
                            s++)
                        }
                for (var f = new Float32Array(2 * s * 3), h = 0, l = s; l > h; h++)
                    for (var p = 0; 2 > p; p++) {
                        var g = 6 * h + 3 * p
                          , T = c[2 * h + p];
                        f[g + 0] = a.getX(T),
                        f[g + 1] = a.getY(T),
                        f[g + 2] = a.getZ(T)
                    }
                this.addAttribute("position", new de(f,3))
            } else {
                for (var a = e.attributes.position.array, s = a.length / 3, S = s / 3, f = new Float32Array(2 * s * 3), h = 0, l = S; l > h; h++)
                    for (var p = 0; 3 > p; p++) {
                        var g = 18 * h + 6 * p
                          , A = 9 * h + 3 * p;
                        f[g + 0] = a[A],
                        f[g + 1] = a[A + 1],
                        f[g + 2] = a[A + 2];
                        var T = 9 * h + 3 * ((p + 1) % 3);
                        f[g + 3] = a[T],
                        f[g + 4] = a[T + 1],
                        f[g + 5] = a[T + 2]
                    }
                this.addAttribute("position", new de(f,3))
            }
    }
    function At(e, t, i) {
        Se.call(this),
        this.type = "ParametricBufferGeometry",
        this.parameters = {
            func: e,
            slices: t,
            stacks: i
        };
        var n, r, a, o, s, c = [], h = [], l = t + 1;
        for (n = 0; i >= n; n++)
            for (s = n / i,
            r = 0; t >= r; r++)
                o = r / t,
                a = e(o, s),
                c.push(a.x, a.y, a.z),
                h.push(o, s);
        var u, p, d, f, m = [];
        for (n = 0; i > n; n++)
            for (r = 0; t > r; r++)
                u = n * l + r,
                p = n * l + r + 1,
                d = (n + 1) * l + r + 1,
                f = (n + 1) * l + r,
                m.push(u, p, f),
                m.push(p, d, f);
        this.setIndex(new (m.length > 65535 ? be : ye)(m,1)),
        this.addAttribute("position", new _e(c,3)),
        this.addAttribute("uv", new _e(h,2)),
        this.computeVertexNormals()
    }
    function Lt(e, t, i) {
        Ee.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: e,
            slices: t,
            stacks: i
        },
        this.fromBufferGeometry(new At(e,t,i)),
        this.mergeVertices()
    }
    function Rt(e, t, n, r) {
        function a(e) {
            for (var i = new c, n = new c, r = new c, a = 0; a < t.length; a += 3)
                p(t[a + 0], i),
                p(t[a + 1], n),
                p(t[a + 2], r),
                o(i, n, r, e)
        }
        function o(e, t, i, n) {
            var r, a, o = Math.pow(2, n), s = [];
            for (r = 0; o >= r; r++) {
                s[r] = [];
                var c = e.clone().lerp(i, r / o)
                  , h = t.clone().lerp(i, r / o)
                  , l = o - r;
                for (a = 0; l >= a; a++)
                    s[r][a] = 0 === a && r === o ? c : c.clone().lerp(h, a / l)
            }
            for (r = 0; o > r; r++)
                for (a = 0; 2 * (o - r) - 1 > a; a++) {
                    var p = Math.floor(a / 2);
                    a % 2 === 0 ? (u(s[r][p + 1]),
                    u(s[r + 1][p]),
                    u(s[r][p])) : (u(s[r][p + 1]),
                    u(s[r + 1][p + 1]),
                    u(s[r + 1][p]))
                }
        }
        function s(e) {
            for (var t = new c, i = 0; i < v.length; i += 3)
                t.x = v[i + 0],
                t.y = v[i + 1],
                t.z = v[i + 2],
                t.normalize().multiplyScalar(e),
                v[i + 0] = t.x,
                v[i + 1] = t.y,
                v[i + 2] = t.z
        }
        function h() {
            for (var e = new c, t = 0; t < v.length; t += 3) {
                e.x = v[t + 0],
                e.y = v[t + 1],
                e.z = v[t + 2];
                var i = m(e) / 2 / Math.PI + .5
                  , n = g(e) / Math.PI + .5;
                y.push(i, 1 - n)
            }
            d(),
            l()
        }
        function l() {
            for (var e = 0; e < y.length; e += 6) {
                var t = y[e + 0]
                  , i = y[e + 2]
                  , n = y[e + 4]
                  , r = Math.max(t, i, n)
                  , a = Math.min(t, i, n);
                r > .9 && .1 > a && (.2 > t && (y[e + 0] += 1),
                .2 > i && (y[e + 2] += 1),
                .2 > n && (y[e + 4] += 1))
            }
        }
        function u(e) {
            v.push(e.x, e.y, e.z)
        }
        function p(t, i) {
            var n = 3 * t;
            i.x = e[n + 0],
            i.y = e[n + 1],
            i.z = e[n + 2]
        }
        function d() {
            for (var e = new c, t = new c, n = new c, r = new c, a = new i, o = new i, s = new i, h = 0, l = 0; h < v.length; h += 9,
            l += 6) {
                e.set(v[h + 0], v[h + 1], v[h + 2]),
                t.set(v[h + 3], v[h + 4], v[h + 5]),
                n.set(v[h + 6], v[h + 7], v[h + 8]),
                a.set(y[l + 0], y[l + 1]),
                o.set(y[l + 2], y[l + 3]),
                s.set(y[l + 4], y[l + 5]),
                r.copy(e).add(t).add(n).divideScalar(3);
                var u = m(r);
                f(a, l + 0, e, u),
                f(o, l + 2, t, u),
                f(s, l + 4, n, u)
            }
        }
        function f(e, t, i, n) {
            0 > n && 1 === e.x && (y[t] = e.x - 1),
            0 === i.x && 0 === i.z && (y[t] = n / 2 / Math.PI + .5)
        }
        function m(e) {
            return Math.atan2(e.z, -e.x)
        }
        function g(e) {
            return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
        }
        Se.call(this),
        this.type = "PolyhedronBufferGeometry",
        this.parameters = {
            vertices: e,
            indices: t,
            radius: n,
            detail: r
        },
        n = n || 1,
        r = r || 0;
        var v = []
          , y = [];
        a(r),
        s(n),
        h(),
        this.addAttribute("position", new _e(v,3)),
        this.addAttribute("normal", new _e(v.slice(),3)),
        this.addAttribute("uv", new _e(y,2)),
        this.normalizeNormals(),
        this.boundingSphere = new ee(new c,n)
    }
    function Pt(e, t) {
        var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
          , n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        Rt.call(this, i, n, e, t),
        this.type = "TetrahedronBufferGeometry",
        this.parameters = {
            radius: e,
            detail: t
        }
    }
    function Ct(e, t) {
        Ee.call(this),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: e,
            detail: t
        },
        this.fromBufferGeometry(new Pt(e,t)),
        this.mergeVertices()
    }
    function It(e, t) {
        var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1]
          , n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        Rt.call(this, i, n, e, t),
        this.type = "OctahedronBufferGeometry",
        this.parameters = {
            radius: e,
            detail: t
        }
    }
    function Ut(e, t) {
        Ee.call(this),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: e,
            detail: t
        },
        this.fromBufferGeometry(new It(e,t)),
        this.mergeVertices()
    }
    function Dt(e, t) {
        var i = (1 + Math.sqrt(5)) / 2
          , n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1]
          , r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        Rt.call(this, n, r, e, t),
        this.type = "IcosahedronBufferGeometry",
        this.parameters = {
            radius: e,
            detail: t
        }
    }
    function Nt(e, t) {
        Ee.call(this),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: e,
            detail: t
        },
        this.fromBufferGeometry(new Dt(e,t)),
        this.mergeVertices()
    }
    function Ot(e, t) {
        var i = (1 + Math.sqrt(5)) / 2
          , n = 1 / i
          , r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n]
          , a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        Rt.call(this, r, a, e, t),
        this.type = "DodecahedronBufferGeometry",
        this.parameters = {
            radius: e,
            detail: t
        }
    }
    function Ft(e, t) {
        Ee.call(this),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: e,
            detail: t
        },
        this.fromBufferGeometry(new Ot(e,t)),
        this.mergeVertices()
    }
    function zt(e, t, i, n) {
        Ee.call(this),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: e,
            indices: t,
            radius: i,
            detail: n
        },
        this.fromBufferGeometry(new Rt(e,t,i,n)),
        this.mergeVertices()
    }
    function Bt(e, t, n, r, a) {
        function o() {
            for (p = 0; t > p; p++)
                s(p);
            s(a === !1 ? t : 0),
            l(),
            h()
        }
        function s(i) {
            var a = e.getPointAt(i / t)
              , o = u.normals[i]
              , s = u.binormals[i];
            for (d = 0; r >= d; d++) {
                var c = d / r * Math.PI * 2
                  , h = Math.sin(c)
                  , l = -Math.cos(c);
                m.x = l * o.x + h * s.x,
                m.y = l * o.y + h * s.y,
                m.z = l * o.z + h * s.z,
                m.normalize(),
                y.push(m.x, m.y, m.z),
                f.x = a.x + n * m.x,
                f.y = a.y + n * m.y,
                f.z = a.z + n * m.z,
                v.push(f.x, f.y, f.z)
            }
        }
        function h() {
            for (d = 1; t >= d; d++)
                for (p = 1; r >= p; p++) {
                    var e = (r + 1) * (d - 1) + (p - 1)
                      , i = (r + 1) * d + (p - 1)
                      , n = (r + 1) * d + p
                      , a = (r + 1) * (d - 1) + p;
                    b.push(e, i, a),
                    b.push(i, n, a)
                }
        }
        function l() {
            for (p = 0; t >= p; p++)
                for (d = 0; r >= d; d++)
                    g.x = p / t,
                    g.y = d / r,
                    x.push(g.x, g.y)
        }
        Se.call(this),
        this.type = "TubeBufferGeometry",
        this.parameters = {
            path: e,
            tubularSegments: t,
            radius: n,
            radialSegments: r,
            closed: a
        },
        t = t || 64,
        n = n || 1,
        r = r || 8,
        a = a || !1;
        var u = e.computeFrenetFrames(t, a);
        this.tangents = u.tangents,
        this.normals = u.normals,
        this.binormals = u.binormals;
        var p, d, f = new c, m = new c, g = new i, v = [], y = [], x = [], b = [];
        o(),
        this.setIndex(new (b.length > 65535 ? be : ye)(b,1)),
        this.addAttribute("position", new _e(v,3)),
        this.addAttribute("normal", new _e(y,3)),
        this.addAttribute("uv", new _e(x,2))
    }
    function Gt(e, t, i, n, r, a) {
        Ee.call(this),
        this.type = "TubeGeometry",
        this.parameters = {
            path: e,
            tubularSegments: t,
            radius: i,
            radialSegments: n,
            closed: r
        },
        void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
        var o = new Bt(e,t,i,n,r);
        this.tangents = o.tangents,
        this.normals = o.normals,
        this.binormals = o.binormals,
        this.fromBufferGeometry(o),
        this.mergeVertices()
    }
    function Ht(e, t, n, r, a, o) {
        function s(e, t, i, n, r) {
            var a = Math.cos(e)
              , o = Math.sin(e)
              , s = i / t * e
              , c = Math.cos(s);
            r.x = n * (2 + c) * .5 * a,
            r.y = n * (2 + c) * o * .5,
            r.z = n * Math.sin(s) * .5
        }
        Se.call(this),
        this.type = "TorusKnotBufferGeometry",
        this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: n,
            radialSegments: r,
            p: a,
            q: o
        },
        e = e || 100,
        t = t || 40,
        n = Math.floor(n) || 64,
        r = Math.floor(r) || 8,
        a = a || 2,
        o = o || 3;
        var h, l, u = (r + 1) * (n + 1), p = r * n * 2 * 3, d = new de(new (p > 65535 ? Uint32Array : Uint16Array)(p),1), f = new de(new Float32Array(3 * u),3), m = new de(new Float32Array(3 * u),3), g = new de(new Float32Array(2 * u),2), v = 0, y = 0, x = new c, b = new c, _ = new i, w = new c, M = new c, E = new c, T = new c, S = new c;
        for (h = 0; n >= h; ++h) {
            var A = h / n * a * Math.PI * 2;
            for (s(A, a, o, e, w),
            s(A + .01, a, o, e, M),
            T.subVectors(M, w),
            S.addVectors(M, w),
            E.crossVectors(T, S),
            S.crossVectors(E, T),
            E.normalize(),
            S.normalize(),
            l = 0; r >= l; ++l) {
                var L = l / r * Math.PI * 2
                  , R = -t * Math.cos(L)
                  , P = t * Math.sin(L);
                x.x = w.x + (R * S.x + P * E.x),
                x.y = w.y + (R * S.y + P * E.y),
                x.z = w.z + (R * S.z + P * E.z),
                f.setXYZ(v, x.x, x.y, x.z),
                b.subVectors(x, w).normalize(),
                m.setXYZ(v, b.x, b.y, b.z),
                _.x = h / n,
                _.y = l / r,
                g.setXY(v, _.x, _.y),
                v++
            }
        }
        for (l = 1; n >= l; l++)
            for (h = 1; r >= h; h++) {
                var C = (r + 1) * (l - 1) + (h - 1)
                  , I = (r + 1) * l + (h - 1)
                  , U = (r + 1) * l + h
                  , D = (r + 1) * (l - 1) + h;
                d.setX(y, C),
                y++,
                d.setX(y, I),
                y++,
                d.setX(y, D),
                y++,
                d.setX(y, I),
                y++,
                d.setX(y, U),
                y++,
                d.setX(y, D),
                y++
            }
        this.setIndex(d),
        this.addAttribute("position", f),
        this.addAttribute("normal", m),
        this.addAttribute("uv", g)
    }
    function Vt(e, t, i, n, r, a, o) {
        Ee.call(this),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: e,
            tube: t,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        },
        void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
        this.fromBufferGeometry(new Ht(e,t,i,n,r,a)),
        this.mergeVertices()
    }
    function kt(e, t, i, n, r) {
        Se.call(this),
        this.type = "TorusBufferGeometry",
        this.parameters = {
            radius: e,
            tube: t,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        },
        e = e || 100,
        t = t || 40,
        i = Math.floor(i) || 8,
        n = Math.floor(n) || 6,
        r = r || 2 * Math.PI;
        var a, o, s = (i + 1) * (n + 1), h = i * n * 2 * 3, l = new (h > 65535 ? Uint32Array : Uint16Array)(h), u = new Float32Array(3 * s), p = new Float32Array(3 * s), d = new Float32Array(2 * s), f = 0, m = 0, g = 0, v = new c, y = new c, x = new c;
        for (a = 0; i >= a; a++)
            for (o = 0; n >= o; o++) {
                var b = o / n * r
                  , _ = a / i * Math.PI * 2;
                y.x = (e + t * Math.cos(_)) * Math.cos(b),
                y.y = (e + t * Math.cos(_)) * Math.sin(b),
                y.z = t * Math.sin(_),
                u[f] = y.x,
                u[f + 1] = y.y,
                u[f + 2] = y.z,
                v.x = e * Math.cos(b),
                v.y = e * Math.sin(b),
                x.subVectors(y, v).normalize(),
                p[f] = x.x,
                p[f + 1] = x.y,
                p[f + 2] = x.z,
                d[m] = o / n,
                d[m + 1] = a / i,
                f += 3,
                m += 2
            }
        for (a = 1; i >= a; a++)
            for (o = 1; n >= o; o++) {
                var w = (n + 1) * a + o - 1
                  , M = (n + 1) * (a - 1) + o - 1
                  , E = (n + 1) * (a - 1) + o
                  , T = (n + 1) * a + o;
                l[g] = w,
                l[g + 1] = M,
                l[g + 2] = T,
                l[g + 3] = M,
                l[g + 4] = E,
                l[g + 5] = T,
                g += 6
            }
        this.setIndex(new de(l,1)),
        this.addAttribute("position", new de(u,3)),
        this.addAttribute("normal", new de(p,3)),
        this.addAttribute("uv", new de(d,2))
    }
    function jt(e, t, i, n, r) {
        Ee.call(this),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: e,
            tube: t,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        },
        this.fromBufferGeometry(new kt(e,t,i,n,r))
    }
    function Wt(e, t) {
        return "undefined" == typeof e ? void (e = []) : (Ee.call(this),
        this.type = "ExtrudeGeometry",
        e = Array.isArray(e) ? e : [e],
        this.addShapeList(e, t),
        void this.computeFaceNormals())
    }
    function Xt(e, t) {
        t = t || {};
        var i = t.font;
        if ((i && i.isFont) === !1)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new Ee;
        var n = i.generateShapes(e, t.size, t.curveSegments);
        t.amount = void 0 !== t.height ? t.height : 50,
        void 0 === t.bevelThickness && (t.bevelThickness = 10),
        void 0 === t.bevelSize && (t.bevelSize = 8),
        void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
        Wt.call(this, n, t),
        this.type = "TextGeometry"
    }
    function Yt(e, t, i, n, r, a, o) {
        Se.call(this),
        this.type = "SphereBufferGeometry",
        this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        e = e || 50,
        t = Math.max(3, Math.floor(t) || 8),
        i = Math.max(2, Math.floor(i) || 6),
        n = void 0 !== n ? n : 0,
        r = void 0 !== r ? r : 2 * Math.PI,
        a = void 0 !== a ? a : 0,
        o = void 0 !== o ? o : Math.PI;
        for (var s = a + o, h = (t + 1) * (i + 1), l = new de(new Float32Array(3 * h),3), u = new de(new Float32Array(3 * h),3), p = new de(new Float32Array(2 * h),2), d = 0, f = [], m = new c, g = 0; i >= g; g++) {
            for (var v = [], y = g / i, x = 0; t >= x; x++) {
                var b = x / t
                  , _ = -e * Math.cos(n + b * r) * Math.sin(a + y * o)
                  , w = e * Math.cos(a + y * o)
                  , M = e * Math.sin(n + b * r) * Math.sin(a + y * o);
                m.set(_, w, M).normalize(),
                l.setXYZ(d, _, w, M),
                u.setXYZ(d, m.x, m.y, m.z),
                p.setXY(d, b, 1 - y),
                v.push(d),
                d++
            }
            f.push(v)
        }
        for (var E = [], g = 0; i > g; g++)
            for (var x = 0; t > x; x++) {
                var T = f[g][x + 1]
                  , S = f[g][x]
                  , A = f[g + 1][x]
                  , L = f[g + 1][x + 1];
                (0 !== g || a > 0) && E.push(T, S, L),
                (g !== i - 1 || s < Math.PI) && E.push(S, A, L)
            }
        this.setIndex(new (l.count > 65535 ? be : ye)(E,1)),
        this.addAttribute("position", l),
        this.addAttribute("normal", u),
        this.addAttribute("uv", p),
        this.boundingSphere = new ee(new c,e)
    }
    function qt(e, t, i, n, r, a, o) {
        Ee.call(this),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: e,
            widthSegments: t,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        },
        this.fromBufferGeometry(new Yt(e,t,i,n,r,a,o))
    }
    function Zt(e, t, n, r, a, o) {
        Se.call(this),
        this.type = "RingBufferGeometry",
        this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: a,
            thetaLength: o
        },
        e = e || 20,
        t = t || 50,
        a = void 0 !== a ? a : 0,
        o = void 0 !== o ? o : 2 * Math.PI,
        n = void 0 !== n ? Math.max(3, n) : 8,
        r = void 0 !== r ? Math.max(1, r) : 1;
        var s, h, l, u = (n + 1) * (r + 1), p = n * r * 2 * 3, d = new de(new (p > 65535 ? Uint32Array : Uint16Array)(p),1), f = new de(new Float32Array(3 * u),3), m = new de(new Float32Array(3 * u),3), g = new de(new Float32Array(2 * u),2), v = 0, y = 0, x = e, b = (t - e) / r, _ = new c, w = new i;
        for (h = 0; r >= h; h++) {
            for (l = 0; n >= l; l++)
                s = a + l / n * o,
                _.x = x * Math.cos(s),
                _.y = x * Math.sin(s),
                f.setXYZ(v, _.x, _.y, _.z),
                m.setXYZ(v, 0, 0, 1),
                w.x = (_.x / t + 1) / 2,
                w.y = (_.y / t + 1) / 2,
                g.setXY(v, w.x, w.y),
                v++;
            x += b
        }
        for (h = 0; r > h; h++) {
            var M = h * (n + 1);
            for (l = 0; n > l; l++) {
                s = l + M;
                var E = s
                  , T = s + n + 1
                  , S = s + n + 2
                  , A = s + 1;
                d.setX(y, E),
                y++,
                d.setX(y, T),
                y++,
                d.setX(y, S),
                y++,
                d.setX(y, E),
                y++,
                d.setX(y, S),
                y++,
                d.setX(y, A),
                y++
            }
        }
        this.setIndex(d),
        this.addAttribute("position", f),
        this.addAttribute("normal", m),
        this.addAttribute("uv", g)
    }
    function Jt(e, t, i, n, r, a) {
        Ee.call(this),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: e,
            outerRadius: t,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        },
        this.fromBufferGeometry(new Zt(e,t,i,n,r,a))
    }
    function Qt(e, t, i, n) {
        Ee.call(this),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: n
        },
        this.fromBufferGeometry(new Re(e,t,i,n))
    }
    function Kt(e, t, n, r) {
        Se.call(this),
        this.type = "LatheBufferGeometry",
        this.parameters = {
            points: e,
            segments: t,
            phiStart: n,
            phiLength: r
        },
        t = Math.floor(t) || 12,
        n = n || 0,
        r = r || 2 * Math.PI,
        r = Jo.clamp(r, 0, 2 * Math.PI);
        var a, o, s, h = (t + 1) * e.length, l = t * e.length * 2 * 3, u = new de(new (l > 65535 ? Uint32Array : Uint16Array)(l),1), p = new de(new Float32Array(3 * h),3), d = new de(new Float32Array(2 * h),2), f = 0, m = 0, g = 1 / t, v = new c, y = new i;
        for (o = 0; t >= o; o++) {
            var x = n + o * g * r
              , b = Math.sin(x)
              , _ = Math.cos(x);
            for (s = 0; s <= e.length - 1; s++)
                v.x = e[s].x * b,
                v.y = e[s].y,
                v.z = e[s].x * _,
                p.setXYZ(f, v.x, v.y, v.z),
                y.x = o / t,
                y.y = s / (e.length - 1),
                d.setXY(f, y.x, y.y),
                f++
        }
        for (o = 0; t > o; o++)
            for (s = 0; s < e.length - 1; s++) {
                a = s + o * e.length;
                var w = a
                  , M = a + e.length
                  , E = a + e.length + 1
                  , T = a + 1;
                u.setX(m, w),
                m++,
                u.setX(m, M),
                m++,
                u.setX(m, T),
                m++,
                u.setX(m, M),
                m++,
                u.setX(m, E),
                m++,
                u.setX(m, T),
                m++
            }
        if (this.setIndex(u),
        this.addAttribute("position", p),
        this.addAttribute("uv", d),
        this.computeVertexNormals(),
        r === 2 * Math.PI) {
            var S = this.attributes.normal.array
              , A = new c
              , L = new c
              , R = new c;
            for (a = t * e.length * 3,
            o = 0,
            s = 0; o < e.length; o++,
            s += 3)
                A.x = S[s + 0],
                A.y = S[s + 1],
                A.z = S[s + 2],
                L.x = S[a + s + 0],
                L.y = S[a + s + 1],
                L.z = S[a + s + 2],
                R.addVectors(A, L).normalize(),
                S[s + 0] = S[a + s + 0] = R.x,
                S[s + 1] = S[a + s + 1] = R.y,
                S[s + 2] = S[a + s + 2] = R.z
        }
    }
    function $t(e, t, i, n) {
        Ee.call(this),
        this.type = "LatheGeometry",
        this.parameters = {
            points: e,
            segments: t,
            phiStart: i,
            phiLength: n
        },
        this.fromBufferGeometry(new Kt(e,t,i,n)),
        this.mergeVertices()
    }
    function ei(e, t) {
        function i(e) {
            var i, s, h, l = n.length / 3, u = e.extractPoints(t), p = u.shape, d = u.holes;
            if (hh.isClockWise(p) === !1)
                for (p = p.reverse(),
                i = 0,
                s = d.length; s > i; i++)
                    h = d[i],
                    hh.isClockWise(h) === !0 && (d[i] = h.reverse());
            var f = hh.triangulateShape(p, d);
            for (i = 0,
            s = d.length; s > i; i++)
                h = d[i],
                p = p.concat(h);
            for (i = 0,
            s = p.length; s > i; i++) {
                var m = p[i];
                n.push(m.x, m.y, 0),
                r.push(0, 0, 1),
                a.push(m.x, m.y)
            }
            for (i = 0,
            s = f.length; s > i; i++) {
                var g = f[i]
                  , v = g[0] + l
                  , y = g[1] + l
                  , x = g[2] + l;
                o.push(v, y, x),
                c += 3
            }
        }
        Se.call(this),
        this.type = "ShapeBufferGeometry",
        this.parameters = {
            shapes: e,
            curveSegments: t
        },
        t = t || 12;
        var n = []
          , r = []
          , a = []
          , o = []
          , s = 0
          , c = 0;
        if (Array.isArray(e) === !1)
            i(e);
        else
            for (var h = 0; h < e.length; h++)
                i(e[h]),
                this.addGroup(s, c, h),
                s += c,
                c = 0;
        this.setIndex(new (o.length > 65535 ? be : ye)(o,1)),
        this.addAttribute("position", new _e(n,3)),
        this.addAttribute("normal", new _e(r,3)),
        this.addAttribute("uv", new _e(a,2))
    }
    function ti(e, t) {
        Ee.call(this),
        this.type = "ShapeGeometry",
        "object" == typeof t && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."),
        t = t.curveSegments),
        this.parameters = {
            shapes: e,
            curveSegments: t
        },
        this.fromBufferGeometry(new ei(e,t)),
        this.mergeVertices()
    }
    function ii(e, t) {
        function i(e, t) {
            return e - t
        }
        Se.call(this),
        t = void 0 !== t ? t : 1;
        var n, r = Math.cos(Jo.DEG2RAD * t), a = [0, 0], o = {}, s = ["a", "b", "c"];
        e.isBufferGeometry ? (n = new Ee,
        n.fromBufferGeometry(e)) : n = e.clone(),
        n.mergeVertices(),
        n.computeFaceNormals();
        for (var c = n.vertices, h = n.faces, l = 0, u = h.length; u > l; l++)
            for (var p = h[l], d = 0; 3 > d; d++) {
                a[0] = p[s[d]],
                a[1] = p[s[(d + 1) % 3]],
                a.sort(i);
                var f = a.toString();
                void 0 === o[f] ? o[f] = {
                    vert1: a[0],
                    vert2: a[1],
                    face1: l,
                    face2: void 0
                } : o[f].face2 = l
            }
        var m = [];
        for (var f in o) {
            var g = o[f];
            if (void 0 === g.face2 || h[g.face1].normal.dot(h[g.face2].normal) <= r) {
                var v = c[g.vert1];
                m.push(v.x),
                m.push(v.y),
                m.push(v.z),
                v = c[g.vert2],
                m.push(v.x),
                m.push(v.y),
                m.push(v.z)
            }
        }
        this.addAttribute("position", new de(new Float32Array(m),3))
    }
    function ni(e, t, n, r, a, o, s, h) {
        function l() {
            var e = (r + 1) * (a + 1);
            return o === !1 && (e += (r + 1) * m + r * m),
            e
        }
        function u() {
            var e = r * a * 2 * 3;
            return o === !1 && (e += r * m * 3),
            e
        }
        function p() {
            var i, o, l = new c, u = new c, p = 0, d = (t - e) / n;
            for (o = 0; a >= o; o++) {
                var m = []
                  , g = o / a
                  , v = g * (t - e) + e;
                for (i = 0; r >= i; i++) {
                    var A = i / r
                      , L = A * h + s
                      , R = Math.sin(L)
                      , P = Math.cos(L);
                    u.x = v * R,
                    u.y = -g * n + T,
                    u.z = v * P,
                    x.setXYZ(w, u.x, u.y, u.z),
                    l.set(R, d, P).normalize(),
                    b.setXYZ(w, l.x, l.y, l.z),
                    _.setXY(w, A, 1 - g),
                    m.push(w),
                    w++
                }
                E.push(m)
            }
            for (i = 0; r > i; i++)
                for (o = 0; a > o; o++) {
                    var C = E[o][i]
                      , I = E[o + 1][i]
                      , U = E[o + 1][i + 1]
                      , D = E[o][i + 1];
                    y.setX(M, C),
                    M++,
                    y.setX(M, I),
                    M++,
                    y.setX(M, D),
                    M++,
                    y.setX(M, I),
                    M++,
                    y.setX(M, U),
                    M++,
                    y.setX(M, D),
                    M++,
                    p += 6
                }
            f.addGroup(S, p, 0),
            S += p
        }
        function d(n) {
            var a, o, l, u = new i, p = new c, d = 0, m = n === !0 ? e : t, g = n === !0 ? 1 : -1;
            for (o = w,
            a = 1; r >= a; a++)
                x.setXYZ(w, 0, T * g, 0),
                b.setXYZ(w, 0, g, 0),
                u.x = .5,
                u.y = .5,
                _.setXY(w, u.x, u.y),
                w++;
            for (l = w,
            a = 0; r >= a; a++) {
                var v = a / r
                  , E = v * h + s
                  , A = Math.cos(E)
                  , L = Math.sin(E);
                p.x = m * L,
                p.y = T * g,
                p.z = m * A,
                x.setXYZ(w, p.x, p.y, p.z),
                b.setXYZ(w, 0, g, 0),
                u.x = .5 * A + .5,
                u.y = .5 * L * g + .5,
                _.setXY(w, u.x, u.y),
                w++
            }
            for (a = 0; r > a; a++) {
                var R = o + a
                  , P = l + a;
                n === !0 ? (y.setX(M, P),
                M++,
                y.setX(M, P + 1),
                M++,
                y.setX(M, R),
                M++) : (y.setX(M, P + 1),
                M++,
                y.setX(M, P),
                M++,
                y.setX(M, R),
                M++),
                d += 3
            }
            f.addGroup(S, d, n === !0 ? 1 : 2),
            S += d
        }
        Se.call(this),
        this.type = "CylinderBufferGeometry",
        this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: n,
            radialSegments: r,
            heightSegments: a,
            openEnded: o,
            thetaStart: s,
            thetaLength: h
        };
        var f = this;
        e = void 0 !== e ? e : 20,
        t = void 0 !== t ? t : 20,
        n = void 0 !== n ? n : 100,
        r = Math.floor(r) || 8,
        a = Math.floor(a) || 1,
        o = void 0 !== o ? o : !1,
        s = void 0 !== s ? s : 0,
        h = void 0 !== h ? h : 2 * Math.PI;
        var m = 0;
        o === !1 && (e > 0 && m++,
        t > 0 && m++);
        var g = l()
          , v = u()
          , y = new de(new (v > 65535 ? Uint32Array : Uint16Array)(v),1)
          , x = new de(new Float32Array(3 * g),3)
          , b = new de(new Float32Array(3 * g),3)
          , _ = new de(new Float32Array(2 * g),2)
          , w = 0
          , M = 0
          , E = []
          , T = n / 2
          , S = 0;
        p(),
        o === !1 && (e > 0 && d(!0),
        t > 0 && d(!1)),
        this.setIndex(y),
        this.addAttribute("position", x),
        this.addAttribute("normal", b),
        this.addAttribute("uv", _)
    }
    function ri(e, t, i, n, r, a, o, s) {
        Ee.call(this),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: e,
            radiusBottom: t,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        },
        this.fromBufferGeometry(new ni(e,t,i,n,r,a,o,s)),
        this.mergeVertices()
    }
    function ai(e, t, i, n, r, a, o) {
        ri.call(this, 0, e, t, i, n, r, a, o),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: e,
            height: t,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }
    function oi(e, t, i, n, r, a, o) {
        ni.call(this, 0, e, t, i, n, r, a, o),
        this.type = "ConeBufferGeometry",
        this.parameters = {
            radius: e,
            height: t,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }
    function si(e, t, i, n) {
        Se.call(this),
        this.type = "CircleBufferGeometry",
        this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: n
        },
        e = e || 50,
        t = void 0 !== t ? Math.max(3, t) : 8,
        i = void 0 !== i ? i : 0,
        n = void 0 !== n ? n : 2 * Math.PI;
        var r = t + 2
          , a = new Float32Array(3 * r)
          , o = new Float32Array(3 * r)
          , s = new Float32Array(2 * r);
        o[2] = 1,
        s[0] = .5,
        s[1] = .5;
        for (var h = 0, l = 3, u = 2; t >= h; h++,
        l += 3,
        u += 2) {
            var p = i + h / t * n;
            a[l] = e * Math.cos(p),
            a[l + 1] = e * Math.sin(p),
            o[l + 2] = 1,
            s[u] = (a[l] / e + 1) / 2,
            s[u + 1] = (a[l + 1] / e + 1) / 2
        }
        for (var d = [], l = 1; t >= l; l++)
            d.push(l, l + 1, 0);
        this.setIndex(new de(new Uint16Array(d),1)),
        this.addAttribute("position", new de(a,3)),
        this.addAttribute("normal", new de(o,3)),
        this.addAttribute("uv", new de(s,2)),
        this.boundingSphere = new ee(new c,e)
    }
    function ci(e, t, i, n) {
        Ee.call(this),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: e,
            segments: t,
            thetaStart: i,
            thetaLength: n
        },
        this.fromBufferGeometry(new si(e,t,i,n))
    }
    function hi(e, t, i, n, r, a) {
        Ee.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        },
        this.fromBufferGeometry(new Le(e,t,i,n,r,a)),
        this.mergeVertices()
    }
    function li() {
        Q.call(this, {
            uniforms: Object.assign({}, nh.lights, {
                opacity: {
                    value: 1
                }
            }),
            vertexShader: th.shadow_vert,
            fragmentShader: th.shadow_frag
        }),
        this.lights = !0,
        this.transparent = !0,
        Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(e) {
                    this.uniforms.opacity.value = e
                }
            }
        })
    }
    function ui(e) {
        Q.call(this, e),
        this.type = "RawShaderMaterial"
    }
    function pi(e) {
        this.uuid = Jo.generateUUID(),
        this.type = "MultiMaterial",
        this.materials = e instanceof Array ? e : [],
        this.visible = !0
    }
    function di(e) {
        J.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new W(16777215),
        this.roughness = .5,
        this.metalness = .5,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new W(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new i(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(e)
    }
    function fi(e) {
        di.call(this),
        this.defines = {
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.reflectivity = .5,
        this.clearCoat = 0,
        this.clearCoatRoughness = 0,
        this.setValues(e)
    }
    function mi(e) {
        J.call(this),
        this.type = "MeshPhongMaterial",
        this.color = new W(16777215),
        this.specular = new W(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new W(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new i(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = Ea,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(e)
    }
    function gi(e) {
        mi.call(this),
        this.defines = {
            TOON: ""
        },
        this.type = "MeshToonMaterial",
        this.gradientMap = null,
        this.setValues(e)
    }
    function vi(e) {
        J.call(this, e),
        this.type = "MeshNormalMaterial",
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.morphTargets = !1,
        this.setValues(e)
    }
    function yi(e) {
        J.call(this),
        this.type = "MeshLambertMaterial",
        this.color = new W(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new W(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = Ea,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(e)
    }
    function xi(e) {
        J.call(this),
        this.type = "LineDashedMaterial",
        this.color = new W(16777215),
        this.linewidth = 1,
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.lights = !1,
        this.setValues(e)
    }
    function bi(e, t, i) {
        var n = this
          , r = !1
          , a = 0
          , o = 0;
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = i,
        this.itemStart = function(e) {
            o++,
            r === !1 && void 0 !== n.onStart && n.onStart(e, a, o),
            r = !0
        }
        ,
        this.itemEnd = function(e) {
            a++,
            void 0 !== n.onProgress && n.onProgress(e, a, o),
            a === o && (r = !1,
            void 0 !== n.onLoad && n.onLoad())
        }
        ,
        this.itemError = function(e) {
            void 0 !== n.onError && n.onError(e)
        }
    }
    function _i(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function wi(e) {
        this.manager = void 0 !== e ? e : dh,
        this._parser = null
    }
    function Mi(e) {
        this.manager = void 0 !== e ? e : dh,
        this._parser = null
    }
    function Ei(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function Ti(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function Si(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function Ai(e, t) {
        ce.call(this),
        this.type = "Light",
        this.color = new W(e),
        this.intensity = void 0 !== t ? t : 1,
        this.receiveShadow = void 0
    }
    function Li(e, t, i) {
        Ai.call(this, e, i),
        this.type = "HemisphereLight",
        this.castShadow = void 0,
        this.position.copy(ce.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new W(t)
    }
    function Ri(e) {
        this.camera = e,
        this.bias = 0,
        this.radius = 1,
        this.mapSize = new i(512,512),
        this.map = null,
        this.matrix = new h
    }
    function Pi() {
        Ri.call(this, new Ce(50,1,.5,500))
    }
    function Ci(e, t, i, n, r, a) {
        Ai.call(this, e, t),
        this.type = "SpotLight",
        this.position.copy(ce.DefaultUp),
        this.updateMatrix(),
        this.target = new ce,
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / Math.PI
            }
        }),
        this.distance = void 0 !== i ? i : 0,
        this.angle = void 0 !== n ? n : Math.PI / 3,
        this.penumbra = void 0 !== r ? r : 0,
        this.decay = void 0 !== a ? a : 1,
        this.shadow = new Pi
    }
    function Ii(e, t, i, n) {
        Ai.call(this, e, t),
        this.type = "PointLight",
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(e) {
                this.intensity = e / (4 * Math.PI)
            }
        }),
        this.distance = void 0 !== i ? i : 0,
        this.decay = void 0 !== n ? n : 1,
        this.shadow = new Ri(new Ce(90,1,.5,500))
    }
    function Ui() {
        Ri.call(this, new Ie(-5,5,5,-5,.5,500))
    }
    function Di(e, t) {
        Ai.call(this, e, t),
        this.type = "DirectionalLight",
        this.position.copy(ce.DefaultUp),
        this.updateMatrix(),
        this.target = new ce,
        this.shadow = new Ui
    }
    function Ni(e, t) {
        Ai.call(this, e, t),
        this.type = "AmbientLight",
        this.castShadow = void 0
    }
    function Oi(e, t, i, n) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== n ? n : new t.constructor(i),
        this.sampleValues = t,
        this.valueSize = i
    }
    function Fi(e, t, i, n) {
        Oi.call(this, e, t, i, n),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0
    }
    function zi(e, t, i, n) {
        Oi.call(this, e, t, i, n)
    }
    function Bi(e, t, i, n) {
        Oi.call(this, e, t, i, n)
    }
    function Gi(e, t, i, n) {
        if (void 0 === e)
            throw new Error("track name is undefined");
        if (void 0 === t || 0 === t.length)
            throw new Error("no keyframes in track named " + e);
        this.name = e,
        this.times = mh.convertArray(t, this.TimeBufferType),
        this.values = mh.convertArray(i, this.ValueBufferType),
        this.setInterpolation(n || this.DefaultInterpolation),
        this.validate(),
        this.optimize()
    }
    function Hi(e, t, i, n) {
        Gi.call(this, e, t, i, n)
    }
    function Vi(e, t, i, n) {
        Oi.call(this, e, t, i, n)
    }
    function ki(e, t, i, n) {
        Gi.call(this, e, t, i, n)
    }
    function ji(e, t, i, n) {
        Gi.call(this, e, t, i, n)
    }
    function Wi(e, t, i, n) {
        Gi.call(this, e, t, i, n)
    }
    function Xi(e, t, i) {
        Gi.call(this, e, t, i)
    }
    function Yi(e, t, i, n) {
        Gi.call(this, e, t, i, n)
    }
    function qi() {
        Gi.apply(this, arguments)
    }
    function Zi(e, t, i) {
        this.name = e,
        this.tracks = i,
        this.duration = void 0 !== t ? t : -1,
        this.uuid = Jo.generateUUID(),
        this.duration < 0 && this.resetDuration(),
        this.optimize()
    }
    function Ji(e) {
        this.manager = void 0 !== e ? e : dh,
        this.textures = {}
    }
    function Qi(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function Ki() {
        this.onLoadStart = function() {}
        ,
        this.onLoadProgress = function() {}
        ,
        this.onLoadComplete = function() {}
    }
    function $i(e) {
        "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
        e = void 0),
        this.manager = void 0 !== e ? e : dh,
        this.withCredentials = !1
    }
    function en(e) {
        this.manager = void 0 !== e ? e : dh,
        this.texturePath = ""
    }
    function tn() {}
    function nn(e, t) {
        this.v1 = e,
        this.v2 = t
    }
    function rn() {
        this.curves = [],
        this.autoClose = !1
    }
    function an(e, t, i, n, r, a, o, s) {
        this.aX = e,
        this.aY = t,
        this.xRadius = i,
        this.yRadius = n,
        this.aStartAngle = r,
        this.aEndAngle = a,
        this.aClockwise = o,
        this.aRotation = s || 0
    }
    function on(e) {
        this.points = void 0 === e ? [] : e
    }
    function sn(e, t, i, n) {
        this.v0 = e,
        this.v1 = t,
        this.v2 = i,
        this.v3 = n
    }
    function cn(e, t, i) {
        this.v0 = e,
        this.v1 = t,
        this.v2 = i
    }
    function hn() {
        ln.apply(this, arguments),
        this.holes = []
    }
    function ln(e) {
        rn.call(this),
        this.currentPoint = new i,
        e && this.fromPoints(e)
    }
    function un() {
        this.subPaths = [],
        this.currentPath = null
    }
    function pn(e) {
        this.data = e
    }
    function dn(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function fn(e) {
        this.manager = void 0 !== e ? e : dh
    }
    function mn(e, t, i, n) {
        Ai.call(this, e, t),
        this.type = "RectAreaLight",
        this.position.set(0, 1, 0),
        this.updateMatrix(),
        this.width = void 0 !== i ? i : 10,
        this.height = void 0 !== n ? n : 10
    }
    function gn() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.eyeSep = .064,
        this.cameraL = new Ce,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new Ce,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1
    }
    function vn(e, t, i) {
        ce.call(this),
        this.type = "CubeCamera";
        var n = 90
          , r = 1
          , a = new Ce(n,r,e,t);
        a.up.set(0, -1, 0),
        a.lookAt(new c(1,0,0)),
        this.add(a);
        var s = new Ce(n,r,e,t);
        s.up.set(0, -1, 0),
        s.lookAt(new c(-1,0,0)),
        this.add(s);
        var h = new Ce(n,r,e,t);
        h.up.set(0, 0, 1),
        h.lookAt(new c(0,1,0)),
        this.add(h);
        var l = new Ce(n,r,e,t);
        l.up.set(0, 0, -1),
        l.lookAt(new c(0,-1,0)),
        this.add(l);
        var u = new Ce(n,r,e,t);
        u.up.set(0, -1, 0),
        u.lookAt(new c(0,0,1)),
        this.add(u);
        var p = new Ce(n,r,e,t);
        p.up.set(0, -1, 0),
        p.lookAt(new c(0,0,-1)),
        this.add(p);
        var d = {
            format: uo,
            magFilter: qa,
            minFilter: qa
        };
        this.renderTarget = new o(i,i,d),
        this.updateCubeMap = function(e, t) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget
              , n = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1,
            i.activeCubeFace = 0,
            e.render(t, a, i),
            i.activeCubeFace = 1,
            e.render(t, s, i),
            i.activeCubeFace = 2,
            e.render(t, h, i),
            i.activeCubeFace = 3,
            e.render(t, l, i),
            i.activeCubeFace = 4,
            e.render(t, u, i),
            i.texture.generateMipmaps = n,
            i.activeCubeFace = 5,
            e.render(t, p, i),
            e.setRenderTarget(null)
        }
    }
    function yn() {
        ce.call(this),
        this.type = "AudioListener",
        this.context = bh.getContext(),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null
    }
    function xn(e) {
        ce.call(this),
        this.type = "Audio",
        this.context = e.context,
        this.gain = this.context.createGain(),
        this.gain.connect(e.getInput()),
        this.autoplay = !1,
        this.buffer = null,
        this.loop = !1,
        this.startTime = 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.sourceType = "empty",
        this.filters = []
    }
    function bn(e) {
        xn.call(this, e),
        this.panner = this.context.createPanner(),
        this.panner.connect(this.gain)
    }
    function _n(e, t) {
        this.analyser = e.context.createAnalyser(),
        this.analyser.fftSize = void 0 !== t ? t : 2048,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        e.getOutput().connect(this.analyser)
    }
    function wn(e, t, i) {
        this.binding = e,
        this.valueSize = i;
        var n, r = Float64Array;
        switch (t) {
        case "quaternion":
            n = this._slerp;
            break;
        case "string":
        case "bool":
            r = Array,
            n = this._select;
            break;
        default:
            n = this._lerp
        }
        this.buffer = new r(4 * i),
        this._mixBufferRegion = n,
        this.cumulativeWeight = 0,
        this.useCount = 0,
        this.referenceCount = 0
    }
    function Mn(e, t, i) {
        this.path = t,
        this.parsedPath = i || Mn.parseTrackName(t),
        this.node = Mn.findNode(e, this.parsedPath.nodeName) || e,
        this.rootNode = e
    }
    function En() {
        this.uuid = Jo.generateUUID(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var t = 0, i = arguments.length; t !== i; ++t)
            e[arguments[t].uuid] = t;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        var n = this;
        this.stats = {
            objects: {
                get total() {
                    return n._objects.length
                },
                get inUse() {
                    return this.total - n.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return n._bindings.length
            }
        }
    }
    function Tn(e, t, i) {
        this._mixer = e,
        this._clip = t,
        this._localRoot = i || null;
        for (var n = t.tracks, r = n.length, a = new Array(r), o = {
            endingStart: Do,
            endingEnd: Do
        }, s = 0; s !== r; ++s) {
            var c = n[s].createInterpolant(null);
            a[s] = c,
            c.settings = o
        }
        this._interpolantSettings = o,
        this._interpolants = a,
        this._propertyBindings = new Array(r),
        this._cacheIndex = null,
        this._byClipCacheIndex = null,
        this._timeScaleInterpolant = null,
        this._weightInterpolant = null,
        this.loop = Ro,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this.timeScale = 1,
        this._effectiveTimeScale = 1,
        this.weight = 1,
        this._effectiveWeight = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtStart = !0,
        this.zeroSlopeAtEnd = !0
    }
    function Sn(e) {
        this._root = e,
        this._initMemoryManager(),
        this._accuIndex = 0,
        this.time = 0,
        this.timeScale = 1
    }
    function An(e) {
        "string" == typeof e && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        e = arguments[1]),
        this.value = e
    }
    function Ln() {
        Se.call(this),
        this.type = "InstancedBufferGeometry",
        this.maxInstancedCount = void 0
    }
    function Rn(e, t, i, n) {
        this.uuid = Jo.generateUUID(),
        this.data = e,
        this.itemSize = t,
        this.offset = i,
        this.normalized = n === !0
    }
    function Pn(e, t) {
        this.uuid = Jo.generateUUID(),
        this.array = e,
        this.stride = t,
        this.count = void 0 !== e ? e.length / t : 0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.onUploadCallback = function() {}
        ,
        this.version = 0
    }
    function Cn(e, t, i) {
        Pn.call(this, e, t),
        this.meshPerAttribute = i || 1
    }
    function In(e, t, i) {
        de.call(this, e, t),
        this.meshPerAttribute = i || 1
    }
    function Un(e, t, i, n) {
        this.ray = new ae(e,t),
        this.near = i || 0,
        this.far = n || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    function Dn(e, t) {
        return e.distance - t.distance
    }
    function Nn(e, t, i, n) {
        if (e.visible !== !1 && (e.raycast(t, i),
        n === !0))
            for (var r = e.children, a = 0, o = r.length; o > a; a++)
                Nn(r[a], t, i, !0)
    }
    function On(e) {
        this.autoStart = void 0 !== e ? e : !0,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    function Fn(e) {
        function t(e, t, i, n, r, a, o) {
            var s = .5 * (i - e)
              , c = .5 * (n - t);
            return (2 * (t - i) + s + c) * o + (-3 * (t - i) - 2 * s - c) * a + s * r + t
        }
        this.points = e;
        var i, n, r, a, o, s, h, l, u, p = [], d = {
            x: 0,
            y: 0,
            z: 0
        };
        this.initFromArray = function(e) {
            this.points = [];
            for (var t = 0; t < e.length; t++)
                this.points[t] = {
                    x: e[t][0],
                    y: e[t][1],
                    z: e[t][2]
                }
        }
        ,
        this.getPoint = function(e) {
            return i = (this.points.length - 1) * e,
            n = Math.floor(i),
            r = i - n,
            p[0] = 0 === n ? n : n - 1,
            p[1] = n,
            p[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1,
            p[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2,
            s = this.points[p[0]],
            h = this.points[p[1]],
            l = this.points[p[2]],
            u = this.points[p[3]],
            a = r * r,
            o = r * a,
            d.x = t(s.x, h.x, l.x, u.x, r, a, o),
            d.y = t(s.y, h.y, l.y, u.y, r, a, o),
            d.z = t(s.z, h.z, l.z, u.z, r, a, o),
            d
        }
        ,
        this.getControlPointsArray = function() {
            var e, t, i = this.points.length, n = [];
            for (e = 0; i > e; e++)
                t = this.points[e],
                n[e] = [t.x, t.y, t.z];
            return n
        }
        ,
        this.getLength = function(e) {
            var t, i, n, r, a = 0, o = 0, s = 0, h = new c, l = new c, u = [], p = 0;
            for (u[0] = 0,
            e || (e = 100),
            n = this.points.length * e,
            h.copy(this.points[0]),
            t = 1; n > t; t++)
                i = t / n,
                r = this.getPoint(i),
                l.copy(r),
                p += l.distanceTo(h),
                h.copy(r),
                a = (this.points.length - 1) * i,
                o = Math.floor(a),
                o !== s && (u[o] = p,
                s = o);
            return u[u.length] = p,
            {
                chunks: u,
                total: p
            }
        }
        ,
        this.reparametrizeByArcLength = function(e) {
            var t, i, n, r, a, o, s, h, l = [], u = new c, p = this.getLength();
            for (l.push(u.copy(this.points[0]).clone()),
            t = 1; t < this.points.length; t++) {
                for (o = p.chunks[t] - p.chunks[t - 1],
                s = Math.ceil(e * o / p.total),
                r = (t - 1) / (this.points.length - 1),
                a = t / (this.points.length - 1),
                i = 1; s - 1 > i; i++)
                    n = r + i * (1 / s) * (a - r),
                    h = this.getPoint(n),
                    l.push(u.copy(h).clone());
                l.push(u.copy(this.points[t]).clone())
            }
            this.points = l
        }
    }
    function zn(e, t, i) {
        return this.radius = void 0 !== e ? e : 1,
        this.phi = void 0 !== t ? t : 0,
        this.theta = void 0 !== i ? i : 0,
        this
    }
    function Bn(e, t) {
        Ae.call(this, e, t),
        this.animationsMap = {},
        this.animationsList = [];
        var i = this.geometry.morphTargets.length
          , n = "__default"
          , r = 0
          , a = i - 1
          , o = i / 1;
        this.createAnimation(n, r, a, o),
        this.setAnimationWeight(n, 1)
    }
    function Gn(e) {
        ce.call(this),
        this.material = e,
        this.render = function() {}
    }
    function Hn(e, t, i, n) {
        this.object = e,
        this.size = void 0 !== t ? t : 1;
        var r = void 0 !== i ? i : 16711680
          , a = void 0 !== n ? n : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new Se
          , h = new _e(2 * o * 3,3);
        c.addAttribute("position", h),
        yt.call(this, c, new gt({
            color: r,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Vn(e) {
        ce.call(this),
        this.light = e,
        this.light.updateMatrixWorld(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1;
        for (var t = new Se, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], n = 0, r = 1, a = 32; a > n; n++,
        r++) {
            var o = n / a * Math.PI * 2
              , s = r / a * Math.PI * 2;
            i.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        t.addAttribute("position", new _e(i,3));
        var c = new gt({
            fog: !1
        });
        this.cone = new yt(t,c),
        this.add(this.cone),
        this.update()
    }
    function kn(e) {
        this.bones = this.getBoneList(e);
        for (var t = new Se, i = [], n = [], r = new W(0,0,1), a = new W(0,1,0), o = 0; o < this.bones.length; o++) {
            var s = this.bones[o];
            s.parent && s.parent.isBone && (i.push(0, 0, 0),
            i.push(0, 0, 0),
            n.push(r.r, r.g, r.b),
            n.push(a.r, a.g, a.b))
        }
        t.addAttribute("position", new _e(i,3)),
        t.addAttribute("color", new _e(n,3));
        var c = new gt({
            vertexColors: Xr,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        yt.call(this, t, c),
        this.root = e,
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function jn(e, t) {
        this.light = e,
        this.light.updateMatrixWorld();
        var i = new Yt(t,4,2)
          , n = new pe({
            wireframe: !0,
            fog: !1
        });
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        Ae.call(this, i, n),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    function Wn(e) {
        ce.call(this),
        this.light = e,
        this.light.updateMatrixWorld();
        var t = new pe({
            color: e.color,
            fog: !1
        })
          , i = new pe({
            color: e.color,
            fog: !1,
            wireframe: !0
        })
          , n = new Se;
        n.addAttribute("position", new de(new Float32Array(18),3)),
        this.add(new Ae(n,t)),
        this.add(new Ae(n,i)),
        this.update()
    }
    function Xn(e, t) {
        ce.call(this),
        this.light = e,
        this.light.updateMatrixWorld(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1;
        var i = new It(t);
        i.rotateY(.5 * Math.PI);
        var n = new pe({
            vertexColors: Xr,
            wireframe: !0
        })
          , r = i.getAttribute("position")
          , a = new Float32Array(3 * r.count);
        i.addAttribute("color", new de(a,3)),
        this.add(new Ae(i,n)),
        this.update()
    }
    function Yn(e, t, i, n) {
        e = e || 10,
        t = t || 10,
        i = new W(void 0 !== i ? i : 4473924),
        n = new W(void 0 !== n ? n : 8947848);
        for (var r = t / 2, a = 2 * e / t, o = [], s = [], c = 0, h = 0, l = -e; t >= c; c++,
        l += a) {
            o.push(-e, 0, l, e, 0, l),
            o.push(l, 0, -e, l, 0, e);
            var u = c === r ? i : n;
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3
        }
        var p = new Se;
        p.addAttribute("position", new _e(o,3)),
        p.addAttribute("color", new _e(s,3));
        var d = new gt({
            vertexColors: Xr
        });
        yt.call(this, p, d)
    }
    function qn(e, t, i, n, r, a) {
        e = e || 10,
        t = t || 16,
        i = i || 8,
        n = n || 64,
        r = new W(void 0 !== r ? r : 4473924),
        a = new W(void 0 !== a ? a : 8947848);
        var o, s, c, h, l, u, p, d = [], f = [];
        for (h = 0; t >= h; h++)
            c = h / t * 2 * Math.PI,
            o = Math.sin(c) * e,
            s = Math.cos(c) * e,
            d.push(0, 0, 0),
            d.push(o, 0, s),
            p = 1 & h ? r : a,
            f.push(p.r, p.g, p.b),
            f.push(p.r, p.g, p.b);
        for (h = 0; i >= h; h++)
            for (p = 1 & h ? r : a,
            u = e - e / i * h,
            l = 0; n > l; l++)
                c = l / n * 2 * Math.PI,
                o = Math.sin(c) * u,
                s = Math.cos(c) * u,
                d.push(o, 0, s),
                f.push(p.r, p.g, p.b),
                c = (l + 1) / n * 2 * Math.PI,
                o = Math.sin(c) * u,
                s = Math.cos(c) * u,
                d.push(o, 0, s),
                f.push(p.r, p.g, p.b);
        var m = new Se;
        m.addAttribute("position", new _e(d,3)),
        m.addAttribute("color", new _e(f,3));
        var g = new gt({
            vertexColors: Xr
        });
        yt.call(this, m, g)
    }
    function Zn(e, t, i, n) {
        this.object = e,
        this.size = void 0 !== t ? t : 1;
        var r = void 0 !== i ? i : 16776960
          , a = void 0 !== n ? n : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new Se
          , h = new _e(2 * o * 3,3);
        c.addAttribute("position", h),
        yt.call(this, c, new gt({
            color: r,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Jn(e, t) {
        ce.call(this),
        this.light = e,
        this.light.updateMatrixWorld(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        void 0 === t && (t = 1);
        var i = new Se;
        i.addAttribute("position", new _e([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0],3));
        var n = new gt({
            fog: !1
        });
        this.add(new vt(i,n)),
        i = new Se,
        i.addAttribute("position", new _e([0, 0, 0, 0, 0, 1],3)),
        this.add(new vt(i,n)),
        this.update()
    }
    function Qn(e) {
        function t(e, t, n) {
            i(e, n),
            i(t, n)
        }
        function i(e, t) {
            a.push(0, 0, 0),
            o.push(t.r, t.g, t.b),
            void 0 === s[e] && (s[e] = []),
            s[e].push(a.length / 3 - 1)
        }
        var n = new Se
          , r = new gt({
            color: 16777215,
            vertexColors: Wr
        })
          , a = []
          , o = []
          , s = {}
          , c = new W(16755200)
          , h = new W(16711680)
          , l = new W(43775)
          , u = new W(16777215)
          , p = new W(3355443);
        t("n1", "n2", c),
        t("n2", "n4", c),
        t("n4", "n3", c),
        t("n3", "n1", c),
        t("f1", "f2", c),
        t("f2", "f4", c),
        t("f4", "f3", c),
        t("f3", "f1", c),
        t("n1", "f1", c),
        t("n2", "f2", c),
        t("n3", "f3", c),
        t("n4", "f4", c),
        t("p", "n1", h),
        t("p", "n2", h),
        t("p", "n3", h),
        t("p", "n4", h),
        t("u1", "u2", l),
        t("u2", "u3", l),
        t("u3", "u1", l),
        t("c", "t", u),
        t("p", "c", p),
        t("cn1", "cn2", p),
        t("cn3", "cn4", p),
        t("cf1", "cf2", p),
        t("cf3", "cf4", p),
        n.addAttribute("position", new _e(a,3)),
        n.addAttribute("color", new _e(o,3)),
        yt.call(this, n, r),
        this.camera = e,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = s,
        this.update()
    }
    function Kn(e, t) {
        void 0 === t && (t = 16776960);
        var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , n = new Float32Array(24)
          , r = new Se;
        r.setIndex(new de(i,1)),
        r.addAttribute("position", new de(n,3)),
        yt.call(this, r, new gt({
            color: t
        })),
        void 0 !== e && this.update(e)
    }
    function $n(e, t, i, n, r, a) {
        ce.call(this),
        void 0 === n && (n = 16776960),
        void 0 === i && (i = 1),
        void 0 === r && (r = .2 * i),
        void 0 === a && (a = .2 * r),
        this.position.copy(t),
        this.line = new vt(_h,new gt({
            color: n
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new Ae(wh,new pe({
            color: n
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(e),
        this.setLength(i, r, a)
    }
    function er(e) {
        e = e || 1;
        var t = [0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]
          , i = [1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]
          , n = new Se;
        n.addAttribute("position", new _e(t,3)),
        n.addAttribute("color", new _e(i,3));
        var r = new gt({
            vertexColors: Xr
        });
        yt.call(this, n, r)
    }
    function tr(e, t, i, n, r, a) {
        an.call(this, e, t, i, i, n, r, a)
    }
    function ir(e, t, i, n, r, a, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
        new ue(e,t,i,r,a,o)
    }
    function nr(e) {
        return console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial."),
        new pi(e)
    }
    function rr(e, t) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
        new bt(e,t)
    }
    function ar(e) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."),
        new ut(e)
    }
    function or(e, t) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
        new bt(e,t)
    }
    function sr(e) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
        new xt(e)
    }
    function cr(e) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
        new xt(e)
    }
    function hr(e) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
        new xt(e)
    }
    function lr(e, t, i) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
        new c(e,t,i)
    }
    function ur(e, t) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
        new de(e,t).setDynamic(!0)
    }
    function pr(e, t) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),
        new fe(e,t)
    }
    function dr(e, t) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),
        new me(e,t)
    }
    function fr(e, t) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),
        new ge(e,t)
    }
    function mr(e, t) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),
        new ve(e,t)
    }
    function gr(e, t) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),
        new ye(e,t)
    }
    function vr(e, t) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),
        new xe(e,t)
    }
    function yr(e, t) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),
        new be(e,t)
    }
    function xr(e, t) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),
        new _e(e,t)
    }
    function br(e, t) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),
        new we(e,t)
    }
    function _r(e) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),
        Mh.call(this, e),
        this.type = "catmullrom",
        this.closed = !0
    }
    function wr(e, t) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),
        new Kn(e,t)
    }
    function Mr(e, t) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
        new yt(new ii(e.geometry),new gt({
            color: void 0 !== t ? t : 16777215
        }))
    }
    function Er(e, t) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
        new yt(new St(e.geometry),new gt({
            color: void 0 !== t ? t : 16777215
        }))
    }
    function Tr(e) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),
        new _i(e)
    }
    function Sr() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
        this.projectVector = function(e, t) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."),
            e.project(t)
        }
        ,
        this.unprojectVector = function(e, t) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
            e.unproject(t)
        }
        ,
        this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }
    function Ar() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        this.clear = function() {}
        ,
        this.render = function() {}
        ,
        this.setClearColor = function() {}
        ,
        this.setSize = function() {}
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Math.sign && (Math.sign = function(e) {
        return 0 > e ? -1 : e > 0 ? 1 : +e
    }
    ),
    void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }),
    void 0 === Object.assign && !function() {
        Object.assign = function(e) {
            if (void 0 === e || null === e)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (void 0 !== n && null !== n)
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
    }(),
    Object.assign(t.prototype, {
        addEventListener: function(e, t) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[e] && (i[e] = []),
            -1 === i[e].indexOf(t) && i[e].push(t)
        },
        hasEventListener: function(e, t) {
            if (void 0 === this._listeners)
                return !1;
            var i = this._listeners;
            return void 0 !== i[e] && -1 !== i[e].indexOf(t) ? !0 : !1
        },
        removeEventListener: function(e, t) {
            if (void 0 !== this._listeners) {
                var i = this._listeners
                  , n = i[e];
                if (void 0 !== n) {
                    var r = n.indexOf(t);
                    -1 !== r && n.splice(r, 1)
                }
            }
        },
        dispatchEvent: function(e) {
            if (void 0 !== this._listeners) {
                var t = this._listeners
                  , i = t[e.type];
                if (void 0 !== i) {
                    e.target = this;
                    var n = []
                      , r = 0
                      , a = i.length;
                    for (r = 0; a > r; r++)
                        n[r] = i[r];
                    for (r = 0; a > r; r++)
                        n[r].call(this, e)
                }
            }
        }
    });
    var Lr = "83dev"
      , Rr = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }
      , Pr = 0
      , Cr = 1
      , Ir = 2
      , Ur = 3
      , Dr = 0
      , Nr = 1
      , Or = 0
      , Fr = 1
      , zr = 2
      , Br = 0
      , Gr = 1
      , Hr = 2
      , Vr = 1
      , kr = 2
      , jr = 0
      , Wr = 1
      , Xr = 2
      , Yr = 0
      , qr = 1
      , Zr = 2
      , Jr = 3
      , Qr = 4
      , Kr = 5
      , $r = {
        NoBlending: Yr,
        NormalBlending: qr,
        AdditiveBlending: Zr,
        SubtractiveBlending: Jr,
        MultiplyBlending: Qr,
        CustomBlending: Kr
    }
      , ea = 100
      , ta = 101
      , ia = 102
      , na = 103
      , ra = 104
      , aa = 200
      , oa = 201
      , sa = 202
      , ca = 203
      , ha = 204
      , la = 205
      , ua = 206
      , pa = 207
      , da = 208
      , fa = 209
      , ma = 210
      , ga = 0
      , va = 1
      , ya = 2
      , xa = 3
      , ba = 4
      , _a = 5
      , wa = 6
      , Ma = 7
      , Ea = 0
      , Ta = 1
      , Sa = 2
      , Aa = 0
      , La = 1
      , Ra = 2
      , Pa = 3
      , Ca = 4
      , Ia = 300
      , Ua = 301
      , Da = 302
      , Na = 303
      , Oa = 304
      , Fa = 305
      , za = 306
      , Ba = 307
      , Ga = {
        UVMapping: Ia,
        CubeReflectionMapping: Ua,
        CubeRefractionMapping: Da,
        EquirectangularReflectionMapping: Na,
        EquirectangularRefractionMapping: Oa,
        SphericalReflectionMapping: Fa,
        CubeUVReflectionMapping: za,
        CubeUVRefractionMapping: Ba
    }
      , Ha = 1e3
      , Va = 1001
      , ka = 1002
      , ja = {
        RepeatWrapping: Ha,
        ClampToEdgeWrapping: Va,
        MirroredRepeatWrapping: ka
    }
      , Wa = 1003
      , Xa = 1004
      , Ya = 1005
      , qa = 1006
      , Za = 1007
      , Ja = 1008
      , Qa = {
        NearestFilter: Wa,
        NearestMipMapNearestFilter: Xa,
        NearestMipMapLinearFilter: Ya,
        LinearFilter: qa,
        LinearMipMapNearestFilter: Za,
        LinearMipMapLinearFilter: Ja
    }
      , Ka = 1009
      , $a = 1010
      , eo = 1011
      , to = 1012
      , io = 1013
      , no = 1014
      , ro = 1015
      , ao = 1016
      , oo = 1017
      , so = 1018
      , co = 1019
      , ho = 1020
      , lo = 1021
      , uo = 1022
      , po = 1023
      , fo = 1024
      , mo = 1025
      , go = po
      , vo = 1026
      , yo = 1027
      , xo = 2001
      , bo = 2002
      , _o = 2003
      , wo = 2004
      , Mo = 2100
      , Eo = 2101
      , To = 2102
      , So = 2103
      , Ao = 2151
      , Lo = 2200
      , Ro = 2201
      , Po = 2202
      , Co = 2300
      , Io = 2301
      , Uo = 2302
      , Do = 2400
      , No = 2401
      , Oo = 2402
      , Fo = 0
      , zo = 1
      , Bo = 2
      , Go = 3e3
      , Ho = 3001
      , Vo = 3007
      , ko = 3002
      , jo = 3003
      , Wo = 3004
      , Xo = 3005
      , Yo = 3006
      , qo = 3200
      , Zo = 3201
      , Jo = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = new Array(36), n = 0;
            return function() {
                for (var r = 0; 36 > r; r++)
                    8 === r || 13 === r || 18 === r || 23 === r ? i[r] = "-" : 14 === r ? i[r] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0),
                    e = 15 & n,
                    n >>= 4,
                    i[r] = t[19 === r ? 3 & e | 8 : e]);
                return i.join("")
            }
        }(),
        clamp: function(e, t, i) {
            return Math.max(t, Math.min(i, e))
        },
        euclideanModulo: function(e, t) {
            return (e % t + t) % t
        },
        mapLinear: function(e, t, i, n, r) {
            return n + (e - t) * (r - n) / (i - t)
        },
        lerp: function(e, t, i) {
            return (1 - i) * e + i * t
        },
        smoothstep: function(e, t, i) {
            return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t),
            e * e * (3 - 2 * e))
        },
        smootherstep: function(e, t, i) {
            return t >= e ? 0 : e >= i ? 1 : (e = (e - t) / (i - t),
            e * e * e * (e * (6 * e - 15) + 10))
        },
        randInt: function(e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        },
        randFloat: function(e, t) {
            return e + Math.random() * (t - e)
        },
        randFloatSpread: function(e) {
            return e * (.5 - Math.random())
        },
        degToRad: function(e) {
            return e * Jo.DEG2RAD
        },
        radToDeg: function(e) {
            return e * Jo.RAD2DEG
        },
        isPowerOfTwo: function(e) {
            return 0 === (e & e - 1) && 0 !== e
        },
        nearestPowerOfTwo: function(e) {
            return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
        },
        nextPowerOfTwo: function(e) {
            return e--,
            e |= e >> 1,
            e |= e >> 2,
            e |= e >> 4,
            e |= e >> 8,
            e |= e >> 16,
            e++,
            e
        }
    };
    i.prototype = {
        constructor: i,
        isVector2: !0,
        get width() {
            return this.x
        },
        set width(e) {
            this.x = e
        },
        get height() {
            return this.y
        },
        set height(e) {
            this.y = e
        },
        set: function(e, t) {
            return this.x = e,
            this.y = t,
            this
        },
        setScalar: function(e) {
            return this.x = e,
            this.y = e,
            this
        },
        setX: function(e) {
            return this.x = e,
            this
        },
        setY: function(e) {
            return this.y = e,
            this
        },
        setComponent: function(e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(e) {
            return this.x = e.x,
            this.y = e.y,
            this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(e, t)) : (this.x += e.x,
            this.y += e.y,
            this)
        },
        addScalar: function(e) {
            return this.x += e,
            this.y += e,
            this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t,
            this.y += e.y * t,
            this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(e, t)) : (this.x -= e.x,
            this.y -= e.y,
            this)
        },
        subScalar: function(e) {
            return this.x -= e,
            this.y -= e,
            this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this
        },
        multiply: function(e) {
            return this.x *= e.x,
            this.y *= e.y,
            this
        },
        multiplyScalar: function(e) {
            return isFinite(e) ? (this.x *= e,
            this.y *= e) : (this.x = 0,
            this.y = 0),
            this
        },
        divide: function(e) {
            return this.x /= e.x,
            this.y /= e.y,
            this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this
        },
        clampScalar: function() {
            var e, t;
            return function(n, r) {
                return void 0 === e && (e = new i,
                t = new i),
                e.set(n, n),
                t.set(r, r),
                this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var i = this.length();
            return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        angle: function() {
            var e = Math.atan2(this.y, this.x);
            return 0 > e && (e += 2 * Math.PI),
            e
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x
              , i = this.y - e.y;
            return t * t + i * i
        },
        distanceToManhattan: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
        },
        setLength: function(e) {
            return this.multiplyScalar(e / this.length())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0),
            this.x = e[t],
            this.y = e[t + 1],
            this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []),
            void 0 === t && (t = 0),
            e[t] = this.x,
            e[t + 1] = this.y,
            e
        },
        fromAttribute: function(e, t, i) {
            return void 0 === i && (i = 0),
            t = t * e.itemSize + i,
            this.x = e.array[t],
            this.y = e.array[t + 1],
            this
        },
        rotateAround: function(e, t) {
            var i = Math.cos(t)
              , n = Math.sin(t)
              , r = this.x - e.x
              , a = this.y - e.y;
            return this.x = r * i - a * n + e.x,
            this.y = r * n + a * i + e.y,
            this
        }
    };
    var Qo = 0;
    n.DEFAULT_IMAGE = void 0,
    n.DEFAULT_MAPPING = Ia,
    n.prototype = {
        constructor: n,
        isTexture: !0,
        set needsUpdate(e) {
            e === !0 && this.version++
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.image = e.image,
            this.mipmaps = e.mipmaps.slice(0),
            this.mapping = e.mapping,
            this.wrapS = e.wrapS,
            this.wrapT = e.wrapT,
            this.magFilter = e.magFilter,
            this.minFilter = e.minFilter,
            this.anisotropy = e.anisotropy,
            this.format = e.format,
            this.type = e.type,
            this.offset.copy(e.offset),
            this.repeat.copy(e.repeat),
            this.generateMipmaps = e.generateMipmaps,
            this.premultiplyAlpha = e.premultiplyAlpha,
            this.flipY = e.flipY,
            this.unpackAlignment = e.unpackAlignment,
            this.encoding = e.encoding,
            this
        },
        toJSON: function(e) {
            function t(e) {
                var t;
                return void 0 !== e.toDataURL ? t = e : (t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                t.width = e.width,
                t.height = e.height,
                t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)),
                t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
            }
            if (void 0 !== e.textures[this.uuid])
                return e.textures[this.uuid];
            var i = {
                metadata: {
                    version: 4.4,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var n = this.image;
                void 0 === n.uuid && (n.uuid = Jo.generateUUID()),
                void 0 === e.images[n.uuid] && (e.images[n.uuid] = {
                    uuid: n.uuid,
                    url: t(n)
                }),
                i.image = n.uuid
            }
            return e.textures[this.uuid] = i,
            i
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(e) {
            if (this.mapping === Ia) {
                if (e.multiply(this.repeat),
                e.add(this.offset),
                e.x < 0 || e.x > 1)
                    switch (this.wrapS) {
                    case Ha:
                        e.x = e.x - Math.floor(e.x);
                        break;
                    case Va:
                        e.x = e.x < 0 ? 0 : 1;
                        break;
                    case ka:
                        e.x = 1 === Math.abs(Math.floor(e.x) % 2) ? Math.ceil(e.x) - e.x : e.x - Math.floor(e.x)
                    }
                if (e.y < 0 || e.y > 1)
                    switch (this.wrapT) {
                    case Ha:
                        e.y = e.y - Math.floor(e.y);
                        break;
                    case Va:
                        e.y = e.y < 0 ? 0 : 1;
                        break;
                    case ka:
                        e.y = 1 === Math.abs(Math.floor(e.y) % 2) ? Math.ceil(e.y) - e.y : e.y - Math.floor(e.y)
                    }
                this.flipY && (e.y = 1 - e.y)
            }
        }
    },
    Object.assign(n.prototype, t.prototype),
    r.prototype = {
        constructor: r,
        isVector4: !0,
        set: function(e, t, i, n) {
            return this.x = e,
            this.y = t,
            this.z = i,
            this.w = n,
            this
        },
        setScalar: function(e) {
            return this.x = e,
            this.y = e,
            this.z = e,
            this.w = e,
            this
        },
        setX: function(e) {
            return this.x = e,
            this
        },
        setY: function(e) {
            return this.y = e,
            this
        },
        setZ: function(e) {
            return this.z = e,
            this
        },
        setW: function(e) {
            return this.w = e,
            this
        },
        setComponent: function(e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            case 3:
                this.w = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(e) {
            return this.x = e.x,
            this.y = e.y,
            this.z = e.z,
            this.w = void 0 !== e.w ? e.w : 1,
            this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(e, t)) : (this.x += e.x,
            this.y += e.y,
            this.z += e.z,
            this.w += e.w,
            this)
        },
        addScalar: function(e) {
            return this.x += e,
            this.y += e,
            this.z += e,
            this.w += e,
            this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this.z = e.z + t.z,
            this.w = e.w + t.w,
            this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t,
            this.y += e.y * t,
            this.z += e.z * t,
            this.w += e.w * t,
            this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(e, t)) : (this.x -= e.x,
            this.y -= e.y,
            this.z -= e.z,
            this.w -= e.w,
            this)
        },
        subScalar: function(e) {
            return this.x -= e,
            this.y -= e,
            this.z -= e,
            this.w -= e,
            this;
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this.z = e.z - t.z,
            this.w = e.w - t.w,
            this
        },
        multiplyScalar: function(e) {
            return isFinite(e) ? (this.x *= e,
            this.y *= e,
            this.z *= e,
            this.w *= e) : (this.x = 0,
            this.y = 0,
            this.z = 0,
            this.w = 0),
            this
        },
        applyMatrix4: function(e) {
            var t = this.x
              , i = this.y
              , n = this.z
              , r = this.w
              , a = e.elements;
            return this.x = a[0] * t + a[4] * i + a[8] * n + a[12] * r,
            this.y = a[1] * t + a[5] * i + a[9] * n + a[13] * r,
            this.z = a[2] * t + a[6] * i + a[10] * n + a[14] * r,
            this.w = a[3] * t + a[7] * i + a[11] * n + a[15] * r,
            this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        setAxisAngleFromQuaternion: function(e) {
            this.w = 2 * Math.acos(e.w);
            var t = Math.sqrt(1 - e.w * e.w);
            return 1e-4 > t ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = e.x / t,
            this.y = e.y / t,
            this.z = e.z / t),
            this
        },
        setAxisAngleFromRotationMatrix: function(e) {
            var t, i, n, r, a = .01, o = .1, s = e.elements, c = s[0], h = s[4], l = s[8], u = s[1], p = s[5], d = s[9], f = s[2], m = s[6], g = s[10];
            if (Math.abs(h - u) < a && Math.abs(l - f) < a && Math.abs(d - m) < a) {
                if (Math.abs(h + u) < o && Math.abs(l + f) < o && Math.abs(d + m) < o && Math.abs(c + p + g - 3) < o)
                    return this.set(1, 0, 0, 0),
                    this;
                t = Math.PI;
                var v = (c + 1) / 2
                  , y = (p + 1) / 2
                  , x = (g + 1) / 2
                  , b = (h + u) / 4
                  , _ = (l + f) / 4
                  , w = (d + m) / 4;
                return v > y && v > x ? a > v ? (i = 0,
                n = .707106781,
                r = .707106781) : (i = Math.sqrt(v),
                n = b / i,
                r = _ / i) : y > x ? a > y ? (i = .707106781,
                n = 0,
                r = .707106781) : (n = Math.sqrt(y),
                i = b / n,
                r = w / n) : a > x ? (i = .707106781,
                n = .707106781,
                r = 0) : (r = Math.sqrt(x),
                i = _ / r,
                n = w / r),
                this.set(i, n, r, t),
                this
            }
            var M = Math.sqrt((m - d) * (m - d) + (l - f) * (l - f) + (u - h) * (u - h));
            return Math.abs(M) < .001 && (M = 1),
            this.x = (m - d) / M,
            this.y = (l - f) / M,
            this.z = (u - h) / M,
            this.w = Math.acos((c + p + g - 1) / 2),
            this
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this.z = Math.min(this.z, e.z),
            this.w = Math.min(this.w, e.w),
            this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this.z = Math.max(this.z, e.z),
            this.w = Math.max(this.w, e.w),
            this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this.z = Math.max(e.z, Math.min(t.z, this.z)),
            this.w = Math.max(e.w, Math.min(t.w, this.w)),
            this
        },
        clampScalar: function() {
            var e, t;
            return function(i, n) {
                return void 0 === e && (e = new r,
                t = new r),
                e.set(i, i, i, i),
                t.set(n, n, n, n),
                this.clamp(e, t)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(e) {
            return this.multiplyScalar(e / this.length())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this.z += (e.z - this.z) * t,
            this.w += (e.w - this.w) * t,
            this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0),
            this.x = e[t],
            this.y = e[t + 1],
            this.z = e[t + 2],
            this.w = e[t + 3],
            this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []),
            void 0 === t && (t = 0),
            e[t] = this.x,
            e[t + 1] = this.y,
            e[t + 2] = this.z,
            e[t + 3] = this.w,
            e
        },
        fromAttribute: function(e, t, i) {
            return void 0 === i && (i = 0),
            t = t * e.itemSize + i,
            this.x = e.array[t],
            this.y = e.array[t + 1],
            this.z = e.array[t + 2],
            this.w = e.array[t + 3],
            this
        }
    },
    Object.assign(a.prototype, t.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function(e, t) {
            (this.width !== e || this.height !== t) && (this.width = e,
            this.height = t,
            this.dispose()),
            this.viewport.set(0, 0, e, t),
            this.scissor.set(0, 0, e, t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.width = e.width,
            this.height = e.height,
            this.viewport.copy(e.viewport),
            this.texture = e.texture.clone(),
            this.depthBuffer = e.depthBuffer,
            this.stencilBuffer = e.stencilBuffer,
            this.depthTexture = e.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    o.prototype = Object.create(a.prototype),
    o.prototype.constructor = o,
    o.prototype.isWebGLRenderTargetCube = !0,
    s.prototype = {
        constructor: s,
        get x() {
            return this._x
        },
        set x(e) {
            this._x = e,
            this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(e) {
            this._y = e,
            this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(e) {
            this._z = e,
            this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(e) {
            this._w = e,
            this.onChangeCallback()
        },
        set: function(e, t, i, n) {
            return this._x = e,
            this._y = t,
            this._z = i,
            this._w = n,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(e) {
            return this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = e.w,
            this.onChangeCallback(),
            this
        },
        setFromEuler: function(e, t) {
            if ((e && e.isEuler) === !1)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var i = Math.cos(e._x / 2)
              , n = Math.cos(e._y / 2)
              , r = Math.cos(e._z / 2)
              , a = Math.sin(e._x / 2)
              , o = Math.sin(e._y / 2)
              , s = Math.sin(e._z / 2)
              , c = e.order;
            return "XYZ" === c ? (this._x = a * n * r + i * o * s,
            this._y = i * o * r - a * n * s,
            this._z = i * n * s + a * o * r,
            this._w = i * n * r - a * o * s) : "YXZ" === c ? (this._x = a * n * r + i * o * s,
            this._y = i * o * r - a * n * s,
            this._z = i * n * s - a * o * r,
            this._w = i * n * r + a * o * s) : "ZXY" === c ? (this._x = a * n * r - i * o * s,
            this._y = i * o * r + a * n * s,
            this._z = i * n * s + a * o * r,
            this._w = i * n * r - a * o * s) : "ZYX" === c ? (this._x = a * n * r - i * o * s,
            this._y = i * o * r + a * n * s,
            this._z = i * n * s - a * o * r,
            this._w = i * n * r + a * o * s) : "YZX" === c ? (this._x = a * n * r + i * o * s,
            this._y = i * o * r + a * n * s,
            this._z = i * n * s - a * o * r,
            this._w = i * n * r - a * o * s) : "XZY" === c && (this._x = a * n * r - i * o * s,
            this._y = i * o * r - a * n * s,
            this._z = i * n * s + a * o * r,
            this._w = i * n * r + a * o * s),
            t !== !1 && this.onChangeCallback(),
            this
        },
        setFromAxisAngle: function(e, t) {
            var i = t / 2
              , n = Math.sin(i);
            return this._x = e.x * n,
            this._y = e.y * n,
            this._z = e.z * n,
            this._w = Math.cos(i),
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(e) {
            var t, i = e.elements, n = i[0], r = i[4], a = i[8], o = i[1], s = i[5], c = i[9], h = i[2], l = i[6], u = i[10], p = n + s + u;
            return p > 0 ? (t = .5 / Math.sqrt(p + 1),
            this._w = .25 / t,
            this._x = (l - c) * t,
            this._y = (a - h) * t,
            this._z = (o - r) * t) : n > s && n > u ? (t = 2 * Math.sqrt(1 + n - s - u),
            this._w = (l - c) / t,
            this._x = .25 * t,
            this._y = (r + o) / t,
            this._z = (a + h) / t) : s > u ? (t = 2 * Math.sqrt(1 + s - n - u),
            this._w = (a - h) / t,
            this._x = (r + o) / t,
            this._y = .25 * t,
            this._z = (c + l) / t) : (t = 2 * Math.sqrt(1 + u - n - s),
            this._w = (o - r) / t,
            this._x = (a + h) / t,
            this._y = (c + l) / t,
            this._z = .25 * t),
            this.onChangeCallback(),
            this
        },
        setFromUnitVectors: function() {
            var e, t, i = 1e-6;
            return function(n, r) {
                return void 0 === e && (e = new c),
                t = n.dot(r) + 1,
                i > t ? (t = 0,
                Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, r),
                this._x = e.x,
                this._y = e.y,
                this._z = e.z,
                this._w = t,
                this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this.onChangeCallback(),
            this
        },
        dot: function(e) {
            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var e = this.length();
            return 0 === e ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (e = 1 / e,
            this._x = this._x * e,
            this._y = this._y * e,
            this._z = this._z * e,
            this._w = this._w * e),
            this.onChangeCallback(),
            this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
        },
        premultiply: function(e) {
            return this.multiplyQuaternions(e, this)
        },
        multiplyQuaternions: function(e, t) {
            var i = e._x
              , n = e._y
              , r = e._z
              , a = e._w
              , o = t._x
              , s = t._y
              , c = t._z
              , h = t._w;
            return this._x = i * h + a * o + n * c - r * s,
            this._y = n * h + a * s + r * o - i * c,
            this._z = r * h + a * c + i * s - n * o,
            this._w = a * h - i * o - n * s - r * c,
            this.onChangeCallback(),
            this
        },
        slerp: function(e, t) {
            if (0 === t)
                return this;
            if (1 === t)
                return this.copy(e);
            var i = this._x
              , n = this._y
              , r = this._z
              , a = this._w
              , o = a * e._w + i * e._x + n * e._y + r * e._z;
            if (0 > o ? (this._w = -e._w,
            this._x = -e._x,
            this._y = -e._y,
            this._z = -e._z,
            o = -o) : this.copy(e),
            o >= 1)
                return this._w = a,
                this._x = i,
                this._y = n,
                this._z = r,
                this;
            var s = Math.sqrt(1 - o * o);
            if (Math.abs(s) < .001)
                return this._w = .5 * (a + this._w),
                this._x = .5 * (i + this._x),
                this._y = .5 * (n + this._y),
                this._z = .5 * (r + this._z),
                this;
            var c = Math.atan2(s, o)
              , h = Math.sin((1 - t) * c) / s
              , l = Math.sin(t * c) / s;
            return this._w = a * h + this._w * l,
            this._x = i * h + this._x * l,
            this._y = n * h + this._y * l,
            this._z = r * h + this._z * l,
            this.onChangeCallback(),
            this
        },
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0),
            this._x = e[t],
            this._y = e[t + 1],
            this._z = e[t + 2],
            this._w = e[t + 3],
            this.onChangeCallback(),
            this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []),
            void 0 === t && (t = 0),
            e[t] = this._x,
            e[t + 1] = this._y,
            e[t + 2] = this._z,
            e[t + 3] = this._w,
            e
        },
        onChange: function(e) {
            return this.onChangeCallback = e,
            this
        },
        onChangeCallback: function() {}
    },
    Object.assign(s, {
        slerp: function(e, t, i, n) {
            return i.copy(e).slerp(t, n)
        },
        slerpFlat: function(e, t, i, n, r, a, o) {
            var s = i[n + 0]
              , c = i[n + 1]
              , h = i[n + 2]
              , l = i[n + 3]
              , u = r[a + 0]
              , p = r[a + 1]
              , d = r[a + 2]
              , f = r[a + 3];
            if (l !== f || s !== u || c !== p || h !== d) {
                var m = 1 - o
                  , g = s * u + c * p + h * d + l * f
                  , v = g >= 0 ? 1 : -1
                  , y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y)
                      , b = Math.atan2(x, g * v);
                    m = Math.sin(m * b) / x,
                    o = Math.sin(o * b) / x
                }
                var _ = o * v;
                if (s = s * m + u * _,
                c = c * m + p * _,
                h = h * m + d * _,
                l = l * m + f * _,
                m === 1 - o) {
                    var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                    s *= w,
                    c *= w,
                    h *= w,
                    l *= w
                }
            }
            e[t] = s,
            e[t + 1] = c,
            e[t + 2] = h,
            e[t + 3] = l
        }
    }),
    c.prototype = {
        constructor: c,
        isVector3: !0,
        set: function(e, t, i) {
            return this.x = e,
            this.y = t,
            this.z = i,
            this
        },
        setScalar: function(e) {
            return this.x = e,
            this.y = e,
            this.z = e,
            this
        },
        setX: function(e) {
            return this.x = e,
            this
        },
        setY: function(e) {
            return this.y = e,
            this
        },
        setZ: function(e) {
            return this.z = e,
            this
        },
        setComponent: function(e, t) {
            switch (e) {
            case 0:
                this.x = t;
                break;
            case 1:
                this.y = t;
                break;
            case 2:
                this.z = t;
                break;
            default:
                throw new Error("index is out of range: " + e)
            }
            return this
        },
        getComponent: function(e) {
            switch (e) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + e)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(e) {
            return this.x = e.x,
            this.y = e.y,
            this.z = e.z,
            this
        },
        add: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(e, t)) : (this.x += e.x,
            this.y += e.y,
            this.z += e.z,
            this)
        },
        addScalar: function(e) {
            return this.x += e,
            this.y += e,
            this.z += e,
            this
        },
        addVectors: function(e, t) {
            return this.x = e.x + t.x,
            this.y = e.y + t.y,
            this.z = e.z + t.z,
            this
        },
        addScaledVector: function(e, t) {
            return this.x += e.x * t,
            this.y += e.y * t,
            this.z += e.z * t,
            this
        },
        sub: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(e, t)) : (this.x -= e.x,
            this.y -= e.y,
            this.z -= e.z,
            this)
        },
        subScalar: function(e) {
            return this.x -= e,
            this.y -= e,
            this.z -= e,
            this
        },
        subVectors: function(e, t) {
            return this.x = e.x - t.x,
            this.y = e.y - t.y,
            this.z = e.z - t.z,
            this
        },
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(e, t)) : (this.x *= e.x,
            this.y *= e.y,
            this.z *= e.z,
            this)
        },
        multiplyScalar: function(e) {
            return isFinite(e) ? (this.x *= e,
            this.y *= e,
            this.z *= e) : (this.x = 0,
            this.y = 0,
            this.z = 0),
            this
        },
        multiplyVectors: function(e, t) {
            return this.x = e.x * t.x,
            this.y = e.y * t.y,
            this.z = e.z * t.z,
            this
        },
        applyEuler: function() {
            var e;
            return function(t) {
                return (t && t.isEuler) === !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                void 0 === e && (e = new s),
                this.applyQuaternion(e.setFromEuler(t))
            }
        }(),
        applyAxisAngle: function() {
            var e;
            return function(t, i) {
                return void 0 === e && (e = new s),
                this.applyQuaternion(e.setFromAxisAngle(t, i))
            }
        }(),
        applyMatrix3: function(e) {
            var t = this.x
              , i = this.y
              , n = this.z
              , r = e.elements;
            return this.x = r[0] * t + r[3] * i + r[6] * n,
            this.y = r[1] * t + r[4] * i + r[7] * n,
            this.z = r[2] * t + r[5] * i + r[8] * n,
            this
        },
        applyMatrix4: function(e) {
            var t = this.x
              , i = this.y
              , n = this.z
              , r = e.elements;
            return this.x = r[0] * t + r[4] * i + r[8] * n + r[12],
            this.y = r[1] * t + r[5] * i + r[9] * n + r[13],
            this.z = r[2] * t + r[6] * i + r[10] * n + r[14],
            this
        },
        applyProjection: function(e) {
            var t = this.x
              , i = this.y
              , n = this.z
              , r = e.elements
              , a = 1 / (r[3] * t + r[7] * i + r[11] * n + r[15]);
            return this.x = (r[0] * t + r[4] * i + r[8] * n + r[12]) * a,
            this.y = (r[1] * t + r[5] * i + r[9] * n + r[13]) * a,
            this.z = (r[2] * t + r[6] * i + r[10] * n + r[14]) * a,
            this
        },
        applyQuaternion: function(e) {
            var t = this.x
              , i = this.y
              , n = this.z
              , r = e.x
              , a = e.y
              , o = e.z
              , s = e.w
              , c = s * t + a * n - o * i
              , h = s * i + o * t - r * n
              , l = s * n + r * i - a * t
              , u = -r * t - a * i - o * n;
            return this.x = c * s + u * -r + h * -o - l * -a,
            this.y = h * s + u * -a + l * -r - c * -o,
            this.z = l * s + u * -o + c * -a - h * -r,
            this
        },
        project: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
                this.applyProjection(e)
            }
        }(),
        unproject: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
                this.applyProjection(e)
            }
        }(),
        transformDirection: function(e) {
            var t = this.x
              , i = this.y
              , n = this.z
              , r = e.elements;
            return this.x = r[0] * t + r[4] * i + r[8] * n,
            this.y = r[1] * t + r[5] * i + r[9] * n,
            this.z = r[2] * t + r[6] * i + r[10] * n,
            this.normalize()
        },
        divide: function(e) {
            return this.x /= e.x,
            this.y /= e.y,
            this.z /= e.z,
            this
        },
        divideScalar: function(e) {
            return this.multiplyScalar(1 / e)
        },
        min: function(e) {
            return this.x = Math.min(this.x, e.x),
            this.y = Math.min(this.y, e.y),
            this.z = Math.min(this.z, e.z),
            this
        },
        max: function(e) {
            return this.x = Math.max(this.x, e.x),
            this.y = Math.max(this.y, e.y),
            this.z = Math.max(this.z, e.z),
            this
        },
        clamp: function(e, t) {
            return this.x = Math.max(e.x, Math.min(t.x, this.x)),
            this.y = Math.max(e.y, Math.min(t.y, this.y)),
            this.z = Math.max(e.z, Math.min(t.z, this.z)),
            this
        },
        clampScalar: function() {
            var e, t;
            return function(i, n) {
                return void 0 === e && (e = new c,
                t = new c),
                e.set(i, i, i),
                t.set(n, n, n),
                this.clamp(e, t)
            }
        }(),
        clampLength: function(e, t) {
            var i = this.length();
            return this.multiplyScalar(Math.max(e, Math.min(t, i)) / i)
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        },
        dot: function(e) {
            return this.x * e.x + this.y * e.y + this.z * e.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(e) {
            return this.multiplyScalar(e / this.length())
        },
        lerp: function(e, t) {
            return this.x += (e.x - this.x) * t,
            this.y += (e.y - this.y) * t,
            this.z += (e.z - this.z) * t,
            this
        },
        lerpVectors: function(e, t, i) {
            return this.subVectors(t, e).multiplyScalar(i).add(e)
        },
        cross: function(e, t) {
            if (void 0 !== t)
                return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(e, t);
            var i = this.x
              , n = this.y
              , r = this.z;
            return this.x = n * e.z - r * e.y,
            this.y = r * e.x - i * e.z,
            this.z = i * e.y - n * e.x,
            this
        },
        crossVectors: function(e, t) {
            var i = e.x
              , n = e.y
              , r = e.z
              , a = t.x
              , o = t.y
              , s = t.z;
            return this.x = n * s - r * o,
            this.y = r * a - i * s,
            this.z = i * o - n * a,
            this
        },
        projectOnVector: function(e) {
            var t = e.dot(this) / e.lengthSq();
            return this.copy(e).multiplyScalar(t)
        },
        projectOnPlane: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new c),
                e.copy(this).projectOnVector(t),
                this.sub(e)
            }
        }(),
        reflect: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new c),
                this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
            }
        }(),
        angleTo: function(e) {
            var t = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
            return Math.acos(Jo.clamp(t, -1, 1))
        },
        distanceTo: function(e) {
            return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function(e) {
            var t = this.x - e.x
              , i = this.y - e.y
              , n = this.z - e.z;
            return t * t + i * i + n * n
        },
        distanceToManhattan: function(e) {
            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
        },
        setFromSpherical: function(e) {
            var t = Math.sin(e.phi) * e.radius;
            return this.x = t * Math.sin(e.theta),
            this.y = Math.cos(e.phi) * e.radius,
            this.z = t * Math.cos(e.theta),
            this
        },
        setFromMatrixPosition: function(e) {
            return this.setFromMatrixColumn(e, 3)
        },
        setFromMatrixScale: function(e) {
            var t = this.setFromMatrixColumn(e, 0).length()
              , i = this.setFromMatrixColumn(e, 1).length()
              , n = this.setFromMatrixColumn(e, 2).length();
            return this.x = t,
            this.y = i,
            this.z = n,
            this
        },
        setFromMatrixColumn: function(e, t) {
            if ("number" == typeof e) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var i = e;
                e = t,
                t = i
            }
            return this.fromArray(e.elements, 4 * t)
        },
        equals: function(e) {
            return e.x === this.x && e.y === this.y && e.z === this.z
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0),
            this.x = e[t],
            this.y = e[t + 1],
            this.z = e[t + 2],
            this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []),
            void 0 === t && (t = 0),
            e[t] = this.x,
            e[t + 1] = this.y,
            e[t + 2] = this.z,
            e
        },
        fromAttribute: function(e, t, i) {
            return void 0 === i && (i = 0),
            t = t * e.itemSize + i,
            this.x = e.array[t],
            this.y = e.array[t + 1],
            this.z = e.array[t + 2],
            this
        }
    },
    h.prototype = {
        constructor: h,
        isMatrix4: !0,
        set: function(e, t, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = e,
            g[4] = t,
            g[8] = i,
            g[12] = n,
            g[1] = r,
            g[5] = a,
            g[9] = o,
            g[13] = s,
            g[2] = c,
            g[6] = h,
            g[10] = l,
            g[14] = u,
            g[3] = p,
            g[7] = d,
            g[11] = f,
            g[15] = m,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new h).fromArray(this.elements)
        },
        copy: function(e) {
            return this.elements.set(e.elements),
            this
        },
        copyPosition: function(e) {
            var t = this.elements
              , i = e.elements;
            return t[12] = i[12],
            t[13] = i[13],
            t[14] = i[14],
            this
        },
        extractBasis: function(e, t, i) {
            return e.setFromMatrixColumn(this, 0),
            t.setFromMatrixColumn(this, 1),
            i.setFromMatrixColumn(this, 2),
            this
        },
        makeBasis: function(e, t, i) {
            return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1),
            this
        },
        extractRotation: function() {
            var e;
            return function(t) {
                void 0 === e && (e = new c);
                var i = this.elements
                  , n = t.elements
                  , r = 1 / e.setFromMatrixColumn(t, 0).length()
                  , a = 1 / e.setFromMatrixColumn(t, 1).length()
                  , o = 1 / e.setFromMatrixColumn(t, 2).length();
                return i[0] = n[0] * r,
                i[1] = n[1] * r,
                i[2] = n[2] * r,
                i[4] = n[4] * a,
                i[5] = n[5] * a,
                i[6] = n[6] * a,
                i[8] = n[8] * o,
                i[9] = n[9] * o,
                i[10] = n[10] * o,
                this
            }
        }(),
        makeRotationFromEuler: function(e) {
            (e && e.isEuler) === !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var t = this.elements
              , i = e.x
              , n = e.y
              , r = e.z
              , a = Math.cos(i)
              , o = Math.sin(i)
              , s = Math.cos(n)
              , c = Math.sin(n)
              , h = Math.cos(r)
              , l = Math.sin(r);
            if ("XYZ" === e.order) {
                var u = a * h
                  , p = a * l
                  , d = o * h
                  , f = o * l;
                t[0] = s * h,
                t[4] = -s * l,
                t[8] = c,
                t[1] = p + d * c,
                t[5] = u - f * c,
                t[9] = -o * s,
                t[2] = f - u * c,
                t[6] = d + p * c,
                t[10] = a * s
            } else if ("YXZ" === e.order) {
                var m = s * h
                  , g = s * l
                  , v = c * h
                  , y = c * l;
                t[0] = m + y * o,
                t[4] = v * o - g,
                t[8] = a * c,
                t[1] = a * l,
                t[5] = a * h,
                t[9] = -o,
                t[2] = g * o - v,
                t[6] = y + m * o,
                t[10] = a * s
            } else if ("ZXY" === e.order) {
                var m = s * h
                  , g = s * l
                  , v = c * h
                  , y = c * l;
                t[0] = m - y * o,
                t[4] = -a * l,
                t[8] = v + g * o,
                t[1] = g + v * o,
                t[5] = a * h,
                t[9] = y - m * o,
                t[2] = -a * c,
                t[6] = o,
                t[10] = a * s
            } else if ("ZYX" === e.order) {
                var u = a * h
                  , p = a * l
                  , d = o * h
                  , f = o * l;
                t[0] = s * h,
                t[4] = d * c - p,
                t[8] = u * c + f,
                t[1] = s * l,
                t[5] = f * c + u,
                t[9] = p * c - d,
                t[2] = -c,
                t[6] = o * s,
                t[10] = a * s
            } else if ("YZX" === e.order) {
                var x = a * s
                  , b = a * c
                  , _ = o * s
                  , w = o * c;
                t[0] = s * h,
                t[4] = w - x * l,
                t[8] = _ * l + b,
                t[1] = l,
                t[5] = a * h,
                t[9] = -o * h,
                t[2] = -c * h,
                t[6] = b * l + _,
                t[10] = x - w * l
            } else if ("XZY" === e.order) {
                var x = a * s
                  , b = a * c
                  , _ = o * s
                  , w = o * c;
                t[0] = s * h,
                t[4] = -l,
                t[8] = c * h,
                t[1] = x * l + w,
                t[5] = a * h,
                t[9] = b * l - _,
                t[2] = _ * l - b,
                t[6] = o * h,
                t[10] = w * l + x
            }
            return t[3] = 0,
            t[7] = 0,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
        },
        makeRotationFromQuaternion: function(e) {
            var t = this.elements
              , i = e.x
              , n = e.y
              , r = e.z
              , a = e.w
              , o = i + i
              , s = n + n
              , c = r + r
              , h = i * o
              , l = i * s
              , u = i * c
              , p = n * s
              , d = n * c
              , f = r * c
              , m = a * o
              , g = a * s
              , v = a * c;
            return t[0] = 1 - (p + f),
            t[4] = l - v,
            t[8] = u + g,
            t[1] = l + v,
            t[5] = 1 - (h + f),
            t[9] = d - m,
            t[2] = u - g,
            t[6] = d + m,
            t[10] = 1 - (h + p),
            t[3] = 0,
            t[7] = 0,
            t[11] = 0,
            t[12] = 0,
            t[13] = 0,
            t[14] = 0,
            t[15] = 1,
            this
        },
        lookAt: function() {
            var e, t, i;
            return function(n, r, a) {
                void 0 === e && (e = new c,
                t = new c,
                i = new c);
                var o = this.elements;
                return i.subVectors(n, r).normalize(),
                0 === i.lengthSq() && (i.z = 1),
                e.crossVectors(a, i).normalize(),
                0 === e.lengthSq() && (i.z += 1e-4,
                e.crossVectors(a, i).normalize()),
                t.crossVectors(i, e),
                o[0] = e.x,
                o[4] = t.x,
                o[8] = i.x,
                o[1] = e.y,
                o[5] = t.y,
                o[9] = i.y,
                o[2] = e.z,
                o[6] = t.z,
                o[10] = i.z,
                this
            }
        }(),
        multiply: function(e, t) {
            return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
        },
        premultiply: function(e) {
            return this.multiplyMatrices(e, this)
        },
        multiplyMatrices: function(e, t) {
            var i = e.elements
              , n = t.elements
              , r = this.elements
              , a = i[0]
              , o = i[4]
              , s = i[8]
              , c = i[12]
              , h = i[1]
              , l = i[5]
              , u = i[9]
              , p = i[13]
              , d = i[2]
              , f = i[6]
              , m = i[10]
              , g = i[14]
              , v = i[3]
              , y = i[7]
              , x = i[11]
              , b = i[15]
              , _ = n[0]
              , w = n[4]
              , M = n[8]
              , E = n[12]
              , T = n[1]
              , S = n[5]
              , A = n[9]
              , L = n[13]
              , R = n[2]
              , P = n[6]
              , C = n[10]
              , I = n[14]
              , U = n[3]
              , D = n[7]
              , N = n[11]
              , O = n[15];
            return r[0] = a * _ + o * T + s * R + c * U,
            r[4] = a * w + o * S + s * P + c * D,
            r[8] = a * M + o * A + s * C + c * N,
            r[12] = a * E + o * L + s * I + c * O,
            r[1] = h * _ + l * T + u * R + p * U,
            r[5] = h * w + l * S + u * P + p * D,
            r[9] = h * M + l * A + u * C + p * N,
            r[13] = h * E + l * L + u * I + p * O,
            r[2] = d * _ + f * T + m * R + g * U,
            r[6] = d * w + f * S + m * P + g * D,
            r[10] = d * M + f * A + m * C + g * N,
            r[14] = d * E + f * L + m * I + g * O,
            r[3] = v * _ + y * T + x * R + b * U,
            r[7] = v * w + y * S + x * P + b * D,
            r[11] = v * M + y * A + x * C + b * N,
            r[15] = v * E + y * L + x * I + b * O,
            this
        },
        multiplyToArray: function(e, t, i) {
            var n = this.elements;
            return this.multiplyMatrices(e, t),
            i[0] = n[0],
            i[1] = n[1],
            i[2] = n[2],
            i[3] = n[3],
            i[4] = n[4],
            i[5] = n[5],
            i[6] = n[6],
            i[7] = n[7],
            i[8] = n[8],
            i[9] = n[9],
            i[10] = n[10],
            i[11] = n[11],
            i[12] = n[12],
            i[13] = n[13],
            i[14] = n[14],
            i[15] = n[15],
            this
        },
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e,
            t[4] *= e,
            t[8] *= e,
            t[12] *= e,
            t[1] *= e,
            t[5] *= e,
            t[9] *= e,
            t[13] *= e,
            t[2] *= e,
            t[6] *= e,
            t[10] *= e,
            t[14] *= e,
            t[3] *= e,
            t[7] *= e,
            t[11] *= e,
            t[15] *= e,
            this
        },
        applyToVector3Array: function() {
            var e;
            return function(t, i, n) {
                void 0 === e && (e = new c),
                void 0 === i && (i = 0),
                void 0 === n && (n = t.length);
                for (var r = 0, a = i; n > r; r += 3,
                a += 3)
                    e.fromArray(t, a),
                    e.applyMatrix4(this),
                    e.toArray(t, a);
                return t
            }
        }(),
        applyToBuffer: function() {
            var e;
            return function(t, i, n) {
                void 0 === e && (e = new c),
                void 0 === i && (i = 0),
                void 0 === n && (n = t.length / t.itemSize);
                for (var r = 0, a = i; n > r; r++,
                a++)
                    e.x = t.getX(a),
                    e.y = t.getY(a),
                    e.z = t.getZ(a),
                    e.applyMatrix4(this),
                    t.setXYZ(a, e.x, e.y, e.z);
                return t
            }
        }(),
        determinant: function() {
            var e = this.elements
              , t = e[0]
              , i = e[4]
              , n = e[8]
              , r = e[12]
              , a = e[1]
              , o = e[5]
              , s = e[9]
              , c = e[13]
              , h = e[2]
              , l = e[6]
              , u = e[10]
              , p = e[14]
              , d = e[3]
              , f = e[7]
              , m = e[11]
              , g = e[15];
            return d * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + f * (+t * s * p - t * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + m * (+t * c * l - t * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + g * (-n * o * h - t * s * l + t * o * u + n * a * l - i * a * u + i * s * h)
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1],
            t[1] = t[4],
            t[4] = e,
            e = t[2],
            t[2] = t[8],
            t[8] = e,
            e = t[6],
            t[6] = t[9],
            t[9] = e,
            e = t[3],
            t[3] = t[12],
            t[12] = e,
            e = t[7],
            t[7] = t[13],
            t[13] = e,
            e = t[11],
            t[11] = t[14],
            t[14] = e,
            this
        },
        setPosition: function(e) {
            var t = this.elements;
            return t[12] = e.x,
            t[13] = e.y,
            t[14] = e.z,
            this
        },
        getInverse: function(e, t) {
            var i = this.elements
              , n = e.elements
              , r = n[0]
              , a = n[1]
              , o = n[2]
              , s = n[3]
              , c = n[4]
              , h = n[5]
              , l = n[6]
              , u = n[7]
              , p = n[8]
              , d = n[9]
              , f = n[10]
              , m = n[11]
              , g = n[12]
              , v = n[13]
              , y = n[14]
              , x = n[15]
              , b = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x
              , _ = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x
              , w = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x
              , M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y
              , E = r * b + a * _ + o * w + s * M;
            if (0 === E) {
                var T = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                if (t === !0)
                    throw new Error(T);
                return console.warn(T),
                this.identity()
            }
            var S = 1 / E;
            return i[0] = b * S,
            i[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * S,
            i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * S,
            i[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * S,
            i[4] = _ * S,
            i[5] = (p * y * s - g * f * s + g * o * m - r * y * m - p * o * x + r * f * x) * S,
            i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * S,
            i[7] = (c * f * s - p * l * s + p * o * u - r * f * u - c * o * m + r * l * m) * S,
            i[8] = w * S,
            i[9] = (g * d * s - p * v * s - g * a * m + r * v * m + p * a * x - r * d * x) * S,
            i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * S,
            i[11] = (p * h * s - c * d * s - p * a * u + r * d * u + c * a * m - r * h * m) * S,
            i[12] = M * S,
            i[13] = (p * v * o - g * d * o + g * a * f - r * v * f - p * a * y + r * d * y) * S,
            i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * S,
            i[15] = (c * d * o - p * h * o + p * a * l - r * d * l - c * a * f + r * h * f) * S,
            this
        },
        scale: function(e) {
            var t = this.elements
              , i = e.x
              , n = e.y
              , r = e.z;
            return t[0] *= i,
            t[4] *= n,
            t[8] *= r,
            t[1] *= i,
            t[5] *= n,
            t[9] *= r,
            t[2] *= i,
            t[6] *= n,
            t[10] *= r,
            t[3] *= i,
            t[7] *= n,
            t[11] *= r,
            this
        },
        getMaxScaleOnAxis: function() {
            var e = this.elements
              , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
              , i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
              , n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
            return Math.sqrt(Math.max(t, i, n))
        },
        makeTranslation: function(e, t, i) {
            return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
            this
        },
        makeRotationX: function(e) {
            var t = Math.cos(e)
              , i = Math.sin(e);
            return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1),
            this
        },
        makeRotationY: function(e) {
            var t = Math.cos(e)
              , i = Math.sin(e);
            return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1),
            this
        },
        makeRotationZ: function(e) {
            var t = Math.cos(e)
              , i = Math.sin(e);
            return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        makeRotationAxis: function(e, t) {
            var i = Math.cos(t)
              , n = Math.sin(t)
              , r = 1 - i
              , a = e.x
              , o = e.y
              , s = e.z
              , c = r * a
              , h = r * o;
            return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1),
            this
        },
        makeScale: function(e, t, i) {
            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
            this
        },
        makeShear: function(e, t, i) {
            return this.set(1, t, i, 0, e, 1, i, 0, e, t, 1, 0, 0, 0, 0, 1),
            this
        },
        compose: function(e, t, i) {
            return this.makeRotationFromQuaternion(t),
            this.scale(i),
            this.setPosition(e),
            this
        },
        decompose: function() {
            var e, t;
            return function(i, n, r) {
                void 0 === e && (e = new c,
                t = new h);
                var a = this.elements
                  , o = e.set(a[0], a[1], a[2]).length()
                  , s = e.set(a[4], a[5], a[6]).length()
                  , l = e.set(a[8], a[9], a[10]).length()
                  , u = this.determinant();
                0 > u && (o = -o),
                i.x = a[12],
                i.y = a[13],
                i.z = a[14],
                t.elements.set(this.elements);
                var p = 1 / o
                  , d = 1 / s
                  , f = 1 / l;
                return t.elements[0] *= p,
                t.elements[1] *= p,
                t.elements[2] *= p,
                t.elements[4] *= d,
                t.elements[5] *= d,
                t.elements[6] *= d,
                t.elements[8] *= f,
                t.elements[9] *= f,
                t.elements[10] *= f,
                n.setFromRotationMatrix(t),
                r.x = o,
                r.y = s,
                r.z = l,
                this
            }
        }(),
        makeFrustum: function(e, t, i, n, r, a) {
            var o = this.elements
              , s = 2 * r / (t - e)
              , c = 2 * r / (n - i)
              , h = (t + e) / (t - e)
              , l = (n + i) / (n - i)
              , u = -(a + r) / (a - r)
              , p = -2 * a * r / (a - r);
            return o[0] = s,
            o[4] = 0,
            o[8] = h,
            o[12] = 0,
            o[1] = 0,
            o[5] = c,
            o[9] = l,
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = u,
            o[14] = p,
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        },
        makePerspective: function(e, t, i, n) {
            var r = i * Math.tan(Jo.DEG2RAD * e * .5)
              , a = -r
              , o = a * t
              , s = r * t;
            return this.makeFrustum(o, s, a, r, i, n)
        },
        makeOrthographic: function(e, t, i, n, r, a) {
            var o = this.elements
              , s = 1 / (t - e)
              , c = 1 / (i - n)
              , h = 1 / (a - r)
              , l = (t + e) * s
              , u = (i + n) * c
              , p = (a + r) * h;
            return o[0] = 2 * s,
            o[4] = 0,
            o[8] = 0,
            o[12] = -l,
            o[1] = 0,
            o[5] = 2 * c,
            o[9] = 0,
            o[13] = -u,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * h,
            o[14] = -p,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        },
        equals: function(e) {
            for (var t = this.elements, i = e.elements, n = 0; 16 > n; n++)
                if (t[n] !== i[n])
                    return !1;
            return !0
        },
        fromArray: function(e, t) {
            void 0 === t && (t = 0);
            for (var i = 0; 16 > i; i++)
                this.elements[i] = e[i + t];
            return this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []),
            void 0 === t && (t = 0);
            var i = this.elements;
            return e[t] = i[0],
            e[t + 1] = i[1],
            e[t + 2] = i[2],
            e[t + 3] = i[3],
            e[t + 4] = i[4],
            e[t + 5] = i[5],
            e[t + 6] = i[6],
            e[t + 7] = i[7],
            e[t + 8] = i[8],
            e[t + 9] = i[9],
            e[t + 10] = i[10],
            e[t + 11] = i[11],
            e[t + 12] = i[12],
            e[t + 13] = i[13],
            e[t + 14] = i[14],
            e[t + 15] = i[15],
            e
        }
    },
    l.prototype = Object.create(n.prototype),
    l.prototype.constructor = l,
    l.prototype.isCubeTexture = !0,
    Object.defineProperty(l.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(e) {
            this.image = e
        }
    });
    var Ko = new n
      , $o = new l
      , es = []
      , ts = [];
    H.prototype.setValue = function(e, t) {
        for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
            var a = i[n];
            a.setValue(e, t[a.id])
        }
    }
    ;
    var is = /([\w\d_]+)(\])?(\[|\.)?/g;
    j.prototype.setValue = function(e, t, i) {
        var n = this.map[t];
        void 0 !== n && n.setValue(e, i, this.renderer)
    }
    ,
    j.prototype.set = function(e, t, i) {
        var n = this.map[i];
        void 0 !== n && n.setValue(e, t[i], this.renderer)
    }
    ,
    j.prototype.setOptional = function(e, t, i) {
        var n = t[i];
        void 0 !== n && this.setValue(e, i, n)
    }
    ,
    j.upload = function(e, t, i, n) {
        for (var r = 0, a = t.length; r !== a; ++r) {
            var o = t[r]
              , s = i[o.id];
            s.needsUpdate !== !1 && o.setValue(e, s.value, n)
        }
    }
    ,
    j.seqWithValue = function(e, t) {
        for (var i = [], n = 0, r = e.length; n !== r; ++n) {
            var a = e[n];
            a.id in t && i.push(a)
        }
        return i
    }
    ;
    var ns = "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n"
      , rs = "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif\n"
      , as = "#ifdef ALPHATEST\n	if ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n"
      , os = "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n	#endif\n#endif\n"
      , ss = "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif"
      , cs = "\nvec3 transformed = vec3( position );\n"
      , hs = "\nvec3 objectNormal = vec3( normal );\n"
      , ls = "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n		if( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n			float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n			float maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n			return distanceFalloff * maxDistanceCutoffFactor;\n#else\n			return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n		}\n		return 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	return 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n	float D = D_GGX( alpha, dotNH );\n	return F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n	const float LUT_SIZE  = 64.0;\n	const float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n	const float LUT_BIAS  = 0.5/LUT_SIZE;\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 P = geometry.position;\n	float theta = acos( dot( N, V ) );\n	vec2 uv = vec2(\n		sqrt( saturate( roughness ) ),\n		saturate( theta / ( 0.5 * PI ) ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n	int config = 0;\n	if ( L[0].z > 0.0 ) config += 1;\n	if ( L[1].z > 0.0 ) config += 2;\n	if ( L[2].z > 0.0 ) config += 4;\n	if ( L[3].z > 0.0 ) config += 8;\n	n = 0;\n	if ( config == 0 ) {\n	} else if ( config == 1 ) {\n		n = 3;\n		L[1] = -L[1].z * L[0] + L[0].z * L[1];\n		L[2] = -L[3].z * L[0] + L[0].z * L[3];\n	} else if ( config == 2 ) {\n		n = 3;\n		L[0] = -L[0].z * L[1] + L[1].z * L[0];\n		L[2] = -L[2].z * L[1] + L[1].z * L[2];\n	} else if ( config == 3 ) {\n		n = 4;\n		L[2] = -L[2].z * L[1] + L[1].z * L[2];\n		L[3] = -L[3].z * L[0] + L[0].z * L[3];\n	} else if ( config == 4 ) {\n		n = 3;\n		L[0] = -L[3].z * L[2] + L[2].z * L[3];\n		L[1] = -L[1].z * L[2] + L[2].z * L[1];\n	} else if ( config == 5 ) {\n		n = 0;\n	} else if ( config == 6 ) {\n		n = 4;\n		L[0] = -L[0].z * L[1] + L[1].z * L[0];\n		L[3] = -L[3].z * L[2] + L[2].z * L[3];\n	} else if ( config == 7 ) {\n		n = 5;\n		L[4] = -L[3].z * L[0] + L[0].z * L[3];\n		L[3] = -L[3].z * L[2] + L[2].z * L[3];\n	} else if ( config == 8 ) {\n		n = 3;\n		L[0] = -L[0].z * L[3] + L[3].z * L[0];\n		L[1] = -L[2].z * L[3] + L[3].z * L[2];\n		L[2] =  L[3];\n	} else if ( config == 9 ) {\n		n = 4;\n		L[1] = -L[1].z * L[0] + L[0].z * L[1];\n		L[2] = -L[2].z * L[3] + L[3].z * L[2];\n	} else if ( config == 10 ) {\n		n = 0;\n	} else if ( config == 11 ) {\n		n = 5;\n		L[4] = L[3];\n		L[3] = -L[2].z * L[3] + L[3].z * L[2];\n		L[2] = -L[2].z * L[1] + L[1].z * L[2];\n	} else if ( config == 12 ) {\n		n = 4;\n		L[1] = -L[1].z * L[2] + L[2].z * L[1];\n		L[0] = -L[0].z * L[3] + L[3].z * L[0];\n	} else if ( config == 13 ) {\n		n = 5;\n		L[4] = L[3];\n		L[3] = L[2];\n		L[2] = -L[1].z * L[2] + L[2].z * L[1];\n		L[1] = -L[1].z * L[0] + L[0].z * L[1];\n	} else if ( config == 14 ) {\n		n = 5;\n		L[4] = -L[0].z * L[3] + L[3].z * L[0];\n		L[0] = -L[0].z * L[1] + L[1].z * L[0];\n	} else if ( config == 15 ) {\n		n = 4;\n	}\n	if ( n == 3 )\n		L[3] = L[0];\n	if ( n == 4 )\n		L[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n	float cosTheta = dot( v1, v2 );\n	float theta = acos( cosTheta );\n	float res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n	return res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n	rectPoints[0] = pos - halfWidth - halfHeight;\n	rectPoints[1] = pos + halfWidth - halfHeight;\n	rectPoints[2] = pos + halfWidth + halfHeight;\n	rectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n	vec3 N = geometry.normal;\n	vec3 V = geometry.viewDir;\n	vec3 P = geometry.position;\n	vec3 T1, T2;\n	T1 = normalize(V - N * dot( V, N ));\n	T2 = - cross( N, T1 );\n	mat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n	vec3 clippedRect[5];\n	clippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n	clippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n	clippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n	clippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n	int n;\n	clipQuadToHorizon(clippedRect, n);\n	if ( n == 0 )\n		return vec3( 0, 0, 0 );\n	clippedRect[0] = normalize( clippedRect[0] );\n	clippedRect[1] = normalize( clippedRect[1] );\n	clippedRect[2] = normalize( clippedRect[2] );\n	clippedRect[3] = normalize( clippedRect[3] );\n	clippedRect[4] = normalize( clippedRect[4] );\n	float sum = 0.0;\n	sum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n	sum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n	sum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n	if (n >= 4)\n		sum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n	if (n == 5)\n		sum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n	sum = max( 0.0, sum );\n	vec3 Lo_i = vec3( sum, sum, sum );\n	return Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n		const in GeometricContext geometry,\n		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n		const in float roughness,\n		const in sampler2D ltcMat, const in sampler2D ltcMag ) {\n	vec3 rectPoints[4];\n	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n	vec2 uv = ltcTextureCoords( geometry, roughness );\n	vec4 brdfLtcApproxParams, t;\n	brdfLtcApproxParams = texture2D( ltcMat, uv );\n	t = texture2D( ltcMat, uv );\n	float brdfLtcScalar = texture2D( ltcMag, uv ).a;\n	mat3 brdfLtcApproxMat = mat3(\n		vec3(   1,   0, t.y ),\n		vec3(   0, t.z,   0 ),\n		vec3( t.w,   0, t.x )\n	);\n	vec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n	specularReflectance *= brdfLtcScalar;\n	return specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n		const in GeometricContext geometry,\n		const in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n	vec3 rectPoints[4];\n	initRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n	mat3 diffuseBrdfMat = mat3(1);\n	vec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n	return diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n	float dotNH = saturate( dot( geometry.normal, halfDir ) );\n	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n	vec3 F = F_Schlick( specularColor, dotLH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n"
      , us = "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 );\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif\n"
      , ps = "#if NUM_CLIPPING_PLANES > 0\n	for ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n		vec4 plane = clippingPlanes[ i ];\n		if ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n	}\n		\n	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n		bool clipped = true;\n		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n			vec4 plane = clippingPlanes[ i ];\n			clipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n		}\n		if ( clipped ) discard;\n	\n	#endif\n#endif\n"
      , ds = "#if NUM_CLIPPING_PLANES > 0\n	#if ! defined( PHYSICAL ) && ! defined( PHONG )\n		varying vec3 vViewPosition;\n	#endif\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n"
      , fs = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	varying vec3 vViewPosition;\n#endif\n"
      , ms = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n	vViewPosition = - mvPosition.xyz;\n#endif\n"
      , gs = "#ifdef USE_COLOR\n	diffuseColor.rgb *= vColor;\n#endif"
      , vs = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif\n"
      , ys = "#ifdef USE_COLOR\n	varying vec3 vColor;\n#endif"
      , xs = "#ifdef USE_COLOR\n	vColor.xyz = color.xyz;\n#endif"
      , bs = "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract(sin(sn) * c);\n}\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\nstruct GeometricContext {\n	vec3 position;\n	vec3 normal;\n	vec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	float distance = dot( planeNormal, point - pointOnPlane );\n	return - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n	mat3 tmp;\n	tmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n	tmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n	tmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n	return tmp;\n}\n"
      , _s = "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n	vec3 absDirection = abs(direction);\n	int face = -1;\n	if( absDirection.x > absDirection.z ) {\n		if(absDirection.x > absDirection.y )\n			face = direction.x > 0.0 ? 0 : 3;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	else {\n		if(absDirection.z > absDirection.y )\n			face = direction.z > 0.0 ? 2 : 5;\n		else\n			face = direction.y > 0.0 ? 1 : 4;\n	}\n	return face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n	float scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n	float dxRoughness = dFdx(roughness);\n	float dyRoughness = dFdy(roughness);\n	vec3 dx = dFdx( vec * scale * dxRoughness );\n	vec3 dy = dFdy( vec * scale * dyRoughness );\n	float d = max( dot( dx, dx ), dot( dy, dy ) );\n	d = clamp(d, 1.0, cubeUV_rangeClamp);\n	float mipLevel = 0.5 * log2(d);\n	return vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n	mipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n	float a = 16.0 * cubeUV_rcpTextureSize;\n	vec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n	vec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n	float powScale = exp2_packed.x * exp2_packed.y;\n	float scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n	float mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n	bool bRes = mipLevel == 0.0;\n	scale =  bRes && (scale < a) ? a : scale;\n	vec3 r;\n	vec2 offset;\n	int face = getFaceFromDirection(direction);\n	float rcpPowScale = 1.0 / powScale;\n	if( face == 0) {\n		r = vec3(direction.x, -direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 1) {\n		r = vec3(direction.y, direction.x, direction.z);\n		offset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 2) {\n		r = vec3(direction.z, direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n	}\n	else if( face == 3) {\n		r = vec3(direction.x, direction.z, direction.y);\n		offset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else if( face == 4) {\n		r = vec3(direction.y, direction.x, -direction.z);\n		offset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	else {\n		r = vec3(direction.z, -direction.x, direction.y);\n		offset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n		offset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n	}\n	r = normalize(r);\n	float texelOffset = 0.5 * cubeUV_rcpTextureSize;\n	vec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n	vec2 base = offset + vec2( texelOffset );\n	return base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n	float roughnessVal = roughness* cubeUV_maxLods3;\n	float r1 = floor(roughnessVal);\n	float r2 = r1 + 1.0;\n	float t = fract(roughnessVal);\n	vec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n	float s = mipInfo.y;\n	float level0 = mipInfo.x;\n	float level1 = level0 + 1.0;\n	level1 = level1 > 5.0 ? 5.0 : level1;\n	level0 += min( floor( s + 0.5 ), 5.0 );\n	vec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n	vec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n	vec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n	vec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n	vec4 result = mix(color10, color20, t);\n	return vec4(result.rgb, 1.0);\n}\n#endif\n"
      , ws = "#ifdef FLIP_SIDED\n	objectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n"
      , Ms = "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif\n"
      , Es = "#ifdef USE_DISPLACEMENTMAP\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n"
      , Ts = "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n"
      , Ss = "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif\n"
      , As = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n"
      , Ls = "\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n"
      , Rs = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	envColor = envMapTexelToLinear( envColor );\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif\n"
      , Ps = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n	uniform float reflectivity;\n	uniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n	#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n		varying vec3 vWorldPosition;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif\n"
      , Cs = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif\n"
      , Is = "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif\n"
      , Us = "#ifdef USE_FOG\n	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	#ifdef FOG_EXP2\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n"
      , Ds = "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif"
      , Ns = "#ifdef TOON\n	uniform sampler2D gradientMap;\n	vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n		float dotNL = dot( normal, lightDirection );\n		vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n		#ifdef USE_GRADIENTMAP\n			return texture2D( gradientMap, coord ).rgb;\n		#else\n			return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n		#endif\n	}\n#endif\n"
      , Os = "#ifdef USE_LIGHTMAP\n	reflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n"
      , Fs = "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif"
      , zs = "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n	vLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n	}\n#endif\n#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n		dotNL = dot( geometry.normal, directLight.direction );\n		directLightColor_Diffuse = PI * directLight.color;\n		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n		#ifdef DOUBLE_SIDED\n			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n		#endif\n	}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n		vLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		#ifdef DOUBLE_SIDED\n			vLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n		#endif\n	}\n#endif\n"
      , Bs = "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	return irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		directLight.color = directionalLight.color;\n		directLight.direction = directionalLight.direction;\n		directLight.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n		vec3 lVector = pointLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		directLight.color = pointLight.color;\n		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n		directLight.visible = ( directLight.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n		int shadow;\n		float shadowBias;\n		float shadowRadius;\n		vec2 shadowMapSize;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n		vec3 lVector = spotLight.position - geometry.position;\n		directLight.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		float angleCos = dot( directLight.direction, spotLight.direction );\n		if ( angleCos > spotLight.coneCos ) {\n			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n			directLight.color = spotLight.color;\n			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n			directLight.visible = true;\n		} else {\n			directLight.color = vec3( 0.0 );\n			directLight.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltcMat;	uniform sampler2D ltcMag;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n		float dotNL = dot( geometry.normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			irradiance *= PI;\n		#endif\n		return irradiance;\n	}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n		#include <normal_flip>\n		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n			vec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n		#else\n			vec4 envMapColor = vec4( 0.0 );\n		#endif\n		return PI * envMapColor.rgb * envMapIntensity;\n	}\n	float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		float maxMIPLevelScalar = float( maxMIPLevel );\n		float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n	}\n	vec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n		#else\n			vec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n		#endif\n		#include <normal_flip>\n		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n		float specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n		#ifdef ENVMAP_TYPE_CUBE\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n			#else\n				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_CUBE_UV )\n			vec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n			vec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n		#elif defined( ENVMAP_TYPE_EQUIREC )\n			vec2 sampleUV;\n			sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n			sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#elif defined( ENVMAP_TYPE_SPHERE )\n			vec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n			#ifdef TEXTURE_LOD_EXT\n				vec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#else\n				vec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n			#endif\n			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n		#endif\n		return envMapColor.rgb * envMapIntensity;\n	}\n#endif\n"
      , Gs = "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n"
      , Hs = "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n	vec3	diffuseColor;\n	vec3	specularColor;\n	float	specularShininess;\n	float	specularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n    void RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 matDiffColor = material.diffuseColor;\n        vec3 matSpecColor = material.specularColor;\n        vec3 lightColor   = rectAreaLight.color;\n        float roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n        vec3 spec = Rect_Area_Light_Specular_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n                roughness,\n                ltcMat, ltcMag );\n        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n        reflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n    }\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifdef TOON\n		vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n	#else\n		float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n		vec3 irradiance = dotNL * directLight.color;\n	#endif\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_Direct_RectArea		RE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )	(0)\n"
      , Vs = "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n	material.clearCoat = saturate( clearCoat );	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n"
      , ks = "struct PhysicalMaterial {\n	vec3	diffuseColor;\n	float	specularRoughness;\n	vec3	specularColor;\n	#ifndef STANDARD\n		float clearCoat;\n		float clearCoatRoughness;\n	#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n    void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 matDiffColor = material.diffuseColor;\n        vec3 matSpecColor = material.specularColor;\n        vec3 lightColor   = rectAreaLight.color;\n        float roughness = material.specularRoughness;\n        vec3 spec = Rect_Area_Light_Specular_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n                roughness,\n                ltcMat, ltcMag );\n        vec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n                geometry,\n                rectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n        reflectedLight.directSpecular += lightColor * matSpecColor * spec;\n        reflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n    }\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifndef PHYSICALLY_CORRECT_LIGHTS\n		irradiance *= PI;\n	#endif\n	#ifndef STANDARD\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n	reflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n	#ifndef STANDARD\n		reflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	#ifndef STANDARD\n		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n		float dotNL = dotNV;\n		float clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n	#else\n		float clearCoatDHR = 0.0;\n	#endif\n	reflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n	#ifndef STANDARD\n		reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n	#endif\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n"
      , js = "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointDirectLightIrradiance( pointLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotDirectLightIrradiance( spotLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n		#ifdef USE_SHADOWMAP\n		directLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometry, material, reflectedLight );\n	}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n	}\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#ifdef USE_LIGHTMAP\n		vec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n		#ifndef PHYSICALLY_CORRECT_LIGHTS\n			lightMapIrradiance *= PI;\n		#endif\n		irradiance += lightMapIrradiance;\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n		}\n	#endif\n	#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n	 	irradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n	#endif\n	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	vec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n	#ifndef STANDARD\n		vec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n	#else\n		vec3 clearCoatRadiance = vec3( 0.0 );\n	#endif\n		\n	RE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n"
      , Ws = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif"
      , Xs = "#ifdef USE_LOGDEPTHBUF\n	uniform float logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n#endif\n"
      , Ys = "#ifdef USE_LOGDEPTHBUF\n	#ifdef USE_LOGDEPTHBUF_EXT\n		varying float vFragDepth;\n	#endif\n	uniform float logDepthBufFC;\n#endif"
      , qs = "#ifdef USE_LOGDEPTHBUF\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n	#ifdef USE_LOGDEPTHBUF_EXT\n		vFragDepth = 1.0 + gl_Position.w;\n	#else\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n	#endif\n#endif\n"
      , Zs = "#ifdef USE_MAP\n	vec4 texelColor = texture2D( map, vUv );\n	texelColor = mapTexelToLinear( texelColor );\n	diffuseColor *= texelColor;\n#endif\n"
      , Js = "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n"
      , Qs = "#ifdef USE_MAP\n	vec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n	diffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n"
      , Ks = "#ifdef USE_MAP\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n#endif\n"
      , $s = "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n	metalnessFactor *= texelMetalness.r;\n#endif\n"
      , ec = "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif"
      , tc = "#ifdef USE_MORPHNORMALS\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n"
      , ic = "#ifdef USE_MORPHTARGETS\n	#ifndef USE_MORPHNORMALS\n	uniform float morphTargetInfluences[ 8 ];\n	#else\n	uniform float morphTargetInfluences[ 4 ];\n	#endif\n#endif"
      , nc = "#ifdef USE_MORPHTARGETS\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n	#ifndef USE_MORPHNORMALS\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n	#endif\n#endif\n"
      , rc = "#ifdef DOUBLE_SIDED\n	float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n	float flipNormal = 1.0;\n#endif\n"
      , ac = "#ifdef FLAT_SHADED\n	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n"
      , oc = "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n	}\n#endif\n"
      , sc = "vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n	vec4 r = vec4( fract( v * PackFactors ), v );\n	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n"
      , cc = "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif\n"
      , hc = "#ifdef USE_SKINNING\n	vec4 mvPosition = modelViewMatrix * skinned;\n#else\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n"
      , lc = "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n	roughnessFactor *= texelRoughness.r;\n#endif\n"
      , uc = "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif"
      , pc = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n    #if NUM_RECT_AREA_LIGHTS > 0\n    #endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	float texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n		const vec2 offset = vec2( 0.0, 1.0 );\n		vec2 texelSize = vec2( 1.0 ) / size;\n		vec2 centroidUV = floor( uv * size + 0.5 ) / size;\n		float lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n		float lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n		float rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n		float rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n		vec2 f = fract( uv * size + 0.5 );\n		float a = mix( lb, lt, f.y );\n		float b = mix( rb, rt, f.y );\n		float c = mix( a, b, f.x );\n		return c;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n		bool frustumTest = all( frustumTestVec );\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			return (\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return 1.0;\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		float dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n			return (\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n			) * ( 1.0 / 9.0 );\n		#else\n			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n		#endif\n	}\n#endif\n"
      , dc = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n	#endif\n    #if NUM_RECT_AREA_LIGHTS > 0\n    #endif\n#endif\n"
      , fc = "#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n	}\n	#endif\n    #if NUM_RECT_AREA_LIGHTS > 0\n    #endif\n#endif\n"
      , mc = "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHTS > 0\n	DirectionalLight directionalLight;\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		shadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_SPOT_LIGHTS > 0\n	SpotLight spotLight;\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		shadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_POINT_LIGHTS > 0\n	PointLight pointLight;\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		shadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n	}\n	#endif\n	#if NUM_RECT_AREA_LIGHTS > 0\n	#endif\n	#endif\n	return shadow;\n}\n"
      , gc = "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif"
      , vc = "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	#ifdef BONE_TEXTURE\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n		mat4 getBoneMatrix( const in float i ) {\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n			y = dy * ( y + 0.5 );\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n			mat4 bone = mat4( v1, v2, v3, v4 );\n			return bone;\n		}\n	#else\n		uniform mat4 boneMatrices[ MAX_BONES ];\n		mat4 getBoneMatrix( const in float i ) {\n			mat4 bone = boneMatrices[ int(i) ];\n			return bone;\n		}\n	#endif\n#endif\n"
      , yc = "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n#endif\n"
      , xc = "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n"
      , bc = "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif"
      , _c = "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif"
      , wc = "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n"
      , Mc = "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n"
      , Ec = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n#endif"
      , Tc = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n#endif\n"
      , Sc = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif"
      , Ac = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	varying vec2 vUv2;\n#endif"
      , Lc = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n#endif"
      , Rc = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n	vUv2 = uv2;\n#endif"
      , Pc = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n	#ifdef USE_SKINNING\n		vec4 worldPosition = modelMatrix * skinned;\n	#else\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n	#endif\n#endif\n"
      , Cc = "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n	gl_FragColor.a *= opacity;\n}\n"
      , Ic = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n"
      , Uc = "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( 1.0 );\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <logdepthbuf_fragment>\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n	#endif\n}\n"
      , Dc = "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n"
      , Nc = "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	#include <clipping_planes_fragment>\n	gl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n"
      , Oc = "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <skinbase_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition;\n}\n"
      , Fc = "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldPosition );\n	vec2 sampleUV;\n	sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n	sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n}\n"
      , zc = "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}\n"
      , Bc = "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n"
      , Gc = "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n"
      , Hc = "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		reflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n"
      , Vc = "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <skinbase_vertex>\n	#ifdef USE_ENVMAP\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	#include <envmap_vertex>\n}\n"
      , kc = "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <emissivemap_fragment>\n	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n	#include <lightmap_fragment>\n	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n	#ifdef DOUBLE_SIDED\n		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n	#else\n		reflectedLight.directDiffuse = vLightFront;\n	#endif\n	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <normal_flip>\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n"
      , jc = "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <lights_lambert_vertex>\n	#include <shadowmap_vertex>\n}\n"
      , Wc = "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n"
      , Xc = "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n}\n"
      , Yc = "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n	uniform float clearCoat;\n	uniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <specularmap_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_flip>\n	#include <normal_fragment>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_template>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n"
      , qc = "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <uv2_vertex>\n	#include <color_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif\n	#include <begin_vertex>\n	#include <displacementmap_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n"
      , Zc = "uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	gl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n	#include <logdepthbuf_fragment>\n}\n"
      , Jc = "varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vNormal = normalize( normalMatrix * normal );\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n}\n"
      , Qc = "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	outgoingLight = diffuseColor.rgb;\n	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n	#include <premultiplied_alpha_fragment>\n	#include <tonemapping_fragment>\n	#include <encodings_fragment>\n	#include <fog_fragment>\n}\n"
      , Kc = "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <color_vertex>\n	#include <begin_vertex>\n	#include <project_vertex>\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / - mvPosition.z );\n	#else\n		gl_PointSize = size;\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n"
      , $c = "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	gl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n"
      , eh = "#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <begin_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n}\n"
      , th = {
        alphamap_fragment: ns,
        alphamap_pars_fragment: rs,
        alphatest_fragment: as,
        aomap_fragment: os,
        aomap_pars_fragment: ss,
        begin_vertex: cs,
        beginnormal_vertex: hs,
        bsdfs: ls,
        bumpmap_pars_fragment: us,
        clipping_planes_fragment: ps,
        clipping_planes_pars_fragment: ds,
        clipping_planes_pars_vertex: fs,
        clipping_planes_vertex: ms,
        color_fragment: gs,
        color_pars_fragment: vs,
        color_pars_vertex: ys,
        color_vertex: xs,
        common: bs,
        cube_uv_reflection_fragment: _s,
        defaultnormal_vertex: ws,
        displacementmap_pars_vertex: Ms,
        displacementmap_vertex: Es,
        emissivemap_fragment: Ts,
        emissivemap_pars_fragment: Ss,
        encodings_fragment: As,
        encodings_pars_fragment: Ls,
        envmap_fragment: Rs,
        envmap_pars_fragment: Ps,
        envmap_pars_vertex: Cs,
        envmap_vertex: Is,
        fog_fragment: Us,
        fog_pars_fragment: Ds,
        gradientmap_pars_fragment: Ns,
        lightmap_fragment: Os,
        lightmap_pars_fragment: Fs,
        lights_lambert_vertex: zs,
        lights_pars: Bs,
        lights_phong_fragment: Gs,
        lights_phong_pars_fragment: Hs,
        lights_physical_fragment: Vs,
        lights_physical_pars_fragment: ks,
        lights_template: js,
        logdepthbuf_fragment: Ws,
        logdepthbuf_pars_fragment: Xs,
        logdepthbuf_pars_vertex: Ys,
        logdepthbuf_vertex: qs,
        map_fragment: Zs,
        map_pars_fragment: Js,
        map_particle_fragment: Qs,
        map_particle_pars_fragment: Ks,
        metalnessmap_fragment: $s,
        metalnessmap_pars_fragment: ec,
        morphnormal_vertex: tc,
        morphtarget_pars_vertex: ic,
        morphtarget_vertex: nc,
        normal_flip: rc,
        normal_fragment: ac,
        normalmap_pars_fragment: oc,
        packing: sc,
        premultiplied_alpha_fragment: cc,
        project_vertex: hc,
        roughnessmap_fragment: lc,
        roughnessmap_pars_fragment: uc,
        shadowmap_pars_fragment: pc,
        shadowmap_pars_vertex: dc,
        shadowmap_vertex: fc,
        shadowmask_pars_fragment: mc,
        skinbase_vertex: gc,
        skinning_pars_vertex: vc,
        skinning_vertex: yc,
        skinnormal_vertex: xc,
        specularmap_fragment: bc,
        specularmap_pars_fragment: _c,
        tonemapping_fragment: wc,
        tonemapping_pars_fragment: Mc,
        uv_pars_fragment: Ec,
        uv_pars_vertex: Tc,
        uv_vertex: Sc,
        uv2_pars_fragment: Ac,
        uv2_pars_vertex: Lc,
        uv2_vertex: Rc,
        worldpos_vertex: Pc,
        cube_frag: Cc,
        cube_vert: Ic,
        depth_frag: Uc,
        depth_vert: Dc,
        distanceRGBA_frag: Nc,
        distanceRGBA_vert: Oc,
        equirect_frag: Fc,
        equirect_vert: zc,
        linedashed_frag: Bc,
        linedashed_vert: Gc,
        meshbasic_frag: Hc,
        meshbasic_vert: Vc,
        meshlambert_frag: kc,
        meshlambert_vert: jc,
        meshphong_frag: Wc,
        meshphong_vert: Xc,
        meshphysical_frag: Yc,
        meshphysical_vert: qc,
        normal_frag: Zc,
        normal_vert: Jc,
        points_frag: Qc,
        points_vert: Kc,
        shadow_frag: $c,
        shadow_vert: eh
    };
    W.prototype = {
        constructor: W,
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(e) {
            return e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
            this
        },
        setScalar: function(e) {
            return this.r = e,
            this.g = e,
            this.b = e,
            this
        },
        setHex: function(e) {
            return e = Math.floor(e),
            this.r = (e >> 16 & 255) / 255,
            this.g = (e >> 8 & 255) / 255,
            this.b = (255 & e) / 255,
            this
        },
        setRGB: function(e, t, i) {
            return this.r = e,
            this.g = t,
            this.b = i,
            this
        },
        setHSL: function() {
            function e(e, t, i) {
                return 0 > i && (i += 1),
                i > 1 && (i -= 1),
                1 / 6 > i ? e + 6 * (t - e) * i : .5 > i ? t : 2 / 3 > i ? e + 6 * (t - e) * (2 / 3 - i) : e
            }
            return function(t, i, n) {
                if (t = Jo.euclideanModulo(t, 1),
                i = Jo.clamp(i, 0, 1),
                n = Jo.clamp(n, 0, 1),
                0 === i)
                    this.r = this.g = this.b = n;
                else {
                    var r = .5 >= n ? n * (1 + i) : n + i - n * i
                      , a = 2 * n - r;
                    this.r = e(a, r, t + 1 / 3),
                    this.g = e(a, r, t),
                    this.b = e(a, r, t - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(e) {
            function t(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var n, r = i[1], a = i[2];
                switch (r) {
                case "rgb":
                case "rgba":
                    if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                        return this.r = Math.min(255, parseInt(n[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(n[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(n[3], 10)) / 255,
                        t(n[5]),
                        this;
                    if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a))
                        return this.r = Math.min(100, parseInt(n[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(n[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(n[3], 10)) / 100,
                        t(n[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
                        var o = parseFloat(n[1]) / 360
                          , s = parseInt(n[2], 10) / 100
                          , c = parseInt(n[3], 10) / 100;
                        return t(n[5]),
                        this.setHSL(o, s, c)
                    }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                var h = i[1]
                  , l = h.length;
                if (3 === l)
                    return this.r = parseInt(h.charAt(0) + h.charAt(0), 16) / 255,
                    this.g = parseInt(h.charAt(1) + h.charAt(1), 16) / 255,
                    this.b = parseInt(h.charAt(2) + h.charAt(2), 16) / 255,
                    this;
                if (6 === l)
                    return this.r = parseInt(h.charAt(0) + h.charAt(1), 16) / 255,
                    this.g = parseInt(h.charAt(2) + h.charAt(3), 16) / 255,
                    this.b = parseInt(h.charAt(4) + h.charAt(5), 16) / 255,
                    this
            }
            if (e && e.length > 0) {
                var h = ih[e];
                void 0 !== h ? this.setHex(h) : console.warn("THREE.Color: Unknown color " + e)
            }
            return this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(e) {
            return this.r = e.r,
            this.g = e.g,
            this.b = e.b,
            this
        },
        copyGammaToLinear: function(e, t) {
            return void 0 === t && (t = 2),
            this.r = Math.pow(e.r, t),
            this.g = Math.pow(e.g, t),
            this.b = Math.pow(e.b, t),
            this
        },
        copyLinearToGamma: function(e, t) {
            void 0 === t && (t = 2);
            var i = t > 0 ? 1 / t : 1;
            return this.r = Math.pow(e.r, i),
            this.g = Math.pow(e.g, i),
            this.b = Math.pow(e.b, i),
            this
        },
        convertGammaToLinear: function() {
            var e = this.r
              , t = this.g
              , i = this.b;
            return this.r = e * e,
            this.g = t * t,
            this.b = i * i,
            this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r),
            this.g = Math.sqrt(this.g),
            this.b = Math.sqrt(this.b),
            this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(e) {
            var t, i, n = e || {
                h: 0,
                s: 0,
                l: 0
            }, r = this.r, a = this.g, o = this.b, s = Math.max(r, a, o), c = Math.min(r, a, o), h = (c + s) / 2;
            if (c === s)
                t = 0,
                i = 0;
            else {
                var l = s - c;
                switch (i = .5 >= h ? l / (s + c) : l / (2 - s - c),
                s) {
                case r:
                    t = (a - o) / l + (o > a ? 6 : 0);
                    break;
                case a:
                    t = (o - r) / l + 2;
                    break;
                case o:
                    t = (r - a) / l + 4
                }
                t /= 6
            }
            return n.h = t,
            n.s = i,
            n.l = h,
            n
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(e, t, i) {
            var n = this.getHSL();
            return n.h += e,
            n.s += t,
            n.l += i,
            this.setHSL(n.h, n.s, n.l),
            this
        },
        add: function(e) {
            return this.r += e.r,
            this.g += e.g,
            this.b += e.b,
            this
        },
        addColors: function(e, t) {
            return this.r = e.r + t.r,
            this.g = e.g + t.g,
            this.b = e.b + t.b,
            this
        },
        addScalar: function(e) {
            return this.r += e,
            this.g += e,
            this.b += e,
            this
        },
        sub: function(e) {
            return this.r = Math.max(0, this.r - e.r),
            this.g = Math.max(0, this.g - e.g),
            this.b = Math.max(0, this.b - e.b),
            this
        },
        multiply: function(e) {
            return this.r *= e.r,
            this.g *= e.g,
            this.b *= e.b,
            this
        },
        multiplyScalar: function(e) {
            return this.r *= e,
            this.g *= e,
            this.b *= e,
            this
        },
        lerp: function(e, t) {
            return this.r += (e.r - this.r) * t,
            this.g += (e.g - this.g) * t,
            this.b += (e.b - this.b) * t,
            this
        },
        equals: function(e) {
            return e.r === this.r && e.g === this.g && e.b === this.b
        },
        fromArray: function(e, t) {
            return void 0 === t && (t = 0),
            this.r = e[t],
            this.g = e[t + 1],
            this.b = e[t + 2],
            this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []),
            void 0 === t && (t = 0),
            e[t] = this.r,
            e[t + 1] = this.g,
            e[t + 2] = this.b,
            e
        },
        toJSON: function() {
            return this.getHex()
        }
    };
    var ih = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    X.prototype = Object.create(n.prototype),
    X.prototype.constructor = X,
    X.prototype.isDataTexture = !0;
    var nh = {
        common: {
            diffuse: {
                value: new W(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new r(0,0,1,1)
            },
            specularMap: {
                value: null
            },
            alphaMap: {
                value: null
            },
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new i(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        gradientmap: {
            gradientMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new W(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            },
            rectAreaLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    width: {},
                    height: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new W(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new r(0,0,1,1)
            }
        }
    }
      , rh = {
        basic: {
            uniforms: Object.assign({}, nh.common, nh.aomap, nh.lightmap, nh.fog),
            vertexShader: th.meshbasic_vert,
            fragmentShader: th.meshbasic_frag
        },
        lambert: {
            uniforms: Object.assign({}, nh.common, nh.aomap, nh.lightmap, nh.emissivemap, nh.fog, nh.lights, {
                emissive: {
                    value: new W(0)
                }
            }),
            vertexShader: th.meshlambert_vert,
            fragmentShader: th.meshlambert_frag
        },
        phong: {
            uniforms: Object.assign({}, nh.common, nh.aomap, nh.lightmap, nh.emissivemap, nh.bumpmap, nh.normalmap, nh.displacementmap, nh.gradientmap, nh.fog, nh.lights, {
                emissive: {
                    value: new W(0)
                },
                specular: {
                    value: new W(1118481)
                },
                shininess: {
                    value: 30
                }
            }),
            vertexShader: th.meshphong_vert,
            fragmentShader: th.meshphong_frag
        },
        standard: {
            uniforms: Object.assign({}, nh.common, nh.aomap, nh.lightmap, nh.emissivemap, nh.bumpmap, nh.normalmap, nh.displacementmap, nh.roughnessmap, nh.metalnessmap, nh.fog, nh.lights, {
                emissive: {
                    value: new W(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }),
            vertexShader: th.meshphysical_vert,
            fragmentShader: th.meshphysical_frag
        },
        points: {
            uniforms: Object.assign({}, nh.points, nh.fog),
            vertexShader: th.points_vert,
            fragmentShader: th.points_frag
        },
        dashed: {
            uniforms: Object.assign({}, nh.common, nh.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }),
            vertexShader: th.linedashed_vert,
            fragmentShader: th.linedashed_frag
        },
        depth: {
            uniforms: Object.assign({}, nh.common, nh.displacementmap),
            vertexShader: th.depth_vert,
            fragmentShader: th.depth_frag
        },
        normal: {
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            vertexShader: th.normal_vert,
            fragmentShader: th.normal_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: th.cube_vert,
            fragmentShader: th.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                },
                tFlip: {
                    value: -1
                }
            },
            vertexShader: th.equirect_vert,
            fragmentShader: th.equirect_frag
        },
        distanceRGBA: {
            uniforms: {
                lightPos: {
                    value: new c
                }
            },
            vertexShader: th.distanceRGBA_vert,
            fragmentShader: th.distanceRGBA_frag
        }
    };
    rh.physical = {
        uniforms: Object.assign({}, rh.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }),
        vertexShader: th.meshphysical_vert,
        fragmentShader: th.meshphysical_frag
    },
    Y.prototype = {
        constructor: Y,
        set: function(e, t) {
            return this.min.copy(e),
            this.max.copy(t),
            this
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, i = e.length; i > t; t++)
                this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new i;
            return function(t, i) {
                var n = e.copy(i).multiplyScalar(.5);
                return this.min.copy(t).sub(n),
                this.max.copy(t).add(n),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min),
            this.max.copy(e.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = +(1 / 0),
            this.max.x = this.max.y = -(1 / 0),
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(e) {
            var t = e || new i;
            return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            var t = e || new i;
            return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e),
            this.max.max(e),
            this
        },
        expandByVector: function(e) {
            return this.min.sub(e),
            this.max.add(e),
            this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e),
            this.max.addScalar(e),
            this
        },
        containsPoint: function(e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
        },
        getParameter: function(e, t) {
            var n = t || new i;
            return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
        },
        clampPoint: function(e, t) {
            var n = t || new i;
            return n.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new i;
            return function(t) {
                var i = e.copy(t).clamp(this.min, this.max);
                return i.sub(t).length()
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min),
            this.max.min(e.max),
            this
        },
        union: function(e) {
            return this.min.min(e.min),
            this.max.max(e.max),
            this
        },
        translate: function(e) {
            return this.min.add(e),
            this.max.add(e),
            this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    };
    var ah = 0;
    J.prototype = {
        constructor: J,
        isMaterial: !0,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(e) {
            e === !0 && this.update(),
            this._needsUpdate = e
        },
        setValues: function(e) {
            if (void 0 !== e)
                for (var t in e) {
                    var i = e[t];
                    if (void 0 !== i) {
                        var n = this[t];
                        void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[t] = "overdraw" === t ? Number(i) : i : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                    } else
                        console.warn("THREE.Material: '" + t + "' parameter is undefined.")
                }
        },
        toJSON: function(e) {
            function t(e) {
                var t = [];
                for (var i in e) {
                    var n = e[i];
                    delete n.metadata,
                    t.push(n)
                }
                return t
            }
            var i = void 0 === e;
            i && (e = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.4,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat),
            void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
            n.reflectivity = this.reflectivity),
            this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
            void 0 !== this.size && (n.size = this.size),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== qr && (n.blending = this.blending),
            this.shading !== kr && (n.shading = this.shading),
            this.side !== Br && (n.side = this.side),
            this.vertexColors !== jr && (n.vertexColors = this.vertexColors),
            this.opacity < 1 && (n.opacity = this.opacity),
            this.transparent === !0 && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
            this.wireframe === !0 && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            n.skinning = this.skinning,
            n.morphTargets = this.morphTargets,
            i) {
                var r = t(e.textures)
                  , a = t(e.images);
                r.length > 0 && (n.textures = r),
                a.length > 0 && (n.images = a)
            }
            return n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.name = e.name,
            this.fog = e.fog,
            this.lights = e.lights,
            this.blending = e.blending,
            this.side = e.side,
            this.shading = e.shading,
            this.vertexColors = e.vertexColors,
            this.opacity = e.opacity,
            this.transparent = e.transparent,
            this.blendSrc = e.blendSrc,
            this.blendDst = e.blendDst,
            this.blendEquation = e.blendEquation,
            this.blendSrcAlpha = e.blendSrcAlpha,
            this.blendDstAlpha = e.blendDstAlpha,
            this.blendEquationAlpha = e.blendEquationAlpha,
            this.depthFunc = e.depthFunc,
            this.depthTest = e.depthTest,
            this.depthWrite = e.depthWrite,
            this.colorWrite = e.colorWrite,
            this.precision = e.precision,
            this.polygonOffset = e.polygonOffset,
            this.polygonOffsetFactor = e.polygonOffsetFactor,
            this.polygonOffsetUnits = e.polygonOffsetUnits,
            this.alphaTest = e.alphaTest,
            this.premultipliedAlpha = e.premultipliedAlpha,
            this.overdraw = e.overdraw,
            this.visible = e.visible,
            this.clipShadows = e.clipShadows,
            this.clipIntersection = e.clipIntersection;
            var t = e.clippingPlanes
              , i = null;
            if (null !== t) {
                var n = t.length;
                i = new Array(n);
                for (var r = 0; r !== n; ++r)
                    i[r] = t[r].clone()
            }
            return this.clippingPlanes = i,
            this
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    },
    Object.assign(J.prototype, t.prototype),
    Q.prototype = Object.create(J.prototype),
    Q.prototype.constructor = Q,
    Q.prototype.isShaderMaterial = !0,
    Q.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Object.assign({}, e.uniforms),
        this.defines = e.defines,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this.extensions = e.extensions,
        this
    }
    ,
    Q.prototype.toJSON = function(e) {
        var t = J.prototype.toJSON.call(this, e);
        return t.uniforms = this.uniforms,
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t
    }
    ,
    K.prototype = Object.create(J.prototype),
    K.prototype.constructor = K,
    K.prototype.isMeshDepthMaterial = !0,
    K.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.depthPacking = e.depthPacking,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
    ,
    $.prototype = {
        constructor: $,
        isBox3: !0,
        set: function(e, t) {
            return this.min.copy(e),
            this.max.copy(t),
            this
        },
        setFromArray: function(e) {
            for (var t = +(1 / 0), i = +(1 / 0), n = +(1 / 0), r = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = e.length; c > s; s += 3) {
                var h = e[s]
                  , l = e[s + 1]
                  , u = e[s + 2];
                t > h && (t = h),
                i > l && (i = l),
                n > u && (n = u),
                h > r && (r = h),
                l > a && (a = l),
                u > o && (o = u)
            }
            this.min.set(t, i, n),
            this.max.set(r, a, o)
        },
        setFromPoints: function(e) {
            this.makeEmpty();
            for (var t = 0, i = e.length; i > t; t++)
                this.expandByPoint(e[t]);
            return this
        },
        setFromCenterAndSize: function() {
            var e = new c;
            return function(t, i) {
                var n = e.copy(i).multiplyScalar(.5);
                return this.min.copy(t).sub(n),
                this.max.copy(t).add(n),
                this
            }
        }(),
        setFromObject: function() {
            var e = new c;
            return function(t) {
                var i = this;
                return t.updateMatrixWorld(!0),
                this.makeEmpty(),
                t.traverse(function(t) {
                    var n = t.geometry;
                    if (void 0 !== n)
                        if (n.isGeometry)
                            for (var r = n.vertices, a = 0, o = r.length; o > a; a++)
                                e.copy(r[a]),
                                e.applyMatrix4(t.matrixWorld),
                                i.expandByPoint(e);
                        else if (n.isBufferGeometry) {
                            var s = n.attributes.position;
                            if (void 0 !== s) {
                                var c, h, l;
                                s.isInterleavedBufferAttribute ? (c = s.data.array,
                                h = s.offset,
                                l = s.data.stride) : (c = s.array,
                                h = 0,
                                l = 3);
                                for (var a = h, o = c.length; o > a; a += l)
                                    e.fromArray(c, a),
                                    e.applyMatrix4(t.matrixWorld),
                                    i.expandByPoint(e)
                            }
                        }
                }),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.min.copy(e.min),
            this.max.copy(e.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = +(1 / 0),
            this.max.x = this.max.y = this.max.z = -(1 / 0),
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(e) {
            var t = e || new c;
            return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(e) {
            var t = e || new c;
            return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(e) {
            return this.min.min(e),
            this.max.max(e),
            this
        },
        expandByVector: function(e) {
            return this.min.sub(e),
            this.max.add(e),
            this
        },
        expandByScalar: function(e) {
            return this.min.addScalar(-e),
            this.max.addScalar(e),
            this
        },
        containsPoint: function(e) {
            return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
        },
        containsBox: function(e) {
            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
        },
        getParameter: function(e, t) {
            var i = t || new c;
            return i.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(e) {
            return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
        },
        intersectsSphere: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new c),
                this.clampPoint(t.center, e),
                e.distanceToSquared(t.center) <= t.radius * t.radius
            }
        }(),
        intersectsPlane: function(e) {
            var t, i;
            return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
            i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
            i = e.normal.x * this.min.x),
            e.normal.y > 0 ? (t += e.normal.y * this.min.y,
            i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
            i += e.normal.y * this.min.y),
            e.normal.z > 0 ? (t += e.normal.z * this.min.z,
            i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
            i += e.normal.z * this.min.z),
            t <= e.constant && i >= e.constant
        },
        clampPoint: function(e, t) {
            var i = t || new c;
            return i.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var e = new c;
            return function(t) {
                var i = e.copy(t).clamp(this.min, this.max);
                return i.sub(t).length()
            }
        }(),
        getBoundingSphere: function() {
            var e = new c;
            return function(t) {
                var i = t || new ee;
                return this.getCenter(i.center),
                i.radius = .5 * this.getSize(e).length(),
                i
            }
        }(),
        intersect: function(e) {
            return this.min.max(e.min),
            this.max.min(e.max),
            this.isEmpty() && this.makeEmpty(),
            this
        },
        union: function(e) {
            return this.min.min(e.min),
            this.max.max(e.max),
            this
        },
        applyMatrix4: function() {
            var e = [new c, new c, new c, new c, new c, new c, new c, new c];
            return function(t) {
                return this.isEmpty() ? this : (e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
                e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
                e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
                e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
                e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
                e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
                e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
                e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
                this.setFromPoints(e),
                this)
            }
        }(),
        translate: function(e) {
            return this.min.add(e),
            this.max.add(e),
            this
        },
        equals: function(e) {
            return e.min.equals(this.min) && e.max.equals(this.max)
        }
    },
    ee.prototype = {
        constructor: ee,
        set: function(e, t) {
            return this.center.copy(e),
            this.radius = t,
            this
        },
        setFromPoints: function() {
            var e = new $;
            return function(t, i) {
                var n = this.center;
                void 0 !== i ? n.copy(i) : e.setFromPoints(t).getCenter(n);
                for (var r = 0, a = 0, o = t.length; o > a; a++)
                    r = Math.max(r, n.distanceToSquared(t[a]));
                return this.radius = Math.sqrt(r),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.center.copy(e.center),
            this.radius = e.radius,
            this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(e) {
            return e.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(e) {
            return e.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(e) {
            var t = this.radius + e.radius;
            return e.center.distanceToSquared(this.center) <= t * t
        },
        intersectsBox: function(e) {
            return e.intersectsSphere(this)
        },
        intersectsPlane: function(e) {
            return Math.abs(this.center.dot(e.normal) - e.constant) <= this.radius
        },
        clampPoint: function(e, t) {
            var i = this.center.distanceToSquared(e)
              , n = t || new c;
            return n.copy(e),
            i > this.radius * this.radius && (n.sub(this.center).normalize(),
            n.multiplyScalar(this.radius).add(this.center)),
            n
        },
        getBoundingBox: function(e) {
            var t = e || new $;
            return t.set(this.center, this.center),
            t.expandByScalar(this.radius),
            t
        },
        applyMatrix4: function(e) {
            return this.center.applyMatrix4(e),
            this.radius = this.radius * e.getMaxScaleOnAxis(),
            this
        },
        translate: function(e) {
            return this.center.add(e),
            this
        },
        equals: function(e) {
            return e.center.equals(this.center) && e.radius === this.radius
        }
    },
    te.prototype = {
        constructor: te,
        isMatrix3: !0,
        set: function(e, t, i, n, r, a, o, s, c) {
            var h = this.elements;
            return h[0] = e,
            h[1] = n,
            h[2] = o,
            h[3] = t,
            h[4] = r,
            h[5] = s,
            h[6] = i,
            h[7] = a,
            h[8] = c,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(e) {
            var t = e.elements;
            return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]),
            this
        },
        setFromMatrix4: function(e) {
            var t = e.elements;
            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
            this
        },
        applyToVector3Array: function() {
            var e;
            return function(t, i, n) {
                void 0 === e && (e = new c),
                void 0 === i && (i = 0),
                void 0 === n && (n = t.length);
                for (var r = 0, a = i; n > r; r += 3,
                a += 3)
                    e.fromArray(t, a),
                    e.applyMatrix3(this),
                    e.toArray(t, a);
                return t
            }
        }(),
        applyToBuffer: function() {
            var e;
            return function(t, i, n) {
                void 0 === e && (e = new c),
                void 0 === i && (i = 0),
                void 0 === n && (n = t.length / t.itemSize);
                for (var r = 0, a = i; n > r; r++,
                a++)
                    e.x = t.getX(a),
                    e.y = t.getY(a),
                    e.z = t.getZ(a),
                    e.applyMatrix3(this),
                    t.setXYZ(a, e.x, e.y, e.z);
                return t
            }
        }(),
        multiplyScalar: function(e) {
            var t = this.elements;
            return t[0] *= e,
            t[3] *= e,
            t[6] *= e,
            t[1] *= e,
            t[4] *= e,
            t[7] *= e,
            t[2] *= e,
            t[5] *= e,
            t[8] *= e,
            this
        },
        determinant: function() {
            var e = this.elements
              , t = e[0]
              , i = e[1]
              , n = e[2]
              , r = e[3]
              , a = e[4]
              , o = e[5]
              , s = e[6]
              , c = e[7]
              , h = e[8];
            return t * a * h - t * o * c - i * r * h + i * o * s + n * r * c - n * a * s
        },
        getInverse: function(e, t) {
            e && e.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var i = e.elements
              , n = this.elements
              , r = i[0]
              , a = i[1]
              , o = i[2]
              , s = i[3]
              , c = i[4]
              , h = i[5]
              , l = i[6]
              , u = i[7]
              , p = i[8]
              , d = p * c - h * u
              , f = h * l - p * s
              , m = u * s - c * l
              , g = r * d + a * f + o * m;
            if (0 === g) {
                var v = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                if (t === !0)
                    throw new Error(v);
                return console.warn(v),
                this.identity()
            }
            var y = 1 / g;
            return n[0] = d * y,
            n[1] = (o * u - p * a) * y,
            n[2] = (h * a - o * c) * y,
            n[3] = f * y,
            n[4] = (p * r - o * l) * y,
            n[5] = (o * s - h * r) * y,
            n[6] = m * y,
            n[7] = (a * l - u * r) * y,
            n[8] = (c * r - a * s) * y,
            this
        },
        transpose: function() {
            var e, t = this.elements;
            return e = t[1],
            t[1] = t[3],
            t[3] = e,
            e = t[2],
            t[2] = t[6],
            t[6] = e,
            e = t[5],
            t[5] = t[7],
            t[7] = e,
            this
        },
        getNormalMatrix: function(e) {
            return this.setFromMatrix4(e).getInverse(this).transpose()
        },
        transposeIntoArray: function(e) {
            var t = this.elements;
            return e[0] = t[0],
            e[1] = t[3],
            e[2] = t[6],
            e[3] = t[1],
            e[4] = t[4],
            e[5] = t[7],
            e[6] = t[2],
            e[7] = t[5],
            e[8] = t[8],
            this
        },
        fromArray: function(e, t) {
            void 0 === t && (t = 0);
            for (var i = 0; 9 > i; i++)
                this.elements[i] = e[i + t];
            return this
        },
        toArray: function(e, t) {
            void 0 === e && (e = []),
            void 0 === t && (t = 0);
            var i = this.elements;
            return e[t] = i[0],
            e[t + 1] = i[1],
            e[t + 2] = i[2],
            e[t + 3] = i[3],
            e[t + 4] = i[4],
            e[t + 5] = i[5],
            e[t + 6] = i[6],
            e[t + 7] = i[7],
            e[t + 8] = i[8],
            e
        }
    },
    ie.prototype = {
        constructor: ie,
        set: function(e, t) {
            return this.normal.copy(e),
            this.constant = t,
            this
        },
        setComponents: function(e, t, i, n) {
            return this.normal.set(e, t, i),
            this.constant = n,
            this
        },
        setFromNormalAndCoplanarPoint: function(e, t) {
            return this.normal.copy(e),
            this.constant = -t.dot(this.normal),
            this
        },
        setFromCoplanarPoints: function() {
            var e = new c
              , t = new c;
            return function(i, n, r) {
                var a = e.subVectors(r, n).cross(t.subVectors(i, n)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, i),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.normal.copy(e.normal),
            this.constant = e.constant,
            this
        },
        normalize: function() {
            var e = 1 / this.normal.length();
            return this.normal.multiplyScalar(e),
            this.constant *= e,
            this
        },
        negate: function() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        },
        distanceToPoint: function(e) {
            return this.normal.dot(e) + this.constant
        },
        distanceToSphere: function(e) {
            return this.distanceToPoint(e.center) - e.radius
        },
        projectPoint: function(e, t) {
            return this.orthoPoint(e, t).sub(e).negate()
        },
        orthoPoint: function(e, t) {
            var i = this.distanceToPoint(e)
              , n = t || new c;
            return n.copy(this.normal).multiplyScalar(i)
        },
        intersectLine: function() {
            var e = new c;
            return function(t, i) {
                var n = i || new c
                  , r = t.delta(e)
                  , a = this.normal.dot(r);
                if (0 === a)
                    return 0 === this.distanceToPoint(t.start) ? n.copy(t.start) : void 0;
                var o = -(t.start.dot(this.normal) + this.constant) / a;
                return 0 > o || o > 1 ? void 0 : n.copy(r).multiplyScalar(o).add(t.start)
            }
        }(),
        intersectsLine: function(e) {
            var t = this.distanceToPoint(e.start)
              , i = this.distanceToPoint(e.end);
            return 0 > t && i > 0 || 0 > i && t > 0
        },
        intersectsBox: function(e) {
            return e.intersectsPlane(this)
        },
        intersectsSphere: function(e) {
            return e.intersectsPlane(this)
        },
        coplanarPoint: function(e) {
            var t = e || new c;
            return t.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var e = new c
              , t = new te;
            return function(i, n) {
                var r = this.coplanarPoint(e).applyMatrix4(i)
                  , a = n || t.getNormalMatrix(i)
                  , o = this.normal.applyMatrix3(a).normalize();
                return this.constant = -r.dot(o),
                this
            }
        }(),
        translate: function(e) {
            return this.constant = this.constant - e.dot(this.normal),
            this
        },
        equals: function(e) {
            return e.normal.equals(this.normal) && e.constant === this.constant
        }
    },
    ne.prototype = {
        constructor: ne,
        set: function(e, t, i, n, r, a) {
            var o = this.planes;
            return o[0].copy(e),
            o[1].copy(t),
            o[2].copy(i),
            o[3].copy(n),
            o[4].copy(r),
            o[5].copy(a),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            for (var t = this.planes, i = 0; 6 > i; i++)
                t[i].copy(e.planes[i]);
            return this
        },
        setFromMatrix: function(e) {
            var t = this.planes
              , i = e.elements
              , n = i[0]
              , r = i[1]
              , a = i[2]
              , o = i[3]
              , s = i[4]
              , c = i[5]
              , h = i[6]
              , l = i[7]
              , u = i[8]
              , p = i[9]
              , d = i[10]
              , f = i[11]
              , m = i[12]
              , g = i[13]
              , v = i[14]
              , y = i[15];
            return t[0].setComponents(o - n, l - s, f - u, y - m).normalize(),
            t[1].setComponents(o + n, l + s, f + u, y + m).normalize(),
            t[2].setComponents(o + r, l + c, f + p, y + g).normalize(),
            t[3].setComponents(o - r, l - c, f - p, y - g).normalize(),
            t[4].setComponents(o - a, l - h, f - d, y - v).normalize(),
            t[5].setComponents(o + a, l + h, f + d, y + v).normalize(),
            this
        },
        intersectsObject: function() {
            var e = new ee;
            return function(t) {
                var i = t.geometry;
                return null === i.boundingSphere && i.computeBoundingSphere(),
                e.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),
                this.intersectsSphere(e)
            }
        }(),
        intersectsSprite: function() {
            var e = new ee;
            return function(t) {
                return e.center.set(0, 0, 0),
                e.radius = .7071067811865476,
                e.applyMatrix4(t.matrixWorld),
                this.intersectsSphere(e)
            }
        }(),
        intersectsSphere: function(e) {
            for (var t = this.planes, i = e.center, n = -e.radius, r = 0; 6 > r; r++) {
                var a = t[r].distanceToPoint(i);
                if (n > a)
                    return !1
            }
            return !0
        },
        intersectsBox: function() {
            var e = new c
              , t = new c;
            return function(i) {
                for (var n = this.planes, r = 0; 6 > r; r++) {
                    var a = n[r];
                    e.x = a.normal.x > 0 ? i.min.x : i.max.x,
                    t.x = a.normal.x > 0 ? i.max.x : i.min.x,
                    e.y = a.normal.y > 0 ? i.min.y : i.max.y,
                    t.y = a.normal.y > 0 ? i.max.y : i.min.y,
                    e.z = a.normal.z > 0 ? i.min.z : i.max.z,
                    t.z = a.normal.z > 0 ? i.max.z : i.min.z;
                    var o = a.distanceToPoint(e)
                      , s = a.distanceToPoint(t);
                    if (0 > o && 0 > s)
                        return !1
                }
                return !0
            }
        }(),
        containsPoint: function(e) {
            for (var t = this.planes, i = 0; 6 > i; i++)
                if (t[i].distanceToPoint(e) < 0)
                    return !1;
            return !0
        }
    },
    ae.prototype = {
        constructor: ae,
        set: function(e, t) {
            return this.origin.copy(e),
            this.direction.copy(t),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.origin.copy(e.origin),
            this.direction.copy(e.direction),
            this
        },
        at: function(e, t) {
            var i = t || new c;
            return i.copy(this.direction).multiplyScalar(e).add(this.origin)
        },
        lookAt: function(e) {
            return this.direction.copy(e).sub(this.origin).normalize(),
            this
        },
        recast: function() {
            var e = new c;
            return function(t) {
                return this.origin.copy(this.at(t, e)),
                this
            }
        }(),
        closestPointToPoint: function(e, t) {
            var i = t || new c;
            i.subVectors(e, this.origin);
            var n = i.dot(this.direction);
            return 0 > n ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function(e) {
            return Math.sqrt(this.distanceSqToPoint(e))
        },
        distanceSqToPoint: function() {
            var e = new c;
            return function(t) {
                var i = e.subVectors(t, this.origin).dot(this.direction);
                return 0 > i ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(i).add(this.origin),
                e.distanceToSquared(t))
            }
        }(),
        distanceSqToSegment: function() {
            var e = new c
              , t = new c
              , i = new c;
            return function(n, r, a, o) {
                e.copy(n).add(r).multiplyScalar(.5),
                t.copy(r).sub(n).normalize(),
                i.copy(this.origin).sub(e);
                var s, c, h, l, u = .5 * n.distanceTo(r), p = -this.direction.dot(t), d = i.dot(this.direction), f = -i.dot(t), m = i.lengthSq(), g = Math.abs(1 - p * p);
                if (g > 0)
                    if (s = p * f - d,
                    c = p * d - f,
                    l = u * g,
                    s >= 0)
                        if (c >= -l)
                            if (l >= c) {
                                var v = 1 / g;
                                s *= v,
                                c *= v,
                                h = s * (s + p * c + 2 * d) + c * (p * s + c + 2 * f) + m
                            } else
                                c = u,
                                s = Math.max(0, -(p * c + d)),
                                h = -s * s + c * (c + 2 * f) + m;
                        else
                            c = -u,
                            s = Math.max(0, -(p * c + d)),
                            h = -s * s + c * (c + 2 * f) + m;
                    else
                        -l >= c ? (s = Math.max(0, -(-p * u + d)),
                        c = s > 0 ? -u : Math.min(Math.max(-u, -f), u),
                        h = -s * s + c * (c + 2 * f) + m) : l >= c ? (s = 0,
                        c = Math.min(Math.max(-u, -f), u),
                        h = c * (c + 2 * f) + m) : (s = Math.max(0, -(p * u + d)),
                        c = s > 0 ? u : Math.min(Math.max(-u, -f), u),
                        h = -s * s + c * (c + 2 * f) + m);
                else
                    c = p > 0 ? -u : u,
                    s = Math.max(0, -(p * c + d)),
                    h = -s * s + c * (c + 2 * f) + m;
                return a && a.copy(this.direction).multiplyScalar(s).add(this.origin),
                o && o.copy(t).multiplyScalar(c).add(e),
                h
            }
        }(),
        intersectSphere: function() {
            var e = new c;
            return function(t, i) {
                e.subVectors(t.center, this.origin);
                var n = e.dot(this.direction)
                  , r = e.dot(e) - n * n
                  , a = t.radius * t.radius;
                if (r > a)
                    return null;
                var o = Math.sqrt(a - r)
                  , s = n - o
                  , c = n + o;
                return 0 > s && 0 > c ? null : 0 > s ? this.at(c, i) : this.at(s, i)
            }
        }(),
        intersectsSphere: function(e) {
            return this.distanceToPoint(e.center) <= e.radius
        },
        distanceToPlane: function(e) {
            var t = e.normal.dot(this.direction);
            if (0 === t)
                return 0 === e.distanceToPoint(this.origin) ? 0 : null;
            var i = -(this.origin.dot(e.normal) + e.constant) / t;
            return i >= 0 ? i : null
        },
        intersectPlane: function(e, t) {
            var i = this.distanceToPlane(e);
            return null === i ? null : this.at(i, t)
        },
        intersectsPlane: function(e) {
            var t = e.distanceToPoint(this.origin);
            if (0 === t)
                return !0;
            var i = e.normal.dot(this.direction);
            return 0 > i * t ? !0 : !1
        },
        intersectBox: function(e, t) {
            var i, n, r, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
            return c >= 0 ? (i = (e.min.x - u.x) * c,
            n = (e.max.x - u.x) * c) : (i = (e.max.x - u.x) * c,
            n = (e.min.x - u.x) * c),
            h >= 0 ? (r = (e.min.y - u.y) * h,
            a = (e.max.y - u.y) * h) : (r = (e.max.y - u.y) * h,
            a = (e.min.y - u.y) * h),
            i > a || r > n ? null : ((r > i || i !== i) && (i = r),
            (n > a || n !== n) && (n = a),
            l >= 0 ? (o = (e.min.z - u.z) * l,
            s = (e.max.z - u.z) * l) : (o = (e.max.z - u.z) * l,
            s = (e.min.z - u.z) * l),
            i > s || o > n ? null : ((o > i || i !== i) && (i = o),
            (n > s || n !== n) && (n = s),
            0 > n ? null : this.at(i >= 0 ? i : n, t)))
        },
        intersectsBox: function() {
            var e = new c;
            return function(t) {
                return null !== this.intersectBox(t, e)
            }
        }(),
        intersectTriangle: function() {
            var e = new c
              , t = new c
              , i = new c
              , n = new c;
            return function(r, a, o, s, c) {
                t.subVectors(a, r),
                i.subVectors(o, r),
                n.crossVectors(t, i);
                var h, l = this.direction.dot(n);
                if (l > 0) {
                    if (s)
                        return null;
                    h = 1
                } else {
                    if (!(0 > l))
                        return null;
                    h = -1,
                    l = -l
                }
                e.subVectors(this.origin, r);
                var u = h * this.direction.dot(i.crossVectors(e, i));
                if (0 > u)
                    return null;
                var p = h * this.direction.dot(t.cross(e));
                if (0 > p)
                    return null;
                if (u + p > l)
                    return null;
                var d = -h * e.dot(n);
                return 0 > d ? null : this.at(d / l, c)
            }
        }(),
        applyMatrix4: function(e) {
            return this.direction.add(this.origin).applyMatrix4(e),
            this.origin.applyMatrix4(e),
            this.direction.sub(this.origin),
            this.direction.normalize(),
            this
        },
        equals: function(e) {
            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
        }
    },
    oe.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
    oe.DefaultOrder = "XYZ",
    oe.prototype = {
        constructor: oe,
        isEuler: !0,
        get x() {
            return this._x
        },
        set x(e) {
            this._x = e,
            this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(e) {
            this._y = e,
            this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(e) {
            this._z = e,
            this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(e) {
            this._order = e,
            this.onChangeCallback()
        },
        set: function(e, t, i, n) {
            return this._x = e,
            this._y = t,
            this._z = i,
            this._order = n || this._order,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(e) {
            return this._x = e._x,
            this._y = e._y,
            this._z = e._z,
            this._order = e._order,
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(e, t, i) {
            var n = Jo.clamp
              , r = e.elements
              , a = r[0]
              , o = r[4]
              , s = r[8]
              , c = r[1]
              , h = r[5]
              , l = r[9]
              , u = r[2]
              , p = r[6]
              , d = r[10];
            return t = t || this._order,
            "XYZ" === t ? (this._y = Math.asin(n(s, -1, 1)),
            Math.abs(s) < .99999 ? (this._x = Math.atan2(-l, d),
            this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(p, h),
            this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(l, -1, 1)),
            Math.abs(l) < .99999 ? (this._y = Math.atan2(s, d),
            this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a),
            this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(p, -1, 1)),
            Math.abs(p) < .99999 ? (this._y = Math.atan2(-u, d),
            this._z = Math.atan2(-o, h)) : (this._y = 0,
            this._z = Math.atan2(c, a))) : "ZYX" === t ? (this._y = Math.asin(-n(u, -1, 1)),
            Math.abs(u) < .99999 ? (this._x = Math.atan2(p, d),
            this._z = Math.atan2(c, a)) : (this._x = 0,
            this._z = Math.atan2(-o, h))) : "YZX" === t ? (this._z = Math.asin(n(c, -1, 1)),
            Math.abs(c) < .99999 ? (this._x = Math.atan2(-l, h),
            this._y = Math.atan2(-u, a)) : (this._x = 0,
            this._y = Math.atan2(s, d))) : "XZY" === t ? (this._z = Math.asin(-n(o, -1, 1)),
            Math.abs(o) < .99999 ? (this._x = Math.atan2(p, h),
            this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, d),
            this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t),
            this._order = t,
            i !== !1 && this.onChangeCallback(),
            this
        },
        setFromQuaternion: function() {
            var e;
            return function(t, i, n) {
                return void 0 === e && (e = new h),
                e.makeRotationFromQuaternion(t),
                this.setFromRotationMatrix(e, i, n)
            }
        }(),
        setFromVector3: function(e, t) {
            return this.set(e.x, e.y, e.z, t || this._order)
        },
        reorder: function() {
            var e = new s;
            return function(t) {
                return e.setFromEuler(this),
                this.setFromQuaternion(e, t)
            }
        }(),
        equals: function(e) {
            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
        },
        fromArray: function(e) {
            return this._x = e[0],
            this._y = e[1],
            this._z = e[2],
            void 0 !== e[3] && (this._order = e[3]),
            this.onChangeCallback(),
            this
        },
        toArray: function(e, t) {
            return void 0 === e && (e = []),
            void 0 === t && (t = 0),
            e[t] = this._x,
            e[t + 1] = this._y,
            e[t + 2] = this._z,
            e[t + 3] = this._order,
            e
        },
        toVector3: function(e) {
            return e ? e.set(this._x, this._y, this._z) : new c(this._x,this._y,this._z)
        },
        onChange: function(e) {
            return this.onChangeCallback = e,
            this
        },
        onChangeCallback: function() {}
    },
    se.prototype = {
        constructor: se,
        set: function(e) {
            this.mask = 1 << e
        },
        enable: function(e) {
            this.mask |= 1 << e
        },
        toggle: function(e) {
            this.mask ^= 1 << e
        },
        disable: function(e) {
            this.mask &= ~(1 << e)
        },
        test: function(e) {
            return 0 !== (this.mask & e.mask)
        }
    };
    var oh = 0;
    ce.DefaultUp = new c(0,1,0),
    ce.DefaultMatrixAutoUpdate = !0,
    Object.assign(ce.prototype, t.prototype, {
        isObject3D: !0,
        applyMatrix: function(e) {
            this.matrix.multiplyMatrices(e, this.matrix),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(e, t) {
            this.quaternion.setFromAxisAngle(e, t)
        },
        setRotationFromEuler: function(e) {
            this.quaternion.setFromEuler(e, !0)
        },
        setRotationFromMatrix: function(e) {
            this.quaternion.setFromRotationMatrix(e)
        },
        setRotationFromQuaternion: function(e) {
            this.quaternion.copy(e)
        },
        rotateOnAxis: function() {
            var e = new s;
            return function(t, i) {
                return e.setFromAxisAngle(t, i),
                this.quaternion.multiply(e),
                this
            }
        }(),
        rotateX: function() {
            var e = new c(1,0,0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateY: function() {
            var e = new c(0,1,0);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        rotateZ: function() {
            var e = new c(0,0,1);
            return function(t) {
                return this.rotateOnAxis(e, t)
            }
        }(),
        translateOnAxis: function() {
            var e = new c;
            return function(t, i) {
                return e.copy(t).applyQuaternion(this.quaternion),
                this.position.add(e.multiplyScalar(i)),
                this
            }
        }(),
        translateX: function() {
            var e = new c(1,0,0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateY: function() {
            var e = new c(0,1,0);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        translateZ: function() {
            var e = new c(0,0,1);
            return function(t) {
                return this.translateOnAxis(e, t)
            }
        }(),
        localToWorld: function(e) {
            return e.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var e = new h;
            return function(t) {
                return t.applyMatrix4(e.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var e = new h;
            return function(t) {
                e.lookAt(t, this.position, this.up),
                this.quaternion.setFromRotationMatrix(e)
            }
        }(),
        add: function(e) {
            if (arguments.length > 1) {
                for (var t = 0; t < arguments.length; t++)
                    this.add(arguments[t]);
                return this
            }
            return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
            this) : (e && e.isObject3D ? (null !== e.parent && e.parent.remove(e),
            e.parent = this,
            e.dispatchEvent({
                type: "added"
            }),
            this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
            this)
        },
        remove: function(e) {
            if (arguments.length > 1)
                for (var t = 0; t < arguments.length; t++)
                    this.remove(arguments[t]);
            var i = this.children.indexOf(e);
            -1 !== i && (e.parent = null,
            e.dispatchEvent({
                type: "removed"
            }),
            this.children.splice(i, 1))
        },
        getObjectById: function(e) {
            return this.getObjectByProperty("id", e)
        },
        getObjectByName: function(e) {
            return this.getObjectByProperty("name", e)
        },
        getObjectByProperty: function(e, t) {
            if (this[e] === t)
                return this;
            for (var i = 0, n = this.children.length; n > i; i++) {
                var r = this.children[i]
                  , a = r.getObjectByProperty(e, t);
                if (void 0 !== a)
                    return a
            }
            return void 0
        },
        getWorldPosition: function(e) {
            var t = e || new c;
            return this.updateMatrixWorld(!0),
            t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var e = new c
              , t = new c;
            return function(i) {
                var n = i || new s;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(e, n, t),
                n
            }
        }(),
        getWorldRotation: function() {
            var e = new s;
            return function(t) {
                var i = t || new oe;
                return this.getWorldQuaternion(e),
                i.setFromQuaternion(e, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var e = new c
              , t = new s;
            return function(i) {
                var n = i || new c;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(e, t, n),
                n
            }
        }(),
        getWorldDirection: function() {
            var e = new s;
            return function(t) {
                var i = t || new c;
                return this.getWorldQuaternion(e),
                i.set(0, 0, 1).applyQuaternion(e)
            }
        }(),
        raycast: function() {},
        traverse: function(e) {
            e(this);
            for (var t = this.children, i = 0, n = t.length; n > i; i++)
                t[i].traverse(e)
        },
        traverseVisible: function(e) {
            if (this.visible !== !1) {
                e(this);
                for (var t = this.children, i = 0, n = t.length; n > i; i++)
                    t[i].traverseVisible(e)
            }
        },
        traverseAncestors: function(e) {
            var t = this.parent;
            null !== t && (e(t),
            t.traverseAncestors(e))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(e) {
            this.matrixAutoUpdate === !0 && this.updateMatrix(),
            (this.matrixWorldNeedsUpdate === !0 || e === !0) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            e = !0);
            for (var t = this.children, i = 0, n = t.length; n > i; i++)
                t[i].updateMatrixWorld(e)
        },
        toJSON: function(e) {
            function t(e) {
                var t = [];
                for (var i in e) {
                    var n = e[i];
                    delete n.metadata,
                    t.push(n)
                }
                return t
            }
            var i = void 0 === e || "" === e
              , n = {};
            i && (e = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            },
            n.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var r = {};
            if (r.uuid = this.uuid,
            r.type = this.type,
            "" !== this.name && (r.name = this.name),
            "{}" !== JSON.stringify(this.userData) && (r.userData = this.userData),
            this.castShadow === !0 && (r.castShadow = !0),
            this.receiveShadow === !0 && (r.receiveShadow = !0),
            this.visible === !1 && (r.visible = !1),
            r.matrix = this.matrix.toArray(),
            void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)),
            r.geometry = this.geometry.uuid),
            void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)),
            r.material = this.material.uuid),
            this.children.length > 0) {
                r.children = [];
                for (var a = 0; a < this.children.length; a++)
                    r.children.push(this.children[a].toJSON(e).object)
            }
            if (i) {
                var o = t(e.geometries)
                  , s = t(e.materials)
                  , c = t(e.textures)
                  , h = t(e.images);
                o.length > 0 && (n.geometries = o),
                s.length > 0 && (n.materials = s),
                c.length > 0 && (n.textures = c),
                h.length > 0 && (n.images = h)
            }
            return n.object = r,
            n
        },
        clone: function(e) {
            return (new this.constructor).copy(this, e)
        },
        copy: function(e, t) {
            if (void 0 === t && (t = !0),
            this.name = e.name,
            this.up.copy(e.up),
            this.position.copy(e.position),
            this.quaternion.copy(e.quaternion),
            this.scale.copy(e.scale),
            this.matrix.copy(e.matrix),
            this.matrixWorld.copy(e.matrixWorld),
            this.matrixAutoUpdate = e.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
            this.visible = e.visible,
            this.castShadow = e.castShadow,
            this.receiveShadow = e.receiveShadow,
            this.frustumCulled = e.frustumCulled,
            this.renderOrder = e.renderOrder,
            this.userData = JSON.parse(JSON.stringify(e.userData)),
            t === !0)
                for (var i = 0; i < e.children.length; i++) {
                    var n = e.children[i];
                    this.add(n.clone())
                }
            return this
        }
    }),
    he.prototype = {
        constructor: he,
        set: function(e, t) {
            return this.start.copy(e),
            this.end.copy(t),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.start.copy(e.start),
            this.end.copy(e.end),
            this
        },
        getCenter: function(e) {
            var t = e || new c;
            return t.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(e) {
            var t = e || new c;
            return t.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(e, t) {
            var i = t || new c;
            return this.delta(i).multiplyScalar(e).add(this.start)
        },
        closestPointToPointParameter: function() {
            var e = new c
              , t = new c;
            return function(i, n) {
                e.subVectors(i, this.start),
                t.subVectors(this.end, this.start);
                var r = t.dot(t)
                  , a = t.dot(e)
                  , o = a / r;
                return n && (o = Jo.clamp(o, 0, 1)),
                o
            }
        }(),
        closestPointToPoint: function(e, t, i) {
            var n = this.closestPointToPointParameter(e, t)
              , r = i || new c;
            return this.delta(r).multiplyScalar(n).add(this.start)
        },
        applyMatrix4: function(e) {
            return this.start.applyMatrix4(e),
            this.end.applyMatrix4(e),
            this
        },
        equals: function(e) {
            return e.start.equals(this.start) && e.end.equals(this.end)
        }
    },
    le.normal = function() {
        var e = new c;
        return function(t, i, n, r) {
            var a = r || new c;
            a.subVectors(n, i),
            e.subVectors(t, i),
            a.cross(e);
            var o = a.lengthSq();
            return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
        }
    }(),
    le.barycoordFromPoint = function() {
        var e = new c
          , t = new c
          , i = new c;
        return function(n, r, a, o, s) {
            e.subVectors(o, r),
            t.subVectors(a, r),
            i.subVectors(n, r);
            var h = e.dot(e)
              , l = e.dot(t)
              , u = e.dot(i)
              , p = t.dot(t)
              , d = t.dot(i)
              , f = h * p - l * l
              , m = s || new c;
            if (0 === f)
                return m.set(-2, -1, -1);
            var g = 1 / f
              , v = (p * u - l * d) * g
              , y = (h * d - l * u) * g;
            return m.set(1 - v - y, y, v)
        }
    }(),
    le.containsPoint = function() {
        var e = new c;
        return function(t, i, n, r) {
            var a = le.barycoordFromPoint(t, i, n, r, e);
            return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
        }
    }(),
    le.prototype = {
        constructor: le,
        set: function(e, t, i) {
            return this.a.copy(e),
            this.b.copy(t),
            this.c.copy(i),
            this
        },
        setFromPointsAndIndices: function(e, t, i, n) {
            return this.a.copy(e[t]),
            this.b.copy(e[i]),
            this.c.copy(e[n]),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.a.copy(e.a),
            this.b.copy(e.b),
            this.c.copy(e.c),
            this
        },
        area: function() {
            var e = new c
              , t = new c;
            return function() {
                return e.subVectors(this.c, this.b),
                t.subVectors(this.a, this.b),
                .5 * e.cross(t).length()
            }
        }(),
        midpoint: function(e) {
            var t = e || new c;
            return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(e) {
            return le.normal(this.a, this.b, this.c, e)
        },
        plane: function(e) {
            var t = e || new ie;
            return t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(e, t) {
            return le.barycoordFromPoint(e, this.a, this.b, this.c, t)
        },
        containsPoint: function(e) {
            return le.containsPoint(e, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var e, t, i, n;
            return function(r, a) {
                void 0 === e && (e = new ie,
                t = [new he, new he, new he],
                i = new c,
                n = new c);
                var o = a || new c
                  , s = 1 / 0;
                if (e.setFromCoplanarPoints(this.a, this.b, this.c),
                e.projectPoint(r, i),
                this.containsPoint(i) === !0)
                    o.copy(i);
                else {
                    t[0].set(this.a, this.b),
                    t[1].set(this.b, this.c),
                    t[2].set(this.c, this.a);
                    for (var h = 0; h < t.length; h++) {
                        t[h].closestPointToPoint(i, !0, n);
                        var l = i.distanceToSquared(n);
                        s > l && (s = l,
                        o.copy(n))
                    }
                }
                return o
            }
        }(),
        equals: function(e) {
            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
        }
    },
    ue.prototype = {
        constructor: ue,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            this.a = e.a,
            this.b = e.b,
            this.c = e.c,
            this.normal.copy(e.normal),
            this.color.copy(e.color),
            this.materialIndex = e.materialIndex;
            for (var t = 0, i = e.vertexNormals.length; i > t; t++)
                this.vertexNormals[t] = e.vertexNormals[t].clone();
            for (var t = 0, i = e.vertexColors.length; i > t; t++)
                this.vertexColors[t] = e.vertexColors[t].clone();
            return this
        }
    },
    pe.prototype = Object.create(J.prototype),
    pe.prototype.constructor = pe,
    pe.prototype.isMeshBasicMaterial = !0,
    pe.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this
    }
    ,
    de.prototype = {
        constructor: de,
        isBufferAttribute: !0,
        set needsUpdate(e) {
            e === !0 && this.version++
        },
        setArray: function(e) {
            if (Array.isArray(e))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== e ? e.length / this.itemSize : 0,
            this.array = e
        },
        setDynamic: function(e) {
            return this.dynamic = e,
            this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array),
            this.itemSize = e.itemSize,
            this.count = e.count,
            this.normalized = e.normalized,
            this.dynamic = e.dynamic,
            this
        },
        copyAt: function(e, t, i) {
            e *= this.itemSize,
            i *= t.itemSize;
            for (var n = 0, r = this.itemSize; r > n; n++)
                this.array[e + n] = t.array[i + n];
            return this
        },
        copyArray: function(e) {
            return this.array.set(e),
            this
        },
        copyColorsArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; r > n; n++) {
                var a = e[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n),
                a = new W),
                t[i++] = a.r,
                t[i++] = a.g,
                t[i++] = a.b
            }
            return this
        },
        copyIndicesArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; r > n; n++) {
                var a = e[n];
                t[i++] = a.a,
                t[i++] = a.b,
                t[i++] = a.c
            }
            return this
        },
        copyVector2sArray: function(e) {
            for (var t = this.array, n = 0, r = 0, a = e.length; a > r; r++) {
                var o = e[r];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r),
                o = new i),
                t[n++] = o.x,
                t[n++] = o.y
            }
            return this
        },
        copyVector3sArray: function(e) {
            for (var t = this.array, i = 0, n = 0, r = e.length; r > n; n++) {
                var a = e[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n),
                a = new c),
                t[i++] = a.x,
                t[i++] = a.y,
                t[i++] = a.z
            }
            return this
        },
        copyVector4sArray: function(e) {
            for (var t = this.array, i = 0, n = 0, a = e.length; a > n; n++) {
                var o = e[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n),
                o = new r),
                t[i++] = o.x,
                t[i++] = o.y,
                t[i++] = o.z,
                t[i++] = o.w
            }
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0),
            this.array.set(e, t),
            this
        },
        getX: function(e) {
            return this.array[e * this.itemSize]
        },
        setX: function(e, t) {
            return this.array[e * this.itemSize] = t,
            this
        },
        getY: function(e) {
            return this.array[e * this.itemSize + 1]
        },
        setY: function(e, t) {
            return this.array[e * this.itemSize + 1] = t,
            this
        },
        getZ: function(e) {
            return this.array[e * this.itemSize + 2]
        },
        setZ: function(e, t) {
            return this.array[e * this.itemSize + 2] = t,
            this
        },
        getW: function(e) {
            return this.array[e * this.itemSize + 3]
        },
        setW: function(e, t) {
            return this.array[e * this.itemSize + 3] = t,
            this
        },
        setXY: function(e, t, i) {
            return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = i,
            this
        },
        setXYZ: function(e, t, i, n) {
            return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = i,
            this.array[e + 2] = n,
            this
        },
        setXYZW: function(e, t, i, n, r) {
            return e *= this.itemSize,
            this.array[e + 0] = t,
            this.array[e + 1] = i,
            this.array[e + 2] = n,
            this.array[e + 3] = r,
            this
        },
        onUpload: function(e) {
            return this.onUploadCallback = e,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    },
    fe.prototype = Object.create(de.prototype),
    fe.prototype.constructor = fe,
    me.prototype = Object.create(de.prototype),
    me.prototype.constructor = me,
    ge.prototype = Object.create(de.prototype),
    ge.prototype.constructor = ge,
    ve.prototype = Object.create(de.prototype),
    ve.prototype.constructor = ve,
    ye.prototype = Object.create(de.prototype),
    ye.prototype.constructor = ye,
    xe.prototype = Object.create(de.prototype),
    xe.prototype.constructor = xe,
    be.prototype = Object.create(de.prototype),
    be.prototype.constructor = be,
    _e.prototype = Object.create(de.prototype),
    _e.prototype.constructor = _e,
    we.prototype = Object.create(de.prototype),
    we.prototype.constructor = we,
    Object.assign(Me.prototype, {
        computeGroups: function(e) {
            for (var t, i, n = [], r = e.faces, a = 0; a < r.length; a++) {
                var o = r[a];
                o.materialIndex !== i && (i = o.materialIndex,
                void 0 !== t && (t.count = 3 * a - t.start,
                n.push(t)),
                t = {
                    start: 3 * a,
                    materialIndex: i
                })
            }
            void 0 !== t && (t.count = 3 * a - t.start,
            n.push(t)),
            this.groups = n
        },
        fromGeometry: function(e) {
            var t, n = e.faces, r = e.vertices, a = e.faceVertexUvs, o = a[0] && a[0].length > 0, s = a[1] && a[1].length > 0, c = e.morphTargets, h = c.length;
            if (h > 0) {
                t = [];
                for (var l = 0; h > l; l++)
                    t[l] = [];
                this.morphTargets.position = t
            }
            var u, p = e.morphNormals, d = p.length;
            if (d > 0) {
                u = [];
                for (var l = 0; d > l; l++)
                    u[l] = [];
                this.morphTargets.normal = u
            }
            for (var f = e.skinIndices, m = e.skinWeights, g = f.length === r.length, v = m.length === r.length, l = 0; l < n.length; l++) {
                var y = n[l];
                this.vertices.push(r[y.a], r[y.b], r[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length)
                    this.normals.push(x[0], x[1], x[2]);
                else {
                    var b = y.normal;
                    this.normals.push(b, b, b)
                }
                var _ = y.vertexColors;
                if (3 === _.length)
                    this.colors.push(_[0], _[1], _[2]);
                else {
                    var w = y.color;
                    this.colors.push(w, w, w)
                }
                if (o === !0) {
                    var M = a[0][l];
                    void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
                    this.uvs.push(new i, new i, new i))
                }
                if (s === !0) {
                    var M = a[1][l];
                    void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
                    this.uvs2.push(new i, new i, new i))
                }
                for (var E = 0; h > E; E++) {
                    var T = c[E].vertices;
                    t[E].push(T[y.a], T[y.b], T[y.c])
                }
                for (var E = 0; d > E; E++) {
                    var S = p[E].vertexNormals[l];
                    u[E].push(S.a, S.b, S.c)
                }
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]),
                v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(e),
            this.verticesNeedUpdate = e.verticesNeedUpdate,
            this.normalsNeedUpdate = e.normalsNeedUpdate,
            this.colorsNeedUpdate = e.colorsNeedUpdate,
            this.uvsNeedUpdate = e.uvsNeedUpdate,
            this.groupsNeedUpdate = e.groupsNeedUpdate,
            this
        }
    }),
    Object.assign(Ee.prototype, t.prototype, {
        isGeometry: !0,
        applyMatrix: function(e) {
            for (var t = (new te).getNormalMatrix(e), i = 0, n = this.vertices.length; n > i; i++) {
                var r = this.vertices[i];
                r.applyMatrix4(e)
            }
            for (var i = 0, n = this.faces.length; n > i; i++) {
                var a = this.faces[i];
                a.normal.applyMatrix3(t).normalize();
                for (var o = 0, s = a.vertexNormals.length; s > o; o++)
                    a.vertexNormals[o].applyMatrix3(t).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this.verticesNeedUpdate = !0,
            this.normalsNeedUpdate = !0,
            this
        },
        rotateX: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.makeRotationX(t),
                this.applyMatrix(e),
                this
            }
        }(),
        rotateY: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.makeRotationY(t),
                this.applyMatrix(e),
                this
            }
        }(),
        rotateZ: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.makeRotationZ(t),
                this.applyMatrix(e),
                this
            }
        }(),
        translate: function() {
            var e;
            return function(t, i, n) {
                return void 0 === e && (e = new h),
                e.makeTranslation(t, i, n),
                this.applyMatrix(e),
                this
            }
        }(),
        scale: function() {
            var e;
            return function(t, i, n) {
                return void 0 === e && (e = new h),
                e.makeScale(t, i, n),
                this.applyMatrix(e),
                this
            }
        }(),
        lookAt: function() {
            var e;
            return function(t) {
                void 0 === e && (e = new ce),
                e.lookAt(t),
                e.updateMatrix(),
                this.applyMatrix(e.matrix)
            }
        }(),
        fromBufferGeometry: function(e) {
            function t(e, t, i, r) {
                var a = void 0 !== s ? [p[e].clone(), p[t].clone(), p[i].clone()] : []
                  , o = void 0 !== h ? [n.colors[e].clone(), n.colors[t].clone(), n.colors[i].clone()] : []
                  , c = new ue(e,t,i,a,o,r);
                n.faces.push(c),
                void 0 !== l && n.faceVertexUvs[0].push([d[e].clone(), d[t].clone(), d[i].clone()]),
                void 0 !== u && n.faceVertexUvs[1].push([f[e].clone(), f[t].clone(), f[i].clone()])
            }
            var n = this
              , r = null !== e.index ? e.index.array : void 0
              , a = e.attributes
              , o = a.position.array
              , s = void 0 !== a.normal ? a.normal.array : void 0
              , h = void 0 !== a.color ? a.color.array : void 0
              , l = void 0 !== a.uv ? a.uv.array : void 0
              , u = void 0 !== a.uv2 ? a.uv2.array : void 0;
            void 0 !== u && (this.faceVertexUvs[1] = []);
            for (var p = [], d = [], f = [], m = 0, g = 0; m < o.length; m += 3,
            g += 2)
                n.vertices.push(new c(o[m],o[m + 1],o[m + 2])),
                void 0 !== s && p.push(new c(s[m],s[m + 1],s[m + 2])),
                void 0 !== h && n.colors.push(new W(h[m],h[m + 1],h[m + 2])),
                void 0 !== l && d.push(new i(l[g],l[g + 1])),
                void 0 !== u && f.push(new i(u[g],u[g + 1]));
            if (void 0 !== r) {
                var v = e.groups;
                if (v.length > 0)
                    for (var m = 0; m < v.length; m++)
                        for (var y = v[m], x = y.start, b = y.count, g = x, _ = x + b; _ > g; g += 3)
                            t(r[g], r[g + 1], r[g + 2], y.materialIndex);
                else
                    for (var m = 0; m < r.length; m += 3)
                        t(r[m], r[m + 1], r[m + 2])
            } else
                for (var m = 0; m < o.length / 3; m += 3)
                    t(m, m + 1, m + 2);
            return this.computeFaceNormals(),
            null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
            null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
            this
        },
        center: function() {
            this.computeBoundingBox();
            var e = this.boundingBox.getCenter().negate();
            return this.translate(e.x, e.y, e.z),
            e
        },
        normalize: function() {
            this.computeBoundingSphere();
            var e = this.boundingSphere.center
              , t = this.boundingSphere.radius
              , i = 0 === t ? 1 : 1 / t
              , n = new h;
            return n.set(i, 0, 0, -i * e.x, 0, i, 0, -i * e.y, 0, 0, i, -i * e.z, 0, 0, 0, 1),
            this.applyMatrix(n),
            this
        },
        computeFaceNormals: function() {
            for (var e = new c, t = new c, i = 0, n = this.faces.length; n > i; i++) {
                var r = this.faces[i]
                  , a = this.vertices[r.a]
                  , o = this.vertices[r.b]
                  , s = this.vertices[r.c];
                e.subVectors(s, o),
                t.subVectors(a, o),
                e.cross(t),
                e.normalize(),
                r.normal.copy(e)
            }
        },
        computeVertexNormals: function(e) {
            void 0 === e && (e = !0);
            var t, i, n, r, a, o;
            for (o = new Array(this.vertices.length),
            t = 0,
            i = this.vertices.length; i > t; t++)
                o[t] = new c;
            if (e) {
                var s, h, l, u = new c, p = new c;
                for (n = 0,
                r = this.faces.length; r > n; n++)
                    a = this.faces[n],
                    s = this.vertices[a.a],
                    h = this.vertices[a.b],
                    l = this.vertices[a.c],
                    u.subVectors(l, h),
                    p.subVectors(s, h),
                    u.cross(p),
                    o[a.a].add(u),
                    o[a.b].add(u),
                    o[a.c].add(u)
            } else
                for (this.computeFaceNormals(),
                n = 0,
                r = this.faces.length; r > n; n++)
                    a = this.faces[n],
                    o[a.a].add(a.normal),
                    o[a.b].add(a.normal),
                    o[a.c].add(a.normal);
            for (t = 0,
            i = this.vertices.length; i > t; t++)
                o[t].normalize();
            for (n = 0,
            r = this.faces.length; r > n; n++) {
                a = this.faces[n];
                var d = a.vertexNormals;
                3 === d.length ? (d[0].copy(o[a.a]),
                d[1].copy(o[a.b]),
                d[2].copy(o[a.c])) : (d[0] = o[a.a].clone(),
                d[1] = o[a.b].clone(),
                d[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var e, t, i;
            for (this.computeFaceNormals(),
            e = 0,
            t = this.faces.length; t > e; e++) {
                i = this.faces[e];
                var n = i.vertexNormals;
                3 === n.length ? (n[0].copy(i.normal),
                n[1].copy(i.normal),
                n[2].copy(i.normal)) : (n[0] = i.normal.clone(),
                n[1] = i.normal.clone(),
                n[2] = i.normal.clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var e, t, i, n, r;
            for (i = 0,
            n = this.faces.length; n > i; i++)
                for (r = this.faces[i],
                r.__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(),
                r.__originalVertexNormals || (r.__originalVertexNormals = []),
                e = 0,
                t = r.vertexNormals.length; t > e; e++)
                    r.__originalVertexNormals[e] ? r.__originalVertexNormals[e].copy(r.vertexNormals[e]) : r.__originalVertexNormals[e] = r.vertexNormals[e].clone();
            var a = new Ee;
            for (a.faces = this.faces,
            e = 0,
            t = this.morphTargets.length; t > e; e++) {
                if (!this.morphNormals[e]) {
                    this.morphNormals[e] = {},
                    this.morphNormals[e].faceNormals = [],
                    this.morphNormals[e].vertexNormals = [];
                    var o, s, h = this.morphNormals[e].faceNormals, l = this.morphNormals[e].vertexNormals;
                    for (i = 0,
                    n = this.faces.length; n > i; i++)
                        o = new c,
                        s = {
                            a: new c,
                            b: new c,
                            c: new c
                        },
                        h.push(o),
                        l.push(s)
                }
                var u = this.morphNormals[e];
                a.vertices = this.morphTargets[e].vertices,
                a.computeFaceNormals(),
                a.computeVertexNormals();
                var o, s;
                for (i = 0,
                n = this.faces.length; n > i; i++)
                    r = this.faces[i],
                    o = u.faceNormals[i],
                    s = u.vertexNormals[i],
                    o.copy(r.normal),
                    s.a.copy(r.vertexNormals[0]),
                    s.b.copy(r.vertexNormals[1]),
                    s.c.copy(r.vertexNormals[2])
            }
            for (i = 0,
            n = this.faces.length; n > i; i++)
                r = this.faces[i],
                r.normal = r.__originalFaceNormal,
                r.vertexNormals = r.__originalVertexNormals
        },
        computeLineDistances: function() {
            for (var e = 0, t = this.vertices, i = 0, n = t.length; n > i; i++)
                i > 0 && (e += t[i].distanceTo(t[i - 1])),
                this.lineDistances[i] = e
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new $),
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new ee),
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(e, t, i) {
            if ((e && e.isGeometry) === !1)
                return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
            var n, r = this.vertices.length, a = this.vertices, o = e.vertices, s = this.faces, c = e.faces, h = this.faceVertexUvs[0], l = e.faceVertexUvs[0], u = this.colors, p = e.colors;
            void 0 === i && (i = 0),
            void 0 !== t && (n = (new te).getNormalMatrix(t));
            for (var d = 0, f = o.length; f > d; d++) {
                var m = o[d]
                  , g = m.clone();
                void 0 !== t && g.applyMatrix4(t),
                a.push(g)
            }
            for (var d = 0, f = p.length; f > d; d++)
                u.push(p[d].clone());
            for (d = 0,
            f = c.length; f > d; d++) {
                var v, y, x, b = c[d], _ = b.vertexNormals, w = b.vertexColors;
                v = new ue(b.a + r,b.b + r,b.c + r),
                v.normal.copy(b.normal),
                void 0 !== n && v.normal.applyMatrix3(n).normalize();
                for (var M = 0, E = _.length; E > M; M++)
                    y = _[M].clone(),
                    void 0 !== n && y.applyMatrix3(n).normalize(),
                    v.vertexNormals.push(y);
                v.color.copy(b.color);
                for (var M = 0, E = w.length; E > M; M++)
                    x = w[M],
                    v.vertexColors.push(x.clone());
                v.materialIndex = b.materialIndex + i,
                s.push(v)
            }
            for (d = 0,
            f = l.length; f > d; d++) {
                var T = l[d]
                  , S = [];
                if (void 0 !== T) {
                    for (var M = 0, E = T.length; E > M; M++)
                        S.push(T[M].clone());
                    h.push(S)
                }
            }
        },
        mergeMesh: function(e) {
            return (e && e.isMesh) === !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(),
            void this.merge(e.geometry, e.matrix))
        },
        mergeVertices: function() {
            var e, t, i, n, r, a, o, s, c = {}, h = [], l = [], u = 4, p = Math.pow(10, u);
            for (i = 0,
            n = this.vertices.length; n > i; i++)
                e = this.vertices[i],
                t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p),
                void 0 === c[t] ? (c[t] = i,
                h.push(this.vertices[i]),
                l[i] = h.length - 1) : l[i] = l[c[t]];
            var d = [];
            for (i = 0,
            n = this.faces.length; n > i; i++) {
                r = this.faces[i],
                r.a = l[r.a],
                r.b = l[r.b],
                r.c = l[r.c],
                a = [r.a, r.b, r.c];
                for (var f = -1, m = 0; 3 > m; m++)
                    if (a[m] === a[(m + 1) % 3]) {
                        f = m,
                        d.push(i);
                        break
                    }
            }
            for (i = d.length - 1; i >= 0; i--) {
                var g = d[i];
                for (this.faces.splice(g, 1),
                o = 0,
                s = this.faceVertexUvs.length; s > o; o++)
                    this.faceVertexUvs[o].splice(g, 1)
            }
            var v = this.vertices.length - h.length;
            return this.vertices = h,
            v
        },
        sortFacesByMaterialIndex: function() {
            function e(e, t) {
                return e.materialIndex - t.materialIndex
            }
            for (var t = this.faces, i = t.length, n = 0; i > n; n++)
                t[n]._id = n;
            t.sort(e);
            var r, a, o = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
            o && o.length === i && (r = []),
            s && s.length === i && (a = []);
            for (var n = 0; i > n; n++) {
                var c = t[n]._id;
                r && r.push(o[c]),
                a && a.push(s[c])
            }
            r && (this.faceVertexUvs[0] = r),
            a && (this.faceVertexUvs[1] = a)
        },
        toJSON: function() {
            function e(e, t, i) {
                return i ? e | 1 << t : e & ~(1 << t)
            }
            function t(e) {
                var t = e.x.toString() + e.y.toString() + e.z.toString();
                return void 0 !== p[t] ? p[t] : (p[t] = u.length / 3,
                u.push(e.x, e.y, e.z),
                p[t])
            }
            function i(e) {
                var t = e.r.toString() + e.g.toString() + e.b.toString();
                return void 0 !== f[t] ? f[t] : (f[t] = d.length,
                d.push(e.getHex()),
                f[t])
            }
            function n(e) {
                var t = e.x.toString() + e.y.toString();
                return void 0 !== g[t] ? g[t] : (g[t] = m.length / 2,
                m.push(e.x, e.y),
                g[t])
            }
            var r = {
                metadata: {
                    version: 4.4,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (r.uuid = this.uuid,
            r.type = this.type,
            "" !== this.name && (r.name = this.name),
            void 0 !== this.parameters) {
                var a = this.parameters;
                for (var o in a)
                    void 0 !== a[o] && (r[o] = a[o]);
                return r
            }
            for (var s = [], c = 0; c < this.vertices.length; c++) {
                var h = this.vertices[c];
                s.push(h.x, h.y, h.z)
            }
            for (var l = [], u = [], p = {}, d = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
                var v = this.faces[c]
                  , y = !0
                  , x = !1
                  , b = void 0 !== this.faceVertexUvs[0][c]
                  , _ = v.normal.length() > 0
                  , w = v.vertexNormals.length > 0
                  , M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b
                  , E = v.vertexColors.length > 0
                  , T = 0;
                if (T = e(T, 0, 0),
                T = e(T, 1, y),
                T = e(T, 2, x),
                T = e(T, 3, b),
                T = e(T, 4, _),
                T = e(T, 5, w),
                T = e(T, 6, M),
                T = e(T, 7, E),
                l.push(T),
                l.push(v.a, v.b, v.c),
                l.push(v.materialIndex),
                b) {
                    var S = this.faceVertexUvs[0][c];
                    l.push(n(S[0]), n(S[1]), n(S[2]))
                }
                if (_ && l.push(t(v.normal)),
                w) {
                    var A = v.vertexNormals;
                    l.push(t(A[0]), t(A[1]), t(A[2]))
                }
                if (M && l.push(i(v.color)),
                E) {
                    var L = v.vertexColors;
                    l.push(i(L[0]), i(L[1]), i(L[2]))
                }
            }
            return r.data = {},
            r.data.vertices = s,
            r.data.normals = u,
            d.length > 0 && (r.data.colors = d),
            m.length > 0 && (r.data.uvs = [m]),
            r.data.faces = l,
            r
        },
        clone: function() {
            return (new Ee).copy(this)
        },
        copy: function(e) {
            this.vertices = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.colors = [];
            for (var t = e.vertices, i = 0, n = t.length; n > i; i++)
                this.vertices.push(t[i].clone());
            for (var r = e.colors, i = 0, n = r.length; n > i; i++)
                this.colors.push(r[i].clone());
            for (var a = e.faces, i = 0, n = a.length; n > i; i++)
                this.faces.push(a[i].clone());
            for (var i = 0, n = e.faceVertexUvs.length; n > i; i++) {
                var o = e.faceVertexUvs[i];
                void 0 === this.faceVertexUvs[i] && (this.faceVertexUvs[i] = []);
                for (var s = 0, c = o.length; c > s; s++) {
                    for (var h = o[s], l = [], u = 0, p = h.length; p > u; u++) {
                        var d = h[u];
                        l.push(d.clone())
                    }
                    this.faceVertexUvs[i].push(l)
                }
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var sh = 0;
    Object.assign(Se.prototype, t.prototype, {
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(e) {
            this.index = e
        },
        addAttribute: function(e, t) {
            return (t && t.isBufferAttribute) === !1 && (t && t.isInterleavedBufferAttribute) === !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            void this.addAttribute(e, new de(arguments[1],arguments[2]))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            void this.setIndex(t)) : (this.attributes[e] = t,
            this)
        },
        getAttribute: function(e) {
            return this.attributes[e]
        },
        removeAttribute: function(e) {
            return delete this.attributes[e],
            this
        },
        addGroup: function(e, t, i) {
            this.groups.push({
                start: e,
                count: t,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(e, t) {
            this.drawRange.start = e,
            this.drawRange.count = t
        },
        applyMatrix: function(e) {
            var t = this.attributes.position;
            void 0 !== t && (e.applyToVector3Array(t.array),
            t.needsUpdate = !0);
            var i = this.attributes.normal;
            if (void 0 !== i) {
                var n = (new te).getNormalMatrix(e);
                n.applyToVector3Array(i.array),
                i.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.makeRotationX(t),
                this.applyMatrix(e),
                this
            }
        }(),
        rotateY: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.makeRotationY(t),
                this.applyMatrix(e),
                this
            }
        }(),
        rotateZ: function() {
            var e;
            return function(t) {
                return void 0 === e && (e = new h),
                e.makeRotationZ(t),
                this.applyMatrix(e),
                this
            }
        }(),
        translate: function() {
            var e;
            return function(t, i, n) {
                return void 0 === e && (e = new h),
                e.makeTranslation(t, i, n),
                this.applyMatrix(e),
                this
            }
        }(),
        scale: function() {
            var e;
            return function(t, i, n) {
                return void 0 === e && (e = new h),
                e.makeScale(t, i, n),
                this.applyMatrix(e),
                this
            }
        }(),
        lookAt: function() {
            var e;
            return function(t) {
                void 0 === e && (e = new ce),
                e.lookAt(t),
                e.updateMatrix(),
                this.applyMatrix(e.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var e = this.boundingBox.getCenter().negate();
            return this.translate(e.x, e.y, e.z),
            e
        },
        setFromObject: function(e) {
            var t = e.geometry;
            if (e.isPoints || e.isLine) {
                var i = new _e(3 * t.vertices.length,3)
                  , n = new _e(3 * t.colors.length,3);
                if (this.addAttribute("position", i.copyVector3sArray(t.vertices)),
                this.addAttribute("color", n.copyColorsArray(t.colors)),
                t.lineDistances && t.lineDistances.length === t.vertices.length) {
                    var r = new _e(t.lineDistances.length,1);
                    this.addAttribute("lineDistance", r.copyArray(t.lineDistances))
                }
                null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
                null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
            } else
                e.isMesh && t && t.isGeometry && this.fromGeometry(t);
            return this
        },
        updateFromObject: function(e) {
            var t = e.geometry;
            if (e.isMesh) {
                var i = t.__directGeometry;
                if (t.elementsNeedUpdate === !0 && (i = void 0,
                t.elementsNeedUpdate = !1),
                void 0 === i)
                    return this.fromGeometry(t);
                i.verticesNeedUpdate = t.verticesNeedUpdate,
                i.normalsNeedUpdate = t.normalsNeedUpdate,
                i.colorsNeedUpdate = t.colorsNeedUpdate,
                i.uvsNeedUpdate = t.uvsNeedUpdate,
                i.groupsNeedUpdate = t.groupsNeedUpdate,
                t.verticesNeedUpdate = !1,
                t.normalsNeedUpdate = !1,
                t.colorsNeedUpdate = !1,
                t.uvsNeedUpdate = !1,
                t.groupsNeedUpdate = !1,
                t = i
            }
            var n;
            return t.verticesNeedUpdate === !0 && (n = this.attributes.position,
            void 0 !== n && (n.copyVector3sArray(t.vertices),
            n.needsUpdate = !0),
            t.verticesNeedUpdate = !1),
            t.normalsNeedUpdate === !0 && (n = this.attributes.normal,
            void 0 !== n && (n.copyVector3sArray(t.normals),
            n.needsUpdate = !0),
            t.normalsNeedUpdate = !1),
            t.colorsNeedUpdate === !0 && (n = this.attributes.color,
            void 0 !== n && (n.copyColorsArray(t.colors),
            n.needsUpdate = !0),
            t.colorsNeedUpdate = !1),
            t.uvsNeedUpdate && (n = this.attributes.uv,
            void 0 !== n && (n.copyVector2sArray(t.uvs),
            n.needsUpdate = !0),
            t.uvsNeedUpdate = !1),
            t.lineDistancesNeedUpdate && (n = this.attributes.lineDistance,
            void 0 !== n && (n.copyArray(t.lineDistances),
            n.needsUpdate = !0),
            t.lineDistancesNeedUpdate = !1),
            t.groupsNeedUpdate && (t.computeGroups(e.geometry),
            this.groups = t.groups,
            t.groupsNeedUpdate = !1),
            this
        },
        fromGeometry: function(e) {
            return e.__directGeometry = (new Me).fromGeometry(e),
            this.fromDirectGeometry(e.__directGeometry)
        },
        fromDirectGeometry: function(e) {
            var t = new Float32Array(3 * e.vertices.length);
            if (this.addAttribute("position", new de(t,3).copyVector3sArray(e.vertices)),
            e.normals.length > 0) {
                var i = new Float32Array(3 * e.normals.length);
                this.addAttribute("normal", new de(i,3).copyVector3sArray(e.normals))
            }
            if (e.colors.length > 0) {
                var n = new Float32Array(3 * e.colors.length);
                this.addAttribute("color", new de(n,3).copyColorsArray(e.colors))
            }
            if (e.uvs.length > 0) {
                var r = new Float32Array(2 * e.uvs.length);
                this.addAttribute("uv", new de(r,2).copyVector2sArray(e.uvs))
            }
            if (e.uvs2.length > 0) {
                var a = new Float32Array(2 * e.uvs2.length);
                this.addAttribute("uv2", new de(a,2).copyVector2sArray(e.uvs2))
            }
            if (e.indices.length > 0) {
                var o = e.vertices.length > 65535 ? Uint32Array : Uint16Array
                  , s = new o(3 * e.indices.length);
                this.setIndex(new de(s,1).copyIndicesArray(e.indices))
            }
            this.groups = e.groups;
            for (var c in e.morphTargets) {
                for (var h = [], l = e.morphTargets[c], u = 0, p = l.length; p > u; u++) {
                    var d = l[u]
                      , f = new _e(3 * d.length,3);
                    h.push(f.copyVector3sArray(d))
                }
                this.morphAttributes[c] = h
            }
            if (e.skinIndices.length > 0) {
                var m = new _e(4 * e.skinIndices.length,4);
                this.addAttribute("skinIndex", m.copyVector4sArray(e.skinIndices))
            }
            if (e.skinWeights.length > 0) {
                var g = new _e(4 * e.skinWeights.length,4);
                this.addAttribute("skinWeight", g.copyVector4sArray(e.skinWeights))
            }
            return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
            null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
            this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new $);
            var e = this.attributes.position.array;
            void 0 !== e ? this.boundingBox.setFromArray(e) : this.boundingBox.makeEmpty(),
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var e = new $
              , t = new c;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new ee);
                var i = this.attributes.position;
                if (i) {
                    var n = i.array
                      , r = this.boundingSphere.center;
                    e.setFromArray(n),
                    e.getCenter(r);
                    for (var a = 0, o = 0, s = n.length; s > o; o += 3)
                        t.fromArray(n, o),
                        a = Math.max(a, r.distanceToSquared(t));
                    this.boundingSphere.radius = Math.sqrt(a),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var e = this.index
              , t = this.attributes
              , i = this.groups;
            if (t.position) {
                var n = t.position.array;
                if (void 0 === t.normal)
                    this.addAttribute("normal", new de(new Float32Array(n.length),3));
                else
                    for (var r = t.normal.array, a = 0, o = r.length; o > a; a++)
                        r[a] = 0;
                var s, h, l, u = t.normal.array, p = new c, d = new c, f = new c, m = new c, g = new c;
                if (e) {
                    var v = e.array;
                    0 === i.length && this.addGroup(0, v.length);
                    for (var y = 0, x = i.length; x > y; ++y)
                        for (var b = i[y], _ = b.start, w = b.count, a = _, o = _ + w; o > a; a += 3)
                            s = 3 * v[a + 0],
                            h = 3 * v[a + 1],
                            l = 3 * v[a + 2],
                            p.fromArray(n, s),
                            d.fromArray(n, h),
                            f.fromArray(n, l),
                            m.subVectors(f, d),
                            g.subVectors(p, d),
                            m.cross(g),
                            u[s] += m.x,
                            u[s + 1] += m.y,
                            u[s + 2] += m.z,
                            u[h] += m.x,
                            u[h + 1] += m.y,
                            u[h + 2] += m.z,
                            u[l] += m.x,
                            u[l + 1] += m.y,
                            u[l + 2] += m.z
                } else
                    for (var a = 0, o = n.length; o > a; a += 9)
                        p.fromArray(n, a),
                        d.fromArray(n, a + 3),
                        f.fromArray(n, a + 6),
                        m.subVectors(f, d),
                        g.subVectors(p, d),
                        m.cross(g),
                        u[a] = m.x,
                        u[a + 1] = m.y,
                        u[a + 2] = m.z,
                        u[a + 3] = m.x,
                        u[a + 4] = m.y,
                        u[a + 5] = m.z,
                        u[a + 6] = m.x,
                        u[a + 7] = m.y,
                        u[a + 8] = m.z;
                this.normalizeNormals(),
                t.normal.needsUpdate = !0
            }
        },
        merge: function(e, t) {
            if ((e && e.isBufferGeometry) === !1)
                return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
            void 0 === t && (t = 0);
            var i = this.attributes;
            for (var n in i)
                if (void 0 !== e.attributes[n])
                    for (var r = i[n], a = r.array, o = e.attributes[n], s = o.array, c = o.itemSize, h = 0, l = c * t; h < s.length; h++,
                    l++)
                        a[l] = s[h];
            return this
        },
        normalizeNormals: function() {
            for (var e, t, i, n, r = this.attributes.normal.array, a = 0, o = r.length; o > a; a += 3)
                e = r[a],
                t = r[a + 1],
                i = r[a + 2],
                n = 1 / Math.sqrt(e * e + t * t + i * i),
                r[a] *= n,
                r[a + 1] *= n,
                r[a + 2] *= n
        },
        toNonIndexed: function() {
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var e = new Se
              , t = this.index.array
              , i = this.attributes;
            for (var n in i) {
                for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(t.length * o), c = 0, h = 0, l = 0, u = t.length; u > l; l++) {
                    c = t[l] * o;
                    for (var p = 0; o > p; p++)
                        s[h++] = a[c++]
                }
                e.addAttribute(n, new de(s,o))
            }
            return e
        },
        toJSON: function() {
            var e = {
                metadata: {
                    version: 4.4,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (e.uuid = this.uuid,
            e.type = this.type,
            "" !== this.name && (e.name = this.name),
            void 0 !== this.parameters) {
                var t = this.parameters;
                for (var i in t)
                    void 0 !== t[i] && (e[i] = t[i]);
                return e
            }
            e.data = {
                attributes: {}
            };
            var n = this.index;
            if (null !== n) {
                var r = Array.prototype.slice.call(n.array);
                e.data.index = {
                    type: n.array.constructor.name,
                    array: r
                }
            }
            var a = this.attributes;
            for (var i in a) {
                var o = a[i]
                  , r = Array.prototype.slice.call(o.array);
                e.data.attributes[i] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: r,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (e.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }),
            e
        },
        clone: function() {
            return (new Se).copy(this)
        },
        copy: function(e) {
            var t = e.index;
            null !== t && this.setIndex(t.clone());
            var i = e.attributes;
            for (var n in i) {
                var r = i[n];
                this.addAttribute(n, r.clone())
            }
            for (var a = e.groups, o = 0, s = a.length; s > o; o++) {
                var c = a[o];
                this.addGroup(c.start, c.count, c.materialIndex)
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Se.MaxIndex = 65535,
    Ae.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: Ae,
        isMesh: !0,
        setDrawMode: function(e) {
            this.drawMode = e
        },
        copy: function(e) {
            return ce.prototype.copy.call(this, e),
            this.drawMode = e.drawMode,
            this
        },
        updateMorphTargets: function() {
            var e = this.geometry.morphTargets;
            if (void 0 !== e && e.length > 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (var t = 0, i = e.length; i > t; t++)
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[e[t].name] = t
            }
        },
        raycast: function() {
            function e(e, t, i, n, r, a, o) {
                return le.barycoordFromPoint(e, t, i, n, y),
                r.multiplyScalar(y.x),
                a.multiplyScalar(y.y),
                o.multiplyScalar(y.z),
                r.add(a).add(o),
                r.clone()
            }
            function t(e, t, i, n, r, a, o) {
                var s, c = e.material;
                if (s = c.side === Gr ? i.intersectTriangle(a, r, n, !0, o) : i.intersectTriangle(n, r, a, c.side !== Hr, o),
                null === s)
                    return null;
                b.copy(o),
                b.applyMatrix4(e.matrixWorld);
                var h = t.ray.origin.distanceTo(b);
                return h < t.near || h > t.far ? null : {
                    distance: h,
                    point: b.clone(),
                    object: e
                }
            }
            function n(i, n, r, a, o, c, h, p) {
                s.fromArray(a, 3 * c),
                l.fromArray(a, 3 * h),
                u.fromArray(a, 3 * p);
                var d = t(i, n, r, s, l, u, x);
                return d && (o && (m.fromArray(o, 2 * c),
                g.fromArray(o, 2 * h),
                v.fromArray(o, 2 * p),
                d.uv = e(x, s, l, u, m, g, v)),
                d.face = new ue(c,h,p,le.normal(s, l, u)),
                d.faceIndex = c),
                d
            }
            var r = new h
              , a = new ae
              , o = new ee
              , s = new c
              , l = new c
              , u = new c
              , p = new c
              , d = new c
              , f = new c
              , m = new i
              , g = new i
              , v = new i
              , y = new c
              , x = new c
              , b = new c;
            return function(i, c) {
                var h = this.geometry
                  , y = this.material
                  , b = this.matrixWorld;
                if (void 0 !== y && (null === h.boundingSphere && h.computeBoundingSphere(),
                o.copy(h.boundingSphere),
                o.applyMatrix4(b),
                i.ray.intersectsSphere(o) !== !1 && (r.getInverse(b),
                a.copy(i.ray).applyMatrix4(r),
                null === h.boundingBox || a.intersectsBox(h.boundingBox) !== !1))) {
                    var _, w;
                    if (h.isBufferGeometry) {
                        var M, E, T, S = h.index, A = h.attributes, L = A.position.array;
                        if (void 0 !== A.uv && (_ = A.uv.array),
                        null !== S)
                            for (var R = S.array, P = 0, C = R.length; C > P; P += 3)
                                M = R[P],
                                E = R[P + 1],
                                T = R[P + 2],
                                w = n(this, i, a, L, _, M, E, T),
                                w && (w.faceIndex = Math.floor(P / 3),
                                c.push(w));
                        else
                            for (var P = 0, C = L.length; C > P; P += 9)
                                M = P / 3,
                                E = M + 1,
                                T = M + 2,
                                w = n(this, i, a, L, _, M, E, T),
                                w && (w.index = M,
                                c.push(w))
                    } else if (h.isGeometry) {
                        var I, U, D, N = y && y.isMultiMaterial, O = N === !0 ? y.materials : null, F = h.vertices, z = h.faces, B = h.faceVertexUvs[0];
                        B.length > 0 && (_ = B);
                        for (var G = 0, H = z.length; H > G; G++) {
                            var V = z[G]
                              , k = N === !0 ? O[V.materialIndex] : y;
                            if (void 0 !== k) {
                                if (I = F[V.a],
                                U = F[V.b],
                                D = F[V.c],
                                k.morphTargets === !0) {
                                    var j = h.morphTargets
                                      , W = this.morphTargetInfluences;
                                    s.set(0, 0, 0),
                                    l.set(0, 0, 0),
                                    u.set(0, 0, 0);
                                    for (var X = 0, Y = j.length; Y > X; X++) {
                                        var q = W[X];
                                        if (0 !== q) {
                                            var Z = j[X].vertices;
                                            s.addScaledVector(p.subVectors(Z[V.a], I), q),
                                            l.addScaledVector(d.subVectors(Z[V.b], U), q),
                                            u.addScaledVector(f.subVectors(Z[V.c], D), q)
                                        }
                                    }
                                    s.add(I),
                                    l.add(U),
                                    u.add(D),
                                    I = s,
                                    U = l,
                                    D = u
                                }
                                if (w = t(this, i, a, I, U, D, x)) {
                                    if (_) {
                                        var J = _[G];
                                        m.copy(J[0]),
                                        g.copy(J[1]),
                                        v.copy(J[2]),
                                        w.uv = e(x, I, U, D, m, g, v)
                                    }
                                    w.face = V,
                                    w.faceIndex = G,
                                    c.push(w)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Le.prototype = Object.create(Se.prototype),
    Le.prototype.constructor = Le,
    Re.prototype = Object.create(Se.prototype),
    Re.prototype.constructor = Re,
    Pe.prototype = Object.create(ce.prototype),
    Pe.prototype.constructor = Pe,
    Pe.prototype.isCamera = !0,
    Pe.prototype.getWorldDirection = function() {
        var e = new s;
        return function(t) {
            var i = t || new c;
            return this.getWorldQuaternion(e),
            i.set(0, 0, -1).applyQuaternion(e)
        }
    }(),
    Pe.prototype.lookAt = function() {
        var e = new h;
        return function(t) {
            e.lookAt(this.position, t, this.up),
            this.quaternion.setFromRotationMatrix(e)
        }
    }(),
    Pe.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    Pe.prototype.copy = function(e) {
        return ce.prototype.copy.call(this, e),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this
    }
    ,
    Ce.prototype = Object.assign(Object.create(Pe.prototype), {
        constructor: Ce,
        isPerspectiveCamera: !0,
        copy: function(e) {
            return Pe.prototype.copy.call(this, e),
            this.fov = e.fov,
            this.zoom = e.zoom,
            this.near = e.near,
            this.far = e.far,
            this.focus = e.focus,
            this.aspect = e.aspect,
            this.view = null === e.view ? null : Object.assign({}, e.view),
            this.filmGauge = e.filmGauge,
            this.filmOffset = e.filmOffset,
            this
        },
        setFocalLength: function(e) {
            var t = .5 * this.getFilmHeight() / e;
            this.fov = 2 * Jo.RAD2DEG * Math.atan(t),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var e = Math.tan(.5 * Jo.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / e
        },
        getEffectiveFOV: function() {
            return 2 * Jo.RAD2DEG * Math.atan(Math.tan(.5 * Jo.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(e, t, i, n, r, a) {
            this.aspect = e / t,
            this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: i,
                offsetY: n,
                width: r,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = this.near
              , t = e * Math.tan(.5 * Jo.DEG2RAD * this.fov) / this.zoom
              , i = 2 * t
              , n = this.aspect * i
              , r = -.5 * n
              , a = this.view;
            if (null !== a) {
                var o = a.fullWidth
                  , s = a.fullHeight;
                r += a.offsetX * n / o,
                t -= a.offsetY * i / s,
                n *= a.width / o,
                i *= a.height / s
            }
            var c = this.filmOffset;
            0 !== c && (r += e * c / this.getFilmWidth()),
            this.projectionMatrix.makeFrustum(r, r + n, t - i, t, e, this.far)
        },
        toJSON: function(e) {
            var t = ce.prototype.toJSON.call(this, e);
            return t.object.fov = this.fov,
            t.object.zoom = this.zoom,
            t.object.near = this.near,
            t.object.far = this.far,
            t.object.focus = this.focus,
            t.object.aspect = this.aspect,
            null !== this.view && (t.object.view = Object.assign({}, this.view)),
            t.object.filmGauge = this.filmGauge,
            t.object.filmOffset = this.filmOffset,
            t
        }
    }),
    Ie.prototype = Object.assign(Object.create(Pe.prototype), {
        constructor: Ie,
        isOrthographicCamera: !0,
        copy: function(e) {
            return Pe.prototype.copy.call(this, e),
            this.left = e.left,
            this.right = e.right,
            this.top = e.top,
            this.bottom = e.bottom,
            this.near = e.near,
            this.far = e.far,
            this.zoom = e.zoom,
            this.view = null === e.view ? null : Object.assign({}, e.view),
            this
        },
        setViewOffset: function(e, t, i, n, r, a) {
            this.view = {
                fullWidth: e,
                fullHeight: t,
                offsetX: i,
                offsetY: n,
                width: r,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = (this.right - this.left) / (2 * this.zoom)
              , t = (this.top - this.bottom) / (2 * this.zoom)
              , i = (this.right + this.left) / 2
              , n = (this.top + this.bottom) / 2
              , r = i - e
              , a = i + e
              , o = n + t
              , s = n - t;
            if (null !== this.view) {
                var c = this.zoom / (this.view.width / this.view.fullWidth)
                  , h = this.zoom / (this.view.height / this.view.fullHeight)
                  , l = (this.right - this.left) / this.view.width
                  , u = (this.top - this.bottom) / this.view.height;
                r += l * (this.view.offsetX / c),
                a = r + l * (this.view.width / c),
                o -= u * (this.view.offsetY / h),
                s = o - u * (this.view.height / h)
            }
            this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far)
        },
        toJSON: function(e) {
            var t = ce.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom,
            t.object.left = this.left,
            t.object.right = this.right,
            t.object.top = this.top,
            t.object.bottom = this.bottom,
            t.object.near = this.near,
            t.object.far = this.far,
            null !== this.view && (t.object.view = Object.assign({}, this.view)),
            t
        }
    });
    var ch = 0;
    ot.prototype.isFogExp2 = !0,
    ot.prototype.clone = function() {
        return new ot(this.color.getHex(),this.density)
    }
    ,
    ot.prototype.toJSON = function() {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }
    ,
    st.prototype.isFog = !0,
    st.prototype.clone = function() {
        return new st(this.color.getHex(),this.near,this.far)
    }
    ,
    st.prototype.toJSON = function() {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
    ,
    ct.prototype = Object.create(ce.prototype),
    ct.prototype.constructor = ct,
    ct.prototype.copy = function(e, t) {
        return ce.prototype.copy.call(this, e, t),
        null !== e.background && (this.background = e.background.clone()),
        null !== e.fog && (this.fog = e.fog.clone()),
        null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.autoUpdate = e.autoUpdate,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    ,
    ct.prototype.toJSON = function(e) {
        var t = ce.prototype.toJSON.call(this, e);
        return null !== this.background && (t.object.background = this.background.toJSON(e)),
        null !== this.fog && (t.object.fog = this.fog.toJSON()),
        t
    }
    ,
    ht.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: ht,
        isLensFlare: !0,
        copy: function(e) {
            ce.prototype.copy.call(this, e),
            this.positionScreen.copy(e.positionScreen),
            this.customUpdateCallback = e.customUpdateCallback;
            for (var t = 0, i = e.lensFlares.length; i > t; t++)
                this.lensFlares.push(e.lensFlares[t]);
            return this
        },
        add: function(e, t, i, n, r, a) {
            void 0 === t && (t = -1),
            void 0 === i && (i = 0),
            void 0 === a && (a = 1),
            void 0 === r && (r = new W(16777215)),
            void 0 === n && (n = qr),
            i = Math.min(i, Math.max(0, i)),
            this.lensFlares.push({
                texture: e,
                size: t,
                distance: i,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: r,
                blending: n
            })
        },
        updateLensFlares: function() {
            var e, t, i = this.lensFlares.length, n = 2 * -this.positionScreen.x, r = 2 * -this.positionScreen.y;
            for (e = 0; i > e; e++)
                t = this.lensFlares[e],
                t.x = this.positionScreen.x + n * t.distance,
                t.y = this.positionScreen.y + r * t.distance,
                t.wantedRotation = t.x * Math.PI * .25,
                t.rotation += .25 * (t.wantedRotation - t.rotation)
        }
    }),
    lt.prototype = Object.create(J.prototype),
    lt.prototype.constructor = lt,
    lt.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.map = e.map,
        this.rotation = e.rotation,
        this
    }
    ,
    ut.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: ut,
        isSprite: !0,
        raycast: function() {
            var e = new c;
            return function(t, i) {
                e.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.distanceSqToPoint(e)
                  , r = this.scale.x * this.scale.y / 4;
                n > r || i.push({
                    distance: Math.sqrt(n),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }),
    pt.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: pt,
        copy: function(e) {
            ce.prototype.copy.call(this, e, !1);
            for (var t = e.levels, i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                this.addLevel(r.object.clone(), r.distance)
            }
            return this
        },
        addLevel: function(e, t) {
            void 0 === t && (t = 0),
            t = Math.abs(t);
            for (var i = this.levels, n = 0; n < i.length && !(t < i[n].distance); n++)
                ;
            i.splice(n, 0, {
                distance: t,
                object: e
            }),
            this.add(e)
        },
        getObjectForDistance: function(e) {
            for (var t = this.levels, i = 1, n = t.length; n > i && !(e < t[i].distance); i++)
                ;
            return t[i - 1].object
        },
        raycast: function() {
            var e = new c;
            return function(t, i) {
                e.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.origin.distanceTo(e);
                this.getObjectForDistance(n).raycast(t, i)
            }
        }(),
        update: function() {
            var e = new c
              , t = new c;
            return function(i) {
                var n = this.levels;
                if (n.length > 1) {
                    e.setFromMatrixPosition(i.matrixWorld),
                    t.setFromMatrixPosition(this.matrixWorld);
                    var r = e.distanceTo(t);
                    n[0].object.visible = !0;
                    for (var a = 1, o = n.length; o > a && r >= n[a].distance; a++)
                        n[a - 1].object.visible = !1,
                        n[a].object.visible = !0;
                    for (; o > a; a++)
                        n[a].object.visible = !1
                }
            }
        }(),
        toJSON: function(e) {
            var t = ce.prototype.toJSON.call(this, e);
            t.object.levels = [];
            for (var i = this.levels, n = 0, r = i.length; r > n; n++) {
                var a = i[n];
                t.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return t
        }
    }),
    Object.assign(dt.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; t > e; e++) {
                var i = new h;
                this.bones[e] && i.getInverse(this.bones[e].matrixWorld),
                this.boneInverses.push(i)
            }
        },
        pose: function() {
            for (var e, t = 0, i = this.bones.length; i > t; t++)
                e = this.bones[t],
                e && e.matrixWorld.getInverse(this.boneInverses[t]);
            for (var t = 0, i = this.bones.length; i > t; t++)
                e = this.bones[t],
                e && (e.parent && e.parent.isBone ? (e.matrix.getInverse(e.parent.matrixWorld),
                e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld),
                e.matrix.decompose(e.position, e.quaternion, e.scale))
        },
        update: function() {
            var e = new h;
            return function() {
                for (var t = 0, i = this.bones.length; i > t; t++) {
                    var n = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
                    e.multiplyMatrices(n, this.boneInverses[t]),
                    e.toArray(this.boneMatrices, 16 * t)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new dt(this.bones,this.boneInverses,this.useVertexTexture)
        }
    }),
    ft.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: ft,
        isBone: !0
    }),
    mt.prototype = Object.assign(Object.create(Ae.prototype), {
        constructor: mt,
        isSkinnedMesh: !0,
        bind: function(e, t) {
            this.skeleton = e,
            void 0 === t && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            t = this.matrixWorld),
            this.bindMatrix.copy(t),
            this.bindMatrixInverse.getInverse(t)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            if (this.geometry && this.geometry.isGeometry)
                for (var e = 0; e < this.geometry.skinWeights.length; e++) {
                    var t = this.geometry.skinWeights[e]
                      , i = 1 / t.lengthManhattan();
                    i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0)
                }
            else if (this.geometry && this.geometry.isBufferGeometry)
                for (var n = new r, a = this.geometry.attributes.skinWeight, e = 0; e < a.count; e++) {
                    n.x = a.getX(e),
                    n.y = a.getY(e),
                    n.z = a.getZ(e),
                    n.w = a.getW(e);
                    var i = 1 / n.lengthManhattan();
                    i !== 1 / 0 ? n.multiplyScalar(i) : n.set(1, 0, 0, 0),
                    a.setXYZW(e, n.x, n.y, n.z, n.w)
                }
        },
        updateMatrixWorld: function() {
            Ae.prototype.updateMatrixWorld.call(this, !0),
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)
        }
    }),
    gt.prototype = Object.create(J.prototype),
    gt.prototype.constructor = gt,
    gt.prototype.isLineBasicMaterial = !0,
    gt.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this
    }
    ,
    vt.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: vt,
        isLine: !0,
        raycast: function() {
            var e = new h
              , t = new ae
              , i = new ee;
            return function(n, r) {
                var a = n.linePrecision
                  , o = a * a
                  , s = this.geometry
                  , h = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(),
                i.copy(s.boundingSphere),
                i.applyMatrix4(h),
                n.ray.intersectsSphere(i) !== !1) {
                    e.getInverse(h),
                    t.copy(n.ray).applyMatrix4(e);
                    var l = new c
                      , u = new c
                      , p = new c
                      , d = new c
                      , f = this && this.isLineSegments ? 2 : 1;
                    if (s.isBufferGeometry) {
                        var m = s.index
                          , g = s.attributes
                          , v = g.position.array;
                        if (null !== m)
                            for (var y = m.array, x = 0, b = y.length - 1; b > x; x += f) {
                                var _ = y[x]
                                  , w = y[x + 1];
                                l.fromArray(v, 3 * _),
                                u.fromArray(v, 3 * w);
                                var M = t.distanceSqToSegment(l, u, d, p);
                                if (!(M > o)) {
                                    d.applyMatrix4(this.matrixWorld);
                                    var E = n.ray.origin.distanceTo(d);
                                    E < n.near || E > n.far || r.push({
                                        distance: E,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                        else
                            for (var x = 0, b = v.length / 3 - 1; b > x; x += f) {
                                l.fromArray(v, 3 * x),
                                u.fromArray(v, 3 * x + 3);
                                var M = t.distanceSqToSegment(l, u, d, p);
                                if (!(M > o)) {
                                    d.applyMatrix4(this.matrixWorld);
                                    var E = n.ray.origin.distanceTo(d);
                                    E < n.near || E > n.far || r.push({
                                        distance: E,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                    } else if (s.isGeometry)
                        for (var T = s.vertices, S = T.length, x = 0; S - 1 > x; x += f) {
                            var M = t.distanceSqToSegment(T[x], T[x + 1], d, p);
                            if (!(M > o)) {
                                d.applyMatrix4(this.matrixWorld);
                                var E = n.ray.origin.distanceTo(d);
                                E < n.near || E > n.far || r.push({
                                    distance: E,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: x,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    yt.prototype = Object.assign(Object.create(vt.prototype), {
        constructor: yt,
        isLineSegments: !0
    }),
    xt.prototype = Object.create(J.prototype),
    xt.prototype.constructor = xt,
    xt.prototype.isPointsMaterial = !0,
    xt.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.map = e.map,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this
    }
    ,
    bt.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: bt,
        isPoints: !0,
        raycast: function() {
            var e = new h
              , t = new ae
              , i = new ee;
            return function(n, r) {
                function a(e, i) {
                    var a = t.distanceSqToPoint(e);
                    if (p > a) {
                        var s = t.closestPointToPoint(e);
                        s.applyMatrix4(h);
                        var c = n.ray.origin.distanceTo(s);
                        if (c < n.near || c > n.far)
                            return;
                        r.push({
                            distance: c,
                            distanceToRay: Math.sqrt(a),
                            point: s.clone(),
                            index: i,
                            face: null,
                            object: o
                        })
                    }
                }
                var o = this
                  , s = this.geometry
                  , h = this.matrixWorld
                  , l = n.params.Points.threshold;
                if (null === s.boundingSphere && s.computeBoundingSphere(),
                i.copy(s.boundingSphere),
                i.applyMatrix4(h),
                n.ray.intersectsSphere(i) !== !1) {
                    e.getInverse(h),
                    t.copy(n.ray).applyMatrix4(e);
                    var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                      , p = u * u
                      , d = new c;
                    if (s.isBufferGeometry) {
                        var f = s.index
                          , m = s.attributes
                          , g = m.position.array;
                        if (null !== f)
                            for (var v = f.array, y = 0, x = v.length; x > y; y++) {
                                var b = v[y];
                                d.fromArray(g, 3 * b),
                                a(d, b)
                            }
                        else
                            for (var y = 0, _ = g.length / 3; _ > y; y++)
                                d.fromArray(g, 3 * y),
                                a(d, y)
                    } else
                        for (var w = s.vertices, y = 0, _ = w.length; _ > y; y++)
                            a(w[y], y)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    _t.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: _t
    }),
    wt.prototype = Object.create(n.prototype),
    wt.prototype.constructor = wt,
    Mt.prototype = Object.create(n.prototype),
    Mt.prototype.constructor = Mt,
    Mt.prototype.isCompressedTexture = !0,
    Et.prototype = Object.create(n.prototype),
    Et.prototype.constructor = Et,
    Tt.prototype = Object.create(n.prototype),
    Tt.prototype.constructor = Tt,
    Tt.prototype.isDepthTexture = !0,
    St.prototype = Object.create(Se.prototype),
    St.prototype.constructor = St,
    At.prototype = Object.create(Se.prototype),
    At.prototype.constructor = At,
    Lt.prototype = Object.create(Ee.prototype),
    Lt.prototype.constructor = Lt,
    Rt.prototype = Object.create(Se.prototype),
    Rt.prototype.constructor = Rt,
    Pt.prototype = Object.create(Rt.prototype),
    Pt.prototype.constructor = Pt,
    Ct.prototype = Object.create(Ee.prototype),
    Ct.prototype.constructor = Ct,
    It.prototype = Object.create(Rt.prototype),
    It.prototype.constructor = It,
    Ut.prototype = Object.create(Ee.prototype),
    Ut.prototype.constructor = Ut,
    Dt.prototype = Object.create(Rt.prototype),
    Dt.prototype.constructor = Dt,
    Nt.prototype = Object.create(Ee.prototype),
    Nt.prototype.constructor = Nt,
    Ot.prototype = Object.create(Rt.prototype),
    Ot.prototype.constructor = Ot,
    Ft.prototype = Object.create(Ee.prototype),
    Ft.prototype.constructor = Ft,
    zt.prototype = Object.create(Ee.prototype),
    zt.prototype.constructor = zt,
    Bt.prototype = Object.create(Se.prototype),
    Bt.prototype.constructor = Bt,
    Gt.prototype = Object.create(Ee.prototype),
    Gt.prototype.constructor = Gt,
    Ht.prototype = Object.create(Se.prototype),
    Ht.prototype.constructor = Ht,
    Vt.prototype = Object.create(Ee.prototype),
    Vt.prototype.constructor = Vt,
    kt.prototype = Object.create(Se.prototype),
    kt.prototype.constructor = kt,
    jt.prototype = Object.create(Ee.prototype),
    jt.prototype.constructor = jt;
    var hh = {
        area: function(e) {
            for (var t = e.length, i = 0, n = t - 1, r = 0; t > r; n = r++)
                i += e[n].x * e[r].y - e[r].x * e[n].y;
            return .5 * i
        },
        triangulate: function() {
            function e(e, t, i, n, r, a) {
                var o, s, c, h, l, u, p, d, f;
                if (s = e[a[t]].x,
                c = e[a[t]].y,
                h = e[a[i]].x,
                l = e[a[i]].y,
                u = e[a[n]].x,
                p = e[a[n]].y,
                0 >= (h - s) * (p - c) - (l - c) * (u - s))
                    return !1;
                var m, g, v, y, x, b, _, w, M, E, T, S, A, L, R;
                for (m = u - h,
                g = p - l,
                v = s - u,
                y = c - p,
                x = h - s,
                b = l - c,
                o = 0; r > o; o++)
                    if (d = e[a[o]].x,
                    f = e[a[o]].y,
                    !(d === s && f === c || d === h && f === l || d === u && f === p) && (_ = d - s,
                    w = f - c,
                    M = d - h,
                    E = f - l,
                    T = d - u,
                    S = f - p,
                    R = m * E - g * M,
                    A = x * w - b * _,
                    L = v * S - y * T,
                    R >= -Number.EPSILON && L >= -Number.EPSILON && A >= -Number.EPSILON))
                        return !1;
                return !0
            }
            return function(t, i) {
                var n = t.length;
                if (3 > n)
                    return null;
                var r, a, o, s = [], c = [], h = [];
                if (hh.area(t) > 0)
                    for (a = 0; n > a; a++)
                        c[a] = a;
                else
                    for (a = 0; n > a; a++)
                        c[a] = n - 1 - a;
                var l = n
                  , u = 2 * l;
                for (a = l - 1; l > 2; ) {
                    if (u-- <= 0)
                        return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
                        i ? h : s;
                    if (r = a,
                    r >= l && (r = 0),
                    a = r + 1,
                    a >= l && (a = 0),
                    o = a + 1,
                    o >= l && (o = 0),
                    e(t, r, a, o, l, c)) {
                        var p, d, f, m, g;
                        for (p = c[r],
                        d = c[a],
                        f = c[o],
                        s.push([t[p], t[d], t[f]]),
                        h.push([c[r], c[a], c[o]]),
                        m = a,
                        g = a + 1; l > g; m++,
                        g++)
                            c[m] = c[g];
                        l--,
                        u = 2 * l
                    }
                }
                return i ? h : s
            }
        }(),
        triangulateShape: function(e, t) {
            function i(e) {
                var t = e.length;
                t > 2 && e[t - 1].equals(e[0]) && e.pop()
            }
            function n(e, t, i) {
                return e.x !== t.x ? e.x < t.x ? e.x <= i.x && i.x <= t.x : t.x <= i.x && i.x <= e.x : e.y < t.y ? e.y <= i.y && i.y <= t.y : t.y <= i.y && i.y <= e.y
            }
            function r(e, t, i, r, a) {
                var o = t.x - e.x
                  , s = t.y - e.y
                  , c = r.x - i.x
                  , h = r.y - i.y
                  , l = e.x - i.x
                  , u = e.y - i.y
                  , p = s * c - o * h
                  , d = s * l - o * u;
                if (Math.abs(p) > Number.EPSILON) {
                    var f;
                    if (p > 0) {
                        if (0 > d || d > p)
                            return [];
                        if (f = h * l - c * u,
                        0 > f || f > p)
                            return []
                    } else {
                        if (d > 0 || p > d)
                            return [];
                        if (f = h * l - c * u,
                        f > 0 || p > f)
                            return []
                    }
                    if (0 === f)
                        return !a || 0 !== d && d !== p ? [e] : [];
                    if (f === p)
                        return !a || 0 !== d && d !== p ? [t] : [];
                    if (0 === d)
                        return [i];
                    if (d === p)
                        return [r];
                    var m = f / p;
                    return [{
                        x: e.x + m * o,
                        y: e.y + m * s
                    }]
                }
                if (0 !== d || h * l !== c * u)
                    return [];
                var g = 0 === o && 0 === s
                  , v = 0 === c && 0 === h;
                if (g && v)
                    return e.x !== i.x || e.y !== i.y ? [] : [e];
                if (g)
                    return n(i, r, e) ? [e] : [];
                if (v)
                    return n(e, t, i) ? [i] : [];
                var y, x, b, _, w, M, E, T;
                return 0 !== o ? (e.x < t.x ? (y = e,
                b = e.x,
                x = t,
                _ = t.x) : (y = t,
                b = t.x,
                x = e,
                _ = e.x),
                i.x < r.x ? (w = i,
                E = i.x,
                M = r,
                T = r.x) : (w = r,
                E = r.x,
                M = i,
                T = i.x)) : (e.y < t.y ? (y = e,
                b = e.y,
                x = t,
                _ = t.y) : (y = t,
                b = t.y,
                x = e,
                _ = e.y),
                i.y < r.y ? (w = i,
                E = i.y,
                M = r,
                T = r.y) : (w = r,
                E = r.y,
                M = i,
                T = i.y)),
                E >= b ? E > _ ? [] : _ === E ? a ? [] : [w] : T >= _ ? [w, x] : [w, M] : b > T ? [] : b === T ? a ? [] : [y] : T >= _ ? [y, x] : [y, M]
            }
            function a(e, t, i, n) {
                var r = t.x - e.x
                  , a = t.y - e.y
                  , o = i.x - e.x
                  , s = i.y - e.y
                  , c = n.x - e.x
                  , h = n.y - e.y
                  , l = r * s - a * o
                  , u = r * h - a * c;
                if (Math.abs(l) > Number.EPSILON) {
                    var p = c * s - h * o;
                    return l > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
                }
                return u > 0
            }
            function o(e, t) {
                function i(e, t) {
                    var i = y.length - 1
                      , n = e - 1;
                    0 > n && (n = i);
                    var r = e + 1;
                    r > i && (r = 0);
                    var o = a(y[e], y[n], y[r], s[t]);
                    if (!o)
                        return !1;
                    var c = s.length - 1
                      , h = t - 1;
                    0 > h && (h = c);
                    var l = t + 1;
                    return l > c && (l = 0),
                    o = a(s[t], s[h], s[l], y[e]),
                    o ? !0 : !1
                }
                function n(e, t) {
                    var i, n, a;
                    for (i = 0; i < y.length; i++)
                        if (n = i + 1,
                        n %= y.length,
                        a = r(e, t, y[i], y[n], !0),
                        a.length > 0)
                            return !0;
                    return !1
                }
                function o(e, i) {
                    var n, a, o, s, c;
                    for (n = 0; n < x.length; n++)
                        for (a = t[x[n]],
                        o = 0; o < a.length; o++)
                            if (s = o + 1,
                            s %= a.length,
                            c = r(e, i, a[o], a[s], !0),
                            c.length > 0)
                                return !0;
                    return !1
                }
                for (var s, c, h, l, u, p, d, f, m, g, v, y = e.concat(), x = [], b = [], _ = 0, w = t.length; w > _; _++)
                    x.push(_);
                for (var M = 0, E = 2 * x.length; x.length > 0; ) {
                    if (E--,
                    0 > E) {
                        console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (h = M; h < y.length; h++) {
                        l = y[h],
                        c = -1;
                        for (var _ = 0; _ < x.length; _++)
                            if (p = x[_],
                            d = l.x + ":" + l.y + ":" + p,
                            void 0 === b[d]) {
                                s = t[p];
                                for (var T = 0; T < s.length; T++)
                                    if (u = s[T],
                                    i(h, T) && !n(l, u) && !o(l, u)) {
                                        c = T,
                                        x.splice(_, 1),
                                        f = y.slice(0, h + 1),
                                        m = y.slice(h),
                                        g = s.slice(c),
                                        v = s.slice(0, c + 1),
                                        y = f.concat(g).concat(v).concat(m),
                                        M = h;
                                        break
                                    }
                                if (c >= 0)
                                    break;
                                b[d] = !0
                            }
                        if (c >= 0)
                            break
                    }
                }
                return y
            }
            i(e),
            t.forEach(i);
            for (var s, c, h, l, u, p, d = {}, f = e.concat(), m = 0, g = t.length; g > m; m++)
                Array.prototype.push.apply(f, t[m]);
            for (s = 0,
            c = f.length; c > s; s++)
                u = f[s].x + ":" + f[s].y,
                void 0 !== d[u] && console.warn("THREE.ShapeUtils: Duplicate point", u, s),
                d[u] = s;
            var v = o(e, t)
              , y = hh.triangulate(v, !1);
            for (s = 0,
            c = y.length; c > s; s++)
                for (l = y[s],
                h = 0; 3 > h; h++)
                    u = l[h].x + ":" + l[h].y,
                    p = d[u],
                    void 0 !== p && (l[h] = p);
            return y.concat()
        },
        isClockWise: function(e) {
            return hh.area(e) < 0
        },
        b2: function() {
            function e(e, t) {
                var i = 1 - e;
                return i * i * t
            }
            function t(e, t) {
                return 2 * (1 - e) * e * t
            }
            function i(e, t) {
                return e * e * t
            }
            return function(n, r, a, o) {
                return e(n, r) + t(n, a) + i(n, o)
            }
        }(),
        b3: function() {
            function e(e, t) {
                var i = 1 - e;
                return i * i * i * t
            }
            function t(e, t) {
                var i = 1 - e;
                return 3 * i * i * e * t
            }
            function i(e, t) {
                var i = 1 - e;
                return 3 * i * e * e * t
            }
            function n(e, t) {
                return e * e * e * t
            }
            return function(r, a, o, s, c) {
                return e(r, a) + t(r, o) + i(r, s) + n(r, c)
            }
        }()
    };
    Wt.prototype = Object.create(Ee.prototype),
    Wt.prototype.constructor = Wt,
    Wt.prototype.addShapeList = function(e, t) {
        for (var i = e.length, n = 0; i > n; n++) {
            var r = e[n];
            this.addShape(r, t)
        }
    }
    ,
    Wt.prototype.addShape = function(e, t) {
        function n(e, t, i) {
            return t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            t.clone().multiplyScalar(i).add(e)
        }
        function r(e, t, n) {
            var r, a, o = 1, s = e.x - t.x, c = e.y - t.y, h = n.x - e.x, l = n.y - e.y, u = s * s + c * c, p = s * l - c * h;
            if (Math.abs(p) > Number.EPSILON) {
                var d = Math.sqrt(u)
                  , f = Math.sqrt(h * h + l * l)
                  , m = t.x - c / d
                  , g = t.y + s / d
                  , v = n.x - l / f
                  , y = n.y + h / f
                  , x = ((v - m) * l - (y - g) * h) / (s * l - c * h);
                r = m + s * x - e.x,
                a = g + c * x - e.y;
                var b = r * r + a * a;
                if (2 >= b)
                    return new i(r,a);
                o = Math.sqrt(b / 2)
            } else {
                var _ = !1;
                s > Number.EPSILON ? h > Number.EPSILON && (_ = !0) : s < -Number.EPSILON ? h < -Number.EPSILON && (_ = !0) : Math.sign(c) === Math.sign(l) && (_ = !0),
                _ ? (r = -c,
                a = s,
                o = Math.sqrt(u)) : (r = s,
                a = c,
                o = Math.sqrt(u / 2))
            }
            return new i(r / o,a / o)
        }
        function a() {
            if (_) {
                var e = 0
                  , t = j * e;
                for (Y = 0; W > Y; Y++)
                    k = O[Y],
                    l(k[2] + t, k[1] + t, k[0] + t);
                for (e = M + 2 * b,
                t = j * e,
                Y = 0; W > Y; Y++)
                    k = O[Y],
                    l(k[0] + t, k[1] + t, k[2] + t)
            } else {
                for (Y = 0; W > Y; Y++)
                    k = O[Y],
                    l(k[2], k[1], k[0]);
                for (Y = 0; W > Y; Y++)
                    k = O[Y],
                    l(k[0] + j * M, k[1] + j * M, k[2] + j * M)
            }
        }
        function o() {
            var e = 0;
            for (s(F, e),
            e += F.length,
            L = 0,
            R = D.length; R > L; L++)
                A = D[L],
                s(A, e),
                e += A.length
        }
        function s(e, t) {
            var i, n;
            for (Y = e.length; --Y >= 0; ) {
                i = Y,
                n = Y - 1,
                0 > n && (n = e.length - 1);
                var r = 0
                  , a = M + 2 * b;
                for (r = 0; a > r; r++) {
                    var o = j * r
                      , s = j * (r + 1)
                      , c = t + i + o
                      , h = t + n + o
                      , l = t + n + s
                      , p = t + i + s;
                    u(c, h, l, p, e, r, a, i, n)
                }
            }
        }
        function h(e, t, i) {
            P.vertices.push(new c(e,t,i))
        }
        function l(e, t, i) {
            e += C,
            t += C,
            i += C,
            P.faces.push(new ue(e,t,i,null,null,0));
            var n = S.generateTopUV(P, e, t, i);
            P.faceVertexUvs[0].push(n)
        }
        function u(e, t, i, n) {
            e += C,
            t += C,
            i += C,
            n += C,
            P.faces.push(new ue(e,t,n,null,null,1)),
            P.faces.push(new ue(t,i,n,null,null,1));
            var r = S.generateSideWallUV(P, e, t, i, n);
            P.faceVertexUvs[0].push([r[0], r[1], r[3]]),
            P.faceVertexUvs[0].push([r[1], r[2], r[3]])
        }
        var p, d, f, m, g, v = void 0 !== t.amount ? t.amount : 100, y = void 0 !== t.bevelThickness ? t.bevelThickness : 6, x = void 0 !== t.bevelSize ? t.bevelSize : y - 2, b = void 0 !== t.bevelSegments ? t.bevelSegments : 3, _ = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0, w = void 0 !== t.curveSegments ? t.curveSegments : 12, M = void 0 !== t.steps ? t.steps : 1, E = t.extrudePath, T = !1, S = void 0 !== t.UVGenerator ? t.UVGenerator : Wt.WorldUVGenerator;
        E && (p = E.getSpacedPoints(M),
        T = !0,
        _ = !1,
        d = void 0 !== t.frames ? t.frames : E.computeFrenetFrames(M, !1),
        f = new c,
        m = new c,
        g = new c),
        _ || (b = 0,
        y = 0,
        x = 0);
        var A, L, R, P = this, C = this.vertices.length, I = e.extractPoints(w), U = I.shape, D = I.holes, N = !hh.isClockWise(U);
        if (N) {
            for (U = U.reverse(),
            L = 0,
            R = D.length; R > L; L++)
                A = D[L],
                hh.isClockWise(A) && (D[L] = A.reverse());
            N = !1
        }
        var O = hh.triangulateShape(U, D)
          , F = U;
        for (L = 0,
        R = D.length; R > L; L++)
            A = D[L],
            U = U.concat(A);
        for (var z, B, G, H, V, k, j = U.length, W = O.length, X = [], Y = 0, q = F.length, Z = q - 1, J = Y + 1; q > Y; Y++,
        Z++,
        J++)
            Z === q && (Z = 0),
            J === q && (J = 0),
            X[Y] = r(F[Y], F[Z], F[J]);
        var Q, K = [], $ = X.concat();
        for (L = 0,
        R = D.length; R > L; L++) {
            for (A = D[L],
            Q = [],
            Y = 0,
            q = A.length,
            Z = q - 1,
            J = Y + 1; q > Y; Y++,
            Z++,
            J++)
                Z === q && (Z = 0),
                J === q && (J = 0),
                Q[Y] = r(A[Y], A[Z], A[J]);
            K.push(Q),
            $ = $.concat(Q)
        }
        for (z = 0; b > z; z++) {
            for (G = z / b,
            H = y * Math.cos(G * Math.PI / 2),
            B = x * Math.sin(G * Math.PI / 2),
            Y = 0,
            q = F.length; q > Y; Y++)
                V = n(F[Y], X[Y], B),
                h(V.x, V.y, -H);
            for (L = 0,
            R = D.length; R > L; L++)
                for (A = D[L],
                Q = K[L],
                Y = 0,
                q = A.length; q > Y; Y++)
                    V = n(A[Y], Q[Y], B),
                    h(V.x, V.y, -H)
        }
        for (B = x,
        Y = 0; j > Y; Y++)
            V = _ ? n(U[Y], $[Y], B) : U[Y],
            T ? (m.copy(d.normals[0]).multiplyScalar(V.x),
            f.copy(d.binormals[0]).multiplyScalar(V.y),
            g.copy(p[0]).add(m).add(f),
            h(g.x, g.y, g.z)) : h(V.x, V.y, 0);
        var ee;
        for (ee = 1; M >= ee; ee++)
            for (Y = 0; j > Y; Y++)
                V = _ ? n(U[Y], $[Y], B) : U[Y],
                T ? (m.copy(d.normals[ee]).multiplyScalar(V.x),
                f.copy(d.binormals[ee]).multiplyScalar(V.y),
                g.copy(p[ee]).add(m).add(f),
                h(g.x, g.y, g.z)) : h(V.x, V.y, v / M * ee);
        for (z = b - 1; z >= 0; z--) {
            for (G = z / b,
            H = y * Math.cos(G * Math.PI / 2),
            B = x * Math.sin(G * Math.PI / 2),
            Y = 0,
            q = F.length; q > Y; Y++)
                V = n(F[Y], X[Y], B),
                h(V.x, V.y, v + H);
            for (L = 0,
            R = D.length; R > L; L++)
                for (A = D[L],
                Q = K[L],
                Y = 0,
                q = A.length; q > Y; Y++)
                    V = n(A[Y], Q[Y], B),
                    T ? h(V.x, V.y + p[M - 1].y, p[M - 1].x + H) : h(V.x, V.y, v + H)
        }
        a(),
        o()
    }
    ,
    Wt.WorldUVGenerator = {
        generateTopUV: function(e, t, n, r) {
            var a = e.vertices
              , o = a[t]
              , s = a[n]
              , c = a[r];
            return [new i(o.x,o.y), new i(s.x,s.y), new i(c.x,c.y)]
        },
        generateSideWallUV: function(e, t, n, r, a) {
            var o = e.vertices
              , s = o[t]
              , c = o[n]
              , h = o[r]
              , l = o[a];
            return Math.abs(s.y - c.y) < .01 ? [new i(s.x,1 - s.z), new i(c.x,1 - c.z), new i(h.x,1 - h.z), new i(l.x,1 - l.z)] : [new i(s.y,1 - s.z), new i(c.y,1 - c.z), new i(h.y,1 - h.z), new i(l.y,1 - l.z)]
        }
    },
    Xt.prototype = Object.create(Wt.prototype),
    Xt.prototype.constructor = Xt,
    Yt.prototype = Object.create(Se.prototype),
    Yt.prototype.constructor = Yt,
    qt.prototype = Object.create(Ee.prototype),
    qt.prototype.constructor = qt,
    Zt.prototype = Object.create(Se.prototype),
    Zt.prototype.constructor = Zt,
    Jt.prototype = Object.create(Ee.prototype),
    Jt.prototype.constructor = Jt,
    Qt.prototype = Object.create(Ee.prototype),
    Qt.prototype.constructor = Qt,
    Kt.prototype = Object.create(Se.prototype),
    Kt.prototype.constructor = Kt,
    $t.prototype = Object.create(Ee.prototype),
    $t.prototype.constructor = $t,
    ei.prototype = Object.create(Se.prototype),
    ei.prototype.constructor = ei,
    ti.prototype = Object.create(Ee.prototype),
    ti.prototype.constructor = ti,
    ii.prototype = Object.create(Se.prototype),
    ii.prototype.constructor = ii,
    ni.prototype = Object.create(Se.prototype),
    ni.prototype.constructor = ni,
    ri.prototype = Object.create(Ee.prototype),
    ri.prototype.constructor = ri,
    ai.prototype = Object.create(ri.prototype),
    ai.prototype.constructor = ai,
    oi.prototype = Object.create(ni.prototype),
    oi.prototype.constructor = oi,
    si.prototype = Object.create(Se.prototype),
    si.prototype.constructor = si,
    ci.prototype = Object.create(Ee.prototype),
    ci.prototype.constructor = ci,
    hi.prototype = Object.create(Ee.prototype),
    hi.prototype.constructor = hi;
    var lh = Object.freeze({
        WireframeGeometry: St,
        ParametricGeometry: Lt,
        ParametricBufferGeometry: At,
        TetrahedronGeometry: Ct,
        TetrahedronBufferGeometry: Pt,
        OctahedronGeometry: Ut,
        OctahedronBufferGeometry: It,
        IcosahedronGeometry: Nt,
        IcosahedronBufferGeometry: Dt,
        DodecahedronGeometry: Ft,
        DodecahedronBufferGeometry: Ot,
        PolyhedronGeometry: zt,
        PolyhedronBufferGeometry: Rt,
        TubeGeometry: Gt,
        TubeBufferGeometry: Bt,
        TorusKnotGeometry: Vt,
        TorusKnotBufferGeometry: Ht,
        TorusGeometry: jt,
        TorusBufferGeometry: kt,
        TextGeometry: Xt,
        SphereBufferGeometry: Yt,
        SphereGeometry: qt,
        RingGeometry: Jt,
        RingBufferGeometry: Zt,
        PlaneBufferGeometry: Re,
        PlaneGeometry: Qt,
        LatheGeometry: $t,
        LatheBufferGeometry: Kt,
        ShapeGeometry: ti,
        ShapeBufferGeometry: ei,
        ExtrudeGeometry: Wt,
        EdgesGeometry: ii,
        ConeGeometry: ai,
        ConeBufferGeometry: oi,
        CylinderGeometry: ri,
        CylinderBufferGeometry: ni,
        CircleBufferGeometry: si,
        CircleGeometry: ci,
        BoxBufferGeometry: Le,
        BoxGeometry: hi
    });
    li.prototype = Object.create(Q.prototype),
    li.prototype.constructor = li,
    li.prototype.isShadowMaterial = !0,
    ui.prototype = Object.create(Q.prototype),
    ui.prototype.constructor = ui,
    ui.prototype.isRawShaderMaterial = !0,
    pi.prototype = {
        constructor: pi,
        isMultiMaterial: !0,
        toJSON: function(e) {
            for (var t = {
                metadata: {
                    version: 4.2,
                    type: "material",
                    generator: "MaterialExporter"
                },
                uuid: this.uuid,
                type: this.type,
                materials: []
            }, i = this.materials, n = 0, r = i.length; r > n; n++) {
                var a = i[n].toJSON(e);
                delete a.metadata,
                t.materials.push(a)
            }
            return t.visible = this.visible,
            t
        },
        clone: function() {
            for (var e = new this.constructor, t = 0; t < this.materials.length; t++)
                e.materials.push(this.materials[t].clone());
            return e.visible = this.visible,
            e
        }
    },
    di.prototype = Object.create(J.prototype),
    di.prototype.constructor = di,
    di.prototype.isMeshStandardMaterial = !0,
    di.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapIntensity = e.envMapIntensity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this
    }
    ,
    fi.prototype = Object.create(di.prototype),
    fi.prototype.constructor = fi,
    fi.prototype.isMeshPhysicalMaterial = !0,
    fi.prototype.copy = function(e) {
        return di.prototype.copy.call(this, e),
        this.defines = {
            PHYSICAL: ""
        },
        this.reflectivity = e.reflectivity,
        this.clearCoat = e.clearCoat,
        this.clearCoatRoughness = e.clearCoatRoughness,
        this
    }
    ,
    mi.prototype = Object.create(J.prototype),
    mi.prototype.constructor = mi,
    mi.prototype.isMeshPhongMaterial = !0,
    mi.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.specular.copy(e.specular),
        this.shininess = e.shininess,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this
    }
    ,
    gi.prototype = Object.create(mi.prototype),
    gi.prototype.constructor = gi,
    gi.prototype.isMeshToonMaterial = !0,
    gi.prototype.copy = function(e) {
        return mi.prototype.copy.call(this, e),
        this.gradientMap = e.gradientMap,
        this
    }
    ,
    vi.prototype = Object.create(J.prototype),
    vi.prototype.constructor = vi,
    vi.prototype.isMeshNormalMaterial = !0,
    vi.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
    ,
    yi.prototype = Object.create(J.prototype),
    yi.prototype.constructor = yi,
    yi.prototype.isMeshLambertMaterial = !0,
    yi.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this
    }
    ,
    xi.prototype = Object.create(J.prototype),
    xi.prototype.constructor = xi,
    xi.prototype.isLineDashedMaterial = !0,
    xi.prototype.copy = function(e) {
        return J.prototype.copy.call(this, e),
        this.color.copy(e.color),
        this.linewidth = e.linewidth,
        this.scale = e.scale,
        this.dashSize = e.dashSize,
        this.gapSize = e.gapSize,
        this
    }
    ;
    var uh = Object.freeze({
        ShadowMaterial: li,
        SpriteMaterial: lt,
        RawShaderMaterial: ui,
        ShaderMaterial: Q,
        PointsMaterial: xt,
        MultiMaterial: pi,
        MeshPhysicalMaterial: fi,
        MeshStandardMaterial: di,
        MeshPhongMaterial: mi,
        MeshToonMaterial: gi,
        MeshNormalMaterial: vi,
        MeshLambertMaterial: yi,
        MeshDepthMaterial: K,
        MeshBasicMaterial: pe,
        LineDashedMaterial: xi,
        LineBasicMaterial: gt,
        Material: J
    })
      , ph = {
        enabled: !1,
        files: {},
        add: function(e, t) {
            this.enabled !== !1 && (this.files[e] = t)
        },
        get: function(e) {
            return this.enabled !== !1 ? this.files[e] : void 0
        },
        remove: function(e) {
            delete this.files[e]
        },
        clear: function() {
            this.files = {}
        }
    }
      , dh = new bi;
    Object.assign(_i.prototype, {
        load: function(e, t, i, n) {
            void 0 === e && (e = ""),
            void 0 !== this.path && (e = this.path + e);
            var r = this
              , a = ph.get(e);
            if (void 0 !== a)
                return r.manager.itemStart(e),
                setTimeout(function() {
                    t && t(a),
                    r.manager.itemEnd(e)
                }, 0),
                a;
            var o = /^data:(.*?)(;base64)?,(.*)$/
              , s = e.match(o);
            if (s) {
                var c = s[1]
                  , h = !!s[2]
                  , l = s[3];
                l = window.decodeURIComponent(l),
                h && (l = window.atob(l));
                try {
                    var u, p = (this.responseType || "").toLowerCase();
                    switch (p) {
                    case "arraybuffer":
                    case "blob":
                        u = new ArrayBuffer(l.length);
                        for (var d = new Uint8Array(u), f = 0; f < l.length; f++)
                            d[f] = l.charCodeAt(f);
                        "blob" === p && (u = new Blob([u],{
                            type: c
                        }));
                        break;
                    case "document":
                        var m = new DOMParser;
                        u = m.parseFromString(l, c);
                        break;
                    case "json":
                        u = JSON.parse(l);
                        break;
                    default:
                        u = l
                    }
                    window.setTimeout(function() {
                        t && t(u),
                        r.manager.itemEnd(e)
                    }, 0)
                } catch (g) {
                    window.setTimeout(function() {
                        n && n(g),
                        r.manager.itemError(e)
                    }, 0)
                }
            } else {
                var v = new XMLHttpRequest;
                v.open("GET", e, !0),
                v.addEventListener("load", function(i) {
                    var a = i.target.response;
                    ph.add(e, a),
                    200 === this.status ? (t && t(a),
                    r.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."),
                    t && t(a),
                    r.manager.itemEnd(e)) : (n && n(i),
                    r.manager.itemError(e))
                }, !1),
                void 0 !== i && v.addEventListener("progress", function(e) {
                    i(e)
                }, !1),
                v.addEventListener("error", function(t) {
                    n && n(t),
                    r.manager.itemError(e)
                }, !1),
                void 0 !== this.responseType && (v.responseType = this.responseType),
                void 0 !== this.withCredentials && (v.withCredentials = this.withCredentials),
                v.overrideMimeType && v.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"),
                v.send(null)
            }
            return r.manager.itemStart(e),
            v
        },
        setPath: function(e) {
            return this.path = e,
            this
        },
        setResponseType: function(e) {
            return this.responseType = e,
            this
        },
        setWithCredentials: function(e) {
            return this.withCredentials = e,
            this
        },
        setMimeType: function(e) {
            return this.mimeType = e,
            this
        }
    }),
    Object.assign(wi.prototype, {
        load: function(e, t, i, n) {
            function r(r) {
                c.load(e[r], function(e) {
                    var i = a._parser(e, !0);
                    o[r] = {
                        width: i.width,
                        height: i.height,
                        format: i.format,
                        mipmaps: i.mipmaps
                    },
                    h += 1,
                    6 === h && (1 === i.mipmapCount && (s.minFilter = qa),
                    s.format = i.format,
                    s.needsUpdate = !0,
                    t && t(s))
                }, i, n)
            }
            var a = this
              , o = []
              , s = new Mt;
            s.image = o;
            var c = new _i(this.manager);
            if (c.setPath(this.path),
            c.setResponseType("arraybuffer"),
            Array.isArray(e))
                for (var h = 0, l = 0, u = e.length; u > l; ++l)
                    r(l);
            else
                c.load(e, function(e) {
                    var i = a._parser(e, !0);
                    if (i.isCubemap)
                        for (var n = i.mipmaps.length / i.mipmapCount, r = 0; n > r; r++) {
                            o[r] = {
                                mipmaps: []
                            };
                            for (var c = 0; c < i.mipmapCount; c++)
                                o[r].mipmaps.push(i.mipmaps[r * i.mipmapCount + c]),
                                o[r].format = i.format,
                                o[r].width = i.width,
                                o[r].height = i.height
                        }
                    else
                        s.image.width = i.width,
                        s.image.height = i.height,
                        s.mipmaps = i.mipmaps;
                    1 === i.mipmapCount && (s.minFilter = qa),
                    s.format = i.format,
                    s.needsUpdate = !0,
                    t && t(s)
                }, i, n);
            return s
        },
        setPath: function(e) {
            return this.path = e,
            this
        }
    });
    var fh = Mi;
    Object.assign(Mi.prototype, {
        load: function(e, t, i, n) {
            var r = this
              , a = new X
              , o = new _i(this.manager);
            return o.setResponseType("arraybuffer"),
            o.load(e, function(e) {
                var i = r._parser(e);
                i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width,
                a.image.height = i.height,
                a.image.data = i.data),
                a.wrapS = void 0 !== i.wrapS ? i.wrapS : Va,
                a.wrapT = void 0 !== i.wrapT ? i.wrapT : Va,
                a.magFilter = void 0 !== i.magFilter ? i.magFilter : qa,
                a.minFilter = void 0 !== i.minFilter ? i.minFilter : Ja,
                a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1,
                void 0 !== i.format && (a.format = i.format),
                void 0 !== i.type && (a.type = i.type),
                void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps),
                1 === i.mipmapCount && (a.minFilter = qa),
                a.needsUpdate = !0,
                t && t(a, i))
            }, i, n),
            a
        }
    }),
    Object.assign(Ei.prototype, {
        load: function(e, t, i, n) {
            var r = this
              , a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            if (a.onload = function() {
                a.onload = null,
                URL.revokeObjectURL(a.src),
                t && t(a),
                r.manager.itemEnd(e)
            }
            ,
            a.onerror = n,
            0 === e.indexOf("data:"))
                a.src = e;
            else if (void 0 !== this.crossOrigin)
                a.crossOrigin = this.crossOrigin,
                a.src = e;
            else {
                var o = new _i;
                o.setPath(this.path),
                o.setResponseType("blob"),
                o.setWithCredentials(this.withCredentials),
                o.load(e, function(e) {
                    a.src = URL.createObjectURL(e)
                }, i, n)
            }
            return r.manager.itemStart(e),
            a
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e,
            this
        },
        setWithCredentials: function(e) {
            return this.withCredentials = e,
            this
        },
        setPath: function(e) {
            return this.path = e,
            this
        }
    }),
    Object.assign(Ti.prototype, {
        load: function(e, t, i, n) {
            function r(i) {
                o.load(e[i], function(e) {
                    a.images[i] = e,
                    s++,
                    6 === s && (a.needsUpdate = !0,
                    t && t(a))
                }, void 0, n)
            }
            var a = new l
              , o = new Ei(this.manager);
            o.setCrossOrigin(this.crossOrigin),
            o.setPath(this.path);
            for (var s = 0, c = 0; c < e.length; ++c)
                r(c);
            return a
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e,
            this
        },
        setPath: function(e) {
            return this.path = e,
            this
        }
    }),
    Object.assign(Si.prototype, {
        load: function(e, t, i, r) {
            var a = new n
              , o = new Ei(this.manager);
            return o.setCrossOrigin(this.crossOrigin),
            o.setWithCredentials(this.withCredentials),
            o.setPath(this.path),
            o.load(e, function(i) {
                var n = e.search(/\.(jpg|jpeg)$/) > 0 || 0 === e.search(/^data\:image\/jpeg/);
                a.format = n ? uo : po,
                a.image = i,
                a.needsUpdate = !0,
                void 0 !== t && t(a)
            }, i, r),
            a
        },
        setCrossOrigin: function(e) {
            return this.crossOrigin = e,
            this
        },
        setWithCredentials: function(e) {
            return this.withCredentials = e,
            this
        },
        setPath: function(e) {
            return this.path = e,
            this
        }
    }),
    Ai.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: Ai,
        isLight: !0,
        copy: function(e) {
            return ce.prototype.copy.call(this, e),
            this.color.copy(e.color),
            this.intensity = e.intensity,
            this
        },
        toJSON: function(e) {
            var t = ce.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(),
            t.object.intensity = this.intensity,
            void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (t.object.distance = this.distance),
            void 0 !== this.angle && (t.object.angle = this.angle),
            void 0 !== this.decay && (t.object.decay = this.decay),
            void 0 !== this.penumbra && (t.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()),
            t
        }
    }),
    Li.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Li,
        isHemisphereLight: !0,
        copy: function(e) {
            return Ai.prototype.copy.call(this, e),
            this.groundColor.copy(e.groundColor),
            this
        }
    }),
    Object.assign(Ri.prototype, {
        copy: function(e) {
            return this.camera = e.camera.clone(),
            this.bias = e.bias,
            this.radius = e.radius,
            this.mapSize.copy(e.mapSize),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var e = {};
            return 0 !== this.bias && (e.bias = this.bias),
            1 !== this.radius && (e.radius = this.radius),
            (512 !== this.mapSize.x || 512 !== this.mapSize.y) && (e.mapSize = this.mapSize.toArray()),
            e.camera = this.camera.toJSON(!1).object,
            delete e.camera.matrix,
            e
        }
    }),
    Pi.prototype = Object.assign(Object.create(Ri.prototype), {
        constructor: Pi,
        isSpotLightShadow: !0,
        update: function(e) {
            var t = 2 * Jo.RAD2DEG * e.angle
              , i = this.mapSize.width / this.mapSize.height
              , n = e.distance || 500
              , r = this.camera;
            (t !== r.fov || i !== r.aspect || n !== r.far) && (r.fov = t,
            r.aspect = i,
            r.far = n,
            r.updateProjectionMatrix())
        }
    }),
    Ci.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Ci,
        isSpotLight: !0,
        copy: function(e) {
            return Ai.prototype.copy.call(this, e),
            this.distance = e.distance,
            this.angle = e.angle,
            this.penumbra = e.penumbra,
            this.decay = e.decay,
            this.target = e.target.clone(),
            this.shadow = e.shadow.clone(),
            this
        }
    }),
    Ii.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Ii,
        isPointLight: !0,
        copy: function(e) {
            return Ai.prototype.copy.call(this, e),
            this.distance = e.distance,
            this.decay = e.decay,
            this.shadow = e.shadow.clone(),
            this
        }
    }),
    Ui.prototype = Object.assign(Object.create(Ri.prototype), {
        constructor: Ui
    }),
    Di.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Di,
        isDirectionalLight: !0,
        copy: function(e) {
            return Ai.prototype.copy.call(this, e),
            this.target = e.target.clone(),
            this.shadow = e.shadow.clone(),
            this
        }
    }),
    Ni.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Ni,
        isAmbientLight: !0
    });
    var mh = {
        arraySlice: function(e, t, i) {
            return mh.isTypedArray(e) ? new e.constructor(e.subarray(t, i)) : e.slice(t, i)
        },
        convertArray: function(e, t, i) {
            return !e || !i && e.constructor === t ? e : "number" == typeof t.BYTES_PER_ELEMENT ? new t(e) : Array.prototype.slice.call(e)
        },
        isTypedArray: function(e) {
            return ArrayBuffer.isView(e) && !(e instanceof DataView)
        },
        getKeyframeOrder: function(e) {
            function t(t, i) {
                return e[t] - e[i]
            }
            for (var i = e.length, n = new Array(i), r = 0; r !== i; ++r)
                n[r] = r;
            return n.sort(t),
            n
        },
        sortedArray: function(e, t, i) {
            for (var n = e.length, r = new e.constructor(n), a = 0, o = 0; o !== n; ++a)
                for (var s = i[a] * t, c = 0; c !== t; ++c)
                    r[o++] = e[s + c];
            return r
        },
        flattenJSON: function(e, t, i, n) {
            for (var r = 1, a = e[0]; void 0 !== a && void 0 === a[n]; )
                a = e[r++];
            if (void 0 !== a) {
                var o = a[n];
                if (void 0 !== o)
                    if (Array.isArray(o)) {
                        do
                            o = a[n],
                            void 0 !== o && (t.push(a.time),
                            i.push.apply(i, o)),
                            a = e[r++];
                        while (void 0 !== a)
                    } else if (void 0 !== o.toArray) {
                        do
                            o = a[n],
                            void 0 !== o && (t.push(a.time),
                            o.toArray(i, i.length)),
                            a = e[r++];
                        while (void 0 !== a)
                    } else
                        do
                            o = a[n],
                            void 0 !== o && (t.push(a.time),
                            i.push(o)),
                            a = e[r++];
                        while (void 0 !== a)
            }
        }
    };
    Oi.prototype = {
        constructor: Oi,
        evaluate: function(e) {
            var t = this.parameterPositions
              , i = this._cachedIndex
              , n = t[i]
              , r = t[i - 1];
            e: {
                t: {
                    var a;
                    i: {
                        n: if (!(n > e)) {
                            for (var o = i + 2; ; ) {
                                if (void 0 === n) {
                                    if (r > e)
                                        break n;
                                    return i = t.length,
                                    this._cachedIndex = i,
                                    this.afterEnd_(i - 1, e, r)
                                }
                                if (i === o)
                                    break;
                                if (r = n,
                                n = t[++i],
                                n > e)
                                    break t
                            }
                            a = t.length;
                            break i
                        }
                        {
                            if (e >= r)
                                break e;
                            var s = t[1];
                            s > e && (i = 2,
                            r = s);
                            for (var o = i - 2; ; ) {
                                if (void 0 === r)
                                    return this._cachedIndex = 0,
                                    this.beforeStart_(0, e, n);
                                if (i === o)
                                    break;
                                if (n = r,
                                r = t[--i - 1],
                                e >= r)
                                    break t
                            }
                            a = i,
                            i = 0
                        }
                    }
                    for (; a > i; ) {
                        var c = i + a >>> 1;
                        e < t[c] ? a = c : i = c + 1
                    }
                    if (n = t[i],
                    r = t[i - 1],
                    void 0 === r)
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, e, n);
                    if (void 0 === n)
                        return i = t.length,
                        this._cachedIndex = i,
                        this.afterEnd_(i - 1, r, e)
                }
                this._cachedIndex = i,
                this.intervalChanged_(i, r, n)
            }
            return this.interpolate_(i, r, e, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(e) {
            for (var t = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = e * n, a = 0; a !== n; ++a)
                t[a] = i[r + a];
            return t
        },
        interpolate_: function() {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function() {}
    },
    Object.assign(Oi.prototype, {
        beforeStart_: Oi.prototype.copySampleValue_,
        afterEnd_: Oi.prototype.copySampleValue_
    }),
    Fi.prototype = Object.assign(Object.create(Oi.prototype), {
        constructor: Fi,
        DefaultSettings_: {
            endingStart: Do,
            endingEnd: Do
        },
        intervalChanged_: function(e, t, i) {
            var n = this.parameterPositions
              , r = e - 2
              , a = e + 1
              , o = n[r]
              , s = n[a];
            if (void 0 === o)
                switch (this.getSettings_().endingStart) {
                case No:
                    r = e,
                    o = 2 * t - i;
                    break;
                case Oo:
                    r = n.length - 2,
                    o = t + n[r] - n[r + 1];
                    break;
                default:
                    r = e,
                    o = i
                }
            if (void 0 === s)
                switch (this.getSettings_().endingEnd) {
                case No:
                    a = e,
                    s = 2 * i - t;
                    break;
                case Oo:
                    a = 1,
                    s = i + n[1] - n[0];
                    break;
                default:
                    a = e - 1,
                    s = t
                }
            var c = .5 * (i - t)
              , h = this.valueSize;
            this._weightPrev = c / (t - o),
            this._weightNext = c / (s - i),
            this._offsetPrev = r * h,
            this._offsetNext = a * h
        },
        interpolate_: function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (i - t) / (n - t), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, b = 0; b !== o; ++b)
                r[b] = g * a[h + b] + v * a[c + b] + y * a[s + b] + x * a[l + b];
            return r
        }
    }),
    zi.prototype = Object.assign(Object.create(Oi.prototype), {
        constructor: zi,
        interpolate_: function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = e * o, c = s - o, h = (i - t) / (n - t), l = 1 - h, u = 0; u !== o; ++u)
                r[u] = a[c + u] * l + a[s + u] * h;
            return r
        }
    }),
    Bi.prototype = Object.assign(Object.create(Oi.prototype), {
        constructor: Bi,
        interpolate_: function(e) {
            return this.copySampleValue_(e - 1)
        }
    });
    var gh;
    gh = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: Io,
        InterpolantFactoryMethodDiscrete: function(e) {
            return new Bi(this.times,this.values,this.getValueSize(),e)
        },
        InterpolantFactoryMethodLinear: function(e) {
            return new zi(this.times,this.values,this.getValueSize(),e)
        },
        InterpolantFactoryMethodSmooth: function(e) {
            return new Fi(this.times,this.values,this.getValueSize(),e)
        },
        setInterpolation: function(e) {
            var t;
            switch (e) {
            case Co:
                t = this.InterpolantFactoryMethodDiscrete;
                break;
            case Io:
                t = this.InterpolantFactoryMethodLinear;
                break;
            case Uo:
                t = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === t) {
                var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (e === this.DefaultInterpolation)
                        throw new Error(i);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return void console.warn(i)
            }
            this.createInterpolant = t
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return Co;
            case this.InterpolantFactoryMethodLinear:
                return Io;
            case this.InterpolantFactoryMethodSmooth:
                return Uo
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(e) {
            if (0 !== e)
                for (var t = this.times, i = 0, n = t.length; i !== n; ++i)
                    t[i] += e;
            return this
        },
        scale: function(e) {
            if (1 !== e)
                for (var t = this.times, i = 0, n = t.length; i !== n; ++i)
                    t[i] *= e;
            return this
        },
        trim: function(e, t) {
            for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < e; )
                ++r;
            for (; -1 !== a && i[a] > t; )
                --a;
            if (++a,
            0 !== r || a !== n) {
                r >= a && (a = Math.max(a, 1),
                r = a - 1);
                var o = this.getValueSize();
                this.times = mh.arraySlice(i, r, a),
                this.values = mh.arraySlice(this.values, r * o, a * o)
            }
            return this
        },
        validate: function() {
            var e = !0
              , t = this.getValueSize();
            t - Math.floor(t) !== 0 && (console.error("invalid value size in track", this),
            e = !1);
            var i = this.times
              , n = this.values
              , r = i.length;
            0 === r && (console.error("track is empty", this),
            e = !1);
            for (var a = null, o = 0; o !== r; o++) {
                var s = i[o];
                if ("number" == typeof s && isNaN(s)) {
                    console.error("time is not a valid number", this, o, s),
                    e = !1;
                    break
                }
                if (null !== a && a > s) {
                    console.error("out of order keys", this, o, s, a),
                    e = !1;
                    break
                }
                a = s
            }
            if (void 0 !== n && mh.isTypedArray(n))
                for (var o = 0, c = n.length; o !== c; ++o) {
                    var h = n[o];
                    if (isNaN(h)) {
                        console.error("value is not a valid number", this, o, h),
                        e = !1;
                        break
                    }
                }
            return e
        },
        optimize: function() {
            for (var e = this.times, t = this.values, i = this.getValueSize(), n = this.getInterpolation() === Uo, r = 1, a = e.length - 1, o = 1; a > o; ++o) {
                var s = !1
                  , c = e[o]
                  , h = e[o + 1];
                if (c !== h && (1 !== o || c !== c[0]))
                    if (n)
                        s = !0;
                    else
                        for (var l = o * i, u = l - i, p = l + i, d = 0; d !== i; ++d) {
                            var f = t[l + d];
                            if (f !== t[u + d] || f !== t[p + d]) {
                                s = !0;
                                break
                            }
                        }
                if (s) {
                    if (o !== r) {
                        e[r] = e[o];
                        for (var m = o * i, g = r * i, d = 0; d !== i; ++d)
                            t[g + d] = t[m + d]
                    }
                    ++r
                }
            }
            if (a > 0) {
                e[r] = e[a];
                for (var m = a * i, g = r * i, d = 0; d !== i; ++d)
                    t[g + d] = t[m + d];
                ++r
            }
            return r !== e.length && (this.times = mh.arraySlice(e, 0, r),
            this.values = mh.arraySlice(t, 0, r * i)),
            this
        }
    },
    Hi.prototype = Object.assign(Object.create(gh), {
        constructor: Hi,
        ValueTypeName: "vector"
    }),
    Vi.prototype = Object.assign(Object.create(Oi.prototype), {
        constructor: Vi,
        interpolate_: function(e, t, i, n) {
            for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = e * o, h = (i - t) / (n - t), l = c + o; c !== l; c += 4)
                s.slerpFlat(r, 0, a, c - o, a, c, h);
            return r
        }
    }),
    ki.prototype = Object.assign(Object.create(gh), {
        constructor: ki,
        ValueTypeName: "quaternion",
        DefaultInterpolation: Io,
        InterpolantFactoryMethodLinear: function(e) {
            return new Vi(this.times,this.values,this.getValueSize(),e)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),
    ji.prototype = Object.assign(Object.create(gh), {
        constructor: ji,
        ValueTypeName: "number"
    }),
    Wi.prototype = Object.assign(Object.create(gh), {
        constructor: Wi,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: Co,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    Xi.prototype = Object.assign(Object.create(gh), {
        constructor: Xi,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: Co,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    Yi.prototype = Object.assign(Object.create(gh), {
        constructor: Yi,
        ValueTypeName: "color"
    }),
    qi.prototype = gh,
    gh.constructor = qi,
    Object.assign(qi, {
        parse: function(e) {
            if (void 0 === e.type)
                throw new Error("track type undefined, can not parse");
            var t = qi._getTrackTypeForValueTypeName(e.type);
            if (void 0 === e.times) {
                var i = []
                  , n = [];
                mh.flattenJSON(e.keys, i, n, "value"),
                e.times = i,
                e.values = n
            }
            return void 0 !== t.parse ? t.parse(e) : new t(e.name,e.times,e.values,e.interpolation)
        },
        toJSON: function(e) {
            var t, i = e.constructor;
            if (void 0 !== i.toJSON)
                t = i.toJSON(e);
            else {
                t = {
                    name: e.name,
                    times: mh.convertArray(e.times, Array),
                    values: mh.convertArray(e.values, Array)
                };
                var n = e.getInterpolation();
                n !== e.DefaultInterpolation && (t.interpolation = n)
            }
            return t.type = e.ValueTypeName,
            t
        },
        _getTrackTypeForValueTypeName: function(e) {
            switch (e.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return ji;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return Hi;
            case "color":
                return Yi;
            case "quaternion":
                return ki;
            case "bool":
            case "boolean":
                return Xi;
            case "string":
                return Wi
            }
            throw new Error("Unsupported typeName: " + e)
        }
    }),
    Zi.prototype = {
        constructor: Zi,
        resetDuration: function() {
            for (var e = this.tracks, t = 0, i = 0, n = e.length; i !== n; ++i) {
                var r = this.tracks[i];
                t = Math.max(t, r.times[r.times.length - 1])
            }
            this.duration = t
        },
        trim: function() {
            for (var e = 0; e < this.tracks.length; e++)
                this.tracks[e].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var e = 0; e < this.tracks.length; e++)
                this.tracks[e].optimize();
            return this
        }
    },
    Object.assign(Zi, {
        parse: function(e) {
            for (var t = [], i = e.tracks, n = 1 / (e.fps || 1), r = 0, a = i.length; r !== a; ++r)
                t.push(qi.parse(i[r]).scale(n));
            return new Zi(e.name,e.duration,t)
        },
        toJSON: function(e) {
            for (var t = [], i = e.tracks, n = {
                name: e.name,
                duration: e.duration,
                tracks: t
            }, r = 0, a = i.length; r !== a; ++r)
                t.push(qi.toJSON(i[r]));
            return n
        },
        CreateFromMorphTargetSequence: function(e, t, i, n) {
            for (var r = t.length, a = [], o = 0; r > o; o++) {
                var s = []
                  , c = [];
                s.push((o + r - 1) % r, o, (o + 1) % r),
                c.push(0, 1, 0);
                var h = mh.getKeyframeOrder(s);
                s = mh.sortedArray(s, 1, h),
                c = mh.sortedArray(c, 1, h),
                n || 0 !== s[0] || (s.push(r),
                c.push(c[0])),
                a.push(new ji(".morphTargetInfluences[" + t[o].name + "]",s,c).scale(1 / i))
            }
            return new Zi(e,-1,a)
        },
        findByName: function(e, t) {
            var i = e;
            if (!Array.isArray(e)) {
                var n = e;
                i = n.geometry && n.geometry.animations || n.animations
            }
            for (var r = 0; r < i.length; r++)
                if (i[r].name === t)
                    return i[r];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(e, t, i) {
            for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = e.length; o > a; a++) {
                var s = e[a]
                  , c = s.name.match(r);
                if (c && c.length > 1) {
                    var h = c[1]
                      , l = n[h];
                    l || (n[h] = l = []),
                    l.push(s)
                }
            }
            var u = [];
            for (var h in n)
                u.push(Zi.CreateFromMorphTargetSequence(h, n[h], t, i));
            return u
        },
        parseAnimation: function(e, t) {
            if (!e)
                return console.error("  no animation in JSONLoader data"),
                null;
            for (var i = function(e, t, i, n, r) {
                if (0 !== i.length) {
                    var a = []
                      , o = [];
                    mh.flattenJSON(i, a, o, n),
                    0 !== a.length && r.push(new e(t,a,o))
                }
            }, n = [], r = e.name || "default", a = e.length || -1, o = e.fps || 30, s = e.hierarchy || [], c = 0; c < s.length; c++) {
                var h = s[c].keys;
                if (h && 0 !== h.length)
                    if (h[0].morphTargets) {
                        for (var l = {}, u = 0; u < h.length; u++)
                            if (h[u].morphTargets)
                                for (var p = 0; p < h[u].morphTargets.length; p++)
                                    l[h[u].morphTargets[p]] = -1;
                        for (var d in l) {
                            for (var f = [], m = [], p = 0; p !== h[u].morphTargets.length; ++p) {
                                var g = h[u];
                                f.push(g.time),
                                m.push(g.morphTarget === d ? 1 : 0)
                            }
                            n.push(new ji(".morphTargetInfluence[" + d + "]",f,m))
                        }
                        a = l.length * (o || 1)
                    } else {
                        var v = ".bones[" + t[c].name + "]";
                        i(Hi, v + ".position", h, "pos", n),
                        i(ki, v + ".quaternion", h, "rot", n),
                        i(Hi, v + ".scale", h, "scl", n)
                    }
            }
            if (0 === n.length)
                return null;
            var y = new Zi(r,a,n);
            return y
        }
    }),
    Object.assign(Ji.prototype, {
        load: function(e, t, i, n) {
            var r = this
              , a = new _i(r.manager);
            a.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, i, n)
        },
        setTextures: function(e) {
            this.textures = e
        },
        parse: function(e) {
            function t(e) {
                return void 0 === n[e] && console.warn("THREE.MaterialLoader: Undefined texture", e),
                n[e]
            }
            var n = this.textures
              , r = new uh[e.type];
            if (void 0 !== e.uuid && (r.uuid = e.uuid),
            void 0 !== e.name && (r.name = e.name),
            void 0 !== e.color && r.color.setHex(e.color),
            void 0 !== e.roughness && (r.roughness = e.roughness),
            void 0 !== e.metalness && (r.metalness = e.metalness),
            void 0 !== e.emissive && r.emissive.setHex(e.emissive),
            void 0 !== e.specular && r.specular.setHex(e.specular),
            void 0 !== e.shininess && (r.shininess = e.shininess),
            void 0 !== e.clearCoat && (r.clearCoat = e.clearCoat),
            void 0 !== e.clearCoatRoughness && (r.clearCoatRoughness = e.clearCoatRoughness),
            void 0 !== e.uniforms && (r.uniforms = e.uniforms),
            void 0 !== e.vertexShader && (r.vertexShader = e.vertexShader),
            void 0 !== e.fragmentShader && (r.fragmentShader = e.fragmentShader),
            void 0 !== e.vertexColors && (r.vertexColors = e.vertexColors),
            void 0 !== e.fog && (r.fog = e.fog),
            void 0 !== e.shading && (r.shading = e.shading),
            void 0 !== e.blending && (r.blending = e.blending),
            void 0 !== e.side && (r.side = e.side),
            void 0 !== e.opacity && (r.opacity = e.opacity),
            void 0 !== e.transparent && (r.transparent = e.transparent),
            void 0 !== e.alphaTest && (r.alphaTest = e.alphaTest),
            void 0 !== e.depthTest && (r.depthTest = e.depthTest),
            void 0 !== e.depthWrite && (r.depthWrite = e.depthWrite),
            void 0 !== e.colorWrite && (r.colorWrite = e.colorWrite),
            void 0 !== e.wireframe && (r.wireframe = e.wireframe),
            void 0 !== e.wireframeLinewidth && (r.wireframeLinewidth = e.wireframeLinewidth),
            void 0 !== e.wireframeLinecap && (r.wireframeLinecap = e.wireframeLinecap),
            void 0 !== e.wireframeLinejoin && (r.wireframeLinejoin = e.wireframeLinejoin),
            void 0 !== e.skinning && (r.skinning = e.skinning),
            void 0 !== e.morphTargets && (r.morphTargets = e.morphTargets),
            void 0 !== e.size && (r.size = e.size),
            void 0 !== e.sizeAttenuation && (r.sizeAttenuation = e.sizeAttenuation),
            void 0 !== e.map && (r.map = t(e.map)),
            void 0 !== e.alphaMap && (r.alphaMap = t(e.alphaMap),
            r.transparent = !0),
            void 0 !== e.bumpMap && (r.bumpMap = t(e.bumpMap)),
            void 0 !== e.bumpScale && (r.bumpScale = e.bumpScale),
            void 0 !== e.normalMap && (r.normalMap = t(e.normalMap)),
            void 0 !== e.normalScale) {
                var a = e.normalScale;
                Array.isArray(a) === !1 && (a = [a, a]),
                r.normalScale = (new i).fromArray(a)
            }
            if (void 0 !== e.displacementMap && (r.displacementMap = t(e.displacementMap)),
            void 0 !== e.displacementScale && (r.displacementScale = e.displacementScale),
            void 0 !== e.displacementBias && (r.displacementBias = e.displacementBias),
            void 0 !== e.roughnessMap && (r.roughnessMap = t(e.roughnessMap)),
            void 0 !== e.metalnessMap && (r.metalnessMap = t(e.metalnessMap)),
            void 0 !== e.emissiveMap && (r.emissiveMap = t(e.emissiveMap)),
            void 0 !== e.emissiveIntensity && (r.emissiveIntensity = e.emissiveIntensity),
            void 0 !== e.specularMap && (r.specularMap = t(e.specularMap)),
            void 0 !== e.envMap && (r.envMap = t(e.envMap)),
            void 0 !== e.reflectivity && (r.reflectivity = e.reflectivity),
            void 0 !== e.lightMap && (r.lightMap = t(e.lightMap)),
            void 0 !== e.lightMapIntensity && (r.lightMapIntensity = e.lightMapIntensity),
            void 0 !== e.aoMap && (r.aoMap = t(e.aoMap)),
            void 0 !== e.aoMapIntensity && (r.aoMapIntensity = e.aoMapIntensity),
            void 0 !== e.gradientMap && (r.gradientMap = t(e.gradientMap)),
            void 0 !== e.materials)
                for (var o = 0, s = e.materials.length; s > o; o++)
                    r.materials.push(this.parse(e.materials[o]));
            return r
        }
    }),
    Object.assign(Qi.prototype, {
        load: function(e, t, i, n) {
            var r = this
              , a = new _i(r.manager);
            a.load(e, function(e) {
                t(r.parse(JSON.parse(e)))
            }, i, n)
        },
        parse: function(e) {
            var t = new Se
              , i = e.data.index
              , n = {
                Int8Array: Int8Array,
                Uint8Array: Uint8Array,
                Uint8ClampedArray: Uint8ClampedArray,
                Int16Array: Int16Array,
                Uint16Array: Uint16Array,
                Int32Array: Int32Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array
            };
            if (void 0 !== i) {
                var r = new n[i.type](i.array);
                t.setIndex(new de(r,1))
            }
            var a = e.data.attributes;
            for (var o in a) {
                var s = a[o]
                  , r = new n[s.type](s.array);
                t.addAttribute(o, new de(r,s.itemSize,s.normalized))
            }
            var h = e.data.groups || e.data.drawcalls || e.data.offsets;
            if (void 0 !== h)
                for (var l = 0, u = h.length; l !== u; ++l) {
                    var p = h[l];
                    t.addGroup(p.start, p.count, p.materialIndex)
                }
            var d = e.data.boundingSphere;
            if (void 0 !== d) {
                var f = new c;
                void 0 !== d.center && f.fromArray(d.center),
                t.boundingSphere = new ee(f,d.radius)
            }
            return t
        }
    }),
    Ki.prototype = {
        constructor: Ki,
        crossOrigin: void 0,
        extractUrlBase: function(e) {
            var t = e.split("/");
            return 1 === t.length ? "./" : (t.pop(),
            t.join("/") + "/")
        },
        initMaterials: function(e, t, i) {
            for (var n = [], r = 0; r < e.length; ++r)
                n[r] = this.createMaterial(e[r], t, i);
            return n
        },
        createMaterial: function() {
            var e, t, i;
            return function(n, r, a) {
                function o(e, i, n, o, c) {
                    var h, l = r + e, u = Ki.Handlers.get(l);
                    null !== u ? h = u.load(l) : (t.setCrossOrigin(a),
                    h = t.load(l)),
                    void 0 !== i && (h.repeat.fromArray(i),
                    1 !== i[0] && (h.wrapS = Ha),
                    1 !== i[1] && (h.wrapT = Ha)),
                    void 0 !== n && h.offset.fromArray(n),
                    void 0 !== o && ("repeat" === o[0] && (h.wrapS = Ha),
                    "mirror" === o[0] && (h.wrapS = ka),
                    "repeat" === o[1] && (h.wrapT = Ha),
                    "mirror" === o[1] && (h.wrapT = ka)),
                    void 0 !== c && (h.anisotropy = c);
                    var p = Jo.generateUUID();
                    return s[p] = h,
                    p
                }
                void 0 === e && (e = new W),
                void 0 === t && (t = new Si),
                void 0 === i && (i = new Ji);
                var s = {}
                  , c = {
                    uuid: Jo.generateUUID(),
                    type: "MeshLambertMaterial"
                };
                for (var h in n) {
                    var l = n[h];
                    switch (h) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        c.name = l;
                        break;
                    case "blending":
                        c.blending = $r[l];
                        break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", h, "is no longer supported.");
                        break;
                    case "colorDiffuse":
                        c.color = e.fromArray(l).getHex();
                        break;
                    case "colorSpecular":
                        c.specular = e.fromArray(l).getHex();
                        break;
                    case "colorEmissive":
                        c.emissive = e.fromArray(l).getHex();
                        break;
                    case "specularCoef":
                        c.shininess = l;
                        break;
                    case "shading":
                        "basic" === l.toLowerCase() && (c.type = "MeshBasicMaterial"),
                        "phong" === l.toLowerCase() && (c.type = "MeshPhongMaterial"),
                        "standard" === l.toLowerCase() && (c.type = "MeshStandardMaterial");
                        break;
                    case "mapDiffuse":
                        c.map = o(l, n.mapDiffuseRepeat, n.mapDiffuseOffset, n.mapDiffuseWrap, n.mapDiffuseAnisotropy);
                        break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        c.emissiveMap = o(l, n.mapEmissiveRepeat, n.mapEmissiveOffset, n.mapEmissiveWrap, n.mapEmissiveAnisotropy);
                        break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        c.lightMap = o(l, n.mapLightRepeat, n.mapLightOffset, n.mapLightWrap, n.mapLightAnisotropy);
                        break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        c.aoMap = o(l, n.mapAORepeat, n.mapAOOffset, n.mapAOWrap, n.mapAOAnisotropy);
                        break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        c.bumpMap = o(l, n.mapBumpRepeat, n.mapBumpOffset, n.mapBumpWrap, n.mapBumpAnisotropy);
                        break;
                    case "mapBumpScale":
                        c.bumpScale = l;
                        break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        c.normalMap = o(l, n.mapNormalRepeat, n.mapNormalOffset, n.mapNormalWrap, n.mapNormalAnisotropy);
                        break;
                    case "mapNormalFactor":
                        c.normalScale = [l, l];
                        break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        c.specularMap = o(l, n.mapSpecularRepeat, n.mapSpecularOffset, n.mapSpecularWrap, n.mapSpecularAnisotropy);
                        break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        c.metalnessMap = o(l, n.mapMetalnessRepeat, n.mapMetalnessOffset, n.mapMetalnessWrap, n.mapMetalnessAnisotropy);
                        break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        c.roughnessMap = o(l, n.mapRoughnessRepeat, n.mapRoughnessOffset, n.mapRoughnessWrap, n.mapRoughnessAnisotropy);
                        break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        c.alphaMap = o(l, n.mapAlphaRepeat, n.mapAlphaOffset, n.mapAlphaWrap, n.mapAlphaAnisotropy);
                        break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        c.side = Gr;
                        break;
                    case "doubleSided":
                        c.side = Hr;
                        break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                        c.opacity = l;
                        break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        c[h] = l;
                        break;
                    case "vertexColors":
                        l === !0 && (c.vertexColors = Xr),
                        "face" === l && (c.vertexColors = Wr);
                        break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", h, l)
                    }
                }
                return "MeshBasicMaterial" === c.type && delete c.emissive,
                "MeshPhongMaterial" !== c.type && delete c.specular,
                c.opacity < 1 && (c.transparent = !0),
                i.setTextures(s),
                i.parse(c)
            }
        }()
    },
    Ki.Handlers = {
        handlers: [],
        add: function(e, t) {
            this.handlers.push(e, t)
        },
        get: function(e) {
            for (var t = this.handlers, i = 0, n = t.length; n > i; i += 2) {
                var r = t[i]
                  , a = t[i + 1];
                if (r.test(e))
                    return a
            }
            return null
        }
    },
    Object.assign($i.prototype, {
        load: function(e, t, i, n) {
            var r = this
              , a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Ki.prototype.extractUrlBase(e)
              , o = new _i(this.manager);
            o.setWithCredentials(this.withCredentials),
            o.load(e, function(i) {
                var n = JSON.parse(i)
                  , o = n.metadata;
                if (void 0 !== o) {
                    var s = o.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase())
                            return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase())
                            return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var c = r.parse(n, a);
                t(c.geometry, c.materials)
            }, i, n)
        },
        setTexturePath: function(e) {
            this.texturePath = e
        },
        parse: function(e, t) {
            function n(t) {
                function n(e, t) {
                    return e & 1 << t
                }
                var r, a, o, s, l, u, p, d, f, m, g, v, y, x, b, _, w, M, E, T, S, A, L, R, P, C, I, U = e.faces, D = e.vertices, N = e.normals, O = e.colors, F = 0;
                if (void 0 !== e.uvs) {
                    for (r = 0; r < e.uvs.length; r++)
                        e.uvs[r].length && F++;
                    for (r = 0; F > r; r++)
                        h.faceVertexUvs[r] = []
                }
                for (s = 0,
                l = D.length; l > s; )
                    M = new c,
                    M.x = D[s++] * t,
                    M.y = D[s++] * t,
                    M.z = D[s++] * t,
                    h.vertices.push(M);
                for (s = 0,
                l = U.length; l > s; )
                    if (m = U[s++],
                    g = n(m, 0),
                    v = n(m, 1),
                    y = n(m, 3),
                    x = n(m, 4),
                    b = n(m, 5),
                    _ = n(m, 6),
                    w = n(m, 7),
                    g) {
                        if (T = new ue,
                        T.a = U[s],
                        T.b = U[s + 1],
                        T.c = U[s + 3],
                        S = new ue,
                        S.a = U[s + 1],
                        S.b = U[s + 2],
                        S.c = U[s + 3],
                        s += 4,
                        v && (f = U[s++],
                        T.materialIndex = f,
                        S.materialIndex = f),
                        o = h.faces.length,
                        y)
                            for (r = 0; F > r; r++)
                                for (R = e.uvs[r],
                                h.faceVertexUvs[r][o] = [],
                                h.faceVertexUvs[r][o + 1] = [],
                                a = 0; 4 > a; a++)
                                    d = U[s++],
                                    C = R[2 * d],
                                    I = R[2 * d + 1],
                                    P = new i(C,I),
                                    2 !== a && h.faceVertexUvs[r][o].push(P),
                                    0 !== a && h.faceVertexUvs[r][o + 1].push(P);
                        if (x && (p = 3 * U[s++],
                        T.normal.set(N[p++], N[p++], N[p]),
                        S.normal.copy(T.normal)),
                        b)
                            for (r = 0; 4 > r; r++)
                                p = 3 * U[s++],
                                L = new c(N[p++],N[p++],N[p]),
                                2 !== r && T.vertexNormals.push(L),
                                0 !== r && S.vertexNormals.push(L);
                        if (_ && (u = U[s++],
                        A = O[u],
                        T.color.setHex(A),
                        S.color.setHex(A)),
                        w)
                            for (r = 0; 4 > r; r++)
                                u = U[s++],
                                A = O[u],
                                2 !== r && T.vertexColors.push(new W(A)),
                                0 !== r && S.vertexColors.push(new W(A));
                        h.faces.push(T),
                        h.faces.push(S)
                    } else {
                        if (E = new ue,
                        E.a = U[s++],
                        E.b = U[s++],
                        E.c = U[s++],
                        v && (f = U[s++],
                        E.materialIndex = f),
                        o = h.faces.length,
                        y)
                            for (r = 0; F > r; r++)
                                for (R = e.uvs[r],
                                h.faceVertexUvs[r][o] = [],
                                a = 0; 3 > a; a++)
                                    d = U[s++],
                                    C = R[2 * d],
                                    I = R[2 * d + 1],
                                    P = new i(C,I),
                                    h.faceVertexUvs[r][o].push(P);
                        if (x && (p = 3 * U[s++],
                        E.normal.set(N[p++], N[p++], N[p])),
                        b)
                            for (r = 0; 3 > r; r++)
                                p = 3 * U[s++],
                                L = new c(N[p++],N[p++],N[p]),
                                E.vertexNormals.push(L);
                        if (_ && (u = U[s++],
                        E.color.setHex(O[u])),
                        w)
                            for (r = 0; 3 > r; r++)
                                u = U[s++],
                                E.vertexColors.push(new W(O[u]));
                        h.faces.push(E)
                    }
            }
            function a() {
                var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                if (e.skinWeights)
                    for (var i = 0, n = e.skinWeights.length; n > i; i += t) {
                        var a = e.skinWeights[i]
                          , o = t > 1 ? e.skinWeights[i + 1] : 0
                          , s = t > 2 ? e.skinWeights[i + 2] : 0
                          , c = t > 3 ? e.skinWeights[i + 3] : 0;
                        h.skinWeights.push(new r(a,o,s,c))
                    }
                if (e.skinIndices)
                    for (var i = 0, n = e.skinIndices.length; n > i; i += t) {
                        var l = e.skinIndices[i]
                          , u = t > 1 ? e.skinIndices[i + 1] : 0
                          , p = t > 2 ? e.skinIndices[i + 2] : 0
                          , d = t > 3 ? e.skinIndices[i + 3] : 0;
                        h.skinIndices.push(new r(l,u,p,d))
                    }
                h.bones = e.bones,
                h.bones && h.bones.length > 0 && (h.skinWeights.length !== h.skinIndices.length || h.skinIndices.length !== h.vertices.length) && console.warn("When skinning, number of vertices (" + h.vertices.length + "), skinIndices (" + h.skinIndices.length + "), and skinWeights (" + h.skinWeights.length + ") should match.")
            }
            function o(t) {
                if (void 0 !== e.morphTargets)
                    for (var i = 0, n = e.morphTargets.length; n > i; i++) {
                        h.morphTargets[i] = {},
                        h.morphTargets[i].name = e.morphTargets[i].name,
                        h.morphTargets[i].vertices = [];
                        for (var r = h.morphTargets[i].vertices, a = e.morphTargets[i].vertices, o = 0, s = a.length; s > o; o += 3) {
                            var l = new c;
                            l.x = a[o] * t,
                            l.y = a[o + 1] * t,
                            l.z = a[o + 2] * t,
                            r.push(l)
                        }
                    }
                if (void 0 !== e.morphColors && e.morphColors.length > 0) {
                    console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                    for (var u = h.faces, p = e.morphColors[0].colors, i = 0, n = u.length; n > i; i++)
                        u[i].color.fromArray(p, 3 * i)
                }
            }
            function s() {
                var t = []
                  , i = [];
                void 0 !== e.animation && i.push(e.animation),
                void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
                for (var n = 0; n < i.length; n++) {
                    var r = Zi.parseAnimation(i[n], h.bones);
                    r && t.push(r)
                }
                if (h.morphTargets) {
                    var a = Zi.CreateClipsFromMorphTargetSequences(h.morphTargets, 10);
                    t = t.concat(a)
                }
                t.length > 0 && (h.animations = t)
            }
            var h = new Ee
              , l = void 0 !== e.scale ? 1 / e.scale : 1;
            if (n(l),
            a(),
            o(l),
            s(),
            h.computeFaceNormals(),
            h.computeBoundingSphere(),
            void 0 === e.materials || 0 === e.materials.length)
                return {
                    geometry: h
                };
            var u = Ki.prototype.initMaterials(e.materials, t, this.crossOrigin);
            return {
                geometry: h,
                materials: u
            }
        }
    }),
    Object.assign(en.prototype, {
        load: function(e, t, i, n) {
            "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
            var r = this
              , a = new _i(r.manager);
            a.load(e, function(i) {
                var n = null;
                try {
                    n = JSON.parse(i)
                } catch (a) {
                    return void console.error("THREE:ObjectLoader: Can't parse " + e + ".", a.message)
                }
                var o = n.metadata;
                return void 0 === o || void 0 === o.type || "geometry" === o.type.toLowerCase() ? void console.error("THREE.ObjectLoader: Can't load " + e + ". Use THREE.JSONLoader instead.") : void r.parse(n, t)
            }, i, n)
        },
        setTexturePath: function(e) {
            this.texturePath = e
        },
        setCrossOrigin: function(e) {
            this.crossOrigin = e
        },
        parse: function(e, t) {
            var i = this.parseGeometries(e.geometries)
              , n = this.parseImages(e.images, function() {
                void 0 !== t && t(o)
            })
              , r = this.parseTextures(e.textures, n)
              , a = this.parseMaterials(e.materials, r)
              , o = this.parseObject(e.object, i, a);
            return e.animations && (o.animations = this.parseAnimations(e.animations)),
            (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(o),
            o
        },
        parseGeometries: function(e) {
            var t = {};
            if (void 0 !== e)
                for (var i = new $i, n = new Qi, r = 0, a = e.length; a > r; r++) {
                    var o, s = e[r];
                    switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new lh[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        o = new lh[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new lh[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new lh[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new lh[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new lh[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "IcosahedronGeometry":
                    case "OctahedronGeometry":
                    case "TetrahedronGeometry":
                        o = new lh[s.type](s.radius,s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new lh[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new lh[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new lh[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new lh[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                        break;
                    case "BufferGeometry":
                        o = n.parse(s);
                        break;
                    case "Geometry":
                        o = i.parse(s.data, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                    }
                    o.uuid = s.uuid,
                    void 0 !== s.name && (o.name = s.name),
                    t[s.uuid] = o
                }
            return t
        },
        parseMaterials: function(e, t) {
            var i = {};
            if (void 0 !== e) {
                var n = new Ji;
                n.setTextures(t);
                for (var r = 0, a = e.length; a > r; r++) {
                    var o = n.parse(e[r]);
                    i[o.uuid] = o
                }
            }
            return i
        },
        parseAnimations: function(e) {
            for (var t = [], i = 0; i < e.length; i++) {
                var n = Zi.parse(e[i]);
                t.push(n)
            }
            return t
        },
        parseImages: function(e, t) {
            function i(e) {
                return n.manager.itemStart(e),
                o.load(e, function() {
                    n.manager.itemEnd(e)
                }, void 0, function() {
                    n.manager.itemError(e)
                })
            }
            var n = this
              , r = {};
            if (void 0 !== e && e.length > 0) {
                var a = new bi(t)
                  , o = new Ei(a);
                o.setCrossOrigin(this.crossOrigin);
                for (var s = 0, c = e.length; c > s; s++) {
                    var h = e[s]
                      , l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : n.texturePath + h.url;
                    r[h.uuid] = i(l)
                }
            }
            return r
        },
        parseTextures: function(e, t) {
            function i(e, t) {
                return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e),
                t[e])
            }
            var r = {};
            if (void 0 !== e)
                for (var a = 0, o = e.length; o > a; a++) {
                    var s = e[a];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                    var c = new n(t[s.image]);
                    c.needsUpdate = !0,
                    c.uuid = s.uuid,
                    void 0 !== s.name && (c.name = s.name),
                    void 0 !== s.mapping && (c.mapping = i(s.mapping, Ga)),
                    void 0 !== s.offset && c.offset.fromArray(s.offset),
                    void 0 !== s.repeat && c.repeat.fromArray(s.repeat),
                    void 0 !== s.wrap && (c.wrapS = i(s.wrap[0], ja),
                    c.wrapT = i(s.wrap[1], ja)),
                    void 0 !== s.minFilter && (c.minFilter = i(s.minFilter, Qa)),
                    void 0 !== s.magFilter && (c.magFilter = i(s.magFilter, Qa)),
                    void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy),
                    void 0 !== s.flipY && (c.flipY = s.flipY),
                    r[s.uuid] = c
                }
            return r
        },
        parseObject: function() {
            var e = new h;
            return function(t, i, n) {
                function r(e) {
                    return void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e),
                    i[e]
                }
                function a(e) {
                    return void 0 === e ? void 0 : (void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e),
                    n[e])
                }
                var o;
                switch (t.type) {
                case "Scene":
                    o = new ct,
                    void 0 !== t.background && Number.isInteger(t.background) && (o.background = new W(t.background)),
                    void 0 !== t.fog && ("Fog" === t.fog.type ? o.fog = new st(t.fog.color,t.fog.near,t.fog.far) : "FogExp2" === t.fog.type && (o.fog = new ot(t.fog.color,t.fog.density)));
                    break;
                case "PerspectiveCamera":
                    o = new Ce(t.fov,t.aspect,t.near,t.far),
                    void 0 !== t.focus && (o.focus = t.focus),
                    void 0 !== t.zoom && (o.zoom = t.zoom),
                    void 0 !== t.filmGauge && (o.filmGauge = t.filmGauge),
                    void 0 !== t.filmOffset && (o.filmOffset = t.filmOffset),
                    void 0 !== t.view && (o.view = Object.assign({}, t.view));
                    break;
                case "OrthographicCamera":
                    o = new Ie(t.left,t.right,t.top,t.bottom,t.near,t.far);
                    break;
                case "AmbientLight":
                    o = new Ni(t.color,t.intensity);
                    break;
                case "DirectionalLight":
                    o = new Di(t.color,t.intensity);
                    break;
                case "PointLight":
                    o = new Ii(t.color,t.intensity,t.distance,t.decay);
                    break;
                case "SpotLight":
                    o = new Ci(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);
                    break;
                case "HemisphereLight":
                    o = new Li(t.color,t.groundColor,t.intensity);
                    break;
                case "Mesh":
                    var s = r(t.geometry)
                      , c = a(t.material);
                    o = s.bones && s.bones.length > 0 ? new mt(s,c) : new Ae(s,c);
                    break;
                case "LOD":
                    o = new pt;
                    break;
                case "Line":
                    o = new vt(r(t.geometry),a(t.material),t.mode);
                    break;
                case "LineSegments":
                    o = new yt(r(t.geometry),a(t.material));
                    break;
                case "PointCloud":
                case "Points":
                    o = new bt(r(t.geometry),a(t.material));
                    break;
                case "Sprite":
                    o = new ut(a(t.material));
                    break;
                case "Group":
                    o = new _t;
                    break;
                default:
                    o = new ce
                }
                if (o.uuid = t.uuid,
                void 0 !== t.name && (o.name = t.name),
                void 0 !== t.matrix ? (e.fromArray(t.matrix),
                e.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== t.position && o.position.fromArray(t.position),
                void 0 !== t.rotation && o.rotation.fromArray(t.rotation),
                void 0 !== t.quaternion && o.quaternion.fromArray(t.quaternion),
                void 0 !== t.scale && o.scale.fromArray(t.scale)),
                void 0 !== t.castShadow && (o.castShadow = t.castShadow),
                void 0 !== t.receiveShadow && (o.receiveShadow = t.receiveShadow),
                t.shadow && (void 0 !== t.shadow.bias && (o.shadow.bias = t.shadow.bias),
                void 0 !== t.shadow.radius && (o.shadow.radius = t.shadow.radius),
                void 0 !== t.shadow.mapSize && o.shadow.mapSize.fromArray(t.shadow.mapSize),
                void 0 !== t.shadow.camera && (o.shadow.camera = this.parseObject(t.shadow.camera))),
                void 0 !== t.visible && (o.visible = t.visible),
                void 0 !== t.userData && (o.userData = t.userData),
                void 0 !== t.children)
                    for (var h in t.children)
                        o.add(this.parseObject(t.children[h], i, n));
                if ("LOD" === t.type)
                    for (var l = t.levels, u = 0; u < l.length; u++) {
                        var p = l[u]
                          , h = o.getObjectByProperty("uuid", p.object);
                        void 0 !== h && o.addLevel(h, p.distance)
                    }
                return o
            }
        }()
    }),
    tn.prototype = {
        constructor: tn,
        getPoint: function() {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
            null
        },
        getPointAt: function(e) {
            var t = this.getUtoTmapping(e);
            return this.getPoint(t)
        },
        getPoints: function(e) {
            e || (e = 5);
            for (var t = [], i = 0; e >= i; i++)
                t.push(this.getPoint(i / e));
            return t
        },
        getSpacedPoints: function(e) {
            e || (e = 5);
            for (var t = [], i = 0; e >= i; i++)
                t.push(this.getPointAt(i / e));
            return t
        },
        getLength: function() {
            var e = this.getLengths();
            return e[e.length - 1]
        },
        getLengths: function(e) {
            if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
            this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var t, i, n = [], r = this.getPoint(0), a = 0;
            for (n.push(0),
            i = 1; e >= i; i++)
                t = this.getPoint(i / e),
                a += t.distanceTo(r),
                n.push(a),
                r = t;
            return this.cacheArcLengths = n,
            n
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(e, t) {
            var i, n = this.getLengths(), r = 0, a = n.length;
            i = t ? t : e * n[a - 1];
            for (var o, s = 0, c = a - 1; c >= s; )
                if (r = Math.floor(s + (c - s) / 2),
                o = n[r] - i,
                0 > o)
                    s = r + 1;
                else {
                    if (!(o > 0)) {
                        c = r;
                        break
                    }
                    c = r - 1
                }
            if (r = c,
            n[r] === i) {
                var h = r / (a - 1);
                return h
            }
            var l = n[r]
              , u = n[r + 1]
              , p = u - l
              , d = (i - l) / p
              , h = (r + d) / (a - 1);
            return h
        },
        getTangent: function(e) {
            var t = 1e-4
              , i = e - t
              , n = e + t;
            0 > i && (i = 0),
            n > 1 && (n = 1);
            var r = this.getPoint(i)
              , a = this.getPoint(n)
              , o = a.clone().sub(r);
            return o.normalize()
        },
        getTangentAt: function(e) {
            var t = this.getUtoTmapping(e);
            return this.getTangent(t)
        },
        computeFrenetFrames: function(e, t) {
            var i, n, r, a = new c, o = [], s = [], l = [], u = new c, p = new h;
            for (i = 0; e >= i; i++)
                n = i / e,
                o[i] = this.getTangentAt(n),
                o[i].normalize();
            s[0] = new c,
            l[0] = new c;
            var d = Number.MAX_VALUE
              , f = Math.abs(o[0].x)
              , m = Math.abs(o[0].y)
              , g = Math.abs(o[0].z);
            for (d >= f && (d = f,
            a.set(1, 0, 0)),
            d >= m && (d = m,
            a.set(0, 1, 0)),
            d >= g && a.set(0, 0, 1),
            u.crossVectors(o[0], a).normalize(),
            s[0].crossVectors(o[0], u),
            l[0].crossVectors(o[0], s[0]),
            i = 1; e >= i; i++)
                s[i] = s[i - 1].clone(),
                l[i] = l[i - 1].clone(),
                u.crossVectors(o[i - 1], o[i]),
                u.length() > Number.EPSILON && (u.normalize(),
                r = Math.acos(Jo.clamp(o[i - 1].dot(o[i]), -1, 1)),
                s[i].applyMatrix4(p.makeRotationAxis(u, r))),
                l[i].crossVectors(o[i], s[i]);
            if (t === !0)
                for (r = Math.acos(Jo.clamp(s[0].dot(s[e]), -1, 1)),
                r /= e,
                o[0].dot(u.crossVectors(s[0], s[e])) > 0 && (r = -r),
                i = 1; e >= i; i++)
                    s[i].applyMatrix4(p.makeRotationAxis(o[i], r * i)),
                    l[i].crossVectors(o[i], s[i]);
            return {
                tangents: o,
                normals: s,
                binormals: l
            }
        }
    },
    tn.create = function(e, t) {
        return e.prototype = Object.create(tn.prototype),
        e.prototype.constructor = e,
        e.prototype.getPoint = t,
        e
    }
    ,
    nn.prototype = Object.create(tn.prototype),
    nn.prototype.constructor = nn,
    nn.prototype.isLineCurve = !0,
    nn.prototype.getPoint = function(e) {
        if (1 === e)
            return this.v2.clone();
        var t = this.v2.clone().sub(this.v1);
        return t.multiplyScalar(e).add(this.v1),
        t
    }
    ,
    nn.prototype.getPointAt = function(e) {
        return this.getPoint(e)
    }
    ,
    nn.prototype.getTangent = function() {
        var e = this.v2.clone().sub(this.v1);
        return e.normalize()
    }
    ,
    rn.prototype = Object.assign(Object.create(tn.prototype), {
        constructor: rn,
        add: function(e) {
            this.curves.push(e)
        },
        closePath: function() {
            var e = this.curves[0].getPoint(0)
              , t = this.curves[this.curves.length - 1].getPoint(1);
            e.equals(t) || this.curves.push(new nn(t,e))
        },
        getPoint: function(e) {
            for (var t = e * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length; ) {
                if (i[n] >= t) {
                    var r = i[n] - t
                      , a = this.curves[n]
                      , o = a.getLength()
                      , s = 0 === o ? 0 : 1 - r / o;
                    return a.getPointAt(s)
                }
                n++
            }
            return null
        },
        getLength: function() {
            var e = this.getCurveLengths();
            return e[e.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var e = [], t = 0, i = 0, n = this.curves.length; n > i; i++)
                t += this.curves[i].getLength(),
                e.push(t);
            return this.cacheLengths = e,
            e
        },
        getSpacedPoints: function(e) {
            e || (e = 40);
            for (var t = [], i = 0; e >= i; i++)
                t.push(this.getPoint(i / e));
            return this.autoClose && t.push(t[0]),
            t
        },
        getPoints: function(e) {
            e = e || 12;
            for (var t, i = [], n = 0, r = this.curves; n < r.length; n++)
                for (var a = r[n], o = a && a.isEllipseCurve ? 2 * e : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? e * a.points.length : e, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var h = s[c];
                    t && t.equals(h) || (i.push(h),
                    t = h)
                }
            return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]),
            i
        },
        createPointsGeometry: function(e) {
            var t = this.getPoints(e);
            return this.createGeometry(t)
        },
        createSpacedPointsGeometry: function(e) {
            var t = this.getSpacedPoints(e);
            return this.createGeometry(t)
        },
        createGeometry: function(e) {
            for (var t = new Ee, i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                t.vertices.push(new c(r.x,r.y,r.z || 0))
            }
            return t
        }
    }),
    an.prototype = Object.create(tn.prototype),
    an.prototype.constructor = an,
    an.prototype.isEllipseCurve = !0,
    an.prototype.getPoint = function(e) {
        for (var t = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, r = Math.abs(n) < Number.EPSILON; 0 > n; )
            n += t;
        for (; n > t; )
            n -= t;
        n < Number.EPSILON && (n = r ? 0 : t),
        this.aClockwise !== !0 || r || (n === t ? n = -t : n -= t);
        var a = this.aStartAngle + e * n
          , o = this.aX + this.xRadius * Math.cos(a)
          , s = this.aY + this.yRadius * Math.sin(a);
        if (0 !== this.aRotation) {
            var c = Math.cos(this.aRotation)
              , h = Math.sin(this.aRotation)
              , l = o - this.aX
              , u = s - this.aY;
            o = l * c - u * h + this.aX,
            s = l * h + u * c + this.aY
        }
        return new i(o,s)
    }
    ;
    var vh = {
        tangentQuadraticBezier: function(e, t, i, n) {
            return 2 * (1 - e) * (i - t) + 2 * e * (n - i)
        },
        tangentCubicBezier: function(e, t, i, n, r) {
            return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) - 6 * e * i * (1 - e) + 6 * e * n * (1 - e) - 3 * e * e * n + 3 * e * e * r
        },
        tangentSpline: function(e) {
            var t = 6 * e * e - 6 * e
              , i = 3 * e * e - 4 * e + 1
              , n = -6 * e * e + 6 * e
              , r = 3 * e * e - 2 * e;
            return t + i + n + r
        },
        interpolate: function(e, t, i, n, r) {
            var a = .5 * (i - e)
              , o = .5 * (n - t)
              , s = r * r
              , c = r * s;
            return (2 * t - 2 * i + a + o) * c + (-3 * t + 3 * i - 2 * a - o) * s + a * r + t
        }
    };
    on.prototype = Object.create(tn.prototype),
    on.prototype.constructor = on,
    on.prototype.isSplineCurve = !0,
    on.prototype.getPoint = function(e) {
        var t = this.points
          , n = (t.length - 1) * e
          , r = Math.floor(n)
          , a = n - r
          , o = t[0 === r ? r : r - 1]
          , s = t[r]
          , c = t[r > t.length - 2 ? t.length - 1 : r + 1]
          , h = t[r > t.length - 3 ? t.length - 1 : r + 2]
          , l = vh.interpolate;
        return new i(l(o.x, s.x, c.x, h.x, a),l(o.y, s.y, c.y, h.y, a))
    }
    ,
    sn.prototype = Object.create(tn.prototype),
    sn.prototype.constructor = sn,
    sn.prototype.getPoint = function(e) {
        var t = hh.b3;
        return new i(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
    }
    ,
    sn.prototype.getTangent = function(e) {
        var t = vh.tangentCubicBezier;
        return new i(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
    }
    ,
    cn.prototype = Object.create(tn.prototype),
    cn.prototype.constructor = cn,
    cn.prototype.getPoint = function(e) {
        var t = hh.b2;
        return new i(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y))
    }
    ,
    cn.prototype.getTangent = function(e) {
        var t = vh.tangentQuadraticBezier;
        return new i(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
    }
    ;
    var yh = Object.assign(Object.create(rn.prototype), {
        fromPoints: function(e) {
            this.moveTo(e[0].x, e[0].y);
            for (var t = 1, i = e.length; i > t; t++)
                this.lineTo(e[t].x, e[t].y)
        },
        moveTo: function(e, t) {
            this.currentPoint.set(e, t)
        },
        lineTo: function(e, t) {
            var n = new nn(this.currentPoint.clone(),new i(e,t));
            this.curves.push(n),
            this.currentPoint.set(e, t)
        },
        quadraticCurveTo: function(e, t, n, r) {
            var a = new cn(this.currentPoint.clone(),new i(e,t),new i(n,r));
            this.curves.push(a),
            this.currentPoint.set(n, r)
        },
        bezierCurveTo: function(e, t, n, r, a, o) {
            var s = new sn(this.currentPoint.clone(),new i(e,t),new i(n,r),new i(a,o));
            this.curves.push(s),
            this.currentPoint.set(a, o)
        },
        splineThru: function(e) {
            var t = [this.currentPoint.clone()].concat(e)
              , i = new on(t);
            this.curves.push(i),
            this.currentPoint.copy(e[e.length - 1])
        },
        arc: function(e, t, i, n, r, a) {
            var o = this.currentPoint.x
              , s = this.currentPoint.y;
            this.absarc(e + o, t + s, i, n, r, a)
        },
        absarc: function(e, t, i, n, r, a) {
            this.absellipse(e, t, i, i, n, r, a)
        },
        ellipse: function(e, t, i, n, r, a, o, s) {
            var c = this.currentPoint.x
              , h = this.currentPoint.y;
            this.absellipse(e + c, t + h, i, n, r, a, o, s)
        },
        absellipse: function(e, t, i, n, r, a, o, s) {
            var c = new an(e,t,i,n,r,a,o,s);
            if (this.curves.length > 0) {
                var h = c.getPoint(0);
                h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
            }
            this.curves.push(c);
            var l = c.getPoint(1);
            this.currentPoint.copy(l)
        }
    });
    hn.prototype = Object.assign(Object.create(yh), {
        constructor: hn,
        getPointsHoles: function(e) {
            for (var t = [], i = 0, n = this.holes.length; n > i; i++)
                t[i] = this.holes[i].getPoints(e);
            return t
        },
        extractAllPoints: function(e) {
            return {
                shape: this.getPoints(e),
                holes: this.getPointsHoles(e)
            }
        },
        extractPoints: function(e) {
            return this.extractAllPoints(e)
        }
    }),
    ln.prototype = yh,
    yh.constructor = ln,
    un.prototype = {
        moveTo: function(e, t) {
            this.currentPath = new ln,
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(e, t)
        },
        lineTo: function(e, t) {
            this.currentPath.lineTo(e, t)
        },
        quadraticCurveTo: function(e, t, i, n) {
            this.currentPath.quadraticCurveTo(e, t, i, n)
        },
        bezierCurveTo: function(e, t, i, n, r, a) {
            this.currentPath.bezierCurveTo(e, t, i, n, r, a)
        },
        splineThru: function(e) {
            this.currentPath.splineThru(e)
        },
        toShapes: function(e, t) {
            function i(e) {
                for (var t = [], i = 0, n = e.length; n > i; i++) {
                    var r = e[i]
                      , a = new hn;
                    a.curves = r.curves,
                    t.push(a)
                }
                return t
            }
            function n(e, t) {
                for (var i = t.length, n = !1, r = i - 1, a = 0; i > a; r = a++) {
                    var o = t[r]
                      , s = t[a]
                      , c = s.x - o.x
                      , h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (0 > h && (o = t[a],
                        c = -c,
                        s = t[r],
                        h = -h),
                        e.y < o.y || e.y > s.y)
                            continue;
                        if (e.y === o.y) {
                            if (e.x === o.x)
                                return !0
                        } else {
                            var l = h * (e.x - o.x) - c * (e.y - o.y);
                            if (0 === l)
                                return !0;
                            if (0 > l)
                                continue;
                            n = !n
                        }
                    } else {
                        if (e.y !== o.y)
                            continue;
                        if (s.x <= e.x && e.x <= o.x || o.x <= e.x && e.x <= s.x)
                            return !0
                    }
                }
                return n
            }
            var r = hh.isClockWise
              , a = this.subPaths;
            if (0 === a.length)
                return [];
            if (t === !0)
                return i(a);
            var o, s, c, h = [];
            if (1 === a.length)
                return s = a[0],
                c = new hn,
                c.curves = s.curves,
                h.push(c),
                h;
            var l = !r(a[0].getPoints());
            l = e ? !l : l;
            var u, p = [], d = [], f = [], m = 0;
            d[m] = void 0,
            f[m] = [];
            for (var g = 0, v = a.length; v > g; g++)
                s = a[g],
                u = s.getPoints(),
                o = r(u),
                o = e ? !o : o,
                o ? (!l && d[m] && m++,
                d[m] = {
                    s: new hn,
                    p: u
                },
                d[m].s.curves = s.curves,
                l && m++,
                f[m] = []) : f[m].push({
                    h: s,
                    p: u[0]
                });
            if (!d[0])
                return i(a);
            if (d.length > 1) {
                for (var y = !1, x = [], b = 0, _ = d.length; _ > b; b++)
                    p[b] = [];
                for (var b = 0, _ = d.length; _ > b; b++)
                    for (var w = f[b], M = 0; M < w.length; M++) {
                        for (var E = w[M], T = !0, S = 0; S < d.length; S++)
                            n(E.p, d[S].p) && (b !== S && x.push({
                                froms: b,
                                tos: S,
                                hole: M
                            }),
                            T ? (T = !1,
                            p[S].push(E)) : y = !0);
                        T && p[b].push(E)
                    }
                x.length > 0 && (y || (f = p))
            }
            for (var A, g = 0, L = d.length; L > g; g++) {
                c = d[g].s,
                h.push(c),
                A = f[g];
                for (var R = 0, P = A.length; P > R; R++)
                    c.holes.push(A[R].h)
            }
            return h
        }
    },
    Object.assign(pn.prototype, {
        isFont: !0,
        generateShapes: function(e, t, i) {
            function n(e) {
                for (var i = String(e).split(""), n = t / a.resolution, o = 0, s = [], c = 0; c < i.length; c++) {
                    var h = r(i[c], n, o);
                    o += h.offset,
                    s.push(h.path)
                }
                return s
            }
            function r(e, t, n) {
                var r = a.glyphs[e] || a.glyphs["?"];
                if (r) {
                    var o, s, c, h, l, u, p, d, f, m, g, v = new un, y = [], x = hh.b2, b = hh.b3;
                    if (r.o)
                        for (var _ = r._cachedOutline || (r._cachedOutline = r.o.split(" ")), w = 0, M = _.length; M > w; ) {
                            var E = _[w++];
                            switch (E) {
                            case "m":
                                o = _[w++] * t + n,
                                s = _[w++] * t,
                                v.moveTo(o, s);
                                break;
                            case "l":
                                o = _[w++] * t + n,
                                s = _[w++] * t,
                                v.lineTo(o, s);
                                break;
                            case "q":
                                if (c = _[w++] * t + n,
                                h = _[w++] * t,
                                p = _[w++] * t + n,
                                d = _[w++] * t,
                                v.quadraticCurveTo(p, d, c, h),
                                g = y[y.length - 1]) {
                                    l = g.x,
                                    u = g.y;
                                    for (var T = 1; i >= T; T++) {
                                        var S = T / i;
                                        x(S, l, p, c),
                                        x(S, u, d, h)
                                    }
                                }
                                break;
                            case "b":
                                if (c = _[w++] * t + n,
                                h = _[w++] * t,
                                p = _[w++] * t + n,
                                d = _[w++] * t,
                                f = _[w++] * t + n,
                                m = _[w++] * t,
                                v.bezierCurveTo(p, d, f, m, c, h),
                                g = y[y.length - 1]) {
                                    l = g.x,
                                    u = g.y;
                                    for (var T = 1; i >= T; T++) {
                                        var S = T / i;
                                        b(S, l, p, f, c),
                                        b(S, u, d, m, h)
                                    }
                                }
                            }
                        }
                    return {
                        offset: r.ha * t,
                        path: v
                    }
                }
            }
            void 0 === t && (t = 100),
            void 0 === i && (i = 4);
            for (var a = this.data, o = n(e), s = [], c = 0, h = o.length; h > c; c++)
                Array.prototype.push.apply(s, o[c].toShapes());
            return s
        }
    }),
    Object.assign(dn.prototype, {
        load: function(e, t, i, n) {
            var r = this
              , a = new _i(this.manager);
            a.load(e, function(e) {
                var i;
                try {
                    i = JSON.parse(e)
                } catch (n) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    i = JSON.parse(e.substring(65, e.length - 2))
                }
                var a = r.parse(i);
                t && t(a)
            }, i, n)
        },
        parse: function(e) {
            return new pn(e)
        }
    });
    var xh, bh = {
        getContext: function() {
            return void 0 === xh && (xh = new (window.AudioContext || window.webkitAudioContext)),
            xh
        },
        setContext: function(e) {
            xh = e
        }
    };
    Object.assign(fn.prototype, {
        load: function(e, t, i, n) {
            var r = new _i(this.manager);
            r.setResponseType("arraybuffer"),
            r.load(e, function(e) {
                var i = bh.getContext();
                i.decodeAudioData(e, function(e) {
                    t(e)
                })
            }, i, n)
        }
    }),
    mn.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: mn,
        isRectAreaLight: !0,
        copy: function(e) {
            return Ai.prototype.copy.call(this, e),
            this.width = e.width,
            this.height = e.height,
            this
        }
    }),
    Object.assign(gn.prototype, {
        update: function() {
            var e, t, i, n, r, a, o, s = new h, c = new h;
            return function(h) {
                var l = e !== this || t !== h.focus || i !== h.fov || n !== h.aspect * this.aspect || r !== h.near || a !== h.far || o !== h.zoom;
                if (l) {
                    e = this,
                    t = h.focus,
                    i = h.fov,
                    n = h.aspect * this.aspect,
                    r = h.near,
                    a = h.far,
                    o = h.zoom;
                    var u, p, d = h.projectionMatrix.clone(), f = this.eyeSep / 2, m = f * r / t, g = r * Math.tan(Jo.DEG2RAD * i * .5) / o;
                    c.elements[12] = -f,
                    s.elements[12] = f,
                    u = -g * n + m,
                    p = g * n + m,
                    d.elements[0] = 2 * r / (p - u),
                    d.elements[8] = (p + u) / (p - u),
                    this.cameraL.projectionMatrix.copy(d),
                    u = -g * n - m,
                    p = g * n - m,
                    d.elements[0] = 2 * r / (p - u),
                    d.elements[8] = (p + u) / (p - u),
                    this.cameraR.projectionMatrix.copy(d)
                }
                this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(c),
                this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(s)
            }
        }()
    }),
    vn.prototype = Object.create(ce.prototype),
    vn.prototype.constructor = vn,
    yn.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: yn,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(e) {
            null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
            this.filter = e,
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(e) {
            this.gain.gain.value = e
        },
        updateMatrixWorld: function() {
            var e = new c
              , t = new s
              , i = new c
              , n = new c;
            return function(r) {
                ce.prototype.updateMatrixWorld.call(this, r);
                var a = this.context.listener
                  , o = this.up;
                this.matrixWorld.decompose(e, t, i),
                n.set(0, 0, -1).applyQuaternion(t),
                a.positionX ? (a.positionX.setValueAtTime(e.x, this.context.currentTime),
                a.positionY.setValueAtTime(e.y, this.context.currentTime),
                a.positionZ.setValueAtTime(e.z, this.context.currentTime),
                a.forwardX.setValueAtTime(n.x, this.context.currentTime),
                a.forwardY.setValueAtTime(n.y, this.context.currentTime),
                a.forwardZ.setValueAtTime(n.z, this.context.currentTime),
                a.upX.setValueAtTime(o.x, this.context.currentTime),
                a.upY.setValueAtTime(o.y, this.context.currentTime),
                a.upZ.setValueAtTime(o.z, this.context.currentTime)) : (a.setPosition(e.x, e.y, e.z),
                a.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z))
            }
        }()
    }),
    xn.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: xn,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(e) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = e,
            this.connect(),
            this
        },
        setBuffer: function(e) {
            return this.buffer = e,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        },
        play: function() {
            if (this.isPlaying === !0)
                return void console.warn("THREE.Audio: Audio is already playing.");
            if (this.hasPlaybackControl === !1)
                return void console.warn("THREE.Audio: this Audio has no playback control.");
            var e = this.context.createBufferSource();
            return e.buffer = this.buffer,
            e.loop = this.loop,
            e.onended = this.onEnded.bind(this),
            e.playbackRate.setValueAtTime(this.playbackRate, this.startTime),
            e.start(0, this.startTime),
            this.isPlaying = !0,
            this.source = e,
            this.connect()
        },
        pause: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
            this.startTime = this.context.currentTime,
            this.isPlaying = !1,
            this)
        },
        stop: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
            this.startTime = 0,
            this.isPlaying = !1,
            this)
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var e = 1, t = this.filters.length; t > e; e++)
                    this.filters[e - 1].connect(this.filters[e]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var e = 1, t = this.filters.length; t > e; e++)
                    this.filters[e - 1].disconnect(this.filters[e]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(e) {
            return e || (e = []),
            this.isPlaying === !0 ? (this.disconnect(),
            this.filters = e,
            this.connect()) : this.filters = e,
            this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(e) {
            return this.setFilters(e ? [e] : [])
        },
        setPlaybackRate: function(e) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = e,
            this.isPlaying === !0 && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime),
            this)
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.loop
        },
        setLoop: function(e) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.loop = e,
            this.isPlaying === !0 && (this.source.loop = this.loop),
            this)
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(e) {
            return this.gain.gain.value = e,
            this
        }
    }),
    bn.prototype = Object.assign(Object.create(xn.prototype), {
        constructor: bn,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(e) {
            this.panner.refDistance = e
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(e) {
            this.panner.rolloffFactor = e
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(e) {
            this.panner.distanceModel = e
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(e) {
            this.panner.maxDistance = e
        },
        updateMatrixWorld: function() {
            var e = new c;
            return function(t) {
                ce.prototype.updateMatrixWorld.call(this, t),
                e.setFromMatrixPosition(this.matrixWorld),
                this.panner.setPosition(e.x, e.y, e.z)
            }
        }()
    }),
    Object.assign(_n.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data),
            this.data
        },
        getAverageFrequency: function() {
            for (var e = 0, t = this.getFrequencyData(), i = 0; i < t.length; i++)
                e += t[i];
            return e / t.length
        }
    }),
    wn.prototype = {
        constructor: wn,
        accumulate: function(e, t) {
            var i = this.buffer
              , n = this.valueSize
              , r = e * n + n
              , a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== n; ++o)
                    i[r + o] = i[o];
                a = t
            } else {
                a += t;
                var s = t / a;
                this._mixBufferRegion(i, r, 0, s, n)
            }
            this.cumulativeWeight = a
        },
        apply: function(e) {
            var t = this.valueSize
              , i = this.buffer
              , n = e * t + t
              , r = this.cumulativeWeight
              , a = this.binding;
            if (this.cumulativeWeight = 0,
            1 > r) {
                var o = 3 * t;
                this._mixBufferRegion(i, n, o, 1 - r, t)
            }
            for (var s = t, c = t + t; s !== c; ++s)
                if (i[s] !== i[s + t]) {
                    a.setValue(i, n);
                    break
                }
        },
        saveOriginalState: function() {
            var e = this.binding
              , t = this.buffer
              , i = this.valueSize
              , n = 3 * i;
            e.getValue(t, n);
            for (var r = i, a = n; r !== a; ++r)
                t[r] = t[n + r % i];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var e = 3 * this.valueSize;
            this.binding.setValue(this.buffer, e)
        },
        _select: function(e, t, i, n, r) {
            if (n >= .5)
                for (var a = 0; a !== r; ++a)
                    e[t + a] = e[i + a]
        },
        _slerp: function(e, t, i, n) {
            s.slerpFlat(e, t, e, t, e, i, n)
        },
        _lerp: function(e, t, i, n, r) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
                var s = t + o;
                e[s] = e[s] * a + e[i + o] * n
            }
        }
    },
    Mn.prototype = {
        constructor: Mn,
        getValue: function(e, t) {
            this.bind(),
            this.getValue(e, t)
        },
        setValue: function(e, t) {
            this.bind(),
            this.setValue(e, t)
        },
        bind: function() {
            var e = this.node
              , t = this.parsedPath
              , i = t.objectName
              , n = t.propertyName
              , r = t.propertyIndex;
            if (e || (e = Mn.findNode(this.rootNode, t.nodeName) || this.rootNode,
            this.node = e),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            !e)
                return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
            if (i) {
                var a = t.objectIndex;
                switch (i) {
                case "materials":
                    if (!e.material)
                        return void console.error("  can not bind to material as node does not have a material", this);
                    if (!e.material.materials)
                        return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                    e = e.material.materials;
                    break;
                case "bones":
                    if (!e.skeleton)
                        return void console.error("  can not bind to bones as node does not have a skeleton", this);
                    e = e.skeleton.bones;
                    for (var o = 0; o < e.length; o++)
                        if (e[o].name === a) {
                            a = o;
                            break
                        }
                    break;
                default:
                    if (void 0 === e[i])
                        return void console.error("  can not bind to objectName of node, undefined", this);
                    e = e[i]
                }
                if (void 0 !== a) {
                    if (void 0 === e[a])
                        return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                    e = e[a]
                }
            }
            var s = e[n];
            if (void 0 === s) {
                var c = t.nodeName;
                return void console.error("  trying to update property for track: " + c + "." + n + " but it wasn't found.", e)
            }
            var h = this.Versioning.None;
            void 0 !== e.needsUpdate ? (h = this.Versioning.NeedsUpdate,
            this.targetObject = e) : void 0 !== e.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate,
            this.targetObject = e);
            var l = this.BindingType.Direct;
            if (void 0 !== r) {
                if ("morphTargetInfluences" === n) {
                    if (!e.geometry)
                        return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                    if (!e.geometry.morphTargets)
                        return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                    for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
                        if (e.geometry.morphTargets[o].name === r) {
                            r = o;
                            break
                        }
                }
                l = this.BindingType.ArrayElement,
                this.resolvedProperty = s,
                this.propertyIndex = r
            } else
                void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray,
                this.resolvedProperty = s) : void 0 !== s.length ? (l = this.BindingType.EntireArray,
                this.resolvedProperty = s) : this.propertyName = n;
            this.getValue = this.GetterByBindingType[l],
            this.setValue = this.SetterByBindingTypeAndVersioning[l][h]
        },
        unbind: function() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    },
    Object.assign(Mn.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        _getValue_unbound: Mn.prototype.getValue,
        _setValue_unbound: Mn.prototype.setValue,
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(e, t) {
            e[t] = this.node[this.propertyName]
        }
        , function(e, t) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                e[t++] = i[n]
        }
        , function(e, t) {
            e[t] = this.resolvedProperty[this.propertyIndex]
        }
        , function(e, t) {
            this.resolvedProperty.toArray(e, t)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(e, t) {
            this.node[this.propertyName] = e[t]
        }
        , function(e, t) {
            this.node[this.propertyName] = e[t],
            this.targetObject.needsUpdate = !0
        }
        , function(e, t) {
            this.node[this.propertyName] = e[t],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(e, t) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                i[n] = e[t++]
        }
        , function(e, t) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                i[n] = e[t++];
            this.targetObject.needsUpdate = !0
        }
        , function(e, t) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n)
                i[n] = e[t++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t]
        }
        , function(e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t],
            this.targetObject.needsUpdate = !0
        }
        , function(e, t) {
            this.resolvedProperty[this.propertyIndex] = e[t],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(e, t) {
            this.resolvedProperty.fromArray(e, t)
        }
        , function(e, t) {
            this.resolvedProperty.fromArray(e, t),
            this.targetObject.needsUpdate = !0
        }
        , function(e, t) {
            this.resolvedProperty.fromArray(e, t),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]]
    }),
    Mn.Composite = function(e, t, i) {
        var n = i || Mn.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, n)
    }
    ,
    Mn.Composite.prototype = {
        constructor: Mn.Composite,
        getValue: function(e, t) {
            this.bind();
            var i = this._targetGroup.nCachedObjects_
              , n = this._bindings[i];
            void 0 !== n && n.getValue(e, t)
        },
        setValue: function(e, t) {
            for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n)
                i[n].setValue(e, t)
        },
        bind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
                e[t].bind()
        },
        unbind: function() {
            for (var e = this._bindings, t = this._targetGroup.nCachedObjects_, i = e.length; t !== i; ++t)
                e[t].unbind()
        }
    },
    Mn.create = function(e, t, i) {
        return e && e.isAnimationObjectGroup ? new Mn.Composite(e,t,i) : new Mn(e,t,i)
    }
    ,
    Mn.parseTrackName = function(e) {
        var t = /^((?:\w+[\/:])*)(\w+)?(?:\.(\w+)(?:\[(.+)\])?)?\.(\w+)(?:\[(.+)\])?$/
          , i = t.exec(e);
        if (!i)
            throw new Error("cannot parse trackName at all: " + e);
        var n = {
            nodeName: i[2],
            objectName: i[3],
            objectIndex: i[4],
            propertyName: i[5],
            propertyIndex: i[6]
        };
        if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error("can not parse propertyName from trackName: " + e);
        return n
    }
    ,
    Mn.findNode = function(e, t) {
        if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            var i = function(e) {
                for (var i = 0; i < e.bones.length; i++) {
                    var n = e.bones[i];
                    if (n.name === t)
                        return n
                }
                return null
            }
              , n = i(e.skeleton);
            if (n)
                return n
        }
        if (e.children) {
            var r = function(e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (n.name === t || n.uuid === t)
                        return n;
                    var a = r(n.children);
                    if (a)
                        return a
                }
                return null
            }
              , a = r(e.children);
            if (a)
                return a
        }
        return null
    }
    ,
    En.prototype = {
        constructor: En,
        isAnimationObjectGroup: !0,
        add: function() {
            for (var e = this._objects, t = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._paths, a = this._parsedPaths, o = this._bindings, s = o.length, c = 0, h = arguments.length; c !== h; ++c) {
                var l = arguments[c]
                  , u = l.uuid
                  , p = n[u];
                if (void 0 === p) {
                    p = t++,
                    n[u] = p,
                    e.push(l);
                    for (var d = 0, f = s; d !== f; ++d)
                        o[d].push(new Mn(l,r[d],a[d]))
                } else if (i > p) {
                    var m = e[p]
                      , g = --i
                      , v = e[g];
                    n[v.uuid] = p,
                    e[p] = v,
                    n[u] = g,
                    e[g] = l;
                    for (var d = 0, f = s; d !== f; ++d) {
                        var y = o[d]
                          , x = y[g]
                          , b = y[p];
                        y[p] = x,
                        void 0 === b && (b = new Mn(l,r[d],a[d])),
                        y[g] = b
                    }
                } else
                    e[p] !== m && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = i
        },
        remove: function() {
            for (var e = this._objects, t = this.nCachedObjects_, i = this._indicesByUUID, n = this._bindings, r = n.length, a = 0, o = arguments.length; a !== o; ++a) {
                var s = arguments[a]
                  , c = s.uuid
                  , h = i[c];
                if (void 0 !== h && h >= t) {
                    var l = t++
                      , u = e[l];
                    i[u.uuid] = h,
                    e[h] = u,
                    i[c] = l,
                    e[l] = s;
                    for (var p = 0, d = r; p !== d; ++p) {
                        var f = n[p]
                          , m = f[l]
                          , g = f[h];
                        f[h] = m,
                        f[l] = g
                    }
                }
            }
            this.nCachedObjects_ = t
        },
        uncache: function() {
            for (var e = this._objects, t = e.length, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o]
                  , h = c.uuid
                  , l = n[h];
                if (void 0 !== l)
                    if (delete n[h],
                    i > l) {
                        var u = --i
                          , p = e[u]
                          , d = --t
                          , f = e[d];
                        n[p.uuid] = l,
                        e[l] = p,
                        n[f.uuid] = u,
                        e[u] = f,
                        e.pop();
                        for (var m = 0, g = a; m !== g; ++m) {
                            var v = r[m]
                              , y = v[u]
                              , x = v[d];
                            v[l] = y,
                            v[u] = x,
                            v.pop()
                        }
                    } else {
                        var d = --t
                          , f = e[d];
                        n[f.uuid] = l,
                        e[l] = f,
                        e.pop();
                        for (var m = 0, g = a; m !== g; ++m) {
                            var v = r[m];
                            v[l] = v[d],
                            v.pop()
                        }
                    }
            }
            this.nCachedObjects_ = i
        },
        subscribe_: function(e, t) {
            var i = this._bindingsIndicesByPath
              , n = i[e]
              , r = this._bindings;
            if (void 0 !== n)
                return r[n];
            var a = this._paths
              , o = this._parsedPaths
              , s = this._objects
              , c = s.length
              , h = this.nCachedObjects_
              , l = new Array(c);
            n = r.length,
            i[e] = n,
            a.push(e),
            o.push(t),
            r.push(l);
            for (var u = h, p = s.length; u !== p; ++u) {
                var d = s[u];
                l[u] = new Mn(d,e,t)
            }
            return l
        },
        unsubscribe_: function(e) {
            var t = this._bindingsIndicesByPath
              , i = t[e];
            if (void 0 !== i) {
                var n = this._paths
                  , r = this._parsedPaths
                  , a = this._bindings
                  , o = a.length - 1
                  , s = a[o]
                  , c = e[o];
                t[c] = i,
                a[i] = s,
                a.pop(),
                r[i] = r[o],
                r.pop(),
                n[i] = n[o],
                n.pop()
            }
        }
    },
    Tn.prototype = {
        constructor: Tn,
        play: function() {
            return this._mixer._activateAction(this),
            this
        },
        stop: function() {
            return this._mixer._deactivateAction(this),
            this.reset()
        },
        reset: function() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(e) {
            return this._startTime = e,
            this
        },
        setLoop: function(e, t) {
            return this.loop = e,
            this.repetitions = t,
            this
        },
        setEffectiveWeight: function(e) {
            return this.weight = e,
            this._effectiveWeight = this.enabled ? e : 0,
            this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(e) {
            return this._scheduleFading(e, 0, 1)
        },
        fadeOut: function(e) {
            return this._scheduleFading(e, 1, 0)
        },
        crossFadeFrom: function(e, t, i) {
            if (e.fadeOut(t),
            this.fadeIn(t),
            i) {
                var n = this._clip.duration
                  , r = e._clip.duration
                  , a = r / n
                  , o = n / r;
                e.warp(1, a, t),
                this.warp(o, 1, t)
            }
            return this
        },
        crossFadeTo: function(e, t, i) {
            return e.crossFadeFrom(this, t, i)
        },
        stopFading: function() {
            var e = this._weightInterpolant;
            return null !== e && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(e)),
            this
        },
        setEffectiveTimeScale: function(e) {
            return this.timeScale = e,
            this._effectiveTimeScale = this.paused ? 0 : e,
            this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(e) {
            return this.timeScale = this._clip.duration / e,
            this.stopWarping()
        },
        syncWith: function(e) {
            return this.time = e.time,
            this.timeScale = e.timeScale,
            this.stopWarping()
        },
        halt: function(e) {
            return this.warp(this._effectiveTimeScale, 0, e)
        },
        warp: function(e, t, i) {
            var n = this._mixer
              , r = n.time
              , a = this._timeScaleInterpolant
              , o = this.timeScale;
            null === a && (a = n._lendControlInterpolant(),
            this._timeScaleInterpolant = a);
            var s = a.parameterPositions
              , c = a.sampleValues;
            return s[0] = r,
            s[1] = r + i,
            c[0] = e / o,
            c[1] = t / o,
            this
        },
        stopWarping: function() {
            var e = this._timeScaleInterpolant;
            return null !== e && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(e)),
            this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(e, t, i, n) {
            var r = this._startTime;
            if (null !== r) {
                var a = (e - r) * i;
                if (0 > a || 0 === i)
                    return;
                this._startTime = null,
                t = i * a
            }
            t *= this._updateTimeScale(e);
            var o = this._updateTime(t)
              , s = this._updateWeight(e);
            if (s > 0)
                for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l)
                    c[l].evaluate(o),
                    h[l].accumulate(n, s)
        },
        _updateWeight: function(e) {
            var t = 0;
            if (this.enabled) {
                t = this.weight;
                var i = this._weightInterpolant;
                if (null !== i) {
                    var n = i.evaluate(e)[0];
                    t *= n,
                    e > i.parameterPositions[1] && (this.stopFading(),
                    0 === n && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = t,
            t
        },
        _updateTimeScale: function(e) {
            var t = 0;
            if (!this.paused) {
                t = this.timeScale;
                var i = this._timeScaleInterpolant;
                if (null !== i) {
                    var n = i.evaluate(e)[0];
                    t *= n,
                    e > i.parameterPositions[1] && (this.stopWarping(),
                    0 === t ? this.paused = !0 : this.timeScale = t)
                }
            }
            return this._effectiveTimeScale = t,
            t
        },
        _updateTime: function(e) {
            var t = this.time + e;
            if (0 === e)
                return t;
            var i = this._clip.duration
              , n = this.loop
              , r = this._loopCount;
            if (n === Lo) {
                -1 === r && (this.loopCount = 0,
                this._setEndings(!0, !0, !1));
                e: {
                    if (t >= i)
                        t = i;
                    else {
                        if (!(0 > t))
                            break e;
                        t = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 > e ? -1 : 1
                    })
                }
            } else {
                var a = n === Po;
                if (-1 === r && (e >= 0 ? (r = 0,
                this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
                t >= i || 0 > t) {
                    var o = Math.floor(t / i);
                    t -= i * o,
                    r += Math.abs(o);
                    var s = this.repetitions - r;
                    if (0 > s)
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        t = e > 0 ? i : 0,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: e > 0 ? 1 : -1
                        });
                    else {
                        if (0 === s) {
                            var c = 0 > e;
                            this._setEndings(c, !c, a)
                        } else
                            this._setEndings(!1, !1, a);
                        this._loopCount = r,
                        this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: o
                        })
                    }
                }
                if (a && 1 === (1 & r))
                    return this.time = t,
                    i - t
            }
            return this.time = t,
            t
        },
        _setEndings: function(e, t, i) {
            var n = this._interpolantSettings;
            i ? (n.endingStart = No,
            n.endingEnd = No) : (n.endingStart = e ? this.zeroSlopeAtStart ? No : Do : Oo,
            n.endingEnd = t ? this.zeroSlopeAtEnd ? No : Do : Oo)
        },
        _scheduleFading: function(e, t, i) {
            var n = this._mixer
              , r = n.time
              , a = this._weightInterpolant;
            null === a && (a = n._lendControlInterpolant(),
            this._weightInterpolant = a);
            var o = a.parameterPositions
              , s = a.sampleValues;
            return o[0] = r,
            s[0] = t,
            o[1] = r + e,
            s[1] = i,
            this
        }
    },
    Object.assign(Sn.prototype, t.prototype, {
        clipAction: function(e, t) {
            var i = t || this._root
              , n = i.uuid
              , r = "string" == typeof e ? Zi.findByName(i, e) : e
              , a = null !== r ? r.uuid : e
              , o = this._actionsByClip[a]
              , s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[n];
                if (void 0 !== c)
                    return c;
                s = o.knownActions[0],
                null === r && (r = s._clip)
            }
            if (null === r)
                return null;
            var h = new Tn(this,r,t);
            return this._bindAction(h, s),
            this._addInactiveAction(h, a, n),
            h
        },
        existingAction: function(e, t) {
            var i = t || this._root
              , n = i.uuid
              , r = "string" == typeof e ? Zi.findByName(i, e) : e
              , a = r ? r.uuid : e
              , o = this._actionsByClip[a];
            return void 0 !== o ? o.actionByRoot[n] || null : null
        },
        stopAllAction: function() {
            var e = this._actions
              , t = this._nActiveActions
              , i = this._bindings
              , n = this._nActiveBindings;
            this._nActiveActions = 0,
            this._nActiveBindings = 0;
            for (var r = 0; r !== t; ++r)
                e[r].reset();
            for (var r = 0; r !== n; ++r)
                i[r].useCount = 0;
            return this
        },
        update: function(e) {
            e *= this.timeScale;
            for (var t = this._actions, i = this._nActiveActions, n = this.time += e, r = Math.sign(e), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
                var s = t[o];
                s.enabled && s._update(n, e, r, a)
            }
            for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o)
                c[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(e) {
            var t = this._actions
              , i = e.uuid
              , n = this._actionsByClip
              , r = n[i];
            if (void 0 !== r) {
                for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var h = c._cacheIndex
                      , l = t[t.length - 1];
                    c._cacheIndex = null,
                    c._byClipCacheIndex = null,
                    l._cacheIndex = h,
                    t[h] = l,
                    t.pop(),
                    this._removeInactiveBindingsForAction(c)
                }
                delete n[i]
            }
        },
        uncacheRoot: function(e) {
            var t = e.uuid
              , i = this._actionsByClip;
            for (var n in i) {
                var r = i[n].actionByRoot
                  , a = r[t];
                void 0 !== a && (this._deactivateAction(a),
                this._removeInactiveAction(a))
            }
            var o = this._bindingsByRootAndName
              , s = o[t];
            if (void 0 !== s)
                for (var c in s) {
                    var h = s[c];
                    h.restoreOriginalState(),
                    this._removeInactiveBinding(h)
                }
        },
        uncacheAction: function(e, t) {
            var i = this.existingAction(e, t);
            null !== i && (this._deactivateAction(i),
            this._removeInactiveAction(i))
        }
    }),
    Object.assign(Sn.prototype, {
        _bindAction: function(e, t) {
            var i = e._localRoot || this._root
              , n = e._clip.tracks
              , r = n.length
              , a = e._propertyBindings
              , o = e._interpolants
              , s = i.uuid
              , c = this._bindingsByRootAndName
              , h = c[s];
            void 0 === h && (h = {},
            c[s] = h);
            for (var l = 0; l !== r; ++l) {
                var u = n[l]
                  , p = u.name
                  , d = h[p];
                if (void 0 !== d)
                    a[l] = d;
                else {
                    if (d = a[l],
                    void 0 !== d) {
                        null === d._cacheIndex && (++d.referenceCount,
                        this._addInactiveBinding(d, s, p));
                        continue
                    }
                    var f = t && t._propertyBindings[l].binding.parsedPath;
                    d = new wn(Mn.create(i, p, f),u.ValueTypeName,u.getValueSize()),
                    ++d.referenceCount,
                    this._addInactiveBinding(d, s, p),
                    a[l] = d
                }
                o[l].resultBuffer = d.buffer
            }
        },
        _activateAction: function(e) {
            if (!this._isActiveAction(e)) {
                if (null === e._cacheIndex) {
                    var t = (e._localRoot || this._root).uuid
                      , i = e._clip.uuid
                      , n = this._actionsByClip[i];
                    this._bindAction(e, n && n.knownActions[0]),
                    this._addInactiveAction(e, i, t)
                }
                for (var r = e._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
                    var s = r[a];
                    0 === s.useCount++ && (this._lendBinding(s),
                    s.saveOriginalState())
                }
                this._lendAction(e)
            }
        },
        _deactivateAction: function(e) {
            if (this._isActiveAction(e)) {
                for (var t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
                    var r = t[i];
                    0 === --r.useCount && (r.restoreOriginalState(),
                    this._takeBackBinding(r))
                }
                this._takeBackAction(e)
            }
        },
        _initMemoryManager: function() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            var e = this;
            this.stats = {
                actions: {
                    get total() {
                        return e._actions.length
                    },
                    get inUse() {
                        return e._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return e._bindings.length
                    },
                    get inUse() {
                        return e._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return e._controlInterpolants.length
                    },
                    get inUse() {
                        return e._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(e) {
            var t = e._cacheIndex;
            return null !== t && t < this._nActiveActions
        },
        _addInactiveAction: function(e, t, i) {
            var n = this._actions
              , r = this._actionsByClip
              , a = r[t];
            if (void 0 === a)
                a = {
                    knownActions: [e],
                    actionByRoot: {}
                },
                e._byClipCacheIndex = 0,
                r[t] = a;
            else {
                var o = a.knownActions;
                e._byClipCacheIndex = o.length,
                o.push(e)
            }
            e._cacheIndex = n.length,
            n.push(e),
            a.actionByRoot[i] = e
        },
        _removeInactiveAction: function(e) {
            var t = this._actions
              , i = t[t.length - 1]
              , n = e._cacheIndex;
            i._cacheIndex = n,
            t[n] = i,
            t.pop(),
            e._cacheIndex = null;
            var r = e._clip.uuid
              , a = this._actionsByClip
              , o = a[r]
              , s = o.knownActions
              , c = s[s.length - 1]
              , h = e._byClipCacheIndex;
            c._byClipCacheIndex = h,
            s[h] = c,
            s.pop(),
            e._byClipCacheIndex = null;
            var l = o.actionByRoot
              , u = (t._localRoot || this._root).uuid;
            delete l[u],
            0 === s.length && delete a[r],
            this._removeInactiveBindingsForAction(e)
        },
        _removeInactiveBindingsForAction: function(e) {
            for (var t = e._propertyBindings, i = 0, n = t.length; i !== n; ++i) {
                var r = t[i];
                0 === --r.referenceCount && this._removeInactiveBinding(r)
            }
        },
        _lendAction: function(e) {
            var t = this._actions
              , i = e._cacheIndex
              , n = this._nActiveActions++
              , r = t[n];
            e._cacheIndex = n,
            t[n] = e,
            r._cacheIndex = i,
            t[i] = r
        },
        _takeBackAction: function(e) {
            var t = this._actions
              , i = e._cacheIndex
              , n = --this._nActiveActions
              , r = t[n];
            e._cacheIndex = n,
            t[n] = e,
            r._cacheIndex = i,
            t[i] = r
        },
        _addInactiveBinding: function(e, t, i) {
            var n = this._bindingsByRootAndName
              , r = n[t]
              , a = this._bindings;
            void 0 === r && (r = {},
            n[t] = r),
            r[i] = e,
            e._cacheIndex = a.length,
            a.push(e)
        },
        _removeInactiveBinding: function(e) {
            var t = this._bindings
              , i = e.binding
              , n = i.rootNode.uuid
              , r = i.path
              , a = this._bindingsByRootAndName
              , o = a[n]
              , s = t[t.length - 1]
              , c = e._cacheIndex;
            s._cacheIndex = c,
            t[c] = s,
            t.pop(),
            delete o[r];
            e: {
                for (var h in o)
                    break e;
                delete a[n]
            }
        },
        _lendBinding: function(e) {
            var t = this._bindings
              , i = e._cacheIndex
              , n = this._nActiveBindings++
              , r = t[n];
            e._cacheIndex = n,
            t[n] = e,
            r._cacheIndex = i,
            t[i] = r
        },
        _takeBackBinding: function(e) {
            var t = this._bindings
              , i = e._cacheIndex
              , n = --this._nActiveBindings
              , r = t[n];
            e._cacheIndex = n,
            t[n] = e,
            r._cacheIndex = i,
            t[i] = r
        },
        _lendControlInterpolant: function() {
            var e = this._controlInterpolants
              , t = this._nActiveControlInterpolants++
              , i = e[t];
            return void 0 === i && (i = new zi(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
            i.__cacheIndex = t,
            e[t] = i),
            i
        },
        _takeBackControlInterpolant: function(e) {
            var t = this._controlInterpolants
              , i = e.__cacheIndex
              , n = --this._nActiveControlInterpolants
              , r = t[n];
            e.__cacheIndex = n,
            t[n] = e,
            r.__cacheIndex = i,
            t[i] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1)
    }),
    An.prototype.clone = function() {
        return new An(void 0 === this.value.clone ? this.value : this.value.clone())
    }
    ,
    Ln.prototype = Object.create(Se.prototype),
    Ln.prototype.constructor = Ln,
    Ln.prototype.isInstancedBufferGeometry = !0,
    Ln.prototype.addGroup = function(e, t, i) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: i
        })
    }
    ,
    Ln.prototype.copy = function(e) {
        var t = e.index;
        null !== t && this.setIndex(t.clone());
        var i = e.attributes;
        for (var n in i) {
            var r = i[n];
            this.addAttribute(n, r.clone())
        }
        for (var a = e.groups, o = 0, s = a.length; s > o; o++) {
            var c = a[o];
            this.addGroup(c.start, c.count, c.materialIndex)
        }
        return this
    }
    ,
    Rn.prototype = {
        constructor: Rn,
        isInterleavedBufferAttribute: !0,
        get count() {
            return this.data.count
        },
        get array() {
            return this.data.array
        },
        setX: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset] = t,
            this
        },
        setY: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 1] = t,
            this
        },
        setZ: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 2] = t,
            this
        },
        setW: function(e, t) {
            return this.data.array[e * this.data.stride + this.offset + 3] = t,
            this
        },
        getX: function(e) {
            return this.data.array[e * this.data.stride + this.offset]
        },
        getY: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 1]
        },
        getZ: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 2]
        },
        getW: function(e) {
            return this.data.array[e * this.data.stride + this.offset + 3]
        },
        setXY: function(e, t, i) {
            return e = e * this.data.stride + this.offset,
            this.data.array[e + 0] = t,
            this.data.array[e + 1] = i,
            this
        },
        setXYZ: function(e, t, i, n) {
            return e = e * this.data.stride + this.offset,
            this.data.array[e + 0] = t,
            this.data.array[e + 1] = i,
            this.data.array[e + 2] = n,
            this
        },
        setXYZW: function(e, t, i, n, r) {
            return e = e * this.data.stride + this.offset,
            this.data.array[e + 0] = t,
            this.data.array[e + 1] = i,
            this.data.array[e + 2] = n,
            this.data.array[e + 3] = r,
            this
        }
    },
    Pn.prototype = {
        constructor: Pn,
        isInterleavedBuffer: !0,
        set needsUpdate(e) {
            e === !0 && this.version++
        },
        setArray: function(e) {
            if (Array.isArray(e))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== e ? e.length / this.stride : 0,
            this.array = e
        },
        setDynamic: function(e) {
            return this.dynamic = e,
            this
        },
        copy: function(e) {
            return this.array = new e.array.constructor(e.array),
            this.count = e.count,
            this.stride = e.stride,
            this.dynamic = e.dynamic,
            this
        },
        copyAt: function(e, t, i) {
            e *= this.stride,
            i *= t.stride;
            for (var n = 0, r = this.stride; r > n; n++)
                this.array[e + n] = t.array[i + n];
            return this
        },
        set: function(e, t) {
            return void 0 === t && (t = 0),
            this.array.set(e, t),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(e) {
            return this.onUploadCallback = e,
            this
        }
    },
    Cn.prototype = Object.create(Pn.prototype),
    Cn.prototype.constructor = Cn,
    Cn.prototype.isInstancedInterleavedBuffer = !0,
    Cn.prototype.copy = function(e) {
        return Pn.prototype.copy.call(this, e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    ,
    In.prototype = Object.create(de.prototype),
    In.prototype.constructor = In,
    In.prototype.isInstancedBufferAttribute = !0,
    In.prototype.copy = function(e) {
        return de.prototype.copy.call(this, e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    ,
    Un.prototype = {
        constructor: Un,
        linePrecision: 1,
        set: function(e, t) {
            this.ray.set(e, t)
        },
        setFromCamera: function(e, t) {
            t && t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
            this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize()) : t && t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t),
            this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(e, t) {
            var i = [];
            return Nn(e, this, i, t),
            i.sort(Dn),
            i
        },
        intersectObjects: function(e, t) {
            var i = [];
            if (Array.isArray(e) === !1)
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                i;
            for (var n = 0, r = e.length; r > n; n++)
                Nn(e[n], this, i, t);
            return i.sort(Dn),
            i
        }
    },
    On.prototype = {
        constructor: On,
        start: function() {
            this.startTime = (performance || Date).now(),
            this.oldTime = this.startTime,
            this.elapsedTime = 0,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var e = 0;
            if (this.autoStart && !this.running && this.start(),
            this.running) {
                var t = (performance || Date).now();
                e = (t - this.oldTime) / 1e3,
                this.oldTime = t,
                this.elapsedTime += e
            }
            return e
        }
    },
    zn.prototype = {
        constructor: zn,
        set: function(e, t, i) {
            return this.radius = e,
            this.phi = t,
            this.theta = i,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(e) {
            return this.radius = e.radius,
            this.phi = e.phi,
            this.theta = e.theta,
            this
        },
        makeSafe: function() {
            var e = 1e-6;
            return this.phi = Math.max(e, Math.min(Math.PI - e, this.phi)),
            this
        },
        setFromVector3: function(e) {
            return this.radius = e.length(),
            0 === this.radius ? (this.theta = 0,
            this.phi = 0) : (this.theta = Math.atan2(e.x, e.z),
            this.phi = Math.acos(Jo.clamp(e.y / this.radius, -1, 1))),
            this
        }
    },
    Bn.prototype = Object.create(Ae.prototype),
    Bn.prototype.constructor = Bn,
    Bn.prototype.createAnimation = function(e, t, i, n) {
        var r = {
            start: t,
            end: i,
            length: i - t + 1,
            fps: n,
            duration: (i - t) / n,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[e] = r,
        this.animationsList.push(r)
    }
    ,
    Bn.prototype.autoCreateAnimations = function(e) {
        for (var t, i = /([a-z]+)_?(\d+)/i, n = {}, r = this.geometry, a = 0, o = r.morphTargets.length; o > a; a++) {
            var s = r.morphTargets[a]
              , c = s.name.match(i);
            if (c && c.length > 1) {
                var h = c[1];
                n[h] || (n[h] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                });
                var l = n[h];
                a < l.start && (l.start = a),
                a > l.end && (l.end = a),
                t || (t = h)
            }
        }
        for (var h in n) {
            var l = n[h];
            this.createAnimation(h, l.start, l.end, e)
        }
        this.firstAnimation = t
    }
    ,
    Bn.prototype.setAnimationDirectionForward = function(e) {
        var t = this.animationsMap[e];
        t && (t.direction = 1,
        t.directionBackwards = !1)
    }
    ,
    Bn.prototype.setAnimationDirectionBackward = function(e) {
        var t = this.animationsMap[e];
        t && (t.direction = -1,
        t.directionBackwards = !0)
    }
    ,
    Bn.prototype.setAnimationFPS = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.fps = t,
        i.duration = (i.end - i.start) / i.fps)
    }
    ,
    Bn.prototype.setAnimationDuration = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.duration = t,
        i.fps = (i.end - i.start) / i.duration)
    }
    ,
    Bn.prototype.setAnimationWeight = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.weight = t)
    }
    ,
    Bn.prototype.setAnimationTime = function(e, t) {
        var i = this.animationsMap[e];
        i && (i.time = t)
    }
    ,
    Bn.prototype.getAnimationTime = function(e) {
        var t = 0
          , i = this.animationsMap[e];
        return i && (t = i.time),
        t
    }
    ,
    Bn.prototype.getAnimationDuration = function(e) {
        var t = -1
          , i = this.animationsMap[e];
        return i && (t = i.duration),
        t
    }
    ,
    Bn.prototype.playAnimation = function(e) {
        var t = this.animationsMap[e];
        t ? (t.time = 0,
        t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
    }
    ,
    Bn.prototype.stopAnimation = function(e) {
        var t = this.animationsMap[e];
        t && (t.active = !1)
    }
    ,
    Bn.prototype.update = function(e) {
        for (var t = 0, i = this.animationsList.length; i > t; t++) {
            var n = this.animationsList[t];
            if (n.active) {
                var r = n.duration / n.length;
                n.time += n.direction * e,
                n.mirroredLoop ? (n.time > n.duration || n.time < 0) && (n.direction *= -1,
                n.time > n.duration && (n.time = n.duration,
                n.directionBackwards = !0),
                n.time < 0 && (n.time = 0,
                n.directionBackwards = !1)) : (n.time = n.time % n.duration,
                n.time < 0 && (n.time += n.duration));
                var a = n.start + Jo.clamp(Math.floor(n.time / r), 0, n.length - 1)
                  , o = n.weight;
                a !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0,
                this.morphTargetInfluences[n.currentFrame] = 1 * o,
                this.morphTargetInfluences[a] = 0,
                n.lastFrame = n.currentFrame,
                n.currentFrame = a);
                var s = n.time % r / r;
                n.directionBackwards && (s = 1 - s),
                n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = s * o,
                this.morphTargetInfluences[n.lastFrame] = (1 - s) * o) : this.morphTargetInfluences[n.currentFrame] = o
            }
        }
    }
    ,
    Gn.prototype = Object.create(ce.prototype),
    Gn.prototype.constructor = Gn,
    Gn.prototype.isImmediateRenderObject = !0,
    Hn.prototype = Object.create(yt.prototype),
    Hn.prototype.constructor = Hn,
    Hn.prototype.update = function() {
        var e = new c
          , t = new c
          , i = new te;
        return function() {
            var n = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0),
            i.getNormalMatrix(this.object.matrixWorld);
            var r = this.object.matrixWorld
              , a = this.geometry.attributes.position
              , o = this.object.geometry;
            if (o && o.isGeometry)
                for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; u > l; l++)
                    for (var p = c[l], d = 0, f = p.vertexNormals.length; f > d; d++) {
                        var m = s[p[n[d]]]
                          , g = p.vertexNormals[d];
                        e.copy(m).applyMatrix4(r),
                        t.copy(g).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e),
                        a.setXYZ(h, e.x, e.y, e.z),
                        h += 1,
                        a.setXYZ(h, t.x, t.y, t.z),
                        h += 1
                    }
            else if (o && o.isBufferGeometry)
                for (var v = o.attributes.position, y = o.attributes.normal, h = 0, d = 0, f = v.count; f > d; d++)
                    e.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(r),
                    t.set(y.getX(d), y.getY(d), y.getZ(d)),
                    t.applyMatrix3(i).normalize().multiplyScalar(this.size).add(e),
                    a.setXYZ(h, e.x, e.y, e.z),
                    h += 1,
                    a.setXYZ(h, t.x, t.y, t.z),
                    h += 1;
            return a.needsUpdate = !0,
            this
        }
    }(),
    Vn.prototype = Object.create(ce.prototype),
    Vn.prototype.constructor = Vn,
    Vn.prototype.dispose = function() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    ,
    Vn.prototype.update = function() {
        var e = new c
          , t = new c;
        return function() {
            var i = this.light.distance ? this.light.distance : 1e3
              , n = i * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, i),
            e.setFromMatrixPosition(this.light.matrixWorld),
            t.setFromMatrixPosition(this.light.target.matrixWorld),
            this.cone.lookAt(t.sub(e)),
            this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(),
    kn.prototype = Object.create(yt.prototype),
    kn.prototype.constructor = kn,
    kn.prototype.getBoneList = function(e) {
        var t = [];
        e && e.isBone && t.push(e);
        for (var i = 0; i < e.children.length; i++)
            t.push.apply(t, this.getBoneList(e.children[i]));
        return t
    }
    ,
    kn.prototype.update = function() {
        var e = new c
          , t = new h
          , i = new h;
        return function() {
            var n = this.geometry
              , r = n.getAttribute("position");
            i.getInverse(this.root.matrixWorld);
            for (var a = 0, o = 0; a < this.bones.length; a++) {
                var s = this.bones[a];
                s.parent && s.parent.isBone && (t.multiplyMatrices(i, s.matrixWorld),
                e.setFromMatrixPosition(t),
                r.setXYZ(o, e.x, e.y, e.z),
                t.multiplyMatrices(i, s.parent.matrixWorld),
                e.setFromMatrixPosition(t),
                r.setXYZ(o + 1, e.x, e.y, e.z),
                o += 2)
            }
            n.getAttribute("position").needsUpdate = !0
        }
    }(),
    jn.prototype = Object.create(Ae.prototype),
    jn.prototype.constructor = jn,
    jn.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    jn.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
    ,
    Wn.prototype = Object.create(ce.prototype),
    Wn.prototype.constructor = Wn,
    Wn.prototype.dispose = function() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose(),
        this.children[1].geometry.dispose(),
        this.children[1].material.dispose()
    }
    ,
    Wn.prototype.update = function() {
        var e = new c
          , t = new c;
        return function() {
            var i = this.children[0]
              , n = this.children[1];
            if (this.light.target) {
                e.setFromMatrixPosition(this.light.matrixWorld),
                t.setFromMatrixPosition(this.light.target.matrixWorld);
                var r = t.clone().sub(e);
                i.lookAt(r),
                n.lookAt(r)
            }
            i.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
            n.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
            var a = .5 * this.light.width
              , o = .5 * this.light.height
              , s = i.geometry.getAttribute("position")
              , c = s.array;
            c[0] = a,
            c[1] = -o,
            c[2] = 0,
            c[3] = a,
            c[4] = o,
            c[5] = 0,
            c[6] = -a,
            c[7] = o,
            c[8] = 0,
            c[9] = -a,
            c[10] = o,
            c[11] = 0,
            c[12] = -a,
            c[13] = -o,
            c[14] = 0,
            c[15] = a,
            c[16] = -o,
            c[17] = 0,
            s.needsUpdate = !0
        }
    }(),
    Xn.prototype = Object.create(ce.prototype),
    Xn.prototype.constructor = Xn,
    Xn.prototype.dispose = function() {
        this.children[0].geometry.dispose(),
        this.children[0].material.dispose()
    }
    ,
    Xn.prototype.update = function() {
        var e = new c
          , t = new W
          , i = new W;
        return function() {
            var n = this.children[0]
              , r = n.geometry.getAttribute("color");
            t.copy(this.light.color).multiplyScalar(this.light.intensity),
            i.copy(this.light.groundColor).multiplyScalar(this.light.intensity);
            for (var a = 0, o = r.count; o > a; a++) {
                var s = o / 2 > a ? t : i;
                r.setXYZ(a, s.r, s.g, s.b)
            }
            n.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),
            r.needsUpdate = !0
        }
    }(),
    Yn.prototype = Object.create(yt.prototype),
    Yn.prototype.constructor = Yn,
    qn.prototype = Object.create(yt.prototype),
    qn.prototype.constructor = qn,
    Zn.prototype = Object.create(yt.prototype),
    Zn.prototype.constructor = Zn,
    Zn.prototype.update = function() {
        var e = new c
          , t = new c
          , i = new te;
        return function() {
            this.object.updateMatrixWorld(!0),
            i.getNormalMatrix(this.object.matrixWorld);
            for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; l > h; h++) {
                var u = s[h]
                  , p = u.normal;
                e.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n),
                t.copy(p).applyMatrix3(i).normalize().multiplyScalar(this.size).add(e),
                r.setXYZ(c, e.x, e.y, e.z),
                c += 1,
                r.setXYZ(c, t.x, t.y, t.z),
                c += 1
            }
            return r.needsUpdate = !0,
            this
        }
    }(),
    Jn.prototype = Object.create(ce.prototype),
    Jn.prototype.constructor = Jn,
    Jn.prototype.dispose = function() {
        var e = this.children[0]
          , t = this.children[1];
        e.geometry.dispose(),
        e.material.dispose(),
        t.geometry.dispose(),
        t.material.dispose()
    }
    ,
    Jn.prototype.update = function() {
        var e = new c
          , t = new c
          , i = new c;
        return function() {
            e.setFromMatrixPosition(this.light.matrixWorld),
            t.setFromMatrixPosition(this.light.target.matrixWorld),
            i.subVectors(t, e);
            var n = this.children[0]
              , r = this.children[1];
            n.lookAt(i),
            n.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
            r.lookAt(i),
            r.scale.z = i.length()
        }
    }(),
    Qn.prototype = Object.create(yt.prototype),
    Qn.prototype.constructor = Qn,
    Qn.prototype.update = function() {
        function e(e, a, o, s) {
            n.set(a, o, s).unproject(r);
            var c = i[e];
            if (void 0 !== c)
                for (var h = t.getAttribute("position"), l = 0, u = c.length; u > l; l++)
                    h.setXYZ(c[l], n.x, n.y, n.z)
        }
        var t, i, n = new c, r = new Pe;
        return function() {
            t = this.geometry,
            i = this.pointMap;
            var n = 1
              , a = 1;
            r.projectionMatrix.copy(this.camera.projectionMatrix),
            e("c", 0, 0, -1),
            e("t", 0, 0, 1),
            e("n1", -n, -a, -1),
            e("n2", n, -a, -1),
            e("n3", -n, a, -1),
            e("n4", n, a, -1),
            e("f1", -n, -a, 1),
            e("f2", n, -a, 1),
            e("f3", -n, a, 1),
            e("f4", n, a, 1),
            e("u1", .7 * n, 1.1 * a, -1),
            e("u2", .7 * -n, 1.1 * a, -1),
            e("u3", 0, 2 * a, -1),
            e("cf1", -n, 0, 1),
            e("cf2", n, 0, 1),
            e("cf3", 0, -a, 1),
            e("cf4", 0, a, 1),
            e("cn1", -n, 0, -1),
            e("cn2", n, 0, -1),
            e("cn3", 0, -a, -1),
            e("cn4", 0, a, -1),
            t.getAttribute("position").needsUpdate = !0
        }
    }(),
    Kn.prototype = Object.create(yt.prototype),
    Kn.prototype.constructor = Kn,
    Kn.prototype.update = function() {
        var e = new $;
        return function(t) {
            if (t && t.isBox3 ? e.copy(t) : e.setFromObject(t),
            !e.isEmpty()) {
                var i = e.min
                  , n = e.max
                  , r = this.geometry.attributes.position
                  , a = r.array;
                a[0] = n.x,
                a[1] = n.y,
                a[2] = n.z,
                a[3] = i.x,
                a[4] = n.y,
                a[5] = n.z,
                a[6] = i.x,
                a[7] = i.y,
                a[8] = n.z,
                a[9] = n.x,
                a[10] = i.y,
                a[11] = n.z,
                a[12] = n.x,
                a[13] = n.y,
                a[14] = i.z,
                a[15] = i.x,
                a[16] = n.y,
                a[17] = i.z,
                a[18] = i.x,
                a[19] = i.y,
                a[20] = i.z,
                a[21] = n.x,
                a[22] = i.y,
                a[23] = i.z,
                r.needsUpdate = !0,
                this.geometry.computeBoundingSphere()
            }
        }
    }();
    var _h = new Se;
    _h.addAttribute("position", new _e([0, 0, 0, 0, 1, 0],3));
    var wh = new ni(0,.5,1,5,1);
    wh.translate(0, -.5, 0),
    $n.prototype = Object.create(ce.prototype),
    $n.prototype.constructor = $n,
    $n.prototype.setDirection = function() {
        var e, t = new c;
        return function(i) {
            i.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(i.z, 0, -i.x).normalize(),
            e = Math.acos(i.y),
            this.quaternion.setFromAxisAngle(t, e))
        }
    }(),
    $n.prototype.setLength = function(e, t, i) {
        void 0 === t && (t = .2 * e),
        void 0 === i && (i = .2 * t),
        this.line.scale.set(1, Math.max(0, e - t), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(i, t, i),
        this.cone.position.y = e,
        this.cone.updateMatrix()
    }
    ,
    $n.prototype.setColor = function(e) {
        this.line.material.color.copy(e),
        this.cone.material.color.copy(e)
    }
    ,
    er.prototype = Object.create(yt.prototype),
    er.prototype.constructor = er;
    var Mh = function() {
        function e() {}
        var t = new c
          , i = new e
          , n = new e
          , r = new e;
        return e.prototype.init = function(e, t, i, n) {
            this.c0 = e,
            this.c1 = i,
            this.c2 = -3 * e + 3 * t - 2 * i - n,
            this.c3 = 2 * e - 2 * t + i + n
        }
        ,
        e.prototype.initNonuniformCatmullRom = function(e, t, i, n, r, a, o) {
            var s = (t - e) / r - (i - e) / (r + a) + (i - t) / a
              , c = (i - t) / a - (n - t) / (a + o) + (n - i) / o;
            s *= a,
            c *= a,
            this.init(t, i, s, c)
        }
        ,
        e.prototype.initCatmullRom = function(e, t, i, n, r) {
            this.init(t, i, r * (i - e), r * (n - t))
        }
        ,
        e.prototype.calc = function(e) {
            var t = e * e
              , i = t * e;
            return this.c0 + this.c1 * e + this.c2 * t + this.c3 * i
        }
        ,
        tn.create(function(e) {
            this.points = e || [],
            this.closed = !1
        }, function(e) {
            var a, o, s, h, l = this.points;
            h = l.length,
            2 > h && console.log("duh, you need at least 2 points"),
            a = (h - (this.closed ? 0 : 1)) * e,
            o = Math.floor(a),
            s = a - o,
            this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / l.length) + 1) * l.length : 0 === s && o === h - 1 && (o = h - 2,
            s = 1);
            var u, p, d, f;
            if (this.closed || o > 0 ? u = l[(o - 1) % h] : (t.subVectors(l[0], l[1]).add(l[0]),
            u = t),
            p = l[o % h],
            d = l[(o + 1) % h],
            this.closed || h > o + 2 ? f = l[(o + 2) % h] : (t.subVectors(l[h - 1], l[h - 2]).add(l[h - 1]),
            f = t),
            void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var m = "chordal" === this.type ? .5 : .25
                  , g = Math.pow(u.distanceToSquared(p), m)
                  , v = Math.pow(p.distanceToSquared(d), m)
                  , y = Math.pow(d.distanceToSquared(f), m);
                1e-4 > v && (v = 1),
                1e-4 > g && (g = v),
                1e-4 > y && (y = v),
                i.initNonuniformCatmullRom(u.x, p.x, d.x, f.x, g, v, y),
                n.initNonuniformCatmullRom(u.y, p.y, d.y, f.y, g, v, y),
                r.initNonuniformCatmullRom(u.z, p.z, d.z, f.z, g, v, y)
            } else if ("catmullrom" === this.type) {
                var x = void 0 !== this.tension ? this.tension : .5;
                i.initCatmullRom(u.x, p.x, d.x, f.x, x),
                n.initCatmullRom(u.y, p.y, d.y, f.y, x),
                r.initCatmullRom(u.z, p.z, d.z, f.z, x)
            }
            var b = new c(i.calc(s),n.calc(s),r.calc(s));
            return b
        })
    }()
      , Eh = tn.create(function(e) {
        console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
        this.points = void 0 === e ? [] : e
    }, function(e) {
        var t = this.points
          , i = (t.length - 1) * e
          , n = Math.floor(i)
          , r = i - n
          , a = t[0 == n ? n : n - 1]
          , o = t[n]
          , s = t[n > t.length - 2 ? t.length - 1 : n + 1]
          , h = t[n > t.length - 3 ? t.length - 1 : n + 2]
          , l = vh.interpolate;
        return new c(l(a.x, o.x, s.x, h.x, r),l(a.y, o.y, s.y, h.y, r),l(a.z, o.z, s.z, h.z, r))
    })
      , Th = tn.create(function(e, t, i, n) {
        this.v0 = e,
        this.v1 = t,
        this.v2 = i,
        this.v3 = n
    }, function(e) {
        var t = hh.b3;
        return new c(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
    })
      , Sh = tn.create(function(e, t, i) {
        this.v0 = e,
        this.v1 = t,
        this.v2 = i
    }, function(e) {
        var t = hh.b2;
        return new c(t(e, this.v0.x, this.v1.x, this.v2.x),t(e, this.v0.y, this.v1.y, this.v2.y),t(e, this.v0.z, this.v1.z, this.v2.z))
    })
      , Ah = tn.create(function(e, t) {
        this.v1 = e,
        this.v2 = t
    }, function(e) {
        if (1 === e)
            return this.v2.clone();
        var t = new c;
        return t.subVectors(this.v2, this.v1),
        t.multiplyScalar(e),
        t.add(this.v1),
        t
    });
    tr.prototype = Object.create(an.prototype),
    tr.prototype.constructor = tr;
    var Lh = {
        createMultiMaterialObject: function(e, t) {
            for (var i = new _t, n = 0, r = t.length; r > n; n++)
                i.add(new Ae(e,t[n]));
            return i
        },
        detach: function(e, t, i) {
            e.applyMatrix(t.matrixWorld),
            t.remove(e),
            i.add(e)
        },
        attach: function(e, t, i) {
            var n = new h;
            n.getInverse(i.matrixWorld),
            e.applyMatrix(n),
            t.remove(e),
            i.add(e)
        }
    }
      , Rh = 0
      , Ph = 1;
    _r.prototype = Object.create(Mh.prototype),
    Yn.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    Object.assign(Y.prototype, {
        center: function(e) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
            this.getCenter(e)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(e)
        },
        size: function(e) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
            this.getSize(e)
        }
    }),
    Object.assign($.prototype, {
        center: function(e) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
            this.getCenter(e)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(e) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(e)
        },
        size: function(e) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
            this.getSize(e)
        }
    }),
    he.prototype.center = function(e) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
        this.getCenter(e)
    }
    ,
    Jo.random16 = function() {
        return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
        Math.random()
    }
    ,
    Object.assign(te.prototype, {
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(e, t)
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            e.applyMatrix3(this)
        },
        multiplyVector3Array: function(e) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(e)
        }
    }),
    Object.assign(h.prototype, {
        extractPosition: function(e) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(e)
        },
        flattenToArrayOffset: function(e, t) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),
            this.toArray(e, t)
        },
        getPosition: function() {
            var e;
            return function() {
                return void 0 === e && (e = new c),
                console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
                e.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(e) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(e)
        },
        multiplyVector3: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
            e.applyProjection(this)
        },
        multiplyVector4: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            e.applyMatrix4(this)
        },
        multiplyVector3Array: function(e) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(e)
        },
        rotateAxis: function(e) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            e.transformDirection(this)
        },
        crossVector: function(e) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            e.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }),
    ie.prototype.isIntersectionLine = function(e) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
        this.intersectsLine(e)
    }
    ,
    s.prototype.multiplyVector3 = function(e) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        e.applyQuaternion(this)
    }
    ,
    Object.assign(ae.prototype, {
        isIntersectionBox: function(e) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(e)
        },
        isIntersectionPlane: function(e) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(e)
        },
        isIntersectionSphere: function(e) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(e)
        }
    }),
    Object.assign(hn.prototype, {
        extrude: function(e) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
            new Wt(this,e)
        },
        makeGeometry: function(e) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
            new ti(this,e)
        }
    }),
    Object.assign(c.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(e)
        },
        getScaleFromMatrix: function(e) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(e)
        },
        getColumnFromMatrix: function(e, t) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(t, e)
        }
    }),
    Ee.prototype.computeTangents = function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    }
    ,
    Object.assign(ce.prototype, {
        getChildByName: function(e) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(e)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(e, t) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(t, e)
        }
    }),
    Object.defineProperties(ce.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(e) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = e
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    Object.defineProperties(pt.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    }),
    Ce.prototype.setLens = function(e, t) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== t && (this.filmGauge = t),
        this.setFocalLength(e)
    }
    ,
    Object.defineProperties(Ai.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = e
            }
        },
        shadowCameraLeft: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = e
            }
        },
        shadowCameraRight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = e
            }
        },
        shadowCameraTop: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = e
            }
        },
        shadowCameraBottom: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = e
            }
        },
        shadowCameraNear: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = e
            }
        },
        shadowCameraFar: {
            set: function(e) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = e
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(e) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = e
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = e
            }
        },
        shadowMapHeight: {
            set: function(e) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = e
            }
        }
    }),
    Object.defineProperties(de.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),
                this.array.length
            }
        }
    }),
    Object.assign(Se.prototype, {
        addIndex: function(e) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(e)
        },
        addDrawCall: function(e, t, i) {
            void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(e, t)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }),
    Object.defineProperties(Se.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    Object.defineProperties(An.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),
                this
            }
        }
    }),
    Object.defineProperties(J.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
                new W
            }
        }
    }),
    Object.defineProperties(mi.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }),
    Object.defineProperties(Q.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(e) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = e
            }
        }
    }),
    t.prototype = Object.assign(Object.create({
        constructor: t,
        apply: function(e) {
            console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),
            Object.assign(e, this)
        }
    }), t.prototype),
    Object.assign(at.prototype, {
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),
            this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(e) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(e)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }),
    Object.defineProperties(at.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = e
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = e
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
                this.shadowMap.cullFace = e
            }
        }
    }),
    Object.defineProperties(re.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? Ir : Cr
            },
            set: function(e) {
                var t = e !== Cr;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + t + "."),
                this.renderReverseSided = t
            }
        }
    }),
    Object.defineProperties(a.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = e
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = e
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = e
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = e
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = e
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = e
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = e
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = e
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = e
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = e
            }
        }
    }),
    xn.prototype.load = function(e) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var t = this
          , i = new fn;
        return i.load(e, function(e) {
            t.setBuffer(e)
        }),
        this
    }
    ,
    _n.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
        this.getFrequencyData()
    }
    ;
    var Ch = {
        merge: function(e, t, i) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var n;
            t.isMesh && (t.matrixAutoUpdate && t.updateMatrix(),
            n = t.matrix,
            t = t.geometry),
            e.merge(t, n, i)
        },
        center: function(e) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
            e.center()
        }
    }
      , Ih = {
        crossOrigin: void 0,
        loadTexture: function(e, t, i, n) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var r = new Si;
            r.setCrossOrigin(this.crossOrigin);
            var a = r.load(e, i, void 0, n);
            return t && (a.mapping = t),
            a
        },
        loadTextureCube: function(e, t, i, n) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var r = new Ti;
            r.setCrossOrigin(this.crossOrigin);
            var a = r.load(e, i, void 0, n);
            return t && (a.mapping = t),
            a
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    }
      , Uh = {
        merge: function(e) {
            console.warn("THREE.UniformsUtils.merge() has been deprecated. Use Object.assign() instead.");
            for (var t = {}, i = 0; i < e.length; i++) {
                var n = this.clone(e[i]);
                for (var r in n)
                    t[r] = n[r]
            }
            return t
        },
        clone: function(e) {
            console.warn("THREE.UniformsUtils.clone() has been deprecated.");
            var t = {};
            for (var i in e) {
                t[i] = {};
                for (var n in e[i]) {
                    var r = e[i][n];
                    t[i][n] = r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? r.clone() : Array.isArray(r) ? r.slice() : r
                }
            }
            return t
        }
    };
    e.WebGLRenderTargetCube = o,
    e.WebGLRenderTarget = a,
    e.WebGLRenderer = at,
    e.ShaderLib = rh,
    e.UniformsLib = nh,
    e.ShaderChunk = th,
    e.FogExp2 = ot,
    e.Fog = st,
    e.Scene = ct,
    e.LensFlare = ht,
    e.Sprite = ut,
    e.LOD = pt,
    e.SkinnedMesh = mt,
    e.Skeleton = dt,
    e.Bone = ft,
    e.Mesh = Ae,
    e.LineSegments = yt,
    e.Line = vt,
    e.Points = bt,
    e.Group = _t,
    e.VideoTexture = wt,
    e.DataTexture = X,
    e.CompressedTexture = Mt,
    e.CubeTexture = l,
    e.CanvasTexture = Et,
    e.DepthTexture = Tt,
    e.Texture = n,
    e.CompressedTextureLoader = wi,
    e.BinaryTextureLoader = Mi,
    e.DataTextureLoader = fh,
    e.CubeTextureLoader = Ti,
    e.TextureLoader = Si,
    e.ObjectLoader = en,
    e.MaterialLoader = Ji,
    e.BufferGeometryLoader = Qi,
    e.DefaultLoadingManager = dh,
    e.LoadingManager = bi,
    e.JSONLoader = $i,
    e.ImageLoader = Ei,
    e.FontLoader = dn,
    e.FileLoader = _i,
    e.Loader = Ki,
    e.Cache = ph,
    e.AudioLoader = fn,
    e.SpotLightShadow = Pi,
    e.SpotLight = Ci,
    e.PointLight = Ii,
    e.RectAreaLight = mn,
    e.HemisphereLight = Li,
    e.DirectionalLightShadow = Ui,
    e.DirectionalLight = Di,
    e.AmbientLight = Ni,
    e.LightShadow = Ri,
    e.Light = Ai,
    e.StereoCamera = gn,
    e.PerspectiveCamera = Ce,
    e.OrthographicCamera = Ie,
    e.CubeCamera = vn,
    e.Camera = Pe,
    e.AudioListener = yn,
    e.PositionalAudio = bn,
    e.AudioContext = bh,
    e.AudioAnalyser = _n,
    e.Audio = xn,
    e.VectorKeyframeTrack = Hi,
    e.StringKeyframeTrack = Wi,
    e.QuaternionKeyframeTrack = ki,
    e.NumberKeyframeTrack = ji,
    e.ColorKeyframeTrack = Yi,
    e.BooleanKeyframeTrack = Xi,
    e.PropertyMixer = wn,
    e.PropertyBinding = Mn,
    e.KeyframeTrack = qi,
    e.AnimationUtils = mh,
    e.AnimationObjectGroup = En,
    e.AnimationMixer = Sn,
    e.AnimationClip = Zi,
    e.Uniform = An,
    e.InstancedBufferGeometry = Ln,
    e.BufferGeometry = Se,
    e.GeometryIdCount = Te,
    e.Geometry = Ee,
    e.InterleavedBufferAttribute = Rn,
    e.InstancedInterleavedBuffer = Cn,
    e.InterleavedBuffer = Pn,
    e.InstancedBufferAttribute = In,
    e.Face3 = ue,
    e.Object3D = ce,
    e.Raycaster = Un,
    e.Layers = se,
    e.EventDispatcher = t,
    e.Clock = On,
    e.QuaternionLinearInterpolant = Vi,
    e.LinearInterpolant = zi,
    e.DiscreteInterpolant = Bi,
    e.CubicInterpolant = Fi,
    e.Interpolant = Oi,
    e.Triangle = le,
    e.Spline = Fn,
    e.Math = Jo,
    e.Spherical = zn,
    e.Plane = ie,
    e.Frustum = ne,
    e.Sphere = ee,
    e.Ray = ae,
    e.Matrix4 = h,
    e.Matrix3 = te,
    e.Box3 = $,
    e.Box2 = Y,
    e.Line3 = he,
    e.Euler = oe,
    e.Vector4 = r,
    e.Vector3 = c,
    e.Vector2 = i,
    e.Quaternion = s,
    e.Color = W,
    e.MorphBlendMesh = Bn,
    e.ImmediateRenderObject = Gn,
    e.VertexNormalsHelper = Hn,
    e.SpotLightHelper = Vn,
    e.SkeletonHelper = kn,
    e.PointLightHelper = jn,
    e.RectAreaLightHelper = Wn,
    e.HemisphereLightHelper = Xn,
    e.GridHelper = Yn,
    e.PolarGridHelper = qn,
    e.FaceNormalsHelper = Zn,
    e.DirectionalLightHelper = Jn,
    e.CameraHelper = Qn,
    e.BoxHelper = Kn,
    e.ArrowHelper = $n,
    e.AxisHelper = er,
    e.CatmullRomCurve3 = Mh,
    e.SplineCurve3 = Eh,
    e.CubicBezierCurve3 = Th,
    e.QuadraticBezierCurve3 = Sh,
    e.LineCurve3 = Ah,
    e.ArcCurve = tr,
    e.EllipseCurve = an,
    e.SplineCurve = on,
    e.CubicBezierCurve = sn,
    e.QuadraticBezierCurve = cn,
    e.LineCurve = nn,
    e.Shape = hn,
    e.ShapePath = un,
    e.Path = ln,
    e.Font = pn,
    e.CurvePath = rn,
    e.Curve = tn,
    e.ShapeUtils = hh,
    e.SceneUtils = Lh,
    e.CurveUtils = vh,
    e.WireframeGeometry = St,
    e.ParametricGeometry = Lt,
    e.ParametricBufferGeometry = At,
    e.TetrahedronGeometry = Ct,
    e.TetrahedronBufferGeometry = Pt,
    e.OctahedronGeometry = Ut,
    e.OctahedronBufferGeometry = It,
    e.IcosahedronGeometry = Nt,
    e.IcosahedronBufferGeometry = Dt,
    e.DodecahedronGeometry = Ft,
    e.DodecahedronBufferGeometry = Ot,
    e.PolyhedronGeometry = zt,
    e.PolyhedronBufferGeometry = Rt,
    e.TubeGeometry = Gt,
    e.TubeBufferGeometry = Bt,
    e.TorusKnotGeometry = Vt,
    e.TorusKnotBufferGeometry = Ht,
    e.TorusGeometry = jt,
    e.TorusBufferGeometry = kt,
    e.TextGeometry = Xt,
    e.SphereBufferGeometry = Yt,
    e.SphereGeometry = qt,
    e.RingGeometry = Jt,
    e.RingBufferGeometry = Zt,
    e.PlaneBufferGeometry = Re,
    e.PlaneGeometry = Qt,
    e.LatheGeometry = $t,
    e.LatheBufferGeometry = Kt,
    e.ShapeGeometry = ti,
    e.ShapeBufferGeometry = ei,
    e.ExtrudeGeometry = Wt,
    e.EdgesGeometry = ii,
    e.ConeGeometry = ai,
    e.ConeBufferGeometry = oi,
    e.CylinderGeometry = ri,
    e.CylinderBufferGeometry = ni,
    e.CircleBufferGeometry = si,
    e.CircleGeometry = ci,
    e.BoxBufferGeometry = Le,
    e.BoxGeometry = hi,
    e.ShadowMaterial = li,
    e.SpriteMaterial = lt,
    e.RawShaderMaterial = ui,
    e.ShaderMaterial = Q,
    e.PointsMaterial = xt,
    e.MultiMaterial = pi,
    e.MeshPhysicalMaterial = fi,
    e.MeshStandardMaterial = di,
    e.MeshPhongMaterial = mi,
    e.MeshToonMaterial = gi,
    e.MeshNormalMaterial = vi,
    e.MeshLambertMaterial = yi,
    e.MeshDepthMaterial = K,
    e.MeshBasicMaterial = pe,
    e.LineDashedMaterial = xi,
    e.LineBasicMaterial = gt,
    e.Material = J,
    e.Float64BufferAttribute = we,
    e.Float32BufferAttribute = _e,
    e.Uint32BufferAttribute = be,
    e.Int32BufferAttribute = xe,
    e.Uint16BufferAttribute = ye,
    e.Int16BufferAttribute = ve,
    e.Uint8ClampedBufferAttribute = ge,
    e.Uint8BufferAttribute = me,
    e.Int8BufferAttribute = fe,
    e.BufferAttribute = de,
    e.REVISION = Lr,
    e.MOUSE = Rr,
    e.CullFaceNone = Pr,
    e.CullFaceBack = Cr,
    e.CullFaceFront = Ir,
    e.CullFaceFrontBack = Ur,
    e.FrontFaceDirectionCW = Dr,
    e.FrontFaceDirectionCCW = Nr,
    e.BasicShadowMap = Or,
    e.PCFShadowMap = Fr,
    e.PCFSoftShadowMap = zr,
    e.FrontSide = Br,
    e.BackSide = Gr,
    e.DoubleSide = Hr,
    e.FlatShading = Vr,
    e.SmoothShading = kr,
    e.NoColors = jr,
    e.FaceColors = Wr,
    e.VertexColors = Xr,
    e.NoBlending = Yr,
    e.NormalBlending = qr,
    e.AdditiveBlending = Zr,
    e.SubtractiveBlending = Jr,
    e.MultiplyBlending = Qr,
    e.CustomBlending = Kr,
    e.BlendingMode = $r,
    e.AddEquation = ea,
    e.SubtractEquation = ta,
    e.ReverseSubtractEquation = ia,
    e.MinEquation = na,
    e.MaxEquation = ra,
    e.ZeroFactor = aa,
    e.OneFactor = oa,
    e.SrcColorFactor = sa,
    e.OneMinusSrcColorFactor = ca,
    e.SrcAlphaFactor = ha,
    e.OneMinusSrcAlphaFactor = la,
    e.DstAlphaFactor = ua,
    e.OneMinusDstAlphaFactor = pa,
    e.DstColorFactor = da,
    e.OneMinusDstColorFactor = fa,
    e.SrcAlphaSaturateFactor = ma,
    e.NeverDepth = ga,
    e.AlwaysDepth = va,
    e.LessDepth = ya,
    e.LessEqualDepth = xa,
    e.EqualDepth = ba,
    e.GreaterEqualDepth = _a,
    e.GreaterDepth = wa,
    e.NotEqualDepth = Ma,
    e.MultiplyOperation = Ea,
    e.MixOperation = Ta,
    e.AddOperation = Sa,
    e.NoToneMapping = Aa,
    e.LinearToneMapping = La,
    e.ReinhardToneMapping = Ra,
    e.Uncharted2ToneMapping = Pa,
    e.CineonToneMapping = Ca,
    e.UVMapping = Ia,
    e.CubeReflectionMapping = Ua,
    e.CubeRefractionMapping = Da,
    e.EquirectangularReflectionMapping = Na,
    e.EquirectangularRefractionMapping = Oa,
    e.SphericalReflectionMapping = Fa,
    e.CubeUVReflectionMapping = za,
    e.CubeUVRefractionMapping = Ba,
    e.TextureMapping = Ga,
    e.RepeatWrapping = Ha,
    e.ClampToEdgeWrapping = Va,
    e.MirroredRepeatWrapping = ka,
    e.TextureWrapping = ja,
    e.NearestFilter = Wa,
    e.NearestMipMapNearestFilter = Xa,
    e.NearestMipMapLinearFilter = Ya,
    e.LinearFilter = qa,
    e.LinearMipMapNearestFilter = Za,
    e.LinearMipMapLinearFilter = Ja,
    e.TextureFilter = Qa,
    e.UnsignedByteType = Ka,
    e.ByteType = $a,
    e.ShortType = eo,
    e.UnsignedShortType = to,
    e.IntType = io,
    e.UnsignedIntType = no,
    e.FloatType = ro,
    e.HalfFloatType = ao,
    e.UnsignedShort4444Type = oo,
    e.UnsignedShort5551Type = so,
    e.UnsignedShort565Type = co,
    e.UnsignedInt248Type = ho,
    e.AlphaFormat = lo,
    e.RGBFormat = uo,
    e.RGBAFormat = po,
    e.LuminanceFormat = fo,
    e.LuminanceAlphaFormat = mo,
    e.RGBEFormat = go,
    e.DepthFormat = vo,
    e.DepthStencilFormat = yo,
    e.RGB_S3TC_DXT1_Format = xo,
    e.RGBA_S3TC_DXT1_Format = bo,
    e.RGBA_S3TC_DXT3_Format = _o,
    e.RGBA_S3TC_DXT5_Format = wo,
    e.RGB_PVRTC_4BPPV1_Format = Mo,
    e.RGB_PVRTC_2BPPV1_Format = Eo,
    e.RGBA_PVRTC_4BPPV1_Format = To,
    e.RGBA_PVRTC_2BPPV1_Format = So,
    e.RGB_ETC1_Format = Ao,
    e.LoopOnce = Lo,
    e.LoopRepeat = Ro,
    e.LoopPingPong = Po,
    e.InterpolateDiscrete = Co,
    e.InterpolateLinear = Io,
    e.InterpolateSmooth = Uo,
    e.ZeroCurvatureEnding = Do,
    e.ZeroSlopeEnding = No,
    e.WrapAroundEnding = Oo,
    e.TrianglesDrawMode = Fo,
    e.TriangleStripDrawMode = zo,
    e.TriangleFanDrawMode = Bo,
    e.LinearEncoding = Go,
    e.sRGBEncoding = Ho,
    e.GammaEncoding = Vo,
    e.RGBEEncoding = ko,
    e.LogLuvEncoding = jo,
    e.RGBM7Encoding = Wo,
    e.RGBM16Encoding = Xo,
    e.RGBDEncoding = Yo,
    e.BasicDepthPacking = qo,
    e.RGBADepthPacking = Zo,
    e.CubeGeometry = hi,
    e.Face4 = ir,
    e.LineStrip = Rh,
    e.LinePieces = Ph,
    e.MeshFaceMaterial = nr,
    e.PointCloud = rr,
    e.Particle = ar,
    e.ParticleSystem = or,
    e.PointCloudMaterial = sr,
    e.ParticleBasicMaterial = cr,
    e.ParticleSystemMaterial = hr,
    e.Vertex = lr,
    e.DynamicBufferAttribute = ur,
    e.Int8Attribute = pr,
    e.Uint8Attribute = dr,
    e.Uint8ClampedAttribute = fr,
    e.Int16Attribute = mr,
    e.Uint16Attribute = gr,
    e.Int32Attribute = vr,
    e.Uint32Attribute = yr,
    e.Float32Attribute = xr,
    e.Float64Attribute = br,
    e.ClosedSplineCurve3 = _r,
    e.BoundingBoxHelper = wr,
    e.EdgesHelper = Mr,
    e.WireframeHelper = Er,
    e.XHRLoader = Tr,
    e.GeometryUtils = Ch,
    e.ImageUtils = Ih,
    e.UniformsUtils = Uh,
    e.Projector = Sr,
    e.CanvasRenderer = Ar,
    Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
THREE.HDRLoader = THREE.RGBELoader = function(e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager
}
,
THREE.RGBELoader.prototype = Object.create(THREE.BinaryTextureLoader.prototype),
THREE.RGBELoader.prototype._parser = function(e) {
    {
        var t = -1
          , i = 1
          , n = 2
          , r = 3
          , a = 4
          , o = function(e, o) {
            switch (e) {
            case i:
                console.error("THREE.RGBELoader Read Error: " + (o || ""));
                break;
            case n:
                console.error("THREE.RGBELoader Write Error: " + (o || ""));
                break;
            case r:
                console.error("THREE.RGBELoader Bad File Format: " + (o || ""));
                break;
            default:
            case a:
                console.error("THREE.RGBELoader: Error: " + (o || ""))
            }
            return t
        }
          , s = 1
          , c = 2
          , h = 4
          , l = "\n"
          , u = function(e, t, i) {
            t = t ? t : 1024;
            for (var n = e.pos, r = -1, a = 0, o = "", s = 128, c = String.fromCharCode.apply(null, new Uint16Array(e.subarray(n, n + s))); 0 > (r = c.indexOf(l)) && t > a && n < e.byteLength; )
                o += c,
                a += c.length,
                n += s,
                c += String.fromCharCode.apply(null, new Uint16Array(e.subarray(n, n + s)));
            return r > -1 ? (!1 !== i && (e.pos += a + r + 1),
            o + c.slice(0, r)) : !1
        }
          , p = function(e) {
            var t, n, a = /^#\?(\S+)$/, l = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, p = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, d = /^\s*FORMAT=(\S+)\s*$/, f = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, m = {
                valid: 0,
                string: "",
                comments: "",
                programtype: "RGBE",
                format: "",
                gamma: 1,
                exposure: 1,
                width: 0,
                height: 0
            };
            if (e.pos >= e.byteLength || !(t = u(e)))
                return o(i, "no header found");
            if (!(n = t.match(a)))
                return o(r, "bad initial token");
            for (m.valid |= s,
            m.programtype = n[1],
            m.string += t + "\n"; ; ) {
                if (t = u(e),
                !1 === t)
                    break;
                if (m.string += t + "\n",
                "#" !== t.charAt(0)) {
                    if ((n = t.match(l)) && (m.gamma = parseFloat(n[1], 10)),
                    (n = t.match(p)) && (m.exposure = parseFloat(n[1], 10)),
                    (n = t.match(d)) && (m.valid |= c,
                    m.format = n[1]),
                    (n = t.match(f)) && (m.valid |= h,
                    m.height = parseInt(n[1], 10),
                    m.width = parseInt(n[2], 10)),
                    m.valid & c && m.valid & h)
                        break
                } else
                    m.comments += t + "\n"
            }
            return m.valid & c ? m.valid & h ? m : o(r, "missing image size specifier") : o(r, "missing format specifier")
        }
          , d = function(e, t, n) {
            var s, c, h, l, u, p, d, f, m, g, v, y, x, b = t, _ = n;
            if (8 > b || b > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
                return new Uint8Array(e);
            if (b !== (e[2] << 8 | e[3]))
                return o(r, "wrong scanline width");
            if (s = new Uint8Array(4 * t * n),
            !s || !s.length)
                return o(a, "unable to allocate buffer space");
            for (c = 0,
            h = 0,
            f = 4 * b,
            x = new Uint8Array(4),
            p = new Uint8Array(f); _ > 0 && h < e.byteLength; ) {
                if (h + 4 > e.byteLength)
                    return o(i);
                if (x[0] = e[h++],
                x[1] = e[h++],
                x[2] = e[h++],
                x[3] = e[h++],
                2 != x[0] || 2 != x[1] || (x[2] << 8 | x[3]) != b)
                    return o(r, "bad rgbe scanline format");
                for (d = 0; f > d && h < e.byteLength; ) {
                    if (l = e[h++],
                    y = l > 128,
                    y && (l -= 128),
                    0 === l || d + l > f)
                        return o(r, "bad scanline data");
                    if (y)
                        for (u = e[h++],
                        m = 0; l > m; m++)
                            p[d++] = u;
                    else
                        p.set(e.subarray(h, h + l), d),
                        d += l,
                        h += l
                }
                for (g = b,
                m = 0; g > m; m++)
                    v = 0,
                    s[c] = p[m + v],
                    v += b,
                    s[c + 1] = p[m + v],
                    v += b,
                    s[c + 2] = p[m + v],
                    v += b,
                    s[c + 3] = p[m + v],
                    c += 4;
                _--
            }
            return s
        }
          , f = new Uint8Array(e);
        f.byteLength
    }
    f.pos = 0;
    var m = p(f);
    if (t !== m) {
        var g = m.width
          , v = m.height
          , y = d(f.subarray(f.pos), g, v);
        if (t !== y)
            return {
                width: g,
                height: v,
                data: y,
                header: m.string,
                gamma: m.gamma,
                exposure: m.exposure,
                format: THREE.RGBEFormat,
                type: THREE.UnsignedByteType
            }
    }
    return null
}
,
THREE.HDRCubeTextureLoader = function(e) {
    if (this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager,
    this.hdrLoader = new THREE.RGBELoader,
    void 0 === THREE.Encodings)
        throw new Error("HDRCubeMapLoader requires THREE.Encodings")
}
,
THREE.HDRCubeTextureLoader.prototype.load = function(e, t, i, n, r) {
    function a(i, n, r, a) {
        var h = new THREE.FileLoader(this.manager);
        h.setResponseType("arraybuffer"),
        h.load(t[i], function(t) {
            c++;
            var r = s._parser(t);
            if (r) {
                if (e === THREE.FloatType) {
                    for (var a = r.data.length / 4 * 3, h = new Float32Array(a), l = 0; a > l; l++)
                        THREE.Encodings.RGBEByteToRGBFloat(r.data, 4 * l, h, 3 * l);
                    r.data = h
                } else if (e === THREE.HalfFloatType) {
                    for (var a = r.data.length / 4 * 3, u = new Uint16Array(a), l = 0; a > l; l++)
                        THREE.Encodings.RGBEByteToRGBHalf(r.data, 4 * l, u, 3 * l);
                    r.data = u
                }
                if (void 0 !== r.image)
                    o[i].images = r.image;
                else if (void 0 !== r.data) {
                    var p = new THREE.DataTexture(r.data,r.width,r.height);
                    p.format = o.format,
                    p.type = o.type,
                    p.encoding = o.encoding,
                    p.minFilter = o.minFilter,
                    p.magFilter = o.magFilter,
                    p.generateMipmaps = o.generateMipmaps,
                    o.images[i] = p
                }
                6 === c && (o.needsUpdate = !0,
                n && n(o))
            }
        }, r, a)
    }
    var o = new THREE.CubeTexture;
    o.type = e,
    o.encoding = e === THREE.UnsignedByteType ? THREE.RGBEEncoding : THREE.LinearEncoding,
    o.format = e === THREE.UnsignedByteType ? THREE.RGBAFormat : THREE.RGBFormat,
    o.minFilter = o.encoding === THREE.RGBEEncoding ? THREE.NearestFilter : THREE.LinearFilter,
    o.magFilter = o.encoding === THREE.RGBEEncoding ? THREE.NearestFilter : THREE.LinearFilter,
    o.generateMipmaps = o.encoding !== THREE.RGBEEncoding,
    o.anisotropy = 0;
    for (var s = this.hdrLoader, c = 0, h = 0; h < t.length; h++)
        a(h, i, n, r);
    return o
}
,
THREE.toHalf = function() {
    var e = new Float32Array(1)
      , t = new Int32Array(e.buffer);
    return function(i) {
        e[0] = i;
        var n = t[0]
          , r = n >> 16 & 32768
          , a = n >> 12 & 2047
          , o = n >> 23 & 255;
        return 103 > o ? r : o > 142 ? (r |= 31744,
        r |= (255 == o ? 0 : 1) && 8388607 & n) : 113 > o ? (a |= 2048,
        r |= (a >> 114 - o) + (a >> 113 - o & 1)) : (r |= o - 112 << 10 | a >> 1,
        r += 1 & a)
    }
}(),
THREE.Encodings = function() {
    if (void 0 === THREE.toHalf)
        throw new Error("THREE.Encodings is required for HDRCubeMapLoader when loading half data.")
}
,
THREE.Encodings.RGBEByteToRGBFloat = function(e, t, i, n) {
    var r = e[t + 3]
      , a = Math.pow(2, r - 128) / 255;
    i[n + 0] = e[t + 0] * a,
    i[n + 1] = e[t + 1] * a,
    i[n + 2] = e[t + 2] * a
}
,
THREE.Encodings.RGBEByteToRGBHalf = function(e, t, i, n) {
    var r = e[t + 3]
      , a = Math.pow(2, r - 128) / 255;
    i[n + 0] = THREE.toHalf(e[t + 0] * a),
    i[n + 1] = THREE.toHalf(e[t + 1] * a),
    i[n + 2] = THREE.toHalf(e[t + 2] * a)
}
,
THREE.PMREMGenerator = function(e) {
    this.sourceTexture = e,
    this.resolution = 256;
    var t = e.encoding === THREE.LinearEncoding || e.encoding === THREE.GammaEncoding || e.encoding === THREE.sRGBEncoding;
    this.sourceTexture.minFilter = t ? THREE.LinearFilter : THREE.NearestFilter,
    this.sourceTexture.magFilter = t ? THREE.LinearFilter : THREE.NearestFilter,
    this.sourceTexture.generateMipmaps = this.sourceTexture.generateMipmaps && t,
    this.cubeLods = [];
    var i = this.resolution
      , n = {
        format: this.sourceTexture.format,
        magFilter: this.sourceTexture.magFilter,
        minFilter: this.sourceTexture.minFilter,
        type: this.sourceTexture.type,
        generateMipmaps: this.sourceTexture.generateMipmaps,
        anisotropy: this.sourceTexture.anisotropy,
        encoding: this.sourceTexture.encoding
    };
    this.numLods = Math.log2(i) - 2;
    for (var r = 0; r < this.numLods; r++) {
        var a = new THREE.WebGLRenderTargetCube(i,i,n);
        this.cubeLods.push(a),
        i = Math.max(16, i / 2)
    }
    this.camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1e3),
    this.shader = this.getShader(),
    this.planeMesh = new THREE.Mesh(new THREE.PlaneGeometry(2,2,0),this.shader),
    this.planeMesh.material.side = THREE.DoubleSide,
    this.scene = new THREE.Scene,
    this.scene.add(this.planeMesh),
    this.scene.add(this.camera),
    this.shader.uniforms.envMap.value = this.sourceTexture,
    this.shader.envMap = this.sourceTexture
}
,
THREE.PMREMGenerator.prototype = {
    constructor: THREE.PMREMGenerator,
    update: function(e) {
        this.shader.uniforms.envMap.value = this.sourceTexture,
        this.shader.envMap = this.sourceTexture;
        var t = e.gammaInput
          , i = e.gammaOutput
          , n = e.toneMapping
          , r = e.toneMappingExposure;
        e.toneMapping = THREE.LinearToneMapping,
        e.toneMappingExposure = 1,
        e.gammaInput = !1,
        e.gammaOutput = !1;
        for (var a = 0; a < this.numLods; a++) {
            var o = a / (this.numLods - 1);
            this.shader.uniforms.roughness.value = .9 * o;
            var s = this.cubeLods[a].width;
            this.shader.uniforms.mapSize.value = s,
            this.renderToCubeMapTarget(e, this.cubeLods[a]),
            5 > a && (this.shader.uniforms.envMap.value = this.cubeLods[a].texture)
        }
        e.toneMapping = n,
        e.toneMappingExposure = r,
        e.gammaInput = t,
        e.gammaOutput = i
    },
    renderToCubeMapTarget: function(e, t) {
        for (var i = 0; 6 > i; i++)
            this.renderToCubeMapTargetFace(e, t, i)
    },
    renderToCubeMapTargetFace: function(e, t, i) {
        t.activeCubeFace = i,
        this.shader.uniforms.faceIndex.value = i,
        e.render(this.scene, this.camera, t, !0)
    },
    getShader: function() {
        return new THREE.ShaderMaterial({
            uniforms: {
                faceIndex: {
                    value: 0
                },
                roughness: {
                    value: .5
                },
                mapSize: {
                    value: .5
                },
                envMap: {
                    value: null
                },
                testColor: {
                    value: new THREE.Vector3(1,1,1)
                }
            },
            vertexShader: "varying vec2 vUv;\n				void main() {\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n				}",
            fragmentShader: "#include <common>\n				varying vec2 vUv;\n				uniform int faceIndex;\n				uniform float roughness;\n				uniform samplerCube envMap;\n				uniform float mapSize;\n				uniform vec3 testColor;\n				\n				float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n					float a = ggxRoughness + 0.0001;\n					a *= a;\n					return ( 2.0 / a - 2.0 );\n				}\n				vec3 ImportanceSamplePhong(vec2 uv, mat3 vecSpace, float specPow) {\n					float phi = uv.y * 2.0 * PI;\n					float cosTheta = pow(1.0 - uv.x, 1.0 / (specPow + 1.0));\n					float sinTheta = sqrt(1.0 - cosTheta * cosTheta);\n					vec3 sampleDir = vec3(cos(phi) * sinTheta, sin(phi) * sinTheta, cosTheta);\n					return vecSpace * sampleDir;\n				}\n				vec3 ImportanceSampleGGX( vec2 uv, mat3 vecSpace, float Roughness )\n				{\n					float a = Roughness * Roughness;\n					float Phi = 2.0 * PI * uv.x;\n					float CosTheta = sqrt( (1.0 - uv.y) / ( 1.0 + (a*a - 1.0) * uv.y ) );\n					float SinTheta = sqrt( 1.0 - CosTheta * CosTheta );\n					return vecSpace * vec3(SinTheta * cos( Phi ), SinTheta * sin( Phi ), CosTheta);\n				}\n				mat3 matrixFromVector(vec3 n) {\n					float a = 1.0 / (1.0 + n.z);\n					float b = -n.x * n.y * a;\n					vec3 b1 = vec3(1.0 - n.x * n.x * a, b, -n.x);\n					vec3 b2 = vec3(b, 1.0 - n.y * n.y * a, -n.y);\n					return mat3(b1, b2, n);\n				}\n				\n				vec4 testColorMap(float Roughness) {\n					vec4 color;\n					if(faceIndex == 0)\n						color = vec4(1.0,0.0,0.0,1.0);\n					else if(faceIndex == 1)\n						color = vec4(0.0,1.0,0.0,1.0);\n					else if(faceIndex == 2)\n						color = vec4(0.0,0.0,1.0,1.0);\n					else if(faceIndex == 3)\n						color = vec4(1.0,1.0,0.0,1.0);\n					else if(faceIndex == 4)\n						color = vec4(0.0,1.0,1.0,1.0);\n					else\n						color = vec4(1.0,0.0,1.0,1.0);\n					color *= ( 1.0 - Roughness );\n					return color;\n				}\n				void main() {\n					vec3 sampleDirection;\n					vec2 uv = vUv*2.0 - 1.0;\n					float offset = -1.0/mapSize;\n					const float a = -1.0;\n					const float b = 1.0;\n					float c = -1.0 + offset;\n					float d = 1.0 - offset;\n					float bminusa = b - a;\n					uv.x = (uv.x - a)/bminusa * d - (uv.x - b)/bminusa * c;\n					uv.y = (uv.y - a)/bminusa * d - (uv.y - b)/bminusa * c;\n					if (faceIndex==0) {\n						sampleDirection = vec3(1.0, -uv.y, -uv.x);\n					} else if (faceIndex==1) {\n						sampleDirection = vec3(-1.0, -uv.y, uv.x);\n					} else if (faceIndex==2) {\n						sampleDirection = vec3(uv.x, 1.0, uv.y);\n					} else if (faceIndex==3) {\n						sampleDirection = vec3(uv.x, -1.0, -uv.y);\n					} else if (faceIndex==4) {\n						sampleDirection = vec3(uv.x, -uv.y, 1.0);\n					} else {\n						sampleDirection = vec3(-uv.x, -uv.y, -1.0);\n					}\n					mat3 vecSpace = matrixFromVector(normalize(sampleDirection));\n					vec3 rgbColor = vec3(0.0);\n					const int NumSamples = 1024;\n					vec3 vect;\n					float weight = 0.0;\n					for(int i=0; i<NumSamples; i++) {\n						float sini = sin(float(i));\n						float cosi = cos(float(i));\n						float r = rand(vec2(sini, cosi));\n						vect = ImportanceSampleGGX(vec2(float(i) / float(NumSamples), r), vecSpace, roughness);\n						float dotProd = dot(vect, normalize(sampleDirection));\n						weight += dotProd;\n						vec3 color = envMapTexelToLinear(textureCube(envMap,vect)).rgb;\n						rgbColor.rgb += color;\n					}\n					rgbColor /= float(NumSamples);\n					//rgbColor = testColorMap( roughness ).rgb;\n					gl_FragColor = linearToOutputTexel( vec4( rgbColor, 1.0 ) );\n				}",
            blending: THREE.CustomBlending,
            blendSrc: THREE.OneFactor,
            blendDst: THREE.ZeroFactor,
            blendSrcAlpha: THREE.OneFactor,
            blendDstAlpha: THREE.ZeroFactor,
            blendEquation: THREE.AddEquation
        })
    }
},
THREE.PMREMCubeUVPacker = function(e, t) {
    this.cubeLods = e,
    this.numLods = t;
    var i = 4 * e[0].width
      , n = e[0].texture
      , r = {
        format: n.format,
        magFilter: n.magFilter,
        minFilter: n.minFilter,
        type: n.type,
        generateMipmaps: n.generateMipmaps,
        anisotropy: n.anisotropy,
        encoding: n.encoding
    };
    this.CubeUVRenderTarget = new THREE.WebGLRenderTarget(i,i,r),
    this.CubeUVRenderTarget.texture.mapping = THREE.CubeUVReflectionMapping,
    this.camera = new THREE.OrthographicCamera(.5 * -i,.5 * i,.5 * -i,.5 * i,0,1e3),
    this.scene = new THREE.Scene,
    this.scene.add(this.camera),
    this.objects = [];
    var a = [];
    a.push(new THREE.Vector2(0,0)),
    a.push(new THREE.Vector2(1,0)),
    a.push(new THREE.Vector2(2,0)),
    a.push(new THREE.Vector2(0,1)),
    a.push(new THREE.Vector2(1,1)),
    a.push(new THREE.Vector2(2,1));
    var o = i;
    i = e[0].width;
    var s = 0
      , c = 4;
    this.numLods = Math.log2(e[0].width) - 2;
    for (var h = 0; h < this.numLods; h++) {
        var l = .5 * (o - o / c);
        i > 16 && (c *= 2);
        for (var u = i > 16 ? 6 : 1, p = 0, d = 0, f = i, m = 0; u > m; m++) {
            for (var g = 0; 6 > g; g++) {
                var v = this.getShader();
                v.uniforms.envMap.value = this.cubeLods[h].texture,
                v.envMap = this.cubeLods[h].texture,
                v.uniforms.faceIndex.value = g,
                v.uniforms.mapSize.value = f;
                var y = (v.uniforms.testColor.value,
                new THREE.Mesh(new THREE.PlaneGeometry(f,f,0),v));
                y.position.x = a[g].x * f - l + p,
                y.position.y = a[g].y * f - l + s + d,
                y.material.side = THREE.DoubleSide,
                this.scene.add(y),
                this.objects.push(y)
            }
            d += 1.75 * f,
            p += 1.25 * f,
            f /= 2
        }
        s += 2 * i,
        i > 16 && (i /= 2)
    }
}
,
THREE.PMREMCubeUVPacker.prototype = {
    constructor: THREE.PMREMCubeUVPacker,
    update: function(e) {
        var t = e.gammaInput
          , i = e.gammaOutput
          , n = e.toneMapping
          , r = e.toneMappingExposure;
        e.gammaInput = !1,
        e.gammaOutput = !1,
        e.toneMapping = THREE.LinearToneMapping,
        e.toneMappingExposure = 1,
        e.render(this.scene, this.camera, this.CubeUVRenderTarget, !1),
        e.toneMapping = n,
        e.toneMappingExposure = r,
        e.gammaInput = t,
        e.gammaOutput = i
    },
    getShader: function() {
        var e = new THREE.ShaderMaterial({
            uniforms: {
                faceIndex: {
                    value: 0
                },
                mapSize: {
                    value: 0
                },
                envMap: {
                    value: null
                },
                testColor: {
                    value: new THREE.Vector3(1,1,1)
                }
            },
            vertexShader: "precision highp float;				varying vec2 vUv;				void main() {					vUv = uv;					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );				}",
            fragmentShader: "precision highp float;				varying vec2 vUv;				uniform samplerCube envMap;				uniform float mapSize;				uniform vec3 testColor;				uniform int faceIndex;								void main() {					vec3 sampleDirection;					vec2 uv = vUv;					uv = uv * 2.0 - 1.0;					uv.y *= -1.0;					if(faceIndex == 0) {						sampleDirection = normalize(vec3(1.0, uv.y, -uv.x));					} else if(faceIndex == 1) {						sampleDirection = normalize(vec3(uv.x, 1.0, uv.y));					} else if(faceIndex == 2) {						sampleDirection = normalize(vec3(uv.x, uv.y, 1.0));					} else if(faceIndex == 3) {						sampleDirection = normalize(vec3(-1.0, uv.y, uv.x));					} else if(faceIndex == 4) {						sampleDirection = normalize(vec3(uv.x, -1.0, -uv.y));					} else {						sampleDirection = normalize(vec3(-uv.x, uv.y, -1.0));					}					vec4 color = envMapTexelToLinear( textureCube( envMap, sampleDirection ) );					gl_FragColor = linearToOutputTexel( color );				}",
            blending: THREE.CustomBlending,
            premultipliedAlpha: !1,
            blendSrc: THREE.OneFactor,
            blendDst: THREE.ZeroFactor,
            blendSrcAlpha: THREE.OneFactor,
            blendDstAlpha: THREE.ZeroFactor,
            blendEquation: THREE.AddEquation
        });
        return e
    }
};
