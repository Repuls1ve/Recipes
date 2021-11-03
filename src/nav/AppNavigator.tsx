import React, {FC} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import {RootTabNavigatorOptions, barStyle} from './options'
import {RootNavigatorParamsList} from './routes'

import Recipes from '../views/Recipes'
import RecipeDetailed from '../views/RecipeDetailed'
import Profile from '../views/Profile'
import PasswordReset from '../views/PasswordReset'
import Login from '../views/Login'
import Registration from '../views/Registration'

const Tab = createMaterialBottomTabNavigator<RootNavigatorParamsList>()

const Stack = createStackNavigator<RootNavigatorParamsList>()

const Filler: FC = () => {
    return null
}

const ProfileNavigator: FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null 
        }}>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Registration' component={Registration}/>
            <Stack.Screen name='PasswordReset' component={PasswordReset}/>
            <Stack.Screen name='Profile' component={Profile}/>
        </Stack.Navigator>
    )
}

const RecipesNavigator: FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null
        }}>
            <Stack.Screen name='Recipes' component={Recipes}/>
            <Stack.Screen name='RecipeDetailed' component={RecipeDetailed}/>
        </Stack.Navigator>
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
                <Tab.Screen name='RecipesNavigator' component={RecipesNavigator}/>
                <Tab.Screen name='Favourites' component={Filler}/>
                <Tab.Screen name='ProfileNavigator' component={ProfileNavigator}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
