"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Banner": () => (/* binding */ Banner),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(572);
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5189);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  m: "10",
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
    src: imageUrl,
    width: 500,
    height: 300
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    p: "5",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      color: "gray.500",
      fontSize: "sm",
      fontWeight: "medium",
      children: purpose
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      fontSize: "3xl",
      fontWeight: "bold",
      children: [title1, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), title2]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
      fontSize: "lg",
      paddingTop: "3",
      paddingBottom: "3",
      color: "gray.700",
      children: [desc1, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), desc2]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      fontSize: "xl",
      bg: "blue.300",
      color: "white",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__.default, {
        href: linkName,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
          children: buttonText
        })
      })
    })]
  })]
});

const Home = ({
  propertiesForSale,
  propertiesForRent
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Banner, {
    purpose: "RENT A HOME",
    title1: "Rental Homes for",
    title2: "Everyone",
    desc1: " Explore from Apartments, builder floors, villas",
    desc2: "and more",
    buttonText: "Explore Renting",
    linkName: "/search?purpose=for-rent",
    imageUrl: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    flexWrap: "wrap",
    children: propertiesForRent.map(property => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Property__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      property: property
    }, property.id))
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Banner, {
    purpose: "BUY A HOME",
    title1: " Find, Buy & Own Your",
    title2: "Dream Home",
    desc1: " Explore from Apartments, land, builder floors,",
    desc2: " villas and more",
    buttonText: "Explore Buying",
    linkName: "/search?purpose=for-sale",
    imageUrl: "https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
    flexWrap: "wrap",
    children: propertiesForSale.map(property => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Property__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      property: property
    }, property.id))
  })]
});

async function getStaticProps() {
  const propertyForSale = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__/* .fetchApi */ .a)(`${_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .F}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__/* .fetchApi */ .a)(`${_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__/* .baseUrl */ .F}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propertiesForSale: propertyForSale === null || propertyForSale === void 0 ? void 0 : propertyForSale.hits,
      propertiesForRent: propertyForRent === null || propertyForRent === void 0 ? void 0 : propertyForRent.hits
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 3099:
/***/ ((module) => {

module.exports = require("@chakra-ui/avatar");

/***/ }),

/***/ 9222:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 3426:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9778:
/***/ ((module) => {

module.exports = require("millify");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [438,610,664,167], () => (__webpack_exec__(6124)));
module.exports = __webpack_exports__;

})();