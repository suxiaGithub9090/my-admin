import { login, logout } from '@/api/login'
import { getBaseInfo } from '@/api/base'
import { getCookie, removeCookie, setCookie } from '@/utils/auth'

const user = {
  state: {
    token: getCookie('Admin-Token'),
    name: '',
    avatar: '',
    roles: [],
    curYear: getCookie('curYear'),
    curTerm: getCookie('curTerm'),
    schoolId: getCookie('schoolId'),
    calenderId: getCookie('calenderId'),
    arrangeName: sessionStorage.getItem('arrangeName')
  },

  mutations: {
    SET_SCHOOLID: (state, schoolId) => {
      state.schoolId = schoolId
    },
    SET_CALENDERID: (state, calenderId) => {
      state.calenderId = calenderId
    },
    SET_CURYEAR: (state, curYear) => {
      state.curYear = curYear
    },
    SET_CURTERM: (state, curTerm) => {
      state.curTerm = curTerm
    },
    SET_ARRANGENAME: (state, arrangeName) => {
      state.arrangeName = arrangeName
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(res => {
            if (res.SUCCESS) {
              commitBaseInfo(commit, res)
            }
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getBaseInfo()
          .then(res => {
            if (res.SUCCESS) {
              commitBaseInfo(commit, res)
            }
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            const commits = [
              'SET_TOKEN',
              'SET_SCHOOLID',
              'SET_CALENDERID',
              'SET_CURYEAR',
              'SET_CURTERM',
              'SET_ARRANGENAME'
            ]
            commits.forEach(key => {
              commit(key, '')
            })
            const removeCookies = [
              'Admin-Token',
              'schoolId',
              'calenderId',
              'calenderId',
              'curTerm'
            ]
            removeCookies.forEach(key => {
              removeCookie(key)
            })
            const sessions = [
              'local_arrangeId',
              'local_curYear',
              'local_curTerm',
              'arrangeName'
            ]
            sessions.forEach(key => {
              sessionStorage.removeItem(key)
            })
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

function commitBaseInfo(commit, res) {
  const { curXq, calendarId, curXn } = res.DATA
  const { schoolId } = res.DATA.userInfo
  commit('SET_SCHOOLID', schoolId)
  commit('SET_CALENDERID', calendarId)
  commit('SET_CURYEAR', curXn)
  commit('SET_CURTERM', curXq)
  setCookie('schoolId', schoolId)
  setCookie('calenderId', calendarId)
  setCookie('curYear', curXn)
  setCookie('curTerm', curXq)
}
export default user
