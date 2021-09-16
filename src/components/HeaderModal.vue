<template>
  <div class="kt-dimmer kt-dimmer--darker kt-dimmer--open" role="button">
    <div class="kt-dimmer__content">
      <article
        class="
          kt-modal kt-modal--scrollable kt-modal--full-screen-md
          multi-select-modal
        "
      >
        <header class="kt-modal__header">
          <div class="kt-modal__title-box">
            <div class="kt-modal__title">انتخاب شهر</div>
          </div>
          <div class="kt-modal__subtitle-box">
            <div class="multi-select-modal__header">
              <button
                type="button"
                class="
                  kt-clear-section kt-clear-section--expanded
                  multi-select-modal__clear
                "
                @click="deleteALL()"
              >
                <span class="kt-clear-section__title">حذف همه</span>
              </button>
              <div class="multi-select-modal__chips">
                <div class="multi-select-modal__chips-wrapper">
                  <span
                    class="
                      kt-chip
                      kt-chip--rounded
                      kt-chip--primary
                      kt-chip--outlined
                      kt-chip--removable
                      multi-select-modal__chip
                    "
                    v-for="city in currentCities"
                    :key="city.name"
                    tabindex="-1"
                    >{{ city
                    }}<button
                      type="button"
                      class="
                        kt-clear-field
                        kt-clear-field--sm
                        kt-clear-field--primary
                        kt-chip__remove
                      "
                      tabindex="0"
                      @click="checked(city)"
                    >
                      <div class="kt-clear-field__button">
                        <i class="kt-icon kt-icon-remove kt-icon--xs"></i>
                      </div></button
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="kt-modal__subtitle-box">
            <div class="multi-select-modal__header">
              <div class="multi-select-modal__chips">
                <span class="kt-body kt-body--sm"
                  >حداقل یک شهر را انتخاب کنید.</span
                >
                <div class="multi-select-modal__chips-wrapper"></div>
              </div>
              <div
                class="
                  kt-textfield
                  kt-textfield--has-start-icon
                  kt-textfield--has-end-icon
                  kt-textfield--clearable
                "
              >
                <input
                  type="text"
                  placeholder="جستجو در شهرها"
                  id="textfield-28cble"
                  class="kt-textfield__input kt-textfield__input--empty"
                  value=""
                />
                <div class="kt-textfield__start-icon">
                  <i class="kt-icon kt-icon-search-o kt-icon--lg"></i>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="kt-modal__contents">
          <div class="kt-modal__body kt-modal__body--actionable">
            <div class="multi-select-modal__list">
              <div
                class="kt-selector-row kt-selector-row--selectable"
                tabindex="0"
                role="button"
                v-show="!isProvince"
                @click="backProvince()"
              >
                <div
                  class="kt-base-row kt-base-row--large kt-base-row--has-icon"
                >
                  <div class="kt-base-row__start">
                    <i
                      class="
                        kt-icon kt-icon-arrow-backward-large-o
                        kt-icon--lg
                        kt-base-row__icon
                      "
                    ></i>
                    <p class="kt-selector-row__title">همهٔ شهرها</p>
                  </div>
                  <div class="kt-base-row__end"></div>
                </div>
              </div>

              <div
                class="kt-selector-row kt-selector-row--selectable"
                tabindex="0"
                role="button"
              >
                <div
                  class="kt-base-row kt-base-row--large"
                  v-for="item in citiesList"
                  :key="item.name"
                >
                  <div
                    class="kt-base-row__start"
                    v-on:click="pageLevel < 1 ? provinceSelect(item.name) : ''"
                  >
                    <p class="kt-selector-row__title">{{ item.name }}</p>
                  </div>

                  <div class="kt-base-row__end" v-if="!isProvince">
                    <div
                      class="
                        kt-control-row__checkbox
                        kt-switch kt-switch--large
                      "
                      :class="
                        currentCities.includes(item.name) ? checkedClass : ''
                      "
                      @click="checked(item.name)"
                    >
                      <div
                        class="kt-switch__cell"
                        role="checkbox"
                        aria-checked="false"
                        tabindex="0"
                      >
                        <input
                          class="kt-switch__input"
                          type="checkbox"
                          tabindex="-1"
                          value="891"
                        />
                        <div
                          class="kt-switch__button kt-switch__button--checkbox"
                        ></div>

                        <div class="kt-switch__icon">
                          <svg class="kt-switch__icon-svg">
                            <polyline
                              transform="translate(5.974874, 2.353553) rotate(-45.000000) translate(-5.974874, -2.353553) "
                              points="2 0.292893219 2 4.29289322 9.94974747 4.41421356"
                              class="kt-switch__icon-check"
                            ></polyline>

                            <line
                              x1="1.03268998"
                              y1="4"
                              x2="11.0000728"
                              y2="4"
                              id="checkbox_check"
                              stroke="#FFFFFF"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="kt-switch__icon-line"
                            ></line>
                          </svg>
                        </div>

                        <div class="kt-switch__rippler">
                          <div class="kt-switch__ripple"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="kt-base-row__end" v-else>
                    <i
                      class="
                        kt-icon kt-icon-keyboard-arrow-left
                        kt-icon--lg
                        kt-base-row__arrow
                      "
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="kt-modal__actions">
            <div
              class="
                kt-button-row
                multi-select-modal__actions
                kt-button-row--fullwidth
              "
            >
              <button
                @click="close"
                class="kt-button kt-button--outlined"
                type="button"
                tabindex="0"
              >
                <span class="kt-text-truncate no-pointer-event">انصراف</span>
              </button>

              <button
                @click="selectedCities()"
                class="kt-button kt-button--outlined"
                type="button"
                tabindex="0"
              >
                <span class="kt-text-truncate no-pointer-event">تایید</span>
              </button>
            </div>
          </footer>
        </div>
        -->

        <!-- <SelectableTable
        :itemList="citiesList"
         /> -->
      </article>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SelectableTable from "./AdCatergories.vue";

