webpackHotUpdate("static/development/pages/pk10/m.js",{

/***/ "./components/pk10/control-panel.js":
/*!******************************************!*\
  !*** ./components/pk10/control-panel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "../node_modules/@material-ui/core/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base-container */ "./components/base-container.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common */ "./components/common/index.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux */ "./redux/index.js");
/* harmony import */ var _libs_error_parser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../libs/error-parser */ "./libs/error-parser.js");
/* harmony import */ var _libs_format_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/format-helper */ "./libs/format-helper.js");
/* harmony import */ var _libs_eos_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../libs/eos-client */ "./libs/eos-client.js");
/* harmony import */ var _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../libs/styleguide/colors */ "./libs/styleguide/colors.js");
/* harmony import */ var _libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../libs/i18n-util */ "./libs/i18n-util.js");


var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var baseFrame = {
  height: 36,
  backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].darkGrey3,
  fontSize: 16,
  lineHeight: '36px',
  textAlign: 'center',
  borderRadius: 4
};
var styles = {
  root: {
    height: 160,
    width: '100vw',
    backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].darkGrey2,
    position: 'fixed',
    left: 0,
    bottom: 0
  },
  buttonGroup: {
    width: '100%',
    height: 50,
    backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].darkGrey,
    margin: '5px 0px 0px 0px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  button1: {
    fontSize: 14,
    width: 60,
    height: 36,
    color: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].white,
    borderRadius: 4,
    border: "solid 1px ".concat(_libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].pinkRed)
  },
  button2: {
    fontSize: 14,
    width: 60,
    height: 36,
    color: '#000000',
    borderRadius: 4,
    backgroundImage: 'linear-gradient(199deg, #ffee69, #f8be3b)'
  },
  betCount: {
    height: 44,
    backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].darkGrey,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  totalCost: {
    height: 44,
    backgroundColor: _libs_styleguide_colors__WEBPACK_IMPORTED_MODULE_13__["default"].darkGrey,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  frame1: _objectSpread({
    width: 46
  }, baseFrame),
  frame2: _objectSpread({
    width: 145
  }, baseFrame),
  frame3: _objectSpread({
    width: 86
  }, baseFrame),
  eos: {
    color: '#b0b0b0',
    fontSize: 14
  },
  line: {
    width: '100vw',
    marginBottom: 20,
    height: 1,
    backgroundColor: '#5c5d68'
  }
};
/** @type {EosClient} */

