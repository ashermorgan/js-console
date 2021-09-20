/**
 * Print arguments to the app console
 * @param {...any} args The arguments
 */
function print(...args) {
    for (let value of args) {
        appendOutput(`${value}\n`);
    }
}

/**
 * Whether to ignore undefined results
 */
let ignoreUndefinedResults = false;

/**
 * The original console methods
 */
const oldConsole = {
    debug: console.debug,
    log: console.log,
    info: console.info,
    warn: console.warn,
    error: console.error,
    clear: console.clear,
}

/**
 * The new console.debug method
 * @param {...any} args The arguments
 */
console.debug = (...args) => {
    print(...args);
    oldConsole.debug(...args);
    ignoreUndefinedResults = true;
}

/**
 * The new console.log method
 * @param {...any} args The arguments
 */
console.log = (...args) => {
    print(...args);
    oldConsole.log(...args);
    ignoreUndefinedResults = true;
}

/**
 * The new console.info method
 * @param {...any} args The arguments
 */
console.info = (...args) => {
    print(...args);
    oldConsole.info(...args);
    ignoreUndefinedResults = true;
}

/**
 * The new console.warn method
 * @param {...any} args The arguments
 */
console.warn = (...args) => {
    print(...args);
    oldConsole.warn(...args);
    ignoreUndefinedResults = true;
}

/**
 * The new console.error method
 * @param {...any} args The arguments
 */
console.error = (...args) => {
    print(...args);
    oldConsole.error(...args);
    ignoreUndefinedResults = true;
}

/**
 * The new console.clear method
 */
console.clear = () => {
    document.getElementById('output').innerText = "";
    document.getElementById('clearButton').blur();
    appendOutput('Console was cleared.\n');
    oldConsole.clear();
    ignoreUndefinedResults = true;
}

/**
 * Execute the JavaScript code
 */
function execute() {
    // Blur execute button
    document.getElementById('executeButton').blur();

    // Reset ignoreUndefinedResults flag
    ignoreUndefinedResults = false;

    // Get JavaScript code
    const input = document.getElementById('input').value;
    appendOutput(`>>> ${input}\n`);

    try {
        // Execute the code
        const result = eval(input);
        if (result !== undefined || ignoreUndefinedResults == false) {
            appendOutput(`${result}\n`);
        }
    }
    catch (e) {
        // Print errors
        appendOutput(`${e}\n`);
        console.error(e);
    }

    // Scroll to bottom of app console
    const outputElement = document.getElementById('output');
    outputElement.scrollTop = outputElement.scrollHeight;
}

/**
 * Append a value to the app console
 * @param {String} value The value
 */
function appendOutput(value) {
    document.getElementById('output').innerText += value;
}

/**
 * Initialize the app
 */
function initializeApp() {
    document.getElementById('input').value = `console.log('Hello World!');`;
    document.getElementById('output').innerText = "";
}
