var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.02230382025933153,
        "pitch": -0.06507853833123001,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.990935850705206,
          "pitch": -0.03439567937527954,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": 2.031981975803168,
          "pitch": 0.054330624669233885,
          "rotation": 6.283185307179586,
          "target": "3-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.973737719495567,
        "pitch": 0.08157663916170144,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.421482377398604,
          "pitch": -0.0251261116857755,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 2.8648225088291426,
          "pitch": 0.118664224193326,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": -2.673098536311974,
          "pitch": 0.1289586867428003,
          "rotation": 0.7853981633974483,
          "target": "3-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.922443336256375,
          "pitch": 0.20127526846244592,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -2.096875442183361,
          "pitch": 0.17123902000187385,
          "rotation": 0.7853981633974483,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-stair",
      "name": "STAIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5272019514461022,
        "pitch": -0.01039446481333961,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.6766250053620908,
          "pitch": 0.18686317670177388,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        },
        {
          "yaw": -0.4546309638956121,
          "pitch": -0.06589098630518109,
          "rotation": 7.853981633974483,
          "target": "4-upper-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-upper-living",
      "name": "UPPER LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.19234240736266628,
        "pitch": 0.010012082820187729,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.6096466968408105,
          "pitch": 0.06988066389559222,
          "rotation": 0,
          "target": "5-bed"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bed",
      "name": "BED",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 3.1035013054021237,
        "pitch": -0.046350131185556975,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.02434043881593695,
          "pitch": -0.01824313045602821,
          "rotation": 0,
          "target": "6-dressing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dressing",
      "name": "DRESSING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.12681459039591303,
        "pitch": 0.12253077197143902,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -1.9533117493222036,
          "pitch": 0.16645550439952927,
          "rotation": 0,
          "target": "5-bed"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "LUXURY 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
