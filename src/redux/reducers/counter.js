export default function counter(state={counter:0},action){
    const payload=action.payload;
    return{
        counter:payload?.counter
    }
}