const {
    SCRAPE_TYPES,
    SEARCH_TYPES,
} = require('./consts');

module.exports = {
    redirectedToLogin: () => new Error(
        'Page got redirected into login page. Instagram is blocking access. Retrying with different IP and browser. Make sure you are accessing public profile or being logged in',
    ),
    challengePage: () => new Error(
        "Challenge page appeared, will be retried but most likely won't work",
    ),
    doesntExist: () => new Error('Page does not exist'),
    agePage: () => new Error('The content requires 18+ consent to continue'),
    unsupportedPage: () => new Error('This instagram page is not supported.'),
    proxyIsRequired: () => new Error('Proxy is required to run this actor'),
    urlsAreRequired: () => new Error('Please provide urls configuration'),
    rateLimited: () => new Error('Encountered a rate limit, will wait until trying again'),
    typeIsRequired: () => new Error('Type of scrape is required for the actor to run.'),
    /** @param {keyof typeof SCRAPE_TYPES} type */
    unsupportedType: (type) => new Error(
        `Type "${type}" is not supported. Allowed types are "${Object.values(
            SCRAPE_TYPES,
        ).join('", "')}"`,
    ),
    // eslint-disable-next-line max-len
    searchTypeIsRequired: () => new Error(
        `When "query" parameter is provided, searchType parameter must be one of "${Object.values(
            SEARCH_TYPES,
        ).join('", "')}"`,
    ),
    /**
     * @param {keyof typeof SEARCH_TYPES} type
     */
    unsupportedSearchType: (type) => new Error(
        `Type "${type}" is not supported. Allowed types are "${Object.values(
            SEARCH_TYPES,
        ).join('", "')}"`,
    ),
    notPostPage: () => new Error('Comments can only be loaded from posts detail page.'),
    loginResultType: () => new Error(
        'When using login and password, you need to set the "What to scrape from each page" setting to "Cookies".',
    ),
    cookiesNotArray: () => new Error(
        'Login cookies has to be either Array of cookies or Array of Arrays of cookies.',
    ),
    xhrNotLoaded: () => new Error('Required XHR request not loaded.'),
    /**
     * @param {string} reelId
     */
    storiesNotLoaded: (reelId) => new Error(
        `Stories XHR for reelId: ${reelId}, not loaded correctly. Retrying.`,
    ),
};
