"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
const basePlugin_1 = require("../basePlugin");
class BaseProvider extends basePlugin_1.BasePlugin {
    setContext(context) {
        this.context = context;
    }
}
exports.BaseProvider = BaseProvider;
