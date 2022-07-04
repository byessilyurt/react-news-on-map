const countryCodes = [
  // {
  //   country: "Albania",
  //   alpha2: "AL",
  //   alpha3: "ALB",
  //   numeric: 8,
  //   latitude: 41,
  //   longitude: 20,
  // },
  // {
  //   country: "Algeria",
  //   alpha2: "DZ",
  //   alpha3: "DZA",
  //   numeric: 12,
  //   latitude: 28,
  //   longitude: 3,
  // },
  // {
  //   country: "American Samoa",
  //   alpha2: "AS",
  //   alpha3: "ASM",
  //   numeric: 16,
  //   latitude: -14.3333,
  //   longitude: -170,
  // },
  // {
  //   country: "Andorra",
  //   alpha2: "AD",
  //   alpha3: "AND",
  //   numeric: 20,
  //   latitude: 42.5,
  //   longitude: 1.6,
  // },
  // {
  //   country: "Angola",
  //   alpha2: "AO",
  //   alpha3: "AGO",
  //   numeric: 24,
  //   latitude: -12.5,
  //   longitude: 18.5,
  // },
  // {
  //   country: "Anguilla",
  //   alpha2: "AI",
  //   alpha3: "AIA",
  //   numeric: 660,
  //   latitude: 18.25,
  //   longitude: -63.1667,
  // },
  // {
  //   country: "Antarctica",
  //   alpha2: "AQ",
  //   alpha3: "ATA",
  //   numeric: 10,
  //   latitude: -90,
  //   longitude: 0,
  // },
  // {
  //   country: "Antigua and Barbuda",
  //   alpha2: "AG",
  //   alpha3: "ATG",
  //   numeric: 28,
  //   latitude: 17.05,
  //   longitude: -61.8,
  // },
  {
    country: "Argentina",
    alpha2: "AR",
    alpha3: "ARG",
    numeric: 32,
    latitude: -34,
    longitude: -64,
  },
  // {
  //   country: "Aruba",
  //   alpha2: "AW",
  //   alpha3: "ABW",
  //   numeric: 533,
  //   latitude: 12.5,
  //   longitude: -69.9667,
  // },
  {
    country: "Australia",
    alpha2: "AU",
    alpha3: "AUS",
    numeric: 36,
    latitude: -27,
    longitude: 133,
  },
  {
    country: "Austria",
    alpha2: "AT",
    alpha3: "AUT",
    numeric: 40,
    latitude: 47.3333,
    longitude: 13.3333,
  },
  // {
  //   country: "Bahamas",
  //   alpha2: "BS",
  //   alpha3: "BHS",
  //   numeric: 44,
  //   latitude: 24.25,
  //   longitude: -76,
  // },
  // {
  //   country: "Bahrain",
  //   alpha2: "BH",
  //   alpha3: "BHR",
  //   numeric: 48,
  //   latitude: 26,
  //   longitude: 50.55,
  // },
  // {
  //   country: "Barbados",
  //   alpha2: "BB",
  //   alpha3: "BRB",
  //   numeric: 52,
  //   latitude: 13.1667,
  //   longitude: -59.5333,
  // },
  // {
  //   country: "Belarus",
  //   alpha2: "BY",
  //   alpha3: "BLR",
  //   numeric: 112,
  //   latitude: 53,
  //   longitude: 28,
  // },
  {
    country: "Belgium",
    alpha2: "BE",
    alpha3: "BEL",
    numeric: 56,
    latitude: 50.8333,
    longitude: 4,
  },
  // {
  //   country: "Belize",
  //   alpha2: "BZ",
  //   alpha3: "BLZ",
  //   numeric: 84,
  //   latitude: 17.25,
  //   longitude: -88.75,
  // },
  // {
  //   country: "Benin",
  //   alpha2: "BJ",
  //   alpha3: "BEN",
  //   numeric: 204,
  //   latitude: 9.5,
  //   longitude: 2.25,
  // },
  // {
  //   country: "Bermuda",
  //   alpha2: "BM",
  //   alpha3: "BMU",
  //   numeric: 60,
  //   latitude: 32.3333,
  //   longitude: -64.75,
  // },
  // {
  //   country: "Bhutan",
  //   alpha2: "BT",
  //   alpha3: "BTN",
  //   numeric: 64,
  //   latitude: 27.5,
  //   longitude: 90.5,
  // },
  // {
  //   country: "Bolivia, Plurinational State of",
  //   alpha2: "BO",
  //   alpha3: "BOL",
  //   numeric: 68,
  //   latitude: -17,
  //   longitude: -65,
  // },
  // {
  //   country: "Botswana",
  //   alpha2: "BW",
  //   alpha3: "BWA",
  //   numeric: 72,
  //   latitude: -22,
  //   longitude: 24,
  // },
  // {
  //   country: "Bouvet Island",
  //   alpha2: "BV",
  //   alpha3: "BVT",
  //   numeric: 74,
  //   latitude: -54.4333,
  //   longitude: 3.4,
  // },
  {
    country: "Brazil",
    alpha2: "BR",
    alpha3: "BRA",
    numeric: 76,
    latitude: -10,
    longitude: -55,
  },
  // {
  //   country: "British Indian Ocean Territory",
  //   alpha2: "IO",
  //   alpha3: "IOT",
  //   numeric: 86,
  //   latitude: -6,
  //   longitude: 71.5,
  // },
  // {
  //   country: "Brunei Darussalam",
  //   alpha2: "BN",
  //   alpha3: "BRN",
  //   numeric: 96,
  //   latitude: 4.5,
  //   longitude: 114.6667,
  // },
  {
    country: "Bulgaria",
    alpha2: "BG",
    alpha3: "BGR",
    numeric: 100,
    latitude: 43,
    longitude: 25,
  },
  // {
  //   country: "Burkina Faso",
  //   alpha2: "BF",
  //   alpha3: "BFA",
  //   numeric: 854,
  //   latitude: 13,
  //   longitude: -2,
  // },
  // {
  //   country: "Burundi",
  //   alpha2: "BI",
  //   alpha3: "BDI",
  //   numeric: 108,
  //   latitude: -3.5,
  //   longitude: 30,
  // },
  // {
  //   country: "Cambodia",
  //   alpha2: "KH",
  //   alpha3: "KHM",
  //   numeric: 116,
  //   latitude: 13,
  //   longitude: 105,
  // },
  // {
  //   country: "Cameroon",
  //   alpha2: "CM",
  //   alpha3: "CMR",
  //   numeric: 120,
  //   latitude: 6,
  //   longitude: 12,
  // },
  {
    country: "Canada",
    alpha2: "CA",
    alpha3: "CAN",
    numeric: 124,
    latitude: 60,
    longitude: -95,
  },
  // {
  //   country: "Cape Verde",
  //   alpha2: "CV",
  //   alpha3: "CPV",
  //   numeric: 132,
  //   latitude: 16,
  //   longitude: -24,
  // },
  // {
  //   country: "Cayman Islands",
  //   alpha2: "KY",
  //   alpha3: "CYM",
  //   numeric: 136,
  //   latitude: 19.5,
  //   longitude: -80.5,
  // },
  // {
  //   country: "Central African Republic",
  //   alpha2: "CF",
  //   alpha3: "CAF",
  //   numeric: 140,
  //   latitude: 7,
  //   longitude: 21,
  // },
  // {
  //   country: "Chad",
  //   alpha2: "TD",
  //   alpha3: "TCD",
  //   numeric: 148,
  //   latitude: 15,
  //   longitude: 19,
  // },
  {
    country: "China",
    alpha2: "CN",
    alpha3: "CHN",
    numeric: 156,
    latitude: 35,
    longitude: 105,
  },
  // {
  //   country: "Christmas Island",
  //   alpha2: "CX",
  //   alpha3: "CXR",
  //   numeric: 162,
  //   latitude: -10.5,
  //   longitude: 105.6667,
  // },
  // {
  //   country: "Cocos (Keeling) Islands",
  //   alpha2: "CC",
  //   alpha3: "CCK",
  //   numeric: 166,
  //   latitude: -12.5,
  //   longitude: 96.8333,
  // },
  // {
  //   country: "Colombia",
  //   alpha2: "CO",
  //   alpha3: "COL",
  //   numeric: 170,
  //   latitude: 4,
  //   longitude: -72,
  // },
  // {
  //   country: "Comoros",
  //   alpha2: "KM",
  //   alpha3: "COM",
  //   numeric: 174,
  //   latitude: -12.1667,
  //   longitude: 44.25,
  // },
  // {
  //   country: "Congo",
  //   alpha2: "CG",
  //   alpha3: "COG",
  //   numeric: 178,
  //   latitude: -1,
  //   longitude: 15,
  // },
  // {
  //   country: "Congo, the Democratic Republic of the",
  //   alpha2: "CD",
  //   alpha3: "COD",
  //   numeric: 180,
  //   latitude: 0,
  //   longitude: 25,
  // },
  // {
  //   country: "Cook Islands",
  //   alpha2: "CK",
  //   alpha3: "COK",
  //   numeric: 184,
  //   latitude: -21.2333,
  //   longitude: -159.7667,
  // },
  // {
  //   country: "Costa Rica",
  //   alpha2: "CR",
  //   alpha3: "CRI",
  //   numeric: 188,
  //   latitude: 10,
  //   longitude: -84,
  // },
  // {
  //   country: "Côte d'Ivoire",
  //   alpha2: "CI",
  //   alpha3: "CIV",
  //   numeric: 384,
  //   latitude: 8,
  //   longitude: -5,
  // },
  // {
  //   country: "Cuba",
  //   alpha2: "CU",
  //   alpha3: "CUB",
  //   numeric: 192,
  //   latitude: 21.5,
  //   longitude: -80,
  // },
  // {
  //   country: "Cyprus",
  //   alpha2: "CY",
  //   alpha3: "CYP",
  //   numeric: 196,
  //   latitude: 35,
  //   longitude: 33,
  // },
  {
    country: "Czech Republic",
    alpha2: "CZ",
    alpha3: "CZE",
    numeric: 203,
    latitude: 49.75,
    longitude: 15.5,
  },
  // {
  //   country: "Djibouti",
  //   alpha2: "DJ",
  //   alpha3: "DJI",
  //   numeric: 262,
  //   latitude: 11.5,
  //   longitude: 43,
  // },
  // {
  //   country: "Dominica",
  //   alpha2: "DM",
  //   alpha3: "DMA",
  //   numeric: 212,
  //   latitude: 15.4167,
  //   longitude: -61.3333,
  // },
  // {
  //   country: "Dominican Republic",
  //   alpha2: "DO",
  //   alpha3: "DOM",
  //   numeric: 214,
  //   latitude: 19,
  //   longitude: -70.6667,
  // },
  // {
  //   country: "Ecuador",
  //   alpha2: "EC",
  //   alpha3: "ECU",
  //   numeric: 218,
  //   latitude: -2,
  //   longitude: -77.5,
  // },
  {
    country: "Egypt",
    alpha2: "EG",
    alpha3: "EGY",
    numeric: 818,
    latitude: 27,
    longitude: 30,
  },
  // {
  //   country: "El Salvador",
  //   alpha2: "SV",
  //   alpha3: "SLV",
  //   numeric: 222,
  //   latitude: 13.8333,
  //   longitude: -88.9167,
  // },
  // {
  //   country: "Equatorial Guinea",
  //   alpha2: "GQ",
  //   alpha3: "GNQ",
  //   numeric: 226,
  //   latitude: 2,
  //   longitude: 10,
  // },
  // {
  //   country: "Eritrea",
  //   alpha2: "ER",
  //   alpha3: "ERI",
  //   numeric: 232,
  //   latitude: 15,
  //   longitude: 39,
  // },
  // {
  //   country: "Ethiopia",
  //   alpha2: "ET",
  //   alpha3: "ETH",
  //   numeric: 231,
  //   latitude: 8,
  //   longitude: 38,
  // },
  // {
  //   country: "Falkland Islands (Malvinas)",
  //   alpha2: "FK",
  //   alpha3: "FLK",
  //   numeric: 238,
  //   latitude: -51.75,
  //   longitude: -59,
  // },
  // {
  //   country: "Faroe Islands",
  //   alpha2: "FO",
  //   alpha3: "FRO",
  //   numeric: 234,
  //   latitude: 62,
  //   longitude: -7,
  // },
  // {
  //   country: "Fiji",
  //   alpha2: "FJ",
  //   alpha3: "FJI",
  //   numeric: 242,
  //   latitude: -18,
  //   longitude: 175,
  // },
  {
    country: "France",
    alpha2: "FR",
    alpha3: "FRA",
    numeric: 250,
    latitude: 46,
    longitude: 2,
  },
  // {
  //   country: "French Guiana",
  //   alpha2: "GF",
  //   alpha3: "GUF",
  //   numeric: 254,
  //   latitude: 4,
  //   longitude: -53,
  // },
  // {
  //   country: "French Polynesia",
  //   alpha2: "PF",
  //   alpha3: "PYF",
  //   numeric: 258,
  //   latitude: -15,
  //   longitude: -140,
  // },
  // {
  //   country: "French Southern Territories",
  //   alpha2: "TF",
  //   alpha3: "ATF",
  //   numeric: 260,
  //   latitude: -43,
  //   longitude: 67,
  // },
  // {
  //   country: "Gabon",
  //   alpha2: "GA",
  //   alpha3: "GAB",
  //   numeric: 266,
  //   latitude: -1,
  //   longitude: 11.75,
  // },
  // {
  //   country: "Gambia",
  //   alpha2: "GM",
  //   alpha3: "GMB",
  //   numeric: 270,
  //   latitude: 13.4667,
  //   longitude: -16.5667,
  // },
  {
    country: "Germany",
    alpha2: "DE",
    alpha3: "DEU",
    numeric: 276,
    latitude: 51,
    longitude: 9,
  },
  {
    country: "Greece",
    alpha2: "GR",
    alpha3: "GRC",
    numeric: 300,
    latitude: 39,
    longitude: 22,
  },
  {
    country: "Hong Kong",
    alpha2: "HK",
    alpha3: "HKG",
    numeric: 344,
    latitude: 22.25,
    longitude: 114.1667,
  },
  {
    country: "Hungary",
    alpha2: "HU",
    alpha3: "HUN",
    numeric: 348,
    latitude: 47,
    longitude: 20,
  },
  {
    country: "India",
    alpha2: "IN",
    alpha3: "IND",
    numeric: 356,
    latitude: 20,
    longitude: 77,
  },
  {
    country: "Indonesia",
    alpha2: "ID",
    alpha3: "IDN",
    numeric: 360,
    latitude: -5,
    longitude: 120,
  },
  {
    country: "Iraq",
    alpha2: "IQ",
    alpha3: "IRQ",
    numeric: 368,
    latitude: 33,
    longitude: 44,
  },
  {
    country: "Ireland",
    alpha2: "IE",
    alpha3: "IRL",
    numeric: 372,
    latitude: 53,
    longitude: -8,
  },
  {
    country: "Israel",
    alpha2: "IL",
    alpha3: "ISR",
    numeric: 376,
    latitude: 31.5,
    longitude: 34.75,
  },
  {
    country: "Italy",
    alpha2: "IT",
    alpha3: "ITA",
    numeric: 380,
    latitude: 42.8333,
    longitude: 12.8333,
  },
  {
    country: "Japan",
    alpha2: "JP",
    alpha3: "JPN",
    numeric: 392,
    latitude: 36,
    longitude: 138,
  },
  {
    country: "Korea, Republic of",
    alpha2: "KR",
    alpha3: "KOR",
    numeric: 410,
    latitude: 37,
    longitude: 127.5,
  },
  {
    country: "Latvia",
    alpha2: "LV",
    alpha3: "LVA",
    numeric: 428,
    latitude: 57,
    longitude: 25,
  },
  {
    country: "Lithuania",
    alpha2: "LT",
    alpha3: "LTU",
    numeric: 440,
    latitude: 56,
    longitude: 24,
  },
  {
    country: "Mexico",
    alpha2: "MX",
    alpha3: "MEX",
    numeric: 484,
    latitude: 23,
    longitude: -102,
  },
  {
    country: "Morocco",
    alpha2: "MA",
    alpha3: "MAR",
    numeric: 504,
    latitude: 32,
    longitude: -5,
  },
  {
    country: "Netherlands",
    alpha2: "NL",
    alpha3: "NLD",
    numeric: 528,
    latitude: 52.5,
    longitude: 5.75,
  },
  {
    country: "New Zealand",
    alpha2: "NZ",
    alpha3: "NZL",
    numeric: 554,
    latitude: -41,
    longitude: 174,
  },
  {
    country: "Nigeria",
    alpha2: "NG",
    alpha3: "NGA",
    numeric: 566,
    latitude: 10,
    longitude: 8,
  },
  {
    country: "Norway",
    alpha2: "NO",
    alpha3: "NOR",
    numeric: 578,
    latitude: 62,
    longitude: 10,
  },
  {
    country: "Philippines",
    alpha2: "PH",
    alpha3: "PHL",
    numeric: 608,
    latitude: 13,
    longitude: 122,
  },
  {
    country: "Poland",
    alpha2: "PL",
    alpha3: "POL",
    numeric: 616,
    latitude: 52,
    longitude: 20,
  },
  {
    country: "Portugal",
    alpha2: "PT",
    alpha3: "PRT",
    numeric: 620,
    latitude: 39.5,
    longitude: -8,
  },
  {
    country: "Romania",
    alpha2: "RO",
    alpha3: "ROU",
    numeric: 642,
    latitude: 46,
    longitude: 25,
  },
  {
    country: "Russian Federation",
    alpha2: "RU",
    alpha3: "RUS",
    numeric: 643,
    latitude: 60,
    longitude: 100,
  },
  {
    country: "Saudi Arabia",
    alpha2: "SA",
    alpha3: "SAU",
    numeric: 682,
    latitude: 25,
    longitude: 45,
  },
  {
    country: "Serbia",
    alpha2: "RS",
    alpha3: "SRB",
    numeric: 688,
    latitude: 44,
    longitude: 21,
  },
  // {
  //   country: "Seychelles",
  //   alpha2: "SC",
  //   alpha3: "SYC",
  //   numeric: 690,
  //   latitude: -4.5833,
  //   longitude: 55.6667,
  // },
  // {
  //   country: "Sierra Leone",
  //   alpha2: "SL",
  //   alpha3: "SLE",
  //   numeric: 694,
  //   latitude: 8.5,
  //   longitude: -11.5,
  // },
  {
    country: "Singapore",
    alpha2: "SG",
    alpha3: "SGP",
    numeric: 702,
    latitude: 1.3667,
    longitude: 103.8,
  },
  {
    country: "Slovakia",
    alpha2: "SK",
    alpha3: "SVK",
    numeric: 703,
    latitude: 48.6667,
    longitude: 19.5,
  },
  {
    country: "Slovenia",
    alpha2: "SI",
    alpha3: "SVN",
    numeric: 705,
    latitude: 46,
    longitude: 15,
  },
  {
    country: "South Africa",
    alpha2: "ZA",
    alpha3: "ZAF",
    numeric: 710,
    latitude: -29,
    longitude: 24,
  },
  {
    country: "Sweden",
    alpha2: "SE",
    alpha3: "SWE",
    numeric: 752,
    latitude: 62,
    longitude: 15,
  },
  {
    country: "Switzerland",
    alpha2: "CH",
    alpha3: "CHE",
    numeric: 756,
    latitude: 47,
    longitude: 8,
  },
  {
    country: "Thailand",
    alpha2: "TH",
    alpha3: "THA",
    numeric: 764,
    latitude: 15,
    longitude: 100,
  },

  {
    country: "Turkey",
    alpha2: "TR",
    alpha3: "TUR",
    numeric: 792,
    latitude: 39,
    longitude: 35,
  },
  {
    country: "Ukraine",
    alpha2: "UA",
    alpha3: "UKR",
    numeric: 804,
    latitude: 49,
    longitude: 32,
  },
  {
    country: "United Arab Emirates",
    alpha2: "AE",
    alpha3: "ARE",
    numeric: 784,
    latitude: 24,
    longitude: 54,
  },
  {
    country: "United Kingdom",
    alpha2: "GB",
    alpha3: "GBR",
    numeric: 826,
    latitude: 54,
    longitude: -2,
  },
  {
    country: "United States",
    alpha2: "US",
    alpha3: "USA",
    numeric: 840,
    latitude: 38,
    longitude: -97,
  },

  {
    country: "Venezuela, Bolivarian Republic of",
    alpha2: "VE",
    alpha3: "VEN",
    numeric: 862,
    latitude: 8,
    longitude: -66,
  },
];

export default countryCodes;