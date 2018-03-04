/*
 * Copyright 2016, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    "inherits/test",
    "assert/test",
    "util/test/browser/inspect",
    "util/test/browser/is",
    "underscore/test/arrays",
    "underscore/test/chaining",
    "underscore/test/collections",
    "underscore/test/functions",
    "underscore/test/objects",
    "underscore/test/utility",
    "validator/test/sanitizers",
    "validator/wilton-sanity-test",
    "moment/runAllTests",
    "bluebird/wilton-sanity-test",
    "sprintf-js/test/test",
    "sprintf-js/test/test_validation",
    "argparse/test/base",
    "argparse/test/childgroups",
    "argparse/test/choices",
    "argparse/test/conflict",
    "argparse/test/constant",
    "argparse/test/formatters",
    "argparse/test/group",
    "argparse/test/nargs",
    "argparse/test/optionals",
    "argparse/test/parents",
    "argparse/test/positionals",
    "argparse/test/prefix",
    "argparse/test/sub_commands",
    "argparse/test/suppress",
    "ieee754/test/basic",
    "base64-js/test/convert",
    "base64-js/test/url-safe",
    "buffer/test/base64",
    "buffer/test/basic",
    "buffer/test/compare",
    "buffer/test/constructor",
    "buffer/test/from-string",
    "buffer/test/is-buffer",
    "buffer/test/methods",
    "buffer/test/slice",
    "buffer/test/static",
    "buffer/test/to-string",
    "buffer/test/write",
    "buffer/test/write_infinity",
    "iconv-lite/test/main-test",
    "qs/test/parse",
    "qs/test/utils",
    "events/tests/index",
    "readable-stream/test/browser",
    "domhandler/test/tests",
    "entities/test/test",
    "htmlparser2/test/unicode",
    "htmlparser2/test/api",
    "boolbase/tests",
    "domutils/test/tests/helpers",
    "domutils/test/tests/legacy",
    "domutils/test/tests/traversal",
    "css-select/test/api",
    "css-select/test/attributes",
    "css-select/test/icontains",
    "css-select/test/test",
    "dom-serializer/test",
    "cheerio/test/cheerio",
    "cheerio/test/parse",
    "cheerio/test/xml",
    "utf8/tests/tests",
    "filesize/test/filesize_test",
    "statuses/test/test",
    "sjcl/runAllTests",
    "cuint/runAllTests",
    "mime-db/test/index",
    "weak-map/test/weak-map-test",
    "collections/test/all",
    "tinycolor/test/test",
    "ramda/runAllTests",
    "typify-parser/test/simple",
    "typify-parser/test/errors",
    "trampa/test/basic",
    "rc4/test/chisquare",
    "lazy-seq/test/append",
    "lazy-seq/test/cons",
    "lazy-seq/test/contains",
    "lazy-seq/test/every-some",
    "lazy-seq/test/examples",
    "lazy-seq/test/filter",
    "lazy-seq/test/lazy-seq",
    "lazy-seq/test/nil",
    "lazy-seq/test/singleton",
    "lazy-seq/test/specs",
    "lazy-seq/test/tail",
    "jsverify/runAllTests",
    "sanctuary-type-identifiers/test/index",
    "sanctuary-type-classes/test/index",
    "immutable/wilton-sanity-test",
    "fromcodepoint/tests/tests",
    "xregexp/tests/spec/s-addons-build",
    "xregexp/tests/spec/s-addons-matchrecursive",
    "xregexp/tests/spec/s-addons-unicode",
    "xregexp/tests/spec/s-xregexp-methods",
    "xregexp/tests/spec/s-xregexp-natives",
    "xregexp/tests/spec/s-xregexp",
    "querystring/test/index",
    "url/test",
    "ip/test/api-test",
    "cookie/test/parse",
    "cookie/test/serialize",
    "sax/runAllTests",
    "xml-writer/runAllTests",
    "random/spec/uuid4Spec",
    "json/test",
    "saxpath/test/saxpath",
    "saxpath/test/xml_recorder",
    "typedarray/test/tarray",
    "concat-stream/test/array",
    "concat-stream/test/buffer",
    "concat-stream/test/infer",
    "concat-stream/test/nothing",
    "concat-stream/test/objects",
    "concat-stream/test/string",
    "concat-stream/test/typedarray",
    "string-to-stream/test/basic",
    "process-nextick-args/test",
    "spark-md5/test/specs",
    "pwdauth/test"
], function() {
    return {
        main: function() { }
    };
});
