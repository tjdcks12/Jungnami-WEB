import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import { userGetters, rankGetters, contentsDetailGetters, recommendGetters } from './getters'
import { loginMutations, rankMutations, contentsDetailMutations, recommendMutations } from './mutations'
import { loginActions, rankActions, contentsDeetailActions, recommendActions } from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    kakaoAccessToken: null,
    user_id: null,
    openLoginPopUp: false,
    openVotePopUp: false,
    openVoteSplash: false,
    voteTarget: null,
    likeRankingList: [],
    isLike: null,
    voting_cnt: null,
    activeImgIndex: 0, // 컨텐츠 상세 페이지에서 큰 이미지의 인덱스
    contentsDetail: null,
    imageArray: [],
    // 추천 페이지 시작
    recommendTop20: [],
    recommendTMI: [],
    recommendStory: [],
    contentsTMI: [],
    contentsStory: [],
    contentsRecommend: [],
    myInfomation: []
    // 추천 페이지 끝
  },
  getters: Object.assign({}, userGetters, rankGetters, contentsDetailGetters, recommendGetters),
  mutations: Object.assign({}, loginMutations, rankMutations, contentsDetailMutations, recommendMutations),
  actions: Object.assign({}, loginActions, rankActions, contentsDeetailActions, recommendActions),
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: false }), // secure같은 경우는 https일 경우에만 true로 만든다.
        removeItem: key => Cookies.remove(key)
      },
      reducer: state => ({
        kakaoAccessToken: state.kakaoAccessToken,
        user_id: state.user_id
      })
    })
  ]
})
