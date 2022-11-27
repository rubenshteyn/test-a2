<template>
  <div>
    <div id="DIV_1">
      <div id="DIV_2">
        <div id="DIV_77">
          <div id="DIV_78">
            <div id="DIV_79">
              Прочие настройки
            </div>
          </div>
          <div id="DIV_80">
            <div id="DIV_97">
              <button @click="sendForm" id="BUTTON_98">
                <span id="SPAN_99">Сохранить</span>
              </button>
              <!----></div>
            <div id="DIV_81">
              <div id="DIV_82">
                <div id="DIV_83">
                  <label id="LABEL_84">
                    Часовой пояс
                  </label>
                  <v-select placeholder="Москва" label="name" v-model="timezone" :options="timezones" id="INPUT_87"/>
                </div>
              </div>
            </div>
            <div id="DIV_88">
              <div id="DIV_89">
                <div id="DIV_90">
                  <div id="DIV_91">
                    <input v-model="activeCheckbox" class="input" id="INPUT_92" type="checkbox" value="false"/>
                    <label @click="checkBox" :class="{checked: this.activeCheckbox}" for="input-48" id="LABEL_93">
                      Автоматически переходить к новым объявлениям
                    </label><span id="SPAN_94"></span>
                    <svg id="svg_95">
                      <use id="use_96">
                      </use>
                    </svg>
                  </div>
                </div>
                <div style="position: relative">
                  <Popper style="position: absolute;" arrow hover placement="bottom" content="Лента будет автоматически обновляться 1 раз в 3 секунды">
                    <img  src="../assets/icon.svg" style="width: 20px;height: 20px;opacity: 0.3">
                  </Popper>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="DIV_43">
          <div id="DIV_44">
            <div id="DIV_45">
              Оповещения о новых подборках
            </div>
          </div>
          <div id="DIV_46">
            <div id="DIV_47">
              Уведомления
            </div>
            <div id="DIV_48">
              <p id="P_49">
                Выберите, куда будут приходить уведомления при появлении автомобилей, которые подходят под критерии
                вашей подборки.
              </p>
            </div>
            <div id="DIV_50">
              <div id="DIV_51">
                Уведомления
              </div>
              <div id="DIV_52">
                <div id="DIV_53">
                  <div id="DIV_54">
                    <input id="INPUT_55" v-model="notification" :value="'none'" type="radio"
                           :checked="this.notification === 'none'" name="is-notification-none"/>
                    <label @click="this.notification === 'none'" for="INPUT_55"
                           :class="{checked: this.notification === 'none'}" id="LABEL_56">
                      Выкл
                    </label>
                  </div>
                </div>
                <div id="DIV_57">
                  <div id="DIV_58">
                    <input id="INPUT_59" v-model="notification" :value="'Email'" type="radio"
                           :checked="this.notification === 'Email'" name="is-notification-email"/>
                    <label @click="this.notification === 'Email'" for="INPUT_59"
                           :class="{checked: this.notification === 'Email'}" id="LABEL_60">
                      Email
                    </label>
                  </div>
                  <input v-if="showEmail" class="input" id="INPUT_EMAIL" v-model="email" type="text"/>
                  <div v-else @click="this.showEmail = true" id="DIV_61">
                    <svg id="svg_64">
                      <path id="path_65">
                      </path>
                      <path id="path_66">
                      </path>
                    </svg>
                  </div>
                </div>
                <div id="DIV_67">
                  <div id="DIV_68">
                    <input id="INPUT_69" type="radio" v-model="notification" :checked="this.notification === 'TG'"
                           name="is-notification-telegram" :value="'TG'"/>
                    <label @click="this.notification === 'TG'" for="INPUT_69"
                           :class="{checked: this.notification === 'TG'}" id="LABEL_70">
                      Telegram ID
                    </label>
                    <input v-if="showTG" class="input" v-model="tg" id="INPUT_TG" type="text"/>
                    <div v-else @click="this.showTG = true" id="DIV_71">
                      <svg id="svg_74">
                        <path id="path_75">
                        </path>
                        <path id="path_76">
                        </path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="DIV_12">
          <div id="DIV_13">
            <div id="DIV_14">
              Учётная запись
            </div>
          </div>
          <div id="DIV_15">
            <div id="DIV_16">
              <div id="DIV_17">
                <label id="LABEL_18">
                  Компания
                </label>
                <div id="DIV_19">
                  <!---->

                  <input class="input" type="text" name="text-field" readonly="readonly" id="INPUT_20"/>
                  <div id="DIV_21">
                  </div>
                  <!---->

                </div>
              </div>
              <div id="DIV_22">
                <label id="LABEL_23">
                  Логин
                </label>
                <div id="DIV_24">
                  <!---->

                  <input class="input" type="text" name="text-field" readonly="readonly" id="INPUT_25"/>
                  <div id="DIV_26">
                  </div>
                  <!---->

                </div>
              </div>
              <div id="DIV_27">
                <label id="LABEL_28">
                  Номер телефона
                </label>
                <div id="DIV_29">
                  <!---->

                  <input class="input" type="text" name="text-field" id="INPUT_30"/>
                  <div id="DIV_31">
                  </div>
                  <!---->

                </div>
              </div>
              <div id="DIV_32">
                <label id="LABEL_33">
                  Имя
                </label>
                <div id="DIV_34">
                  <!---->

                  <input class="input" type="text" name="text-field" id="INPUT_35"/>
                  <div id="DIV_36">
                  </div>
                  <!---->

                </div>
              </div>
              <div id="DIV_37">
                <label id="LABEL_38">
                  Фамилия
                </label>
                <div id="DIV_39">
                  <!---->

                  <input class="input" type="text" name="text-field" id="INPUT_40"/>
                  <div id="DIV_41">
                  </div>
                  <small id="SMALL_42">* Не обязательно</small>
                  <!---->

                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="DIV_3">
          <div id="DIV_4">
            <div id="DIV_5">
              Звонок через SIP
            </div>
            <div id="DIV_6">
              <input class="input" id="INPUT_7" type="checkbox"/>
              <label @click="selectSip" :class="{notActiveSip: active}" for="input41" id="LABEL_8">
              </label>
            </div>
          </div>
          <div id="DIV_9">
            <div id="DIV_10">
              <p id="P_11">
                Включите эту функцию чтобы Авито и другие площадки не блокировали ваш аккаунт. Будет выглядеть так,
                будто звонки совершаются с разных номеров.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'UserSettings',
  data() {
    return {
      activeCheckbox: true,
      active: false,
      showEmail: false,
      showTG: false,
      notification: null,
      email: null,
      sip: null,
      tg: null,
      form: {
        company: null,
        login: null,
        contactphone: null,
        firstname: null,
        lastname: null,
        notifications: null,
        timezone: null,
      },
      timezone: null,
      timezones: [
        {
          name: "Москва"
        },
        {
          name: "Калининград"
        },
        {
          name: "Самара"
        },
        {
          name: "Екатеринбург"
        },
        {
          name: "Омск"
        },
        {
          name: "Красноярск"
        },
        {
          name: "Иркутск"
        },
        {
          name: "Якутск"
        },
        {
          name: "Владивосток"
        },
        {
          name: "Магадан"
        },
        {
          name: "Камчатка"
        },
      ]
    }
  },
  methods: {
    checkBox() {
      this.activeCheckbox = this.activeCheckbox === false;
    },
    selectSip() {
      this.active = !this.active
      return this.active
    },
    sendForm() {
      axios.put('https://api.av100.ru/v3/swagger/ui/index#/User/1903225', this.email)
    }
  },
}
</script>

<!--Стили как и разметка были изъяты с сайта с помощью плагина Snappy Snippet, для ускорения выполнения тестового задания -->

