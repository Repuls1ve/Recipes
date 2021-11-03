import React, {FC, useState} from 'react'
import {View, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {MaterialIcons} from '@expo/vector-icons'

import {RootNavigatorParamsList} from '../../nav/routes'

import styles from './styles'

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'RecipeDetailed'>

interface RecipeDetailedProps extends NavigationProps {
}

type branch = 'Ingredients' | 'Preparations'

const RecipeDetailed: FC<RecipeDetailedProps> = ({route, navigation}) => {
    const {title, description, time, ingredients, preparations, overview} = route.params

    const [servings, setServings] = useState(1)
    const [branch, setBranch] = useState<branch>('Ingredients')

    const increaseServings = () => setServings(servings + 1)
    const decreaseServings = () => setServings(servings - 1)

    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={overview} style={styles.image}/>
            <View style={styles.contentWrapper}>
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <View style={styles.time}>
                        <View style={styles.servings}>
                            <Text style={styles.servingsText}>Количество порций</Text>
                            <View style={styles.servingsSelect}>
                                <TouchableOpacity style={styles.servingsButton} disabled={servings <= 1} onPress={decreaseServings}>
                                    <MaterialIcons name='remove' style={styles.servingsIcon}/>
                                </TouchableOpacity>
                                <Text style={styles.servingsCount}>{servings}</Text>
                                <TouchableOpacity style={styles.servingsButton} disabled={servings >= 20} onPress={increaseServings}>
                                    <MaterialIcons name='add' style={styles.servingsIcon}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.cookingTime}>
                            <Text style={styles.cookingTimeText}>Время готовки</Text>
                            <Text style={styles.cookingTimeCount}>{getCookingTime()}</Text>
                        </View>
                    </View>
                    <View style={styles.branches}>
                        <TouchableOpacity style={styles.branchWrapper} onPress={() => setBranch('Ingredients')}>
                            <View style={styles.branchContainer}>
                                <Text style={styles.branchTitle}>Ингредиенты</Text>
                            </View>
                            {branch === 'Ingredients' && <View style={styles.branchSelected}/>}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.branchWrapper} onPress={() => setBranch('Preparations')}>
                            <View style={styles.branchContainer}>
                                <Text style={styles.branchTitle}>Приготовления</Text>
                            </View>
                            {branch === 'Preparations' && <View style={styles.branchSelected}/>}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.branchDetailed}>
                        {branch === 'Ingredients' && ingredients.map((ingredient, index) => (
                            <View style={styles.ingredients} key={ingredient + index}>
                                <View style={styles.dot}/>
                                <Text>{ingredient}</Text>
                            </View>
                        ))}
                        {branch === 'Preparations' && preparations.map((preparation, index) => (
                            <View style={styles.preparations} key={preparation + index}>
                                <View style={styles.dot}/>
                                <Text>{preparation}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )

    function getCookingTime(): string {
        const servingTime = parseFloat(time)
        const totalTime = servingTime * servings
        const hours = Math.floor(totalTime / 60)
        const minutes = parseInt((totalTime % 60).toFixed(0))
        return (hours > 0 && minutes > 0) ? `${hours} ч. ${minutes} мин.` :
               hours <= 0 ? `${minutes} мин.` : `${hours} ч.`
    }
}

export default RecipeDetailed