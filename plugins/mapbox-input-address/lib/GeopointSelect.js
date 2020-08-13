"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("mapbox-gl/dist/mapbox-gl.css?raw");

require("react-map-gl-geocoder/dist/mapbox-gl-geocoder.css?raw");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactMapGl = _interopRequireWildcard(require("react-map-gl"));

var _reactMapGlGeocoder = _interopRequireDefault(require("react-map-gl-geocoder"));

var _GeopointSelect = _interopRequireDefault(require("../styles/GeopointSelect.css"));

var _Pin = _interopRequireDefault(require("./Pin"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GeopointSelect = /*#__PURE__*/function (_React$Component) {
  _inherits(GeopointSelect, _React$Component);

  var _super = _createSuper(GeopointSelect);

  function GeopointSelect(props) {
    var _this;

    _classCallCheck(this, GeopointSelect);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mapRef", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "handleViewportChange", function (viewport) {
      _this.setState({
        viewport: _objectSpread(_objectSpread({}, _this.state.viewport), viewport)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGeocoderViewportChange", function (viewport) {
      var geocoderDefaultOverrides = {
        transitionDuration: 1000
      };
      return _this.handleViewportChange(_objectSpread(_objectSpread({}, viewport), geocoderDefaultOverrides));
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnResult", function (event) {
      _this.setValue(event.result.geometry.coordinates);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMarkerDragEnd", function (event) {
      _this.setValue(event.lngLat);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMapClick", function (pointerEvent) {
      if (pointerEvent.target.classList.contains('overlays')) {
        _this.setValue(pointerEvent.lngLat);
      }
    });

    _this.state = {
      viewport: {
        latitude: _this.getValueLatLng().lat,
        longitude: _this.getValueLatLng().lng,
        zoom: props.defaultZoom
      }
    };
    return _this;
  }

  _createClass(GeopointSelect, [{
    key: "getValueLatLng",
    value: function getValueLatLng() {
      var _this$props = this.props,
          value = _this$props.value,
          defaultLocation = _this$props.defaultLocation;
      return {
        lat: value ? value.lat : defaultLocation.lat,
        lng: value ? value.lng : defaultLocation.lng
      };
    }
  }, {
    key: "setValue",
    value: function setValue(geoPoint) {
      this.props.onChange(geoPoint);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _GeopointSelect["default"].wrapper
      }, /*#__PURE__*/_react["default"].createElement(_reactMapGl["default"], _extends({
        width: "100%",
        height: "100%",
        ref: this.mapRef
      }, this.state.viewport, {
        onViewportChange: function onViewportChange(viewport) {
          return _this2.setState({
            viewport: viewport
          });
        },
        mapboxApiAccessToken: this.props.apiKey,
        onClick: this.handleMapClick
      }), /*#__PURE__*/_react["default"].createElement(_reactMapGlGeocoder["default"], {
        mapRef: this.mapRef,
        onResult: this.handleOnResult,
        onViewportChange: this.handleGeocoderViewportChange,
        mapboxApiAccessToken: this.props.apiKey,
        position: "top-left",
        language: this.props.locale
      }), /*#__PURE__*/_react["default"].createElement(_reactMapGl.Marker, {
        latitude: this.getValueLatLng().lat,
        longitude: this.getValueLatLng().lng,
        draggable: true,
        onDragEnd: this.handleMarkerDragEnd
      }, /*#__PURE__*/_react["default"].createElement(_Pin["default"], null))));
    }
  }]);

  return GeopointSelect;
}(_react["default"].Component);

_defineProperty(GeopointSelect, "propTypes", {
  onChange: _propTypes["default"].func.isRequired,
  value: _propTypes["default"].shape({
    lat: _propTypes["default"].number,
    lng: _propTypes["default"].number
  }),
  defaultLocation: _propTypes["default"].shape({
    lat: _propTypes["default"].number,
    lng: _propTypes["default"].number
  }),
  defaultZoom: _propTypes["default"].number,
  locale: _propTypes["default"].string
});

_defineProperty(GeopointSelect, "defaultProps", {
  defaultZoom: 8,
  defaultLocation: {
    lng: 10.74609,
    lat: 59.91273
  }
});

var _default = GeopointSelect;
exports["default"] = _default;