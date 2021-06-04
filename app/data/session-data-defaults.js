/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here

  "idvHandOffURL": "https://dth-prototype.herokuapp.com/auth/v8/register/start?service-name=Apply for New Style Jobseeker’s Allowance",

  "first-name": "Marvin",
  "last-name": "Gordon",

  "dob-day": "23",
  "dob-month": "03",
  "dob-year": "1988",

  "register-email-address": "m.gordon@gmail.com",
  "register-mobile-number": "07877 999000",
  
  "postcode": "MD10 0UP",
  "nino": "QQ 12 34 56 C"

}
