import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Register from '../screens/Register';
import Password from '../screens/NewPassword';

const Stack2 = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack2.Navigator>
        <Stack2.Screen
          name="Profile"
          component={Profile}
        />
        <Stack2.Screen
          name="Register"
          component={Register}
        />
        <Stack2.Screen
          name="ForgotPassword"
          component={Password}
        />
      </Stack2.Navigator>
    </NavigationContainer>
  );
}

export default App;