<style>
.popper #arrow:before {
  background: #2dc574 !important;
}
.popper #arrow {
  top: -6px;
}
.popper {
  font-size: 13px;
  line-height: 18px;
  left: -6px !important;
  color: #fff !important;
  background: #2dc574 !important;
  padding: 8px 14px !important;
  width: 226px;
}
.inline-block {
  position: relative !important;
}
.vs__clear {
  display: none;
}

.vs__dropdown-menu {
  background-color: #2dc574 !important;
}

.vs__dropdown-menu {
  color: #fff !important;
}

.vs__dropdown-menu li:hover, .vs__dropdown-menu li:focus {
  background-color: #26a763;
}

.vs__open-indicator {
  transform: scale(0.6) !important;
}

.notActiveSip::after {
  left: 1px !important;
  background-color: #bababa !important;
}

.notActiveSip::before {
  border-color: #bababa !important;
}

.input:focus, .textarea:focus, .vs__search:focus .vs__dropdown-toggle {
  border-color: #2dc574 !important;
}

.vs__dropdown-toggle {
  width: 240px;
}

.input:hover, .textarea:hover, .v-select:hover .vs__dropdown-toggle {
  border-color: #ccc !important;
}

.checked::after {
  background-color: #2dc574;
}

.vs__open-indicator {
  fill: #2dc574 !important;
}

.vs__clean {
  width: 10px !important;
  height: 8px !important;
}
</style>
<style scoped>
#DIV_1 {
  block-size: 870.037px;
  box-sizing: border-box;
  height: 870.037px;
  inline-size: 1519.2px;
  max-inline-size: 1920px;
  max-width: 1920px;
  padding-inline-end: 15px;
  padding-inline-start: 15px;
  perspective-origin: 759.6px 435.013px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 759.6px 435.019px;
  width: 1519.2px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  padding: 0px 15px;
}

/*#DIV_1*/

#DIV_1:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_1:after*/

#DIV_1:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_1:before*/

#DIV_2 {
  block-size: 870.037px;
  box-sizing: border-box;
  height: 870.037px;
  inline-size: 1489.2px;
  margin-block-end: 120px;
  perspective-origin: 744.6px 435.013px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 744.6px 435.019px;
  width: 1489.2px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 120px;
}

/*#DIV_2*/

#DIV_2:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_2:after*/

#DIV_2:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_2:before*/

#DIV_3 {
  align-items: flex-start;
  block-size: 63px;
  box-sizing: border-box;
  display: flex;
  height: 63px;
  inline-size: 1489.2px;
  margin-block-end: 40px;
  perspective-origin: 744.6px 31.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 744.6px 31.5px;
  width: 1489.2px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 40px;
}

/*#DIV_3*/

#DIV_3:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_3:after*/

#DIV_3:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_3:before*/

#DIV_4 {
  align-items: center;
  block-size: 27px;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  height: 27px;
  inline-size: 250px;
  margin-inline-end: 20px;
  max-inline-size: 250px;
  max-width: 250px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 125px 13.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 125px 13.5px;
  width: 250px;
  flex: 0 0 250px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 20px 0px 0px;
}

/*#DIV_4*/

#DIV_4:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_4:after*/

#DIV_4:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_4:before*/

#DIV_5 {
  block-size: 27px;
  box-sizing: border-box;
  height: 27px;
  inline-size: 165.975px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 82.9875px 13.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 82.9875px 13.5px;
  width: 165.975px;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_5*/

#DIV_5:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_5:after*/

#DIV_5:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_5:before*/

#DIV_6 {
  block-size: 25px;
  box-sizing: border-box;
  height: 25px;
  inline-size: 40px;
  margin-inline-start: 10px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 20px 12.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 20px 12.5px;
  width: 40px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 0px 10px;
}

/*#DIV_6*/

#DIV_6:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_6:after*/

#DIV_6:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_6:before*/

#INPUT_7, #INPUT_55, #INPUT_59, #INPUT_69, #INPUT_92 {
  block-size: 1px;
  border-block-end-color: rgb(0, 0, 0);
  border-block-end-style: none;
  border-block-end-width: 0px;
  border-block-start-color: rgb(0, 0, 0);
  border-block-start-style: none;
  border-block-start-width: 0px;
  border-inline-end-color: rgb(0, 0, 0);
  border-inline-end-style: none;
  border-inline-end-width: 0px;
  border-inline-start-color: rgb(0, 0, 0);
  border-inline-start-style: none;
  border-inline-start-width: 0px;
  bottom: 10719.6px;
  cursor: default;
  display: block;
  height: 1px;
  inline-size: 1px;
  inset-block-end: 10719.6px;
  inset-block-start: -9999px;
  inset-inline-end: 11517.2px;
  inset-inline-start: -9999px;
  left: -9999px;
  opacity: 0;
  padding-block-end: 0px;
  padding-block-start: 0px;
  padding-inline-end: 0px;
  padding-inline-start: 0px;
  perspective-origin: 0.5px 0.5px;
  position: absolute;
  right: 11517.2px;
  text-size-adjust: 100%;
  top: -9999px;
  transform-origin: 0.5px 0.5px;
  visibility: hidden;
  width: 1px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border: 0px none rgb(0, 0, 0);
  overflow: hidden;
  padding: 0px;
}

/*#INPUT_7, #INPUT_55, #INPUT_59, #INPUT_69, #INPUT_92*/

#INPUT_7:after, #INPUT_55:after, #INPUT_59:after, #INPUT_69:after, #INPUT_92:after {
  box-sizing: border-box;
  cursor: default;
  text-size-adjust: 100%;
  visibility: hidden;
}

/*#INPUT_7:after, #INPUT_55:after, #INPUT_59:after, #INPUT_69:after, #INPUT_92:after*/

#INPUT_7:before, #INPUT_55:before, #INPUT_59:before, #INPUT_69:before, #INPUT_92:before {
  box-sizing: border-box;
  cursor: default;
  text-size-adjust: 100%;
  visibility: hidden;
}

/*#INPUT_7:before, #INPUT_55:before, #INPUT_59:before, #INPUT_69:before, #INPUT_92:before*/

#LABEL_8 {
  align-items: center;
  block-size: 25px;
  bottom: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 25px;
  inline-size: 40px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: 25px;
  min-height: 25px;
  min-inline-size: 35px;
  min-width: 35px;
  padding-inline-start: 40px;
  perspective-origin: 20px 12.5px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 20px 12.5px;
  user-select: none;
  width: 40px;
  font: 500 12px / 14.4px Montserrat, Helvetica, Arial, sans-serif;
  padding: 0px 0px 0px 40px;
}

/*#LABEL_8*/

#LABEL_8:after {
  block-size: 19px;
  border-end-end-radius: 50%;
  border-end-start-radius: 50%;
  border-start-end-radius: 50%;
  border-start-start-radius: 50%;
  bottom: 3px;
  box-sizing: border-box;
  content: '';
  cursor: pointer;
  display: block;
  height: 19px;
  inline-size: 19px;
  inset-block-end: 3px;
  inset-block-start: 3px;
  inset-inline-end: 5px;
  inset-inline-start: 16px;
  left: 16px;
  perspective-origin: 9.5px 9.5px;
  position: absolute;
  right: 5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 3px;
  transform-origin: 9.5px 9.5px;
  user-select: none;
  width: 19px;
  background: rgb(45, 197, 116) none repeat scroll 0% 0% / auto padding-box border-box;
  border-radius: 50%;
  font: 500 12px / 14.4px Montserrat, Helvetica, Arial, sans-serif;
  transition: all 0.3s ease 0s;
}

/*#LABEL_8:after*/

