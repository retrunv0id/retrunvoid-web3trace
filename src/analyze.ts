export function analyzeSolidity(source: string): string[] {
    const issues: string[] = [];
    if (source.includes('msg.sender.transfer')) {
        issues.push('Potential reentrancy risk');
    }
    if (source.includes('unchecked')) {
        issues.push('Unchecked arithmetic detected');
    }
    return issues;
}