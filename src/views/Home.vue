<template>
  <div class="ui fluid container">
    <div class="ui padded grid home">
      <div class="row">
        <div class="col1 column description-container">
          <div class="background-maker"></div>
          <div class="description">
            <p>دیوار! پایگاه خرید و فروش بی‌واسطه‌</p>
            <p>
              اگه دنبال چیزی هستی، شهرت رو انتخاب کن&nbsp;و تو دسته‌بندی‌ها به
              دنبالش بگرد.
            </p>
            <p>
              اگر هم می‌خوای چیزی بفروشی، چند تا عکس خوب ازش بگیر و آگهیت رو
              بچسبون به دیوار.
            </p>
            <p>
              علاوه بر وبسایت، می‌تونی از&nbsp;دیوار روی
              <a href="http://cafebazaar.ir/app/?id=ir.divar"
                >دستگاه‌های اندرویدی</a
              >،
              <a href="https://itunes.apple.com/us/app/dywar/id863029557"
                >آیفون</a
              >
              و
              <a href="https://itunes.apple.com/us/app/dywar/id863029557"
                >آیپد</a
              >&nbsp;هم استفاده کنی.
            </p>
          </div>
          <div class="enamad">
            <a
              href="https://trustseal.enamad.ir/?id=45797&amp;code=Ixo2TT4kdIkKs7d65xyM"
              class="enamad__box"
              target="_blank"
              referrerpolicy="origin"
              rel="noopener"
              ><img
              src="../images/namad.png"
                class="enamad__image"
                id="Ixo2TT4kdIkKs7d65xyM"
                decoding="async"
                alt=""
                referrerpolicy="origin" /></a
            ><img
              id="jxlznbqesizpoeukjzpejxlz"
              src="../images/samandehi.png"
              class="enamad__box"
              alt="samandehi logo"
            /><a
              href="https://ecunion.ir/verify/divar.ir?token=44770755b49ddd059bcd"
              class="enamad__box"
              target="_blank"
              referrerpolicy="origin"
              rel="noopener"
              ><img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAACCCAMAAAC6s/yfAAAF+WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDctMTVUMTQ6MTA6MjArMDQ6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDctMTVUMTQ6MTA6MjArMDQ6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA3LTE1VDE0OjEwOjIwKzA0OjMwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmE4NzZmZTFhLTAyYjgtNDUyYi04MGZiLTJiYjg5Y2Y4MGZkZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM3M2YwNWM3LTA2NDctN2Q0Yy1iNmQ5LTEzZWM1N2U5YTIwMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmE2NDEwMmU5LWY5ZmMtNDBjMy05ZGQ4LTFjZDU1ZGU3MTMyOSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IFAzIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNjQxMDJlOS1mOWZjLTQwYzMtOWRkOC0xY2Q1NWRlNzEzMjkiIHN0RXZ0OndoZW49IjIwMjAtMDctMTVUMTQ6MTA6MjArMDQ6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphODc2ZmUxYS0wMmI4LTQ1MmItODBmYi0yYmI4OWNmODBmZGUiIHN0RXZ0OndoZW49IjIwMjAtMDctMTVUMTQ6MTA6MjArMDQ6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PigSufsAAAAJcEhZcwAALiMAAC4jAXilP3YAAAMAUExURUdwTCkpUE2r6CYmTU+w8yIiQEmh6kyo7E2q6U2r6U2r6U+v8CcnTCoqUSUlRikjRCoqUXiQoVG28Y94bF1RVyUlSy8sSioqUCYmT11QRioqUCcnTicnTk+m5igoUCkpUSYmSygoTx8fRk6s6ioqUCgoUCoqUSIiSCYmTU2q6Uyu7SwsUykpUSkpUCoqUScnUE+v60yq6U+x7E2t7k2n6ioqUCsrUk2r6ScnTykpUCsrUk6s6ikpUlCy6k2r6CkpUE+v6U6t6U6t7SkpUI97c06x71G68U2r6k2q6SkpTkup6ykpUE2r6U2r6E2q6FCx7k6u7Eyq6Eyr61Cz802m2Uyq6Eyq6FG69k+v6kyq6lC6/pGEe0/G/VCy8y0tVVK/90+++lLA/01yhDMzXCoqUZh1Zk2t71Cz8Wg1ImZGOEeSt1KhzG6MnFGaw06r5lK16SkpT6RwWZN0a5h4ap91XmVKP2KUsE6IpYSBgZF9c4qGhlbA8Zh1ZU+x72JIPmM5NE44MFFlbkOV6Jh4aVpVVGJDN19GN245JllAMG01IDs4UU19lZO6zisrWIt/fGI/L1xHOVxPSWFLQ2SBiazDzWFrdC0tU6VmT11LQ1ZdYmZVT35UQ1hZW////02r6oCChYCChE6s6oGChVhYWk2q6k6t7Eyr7FdbXlpbXH+Dh4SGiICBhIKEhoKBg0un6E2q51dWV1hZXP3+/j9AQUyp6U2s6np7fjya5VxdX25vc3V2eU+v6kGd5szMzWxtcE2s6E21/X2DiGlrb0Og6ERERjk6PJucnUpLTWNlaF9fYVTA/0ek6PT8/lReY+Hh4oGDhmZobJV5bU6v8IiJi/b29trZ2by8vnFzdXmFjDEyNVJSVGJEOE6y9V1PS2BKQvDw8Ojo6Yt/fXvB705PUvz7+mm57uj3/MbFxaSlpqytrlK7+9Xt+9LS0ofI8ZaWmLO1t46QktXV1lK29JfP87De+KLX9luw68no+b7i99/z+0VGSYRxZ0VNU3VnY2p0fCYmKMfulyAAAAD+dFJOUwCxTj2cAxAi0Wyt9jbEBhW+K6TPIi4QyirNtyRKBGBFHlYL6JdQpRlo4B2fXJCrgys9SDQHe4v4bM9zyGaDn9S1p5Dg/hkLiL7afOjuFJfU8XRWw/5p8j9cY2oYJLC8XEyJ/WTymK3eb7D+/v7+/WP8UTq0ftP9/uzgMnXXouAk/v1NbeqXNFAtk9r9/vbPhUzU7a7+/duoQvjBqf/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+WO5qawAAEMNJREFUaN7smVtMG2cWx0coIiR9WCVdVeoDT34yT+Ei8WCBMOKmiJCEBAJNo6aVttkmTaK9tFE3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"
                class="enamad__image"
                decoding="async"
                alt="ecunion logo"
            /></a>
          </div>
          <div class="social-network">
            <div class="social-network__header">
              <h1 class="social-network__title">دیوار</h1>
              را در شبکه‌های اجتماعی دنبال کنید:
            </div>
            <a
              href="https://twitter.com/divar_official"
              class="social-network__link"
              title="دیوار در توییتر"
              aria-label="دیوار در توییتر"
              ><i class="kt-icon kt-icon-social-twitter"></i></a
            ><a
              href="https://www.instagram.com/divar.official"
              class="social-network__link"
              title="دیوار در اینستاگرام"
              aria-label="دیوار در اینستاگرام"
              ><i class="kt-icon kt-icon-social-instagram"></i></a
            ><a
              href="https://www.linkedin.com/company/divarofficial"
              class="social-network__link"
              title="دیوار در لینکداین"
              aria-label="دیوار در لینکداین"
              ><i class="kt-icon kt-icon-social-linkedin"></i></a
            ><a
              href="https://www.aparat.com/divar.official"
              class="social-network__link"
              title="دیوار در آپارات"
              aria-label="دیوار در آپارات"
              ><i class="kt-icon kt-icon-social-aparat"></i
            ></a>
          </div>
        </div>
        <div
          class="
            col2
            twelve
            wide
            computer
            eight
            wide
            large
            screen
            twelve
            wide
            tablet
            eight
            wide
            widescreen
            column
            city-home-container
          "
        >
          <div class="computer city-home col3">
            <div class="ui fluid left icon input">
              <input
                ref="dropdowninput"
                v-model.trim="inputValue"
                type="text"
                placeholder="جست‌و‌جوی سریع نام شهر..."
                @input="search"
                class="filter_city"
              /><i aria-hidden="true" class="search icon"></i>
            </div>

            <div class="city-group" v-if="s">
              <div class="ui doubling five cards">
                <div
                  class="ui card city-group__button"
                  v-show="itemVisible(item)"
                  v-for="item in citiesList"
                  :key="item.name"
                >
                  <a
                    class="kt-button kt-button--primary kt-button--outlined"
                    role="button"
                    tabindex="0"
                    href="/s/rasht"
                    ><span class="kt-text-truncate no-pointer-event"
                      ><h2>{{ item.name }}</h2></span
                    ></a
                  >
                </div>
              </div>
            </div>

            <div v-else>
              <div>
                <div class="city-group">
                  <div class="city-group__header">شهرهای پربازدید</div>
                  <div class="ui doubling five cards">
                    <div
                      class="ui card city-group__button"
                      v-for="city in mostVisited_citiesList"
                      :key="city.name"
                    >
                      <a
                        class="kt-button kt-button--primary kt-button--outlined"
                        role="button"
                        tabindex="0"
                        href="/s/rasht"
                        ><span class="kt-text-truncate no-pointer-event"
                          ><h2>{{ city.name }}</h2></span
                        ></a
                      >
                    </div>
                  </div>
                </div>
                <div class="city-group">
                  <div class="city-group__header">همهٔ شهرها</div>
                  <div class="ui doubling five cards">
                    <div
                      class="ui card city-group__button"
                      v-for="city in citiesList"
                      :key="city.name"
                    >
                      <a
                        class="kt-button kt-button--primary kt-button--outlined"
                        role="button"
                        tabindex="0"
                        href="/s/zahedan"
                        ><span class="kt-text-truncate no-pointer-event"
                          ><h2>{{ city.name }}</h2></span
                        ></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <data-loader endpoint= "https://6131f906ab7b1e001799b27f.mockapi.io/cities"  @recieveData="getData">
            <div class="mobile city-home col4">
              <div
                role="combobox"
                class="ui fluid search selection dropdown city-dropdown"
              >
                <input
                  type="text"
                  aria-autocomplete="list"
                  autocomplete="off"
                  class="search"
                  tabindex="0"
                  value=""
                />
                <div class="default text" role="alert" aria-live="polite">
                  انتخاب شهر...
                </div>
                <i aria-hidden="true" class="dropdown icon">\</i>
                <div role="listbox" class="menu transition">
                  <div class="message">گزینه‌ای نیست</div>
                </div>
              </div>
            </div>
          </data-loader>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataLoader from "../components/DataLoader.vue";

