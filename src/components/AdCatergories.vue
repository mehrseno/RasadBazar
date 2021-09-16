<template>
  <div>
    <DataLoader
      endpoint="https://6131f906ab7b1e001799b27f.mockapi.io/Filters"
      @recieveData="getList"
    />
    <div class="kt-section-title category-selector__title">
      <div>
        <div class="kt-section-title__title-block">
          <span class="kt-section-title__title">ثبت آگهی</span>
        </div>
        <p class="kt-section-title__subtitle">دستهٔ آگهی را انتخاب کنید</p>
      </div>
    </div>
    <div class="category-selector__breadcrumb" v-if="BackLevel > 0">
      <nav aria-label="breadcrumbs">
        <ol class="kt-breadcrumbs kt-breadcrumbs--single">
          <li class="kt-breadcrumbs__item">
            <span class="category-selector__go-back kt-breadcrumbs__link"
              >بازگشت به {{ BackText }}</span
            ><i
              class="
                kt-icon kt-icon-keyboard-arrow-left
                kt-icon--xs
                kt-breadcrumbs__icon
              "
            >
            </i>
          </li>
        </ol>
      </nav>
    </div>
    <div class="category-selector__item">
      <div class="kt-selector-row">
        <div
          class="kt-base-row kt-base-row--large"
          v-for="item in items"
          :key="item.old_meta_id"
          @click="selectCategory(item.slug, item.title)"
        >
          <div class="kt-base-row__start">
            <p class="kt-selector-row__title">
              {{ item.title }}
            </p>
          </div>
          <div class="kt-base-row__end">
            <i
              class="
                kt-icon kt-icon-keyboard-arrow-left
                kt-icon--lg
                kt-base-row__arrow
              "
            ></i>
          </div>
        </div>
        <hr class="kt-divider" />
      </div>
    </div>
  </div>
</template>
<script>
import DataLoader from "../components/DataLoader.vue";
export default {
  components: { DataLoader },
  data() {
    return {
      selectedItem: "",
      allItems: {},
      currentSlug: "",
      itemList: [],
      categories: [],
      previousItems: [],
      previousBacktext: [],
      BackLevel: -1,
      items: [],
      rootArray: [],
      BackText: "همه‌دسته‌ها",
    };
  },
  mounted() {
    this.getList();
  },

  methods: {
    async getList(data) {
      this.itemList = data;
      this.categories = this.itemList[0].data[0].categories;
      this.selectCategory("root");
    },

    selectCategory(slug, title) {
      // this.rootArray.push(slug);
      this.items = this.categories.filter(function (e) {
        return e.parent_slug === slug;
      });
      if (this.items.length == 0) {
        this.$emit("ChangePage", title);
      }
      this.BackLevel++;
      if (this.BackLevel > 1) {
        this.BackText = title;
      }
      console.log(this.rootArray);
    },
    // Back() {
   
    //   this.items = this.categories.filter(function (e) {
    //     return e.parent_slug === slug;
    //   });
    
    // },
  },
};
</script>