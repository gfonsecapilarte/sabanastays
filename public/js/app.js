/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js (c) KNOWLEDGECODE | MIT
 */
(function (global) {
    'use strict';

    var date = {},
        lang = 'en',
        locales = {
            en: {
                MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                A: ['a.m.', 'p.m.'],
                formatter: {
                    YYYY: function (d/*, formatString*/) { return ('000' + d.getFullYear()).slice(-4); },
                    YY: function (d/*, formatString*/) { return ('0' + d.getFullYear()).slice(-2); },
                    Y: function (d/*, formatString*/) { return '' + d.getFullYear(); },
                    MMMM: function (d/*, formatString*/) { return this.MMMM[d.getMonth()]; },
                    MMM: function (d/*, formatString*/) { return this.MMM[d.getMonth()]; },
                    MM: function (d/*, formatString*/) { return ('0' + (d.getMonth() + 1)).slice(-2); },
                    M: function (d/*, formatString*/) { return '' + (d.getMonth() + 1); },
                    DD: function (d/*, formatString*/) { return ('0' + d.getDate()).slice(-2); },
                    D: function (d/*, formatString*/) { return '' + d.getDate(); },
                    HH: function (d/*, formatString*/) { return ('0' + d.getHours()).slice(-2); },
                    H: function (d/*, formatString*/) { return '' + d.getHours(); },
                    A: function (d/*, formatString*/) { return this.A[d.getHours() > 11 | 0]; },
                    hh: function (d/*, formatString*/) { return ('0' + (d.getHours() % 12 || 12)).slice(-2); },
                    h: function (d/*, formatString*/) { return '' + (d.getHours() % 12 || 12); },
                    mm: function (d/*, formatString*/) { return ('0' + d.getMinutes()).slice(-2); },
                    m: function (d/*, formatString*/) { return '' + d.getMinutes(); },
                    ss: function (d/*, formatString*/) { return ('0' + d.getSeconds()).slice(-2); },
                    s: function (d/*, formatString*/) { return '' + d.getSeconds(); },
                    SSS: function (d/*, formatString*/) { return ('00' + d.getMilliseconds()).slice(-3); },
                    SS: function (d/*, formatString*/) { return ('0' + (d.getMilliseconds() / 10 | 0)).slice(-2); },
                    S: function (d/*, formatString*/) { return '' + (d.getMilliseconds() / 100 | 0); },
                    dddd: function (d/*, formatString*/) { return this.dddd[d.getDay()]; },
                    ddd: function (d/*, formatString*/) { return this.ddd[d.getDay()]; },
                    dd: function (d/*, formatString*/) { return this.dd[d.getDay()]; },
                    Z: function (d/*, formatString*/) {
                        var offset = d.utc ? 0 : d.getTimezoneOffset() / 0.6;
                        return (offset > 0 ? '-' : '+') + ('000' + Math.abs(offset - offset % 100 * 0.4)).slice(-4);
                    },
                    post: function (str) { return str; }
                },
                parser: {
                    find: function (array, str) {
                        var index = -1, length = 0;

                        for (var i = 0, len = array.length, item; i < len; i++) {
                            item = array[i];
                            if (!str.indexOf(item) && item.length > length) {
                                index = i;
                                length = item.length;
                            }
                        }
                        return { index: index, length: length };
                    },
                    MMMM: function (str/*, formatString*/) {
                        return this.parser.find(this.MMMM, str);
                    },
                    MMM: function (str/*, formatString*/) {
                        return this.parser.find(this.MMM, str);
                    },
                    A: function (str/*, formatString*/) {
                        return this.parser.find(this.A, str);
                    },
                    h: function (h, a) { return (h === 12 ? 0 : h) + a * 12; },
                    pre: function (str) { return str; }
                }
            }
        };

    /**
     * formatting a date
     * @param {Object} dateObj - date object
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - output as UTC
     * @returns {String} the formatted string
     */
    date.format = function (dateObj, formatString, utc) {
        var d = date.addMinutes(dateObj, utc ? dateObj.getTimezoneOffset() : 0),
            locale = locales[lang], formatter = locale.formatter;

        d.utc = utc;
        return formatString.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g, function (token) {
            var format = formatter[token];
            return format ? formatter.post(format.call(locale, d, formatString)) : token.replace(/\[(.*)]/, '$1');
        });
    };

    /**
     * parsing a date string
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - input as UTC
     * @returns {Object} the constructed date
     */
    date.parse = function (dateString, formatString, utc) {
        var locale = locales[lang], dString = locale.parser.pre(dateString),
            offset = 0, keys, i, token, length, p, str, result, dateObj,
            re = /(MMMM?|A)|(YYYY)|(SSS)|(MM|DD|HH|hh|mm|ss)|(YY|M|D|H|h|m|s|SS)|(S)|(.)/g,
            exp = { 2: /^\d{1,4}/, 3: /^\d{1,3}/, 4: /^\d\d/, 5: /^\d\d?/, 6: /^\d/ },
            last = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            dt = { Y: 1970, M: 1, D: 1, H: 0, m: 0, s: 0, S: 0 };

        while ((keys = re.exec(formatString))) {
            for (i = 0, length = 1, token = ''; !token;) {
                token = keys[++i];
            }
            p = token.charAt(0);
            str = dString.slice(offset);
            if (i < 2) {
                result = locale.parser[token].call(locale, str, formatString);
                dt[p] = result.index;
                if (p === 'M') {
                    dt[p]++;
                }
                length = result.length;
            } else if (i < 7) {
                result = (str.match(exp[i]) || [''])[0];
                dt[p] = (p === 'S' ? (result + '000').slice(0, -token.length) : result) | 0;
                length = result.length;
            } else if (p !== ' ' && p !== str[0]) {
                return NaN;
            }
            if (!length) {
                return NaN;
            }
            offset += length;
        }
        if (offset !== dString.length || !result) {
            return NaN;
        }
        dt.Y += dt.Y < 70 ? 2000 : dt.Y < 100 ? 1900 : 0;
        dt.H = dt.H || locale.parser.h(dt.h || 0, dt.A || 0);

        dateObj = new Date(dt.Y, dt.M - 1, dt.D, dt.H, dt.m, dt.s, dt.S);
        last[1] += date.isLeapYear(dateObj) | 0;
        if (dt.M < 1 || dt.M > 12 || dt.D < 1 || dt.D > last[dt.M - 1] || dt.H > 23 || dt.m > 59 || dt.s > 59) {
            return NaN;
        }
        return utc ? date.addMinutes(dateObj, -dateObj.getTimezoneOffset()) : dateObj;
    };

    /**
     * validation
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @returns {Boolean} whether the date string is a valid date
     */
    date.isValid = function (dateString, formatString) {
        return !!date.parse(dateString, formatString);
    };

    /**
     * adding years
     * @param {Object} dateObj - date object
     * @param {Number} years - adding year
     * @returns {Object} the date after adding the value
     */
    date.addYears = function (dateObj, years) {
        return date.addMonths(dateObj, years * 12);
    };

    /**
     * adding months
     * @param {Object} dateObj - date object
     * @param {Number} months - adding month
     * @returns {Object} the date after adding the value
     */
    date.addMonths = function (dateObj, months) {
        var d = new Date(dateObj.getTime());

        d.setMonth(d.getMonth() + months);
        return d;
    };

    /**
     * adding days
     * @param {Object} dateObj - date object
     * @param {Number} days - adding day
     * @returns {Object} the date after adding the value
     */
    date.addDays = function (dateObj, days) {
        var d = new Date(dateObj.getTime());

        d.setDate(d.getDate() + days);
        return d;
    };

    /**
     * adding hours
     * @param {Object} dateObj - date object
     * @param {Number} hours - adding hour
     * @returns {Object} the date after adding the value
     */
    date.addHours = function (dateObj, hours) {
        return date.addMilliseconds(dateObj, hours * 3600000);
    };

    /**
     * adding minutes
     * @param {Object} dateObj - date object
     * @param {Number} minutes - adding minute
     * @returns {Object} the date after adding the value
     */
    date.addMinutes = function (dateObj, minutes) {
        return date.addMilliseconds(dateObj, minutes * 60000);
    };

    /**
     * adding seconds
     * @param {Object} dateObj - date object
     * @param {Number} seconds - adding second
     * @returns {Object} the date after adding the value
     */
    date.addSeconds = function (dateObj, seconds) {
        return date.addMilliseconds(dateObj, seconds * 1000);
    };

    /**
     * adding milliseconds
     * @param {Object} dateObj - date object
     * @param {Number} milliseconds - adding millisecond
     * @returns {Object} the date after adding the value
     */
    date.addMilliseconds = function (dateObj, milliseconds) {
        return new Date(dateObj.getTime() + milliseconds);
    };

    /**
     * subtracting
     * @param {Object} date1 - date object
     * @param {Object} date2 - date object
     * @returns {Object} the result object after subtracting the date
     */
    date.subtract = function (date1, date2) {
        var delta = date1.getTime() - date2.getTime();

        return {
            toMilliseconds: function () {
                return delta;
            },
            toSeconds: function () {
                return delta / 1000 | 0;
            },
            toMinutes: function () {
                return delta / 60000 | 0;
            },
            toHours: function () {
                return delta / 3600000 | 0;
            },
            toDays: function () {
                return delta / 86400000 | 0;
            }
        };
    };

    /**
     * leap year
     * @param {Object} dateObj - date object
     * @returns {Boolean} whether the year is a leap year
     */
    date.isLeapYear = function (dateObj) {
        var y = dateObj.getFullYear();
        return (!(y % 4) && !!(y % 100)) || !(y % 400);
    };

    /**
     * comparison of dates
     * @param {Object} date1 - target for comparison
     * @param {Object} date2 - target for comparison
     * @returns {Boolean} whether the dates are the same day (times are ignored)
     */
    date.isSameDay = function (date1, date2) {
        return date.format(date1, 'YYYYMMDD') === date.format(date2, 'YYYYMMDD');
    };

    /**
     * setting a locale
     * @param {String} [code] - language code
     * @returns {String} current language code
     */
    date.locale = function (code) {
        if (code) {
            if (!locales[code] && "function" === 'function' && global) {
                __webpack_require__(71)("./" + code);
            }
            lang = code;
        }
        return lang;
    };

    /**
     * getting a definition of locale
     * @param {String} [code] - language code
     * @returns {Object} definition of locale
     */
    date.getLocales = function (code) {
        return locales[code || lang];
    };

    /**
     * adding a new definition of locale
     * @param {String} code - language code
     * @param {Object} options - definition of locale
     * @returns {void}
     */
    date.setLocales = function (code, options) {
        var copy = function (src, proto) {
                var Locale = function () {}, dst, key;

                Locale.prototype = proto;
                dst = new Locale();
                for (key in src) {
                    if (src.hasOwnProperty(key)) {
                        dst[key] = src[key];
                    }
                }
                return dst;
            },
            base = locales[code] || locales.en,
            locale = copy(options, base);

        if (options.formatter) {
            locale.formatter = copy(options.formatter, base.formatter);
        }
        if (options.parser) {
            locale.parser = copy(options.parser, base.parser);
        }
        locales[code] = locale;
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = date;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return date;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.date = date;
    }

}(this));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 J??rn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend( $.fn, {

	// https://jqueryvalidation.org/validate/
	validate: function( options ) {

		// If nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// Check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {

				// Track the used submit button to properly handle scripted
				// submits later.
				validator.submitButton = event.currentTarget;

				// Allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// Allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			} );

			// Validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {

					// Prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;

					// Insert a hidden input as a replacement for the missing submit button
					// The hidden input is inserted in two cases:
					//   - A user defined a `submitHandler`
					//   - There was a pending request due to `remote` method and `stopRequest()`
					//     was called to submit the form in case it's valid
					if ( validator.submitButton && ( validator.settings.submitHandler || validator.formSubmitted ) ) {
						hidden = $( "<input type='hidden'/>" )
							.attr( "name", validator.submitButton.name )
							.val( $( validator.submitButton ).val() )
							.appendTo( validator.currentForm );
					}

					if ( validator.settings.submitHandler ) {
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( hidden ) {

							// And clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// Prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			} );
		}

		return validator;
	},

	// https://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				if ( !valid ) {
					errorList = errorList.concat( validator.errorList );
				}
			} );
			validator.errorList = errorList;
		}
		return valid;
	},

	// https://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		// If nothing is selected, return empty object; can't chain anyway
		if ( element == null ) {
			return;
		}

		if ( !element.form && element.hasAttribute( "contenteditable" ) ) {
			element.form = this.closest( "form" )[ 0 ];
			element.name = this.attr( "name" );
		}

		if ( element.form == null ) {
			return;
		}

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );

				// Remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
				} );
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// Make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
		}

		// Make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param } );
		}

		return data;
	}
} );

// Custom selectors
$.extend( $.expr.pseudos || $.expr[ ":" ], {		// '|| $.expr[ ":" ]' here enables backwards compatibility to jQuery 1.7. Can be removed when dropping jQ 1.7.x support

	// https://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},

	// https://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		var val = $( a ).val();
		return val !== null && !!$.trim( "" + val );
	},

	// https://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
} );

// Constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// https://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( params === undefined ) {
		return source;
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		} );
	} );
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		pendingClass: "pending",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {

			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element.name in this.invalid ) {
				this.element( element );
			}
		},
		onclick: function( element ) {

			// Click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// Or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
		step: $.validator.format( "Please enter a multiple of {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				} );
			} );
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			} );

			function delegate( event ) {

				// Set form expando on contenteditable
				if ( !this.form && this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = $( this ).attr( "name" );
				}

				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate )

				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on( "click.validate", "select, option, [type='radio'], [type='checkbox']", delegate );

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}
		},

		// https://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend( {}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// https://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				v = this,
				result = true,
				rs, group;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				// If this element is grouped, then validate all group elements already
				// containing a value
				group = this.groups[ checkElement.name ];
				if ( group ) {
					$.each( this.groups, function( name, testgroup ) {
						if ( testgroup === group && name !== checkElement.name ) {
							cleanElement = v.validationTargetFor( v.clean( v.findByName( name ) ) );
							if ( cleanElement && cleanElement.name in v.invalid ) {
								v.currentElements.push( cleanElement );
								result = v.check( cleanElement ) && result;
							}
						}
					} );
				}

				rs = this.check( checkElement ) !== false;
				result = result && rs;
				if ( rs ) {
					this.invalid[ checkElement.name ] = false;
				} else {
					this.invalid[ checkElement.name ] = true;
				}

				if ( !this.numberOfInvalids() ) {

					// Hide error containers on last error
					this.toHide = this.toHide.add( this.containers );
				}
				this.showErrors();

				// Add aria-invalid status for screen readers
				$( element ).attr( "aria-invalid", !rs );
			}

			return result;
		},

		// https://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				var validator = this;

				// Add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = $.map( this.errorMap, function( message, name ) {
					return {
						message: message,
						element: validator.findByName( name )[ 0 ]
					};
				} );

				// Remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				} );
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// https://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.invalid = {};
			this.submitted = {};
			this.prepareForm();
			this.hideErrors();
			var elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			this.resetElements( elements );
		},

		resetElements: function( elements ) {
			var i;

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
					this.findByName( elements[ i ].name ).removeClass( this.settings.validClass );
				}
			} else {
				elements
					.removeClass( this.settings.errorClass )
					.removeClass( this.settings.validClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {

				// This check allows counting elements with empty error
				// message as invalid elements
				if ( obj[ i ] !== undefined && obj[ i ] !== null && obj[ i ] !== false ) {
					count++;
				}
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [] )
					.filter( ":visible" )
					.focus()

					// Manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {

					// Ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			} ).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// Select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea, [contenteditable]" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				var name = this.name || $( this ).attr( "name" ); // For contenteditable
				if ( !name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// Set form expando on contenteditable
				if ( this.hasAttribute( "contenteditable" ) ) {
					this.form = $( this ).closest( "form" )[ 0 ];
					this.name = name;
				}

				// Select only the first element for each name, and only those with rules specified
				if ( name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ name ] = true;
				return true;
			} );
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		resetInternals: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
		},

		reset: function() {
			this.resetInternals();
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var $element = $( element ),
				type = element.type,
				val, idx;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter( ":checked" ).val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? "NaN" : $element.val();
			}

			if ( element.hasAttribute( "contenteditable" ) ) {
				val = $element.text();
			} else {
				val = $element.val();
			}

			if ( type === "file" ) {

				// Modern browser (chrome & safari)
				if ( val.substr( 0, 12 ) === "C:\\fakepath\\" ) {
					return val.substr( 12 );
				}

				// Legacy browsers
				// Unix-based path
				idx = val.lastIndexOf( "/" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Windows-based path
				idx = val.lastIndexOf( "\\" );
				if ( idx >= 0 ) {
					return val.substr( idx + 1 );
				}

				// Just the file name
				return val;
			}

			if ( typeof val === "string" ) {
				return val.replace( /\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				} ).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule, normalizer;

			// Prioritize the local normalizer defined for this element over the global one
			// if the former exists, otherwise user the global one in case it exists.
			if ( typeof rules.normalizer === "function" ) {
				normalizer = rules.normalizer;
			} else if (	typeof this.settings.normalizer === "function" ) {
				normalizer = this.settings.normalizer;
			}

			// If normalizer is defined, then call it to retreive the changed value instead
			// of using the real one.
			// Note that `this` in the normalizer is `element`.
			if ( normalizer ) {
				val = normalizer.call( element, val );

				if ( typeof val !== "string" ) {
					throw new TypeError( "The normalizer should return a string value." );
				}

				// Delete the normalizer from rules to avoid treating it as a pre-defined method.
				delete rules.normalizer;
			}

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {
					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// If a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// Return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// Return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ] );
		},

		// Return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++ ) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		// The second parameter 'rule' used to be a string, and extended to an object literal
		// of the following form:
		// rule = {
		//     method: "method name",
		//     parameters: "the given method parameters"
		// }
		//
		// The old behavior still supported, kept to maintain backward compatibility with
		// old code, and will be removed in the next major release.
		defaultMessage: function( element, rule ) {
			if ( typeof rule === "string" ) {
				rule = { method: rule };
			}

			var message = this.findDefined(
					this.customMessage( element.name, rule.method ),
					this.customDataMessage( element, rule.method ),

					// 'title' is never undefined, so handle empty string as undefined
					!this.settings.ignoreTitle && element.title || undefined,
					$.validator.messages[ rule.method ],
					"<strong>Warning: No message defined for " + element.name + "</strong>"
				),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}

			return message;
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule );

			this.errorList.push( {
				message: message,
				element: element,
				method: rule.method
			} );

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map( function() {
				return this.element;
			} );
		},

		showLabel: function( element, message ) {
			var place, group, errorID, v,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );

			if ( error.length ) {

				// Refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// Replace message on existing label
				error.html( message );
			} else {

				// Create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {

					// Make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement.call( this, place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {

					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );

					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby
				} else if ( error.parents( "label[for='" + this.escapeCssMeta( elementID ) + "']" ).length === 0 ) {
					errorID = error.attr( "id" );

					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + this.escapeCssMeta( errorID ) + "\\b" ) ) ) {

						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						v = this;
						$.each( v.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + v.escapeCssMeta( name ) + "']", v.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						} );
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.escapeCssMeta( this.idOrName( element ) ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// 'aria-describedby' should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + this.escapeCssMeta( describer )
					.replace( /\s+/g, ", #" );
			}

			return this
				.errors()
				.filter( selector );
		},

		// See https://api.jquery.com/category/selectors/, for CSS
		// meta-characters that should be escaped in order to be used with JQuery
		// as a literal part of a name/id or any selector.
		escapeCssMeta: function( string ) {
			return string.replace( /([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1" );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + this.escapeCssMeta( name ) + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[ typeof param ] ? this.dependTypes[ typeof param ]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				$( element ).addClass( this.settings.pendingClass );
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;

			// Sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			$( element ).removeClass( this.settings.pendingClass );
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();

				// Remove the hidden input that was used as a replacement for the
				// missing submit button. The hidden input is added by `handle()`
				// to ensure that the value of the used submit button is passed on
				// for scripted submits triggered by this method
				if ( this.submitButton ) {
					$( "input:hidden[name='" + this.submitButton.name + "']", this.currentForm ).remove();
				}

				this.formSubmitted = false;
			} else if ( !valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ] );
				this.formSubmitted = false;
			}
		},

		previousValue: function( element, method ) {
			method = typeof method === "string" && method || "remote";

			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, { method: method } )
			} );
		},

		// Cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" )
				.find( ".validate-equalTo-blur" )
					.off( ".validate-equalTo" )
					.removeClass( "validate-equalTo-blur" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ] );
				}
			} );
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// Convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max|step/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// Exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// Support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// Force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// 'maxlength' may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {

		// Handle dependency check
		$.each( rules, function( prop, val ) {

			// Ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					$.data( element.form, "validator" ).resetElements( $( element ) );
					delete rules[ prop ];
				}
			}
		} );

		// Evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) && rule !== "normalizer" ? parameter( element ) : parameter;
		} );

		// Clean number parameters
		$.each( [ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		} );
		$.each( [ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ] ), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace( /[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ] ), Number( parts[ 1 ] ) ];
				}
			}
		} );

		if ( $.validator.autoCreateRanges ) {

			// Auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			} );
			data = transformed;
		}
		return data;
	},

	// https://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	// https://jqueryvalidation.org/jQuery.validator.methods/
	methods: {

		// https://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {

			// Check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {

				// Could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// https://jqueryvalidation.org/email-method/
		email: function( value, element ) {

			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// https://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// https://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// https://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// https://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// https://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// https://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// https://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// https://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// https://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// https://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// https://jqueryvalidation.org/step-method/
		step: function( value, element, param ) {
			var type = $( element ).attr( "type" ),
				errorMessage = "Step attribute on input type " + type + " is not supported.",
				supportedTypes = [ "text", "number", "range" ],
				re = new RegExp( "\\b" + type + "\\b" ),
				notSupported = type && !re.test( supportedTypes.join() ),
				decimalPlaces = function( num ) {
					var match = ( "" + num ).match( /(?:\.(\d+))?$/ );
					if ( !match ) {
						return 0;
					}

					// Number of digits right of decimal point.
					return match[ 1 ] ? match[ 1 ].length : 0;
				},
				toInt = function( num ) {
					return Math.round( num * Math.pow( 10, decimals ) );
				},
				valid = true,
				decimals;

			// Works only for text, number and range input types
			// TODO find a way to support input types date, datetime, datetime-local, month, time and week
			if ( notSupported ) {
				throw new Error( errorMessage );
			}

			decimals = decimalPlaces( param );

			// Value can't have too many decimals
			if ( decimalPlaces( value ) > decimals || toInt( value ) % toInt( param ) !== 0 ) {
				valid = false;
			}

			return this.optional( element ) || valid;
		},

		// https://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {

			// Bind to the blur event of the target in order to revalidate whenever the target field is updated
			var target = $( param );
			if ( this.settings.onfocusout && target.not( ".validate-equalTo-blur" ).length ) {
				target.addClass( "validate-equalTo-blur" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				} );
			}
			return value === target.val();
		},

		// https://jqueryvalidation.org/remote-method/
		remote: function( value, element, param, method ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			method = typeof method === "string" && method || "remote";

			var previous = this.previousValue( element, method ),
				validator, data, optionDataString;

			if ( !this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = previous.originalMessage || this.settings.messages[ element.name ][ method ];
			this.settings.messages[ element.name ][ method ] = previous.message;

			param = typeof param === "string" && { url: param } || param;
			optionDataString = $.param( $.extend( { data: value }, param.data ) );
			if ( previous.old === optionDataString ) {
				return previous.valid;
			}

			previous.old = optionDataString;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ][ method ] = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.resetInternals();
						validator.toHide = validator.errorsFor( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						validator.invalid[ element.name ] = false;
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, { method: method, parameters: value } );
						errors[ element.name ] = previous.message = message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

} );

// Ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;

// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter( function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = xhr;
		}
	} );
} else {

	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[ port ] ) {
				pendingRequests[ port ].abort();
			}
			pendingRequests[ port ] = ajax.apply( this, arguments );
			return pendingRequests[ port ];
		}
		return ajax.apply( this, arguments );
	};
}
return $;
}));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["b"] = successMessage;
/* harmony export (immutable) */ __webpack_exports__["a"] = errorMessage;
function successMessage(container, message) {
    $('.alert-danger', container).addClass('hidden');
    $('.alert-success', container).removeClass('hidden').children('span').text(message);
}

function errorMessage(container, message) {
    $('.alert-success', container).addClass('hidden');
    $('.alert-danger', container).removeClass('hidden').children('span').text(message);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var asap = __webpack_require__(5)

module.exports = Promise;
function Promise(fn) {
  if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new')
  if (typeof fn !== 'function') throw new TypeError('not a function')
  var state = null
  var value = null
  var deferreds = []
  var self = this

  this.then = function(onFulfilled, onRejected) {
    return new self.constructor(function(resolve, reject) {
      handle(new Handler(onFulfilled, onRejected, resolve, reject))
    })
  }

  function handle(deferred) {
    if (state === null) {
      deferreds.push(deferred)
      return
    }
    asap(function() {
      var cb = state ? deferred.onFulfilled : deferred.onRejected
      if (cb === null) {
        (state ? deferred.resolve : deferred.reject)(value)
        return
      }
      var ret
      try {
        ret = cb(value)
      }
      catch (e) {
        deferred.reject(e)
        return
      }
      deferred.resolve(ret)
    })
  }

  function resolve(newValue) {
    try { //Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.')
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then
        if (typeof then === 'function') {
          doResolve(then.bind(newValue), resolve, reject)
          return
        }
      }
      state = true
      value = newValue
      finale()
    } catch (e) { reject(e) }
  }

  function reject(newValue) {
    state = false
    value = newValue
    finale()
  }

  function finale() {
    for (var i = 0, len = deferreds.length; i < len; i++)
      handle(deferreds[i])
    deferreds = null
  }

  doResolve(fn, resolve, reject)
}


