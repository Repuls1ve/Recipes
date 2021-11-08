import React, {FC, useEffect} from 'react'
import {useFonts, Inter_500Medium, Inter_600SemiBold} from '@expo-google-fonts/inter'

import {useAppDispatch} from './src/hooks/redux'
import {refresh} from './src/store/slices/user-slice'
import {IAuth} from './src/types/user'

import * as SecureStore from 'expo-secure-store'

import AppNavigator from './src/nav/AppNavigator'

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold
  })

  const dispatch = useAppDispatch()

  const isSignedIn = async () => {
    const item = await SecureStore.getItemAsync('auth')
    if (!item) return
    const data: IAuth = JSON.parse(item)
    dispatch(refresh(data.token))
  } 

  useEffect(() => {
    isSignedIn()
  }, [])

  if (!fontsLoaded) {
    return null
  }

  return (
    <AppNavigator/>
  )
}

export default App