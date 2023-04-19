export const state = () => ({
  user: []
})

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload
  },
}

export const actions = {
  async getUser({commit}) {
    const response = await this.$axios.get(`https://api.av100.ru/v3/user/${localStorage.getItem("id")}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
        "X-User-Token": localStorage.getItem("token")
      }
    })
    commit('SET_USER', response.data)
    return response.data
  },

  async login({ commit }, form) {
    const response = await this.$axios.post(`https://api.av100.ru/v3/login`, form, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9"
      }
    })
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("id", response.data.user.id)
    commit('SET_USER',response.data.user)
  },

  async changeEmail({ commit }, email) {
    const response = await this.$axios.put(`https://api.av100.ru/v3/user/${localStorage.getItem("id")}`, {email: email}, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "X-Api-Key": "8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9",
        "X-User-Token": localStorage.getItem("token")
      }
    })
  },
};

export const getters = {

}