function Handler(onFulfilled, onRejected, resolve, reject){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null
  this.onRejected = typeof onRejected === 'function' ? onRejected : null
  this.resolve = resolve
  this.reject = reject
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, onFulfilled, onRejected) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return
      done = true
      onFulfilled(value)
    }, function (reason) {
      if (done) return
      done = true
      onRejected(reason)
    })
  } catch (ex) {
    if (done) return
    done = true
    onRejected(ex)
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {
// Use the fastest possible means to execute a task in a future turn
// of the event loop.

// linked list of tasks (single, with head node)
var head = {task: void 0, next: null};
var tail = head;
var flushing = false;
var requestFlush = void 0;
var isNodeJS = false;

function flush() {
    /* jshint loopfunc: true */

    while (head.next) {
        head = head.next;
        var task = head.task;
        head.task = void 0;
        var domain = head.domain;

        if (domain) {
            head.domain = void 0;
            domain.enter();
        }

        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function() {
                   throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    flushing = false;
}

if (typeof process !== "undefined" && process.nextTick) {
    // Node.js before 0.9. Note that some fake-Node environments, like the
    // Mocha test runner, introduce a `process` global without a `nextTick`.
    isNodeJS = true;

    requestFlush = function () {
        process.nextTick(flush);
    };

} else if (typeof setImmediate === "function") {
    // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
    if (typeof window !== "undefined") {
        requestFlush = setImmediate.bind(window, flush);
    } else {
        requestFlush = function () {
            setImmediate(flush);
        };
    }

} else if (typeof MessageChannel !== "undefined") {
    // modern browsers
    // http://www.nonblocking.io/2011/06/windownexttick.html
    var channel = new MessageChannel();
    channel.port1.onmessage = flush;
    requestFlush = function () {
        channel.port2.postMessage(0);
    };

} else {
    // old browsers
    requestFlush = function () {
        setTimeout(flush, 0);
    };
}

function asap(task) {
    tail = tail.next = {
        task: task,
        domain: isNodeJS && process.domain,
        next: null
    };

    if (!flushing) {
        flushing = true;
        requestFlush();
    }
};

module.exports = asap;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(53), __webpack_require__(81).setImmediate))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// This file is autogenerated via the `commonjs` Grunt task. You can require() this file in a CommonJS environment.
__webpack_require__(7)
__webpack_require__(8)
__webpack_require__(9)
__webpack_require__(10)
__webpack_require__(11)
__webpack_require__(12)
__webpack_require__(13)
__webpack_require__(14)
__webpack_require__(15)
__webpack_require__(16)
__webpack_require__(17)
__webpack_require__(18)

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: transition.js v3.3.7
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: button.js v3.3.7
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.7'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: carousel.js v3.3.7
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.7'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: modal.js v3.3.7
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.7'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
            this.$element[0] !== e.target &&
            !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tooltip.js v3.3.7
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.7'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: popover.js v3.3.7
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.7'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.7
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.7'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: tab.js v3.3.7
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.7'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.7'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = converDate;
/* harmony export (immutable) */ __webpack_exports__["a"] = calculateNights;
/* harmony export (immutable) */ __webpack_exports__["c"] = getHumanDay;
var date = __webpack_require__(1);
date.locale(locale.toLowerCase());

function converDate(_date) {
    var _date = _date.split('-'),
        _date = new Date(_date[0], _date[1] - 1, _date[2]);

    return date.format(_date, 'MMMM DD YYYY');
}

function calculateNights(date_a, date_b) {
    var date_a = date_a.split('-'),
        date_a = new Date(date_a[0], date_a[1] - 1, date_a[2]);

    var date_b = date_b.split('-'),
        date_b = new Date(date_b[0], date_b[1] - 1, date_b[2]);

    return date.subtract(date_b, date_a).toDays();
}

function getHumanDay(_date) {
    var _date = _date.split('-'),
        _date = new Date(_date[0], _date[1] - 1, _date[2]);

    return date.format(_date, 'dddd');
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

;(function(window){
var hadGlobal = 'Modernizr' in window;
var oldGlobal = window.Modernizr;
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-prefixed-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var l in h)if(h.hasOwnProperty(l)){if(e=[],n=h[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),S.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=a(w?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var i,s,f,u,p="modernizr",c=a("div"),d=l();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:p+(r+1),c.appendChild(f);return i=a("style"),i.type="text/css",i.id="s"+p,(d.fake?d:c).appendChild(i),d.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=p,d.fake&&(d.style.background="",d.style.overflow="hidden",u=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),s=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=u,_.offsetHeight):c.parentNode.removeChild(c),!!s}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function c(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(n[o])+":"+r+")");return i=i.join(" or "),f("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function m(e,n,o,i){function l(){u&&(delete z.style,delete z.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=c(e,o);if(!r(f,"undefined"))return f}for(var u,p,m,v,y,g=["modernizr","tspan","samp"];!z.style&&g.length;)u=!0,z.modElem=a(g.shift()),z.style=z.modElem.style;for(m=e.length,p=0;m>p;p++)if(v=e[p],y=z.style[v],s(v,"-")&&(v=d(v)),z.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{z.style[v]=o}catch(h){}if(z.style[v]!=y)return l(),"pfx"==n?v:!0}return l(),!1}function v(e,n){return function(){return e.apply(n,arguments)}}function y(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?v(o,t||n):o);return!1}function g(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(a,n,o,i):(a=(e+" "+P.join(s+" ")+s).split(" "),y(a,n,t))}var h=[],C={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){h.push({name:e,fn:n,options:t})},addAsyncTest:function(e){h.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var S=[],_=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",b=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=b;var E={elem:a("modernizr")};Modernizr._q.push(function(){delete E.elem});var z={style:E.elem.style};Modernizr._q.unshift(function(){delete z.style});var P=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=P,C.testAllProps=g;var N=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],l=a.toUpperCase()+"_"+r;if(l in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=N;C.prefixed=function(e,n,t){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=d(e)),n?g(e,n,t):g(e,"pfx"))};o(),i(S),delete C.addTest,delete C.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
module.exports = window.Modernizr;
if (hadGlobal) { window.Modernizr = oldGlobal; }
else { delete window.Modernizr; }
})(window);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Arabic (ar)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['??', '??', '??', '??', '??', '??', '??', '??', '??', '??'],
            map = { '??': 0, '??': 1, '??': 2, '??': 3, '??': 4, '??': 5, '??': 6, '??': 7, '??': 8, '??': 9 };

        date.setLocales('ar', {
            MMMM: ['?????????? ???????????? ??????????', '???????? ????????????', '???????? ????????', '?????????? ??????????', '???????? ????????', '???????????? ??????????', '???????? ??????????', '???? ??????????', '?????????? ????????????', '?????????? ?????????? ????????????', '?????????? ???????????? ????????????', '?????????? ?????????? ????????????'],
            MMM: ['?????????? ???????????? ??????????', '???????? ????????????', '???????? ????????', '?????????? ??????????', '???????? ????????', '???????????? ??????????', '???????? ??????????', '???? ??????????', '?????????? ????????????', '?????????? ?????????? ????????????', '?????????? ???????????? ????????????', '?????????? ?????????? ????????????'],
            dddd: ['??????????', '??????????????', '????????????????', '????????????????', '????????????', '????????????', '??????????'],
            ddd: ['??????', '??????????', '????????????', '????????????', '????????', '????????', '??????'],
            dd: ['??', '??', '??', '??', '??', '??', '??'],
            A: ['??', '??'],
            formatter: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                pre: function (str) {
                    return str.replace(/[????????????????????]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Azerbaijani (az)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('az', {
            MMMM: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'],
            MMM: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avq', 'sen', 'okt', 'noy', 'dek'],
            dddd: ['Bazar', 'Bazar ert??si', '????r????nb?? ax??am??', '????r????nb??', 'C??m?? ax??am??', 'C??m??', '????nb??'],
            ddd: ['Baz', 'BzE', '??Ax', '????r', 'CAx', 'C??m', '????n'],
            dd: ['Bz', 'BE', '??A', '????', 'CA', 'C??', '????'],
            A: ['gec??', 's??h??r', 'g??nd??z', 'ax??am'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // gec??
                    } else if (h < 12) {
                        return this.A[1];   // s??h??r
                    } else if (h < 17) {
                        return this.A[2];   // g??nd??z
                    }
                    return this.A[3];       // ax??am
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;               // gec??, s??h??r
                    }
                    return h > 11 ? h : h + 12; // g??nd??z, ax??am
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Bengali (bn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('bn', {
            MMMM: ['????????????????????????', '????????????????????????', '???????????????', '??????????????????', '??????', '?????????', '???????????????', '??????????????????', '??????????????????????????????', '?????????????????????', '?????????????????????', '????????????????????????'],
            MMM: ['????????????', '?????????', '???????????????', '?????????', '??????', '?????????', '?????????', '??????', '???????????????', '???????????????', '??????', '??????????????????'],
            dddd: ['??????????????????', '??????????????????', '????????????????????????', '??????????????????', '???????????????????????????????????????', '????????????????????????', '??????????????????'],
            ddd: ['?????????', '?????????', '???????????????', '?????????', '??????????????????????????????', '???????????????', '?????????'],
            dd: ['??????', '??????', '????????????', '??????', '???????????????', '??????', '?????????'],
            A: ['?????????', '????????????', '???????????????', '???????????????'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ?????????
                    } else if (h < 10) {
                        return this.A[1];   // ????????????
                    } else if (h < 17) {
                        return this.A[2];   // ???????????????
                    } else if (h < 20) {
                        return this.A[3];   // ???????????????
                    }
                    return this.A[0];       // ?????????
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h < 4 || h > 11 ? h : h + 12;    // ?????????
                    } else if (a < 2) {
                        return h;                               // ????????????
                    } else if (a < 3) {
                        return h > 9 ? h : h + 12;              // ???????????????
                    }
                    return h + 12;                              // ???????????????
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Czech (cs)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('cs', {
            MMMM: ['leden', '??nor', 'b??ezen', 'duben', 'kv??ten', '??erven', '??ervenec', 'srpen', 'z??????', '????jen', 'listopad', 'prosinec'],
            MMM: ['led', '??no', 'b??e', 'dub', 'kv??', '??vn', '??vc', 'srp', 'z????', '????j', 'lis', 'pro'],
            dddd: ['ned??le', 'pond??l??', '??ter??', 'st??eda', '??tvrtek', 'p??tek', 'sobota'],
            ddd: ['ne', 'po', '??t', 'st', '??t', 'p??', 'so'],
            dd: ['ne', 'po', '??t', 'st', '??t', 'p??', 'so']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve German (de)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('de', {
            MMMM: ['Januar', 'Februar', 'M??rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            MMM: ['Jan.', 'Febr.', 'Mrz.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
            dddd: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            ddd: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
            dd: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            A: ['Uhr nachmittags', 'Uhr morgens']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Greek (el)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('el', {
            MMMM: {
                nominative: ['????????????????????', '??????????????????????', '??????????????', '????????????????', '??????????', '??????????????', '??????????????', '??????????????????', '??????????????????????', '??????????????????', '??????????????????', '????????????????????'],
                genitive: ['????????????????????', '??????????????????????', '??????????????', '????????????????', '??????????', '??????????????', '??????????????', '??????????????????', '??????????????????????', '??????????????????', '??????????????????', '????????????????????']
            },
            MMM: ['??????', '??????', '??????', '??????', '??????', '????????', '????????', '??????', '??????', '??????', '??????', '??????'],
            dddd: ['??????????????', '??????????????', '??????????', '??????????????', '????????????', '??????????????????', '??????????????'],
            ddd: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
            dd: ['????', '????', '????', '????', '????', '????', '????'],
            A: ['????', '????'],
            formatter: {
                MMMM: function (d, formatString) {
                    return this.MMMM[/D.*MMMM/.test(formatString) ? 'genitive' : 'nominative'][d.getMonth()];
                },
                hh: function (d) {
                    return ('0' + d.getHours() % 12).slice(-2);
                },
                h: function (d) {
                    return d.getHours() % 12;
                }
            },
            parser: {
                MMMM: function (str, formatString) {
                    return this.parser.find(this.MMMM[/D.*MMMM/.test(formatString) ? 'genitive' : 'nominative'], str);
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Spanish (es)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('es', {
            MMMM: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            MMM: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'],
            dddd: ['domingo', 'lunes', 'martes', 'mi??rcoles', 'jueves', 'viernes', 's??bado'],
            ddd: ['dom.', 'lun.', 'mar.', 'mi??.', 'jue.', 'vie.', 's??b.'],
            dd: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 's??'],
            A: ['de la ma??ana', 'de la tarde', 'de la noche'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 12) {
                        return this.A[0];   // de la ma??ana
                    } else if (h < 19) {
                        return this.A[1];   // de la tarde
                    }
                    return this.A[2];       // de la noche
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;   // de la ma??ana
                    }
                    return h > 11 ? h : h + 12; // de la tarde, de la noche
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Persian (fa)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['??', '??', '??', '??', '??', '??', '??', '??', '??', '??'],
            map = { '??': 0, '??': 1, '??': 2, '??': 3, '??': 4, '??': 5, '??': 6, '??': 7, '??': 8, '??': 9 };

        date.setLocales('fa', {
            MMMM: ['????????????', '??????????', '????????', '??????????', '????', '????????', '??????????', '??????', '??????????????', '??????????', '????????????', '????????????'],
            MMM: ['????????????', '??????????', '????????', '??????????', '????', '????????', '??????????', '??????', '??????????????', '??????????', '????????????', '????????????'],
            dddd: ['???????????????', '????????????', '???????????????', '????????????????', '?????????????????', '????????', '????????'],
            ddd: ['???????????????', '????????????', '???????????????', '????????????????', '?????????????????', '????????', '????????'],
            dd: ['??', '??', '??', '??', '??', '??', '??'],
            A: ['?????? ???? ??????', '?????? ???? ??????'],
            formatter: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                pre: function (str) {
                    return str.replace(/[????????????????????]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve French (fr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('fr', {
            MMMM: ['janvier', 'f??vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'ao??t', 'septembre', 'octobre', 'novembre', 'd??cembre'],
            MMM: ['janv.', 'f??vr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'ao??t', 'sept.', 'oct.', 'nov.', 'd??c.'],
            dddd: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
            ddd: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
            dd: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
            A: ['matin', 'l\'apr??s-midi']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hindi (hi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('hi', {
            MMMM: ['???????????????', '??????????????????', '???????????????', '??????????????????', '??????', '?????????', '???????????????', '???????????????', '?????????????????????', '?????????????????????', '??????????????????', '?????????????????????'],
            MMM: ['??????.', '?????????.', '???????????????', '???????????????.', '??????', '?????????', '?????????.', '??????.', '?????????.', '???????????????.', '??????.', '?????????.'],
            dddd: ['??????????????????', '??????????????????', '?????????????????????', '??????????????????', '?????????????????????', '????????????????????????', '??????????????????'],
            ddd: ['?????????', '?????????', '????????????', '?????????', '????????????', '???????????????', '?????????'],
            dd: ['???', '??????', '??????', '??????', '??????', '??????', '???'],
            A: ['?????????', '????????????', '???????????????', '?????????'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ?????????
                    } else if (h < 10) {
                        return this.A[1];   // ????????????
                    } else if (h < 17) {
                        return this.A[2];   // ???????????????
                    } else if (h < 20) {
                        return this.A[3];   // ?????????
                    }
                    return this.A[0];       // ?????????
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h < 4 || h > 11 ? h : h + 12;    // ?????????
                    } else if (a < 2) {
                        return h;                               // ????????????
                    } else if (a < 3) {
                        return h > 9 ? h : h + 12;              // ???????????????
                    }
                    return h + 12;                              // ?????????
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hungarian (hu)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('hu', {
            MMMM: ['janu??r', 'febru??r', 'm??rcius', '??prilis', 'm??jus', 'j??nius', 'j??lius', 'augusztus', 'szeptember', 'okt??ber', 'november', 'december'],
            MMM: ['jan', 'feb', 'm??rc', '??pr', 'm??j', 'j??n', 'j??l', 'aug', 'szept', 'okt', 'nov', 'dec'],
            dddd: ['vas??rnap', 'h??tf??', 'kedd', 'szerda', 'cs??t??rt??k', 'p??ntek', 'szombat'],
            ddd: ['vas', 'h??t', 'kedd', 'sze', 'cs??t', 'p??n', 'szo'],
            dd: ['v', 'h', 'k', 'sze', 'cs', 'p', 'szo'],
            A: ['de', 'du']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Indonesian (id)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('id', {
            MMMM: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
            dddd: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
            ddd: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
            dd: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sb'],
            A: ['pagi', 'siang', 'sore', 'malam'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 11) {
                        return this.A[0];   // pagi
                    } else if (h < 15) {
                        return this.A[1];   // siang
                    } else if (h < 19) {
                        return this.A[2];   // sore
                    }
                    return this.A[3];       // malam
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;                       // pagi
                    } else if (a < 2) {
                        return h >= 11 ? h : h + 12;    // siang
                    }
                    return h + 12;                      // sore, malam
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Italian (it)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('it', {
            MMMM: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
            MMM: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
            dddd: ['Domenica', 'Luned??', 'Marted??', 'Mercoled??', 'Gioved??', 'Venerd??', 'Sabato'],
            ddd: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
            dd: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            A: ['di mattina', 'di pomerrigio']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Japanese (ja)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ja', {
            MMMM: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
            MMM: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
            dddd: ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],
            ddd: ['???', '???', '???', '???', '???', '???', '???'],
            dd: ['???', '???', '???', '???', '???', '???', '???'],
            A: ['??????', '??????'],
            formatter: {
                hh: function (d) {
                    return ('0' + d.getHours() % 12).slice(-2);
                },
                h: function (d) {
                    return d.getHours() % 12;
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Javanese (jv)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('jv', {
            MMMM: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'],
            MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nop', 'Des'],
            dddd: ['Minggu', 'Senen', 'Seloso', 'Rebu', 'Kemis', 'Jemuwah', 'Septu'],
            ddd: ['Min', 'Sen', 'Sel', 'Reb', 'Kem', 'Jem', 'Sep'],
            dd: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sp'],
            A: ['enjing', 'siyang', 'sonten', 'ndalu'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 11) {
                        return this.A[0];   // enjing
                    } else if (h < 15) {
                        return this.A[1];   // siyang
                    } else if (h < 19) {
                        return this.A[2];   // sonten
                    }
                    return this.A[3];       // ndalu
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;                       // enjing
                    } else if (a < 2) {
                        return h >= 11 ? h : h + 12;    // siyang
                    }
                    return h + 12;                      // sonten, ndalu
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Korean (ko)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ko', {
            MMMM: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
            MMM: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
            dddd: ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],
            ddd: ['???', '???', '???', '???', '???', '???', '???'],
            dd: ['???', '???', '???', '???', '???', '???', '???'],
            A: ['??????', '??????']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Burmese (my)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???'],
            map = { '???': 0, '???': 1, '???': 2, '???': 3, '???': 4, '???': 5, '???': 6, '???': 7, '???': 8, '???': 9 };

        date.setLocales('my', {
            MMMM: ['????????????????????????', '??????????????????????????????', '?????????', '????????????', '??????', '????????????', '?????????????????????', '??????????????????', '????????????????????????', '??????????????????????????????', '????????????????????????', '?????????????????????'],
            MMM: ['?????????', '??????', '?????????', '?????????', '??????', '????????????', '???????????????', '??????', '?????????', '???????????????', '?????????', '??????'],
            dddd: ['???????????????????????????', '?????????????????????', '??????????????????', '????????????????????????', '????????????????????????', '??????????????????', '?????????'],
            ddd: ['?????????', '??????', '??????', '?????????', '?????????', '?????????', '??????'],
            dd: ['?????????', '??????', '??????', '?????????', '?????????', '?????????', '??????'],
            formatter: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                pre: function (str) {
                    return str.replace(/[??????????????????????????????]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Dutch (nl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('nl', {
            MMMM: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
            MMM: {
                withdots: ['jan.', 'feb.', 'mrt.', 'apr.', 'mei', 'jun.', 'jul.', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
                withoutdots: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
            },
            dddd: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
            ddd: ['zo.', 'ma.', 'di.', 'wo.', 'do.', 'vr.', 'za.'],
            dd: ['Zo', 'Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za'],
            formatter: {
                MMM: function (d, formatString) {
                    return this.MMM[/-MMM-/.test(formatString) ? 'withoutdots' : 'withdots'][d.getMonth()];
                }
            },
            parser: {
                MMM: function (str, formatString) {
                    return this.parser.find(this.MMM[/-MMM-/.test(formatString) ? 'withoutdots' : 'withdots'], str);
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Punjabi (pa-in)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???'],
            map = { '???': 0, '???': 1, '???': 2, '???': 3, '???': 4, '???': 5, '???': 6, '???': 7, '???': 8, '???': 9 };

        date.setLocales('pa-in', {
            MMMM: ['???????????????', '??????????????????', '????????????', '??????????????????', '??????', '?????????', '???????????????', '????????????', '???????????????', '??????????????????', '???????????????', '???????????????'],
            MMM: ['???????????????', '??????????????????', '????????????', '??????????????????', '??????', '?????????', '???????????????', '????????????', '???????????????', '??????????????????', '???????????????', '???????????????'],
            dddd: ['???????????????', '??????????????????', '?????????????????????', '??????????????????', '??????????????????', '???????????????????????????', '???????????????????????????'],
            ddd: ['??????', '?????????', '????????????', '?????????', '?????????', '???????????????', '????????????'],
            dd: ['??????', '?????????', '????????????', '?????????', '?????????', '???????????????', '????????????'],
            A: ['?????????', '????????????', '??????????????????', '????????????'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ?????????
                    } else if (h < 10) {
                        return this.A[1];   // ????????????
                    } else if (h < 17) {
                        return this.A[2];   // ??????????????????
                    } else if (h < 20) {
                        return this.A[3];   // ????????????
                    }
                    return this.A[0];       // ?????????
                },
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h < 4 || h > 11 ? h : h + 12;    // ?????????
                    } else if (a < 2) {
                        return h;                               // ????????????
                    } else if (a < 3) {
                        return h >= 10 ? h : h + 12;            // ??????????????????
                    }
                    return h + 12;                              // ????????????
                },
                pre: function (str) {
                    return str.replace(/[??????????????????????????????]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Polish (pl)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('pl', {
            MMMM: {
                nominative: ['stycze??', 'luty', 'marzec', 'kwiecie??', 'maj', 'czerwiec', 'lipiec', 'sierpie??', 'wrzesie??', 'pa??dziernik', 'listopad', 'grudzie??'],
                subjective: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrze??nia', 'pa??dziernika', 'listopada', 'grudnia']
            },
            MMM: ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'pa??', 'lis', 'gru'],
            dddd: ['niedziela', 'poniedzia??ek', 'wtorek', '??roda', 'czwartek', 'pi??tek', 'sobota'],
            ddd: ['nie', 'pon', 'wt', '??r', 'czw', 'pt', 'sb'],
            dd: ['Nd', 'Pn', 'Wt', '??r', 'Cz', 'Pt', 'So'],
            formatter: {
                MMMM: function (d, formatString) {
                    return this.MMMM[/D MMMM/.test(formatString) ? 'subjective' : 'nominative'][d.getMonth()];
                }
            },
            parser: {
                MMMM: function (str, formatString) {
                    return this.parser.find(this.MMMM[/D MMMM/.test(formatString) ? 'subjective' : 'nominative'], str);
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Portuguese (pt)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('pt', {
            MMMM: ['Janeiro', 'Fevereiro', 'Mar??o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            MMM: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            dddd: ['Domingo', 'Segunda-Feira', 'Ter??a-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'S??bado'],
            ddd: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S??b'],
            dd: ['Dom', '2??', '3??', '4??', '5??', '6??', 'S??b'],
            A: ['da madrugada', 'da manh??', 'da tarde', 'da noite'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 5) {
                        return this.A[0];   // da madrugada
                    } else if (h < 12) {
                        return this.A[1];   // da manh??
                    } else if (h < 19) {
                        return this.A[2];   // da tarde
                    }
                    return this.A[3];       // da noite
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // da madrugada, da manh??
                    }
                    return h > 11 ? h : h + 12; // da tarde, da noite
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Romanian (ro)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ro', {
            MMMM: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
            MMM: ['ian.', 'febr.', 'mart.', 'apr.', 'mai', 'iun.', 'iul.', 'aug.', 'sept.', 'oct.', 'nov.', 'dec.'],
            dddd: ['duminic??', 'luni', 'mar??i', 'miercuri', 'joi', 'vineri', 's??mb??t??'],
            ddd: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'S??m'],
            dd: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'S??']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Russian (ru)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('ru', {
            MMMM: ['????????????', '??????????????', '??????????', '????????????', '??????', '????????', '????????', '??????????????', '????????????????', '??????????????', '????????????', '??????????????'],
            MMM: ['??????', '??????', '??????', '??????', '??????', '????????', '????????', '??????', '??????', '??????', '??????', '??????'],
            dddd: ['??????????????????????', '??????????????????????', '??????????????', '??????????', '??????????????', '??????????????', '??????????????'],
            ddd: ['????', '????', '????', '????', '????', '????', '????'],
            dd: ['????', '????', '????', '????', '????', '????', '????'],
            A: ['????????', '????????', '??????', '????????????'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ????????
                    } else if (h < 12) {
                        return this.A[1];   // ????????
                    } else if (h < 17) {
                        return this.A[2];   // ??????
                    }
                    return this.A[3];       // ????????????
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // ????????, ????????
                    }
                    return h > 11 ? h : h + 12; // ??????, ????????????
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Serbian (sr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('sr', {
            MMMM: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
            MMM: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
            dddd: ['nedelja', 'ponedeljak', 'utorak', 'sreda', '??etvrtak', 'petak', 'subota'],
            ddd: ['ned.', 'pon.', 'uto.', 'sre.', '??et.', 'pet.', 'sub.'],
            dd: ['ne', 'po', 'ut', 'sr', '??e', 'pe', 'su']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Thai (th)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('th', {
            MMMM: ['??????????????????', '??????????????????????????????', '??????????????????', '??????????????????', '?????????????????????', '????????????????????????', '?????????????????????', '?????????????????????', '?????????????????????', '??????????????????', '???????????????????????????', '?????????????????????'],
            MMM: ['???.???.', '???.???.', '??????.???.', '??????.???.', '???.???.', '??????.???.', '???.???.', '???.???.', '???.???.', '???.???.', '???.???.', '???.???.'],
            dddd: ['?????????????????????', '??????????????????', '??????????????????', '?????????', '????????????????????????', '???????????????', '???????????????'],
            ddd: ['?????????????????????', '??????????????????', '??????????????????', '?????????', '???????????????', '???????????????', '???????????????'],
            dd: ['??????.', '???.', '???.', '???.', '??????.', '???.', '???.'],
            A: ['??????????????????????????????', '??????????????????????????????']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Turkish (tr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('tr', {
            MMMM: ['Ocak', '??ubat', 'Mart', 'Nisan', 'May??s', 'Haziran', 'Temmuz', 'A??ustos', 'Eyl??l', 'Ekim', 'Kas??m', 'Aral??k'],
            MMM: ['Oca', '??ub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'A??u', 'Eyl', 'Eki', 'Kas', 'Ara'],
            dddd: ['Pazar', 'Pazartesi', 'Sal??', '??ar??amba', 'Per??embe', 'Cuma', 'Cumartesi'],
            ddd: ['Paz', 'Pts', 'Sal', '??ar', 'Per', 'Cum', 'Cts'],
            dd: ['Pz', 'Pt', 'Sa', '??a', 'Pe', 'Cu', 'Ct']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Ukrainian (uk)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('uk', {
            MMMM: ['??????????', '????????????', '??????????????', '????????????', '????????????', '????????????', '??????????', '????????????', '??????????????', '????????????', '??????????????????', '????????????'],
            MMM: ['??????', '??????', '??????', '????????', '????????', '????????', '??????', '????????', '??????', '????????', '????????', '????????'],
            dddd: {
                nominative: ['????????????', '??????????????????', '????????????????', '????????????', '????????????', '?????????????????', '????????????'],
                accusative: ['????????????', '??????????????????', '????????????????', '????????????', '????????????', '?????????????????', '????????????'],
                genitive: ['????????????', '??????????????????', '????????????????', '????????????', '????????????????', '?????????????????', '????????????']
            },
            ddd: ['????', '????', '????', '????', '????', '????', '????'],
            dd: ['????', '????', '????', '????', '????', '????', '????'],
            A: ['????????', '??????????', '??????', '????????????'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ????????
                    } else if (h < 12) {
                        return this.A[1];   // ??????????
                    } else if (h < 17) {
                        return this.A[2];   // ??????
                    }
                    return this.A[3];       // ????????????
                },
                dddd: function (d, formatString) {
                    var type = 'nominative';
                    if (/(\[[????????]\]) ?dddd/.test(formatString)) {
                        type = 'accusative';
                    } else if (/\[?(?:??????????????|??????????????????)? ?\] ?dddd/.test(formatString)) {
                        type = 'genitive';
                    }
                    return this.dddd[type][d.getDay()];
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // ????????, ??????????
                    }
                    return h > 11 ? h : h + 12; // ??????, ????????????
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Uzbek (uz)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('uz', {
            MMMM: ['??????????', '????????????', '????????', '??????????', '??????', '??????', '??????', '????????????', '??????????????', '????????????', '??????????', '????????????'],
            MMM: ['??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????'],
            dddd: ['??????????????', '??????????????', '??????????????', '????????????????', '????????????????', '????????', '??????????'],
            ddd: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
            dd: ['????', '????', '????', '????', '????', '????', '????']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Vietnamese (vi)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('vi', {
            MMMM: ['th??ng 1', 'th??ng 2', 'th??ng 3', 'th??ng 4', 'th??ng 5', 'th??ng 6', 'th??ng 7', 'th??ng 8', 'th??ng 9', 'th??ng 10', 'th??ng 11', 'th??ng 12'],
            MMM: ['Th01', 'Th02', 'Th03', 'Th04', 'Th05', 'Th06', 'Th07', 'Th08', 'Th09', 'Th10', 'Th11', 'Th12'],
            dddd: ['ch??? nh???t', 'th??? hai', 'th??? ba', 'th??? t??', 'th??? n??m', 'th??? s??u', 'th??? b???y'],
            ddd: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            dd: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
            A: ['sa', 'ch']
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-cn)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('zh-cn', {
            MMMM: ['??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '?????????', '?????????'],
            MMM: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
            dddd: ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],
            ddd: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
            dd: ['???', '???', '???', '???', '???', '???', '???'],
            A: ['??????', '??????', '??????', '??????', '??????', '??????'],
            formatter: {
                A: function (d) {
                    var hm = d.getHours() * 100 + d.getMinutes();
                    if (hm < 600) {
                        return this.A[0];   // ??????
                    } else if (hm < 900) {
                        return this.A[1];   // ??????
                    } else if (hm < 1130) {
                        return this.A[2];   // ??????
                    } else if (hm < 1230) {
                        return this.A[3];   // ??????
                    } else if (hm < 1800) {
                        return this.A[4];   // ??????
                    }
                    return this.A[5];       // ??????
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 4) {
                        return h;   // ??????, ??????, ??????, ??????
                    }
                    return h > 11 ? h : h + 12; // ??????, ??????
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve date-and-time.js locale configuration
 * @preserve Chinese (zh-tw)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('zh-tw', {
            MMMM: ['??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '??????', '?????????', '?????????'],
            MMM: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
            dddd: ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'],
            ddd: ['??????', '??????', '??????', '??????', '??????', '??????', '??????'],
            dd: ['???', '???', '???', '???', '???', '???', '???'],
            A: ['??????', '??????', '??????', '??????', '??????'],
            formatter: {
                A: function (d) {
                    var hm = d.getHours() * 100 + d.getMinutes();
                    if (hm < 900) {
                        return this.A[0];   // ??????
                    } else if (hm < 1130) {
                        return this.A[1];   // ??????
                    } else if (hm < 1230) {
                        return this.A[2];   // ??????
                    } else if (hm < 1800) {
                        return this.A[3];   // ??????
                    }
                    return this.A[4];       // ??????
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 3) {
                        return h;   // ??????, ??????, ??????
                    }
                    return h > 11 ? h : h + 12; // ??????, ??????
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(__webpack_require__(1));
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (locale),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        locale(global.date);
    }

}(this));


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(95);
module.exports = __webpack_require__(96);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modernizr__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_modernizr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_modernizr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owl_carousel_min_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owl_carousel_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__owl_carousel_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jssor_slider_mini_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jssor_slider_mini_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jssor_slider_mini_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectFx_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectFx_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__selectFx_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_datepicker_dist_js_bootstrap_datepicker_min_js__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap_datepicker_dist_js_bootstrap_datepicker_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap_datepicker_dist_js_bootstrap_datepicker_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starrr_min_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__starrr_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__starrr_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nivo_lightbox_min_js__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nivo_lightbox_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__nivo_lightbox_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jquery_shuffle_min_js__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jquery_shuffle_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__jquery_shuffle_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jquery_parallax_1_1_3_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jquery_parallax_1_1_3_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__jquery_parallax_1_1_3_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__script_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__script_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__responsive_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__responsive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__responsive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__currency_currency_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__currency_currency_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__currency_currency_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_rate_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rate_rate_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__rate_rate_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aptos_search_js__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_login_js__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_register_js__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_user_js__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_contact_js__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__booking_booking_js__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__booking_my_bookings_list_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__newsletter_newsletter_js__ = __webpack_require__(94);
var loadGoogleMapsApi = __webpack_require__(56);












/*
 * Default Scripts of the themplate
 */


/*
 * Plugin to load Google maps
 */
loadGoogleMapsApi({ key: google_key }).then(function (googleMaps) {
  if ($("#mg-map").length > 0) {
    var map = new googleMaps.Map(document.querySelector("#mg-map"), {
      center: {
        lat: saLatitude,
        lng: saLongitude
      },
      zoom: 17,
      zoomControl: false
    });

    var marker = new googleMaps.Marker({
      position: { lat: saLatitude, lng: saLongitude },
      map: map,
      title: "Lorem ipsum"
    });
  }
}).catch(function (error) {
  console.error(error);
});



/*
 * Load currency information
 */


/*
 * Load rates information
 */


/*
 * Modules to work with aptos
 */


/*
 * Modules to work with users
 */




/*
 * Module for contact form page
 */


/*
 * Module to booking functions
 */



/*
 * Module for newsletters
 */

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 56 */
/***/ (function(module, exports) {

var CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

var OPTIONS_KEYS = ['channel', 'client', 'key', 'language', 'region', 'v']

module.exports = function (options) {
  options = options || {}

  return new Promise(function (resolve, reject) {
    // Reject the promise after a timeout.
    var timeoutId = setTimeout(function () {
      window[CALLBACK_NAME] = function () {} // Set the on load callback to a no-op.
      reject(new Error('Could not load the Google Maps API'))
    }, options.timeout || 10000)

    // Hook up the on load callback.
    window[CALLBACK_NAME] = function () {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page.
    var scriptElement = document.createElement('script')
    var params = ['callback=' + CALLBACK_NAME]
    OPTIONS_KEYS.forEach(function (key) {
      if (options[key]) {
        params.push(key + '=' + options[key])
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push('libraries=' + options.libraries.join(','))
    }
    scriptElement.src =
      'https://maps.googleapis.com/maps/api/js?' + params.join('&')

    // Insert the `script` tag.
    document.body.appendChild(scriptElement)
  })
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {"function" !== typeof Object.create && (Object.create = function (f) {
  function g() {}g.prototype = f;return new g();
});
(function (f, g, k) {
  var l = { init: function init(a, b) {
      this.$elem = f(b);this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);this.userOptions = a;this.loadContent();
    }, loadContent: function loadContent() {
      function a(a) {
        var d,
            e = "";if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);else {
          for (d in a.owl) {
            a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
          }b.$elem.html(e);
        }b.logIn();
      }var b = this,
          e;"function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);"string" === typeof b.options.jsonPath ? (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn();
    }, logIn: function logIn() {
      this.$elem.data("owl-originalStyles", this.$elem.attr("style"));this.$elem.data("owl-originalClasses", this.$elem.attr("class"));this.$elem.css({ opacity: 0 });this.orignalItems = this.options.items;this.checkBrowser();this.wrapperWidth = 0;this.checkVisible = null;this.setVars();
    }, setVars: function setVars() {
      if (0 === this.$elem.children().length) return !1;this.baseClass();this.eventTypes();this.$userItems = this.$elem.children();this.itemsAmount = this.$userItems.length;
      this.wrapItems();this.$owlItems = this.$elem.find(".owl-item");this.$owlWrapper = this.$elem.find(".owl-wrapper");this.playDirection = "next";this.prevItem = 0;this.prevArr = [0];this.currentItem = 0;this.customEvents();this.onStartup();
    }, onStartup: function onStartup() {
      this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);!0 === this.options.autoPlay && (this.options.autoPlay = 5E3);this.play();this.$elem.find(".owl-wrapper").css("display", "block");this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();this.onstartup = !1;this.eachMoveUpdate();"function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
    }, eachMoveUpdate: function eachMoveUpdate() {
      !0 === this.options.lazyLoad && this.lazyLoad();!0 === this.options.autoHeight && this.autoHeight();this.onVisibleItems();"function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem]);
    }, updateVars: function updateVars() {
      "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem]);
    }, reload: function reload() {
      var a = this;g.setTimeout(function () {
        a.updateVars();
      }, 0);
    }, watchVisibility: function watchVisibility() {
      var a = this;if (!1 === a.$elem.is(":visible")) a.$elem.css({ opacity: 0 }), g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);else return !1;a.checkVisible = g.setInterval(function () {
        a.$elem.is(":visible") && (a.reload(), a.$elem.animate({ opacity: 1 }, 200), g.clearInterval(a.checkVisible));
      }, 500);
    }, wrapItems: function wrapItems() {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");this.$elem.css("display", "block");
    },
    baseClass: function baseClass() {
      var a = this.$elem.hasClass(this.options.baseClass),
          b = this.$elem.hasClass(this.options.theme);a || this.$elem.addClass(this.options.baseClass);b || this.$elem.addClass(this.options.theme);
    }, updateItems: function updateItems() {
      var a, b;if (!1 === this.options.responsive) return !1;if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;a = f(this.options.responsiveBaseWidth).width();a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);if (!1 !== this.options.itemsCustom) for (this.options.itemsCustom.sort(function (a, b) {
        return a[0] - b[0];
      }), b = 0; b < this.options.itemsCustom.length; b += 1) {
        this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
      } else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount);
    }, response: function response() {
      var a = this,
          b,
          e;if (!0 !== a.options.responsive) return !1;e = f(g).width();a.resizer = function () {
        f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function () {
          e = f(g).width();a.updateVars();
        }, a.options.responsiveRefreshRate));
      };f(g).resize(a.resizer);
    }, updatePosition: function updatePosition() {
      this.jumpTo(this.currentItem);!1 !== this.options.autoPlay && this.checkAp();
    }, appendItemsSizes: function appendItemsSizes() {
      var a = this,
          b = 0,
          e = a.itemsAmount - a.options.items;a.$owlItems.each(function (c) {
        var d = f(this);d.css({ width: a.itemWidth }).data("owl-item", Number(c));if (0 === c % a.options.items || c === e) c > e || (b += 1);d.data("owl-roundPages", b);
      });
    }, appendWrapperSizes: function appendWrapperSizes() {
      this.$owlWrapper.css({ width: this.$owlItems.length * this.itemWidth * 2, left: 0 });this.appendItemsSizes();
    }, calculateAll: function calculateAll() {
      this.calculateWidth();this.appendWrapperSizes();this.loops();this.max();
    }, calculateWidth: function calculateWidth() {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items);
    }, max: function max() {
      var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);return a;
    }, min: function min() {
      return 0;
    }, loops: function loops() {
      var a = 0,
          b = 0,
          e,
          c;this.positionsInArray = [0];this.pagesInArray = [];for (e = 0; e < this.itemsAmount; e += 1) {
        b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]), c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c));
      }
    }, buildControls: function buildControls() {
      if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);!0 === this.options.pagination && this.buildPagination();!0 === this.options.navigation && this.buildButtons();
    }, buildButtons: function buildButtons() {
      var a = this,
          b = f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev = f("<div/>", { "class": "owl-prev", html: a.options.navigationText[0] || "" });a.buttonNext = f("<div/>", { "class": "owl-next", html: a.options.navigationText[1] || "" });b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
        a.preventDefault();
      });b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (b) {
        b.preventDefault();f(this).hasClass("owl-next") ? a.next() : a.prev();
      });
    }, buildPagination: function buildPagination() {
      var a = this;a.paginationWrapper = f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (b) {
        b.preventDefault();Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0);
      });
    }, updatePagination: function updatePagination() {
      var a, b, e, c, d, g;if (!1 === this.options.pagination) return !1;this.paginationWrapper.html("");a = 0;b = this.itemsAmount - this.itemsAmount % this.options.items;for (c = 0; c < this.itemsAmount; c += 1) {
        0 === c % this.options.items && (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", { "class": "owl-page" }), g = f("<span></span>", { text: !0 === this.options.paginationNumbers ? a : "", "class": !0 === this.options.paginationNumbers ? "owl-numbers" : "" }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
      }this.checkPagination();
    }, checkPagination: function checkPagination() {
      var a = this;if (!1 === a.options.pagination) return !1;a.paginationWrapper.find(".owl-page").each(function () {
        f(this).data("owl-roundPages") === f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"));
      });
    }, checkNavigation: function checkNavigation() {
      if (!1 === this.options.navigation) return !1;!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")));
    }, updateControls: function updateControls() {
      this.updatePagination();this.checkNavigation();this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show());
    }, destroyControls: function destroyControls() {
      this.owlControls && this.owlControls.remove();
    }, next: function next(a) {
      if (this.isTransition) return !1;
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";else return this.currentItem = this.maximumItem, !1;this.goTo(this.currentItem, a);
    }, prev: function prev(a) {
      if (this.isTransition) return !1;this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);if (0 > this.currentItem) if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";else return this.currentItem = 0, !1;this.goTo(this.currentItem, a);
    }, goTo: function goTo(a, b, e) {
      var c = this;if (c.isTransition) return !1;"function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);c.currentItem = c.owl.currentItem = a;if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0), !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;a = c.positionsInArray[a];!0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function () {
        c.isCss3Finish = !0;
      }, c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);c.afterGo();
    }, jumpTo: function jumpTo(a) {
      "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);this.swapSpeed(0);!0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);this.currentItem = this.owl.currentItem = a;this.afterGo();
    }, afterGo: function afterGo() {
      this.prevArr.push(this.currentItem);this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];this.prevArr.shift(0);this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());"function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem]);
    }, stop: function stop() {
      this.apStatus = "stop";g.clearInterval(this.autoPlayInterval);
    },
    checkAp: function checkAp() {
      "stop" !== this.apStatus && this.play();
    }, play: function play() {
      var a = this;a.apStatus = "play";if (!1 === a.options.autoPlay) return !1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval = g.setInterval(function () {
        a.next(!0);
      }, a.options.autoPlay);
    }, swapSpeed: function swapSpeed(a) {
      "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a));
    },
    addCssSpeed: function addCssSpeed(a) {
      return { "-webkit-transition": "all " + a + "ms ease", "-moz-transition": "all " + a + "ms ease", "-o-transition": "all " + a + "ms ease", transition: "all " + a + "ms ease" };
    }, removeTransition: function removeTransition() {
      return { "-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: "" };
    }, doTranslate: function doTranslate(a) {
      return { "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)", "-moz-transform": "translate3d(" + a + "px, 0px, 0px)", "-o-transform": "translate3d(" + a + "px, 0px, 0px)", "-ms-transform": "translate3d(" + a + "px, 0px, 0px)", transform: "translate3d(" + a + "px, 0px,0px)" };
    }, transition3d: function transition3d(a) {
      this.$owlWrapper.css(this.doTranslate(a));
    }, css2move: function css2move(a) {
      this.$owlWrapper.css({ left: a });
    }, css2slide: function css2slide(a, b) {
      var e = this;e.isCssFinish = !1;e.$owlWrapper.stop(!0, !0).animate({ left: a }, { duration: b || e.options.slideSpeed, complete: function complete() {
          e.isCssFinish = !0;
        } });
    }, checkBrowser: function checkBrowser() {
      var a = k.createElement("div");a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
      a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser = { support3d: null !== a && 1 === a.length, isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints };
    }, moveEvents: function moveEvents() {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents();
    }, eventTypes: function eventTypes() {
      var a = ["s", "e", "x"];this.ev_types = {};!0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);this.ev_types.start = a[0];this.ev_types.move = a[1];this.ev_types.end = a[2];
    }, disabledEvents: function disabledEvents() {
      this.$elem.on("dragstart.owl", function (a) {
        a.preventDefault();
      });this.$elem.on("mousedown.disableTextSelect", function (a) {
        return f(a.target).is("input, textarea, select, option");
      });
    },
    gestures: function gestures() {
      function a(a) {
        if (void 0 !== a.touches) return { x: a.touches[0].pageX, y: a.touches[0].pageY };if (void 0 === a.touches) {
          if (void 0 !== a.pageX) return { x: a.pageX, y: a.pageY };if (void 0 === a.pageX) return { x: a.clientX, y: a.clientY };
        }
      }function b(a) {
        "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end));
      }function e(b) {
        b = b.originalEvent || b || g.event;d.newPosX = a(b).x - h.offsetX;d.newPosY = a(b).y - h.offsetY;d.newRelativeX = d.newPosX - h.relativePos;
        "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));(8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);(10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);!0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX);
      }
      function c(a) {
        a = a.originalEvent || a || g.event;var c;a.target = a.target || a.srcElement;h.dragging = !1;!0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function (a) {
          a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable");
        }), a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));b("off");
      }var d = this,
          h = { offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null };d.isCssFinish = !0;d.$elem.on(d.ev_types.start, ".owl-wrapper", function (c) {
        c = c.originalEvent || c || g.event;var e;if (3 === c.which) return !1;if (!(d.itemsAmount <= d.options.items)) {
          if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
          !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);!0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");d.newPosX = 0;d.newRelativeX = 0;f(this).css(d.removeTransition());e = f(this).position();h.relativePos = e.left;h.offsetX = a(c).x - e.left;h.offsetY = a(c).y - e.top;b("on");h.sliding = !1;h.targetElement = c.target || c.srcElement;
        }
      });
    }, getNewPosition: function getNewPosition() {
      var a = this.closestItem();a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = a = 0);return a;
    }, closestItem: function closestItem() {
      var a = this,
          b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
          e = a.newPosX,
          c = null;f.each(b, function (d, g) {
        e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) : (c = b[d + 1], a.currentItem = d + 1));
      });return a.currentItem;
    }, moveDirection: function moveDirection() {
      var a;0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");return a;
    }, customEvents: function customEvents() {
      var a = this;a.$elem.on("owl.next", function () {
        a.next();
      });a.$elem.on("owl.prev", function () {
        a.prev();
      });a.$elem.on("owl.play", function (b, e) {
        a.options.autoPlay = e;a.play();a.hoverStatus = "play";
      });a.$elem.on("owl.stop", function () {
        a.stop();a.hoverStatus = "stop";
      });a.$elem.on("owl.goTo", function (b, e) {
        a.goTo(e);
      });
      a.$elem.on("owl.jumpTo", function (b, e) {
        a.jumpTo(e);
      });
    }, stopOnHover: function stopOnHover() {
      var a = this;!0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function () {
        a.stop();
      }), a.$elem.on("mouseout", function () {
        "stop" !== a.hoverStatus && a.play();
      }));
    }, lazyLoad: function lazyLoad() {
      var a, b, e, c, d;if (!1 === this.options.lazyLoad) return !1;for (a = 0; a < this.itemsAmount; a += 1) {
        b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ? b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)));
      }
    }, lazyPreload: function lazyPreload(a, b) {
      function e() {
        a.data("owl-loaded", "loaded").removeClass("loading");b.removeAttr("data-src");"fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();"function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this, [d.$elem]);
      }function c() {
        f += 1;d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e();
      }var d = this,
          f = 0,
          k;"DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");c();
    }, autoHeight: function autoHeight() {
      function a() {
        var a = f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height", a + "px");e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function () {
          e.wrapperOuter.addClass("autoHeight");
        }, 0);
      }function b() {
        d += 1;e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b, 100) : e.wrapperOuter.css("height", "");
      }var e = this,
          c = f(e.$owlItems[e.currentItem]).find("img"),
          d;void 0 !== c.get(0) ? (d = 0, b()) : a();
    }, completeImg: function completeImg(a) {
      return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0;
    }, onVisibleItems: function onVisibleItems() {
      var a;!0 === this.options.addClassActive && this.$owlItems.removeClass("active");this.visibleItems = [];for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) {
        this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
      }this.owl.visibleItems = this.visibleItems;
    }, transitionTypes: function transitionTypes(a) {
      this.outClass = "owl-" + a + "-out";this.inClass = "owl-" + a + "-in";
    }, singleItemTransition: function singleItemTransition() {
      var a = this,
          b = a.outClass,
          e = a.inClass,
          c = a.$owlItems.eq(a.currentItem),
          d = a.$owlItems.eq(a.prevItem),
          f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
          g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;a.isTransition = !0;a.$owlWrapper.addClass("owl-origin").css({ "-webkit-transform-origin": g + "px", "-moz-perspective-origin": g + "px", "perspective-origin": g + "px" });d.css({ position: "relative", left: f + "px" }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endPrev = !0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d, b);
      });c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function () {
        a.endCurrent = !0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c, e);
      });
    }, clearTransStyle: function clearTransStyle(a, b) {
      a.css({ position: "", left: "" }).removeClass(b);this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1);
    }, owlStatus: function owlStatus() {
      this.owl = { userOptions: this.userOptions, baseElement: this.$elem, userItems: this.$userItems, owlItems: this.$owlItems, currentItem: this.currentItem, prevItem: this.prevItem, visibleItems: this.visibleItems, isTouch: this.browser.isTouch, browser: this.browser, dragDirection: this.dragDirection };
    }, clearEvents: function clearEvents() {
      this.$elem.off(".owl owl mousedown.disableTextSelect");
      f(k).off(".owl owl");f(g).off("resize", this.resizer);
    }, unWrap: function unWrap() {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());this.clearEvents();this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"));
    }, destroy: function destroy() {
      this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData();
    }, reinit: function reinit(a) {
      a = f.extend({}, this.userOptions, a);this.unWrap();this.init(a, this.$elem);
    }, addItem: function addItem(a, b) {
      var e;if (!a) return !1;if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;this.unWrap();e = void 0 === b || -1 === b ? -1 : b;e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);this.setVars();
    }, removeItem: function removeItem(a) {
      if (0 === this.$elem.children().length) return !1;a = void 0 === a || -1 === a ? -1 : a;this.unWrap();this.$userItems.eq(a).remove();this.setVars();
    } };f.fn.owlCarousel = function (a) {
    return this.each(function () {
      if (!0 === f(this).data("owl-init")) return !1;f(this).data("owl-init", !0);var b = Object.create(l);b.init(a, this);f.data(this, "owlCarousel", b);
    });
  };f.fn.owlCarousel.options = { items: 5, itemsCustom: !1, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: !1, itemsMobile: [479, 1], singleItem: !1, itemsScaleUp: !1, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1E3, autoPlay: !1, stopOnHover: !1, navigation: !1, navigationText: ["prev", "next"], rewindNav: !0, scrollPerPage: !1, pagination: !0, paginationNumbers: !1,
    responsive: !0, responsiveRefreshRate: 200, responsiveBaseWidth: g, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: !1, lazyFollow: !0, lazyEffect: "fade", autoHeight: !1, jsonPath: !1, jsonSuccess: !1, dragBeforeAnimFinish: !0, mouseDrag: !0, touchDrag: !0, addClassActive: !1, transitionStyle: !1, beforeUpdate: !1, afterUpdate: !1, beforeInit: !1, afterInit: !1, beforeMove: !1, afterMove: !1, afterAction: !1, startDragging: !1, afterLazyLoad: !1 };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

(function (h, e, b, i, c, g, j) {
  /*! Jssor */
  new function () {}();var d = h.$JssorEasing$ = { $EaseSwing: function $EaseSwing(a) {
      return -b.cos(a * b.PI) / 2 + .5;
    }, $EaseLinear: function $EaseLinear(a) {
      return a;
    }, $EaseInQuad: function $EaseInQuad(a) {
      return a * a;
    }, $EaseOutQuad: function $EaseOutQuad(a) {
      return -a * (a - 2);
    }, $EaseInOutQuad: function $EaseInOutQuad(a) {
      return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1);
    }, $EaseInCubic: function $EaseInCubic(a) {
      return a * a * a;
    }, $EaseOutCubic: function $EaseOutCubic(a) {
      return (a -= 1) * a * a + 1;
    }, $EaseInOutCubic: function $EaseInOutCubic(a) {
      return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2);
    }, $EaseInQuart: function $EaseInQuart(a) {
      return a * a * a * a;
    }, $EaseOutQuart: function $EaseOutQuart(a) {
      return -((a -= 1) * a * a * a - 1);
    }, $EaseInOutQuart: function $EaseInOutQuart(a) {
      return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2);
    }, $EaseInQuint: function $EaseInQuint(a) {
      return a * a * a * a * a;
    }, $EaseOutQuint: function $EaseOutQuint(a) {
      return (a -= 1) * a * a * a * a + 1;
    }, $EaseInOutQuint: function $EaseInOutQuint(a) {
      return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2);
    }, $EaseInSine: function $EaseInSine(a) {
      return 1 - b.cos(a * b.PI / 2);
    }, $EaseOutSine: function $EaseOutSine(a) {
      return b.sin(a * b.PI / 2);
    }, $EaseInOutSine: function $EaseInOutSine(a) {
      return -1 / 2 * (b.cos(b.PI * a) - 1);
    }, $EaseInExpo: function $EaseInExpo(a) {
      return a == 0 ? 0 : b.pow(2, 10 * (a - 1));
    }, $EaseOutExpo: function $EaseOutExpo(a) {
      return a == 1 ? 1 : -b.pow(2, -10 * a) + 1;
    }, $EaseInOutExpo: function $EaseInOutExpo(a) {
      return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2);
    }, $EaseInCirc: function $EaseInCirc(a) {
      return -(b.sqrt(1 - a * a) - 1);
    }, $EaseOutCirc: function $EaseOutCirc(a) {
      return b.sqrt(1 - (a -= 1) * a);
    }, $EaseInOutCirc: function $EaseInOutCirc(a) {
      return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1);
    }, $EaseInElastic: function $EaseInElastic(a) {
      if (!a || a == 1) return a;var c = .3,
          d = .075;return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c));
    }, $EaseOutElastic: function $EaseOutElastic(a) {
      if (!a || a == 1) return a;var c = .3,
          d = .075;return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1;
    }, $EaseInOutElastic: function $EaseInOutElastic(a) {
      if (!a || a == 1) return a;var c = .45,
          d = .1125;return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1;
    }, $EaseInBack: function $EaseInBack(a) {
      var b = 1.70158;return a * a * ((b + 1) * a - b);
    }, $EaseOutBack: function $EaseOutBack(a) {
      var b = 1.70158;return (a -= 1) * a * ((b + 1) * a + b) + 1;
    }, $EaseInOutBack: function $EaseInOutBack(a) {
      var b = 1.70158;return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
    }, $EaseInBounce: function $EaseInBounce(a) {
      return 1 - d.$EaseOutBounce(1 - a);
    }, $EaseOutBounce: function $EaseOutBounce(a) {
      return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
    }, $EaseInOutBounce: function $EaseInOutBounce(a) {
      return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5;
    }, $EaseGoBack: function $EaseGoBack(a) {
      return 1 - b.abs(2 - 1);
    }, $EaseInWave: function $EaseInWave(a) {
      return 1 - b.cos(a * b.PI * 2);
    }, $EaseOutWave: function $EaseOutWave(a) {
      return b.sin(a * b.PI * 2);
    }, $EaseOutJump: function $EaseOutJump(a) {
      return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a);
    }, $EaseInJump: function $EaseInJump(a) {
      return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a;
    } };var a = new function () {
    var f = this,
        xb = /\S+/g,
        T = 1,
        fb = 2,
        kb = 3,
        jb = 4,
        ob = 5,
        L,
        s = 0,
        l = 0,
        p = 0,
        bb = 0,
        A = 0,
        B = navigator,
        tb = B.appName,
        k = B.userAgent,
        z;function Eb() {
      if (!L) {
        L = { ie: "ontouchstart" in h || "createTouch" in e };var a;if (B.pointerEnabled || (a = B.msPointerEnabled)) L.dd = a ? "msTouchAction" : "touchAction";
      }return L;
    }function v(i) {
      if (!s) {
        s = -1;if (tb == "Microsoft Internet Explorer" && !!h.attachEvent && !!h.ActiveXObject) {
          var f = k.indexOf("MSIE");s = T;p = n(k.substring(f + 5, k.indexOf(";", f))); /*@cc_on bb=@_jscript_version@*/;l = e.documentMode || p;
        } else if (tb == "Netscape" && !!h.addEventListener) {
          var d = k.indexOf("Firefox"),
              b = k.indexOf("Safari"),
              g = k.indexOf("Chrome"),
              c = k.indexOf("AppleWebKit");if (d >= 0) {
            s = fb;l = n(k.substring(d + 8));
          } else if (b >= 0) {
            var j = k.substring(0, b).lastIndexOf("/");s = g >= 0 ? jb : kb;l = n(k.substring(j + 1, b));
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);if (a) {
              s = T;l = p = n(a[1]);
            }
          }if (c >= 0) A = n(k.substring(c + 12));
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if (a) {
            s = ob;l = n(a[2]);
          }
        }
      }return i == s;
    }function q() {
      return v(T);
    }function O() {
      return q() && (l < 6 || e.compatMode == "BackCompat");
    }function ib() {
      return v(kb);
    }function hb() {
      return v(jb);
    }function nb() {
      return v(ob);
    }function cb() {
      return ib() && A > 534 && A < 535;
    }function M() {
      return q() && l < 9;
    }function t(a) {
      if (!z) {
        m(["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], function (b) {
          if (a.style[b] != j) {
            z = b;return c;
          }
        });z = z || "transform";
      }return z;
    }function sb(a) {
      return {}.toString.call(a);
    }var K;function Cb() {
      if (!K) {
        K = {};m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
          K["[object " + a + "]"] = a.toLowerCase();
        });
      }return K;
    }function m(a, d) {
      if (sb(a) == "[object Array]") {
        for (var b = 0; b < a.length; b++) {
          if (d(a[b], b, a)) return c;
        }
      } else for (var e in a) {
        if (d(a[e], e, a)) return c;
      }
    }function D(a) {
      return a == i ? String(a) : Cb()[sb(a)] || "object";
    }function qb(a) {
      for (var b in a) {
        return c;
      }
    }function G(a) {
      try {
        return D(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"));
      } catch (b) {}
    }function y(a, b) {
      return { x: a, y: b };
    }function vb(b, a) {
      setTimeout(b, a || 0);
    }function I(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;m(d, function (c) {
        var b = c.exec(a);if (b) {
          var d = a.substr(0, b.index),
              e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));a = d + e;
        }
      });a = c + (a.indexOf(" ") != 0 ? " " : "") + a;return a;
    }function eb(b, a) {
      if (l < 9) b.style.filter = a;
    }function zb(b, a, c) {
      if (bb < 9) {
        var e = b.style.filter,
            h = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
            g = a ? "progid:DXImageTransform.Microsoft.Matrix(M11=" + a[0][0] + ", M12=" + a[0][1] + ", M21=" + a[1][0] + ", M22=" + a[1][1] + ", SizingMethod='auto expand')" : "",
            d = I(e, [h], g);eb(b, d);f.Uc(b, c.y);f.Vc(b, c.x);
      }
    }f.he = Eb;f.Wc = q;f.je = ib;f.ee = hb;f.vc = nb;f.Q = M;f.Sc = function () {
      return l;
    };f.oc = function () {
      v();return A;
    };f.$Delay = vb;function W(a) {
      a.constructor === W.caller && a.yd && a.yd.apply(a, W.caller.arguments);
    }f.yd = W;f.hb = function (a) {
      if (f.cd(a)) a = e.getElementById(a);return a;
    };function r(a) {
      return a || h.event;
    }f.Xc = r;f.Ac = function (a) {
      a = r(a);return a.target || a.srcElement || e;
    };f.Yc = function (a) {
      a = r(a);return { x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 };
    };function E(c, d, a) {
      if (a != j) c.style[d] = a;else {
        var b = c.currentStyle || c.style;a = b[d];if (a == "" && h.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, i);b && (a = b.getPropertyValue(d) || b[d]);
        }return a;
      }
    }function Y(b, c, a, d) {
      if (a != j) {
        d && (a += "px");E(b, c, a);
      } else return n(E(b, c));
    }function o(d, a) {
      var b = a & 2,
          c = a ? Y : E;return function (e, a) {
        return c(e, d, a, b);
      };
    }function Ab(b) {
      if (q() && p < 9) {
        var a = /opacity=([^)]*)/.exec(b.style.filter || "");return a ? n(a[1]) / 100 : 1;
      } else return n(b.style.opacity || "1");
    }function Bb(c, a, f) {
      if (q() && p < 9) {
        var h = c.style.filter || "",
            i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
            e = b.round(100 * a),
            d = "";if (e < 100 || f) d = "alpha(opacity=" + e + ") ";var g = I(h, [i], d);eb(c, g);
      } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100;
    }function ab(e, a) {
      var d = a.$Rotate || 0,
          c = a.$Scale == j ? 1 : a.$Scale;if (M()) {
        var l = f.se(d / 180 * b.PI, c, c);zb(e, !d && c == 1 ? i : l, f.re(l, a.$OriginalWidth, a.$OriginalHeight));
      } else {
        var g = t(e);if (g) {
          var k = "rotate(" + d % 360 + "deg) scale(" + c + ")";if (hb() && A > 535 && "ontouchstart" in h) k += " perspective(2000px)";e.style[g] = k;
        }
      }
    }f.me = function (b, a) {
      if (cb()) vb(f.F(i, ab, b, a));else ab(b, a);
    };f.le = function (b, c) {
      var a = t(b);if (a) b.style[a + "Origin"] = c;
    };f.oe = function (a, c) {
      if (q() && p < 9 || p < 10 && O()) a.style.zoom = c == 1 ? "" : c;else {
        var b = t(a);if (b) {
          var f = "scale(" + c + ")",
              e = a.style[b],
              g = new RegExp(/[\s]*scale\(.*?\)/g),
              d = I(e, [g], f);a.style[b] = d;
        }
      }
    };f.ne = function (a) {
      if (!a.style[t(a)] || a.style[t(a)] == "none") a.style[t(a)] = "perspective(2000px)";
    };f.Rb = function (b, a) {
      return function (c) {
        c = r(c);var e = c.type,
            d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);(!d || d !== a && !f.nf(a, d)) && b(c);
      };
    };f.c = function (a, c, d, b) {
      a = f.hb(a);if (a.addEventListener) {
        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);a.addEventListener(c, d, b);
      } else if (a.attachEvent) {
        a.attachEvent("on" + c, d);b && a.setCapture && a.setCapture();
      }
    };f.I = function (a, c, d, b) {
      a = f.hb(a);if (a.removeEventListener) {
        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);a.removeEventListener(c, d, b);
      } else if (a.detachEvent) {
        a.detachEvent("on" + c, d);b && a.releaseCapture && a.releaseCapture();
      }
    };f.Fb = function (a) {
      a = r(a);a.preventDefault && a.preventDefault();a.cancel = c;a.returnValue = g;
    };f.af = function (a) {
      a = r(a);a.stopPropagation && a.stopPropagation();a.cancelBubble = c;
    };f.F = function (d, c) {
      var a = [].slice.call(arguments, 2),
          b = function b() {
        var b = a.concat([].slice.call(arguments, 0));return c.apply(d, b);
      };return b;
    };f.gf = function (a, b) {
      if (b == j) return a.textContent || a.innerText;var c = e.createTextNode(b);f.jc(a);a.appendChild(c);
    };f.V = function (d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling) {
        (c || a.nodeType == 1) && b.push(a);
      }return b;
    };function rb(a, c, e, b) {
      b = b || "u";for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          if (S(a, b) == c) return a;if (!e) {
            var d = rb(a, c, e, b);if (d) return d;
          }
        }
      }
    }f.C = rb;function Q(a, d, f, b) {
      b = b || "u";var c = [];for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          S(a, b) == d && c.push(a);if (!f) {
            var e = Q(a, d, f, b);if (e.length) c = c.concat(e);
          }
        }
      }return c;
    }function lb(a, c, d) {
      for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          if (a.tagName == c) return a;if (!d) {
            var b = lb(a, c, d);if (b) return b;
          }
        }
      }
    }f.cf = lb;function db(a, c, e) {
      var b = [];for (a = a ? a.firstChild : i; a; a = a.nextSibling) {
        if (a.nodeType == 1) {
          (!c || a.tagName == c) && b.push(a);if (!e) {
            var d = db(a, c, e);if (d.length) b = b.concat(d);
          }
        }
      }return b;
    }f.of = db;f.mf = function (b, a) {
      return b.getElementsByTagName(a);
    };function C() {
      var e = arguments,
          d,
          c,
          b,
          a,
          g = 1 & e[0],
          f = 1 + g;d = e[f - 1] || {};for (; f < e.length; f++) {
        if (c = e[f]) for (b in c) {
          a = c[b];if (a !== j) {
            a = c[b];d[b] = g && G(d[b]) ? C(g, {}, a) : a;
          }
        }
      }return d;
    }f.l = C;function X(f, g) {
      var d = {},
          c,
          a,
          b;for (c in f) {
        a = f[c];b = g[c];if (a !== b) {
          var e;if (G(a) && G(b)) {
            a = X(b);e = !qb(a);
          }!e && (d[c] = a);
        }
      }return d;
    }f.Nc = function (a) {
      return D(a) == "function";
    };f.mc = function (a) {
      return D(a) == "array";
    };f.cd = function (a) {
      return D(a) == "string";
    };f.Pc = function (a) {
      return !isNaN(n(a)) && isFinite(a);
    };f.e = m;function P(a) {
      return e.createElement(a);
    }f.bb = function () {
      return P("DIV");
    };f.Qe = function () {
      return P("SPAN");
    };f.ac = function () {};function U(b, c, a) {
      if (a == j) return b.getAttribute(c);b.setAttribute(c, a);
    }function S(a, b) {
      return U(a, b) || U(a, "data-" + b);
    }f.M = U;f.t = S;function w(b, a) {
      if (a == j) return b.className;b.className = a;
    }f.Ec = w;function ub(b) {
      var a = {};m(b, function (b) {
        a[b] = b;
      });return a;
    }function wb(b, a) {
      return b.match(a || xb);
    }function N(b, a) {
      return ub(wb(b || "", a));
    }f.Oe = wb;function Z(b, c) {
      var a = "";m(c, function (c) {
        a && (a += b);a += c;
      });return a;
    }function H(a, c, b) {
      w(a, Z(" ", C(X(N(w(a)), N(c)), N(b))));
    }f.tb = function (a) {
      return a.parentNode;
    };f.K = function (a) {
      f.N(a, "none");
    };f.A = function (a, b) {
      f.N(a, b ? "none" : "");
    };f.Kc = function (b, a) {
      b.removeAttribute(a);
    };f.Se = function () {
      return q() && l < 10;
    };f.Ve = function (d, c) {
      if (c) d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";else {
        var g = d.style.cssText,
            f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
            e = I(g, f, "");a.Vb(d, e);
      }
    };f.J = function () {
      return +new Date();
    };f.D = function (b, a) {
      b.appendChild(a);
    };f.Wb = function (b, a, c) {
      (c || a.parentNode).insertBefore(b, a);
    };f.wb = function (a, b) {
      (b || a.parentNode).removeChild(a);
    };f.Ne = function (a, b) {
      m(a, function (a) {
        f.wb(a, b);
      });
    };f.jc = function (a) {
      f.Ne(f.V(a, c), a);
    };f.Me = function (b, a) {
      return parseInt(b, a || 10);
    };var n = parseFloat;f.ec = n;f.nf = function (b, a) {
      var c = e.body;while (a && b !== a && c !== a) {
        try {
          a = a.parentNode;
        } catch (d) {
          return g;
        }
      }return b === a;
    };function V(d, c, b) {
      var a = d.cloneNode(!c);!b && f.Kc(a, "id");return a;
    }f.O = V;f.Ab = function (e, g) {
      var a = new Image();function b(e, c) {
        f.I(a, "load", b);f.I(a, "abort", d);f.I(a, "error", d);g && g(a, c);
      }function d(a) {
        b(a, c);
      }if (nb() && l < 11.6 || !e) b(!e);else {
        f.c(a, "load", b);f.c(a, "abort", d);f.c(a, "error", d);a.src = e;
      }
    };f.bf = function (d, a, e) {
      var c = d.length + 1;function b(b) {
        c--;if (a && b && b.src == a.src) a = b;!c && e && e(a);
      }m(d, function (a) {
        f.Ab(a.src, b);
      });b();
    };f.Dc = function (b, g, i, h) {
      if (h) b = V(b);var c = Q(b, g);if (!c.length) c = a.mf(b, g);for (var f = c.length - 1; f > -1; f--) {
        var d = c[f],
            e = V(i);w(e, w(d));a.Vb(e, d.style.cssText);a.Wb(e, d);a.wb(d);
      }return b;
    };function Db(b) {
      var q = this,
          o = "",
          r = ["av", "pv", "ds", "dn"],
          g = [],
          p,
          k = 0,
          h = 0,
          d = 0;function i() {
        H(b, p, g[d || k || h & 2 || h]);a.cb(b, "pointer-events", d ? "none" : "");
      }function c() {
        k = 0;i();f.I(e, "mouseup", c);f.I(e, "touchend", c);f.I(e, "touchcancel", c);
      }function n(a) {
        if (d) f.Fb(a);else {
          k = 4;i();f.c(e, "mouseup", c);f.c(e, "touchend", c);f.c(e, "touchcancel", c);
        }
      }q.Ic = function (a) {
        if (a != j) {
          h = a & 2 || a & 1;i();
        } else return h;
      };q.$Enable = function (a) {
        if (a == j) return !d;d = a ? 0 : 3;i();
      };b = f.hb(b);var l = a.Oe(w(b));if (l) o = l.shift();m(r, function (a) {
        g.push(o + a);
      });p = Z(" ", g);g.unshift("");f.c(b, "mousedown", n);f.c(b, "touchstart", n);
    }f.Ub = function (a) {
      return new Db(a);
    };f.cb = E;f.ab = o("overflow");f.B = o("top", 2);f.z = o("left", 2);f.o = o("width", 2);f.n = o("height", 2);f.Vc = o("marginLeft", 2);f.Uc = o("marginTop", 2);f.E = o("position");f.N = o("display");f.H = o("zIndex", 1);f.rb = function (b, a, c) {
      if (a != j) Bb(b, a, c);else return Ab(b);
    };f.Vb = function (a, b) {
      if (b != j) a.style.cssText = b;else return a.style.cssText;
    };var R = { $Opacity: f.rb, $Top: f.B, $Left: f.z, db: f.o, eb: f.n, xb: f.E, yg: f.N, $ZIndex: f.H },
        u;function J() {
      if (!u) u = C({ zg: f.Uc, Ag: f.Vc, $Clip: f.Ve, kc: f.me }, R);return u;
    }function pb() {
      J();u.kc = u.kc;return u;
    }f.ce = J;f.Wd = pb;f.Vd = function (c, b) {
      J();var a = {};m(b, function (d, b) {
        if (R[b]) a[b] = R[b](c);
      });return a;
    };f.L = function (c, b) {
      var a = J();m(b, function (d, b) {
        a[b] && a[b](c, d);
      });
    };f.Ad = function (b, a) {
      pb();f.L(b, a);
    };var F = new function () {
      var a = this;function b(d, g) {
        for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++) {
          for (var k = f[c] = [], b = 0; b < h; b++) {
            for (var e = 0, a = 0; a < j; a++) {
              e += d[c][a] * g[a][b];
            }k[b] = e;
          }
        }return f;
      }a.Pb = function (d, c) {
        var a = b(d, [[c.x], [c.y]]);return y(a[0][0], a[1][0]);
      };
    }();f.se = function (d, a, c) {
      var e = b.cos(d),
          f = b.sin(d);return [[e * a, -f * c], [f * a, e * c]];
    };f.re = function (d, c, a) {
      var e = F.Pb(d, y(-c / 2, -a / 2)),
          f = F.Pb(d, y(c / 2, -a / 2)),
          g = F.Pb(d, y(c / 2, a / 2)),
          h = F.Pb(d, y(-c / 2, a / 2));return y(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2);
    };f.td = function (l, g, t, r, u, w, j) {
      var c = g;if (l) {
        c = {};for (var f in g) {
          var x = w[f] || 1,
              s = u[f] || [0, 1],
              e = (t - s[0]) / s[1];e = b.min(b.max(e, 0), 1);e = e * x;var p = b.floor(e);if (e != p) e -= p;var v = r[f] || r.Cb || d.$EaseSwing,
              q = v(e),
              h,
              y = l[f];g[f];var m = g[f];if (a.Pc(m)) h = y + m * q;else {
            h = a.l({ Bb: {} }, l[f]);a.e(m.Bb, function (c, b) {
              var a = c * q;h.Bb[b] = a;h[b] += a;
            });
          }c[f] = h;
        }if (g.$Zoom || g.$Rotate) c.kc = { $Rotate: c.$Rotate || 0, $Scale: c.$Zoom, $OriginalWidth: j.$OriginalWidth, $OriginalHeight: j.$OriginalHeight };
      }if (g.$Clip && j.$Move) {
        var k = c.$Clip.Bb,
            o = (k.$Top || 0) + (k.$Bottom || 0),
            n = (k.$Left || 0) + (k.$Right || 0);c.$Left = (c.$Left || 0) + n;c.$Top = (c.$Top || 0) + o;c.$Clip.$Left -= n;c.$Clip.$Right -= n;c.$Clip.$Top -= o;c.$Clip.$Bottom -= o;
      }if (c.$Clip && a.Se() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == j.$OriginalWidth && c.$Clip.$Bottom == j.$OriginalHeight) c.$Clip = i;return c;
    };
  }();function l() {
    var b = this,
        d = [];function i(a, b) {
      d.push({ lc: a, Yb: b });
    }function g(b, c) {
      a.e(d, function (a, e) {
        a.lc == b && a.Yb === c && d.splice(e, 1);
      });
    }b.$On = b.addEventListener = i;b.$Off = b.removeEventListener = g;b.i = function (b) {
      var c = [].slice.call(arguments, 1);a.e(d, function (a) {
        a.lc == b && a.Yb.apply(h, c);
      });
    };
  }function k(o, z, k, R, P, K) {
    o = o || 0;var e = this,
        s,
        p,
        q,
        x,
        B = 0,
        I,
        J,
        H,
        D,
        A = 0,
        l = 0,
        n = 0,
        E,
        m = o,
        f,
        j,
        r,
        y = [],
        C;function M(a) {
      f += a;j += a;m += a;l += a;n += a;A = a;
    }function Q(a, b) {
      var c = a - f + o * b;M(c);return j;
    }function w(o, i) {
      var d = o;if (r && (d >= j || d <= f)) d = ((d - f) % r + r) % r + f;if (!E || x || i || l != d) {
        var g = b.min(d, j);g = b.max(g, f);if (!E || x || i || g != n) {
          if (K) {
            var h = (g - m) / (z || 1);if (k.$Reverse) h = 1 - h;var p = a.td(P, K, h, I, H, J, k);a.e(p, function (b, a) {
              C[a] && C[a](R, b);
            });
          }e.rc(n - m, g - m);n = g;a.e(y, function (b, c) {
            var a = o < l ? y[y.length - c - 1] : b;a.v(n - A, i);
          });var s = l,
              q = n;l = d;E = c;e.Gb(s, q);
        }
      }
    }function F(a, c, d) {
      c && a.Jb(j, 1);if (!d) {
        f = b.min(f, a.ae() + A);j = b.max(j, a.Y() + A);
      }y.push(a);
    }var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.msRequestAnimationFrame;if (a.je() && a.Sc() < 7) t = i;t = t || function (b) {
      a.$Delay(b, k.$Interval);
    };function L() {
      if (s) {
        var d = a.J(),
            e = b.min(d - B, k.md),
            c = l + e * q;B = d;if (c * q >= p * q) c = p;w(c);if (!x && c * q >= p * q) N(D);else t(L);
      }
    }function v(d, g, h) {
      if (!s) {
        s = c;x = h;D = g;d = b.max(d, f);d = b.min(d, j);p = d;q = p < l ? -1 : 1;e.ld();B = a.J();t(L);
      }
    }function N(a) {
      if (s) {
        x = s = D = g;e.kd();a && a();
      }
    }e.$Play = function (a, b, c) {
      v(a ? l + a : j, b, c);
    };e.fd = v;e.W = N;e.Kd = function (a) {
      v(a);
    };e.T = function () {
      return l;
    };e.jd = function () {
      return p;
    };e.Eb = function () {
      return n;
    };e.v = w;e.$Move = function (a) {
      w(l + a);
    };e.$IsPlaying = function () {
      return s;
    };e.Fd = function (a) {
      r = a;
    };e.Jb = Q;e.$Shift = M;e.X = function (a) {
      F(a, 0);
    };e.nc = function (a) {
      F(a, 1);
    };e.ae = function () {
      return f;
    };e.Y = function () {
      return j;
    };e.Gb = e.ld = e.kd = e.rc = a.ac;e.Zb = a.J();k = a.l({ $Interval: 16, md: 50 }, k);r = k.ed;C = a.l({}, a.ce(), k.wc);f = m = o;j = o + z;J = k.$Round || {};H = k.$During || {};I = a.l({ Cb: a.Nc(k.$Easing) && k.$Easing || d.$EaseSwing }, k.$Easing);
  }var n = h.$JssorSlideshowFormations$ = new function () {
    var h = this,
        d = 0,
        a = 1,
        f = 2,
        e = 3,
        s = 1,
        r = 2,
        t = 4,
        q = 8,
        w = 256,
        x = 512,
        v = 1024,
        u = 2048,
        j = u + s,
        i = u + r,
        o = x + s,
        m = x + r,
        n = w + t,
        k = w + q,
        l = v + t,
        p = v + q;function y(a) {
      return (a & r) == r;
    }function z(a) {
      return (a & t) == t;
    }function g(b, a, c) {
      c.push(a);b[a] = b[a] || [];b[a].push(c);
    }h.$FormationStraight = function (f) {
      for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.Kb, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++) {
        for (a = 0; a < d; a++) {
          switch (s) {case j:
              c = h - (a * e + (q - b));break;case l:
              c = h - (b * d + (p - a));break;case o:
              c = h - (a * e + b);case n:
              c = h - (b * d + a);break;case i:
              c = a * e + b;break;case k:
              c = b * d + (p - a);break;case m:
              c = a * e + (q - b);break;default:
              c = b * d + a;}g(r, c, [b, a]);
        }
      }return r;
    };h.$FormationSwirl = function (q) {
      var x = q.$Cols,
          y = q.$Rows,
          B = q.$Assembly,
          w = q.Kb,
          A = [],
          z = [],
          u = 0,
          b = 0,
          h = 0,
          r = x - 1,
          s = y - 1,
          t,
          p,
          v = 0;switch (B) {case j:
          b = r;h = 0;p = [f, a, e, d];break;case l:
          b = 0;h = s;p = [d, e, a, f];break;case o:
          b = r;h = s;p = [e, a, f, d];break;case n:
          b = r;h = s;p = [a, e, d, f];break;case i:
          b = 0;h = 0;p = [f, d, e, a];break;case k:
          b = r;h = 0;p = [a, f, d, e];break;case m:
          b = 0;h = s;p = [e, d, f, a];break;default:
          b = 0;h = 0;p = [d, f, a, e];}u = 0;while (u < w) {
        t = h + "," + b;if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
          z[t] = c;g(A, u++, [h, b]);
        } else switch (p[v++ % p.length]) {case d:
            b--;break;case f:
            h--;break;case a:
            b++;break;case e:
            h++;}switch (p[v % p.length]) {case d:
            b++;break;case f:
            h++;break;case a:
            b--;break;case e:
            h--;}
      }return A;
    };h.$FormationZigZag = function (p) {
      var w = p.$Cols,
          x = p.$Rows,
          z = p.$Assembly,
          v = p.Kb,
          t = [],
          u = 0,
          b = 0,
          c = 0,
          q = w - 1,
          r = x - 1,
          y,
          h,
          s = 0;switch (z) {case j:
          b = q;c = 0;h = [f, a, e, a];break;case l:
          b = 0;c = r;h = [d, e, a, e];break;case o:
          b = q;c = r;h = [e, a, f, a];break;case n:
          b = q;c = r;h = [a, e, d, e];break;case i:
          b = 0;c = 0;h = [f, d, e, d];break;case k:
          b = q;c = 0;h = [a, f, d, f];break;case m:
          b = 0;c = r;h = [e, d, f, d];break;default:
          b = 0;c = 0;h = [d, f, a, f];}u = 0;while (u < v) {
        y = c + "," + b;if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
          g(t, u++, [c, b]);switch (h[s % h.length]) {case d:
              b++;break;case f:
              c++;break;case a:
              b--;break;case e:
              c--;}
        } else {
          switch (h[s++ % h.length]) {case d:
              b--;break;case f:
              c--;break;case a:
              b++;break;case e:
              c++;}switch (h[s++ % h.length]) {case d:
              b++;break;case f:
              c++;break;case a:
              b--;break;case e:
              c--;}
        }
      }return t;
    };h.$FormationStraightStairs = function (q) {
      var u = q.$Cols,
          v = q.$Rows,
          e = q.$Assembly,
          t = q.Kb,
          r = [],
          s = 0,
          c = 0,
          d = 0,
          f = u - 1,
          h = v - 1,
          x = t - 1;switch (e) {case j:case m:case o:case i:
          var a = 0,
              b = 0;break;case k:case l:case n:case p:
          var a = f,
              b = 0;break;default:
          e = p;var a = f,
              b = 0;}c = a;d = b;while (s < t) {
        if (z(e) || y(e)) g(r, x - s++, [d, c]);else g(r, s++, [d, c]);switch (e) {case j:case m:
            c--;d++;break;case o:case i:
            c++;d--;break;case k:case l:
            c--;d--;break;case p:case n:default:
            c++;d++;}if (c < 0 || d < 0 || c > f || d > h) {
          switch (e) {case j:case m:
              a++;break;case k:case l:case o:case i:
              b++;break;case p:case n:default:
              a--;}if (a < 0 || b < 0 || a > f || b > h) {
            switch (e) {case j:case m:
                a = f;b++;break;case o:case i:
                b = h;a++;break;case k:case l:
                b = h;a--;break;case p:case n:default:
                a = 0;b++;}if (b > h) b = h;else if (b < 0) b = 0;else if (a > f) a = f;else if (a < 0) a = 0;
          }d = b;c = a;
        }
      }return r;
    };h.$FormationSquare = function (i) {
      var a = i.$Cols || 1,
          c = i.$Rows || 1,
          j = [],
          d,
          e,
          f,
          h,
          k;f = a < c ? (c - a) / 2 : 0;h = a > c ? (a - c) / 2 : 0;k = b.round(b.max(a / 2, c / 2)) + 1;for (d = 0; d < a; d++) {
        for (e = 0; e < c; e++) {
          g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
        }
      }return j;
    };h.$FormationRectangle = function (f) {
      var d = f.$Cols || 1,
          e = f.$Rows || 1,
          h = [],
          a,
          c,
          i;i = b.round(b.min(d / 2, e / 2)) + 1;for (a = 0; a < d; a++) {
        for (c = 0; c < e; c++) {
          g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
        }
      }return h;
    };h.$FormationRandom = function (d) {
      for (var e = [], a, c = 0; c < d.$Rows; c++) {
        for (a = 0; a < d.$Cols; a++) {
          g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
        }
      }return e;
    };h.$FormationCircle = function (d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++) {
        for (a = 0; a < f; a++) {
          g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
        }
      }return h;
    };h.$FormationCross = function (d) {
      for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++) {
        for (a = 0; a < f; a++) {
          g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
        }
      }return h;
    };h.$FormationRectangleCross = function (f) {
      for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++) {
        for (a = 0; a < i; a++) {
          g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
        }
      }return j;
    };
  }();h.$JssorSlideshowRunner$ = function (o, s, q, t, y) {
    var f = this,
        u,
        h,
        e,
        x = 0,
        w = t.$TransitionsOrder,
        r,
        j = 8;function m(h, f) {
      var e = { $Interval: f, $Duration: 1, $Delay: 0, $Cols: 1, $Rows: 1, $Opacity: 0, $Zoom: 0, $Clip: 0, $Move: g, $SlideOut: g, $Reverse: g, $Formation: n.$FormationRandom, $Assembly: 1032, $ChessMode: { $Column: 0, $Row: 0 }, $Easing: d.$EaseSwing, $Round: {}, Hb: [], $During: {} };a.l(e, h);e.Kb = e.$Cols * e.$Rows;if (a.Nc(e.$Easing)) e.$Easing = { Cb: e.$Easing };e.Od = b.ceil(e.$Duration / e.$Interval);e.Rd = function (b, a) {
        b /= e.$Cols;a /= e.$Rows;var f = b + "x" + a;if (!e.Hb[f]) {
          e.Hb[f] = { db: b, eb: a };for (var c = 0; c < e.$Cols; c++) {
            for (var d = 0; d < e.$Rows; d++) {
              e.Hb[f][d + "," + c] = { $Top: d * a, $Right: c * b + b, $Bottom: d * a + a, $Left: c * b };
            }
          }
        }return e.Hb[f];
      };if (e.$Brother) {
        e.$Brother = m(e.$Brother, f);e.$SlideOut = c;
      }return e;
    }function p(A, i, d, v, n, l) {
      var y = this,
          t,
          u = {},
          j = {},
          m = [],
          f,
          e,
          r,
          p = d.$ChessMode.$Column || 0,
          q = d.$ChessMode.$Row || 0,
          h = d.Rd(n, l),
          o = B(d),
          C = o.length - 1,
          s = d.$Duration + d.$Delay * C,
          w = v + s,
          k = d.$SlideOut,
          x;w += 50;function B(a) {
        var b = a.$Formation(a);return a.$Reverse ? b.reverse() : b;
      }y.Mc = w;y.Ob = function (c) {
        c -= v;var e = c < s;if (e || x) {
          x = e;if (!k) c = s - c;var f = b.ceil(c / d.$Interval);a.e(j, function (c, e) {
            var d = b.max(f, c.Cd);d = b.min(d, c.length - 1);if (c.sd != d) {
              if (!c.sd && !k) a.A(m[e]);else d == c.zd && k && a.K(m[e]);c.sd = d;a.Ad(m[e], c[d]);
            }
          });
        }
      };i = a.O(i);if (a.Q()) {
        var D = !i["no-image"],
            z = a.of(i);a.e(z, function (b) {
          (D || b["jssor-slider"]) && a.rb(b, a.rb(b), c);
        });
      }a.e(o, function (i, m) {
        a.e(i, function (G) {
          var K = G[0],
              J = G[1],
              v = K + "," + J,
              o = g,
              s = g,
              x = g;if (p && J % 2) {
            if (p & 3) o = !o;if (p & 12) s = !s;if (p & 16) x = !x;
          }if (q && K % 2) {
            if (q & 3) o = !o;if (q & 12) s = !s;if (q & 16) x = !x;
          }d.$Top = d.$Top || d.$Clip & 4;d.$Bottom = d.$Bottom || d.$Clip & 8;d.$Left = d.$Left || d.$Clip & 1;d.$Right = d.$Right || d.$Clip & 2;var C = s ? d.$Bottom : d.$Top,
              z = s ? d.$Top : d.$Bottom,
              B = o ? d.$Right : d.$Left,
              A = o ? d.$Left : d.$Right;d.$Clip = C || z || B || A;r = {};e = { $Top: 0, $Left: 0, $Opacity: 1, db: n, eb: l };f = a.l({}, e);t = a.l({}, h[v]);if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;if (d.$ZIndex) {
            e.$ZIndex = d.$ZIndex;f.$ZIndex = 0;
          }var I = d.$Cols * d.$Rows > 1 || d.$Clip;if (d.$Zoom || d.$Rotate) {
            var H = c;if (a.Q()) if (d.$Cols * d.$Rows > 1) H = g;else I = g;if (H) {
              e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;f.$Zoom = 1;if (a.Q() || a.vc()) e.$Zoom = b.min(e.$Zoom, 2);var N = d.$Rotate;e.$Rotate = N * 360 * (x ? -1 : 1);f.$Rotate = 0;
            }
          }if (I) {
            if (d.$Clip) {
              var w = d.$ScaleClip || 1,
                  i = t.Bb = {};if (C && z) {
                i.$Top = h.eb / 2 * w;i.$Bottom = -i.$Top;
              } else if (C) i.$Bottom = -h.eb * w;else if (z) i.$Top = h.eb * w;if (B && A) {
                i.$Left = h.db / 2 * w;i.$Right = -i.$Left;
              } else if (B) i.$Right = -h.db * w;else if (A) i.$Left = h.db * w;
            }r.$Clip = t;f.$Clip = h[v];
          }var L = o ? 1 : -1,
              M = s ? 1 : -1;if (d.x) e.$Left += n * d.x * L;if (d.y) e.$Top += l * d.y * M;a.e(e, function (b, c) {
            if (a.Pc(b)) if (b != f[c]) r[c] = b - f[c];
          });u[v] = k ? f : e;var D = d.Od,
              y = b.round(m * d.$Delay / d.$Interval);j[v] = new Array(y);j[v].Cd = y;j[v].zd = y + D - 1;for (var F = 0; F <= D; F++) {
            var E = a.td(f, r, F / D, d.$Easing, d.$During, d.$Round, { $Move: d.$Move, $OriginalWidth: n, $OriginalHeight: l });E.$ZIndex = E.$ZIndex || 1;j[v].push(E);
          }
        });
      });o.reverse();a.e(o, function (b) {
        a.e(b, function (c) {
          var f = c[0],
              e = c[1],
              d = f + "," + e,
              b = i;if (e || f) b = a.O(i);a.L(b, u[d]);a.ab(b, "hidden");a.E(b, "absolute");A.Zd(b);m[d] = b;a.A(b, !k);
        });
      });
    }function v() {
      var a = this,
          b = 0;k.call(a, 0, u);a.Gb = function (c, a) {
        if (a - b > j) {
          b = a;e && e.Ob(a);h && h.Ob(a);
        }
      };a.nb = r;
    }f.Hd = function () {
      var a = 0,
          c = t.$Transitions,
          d = c.length;if (w) a = x++ % d;else a = b.floor(b.random() * d);c[a] && (c[a].Z = a);return c[a];
    };f.Dd = function (w, x, i, k, a) {
      r = a;a = m(a, j);var g = k.id,
          d = i.id;g["no-image"] = !k.Tb;d["no-image"] = !i.Tb;var l = g,
          n = d,
          v = a,
          c = a.$Brother || m({}, j);if (!a.$SlideOut) {
        l = d;n = g;
      }var t = c.$Shift || 0;h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);e = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);h.Ob(0);e.Ob(0);u = b.max(h.Mc, e.Mc);f.Z = w;
    };f.Db = function () {
      o.Db();h = i;e = i;
    };f.Jd = function () {
      var a = i;if (e) a = new v();return a;
    };if (a.Q() || a.vc() || y && a.oc() < 537) j = 16;l.call(f);k.call(f, -1e7, 1e7);
  };var f = h.$JssorSlider$ = function (q, ec) {
    var n = this;function Dc() {
      var a = this;k.call(a, -1e8, 2e8);a.Td = function () {
        var c = a.Eb(),
            d = b.floor(c),
            f = s(d),
            e = c - b.floor(c);return { Z: f, Md: d, xb: e };
      };a.Gb = function (d, a) {
        var e = b.floor(a);if (e != a && a > d) e++;Tb(e, c);n.i(f.$EVT_POSITION_CHANGE, s(a), s(d), a, d);
      };
    }function Cc() {
      var b = this;k.call(b, 0, 0, { ed: r });a.e(D, function (a) {
        A & 1 && a.Fd(r);b.nc(a);a.$Shift(hb / ac);
      });
    }function Bc() {
      var a = this,
          b = Sb.$Elmt;k.call(a, -1, 2, { $Easing: d.$EaseLinear, wc: { xb: Yb }, ed: r }, b, { xb: 1 }, { xb: -2 });a.Nb = b;
    }function pc(m, l) {
      var a = this,
          d,
          e,
          h,
          j,
          b;k.call(a, -1e8, 2e8, { md: 100 });a.ld = function () {
        Q = c;U = i;n.i(f.$EVT_SWIPE_START, s(w.T()), w.T());
      };a.kd = function () {
        Q = g;j = g;var a = w.Td();n.i(f.$EVT_SWIPE_END, s(w.T()), w.T());!a.xb && Fc(a.Md, t);
      };a.Gb = function (g, f) {
        var a;if (j) a = b;else {
          a = e;if (h) {
            var c = f / h;a = p.$SlideEasing(c) * (e - d) + d;
          }
        }w.v(a);
      };a.Qb = function (b, f, c, g) {
        d = b;e = f;h = c;w.v(b);a.v(0);a.fd(c, g);
      };a.Nd = function (d) {
        j = c;b = d;a.$Play(d, i, c);
      };a.Sd = function (a) {
        b = a;
      };w = new Dc();w.X(m);w.X(l);
    }function qc() {
      var c = this,
          b = Wb();a.H(b, 0);a.cb(b, "pointerEvents", "none");c.$Elmt = b;c.Zd = function (c) {
        a.D(b, c);a.A(b);
      };c.Db = function () {
        a.K(b);a.jc(b);
      };
    }function zc(o, e) {
      var d = this,
          q,
          x,
          N,
          y,
          j,
          C = [],
          H,
          v,
          W,
          K,
          Q,
          G,
          h,
          w,
          m;k.call(d, -u, u + 1, {});function F(a) {
        x && x.Sb();q && q.Sb();V(o, a);G = c;q = new L.$Class(o, L, 1);x = new L.$Class(o, L);x.v(0);q.v(0);
      }function Y() {
        q.Zb < L.Zb && F();
      }function O(o, r, m) {
        if (!K) {
          K = c;if (j && m) {
            var h = m.width,
                b = m.height,
                l = h,
                k = b;if (h && b && p.$FillMode) {
              if (p.$FillMode & 3 && (!(p.$FillMode & 4) || h > J || b > I)) {
                var i = g,
                    q = J / I * b / h;if (p.$FillMode & 1) i = q > 1;else if (p.$FillMode & 2) i = q < 1;l = i ? h * I / b : J;k = i ? I : b * J / h;
              }a.o(j, l);a.n(j, k);a.B(j, (I - k) / 2);a.z(j, (J - l) / 2);
            }a.E(j, "absolute");n.i(f.$EVT_LOAD_END, e);
          }
        }a.K(r);o && o(d);
      }function X(b, c, f, g) {
        if (g == U && t == e && R) if (!Ec) {
          var a = s(b);B.Dd(a, e, c, d, f);c.Xe();ab.Jb(a, 1);ab.v(a);z.Qb(b, b, 0);
        }
      }function bb(b) {
        if (b == U && t == e) {
          if (!h) {
            var a = i;if (B) if (B.Z == e) a = B.Jd();else B.Db();Y();h = new xc(o, e, a, d.Te(), d.Le());h.Jc(m);
          }!h.$IsPlaying() && h.zc();
        }
      }function T(f, c, g) {
        if (f == e) {
          if (f != c) D[c] && D[c].Ue();else !g && h && h.Ye();m && m.$Enable();var j = U = a.J();d.Ab(a.F(i, bb, j));
        } else {
          var l = b.abs(e - f),
              k = u + p.$LazyLoading - 1;(!Q || l <= k) && d.Ab();
        }
      }function cb() {
        if (t == e && h) {
          h.W();m && m.$Quit();m && m.$Disable();h.Oc();
        }
      }function fb() {
        t == e && h && h.W();
      }function Z(a) {
        !M && n.i(f.$EVT_CLICK, e, a);
      }function P() {
        m = w.pInstance;h && h.Jc(m);
      }d.Ab = function (d, b) {
        b = b || y;if (C.length && !K) {
          a.A(b);if (!W) {
            W = c;n.i(f.$EVT_LOAD_START, e);a.e(C, function (b) {
              if (!a.M(b, "src")) {
                b.src = a.t(b, "src2");a.N(b, b["display-origin"]);
              }
            });
          }a.bf(C, j, a.F(i, O, d, b));
        } else O(d, b);
      };d.df = function () {
        var g = e;if (p.$AutoPlaySteps < 0) g -= r;var c = g + p.$AutoPlaySteps * vc;if (A & 2) c = s(c);if (!(A & 1)) c = b.max(0, b.min(c, r - u));if (c != e) {
          if (B) {
            var d = B.Hd(r);if (d) {
              var h = U = a.J(),
                  f = D[s(c)];return f.Ab(a.F(i, X, c, f, d, h), y);
            }
          }pb(c);
        }
      };d.bc = function () {
        T(e, e, c);
      };d.Ue = function () {
        m && m.$Quit();m && m.$Disable();d.rd();h && h.ff();h = i;F();
      };d.Xe = function () {
        a.K(o);
      };d.rd = function () {
        a.A(o);
      };d.ef = function () {
        m && m.$Enable();
      };function V(b, e, d) {
        if (a.M(b, "jssor-slider")) return;d = d || 0;if (!G) {
          if (b.tagName == "IMG") {
            C.push(b);if (!a.M(b, "src")) {
              Q = c;b["display-origin"] = a.N(b);a.K(b);
            }
          }a.Q() && a.H(b, (a.H(b) || 0) + 1);if (p.$HWA && a.oc()) (a.oc() < 534 || !eb && !a.ee()) && a.ne(b);
        }var f = a.V(b);a.e(f, function (f) {
          var i = f.tagName,
              k = a.t(f, "u");if (k == "player" && !w) {
            w = f;if (w.pInstance) P();else a.c(w, "dataavailable", P);
          }if (k == "caption") {
            if (!a.Wc() && !e) {
              var h = a.O(f, g, c);a.Wb(h, f, b);a.wb(f, b);f = h;e = c;
            }
          } else if (!G && !d && !j) {
            if (i == "A") {
              if (a.t(f, "u") == "image") j = a.cf(f, "IMG");else j = a.C(f, "image", c);if (j) {
                H = f;a.L(H, S);v = a.O(H, c);a.N(v, "block");a.L(v, S);a.rb(v, 0);a.cb(v, "backgroundColor", "#000");
              }
            } else if (i == "IMG" && a.t(f, "u") == "image") j = f;if (j) {
              j.border = 0;a.L(j, S);
            }
          }V(f, e, d + 1);
        });
      }d.rc = function (c, b) {
        var a = u - b;Yb(N, a);
      };d.Te = function () {
        return q;
      };d.Le = function () {
        return x;
      };d.Z = e;l.call(d);var E = a.C(o, "thumb", c);if (E) {
        d.hf = a.O(E);a.Kc(E, "id");a.K(E);
      }a.A(o);y = a.O(db);a.H(y, 1e3);a.c(o, "click", Z);F(c);d.Tb = j;d.qd = v;d.id = o;d.Nb = N = o;a.D(N, y);n.$On(203, T);n.$On(28, fb);n.$On(24, cb);
    }function xc(G, i, p, u, s) {
      var b = this,
          l = 0,
          w = 0,
          m,
          h,
          d,
          e,
          j,
          q,
          v,
          r,
          o = D[i];k.call(b, 0, 0);function x() {
        a.jc(O);cc && j && o.qd && a.D(O, o.qd);a.A(O, !j && o.Tb);
      }function y() {
        if (q) {
          q = g;n.i(f.$EVT_ROLLBACK_END, i, d, l, h, d, e);b.v(h);
        }b.zc();
      }function z(a) {
        r = a;b.W();b.zc();
      }b.zc = function () {
        var a = b.Eb();if (!C && !Q && !r && t == i) {
          if (!a) {
            if (m && !j) {
              j = c;b.Oc(c);n.i(f.$EVT_SLIDESHOW_START, i, l, w, m, e);
            }x();
          }var g,
              p = f.$EVT_STATE_CHANGE;if (a != e) if (a == d) g = e;else if (a == h) g = d;else if (!a) g = h;else if (a > d) {
            q = c;g = d;p = f.$EVT_ROLLBACK_START;
          } else g = b.jd();n.i(p, i, a, l, h, d, e);var k = R && (!E || F);if (a == e) (d != e && !(E & 12) || k) && o.df();else (k || a != d) && b.fd(g, y);
        }
      };b.Ye = function () {
        d == e && d == b.Eb() && b.v(h);
      };b.ff = function () {
        B && B.Z == i && B.Db();var a = b.Eb();a < e && n.i(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, d, e);
      };b.Oc = function (b) {
        p && a.ab(jb, b && p.nb.$Outside ? "" : "hidden");
      };b.rc = function (b, a) {
        if (j && a >= m) {
          j = g;x();o.rd();B.Db();n.i(f.$EVT_SLIDESHOW_END, i, l, w, m, e);
        }n.i(f.$EVT_PROGRESS_CHANGE, i, a, l, h, d, e);
      };b.Jc = function (a) {
        if (a && !v) {
          v = a;a.$On($JssorPlayer$.be, z);
        }
      };p && b.nc(p);m = b.Y();b.Y();b.nc(u);h = u.Y();d = h + (a.ec(a.t(G, "idle")) || oc);s.$Shift(d);b.X(s);e = b.Y();
    }function Yb(g, f) {
      var e = x > 0 ? x : ib,
          c = Bb * f * (e & 1),
          d = Cb * f * (e >> 1 & 1);c = b.round(c);d = b.round(d);a.z(g, c);a.B(g, d);
    }function Ob() {
      rb = Q;Kb = z.jd();G = w.T();
    }function fc() {
      Ob();if (C || !F && E & 12) {
        z.W();n.i(f.de);
      }
    }function dc(e) {
      if (!C && (F || !(E & 12)) && !z.$IsPlaying()) {
        var c = w.T(),
            a = b.ceil(G);if (e && b.abs(H) >= p.$MinDragOffsetToSlide) {
          a = b.ceil(c);a += gb;
        }if (!(A & 1)) a = b.min(r - u, b.max(a, 0));var d = b.abs(a - c);d = 1 - b.pow(1 - d, 5);if (!M && rb) z.Kd(Kb);else if (c == a) {
          vb.ef();vb.bc();
        } else z.Qb(c, a, d * Ub);
      }
    }function Ib(b) {
      !a.t(a.Ac(b), "nodrag") && a.Fb(b);
    }function tc(a) {
      Xb(a, 1);
    }function Xb(b, d) {
      b = a.Xc(b);var k = a.Ac(b);if (!K && !a.t(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
        C = c;Ab = g;U = i;a.c(e, d ? "touchmove" : "mousemove", Db);a.J();M = 0;fc();if (!rb) x = 0;if (d) {
          var j = b.touches[0];wb = j.clientX;xb = j.clientY;
        } else {
          var h = a.Yc(b);wb = h.x;xb = h.y;
        }H = 0;cb = 0;gb = 0;n.i(f.$EVT_DRAG_START, s(G), G, b);
      }
    }function Db(e) {
      if (C) {
        e = a.Xc(e);var f;if (e.type != "mousemove") {
          var l = e.touches[0];f = { x: l.clientX, y: l.clientY };
        } else f = a.Yc(e);if (f) {
          var j = f.x - wb,
              k = f.y - xb;if (b.floor(G) != G) x = x || ib & K;if ((j || k) && !x) {
            if (K == 3) {
              if (b.abs(k) > b.abs(j)) x = 2;else x = 1;
            } else x = K;if (lb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c;
          }if (x) {
            var d = k,
                i = Cb;if (x == 1) {
              d = j;i = Bb;
            }if (!(A & 1)) {
              if (d > 0) {
                var g = i * t,
                    h = d - g;if (h > 0) d = g + b.sqrt(h) * 5;
              }if (d < 0) {
                var g = i * (r - u - t),
                    h = -d - g;if (h > 0) d = -g - b.sqrt(h) * 5;
              }
            }if (H - cb < -2) gb = 0;else if (H - cb > 2) gb = -1;cb = H;H = d;ub = G - H / i / (Z || 1);if (H && x && !Ab) {
              a.Fb(e);if (!Q) z.Nd(ub);else z.Sd(ub);
            }
          }
        }
      }
    }function ob() {
      rc();if (C) {
        C = g;a.J();a.I(e, "mousemove", Db);a.I(e, "touchmove", Db);M = H;z.W();var b = w.T();n.i(f.$EVT_DRAG_END, s(b), b, s(G), G);E & 12 && Ob();dc(c);
      }
    }function jc(c) {
      if (M) {
        a.af(c);var b = a.Ac(c);while (b && v !== b) {
          b.tagName == "A" && a.Fb(c);try {
            b = b.parentNode;
          } catch (d) {
            break;
          }
        }
      }
    }function nc(a) {
      D[t];t = s(a);vb = D[t];Tb(a);return t;
    }function Fc(a, b) {
      x = 0;nc(a);n.i(f.$EVT_PARK, s(a), b);
    }function Tb(b, c) {
      N = b;a.e(P, function (a) {
        a.qc(s(b), b, c);
      });
    }function uc() {
      var b = f.pd || 0,
          a = Y;if (lb) a & 1 && (a &= 1);f.pd |= a;return K = a & ~b;
    }function rc() {
      if (K) {
        f.pd &= ~Y;K = 0;
      }
    }function Wb() {
      var b = a.bb();a.L(b, S);a.E(b, "absolute");return b;
    }function s(a) {
      return (a % r + r) % r;
    }function kc(d, c) {
      var a = d;if (c) {
        if (!A) {
          a = b.min(b.max(a + N, 0), r - u);c = g;
        } else if (A & 2) {
          a = s(a + N);c = g;
        }
      } else if (A) a = n.od(a);pb(a, p.$SlideDuration, c);
    }function zb() {
      a.e(P, function (a) {
        a.Bc(a.Xb.$ChanceToShow <= F);
      });
    }function hc() {
      if (!F) {
        F = 1;zb();if (!C) {
          E & 12 && dc();E & 3 && D[t].bc();
        }
      }
    }function gc() {
      if (F) {
        F = 0;zb();C || !(E & 12) || fc();
      }
    }function ic() {
      S = { db: J, eb: I, $Top: 0, $Left: 0 };a.e(V, function (b) {
        a.L(b, S);a.E(b, "absolute");a.ab(b, "hidden");a.K(b);
      });a.L(db, S);
    }function nb(b, a) {
      pb(b, a, c);
    }function pb(f, e, k) {
      if (Qb && (!C && (F || !(E & 12)) || p.$NaviQuitDrag)) {
        Q = c;C = g;z.W();if (e == j) e = Ub;var d = Eb.Eb(),
            a = f;if (k) {
          a = d + f;if (f > 0) a = b.ceil(a);else a = b.floor(a);
        }if (A & 2) a = s(a);if (!(A & 1)) a = b.max(0, b.min(a, r - u));var i = (a - d) % r;a = d + i;var h = d == a ? 0 : e * b.abs(i);h = b.min(h, e * u * 1.5);z.Qb(d, a, h || 1);
      }
    }n.$PlayTo = pb;n.$GoTo = function (a) {
      w.v(a);
    };n.$Next = function () {
      nb(1);
    };n.$Prev = function () {
      nb(-1);
    };n.$Pause = function () {
      R = g;
    };n.$Play = function () {
      if (!R) {
        R = c;D[t] && D[t].bc();
      }
    };n.$SetSlideshowTransitions = function (a) {
      p.$SlideshowOptions.$Transitions = a;
    };n.$SetCaptionTransitions = function (b) {
      L.$CaptionTransitions = b;L.Zb = a.J();
    };n.$SlidesCount = function () {
      return V.length;
    };n.$CurrentIndex = function () {
      return t;
    };n.$IsAutoPlaying = function () {
      return R;
    };n.$IsDragging = function () {
      return C;
    };n.$IsSliding = function () {
      return Q;
    };n.$IsMouseOver = function () {
      return !F;
    };n.$LastDragSucceded = function () {
      return M;
    };function X() {
      return a.o(y || q);
    }function kb() {
      return a.n(y || q);
    }n.$OriginalWidth = n.$GetOriginalWidth = X;n.$OriginalHeight = n.$GetOriginalHeight = kb;function Gb(c, d) {
      if (c == j) return a.o(q);if (!y) {
        var b = a.bb(e);a.Ec(b, a.Ec(q));a.Vb(b, a.Vb(q));a.N(b, "block");a.E(b, "relative");a.B(b, 0);a.z(b, 0);a.ab(b, "visible");y = a.bb(e);a.E(y, "absolute");a.B(y, 0);a.z(y, 0);a.o(y, a.o(q));a.n(y, a.n(q));a.le(y, "0 0");a.D(y, b);var h = a.V(q);a.D(q, y);a.cb(q, "backgroundImage", "");a.e(h, function (c) {
          a.D(a.t(c, "noscale") ? q : b, c);
        });
      }Z = c / (d ? a.n : a.o)(y);a.oe(y, Z);var g = d ? Z * X() : c,
          f = d ? c : Z * kb();a.o(q, g);a.n(q, f);a.e(P, function (a) {
        a.hc(g, f);
      });
    }n.$ScaleHeight = n.$GetScaleHeight = function (b) {
      if (b == j) return a.n(q);Gb(b, c);
    };n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Gb;n.od = function (a) {
      var d = b.ceil(s(hb / ac)),
          c = s(a - N + d);if (c > u) {
        if (a - N > r / 2) a -= r;else if (a - N <= -r / 2) a += r;
      } else a = N + c - d;return a;
    };l.call(n);n.$Elmt = q = a.hb(q);var p = a.l({ $FillMode: 0, $LazyLoading: 1, $StartIndex: 0, $AutoPlay: g, $Loop: 1, $HWA: c, $NaviQuitDrag: c, $AutoPlaySteps: 1, $AutoPlayInterval: 3e3, $PauseOnHover: 1, $SlideDuration: 500, $SlideEasing: d.$EaseOutQuad, $MinDragOffsetToSlide: 20, $SlideSpacing: 0, $DisplayPieces: 1, $ParkingPosition: 0, $UISearchMode: 1, $PlayOrientation: 1, $DragOrientation: 1 }, ec);if (p.$Idle != j) p.$AutoPlayInterval = p.$Idle;if (p.$Cols != j) p.$DisplayPieces = p.$Cols;var ib = p.$PlayOrientation & 3,
        vc = (p.$PlayOrientation & 4) / -4 || 1,
        fb = p.$SlideshowOptions,
        L = a.l({ $Class: o, $PlayInMode: 1, $PlayOutMode: 1 }, p.$CaptionSliderOptions),
        sb = p.$BulletNavigatorOptions,
        W = p.$ArrowNavigatorOptions,
        bb = p.$ThumbnailNavigatorOptions,
        T = !p.$UISearchMode,
        y,
        v = a.C(q, "slides", T),
        db = a.C(q, "loading", T) || a.bb(e),
        Jb = a.C(q, "navigator", T),
        bc = a.C(q, "arrowleft", T),
        Zb = a.C(q, "arrowright", T),
        Hb = a.C(q, "thumbnavigator", T),
        mc = a.o(v),
        lc = a.n(v),
        S,
        V = [],
        wc = a.V(v);a.e(wc, function (b) {
      if (b.tagName == "DIV" && !a.t(b, "u")) V.push(b);else a.Q() && a.H(b, (a.H(b) || 0) + 1);
    });var t = -1,
        N,
        vb,
        r = V.length,
        J = p.$SlideWidth || mc,
        I = p.$SlideHeight || lc,
        Vb = p.$SlideSpacing,
        Bb = J + Vb,
        Cb = I + Vb,
        ac = ib & 1 ? Bb : Cb,
        u = b.min(p.$DisplayPieces, r),
        jb,
        x,
        K,
        Ab,
        P = [],
        Pb,
        Rb,
        Nb,
        cc,
        Ec,
        R,
        E = p.$PauseOnHover,
        oc = p.$AutoPlayInterval,
        Ub = p.$SlideDuration,
        tb,
        eb,
        hb,
        Qb = u < r,
        A = Qb ? p.$Loop : 0,
        Y,
        M,
        F = 1,
        Q,
        C,
        U,
        wb = 0,
        xb = 0,
        H,
        cb,
        gb,
        Eb,
        w,
        ab,
        z,
        Sb = new qc(),
        Z;R = p.$AutoPlay;n.Xb = ec;ic();a.M(q, "jssor-slider", c);a.H(v, a.H(v) || 0);a.E(v, "absolute");jb = a.O(v, c);a.Wb(jb, v);if (fb) {
      cc = fb.$ShowLink;tb = fb.$Class;eb = u == 1 && r > 1 && tb && (!a.Wc() || a.Sc() >= 8);
    }hb = eb || u >= r || !(A & 1) ? 0 : p.$ParkingPosition;Y = (u > 1 || hb ? ib : -1) & p.$DragOrientation;var yb = v,
        D = [],
        B,
        O,
        Fb = a.he(),
        lb = Fb.ie,
        G,
        rb,
        Kb,
        ub;Fb.dd && a.cb(yb, Fb.dd, [i, "pan-y", "pan-x", "none"][Y] || "");ab = new Bc();if (eb) B = new tb(Sb, J, I, fb, lb);a.D(jb, ab.Nb);a.ab(v, "hidden");O = Wb();a.cb(O, "backgroundColor", "#000");a.rb(O, 0);a.Wb(O, yb.firstChild, yb);for (var qb = 0; qb < V.length; qb++) {
      var yc = V[qb],
          Ac = new zc(yc, qb);D.push(Ac);
    }a.K(db);Eb = new Cc();z = new pc(Eb, ab);if (Y) {
      a.c(v, "mousedown", Xb);a.c(v, "touchstart", tc);a.c(v, "dragstart", Ib);a.c(v, "selectstart", Ib);a.c(e, "mouseup", ob);a.c(e, "touchend", ob);a.c(e, "touchcancel", ob);a.c(h, "blur", ob);
    }E &= lb ? 10 : 5;if (Jb && sb) {
      Pb = new sb.$Class(Jb, sb, X(), kb());P.push(Pb);
    }if (W && bc && Zb) {
      W.$Loop = A;W.$DisplayPieces = u;Rb = new W.$Class(bc, Zb, W, X(), kb());P.push(Rb);
    }if (Hb && bb) {
      bb.$StartIndex = p.$StartIndex;Nb = new bb.$Class(Hb, bb);P.push(Nb);
    }a.e(P, function (a) {
      a.gc(r, D, db);a.$On(m.Mb, kc);
    });Gb(X());a.c(v, "click", jc);a.c(q, "mouseout", a.Rb(hc, q));a.c(q, "mouseover", a.Rb(gc, q));zb();p.$ArrowKeyNavigation && a.c(e, "keydown", function (a) {
      if (a.keyCode == 37) nb(-1);else a.keyCode == 39 && nb(1);
    });var mb = p.$StartIndex;if (!(A & 1)) mb = b.max(0, b.min(mb, r - u));z.Qb(mb, mb, 0);
  };h.$JssorSlideo$ = f;f.$EVT_CLICK = 21;f.$EVT_DRAG_START = 22;f.$EVT_DRAG_END = 23;f.$EVT_SWIPE_START = 24;f.$EVT_SWIPE_END = 25;f.$EVT_LOAD_START = 26;f.$EVT_LOAD_END = 27;f.de = 28;f.$EVT_POSITION_CHANGE = 202;f.$EVT_PARK = 203;f.$EVT_SLIDESHOW_START = 206;f.$EVT_SLIDESHOW_END = 207;f.$EVT_PROGRESS_CHANGE = 208;f.$EVT_STATE_CHANGE = 209;f.$EVT_ROLLBACK_START = 210;f.$EVT_ROLLBACK_END = 211;var m = { Mb: 1 };h.$JssorBulletNavigator$ = function (d, D) {
    var f = this;l.call(f);d = a.hb(d);var t,
        u,
        s,
        r,
        n = 0,
        e,
        o,
        k,
        y,
        z,
        j,
        h,
        q,
        p,
        C = [],
        A = [];function x(a) {
      a != -1 && A[a].Ic(a == n);
    }function v(a) {
      f.i(m.Mb, a * o);
    }f.$Elmt = d;f.qc = function (a) {
      if (a != r) {
        var d = n,
            c = b.floor(a / o);n = c;r = a;x(d);x(c);
      }
    };f.Bc = function (b) {
      a.A(d, b);
    };var B;f.hc = function (f, b) {
      if (!B || e.$Scale == g) {
        var f = a.tb(d).clientWidth,
            b = a.tb(d).clientHeight;e.$AutoCenter & 1 && a.z(d, (f - u) / 2);e.$AutoCenter & 2 && a.B(d, (b - s) / 2);B = c;
      }
    };var w;f.gc = function (D) {
      if (!w) {
        t = b.ceil(D / o);n = 0;var m = q + y,
            r = p + z,
            l = b.ceil(t / k) - 1;u = q + m * (!j ? l : k - 1);s = p + r * (j ? l : k - 1);a.o(d, u);a.n(d, s);for (var f = 0; f < t; f++) {
          var B = a.Qe();a.gf(B, f + 1);var g = a.Dc(h, "numbertemplate", B, c);a.E(g, "absolute");var x = f % (l + 1);a.z(g, !j ? m * x : f % k * m);a.B(g, j ? r * x : b.floor(f / (l + 1)) * r);a.D(d, g);C[f] = g;e.$ActionMode & 1 && a.c(g, "click", a.F(i, v, f));e.$ActionMode & 2 && a.c(g, "mouseover", a.Rb(a.F(i, v, f), g));A[f] = a.Ub(g);
        }w = c;
      }
    };f.Xb = e = a.l({ $SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1 }, D);h = a.C(d, "prototype");q = a.o(h);p = a.n(h);a.wb(h, d);o = e.$Steps || 1;k = e.$Lanes || 1;y = e.$SpacingX;z = e.$SpacingY;j = e.$Orientation - 1;e.$Scale == g && a.M(d, "noscale", c);
  };h.$JssorArrowNavigator$ = function (b, f, j) {
    var d = this;l.call(d);var u,
        t,
        e,
        h,
        k,
        q = a.o(b),
        o = a.n(b);function n(a) {
      d.i(m.Mb, a, c);
    }function r(c) {
      a.A(b, c || !j.$Loop && e == 0);a.A(f, c || !j.$Loop && e >= t - j.$DisplayPieces);u = c;
    }d.qc = function (b, a, c) {
      if (c) e = a;else {
        e = b;r(u);
      }
    };d.Bc = r;var s;d.hc = function (i, d) {
      if (!s || h.$Scale == g) {
        var e = a.tb(b).clientWidth,
            d = a.tb(b).clientHeight;if (h.$AutoCenter & 1) {
          a.z(b, (e - q) / 2);a.z(f, (e - q) / 2);
        }if (h.$AutoCenter & 2) {
          a.B(b, (d - o) / 2);a.B(f, (d - o) / 2);
        }s = c;
      }
    };var p;d.gc = function (d) {
      t = d;e = 0;if (!p) {
        a.c(b, "click", a.F(i, n, -k));a.c(f, "click", a.F(i, n, k));a.Ub(b);a.Ub(f);p = c;
      }
    };d.Xb = h = a.l({ $Steps: 1 }, j);k = h.$Steps;if (h.$Scale == g) {
      a.M(b, "noscale", c);a.M(f, "noscale", c);
    }
  };h.$JssorThumbnailNavigator$ = function (k, C) {
    var h = this,
        z,
        q,
        d,
        w = [],
        A,
        y,
        n,
        r,
        s,
        u,
        t,
        p,
        v,
        e,
        o;l.call(h);k = a.hb(k);function B(l, e) {
      var f = this,
          b,
          k,
          j;function n() {
        k.Ic(q == e);
      }function g(a) {
        (a || !v.$LastDragSucceded()) && h.i(m.Mb, e);
      }f.Z = e;f.Hc = n;j = l.hf || l.Tb || a.bb();f.Nb = b = a.Dc(o, "thumbnailtemplate", j, c);k = a.Ub(b);d.$ActionMode & 1 && a.c(b, "click", a.F(i, g, 0));d.$ActionMode & 2 && a.c(b, "mouseover", a.Rb(a.F(i, g, 1), b));
    }h.qc = function (c, d, e) {
      var a = q;q = c;a != -1 && w[a].Hc();w[c].Hc();!e && v.$PlayTo(v.od(b.floor(d / n)));
    };h.Bc = function (b) {
      a.A(k, b);
    };h.hc = a.ac;var x;h.gc = function (F, C) {
      if (!x) {
        z = F;b.ceil(z / n);q = -1;p = b.min(p, C.length);var h = d.$Orientation & 1,
            l = u + (u + r) * (n - 1) * (1 - h),
            j = t + (t + s) * (n - 1) * h,
            o = l + (l + r) * (p - 1) * h,
            m = j + (j + s) * (p - 1) * (1 - h);a.E(e, "absolute");a.ab(e, "hidden");d.$AutoCenter & 1 && a.z(e, (A - o) / 2);d.$AutoCenter & 2 && a.B(e, (y - m) / 2);a.o(e, o);a.n(e, m);var i = [];a.e(C, function (k, f) {
          var g = new B(k, f),
              d = g.Nb,
              c = b.floor(f / n),
              j = f % n;a.z(d, (u + r) * j * (1 - h));a.B(d, (t + s) * j * h);if (!i[c]) {
            i[c] = a.bb();a.D(e, i[c]);
          }a.D(i[c], d);w.push(g);
        });var E = a.l({ $HWA: g, $AutoPlay: g, $NaviQuitDrag: g, $SlideWidth: l, $SlideHeight: j, $SlideSpacing: r * h + s * (1 - h), $MinDragOffsetToSlide: 12, $SlideDuration: 200, $PauseOnHover: 1, $PlayOrientation: d.$Orientation, $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation }, d);v = new f(k, E);x = c;
      }
    };h.Xb = d = a.l({ $SpacingX: 3, $SpacingY: 3, $DisplayPieces: 1, $Orientation: 1, $AutoCenter: 3, $ActionMode: 1 }, C);if (d.$Rows != j) d.$Lanes = d.$Rows;A = a.o(k);y = a.n(k);e = a.C(k, "slides", c);o = a.C(e, "prototype");u = a.o(o);t = a.n(o);a.wb(o, e);n = d.$Lanes || 1;r = d.$SpacingX;s = d.$SpacingY;p = d.$DisplayPieces;d.$Scale == g && a.M(k, "noscale", c);
  };function o() {
    k.call(this, 0, 0);this.Sb = a.ac;
  }h.$JssorCaptionSlider$ = function (p, h, f) {
    var c = this,
        g,
        n = f ? h.$PlayInMode : h.$PlayOutMode,
        e = h.$CaptionTransitions,
        o = { nb: "t", $Delay: "d", $Duration: "du", x: "x", y: "y", $Rotate: "r", $Zoom: "z", $Opacity: "f", lb: "b" },
        d = { Cb: function Cb(b, a) {
        if (!isNaN(a.ob)) b = a.ob;else b *= a.ze;return b;
      }, $Opacity: function $Opacity(b, a) {
        return this.Cb(b - 1, a);
      } };d.$Zoom = d.$Opacity;k.call(c, 0, 0);function l(r, m) {
      var k = [],
          i,
          j = [],
          c = [];function h(c, d) {
        var b = {};a.e(o, function (g, h) {
          var e = a.t(c, g + (d || ""));if (e) {
            var f = {};if (g == "t") f.ob = e;else if (e.indexOf("%") + 1) f.ze = a.ec(e) / 100;else f.ob = a.ec(e);b[h] = f;
          }
        });return b;
      }function p() {
        return e[b.floor(b.random() * e.length)];
      }function g(f) {
        var h;if (f == "*") h = p();else if (f) {
          var d = e[a.Me(f)] || e[f];if (a.mc(d)) {
            if (f != i) {
              i = f;c[f] = 0;j[f] = d[b.floor(b.random() * d.length)];
            } else c[f]++;d = j[f];if (a.mc(d)) {
              d = d.length && d[c[f] % d.length];if (a.mc(d)) d = d[b.floor(b.random() * d.length)];
            }
          }h = d;if (a.cd(h)) h = g(h);
        }return h;
      }var q = a.V(r);a.e(q, function (b) {
        var c = [];c.$Elmt = b;var e = a.t(b, "u") == "caption";a.e(f ? [0, 3] : [2], function (k, o) {
          if (e) {
            var j, f;if (k != 2 || !a.t(b, "t3")) {
              f = h(b, k);if (k == 2 && !f.nb) {
                f.$Delay = f.$Delay || { ob: 0 };f = a.l(h(b, 0), f);
              }
            }if (f && f.nb) {
              j = g(f.nb.ob);if (j) {
                var i = a.l({ $Delay: 0 }, j);a.e(f, function (c, a) {
                  var b = (d[a] || d.Cb).apply(d, [i[a], f[a]]);if (!isNaN(b)) i[a] = b;
                });if (!o) if (f.lb) i.lb = f.lb.ob || 0;else if (n & 2) i.lb = 0;
              }
            }c.push(i);
          }if (m % 2 && !o) c.V = l(b, m + 1);
        });k.push(c);
      });return k;
    }function m(w, c, z) {
      var g = { $Easing: c.$Easing, $Round: c.$Round, $During: c.$During, $Reverse: f && !z },
          m = w,
          r = a.tb(w),
          l = a.o(m),
          j = a.n(m),
          y = a.o(r),
          x = a.n(r),
          h = {},
          e = {},
          i = c.$ScaleClip || 1;if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;g.$OriginalWidth = l;g.$OriginalHeight = j;if (c.$Zoom || c.$Rotate) {
        e.$Zoom = (c.$Zoom || 2) - 2;if (a.Q() || a.vc()) e.$Zoom = b.min(e.$Zoom, 1);h.$Zoom = 1;var B = c.$Rotate || 0;e.$Rotate = B * 360;h.$Rotate = 0;
      } else if (c.$Clip) {
        var s = { $Top: 0, $Right: l, $Bottom: j, $Left: 0 },
            v = a.l({}, s),
            d = v.Bb = {},
            u = c.$Clip & 4,
            p = c.$Clip & 8,
            t = c.$Clip & 1,
            q = c.$Clip & 2;if (u && p) {
          d.$Top = j / 2 * i;d.$Bottom = -d.$Top;
        } else if (u) d.$Bottom = -j * i;else if (p) d.$Top = j * i;if (t && q) {
          d.$Left = l / 2 * i;d.$Right = -d.$Left;
        } else if (t) d.$Right = -l * i;else if (q) d.$Left = l * i;g.$Move = c.$Move;e.$Clip = v;h.$Clip = s;
      }var n = 0,
          o = 0;if (c.x) n -= y * c.x;if (c.y) o -= x * c.y;if (n || o || g.$Move) {
        e.$Left = n;e.$Top = o;
      }var A = c.$Duration;h = a.l(h, a.Vd(m, e));g.wc = a.Wd();return new k(c.$Delay, A, g, m, h, e);
    }function i(b, d) {
      a.e(d, function (a) {
        var e,
            h = a.$Elmt,
            d = a[0],
            k = a[1];if (d) {
          e = m(h, d);b = e.Jb(d.lb == j ? b : d.lb, 1);
        }b = i(b, a.V);if (k) {
          var f = m(h, k, 1);f.Jb(b, 1);c.X(f);g.X(f);
        }e && c.X(e);
      });return b;
    }c.Sb = function () {
      c.v(c.Y() * (f || 0));g.v(0);
    };g = new k(0, 0);i(0, n ? l(p, 1) : []);
  };
})(window, document, Math, null, true, false);

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(classie) {/**
 * selectFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;(function (window) {

	'use strict';

	/**
  * based on from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
  */

	function hasParent(e, p) {
		if (!e) return false;
		var el = e.target || e.srcElement || e || false;
		while (el && el != p) {
			el = el.parentNode || false;
		}
		return el !== false;
	};

	/**
  * extend obj function
  */
	function extend(a, b) {
		for (var key in b) {
			if (b.hasOwnProperty(key)) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
  * SelectFx function
  */
	function SelectFx(el, options) {
		this.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}

	/**
  * SelectFx options
  */
	SelectFx.prototype.options = {
		// if true all the links will open in a new tab.
		// if we want to be redirected when we click an option, we need to define a data-link attr on the option of the native select element
		newTab: true,
		// when opening the select element, the default placeholder (if any) is shown
		stickyPlaceholder: true,
		// callback when changing the value
		onChange: function onChange(val) {
			return false;
		}

		/**
   * init function
   * initialize and cache some vars
   */
	};SelectFx.prototype._init = function () {
		// check if we are using a placeholder for the native select box
		// we assume the placeholder is disabled and selected by default
		var selectedOpt = this.el.querySelector('option[selected]');
		this.hasDefaultPlaceholder = selectedOpt && selectedOpt.disabled;

		// get selected option (either the first option with attr selected or just the first option)
		this.selectedOpt = selectedOpt || this.el.querySelector('option');

		// create structure
		this._createSelectEl();

		// all options
		this.selOpts = [].slice.call(this.selEl.querySelectorAll('li[data-option]'));

		// total options
		this.selOptsCount = this.selOpts.length;

		// current index
		this.current = this.selOpts.indexOf(this.selEl.querySelector('li.cs-selected')) || -1;

		// placeholder elem
		this.selPlaceholder = this.selEl.querySelector('span.cs-placeholder');

		// init events
		this._initEvents();
	};

	/**
  * creates the structure for the select element
  */
	SelectFx.prototype._createSelectEl = function () {
		var self = this,
		    options = '',
		    createOptionHTML = function createOptionHTML(el) {
			var optclass = '',
			    classes = '',
			    link = '';

			if (el.selectedOpt && !this.foundSelected && !this.hasDefaultPlaceholder) {
				classes += 'cs-selected ';
				this.foundSelected = true;
			}
			// extra classes
			if (el.getAttribute('data-class')) {
				classes += el.getAttribute('data-class');
			}
			// link options
			if (el.getAttribute('data-link')) {
				link = 'data-link=' + el.getAttribute('data-link');
			}

			if (classes !== '') {
				optclass = 'class="' + classes + '" ';
			}

			return '<li ' + optclass + link + ' data-option data-value="' + el.value + '"><span>' + el.textContent + '</span></li>';
		};

		[].slice.call(this.el.children).forEach(function (el) {
			if (el.disabled) {
				return;
			}

			var tag = el.tagName.toLowerCase();

			if (tag === 'option') {
				options += createOptionHTML(el);
			} else if (tag === 'optgroup') {
				options += '<li class="cs-optgroup"><span>' + el.label + '</span><ul>';
				[].slice.call(el.children).forEach(function (opt) {
					options += createOptionHTML(opt);
				});
				options += '</ul></li>';
			}
		});

		var opts_el = '<div class="cs-options"><ul>' + options + '</ul></div>';
		this.selEl = document.createElement('div');
		this.selEl.className = this.el.className;
		this.selEl.tabIndex = this.el.tabIndex;
		this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + '</span>' + opts_el;
		this.el.parentNode.appendChild(this.selEl);
		this.selEl.appendChild(this.el);
	};

	/**
  * initialize the events
  */
	SelectFx.prototype._initEvents = function () {
		var self = this;

		// open/close select
		this.selPlaceholder.addEventListener('click', function () {
			self._toggleSelect();
		});

		// clicking the options
		this.selOpts.forEach(function (opt, idx) {
			opt.addEventListener('click', function () {
				self.current = idx;
				self._changeOption();
				// close select elem
				self._toggleSelect();
			});
		});

		// close the select element if the target it??s not the select element or one of its descendants..
		document.addEventListener('click', function (ev) {
			var target = ev.target;
			if (self._isOpen() && target !== self.selEl && !hasParent(target, self.selEl)) {
				self._toggleSelect();
			}
		});

		// keyboard navigation events
		this.selEl.addEventListener('keydown', function (ev) {
			var keyCode = ev.keyCode || ev.which;

			switch (keyCode) {
				// up key
				case 38:
					ev.preventDefault();
					self._navigateOpts('prev');
					break;
				// down key
				case 40:
					ev.preventDefault();
					self._navigateOpts('next');
					break;
				// space key
				case 32:
					ev.preventDefault();
					if (self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1) {
						self._changeOption();
					}
					self._toggleSelect();
					break;
				// enter key
				case 13:
					ev.preventDefault();
					if (self._isOpen() && typeof self.preSelCurrent != 'undefined' && self.preSelCurrent !== -1) {
						self._changeOption();
						self._toggleSelect();
					}
					break;
				// esc key
				case 27:
					ev.preventDefault();
					if (self._isOpen()) {
						self._toggleSelect();
					}
					break;
			}
		});
	};

	/**
  * navigate with up/dpwn keys
  */
	SelectFx.prototype._navigateOpts = function (dir) {
		if (!this._isOpen()) {
			this._toggleSelect();
		}

		var tmpcurrent = typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;

		if (dir === 'prev' && tmpcurrent > 0 || dir === 'next' && tmpcurrent < this.selOptsCount - 1) {
			// save pre selected current - if we click on option, or press enter, or press space this is going to be the index of the current option
			this.preSelCurrent = dir === 'next' ? tmpcurrent + 1 : tmpcurrent - 1;
			// remove focus class if any..
			this._removeFocus();
			// add class focus - track which option we are navigating
			classie.add(this.selOpts[this.preSelCurrent], 'cs-focus');
		}
	};

	/**
  * open/close select
  * when opened show the default placeholder if any
  */
	SelectFx.prototype._toggleSelect = function () {
		// remove focus class if any..
		this._removeFocus();

		if (this._isOpen()) {
			if (this.current !== -1) {
				// update placeholder text
				this.selPlaceholder.textContent = this.selOpts[this.current].textContent;
			}
			classie.remove(this.selEl, 'cs-active');
		} else {
			if (this.hasDefaultPlaceholder && this.options.stickyPlaceholder) {
				// everytime we open we wanna see the default placeholder text
				this.selPlaceholder.textContent = this.selectedOpt.textContent;
			}
			classie.add(this.selEl, 'cs-active');
		}
	};

	/**
  * change option - the new value is set
  */
	SelectFx.prototype._changeOption = function () {
		// if pre selected current (if we navigate with the keyboard)...
		if (typeof this.preSelCurrent != 'undefined' && this.preSelCurrent !== -1) {
			this.current = this.preSelCurrent;
			this.preSelCurrent = -1;
		}

		// current option
		var opt = this.selOpts[this.current];

		// update current selected value
		this.selPlaceholder.textContent = opt.textContent;

		// change native select element??s value
		this.el.value = opt.getAttribute('data-value');

		// remove class cs-selected from old selected option and add it to current selected option
		var oldOpt = this.selEl.querySelector('li.cs-selected');
		if (oldOpt) {
			classie.remove(oldOpt, 'cs-selected');
		}
		classie.add(opt, 'cs-selected');

		// if there??s a link defined
		if (opt.getAttribute('data-link')) {
			// open in new tab?
			if (this.options.newTab) {
				window.open(opt.getAttribute('data-link'), '_blank');
			} else {
				window.location = opt.getAttribute('data-link');
			}
		}

		// callback
		this.options.onChange(this.el.value);
	};

	/**
  * returns true if select element is opened
  */
	SelectFx.prototype._isOpen = function (opt) {
		return classie.has(this.selEl, 'cs-active');
	};

	/**
  * removes the focus class from the option
  */
	SelectFx.prototype._removeFocus = function (opt) {
		var focusEl = this.selEl.querySelector('li.cs-focus');
		if (focusEl) {
			classie.remove(focusEl, 'cs-focus');
		}
	};

	/**
  * add to global namespace
  */
	window.SelectFx = SelectFx;
})(window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( true ) {
  // AMD
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (classie),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/*!
 * Datepicker for Bootstrap v1.4.0 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function h(b){var c={};if(p[b]||(b=b.split("-")[0],p[b])){var d=p[b];return a.each(o,function(a,b){b in d&&(c[b]=d[b])}),c}}var i=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new i;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),j=function(b,c){this._process_options(c),this.dates=new i,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(q.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};j.prototype={constructor:j,_process_options:function(e){this._o=a.extend({},this._o,e);var f=this.o=a.extend({},this._o),g=f.language;switch(p[g]||(g=g.split("-")[0],p[g]||(g=n.language)),f.language=g,f.startView){case 2:case"decade":f.startView=2;break;case 1:case"year":f.startView=1;break;default:f.startView=0}switch(f.minViewMode){case 1:case"months":f.minViewMode=1;break;case 2:case"years":f.minViewMode=2;break;default:f.minViewMode=0}f.startView=Math.max(f.startView,f.minViewMode),f.multidate!==!0&&(f.multidate=Number(f.multidate)||!1,f.multidate!==!1&&(f.multidate=Math.max(0,f.multidate))),f.multidateSeparator=String(f.multidateSeparator),f.weekStart%=7,f.weekEnd=(f.weekStart+6)%7;var h=q.parseFormat(f.format);if(f.startDate!==-1/0&&(f.startDate=f.startDate?f.startDate instanceof Date?this._local_to_utc(this._zero_time(f.startDate)):q.parseDate(f.startDate,h,f.language):-1/0),1/0!==f.endDate&&(f.endDate=f.endDate?f.endDate instanceof Date?this._local_to_utc(this._zero_time(f.endDate)):q.parseDate(f.endDate,h,f.language):1/0),f.daysOfWeekDisabled=f.daysOfWeekDisabled||[],a.isArray(f.daysOfWeekDisabled)||(f.daysOfWeekDisabled=f.daysOfWeekDisabled.split(/[,\s]*/)),f.daysOfWeekDisabled=a.map(f.daysOfWeekDisabled,function(a){return parseInt(a,10)}),f.datesDisabled=f.datesDisabled||[],!a.isArray(f.datesDisabled)){var i=[];i.push(q.parseDate(f.datesDisabled,h,f.language)),f.datesDisabled=i}f.datesDisabled=a.map(f.datesDisabled,function(a){return q.parseDate(a,h,f.language)});var j=String(f.orientation).toLowerCase().split(/\s+/g),k=f.orientation.toLowerCase();if(j=a.grep(j,function(a){return/^auto|left|right|top|bottom$/.test(a)}),f.orientation={x:"auto",y:"auto"},k&&"auto"!==k)if(1===j.length)switch(j[0]){case"top":case"bottom":f.orientation.y=j[0];break;case"left":case"right":f.orientation.x=j[0]}else k=a.grep(j,function(a){return/^left|right$/.test(a)}),f.orientation.x=k[0]||"auto",k=a.grep(j,function(a){return/^top|bottom$/.test(a)}),f.orientation.y=k[0]||"auto";else;if(f.defaultViewDate){var l=f.defaultViewDate.year||(new Date).getFullYear(),m=f.defaultViewDate.month||0,o=f.defaultViewDate.day||1;f.defaultViewDate=c(l,m,o)}else f.defaultViewDate=d();f.showOnFocus=f.showOnFocus!==b?f.showOnFocus:!0},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),b],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{"mousedown touchstart":a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return q.formatDate(c,b,this.o.language)},this)})},show:function(){return this.element.attr("readonly")&&this.o.enableOnReadonly===!1?void 0:(this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this)},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.val("").change(),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),setValue:function(){var a=this.getFormattedDate();return this.isInput?this.element.val(a).change():this.component&&this.element.find("input").val(a).change(),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return q.formatDate(a,c,d)}).join(this.o.multidateSeparator)},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container).width(),f=a(this.o.container).height(),g=a(this.o.container).scrollTop(),h=a(this.o.container).offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+10,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>e?(this.picker.addClass("datepicker-orient-right"),n=k.left+m-b):this.picker.addClass("datepicker-orient-left");var p,q,r=this.o.orientation.y;if("auto"===r&&(p=-g+o-c,q=g+f-(o+l+c),r=Math.max(p,q)===q?"top":"bottom"),this.picker.addClass("datepicker-orient-"+r),"top"===r?o+=l:o-=c+parseInt(this.picker.css("padding-top")),this.o.rtl){var s=e-(n+m);this.picker.css({top:o,right:s,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return q.parseDate(a,this.o.format,this.o.language)},this)),c=a.grep(c,a.proxy(function(a){return a<this.o.startDate||a>this.o.endDate||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate&&(this.viewDate=new Date(this.o.endDate)),d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this},fillDow:function(){var a=this.o.weekStart,b="<tr>";if(this.o.calendarWeeks){this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1});var c='<th class="cw">&#160;</th>';b+=c}for(;a<this.o.weekStart+7;)b+='<th class="dow">'+p[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+p[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),f=this.viewDate.getUTCMonth(),g=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<f?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>f)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===g.getFullYear()&&b.getUTCMonth()===g.getMonth()&&b.getUTCDate()===g.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),(b.valueOf()<this.o.startDate||b.valueOf()>this.o.endDate||-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled))&&c.push("disabled"),this.o.datesDisabled.length>0&&a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0&&c.push("disabled","disabled-date"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected")),c},fill:function(){var d,e=new Date(this.viewDate),f=e.getUTCFullYear(),g=e.getUTCMonth(),h=this.o.startDate!==-1/0?this.o.startDate.getUTCFullYear():-1/0,i=this.o.startDate!==-1/0?this.o.startDate.getUTCMonth():-1/0,j=1/0!==this.o.endDate?this.o.endDate.getUTCFullYear():1/0,k=1/0!==this.o.endDate?this.o.endDate.getUTCMonth():1/0,l=p[this.o.language].today||p.en.today||"",m=p[this.o.language].clear||p.en.clear||"";if(!isNaN(f)&&!isNaN(g)){this.picker.find(".datepicker-days thead .datepicker-switch").text(p[this.o.language].months[g]+" "+f),this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn!==!1),this.updateNavArrows(),this.fillMonths();var n=c(f,g-1,28),o=q.getDaysInMonth(n.getUTCFullYear(),n.getUTCMonth());n.setUTCDate(o),n.setUTCDate(o-(n.getUTCDay()-this.o.weekStart+7)%7);var r=new Date(n);r.setUTCDate(r.getUTCDate()+42),r=r.valueOf();for(var s,t=[];n.valueOf()<r;){if(n.getUTCDay()===this.o.weekStart&&(t.push("<tr>"),this.o.calendarWeeks)){var u=new Date(+n+(this.o.weekStart-n.getUTCDay()-7)%7*864e5),v=new Date(Number(u)+(11-u.getUTCDay())%7*864e5),w=new Date(Number(w=c(v.getUTCFullYear(),0,1))+(11-w.getUTCDay())%7*864e5),x=(v-w)/864e5/7+1;t.push('<td class="cw">'+x+"</td>")}if(s=this.getClassNames(n),s.push("day"),this.o.beforeShowDay!==a.noop){var y=this.o.beforeShowDay(this._utc_to_local(n));y===b?y={}:"boolean"==typeof y?y={enabled:y}:"string"==typeof y&&(y={classes:y}),y.enabled===!1&&s.push("disabled"),y.classes&&(s=s.concat(y.classes.split(/\s+/))),y.tooltip&&(d=y.tooltip)}s=a.unique(s),t.push('<td class="'+s.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+n.getUTCDate()+"</td>"),d=null,n.getUTCDay()===this.o.weekEnd&&t.push("</tr>"),n.setUTCDate(n.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(t.join(""));var z=this.picker.find(".datepicker-months").find("th:eq(1)").text(f).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===f&&z.eq(b.getUTCMonth()).addClass("active")}),(h>f||f>j)&&z.addClass("disabled"),f===h&&z.slice(0,i).addClass("disabled"),f===j&&z.slice(k+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var A=this;a.each(z,function(b,c){if(!a(c).hasClass("disabled")){var d=new Date(f,b,1),e=A.o.beforeShowMonth(d);e===!1&&a(c).addClass("disabled")}})}t="",f=10*parseInt(f/10,10);var B=this.picker.find(".datepicker-years").find("th:eq(1)").text(f+"-"+(f+9)).end().find("td");f-=1;for(var C,D=a.map(this.dates,function(a){return a.getUTCFullYear()}),E=-1;11>E;E++)C=["year"],-1===E?C.push("old"):10===E&&C.push("new"),-1!==a.inArray(f,D)&&C.push("active"),(h>f||f>j)&&C.push("disabled"),t+='<span class="'+C.join(" ")+'">'+f+"</span>",f+=1;B.html(t)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.picker.find(".prev").css(this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?{visibility:"hidden"}:{visibility:"visible"});break;case 1:case 2:this.picker.find(".prev").css(this.o.startDate!==-1/0&&b<=this.o.startDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"}),this.picker.find(".next").css(1/0!==this.o.endDate&&b>=this.o.endDate.getUTCFullYear()?{visibility:"hidden"}:{visibility:"visible"})}}},click:function(b){b.preventDefault();var d,e,f,g=a(b.target).closest("span, td, th");if(1===g.length)switch(g[0].nodeName.toLowerCase()){case"th":switch(g[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var h=q.modes[this.viewMode].navStep*("prev"===g[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,h),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,h),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":var i=new Date;i=c(i.getFullYear(),i.getMonth(),i.getDate(),0,0,0),this.showMode(-2);var j="linked"===this.o.todayBtn?null:"view";this._setDate(i,j);break;case"clear":this.clearDates()}break;case"span":g.hasClass("disabled")||(this.viewDate.setUTCDate(1),g.hasClass("month")?(f=1,e=g.parent().find("span").index(g),d=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(e),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode&&this._setDate(c(d,e,f))):(f=1,e=0,d=parseInt(g.text(),10)||0,this.viewDate.setUTCFullYear(d),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(d,e,f))),this.showMode(-1),this.fill());break;case"td":g.hasClass("day")&&!g.hasClass("disabled")&&(f=parseInt(g.text(),10)||1,d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),g.hasClass("old")?0===e?(e=11,d-=1):e-=1:g.hasClass("new")&&(11===e?(e=0,d+=1):e+=1),this._setDate(c(d,e,f)))}this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveMonth:function(a,c){if(!a)return b;if(!c)return a;var d,e,f=new Date(a.valueOf()),g=f.getUTCDate(),h=f.getUTCMonth(),i=Math.abs(c);if(c=c>0?1:-1,1===i)e=-1===c?function(){return f.getUTCMonth()===h}:function(){return f.getUTCMonth()!==d},d=h+c,f.setUTCMonth(d),(0>d||d>11)&&(d=(d+12)%12);else{for(var j=0;i>j;j++)f=this.moveMonth(f,c);d=f.getUTCMonth(),f.setUTCDate(g),e=function(){return d!==f.getUTCMonth()}}for(;e();)f.setUTCDate(--g),f.setUTCMonth(d);return f},moveYear:function(a,b){return this.moveMonth(a,12*b)},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void(27===a.keyCode&&this.show());var b,c,e,f=!1,g=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault();break;case 37:case 39:if(!this.o.keyboardNavigation)break;b=37===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+b),e=new Date(g),e.setUTCDate(g.getUTCDate()+b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 38:case 40:if(!this.o.keyboardNavigation)break;b=38===a.keyCode?-1:1,a.ctrlKey?(c=this.moveYear(this.dates.get(-1)||d(),b),e=this.moveYear(g,b),this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveMonth(this.dates.get(-1)||d(),b),e=this.moveMonth(g,b),this._trigger("changeMonth",this.viewDate)):(c=new Date(this.dates.get(-1)||d()),c.setUTCDate(c.getUTCDate()+7*b),e=new Date(g),e.setUTCDate(g.getUTCDate()+7*b)),this.dateWithinRange(e)&&(this.focusDate=this.viewDate=e,this.setValue(),this.fill(),a.preventDefault());break;case 32:break;case 13:g=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(g),f=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),"function"==typeof a.stopPropagation?a.stopPropagation():a.cancelBubble=!0,this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(f){this._trigger(this.dates.length?"changeDate":"clearDate");var h;this.isInput?h=this.element:this.component&&(h=this.element.find("input")),h&&h.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(2,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+q.modes[this.viewMode].clsName).css("display","block"),this.updateNavArrows()}};var k=function(b,c){this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,m.call(a(this.inputs),c).bind("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};k.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker"),d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var l=a.fn.datepicker,m=function(c){var d=Array.apply(null,arguments);d.shift();var e;return this.each(function(){var f=a(this),i=f.data("datepicker"),l="object"==typeof c&&c;if(!i){var m=g(this,"date"),o=a.extend({},n,m,l),p=h(o.language),q=a.extend({},n,p,m,l);if(f.hasClass("input-daterange")||q.inputs){var r={inputs:q.inputs||f.find("input").toArray()};f.data("datepicker",i=new k(this,a.extend(q,r)))}else f.data("datepicker",i=new j(this,q))}return"string"==typeof c&&"function"==typeof i[c]&&(e=i[c].apply(i,d),e!==b)?!1:void 0}),e!==b?e:this};a.fn.datepicker=m;var n=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-1/0,startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,container:"body"},o=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=j;var p=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear"}},q={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,q.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(d,e,f){function g(){var a=this.slice(0,m[k].length),b=m[k].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!d)return b;if(d instanceof Date)return d;"string"==typeof e&&(e=q.parseFormat(e));var h,i,k,l=/([\-+]\d+)([dmwy])/,m=d.match(/([\-+]\d+)([dmwy])/g);if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(d)){for(d=new Date,k=0;k<m.length;k++)switch(h=l.exec(m[k]),i=parseInt(h[1]),h[2]){case"d":d.setUTCDate(d.getUTCDate()+i);break;case"m":d=j.prototype.moveMonth.call(j.prototype,d,i);break;case"w":d.setUTCDate(d.getUTCDate()+7*i);break;case"y":d=j.prototype.moveYear.call(j.prototype,d,i)}return c(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),0,0,0)}m=d&&d.match(this.nonpunctuation)||[],d=new Date;var n,o,r={},s=["yyyy","yy","M","MM","m","mm","d","dd"],t={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};t.M=t.MM=t.mm=t.m,t.dd=t.d,d=c(d.getFullYear(),d.getMonth(),d.getDate(),0,0,0);var u=e.parts.slice();if(m.length!==u.length&&(u=a(u).filter(function(b,c){return-1!==a.inArray(c,s)}).toArray()),m.length===u.length){var v;for(k=0,v=u.length;v>k;k++){if(n=parseInt(m[k],10),h=u[k],isNaN(n))switch(h){case"MM":o=a(p[f].months).filter(g),n=a.inArray(o[0],p[f].months)+1;break;case"M":o=a(p[f].monthsShort).filter(g),n=a.inArray(o[0],p[f].monthsShort)+1}r[h]=n}var w,x;for(k=0;k<s.length;k++)x=s[k],x in r&&!isNaN(r[x])&&(w=new Date(d),t[x](w,r[x]),isNaN(w)||(d=w))}return d},formatDate:function(b,c,d){if(!b)return"";"string"==typeof c&&(c=q.parseFormat(c));var e={d:b.getUTCDate(),D:p[d].daysShort[b.getUTCDay()],DD:p[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:p[d].monthsShort[b.getUTCMonth()],MM:p[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};q.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+q.headTemplate+"<tbody></tbody>"+q.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+q.headTemplate+q.contTemplate+q.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=q,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=l,this},a.fn.datepicker.version="1.4.0",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),m.call(c,"show"))}),a(function(){m.call(a('[data-provide="datepicker-inline"]'))})}(__webpack_provided_window_dot_jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, $) {var __slice = [].slice;!function (a, b) {
  var c;return b.Starrr = c = function () {
    function b(b, c) {
      var d, e, f;this.options = a.extend({}, this.defaults, c), this.$el = b, f = this.defaults;for (d in f) {
        e = f[d], null != this.$el.data(d.toLowerCase()) && (this.options[d] = this.$el.data(d.toLowerCase()));
      }this.$el.data("connected-input") && (this.$connectedInput = a('[name="' + this.$el.data("connected-input") + '"]'), this.options.rating = this.$connectedInput.val() ? parseInt(this.$connectedInput.val(), 10) : void 0), this.createStars(), this.syncRating(), this.$connectedInput && this.$connectedInput.is(":disabled") || (this.$el.on("mouseover.starrr", "i", function (a) {
        return function (b) {
          return a.syncRating(a.getStars().index(b.currentTarget) + 1);
        };
      }(this)), this.$el.on("mouseout.starrr", function (a) {
        return function () {
          return a.syncRating();
        };
      }(this)), this.$el.on("click.starrr", "i", function (a) {
        return function (b) {
          return a.setRating(a.getStars().index(b.currentTarget) + 1);
        };
      }(this)), this.$el.on("starrr:change", this.options.change), null != this.$connectedInput && this.$el.on("starrr:change", function (a) {
        return function (b, c) {
          return a.$connectedInput.val(c), a.$connectedInput.trigger("focusout");
        };
      }(this)));
    }return b.prototype.defaults = { rating: void 0, numStars: 5, emptyStarClass: "fa fa-star-o", fullStarClass: "fa fa-star", change: function change() {} }, b.prototype.getStars = function () {
      return this.$el.find("i");
    }, b.prototype.createStars = function () {
      var a, b, c;for (c = [], a = 1, b = this.options.numStars; b >= 1 ? b >= a : a >= b; b >= 1 ? a++ : a--) {
        c.push(this.$el.append("<i class='" + this.options.emptyStarClass + "'></i>"));
      }return c;
    }, b.prototype.setRating = function (a) {
      return this.options.rating === a && (a = void 0), this.options.rating = a, this.syncRating(), this.$el.trigger("starrr:change", a);
    }, b.prototype.getRating = function () {
      return this.options.rating;
    }, b.prototype.syncRating = function (a) {
      var b, c, d, e, f;if (a || (a = this.options.rating), a) for (b = c = 0, e = a - 1; e >= 0 ? e >= c : c >= e; b = e >= 0 ? ++c : --c) {
        this.getStars().eq(b).removeClass(this.options.emptyStarClass).addClass(this.options.fullStarClass);
      }if (a && a < this.options.numStars) for (b = d = a, f = this.options.numStars - 1; f >= a ? f >= d : d >= f; b = f >= a ? ++d : --d) {
        this.getStars().eq(b).removeClass(this.options.fullStarClass).addClass(this.options.emptyStarClass);
      }return a ? void 0 : this.getStars().removeClass(this.options.fullStarClass).addClass(this.options.emptyStarClass);
    }, b;
  }(), a.fn.extend({ starrr: function starrr() {
      var b, d;return d = arguments[0], b = 2 <= arguments.length ? __slice.call(arguments, 1) : [], this.each(function () {
        var e;return e = a(this).data("starrr"), e || a(this).data("starrr", e = new c(a(this), d)), "string" == typeof d ? e[d].apply(e, b) : void 0;
      });
    } });
}(__webpack_provided_window_dot_jQuery, window), $(function () {
  return $(".starrr").starrr();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
* Nivo Lightbox v1.2.0
* http://dev7studios.com/nivo-lightbox
*
* Copyright 2013, Dev7studios
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/
(function (e, t, n, r) {
  function o(t, n) {
    this.el = t;this.$el = e(this.el);this.options = e.extend({}, s, n);this._defaults = s;this._name = i;this.init();
  }var i = "nivoLightbox",
      s = { effect: "fade", theme: "default", keyboardNav: true, clickOverlayToClose: true, onInit: function onInit() {}, beforeShowLightbox: function beforeShowLightbox() {}, afterShowLightbox: function afterShowLightbox(e) {}, beforeHideLightbox: function beforeHideLightbox() {}, afterHideLightbox: function afterHideLightbox() {}, onPrev: function onPrev(e) {}, onNext: function onNext(e) {}, errorMessage: "The requested content cannot be loaded. Please try again later." };o.prototype = { init: function init() {
      var t = this;if (!e("html").hasClass("nivo-lightbox-notouch")) e("html").addClass("nivo-lightbox-notouch");if ("ontouchstart" in n) e("html").removeClass("nivo-lightbox-notouch");this.$el.on("click", function (e) {
        t.showLightbox(e);
      });if (this.options.keyboardNav) {
        e("body").off("keyup").on("keyup", function (n) {
          var r = n.keyCode ? n.keyCode : n.which;if (r == 27) t.destructLightbox();if (r == 37) e(".nivo-lightbox-prev").trigger("click");if (r == 39) e(".nivo-lightbox-next").trigger("click");
        });
      }this.options.onInit.call(this);
    }, showLightbox: function showLightbox(t) {
      var n = this,
          r = this.$el;var i = this.checkContent(r);if (!i) return;t.preventDefault();this.options.beforeShowLightbox.call(this);var s = this.constructLightbox();if (!s) return;var o = s.find(".nivo-lightbox-content");if (!o) return;e("body").addClass("nivo-lightbox-body-effect-" + this.options.effect);this.processContent(o, r);if (this.$el.attr("data-lightbox-gallery")) {
        var u = e('[data-lightbox-gallery="' + this.$el.attr("data-lightbox-gallery") + '"]');e(".nivo-lightbox-nav").show();e(".nivo-lightbox-prev").off("click").on("click", function (t) {
          t.preventDefault();var i = u.index(r);r = u.eq(i - 1);if (!e(r).length) r = u.last();n.processContent(o, r);n.options.onPrev.call(this, [r]);
        });e(".nivo-lightbox-next").off("click").on("click", function (t) {
          t.preventDefault();var i = u.index(r);r = u.eq(i + 1);if (!e(r).length) r = u.first();n.processContent(o, r);n.options.onNext.call(this, [r]);
        });
      }setTimeout(function () {
        s.addClass("nivo-lightbox-open");n.options.afterShowLightbox.call(this, [s]);
      }, 1);
    }, checkContent: function checkContent(e) {
      var t = this,
          n = e.attr("href"),
          r = n.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);if (n.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
        return true;
      } else if (r) {
        return true;
      } else if (e.attr("data-lightbox-type") == "ajax") {
        return true;
      } else if (n.substring(0, 1) == "#" && e.attr("data-lightbox-type") == "inline") {
        return true;
      } else if (e.attr("data-lightbox-type") == "iframe") {
        return true;
      }return false;
    }, processContent: function processContent(n, r) {
      var i = this,
          s = r.attr("href"),
          o = s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);n.html("").addClass("nivo-lightbox-loading");if (this.isHidpi() && r.attr("data-lightbox-hidpi")) {
        s = r.attr("data-lightbox-hidpi");
      }if (s.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
        var u = e("<img>", { src: s });u.one("load", function () {
          var r = e('<div class="nivo-lightbox-image" />');r.append(u);n.html(r).removeClass("nivo-lightbox-loading");r.css({ "line-height": e(".nivo-lightbox-content").height() + "px", height: e(".nivo-lightbox-content").height() + "px" });e(t).resize(function () {
            r.css({ "line-height": e(".nivo-lightbox-content").height() + "px", height: e(".nivo-lightbox-content").height() + "px" });
          });
        }).each(function () {
          if (this.complete) e(this).load();
        });u.error(function () {
          var t = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");n.html(t).removeClass("nivo-lightbox-loading");
        });
      } else if (o) {
        var a = "",
            f = "nivo-lightbox-video";if (o[1] == "youtube") {
          a = "http://www.youtube.com/embed/" + o[4];f = "nivo-lightbox-youtube";
        }if (o[1] == "youtu") {
          a = "http://www.youtube.com/embed/" + o[3];f = "nivo-lightbox-youtube";
        }if (o[1] == "vimeo") {
          a = "http://player.vimeo.com/video/" + o[3];f = "nivo-lightbox-vimeo";
        }if (a) {
          var l = e("<iframe>", { src: a, "class": f, frameborder: 0, vspace: 0, hspace: 0, scrolling: "auto" });n.html(l);l.load(function () {
            n.removeClass("nivo-lightbox-loading");
          });
        }
      } else if (r.attr("data-lightbox-type") == "ajax") {
        e.ajax({ url: s, cache: false, success: function success(r) {
            var i = e('<div class="nivo-lightbox-ajax" />');i.append(r);n.html(i).removeClass("nivo-lightbox-loading");if (i.outerHeight() < n.height()) {
              i.css({ position: "relative", top: "50%", "margin-top": -(i.outerHeight() / 2) + "px" });
            }e(t).resize(function () {
              if (i.outerHeight() < n.height()) {
                i.css({ position: "relative", top: "50%", "margin-top": -(i.outerHeight() / 2) + "px" });
              }
            });
          }, error: function error() {
            var t = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");n.html(t).removeClass("nivo-lightbox-loading");
          } });
      } else if (s.substring(0, 1) == "#" && r.attr("data-lightbox-type") == "inline") {
        if (e(s).length) {
          var c = e('<div class="nivo-lightbox-inline" />');c.append(e(s).clone().show());n.html(c).removeClass("nivo-lightbox-loading");if (c.outerHeight() < n.height()) {
            c.css({ position: "relative", top: "50%", "margin-top": -(c.outerHeight() / 2) + "px" });
          }e(t).resize(function () {
            if (c.outerHeight() < n.height()) {
              c.css({ position: "relative", top: "50%", "margin-top": -(c.outerHeight() / 2) + "px" });
            }
          });
        } else {
          var h = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");n.html(h).removeClass("nivo-lightbox-loading");
        }
      } else if (r.attr("data-lightbox-type") == "iframe") {
        var p = e("<iframe>", { src: s, "class": "nivo-lightbox-item", frameborder: 0, vspace: 0, hspace: 0, scrolling: "auto" });n.html(p);p.load(function () {
          n.removeClass("nivo-lightbox-loading");
        });
      } else {
        return false;
      }if (r.attr("title")) {
        var d = e("<span>", { "class": "nivo-lightbox-title" });d.text(r.attr("title"));e(".nivo-lightbox-title-wrap").html(d);
      } else {
        e(".nivo-lightbox-title-wrap").html("");
      }
    }, constructLightbox: function constructLightbox() {
      if (e(".nivo-lightbox-overlay").length) return e(".nivo-lightbox-overlay");var t = e("<div>", { "class": "nivo-lightbox-overlay nivo-lightbox-theme-" + this.options.theme + " nivo-lightbox-effect-" + this.options.effect });var n = e("<div>", { "class": "nivo-lightbox-wrap" });var r = e("<div>", { "class": "nivo-lightbox-content" });var i = e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');var s = e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');var o = e("<div>", { "class": "nivo-lightbox-title-wrap" });var u = 0;if (u) t.addClass("nivo-lightbox-ie");n.append(r);n.append(o);t.append(n);t.append(i);t.append(s);e("body").append(t);var a = this;if (a.options.clickOverlayToClose) {
        t.on("click", function (t) {
          if (t.target === this || e(t.target).hasClass("nivo-lightbox-content") || e(t.target).hasClass("nivo-lightbox-image")) {
            a.destructLightbox();
          }
        });
      }s.on("click", function (e) {
        e.preventDefault();a.destructLightbox();
      });return t;
    }, destructLightbox: function destructLightbox() {
      var t = this;this.options.beforeHideLightbox.call(this);e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");e(".nivo-lightbox-nav").hide();e("body").removeClass("nivo-lightbox-body-effect-" + t.options.effect);var n = 0;if (n) {
        e(".nivo-lightbox-overlay iframe").attr("src", " ");e(".nivo-lightbox-overlay iframe").remove();
      }e(".nivo-lightbox-prev").off("click");e(".nivo-lightbox-next").off("click");e(".nivo-lightbox-content").empty();this.options.afterHideLightbox.call(this);
    }, isHidpi: function isHidpi() {
      var e = "(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";if (t.devicePixelRatio > 1) return true;if (t.matchMedia && t.matchMedia(e).matches) return true;return false;
    } };e.fn[i] = function (t) {
    return this.each(function () {
      if (!e.data(this, i)) {
        e.data(this, i, new o(this, t));
      }
    });
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Shuffle.js by @Vestride
 * Categorize, sort, and filter a responsive grid of items.
 * Dependencies: jQuery 1.9+, Modernizr 2.6.2+
 * @license MIT license
 * @version 3.0.0
 */
!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(21)], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : window.Shuffle = a(window.jQuery, window.Modernizr);
}(function (a, b, c) {
  "use strict";

  function d(a) {
    return a ? a.replace(/([A-Z])/g, function (a, b) {
      return "-" + b.toLowerCase();
    }).replace(/^ms-/, "-ms-") : "";
  }function e(b, c, d) {
    var e,
        f,
        g,
        h = null,
        i = 0;d = d || {};var j = function j() {
      i = d.leading === !1 ? 0 : a.now(), h = null, g = b.apply(e, f), e = f = null;
    };return function () {
      var k = a.now();i || d.leading !== !1 || (i = k);var l = c - (k - i);return e = this, f = arguments, 0 >= l || l > c ? (clearTimeout(h), h = null, i = k, g = b.apply(e, f), e = f = null) : h || d.trailing === !1 || (h = setTimeout(j, l)), g;
    };
  }function f(a, b, c) {
    for (var d = 0, e = a.length; e > d; d++) {
      if (b.call(c, a[d], d, a) === {}) return;
    }
  }function g(b, c, d) {
    return setTimeout(a.proxy(b, c), d);
  }function h(a) {
    return Math.max.apply(Math, a);
  }function i(a) {
    return Math.min.apply(Math, a);
  }function j(b) {
    return a.isNumeric(b) ? b : 0;
  }function k(a) {
    var b,
        c,
        d = a.length;if (!d) return a;for (; --d;) {
      c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
    }return a;
  }if ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b))) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");var l = b.prefixed("transition"),
      m = b.prefixed("transitionDelay"),
      n = b.prefixed("transitionDuration"),
      o = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[l],
      p = b.prefixed("transform"),
      q = d(p),
      r = b.csstransforms && b.csstransitions,
      s = b.csstransforms3d,
      t = "shuffle",
      u = .3,
      v = "all",
      w = "groups",
      x = 1,
      y = .001,
      z = function z(a, b) {
    this.x = j(a), this.y = j(b);
  };z.equals = function (a, b) {
    return a.x === b.x && a.y === b.y;
  };var A = 0,
      B = a(window),
      C = function C(b, c) {
    c = c || {}, a.extend(this, C.options, c, C.settings), this.$el = a(b), this.element = b, this.unique = "shuffle_" + A++, this._fire(C.EventType.LOADING), this._init(), g(function () {
      this.initialized = !0, this._fire(C.EventType.DONE);
    }, this, 16);
  };return C.EventType = { LOADING: "loading", DONE: "done", LAYOUT: "layout", REMOVED: "removed" }, C.ClassName = { BASE: t, SHUFFLE_ITEM: "shuffle-item", FILTERED: "filtered", CONCEALED: "concealed" }, C.options = { group: v, speed: 250, easing: "ease-out", itemSelector: "", sizer: null, gutterWidth: 0, columnWidth: 0, delimeter: null, buffer: 0, initialSort: null, throttle: e, throttleTime: 300, sequentialFadeDelay: 150, supported: r }, C.settings = { useSizer: !1, itemCss: { position: "absolute", top: 0, left: 0, visibility: "visible" }, revealAppendedDelay: 300, lastSort: {}, lastFilter: v, enabled: !0, destroyed: !1, initialized: !1, _animations: [], styleQueue: [] }, C.Point = z, C._getItemTransformString = function (a, b) {
    return s ? "translate3d(" + a.x + "px, " + a.y + "px, 0) scale3d(" + b + ", " + b + ", 1)" : "translate(" + a.x + "px, " + a.y + "px) scale(" + b + ")";
  }, C._getNumberStyle = function (b, c) {
    return C._getFloat(a(b).css(c));
  }, C._getInt = function (a) {
    return j(parseInt(a, 10));
  }, C._getFloat = function (a) {
    return j(parseFloat(a));
  }, C._getOuterWidth = function (a, b) {
    var c = a.offsetWidth;if (b) {
      var d = C._getNumberStyle(a, "marginLeft"),
          e = C._getNumberStyle(a, "marginRight");c += d + e;
    }return c;
  }, C._getOuterHeight = function (a, b) {
    var c = a.offsetHeight;if (b) {
      var d = C._getNumberStyle(a, "marginTop"),
          e = C._getNumberStyle(a, "marginBottom");c += d + e;
    }return c;
  }, C._skipTransition = function (a, b, c) {
    var d = a.style[n];a.style[n] = "0ms", b.call(c);var e = a.offsetWidth;e = null, a.style[n] = d;
  }, C.prototype._init = function () {
    this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(C.ClassName.BASE), this._initItems(), B.on("resize." + t + "." + this.unique, this._getResizeFunction());var a = this.$el.css(["position", "overflow"]),
        b = C._getOuterWidth(this.element);this._validateStyles(a), this._setColumns(b), this.shuffle(this.group, this.initialSort), this.supported && g(function () {
      this._setTransitions(), this.element.style[l] = "height " + this.speed + "ms " + this.easing;
    }, this);
  }, C.prototype._getResizeFunction = function () {
    var b = a.proxy(this._onResize, this);return this.throttle ? this.throttle(b, this.throttleTime) : b;
  }, C.prototype._getElementOption = function (a) {
    return "string" == typeof a ? this.$el.find(a)[0] || null : a && a.nodeType && 1 === a.nodeType ? a : a && a.jquery ? a[0] : null;
  }, C.prototype._validateStyles = function (a) {
    "static" === a.position && (this.element.style.position = "relative"), "hidden" !== a.overflow && (this.element.style.overflow = "hidden");
  }, C.prototype._filter = function (a, b) {
    a = a || this.lastFilter, b = b || this.$items;var c = this._getFilteredSets(a, b);return this._toggleFilterClasses(c.filtered, c.concealed), this.lastFilter = a, "string" == typeof a && (this.group = a), c.filtered;
  }, C.prototype._getFilteredSets = function (b, c) {
    var d = a(),
        e = a();return b === v ? d = c : f(c, function (c) {
      var f = a(c);this._doesPassFilter(b, f) ? d = d.add(f) : e = e.add(f);
    }, this), { filtered: d, concealed: e };
  }, C.prototype._doesPassFilter = function (b, c) {
    if (a.isFunction(b)) return b.call(c[0], c, this);var d = c.data(w),
        e = this.delimeter && !a.isArray(d) ? d.split(this.delimeter) : d;return a.inArray(b, e) > -1;
  }, C.prototype._toggleFilterClasses = function (a, b) {
    a.removeClass(C.ClassName.CONCEALED).addClass(C.ClassName.FILTERED), b.removeClass(C.ClassName.FILTERED).addClass(C.ClassName.CONCEALED);
  }, C.prototype._initItems = function (a) {
    a = a || this.$items, a.addClass([C.ClassName.SHUFFLE_ITEM, C.ClassName.FILTERED].join(" ")), a.css(this.itemCss).data("point", new z()).data("scale", x);
  }, C.prototype._updateItemCount = function () {
    this.visibleItems = this._getFilteredItems().length;
  }, C.prototype._setTransition = function (a) {
    a.style[l] = q + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing;
  }, C.prototype._setTransitions = function (a) {
    a = a || this.$items, f(a, function (a) {
      this._setTransition(a);
    }, this);
  }, C.prototype._setSequentialDelay = function (a) {
    this.supported && f(a, function (a, b) {
      a.style[m] = "0ms," + (b + 1) * this.sequentialFadeDelay + "ms";
    }, this);
  }, C.prototype._getItems = function () {
    return this.$el.children(this.itemSelector);
  }, C.prototype._getFilteredItems = function () {
    return this.$items.filter("." + C.ClassName.FILTERED);
  }, C.prototype._getConcealedItems = function () {
    return this.$items.filter("." + C.ClassName.CONCEALED);
  }, C.prototype._getColumnSize = function (b, c) {
    var d;return d = a.isFunction(this.columnWidth) ? this.columnWidth(b) : this.useSizer ? C._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? C._getOuterWidth(this.$items[0], !0) : b, 0 === d && (d = b), d + c;
  }, C.prototype._getGutterSize = function (b) {
    var c;return c = a.isFunction(this.gutterWidth) ? this.gutterWidth(b) : this.useSizer ? C._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth;
  }, C.prototype._setColumns = function (a) {
    var b = a || C._getOuterWidth(this.element),
        c = this._getGutterSize(b),
        d = this._getColumnSize(b, c),
        e = (b + c) / d;Math.abs(Math.round(e) - e) < u && (e = Math.round(e)), this.cols = Math.max(Math.floor(e), 1), this.containerWidth = b, this.colWidth = d;
  }, C.prototype._setContainerSize = function () {
    this.$el.css("height", this._getContainerSize());
  }, C.prototype._getContainerSize = function () {
    return h(this.positions);
  }, C.prototype._fire = function (a, b) {
    this.$el.trigger(a + "." + t, b && b.length ? b : [this]);
  }, C.prototype._resetCols = function () {
    var a = this.cols;for (this.positions = []; a--;) {
      this.positions.push(0);
    }
  }, C.prototype._layout = function (a, b) {
    f(a, function (a) {
      this._layoutItem(a, !!b);
    }, this), this._processStyleQueue(), this._setContainerSize();
  }, C.prototype._layoutItem = function (b, c) {
    var d = a(b),
        e = d.data(),
        f = e.point,
        g = e.scale,
        h = { width: C._getOuterWidth(b, !0), height: C._getOuterHeight(b, !0) },
        i = this._getItemPosition(h);z.equals(f, i) && g === x || (e.point = i, e.scale = x, this.styleQueue.push({ $item: d, point: i, scale: x, opacity: c ? 0 : 1, skipTransition: c, callfront: function callfront() {
        c || d.css("visibility", "visible");
      }, callback: function callback() {
        c && d.css("visibility", "hidden");
      } }));
  }, C.prototype._getItemPosition = function (a) {
    for (var b = this._getColumnSpan(a.width, this.colWidth, this.cols), c = this._getColumnSet(b, this.cols), d = this._getShortColumn(c, this.buffer), e = new z(Math.round(this.colWidth * d), Math.round(c[d])), f = c[d] + a.height, g = this.cols + 1 - c.length, h = 0; g > h; h++) {
      this.positions[d + h] = f;
    }return e;
  }, C.prototype._getColumnSpan = function (a, b, c) {
    var d = a / b;return Math.abs(Math.round(d) - d) < u && (d = Math.round(d)), Math.min(Math.ceil(d), c);
  }, C.prototype._getColumnSet = function (a, b) {
    if (1 === a) return this.positions;for (var c = b + 1 - a, d = [], e = 0; c > e; e++) {
      d[e] = h(this.positions.slice(e, e + a));
    }return d;
  }, C.prototype._getShortColumn = function (a, b) {
    for (var c = i(a), d = 0, e = a.length; e > d; d++) {
      if (a[d] >= c - b && a[d] <= c + b) return d;
    }return 0;
  }, C.prototype._shrink = function (b) {
    var c = b || this._getConcealedItems();f(c, function (b) {
      var c = a(b),
          d = c.data();d.scale !== y && (d.scale = y, this.styleQueue.push({ $item: c, point: d.point, scale: y, opacity: 0, callback: function callback() {
          c.css("visibility", "hidden");
        } }));
    }, this);
  }, C.prototype._onResize = function () {
    if (this.enabled && !this.destroyed && !this.isTransitioning) {
      var a = C._getOuterWidth(this.element);a !== this.containerWidth && this.update();
    }
  }, C.prototype._getStylesForTransition = function (a) {
    var b = { opacity: a.opacity };return this.supported ? b[p] = C._getItemTransformString(a.point, a.scale) : (b.left = a.point.x, b.top = a.point.y), b;
  }, C.prototype._transition = function (b) {
    var c = this._getStylesForTransition(b);this._startItemAnimation(b.$item, c, b.callfront || a.noop, b.callback || a.noop);
  }, C.prototype._startItemAnimation = function (b, c, d, e) {
    function f(b) {
      b.target === b.currentTarget && (a(b.target).off(o, f), e());
    }if (d(), !this.initialized) return b.css(c), void e();if (this.supported) b.css(c), b.on(o, f);else {
      var g = b.stop(!0).animate(c, this.speed, "swing", e);this._animations.push(g.promise());
    }
  }, C.prototype._processStyleQueue = function (b) {
    var c = a();f(this.styleQueue, function (a) {
      a.skipTransition ? this._styleImmediately(a) : (c = c.add(a.$item), this._transition(a));
    }, this), c.length > 0 && this.initialized ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(c, o, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : b || g(this._layoutEnd, this), this.styleQueue.length = 0;
  }, C.prototype._styleImmediately = function (a) {
    C._skipTransition(a.$item[0], function () {
      a.$item.css(this._getStylesForTransition(a));
    }, this);
  }, C.prototype._movementFinished = function () {
    this.isTransitioning = !1, this._layoutEnd();
  }, C.prototype._layoutEnd = function () {
    this._fire(C.EventType.LAYOUT);
  }, C.prototype._addItems = function (a, b, c) {
    this._initItems(a), this._setTransitions(a), this.$items = this._getItems(), this._shrink(a), f(this.styleQueue, function (a) {
      a.skipTransition = !0;
    }), this._processStyleQueue(!0), b ? this._addItemsToEnd(a, c) : this.shuffle(this.lastFilter);
  }, C.prototype._addItemsToEnd = function (a, b) {
    var c = this._filter(null, a),
        d = c.get();this._updateItemCount(), this._layout(d, !0), b && this.supported && this._setSequentialDelay(d), this._revealAppended(d);
  }, C.prototype._revealAppended = function (b) {
    g(function () {
      f(b, function (b) {
        var c = a(b);this._transition({ $item: c, opacity: 1, point: c.data("point"), scale: x });
      }, this), this._whenCollectionDone(a(b), o, function () {
        a(b).css(m, "0ms"), this._movementFinished();
      });
    }, this, this.revealAppendedDelay);
  }, C.prototype._whenCollectionDone = function (b, c, d) {
    function e(b) {
      b.target === b.currentTarget && (a(b.target).off(c, e), f++, f === g && d.call(h));
    }var f = 0,
        g = b.length,
        h = this;b.on(c, e);
  }, C.prototype._whenAnimationsDone = function (b) {
    a.when.apply(null, this._animations).always(a.proxy(function () {
      this._animations.length = 0, b.call(this);
    }, this));
  }, C.prototype.shuffle = function (a, b) {
    this.enabled && !this.isTransitioning && (a || (a = v), this._filter(a), this._updateItemCount(), this._shrink(), this.sort(b));
  }, C.prototype.sort = function (a) {
    if (this.enabled && !this.isTransitioning) {
      this._resetCols();var b = a || this.lastSort,
          c = this._getFilteredItems().sorted(b);this._layout(c), this.lastSort = b;
    }
  }, C.prototype.update = function (a) {
    this.enabled && !this.isTransitioning && (a || this._setColumns(), this.sort());
  }, C.prototype.layout = function () {
    this.update(!0);
  }, C.prototype.appended = function (a, b, c) {
    this._addItems(a, b === !0, c !== !1);
  }, C.prototype.disable = function () {
    this.enabled = !1;
  }, C.prototype.enable = function (a) {
    this.enabled = !0, a !== !1 && this.update();
  }, C.prototype.remove = function (b) {
    function c() {
      b.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(C.EventType.REMOVED, [b, this]), b = null;
    }b.length && b.jquery && (this._toggleFilterClasses(a(), b), this._shrink(b), this.sort(), this.$el.one(C.EventType.LAYOUT + "." + t, a.proxy(c, this)));
  }, C.prototype.destroy = function () {
    B.off("." + this.unique), this.$el.removeClass(t).removeAttr("style").removeData(t), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([C.ClassName.CONCEALED, C.ClassName.FILTERED, C.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this.destroyed = !0;
  }, a.fn.shuffle = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);return this.each(function () {
      var d = a(this),
          e = d.data(t);e ? "string" == typeof b && e[b] && e[b].apply(e, c) : (e = new C(this, b), d.data(t, e));
    });
  }, a.fn.sorted = function (b) {
    var d = a.extend({}, a.fn.sorted.defaults, b),
        e = this.get(),
        f = !1;return e.length ? d.randomize ? k(e) : (a.isFunction(d.by) && e.sort(function (b, e) {
      if (f) return 0;var g = d.by(a(b)),
          h = d.by(a(e));return g === c && h === c ? (f = !0, 0) : h > g || "sortFirst" === g || "sortLast" === h ? -1 : g > h || "sortLast" === g || "sortFirst" === h ? 1 : 0;
    }), f ? this.get() : (d.reverse && e.reverse(), e)) : [];
  }, a.fn.sorted.defaults = { reverse: !1, by: null, randomize: !1 }, C;
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function ($) {
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function (xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;

		if (outerHeight) {
			getHeight = function getHeight(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function getHeight(jqo) {
				return jqo.height();
			};
		}

		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;

		// function to be called whenever the window is scrolled or resized
		function update() {
			var pos = $window.scrollTop();

			$this.each(function (i) {
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				//get the starting position of each element to have parallax applied to it
				firstTop = $element.offset().top; // Fix: Background Repeat

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$element.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {(function ($) {
	"use strict";

	/*
  * Customly Styled Select input field
  */
	// [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
	// 	new SelectFx(el);
	// } );

	/*
  * On Parallax for .parallax class
  */

	$('.parallax').parallax("50%", 0.2);

	/*
  * Custom Data Fixed
  */
	$('.beactive').addClass('active');
	$('.beactive').removeClass('beactive');

	/*
  * Owl Carousel for Testimonials
  */
	$("#mg-testimonial-slider").owlCarousel({
		navigation: true,
		singleItem: true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		transitionStyle: "backSlide"

	});

	/*
  * Owl Carousel for Client Logo (Small 3 items Only)
  */
	$("#mg-part-logos").owlCarousel({
		items: 3,
		itemsDesktop: [1199, 3],
		navigation: true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

	});

	/*
  * Owl Carousel for Client Logo (Full 5 items Only)
  */
	$("#mg-part-logos-full").owlCarousel({
		items: 5,
		navigation: true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

	});

	/*
  * Owl Carousel for Blog post
  */
	$(".mg-post-images-slider").owlCarousel({
		singleItem: true,
		navigation: true,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

	});

	/*
  * Owl Carousel for Gallery
  */
	var sync1 = $("#mg-gallery");
	var sync2 = $("#mg-gallery-thumb");
	sync1.owlCarousel({
		navigation: true,
		singleItem: true,
		pagination: false,
		afterAction: syncPosition,
		navigationText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']

	});

	sync2.owlCarousel({
		items: 3,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [979, 3],
		itemsTablet: [768, 3],
		itemsMobile: [479, 3],
		navigation: false,
		pagination: false,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		afterInit: function afterInit(el) {
			el.find(".owl-item").eq(0).addClass("synced");
		}

	});

	function syncPosition(el) {
		var current = this.currentItem;
		$("#mg-gallery-thumb").find(".owl-item").removeClass("synced").eq(current).addClass("synced");
		if ($("#mg-gallery-thumb").data("owlCarousel") !== undefined) {
			center(current);
		}
	}

	sync2.on("click", ".owl-item", function (e) {
		e.preventDefault();
		var number = $(this).data("owlItem");
		sync1.trigger("owl.goTo", number);
	});

	function center(number) {
		var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
		var num = number;
		var found = false;
		for (var i in sync2visible) {
			if (num === sync2visible[i]) {
				var found = true;
			}
		}

		if (found === false) {
			if (num > sync2visible[sync2visible.length - 1]) {
				sync2.trigger("owl.goTo", num - sync2visible.length + 2);
			} else {
				if (num - 1 === -1) {
					num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if (num === sync2visible[sync2visible.length - 1]) {
			sync2.trigger("owl.goTo", sync2visible[1]);
		} else if (num === sync2visible[0]) {
			sync2.trigger("owl.goTo", num - 1);
		}
	}

	/*
  * Room Search form Check in and out Datepicker
  */
	$('.input-group.mg-check-in').datepicker({
		startDate: "dateToday",
		autoclose: true,
		format: "yyyy-mm-dd"
	});

	$('.input-group.mg-check-in').on('hide', function (e) {

		if (e.dates.length) {
			var strDate = e.date;
			strDate.setDate(strDate.getDate() + 1);

			// $('.mg-check-out').datepicker('clearDates');
			$('.mg-check-out').datepicker('setStartDate', strDate);
		}

		$(e.currentTarget).removeClass('focus');
	});

	$('.input-group.mg-check-in').on('show', function (e) {

		$(e.currentTarget).addClass('focus');
	});

	$('.input-group.mg-check-out').on('show', function (e) {

		$(e.currentTarget).addClass('focus');
	});

	$('.input-group.mg-check-out').on('hide', function (e) {

		$(e.currentTarget).removeClass('focus');
	});

	$('.input-group.mg-check-in').on('changeDate', function (e) {

		if (e.dates.length) {
			var inDate = e.date,
			    outDate = $('.mg-check-out').datepicker('getDate');

			if (outDate && inDate >= outDate) {
				$('.mg-check-out').datepicker('clearDates');
			}
		} else {
			$('.mg-check-out').datepicker('clearDates');
		}
	});

	$('.input-group.mg-check-out').datepicker({
		startDate: "dateToday",
		autoclose: true,
		format: "yyyy-mm-dd"
	});

	// Sticky Header
	$(window).ready(function () {
		sticky_check(this);
	});
	$(window).scroll(function () {
		sticky_check(this);
	});

	$(window).resize(function () {
		sticky_check(this);
	});

	function sticky_check($this) {
		if ($(window).width() >= 767) {
			if ($($this).scrollTop() > 150) {
				if (!$('.sticky-on-fixed').length && !$('.header.sticky').hasClass('transp')) {
					$('body').prepend('<div class="sticky-on-fixed" style="height:' + $('.header.sticky').height() + 'px"></div>');
				};

				$('.header.sticky').addClass("sticky-on");
			} else {
				$('.header.sticky').removeClass("sticky-on");

				$('.sticky-on-fixed').remove();
			}
		} else {
			$('.header.sticky').removeClass("sticky-on");
			$('.sticky-on-fixed').remove();
		}
	}

	/*
  * Single room review ratting
  */
	$('#mg-star-position').on('starrr:change', function (e, value) {
		$('#mg-star-position-input').val(value);
	});

	$('#mg-star-comfort').on('starrr:change', function (e, value) {
		$('#mg-star-comfort-input').val(value);
	});

	$('#mg-star-price').on('starrr:change', function (e, value) {
		$('#mg-star-price-input').val(value);
	});

	$('#mg-star-quality').on('starrr:change', function (e, value) {
		$('#mg-star-quality-input').val(value);
	});

	/*
  * Nivo Lightbox for gallery
  */
	$('.mg-gallery-item a').nivoLightbox({ effect: 'fadeScale' });
})(jQuery);

$(window).load(function () {
	/*
  * Gallery Filter with Shuffle
  */
	var $grid = $('#mg-grid'),
	    $sizer = $grid.find('.shuffle__sizer'),
	    $filterType = $('#mg-filter input[name="filter"]');

	$grid.shuffle({
		itemSelector: '.mg-gallery-item',
		sizer: $sizer
	});

	$grid.shuffle('shuffle', $('#mg-filter input[name="filter"]:checked').val());

	$('label.btn-main').removeClass('btn-main');
	$('input[name="filter"]:checked').parent().addClass('btn-main');

	$filterType.change(function (e) {
		var group = $('#mg-filter input[name="filter"]:checked').val();

		$grid.shuffle('shuffle', group);

		$('label.btn-main').removeClass('btn-main');
		$('input[name="filter"]:checked').parent().addClass('btn-main');
	});
});

/*
 * Preloader
 */
$(window).load(function () {
	$('.preloader').fadeOut("slow");
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(0)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
    sliderResponsive();
    $(window).resize(function () {
        sliderResponsive();
    });

    function sliderResponsive() {
        if ($('#mega-slider').css('position') == 'relative') {
            var searcher = $('#mega-slider .mg-book-now').clone();
            $(searcher).insertAfter('#mega-slider');
            $('#mega-slider .mg-book-now').remove();

            $('.input-group.mg-check-in').datepicker({
                startDate: "dateToday",
                autoclose: true,
                format: "yyyy-mm-dd"
            });

            $('.input-group.mg-check-out').datepicker({
                startDate: "dateToday",
                autoclose: true,
                format: "yyyy-mm-dd"
            });
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
    $.ajax({
        url: '/api/currencies',
        type: 'GET',
        success: function success(currencies) {
            // console.log(currencies[0]);
            localStorage.setItem("currency", JSON.stringify(currencies[0]));
            if ($('.currency-sign').length > 0) {
                $('.currency-sign').text(currencies[0].sign);
            }
        }
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
    $.ajax({
        url: '/api/rates',
        type: 'GET',
        success: function success(rates) {
            console.log(rates);
            // localStorage.setItem("currency", JSON.stringify(rates[0]));
            // if($('.currency-sign').length > 0){
            //     $('.currency-sign').text(rates[0].sign);
            // }
        }
    });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dates_dates_js__ = __webpack_require__(19);
/**
 * Module to convert dates to human format
 */


$(document).ready(function () {
    /*
     * Vars to identify what page we are
     */
    var currentPage = 1;
    var totalPages = 0;

    /*
     * - Search aptos from home header form
     * - Redirect to booking page
     */
    $('body').on('click', '#btn-search-aptos', function (e) {
        e.preventDefault();
        var checkIn = $('input[name="checkin"]'),
            checkOut = $('input[name="checkout"]'),
            type = $('select[name="type"]'),
            checkInVal = checkIn.val(),
            checkOutVal = checkOut.val(),
            typeVal = type.val(),
            nights = Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["a" /* calculateNights */])(checkInVal, checkOutVal);

        if (checkInVal.length == 0) {
            checkIn.addClass('error');
            checkIn.siblings('.input-group-addon').addClass('error');
        } else {
            checkIn.removeClass('error');
            checkIn.siblings('.input-group-addon').removeClass('error');
        }

        if (checkOutVal.length == 0) {
            checkOut.addClass('error');
            checkOut.siblings('.input-group-addon').addClass('error');
        } else {
            checkOut.removeClass('error');
            checkOut.siblings('.input-group-addon').removeClass('error');
        }

        if (typeVal == null) {
            type.siblings('span').addClass('error');
        } else {
            type.siblings('span').removeClass('error');
        }

        if (checkInVal.length != 0 && checkOutVal.length != 0 && typeVal != null) {
            localStorage.setItem('checkin', checkInVal);
            localStorage.setItem('checkout', checkOutVal);
            localStorage.setItem('atpoType', typeVal);
            localStorage.setItem('nights', nights);

            if (locale == 'EN') {
                location.href = '/en/booking';
            } else if (locale == 'ES') {
                location.href = '/es/reservacion';
            }
        }
    });

    /*
     * Call api to search aptos with date parameters
     */
    var checkIn = localStorage.getItem('checkin'),
        checkOut = localStorage.getItem('checkout'),
        atpoType = localStorage.getItem('atpoType'),
        nights = localStorage.getItem('nights');

    if ($("#list-found-aptos").length > 0) {
        getAptos();
    }

    /*
     * Function to get apartments
     */
    function getAptos() {
        $('#loader').show();
        var ajax = $.ajax({
            url: '/api/apartments',
            type: 'GET',
            data: { checkin: checkIn, checkout: checkOut, type: atpoType, nights: nights, page: currentPage, items_per_page: 5 }
        }).done(function (data) {
            $('#loader').hide();
            $('#list-found-aptos').html('');
            totalPages = data.pagination.pages;
            drawAptos(data);
        });

        return ajax;
    }

    /*
     * Function to drawn the found aptos
     */
    function drawAptos(data) {
        var template = $('#apto-template');

        /* print dates */
        $('#sa-check-in').text(Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["b" /* converDate */])(checkIn));
        $('#sa-check-out').text(Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["b" /* converDate */])(checkOut));

        $(data.apartments).each(function (index, el) {
            var lang = el.lang['' + locale + ''];

            if (lang != undefined) {
                if (el.thumbnail != null) {
                    $('#apto-template .sa-thumbnail').attr('src', mainUrl + '/' + el.thumbnail.path);
                }
                $('#apto-template .mg-avl-room-title a').text(lang.name);
                $('#apto-template .sa-apto-description').text(lang.short_description);
                $('#apto-template .sa-apto-price .price').text(el.price);

                if (locale == 'EN') {
                    $('#apto-template .sa-apto-link').attr('href', '/en/apartment/' + el.id_apartment);
                } else if (locale == 'ES') {
                    $('#apto-template .sa-apto-link').attr('href', '/es/apartamento/' + el.id_apartment);
                }

                /* Amenities */
                var amenHtml = '<ul>';
                el.amenities.forEach(function (amenity, index) {
                    if (index < 6) {
                        amenHtml += '<li><i class="' + amenity.icon + '"></i>' + amenity.lang['' + locale + ''].name + '</li>';
                    }
                });
                amenHtml += '</ul>';

                $('#apto-template .btn-next-tab').attr('id', 'apto_' + el.id_apartment);

                $('#apto-template .mg-room-fecilities .col-sm-12').html(amenHtml);
                $('#list-found-aptos').append('<div class="mg-avl-room">' + template.html() + '</div>');

                _apartments.push({
                    id: el.id_apartment,
                    name: lang.name,
                    price: el.price,
                    image: el.thumbnail !== null ? el.thumbnail.path : '#'
                });
            }
        });

        drawPaginator(data.pagination.pages);

        /**
         * Select apartment automatically
         */
        if (apartmentId) {
            if ($('#apto_' + apartmentId).length) {
                $('#apto_' + apartmentId).trigger('click');
            }
        }
    }

    /*
     * Select page
     */
    $('.pagination').on('click', 'li', function (e) {
        e.preventDefault();
        var page = $(this).children('a').attr('href').split('#')[1];

        if (page == "prev") {
            if (currentPage > 1) {
                currentPage--;
            }
        } else if (page == "next") {
            if (currentPage < totalPages) {
                currentPage++;
            }
        } else {
            currentPage = page;
        }

        getAptos().then(function (data) {
            $('.pagination a[href="#' + currentPage + '"]').parent('li').addClass('sa-active');
            $('.pagination a[href="#' + currentPage + '"]').parent('li').siblings('li').removeClass('sa-active');
        });
    });

    /*
     * Function to drawn paginator
     */
    function drawPaginator(pages) {
        if (currentPage == 1) {
            var html = '<li><a href="#prev" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>';
            for (var i = 0; i < pages; i++) {
                var page = i + 1;
                var active = i == 0 ? 'sa-active' : '';
                html += '<li class="' + active + '"><a href="#' + page + '">' + page + '</a></li>';
            }
            html += '<li><a href="#next" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>';
            $('.pagination').html(html);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ar": 22,
	"./ar.js": 22,
	"./az": 23,
	"./az.js": 23,
	"./bn": 24,
	"./bn.js": 24,
	"./cs": 25,
	"./cs.js": 25,
	"./de": 26,
	"./de.js": 26,
	"./el": 27,
	"./el.js": 27,
	"./es": 28,
	"./es.js": 28,
	"./fa": 29,
	"./fa.js": 29,
	"./fr": 30,
	"./fr.js": 30,
	"./hi": 31,
	"./hi.js": 31,
	"./hu": 32,
	"./hu.js": 32,
	"./id": 33,
	"./id.js": 33,
	"./it": 34,
	"./it.js": 34,
	"./ja": 35,
	"./ja.js": 35,
	"./jv": 36,
	"./jv.js": 36,
	"./ko": 37,
	"./ko.js": 37,
	"./my": 38,
	"./my.js": 38,
	"./nl": 39,
	"./nl.js": 39,
	"./pa-in": 40,
	"./pa-in.js": 40,
	"./pl": 41,
	"./pl.js": 41,
	"./pt": 42,
	"./pt.js": 42,
	"./ro": 43,
	"./ro.js": 43,
	"./ru": 44,
	"./ru.js": 44,
	"./sr": 45,
	"./sr.js": 45,
	"./th": 46,
	"./th.js": 46,
	"./tr": 47,
	"./tr.js": 47,
	"./uk": 48,
	"./uk.js": 48,
	"./uz": 49,
	"./uz.js": 49,
	"./vi": 50,
	"./vi.js": 50,
	"./zh-cn": 51,
	"./zh-cn.js": 51,
	"./zh-tw": 52,
	"./zh-tw.js": 52
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 71;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fb_sdk__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fb_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fb_sdk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_messages_js__ = __webpack_require__(3);
var validate = __webpack_require__(2);


/**
 * Modules to show error and success messages
 */


/** Setup Facebook **/
var Facebook = __WEBPACK_IMPORTED_MODULE_0_fb_sdk___default()({
    appId: faceboo_app_id,
    status: true,
    version: 'v2.8'
});

$(document).ready(function () {

    /*
     * Validate form
     */
    if ($('#sa-login').length) {
        $('#sa-login').validate({
            submitHandler: function submitHandler(form) {
                login();
            }
        });
    }

    /*
     * Function to login
     */
    function login() {
        $('#loader').show();
        $.ajax({
            url: '/api/user/login',
            type: 'POST',
            data: $('#sa-login').serialize(),
            success: function success(reply) {
                $('#loader').hide();
                if (reply.success != null && reply.success == false) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__messages_messages_js__["a" /* errorMessage */])($('#sa-login'), reply.message);
                } else {
                    localStorage.setItem('api_token', reply.api_token);
                    localStorage.setItem('id_user', reply.id_user);
                    localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                    location.href = myBookingsLink;
                }
            }
        });
    }

    /*
     * Login with facebook
     */
    $('#btn-facebook-login-l, #btn-facebook-login-r').click(function (event) {
        event.preventDefault();
        var data = {};
        Facebook.login(function (response) {
            $('#loader').show();
            if (response.status == 'connected') {
                data.fb_exchange_token = response.authResponse.accessToken;
                Facebook.api('/me?fields=name,email', function (response) {
                    data.name = response.name;
                    data.email = response.email;
                    $.ajax({
                        url: '/api/user/facebook/login',
                        type: 'POST',
                        data: data,
                        success: function success(reply) {
                            $('#loader').hide();
                            if (reply.success != null && reply.success == false) {
                                Object(__WEBPACK_IMPORTED_MODULE_1__messages_messages_js__["a" /* errorMessage */])($('#sa-login'), reply.message);
                            } else {
                                localStorage.setItem('api_token', reply.api_token);
                                localStorage.setItem('id_user', reply.id_user);
                                localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                                location.href = myBookingsLink;
                            }
                        }
                    });
                });
            }
        }, { scope: 'public_profile,email' });
    });

    /*
     * Setup and login with Google API
     */
    if ($('#sa-login').length) {
        __webpack_require__(78)().then(function (gapi) {
            var auth2 = null;
            gapi.load('auth2', function () {
                auth2 = gapi.auth2.init({
                    client_id: googleClientId,
                    cookiepolicy: 'single_host_origin'
                });
                attachSignin(document.getElementById('btn-google-login-l'));
                attachSignin(document.getElementById('btn-google-login-r'));
            });

            function attachSignin(element) {
                auth2.attachClickHandler(element, {}, function (googleUser) {
                    $('#loader').show();
                    $.ajax({
                        url: '/api/user/google/login',
                        type: 'POST',
                        data: {
                            token: googleUser.getAuthResponse().id_token
                        },
                        success: function success(reply) {
                            $('#loader').hide();
                            if (reply.success != null && reply.success == false) {
                                Object(__WEBPACK_IMPORTED_MODULE_1__messages_messages_js__["a" /* errorMessage */])($('#sa-login'), reply.message);
                            } else {
                                localStorage.setItem('api_token', reply.api_token);
                                localStorage.setItem('id_user', reply.id_user);
                                localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                                location.href = myBookingsLink;
                            }
                        }
                    });
                }, function (error) {
                    console.log(JSON.stringify(error, undefined, 2));
                });
            }
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadFacebookSDK = __webpack_require__(74);

var _loadFacebookSDK2 = _interopRequireDefault(_loadFacebookSDK);

var _FacebookSDK = __webpack_require__(76);

var _FacebookSDK2 = _interopRequireDefault(_FacebookSDK);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @typedef options
 * @see https://developers.facebook.com
 {
   appId: 'xxxxxxxxxxxxxxxx',
   cookie: true,
   xfbml: true,
   version: 'v2.7'
 }
 */

var facebookAPI = void 0;

/**
 * A factory function used to produce an instance of Facebook SDK and queue function calls and proxy events of the resulting object.
 *
 * @param {FacebookSDK~options} options
 * @returns {Object}
 */

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  if (!facebookAPI) facebookAPI = (0, _loadFacebookSDK2.default)();

  var API = {};

  var APIReady = new Promise(function (resolve, reject) {
    return facebookAPI.then(function (FB) {
      FB.init(options);
      FB.getLoginStatus(function (res) {
        if (res && !res.error) resolve(FB);else reject(FB);
      });
    });
  });

  API = _FacebookSDK2.default.promisify(APIReady);

  return API;
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__(75);

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  /**
   * A promise that is resolved when window.fbAsyncInit is called.
   * The promise is resolved with a reference to window.FB object.
   *
   * @param {Function} resolve
   * @member {Object} APIReady
   */
  var APIReady = new Promise(function (resolve) {
    // The API will call this function when page has finished
    // downloading the JavaScript for the API.
    var previous = window.fbAsyncInit;
    window.fbAsyncInit = function () {
      if (previous) previous();
      resolve(window.FB);
    };
  });

  (0, _loadScript2.default)('https://connect.facebook.net/en_US/sdk.js');

  return APIReady;
};

/***/ }),
/* 75 */
/***/ (function(module, exports) {


module.exports = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0]
  var script = document.createElement('script')

  if (typeof opts === 'function') {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  cb = cb || function() {}

  script.type = opts.type || 'text/javascript'
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true
  script.src = src

  if (opts.attrs) {
    setAttributes(script, opts.attrs)
  }

  if (opts.text) {
    script.text = '' + opts.text
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd
  onend(script, cb)

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script)
}

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null
    cb(null, script)
  }
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null
    cb(new Error('Failed to load ' + this.src), script)
  }
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null
    cb(null, script) // there is no way to catch loading errors in IE8
  }
}


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functionNames = __webpack_require__(77);

var _functionNames2 = _interopRequireDefault(_functionNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FacebookSDK = {};

/**
 * Delays SDK method execution until API is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @param {Promise} fbAPIReady Promise that resolves when player is ready.
 * @returns {Object}
 */
FacebookSDK.promisify = function (fbAPIReady) {
  var functions = {};
  _functionNames2.default.forEach(function (functionName) {
    functions[functionName] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return fbAPIReady.then(function (fb) {
        return fb[functionName].apply(fb, args);
      });
    };
  });
  return functions;
};

exports.default = FacebookSDK;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @see https://developers.facebook.com/docs/javascript/reference/
 */
exports.default = ["__globalCallbacks", "api", "AppEvents", "getLoginStatus", "getAuthResponse", "getAccessToken", "getUserID", "login", "logout", "Canvas", "Event", "Frictionless", "init", "ui", "XFBML"];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** @module google-client-api */

var scriptjs = __webpack_require__( 79 ),
	promise = __webpack_require__( 80 );

var callbacks = [];

global.$$onClientLoad = function() {

	for( var i = 0, len = callbacks.length; i < len; i++ ) {

		doResolve.apply( undefined, callbacks[ i ] );
	}
};

function doResolve( resolve, onComplete ) {

	resolve( global.gapi );

	if( onComplete )
		onComplete( global.gapi );
}


/** 
 * This module is a function which will return a Google Client API object 
 * (https://developers.google.com/api-client-library/javascript/dev/dev_jscript) assynchronously.
 *
 * This function returns a promise. (if you're into promises) Which will return the gapi Object.
 *
 * If you're not into promises then you can simply call this function and pass in a callback object.
 * 
 * @param  {Function} onComplete an optional callback which will return the Google Client API Object.
 * @return {Promise} This function also returns a promise if you're into promises which will
 *                   return the Google Client API Object.
 *
 * @example Using with Promise
 * require( 'google-client-api' )().then( function( gapi ) {
 * 	// Do something with the gapi object
 * });
 *
 * @example Using with callback
 * require( 'google-client-api' )( function( gapi ) {
 * 	// Do something with the gapi object
 * });
 */
module.exports = function( onComplete ) {

	return new promise( function( resolve, reject ) {

		if( global.gapi ) {

			doResolve( resolve, onComplete );
		} else {

			callbacks.push( [ resolve, onComplete ] );

			if( callbacks.length == 1 ) {

				scriptjs( 'https://apis.google.com/js/client.js?onload=$$onClientLoad' );
			}
		}
	});
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4)
__webpack_require__(83)
__webpack_require__(84)
__webpack_require__(85)

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(82);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6???8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20), __webpack_require__(53)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(4)
var asap = __webpack_require__(5)

module.exports = Promise
Promise.prototype.done = function (onFulfilled, onRejected) {
  var self = arguments.length ? this.then.apply(this, arguments) : this
  self.then(null, function (err) {
    asap(function () {
      throw err
    })
  })
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = __webpack_require__(4)
var asap = __webpack_require__(5)

module.exports = Promise

/* Static Functions */

function ValuePromise(value) {
  this.then = function (onFulfilled) {
    if (typeof onFulfilled !== 'function') return this
    return new Promise(function (resolve, reject) {
      asap(function () {
        try {
          resolve(onFulfilled(value))
        } catch (ex) {
          reject(ex);
        }
      })
    })
  }
}
ValuePromise.prototype = Promise.prototype

var TRUE = new ValuePromise(true)
var FALSE = new ValuePromise(false)
var NULL = new ValuePromise(null)
var UNDEFINED = new ValuePromise(undefined)
var ZERO = new ValuePromise(0)
var EMPTYSTRING = new ValuePromise('')

Promise.resolve = function (value) {
  if (value instanceof Promise) return value

  if (value === null) return NULL
  if (value === undefined) return UNDEFINED
  if (value === true) return TRUE
  if (value === false) return FALSE
  if (value === 0) return ZERO
  if (value === '') return EMPTYSTRING

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then
      if (typeof then === 'function') {
        return new Promise(then.bind(value))
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex)
      })
    }
  }

  return new ValuePromise(value)
}

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr)

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([])
    var remaining = args.length
    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then
          if (typeof then === 'function') {
            then.call(val, function (val) { res(i, val) }, reject)
            return
          }
        }
        args[i] = val
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex)
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i])
    }
  })
}

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) { 
    reject(value);
  });
}

