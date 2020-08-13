"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactMapGl = require("react-map-gl");

var _configMapboxInput = _interopRequireDefault(require("config:mapbox-input"));

var _default2 = _interopRequireDefault(require("part:@sanity/components/buttons/default"));

var _default3 = _interopRequireDefault(require("part:@sanity/components/dialogs/default"));

var _default4 = _interopRequireDefault(require("part:@sanity/components/fieldsets/default"));

var _patchEvent = require("part:@sanity/form-builder/patch-event");

var _GeopointInput = _interopRequireDefault(require("../styles/GeopointInput.css"));

var _GeopointSelect = _interopRequireDefault(require("./GeopointSelect"));

var _Pin = _interopRequireDefault(require("./Pin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var getLocale = function getLocale(context) {
  var intl = context.intl || {};
  return intl.locale || typeof window !== 'undefined' && window.navigator.language || 'en';
};

var GeopointInput = /*#__PURE__*/function (_React$Component) {
  _inherits(GeopointInput, _React$Component);

  var _super = _createSuper(GeopointInput);

  function GeopointInput() {
    var _this;

    _classCallCheck(this, GeopointInput);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (lngLat) {
      var _this$props = _this.props,
          type = _this$props.type,
          onChange = _this$props.onChange;
      onChange(_patchEvent.PatchEvent.from([(0, _patchEvent.setIfMissing)({
        _type: type.name
      }), (0, _patchEvent.set)(lngLat[1], ['lat']), (0, _patchEvent.set)(lngLat[0], ['lng'])]));
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      var onChange = _this.props.onChange;
      onChange(_patchEvent.PatchEvent.from((0, _patchEvent.unset)()));
    });

    _this.handleToggleModal = _this.handleToggleModal.bind(_assertThisInitialized(_this));
    _this.handleCloseModal = _this.handleCloseModal.bind(_assertThisInitialized(_this));
    _this.state = {
      modalOpen: false
    };
    return _this;
  }

  _createClass(GeopointInput, [{
    key: "handleToggleModal",
    value: function handleToggleModal() {
      this.setState(function (prevState) {
        return {
          modalOpen: !prevState.modalOpen
        };
      });
    }
  }, {
    key: "handleCloseModal",
    value: function handleCloseModal() {
      this.setState({
        modalOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          type = _this$props2.type,
          markers = _this$props2.markers;

      if (!_configMapboxInput["default"] || !_configMapboxInput["default"].apiKey) {
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "The", ' ', /*#__PURE__*/_react["default"].createElement("a", {
          href: "https://sanity.io/docs/schema-types/geopoint-type"
        }, "Geopoint type"), ' ', "needs a Mapbox API token."), /*#__PURE__*/_react["default"].createElement("p", null, "Please enter the API token with access to these services in", /*#__PURE__*/_react["default"].createElement("code", {
          style: {
            whitespace: 'nowrap'
          }
        }, "`<project-root>/config/mapbox-input.json`")));
      }

      return /*#__PURE__*/_react["default"].createElement(_default4["default"], {
        legend: type.title,
        description: type.description,
        className: _GeopointInput["default"].root,
        markers: markers
      }, value && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactMapGl.StaticMap, {
        width: "100%",
        height: 300,
        latitude: value.lat,
        longitude: value.lng,
        zoom: 13,
        mapboxApiAccessToken: _configMapboxInput["default"].apiKey
      }, /*#__PURE__*/_react["default"].createElement(_reactMapGl.Marker, {
        latitude: value.lat,
        longitude: value.lng
      }, /*#__PURE__*/_react["default"].createElement(_Pin["default"], null)))), /*#__PURE__*/_react["default"].createElement("div", {
        className: _GeopointInput["default"].functions
      }, /*#__PURE__*/_react["default"].createElement(_default2["default"], {
        onClick: this.handleToggleModal
      }, value ? 'Edit' : 'Set location'), value && /*#__PURE__*/_react["default"].createElement(_default2["default"], {
        type: "button",
        onClick: this.handleClear
      }, "Remove")), this.state.modalOpen && /*#__PURE__*/_react["default"].createElement(_default3["default"], {
        title: "Place on map",
        onClose: this.handleCloseModal,
        onCloseClick: this.handleCloseModal,
        onOpen: this.handleOpenModal,
        message: "Select location by dragging the marker or search for a place",
        isOpen: this.state.modalOpen
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: _GeopointInput["default"].dialogInner
      }, /*#__PURE__*/_react["default"].createElement(_GeopointSelect["default"], {
        value: value,
        apiKey: _configMapboxInput["default"].apiKey,
        onChange: this.handleChange,
        defaultLocation: _configMapboxInput["default"].defaultLocation,
        defaultZoom: _configMapboxInput["default"].defaultZoom,
        locale: getLocale(this.context)
      }))));
    }
  }]);

  return GeopointInput;
}(_react["default"].Component);

_defineProperty(GeopointInput, "propTypes", {
  onChange: _propTypes["default"].func.isRequired,
  markers: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    type: _propTypes["default"].string
  })),
  value: _propTypes["default"].shape({
    lat: _propTypes["default"].number,
    lng: _propTypes["default"].number
  }),
  type: _propTypes["default"].shape({
    title: _propTypes["default"].string.isRequired,
    description: _propTypes["default"].string
  })
});

_defineProperty(GeopointInput, "defaultProps", {
  markers: []
});

_defineProperty(GeopointInput, "contextTypes", {
  intl: _propTypes["default"].shape({
    locale: _propTypes["default"].string
  })
});

var _default = GeopointInput;
exports["default"] = _default;