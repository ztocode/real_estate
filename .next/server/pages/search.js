"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 9093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(3750);
// EXTERNAL MODULE: ./components/Property.jsx + 1 modules
var Property = __webpack_require__(572);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(5434);
;// CONCATENATED MODULE: ./utils/filterData.js
const filterData = [{
  items: [{
    name: 'Buy',
    value: 'for-sale'
  }, {
    name: 'Rent',
    value: 'for-rent'
  }],
  placeholder: 'Purpose',
  queryName: 'purpose'
}, {
  items: [{
    name: 'Daily',
    value: 'daily'
  }, {
    name: 'Weekly',
    value: 'weekly'
  }, {
    name: 'Monthly',
    value: 'monthly'
  }, {
    name: 'Yearly',
    value: 'yearly'
  }],
  placeholder: 'Rent Frequency',
  queryName: 'rentFrequency'
}, {
  items: [{
    name: '10,000',
    value: '10000'
  }, {
    name: '20,000',
    value: '20000'
  }, {
    name: '30,000',
    value: '30000'
  }, {
    name: '40,000',
    value: '40000'
  }, {
    name: '50,000',
    value: '50000'
  }, {
    name: '60,000',
    value: '60000'
  }, {
    name: '85,000',
    value: '85000'
  }],
  placeholder: 'Min Price(AED)',
  queryName: 'minPrice'
}, {
  items: [{
    name: '50,000',
    value: '50000'
  }, {
    name: '60,000',
    value: '60000'
  }, {
    name: '85,000',
    value: '85000'
  }, {
    name: '110,000',
    value: '110000'
  }, {
    name: '135,000',
    value: '135000'
  }, {
    name: '160,000',
    value: '160000'
  }, {
    name: '185,000',
    value: '185000'
  }, {
    name: '200,000',
    value: '200000'
  }, {
    name: '300,000',
    value: '300000'
  }, {
    name: '400,000',
    value: '400000'
  }, {
    name: '500,000',
    value: '500000'
  }, {
    name: '600,000',
    value: '600000'
  }, {
    name: '700,000',
    value: '700000'
  }, {
    name: '800,000',
    value: '800000'
  }, {
    name: '900,000',
    value: '900000'
  }, {
    name: '1000,000',
    value: '1000000'
  }],
  placeholder: 'Max Price(AED)',
  queryName: 'maxPrice'
}, {
  items: [{
    name: 'Lowest Price',
    value: 'price-asc'
  }, {
    name: 'Highest Price',
    value: 'price-des'
  }, {
    name: 'Newest',
    value: 'date-asc'
  }, {
    name: 'Oldest',
    value: 'date-desc'
  }, {
    name: 'Verified',
    value: 'verified-score'
  }, {
    name: 'City Level Score',
    value: 'city-level-score'
  }],
  placeholder: 'Sort',
  queryName: 'sort'
}, {
  items: [{
    name: '1000',
    value: '1000'
  }, {
    name: '2000',
    value: '2000'
  }, {
    name: '3000',
    value: '3000'
  }, {
    name: '4000',
    value: '4000'
  }, {
    name: '5000',
    value: '5000'
  }, {
    name: '10000',
    value: '10000'
  }, {
    name: '20000',
    value: '20000'
  }],
  placeholder: 'Max Area(sqft)',
  queryName: 'areaMax'
}, {
  items: [{
    name: '1',
    value: '1'
  }, {
    name: '2',
    value: '2'
  }, {
    name: '3',
    value: '3'
  }, {
    name: '4',
    value: '4'
  }, {
    name: '5',
    value: '5'
  }, {
    name: '6',
    value: '6'
  }, {
    name: '7',
    value: '7'
  }, {
    name: '8',
    value: '8'
  }, {
    name: '9',
    value: '9'
  }, {
    name: '10',
    value: '10'
  }],
  placeholder: 'Rooms',
  queryName: 'roomsMin'
}, {
  items: [{
    name: '1',
    value: '1'
  }, {
    name: '2',
    value: '2'
  }, {
    name: '3',
    value: '3'
  }, {
    name: '4',
    value: '4'
  }, {
    name: '5',
    value: '5'
  }, {
    name: '6',
    value: '6'
  }, {
    name: '7',
    value: '7'
  }, {
    name: '8',
    value: '8'
  }, {
    name: '9',
    value: '9'
  }, {
    name: '10',
    value: '10'
  }],
  placeholder: 'Baths',
  queryName: 'bathsMin'
}, {
  items: [{
    name: 'Furnished',
    value: 'furnished'
  }, {
    name: 'Unfurnished',
    value: 'unfurnished'
  }],
  placeholder: 'Furnish Type',
  queryName: 'furnishingStatus'
}, {
  items: [{
    name: 'Apartment',
    value: '4'
  }, {
    name: 'Townhouses',
    value: '16'
  }, {
    name: 'Villas',
    value: '3'
  }, {
    name: 'Penthouses',
    value: '18'
  }, {
    name: 'Hotel Apartments',
    value: '21'
  }, {
    name: 'Villa Compound',
    value: '19'
  }, {
    name: 'Residential Plot',
    value: '14'
  }, {
    name: 'Residential Floor',
    value: '12'
  }, {
    name: 'Residential Building',
    value: '17'
  }],
  placeholder: 'Property Type',
  queryName: 'categoryExternalID'
}];
const getFilterValues = filterValues => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs
  } = filterValues;
  const values = [{
    name: 'purpose',
    value: purpose
  }, {
    name: 'rentFrequency',
    value: rentFrequency
  }, {
    name: 'minPrice',
    value: minPrice
  }, {
    name: 'maxPrice',
    value: maxPrice
  }, {
    name: 'areaMax',
    value: areaMax
  }, {
    name: 'roomsMin',
    value: roomsMin
  }, {
    name: 'bathsMin',
    value: bathsMin
  }, {
    name: 'sort',
    value: sort
  }, {
    name: 'locationExternalIDs',
    value: locationExternalIDs
  }, {
    name: 'categoryExternalID',
    value: categoryExternalID
  }];
  return values;
};
// EXTERNAL MODULE: ./utils/fetchApi.js
var fetchApi = __webpack_require__(5189);
;// CONCATENATED MODULE: ./assets/images/noresult.svg
/* harmony default export */ const noresult = ({"src":"/_next/static/image/assets/images/noresult.4ad5350aac1fff184f91877a722f44e9.svg","height":129,"width":127});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/SearchFilters.jsx










