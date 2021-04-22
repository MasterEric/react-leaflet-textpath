"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@react-leaflet/core");

var _leaflet = require("leaflet");

require("leaflet-textpath");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var createLeafletElement = function createLeafletElement(_ref, ctx) {
  var text = _ref.text,
      positions = _ref.positions,
      repeat = _ref.repeat,
      center = _ref.center,
      below = _ref.below,
      offset = _ref.offset,
      orientation = _ref.orientation,
      attributes = _ref.attributes,
      options = _objectWithoutProperties(_ref, ["text", "positions", "repeat", "center", "below", "offset", "orientation", "attributes"]);

  var instance = new _leaflet.Polyline(positions, options);
  instance.setText(text, {
    repeat: repeat,
    center: center,
    below: below,
    offset: offset,
    orientation: orientation,
    attributes: attributes
  });
  return {
    instance: instance,
    context: _objectSpread(_objectSpread({}, ctx), {}, {
      overlayContainer: instance
    })
  };
};

var updateLeafletElement = function updateLeafletElement(layer, _ref2, prevProps) {
  var text = _ref2.text,
      positions = _ref2.positions,
      repeat = _ref2.repeat,
      center = _ref2.center,
      below = _ref2.below,
      offset = _ref2.offset,
      orientation = _ref2.orientation,
      attributes = _ref2.attributes,
      options = _objectWithoutProperties(_ref2, ["text", "positions", "repeat", "center", "below", "offset", "orientation", "attributes"]);

  // Set null first, to reset the text displayed.
  layer.setText(null);
  if (positions !== prevProps.positions) layer.setLatLngs(positions);
  layer.setStyle(options);
  layer.setText(text, {
    repeat: repeat,
    center: center,
    below: below,
    offset: offset,
    orientation: orientation,
    attributes: attributes
  });
};

var ReactLeafletTextPath = (0, _core.createPathComponent)(createLeafletElement, updateLeafletElement);
var _default = ReactLeafletTextPath;
exports["default"] = _default;