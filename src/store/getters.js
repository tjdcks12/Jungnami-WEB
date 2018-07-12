export const userGetters = {
  getKakaoAccessToken (state) {
    console.log('kakaotoken 넘겨줌')
    return state.kakaoAccessToken
  },
  getOpenLoginPopUp (state) {
    console.log('login popup open')
    return state.openLoginPopUp
  }
}

export const rankGetters = {
  getLikeRankingList (state) {
    console.log('호감 순위 넘겨줌')
    return state.likeRankingList
  },
  getIsLike (state) {
    console.log('isLike 값 넘겨줌')
    return state.isLike
  },
  // 투표하기 관련
  getVotingCount (state) {
    console.log('voting count 값 넘겨줌')
    return state.voting_cnt
  },
  getOpenVotePopUp (state) {
    console.log('vote pop up 값 넘겨줌')
    return state.openVotePopUp
  },
  getLegisterID (state) {
    console.log('국회의원 아이디 값 넘겨줌')
    return state.voteTarget
  },
  getOpenVoteSplash (state) {
    return state.openVoteSplash
  }
}

export const contentsDetailGetters = {
  getActiveImgIndex (state) {
    return state.activeImgIndex
  },
  getContentsDetail (state) {
    return state.contentsDetail
  },
  getImageArray (state) {
    return state.imageArray
  }
}


//추천 페이지 게터
export const recommendGetters = {
  getRecommendTop20 (state) {
    // console.log('recommend content 값 넘겨줌')
    // console.log(state.recommendContentList)
    return state.recommendTop20
  },
  getRecommendTMI (state) {
    return state.recommendTMI
  },
  getRecommendStory (state) {
    return state.recommendStory
  },
  getTMIContents (state) {
    // console.log(state);
    return state.contentsTMI
  },
  getStoryContents (state) {
    return state.contentsStory
  },
  getRecommendContents (state) {
    return state.contentsRecommend
  },
  getMyInfo (state) {
    return state.myInfomation
  }
}

export const partyGetters = {
  getPartyContents (state) {
    return state.partyInfo
  },
  getRegionContents (state){
    return state.regionInfo
  },
  getRegion (state){
    return state.region
  }
}
