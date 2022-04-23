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
      image = _ref.image;
  return show && /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal_container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container_content"
  }, image && /*#__PURE__*/_react.default.createElement("img", {
    className: "modal-container-content_image",
    src: image,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "modal-container-content_title"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "modal-container-content_text"
  }, text)), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-container_close-button",
    onClick: function onClick() {
      return setShow(false);
    }
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "icon",
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 0 24 24",
    width: "24px",
    fill: "#38393b"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
  })))));
};

exports.Modal = Modal;