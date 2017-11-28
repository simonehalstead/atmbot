var rest = require('../API/Restclient');
var builder = require('botbuilder');

//Calls 'getYelpData' in RestClient.js with 'displayRestaurantCards' as callback to get list of restaurant information
exports.displayRestaurantCards = function getRestaurantData(foodName, location, session){
    var url ='https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-36.8485,174.7633&radius=500'+location+'&type=bank&key=AIzaSyAsGzcmH3-Uw1J1Rd2EYgYR1BzART4wMAg';
    var auth ='cO92idzWqWjpOsV8RdAoB2DZl2GW8OE8pvoTlOjNNI0gbA2J7xXuiAPtLAYCkPCKR-dIXG3ePsSI4ngt8WRNQ4q4RlKMdXyvJr6r4_L3kndI5wpznLN6WUrPmgDYWXYx';
    rest.getYelpData(url,auth,session,displayRestaurantCards);
}
function displayRestaurantCards(message, session) {
    var attachment = [];
    var restaurants = JSON.parse(message);
    
    //For each restaurant, add herocard with name, address, image and url in attachment
    for (var index in restaurants.businesses) {
        var restaurant = restaurants.businesses[index];
        var name = restaurant.name;
        var imageURL = restaurant.image_url;
        var url = restaurant.url;
        var address = restaurant.location.address1 + ", " + restaurant.location.city;

        var card = new builder.HeroCard(session)
            .title(name)
            .text(address)
            .images([
                builder.CardImage.create(session, imageURL)])
            .buttons([
                builder.CardAction.openUrl(session, url, 'More Information')
            ]);
        attachment.push(card);

    }

    //Displays restaurant hero card carousel in chat box 
    session.send(new builder.Message(session).addAttachment({
        {
    "html_attributions": [],
    "next_page_token": "CqQCFQEAAEXoZ36OS2l8_JchEGAhtuTRwWRQP4rCHkXksRhw5xKVKg0zqBMpDf_JOoChvZDkjcVeXcMY5Mb706qC91puSC9oXqvney6gQ6LOpFJ0aWMWUqOIpAa7guwdxdKLooJczI5cDJH21N16EWU9r2p4l5Jl6CdqbzNv2m9VYXLcCFFptr4A2usPi7jEItwYvEybSFMuvm699wyatMxYpWhYLy39dFgRjlM1cWqkMjJEPjmg92o3udjVaPtJKk5K2z_kNZib2NK-umRMrM2D2NHrw8qkRsgUyJku3Sj9fxW_dIO2FIKvE74gDJtf8Vdv3H_y197eCIcHOMXDdFS4qtA4KL2fSlyYatDURiabmZSx40TzHLBuV-KA-PfbtZN-ryhyuRIQW07Dt-FonHVfxBxXzzMgRxoU8SO1Tos2_wF8YB9ahPgGUz0M5cA",
    "results": [
        {
            "geometry": {
                "location": {
                    "lat": -36.849718,
                    "lng": 174.7646953
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8484124697085,
                        "lng": 174.7661980302915
                    },
                    "southwest": {
                        "lat": -36.8511104302915,
                        "lng": 174.7635000697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "4d0ef19c4829d38515676f874e6cbb50648204ce",
            "name": "Westpac",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 2593,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106659146699193373357/photos\">Sandy Millar</a>"
                    ],
                    "photo_reference": "CmRZAAAAO7JlJyiqWQb0BFIjlM36SHEF-P9Zzi7Ef_XUW3yHCET1ThyDE4Eap1JWhGAR5PWZoOZGgY6TXiiWAjG5HorHLFvJ3OsabrJk5JUnbw7dJbjdFwCjbC3eDuv42Fwtg79VEhADAeeMof3W8_a5DBDrpIugGhRejvNhFu_LiWZFzEniOx1uxmeEpw",
                    "width": 3886
                }
            ],
            "place_id": "ChIJGSdLLeVHDW0RxYB3lwEKOo8",
            "rating": 3.3,
            "reference": "CmRSAAAAnx6j0dchQkajIjpJPRNczmR5wWdOm9Yu3Z2t6XUE2LxEGhv9KKKFAvNan-0Wrb-NxJw4ngDcbjEUGJdJ5k6Dpl9LXOV8wNd1qSyqjLHAAP674yZwoigytsqdxtN-puoMEhAxp5SHa1mwO6Z2RaGESAxzGhQyDBk2NKPJdubc55gpdMtirIHp-w",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "229 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.85105910000001,
                    "lng": 174.7646137
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8496949197085,
                        "lng": 174.7658672302915
                    },
                    "southwest": {
                        "lat": -36.8523928802915,
                        "lng": 174.7631692697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "854b947f827db95857650f7d94ef235a4079b153",
            "name": "ASB Bank Limited",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 2000,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/106102338181813674554/photos\">Dr Andrew Huang</a>"
                    ],
                    "photo_reference": "CmRaAAAA3C9IJVTdsIdZr7OqMhgUsfiltBmb5VUJYDPcXh8DKOqF3B1_Yy2MVH4OxDo9yF2NfboqNLa3VBpuldLOnQRImWZ0T6qIaAXq8PtuLVOGFWP7PW-sNKyj5TFAnrylCnNLEhAk06HNfRfb1N80HhlGSGcGGhSa0E7MKcQC9bb-N38YX8rQHxKw6g",
                    "width": 3008
                }
            ],
            "place_id": "ChIJEe7sPeVHDW0RkQVl4euy1r4",
            "rating": 4,
            "reference": "CmRSAAAAZTkMKhA5va_EeHEGkF9c1L9AB4vwptho2cS7EEvGDJrXHdjc5FgIbbMjthMHI7RkvkI48hDLwR4SE2zRdWTN_dIe1jZl0EEb7LU_jus1V51bYV4gr4OVKTjORP3qqEvBEhCquWx-P5iEukLp732mbWicGhTV49L32fVCiT4I-o7KP2vrFAl25g",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "300 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8461462,
                    "lng": 174.7663657
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8447799697085,
                        "lng": 174.7676206802915
                    },
                    "southwest": {
                        "lat": -36.8474779302915,
                        "lng": 174.7649227197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "fa052b4cc37f0e83ba2cece2892a1bd49991d69b",
            "name": "Bank of New Zealand",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 1760,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116723120561371319568/photos\">Jorge Clementez</a>"
                    ],
                    "photo_reference": "CmRaAAAA_LZUnEHFyyHMNl05l3SmhEZ9HZuN25PchciXV65HIm9yf9SIfuYO417_WbT3wdi7Kni7JheQw6ZcAI43KhBAPx0G9gyQKToYNWYWmVxe7U5O8A6weHlHi2-p2hFjIYJjEhBWBXSxV6sj4eWR8OmWPPmLGhRAczdpyY1h600kiG4VgOjoTmnuwA",
                    "width": 2168
                }
            ],
            "place_id": "ChIJJSx3ovpHDW0RKnyxPD2r6-E",
            "rating": 3.3,
            "reference": "CmRSAAAA6NS1lYy_p6RWgplcGn1Kt_z4ITmRWpEBEtyPFfiUP2Wr2WSmzwHvCqHNrKNLDjKawBSsmVa6QyLUTO1YLrJBYUcuSL8PTLPaI2y8n8SUdkiQmofBfJkQ0tqT3fVVVKbjEhAdOhbF8USMIS0ehwPn8e0dGhTenG1WAXYQlu2ADl-OJKPGV5XRwg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "80 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.846247,
                    "lng": 174.7658994
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8448980197085,
                        "lng": 174.7672483802915
                    },
                    "southwest": {
                        "lat": -36.8475959802915,
                        "lng": 174.7645504197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "ae6c6da9d1d7a61f8c5b5136b1953e89c30f8c5a",
            "name": "The Co-operative Bank",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 600,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116301509338773816456/photos\">The Co-operative Bank</a>"
                    ],
                    "photo_reference": "CmRaAAAA8ZYDEEsXW-z8T5BYfJ5QVxmauLYvWqBU_8e8vGW-XJpUqZxuYrzcp3Vi5d4DqMMJSpKzN1BNetgdguUzFLf5pvnQtzyhbXRZqM9EjJLWkDvyCJ0GRyZ4WKGhEEJNBDdWEhCQAVQhBSDRdxTJdSNMCeNoGhTNFGOWb8CZVAkXjyfX7xL8JR6hMw",
                    "width": 1069
                }
            ],
            "place_id": "ChIJx4YpxvpHDW0RG2bmqLqVMoc",
            "rating": 5,
            "reference": "CmRSAAAA85NBefdsCjpq1-4C0Lj9MmdhBSCWoQSaacHFcfVbAImRgfznaNuNedRMhX0Tn9NkIgApTwYqCaBroQW8wGA_8sryI2939PzfWWhqfO46FpajdPZQwA-267dldSx76X7JEhDVgiisukzrmbSvadJcRfgTGhR3aogVrFR9vc3oHAbyHNuIXuzCvQ",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "109 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8512143,
                    "lng": 174.7630972
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.84953546970849,
                        "lng": 174.7645641802915
                    },
                    "southwest": {
                        "lat": -36.85223343029149,
                        "lng": 174.7618662197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/post_office-71.png",
            "id": "a92a2593984afba638d0ffc9b634fa566895f84e",
            "name": "Wellesley Street NZ Post & Kiwibank",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 900,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/110069226267909896154/photos\">Baran bazhdar</a>"
                    ],
                    "photo_reference": "CmRaAAAAGBZzizmg-7js9-kCj5sglbUfJl_zi-GCbh5gNHJa4CP_dNG4NerPiywS35ft5FRRrlLz7uNSnkPG_MQdMTPdU1K5k9dzeEoq-BEVJ-f576p23ZWbBjz9oyJWnx1d1XZSEhCf-A6OeHg-2CcK23I6j3n3GhTKCKuVX7e2Lh4731U3O1I1wcZTAg",
                    "width": 600
                }
            ],
            "place_id": "ChIJVZqvYOVHDW0RXU13m9prwO4",
            "rating": 4.2,
            "reference": "CmRSAAAAC9xQiPEV4Qy3LV1pN2Y7K7nRdWA8_bjL5d6j8eD8sLzH6NuwA_4o4g0-IR0lXPIowl93iTkYsCyP9uRRmgw99tpxBta5VXcHkw7bOE5f5UWkhX6YRQYHWRieutilgl4KEhCiTkIrkemNEZcbU8ctBTPtGhRgqlnQTljoVXi8T2N8iG2NlM2dZQ",
            "scope": "GOOGLE",
            "types": [
                "post_office",
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "24 Wellesley Street West, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.847497,
                    "lng": 174.765526
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8461712197085,
                        "lng": 174.7669915302915
                    },
                    "southwest": {
                        "lat": -36.8488691802915,
                        "lng": 174.7642935697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/post_office-71.png",
            "id": "4e2040f0dda0575d1cecdbd5bfb6e6aba96dbff4",
            "name": "NZ Post & Kiwibank",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/108444906457499942926/photos\">Or Giladi</a>"
                    ],
                    "photo_reference": "CmRaAAAAfriIfaKAVNdPnOQGtsyKmLDNnkFQWYyZd9vzxjHMIj_CIMeeni0dnibHi-1SOqmVIfwg78zD5RBDR7jd-KZVjxspIKe32Qd7w2mh1wG1HriT0g0XKu73AnFwY0JaO-3EEhDnWm2y75vglpzm-0OsgSNWGhSSkZkKN6RNqeRZYeX-36gErJRQYg",
                    "width": 2988
                }
            ],
            "place_id": "ChIJjTT0AftHDW0RoJUaPSL8plE",
            "rating": 2.4,
            "reference": "CmRRAAAA0eXv09zmtfjtfM0FBxnB7n43YqR1gih1jQBzK5IVv75pEhHM97IZiXaw4fUb2Ieyz92ehX7AyXsAfsOb5HgiEvUyHCtAN0DZXh56GT99vaQdK412WVFTqVILAhwmVmjOEhBXlAB4n1LaNY7Xcc-X4n1cGhROAuuwTGD2giWO87SC8bgAb13yvg",
            "scope": "GOOGLE",
            "types": [
                "post_office",
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "155 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.84696049999999,
                    "lng": 174.7660459
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8456009197085,
                        "lng": 174.7673402302915
                    },
                    "southwest": {
                        "lat": -36.84829888029149,
                        "lng": 174.7646422697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "4d499453b15a46229b125b8a2e5ba079916ad0a6",
            "name": "ATM - Bank of New Zealand (BNZ)",
            "opening_hours": {
                "open_now": true,
                "weekday_text": []
            },
            "place_id": "ChIJUxAjpvtHDW0R5xAoR35TYh0",
            "rating": 5,
            "reference": "CmRRAAAAeHVOrwHQAXIjoyWv5szEBdRW_q7r-mObDEFCk9XSWYoCQHufTWsLeZM8tdT0sdzCHotYOWUlLHbaE9ziMAskAcWzJMx5s21ql1SmuKlDFuzvMoyDnlon9yuri-4f9OKIEhCvhe4aQCX3wk49m2y5YWAYGhTBa7en8xd8xiu7hXmlE830cj9t_w",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "112 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.848392,
                    "lng": 174.762117
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8470950197085,
                        "lng": 174.7636646802915
                    },
                    "southwest": {
                        "lat": -36.8497929802915,
                        "lng": 174.7609667197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "a74f97e85634ddf06cb819420c45fbab184577e0",
            "name": "ATM - Bank of New Zealand (BNZ)",
            "place_id": "ChIJj2DNEvBHDW0RxlAplxZhark",
            "reference": "CmRSAAAAlUiF436HPD1_LSH7_6mb24e5HNKnXXJQ0mcpEpbGRbbVs95hzdDEuHGiqOKm8SrX3BmcXRmWyVtXBveFCW0bRiFQ5WmHps0v_24y_ufXGcTmdwNX6iZ_Fmn92H_z5eVsEhBladyYknUHxwyHKEMRlWXOGhRAvhI8WagUA9vuAo6c14hw3ZwZMg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "91 Federal Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.84931199999999,
                    "lng": 174.764779
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.84800936970849,
                        "lng": 174.7663194802915
                    },
                    "southwest": {
                        "lat": -36.85070733029149,
                        "lng": 174.7636215197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "0b1f114b431268241c528fe50948dd66abc42d5d",
            "name": "ANZ",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 314,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/103067736912764196456/photos\">ANZ</a>"
                    ],
                    "photo_reference": "CmRaAAAAODOjwK7wEoM6hrYiAQN95-RCGk6FycKYgZvQyUm-pdVZy_oTg7UhC46qEHKOZhbrXZ9trcIaBz2CDxwj7_Jw0uXVmIZlpE_pT63PRo7sA7pZ3-Vs2c8T5xBHGK0O6k0AEhD-49a1IIGh5e5UWL-v9UbpGhSlN2iTB_z6bFlY5ey6mBQJOOlLAg",
                    "width": 1001
                }
            ],
            "place_id": "ChIJVQHJz_pHDW0RqKpTh075h7I",
            "rating": 4.1,
            "reference": "CmRSAAAA7wrjylS4yE6Y92YF2oUHR2j47vsvUI2TdfSuFrxGMq24OXat_5nihoIdozqinaijDAYcyceLyKS1sOksUgXBI4zTQD8_eQ_TNQ49RajJ-17DLi9C5xkbEKY0lcXsCL_OEhBzjqxP211_32X7xy-_jltfGhR84iiC6KwfOUudfXgs5QO-PfNR6Q",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "205 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8498497,
                    "lng": 174.7626419
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.84853201970851,
                        "lng": 174.7641150802915
                    },
                    "southwest": {
                        "lat": -36.85122998029151,
                        "lng": 174.7614171197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "9bf34386649d845969596f33e05f7ed307c41e05",
            "name": "Kookmin Bank",
            "place_id": "ChIJO2pq_u9HDW0RElhHtqCmVXg",
            "reference": "CmRRAAAAqCRBOtwLKLMxyrttrjKJO-jCM9-ZW10voPyxHKNnmikgLQciBFDAKXUxy5ZJob0K6KaJi3maHpm7xf4SYlJtvcGFuhf_vPU4NeKJFZNqpYjaLxncxfkCdFaJSy85u4DcEhBSTZDBcvgjt1M8pQ-n_xnMGhRAi-1mmL-_3pEXTtmCX_HrpCe7Kg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "135 Albert Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8491336,
                    "lng": 174.7650376
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8479313697085,
                        "lng": 174.7664856802915
                    },
                    "southwest": {
                        "lat": -36.8506293302915,
                        "lng": 174.7637877197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "de3b132fdbdc4c2cb8676b7028bb0f8fd6482e56",
            "name": "I.E Money",
            "place_id": "ChIJ_5kb1vpHDW0RHNncMrCbZr0",
            "reference": "CmRSAAAAaSo6qXl61FmDVNZe0M9ENxL4XUNGNO8huoa7QiWQYHZtihp5e-WDET6oQVx9x-yucE9GKd596uQkGcJ3VTC9MsRsycFNFQV0H9Z_7BS6cVuQG5a30n46syv105-cSm75EhDFoklElVU4ZsWhNHEuptqUGhQiyu2Z0CiC0E-Jg9Qg9W0cfQwieg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "205 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.84916739999999,
                    "lng": 174.7650644
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.84781841970849,
                        "lng": 174.7664133802915
                    },
                    "southwest": {
                        "lat": -36.85051638029149,
                        "lng": 174.7637154197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "b5a6fcf19dc8ba30418aa1774c86902e568e1c9c",
            "name": "ANZ",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 314,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/113746005017529934448/photos\">ANZ</a>"
                    ],
                    "photo_reference": "CmRaAAAAReYbZd3g91VU3AbiYqXTLeDhRv_cPYy1z3A6lfAHt-8XTnxfjcKOFilG3EQEOIxUAGPpVaqC85GcfGJ5XZaSWCbCZ1Vhgw7m1Q9IBZexzBuB2hINtQ4KVdxrqg7lcVawEhA4P9IHCIv0mKIk_dtjNPkQGhQ93G_8mjHxDGYNO799-rVhhbhZyQ",
                    "width": 1001
                }
            ],
            "place_id": "ChIJXfBExPlHDW0RMyKQTO2NkCY",
            "rating": 5,
            "reference": "CmRRAAAAUVtwrnC-R5KBdNABSShKyoIUxsq4HYZl-MrjtmkOchjFDsvvlZfnH5kC_cu24ZaQdCOup-_pwX3COiCaKf1Xky96ETrTR4A089xYJzNXBfR-pX3etV-_F91WTXLOzUM6EhCKgs_qYLJE5SxVBehZYxLBGhQsK_nQnTTRVzorzYjO1qOjPs2dMw",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "9 Symonds St, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8499136,
                    "lng": 174.7623408
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8485048197085,
                        "lng": 174.7634836302915
                    },
                    "southwest": {
                        "lat": -36.8512027802915,
                        "lng": 174.7607856697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "662a8c81431bf34fe3ce6ad7f055ce56aabc162a",
            "name": "ASB ATM",
            "place_id": "ChIJCSji_O9HDW0RcKm2qHNeI0E",
            "rating": 1,
            "reference": "CmRRAAAA4U9Ntkkbnz1gR2KuVX0BE8ycUQRS1ZSg-QtpkHgCoyaAjZCOY7tZdlGWEjJSdBawDTC0pGjXE4MHjeEAMZvB-m03uJR6EjLaPHoCxKQTYOYBFkkN0yQuym4HdhCg9U75EhARoQDhnBl4KkAYrzyQfOvqGhTIu9RiS_qEPJ24tfdAceg-sldPiQ",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "100 Federal Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8467942,
                    "lng": 174.7624574
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8454162197085,
                        "lng": 174.7637062802915
                    },
                    "southwest": {
                        "lat": -36.8481141802915,
                        "lng": 174.7610083197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "4e5ead30298f2d7c49e006f6e97c3f45112c1b5c",
            "name": "ASB Bank",
            "place_id": "ChIJt72ThvBHDW0RSvsQY6pGqjY",
            "rating": 5,
            "reference": "CmRRAAAABrQXlZ9D9BU3alIoRlu6QSD1QDTg3lp7FyftiDxfPCH7i8anurDLlIiXs8VWjhbrO5b7CRAmcaJwr-Vj94ic891-X9bSHED9G-0nigjognvsh31kH8IVyUSRjfkMYYfYEhC0qLMS-f6zt1YWc2OueRhyGhSKDin0dF39iDeDsNxXcIHofqKjzg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "42 Hobson Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.849278,
                    "lng": 174.765566
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8479290197085,
                        "lng": 174.7669149802915
                    },
                    "southwest": {
                        "lat": -36.8506269802915,
                        "lng": 174.7642170197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "41c0deb0c354f60e244c7243aa4eafc1132cfc5b",
            "name": "ATM - Bank of New Zealand (BNZ)",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "place_id": "ChIJ8TwUKPtHDW0RMZebTqcH_OA",
            "reference": "CmRSAAAAODBymLTod3BF6FaeJHGEODwmgN8WcwKeCiMxlTNqPWUygpqVgRBTg1sMgwUUTI5KpQQhaF6gpajtx3wVpUWAAUr3tIGeYjX_wBix_P9Nesjb3ZoxsNtKSQccMXXvz1szEhD_D6EAMfbSZQPh6X8kPhIwGhQ2FeRjuAwc4hW2RsR1HnbUpW5vuQ",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "214 220 Queen Street, Auckland Central, Auckland City, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.850169,
                    "lng": 174.765019
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8488200197085,
                        "lng": 174.7663679802915
                    },
                    "southwest": {
                        "lat": -36.8515179802915,
                        "lng": 174.7636700197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "03833f97eb55dc3f8750aef37abd3471c8e352bd",
            "name": "ANZ",
            "opening_hours": {
                "open_now": true,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 314,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/101480146822861821186/photos\">ANZ</a>"
                    ],
                    "photo_reference": "CmRaAAAAt_moberDRhaYRB5fEE6GAMJC-9vL4-7iQfvkXpx_KP17YHeRd_hLNwNxweVxKfs_I4IpLoW3ZmXz81xGTzUJ25ChxACWvR3jHEsMTEXBst5PZaLZ-LiRGdgH-LOHSzE5EhCkhdrtizU92QASx_czMPziGhTL-YFaU1dZ4CavXyh-wx6fXF1IiA",
                    "width": 1001
                }
            ],
            "place_id": "ChIJdZwsLOVHDW0RVQQvmwUuXXM",
            "reference": "CmRRAAAAXge0vhxpXGis2yH5UeXm56J8nVzJPSQDuq6RxmHK-tJbsMGLQYBaVHScz4jQKNkQcvBYsJa7LD3SaRE0sqfPKctiMg1BtzHt8W99mlHJG0OSN5Fi-LRXpfQySrYRqBRuEhAMUfdTupqloNfAz0Tq1g8aGhTH_hqAum9HQVIizIaNbaWh_fhhJQ",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "37 Miramar Ave, Miramar, Wellington"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.85020999999999,
                    "lng": 174.765142
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8488210697085,
                        "lng": 174.7663496302915
                    },
                    "southwest": {
                        "lat": -36.8515190302915,
                        "lng": 174.7636516697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "c7d8719a1c034ddae508919995f57def468363da",
            "name": "Bank of New Zealand",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "place_id": "ChIJ6--oLuVHDW0RV-sDyI8fLo0",
            "rating": 3.5,
            "reference": "CmRSAAAAXMTV5s1dTq9cbEYhXsiI5i1skKQhXalfRJUnmO8kpMRBYzp49cJ6bCWyDyiufvfJRRLXvWT_4HIdwuhkRMqA9SrKEU5p5p5c6uvtKkdqOrQn6RMI1QlEl2O-TzTyKrwtEhDCDcTSjloolDv4VHfHoQOrGhR89LKw5T6mHnsMLcabwYydo7LyUg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "262 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.850304,
                    "lng": 174.765084
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8489168697085,
                        "lng": 174.7662989802915
                    },
                    "southwest": {
                        "lat": -36.8516148302915,
                        "lng": 174.7636010197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "fd293890df31327615396709f1090fd703710a65",
            "name": "ANZ",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 314,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/116083834913053529343/photos\">ANZ</a>"
                    ],
                    "photo_reference": "CmRaAAAAl-BYA14LYRMLAfFI7-YnjShh_oYiArLTEZqPuWeRgHAyDirw6qZ97YTXEZXq9TJgJb34nfkjR_VrUhEnoaR6u8JMl-tEnKvAB-wTFqN74gUCDcVgdndG6PePHvOstNMVEhD4QMzdF3HUyC90Wo7kWrRHGhRYBxbNlyHEkDHFMvRTMQjY101ASg",
                    "width": 1001
                }
            ],
            "place_id": "ChIJ8Tb2dbZHDW0RKf-uqdJYdcM",
            "rating": 4.2,
            "reference": "CmRSAAAAOLmtJv-kSA2bkvx7kv0Wxt0bp9IPTnrzaIw4aew9B1vaP7CWKLcDQQhqax2Z2iPbY5RIvIwvCexM6TdoDFiTj0IKTFLED0-teFmudxElcFcRWlzg-Pcph7CIPv4kIGi2EhCAJEERdd3SsuVWrWIDS36UGhQjhrNY4fZm1Q8t2pP7k920shq-eg",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "268 Queen Street, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.847381,
                    "lng": 174.75854
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8462766697085,
                        "lng": 174.7599524302915
                    },
                    "southwest": {
                        "lat": -36.8489746302915,
                        "lng": 174.7572544697085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "110c5f5bb475e5538b2e6a734a3055c9842c94cd",
            "name": "Victoria Street West NZ Post & Kiwibank",
            "opening_hours": {
                "open_now": false,
                "weekday_text": []
            },
            "photos": [
                {
                    "height": 5312,
                    "html_attributions": [
                        "<a href=\"https://maps.google.com/maps/contrib/104785213168737155206/photos\">Umedha Hettigoda</a>"
                    ],
                    "photo_reference": "CmRaAAAANDD3ilx5aer0U86LcsFfU0Zq1KVJ_9lcW2-uL7KntXK3leEmytXGWkBoFWMAhrG7gBUi5nlkiDXhAEdRj4wFzQMJkMyVAntbjJ_UiEJjwtVYM0fxaXIDR8W12aeA5RaYEhBhbBQ5I45QSFEeWUOuJdkQGhRHQWTQR-oDHBRnXqbGaq1unqe5GA",
                    "width": 2988
                }
            ],
            "place_id": "ChIJMSUtl_FHDW0RNy4rAw-2IEQ",
            "rating": 2.8,
            "reference": "CmRRAAAAgSLTBEG6d2Xo4-0iAFdvEs1NNOuZwWF65ju-fWfTyP7rMvFujP_9CZZMxkF4gYsiPQYGeW4h_7TLC_-oxOCrvEJEYSRYa87oNGJDgaSuGae-PsPhHO0zL8d6FFD89A75EhBwGEPwCFwXtGCKY8wpUk5oGhReQYiNj5vIRW7e15X_PvxVEITnDQ",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "post_office",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "151 Victoria Street West, Auckland"
        },
        {
            "geometry": {
                "location": {
                    "lat": -36.8466169,
                    "lng": 174.7666517
                },
                "viewport": {
                    "northeast": {
                        "lat": -36.8452151697085,
                        "lng": 174.7680220802915
                    },
                    "southwest": {
                        "lat": -36.8479131302915,
                        "lng": 174.7653241197085
                    }
                }
            },
            "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/bank_dollar-71.png",
            "id": "7e8bc9baeec44d918df2013ba9d7e73d6c192a7c",
            "name": "Select Asset Management",
            "place_id": "ChIJQS_YovtHDW0RzGQnMHVk6Dc",
            "reference": "CmRRAAAAUNCsNNhvZnovafikJUrR4Nr0npt2Ysvnq9r4BAeXuUKHJOJmSlu5O1buAGzS39wiq2Uq3zJ5q_70o7rrFlzI3NHgvMsy4bXHOTj1XIuYSLpAuHag9xvhsK5smNWvzJSkEhC6msMaxeYM-P65EqOnLVYSGhQLFnECk_02L8rerbAi9dXO9vl75g",
            "scope": "GOOGLE",
            "types": [
                "bank",
                "finance",
                "point_of_interest",
                "establishment"
            ],
            "vicinity": "3-13 Shortland Street, Auckland"
        }
    ],
    "status": "OK"
}
}