import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const firebaseConfig = {
  apiKey: 'AIzaSyDh5-A0LCHWuwD8hIfaZphPj08j_C0OkKk',
  authDomain: 'staring-in-spaces.firebaseapp.com',
  projectId: 'staring-in-spaces',
  storageBucket: 'staring-in-spaces.firebasestorage.app',
  messagingSenderId: '104430158231',
  appId: '1:104430158231:web:f78184ff5df97e61cc44d2',
  measurementId: 'G-4VZW8XFNDB',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

console.log(analytics)
