module.exports = {
	singleQuote: true,
	semi: true,
	tabWidth: 4,
	useTabs: true,
	// true: { foo: bar }
	// false: {foo: bar}
	bracketSpacing: true,
	arrowParens: 'always',
	printWidth: 120,

	// true
	/* 
    <button
       className="prettier-class"
       id="prettier-id"
       onClick={this.handleClick}>
       Click Here
    </button> 
     */
	// while false
	/*
    <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}
    >
        Click Here
    </button>
     */
	jsxBracketSameLine: false,
};
