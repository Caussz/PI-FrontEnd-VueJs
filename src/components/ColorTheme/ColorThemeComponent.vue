<script setup>
import { useDark, useToggle } from "@vueuse/core";

// const isDark = useDark({
//   selector: "body", //element to add attribute to
//   attribute: "theme", // attribute name
//   valueDark: "custom-dark", // attribute value for dark mode
//   valueLight: "custom-light", // attribute value for light mode
// });
// const toggleDark = useToggle(isDark);
var r = document.querySelector(":root");
function myFunction_set() {
  r.style.setProperty("--light-green", "#99b898");
  r.style.setProperty("--green", "#99b89873");
  r.style.setProperty("--dark-green", "#445244");
  r.style.setProperty("--lightest-grey", "#505050");
  r.style.setProperty("--light-grey", "#2b2b2b");
  r.style.setProperty("--grey", "#3a3a3ab5");
  r.style.setProperty("--dark-grey", "#282828");
  r.style.setProperty("--darkest-grey", "#13131396");
  r.style.setProperty("--black", "#000000");
  r.style.setProperty("--white", "#ffffff");
  console.log(getComputedStyle(r).getPropertyValue("--primary"));
}
</script>

<template>
  <p>Dark theme: {{ isDark }}</p>

  <button @click="toggleDark()">Toggle Color Mode</button>
</template>

<style>
[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}
</style>
