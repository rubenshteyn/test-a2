<template>
  <div class="modal-win modal_size_md" style="z-index: 200;">
    <div class="modal-win__main is-modal-win-opened modal-win__main--auth">
      <div class="modal-win__close">
      </div>
      <div class="modal-win__body">
        <div data-modal-win="auth" hidden="hidden" class="modal-content">
          <div class="modal-content__header">
            <div class="modal-content__heading">
              Авторизация
            </div>
          </div>
          <div class="modal-content__body">
            <form name="auth" class="modal-content__auth auth-section" @submit.prevent="send()">
              <div class="auth-section__fields">
                <div class="auth-section__field input-field">
                  <div class="input-field__main">
                    <div id="user-reg-login" name="username">
                      <div class="form-control__wrapper">
                        <label class="form-control__label">
                          Логин
                        </label>
                        <div class="form-control__main">
                          <div class="form-control__inner">
                            <input placeholder="Введите Логин" type="text" class="input-field__input input"
                                   v-model="form.login">
                            <!---->
                            <!---->
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="auth-section__field input-field">
                  <div class="input-field__main"></div>
                  <div id="user-reg-password" name="password">
                    <div class="form-control__wrapper">
                      <label class="form-control__label">
                        Пароль
                      </label>
                      <div class="form-control__main">
                        <div class="form-control__inner">
                          <input placeholder="Введите пароль" type="password" class="input-field__input input"
                                 v-model="form.password">
                          <!---->
                          <div class="form-control__toggle form-control__toggle--eye">
                          </div>
                        </div>
                      </div>
                      <!---->
                    </div>
                  </div>
                </div>
              </div>
              <!---->
              <div class="auth-section__offer">
                <div class="checkbox-label auth-section__offer-checkbox" value="true">
                  <div style="display: flex;">
                    <input id="input-70" type="checkbox" class="checkbox-label__input" value="true">
                    <label for="input-70" class="checkbox-label__main">

                    </label>
                    <!---->
                  </div>
                </div>
                <div class="auth-section__offer-text">
                  Я согласен с договором
                  <a href="https://av100.pro/docs/offer.pdf" target="_blank" class="auth-section__offer-text-link">
                    оферты
                  </a></div>
              </div>
              <div class="auth-section__bottom">
                <button class="mob-filter__accept-btn btn btn--primary btn--block" >
                  Войти
                </button>
              </div>
            </form>
            <div class="mob-filter__bottom auth-section__info is-desktop-hidden">
              <div class="auth-section__info-help">
                Остались вопросы?
              </div>
              <div class="auth-section__info-contact">
                <div><a href="tel:+8 (800) 200-07-48" class="auth-section__password-restore">8 (800) 200-07-48</a></div>
                <div><a href="mailto:help@av100.pro" class="auth-section__password-restore">help@av100.pro</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import store from "~/store/store";

export default {
  name: "Login",
  data() {
    return {
      form: {
        login: null,
        password: null
      }
    }
  },
  methods: {
    async send() {
      let form = {
        login: this.form.login,
        password: this.form.password
      }
      console.log(form)
      await this.$store.dispatch("store/login", form)
    },
  }
}
</script>

<style scoped>

</style>
