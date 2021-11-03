import React, {FC, useState} from 'react'
import {View, FlatList, TouchableOpacity} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {MaterialIcons} from '@expo/vector-icons'

import {RootNavigatorParamsList} from '../../nav/routes'
import {Recipe} from '../../types/recipe'
import {RecipesData} from '../../types/mockData'
import {Filters} from '../../types/filters'

import RecipePreview from '../../components/RecipePreview'
import TextField from '../../components/TextField'
import FiltersModal from '../../components/FiltersModal'

import styles from './styles'

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'Recipes'>

interface RecipesProps extends NavigationProps {
}

const Recipes: FC<RecipesProps> = ({navigation}) => {
    const [recipes, setRecipes] = useState<Recipe[]>(RecipesData)
    const [filtersVisible, setFiltersVisible] = useState(false)

    const switchFiltersVisible = () => setFiltersVisible(!filtersVisible)

    //Make usable with second filtering 
    const filterRecipesBySearch = (text: string): void => {
        const newData = recipes.filter(item => item.title.toLowerCase().includes(text.toLowerCase()))
        text.length > 0 ? setRecipes(newData) : setRecipes(RecipesData)
    }

    const filterRecipes = (filters: Filters): void => {
        const newData = RecipesData.filter(item => (
            (filters.times.length > 0 ?
            filters.times.includes(item.time) : true) &&
            (filters.regimens.length > 0 ?
            filters.regimens.includes(item.regimen) : true) &&
            (filters.cuisines.length > 0 ?
            filters.cuisines.includes(item.cuisine) : true) &&
            parseFloat(item.calories) >= filters.calories.start &&
            parseFloat(item.calories) <= filters.calories.end
            ))
        setRecipes(newData)
        switchFiltersVisible()
    }

    const renderRecipe = ({item}: {
        item: Recipe
    }) => (
        <View style={styles.recipeWrapper}>
            <RecipePreview
                title={item.title}
                description={item.description}
                time={item.time}
                picture={item.overview}
                onPress={() => navigation.navigate('RecipeDetailed', item)}
            />
        </View>
    )

    return (
        <View style={styles.container}>
            <FiltersModal
            visible={filtersVisible}
            animationType='slide'
            transparent
            onRequestClose={switchFiltersVisible}
            onFiltersSave={filterRecipes}
            />
            <View style={styles.search}>
                <TextField
                    icon='search'
                    placeholder='Искать рецепты..'
                    onChangeText={filterRecipesBySearch}
                    style={styles.searchInput}
                />
                <TouchableOpacity style={styles.filters} onPress={switchFiltersVisible}>
                    <MaterialIcons name='tune' size={24}/>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={recipes}
                    renderItem={renderRecipe}
                    keyExtractor={item => item.title}
                    extraData={recipes}
                />
            </View>
        </View>
    )
}

export default Recipes