export default {
  name: "Home",
  components: { DataLoader },
  data() {
    return {
      citiesList: [],
      mostVisited_citiesList: [],
      data: [],
      selectedCity: {},
      searchInput: "",
      s: false,
      inputValue: "",
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData(data) {
      this.citiesList = data.slice();
      this.mostVisited_citiesList = this.citiesList
        .slice()
        .sort((a, b) => {
          return a.visitedNumber > b.visitedNumber ? -1 : 1;
        })
        .slice(0, 10);
    },

    itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.startsWith(currentInput);
    },
    search() {
      this.s = true;
      var value = document.querySelector(".filter_city").value;
      if (value.length === 0) {
        this.s = false;
      }
    },
  },
};
</script>
<style scoped>
.ppp {
  display: none;
  background-color: blue;
}
.ui.fluid.container {
  width: 100%;
}
.ui.container {
  /* margin-top:100px ; */
  background-color: white;
}
/* @media only screen and (max-width: 767px) {
  .ui.container,
  .ui.grid.container,
  .ui.relaxed.grid.container,
  .ui.very.relaxed.grid.container {
    width: auto !important;
    background-color: salmon;
  }
} */
@media only screen and (max-width: 767px) {
  .ui.container {
    margin-left: 1em !important;
    margin-right: 1em !important;
    /* backgro/und-color: palegreen; */
  }
}
/* ------------------------------- */