Promise.race = function (values) {
  return new Promise(function (resolve, reject) { 
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    })
  });
}

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
}


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//This file contains then/promise specific extensions that are only useful for node.js interop

var Promise = __webpack_require__(4)
var asap = __webpack_require__(5)

module.exports = Promise

/* Static Functions */

Promise.denodeify = function (fn, argumentCount) {
  argumentCount = argumentCount || Infinity
  return function () {
    var self = this
    var args = Array.prototype.slice.call(arguments)
    return new Promise(function (resolve, reject) {
      while (args.length && args.length > argumentCount) {
        args.pop()
      }
      args.push(function (err, res) {
        if (err) reject(err)
        else resolve(res)
      })
      var res = fn.apply(self, args)
      if (res && (typeof res === 'object' || typeof res === 'function') && typeof res.then === 'function') {
        resolve(res)
      }
    })
  }
}
Promise.nodeify = function (fn) {
  return function () {
    var args = Array.prototype.slice.call(arguments)
    var callback = typeof args[args.length - 1] === 'function' ? args.pop() : null
    var ctx = this
    try {
      return fn.apply(this, arguments).nodeify(callback, ctx)
    } catch (ex) {
      if (callback === null || typeof callback == 'undefined') {
        return new Promise(function (resolve, reject) { reject(ex) })
      } else {
        asap(function () {
          callback.call(ctx, ex)
        })
      }
    }
  }
}

