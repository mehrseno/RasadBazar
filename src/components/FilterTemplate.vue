<template>
  <div class="field-template">
    <div class="field">
      <div class="text-field">{{ FilterHeader }}</div>
      <div class="field-template__children">
        <div role="button" tabindex="0" class="kt-select">
          <button
            type="button"
            class="
              kt-clear-field kt-clear-field--md kt-clear-field--dark
              kt-select__clear
            "
            tabindex="-1"
            aria-label="Clear"
          >
            <div class="kt-clear-field__button">
              <i class="kt-icon kt-icon-remove kt-icon--xs"></i>
            </div></button
          ><input
            class="kt-select__input input-and-label"
            id="root_rent_credit_transform"
            tabindex="-1"
            aria-hidden="true"
          />
          <span
            v-if="Object.keys(selectedItem).length === 0"
            class="
              kt-select__field-label
              input-and-label
              kt-select__field-label--placeholder-shown
            "
            >انتخاب ...</span
          >
          <span
            v-else
            class="
              kt-select__field-label
              input-and-label
              kt-select__field-label--placeholder-shown
            "
          >
            {{ selectedItem.name }}
          </span>
          <div class="kt-select__arrow-block">
            <i
              @click="changeDrop()"
              class="
                kt-icon kt-icon-keyboard-arrow-down-o
                kt-icon--lg
                kt-select__arrow
              "
            ></i>
          </div>
        </div>
        <Dropdown
          v-show="dropdown__display"
          :items="items"
          :searchInput="searchInput"
          :placeholder="placeholder"
          v-on:on_item_selected="selectItem"
        />
      </div>
    </div>
  </div>

  <!-- <Dropdown
    v-show="dropdown__display"
    :items="p"
    :searchInput="true"
    :placeholder="'جستجو'"
    v-on:on_item_selected="selectItem"
  /> -->
</template>

<script>
import Dropdown from "../components/Dropdown.vue";

export default {
  components: { Dropdown },
  props: {
    placeholder: String,
    items: Array,
    searchInput: Boolean,
    FilterHeader: String,
  },
  data() {
    return {
      dropdown__display: false,
      dropdownList__display: true,
      selectedItem: {},
      inputValue: "",
      itemList: [],
      apiLoaded: false,
      filters: [],
      apiUrl: "https://6131f906ab7b1e001799b27f.mockapi.io/Filters",
      p: [],
      selectedItem: {},
    };
  },
  methods: {
    changeDrop() {
      this.dropdown__display = !this.dropdown__display;
    },
    selectItem(value) {
      this.selectedItem = value;
      this.dropdown__display = !this.dropdown__display;
    },
  },
};
</script>