@media (max-width: 1221px) {
  .home {
    padding: 0 !important;
    /* background-color: royalblue; */
  }
}

@media (max-width: 767px) {
  .home .description-container .description {
    text-align: center !important;
  }
}
@media (max-width: 500px) {
  .home .description-container .description {
    text-align: right !important;
    padding: 0 20px !important;
  }
}
@media (max-width: 500px) {
  .home .description-container .description {
    text-align: right !important;
    padding: 0 20px !important;
  }
}
@media screen and (max-width: 768px) {
  .kt-body,
  .kt-description-row__text,
  .kt-tab--small .kt-tab__title,
  .kt-tab__title,
  p {
    font-size: 0.875rem;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.column.grid > [class*="twelve wide tablet"].column,
  .ui.grid > .column.row > [class*="twelve wide tablet"].column,
  .ui.grid > .row > [class*="twelve wide tablet"].column,
  .ui.grid > [class*="twelve wide tablet"].column {
    width: 100% !important;
  }
}
@media only screen and (max-width: 767px) {
  .ui.container,
  .ui.grid.container,
  .ui.relaxed.grid.container,
  .ui.very.relaxed.grid.container {
    width: auto !important;
  }
}
@media only screen and (max-width: 767px) {
  .ui.container {
    margin-left: 1em !important;
    margin-right: 1em !important;
  }
}
@media (max-width: 500px) {
  .home {
    padding: 0 !important;
  }
}
@media (max-width: 500px) {
  .home > .row {
    flex-direction: column !important;
  }
}

@media (max-width: 500px) {
  .home .description-container {
    margin-top: 70px !important;
    padding-top: 80px !important;
  }
}

@media (max-width: 767px) {
  .home .description-container {
    padding: 20px 0 0 !important;
  }
}

@media (max-width: 500px) {
  .home .description-container .description {
    text-align: right !important;
    padding: 0 20px !important;
  }
}
/* @media (max-width: 1100px){
.home .description-container .background-maker, .home .description-container .enamad {
    display: none!important;
}} */
@media screen and (max-width: 768px) {
  .kt-hero,
  .text-regular.kt-hero,
  h1,
  h1.text-regular,
  h2,
  h2.text-regular {
    font-weight: 500;
  }
}
@media (max-width: 500px) {
  .city-home.computer,
  .city-modal.computer {
    display: none !important;
  }
}

/* .city-home.mobile{
  visibility: visible;
} */

.kt-body,
.kt-description-row__text,
.kt-tab--small .kt-tab__title,
.kt-tab__title,
p {
  font-size: 1rem;
  font-weight: 400;
}

.social-network__title {
  display: inline;
  font-size: 1rem;
}
.kt-hero,
h1,
h2 {
  font-size: 5rem;
  font-weight: 400;
  line-height: 1.5;
}
.social-network__link {
  width: 30px;
  height: 30px;
  background-color: #a62626;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  margin: 0px 4px;
}

.kt-icon {
  /* background-color: yellow; */
  width: 20px;
  height: 20px;
}
/* @media only screen and (min-width: 1100px) and (max-width: 1919px){
.ui.column.grid>[class*="eight wide large screen"].column, .ui.grid>.column.row>[class*="eight wide large screen"].column, .ui.grid>.row>[class*="eight wide large screen"].column, .ui.grid>[class*="eight wide large screen"].column {
    width: 66.66666667%!important;
    background-color: brown!important;
}} */

.home .city-home-container {
  padding: 35px 100px !important;
  background-color: white !important;
}
.city-home.computer,
.city-modal.computer {
  display: block !important;
  margin-top: 10px !important;
}
.ui.fluid.input {
  display: flex;
}
.ui.input {
  font-size: 1em;
}
.ui.input {
  position: relative;
  font-weight: 400;
  font-style: normal;
  /* display: inline-flex; */
  color: rgba(0, 0, 0, 0.87);
}
.ui.fluid.input > input {
  width: 0 !important;
}
.ui[class*="left icon"].input > input {
  padding-left: 2.67142857em !important;
  padding-right: 1em !important;
}
.ui.input input {
  margin: 0;
  max-width: 100%;
  flex: 1 0 auto;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  text-align: left;
  line-height: 1.21428571em;
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  padding: 0.67857143em 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 3px;
  transition: box-shadow 0.1s ease, border-color 0.1s ease;
  box-shadow: none;
}
input[type="email"],
input[type="password"],
input[type="search"],
input[type="text"] {
  -webkit-appearance: none;
  /* -moz-appearance: none; */
}
.input > input {
  text-align: right !important;
}
input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  /* color: -internal-light-dark(black, white); */
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;
  /* margin: 0em; */
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  /* border-style: inset; */
  /* border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133)); */
  /* border-image: initial; */
}
input::selection,
textarea::selection {
  background-color: hsla(0, 0%, 39.2%, 0.4);
  color: rgba(0, 0, 0, 0.87);
}
input::selection,
textarea::selection {
  background-color: hsla(0, 0%, 39.2%, 0.4);
  color: rgba(0, 0, 0, 0.87);
}
.ui.icon.input > i.icon:not(.link) {
  pointer-events: none;
}
.ui[class*="left icon"].input > i.icon {
  right: auto;
  left: 1px;
  border-radius: 3px 0 0 3px;
}
.ui.icon.input > i.icon {
  cursor: default;
  position: absolute;
  line-height: 1;
  text-align: center;
  top: 0;
  /* right: 0; */
  margin: 0;
  height: 100%;
  width: 2.67142857em;
  opacity: 0.5;
  /* border-radius: 0 3px 3px 0; */
  transition: opacity 0.3s ease;
}
i.icon,
i.icons {
  font-size: 1em;
}
i.icon {
  display: inline-block;
  /* opacity: 1; */
  /* margin: 0 .21875rem 0 0; */
  /* width: 1.18em; */
  /* height: 1em; */
  font-family: Icons;
  font-style: normal;
  font-weight: 400;
  text-decoration: inherit;
  /* text-align: center; */
  speak: none;
  /* font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  -webkit-font-smoothing: antialiased;
  /* -webkit-backface-visibility: hidden; */
  /* backface-visibility: hidden; */
}
.ui.icon.input > i.icon:after,
.ui.icon.input > i.icon:before {
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  margin-top: -0.5em;
}
i.icon.search:before {
  content: "\f002";
}
i.icon:before {
  background: 0 0 !important;
}
.ui.icon.input > i.icon:after,
.ui.icon.input > i.icon:before {
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  margin-top: -0.5em;
}
.ui.icon.input > i.icon:after,
.ui.icon.input > i.icon:before {
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  margin-top: -0.5em;
}
.city-group {
  margin: 20px 0 50px;
  background-color: white;
  width: 100% !important;
}

