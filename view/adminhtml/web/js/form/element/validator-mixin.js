define([
    'jquery',
    'underscore',
    'Magento_Ui/js/lib/validation/utils'
], function ($, moment) {
    'use strict';

    return function (validator) {

        validator.addRule(
            'validate-seconds-timer',
            function (value) {
                return (/^[+-]?(\d*\.)?\d+(s|ms)$/).test(value);
            },
            $.mage.__("Sorry, please make sure it's a time in seconds or milliseconds (s, or ms).")
        );

        return validator;
    };
});