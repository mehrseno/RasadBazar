<template>
  <div class="field-template">
    <div class="field">
      <div class="text-field">
        {{ item }}
      </div>
      <div class="field-template__children">
        <div class="kt-textfield">
          <input
          
            v-model="value"
            type="number"
            :placeholder="placeholder"
            id="textfield-1a5kio4"
            class="kt-textfield__input kt-textfield__input--empty"
          />
        </div>
      </div>
    </div>
    <p class="field-template__annotation">{{ annotation }}{{ after }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      annotation: "",
      value: "",
      after: "",
    };
  },
  props: {
    item: Object,
    placeholder: String,
    afterAnnotation: String,
  },
  watch: {
    value(val) {
      this.annotation = val;
      console.log(this.annotation);
      this.annotation !== "" ? (this.after = this.afterAnnotation) : (this.after = "");
      },
  },
};
</script>

<style scoped>
.field-template__annotation {
  height: 30px;
}
</style>