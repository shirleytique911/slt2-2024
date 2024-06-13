import { TabNavigator } from './tabNavigator'
import { AuthStack } from './authStack'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../services/shopService'
import { setUser, setUserLocation, setUserPhoto } from '../features/auth/authSlice'
import { useEffect } from 'react'
import { fetchSession } from '../db'

export const MainNavigator = () => {
  const { localId } = useSelector(state => state.auth.value.user)
  const { data: profileImage } = useGetProfileImageQuery(localId)
  const { data: userLocation } = useGetUserLocationQuery(localId)
  const dispatch = useDispatch()

  useEffect(() => {
    const getSession = async () => {
      const session = await fetchSession()
      if (session) dispatch(setUser(session))
    }
    getSession()
  }, [])

  useEffect(() => {
    if (profileImage) {
      dispatch(setUserPhoto(profileImage.image))
    }
  }, [profileImage])

  useEffect(() => {
    if (userLocation) {
      dispatch(setUserLocation(userLocation))
    }
  }, [userLocation])

  return localId ? <TabNavigator /> : <AuthStack />
}