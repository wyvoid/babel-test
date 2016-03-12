'use strict';

require('babel-polyfill');


var articleList = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
        var data, $, list;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('https://cnodejs.org/');

                    case 2:
                        data = _context.sent;
                        $ = _cheerio2.default.load(data);
                        list = [];

                        $('.topic_title').each(function () {
                            var link = $(this).prop('href');
                            var title = $(this).text().trim();
                            if (link) {
                                list.push({ title: title, link: link.trim() });
                            }
                        });
                        return _context.abrupt('return', list);

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function articleList() {
        return ref.apply(this, arguments);
    };
}();

var articleDetail = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(url) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return fetch('https://cnodejs.org' + url);

                    case 2:
                        data = _context2.sent;
                        return _context2.abrupt('return', data.length);

                    case 4:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function articleDetail(_x) {
        return ref.apply(this, arguments);
    };
}();

var start = function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
        var list, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item, length;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.next = 2;
                        return articleList();

                    case 2:
                        list = _context3.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context3.prev = 6;
                        _iterator = list[Symbol.iterator]();

                    case 8:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context3.next = 17;
                            break;
                        }

                        item = _step.value;
                        _context3.next = 12;
                        return articleDetail(item);

                    case 12:
                        length = _context3.sent;

                        console.log('%s [%s]', item.title, length);

                    case 14:
                        _iteratorNormalCompletion = true;
                        _context3.next = 8;
                        break;

                    case 17:
                        _context3.next = 23;
                        break;

                    case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3['catch'](6);
                        _didIteratorError = true;
                        _iteratorError = _context3.t0;

                    case 23:
                        _context3.prev = 23;
                        _context3.prev = 24;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 26:
                        _context3.prev = 26;

                        if (!_didIteratorError) {
                            _context3.next = 29;
                            break;
                        }

                        throw _iteratorError;

                    case 29:
                        return _context3.finish(26);

                    case 30:
                        return _context3.finish(23);

                    case 31:
                        console.log('done');

                    case 32:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[6, 19, 23, 31], [24,, 26, 30]]);
    }));

    return function start() {
        return ref.apply(this, arguments);
    };
}();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function fetch(url) {
    return new Promise(function (resolve, reject) {
        _request2.default.get(url, function (err, res, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        });
    });
}

start().then(function (ret) {
    return console.log(ret);
}).catch(function (err) {
    return console.error(err);
});
