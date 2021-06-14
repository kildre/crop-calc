<template>
  <div>
    <b-jumbotron
      header="MicroEssentials S10 Value Calculator"
      lead="Built with Bootstrap v4 Components for Vue.js 2"
    >
    </b-jumbotron>
    <div class="main row">
      <div class="col-sm-6 left-col">
        <b-form>
          <b-card bg-variant="light">
            <b-form-group label="Select Crop">
              <b-form-select
                @change="setCrop"
                :options="crops"
                v-model="setCrop"
              >
              </b-form-select>
            </b-form-group>
          </b-card>
          <!-- ///// CROP PRICE -->
          <b-card bg-variant="light">
            <b-form-group label="Crop Price">
              <b-input-group prepend="$">
                <b-form-input
                  type="number"
                  v-model="cropPrice"
                  step="0.10"
                  min="0.00"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
          </b-card>

          <!-- ////////CUSTOM INPUT CROP PRICE VUE-NUMERIC -->
          <div class="input-group mb-3">
            <h3 class="colored">vue-numeric input</h3>
                <legend for="ms10EssentialsPricePerTon">Cropy Pricey</legend>

                <span class="input-group-prepend">$</span>
                <vue-numeric
                    seperator=","
                    v-model="cropPrice"
                    :precision="2"
                    step="0.1"
                    type="number"
                    :empty-value="0"
                    style="width: 120px;"
                    v-autowidth="{
                      maxWidth: '960px',
                      minWidth: '130px',
                      comfortZone: 40
                    }"
                    >
                  </vue-numeric>
                <span class="input-group-append">/short ton</span>
          </div>

          <div class="input-group mb-3">
            <h3 class="colored">vue-numeric</h3>
                <legend for="ms10EssentialsPricePerTon">Cropy Pricey</legend>
                <span class="input-group-prepend">$</span>
               <!-- <vue-numeric
                v-model="cropPrice"
               >
                </vue-numerict> -->
                <span class="input-group-append">/short ton</span>
          </div>

          <!-- //CURRENT BLEND -->
          <b-form-group label="CURRENT BLEND" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              id="radio-group-1"
              v-model="currentBlend"
              :options="fertilizers"
              :aria-describedby="ariaDescribedby"
              name="radio-options"
            ></b-form-radio-group>
          </b-form-group>
          <!-- DO YOU BALANCE FOR NITORGEN? -->
          <b-card bg-variant="light">
            <b-form-group label="Do you Balance for Nitrogen?">
              <b-form-checkbox v-model="useUrea"> </b-form-checkbox>
            </b-form-group>
          </b-card>

          <!-- BLEND COMPARISON -->
          <div >
            <h2>BLEND COMPARISON</h2>
            <h3 class="colored">vue-numeric input</h3>
            <div class="input-group mb-3">
                <legend for="ms10EssentialsPricePerTon">Blend's Rate of P<sub>2</sub>O<sub>5</sub></legend>
                <!-- <span class="input-group-prepend">$</span> -->
                <vue-numeric
                    seperator=","
                    placeholder="0"
                    v-model="formattedPhosphorus"
                    :precision="2"
                    step="0.20"
                    output-type="number"
                    type="number"
                    :empty-value="0"
                    v-autowidth="{
                      maxWidth: '960px',
                      minWidth: '130px',
                      comfortZone: 25
                    }">
                  </vue-numeric>
                <span class="input-group-append">lb/acre</span>
          </div>

            <!-- YIELD ADVANTAGE YIELD RATE -->
            <div class="input-group mb-3">
              <h3 class="colored">vue-numeric input</h3>
                <legend for="ms10EssentialsPricePerTon">expected yield advantage</legend>
                <!-- <span class="input-group-prepend">$</span> -->
                <vue-numeric
                    seperator=","
                    v-model="yieldAdvantage"
                    :precision="2"
                    step="0.40"
                    output-type="number"
                    type="number"
                    empty-value="0"
                    v-autowidth="{
                      maxWidth: '960px',
                      minWidth: '130px',
                      comfortZone: 25
                    }">
                  </vue-numeric>
                <span class="input-group-append">lb/acre</span>
          </div>

            <!-- INCLUDE SULFUR IN THE BLEND -->
            <b-card bg-variant="light">
              <b-form-group label="Include sulfur in the blend?">
                <b-form-checkbox v-model="sulfurInBlend"> </b-form-checkbox>
              </b-form-group>
            </b-card>

            <!-- BLENDS SULFUR SOURCE -->
            <b-form-group v-if="sulfurInBlend" label="Blend's Sulfur Source">
              <b-form-radio-group
                id="radio-group-sulfur"
                v-model="sulfur"
                :options="sulfurs"
                name="sulfur-options"
              ></b-form-radio-group>
            </b-form-group>
          </div>

          <!-- LOCAL RETAIL PRICES -->
          <b-card>
            <b-form-group label-size="lg">
              <h2>Local Retail Prices</h2>
              <!-- /////////CUSTOM 1 -->
              <div class="input-group mb-3">
                <legend for="ms10EssentialsPricePerTon">microessentials</legend>
                <span class="input-group-text-prepend">$</span>
                <input
                  input-group-append="/Ton"
                  id="ms10EssentialsPricePerTon"
                  class="input-dollar-amount currency-field"
                  v-model.number="ms10PricePerTon"
                  step="0.05"
                  type="number"
                  min="1.00"
                  v-autowidth="{
                    maxWidth: '960px',
                    minWidth: '100px',
                    comfortZone: 20
                  }"
                />
                <span class="input-group-text-append">/short ton</span>
              </div>
            </b-form-group>
          </b-card>

              <!-- ///////// CUSTOM 3INPUT -->
              <div class="input-group mb-3">
                <span class="input-group-text-prepend">$</span>
                <input
                @keydown="currency(dapPricePerTon)"
                  class="currency-field"
                  type="number"
                  step="0.05"
                  min="1.00"
                  value="0.00"
                  v-autowidth="{
                    maxWidth: '960px',
                    minWidth: '100px',
                    comfortZone: 20
                  }"
                  v-model.number="dapPricePerTon"
                />
                <span class="input-group-text-append">/short ton</span>
              </div>

              <b-card>
                <b-form-group label="DAP">
                  <b-input-group prepend="$" append="/Ton">
                    <b-form-input
                      type="text"
                      v-model="dapPricePerTon"
                      step="0.10"
                      min="1.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-card>
              <!-- <div class="input-group mb-3">
                <span class="input-group-text-prepend">$</span>
                <span
                  input-group-append="/Ton"
                  id="microessentials"
                  class="input-dollar-amount"
                  type="number"
                  step="0.05"
                  min="1.00"
                  contenteditable
                  >{{ ms10PricePerTon }}</span
                >
                <span class="input-group-text-append">/short ton</span>
              </div> -->

              <b-card>
                <b-form-group label="MAP">
                  <b-input-group prepend="$" append="/Ton">
                    <b-form-input
                      type="number"
                      v-model="mapPricePerTon"
                      step="0.10"
                      min="1.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-card>

              <b-card v-if="useUrea">
                <b-form-group label="Urea">
                  <b-input-group prepend="$" append="/Ton">
                    <b-form-input
                      type="number"
                      v-model="ureaPricePerTon"
                      step="0.10"
                      min="1.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-card>

              <b-card>
                <b-form-group label="Ammonium Sulfate (AMS)">
                  <b-input-group prepend="$" append="/Ton">
                    <b-form-input
                      type="number"
                      v-model="amsPricePerTon"
                      step="0.10"
                      min="1.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-card>

              <b-card>
                <b-form-group label="Elemental Sulfur (0-0-0-90s)">
                  <b-input-group prepend="$" append="/Ton">
                    <b-form-input
                      type="number"
                      v-model="ms10PricePerTon"
                      step="0.10"
                      min="1.00"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-card>
            </b-form-group>
          </b-card>
        </b-form>
        <h3 style="background: blue; color: white;">
          getAMSforMAPNitroFromAMS: {{ getAMSforMAPNitroFromAMS }}
          <span
            >amsForMAPLbsAcreApplied: {{ amsForMAPLbsAcreApplied }} *
            getAms.sulfate: {{ getAms.sulfate }} =
            {{ getAMSforMAPNitroFromAMS }}</span
          >
        </h3>
        <h3 style="background: blue; color: white;">
          amsForMAPLbsAcreApplied
          <span
            >getMAPSulfateFromAMS : {{ getMAPSulfateFromAMS }} /
            getAms.nitrogen: {{ getAms.nitrogen }} =
            {{ amsForMAPLbsAcreApplied }}</span
          >
        </h3>
      </div>
      <div class="col-sm-6 right-col">
        <div class="bkg-yellow">
          <h2>Net Return Per Acre</h2>

          <h3>${{ netReturnPerAcre }}</h3>
          <b-card bg-variant="light">
            <b-form-group label="Expected Yield Advantage">
              <b-input-group append="BU/Acre">
                <b-form-input
                  type="number"
                  v-model="yieldAdvantage"
                  step="0.50"
                  min="0.00"
                ></b-form-input>
              </b-input-group>
            </b-form-group>
          </b-card>
          <p>Yield Advantage: {{ yieldAdvantage }}</p>
        </div>
        <p>
          cropPrice {{ cropPrice }} * yieldAdvantage {{ yieldAdvantage }} : ({{
            cropPrice * yieldAdvantage
          }}
          ) - getMS10CostPerAcre: {{ getMS10CostPerAcre }} -
          getDAPmapCostPerAcre: {{ getDAPmapCostPerAcre }} : ({{
            getMS10CostPerAcre - getDAPmapCostPerAcre
          }}
        </p>
        <!-- DATA -->
        <h5 class="bkg">DATA : DATA PROPERTIES</h5>
        <p>Crop Price: {{ cropPrice }}</p>
        <p>Yield Advantage: {{ yieldAdvantage }}</p>
        <p>Sulfur in Blend: {{ sulfurInBlend }}</p>

        <p>mS10: {{ getMS10 }}</p>
        <p>MS10 Price/Ton: {{ ms10PricePerTon }}</p>
        <p>DAP Price Per/Ton: {{ dapPricePerTon }}</p>
        <p>Phosphorous Oxide: {{ phosphorousOxide }}</p>
        <p>Sulfur: {{ sulfur }}</p>
        <p>Current Blend: {{ currentBlend }}</p>
        <p>User Urea: {{ useUrea }}</p>

        <!-- FERTILIZERS COLUMN D -->
        <h5 class="bkg">FertilizerS : COLUMN D</h5>
        <p>
          MS10: {{ getMS10.name }} / Nitrogen: {{ getMS10.nitrogen }} /
          Phoshphorous: {{ getMS10.phosphorous }} / Sulfate:
          {{ getMS10.sulfate }}
        </p>
        <p>DAP: {{ getDap }}</p>
        <p>MAP: {{ getMap }}</p>
        <p>UREA: {{ getUrea }}</p>
        <p>AMS: {{ getAms }}</p>
        <p>Elemental Sulfur: {{ getElementalSulfur.elementalSulfur }}</p>

        <!-- NITROGEN LBS/ACRE COLUMN F-->
        <h5 class="bkg">NITROGEN LBS/ACRE : COLUMN F ROW 21 | 22</h5>
        <p>
          getMS10NitrogenLbsPerAcre: {{ getMS10NitrogenLbsPerAcre }}
          <span>getMS10TotalNitrogen: {{ getMS10TotalNitrogen }}</span>
        </p>
        <p>
          getDAPsulfurNitrogenLbsPerAcre: {{ getDAPsulfurNitrogenLbsPerAcre }}
        </p>
        <p>
          getMAPsulfurNitrogenLbsPerAcre: {{ getMAPsulfurNitrogenLbsPerAcre }}
        </p>
        <!-- TOTAL PHOSPHORUS LBS/ACRE COLUMN G ROW 21 | 22 -->
        <h5 class="bkg">PHOSPHORUS LBS/ACRE : COLUMN G ROW 21 | 22</h5>
        <p>getMS10PhosphorusLbsPerAcre: {{ getMS10PhosphorusLbsPerAcre }}</p>
        <p>getDAPPhosphorusLbsPerAcre: {{ getDAPPhosphorusLbsPerAcre }}</p>
        <p>getMAPPhosphorusLbsPerAcre: {{ getMAPPhosphorusLbsPerAcre }}</p>

        <!-- TOTAL SULFATE SULFUR COLUMN H -->
        <h5 class="bkg">Total Sulfate Sulfur Column H</h5>
        <p>
          getMS10TotalSulfate: getDAPSulfateFromAMS {{ getDAPSulfateFromAMS }} *
          getMS10PhosphorusLbsPerAcre {{ getMS10PhosphorusLbsPerAcre }} =
          {{ getMS10TotalSulfate }}
        </p>

        <!-- COSTS/ACRE  COLUMN J -->
        <h5 class="bkg">Costs/Acre : COLUMN J</h5>
        <p>
          MS10 Cost/Acre: {{ getMS10CostPerAcre }}
          <span
            >mS10LbsPerAcre: {{ mS10Cost }} / 2000 * ms10PricePerTon:
            {{ ms10PricePerTon }} = {{ mS10Cost }}</span
          >
        </p>

        <p>Current Blend: {{ currentBlend }}</p>
        <p>
          MS10 lbs/acre applied: {{ ms10LbsPerAcreApplied }}
          <span
            >phosphorousOxide: {{ phosphorousOxide }} / getMS10.phosphorous:
            {{ getMS10.phosphorous }} = {{ ms10LbsPerAcreApplied }}</span
          >
        </p>
        <p>
          MS10 Phsophorus: {{ getMS10.phosphorous }}
          <span>getMS10.phosphorous: {{ getMS10.phosphorous }}</span>
        </p>
        <p>Get {{ currentBlend }}: {{ getDap.phosphorous }}</p>
        <p>
          DAP Cost/Acre: {{ getDAPmapCostPerAcre }}
          <span
            >DAP getDAPmapCostPerAcre: dapCost: {{ dapCost }} + amsForDAPCost:
            {{ amsForDAPCost }} + tiger90ForDAPCost:
            {{ tiger90ForDAPCost }}</span
          >
        </p>
        <p>MS10 Cost: {{ mS10Cost }}</p>
        <p>
          Nitorgen from Phosphate: <br />
          MS10 {{ getMS10NitroFromPhosphate }} <br />
          DAP {{ getDAPNitroFromPhosphate }} <br />
          MAP {{ getMAPNitroFromPhosphate }}
        </p>

        <!-- TOTAL LBS/ACRE COLUMN K -->
        <h5 class="bkg">TOTAL LBS/ACRE COLUMN K</h5>
        <p>
          getMS10TotalLbsPerAcre: {{ getMS10TotalLbsPerAcre }} //K21
          <span
            >ms10LbsPerAcreApplied {{ ms10LbsPerAcreApplied }} +
            ureaForMS10LbsPerAcreApplied {{ ureaForMS10LbsPerAcreApplied }} =
            {{ getMS10TotalLbsPerAcre }}</span
          >
        </p>
        <p>{{ currentBlend }} + Sulfur: {{}}</p>

        <!-- LBS/ACRE APPLIED COLUMN P -->
        <h5 class="bkg">Lbs/Acre Applied : COLUMN P</h5>
        <p>
          ms10LbsPerAcreApplied: {{ ms10LbsPerAcreApplied }}
          <span
            >phosphorousOxide {{ phosphorousOxide }} / getMS10.phosphorous
            {{ getMS10.phosphorous }} =
            {{ phosphorousOxide / getMS10.phosphorous }}</span
          >
        </p>
        <p>
          dapLbsPerAcreApplied: {{ dapLbsPerAcreApplied }}
          <span
            >phosphorousOxide {{ phosphorousOxide }} / getDap.phosphorous{{
              getDap.phosphorous
            }}
            = {{ phosphorousOxide / getDap.phosphorous }}</span
          >
        </p>
        <p>
          mapLbsPerAcreApplied: {{ mapLbsPerAcreApplied }}
          <span
            >phosphorousOxide {{ phosphorousOxide }} / getMap.phosphorous
            {{ getMap.phosphorous }} =
            {{ phosphorousOxide / getMap.phosphorous }}</span
          >
        </p>
        <p>
          ureaForMS10LbsPerAcreApplied: {{ ureaForMS10LbsPerAcreApplied }}
          <span
            >getMS10NitroFromUrea {{ getMS10NitroFromUrea }} /
            getMap.phosphorous {{ getMap.phosphorous }} =
            {{ getMS10NitroFromUrea / getMap.phosphorous }}
          </span>
        </p>
        <p>
          ureaForMAPLbsPerAcreApplied: {{ ureaForMAPLbsPerAcreApplied }}
          <span
            >getMAPNitroFromUrea {{ getMAPNitroFromUrea }} / getMap.nitrogen
            {{ getMap.nitrogen }} =
            {{ getMAPNitroFromUrea / getMap.nitrogen }}</span
          >
        </p>
        <p>
          amsForDAPLbsAcreApplied: {{ amsForDAPLbsAcreApplied }}
          <span
            >S12 getDAPSulfateFromAMS: {{ getDAPSulfateFromAMS }} / E17
            getAms.nitrogen: {{ getAms.nitrogen }}</span
          >
        </p>
        <p>amsForMAPLbsAcreApplied: {{ amsForMAPLbsAcreApplied }}</p>
        <p>tiger90ForDAPLbsAcreApplied: {{ tiger90ForDAPLbsAcreApplied }}</p>
        <p>tiger90ForMAPAcreApplied: {{ tiger90ForMAPAcreApplied }}</p>

        <!-- NITROGEN FROM PHOSPHATE COLUMN Q -->
        <h5 class="bkg">Nitrogen from Phosphate : COLUMN Q</h5>
        <p>
          getMS10NitroFromPhosphate {{ getMS10NitroFromPhosphate }}
          <span
            >P11 ms10LbsPerAcreApplied: {{ ms10LbsPerAcreApplied }} * E13
            getMS10.nitrogen: {{ getMS10.nitrogen }} =
            {{ getMS10NitroFromPhosphate }}
          </span>
        </p>
        <p>getDAPNitroFromPhosphate {{ getDAPNitroFromPhosphate }}</p>
        <p>getMAPNitroFromPhosphate {{ getMAPNitroFromPhosphate }}</p>

        <!-- NITROGEN FROM UREA COLUMN R-->
        <h5 class="bkg">Nitrogen from Urea : COLUMN R</h5>
        <p>getMS10NitroFromUrea {{ getMS10NitroFromUrea }}</p>
        <p>getMAPNitroFromUrea {{ getMAPNitroFromUrea }}</p>

        <!-- SULFATE FROM AMS COLUMN S-->
        <h5 class="bkg">Sulfate from AMS : COLUMN S</h5>
        <p>getDAPSulfateFromAMS: {{ getDAPSulfateFromAMS }}</p>

        <!-- NITROGEN FROM AMS COLUMN T-->
        <h5 class="bkg">Nitrogen from AMS : COLUMN T</h5>
        <p>getDAPNitroFromAMS {{ getDAPNitroFromAMS }}</p>
        <p>getMAPNitroFromAMS {{ getMAPNitroFromAMS }}</p>
        <p>getAMSforDAPNitroFromAMS {{ getAMSforDAPNitroFromAMS }}</p>
        <p>getAMSforMAPNitroFromAMS {{ getAMSforMAPNitroFromAMS }}</p>

        <!-- ES From Tiger 90 COLUMN U-->
        <h5 class="bkg">ES From Tiger 90 : ES TIGER FROM 90</h5>
        <p></p>

        <!-- TOTAL NITROGEN COLUMN V-->
        <h5 class="bkg">Total Nitrogen : COLUMN V</h5>
        <p>
          getMS10TotalNitrogen {{ getMS10TotalNitrogen }}
          <span
            >Q11 getMS10NitroFromPhosphate: {{ getMS10NitroFromPhosphate }} +
            R11 getMS10NitroFromUrea: {{ getMS10NitroFromUrea }}
          </span>
        </p>
        <p>getDAPTotalNitrogen {{ getDAPTotalNitrogen }}</p>

        <!-- COST -->
        <h5 class="bkg">Costs : COLUMN W</h5>
        <p>
          MS10 Cost: {{ mS10Cost }}
          <span
            >ms10LbsPerAcreApplied: {{ ms10LbsPerAcreApplied }} /2000 *
            ms10PricePerTon: {{ ms10PricePerTon }} = {{ mS10Cost }}</span
          >
        </p>
        <p>
          dapCost: {{ dapCost }}
          <span
            >dapLbsPerAcreApplied {{ dapLbsPerAcreApplied }} / 2000) *
            dapPricePerTon {{ dapPricePerTon }} = {{ dapCost }}</span
          >
        </p>
        <p>
          ureaForMS10Cost: {{ ureaForMS10Cost }}
          <span>
            ureaForMS10LbsPerAcreApplied {{ ureaForMS10LbsPerAcreApplied }} /
            2000) * ureaPricePerTon {{ ureaPricePerTon }} =
            {{ ureaForMS10Cost }}</span
          >
        </p>

        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { PRODUCTS } from "~/assets/data/products";
