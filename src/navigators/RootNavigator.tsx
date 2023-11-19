import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import AboutScreen from '../screens/AboutScreen'

export type RootStackParamList = {
  Home: undefined
  About: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="About" component={AboutScreen} />
    </RootStack.Navigator>
  )
}

export default RootNavigator
