import React, {FC} from 'react'
import {View, FlatList} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'

import {RootNavigatorParamsList} from '../../nav/routes'
import {Dish} from '../../types/dish'
import {dishes} from '../../types/mockData'

import SearchBar from '../../components/SearchBar'
import RecipePreview from '../../components/RecipePreview'

import styles from './styles'

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'Recipes'>

interface RecipesProps extends NavigationProps {
}

const Recipes: FC<RecipesProps> = () => {
    const renderRecipe = ({item}: {
        item: Dish
    }) => (
        <View style={styles.recipeWrapper}>
            <RecipePreview
                id={item.id}
                category={item.category}
                previewImage={item.previewImage}
                title={item.title}
                previewDescription={item.previewDescription}
                likes={item.likes}
                time={item.time}
                quantity={item.quantity}
            />
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <SearchBar/>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={dishes}
                    renderItem={renderRecipe}
                    keyExtractor={dish => dish.id}
                />
            </View>
        </View>
    )
}

export default Recipes