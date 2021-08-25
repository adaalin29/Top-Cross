/*

@license
dhtmlxScheduler v.5.2.5 Stardard

To use dhtmlxScheduler in non-GPL projects (and get Pro version of the product), please obtain Commercial/Enterprise or Ultimate license on our site https://dhtmlx.com/docs/products/dhtmlxScheduler/#licensing or contact us at sales@dhtmlx.com

(c) XB Software Ltd.

*/
!(function () {
    function dtmlXMLLoaderObject(e, t, i, a) {
        return (this.xmlDoc = ""), (this.async = void 0 === i || i), (this.onloadAction = e || null), (this.mainObject = t || null), (this.waitCall = null), (this.rSeed = a || !1), this;
    }
    function dhtmlDragAndDropObject() {
        return window.dhtmlDragAndDrop
            ? window.dhtmlDragAndDrop
            : ((this.lastLanding = 0), (this.dragNode = 0), (this.dragStartNode = 0), (this.dragStartObject = 0), (this.tempDOMU = null), (this.tempDOMM = null), (this.waitDrag = 0), (window.dhtmlDragAndDrop = this), this);
    }
    function _dhtmlxError(e, t, i) {
        return this.catches || (this.catches = []), this;
    }
    function dhtmlXHeir(e, t) {
        for (var i in t) "function" == typeof t[i] && (e[i] = t[i]);
        return e;
    }
    window.dhtmlx ||
        (window.dhtmlx = function (e) {
            for (var t in e) dhtmlx[t] = e[t];
            return dhtmlx;
        }),
        (dhtmlx.extend_api = function (e, t, i) {
            var a = window[e];
            a &&
                ((window[e] = function (e) {
                    var i;
                    if (e && "object" == typeof e && !e.tagName) {
                        i = a.apply(this, t._init ? t._init(e) : arguments);
                        for (var n in dhtmlx) t[n] && this[t[n]](dhtmlx[n]);
                        for (var n in e) t[n] ? this[t[n]](e[n]) : 0 === n.indexOf("on") && this.attachEvent(n, e[n]);
                    } else i = a.apply(this, arguments);
                    return t._patch && t._patch(this), i || this;
                }),
                (window[e].prototype = a.prototype),
                i && dhtmlXHeir(window[e].prototype, i));
        }),
        (window.dhtmlxAjax = {
            get: function (e, t) {
                var i = new dtmlXMLLoaderObject(!0);
                return (i.async = arguments.length < 3), (i.waitCall = t), i.loadXML(e), i;
            },
            post: function (e, t, i) {
                var a = new dtmlXMLLoaderObject(!0);
                return (a.async = arguments.length < 4), (a.waitCall = i), a.loadXML(e, !0, t), a;
            },
            getSync: function (e) {
                return this.get(e, null, !0);
            },
            postSync: function (e, t) {
                return this.post(e, t, null, !0);
            },
        }),
        (window.dtmlXMLLoaderObject = dtmlXMLLoaderObject),
        (dtmlXMLLoaderObject.count = 0),
        (dtmlXMLLoaderObject.prototype.waitLoadFunction = function (e) {
            var t = !0;
            return (
                (this.check = function () {
                    if (e && e.onloadAction && (!e.xmlDoc.readyState || 4 == e.xmlDoc.readyState)) {
                        if (!t) return;
                        (t = !1), dtmlXMLLoaderObject.count++, "function" == typeof e.onloadAction && e.onloadAction(e.mainObject, null, null, null, e), e.waitCall && (e.waitCall.call(this, e), (e.waitCall = null));
                    }
                }),
                this.check
            );
        }),
        (dtmlXMLLoaderObject.prototype.getXMLTopNode = function (e, t) {
            var i;
            if (this.xmlDoc.responseXML) {
                var a = this.xmlDoc.responseXML.getElementsByTagName(e);
                if (0 === a.length && -1 != e.indexOf(":")) var a = this.xmlDoc.responseXML.getElementsByTagName(e.split(":")[1]);
                i = a[0];
            } else i = this.xmlDoc.documentElement;
            if (i) return (this._retry = !1), i;
            if (!this._retry && _isIE) {
                this._retry = !0;
                var t = this.xmlDoc;
                return this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/, ""), !0), this.getXMLTopNode(e, t);
            }
            return dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]), document.createElement("div");
        }),
        (dtmlXMLLoaderObject.prototype.loadXMLString = function (e, t) {
            if (_isIE) (this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM")), (this.xmlDoc.async = this.async), (this.xmlDoc.onreadystatechange = function () {}), this.xmlDoc.loadXML(e);
            else {
                var i = new DOMParser();
                this.xmlDoc = i.parseFromString(e, "text/xml");
            }
            t || (this.onloadAction && this.onloadAction(this.mainObject, null, null, null, this), this.waitCall && (this.waitCall(), (this.waitCall = null)));
        }),
        (dtmlXMLLoaderObject.prototype.loadXML = function (e, t, i, a) {
            this.rSeed && (e += (-1 != e.indexOf("?") ? "&" : "?") + "a_dhx_rSeed=" + new Date().valueOf()),
                (this.filePath = e),
                !_isIE && window.XMLHttpRequest ? (this.xmlDoc = new XMLHttpRequest()) : (this.xmlDoc = new ActiveXObject("Microsoft.XMLHTTP")),
                this.async && (this.xmlDoc.onreadystatechange = new this.waitLoadFunction(this)),
                "string" == typeof t ? this.xmlDoc.open(t, e, this.async) : this.xmlDoc.open(t ? "POST" : "GET", e, this.async),
                a
                    ? (this.xmlDoc.setRequestHeader("User-Agent", "dhtmlxRPC v0.1 (" + navigator.userAgent + ")"), this.xmlDoc.setRequestHeader("Content-type", "text/xml"))
                    : t && this.xmlDoc.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                this.xmlDoc.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                this.xmlDoc.send(i),
                this.async || new this.waitLoadFunction(this)();
        }),
        (dtmlXMLLoaderObject.prototype.destructor = function () {
            return (
                (this._filterXPath = null),
                (this._getAllNamedChilds = null),
                (this._retry = null),
                (this.async = null),
                (this.rSeed = null),
                (this.filePath = null),
                (this.onloadAction = null),
                (this.mainObject = null),
                (this.xmlDoc = null),
                (this.doXPath = null),
                (this.doXPathOpera = null),
                (this.doXSLTransToObject = null),
                (this.doXSLTransToString = null),
                (this.loadXML = null),
                (this.loadXMLString = null),
                (this.doSerialization = null),
                (this.xmlNodeToJSON = null),
                (this.getXMLTopNode = null),
                (this.setXSLParamValue = null),
                null
            );
        }),
        (dtmlXMLLoaderObject.prototype.xmlNodeToJSON = function (e) {
            for (var t = {}, i = 0; i < e.attributes.length; i++) t[e.attributes[i].name] = e.attributes[i].value;
            t._tagvalue = e.firstChild ? e.firstChild.nodeValue : "";
            for (var i = 0; i < e.childNodes.length; i++) {
                var a = e.childNodes[i].tagName;
                a && (t[a] || (t[a] = []), t[a].push(this.xmlNodeToJSON(e.childNodes[i])));
            }
            return t;
        }),
        (window.dhtmlDragAndDropObject = dhtmlDragAndDropObject),
        (dhtmlDragAndDropObject.prototype.removeDraggableItem = function (e) {
            (e.onmousedown = null), (e.dragStarter = null), (e.dragLanding = null);
        }),
        (dhtmlDragAndDropObject.prototype.addDraggableItem = function (e, t) {
            (e.onmousedown = this.preCreateDragCopy), (e.dragStarter = t), this.addDragLanding(e, t);
        }),
        (dhtmlDragAndDropObject.prototype.addDragLanding = function (e, t) {
            e.dragLanding = t;
        }),
        (dhtmlDragAndDropObject.prototype.preCreateDragCopy = function (e) {
            if ((!e && !window.event) || 2 != (e || event).button)
                return window.dhtmlDragAndDrop.waitDrag
                    ? ((window.dhtmlDragAndDrop.waitDrag = 0), (document.body.onmouseup = window.dhtmlDragAndDrop.tempDOMU), (document.body.onmousemove = window.dhtmlDragAndDrop.tempDOMM), !1)
                    : (window.dhtmlDragAndDrop.dragNode && window.dhtmlDragAndDrop.stopDrag(e),
                      (window.dhtmlDragAndDrop.waitDrag = 1),
                      (window.dhtmlDragAndDrop.tempDOMU = document.body.onmouseup),
                      (window.dhtmlDragAndDrop.tempDOMM = document.body.onmousemove),
                      (window.dhtmlDragAndDrop.dragStartNode = this),
                      (window.dhtmlDragAndDrop.dragStartObject = this.dragStarter),
                      (document.body.onmouseup = window.dhtmlDragAndDrop.preCreateDragCopy),
                      (document.body.onmousemove = window.dhtmlDragAndDrop.callDrag),
                      (window.dhtmlDragAndDrop.downtime = new Date().valueOf()),
                      !(!e || !e.preventDefault) && (e.preventDefault(), !1));
        }),
        (dhtmlDragAndDropObject.prototype.callDrag = function (e) {
            e || (e = window.event);
            var t = window.dhtmlDragAndDrop;
            if (!(new Date().valueOf() - t.downtime < 100)) {
                if (!t.dragNode) {
                    if (!t.waitDrag) return t.stopDrag(e, !0);
                    if (((t.dragNode = t.dragStartObject._createDragNode(t.dragStartNode, e)), !t.dragNode)) return t.stopDrag();
                    (t.dragNode.onselectstart = function () {
                        return !1;
                    }),
                        (t.gldragNode = t.dragNode),
                        document.body.appendChild(t.dragNode),
                        (document.body.onmouseup = t.stopDrag),
                        (t.waitDrag = 0),
                        (t.dragNode.pWindow = window),
                        t.initFrameRoute();
                }
                if (t.dragNode.parentNode != window.document.body && t.gldragNode) {
                    var i = t.gldragNode;
                    t.gldragNode.old && (i = t.gldragNode.old), i.parentNode.removeChild(i);
                    var a = t.dragNode.pWindow;
                    if ((i.pWindow && i.pWindow.dhtmlDragAndDrop.lastLanding && i.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(i.pWindow.dhtmlDragAndDrop.lastLanding), _isIE)) {
                        var n = document.createElement("div");
                        (n.innerHTML = t.dragNode.outerHTML), (t.dragNode = n.childNodes[0]);
                    } else t.dragNode = t.dragNode.cloneNode(!0);
                    (t.dragNode.pWindow = window), (t.gldragNode.old = t.dragNode), document.body.appendChild(t.dragNode), (a.dhtmlDragAndDrop.dragNode = t.dragNode);
                }
                (t.dragNode.style.left = e.clientX + 15 + (t.fx ? -1 * t.fx : 0) + (document.body.scrollLeft || document.documentElement.scrollLeft) + "px"),
                    (t.dragNode.style.top = e.clientY + 3 + (t.fy ? -1 * t.fy : 0) + (document.body.scrollTop || document.documentElement.scrollTop) + "px");
                var r;
                (r = e.srcElement ? e.srcElement : e.target), t.checkLanding(r, e);
            }
        }),
        (dhtmlDragAndDropObject.prototype.calculateFramePosition = function (e) {
            if (window.name) {
                for (var t = parent.frames[window.name].frameElement.offsetParent, i = 0, a = 0; t; ) (i += t.offsetLeft), (a += t.offsetTop), (t = t.offsetParent);
                if (parent.dhtmlDragAndDrop) {
                    var n = parent.dhtmlDragAndDrop.calculateFramePosition(1);
                    (i += 1 * n.split("_")[0]), (a += 1 * n.split("_")[1]);
                }
                if (e) return i + "_" + a;
                (this.fx = i), (this.fy = a);
            }
            return "0_0";
        }),
        (dhtmlDragAndDropObject.prototype.checkLanding = function (e, t) {
            e && e.dragLanding
                ? (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding),
                  (this.lastLanding = e),
                  (this.lastLanding = this.lastLanding.dragLanding._dragIn(this.lastLanding, this.dragStartNode, t.clientX, t.clientY, t)),
                  (this.lastLanding_scr = _isIE ? t.srcElement : t.target))
                : e && "BODY" != e.tagName
                ? this.checkLanding(e.parentNode, t)
                : (this.lastLanding && this.lastLanding.dragLanding._dragOut(this.lastLanding, t.clientX, t.clientY, t), (this.lastLanding = 0), this._onNotFound && this._onNotFound());
        }),
        (dhtmlDragAndDropObject.prototype.stopDrag = function (e, t) {
            var i = window.dhtmlDragAndDrop;
            if (!t) {
                i.stopFrameRoute();
                var a = i.lastLanding;
                (i.lastLanding = null), a && a.dragLanding._drag(i.dragStartNode, i.dragStartObject, a, _isIE ? event.srcElement : e.target);
            }
            (i.lastLanding = null),
                i.dragNode && i.dragNode.parentNode == document.body && i.dragNode.parentNode.removeChild(i.dragNode),
                (i.dragNode = 0),
                (i.gldragNode = 0),
                (i.fx = 0),
                (i.fy = 0),
                (i.dragStartNode = 0),
                (i.dragStartObject = 0),
                (document.body.onmouseup = i.tempDOMU),
                (document.body.onmousemove = i.tempDOMM),
                (i.tempDOMU = null),
                (i.tempDOMM = null),
                (i.waitDrag = 0);
        }),
        (dhtmlDragAndDropObject.prototype.stopFrameRoute = function (e) {
            e && window.dhtmlDragAndDrop.stopDrag(1, 1);
            for (var t = 0; t < window.frames.length; t++)
                try {
                    window.frames[t] != e && window.frames[t].dhtmlDragAndDrop && window.frames[t].dhtmlDragAndDrop.stopFrameRoute(window);
                } catch (e) {}
            try {
                parent.dhtmlDragAndDrop && parent != window && parent != e && parent.dhtmlDragAndDrop.stopFrameRoute(window);
            } catch (e) {}
        }),
        (dhtmlDragAndDropObject.prototype.initFrameRoute = function (e, t) {
            e &&
                (window.dhtmlDragAndDrop.preCreateDragCopy(),
                (window.dhtmlDragAndDrop.dragStartNode = e.dhtmlDragAndDrop.dragStartNode),
                (window.dhtmlDragAndDrop.dragStartObject = e.dhtmlDragAndDrop.dragStartObject),
                (window.dhtmlDragAndDrop.dragNode = e.dhtmlDragAndDrop.dragNode),
                (window.dhtmlDragAndDrop.gldragNode = e.dhtmlDragAndDrop.dragNode),
                (window.document.body.onmouseup = window.dhtmlDragAndDrop.stopDrag),
                (window.waitDrag = 0),
                !_isIE && t && (!_isFF || _FFrv < 1.8) && window.dhtmlDragAndDrop.calculateFramePosition());
            try {
                parent.dhtmlDragAndDrop && parent != window && parent != e && parent.dhtmlDragAndDrop.initFrameRoute(window);
            } catch (e) {}
            for (var i = 0; i < window.frames.length; i++)
                try {
                    window.frames[i] != e && window.frames[i].dhtmlDragAndDrop && window.frames[i].dhtmlDragAndDrop.initFrameRoute(window, !e || t ? 1 : 0);
                } catch (e) {}
        });
    var _isFF = !1,
        _isIE = !1,
        _isOpera = !1,
        _isKHTML = !1,
        _isMacOS = !1,
        _isChrome = !1,
        _FFrv = !1,
        _KHTMLrv = !1,
        _OperaRv = !1;
    -1 != navigator.userAgent.indexOf("Macintosh") && (_isMacOS = !0),
        navigator.userAgent.toLowerCase().indexOf("chrome") > -1 && (_isChrome = !0),
        -1 != navigator.userAgent.indexOf("Safari") || -1 != navigator.userAgent.indexOf("Konqueror")
            ? ((_KHTMLrv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari") + 7, 5))), _KHTMLrv > 525 ? ((_isFF = !0), (_FFrv = 1.9)) : (_isKHTML = !0))
            : -1 != navigator.userAgent.indexOf("Opera")
            ? ((_isOpera = !0), (_OperaRv = parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera") + 6, 3))))
            : -1 != navigator.appName.indexOf("Microsoft")
            ? ((_isIE = !0), (-1 == navigator.appVersion.indexOf("MSIE 8.0") && -1 == navigator.appVersion.indexOf("MSIE 9.0") && -1 == navigator.appVersion.indexOf("MSIE 10.0")) || "BackCompat" == document.compatMode || (_isIE = 8))
            : "Netscape" == navigator.appName && -1 != navigator.userAgent.indexOf("Trident")
            ? (_isIE = 8)
            : ((_isFF = !0), (_FFrv = parseFloat(navigator.userAgent.split("rv:")[1]))),
        (dtmlXMLLoaderObject.prototype.doXPath = function (e, t, i, a) {
            if (_isKHTML || (!_isIE && !window.XPathResult)) return this.doXPathOpera(e, t);
            if (_isIE)
                return (
                    t || (t = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML),
                    t || dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]),
                    i && t.setProperty("SelectionNamespaces", "xmlns:xsl='" + i + "'"),
                    "single" == a ? t.selectSingleNode(e) : t.selectNodes(e) || new Array(0)
                );
            var n = t;
            t || (t = this.xmlDoc.nodeName ? this.xmlDoc : this.xmlDoc.responseXML),
                t || dhtmlxError.throwError("LoadXML", "Incorrect XML", [t || this.xmlDoc, this.mainObject]),
                -1 != t.nodeName.indexOf("document") ? (n = t) : ((n = t), (t = t.ownerDocument));
            var r = XPathResult.ANY_TYPE;
            "single" == a && (r = XPathResult.FIRST_ORDERED_NODE_TYPE);
            var s = [],
                o = t.evaluate(
                    e,
                    n,
                    function (e) {
                        return i;
                    },
                    r,
                    null
                );
            if (r == XPathResult.FIRST_ORDERED_NODE_TYPE) return o.singleNodeValue;
            for (var d = o.iterateNext(); d; ) (s[s.length] = d), (d = o.iterateNext());
            return s;
        }),
        (_dhtmlxError.prototype.catchError = function (e, t) {
            this.catches[e] = t;
        }),
        (_dhtmlxError.prototype.throwError = function (e, t, i) {
            return this.catches[e] ? this.catches[e](e, t, i) : this.catches.ALL ? this.catches.ALL(e, t, i) : (window.alert("Error type: " + arguments[0] + "\nDescription: " + arguments[1]), null);
        }),
        (window.dhtmlxError = new _dhtmlxError()),
        (dtmlXMLLoaderObject.prototype.doXPathOpera = function (e, t) {
            var i = e.replace(/[\/]+/gi, "/").split("/"),
                a = null,
                n = 1;
            if (!i.length) return [];
            if ("." == i[0]) a = [t];
            else {
                if ("" !== i[0]) return [];
                (a = (this.xmlDoc.responseXML || this.xmlDoc).getElementsByTagName(i[n].replace(/\[[^\]]*\]/g, ""))), n++;
            }
            for (n; n < i.length; n++) a = this._getAllNamedChilds(a, i[n]);
            return -1 != i[n - 1].indexOf("[") && (a = this._filterXPath(a, i[n - 1])), a;
        }),
        (dtmlXMLLoaderObject.prototype._filterXPath = function (e, t) {
            for (var i = [], t = t.replace(/[^\[]*\[\@/g, "").replace(/[\[\]\@]*/g, ""), a = 0; a < e.length; a++) e[a].getAttribute(t) && (i[i.length] = e[a]);
            return i;
        }),
        (dtmlXMLLoaderObject.prototype._getAllNamedChilds = function (e, t) {
            var i = [];
            _isKHTML && (t = t.toUpperCase());
            for (var a = 0; a < e.length; a++)
                for (var n = 0; n < e[a].childNodes.length; n++)
                    _isKHTML ? e[a].childNodes[n].tagName && e[a].childNodes[n].tagName.toUpperCase() == t && (i[i.length] = e[a].childNodes[n]) : e[a].childNodes[n].tagName == t && (i[i.length] = e[a].childNodes[n]);
            return i;
        }),
        void 0 === window.dhtmlxEvent &&
            (window.dhtmlxEvent = function (e, t, i) {
                e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i);
            }),
        (dtmlXMLLoaderObject.prototype.xslDoc = null),
        (dtmlXMLLoaderObject.prototype.setXSLParamValue = function (e, t, i) {
            i || (i = this.xslDoc), i.responseXML && (i = i.responseXML);
            var a = this.doXPath("/xsl:stylesheet/xsl:variable[@name='" + e + "']", i, "http://www.w3.org/1999/XSL/Transform", "single");
            a && (a.firstChild.nodeValue = t);
        }),
        (dtmlXMLLoaderObject.prototype.doXSLTransToObject = function (e, t) {
            e || (e = this.xslDoc), e.responseXML && (e = e.responseXML), t || (t = this.xmlDoc), t.responseXML && (t = t.responseXML);
            var i;
            if (_isIE) {
                i = new ActiveXObject("Msxml2.DOMDocument.3.0");
                try {
                    t.transformNodeToObject(e, i);
                } catch (a) {
                    i = t.transformNode(e);
                }
            } else this.XSLProcessor || ((this.XSLProcessor = new XSLTProcessor()), this.XSLProcessor.importStylesheet(e)), (i = this.XSLProcessor.transformToDocument(t));
            return i;
        }),
        (dtmlXMLLoaderObject.prototype.doXSLTransToString = function (e, t) {
            var i = this.doXSLTransToObject(e, t);
            return "string" == typeof i ? i : this.doSerialization(i);
        }),
        (dtmlXMLLoaderObject.prototype.doSerialization = function (e) {
            return e || (e = this.xmlDoc), e.responseXML && (e = e.responseXML), _isIE ? e.xml : new XMLSerializer().serializeToString(e);
        }),
        (window.dhtmlxEventable = function (obj) {
            (obj.attachEvent = function (e, t, i) {
                return (e = "ev_" + e.toLowerCase()), this[e] || (this[e] = new this.eventCatcher(i || this)), e + ":" + this[e].addEvent(t);
            }),
                (obj.callEvent = function (e, t) {
                    return (e = "ev_" + e.toLowerCase()), !this[e] || this[e].apply(this, t);
                }),
                (obj.checkEvent = function (e) {
                    return !!this["ev_" + e.toLowerCase()];
                }),
                (obj.eventCatcher = function (obj) {
                    var dhx_catch = [],
                        z = function () {
                            for (var e = !0, t = 0; t < dhx_catch.length; t++)
                                if (dhx_catch[t]) {
                                    var i = dhx_catch[t].apply(obj, arguments);
                                    e = e && i;
                                }
                            return e;
                        };
                    return (
                        (z.addEvent = function (ev) {
                            return "function" != typeof ev && (ev = eval(ev)), !!ev && dhx_catch.push(ev) - 1;
                        }),
                        (z.removeEvent = function (e) {
                            dhx_catch[e] = null;
                        }),
                        z
                    );
                }),
                (obj.detachEvent = function (e) {
                    if (e) {
                        var t = e.split(":");
                        this[t[0]].removeEvent(t[1]);
                    }
                }),
                (obj.detachAllEvents = function () {
                    for (var e in this) 0 === e.indexOf("ev_") && (this.detachEvent(e), (this[e] = null));
                }),
                (obj = null);
        }),
        window.dhtmlx || (window.dhtmlx = {}),
        (function () {
            function e(e, t) {
                setTimeout(function () {
                    if (e.box) {
                        var a = e.callback;
                        i(!1), e.box.parentNode.removeChild(e.box), dhtmlx.callEvent("onAfterMessagePopup", [e.box]), (c = e.box = null), a && a(t);
                    }
                }, 1);
            }
            function t(t) {
                if (c) {
                    t = t || event;
                    var i = t.which || event.keyCode,
                        a = !1;
                    if (dhtmlx.message.keyboard) {
                        if (13 == i || 32 == i) {
                            var n = t.target || t.srcElement;
                            scheduler._getClassName(n).indexOf("dhtmlx_popup_button") > -1 && n.click ? n.click() : (e(c, !0), (a = !0));
                        }
                        27 == i && (e(c, !1), (a = !0));
                    }
                    if (a) return t.preventDefault && t.preventDefault(), !(t.cancelBubble = !0);
                } else;
            }
            function i(e) {
                i.cover || ((i.cover = document.createElement("div")), (i.cover.onkeydown = t), (i.cover.className = "dhx_modal_cover"), document.body.appendChild(i.cover));
                document.body.scrollHeight;
                i.cover.style.display = e ? "inline-block" : "none";
            }
            function a(e, t, i) {
                return "<div " + scheduler._waiAria.messageButtonAttrString(e) + "class='dhtmlx_popup_button dhtmlx_" + (i || e || "").toLowerCase().replace(/ /g, "_") + "_button' result='" + t + "' ><div>" + e + "</div></div>";
            }
            // function n(e) {
            //     u.area || ((u.area = document.createElement("div")), (u.area.className = "dhtmlx_message_area"), (u.area.style[u.position] = "5px"), document.body.appendChild(u.area)), u.hide(e.id);
            //     var t = document.createElement("div");
            //     return (
            //         (t.innerHTML = "<div>" + e.text + "</div>"),
            //         (t.className = "dhtmlx-info dhtmlx-" + e.type),
            //         (t.onclick = function () {
            //             u.hide(e.id), (e = null);
            //         }),
            //         scheduler._waiAria.messageInfoAttr(t),
            //         "bottom" == u.position && u.area.firstChild ? u.area.insertBefore(t, u.area.firstChild) : u.area.appendChild(t),
            //         e.expire > 0 &&
            //             (u.timers[e.id] = window.setTimeout(function () {
            //                 u.hide(e.id);
            //             }, e.expire)),
            //         (u.pull[e.id] = t),
            //         (t = null),
            //         e.id
            //     );
            // }
            function r(t, i, n) {
                var r = document.createElement("div");
                (r.className = " dhtmlx_modal_box dhtmlx-" + t.type), r.setAttribute("dhxbox", 1);
                var s = scheduler.uid();
                scheduler._waiAria.messageModalAttr(r, s);
                var o = "",
                    d = !1;
                if (
                    (t.width && (r.style.width = t.width),
                    t.height && (r.style.height = t.height),
                    t.title && ((o += '<div class="dhtmlx_popup_title" id="' + s + '">' + t.title + "</div>"), (d = !0)),
                    (o += '<div class="dhtmlx_popup_text" ' + (d ? "" : ' id="' + s + '" ') + "><span>" + (t.content ? "" : t.text) + '</span></div><div  class="dhtmlx_popup_controls">'),
                    i)
                ) {
                    var l = t.ok || scheduler.locale.labels.message_ok;
                    void 0 === l && (l = "OK"), (o += a(l, !0, "ok"));
                }
                if (n) {
                    var _ = t.cancel || scheduler.locale.labels.message_cancel;
                    void 0 === _ && (_ = "Cancel"), (o += a(_, !1, "cancel"));
                }
                if (t.buttons) for (var h = 0; h < t.buttons.length; h++) o += a(t.buttons[h], h);
                if (((o += "</div>"), (r.innerHTML = o), t.content)) {
                    var u = t.content;
                    "string" == typeof u && (u = document.getElementById(u)), "none" == u.style.display && (u.style.display = ""), r.childNodes[t.title ? 1 : 0].appendChild(u);
                }
                return (
                    (r.onclick = function (i) {
                        i = i || event;
                        var a = i.target || i.srcElement,
                            n = scheduler._getClassName(a);
                        if ((n || (a = a.parentNode), (n = scheduler._getClassName(a)), "dhtmlx_popup_button" == n.split(" ")[0])) {
                            var r = a.getAttribute("result");
                            (r = "true" == r || ("false" != r && r)), e(t, r);
                        }
                    }),
                    (t.box = r),
                    (c = t),
                    r
                );
            }
            function s(e, a, n) {
                var s = e.tagName ? e : r(e, a, n);
                e.hidden || i(!0), document.body.appendChild(s);
                var o = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - s.offsetWidth) / 2)),
                    d = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - s.offsetHeight) / 2));
                return (
                    "top" == e.position ? (s.style.top = "-3px") : (s.style.top = d + "px"),
                    (s.style.left = o + "px"),
                    (s.onkeydown = t),
                    dhtmlx.modalbox.focus(s),
                    e.hidden && dhtmlx.modalbox.hide(s),
                    dhtmlx.callEvent("onMessagePopup", [s]),
                    s
                );
            }
            function o(e) {
                return s(e, !0, !1);
            }
            function d(e) {
                return s(e, !0, !0);
            }
            function l(e) {
                return s(e);
            }
            function _(e, t, i) {
                return "object" != typeof e && ("function" == typeof t && ((i = t), (t = "")), (e = { text: e, type: t, callback: i })), e;
            }
            function h(e, t, i, a) {
                return "object" != typeof e && (e = { text: e, type: t, expire: i, id: a }), (e.id = e.id || u.uid()), (e.expire = e.expire || u.expire), e;
            }
            var c = null;
            document.attachEvent ? document.attachEvent("onkeydown", t) : document.addEventListener("keydown", t, !0),
                (dhtmlx.alert = function () {
                    var e = _.apply(this, arguments);
                    return (e.type = e.type || "confirm"), o(e);
                }),
                (dhtmlx.confirm = function () {
                    var e = _.apply(this, arguments);
                    return (e.type = e.type || "alert"), d(e);
                }),
                (dhtmlx.modalbox = function () {
                    var e = _.apply(this, arguments);
                    return (e.type = e.type || "alert"), l(e);
                }),
                (dhtmlx.modalbox.hide = function (e) {
                    for (; e && e.getAttribute && !e.getAttribute("dhxbox"); ) e = e.parentNode;
                    e && (e.parentNode.removeChild(e), i(!1));
                }),
                (dhtmlx.modalbox.focus = function (e) {
                    setTimeout(function () {
                        var t = scheduler._getFocusableNodes(e);
                        t.length && t[0].focus && t[0].focus();
                    }, 1);
                });
            var u = (dhtmlx.message = function (e, t, i, a) {
                switch (((e = h.apply(this, arguments)), (e.type = e.type || "info"), e.type.split("-")[0])) {
                    case "alert":
                        return o(e);
                    case "confirm":
                        return d(e);
                    case "modalbox":
                        return l(e);
                    default:
                        return n(e);
                }
            });
            (u.seed = new Date().valueOf()),
                (u.uid = function () {
                    return u.seed++;
                }),
                (u.expire = 4e3),
                (u.keyboard = !0),
                (u.position = "top"),
                (u.pull = {}),
                (u.timers = {}),
                (u.hideAll = function () {
                    for (var e in u.pull) u.hide(e);
                }),
                (u.hide = function (e) {
                    var t = u.pull[e];
                    t &&
                        t.parentNode &&
                        (window.setTimeout(function () {
                            t.parentNode.removeChild(t), (t = null);
                        }, 2e3),
                        (t.className += " hidden"),
                        u.timers[e] && window.clearTimeout(u.timers[e]),
                        delete u.pull[e]);
                });
        })(),
        dhtmlx.attachEvent || dhtmlxEventable(dhtmlx);
    var dataProcessor = (window.dataProcessor = function (e) {
        return (
            (this.serverProcessor = e),
            (this.action_param = "!nativeeditor_status"),
            (this.object = null),
            (this.updatedRows = []),
            (this.autoUpdate = !0),
            (this.updateMode = "cell"),
            (this._tMode = "GET"),
            (this._headers = null),
            (this._payload = null),
            (this.post_delim = "_"),
            (this._waitMode = 0),
            (this._in_progress = {}),
            (this._invalid = {}),
            (this.mandatoryFields = []),
            (this.messages = []),
            (this.styles = {
                updated: "font-weight:bold;",
                inserted: "font-weight:bold;",
                deleted: "text-decoration : line-through;",
                invalid: "background-color:FFE0E0;",
                invalid_cell: "border-bottom:2px solid red;",
                error: "color:red;",
                clear: "font-weight:normal;text-decoration:none;",
            }),
            this.enableUTFencoding(!0),
            dhtmlxEventable(this),
            this
        );
    });
    (dataProcessor.prototype = {
        setTransactionMode: function (e, t) {
            "object" == typeof e ? ((this._tMode = e.mode || this._tMode), void 0 !== e.headers && (this._headers = e.headers), void 0 !== e.payload && (this._payload = e.payload)) : ((this._tMode = e), (this._tSend = t)),
                "REST" == this._tMode && ((this._tSend = !1), (this._endnm = !0)),
                "JSON" == this._tMode && ((this._tSend = !1), (this._endnm = !0), (this._headers = this._headers || {}), (this._headers["Content-type"] = "application/json"));
        },
        escape: function (e) {
            return this._utf ? encodeURIComponent(e) : escape(e);
        },
        enableUTFencoding: function (e) {
            this._utf = !!e;
        },
        setDataColumns: function (e) {
            this._columns = "string" == typeof e ? e.split(",") : e;
        },
        getSyncState: function () {
            return !this.updatedRows.length;
        },
        enableDataNames: function (e) {
            this._endnm = !!e;
        },
        enablePartialDataSend: function (e) {
            this._changed = !!e;
        },
        setUpdateMode: function (e, t) {
            (this.autoUpdate = "cell" == e), (this.updateMode = e), (this.dnd = t);
        },
        ignore: function (e, t) {
            (this._silent_mode = !0), e.call(t || window), (this._silent_mode = !1);
        },
        setUpdated: function (e, t, i) {
            if (!this._silent_mode) {
                var a = this.findRow(e);
                i = i || "updated";
                var n = this.obj.getUserData(e, this.action_param);
                n && "updated" == i && (i = n),
                    t
                        ? (this.set_invalid(e, !1), (this.updatedRows[a] = e), this.obj.setUserData(e, this.action_param, i), this._in_progress[e] && (this._in_progress[e] = "wait"))
                        : this.is_invalid(e) || (this.updatedRows.splice(a, 1), this.obj.setUserData(e, this.action_param, "")),
                    t || this._clearUpdateFlag(e),
                    this.markRow(e, t, i),
                    t && this.autoUpdate && this.sendData(e);
            }
        },
        _clearUpdateFlag: function (e) {},
        markRow: function (e, t, i) {
            var a = "",
                n = this.is_invalid(e);
            if ((n && ((a = this.styles[n]), (t = !0)), this.callEvent("onRowMark", [e, t, i, n]) && ((a = this.styles[t ? i : "clear"] + a), this.obj[this._methods[0]](e, a), n && n.details))) {
                a += this.styles[n + "_cell"];
                for (var r = 0; r < n.details.length; r++) n.details[r] && this.obj[this._methods[1]](e, r, a);
            }
        },
        getState: function (e) {
            return this.obj.getUserData(e, this.action_param);
        },
        is_invalid: function (e) {
            return this._invalid[e];
        },
        set_invalid: function (e, t, i) {
            i &&
                (t = {
                    value: t,
                    details: i,
                    toString: function () {
                        return this.value.toString();
                    },
                }),
                (this._invalid[e] = t);
        },
        checkBeforeUpdate: function (e) {
            return !0;
        },
        sendData: function (e) {
            if (!this._waitMode || ("tree" != this.obj.mytype && !this.obj._h2)) {
                if ((this.obj.editStop && this.obj.editStop(), void 0 === e || this._tSend)) return this.sendAllData();
                if (this._in_progress[e]) return !1;
                if (((this.messages = []), !this.checkBeforeUpdate(e) && this.callEvent("onValidationError", [e, this.messages]))) return !1;
                this._beforeSendData(this._getRowData(e), e);
            }
        },
        _beforeSendData: function (e, t) {
            if (!this.callEvent("onBeforeUpdate", [t, this.getState(t), e])) return !1;
            this._sendData(e, t);
        },
        serialize: function (e, t) {
            if ("string" == typeof e) return e;
            if (void 0 !== t) return this.serialize_one(e, "");
            var i = [],
                a = [];
            for (var n in e) e.hasOwnProperty(n) && (i.push(this.serialize_one(e[n], n + this.post_delim)), a.push(n));
            return i.push("ids=" + this.escape(a.join(","))), (scheduler.security_key || dhtmlx.security_key) && i.push("dhx_security=" + (scheduler.security_key || dhtmlx.security_key)), i.join("&");
        },
        serialize_one: function (e, t) {
            if ("string" == typeof e) return e;
            var i = [];
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    if (("id" == a || a == this.action_param) && "REST" == this._tMode) continue;
                    i.push(this.escape((t || "") + a) + "=" + this.escape(e[a]));
                }
            return i.join("&");
        },
        _applyPayload: function (e) {
            var t = this.obj.$ajax;
            if (this._payload) for (var i in this._payload) e = e + t.urlSeparator(e) + this.escape(i) + "=" + this.escape(this._payload[i]);
            return e;
        },
        _sendData: function (e, t) {
            if (e) {
                if (!this.callEvent("onBeforeDataSending", t ? [t, this.getState(t), e] : [null, null, e])) return !1;
                t && (this._in_progress[t] = new Date().valueOf());
                var i = this,
                    a = function (a) {
                        var n = [];
                        if (t) n.push(t);
                        else if (e) for (var r in e) n.push(r);
                        return i.afterUpdate(i, a, n);
                    },
                    n = this.obj.$ajax,
                    r = this.serverProcessor + (this._user ? n.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.obj.getUserData(0, "version")].join("&") : ""),
                    s = this._applyPayload(r);
                if ("GET" == this._tMode) n.query({ url: s + n.urlSeparator(s) + this.serialize(e, t), method: "GET", callback: a, headers: this._headers });
                else if ("POST" == this._tMode) n.query({ url: s, method: "POST", headers: this._headers, data: this.serialize(e, t), callback: a });
                else if ("JSON" == this._tMode) {
                    var o = e[this.action_param],
                        d = {};
                    for (var l in e) d[l] = e[l];
                    delete d[this.action_param], delete d.id, delete d.gr_id, n.query({ url: s, method: "POST", headers: this._headers, callback: a, data: JSON.stringify({ id: t, action: o, data: d }) });
                } else if ("REST" == this._tMode) {
                    var _ = this.getState(t),
                        h = r.replace(/(\&|\?)editing\=true/, ""),
                        d = "",
                        c = "post";
                    "inserted" == _ ? (d = this.serialize(e, t)) : "deleted" == _ ? ((c = "DELETE"), (h = h + ("/" == h.slice(-1) ? "" : "/") + t)) : ((c = "PUT"), (d = this.serialize(e, t)), (h = h + ("/" == h.slice(-1) ? "" : "/") + t)),
                        (h = this._applyPayload(h)),
                        n.query({ url: h, method: c, headers: this._headers, data: d, callback: a });
                }
                this._waitMode++;
            }
        },
        sendAllData: function () {
            if (this.updatedRows.length) {
                this.messages = [];
                for (var e = !0, t = 0; t < this.updatedRows.length; t++) e &= this.checkBeforeUpdate(this.updatedRows[t]);
                if (!e && !this.callEvent("onValidationError", ["", this.messages])) return !1;
                if (this._tSend) this._sendData(this._getAllData());
                else
                    for (var t = 0; t < this.updatedRows.length; t++)
                        if (!this._in_progress[this.updatedRows[t]]) {
                            if (this.is_invalid(this.updatedRows[t])) continue;
                            if ((this._beforeSendData(this._getRowData(this.updatedRows[t]), this.updatedRows[t]), this._waitMode && ("tree" == this.obj.mytype || this.obj._h2))) return;
                        }
            }
        },
        _getAllData: function (e) {
            for (var t = {}, i = !1, a = 0; a < this.updatedRows.length; a++) {
                var n = this.updatedRows[a];
                if (!this._in_progress[n] && !this.is_invalid(n)) {
                    var r = this._getRowData(n);
                    this.callEvent("onBeforeUpdate", [n, this.getState(n), r]) && ((t[n] = r), (i = !0), (this._in_progress[n] = new Date().valueOf()));
                }
            }
            return i ? t : null;
        },
        setVerificator: function (e, t) {
            this.mandatoryFields[e] =
                t ||
                function (e) {
                    return "" !== e;
                };
        },
        clearVerificator: function (e) {
            this.mandatoryFields[e] = !1;
        },
        findRow: function (e) {
            var t = 0;
            for (t = 0; t < this.updatedRows.length && e != this.updatedRows[t]; t++);
            return t;
        },
        defineAction: function (e, t) {
            this._uActions || (this._uActions = []), (this._uActions[e] = t);
        },
        afterUpdateCallback: function (e, t, i, a) {
            var n = e,
                r = "error" != i && "invalid" != i;
            if ((r || this.set_invalid(e, i), this._uActions && this._uActions[i] && !this._uActions[i](a))) return delete this._in_progress[n];
            "wait" != this._in_progress[n] && this.setUpdated(e, !1);
            var s = e;
            switch (i) {
                case "inserted":
                case "insert":
                    t != e && (this.setUpdated(e, !1), this.obj[this._methods[2]](e, t), (e = t));
                    break;
                case "delete":
                case "deleted":
                    return this.obj.setUserData(e, this.action_param, "true_deleted"), this.obj[this._methods[3]](e, t), delete this._in_progress[n], this.callEvent("onAfterUpdate", [e, i, t, a]);
            }
            "wait" != this._in_progress[n] ? (r && this.obj.setUserData(e, this.action_param, ""), delete this._in_progress[n]) : (delete this._in_progress[n], this.setUpdated(t, !0, this.obj.getUserData(e, this.action_param))),
                this.callEvent("onAfterUpdate", [s, i, t, a]);
        },
        _errorResponse: function (e, t) {
            return this.obj && this.obj.callEvent && this.obj.callEvent("onSaveError", [t, e.xmlDoc]), this.cleanUpdate(t);
        },
        afterUpdate: function (e, t, i) {
            var a = this.obj.$ajax;
            if (200 !== t.xmlDoc.status) return void this._errorResponse(t, i);
            if (window.JSON) {
                var n;
                try {
                    n = JSON.parse(t.xmlDoc.responseText);
                } catch (e) {
                    t.xmlDoc.responseText.length || (n = {});
                }
                if (n) {
                    var r = n.action || this.getState(i) || "updated",
                        s = n.sid || i[0],
                        o = n.tid || i[0];
                    return e.afterUpdateCallback(s, o, r, n), void e.finalizeUpdate();
                }
            }
            var d = a.xmltop("data", t.xmlDoc);
            if (!d) return this._errorResponse(t, i);
            var l = a.xpath("//data/action", d);
            l.length || this._errorResponse(t, i);
            for (var _ = 0; _ < l.length; _++) {
                var h = l[_],
                    r = h.getAttribute("type"),
                    s = h.getAttribute("sid"),
                    o = h.getAttribute("tid");
                e.afterUpdateCallback(s, o, r, h);
            }
            e.finalizeUpdate();
        },
        cleanUpdate: function (e) {
            if (e) for (var t = 0; t < e.length; t++) delete this._in_progress[e[t]];
        },
        finalizeUpdate: function () {
            this._waitMode && this._waitMode--,
                ("tree" == this.obj.mytype || this.obj._h2) && this.updatedRows.length && this.sendData(),
                this.callEvent("onAfterUpdateFinish", []),
                this.updatedRows.length || this.callEvent("onFullSync", []);
        },
        init: function (e) {
            (this.obj = e), this.obj._dp_init && this.obj._dp_init(this);
        },
        setOnAfterUpdate: function (e) {
            this.attachEvent("onAfterUpdate", e);
        },
        enableDebug: function (e) {},
        setOnBeforeUpdateHandler: function (e) {
            this.attachEvent("onBeforeDataSending", e);
        },
        setAutoUpdate: function (e, t) {
            (e = e || 2e3),
                (this._user = t || new Date().valueOf()),
                (this._need_update = !1),
                (this._update_busy = !1),
                this.attachEvent("onAfterUpdate", function (e, t, i, a) {
                    this.afterAutoUpdate(e, t, i, a);
                }),
                this.attachEvent("onFullSync", function () {
                    this.fullSync();
                });
            var i = this;
            window.setInterval(function () {
                i.loadUpdate();
            }, e);
        },
        afterAutoUpdate: function (e, t, i, a) {
            return "collision" != t || ((this._need_update = !0), !1);
        },
        fullSync: function () {
            return this._need_update && ((this._need_update = !1), this.loadUpdate()), !0;
        },
        getUpdates: function (e, t) {
            var i = this.obj.$ajax;
            if (this._update_busy) return !1;
            (this._update_busy = !0), i.get(e, t);
        },
        _v: function (e) {
            return e.firstChild ? e.firstChild.nodeValue : "";
        },
        _a: function (e) {
            for (var t = [], i = 0; i < e.length; i++) t[i] = this._v(e[i]);
            return t;
        },
        loadUpdate: function () {
            var e = this.obj.$ajax,
                t = this,
                i = this.obj.getUserData(0, "version"),
                a = this.serverProcessor + e.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + i].join("&");
            (a = a.replace("editing=true&", "")),
                this.getUpdates(a, function (i) {
                    var a = e.xpath("//userdata", i);
                    t.obj.setUserData(0, "version", t._v(a[0]));
                    var n = e.xpath("//update", i);
                    if (n.length) {
                        t._silent_mode = !0;
                        for (var r = 0; r < n.length; r++) {
                            var s = n[r].getAttribute("status"),
                                o = n[r].getAttribute("id"),
                                d = n[r].getAttribute("parent");
                            switch (s) {
                                case "inserted":
                                    t.callEvent("insertCallback", [n[r], o, d]);
                                    break;
                                case "updated":
                                    t.callEvent("updateCallback", [n[r], o, d]);
                                    break;
                                case "deleted":
                                    t.callEvent("deleteCallback", [n[r], o, d]);
                            }
                        }
                        t._silent_mode = !1;
                    }
                    (t._update_busy = !1), (t = null);
                });
        },
    }),
        window.dataProcessor &&
            !dataProcessor.prototype.init_original &&
            ((dataProcessor.prototype.init_original = dataProcessor.prototype.init),
            (dataProcessor.prototype.init = function (e) {
                this.init_original(e), (e._dataprocessor = this), this.setTransactionMode("POST", !0), (this.serverProcessor += (-1 != this.serverProcessor.indexOf("?") ? "&" : "?") + "editing=true");
            })),
        dhtmlxError.catchError("LoadXML", function (e, t, i) {
            var a = i[0].responseText;
            switch (scheduler.config.ajax_error) {
                case "alert":
                    window.alert(a);
                    break;
                case "console":
                    window.console.log(a);
            }
        });
    var Scheduler = { _seed: 0 };
    (Scheduler.plugin = function (e) {
        this._schedulerPlugins.push(e), e(window.scheduler);
    }),
        (Scheduler._schedulerPlugins = []),
        (Scheduler.getSchedulerInstance = function () {
            var e = { version: "5.2.5" },
                t = {
                    agenda: "https://docs.dhtmlx.com/scheduler/agenda_view.html",
                    grid: "https://docs.dhtmlx.com/scheduler/grid_view.html",
                    map: "https://docs.dhtmlx.com/scheduler/map_view.html",
                    unit: "https://docs.dhtmlx.com/scheduler/units_view.html",
                    timeline: "https://docs.dhtmlx.com/scheduler/timeline_view.html",
                    week_agenda: "https://docs.dhtmlx.com/scheduler/weekagenda_view.html",
                    year: "https://docs.dhtmlx.com/scheduler/year_view.html",
                    anythingElse: "https://docs.dhtmlx.com/scheduler/views.html",
                },
                i = {
                    agenda: "ext/dhtmlxscheduler_agenda_view.js",
                    grid: "ext/dhtmlxscheduler_grid_view.js",
                    map: "ext/dhtmlxscheduler_map_view.js",
                    unit: "ext/dhtmlxscheduler_units.js",
                    timeline: "ext/dhtmlxscheduler_timeline.js, ext/dhtmlxscheduler_treetimeline.js, ext/dhtmlxscheduler_daytimeline.js",
                    week_agenda: "ext/dhtmlxscheduler_week_agenda.js",
                    year: "ext/dhtmlxscheduler_year_view.js",
                    limit: "ext/dhtmlxscheduler_limit.js",
                };
            (e._commonErrorMessages = {
                unknownView: function (e) {
                    var a = "Related docs: " + t[e] || t.anythingElse,
                        n = i[e] ? "You're probably missing " + i[e] + "." : "";
                    return (
                        "`" +
                        e +
                        "` view is not defined. \nPlease check parameters you pass to `scheduler.init` or `scheduler.setCurrentView` in your code and ensure you've imported appropriate extensions. \n" +
                        a +
                        "\n" +
                        (n ? n + "\n" : "")
                    );
                },
                collapsedContainer: function (e) {
                    return "Scheduler container height is set to *100%* but the rendered height is zero and the scheduler is not visible. \nMake sure that the container has some initial height or use different units. For example:\n<div id='scheduler_here' class='dhx_cal_container' style='width:100%; height:600px;'> \n";
                },
            }),
                (e.createTimelineView = function () {
                    throw new Error("scheduler.createTimelineView is not implemented. Be sure to add the required extension: " + i.timeline + "\nRelated docs: " + t.timeline);
                }),
                (e.createUnitsView = function () {
                    throw new Error("scheduler.createUnitsView is not implemented. Be sure to add the required extension: " + i.unit + "\nRelated docs: " + t.unit);
                }),
                (e.createGridView = function () {
                    throw new Error("scheduler.createGridView is not implemented. Be sure to add the required extension: " + i.grid + "\nRelated docs: " + t.grid);
                }),
                (e.addMarkedTimespan = function () {
                    throw new Error("scheduler.addMarkedTimespan is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_limit.js\nRelated docs: https://docs.dhtmlx.com/scheduler/limits.html");
                }),
                (e.renderCalendar = function () {
                    throw new Error("scheduler.renderCalendar is not implemented. Be sure to add the required extension: ext/dhtmlxscheduler_minical.js\nhttps://docs.dhtmlx.com/scheduler/minicalendar.html");
                }),
                dhtmlxEventable(e),
                (e._detachDomEvent = function (e, t, i) {
                    e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent && e.detachEvent("on" + t, i);
                }),
                (e._init_once = function () {
                    function t(e) {
                        for (var t = document.body; e && e != t; ) e = e.parentNode;
                        return !(t != e);
                    }
                    function i() {
                        return { w: window.innerWidth || document.documentElement.clientWidth, h: window.innerHeight || document.documentElement.clientHeight };
                    }
                    function a(e, t) {
                        return e.w == t.w && e.h == t.h;
                    }
                    var n = i();
                    e.event(window, "resize", function () {
                        t(e._obj) &&
                            (window.clearTimeout(e._resize_timer),
                            (e._resize_timer = window.setTimeout(function () {
                                var r = i();
                                if (!a(n, r)) {
                                    if (!t(e._obj)) return;
                                    e.callEvent("onSchedulerResize", []) && (e.updateView(), e.callEvent("onAfterSchedulerResize", []));
                                }
                                n = r;
                            }, 100)));
                    }),
                        (e._init_once = function () {});
                }),
                (e.init = function (t, i, a) {
                    (i = i || e._currentDate()),
                        (a = a || "week"),
                        this._obj && this.unset_actions(),
                        (this._obj = "string" == typeof t ? document.getElementById(t) : t),
                        (this.$container = this._obj),
                        !this.$container.offsetHeight && this.$container.offsetWidth && "100%" === this.$container.style.height && window.console.error(e._commonErrorMessages.collapsedContainer(), this.$container),
                        this.config.wai_aria_attributes && this.config.wai_aria_application_role && this.$container.setAttribute("role", "application"),
                        this._skin_init && e._skin_init(),
                        e.date.init(),
                        (this._els = []),
                        (this._scroll = !0),
                        (this._quirks = this.$env.isIE && "BackCompat" == document.compatMode),
                        (this._quirks7 = this.$env.isIE && -1 == navigator.appVersion.indexOf("MSIE 8")),
                        this.get_elements(),
                        this.init_templates(),
                        this.set_actions(),
                        this._init_once(),
                        this._init_touch_events(),
                        this.set_sizes(),
                        e.callEvent("onSchedulerReady", []),
                        this.setCurrentView(i, a);
                }),
                (e.xy = {
                    min_event_height: 40,
                    scale_width: 50,
                    scroll_width: 18,
                    scale_height: 20,
                    month_scale_height: 20,
                    menu_width: 25,
                    margin_top: 0,
                    margin_left: 0,
                    editor_width: 140,
                    month_head_height: 22,
                    event_header_height: 14,
                }),
                (e.keys = { edit_save: 13, edit_cancel: 27 }),
                (e.bind = function (e, t) {
                    return e.bind
                        ? e.bind(t)
                        : function () {
                              return e.apply(t, arguments);
                          };
                }),
                (e.set_sizes = function () {
                    var t = (this._x = this._obj.clientWidth - this.xy.margin_left),
                        i = (this._y = this._obj.clientHeight - this.xy.margin_top),
                        a = this._table_view ? 0 : this.xy.scale_width + this.xy.scroll_width,
                        n = this._table_view ? -1 : this.xy.scale_width,
                        r = this.$container.querySelector(".dhx_cal_scale_placeholder");
                    e._is_material_skin()
                        ? (r || ((r = document.createElement("div")), (r.className = "dhx_cal_scale_placeholder"), this.$container.insertBefore(r, this._els.dhx_cal_header[0])),
                          (r.style.display = "block"),
                          this.set_xy(r, t, this.xy.scale_height + 1, 0, this.xy.nav_height + (this._quirks ? -1 : 1)))
                        : r && r.parentNode.removeChild(r),
                        this.set_xy(this._els.dhx_cal_navline[0], t, this.xy.nav_height, 0, 0),
                        this.set_xy(this._els.dhx_cal_header[0], t - a, this.xy.scale_height, n, this.xy.nav_height + (this._quirks ? -1 : 1));
                    var s = this._els.dhx_cal_navline[0].offsetHeight;
                    s > 0 && (this.xy.nav_height = s);
                    var o = this.xy.scale_height + this.xy.nav_height + (this._quirks ? -2 : 0);
                    this.set_xy(this._els.dhx_cal_data[0], t, i - (o + 2), 0, o + 2);
                }),
                (e.set_xy = function (e, t, i, a, n) {
                    (e.style.width = Math.max(0, t) + "px"), (e.style.height = Math.max(0, i) + "px"), arguments.length > 3 && ((e.style.left = a + "px"), (e.style.top = n + "px"));
                }),
                (e.get_elements = function () {
                    for (var t = this._obj.getElementsByTagName("DIV"), i = 0; i < t.length; i++) {
                        var a = e._getClassName(t[i]),
                            n = t[i].getAttribute("name") || "";
                        a && (a = a.split(" ")[0]), this._els[a] || (this._els[a] = []), this._els[a].push(t[i]);
                        var r = e.locale.labels[n || a];
                        "string" != typeof r && n && !t[i].innerHTML && (r = n.split("_")[0]), r && (this._waiAria.labelAttr(t[i], r), (t[i].innerHTML = r));
                    }
                }),
                (e.unset_actions = function () {
                    for (var e in this._els) if (this._click[e]) for (var t = 0; t < this._els[e].length; t++) this._els[e][t].onclick = null;
                    (this._obj.onselectstart = null), (this._obj.onmousemove = null), (this._obj.onmousedown = null), (this._obj.onmouseup = null), (this._obj.ondblclick = null), (this._obj.oncontextmenu = null);
                }),
                (e.set_actions = function () {
                    for (var t in this._els) if (this._click[t]) for (var i = 0; i < this._els[t].length; i++) this._els[t][i].onclick = e._click[t];
                    (this._obj.onselectstart = function (e) {
                        return !1;
                    }),
                        (this._obj.onmousemove = function (t) {
                            e._temp_touch_block || e._on_mouse_move(t || event);
                        }),
                        (this._obj.onmousedown = function (t) {
                            e._ignore_next_click || e._on_mouse_down(t || event);
                        }),
                        (this._obj.onmouseup = function (t) {
                            e._ignore_next_click || e._on_mouse_up(t || event);
                        }),
                        (this._obj.ondblclick = function (t) {
                            e._on_dbl_click(t || event);
                        }),
                        (this._obj.oncontextmenu = function (t) {
                            var i = t || event,
                                a = i.target || i.srcElement;
                            return e.callEvent("onContextMenu", [e._locate_event(a), i]);
                        });
                }),
                (e.select = function (t) {
                    this._select_id != t && (e._close_not_saved(), this.editStop(!1), this.unselect(), (this._select_id = t), this.updateEvent(t));
                }),
                (e.unselect = function (e) {
                    if (!e || e == this._select_id) {
                        var t = this._select_id;
                        (this._select_id = null), t && this.getEvent(t) && this.updateEvent(t);
                    }
                }),
                (e.getState = function () {
                    return {
                        mode: this._mode,
                        date: new Date(this._date),
                        min_date: new Date(this._min_date),
                        max_date: new Date(this._max_date),
                        editor_id: this._edit_id,
                        lightbox_id: this._lightbox_id,
                        new_event: this._new_event,
                        select_id: this._select_id,
                        expanded: this.expanded,
                        drag_id: this._drag_id,
                        drag_mode: this._drag_mode,
                    };
                }),
                (e._click = {
                    dhx_cal_data: function (t) {
                        if (e._ignore_next_click) return t.preventDefault && t.preventDefault(), (t.cancelBubble = !0), (e._ignore_next_click = !1), !1;
                        var i = t ? t.target : event.srcElement,
                            a = e._locate_event(i);
                        if (((t = t || event), a)) {
                            if (!e.callEvent("onClick", [a, t]) || e.config.readonly) return;
                        } else e.callEvent("onEmptyClick", [e.getActionData(t).date, t]);
                        if (a && e.config.select) {
                            e.select(a);
                            var n = e._getClassName(i);
                            -1 != n.indexOf("_icon") && e._click.buttons[n.split(" ")[1].replace("icon_", "")](a);
                        } else e._close_not_saved(), new Date().valueOf() - (e._new_event || 0) > 500 && e.unselect();
                    },
                    dhx_cal_prev_button: function () {
                        e._click.dhx_cal_next_button(0, -1);
                    },
                    dhx_cal_next_button: function (t, i) {
                        e.setCurrentView(e.date.add(e.date[e._mode + "_start"](new Date(e._date)), i || 1, e._mode));
                    },
                    dhx_cal_today_button: function () {
                        e.callEvent("onBeforeTodayDisplayed", []) && e.setCurrentView(e._currentDate());
                    },
                    dhx_cal_tab: function () {
                        var t = this.getAttribute("name"),
                            i = t.substring(0, t.search("_tab"));
                        e.setCurrentView(e._date, i);
                    },
                    buttons: {
                        delete: function (t) {
                            var i = e.locale.labels.confirm_deleting;
                            e._dhtmlx_confirm(i, e.locale.labels.title_confirm_deleting, function () {
                                e.deleteEvent(t);
                            });
                        },
                        edit: function (t) {
                            e.edit(t);
                        },
                        save: function (t) {
                            e.editStop(!0);
                        },
                        details: function (t) {
                            e.showLightbox(t);
                        },
                        cancel: function (t) {
                            e.editStop(!1);
                        },
                    },
                }),
                (e._dhtmlx_confirm = function (e, t, i) {
                    if (!e) return i();
                    var a = { text: e };
                    t && (a.title = t),
                        i &&
                            (a.callback = function (e) {
                                e && i();
                            }),
                        dhtmlx.confirm(a);
                }),
                (e.addEventNow = function (t, i, a) {
                    var n = {};
                    e._isObject(t) && !e._isDate(t) && ((n = t), (t = null));
                    var r = 6e4 * (this.config.event_duration || this.config.time_step);
                    t || (t = n.start_date || Math.round(e._currentDate().valueOf() / r) * r);
                    var s = new Date(t);
                    if (!i) {
                        var o = this.config.first_hour;
                        o > s.getHours() && (s.setHours(o), (t = s.valueOf())), (i = t.valueOf() + r);
                    }
                    var d = new Date(i);
                    s.valueOf() == d.valueOf() && d.setTime(d.valueOf() + r),
                        (n.start_date = n.start_date || s),
                        (n.end_date = n.end_date || d),
                        (n.text = n.text || this.locale.labels.new_event),
                        (n.id = this._drag_id = n.id || this.uid()),
                        (this._drag_mode = "new-size"),
                        (this._loading = !0);
                    var l = this.addEvent(n);
                    return this.callEvent("onEventCreated", [this._drag_id, a]), (this._loading = !1), (this._drag_event = {}), this._on_mouse_up(a), l;
                }),
                (e._on_dbl_click = function (t, i) {
                    if (((i = i || t.target || t.srcElement), !this.config.readonly)) {
                        var a = e._getClassName(i).split(" ")[0];
                        switch (a) {
                            case "dhx_scale_holder":
                            case "dhx_scale_holder_now":
                            case "dhx_month_body":
                            case "dhx_wa_day_data":
                                if (!e.config.dblclick_create) break;
                                this.addEventNow(this.getActionData(t).date, null, t);
                                break;
                            case "dhx_cal_event":
                            case "dhx_wa_ev_body":
                            case "dhx_agenda_line":
                            case "dhx_grid_event":
                            case "dhx_cal_event_line":
                            case "dhx_cal_event_clear":
                                var n = this._locate_event(i);
                                if (!this.callEvent("onDblClick", [n, t])) return;
                                this.config.details_on_dblclick || this._table_view || !this.getEvent(n)._timed || !this.config.select ? this.showLightbox(n) : this.edit(n);
                                break;
                            case "dhx_time_block":
                            case "dhx_cal_container":
                                return;
                            default:
                                var r = this["dblclick_" + a];
                                if (r) r.call(this, t);
                                else if (i.parentNode && i != this) return e._on_dbl_click(t, i.parentNode);
                        }
                    }
                }),
                (e._get_column_index = function (e) {
                    var t = 0;
                    if (this._cols) {
                        for (var i = 0, a = 0; i + this._cols[a] < e && a < this._cols.length; ) (i += this._cols[a]), a++;
                        if (((t = a + (this._cols[a] ? (e - i) / this._cols[a] : 0)), this._ignores && t >= this._cols.length)) for (; t >= 1 && this._ignores[Math.floor(t)]; ) t--;
                    }
                    return t;
                }),
                (e._week_indexes_from_pos = function (e) {
                    if (this._cols) {
                        var t = this._get_column_index(e.x);
                        return (
                            (e.x = Math.min(this._cols.length - 1, Math.max(0, Math.ceil(t) - 1))),
                            (e.y = Math.max(0, Math.ceil((60 * e.y) / (this.config.time_step * this.config.hour_size_px)) - 1) + this.config.first_hour * (60 / this.config.time_step)),
                            e
                        );
                    }
                    return e;
                }),
                (e._mouse_coords = function (t) {
                    var i,
                        a = document.body,
                        n = document.documentElement;
                    (i = this.$env.isIE || (!t.pageX && !t.pageY) ? { x: t.clientX + (a.scrollLeft || n.scrollLeft || 0) - a.clientLeft, y: t.clientY + (a.scrollTop || n.scrollTop || 0) - a.clientTop } : { x: t.pageX, y: t.pageY }),
                        (i.x -= this.$domHelpers.getAbsoluteLeft(this._obj) + (this._table_view ? 0 : this.xy.scale_width)),
                        (i.y -= this.$domHelpers.getAbsoluteTop(this._obj) + this.xy.nav_height + (this._dy_shift || 0) + this.xy.scale_height - this._els.dhx_cal_data[0].scrollTop),
                        (i.ev = t);
                    var r = this["mouse_" + this._mode];
                    if (r) i = r.call(this, i);
                    else if (this._table_view) {
                        var s = this._get_column_index(i.x);
                        if (!this._cols || !this._colsS) return i;
                        var o = 0;
                        for (o = 1; o < this._colsS.heights.length && !(this._colsS.heights[o] > i.y); o++);
                        (i.y = Math.ceil((24 * (Math.max(0, s) + 7 * Math.max(0, o - 1)) * 60) / this.config.time_step)),
                            (e._drag_mode || "month" == this._mode) && (i.y = (24 * (Math.max(0, Math.ceil(s) - 1) + 7 * Math.max(0, o - 1)) * 60) / this.config.time_step),
                            "move" == this._drag_mode &&
                                e._ignores_detected &&
                                e.config.preserve_length &&
                                ((i._ignores = !0), this._drag_event._event_length || (this._drag_event._event_length = this._get_real_event_length(this._drag_event.start_date, this._drag_event.end_date, { x_step: 1, x_unit: "day" }))),
                            (i.x = 0);
                    } else i = this._week_indexes_from_pos(i);
                    return (i.timestamp = +new Date()), i;
                }),
                (e._close_not_saved = function () {
                    if (new Date().valueOf() - (e._new_event || 0) > 500 && e._edit_id) {
                        var t = e.locale.labels.confirm_closing;
                        e._dhtmlx_confirm(t, e.locale.labels.title_confirm_closing, function () {
                            e.editStop(e.config.positive_closing);
                        }),
                            t && (this._drag_id = this._drag_pos = this._drag_mode = null);
                    }
                }),
                (e._correct_shift = function (t, i) {
                    return (t -= 6e4 * (new Date(e._min_date).getTimezoneOffset() - new Date(t).getTimezoneOffset()) * (i ? -1 : 1));
                }),
                (e._is_pos_changed = function (e, t) {
                    function i(e, t, i) {
                        return !!(Math.abs(e - t) > i);
                    }
                    if (!e || !this._drag_pos) return !0;
                    var a = 5;
                    return !!(this._drag_pos.has_moved || !this._drag_pos.timestamp || t.timestamp - this._drag_pos.timestamp > 100 || i(e.ev.clientX, t.ev.clientX, a) || i(e.ev.clientY, t.ev.clientY, a));
                }),
                (e._correct_drag_start_date = function (t) {
                    var i;
                    e.matrix && (i = e.matrix[e._mode]), (i = i || { x_step: 1, x_unit: "day" }), (t = new Date(t));
                    var a = 1;
                    return (i._start_correction || i._end_correction) && (a = 60 * (i.last_hour || 0) - (60 * t.getHours() + t.getMinutes()) || 1), 1 * t + (e._get_fictional_event_length(t, a, i) - a);
                }),
                (e._correct_drag_end_date = function (t, i) {
                    var a;
                    e.matrix && (a = e.matrix[e._mode]), (a = a || { x_step: 1, x_unit: "day" });
                    var n = 1 * t + e._get_fictional_event_length(t, i, a);
                    return new Date(1 * n - (e._get_fictional_event_length(n, -1, a, -1) + 1));
                }),
                (e._on_mouse_move = function (t) {
                    if (this._drag_mode) {
                        var i = this._mouse_coords(t);
                        if (this._is_pos_changed(this._drag_pos, i)) {
                            var a, n;
                            if ((this._edit_id != this._drag_id && this._close_not_saved(), !this._drag_mode)) return;
                            var r = null;
                            if ((this._drag_pos && !this._drag_pos.has_moved && ((r = this._drag_pos), (r.has_moved = !0)), (this._drag_pos = i), (this._drag_pos.has_moved = !0), "create" == this._drag_mode)) {
                                if ((r && (i = r), this._close_not_saved(), this.unselect(this._select_id), (this._loading = !0), (a = this._get_date_from_pos(i).valueOf()), !this._drag_start)) {
                                    return this.callEvent("onBeforeEventCreated", [t, this._drag_id]) ? ((this._loading = !1), void (this._drag_start = a)) : void (this._loading = !1);
                                }
                                (n = a), this._drag_start;
                                var s = new Date(this._drag_start),
                                    o = new Date(n);
                                ("day" != this._mode && "week" != this._mode) || s.getHours() != o.getHours() || s.getMinutes() != o.getMinutes() || (o = new Date(this._drag_start + 1e3)),
                                    (this._drag_id = this.uid()),
                                    this.addEvent(s, o, this.locale.labels.new_event, this._drag_id, i.fields),
                                    this.callEvent("onEventCreated", [this._drag_id, t]),
                                    (this._loading = !1),
                                    (this._drag_mode = "new-size");
                            }
                            var d,
                                l = this.getEvent(this._drag_id);
                            if ((e.matrix && (d = e.matrix[e._mode]), (d = d || { x_step: 1, x_unit: "day" }), "move" == this._drag_mode))
                                (a = this._min_date.valueOf() + 6e4 * (i.y * this.config.time_step + 24 * i.x * 60)),
                                    !i.custom && this._table_view && (a += 1e3 * this.date.time_part(l.start_date)),
                                    !this._table_view && this._dragEventBody && void 0 === this._drag_event._move_event_shift && (this._drag_event._move_event_shift = a - l.start_date),
                                    this._drag_event._move_event_shift && (a -= this._drag_event._move_event_shift),
                                    (a = this._correct_shift(a)),
                                    i._ignores && this.config.preserve_length && this._table_view
                                        ? ((a = e._correct_drag_start_date(a)), (n = e._correct_drag_end_date(a, this._drag_event._event_length)))
                                        : (n = l.end_date.valueOf() - (l.start_date.valueOf() - a));
                            else {
                                if (((a = l.start_date.valueOf()), (n = l.end_date.valueOf()), this._table_view)) {
                                    var _ = this._min_date.valueOf() + i.y * this.config.time_step * 6e4 + (i.custom ? 0 : 864e5);
                                    if ("month" == this._mode)
                                        if (((_ = this._correct_shift(_, !1)), this._drag_from_start)) {
                                            var h = 864e5;
                                            _ <= e.date.date_part(new Date(n + h - 1)).valueOf() && (a = _ - h);
                                        } else n = _;
                                    else this.config.preserve_length ? (i.resize_from_start ? (a = e._correct_drag_start_date(_)) : (n = e._correct_drag_end_date(_, 0))) : i.resize_from_start ? (a = _) : (n = _);
                                } else {
                                    var c = this.date.date_part(new Date(l.end_date.valueOf() - 1)).valueOf(),
                                        u = new Date(c);
                                    (n = c + i.y * this.config.time_step * 6e4),
                                        (n += 6e4 * (new Date(n).getTimezoneOffset() - u.getTimezoneOffset())),
                                        (this._els.dhx_cal_data[0].style.cursor = "s-resize"),
                                        ("week" != this._mode && "day" != this._mode) || (n = this._correct_shift(n));
                                }
                                if ("new-size" == this._drag_mode)
                                    if (n <= this._drag_start) {
                                        var g = i.shift || (this._table_view && !i.custom ? 864e5 : 0);
                                        (a = n - (i.shift ? 0 : g)), (n = this._drag_start + (g || 6e4 * this.config.time_step));
                                    } else a = this._drag_start;
                                else n <= a && (n = a + 6e4 * this.config.time_step);
                            }
                            var f = new Date(n - 1),
                                v = new Date(a);
                            if ("move" == this._drag_mode && e.config.limit_drag_out && (+v < +e._min_date || +n > +e._max_date)) {
                                if (+l.start_date < +e._min_date || +l.end_date > +e._max_date) (v = new Date(l.start_date)), (n = new Date(l.end_date));
                                else {
                                    var p = n - v;
                                    +v < +e._min_date
                                        ? ((v = new Date(e._min_date)),
                                          i._ignores && this.config.preserve_length && this._table_view
                                              ? ((v = new Date(e._correct_drag_start_date(v))),
                                                d._start_correction && (v = new Date(v.valueOf() + d._start_correction)),
                                                (n = new Date(1 * v + this._get_fictional_event_length(v, this._drag_event._event_length, d))))
                                              : (n = new Date(+v + p)))
                                        : ((n = new Date(e._max_date)),
                                          i._ignores && this.config.preserve_length && this._table_view
                                              ? (d._end_correction && (n = new Date(n.valueOf() - d._end_correction)),
                                                (n = new Date(1 * n - this._get_fictional_event_length(n, 0, d, !0))),
                                                (v = new Date(1 * n - this._get_fictional_event_length(n, this._drag_event._event_length, d, !0))),
                                                this._ignores_detected && ((v = e.date.add(v, d.x_step, d.x_unit)), (n = new Date(1 * n - this._get_fictional_event_length(n, 0, d, !0))), (n = e.date.add(n, d.x_step, d.x_unit))))
                                              : (v = new Date(+n - p)));
                                }
                                var f = new Date(n - 1);
                            }
                            if (
                                !this._table_view &&
                                this._dragEventBody &&
                                !e.config.all_timed &&
                                ((!e._get_section_view() && i.x != this._get_event_sday({ start_date: new Date(a), end_date: new Date(a) })) || new Date(a).getHours() < this.config.first_hour)
                            ) {
                                var p = n - v;
                                if ("move" == this._drag_mode) {
                                    var h = this._min_date.valueOf() + 24 * i.x * 60 * 6e4;
                                    (v = new Date(h)), v.setHours(this.config.first_hour), (n = new Date(v.valueOf() + p)), (f = new Date(n - 1));
                                }
                            }
                            if (!this._table_view && !e.config.all_timed && ((!e.getView() && i.x != this._get_event_sday({ start_date: new Date(n), end_date: new Date(n) })) || new Date(n).getHours() >= this.config.last_hour)) {
                                var p = n - v,
                                    h = this._min_date.valueOf() + 24 * i.x * 60 * 6e4;
                                (n = e.date.date_part(new Date(h))), n.setHours(this.config.last_hour), (f = new Date(n - 1)), "move" == this._drag_mode && (v = new Date(+n - p));
                            }
                            if (this._table_view || (f.getDate() == v.getDate() && f.getHours() < this.config.last_hour) || e._allow_dnd)
                                if (((l.start_date = v), (l.end_date = new Date(n)), this.config.update_render)) {
                                    var m = e._els.dhx_cal_data[0].scrollTop;
                                    this.update_view(), (e._els.dhx_cal_data[0].scrollTop = m);
                                } else this.updateEvent(this._drag_id);
                            this._table_view &&
                                this.for_rendered(this._drag_id, function (e) {
                                    e.className += " dhx_in_move dhx_cal_event_drag";
                                }),
                                this.callEvent("onEventDrag", [this._drag_id, this._drag_mode, t]);
                        }
                    } else if (e.checkEvent("onMouseMove")) {
                        var x = this._locate_event(t.target || t.srcElement);
                        this.callEvent("onMouseMove", [x, t]);
                    }
                }),
                (e._on_mouse_down = function (t, i) {
                    if (2 != t.button && !this.config.readonly && !this._drag_mode) {
                        i = i || t.target || t.srcElement;
                        var a = e._getClassName(i).split(" ")[0];
                        switch ((this.config.drag_event_body && "dhx_body" == a && i.parentNode && -1 === i.parentNode.className.indexOf("dhx_cal_select_menu") && ((a = "dhx_event_move"), (this._dragEventBody = !0)), a)) {
                            case "dhx_cal_event_line":
                            case "dhx_cal_event_clear":
                                this._table_view && (this._drag_mode = "move");
                                break;
                            case "dhx_event_move":
                            case "dhx_wa_ev_body":
                                this._drag_mode = "move";
                                break;
                            case "dhx_event_resize":
                                this._drag_mode = "resize";
                                e._getClassName(i).indexOf("dhx_event_resize_end") < 0 ? (e._drag_from_start = !0) : (e._drag_from_start = !1);
                                break;
                            case "dhx_scale_holder":
                            case "dhx_scale_holder_now":
                            case "dhx_month_body":
                            case "dhx_matrix_cell":
                            case "dhx_marked_timespan":
                                this._drag_mode = "create";
                                break;
                            case "":
                                if (i.parentNode) return e._on_mouse_down(t, i.parentNode);
                                break;
                            default:
                                if ((!e.checkEvent("onMouseDown") || e.callEvent("onMouseDown", [a, t])) && i.parentNode && i != this && "dhx_body" != a) return e._on_mouse_down(t, i.parentNode);
                                (this._drag_mode = null), (this._drag_id = null);
                        }
                        if (this._drag_mode) {
                            var n = this._locate_event(i);
                            if (this.config["drag_" + this._drag_mode] && this.callEvent("onBeforeDrag", [n, this._drag_mode, t])) {
                                if (((this._drag_id = n), (this._edit_id != this._drag_id || (this._edit_id && "create" == this._drag_mode)) && this._close_not_saved(), !this._drag_mode)) return;
                                (this._drag_event = e._lame_clone(this.getEvent(this._drag_id) || {})), (this._drag_pos = this._mouse_coords(t));
                            } else this._drag_mode = this._drag_id = 0;
                        }
                        this._drag_start = null;
                    }
                }),
                (e._get_private_properties = function (e) {
                    var t = {};
                    for (var i in e) 0 === i.indexOf("_") && (t[i] = !0);
                    return t;
                }),
                (e._clear_temporary_properties = function (e, t) {
                    var i = this._get_private_properties(e),
                        a = this._get_private_properties(t);
                    for (var n in a) i[n] || delete t[n];
                }),
                (e._on_mouse_up = function (t) {
                    if (!t || 2 != t.button || !this._mobile) {
                        if (this._drag_mode && this._drag_id) {
                            this._els.dhx_cal_data[0].style.cursor = "default";
                            var i = this._drag_id,
                                a = this._drag_mode,
                                n = !this._drag_pos || this._drag_pos.has_moved;
                            delete this._drag_event._move_event_shift;
                            var r = this.getEvent(this._drag_id);
                            if (n && (this._drag_event._dhx_changed || !this._drag_event.start_date || r.start_date.valueOf() != this._drag_event.start_date.valueOf() || r.end_date.valueOf() != this._drag_event.end_date.valueOf())) {
                                var s = "new-size" == this._drag_mode;
                                if (this.callEvent("onBeforeEventChanged", [r, t, s, this._drag_event]))
                                    if (((this._drag_id = this._drag_mode = null), s && this.config.edit_on_create)) {
                                        if ((this.unselect(), (this._new_event = new Date()), this._table_view || this.config.details_on_create || !this.config.select || !this.isOneDayEvent(this.getEvent(i))))
                                            return e.callEvent("onDragEnd", [i, a, t]), this.showLightbox(i);
                                        (this._drag_pos = !0), (this._select_id = this._edit_id = i);
                                    } else this._new_event || this.callEvent(s ? "onEventAdded" : "onEventChanged", [i, this.getEvent(i)]);
                                else s ? this.deleteEvent(r.id, !0) : ((this._drag_event._dhx_changed = !1), this._clear_temporary_properties(r, this._drag_event), e._lame_copy(r, this._drag_event), this.updateEvent(r.id));
                            }
                            this._drag_pos && (this._drag_pos.has_moved || !0 === this._drag_pos) && ((this._drag_id = this._drag_mode = null), this.render_view_data()), e.callEvent("onDragEnd", [i, a, t]);
                        }
                        (this._drag_id = null), (this._drag_mode = null), (this._drag_pos = null);
                    }
                }),
                (e._trigger_dyn_loading = function () {
                    return !(!this._load_mode || !this._load()) && ((this._render_wait = !0), !0);
                }),
                (e.update_view = function () {
                    this._reset_ignores();
                    var e = this[this._mode + "_view"];
                    if ((e ? e(!0) : this._reset_scale(), this._trigger_dyn_loading())) return !0;
                    this.render_view_data();
                }),
                (e.isViewExists = function (t) {
                    return !!(e[t + "_view"] || (e.date[t + "_start"] && e.templates[t + "_date"] && e.templates[t + "_scale_date"]));
                }),
                (e._set_aria_buttons_attrs = function () {
                    for (var e = ["dhx_cal_next_button", "dhx_cal_prev_button", "dhx_cal_tab", "dhx_cal_today_button"], t = 0; t < e.length; t++)
                        for (var i = this._els[e[t]], a = 0; i && a < i.length; a++) {
                            var n = i[a].getAttribute("name"),
                                r = this.locale.labels[e[t]];
                            n && (r = this.locale.labels[n] || r),
                                "dhx_cal_next_button" == e[t] ? (r = this.locale.labels.next) : "dhx_cal_prev_button" == e[t] && (r = this.locale.labels.prev),
                                this._waiAria.headerButtonsAttributes(i[a], r || "");
                        }
                }),
                (e.updateView = function (e, t) {
                    (e = e || this._date), (t = t || this._mode);
                    var i = "dhx_cal_data",
                        a = this._obj,
                        n = "dhx_scheduler_" + this._mode,
                        r = "dhx_scheduler_" + t;
                    this._mode && -1 != a.className.indexOf(n) ? (a.className = a.className.replace(n, r)) : (a.className += " " + r);
                    var s,
                        o = "dhx_multi_day",
                        d = !(this._mode != t || !this.config.preserve_scroll) && this._els[i][0].scrollTop;
                    this._els[o] && this._els[o][0] && (s = this._els[o][0].scrollTop),
                        this[this._mode + "_view"] && t && this._mode != t && this[this._mode + "_view"](!1),
                        this._close_not_saved(),
                        this._els[o] && (this._els[o][0].parentNode.removeChild(this._els[o][0]), (this._els[o] = null)),
                        (this._mode = t),
                        (this._date = e),
                        (this._table_view = "month" == this._mode),
                        (this._dy_shift = 0),
                        this._set_aria_buttons_attrs();
                    var l = this._els.dhx_cal_tab;
                    if (l)
                        for (var _ = 0; _ < l.length; _++) {
                            var h = l[_],
                                c = h.className;
                            (c = c.replace(/ active/g, "")), h.getAttribute("name") == this._mode + "_tab" ? ((c += " active"), this._waiAria.headerToggleState(h, !0)) : this._waiAria.headerToggleState(h, !1), (h.className = c);
                        }
                    this.update_view(), "number" == typeof d && (this._els[i][0].scrollTop = d), "number" == typeof s && this._els[o] && this._els[o][0] && (this._els[o][0].scrollTop = s);
                }),
                (e.setCurrentView = function (e, t) {
                    this.callEvent("onBeforeViewChange", [this._mode, this._date, t || this._mode, e || this._date]) && (this.updateView(e, t), this.callEvent("onViewChange", [this._mode, this._date]));
                }),
                (e._render_x_header = function (e, t, i, a, n) {
                    n = n || 0;
                    var r = document.createElement("div");
                    (r.className = "dhx_scale_bar"), this.templates[this._mode + "_scalex_class"] && (r.className += " " + this.templates[this._mode + "_scalex_class"](i));
                    var s = this._cols[e] - 1;
                    "month" == this._mode && 0 === e && this.config.left_border && ((r.className += " dhx_scale_bar_border"), (t += 1)), this.set_xy(r, s, this.xy.scale_height - 2, t, n);
                    var o = this.templates[this._mode + "_scale_date"](i, this._mode);
                    (r.innerHTML = o), this._waiAria.dayHeaderAttr(r, o), a.appendChild(r);
                }),
                (e._get_columns_num = function (t, i) {
                    var a = 7;
                    if (!e._table_view) {
                        var n = e.date["get_" + e._mode + "_end"];
                        n && (i = n(t)), (a = Math.round((i.valueOf() - t.valueOf()) / 864e5));
                    }
                    return a;
                }),
                (e._get_timeunit_start = function () {
                    return this.date[this._mode + "_start"](new Date(this._date.valueOf()));
                }),
                (e._get_view_end = function () {
                    var t = this._get_timeunit_start(),
                        i = e.date.add(t, 1, this._mode);
                    if (!e._table_view) {
                        var a = e.date["get_" + e._mode + "_end"];
                        a && (i = a(t));
                    }
                    return i;
                }),
                (e._calc_scale_sizes = function (e, t, i) {
                    var a = e,
                        n = this._get_columns_num(t, i);
                    this._process_ignores(t, n, "day", 1);
                    for (var r = n - this._ignores_detected, s = 0; s < n; s++)
                        this._ignores[s] ? ((this._cols[s] = 0), r++) : (this._cols[s] = Math.floor(a / (r - s))),
                            (a -= this._cols[s]),
                            (this._colsS[s] = (this._cols[s - 1] || 0) + (this._colsS[s - 1] || (this._table_view ? 0 : this.xy.scale_width + 2)));
                    (this._colsS.col_length = n), (this._colsS[n] = this._cols[n - 1] + this._colsS[n - 1] || 0);
                }),
                (e._set_scale_col_size = function (e, t, i) {
                    var a = this.config;
                    this.set_xy(e, t - 1, a.hour_size_px * (a.last_hour - a.first_hour), i + this.xy.scale_width + 1, 0);
                }),
                (e._render_scales = function (t, i) {
                    var a = new Date(e._min_date),
                        n = new Date(e._max_date),
                        r = this.date.date_part(e._currentDate()),
                        s = parseInt(t.style.width, 10),
                        o = new Date(this._min_date),
                        d = this._get_columns_num(a, n);
                    this._calc_scale_sizes(s, a, n);
                    var l = 0;
                    t.innerHTML = "";
                    for (var _ = 0; _ < d; _++) {
                        if ((this._ignores[_] || this._render_x_header(_, l, o, t), !this._table_view)) {
                            var h = document.createElement("div"),
                                c = "dhx_scale_holder";
                            o.valueOf() == r.valueOf() && (c = "dhx_scale_holder_now"),
                                this._ignores_detected && this._ignores[_] && (c += " dhx_scale_ignore"),
                                (h.className = c + " " + this.templates.week_date_class(o, r)),
                                this._waiAria.dayColumnAttr(h, o),
                                this._set_scale_col_size(h, this._cols[_], l),
                                i.appendChild(h),
                                this.callEvent("onScaleAdd", [h, o]);
                        }
                        (l += this._cols[_]), (o = this.date.add(o, 1, "day")), (o = this.date.day_start(o));
                    }
                }),
                (e._reset_scale = function () {
                    if (this.templates[this._mode + "_date"]) {
                        var t = this._els.dhx_cal_header[0],
                            i = this._els.dhx_cal_data[0],
                            a = this.config;
                        (t.innerHTML = ""), (i.innerHTML = "");
                        var n = (a.readonly || !a.drag_resize ? " dhx_resize_denied" : "") + (a.readonly || !a.drag_move ? " dhx_move_denied" : "");
                        (i.className = "dhx_cal_data" + n), (this._scales = {}), (this._cols = []), (this._colsS = { height: 0 }), (this._dy_shift = 0), this.set_sizes();
                        var r,
                            s,
                            o = this._get_timeunit_start(),
                            d = e._get_view_end();
                        (r = s = this._table_view ? e.date.week_start(o) : o), (this._min_date = r);
                        var l = this.templates[this._mode + "_date"](o, d, this._mode);
                        if (((this._els.dhx_cal_date[0].innerHTML = l), this._waiAria.navBarDateAttr(this._els.dhx_cal_date[0], l), (this._max_date = d), e._render_scales(t, i), this._table_view)) this._reset_month_scale(i, o, s);
                        else if ((this._reset_hours_scale(i, o, s), a.multi_day)) {
                            var _ = "dhx_multi_day";
                            this._els[_] && (this._els[_][0].parentNode.removeChild(this._els[_][0]), (this._els[_] = null));
                            var h = this._els.dhx_cal_navline[0],
                                c = h.offsetHeight + this._els.dhx_cal_header[0].offsetHeight + 1,
                                u = document.createElement("div");
                            (u.className = _), (u.style.visibility = "hidden"), this.set_xy(u, Math.max(this._colsS[this._colsS.col_length] + this.xy.scroll_width - 2, 0), 0, 0, c), i.parentNode.insertBefore(u, i);
                            var g = u.cloneNode(!0);
                            (g.className = _ + "_icon"), (g.style.visibility = "hidden"), this.set_xy(g, this.xy.scale_width, 0, 0, c), u.appendChild(g), (this._els[_] = [u, g]), (this._els[_][0].onclick = this._click.dhx_cal_data);
                        }
                    }
                }),
                (e._reset_hours_scale = function (t, i, a) {
                    var n = document.createElement("div");
                    n.className = "dhx_scale_holder";
                    for (var r = new Date(1980, 1, 1, this.config.first_hour, 0, 0), s = 1 * this.config.first_hour; s < this.config.last_hour; s++) {
                        var o = document.createElement("div");
                        (o.className = "dhx_scale_hour"), (o.style.height = this.config.hour_size_px + "px");
                        var d = this.xy.scale_width;
                        this.config.left_border && (o.className += " dhx_scale_hour_border"), (o.style.width = d + "px");
                        var l = e.templates.hour_scale(r);
                        (o.innerHTML = l), this._waiAria.hourScaleAttr(o, l), n.appendChild(o), (r = this.date.add(r, 1, "hour"));
                    }
                    t.appendChild(n), this.config.scroll_hour && (t.scrollTop = this.config.hour_size_px * (this.config.scroll_hour - this.config.first_hour));
                }),
                (e._currentDate = function () {
                    return e.config.now_date ? new Date(e.config.now_date) : new Date();
                }),
                (e._reset_ignores = function () {
                    (this._ignores = {}), (this._ignores_detected = 0);
                }),
                (e._process_ignores = function (t, i, a, n, r) {
                    this._reset_ignores();
                    var s = e["ignore_" + this._mode];
                    if (s) for (var o = new Date(t), d = 0; d < i; d++) s(o) && ((this._ignores_detected += 1), (this._ignores[d] = !0), r && i++), (o = e.date.add(o, n, a)), e.date[a + "_start"] && (o = e.date[a + "_start"](o));
                }),
                (e._render_month_scale = function (t, i, a, n) {
                    function r(t) {
                        var i = e._colsS.height;
                        return void 0 !== e._colsS.heights[t + 1] && (i = e._colsS.heights[t + 1] - (e._colsS.heights[t] || 0)), i;
                    }
                    var s = e.date.add(i, 1, "month"),
                        o = new Date(a),
                        d = e._currentDate();
                    this.date.date_part(d), this.date.date_part(a), (n = n || Math.ceil(Math.round((s.valueOf() - a.valueOf()) / 864e5) / 7));
                    for (var l = [], _ = 0; _ <= 7; _++) {
                        var h = (this._cols[_] || 0) - 1;
                        0 === _ && this.config.left_border && (h -= 1), (l[_] = h + "px");
                    }
                    var c = 0,
                        u = document.createElement("table");
                    u.setAttribute("cellpadding", "0"), u.setAttribute("cellspacing", "0");
                    var g = document.createElement("tbody");
                    u.appendChild(g);
                    for (var f = [], _ = 0; _ < n; _++) {
                        var v = document.createElement("tr");
                        g.appendChild(v);
                        for (var p = Math.max(r(_) - e.xy.month_head_height, 0), m = 0; m < 7; m++) {
                            var x = document.createElement("td");
                            v.appendChild(x);
                            var b = "";
                            a < i ? (b = "dhx_before") : a >= s ? (b = "dhx_after") : a.valueOf() == d.valueOf() && (b = "dhx_now"),
                                this._ignores_detected && this._ignores[m] && (b += " dhx_scale_ignore"),
                                (x.className = b + " " + this.templates.month_date_class(a, d));
                            var y = "dhx_month_body",
                                w = "dhx_month_head";
                            if ((0 === m && this.config.left_border && ((y += " dhx_month_body_border"), (w += " dhx_month_head_border")), this._ignores_detected && this._ignores[m]))
                                x.appendChild(document.createElement("div")), x.appendChild(document.createElement("div"));
                            else {
                                this._waiAria.monthCellAttr(x, a);
                                var D = document.createElement("div");
                                (D.className = w), (D.innerHTML = this.templates.month_day(a)), x.appendChild(D);
                                var E = document.createElement("div");
                                (E.className = y), (E.style.height = p + "px"), (E.style.width = l[m]), x.appendChild(E);
                            }
                            f.push(a);
                            var A = a.getDate();
                            (a = this.date.add(a, 1, "day")), a.getDate() - A > 1 && (a = new Date(a.getFullYear(), a.getMonth(), A + 1, 12, 0));
                        }
                        (e._colsS.heights[_] = c), (c += r(_));
                    }
                    (this._min_date = o), (this._max_date = a), (t.innerHTML = ""), t.appendChild(u), (this._scales = {});
                    for (var k = t.getElementsByTagName("div"), _ = 0; _ < f.length; _++) {
                        var t = k[2 * _ + 1],
                            S = f[_];
                        this._scales[+S] = t;
                    }
                    for (var _ = 0; _ < f.length; _++) {
                        var S = f[_];
                        this.callEvent("onScaleAdd", [this._scales[+S], S]);
                    }
                    return this._max_date;
                }),
                (e._reset_month_scale = function (t, i, a, n) {
                    var r = e.date.add(i, 1, "month"),
                        s = e._currentDate();
                    this.date.date_part(s), this.date.date_part(a), (n = n || Math.ceil(Math.round((r.valueOf() - a.valueOf()) / 864e5) / 7));
                    var o = Math.floor(t.clientHeight / n) - this.xy.month_head_height;
                    return (this._colsS.height = o + this.xy.month_head_height), (this._colsS.heights = []), e._render_month_scale(t, i, a, n);
                }),
                (e.getView = function (t) {
                    return t || (t = e.getState().mode), e.matrix && e.matrix[t] ? e.matrix[t] : e._props && e._props[t] ? e._props[t] : null;
                }),
                (e.getLabel = function (e, t) {
                    for (var i = this.config.lightbox.sections, a = 0; a < i.length; a++) if (i[a].map_to == e) for (var n = i[a].options, r = 0; r < n.length; r++) if (n[r].key == t) return n[r].label;
                    return "";
                }),
                (e.updateCollection = function (t, i) {
                    var a = e.serverList(t);
                    return !!a && (a.splice(0, a.length), a.push.apply(a, i || []), e.callEvent("onOptionsLoad", []), e.resetLightbox(), !0);
                }),
                (e._lame_clone = function (t, i) {
                    var a, n, r;
                    for (i = i || [], a = 0; a < i.length; a += 2) if (t === i[a]) return i[a + 1];
                    if (t && "object" == typeof t) {
                        for (r = {}, n = [Array, Date, Number, String, Boolean], a = 0; a < n.length; a++) t instanceof n[a] && (r = a ? new n[a](t) : new n[a]());
                        i.push(t, r);
                        for (a in t) Object.prototype.hasOwnProperty.apply(t, [a]) && (r[a] = e._lame_clone(t[a], i));
                    }
                    return r || t;
                }),
                (e._lame_copy = function (e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
                    return e;
                }),
                (e._get_date_from_pos = function (e) {
                    var t = this._min_date.valueOf() + 6e4 * (e.y * this.config.time_step + 24 * (this._table_view ? 0 : e.x) * 60);
                    return new Date(this._correct_shift(t));
                }),
                (e.getActionData = function (e) {
                    var t = this._mouse_coords(e);
                    return { date: this._get_date_from_pos(t), section: t.section };
                }),
                (e._focus = function (e, t) {
                    if (e && e.focus)
                        if (this._mobile)
                            window.setTimeout(function () {
                                e.focus();
                            }, 10);
                        else
                            try {
                                t && e.select && e.offsetWidth && e.select(), e.focus();
                            } catch (e) {}
                }),
                (e._get_real_event_length = function (t, i, a) {
                    var n,
                        r = i - t,
                        s = a._start_correction + a._end_correction || 0,
                        o = this["ignore_" + this._mode],
                        d = 0;
                    a.render ? ((d = this._get_date_index(a, t)), (n = this._get_date_index(a, i))) : (n = Math.round(r / 60 / 60 / 1e3 / 24));
                    for (var l = !0; d < n; ) {
                        var _ = e.date.add(i, -a.x_step, a.x_unit);
                        o && o(i) && (!l || (l && o(_))) ? (r -= i - _) : ((l = !1), (r -= s)), (i = _), n--;
                    }
                    return r;
                }),
                (e._get_fictional_event_length = function (t, i, a, n) {
                    var r = new Date(t),
                        s = n ? -1 : 1;
                    if (a._start_correction || a._end_correction) {
                        var o;
                        o = n ? 60 * r.getHours() + r.getMinutes() - 60 * (a.first_hour || 0) : 60 * (a.last_hour || 0) - (60 * r.getHours() + r.getMinutes());
                        var d = 60 * (a.last_hour - a.first_hour),
                            l = Math.ceil((i / 6e4 - o) / d);
                        l < 0 && (l = 0), (i += l * (1440 - d) * 60 * 1e3);
                    }
                    var _,
                        h = new Date(1 * t + i * s),
                        c = this["ignore_" + this._mode],
                        u = 0;
                    for (a.render ? ((u = this._get_date_index(a, r)), (_ = this._get_date_index(a, h))) : (_ = Math.round(i / 60 / 60 / 1e3 / 24)); u * s <= _ * s; ) {
                        var g = e.date.add(r, a.x_step * s, a.x_unit);
                        c && c(r) && ((i += (g - r) * s), (_ += s)), (r = g), (u += s);
                    }
                    return i;
                }),
                (e._get_section_view = function () {
                    return this.getView();
                }),
                (e._get_section_property = function () {
                    return this.matrix && this.matrix[this._mode] ? this.matrix[this._mode].y_property : this._props && this._props[this._mode] ? this._props[this._mode].map_to : null;
                }),
                (e._is_initialized = function () {
                    var e = this.getState();
                    return this._obj && e.date && e.mode;
                }),
                (e._is_lightbox_open = function () {
                    var e = this.getState();
                    return null !== e.lightbox_id && void 0 !== e.lightbox_id;
                }),
                (e._getClassName = function (e) {
                    if (!e) return "";
                    var t = e.className || "";
                    return t.baseVal && (t = t.baseVal), t.indexOf || (t = ""), t || "";
                }),
                (e.event = function (e, t, i) {
                    e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent && e.attachEvent("on" + t, i);
                }),
                (e.eventRemove = function (e, t, i) {
                    e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent && e.detachEvent("on" + t, i);
                }),
                (function () {
                    function t(t) {
                        var i = !1,
                            a = !1;
                        if (window.getComputedStyle) {
                            var n = window.getComputedStyle(t, null);
                            (i = n.display), (a = n.visibility);
                        } else t.currentStyle && ((i = t.currentStyle.display), (a = t.currentStyle.visibility));
                        var r = !1,
                            s = e._locate_css({ target: t }, "dhx_form_repeat", !1);
                        return s && (r = !("0px" != s.style.height)), (r = r || !t.offsetHeight), "none" != i && "hidden" != a && !r;
                    }
                    function i(e) {
                        return !isNaN(e.getAttribute("tabindex")) && 1 * e.getAttribute("tabindex") >= 0;
                    }
                    function a(e) {
                        return !{ a: !0, area: !0 }[e.nodeName.loLowerCase()] || !!e.getAttribute("href");
                    }
                    function n(e) {
                        return !{ input: !0, select: !0, textarea: !0, button: !0, object: !0 }[e.nodeName.toLowerCase()] || !e.hasAttribute("disabled");
                    }
                    e._getFocusableNodes = function (e) {
                        for (
                            var r = e.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")),
                                s = Array.prototype.slice.call(r, 0),
                                o = 0;
                            o < s.length;
                            o++
                        ) {
                            var d = s[o];
                            ((i(d) || n(d) || a(d)) && t(d)) || (s.splice(o, 1), o--);
                        }
                        return s;
                    };
                })(),
                (e._trim = function (e) {
                    return (
                        String.prototype.trim ||
                        function () {
                            return this.replace(/^\s+|\s+$/g, "");
                        }
                    ).apply(e);
                }),
                (e._isDate = function (e) {
                    return !(!e || "object" != typeof e) && !!(e.getFullYear && e.getMonth && e.getDate);
                }),
                (e._isObject = function (e) {
                    return e && "object" == typeof e;
                }),
                (function () {
                    function t(e) {
                        return (e + "").replace(n, " ").replace(r, " ");
                    }
                    function i(e) {
                        return (e + "").replace(s, "&#39;");
                    }
                    function a() {
                        return !e.config.wai_aria_attributes;
                    }
                    var n = new RegExp("<(?:.|\n)*?>", "gm"),
                        r = new RegExp(" +", "gm"),
                        s = new RegExp("'", "gm");
                    e._waiAria = {
                        getAttributeString: function (e) {
                            var a = [" "];
                            for (var n in e)
                                if ("function" != typeof e[n] && "object" != typeof e[n]) {
                                    var r = i(t(e[n]));
                                    a.push(n + "='" + r + "'");
                                }
                            return a.push(" "), a.join(" ");
                        },
                        setAttributes: function (e, i) {
                            for (var a in i) e.setAttribute(a, t(i[a]));
                            return e;
                        },
                        labelAttr: function (e, t) {
                            return this.setAttributes(e, { "aria-label": t });
                        },
                        label: function (t) {
                            return e._waiAria.getAttributeString({ "aria-label": t });
                        },
                        hourScaleAttr: function (e, t) {
                            this.labelAttr(e, t);
                        },
                        monthCellAttr: function (t, i) {
                            this.labelAttr(t, e.templates.day_date(i));
                        },
                        navBarDateAttr: function (e, t) {
                            this.labelAttr(e, t);
                        },
                        dayHeaderAttr: function (e, t) {
                            this.labelAttr(e, t);
                        },
                        dayColumnAttr: function (t, i) {
                            this.dayHeaderAttr(t, e.templates.day_date(i));
                        },
                        headerButtonsAttributes: function (e, t) {
                            return this.setAttributes(e, { role: "button", "aria-label": t });
                        },
                        headerToggleState: function (e, t) {
                            return this.setAttributes(e, { "aria-pressed": t ? "true" : "false" });
                        },
                        getHeaderCellAttr: function (t) {
                            return e._waiAria.getAttributeString({ "aria-label": t });
                        },
                        eventAttr: function (e, t) {
                            this._eventCommonAttr(e, t);
                        },
                        _eventCommonAttr: function (i, a) {
                            a.setAttribute("aria-label", t(e.templates.event_text(i.start_date, i.end_date, i))),
                                e.config.readonly && a.setAttribute("aria-readonly", !0),
                                i.$dataprocessor_class && a.setAttribute("aria-busy", !0),
                                a.setAttribute("aria-selected", e.getState().select_id == i.id ? "true" : "false");
                        },
                        setEventBarAttr: function (e, t) {
                            this._eventCommonAttr(e, t);
                        },
                        _getAttributes: function (e, t) {
                            var i = {
                                setAttribute: function (e, t) {
                                    this[e] = t;
                                },
                            };
                            return e.apply(this, [t, i]), i;
                        },
                        eventBarAttrString: function (e) {
                            return this.getAttributeString(this._getAttributes(this.setEventBarAttr, e));
                        },
                        agendaHeadAttrString: function () {
                            return this.getAttributeString({ role: "row" });
                        },
                        agendaHeadDateString: function (e) {
                            return this.getAttributeString({ role: "columnheader", "aria-label": e });
                        },
                        agendaHeadDescriptionString: function (e) {
                            return this.agendaHeadDateString(e);
                        },
                        agendaDataAttrString: function () {
                            return this.getAttributeString({ role: "grid" });
                        },
                        agendaEventAttrString: function (e) {
                            var t = this._getAttributes(this._eventCommonAttr, e);
                            return (t.role = "row"), this.getAttributeString(t);
                        },
                        agendaDetailsBtnString: function () {
                            return this.getAttributeString({ role: "button", "aria-label": e.locale.labels.icon_details });
                        },
                        gridAttrString: function () {
                            return this.getAttributeString({ role: "grid" });
                        },
                        gridRowAttrString: function (e) {
                            return this.agendaEventAttrString(e);
                        },
                        gridCellAttrString: function (e, t, i) {
                            return this.getAttributeString({ role: "gridcell", "aria-label": [void 0 === t.label ? t.id : t.label, ": ", i] });
                        },
                        mapAttrString: function () {
                            return this.gridAttrString();
                        },
                        mapRowAttrString: function (e) {
                            return this.gridRowAttrString(e);
                        },
                        mapDetailsBtnString: function () {
                            return this.agendaDetailsBtnString();
                        },
                        minicalHeader: function (e, t) {
                            this.setAttributes(e, { id: t + "", "aria-live": "assertice", "aria-atomic": "true" });
                        },
                        minicalGrid: function (e, t) {
                            this.setAttributes(e, { "aria-labelledby": t + "", role: "grid" });
                        },
                        minicalRow: function (e) {
                            this.setAttributes(e, { role: "row" });
                        },
                        minicalDayCell: function (t, i) {
                            var a = i.valueOf() < e._max_date.valueOf() && i.valueOf() >= e._min_date.valueOf();
                            this.setAttributes(t, { role: "gridcell", "aria-label": e.templates.day_date(i), "aria-selected": a ? "true" : "false" });
                        },
                        minicalHeadCell: function (e) {
                            this.setAttributes(e, { role: "columnheader" });
                        },
                        weekAgendaDayCell: function (t, i) {
                            var a = t.querySelector(".dhx_wa_scale_bar"),
                                n = t.querySelector(".dhx_wa_day_data"),
                                r = e.uid() + "";
                            this.setAttributes(a, { id: r }), this.setAttributes(n, { "aria-labelledby": r });
                        },
                        weekAgendaEvent: function (e, t) {
                            this.eventAttr(t, e);
                        },
                        lightboxHiddenAttr: function (e) {
                            e.setAttribute("aria-hidden", "true");
                        },
                        lightboxVisibleAttr: function (e) {
                            e.setAttribute("aria-hidden", "false");
                        },
                        lightboxSectionButtonAttrString: function (e) {
                            return this.getAttributeString({ role: "button", "aria-label": e, tabindex: "0" });
                        },
                        yearHeader: function (e, t) {
                            this.setAttributes(e, { id: t + "" });
                        },
                        yearGrid: function (e, t) {
                            this.minicalGrid(e, t);
                        },
                        yearHeadCell: function (e) {
                            return this.minicalHeadCell(e);
                        },
                        yearRow: function (e) {
                            return this.minicalRow(e);
                        },
                        yearDayCell: function (e) {
                            this.setAttributes(e, { role: "gridcell" });
                        },
                        lightboxAttr: function (e) {
                            e.setAttribute("role", "dialog"), e.setAttribute("aria-hidden", "true"), e.firstChild.setAttribute("role", "heading");
                        },
                        lightboxButtonAttrString: function (t) {
                            return this.getAttributeString({ role: "button", "aria-label": e.locale.labels[t], tabindex: "0" });
                        },
                        eventMenuAttrString: function (t) {
                            return this.getAttributeString({ role: "button", "aria-label": e.locale.labels[t] });
                        },
                        lightboxHeader: function (e, t) {
                            e.setAttribute("aria-label", t);
                        },
                        lightboxSelectAttrString: function (t) {
                            var i = "";
                            switch (t) {
                                case "%Y":
                                    i = e.locale.labels.year;
                                    break;
                                case "%m":
                                    i = e.locale.labels.month;
                                    break;
                                case "%d":
                                    i = e.locale.labels.day;
                                    break;
                                case "%H:%i":
                                    i = e.locale.labels.hour + " " + e.locale.labels.minute;
                            }
                            return e._waiAria.getAttributeString({ "aria-label": i });
                        },
                        messageButtonAttrString: function (e) {
                            return "tabindex='0' role='button' aria-label='" + e + "'";
                        },
                        messageInfoAttr: function (e) {
                            e.setAttribute("role", "alert");
                        },
                        messageModalAttr: function (e, t) {
                            e.setAttribute("role", "dialog"), t && e.setAttribute("aria-labelledby", t);
                        },
                        quickInfoAttr: function (e) {
                            e.setAttribute("role", "dialog");
                        },
                        quickInfoHeaderAttrString: function () {
                            return " role='heading' ";
                        },
                        quickInfoHeader: function (e, t) {
                            e.setAttribute("aria-label", t);
                        },
                        quickInfoButtonAttrString: function (t) {
                            return e._waiAria.getAttributeString({ role: "button", "aria-label": t, tabindex: "0" });
                        },
                        tooltipAttr: function (e) {
                            e.setAttribute("role", "tooltip");
                        },
                        tooltipVisibleAttr: function (e) {
                            e.setAttribute("aria-hidden", "false");
                        },
                        tooltipHiddenAttr: function (e) {
                            e.setAttribute("aria-hidden", "true");
                        },
                    };
                    for (var o in e._waiAria)
                        e._waiAria[o] = (function (e) {
                            return function () {
                                return a() ? " " : e.apply(this, arguments);
                            };
                        })(e._waiAria[o]);
                })(),
                (e.$domHelpers = {
                    getAbsoluteLeft: function (e) {
                        return this.getOffset(e).left;
                    },
                    getAbsoluteTop: function (e) {
                        return this.getOffset(e).top;
                    },
                    getOffsetSum: function (e) {
                        for (var t = 0, i = 0; e; ) (t += parseInt(e.offsetTop)), (i += parseInt(e.offsetLeft)), (e = e.offsetParent);
                        return { top: t, left: i };
                    },
                    getOffsetRect: function (e) {
                        var t = e.getBoundingClientRect(),
                            i = 0,
                            a = 0;
                        if (/Mobi/.test(navigator.userAgent)) {
                            var n = document.createElement("div");
                            (n.style.position = "absolute"), (n.style.left = "0px"), (n.style.top = "0px"), (n.style.width = "1px"), (n.style.height = "1px"), document.body.appendChild(n);
                            var r = n.getBoundingClientRect();
                            (i = t.top - r.top), (a = t.left - r.left), n.parentNode.removeChild(n);
                        } else {
                            var s = document.body,
                                o = document.documentElement,
                                d = window.pageYOffset || o.scrollTop || s.scrollTop,
                                l = window.pageXOffset || o.scrollLeft || s.scrollLeft,
                                _ = o.clientTop || s.clientTop || 0,
                                h = o.clientLeft || s.clientLeft || 0;
                            (i = t.top + d - _), (a = t.left + l - h);
                        }
                        return { top: Math.round(i), left: Math.round(a) };
                    },
                    getOffset: function (e) {
                        return e.getBoundingClientRect ? this.getOffsetRect(e) : this.getOffsetSum(e);
                    },
                    closest: function (e, t) {
                        return e && t ? a(e, t) : null;
                    },
                });
            var a;
            if (Element.prototype.closest)
                a = function (e, t) {
                    return e.closest(t);
                };
            else {
                var n = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                a = function (e, t) {
                    var i = e;
                    do {
                        if (n.call(i, t)) return i;
                        i = i.parentElement || i.parentNode;
                    } while (null !== i && 1 === i.nodeType);
                    return null;
                };
            }
            (e.$env = {
                isIE: navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0,
                isIE6: !window.XMLHttpRequest && navigator.userAgent.indexOf("MSIE") >= 0,
                isIE7: navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0,
                isIE8: navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0,
                isOpera: navigator.userAgent.indexOf("Opera") >= 0,
                isChrome: navigator.userAgent.indexOf("Chrome") >= 0,
                isKHTML: navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0,
                isFF: navigator.userAgent.indexOf("Firefox") >= 0,
                isIPad: navigator.userAgent.search(/iPad/gi) >= 0,
                isEdge: -1 != navigator.userAgent.indexOf("Edge"),
            }),
                (e.$ajax = {
                    _obj: e,
                    cache: !0,
                    method: "get",
                    parse: function (t) {
                        if ("string" != typeof t) return t;
                        var i;
                        return (
                            (t = t.replace(/^[\s]+/, "")),
                            window.DOMParser && !e.$env.isIE
                                ? (i = new window.DOMParser().parseFromString(t, "text/xml"))
                                : window.ActiveXObject !== window.undefined && ((i = new window.ActiveXObject("Microsoft.XMLDOM")), (i.async = "false"), i.loadXML(t)),
                            i
                        );
                    },
                    xmltop: function (e, t, i) {
                        if (void 0 === t.status || t.status < 400) {
                            var a = t.responseXML ? t.responseXML || t : this.parse(t.responseText || t);
                            if (a && null !== a.documentElement && !a.getElementsByTagName("parsererror").length) return a.getElementsByTagName(e)[0];
                        }
                        return -1 !== i && this._obj.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], i]), document.createElement("DIV");
                    },
                    xpath: function (t, i) {
                        if ((i.nodeName || (i = i.responseXML || i), e.$env.isIE)) return i.selectNodes(t) || [];
                        for (var a, n = [], r = (i.ownerDocument || i).evaluate(t, i, null, XPathResult.ANY_TYPE, null); ; ) {
                            if (!(a = r.iterateNext())) break;
                            n.push(a);
                        }
                        return n;
                    },
                    query: function (e) {
                        this._call(e.method || "GET", e.url, e.data || "", e.async || !0, e.callback, null, e.headers);
                    },
                    get: function (e, t) {
                        this._call("GET", e, null, !0, t);
                    },
                    getSync: function (e) {
                        return this._call("GET", e, null, !1);
                    },
                    put: function (e, t, i) {
                        this._call("PUT", e, t, !0, i);
                    },
                    del: function (e, t, i) {
                        this._call("DELETE", e, t, !0, i);
                    },
                    post: function (e, t, i) {
                        1 == arguments.length ? (t = "") : 2 != arguments.length || ("function" != typeof t && "function" != typeof window[t]) ? (t = String(t)) : ((i = t), (t = "")), this._call("POST", e, t, !0, i);
                    },
                    postSync: function (e, t) {
                        return (t = null === t ? "" : String(t)), this._call("POST", e, t, !1);
                    },
                    getLong: function (e, t) {
                        this._call("GET", e, null, !0, t, { url: e });
                    },
                    postLong: function (e, t, i) {
                        2 != arguments.length || ("function" != typeof t && (window[t], 0)) || ((i = t), (t = "")), this._call("POST", e, t, !0, i, { url: e, postData: t });
                    },
                    _call: function (e, t, i, a, n, r, s) {
                        var o = this._obj,
                            d = window.XMLHttpRequest && !o.$env.isIE ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"),
                            l = null !== navigator.userAgent.match(/AppleWebKit/) && null !== navigator.userAgent.match(/Qt/) && null !== navigator.userAgent.match(/Safari/);
                        if (
                            (a &&
                                (d.onreadystatechange = function () {
                                    if (4 == d.readyState || (l && 3 == d.readyState)) {
                                        if ((200 != d.status || "" === d.responseText) && !o.callEvent("onAjaxError", [d])) return;
                                        window.setTimeout(function () {
                                            "function" == typeof n && n.apply(window, [{ xmlDoc: d, filePath: t }]), r && (void 0 !== r.postData ? this.postLong(r.url, r.postData, n) : this.getLong(r.url, n)), (n = null), (d = null);
                                        }, 1);
                                    }
                                }),
                            "GET" != e || this.cache || (t += (t.indexOf("?") >= 0 ? "&" : "?") + "dhxr" + new Date().getTime() + "=1"),
                            d.open(e, t, a),
                            s)
                        )
                            for (var _ in s) d.setRequestHeader(_, s[_]);
                        else "POST" == e.toUpperCase() || "PUT" == e || "DELETE" == e ? d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") : "GET" == e && (i = null);
                        if ((d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.send(i), !a)) return { xmlDoc: d, filePath: t };
                    },
                    urlSeparator: function (e) {
                        return -1 != e.indexOf("?") ? "&" : "?";
                    },
                });
            var r = function (e, t) {
                for (var i = "var temp=date.match(/[a-zA-Z]+|[0-9]+/g);", a = e.match(/%[a-zA-Z]/g), n = 0; n < a.length; n++)
                    switch (a[n]) {
                        case "%j":
                        case "%d":
                            i += "set[2]=temp[" + n + "]||1;";
                            break;
                        case "%n":
                        case "%m":
                            i += "set[1]=(temp[" + n + "]||1)-1;";
                            break;
                        case "%y":
                            i += "set[0]=temp[" + n + "]*1+(temp[" + n + "]>50?1900:2000);";
                            break;
                        case "%g":
                        case "%G":
                        case "%h":
                        case "%H":
                            i += "set[3]=temp[" + n + "]||0;";
                            break;
                        case "%i":
                            i += "set[4]=temp[" + n + "]||0;";
                            break;
                        case "%Y":
                            i += "set[0]=temp[" + n + "]||0;";
                            break;
                        case "%a":
                        case "%A":
                            i += "set[3]=set[3]%12+((temp[" + n + "]||'').toLowerCase()=='am'?0:12);";
                            break;
                        case "%s":
                            i += "set[5]=temp[" + n + "]||0;";
                            break;
                        case "%M":
                            i += "set[1]=this.locale.date.month_short_hash[temp[" + n + "]]||0;";
                            break;
                        case "%F":
                            i += "set[1]=this.locale.date.month_full_hash[temp[" + n + "]]||0;";
                    }
                var r = "set[0],set[1],set[2],set[3],set[4],set[5]";
                return t && (r = " Date.UTC(" + r + ")"), new Function("date", "var set=[0,0,1,0,0,0]; " + i + " return new Date(" + r + ");");
            };
            (e.date = {
                init: function () {
                    for (var t = e.locale.date.month_short, i = (e.locale.date.month_short_hash = {}), a = 0; a < t.length; a++) i[t[a]] = a;
                    for (var t = e.locale.date.month_full, i = (e.locale.date.month_full_hash = {}), a = 0; a < t.length; a++) i[t[a]] = a;
                },
                _bind_host_object: function (t) {
                    return t.bind
                        ? t.bind(e)
                        : function () {
                              return t.apply(e, arguments);
                          };
                },
                date_part: function (e) {
                    var t = new Date(e);
                    return (
                        e.setHours(0),
                        e.setMinutes(0),
                        e.setSeconds(0),
                        e.setMilliseconds(0),
                        e.getHours() && (e.getDate() < t.getDate() || e.getMonth() < t.getMonth() || e.getFullYear() < t.getFullYear()) && e.setTime(e.getTime() + 36e5 * (24 - e.getHours())),
                        e
                    );
                },
                time_part: function (e) {
                    return (e.valueOf() / 1e3 - 60 * e.getTimezoneOffset()) % 86400;
                },
                week_start: function (t) {
                    var i = t.getDay();
                    return e.config.start_on_monday && (0 === i ? (i = 6) : i--), this.date_part(this.add(t, -1 * i, "day"));
                },
                month_start: function (e) {
                    return e.setDate(1), this.date_part(e);
                },
                year_start: function (e) {
                    return e.setMonth(0), this.month_start(e);
                },
                day_start: function (e) {
                    return this.date_part(e);
                },
                _add_days: function (e, t) {
                    var i = new Date(e.valueOf());
                    if ((i.setDate(i.getDate() + t), t == Math.round(t) && t > 0)) {
                        var a = +i - +e,
                            n = a % 864e5;
                        if (n && e.getTimezoneOffset() == i.getTimezoneOffset()) {
                            var r = n / 36e5;
                            i.setTime(i.getTime() + 60 * (24 - r) * 60 * 1e3);
                        }
                    }
                    return t >= 0 && !e.getHours() && i.getHours() && (i.getDate() < e.getDate() || i.getMonth() < e.getMonth() || i.getFullYear() < e.getFullYear()) && i.setTime(i.getTime() + 36e5 * (24 - i.getHours())), i;
                },
                add: function (t, i, a) {
                    var n = new Date(t.valueOf());
                    switch (a) {
                        case "day":
                            n = e.date._add_days(n, i);
                            break;
                        case "week":
                            n = e.date._add_days(n, 7 * i);
                            break;
                        case "month":
                            n.setMonth(n.getMonth() + i);
                            break;
                        case "year":
                            n.setYear(n.getFullYear() + i);
                            break;
                        case "hour":
                            n.setTime(n.getTime() + 60 * i * 60 * 1e3);
                            break;
                        case "minute":
                            n.setTime(n.getTime() + 60 * i * 1e3);
                            break;
                        default:
                            return e.date["add_" + a](t, i, a);
                    }
                    return n;
                },
                to_fixed: function (e) {
                    return e < 10 ? "0" + e : e;
                },
                copy: function (e) {
                    return new Date(e.valueOf());
                },
                date_to_str: function (t, i) {
                    (t = t.replace(/%[a-zA-Z]/g, function (e) {
                        switch (e) {
                            case "%d":
                                return '"+this.date.to_fixed(date.getDate())+"';
                            case "%m":
                                return '"+this.date.to_fixed((date.getMonth()+1))+"';
                            case "%j":
                                return '"+date.getDate()+"';
                            case "%n":
                                return '"+(date.getMonth()+1)+"';
                            case "%y":
                                return '"+this.date.to_fixed(date.getFullYear()%100)+"';
                            case "%Y":
                                return '"+date.getFullYear()+"';
                            case "%D":
                                return '"+this.locale.date.day_short[date.getDay()]+"';
                            case "%l":
                                return '"+this.locale.date.day_full[date.getDay()]+"';
                            case "%M":
                                return '"+this.locale.date.month_short[date.getMonth()]+"';
                            case "%F":
                                return '"+this.locale.date.month_full[date.getMonth()]+"';
                            case "%h":
                                return '"+this.date.to_fixed((date.getHours()+11)%12+1)+"';
                            case "%g":
                                return '"+((date.getHours()+11)%12+1)+"';
                            case "%G":
                                return '"+date.getHours()+"';
                            case "%H":
                                return '"+this.date.to_fixed(date.getHours())+"';
                            case "%i":
                                return '"+this.date.to_fixed(date.getMinutes())+"';
                            case "%a":
                                return '"+(date.getHours()>11?"pm":"am")+"';
                            case "%A":
                                return '"+(date.getHours()>11?"PM":"AM")+"';
                            case "%s":
                                return '"+this.date.to_fixed(date.getSeconds())+"';
                            case "%W":
                                return '"+this.date.to_fixed(this.date.getISOWeek(date))+"';
                            default:
                                return e;
                        }
                    })),
                        i && (t = t.replace(/date\.get/g, "date.getUTC"));
                    var a = new Function("date", 'return "' + t + '";');
                    return e.date._bind_host_object(a);
                },
                str_to_date: function (t, i, a) {
                    var n = r(t, i),
                        s = /^[0-9]{4}(\-|\/)[0-9]{2}(\-|\/)[0-9]{2} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/,
                        o = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4} ?(([0-9]{1,2}:[0-9]{2})(:[0-9]{1,2})?)?$/,
                        d = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4} ?(([0-9]{1,2}:[0-9]{1,2})(:[0-9]{1,2})?)?$/,
                        l = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,
                        _ = function (e) {
                            return s.test(String(e));
                        },
                        h = function (e) {
                            return o.test(String(e));
                        },
                        c = function (e) {
                            return d.test(String(e));
                        },
                        u = function (e) {
                            return l.test(e);
                        },
                        g = r("%Y-%m-%d %H:%i:%s", i),
                        f = r("%m/%d/%Y %H:%i:%s", i),
                        v = r("%d-%m-%Y %H:%i:%s", i);
                    return function (t) {
                        if (!a && !e.config.parse_exact_format) {
                            if (t && t.getISOWeek) return new Date(t);
                            if ("number" == typeof t) return new Date(t);
                            if (_(t)) return g(t);
                            if (h(t)) return f(t);
                            if (c(t)) return v(t);
                            if (u(t)) return new Date(t);
                        }
                        return n.call(e, t);
                    };
                },
                getISOWeek: function (e) {
                    if (!e) return !1;
                    e = this.date_part(new Date(e));
                    var t = e.getDay();
                    0 === t && (t = 7);
                    var i = new Date(e.valueOf());
                    i.setDate(e.getDate() + (4 - t));
                    var a = i.getFullYear(),
                        n = Math.round((i.getTime() - new Date(a, 0, 1).getTime()) / 864e5);
                    return 1 + Math.floor(n / 7);
                },
                getUTCISOWeek: function (e) {
                    return this.getISOWeek(this.convert_to_utc(e));
                },
                convert_to_utc: function (e) {
                    return new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
                },
            }),
                (e.locale = {
                    date: {
                        month_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        month_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        day_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        day_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    },
                    labels: {
                        dhx_cal_today_button: "Today",
                        day_tab: "Day",
                        week_tab: "Week",
                        month_tab: "Month",
                        new_event: "New event",
                        icon_save: "Save",
                        icon_cancel: "Cancel",
                        icon_details: "Details",
                        icon_edit: "Edit",
                        icon_delete: "Delete",
                        confirm_closing: "",
                        confirm_deleting: "Event will be deleted permanently, are you sure?",
                        section_description: "Description",
                        section_time: "Time period",
                        full_day: "Full day",
                        confirm_recurring: "Do you want to edit the whole set of repeated events?",
                        section_recurring: "Repeat event",
                        button_recurring: "Disabled",
                        button_recurring_open: "Enabled",
                        button_edit_series: "Edit series",
                        button_edit_occurrence: "Edit occurrence",
                        agenda_tab: "Agenda",
                        date: "Date",
                        description: "Description",
                        year_tab: "Year",
                        week_agenda_tab: "Agenda",
                        grid_tab: "Grid",
                        drag_to_create: "Drag to create",
                        drag_to_move: "Drag to move",
                        message_ok: "OK",
                        message_cancel: "Cancel",
                        next: "Next",
                        prev: "Previous",
                        year: "Year",
                        month: "Month",
                        day: "Day",
                        hour: "Hour",
                        minute: "Minute",
                    },
                }),
                (e.config = {
                    default_date: "%j %M %Y",
                    month_date: "%F %Y",
                    load_date: "%Y-%m-%d",
                    week_date: "%l",
                    day_date: "%D, %F %j",
                    hour_date: "%H:%i",
                    month_day: "%d",
                    date_format: "%Y-%m-%d %H:%i",
                    api_date: "%d-%m-%Y %H:%i",
                    parse_exact_format: !1,
                    preserve_length: !0,
                    time_step: 5,
                    start_on_monday: !0,
                    first_hour: 0,
                    last_hour: 24,
                    readonly: !1,
                    drag_resize: !0,
                    drag_move: !0,
                    drag_create: !0,
                    drag_event_body: !0,
                    dblclick_create: !0,
                    edit_on_create: !0,
                    details_on_create: !1,
                    resize_month_events: !1,
                    resize_month_timed: !1,
                    cascade_event_display: !1,
                    cascade_event_count: 4,
                    cascade_event_margin: 30,
                    multi_day: !0,
                    multi_day_height_limit: 0,
                    drag_lightbox: !0,
                    preserve_scroll: !0,
                    select: !0,
                    server_utc: !1,
                    touch: !0,
                    touch_tip: !0,
                    touch_drag: 500,
                    quick_info_detached: !0,
                    positive_closing: !1,
                    drag_highlight: !0,
                    limit_drag_out: !1,
                    icons_edit: ["icon_save", "icon_cancel"],
                    icons_select: ["icon_details", "icon_edit", "icon_delete"],
                    buttons_left: ["dhx_save_btn", "dhx_cancel_btn"],
                    buttons_right: ["dhx_delete_btn"],
                    lightbox: {
                        sections: [
                            { name: "description", map_to: "text", type: "textarea", focus: !0 },
                            { name: "time", height: 72, type: "time", map_to: "auto" },
                        ],
                    },
                    highlight_displayed_event: !0,
                    left_border: !1,
                    ajax_error: "alert",
                    delay_render: 0,
                    timeline_swap_resize: !0,
                    wai_aria_attributes: !0,
                    wai_aria_application_role: !0,
                }),
                (e.config.buttons_left.$inital = e.config.buttons_left.join()),
                (e.config.buttons_right.$inital = e.config.buttons_right.join()),
                (e._helpers = {
                    parseDate: function (t) {
                        return (e.templates.xml_date || e.templates.parse_date)(t);
                    },
                    formatDate: function (t) {
                        return (e.templates.xml_format || e.templates.format_date)(t);
                    },
                }),
                (e.templates = {}),
                (e.init_templates = function () {
                    var t = e.locale.labels;
                    (t.dhx_save_btn = t.icon_save), (t.dhx_cancel_btn = t.icon_cancel), (t.dhx_delete_btn = t.icon_delete);
                    var i = e.date.date_to_str,
                        a = e.config;
                    (function (e, t) {
                        for (var i in t) e[i] || (e[i] = t[i]);
                    })(e.templates, {
                        day_date: i(a.default_date),
                        month_date: i(a.month_date),
                        week_date: function (t, i) {
                            return e.templates.day_date(t) + " &ndash; " + e.templates.day_date(e.date.add(i, -1, "day"));
                        },
                        day_scale_date: i(a.default_date),
                        month_scale_date: i(a.week_date),
                        week_scale_date: i(a.day_date),
                        hour_scale: i(a.hour_date),
                        time_picker: i(a.hour_date),
                        event_date: i(a.hour_date),
                        month_day: i(a.month_day),
                        load_format: i(a.load_date),
                        format_date: i(a.date_format, a.server_utc),
                        parse_date: e.date.str_to_date(a.date_format, a.server_utc),
                        api_date: e.date.str_to_date(a.api_date, !1, !1),
                        event_header: function (t, i, a) {
                            return e.templates.event_date(t) + " - " + e.templates.event_date(i);
                        },
                        event_text: function (e, t, i) {
                            return i.text;
                        },
                        event_class: function (e, t, i) {
                            return "";
                        },
                        month_date_class: function (e) {
                            return "";
                        },
                        week_date_class: function (e) {
                            return "";
                        },
                        event_bar_date: function (t, i, a) {
                            return e.templates.event_date(t) + " ";
                        },
                        event_bar_text: function (e, t, i) {
                            return i.text;
                        },
                        month_events_link: function (e, t) {
                            return "<a>View more(" + t + " events)</a>";
                        },
                        drag_marker_class: function (e, t, i) {
                            return "";
                        },
                        drag_marker_content: function (e, t, i) {
                            return "";
                        },
                        tooltip_date_format: e.date.date_to_str("%Y-%m-%d %H:%i"),
                        tooltip_text: function (t, i, a) {
                            return "<b>Event:</b> " + a.text + "<br/><b>Start date:</b> " + e.templates.tooltip_date_format(t) + "<br/><b>End date:</b> " + e.templates.tooltip_date_format(i);
                        },
                    }),
                        this.callEvent("onTemplatesReady", []);
                }),
                (e.uid = function () {
                    return this._seed || (this._seed = new Date().valueOf()), this._seed++;
                }),
                (e._events = {}),
                (e.clearAll = function () {
                    (this._events = {}),
                        (this._loaded = {}),
                        (this._edit_id = null),
                        (this._select_id = null),
                        (this._drag_id = null),
                        (this._drag_mode = null),
                        (this._drag_pos = null),
                        (this._new_event = null),
                        this.clear_view(),
                        this.callEvent("onClearAll", []);
                }),
                (e.addEvent = function (t, i, a, n, r) {
                    if (!arguments.length) return this.addEventNow();
                    var s = t;
                    1 != arguments.length && ((s = r || {}), (s.start_date = t), (s.end_date = i), (s.text = a), (s.id = n)),
                        (s.id = s.id || e.uid()),
                        (s.text = s.text || ""),
                        "string" == typeof s.start_date && (s.start_date = this.templates.api_date(s.start_date)),
                        "string" == typeof s.end_date && (s.end_date = this.templates.api_date(s.end_date));
                    var o = 6e4 * (this.config.event_duration || this.config.time_step);
                    s.start_date.valueOf() == s.end_date.valueOf() && s.end_date.setTime(s.end_date.valueOf() + o), (s._timed = this.isOneDayEvent(s));
                    var d = !this._events[s.id];
                    return (this._events[s.id] = s), this.event_updated(s), this._loading || this.callEvent(d ? "onEventAdded" : "onEventChanged", [s.id, s]), s.id;
                }),
                (e.deleteEvent = function (e, t) {
                    var i = this._events[e];
                    (t || (this.callEvent("onBeforeEventDelete", [e, i]) && this.callEvent("onConfirmedBeforeEventDelete", [e, i]))) &&
                        (i && ((this._select_id = null), delete this._events[e], this.event_updated(i), this._drag_id == i.id && ((this._drag_id = null), (this._drag_mode = null), (this._drag_pos = null))),
                        this.callEvent("onEventDeleted", [e, i]));
                }),
                (e.getEvent = function (e) {
                    return this._events[e];
                }),
                (e.setEvent = function (e, t) {
                    t.id || (t.id = e), (this._events[e] = t);
                }),
                (e.for_rendered = function (e, t) {
                    for (var i = this._rendered.length - 1; i >= 0; i--) this._rendered[i].getAttribute("event_id") == e && t(this._rendered[i], i);
                }),
                (e.changeEventId = function (e, t) {
                    if (e != t) {
                        var i = this._events[e];
                        i && ((i.id = t), (this._events[t] = i), delete this._events[e]),
                            this.for_rendered(e, function (e) {
                                e.setAttribute("event_id", t);
                            }),
                            this._select_id == e && (this._select_id = t),
                            this._edit_id == e && (this._edit_id = t),
                            this.callEvent("onEventIdChange", [e, t]);
                    }
                }),
                (function () {
                    for (
                        var t = ["text", "Text", "start_date", "StartDate", "end_date", "EndDate"],
                            i = function (t) {
                                return function (i) {
                                    return e.getEvent(i)[t];
                                };
                            },
                            a = function (t) {
                                return function (i, a) {
                                    var n = e.getEvent(i);
                                    (n[t] = a), (n._changed = !0), (n._timed = this.isOneDayEvent(n)), e.event_updated(n, !0);
                                };
                            },
                            n = 0;
                        n < t.length;
                        n += 2
                    )
                        (e["getEvent" + t[n + 1]] = i(t[n])), (e["setEvent" + t[n + 1]] = a(t[n]));
                })(),
                (e.event_updated = function (e, t) {
                    this.is_visible_events(e) ? this.render_view_data() : this.clear_event(e.id);
                }),
                (e.is_visible_events = function (e) {
                    if (e.start_date.valueOf() < this._max_date.valueOf() && this._min_date.valueOf() < e.end_date.valueOf()) {
                        var t = e.start_date.getHours(),
                            i = e.end_date.getHours() + e.end_date.getMinutes() / 60,
                            a = this.config.last_hour,
                            n = this.config.first_hour;
                        return !(!this._table_view && (i > a || i < n) && (t >= a || t < n)) || !!((e.end_date.valueOf() - e.start_date.valueOf()) / 36e5 > 24 - (this.config.last_hour - this.config.first_hour) || (t < a && i >= n));
                    }
                    return !1;
                }),
                (e.isOneDayEvent = function (e) {
                    var t = new Date(e.end_date.valueOf() - 1);
                    return e.start_date.getFullYear() === t.getFullYear() && e.start_date.getMonth() === t.getMonth() && e.start_date.getDate() === t.getDate() && e.end_date.valueOf() - e.start_date.valueOf() < 864e5;
                }),
                (e.get_visible_events = function (e) {
                    var t = [];
                    for (var i in this._events) this.is_visible_events(this._events[i]) && ((e && !this._events[i]._timed) || (this.filter_event(i, this._events[i]) && t.push(this._events[i])));
                    return t;
                }),
                (e.filter_event = function (e, t) {
                    var i = this["filter_" + this._mode];
                    return !i || i(e, t);
                }),
                (e._is_main_area_event = function (e) {
                    return !!e._timed;
                }),
                (e.render_view_data = function (t, i) {
                    var a = !1;
                    if (!t) {
                        if (((a = !0), this._not_render)) return void (this._render_wait = !0);
                        (this._render_wait = !1), this.clear_view(), (t = this.get_visible_events(!(this._table_view || this.config.multi_day)));
                    }
                    for (var n = 0, r = t.length; n < r; n++) this._recalculate_timed(t[n]);
                    if (this.config.multi_day && !this._table_view) {
                        for (var s = [], o = [], n = 0; n < t.length; n++) this._is_main_area_event(t[n]) ? s.push(t[n]) : o.push(t[n]);
                        if (!this._els.dhx_multi_day) {
                            var d = e._commonErrorMessages.unknownView(this._mode);
                            throw new Error(d);
                        }
                        (this._rendered_location = this._els.dhx_multi_day[0]),
                            (this._table_view = !0),
                            this.render_data(o, i),
                            (this._table_view = !1),
                            (this._rendered_location = this._els.dhx_cal_data[0]),
                            (this._table_view = !1),
                            this.render_data(s, i);
                    } else {
                        var l = document.createDocumentFragment(),
                            _ = this._els.dhx_cal_data[0];
                        (this._rendered_location = l), this.render_data(t, i), _.appendChild(l), (this._rendered_location = _);
                    }
                    a && this.callEvent("onDataRender", []);
                }),
                (e._view_month_day = function (t) {
                    var i = e.getActionData(t).date;
                    e.callEvent("onViewMoreClick", [i]) && e.setCurrentView(i, "day");
                }),
                (e._render_month_link = function (t) {
                    for (var i = this._rendered_location, a = this._lame_clone(t), n = t._sday; n < t._eday; n++) {
                        (a._sday = n), (a._eday = n + 1);
                        var r = e.date,
                            s = e._min_date;
                        (s = r.add(s, a._sweek, "week")), (s = r.add(s, a._sday, "day"));
                        var o = e.getEvents(s, r.add(s, 1, "day")).length,
                            d = this._get_event_bar_pos(a),
                            l = d.x2 - d.x,
                            _ = document.createElement("div");
                        (_.onclick = function (t) {
                            e._view_month_day(t || event);
                        }),
                            (_.className = "dhx_month_link"),
                            (_.style.top = d.y + "px"),
                            (_.style.left = d.x + "px"),
                            (_.style.width = l + "px"),
                            (_.innerHTML = e.templates.month_events_link(s, o)),
                            this._rendered.push(_),
                            i.appendChild(_);
                    }
                }),
                (e._recalculate_timed = function (t) {
                    if (t) {
                        var i;
                        (i = "object" != typeof t ? this._events[t] : t), i && (i._timed = e.isOneDayEvent(i));
                    }
                }),
                e.attachEvent("onEventChanged", e._recalculate_timed),
                e.attachEvent("onEventAdded", e._recalculate_timed),
                (e.render_data = function (t, i) {
                    t = this._pre_render_events(t, i);
                    for (var a = {}, n = 0; n < t.length; n++)
                        if (this._table_view)
                            if ("month" != e._mode) this.render_event_bar(t[n]);
                            else {
                                var r = e.config.max_month_events;
                                r !== 1 * r || t[n]._sorder < r ? this.render_event_bar(t[n]) : void 0 !== r && t[n]._sorder == r && e._render_month_link(t[n]);
                            }
                        else {
                            var s = t[n],
                                o = e.locate_holder(s._sday);
                            if (!o) continue;
                            a[s._sday] || (a[s._sday] = { real: o, buffer: document.createDocumentFragment(), width: o.clientWidth });
                            var d = a[s._sday];
                            this.render_event(s, d.buffer, d.width);
                        }
                    for (var n in a) {
                        var d = a[n];
                        d.real && d.buffer && d.real.appendChild(d.buffer);
                    }
                }),
                (e._get_first_visible_cell = function (e) {
                    for (var t = 0; t < e.length; t++) if (-1 == (e[t].className || "").indexOf("dhx_scale_ignore")) return e[t];
                    return e[0];
                }),
                (e._pre_render_events = function (t, i) {
                    var a = this.xy.bar_height,
                        n = this._colsS.heights,
                        r = (this._colsS.heights = [0, 0, 0, 0, 0, 0, 0]),
                        s = this._els.dhx_cal_data[0];
                    if (((t = this._table_view ? this._pre_render_events_table(t, i) : this._pre_render_events_line(t, i)), this._table_view))
                        if (i) this._colsS.heights = n;
                        else {
                            var o = s.firstChild;
                            if (o.rows) {
                                for (var d = 0; d < o.rows.length; d++) {
                                    r[d]++;
                                    var l = o.rows[d].cells,
                                        _ = this._colsS.height - this.xy.month_head_height;
                                    if (r[d] * a > _) {
                                        var h = _;
                                        1 * this.config.max_month_events !== this.config.max_month_events || r[d] <= this.config.max_month_events
                                            ? (h = r[d] * a)
                                            : (this.config.max_month_events + 1) * a > _ && (h = (this.config.max_month_events + 1) * a);
                                        for (var c = 0; c < l.length; c++) l[c].childNodes[1].style.height = h + "px";
                                    }
                                    r[d] = (r[d - 1] || 0) + e._get_first_visible_cell(l).offsetHeight;
                                }
                                if ((r.unshift(0), o.parentNode.offsetHeight < o.parentNode.scrollHeight && !e._colsS.scroll_fix && e.xy.scroll_width)) {
                                    var u = e._colsS,
                                        g = u[u.col_length],
                                        f = u.heights.slice();
                                    (g -= e.xy.scroll_width || 0),
                                        this._calc_scale_sizes(g, this._min_date, this._max_date),
                                        (e._colsS.heights = f),
                                        this.set_xy(this._els.dhx_cal_header[0], g, this.xy.scale_height),
                                        e._render_scales(this._els.dhx_cal_header[0]),
                                        e._render_month_scale(this._els.dhx_cal_data[0], this._get_timeunit_start(), this._min_date),
                                        (u.scroll_fix = !0);
                                }
                            } else if ((t.length || "visible" != this._els.dhx_multi_day[0].style.visibility || (r[0] = -1), t.length || -1 == r[0])) {
                                var v = (o.parentNode.childNodes, (r[0] + 1) * a + 1),
                                    p = v,
                                    m = v + "px";
                                this.config.multi_day_height_limit && ((p = Math.min(v, this.config.multi_day_height_limit)), (m = p + "px")),
                                    (s.style.top = this._els.dhx_cal_navline[0].offsetHeight + this._els.dhx_cal_header[0].offsetHeight + p + "px"),
                                    (s.style.height = this._obj.offsetHeight - parseInt(s.style.top, 10) - (this.xy.margin_top || 0) + "px");
                                var x = this._els.dhx_multi_day[0];
                                (x.style.height = m), (x.style.visibility = -1 == r[0] ? "hidden" : "visible");
                                var b = this._els.dhx_multi_day[1];
                                (b.style.height = m),
                                    (b.style.visibility = -1 == r[0] ? "hidden" : "visible"),
                                    (b.className = r[0] ? "dhx_multi_day_icon" : "dhx_multi_day_icon_small"),
                                    (this._dy_shift = (r[0] + 1) * a),
                                    this.config.multi_day_height_limit && (this._dy_shift = Math.min(this.config.multi_day_height_limit, this._dy_shift)),
                                    (r[0] = 0),
                                    p != v && ((s.style.top = parseInt(s.style.top) + 2 + "px"), (x.style.overflowY = "auto"), (b.style.position = "fixed"), (b.style.top = ""), (b.style.left = ""));
                            }
                        }
                    return t;
                }),
                (e._get_event_sday = function (e) {
                    var t = this.date.day_start(new Date(e.start_date));
                    return Math.round((t.valueOf() - this._min_date.valueOf()) / 864e5);
                }),
                (e._get_event_mapped_end_date = function (e) {
                    var t = e.end_date;
                    if (this.config.separate_short_events) {
                        var i = (e.end_date - e.start_date) / 6e4;
                        i < this._min_mapped_duration && (t = this.date.add(t, this._min_mapped_duration - i, "minute"));
                    }
                    return t;
                }),
                (e._pre_render_events_line = function (e, t) {
                    e.sort(function (e, t) {
                        return e.start_date.valueOf() == t.start_date.valueOf() ? (e.id > t.id ? 1 : -1) : e.start_date > t.start_date ? 1 : -1;
                    });
                    var i = [],
                        a = [];
                    this._min_mapped_duration = Math.ceil((60 * this.xy.min_event_height) / this.config.hour_size_px);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            s = r.start_date,
                            o = r.end_date,
                            d = s.getHours(),
                            l = o.getHours();
                        if (((r._sday = this._get_event_sday(r)), this._ignores[r._sday])) e.splice(n, 1), n--;
                        else {
                            if ((i[r._sday] || (i[r._sday] = []), !t)) {
                                r._inner = !1;
                                for (var _ = i[r._sday]; _.length; ) {
                                    var h = _[_.length - 1],
                                        c = this._get_event_mapped_end_date(h);
                                    if (!(c.valueOf() <= r.start_date.valueOf())) break;
                                    _.splice(_.length - 1, 1);
                                }
                                for (var u = _.length, g = !1, f = 0; f < _.length; f++) {
                                    var h = _[f],
                                        c = this._get_event_mapped_end_date(h);
                                    if (c.valueOf() <= r.start_date.valueOf()) {
                                        (g = !0), (r._sorder = h._sorder), (u = f), (r._inner = !0);
                                        break;
                                    }
                                }
                                if ((_.length && (_[_.length - 1]._inner = !0), !g))
                                    if (_.length)
                                        if (_.length <= _[_.length - 1]._sorder) {
                                            if (_[_.length - 1]._sorder)
                                                for (f = 0; f < _.length; f++) {
                                                    for (var v = !1, p = 0; p < _.length; p++)
                                                        if (_[p]._sorder == f) {
                                                            v = !0;
                                                            break;
                                                        }
                                                    if (!v) {
                                                        r._sorder = f;
                                                        break;
                                                    }
                                                }
                                            else r._sorder = 0;
                                            r._inner = !0;
                                        } else {
                                            var m = _[0]._sorder;
                                            for (f = 1; f < _.length; f++) _[f]._sorder > m && (m = _[f]._sorder);
                                            (r._sorder = m + 1), (r._inner = !1);
                                        }
                                    else r._sorder = 0;
                                _.splice(u, u == _.length ? 0 : 1, r), _.length > (_.max_count || 0) ? ((_.max_count = _.length), (r._count = _.length)) : (r._count = r._count ? r._count : 1);
                            }
                            (d < this.config.first_hour || l >= this.config.last_hour) &&
                                (a.push(r),
                                (e[n] = r = this._copy_event(r)),
                                d < this.config.first_hour && (r.start_date.setHours(this.config.first_hour), r.start_date.setMinutes(0)),
                                l >= this.config.last_hour && (r.end_date.setMinutes(0), r.end_date.setHours(this.config.last_hour)),
                                r.start_date > r.end_date || d == this.config.last_hour) &&
                                (e.splice(n, 1), n--);
                        }
                    }
                    if (!t) {
                        for (var n = 0; n < e.length; n++) e[n]._count = i[e[n]._sday].max_count;
                        for (var n = 0; n < a.length; n++) a[n]._count = i[a[n]._sday].max_count;
                    }
                    return e;
                }),
                (e._time_order = function (e) {
                    e.sort(function (e, t) {
                        return e.start_date.valueOf() == t.start_date.valueOf() ? (e._timed && !t._timed ? 1 : !e._timed && t._timed ? -1 : e.id > t.id ? 1 : -1) : e.start_date > t.start_date ? 1 : -1;
                    });
                }),
                (e._is_any_multiday_cell_visible = function (t, i, a) {
                    for (var n = this._cols.length, r = !1, s = t, o = !0; s < i; ) {
                        o = !1;
                        var d = this.locate_holder_day(s, !1, a),
                            l = d % n;
                        if (!this._ignores[l]) {
                            r = !0;
                            break;
                        }
                        s = e.date.add(s, 1, "day");
                    }
                    return o || r;
                }),
                (e._pre_render_events_table = function (t, i) {
                    this._time_order(t);
                    for (var a, n = [], r = [[], [], [], [], [], [], []], s = this._colsS.heights, o = this._cols.length, d = {}, l = 0; l < t.length; l++) {
                        var _ = t[l],
                            h = _.id;
                        d[h] || (d[h] = { first_chunk: !0, last_chunk: !0 });
                        var c = d[h],
                            u = a || _.start_date,
                            g = _.end_date;
                        u < this._min_date && ((c.first_chunk = !1), (u = this._min_date)), g > this._max_date && ((c.last_chunk = !1), (g = this._max_date));
                        var f = this.locate_holder_day(u, !1, _);
                        if (((_._sday = f % o), !this._ignores[_._sday] || !_._timed)) {
                            var v = this.locate_holder_day(g, !0, _) || o;
                            (_._eday = v % o || o), (_._length = v - f), (_._sweek = Math.floor((this._correct_shift(u.valueOf(), 1) - this._min_date.valueOf()) / (864e5 * o)));
                            if (e._is_any_multiday_cell_visible(u, g, _)) {
                                var p,
                                    m = r[_._sweek];
                                for (p = 0; p < m.length && !(m[p]._eday <= _._sday); p++);
                                if (((_._sorder && i) || (_._sorder = p), _._sday + _._length <= o)) (a = null), n.push(_), (m[p] = _), (s[_._sweek] = m.length - 1), (_._first_chunk = c.first_chunk), (_._last_chunk = c.last_chunk);
                                else {
                                    var x = this._copy_event(_);
                                    (x.id = _.id),
                                        (x._length = o - _._sday),
                                        (x._eday = o),
                                        (x._sday = _._sday),
                                        (x._sweek = _._sweek),
                                        (x._sorder = _._sorder),
                                        (x.end_date = this.date.add(u, x._length, "day")),
                                        (x._first_chunk = c.first_chunk),
                                        c.first_chunk && (c.first_chunk = !1),
                                        n.push(x),
                                        (m[p] = x),
                                        (a = x.end_date),
                                        (s[_._sweek] = m.length - 1),
                                        l--;
                                }
                            }
                        }
                    }
                    return n;
                }),
                (e._copy_dummy = function () {
                    var e = new Date(this.start_date),
                        t = new Date(this.end_date);
                    (this.start_date = e), (this.end_date = t);
                }),
                (e._copy_event = function (e) {
                    return (this._copy_dummy.prototype = e), new this._copy_dummy();
                }),
                (e._rendered = []),
                (e.clear_view = function () {
                    for (var e = 0; e < this._rendered.length; e++) {
                        var t = this._rendered[e];
                        t.parentNode && t.parentNode.removeChild(t);
                    }
                    this._rendered = [];
                }),
                (e.updateEvent = function (e) {
                    var t = this.getEvent(e);
                    this.clear_event(e),
                        t &&
                            this.is_visible_events(t) &&
                            this.filter_event(e, t) &&
                            (this._table_view || this.config.multi_day || t._timed) &&
                            (this.config.update_render ? this.render_view_data() : "month" != this.getState().mode || this.getState().drag_id || this.isOneDayEvent(t) ? this.render_view_data([t], !0) : this.render_view_data());
                }),
                (e.clear_event = function (t) {
                    this.for_rendered(t, function (t, i) {
                        t.parentNode && t.parentNode.removeChild(t), e._rendered.splice(i, 1);
                    });
                }),
                (e._y_from_date = function (e) {
                    var t = 60 * e.getHours() + e.getMinutes();
                    return Math.round(((60 * t * 1e3 - 60 * this.config.first_hour * 60 * 1e3) * this.config.hour_size_px) / 36e5) % (24 * this.config.hour_size_px);
                }),
                (e._calc_event_y = function (t, i) {
                    i = i || 0;
                    var a = 60 * t.start_date.getHours() + t.start_date.getMinutes(),
                        n = 60 * t.end_date.getHours() + t.end_date.getMinutes() || 60 * e.config.last_hour;
                    return { top: this._y_from_date(t.start_date), height: Math.max(i, ((n - a) * this.config.hour_size_px) / 60) };
                }),
                (e.render_event = function (t, i, a) {
                    var n = e.xy.menu_width,
                        r = this.config.use_select_menu_space ? 0 : n;
                    if (!(t._sday < 0)) {
                        var s = e.locate_holder(t._sday);
                        if (s) {
                            i = i || s;
                            var o = this._calc_event_y(t, e.xy.min_event_height),
                                d = o.top,
                                l = o.height,
                                _ = t._count || 1,
                                h = t._sorder || 0;
                            a = a || s.clientWidth;
                            var c = Math.floor((a - r) / _),
                                u = h * c + 1;
                            if ((t._inner || (c *= _ - h), this.config.cascade_event_display)) {
                                var g = this.config.cascade_event_count,
                                    f = this.config.cascade_event_margin;
                                u = (h % g) * f;
                                var v = t._inner ? (((_ - h - 1) % g) * f) / 2 : 0;
                                c = Math.floor(a - r - u - v);
                            }
                            var p = this._render_v_bar(t, r + u, d, c, l, t._text_style, e.templates.event_header(t.start_date, t.end_date, t), e.templates.event_text(t.start_date, t.end_date, t));
                            if ((this._waiAria.eventAttr(t, p), this._rendered.push(p), i.appendChild(p), (u = u + parseInt(s.style.left, 10) + r), this._edit_id == t.id)) {
                                (p.style.zIndex = 1),
                                    (c = Math.max(c - 4, e.xy.editor_width)),
                                    (p = document.createElement("div")),
                                    p.setAttribute("event_id", t.id),
                                    this._waiAria.eventAttr(t, p),
                                    this.set_xy(p, c, l - 20, u, d + (e.xy.event_header_height || 14)),
                                    (p.className = "dhx_cal_event dhx_cal_editor"),
                                    t.color && (p.style.backgroundColor = t.color);
                                var m = e.templates.event_class(t.start_date, t.end_date, t);
                                m && (p.className += " " + m);
                                var x = document.createElement("div");
                                this.set_xy(x, c - 6, l - 26),
                                    (x.style.cssText += ";margin:2px 2px 2px 2px;overflow:hidden;"),
                                    p.appendChild(x),
                                    this._els.dhx_cal_data[0].appendChild(p),
                                    this._rendered.push(p),
                                    (x.innerHTML = "<textarea class='dhx_cal_editor'>" + t.text + "</textarea>"),
                                    (this._editor = x.querySelector("textarea")),
                                    this._quirks7 && (this._editor.style.height = l - 12 + "px"),
                                    (this._editor.onkeydown = function (t) {
                                        if ((t || event).shiftKey) return !0;
                                        var i = (t || event).keyCode;
                                        i == e.keys.edit_save && e.editStop(!0), i == e.keys.edit_cancel && e.editStop(!1), (i != e.keys.edit_save && i != e.keys.edit_cancel) || (t.preventDefault && t.preventDefault());
                                    }),
                                    (this._editor.onselectstart = function (e) {
                                        return ((e || event).cancelBubble = !0), !0;
                                    }),
                                    e._focus(this._editor, !0),
                                    (this._els.dhx_cal_data[0].scrollLeft = 0);
                            }
                            if (0 !== this.xy.menu_width && this._select_id == t.id) {
                                this.config.cascade_event_display && this._drag_mode && (p.style.zIndex = 1);
                                for (
                                    var b,
                                        y = this.config["icons_" + (this._edit_id == t.id ? "edit" : "select")],
                                        w = "",
                                        D = t.color ? "background-color: " + t.color + ";" : "",
                                        E = t.textColor ? "color: " + t.textColor + ";" : "",
                                        A = 0;
                                    A < y.length;
                                    A++
                                )
                                    (b = this._waiAria.eventMenuAttrString(y[A])), (w += "<div class='dhx_menu_icon " + y[A] + "' style='" + D + E + "' title='" + this.locale.labels[y[A]] + "'" + b + "></div>");
                                var k = this._render_v_bar(t, u - n + 1, d, n, 20 * y.length + 26 - 2, "", "<div style='" + D + E + "' class='dhx_menu_head'></div>", w, !0);
                                (k.style.left = u - n + 1), this._els.dhx_cal_data[0].appendChild(k), this._rendered.push(k);
                            }
                            this.config.drag_highlight && this._drag_id == t.id && this.highlightEventPosition(t);
                        }
                    }
                }),
                (e._render_v_bar = function (t, i, a, n, r, s, o, d, l) {
                    var _ = document.createElement("div"),
                        h = t.id,
                        c = l ? "dhx_cal_event dhx_cal_select_menu" : "dhx_cal_event",
                        u = e.getState();
                    u.drag_id == t.id && (c += " dhx_cal_event_drag"), u.select_id == t.id && (c += " dhx_cal_event_selected");
                    var g = e.templates.event_class(t.start_date, t.end_date, t);
                    g && (c = c + " " + g), this.config.cascade_event_display && (c += " dhx_cal_event_cascade");
                    var f = t.color ? "background-color:" + t.color + ";" : "",
                        v = t.textColor ? "color:" + t.textColor + ";" : "",
                        p = e._border_box_bvents(),
                        m = n - 2,
                        x = p ? m : n - 4,
                        b = p ? m : n - 6,
                        y = p ? m : n - (this._quirks ? 4 : 14),
                        w = p ? m - 2 : n - 8,
                        D = p ? r - this.xy.event_header_height - 1 : r - (this._quirks ? 20 : 30) + 1,
                        E = '<div event_id="' + h + '" class="' + c + '" style="position:absolute; top:' + a + "px; left:" + i + "px; width:" + x + "px; height:" + r + "px;" + (s || "") + '"></div>';
                    _.innerHTML = E;
                    var A = _.cloneNode(!0).firstChild;
                    if (!l && e.renderEvent(A, t, n, r, o, d)) return A;
                    A = _.firstChild;
                    var k = '<div class="dhx_event_move dhx_header" style=" width:' + b + "px;" + f + '" >&nbsp;</div>';
                    (k += '<div class="dhx_event_move dhx_title" style="' + f + v + '">' + o + "</div>"), (k += '<div class="dhx_body" style=" width:' + y + "px; height:" + D + "px;" + f + v + '">' + d + "</div>");
                    var S = "dhx_event_resize dhx_footer";
                    return (l || !1 === t._drag_resize) && (S = "dhx_resize_denied " + S), (k += '<div class="' + S + '" style=" width:' + w + "px;" + (l ? " margin-top:-1px;" : "") + f + v + '" ></div>'), (A.innerHTML = k), A;
                }),
                (e.renderEvent = function () {
                    return !1;
                }),
                (e.locate_holder = function (e) {
                    return "day" == this._mode ? this._els.dhx_cal_data[0].firstChild : this._els.dhx_cal_data[0].childNodes[e];
                }),
                (e.locate_holder_day = function (e, t) {
                    var i = Math.floor((this._correct_shift(e, 1) - this._min_date) / 864e5);
                    return t && this.date.time_part(e) && i++, i;
                }),
                (e._get_dnd_order = function (e, t, i) {
                    if (!this._drag_event) return e;
                    this._drag_event._orig_sorder ? (e = this._drag_event._orig_sorder) : (this._drag_event._orig_sorder = e);
                    for (var a = t * e; a + t > i; ) e--, (a -= t);
                    return (e = Math.max(e, 0));
                }),
                (e._get_event_bar_pos = function (t) {
                    var i = this._colsS[t._sday],
                        a = this._colsS[t._eday];
                    a == i && (a = this._colsS[t._eday + 1]);
                    var n = this.xy.bar_height,
                        r = t._sorder;
                    if (t.id == this._drag_id) {
                        var s = this._colsS.heights[t._sweek + 1] - this._colsS.heights[t._sweek] - this.xy.month_head_height;
                        r = e._get_dnd_order(r, n, s);
                    }
                    var o = r * n;
                    return { x: i, x2: a, y: this._colsS.heights[t._sweek] + (this._colsS.height ? this.xy.month_scale_height + 2 : 2) + o };
                }),
                (e.render_event_bar = function (t) {
                    var i = this._rendered_location,
                        a = this._get_event_bar_pos(t),
                        n = a.y,
                        r = a.x,
                        s = a.x2,
                        o = "";
                    if (s) {
                        var d = e.config.resize_month_events && "month" == this._mode && (!t._timed || e.config.resize_month_timed),
                            l = document.createElement("div"),
                            _ = t.hasOwnProperty("_first_chunk") && t._first_chunk,
                            h = t.hasOwnProperty("_last_chunk") && t._last_chunk,
                            c = d && (t._timed || _),
                            u = d && (t._timed || h),
                            g = "dhx_cal_event_clear";
                        (t._timed && !d) || (g = "dhx_cal_event_line"),
                            _ && (g += " dhx_cal_event_line_start"),
                            h && (g += " dhx_cal_event_line_end"),
                            c && (o += "<div class='dhx_event_resize dhx_event_resize_start'></div>"),
                            u && (o += "<div class='dhx_event_resize dhx_event_resize_end'></div>");
                        var f = e.templates.event_class(t.start_date, t.end_date, t);
                        f && (g += " " + f);
                        var v = t.color ? "background:" + t.color + ";" : "",
                            p = t.textColor ? "color:" + t.textColor + ";" : "",
                            m = ["position:absolute", "top:" + n + "px", "left:" + r + "px", "width:" + (s - r - 15) + "px", p, v, t._text_style || ""].join(";"),
                            x = "<div event_id='" + t.id + "' class='" + g + "' style='" + m + "'" + this._waiAria.eventBarAttrString(t) + ">";
                        d && (x += o),
                            "month" == e.getState().mode && (t = e.getEvent(t.id)),
                            t._timed && (x += e.templates.event_bar_date(t.start_date, t.end_date, t)),
                            (x += e.templates.event_bar_text(t.start_date, t.end_date, t) + "</div>"),
                            (x += "</div>"),
                            (l.innerHTML = x),
                            this._rendered.push(l.firstChild),
                            i.appendChild(l.firstChild);
                    }
                }),
                (e._locate_event = function (e) {
                    for (var t = null; e && !t && e.getAttribute; ) (t = e.getAttribute("event_id")), (e = e.parentNode);
                    return t;
                }),
                (e._locate_css = function (t, i, a) {
                    void 0 === a && (a = !0);
                    for (var n = t.target || t.srcElement, r = ""; n; ) {
                        if ((r = e._getClassName(n))) {
                            var s = r.indexOf(i);
                            if (s >= 0) {
                                if (!a) return n;
                                var o = 0 === s || !e._trim(r.charAt(s - 1)),
                                    d = s + i.length >= r.length || !e._trim(r.charAt(s + i.length));
                                if (o && d) return n;
                            }
                        }
                        n = n.parentNode;
                    }
                    return null;
                }),
                (e.edit = function (e) {
                    this._edit_id != e && (this.editStop(!1, e), (this._edit_id = e), this.updateEvent(e));
                }),
                (e.editStop = function (e, t) {
                    if (!t || this._edit_id != t) {
                        var i = this.getEvent(this._edit_id);
                        i && (e && (i.text = this._editor.value), (this._edit_id = null), (this._editor = null), this.updateEvent(i.id), this._edit_stop_event(i, e));
                    }
                }),
                (e._edit_stop_event = function (e, t) {
                    this._new_event ? (t ? this.callEvent("onEventAdded", [e.id, e]) : e && this.deleteEvent(e.id, !0), (this._new_event = null)) : t && this.callEvent("onEventChanged", [e.id, e]);
                }),
                (e.getEvents = function (e, t) {
                    var i = [];
                    for (var a in this._events) {
                        var n = this._events[a];
                        n && ((!e && !t) || (n.start_date < t && n.end_date > e)) && i.push(n);
                    }
                    return i;
                }),
                (e.getRenderedEvent = function (t) {
                    if (t) {
                        for (var i = e._rendered, a = 0; a < i.length; a++) {
                            var n = i[a];
                            if (n.getAttribute("event_id") == t) return n;
                        }
                        return null;
                    }
                }),
                (e.showEvent = function (t, i) {
                    var a = "number" == typeof t || "string" == typeof t ? e.getEvent(t) : t;
                    if (((i = i || e._mode), a && (!this.checkEvent("onBeforeEventDisplay") || this.callEvent("onBeforeEventDisplay", [a, i])))) {
                        var n = e.config.scroll_hour;
                        e.config.scroll_hour = a.start_date.getHours();
                        var r = e.config.preserve_scroll;
                        e.config.preserve_scroll = !1;
                        var s = a.color,
                            o = a.textColor;
                        if (
                            (e.config.highlight_displayed_event && ((a.color = e.config.displayed_event_color), (a.textColor = e.config.displayed_event_text_color)),
                            e.setCurrentView(new Date(a.start_date), i),
                            (a.color = s),
                            (a.textColor = o),
                            (e.config.scroll_hour = n),
                            (e.config.preserve_scroll = r),
                            e.matrix && e.matrix[i])
                        ) {
                            var d = e.getView(),
                                l = d.y_property,
                                _ = e.getEvent(a.id);
                            if (_) {
                                var h = d.posFromSection(_[l]),
                                    c = d.posFromDate(_.start_date),
                                    u = e.$container.querySelector(".dhx_timeline_data_wrapper");
                                (c -= (u.offsetWidth - d.dx) / 2), (h = h - u.offsetHeight / 2 + d.dy / 2), d.scrollTo({ left: c, top: h });
                            }
                        }
                        e.callEvent("onAfterEventDisplay", [a, i]);
                    }
                }),
                (e._append_drag_marker = function (t) {
                    if (!t.parentNode) {
                        var i = e._els.dhx_cal_data[0],
                            a = i.lastChild,
                            n = e._getClassName(a);
                        n.indexOf("dhx_scale_holder") < 0 && a.previousSibling && (a = a.previousSibling), (n = e._getClassName(a)), a && 0 === n.indexOf("dhx_scale_holder") && a.appendChild(t);
                    }
                }),
                (e._update_marker_position = function (t, i) {
                    var a = e._calc_event_y(i, 0);
                    (t.style.top = a.top + "px"), (t.style.height = a.height + "px");
                }),
                (e.highlightEventPosition = function (e) {
                    var t = document.createElement("div");
                    t.setAttribute("event_id", e.id), this._rendered.push(t), this._update_marker_position(t, e);
                    var i = this.templates.drag_marker_class(e.start_date, e.end_date, e),
                        a = this.templates.drag_marker_content(e.start_date, e.end_date, e);
                    (t.className = "dhx_drag_marker"), i && (t.className += " " + i), a && (t.innerHTML = a), this._append_drag_marker(t);
                }),
                (e._loaded = {}),
                (e._load = function (t, i) {
                    function a(t) {
                        e.on_load(t), e.callEvent("onLoadEnd", []);
                    }
                    if ((t = t || this._load_url)) {
                        (t += (-1 == t.indexOf("?") ? "?" : "&") + "timeshift=" + new Date().getTimezoneOffset()), this.config.prevent_cache && (t += "&uid=" + this.uid());
                        var n;
                        if (((i = i || this._date), this._load_mode)) {
                            var r = this.templates.load_format;
                            for (i = this.date[this._load_mode + "_start"](new Date(i.valueOf())); i > this._min_date; ) i = this.date.add(i, -1, this._load_mode);
                            n = i;
                            for (var s = !0; n < this._max_date; ) (n = this.date.add(n, 1, this._load_mode)), this._loaded[r(i)] && s ? (i = this.date.add(i, 1, this._load_mode)) : (s = !1);
                            var o = n;
                            do {
                                (n = o), (o = this.date.add(n, -1, this._load_mode));
                            } while (o > i && this._loaded[r(o)]);
                            if (n <= i) return !1;
                            for (e.$ajax.get(t + "&from=" + r(i) + "&to=" + r(n), a); i < n; ) (this._loaded[r(i)] = !0), (i = this.date.add(i, 1, this._load_mode));
                        } else e.$ajax.get(t, a);
                        return this.callEvent("onXLS", []), this.callEvent("onLoadStart", []), !0;
                    }
                }),
                (e._parsers = {}),
                (e._parsers.xml = {
                    canParse: function (t, i) {
                        if (i.responseXML && i.responseXML.firstChild) return !0;
                        try {
                            var a = e.$ajax.parse(i.responseText),
                                n = e.$ajax.xmltop("data", a);
                            if (n && "data" === n.tagName) return !0;
                        } catch (e) {}
                        return !1;
                    },
                    parse: function (t) {
                        var i;
                        if ((t.xmlDoc.responseXML || (t.xmlDoc.responseXML = e.$ajax.parse(t.xmlDoc.responseText)), (i = e.$ajax.xmltop("data", t.xmlDoc)), "data" != i.tagName)) return null;
                        var a = i.getAttribute("dhx_security");
                        a && (window.dhtmlx && (dhtmlx.security_key = a), (e.security_key = a));
                        for (var n = e.$ajax.xpath("//coll_options", t.xmlDoc), r = 0; r < n.length; r++) {
                            var s = n[r].getAttribute("for"),
                                o = e.serverList[s];
                            o || (e.serverList[s] = o = []), o.splice(0, o.length);
                            for (var d = e.$ajax.xpath(".//item", n[r]), l = 0; l < d.length; l++) {
                                for (var _ = d[l], h = _.attributes, c = { key: d[l].getAttribute("value"), label: d[l].getAttribute("label") }, u = 0; u < h.length; u++) {
                                    var g = h[u];
                                    "value" != g.nodeName && "label" != g.nodeName && (c[g.nodeName] = g.nodeValue);
                                }
                                o.push(c);
                            }
                        }
                        n.length && e.callEvent("onOptionsLoad", []);
                        for (var f = e.$ajax.xpath("//userdata", t.xmlDoc), r = 0; r < f.length; r++) {
                            var v = e._xmlNodeToJSON(f[r]);
                            e._userdata[v.name] = v.text;
                        }
                        var p = [];
                        i = e.$ajax.xpath("//event", t.xmlDoc);
                        for (var r = 0; r < i.length; r++) {
                            var m = (p[r] = e._xmlNodeToJSON(i[r]));
                            e._init_event(m);
                        }
                        return p;
                    },
                }),
                (e.json = e._parsers.json = {
                    canParse: function (e) {
                        if (e && "object" == typeof e) return !0;
                        if ("string" == typeof e)
                            try {
                                var t = JSON.parse(e);
                                return "[object Object]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t);
                            } catch (e) {
                                return !1;
                            }
                        return !1;
                    },
                    parse: function (t) {
                        var i = [];
                        "string" == typeof t && (t = JSON.parse(t)),
                            (i = "[object Array]" === Object.prototype.toString.call(t) ? t : t ? t.data : []),
                            (i = i || []),
                            t.dhx_security && (window.dhtmlx && (dhtmlx.security_key = t.dhx_security), (e.security_key = t.dhx_security));
                        var a = t && t.collections ? t.collections : {},
                            n = !1;
                        for (var r in a)
                            if (a.hasOwnProperty(r)) {
                                n = !0;
                                var s = a[r],
                                    o = e.serverList[r];
                                o || (e.serverList[r] = o = []), o.splice(0, o.length);
                                for (var d = 0; d < s.length; d++) {
                                    var l = s[d],
                                        _ = { key: l.value, label: l.label };
                                    for (var h in l)
                                        if (l.hasOwnProperty(h)) {
                                            if ("value" == h || "label" == h) continue;
                                            _[h] = l[h];
                                        }
                                    o.push(_);
                                }
                            }
                        n && e.callEvent("onOptionsLoad", []);
                        for (var c = [], u = 0; u < i.length; u++) {
                            var g = i[u];
                            e._init_event(g), c.push(g);
                        }
                        return c;
                    },
                }),
                (e.ical = e._parsers.ical = {
                    canParse: function (e) {
                        return "string" == typeof e && new RegExp("^BEGIN:VCALENDAR").test(e);
                    },
                    parse: function (e) {
                        var t = e.match(RegExp(this.c_start + "[^\f]*" + this.c_end, ""));
                        if (t.length) {
                            (t[0] = t[0].replace(/[\r\n]+ /g, "")), (t[0] = t[0].replace(/[\r\n]+(?=[a-z \t])/g, " ")), (t[0] = t[0].replace(/\;[^:\r\n]*:/g, ":"));
                            for (var i, a = [], n = RegExp("(?:" + this.e_start + ")([^\f]*?)(?:" + this.e_end + ")", "g"); null !== (i = n.exec(t)); ) {
                                for (var r, s = {}, o = /[^\r\n]+[\r\n]+/g; null !== (r = o.exec(i[1])); ) this.parse_param(r.toString(), s);
                                s.uid && !s.id && (s.id = s.uid), a.push(s);
                            }
                            return a;
                        }
                    },
                    parse_param: function (e, t) {
                        var i = e.indexOf(":");
                        if (-1 != i) {
                            var a = e.substr(0, i).toLowerCase(),
                                n = e
                                    .substr(i + 1)
                                    .replace(/\\\,/g, ",")
                                    .replace(/[\r\n]+$/, "");
                            "summary" == a ? (a = "text") : "dtstart" == a ? ((a = "start_date"), (n = this.parse_date(n, 0, 0))) : "dtend" == a && ((a = "end_date"), (n = this.parse_date(n, 0, 0))), (t[a] = n);
                        }
                    },
                    parse_date: function (t, i, a) {
                        var n = t.split("T"),
                            r = !1;
                        n[1] && ((i = n[1].substr(0, 2)), (a = n[1].substr(2, 2)), (r = !("Z" != n[1][6])));
                        var s = n[0].substr(0, 4),
                            o = parseInt(n[0].substr(4, 2), 10) - 1,
                            d = n[0].substr(6, 2);
                        return e.config.server_utc || r ? new Date(Date.UTC(s, o, d, i, a)) : new Date(s, o, d, i, a);
                    },
                    c_start: "BEGIN:VCALENDAR",
                    e_start: "BEGIN:VEVENT",
                    e_end: "END:VEVENT",
                    c_end: "END:VCALENDAR",
                }),
                (e.on_load = function (e) {
                    this.callEvent("onBeforeParse", []);
                    var t,
                        i = !1,
                        a = !1;
                    for (var n in this._parsers) {
                        var r = this._parsers[n];
                        if (r.canParse(e.xmlDoc.responseText, e.xmlDoc)) {
                            try {
                                var s = e.xmlDoc.responseText;
                                "xml" === n && (s = e), (t = r.parse(s)), t || (i = !0);
                            } catch (e) {
                                i = !0;
                            }
                            a = !0;
                            break;
                        }
                    }
                    if (!a)
                        if (this._process && this[this._process])
                            try {
                                t = this[this._process].parse(e.xmlDoc.responseText);
                            } catch (e) {
                                i = !0;
                            }
                        else i = !0;
                    (i || (e.xmlDoc.status && e.xmlDoc.status >= 400)) && (this.callEvent("onLoadError", [e.xmlDoc]), (t = [])), this._process_loading(t), this.callEvent("onXLE", []), this.callEvent("onParse", []);
                }),
                (e._process_loading = function (e) {
                    (this._loading = !0), (this._not_render = !0);
                    for (var t = 0; t < e.length; t++) this.callEvent("onEventLoading", [e[t]]) && this.addEvent(e[t]);
                    (this._not_render = !1), this._render_wait && this.render_view_data(), (this._loading = !1), this._after_call && this._after_call(), (this._after_call = null);
                }),
                (e._init_event = function (t) {
                    (t.text = t.text || t._tagvalue || ""), (t.start_date = e._init_date(t.start_date)), (t.end_date = e._init_date(t.end_date));
                }),
                (e._init_date = function (t) {
                    return t ? ("string" == typeof t ? e._helpers.parseDate(t) : new Date(t)) : null;
                }),
                (e.json = {}),
                (e.json.parse = function (t) {
                    var i = [];
                    "string" == typeof t && (t = JSON.parse(t)),
                        (i = "[object Array]" === Object.prototype.toString.call(t) ? t : t ? t.data : []),
                        (i = i || []),
                        t.dhx_security && (window.dhtmlx && (dhtmlx.security_key = t.dhx_security), (e.security_key = t.dhx_security));
                    var a = t && t.collections ? t.collections : {},
                        n = !1;
                    for (var r in a)
                        if (a.hasOwnProperty(r)) {
                            n = !0;
                            var s = a[r],
                                o = e.serverList[r];
                            o || (e.serverList[r] = o = []), o.splice(0, o.length);
                            for (var d = 0; d < s.length; d++) {
                                var l = s[d],
                                    _ = { key: l.value, label: l.label };
                                for (var h in l)
                                    if (l.hasOwnProperty(h)) {
                                        if ("value" == h || "label" == h) continue;
                                        _[h] = l[h];
                                    }
                                o.push(_);
                            }
                        }
                    n && e.callEvent("onOptionsLoad", []);
                    for (var c = [], u = 0; u < i.length; u++) {
                        var g = i[u];
                        e._init_event(g), c.push(g);
                    }
                    return c;
                }),
                (e.parse = function (e, t) {
                    (this._process = t), this.on_load({ xmlDoc: { responseText: e } });
                }),
                (e.load = function (e, t) {
                    "string" == typeof t && ((this._process = t), (t = arguments[2])), (this._load_url = e), (this._after_call = t), this._load(e, this._date);
                }),
                (e.setLoadMode = function (e) {
                    "all" == e && (e = ""), (this._load_mode = e);
                }),
                (e.serverList = function (e, t) {
                    return t ? ((this.serverList[e] = t.slice(0)), this.serverList[e]) : ((this.serverList[e] = this.serverList[e] || []), this.serverList[e]);
                }),
                (e._userdata = {}),
                (e._xmlNodeToJSON = function (e) {
                    for (var t = {}, i = 0; i < e.attributes.length; i++) t[e.attributes[i].name] = e.attributes[i].value;
                    for (var i = 0; i < e.childNodes.length; i++) {
                        var a = e.childNodes[i];
                        1 == a.nodeType && (t[a.tagName] = a.firstChild ? a.firstChild.nodeValue : "");
                    }
                    return t.text || (t.text = e.firstChild ? e.firstChild.nodeValue : ""), t;
                }),
                e.attachEvent("onXLS", function () {
                    if (!0 === this.config.show_loading) {
                        var e;
                        (e = this.config.show_loading = document.createElement("div")),
                            (e.className = "dhx_loading"),
                            (e.style.left = Math.round((this._x - 128) / 2) + "px"),
                            (e.style.top = Math.round((this._y - 15) / 2) + "px"),
                            this._obj.appendChild(e);
                    }
                }),
                e.attachEvent("onXLE", function () {
                    var e = this.config.show_loading;
                    e && "object" == typeof e && (e.parentNode && e.parentNode.removeChild(e), (this.config.show_loading = !0));
                }),
                (e._lightbox_controls = {}),
                (e.formSection = function (t) {
                    var i = this.config.lightbox.sections,
                        a = 0;
                    for (a; a < i.length && i[a].name != t; a++);
                    var n = i[a];
                    e._lightbox || e.getLightbox();
                    var r = document.getElementById(n.id),
                        s = r.nextSibling,
                        o = {
                            section: n,
                            header: r,
                            node: s,
                            getValue: function (t) {
                                return e.form_blocks[n.type].get_value(s, t || {}, n);
                            },
                            setValue: function (t, i) {
                                return e.form_blocks[n.type].set_value(s, t, i || {}, n);
                            },
                        },
                        d = e._lightbox_controls["get_" + n.type + "_control"];
                    return d ? d(o) : o;
                }),
                (e._lightbox_controls.get_template_control = function (e) {
                    return (e.control = e.node), e;
                }),
                (e._lightbox_controls.get_select_control = function (e) {
                    return (e.control = e.node.getElementsByTagName("select")[0]), e;
                }),
                (e._lightbox_controls.get_textarea_control = function (e) {
                    return (e.control = e.node.getElementsByTagName("textarea")[0]), e;
                }),
                (e._lightbox_controls.get_time_control = function (e) {
                    return (e.control = e.node.getElementsByTagName("select")), e;
                }),
                (e._lightbox_controls.defaults = { template: { height: 30 }, textarea: { height: 200 }, select: { height: 23 }, time: { height: 20 } }),
                (e.form_blocks = {
                    template: {
                        render: function (t) {
                            var i = e._lightbox_controls.defaults.template,
                                a = i ? i.height : 30;
                            return "<div class='dhx_cal_ltext dhx_cal_template' style='height:" + (t.height || a || 30) + "px;'></div>";
                        },
                        set_value: function (e, t, i, a) {
                            e.innerHTML = t || "";
                        },
                        get_value: function (e, t, i) {
                            return e.innerHTML || "";
                        },
                        focus: function (e) {},
                    },
                    textarea: {
                        render: function (t) {
                            var i = e._lightbox_controls.defaults.textarea,
                                a = i ? i.height : 200;
                            return "<div class='dhx_cal_ltext' style='height:" + (t.height || a || "130") + "px;'><textarea></textarea></div>";
                        },
                        set_value: function (t, i, a) {
                            e.form_blocks.textarea._get_input(t).value = i || "";
                        },
                        get_value: function (t, i) {
                            return e.form_blocks.textarea._get_input(t).value;
                        },
                        focus: function (t) {
                            var i = e.form_blocks.textarea._get_input(t);
                            e._focus(i, !0);
                        },
                        _get_input: function (e) {
                            return e.getElementsByTagName("textarea")[0];
                        },
                    },
                    select: {
                        render: function (t) {
                            for (
                                var i = e._lightbox_controls.defaults.select, a = i ? i.height : 23, n = (t.height || a || "23") + "px", r = "<div class='dhx_cal_ltext' style='height:" + n + ";'><select style='width:100%;'>", s = 0;
                                s < t.options.length;
                                s++
                            )
                                r += "<option value='" + t.options[s].key + "'>" + t.options[s].label + "</option>";
                            return (r += "</select></div>");
                        },
                        set_value: function (e, t, i, a) {
                            var n = e.firstChild;
                            !n._dhx_onchange && a.onchange && ((n.onchange = a.onchange), (n._dhx_onchange = !0)), void 0 === t && (t = (n.options[0] || {}).value), (n.value = t || "");
                        },
                        get_value: function (e, t) {
                            return e.firstChild.value;
                        },
                        focus: function (t) {
                            var i = t.firstChild;
                            e._focus(i, !0);
                        },
                    },
                    time: {
                        render: function (t) {
                            t.time_format || (t.time_format = ["%H:%i", "%d", "%m", "%Y"]), (t._time_format_order = {});
                            var i = t.time_format,
                                a = e.config,
                                n = e.date.date_part(e._currentDate()),
                                r = 1440,
                                s = 0;
                            e.config.limit_time_select && ((r = 60 * a.last_hour + 1), (s = 60 * a.first_hour), n.setHours(a.first_hour));
                            for (var o = "", d = 0; d < i.length; d++) {
                                var l = i[d];
                                d > 0 && (o += " ");
                                var _ = "",
                                    h = "";
                                switch (l) {
                                    case "%Y":
                                        (_ = "dhx_lightbox_year_select"), (t._time_format_order[3] = d);
                                        for (var c = n.getFullYear() - 5, u = 0; u < 10; u++) h += "<option value='" + (c + u) + "'>" + (c + u) + "</option>";
                                        break;
                                    case "%m":
                                        (_ = "dhx_lightbox_month_select"), (t._time_format_order[2] = d);
                                        for (var u = 0; u < 12; u++) h += "<option value='" + u + "'>" + this.locale.date.month_full[u] + "</option>";
                                        break;
                                    case "%d":
                                        (_ = "dhx_lightbox_day_select"), (t._time_format_order[1] = d);
                                        for (var u = 1; u < 32; u++) h += "<option value='" + u + "'>" + u + "</option>";
                                        break;
                                    case "%H:%i":
                                        (_ = "dhx_lightbox_time_select"), (t._time_format_order[0] = d);
                                        var u = s,
                                            g = n.getDate();
                                        for (t._time_values = []; u < r; ) {
                                            (h += "<option value='" + u + "'>" + this.templates.time_picker(n) + "</option>"), t._time_values.push(u), n.setTime(n.valueOf() + 60 * this.config.time_step * 1e3);
                                            u = 24 * (n.getDate() != g ? 1 : 0) * 60 + 60 * n.getHours() + n.getMinutes();
                                        }
                                }
                                if (h) {
                                    var f = e._waiAria.lightboxSelectAttrString(l);
                                    o += "<select class='" + _ + "' " + (t.readonly ? "disabled='disabled'" : "") + f + ">" + h + "</select> ";
                                }
                            }
                            var v = e._lightbox_controls.defaults.select;
                            return (
                                "<div style='height:" +
                                ((v ? v.height : 23) || 30) +
                                "px;padding-top:0px;font-size:inherit;' class='dhx_section_time'>" +
                                o +
                                "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>" +
                                o +
                                "</div>"
                            );
                        },
                        set_value: function (t, i, a, n) {
                            function r(e, t, i) {
                                for (var a = n._time_values, r = 60 * i.getHours() + i.getMinutes(), s = r, o = !1, d = 0; d < a.length; d++) {
                                    var l = a[d];
                                    if (l === r) {
                                        o = !0;
                                        break;
                                    }
                                    l < r && (s = l);
                                }
                                (e[t + _[0]].value = o ? r : s), o || s || (e[t + _[0]].selectedIndex = -1), (e[t + _[1]].value = i.getDate()), (e[t + _[2]].value = i.getMonth()), (e[t + _[3]].value = i.getFullYear());
                            }
                            var s,
                                o,
                                d = e.config,
                                l = t.getElementsByTagName("select"),
                                _ = n._time_format_order;
                            if (d.full_day) {
                                if (!t._full_day) {
                                    var h = "<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> " + e.locale.labels.full_day + "&nbsp;</label></input>";
                                    e.config.wide_form || (h = t.previousSibling.innerHTML + h), (t.previousSibling.innerHTML = h), (t._full_day = !0);
                                }
                                var c = t.previousSibling.getElementsByTagName("input")[0];
                                (c.checked = 0 === e.date.time_part(a.start_date) && 0 === e.date.time_part(a.end_date)),
                                    (l[_[0]].disabled = c.checked),
                                    (l[_[0] + l.length / 2].disabled = c.checked),
                                    (c.onclick = function () {
                                        if (c.checked) {
                                            var i = {};
                                            e.form_blocks.time.get_value(t, i, n),
                                                (s = e.date.date_part(i.start_date)),
                                                (o = e.date.date_part(i.end_date)),
                                                (+o == +s || (+o >= +s && (0 !== a.end_date.getHours() || 0 !== a.end_date.getMinutes()))) && (o = e.date.add(o, 1, "day"));
                                        } else (s = null), (o = null);
                                        (l[_[0]].disabled = c.checked), (l[_[0] + l.length / 2].disabled = c.checked), r(l, 0, s || a.start_date), r(l, 4, o || a.end_date);
                                    });
                            }
                            if (d.auto_end_date && d.event_duration)
                                for (
                                    var u = function () {
                                            (s = new Date(l[_[3]].value, l[_[2]].value, l[_[1]].value, 0, l[_[0]].value)), (o = new Date(s.getTime() + 60 * e.config.event_duration * 1e3)), r(l, 4, o);
                                        },
                                        g = 0;
                                    g < 4;
                                    g++
                                )
                                    l[g].onchange = u;
                            r(l, 0, a.start_date), r(l, 4, a.end_date);
                        },
                        get_value: function (t, i, a) {
                            var n = t.getElementsByTagName("select"),
                                r = a._time_format_order;
                            if (
                                ((i.start_date = new Date(n[r[3]].value, n[r[2]].value, n[r[1]].value, 0, n[r[0]].value)),
                                (i.end_date = new Date(n[r[3] + 4].value, n[r[2] + 4].value, n[r[1] + 4].value, 0, n[r[0] + 4].value)),
                                !n[r[3]].value || !n[r[3] + 4].value)
                            ) {
                                var s = e.getEvent(e._lightbox_id);
                                s && ((i.start_date = s.start_date), (i.end_date = s.end_date));
                            }
                            return i.end_date <= i.start_date && (i.end_date = e.date.add(i.start_date, e.config.time_step, "minute")), { start_date: new Date(i.start_date), end_date: new Date(i.end_date) };
                        },
                        focus: function (t) {
                            e._focus(t.getElementsByTagName("select")[0]);
                        },
                    },
                }),
                (e.showCover = function (e) {
                    if (e) {
                        e.style.display = "block";
                        var t = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
                            i = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft,
                            a = window.innerHeight || document.documentElement.clientHeight;
                        (e.style.top = t ? Math.round(t + Math.max((a - e.offsetHeight) / 2, 0)) + "px" : Math.round(Math.max((a - e.offsetHeight) / 2, 0) + 9) + "px"),
                            document.documentElement.scrollWidth > document.body.offsetWidth
                                ? (e.style.left = Math.round(i + (document.body.offsetWidth - e.offsetWidth) / 2) + "px")
                                : (e.style.left = Math.round((document.body.offsetWidth - e.offsetWidth) / 2) + "px");
                    }
                    this.show_cover();
                }),
                (e.showLightbox = function (e) {
                    if (e) {
                        if (!this.callEvent("onBeforeLightbox", [e])) return void (this._new_event && (this._new_event = null));
                        var t = this.getLightbox();
                        this.showCover(t), this._fill_lightbox(e, t), this._waiAria.lightboxVisibleAttr(t), this.callEvent("onLightbox", [e]);
                    }
                }),
                (e._fill_lightbox = function (t, i) {
                    var a = this.getEvent(t),
                        n = i.getElementsByTagName("span"),
                        r = [];
                    if (e.templates.lightbox_header) {
                        r.push("");
                        var s = e.templates.lightbox_header(a.start_date, a.end_date, a);
                        r.push(s), (n[1].innerHTML = ""), (n[2].innerHTML = s);
                    } else {
                        var o = this.templates.event_header(a.start_date, a.end_date, a),
                            d = (this.templates.event_bar_text(a.start_date, a.end_date, a) || "").substr(0, 70);
                        r.push(o), r.push(d), (n[1].innerHTML = o), (n[2].innerHTML = d);
                    }
                    this._waiAria.lightboxHeader(i, r.join(" "));
                    for (var l = this.config.lightbox.sections, _ = 0; _ < l.length; _++) {
                        var h = l[_],
                            c = e._get_lightbox_section_node(h),
                            u = this.form_blocks[h.type],
                            g = void 0 !== a[h.map_to] ? a[h.map_to] : h.default_value;
                        u.set_value.call(this, c, g, a, h), l[_].focus && u.focus.call(this, c);
                    }
                    e._lightbox_id = t;
                }),
                (e._get_lightbox_section_node = function (e) {
                    return document.getElementById(e.id).nextSibling;
                }),
                (e._lightbox_out = function (e) {
                    for (var t = this.config.lightbox.sections, i = 0; i < t.length; i++) {
                        var a = document.getElementById(t[i].id);
                        a = a ? a.nextSibling : a;
                        var n = this.form_blocks[t[i].type],
                            r = n.get_value.call(this, a, e, t[i]);
                        "auto" != t[i].map_to && (e[t[i].map_to] = r);
                    }
                    return e;
                }),
                (e._empty_lightbox = function (t) {
                    var i = e._lightbox_id,
                        a = this.getEvent(i);
                    this.getLightbox();
                    this._lame_copy(a, t), this.setEvent(a.id, a), this._edit_stop_event(a, !0), this.render_view_data();
                }),
                (e.hide_lightbox = function (t) {
                    e.endLightbox(!1, this.getLightbox());
                }),
                (e.hideCover = function (e) {
                    e && (e.style.display = "none"), this.hide_cover();
                }),
                (e.hide_cover = function () {
                    this._cover && this._cover.parentNode.removeChild(this._cover), (this._cover = null);
                }),
                (e.show_cover = function () {
                    if (!this._cover) {
                        (this._cover = document.createElement("div")), (this._cover.className = "dhx_cal_cover");
                        var e = void 0 !== document.height ? document.height : document.body.offsetHeight,
                            t = document.documentElement ? document.documentElement.scrollHeight : 0;
                        (this._cover.style.height = Math.max(e, t) + "px"), document.body.appendChild(this._cover);
                    }
                }),
                (e.save_lightbox = function () {
                    var e = this._lightbox_out({}, this._lame_copy(this.getEvent(this._lightbox_id)));
                    (this.checkEvent("onEventSave") && !this.callEvent("onEventSave", [this._lightbox_id, e, this._new_event])) || (this._empty_lightbox(e), this.hide_lightbox());
                }),
                (e.startLightbox = function (e, t) {
                    (this._lightbox_id = e), (this._custom_lightbox = !0), (this._temp_lightbox = this._lightbox), (this._lightbox = t), this.showCover(t);
                }),
                (e.endLightbox = function (t, i) {
                    var i = i || e.getLightbox(),
                        a = e.getEvent(this._lightbox_id);
                    a && this._edit_stop_event(a, t),
                        t && e.render_view_data(),
                        this.hideCover(i),
                        this._custom_lightbox && ((this._lightbox = this._temp_lightbox), (this._custom_lightbox = !1)),
                        (this._temp_lightbox = this._lightbox_id = null),
                        this._waiAria.lightboxHiddenAttr(i),
                        this.callEvent("onAfterLightbox", []);
                }),
                (e.resetLightbox = function () {
                    e._lightbox && !e._custom_lightbox && e._lightbox.parentNode.removeChild(e._lightbox), (e._lightbox = null);
                }),
                (e.cancel_lightbox = function () {
                    this.callEvent("onEventCancel", [this._lightbox_id, this._new_event]), this.hide_lightbox();
                }),
                (e._init_lightbox_events = function () {
                    (this.getLightbox().onclick = function (t) {
                        var i = t ? t.target : event.srcElement;
                        if ((i.className || (i = i.previousSibling), !(i && i.className && e._getClassName(i).indexOf("dhx_btn_set") > -1) || (i = i.querySelector("[dhx_button]")))) {
                            var a = e._getClassName(i);
                            if (i && a)
                                switch (a) {
                                    case "dhx_save_btn":
                                        e.save_lightbox();
                                        break;
                                    case "dhx_delete_btn":
                                        var n = e.locale.labels.confirm_deleting;
                                        e._dhtmlx_confirm(n, e.locale.labels.title_confirm_deleting, function () {
                                            e.deleteEvent(e._lightbox_id), (e._new_event = null), e.hide_lightbox();
                                        });
                                        break;
                                    case "dhx_cancel_btn":
                                        e.cancel_lightbox();
                                        break;
                                    default:
                                        if (i.getAttribute("dhx_button")) e.callEvent("onLightboxButton", [a, i, t]);
                                        else {
                                            var r, s, o;
                                            -1 != a.indexOf("dhx_custom_button") &&
                                                (-1 != a.indexOf("dhx_custom_button_") ? ((r = i.parentNode.getAttribute("index")), (o = i.parentNode.parentNode)) : ((r = i.getAttribute("index")), (o = i.parentNode), (i = i.firstChild))),
                                                r && ((s = e.form_blocks[e.config.lightbox.sections[r].type]), s.button_click(r, i, o, o.nextSibling));
                                        }
                                }
                        }
                    }),
                        (this.getLightbox().onkeydown = function (t) {
                            var i = t || window.event,
                                a = t.target || t.srcElement,
                                n = a.querySelector("[dhx_button]");
                            switch ((n || (n = a.parentNode.querySelector(".dhx_custom_button, .dhx_readonly")), (t || i).keyCode)) {
                                case 32:
                                    if ((t || i).shiftKey) return;
                                    n && n.click && n.click();
                                    break;
                                case e.keys.edit_save:
                                    if ((t || i).shiftKey) return;
                                    n && n.click ? n.click() : e.save_lightbox();
                                    break;
                                case e.keys.edit_cancel:
                                    e.cancel_lightbox();
                            }
                        });
                }),
                (e.setLightboxSize = function () {
                    var t = this._lightbox;
                    if (t) {
                        var i = t.childNodes[1];
                        (i.style.height = "0px"), (i.style.height = i.scrollHeight + "px"), (t.style.height = i.scrollHeight + e.xy.lightbox_additional_height + "px"), (i.style.height = i.scrollHeight + "px");
                    }
                }),
                (e._init_dnd_events = function () {
                    e.event(document.body, "mousemove", e._move_while_dnd), e.event(document.body, "mouseup", e._finish_dnd), (e._init_dnd_events = function () {});
                }),
                (e._move_while_dnd = function (t) {
                    if (e._dnd_start_lb) {
                        document.dhx_unselectable || ((document.body.className += " dhx_unselectable"), (document.dhx_unselectable = !0));
                        var i = e.getLightbox(),
                            a = t && t.target ? [t.pageX, t.pageY] : [event.clientX, event.clientY];
                        (i.style.top = e._lb_start[1] + a[1] - e._dnd_start_lb[1] + "px"), (i.style.left = e._lb_start[0] + a[0] - e._dnd_start_lb[0] + "px");
                    }
                }),
                (e._ready_to_dnd = function (t) {
                    var i = e.getLightbox();
                    (e._lb_start = [parseInt(i.style.left, 10), parseInt(i.style.top, 10)]), (e._dnd_start_lb = t && t.target ? [t.pageX, t.pageY] : [event.clientX, event.clientY]);
                }),
                (e._finish_dnd = function () {
                    e._lb_start && ((e._lb_start = e._dnd_start_lb = !1), (document.body.className = document.body.className.replace(" dhx_unselectable", "")), (document.dhx_unselectable = !1));
                }),
                (e.getLightbox = function () {
                    if (!this._lightbox) {
                        var t = document.createElement("div");
                        (t.className = "dhx_cal_light"),
                            e.config.wide_form && (t.className += " dhx_cal_light_wide"),
                            e.form_blocks.recurring && (t.className += " dhx_cal_light_rec"),
                            /msie|MSIE 6/.test(navigator.userAgent) && (t.className += " dhx_ie6"),
                            (t.style.visibility = "hidden");
                        for (var i = this._lightbox_template, a = this.config.buttons_left, n = "", r = 0; r < a.length; r++)
                            (n = this._waiAria.lightboxButtonAttrString(a[r])),
                                (i += "<div " + n + " class='dhx_btn_set dhx_left_btn_set " + a[r] + "_set'><div dhx_button='1' class='" + a[r] + "'></div><div>" + e.locale.labels[a[r]] + "</div></div>");
                        a = this.config.buttons_right;
                        for (var r = 0; r < a.length; r++)
                            (n = this._waiAria.lightboxButtonAttrString(a[r])),
                                (i += "<div " + n + " class='dhx_btn_set dhx_right_btn_set " + a[r] + "_set' style='float:right;'><div dhx_button='1' class='" + a[r] + "'></div><div>" + e.locale.labels[a[r]] + "</div></div>");
                        (i += "</div>"),
                            (t.innerHTML = i),
                            e.config.drag_lightbox &&
                                ((t.firstChild.onmousedown = e._ready_to_dnd),
                                (t.firstChild.onselectstart = function () {
                                    return !1;
                                }),
                                (t.firstChild.style.cursor = "move"),
                                e._init_dnd_events()),
                            this._waiAria.lightboxAttr(t),
                            document.body.insertBefore(t, document.body.firstChild),
                            (this._lightbox = t);
                        var s = this.config.lightbox.sections;
                        i = "";
                        for (var r = 0; r < s.length; r++) {
                            var o = this.form_blocks[s[r].type];
                            if (o) {
                                s[r].id = "area_" + this.uid();
                                var d = "";
                                if (s[r].button) {
                                    var n = e._waiAria.lightboxSectionButtonAttrString(this.locale.labels["button_" + s[r].button]);
                                    d = "<div " + n + " class='dhx_custom_button' index='" + r + "'><div class='dhx_custom_button_" + s[r].button + "'></div><div>" + this.locale.labels["button_" + s[r].button] + "</div></div>";
                                }
                                this.config.wide_form && (i += "<div class='dhx_wrap_section'>");
                                var l = this.locale.labels["section_" + s[r].name];
                                "string" != typeof l && (l = s[r].name), (i += "<div id='" + s[r].id + "' class='dhx_cal_lsection'>" + d + "<label>" + l + "</label></div>" + o.render.call(this, s[r])), (i += "</div>");
                            }
                        }
                        for (var _ = t.getElementsByTagName("div"), r = 0; r < _.length; r++) {
                            var h = _[r];
                            if ("dhx_cal_larea" == e._getClassName(h)) {
                                h.innerHTML = i;
                                break;
                            }
                        }
                        e._bindLightboxLabels(s), this.setLightboxSize(), this._init_lightbox_events(this), (t.style.display = "none"), (t.style.visibility = "visible");
                    }
                    return this._lightbox;
                }),
                (e._bindLightboxLabels = function (t) {
                    for (var i = 0; i < t.length; i++) {
                        var a = t[i];
                        if (a.id && document.getElementById(a.id)) {
                            for (var n = document.getElementById(a.id), r = n.querySelector("label"), s = e._get_lightbox_section_node(a); s && !s.querySelector; ) s = s.nextSibling;
                            var o = !0;
                            if (s) {
                                var d = s.querySelector("input, select, textarea");
                                d && ((a.inputId = d.id || "input_" + e.uid()), d.id || (d.id = a.inputId), r.setAttribute("for", a.inputId), (o = !1));
                            }
                            if (o) {
                                e.form_blocks[a.type].focus &&
                                    (r.onclick = (function (t) {
                                        return function () {
                                            var i = e.form_blocks[t.type],
                                                a = e._get_lightbox_section_node(t);
                                            i && i.focus && i.focus.call(e, a);
                                        };
                                    })(a));
                            }
                        }
                    }
                }),
                e.attachEvent("onEventIdChange", function (e, t) {
                    this._lightbox_id == e && (this._lightbox_id = t);
                }),
                (e._lightbox_template = "<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div>"),
                (e._init_touch_events = function () {
                    if (
                        (this.config.touch &&
                            (-1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Touch")) &&
                            !window.MSStream &&
                            ((this.xy.scroll_width = 0), (this._mobile = !0)),
                        this.config.touch)
                    ) {
                        var e = !0;
                        try {
                            document.createEvent("TouchEvent");
                        } catch (t) {
                            e = !1;
                        }
                        e
                            ? this._touch_events(
                                  ["touchmove", "touchstart", "touchend"],
                                  function (e) {
                                      return e.touches && e.touches.length > 1
                                          ? null
                                          : e.touches[0]
                                          ? { target: e.target, pageX: e.touches[0].pageX, pageY: e.touches[0].pageY, clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }
                                          : e;
                                  },
                                  function () {
                                      return !1;
                                  }
                              )
                            : window.PointerEvent || window.navigator.pointerEnabled
                            ? this._touch_events(
                                  ["pointermove", "pointerdown", "pointerup"],
                                  function (e) {
                                      return "mouse" == e.pointerType ? null : e;
                                  },
                                  function (e) {
                                      return !e || "mouse" == e.pointerType;
                                  }
                              )
                            : window.navigator.msPointerEnabled &&
                              this._touch_events(
                                  ["MSPointerMove", "MSPointerDown", "MSPointerUp"],
                                  function (e) {
                                      return e.pointerType == e.MSPOINTER_TYPE_MOUSE ? null : e;
                                  },
                                  function (e) {
                                      return !e || e.pointerType == e.MSPOINTER_TYPE_MOUSE;
                                  }
                              );
                    }
                }),
                (e._touch_events = function (t, i, a) {
                    function n(t, i, n) {
                        t.addEventListener(
                            i,
                            function (t) {
                                if (e._is_lightbox_open()) return !0;
                                if (!a(t)) return n(t);
                            },
                            { passive: !1 }
                        );
                    }
                    function r(t, i, a, n) {
                        if (!t || !i) return !1;
                        for (var r = t.target; r && r != e._obj; ) r = r.parentNode;
                        if (r != e._obj) return !1;
                        if (e.matrix && e.matrix[e.getState().mode]) {
                            if (e.matrix[e.getState().mode].scrollable) return !1;
                        }
                        var s = Math.abs(t.pageY - i.pageY),
                            o = Math.abs(t.pageX - i.pageX);
                        return s < n && o > a && (!s || o / s > 3) && (t.pageX > i.pageX ? e._click.dhx_cal_next_button() : e._click.dhx_cal_prev_button(), !0);
                    }
                    function s(t) {
                        if (!a(t)) {
                            var i = e.getState().drag_mode,
                                n = !!e.matrix && e.matrix[e._mode],
                                r = e.render_view_data;
                            return (
                                "create" == i &&
                                    n &&
                                    (e.render_view_data = function () {
                                        for (var t = e.getState().drag_id, i = e.getEvent(t), a = n.y_property, r = e.getEvents(i.start_date, i.end_date), s = 0; s < r.length; s++) r[s][a] != i[a] && (r.splice(s, 1), s--);
                                        (i._sorder = r.length - 1), (i._count = r.length), this.render_data([i], e.getState().mode);
                                    }),
                                e._on_mouse_move(t),
                                "create" == i && n && (e.render_view_data = r),
                                t.preventDefault && t.preventDefault(),
                                (t.cancelBubble = !0),
                                !1
                            );
                        }
                    }
                    function o(t) {
                        a(t) ||
                            (e._hide_global_tip(),
                            h && (e._on_mouse_up(i(t || event)), (e._temp_touch_block = !1)),
                            (e._drag_id = null),
                            (e._drag_mode = null),
                            (e._drag_pos = null),
                            (e._pointerDragId = null),
                            clearTimeout(_),
                            (h = u = !1),
                            (c = !0));
                    }
                    var d,
                        l,
                        _,
                        h,
                        c,
                        u,
                        g = (-1 != navigator.userAgent.indexOf("Android") && navigator.userAgent.indexOf("WebKit"), 0);
                    n(document.body, t[0], function (t) {
                        if (!a(t)) {
                            var n = i(t);
                            if (n) {
                                if (h) return s(n), t.preventDefault && t.preventDefault(), (t.cancelBubble = !0), e._update_global_tip(), !1;
                                if (((l = i(t)), u)) return l ? void ((d.target != l.target || Math.abs(d.pageX - l.pageX) > 5 || Math.abs(d.pageY - l.pageY) > 5) && ((c = !0), clearTimeout(_))) : void (c = !0);
                            }
                        }
                    }),
                        n(this._els.dhx_cal_data[0], "touchcancel", o),
                        n(this._els.dhx_cal_data[0], "contextmenu", function (e) {
                            if (!a(e)) return u ? (e && e.preventDefault && e.preventDefault(), ((e || event).cancelBubble = !0), !1) : void 0;
                        }),
                        n(this._obj, t[1], function (t) {
                            if (!a(t)) {
                                e._pointerDragId = t.pointerId;
                                var n;
                                if (((h = c = !1), (u = !0), !(n = l = i(t)))) return void (c = !0);
                                var r = new Date();
                                if (!c && !h && r - g < 250)
                                    return (
                                        e._click.dhx_cal_data(n),
                                        window.setTimeout(function () {
                                            (n.type = "dblclick"), e._on_dbl_click(n);
                                        }, 50),
                                        t.preventDefault && t.preventDefault(),
                                        (t.cancelBubble = !0),
                                        (e._block_next_stop = !0),
                                        !1
                                    );
                                if (((g = r), !c && !h && e.config.touch_drag)) {
                                    var s = e._locate_event(document.activeElement),
                                        o = e._locate_event(n.target),
                                        f = d ? e._locate_event(d.target) : null;
                                    if (s && o && s == o && s != f) return t.preventDefault && t.preventDefault(), (t.cancelBubble = !0), (e._ignore_next_click = !1), e._click.dhx_cal_data(n), (d = n), !1;
                                    (_ = setTimeout(function () {
                                        h = !0;
                                        var t = d.target,
                                            i = e._getClassName(t);
                                        t && -1 != i.indexOf("dhx_body") && (t = t.previousSibling),
                                            e._on_mouse_down(d, t),
                                            e._drag_mode &&
                                                "create" != e._drag_mode &&
                                                e.for_rendered(e._drag_id, function (t, i) {
                                                    (t.style.display = "none"), e._rendered.splice(i, 1);
                                                }),
                                            e.config.touch_tip && e._show_global_tip(),
                                            e.updateEvent(e._drag_id);
                                    }, e.config.touch_drag)),
                                        (d = n);
                                }
                            }
                        }),
                        n(this._els.dhx_cal_data[0], t[2], function (t) {
                            if (!a(t))
                                return (
                                    !h && r(d, l, 200, 100) && (e._block_next_stop = !0),
                                    h &&
                                        ((e._ignore_next_click = !0),
                                        setTimeout(function () {
                                            e._ignore_next_click = !1;
                                        }, 100)),
                                    o(t),
                                    e._block_next_stop ? ((e._block_next_stop = !1), t.preventDefault && t.preventDefault(), (t.cancelBubble = !0), !1) : void 0
                                );
                        }),
                        e.event(document.body, t[2], o);
                }),
                (e._show_global_tip = function () {
                    e._hide_global_tip();
                    var t = (e._global_tip = document.createElement("div"));
                    (t.className = "dhx_global_tip"), e._update_global_tip(1), document.body.appendChild(t);
                }),
                (e._update_global_tip = function (t) {
                    var i = e._global_tip;
                    if (i) {
                        var a = "";
                        if (e._drag_id && !t) {
                            var n = e.getEvent(e._drag_id);
                            n && (a = "<div>" + (n._timed ? e.templates.event_header(n.start_date, n.end_date, n) : e.templates.day_date(n.start_date, n.end_date, n)) + "</div>");
                        }
                        "create" == e._drag_mode || "new-size" == e._drag_mode ? (i.innerHTML = (e.locale.labels.drag_to_create || "Drag to create") + a) : (i.innerHTML = (e.locale.labels.drag_to_move || "Drag to move") + a);
                    }
                }),
                (e._hide_global_tip = function () {
                    var t = e._global_tip;
                    t && t.parentNode && (t.parentNode.removeChild(t), (e._global_tip = 0));
                }),
                (e._dp_init = function (t) {
                    (t._methods = ["_set_event_text_style", "", "_dp_change_event_id", "_dp_hook_delete"]),
                        (this._dp_change_event_id = function (t, i) {
                            e.getEvent(t) && e.changeEventId(t, i);
                        }),
                        (this._dp_hook_delete = function (i, a) {
                            if (e.getEvent(i)) return a && i != a && ("true_deleted" == this.getUserData(i, t.action_param) && this.setUserData(i, t.action_param, "updated"), this.changeEventId(i, a)), this.deleteEvent(a, !0);
                        }),
                        this.attachEvent("onEventAdded", function (e) {
                            !this._loading && this._validId(e) && t.setUpdated(e, !0, "inserted");
                        }),
                        this.attachEvent("onConfirmedBeforeEventDelete", function (e) {
                            if (this._validId(e)) {
                                var i = t.getState(e);
                                return "inserted" == i || this._new_event ? (t.setUpdated(e, !1), !0) : "deleted" != i && ("true_deleted" == i || (t.setUpdated(e, !0, "deleted"), !1));
                            }
                        }),
                        this.attachEvent("onEventChanged", function (e) {
                            !this._loading && this._validId(e) && t.setUpdated(e, !0, "updated");
                        }),
                        e.attachEvent("onClearAll", function () {
                            (t._in_progress = {}), (t._invalid = {}), (t.updatedRows = []), (t._waitMode = 0);
                        }),
                        (t._objToJson = function (e, i, a) {
                            (a = a || ""), (i = i || {});
                            for (var n in e) 0 !== n.indexOf("_") && (e[n] && e[n].getUTCFullYear ? (i[a + n] = this.obj._helpers.formatDate(e[n])) : e[n] && "object" == typeof e[n] ? t._objToJson(e[n], i, a + n + ".") : (i[a + n] = e[n]));
                            return i;
                        }),
                        (t._getRowData = function (e, t) {
                            var i = this.obj.getEvent(e);
                            return this._objToJson(i);
                        }),
                        (t._clearUpdateFlag = function () {}),
                        t.attachEvent("insertCallback", e._update_callback),
                        t.attachEvent("updateCallback", e._update_callback),
                        t.attachEvent("deleteCallback", function (e, t) {
                            this.obj.getEvent(t) ? (this.obj.setUserData(t, this.action_param, "true_deleted"), this.obj.deleteEvent(t)) : this.obj._add_rec_marker && this.obj._update_callback(e, t);
                        });
                }),
                (e._validId = function (e) {
                    return !0;
                }),
                (e.setUserData = function (e, t, i) {
                    if (e) {
                        var a = this.getEvent(e);
                        a && (a[t] = i);
                    } else this._userdata[t] = i;
                }),
                (e.getUserData = function (e, t) {
                    if (e) {
                        var i = this.getEvent(e);
                        return i ? i[t] : null;
                    }
                    return this._userdata[t];
                }),
                (e._set_event_text_style = function (t, i) {
                    if (e.getEvent(t)) {
                        this.for_rendered(t, function (e) {
                            e.style.cssText += ";" + i;
                        });
                        var a = this.getEvent(t);
                        (a._text_style = i), this.event_updated(a);
                    }
                }),
                (e._update_callback = function (t, i) {
                    var a = e._xmlNodeToJSON(t.firstChild);
                    "none" == a.rec_type && (a.rec_pattern = "none"),
                        (a.text = a.text || a._tagvalue),
                        (a.start_date = e._helpers.parseDate(a.start_date)),
                        (a.end_date = e._helpers.parseDate(a.end_date)),
                        e.addEvent(a),
                        e._add_rec_marker && e.setCurrentView();
                }),
                (e._skin_settings = { fix_tab_position: [1, 0], use_select_menu_space: [1, 0], wide_form: [1, 0], hour_size_px: [44, 42], displayed_event_color: ["#ff4a4a", "ffc5ab"], displayed_event_text_color: ["#ffef80", "7e2727"] }),
                (e._skin_xy = { lightbox_additional_height: [90, 50], nav_height: [59, 22], bar_height: [24, 20] }),
                (e._is_material_skin = function () {
                    return (e.skin + "").indexOf("material") > -1;
                }),
                (e._border_box_bvents = function () {
                    return e._is_material_skin();
                }),
                (e._configure = function (e, t, i) {
                    for (var a in t) void 0 === e[a] && (e[a] = t[a][i]);
                }),
                (e._skin_init = function () {
                    if (!e.skin)
                        for (var t = document.getElementsByTagName("link"), i = 0; i < t.length; i++) {
                            var a = t[i].href.match("dhtmlxscheduler_([a-z]+).css");
                            if (a) {
                                e.skin = a[1];
                                break;
                            }
                        }
                    var n = 0;
                    if ((!e.skin || ("classic" !== e.skin && "glossy" !== e.skin) || (n = 1), e._is_material_skin())) {
                        var r = e.config.buttons_left.$inital,
                            s = e.config.buttons_right.$inital;
                        if (r && e.config.buttons_left.slice().join() == r && s && e.config.buttons_right.slice().join() == s) {
                            var o = e.config.buttons_left.slice();
                            (e.config.buttons_left = e.config.buttons_right.slice()), (e.config.buttons_right = o);
                        }
                        (e.xy.event_header_height = 18),
                            (e.xy.menu_width = 25),
                            (e.xy.week_agenda_scale_height = 35),
                            (e.xy.map_icon_width = 38),
                            (e._lightbox_controls.defaults.textarea.height = 64),
                            (e._lightbox_controls.defaults.time.height = "auto");
                    }
                    if (
                        (this._configure(e.config, e._skin_settings, n),
                        this._configure(e.xy, e._skin_xy, n),
                        "flat" === e.skin &&
                            ((e.xy.scale_height = 35),
                            (e.templates.hour_scale = function (e) {
                                var t = e.getMinutes();
                                return (t = t < 10 ? "0" + t : t), "<span class='dhx_scale_h'>" + e.getHours() + "</span><span class='dhx_scale_m'>&nbsp;" + t + "</span>";
                            })),
                        !n)
                    ) {
                        var d = e.config.minicalendar;
                        d && (d.padding = 14),
                            (e.templates.event_bar_date = function (t, i, a) {
                                return "• <b>" + e.templates.event_date(t) + "</b> ";
                            }),
                            e.attachEvent("onTemplatesReady", function () {
                                var t = e.date.date_to_str("%d");
                                e.templates._old_month_day || (e.templates._old_month_day = e.templates.month_day);
                                var i = e.templates._old_month_day;
                                if (
                                    ((e.templates.month_day = function (a) {
                                        if ("month" == this._mode) {
                                            var n = t(a);
                                            return 1 == a.getDate() && (n = e.locale.date.month_full[a.getMonth()] + " " + n), +a == +e.date.date_part(this._currentDate()) && (n = e.locale.labels.dhx_cal_today_button + " " + n), n;
                                        }
                                        return i.call(this, a);
                                    }),
                                    e.config.fix_tab_position)
                                ) {
                                    var a = e._els.dhx_cal_navline[0].getElementsByTagName("div"),
                                        n = null,
                                        r = 211,
                                        s = [14, 75, 136],
                                        o = 14;
                                    e._is_material_skin() && ((s = [16, 103, 192]), (r = 294), (o = -1));
                                    for (var d = 0; d < a.length; d++) {
                                        var l = a[d],
                                            _ = l.getAttribute("name");
                                        if (_) {
                                            switch (((l.style.right = "auto"), _)) {
                                                case "day_tab":
                                                    (l.style.left = s[0] + "px"), (l.className += " dhx_cal_tab_first");
                                                    break;
                                                case "week_tab":
                                                    l.style.left = s[1] + "px";
                                                    break;
                                                case "month_tab":
                                                    (l.style.left = s[2] + "px"), (l.className += " dhx_cal_tab_last");
                                                    break;
                                                default:
                                                    (l.style.left = r + "px"), (l.className += " dhx_cal_tab_standalone"), (r = r + o + l.offsetWidth);
                                            }
                                            l.className += " " + _;
                                        } else 0 === (l.className || "").indexOf("dhx_minical_icon") && l.parentNode == e._els.dhx_cal_navline[0] && (n = l);
                                    }
                                    n && (n.style.left = r + "px");
                                }
                            }),
                            (e._skin_init = function () {});
                    }
                }),
                window.jQuery &&
                    (function (e) {
                        var t = 0,
                            i = [];
                        e.fn.dhx_scheduler = function (a) {
                            if ("string" != typeof a) {
                                var n = [];
                                return (
                                    this.each(function () {
                                        if (this && this.getAttribute)
                                            if (this.getAttribute("dhxscheduler")) n.push(window[this.getAttribute("dhxscheduler")]);
                                            else {
                                                var e = "scheduler";
                                                t && ((e = "scheduler" + (t + 1)), (window[e] = Scheduler.getSchedulerInstance()));
                                                var i = window[e];
                                                this.setAttribute("dhxscheduler", e);
                                                for (var r in a) "data" != r && (i.config[r] = a[r]);
                                                this.getElementsByTagName("div").length ||
                                                    ((this.innerHTML =
                                                        '<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>'),
                                                    (this.className += " dhx_cal_container")),
                                                    i.init(this, i.config.date, i.config.mode),
                                                    a.data && i.parse(a.data),
                                                    n.push(i),
                                                    t++;
                                            }
                                    }),
                                    1 === n.length ? n[0] : n
                                );
                            }
                            if (i[a]) return i[a].apply(this, []);
                            e.error("Method " + a + " does not exist on jQuery.dhx_scheduler");
                        };
                    })(jQuery),
                (function () {
                    function t(e, t, i) {
                        t && (e._date = t), i && (e._mode = i);
                    }
                    var i = e.setCurrentView,
                        a = e.updateView,
                        n = null,
                        r = null,
                        s = function (i, s) {
                            var o = this;
                            window.clearTimeout(r), window.clearTimeout(n);
                            var d = o._date,
                                l = o._mode;
                            t(this, i, s),
                                (r = setTimeout(function () {
                                    if (!o.callEvent("onBeforeViewChange", [l, d, s || o._mode, i || o._date])) return void t(o, d, l);
                                    a.call(o, i, s), o.callEvent("onViewChange", [o._mode, o._date]), window.clearTimeout(n), (r = 0);
                                }, e.config.delay_render));
                        },
                        o = function (i, s) {
                            var o = this,
                                d = arguments;
                            t(this, i, s),
                                window.clearTimeout(n),
                                (n = setTimeout(function () {
                                    r || a.apply(o, d);
                                }, e.config.delay_render));
                        };
                    e.attachEvent("onSchedulerReady", function () {
                        e.config.delay_render ? ((e.setCurrentView = s), (e.updateView = o)) : ((e.setCurrentView = i), (e.updateView = a));
                    });
                })();
            for (var s = 0; s < Scheduler._schedulerPlugins.length; s++) Scheduler._schedulerPlugins[s](e);
            return (e._internal_id = Scheduler._seed++), Scheduler.$syncFactory && Scheduler.$syncFactory(e), e;
        }),
        (window.scheduler = Scheduler.getSchedulerInstance()),
        (window.Scheduler = { plugin: scheduler.bind(Scheduler.plugin, Scheduler) }),
        dhtmlx &&
            dhtmlx.attaches &&
            (dhtmlx.attaches.attachScheduler = function (e, t, i, a) {
                var i = i || '<div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div>',
                    n = document.createElement("DIV");
                return (
                    (n.id = "dhxSchedObj_" + this._genStr(12)),
                    (n.innerHTML =
                        '<div id="' +
                        n.id +
                        '" class="dhx_cal_container" style="width:100%; height:100%;"><div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div>' +
                        i +
                        '</div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div></div>'),
                    document.body.appendChild(n.firstChild),
                    this.attachObject(n.id, !1, !0),
                    (this.vs[this.av].sched = a),
                    (this.vs[this.av].schedId = n.id),
                    (a.setSizes = a.updateView),
                    (a.destructor = function () {}),
                    a.init(n.id, e, t),
                    this.vs[this._viewRestore()].sched
                );
            });
})();
//# sourceMappingURL=sources/dhtmlxscheduler.js.map
