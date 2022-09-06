'use strict';

const validateNumber = (req, res, next) => {
  if (isNaN(req.query.num)) {
    next('Not a number');
  } else {
    next();
  }
}

module.exports = validateNumber;