// src/utils/momentConfig.js
import moment from 'moment';
import 'moment/locale/en-gb';

// Set the locale globally
moment.locale('en-gb'); // Set locale to British English

// Update the week configuration
moment.updateLocale('en', {
    week: {
        dow: 1, // Set Monday as the first day of the week
        doy: 4, // The week containing Jan 4th is the first week of the year
    },
});

export default moment; // Export the configured moment instance