.city-group__header {
  margin-bottom: 20px;
  color: #424242;
}

.home .city-home .cards {
  min-height: auto !important;
  max-height: none !important;
  overflow: visible;
}
.ui.cards {
  display: flex;
  flex-direction: row;
  /* column-gap: 15px; */
  margin: -0.875em -0.5em;
  flex-wrap: wrap;
  /* justify-content:space-between; */
}
.city-home .cards,
.city-modal .cards {
  align-content: flex-start !important;
}

.ui.card:after,
.ui.cards:after {
  display: block;
  content: " ";
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.ui.five.cards > .card {
  /* width: calc(20% - 80rem); */
  margin-left: 0.75em;
  margin-right: 0.75em;
}
.ui.cards > .card {
  font-size: 1em;
}
.ui.cards > .card {
  display: flex;
  margin: 0.875em 0.5em;
  float: none;
}
/* .ui.card>.card{
  background-color: blue!important;
  max-width: 10px!important;
} */
.ui.card,
.ui.cards > .card {
  max-width: 100%;
  position: relative;
  /* display: flex; */
  flex-direction: column;
  /* width: 290px; */
  min-height: 0;
  /* background: #fff; */
  padding: 0;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 transparent;
  /* transition: box-shadow .1s ease,-webkit-transform .1s ease; */
  /* transition: box-shadow .1s ease,transform .1s ease; */
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-transform 0.1s ease;
  /* z-index: ""; */
}

.city-group__button {
  border-top: 1px solid rgba(166, 38, 38, 0.56) !important;
}

.ui.card > :only-child,
.ui.cards > .card > :only-child {
  border-radius: 3px !important;
}

.ui.card > :first-child,
.ui.cards > .card > :first-child {
  /* border-radius: 3px 3px 0 0!important; */
  border-top: none !important;
}
.ui.card a,
.ui.cards > .card a {
  cursor: pointer;
}
.kt-button--outlined.kt-button--primary {
  border-color: rgba(166, 38, 38, 0.56);
}
.kt-button--inlined.kt-button--primary,
.kt-button--outlined.kt-button--primary {
  color: #a62626;
  background-color: transparent;
}
.kt-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  /* cursor: pointer; */
  /* color: #fff; */
  overflow: hidden;
  /* transition: color .36s ease,background-color .36s ease,box-shadow .36s ease,border-color .36s ease,-webkit-transform .36s ease; */
  /* transition: color .36s ease,background-color .36s ease,box-shadow .36s ease,border-color .36s ease,transform .36s ease; */
  transition: color 0.36s ease, background-color 0.36s ease,
    box-shadow 0.36s ease, border-color 0.36s ease, transform 0.36s ease,
    -webkit-transform 0.36s ease;
  font-weight: 500;
  /* background-color:yellow!important; */
  /* position: relative; */
  height: 2.5rem;
  padding: 0 16px;
  /* border-radius: 4px; */
  min-width: 6rem;
  /* max-width: 10rem; */
  font-size: 1rem;
  line-height: normal;
  /* gap: 5px!important; */
}
@media screen and (max-width: 1100px) {
  /* .ui.five.cards>.card { */
  /* width: 1700px; */
  /* width: calc(50%-50px); */
  /* margin-left: .75em;
    margin-right: .75em; */
  /* } */
  .kt-button {
    /* background-color: darkorchid!important; */
  }
  .ui.grid > .row {
    flex-direction: column;
    /* width: 100%; */
  }

  .home .description-container {
    width: 1000px !important;
  }
  .ui.grid > .row > .column {
    width: 100% !important;
  }
}
a {
  text-decoration: none;
}
.kt-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-pointer-event {
  pointer-events: none;
}
.ui.card a,
.ui.cards > .card a {
  cursor: pointer;
}
.kt-button--inlined.kt-button--primary,
.kt-button--outlined.kt-button--primary {
  color: #a62626 !important;
  /* background-color: transparent; */
}
.kt-button--outlined.kt-button--primary {
  color: #a62626;
  background-color: transparent;
}

