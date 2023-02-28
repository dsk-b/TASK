import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layouts: "",
    formLayout: "one",
    zipcodes:"",
    // isLoading:"",
}
export const componentSlice = createSlice(
    {
        name: "comp",
        initialState,
        reducers: {
            loadData: (state, actions) => {
                state.layouts = actions.payload.layouts;
                state.formLayout = actions.payload.formLayout;
                state.zipcodes = actions.payload.zip;
                // state.isLoading = actions.payload.isLoading;
            }
        }
    }
)

export const { loadData } = componentSlice.actions;
export default componentSlice.reducer;