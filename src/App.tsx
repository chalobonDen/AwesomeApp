import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'react-native'
import RootNavigator from './navigators/RootNavigator'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: 3_000,
      staleTime: 3_000,
    },
  },
})

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
      // theme={{
      //   ...DarkTheme,
      //   colors: {
      //     ...DarkTheme.colors,
      //   },
      // }}
      >
        <RootNavigator />
      </NavigationContainer>
      <StatusBar barStyle={'light-content'} />
    </QueryClientProvider>
  )
}

export default App
