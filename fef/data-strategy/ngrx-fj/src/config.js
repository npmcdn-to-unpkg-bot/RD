System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  typescriptOptions: {
    "typeCheck": true,
    "tsconfig": true,
    "typingsMap": {
      "angular2": true,
      "rxjs": true
    }
  },
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "app": {
      "main": "bootstrap",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.js": {
          "loader": "ts"
        }
      }
    },
    "@ngrx/store": {
      "main": "dist/index.js",
      "defaultExtension": "js"
    },
    "@ngrx/devtools": {
      "main": "dist/index.js",
      "defaultExtension": "js"
    }
  },

  meta: {
    "angular2/*": {
      "deps": [
        "reflect-metadata",
        "rxjs",
        "es6-shim",
        "es6-promise",
        "zone.js"
      ]
    }
  },

  map: {
    "@ngrx": "https://unpkg.com/@ngrx",
    "angular2": "npm:angular2@2.0.0-beta.13",
    "es6-promise": "npm:es6-promise@3.1.2",
    "es6-shim": "github:es-shims/es6-shim@0.35.0",
    "immutable": "npm:immutable@3.7.6",
    "ngrx": "npm:@ngrx/store@1.3.3",
    "redux": "npm:redux@3.4.0",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rxjs": "npm:rxjs@5.0.0-beta.4",
    "ts": "github:frankwallis/plugin-typescript@3.0.3",
    "typescript": "npm:typescript@1.8.0",
    "zone.js": "npm:zone.js@0.6.8",
    "github:frankwallis/plugin-typescript@3.0.3": {
      "typescript": "npm:typescript@1.9.0-dev.20160214"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular2@2.0.0-beta.13": {
      "reflect-metadata": "npm:reflect-metadata@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.4",
      "zone.js": "npm:zone.js@0.6.8"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:es6-promise@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash@4.9.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:redux@3.4.0": {
      "lodash": "npm:lodash@4.9.0",
      "lodash-es": "npm:lodash-es@4.9.0",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:reflect-metadata@0.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:typescript@1.8.0": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zone.js@0.6.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