#LABEL_8:before {
  block-size: 20px;
  border-block-end-color: rgb(45, 197, 116);
  border-block-end-style: solid;
  border-block-end-width: 2px;
  border-block-start-color: rgb(45, 197, 116);
  border-block-start-style: solid;
  border-block-start-width: 2px;
  border-end-end-radius: 12px;
  border-end-start-radius: 12px;
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-end-style: solid;
  border-inline-end-width: 2px;
  border-inline-start-color: rgb(45, 197, 116);
  border-inline-start-style: solid;
  border-inline-start-width: 2px;
  border-start-end-radius: 12px;
  border-start-start-radius: 12px;
  bottom: 2.5px;
  box-sizing: border-box;
  content: '';
  cursor: pointer;
  display: block;
  height: 20px;
  inline-size: 35px;
  inset-block-end: 2.5px;
  inset-block-start: 2.5px;
  inset-inline-end: 5px;
  inset-inline-start: 0px;
  left: 0px;
  min-inline-size: 35px;
  min-width: 35px;
  perspective-origin: 17.5px 10px;
  position: absolute;
  right: 5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 2.5px;
  transform-origin: 17.5px 10px;
  user-select: none;
  width: 35px;
  border: 2px solid rgb(45, 197, 116);
  border-radius: 12px;
  font: 500 12px / 14.4px Montserrat, Helvetica, Arial, sans-serif;
  transition: all 0.3s ease 0s;
}

/*#LABEL_8:before*/

#DIV_9 {
  block-size: 63px;
  box-sizing: border-box;
  height: 63px;
  inline-size: 490px;
  max-inline-size: 490px;
  max-width: 490px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 245px 31.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 31.5px;
  width: 490px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_9*/

#DIV_9:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_9:after*/

#DIV_9:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_9:before*/

#DIV_10 {
  block-size: 63px;
  box-sizing: border-box;
  height: 63px;
  inline-size: 490px;
  perspective-origin: 245px 31.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 31.5px;
  width: 490px;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_10*/

#DIV_10:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_10:after*/

#DIV_10:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_10:before*/

#P_11 {
  text-align: left;
  block-size: 63px;
  border-block-end-color: rgb(104, 104, 105);
  border-block-start-color: rgb(104, 104, 105);
  border-inline-end-color: rgb(104, 104, 105);
  border-inline-start-color: rgb(104, 104, 105);
  box-sizing: border-box;
  caret-color: rgb(104, 104, 105);
  color: rgb(104, 104, 105);
  column-rule-color: rgb(104, 104, 105);
  height: 63px;
  inline-size: 490px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  perspective-origin: 245px 31.5px;
  text-decoration: none solid rgb(104, 104, 105);
  text-emphasis-color: rgb(104, 104, 105);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 31.5px;
  width: 490px;
  border: 0px none rgb(104, 104, 105);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px;
  outline: rgb(104, 104, 105) none 0px;
}

/*#P_11*/

#P_11:after {
  border-block-end-color: rgb(104, 104, 105);
  border-block-start-color: rgb(104, 104, 105);
  border-inline-end-color: rgb(104, 104, 105);
  border-inline-start-color: rgb(104, 104, 105);
  box-sizing: border-box;
  caret-color: rgb(104, 104, 105);
  color: rgb(104, 104, 105);
  column-rule-color: rgb(104, 104, 105);
  text-decoration: none solid rgb(104, 104, 105);
  text-emphasis-color: rgb(104, 104, 105);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(104, 104, 105);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(104, 104, 105) none 0px;
}

/*#P_11:after*/

#P_11:before {
  border-block-end-color: rgb(104, 104, 105);
  border-block-start-color: rgb(104, 104, 105);
  border-inline-end-color: rgb(104, 104, 105);
  border-inline-start-color: rgb(104, 104, 105);
  box-sizing: border-box;
  caret-color: rgb(104, 104, 105);
  color: rgb(104, 104, 105);
  column-rule-color: rgb(104, 104, 105);
  text-decoration: none solid rgb(104, 104, 105);
  text-emphasis-color: rgb(104, 104, 105);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(104, 104, 105);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(104, 104, 105) none 0px;
}

/*#P_11:before*/

#DIV_12 {
  align-items: flex-start;
  block-size: 284.6px;
  box-sizing: border-box;
  display: flex;
  height: 284.6px;
  inline-size: 1489.2px;
  margin-block-end: 40px;
  perspective-origin: 744.6px 142.3px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 744.6px 142.3px;
  width: 1489.2px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 40px;
}

/*#DIV_12*/

#DIV_12:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_12:after*/

#DIV_12:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_12:before*/

#DIV_13, #DIV_78 {
  block-size: 27px;
  box-sizing: border-box;
  height: 27px;
  inline-size: 250px;
  margin-inline-end: 20px;
  max-inline-size: 250px;
  max-width: 250px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 125px 13.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 125px 13.5px;
  width: 250px;
  flex: 0 0 250px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 20px 0px 0px;
}

/*#DIV_13, #DIV_78*/

#DIV_13:after, #DIV_78:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_13:after, #DIV_78:after*/

#DIV_13:before, #DIV_78:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_13:before, #DIV_78:before*/

#DIV_14, #DIV_79 {
  text-align: left;
  block-size: 27px;
  box-sizing: border-box;
  height: 27px;
  inline-size: 250px;
  perspective-origin: 125px 13.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 125px 13.5px;
  width: 250px;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_14, #DIV_79*/

#DIV_14:after, #DIV_79:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_14:after, #DIV_79:after*/

#DIV_14:before, #DIV_79:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_14:before, #DIV_79:before*/

#DIV_15 {
  block-size: 284.6px;
  box-sizing: border-box;
  height: 284.6px;
  inline-size: 490px;
  max-inline-size: 490px;
  max-width: 490px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 245px 142.3px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 142.3px;
  width: 490px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_15*/

#DIV_15:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_15:after*/

#DIV_15:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_15:before*/

#DIV_16 {
  block-size: 284.6px;
  box-sizing: border-box;
  height: 284.6px;
  inline-size: 370px;
  max-inline-size: 370px;
  max-width: 370px;
  perspective-origin: 185px 142.3px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 142.3px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_16*/

#DIV_16:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_16:after*/

#DIV_16:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_16:before*/

#DIV_17, #DIV_22, #DIV_32 {
  block-size: 33.4px;
  box-sizing: border-box;
  display: flex;
  height: 33.4px;
  inline-size: 370px;
  margin-block-end: 20px;
  perspective-origin: 185px 16.7px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 16.7px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 20px;
}

/*#DIV_17, #DIV_22, #DIV_32*/

#DIV_17:after, #DIV_22:after, #DIV_32:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_17:after, #DIV_22:after, #DIV_32:after*/

#DIV_17:before, #DIV_22:before, #DIV_32:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_17:before, #DIV_22:before, #DIV_32:before*/

#LABEL_18, #LABEL_23, #LABEL_33 {
  block-size: 27.4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 27.4px;
  inline-size: 120px;
  margin-block-start: 6px;
  margin-inline-end: 10px;
  max-inline-size: 120px;
  max-width: 120px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 60px 13.7px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 60px 13.7px;
  user-select: none;
  width: 120px;
  flex: 0 0 120px;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  margin: 6px 10px 0px 0px;
}

/*#LABEL_18, #LABEL_23, #LABEL_33*/

#LABEL_18:after, #LABEL_23:after, #LABEL_33:after {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_18:after, #LABEL_23:after, #LABEL_33:after*/

#LABEL_18:before, #LABEL_23:before, #LABEL_33:before {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_18:before, #LABEL_23:before, #LABEL_33:before*/

#DIV_19, #DIV_24, #DIV_34 {
  block-size: 33.4px;
  bottom: 0px;
  box-sizing: border-box;
  height: 33.4px;
  inline-size: 240px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 120px 16.7px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 120px 16.7px;
  width: 240px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_19, #DIV_24, #DIV_34*/

#DIV_19:after, #DIV_24:after, #DIV_34:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_19:after, #DIV_24:after, #DIV_34:after*/

