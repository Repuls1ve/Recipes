import {CookingTime, Regimen, Cuisine} from "../types/recipe"
import {Filters} from "../types/filters"

export const FiltersDefault: Filters = {
    times: [],
    regimens: [],
    calories: {
        start: 30,
        end: 600
    },
    cuisines: []
}

export const Regimens: Regimen[] = [
    'Breakfast',
    'Lunch',
    'Snack',
    'Dinner'
]

export const CookingTimes: CookingTime[] = [
    '15',
    '30',
    '45',
    '60'
]

export const Cuisines: Cuisine[] = [
    'American',
    'Arabic',
    'Asian',
    'Chinese',
]

export const CaloriesMin = 30
export const CaloriesMax = 600
