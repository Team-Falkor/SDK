"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePlugin = void 0;
// Define the context interface for dependencies
class BasePlugin {
    constructor(context) {
        this.api = context;
    }
}
exports.BasePlugin = BasePlugin;
