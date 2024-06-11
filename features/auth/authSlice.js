import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: {
        email: null,
        localId: null,
      },
      token: null,
      imageCamera: null,
      profilePicture: null,
      location: {
        address: '',
        latitude: 0,
        longitude: 0,
      },
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload.data.email
      state.value.token = action.payload.data.idToken
    },
    clearUser: (state, action) => {
      state.value.user = null
      state.value.token = null
    },
    setCameraImage: (state, action) => {
      state.value.imageCamera = action.payload
    },
    setProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload
    },
    setUserLocation: (state, action) => {
      state.value.location = action.payload
    },
  },
})

export const { setUser, clearUser, setCameraImage, setProfilePicture, setUserLocation, } = authSlice.actions

export default authSlice.reducer