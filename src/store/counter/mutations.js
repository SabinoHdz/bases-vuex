
    export  const increment=(state)=>{
        state.count++;
        state.lastMutation='increment'
    }
    export  const incrementBy=(state,payload)=>{
        state.count+=payload;
        state.lastMutation='incrementBy'+ payload;
        state.lastRandomInt=payload;
    }
    export const setLoading=(state,value)=>{
        state.isLoading=value;
    }
