export const commonProductFields = [
  { name: "name", label: "Product Name" },
  { name: "productType", label: "Product Type" },
  { name: "modelNumber", label: "Model Number" },
  { name: "barcode", label: "BAR CODE" },
  { name: "countryOfOrigin", label: "Country of Origin" },
  { name: "importer", label: "Importer" },
  { name: "manufacturer", label: "Manufacturer" },
  { name: "markOfOrigin", label: "Mark of Origin" },
  { name: "netQuantity", label: "Net Quantity" },
  { name: "price", label: "Price" },
];

export const televisionSpecs = [
  { name: "displayType", label: "Display Type" },
  { name: "refreshRate", label: "Refresh Rate" },
  { name: "wideColorGamut", label: "Wide Color Gamut" },
  { name: "pictureProcessor", label: "Picture Processor" },
  { name: "hdr", label: "HDR (High Dynamic Range)" },
  {
    name: "gSyncCompatible",
    label: "G-Sync Compatible (Nvidia)",
    type: "checkbox",
  },
  {
    name: "freeSyncCompatible",
    label: "FreeSync Compatible (AMD)",
    type: "checkbox",
  },
  { name: "audioOutput", label: "Audio Output" },
  { name: "speakerSystem", label: "Speaker System" },
  { name: "dolbyAtmos", label: "Dolby Atmos", type: "checkbox" },
  {
    name: "tvDimensionsWithoutStand",
    label: "TV Dimensions without Stand (WxHxD, mm)",
  },
  { name: "tvWeightWithoutStand", label: "TV Weight without Stand (kg)" },
  { name: "displayResolution", label: "Display Resolution" },
  { name: "aiPicture", label: "AI Picture" },
  { name: "aiUpscaling", label: "AI Upscaling" },
  { name: "dynamicToneMapping", label: "Dynamic Tone Mapping" },
  { name: "aiGenreSelection", label: "AI Genre Selection", type: "checkbox" },
  {
    name: "aiBrightnessControl",
    label: "AI Brightness Control",
    type: "checkbox",
  },
  { name: "filmmakerMode", label: "FILMMAKER MODE™", type: "checkbox" },
  { name: "hfr", label: "HFR (High Frame Rate)" },
  { name: "dimmingTechnology", label: "Dimming Technology" },
  { name: "motion", label: "Motion" },
  { name: "pictureMode", label: "Picture Mode" },
  { name: "hgigMode", label: "HGIG Mode", type: "checkbox" },
  { name: "gameOptimizer", label: "Game Optimizer", type: "checkbox" },
  { name: "allm", label: "ALLM (Auto Low Latency Mode)", type: "checkbox" },
  { name: "vrr", label: "VRR (Variable Refresh Rate)", type: "checkbox" },
  {
    name: "worksWithAirplay",
    label: "Works with Apple Airplay2",
    type: "checkbox",
  },
  { name: "artGallery", label: "Art Gallery", type: "checkbox" },
  { name: "operatingSystem", label: "Operating System (OS)" },
  { name: "sportsAlert", label: "Sports Alert", type: "checkbox" },
  { name: "familySettings", label: "Family Settings", type: "checkbox" },
  { name: "thinQ", label: "ThinQ", type: "checkbox" },
  {
    name: "usbCameraCompatible",
    label: "USB Camera Compatible",
    type: "checkbox",
  },
  { name: "alwaysReady", label: "Always Ready", type: "checkbox" },
  { name: "fullWebBrowser", label: "Full Web Browser", type: "checkbox" },
  {
    name: "handsFreeVoiceControl",
    label: "Hands-free Voice Control",
    type: "checkbox",
  },
  {
    name: "intelligentVoiceRecognition",
    label: "Intelligent Voice Recognition",
    type: "checkbox",
  },
  { name: "magicRemoteControl", label: "Magic Remote Control" },
  { name: "multiView", label: "Multi View", type: "checkbox" },
  { name: "roomToRoomShare", label: "Room to Room Share", type: "checkbox" },
  {
    name: "smartphoneRemoteApp",
    label: "Smartphone Remote App",
    type: "checkbox",
  },
  { name: "highContrast", label: "High Contrast", type: "checkbox" },
  { name: "grayScale", label: "Gray Scale", type: "checkbox" },
  { name: "invertColors", label: "Invert Colors", type: "checkbox" },
  {
    name: "tvDimensionsWithStand",
    label: "TV Dimensions with Stand (WxHxD, mm)",
  },
  { name: "packagingDimensions", label: "Packaging Dimensions (WxHxD, mm)" },
  { name: "tvStand", label: "TV Stand (WxD, mm)" },
  { name: "tvWeightWithStand", label: "TV Weight with Stand (kg)" },
  { name: "packagingWeight", label: "Packaging Weight (kg)" },
  { name: "vesaMounting", label: "VESA Mounting (WxH, mm)" },
  { name: "aiSound", label: "AI Sound" },
  { name: "clearVoicePro", label: "Clear Voice Pro", type: "checkbox" },
  { name: "wisaReady", label: "WiSA Ready", type: "checkbox" },
  { name: "lgSoundSync", label: "LG Sound Sync", type: "checkbox" },
  { name: "soundModeShare", label: "Sound Mode Share", type: "checkbox" },
  {
    name: "simultaneousAudioOutput",
    label: "Simultaneous Audio Output",
    type: "checkbox",
  },
  {
    name: "bluetoothSurroundReady",
    label: "Bluetooth Surround Ready",
    type: "checkbox",
  },
  { name: "aiAcousticTuning", label: "AI Acoustic Tuning", type: "checkbox" },
  { name: "audioCodec", label: "Audio Codec" },
  { name: "speakerDirection", label: "Speaker Direction" },
  { name: "hdmiArc", label: "HDMI Audio Return Channel" },
  { name: "bluetoothSupport", label: "Bluetooth Support" },
  { name: "ethernetInput", label: "Ethernet Input" },
  { name: "simplink", label: "Simplink (HDMI CEC)", type: "checkbox" },
  { name: "spdif", label: "SPDIF (Optical Digital Audio Out)" },
  { name: "hdmiInput", label: "HDMI Input" },
  { name: "rfInput", label: "RF Input (Antenna/Cable)" },
  { name: "usbInput", label: "USB Input" },
  { name: "wifi", label: "Wi-Fi" },
  { name: "powerSupply", label: "Power Supply (Voltage, Hz)" },
  { name: "standbyPowerConsumption", label: "Standby Power Consumption" },
  { name: "remote", label: "Remote" },
  { name: "irBlasterCable", label: "IR Blaster Cable", type: "checkbox" },
  { name: "powerCable", label: "Power Cable" },
  { name: "remoteControlBatteries", label: "Remote Control Batteries" },
];

