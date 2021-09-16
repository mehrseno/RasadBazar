<template>
  <header class="header_container">
    <div class="nav-bar">
      <a href="/"
        ><img
          class="nav-bar__logo"
          alt="divar_logo"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMjUuNiA3Ni40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjUuNiA3Ni40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQzEwQzFBO30NCgkuc3Qxe2ZpbGw6IzU3NTc1Njt9DQo8L3N0eWxlPg0KPGcgaWQ9IlhNTElEXzNfIj4NCgk8ZyBpZD0iWE1MSURfN18iPg0KCQk8ZyBpZD0iWE1MSURfMjZfIj4NCgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05OS41LDYyLjNjLTEuNywwLTMuMy0xLjEtMy44LTIuOGMtMC43LTIuMSwwLjUtNC40LDIuNi01YzE4LjktNiwxOS4yLTEwLjYsMTkuMy0xMy4xDQoJCQkJYzAuMi0zLjktMi44LTguOS00LTEwLjZjLTEuMy0xLjgtMC45LTQuMywwLjktNS42YzEuOC0xLjMsNC4zLTAuOSw1LjYsMC45YzAuNiwwLjgsNiw4LjMsNS41LDE1LjhjLTAuNSw5LjEtNy41LDE0LjctMjQuOSwyMC4zDQoJCQkJQzEwMC4zLDYyLjIsOTkuOSw2Mi4zLDk5LjUsNjIuM3oiLz4NCgkJPC9nPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfOF8iPg0KCQk8ZyBpZD0iWE1MSURfMjNfIj4NCgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NS4yLDc2LjRjLTEuMiwwLTIuNC0wLjUtMy4xLTEuNWMtMS40LTEuNy0xLjEtNC4zLDAuNy01LjZjOC4yLTYuNSwxMy43LTEyLjMsMTcuMy0xNy40DQoJCQkJYy0yLTEtNC4xLTIuNS01LjItNWMtMS0yLjMtMS42LTYuMSwxLjktMTEuMmM1LTcuNCwxMC05LjEsMTEuOS05LjVjMi42LTAuNSw1LjEsMSw1LjgsMy41YzAuNSwxLjgsMS43LDcuNS0xLjksMTYuMg0KCQkJCWM0LjgtMC4xLDguNi0xLjQsMTEuNS0zLjhDODkuNywzNy42LDkwLDMwLDkwLDI5LjljMC4xLTIuMiwxLjktMy45LDQuMS0zLjljMi4yLDAuMSwzLjksMS45LDMuOSw0LjFjMCwwLjQtMC40LDExLjEtOC43LDE4LjENCgkJCQljLTUuMiw0LjQtMTIuMyw2LjMtMjAuOSw1LjZjLTQuMSw2LjMtMTAuNiwxMy43LTIwLjcsMjEuN0M0Ni45LDc2LjEsNDYuMSw3Ni40LDQ1LjIsNzYuNHogTTY2LjksMzZjLTEuMSwwLjktMi4zLDIuMi0zLjYsNC4yDQoJCQkJYy0xLjMsMi0xLjQsMy4xLTEuMywzLjRjMC4yLDAuNSwxLjIsMSwyLjIsMS40QzY2LjEsNDEuMiw2Ni43LDM4LjIsNjYuOSwzNnoiLz4NCgkJPC9nPg0KCTwvZz4NCgk8ZyBpZD0iWE1MSURfOV8iPg0KCQk8ZyBpZD0iWE1MSURfMjJfIj4NCgkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Mi4yLDU0LjljLTAuMiwwLTAuNCwwLTAuNiwwYy0yLjItMC4zLTMuNy0yLjQtMy40LTQuNmMyLjctMTcuOCwzLjYtNDYuMiwzLjYtNDYuNEM0MiwxLjcsNDMuNy0wLjEsNDYsMA0KCQkJCWMyLjIsMC4xLDMuOSwxLjksMy45LDQuMWMwLDEuMi0xLDI5LjEtMy43LDQ3LjRDNDUuOSw1My41LDQ0LjIsNTQuOSw0Mi4yLDU0Ljl6Ii8+DQoJCTwvZz4NCgk8L2c+DQoJPGcgaWQ9IlhNTElEXzExXyI+DQoJCTxnIGlkPSJYTUxJRF8yMV8iPg0KCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQsNzYuNGMtMS4yLDAtMi41LTAuNi0zLjItMS42Yy0xLjMtMS44LTAuOS00LjMsMC45LTUuNmMyMi4xLTE2LjEsMjMuMS0zNi42LDIzLjEtMzcuNA0KCQkJCWMwLjEtMi4yLDEuOS00LDQuMS0zLjljMi4yLDAuMSwzLjksMS45LDMuOSw0LjFjMCwxLTEsMjUuMi0yNi40LDQzLjdDNS42LDc2LjIsNC44LDc2LjQsNCw3Ni40eiIvPg0KCQk8L2c+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF8xM18iPg0KCQk8ZyBpZD0iWE1MSURfMjBfIj4NCgkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik03MS45LDY4Yy0yLjEsMC0zLjktMS43LTQtMy45Yy0wLjEtMi4yLDEuNi00LjEsMy44LTQuMmMwLjEsMCw2LjQtMC4zLDE1LjMtMi4yYzIuMi0wLjUsNC4zLDAuOSw0LjgsMy4xDQoJCQkJYzAuNSwyLjItMC45LDQuMy0zLjEsNC44Qzc5LjEsNjcuOCw3Mi40LDY4LDcyLjEsNjhDNzIsNjgsNzIsNjgsNzEuOSw2OHoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"
      /></a>
      <hr class="kt-divider kt-divider--padded kt-divider--vertical" />
      <button
        @click="showModal()"
        class="kt-button kt-button--inlined kt-nav-button"
        type="button"
      >
        <i class="kt-icon kt-icon-place kt-button__icon no-pointer-event"></i
        ><span
          class="kt-text-truncate no-pointer-event big_text"
          v-if="cities == ''"
          >انتخاب شهر</span
        >
        <span class="kt-text-truncate no-pointer-event big_text" v-else>{{
          cities
        }}</span>
        <span class="kt-text-truncate no-pointer-event big_text"></span>
      </button>
      <HeaderModal
        @selectedCities="selectedCities"
        v-show="isModalVisible"
        @close="closeModal"
      />
      <div class="nav-bar__end-section">
        <div
          aria-haspopup="true"
          aria-expanded="false"
          class="kt-dropdown-menu"
        >
          <button
            class="
              kt-button kt-button--inlined
              kt-nav-button
              nav-bar__btn
              kt-nav-button--small
            "
            type="button"
            tabindex="0"
          >
            <i
              class="kt-icon kt-icon-person kt-button__icon no-pointer-event"
            ></i
            ><span class="kt-text-truncate no-pointer-event">دیوار من</span>
          </button>
        </div>
        <a
          class="
            kt-button kt-button--inlined
            kt-nav-button
            nav-bar__btn
            kt-nav-button--small
          "
          role="button"
          tabindex="0"
          target="_black"
          href="https://chat.divar.ir/"
          ><i
            class="kt-icon kt-icon-chat-bubble kt-button__icon no-pointer-event"
          ></i
          ><span class="kt-text-truncate no-pointer-event">چت</span></a
        ><a
          class="
            kt-button kt-button--inlined
            kt-nav-button
            nav-bar__btn
            kt-nav-button--small
          "
          role="button"
          tabindex="0"
          rel="noopener noreferrer"
          href="https://help.divar.ir"
          ><span class="kt-text-truncate no-pointer-event">پشتیبانی</span></a
        ><button
          class="kt-button kt-button--primary kt-nav-button nav-bar__submit-btn"
          @click="Ad()"
          tabindex="0"
        >
          <span class="kt-text-truncate no-pointer-event big_text"
            >ثبت آگهی</span
          >
        </button>
    
      </div>
    </div>
  </header>
</template>
<script>
import HeaderModal from "./HeaderModal.vue";
export default {
  name: "Header",
  components: { HeaderModal },
  data() {
    return {
      isModalVisible: false,
      cities: "",
      isHomepage : false
    };
  },
  components: {
    HeaderModal,
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    Ad() {
      this.$router.push("/ad");
    },
    selectedCities(cities) {
      this.cities = cities;
    },
    
  },
};
</script>
<style scoped>
.header_container {
  width: 100%;
  position: fixed;
  z-index: 100;
}
.nav-bar {
  display: flex;
  flex-direction: row;
}

@media screen and (min-width: 1100px) {
  .ui.dropdown.mobile-menu {
    display: none;
  }
}

.kt-text-truncate {
  font-size: 0.78rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.big_text {
  font-size: 0.87rem;
}
</style>