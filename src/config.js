"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = getConfig;
const vscode = require("vscode");
function getConfig() {
    return vscode.workspace.getConfiguration('tuExtensión');
}
//# sourceMappingURL=config.js.map