export const refrigeratorSpecs = [
  { name: "dimensions", label: "Dimensions" },
  { name: "productWeight", label: "Product Weight" },
  { name: "packingWeight", label: "Packing Weight" },
  { name: "storageVolumeTotal", label: "Storage Volume (Total)" },
  { name: "storageVolumeFreezer", label: "Storage Volume (Freezer)" },
  { name: "storageVolumeRefrigerator", label: "Storage Volume (Refrigerator)" },

  { name: "energyConsumption", label: "Energy Consumption" },
  { name: "energyGrade", label: "Energy Grade" },
  { name: "compressorType", label: "Compressor Type" },

  { name: "wifi", label: "Wi-Fi (ThinQ)", type: "checkbox" },
  { name: "smartDiagnosis", label: "Smart Diagnosis", type: "checkbox" },
  { name: "doorCooling", label: "Door Cooling+", type: "checkbox" },

  { name: "starRating", label: "Star Rating" },
  { name: "iceMaker", label: "Ice Maker" },

  { name: "doorMaterial", label: "Door Material" },
  { name: "doorFinish", label: "Door Finish" },
  { name: "handleType", label: "Handle Type" },

  { name: "doorAlarm", label: "Door Alarm", type: "checkbox" },
  { name: "expressFreeze", label: "Express Freeze", type: "checkbox" },
  { name: "externalDisplay", label: "External LED Display", type: "checkbox" },

  { name: "refrigeratorLight", label: "Refrigerator Light" },
  { name: "transparentBaskets", label: "Transparent Baskets" },
  { name: "vegetableBox", label: "Vegetable Box", type: "checkbox" },
  { name: "temperedGlassShelves", label: "Tempered Glass Shelves" },
];

