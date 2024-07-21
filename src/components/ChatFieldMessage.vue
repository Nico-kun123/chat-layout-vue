<script setup></script>

<template>
  <div class="chat__messages">
    <div class="chat__messages__list">
      <div class="chat__messages__list__item" v-for="n in 4" :key="n">
        <div class="chat__messages__list__item_wrap">
          <div class="chat__messages__list__item__avatar">
            <img
              src="../assets/images/icons/user.svg"
              alt="какая-то аватарка юзера"
              width="30"
              height="30"
              loading="lazy"
            />
          </div>

          <div class="chat__messages__list__item__username" v-if="n % 2 === 0">
            Вы
          </div>
          <div class="chat__messages__list__item__username" v-else>
            Какой-то юзер
          </div>
        </div>
        <div class="chat__messages__list__item__image" v-if="n === 2">
          <img
            src="https://i.pinimg.com/originals/73/0d/75/730d75ed729397068c7a89fa7476e305.gif"
            alt="картинка в сообщении"
            width="30"
            height="30"
            loading="lazy"
          />
        </div>
        <div class="chat__messages__list__item__image" v-if="n === 3">
          <img
            src="https://i.pinimg.com/originals/4c/40/d0/4c40d04152c460ab6d7f51acc4d0c5a5.gif"
            alt="картинка в сообщении"
            width="30"
            height="30"
            loading="lazy"
          />
        </div>

        <p v-if="n === 2">Love you 💕</p>
        <p v-else-if="n !== 3 && n !== 4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p v-else-if="n === 4">😻😻😻</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat__messages {
  width: 100%;
  overflow-y: scroll;

  &__list {
    margin: 0;
    // padding: 2em 1em;
    list-style: none;
    transition: $ui-transition;

    &__item {
      position: relative;
      width: fit-content;
      max-width: 350px;
      margin-bottom: 1em;
      padding: 0.5em 1em;
      background-color: $ui-color-3;
      border-radius: 0.5em;
      text-rendering: optimizeLegibility;
      transition: $ui-transition;

      &_wrap {
        display: flex;
        align-items: center;
        margin-bottom: 0.5em;
      }

      &__avatar {
        margin-right: 0.5em;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      &__username {
        font-weight: bold;
      }

      &__image {
        position: relative;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        border-radius: 0.5em;
        transition: $ui-transition;

        img {
          width: 100%;
          height: 100%;
          border-radius: 0.5em;
        }
      }

      &:nth-child(2n) {
        margin-left: auto;
        background-color: $ui-color-3;
      }

      @media (hover: hover) {
        &__avatar:hover,
        &__username:hover,
        &__image:hover {
          cursor: pointer;
        }

        &__username:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (min-width: 320px) {
    &__list {
      padding: 2em 1em;
      &__item {
        max-width: 400px;
        &__image {
          max-width: 250px;
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    &__list {
      padding: 2em 3em;
      &__item {
        max-width: 500px;
        &__image {
          max-width: 350px;
        }
      }
    }
  }

  @media screen and (min-width: 1400px) {
    &__list {
      padding: 2em 5em;

      &__item {
        max-width: 800px;
        &__image {
          max-width: 450px;
        }
      }
    }
  }
}
</style>
