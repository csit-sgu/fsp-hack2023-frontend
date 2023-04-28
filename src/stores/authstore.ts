import { defineStore } from 'pinia'
import axios from 'axios'
import { BACKEND_URL } from '@/config';

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: JSON.parse(localStorage.getItem('auth')),
  }),
  actions: {
    async signIn(email, password) {
      let response = await
        axios
          .request({
            url: `${BACKEND_URL}/auth/login`,
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({email: email, password: password}),
            withCredentials: true
          });
      console.log(response)
      this.token = { token : response.data.token };
      localStorage.setItem('auth', JSON.stringify(this.token))
      console.log(this.token);
    },
    logout() {
      this.token = null
      localStorage.removeItem('auth')
    }
  },
})