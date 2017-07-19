const siteData = 
    [
    {id:"0002",description:"US-17 at the Edisto River (MP 0.00-MP 5.92)",local:0,location:{lat:32.76247,lng:-80.43854}},
    {id:"0003",description:"US-21 in Orangeburg at RR NW of US-601 (MP 24.14- MP 24.86)",local:0,location:{lat:33.50846,lng:-80.85246}},
    {id:"0004",description:"US-301 at Little Salkehatchie River (MP 2.97- MP 10.47)",local:0,location:{lat:33.22162,lng:-81.09814}},
    {id:"0005",description:"US-17/21 N of S-3 south of Yemassee (MP 1.24 - MP 2.56)",local:1,location:{lat:32.67052,lng:-80.85531}},
    {id:"0006",description:"US-17 Ravenel Br to SC-703 (MP 31.51 - MP 34.19)",local:0,location:{lat:32.80208,lng:-79.9093}},
    {id:"0009",description:"US-78 West City Limits of Elko (MP 4.51 - MP 6.12)",local:0,location:{lat:33.38349,lng:-81.38571}},
    {id:"0010",description:"US-301 1.5 mi NE of Manning bet. S-40 & S-49 (MP 22.17 - MP 23.71)",local:0,location:{lat:33.72405,lng:-80.194}},
    {id:"0011",description:"US-17 1.0 mi E of Waccamaw (MP 16.3 - MP 24.26)",local:0,location:{lat:33.36438,lng:-79.23947}},
    {id:"0018",description:"US-501 4.2 mi NW of Intracoastal Waterway (MP 22.58 - MP 28.61)",local:0,location:{lat:33.76326,lng:-78.97243}},
    {id:"0019",description:"I-95 at S-49 N of Manning (MP 122 - MP 133.22)",local:0,location:{lat:33.77348,lng:-80.17323}},
    {id:"0020",description:"I-26 at S-92 NW of SC-210 (MP 158.94 - 164.73)",local:0,location:{lat:33.40295,lng:-80.65451}},
    {id:"0021",description:"I-126 Between Broad River & Greystone Blvd (MP 1.85 - MP 3.36)",local:0,location:{lat:34.00996,lng:-81.06288}},
    {id:"0022",description:"I-20 at S-625 Gilbert (MP 44.19 - MP 50.96)",local:0,location:{lat:33.90026,lng:-81.34445}},
    {id:"0023",description:"I-20 Welcome Center at GA line (MP 0.00 - MP 1.3)",local:0,location:{lat:33.53379,lng:-82.00786}},
    {id:"0028",description:"I-95 WC at GA Line (MP 0.00 - MP 5.11)",local:1,location:{lat:32.253,lng:-81.12537}},
    {id:"0029",description:"I-95 Welcome Center at NC Line (MP 193.10 - MP 198.76)",local:0,location:{lat:34.49167,lng:-79.32839}},
    {id:"0029",description:"I-95 Welcome Center at NC Line (MP 193.10 - MP 198.76)",local:0,location:{lat:34.49167,lng:-79.32839}},
    {id:"0030",description:"US-17 Welcome Center Near NC Line (MP 33.99 - MP 35.23)",local:0,location:{lat:33.88353,lng:-78.59922}},
    {id:"0031",description:"I-26 W OF SC-642 (MP 213.52 - MP 215.47)",local:0,location:{lat:32.86705,lng:-80.00208}},
    {id:"0034",description:"I-526 Charleston Bet S-475 & Ashley Riv (MP 11.40 - MP 13.91)",local:0,location:{lat:32.83665,lng:-80.02314}},
    {id:"0035",description:"US-278 Jarvis Crk W of Hilton Head (MP 11.53 - MP 15.20)",local:1,location:{lat:32.22868,lng:-80.78665}},
    {id:"0036",description:"SC-9 Between Waccamaw River & S-57 (MP 32.28 - MP 38.24)",local:0,location:{lat:33.9101,lng:-78.71197}},
    {id:"0040",description:"US-17 In Charleston S of SC 171 & 700 (MP 27.39 - MP 28.82)",local:0,location:{lat:32.78065,lng:-79.97787}},
    {id:"0042",description:"I-20 at SC-403 Bet Lee Co Line & US 401 (MP 122.65 - MP 130.81)",local:0,location:{lat:34.19704,lng:-80.10521}},
    {id:"0046",description:"I-526 Cooper River (MP 19.98 - MP 22.65)",local:0,location:{lat:32.88704,lng:-79.94237}},
    {id:"0047",description:"US278 Hilton Head Toll Facility (MP 15.33 - MP 19.66)",local:1,location:{lat:32.20121,lng:-80.75235}},
    {id:"0048",description:"US-21 S of S-238. Bet Grdn Cor & Lobeco (MP 34.03 - MP 37.72)",local:1,location:{lat:32.59227,lng:-80.75012}},
    {id:"0052",description:"I-20 Between US-321 & US-21 (MP 69.75 - MP 71.2)",local:0,location:{lat:34.07337,lng:-81.0072}},
    {id:"0053",description:"I-20 Between S-329 & S-31 (MP 101.41 - 107.73)",local:0,location:{lat:34.2131,lng:-80.49929}},
    {id:"0054",description:"I-26 Between SC-27 & S-16 (MP 187.38 - MP 194.47)",local:0,location:{lat:33.12345,lng:-80.2823}},
    {id:"0055",description:"I-95 Between SC-61 & US-78 (MP 68.68 - MP 76.53)",local:0,location:{lat:33.10196,lng:-80.64478}},
    {id:"0056",description:"I-95 Between I-26 & US-176 (MP 85.74 - MP 90.48)",local:0,location:{lat:33.34492,lng:-80.53282}},
    {id:"0056",description:"I-95 Between I-26 & US-176 (MP 85.74 - MP 90.48)",local:0,location:{lat:33.34492,lng:-80.53282}},
    {id:"0057",description:"US-521 Between S-81 & S-559 (MP 0.00 - MP 17.36)",local:0,location:{lat:33.53847,lng:-79.7423}},
    {id:"0058",description:"US-52 Between S-9 & S-50 (MP 7.48 - MP 9.82)",local:0,location:{lat:33.09983,lng:-80.03008}},
    {id:"0059",description:"US-176 Between US-17A & S-61 (MP 21.30 - MP 23.01)",local:0,location:{lat:33.04765,lng:-80.07986}},
    {id:"0060",description:"US-78 Between US-178 & SC-27 (MP 22.27 - MP 25.02)",local:0,location:{lat:33.12466,lng:-80.31697}},
    {id:"0061",description:"SC-61 Between US-17A & SC-165 (MP 8.80 - MP 10.12)",local:0,location:{lat:32.95946,lng:-80.27072}},
    {id:"0062",description:"US-378 Between SC-51 & S-1329 (MP 27.60 - MP 30.88)",local:0,location:{lat:33.88362,lng:-79.4881}},
    {id:"0063",description:"US-321 N of S-616 (MP 11.93 - MP 13.42)",local:0,location:{lat:32.76457,lng:-81.24109}},
    {id:"0064",description:"US-278 Between S-280 & S-287 (MP 4.64 - MP 7.99)",local:1,location:{lat:32.88376,lng:-81.12885}},
    {id:"0065",description:"SC-3 Between S-19 & S-522 (MP 12.32- MP 13.05)",local:0,location:{lat:32.77116,lng:-81.27253}},
    {id:"0066",description:"SC-544 Between S-955 & S-262 (MP 1.89 - MP 5.59)",local:0,location:{lat:33.74371,lng:-79.02257}},
    {id:"0067",description:"US-278 Between S-141 & S-88 (MP 32.45 - MP 37.43)",local:1,location:{lat:32.3093,lng:-81.0477}},
    {id:"0068",description:"US-76 Between S-315 & S-751 (MP 1.04 - MP 5.16)",local:0,location:{lat:34.20108,lng:-79.51792}},
    {id:"0070",description:"I-26 Between US-17A & S-62 (MP 199.04 - MP 203.24)",local:0,location:{lat:33.00518,lng:-80.10264}},
    {id:"0071",description:"I-26 Between US-78 & US-52 CONN (MP 204.95 - MP 208.09)",local:0,location:{lat:32.95497,lng:-80.06534}},
    {id:"0072",description:"I-26 Between SC-453 & SC-27 @ S-28 (MP 177.02 - MP 187.38)",local:0,location:{lat:33.15172,lng:-80.34096}},
    {id:"0073",description:"SC-46 Between S-176 & S-304 (MP 3.27 - MP 5.63)",local:1,location:{lat:32.24387,lng:-81.02828}},
    {id:"0074",description:"SC-51 at Brown's Ferry Park N of S-861 (MP 0.00 - MP 7.46)",local:0,location:{lat:33.54867,lng:-79.40542}},
    {id:"0075",description:"SC-45 N of S-49 (MP 40.38 - MP 46.94)",local:0,location:{lat:33.25086,lng:-79.64341}},
    {id:"0076",description:"SC-41 S of S-1126 (MP 1.09 - MP 12.9)",local:0,location:{lat:33.04504,lng:-79.80892}},
    {id:"0082",description:"SC-22 1.0 mi E of S-591 (MP 0.00 - MP 4.88)",local:0,location:{lat:33.92941,lng:-79.12172}},
    {id:"0083",description:"SC-22 at Fowler RD (MP 8.25 - MP 19.12)",local:0,location:{lat:33.93928,lng:-78.97845}},
    {id:"0084",description:"SC-22 Between Carolina Bays Pkwy & Intercostal Water Way (MP 27.15 - MP 29.39)",local:0,location:{lat:33.79184,lng:-78.77788}},
    {id:"0085",description:"SC-7 Between SC-171 & I-26 (MP 3.08 - MP 4.99)",local:0,location:{lat:32.83527,lng:-79.9857}},
    {id:"0086",description:"I-20 Between US-378 & Bush River Rd (MP 61.27 - MP 63.39)",local:0,location:{lat:34.02116,lng:-81.13354}},
    {id:"0087",description:"I-95 Between SC-403 & US-76 (MP 153.48 - MP 157.26)",local:0,location:{lat:34.13006,lng:-79.88977}},
    {id:"0088",description:"I-95 Santee Lake-Between SC-6 & S-400 (99.69 - MP 101.89)",local:0,location:{lat:33.49651,lng:-80.46376}},
    {id:"0089",description:"I-95 Between SC-64 & SC-63 (MP 53.51 - MP 57.36)",local:0,location:{lat:32.90253,lng:-80.70448}},
    {id:"0090",description:"I-526 Between S-97 & S-56 near Long Point Rd (MP 27.50 - MP 28.90)",local:0,location:{lat:32.82923,lng:-79.85189}},
    {id:"0091",description:"I-95 Between SC-462 & US-17 (MP 28.32 - MP 32.70)",local:1,location:{lat:32.58482,lng:-80.92604}},
    {id:"0092",description:"I-77 Between I-20 & US-1 (MP 15.87 - MP 17.35)",local:0,location:{lat:34.07844,lng:-80.9353}},
    {id:"0093",description:"I-20 Between S-53 & S-47 (MP 84.55 - MP 86.95)",local:0,location:{lat:34.12858,lng:-80.77583}},
    {id:"0094",description:"I-26 Between S-31 & US-21 (MP 124.68 - MP 127.33)",local:0,location:{lat:33.77277,lng:-80.9775}},
    {id:"0104",description:"US-501 1 mi E of SC-22 (MP 10.68 - MP 16.45)",local:0,location:{lat:33.91137,lng:-79.14619}},
    {id:"0105",description:"US-501 1 mi W of SC-22 (MP 6.63 - MP 10.68)",local:0,location:{lat:33.96205,lng:-79.18098}},
    {id:"0107",description:"SC-39 1 mi S of I-20 (MP 10.02 - MP 21.05)",local:0,location:{lat:33.68363,lng:-81.4509}},
    {id:"0108",description:"I-20 Between SC-340 & I-95 (MP 137.32 - MP 139.15)",local:0,location:{lat:34.20365,lng:-79.87028}},
    {id:"0111",description:"I-20 Between SC-6 & S-204 @ S-70 (MP 50.96 - MP 54.94)",local:0,location:{lat:33.93564,lng:-81.27426}},
    {id:"0113",description:"I-77 Between SC-768 & US-76/378 (MP 6.33 - MP 8.55)",local:0,location:{lat:33.96588,lng:-80.95302}},
    {id:"0114",description:"I-20 Between SC-39 & US-178 (MP 32.54 - MP 37.17)",local:0,location:{lat:33.77052,lng:-81.50181}},
    {id:"0115",description:"I-20 Between S-144 & SC-19 @ S-105 (MP 11.22 - MP 17.78)",local:0,location:{lat:33.63178,lng:-81.79351}},
    {id:"0116",description:"I-26 Between S-22 & US-601 (MP 139.28 - MP 140.75)",local:0,location:{lat:33.59927,lng:-80.85858}},
    {id:"0117",description:"SC-170 between US-278 and SC-642 (MP 6.62 - MP 10.695)",local:1,location:{lat:32.34883,lng:-80.92514}},
    {id:"0118",description:"SC-31 Between US-501 & Grissom Pkwy (MP 13.82 - MP 19.69)",local:0,location:{lat:33.74909,lng:-78.87708}},
    {id:"0119",description:"SC-31 Between Grissom Pkwy & SC-22 (MP 7.87 - MP 13.82)",local:0,location:{lat:33.79018,lng:-78.80373}},
    {id:"0120",description:"SC-31 Between SC-9 & SC22 (MP 0.00 - MP 7.87)",local:0,location:{lat:33.85672,lng:-78.69664}},
    {id:"0122",description:"US-378/76 0.1 mi E of S-263 near Wateree River (MP 33.66 - MP 46.62)",local:0,location:{lat:33.94552,lng:-80.75576}},
    {id:"0124",description:"I-26 Between S-75 & S-1342 (MP 208.54 - MP 211.14)",local:0,location:{lat:32.91275,lng:-80.02898}},
    {id:"0125",description:"I-26 Between I-126 & US-378 (MP 108.25 - MP 109.72)",local:0,location:{lat:34.02008,lng:-81.10542}},
    {id:"0126",description:"I-20 US176 to SC215 (MP 65.13 - MP 68.33)",local:0,location:{lat:34.04651,lng:-81.0765}},
    {id:"0127",description:"I-95 Between US-52 & S-26 (MP 166.41 - MP 167.98)",local:0,location:{lat:34.2439,lng:-79.77169}},
    {id:"0128",description:"I-95 Between S-26 & SC-327 (MP 168.82 - MP 170.47)",local:0,location:{lat:34.26543,lng:-79.71564}},
    {id:"0129",description:"US-17 Georgetown Co Line to SC544 (MP 0.00 - MP 6.17)",local:0,location:{lat:33.62888,lng:-78.99775}},
    {id:"0130",description:"US-17 L-537 to US17BUS (MP 17.30 - MP 19.94)",local:0,location:{lat:33.76535,lng:-78.80935}},
    {id:"0133",description:"SC-41 Between SC-908 & SC-41ALT (MP 7.010 - MP 10.42)",local:0,location:{lat:33.98191,lng:-79.35081}},
    {id:"0134",description:"US-378 from Marion County Line to S-134 (MP 0.00 - MP 6.15)",local:0,location:{lat:33.83666,lng:-79.20439}},
    {id:"0135",description:"SC-9 Between US76 & SC9BUS (MP 0.71 - MP 11.22)",local:0,location:{lat:34.14872,lng:-79.0241}},
    {id:"0137",description:"SC-277 Between SC-555 & S-218 (MP 1.93 - MP 4.29)",local:0,location:{lat:34.04549,lng:-81.01139}},
    {id:"0139",description:"On I-20 between US-1 and I-77 (MP 74.19 - MP 75.72)",local:0,location:{lat:34.07162,lng:-80.9371}},
    {id:"0142",description:"SC-517 between SC-703 & S-51 (MP 0.00 - MP 3.14)",local:0,location:{lat:32.81028,lng:-79.80407}},
    {id:"0143",description:"SC-703 S51 to S199 (MP 3.11 to MP 5.55)",local:0,location:{lat:32.78654,lng:-79.85022}},
    {id:"0144",description:"SC-171 between US-17 and Wappoo Creek Bridge (MP 8.10 - MP 9.07)",local:0,location:{lat:32.76873,lng:-79.97371}},
    {id:"0149",description:"SC-170 at Broad River (MP 13.74 - MP 21.14)",local:1,location:{lat:32.38648,lng:-80.7801}}
];

const hourChartOptions = 
    {
        "barThickness": 2
    };
    
const dayChartOptions = 
    { 
      "legend":
          {
            "onClick": newLegendClickHandler
          },
      "barThickness": 5,
        "labels": 
            {
                "position": "left"
            },
        "scales":{
            "yAxes":[
                {
                    "position": "left",
                    "id":"y-axis-0",
                    "scaleLabel":{
                        "display":"true",
                        "labelString":"Count",
                        "fontColor":"#FF9130",
                        "fontSize":"12"
                    }
                },
                {
                    "position": "right",
                    "id":"y-axis-1",
                    "scaleLabel":{
                        "display":"true",
                        "labelString":"Avg MPH",
                        "fontColor":"#80CC7F",
                        "fontSize":"12"
                    }
                }
            ],
            "xAxes":[{
                "time": {
                    "unit": "hour",
                    "displayFormats": 
                        {
                        "hour": "hA"
                        }
                    }
                }]
            }
        };

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];