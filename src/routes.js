import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';

class HomeScreen extends React.Component {
    render() {
        return (
            <Login />
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

// const AppNavigator = createStackNavigator(
const SignedOut = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);


//Signed In  Routes
class Tour1Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tour 1 Screen</Text>
            </View>
        );
    }
}

class Tour2Screen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tour 2 Screen</Text>
            </View>
        );
    }
}

class FeedScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Feed Screen</Text>
            </View>
        );
    }
}

const SignedIn = createStackNavigator(
    {
        Tour1: Tour1Screen,
        Tour2: Tour2Screen,
        Feed: FeedScreen,
    },
    {
        initialRouteName: 'Tour1',
    }
);

// export default createAppContainer(AppNavigator);
export default createAppContainer(SignedIn);