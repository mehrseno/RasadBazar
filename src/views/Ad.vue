<template>
  <div class="submit-post">
    <div class="kt-container">
      <div class="kt-row">
        <div class="submit-post__grid kt-col-md-12 kt-col-lg-6 kt-offset-lg-3">
          <AdFrom
            v-if="LastPage"
            :category="category"
            @changeCategory="changeCategory"
          />
          <div v-else>
            <AdCategories @ChangePage="ChangePage" />
          </div>
          <footer class="footer">
            <a class="footer__divar-logo footer__link" href="/s/abdanan"
              ><i class="kt-icon kt-icon-social-divar kt-icon--xl"></i
            ></a>
            <div class="footer__links">
              <a class="footer__link" href="/about">دربارهٔ دیوار</a>
              <hr
                class="
                  kt-divider
                  footer__divider
                  kt-divider--padded kt-divider--vertical
                "
              />
              <a
                href="https://help.divar.ir"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >پشتیبانی و قوانین</a
              >
              <hr
                class="
                  kt-divider
                  footer__divider
                  kt-divider--padded kt-divider--vertical
                "
              />
              <a
                href="https://divar.ir/blog"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link"
                >بلاگ دیوار</a
              >
            </div>
            <div class="footer__social-links">
              <a
                href="https://twitter.com/divar_official"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link footer__social-link"
                title="دیوار در توییتر"
                aria-label="دیوار در توییتر"
                ><i class="kt-icon kt-icon-social-twitter"></i></a
              ><a
                href="https://www.instagram.com/divar.official"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link footer__social-link"
                title="دیوار در اینستاگرام"
                aria-label="دیوار در اینستاگرام"
                ><i class="kt-icon kt-icon-social-instagram-fill"></i></a
              ><a
                href="https://www.linkedin.com/company/divarofficial"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link footer__social-link"
                title="دیوار در لینکداین"
                aria-label="دیوار در لینکداین"
                ><i class="kt-icon kt-icon-social-linkedin"></i></a
              ><a
                href="https://www.aparat.com/divar.official"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link footer__social-link"
                title="دیوار در آپارات"
                aria-label="دیوار در آپارات"
                ><i class="kt-icon kt-icon-social-aparat"></i
              ></a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdCategories from "../components/AdCatergories.vue";
