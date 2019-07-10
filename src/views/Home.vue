<template>
  <div class="rocket-space__analytics-response">
    <h1>Faça o Login</h1>
    <button class="google-btn" v-on:click="signUp">Sign in with Google</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { mapActions } from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions({ setCustomer: 'setCustomer' }),
  },
})

export default class Home extends Vue {
  private setCustomer: any;
  private additionalUserInfo: any;

  signUp() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.additionalUserInfo = result.additionalUserInfo;
      this.setCustomer(this.additionalUserInfo.profile);

      this.$router.push({ name: 'about' });
    }).catch((err) => {
    // eslint-disable-next-line
      console.log('eerrrouuu', err);
    });
  }
}
</script>

<style>
  .google-btn {
    background: #367ffb;
    color: #Fff;
    border: none;
    padding: 10px;
    font-weight: 16px;
  }
</style>
