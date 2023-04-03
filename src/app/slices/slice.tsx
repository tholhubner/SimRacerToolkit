import { createSlice } from "@reduxjs/toolkit"

export const slice = createSlice({
	name: "slice",
	initialState: {},
	reducers: {
		resetData: (state) => {
			state = {}
		}
	}
})

export const {
	resetData
} = slice.actions

export default slice.reducer