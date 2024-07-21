<script setup></script>
<template>
  <div class="chat__users__user">
    <img
      src="../assets/images/icons/user.svg"
      alt="какая-то аватарка юзера"
      width="30"
      height="30"
      loading="lazy"
    />
    <p>Какой-то юзер</p>
  </div>
</template>
<style lang="scss" scoped>
.chat__users__user {
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  cursor: pointer;

  border-radius: 1em;

  & img {
    border-radius: 50%;
    margin-right: 0.5em;
  }

  &:hover {
    background-color: $ui-color-3;
    transition: $hover-transition;
  }
}
</style>
