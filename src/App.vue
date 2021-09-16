<template>
  <Header />
  <router-view class="main-container"></router-view>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>


  <style type="text/css">
.main-container {
  margin-top: 40px;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type="reset"],
[type="submit"],
button,
html [type="button"] {
  -webkit-appearance: button;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

progress {
  display: inline-block;
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details,
menu {
  display: block;
}

summary {
  display: list-item;
}

canvas {
  display: inline-block;
}

[hidden],
template {
  display: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.2;
}

body,
html {
  height: 100%;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  line-height: 1.28571429em;
  margin: calc(1.75rem - 0.14286em) 0 0.875rem;
  font-weight: 700;
  padding: 0;
}

h1 {
  min-height: 0.875rem;
  font-size: 1.75rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.125rem;
}

h4 {
  font-size: 0.9375rem;
}

h5 {
  font-size: 0.875rem;
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  margin-top: 0;
}

h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child {
  margin-bottom: 0;
}

p {
  margin: 0 0 1em;
  line-height: 1.4285em;
}

p:first-child {
  margin-top: 0;
}

p:last-child {
  margin-bottom: 0;
}

a {
  color: #a62626;
}

a:hover {
  color: #9f0f0f;
  text-decoration: none;
}

::-webkit-selection {
  background-color: #cce2ff;
  color: rgba(0, 0, 0, 0.87);
}

::-moz-selection {
  background-color: #cce2ff;
  color: rgba(0, 0, 0, 0.87);
}

::selection {
  background-color: #cce2ff;
  color: rgba(0, 0, 0, 0.87);
}

input::-webkit-selection,
textarea::-webkit-selection {
  background-color: hsla(0, 0%, 39.2%, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

input::-moz-selection,
textarea::-moz-selection {
  background-color: hsla(0, 0%, 39.2%, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

input::selection,
textarea::selection {
  background-color: hsla(0, 0%, 39.2%, 0.4);
  color: rgba(0, 0, 0, 0.87);
}

[data-tooltip] {
  position: relative;
}

[data-tooltip]:before {
  content: "";
  width: 0.71428571em;
  height: 0.71428571em;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  z-index: 2;
  box-shadow: 1px 1px 0 0 #bababc;
}

[data-tooltip]:after,
[data-tooltip]:before {
  pointer-events: none;
  position: absolute;
  font-size: 0.875rem;
  background: #fff;
}

[data-tooltip]:after {
  content: attr(data-tooltip);
  text-transform: none;
  text-align: left;
  white-space: nowrap;
  border: 1px solid #d4d4d5;
  line-height: 1.4285em;
  max-width: none;
  padding: 0.833em 1em;
  font-weight: 400;
  font-style: normal;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
    0 2px 10px 0 rgba(34, 36, 38, 0.15);
  z-index: 1;
}

[data-tooltip]:not([data-position]):before {
  top: auto;
  right: auto;
  bottom: 100%;
  left: 50%;
  background: #fff;
  margin-left: -0.0625rem;
  margin-bottom: 0.125rem;
}

[data-tooltip]:not([data-position]):after {
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 100%;
  margin-bottom: 0.5em;
}

[data-tooltip]:after,
[data-tooltip]:before {
  pointer-events: none;
  visibility: hidden;
}

[data-tooltip]:before {
  opacity: 0;
  -webkit-transform: rotate(45deg) scale(0) !important;
  transform: rotate(45deg) scale(0) !important;
  -webkit-transform-origin: center top;
  transform-origin: center top;
  transition: all 0.1s ease;
}

[data-tooltip]:after {
  opacity: 1;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  transition: all 0.1s ease;
}

[data-tooltip]:hover:after,
[data-tooltip]:hover:before {
  visibility: visible;
  pointer-events: auto;
}

[data-tooltip]:hover:before {
  -webkit-transform: rotate(45deg) scale(1) !important;
  transform: rotate(45deg) scale(1) !important;
  opacity: 1;
}

[data-tooltip]:after,
[data-tooltip][data-position="bottom center"]:after,
[data-tooltip][data-position="top center"]:after {
  -webkit-transform: translateX(-50%) scale(0) !important;
  transform: translateX(-50%) scale(0) !important;
}

[data-tooltip]:hover:after,
[data-tooltip][data-position="bottom center"]:hover:after {
  -webkit-transform: translateX(-50%) scale(1) !important;
  transform: translateX(-50%) scale(1) !important;
}

[data-tooltip][data-position="left center"]:after,
[data-tooltip][data-position="right center"]:after {
  -webkit-transform: translateY(-50%) scale(0) !important;
  transform: translateY(-50%) scale(0) !important;
}

[data-tooltip][data-position="left center"]:hover:after,
[data-tooltip][data-position="right center"]:hover:after {
  -webkit-transform: translateY(-50%) scale(1) !important;
  transform: translateY(-50%) scale(1) !important;
}

[data-tooltip][data-position="bottom left"]:after,
[data-tooltip][data-position="bottom right"]:after,
[data-tooltip][data-position="top left"]:after,
[data-tooltip][data-position="top right"]:after {
  -webkit-transform: scale(0) !important;
  transform: scale(0) !important;
}

[data-tooltip][data-position="bottom left"]:hover:after,
[data-tooltip][data-position="bottom right"]:hover:after,
[data-tooltip][data-position="top left"]:hover:after,
[data-tooltip][data-position="top right"]:hover:after {
  -webkit-transform: scale(1) !important;
  transform: scale(1) !important;
}

[data-tooltip][data-inverted]:before {
  box-shadow: none !important;
  background: #000;
}

[data-tooltip][data-inverted]:after {
  background: #000;
  color: #fff;
  border: none;
  box-shadow: none;
}

[data-position="top center"][data-tooltip]:after {
  top: auto;
  right: auto;
  left: 50%;
  bottom: 100%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-bottom: 0.5em;
}

[data-position="top center"][data-tooltip]:before {
  top: auto;
  right: auto;
  bottom: 100%;
  left: 50%;
  background: #fff;
  margin-left: -0.0625rem;
  margin-bottom: 0.125rem;
}

[data-position="top left"][data-tooltip]:after {
  top: auto;
  right: auto;
  left: 0;
  bottom: 100%;
  margin-bottom: 0.5em;
}

[data-position="top left"][data-tooltip]:before {
  top: auto;
  right: auto;
  bottom: 100%;
  left: 1em;
  margin-left: -0.0625rem;
  margin-bottom: 0.125rem;
}

[data-position="top right"][data-tooltip]:after {
  top: auto;
  left: auto;
  right: 0;
  bottom: 100%;
  margin-bottom: 0.5em;
}

[data-position="top right"][data-tooltip]:before {
  top: auto;
  left: auto;
  bottom: 100%;
  right: 1em;
  margin-left: -0.0625rem;
  margin-bottom: 0.125rem;
}

[data-position="bottom center"][data-tooltip]:after {
  bottom: auto;
  right: auto;
  left: 50%;
  top: 100%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-top: 0.5em;
}

[data-position="bottom center"][data-tooltip]:before {
  bottom: auto;
  right: auto;
  top: 100%;
  left: 50%;
  margin-left: -0.0625rem;
  margin-top: 0.125rem;
}

[data-position="bottom left"][data-tooltip]:after {
  left: 0;
  top: 100%;
  margin-top: 0.5em;
}

[data-position="bottom left"][data-tooltip]:before {
  bottom: auto;
  right: auto;
  top: 100%;
  left: 1em;
  margin-left: -0.0625rem;
  margin-top: 0.125rem;
}

[data-position="bottom right"][data-tooltip]:after {
  right: 0;
  top: 100%;
  margin-top: 0.5em;
}

[data-position="bottom right"][data-tooltip]:before {
  bottom: auto;
  left: auto;
  top: 100%;
  right: 1em;
  margin-left: -0.125rem;
  margin-top: 0.0625rem;
}

[data-position="left center"][data-tooltip]:after {
  right: 100%;
  top: 50%;
  margin-right: 0.5em;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

[data-position="left center"][data-tooltip]:before {
  right: 100%;
  top: 50%;
  margin-top: -0.125rem;
  margin-right: -0.0625rem;
}

[data-position="right center"][data-tooltip]:after {
  left: 100%;
  top: 50%;
  margin-left: 0.5em;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

[data-position="right center"][data-tooltip]:before {
  left: 100%;
  top: 50%;
  margin-top: -0.0625rem;
  margin-left: 0.125rem;
}

[data-position~="bottom"][data-tooltip]:before {
  background: #fff;
  box-shadow: -1px -1px 0 0 #bababc;
}

[data-position="left center"][data-tooltip]:before {
  background: #fff;
  box-shadow: 1px -1px 0 0 #bababc;
}

[data-position="right center"][data-tooltip]:before {
  background: #fff;
  box-shadow: -1px 1px 0 0 #bababc;
}

[data-position~="top"][data-tooltip]:before {
  background: #fff;
}

[data-inverted][data-position~="bottom"][data-tooltip]:before {
  background: #000;
  box-shadow: -1px -1px 0 0 #bababc;
}

[data-inverted][data-position="left center"][data-tooltip]:before {
  background: #000;
  box-shadow: 1px -1px 0 0 #bababc;
}

[data-inverted][data-position="right center"][data-tooltip]:before {
  background: #000;
  box-shadow: -1px 1px 0 0 #bababc;
}

[data-inverted][data-position~="top"][data-tooltip]:before {
  background: #000;
}

[data-position~="bottom"][data-tooltip]:before {
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}

[data-position~="bottom"][data-tooltip]:after {
  -webkit-transform-origin: center top;
  transform-origin: center top;
}

[data-position="left center"][data-tooltip]:before {
  -webkit-transform-origin: top center;
  transform-origin: top center;
}

[data-position="left center"][data-tooltip]:after,
[data-position="right center"][data-tooltip]:before {
  -webkit-transform-origin: right center;
  transform-origin: right center;
}

[data-position="right center"][data-tooltip]:after {
  -webkit-transform-origin: left center;
  transform-origin: left center;
}

body {
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 400;
  font-size: 1rem;
}

a {
  text-decoration: none;
}

button,
h1,
h2,
h3,
h4,
h5,
h6,
input,
p,
small,
span,
textarea {
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

h3,
h4,
h5,
h6 {
  font-weight: 500;
  line-height: 1.5;
  font-size: 1.25rem;
}

h3 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
}

h1,
h2 {
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.5;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 2;
}

@media screen and (max-width: 768px) {
  p {
    font-size: 0.875rem;
  }

  h3,
  h4,
  h5,
  h6 {
    font-size: 1.125rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1rem;
  }

  h1,
  h2 {
    font-size: 2rem;
  }

  h1,
  h2 {
    font-weight: 500;
  }

  h2 {
    font-size: 1.125rem;
  }
}

body {
  overflow-x: visible !important;
}

@-webkit-keyframes grow {
  0% {
    max-height: 0;
  }

  to {
    max-height: 82px;
  }
}

@keyframes grow {
  0% {
    max-height: 0;
  }

  to {
    max-height: 82px;
  }
}

@-webkit-keyframes home-city-suggestion-load {
  0% {
    height: 0;
    padding-bottom: 0;
    border-bottom: 0 solid #ededed;
    margin-bottom: 0;
  }

  to {
    height: 153px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 40px;
  }
}

@keyframes home-city-suggestion-load {
  0% {
    height: 0;
    padding-bottom: 0;
    border-bottom: 0 solid #ededed;
    margin-bottom: 0;
  }

  to {
    height: 153px;
    padding-bottom: 30px;
    border-bottom: 1px solid #ededed;
    margin-bottom: 40px;
  }
}

@page {
  size: auto;
  margin: 0;
}

@-webkit-keyframes button-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes button-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@font-face {
  font-family: Icons;
  src: url(https://s100.divarcdn.com/statics/2021/08/icons.8b43027f.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/icons.8b43027f.eot#iefix)
      format("embedded-opentype"),
    url(https://s100.divarcdn.com/statics/2021/08/icons.20fd1704.woff2)
      format("woff2"),
    url(https://s100.divarcdn.com/statics/2021/08/icons.f691f37e.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/icons.1e59d233.ttf)
      format("truetype"),
    url(https://s100.divarcdn.com/statics/2021/08/icons.c1e38fd9.svg#icons)
      format("svg");
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-decoration: inherit;
  text-transform: none;
}

@-webkit-keyframes icon-loading {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes icon-loading {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes loader {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes segment-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes segment-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes form-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes form-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@font-face {
  font-family: Accordion;
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfOIKAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zryj6HgAAAFwAAAAyGhlYWT/0IhHAAACOAAAADZoaGVhApkB5wAAAnAAAAAkaG10eAJuABIAAAKUAAAAGGxvY2EAjABWAAACrAAAAA5tYXhwAAgAFgAAArwAAAAgbmFtZfC1n04AAALcAAABPHBvc3QAAwAAAAAEGAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQASAEkAtwFuABMAADc0PwE2FzYXFh0BFAcGJwYvASY1EgaABQgHBQYGBQcIBYAG2wcGfwcBAQcECf8IBAcBAQd/BgYAAAAAAQAAAEkApQFuABMAADcRNDc2MzIfARYVFA8BBiMiJyY1AAUGBwgFgAYGgAUIBwYFWwEACAUGBoAFCAcFgAYGBQcAAAABAAAAAQAAqWYls18PPPUACwIAAAAAAM/9o+4AAAAAz/2j7gAAAAAAtwFuAAAACAACAAAAAAAAAAEAAAHg/+AAAAIAAAAAAAC3AAEAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAQAAAAC3ABIAtwAAAAAAAAAKABQAHgBCAGQAAAABAAAABgAUAAEAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)
      format("truetype"),
    url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAASwAAoAAAAABGgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAS0AAAEtFpovuE9TLzIAAAIkAAAAYAAAAGAIIweQY21hcAAAAoQAAABMAAAATA984gpnYXNwAAAC0AAAAAgAAAAIAAAAEGhlYWQAAALYAAAANgAAADb/0IhHaGhlYQAAAxAAAAAkAAAAJAKZAedobXR4AAADNAAAABgAAAAYAm4AEm1heHAAAANMAAAABgAAAAYABlAAbmFtZQAAA1QAAAE8AAABPPC1n05wb3N0AAAEkAAAACAAAAAgAAMAAAEABAQAAQEBB3JhdGluZwABAgABADr4HAL4GwP4GAQeCgAZU/+Lix4KABlT/4uLDAeLa/iU+HQFHQAAAHkPHQAAAH4RHQAAAAkdAAABJBIABwEBBw0PERQZHnJhdGluZ3JhdGluZ3UwdTF1MjB1RjBEOXVGMERBAAACAYkABAAGAQEEBwoNVp38lA78lA78lA77lA773Z33bxWLkI2Qj44I9xT3FAWOj5CNkIuQi4+JjoePiI2Gi4YIi/uUBYuGiYeHiIiHh4mGi4aLho2Ijwj7FPcUBYeOiY+LkAgO+92L5hWL95QFi5CNkI6Oj4+PjZCLkIuQiY6HCPcU+xQFj4iNhouGi4aJh4eICPsU+xQFiIeGiYaLhouHjYePiI6Jj4uQCA74lBT4lBWLDAoAAAAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDZ//3//wAB/+MPKwADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAEAADfYOJZfDzz1AAsCAAAAAADP/aPuAAAAAM/9o+4AAAAAALcBbgAAAAgAAgAAAAAAAAABAAAB4P/gAAACAAAAAAAAtwABAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAEAAAAAtwASALcAAAAAUAAABgAAAAAADgCuAAEAAAAAAAEADAAAAAEAAAAAAAIADgBAAAEAAAAAAAMADAAiAAEAAAAAAAQADABOAAEAAAAAAAUAFgAMAAEAAAAAAAYABgAuAAEAAAAAAAoANABaAAMAAQQJAAEADAAAAAMAAQQJAAIADgBAAAMAAQQJAAMADAAiAAMAAQQJAAQADABOAAMAAQQJAAUAFgAMAAMAAQQJAAYADAA0AAMAAQQJAAoANABaAHIAYQB0AGkAbgBnAFYAZQByAHMAaQBvAG4AIAAxAC4AMAByAGEAdABpAG4AZ3JhdGluZwByAGEAdABpAG4AZwBSAGUAZwB1AGwAYQByAHIAYQB0AGkAbgBnAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)
      format("woff");
  font-weight: 400;
  font-style: normal;
}

@-webkit-keyframes dropdown-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes dropdown-spin {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@font-face {
  font-family: Dropdown;
  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMggjB5AAAAC8AAAAYGNtYXAPfuIIAAABHAAAAExnYXNwAAAAEAAAAWgAAAAIZ2x5Zjo82LgAAAFwAAABVGhlYWQAQ88bAAACxAAAADZoaGVhAwcB6QAAAvwAAAAkaG10eAS4ABIAAAMgAAAAIGxvY2EBNgDeAAADQAAAABJtYXhwAAoAFgAAA1QAAAAgbmFtZVcZpu4AAAN0AAABRXBvc3QAAwAAAAAEvAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADw2gHg/+D/4AHgACAAAAABAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAFAAEADgAAAAKAAgAAgACAAEAIPDa//3//wAAAAAAIPDX//3//wAB/+MPLQADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAIABJQElABMAABM0NzY3BTYXFhUUDwEGJwYvASY1AAUGBwEACAUGBoAFCAcGgAUBEgcGBQEBAQcECQYHfwYBAQZ/BwYAAQAAAG4BJQESABMAADc0PwE2MzIfARYVFAcGIyEiJyY1AAWABgcIBYAGBgUI/wAHBgWABwaABQWABgcHBgUFBgcAAAABABIASQC3AW4AEwAANzQ/ATYXNhcWHQEUBwYnBi8BJjUSBoAFCAcFBgYFBwgFgAbbBwZ/BwEBBwQJ/wgEBwEBB38GBgAAAAABAAAASQClAW4AEwAANxE0NzYzMh8BFhUUDwEGIyInJjUABQYHCAWABgaABQgHBgVbAQAIBQYGgAUIBwWABgYFBwAAAAEAAAABAADZuaKOXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAAAAACgAUAB4AQgBkAIgAqgAAAAEAAAAIABQAAQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAOAAAAAQAAAAAAAgAOAEcAAQAAAAAAAwAOACQAAQAAAAAABAAOAFUAAQAAAAAABQAWAA4AAQAAAAAABgAHADIAAQAAAAAACgA0AGMAAwABBAkAAQAOAAAAAwABBAkAAgAOAEcAAwABBAkAAwAOACQAAwABBAkABAAOAFUAAwABBAkABQAWAA4AAwABBAkABgAOADkAAwABBAkACgA0AGMAaQBjAG8AbQBvAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AbgBSAGUAZwB1AGwAYQByAGkAYwBvAG0AbwBvAG4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=)
      format("truetype"),
    url(data:application/font-woff;charset=utf-8;base64,d09GRk9UVE8AAAVwAAoAAAAABSgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAAA9AAAAdkAAAHZLDXE/09TLzIAAALQAAAAYAAAAGAIIweQY21hcAAAAzAAAABMAAAATA9+4ghnYXNwAAADfAAAAAgAAAAIAAAAEGhlYWQAAAOEAAAANgAAADYAQ88baGhlYQAAA7wAAAAkAAAAJAMHAelobXR4AAAD4AAAACAAAAAgBLgAEm1heHAAAAQAAAAABgAAAAYACFAAbmFtZQAABAgAAAFFAAABRVcZpu5wb3N0AAAFUAAAACAAAAAgAAMAAAEABAQAAQEBCGljb21vb24AAQIAAQA6+BwC+BsD+BgEHgoAGVP/i4seCgAZU/+LiwwHi2v4lPh0BR0AAACIDx0AAACNER0AAAAJHQAAAdASAAkBAQgPERMWGyAlKmljb21vb25pY29tb29udTB1MXUyMHVGMEQ3dUYwRDh1RjBEOXVGMERBAAACAYkABgAIAgABAAQABwAKAA0AVgCfAOgBL/yUDvyUDvyUDvuUDvtvi/emFYuQjZCOjo+Pj42Qiwj3lIsFkIuQiY6Hj4iNhouGi4aJh4eHCPsU+xQFiIiGiYaLhouHjYeOCPsU9xQFiI+Jj4uQCA77b4v3FBWLkI2Pjo8I9xT3FAWPjo+NkIuQi5CJjogI9xT7FAWPh42Hi4aLhomHh4eIiIaJhosI+5SLBYaLh42HjoiPiY+LkAgO+92d928Vi5CNkI+OCPcU9xQFjo+QjZCLkIuPiY6Hj4iNhouGCIv7lAWLhomHh4iIh4eJhouGi4aNiI8I+xT3FAWHjomPi5AIDvvdi+YVi/eUBYuQjZCOjo+Pj42Qi5CLkImOhwj3FPsUBY+IjYaLhouGiYeHiAj7FPsUBYiHhomGi4aLh42Hj4iOiY+LkAgO+JQU+JQViwwKAAAAAAMCAAGQAAUAAAFMAWYAAABHAUwBZgAAAPUAGQCEAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8NoB4P/g/+AB4AAgAAAAAQAAAAAAAAAAAAAAIAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAA4AAAACgAIAAIAAgABACDw2v/9//8AAAAAACDw1//9//8AAf/jDy0AAwABAAAAAAAAAAAAAAABAAH//wAPAAEAAAABAAA5emozXw889QALAgAAAAAA0ABHWAAAAADQAEdYAAAAAAElAW4AAAAIAAIAAAAAAAAAAQAAAeD/4AAAAgAAAAAAASUAAQAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAABAAAAASUAAAElAAAAtwASALcAAAAAUAAACAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIADgBHAAEAAAAAAAMADgAkAAEAAAAAAAQADgBVAAEAAAAAAAUAFgAOAAEAAAAAAAYABwAyAAEAAAAAAAoANABjAAMAAQQJAAEADgAAAAMAAQQJAAIADgBHAAMAAQQJAAMADgAkAAMAAQQJAAQADgBVAAMAAQQJAAUAFgAOAAMAAQQJAAYADgA5AAMAAQQJAAoANABjAGkAYwBvAG0AbwBvAG4AVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG4AUgBlAGcAdQBsAGEAcgBpAGMAbwBtAG8AbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA)
      format("woff");
  font-weight: 400;
  font-style: normal;
}

@-webkit-keyframes browseIn {
  0% {
    -webkit-transform: scale(0.8) translateZ(0);
    transform: scale(0.8) translateZ(0);
    z-index: -1;
  }

  10% {
    -webkit-transform: scale(0.8) translateZ(0);
    transform: scale(0.8) translateZ(0);
    z-index: -1;
    opacity: 0.7;
  }

  80% {
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    opacity: 1;
    z-index: 999;
  }

  to {
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
    z-index: 999;
  }
}

@keyframes browseIn {
  0% {
    -webkit-transform: scale(0.8) translateZ(0);
    transform: scale(0.8) translateZ(0);
    z-index: -1;
  }

  10% {
    -webkit-transform: scale(0.8) translateZ(0);
    transform: scale(0.8) translateZ(0);
    z-index: -1;
    opacity: 0.7;
  }

  80% {
    -webkit-transform: scale(1.05) translateZ(0);
    transform: scale(1.05) translateZ(0);
    opacity: 1;
    z-index: 999;
  }

  to {
    -webkit-transform: scale(1) translateZ(0);
    transform: scale(1) translateZ(0);
    z-index: 999;
  }
}

@-webkit-keyframes browseOutLeft {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0);
    transform: translateX(0) rotateY(0) rotateX(0);
  }

  50% {
    z-index: -1;
    -webkit-transform: translateX(-105%) rotateY(35deg) rotateX(10deg)
      translateZ(-10px);
    transform: translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  to {
    z-index: -1;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    opacity: 0;
  }
}

@keyframes browseOutLeft {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0);
    transform: translateX(0) rotateY(0) rotateX(0);
  }

  50% {
    z-index: -1;
    -webkit-transform: translateX(-105%) rotateY(35deg) rotateX(10deg)
      translateZ(-10px);
    transform: translateX(-105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  to {
    z-index: -1;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    opacity: 0;
  }
}

@-webkit-keyframes browseOutRight {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0);
    transform: translateX(0) rotateY(0) rotateX(0);
  }

  50% {
    z-index: 1;
    -webkit-transform: translateX(105%) rotateY(35deg) rotateX(10deg)
      translateZ(-10px);
    transform: translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  to {
    z-index: 1;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    opacity: 0;
  }
}

@keyframes browseOutRight {
  0% {
    z-index: 999;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0);
    transform: translateX(0) rotateY(0) rotateX(0);
  }

  50% {
    z-index: 1;
    -webkit-transform: translateX(105%) rotateY(35deg) rotateX(10deg)
      translateZ(-10px);
    transform: translateX(105%) rotateY(35deg) rotateX(10deg) translateZ(-10px);
  }

  80% {
    opacity: 1;
  }

  to {
    z-index: 1;
    -webkit-transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    transform: translateX(0) rotateY(0) rotateX(0) translateZ(-10px);
    opacity: 0;
  }
}

@-webkit-keyframes dropIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes dropIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes dropOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

@keyframes dropOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(10%);
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translateY(10%);
    transform: translateY(10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(-10%);
    transform: translateY(-10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(10%);
    transform: translateX(10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translateX(10%);
    transform: translateX(10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-10%);
    transform: translateX(-10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-10%);
    transform: translateX(-10%);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(5%);
    transform: translateY(5%);
  }
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(5%);
    transform: translateY(5%);
  }
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(-5%);
    transform: translateY(-5%);
  }
}

@keyframes fadeOutDown {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateY(-5%);
    transform: translateY(-5%);
  }
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateX(5%);
    transform: translateX(5%);
  }
}

@keyframes fadeOutLeft {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateX(5%);
    transform: translateX(5%);
  }
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateX(-5%);
    transform: translateX(-5%);
  }
}

@keyframes fadeOutRight {
  0% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translateX(-5%);
    transform: translateX(-5%);
  }
}

@-webkit-keyframes horizontalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateY(-90deg);
    transform: perspective(2000px) rotateY(-90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: perspective(2000px) rotateY(0);
    transform: perspective(2000px) rotateY(0);
    opacity: 1;
  }
}

@keyframes horizontalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateY(-90deg);
    transform: perspective(2000px) rotateY(-90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: perspective(2000px) rotateY(0);
    transform: perspective(2000px) rotateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes verticalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: perspective(2000px) rotateX(0);
    transform: perspective(2000px) rotateX(0);
    opacity: 1;
  }
}

@keyframes verticalFlipIn {
  0% {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: perspective(2000px) rotateX(0);
    transform: perspective(2000px) rotateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes horizontalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateY(0);
    transform: perspective(2000px) rotateY(0);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(2000px) rotateY(90deg);
    transform: perspective(2000px) rotateY(90deg);
    opacity: 0;
  }
}

@keyframes horizontalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateY(0);
    transform: perspective(2000px) rotateY(0);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(2000px) rotateY(90deg);
    transform: perspective(2000px) rotateY(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes verticalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateX(0);
    transform: perspective(2000px) rotateX(0);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes verticalFlipOut {
  0% {
    -webkit-transform: perspective(2000px) rotateX(0);
    transform: perspective(2000px) rotateX(0);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(2000px) rotateX(-90deg);
    transform: perspective(2000px) rotateX(-90deg);
    opacity: 0;
  }
}

@-webkit-keyframes scaleIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes scaleOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes scaleOut {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@-webkit-keyframes flyIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes flyIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@-webkit-keyframes flyInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 1500px, 0);
    transform: translate3d(0, 1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes flyInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 1500px, 0);
    transform: translate3d(0, 1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes flyInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -1500px, 0);
    transform: translate3d(0, -1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes flyInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -1500px, 0);
    transform: translate3d(0, -1500px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes flyInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1500px, 0, 0);
    transform: translate3d(1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes flyInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(1500px, 0, 0);
    transform: translate3d(1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes flyInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-1500px, 0, 0);
    transform: translate3d(-1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes flyInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-1500px, 0, 0);
    transform: translate3d(-1500px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes flyOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes flyOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@-webkit-keyframes flyOutUp {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes flyOutUp {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@-webkit-keyframes flyOutDown {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes flyOutDown {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@-webkit-keyframes flyOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes flyOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@-webkit-keyframes flyOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes flyOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@-webkit-keyframes slideInY {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }

  to {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes slideInY {
  0% {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }

  to {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@-webkit-keyframes slideInX {
  0% {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes slideInX {
  0% {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@-webkit-keyframes slideOutY {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}

@keyframes slideOutY {
  0% {
    opacity: 1;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}

@-webkit-keyframes slideOutX {
  0% {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

@keyframes slideOutX {
  0% {
    opacity: 1;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  to {
    opacity: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

@-webkit-keyframes swingInX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(15deg);
    transform: perspective(1000px) rotateX(15deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  to {
    -webkit-transform: perspective(1000px) rotateX(0);
    transform: perspective(1000px) rotateX(0);
  }
}

@keyframes swingInX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(15deg);
    transform: perspective(1000px) rotateX(15deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  to {
    -webkit-transform: perspective(1000px) rotateX(0);
    transform: perspective(1000px) rotateX(0);
  }
}

@-webkit-keyframes swingInY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-17.5deg);
    transform: perspective(1000px) rotateY(-17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  to {
    -webkit-transform: perspective(1000px) rotateY(0);
    transform: perspective(1000px) rotateY(0);
  }
}

@keyframes swingInY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-17.5deg);
    transform: perspective(1000px) rotateY(-17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  to {
    -webkit-transform: perspective(1000px) rotateY(0);
    transform: perspective(1000px) rotateY(0);
  }
}

@-webkit-keyframes swingOutX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(0);
    transform: perspective(1000px) rotateX(0);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(17.5deg);
    transform: perspective(1000px) rotateX(17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes swingOutX {
  0% {
    -webkit-transform: perspective(1000px) rotateX(0);
    transform: perspective(1000px) rotateX(0);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateX(-7.5deg);
    transform: perspective(1000px) rotateX(-7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateX(17.5deg);
    transform: perspective(1000px) rotateX(17.5deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateX(-30deg);
    transform: perspective(1000px) rotateX(-30deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(1000px) rotateX(90deg);
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes swingOutY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(0);
    transform: perspective(1000px) rotateY(0);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-10deg);
    transform: perspective(1000px) rotateY(-10deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }
}

@keyframes swingOutY {
  0% {
    -webkit-transform: perspective(1000px) rotateY(0);
    transform: perspective(1000px) rotateY(0);
  }

  40% {
    -webkit-transform: perspective(1000px) rotateY(7.5deg);
    transform: perspective(1000px) rotateY(7.5deg);
  }

  60% {
    -webkit-transform: perspective(1000px) rotateY(-10deg);
    transform: perspective(1000px) rotateY(-10deg);
  }

  80% {
    -webkit-transform: perspective(1000px) rotateY(30deg);
    transform: perspective(1000px) rotateY(30deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(1000px) rotateY(-90deg);
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }
}

@-webkit-keyframes flash {
  0%,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@keyframes flash {
  0%,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@-webkit-keyframes shake {
  0%,
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@keyframes shake {
  0%,
  to {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translateX(-10px);
    transform: translateX(-10px);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}

@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }

  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  to {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
    transform: scale(0.9) rotate(-3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
    transform: scale(1.1) rotate(3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
    transform: scale(1.1) rotate(-3deg);
  }

  to {
    -webkit-transform: scale(1) rotate(0);
    transform: scale(1) rotate(0);
  }
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes pulse {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  50% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    opacity: 0.7;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes jiggle {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes jiggle {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Bold.f18db7b4.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Bold.94bdf556.woff2)
      format("woff2"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Bold.dd12fb6a.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Bold.e65c9d52.ttf)
      format("truetype");
}

@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Medium.d1f537d1.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Medium.9f338149.woff2)
      format("woff2"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Medium.2d28b58d.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Medium.dde1bbb6.ttf)
      format("truetype");
}

@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb.432a2b2d.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb.cdb118d6.woff2)
      format("woff2"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb.9ffdcda0.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb.ae01de69.ttf)
      format("truetype");
}

@font-face {
  font-family: IRANSans;
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Light.b9db61ce.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Light.b5815f24.woff2)
      format("woff2"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Light.b35266cb.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/IRANSansWeb_Light.f1c0e72c.ttf)
      format("truetype");
}

@font-face {
  font-family: sonnat;
  src: url(https://s100.divarcdn.com/statics/2021/08/sonnat-icons.77cb0b67.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/sonnat-icons.77cb0b67.eot#iefix)
      format("embedded-opentype"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat-icons.e628bda5.woff2)
      format("woff2"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat-icons.09d49d27.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat-icons.f89e6980.ttf)
      format("truetype"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat-icons.7fb6b6cd.svg#sonnat)
      format("svg");
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes rotate {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@-webkit-keyframes stroke-dash {
  0% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 80, 100;
    stroke-dashoffset: 46;
  }

  to {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }
}

@keyframes stroke-dash {
  0% {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 80, 100;
    stroke-dashoffset: 46;
  }

  to {
    stroke-dasharray: 1, 100;
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes wave {
  0%,
  to {
    opacity: 0.2;
  }

  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    opacity: 1;
  }
}

@keyframes wave {
  0%,
  to {
    opacity: 0.2;
  }

  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
    opacity: 1;
  }
}

@-webkit-keyframes kt-switch-ripple {
  to {
    -webkit-transform: scale(4);
    transform: scale(4);
    background-color: rgba(166, 38, 38, 0.08);
  }
}

@keyframes kt-switch-ripple {
  to {
    -webkit-transform: scale(4);
    transform: scale(4);
    background-color: rgba(166, 38, 38, 0.08);
  }
}

@-webkit-keyframes kt-switch-check {
  0% {
    stroke-dashoffset: 48;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@keyframes kt-switch-check {
  0% {
    stroke-dashoffset: 48;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes kt-switch-uncheck {
  0% {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 48;
  }
}

@keyframes kt-switch-uncheck {
  0% {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 48;
  }
}

@-webkit-keyframes kt-toggle-press {
  to {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}

@keyframes kt-toggle-press {
  to {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}

@charset "UTF-8"@font-face {
  font-family: slick;
  font-weight: 400;
  font-style: normal;
  /* src: url(data:application/vnd.ms-fontobject;base64,AAgAAGQHAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAgCAAAAAAAAAAAAAAAAEAAAAAAAAATxDE8AAAAAAAAAAAAAAAAAAAAAAAAAoAcwBsAGkAYwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAKAHMAbABpAGMAawAAAAAAAAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=); */
  /* src: url(data:application/vnd.ms-fontobject;base64,AAgAAGQHAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAgCAAAAAAAAAAAAAAAAEAAAAAAAAATxDE8AAAAAAAAAAAAAAAAAAAAAAAAAoAcwBsAGkAYwBrAAAADgBSAGUAZwB1AGwAYQByAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAKAHMAbABpAGMAawAAAAAAAAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=?#iefix) format("embedded-opentype"), url(data:font/woff;base64,d09GRk9UVE8AAAVkAAsAAAAAB1wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAi4AAAKbH/pWDkZGVE0AAAM4AAAAGgAAABxt0civR0RFRgAAA1QAAAAcAAAAIAAyAARPUy8yAAADcAAAAFIAAABgUBj/rmNtYXAAAAPEAAAAUAAAAWIiC0SwaGVhZAAABBQAAAAuAAAANgABMftoaGVhAAAERAAAABwAAAAkA+UCA2htdHgAAARgAAAADgAAAA4ESgBKbWF4cAAABHAAAAAGAAAABgAFUABuYW1lAAAEeAAAANwAAAFuBSeBwnBvc3QAAAVUAAAAEAAAACAAAwABeJw9ks9vEkEUx2cpWyeUoFYgNkHi2Wt7N3rVm3cTs3UVLC4LxIWEQvi1P3i7O1tYLJDAmlgKGEhQrsajf0j7J3jYTXrQWUrMJG+++b55n5e8NwwKBhHDMLv5kxT3ATEBxKBn3qOAl9zxHgb1MAPhHQgHkyF08Gr/L8B/Eb6zWnmCJ7AJVLubQOheArXvJ1A4EXi6j4I+Zg9F0QFKvsnlBCmXeve+sFEnb/nCptdtQ4QYhVFRAT1HrF8UQK/RL/SbmUbclsvGVFXRZKDHUE38cc4qpkbAAsuwiImvro+ufcfaOIQ6szlrmjRJDaKZKnbjN3GWKIbiIzRFUfCffuxxKOL+3LDlDVvx2TdxN84qZEsnhNBa6pgm2dAsnzbLsETdsmRFxUeHV4e+I2/ptN8TyqV8T3Dt29t7EYOuajVIw2y1Wy3M86w0zg/Fz2IvawmQAUHOVrPVfLkoScVynsqsTG0MGUs4z55nh3mnOJa+li+rl9WpPIcFfDubDeaDC+fLBdYN3QADzLauGfj4B6sZmq6CCpqmtSvF0qlUl2qf5AJIUCSlTqlb7lUG+LRfGzZGzZEyBgccMu6MuqPecNDvD4Y9Kjtj4gD+DsvKVMTcMdtqtZtmkzQstQvYje7Syep0PDSAhSOeHYXYWThEF//A/0YvYV1fSQtpKU5STtrhbQ444OtpKSWJIg3pOg8cBs7maTY1EZf07aq+hjWs7IWzdCYTGhb2CtZ47x+Uhx28AAB4nGNgYGBkAIJz765vANHnCyvqYTQAWnkHswAAeJxjYGRgYOADYgkGEGBiYARCFjAG8RgABHYAN3icY2BmYmCcwMDKwMHow5jGwMDgDqW/MkgytDAwMDGwcjKAQQMDAyOQUmCAgoA01xQGB4ZExUmMD/4/YNBjvP3/NgNEDQPjbbBKBQZGADfLDgsAAHicY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQzMCQqKClOUJz0/z9YHRLv/+L7D+8V3cuHmgAHjGwM6ELUByxUMIOZCmbgAAA5LQ8XeJxjYGRgYABiO68w73h+m68M3EwMIHC+sKIeTqsyqDLeZrwN5HIwgKUB/aYJUgAAeJxjYGRgYLzNwMCgx8QAAkA2IwMqYAIAMGIB7QIAAAACAAAlACUAJQAlAAAAAFAAAAUAAHicbY49asNAEIU/2ZJDfkiRIvXapUFCEqpcptABUrg3ZhEiQoKVfY9UqVLlGDlADpAT5e16IUWysMz3hjfzBrjjjQT/EjKpCy+4YhN5yZoxcirPe+SMWz4jr6S+5UzSa3VuwpTnBfc8RF7yxDZyKs9r5IxHPiKv1P9iZqDnyAvMQ39UecbScVb/gJO03Xk4CFom3XYK1clhMdQUlKo7/d9NF13RkIdfy+MV7TSe2sl11tRFaXYmJKpWTd7kdVnJ8veevZKc+n3I93t9Jnvr5n4aTVWU/0z9AI2qMkV4nGNgZkAGjAxoAAAAjgAF) format("woff"), url(data:font/ttf;base64,AAEAAAANAIAAAwBQRkZUTW3RyK8AAAdIAAAAHEdERUYANAAGAAAHKAAAACBPUy8yT/b9sgAAAVgAAABWY21hcCIPRb0AAAHIAAABYmdhc3D//wADAAAHIAAAAAhnbHlmP5u2YAAAAzwAAAIsaGVhZAABMfsAAADcAAAANmhoZWED5QIFAAABFAAAACRobXR4BkoASgAAAbAAAAAWbG9jYQD2AaIAAAMsAAAAEG1heHAASwBHAAABOAAAACBuYW1lBSeBwgAABWgAAAFucG9zdC+zMgMAAAbYAAAARQABAAAAAQAA8MQQT18PPPUACwIAAAAAAM9xeH8AAAAAz3F4fwAlACUB2wHbAAAACAACAAAAAAAAAAEAAAHbAAAALgIAAAAAAAHbAAEAAAAAAAAAAAAAAAAAAAAEAAEAAAAHAEQAAgAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAACAAAABAAAAIAAAAAAAAAAAUGZFZABAAGEhkgHg/+AALgHb/9sAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAJQAlACUAJQAAAAAAAwAAAAMAAAAcAAEAAAAAAFwAAwABAAAAHAAEAEAAAAAMAAgAAgAEAAAAYSAiIZAhkv//AAAAAABhICIhkCGS//8AAP+l3+PedN5xAAEAAAAAAAAAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGAIwAsAEWAAIAJQAlAdsB2wAYACwAAD8BNjQvASYjIg8BBhUUHwEHBhUUHwEWMzI2FAcGBwYiJyYnJjQ3Njc2MhcWF/GCBgaCBQcIBR0GBldXBgYdBQgH7x0eMjB8MDIeHR0eMjB8MDIecYIGDgaCBQUeBQcJBFhYBAkHBR4F0nwwMh4dHR4yMHwwMh4dHR4yAAAAAgAlACUB2wHbABgALAAAJTc2NTQvATc2NTQvASYjIg8BBhQfARYzMjYUBwYHBiInJicmNDc2NzYyFxYXASgdBgZXVwYGHQUIBwWCBgaCBQcIuB0eMjB8MDIeHR0eMjB8MDIecR4FBwkEWFgECQcFHgUFggYOBoIF0nwwMh4dHR4yMHwwMh4dHR4yAAABACUAJQHbAdsAEwAAABQHBgcGIicmJyY0NzY3NjIXFhcB2x0eMjB8MDIeHR0eMjB8MDIeAT58MDIeHR0eMjB8MDIeHR0eMgABACUAJQHbAdsAQwAAARUUBisBIicmPwEmIyIHBgcGBwYUFxYXFhcWMzI3Njc2MzIfARYVFAcGBwYjIicmJyYnJjQ3Njc2NzYzMhcWFzc2FxYB2woIgAsGBQkoKjodHBwSFAwLCwwUEhwcHSIeIBMGAQQDJwMCISspNC8mLBobFBERFBsaLCYvKicpHSUIDAsBt4AICgsLCScnCwwUEhwcOhwcEhQMCw8OHAMDJwMDAgQnFBQRFBsaLCZeJiwaGxQRDxEcJQgEBgAAAAAAAAwAlgABAAAAAAABAAUADAABAAAAAAACAAcAIgABAAAAAAADACEAbgABAAAAAAAEAAUAnAABAAAAAAAFAAsAugABAAAAAAAGAAUA0gADAAEECQABAAoAAAADAAEECQACAA4AEgADAAEECQADAEIAKgADAAEECQAEAAoAkAADAAEECQAFABYAogADAAEECQAGAAoAxgBzAGwAaQBjAGsAAHNsaWNrAABSAGUAZwB1AGwAYQByAABSZWd1bGFyAABGAG8AbgB0AEYAbwByAGcAZQAgADIALgAwACAAOgAgAHMAbABpAGMAawAgADoAIAAxADQALQA0AC0AMgAwADEANAAARm9udEZvcmdlIDIuMCA6IHNsaWNrIDogMTQtNC0yMDE0AABzAGwAaQBjAGsAAHNsaWNrAABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAABzAGwAaQBjAGsAAHNsaWNrAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAABwAAAAEAAgECAQMAhwBECmFycm93cmlnaHQJYXJyb3dsZWZ0AAAAAAAAAf//AAIAAQAAAA4AAAAYAAAAAAACAAEAAwAGAAEABAAAAAIAAAAAAAEAAAAAzu7XsAAAAADPcXh/AAAAAM9xeH8=) format("truetype"), url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxmb250IGlkPSJzbGljayIgaG9yaXotYWR2LXg9IjUxMiI+PGZvbnQtZmFjZSBmb250LWZhbWlseT0ic2xpY2siIHVuaXRzLXBlci1lbT0iNTEyIiBhc2NlbnQ9IjQ4MCIgZGVzY2VudD0iLTMyIi8+PGdseXBoIHVuaWNvZGU9IuKGkiIgZD0iTTI0MSAxMTNsMTMwIDEzMGM0IDQgNiA4IDYgMTNzLTIgOS02IDEzTDI0MSAzOTljLTMgMy03IDUtMTIgNXMtMTAtMi0xMy01bC0yOS0zMGMtNC0zLTYtNy02LTEyczItMTAgNi0xM2w4Ny04OC04Ny04OGMtNC0zLTYtOC02LTEzczItOSA2LTEybDI5LTMwYzMtMyA4LTUgMTMtNXM5IDIgMTIgNXptMjM0IDE0M2MwLTQwLTktNzctMjktMTEwLTIwLTM0LTQ2LTYwLTgwLTgwLTMzLTIwLTcwLTI5LTExMC0yOXMtNzcgOS0xMTAgMjljLTM0IDIwLTYwIDQ2LTgwIDgwLTIwIDMzLTI5IDcwLTI5IDExMHM5IDc3IDI5IDExMGMyMCAzNCA0NiA2MCA4MCA4MCAzMyAyMCA3MCAyOSAxMTAgMjlzNzctOSAxMTAtMjljMzQtMjAgNjAtNDYgODAtODAgMjAtMzMgMjktNzAgMjktMTEweiIvPjxnbHlwaCB1bmljb2RlPSLihpAiIGQ9Ik0yOTYgMTEzbDI5IDMwYzQgMyA2IDcgNiAxMnMtMiAxMC02IDEzbC04NyA4OCA4NyA4OGM0IDMgNiA4IDYgMTNzLTIgOS02IDEybC0yOSAzMGMtMyAzLTggNS0xMyA1cy05LTItMTItNUwxNDEgMjY5Yy00LTQtNi04LTYtMTNzMi05IDYtMTNsMTMwLTEzMGMzLTMgNy01IDEyLTVzMTAgMiAxMyA1em0xNzkgMTQzYzAtNDAtOS03Ny0yOS0xMTAtMjAtMzQtNDYtNjAtODAtODAtMzMtMjAtNzAtMjktMTEwLTI5cy03NyA5LTExMCAyOWMtMzQgMjAtNjAgNDYtODAgODAtMjAgMzMtMjkgNzAtMjkgMTEwczkgNzcgMjkgMTEwYzIwIDM0IDQ2IDYwIDgwIDgwIDMzIDIwIDcwIDI5IDExMCAyOXM3Ny05IDExMC0yOWMzNC0yMCA2MC00NiA4MC04MCAyMC0zMyAyOS03MCAyOS0xMTB6Ii8+PGdseXBoIHVuaWNvZGU9IuKAoiIgZD0iTTQ3NSAyNTZjMC00MC05LTc3LTI5LTExMC0yMC0zNC00Ni02MC04MC04MC0zMy0yMC03MC0yOS0xMTAtMjlzLTc3IDktMTEwIDI5Yy0zNCAyMC02MCA0Ni04MCA4MC0yMCAzMy0yOSA3MC0yOSAxMTBzOSA3NyAyOSAxMTBjMjAgMzQgNDYgNjAgODAgODAgMzMgMjAgNzAgMjkgMTEwIDI5czc3LTkgMTEwLTI5YzM0LTIwIDYwLTQ2IDgwLTgwIDIwLTMzIDI5LTcwIDI5LTExMHoiLz48Z2x5cGggdW5pY29kZT0iYSIgZD0iTTQ3NSA0MzlWMzExYzAtNS0xLTktNS0xM3MtOC01LTEzLTVIMzI5Yy04IDAtMTMgMy0xNyAxMS0zIDctMiAxNCA0IDIwbDQwIDM5Yy0yOCAyNi02MiAzOS0xMDAgMzktMjAgMC0zOS00LTU3LTExLTE4LTgtMzMtMTgtNDYtMzItMTQtMTMtMjQtMjgtMzItNDYtNy0xOC0xMS0zNy0xMS01N3M0LTM5IDExLTU3YzgtMTggMTgtMzMgMzItNDYgMTMtMTQgMjgtMjQgNDYtMzIgMTgtNyAzNy0xMSA1Ny0xMSAyMyAwIDQ0IDUgNjQgMTUgMjAgOSAzOCAyMyA1MSA0MiAyIDEgNCAzIDcgM3M1LTEgNy0zbDM5LTM5YzItMiAzLTMgMy02IDAtMi0xLTQtMi02LTIxLTI1LTQ2LTQ1LTc2LTU5LTI5LTE0LTYwLTIwLTkzLTIwLTMwIDAtNTggNS04NSAxN3MtNTEgMjctNzAgNDdjLTIwIDE5LTM1IDQzLTQ3IDcwcy0xNyA1NS0xNyA4NSA1IDU4IDE3IDg1IDI3IDUxIDQ3IDcwYzE5IDIwIDQzIDM1IDcwIDQ3czU1IDE3IDg1IDE3YzI4IDAgNTUtNSA4MS0xNSAyNi0xMSA1MC0yNiA3MC00NWwzNyAzN2M2IDYgMTIgNyAyMCA0IDgtNCAxMS05IDExLTE3eiIvPjwvZm9udD48L2RlZnM+PC9zdmc+) format("svg") */
}

@-webkit-keyframes Toastify__trackProgress {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  to {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

@keyframes Toastify__trackProgress {
  0% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  to {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
}

@-webkit-keyframes Toastify__bounceInRight {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes Toastify__bounceInRight {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@-webkit-keyframes Toastify__bounceInLeft {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes Toastify__bounceInLeft {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@-webkit-keyframes Toastify__bounceInUp {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes Toastify__bounceInUp {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes Toastify__bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@-webkit-keyframes Toastify__bounceInDown {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes Toastify__bounceInDown {
  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

@-webkit-keyframes Toastify__bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@-webkit-keyframes Toastify__zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@-webkit-keyframes Toastify__zoomOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@keyframes Toastify__zoomOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes Toastify__flipIn {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-20deg);
    transform: perspective(400px) rotateX(-20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotateX(-5deg);
    transform: perspective(400px) rotateX(-5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipIn {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotateX(-20deg);
    transform: perspective(400px) rotateX(-20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotateX(10deg);
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotateX(-5deg);
    transform: perspective(400px) rotateX(-5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@-webkit-keyframes Toastify__flipOut {
  0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotateX(-20deg);
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@keyframes Toastify__flipOut {
  0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotateX(-20deg);
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotateX(90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes Toastify__slideInRight {
  0% {
    -webkit-transform: translate3d(110%, 0, 0);
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes Toastify__slideInRight {
  0% {
    -webkit-transform: translate3d(110%, 0, 0);
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes Toastify__slideInLeft {
  0% {
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes Toastify__slideInLeft {
  0% {
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes Toastify__slideInUp {
  0% {
    -webkit-transform: translate3d(0, 110%, 0);
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes Toastify__slideInUp {
  0% {
    -webkit-transform: translate3d(0, 110%, 0);
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes Toastify__slideInDown {
  0% {
    -webkit-transform: translate3d(0, -110%, 0);
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@keyframes Toastify__slideInDown {
  0% {
    -webkit-transform: translate3d(0, -110%, 0);
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes Toastify__slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(110%, 0, 0);
    transform: translate3d(110%, 0, 0);
  }
}

@keyframes Toastify__slideOutRight {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(110%, 0, 0);
    transform: translate3d(110%, 0, 0);
  }
}

@-webkit-keyframes Toastify__slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);
  }
}

@keyframes Toastify__slideOutLeft {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);
  }
}

@-webkit-keyframes Toastify__slideOutDown {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 500px, 0);
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutDown {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 500px, 0);
    transform: translate3d(0, 500px, 0);
  }
}

@-webkit-keyframes Toastify__slideOutUp {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -500px, 0);
    transform: translate3d(0, -500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -500px, 0);
    transform: translate3d(0, -500px, 0);
  }
}

@font-face {
  font-family: divar-icon;
  src: url(https://s100.divarcdn.com/statics/2021/08/sonnat.81c1e051.eot);
  src: url(https://s100.divarcdn.com/statics/2021/08/sonnat.81c1e051.eot#iefix)
      format("embedded-opentype"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat.0ae25961.ttf)
      format("truetype"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat.5bb4342a.woff)
      format("woff"),
    url(https://s100.divarcdn.com/statics/2021/08/sonnat.812b09cb.svg#sonnat)
      format("svg");
  font-weight: 400;
  font-style: normal;
  font-display: block;
}

.static-page .social-network {
  position: relative;
  width: 100%;
  border-top: 1px solid #ededed;
  margin-top: 80px;
  padding-top: 30px;
}

.nav-bar {
  position: -webkit-sticky;
  position: sticky;
  height: 65px;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 1040;
  padding: 0 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
}

.nav-bar__logo {
  width: 48px;
  height: 48px;
  margin-left: 8px;
}

.nav-bar__end-section {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.nav-bar__btn:not(:first-child) {
  margin-right: 8px;
}

.nav-bar__submit-btn {
  margin-right: 16px;
}

.city-group {
  margin: 20px 0 50px;
}

.city-group__header {
  margin-bottom: 20px;
  color: #424242;
}

.city-group__button {
  border-top: 1px solid rgba(166, 38, 38, 0.56) !important;
}

.city-group__button h2 {
  font-size: inherit !important;
  line-height: inherit !important;
  font-weight: inherit !important;
}

.captcha__field .ui.input input {
  width: 115px;
  height: 40px;
  margin-right: 5px;
  text-align: center !important;
  letter-spacing: 3px;
  direction: ltr;
}

.text-input .ui.input input {
  padding: 12px;
  line-height: 24px;
  font-size: 16px;
}

.json-schema-form .ui.input input {
  width: 100%;
  height: 48px;
  padding: 0 25px;
  border: 2px solid rgba(0, 0, 0, 0.12);
  border-radius: 3px;
  line-height: 48px;
  background-color: #fff;
}

.json-schema-form .ui.input input[disabled],
.json-schema-form .ui.input input[readonly] {
  color: rgba(0, 0, 0, 0.32);
}

.json-schema-form .ui.input {
  width: 100%;
}

.json-schema-form__text-input .ui.input {
  width: 100%;
}

.city-dropdown {
  height: 38px;
}

.city-dropdown.ui.selection.dropdown {
  display: flex;
  align-items: center;
}

.city-dropdown.ui.selection.dropdown .menu > .message {
  text-align: center;
}

.city-home.computer {
  display: block !important;
  margin-top: 10px !important;
}

.city-home.mobile {
  display: none !important;
}

.city-home .cards,
.city-modal .cards {
  align-content: flex-start !important;
}

.selection.dropdown select + div.text {
  float: right;
}

@media (max-width: 500px) {
  .city-home.computer {
    display: none !important;
  }

  .city-home.mobile {
    display: block !important;
  }
}

.input > input {
  text-align: right !important;
}

.business-unavailable-message .message,
.not-found-message .message {
  font-size: 18px;
}

@media only screen and (max-width: 767px) {
  .ui.five.doubling.cards > .card {
    width: calc(50% - 2em) !important;
  }
}

.navbar .links .mobile-menu .text {
  display: none !important;
}

.navbar .links .mobile-menu .menu {
  min-width: 162px !important;
  margin-top: 8px !important;
}

.share-presentation .button.dropdown .text {
  display: none !important;
}

.share-presentation .button.dropdown span.text {
  display: inline !important;
}

.share-presentation .menu {
  left: 0 !important;
  right: auto !important;
  top: 120% !important;
}

.share-presentation .menu {
  direction: rtl !important;
  text-align: right !important;
}

.social-network {
  text-align: center;
}

.social-network__header {
  width: 100%;
  display: inline-block;
  margin-bottom: 15px;
}

.social-network__title {
  display: inline;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

.social-network__link {
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: #a62626;
  border-radius: 3px;
  color: #fff;
  text-align: center;
  line-height: 31px;
  margin: 0 4px;
}

.social-network__link:hover {
  color: #fff;
}

.home {
  padding: 0 50px !important;
}

.home .city-home .cards {
  min-height: auto !important;
  max-height: none !important;
  overflow: visible;
}

.home .description-container {
  background-color: #f5f5f5;
  padding: 80px 50px 0 40px !important;
}

.home .description-container .background-maker {
  display: block;
  width: calc(100% + 50px);
  min-height: calc(100vh - 63px);
  height: calc(100% + 16px);
  position: absolute;
  right: -50px;
  top: -16px;
  background-color: #f5f5f5;
}

.home .description-container .description {
  font-size: 14px !important;
  position: relative;
}

.home .description-container .description p {
  line-height: 25px !important;
}

.home .description-container .description p a {
  color: #a62626;
}

.home .description-container .social-network {
  position: relative;
  width: 100%;
  border-top: 1px solid #ededed;
  margin-top: 40px;
  padding-top: 30px;
}

.home .city-home-container {
  padding: 30px 100px !important;
}

@media (max-width: 1221px) {
  .home {
    padding: 0 !important;
  }
}

@media (max-width: 1100px) {
  .home .description-container {
    background-color: #fff !important;
    padding-top: 20px !important;
  }

  .home .description-container .background-maker {
    display: none !important;
  }
}

@media (max-width: 767px) {
  .home .description-container {
    padding: 20px 0 0 !important;
  }

  .home .description-container .description {
    text-align: center !important;
  }
}

@media (max-width: 500px) {
  .home {
    padding: 0 !important;
  }

  .home > .row {
    flex-direction: column !important;
  }

  .home .city-home-container {
    position: absolute !important;
    top: 45px !important;
    padding: 30px !important;
  }

  .home .description-container {
    margin-top: 70px !important;
    padding-top: 80px !important;
  }

  .home .description-container .description {
    text-align: right !important;
    padding: 0 20px !important;
  }
}

.ui.button:hover .icon {
  opacity: 0.85;
}

.ui.button:focus .icon {
  opacity: 0.85;
}

.ui.labeled.icon.loading.button .icon {
  background-color: transparent;
  box-shadow: none;
}

.ui.icon.button > .icon,
.ui.icon.buttons .button > .icon {
  opacity: 0.9;
  margin: 0 !important;
  vertical-align: top;
}

.ui.labeled.icon.button > .icon,
.ui.labeled.icon.buttons > .button > .icon {
  position: absolute;
  height: 100%;
  line-height: 1;
  border-radius: 0;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  text-align: center;
  margin: 0;
  width: 2.57142857em;
  background-color: rgba(0, 0, 0, 0.05);
  color: "";
  box-shadow: inset -1px 0 0 0 transparent;
  top: 0;
  left: 0;
}

.ui[class*="right labeled"].icon.button > .icon {
  left: auto;
  right: 0;
  border-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  box-shadow: inset 1px 0 0 0 transparent;
}

.ui.labeled.icon.button > .icon:after,
.ui.labeled.icon.button > .icon:before,
.ui.labeled.icon.buttons > .button > .icon:after,
.ui.labeled.icon.buttons > .button > .icon:before {
  display: block;
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.ui.labeled.icon.buttons .button > .icon {
  border-radius: 0;
}

.ui.labeled.icon.buttons .button:first-child > .icon {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.ui.labeled.icon.buttons .button:last-child > .icon {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.ui.vertical.labeled.icon.buttons .button:first-child > .icon {
  border-radius: 0;
  border-top-left-radius: 3px;
}

.ui.vertical.labeled.icon.buttons .button:last-child > .icon {
  border-radius: 0;
  border-bottom-left-radius: 3px;
}

.ui.circular.button > .icon {
  width: 1em;
  vertical-align: baseline;
}

.ui.container {
  display: block;
  max-width: 100% !important;
}

@media only screen and (max-width: 767px) {
  .ui.container {
    margin-left: 1em !important;
    margin-right: 1em !important;
  }

  .ui.container,
  .ui.grid.container {
    width: auto !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.container {
    width: 723px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.grid.container {
    width: calc(723px + 1.75rem) !important;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1099px) {
  .ui.container {
    width: 933px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.grid.container {
    width: calc(933px + 1.75rem) !important;
  }
}

@media only screen and (min-width: 1100px) {
  .ui.container {
    width: 1027px;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .ui.grid.container {
    width: calc(1027px + 1.75rem) !important;
  }
}

.ui.text.container {
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  max-width: 700px !important;
  line-height: 1.5;
  font-size: 1rem;
}

.ui.fluid.container {
  width: 100%;
}

.ui[class*="left aligned"].container {
  text-align: left;
}

.ui[class*="center aligned"].container {
  text-align: center;
}

.ui[class*="right aligned"].container {
  text-align: right;
}

.ui.divider > .icon {
  margin: 0;
  font-size: 0.875rem;
  height: 1em;
  vertical-align: middle;
}

i.icon {
  display: inline-block;
  opacity: 1;
  margin: 0 0.21875rem 0 0;
  width: 1.18em;
  height: 1em;
  font-family: Icons;
  font-style: normal;
  font-weight: 400;
  text-decoration: inherit;
  text-align: center;
  speak: none;
  font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

i.icon:before {
  background: 0 0 !important;
}

i.icon {
  font-size: 1em;
}

i.large.icon {
  line-height: 1;
  vertical-align: middle;
  font-size: 1.5em;
}

i.icons .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  margin: 0;
}

i.icons .icon:first-child {
  position: static;
  width: auto;
  height: auto;
  vertical-align: top;
  -webkit-transform: none;
  transform: none;
  margin-right: 0.21875rem;
}

i.icon.search:before {
  content: "\f002";
}

i.icon.home:before {
  content: "\f015";
}

i.icon.tablet:before {
  content: "\f10a";
}

i.icon.mobile:before {
  content: "\f10b";
}

i.icon.dropdown:before {
  content: "\f0d7";
}

i.icon.computer:before {
  content: "\f108";
}

.ui.input {
  position: relative;
  font-weight: 400;
  font-style: normal;
  display: inline-flex;
  color: rgba(0, 0, 0, 0.87);
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

.ui.input input::-webkit-input-placeholder {
  color: hsla(0, 0%, 74.9%, 0.87);
}

.ui.input input::-moz-placeholder {
  color: hsla(0, 0%, 74.9%, 0.87);
}

.ui.input input:-ms-input-placeholder {
  color: hsla(0, 0%, 74.9%, 0.87);
}

.ui.input input:active {
  border-color: rgba(0, 0, 0, 0.3);
  background: #fafafa;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
}

.ui.loading.loading.input > i.icon:before {
  border-radius: 437.5rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.loading.loading.input > i.icon:after,
.ui.loading.loading.input > i.icon:before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0 0 -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
}

.ui.loading.loading.input > i.icon:after {
  -webkit-animation: button-spin 0.6s linear;
  animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 437.5rem;
  border: 0.2em solid transparent;
  border-top-color: #767676;
  box-shadow: 0 0 0 1px transparent;
}

.ui.input input:focus {
  border-color: #85b7d9;
  background: #fff;
  color: rgba(0, 0, 0, 0.8);
  box-shadow: none;
}

.ui.input input:focus::-webkit-input-placeholder {
  color: hsla(0, 0%, 45.1%, 0.87);
}

.ui.input input:focus::-moz-placeholder {
  color: hsla(0, 0%, 45.1%, 0.87);
}

.ui.input input:focus:-ms-input-placeholder {
  color: hsla(0, 0%, 45.1%, 0.87);
}

.ui.transparent.icon.input > i.icon {
  width: 1.1em;
}

.ui.transparent[class*="left icon"].input > input {
  padding-left: 2em !important;
  padding-right: 0 !important;
}

.ui.icon.input > i.icon {
  cursor: default;
  position: absolute;
  line-height: 1;
  text-align: center;
  top: 0;
  right: 0;
  margin: 0;
  height: 100%;
  width: 2.67142857em;
  opacity: 0.5;
  border-radius: 0 3px 3px 0;
  transition: opacity 0.3s ease;
}

.ui.icon.input input {
  padding-right: 2.67142857em !important;
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

.ui[class*="left icon"].input > i.icon {
  right: auto;
  left: 1px;
  border-radius: 3px 0 0 3px;
}

.ui[class*="left icon"].input > input {
  padding-left: 2.67142857em !important;
  padding-right: 1em !important;
}

.ui.icon.input > input:focus ~ i.icon {
  opacity: 1;
}

.ui[class*="right labeled"].input input {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-right-color: transparent !important;
}

.ui[class*="right labeled"].input input:focus {
  border-right-color: #85b7d9 !important;
}

.ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"])
  > input {
  padding-right: 3.25em !important;
}

.ui[class*="corner labeled"].icon.input:not([class*="left corner labeled"])
  > .icon {
  margin-right: 1.25em;
}

.ui[class*="left corner labeled"].icon.input > input {
  padding-left: 3.25em !important;
}

.ui[class*="left corner labeled"].icon.input > .icon {
  margin-left: 1.25em;
}

.ui.action.input:not([class*="left action"]) > .dropdown:not(:first-child) {
  border-radius: 0;
}

.ui.action.input:not([class*="left action"]) > .dropdown:last-child {
  border-radius: 0 3px 3px 0;
}

.ui[class*="left action"].input > input {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-left-color: transparent !important;
}

.ui[class*="left action"].input > .dropdown {
  border-radius: 0;
}

.ui[class*="left action"].input > .dropdown:first-child {
  border-radius: 3px 0 0 3px;
}

.ui[class*="left action"].input > input:focus {
  border-left-color: #85b7d9 !important;
}

.ui.fluid.input {
  display: flex;
}

.ui.fluid.input > input {
  width: 0 !important;
}

.ui.input {
  font-size: 1em;
}

.ui.large.input {
  font-size: 1.14285714em;
}

.ui.label > .icon {
  width: auto;
  margin: 0 0.75em 0 0;
}

.ui.label > .detail .icon {
  margin: 0 0.25em 0 0;
}

.ui.corner.label .icon {
  cursor: default;
  position: relative;
  top: 0.64285714em;
  left: 0.78571429em;
  font-size: 1.14285714em;
  margin: 0;
}

.ui.left.corner.label .icon {
  left: -0.78571429em;
}

.ui.form .field > .selection.dropdown {
  width: 100%;
}

.ui.form .field > .selection.dropdown > .dropdown.icon {
  float: right;
}

.ui.form .inline.field > .selection.dropdown,
.ui.form .inline.fields .field > .selection.dropdown {
  width: auto;
}

.ui.form .inline.field > .selection.dropdown > .dropdown.icon,
.ui.form .inline.fields .field > .selection.dropdown > .dropdown.icon {
  float: none;
}

.ui.form .field .ui.input,
.ui.form .fields .field .ui.input,
.ui.form .wide.field .ui.input {
  width: 100%;
}

.ui.form .inline.field:not(.wide) .ui.input,
.ui.form .inline.fields .field:not(.wide) .ui.input {
  width: auto;
  vertical-align: middle;
}

.ui.form .field .ui.input input,
.ui.form .fields .field .ui.input input {
  width: auto;
}

.ui.form .eight.fields .ui.input input,
.ui.form .five.fields .ui.input input,
.ui.form .four.fields .ui.input input,
.ui.form .nine.fields .ui.input input,
.ui.form .seven.fields .ui.input input,
.ui.form .six.fields .ui.input input,
.ui.form .ten.fields .ui.input input,
.ui.form .three.fields .ui.input input,
.ui.form .two.fields .ui.input input,
.ui.form .wide.field .ui.input input {
  flex: 1 0 auto;
  width: 0;
}

.ui.form .message:first-child {
  margin-top: 0;
}

.ui.form .field.error .input,
.ui.form .fields.error .field .input {
  color: #9f3a38;
}

.ui.form .field.error .ui.dropdown,
.ui.form .field.error .ui.dropdown .text,
.ui.form .fields.error .field .ui.dropdown {
  background: #fff6f6;
  color: #9f3a38;
}

.ui.form .field.error .ui.dropdown,
.ui.form .field.error .ui.dropdown:hover,
.ui.form .fields.error .field .ui.dropdown,
.ui.form .fields.error .field .ui.dropdown:hover {
  border-color: #e0b4b4 !important;
}

.ui.form .field.error .ui.dropdown:hover .menu,
.ui.form .fields.error .field .ui.dropdown:hover .menu {
  border-color: #e0b4b4;
}

.ui.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0;
  margin: -0.875rem;
}

.ui[class*="very relaxed"].grid {
  margin-left: -2.1875rem;
  margin-right: -2.1875rem;
}

.ui.grid + .grid {
  margin-top: 0.875rem;
}

.ui.grid > .row > .column {
  position: relative;
  display: inline-block;
  width: 8.33333333%;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  vertical-align: top;
}

.ui.grid > * {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}

.ui.grid > .row {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: inherit;
  align-items: stretch;
  width: 100% !important;
  padding: 0.875rem 0;
}

.ui.grid > .row > .column {
  margin-top: 0;
  margin-bottom: 0;
}

.ui.grid > .row > .column > img,
.ui.grid > .row > img {
  max-width: 100%;
}

.ui.grid > .ui.grid:first-child {
  margin-top: 0;
}

.ui.grid > .ui.grid:last-child {
  margin-bottom: 0;
}

.ui.grid > .column:only-child,
.ui.grid > .row > .column:only-child,
.ui[class*="one column"].grid > .row > .column {
  width: 100%;
}

.ui[class*="two column"].grid > .row > .column {
  width: 50%;
}

.ui[class*="three column"].grid > .row > .column {
  width: 33.33333333%;
}

.ui[class*="four column"].grid > .row > .column {
  width: 25%;
}

.ui[class*="five column"].grid > .row > .column {
  width: 20%;
}

.ui[class*="six column"].grid > .row > .column {
  width: 16.66666667%;
}

.ui[class*="seven column"].grid > .row > .column {
  width: 14.28571429%;
}

.ui[class*="eight column"].grid > .row > .column {
  width: 12.5%;
}

.ui[class*="nine column"].grid > .row > .column {
  width: 11.11111111%;
}

.ui[class*="ten column"].grid > .row > .column {
  width: 10%;
}

.ui[class*="eleven column"].grid > .row > .column {
  width: 9.09090909%;
}

.ui[class*="twelve column"].grid > .row > .column {
  width: 8.33333333%;
}

.ui[class*="thirteen column"].grid > .row > .column {
  width: 7.69230769%;
}

.ui[class*="fourteen column"].grid > .row > .column {
  width: 7.14285714%;
}

.ui[class*="fifteen column"].grid > .row > .column {
  width: 6.66666667%;
}

.ui[class*="sixteen column"].grid > .row > .column {
  width: 6.25%;
}

.ui.grid > [class*="one column"].row > .column {
  width: 100% !important;
}

.ui.grid > [class*="two column"].row > .column {
  width: 50% !important;
}

.ui.grid > [class*="three column"].row > .column {
  width: 33.33333333% !important;
}

.ui.grid > [class*="four column"].row > .column {
  width: 25% !important;
}

.ui.grid > [class*="five column"].row > .column {
  width: 20% !important;
}

.ui.grid > [class*="six column"].row > .column {
  width: 16.66666667% !important;
}

.ui.grid > [class*="seven column"].row > .column {
  width: 14.28571429% !important;
}

.ui.grid > [class*="eight column"].row > .column {
  width: 12.5% !important;
}

.ui.grid > [class*="nine column"].row > .column {
  width: 11.11111111% !important;
}

.ui.grid > [class*="ten column"].row > .column {
  width: 10% !important;
}

.ui.grid > [class*="eleven column"].row > .column {
  width: 9.09090909% !important;
}

.ui.grid > [class*="twelve column"].row > .column {
  width: 8.33333333% !important;
}

.ui.grid > [class*="thirteen column"].row > .column {
  width: 7.69230769% !important;
}

.ui.grid > [class*="fourteen column"].row > .column {
  width: 7.14285714% !important;
}

.ui.grid > [class*="fifteen column"].row > .column {
  width: 6.66666667% !important;
}

.ui.grid > [class*="sixteen column"].row > .column {
  width: 6.25% !important;
}

.ui.column.grid > [class*="one wide"].column,
.ui.grid > .column.row > [class*="one wide"].column,
.ui.grid > .row > [class*="one wide"].column,
.ui.grid > [class*="one wide"].column {
  width: 8.33333333% !important;
}

.ui.column.grid > [class*="two wide"].column,
.ui.grid > .column.row > [class*="two wide"].column,
.ui.grid > .row > [class*="two wide"].column,
.ui.grid > [class*="two wide"].column {
  width: 16.66666667% !important;
}

.ui.column.grid > [class*="three wide"].column,
.ui.grid > .column.row > [class*="three wide"].column,
.ui.grid > .row > [class*="three wide"].column,
.ui.grid > [class*="three wide"].column {
  width: 25% !important;
}

.ui.column.grid > [class*="four wide"].column,
.ui.grid > .column.row > [class*="four wide"].column,
.ui.grid > .row > [class*="four wide"].column,
.ui.grid > [class*="four wide"].column {
  width: 33.33333333% !important;
}

.ui.column.grid > [class*="five wide"].column,
.ui.grid > .column.row > [class*="five wide"].column,
.ui.grid > .row > [class*="five wide"].column,
.ui.grid > [class*="five wide"].column {
  width: 41.66666667% !important;
}

.ui.column.grid > [class*="six wide"].column,
.ui.grid > .column.row > [class*="six wide"].column,
.ui.grid > .row > [class*="six wide"].column,
.ui.grid > [class*="six wide"].column {
  width: 50% !important;
}

.ui.column.grid > [class*="seven wide"].column,
.ui.grid > .column.row > [class*="seven wide"].column,
.ui.grid > .row > [class*="seven wide"].column,
.ui.grid > [class*="seven wide"].column {
  width: 58.33333333% !important;
}

.ui.column.grid > [class*="eight wide"].column,
.ui.grid > .column.row > [class*="eight wide"].column,
.ui.grid > .row > [class*="eight wide"].column,
.ui.grid > [class*="eight wide"].column {
  width: 66.66666667% !important;
}

.ui.column.grid > [class*="nine wide"].column,
.ui.grid > .column.row > [class*="nine wide"].column,
.ui.grid > .row > [class*="nine wide"].column,
.ui.grid > [class*="nine wide"].column {
  width: 75% !important;
}

.ui.column.grid > [class*="ten wide"].column,
.ui.grid > .column.row > [class*="ten wide"].column,
.ui.grid > .row > [class*="ten wide"].column,
.ui.grid > [class*="ten wide"].column {
  width: 83.33333333% !important;
}

.ui.column.grid > [class*="eleven wide"].column,
.ui.grid > .column.row > [class*="eleven wide"].column,
.ui.grid > .row > [class*="eleven wide"].column,
.ui.grid > [class*="eleven wide"].column {
  width: 91.66666667% !important;
}

.ui.column.grid > [class*="twelve wide"].column,
.ui.grid > .column.row > [class*="twelve wide"].column,
.ui.grid > .row > [class*="twelve wide"].column,
.ui.grid > [class*="twelve wide"].column {
  width: 100% !important;
}

.ui.column.grid > [class*="thirteen wide"].column,
.ui.grid > .column.row > [class*="thirteen wide"].column,
.ui.grid > .row > [class*="thirteen wide"].column,
.ui.grid > [class*="thirteen wide"].column {
  width: 108.33333333% !important;
}

.ui.column.grid > [class*="fourteen wide"].column,
.ui.grid > .column.row > [class*="fourteen wide"].column,
.ui.grid > .row > [class*="fourteen wide"].column,
.ui.grid > [class*="fourteen wide"].column {
  width: 116.66666667% !important;
}

.ui.column.grid > [class*="fifteen wide"].column,
.ui.grid > .column.row > [class*="fifteen wide"].column,
.ui.grid > .row > [class*="fifteen wide"].column,
.ui.grid > [class*="fifteen wide"].column {
  width: 125% !important;
}

.ui.column.grid > [class*="sixteen wide"].column,
.ui.grid > .column.row > [class*="sixteen wide"].column,
.ui.grid > .row > [class*="sixteen wide"].column,
.ui.grid > [class*="sixteen wide"].column {
  width: 133.33333333% !important;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .ui.column.grid > [class*="one wide mobile"].column,
  .ui.grid > .column.row > [class*="one wide mobile"].column,
  .ui.grid > .row > [class*="one wide mobile"].column,
  .ui.grid > [class*="one wide mobile"].column {
    width: 8.33333333% !important;
  }

  .ui.column.grid > [class*="two wide mobile"].column,
  .ui.grid > .column.row > [class*="two wide mobile"].column,
  .ui.grid > .row > [class*="two wide mobile"].column,
  .ui.grid > [class*="two wide mobile"].column {
    width: 16.66666667% !important;
  }

  .ui.column.grid > [class*="three wide mobile"].column,
  .ui.grid > .column.row > [class*="three wide mobile"].column,
  .ui.grid > .row > [class*="three wide mobile"].column,
  .ui.grid > [class*="three wide mobile"].column {
    width: 25% !important;
  }

  .ui.column.grid > [class*="four wide mobile"].column,
  .ui.grid > .column.row > [class*="four wide mobile"].column,
  .ui.grid > .row > [class*="four wide mobile"].column,
  .ui.grid > [class*="four wide mobile"].column {
    width: 33.33333333% !important;
  }

  .ui.column.grid > [class*="five wide mobile"].column,
  .ui.grid > .column.row > [class*="five wide mobile"].column,
  .ui.grid > .row > [class*="five wide mobile"].column,
  .ui.grid > [class*="five wide mobile"].column {
    width: 41.66666667% !important;
  }

  .ui.column.grid > [class*="six wide mobile"].column,
  .ui.grid > .column.row > [class*="six wide mobile"].column,
  .ui.grid > .row > [class*="six wide mobile"].column,
  .ui.grid > [class*="six wide mobile"].column {
    width: 50% !important;
  }

  .ui.column.grid > [class*="seven wide mobile"].column,
  .ui.grid > .column.row > [class*="seven wide mobile"].column,
  .ui.grid > .row > [class*="seven wide mobile"].column,
  .ui.grid > [class*="seven wide mobile"].column {
    width: 58.33333333% !important;
  }

  .ui.column.grid > [class*="eight wide mobile"].column,
  .ui.grid > .column.row > [class*="eight wide mobile"].column,
  .ui.grid > .row > [class*="eight wide mobile"].column,
  .ui.grid > [class*="eight wide mobile"].column {
    width: 66.66666667% !important;
  }

  .ui.column.grid > [class*="nine wide mobile"].column,
  .ui.grid > .column.row > [class*="nine wide mobile"].column,
  .ui.grid > .row > [class*="nine wide mobile"].column,
  .ui.grid > [class*="nine wide mobile"].column {
    width: 75% !important;
  }

  .ui.column.grid > [class*="ten wide mobile"].column,
  .ui.grid > .column.row > [class*="ten wide mobile"].column,
  .ui.grid > .row > [class*="ten wide mobile"].column,
  .ui.grid > [class*="ten wide mobile"].column {
    width: 83.33333333% !important;
  }

  .ui.column.grid > [class*="eleven wide mobile"].column,
  .ui.grid > .column.row > [class*="eleven wide mobile"].column,
  .ui.grid > .row > [class*="eleven wide mobile"].column,
  .ui.grid > [class*="eleven wide mobile"].column {
    width: 91.66666667% !important;
  }

  .ui.column.grid > [class*="twelve wide mobile"].column,
  .ui.grid > .column.row > [class*="twelve wide mobile"].column,
  .ui.grid > .row > [class*="twelve wide mobile"].column,
  .ui.grid > [class*="twelve wide mobile"].column {
    width: 100% !important;
  }

  .ui.column.grid > [class*="thirteen wide mobile"].column,
  .ui.grid > .column.row > [class*="thirteen wide mobile"].column,
  .ui.grid > .row > [class*="thirteen wide mobile"].column,
  .ui.grid > [class*="thirteen wide mobile"].column {
    width: 108.33333333% !important;
  }

  .ui.column.grid > [class*="fourteen wide mobile"].column,
  .ui.grid > .column.row > [class*="fourteen wide mobile"].column,
  .ui.grid > .row > [class*="fourteen wide mobile"].column,
  .ui.grid > [class*="fourteen wide mobile"].column {
    width: 116.66666667% !important;
  }

  .ui.column.grid > [class*="fifteen wide mobile"].column,
  .ui.grid > .column.row > [class*="fifteen wide mobile"].column,
  .ui.grid > .row > [class*="fifteen wide mobile"].column,
  .ui.grid > [class*="fifteen wide mobile"].column {
    width: 125% !important;
  }

  .ui.column.grid > [class*="sixteen wide mobile"].column,
  .ui.grid > .column.row > [class*="sixteen wide mobile"].column,
  .ui.grid > .row > [class*="sixteen wide mobile"].column,
  .ui.grid > [class*="sixteen wide mobile"].column {
    width: 133.33333333% !important;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.column.grid > [class*="one wide tablet"].column,
  .ui.grid > .column.row > [class*="one wide tablet"].column,
  .ui.grid > .row > [class*="one wide tablet"].column,
  .ui.grid > [class*="one wide tablet"].column {
    width: 8.33333333% !important;
  }

  .ui.column.grid > [class*="two wide tablet"].column,
  .ui.grid > .column.row > [class*="two wide tablet"].column,
  .ui.grid > .row > [class*="two wide tablet"].column,
  .ui.grid > [class*="two wide tablet"].column {
    width: 16.66666667% !important;
  }

  .ui.column.grid > [class*="three wide tablet"].column,
  .ui.grid > .column.row > [class*="three wide tablet"].column,
  .ui.grid > .row > [class*="three wide tablet"].column,
  .ui.grid > [class*="three wide tablet"].column {
    width: 25% !important;
  }

  .ui.column.grid > [class*="four wide tablet"].column,
  .ui.grid > .column.row > [class*="four wide tablet"].column,
  .ui.grid > .row > [class*="four wide tablet"].column,
  .ui.grid > [class*="four wide tablet"].column {
    width: 33.33333333% !important;
  }

  .ui.column.grid > [class*="five wide tablet"].column,
  .ui.grid > .column.row > [class*="five wide tablet"].column,
  .ui.grid > .row > [class*="five wide tablet"].column,
  .ui.grid > [class*="five wide tablet"].column {
    width: 41.66666667% !important;
  }

  .ui.column.grid > [class*="six wide tablet"].column,
  .ui.grid > .column.row > [class*="six wide tablet"].column,
  .ui.grid > .row > [class*="six wide tablet"].column,
  .ui.grid > [class*="six wide tablet"].column {
    width: 50% !important;
  }

  .ui.column.grid > [class*="seven wide tablet"].column,
  .ui.grid > .column.row > [class*="seven wide tablet"].column,
  .ui.grid > .row > [class*="seven wide tablet"].column,
  .ui.grid > [class*="seven wide tablet"].column {
    width: 58.33333333% !important;
  }

  .ui.column.grid > [class*="eight wide tablet"].column,
  .ui.grid > .column.row > [class*="eight wide tablet"].column,
  .ui.grid > .row > [class*="eight wide tablet"].column,
  .ui.grid > [class*="eight wide tablet"].column {
    width: 66.66666667% !important;
  }

  .ui.column.grid > [class*="nine wide tablet"].column,
  .ui.grid > .column.row > [class*="nine wide tablet"].column,
  .ui.grid > .row > [class*="nine wide tablet"].column,
  .ui.grid > [class*="nine wide tablet"].column {
    width: 75% !important;
  }

  .ui.column.grid > [class*="ten wide tablet"].column,
  .ui.grid > .column.row > [class*="ten wide tablet"].column,
  .ui.grid > .row > [class*="ten wide tablet"].column,
  .ui.grid > [class*="ten wide tablet"].column {
    width: 83.33333333% !important;
  }

  .ui.column.grid > [class*="eleven wide tablet"].column,
  .ui.grid > .column.row > [class*="eleven wide tablet"].column,
  .ui.grid > .row > [class*="eleven wide tablet"].column,
  .ui.grid > [class*="eleven wide tablet"].column {
    width: 91.66666667% !important;
  }

  .ui.column.grid > [class*="twelve wide tablet"].column,
  .ui.grid > .column.row > [class*="twelve wide tablet"].column,
  .ui.grid > .row > [class*="twelve wide tablet"].column,
  .ui.grid > [class*="twelve wide tablet"].column {
    width: 100% !important;
  }

  .ui.column.grid > [class*="thirteen wide tablet"].column,
  .ui.grid > .column.row > [class*="thirteen wide tablet"].column,
  .ui.grid > .row > [class*="thirteen wide tablet"].column,
  .ui.grid > [class*="thirteen wide tablet"].column {
    width: 108.33333333% !important;
  }

  .ui.column.grid > [class*="fourteen wide tablet"].column,
  .ui.grid > .column.row > [class*="fourteen wide tablet"].column,
  .ui.grid > .row > [class*="fourteen wide tablet"].column,
  .ui.grid > [class*="fourteen wide tablet"].column {
    width: 116.66666667% !important;
  }

  .ui.column.grid > [class*="fifteen wide tablet"].column,
  .ui.grid > .column.row > [class*="fifteen wide tablet"].column,
  .ui.grid > .row > [class*="fifteen wide tablet"].column,
  .ui.grid > [class*="fifteen wide tablet"].column {
    width: 125% !important;
  }

  .ui.column.grid > [class*="sixteen wide tablet"].column,
  .ui.grid > .column.row > [class*="sixteen wide tablet"].column,
  .ui.grid > .row > [class*="sixteen wide tablet"].column,
  .ui.grid > [class*="sixteen wide tablet"].column {
    width: 133.33333333% !important;
  }
}

@media only screen and (min-width: 992px) {
  .ui.column.grid > [class*="one wide computer"].column,
  .ui.grid > .column.row > [class*="one wide computer"].column,
  .ui.grid > .row > [class*="one wide computer"].column,
  .ui.grid > [class*="one wide computer"].column {
    width: 8.33333333% !important;
  }

  .ui.column.grid > [class*="two wide computer"].column,
  .ui.grid > .column.row > [class*="two wide computer"].column,
  .ui.grid > .row > [class*="two wide computer"].column,
  .ui.grid > [class*="two wide computer"].column {
    width: 16.66666667% !important;
  }

  .ui.column.grid > [class*="three wide computer"].column,
  .ui.grid > .column.row > [class*="three wide computer"].column,
  .ui.grid > .row > [class*="three wide computer"].column,
  .ui.grid > [class*="three wide computer"].column {
    width: 25% !important;
  }

  .ui.column.grid > [class*="four wide computer"].column,
  .ui.grid > .column.row > [class*="four wide computer"].column,
  .ui.grid > .row > [class*="four wide computer"].column,
  .ui.grid > [class*="four wide computer"].column {
    width: 33.33333333% !important;
  }

  .ui.column.grid > [class*="five wide computer"].column,
  .ui.grid > .column.row > [class*="five wide computer"].column,
  .ui.grid > .row > [class*="five wide computer"].column,
  .ui.grid > [class*="five wide computer"].column {
    width: 41.66666667% !important;
  }

  .ui.column.grid > [class*="six wide computer"].column,
  .ui.grid > .column.row > [class*="six wide computer"].column,
  .ui.grid > .row > [class*="six wide computer"].column,
  .ui.grid > [class*="six wide computer"].column {
    width: 50% !important;
  }

  .ui.column.grid > [class*="seven wide computer"].column,
  .ui.grid > .column.row > [class*="seven wide computer"].column,
  .ui.grid > .row > [class*="seven wide computer"].column,
  .ui.grid > [class*="seven wide computer"].column {
    width: 58.33333333% !important;
  }

  .ui.column.grid > [class*="eight wide computer"].column,
  .ui.grid > .column.row > [class*="eight wide computer"].column,
  .ui.grid > .row > [class*="eight wide computer"].column,
  .ui.grid > [class*="eight wide computer"].column {
    width: 66.66666667% !important;
  }

  .ui.column.grid > [class*="nine wide computer"].column,
  .ui.grid > .column.row > [class*="nine wide computer"].column,
  .ui.grid > .row > [class*="nine wide computer"].column,
  .ui.grid > [class*="nine wide computer"].column {
    width: 75% !important;
  }

  .ui.column.grid > [class*="ten wide computer"].column,
  .ui.grid > .column.row > [class*="ten wide computer"].column,
  .ui.grid > .row > [class*="ten wide computer"].column,
  .ui.grid > [class*="ten wide computer"].column {
    width: 83.33333333% !important;
  }

  .ui.column.grid > [class*="eleven wide computer"].column,
  .ui.grid > .column.row > [class*="eleven wide computer"].column,
  .ui.grid > .row > [class*="eleven wide computer"].column,
  .ui.grid > [class*="eleven wide computer"].column {
    width: 91.66666667% !important;
  }

  .ui.column.grid > [class*="twelve wide computer"].column,
  .ui.grid > .column.row > [class*="twelve wide computer"].column,
  .ui.grid > .row > [class*="twelve wide computer"].column,
  .ui.grid > [class*="twelve wide computer"].column {
    width: 100% !important;
  }

  .ui.column.grid > [class*="thirteen wide computer"].column,
  .ui.grid > .column.row > [class*="thirteen wide computer"].column,
  .ui.grid > .row > [class*="thirteen wide computer"].column,
  .ui.grid > [class*="thirteen wide computer"].column {
    width: 108.33333333% !important;
  }

  .ui.column.grid > [class*="fourteen wide computer"].column,
  .ui.grid > .column.row > [class*="fourteen wide computer"].column,
  .ui.grid > .row > [class*="fourteen wide computer"].column,
  .ui.grid > [class*="fourteen wide computer"].column {
    width: 116.66666667% !important;
  }

  .ui.column.grid > [class*="fifteen wide computer"].column,
  .ui.grid > .column.row > [class*="fifteen wide computer"].column,
  .ui.grid > .row > [class*="fifteen wide computer"].column,
  .ui.grid > [class*="fifteen wide computer"].column {
    width: 125% !important;
  }

  .ui.column.grid > [class*="sixteen wide computer"].column,
  .ui.grid > .column.row > [class*="sixteen wide computer"].column,
  .ui.grid > .row > [class*="sixteen wide computer"].column,
  .ui.grid > [class*="sixteen wide computer"].column {
    width: 133.33333333% !important;
  }
}

@media only screen and (min-width: 1100px) and (max-width: 1919px) {
  .ui.column.grid > [class*="one wide large screen"].column,
  .ui.grid > .column.row > [class*="one wide large screen"].column,
  .ui.grid > .row > [class*="one wide large screen"].column,
  .ui.grid > [class*="one wide large screen"].column {
    width: 8.33333333% !important;
  }

  .ui.column.grid > [class*="two wide large screen"].column,
  .ui.grid > .column.row > [class*="two wide large screen"].column,
  .ui.grid > .row > [class*="two wide large screen"].column,
  .ui.grid > [class*="two wide large screen"].column {
    width: 16.66666667% !important;
  }

  .ui.column.grid > [class*="three wide large screen"].column,
  .ui.grid > .column.row > [class*="three wide large screen"].column,
  .ui.grid > .row > [class*="three wide large screen"].column,
  .ui.grid > [class*="three wide large screen"].column {
    width: 25% !important;
  }

  .ui.column.grid > [class*="four wide large screen"].column,
  .ui.grid > .column.row > [class*="four wide large screen"].column,
  .ui.grid > .row > [class*="four wide large screen"].column,
  .ui.grid > [class*="four wide large screen"].column {
    width: 33.33333333% !important;
  }

  .ui.column.grid > [class*="five wide large screen"].column,
  .ui.grid > .column.row > [class*="five wide large screen"].column,
  .ui.grid > .row > [class*="five wide large screen"].column,
  .ui.grid > [class*="five wide large screen"].column {
    width: 41.66666667% !important;
  }

  .ui.column.grid > [class*="six wide large screen"].column,
  .ui.grid > .column.row > [class*="six wide large screen"].column,
  .ui.grid > .row > [class*="six wide large screen"].column,
  .ui.grid > [class*="six wide large screen"].column {
    width: 50% !important;
  }

  .ui.column.grid > [class*="seven wide large screen"].column,
  .ui.grid > .column.row > [class*="seven wide large screen"].column,
  .ui.grid > .row > [class*="seven wide large screen"].column,
  .ui.grid > [class*="seven wide large screen"].column {
    width: 58.33333333% !important;
  }

  .ui.column.grid > [class*="eight wide large screen"].column,
  .ui.grid > .column.row > [class*="eight wide large screen"].column,
  .ui.grid > .row > [class*="eight wide large screen"].column,
  .ui.grid > [class*="eight wide large screen"].column {
    width: 66.66666667% !important;
  }

  .ui.column.grid > [class*="nine wide large screen"].column,
  .ui.grid > .column.row > [class*="nine wide large screen"].column,
  .ui.grid > .row > [class*="nine wide large screen"].column,
  .ui.grid > [class*="nine wide large screen"].column {
    width: 75% !important;
  }

  .ui.column.grid > [class*="ten wide large screen"].column,
  .ui.grid > .column.row > [class*="ten wide large screen"].column,
  .ui.grid > .row > [class*="ten wide large screen"].column,
  .ui.grid > [class*="ten wide large screen"].column {
    width: 83.33333333% !important;
  }

  .ui.column.grid > [class*="eleven wide large screen"].column,
  .ui.grid > .column.row > [class*="eleven wide large screen"].column,
  .ui.grid > .row > [class*="eleven wide large screen"].column,
  .ui.grid > [class*="eleven wide large screen"].column {
    width: 91.66666667% !important;
  }

  .ui.column.grid > [class*="twelve wide large screen"].column,
  .ui.grid > .column.row > [class*="twelve wide large screen"].column,
  .ui.grid > .row > [class*="twelve wide large screen"].column,
  .ui.grid > [class*="twelve wide large screen"].column {
    width: 100% !important;
  }

  .ui.column.grid > [class*="thirteen wide large screen"].column,
  .ui.grid > .column.row > [class*="thirteen wide large screen"].column,
  .ui.grid > .row > [class*="thirteen wide large screen"].column,
  .ui.grid > [class*="thirteen wide large screen"].column {
    width: 108.33333333% !important;
  }

  .ui.column.grid > [class*="fourteen wide large screen"].column,
  .ui.grid > .column.row > [class*="fourteen wide large screen"].column,
  .ui.grid > .row > [class*="fourteen wide large screen"].column,
  .ui.grid > [class*="fourteen wide large screen"].column {
    width: 116.66666667% !important;
  }

  .ui.column.grid > [class*="fifteen wide large screen"].column,
  .ui.grid > .column.row > [class*="fifteen wide large screen"].column,
  .ui.grid > .row > [class*="fifteen wide large screen"].column,
  .ui.grid > [class*="fifteen wide large screen"].column {
    width: 125% !important;
  }

  .ui.column.grid > [class*="sixteen wide large screen"].column,
  .ui.grid > .column.row > [class*="sixteen wide large screen"].column,
  .ui.grid > .row > [class*="sixteen wide large screen"].column,
  .ui.grid > [class*="sixteen wide large screen"].column {
    width: 133.33333333% !important;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.column.grid > [class*="one wide widescreen"].column,
  .ui.grid > .column.row > [class*="one wide widescreen"].column,
  .ui.grid > .row > [class*="one wide widescreen"].column,
  .ui.grid > [class*="one wide widescreen"].column {
    width: 8.33333333% !important;
  }

  .ui.column.grid > [class*="two wide widescreen"].column,
  .ui.grid > .column.row > [class*="two wide widescreen"].column,
  .ui.grid > .row > [class*="two wide widescreen"].column,
  .ui.grid > [class*="two wide widescreen"].column {
    width: 16.66666667% !important;
  }

  .ui.column.grid > [class*="three wide widescreen"].column,
  .ui.grid > .column.row > [class*="three wide widescreen"].column,
  .ui.grid > .row > [class*="three wide widescreen"].column,
  .ui.grid > [class*="three wide widescreen"].column {
    width: 25% !important;
  }

  .ui.column.grid > [class*="four wide widescreen"].column,
  .ui.grid > .column.row > [class*="four wide widescreen"].column,
  .ui.grid > .row > [class*="four wide widescreen"].column,
  .ui.grid > [class*="four wide widescreen"].column {
    width: 33.33333333% !important;
  }

  .ui.column.grid > [class*="five wide widescreen"].column,
  .ui.grid > .column.row > [class*="five wide widescreen"].column,
  .ui.grid > .row > [class*="five wide widescreen"].column,
  .ui.grid > [class*="five wide widescreen"].column {
    width: 41.66666667% !important;
  }

  .ui.column.grid > [class*="six wide widescreen"].column,
  .ui.grid > .column.row > [class*="six wide widescreen"].column,
  .ui.grid > .row > [class*="six wide widescreen"].column,
  .ui.grid > [class*="six wide widescreen"].column {
    width: 50% !important;
  }

  .ui.column.grid > [class*="seven wide widescreen"].column,
  .ui.grid > .column.row > [class*="seven wide widescreen"].column,
  .ui.grid > .row > [class*="seven wide widescreen"].column,
  .ui.grid > [class*="seven wide widescreen"].column {
    width: 58.33333333% !important;
  }

  .ui.column.grid > [class*="eight wide widescreen"].column,
  .ui.grid > .column.row > [class*="eight wide widescreen"].column,
  .ui.grid > .row > [class*="eight wide widescreen"].column,
  .ui.grid > [class*="eight wide widescreen"].column {
    width: 66.66666667% !important;
  }

  .ui.column.grid > [class*="nine wide widescreen"].column,
  .ui.grid > .column.row > [class*="nine wide widescreen"].column,
  .ui.grid > .row > [class*="nine wide widescreen"].column,
  .ui.grid > [class*="nine wide widescreen"].column {
    width: 75% !important;
  }

  .ui.column.grid > [class*="ten wide widescreen"].column,
  .ui.grid > .column.row > [class*="ten wide widescreen"].column,
  .ui.grid > .row > [class*="ten wide widescreen"].column,
  .ui.grid > [class*="ten wide widescreen"].column {
    width: 83.33333333% !important;
  }

  .ui.column.grid > [class*="eleven wide widescreen"].column,
  .ui.grid > .column.row > [class*="eleven wide widescreen"].column,
  .ui.grid > .row > [class*="eleven wide widescreen"].column,
  .ui.grid > [class*="eleven wide widescreen"].column {
    width: 91.66666667% !important;
  }

  .ui.column.grid > [class*="twelve wide widescreen"].column,
  .ui.grid > .column.row > [class*="twelve wide widescreen"].column,
  .ui.grid > .row > [class*="twelve wide widescreen"].column,
  .ui.grid > [class*="twelve wide widescreen"].column {
    width: 100% !important;
  }

  .ui.column.grid > [class*="thirteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="thirteen wide widescreen"].column,
  .ui.grid > .row > [class*="thirteen wide widescreen"].column,
  .ui.grid > [class*="thirteen wide widescreen"].column {
    width: 108.33333333% !important;
  }

  .ui.column.grid > [class*="fourteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="fourteen wide widescreen"].column,
  .ui.grid > .row > [class*="fourteen wide widescreen"].column,
  .ui.grid > [class*="fourteen wide widescreen"].column {
    width: 116.66666667% !important;
  }

  .ui.column.grid > [class*="fifteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="fifteen wide widescreen"].column,
  .ui.grid > .row > [class*="fifteen wide widescreen"].column,
  .ui.grid > [class*="fifteen wide widescreen"].column {
    width: 125% !important;
  }

  .ui.column.grid > [class*="sixteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="sixteen wide widescreen"].column,
  .ui.grid > .row > [class*="sixteen wide widescreen"].column,
  .ui.grid > [class*="sixteen wide widescreen"].column {
    width: 133.33333333% !important;
  }
}

.ui.centered.grid > .row {
  text-align: center;
  justify-content: center;
}

.ui.grid > .relaxed.row > .column,
.ui.relaxed.grid > .row > .column {
  padding-left: 1.3125rem;
  padding-right: 1.3125rem;
}

.ui.grid > [class*="very relaxed"].row > .column,
.ui[class*="very relaxed"].grid > .row > .column {
  padding-left: 2.1875rem;
  padding-right: 2.1875rem;
}

[class*="horizontally padded"].ui.grid {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

[class*="vertically padded"].ui.grid {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.ui.grid [class*="left floated"].column {
  margin-right: auto;
}

.ui.grid [class*="right floated"].column {
  margin-left: auto;
}

.ui.divided.grid:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0 0 0 rgba(34, 36, 38, 0.15);
}

.ui[class*="vertically divided"].grid > .row > .column {
  margin-top: 0.875rem;
  margin-bottom: 0.875rem;
  padding-top: 0;
  padding-bottom: 0;
}

.ui[class*="vertically divided"].grid > .row {
  margin-top: 0;
  margin-bottom: 0;
}

.ui.divided.grid:not([class*="vertically divided"]) > .column:first-child,
.ui.divided.grid:not([class*="vertically divided"])
  > .row
  > .column:first-child {
  box-shadow: none;
}

.ui[class*="vertically divided"].grid > .row:first-child > .column {
  margin-top: 0;
}

.ui.grid > .divided.row > .column {
  box-shadow: -1px 0 0 0 rgba(34, 36, 38, 0.15);
}

.ui.grid > .divided.row > .column:first-child {
  box-shadow: none;
}

.ui[class*="vertically divided"].grid > .row {
  position: relative;
}

.ui[class*="vertically divided"].grid > .row:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: calc(100% - 1.75rem);
  height: 1px;
  margin: 0 0.875rem;
  box-shadow: 0 -1px 0 0 rgba(34, 36, 38, 0.15);
}

.ui[class*="vertically divided"].grid > .row:first-child:before {
  box-shadow: none;
}

.ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0 0 0 hsla(0, 0%, 100%, 0.1);
}

.ui.inverted.divided.grid:not([class*="vertically divided"])
  > .row
  > .column:first-child {
  box-shadow: none;
}

.ui.inverted[class*="vertically divided"].grid > .row:before {
  box-shadow: 0 -1px 0 0 hsla(0, 0%, 100%, 0.1);
}

.ui.relaxed[class*="vertically divided"].grid > .row:before {
  margin-left: 1.3125rem;
  margin-right: 1.3125rem;
  width: calc(100% - 2.625rem);
}

.ui[class*="very relaxed"][class*="vertically divided"].grid > .row:before {
  margin-left: 4.375rem;
  margin-right: 4.375rem;
  width: calc(100% - 4.375rem);
}

.ui.celled.grid > .row {
  width: 100% !important;
  margin: 0;
  padding: 0;
  box-shadow: 0 -1px 0 0 #d4d4d5;
}

.ui.celled.grid > .row > .column {
  box-shadow: -1px 0 0 0 #d4d4d5;
}

.ui.celled.grid > .column:first-child,
.ui.celled.grid > .row > .column:first-child {
  box-shadow: none;
}

.ui.celled.grid > .row > .column {
  padding: 1em;
}

.ui.relaxed.celled.grid > .row > .column {
  padding: 1.5em;
}

.ui[class*="very relaxed"].celled.grid > .row > .column {
  padding: 2em;
}

.ui[class*="internally celled"].grid {
  box-shadow: none;
  margin: 0;
}

.ui[class*="internally celled"].grid > .row:first-child,
.ui[class*="internally celled"].grid > .row > .column:first-child {
  box-shadow: none;
}

.ui.grid > .row > [class*="top aligned"].column,
.ui.grid > [class*="top aligned"].row > .column,
.ui[class*="top aligned"].grid > .row > .column {
  flex-direction: column;
  vertical-align: top;
  align-self: flex-start !important;
}

.ui.grid > .row > [class*="middle aligned"].column,
.ui.grid > [class*="middle aligned"].row > .column,
.ui[class*="middle aligned"].grid > .row > .column {
  flex-direction: column;
  vertical-align: middle;
  align-self: center !important;
}

.ui.grid > .row > [class*="bottom aligned"].column,
.ui.grid > [class*="bottom aligned"].row > .column,
.ui[class*="bottom aligned"].grid > .row > .column {
  flex-direction: column;
  vertical-align: bottom;
  align-self: flex-end !important;
}

.ui.grid > .stretched.row > .column,
.ui.stretched.grid > .column,
.ui.stretched.grid > .row > .column {
  display: inline-flex !important;
  align-self: stretch;
  flex-direction: column;
}

.ui.grid > .stretched.row > .column > *,
.ui.stretched.grid > .column > *,
.ui.stretched.grid > .row > .column > * {
  flex-grow: 1;
}

.ui.grid > .row > [class*="left aligned"].column.column,
.ui.grid > [class*="left aligned"].column.column,
.ui.grid > [class*="left aligned"].row > .column,
.ui[class*="left aligned"].grid > .column,
.ui[class*="left aligned"].grid > .row > .column {
  text-align: left;
  align-self: inherit;
}

.ui.grid > .row > [class*="center aligned"].column.column,
.ui.grid > [class*="center aligned"].column.column,
.ui.grid > [class*="center aligned"].row > .column,
.ui[class*="center aligned"].grid > .column,
.ui[class*="center aligned"].grid > .row > .column {
  text-align: center;
  align-self: inherit;
}

.ui[class*="center aligned"].grid {
  justify-content: center;
}

.ui.grid > .row > [class*="right aligned"].column.column,
.ui.grid > [class*="right aligned"].column.column,
.ui.grid > [class*="right aligned"].row > .column,
.ui[class*="right aligned"].grid > .column,
.ui[class*="right aligned"].grid > .row > .column {
  text-align: right;
  align-self: inherit;
}

.ui.grid > .justified.row > .column,
.ui.justified.grid > .column,
.ui.justified.grid > .row > .column {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

.ui.grid > [class*="equal width"].row > .column,
.ui[class*="equal width"].grid > .row > .column {
  display: inline-block;
  flex-grow: 1;
}

.ui.grid > [class*="equal width"].row > .wide.column,
.ui[class*="equal width"].grid > .row > .wide.column,
.ui[class*="equal width"].grid > .wide.column {
  flex-grow: 0;
}

@media only screen and (max-width: 767px) {
  .ui.grid > [class*="mobile reversed"].row,
  .ui[class*="mobile reversed"].grid,
  .ui[class*="mobile reversed"].grid > .row {
    flex-direction: row-reverse;
  }

  .ui[class*="mobile vertically reversed"].grid {
    flex-direction: column-reverse;
  }

  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
    > .column:first-child,
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
    > .row
    > .column:first-child {
    box-shadow: -1px 0 0 0 rgba(34, 36, 38, 0.15);
  }

  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
    > .column:last-child,
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"])
    > .row
    > .column:last-child {
    box-shadow: none;
  }

  .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"]
    > .row:first-child:before {
    box-shadow: 0 -1px 0 0 rgba(34, 36, 38, 0.15);
  }

  .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"]
    > .row:last-child:before {
    box-shadow: none;
  }

  .ui[class*="mobile reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0 0 0 #d4d4d5;
  }

  .ui[class*="mobile reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.grid > [class*="tablet reversed"].row,
  .ui[class*="tablet reversed"].grid,
  .ui[class*="tablet reversed"].grid > .row {
    flex-direction: row-reverse;
  }

  .ui[class*="tablet vertically reversed"].grid {
    flex-direction: column-reverse;
  }

  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
    > .column:first-child,
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
    > .row
    > .column:first-child {
    box-shadow: -1px 0 0 0 rgba(34, 36, 38, 0.15);
  }

  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
    > .column:last-child,
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"])
    > .row
    > .column:last-child {
    box-shadow: none;
  }

  .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"]
    > .row:first-child:before {
    box-shadow: 0 -1px 0 0 rgba(34, 36, 38, 0.15);
  }

  .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"]
    > .row:last-child:before {
    box-shadow: none;
  }

  .ui[class*="tablet reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0 0 0 #d4d4d5;
  }

  .ui[class*="tablet reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none;
  }
}

@media only screen and (min-width: 992px) {
  .ui.grid > [class*="computer reversed"].row,
  .ui[class*="computer reversed"].grid,
  .ui[class*="computer reversed"].grid > .row {
    flex-direction: row-reverse;
  }

  .ui[class*="computer vertically reversed"].grid {
    flex-direction: column-reverse;
  }

  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
    > .column:first-child,
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
    > .row
    > .column:first-child {
    box-shadow: -1px 0 0 0 rgba(34, 36, 38, 0.15);
  }

  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
    > .column:last-child,
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"])
    > .row
    > .column:last-child {
    box-shadow: none;
  }

  .ui.grid[class*="vertically divided"][class*="computer vertically reversed"]
    > .row:first-child:before {
    box-shadow: 0 -1px 0 0 rgba(34, 36, 38, 0.15);
  }

  .ui.grid[class*="vertically divided"][class*="computer vertically reversed"]
    > .row:last-child:before {
    box-shadow: none;
  }

  .ui[class*="computer reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0 0 0 #d4d4d5;
  }

  .ui[class*="computer reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.doubling.grid {
    width: auto;
  }

  .ui.doubling.grid > .row,
  .ui.grid > .doubling.row {
    margin: 0 !important;
    padding: 0 !important;
  }

  .ui.doubling.grid > .row > .column,
  .ui.grid > .doubling.row > .column {
    display: inline-block !important;
    padding-top: 0.875rem !important;
    padding-bottom: 0.875rem !important;
    box-shadow: none !important;
    margin: 0;
  }

  .ui.grid > [class*="two column"].doubling.row.row > .column,
  .ui[class*="two column"].doubling.grid > .row > .column {
    width: 100% !important;
  }

  .ui.grid > [class*="four column"].doubling.row.row > .column,
  .ui.grid > [class*="three column"].doubling.row.row > .column,
  .ui[class*="four column"].doubling.grid > .row > .column,
  .ui[class*="three column"].doubling.grid > .row > .column {
    width: 50% !important;
  }

  .ui.grid > [class*="five column"].doubling.row.row > .column,
  .ui.grid > [class*="seven column"].doubling.row.row > .column,
  .ui.grid > [class*="six column"].doubling.row.row > .column,
  .ui[class*="five column"].doubling.grid > .row > .column,
  .ui[class*="seven column"].doubling.grid > .row > .column,
  .ui[class*="six column"].doubling.grid > .row > .column {
    width: 33.33333333% !important;
  }

  .ui.grid > [class*="eight column"].doubling.row.row > .column,
  .ui.grid > [class*="nine column"].doubling.row.row > .column,
  .ui[class*="eight column"].doubling.grid > .row > .column,
  .ui[class*="nine column"].doubling.grid > .row > .column {
    width: 25% !important;
  }

  .ui.grid > [class*="eleven column"].doubling.row.row > .column,
  .ui.grid > [class*="ten column"].doubling.row.row > .column,
  .ui[class*="eleven column"].doubling.grid > .row > .column,
  .ui[class*="ten column"].doubling.grid > .row > .column {
    width: 20% !important;
  }

  .ui.grid > [class*="thirteen column"].doubling.row.row > .column,
  .ui.grid > [class*="twelve column"].doubling.row.row > .column,
  .ui[class*="thirteen column"].doubling.grid > .row > .column,
  .ui[class*="twelve column"].doubling.grid > .row > .column {
    width: 16.66666667% !important;
  }

  .ui.grid > [class*="fifteen column"].doubling.row.row > .column,
  .ui.grid > [class*="fourteen column"].doubling.row.row > .column,
  .ui[class*="fifteen column"].doubling.grid > .row > .column,
  .ui[class*="fourteen column"].doubling.grid > .row > .column {
    width: 14.28571429% !important;
  }

  .ui.grid > [class*="sixteen column"].doubling.row.row > .column,
  .ui[class*="sixteen column"].doubling.grid > .row > .column {
    width: 12.5% !important;
  }
}

@media only screen and (max-width: 767px) {
  .ui.doubling.grid > .row,
  .ui.grid > .doubling.row {
    margin: 0 !important;
    padding: 0 !important;
  }

  .ui.doubling.grid > .row > .column,
  .ui.grid > .doubling.row > .column {
    padding-top: 0.875rem !important;
    padding-bottom: 0.875rem !important;
    margin: 0 !important;
    box-shadow: none !important;
  }

  .ui.grid > [class*="two column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="two column"].doubling:not(.stackable).grid > .row > .column {
    width: 100% !important;
  }

  .ui.grid > [class*="eight column"].doubling:not(.stackable).row.row > .column,
  .ui.grid > [class*="five column"].doubling:not(.stackable).row.row > .column,
  .ui.grid > [class*="four column"].doubling:not(.stackable).row.row > .column,
  .ui.grid > [class*="seven column"].doubling:not(.stackable).row.row > .column,
  .ui.grid > [class*="six column"].doubling:not(.stackable).row.row > .column,
  .ui.grid > [class*="three column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="eight column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="five column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="four column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="seven column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="six column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="three column"].doubling:not(.stackable).grid > .row > .column {
    width: 50% !important;
  }

  .ui.grid
    > [class*="eleven column"].doubling:not(.stackable).row.row
    > .column,
  .ui.grid > [class*="nine column"].doubling:not(.stackable).row.row > .column,
  .ui.grid > [class*="ten column"].doubling:not(.stackable).row.row > .column,
  .ui.grid
    > [class*="thirteen column"].doubling:not(.stackable).row.row
    > .column,
  .ui.grid
    > [class*="twelve column"].doubling:not(.stackable).row.row
    > .column,
  .ui[class*="eleven column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="nine column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="ten column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="thirteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="twelve column"].doubling:not(.stackable).grid > .row > .column {
    width: 33.33333333% !important;
  }

  .ui.grid
    > [class*="fifteen column"].doubling:not(.stackable).row.row
    > .column,
  .ui.grid
    > [class*="fourteen column"].doubling:not(.stackable).row.row
    > .column,
  .ui.grid
    > [class*="sixteen column"].doubling:not(.stackable).row.row
    > .column,
  .ui[class*="fifteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="fourteen column"].doubling:not(.stackable).grid > .row > .column,
  .ui[class*="sixteen column"].doubling:not(.stackable).grid > .row > .column {
    width: 25% !important;
  }

  .ui.grid > .stackable.stackable.row > .column,
  .ui.stackable.grid > .column.grid > .column,
  .ui.stackable.grid > .column.row > .column,
  .ui.stackable.grid > .row > .column,
  .ui.stackable.grid > .row > .wide.column,
  .ui.stackable.grid > .wide.column {
    width: 100% !important;
    margin: 0 !important;
    box-shadow: none !important;
    padding: 0.875rem !important;
  }

  .ui.stackable.grid:not(.vertically) > .row {
    margin: 0;
    padding: 0;
  }

  .ui.container > .ui.stackable.grid > .column,
  .ui.container > .ui.stackable.grid > .row > .column {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .ui.stackable.celled.grid > .row:first-child > .column:first-child,
  .ui.stackable.divided.grid > .row:first-child > .column:first-child {
    border-top: none !important;
  }

  .ui.inverted.stackable.celled.grid > .row > .column,
  .ui.inverted.stackable.divided.grid > .row > .column {
    border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  }

  .ui.stackable.celled.grid > .row > .column,
  .ui.stackable.divided:not(.vertically).grid > .row > .column {
    border-top: 1px solid rgba(34, 36, 38, 0.15);
    box-shadow: none !important;
    padding-top: 1.75rem !important;
    padding-bottom: 1.75rem !important;
  }

  .ui.stackable.celled.grid > .row {
    box-shadow: none !important;
  }

  .ui.stackable.divided:not(.vertically).grid > .row > .column {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

.ui.menu {
  display: flex;
  margin: 0.875rem 0;
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  background: #fff;
  font-weight: 400;
  border: 1px solid rgba(34, 36, 38, 0.15);
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  min-height: 2.85714286em;
}

.ui.menu:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.ui.menu:first-child {
  margin-top: 0;
}

.ui.menu:last-child {
  margin-bottom: 0;
}

.ui.menu .menu {
  margin: 0;
}

.ui.menu:not(.vertical) > .menu {
  display: flex;
}

.ui.menu .item > i.icon {
  opacity: 0.9;
  float: none;
  margin: 0 0.35714286em 0 0;
}

.ui.menu > .container,
.ui.menu > .grid {
  display: flex;
  align-items: inherit;
  flex-direction: inherit;
}

.ui.menu .item > .input {
  width: 100%;
}

.ui.menu:not(.vertical) .item > .input {
  position: relative;
  top: 0;
  margin: -0.5em 0;
}

.ui.menu .item > .input input {
  font-size: 1em;
  padding-top: 0.57142857em;
  padding-bottom: 0.57142857em;
}

.ui.menu .item > i.dropdown.icon {
  padding: 0;
  float: right;
  margin: 0 0 0 1em;
}

.ui.menu .dropdown.item .menu {
  min-width: calc(100% - 1px);
  border-radius: 0 0 3px 3px;
  background: #fff;
  margin: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  flex-direction: column !important;
}

.ui.secondary.menu .dropdown.item > .menu,
.ui.text.menu .dropdown.item > .menu {
  border-radius: 3px;
  margin-top: 0.35714286em;
}

.ui.menu .pointing.dropdown.item .menu {
  margin-top: 0.75em;
}

.ui.inverted.menu .search.dropdown.item > .search,
.ui.inverted.menu .search.dropdown.item > .text {
  color: hsla(0, 0%, 100%, 0.9);
}

.ui.vertical.menu .dropdown.item > .icon {
  float: right;
  content: "\f0da";
  margin-left: 1em;
}

.ui.vertical.menu .dropdown.item .menu {
  left: 100%;
  min-width: 0;
  margin: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0 3px 3px 3px;
}

.ui.vertical.menu .dropdown.item.upward .menu {
  bottom: 0;
}

.ui.vertical.menu .dropdown.item:not(.upward) .menu {
  top: 0;
}

@media only screen and (max-width: 767px) {
  .ui.menu > .ui.container {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

.ui.menu .active.item > i.icon {
  opacity: 1;
}

.ui.menu:not(.vertical) .left.menu {
  display: flex;
  margin-right: auto !important;
}

.ui.vertical.menu .item > i.icon {
  width: 1.18em;
  float: right;
  margin: 0 0 0 0.5em;
}

.ui.vertical.menu .item > .label + i.icon {
  float: none;
  margin: 0 0.5em 0 0;
}

.ui.vertical.menu .item > .menu {
  margin: 0.5em -1.14285714em 0;
}

.ui.pagination.menu .icon.item i.icon {
  vertical-align: top;
}

.ui.vertical.secondary.menu .item:not(.dropdown) > .menu {
  margin: 0 -0.92857143em;
}

.ui.text.menu {
  background: none transparent;
  border-radius: 0;
  box-shadow: none;
  border: none;
  margin: 1em -0.5em;
}

.ui.vertical.text.menu .item > i.icon {
  float: none;
  margin: 0 0.35714286em 0 0;
}

.ui.vertical.text.menu .item:not(.dropdown) > .menu {
  margin: 0;
}

.ui.fluid.text.menu {
  margin-left: 0;
  margin-right: 0;
}

.ui.icon.menu .icon:before {
  opacity: 1;
}

.ui.menu .icon.item > .icon {
  width: auto;
  margin: 0 auto;
}

@media only screen and (max-width: 767px) {
  .ui.stackable.menu .left.menu {
    margin-right: 0 !important;
  }

  .ui.stackable.menu .left.menu {
    flex-direction: column;
  }
}

.ui.menu.fluid {
  width: 100% !important;
}

.ui[class*="top fixed"].menu {
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
}

.ui[class*="top fixed"].menu {
  border-top: none;
  border-left: none;
  border-right: none;
}

.ui[class*="right fixed"].menu {
  border-top: none;
  border-bottom: none;
  border-right: none;
  top: 0;
  right: 0;
  left: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}

.ui[class*="bottom fixed"].menu {
  border-bottom: none;
  border-left: none;
  border-right: none;
  bottom: 0;
  left: 0;
  top: auto;
  right: auto;
}

.ui[class*="left fixed"].menu {
  border-top: none;
  border-bottom: none;
  border-left: none;
  top: 0;
  left: 0;
  right: auto;
  bottom: auto;
  width: auto;
  height: 100%;
}

.ui.fixed.menu + .ui.grid {
  padding-top: 2.40625rem;
}

.ui[class*="top attached"].menu {
  bottom: 0;
  margin-bottom: 0;
  top: 0;
  margin-top: 0.875rem;
  border-radius: 3px 3px 0 0;
}

.ui.menu[class*="top attached"]:first-child {
  margin-top: 0;
}

.ui[class*="bottom attached"].menu {
  bottom: 0;
  margin-top: 0;
  top: 0;
  margin-bottom: 0.875rem;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15), none;
  border-radius: 0 0 3px 3px;
}

.ui[class*="bottom attached"].menu:last-child {
  margin-bottom: 0;
}

.ui.menu {
  font-size: 0.875rem;
}

.ui.large.menu {
  font-size: 0.9375rem;
}

.ui.message {
  position: relative;
  min-height: 1em;
  margin: 1em 0;
  background: #f8f8f9;
  padding: 1em 1.5em;
  line-height: 1.4285em;
  color: rgba(0, 0, 0, 0.87);
  transition: opacity 0.1s ease, color 0.1s ease, background 0.1s ease,
    box-shadow 0.1s ease;
  border-radius: 3px;
  box-shadow: inset 0 0 0 1px rgba(34, 36, 38, 0.22), 0 0 0 0 transparent;
}

.ui.message:first-child {
  margin-top: 0;
}

.ui.message:last-child {
  margin-bottom: 0;
}

.ui.message p {
  opacity: 0.85;
  margin: 0.75em 0;
}

.ui.message p:first-child {
  margin-top: 0;
}

.ui.message p:last-child {
  margin-bottom: 0;
}

.ui.message > .icon {
  margin-right: 0.6em;
}

.ui.message > :first-child {
  margin-top: 0;
}

.ui.message > :last-child {
  margin-bottom: 0;
}

.ui.dropdown .menu > .message {
  margin: 0 -1px;
}

.ui.icon.message {
  display: flex;
  width: 100%;
  align-items: center;
}

.ui.message {
  font-size: 1em;
}

.ui.large.message {
  font-size: 1.14285714em;
}

.ui.table > .icon {
  vertical-align: baseline;
}

.ui.table > .icon:only-child {
  margin: 0;
}

.ui.table td.four.wide,
.ui.table th.four.wide {
  width: 33.33333333%;
}

.ui.table td.five.wide,
.ui.table th.five.wide {
  width: 41.66666667%;
}

.ui.table td.eight.wide,
.ui.table th.eight.wide {
  width: 66.66666667%;
}

.ui.table td.twelve.wide,
.ui.table th.twelve.wide {
  width: 100%;
}

.ui.card,
.ui.cards > .card {
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.1s ease, -webkit-transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    -webkit-transform 0.1s ease;
  z-index: "";
}

.ui.card {
  margin: 1em 0;
}

.ui.card a,
.ui.cards > .card a {
  cursor: pointer;
}

.ui.card:first-child {
  margin-top: 0;
}

.ui.card:last-child {
  margin-bottom: 0;
}

.ui.cards {
  display: flex;
  margin: -0.875em -0.5em;
  flex-wrap: wrap;
}

.ui.cards > .card {
  display: flex;
  margin: 0.875em 0.5em;
  float: none;
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

.ui.cards ~ .ui.cards {
  margin-top: 0.875em;
}

.ui.card > :first-child,
.ui.cards > .card > :first-child {
  border-radius: 3px 3px 0 0 !important;
  border-top: none !important;
}

.ui.card > :last-child,
.ui.cards > .card > :last-child {
  border-radius: 0 0 3px 3px !important;
}

.ui.card > :only-child,
.ui.cards > .card > :only-child {
  border-radius: 3px !important;
}

.ui.card > .content > .header + .description,
.ui.card > .content > .meta + .description,
.ui.cards > .card > .content > .header + .description,
.ui.cards > .card > .content > .meta + .description {
  margin-top: 0.5em;
}

.ui.card [class*="left floated"],
.ui.cards > .card [class*="left floated"] {
  float: left;
}

.ui.card [class*="right floated"],
.ui.cards > .card [class*="right floated"] {
  float: right;
}

.ui.card [class*="left aligned"],
.ui.cards > .card [class*="left aligned"] {
  text-align: left;
}

.ui.card [class*="center aligned"],
.ui.cards > .card [class*="center aligned"] {
  text-align: center;
}

.ui.card [class*="right aligned"],
.ui.cards > .card [class*="right aligned"] {
  text-align: right;
}

.ui.card > .content > .description,
.ui.cards > .card > .content > .description {
  clear: both;
  color: rgba(0, 0, 0, 0.68);
}

.ui.raised.cards a.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.15),
    0 2px 10px 0 rgba(34, 36, 38, 0.25);
}

.ui.raised.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34, 36, 38, 0.12),
    0 2px 10px 0 rgba(34, 36, 38, 0.15);
}

.ui.fluid.card {
  width: 100%;
  max-width: 9999px;
}

.ui.cards a.card,
.ui.link.cards .card,
a.ui.card {
  -webkit-transform: none;
  transform: none;
}

.ui.cards a.card:hover,
.ui.link.cards .card:hover,
a.ui.card:hover {
  cursor: pointer;
  z-index: 5;
  background: #fff;
  border: none;
  box-shadow: 0 1px 3px 0 #bcbdbd, 0 0 0 1px #d4d4d5;
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
}

.ui.red.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #a62626, 0 1px 3px 0 #d4d4d5;
}

.ui.red.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #971b1b, 0 1px 3px 0 #bcbdbd;
}

.ui.orange.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #f2711c, 0 1px 3px 0 #d4d4d5;
}

.ui.orange.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #f26202, 0 1px 3px 0 #bcbdbd;
}

.ui.yellow.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #fbbd08, 0 1px 3px 0 #d4d4d5;
}

.ui.yellow.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #eaae00, 0 1px 3px 0 #bcbdbd;
}

.ui.olive.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #b5cc18, 0 1px 3px 0 #d4d4d5;
}

.ui.olive.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #a7bd0d, 0 1px 3px 0 #bcbdbd;
}

.ui.green.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #2f7f33, 0 1px 3px 0 #d4d4d5;
}

.ui.green.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #256f28, 0 1px 3px 0 #bcbdbd;
}

.ui.teal.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #00b5ad, 0 1px 3px 0 #d4d4d5;
}

.ui.teal.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #009c95, 0 1px 3px 0 #bcbdbd;
}

.ui.blue.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #2185d0, 0 1px 3px 0 #d4d4d5;
}

.ui.blue.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #1678c2, 0 1px 3px 0 #bcbdbd;
}

.ui.violet.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #6435c9, 0 1px 3px 0 #d4d4d5;
}

.ui.violet.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #5829bb, 0 1px 3px 0 #bcbdbd;
}

.ui.purple.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #a333c8, 0 1px 3px 0 #d4d4d5;
}

.ui.purple.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #9627ba, 0 1px 3px 0 #bcbdbd;
}

.ui.pink.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #e03997, 0 1px 3px 0 #d4d4d5;
}

.ui.pink.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #e61a8d, 0 1px 3px 0 #bcbdbd;
}

.ui.brown.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #a5673f, 0 1px 3px 0 #d4d4d5;
}

.ui.brown.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #975b33, 0 1px 3px 0 #bcbdbd;
}

.ui.grey.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #767676, 0 1px 3px 0 #d4d4d5;
}

.ui.grey.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #838383, 0 1px 3px 0 #bcbdbd;
}

.ui.black.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #000, 0 1px 3px 0 #d4d4d5;
}

.ui.black.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5, 0 2px 0 0 #0d0d0d, 0 1px 3px 0 #bcbdbd;
}

.ui.one.cards > .card {
  width: 100%;
}

.ui.two.cards > .card {
  width: calc(50% - 2em);
  margin-left: 1em;
  margin-right: 1em;
}

.ui.three.cards > .card {
  width: calc(33.33333% - 2em);
  margin-left: 1em;
  margin-right: 1em;
}

.ui.four.cards {
  margin-left: -0.75em;
  margin-right: -0.75em;
}

.ui.four.cards > .card {
  width: calc(25% - 1.5em);
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.ui.five.cards {
  margin-left: -0.75em;
  margin-right: -0.75em;
}

.ui.five.cards > .card {
  width: calc(20% - 1.5em);
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.ui.six.cards > .card {
  width: calc(16.66667% - 1.5em);
  margin-left: 0.75em;
  margin-right: 0.75em;
}

.ui.seven.cards > .card {
  width: calc(14.28571% - 1em);
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.ui.eight.cards {
  margin-left: -0.5em;
  margin-right: -0.5em;
}

.ui.eight.cards > .card {
  width: calc(12.5% - 1em);
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 11px;
}

.ui.nine.cards > .card {
  width: calc(11.11111% - 1em);
  margin-left: 0.5em;
  margin-right: 0.5em;
  font-size: 10px;
}

.ui.ten.cards > .card {
  width: calc(10% - 1em);
  margin-left: 0.5em;
  margin-right: 0.5em;
}

@media only screen and (max-width: 767px) {
  .ui.two.doubling.cards > .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .ui.three.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.four.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.five.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.six.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.seven.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.eight.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.nine.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.ten.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .ui.two.doubling.cards > .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .ui.three.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.four.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.five.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.six.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em;
  }

  .ui.eight.doubling.cards > .card {
    width: calc(33.33333% - 2em);
    margin-left: 1em;
    margin-right: 1em;
  }

  .ui.eight.doubling.cards {
    margin-left: -0.75em;
    margin-right: -0.75em;
  }

  .ui.eight.doubling.cards > .card {
    width: calc(25% - 1.5em);
    margin-left: 0.75em;
    margin-right: 0.75em;
  }

  .ui.nine.doubling.cards > .card {
    width: calc(25% - 1.5em);
    margin-left: 0.75em;
    margin-right: 0.75em;
  }

  .ui.ten.doubling.cards > .card {
    width: calc(20% - 1.5em);
    margin-left: 0.75em;
    margin-right: 0.75em;
  }
}

@media only screen and (max-width: 767px) {
  .ui.stackable.cards .card:first-child {
    margin-top: 0 !important;
  }

  .ui.stackable.cards > .card {
    display: block !important;
    height: auto !important;
    margin: 1em;
    padding: 0 !important;
    width: calc(100% - 2em) !important;
  }
}

.ui.cards > .card {
  font-size: 1em;
}

.ui.accordion .accordion .title .dropdown.icon,
.ui.accordion .title .dropdown.icon {
  display: inline-block;
  float: none;
  opacity: 1;
  width: 1.25em;
  height: 1em;
  margin: 0 0.21875rem 0 0;
  padding: 0;
  font-size: 1em;
  transition: opacity 0.1s ease, -webkit-transform 0.1s ease;
  transition: transform 0.1s ease, opacity 0.1s ease;
  transition: transform 0.1s ease, opacity 0.1s ease,
    -webkit-transform 0.1s ease;
  vertical-align: baseline;
  -webkit-transform: none;
  transform: none;
}

.ui.accordion.menu .item .title > .dropdown.icon {
  float: right;
  margin: 0.21425em 0 0 1em;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.ui.accordion .ui.header .dropdown.icon {
  font-size: 1em;
  margin: 0 0.21875rem 0 0;
}

.ui.accordion .accordion .active.title .dropdown.icon,
.ui.accordion .active.title .dropdown.icon,
.ui.accordion.menu .item .active.title > .dropdown.icon {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.ui.accordion .accordion .title .dropdown.icon,
.ui.accordion .title .dropdown.icon {
  font-family: Accordion;
  line-height: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}

.ui.accordion .accordion .title .dropdown.icon:before,
.ui.accordion .title .dropdown.icon:before {
  content: "\f0da";
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

.ui.dropdown .menu {
  cursor: auto;
  position: absolute;
  display: none;
  outline: 0;
  top: 100%;
  min-width: -webkit-max-content;
  min-width: -moz-max-content;
  min-width: max-content;
  margin: 0;
  padding: 0;
  background: #fff;
  font-size: 1em;
  text-shadow: none;
  text-align: left;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  transition: opacity 0.1s ease;
  z-index: 11;
  will-change: transform, opacity;
}

.ui.dropdown .menu > * {
  white-space: nowrap;
}

.ui.dropdown > select {
  display: none !important;
}

.ui.dropdown > .dropdown.icon {
  position: relative;
  font-size: 0.85714286em;
  margin: 0 0 0 1em;
}

.ui.dropdown .menu > .item .dropdown.icon {
  width: auto;
  float: right;
  margin: 0 0 0 1em;
}

.ui.dropdown .menu > .item .dropdown.icon + .text {
  margin-right: 1em;
}

.ui.dropdown > .text {
  display: inline-block;
  transition: none;
}

.ui.dropdown > .text > [class*="right floated"] {
  float: right !important;
  margin-right: 0 !important;
  margin-left: 1em !important;
}

.ui.dropdown > .text > [class*="left floated"] {
  float: left !important;
  margin-left: 0 !important;
  margin-right: 1em !important;
}

.ui.dropdown.dropdown .menu > .input {
  width: auto;
  display: flex;
  margin: 1rem 0.6875rem;
  min-width: 8.75rem;
}

.ui.dropdown .menu > .header + .input {
  margin-top: 0;
}

.ui.dropdown .menu > .input:not(.transparent) .icon {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

.ui.dropdown .menu > .item > .description,
.ui.dropdown > .text > .description {
  float: right;
  margin: 0 0 0 1em;
  color: rgba(0, 0, 0, 0.4);
}

.ui.dropdown .menu > .message {
  padding: 0.6875rem 1rem;
  font-weight: 400;
}

.ui.dropdown .menu .menu {
  top: 0 !important;
  left: 100%;
  right: auto;
  margin: 0 0 0 -0.5em !important;
  border-radius: 3px !important;
  z-index: 21 !important;
}

.ui.dropdown .menu .menu:after {
  display: none;
}

.ui.dropdown .menu > .item > .icon,
.ui.dropdown > .text > .icon,
.ui.dropdown > .text > img {
  margin-top: 0;
}

.ui.dropdown .menu > .item > .icon,
.ui.dropdown > .text > .icon,
.ui.dropdown > .text > img {
  margin-left: 0;
  float: none;
  margin-right: 0.6875rem;
}

.ui.dropdown > .text > img {
  display: inline-block;
  vertical-align: top;
  width: auto;
  margin-top: -0.5em;
  margin-bottom: -0.5em;
  max-height: 2em;
}

.ui.buttons > .ui.dropdown:last-child .menu,
.ui.menu .right.dropdown.item .menu,
.ui.menu .right.menu .dropdown:last-child .menu {
  left: auto;
  right: 0;
}

.ui.label.dropdown .menu {
  min-width: 100%;
}

.ui.dropdown.icon.button > .dropdown.icon {
  margin: 0;
}

.ui.button.dropdown .menu {
  min-width: 100%;
}

.ui.selection.dropdown {
  cursor: pointer;
  word-wrap: break-word;
  line-height: 1em;
  white-space: normal;
  outline: 0;
  -webkit-transform: rotate(0);
  transform: rotate(0);
  min-width: 14em;
  min-height: 2.71428571em;
  background: #fff;
  display: inline-block;
  padding: 0.78571429em 2.1em 0.78571429em 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  transition: box-shadow 0.1s ease, width 0.1s ease;
}

select.ui.dropdown {
  height: 38px;
  padding: 0.5em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  visibility: visible;
}

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

.ui.selection.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
  border-top-width: 0 !important;
  width: auto;
  outline: 0;
  margin: 0 -1px;
  min-width: calc(100% + 2px);
  width: calc(100% + 2px);
  border-radius: 0 0 3px 3px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  transition: opacity 0.1s ease;
}

.ui.selection.dropdown .menu:after,
.ui.selection.dropdown .menu:before {
  display: none;
}

.ui.selection.dropdown .menu > .message {
  padding: 0.6875rem 1rem;
}

@media only screen and (max-width: 767px) {
  .ui.selection.dropdown .menu {
    max-height: 7.425rem;
  }
}

@media only screen and (min-width: 768px) {
  .ui.selection.dropdown .menu {
    max-height: 9.9rem;
  }
}

@media only screen and (min-width: 992px) {
  .ui.selection.dropdown .menu {
    max-height: 14.85rem;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.selection.dropdown .menu {
    max-height: 19.8rem;
  }
}

.ui.selection.dropdown:hover {
  border-color: rgba(34, 36, 38, 0.35);
  box-shadow: none;
}

.ui.selection.active.dropdown .menu {
  border-color: #96c8da;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}

.ui.selection.dropdown:focus {
  border-color: #96c8da;
  box-shadow: none;
}

.ui.selection.dropdown:focus .menu {
  border-color: #96c8da;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}

.ui.selection.active.dropdown:hover .menu {
  border-color: #96c8da;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
}

.ui.active.selection.dropdown > .dropdown.icon,
.ui.visible.selection.dropdown > .dropdown.icon {
  opacity: 1;
  z-index: 3;
}

.ui.active.empty.selection.dropdown .menu {
  border: none !important;
  box-shadow: none !important;
}

.ui.search.dropdown {
  min-width: "";
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
  padding: inherit;
  position: absolute;
  z-index: 2;
}

.ui.search.dropdown > .text {
  cursor: text;
  position: relative;
  left: 1px;
  z-index: 3;
}

.ui.search.selection.dropdown > input.search {
  line-height: 1.21428571em;
  padding: 0.67857143em 2.1em 0.67857143em 1em;
}

.ui.search.dropdown.active > input.search,
.ui.search.dropdown.visible > input.search {
  cursor: auto;
}

.ui.search.dropdown.active > .text,
.ui.search.dropdown.visible > .text {
  pointer-events: none;
}

.ui.active.search.dropdown input.search:focus + .text .icon {
  opacity: 0.45;
}

.ui.active.search.dropdown input.search:focus + .text {
  color: hsla(0, 0%, 45.1%, 0.87) !important;
}

.ui.search.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
}

@media only screen and (max-width: 767px) {
  .ui.search.dropdown .menu {
    max-height: 7.425rem;
  }
}

@media only screen and (min-width: 768px) {
  .ui.search.dropdown .menu {
    max-height: 9.9rem;
  }
}

@media only screen and (min-width: 992px) {
  .ui.search.dropdown .menu {
    max-height: 14.85rem;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.search.dropdown .menu {
    max-height: 19.8rem;
  }
}

.ui.multiple.dropdown .menu {
  cursor: auto;
}

.ui.multiple.search.dropdown > input.search {
  cursor: text;
}

.ui.multiple.dropdown .dropdown.icon {
  margin: "";
  padding: "";
}

.ui.multiple.dropdown > .text {
  position: static;
  padding: 0;
  max-width: 100%;
  margin: 0.45238095em 0 0.45238095em 0.64285714em;
  line-height: 1.21428571em;
}

.ui.multiple.dropdown > .label ~ input.search {
  margin-left: 0.14285714em !important;
}

.ui.multiple.dropdown > .label ~ .text {
  display: none;
}

.ui.multiple.search.dropdown > .text {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  padding: inherit;
  margin: 0.45238095em 0 0.45238095em 0.64285714em;
  line-height: 1.21428571em;
}

.ui.multiple.search.dropdown > .label ~ .text {
  display: none;
}

.ui.multiple.search.dropdown > input.search {
  position: static;
  padding: 0;
  max-width: 100%;
  margin: 0.45238095em 0 0.45238095em 0.64285714em;
  width: 2.2em;
  line-height: 1.21428571em;
}

.ui.inline.dropdown .dropdown.icon {
  margin: 0 0.5em 0 0.21428571em;
  vertical-align: baseline;
}

.ui.inline.dropdown > .text {
  font-weight: 700;
}

.ui.inline.dropdown .menu {
  cursor: auto;
  margin-top: 0.21428571em;
  border-radius: 3px;
}

.ui.loading.dropdown > i.icon {
  height: 1em !important;
}

.ui.loading.selection.dropdown > i.icon {
  padding: 1.5em 1.28571429em !important;
}

.ui.loading.dropdown > i.icon:before {
  border-radius: 437.5rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.loading.dropdown > i.icon:after,
.ui.loading.dropdown > i.icon:before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0 0 -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
}

.ui.loading.dropdown > i.icon:after {
  box-shadow: 0 0 0 1px transparent;
  -webkit-animation: dropdown-spin 0.6s linear;
  animation: dropdown-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 437.5rem;
  border: 0.2em solid transparent;
  border-top-color: #767676;
}

.ui.loading.dropdown.button > i.icon:after,
.ui.loading.dropdown.button > i.icon:before {
  display: none;
}

.ui.default.dropdown:not(.button) > .text,
.ui.dropdown:not(.button) > .default.text {
  color: hsla(0, 0%, 74.9%, 0.87);
}

.ui.default.dropdown:not(.button) > input:focus ~ .text,
.ui.dropdown:not(.button) > input:focus ~ .default.text {
  color: hsla(0, 0%, 45.1%, 0.87);
}

.ui.loading.dropdown > .text {
  transition: none;
}

.ui.dropdown.error > .default.text,
.ui.dropdown.error > .text {
  color: #9f3a38;
}

.ui.dropdown.error > .menu,
.ui.dropdown.error > .menu .menu {
  border-color: #e0b4b4;
}

.ui.dropdown .menu {
  left: 0;
}

.ui.dropdown .right.menu > .menu {
  left: 100% !important;
  right: auto !important;
  border-radius: 3px !important;
}

.ui.dropdown > .left.menu {
  left: auto !important;
  right: 0 !important;
}

.ui.dropdown .menu .left.menu,
.ui.dropdown > .left.menu .menu {
  left: auto;
  right: 100%;
  margin: 0 -0.5em 0 0 !important;
  border-radius: 3px !important;
}

.ui.dropdown .item .left.dropdown.icon,
.ui.dropdown .left.menu .item .dropdown.icon {
  width: auto;
  float: left;
  margin: 0;
}

.ui.dropdown .item .left.dropdown.icon + .text,
.ui.dropdown .left.menu .item .dropdown.icon + .text {
  margin-left: 1em;
  margin-right: 0;
}

.ui.upward.dropdown > .menu {
  top: auto;
  bottom: 100%;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.08);
  border-radius: 3px 3px 0 0;
}

.ui.upward.selection.dropdown .menu {
  border-top-width: 1px !important;
  border-bottom-width: 0 !important;
  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.08);
}

.ui.upward.active.selection.dropdown:hover .menu {
  box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, 0.08);
}

.ui.scrolling.dropdown .menu {
  overflow-x: hidden;
  overflow-y: auto;
}

.ui.scrolling.dropdown .menu {
  overflow-x: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-overflow-scrolling: touch;
}

.ui.scrolling.dropdown .menu {
  overflow-y: auto;
  min-width: 100% !important;
  width: auto !important;
}

@media (-ms-high-contrast: none) {
  .ui.scrolling.dropdown .menu {
    min-width: calc(100% - 17px);
  }
}

@media only screen and (max-width: 767px) {
  .ui.scrolling.dropdown .menu {
    max-height: 9.5rem;
  }
}

@media only screen and (min-width: 768px) {
  .ui.scrolling.dropdown .menu {
    max-height: 14.25rem;
  }
}

@media only screen and (min-width: 992px) {
  .ui.scrolling.dropdown .menu {
    max-height: 19rem;
  }
}

@media only screen and (min-width: 1920px) {
  .ui.scrolling.dropdown .menu {
    max-height: 19rem;
  }
}

.ui.simple.dropdown .menu:after,
.ui.simple.dropdown .menu:before {
  display: none;
}

.ui.simple.dropdown .menu {
  position: absolute;
  display: block;
  overflow: hidden;
  top: -9999px !important;
  opacity: 0;
  width: 0;
  height: 0;
  transition: opacity 0.1s ease;
}

.ui.simple.active.dropdown > .menu,
.ui.simple.dropdown:hover > .menu {
  overflow: visible;
  width: auto;
  height: auto;
  top: 100% !important;
  opacity: 1;
}

.ui.simple.dropdown:hover > .menu > .item:hover > .menu,
.ui.simple.dropdown > .menu > .item:active > .menu {
  overflow: visible;
  width: auto;
  height: auto;
  top: 0 !important;
  left: 100% !important;
  opacity: 1;
}

.ui.simple.disabled.dropdown:hover .menu {
  display: none;
  height: 0;
  width: 0;
  overflow: hidden;
}

.ui.simple.visible.dropdown > .menu {
  display: block;
}

.ui.fluid.dropdown {
  display: block;
  width: 100%;
  min-width: 0;
}

.ui.fluid.dropdown > .dropdown.icon {
  float: right;
}

.ui.floating.dropdown .menu {
  left: 0;
  right: auto;
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
    0 2px 10px 0 rgba(34, 36, 38, 0.15) !important;
  border-radius: 3px !important;
}

.ui.floating.dropdown > .menu {
  margin-top: 0.5em !important;
  border-radius: 3px !important;
}

.ui.pointing.dropdown > .menu {
  top: 100%;
  margin-top: 0.6875rem;
  border-radius: 3px;
}

.ui.pointing.dropdown > .menu:after {
  display: block;
  position: absolute;
  pointer-events: none;
  content: "";
  visibility: visible;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 0.5em;
  height: 0.5em;
  box-shadow: -1px -1px 0 0 rgba(34, 36, 38, 0.15);
  background: #fff;
  z-index: 2;
  top: -0.25em;
  left: 50%;
  margin: 0 0 0 -0.25em;
}

.ui.top.left.pointing.dropdown > .menu {
  top: 100%;
  bottom: auto;
  left: 0;
  right: auto;
  margin: 1em 0 0;
}

.ui.top.left.pointing.dropdown > .menu:after {
  top: -0.25em;
  left: 1em;
  right: auto;
  margin: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.ui.top.right.pointing.dropdown > .menu {
  top: 100%;
  bottom: auto;
  right: 0;
  left: auto;
  margin: 1em 0 0;
}

.ui.top.pointing.dropdown > .left.menu:after,
.ui.top.right.pointing.dropdown > .menu:after {
  top: -0.25em;
  left: auto !important;
  right: 1em !important;
  margin: 0;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.ui.left.pointing.dropdown > .menu {
  top: 0;
  left: 100%;
  right: auto;
  margin: 0 0 0 1em;
}

.ui.left.pointing.dropdown > .menu:after {
  top: 1em;
  left: -0.25em;
  margin: 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu {
  left: auto !important;
  right: 100% !important;
  margin: 0 1em 0 0;
}

.ui.left:not(.top):not(.bottom).pointing.dropdown > .left.menu:after {
  top: 1em;
  left: auto;
  right: -0.25em;
  margin: 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.ui.right.pointing.dropdown > .menu {
  top: 0;
  left: auto;
  right: 100%;
  margin: 0 1em 0 0;
}

.ui.right.pointing.dropdown > .menu:after {
  top: 1em;
  left: auto;
  right: -0.25em;
  margin: 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}

.ui.bottom.pointing.dropdown > .menu {
  top: auto;
  bottom: 100%;
  left: 0;
  right: auto;
  margin: 0 0 1em;
}

.ui.bottom.pointing.dropdown > .menu:after {
  top: auto;
  bottom: -0.25em;
  right: auto;
  margin: 0;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.ui.bottom.pointing.dropdown > .menu .menu {
  top: auto !important;
  bottom: 0 !important;
}

.ui.bottom.left.pointing.dropdown > .menu {
  left: 0;
  right: auto;
}

.ui.bottom.left.pointing.dropdown > .menu:after {
  left: 1em;
  right: auto;
}

.ui.bottom.right.pointing.dropdown > .menu {
  right: 0;
  left: auto;
}

.ui.bottom.right.pointing.dropdown > .menu:after {
  left: auto;
  right: 1em;
}

.ui.pointing.upward.dropdown .menu,
.ui.top.pointing.upward.dropdown .menu {
  top: auto !important;
  bottom: 100% !important;
  margin: 0 0 0.6875rem;
  border-radius: 3px;
}

.ui.pointing.upward.dropdown .menu:after,
.ui.top.pointing.upward.dropdown .menu:after {
  top: 100% !important;
  bottom: auto !important;
  box-shadow: 1px 1px 0 0 rgba(34, 36, 38, 0.15);
  margin: -0.25em 0 0;
}

.ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu {
  top: auto !important;
  bottom: 0 !important;
  margin: 0 1em 0 0;
}

.ui.right.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {
  top: auto !important;
  bottom: 0 !important;
  margin: 0 0 1em;
  box-shadow: -1px -1px 0 0 rgba(34, 36, 38, 0.15);
}

.ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu {
  top: auto !important;
  bottom: 0 !important;
  margin: 0 0 0 1em;
}

.ui.left.pointing.upward.dropdown:not(.top):not(.bottom) .menu:after {
  top: auto !important;
  bottom: 0 !important;
  margin: 0 0 1em;
  box-shadow: -1px -1px 0 0 rgba(34, 36, 38, 0.15);
}

.ui.dropdown > .dropdown.icon {
  font-family: Dropdown;
  line-height: 1;
  height: 1em;
  width: 1.23em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  width: auto;
}

.ui.dropdown > .dropdown.icon:before {
  content: "\f0d7";
}

.ui.dropdown .menu .item .dropdown.icon:before {
  content: "\f0da";
}

.ui.dropdown .item .left.dropdown.icon:before,
.ui.dropdown .left.menu .item .dropdown.icon:before {
  content: "\f0d9";
}

.ui.vertical.menu .dropdown.item > .dropdown.icon:before {
  content: "\f0da";
}

.ui.modal > .icon:first-child + * {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

.ui.modal > .content > .description {
  display: block;
  flex: 1 0 auto;
  min-width: 0;
  align-self: top;
}

.ui.modal > .content > .icon + .description,
.ui.modal > .content > .image + .description {
  flex: 0 1 auto;
  min-width: "";
  width: auto;
  padding-left: 2em;
}

.ui.modal > .content > .image > i.icon {
  margin: 0;
  opacity: 1;
  width: auto;
  line-height: 1;
  font-size: 7rem;
}

@media only screen and (max-width: 767px) {
  .ui.modal > .content > .image > i.icon {
    font-size: 4.375rem;
    text-align: center;
  }

  .ui.modal .content > .description {
    display: block;
    width: 100% !important;
    margin: 0 !important;
    padding: 0.875rem 0 !important;
    box-shadow: none;
  }
}

.ui.search {
  position: relative;
}

.ui.search .prompt ~ .search.icon {
  cursor: pointer;
}

.ui.search > .results .result .description {
  margin-top: 0;
  font-size: 0.92857143em;
  color: rgba(0, 0, 0, 0.4);
}

.ui.search > .results > .message {
  padding: 1em;
}

.ui.search > .results > .message .description {
  margin-top: 0.21875rem;
  font-size: 1em;
  color: rgba(0, 0, 0, 0.87);
}

.ui.loading.search .input > i.icon:before {
  border-radius: 437.5rem;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
}

.ui.loading.search .input > i.icon:after,
.ui.loading.search .input > i.icon:before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.64285714em 0 0 -0.64285714em;
  width: 1.28571429em;
  height: 1.28571429em;
}

.ui.loading.search .input > i.icon:after {
  -webkit-animation: button-spin 0.6s linear;
  animation: button-spin 0.6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 437.5rem;
  border: 0.2em solid transparent;
  border-top-color: #767676;
  box-shadow: 0 0 0 1px transparent;
}

.ui.search > .results .result.active .description {
  color: rgba(0, 0, 0, 0.85);
}

.ui.search {
  font-size: 1em;
}

.ui.large.search {
  font-size: 1.14285714em;
}

.transition {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.no-pointer-event {
  pointer-events: none;
}

.kt-text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.kt-icon-social-linkedin:before {
  content: "\e964";
}

.kt-icon-social-aparat:before {
  content: "\ea34";
}

.kt-icon-chat-bubble:before {
  content: "\e997";
}

.kt-icon-social-twitter:before {
  content: "\e9a6";
}

.kt-icon-social-instagram:before {
  content: "\e9a7";
}

.kt-icon-place:before {
  content: "\e9c4";
}

.kt-icon-person:before {
  content: "\e9c9";
}

.kt-divider {
  height: 1px;
  margin: 0;
  box-sizing: border-box;
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
}

.kt-divider--padded {
  margin: 8px 0;
}

.kt-divider--vertical {
  display: inline-block;
  height: 1.5rem;
  width: 1px;
}

.kt-divider--vertical.kt-divider--padded {
  margin: 0 8px;
}

.kt-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  overflow: hidden;
  transition: color 0.36s ease, background-color 0.36s ease,
    box-shadow 0.36s ease, border-color 0.36s ease, -webkit-transform 0.36s ease;
  transition: color 0.36s ease, background-color 0.36s ease,
    box-shadow 0.36s ease, border-color 0.36s ease, transform 0.36s ease;
  transition: color 0.36s ease, background-color 0.36s ease,
    box-shadow 0.36s ease, border-color 0.36s ease, transform 0.36s ease,
    -webkit-transform 0.36s ease;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.56);
  position: relative;
  height: 2.5rem;
  padding: 0 16px;
  border-radius: 4px;
  min-width: 6rem;
  font-size: 1rem;
  line-height: normal;
}

.kt-button:focus,
.kt-button:hover {
  background-color: rgba(31, 31, 31, 0.56);
}

.kt-button:active {
  background-color: rgba(0, 0, 0, 0.6);
}

.kt-button:focus {
  outline: none;
}

.kt-button:disabled {
  color: rgba(0, 0, 0, 0.32);
  cursor: not-allowed;
  box-shadow: none;
  background-color: #f5f5f5;
}

.kt-button:disabled:focus,
.kt-button:disabled:hover {
  box-shadow: none;
  -webkit-transform: none;
  transform: none;
  background-color: #f5f5f5;
}

.kt-button:disabled:active {
  background-color: #f5f5f5;
}

.kt-button.kt-button--primary {
  background-color: #a62626;
}

.kt-button.kt-button--primary:focus,
.kt-button.kt-button--primary:hover {
  background-color: #be3737;
}

.kt-button.kt-button--primary:active {
  background-color: #9d1b1b;
}

.kt-button.kt-button--primary:disabled,
.kt-button.kt-button--primary:disabled:active,
.kt-button.kt-button--primary:disabled:focus,
.kt-button.kt-button--primary:disabled:hover {
  background-color: #f5f5f5;
}

.kt-button--inlined,
.kt-button--outlined {
  color: rgba(0, 0, 0, 0.56);
  background-color: transparent;
}

.kt-button--inlined:focus,
.kt-button--inlined:hover,
.kt-button--outlined:focus,
.kt-button--outlined:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.kt-button--inlined:active,
.kt-button--outlined:active {
  background-color: rgba(0, 0, 0, 0.12);
}

.kt-button--inlined:disabled,
.kt-button--inlined:disabled:active,
.kt-button--inlined:disabled:focus,
.kt-button--inlined:disabled:hover,
.kt-button--outlined:disabled,
.kt-button--outlined:disabled:active,
.kt-button--outlined:disabled:focus,
.kt-button--outlined:disabled:hover {
  background-color: transparent;
}

.kt-button--inlined:disabled:focus,
.kt-button--inlined:disabled:hover,
.kt-button--outlined:disabled:focus,
.kt-button--outlined:disabled:hover {
  color: rgba(0, 0, 0, 0.56);
}

.kt-button--inlined:focus,
.kt-button--inlined:hover,
.kt-button--outlined:focus,
.kt-button--outlined:hover {
  color: rgba(0, 0, 0, 0.87);
}

.kt-button--inlined:focus:disabled,
.kt-button--inlined:hover:disabled,
.kt-button--outlined:focus:disabled,
.kt-button--outlined:hover:disabled {
  color: rgba(0, 0, 0, 0.32);
}

.kt-button--inlined.kt-button--primary,
.kt-button--outlined.kt-button--primary {
  color: #a62626;
  background-color: transparent;
}

.kt-button--inlined.kt-button--primary:focus,
.kt-button--inlined.kt-button--primary:hover,
.kt-button--outlined.kt-button--primary:focus,
.kt-button--outlined.kt-button--primary:hover {
  background-color: rgba(166, 38, 38, 0.04);
}

.kt-button--inlined.kt-button--primary:active,
.kt-button--outlined.kt-button--primary:active {
  background-color: rgba(166, 38, 38, 0.12);
}

.kt-button--inlined.kt-button--primary:disabled,
.kt-button--outlined.kt-button--primary:disabled {
  color: rgba(166, 38, 38, 0.32);
  background-color: transparent;
}

.kt-button--inlined.kt-button--primary:disabled:active,
.kt-button--inlined.kt-button--primary:disabled:focus,
.kt-button--inlined.kt-button--primary:disabled:hover,
.kt-button--outlined.kt-button--primary:disabled:active,
.kt-button--outlined.kt-button--primary:disabled:focus,
.kt-button--outlined.kt-button--primary:disabled:hover {
  background-color: transparent;
}

.kt-button--outlined {
  border-color: rgba(0, 0, 0, 0.48);
}

.kt-button--outlined:disabled {
  border-color: rgba(0, 0, 0, 0.32);
}

.kt-button--outlined.kt-button--primary {
  border-color: rgba(166, 38, 38, 0.56);
}

.kt-button--outlined.kt-button--primary:focus,
.kt-button--outlined.kt-button--primary:hover {
  border-color: #a62626;
}

.kt-button--outlined.kt-button--primary:disabled {
  border-color: rgba(166, 38, 38, 0.32);
}

.kt-button--inlined {
  color: rgba(0, 0, 0, 0.56);
}

.kt-button__icon {
  margin-left: 8px;
  margin-right: -4px;
  height: 1.25rem;
}

.kt-button--small .kt-button__icon {
  margin-left: 4px;
  margin-right: -4px;
  height: 1rem;
}

.kt-button--circular .kt-button__icon {
  margin-left: 0;
  margin-right: 0;
}

.kt-button--inlined kt-button__ripple,
.kt-button--outlined kt-button__ripple {
  background-color: rgba(0, 0, 0, 0.12);
}

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

@media screen and (min-width: 768px) {
  .kt-toast-container {
    padding: 32px;
  }
}

.kt-snackbar-container {
  position: fixed;
  pointer-events: none;
  z-index: 1070;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.kt-dropdown-menu {
  position: relative;
  display: inline-block;
}

.kt-nav-button {
  font-size: 0.875rem;
  line-height: 2;
  min-width: unset;
}

.kt-nav-button--small {
  font-size: 0.75rem;
}

.dropdowns.ui.selection.dropdown > .dropdown.icon {
  margin-top: -4px;
}

.dropdowns.ui.dropdown > .text,
.dropdowns.ui.search.dropdown > .text {
  position: absolute;
  right: 0;
  left: unset;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 30px;
}

.dropdowns.ui.dropdown .menu > .item .text {
  line-height: 2;
}

@media only screen and (max-width: 767px) {
  .ui.modal .actions > .kt-button {
    margin-bottom: 0.875rem;
  }
}

.real-estate-management-form__element .ui.input {
  width: 100%;
}

.removed-warning .icon {
  font-size: 1.05rem;
  margin: 0 1.75rem;
}

@import "./assets/styles/variable.css";
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.h {
  position: sticky;
}
* {
  margin: 0;
  padding: 0;
  font-family: BYekan, "BYekan", tahoma;
  font-size: var(--default-font-size);
  box-sizing: border-box;
}
*,
:after,
:before {
  box-sizing: inherit;
}

body {
  background: var(--primary-background);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

html {
  box-sizing: border-box;
}

input[type="email"],
input[type="password"],
input[type="search"],
input[type="text"] {
  -webkit-appearance: none;
  -moz-appearance: none;
}

html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
textarea {
  font-family: IRANSans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji !important;
}

body,
html {
  -webkit-tap-highlight-color: transparent;
}
b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
dfn {
  font-style: italic;
}
small {
  font-size: 80%;
}
</style>
