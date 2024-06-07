import { markerProps } from './constants/location.constants.js';
let map;

async function onInit() {
    document.querySelector('#map').setAttribute('data-load', true);
    onInitMapsAPI();
}

function onInitMapsAPI() {
    ymaps3.ready.then(async () => {
        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
        map = new YMap(
            document.getElementById('map'),
            {
                location: {
                    center: [30.288002, 59.960778],
                    zoom: 10
                }
            }
        );
        map.addChild( new YMapDefaultSchemeLayer({
            theme: "dark",
            customization:
                [
                    {
                        "tags": "country",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#375de6"
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 4
                            },
                            {
                                "opacity": 1,
                                "zoom": 5
                            },
                            {
                                "opacity": 1,
                                "zoom": 6
                            },
                            {
                                "opacity": 1,
                                "zoom": 7
                            },
                            {
                                "opacity": 1,
                                "zoom": 8
                            },
                            {
                                "opacity": 1,
                                "zoom": 9
                            },
                            {
                                "opacity": 1,
                                "zoom": 10
                            },
                            {
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "country",
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#2c4396"
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.47,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.44,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.41,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.38,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.35,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.33,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.28,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 16
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 17
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 18
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 19
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 20
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "region",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#1a41d1",
                                "opacity": 0.5,
                                "zoom": 0
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 0.5,
                                "zoom": 1
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 0.5,
                                "zoom": 2
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 0.5,
                                "zoom": 3
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 0.5,
                                "zoom": 4
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 0.5,
                                "zoom": 5
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 1,
                                "zoom": 6
                            },
                            {
                                "color": "#1a41d1",
                                "opacity": 1,
                                "zoom": 7
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 8
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 9
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 10
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "color": "#375de6",
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "region",
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#2c4396"
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.47,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.44,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.41,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.38,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.35,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.33,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.28,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 16
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 17
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 18
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 19
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 20
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "admin",
                            "none": [
                                "country",
                                "region",
                                "locality",
                                "district",
                                "address"
                            ]
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#375de6"
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 5
                            },
                            {
                                "opacity": 1,
                                "zoom": 6
                            },
                            {
                                "opacity": 1,
                                "zoom": 7
                            },
                            {
                                "opacity": 1,
                                "zoom": 8
                            },
                            {
                                "opacity": 1,
                                "zoom": 9
                            },
                            {
                                "opacity": 1,
                                "zoom": 10
                            },
                            {
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "admin",
                            "none": [
                                "country",
                                "region",
                                "locality",
                                "district",
                                "address"
                            ]
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#2c4396"
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.15,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.47,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.44,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.41,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.38,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.35,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.33,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.28,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 16
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 17
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 18
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 19
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 20
                            },
                            {
                                "opacity": 0.25,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "landcover",
                            "none": "vegetation"
                        },
                        "stylers": [
                            {
                                "hue": "#303f6e"
                            }
                        ]
                    },
                    {
                        "tags": "vegetation",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#405391",
                                "opacity": 0.1,
                                "zoom": 0
                            },
                            {
                                "color": "#405391",
                                "opacity": 0.1,
                                "zoom": 1
                            },
                            {
                                "color": "#405391",
                                "opacity": 0.1,
                                "zoom": 2
                            },
                            {
                                "color": "#405391",
                                "opacity": 0.1,
                                "zoom": 3
                            },
                            {
                                "color": "#405391",
                                "opacity": 0.1,
                                "zoom": 4
                            },
                            {
                                "color": "#405391",
                                "opacity": 0.1,
                                "zoom": 5
                            },
                            {
                                "color": "#405391",
                                "opacity": 0.2,
                                "zoom": 6
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.3,
                                "zoom": 7
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.4,
                                "zoom": 8
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.6,
                                "zoom": 9
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.8,
                                "zoom": 10
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "park",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 0
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 1
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 2
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 3
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 4
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 5
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.2,
                                "zoom": 6
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.3,
                                "zoom": 7
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.4,
                                "zoom": 8
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.6,
                                "zoom": 9
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.8,
                                "zoom": 10
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.9,
                                "zoom": 16
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.8,
                                "zoom": 17
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 18
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 19
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 20
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "national_park",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 0
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 1
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 2
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 3
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 4
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.1,
                                "zoom": 5
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.2,
                                "zoom": 6
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.3,
                                "zoom": 7
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.4,
                                "zoom": 8
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.6,
                                "zoom": 9
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 0.8,
                                "zoom": 10
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "color": "#303f6e",
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 16
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 17
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 18
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 19
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 20
                            },
                            {
                                "color": "#2a3760",
                                "opacity": 0.7,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "cemetery",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#303f6e",
                                "zoom": 0
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 1
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 2
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 3
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 4
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 5
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 6
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 7
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 8
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 9
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 10
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 11
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 12
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 13
                            },
                            {
                                "color": "#2d3b67",
                                "zoom": 14
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 15
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 16
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 17
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 18
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 19
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 20
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "sports_ground",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 6
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 7
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 8
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 9
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 10
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 11
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 12
                            },
                            {
                                "color": "#384880",
                                "opacity": 0,
                                "zoom": 13
                            },
                            {
                                "color": "#354479",
                                "opacity": 0,
                                "zoom": 14
                            },
                            {
                                "color": "#324071",
                                "opacity": 0.5,
                                "zoom": 15
                            },
                            {
                                "color": "#323f70",
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "color": "#313f6f",
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "color": "#313e6e",
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "color": "#303d6c",
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#303d6b",
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "color": "#2f3c6a",
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "terrain",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "hue": "#36477c"
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.3,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.35,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 9
                            },
                            {
                                "opacity": 1,
                                "zoom": 10
                            },
                            {
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "geographic_line",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#a6b2d8"
                            }
                        ]
                    },
                    {
                        "tags": "land",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#36487c",
                                "zoom": 0
                            },
                            {
                                "color": "#36487c",
                                "zoom": 1
                            },
                            {
                                "color": "#36487c",
                                "zoom": 2
                            },
                            {
                                "color": "#36487c",
                                "zoom": 3
                            },
                            {
                                "color": "#36487c",
                                "zoom": 4
                            },
                            {
                                "color": "#354679",
                                "zoom": 5
                            },
                            {
                                "color": "#334475",
                                "zoom": 6
                            },
                            {
                                "color": "#324272",
                                "zoom": 7
                            },
                            {
                                "color": "#30406e",
                                "zoom": 8
                            },
                            {
                                "color": "#30406e",
                                "zoom": 9
                            },
                            {
                                "color": "#30406e",
                                "zoom": 10
                            },
                            {
                                "color": "#30406e",
                                "zoom": 11
                            },
                            {
                                "color": "#30406e",
                                "zoom": 12
                            },
                            {
                                "color": "#30406e",
                                "zoom": 13
                            },
                            {
                                "color": "#2f3e6b",
                                "zoom": 14
                            },
                            {
                                "color": "#2d3c67",
                                "zoom": 15
                            },
                            {
                                "color": "#2d3c66",
                                "zoom": 16
                            },
                            {
                                "color": "#2d3b66",
                                "zoom": 17
                            },
                            {
                                "color": "#2d3b65",
                                "zoom": 18
                            },
                            {
                                "color": "#2c3a64",
                                "zoom": 19
                            },
                            {
                                "color": "#2c3a64",
                                "zoom": 20
                            },
                            {
                                "color": "#2c3963",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "residential",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 0
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 1
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 2
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 3
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 4
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 5
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 6
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 8
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 9
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 10
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 11
                            },
                            {
                                "color": "#36487c",
                                "opacity": 0.5,
                                "zoom": 12
                            },
                            {
                                "color": "#36487c",
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "color": "#334475",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#30406e",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#303f6d",
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "color": "#2f3f6c",
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "color": "#2f3e6b",
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "color": "#2e3d69",
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#2e3d68",
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "color": "#2d3c67",
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "locality",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#36487c",
                                "zoom": 0
                            },
                            {
                                "color": "#36487c",
                                "zoom": 1
                            },
                            {
                                "color": "#36487c",
                                "zoom": 2
                            },
                            {
                                "color": "#36487c",
                                "zoom": 3
                            },
                            {
                                "color": "#36487c",
                                "zoom": 4
                            },
                            {
                                "color": "#36487c",
                                "zoom": 5
                            },
                            {
                                "color": "#36487c",
                                "zoom": 6
                            },
                            {
                                "color": "#36487c",
                                "zoom": 7
                            },
                            {
                                "color": "#36487c",
                                "zoom": 8
                            },
                            {
                                "color": "#36487c",
                                "zoom": 9
                            },
                            {
                                "color": "#36487c",
                                "zoom": 10
                            },
                            {
                                "color": "#36487c",
                                "zoom": 11
                            },
                            {
                                "color": "#36487c",
                                "zoom": 12
                            },
                            {
                                "color": "#36487c",
                                "zoom": 13
                            },
                            {
                                "color": "#334475",
                                "zoom": 14
                            },
                            {
                                "color": "#30406e",
                                "zoom": 15
                            },
                            {
                                "color": "#303f6d",
                                "zoom": 16
                            },
                            {
                                "color": "#2f3f6c",
                                "zoom": 17
                            },
                            {
                                "color": "#2f3e6b",
                                "zoom": 18
                            },
                            {
                                "color": "#2e3d69",
                                "zoom": 19
                            },
                            {
                                "color": "#2e3d68",
                                "zoom": 20
                            },
                            {
                                "color": "#2d3c67",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "structure",
                            "none": [
                                "building",
                                "fence"
                            ]
                        },
                        "elements": "geometry",
                        "stylers": [
                            {
                                "opacity": 0.9
                            },
                            {
                                "color": "#36487c",
                                "zoom": 0
                            },
                            {
                                "color": "#36487c",
                                "zoom": 1
                            },
                            {
                                "color": "#36487c",
                                "zoom": 2
                            },
                            {
                                "color": "#36487c",
                                "zoom": 3
                            },
                            {
                                "color": "#36487c",
                                "zoom": 4
                            },
                            {
                                "color": "#36487c",
                                "zoom": 5
                            },
                            {
                                "color": "#36487c",
                                "zoom": 6
                            },
                            {
                                "color": "#36487c",
                                "zoom": 7
                            },
                            {
                                "color": "#36487c",
                                "zoom": 8
                            },
                            {
                                "color": "#36487c",
                                "zoom": 9
                            },
                            {
                                "color": "#36487c",
                                "zoom": 10
                            },
                            {
                                "color": "#36487c",
                                "zoom": 11
                            },
                            {
                                "color": "#36487c",
                                "zoom": 12
                            },
                            {
                                "color": "#36487c",
                                "zoom": 13
                            },
                            {
                                "color": "#334475",
                                "zoom": 14
                            },
                            {
                                "color": "#30406e",
                                "zoom": 15
                            },
                            {
                                "color": "#303f6d",
                                "zoom": 16
                            },
                            {
                                "color": "#2f3f6c",
                                "zoom": 17
                            },
                            {
                                "color": "#2f3e6b",
                                "zoom": 18
                            },
                            {
                                "color": "#2e3d69",
                                "zoom": 19
                            },
                            {
                                "color": "#2e3d68",
                                "zoom": 20
                            },
                            {
                                "color": "#2d3c67",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "building",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#36487c"
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.7,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 16
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 17
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 18
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 19
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 20
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "building",
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#435898"
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "urban_area",
                            "none": [
                                "residential",
                                "industrial",
                                "cemetery",
                                "park",
                                "medical",
                                "sports_ground",
                                "beach",
                                "construction_site"
                            ]
                        },
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 0
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 1
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 2
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 3
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 4
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 5
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 6
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 7
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 8
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 9
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 10
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "color": "#3d4f8a",
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "color": "#394a82",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#354579",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#314070",
                                "opacity": 0.67,
                                "zoom": 16
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 0.33,
                                "zoom": 17
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 0,
                                "zoom": 18
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 0,
                                "zoom": 19
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 0,
                                "zoom": 20
                            },
                            {
                                "color": "#2d3b67",
                                "opacity": 0,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "poi",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "poi",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "poi",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "outdoor",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "outdoor",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "outdoor",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "park",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "park",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "park",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "cemetery",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "cemetery",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "cemetery",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "beach",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "beach",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "beach",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "medical",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "medical",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "medical",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "shopping",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "shopping",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "shopping",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "commercial_services",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "commercial_services",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "commercial_services",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "food_and_drink",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "food_and_drink",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "food_and_drink",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "road",
                        "elements": "label.icon",
                        "types": "point",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "road",
                        "elements": "label.text.fill",
                        "types": "point",
                        "stylers": [
                            {
                                "color": "#183dc3"
                            }
                        ]
                    },
                    {
                        "tags": "entrance",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            },
                            {
                                "hue": "#0a1a52"
                            }
                        ]
                    },
                    {
                        "tags": "locality",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#081544"
                            },
                            {
                                "secondary-color": "#183dc3"
                            }
                        ]
                    },
                    {
                        "tags": "country",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "opacity": 0.8
                            },
                            {
                                "color": "#8393c9"
                            }
                        ]
                    },
                    {
                        "tags": "country",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "region",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#8393c9"
                            },
                            {
                                "opacity": 0.8
                            }
                        ]
                    },
                    {
                        "tags": "region",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "district",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#8393c9"
                            },
                            {
                                "opacity": 0.8
                            }
                        ]
                    },
                    {
                        "tags": "district",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "admin",
                            "none": [
                                "country",
                                "region",
                                "locality",
                                "district",
                                "address"
                            ]
                        },
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#8393c9"
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "admin",
                            "none": [
                                "country",
                                "region",
                                "locality",
                                "district",
                                "address"
                            ]
                        },
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "locality",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1",
                                "zoom": 0
                            },
                            {
                                "color": "#bcc4e1",
                                "zoom": 1
                            },
                            {
                                "color": "#bcc4e1",
                                "zoom": 2
                            },
                            {
                                "color": "#bcc4e1",
                                "zoom": 3
                            },
                            {
                                "color": "#bcc4e1",
                                "zoom": 4
                            },
                            {
                                "color": "#bfc7e2",
                                "zoom": 5
                            },
                            {
                                "color": "#c2c9e4",
                                "zoom": 6
                            },
                            {
                                "color": "#c4cce5",
                                "zoom": 7
                            },
                            {
                                "color": "#c7cfe6",
                                "zoom": 8
                            },
                            {
                                "color": "#cad1e8",
                                "zoom": 9
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 10
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 11
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 12
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 13
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 14
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 15
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 16
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 17
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 18
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 19
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 20
                            },
                            {
                                "color": "#cdd4e9",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "locality",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "road",
                        "elements": "label.text.fill",
                        "types": "polyline",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            }
                        ]
                    },
                    {
                        "tags": "road",
                        "elements": "label.text.outline",
                        "types": "polyline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "road",
                        "elements": "geometry.fill.pattern",
                        "types": "polyline",
                        "stylers": [
                            {
                                "scale": 1
                            },
                            {
                                "color": "#7686c1"
                            }
                        ]
                    },
                    {
                        "tags": "road",
                        "elements": "label.text.fill",
                        "types": "point",
                        "stylers": [
                            {
                                "color": "#a9b9f4"
                            }
                        ]
                    },
                    {
                        "tags": "structure",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#3e518e"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "structure",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "address",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#3e518e"
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.9,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "address",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": "landscape",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#8393c9",
                                "opacity": 1,
                                "zoom": 0
                            },
                            {
                                "color": "#8393c9",
                                "opacity": 1,
                                "zoom": 1
                            },
                            {
                                "color": "#8393c9",
                                "opacity": 1,
                                "zoom": 2
                            },
                            {
                                "color": "#8393c9",
                                "opacity": 1,
                                "zoom": 3
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 4
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 5
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 6
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 8
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 9
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 10
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 11
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 12
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 13
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 14
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 15
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 16
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 17
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 18
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 19
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 20
                            },
                            {
                                "color": "#3e518e",
                                "opacity": 0.5,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "landscape",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 3
                            },
                            {
                                "opacity": 0,
                                "zoom": 4
                            },
                            {
                                "opacity": 0,
                                "zoom": 5
                            },
                            {
                                "opacity": 0,
                                "zoom": 6
                            },
                            {
                                "opacity": 0,
                                "zoom": 7
                            },
                            {
                                "opacity": 0,
                                "zoom": 8
                            },
                            {
                                "opacity": 0,
                                "zoom": 9
                            },
                            {
                                "opacity": 0,
                                "zoom": 10
                            },
                            {
                                "opacity": 0,
                                "zoom": 11
                            },
                            {
                                "opacity": 0,
                                "zoom": 12
                            },
                            {
                                "opacity": 0,
                                "zoom": 13
                            },
                            {
                                "opacity": 0,
                                "zoom": 14
                            },
                            {
                                "opacity": 0,
                                "zoom": 15
                            },
                            {
                                "opacity": 0,
                                "zoom": 16
                            },
                            {
                                "opacity": 0,
                                "zoom": 17
                            },
                            {
                                "opacity": 0,
                                "zoom": 18
                            },
                            {
                                "opacity": 0,
                                "zoom": 19
                            },
                            {
                                "opacity": 0,
                                "zoom": 20
                            },
                            {
                                "opacity": 0,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "water",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#2a52e5"
                            },
                            {
                                "opacity": 0.8
                            }
                        ]
                    },
                    {
                        "tags": "water",
                        "elements": "label.text.outline",
                        "types": "polyline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.2
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_1",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.64,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.84,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 3.13,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 3.55,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 3.21,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.72,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.35,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.02,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 1.81,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 1.69,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 1.66,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 1.31,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 1.08,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.93,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.84,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_1"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.96,
                                "zoom": 6
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.96,
                                "zoom": 7
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.02,
                                "zoom": 8
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.16,
                                "zoom": 9
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.16,
                                "zoom": 10
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.04,
                                "zoom": 11
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.93,
                                "zoom": 12
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.8,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.71,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.68,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.7,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.38,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.15,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.91,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.87,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_2",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.64,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.84,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 3.13,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 3.55,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 3.21,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.72,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.35,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.02,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 1.81,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 1.69,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 1.66,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 1.31,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 1.08,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.93,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.84,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_2"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.96,
                                "zoom": 6
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.96,
                                "zoom": 7
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.02,
                                "zoom": 8
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.16,
                                "zoom": 9
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.16,
                                "zoom": 10
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.04,
                                "zoom": 11
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.93,
                                "zoom": 12
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.8,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.71,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.68,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.7,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.38,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.15,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.91,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.87,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_3",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.23,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2.33,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.49,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.48,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.23,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 1.06,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 0.96,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 0.92,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 0.81,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 0.75,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.73,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.75,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_3"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.03,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.83,
                                "zoom": 8
                            },
                            {
                                "color": "#2c3863",
                                "scale": 2.71,
                                "zoom": 9
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.76,
                                "zoom": 10
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.31,
                                "zoom": 11
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.37,
                                "zoom": 12
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.21,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.1,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.02,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.88,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.81,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.79,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.81,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.87,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_4",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.5,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.12,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.25,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.05,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 0.93,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 0.86,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 1.02,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 0.88,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 0.79,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.76,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.76,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_4"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.72,
                                "zoom": 9
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.22,
                                "zoom": 10
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.04,
                                "zoom": 11
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.17,
                                "zoom": 12
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.06,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.97,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.92,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.09,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.95,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.86,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.82,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.82,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.86,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_5",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 1.11,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.84,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 0.72,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 0.84,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 0.97,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 0.83,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 0.75,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.73,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.74,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_5"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.4,
                                "zoom": 11
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.03,
                                "zoom": 12
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.88,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.79,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.91,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.05,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.9,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.82,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.79,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.81,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.86,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_6",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 2,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 1.13,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 1.11,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 1.16,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 0.93,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 0.8,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.75,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.75,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_6"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 12
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.49,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.09,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.13,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 1.22,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.99,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.87,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.82,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.82,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.86,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_7",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0,
                                "zoom": 13
                            },
                            {
                                "color": "#4a5ea8",
                                "scale": 0.8,
                                "zoom": 14
                            },
                            {
                                "color": "#495da6",
                                "scale": 0.69,
                                "zoom": 15
                            },
                            {
                                "color": "#485ba3",
                                "scale": 0.78,
                                "zoom": 16
                            },
                            {
                                "color": "#475aa1",
                                "scale": 0.71,
                                "zoom": 17
                            },
                            {
                                "color": "#46599f",
                                "scale": 0.69,
                                "zoom": 18
                            },
                            {
                                "color": "#45589d",
                                "scale": 0.7,
                                "zoom": 19
                            },
                            {
                                "color": "#44569a",
                                "scale": 0.74,
                                "zoom": 20
                            },
                            {
                                "color": "#435598",
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_7"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.84,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.77,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.84,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.78,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.75,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.76,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.79,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.86,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_minor",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#334275"
                            },
                            {
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "scale": 0,
                                "zoom": 10
                            },
                            {
                                "scale": 0,
                                "zoom": 11
                            },
                            {
                                "scale": 0,
                                "zoom": 12
                            },
                            {
                                "scale": 0,
                                "zoom": 13
                            },
                            {
                                "scale": 0,
                                "zoom": 14
                            },
                            {
                                "scale": 0,
                                "zoom": 15
                            },
                            {
                                "scale": 0.8,
                                "zoom": 16
                            },
                            {
                                "scale": 0.8,
                                "zoom": 17
                            },
                            {
                                "scale": 0.8,
                                "zoom": 18
                            },
                            {
                                "scale": 0.8,
                                "zoom": 19
                            },
                            {
                                "scale": 0.8,
                                "zoom": 20
                            },
                            {
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_minor"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "opacity": 0
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_unclassified",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#334275"
                            },
                            {
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "scale": 0,
                                "zoom": 10
                            },
                            {
                                "scale": 0,
                                "zoom": 11
                            },
                            {
                                "scale": 0,
                                "zoom": 12
                            },
                            {
                                "scale": 0,
                                "zoom": 13
                            },
                            {
                                "scale": 0,
                                "zoom": 14
                            },
                            {
                                "scale": 0,
                                "zoom": 15
                            },
                            {
                                "scale": 0.8,
                                "zoom": 16
                            },
                            {
                                "scale": 0.8,
                                "zoom": 17
                            },
                            {
                                "scale": 0.8,
                                "zoom": 18
                            },
                            {
                                "scale": 0.8,
                                "zoom": 19
                            },
                            {
                                "scale": 0.8,
                                "zoom": 20
                            },
                            {
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "road_unclassified"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "opacity": 0
                            }
                        ]
                    },
                    {
                        "tags": {
                            "all": "is_tunnel",
                            "none": "path"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#3a4c83",
                                "zoom": 0
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 1
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 2
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 3
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 4
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 5
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 6
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 7
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 8
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 9
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 10
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 11
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 12
                            },
                            {
                                "color": "#3a4c83",
                                "zoom": 13
                            },
                            {
                                "color": "#37487c",
                                "zoom": 14
                            },
                            {
                                "color": "#334475",
                                "zoom": 15
                            },
                            {
                                "color": "#334374",
                                "zoom": 16
                            },
                            {
                                "color": "#324373",
                                "zoom": 17
                            },
                            {
                                "color": "#324272",
                                "zoom": 18
                            },
                            {
                                "color": "#314170",
                                "zoom": 19
                            },
                            {
                                "color": "#31416f",
                                "zoom": 20
                            },
                            {
                                "color": "#30406e",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "all": "path",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#1c2440"
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "all": "path",
                            "none": "is_tunnel"
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "opacity": 0.7
                            },
                            {
                                "color": "#36487c",
                                "zoom": 0
                            },
                            {
                                "color": "#36487c",
                                "zoom": 1
                            },
                            {
                                "color": "#36487c",
                                "zoom": 2
                            },
                            {
                                "color": "#36487c",
                                "zoom": 3
                            },
                            {
                                "color": "#36487c",
                                "zoom": 4
                            },
                            {
                                "color": "#36487c",
                                "zoom": 5
                            },
                            {
                                "color": "#36487c",
                                "zoom": 6
                            },
                            {
                                "color": "#36487c",
                                "zoom": 7
                            },
                            {
                                "color": "#36487c",
                                "zoom": 8
                            },
                            {
                                "color": "#36487c",
                                "zoom": 9
                            },
                            {
                                "color": "#36487c",
                                "zoom": 10
                            },
                            {
                                "color": "#36487c",
                                "zoom": 11
                            },
                            {
                                "color": "#36487c",
                                "zoom": 12
                            },
                            {
                                "color": "#36487c",
                                "zoom": 13
                            },
                            {
                                "color": "#334475",
                                "zoom": 14
                            },
                            {
                                "color": "#30406e",
                                "zoom": 15
                            },
                            {
                                "color": "#303f6d",
                                "zoom": 16
                            },
                            {
                                "color": "#2f3f6c",
                                "zoom": 17
                            },
                            {
                                "color": "#2f3e6b",
                                "zoom": 18
                            },
                            {
                                "color": "#2e3d69",
                                "zoom": 19
                            },
                            {
                                "color": "#2e3d68",
                                "zoom": 20
                            },
                            {
                                "color": "#2d3c67",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "road_construction",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#4b5faa"
                            }
                        ]
                    },
                    {
                        "tags": "road_construction",
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#1c2440",
                                "zoom": 0
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 1
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 2
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 3
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 4
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 5
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 6
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 7
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 8
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 9
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 10
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 11
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 12
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "zoom": 14
                            },
                            {
                                "color": "#1c2440",
                                "zoom": 15
                            },
                            {
                                "color": "#19213a",
                                "zoom": 16
                            },
                            {
                                "color": "#171d34",
                                "zoom": 17
                            },
                            {
                                "color": "#141a2e",
                                "zoom": 18
                            },
                            {
                                "color": "#111728",
                                "zoom": 19
                            },
                            {
                                "color": "#0f1322",
                                "zoom": 20
                            },
                            {
                                "color": "#0c101c",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "ferry"
                        },
                        "stylers": [
                            {
                                "color": "#132f96"
                            }
                        ]
                    },
                    {
                        "tags": "transit_location",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "hue": "#081544"
                            },
                            {
                                "saturation": -0.21
                            }
                        ]
                    },
                    {
                        "tags": "transit_location",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#314baa"
                            }
                        ]
                    },
                    {
                        "tags": "transit_location",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            }
                        ]
                    },
                    {
                        "tags": "transit_schema",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#314baa"
                            },
                            {
                                "scale": 0.7
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.5,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 16
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 17
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 18
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 19
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 20
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "transit_schema",
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "opacity": 0
                            }
                        ]
                    },
                    {
                        "tags": "transit_line",
                        "elements": "geometry.fill.pattern",
                        "stylers": [
                            {
                                "color": "#2e3f7a"
                            },
                            {
                                "opacity": 0,
                                "zoom": 0
                            },
                            {
                                "opacity": 0,
                                "zoom": 1
                            },
                            {
                                "opacity": 0,
                                "zoom": 2
                            },
                            {
                                "opacity": 0,
                                "zoom": 3
                            },
                            {
                                "opacity": 0,
                                "zoom": 4
                            },
                            {
                                "opacity": 0,
                                "zoom": 5
                            },
                            {
                                "opacity": 0,
                                "zoom": 6
                            },
                            {
                                "opacity": 0,
                                "zoom": 7
                            },
                            {
                                "opacity": 0,
                                "zoom": 8
                            },
                            {
                                "opacity": 0,
                                "zoom": 9
                            },
                            {
                                "opacity": 0,
                                "zoom": 10
                            },
                            {
                                "opacity": 0,
                                "zoom": 11
                            },
                            {
                                "opacity": 0,
                                "zoom": 12
                            },
                            {
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "transit_line",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#2e3f7a"
                            },
                            {
                                "scale": 0.4
                            },
                            {
                                "opacity": 0,
                                "zoom": 0
                            },
                            {
                                "opacity": 0,
                                "zoom": 1
                            },
                            {
                                "opacity": 0,
                                "zoom": 2
                            },
                            {
                                "opacity": 0,
                                "zoom": 3
                            },
                            {
                                "opacity": 0,
                                "zoom": 4
                            },
                            {
                                "opacity": 0,
                                "zoom": 5
                            },
                            {
                                "opacity": 0,
                                "zoom": 6
                            },
                            {
                                "opacity": 0,
                                "zoom": 7
                            },
                            {
                                "opacity": 0,
                                "zoom": 8
                            },
                            {
                                "opacity": 0,
                                "zoom": 9
                            },
                            {
                                "opacity": 0,
                                "zoom": 10
                            },
                            {
                                "opacity": 0,
                                "zoom": 11
                            },
                            {
                                "opacity": 0,
                                "zoom": 12
                            },
                            {
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "water",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#7a85bf",
                                "zoom": 0
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 1
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 2
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 3
                            },
                            {
                                "color": "#7a85bf8",
                                "zoom": 4
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 5
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 6
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 7
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 8
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 9
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 10
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 11
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 12
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 13
                            },
                            {
                                "color": "#7a85bf9",
                                "zoom": 14
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 15
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 16
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 17
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 18
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 19
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 20
                            },
                            {
                                "color": "#7a85bf",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "water",
                        "elements": "geometry",
                        "types": "polyline",
                        "stylers": [
                            {
                                "opacity": 0.4,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.4,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.6,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.8,
                                "zoom": 5
                            },
                            {
                                "opacity": 1,
                                "zoom": 6
                            },
                            {
                                "opacity": 1,
                                "zoom": 7
                            },
                            {
                                "opacity": 1,
                                "zoom": 8
                            },
                            {
                                "opacity": 1,
                                "zoom": 9
                            },
                            {
                                "opacity": 1,
                                "zoom": 10
                            },
                            {
                                "opacity": 1,
                                "zoom": 11
                            },
                            {
                                "opacity": 1,
                                "zoom": 12
                            },
                            {
                                "opacity": 1,
                                "zoom": 13
                            },
                            {
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "bathymetry",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "hue": "#0d2168"
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": [
                                "industrial",
                                "construction_site"
                            ]
                        },
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#334275",
                                "zoom": 0
                            },
                            {
                                "color": "#334275",
                                "zoom": 1
                            },
                            {
                                "color": "#334275",
                                "zoom": 2
                            },
                            {
                                "color": "#334275",
                                "zoom": 3
                            },
                            {
                                "color": "#334275",
                                "zoom": 4
                            },
                            {
                                "color": "#334275",
                                "zoom": 5
                            },
                            {
                                "color": "#334275",
                                "zoom": 6
                            },
                            {
                                "color": "#334275",
                                "zoom": 7
                            },
                            {
                                "color": "#334275",
                                "zoom": 8
                            },
                            {
                                "color": "#334275",
                                "zoom": 9
                            },
                            {
                                "color": "#334275",
                                "zoom": 10
                            },
                            {
                                "color": "#334275",
                                "zoom": 11
                            },
                            {
                                "color": "#334275",
                                "zoom": 12
                            },
                            {
                                "color": "#334275",
                                "zoom": 13
                            },
                            {
                                "color": "#303e6e",
                                "zoom": 14
                            },
                            {
                                "color": "#2d3a67",
                                "zoom": 15
                            },
                            {
                                "color": "#2d3966",
                                "zoom": 16
                            },
                            {
                                "color": "#2c3965",
                                "zoom": 17
                            },
                            {
                                "color": "#2c3864",
                                "zoom": 18
                            },
                            {
                                "color": "#2b3762",
                                "zoom": 19
                            },
                            {
                                "color": "#2b3761",
                                "zoom": 20
                            },
                            {
                                "color": "#2a3660",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": "transit",
                            "none": [
                                "transit_location",
                                "transit_line",
                                "transit_schema",
                                "is_unclassified_transit"
                            ]
                        },
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#334375",
                                "zoom": 0
                            },
                            {
                                "color": "#334375",
                                "zoom": 1
                            },
                            {
                                "color": "#334375",
                                "zoom": 2
                            },
                            {
                                "color": "#334375",
                                "zoom": 3
                            },
                            {
                                "color": "#334375",
                                "zoom": 4
                            },
                            {
                                "color": "#334375",
                                "zoom": 5
                            },
                            {
                                "color": "#334375",
                                "zoom": 6
                            },
                            {
                                "color": "#334375",
                                "zoom": 7
                            },
                            {
                                "color": "#334375",
                                "zoom": 8
                            },
                            {
                                "color": "#334375",
                                "zoom": 9
                            },
                            {
                                "color": "#334375",
                                "zoom": 10
                            },
                            {
                                "color": "#334375",
                                "zoom": 11
                            },
                            {
                                "color": "#334375",
                                "zoom": 12
                            },
                            {
                                "color": "#334375",
                                "zoom": 13
                            },
                            {
                                "color": "#303f6e",
                                "zoom": 14
                            },
                            {
                                "color": "#2d3b67",
                                "zoom": 15
                            },
                            {
                                "color": "#2d3a66",
                                "zoom": 16
                            },
                            {
                                "color": "#2c3a65",
                                "zoom": 17
                            },
                            {
                                "color": "#2c3964",
                                "zoom": 18
                            },
                            {
                                "color": "#2b3862",
                                "zoom": 19
                            },
                            {
                                "color": "#2b3861",
                                "zoom": 20
                            },
                            {
                                "color": "#2a3760",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "fence",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#3a4883"
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 0
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 1
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 2
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 3
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 4
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 5
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 6
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 7
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 8
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 9
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 10
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 11
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 12
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 13
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 14
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 15
                            },
                            {
                                "opacity": 0.75,
                                "zoom": 16
                            },
                            {
                                "opacity": 0.45,
                                "zoom": 17
                            },
                            {
                                "opacity": 0.45,
                                "zoom": 18
                            },
                            {
                                "opacity": 0.45,
                                "zoom": 19
                            },
                            {
                                "opacity": 0.45,
                                "zoom": 20
                            },
                            {
                                "opacity": 0.45,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "medical",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#334275",
                                "zoom": 0
                            },
                            {
                                "color": "#334275",
                                "zoom": 1
                            },
                            {
                                "color": "#334275",
                                "zoom": 2
                            },
                            {
                                "color": "#334275",
                                "zoom": 3
                            },
                            {
                                "color": "#334275",
                                "zoom": 4
                            },
                            {
                                "color": "#334275",
                                "zoom": 5
                            },
                            {
                                "color": "#334275",
                                "zoom": 6
                            },
                            {
                                "color": "#334275",
                                "zoom": 7
                            },
                            {
                                "color": "#334275",
                                "zoom": 8
                            },
                            {
                                "color": "#334275",
                                "zoom": 9
                            },
                            {
                                "color": "#334275",
                                "zoom": 10
                            },
                            {
                                "color": "#334275",
                                "zoom": 11
                            },
                            {
                                "color": "#334275",
                                "zoom": 12
                            },
                            {
                                "color": "#334275",
                                "zoom": 13
                            },
                            {
                                "color": "#303e6e",
                                "zoom": 14
                            },
                            {
                                "color": "#2d3a67",
                                "zoom": 15
                            },
                            {
                                "color": "#2d3966",
                                "zoom": 16
                            },
                            {
                                "color": "#2c3965",
                                "zoom": 17
                            },
                            {
                                "color": "#2c3864",
                                "zoom": 18
                            },
                            {
                                "color": "#2b3762",
                                "zoom": 19
                            },
                            {
                                "color": "#2b3761",
                                "zoom": 20
                            },
                            {
                                "color": "#2a3660",
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "beach",
                        "elements": "geometry",
                        "stylers": [
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 0
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 1
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 2
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 3
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 4
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 5
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 6
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 7
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 8
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 9
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 10
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 11
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.3,
                                "zoom": 12
                            },
                            {
                                "color": "#334275",
                                "opacity": 0.65,
                                "zoom": 13
                            },
                            {
                                "color": "#303e6e",
                                "opacity": 1,
                                "zoom": 14
                            },
                            {
                                "color": "#2d3a67",
                                "opacity": 1,
                                "zoom": 15
                            },
                            {
                                "color": "#2d3966",
                                "opacity": 1,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3965",
                                "opacity": 1,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3864",
                                "opacity": 1,
                                "zoom": 18
                            },
                            {
                                "color": "#2b3762",
                                "opacity": 1,
                                "zoom": 19
                            },
                            {
                                "color": "#2b3761",
                                "opacity": 1,
                                "zoom": 20
                            },
                            {
                                "color": "#2a3660",
                                "opacity": 1,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": {
                            "all": [
                                "is_tunnel",
                                "path"
                            ]
                        },
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#273259"
                            },
                            {
                                "opacity": 0.3
                            }
                        ]
                    },
                    {
                        "tags": {
                            "all": [
                                "is_tunnel",
                                "path"
                            ]
                        },
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "opacity": 0
                            }
                        ]
                    },
                    {
                        "tags": "road_limited",
                        "elements": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#1c2440"
                            },
                            {
                                "scale": 0,
                                "zoom": 0
                            },
                            {
                                "scale": 0,
                                "zoom": 1
                            },
                            {
                                "scale": 0,
                                "zoom": 2
                            },
                            {
                                "scale": 0,
                                "zoom": 3
                            },
                            {
                                "scale": 0,
                                "zoom": 4
                            },
                            {
                                "scale": 0,
                                "zoom": 5
                            },
                            {
                                "scale": 0,
                                "zoom": 6
                            },
                            {
                                "scale": 0,
                                "zoom": 7
                            },
                            {
                                "scale": 0,
                                "zoom": 8
                            },
                            {
                                "scale": 0,
                                "zoom": 9
                            },
                            {
                                "scale": 0,
                                "zoom": 10
                            },
                            {
                                "scale": 0,
                                "zoom": 11
                            },
                            {
                                "scale": 0,
                                "zoom": 12
                            },
                            {
                                "scale": 0.1,
                                "zoom": 13
                            },
                            {
                                "scale": 0.2,
                                "zoom": 14
                            },
                            {
                                "scale": 0.3,
                                "zoom": 15
                            },
                            {
                                "scale": 0.5,
                                "zoom": 16
                            },
                            {
                                "scale": 0.6,
                                "zoom": 17
                            },
                            {
                                "scale": 0.69,
                                "zoom": 18
                            },
                            {
                                "scale": 0.7,
                                "zoom": 19
                            },
                            {
                                "scale": 0.74,
                                "zoom": 20
                            },
                            {
                                "scale": 0.8,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "road_limited",
                        "elements": "geometry.outline",
                        "stylers": [
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 0
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 1
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 2
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 3
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 4
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 5
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 6
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 7
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 8
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 9
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 10
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 11
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.9,
                                "zoom": 12
                            },
                            {
                                "color": "#4b5faa",
                                "scale": 0.1,
                                "zoom": 13
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.2,
                                "zoom": 14
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.3,
                                "zoom": 15
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.5,
                                "zoom": 16
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.6,
                                "zoom": 17
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.75,
                                "zoom": 18
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.76,
                                "zoom": 19
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.79,
                                "zoom": 20
                            },
                            {
                                "color": "#2c3863",
                                "scale": 0.86,
                                "zoom": 21
                            }
                        ]
                    },
                    {
                        "tags": "transit_stop",
                        "elements": "label.icon",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "secondary-color": "#314baa"
                            },
                            {
                                "tertiary-color": "#435598"
                            }
                        ]
                    },
                    {
                        "tags": "entrance",
                        "elements": "label.text.fill",
                        "stylers": [
                            {
                                "color": "#bcc4e1"
                            },
                            {
                                "opacity": 1
                            }
                        ]
                    },
                    {
                        "tags": "entrance",
                        "elements": "label.text.outline",
                        "stylers": [
                            {
                                "color": "#0b0e19"
                            },
                            {
                                "opacity": 0.5
                            }
                        ]
                    },
                    {
                        "tags": {
                            "any": [
                                "outdoor",
                                "park",
                                "cemetery",
                                "medical"
                            ]
                        },
                        "elements": "label",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": "poi",
                            "none": [
                                "outdoor",
                                "park",
                                "cemetery",
                                "medical"
                            ]
                        },
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": "road"
                        },
                        "types": "point",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": [
                                "food_and_drink",
                                "shopping",
                                "commercial_services"
                            ]
                        },
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": [
                                "traffic_light"
                            ]
                        },
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": [
                                "entrance"
                            ]
                        },
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": [
                                "road"
                            ],
                            "none": [
                                "road_1",
                                "road_2",
                                "road_3",
                                "road_4",
                                "road_5",
                                "road_6",
                                "road_7"
                            ]
                        },
                        "elements": "label.icon",
                        "stylers": {
                            "visibility": "off"
                        }
                    },
                    {
                        "tags": {
                            "any": "landcover",
                            "none": "vegetation"
                        },
                        "stylers": {
                            "visibility": "off"
                        }
                    }
                ]
        }));
        map.addChild(new YMapDefaultFeaturesLayer());
        await initClusterer(map);
    });
    document.querySelector('#map-container').setAttribute('data-load', true);
    onPreloader(false);

}

