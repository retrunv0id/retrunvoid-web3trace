#!/usr/bin/env node
const { program } = require('commander');
const { analyzeSolidity } = require('../dist/index'); // Mengimpor dari dist/index.js
const fs = require('fs');

program
    .command('analyze <file>')
    .description('Analyze Solidity file for issues')
    .action((file) => {
        try {
            const source = fs.readFileSync(file, 'utf8');
            const issues = analyzeSolidity(source);
            console.log('Issues:', issues);
        } catch (error) {
            console.error('Error reading file:', error.message);
        }
    });

program
    .command('report-bug <description>')
    .description('Report a bug to TEA Protocol')
    .action((description) => {
        console.log(`Bug reported to TEA: ${description}`);
    });

program.parse(process.argv);