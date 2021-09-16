<template>
  <div class="dropdown">
    <input
    v-show="searchInput"
      ref="dropdowninput"
      v-model.trim="inputValue"
      class="dropdown-input"
      type="text"
      :placeholder="placeholder"
    />
    <div :v-show="dropdownList__display" class="dropdown-list">
      <div
        @click="selectItem(item)"
        v-show="itemVisible(item)"
        v-for="item in items"
        :key="item.name"
        class="dropdown-item"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Dropdown",
  data() {
    return {
      selectedItem: {},
      inputValue: "",
    };
  },
 
  props: {
    placeholder: String,
    dropdownList__display: Boolean,
    dropdown__display: Boolean,
    items: Array,
    searchInput:Boolean,
  },
  
  methods: {

    resetSelection() {
      this.selectedItem = {};
      this.$nextTick(() => this.$refs.dropdowninput.focus());
      this.$emit("on_item_reset");
    },
    selectItem(theItem) {
      this.selectedItem = theItem;
      this.inputValue = "";
      console.log("pp")
      console.log(theItem)
      this.$emit("on_item_selected", theItem);
    },
    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
  },
};
</script>

<style scoped>
.dropdown {
  padding-top: 4px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
}
.dropdown-input,
.dropdown-selected {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder {
  opacity: 0.7;
}
.dropdown-selected {
  font-weight: bold;

  cursor: pointer;
}
.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 400px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropdown-item {
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  padding-right: 20px;
  padding-top: 15px;
}
/* .dropdown-item:hover {
} */
.dropdown-item:hover {
  background-color: rgba(0, 0, 0, 0.07);
    color: #722c2c;

}
</style>