Promise.prototype.nodeify = function (callback, ctx) {
  if (typeof callback != 'function') return this

  this.then(function (value) {
    asap(function () {
      callback.call(ctx, null, value)
    })
  }, function (err) {
    asap(function () {
      callback.call(ctx, err)
    })
  })
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_messages_js__ = __webpack_require__(3);
var validate = __webpack_require__(2);

/**
 * Modules to show error and success messages
 */


$(document).ready(function () {
    /** Validate form **/
    if ($('#sa-register').length) {
        $('#sa-register').validate({
            rules: {
                password: {
                    minlength: 5
                },
                password_confirm: {
                    minlength: 5,
                    equalTo: "#password"
                }
            },
            submitHandler: function submitHandler(form) {
                register();
            }
        });
    }

    /** Function to register **/
    function register() {
        $('#loader').show();
        $.ajax({
            url: '/api/user',
            type: 'POST',
            data: $('#sa-register').serialize(),
            success: function success(reply) {
                $('#loader').hide();
                if (reply.success != null && reply.success == false) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__messages_messages_js__["a" /* errorMessage */])($('#sa-login'), reply.message);
                } else {
                    localStorage.setItem('api_token', reply.api_token);
                    localStorage.setItem('id_user', reply.id_user);
                    localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                    location.href = myBookingsLink;
                }
            }
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_messages_js__ = __webpack_require__(3);
/**
 * Modules to show error and success messages
 */


$(document).ready(function () {
    if ($('#user-detail-form').length) {

        /*
         * Function to update users
         */
        var updateUser = function updateUser(form) {
            $('#loader').show();
            $.ajax({
                url: '/api/user/',
                type: 'PUT',
                data: {
                    id_user: localStorage.getItem('id_user'),
                    api_token: localStorage.getItem('api_token'),
                    firstname: $('input[name="firstname"]').val(),
                    lastname: $('input[name="lastname"]').val(),
                    birthdate: $('input[name="birthdate"]').val(),
                    gender: $('select[name="gender"]').val(),
                    email: $('input[name="email"]').val()
                },
                success: function success(reply) {
                    $('#loader').hide();
                    if (reply.success != null && reply.success == false) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__messages_messages_js__["a" /* errorMessage */])($('#user-detail-form'), reply.message);
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_0__messages_messages_js__["b" /* successMessage */])($('#user-detail-form'), 'Updated');
                    }
                }
            });
        };

        /*
         * Datepicker for birthdate field
         */
        $('input[name="birthdate"]').datepicker({
            autoClose: true,
            format: 'yyyy-mm-dd'
        });

        /*
         * Get user details
         */
        $('#loader').show();
        $.ajax({
            url: '/api/user/',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token')
            },
            success: function success(reply) {
                $('#loader').hide();
                $('.mg-sec-left-title').text(reply.firstname + ' ' + reply.lastname);
                $('input[name="firstname"]').val(reply.firstname);
                $('input[name="lastname"]').val(reply.lastname);
                $('input[name="birthdate"]').val(reply.birthdate);
                $('select[name="gender"]').val(reply.gender);
                $('input[name="email"]').val(reply.email);
            }
        });

        /*
         * Validate form to update users
         */
        $('#user-detail-form').validate({
            submitHandler: function submitHandler(form) {
                updateUser(form);
            }
        });
    }

    if (localStorage.getItem('api_token')) {
        $('#login-menu-item').hide();
        $('#user-menu-item').removeClass('hidden');
    }

    /*
     * logout
     */
    $('#logout').click(function (e) {
        e.preventDefault();
        $('#loader').show();
        $.ajax({
            url: '/api/logout/',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token')
            },
            success: function success(reply) {
                $('#loader').hide();
                if (reply.success != null && reply.success == true) {
                    localStorage.removeItem('id_user');
                    localStorage.removeItem('api_token');
                    localStorage.removeItem('user_name');
                    location.href = mainUrl;
                }
            }
        });
    });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_messages_js__ = __webpack_require__(3);
var validate = __webpack_require__(2);

/**
 * Modules to show error and success messages
 */


$(document).ready(function () {

    /** Validate forms **/
    if ($('#sa-contact-form').length > 0) {
        $('#sa-contact-form').validate({
            submitHandler: function submitHandler(form) {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        $('#loader').show();
        $.ajax({
            url: '/api/contactus/',
            type: 'GET',
            data: $('#sa-contact-form').serialize(),
            success: function success(reply) {
                $('#loader').hide();
                if (reply.success == true) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__messages_messages_js__["b" /* successMessage */])($('#sa-contact-form'), reply.message);
                }
            }
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_js__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_location_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_messages_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dates_dates_js__ = __webpack_require__(19);
/**
 * Module to change the differents steps
 */


/**
 * Modules to call states and cities
 */


/**
 * Modules to show error and success messages
 */


/**
 * Module to convert dates to human format
 */


/**
 * jquery Module to validate forms
 */
var validate = __webpack_require__(2);
__webpack_require__(92);

$(document).ready(function () {

    /**
     * Booking object
     */
    var booking = {
        id_booking: null,
        incompleteBooking: function incompleteBooking(callback) {
            $.ajax({
                url: '/api/booking/incomplete',
                type: 'POST',
                cache: false,
                dataType: 'json',
                data: {
                    id_booking: booking.id_booking
                },
                success: function success(response) {
                    if (response.success) {
                        callback(true);
                    } else {
                        callback(false, response.message);
                    }
                }
            });
        }

        /**
         * Apartment object
         */
    };var apartment = {
        id: null

        /**
         * Address object
         */
    };var address = {
        first: {
            id: null,
            done: false,
            country: null,
            state: null,
            city: null,
            address: '',
            postalcode: '',
            validate: function validate() {
                $('#sa-address').validate({
                    submitHandler: function submitHandler(form) {
                        address.first.country = $('select[name="id_country"]', form).val();
                        address.first.state = $('select[name="id_state"]', form).val();
                        address.first.city = $('select[name="id_city"]', form).val();
                        address.first.address = $('input[name="address"]', form).val();
                        address.first.postalcode = $('input[name="postcode"]', form).val();
                        address.first.done = true;
                        address.second.form.fill();
                    },
                    invalidHandler: function invalidHandler(event, validator) {
                        address.first.done = false;
                    }
                });
            },
            register: function register(callback) {
                $.ajax({
                    url: '/api/address/create',
                    type: 'POST',
                    data: $('#sa-address').serialize() + '&id_user=' + user.id + '&api_token=' + user.token,
                    success: function success(reply) {
                        if (reply.success != null) {
                            address.first.id = reply.address.id_address;
                            if (address.second.different) {
                                address.second.register(callback);
                            } else {
                                address.second.id = reply.address.id_address;
                                // payment.pay();
                                // payment.checkout.token();
                                if (callback != undefined) {
                                    callback(true);
                                } else {
                                    payment.checkout.token();
                                }
                            }
                        } else {
                            callback(false);
                        }
                    }
                });
            }
        },
        second: {
            id: null,
            done: false,
            country: null,
            state: null,
            city: null,
            address: '',
            postalcode: '',
            different: false,
            form: {
                fill: function fill() {
                    var form = $('#sa-payment-form');
                    $('select[name="id_country"]', form).val(address.first.country).attr('readonly', true);
                    $('input[name="address"]', form).val(address.first.address).attr('readonly', true);
                    $('input[name="postcode"]', form).val(address.first.postalcode).attr('readonly', true);

                    Object(__WEBPACK_IMPORTED_MODULE_1__location_location_js__["b" /* callStates */])(form).then(function (states) {
                        $('select[name="id_state"]', form).val(address.first.state).attr('readonly', true);
                        Object(__WEBPACK_IMPORTED_MODULE_1__location_location_js__["a" /* callCities */])(form).then(function () {
                            $('select[name="id_city"]', form).val(address.first.city).attr('readonly', true);
                        });
                    });

                    address.second.different = false;
                },
                clean: function clean() {
                    var form = $('#sa-payment-form');
                    $('select[name="id_country"]', form).val('').attr('readonly', false);
                    $('select[name="id_state"]', form).val('').attr('readonly', false);
                    $('select[name="id_city"]', form).val('').attr('readonly', false);
                    $('input[name="address"]', form).val('').attr('readonly', false);
                    $('input[name="postcode"]', form).val('').attr('readonly', false);
                    address.second.different = true;
                }
            },
            register: function register(callback) {
                $.ajax({
                    url: '/api/address/create',
                    type: 'POST',
                    data: $('#sa-payment-form').serialize() + '&id_user=' + user.id + '&api_token=' + user.token,
                    success: function success(reply) {
                        if (reply.success != null) {
                            address.second.id = reply.address.id_address;
                            // payment.pay();
                            // payment.checkout.token();
                            if (callback != undefined) {
                                callback(true);
                            } else {
                                payment.checkout.token();
                            }
                        } else {
                            callback(false);
                        }
                    }
                });
            }

            /**
             * User object
             */

        } };var user = {
        id: localStorage.getItem('id_user'),
        token: localStorage.getItem('api_token'),
        done: false,
        checkSession: function checkSession() {
            if (user.token != null) {
                return true;
            } else {
                return false;
            }
        },
        forms: {
            login: {
                hide: function hide() {
                    $('#contLoginUser').addClass('hidden');
                },
                validate: function validate() {
                    $('#sa-login-two').validate({
                        submitHandler: function submitHandler(form) {
                            user.login();
                        }
                    });
                }
            },
            register: {
                hide: function hide() {
                    $('#contRegisterUser').addClass('hidden');
                },
                validate: function validate() {
                    $('#sa-register-two').validate({
                        submitHandler: function submitHandler(form) {
                            user.done = true;
                        },
                        invalidHandler: function invalidHandler(event, validator) {
                            user.done = false;
                        }
                    });
                }
            }
        },
        login: function login() {
            $('#loader').show();
            $.ajax({
                url: '/api/user/login',
                type: 'POST',
                data: $('#sa-login-two').serialize(),
                success: function success(reply) {
                    $('#loader').hide();
                    if (reply.success == null) {
                        localStorage.setItem('api_token', reply.api_token);
                        localStorage.setItem('id_user', reply.id_user);
                        localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                        user.id = reply.id_user;
                        user.token = reply.api_token;
                        user.done = true;
                        Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["e" /* saNextStep */])($('a[href="#address-form"]'));
                        $('.mg-book-form-personal > div').hide();
                        $('#login-menu-item').hide();
                        $('#user-menu-item').removeClass('hidden');
                    } else if (reply.success == false) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), reply.message);
                    }
                }
            });
        },
        register: function register(callback) {
            $.ajax({
                url: '/api/user',
                type: 'POST',
                data: $('#sa-register-two').serialize(),
                success: function success(reply) {
                    if (reply.id_user != null) {
                        localStorage.setItem('api_token', reply.api_token);
                        localStorage.setItem('id_user', reply.id_user);
                        localStorage.setItem('user_name', reply.firstname + ' ' + reply.lastname);
                        user.id = reply.id_user;
                        user.token = reply.api_token;
                        // address.first.register();
                        if (callback != undefined) {
                            callback(true);
                        } else {
                            address.first.register();
                        }
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), reply.message);
                        Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["e" /* saNextStep */])($('a[href="#personal-info-form"]'));

                        if (callback != undefined) {
                            callback(false);
                        }
                    }
                }
            });
        }

        /**
         * Credit Card object
         */
    };var payment = {};
    if ($('#sa-address').length > 0) {
        // TCO.loadPubKey('sandbox');
        payment = {
            token: null,
            done: false,
            attempt: 0,
            booking: 0,
            form: {
                validate: function validate() {
                    $('#sa-payment-form').validate({
                        rules: {
                            creditCard: {
                                creditcard: true
                            },
                            cvv: {
                                maxlength: 3,
                                digits: true,
                                minlength: 3
                            },
                            month: {
                                maxlength: 2,
                                digits: true
                            },
                            year: {
                                maxlength: 4,
                                digits: true,
                                minlength: 4
                            }
                        },
                        submitHandler: function submitHandler(form) {

                            $('#loader').show();
                            payment.checkout.args.ccNo = $('input[name="creditCard"]').val();
                            payment.checkout.args.cvv = $('input[name="cvv"]').val();
                            payment.checkout.args.expMonth = $('input[name="month"]').val();
                            payment.checkout.args.expYear = $('input[name="year"]').val();
                            payment.done = true;

                            if (user.checkSession()) {
                                console.log('Login');
                                // If Login
                                if (payment.done) {
                                    if (payment.attempt == 0) {
                                        payment.checkout.token();
                                    } else {
                                        payment.pay();
                                    }
                                }
                            } else {
                                console.log('NO LOGIN');
                                user.register();
                            }
                        }
                    });
                }
            },
            checkout: {
                args: {
                    //                sellerId: sellerId,
                    //                publishableKey: publishableKey,
                    ccNo: null,
                    cvv: null,
                    expMonth: null,
                    expYear: null
                },
                token: function token() {
                    /*get token*/
                    $.ajax({
                        url: '/api/booking/request',
                        type: 'POST',
                        data: {
                            data: window.btoa(JSON.stringify(payment.checkout.args))
                        },
                        success: function success(response) {
                            if (response.success) {
                                payment.pay(response.token);
                            } else {
                                alert(response.message);
                            }
                        }
                    });

                    return;

                    // console.log('args', payment.checkout.args);
                    // alert('sad');
                    // TCO.requestToken(function(response) {
                    //     payment.token = response.response.token.token;
                    //     if(user.id == null){
                    //         user.register();
                    //     }
                    //     else{
                    //         address.first.register();
                    //     }
                    // },function(error) {
                    //     console.log('ERROR', error);
                    // },payment.checkout.args);
                }
            },
            pay: function pay(token) {

                var currency = $.parseJSON(localStorage.getItem("currency"));
                var data = {
                    id_user: user.id,
                    api_token: user.token,
                    id_apartment: apartment.id,
                    checkin: localStorage.getItem('checkin'),
                    checkout: localStorage.getItem('checkout'),
                    nights: localStorage.getItem('nights'),
                    //                tco_token: payment.token,
                    token: token,
                    currency_iso: currency.iso_code,
                    id_currency: currency.id_currency,
                    id_address_booking: address.first.id,
                    id_address_payment: address.second.id
                };

                if (payment.attempt > 0) {
                    data.attempt = payment.attempt + 1;
                    data.id_booking = payment.booking;
                }

                $.ajax({
                    url: '/api/booking/create',
                    type: 'POST',
                    data: data,
                    success: function success(reply) {

                        $('#loader').hide();

                        if (reply.success != null && reply.success == false) {
                            payment.attempt = reply.attempt;
                            payment.booking = reply.id_booking;
                            if (payment.attempt != null) {
                                Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), reply.message + '. ' + attempt + ' ' + payment.attempt);
                            } else {
                                Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), reply.message);
                            }
                        } else {
                            if (reply.booking.status == 'PAID') {
                                //                            successMessage($('.mg-booking-form'),reply.checkout.responseMsg);
                                Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["b" /* successMessage */])($('.mg-booking-form'), 'Successful');
                                location.href = myBookingsLink;
                            }
                        }
                    }
                });
            }
        };
    }

    /*
     * Validate all forms
     */
    if ($('#sa-address').length > 0) {
        user.forms.login.validate();
        user.forms.register.validate();
        address.first.validate();
        payment.form.validate();
    }

    /*
     * Click on the first tab (1)
     * Apartment
     */
    $('.mg-booking-form > ul > li:nth-child(1)').click(function (e) {
        e.preventDefault();
        Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["b" /* saBookingStepOne */])();
        $('a', this).tab('show');
    });

    /**
     * Click on the second tab (2)
     * User information
     */
    $('.mg-booking-form > ul > li:nth-child(2)').click(function (e) {
        e.preventDefault();
        if (apartment.id) {
            Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["d" /* saBookingStepTwo */])();
            $('a', this).tab('show');
            if (user.token) {
                $('.mg-book-form-personal > div').hide();
            }

            /** Draw values in sidebar **/
            showSidebarData();
            $('.mg-booking-form .alert-danger').addClass('hidden');
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), apartmentWarning);
        }
    });

    /**
     * Click on the third tab (3)
     * Address
     */
    $('.mg-booking-form > ul > li:nth-child(3)').click(function (e) {
        e.preventDefault();
        if (apartment.id) {
            $('#sa-register-two').submit();
            if (user.done || user.token) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["c" /* saBookingStepThree */])();
                showSidebarData();
                $('a', this).tab('show');
                $('.mg-booking-form .alert-danger').addClass('hidden');
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), infoUserWarning);
            }
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), apartmentWarning);
        }
    });

    /**
     * Click on the fourth tab (4)
     * Payment
     */
    $('.mg-booking-form > ul > li:nth-child(4)').click(function (e) {
        e.preventDefault();
        if (apartment.id) {
            $('#sa-register-two').submit();
            if (user.done || user.token) {
                $('#sa-address').submit();
                if (address.first.done) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["a" /* saBookingStepFour */])();
                    $('a', this).tab('show');
                    $('.mg-booking-form .alert-danger').addClass('hidden');
                } else {
                    Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), adrressWarning);
                }
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), infoUserWarning);
            }
        } else {
            Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), apartmentWarning);
        }
    });

    /**
     * Event on next button
     * Steps:
     * 1. Select apartment
     * 2. Login or register
     * 3. First address
     * 4. Payment
     */
    $('.tab-content').on('click', '.btn-next-tab', function (e) {
        e.preventDefault();
        var goTo = $(this).attr('href');
        if (goTo == '#personal-info-form') {
            apartment.id = $(this).attr('id').split('_')[1];
            if (user.done || user.token) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["e" /* saNextStep */])($('a[href="#address-form"]'));
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["e" /* saNextStep */])($(this));
            }
        } else if (goTo == '#address-form') {
            $('#sa-register-two').submit();
            if (user.done || user.token) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["e" /* saNextStep */])($(this));
            }
        } else if (goTo == '#payment-form') {
            $('#sa-address').submit();
            if (address.first.done) {
                Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["e" /* saNextStep */])($(this));
            }
        } else if (goTo == '#payment') {
            $('#sa-payment-form').submit();
        }
    });

    /**
     * Event on prev button
     */
    $('.tab-content').on('click', '.btn-prev-tab', function (e) {
        e.preventDefault();
        Object(__WEBPACK_IMPORTED_MODULE_0__tabs_js__["f" /* saPrevStep */])($(this));
    });

    /*
     * Check or not if the billing address
     */
    $('#sa-check-diff-address').click(function () {
        if ($(this).is(':checked')) {
            address.second.form.clean();
        } else {
            address.second.form.fill();
        }
    });

    /*
     * Function to load data on sidebar
     */
    function showSidebarData() {
        var sidebarData = _apartments.find(function (x) {
            return x.id == apartment.id;
        });
        var checkIn = localStorage.getItem('checkin');
        var checkOut = localStorage.getItem('checkout');
        var nights = Object(__WEBPACK_IMPORTED_MODULE_3__dates_dates_js__["a" /* calculateNights */])(checkIn, checkOut);

        $('#mg-room-cart .apartment-image').attr('src', mainUrl + '/' + sidebarData.image);
        $('#mg-room-cart .apartment-title').text(sidebarData.name);
        $('#mg-room-cart .apartment-price').text(sidebarData.price);
        $('#mg-room-cart .apartment-checkin').text(Object(__WEBPACK_IMPORTED_MODULE_3__dates_dates_js__["b" /* converDate */])(checkIn));
        $('#mg-room-cart .apartment-checkout').text(Object(__WEBPACK_IMPORTED_MODULE_3__dates_dates_js__["b" /* converDate */])(checkOut));

        if (nights == 1) {
            $('#mg-room-cart .apartment-night').removeClass('hidden').children('.nights').text(nights);
        } else {
            $('#mg-room-cart .apartment-nights').removeClass('hidden').children('.nights').text(nights);
        }

        var total = sidebarData.price * nights;
        $('#mg-room-cart .apartment-total').text(total.toFixed(2));
    }

    if ($('#sa-payment-form')) {
        // Render the PayPal button
        paypal.Button.render({

            // Set your environment

            env: 'sandbox', // sandbox | production

            // Specify the style of the button

            style: {
                label: 'buynow',
                fundingicons: true, // optional
                branding: true, // optional
                size: 'small', // small | medium | large | responsive
                shape: 'rect', // pill | rect
                color: 'gold' // gold | blue | silver | black
            },

            // PayPal Client IDs - replace with your own
            // Create a PayPal app: https://developer.paypal.com/developer/applications/create

            client: {
                sandbox: paypalKeySandbox,
                production: paypalKeyProduction
            },

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // Wait for the PayPal button to be clicked

            payment: function payment(data, actions) {

                return checkout().then(function (msj) {
                    if (msj) {

                        var currency = $.parseJSON(localStorage.getItem("currency"));

                        var params = {
                            id_user: user.id,
                            api_token: user.token,
                            id_apartment: apartment.id,
                            checkin: localStorage.getItem('checkin'),
                            checkout: localStorage.getItem('checkout'),
                            nights: localStorage.getItem('nights'),
                            currency_iso: currency.iso_code,
                            id_currency: currency.id_currency,
                            id_address_booking: address.first.id,
                            id_address_payment: address.second.id
                        };

                        if (booking.id_booking != null) {
                            params.id_booking = booking.id_booking;
                        }

                        console.log("=== params pay ===");
                        console.log(params);
                        // return actions.request.post('/api/booking/paypal/create').then(function (res) {
                        return actions.request.post('/api/booking/create', params).then(function (res) {
                            console.log('====');
                            console.log(res);
                            console.log(booking.id_booking);

                            booking.id_booking = res.booking.id_booking;
                            console.log('====');
                            console.log(res);
                            console.log(booking.id_booking);
                            return res.id;
                        });
                    }
                });
            },

            // Wait for the payment to be authorized by the customer
            onAuthorize: function onAuthorize(data, actions) {

                console.log('===onAuthorize =');
                console.log(booking.id_booking);
                console.log('===End onAuthorize =');
                // return;

                var currency = $.parseJSON(localStorage.getItem("currency"));

                return actions.request.post('/api/booking/paypal/execute', {
                    paymentID: data.paymentID,
                    payerID: data.payerID,
                    id_user: user.id,
                    api_token: user.token,
                    id_booking: booking.id_booking,
                    id_currency: currency.id_currency
                }).then(function (res) {
                    // 3. Show the buyer a confirmation message.
                    console.log(res);
                    if (res.booking.status == 'PAID') {
                        Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["b" /* successMessage */])($('.mg-booking-form'), 'Successful');
                        location.href = myBookingsLink;
                    }
                });
            },

            onCancel: function onCancel(data, actions) {
                // Show a cancel page or return to cart
                console.log('====');
                console.log("onCancel");

                Object(__WEBPACK_IMPORTED_MODULE_2__messages_messages_js__["a" /* errorMessage */])($('.mg-booking-form'), "Your booking are incomplete");
            },

            onError: function onError(err) {
                // Show an error page here, when an error occurs
                console.log('====');
                console.log("onError", err);
            }

        }, '#paypal-button-container');
    }

    var checkout = function checkout(data) {
        return new Promise(function (resolve, reject) {
            if (user.checkSession()) {
                if (booking.id_booking != null) {
                    resolve(true);
                } else {
                    address.first.register(function (result) {
                        resolve(result);
                    });
                }
            } else {
                user.register(function (response) {
                    address.first.register(function (result) {
                        resolve(result);
                    });
                });
            }
        });
    };
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["b"] = saBookingStepOne;
/* harmony export (immutable) */ __webpack_exports__["d"] = saBookingStepTwo;
/* harmony export (immutable) */ __webpack_exports__["c"] = saBookingStepThree;
/* harmony export (immutable) */ __webpack_exports__["a"] = saBookingStepFour;
/* harmony export (immutable) */ __webpack_exports__["e"] = saNextStep;
/* harmony export (immutable) */ __webpack_exports__["f"] = saPrevStep;
function saBookingStepOne() {
	if ($('.mg-booking-form > ul > li:nth-child(1)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(1)').removeClass('mg-step-done');
	}
	if ($('.mg-booking-form > ul > li:nth-child(2)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(2)').removeClass('mg-step-done');
	}
	if ($('.mg-booking-form > ul > li:nth-child(3)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(3)').removeClass('mg-step-done');
	}

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

function saBookingStepTwo() {
	$('.mg-booking-form > ul > li:nth-child(1)').addClass('mg-step-done');

	if ($('.mg-booking-form > ul > li:nth-child(2)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(2)').removeClass('mg-step-done');
	}
	if ($('.mg-booking-form > ul > li:nth-child(3)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(3)').removeClass('mg-step-done');
	}

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

function saBookingStepThree() {
	$('.mg-booking-form > ul > li:nth-child(1)').addClass('mg-step-done');
	$('.mg-booking-form > ul > li:nth-child(2)').addClass('mg-step-done');

	if ($('.mg-booking-form > ul > li:nth-child(3)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(3)').removeClass('mg-step-done');
	}

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

function saBookingStepFour() {
	$('.mg-booking-form > ul > li:nth-child(1)').addClass('mg-step-done');
	$('.mg-booking-form > ul > li:nth-child(2)').addClass('mg-step-done');
	$('.mg-booking-form > ul > li:nth-child(3)').addClass('mg-step-done');

	if ($('.mg-booking-form > ul > li:nth-child(4)').hasClass('mg-step-done')) {
		$('.mg-booking-form > ul > li:nth-child(4)').removeClass('mg-step-done');
	}
}

function saNextStep(element) {
	element.tab('show');

	$('html, body').animate({
		scrollTop: $(".mg-booking-form").offset().top - 100
	}, 300);

	$('a[href="' + element.attr('href') + '"]').parents('li').trigger('click');
	$('.mg-booking-form > ul > li.active').removeClass('active');
	$('a[href="' + element.attr('href') + '"]').parents('li').addClass('active');
}

function saPrevStep(element) {
	element.tab('show');

	$('html, body').animate({
		scrollTop: $(".mg-booking-form").offset().top - 100
	}, 300);

	$('a[href="' + element.attr('href') + '"]').parents('li').trigger('click');
	$('.mg-booking-form > ul > li.active').removeClass('active');
	$('a[href="' + element.attr('href') + '"]').parents('li').addClass('active');
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["b"] = callStates;
/* harmony export (immutable) */ __webpack_exports__["a"] = callCities;
/*
 * Call states
 */
$('select[name="id_country"]').change(function (event) {
    //var id_country = $(this).val();
    var form = $(this).parent().parent().parent().parent('form');
    callStates(form);
});

/*
 * Call cities
 */
$('select[name="id_state"]').change(function (event) {
    //var id_state = $(this).val();
    var form = $(this).parent().parent().parent().parent('form');
    callCities(form);
});

/*
 * Function to call states
 */
function callStates(form) {
    var ajax = $.ajax({
        url: '/api/location/states',
        type: 'GET',
        data: {
            id_country: $('select[name="id_country"]', form).val()
        },
        success: function success(states) {
            var options = '<option value="" disabled selected></opion>';
            $(states).each(function (index, el) {
                options += '<option value=' + el.id_state + '>' + el.name + '</option>';
            });
            $('select[name="id_state"]', form).html(options);
        }
    });
    return ajax;
}

function callCities(form) {
    var ajax = $.ajax({
        url: '/api/location/cities',
        type: 'GET',
        data: {
            id_state: $('select[name="id_state"]', form).val()
        },
        success: function success(cities) {
            var options = '<option value="" disabled selected></opion>';
            $(cities).each(function (index, el) {
                options += '<option value=' + el.id_city + '>' + el.name + '</option>';
            });
            $('select[name="id_city"]', form).html(options);
        }
    });
    return ajax;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 J??rn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

( function() {

	function stripHtml( value ) {

		// Remove html tags and space chars
		return value.replace( /<.[^<>]*?>/g, " " ).replace( /&nbsp;|&#160;/gi, " " )

		// Remove punctuation
		.replace( /[.(),;:!?%#$'\"_+=\/\-?????????]*/g, "" );
	}

	$.validator.addMethod( "maxWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length <= params;
	}, $.validator.format( "Please enter {0} words or less." ) );

	$.validator.addMethod( "minWords", function( value, element, params ) {
		return this.optional( element ) || stripHtml( value ).match( /\b\w+\b/g ).length >= params;
	}, $.validator.format( "Please enter at least {0} words." ) );

	$.validator.addMethod( "rangeWords", function( value, element, params ) {
		var valueStripped = stripHtml( value ),
			regex = /\b\w+\b/g;
		return this.optional( element ) || valueStripped.match( regex ).length >= params[ 0 ] && valueStripped.match( regex ).length <= params[ 1 ];
	}, $.validator.format( "Please enter between {0} and {1} words." ) );

}() );

// Accept a value from a file input based on a required mimetype
$.validator.addMethod( "accept", function( value, element, param ) {

	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace( /\s/g, "" ) : "image/*",
		optionalValue = this.optional( element ),
		i, file, regex;

	// Element is optional
	if ( optionalValue ) {
		return optionalValue;
	}

	if ( $( element ).attr( "type" ) === "file" ) {

		// Escape string to be used in the regex
		// see: https://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
		// Escape also "/*" as "/.*" as a wildcard
		typeParam = typeParam
				.replace( /[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g, "\\$&" )
				.replace( /,/g, "|" )
				.replace( /\/\*/g, "/.*" );

		// Check if the element has a FileList before checking each file
		if ( element.files && element.files.length ) {
			regex = new RegExp( ".?(" + typeParam + ")$", "i" );
			for ( i = 0; i < element.files.length; i++ ) {
				file = element.files[ i ];

				// Grab the mimetype from the loaded file, verify it matches
				if ( !file.type.match( regex ) ) {
					return false;
				}
			}
		}
	}

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
}, $.validator.format( "Please enter a value with a valid mimetype." ) );

$.validator.addMethod( "alphanumeric", function( value, element ) {
	return this.optional( element ) || /^\w+$/i.test( value );
}, "Letters, numbers, and underscores only please" );

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod( "bankaccountNL", function( value, element ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( !( /^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test( value ) ) ) {
		return false;
	}

	// Now '11 check'
	var account = value.replace( / /g, "" ), // Remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring( pos, pos + 1 );
		sum = sum + factor * digit;
	}
	return sum % 11 === 0;
}, "Please specify a valid bank account number" );

$.validator.addMethod( "bankorgiroaccountNL", function( value, element ) {
	return this.optional( element ) ||
			( $.validator.methods.bankaccountNL.call( this, value, element ) ) ||
			( $.validator.methods.giroaccountNL.call( this, value, element ) );
}, "Please specify a valid bank or giro account number" );

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or digit ('0' for test (therefore not allowed), '1' denoting passive participant, '2' typically reverse-billing)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod( "bic", function( value, element ) {
    return this.optional( element ) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test( value.toUpperCase() );
}, "Please specify a valid BIC code" );

/*
 * C??digo de identificaci??n fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 *
 * Spanish CIF structure:
 *
 * [ T ][ P ][ P ][ N ][ N ][ N ][ N ][ N ][ C ]
 *
 * Where:
 *
 * T: 1 character. Kind of Organization Letter: [ABCDEFGHJKLMNPQRSUVW]
 * P: 2 characters. Province.
 * N: 5 characters. Secuencial Number within the province.
 * C: 1 character. Control Digit: [0-9A-J].
 *
 * [ T ]: Kind of Organizations. Possible values:
 *
 *   A. Corporations
 *   B. LLCs
 *   C. General partnerships
 *   D. Companies limited partnerships
 *   E. Communities of goods
 *   F. Cooperative Societies
 *   G. Associations
 *   H. Communities of homeowners in horizontal property regime
 *   J. Civil Societies
 *   K. Old format
 *   L. Old format
 *   M. Old format
 *   N. Nonresident entities
 *   P. Local authorities
 *   Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
 *   R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
 *   S. Organs of State Administration and regions
 *   V. Agrarian Transformation
 *   W. Permanent establishments of non-resident in Spain
 *
 * [ C ]: Control Digit. It can be a number or a letter depending on T value:
 * [ T ]  -->  [ C ]
 * ------    ----------
 *   A         Number
 *   B         Number
 *   E         Number
 *   H         Number
 *   K         Letter
 *   P         Letter
 *   Q         Letter
 *   S         Letter
 *
 */
$.validator.addMethod( "cifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var cifRegEx = new RegExp( /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/gi );
	var letter  = value.substring( 0, 1 ), // [ T ]
		number  = value.substring( 1, 8 ), // [ P ][ P ][ N ][ N ][ N ][ N ][ N ]
		control = value.substring( 8, 9 ), // [ C ]
		all_sum = 0,
		even_sum = 0,
		odd_sum = 0,
		i, n,
		control_digit,
		control_letter;

	function isOdd( n ) {
		return n % 2 === 0;
	}

	// Quick format test
	if ( value.length !== 9 || !cifRegEx.test( value ) ) {
		return false;
	}

	for ( i = 0; i < number.length; i++ ) {
		n = parseInt( number[ i ], 10 );

		// Odd positions
		if ( isOdd( i ) ) {

			// Odd positions are multiplied first.
			n *= 2;

			// If the multiplication is bigger than 10 we need to adjust
			odd_sum += n < 10 ? n : n - 9;

		// Even positions
		// Just sum them
		} else {
			even_sum += n;
		}
	}

	all_sum = even_sum + odd_sum;
	control_digit = ( 10 - ( all_sum ).toString().substr( -1 ) ).toString();
	control_digit = parseInt( control_digit, 10 ) > 9 ? "0" : control_digit;
	control_letter = "JABCDEFGHI".substr( control_digit, 1 ).toString();

	// Control must be a digit
	if ( letter.match( /[ABEH]/ ) ) {
		return control === control_digit;

	// Control must be a letter
	} else if ( letter.match( /[KPQS]/ ) ) {
		return control === control_letter;
	}

	// Can be either
	return control === control_digit || control === control_letter;

}, "Please specify a valid CIF number." );

/*
 * Brazillian CPF number (Cadastrado de Pessoas F??sicas) is the equivalent of a Brazilian tax registration number.
 * CPF numbers have 11 digits in total: 9 numbers followed by 2 check numbers that are being used for validation.
 */
$.validator.addMethod( "cpfBR", function( value ) {

	// Removing special characters from value
	value = value.replace( /([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, "" );

	// Checking value to have 11 digits only
	if ( value.length !== 11 ) {
		return false;
	}

	var sum = 0,
		firstCN, secondCN, checkResult, i;

	firstCN = parseInt( value.substring( 9, 10 ), 10 );
	secondCN = parseInt( value.substring( 10, 11 ), 10 );

	checkResult = function( sum, cn ) {
		var result = ( sum * 10 ) % 11;
		if ( ( result === 10 ) || ( result === 11 ) ) {
			result = 0;
		}
		return ( result === cn );
	};

	// Checking for dump data
	if ( value === "" ||
		value === "00000000000" ||
		value === "11111111111" ||
		value === "22222222222" ||
		value === "33333333333" ||
		value === "44444444444" ||
		value === "55555555555" ||
		value === "66666666666" ||
		value === "77777777777" ||
		value === "88888888888" ||
		value === "99999999999"
	) {
		return false;
	}

	// Step 1 - using first Check Number:
	for ( i = 1; i <= 9; i++ ) {
		sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 11 - i );
	}

	// If first Check Number (CN) is valid, move to Step 2 - using second Check Number:
	if ( checkResult( sum, firstCN ) ) {
		sum = 0;
		for ( i = 1; i <= 10; i++ ) {
			sum = sum + parseInt( value.substring( i - 1, i ), 10 ) * ( 12 - i );
		}
		return checkResult( sum, secondCN );
	}
	return false;

}, "Please specify a valid CPF number" );

// https://jqueryvalidation.org/creditcard-method/
// based on https://en.wikipedia.org/wiki/Luhn_algorithm
$.validator.addMethod( "creditcard", function( value, element ) {
	if ( this.optional( element ) ) {
		return "dependency-mismatch";
	}

	// Accept only spaces, digits and dashes
	if ( /[^0-9 \-]+/.test( value ) ) {
		return false;
	}

	var nCheck = 0,
		nDigit = 0,
		bEven = false,
		n, cDigit;

	value = value.replace( /\D/g, "" );

	// Basing min and max length on
	// https://developer.ean.com/general_info/Valid_Credit_Card_Types
	if ( value.length < 13 || value.length > 19 ) {
		return false;
	}

	for ( n = value.length - 1; n >= 0; n-- ) {
		cDigit = value.charAt( n );
		nDigit = parseInt( cDigit, 10 );
		if ( bEven ) {
			if ( ( nDigit *= 2 ) > 9 ) {
				nDigit -= 9;
			}
		}

		nCheck += nDigit;
		bEven = !bEven;
	}

	return ( nCheck % 10 ) === 0;
}, "Please enter a valid credit card number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod( "creditcardtypes", function( value, element, param ) {
	if ( /[^0-9\-]+/.test( value ) ) {
		return false;
	}

	value = value.replace( /\D/g, "" );

	var validTypes = 0x0000;

	if ( param.mastercard ) {
		validTypes |= 0x0001;
	}
	if ( param.visa ) {
		validTypes |= 0x0002;
	}
	if ( param.amex ) {
		validTypes |= 0x0004;
	}
	if ( param.dinersclub ) {
		validTypes |= 0x0008;
	}
	if ( param.enroute ) {
		validTypes |= 0x0010;
	}
	if ( param.discover ) {
		validTypes |= 0x0020;
	}
	if ( param.jcb ) {
		validTypes |= 0x0040;
	}
	if ( param.unknown ) {
		validTypes |= 0x0080;
	}
	if ( param.all ) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	}
	if ( validTypes & 0x0001 && /^(5[12345])/.test( value ) ) { // Mastercard
		return value.length === 16;
	}
	if ( validTypes & 0x0002 && /^(4)/.test( value ) ) { // Visa
		return value.length === 16;
	}
	if ( validTypes & 0x0004 && /^(3[47])/.test( value ) ) { // Amex
		return value.length === 15;
	}
	if ( validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test( value ) ) { // Dinersclub
		return value.length === 14;
	}
	if ( validTypes & 0x0010 && /^(2(014|149))/.test( value ) ) { // Enroute
		return value.length === 15;
	}
	if ( validTypes & 0x0020 && /^(6011)/.test( value ) ) { // Discover
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(3)/.test( value ) ) { // Jcb
		return value.length === 16;
	}
	if ( validTypes & 0x0040 && /^(2131|1800)/.test( value ) ) { // Jcb
		return value.length === 15;
	}
	if ( validTypes & 0x0080 ) { // Unknown
		return true;
	}
	return false;
}, "Please enter a valid credit card number." );

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["??", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 *  }
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 *  }
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,??,??"
 *  }
 */
$.validator.addMethod( "currency", function( value, element, param ) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[ 0 ],
        soft = isParamString ? true : param[ 1 ],
        regex;

    symbol = symbol.replace( /,/g, "" );
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$";
    regex = new RegExp( regex );
    return this.optional( element ) || regex.test( value );

}, "Please specify a valid currency" );

$.validator.addMethod( "dateFA", function( value, element ) {
	return this.optional( element ) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test( value );
}, $.validator.messages.date );

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true}" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "dateITA", function( value, element ) {
	var check = false,
		re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test( value ) ) {
		adata = value.split( "/" );
		gg = parseInt( adata[ 0 ], 10 );
		mm = parseInt( adata[ 1 ], 10 );
		aaaa = parseInt( adata[ 2 ], 10 );
		xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		} else {
			check = false;
		}
	} else {
		check = false;
	}
	return this.optional( element ) || check;
}, $.validator.messages.date );