var eosClient = _libs_eos_client__WEBPACK_IMPORTED_MODULE_12__["default"].getInstance();
var ControlPanel = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(function (_ref) {
  var pk10 = _ref.pk10;
  return {
    pk10: pk10
  };
}), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ControlPanel, _React$Component);

  function ControlPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ControlPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      loadingModal: false,
      errorModal: false,
      messageModal: false,
      error: {},
      betPrice: 1.00
    });

    _defineProperty(_assertThisInitialized(_this), "clickBet",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var currentTable, _selectors$pk10Curren, selection, _encodePK10Bet, action, item, betPrice, betCount, quantity, referrer, result, rngError;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                loadingModal: true
              });

              currentTable = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10CurrentTable(_this.props);
              _selectors$pk10Curren = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10CurrentTableBets(_this.props), selection = _selectors$pk10Curren.selection;
              _encodePK10Bet = Object(_libs_format_helper__WEBPACK_IMPORTED_MODULE_11__["encodePK10Bet"])(currentTable, selection), action = _encodePK10Bet.action, item = _encodePK10Bet.item;
              betPrice = _this.state.betPrice;
              betCount = _this.getBetCount();
              quantity = "".concat((betPrice * betCount).toFixed(4), " EOS");
              referrer = 'bjpkten';
              _context.prev = 8;
              _context.next = 11;
              return eosClient.pk10Bet(quantity, betPrice * 10000, betCount, referrer, action, item);

            case 11:
              result = _context.sent;
              console.log(result);

              _this.setState({
                loadingModal: false,
                messageModal: true
              });

              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](8);
              rngError = Object(_libs_error_parser__WEBPACK_IMPORTED_MODULE_10__["default"])(_context.t0);

              _this.setState({
                loadingModal: false,
                errorModal: true,
                error: rngError
              });

              console.error(_context.t0, rngError);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[8, 16]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleModalClose", function (name) {
      return function () {
        return _this.setState(_defineProperty({}, name, false));
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickRandom",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_9__["actions"].pk10RandomSelect());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleClickClear",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.props.dispatch(_redux__WEBPACK_IMPORTED_MODULE_9__["actions"].pk10ClearSelection());

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      var value = event.target.value;

      _this.setState({
        betPrice: value
      });

      if (isNaN(value) === false && value >= 0) {
        _this.setState({
          betPrice: value
        });
      } else if (value === '') {
        _this.setState({
          betPrice: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputBlur", function (event) {
      var value = event.target.value;

      if (value === '') {
        _this.setState({
          betPrice: 0.1000
        });
      } else {
        _this.setState({
          betPrice: parseFloat(value)
        });
      }
    });

    return _this;
  }

  _createClass(ControlPanel, [{
    key: "getBetCount",
    value: function getBetCount() {
      var currentTable = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10CurrentTable(this.props);
      var selection = [];
      var count = 0;

      switch (currentTable) {
        case 'singleBet':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsSingleBet(this.props).selection;
          break;

        case 'first2Sum':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsFirst2Sum(this.props).selection;
          break;

        case 'fiveElements':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsFiveElement(this.props).selection;
          break;

        case 'bigSmallOddEven':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsBigSmallOddEven(this.props).selection;
          break;

        case 'dragonTiger':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsDragonTiger(this.props).selection;
          break;

        case 'compoundBet2':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsCompoundBet2(this.props).selection;
          break;

        case 'compoundBet3':
          selection = _redux__WEBPACK_IMPORTED_MODULE_9__["selectors"].pk10BetsCompoundBet3(this.props).selection;
          break;

        default:
          return count;
      } // special cases


      if (currentTable === 'compoundBet2' || currentTable === 'compoundBet3') {
        return Object(_libs_format_helper__WEBPACK_IMPORTED_MODULE_11__["compoundBetCount"])(selection);
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = selection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;

          if (lodash__WEBPACK_IMPORTED_MODULE_4___default.a.isArray(row)) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var value = _step2.value;
                count += value === true;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          } else {
            count += row === true;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return count;
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var betCount = this.getBetCount();
      var total = (this.state.betPrice * betCount).toFixed(2);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.line
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_base_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        background: false
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        container: true,
        spacing: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.betCount
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.frame1
      }, betCount), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('bet')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
        item: true,
        xs: 8
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.totalCost
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('total_cost')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.frame2
      }, total, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: classes.eos
      }, "EOS"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.buttonGroup
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ButtonBase"], {
        className: classes.button1,
        onClick: this.handleClickClear
      }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('reset')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('each_bet')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classes.frame3
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        disableUnderline: true,
        inputProps: {
          style: {
            color: '#ffffff',
            fontSize: 16,
            backgroundColor: 'transparent',
            border: 0,
            textAlign: 'center'
          }
        },
        value: parseFloat(this.state.betPrice).toFixed(2),
        onChange: this.handleInputChange,
        onBlur: this.handleInputBlur
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ButtonBase"], {
        className: classes.button1,
        onClick: this.handleClickRandom
      }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('random_select')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ButtonBase"], {
        className: classes.button2,
        onClick: this.clickBet
      }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('go_bet')))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_8__["LoadingModal"], {
        open: this.state.loadingModal
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_8__["ErrorModal"], {
        open: this.state.errorModal,
        error: this.state.error,
        onClose: this.handleModalClose('errorModal')
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_8__["MessageModal"], {
        open: this.state.messageModal,
        onClose: this.handleModalClose('messageModal')
      }, Object(_libs_i18n_util__WEBPACK_IMPORTED_MODULE_14__["default"])('success_bet')));
    }
  }]);

  return ControlPanel;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)) || _class);
ControlPanel.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(ControlPanel));

/***/ })

})
//# sourceMappingURL=m.js.3407c128a9d1c5d33d32.hot-update.js.map