export default {
  components: { SelectableTable },
  data() {
    return {
      apiUrl: "https://6131f906ab7b1e001799b27f.mockapi.io/provinces",
      citiesList: [],
      isProvince: true,
      selectedProvince: "",
      data: [],
      currentSelections: null,
      currentCities: [],
      checkedClass: "kt-switch--checked",
      allSelected: false,
      allObj: { name: "همه‌ی شهرهای " },
      allCities: {},
      pageLevel: 0,
    };
  },

  mounted() {
    this.getList();
  },
  watch: {
    // currentCity: {
    //   handler() {
    //     this.currentSelections = this.currentCity
    //       .filter((itm) => itm.selected)
    //       .map((itm) => itm.name)
    //       .toString();
    //     console.log(this.currentSelections);
    //   },
    //   deep: true,
    // },
  },
  methods: {
    checked(object) {
      console.log(object);
      if (this.allCities.name === object) {
        this.allSelected = !this.allSelected;
        if (this.allSelected == false) {
          while (this.currentCities.length > 0) {
            this.currentCities.pop();
          }
        } else {
          for (var city in this.citiesList) {
            if (!this.currentCities.includes(this.citiesList[city].name)) {
              this.currentCities.push(this.citiesList[city].name);
            }
          }
        }
      } else {
        if (this.currentCities.includes(object)) {
          const index = this.currentCities.indexOf(object);
          if (index > -1) {
            this.currentCities.splice(index, 1);
            this.currentCities.splice(0, 1);
          }
        } else {
          this.currentCities.push(object);
        }
      }
    },
    deleteALL() {
      this.currentCities = [];
    },
    backProvince() {
      this.pageLevel--;
      this.isProvince = true;
      this.citiesList = this.data;
    },
    close() {
      this.$emit("close");
    },
    provinceSelect(province) {
      this.pageLevel++;
      this.isProvince = false;
      this.selectedProvince = province;
      this.allCities = Object.assign({}, this.allObj);
      this.allCities.name += province.toString();
      this.citiesList = this.citiesList
        .find((obj) => obj.name === this.selectedProvince)
        .cities.slice();
      this.citiesList.unshift(this.allCities);
    },

    async getList() {
      await axios
        .get(
          this.apiUrl,
          { crossDomain: true },
          { headers: { "Access-Control-Allow-Origin": "*" } }
        )
        .then((response) => {
          this.data = response.data.slice();
          this.citiesList = this.data.slice();
        });
    },
    selectedCities() {
      if (this.currentCities.length > 0) {
        this.$emit(
          "selectedCities",
          this.currentCities.length == 1
            ? this.currentCities[0]
            : this.currentCities.length + "شهر"
        );
      }
      this.close();
    },
  },
};
</script>

<style scoped>
.kt-selector-row__title {
  /* background-color: blue; */
}
</style>