#DIV_19:before, #DIV_24:before, #DIV_34:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_19:before, #DIV_24:before, #DIV_34:before*/

#INPUT_20, #INPUT_25, #INPUT_30, #INPUT_35, #INPUT_40, #INPUT_EMAIL, #INPUT_TG {
  appearance: none;
  block-size: 33.4px;
  border-block-end-color: rgb(225, 225, 227);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  border-block-start-color: rgb(225, 225, 227);
  border-block-start-style: solid;
  border-block-start-width: 1px;
  border-end-end-radius: 3px;
  border-end-start-radius: 3px;
  border-inline-end-color: rgb(225, 225, 227);
  border-inline-end-style: solid;
  border-inline-end-width: 1px;
  border-inline-start-color: rgb(225, 225, 227);
  border-inline-start-style: solid;
  border-inline-start-width: 1px;
  border-start-end-radius: 3px;
  border-start-start-radius: 3px;
  caret-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  column-rule-color: rgb(34, 34, 34);
  height: 33.4px;
  inline-size: 240px;
  padding-block-end: 8px;
  padding-block-start: 8px;
  padding-inline-end: 10px;
  padding-inline-start: 10px;
  perspective-origin: 120px 16.7px;
  text-decoration: none solid rgb(34, 34, 34);
  text-emphasis-color: rgb(34, 34, 34);
  text-size-adjust: 100%;
  transform-origin: 120px 16.7px;
  width: 240px;
  border: 1px solid rgb(225, 225, 227);
  border-radius: 3px;
  flex: 1 1 0%;
  font: 14px / 15.4px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(34, 34, 34) none 0px;
  padding: 8px 10px;
  transition: all 0.3s ease 0s;
}

/*#INPUT_20, #INPUT_25, #INPUT_30, #INPUT_35, #INPUT_40*/

#INPUT_20:after, #INPUT_25:after, #INPUT_30:after, #INPUT_35:after, #INPUT_40:after, #INPUT_TG:after, #INPUT_EMAIL:after {
  border-block-end-color: rgb(34, 34, 34);
  border-block-start-color: rgb(34, 34, 34);
  border-inline-end-color: rgb(34, 34, 34);
  border-inline-start-color: rgb(34, 34, 34);
  box-sizing: border-box;
  caret-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  column-rule-color: rgb(34, 34, 34);
  text-decoration: none solid rgb(34, 34, 34);
  text-emphasis-color: rgb(34, 34, 34);
  text-size-adjust: 100%;
  border: 0px none rgb(34, 34, 34);
  font: 14px / 15.4px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(34, 34, 34) none 0px;
}

/*#INPUT_20:after, #INPUT_25:after, #INPUT_30:after, #INPUT_35:after, #INPUT_40:after*/

#INPUT_20:before, #INPUT_25:before, #INPUT_30:before, #INPUT_35:before, #INPUT_40:before, #INPUT_TG:before, #INPUT_EMAIL:before {
  border-block-end-color: rgb(34, 34, 34);
  border-block-start-color: rgb(34, 34, 34);
  border-inline-end-color: rgb(34, 34, 34);
  border-inline-start-color: rgb(34, 34, 34);
  box-sizing: border-box;
  caret-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
  column-rule-color: rgb(34, 34, 34);
  text-decoration: none solid rgb(34, 34, 34);
  text-emphasis-color: rgb(34, 34, 34);
  text-size-adjust: 100%;
  border: 0px none rgb(34, 34, 34);
  font: 14px / 15.4px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(34, 34, 34) none 0px;
}

/*#INPUT_20:before, #INPUT_25:before, #INPUT_30:before, #INPUT_35:before, #INPUT_40:before*/

#DIV_21, #DIV_26, #DIV_31, #DIV_41 {
  block-size: 0px;
  box-sizing: border-box;
  height: 0px;
  inline-size: 240px;
  perspective-origin: 120px 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 120px 0px;
  width: 240px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_21, #DIV_26, #DIV_31, #DIV_41*/

#DIV_21:after, #DIV_26:after, #DIV_31:after, #DIV_41:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_21:after, #DIV_26:after, #DIV_31:after, #DIV_41:after*/

#DIV_21:before, #DIV_26:before, #DIV_31:before, #DIV_41:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_21:before, #DIV_26:before, #DIV_31:before, #DIV_41:before*/

#DIV_27 {
  block-size: 48px;
  box-sizing: border-box;
  display: flex;
  height: 48px;
  inline-size: 370px;
  margin-block-end: 20px;
  perspective-origin: 185px 24px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 24px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 20px;
}

/*#DIV_27*/

#DIV_27:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_27:after*/

#DIV_27:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_27:before*/

#LABEL_28 {
  block-size: 42px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 42px;
  inline-size: 120px;
  margin-block-start: 6px;
  margin-inline-end: 10px;
  max-inline-size: 120px;
  max-width: 120px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 60px 21px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 60px 21px;
  user-select: none;
  width: 120px;
  flex: 0 0 120px;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  margin: 6px 10px 0px 0px;
}

/*#LABEL_28*/

#LABEL_28:after {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_28:after*/

#LABEL_28:before {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_28:before*/

#DIV_29 {
  block-size: 48px;
  bottom: 0px;
  box-sizing: border-box;
  height: 48px;
  inline-size: 240px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 120px 24px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 120px 24px;
  width: 240px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_29*/

#DIV_29:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_29:after*/

#DIV_29:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_29:before*/

#DIV_36 {
  block-size: 0px;
  box-sizing: border-box;
  height: 0px;
  inline-size: 240px;
  perspective-origin: 120px 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 120px 0px;
  width: 240px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_36*/

#DIV_36:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_36:after*/

#DIV_36:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_36:before*/

#DIV_37 {
  block-size: 56.4px;
  box-sizing: border-box;
  display: flex;
  height: 56.4px;
  inline-size: 370px;
  perspective-origin: 185px 28.2px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 28.2px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_37*/

#DIV_37:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_37:after*/

#DIV_37:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_37:before*/

#LABEL_38 {
  block-size: 50.4px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 50.4px;
  inline-size: 120px;
  margin-block-start: 6px;
  margin-inline-end: 10px;
  max-inline-size: 120px;
  max-width: 120px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 60px 25.2px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 60px 25.2px;
  user-select: none;
  width: 120px;
  flex: 0 0 120px;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  margin: 6px 10px 0px 0px;
}

/*#LABEL_38*/

#LABEL_38:after {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_38:after*/

#LABEL_38:before {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_38:before*/

#DIV_39 {
  block-size: 56.4px;
  bottom: 0px;
  box-sizing: border-box;
  height: 56.4px;
  inline-size: 240px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 120px 28.2px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 120px 28.2px;
  width: 240px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_39*/

#DIV_39:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_39:after*/

#DIV_39:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_39:before*/

#SMALL_42 {
  block-size: 18px;
  border-block-end-color: rgb(163, 163, 163);
  border-block-start-color: rgb(163, 163, 163);
  border-inline-end-color: rgb(163, 163, 163);
  border-inline-start-color: rgb(163, 163, 163);
  box-sizing: border-box;
  caret-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  column-rule-color: rgb(163, 163, 163);
  display: block;
  height: 18px;
  inline-size: 240px;
  margin-block-start: 5px;
  perspective-origin: 120px 9px;
  text-decoration: none solid rgb(163, 163, 163);
  text-emphasis-color: rgb(163, 163, 163);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 120px 9px;
  width: 240px;
  border: 0px none rgb(163, 163, 163);
  font: 12px / 18px Montserrat, Helvetica, Arial, sans-serif;
  margin: 5px 0px 0px;
  outline: rgb(163, 163, 163) none 0px;
}

/*#SMALL_42*/

