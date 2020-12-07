import tourApi from "../../../../api/tourApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const tourData = createAsyncThunk('tours/tourData', async () => {
    const tour = await tourApi.getAll();
    return tour;
})
const Tour = createSlice({
    name: "tours",
    initialState: {
        tour: [],
        Loading: true,
        error: ''
    },
    reducers: {

        addtour: (state, action) => {
            state.push(action.payload)
        },
        removetour: (state, action) => {
            const removetourId = action.payload;
            state = state.filter(tour => tour.id !== removetourId);
            return state;
        },
        updatetour: (state, action) => { }
    },
    extraReducers: {
        [tourData.pending]: (state) => {
            state.Loading = true;
        },
        [tourData.rejected]: (state, action) => {
            state.Loading = true;
            state.error = action.error;
        },
        [tourData.fulfilled]: (state, action) => {
            state.Loading = false;
            state.tour = action.payload;
        }
    }
});
const { reducer, actions } = Tour;
export const { addtour, removetour } = actions;

export default reducer;