export const washingMachineSpecs = [
  { name: "productDimensions", label: "Product Dimensions (WxHxD mm)" },
  { name: "weight", label: "Weight (kg)" },

  { name: "spinTubCapacity", label: "Spin Tub Capacity (kg)" },
  { name: "washCapacity", label: "Wash Capacity (kg)" },

  { name: "buzzer", label: "Buzzer", type: "checkbox" },
  { name: "collarScrubber", label: "Collar Scrubber", type: "checkbox" },
  { name: "ratAwayFeature", label: "Rat Away Feature", type: "checkbox" },
  { name: "rollerJetPulsator", label: "Roller Jet Pulsator", type: "checkbox" },
  {
    name: "rustFreePlasticBase",
    label: "Rust Free Plastic Base",
    type: "checkbox",
  },
  { name: "waterFall", label: "Water Fall", type: "checkbox" },
  { name: "unidirectionalWheel", label: "Unidirectional Wheel" },
  { name: "windJetDry", label: "Wind Jet Dry", type: "checkbox" },
  { name: "autoRestart", label: "Auto Restart", type: "checkbox" },
  { name: "waterFeed", label: "Water Feed (Hot / Cold)" },
  { name: "lintFilter", label: "Lint Filter", type: "checkbox" },

  { name: "energyRating", label: "Energy Rating" },

  { name: "gentle", label: "Gentle", type: "checkbox" },
  { name: "normal", label: "Normal", type: "checkbox" },
  { name: "soak", label: "Soak", type: "checkbox" },
  { name: "strong", label: "Strong", type: "checkbox" },

  { name: "drainSelector", label: "Drain Selector", type: "checkbox" },
  { name: "soakTimer", label: "Soak Timer (min)" },
  { name: "spinTimer", label: "Spin Timer (min)" },
  { name: "washTimer", label: "Wash Timer (min)" },
];

export const defaultSpecs = [
  { name: "dimensions", label: "Dimensions" },
  { name: "productWeight", label: "Product Weight" },
  { name: "energyConsumption", label: "Energy Consumption" },
];

export const airconditionerSpecs = [
  { name: "hvacType", label: "HVAC Type" },
  { name: "coolingCapacityMax", label: "Cooling Capacity Max (W)" },
  {
    name: "coolingPowerConsumptionRatedMin",
    label: "Cooling Power Consumption Rated/Min (W)",
  },

  // Design
  { name: "colorBody", label: "Color (Body)" },
  { name: "colorDischarge", label: "Color (Discharge)" },
  { name: "display", label: "Display" },

  // General
  { name: "coolingCapacityRatedMin", label: "Cooling Capacity Rated/Min (W)" },
  { name: "indoorUnitDimension", label: "Indoor Unit Dimension WxHxD (mm)" },
  { name: "indoorUnitWeight", label: "Indoor Unit Weight (kg)" },
  { name: "outdoorUnitDimension", label: "Outdoor Unit Dimension WxHxD (mm)" },
  { name: "outdoorUnitWeight", label: "Outdoor Unit Weight (kg)" },
  { name: "ratedInputVoltage", label: "Rated Input Voltage (V, Hz)" },
  { name: "refrigerantType", label: "Refrigerant Type" },
  { name: "soundPower", label: "Sound Power (Cooling) SH/H/M/L/SL (dB(A))" },
  { name: "productTypeII", label: "Product Type II" },

  { name: "hymalayaCool", label: "Hymalaya Cool", type: "checkbox" },
  {
    name: "airflowDirectionControl",
    label: "Airflow Direction Control (Up & Down)",
  },
  { name: "fanSpeed", label: "Fan Speed" },
  { name: "sixInOneCooling", label: "6-in-1 Cooling", type: "checkbox" },
  { name: "dietMode", label: "Diet Mode", type: "checkbox" },

  { name: "dehumidification", label: "Dehumidification", type: "checkbox" },

  {
    name: "energySavingCooling",
    label: "Energy Saving (Cooling)",
    type: "checkbox",
  },

  { name: "autoRestart", label: "Auto Restart", type: "checkbox" },
  { name: "fanMode", label: "Fan Mode", type: "checkbox" },
  {
    name: "forcedSwitchOperation",
    label: "Forced Switch Operation",
    type: "checkbox",
  },
  { name: "lowNoise", label: "Low Noise", type: "checkbox" },
  {
    name: "onOffReservation",
    label: "On/Off Reservation (24Hr)",
    type: "checkbox",
  },
  { name: "remoteController", label: "Remote Controller", type: "checkbox" },
  {
    name: "stabilizerFreeOperation",
    label: "Stabilizer Free Operation",
    type: "checkbox",
  },
  {
    name: "tropicalNightComfortSleep",
    label: "Tropical Night Comfort Sleep",
    type: "checkbox",
  },

  { name: "launchingMonth", label: "Launching Month (YYYY-MM)" },
  { name: "productTypeModelName", label: "Product Type & Model Name" },

  { name: "outdoorUnitModelName", label: "Outdoor Unit Model Name" },
];
