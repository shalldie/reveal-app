module.exports = {
    singleQuote: true,
    trailingComma: 'none',
    tabWidth: 4,
    endOfLine: 'auto',
    printWidth: 120,
    bracketSpacing: false,
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['*.yaml', '*.yml', '*.html'],
            options: {
                singleQuote: false,
                tabWidth: 2
            }
        },
        {
            files: ['package.json'],
            options: {
                tabWidth: 2
            }
        },
        {
            files: ['tsconfig.json'],
            options: {
                printWidth: 20
            }
        }
    ]
};