.ui.card > :first-child,
.ui.cards > .card > :first-child {
  /* border-radius: 3px 3px 0 0!important; */
  border-top: none !important;
}
.ui.card:after,
.ui.cards:after {
  display: block;
  content: " ";
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.city-group {
  margin: 20px 0 50px;
}
.city-group__header {
  margin-bottom: 20px;
  color: #424242;
}
/* .ui.five.cards {
    margin-left: -.75em;
    margin-right: -.75em;
} */
.home .city-home .cards {
  min-height: auto !important;
  max-height: none !important;
  overflow: visible;
}
.ui.cards {
  display: flex;
  margin: -0.875em -0.5em;
  flex-wrap: wrap;
  /* background-color: springgreen!important; */
}
.city-home .cards,
.city-modal .cards {
  align-content: flex-start !important;
}
.ui.card:after,
.ui.cards:after {
  display: block;
  content: " ";
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden;
}
.ui.five.cards > .card {
  /* width: calc(20% - 1.5em); */
  /* margin-left: .75em;
    margin-right: .75em; */
}
.ui.cards > .card {
  display: flex;
  margin: 0.875em 0.5em;
  float: none;
}
.ui.card,
.ui.cards > .card {
  max-width: 100%;
  position: relative;
  /* display: flex; */
  flex-direction: column;
  /* width: 290px; */
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-transform 0.1s ease;
}
.ui.card > :first-child,
.ui.cards > .card > :first-child {
  border-top: none !important;
}
.ui.card a,
.ui.cards > .card a {
  cursor: pointer;
}
.kt-button--outlined.kt-button--primary {
  border-color: rgba(166, 38, 38, 0.56);
}
.kt-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-pointer-event {
  pointer-events: none;
}

.city-dropdown.ui.selection.dropdown {
  display: flex;
  align-items: center;
}
.ui.fluid.dropdown {
  /* display: block; */
  width: 100%;
  min-width: 0;
}
.ui.selection.dropdown {
  cursor: pointer;
  word-wrap: break-word;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  /* -webkit-transform: rotate(0); */
  transform: rotate(0);
  /* min-width: 14em; */
  min-height: 2.71428571em;
  background: #fff;
  /* display: inline-block; */
  padding: 0.78571429em 2.1em 0.78571429em 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  transition: box-shadow 0.1s ease, width 0.1s ease;
}
.ui.search {
  font-size: 1em;
}
.col2 {
  width: 67% !important;
}
.col1 {
  width: 33% !important;
}
.ui.dropdown {
  /* cursor: pointer; */
  /* position: relative; */
  /* display: inline-block; */
  /* outline: 0; */
  text-align: left;
  /* transition: box-shadow .1s ease,width .1s ease; */
  -webkit-tap-highlight-color: transparent;
}
.city-dropdown {
  height: 38px;
}
.ui.search.selection.dropdown > input.search,
.ui.search.selection.dropdown > span.sizer {
  line-height: 1.21428571em;
  padding: 0.67857143em 2.1em 0.67857143em 1em;
}
.ui.search.dropdown > input.search {
  background: none transparent !important;
  border: none !important;
  box-shadow: none !important;
  cursor: text;
  top: 0;
  left: 1px;
  width: 100%;
  outline: 0;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  /* padding: inherit; */
  position: absolute;
  z-index: 2;
}
input[type="email"],
input[type="password"],
input[type="search"],
input[type="text"] {
  -webkit-appearance: none;
  /* -moz-appearance: none; */
}
button,
input {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  /* font-family: sans-serif; */
  font-size: 100%;
  /* line-height: 1.15; */
  margin: 0;
}
.ui.selection.dropdown {
  /* cursor: pointer; */
  word-wrap: break-word;
  /* line-height: 1em; */
  white-space: normal;
  outline: 0;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  min-width: 14em;
  min-height: 2.71428571em;
  background: #fff;
  display: inline-block;
  padding: 0.78571429em 2.1em 0.78571429em 1em;
  /* color: rgba(124, 82, 82, 0.87); */
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  transition: box-shadow 0.1s ease, width 0.1s ease;
}
.ui.dropdown {
  /* cursor: pointer; */
  position: relative;
  display: inline-block;
  outline: 0;
  /* text-align: left; */
  transition: box-shadow 0.1s ease, width 0.1s ease;
  /* -webkit-tap-highlight-color: transparent; */
}
.ui.default.dropdown:not(.button) > .text,
.ui.dropdown:not(.button) > .default.text {
  color: hsla(0, 0%, 74.9%, 0.87);
}
.ui.search.dropdown > .text {
  cursor: text;
  position: relative;
  left: 1px;
  z-index: 3;
}
.ui.dropdown > .text {
  display: inline-block;
  transition: none;
}
.ui.fluid.dropdown > .dropdown.icon {
  float: right;
}
.ui.selection.dropdown > .delete.icon,
.ui.selection.dropdown > .dropdown.icon,
.ui.selection.dropdown > .search.icon {
  cursor: pointer;
  position: absolute;
  width: auto;
  height: auto;
  line-height: 1.21428571em;
  top: 0.78571429em;
  right: 1em;
  z-index: 3;
  margin: -0.78571429em;
  padding: 0.91666667em;
  opacity: 0.8;
  transition: opacity 0.1s ease;
}
.ui.dropdown > .dropdown.icon {
  font-family: Dropdown;
  /* line-height: 1; */
  /* height: 1em; */
  /* width: 1.23em; */
  /* -webkit-backface-visibility: hidden; */
  backface-visibility: hidden;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  /* width: auto; */
}
@media only screen and (min-width: 992px) {
  .ui.search.dropdown .menu {
    max-height: 14.85rem;
  }
}
.ui.search.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
  /* -webkit-backface-visibility: hidden; */
  backface-visibility: hidden;
  /* -webkit-overflow-scrolling: touch; */
}
.ui.dropdown .menu {
  cursor: auto;
  position: absolute;
  display: none;
  /* outline: 0; */
  top: 100%;
  /* min-width: -webkit-max-content; */
  /* min-width: -moz-max-content; */
  min-width: max-content;
  margin: 0;
  padding: 0;
  background: #fff;
  font-size: 1em;
  text-shadow: none;
  text-align: left;
  /* box-shadow: 0 2px 3px 0 rgb(34 36 38 / 15%); */
  border: 1px solid rgba(34, 36, 38, 0.15);
  /* border-radius: 3px; */
  /* transition: opacity .1s ease; */
  z-index: 11;
  will-change: transform, opacity;
}
.ui.dropdown {
  cursor: pointer;
  position: relative;
  display: inline-block;
  outline: 0;
  text-align: left;
  transition: box-shadow 0.1s ease, width 0.1s ease;
  -webkit-tap-highlight-color: transparent;
}
.ui.selection.dropdown .menu:after,
.ui.selection.dropdown .menu:before {
  display: none;
}
.city-dropdown.ui.selection.dropdown .menu > .message {
  text-align: center;
}
.ui.selection.dropdown .menu > .message {
  padding: 0.6875rem 1rem;
}
.ui.dropdown .menu > .message:not(.ui) {
  color: rgba(0, 0, 0, 0.4);
}
.ui.dropdown .menu > .message {
  /* padding: .6875rem 1rem; */
  font-weight: 400;
}
.ui.dropdown .menu > .message {
  margin: 0 -1px;
}
.ui.dropdown .menu > * {
  white-space: nowrap;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  /* background-color: hsla(0,0%,100%,.98); */
  box-shadow: 0 -1px 2px 0 rgb(0 0 0 / 12%);
  display: flex;
  align-items: stretch;
  height: 56px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s;
  /* background-color: darkcyan!important; */
}
.bottom-nav__item--active,
.bottom-nav__item--active:hover {
  color: #a62626;
  background-color: hsla(0, 0%, 100%, 0.98);
}
/* @media screen and (min-width: 768px){
.bottom-nav__item {
    flex-direction: row;
    font-size: .875rem;
}} */

