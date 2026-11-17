/*
 * Kopain : petit moteur d'affichage du prototype.
 * Chaque écran décrit son interface dans une balise <x-dc> (gabarit avec
 * des trous {{ ... }}, des boucles <sc-for> et des conditions <sc-if>)
 * et sa logique dans une classe Component. Ce script rend l'écran dans
 * le navigateur et le redessine à chaque changement d'état.
 */
(function () {
  'use strict';

  var hide = document.createElement('style');
  hide.textContent = 'x-dc{display:none!important}';
  document.head.appendChild(hide);

  var WHOLE = /^\s*\{\{\s*([^{}]+?)\s*\}\}\s*$/;
  var HOLE = /\{\{\s*([^{}]+?)\s*\}\}/g;

  var component = null;
  var template = null;
  var mount = null;

  function DCLogic(props) {
    this.props = props || {};
    this.state = {};
  }
  DCLogic.prototype.setState = function (patch) {
    var next = typeof patch === 'function' ? patch(this.state, this.props) : patch;
    this.state = Object.assign({}, this.state, next);
    render();
  };
  DCLogic.prototype.forceUpdate = function () { render(); };

  function lookup(scope, expr) {
    expr = expr.trim();
    if (expr === 'true') return true;
    if (expr === 'false') return false;
    if (expr === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(expr)) return Number(expr);
    if (/^'.*'$|^".*"$/.test(expr)) return expr.slice(1, -1);
    var value = scope;
    var keys = expr.split('.');
    for (var i = 0; i < keys.length; i++) {
      if (value == null) return undefined;
      value = value[keys[i]];
    }
    return value;
  }

  function resolve(raw, scope) {
    var whole = raw.match(WHOLE);
    if (whole) return lookup(scope, whole[1]);
    return raw.replace(HOLE, function (_, expr) {
      var v = lookup(scope, expr);
      return v == null ? '' : String(v);
    });
  }

  function child(scope, name, value, index) {
    var s = Object.create(scope);
    s[name] = value;
    s.$index = index;
    return s;
  }

  function renderNodes(nodes, scope, parent) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      if (node.nodeType === 3) {
        parent.appendChild(document.createTextNode(resolve(node.data, scope)));
        continue;
      }
      if (node.nodeType !== 1) continue;
      var tag = node.localName;
      if (tag === 'helmet') continue;
      if (tag === 'sc-for') {
        var list = resolve(node.getAttribute('list') || '', scope) || [];
        var as = node.getAttribute('as') || 'item';
        for (var j = 0; j < list.length; j++) {
          renderNodes(node.childNodes, child(scope, as, list[j], j), parent);
        }
        continue;
      }
      if (tag === 'sc-if') {
        if (resolve(node.getAttribute('value') || '', scope)) {
          renderNodes(node.childNodes, scope, parent);
        }
        continue;
      }
      var el = document.createElementNS(node.namespaceURI, node.localName);
      for (var k = 0; k < node.attributes.length; k++) {
        var attr = node.attributes[k];
        var name = attr.name;
        if (name.indexOf('hint-') === 0) continue;
        if (/^on[a-z]+$/.test(name)) {
          var fn = resolve(attr.value, scope);
          if (typeof fn === 'function') {
            el.addEventListener(name.slice(2), (function (f) {
              return function (e) { f(e); };
            })(fn));
          }
          continue;
        }
        var value = resolve(attr.value, scope);
        if (value === undefined || value === null) continue;
        el.setAttribute(name, String(value));
      }
      renderNodes(node.childNodes, scope, el);
      parent.appendChild(el);
    }
  }

  function render() {
    if (!component || !mount) return;
    var vals = component.renderVals ? component.renderVals() : {};
    var fresh = document.createDocumentFragment();
    renderNodes(template.childNodes, vals || {}, fresh);
    mount.replaceChildren(fresh);
  }

  function fit() {
    var stage = document.querySelector('.kp-stage');
    if (!stage) return;
    var room = Math.min(window.innerWidth - 16, 430);
    stage.style.setProperty('--kp-scale', room < 430 ? (room / 430).toFixed(3) : '1');
  }

  function start() {
    var source = document.querySelector('x-dc');
    var script = document.querySelector('script[data-dc-script]');
    if (!source || !script) return;

    var helmet = source.querySelector('helmet');
    if (helmet) {
      Array.prototype.slice.call(helmet.children).forEach(function (n) {
        if (n.localName === 'link' && /fonts\.(googleapis|gstatic)/.test(n.getAttribute('href') || '')) return;
        document.head.appendChild(n);
      });
      helmet.remove();
    }
    template = document.createDocumentFragment();
    while (source.firstChild) template.appendChild(source.firstChild);
    source.remove();

    var props = {};
    try {
      var decl = JSON.parse(script.getAttribute('data-props') || '{}');
      Object.keys(decl).forEach(function (key) {
        if (key.charAt(0) !== '$' && decl[key] && 'default' in decl[key]) props[key] = decl[key]['default'];
      });
    } catch (e) { /* propriétés facultatives */ }

    var Component = new Function('DCLogic', script.textContent + '\nreturn Component;')(DCLogic);
    component = new Component(props);
    if (!component.state) component.state = {};

    var stage = document.createElement('main');
    stage.className = 'kp-stage';
    var bar = document.createElement('nav');
    bar.className = 'kp-bar';
    bar.setAttribute('aria-label', 'Navigation du prototype');
    bar.innerHTML = '<a href="../index.html">&larr; Tous les écrans</a><span>Kopain · prototype</span>';
    mount = document.createElement('div');
    mount.className = 'kp-phone';
    stage.appendChild(bar);
    stage.appendChild(mount);
    document.body.appendChild(stage);

    render();
    if (typeof component.componentDidMount === 'function') component.componentDidMount();
    fit();
    window.addEventListener('resize', fit);
  }

  window.DCLogic = DCLogic;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
