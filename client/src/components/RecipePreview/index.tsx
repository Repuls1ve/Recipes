import React, {FC} from 'react'
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import styles from './styles'

interface RecipePreviewProps {
    title: string
    description: string
    time: string | number
    picture: any
    onPress: () => void
}

const RecipePreview: FC<RecipePreviewProps> = ({
    title,
    description,
    time,
    picture,
    onPress
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View>
                <Image source={picture} style={styles.image}/>
                <View style={styles.details}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.helpers}>
                        <View style={styles.likes}>
                            <MaterialIcons style={styles.icon} name='favorite-outline'/>
                            <Text style={styles.helperValue}>555</Text>
                        </View>
                        <View style={styles.time}>
                            <MaterialIcons style={styles.icon} name='schedule'/>
                            <Text style={styles.helperValue}>{time} мин.</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RecipePreview