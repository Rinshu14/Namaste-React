import React, { useState } from "react";
import ReactDOM from "react-dom/client";

let baseImg="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
let restaurantsList=[
  {
    "info": {
      "id": "422749",
      "name": "Dabba Garam (Homestyle,Combo, Thali & More)",
      "cloudinaryImageId": "j2yst2jqzn20jgtg4vvj",
      "locality": "Omkar Online",
      "areaName": "Chembur",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Home Food",
        "North Indian",
        "Thalis"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "422749",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "67608",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-24 22:50:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹45"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dabba-garam-homestyle-combo-thali-and-more-omkar-online-chembur-mumbai-422749",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "100749",
      "name": "Oye Kiddan",
      "cloudinaryImageId": "564cc6cfeaec66b24178447a9a1a2afd",
      "locality": "Shanta Jog Marg",
      "areaName": "Chembur",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "100749",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "690",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-24 15:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/oye-kiddan-shanta-jog-marg-chembur-mumbai-100749",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "484594",
      "name": "KFC",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "locality": "East Point Market",
      "areaName": "East Point Kurla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "484594",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "547",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "28 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-25 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-east-point-market-east-point-kurla-mumbai-484594",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "23758",
      "name": "McDonald's",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "locality": "M G Road",
      "areaName": "Kurla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "23758",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3200
      },
      "parentId": "630",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-25 01:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹1000",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-m-g-road-kurla-mumbai-23758",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "665112",
      "name": "Big Bowl",
      "cloudinaryImageId": "992f217c2f122c0d8fc385855ca30722",
      "locality": "St Anthonys Road",
      "areaName": "Chembur",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "665112",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "434792",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-25 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/big-bowl-st-anthonys-road-chembur-mumbai-665112",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "355223",
      "name": "Great Indian Khichdi by EatFit",
      "cloudinaryImageId": "6e44fd7f1e5cd9967edfe47c10247671",
      "locality": "Shah Industrial estate",
      "areaName": "Chembur",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Home Food",
        "Indian",
        "North Indian",
        "Healthy Food",
        "Snacks",
        "Desserts",
        "Rajasthani",
        "South Indian",
        "Maharashtrian",
        "Sweets"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "355223",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3800
      },
      "parentId": "319582",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-24 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-shah-industrial-estate-chembur-mumbai-355223",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "233331",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "SG Barve Marg",
      "areaName": "Kurla",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "233331",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3200
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3200
      },
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-25 06:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-sg-barve-marg-kurla-mumbai-233331",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "24511",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "qcpyngo3cdfc6cocagbh",
      "locality": "R-City, Ghatkopar(West)",
      "areaName": "Ghatkopar East",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "24511",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "2456",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-24 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-r-city-ghatkopar-west-ghatkopar-east-mumbai-24511",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "49297",
      "name": "Sadguru Veg Diet-(BMC)",
      "cloudinaryImageId": "vz1kkm6hbtgdmcaffmh3",
      "locality": "Hotel Jewel of Chembur",
      "areaName": "Chembur",
      "costForTwo": "₹550 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "49297",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "352281",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "27 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-09-25 01:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-dd0c8483-7edc-46a2-9f31-0123b718ab44"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sadguru-veg-diet-bmc-hotel-jewel-of-chembur-mumbai-49297",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]
//let logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSddccotAtSgd1R7LzWO7dn9PV2Zdc7_IgVhw&usqp=CAU";
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo_img"
        src="https://cdn.dribbble.com/userupload/5966432/file/original-03c1fe57f7907074905632cbf187f058.png?crop=0x0-2800x2100&resize=320x240&vertical=center"
      />
   <div className="search">

     <input className="search_bar" type="text" placeholder="Search"></input>
    

    <span className="search_img"></span>
     
   </div>
    
      
      <div className="hedr_list">
        <ul className="list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};



let Body = () => {
  return <>
    <Banner/>
    <div className="res_card_container">
   {restaurantsList.map((restaurant)=>{
 
  return <ResCard key={restaurant.info.id} restaurant={restaurant.info} />
   })}
    </div>
  </>;
};
let Search = () => {
 return <>
  <input type="text" placeholder="Search....."></input>
  <input type="text" placeholder="Search"></input>
  </>
};
let Banner = () => {
  return (
    <div className="banr">
      
 
        <img
          className="banr_img"
          src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
        />
      
    </div>
  );
};
let ResCard = (props) => {
 const{name,cloudinaryImageId,cuisines,costForTwo,avgRating,areaName}=props.restaurant;
 const distance=props.restaurant?.sla?.lastMileTravel;

  return <div className="res_card">
    <img className="food_img" src={baseImg+cloudinaryImageId}/>
 <div>

   <p className="res_name">{name}</p>
   <p className="food_name">{areaName}</p>
   <p className="cousn_name">{cuisines.join(",")}</p>
   <div className="sub_sec_res_card">
    <span className="food_rating"><span className="fa fa-star"></span>{avgRating}</span>
    <span className="res_dstnce">{distance}KM</span>
    <span className="prce_for_two">{costForTwo}</span>
    {/* <p className="food_rating"><span class="fa fa-star"></span>4.5</p>
    <p className="res_dstnce">40kmm</p>
    <p className="prce_for_two">$250 For Two</p> */}
 </div>
   </div>
  </div>;
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
      
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<AppLayout />);
