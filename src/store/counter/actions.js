import getRandomInt from "../../helper/getRandomInt";

export const  incrementRandomInt=async(context)=>{
    context.commit('setLoading',true);
    const randomInt= await getRandomInt();
    context.commit('setLoading',false);
    context.commit('incrementBy',randomInt);
}