#SMALL_42:after {
  border-block-end-color: rgb(163, 163, 163);
  border-block-start-color: rgb(163, 163, 163);
  border-inline-end-color: rgb(163, 163, 163);
  border-inline-start-color: rgb(163, 163, 163);
  box-sizing: border-box;
  caret-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  column-rule-color: rgb(163, 163, 163);
  text-decoration: none solid rgb(163, 163, 163);
  text-emphasis-color: rgb(163, 163, 163);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(163, 163, 163);
  font: 12px / 18px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(163, 163, 163) none 0px;
}

/*#SMALL_42:after*/

#SMALL_42:before {
  border-block-end-color: rgb(163, 163, 163);
  border-block-start-color: rgb(163, 163, 163);
  border-inline-end-color: rgb(163, 163, 163);
  border-inline-start-color: rgb(163, 163, 163);
  box-sizing: border-box;
  caret-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  column-rule-color: rgb(163, 163, 163);
  text-decoration: none solid rgb(163, 163, 163);
  text-emphasis-color: rgb(163, 163, 163);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(163, 163, 163);
  font: 12px / 18px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(163, 163, 163) none 0px;
}

/*#SMALL_42:before*/

#DIV_43 {
  align-items: flex-start;
  block-size: 231.65px;
  box-sizing: border-box;
  display: flex;
  height: 231.65px;
  inline-size: 1489.2px;
  margin-block-end: 40px;
  perspective-origin: 744.6px 115.825px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 744.6px 115.825px;
  width: 1489.2px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 40px;
}

/*#DIV_43*/

#DIV_43:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_43:after*/

#DIV_43:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_43:before*/

#DIV_44 {
  block-size: 54px;
  box-sizing: border-box;
  height: 54px;
  inline-size: 250px;
  margin-inline-end: 20px;
  max-inline-size: 250px;
  max-width: 250px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 125px 27px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 125px 27px;
  width: 250px;
  flex: 0 0 250px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 20px 0px 0px;
}

/*#DIV_44*/

#DIV_44:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_44:after*/

#DIV_44:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_44:before*/

#DIV_45 {
  block-size: 54px;
  text-align: left;
  box-sizing: border-box;
  height: 54px;
  inline-size: 250px;
  perspective-origin: 125px 27px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 125px 27px;
  width: 250px;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_45*/

#DIV_45:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_45:after*/

#DIV_45:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 600 18px / 27px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_45:before*/

#DIV_46 {
  block-size: 231.65px;
  box-sizing: border-box;
  height: 231.65px;
  inline-size: 490px;
  max-inline-size: 490px;
  max-width: 490px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 245px 115.825px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 115.825px;
  width: 490px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_46*/

#DIV_46:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_46:after*/

#DIV_46:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_46:before*/

#DIV_47 {
  box-sizing: border-box;
  cursor: pointer;
  display: none;
  margin-block-end: 20px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 600 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 20px;
}

/*#DIV_47*/

#DIV_47:after {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 600 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_47:after*/

#DIV_47:before {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 600 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_47:before*/

#DIV_48 {
  block-size: 42px;
  box-sizing: border-box;
  height: 42px;
  inline-size: 490px;
  perspective-origin: 245px 21px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 21px;
  width: 490px;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_48*/

#DIV_48:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_48:after*/

#DIV_48:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_48:before*/

#P_49 {
  text-align: left;
  block-size: 42px;
  border-block-end-color: rgb(104, 104, 105);
  border-block-start-color: rgb(104, 104, 105);
  border-inline-end-color: rgb(104, 104, 105);
  border-inline-start-color: rgb(104, 104, 105);
  box-sizing: border-box;
  caret-color: rgb(104, 104, 105);
  color: rgb(104, 104, 105);
  column-rule-color: rgb(104, 104, 105);
  height: 42px;
  inline-size: 490px;
  margin-block-end: 0px;
  margin-block-start: 0px;
  perspective-origin: 245px 21px;
  text-decoration: none solid rgb(104, 104, 105);
  text-emphasis-color: rgb(104, 104, 105);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 21px;
  width: 490px;
  border: 0px none rgb(104, 104, 105);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px;
  outline: rgb(104, 104, 105) none 0px;
}

/*#P_49*/

#P_49:after {
  border-block-end-color: rgb(104, 104, 105);
  border-block-start-color: rgb(104, 104, 105);
  border-inline-end-color: rgb(104, 104, 105);
  border-inline-start-color: rgb(104, 104, 105);
  box-sizing: border-box;
  caret-color: rgb(104, 104, 105);
  color: rgb(104, 104, 105);
  column-rule-color: rgb(104, 104, 105);
  text-decoration: none solid rgb(104, 104, 105);
  text-emphasis-color: rgb(104, 104, 105);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(104, 104, 105);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(104, 104, 105) none 0px;
}

/*#P_49:after*/

#P_49:before {
  border-block-end-color: rgb(104, 104, 105);
  border-block-start-color: rgb(104, 104, 105);
  border-inline-end-color: rgb(104, 104, 105);
  border-inline-start-color: rgb(104, 104, 105);
  box-sizing: border-box;
  caret-color: rgb(104, 104, 105);
  color: rgb(104, 104, 105);
  column-rule-color: rgb(104, 104, 105);
  text-decoration: none solid rgb(104, 104, 105);
  text-emphasis-color: rgb(104, 104, 105);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(104, 104, 105);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(104, 104, 105) none 0px;
}

/*#P_49:before*/

#DIV_50 {
  text-align: left;
  block-size: 169.65px;
  box-sizing: border-box;
  height: 169.65px;
  inline-size: 370px;
  margin-block-start: 20px;
  max-inline-size: 370px;
  max-width: 370px;
  perspective-origin: 185px 84.825px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 84.825px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 20px 0px 0px;
}

/*#DIV_50*/

#DIV_50:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_50:after*/

#DIV_50:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_50:before*/

#DIV_51 {
  block-size: 22.5px;
  box-sizing: border-box;
  cursor: pointer;
  height: 22.5px;
  inline-size: 370px;
  margin-block-end: 20px;
  perspective-origin: 185px 11.25px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 11.25px;
  user-select: none;
  width: 370px;
  font: 600 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 20px;
}

/*#DIV_51*/

#DIV_51:after {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 600 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_51:after*/

#DIV_51:before {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 600 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_51:before*/

#DIV_52 {
  block-size: 127.15px;
  box-sizing: border-box;
  height: 127.15px;
  inline-size: 370px;
  perspective-origin: 185px 63.575px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 63.575px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_52*/

#DIV_52:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_52:after*/

#DIV_52:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_52:before*/

#DIV_53 {
  align-items: center;
  block-size: 36px;
  border-block-end-color: rgb(225, 225, 227);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  box-sizing: border-box;
  display: flex;
  height: 36px;
  inline-size: 370px;
  justify-content: space-between;
  margin-block-end: 15px;
  padding-block-end: 15px;
  perspective-origin: 185px 18px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 18px;
  width: 370px;
  border-bottom: 1px solid rgb(225, 225, 227);
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 15px;
  padding: 0px 0px 15px;
}

/*#DIV_53*/

#DIV_53:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_53:after*/

#DIV_53:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_53:before*/

#DIV_54, #DIV_58, #DIV_68 {
  block-size: 20px;
  box-sizing: border-box;
  height: 20px;
  inline-size: 120px;
  margin-inline-end: 10px;
  max-inline-size: 120px;
  max-width: 120px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 60px 10px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 60px 10px;
  width: 120px;
  flex: 0 0 120px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 10px 0px 0px;
}

/*#DIV_54, #DIV_58, #DIV_68*/

#DIV_68 {
  min-width: 100% !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#DIV_54:after, #DIV_58:after, #DIV_68:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_54:after, #DIV_58:after, #DIV_68:after*/

#DIV_54:before, #DIV_58:before, #DIV_68:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_54:before, #DIV_58:before, #DIV_68:before*/

