import React, {FC} from 'react'
import {View, Image, Text} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import {DishPreview} from '../../types/dish'

import styles from './styles'

interface RecipePreviewProps extends DishPreview {
}

const RecipePreview: FC<RecipePreviewProps> = ({
    previewImage,
    title,
    previewDescription,
    likes,
    time,
    quantity
}) => {
    return (
        <View style={styles.container}>
            <Image source={previewImage} style={styles.image}/>
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{previewDescription}</Text>
                <View style={styles.helpers}>
                    <View style={styles.likes}>
                        <MaterialIcons style={styles.icon} name='favorite-outline'/>
                        <Text style={styles.helperValue}>{likes}</Text>
                    </View>
                    <View style={styles.time}>
                        <MaterialIcons style={styles.icon} name='schedule'/>
                        <Text style={styles.helperValue}>{time}</Text>
                    </View>
                    <View style={styles.quantity}>
                        <Text style={styles.helperValue}>{quantity}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default RecipePreview