function SearchFilters() {
  const {
    0: filters
  } = (0,external_react_.useState)(filterData);
  const {
    0: searchTerm,
    1: setSearchTerm
  } = (0,external_react_.useState)('');
  const {
    0: locationData,
    1: setLocationData
  } = (0,external_react_.useState)();
  const {
    0: showLocations,
    1: setShowLocations
  } = (0,external_react_.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();

  const searchProperties = filterValues => {
    const path = router.pathname;
    const {
      query
    } = router;
    const values = getFilterValues(filterValues);
    values.forEach(item => {
      if (item.value && filterValues !== null && filterValues !== void 0 && filterValues[item.name]) {
        query[item.name] = item.value;
      }
    });
    router.push({
      pathname: path,
      query: query
    });
  };

  (0,external_react_.useEffect)(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await (0,fetchApi/* fetchApi */.a)(`${fetchApi/* baseUrl */.F}/auto-complete?query=${searchTerm}`);
        setLoading(false);
        setLocationData(data === null || data === void 0 ? void 0 : data.hits);
      };

      fetchData();
    }
  }, [searchTerm]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    bg: "gray.100",
    p: "4",
    justifyContent: "center",
    flexWrap: "wrap",
    children: [filters === null || filters === void 0 ? void 0 : filters.map(filter => {
      var _filter$items;

      return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
        children: /*#__PURE__*/jsx_runtime_.jsx(react_.Select, {
          onChange: e => searchProperties({
            [filter.queryName]: e.target.value
          }),
          placeholder: filter.placeholder,
          w: "fit-content",
          p: "2",
          children: filter === null || filter === void 0 ? void 0 : (_filter$items = filter.items) === null || _filter$items === void 0 ? void 0 : _filter$items.map(item => /*#__PURE__*/jsx_runtime_.jsx("option", {
            value: item.value,
            children: item.name
          }, item.value))
        })
      }, filter.queryName);
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      flexDir: "column",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Button, {
        onClick: () => setShowLocations(!showLocations),
        border: "1px",
        borderColor: "gray.200",
        marginTop: "2",
        children: "Search Location"
      }), showLocations && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
        flexDir: "column",
        pos: "relative",
        paddingTop: "2",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Input, {
          placeholder: "Type Here",
          value: searchTerm,
          w: "300px",
          focusBorderColor: "gray.300",
          onChange: e => setSearchTerm(e.target.value)
        }), searchTerm !== '' && /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
          as: md_index_esm/* MdCancel */.B4e,
          pos: "absolute",
          cursor: "pointer",
          right: "5",
          top: "5",
          zIndex: "100",
          onClick: () => setSearchTerm('')
        }), loading && /*#__PURE__*/jsx_runtime_.jsx(react_.Spinner, {
          margin: "auto",
          marginTop: "3"
        }), showLocations && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
          height: "300px",
          overflow: "auto",
          children: [locationData === null || locationData === void 0 ? void 0 : locationData.map(location => /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
            onClick: () => {
              searchProperties({
                locationExternalIDs: location.externalID
              });
              setShowLocations(false);
              setSearchTerm(location.name);
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              cursor: "pointer",
              bg: "gray.200",
              p: "2",
              borderBottom: "1px",
              borderColor: "gray.100",
              children: location.name
            })
          }, location.id)), !loading && !(locationData !== null && locationData !== void 0 && locationData.length) && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
            justifyContent: "center",
            alignItems: "center",
            flexDir: "column",
            marginTop: "5",
            marginBottom: "5",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: noresult
            }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
              fontSize: "xl",
              marginTop: "3",
              children: "Waiting to search!"
            })]
          })]
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./pages/search.js












