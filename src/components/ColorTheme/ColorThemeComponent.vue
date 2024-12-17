<script setup>
var r = document.querySelector(":root");
function SetDark() {
  r.style.setProperty("--lightest-grey", "#505050");
  r.style.setProperty("--light-grey", "#2b2b2b");
  r.style.setProperty("--grey", "#3a3a3ab5");
  r.style.setProperty("--dark-grey", "#282828");
  r.style.setProperty("--darker-grey", "#242424");
  r.style.setProperty("--darkest-grey", "#13131396");
  r.style.setProperty("--black", "#000000");
  r.style.setProperty("--white", "#ffffff ");
}

function SetWhite() {
  r.style.setProperty("--lightest-grey", "#3a3a3ab5");
  r.style.setProperty("--light-grey", "#50505050");
  r.style.setProperty("--grey", "#3a3a3ab5");
  r.style.setProperty("--dark-grey", "#ffffff");
  r.style.setProperty("--darker-grey", "#ffffff");
  r.style.setProperty("--darkest-grey", "#FAF9F9");
  r.style.setProperty("--black", "#ffffff");
  r.style.setProperty("--white", "#282828 ");
}

function SetDarkVariant() {
  r.style.setProperty("--lightest-grey", "#30363D");
  r.style.setProperty("--light-grey", "#1E232B");
  r.style.setProperty("--grey", "#30363D");
  r.style.setProperty("--dark-grey", "#161B22");
  r.style.setProperty("--darker-grey", "#30363D");
  r.style.setProperty("--darkest-grey", "#161B22");
  r.style.setProperty("--black", "#000000");
  r.style.setProperty("--white", "#ffffff ");
}

const items = [
  {
    title: "Escuro",
    func: SetDark,
  },
  {
    title: "Claro",
    func: SetWhite,
  },
  {
    title: "Escuro(variante)",
    func: SetDarkVariant,
  },
];
</script>

<template>
  <div class="container">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="var(--light-green)" variant="outlined" hover v-bind="props">
          Tema
        </v-btn>
      </template>
      <v-list class="bg-primary">
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title @click="item.func">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<style>
.container {
  margin: 1vw 4vh;
}

button {
  width: 50%;
}

p,
button {
  color: var(--white);
}
</style>
