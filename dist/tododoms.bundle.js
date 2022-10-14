/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/todofns.js":
/*!************************!*\
  !*** ./src/todofns.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushtoDo": () => (/* binding */ PushtoDo),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteToDo": () => (/* binding */ deleteToDo),
/* harmony export */   "descriptionUpdate": () => (/* binding */ descriptionUpdate),
/* harmony export */   "dueDateUpdate": () => (/* binding */ dueDateUpdate),
/* harmony export */   "myProjects": () => (/* binding */ myProjects),
/* harmony export */   "mytoDos": () => (/* binding */ mytoDos),
/* harmony export */   "priorityUpdate": () => (/* binding */ priorityUpdate),
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectToDos": () => (/* binding */ projectToDos),
/* harmony export */   "pushProject": () => (/* binding */ pushProject),
/* harmony export */   "titleUpdate": () => (/* binding */ titleUpdate),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });

const toDo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
};

let mytoDos = [];

const PushtoDo = (toDoItem) => {
    mytoDos.push(toDoItem);
}

const titleUpdate = (toDoItem, newTitle) => {
    toDoItem.title = newTitle;
    return {toDoItem};
}

const descriptionUpdate = (toDoItem, newDescription) => {
    toDoItem.description = newDescription;
    return {toDoItem};
}

const dueDateUpdate = (toDoItem, newdueDate) => {
    toDoItem.dueDate = newdueDate;
    return {toDoItem};
}

const priorityUpdate = (toDoItem, newPriority) => {
    toDoItem.priority = newPriority;
    return {toDoItem};
}

const deleteToDo =  (toDoItem) => {
    toDoItem = null;
    return {toDoItem};
}

const project = (title) => {
    const projectArray = () => [];
    return {title, projectArray}
}

let myProjects = [];

const pushProject = (projectItem) => {
    myProjects.push(projectItem);
}

const deleteProject = (projectItem) => {
    projectItem = null;
    return {projectItem}
}

const projectToDos = (projectItem, toDoItem) => {
    projectItem.push(toDoItem);
}



/***/ }),

/***/ "./src/todointerfacers.js":
/*!********************************!*\
  !*** ./src/todointerfacers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createprojtile": () => (/* binding */ createprojtile),
/* harmony export */   "deleteproj": () => (/* binding */ deleteproj),
/* harmony export */   "projpageID": () => (/* binding */ projpageID)
/* harmony export */ });
/* harmony import */ var _todofns_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todofns.js */ "./src/todofns.js");


const createprojtile = (projname) => {
    let newproject = () => (0,_todofns_js__WEBPACK_IMPORTED_MODULE_0__.project)(projname);
    (0,_todofns_js__WEBPACK_IMPORTED_MODULE_0__.pushProject)(projname);
    let projectID = () => `project${_todofns_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length-1}`;
    return {newproject, projectID};
};

const projpageID = () => {
    let pageID = () => `projpage${_todofns_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length-1}`;
    return {pageID}
} 

const deleteproj = (projnum) => {
    let projectItem = _todofns_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[projnum];
    (0,_todofns_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(projectItem);
}









/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/pencil-outline.svg":
/*!********************************!*\
  !*** ./src/pencil-outline.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/tododoms.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearforms": () => (/* binding */ clearforms),
/* harmony export */   "loadprojects": () => (/* binding */ loadprojects),
/* harmony export */   "loadprojpages": () => (/* binding */ loadprojpages),
/* harmony export */   "periodpage": () => (/* binding */ periodpage),
/* harmony export */   "projectForms": () => (/* binding */ projectForms),
/* harmony export */   "projectTile": () => (/* binding */ projectTile),
/* harmony export */   "sorttiles": () => (/* binding */ sorttiles),
/* harmony export */   "sorttodos": () => (/* binding */ sorttodos),
/* harmony export */   "toDoForms": () => (/* binding */ toDoForms),
/* harmony export */   "toDoTile": () => (/* binding */ toDoTile)
/* harmony export */ });
/* harmony import */ var _todointerfacers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todointerfacers.js */ "./src/todointerfacers.js");
/* harmony import */ var _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pencil-outline.svg */ "./src/pencil-outline.svg");
/* harmony import */ var _delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.svg */ "./src/delete.svg");
/* harmony import */ var date_fns_isToday__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/isToday */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/isSameWeek */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/parseISO */ "./node_modules/date-fns/esm/parseISO/index.js");







const projarray = [];
const projpagesarray = [];

const storeprojects = (item) => {
    let element = document.getElementById(item);
    let elementstring = element.outerHTML;
    projarray.push(elementstring);
    localStorage.setItem('projects', JSON.stringify(projarray));
    console.log(projarray.length);
}

const loadprojects = () => {
    const parunpacked = JSON.parse(localStorage.getItem('projects') || '[]');
    console.log(parunpacked);
    let projTileList = document.getElementById('projTileList');
    parunpacked.forEach((project) => {
    projTileList.innerHTML += project;
    projarray.push(project);
    })
}

const storeprojpages = (item) => {
    let element = document.getElementById(item);
    let elementstring = element.outerHTML;
    projpagesarray.push(elementstring);
    localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
}

const loadprojpages = () => {
    const ppparunpacked = JSON.parse(localStorage.getItem('projectpages') || '[]');
    let pagecontainer = document.getElementById('pagecontainer');
    ppparunpacked.forEach((page) => {
        pagecontainer.innerHTML += page;
        pagecontainer.lastChild.style.visibility = 'hidden';
        pagecontainer.lastChild.style.width = '0px';
        pagecontainer.lastChild.style.height = '0px';
        projpagesarray.push(page);
    })
}

const clearforms = () => {
    let forms = document.getElementsByClassName('form')
    if (forms !== null) {
        for (const form of forms) {
            form.remove();
        }
    }
}

const toDoForms = (todoformtype, todoname, tododescrip, tododate, todoprio, todotileid) => {
    let todoformcontainer = document.createElement('div');
    todoformcontainer.setAttribute('id', 'todoformcontainer');
    todoformcontainer.setAttribute('class', 'form');
    let todoform = document.createElement('form');
    todoform.setAttribute('id', 'todoform');
    todoformcontainer.appendChild(todoform);
    
    let todoformtitle = document.createElement('div');
    todoformtitle.setAttribute('id', 'todoformtitle');
    if (todoformtype == 'create') {
    todoformtitle.textContent = 'New Task';
    }
    else if (todoformtype == 'edit') {
    todoformtitle.textContent = 'Edit Task';
    }
    todoform.appendChild(todoformtitle);

    let secondtodo = document.createElement('div');
    secondtodo.setAttribute('id', 'secondtodo');
    todoform.appendChild(secondtodo);

    let namecontainer = document.createElement('div');
    namecontainer.setAttribute('id', 'namecontainer');
    let taskname = document.createElement('input');
    taskname.setAttribute('type', 'text');
    taskname.setAttribute('id', 'taskname');
    taskname.setAttribute('required', '');
    if (todoformtype == 'edit') {
        taskname.defaultValue = todoname;
    }
    let namelabel = document.createElement('label');
    namelabel.setAttribute('id', 'namelabel');
    namelabel.setAttribute('for', 'taskname');
    namelabel.textContent = 'Task Name: ';

    secondtodo.appendChild(namecontainer);
    namecontainer.appendChild(taskname);
    namecontainer.appendChild(namelabel);

    let descripcontainer = document.createElement('div');
    descripcontainer.setAttribute('id', 'descripcontainer');
    let descrip = document.createElement('input');
    descrip.setAttribute('type', 'text');
    descrip.setAttribute('id', 'descrip');
    descrip.style.width = '30%';
    descrip.style.height = '30px';
    if (todoformtype == 'edit') {
        descrip.defaultValue = tododescrip;
    };
    let descriplabel = document.createElement('label');
    descriplabel.setAttribute('id', 'descriplabel');
    descriplabel.setAttribute('for', 'descrip');
    descriplabel.textContent = 'Description: ';

    todoform.appendChild(descripcontainer);
    descripcontainer.appendChild(descrip);
    descripcontainer.appendChild(descriplabel);

    let datecontainer = document.createElement('div');
    datecontainer.setAttribute('id', 'datecontainer');
    let date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('id', 'date');
    date.setAttribute('required', '');
    if (todoformtype == 'edit') {
        date.defaultValue = tododate;
    };
    let datelabel = document.createElement('label');
    datelabel.setAttribute('id', 'datelabel');
    datelabel.setAttribute('for', 'date');
    datelabel.textContent = 'Date: ';

    secondtodo.appendChild(datecontainer);
    datecontainer.appendChild(date);
    datecontainer.appendChild(datelabel);

    
    let prioritycontainer = document.createElement('div');
    prioritycontainer.setAttribute('id', 'prioritycontainer');
    let priority = document.createElement('select');
    priority.setAttribute('id', 'priority');
    priority.setAttribute('required', '');
    
    let prioritylabel = document.createElement('label');
    prioritylabel.setAttribute('id', 'prioritylabel');
    prioritylabel.setAttribute('for', 'priority');
    prioritylabel.textContent = 'Priority: ';
    let high = document.createElement('option');
    high.value = high.textContent = 'High';
    let normal = document.createElement('option');
    normal.value = normal.textContent = 'Normal';
    let low = document.createElement('option');
    low.value = low.textContent = 'Low';
    priority.appendChild(high);
    priority.appendChild(normal);
    priority.appendChild(low);
    if (todoformtype == 'edit') {
        if (todoprio == 'High') {
        priority.value = high.value;
        }
        if (todoprio == 'Normal') {
        priority.value = normal.value;
        }
        if (todoprio == 'Low') {
        priority.value = low.value;
        }
    };

    secondtodo.appendChild(prioritycontainer);
    prioritycontainer.appendChild(priority);
    prioritycontainer.appendChild(prioritylabel);

    let fourthtodo = document.createElement('div');
    fourthtodo.setAttribute('id', 'fourthtodo');
    todoform.appendChild(fourthtodo);

    let submittask = document.createElement('button');
    submittask.setAttribute('type', 'submit');
    submittask.setAttribute('required', '');
    submittask.setAttribute('id', 'submittask');
    if (todoformtype == 'create') {
    submittask.textContent = 'Create Task';
    }
    else if (todoformtype == 'edit') {
    submittask.textContent = 'Submit';
    }

    fourthtodo.appendChild(submittask);

    submittask.addEventListener('click', (e) => {
        e.preventDefault();
            if (todoform.reportValidity() === true) {
            if (todoformtype == 'create') {
            let projectparent = todoform.parentElement.parentElement.parentElement;
            let parentID = projectparent.id;
            let parentnum = parentID.replace(/\D/g, "");
            let projecttaskcont = projectparent.lastChild;
            projecttaskcont.appendChild(toDoTile(parentnum, taskname.value, descrip.value, date.value, priority.value));
            todoformcontainer.remove();
            projpagesarray[parentnum] = projectparent.outerHTML;
            localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
            }
            else if (todoformtype == 'edit') {
            let projectparent = todoform.parentElement.parentElement.parentElement;
            let parentID = projectparent.id;
            let parentnum = parentID.replace(/\D/g, "");
            let todotile = document.getElementById(todotileid);
            console.log(todotileid);
            let tilechilds = todotile.childNodes;
            for (const child of tilechilds) {
                if (child.className == 'firstrow') {
                    let firstrowchilds = child.childNodes;
                    for (const rowchild of firstrowchilds) {
                        if (rowchild.className == 'tilename') {
                            rowchild.textContent = taskname.value;
                        }
                        if (rowchild.className == 'tiledate') {
                            rowchild.textContent = date.value;
                        }
                        if (rowchild.className == 'tileprio') {
                            rowchild.textContent = priority.value;
                        }
                    }
                }
                else if (child.className == 'descexpand') {
                    child.textContent = descrip.value;
                }
            }
            todoformcontainer.remove();
            projpagesarray[parentnum] = projectparent.outerHTML;
            localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
            }
        } 


         })

    let canceltask = document.createElement('button');
    canceltask.setAttribute('type', 'submit');
    canceltask.setAttribute('required', '');
    canceltask.setAttribute('id', 'canceltask');
    canceltask.textContent = 'Cancel';

    canceltask.addEventListener('click', (e) => {
        todoform.remove();
        todoformcontainer.remove();
    })

    fourthtodo.appendChild(canceltask);

    return todoformcontainer;

}