$.validator.addMethod( "dateNL", function( value, element ) {
	return this.optional( element ) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test( value );
}, $.validator.messages.date );

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod( "extension", function( value, element, param ) {
	param = typeof param === "string" ? param.replace( /,/g, "|" ) : "png|jpe?g|gif";
	return this.optional( element ) || value.match( new RegExp( "\\.(" + param + ")$", "i" ) );
}, $.validator.format( "Please enter a value with a valid extension." ) );

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod( "giroaccountNL", function( value, element ) {
	return this.optional( element ) || /^[0-9]{1,7}$/.test( value );
}, "Please specify a valid giro account number" );

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 *
 * Validation is case-insensitive. Please make sure to normalize input yourself.
 */
$.validator.addMethod( "iban", function( value, element ) {

	// Some quick simple tests to prevent needless work
	if ( this.optional( element ) ) {
		return true;
	}

	// Remove spaces and to upper case
	var iban = value.replace( / /g, "" ).toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	// Check for IBAN code length.
	// It contains:
	// country code ISO 3166-1 - two letters,
	// two check digits,
	// Basic Bank Account Number (BBAN) - up to 30 chars
	var minimalIBANlength = 5;
	if ( iban.length < minimalIBANlength ) {
		return false;
	}

	// Check the country code and find the country specific format
	countrycode = iban.substring( 0, 2 );
	bbancountrypatterns = {
		"AL": "\\d{8}[\\dA-Z]{16}",
		"AD": "\\d{8}[\\dA-Z]{12}",
		"AT": "\\d{16}",
		"AZ": "[\\dA-Z]{4}\\d{20}",
		"BE": "\\d{12}",
		"BH": "[A-Z]{4}[\\dA-Z]{14}",
		"BA": "\\d{16}",
		"BR": "\\d{23}[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
		"CR": "\\d{17}",
		"HR": "\\d{17}",
		"CY": "\\d{8}[\\dA-Z]{16}",
		"CZ": "\\d{20}",
		"DK": "\\d{14}",
		"DO": "[A-Z]{4}\\d{20}",
		"EE": "\\d{16}",
		"FO": "\\d{14}",
		"FI": "\\d{14}",
		"FR": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"GE": "[\\dA-Z]{2}\\d{16}",
		"DE": "\\d{18}",
		"GI": "[A-Z]{4}[\\dA-Z]{15}",
		"GR": "\\d{7}[\\dA-Z]{16}",
		"GL": "\\d{14}",
		"GT": "[\\dA-Z]{4}[\\dA-Z]{20}",
		"HU": "\\d{24}",
		"IS": "\\d{22}",
		"IE": "[\\dA-Z]{4}\\d{14}",
		"IL": "\\d{19}",
		"IT": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"KZ": "\\d{3}[\\dA-Z]{13}",
		"KW": "[A-Z]{4}[\\dA-Z]{22}",
		"LV": "[A-Z]{4}[\\dA-Z]{13}",
		"LB": "\\d{4}[\\dA-Z]{20}",
		"LI": "\\d{5}[\\dA-Z]{12}",
		"LT": "\\d{16}",
		"LU": "\\d{3}[\\dA-Z]{13}",
		"MK": "\\d{3}[\\dA-Z]{10}\\d{2}",
		"MT": "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
		"MR": "\\d{23}",
		"MU": "[A-Z]{4}\\d{19}[A-Z]{3}",
		"MC": "\\d{10}[\\dA-Z]{11}\\d{2}",
		"MD": "[\\dA-Z]{2}\\d{18}",
		"ME": "\\d{18}",
		"NL": "[A-Z]{4}\\d{10}",
		"NO": "\\d{11}",
		"PK": "[\\dA-Z]{4}\\d{16}",
		"PS": "[\\dA-Z]{4}\\d{21}",
		"PL": "\\d{24}",
		"PT": "\\d{21}",
		"RO": "[A-Z]{4}[\\dA-Z]{16}",
		"SM": "[A-Z]\\d{10}[\\dA-Z]{12}",
		"SA": "\\d{2}[\\dA-Z]{18}",
		"RS": "\\d{18}",
		"SK": "\\d{20}",
		"SI": "\\d{15}",
		"ES": "\\d{20}",
		"SE": "\\d{20}",
		"CH": "\\d{5}[\\dA-Z]{12}",
		"TN": "\\d{20}",
		"TR": "\\d{5}[\\dA-Z]{17}",
		"AE": "\\d{3}\\d{16}",
		"GB": "[A-Z]{4}\\d{14}",
		"VG": "[\\dA-Z]{4}\\d{16}"
	};

	bbanpattern = bbancountrypatterns[ countrycode ];

	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if ( typeof bbanpattern !== "undefined" ) {
		ibanregexp = new RegExp( "^[A-Z]{2}\\d{2}" + bbanpattern + "$", "" );
		if ( !( ibanregexp.test( iban ) ) ) {
			return false; // Invalid country specific format
		}
	}

	// Now check the checksum, first convert to digits
	ibancheck = iban.substring( 4, iban.length ) + iban.substring( 0, 4 );
	for ( i = 0; i < ibancheck.length; i++ ) {
		charAt = ibancheck.charAt( i );
		if ( charAt !== "0" ) {
			leadingZeroes = false;
		}
		if ( !leadingZeroes ) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf( charAt );
		}
	}

	// Calculate the result of: ibancheckdigits % 97
	for ( p = 0; p < ibancheckdigits.length; p++ ) {
		cChar = ibancheckdigits.charAt( p );
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	}
	return cRest === 1;
}, "Please specify a valid IBAN" );

