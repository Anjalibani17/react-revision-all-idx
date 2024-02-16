

export const incrementAction=(counter)=>({
    type:'INC',
    payload:{counter:++counter}
})