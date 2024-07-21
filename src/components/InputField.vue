<template>
  <div class="chat__input">
    <button type="submit" name="message">
      <img
        src="../assets/images/icons/ButtonSendFile.svg"
        alt="send file"
        width="30"
        height="30"
        loading="lazy"
      />
    </button>
    <input type="text" placeholder="Напишите сообщение" id="userMessage" />
    <button type="submit" name="message">
      <img
        src="../assets/images/icons/ButtonSendMessage.svg"
        alt="кнопка отправки сообщения"
        width="30"
        height="30"
        loading="lazy"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.chat__input {
  width: 100%;
  height: $height-bottom;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0.5em 1em;
  background-color: $ui-color-1;

  & input {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0.5em 1em;
    border: 1px solid $ui-color-3;
    border-radius: 0.5em;
    margin-left: 0.5em;
  }

  & button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 0.5em;
    border: 1px solid transparent;
    font-size: 1em;
    font-weight: 500;
    -webkit-transition: border-color 0.25s;
    -o-transition: border-color 0.25s;
    transition: border-color 0.25s;

    img {
      width: 100%;
      height: 100%;
    }

    &:last-child {
      margin-left: 0.5em;
    }
  }
}
</style>
