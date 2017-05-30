'use strict';

module.exports =  (obj) => {
  const isFormUrlEncoded = obj.headers && obj.headers['Content-Type'] === 'application/x-www-form-urlencoded';
  return isFormUrlEncoded;
};