import AdFrom from "../components/AdForm.vue";
export default {
  name: "Ad",
  components: {
    AdCategories,
    AdFrom,
  },

  data() {
    return {
      LastPage: false,
      category: "",
    };
  },
  methods: {
    ChangePage(title) {
      this.LastPage = true;
      console.log(title);
      this.category = title;
    },
    changeCategory() {
      this.LastPage = false;
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-thumb {
  box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);
}

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
.dropdown-item:hover {
  color: #722c2c;
}
.dropdown-item:hover {
  background-color: rgba(0, 0, 0, 0.07);
}
/*the container must be positioned relative:*/
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element:*/
}

.select-selected {
  background-color: DodgerBlue;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/*style the items (options), including the selected item:*/
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
/* --------------------------------------------------------------------------------- */
.form-category-title {
  height: 6.5rem;
  justify-content: space-between;
  align-items: center;
}
.form-category-title--with-action {
  border-color: rgba(0, 0, 0, 0.24);
  color: red;
}
.form-category-title {
  margin-top: 16px;
  border-radius: 4px;
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
}
.form-category-title__name {
  margin-right: 32px;
}
.form-category-title__name {
  color: rgba(0, 0, 0, 0.56);
}
.form-category-title__name {
  font-size: 1rem;
}
.form-category-title--with-image .form-category-title__name,
.form-category-title__name {
  font-weight: 500;
  line-height: 1.5;
  /* font-size: 1.25rem; */
}

.kt-button--inlined.kt-button--primary,
.kt-button--outlined.kt-button--primary {
  color: #a62626;
  background-color: transparent;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
.form-category-title__button {
  margin-left: 16px;
}
.form-category-title__button {
  position: relative;
  z-index: 1;
}
.kt-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-pointer-event {
  pointer-events: none;
}
.submit-post__form-wrapper {
  margin-top: -16px;
}
.json-schema-form-dim {
  min-height: 90px;
}
.dim {
  position: relative;
}
.json-schema-form {
  font-size: 0.875rem;
}
.json-schema-form__form {
  text-align: right;
  display: flex;
  flex-direction: column;
}
.field-template--compact,
.field-template--compact:first-of-type,
.field-template:first-of-type {
  margin-top: 16px;
}
.field-template {
  /* margin-top: 16px; */
  width: 100%;
}
.json-schema-form__form {
  text-align: right;
  display: flex;
  flex-direction: column;
}
.json-schema-form fieldset {
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
fieldset {
  /* display: block; */
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;
  /* border-width: 2px; */
  /* border-style: groove; */
  /* border-color: threedface; */
  /* border-image: initial; */
}
.json-schema-form legend {
  display: none;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
legend {
  /* display: block; */
  padding-inline-start: 2px;
  padding-inline-end: 2px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
}
.field-template--compact,
.field-template--compact:first-of-type,
.field-template:first-of-type {
  margin-top: 16px;
}

.field-template {
  margin-top: 16px;
  width: 100%;
}
.submit-location-selector {
  display: flex;
  flex-direction: column;
}

.kt-select {
  position: relative;
  display: flex;
  vertical-align: top;
  outline: none;
  height: 40px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color: hsla(0, 0%, 100%, 0.98);
  transition: border-color 0.36s ease;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
}
[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}
.kt-clear-field {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  /* padding: 0; */
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}
.kt-select__clear {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0 8px !important;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.36s ease, visibility 0.36s ease;
}
.kt-clear-field__button {
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.56);
  /* transition: color .36s ease,background-color .36s ease,box-shadow .36s ease,border-color .36s ease,-webkit-transform .36s ease; */
  /* transition: color .36s ease,background-color .36s ease,box-shadow .36s ease,border-color .36s ease,transform .36s ease; */
  transition: color 0.36s ease, background-color 0.36s ease,
    box-shadow 0.36s ease, border-color 0.36s ease, transform 0.36s ease,
    -webkit-transform 0.36s ease;
  border-radius: 50%;
}
.kt-icon-remove:before {
  content: "\e9e8";
}
.kt-select__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.input-and-label {
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  color: rgba(0, 0, 0, 0.87);
  transition: margin-right 0.36s ease, padding-right 0.36s ease,
    color 0.36s ease;
}
.kt-select__field-label {
  margin-right: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.input-and-label {
  flex-grow: 1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  color: rgba(0, 0, 0, 0.87);
  transition: margin-right 0.36s ease, padding-right 0.36s ease,
    color 0.36s ease;
}
.kt-select__arrow-block {
  padding: 0 8px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kt-select__arrow {
  color: rgba(0, 0, 0, 0.24) !important;
  /* transition: color .36s ease,-webkit-transform .16s ease; */
  /* transition: transform .16s ease,color .36s ease; */
  /* transition: transform .16s ease,color .36s ease,-webkit-transform .16s ease; */
  /* -webkit-transform-origin: center center; */
  transform-origin: center center;
}
.kt-icon--lg {
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
}
.kt-icon-keyboard-arrow-down-o:before {
  content: "\ea14";
}
submit-location-map-container {
  display: flex;
  flex-direction: column;
}
.field-template {
  margin-top: 16px;
  width: 100%;
}

.submit-location-map-container > .submit-location-map {
  height: 14rem;
}
@media screen and (min-width: 768px) {
  .map-cm {
    margin-left: 0;
    margin-right: 0;
    border-radius: 4px;
  }
}
.map-cm {
  /* position: relative; */
  /* margin-left: -16px; */
  /* margin-right: -16px; */
  /* border-radius: 0; */
  overflow: hidden;
  /* height: 12.5rem; */
}
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
  touch-action: none;
}
.map-cm__map {
  height: 100%;
  z-index: 0;
}

.leaflet-container {
  background: #ddd;
  outline: 0;
}
.leaflet-grab {
  /* cursor: -webkit-grab; */
  cursor: grab;
}
.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}
.leaflet-container {
  overflow: hidden;
}
element.style {
  transform: translate3d(-16px, 0px, 0px);
}
.leaflet-pane {
  z-index: 400;
}
.leaflet-image-layer,
.leaflet-layer,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-pane,
.leaflet-pane > canvas,
.leaflet-pane > svg,
.leaflet-tile,
.leaflet-tile-container,
.leaflet-zoom-box {
  position: absolute;
  left: 0;
  top: 0;
}
.leaflet-container {
  font: 12px/1.5 Helvetica Neue, Arial, Helvetica, sans-serif;
}
.leaflet-grab {
  /* cursor: -webkit-grab; */
  cursor: grab;
}
.leaflet-container {
  -webkit-tap-highlight-color: transparent;
}
.leaflet-tile-pane {
  z-index: 200;
}
.leaflet-image-layer,
.leaflet-layer,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-pane,
.leaflet-pane > canvas,
.leaflet-pane > svg,
.leaflet-tile,
.leaflet-tile-container,
.leaflet-zoom-box {
  position: absolute;
  left: 0;
  top: 0;
}
element.style {
  z-index: 17;
  transform: translate3d(276px, 61px, 0px) scale(0.5);
}

element.style {
  z-index: 1;
  opacity: 1;
}
element.style {
  z-index: 16;
  transform: translate3d(184px, 41px, 0px) scale(0.25);
}
.leaflet-image-layer,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-pane > svg path,
.leaflet-tile-container {
  pointer-events: none;
}
.leaflet-pane.leaflet-map-pane {
  transform: translate3d(-16px, 0px, 0px);
}
.leaflet-tile-container.leaflet-zoom-animated {
  z-index: 18;
  transform: translate3d(-65px, -5px, 0px) scale(1);
}
.leaflet-zoom-animated {
  /* -webkit-transform-origin: 0 0; */
  transform-origin: 0 0;
}
.leaflet-tile.leaflet-tile-loaded {
  width: 256px;
  height: 256px;
  transform: translate3d(200px, -120px, 0px);
  opacity: 1;
}
.map-cm__button:not(:last-child) {
  margin-bottom: 8px;
}
.map-cm__button {
  padding: 0;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 12%);
}
.map-cm__attribution {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 53px;
  height: 32px;
  margin: 0 8px 8px 0;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
.kt-control-row {
  color: rgba(0, 0, 0, 0.56);
  font-size: 0.875rem;
  outline: none;
}
.kt-control-row__row {
  align-items: center;
  padding: 0;
  color: inherit;
  font-size: inherit;
}
.kt-base-row {
  min-height: 48px;
  /* padding: 8px 0; */
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.56);
  /* font-size: 1rem; */
  font-weight: 400;
  line-height: 2;
  white-space: normal;
}
.kt-control-row__start {
  align-items: center;
}
.kt-base-row__start {
  flex: 1 1;
}
.kt-base-row__end,
.kt-base-row__start {
  min-width: 0;
}
.kt-base-row__center,
.kt-base-row__end,
.kt-base-row__start {
  display: flex;
  /* align-items: flex-start; */
}
p:first-child {
  margin-top: 0;
}
.kt-control-row__title {
  margin: 0;
  line-height: 2;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.87);
}
.kt-body,
.kt-description-row__text,
.kt-tab--small .kt-tab__title,
.kt-tab__title,
p {
  /* font-size: 1rem; */
  font-weight: 400;
  /* line-height: 2; */
}
.kt-control-row__subtitle {
  line-height: 2;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.56);
  margin: 0 4px 0 0;
}
.kt-base-row__end {
  flex-shrink: 0;
  justify-content: flex-end;
  max-width: 50%;
  margin-right: 10px;
}
.kt-base-row__end,
.kt-base-row__start {
  min-width: 0;
}
.kt-base-row__center,
.kt-base-row__end,
.kt-base-row__start {
  display: flex;
  align-items: flex-start;
}
.kt-toggle--pointed {
  cursor: pointer;
}
.kt-toggle {
  display: flex;
  align-items: center;
}
.kt-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  word-wrap: normal;
}
.kt-toggle--pointed {
  cursor: pointer;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.kt-toggle__indicator {
  padding: 2px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.24);
  height: 24px;
  width: 42px;
  transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  /* -webkit-user-select: none; */
  /* -moz-user-select: none; */
  /* -ms-user-select: none; */
  user-select: none;
}
.kt-toggle__circle-container {
  width: 20px;
  height: 20px;
  /* -webkit-transform: translateX(0); */
  transform: translateX(0);
  /* transition: -webkit-transform .15s cubic-bezier(.4,0,.2,1); */
  /* transition: transform .15s cubic-bezier(.4,0,.2,1); */
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.kt-toggle__circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
  background-color: #fff;
}
.kt-toggle__circle:after,
.kt-toggle__circle:before {
  content: "";
  /* transition: background-color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1); */
  /* transition: transform .15s cubic-bezier(.4,0,.2,1),background-color .15s cubic-bezier(.4,0,.2,1); */
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}
p:last-child {
  margin-bottom: 0;
}
.kt-caption-row {
  margin: 8px 0;
  color: rgba(0, 0, 0, 0.56);
}
.kt-caption,
.kt-view-more-button,
.kt-view-toggle-button {
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 2;
}
.image-uploader {
  display: flex;
  flex-direction: column;
  margin-top: 5px;
}
.text-field--with-description {
  padding-bottom: 0;
}
.text-field {
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
  line-height: 2;
  display: flex;
  padding-top: 16px;
  padding-bottom: 8px;
  font-weight: 500;
}
.field-template .messages,
.field-template .messages.ui.message {
  margin-top: 10px;
}
.messages--help,
.messages--help.ui.message {
  color: rgba(0, 0, 0, 0.56);
  font-size: 0.875rem;
  line-height: 2;
  background-color: transparent;
  border: 0;
  padding: 0;
  white-space: pre-line;
}
.messages.ui.message {
  display: block;
  box-shadow: none;
}
.ui.message {
  position: relative;
  min-height: 1em;
  margin: 1em 0;
  background: #f8f8f9;
  /* padding: 1em 1.5em; */
  /* line-height: 1.4285em; */
  /* color: rgba(0,0,0,.87); */
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  border-radius: 3px;
  /* box-shadow: inset 0 0 0 1px rgb(34 36 38 / 22%), 0 0 0 0 transparent; */
}
@media screen and (min-width: 520px) {
  .image-uploader__zone {
    grid-template-columns: repeat(4, 1fr);
  }
}
.image-uploader__zone {
  display: grid;
  margin-top: 5px;
  grid-gap: 16px;
  /* grid-template-columns: repeat(3,1fr); */
}
.kt-image-drop-zone {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
input[type="file" i] {
  appearance: none;
  background-color: initial;
  cursor: default;
  align-items: baseline;
  color: inherit;
  text-overflow: ellipsis;
  white-space: pre;
  text-align: start !important;
  padding: initial;
  border: initial;
  /* overflow: hidden !important; */
}
.kt-image-drop-zone {
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.kt-image-drop-zone__border-image {
  opacity: 0.24;
  transition: opacity 0.36s ease;
  vertical-align: bottom;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
}
.kt-image-drop-zone__photo-icon {
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: rgba(0, 0, 0, 0.24);
}
.kt-image-drop-zone__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: color 0.36s ease;
}
.kt-icon--xl {
  font-size: 2rem;
  width: 32px;
  height: 32px;
}
.kt-icon-photo-o:before {
  content: "\e9cb";
}
.kt-select__arrow:hover {
  transform: rotate(90deg);
}

.kt-image-drop-zone__add-icon-wrapper {
  /* -webkit-transform: translateY(-1.25rem); */
  transform: translateY(-1.25rem);
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
}
.kt-image-drop-zone__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: color 0.36s ease;
}
.kt-image-drop-zone__add-icon {
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 50%;
  color: #be3737;
}
.kt-icon--sm {
  font-size: 1.125rem;
  width: 18px;
  height: 18px;
}
.kt-icon-add-circle-f:before {
  content: "\e94c";
}
.field-template .messages,
.field-template .messages.ui.message {
  margin-top: 10px;
}
.messages--help,
.messages--help.ui.message {
  color: rgba(0, 0, 0, 0.56);
  font-size: 0.875rem;
  line-height: 2;
  background-color: transparent;
  border: 0;
  padding: 0;
  white-space: pre-line;
}
.ui.message:last-child {
  margin-bottom: 0;
}