$.validator.addMethod( "integer", function( value, element ) {
	return this.optional( element ) || /^-?\d+$/.test( value );
}, "A positive or negative non-decimal number please" );

$.validator.addMethod( "ipv4", function( value, element ) {
	return this.optional( element ) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test( value );
}, "Please enter a valid IP v4 address." );

$.validator.addMethod( "ipv6", function( value, element ) {
	return this.optional( element ) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test( value );
}, "Please enter a valid IP v6 address." );

$.validator.addMethod( "lettersonly", function( value, element ) {
	return this.optional( element ) || /^[a-z]+$/i.test( value );
}, "Letters only please" );

$.validator.addMethod( "letterswithbasicpunc", function( value, element ) {
	return this.optional( element ) || /^[a-z\-.,()'"\s]+$/i.test( value );
}, "Letters or punctuation only please" );

$.validator.addMethod( "mobileNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid mobile number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "mobileUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/ );
}, "Please specify a valid mobile number" );

$.validator.addMethod( "netmask", function( value, element ) {
    return this.optional( element ) || /^(254|252|248|240|224|192|128)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)/i.test( value );
}, "Please enter a valid netmask." );

/*
 * The NIE (N??mero de Identificaci??n de Extranjero) is a Spanish tax identification number assigned by the Spanish
 * authorities to any foreigner.
 *
 * The NIE is the equivalent of a Spaniards N??mero de Identificaci??n Fiscal (NIF) which serves as a fiscal
 * identification number. The CIF number (Certificado de Identificaci??n Fiscal) is equivalent to the NIF, but applies to
 * companies rather than individuals. The NIE consists of an 'X' or 'Y' followed by 7 or 8 digits then another letter.
 */
