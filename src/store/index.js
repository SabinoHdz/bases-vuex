import {createStore  } from "vuex";
import getRandomInt from "../helper/getRandomInt";
export default createStore({
    state:{
        count:1,
        lastMutation:'none',
        lastRandomInt:0,
    },
    mutations:{
        increment(state){
            state.count++;
            state.lastMutation='increment'
        },
        incrementBy(state,payload){
            state.count+=payload;
            state.lastMutation='incrementBy'+ payload;
            state.lastRandomInt=payload;
        }
    },
    actions:{
        async incrementRandomInt(context){
            const randomInt= await getRandomInt();
            context.commit('incrementBy',randomInt);
        }
    }
});