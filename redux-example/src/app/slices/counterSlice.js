import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:{
        value: 0, //Solo esta parte es el currentState
    },
    reducers:{
        increment:(currentState)=>{
            currentState.value += 1
        },
        decrement:(currentState)=>{
            currentState.value -= 1
        },

        setValue:(currentState, action) =>{
            currentState.value = action.payload
        }
    }
})

//Para poder exportar las funciones que estan dentro del slice se debe de usar la propiedad actions
// export const incrementReducers= counterSlice.actions.increment

// Usamos destructuracuib para evitar crear tantas variables
export const { increment, decrement,setValue } = counterSlice.actions;



//para poder usar esto dentro del store, debo exportarlo como reducer
export const couterSliceReducer = counterSlice.reducer