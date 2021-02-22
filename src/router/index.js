// Most of the code for the routing capabilities
// here came from https://codechips.me/svelte-routing-with-page-js-part-1/
// https://github.com/codechips/svelte-pagejs
import page from 'page';
import Router from './Router.svelte';
import Route from './Route.svelte';
import NotFound from './NotFound.svelte';

const redirect = path => page.redirect(path);

export { Router, Route, NotFound, redirect };