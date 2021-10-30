import React, {FC} from 'react'
import {useFonts, Inter_500Medium, Inter_600SemiBold} from '@expo-google-fonts/inter'

import AppNavigator from './src/nav/AppNavigator'

const App: FC = () => {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <AppNavigator/>
  )
}

export default App