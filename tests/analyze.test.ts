const { analyzeSolidity } = require('../src/analyze');

describe('analyzeSolidity', () => {
    test('detects reentrancy risk', () => {
        const source = 'function withdraw() { msg.sender.transfer(amount); }';
        const issues = analyzeSolidity(source);
        expect(issues).toContain('Potential reentrancy risk');
    });
});