.kt-textfield {
  position: relative;
  width: 100%;
  height: 2.5rem;
}
.kt-textfield .kt-textfield__input {
  padding-left: 16px;
}
.kt-textfield .kt-textfield__input {
  padding-right: 16px;
}
.kt-textfield .kt-textfield__end-icon,
.kt-textfield .kt-textfield__input,
.kt-textfield .kt-textfield__label,
.kt-textfield .kt-textfield__label-background,
.kt-textfield .kt-textfield__label-span,
.kt-textfield .kt-textfield__start-icon {
  position: absolute;
  height: 2.5rem;
  line-height: 2.5rem;
}
.kt-textfield__input {
  background-color: #fff;
  box-sizing: border-box;
  outline: 0;
  width: 100%;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  color: rgba(0, 0, 0, 0.87);
  transition: color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.kt-switch {
  display: inline-flex;
  align-items: center;
  min-height: 2.5rem;
}
.kt-switch__cell {
  flex: 1 0 auto;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
}
.kt-switch__cell:before {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.04);
  /* -webkit-transform: scale(0); */
  transform: scale(0);
  opacity: 0;
  /* -webkit-transform-origin: center; */
  transform-origin: center;
  /* transition: opacity .24s ease,background-color .24s ease,-webkit-transform .24s ease; */
  /* transition: transform .24s ease,opacity .24s ease,background-color .24s ease; */
  transition: transform 0.24s ease, opacity 0.24s ease,
    background-color 0.24s ease, -webkit-transform 0.24s ease;
}
.kt-switch__input {
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: inherit;
  -webkit-appearance: none;
  margin: 0;
}