#LABEL_56, #LABEL_70, #LABEL_60 {
  align-items: center;
  block-size: 20px;
  bottom: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 20px;
  inline-size: 120px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: 20px;
  min-height: 20px;
  min-inline-size: 20px;
  min-width: 20px;
  padding-inline-start: 25px;
  perspective-origin: 60px 10px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 60px 10px;
  user-select: none;
  width: 120px;
  font: 500 14px / 16.8px Montserrat, Helvetica, Arial, sans-serif;
  padding: 0px 0px 0px 25px;
}

/*#LABEL_56, #LABEL_70*/
#LABEL_70 {
  inline-size: 130px;
  width: 130px;
}

#LABEL_56:after, #LABEL_70:after, #LABEL_60:after {
  block-size: 10px;
  border-end-end-radius: 50%;
  border-end-start-radius: 50%;
  border-start-end-radius: 50%;
  border-start-start-radius: 50%;
  bottom: 6px;
  box-sizing: border-box;
  content: '';
  cursor: pointer;
  display: block;
  height: 10px;
  inline-size: 10px;
  inset-block-end: 6px;
  inset-block-start: 4px;
  inset-inline-end: 106px;
  inset-inline-start: 4px;
  left: 4px;
  perspective-origin: 5px 5px;
  position: absolute;
  right: 106px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 4px;
  transform-origin: 5px 5px;
  user-select: none;
  width: 10px;
  border-radius: 50%;
  font: 500 14px / 16.8px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_56:after, #LABEL_70:after*/

#LABEL_56:before, #LABEL_70:before, #LABEL_60:before {
  block-size: 18px;
  border-block-end-color: rgb(45, 197, 116);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  border-block-start-color: rgb(45, 197, 116);
  border-block-start-style: solid;
  border-block-start-width: 1px;
  border-end-end-radius: 50%;
  border-end-start-radius: 50%;
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-end-style: solid;
  border-inline-end-width: 1px;
  border-inline-start-color: rgb(45, 197, 116);
  border-inline-start-style: solid;
  border-inline-start-width: 1px;
  border-start-end-radius: 50%;
  border-start-start-radius: 50%;
  bottom: 2px;
  box-sizing: border-box;
  content: '';
  cursor: pointer;
  display: block;
  height: 18px;
  inline-size: 18px;
  inset-block-end: 2px;
  inset-block-start: 0px;
  inset-inline-end: 102px;
  inset-inline-start: 0px;
  left: 0px;
  perspective-origin: 9px 9px;
  position: absolute;
  right: 102px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 9px 9px;
  user-select: none;
  width: 18px;
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  border: 1px solid rgb(45, 197, 116);
  border-radius: 50%;
  font: 500 14px / 16.8px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_56:before, #LABEL_70:before*/

#DIV_57 {
  align-items: center;
  block-size: 38.575px;
  border-block-end-color: rgb(225, 225, 227);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  box-sizing: border-box;
  display: flex;
  height: 38.575px;
  inline-size: 370px;
  justify-content: space-between;
  margin-block-end: 15px;
  padding-block-end: 15px;
  perspective-origin: 185px 19.2875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 19.2875px;
  width: 370px;
  border-bottom: 1px solid rgb(225, 225, 227);
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 15px;
  padding: 0px 0px 15px;
}

/*#DIV_57*/

#DIV_57:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_57:after*/

#DIV_57:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_57:before*/

#DIV_61 {
  align-items: center;
  block-size: 22.575px;
  box-sizing: border-box;
  display: flex;
  height: 22.575px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 50.125px 11.2875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 50.1312px 11.2875px;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_61*/

#DIV_61:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_61:after*/

#DIV_61:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_61:before*/

#SPAN_62 {
  block-size: 21px;
  box-sizing: border-box;
  display: block;
  height: 21px;
  inline-size: 73.2625px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 36.625px 10.5px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 36.6312px 10.5px;
  width: 73.2625px;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_62*/

#SPAN_62:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_62:after*/

#SPAN_62:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_62:before*/

#SPAN_63, #SPAN_73 {
  block-size: 22.575px;
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  display: block;
  height: 22.575px;
  inline-size: 27px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 13.5px 11.2875px;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 13.5px 11.2875px;
  width: 27px;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#SPAN_63, #SPAN_73*/

#SPAN_63:after, #SPAN_73:after {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#SPAN_63:after, #SPAN_73:after*/

#SPAN_63:before, #SPAN_73:before {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#SPAN_63:before, #SPAN_73:before*/

#svg_64, #svg_74 {
  block-size: 22px;
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  display: inline-block;
  fill: rgb(45, 197, 116);
  height: 22px;
  inline-size: 22px;
  margin-inline-start: 5px;
  perspective-origin: 11px 11px;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 11px 11px;
  vertical-align: middle;
  width: 22px;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 0px 5px;
  outline: rgb(45, 197, 116) none 0px;
  overflow: hidden;
  transition: all 0.3s ease 0s;
}

/*#svg_64, #svg_74*/

#svg_64:after, #svg_74:after {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  fill: rgb(45, 197, 116);
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#svg_64:after, #svg_74:after*/

#svg_64:before, #svg_74:before {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  fill: rgb(45, 197, 116);
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#svg_64:before, #svg_74:before*/

#path_65, #path_75 {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  clip-rule: evenodd;
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  d: path("M 9.22081 3.77446 C 9.63603 3.35924 10.1992 3.12598 10.7864 3.12598 C 12.0092 3.12598 13.0005 4.11725 13.0005 5.34004 C 13.0005 5.92725 12.7672 6.49041 12.352 6.90563 L 9.74075 9.51684 C 8.54147 10.7161 7.0388 11.5669 5.39341 11.9783 L 4.88871 12.1044 C 4.36527 12.2353 3.89113 11.7612 4.02199 11.2377 L 4.14816 10.733 C 4.55951 9.08763 5.41031 7.58496 6.60959 6.38568 L 9.22081 3.77446 Z M 10.7864 4.12598 C 10.4644 4.12598 10.1556 4.25389 9.92791 4.48157 L 9.52581 4.88367 C 9.46599 5.22738 9.63626 5.69076 10.036 6.09047 C 10.4357 6.49017 10.8991 6.66044 11.2428 6.60062 L 11.6449 6.19852 C 11.8725 5.97084 12.0005 5.66203 12.0005 5.34004 C 12.0005 4.66953 11.4569 4.12598 10.7864 4.12598 Z M 10.3671 7.47631 C 9.97046 7.32906 9.60994 7.07865 9.32886 6.79757 C 9.04778 6.51649 8.79738 6.15598 8.65012 5.75936 L 7.3167 7.09279 C 6.24558 8.16391 5.4857 9.506 5.11831 10.9756 L 5.10745 11.019 L 5.15087 11.0081 C 6.62044 10.6407 7.96253 9.88086 9.03365 8.80974 L 10.3671 7.47631 Z");
  fill: rgb(45, 197, 116);
  fill-rule: evenodd;
  perspective-origin: 0px 0px;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 0px 0px;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#path_65, #path_75*/

#path_65:after, #path_75:after {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  clip-rule: evenodd;
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  fill: rgb(45, 197, 116);
  fill-rule: evenodd;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#path_65:after, #path_75:after*/

#path_65:before, #path_75:before {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  clip-rule: evenodd;
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  fill: rgb(45, 197, 116);
  fill-rule: evenodd;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#path_65:before, #path_75:before*/

#path_66, #path_76 {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  clip-rule: evenodd;
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  d: path("M 3.33203 14.293 C 3.33203 14.0168 3.55589 13.793 3.83203 13.793 H 13.1654 C 13.4415 13.793 13.6654 14.0168 13.6654 14.293 C 13.6654 14.5691 13.4415 14.793 13.1654 14.793 H 3.83203 C 3.55589 14.793 3.33203 14.5691 3.33203 14.293 Z");
  fill: rgb(45, 197, 116);
  fill-rule: evenodd;
  perspective-origin: 0px 0px;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 0px 0px;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#path_66, #path_76*/

