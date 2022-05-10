"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.css");

var Modal = function Modal(_ref) {
  var show = _ref.show,
      setShow = _ref.setShow,
      title = _ref.title,
      text = _ref.text,
      image = _ref.image,
      btn = _ref.btn;
  return show && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, image && /*#__PURE__*/_react.default.createElement("img", {
    className: "modal-container-content_image",
    src: image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal-container-content_title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-container-content_text"
  }, text), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-container_close-button",
    onClick: function onClick() {
      return setShow(false);
    }
  },btn));
};

exports.Modal = Modal;