import { CROPS } from "~/assets/data/crops";
import { CurrencyDirective } from "vue-currency-input";
import VueNumeric from 'vue-numeric';
import VueNumericInput from 'vue-numeric-input';

export default {
  directives: {
    currency: CurrencyDirective
  },
  components: {
    VueNumeric,
    VueNumericInput
  },
  data() {
    return {
      // setCrop: "Corn",
      comparisonProduct: null,
      cropPrice: 0,
      yieldAdvantage: 0, //F24 MS10 Yield Advantage
      rateOfPhosphorus: 0,
      ms10PricePerTon: 0,
      dapPricePerTon: 0,
      mapPricePerTon: 0,
      ureaPricePerTon: 0,
      amsPricePerTon: 0,
      phosphorousOxide: 0,
      sulfur: 0,
      sulfurInBlend: false,
      elementalSulfurPricePerTon: 0,
      currentBlend: "DAP",
      useUrea: true,
      precision: null,
      emptyValue: 0,
      value: null,
      money: {
        decimal: ".",
        thousands: ",",
        prefix: "$ ",
        suffix: " /Shot ton",
        precision: 2,
        masked: false
      },
      form: {
        currency: ''
      }
    };
  },
  computed: {
    crops() {
      return CROPS.map(crop => {
        return { value: crop, text: crop.name };
      });
    },
    fertilizers() {
      return PRODUCTS.fertilizers
        .filter(fertilizer => fertilizer.compare)
        .map(fertilizer => {
          return { value: fertilizer, text: fertilizer.name };
        });
    },
    sulfurs() {
      return PRODUCTS.sulfurs.map(sulfur => {
        return { value: sulfur, text: sulfur.name };
      });
    },

    // NET RETURN PER ACRE COLUMN J ROW 24
    formattedPhosphorus:{
      get () {
        return this.phosphorousOxide || 0
      },
      set (value) {
        this.phosphorousOxide = parseFloat(value) || 0
      }
    },
    netReturnPerAcre() {
      //I24
      if (this.yieldAdvantage === null || this.yieldAdvantage === 0) return 0;
      return (
        this.cropPrice * this.yieldAdvantage -
        (this.getMS10CostPerAcre - this.getDAPmapCostPerAcre)
      ).toFixed(2);

      // =IF(F24=0, 0, (I10*F24)-(J21-J22))
    },

    // MS10, DAP, MAP, UREA, AMS, ELENETAL SULFUR 90%  COLUMN D
    // FERTILIZERS / SULFURS / NITROGENS
    getMS10() {
      //D13
      return PRODUCTS.fertilizers.find(
        fertilizer => fertilizer.name === "MicroEssentials S10"
      );
    },
    //E13 getMS10.nitrogen
    //F13 getMS10.phosphorus
    //G13 getMS10.sulfate
    //H13 getMS10.elementalSulfur

    getDap() {
      //D14
      return PRODUCTS.fertilizers.find(fertilizer => fertilizer.name === "DAP");
    },
    //E14 getDap.nitrogen
    //F14 getDap.phosphorus
    //G14 getDap.sulfate
    //H14 getDap.elementalSulfur
    getMap() {
      //D15
      return PRODUCTS.fertilizers.find(fertilizer => fertilizer.name === "MAP");
    },
    //E15 getMap.nitrogen
    //F15 getMap.phosphorus
    //G15 getMap.sulfate
    //H15 getMap.elementalSulfur

    getUrea() {
      //D16
      return PRODUCTS.nitrogens.find(nitrogen => nitrogen.name === "Urea");
    },
    //E16 getUrea.nitrogen
    //F16 getUrea.phosphorus
    //G16 getUrea.sulfate
    //H16 getUrea.elementalSulfur
    getAms() {
      //D17
      return PRODUCTS.sulfurs.find(sulfur => sulfur.name === "AMS");
    },
    //E17 getAms.nitrogen
    //F17 getAms.phosphorus
    //G17 getAms.sulfate
    //H17 getAms.elementalSulfur
    getElementalSulfur() {
      return PRODUCTS.sulfurs.find(
        sulfur => sulfur.name === "Elemental Sulfur 90%"
      );
    },
    //E18 getElementalSulfur.nitrogen
    //F18 getElementalSulfur.phosphorus
    //G18 getElementalSulfur.sulfate
    //H18 getElementalSulfur.elementalSulfur

    //NITROGEN LBS/ACRE COLUMN F  ROW 21 | 22
    getMS10NitrogenLbsPerAcre() {
      //F21
      return this.getMS10TotalNitrogen;
      //V11
    },

    getDAPsulfurNitrogenLbsPerAcre() {
      //F22
      return this.getDAPTotalNitrogen;
      //=IF(I5="DAP", V12, V13)
    },
    getMAPsulfurNitrogenLbsPerAcre() {
      //F22
      return this.getMAPTotalNitrogen;
      //=IF(I5="DAP", V12, V13)
    },

    //F24 this.yieldAdvantage

    // TOTAL P205 LBS/ACRE COLUMN G ROW 21 | 22
    getMS10PhosphorusLbsPerAcre() {
      //G21
      return this.phosphorousOxide;
      //I8
    },
    getDAPPhosphorusLbsPerAcre() {
      //G22
      return this.phosphorousOxide;
      //I8
    },
    getMAPPhosphorusLbsPerAcre() {
      //G22
      return this.phosphorousOxide;
      //I8
    },

    // TOTAL SULFATE SULFUR COLUMN H ROW 21 | 22
    getMS10TotalSulfate() {
      //H21
      return this.getDAPSulfateFromAMS * this.getMS10PhosphorusLbsPerAcre;
      // P11 * G13
    },

    getDAPmapTotalSulfate() {
      //H22
      //H22
      if (!this.sulfurInBlend) return 0;
      if (this.sulfur === "DAP") {
        return this.getDAPSulfateFromAMS;
      }
      if (this.sulfur === "MAP") {
        return this.getMAPSulfateFromAMS;
      }
      // =IF(I6="Yes",IF(I5="DAP",S12,S13),0)
    },

    // TOTAL ELEMENTAL SULFUR COLUMN I ROW 21 | 22
    getMS10TotalElementalSulfur() {
      //I21
      return this.ms10LbsPerAcreApplied * this.getMS10.sulfate;
      //P11 * H13
    },
    getMAPDAPTotalElementalSulfur() {
      //I22
      if (!this.sulfurInBlend) return 0;
      if (this.sulfur === "DAP") {
        return this.getDAPesFromTiger90;
      }
      if (this.sulfur === "MAP") {
        return this.getMAPesFromTiger90;
      }
      // =IF(I6="Yes",IF(I5="DAP",U12,U13),0)
    },

    // MS10, DAP & MAP $/acre COLUMN J ROW 21 | 22
    getMS10CostPerAcre() {
      //J21
      return this.mS10Cost + this.ureaForMS10Cost;
      // W11 + W14
    },
    getDAPmapCostPerAcre() {
      //J22
      if (this.currentBlend) {
        if (this.currentBlend === "DAP") {
          return this.dapCost + this.amsForDAPCost + this.tiger90ForDAPCost;
        } else if (this.currentBlend === "MAP") {
          return (
            this.mapCost +
            this.ureaForMAPCost +
            this.amsForMAPCost +
            this.tiger90ForMAPCost
          );
        }
      } else {
        return 0;
      }
      //=IF(I5="DAP",W12+W16+W18,W13+W15+W17+W19)
    },

    // TOTAL LBS/ACRE COLUM K ROW 21 | 22
    getMS10TotalLbsPerAcre() {
      // K21
      return this.ms10LbsPerAcreApplied + this.ureaForMS10LbsPerAcreApplied;
      // P11 + P14
    },

    getDAPmapTotalLbsPerAcre() {
      if (this.currentBlend === "DAP") {
        return (
          this.dapLbsPerAcreApplied +
          this.amsForDAPLbsAcreApplied +
          this.tiger90ForDAPLbsAcreApplied
        );
      }
      // P12 + P16 + p18 +
    },

    getMAPTotalLbsPerAcre() {
      return (
        this.mapLbsPerAcreApplied +
        this.ureaForMAPLbsPerAcreApplied +
        this.amsForMAPLbsAcreApplied +
        this.tiger90ForMAPAcreApplied
      );
      // P13 + P15 + P17 + P19
    },

    // LBS/ACRE APPLIED COLUMN P ROW 11, 12, 13, 14, 15
    ms10LbsPerAcreApplied() {
      // P11
      return (this.phosphorousOxide / this.getMS10.phosphorous).toFixed(2);
      //I8/F13
    },
    dapLbsPerAcreApplied() {
      //P12
      return (this.phosphorousOxide / this.getDap.phosphorous).toFixed(2);
      //I8/F14
    },
    mapLbsPerAcreApplied() {
      //P13
      return (this.phosphorousOxide / this.getMap.phosphorous).toFixed(2);
      //I8/F15
    },
    ureaForMS10LbsPerAcreApplied() {
      //P14
      return (this.getMS10NitroFromUrea / this.getMap.phosphorous).toFixed(2);
      // R11/E16
    },
    ureaForMAPLbsPerAcreApplied() {
      //P15
      return this.getMAPNitroFromUrea / this.getMap.nitrogen;
      // R13/E16
    },

    amsForDAPLbsAcreApplied() {
      //P16
      return (this.getDAPSulfateFromAMS / this.getAms.nitrogen).toFixed(2);
      // S12/E17
    },
    amsForMAPLbsAcreApplied() {
      //P17
      return (this.getMAPSulfateFromAMS / this.getAms.nitrogen).toFixed(2);
      // S13/E17
    },
    tiger90ForDAPLbsAcreApplied() {
      //P18
      return this.getDAPesFromTiger90 / this.getElementalSulfur.elementalSulfur;
      // U12/H18
    },
    tiger90ForMAPAcreApplied() {
      //P19
      return this.getMAPesFromTiger90 / this.getElementalSulfur.elementalSulfur;
      // U13/H18
    },

    // NITROGEN FROM PHOSPHATE COLUMN Q
    getMS10NitroFromPhosphate() {
      //Q11
      if (this.ms10PricePerTon === null || this.ms10PricePerTon === 0) {
        return 0;
      } else {
        return (this.ms10LbsPerAcreApplied * this.ms10PricePerTon).toFixed(2);
      }

      //P11*E13
    },
    getDAPNitroFromPhosphate() {
      //Q12
      return (this.dapLbsPerAcreApplied * this.getDap.nitrogen).toFixed(2);
      // P12*E14
    },
    getMAPNitroFromPhosphate() {
      //Q13
      return (this.mapLbsPerAcreApplied * this.getMap.nitrogen).toFixed(2);
    },

    //  NITROGEN FROM UREA COLUMN R
    getMS10NitroFromUrea() {
      //R11
      if (!this.useUrea) {
        return 0;
      } else {
        if (this.currentBlend) {
          if (this.currentBlend === "DAP") {
            return this.getDAPTotalNitrogen - this.getMS10NitroFromPhosphate;
          } else if (this.currentBlend === "MAP") {
            return this.getMAPTotalNitrogen - getMS10NitroFromPhosphate;
          }
        }

        // =IF(I9="No",0,IF(I5="DAP",V12-Q11,V13-Q11))
      }
      return 0;
    },

    getMAPNitroFromUrea() {
      //R13
      return 0;
    },
    // SULFATE FROM AMS COLUMN S
    getDAPSulfateFromAMS() {
      //S12, S13
      if (!this.sulfurInBlend) {
        return 0;
      } else {
        if (this.sulfur) {
          if (this.sulfur === "AMS") {
            return this.getMS10TotalSulfate + this.getMS10TotalElementalSulfur;
          }
          if (this.sulfur === "90% ES") {
            return 0;
          }
        }
      }

      // =IF(I6="No", 0, IF(I7="AMS",H21+I21,IF(I7="90% ES",0,H21)))
    },

    getMAPSulfateFromAMS() {
      //S13
      if (!this.sulfurInBlend) {
        return 0;
      } else {
        if (this.sulfur) {
          if (this.sulfur === "AMS") {
            return this.getMS10TotalSulfate + this.getMS10TotalElementalSulfur;
          }
          if (this.sulfur === "90% ES") {
            return 0;
          }
          //=IF(I6="No",0, IF(I7="AMS",H21+I21,IF(I7="90% ES",0,H21)))
        }
      }
    },

    // NITROGEN FROM AMS COLUMN T ROW 12,13,16,17
    getDAPNitroFromAMS() {
      //T12
      return this.getAMSforDAPNitroFromAMS;
      // T16
    },
    getMAPNitroFromAMS() {
      //T13
      return this.getAMSforMAPNitroFromAMS;
      // T17
    },
    getAMSforDAPNitroFromAMS() {
      //T16
      return this.amsForDAPLbsAcreApplied * this.getAms.sulfate;
      // P16 * G17
    },
    getAMSforMAPNitroFromAMS() {
      //T17
      return this.amsForMAPLbsAcreApplied * this.getAms.sulfate;
      // P17 * G17
    },

    // ES FROM TIGER 90 COLUMN U
    getDAPesFromTiger90() {
      //U12
      if (!this.sulfurInBlend) {
        return 0;
      }
      if (this.sulfur === "AMS") {
        return 0;
      }
      if (this.sulfur === "90% ES") {
        return this.getMS10TotalSulfate + this.getMS10TotalElementalSulfur;
      }
      // =IF(I6="No", 0, IF(I7="AMS", 0, IF(I7="90% ES", H21+I21, I21)))
    },
    getMAPesFromTiger90() {
      //U13
      if (!this.sulfurInBlend) {
        return 0;
      }
      if (this.sulfur === "AMS") {
        return 0;
      }

      if (this.sulfur === "90% ES") {
        return this.getMS10TotalElementalSulfur;
      }
      // =IF(I6="No", 0, IF(I7="AMS", 0, IF(I7="90% ES", H21+I21, I21)))
    },

    // TOTAL NITROGEN COLUMN V

    getMS10TotalNitrogen() {
      //V11
      return this.getMS10NitroFromPhosphate + this.getMS10NitroFromUrea;
      // =Q11+R11
    },

    getDAPTotalNitrogen() {
      //V12
      return this.getDAPNitroFromPhosphate + this.getDAPNitroFromAMS;
      // Q12 + T12;
    },

    getMAPTotalNitrogen() {
      //V13
      return (
        this.getMAPNitroFromPhosphate +
        this.getMAPNitroFromUrea +
        this.getMAPNitroFromAMS
      );
      //=Q13+R13+T13
    },

    // COST COLUMN W
    mS10Cost() {
      //W11
      if (this.ms10PricePerTon === null || this.ms10PricePerTon === 0) {
        return 0;
      } else {
        return (
          (this.ms10LbsPerAcreApplied / 2000) *
          this.ms10PricePerTon
        ).toFixed(2);
      }

      // P11/2000*I13
    },

    dapCost() {
      //W12
      if (this.dapPricerPerTon === null || this.dapPricePerTon === 0) return 0;
      return ((this.dapLbsPerAcreApplied / 2000) * this.dapPricePerTon).toFixed(
        2
      );
    },

    mapCost() {
      //W13
      if (this.mapPricePerTon === null || this.mapPricePerTon === 0) return 0;
      return ((this.mapLbsPerAcreApplied / 2000) * this.mapPricePerTon).toFixed(
        2
      );
      // P13/2000*I15
    },

    ureaForMS10Cost() {
      //W14
      if (this.ureaPricePerTon === null || this.ureaPricePerTon === 0) return 0;
      return (
        (this.ureaForMS10LbsPerAcreApplied / 2000) *
        this.ureaPricePerTon
      ).toFixed(2);
      //P14/2000 * I16
    },

    ureaForMAPCost() {
      //W15
      if (this.ureaPricePerTon === null || this.ureaPricePerTon === 0) return 0;
      return (
        (this.ureaForMAPLbsPerAcreApplied / 2000) *
        this.ureaPricePerTon
      ).toFixed(2);
      //=P15/2000*I16
    },

    amsForDAPCost() {
      //W16
      if (this.amsPricePerTon === null || this.amsPricerPerTon === 0) return 0;
      return (
        (this.amsForDAPLbsAcreApplied / 2000) *
        this.amsPricePerTon
      ).toFixed(2);
      //=P16/2000*I17
    },

    amsForMAPCost() {
      //W17
      if (this.amsPricePerTon === null || this.amsPricePerTon === 0) return 0;
      return (this.amsForMAPLbsAcreApplied / 2000) * this.amsPricerPerTon;
      //=P17/2000*I17
    },

    tiger90ForDAPCost() {
      //W18
      if (
        this.elementalSulfurPricePerTon === null ||
        this.elementalSulfurPricePerTon === 0
      )
        return 0;
      return (
        (this.tiger90ForDAPLbsAcreApplied / 2000) *
        this.elementalSulfurPricePerTon
      ).toFixed(2);
      //=P18/2000*I18
    },

    tiger90ForMAPCost() {
      //W19
      if (this.rateOfPhosphorus === null || this.rateOfPhosphorus === 0)
        return 0;

      return (
        (this.tiger90ForMAPAcreApplied / 2000) *
        this.rateOfPhosphorus
      ).toFixed(2);
      //=P19/2000*I8
    },

    // MS10
    mS10phosphorousPerAcre() {}

    // LOCAL PRICES
  },
  methods: {
    setCrop(crop) {
      if (crop) {
        this.yieldAdvantage = crop.yieldAdvantage;
        this.cropPrice = crop.defaultPrice.toFixed(2);
      }
    },
    onlyForCurrency ($event) {
     // console.log($event.keyCode); //keyCodes value
     let keyCode = ($event.keyCode ? $event.keyCode : $event.which);

     // only allow number and one dot
     if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.ms10PricePerTon.indexOf('.') != -1)) { // 46 is dot
      $event.preventDefault();
     }

     // restrict to 2 decimal places
     if(this.ms10PricePerTon!=null && this.ms10PricePerTon.indexOf(".")>-1 && (this.ms10PricePerTon.split('.')[1].length > 1)){
     $event.preventDefault();
     }
   },
    currency(x) {
      return Number.parseFloat(x).toFixed(2);
    }
  },
  created() {
    if (process.client) {
      console.log("Hello from the client!");
    }
    console.log("Hello from the server... and also the client!");
  }
};
</script>

