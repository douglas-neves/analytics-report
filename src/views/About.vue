<template>
  <div class="about">
    <pre class="code">{{ customer }}</pre>
    <section>
      <header>
        <h1 v-show="!customer.name">Você não está Logado</h1>
      </header>
      <article class="user" v-if="customer.name">
        <figure class="user__picture"><img :src="customer.picture"></figure>
        <div class="user__infos">
          <h2>{{ customer.name }}</h2>
          <span class="user__infos__info">
            ID: {{ customer.id }}
          </span>
          <span class="user__infos__info">
            Email: {{ customer.email }}
          </span>
          <span class="user__infos__info">
            Email Verificado: {{ customer.verified_email }}
          </span>
        </div>
      </article>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState({ customer: 'customer' }),
  }
})
export default class Home extends Vue {}
</script>

<style>
  .user {
    width: 500px;
    display: flex;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 5px;
  }

  .user__picture {
    width: 150px;
    height: 150px;
    padding: 0;
    margin: 0;
    margin-right: 15px;
    overflow: hidden;
    border: 1px solid #ccc;
    object-fit: cover;

  }

  .user__picture img {
    object-fit: cover;
    width: 150px;
    height: 150px;
  }

  .user__infos {
    width: 420px;
  }

  .user__infos__info {
    display: block;
  }
</style>