async function initClusterer(map) {
    const { YMapClusterer, clusterByGrid } = await ymaps3.import("@yandex/ymaps3-clusterer@0.0.1");
    const { YMapMarker } = ymaps3;

    const points = [];
    let id = 0
    for (const marker of await markerProps) {
        id++;
        points.push({
            type: "Feature",
            id: id,
            geometry: { coordinates: marker.coordinates, type: "Point" },
            properties: { iconSrc: marker.iconSrc, title: marker.title, subtitle: marker.subtitle }
        });
    }

    const marker = (feature) => {
        let id = feature.id;
        const el = document.createElement("img");
        el.className = "icon-marker";
        el.src = feature.properties.iconSrc;
        el.title = feature.properties.subtitle;

        // Создание заголовка маркера
        const markerTitle = document.createElement("div");
        markerTitle.className = "marker-title";
        markerTitle.innerHTML = feature.properties.title;

        // Контейнер для элементов маркера
        const imgContainer = document.createElement("div");
        imgContainer.className = "marker-container";
        imgContainer.appendChild(el);
        imgContainer.appendChild(markerTitle);
        imgContainer.appendChild(markerTitle);
        imgContainer.onclick = function (event) {
            imgContainer.classList.toggle('title-show');
        }
        return new YMapMarker(
            {
                coordinates: feature.geometry.coordinates,
                properties: { id }
            },
            imgContainer
        );
    }

    const cluster = (coordinates, features) => {
        let id = features.map(f => f.id);
        return new YMapMarker(
            { coordinates, properties: { id } },
            circle(features.length).cloneNode(true)
        );
    };

    function circle(count) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.innerHTML = `
              <div class="circle-content">
                  <span class="circle-text">${count}</span>
              </div>
          `;
        return circle;
    }

    const clusterer = new YMapClusterer({
        method: clusterByGrid({ gridSize: 160 }),
        features: points,
        maxZoom: 19,
        marker,
        cluster
    });

    map.addChild(clusterer);

}



function onPreloader(isShow) {
    const preloader = document.querySelector('.mdc-linear-progress');
    delay(1000).then(() => isShow ? preloader.style.width = '100%' : preloader.style.width = '0');
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


document.addEventListener('DOMContentLoaded', onInit);