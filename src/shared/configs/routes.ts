/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {Array<string>}
 * */
export const publicRoutes: Array<string> = [
    '/login',
    '/signup'
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purpose
 * @type {string}
 * */
export const apiAuthPrefix: string = '/api/auth';

/**
 * The default redirect path after logging in
 * @type {string}
 * */
export const DEFAULT_LOGIN_REDIRECT: string = '/';

/**
 * The default redirect path if the user is not logged-in
 * @type {string}
 * */
export const DEFAULT_NOT_LOGGED_IN_REDIRECT: string = '/login';
