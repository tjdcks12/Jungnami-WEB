<template>
<transition name="modal">
  <div class="modal_mask">
    <div class="modal_wrapper">
      <div class="modal_container" v-if="coinData">
        
        <div class="support_title">후원하기</div>
        <div class="my_coin_wrapper">
          <div class="my_coin">나의 코인
            <span class="coin_amount">{{ coinData.point - (supportCoin? supportCoin:0) }}코인</span>
          </div>
        </div>
        <v-layout row wrap justify-space-between class="support_wrapper">
          <div class="support_coin">후원 코인</div>
          <input type="text" v-model="supportCoin" placeholder="입력" @keypress="isNumber($event)" class="coin_input">
        </v-layout>

        <v-layout justify-space-between class="support_wrapper btn_wrapper">
          <button class="check_btn" v-if="!supportCoin || supportCoin > coinData.point">확인</button>
          <button class="check_btn active_btn" @click="supportLegislator" v-if="supportCoin && supportCoin <= coinData.point">확인</button>
          <button class="check_btn" @click="$emit('closeSupportModal')">취소</button>
        </v-layout>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SupportModal',
  props: ['legislatorID'],
  data () {
    return {
      supportCoin: null
    }
  },
  computed: {
    ...mapGetters ({
      coinData: 'getUserCoin'
    })
  },
  methods: {
    isNumber: function(event) {
      event = event || window.event
      var keyID = (event.which) ? event.which : event.keyCode
      // console.log('keycode ::: ' + keyID)
			if( ( keyID >=48 && keyID <= 57 ) ) {
        return
      } else {
        event.preventDefault()
      }
    },
    supportLegislator () {
      const object = {
        l_id: this.legislatorID,
        coin: this.supportCoin
      }
      this.$store.dispatch('postSupportComplete', object)
      this.$emit('closeSupportModal')
      this.$emit('openSuccessModal')
    }
  },
  created () {
    this.$store.dispatch('legislatorSupport')
  }
}
</script>

<style scoped>
@media (max-width: 960px) {
  div.modal_container {
    width: 240px;
    height: 207px;
  }
  div.support_title {
    padding-top: 78px;
    font-size: 14px;
  }
  div.my_coin {
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px; 
    padding-bottom: 8px;
    font-size: 9px;
  }
  div.support_wrapper {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 10px;
  }
  div.support_coin {
    font-size: 10px;
  }
  input.coin_input {
    width: 40px;
    height: 18px;
    border-radius: 1px;
    padding-left: 12px;
    padding-bottom: 3.2px;
    font-size: 9px;
  }
  div.support_wrapper.btn_wrapper {
    padding-top: 12px;
    margin-bottom: 14px;
  }
  button.check_btn {
    width: 95px;
    height: 22px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: 8px;
  }
}
.modal_mask
{
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal_wrapper 
{
  display: table-cell;
  vertical-align: middle;
}
.modal_container 
{
  width: 640px;
  height: 580px;
  margin: 0px auto;
  background-image: url('/static/popup_coin_people.png');
  background-size: 100% 100%;
  transition: all .3s ease;
}
.support_title
{
  padding-top: 228px;
  font-size: 38px;
  color: #6B6B6B;
  text-align: center;
  font-family: NanumBarunGothic;
}
.my_coin
{
  margin-top: 31.5px;
  margin-left: 57px;
  margin-right: 57px; 
  padding-bottom: 27px;
  border-bottom: 1px solid #D8D8D8;
  font-size: 25px;
  text-align: left;
  font-family: NanumBarunGothicLight;
}
.coin_amount
{
  color: #36C5F1;
  float: right;
  font-family: NanumBarunGothic;
}
.support_wrapper
{
  margin-left: 57px;
  margin-right: 57px;
  padding-top: 21px; 
}
.support_coin
{
  font-size: 25px;
  text-align: left;
  font-family: NanumBarunGothicLight;
}
.coin_input
{
  width: 106px;
  height: 47px;
  border: 1px solid #D8D8D8;
  border-radius: 2px;
  background: #F7F7F7;
  padding-top: 3.2px;
  padding-left: 30px;
  padding-bottom: 10px;

  font-family: NanumBarunGothicLight;
  font-size: 25px;
  color: #757575;
}
.support_wrapper.btn_wrapper
{
  padding-top: 32px;
  margin-bottom: 37.5px;
}
.check_btn
{
  width: 255px;
  height: 58px;
  border-radius: 29px;
  background: #E2E2E2;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;

  font-family: NanumBarunGothic;
  font-size: 23px;
  color: white;
}
.active_btn
{
  background: #36C5F1;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
