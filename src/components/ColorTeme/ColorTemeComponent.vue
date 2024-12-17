<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body", //element to add attribute to
  attribute: "theme", // attribute name
  valueDark: "custom-dark", // attribute value for dark mode
  valueLight: "custom-light", // attribute value for light mode
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <p>Dark theme: {{isDark}}</p>

  <button @click="toggleDark()">
    Toggle Color Mode
  </button>
</template>

<style>
[theme="custom-dark"] {
  background: #16171d;
  color: #fff;
}
</style>