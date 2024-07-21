<script setup>
import ChatFieldUser from "./ChatFieldUser.vue";
import ChatFieldMessage from "./ChatFieldMessage.vue";
</script>

<template>
  <div class="chat">
    <div class="chat__users">
      <div v-for="n in 15" :key="n">
        <ChatFieldUser />
      </div>
    </div>
    <ChatFieldMessage />
  </div>
</template>

<style lang="scss" scoped>
.chat {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: calc(100vh - $height-nav - $height-bottom);
  width: 100%;

  &__users {
    background-color: $ui-color-2;
    min-width: 200px;
    overflow-y: scroll;
    padding: 1em 0.5em;
  }
}
</style>
