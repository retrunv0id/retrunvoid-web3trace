"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeSolidity = void 0;
function analyzeSolidity(source) {
    const issues = [];
    if (source.includes('msg.sender.transfer')) {
        issues.push('Potential reentrancy risk');
    }
    if (source.includes('unchecked')) {
        issues.push('Unchecked arithmetic detected');
    }
    return issues;
}
exports.analyzeSolidity = analyzeSolidity;
