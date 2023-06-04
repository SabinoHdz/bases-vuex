<template>
  <h1>Counter en vuex</h1>
  <h2>Acceso directo: {{ $store.state.count }}</h2>
  <!-- <h2>Computed: {{ countComputed }}</h2> -->

  <h1>mapState</h1>
<p>{{ count }}</p>
<h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState } from 'vuex';
export default {
  //forma de llamarlo
  computed:{
    countComputed(){
      return this.$store.state.count;
    },
     ...mapState(['count']),
    //otra forma de llamar al state
    // ...mapState({
    //   count:state=>state.count,
    //   lastMutation:state=>state.lastMutation
    // })

  }
  //computed:mapState(['count'])
}
</script>

<style>

</style>