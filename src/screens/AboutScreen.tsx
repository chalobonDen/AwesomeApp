import { View, Text, TouchableOpacity } from 'react-native'
import type { RootStackScreenProps } from '../navigators/RootNavigator'

const AboutScreen = ({ navigation }: RootStackScreenProps<'About'>) => {
  return (
    <View>
      <Text>AboutScreen</Text>
    </View>
  )
}

export default AboutScreen