<style lang="scss" scoped>

h5 {
  text-transform: uppercase;
}

p {
  margin-bottom: 0.25rem;
}

div.container {
  text-align: left !important;
  justify-content: none;
  color: #000;
}

.custom-control.custom-radio {
  display: inline-block;
}

.card {
  margin: 2rem 0;
}

.bkg {
  background: hotpink;
}
.bg-none {
  background: none;
}
.bkg-yellow {
  background: yellow;
  padding: 0.5rem;
}
.bkg-ltblue {
  background: lightblue;
  padding: 0.5rem;
}
span {
  display: block;
  font-size: 2.35rem;
  background: lightblue;
  padding: 0.2rem 0 0 0;
}

.colored {
  color: orange;
  font-weight: bold;
}





// Styled Input



.input-group {
  ::placeholder {
    color: black;
    opacity: 1; /* Firefox */
  }
  legend {
    text-transform: uppercase;
    font-size: 1rem;
  }
  .input-group-prepend {
    font-size: 2.45rem;
      font-weight: bold;
      background: none;
      border: none;
    }
    background: none;
    .input-group-text {
      font-size: 2rem;
      font-weight: bold;
      background: none;
      border: none;
    }

  .input-group-append {
    background: none;
    position: relative;
    bottom: 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    top: 16px;
  }

  input {
    border: none;
    font-size: 2.5rem;
    font-weight: bold;
  }
}
///////////////CARD///////////////
.card {
  background: none !important;
  border: none;
}

