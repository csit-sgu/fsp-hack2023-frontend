import { defineStore } from 'pinia'
import axios from 'axios'
import { BACKEND_URL } from '@/config';
import { router } from '@/router'

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: JSON.parse(localStorage.getItem('auth')),
  }),
  actions: {
    async signIn(email, password) {
      let result = null;
      let response =
        axios
          .request({
            url: `${BACKEND_URL}/auth/login`,
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({email: email, password: password}),
            withCredentials: true
          }).then(response => {
            if (response.status == 200) {
              this.token = { token : response.data.token };
              localStorage.setItem('auth', JSON.stringify(this.token))
              router.push('/')
            } else {
              result = "Не удалось войти в систему"
            }
          });
      return result;
    },
    logout() {
      this.token = null
      localStorage.removeItem('auth')
      router.push('/')
    }
  },
})