.kt-switch__button--radio {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kt-switch__button {
  border: 1px solid rgba(0, 0, 0, 0.24);
  position: absolute;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1),
    background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.kt-switch__button--radio:after {
  content: "";
  width: 0.625rem;
  height: 0.625rem;
  background: #a62626;
  border-radius: 50%;
  opacity: 0;
  /* -webkit-transform: scale(0); */
  transform: scale(0);
  /* transition: background-color .24s ease,opacity .24s ease,-webkit-transform .24s ease; */
  /* transition: background-color .24s ease,opacity .24s ease,transform .24s ease; */
  transition: background-color 0.24s ease, opacity 0.24s ease,
    transform 0.24s ease, -webkit-transform 0.24s ease;
}
.kt-switch__rippler {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kt-switch__ripple {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: absolute;
  /* -webkit-transform: scale(0); */
  transform: scale(0);
  /* -webkit-transform-origin: center; */
  transform-origin: center;
  pointer-events: none;
  /* -webkit-user-select: none; */
  /* -moz-user-select: none; */
  /* -ms-user-select: none; */
  user-select: none;
  background-color: rgba(0, 0, 0, 0.08);
  z-index: -1;
}
.kt-switch__label {
  font-size: 0.875rem;
  line-height: 2;
  color: rgba(0, 0, 0, 0.87);
  transition: 0.36s ease;
  margin-right: 4px;
  cursor: pointer;
}
.json-schema-form__inline-field
  .json-schema-form__radio-item
  + .json-schema-form__radio-item {
  margin-right: 32px;
}

.kt-select__field-label--placeholder-shown {
  color: rgba(0, 0, 0, 0.32);
  opacity: 1;
}
.kt-selector-row--selectable {
  cursor: pointer;
}
.kt-base-row {
  min-height: 48px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.56);
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  white-space: normal;
}
.kt-selector-row--primary .kt-selector-row__title {
  color: #a62626;
  font-weight: 500;
}
.kt-selector-row__title {
  margin: 0;
  line-height: 2;
  font-size: inherit;
  flex: 1 1;
}

.json-schema-form fieldset {
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.json-schema-form legend {
  display: none;
}
.field-template--compact,
.field-template--compact:first-of-type,
.field-template:first-of-type {
  margin-top: 16px;
}
/* --------------------- */
.kt-breadcrumbs__link {
  color: rgba(0, 0, 0, 0.56);
  transition: color 0.36s ease;
  margin-left: 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.kt-breadcrumbs--single .kt-breadcrumbs__item,
.kt-breadcrumbs__item:nth-last-child(2) {
  display: flex;
  flex-direction: row-reverse;
}

.kt-breadcrumbs--single .kt-breadcrumbs__item .kt-breadcrumbs__icon,
.kt-breadcrumbs__item:nth-last-child(2) .kt-breadcrumbs__icon {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.kt-breadcrumbs--single .kt-breadcrumbs__item .kt-breadcrumbs__icon,
.kt-breadcrumbs__item:nth-last-child(2) .kt-breadcrumbs__icon {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.kt-icon--xs {
  font-size: 1rem;
  width: 16px;
  height: 16px;
}
.kt-icon-keyboard-arrow-left::before {
  content: "\ea13";
}
.kt-breadcrumbs__icon {
  color: rgba(0, 0, 0, 0.56);
}
.category-selector__go-back {
  font-size: 0.75rem;
}
.kt-breadcrumbs {
  font-size: 5rem !important;
  line-height: 2;
}
.category-selector__go-back,
.category-selector__item {
  cursor: pointer;
}
.kt-breadcrumbs {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 2;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.category-selector__breadcrumb,
.category-selector__title {
  margin-bottom: 16px;
}
.kt-icon {
  font-family: sonnat !important;
  display: inline-block;
  vertical-align: middle;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
  font-size: 1.25rem;
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: 50%;
}
.invisible-icon {
  display: none !important;
}

.kt-icon-suitcase::before {
  content: "\e9ef";
}
.kt-icon-chair::before {
  content: "\e992";
}
.kt-icon-dice::before {
  content: "\ea09";
}
.kt-icon-watch::before {
  content: "\e9f8";
}
.kt-icon-paint-brush::before {
  content: "\e998";
}
.kt-icon-lamp::before {
  content: "\ea04";
}
.kt-icon-electronic-devices::before {
  content: "\e96f";
}
.kt-icon-community::before {
  content: "\ea0d";
}
.submit-post {
  background-color: #fff;
  flex: 1 1;
}
svg:not(:root) {
  overflow: hidden;
}
.kt-switch__icon-svg {
  width: 12px;
  height: 8px;
  transition: 0.4s ease;

  transform: rotate(-1turn);
}
.kt-switch__icon-check {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  -webkit-animation: kt-switch-uncheck 0.2s ease-out forwards;
  animation: kt-switch-uncheck 0.2s ease-out forwards;
}
/* polyline[Attributes Style] {
    transform: translate(5.97487, 2.35355) rotate(-45deg) translate(-5.97487, -2.35355);
} */
:not(svg) {
  transform-origin: 0px 0px;
}
.kt-switch__icon-line {
  opacity: 0;
}
.field-template {
  margin-top: 16px;
  width: 100%;
}

.kt-button-row--padded {
  padding-top: 32px;
}
.kt-button-row {
  display: flex;
  justify-content: flex-end;
}
.kt-button--outlined {
  border-color: rgba(0, 0, 0, 0.48);
}
.kt-button--inlined,
.kt-button--outlined {
  color: rgba(0, 0, 0, 0.56);
  background-color: transparent;
}
.kt-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.no-pointer-event {
  pointer-events: none;
}

.kt-button-row > :not(:first-child) {
  margin-right: 16px;
}
/* .kt-button.kt-button--primary {
    background-color: #a62626;
} */

.kt-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* ------------------- */
@media (min-width: 960px) {
  .kt-container {
    max-width: 960px;
  }
}

@media (min-width: 960px) {
  .kt-offset-lg-3 {
    margin-right: 25%;
  }
}
@media (min-width: 960px) {
  .kt-col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

/* ------------------- */

.kt-row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
}
.submit-post__grid {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 65px);
}
.kt-col,
.kt-col-1,
.kt-col-2,
.kt-col-3,
.kt-col-4,
.kt-col-5,
.kt-col-6,
.kt-col-7,
.kt-col-8,
.kt-col-9,
.kt-col-10,
.kt-col-11,
.kt-col-12,
.kt-col-auto,
.kt-col-lg,
.kt-col-lg-1,
.kt-col-lg-2,
.kt-col-lg-3,
.kt-col-lg-4,
.kt-col-lg-5,
.kt-col-lg-6,
.kt-col-lg-7,
.kt-col-lg-8,
.kt-col-lg-9,
.kt-col-lg-10,
.kt-col-lg-11,
.kt-col-lg-12,
.kt-col-lg-auto,
.kt-col-md,
.kt-col-md-1,
.kt-col-md-2,
.kt-col-md-3,
.kt-col-md-4,
.kt-col-md-5,
.kt-col-md-6,
.kt-col-md-7,
.kt-col-md-8,
.kt-col-md-9,
.kt-col-md-10,
.kt-col-md-11,
.kt-col-md-12,
.kt-col-md-auto,
.kt-col-sm,
.kt-col-sm-1,
.kt-col-sm-2,
.kt-col-sm-3,
.kt-col-sm-4,
.kt-col-sm-5,
.kt-col-sm-6,
.kt-col-sm-7,
.kt-col-sm-8,
.kt-col-sm-9,
.kt-col-sm-10,
.kt-col-sm-11,
.kt-col-sm-12,
.kt-col-sm-auto,
.kt-col-xl,
.kt-col-xl-1,
.kt-col-xl-2,
.kt-col-xl-3,
.kt-col-xl-4,
.kt-col-xl-5,
.kt-col-xl-6,
.kt-col-xl-7,
.kt-col-xl-8,
.kt-col-xl-9,
.kt-col-xl-10,
.kt-col-xl-11,
.kt-col-xl-12,
.kt-col-xl-auto,
.kt-col-xxl,
.kt-col-xxl-1,
.kt-col-xxl-2,
.kt-col-xxl-3,
.kt-col-xxl-4,
.kt-col-xxl-5,
.kt-col-xxl-6,
.kt-col-xxl-7,
.kt-col-xxl-8,
.kt-col-xxl-9,
.kt-col-xxl-10,
.kt-col-xxl-11,
.kt-col-xxl-12,
.kt-col-xxl-auto {
  position: relative;
  width: 100%;
  padding-right: 8px;
  padding-left: 8px;
}
.category-selector__breadcrumb,
.category-selector__title {
  margin-bottom: 16px;
}
.kt-section-title {
  display: flex;
  align-items: flex-start;
  margin-top: 32px;
}
.kt-icon-vehicles::before {
  content: "\e96e";
}
.kt-section-title__title {
  margin: 0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
}
p:last-child {
  margin-bottom: 0;
}
.kt-section-title__subtitle {
  color: rgba(0, 0, 0, 0.56);
  margin: 4px 0 0;
  line-height: 2;
  font-size: 0.875rem;
}
.kt-body,
.kt-description-row__text,
.kt-tab--small .kt-tab__title,
.kt-tab__title,
p {
  /* font-size: 1rem; */
  font-weight: 400;
  /* line-height: 2; */
}
.category-selector__go-back,
.category-selector__item {
  cursor: pointer;
}
.kt-base-row {
  min-height: 48px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.56);
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  white-space: normal;
}
.kt-base-row__start {
  flex: 1 1;
}
.kt-base-row__end,
.kt-base-row__start {
  min-width: 0;
}
.kt-base-row__center,
.kt-base-row__end,
.kt-base-row__start {
  display: flex;
  align-items: flex-start;
}
.kt-base-row {
  min-height: 48px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.56);
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  white-space: normal;
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
.kt-base-row__icon {
  line-height: 1;
  margin: 4px 0 0 16px;
}
.kt-base-row {
  min-height: 48px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.56);
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
  white-space: normal;
}
.kt-icon-buildings:before {
  content: "\e9f1";
}
.kt-selector-row__title {
  margin: 0;
  line-height: 2;
  font-size: inherit;
  color: rgba(0, 0, 0, 0.87);
  flex: 1 1;
}
.kt-body,
.kt-description-row__text,
.kt-tab--small .kt-tab__title,
.kt-tab__title,
p {
  /* font-size: 1rem; */
  font-weight: 400;
  /* line-height: 2; */
}
.kt-base-row {
  min-height: 48px;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.56);
  /* font-size: 1rem; */
  /* font-weight: 400; */
  /* line-height: 2; */
  white-space: normal;
}
.kt-base-row__end {
  flex-shrink: 0;
  justify-content: flex-end;
  max-width: 50%;
  margin-right: 10px;
}
.kt-base-row__end,
.kt-base-row__start {
  min-width: 0;
}
.kt-base-row__center,
.kt-base-row__end,
.kt-base-row__start {
  display: flex;
  align-items: flex-start;
}
.kt-icon--lg {
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
}
.kt-base-row__arrow {
  /* line-height: 1; */
  margin: 4px 8px 0 0;
}
.kt-icon-keyboard-arrow-left:before {
  content: "\ea13";
}
.kt-base-row__arrow:before {
  color: rgba(0, 0, 0, 0.32);
}
.kt-divider {
  height: 1px;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
}
hr {
  /* box-sizing: content-box; */
  /* height: 0; */
  overflow: visible;
}
hr {
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  /* overflow: hidden; */
  /* border-style: inset; */
  /* border-width: 1px; */
}
.footer {
  margin-top: 128px;
}
.footer,
.footer__links {
  display: flex;
  align-items: center;
}
.footer {
  padding: 16px 0;
  line-height: 2;
  font-size: 0.625rem;
}
.footer__divar-logo {
  margin-left: 32px;
}
.footer__link {
  font-size: 0.6rem;
  color: rgba(0, 0, 0, 0.32);
  transition: color 0.36s ease;
}
.kt-icon--xl {
  font-size: 2rem;
  width: 32px;
  height: 32px;
}
.kt-icon-social-divar:before {
  content: "\e9a9";
}
.footer,
.footer__links {
  display: flex;
  align-items: center;
}
.kt-divider--vertical.kt-divider--padded {
  margin: 0 8px;
}
.footer__divider.kt-divider--vertical {
  height: 16px;
}
.kt-divider--vertical {
  display: inline-block;
  width: 1px;
}
.kt-divider {
  /* height: 1px; */
  /* margin: 0; */
  box-sizing: border-box;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
}
hr {
  /* display: block; */
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  /* overflow: hidden; */
  /* border-style: inset; */
  /* border-wid */
}
.footer__social-links {
  margin-right: auto;
}
.footer__social-link {
  margin-right: 16px;
}
.kt-icon-social-instagram-fill:before {
  content: "\e975";
}
.kt-icon-social-twitter:before {
  content: "\e9a6";
}
.kt-icon-social-linkedin:before {
  content: "\e964";
}
.kt-icon-social-aparat:before {
  content: "\ea34";
}
</style>
