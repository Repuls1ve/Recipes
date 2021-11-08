import React from 'react'
import {StyleProp, ViewStyle} from 'react-native'
import {RouteProp} from '@react-navigation/native'
import {MaterialBottomTabNavigationOptions} from '@react-navigation/material-bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'

import {RootNavigatorParamsList} from './routes'

//Fix any type of navigation

type OptionsProps = {
    route: RouteProp<RootNavigatorParamsList>
    navigation: any
}

export const RootTabNavigatorOptions = (props: OptionsProps): MaterialBottomTabNavigationOptions => ({
    title: props.route.name === 'RecipesNavigator' ? 'Рецепты' :
           props.route.name === 'Favourites' ? 'Избранное' :
           props.route.name === 'ProfileNavigator' ? 'Профиль' : '',
    tabBarIcon: ({color}) => {
        let iconName: any

        props.route.name === 'RecipesNavigator' ? iconName = 'restaurant' :
        props.route.name === 'Favourites' ? iconName = 'favorite' :
        props.route.name === 'ProfileNavigator' ? iconName = 'account-circle' : iconName = 'warning'

        return <MaterialIcons name={iconName} color={color} size={20}/>
    }
    
})

export const barStyle: StyleProp<ViewStyle> = {
    backgroundColor: 'white'
}
