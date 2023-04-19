<template>
  <div v-if="gettingUser" class="container-fluid pt-2">
    <div class="settings-section">
      <div class="wide-section settings-section__subsection">
        <div class="wide-section__header is-flex">
          <div class="wide-section__heading">
            Звонок через SIP
          </div>
          <div class="switcher-label settings-section__switcher switcher-label--thin">
            <input id="input47" type="checkbox" class="switcher-label__input">
            <label for="input47" class="switcher-label__main"></label>
          </div>
        </div>
        <div class="wide-section__body">
          <div class="post-entry">
            <p class="is-muted">
              Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так, будто звонки совершаются с разных номеров.
            </p>
          </div>
        </div>
      </div>
      <div class="wide-section settings-section__subsection">
        <div class="wide-section__header is-mobile-hidden">
          <div class="wide-section__heading">
            Учётная запись
          </div>
        </div>
        <div class="wide-section__body">
          <div class="settings-section__fields">
            <div class="input-field settings-section__field" readonly="readonly">
              <label class="input-field__label caption">Компания</label>
              <div class="input-field__main">
                <!---->
                <input type="text" name="text-field" placeholder=""      :value="user.companyname" readonly="readonly" class="input-field__input input">
                <div class="extra-field__currency">

                </div>
                <!---->
              </div>
            </div>
            <div class="input-field settings-section__field" readonly="readonly">
              <label class="input-field__label caption">Логин</label>
              <div class="input-field__main">
                <!---->
                <input type="text" name="text-field" placeholder=""       :value="user.login"  readonly="readonly" class="input-field__input input">
                <div class="extra-field__currency">

                </div>
                <!---->
              </div>
            </div>
            <div class="input-field settings-section__field" >
              <label class="input-field__label caption">Номер телефона</label>
              <div class="input-field__main">
                <!---->
                <input type="text" name="text-field" :value="user.phone" placeholder="" class="input-field__input input">
                <div class="extra-field__currency">

                </div>
                <!---->
              </div>
            </div>
            <div class="input-field settings-section__field">
              <label class="input-field__label caption">Имя</label>
              <div class="input-field__main">
                <!---->
                <input type="text" name="text-field"   :value="user.fname" placeholder="" class="input-field__input input">
                <div class="extra-field__currency">

                </div>
                <!---->
              </div>
            </div>
            <div class="input-field settings-section__field">
              <label class="input-field__label caption">Фамилия</label>
              <div class="input-field__main">
                <!---->
                <input type="text" name="text-field" placeholder="" class="input-field__input input">
                <div class="extra-field__currency">

                </div> <small class="settings-section__info">* Не обязательно</small>
                <!---->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wide-section settings-section__subsection">
        <div class="wide-section__header is-mobile-hidden">
          <div class="wide-section__heading">
            Оповещения о новых подборках
          </div>
        </div>
        <div class="wide-section__body">
          <div class="settings-section__subcaption caption is-desktop-hidden">
            Уведомления
          </div>
          <div class="post-entry">
            <p class="is-muted">
              Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии вашей подборки.
            </p>
          </div>
          <div class="settings-section__fields">
            <div class="settings-section__subcaption caption is-mobile-hidden">
              Уведомления
            </div>
            <div class="settings-section__notifications">
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-none" type="radio" checked="checked" name="notification" class="radio-label__input">
                  <label for="is-notification-none" class="radio-label__main">Выкл</label>
                </div>
              </div>
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-push" type="radio" disabled="disabled" name="notification" class="radio-label__input">
                  <label for="is-notification-push" class="radio-label__main">Push</label>
                </div>
                <div><span class="checkbox-label__main-tooltip">
                </span></div>
              </div>
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-email" type="radio" checked="checked" name="notification" class="radio-label__input">
                  <label for="is-notification-email" class="radio-label__main">Email</label>
                </div>
                <div v-if="this.visible" class="settings-section__current-param"><span class="settings-section__current-param-text">{{email}}</span> <span @click="hide" class="settings-section__current-param-edit"><svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon settings-section__current-param-edit-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.22081 3.77446C9.63603 3.35924 10.1992 3.12598 10.7864 3.12598C12.0092 3.12598 13.0005 4.11725 13.0005 5.34004C13.0005 5.92725 12.7672 6.49041 12.352 6.90563L9.74075 9.51684C8.54147 10.7161 7.0388 11.5669 5.39341 11.9783L4.88871 12.1044C4.36527 12.2353 3.89113 11.7612 4.02199 11.2377L4.14816 10.733C4.55951 9.08763 5.41031 7.58496 6.60959 6.38568L9.22081 3.77446ZM10.7864 4.12598C10.4644 4.12598 10.1556 4.25389 9.92791 4.48157L9.52581 4.88367C9.46599 5.22738 9.63626 5.69076 10.036 6.09047C10.4357 6.49017 10.8991 6.66044 11.2428 6.60062L11.6449 6.19852C11.8725 5.97084 12.0005 5.66203 12.0005 5.34004C12.0005 4.66953 11.4569 4.12598 10.7864 4.12598ZM10.3671 7.47631C9.97046 7.32906 9.60994 7.07865 9.32886 6.79757C9.04778 6.51649 8.79738 6.15598 8.65012 5.75936L7.3167 7.09279C6.24558 8.16391 5.4857 9.506 5.11831 10.9756L5.10745 11.019L5.15087 11.0081C6.62044 10.6407 7.96253 9.88086 9.03365 8.80974L10.3671 7.47631Z" fill="#2DC574"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33203 14.293C3.33203 14.0168 3.55589 13.793 3.83203 13.793H13.1654C13.4415 13.793 13.6654 14.0168 13.6654 14.293C13.6654 14.5691 13.4415 14.793 13.1654 14.793H3.83203C3.55589 14.793 3.33203 14.5691 3.33203 14.293Z" fill="#2DC574"></path></svg></span></div>
                <input v-if="!this.visible" type="email" name="text-field" placeholder="" @input="changeEmailMethod($event)" :value="email" class="input-field__input input">
              </div>
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-telegram" type="radio" name="notification" class="radio-label__input">
                  <label for="is-notification-telegram" class="radio-label__main"><a href="https://avclick.me/v/AVinfoBot" class="radio-label__main--link">Telegram ID</a></label>
                </div>
                <div class="settings-section__current-param"><span class="settings-section__current-param-text"></span> <span class="settings-section__current-param-edit"><svg width="30" height="30" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon settings-section__current-param-edit-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.22081 3.77446C9.63603 3.35924 10.1992 3.12598 10.7864 3.12598C12.0092 3.12598 13.0005 4.11725 13.0005 5.34004C13.0005 5.92725 12.7672 6.49041 12.352 6.90563L9.74075 9.51684C8.54147 10.7161 7.0388 11.5669 5.39341 11.9783L4.88871 12.1044C4.36527 12.2353 3.89113 11.7612 4.02199 11.2377L4.14816 10.733C4.55951 9.08763 5.41031 7.58496 6.60959 6.38568L9.22081 3.77446ZM10.7864 4.12598C10.4644 4.12598 10.1556 4.25389 9.92791 4.48157L9.52581 4.88367C9.46599 5.22738 9.63626 5.69076 10.036 6.09047C10.4357 6.49017 10.8991 6.66044 11.2428 6.60062L11.6449 6.19852C11.8725 5.97084 12.0005 5.66203 12.0005 5.34004C12.0005 4.66953 11.4569 4.12598 10.7864 4.12598ZM10.3671 7.47631C9.97046 7.32906 9.60994 7.07865 9.32886 6.79757C9.04778 6.51649 8.79738 6.15598 8.65012 5.75936L7.3167 7.09279C6.24558 8.16391 5.4857 9.506 5.11831 10.9756L5.10745 11.019L5.15087 11.0081C6.62044 10.6407 7.96253 9.88086 9.03365 8.80974L10.3671 7.47631Z" fill="#2DC574"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33203 14.293C3.33203 14.0168 3.55589 13.793 3.83203 13.793H13.1654C13.4415 13.793 13.6654 14.0168 13.6654 14.293C13.6654 14.5691 13.4415 14.793 13.1654 14.793H3.83203C3.55589 14.793 3.33203 14.5691 3.33203 14.293Z" fill="#2DC574"></path></svg></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wide-section settings-section__subsection">
        <div class="wide-section__header is-mobile-hidden">
          <div class="wide-section__heading">
            Переход в карточку
          </div>
        </div>
        <div class="wide-section__body">
          <div class="post-entry">
            <p class="is-muted">
              Выберите, каким образом будет открываться детальное представление выбранного вами транспорта.
            </p>
          </div>
          <div class="settings-section__fields">
            <div class="settings-section__notifications block-2">
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-card" type="radio" checked="checked" name="redirecttarget" class="radio-label__input">
                  <label for="is-notification-card" class="radio-label__main">В карточку в текущем окне</label>
                </div>
              </div>
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-page" type="radio" checked="checked" name="redirecttarget" class="radio-label__input">
                  <label for="is-notification-page" class="radio-label__main">В карточку в отдельном окне</label>
                </div>
              </div>
              <div class="settings-section__field is-flex">
                <div class="radio-label settings-section__radio">
                  <input id="is-notification-source" type="radio" checked="checked" name="redirecttarget" class="radio-label__input">
                  <label for="is-notification-source" class="radio-label__main">На источник </label>
                </div>
                <div><span class="checkbox-label__main-tooltip">
                </span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wide-section settings-section__subsection">
        <div class="wide-section__header is-mobile-hidden">
          <div class="wide-section__heading">
            Прочие настройки
          </div>
        </div>
        <div class="wide-section__body">
          <div class="settings-section__fields">
            <div class="settings-section__field">
              <label class="multiselect__label caption">Часовой пояс</label>
              <vSelect label="" :options=this.timezones />
            </div>
          </div>
          <div class="settings-section__fields" style="margin-top: 2.5rem;">
            <div class="settings-section__field">
              <div class="checkbox-label has-tooltip">
                <div style="display: flex;">
                  <input id="input-54" type="checkbox" class="checkbox-label__input">
                  <label for="input-54" class="checkbox-label__main">
                    Автоматически переходить к новым объявлениям
                  </label> <span class="checkbox-label__main-tooltip">
                </span></div>
              </div>
            </div>
            <div class="settings-section__field" style="display: block;">
              <div class="checkbox-label has-tooltip">
                <div style="display: flex;">
                  <input id="input-55" type="checkbox" class="checkbox-label__input">
                  <label for="input-55" class="checkbox-label__main">
                    Включить цвета в ленте
                  </label> <span class="checkbox-label__main-tooltip">
                </span></div>
              </div>
            </div>
          </div>
          <div class="settings-section__bottom" @click="sendEmailMethod">
            <button class="settings-section__btn block btn btn--block btn--primary">
              <!----><span class="btn__text">
            Сохранить
          </span>
              <!---->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
export default {
  name: 'Main',
  data() {
    return {
      data: null,
      userData: {
        email: null
      },
      email: null,
      visible: true,
      timezones: ['Москва', 'Калининград', 'Самара', 'Екатеринбург', 'Омск', 'Красноярск', 'Иркутск', 'Якутск', 'Владивосток', 'Магадан']
    }
  },
  components: {
    vSelect
  },
  computed: {
    user() {
      return this.$store.state.store.user
    }
  },
  mounted() {
    if(this.user.length === 0) {
      this.gettingUser().then(res => {
        console.log(res)
        this.email = res.email
      })
    }
  },
  methods: {
    hide() {
      this.visible = false
    },
    async gettingUser() {
      return await this.$store.dispatch("store/getUser")
    },
    async changeEmailMethod(event) {
      this.email = event.target.value
    },
    async sendEmailMethod() {
      await this.$store.dispatch("store/changeEmail", this.email)
    }
  }
}
</script>
