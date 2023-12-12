exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Property)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(9222);
// EXTERNAL MODULE: external "@chakra-ui/avatar"
var avatar_ = __webpack_require__(3099);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(9583);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/react-icons/go/index.esm.js
var go_index_esm = __webpack_require__(6653);
// EXTERNAL MODULE: external "millify"
var external_millify_ = __webpack_require__(9778);
var external_millify_default = /*#__PURE__*/__webpack_require__.n(external_millify_);
;// CONCATENATED MODULE: ./assets/images/house.jpg
/* harmony default export */ const house = ({"src":"/_next/static/image/assets/images/house.246572160565dc8cf92084ec33c9678b.jpg","height":600,"width":800,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAD//xAAcEAACAQUBAAAAAAAAAAAAAAACAwQAAQUhMXH/2gAIAQEAAT8AlSX44XA6S1tw1wfa/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACMpH/2gAIAQIBAT8Aoqaez//EABcRAQADAAAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8AQvCf/9k="});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Property.jsx












const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID
  }
}) => {
  var _agency$logo;

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/property/${externalID}`,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_.Flex, {
      flexWrap: "wrap",
      w: "420px",
      p: "5",
      paddingTop: "0px",
      justifyContent: "flex-start",
      cursor: "pointer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_.Box, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: coverPhoto ? coverPhoto.url : house,
          width: 400,
          height: 260
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_.Box, {
        w: "full",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_.Flex, {
          paddingTop: "2",
          alignItems: "center",
          justifyContent: "space-between",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_.Flex, {
            alignItems: "center",
            children: [/*#__PURE__*/jsx_runtime_.jsx(layout_.Box, {
              paddingRight: "3",
              color: "green.400",
              children: isVerified && /*#__PURE__*/jsx_runtime_.jsx(go_index_esm/* GoVerified */.Dzu, {})
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_.Text, {
              fontWeight: "bold",
              fontSize: "lg",
              children: ["AED ", price, rentFrequency && `/${rentFrequency}`]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(layout_.Box, {
            children: /*#__PURE__*/jsx_runtime_.jsx(avatar_.Avatar, {
              size: "sm",
              src: agency === null || agency === void 0 ? void 0 : (_agency$logo = agency.logo) === null || _agency$logo === void 0 ? void 0 : _agency$logo.url
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(layout_.Flex, {
          alignItems: "center",
          p: "1",
          justifyContent: "space-between",
          w: "250px",
          color: "blue.400",
          children: [rooms, /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaBed */.f0S, {}), " | ", baths, " ", /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FaBath */.MvV, {}), " | ", external_millify_default()(area), " sqft ", /*#__PURE__*/jsx_runtime_.jsx(bs_index_esm/* BsGridFill */.H9n, {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(layout_.Text, {
          fontSize: "lg",
          children: title.length > 30 ? title.substring(0, 30) + '...' : title
        })]
      })]
    })
  });
};

/* harmony default export */ const components_Property = (Property);

/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ baseUrl),
/* harmony export */   "a": () => (/* binding */ fetchApi)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseUrl = 'https://bayut.p.rapidapi.com';
const fetchApi = async url => {
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, {
    headers: {
      'X-RapidAPI-Key': 'ff0e09afd7mshc4e653daa0e83a2p16110cjsn4e31427af933',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  });
  return data;
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;