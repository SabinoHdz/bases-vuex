<template>
  <h1>Counter en vuex</h1>
  <h2>Acceso directo: {{ $store.state.counter.count }}</h2>
  <!-- <h2>Computed: {{ countComputed }}</h2> -->
 

  <h1>mapState</h1>
<p>{{ count }}</p>
  <h2>lastMutation: {{ lastMutation }}</h2>
<button @click="increment"> Increment +1</button>
<button @click="incrementBy"> Increment +5</button>
<button @click="incrementRandomInt" :disabled="isLoading"> Increment random</button>
<h2>Direct Getter: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  //forma de llamarlo
  methods:{
    increment(){
      this.$store.commit("counter/increment");
    },
    incrementBy(){
      this.$store.commit('counter/incrementBy',5);
    },
    incrementRandom(){
      this.$store.dispatch('counter/incrementRandomInt')
    },
    ...mapActions('counter',['incrementRandomInt']),
  },
  computed:{
    countComputed(){
      return this.$store.state.counter.count;
    },
     ...mapState('counter',['count','lastMutation','isLoading']),
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