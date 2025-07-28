(function(){
    var script = {
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "start": "this.init()",
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "definitions": [{
 "label": "IMG_20250622_095225_00_043",
 "id": "panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 155.28,
   "distance": 1,
   "backwardYaw": -15.01,
   "panorama": "this.panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.87,
   "distance": 1,
   "backwardYaw": 154.18,
   "panorama": "this.panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C3EC69ED_D0F0_7841_41E5_9F7776F94E13",
  "this.overlay_C3755EE1_D0F0_5840_41E2_F437F4ED2477"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.63,
  "pitch": 0
 },
 "id": "camera_D50C59D4_DB33_523D_41E3_4BF5A15901E8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -32.96,
  "pitch": 0
 },
 "id": "camera_D475EAC3_DB33_561B_41D9_F1E172C499A2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -17.1,
  "pitch": 0
 },
 "id": "camera_D4466AE2_DB33_5615_41E0_F5C7904EDCAA",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094037_00_032",
 "id": "panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.58,
   "distance": 1,
   "backwardYaw": 152.26,
   "panorama": "this.panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 165.37,
   "distance": 1,
   "backwardYaw": 1.46,
   "panorama": "this.panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C002AA31_D0C7_CCE1_41CE_3A7759DC8853",
  "this.overlay_C0B5C111_D0C4_BCA2_41D3_D2383CEDFAF4"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_t.jpg"
  }
 ]
},
{
 "label": "IMG_20250622_095422_00_045",
 "id": "panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 144.37,
   "distance": 1,
   "backwardYaw": -16.11,
   "panorama": "this.panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C4DD3C20_D0F0_5FC3_41C1_7C3EF64E15C2"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.74,
  "pitch": 0
 },
 "id": "camera_D4315A93_DB33_563B_41B4_6098AC41F928",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.6,
  "pitch": 0
 },
 "id": "camera_D5C14A83_DB33_561B_41D5_AAF4B499D4ED",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094303_00_034",
 "id": "panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 162.9,
   "distance": 1,
   "backwardYaw": -12.26,
   "panorama": "this.panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -0.94,
   "distance": 1,
   "backwardYaw": 163.52,
   "panorama": "this.panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DE3C3BE7_D0D0_3899_41E8_11BCF159C916",
  "this.overlay_DE3E7809_D0D0_47AA_41E6_E3132CFB009A"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.33,
  "pitch": 0
 },
 "id": "camera_D4892B01_DB33_5617_41D3_EF6A37591018",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094151_00_033",
 "id": "panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -12.26,
   "distance": 1,
   "backwardYaw": 162.9,
   "panorama": "this.panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 152.26,
   "distance": 1,
   "backwardYaw": -4.58,
   "panorama": "this.panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DD3C9B27_D0D0_599F_41B8_2F01554ED05E",
  "this.overlay_DE73AAC3_D0D0_7894_41D3_2CA596B38719"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -14.63,
  "pitch": 0
 },
 "id": "camera_D5A86A33_DB33_567B_41E1_BA0516A8781D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.54,
  "pitch": 0
 },
 "id": "camera_D4238AA3_DB33_561B_41E4_B5D69722511F",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094911_00_040",
 "id": "panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 4.14,
   "distance": 1,
   "backwardYaw": 154.94,
   "panorama": "this.panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 159.4,
   "distance": 1,
   "backwardYaw": -6.36,
   "panorama": "this.panorama_C1469B52_D0F0_5853_41D2_1286B97D412E"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C007C860_D0F0_5872_41C5_578F47ECAA2E",
  "this.overlay_C18213DE_D0F0_484F_41B8_2EB43D9AE770"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.33,
  "pitch": 0
 },
 "id": "camera_D54C5A13_DB33_563B_41EA_E1AE2BDCA6DA",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_095016_00_041",
 "id": "panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -4.3,
   "distance": 1,
   "backwardYaw": 149.03,
   "panorama": "this.panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 154.94,
   "distance": 1,
   "backwardYaw": 4.14,
   "panorama": "this.panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C12134A0_D0F0_48F5_41E9_798FE36F3C45",
  "this.overlay_C1297DAD_D0F0_38CE_41D7_DC69F71E790D"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_t.jpg"
  }
 ]
},
{
 "label": "IMG_20250622_095332_00_044",
 "id": "panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -16.11,
   "distance": 1,
   "backwardYaw": 144.37,
   "panorama": "this.panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 154.18,
   "distance": 1,
   "backwardYaw": -7.87,
   "panorama": "this.panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C3532C28_D0F0_5FC2_41C4_783BD71915B0",
  "this.overlay_C44940AE_D0F1_C8DF_41D8_D87D4E7265CD"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.06,
  "pitch": 0
 },
 "id": "camera_D58CDA53_DB33_563B_41E6_6C5C91DA334D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.82,
  "pitch": 0
 },
 "id": "camera_D5DF5A73_DB33_56FB_41E4_6ED8B8386367",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.7,
  "pitch": 0
 },
 "id": "camera_D5638A03_DB33_561A_41C1_C44C9C965C15",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.52,
  "pitch": 0
 },
 "id": "camera_D5417A23_DB33_561B_41EA_224D332C95A3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094759_00_039",
 "id": "panorama_C1469B52_D0F0_5853_41D2_1286B97D412E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 155.48,
   "distance": 1,
   "backwardYaw": -14.25,
   "panorama": "this.panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -6.36,
   "distance": 1,
   "backwardYaw": 159.4,
   "panorama": "this.panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C0593740_D0F1_C9B0_41E4_E17482F41664",
  "this.overlay_C1559C9D_D0F0_D8D0_41BB_E707C9D874AB"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.52,
  "pitch": 0
 },
 "id": "camera_D413DAA3_DB33_561B_41E8_2D9783863D73",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.75,
  "pitch": 0
 },
 "id": "camera_D5D0EA73_DB33_56FB_41C8_780C8E109CA4",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_C1469B52_D0F0_5853_41D2_1286B97D412E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "media": "this.panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "label": "IMG_20250622_094605_00_037",
 "id": "panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -5.67,
   "distance": 1,
   "backwardYaw": 159.67,
   "panorama": "this.panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 155.48,
   "distance": 1,
   "backwardYaw": 5.79,
   "panorama": "this.panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C0EA9871_D0D0_786D_41E4_2638D0654ACC",
  "this.overlay_DF69D2A2_D0D0_48EC_41CA_931E50DD2B06"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_093736_00_029",
 "id": "panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 3.18,
   "distance": 1,
   "backwardYaw": 147.04,
   "panorama": "this.panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DC0E274E_D0C5_C49E_41D9_232E0E396E57"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.82,
  "pitch": 0
 },
 "id": "camera_D4EBCB21_DB33_5617_41D8_91AA5247DE6D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.72,
  "pitch": 0
 },
 "id": "camera_D558EA13_DB33_563B_4186_E6438154E3E3",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_095119_00_042",
 "id": "panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 149.03,
   "distance": 1,
   "backwardYaw": -4.3,
   "panorama": "this.panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -15.01,
   "distance": 1,
   "backwardYaw": 155.28,
   "panorama": "this.panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C2831162_D0F0_487B_41C2_EC82B06CFDB3",
  "this.overlay_C239CFB4_D0F0_58C6_41E3_73F3451F2B33"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_t.jpg"
  }
 ]
},
{
 "label": "IMG_20250622_094507_00_036",
 "id": "panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.79,
   "distance": 1,
   "backwardYaw": 155.48,
   "panorama": "this.panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 159.26,
   "distance": 1,
   "backwardYaw": -8.97,
   "panorama": "this.panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DF35BD24_D0D0_59E8_41E3_85327F041974",
  "this.overlay_C0C88C51_D0D0_3FAB_41B4_696C8097316C"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_t.jpg"
  }
 ]
},
{
 "label": "IMG_20250622_093830_00_030",
 "id": "panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 147.04,
   "distance": 1,
   "backwardYaw": 3.18,
   "panorama": "this.panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -27.02,
   "distance": 1,
   "backwardYaw": 168.53,
   "panorama": "this.panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DD3CFFFF_D0C7_C37A_41E0_53D8BB390BB2",
  "this.overlay_DE9A6517_D0CF_44BF_41DA_93DF4C22CACC"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 152.98,
  "pitch": 0
 },
 "id": "camera_D5B4AA33_DB33_567B_41D2_7993910BD505",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094709_00_038",
 "id": "panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 159.67,
   "distance": 1,
   "backwardYaw": -5.67,
   "panorama": "this.panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -14.25,
   "distance": 1,
   "backwardYaw": 155.48,
   "panorama": "this.panorama_C1469B52_D0F0_5853_41D2_1286B97D412E"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_C0AA3522_D0D0_49ED_41E4_3A2C4F975ABB",
  "this.overlay_C0F99DB8_D0F0_58DE_41D1_B902B8FD704D"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.13,
  "pitch": 0
 },
 "id": "camera_D50159E4_DB33_521D_41D0_84085149C601",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.21,
  "pitch": 0
 },
 "id": "camera_D4F92B11_DB33_5637_41D8_C682E6F069B8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.99,
  "pitch": 0
 },
 "id": "camera_D5ED4A63_DB33_561B_41DD_4E3BCF0D74BD",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.42,
  "pitch": 0
 },
 "id": "camera_D4B62AE2_DB33_5615_41EB_581D4B1FFD4D",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_093928_00_031",
 "id": "panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 168.53,
   "distance": 1,
   "backwardYaw": -27.02,
   "panorama": "this.panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 1.46,
   "distance": 1,
   "backwardYaw": 165.37,
   "panorama": "this.panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DF8F7F29_D0CD_4494_41E9_A1AC3C098611",
  "this.overlay_DF435061_D0C5_7C9D_41D5_9DE78E683850"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -16.48,
  "pitch": 0
 },
 "id": "camera_D56DF9F4_DB33_55FD_41D4_8D585ACA0645",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.47,
  "pitch": 0
 },
 "id": "camera_D4DB6B21_DB33_5617_41E1_A2959C8643CC",
 "automaticZoomSpeed": 10
},
{
 "label": "IMG_20250622_094405_00_035",
 "id": "panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 163.52,
   "distance": 1,
   "backwardYaw": -0.94,
   "panorama": "this.panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -8.97,
   "distance": 1,
   "backwardYaw": 159.26,
   "panorama": "this.panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB"
  }
 ],
 "partial": false,
 "pitch": 0,
 "overlays": [
  "this.overlay_DF7AFA19_D0D0_3BAD_41D4_58F98BF0D099",
  "this.overlay_DF09A490_D0D0_48A6_41E7_08459791B284"
 ],
 "class": "Panorama",
 "hfov": 360,
 "thumbnailUrl": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_t.jpg",
 "vfov": 180,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 8,
      "width": 4096,
      "tags": "ondemand",
      "height": 4096,
      "rowCount": 8
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "rowCount": 4
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_t.jpg"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 163.89,
  "pitch": 0
 },
 "id": "camera_D59AFA43_DB33_561B_41E7_5603C9628C5C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -25.06,
  "pitch": 0
 },
 "id": "camera_D465EAC3_DB33_561B_41DB_A49600B771EE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.97,
  "pitch": 0
 },
 "id": "camera_D4A88AF2_DB33_57F5_41C3_3477F478C4B7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.74,
  "pitch": 0
 },
 "id": "camera_D578F9F4_DB33_55FD_41D4_A345DA9DDF16",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.86,
  "pitch": 0
 },
 "id": "camera_D4989B01_DB33_5617_41B3_21A03C62DCDE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.74,
  "pitch": 0
 },
 "id": "camera_D5FC2A53_DB33_563B_41E2_63D562E44A3C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 173.64,
  "pitch": 0
 },
 "id": "camera_D4567AD2_DB33_5635_41E6_05B1CFA63BFF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_in"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "easing": "linear"
   },
   {
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "easing": "cubic_out"
   }
  ]
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.03,
  "pitch": 0
 },
 "id": "camera_D403AAB3_DB33_567B_41AA_BCBD97ABF86F",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "transitionDuration": 500,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "toolTipBackgroundColor": "#F6F6F6",
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "vrPointerSelectionTime": 2000,
 "class": "ViewerArea",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3, this.camera_D5ED4A63_DB33_561B_41DD_4E3BCF0D74BD); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86B43CC_D65C_3BA9_41E2_DD2CEB0CF39F",
   "yaw": 155.28,
   "pitch": -8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_C3EC69ED_D0F0_7841_41E5_9F7776F94E13",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A, this.camera_D5DF5A73_DB33_56FB_41E4_6ED8B8386367); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86893CC_D65C_3BA9_41E7_A9A57509ACC7",
   "yaw": -7.87,
   "pitch": -9.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.93,
   "distance": 100
  }
 ],
 "id": "overlay_C3755EE1_D0F0_5840_41E2_F437F4ED2477",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913, this.camera_D4238AA3_DB33_561B_41E4_B5D69722511F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86183CC_D65C_3BA9_41E4_1F6FE442A81A",
   "yaw": 165.37,
   "pitch": -7.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_C002AA31_D0C7_CCE1_41CE_3A7759DC8853",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74, this.camera_D4315A93_DB33_563B_41B4_6098AC41F928); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D861D3CC_D65C_3BA9_41D2_6B1DE0F1B892",
   "yaw": -4.58,
   "pitch": -8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_C0B5C111_D0C4_BCA2_41D3_D2383CEDFAF4",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A, this.camera_D59AFA43_DB33_561B_41E7_5603C9628C5C); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86B13CC_D65C_3BA9_41D1_3F4477CA08E3",
   "yaw": 144.37,
   "pitch": -8.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.95,
   "distance": 100
  }
 ],
 "id": "overlay_C4DD3C20_D0F0_5FC3_41C1_7C3EF64E15C2",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74, this.camera_D578F9F4_DB33_55FD_41D4_A345DA9DDF16); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86E93CC_D65C_3BA9_41C2_1ED56F01970D",
   "yaw": 162.9,
   "pitch": -6.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.97,
   "distance": 100
  }
 ],
 "id": "overlay_DE3C3BE7_D0D0_3899_41E8_11BCF159C916",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024, this.camera_D56DF9F4_DB33_55FD_41D4_8D585ACA0645); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86EE3CC_D65C_3BA9_41E7_3E82717CDCE4",
   "yaw": -0.94,
   "pitch": -7.45,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.97,
   "distance": 100
  }
 ],
 "id": "overlay_DE3E7809_D0D0_47AA_41E6_E3132CFB009A",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6, this.camera_D4B62AE2_DB33_5615_41EB_581D4B1FFD4D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86113CC_D65C_3BA9_4198_F5CF84161E27",
   "yaw": 152.26,
   "pitch": -7.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_DD3C9B27_D0D0_599F_41B8_2F01554ED05E",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0, this.camera_D4466AE2_DB33_5615_41E0_F5C7904EDCAA); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86153CC_D65C_3BA9_41E2_4EF8D01E1ACC",
   "yaw": -12.26,
   "pitch": -8.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_DE73AAC3_D0D0_7894_41D3_2CA596B38719",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C1469B52_D0F0_5853_41D2_1286B97D412E, this.camera_D4567AD2_DB33_5635_41E6_05B1CFA63BFF); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86D33CC_D65C_3BA9_41C2_D6D9FA386938",
   "yaw": 159.4,
   "pitch": -6.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.98,
   "distance": 100
  }
 ],
 "id": "overlay_C007C860_D0F0_5872_41C5_578F47ECAA2E",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36, this.camera_D465EAC3_DB33_561B_41DB_A49600B771EE); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86A93CC_D65C_3BA9_41E6_EBCBC0631F1B",
   "yaw": 4.14,
   "pitch": -7.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.97,
   "distance": 100
  }
 ],
 "id": "overlay_C18213DE_D0F0_484F_41B8_2EB43D9AE770",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6, this.camera_D4989B01_DB33_5617_41B3_21A03C62DCDE); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86AE3CC_D65C_3BA9_41D4_3F33F823520F",
   "yaw": 154.94,
   "pitch": -8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_C12134A0_D0F0_48F5_41E9_798FE36F3C45",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3, this.camera_D4A88AF2_DB33_57F5_41C3_3477F478C4B7); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86A43CC_D65C_3BA9_41E3_C1325E60801B",
   "yaw": -4.3,
   "pitch": -9.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.93,
   "distance": 100
  }
 ],
 "id": "overlay_C1297DAD_D0F0_38CE_41D7_DC69F71E790D",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF, this.camera_D50159E4_DB33_521D_41D0_84085149C601); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86A73CC_D65C_3BA9_41A2_C63839CEDBFC",
   "yaw": 154.18,
   "pitch": -8.28,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.95,
   "distance": 100
  }
 ],
 "id": "overlay_C3532C28_D0F0_5FC2_41C4_783BD71915B0",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412, this.camera_D50C59D4_DB33_523D_41E3_4BF5A15901E8); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86BB3CC_D65C_3BA9_41C5_DA54D5135FF5",
   "yaw": -16.11,
   "pitch": -9.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.93,
   "distance": 100
  }
 ],
 "id": "overlay_C44940AE_D0F1_C8DF_41D8_D87D4E7265CD",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104, this.camera_D5D0EA73_DB33_56FB_41C8_780C8E109CA4); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86D93CC_D65C_3BA9_41E0_1071C1BEE1F1",
   "yaw": 155.48,
   "pitch": -8.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_C0593740_D0F1_C9B0_41E4_E17482F41664",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6, this.camera_D5C14A83_DB33_561B_41D5_AAF4B499D4ED); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86DE3CC_D65C_3BA9_41E9_F35F1B2BA821",
   "yaw": -6.36,
   "pitch": -6.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.98,
   "distance": 100
  }
 ],
 "id": "overlay_C1559C9D_D0F0_D8D0_41BB_E707C9D874AB",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB, this.camera_D4F92B11_DB33_5637_41D8_C682E6F069B8); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86F53CC_D65C_3BA9_41D8_76C59C4746D3",
   "yaw": 155.48,
   "pitch": -6.49,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.98,
   "distance": 100
  }
 ],
 "id": "overlay_C0EA9871_D0D0_786D_41E4_2638D0654ACC",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104, this.camera_D4892B01_DB33_5617_41D3_EF6A37591018); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86CA3CC_D65C_3BA9_41E8_F874857C2150",
   "yaw": -5.67,
   "pitch": -9.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "distance": 100
  }
 ],
 "id": "overlay_DF69D2A2_D0D0_48EC_41CA_931E50DD2B06",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E, this.camera_D475EAC3_DB33_561B_41D9_F1E172C499A2); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D863B3CC_D65C_3BA9_41A9_B84FDC3828D1",
   "yaw": 3.18,
   "pitch": -9.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "distance": 100
  }
 ],
 "id": "overlay_DC0E274E_D0C5_C49E_41D9_232E0E396E57",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36, this.camera_D5638A03_DB33_561A_41C1_C44C9C965C15); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86BA3CC_D65C_3BA9_41CF_7D0F5DB154A9",
   "yaw": 149.03,
   "pitch": -8.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "distance": 100
  }
 ],
 "id": "overlay_C2831162_D0F0_487B_41C2_EC82B06CFDB3",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF, this.camera_D558EA13_DB33_563B_4186_E6438154E3E3); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86BF3CC_D65C_3BA9_4194_D82465FFE01A",
   "yaw": -15.01,
   "pitch": -11.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.9,
   "distance": 100
  }
 ],
 "id": "overlay_C239CFB4_D0F0_58C6_41E3_73F3451F2B33",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024, this.camera_D403AAB3_DB33_567B_41AA_BCBD97ABF86F); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86FB3CC_D65C_3BA9_41E8_EB46FFE043F8",
   "yaw": 159.26,
   "pitch": -6.7,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.97,
   "distance": 100
  }
 ],
 "id": "overlay_DF35BD24_D0D0_59E8_41E3_85327F041974",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D, this.camera_D413DAA3_DB33_561B_41E8_2D9783863D73); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86F13CC_D65C_3BA9_41D7_34893F9C4D45",
   "yaw": 5.79,
   "pitch": -7.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.96,
   "distance": 100
  }
 ],
 "id": "overlay_C0C88C51_D0D0_3FAB_41B4_696C8097316C",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A, this.camera_D4EBCB21_DB33_5617_41D8_91AA5247DE6D); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86083CC_D65C_3BA9_41CC_1BB2877D0733",
   "yaw": 147.04,
   "pitch": -3.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6,
   "distance": 100
  }
 ],
 "id": "overlay_DD3CFFFF_D0C7_C37A_41E0_53D8BB390BB2",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913, this.camera_D4DB6B21_DB33_5617_41E1_A2959C8643CC); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D860C3CC_D65C_3BA9_41E9_0EE8E3A57407",
   "yaw": -27.02,
   "pitch": -13.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.85,
   "distance": 100
  }
 ],
 "id": "overlay_DE9A6517_D0CF_44BF_41DA_93DF4C22CACC",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D, this.camera_D54C5A13_DB33_563B_41EA_E1AE2BDCA6DA); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86CF3CC_D65C_3BA9_41E5_8FBDEFB3155B",
   "yaw": 159.67,
   "pitch": -11.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.91,
   "distance": 100
  }
 ],
 "id": "overlay_C0AA3522_D0D0_49ED_41E4_3A2C4F975ABB",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_C1469B52_D0F0_5853_41D2_1286B97D412E, this.camera_D5417A23_DB33_561B_41EA_224D332C95A3); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86C63CC_D65C_3BA9_41E1_0D42DF64B244",
   "yaw": -14.25,
   "pitch": -9.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "distance": 100
  }
 ],
 "id": "overlay_C0F99DB8_D0F0_58DE_41D1_B902B8FD704D",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E, this.camera_D5B4AA33_DB33_567B_41D2_7993910BD505); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86003CC_D65C_3BA9_41EA_2998BA854540",
   "yaw": 168.53,
   "pitch": -9.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "distance": 100
  }
 ],
 "id": "overlay_DF8F7F29_D0CD_4494_41E9_A1AC3C098611",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6, this.camera_D5A86A33_DB33_567B_41E1_BA0516A8781D); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86043CC_D65C_3BA9_41E3_70123B9A9D8A",
   "yaw": 1.46,
   "pitch": -8.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.95,
   "distance": 100
  }
 ],
 "id": "overlay_DF435061_D0C5_7C9D_41D5_9DE78E683850",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0, this.camera_D58CDA53_DB33_563B_41E6_6C5C91DA334D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86E33CC_D65C_3BA9_41E9_A0C397B12E21",
   "yaw": 163.52,
   "pitch": -8.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.95,
   "distance": 100
  }
 ],
 "id": "overlay_DF7AFA19_D0D0_3BAD_41D4_58F98BF0D099",
 "maps": []
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB, this.camera_D5FC2A53_DB33_563B_41E2_63D562E44A3C); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "data": {
  "label": "Arrow 01c"
 },
 "rollOverDisplay": false,
 "useHandCursor": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_D86F83CC_D65C_3BA9_41E5_E25F94D8D7DD",
   "yaw": -8.97,
   "pitch": -9.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.94,
   "distance": 100
  }
 ],
 "id": "overlay_DF09A490_D0D0_48A6_41E7_08459791B284",
 "maps": []
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86B43CC_D65C_3BA9_41E2_DD2CEB0CF39F",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C4F36347_D0F0_4842_41E3_FEC5DAD49BBF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86893CC_D65C_3BA9_41E7_A9A57509ACC7",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86183CC_D65C_3BA9_41E4_1F6FE442A81A",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DE63BB8E_D0C4_C3A2_41D0_154E0B5704F6_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D861D3CC_D65C_3BA9_41D2_6B1DE0F1B892",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C463918E_D0F0_C8DF_41E7_9DAE5822C412_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86B13CC_D65C_3BA9_41D1_3F4477CA08E3",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86E93CC_D65C_3BA9_41C2_1ED56F01970D",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DFCC8E47_D0D0_5B9B_41B1_8A0810DBD5B0_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86EE3CC_D65C_3BA9_41E7_3E82717CDCE4",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86113CC_D65C_3BA9_4198_F5CF84161E27",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DE282265_D0D3_CB90_41E2_F8D4FE130A74_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86153CC_D65C_3BA9_41E2_4EF8D01E1ACC",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86D33CC_D65C_3BA9_41C2_D6D9FA386938",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C1D63150_D0F3_C851_41D9_F6084F1E7EF6_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86A93CC_D65C_3BA9_41E6_EBCBC0631F1B",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86AE3CC_D65C_3BA9_41D4_3F33F823520F",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C10103F4_D0F7_C85C_41E7_D65661BA1B36_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86A43CC_D65C_3BA9_41E3_C1325E60801B",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86A73CC_D65C_3BA9_41A2_C63839CEDBFC",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C5FF1B81_D0F0_38C3_41D5_40F2ACB7398A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86BB3CC_D65C_3BA9_41C5_DA54D5135FF5",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86D93CC_D65C_3BA9_41E0_1071C1BEE1F1",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C1469B52_D0F0_5853_41D2_1286B97D412E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86DE3CC_D65C_3BA9_41E9_F35F1B2BA821",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86F53CC_D65C_3BA9_41D8_76C59C4746D3",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C0AC7EF9_D0D0_385A_41B1_F75AAF9CB97D_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86CA3CC_D65C_3BA9_41E8_F874857C2150",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DB438B11_D0C3_CC80_41B2_6C11430EA34A_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D863B3CC_D65C_3BA9_41A9_B84FDC3828D1",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86BA3CC_D65C_3BA9_41CF_7D0F5DB154A9",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_C34D43A4_D0F0_C8FE_41E2_AEB32D48A5C3_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86BF3CC_D65C_3BA9_4194_D82465FFE01A",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86FB3CC_D65C_3BA9_41E8_EB46FFE043F8",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DF2F5302_D0D0_C9A8_41E4_4614D7CA72BB_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86F13CC_D65C_3BA9_41D7_34893F9C4D45",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86083CC_D65C_3BA9_41CC_1BB2877D0733",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DAA53757_D0C3_C481_41CF_8F9A12DE512E_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D860C3CC_D65C_3BA9_41E9_0EE8E3A57407",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86CF3CC_D65C_3BA9_41E5_8FBDEFB3155B",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DFA6FA91_D0D0_38AC_41E5_BED0C1613104_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86C63CC_D65C_3BA9_41E1_0D42DF64B244",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86003CC_D65C_3BA9_41EA_2998BA854540",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DED74313_D0CF_7CB5_41B4_A2AFD3613913_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86043CC_D65C_3BA9_41E3_70123B9A9D8A",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86E33CC_D65C_3BA9_41E9_A0C397B12E21",
 "frameDuration": 62,
 "rowCount": 3
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_DE452C4B_D0D0_7FAE_41D5_BCE5A7BA1024_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_D86F83CC_D65C_3BA9_41E5_E25F94D8D7DD",
 "frameDuration": 62,
 "rowCount": 3
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "gap": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player498"
 },
 "scripts": {
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getKey": function(key){  return window[key]; },
  "existsKey": function(key){  return key in window; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "downloadEnabled": false,
 "horizontalAlign": "left"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
