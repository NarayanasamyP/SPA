import { createSlice } from '@reduxjs/toolkit'

export const CarSlice = createSlice({
  name: 'cars',
  initialState: {
    name: '',
    model: "",
    color: "",
    year: "",
    insurance: "",
    kms: "",
    location: "",
    owners: "",
    transmission: "",
    externalFitments: "",
    photos: ""
  },
  reducers: {
    saveData: (state) => {
      debugger;
    //   const newState: object[] = [...state];
      state={
        name: state.name,
    model: state.model,
    color: state.color,
    year: state.year,
    insurance: state.insurance,
    kms: state.kms,
    location: state.location,
    owners: state.owners,
    transmission: state.transmission,
    externalFitments: state.externalFitments,
    photos: state.photos
      }
    }
  },
})

export const { saveData } = CarSlice.actions

export default CarSlice.reducer
