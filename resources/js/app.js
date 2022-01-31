window._ = require('lodash');

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.$ = require('jquery');

$(document).ready(() => 
{
    let heading = $('#page-heading');

    heading.css('color', 'blue');

    heading.slideDown(2000);

});