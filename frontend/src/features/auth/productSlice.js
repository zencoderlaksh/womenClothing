import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'selectedItem',
    initialState: {
        item: null,
    },
    reducers: {
        setSelectedItem: (state, action) => {
            state.item = action.payload;
        },
        clearSelectedItem: (state) => {
            state.item = null;
        }
    }
});


export const { setSelectedItem, clearSelectedItem } = productSlice.actions;
export default productSlice.reducer;