.bottom-nav__item {
  flex: 1 1;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  /* color: rgba(0,0,0,.56); */
  /* font-size: .75rem; */
  line-height: 2;
  transition: color 0.36s ease, background-color 0.36s ease;
  border: none;
  cursor: pointer;
  /* background-color: hsla(0,0%,100%,0); */
  outline: none;
}
.kt-icon--lg {
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
}
.kt-icon {
  font-family: sonnat !important;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  /* font-size: 1.25rem; */
  /* width: 20px; */
  /* height: 20px; */
  background-size: contain;
  background-position: 50%;
}
.bottom-nav__item--active,
.bottom-nav__item--active:hover {
  color: #a62626;
  background-color: hsla(0, 0%, 100%, 0.98);
}
.bottom-nav__item {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4px 0;
  /* color: rgba(0,0,0,.56); */
  /* font-size: .75rem; */
  /* line-height: 2; */
  transition: color 0.36s ease, background-color 0.36s ease;
  border: none;
  cursor: pointer;
  background-color: hsla(0, 0%, 100%, 0);
  outline: none;
}
.kt-icon-social-divar:before {
  content: "\e9a9";
}
/* @media screen and (min-width: 768px){
.kt-toast-container {
    padding: 32px;
}} */
.kt-toast-container {
  position: fixed;
  pointer-events: none;
  z-index: 1070;
  padding: 16px;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
@media (max-width: 500px) {
  .col2 {
    display: none !important;
    /* display:block; */
    /* display: block!important; */
    /* background-color:lightcoral!important; */
  }
  .city-home.mobile {
    visibility: visible !important;
  }
}

/* @media (max-width: 500px){
.city-home.mobile, .city-modal.mobile {
    display: block!important;
}} */
.ui.fluid.dropdown {
  /* display: block; */
  width: 100%;
  min-width: 0;
}
.ui.search {
  position: relative;
}
input[type="email"],
input[type="password"],
input[type="search"],
input[type="text"] {
  -webkit-appearance: none;
  /* -moz-appearance: none; */
}
</style>