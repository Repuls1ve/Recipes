import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

import {useAppDispatch, useAppSelector} from '../../hooks/redux'

import {RootNavigatorParamsList} from '../../nav/routes'

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'Profile'>

interface ProfileProps extends NavigationProps {
}

const Profile: FC<ProfileProps> = () => {
    const user = useAppSelector(state => state.users.user)
    const dispatch = useAppDispatch()
    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
                Profile Page
            </Text>
        </View>
    )
}

export default Profile