const toDoTile = (tileid, todoname, tododescrip, tododate, todoprio) => {
    let todotilecontainer = document.createElement('div');
    todotilecontainer.setAttribute('class', `todotile tileofproj${tileid}`);
    let todotiles = document.getElementsByClassName('todotile')
    todotilecontainer.setAttribute('id', `tile${todotiles.length}`);
    todotilecontainer.style.width = pagecontainer.style.width;

    let firstrow = document.createElement('div');
    firstrow.setAttribute('class', 'firstrow');
    todotilecontainer.appendChild(firstrow);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'checkbox');
    firstrow.appendChild(checkbox);

    checkbox.addEventListener('click', (e) => {
        if (checkbox.checked == true ) {
            todotilecontainer.style.color = 'rgba(211,211,211,0.5)';
            tiledescbutton.style.opacity = '0.5';
            editbutton.style.opacity = '0.5';
            deletebutton.style.opacity = '0.5';
        }
        else if (checkbox.checked == false) {
            todotilecontainer.style.color = 'black';
            tiledescbutton.style.opacity = '1';
            editbutton.style.opacity = '1';
            deletebutton.style.opacity = '1';
        }
    })

    let tilename = document.createElement('div');
    tilename.setAttribute('class', 'tilename');
    tilename.textContent = todoname;
    firstrow.appendChild(tilename);

    let tiledescdiv = document.createElement('div');
    tiledescdiv.setAttribute('class', 'tiledescdiv');
    firstrow.appendChild(tiledescdiv);
    let tiledescbutton = document.createElement('button');
    tiledescbutton.setAttribute('type', 'button');
    tiledescbutton.setAttribute('class', 'tiledescbutton');
    tiledescbutton.textContent = 'Desc.';
    tiledescdiv.appendChild(tiledescbutton);

    tiledescbutton.addEventListener('click', () => {
        if (descexpand.style.visibility == 'hidden') {
        descexpand.style.visibility = 'visible';
        descexpand.style.width = todotilecontainer.style.width;
        descexpand.style.height = 'fit-content';
        }

        else if (descexpand.style.visibility !== 'hidden') {
            descexpand.style.visibility = 'hidden';
            descexpand.style.width = '0px';
            descexpand.style.height = '0px';
        }
    })

    let tiledate = document.createElement('div');
    tiledate.textContent = tododate;
    tiledate.setAttribute('class', 'tiledate');
    firstrow.appendChild(tiledate);
    
    let tileprio = document.createElement('div');
    tileprio.textContent = todoprio;
    tileprio.setAttribute('class', 'tileprio');
    firstrow.appendChild(tileprio);

    let editbutton = document.createElement('button');
    editbutton.setAttribute('type', 'button');
    editbutton.setAttribute('class', 'editbutton');
    let editbuttonpic = document.createElement('img');
    editbuttonpic.setAttribute('class', 'editbuttonpic');
    editbuttonpic.src = _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    editbutton.appendChild(editbuttonpic);

    firstrow.appendChild(editbutton);

    editbutton.addEventListener('click', (e) => {
        if (e.target.className == 'editbuttonpic') {
        let todotileid = e.target.parentElement.parentElement.parentElement.id;
        console.log(todotileid);
        let todopopups = document.getElementsByClassName('todopopup');
        for (const popup of todopopups) {
        if (popup.parentElement.style.visibility !== 'hidden') {
        if (!document.forms[0]) {
        popup.appendChild(toDoForms('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
    }}}
        }
        if (e.target.className == 'editbutton') {
        let todotileid = e.target.parentElement.parentElement.id;
        console.log(todotileid);
        let todopopups = document.getElementsByClassName('todopopup');
        for (const popup of todopopups) {
        if (popup.parentElement.style.visibility !== 'hidden') {
        if (!document.forms[0]) {
        popup.appendChild(toDoForms('edit', tilename.textContent, descexpand.textContent, tiledate.textContent, tileprio.textContent, todotileid));
    }}}
        }
        })

    let deletebutton = document.createElement('button');
    deletebutton.setAttribute('type', 'button');
    deletebutton.setAttribute('class', 'deletebutton');
    let deletebuttonpic = document.createElement('img');
    deletebuttonpic.setAttribute('class', 'deletebuttonpic');
    deletebuttonpic.src = _delete_svg__WEBPACK_IMPORTED_MODULE_2__;
    deletebutton.appendChild(deletebuttonpic);
    firstrow.appendChild(deletebutton);

    deletebutton.addEventListener('click', (e) => {
        todotilecontainer.remove()
    })

    let descexpand = document.createElement('div');
    descexpand.setAttribute('class', 'descexpand');
    descexpand.textContent = `${tododescrip}`;
    descexpand.style.visibility = 'hidden';
    descexpand.style.width = '0px';
    descexpand.style.height = '0px';
    todotilecontainer.appendChild(descexpand);

    return todotilecontainer;

}


const projectTile = (projectname) => {
    let projtile = document.createElement('button');
    projtile.setAttribute('class', 'projecttile');
    projtile.textContent = projectname;
    projtile.setAttribute('id', `project${projarray.length}`);
    let projTileList = document.getElementById('projTileList');
    projTileList.appendChild(projtile);
    storeprojects(projtile.id);

    projtile.addEventListener('click', (e) => {
        let descs = document.getElementsByClassName('descexpand');
        if (descs.length !== null) {
            for (const desc of descs) {
                desc.style.visibility = 'hidden';
                desc.style.width = '0px';
                desc.style.height = '0px;'
            }
        } 
        clearforms();
        sorttodos();
        let pagecontainer = document.getElementById('pagecontainer');
        let pagenodes = pagecontainer.childNodes;
        for (const node of pagenodes) {
            if (node.style.visibility !== 'hidden') {
                node.style.visibility = 'hidden';
                node.style.width = '0px';
                node.style.height = '0px';
            }
        }
        let tileid = e.target.id;
        let tileidnum = tileid.replace(/\D/g, "");
        let projpage = document.getElementById(`projpage${tileidnum}`);
        projpage.style.visibility = 'visible';
        projpage.style.width = pagecontainer.style.width
        projpage.style.height = 'fit-content';
        let taskcont = projpage.querySelector('.taskscontainer');
        let projpagetasks = document.getElementsByClassName(`tileofproj${tileidnum}`);
        for (const task of projpagetasks) {
            if (!taskcont.contains(task)){
            taskcont.appendChild(task);
            }
        }
        
        
    })
    
}

const editprojtile = (projname, projpagename) => {
    let projpagetitle = document.getElementsByClassName('projpagetitle');
    for (const title of projpagetitle) {
        if (title.parentElement.parentElement.style.visibility !== 'hidden') {
            title.textContent = projname;            
        }
    }
    let projpagenum = projpagename.replace(/\D/g, "");
    let projpage = document.getElementById(projpagename);
    projpagesarray[projpagenum] = projpage.outerHTML;
    localStorage.setItem('projectpages', JSON.stringify(projpagesarray));
    let projtile = document.getElementById(`project${projpagenum}`);
    projtile.textContent = projname;
    projarray[projpagenum] = projtile.outerHTML;
    localStorage.setItem('projects', JSON.stringify(projarray));
    }

const deleteprojtile = () => {
    let projpage = document.getElementsByClassName('projectpage');
    for (const page of projpage) {
        if (page.style.visibility !== 'hidden') {
            let projectpageid = page.id;
            let pageidnum = projectpageid.replace(/\D/g, "");
            (0,_todointerfacers_js__WEBPACK_IMPORTED_MODULE_0__.deleteproj)(pageidnum);
            let projtile = document.getElementById(`project${pageidnum}`);
            page.remove();
            projtile.remove();
        }
    }
}

const taskheaders = () => {
    let pagecontainer = document.getElementById('pagecontainer');

    let taskheaders = document.createElement('div');
    taskheaders.setAttribute('class', 'taskheaders');
    taskheaders.style.width = pagecontainer.style.width;

    let nameheader = document.createElement('div');
    nameheader.setAttribute('class', 'nameheader');
    nameheader.textContent = 'Name';
    taskheaders.appendChild(nameheader);

    let descheader = document.createElement('div');
    descheader.setAttribute('class', 'descheader');
    descheader.textContent = 'Desc.';
    taskheaders.appendChild(descheader);

    let dateheader = document.createElement('div');
    dateheader.setAttribute('class', 'dateheader');
    dateheader.textContent = 'Due Date';
    taskheaders.appendChild(dateheader);

    let prioheader = document.createElement('div');
    prioheader.setAttribute('class', 'prioheader');
    prioheader.textContent = 'Priority';
    taskheaders.appendChild(prioheader);

    let editheader = document.createElement('div');
    editheader.setAttribute('class', 'editheader');
    editheader.textContent = 'Edit';
    taskheaders.appendChild(editheader);

    return taskheaders;
}


const projectpage = (projectname) => {

    let pagecontainer = document.getElementById('pagecontainer');
    let projectpage = document.createElement('div');
    projectpage.setAttribute('class', 'projectpage');
    projectpage.setAttribute('id', `projpage${projpagesarray.length}`);
    pagecontainer.appendChild(projectpage);
    let projtitleline = document.createElement('div');
    projtitleline.setAttribute('class', 'projtitleline');
    projectpage.appendChild(projtitleline);

    let projpagetitle = document.createElement('div');
    projpagetitle.setAttribute('class', 'projpagetitle');
    projpagetitle.textContent = `${projectname}`;
    projtitleline.appendChild(projpagetitle);

    let projedit = document.createElement('button');
    projedit.setAttribute('class', 'projedit');
    let projeditpic = document.createElement('img');
    projeditpic.setAttribute('class', 'projeditpic');
    projeditpic.src = _pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
    projedit.appendChild(projeditpic);
    projtitleline.appendChild(projedit);

    let editprojform = document.createElement('div');
    editprojform.setAttribute('class', 'editprojform');
    projectpage.appendChild(editprojform);

    let divprojtask = document.createElement('div');
    divprojtask.setAttribute('class', 'divprojtask');
    projectpage.appendChild(divprojtask);
    let projtask = document.createElement('button');
    projtask.setAttribute('class', 'projtask')
    projtask.textContent = 'New Task';
    divprojtask.appendChild(projtask);

    let todopopup = document.createElement('div');
    todopopup.setAttribute('class', 'todopopup');
    projectpage.appendChild(todopopup);
    
    projectpage.appendChild(taskheaders());

    let taskscontainer = document.createElement('div');
    taskscontainer.setAttribute('class', 'taskscontainer');
    projectpage.appendChild(taskscontainer);

    storeprojpages(projectpage.id);

    let projpages = document.getElementsByClassName('projectpage');
    
    for (var x=0; x < (projpages.length - 1); ++x) {
        projpages[x].style.visibility = 'hidden';
        projpages[x].style.width = '0px';
        projpages[x].style.height = '0px';
    }
    
    let periodpages = document.getElementsByClassName('periodcontainer');

    for (var x=0; x < (periodpages.length - 1); ++x) {
        periodpages[x].style.visibility = 'hidden';
        periodpages[x].style.width = '0px';
        periodpages[x].style.height = '0px';
    }

    
    projedit.addEventListener('click', (e) => {
        if (!document.forms[0]) {
        let projtitle = e.currentTarget.previousElementSibling;
        let projname = projtitle.textContent;
        editprojform.appendChild(projectForms('edit', projname));
    }})

    
    projtask.addEventListener('click', (e) => {
        if (!document.forms[0]) {
        todopopup.appendChild(toDoForms('create'));
    }})
}
    



const projectForms = (projformtype, projectname) => {
        let projectform = document.createElement('form');
        projectform.setAttribute('id', 'projectform');
        projectform.setAttribute('class', 'form');
        
        let projformtitle = document.createElement('div');
        projformtitle.setAttribute('id', 'projformtitle');
        if (projformtype == 'create') {
        projformtitle.textContent = 'New Project';
        }
        else if (projformtype == 'edit') {
        projformtitle.textContent = 'Edit Project';
        }
        projectform.appendChild(projformtitle);

        let projinputcontainer = document.createElement('div');
        projinputcontainer.setAttribute('id', 'projinputcontainer');
        let projinput = document.createElement('input');
        projinput.setAttribute('type', 'text');
        projinput.setAttribute('id', 'projinput');
        projinput.setAttribute('required', '');
        if (projformtype == 'edit') {
            projinput.defaultValue = projectname;
        }
        let projlabel = document.createElement('label');
        projlabel.setAttribute('for', 'projinput');
        if (projformtype == 'create') {
        projlabel.setAttribute('id', 'projlabelcreate');
        projlabel.textContent = 'Project Name: ';
        }
        else if (projformtype == 'edit') {
        projlabel.setAttribute('id', 'projlabeledit');
        projlabel.textContent = 'Change Project Name: ';
        }
        projinputcontainer.appendChild(projinput);
        projinputcontainer.appendChild(projlabel);
        projectform.appendChild(projinputcontainer);

        let projformbtns = document.createElement('div');
        projformbtns.setAttribute('id', 'projformbtns');
        projectform.appendChild(projformbtns);

        let projsubmit = document.createElement('button');
        projsubmit.setAttribute('type', 'submit');
        projsubmit.setAttribute('id', 'projsubmit');
        if (projformtype == 'create') {
        projsubmit.textContent = 'Add Project';
        }
        else if (projformtype == 'edit') {
        projsubmit.textContent = 'Save Changes';
        }
        projformbtns.appendChild(projsubmit);

        projsubmit.addEventListener('click', (e) => {
            e.preventDefault();
            if (projectform.reportValidity() === true) {

            if (projformtype === 'create') {
                let pagecontainer = document.getElementById('pagecontainer');
                let pagechilds = pagecontainer.childNodes;
                for (const child of pagechilds) {
                    child.style.visibility = 'hidden';
                    child.style.width = '0px';
                    child.style.height = '0px';
                }
                projectTile(projinput.value);
                projectpage(projinput.value);
                projectform.remove();
                projectpopup.remove();
            }

            else if (projformtype === 'edit') {
                let projid = projectform.parentElement.parentElement.id;
                let newname = projinput.value;
                projectform.remove();
                editprojtile(newname, projid);
            }

            
        }
        })

        let projcancel = document.createElement('button');
        projcancel.setAttribute('id', 'projcancel');
        projcancel.setAttribute('type', 'button');
        projcancel.textContent = 'Cancel';
        projformbtns.appendChild(projcancel);
        projcancel.addEventListener('click', () => {

            if (projformtype === 'create') {
            projectform.remove();
            projectpopup.remove();
            }

            else if (projformtype === 'edit') {
                projectform.remove();
            }
        })
        
        if (projformtype === 'edit') {
        let projdelete = document.createElement('button');
        projdelete.setAttribute('type', 'button');
        projdelete.setAttribute('id', 'projdelete');
        projdelete.textContent = 'Delete Project';
        projectform.appendChild(projdelete);

        projdelete.addEventListener('click', () => {
            
            deleteprojtile();
            projectform.remove();
        }) 

    }

    return projectform;
}

const sorttodos = () => {
    let projpages = document.getElementsByClassName('projectpage');
    let projtodos = document.querySelectorAll('todotile');
    for (let x=0; x < (projpages.length); ++x) {
        let project = document.getElementById(`projpage${x}`);
        let projectchilds = project.childNodes;
        let todoclass = document.querySelectorAll(`tileofproj${x}`);
        for (const child of projectchilds) {
            if (child.className == 'taskscontainer') {
                for (let k=0; k < (todoclass.length); ++k) {
                    if (!child.contains(todoclass[k])) {
                        child.appendChild(todoclass[k]);
                    }
                }
            }
        }
    }
}


const periodpage = (period) => {

    let pagecontainer = document.getElementById('pagecontainer');
    let periodcontainer = document.createElement('div');
    periodcontainer.setAttribute('class', 'periodcontainer');
    pagecontainer.appendChild(periodcontainer);


    let periodtitle = document.createElement('div');
    periodtitle.setAttribute('class', 'periodtitle')
    if (period == 'home') {
    periodcontainer.setAttribute('id', 'homeperiod');
    periodtitle.textContent = 'Home';
    }
    else if (period == 'today') {
    periodcontainer.setAttribute('id', 'todayperiod');
    periodtitle.textContent = 'Today';
    }
    else if (period == 'week') {
    periodcontainer.setAttribute('id', 'weekperiod');
    periodtitle.textContent = 'This Week';
    }

    periodcontainer.appendChild(periodtitle);

    let todopopup = document.createElement('div');
    todopopup.setAttribute('class', 'todopopup');
    periodcontainer.appendChild(todopopup);

    periodcontainer.appendChild(taskheaders());
    
    let periodtaskcontainer = document.createElement('div');
    periodtaskcontainer.setAttribute('class', 'periodtaskcontainer');
    periodcontainer.appendChild(periodtaskcontainer);


    return periodcontainer;
}

const sorttiles = (period) => {
    clearforms();
    let todotiles = [].slice.call(document.getElementsByClassName('todotile'));
    let tiledates = [].slice.call(document.getElementsByClassName('tiledate'));


    if (period == 'home') {
        let homeperiod = document.getElementById('homeperiod');
        let homechilds = homeperiod.childNodes;
        for (const child of homechilds) {
            if (child.className == 'periodtaskcontainer') {
            for (let x=0; x < (todotiles.length); ++x) {
                child.appendChild(todotiles[x]);
                console.log(todotiles.length);
            }
            }
        }
    }

    else if (period == 'today') {
        let todayperiod = document.getElementById('todayperiod');
        let todaychilds = todayperiod.childNodes;
        for (const child of todaychilds) {
            if (child.className == 'periodtaskcontainer') {
            for (let x=0; x < (todotiles.length); ++x) { 
                    let date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(tiledates[x].textContent);
                    if ((0,date_fns_isToday__WEBPACK_IMPORTED_MODULE_4__["default"])(date) == true) {
                        child.appendChild(todotiles[x])
                        
                }
            }
        }  
        }
    }

    else if (period == 'week') {
        let weekperiod = document.getElementById('weekperiod');
        let weekchilds = weekperiod.childNodes;
        for (const child of weekchilds) {
            if (child.className == 'periodtaskcontainer') {
            for (let x=0; x < (todotiles.length); ++x) {
                    let date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_3__["default"])(tiledates[x].textContent);
                    if ((0,date_fns_isSameWeek__WEBPACK_IMPORTED_MODULE_5__["default"])(date, (new Date)) == true) {
                        child.appendChild(todotiles[x])
                    }
                }
        }
    }
}
}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb2RvbXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEU7QUFDakM7QUFDTjtBQUNFO0FBQ007QUFDSjs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFVBQVU7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0Esa0VBQWtFLE9BQU87QUFDekU7QUFDQSxnREFBZ0QsaUJBQWlCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQU87QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdDQUFT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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3QkFBd0I7QUFDbEQsK0JBQStCLDZEQUFRO0FBQ3ZDLHdCQUF3Qiw0REFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdCQUF3QjtBQUNsRCwrQkFBK0IsNkRBQVE7QUFDdkMsd0JBQXdCLCtEQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHbUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb2Zucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9pbnRlcmZhY2Vycy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvZG9tcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG5jb25zdCB0b0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9XG59O1xuXG5sZXQgbXl0b0RvcyA9IFtdO1xuXG5jb25zdCBQdXNodG9EbyA9ICh0b0RvSXRlbSkgPT4ge1xuICAgIG15dG9Eb3MucHVzaCh0b0RvSXRlbSk7XG59XG5cbmNvbnN0IHRpdGxlVXBkYXRlID0gKHRvRG9JdGVtLCBuZXdUaXRsZSkgPT4ge1xuICAgIHRvRG9JdGVtLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IGRlc2NyaXB0aW9uVXBkYXRlID0gKHRvRG9JdGVtLCBuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgIHRvRG9JdGVtLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IGR1ZURhdGVVcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld2R1ZURhdGUpID0+IHtcbiAgICB0b0RvSXRlbS5kdWVEYXRlID0gbmV3ZHVlRGF0ZTtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgcHJpb3JpdHlVcGRhdGUgPSAodG9Eb0l0ZW0sIG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgdG9Eb0l0ZW0ucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICByZXR1cm4ge3RvRG9JdGVtfTtcbn1cblxuY29uc3QgZGVsZXRlVG9EbyA9ICAodG9Eb0l0ZW0pID0+IHtcbiAgICB0b0RvSXRlbSA9IG51bGw7XG4gICAgcmV0dXJuIHt0b0RvSXRlbX07XG59XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSAoKSA9PiBbXTtcbiAgICByZXR1cm4ge3RpdGxlLCBwcm9qZWN0QXJyYXl9XG59XG5cbmxldCBteVByb2plY3RzID0gW107XG5cbmNvbnN0IHB1c2hQcm9qZWN0ID0gKHByb2plY3RJdGVtKSA9PiB7XG4gICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3RJdGVtKTtcbn1cblxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SXRlbSkgPT4ge1xuICAgIHByb2plY3RJdGVtID0gbnVsbDtcbiAgICByZXR1cm4ge3Byb2plY3RJdGVtfVxufVxuXG5jb25zdCBwcm9qZWN0VG9Eb3MgPSAocHJvamVjdEl0ZW0sIHRvRG9JdGVtKSA9PiB7XG4gICAgcHJvamVjdEl0ZW0ucHVzaCh0b0RvSXRlbSk7XG59XG5cbmV4cG9ydCB7dG9EbywgbXl0b0RvcywgUHVzaHRvRG8sIHRpdGxlVXBkYXRlLCBkZXNjcmlwdGlvblVwZGF0ZSwgZHVlRGF0ZVVwZGF0ZSwgcHJpb3JpdHlVcGRhdGUsIGRlbGV0ZVRvRG8sIHByb2plY3QsIG15UHJvamVjdHMsIHB1c2hQcm9qZWN0LCBkZWxldGVQcm9qZWN0LCBwcm9qZWN0VG9Eb3N9IiwiaW1wb3J0IHt0b0RvLCBteXRvRG9zLCBQdXNodG9EbywgdGl0bGVVcGRhdGUsIGRlc2NyaXB0aW9uVXBkYXRlLCBkdWVEYXRlVXBkYXRlLCBwcmlvcml0eVVwZGF0ZSwgZGVsZXRlVG9EbywgcHJvamVjdCwgbXlQcm9qZWN0cywgcHVzaFByb2plY3QsIGRlbGV0ZVByb2plY3QsIHByb2plY3RUb0Rvc30gZnJvbSAnLi90b2RvZm5zLmpzJztcblxuY29uc3QgY3JlYXRlcHJvanRpbGUgPSAocHJvam5hbWUpID0+IHtcbiAgICBsZXQgbmV3cHJvamVjdCA9ICgpID0+IHByb2plY3QocHJvam5hbWUpO1xuICAgIHB1c2hQcm9qZWN0KHByb2puYW1lKTtcbiAgICBsZXQgcHJvamVjdElEID0gKCkgPT4gYHByb2plY3Qke215UHJvamVjdHMubGVuZ3RoLTF9YDtcbiAgICByZXR1cm4ge25ld3Byb2plY3QsIHByb2plY3RJRH07XG59O1xuXG5jb25zdCBwcm9qcGFnZUlEID0gKCkgPT4ge1xuICAgIGxldCBwYWdlSUQgPSAoKSA9PiBgcHJvanBhZ2Uke215UHJvamVjdHMubGVuZ3RoLTF9YDtcbiAgICByZXR1cm4ge3BhZ2VJRH1cbn0gXG5cbmNvbnN0IGRlbGV0ZXByb2ogPSAocHJvam51bSkgPT4ge1xuICAgIGxldCBwcm9qZWN0SXRlbSA9IG15UHJvamVjdHNbcHJvam51bV07XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SXRlbSk7XG59XG5cbmV4cG9ydCB7Y3JlYXRlcHJvanRpbGUsIHByb2pwYWdlSUQsIGRlbGV0ZXByb2p9O1xuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7Y3JlYXRlcHJvanRpbGUsIHByb2pwYWdlSUQsIGRlbGV0ZXByb2p9IGZyb20gJy4vdG9kb2ludGVyZmFjZXJzLmpzJztcbmltcG9ydCBlZGl0cGljIGZyb20gJy4vcGVuY2lsLW91dGxpbmUuc3ZnJztcbmltcG9ydCBkZWxldGVwaWMgZnJvbSAnLi9kZWxldGUuc3ZnJztcbmltcG9ydCBpc1RvZGF5IGZyb20gJ2RhdGUtZm5zL2lzVG9kYXknO1xuaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSAnZGF0ZS1mbnMvaXNTYW1lV2Vlayc7XG5pbXBvcnQgcGFyc2VJU08gZnJvbSAnZGF0ZS1mbnMvcGFyc2VJU08nO1xuXG5jb25zdCBwcm9qYXJyYXkgPSBbXTtcbmNvbnN0IHByb2pwYWdlc2FycmF5ID0gW107XG5cbmNvbnN0IHN0b3JlcHJvamVjdHMgPSAoaXRlbSkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSk7XG4gICAgbGV0IGVsZW1lbnRzdHJpbmcgPSBlbGVtZW50Lm91dGVySFRNTDtcbiAgICBwcm9qYXJyYXkucHVzaChlbGVtZW50c3RyaW5nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qYXJyYXkpKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qYXJyYXkubGVuZ3RoKTtcbn1cblxuY29uc3QgbG9hZHByb2plY3RzID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcnVucGFja2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSB8fCAnW10nKTtcbiAgICBjb25zb2xlLmxvZyhwYXJ1bnBhY2tlZCk7XG4gICAgbGV0IHByb2pUaWxlTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qVGlsZUxpc3QnKTtcbiAgICBwYXJ1bnBhY2tlZC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvalRpbGVMaXN0LmlubmVySFRNTCArPSBwcm9qZWN0O1xuICAgIHByb2phcnJheS5wdXNoKHByb2plY3QpO1xuICAgIH0pXG59XG5cbmNvbnN0IHN0b3JlcHJvanBhZ2VzID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0pO1xuICAgIGxldCBlbGVtZW50c3RyaW5nID0gZWxlbWVudC5vdXRlckhUTUw7XG4gICAgcHJvanBhZ2VzYXJyYXkucHVzaChlbGVtZW50c3RyaW5nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcbn1cblxuY29uc3QgbG9hZHByb2pwYWdlcyA9ICgpID0+IHtcbiAgICBjb25zdCBwcHBhcnVucGFja2VkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHBhZ2VzJykgfHwgJ1tdJyk7XG4gICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgIHBwcGFydW5wYWNrZWQuZm9yRWFjaCgocGFnZSkgPT4ge1xuICAgICAgICBwYWdlY29udGFpbmVyLmlubmVySFRNTCArPSBwYWdlO1xuICAgICAgICBwYWdlY29udGFpbmVyLmxhc3RDaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgIHBhZ2Vjb250YWluZXIubGFzdENoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgIHBhZ2Vjb250YWluZXIubGFzdENoaWxkLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICBwcm9qcGFnZXNhcnJheS5wdXNoKHBhZ2UpO1xuICAgIH0pXG59XG5cbmNvbnN0IGNsZWFyZm9ybXMgPSAoKSA9PiB7XG4gICAgbGV0IGZvcm1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9ybScpXG4gICAgaWYgKGZvcm1zICE9PSBudWxsKSB7XG4gICAgICAgIGZvciAoY29uc3QgZm9ybSBvZiBmb3Jtcykge1xuICAgICAgICAgICAgZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgdG9Eb0Zvcm1zID0gKHRvZG9mb3JtdHlwZSwgdG9kb25hbWUsIHRvZG9kZXNjcmlwLCB0b2RvZGF0ZSwgdG9kb3ByaW8sIHRvZG90aWxlaWQpID0+IHtcbiAgICBsZXQgdG9kb2Zvcm1jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG9mb3JtY29udGFpbmVyJyk7XG4gICAgdG9kb2Zvcm1jb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XG4gICAgbGV0IHRvZG9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRvZG9mb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm0nKTtcbiAgICB0b2RvZm9ybWNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvZm9ybSk7XG4gICAgXG4gICAgbGV0IHRvZG9mb3JtdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvZm9ybXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kb2Zvcm10aXRsZScpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICB0b2RvZm9ybXRpdGxlLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICB9XG4gICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgIHRvZG9mb3JtdGl0bGUudGV4dENvbnRlbnQgPSAnRWRpdCBUYXNrJztcbiAgICB9XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQodG9kb2Zvcm10aXRsZSk7XG5cbiAgICBsZXQgc2Vjb25kdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY29uZHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsICdzZWNvbmR0b2RvJyk7XG4gICAgdG9kb2Zvcm0uYXBwZW5kQ2hpbGQoc2Vjb25kdG9kbyk7XG5cbiAgICBsZXQgbmFtZWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lY29udGFpbmVyJyk7XG4gICAgbGV0IHRhc2tuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0YXNrbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRhc2tuYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza25hbWUnKTtcbiAgICB0YXNrbmFtZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIHRhc2tuYW1lLmRlZmF1bHRWYWx1ZSA9IHRvZG9uYW1lO1xuICAgIH1cbiAgICBsZXQgbmFtZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBuYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lbGFiZWwnKTtcbiAgICBuYW1lbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFza25hbWUnKTtcbiAgICBuYW1lbGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBOYW1lOiAnO1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChuYW1lY29udGFpbmVyKTtcbiAgICBuYW1lY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tuYW1lKTtcbiAgICBuYW1lY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVsYWJlbCk7XG5cbiAgICBsZXQgZGVzY3JpcGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwY29udGFpbmVyJyk7XG4gICAgbGV0IGRlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRlc2NyaXAuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcCcpO1xuICAgIGRlc2NyaXAuc3R5bGUud2lkdGggPSAnMzAlJztcbiAgICBkZXNjcmlwLnN0eWxlLmhlaWdodCA9ICczMHB4JztcbiAgICBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBkZXNjcmlwLmRlZmF1bHRWYWx1ZSA9IHRvZG9kZXNjcmlwO1xuICAgIH07XG4gICAgbGV0IGRlc2NyaXBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZGVzY3JpcGxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcGxhYmVsJyk7XG4gICAgZGVzY3JpcGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXAnKTtcbiAgICBkZXNjcmlwbGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICc7XG5cbiAgICB0b2RvZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwY29udGFpbmVyKTtcbiAgICBkZXNjcmlwY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXApO1xuICAgIGRlc2NyaXBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcGxhYmVsKTtcblxuICAgIGxldCBkYXRlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGVjb250YWluZXInKTtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGRhdGUuZGVmYXVsdFZhbHVlID0gdG9kb2RhdGU7XG4gICAgfTtcbiAgICBsZXQgZGF0ZWxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkYXRlbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlbGFiZWwnKTtcbiAgICBkYXRlbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGF0ZScpO1xuICAgIGRhdGVsYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOiAnO1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChkYXRlY29udGFpbmVyKTtcbiAgICBkYXRlY29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGRhdGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZWxhYmVsKTtcblxuICAgIFxuICAgIGxldCBwcmlvcml0eWNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByaW9yaXR5Y29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHljb250YWluZXInKTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBcbiAgICBsZXQgcHJpb3JpdHlsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcHJpb3JpdHlsYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yaXR5bGFiZWwnKTtcbiAgICBwcmlvcml0eWxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gICAgcHJpb3JpdHlsYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJztcbiAgICBsZXQgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIGhpZ2gudmFsdWUgPSBoaWdoLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIGxldCBub3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBub3JtYWwudmFsdWUgPSBub3JtYWwudGV4dENvbnRlbnQgPSAnTm9ybWFsJztcbiAgICBsZXQgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgbG93LnZhbHVlID0gbG93LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQobm9ybWFsKTtcbiAgICBwcmlvcml0eS5hcHBlbmRDaGlsZChsb3cpO1xuICAgIGlmICh0b2RvZm9ybXR5cGUgPT0gJ2VkaXQnKSB7XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnSGlnaCcpIHtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBoaWdoLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvcHJpbyA9PSAnTm9ybWFsJykge1xuICAgICAgICBwcmlvcml0eS52YWx1ZSA9IG5vcm1hbC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9kb3ByaW8gPT0gJ0xvdycpIHtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBsb3cudmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc2Vjb25kdG9kby5hcHBlbmRDaGlsZChwcmlvcml0eWNvbnRhaW5lcik7XG4gICAgcHJpb3JpdHljb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHByaW9yaXR5Y29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5bGFiZWwpO1xuXG4gICAgbGV0IGZvdXJ0aHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3VydGh0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm91cnRodG9kbycpO1xuICAgIHRvZG9mb3JtLmFwcGVuZENoaWxkKGZvdXJ0aHRvZG8pO1xuXG4gICAgbGV0IHN1Ym1pdHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBzdWJtaXR0YXNrLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XG4gICAgc3VibWl0dGFzay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdHRhc2snKTtcbiAgICBpZiAodG9kb2Zvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgc3VibWl0dGFzay50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRvZG9mb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICBzdWJtaXR0YXNrLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgfVxuXG4gICAgZm91cnRodG9kby5hcHBlbmRDaGlsZChzdWJtaXR0YXNrKTtcblxuICAgIHN1Ym1pdHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodG9kb2Zvcm0ucmVwb3J0VmFsaWRpdHkoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRvZG9mb3JtdHlwZSA9PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYXJlbnQgPSB0b2RvZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJRCA9IHByb2plY3RwYXJlbnQuaWQ7XG4gICAgICAgICAgICBsZXQgcGFyZW50bnVtID0gcGFyZW50SUQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHByb2plY3R0YXNrY29udCA9IHByb2plY3RwYXJlbnQubGFzdENoaWxkO1xuICAgICAgICAgICAgcHJvamVjdHRhc2tjb250LmFwcGVuZENoaWxkKHRvRG9UaWxlKHBhcmVudG51bSwgdGFza25hbWUudmFsdWUsIGRlc2NyaXAudmFsdWUsIGRhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlKSk7XG4gICAgICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhcmVudG51bV0gPSBwcm9qZWN0cGFyZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9kb2Zvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICAgICAgbGV0IHByb2plY3RwYXJlbnQgPSB0b2RvZm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGxldCBwYXJlbnRJRCA9IHByb2plY3RwYXJlbnQuaWQ7XG4gICAgICAgICAgICBsZXQgcGFyZW50bnVtID0gcGFyZW50SUQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG90aWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kb3RpbGVpZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvdGlsZWlkKTtcbiAgICAgICAgICAgIGxldCB0aWxlY2hpbGRzID0gdG9kb3RpbGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGlsZWNoaWxkcykge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ2ZpcnN0cm93Jykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3Ryb3djaGlsZHMgPSBjaGlsZC5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJvd2NoaWxkIG9mIGZpcnN0cm93Y2hpbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93Y2hpbGQuY2xhc3NOYW1lID09ICd0aWxlbmFtZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3djaGlsZC50ZXh0Q29udGVudCA9IHRhc2tuYW1lLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd2NoaWxkLmNsYXNzTmFtZSA9PSAndGlsZWRhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y2hpbGQudGV4dENvbnRlbnQgPSBkYXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd2NoaWxkLmNsYXNzTmFtZSA9PSAndGlsZXByaW8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Y2hpbGQudGV4dENvbnRlbnQgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ2Rlc2NleHBhbmQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnRleHRDb250ZW50ID0gZGVzY3JpcC52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0b2RvZm9ybWNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHByb2pwYWdlc2FycmF5W3BhcmVudG51bV0gPSBwcm9qZWN0cGFyZW50Lm91dGVySFRNTDtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cGFnZXMnLCBKU09OLnN0cmluZ2lmeShwcm9qcGFnZXNhcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG5cbiAgICAgICAgIH0pXG5cbiAgICBsZXQgY2FuY2VsdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGNhbmNlbHRhc2suc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcbiAgICBjYW5jZWx0YXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2FuY2VsdGFzaycpO1xuICAgIGNhbmNlbHRhc2sudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcblxuICAgIGNhbmNlbHRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2RvZm9ybS5yZW1vdmUoKTtcbiAgICAgICAgdG9kb2Zvcm1jb250YWluZXIucmVtb3ZlKCk7XG4gICAgfSlcblxuICAgIGZvdXJ0aHRvZG8uYXBwZW5kQ2hpbGQoY2FuY2VsdGFzayk7XG5cbiAgICByZXR1cm4gdG9kb2Zvcm1jb250YWluZXI7XG5cbn1cblxuXG5jb25zdCB0b0RvVGlsZSA9ICh0aWxlaWQsIHRvZG9uYW1lLCB0b2RvZGVzY3JpcCwgdG9kb2RhdGUsIHRvZG9wcmlvKSA9PiB7XG4gICAgbGV0IHRvZG90aWxlY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0b2RvdGlsZSB0aWxlb2Zwcm9qJHt0aWxlaWR9YCk7XG4gICAgbGV0IHRvZG90aWxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG90aWxlJylcbiAgICB0b2RvdGlsZWNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRpbGUke3RvZG90aWxlcy5sZW5ndGh9YCk7XG4gICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoO1xuXG4gICAgbGV0IGZpcnN0cm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlyc3Ryb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaXJzdHJvdycpO1xuICAgIHRvZG90aWxlY29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0cm93KTtcblxuICAgIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveCcpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQgPT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIHRvZG90aWxlY29udGFpbmVyLnN0eWxlLmNvbG9yID0gJ3JnYmEoMjExLDIxMSwyMTEsMC41KSc7XG4gICAgICAgICAgICB0aWxlZGVzY2J1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgICAgICBlZGl0YnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMC41JztcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAuNSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hlY2tib3guY2hlY2tlZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdG9kb3RpbGVjb250YWluZXIuc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgdGlsZWRlc2NidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIGVkaXRidXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgIGRlbGV0ZWJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGxldCB0aWxlbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVuYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZW5hbWUnKTtcbiAgICB0aWxlbmFtZS50ZXh0Q29udGVudCA9IHRvZG9uYW1lO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKHRpbGVuYW1lKTtcblxuICAgIGxldCB0aWxlZGVzY2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpbGVkZXNjZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRlc2NkaXYnKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlZGVzY2Rpdik7XG4gICAgbGV0IHRpbGVkZXNjYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGlsZWRlc2NidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHRpbGVkZXNjYnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRlc2NidXR0b24nKTtcbiAgICB0aWxlZGVzY2J1dHRvbi50ZXh0Q29udGVudCA9ICdEZXNjLic7XG4gICAgdGlsZWRlc2NkaXYuYXBwZW5kQ2hpbGQodGlsZWRlc2NidXR0b24pO1xuXG4gICAgdGlsZWRlc2NidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChkZXNjZXhwYW5kLnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBkZXNjZXhwYW5kLnN0eWxlLndpZHRoID0gdG9kb3RpbGVjb250YWluZXIuc3R5bGUud2lkdGg7XG4gICAgICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJ2ZpdC1jb250ZW50JztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIGRlc2NleHBhbmQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgZGVzY2V4cGFuZC5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgdGlsZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aWxlZGF0ZS50ZXh0Q29udGVudCA9IHRvZG9kYXRlO1xuICAgIHRpbGVkYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGlsZWRhdGUnKTtcbiAgICBmaXJzdHJvdy5hcHBlbmRDaGlsZCh0aWxlZGF0ZSk7XG4gICAgXG4gICAgbGV0IHRpbGVwcmlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGlsZXByaW8udGV4dENvbnRlbnQgPSB0b2RvcHJpbztcbiAgICB0aWxlcHJpby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpbGVwcmlvJyk7XG4gICAgZmlyc3Ryb3cuYXBwZW5kQ2hpbGQodGlsZXByaW8pO1xuXG4gICAgbGV0IGVkaXRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0YnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBlZGl0YnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdGJ1dHRvbicpO1xuICAgIGxldCBlZGl0YnV0dG9ucGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZWRpdGJ1dHRvbnBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRidXR0b25waWMnKTtcbiAgICBlZGl0YnV0dG9ucGljLnNyYyA9IGVkaXRwaWM7XG4gICAgZWRpdGJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0YnV0dG9ucGljKTtcblxuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGVkaXRidXR0b24pO1xuXG4gICAgZWRpdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2VkaXRidXR0b25waWMnKSB7XG4gICAgICAgIGxldCB0b2RvdGlsZWlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgaWYgKHBvcHVwLnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgfX19XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnZWRpdGJ1dHRvbicpIHtcbiAgICAgICAgbGV0IHRvZG90aWxlaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlaWQpO1xuICAgICAgICBsZXQgdG9kb3BvcHVwcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG9wb3B1cCcpO1xuICAgICAgICBmb3IgKGNvbnN0IHBvcHVwIG9mIHRvZG9wb3B1cHMpIHtcbiAgICAgICAgaWYgKHBvcHVwLnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZCh0b0RvRm9ybXMoJ2VkaXQnLCB0aWxlbmFtZS50ZXh0Q29udGVudCwgZGVzY2V4cGFuZC50ZXh0Q29udGVudCwgdGlsZWRhdGUudGV4dENvbnRlbnQsIHRpbGVwcmlvLnRleHRDb250ZW50LCB0b2RvdGlsZWlkKSk7XG4gICAgfX19XG4gICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIGxldCBkZWxldGVidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZWJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbGV0ZWJ1dHRvbicpO1xuICAgIGxldCBkZWxldGVidXR0b25waWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVidXR0b25waWMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWxldGVidXR0b25waWMnKTtcbiAgICBkZWxldGVidXR0b25waWMuc3JjID0gZGVsZXRlcGljO1xuICAgIGRlbGV0ZWJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVidXR0b25waWMpO1xuICAgIGZpcnN0cm93LmFwcGVuZENoaWxkKGRlbGV0ZWJ1dHRvbik7XG5cbiAgICBkZWxldGVidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICB0b2RvdGlsZWNvbnRhaW5lci5yZW1vdmUoKVxuICAgIH0pXG5cbiAgICBsZXQgZGVzY2V4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NleHBhbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjZXhwYW5kJyk7XG4gICAgZGVzY2V4cGFuZC50ZXh0Q29udGVudCA9IGAke3RvZG9kZXNjcmlwfWA7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZGVzY2V4cGFuZC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgIGRlc2NleHBhbmQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgdG9kb3RpbGVjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY2V4cGFuZCk7XG5cbiAgICByZXR1cm4gdG9kb3RpbGVjb250YWluZXI7XG5cbn1cblxuXG5jb25zdCBwcm9qZWN0VGlsZSA9IChwcm9qZWN0bmFtZSkgPT4ge1xuICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2p0aWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHRpbGUnKTtcbiAgICBwcm9qdGlsZS50ZXh0Q29udGVudCA9IHByb2plY3RuYW1lO1xuICAgIHByb2p0aWxlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvamVjdCR7cHJvamFycmF5Lmxlbmd0aH1gKTtcbiAgICBsZXQgcHJvalRpbGVMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pUaWxlTGlzdCcpO1xuICAgIHByb2pUaWxlTGlzdC5hcHBlbmRDaGlsZChwcm9qdGlsZSk7XG4gICAgc3RvcmVwcm9qZWN0cyhwcm9qdGlsZS5pZCk7XG5cbiAgICBwcm9qdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rlc2NleHBhbmQnKTtcbiAgICAgICAgaWYgKGRlc2NzLmxlbmd0aCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKSB7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZGVzYy5zdHlsZS53aWR0aCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIGRlc2Muc3R5bGUuaGVpZ2h0ID0gJzBweDsnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGNsZWFyZm9ybXMoKTtcbiAgICAgICAgc29ydHRvZG9zKCk7XG4gICAgICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICAgICAgbGV0IHBhZ2Vub2RlcyA9IHBhZ2Vjb250YWluZXIuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHBhZ2Vub2Rlcykge1xuICAgICAgICAgICAgaWYgKG5vZGUuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgbm9kZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGlsZWlkID0gZS50YXJnZXQuaWQ7XG4gICAgICAgIGxldCB0aWxlaWRudW0gPSB0aWxlaWQucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xuICAgICAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvanBhZ2Uke3RpbGVpZG51bX1gKTtcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgcHJvanBhZ2Uuc3R5bGUud2lkdGggPSBwYWdlY29udGFpbmVyLnN0eWxlLndpZHRoXG4gICAgICAgIHByb2pwYWdlLnN0eWxlLmhlaWdodCA9ICdmaXQtY29udGVudCc7XG4gICAgICAgIGxldCB0YXNrY29udCA9IHByb2pwYWdlLnF1ZXJ5U2VsZWN0b3IoJy50YXNrc2NvbnRhaW5lcicpO1xuICAgICAgICBsZXQgcHJvanBhZ2V0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYHRpbGVvZnByb2oke3RpbGVpZG51bX1gKTtcbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2pwYWdldGFza3MpIHtcbiAgICAgICAgICAgIGlmICghdGFza2NvbnQuY29udGFpbnModGFzaykpe1xuICAgICAgICAgICAgdGFza2NvbnQuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG4gICAgXG59XG5cbmNvbnN0IGVkaXRwcm9qdGlsZSA9IChwcm9qbmFtZSwgcHJvanBhZ2VuYW1lKSA9PiB7XG4gICAgbGV0IHByb2pwYWdldGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qcGFnZXRpdGxlJyk7XG4gICAgZm9yIChjb25zdCB0aXRsZSBvZiBwcm9qcGFnZXRpdGxlKSB7XG4gICAgICAgIGlmICh0aXRsZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvam5hbWU7ICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHByb2pwYWdlbnVtID0gcHJvanBhZ2VuYW1lLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICBsZXQgcHJvanBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcm9qcGFnZW5hbWUpO1xuICAgIHByb2pwYWdlc2FycmF5W3Byb2pwYWdlbnVtXSA9IHByb2pwYWdlLm91dGVySFRNTDtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHBhZ2VzJywgSlNPTi5zdHJpbmdpZnkocHJvanBhZ2VzYXJyYXkpKTtcbiAgICBsZXQgcHJvanRpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdCR7cHJvanBhZ2VudW19YCk7XG4gICAgcHJvanRpbGUudGV4dENvbnRlbnQgPSBwcm9qbmFtZTtcbiAgICBwcm9qYXJyYXlbcHJvanBhZ2VudW1dID0gcHJvanRpbGUub3V0ZXJIVE1MO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2phcnJheSkpO1xuICAgIH1cblxuY29uc3QgZGVsZXRlcHJvanRpbGUgPSAoKSA9PiB7XG4gICAgbGV0IHByb2pwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdHBhZ2UnKTtcbiAgICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcHJvanBhZ2UpIHtcbiAgICAgICAgaWYgKHBhZ2Uuc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicpIHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0cGFnZWlkID0gcGFnZS5pZDtcbiAgICAgICAgICAgIGxldCBwYWdlaWRudW0gPSBwcm9qZWN0cGFnZWlkLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgICAgIGRlbGV0ZXByb2oocGFnZWlkbnVtKTtcbiAgICAgICAgICAgIGxldCBwcm9qdGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwcm9qZWN0JHtwYWdlaWRudW19YCk7XG4gICAgICAgICAgICBwYWdlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvanRpbGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IHRhc2toZWFkZXJzID0gKCkgPT4ge1xuICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcblxuICAgIGxldCB0YXNraGVhZGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2toZWFkZXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza2hlYWRlcnMnKTtcbiAgICB0YXNraGVhZGVycy5zdHlsZS53aWR0aCA9IHBhZ2Vjb250YWluZXIuc3R5bGUud2lkdGg7XG5cbiAgICBsZXQgbmFtZWhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWVoZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYW1laGVhZGVyJyk7XG4gICAgbmFtZWhlYWRlci50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChuYW1laGVhZGVyKTtcblxuICAgIGxldCBkZXNjaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY2hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NoZWFkZXInKTtcbiAgICBkZXNjaGVhZGVyLnRleHRDb250ZW50ID0gJ0Rlc2MuJztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChkZXNjaGVhZGVyKTtcblxuICAgIGxldCBkYXRlaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZWhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGVoZWFkZXInKTtcbiAgICBkYXRlaGVhZGVyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChkYXRlaGVhZGVyKTtcblxuICAgIGxldCBwcmlvaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJpb2hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9oZWFkZXInKTtcbiAgICBwcmlvaGVhZGVyLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5JztcbiAgICB0YXNraGVhZGVycy5hcHBlbmRDaGlsZChwcmlvaGVhZGVyKTtcblxuICAgIGxldCBlZGl0aGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRoZWFkZXInKTtcbiAgICBlZGl0aGVhZGVyLnRleHRDb250ZW50ID0gJ0VkaXQnO1xuICAgIHRhc2toZWFkZXJzLmFwcGVuZENoaWxkKGVkaXRoZWFkZXIpO1xuXG4gICAgcmV0dXJuIHRhc2toZWFkZXJzO1xufVxuXG5cbmNvbnN0IHByb2plY3RwYWdlID0gKHByb2plY3RuYW1lKSA9PiB7XG5cbiAgICBsZXQgcGFnZWNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlY29udGFpbmVyJyk7XG4gICAgbGV0IHByb2plY3RwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdHBhZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cGFnZScpO1xuICAgIHByb2plY3RwYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCBgcHJvanBhZ2Uke3Byb2pwYWdlc2FycmF5Lmxlbmd0aH1gKTtcbiAgICBwYWdlY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RwYWdlKTtcbiAgICBsZXQgcHJvanRpdGxlbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2p0aXRsZWxpbmUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qdGl0bGVsaW5lJyk7XG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQocHJvanRpdGxlbGluZSk7XG5cbiAgICBsZXQgcHJvanBhZ2V0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2pwYWdldGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qcGFnZXRpdGxlJyk7XG4gICAgcHJvanBhZ2V0aXRsZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RuYW1lfWA7XG4gICAgcHJvanRpdGxlbGluZS5hcHBlbmRDaGlsZChwcm9qcGFnZXRpdGxlKTtcblxuICAgIGxldCBwcm9qZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plZGl0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVkaXQnKTtcbiAgICBsZXQgcHJvamVkaXRwaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwcm9qZWRpdHBpYy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plZGl0cGljJyk7XG4gICAgcHJvamVkaXRwaWMuc3JjID0gZWRpdHBpYztcbiAgICBwcm9qZWRpdC5hcHBlbmRDaGlsZChwcm9qZWRpdHBpYyk7XG4gICAgcHJvanRpdGxlbGluZS5hcHBlbmRDaGlsZChwcm9qZWRpdCk7XG5cbiAgICBsZXQgZWRpdHByb2pmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdHByb2pmb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdHByb2pmb3JtJyk7XG4gICAgcHJvamVjdHBhZ2UuYXBwZW5kQ2hpbGQoZWRpdHByb2pmb3JtKTtcblxuICAgIGxldCBkaXZwcm9qdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdnByb2p0YXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2cHJvanRhc2snKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZChkaXZwcm9qdGFzayk7XG4gICAgbGV0IHByb2p0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvanRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qdGFzaycpXG4gICAgcHJvanRhc2sudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgIGRpdnByb2p0YXNrLmFwcGVuZENoaWxkKHByb2p0YXNrKTtcblxuICAgIGxldCB0b2RvcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvcG9wdXAuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvcG9wdXAnKTtcbiAgICBwcm9qZWN0cGFnZS5hcHBlbmRDaGlsZCh0b2RvcG9wdXApO1xuICAgIFxuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKHRhc2toZWFkZXJzKCkpO1xuXG4gICAgbGV0IHRhc2tzY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza3Njb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrc2NvbnRhaW5lcicpO1xuICAgIHByb2plY3RwYWdlLmFwcGVuZENoaWxkKHRhc2tzY29udGFpbmVyKTtcblxuICAgIHN0b3JlcHJvanBhZ2VzKHByb2plY3RwYWdlLmlkKTtcblxuICAgIGxldCBwcm9qcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0cGFnZScpO1xuICAgIFxuICAgIGZvciAodmFyIHg9MDsgeCA8IChwcm9qcGFnZXMubGVuZ3RoIC0gMSk7ICsreCkge1xuICAgICAgICBwcm9qcGFnZXNbeF0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBwcm9qcGFnZXNbeF0uc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcHJvanBhZ2VzW3hdLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcGVyaW9kcGFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwZXJpb2Rjb250YWluZXInKTtcblxuICAgIGZvciAodmFyIHg9MDsgeCA8IChwZXJpb2RwYWdlcy5sZW5ndGggLSAxKTsgKyt4KSB7XG4gICAgICAgIHBlcmlvZHBhZ2VzW3hdLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgcGVyaW9kcGFnZXNbeF0uc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgICAgcGVyaW9kcGFnZXNbeF0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG4gICAgfVxuXG4gICAgXG4gICAgcHJvamVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIWRvY3VtZW50LmZvcm1zWzBdKSB7XG4gICAgICAgIGxldCBwcm9qdGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgbGV0IHByb2puYW1lID0gcHJvanRpdGxlLnRleHRDb250ZW50O1xuICAgICAgICBlZGl0cHJvamZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1zKCdlZGl0JywgcHJvam5hbWUpKTtcbiAgICB9fSlcblxuICAgIFxuICAgIHByb2p0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkge1xuICAgICAgICB0b2RvcG9wdXAuYXBwZW5kQ2hpbGQodG9Eb0Zvcm1zKCdjcmVhdGUnKSk7XG4gICAgfX0pXG59XG4gICAgXG5cblxuXG5jb25zdCBwcm9qZWN0Rm9ybXMgPSAocHJvamZvcm10eXBlLCBwcm9qZWN0bmFtZSkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHByb2plY3Rmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdGZvcm0nKTtcbiAgICAgICAgcHJvamVjdGZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtJyk7XG4gICAgICAgIFxuICAgICAgICBsZXQgcHJvamZvcm10aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZm9ybXRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamZvcm10aXRsZScpO1xuICAgICAgICBpZiAocHJvamZvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgICAgIHByb2pmb3JtdGl0bGUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgcHJvamZvcm10aXRsZS50ZXh0Q29udGVudCA9ICdFZGl0IFByb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3Rmb3JtLmFwcGVuZENoaWxkKHByb2pmb3JtdGl0bGUpO1xuXG4gICAgICAgIGxldCBwcm9qaW5wdXRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamlucHV0Y29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamlucHV0Y29udGFpbmVyJyk7XG4gICAgICAgIGxldCBwcm9qaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBwcm9qaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgcHJvamlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamlucHV0Jyk7XG4gICAgICAgIHByb2ppbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpO1xuICAgICAgICBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICAgICAgcHJvamlucHV0LmRlZmF1bHRWYWx1ZSA9IHByb2plY3RuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9qbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcm9qbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamlucHV0Jyk7XG4gICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT0gJ2NyZWF0ZScpIHtcbiAgICAgICAgcHJvamxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamxhYmVsY3JlYXRlJyk7XG4gICAgICAgIHByb2psYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IE5hbWU6ICc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvamZvcm10eXBlID09ICdlZGl0Jykge1xuICAgICAgICBwcm9qbGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qbGFiZWxlZGl0Jyk7XG4gICAgICAgIHByb2psYWJlbC50ZXh0Q29udGVudCA9ICdDaGFuZ2UgUHJvamVjdCBOYW1lOiAnO1xuICAgICAgICB9XG4gICAgICAgIHByb2ppbnB1dGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qaW5wdXQpO1xuICAgICAgICBwcm9qaW5wdXRjb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamxhYmVsKTtcbiAgICAgICAgcHJvamVjdGZvcm0uYXBwZW5kQ2hpbGQocHJvamlucHV0Y29udGFpbmVyKTtcblxuICAgICAgICBsZXQgcHJvamZvcm1idG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pmb3JtYnRucy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pmb3JtYnRucycpO1xuICAgICAgICBwcm9qZWN0Zm9ybS5hcHBlbmRDaGlsZChwcm9qZm9ybWJ0bnMpO1xuXG4gICAgICAgIGxldCBwcm9qc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHByb2pzdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICBwcm9qc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvanN1Ym1pdCcpO1xuICAgICAgICBpZiAocHJvamZvcm10eXBlID09ICdjcmVhdGUnKSB7XG4gICAgICAgIHByb2pzdWJtaXQudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PSAnZWRpdCcpIHtcbiAgICAgICAgcHJvanN1Ym1pdC50ZXh0Q29udGVudCA9ICdTYXZlIENoYW5nZXMnO1xuICAgICAgICB9XG4gICAgICAgIHByb2pmb3JtYnRucy5hcHBlbmRDaGlsZChwcm9qc3VibWl0KTtcblxuICAgICAgICBwcm9qc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Zm9ybS5yZXBvcnRWYWxpZGl0eSgpID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZm9ybXR5cGUgPT09ICdjcmVhdGUnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2Vjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIGxldCBwYWdlY2hpbGRzID0gcGFnZWNvbnRhaW5lci5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgcGFnZWNoaWxkcykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9qZWN0VGlsZShwcm9qaW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHByb2plY3RwYWdlKHByb2ppbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHBvcHVwLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9qZm9ybXR5cGUgPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qaWQgPSBwcm9qZWN0Zm9ybS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IG5ld25hbWUgPSBwcm9qaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZWRpdHByb2p0aWxlKG5ld25hbWUsIHByb2ppZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgbGV0IHByb2pjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pjYW5jZWwnKTtcbiAgICAgICAgcHJvamNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHByb2pjYW5jZWwudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICAgICAgcHJvamZvcm1idG5zLmFwcGVuZENoaWxkKHByb2pjYW5jZWwpO1xuICAgICAgICBwcm9qY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAocHJvamZvcm10eXBlID09PSAnY3JlYXRlJykge1xuICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICBwcm9qZWN0cG9wdXAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb2pmb3JtdHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBpZiAocHJvamZvcm10eXBlID09PSAnZWRpdCcpIHtcbiAgICAgICAgbGV0IHByb2pkZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcHJvamRlbGV0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIHByb2pkZWxldGUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZGVsZXRlJyk7XG4gICAgICAgIHByb2pkZWxldGUudGV4dENvbnRlbnQgPSAnRGVsZXRlIFByb2plY3QnO1xuICAgICAgICBwcm9qZWN0Zm9ybS5hcHBlbmRDaGlsZChwcm9qZGVsZXRlKTtcblxuICAgICAgICBwcm9qZGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBkZWxldGVwcm9qdGlsZSgpO1xuICAgICAgICAgICAgcHJvamVjdGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIH0pIFxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2plY3Rmb3JtO1xufVxuXG5jb25zdCBzb3J0dG9kb3MgPSAoKSA9PiB7XG4gICAgbGV0IHByb2pwYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3RwYWdlJyk7XG4gICAgbGV0IHByb2p0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RvZG90aWxlJyk7XG4gICAgZm9yIChsZXQgeD0wOyB4IDwgKHByb2pwYWdlcy5sZW5ndGgpOyArK3gpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvanBhZ2Uke3h9YCk7XG4gICAgICAgIGxldCBwcm9qZWN0Y2hpbGRzID0gcHJvamVjdC5jaGlsZE5vZGVzO1xuICAgICAgICBsZXQgdG9kb2NsYXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgdGlsZW9mcHJvaiR7eH1gKTtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBwcm9qZWN0Y2hpbGRzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lID09ICd0YXNrc2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrPTA7IGsgPCAodG9kb2NsYXNzLmxlbmd0aCk7ICsraykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkLmNvbnRhaW5zKHRvZG9jbGFzc1trXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG9jbGFzc1trXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuY29uc3QgcGVyaW9kcGFnZSA9IChwZXJpb2QpID0+IHtcblxuICAgIGxldCBwYWdlY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2Vjb250YWluZXInKTtcbiAgICBsZXQgcGVyaW9kY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGVyaW9kY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGVyaW9kY29udGFpbmVyJyk7XG4gICAgcGFnZWNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2Rjb250YWluZXIpO1xuXG5cbiAgICBsZXQgcGVyaW9kdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2R0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BlcmlvZHRpdGxlJylcbiAgICBpZiAocGVyaW9kID09ICdob21lJykge1xuICAgIHBlcmlvZGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVwZXJpb2QnKTtcbiAgICBwZXJpb2R0aXRsZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd0b2RheScpIHtcbiAgICBwZXJpb2Rjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheXBlcmlvZCcpO1xuICAgIHBlcmlvZHRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd3ZWVrJykge1xuICAgIHBlcmlvZGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3dlZWtwZXJpb2QnKTtcbiAgICBwZXJpb2R0aXRsZS50ZXh0Q29udGVudCA9ICdUaGlzIFdlZWsnO1xuICAgIH1cblxuICAgIHBlcmlvZGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2R0aXRsZSk7XG5cbiAgICBsZXQgdG9kb3BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb3BvcHVwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kb3BvcHVwJyk7XG4gICAgcGVyaW9kY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9wb3B1cCk7XG5cbiAgICBwZXJpb2Rjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2hlYWRlcnMoKSk7XG4gICAgXG4gICAgbGV0IHBlcmlvZHRhc2tjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwZXJpb2R0YXNrY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncGVyaW9kdGFza2NvbnRhaW5lcicpO1xuICAgIHBlcmlvZGNvbnRhaW5lci5hcHBlbmRDaGlsZChwZXJpb2R0YXNrY29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIHBlcmlvZGNvbnRhaW5lcjtcbn1cblxuY29uc3Qgc29ydHRpbGVzID0gKHBlcmlvZCkgPT4ge1xuICAgIGNsZWFyZm9ybXMoKTtcbiAgICBsZXQgdG9kb3RpbGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b2RvdGlsZScpKTtcbiAgICBsZXQgdGlsZWRhdGVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aWxlZGF0ZScpKTtcblxuXG4gICAgaWYgKHBlcmlvZCA9PSAnaG9tZScpIHtcbiAgICAgICAgbGV0IGhvbWVwZXJpb2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZXBlcmlvZCcpO1xuICAgICAgICBsZXQgaG9tZWNoaWxkcyA9IGhvbWVwZXJpb2QuY2hpbGROb2RlcztcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBob21lY2hpbGRzKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lID09ICdwZXJpb2R0YXNrY29udGFpbmVyJykge1xuICAgICAgICAgICAgZm9yIChsZXQgeD0wOyB4IDwgKHRvZG90aWxlcy5sZW5ndGgpOyArK3gpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh0b2RvdGlsZXNbeF0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG90aWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd0b2RheScpIHtcbiAgICAgICAgbGV0IHRvZGF5cGVyaW9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5cGVyaW9kJyk7XG4gICAgICAgIGxldCB0b2RheWNoaWxkcyA9IHRvZGF5cGVyaW9kLmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdG9kYXljaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3BlcmlvZHRhc2tjb250YWluZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4PTA7IHggPCAodG9kb3RpbGVzLmxlbmd0aCk7ICsreCkgeyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBwYXJzZUlTTyh0aWxlZGF0ZXNbeF0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2RheShkYXRlKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZCh0b2RvdGlsZXNbeF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZWxzZSBpZiAocGVyaW9kID09ICd3ZWVrJykge1xuICAgICAgICBsZXQgd2Vla3BlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrcGVyaW9kJyk7XG4gICAgICAgIGxldCB3ZWVrY2hpbGRzID0gd2Vla3BlcmlvZC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIHdlZWtjaGlsZHMpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgPT0gJ3BlcmlvZHRhc2tjb250YWluZXInKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB4PTA7IHggPCAodG9kb3RpbGVzLmxlbmd0aCk7ICsreCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IHBhcnNlSVNPKHRpbGVkYXRlc1t4XS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NhbWVXZWVrKGRhdGUsIChuZXcgRGF0ZSkpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFwcGVuZENoaWxkKHRvZG90aWxlc1t4XSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbn1cblxuXG5leHBvcnQge3Byb2plY3RGb3JtcywgdG9Eb0Zvcm1zLCB0b0RvVGlsZSwgcHJvamVjdFRpbGUsIHBlcmlvZHBhZ2UsIHNvcnR0aWxlcywgc29ydHRvZG9zLCBsb2FkcHJvamVjdHMsIGxvYWRwcm9qcGFnZXMsIGNsZWFyZm9ybXN9O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=