$.validator.addMethod( "nieES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	var nieRegEx = new RegExp( /^[MXYZ]{1}[0-9]{7,8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/gi );
	var validChars = "TRWAGMYFPDXBNJZSQVHLCKET",
		letter = value.substr( value.length - 1 ).toUpperCase(),
		number;

	value = value.toString().toUpperCase();

	// Quick format test
	if ( value.length > 10 || value.length < 9 || !nieRegEx.test( value ) ) {
		return false;
	}

	// X means same number
	// Y means number + 10000000
	// Z means number + 20000000
	value = value.replace( /^[X]/, "0" )
		.replace( /^[Y]/, "1" )
		.replace( /^[Z]/, "2" );

	number = value.length === 9 ? value.substr( 0, 8 ) : value.substr( 0, 9 );

	return validChars.charAt( parseInt( number, 10 ) % 23 ) === letter;

}, "Please specify a valid NIE number." );

/*
 * The N??mero de Identificaci??n Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value, element ) {
	"use strict";

	if ( this.optional( element ) ) {
		return true;
	}

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)" ) ) {
		return false;
	}

	// Test NIF
	if ( /^[0-9]{8}[A-Z]{1}$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	}

	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1}/.test( value ) ) {
		return ( value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 1 ) % 23 ) );
	}

	return false;

}, "Please specify a valid NIF number." );

/*
 * Numer identyfikacji podatkowej ( NIP ) is the way tax identification used in Poland for companies
 */
