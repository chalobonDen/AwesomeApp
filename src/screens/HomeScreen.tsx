import { View, Text, TouchableOpacity } from 'react-native'
import type { RootStackScreenProps } from '../navigators/RootNavigator'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import CardHorizontalList from '../components/CardHorizontalList'

const HomeScreen = ({ navigation }: RootStackScreenProps<'Home'>) => {
  return (
    <View className="flex-1 items-center justify-center space-y-3">
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text className="text-blue-600">About Page</Text>
        <Icons name="airplane" size={22} />
      </TouchableOpacity>

      {/* <CardHorizontalList /> */}
    </View>
  )
}

export default HomeScreen
