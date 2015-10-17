'use strict';

const api = require('./api/request');

// https://github.com/SteamDatabase/SteamTracking/blob/master/API/Storefront.txt
const steam = {

  appDetails: function(appId, country, language) {
    return api.request('/appDetails', {
      qs: {
        'appids': appId,
        'cc': country || 'US',
        'l': language || 'EN'
      }
    });
  },

  appUserDetails: function(appId) {
    return api.request('/appuserdetails', {
      qs: {
        'v': 1,
        'appids': appId
      }
    });
  },

  checkoutCountryData: function() {
    return api.request('/checkoutcountrydata', {});
  },


  DLCForApp: function(appId) {
    return api.request('/dlcforapp', {
      qs: {
        'appid': appId
      }
    });
  },

  featured: function(country, language) {
    return api.request('/featured', {
      qs: {
        'cc': country || 'US',
        'l': language || 'EN'
      }
    });
  },

  featuredCategories: function(country, language) {
    return api.request('/featuredcategories', {
      qs: {
        'cc': country || 'US',
        'l': language || 'EN'
      }
    });
  },

  getAppsInCategory: function(category, country, language) {
    return api.request('/getappsincategory', {
      qs: {
        'category': category,
        'cc': country || 'US',
        'l': language || 'EN'
      }
    });
  },

  getAppsInGenre: function(genre, country, language) {
    return api.request('/getappsingenre', {
      qs: {
        'genre': genre,
        'cc': country || 'US',
        'l': language || 'EN'
      }
    });
  },

  getGenreList: function() {
    return api.request('/getgenrelist', {});
  },

  packageDetails: function(packageId, country, language) {
    return api.request('/packagedetails', {
      qs: {
        'cc': country || 'US',
        'l': language || 'EN',
        'packageids': packageId
      }
    });
  },

  salePage: function(salesId, country, language) {
    return api.request('/salepage', {
      qs: {
        'id': salesId,
        'cc': country || 'US',
        'l': language || 'EN'
      }
    });
  },

  storeSearch: function(term) {
    return api.request('/storesearch', {
      qs: { 'term': term }
    });
  },

  trailerSlideShow: function() {
    return api.request('/trailerslideshow', {});
  }
};

module.exports = steam;
