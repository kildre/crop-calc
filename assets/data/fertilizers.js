export const FERTS = {
  fertilizers: [
    {
      contentType: "valueCalculatorFertilizer",
      id: "1QJLuOGwZrDLu7nnzgqVsl",
      name: "DAP",
      crop: {
        contentType: "valueCalculatorCrop",
        id: "1EBESGRbNpDWu8PBaz1Lcs",
        crop: "Corn",
        priceUnit: "bu",
        minimumPrice: 2.5,
        maximumPrice: 8.5,
        defaultPrice: 5,
        priceInterval: 0.1
      },
      yieldUnit: "acre",
      minimumYield: 5,
      maximumYield: 10,
      defaultYield: 5.4,
      yieldInterval: 0.1,
      cost: 9,
      disclaimer:
        "*Results based on 70 lbs of P₂O₅ applied and a premium of $30/ton over DAP and balanced for total N. This example reflects typical use rates. Actual yield results and local pricing may vary. Expected yield advantage based on multi-year research conducted by The Mosaic Company.",
      research: [
        {
          id: "2JwmOFYj4SAIiifA9ot5hQ",
          title: "MicroEssentials-Corn-Yields-MES10-vs-DAP",
          url:
            "//assets.ctfassets.net/3jf1t80tlft4/2JwmOFYj4SAIiifA9ot5hQ/d89616dcbaa6da37f6dd1f402d6ee102/MicroEssentials-Corn-Yields-MES10-vs-DAP.pdf",
          contentType: "application/pdf"
        }
      ],
      phosphorous: 46,
      nitrogen: 18
    },
    {
      contentType: "valueCalculatorFertilizer",
      id: "1w2jiuGJwfZ5njzQgBmjIS",
      name: "DAP",
      crop: {
        contentType: "valueCalculatorCrop",
        id: "5IvYeQanFFme4m4fnjFsdK",
        crop: "Cotton",
        priceUnit: "lbs",
        minimumPrice: 0.5,
        maximumPrice: 1,
        defaultPrice: 0.7,
        priceInterval: 0.05
      },
      yieldUnit: "acre",
      minimumYield: 50,
      maximumYield: 100,
      defaultYield: 60,
      yieldInterval: 5,
      cost: 7.94,
      disclaimer:
        "*Results based on 50 lbs P₂O₅ applied and a premium of $30/ton over DAP and balanced for total N. This example reflects typical use rates. Actual yield results and local pricing may vary. Expected yield advantage based on multi-year research conducted by The Mosaic Company.",
      research: [
        {
          id: "GjYd5AW16zANJYY7UJDPe",
          title: "ME 1083 AgriFacts MES S10 CottonStudy FinalNoBleeds",
          url:
            "//assets.ctfassets.net/3jf1t80tlft4/GjYd5AW16zANJYY7UJDPe/8c18f185219e9191427b908bbe704832/ME_1083_AgriFacts_MES_S10_CottonStudy_FinalNoBleeds.pdf",
          contentType: "application/pdf"
        }
      ],
      phosphorous: 46,
      nitrogen: 18
    },
    {
      contentType: "valueCalculatorFertilizer",
      id: "r7ifsdAsVirk2xEiXxCxc",
      name: "DAP",
      crop: {
        contentType: "valueCalculatorCrop",
        id: "1djh8RxAKZt15ZeIEWlQgs",
        crop: "Soybean",
        priceUnit: "bu",
        minimumPrice: 6,
        maximumPrice: 16,
        defaultPrice: 11,
        priceInterval: 0.1
      },
      yieldUnit: "acre",
      minimumYield: 1,
      maximumYield: 4,
      defaultYield: 1.7,
      yieldInterval: 0.1,
      cost: 4.76,
      disclaimer:
        "*Results based on 40 lbs P₂O₅ applied and a premium of $30/ton over DAP. This example reflects typical use rates. Actual yield results and local pricing may vary. Expected yield advantage based on multi-year research conducted by The Mosaic Company.",
      research: [
        {
          id: "13EZ60ZP3WcHlgtnT0bYUw",
          title: "AS 1080 AgriFacts MES S10vsDAP Soybeans FinalNoBleeds",
          url:
            "//assets.ctfassets.net/3jf1t80tlft4/13EZ60ZP3WcHlgtnT0bYUw/403a232a915bbb2fe777e0eb59ab99ac/AS_1080_AgriFacts_MES_S10vsDAP_Soybeans_FinalNoBleeds.pdf",
          contentType: "application/pdf"
        }
      ],
      phosphorous: 46,
      nitrogen: 18
    },
    {
      contentType: "valueCalculatorFertilizer",
      id: "lOX1TFajBCGUNfoRpgx6R",
      name: "MAP",
      crop: {
        contentType: "valueCalculatorCrop",
        id: "1EBESGRbNpDWu8PBaz1Lcs",
        crop: "Corn",
        priceUnit: "bu",
        minimumPrice: 2.5,
        maximumPrice: 8.5,
        defaultPrice: 5,
        priceInterval: 0.1
      },
      yieldUnit: "acre",
      minimumYield: 4,
      maximumYield: 10,
      defaultYield: 4.7,
      yieldInterval: 0.1,
      cost: 10.69,
      disclaimer:
        "*Results based on 80 lbs P₂O₅ applied and a premium of $20/ton over MAP and balanced for total N. This example reflects typical use rates. Actual yield results and local pricing may vary. Expected yield advantage based on multi-year research conducted by The Mosaic Company.",
      research: [
        {
          id: "kVQsU69rBMR9Ia4rfx7Hd",
          title: "ME 1078 AgriFacts MES S10 CornStudy Feb11",
          url:
            "//assets.ctfassets.net/3jf1t80tlft4/kVQsU69rBMR9Ia4rfx7Hd/3bf925e9fbf333a8fbc0036aecb50c0c/ME_1078_AgriFacts_MES_S10_CornStudy_Feb11.pdf",
          contentType: "application/pdf"
        }
      ],
      phosphorous: 52,
      nitrogen: 11
    },
    {
      contentType: "valueCalculatorFertilizer",
      id: "SSHPaHaBT5OMME7M1aLnF",
      name: "MAP",
      crop: {
        contentType: "valueCalculatorCrop",
        id: "1djh8RxAKZt15ZeIEWlQgs",
        crop: "Soybean",
        priceUnit: "bu",
        minimumPrice: 6,
        maximumPrice: 16,
        defaultPrice: 11,
        priceInterval: 0.1
      },
      yieldUnit: "acre",
      minimumYield: 1,
      maximumYield: 4,
      defaultYield: 1.8,
      yieldInterval: 0.1,
      cost: 6.88,
      disclaimer:
        "*Results based on 40 lbs P₂O₅ applied and a premium of $20/ton over MAP. This example reflects typical use rates. Actual yield results and local pricing may vary. Expected yield advantage based on multi-year research conducted by The Mosaic Company.",
      research: [
        {
          id: "3QWizpKm20m3oL4cD2j0ik",
          title: "ME 1076 AgriFacts MES S10 SoybeansStudy Feb11",
          url:
            "//assets.ctfassets.net/3jf1t80tlft4/3QWizpKm20m3oL4cD2j0ik/b160ae4ef5b78bd482a5755f9feaa419/ME_1076_AgriFacts_MES_S10_SoybeansStudy_Feb11.pdf",
          contentType: "application/pdf"
        }
      ],
      phosphorous: 52,
      nitrogen: 11
    }
  ]
};