const Search = ({
  properties
}) => {
  const {
    0: searchFilters,
    1: setSearchFilters
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      onClick: () => setSearchFilters(!searchFilters),
      cursor: "pointer",
      bg: "gray.100",
      borderBottom: "1px",
      borderColor: "gray.200",
      p: "2",
      fontWeight: "black",
      fontSize: "lg",
      justifyContent: "center",
      alignItems: "center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        children: "Search Property By Filters"
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Icon, {
        paddingLeft: "2",
        w: "7",
        as: index_esm/* BsFilter */.r0X
      })]
    }), searchFilters && /*#__PURE__*/jsx_runtime_.jsx(SearchFilters, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Text, {
      fontSize: "2xl",
      p: "4",
      fontWeight: "bold",
      children: ["Properties ", router.query.purpose]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Flex, {
      flexWrap: "wrap",
      children: properties.map(property => /*#__PURE__*/jsx_runtime_.jsx(Property/* default */.Z, {
        property: property
      }, property.id))
    }), properties.length === 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
      justifyContent: "center",
      alignItems: "center",
      flexDir: "column",
      marginTop: "5",
      marginBottom: "5",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: noresult
      }), /*#__PURE__*/jsx_runtime_.jsx(react_.Text, {
        fontSize: "xl",
        marginTop: "3",
        children: "No Result Found."
      })]
    })]
  });
};

async function getServerSideProps({
  query
}) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';
  const data = await (0,fetchApi/* fetchApi */.a)(`${fetchApi/* baseUrl */.F}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  return {
    props: {
      properties: data === null || data === void 0 ? void 0 : data.hits
    }
  };
}
/* harmony default export */ const search = (Search);

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

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [438,610,664,434,167], () => (__webpack_exec__(9093)));
module.exports = __webpack_exports__;

})();