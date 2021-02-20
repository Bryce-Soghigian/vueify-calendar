import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import "firebase/firestore"


Vue.use(VueTextareaAutosize)
Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: "AIzaSyBWZvSvJSNwwhyqTG5E5w1ly9AeiOnJB5Y",
  authDomain: "vue-firebase-vueify.firebaseapp.com",
  projectId: "vue-firebase-vueify",
  storageBucket: "vue-firebase-vueify.appspot.com",
  messagingSenderId: "733761810334",
  appId: "1:733761810334:web:ec5ae6d701aac14401f08f",
  measurementId: "G-8HVN9SYSRC"
});


export const db = firebase.firestore();


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
