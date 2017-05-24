'use strict';

const getCurrentDay = require('../lib/get-current-day');

module.exports = (robot) => {

  robot.hear(/ hi(?:[^a-zA-Z](?:.|\n)*)?$/i, (res) => {
    res.send(`Hello ${res.message.user.profile.first_name}! Happy ${getCurrentDay()}!`);
  });


  robot.hear(/ hello(?:[^a-zA-Z](?:.|\n)*)?$/i, (res) => {
    res.send(`Hi ${res.message.user.profile.first_name}! Happy ${getCurrentDay()}!`);
  });

};
