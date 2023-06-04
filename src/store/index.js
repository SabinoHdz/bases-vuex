import {createStore  } from "vuex";
import getRandomInt from "../helper/getRandomInt";
export default createStore({
    state:{
        count:1,
        lastMutation:'none',
        lastRandomInt:0,
        isLoading:false
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
        },
        setLoading(state,value){
            state.isLoading=value;
        }
    },
    actions:{
        async incrementRandomInt(context){
            context.commit('setLoading',true);
            const randomInt= await getRandomInt();
            context.commit('setLoading',false);
            context.commit('incrementBy',randomInt);
        }
    },
    getters:{
        squareCount(state){
            return state.count*state.count;
        }
    }
});