///////////////CUSTOM CURRENCY///////////////
.currency {
  input {
    font-size: 2.5rem;
    font-weight: bold;
    border: none;
  }
}

//////BTNS UP/DOWN
.my-numeric-input.vue-numeric-input.updown button.btn-decrement {
  font-size: 10px !important;
  height: 20px !important;
  background: none !important;
}

.my-numeric-input.vue-numeric-input.updown {
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
    .my-numeric-input.vue-numeric-input.updown .numeric-input {
      padding-right: 5px !important;
      padding-left: 5px !important;
      border: none !important;
    }
    .my-numeric-input.vue-numeric-input.updown .btn {
      background: #6fbbff !important;
    }
    .my-numeric-input.vue-numeric-input.updown .btn-increment {
      height: 1.5rem;
      width: 100%;
      right: 0 !important;
      left:0 !important;
      top: 0 !important;
      bottom: auto !important;
    }
    .my-numeric-input.vue-numeric-input.updown .btn-decrement {
      height: 1.5rem;
      width: 100%;
      left: 0 !important;
      right: 0 !important;
      top: auto !important;
      bottom: 0 !important;
    }


///////////////FORM GROUP///////////////
.form-group {
  label.form-label {
    text-transform: uppercase;
    font-size: 1rem;
    display: block;
  }
  input.input-dollar-amount {
    border: none;
    font-size: 2.5rem;
    font-weight: bold;
    width: 13rem;
  }
  .input-group-text-new {
    display: inline;
    font-size: 14px;
    background: none;
    padding: 0.5rem;
    position: relative;
    left: -178px;
    text-transform: uppercase;
    border: none;
  }

  .input-group-text-prepend {
    background: none;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .input-group-text-append {
    background: none;
    position: relative;
    bottom: 0;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    top: 16px;
  }

  .input-group-dollar {
    background: none;
    font-size: 2.5rem;
    font-weight: bold;
    padding: 0;
    position: relative;
    left: 7px;
    display: inline-block;
  }
}

////////////////////NUMERIC INPUT///////////////

</style>
