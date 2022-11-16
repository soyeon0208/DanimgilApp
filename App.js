import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getHeaderTitle } from '@react-navigation/elements';
import Map from './src/Components/Map/Map'
import Home from './src/Components/Home/Home'
import Login from './src/Components/Home/Login'
import Menu from './src/Components/Home/Menu';

const Stack = createNativeStackNavigator();

header: ({ navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);
}

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator 
//                 initialRouteName="Home"
//                 screenOptions={{ headerShown: false }}
//             >
//                 {/* <Stack.Screen name="Home" component={HomeScreen} />
//                 <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//                 <Stack.Screen name='Home' component={Home}/>
//                 <Stack.Screen name='Login' component={Login} />
//                 <Stack.Screen name="Map" component={Map} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };


function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name='Menu' component={Menu} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;