#path_66:after, #path_76:after {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  clip-rule: evenodd;
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  fill: rgb(45, 197, 116);
  fill-rule: evenodd;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#path_66:after, #path_76:after*/

#path_66:before, #path_76:before {
  border-block-end-color: rgb(45, 197, 116);
  border-block-start-color: rgb(45, 197, 116);
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-start-color: rgb(45, 197, 116);
  box-sizing: border-box;
  caret-color: rgb(45, 197, 116);
  clip-rule: evenodd;
  color: rgb(45, 197, 116);
  column-rule-color: rgb(45, 197, 116);
  cursor: pointer;
  fill: rgb(45, 197, 116);
  fill-rule: evenodd;
  text-decoration: none solid rgb(45, 197, 116);
  text-emphasis-color: rgb(45, 197, 116);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  border: 0px none rgb(45, 197, 116);
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(45, 197, 116) none 0px;
}

/*#path_66:before, #path_76:before*/

#DIV_67 {
  align-items: center;
  block-size: 22.575px;
  box-sizing: border-box;
  display: flex;
  height: 22.575px;
  inline-size: 370px;
  justify-content: space-between;
  perspective-origin: 185px 11.2875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 11.2875px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_67*/

#DIV_67:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_67:after*/

#DIV_67:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_67:before*/

#DIV_71 {
  align-items: center;
  block-size: 22.575px;
  box-sizing: border-box;
  display: flex;
  height: 22.575px;
  inline-size: 27px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 13.5px 11.2875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 13.5px 11.2875px;
  width: 27px;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_71*/

#DIV_71:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_71:after*/

#DIV_71:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_71:before*/

#SPAN_72 {
  block-size: 0px;
  box-sizing: border-box;
  display: block;
  height: 0px;
  inline-size: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 0px 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 0px 0px;
  width: 0px;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_72*/

#SPAN_72:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_72:after*/

#SPAN_72:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 14px / 21px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_72:before*/

#DIV_77 {
  margin: 0 0 40px 0;
  align-items: flex-start;
  block-size: 170.788px;
  box-sizing: border-box;
  display: flex;
  height: 170.788px;
  inline-size: 1489.2px;
  perspective-origin: 744.6px 85.3875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 744.6px 85.3938px;
  width: 1489.2px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_77*/

#DIV_77:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_77:after*/

#DIV_77:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_77:before*/

#DIV_80 {
  block-size: 170.788px;
  box-sizing: border-box;
  height: 170.788px;
  inline-size: 490px;
  max-inline-size: 490px;
  max-width: 490px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 245px 85.3875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 85.3938px;
  width: 490px;
  flex: 1 1 0%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_80*/

#DIV_80:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_80:after*/

#DIV_80:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_80:before*/

#DIV_81 {
  block-size: 28px;
  box-sizing: border-box;
  height: 28px;
  inline-size: 370px;
  max-inline-size: 370px;
  max-width: 370px;
  perspective-origin: 185px 14px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 14px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_81*/

#DIV_81:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_81:after*/

#DIV_81:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_81:before*/

#DIV_82 {
  block-size: 28px;
  box-sizing: border-box;
  display: flex;
  height: 28px;
  inline-size: 370px;
  perspective-origin: 185px 14px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 14px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_82*/

#DIV_82:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_82:after*/

#DIV_82:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_82:before*/

#DIV_83 {
  align-items: center;
  block-size: 28px;
  bottom: 0px;
  box-sizing: border-box;
  display: flex;
  height: 28px;
  inline-size: 340.612px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 170.3px 14px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 170.306px 14px;
  width: 340.612px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_83*/

#DIV_83:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_83:after*/

#DIV_83:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_83:before*/

#LABEL_84 {
  white-space: nowrap;
  block-size: 24px;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  height: 24px;
  inline-size: 101.213px;
  margin-block-start: 4px;
  margin-inline-end: 25px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 50.6px 12px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 50.6063px 12px;
  user-select: none;
  width: 101.213px;
  font: 500 14px / 16px Montserrat, Helvetica, Arial, sans-serif;
  margin: 4px 25px 0px 0px;
}

/*#LABEL_84*/

#LABEL_84:after {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 16px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_84:after*/

#LABEL_84:before {
  box-sizing: border-box;
  cursor: pointer;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  user-select: none;
  font: 500 14px / 16px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_84:before*/

#DIV_85 {
  block-size: 28px;
  bottom: 0px;
  box-sizing: border-box;
  height: 28px;
  inline-size: 214.4px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 107.2px 14px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 107.2px 14px;
  width: 214.4px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_85*/

#DIV_85:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_85:after*/

#DIV_85:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_85:before*/

#DIV_86 {
  block-size: 28px;
  bottom: 0px;
  box-sizing: border-box;
  height: 28px;
  inline-size: 214.4px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  perspective-origin: 107.2px 14px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 107.2px 14px;
  width: 214.4px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_86*/

#DIV_86:after {
  background-position: 50% 50%;
  block-size: 8px;
  bottom: 9px;
  box-sizing: border-box;
  content: '';
  display: block;
  height: 8px;
  inline-size: 10px;
  inset-block-end: 9px;
  inset-block-start: 11px;
  inset-inline-end: 11px;
  inset-inline-start: 193.4px;
  left: 193.4px;
  perspective-origin: 5px 4px;
  position: absolute;
  right: 11px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 11px;
  transform-origin: 5px 4px;
  width: 10px;
  background: rgba(0, 0, 0, 0) url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.842.99l6.428 6 6.429-6' stroke='%232DC574' stroke-width='1.7' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat scroll 50% 50% / 10px padding-box border-box;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  transition: all 0.5s ease 0s;
}

/*#DIV_86:after*/

#DIV_86:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_86:before*/

#INPUT_87:after {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font: 500 13.3333px Montserrat, Helvetica, Arial, sans-serif;
}

/*#INPUT_87:after*/

#INPUT_87:before {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font: 500 13.3333px Montserrat, Helvetica, Arial, sans-serif;
}

/*#INPUT_87:before*/

#DIV_88 {
  block-size: 28.8px;
  box-sizing: border-box;
  height: 28.8px;
  inline-size: 370px;
  margin-block-start: 25px;
  max-inline-size: 370px;
  max-width: 370px;
  perspective-origin: 185px 14.4px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 14.4px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 25px 0px 0px;
}

/*#DIV_88*/

#DIV_88:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_88:after*/

#DIV_88:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_88:before*/
#DIV_89 {
  align-items: center;
}
#DIV_89, #DIV_91 {
  block-size: 28.8px;
  box-sizing: border-box;
  display: flex;
  height: 28.8px;
  inline-size: 370px;
  perspective-origin: 185px 14.4px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 14.4px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_89, #DIV_91*/

#DIV_89:after, #DIV_91:after {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_89:after, #DIV_91:after*/

#DIV_89:before, #DIV_91:before {
  box-sizing: border-box;
  display: block;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_89:before, #DIV_91:before*/

#DIV_90 {
  block-size: 28.8px;
  box-sizing: border-box;
  height: 28.8px;
  inline-size: 370px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 185px 14.4px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 185px 14.4px;
  width: 370px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_90*/

#DIV_90:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_90:after*/

#DIV_90:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_90:before*/

