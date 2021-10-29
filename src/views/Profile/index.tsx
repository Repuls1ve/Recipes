import React, {FC} from 'react'
import {View, Text} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

import {RootNavigatorParamsList} from '../../nav/routes'

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'Profile'>

interface ProfileProps extends NavigationProps {
}

const Profile: FC<ProfileProps> = () => {
    return (
        <View>
            <Text>
                Profile
            </Text>
        </View>
    )
}

export default Profile