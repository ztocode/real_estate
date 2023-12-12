(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: external "@chakra-ui/layout"
var layout_ = __webpack_require__(9222);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = () => /*#__PURE__*/jsx_runtime_.jsx(layout_.Box, {
  textAlign: "center",
  p: "5",
  color: "gray.600",
  borderTop: "1px",
  borderColor: "gray.100",
  children: "\xA9 2021 Realtor, Inc."
});

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-icons/fc/index.esm.js
var index_esm = __webpack_require__(1872);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./node_modules/react-icons/fi/index.esm.js
var fi_index_esm = __webpack_require__(6893);
;// CONCATENATED MODULE: ./components/Navbar.jsx








const Navbar = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
  p: "2",
  borderBottom: "1px",
  borderColor: "gray.100",
  children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    fontSize: "3xl",
    color: "blue.400",
    fontWeight: "bold",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      paddingLeft: "2",
      children: "Realtor"
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(react_.Spacer, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
        as: react_.IconButton,
        icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FcMenu */.S_H, {}),
        variant: "outline",
        color: "red.400"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuList, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FcHome */.qHm, {}),
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/search",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(bs_index_esm/* BsSearch */.dVI, {}),
            children: "Search"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/search?purpose=for-sale",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* FcAbout */._WP, {}),
            children: "Buy Property"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/search?purpose=for-rent",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
            icon: /*#__PURE__*/jsx_runtime_.jsx(fi_index_esm/* FiKey */.o1l, {}),
            children: "Rent Property"
          })
        })]
      })]
    })
  })]
});

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.jsx







function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Real Estate"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
      maxWidth: "1280px",
      m: "auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  external_nprogress_default().configure({
    showSpinner: false
  });
  router_default().events.on('routeChangeStart', () => {
    external_nprogress_default().start();
  });
  router_default().events.on('routeChangeComplete', () => {
    external_nprogress_default().done();
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",
        integrity: "sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==",
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9222:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 3426:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [438,664,681], () => (__webpack_exec__(9451)));
module.exports = __webpack_exports__;

})();