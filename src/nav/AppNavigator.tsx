import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import {RootTabNavigatorOptions, barStyle} from './options'
import {RootNavigatorParamsList} from './routes'

import Profile from '../views/Profile'
import PasswordReset from '../views/PasswordReset'
import Login from '../views/Log-in'
import Registration from '../views/Registration'

const Tab = createMaterialBottomTabNavigator<RootNavigatorParamsList>()

const ProfileStack = createStackNavigator<RootNavigatorParamsList>()

const Filler: FC = () => {
    return null
}

const StackNavigator: FC = () => {
    return (
        <ProfileStack.Navigator screenOptions={{
            header: () => null 
        }}>
            <ProfileStack.Screen name='Login' component={Login}/>
            <ProfileStack.Screen name='Registration' component={Registration}/>
            <ProfileStack.Screen name='PasswordReset' component={PasswordReset}/>
            <ProfileStack.Screen name='Profile' component={Profile}/>
        </ProfileStack.Navigator>
    )
}

const AppNavigator: FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            activeColor='#1DE9B6'
            barStyle={barStyle}
            // @ts-ignore
            screenOptions={RootTabNavigatorOptions}
            >
                <Tab.Screen name='Recipes' component={Filler}/>
                <Tab.Screen name='Favourites' component={Filler}/>
                <Tab.Screen name='ProfileNavigator' component={StackNavigator}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