$.validator.addMethod( "nipPL", function( value ) {
	"use strict";

	value = value.replace( /[^0-9]/g, "" );

	if ( value.length !== 10 ) {
		return false;
	}

	var arrSteps = [ 6, 5, 7, 2, 3, 4, 5, 6, 7 ];
	var intSum = 0;
	for ( var i = 0; i < 9; i++ ) {
		intSum += arrSteps[ i ] * value[ i ];
	}
	var int2 = intSum % 11;
	var intControlNr = ( int2 === 10 ) ? 0 : int2;

	return ( intControlNr === parseInt( value[ 9 ], 10 ) );
}, "Please specify a valid NIP number." );

$.validator.addMethod( "notEqualTo", function( value, element, param ) {
	return this.optional( element ) || !$.validator.methods.equalTo.call( this, value, element, param );
}, "Please enter a different value, values must not be the same." );

$.validator.addMethod( "nowhitespace", function( value, element ) {
	return this.optional( element ) || /^\S+$/i.test( value );
}, "No white space please" );

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4}$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4}$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod( "pattern", function( value, element, param ) {
	if ( this.optional( element ) ) {
		return true;
	}
	if ( typeof param === "string" ) {
		param = new RegExp( "^(?:" + param + ")$" );
	}
	return param.test( value );
}, "Invalid format." );

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod( "phoneNL", function( value, element ) {
	return this.optional( element ) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test( value );
}, "Please specify a valid phone number." );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */

// Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod( "phonesUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/ );
}, "Please specify a valid uk phone number" );

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4}\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod( "phoneUK", function( phone_number, element ) {
	phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
}, "Please specify a valid phone number" );

/**
 * Matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod( "phoneUS", function( phone_number, element ) {
	phone_number = phone_number.replace( /\s+/g, "" );
	return this.optional( element ) || phone_number.length > 9 &&
		phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
}, "Please specify a valid phone number" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod( "postalcodeBR", function( cep_value, element ) {
	return this.optional( element ) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test( cep_value );
}, "Informe um CEP v??lido." );

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test( value );
}, "Please specify a valid postal code" );

/* Matches Italian postcode (CAP) */
$.validator.addMethod( "postalcodeIT", function( value, element ) {
	return this.optional( element ) || /^\d{5}$/.test( value );
}, "Please specify a valid postal code" );

$.validator.addMethod( "postalcodeNL", function( value, element ) {
	return this.optional( element ) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test( value );
}, "Please specify a valid postal code" );

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod( "postcodeUK", function( value, element ) {
	return this.optional( element ) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test( value );
}, "Please specify a valid UK postcode" );

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]},
 * description: {require_from_group: [1,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod( "require_from_group", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_req_grp" ) ? $fieldsFirst.data( "valid_req_grp" ) : $.extend( {}, this ),
		isValid = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_req_grp", validator );

	// If element isn't being validated, run each require_from_group field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please fill at least {0} of these fields." ) );

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]},
 * description: {skip_or_fill_minimum: [2,".productinfo"]},
 * color:		{skip_or_fill_minimum: [2,".productinfo"]}
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod( "skip_or_fill_minimum", function( value, element, options ) {
	var $fields = $( options[ 1 ], element.form ),
		$fieldsFirst = $fields.eq( 0 ),
		validator = $fieldsFirst.data( "valid_skip" ) ? $fieldsFirst.data( "valid_skip" ) : $.extend( {}, this ),
		numberFilled = $fields.filter( function() {
			return validator.elementValue( this );
		} ).length,
		isValid = numberFilled === 0 || numberFilled >= options[ 0 ];

	// Store the cloned validator for future validation
	$fieldsFirst.data( "valid_skip", validator );

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if ( !$( element ).data( "being_validated" ) ) {
		$fields.data( "being_validated", true );
		$fields.each( function() {
			validator.element( this );
		} );
		$fields.data( "being_validated", false );
	}
	return isValid;
}, $.validator.format( "Please either skip these fields or fill at least {0} of them." ) );

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 *  }
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 *  }
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 *  }
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 *  }
 *
 */
$.validator.addMethod( "stateUS", function( value, element, options ) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if ( !includeTerritories && !includeMilitary ) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	} else if ( includeTerritories && includeMilitary ) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else if ( includeTerritories ) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	} else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	}

	regex = caseSensitive ? new RegExp( regex ) : new RegExp( regex, "i" );
	return this.optional( element ) || regex.test( value );
}, "Please specify a valid state" );

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod( "strippedminlength", function( value, element, param ) {
	return $( value ).text().length >= param;
}, $.validator.format( "Please enter at least {0} characters" ) );

$.validator.addMethod( "time", function( value, element ) {
	return this.optional( element ) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test( value );
}, "Please enter a valid time, between 00:00 and 23:59" );

$.validator.addMethod( "time12h", function( value, element ) {
	return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
}, "Please enter a valid time in 12-hour am/pm format" );

// Same as url, but TLD is optional
$.validator.addMethod( "url2", function( value, element ) {
	return this.optional( element ) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
}, $.validator.messages.url );

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true}" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "vinUS", function( v ) {
	if ( v.length !== 17 ) {
		return false;
	}

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for ( i = 0; i < 17; i++ ) {
		f = FL[ i ];
		d = v.slice( i, i + 1 );
		if ( i === 8 ) {
			cdv = d;
		}
		if ( !isNaN( d ) ) {
			d *= f;
		} else {
			for ( n = 0; n < LL.length; n++ ) {
				if ( d.toUpperCase() === LL[ n ] ) {
					d = VL[ n ];
					d *= f;
					if ( isNaN( cdv ) && n === 8 ) {
						cdv = LL[ n ];
					}
					break;
				}
			}
		}
		rs += d;
	}
	cd = rs % 11;
	if ( cd === 10 ) {
		cd = "X";
	}
	if ( cd === cdv ) {
		return true;
	}
	return false;
}, "The specified vehicle identification number (VIN) is invalid." );

$.validator.addMethod( "zipcodeUS", function( value, element ) {
	return this.optional( element ) || /^\d{5}(-\d{4})?$/.test( value );
}, "The specified US ZIP Code is invalid" );

$.validator.addMethod( "ziprange", function( value, element ) {
	return this.optional( element ) || /^90[2-5]\d\{2\}-\d{4}$/.test( value );
}, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx" );
return $;
}));

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dates_dates_js__ = __webpack_require__(19);
/**
 * Module to convert dates to human format
 */


$(document).ready(function () {

    if ($('#booking-template').length) {
        getBookingsList('upcoming');
    }

    /*
     * Get completed Bookings list
     */
    $('a[href="#completed"]').click(function (e) {
        getBookingsList('completed');
    });

    $('a[href="#cancelled"]').click(function (e) {
        getBookingsList('cancelled');
    });

    /*
     * Get a list of payment acording a gave status like parameter
     */
    function getBookingsList(status) {
        console.log(status);
        $.ajax({
            url: '/api/bookings',
            type: 'GET',
            data: {
                id_user: localStorage.getItem('id_user'),
                api_token: localStorage.getItem('api_token'),
                status: status
            },
            success: function success(reply) {
                if (reply.success != null && reply.success) {
                    console.log("==== my bookings ====");
                    console.log(reply.bookings);
                    drawBookings(reply.bookings, status);
                }
            }
        });
    }

    /*
     * Function to draw bookings
     */
    function drawBookings(bookings, status) {
        var template = $('#booking-template');
        $('#' + status + ' .mg-avl-rooms').html('');
        $(bookings).each(function (index, booking) {

            if (booking.apartment.thumbnail != null) {
                $('#booking-template .sa-thumbnail').attr('src', mainUrl + '/' + booking.apartment.thumbnail.path);
            }

            /** Draw apartment name **/
            var buildingName = "";
            booking.apartment.building.lang.map(function (b) {
                if (b.language.iso == locale) {
                    buildingName = b.name;
                    //$('#booking-template .sa-building-name').text(b.name);
                }
            });

            booking.apartment.lang.map(function (b) {
                if (b.language.iso == locale) {
                    buildingName += "- " + b.name;
                    //$('#booking-template .sa-building-name').text(b.name);
                }
            });

            $('#booking-template .sa-building-name').text(buildingName);

            /** Draw category apartment name **/
            booking.apartment.type.lang.map(function (type) {
                if (type.language.iso == locale) {
                    $('#booking-template .sa-apartment-type').text(type.name);
                }
            });

            $('#booking-template .sa-booking-reference span').text(booking.reference);

            if (booking.payment) {
                $('#booking-template .sa-booking-price').text(booking.payment.amount);
            } else {
                $('#booking-template .sa-booking-price').text(0);
            }

            /** Draw dates **/
            var dateStart = Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["b" /* converDate */])(booking.booking_date_start).split(' ');
            var dateEnd = Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["b" /* converDate */])(booking.booking_date_end).split(' ');

            $('#booking-template .sa-date.start .day').text(dateStart[1]);
            $('#booking-template .sa-date.start .month').text(dateStart[0]);
            $('#booking-template .sa-date.start .year').text(dateStart[2]);
            $('#booking-template .sa-date.start .day_b').text(Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["c" /* getHumanDay */])(booking.booking_date_start));
            $('#booking-template .sa-date.end .day').text(dateEnd[1]);
            $('#booking-template .sa-date.end .month').text(dateEnd[0]);
            $('#booking-template .sa-date.end .year').text(dateEnd[2]);
            $('#booking-template .sa-date.end .day_b').text(Object(__WEBPACK_IMPORTED_MODULE_0__dates_dates_js__["c" /* getHumanDay */])(booking.booking_date_end));

            /** Draw amenities **/
            var amenities = '';
            $(booking.apartment.amenities).each(function (i, amenity) {
                amenity.lang.map(function (amen) {
                    if (amen.language.iso == locale) {
                        amenities += '<li><i class="' + amenity.icon.icon + '"></i>' + amen.name + '</li>';
                    }
                });
            });

            $('#booking-template .mg-room-fecilities ul').html(amenities);
            $('#' + status + ' .mg-avl-rooms').append('<div class="mg-avl-room">' + template.html() + '</div>');
        });
    }

    /*
    * Click to show details of a booking
    */
    $('.tab-content').on('click', '.booking-detail .btn-main', function () {
        var button = $(this);
        button.parent("div").siblings(".mg-features").slideToggle("400", function () {
            if ($(this).is(":visible")) {
                button.text("Close Details");
            } else {
                button.text("View Details");
            }
        });
    });
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_messages_js__ = __webpack_require__(3);
var validate = __webpack_require__(2);

/**
 * Modules to show error and success messages
 */


$(document).ready(function () {

    /** Validate forms **/
    if ($('#sa-newsletter-form').length > 0) {
        $('#sa-newsletter-form').validate({
            submitHandler: function submitHandler(form) {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        $('#loader').show();
        $.ajax({
            url: '/api/newsletter/',
            type: 'GET',
            data: $('#sa-newsletter-form').serialize(),
            success: function success(reply) {
                $('#loader').hide();
                if (reply.success == true) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__messages_messages_js__["b" /* successMessage */])($('#sa-newsletter-form'), reply.message);
                } else {
                    Object(__WEBPACK_IMPORTED_MODULE_0__messages_messages_js__["a" /* errorMessage */])($('#sa-newsletter-form'), reply.message);
                }
            }
        });
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 95 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);