#LABEL_93 {
  align-items: center;
  block-size: 28.8px;
  bottom: 0px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: 28.8px;
  inline-size: 345px;
  inset-block-end: 0px;
  inset-block-start: 0px;
  inset-inline-end: 0px;
  inset-inline-start: 0px;
  left: 0px;
  min-block-size: 20px;
  min-height: 20px;
  min-inline-size: 20px;
  min-width: 20px;
  padding-inline-start: 25px;
  perspective-origin: 172.5px 14.4px;
  position: relative;
  right: 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 0px;
  transform-origin: 172.5px 14.4px;
  user-select: none;
  width: 345px;
  font: 500 12px / 14.4px Montserrat, Helvetica, Arial, sans-serif;
  padding: 0px 0px 0px 25px;
}

/*#LABEL_93*/

#LABEL_93:after {
  content: "";
  position: absolute;
  left: -1px;
  top: 2px;
  color: #fff;
  background-repeat: no-repeat;
  -moz-background-size: contain;
  background-size: contain;
  background-position: 50%;
  width: 1.2rem;
  height: 1.2rem;
  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg viewBox= '0 0 14 11' fill= 'none' xmlns= 'http://www.w3.org/2000/svg' %3E%3Cpath d= 'M1.492 6.092L4.76 9.333l7.843-7.778' stroke= '%23fff' stroke-width= '2' /%3E%3C/svg%3E);
}

/*#LABEL_93:after*/

#LABEL_93:before {
  block-size: 18px;
  border-block-end-color: rgb(45, 197, 116);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  border-block-start-color: rgb(45, 197, 116);
  border-block-start-style: solid;
  border-block-start-width: 1px;
  border-end-end-radius: 2px;
  border-end-start-radius: 2px;
  border-inline-end-color: rgb(45, 197, 116);
  border-inline-end-style: solid;
  border-inline-end-width: 1px;
  border-inline-start-color: rgb(45, 197, 116);
  border-inline-start-style: solid;
  border-inline-start-width: 1px;
  border-start-end-radius: 2px;
  border-start-start-radius: 2px;
  bottom: 9.8px;
  box-sizing: border-box;
  content: '';
  cursor: pointer;
  display: block;
  height: 18px;
  inline-size: 18px;
  inset-block-end: 9.8px;
  inset-block-start: 1px;
  inset-inline-end: 327px;
  inset-inline-start: 0px;
  left: 0px;
  perspective-origin: 9px 9px;
  position: absolute;
  right: 327px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  top: 4px;
  transform-origin: 9px 9px;
  user-select: none;
  width: 18px;
  border: 1px solid rgb(45, 197, 116);
  border-radius: 2px;
  font: 500 12px / 14.4px Montserrat, Helvetica, Arial, sans-serif;
}

/*#LABEL_93:before*/

#SPAN_94 {
  block-size: 28.8px;
  box-sizing: border-box;
  display: block;
  height: 28.8px;
  inline-size: 25px;
  min-block-size: auto;
  min-height: auto;
  min-inline-size: auto;
  min-width: auto;
  perspective-origin: 12.5px 14.4px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 12.5px 14.4px;
  width: 25px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_94*/

#SPAN_94:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_94:after*/

#SPAN_94:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#SPAN_94:before*/

#svg_95 {
  block-size: 20px;
  box-sizing: border-box;
  cursor: help;
  display: inline-block;
  fill: rgb(205, 205, 205);
  height: 20px;
  inline-size: 20px;
  margin-inline-start: 5px;
  perspective-origin: 10px 10px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 10px 10px;
  vertical-align: middle;
  width: 20px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 0px 5px;
  overflow: hidden;
}

/*#svg_95*/

#svg_95:after {
  box-sizing: border-box;
  cursor: help;
  fill: rgb(205, 205, 205);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#svg_95:after*/

#svg_95:before {
  box-sizing: border-box;
  cursor: help;
  fill: rgb(205, 205, 205);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#svg_95:before*/

#use_96 {
  box-sizing: border-box;
  cursor: help;
  fill: rgb(205, 205, 205);
  perspective-origin: 0px 0px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 0px 0px;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#use_96*/

#use_96:after {
  box-sizing: border-box;
  cursor: help;
  fill: rgb(205, 205, 205);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#use_96:after*/

#use_96:before {
  box-sizing: border-box;
  cursor: help;
  fill: rgb(205, 205, 205);
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#use_96:before*/

#DIV_97 {
  block-size: 58.9875px;
  border-bottom: 1px solid rgb(225, 225, 227);
  box-sizing: border-box;
  height: 58.9875px;
  inline-size: 490px;
  perspective-origin: 245px 29.4875px;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  transform-origin: 245px 29.4937px;
  width: 490px;
  border-bottom: 1px solid rgb(225, 225, 227);
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
  margin: 0px 0px 30px 0px;
}

/*#DIV_97*/

#DIV_97:after {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_97:after*/

#DIV_97:before {
  box-sizing: border-box;
  text-rendering: optimizespeed;
  text-size-adjust: 100%;
  font: 15px / 22.5px Montserrat, Helvetica, Arial, sans-serif;
}

/*#DIV_97:before*/

#BUTTON_98 {
  block-size: 42.9875px;
  border-block-end-color: rgba(0, 0, 0, 0);
  border-block-end-style: solid;
  border-block-end-width: 1px;
  border-block-start-color: rgba(0, 0, 0, 0);
  border-block-start-style: solid;
  border-block-start-width: 1px;
  border-end-end-radius: 4px;
  border-end-start-radius: 4px;
  border-inline-end-color: rgba(0, 0, 0, 0);
  border-inline-end-style: solid;
  border-inline-end-width: 1px;
  border-inline-start-color: rgba(0, 0, 0, 0);
  border-inline-start-style: solid;
  border-inline-start-width: 1px;
  border-start-end-radius: 4px;
  border-start-start-radius: 4px;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  display: block;
  height: 42.9875px;
  inline-size: 490px;
  padding-block-end: 13px;
  padding-block-start: 13px;
  padding-inline-end: 20px;
  padding-inline-start: 20px;
  perspective-origin: 245px 21.4875px;
  text-decoration: none solid rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  text-size-adjust: 100%;
  transform-origin: 245px 21.4937px;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 490px;
  background: rgb(45, 197, 116) none repeat scroll 0% 0% / auto padding-box border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px;
  font: 600 13px / 14.3px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  padding: 13px 20px;
  transition: all 0.3s ease 0s;
}

/*#BUTTON_98*/

#BUTTON_98:after {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none solid rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  white-space: nowrap;
  border: 0px none rgb(255, 255, 255);
  font: 600 13px / 14.3px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#BUTTON_98:after*/

#BUTTON_98:before {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-decoration: none solid rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  white-space: nowrap;
  border: 0px none rgb(255, 255, 255);
  font: 600 13px / 14.3px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#BUTTON_98:before*/

#SPAN_99 {
  block-size: 14.3px;
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-block;
  height: 14.3px;
  inline-size: 73.6625px;
  perspective-origin: 36.825px 7.15px;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  text-size-adjust: 100%;
  transform-origin: 36.8312px 7.15px;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 73.6625px;
  border: 0px none rgb(255, 255, 255);
  font: 600 13px / 14.3px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#SPAN_99*/

#SPAN_99:after {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  white-space: nowrap;
  border: 0px none rgb(255, 255, 255);
  font: 600 13px / 14.3px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#SPAN_99:after*/

#SPAN_99:before {
  border-block-end-color: rgb(255, 255, 255);
  border-block-start-color: rgb(255, 255, 255);
  border-inline-end-color: rgb(255, 255, 255);
  border-inline-start-color: rgb(255, 255, 255);
  box-sizing: border-box;
  caret-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  column-rule-color: rgb(255, 255, 255);
  cursor: pointer;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-emphasis-color: rgb(255, 255, 255);
  text-size-adjust: 100%;
  user-select: none;
  white-space: nowrap;
  border: 0px none rgb(255, 255, 255);
  font: 600 13px / 14.3px Montserrat, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
}

/*#SPAN_99:before*/


</style>
