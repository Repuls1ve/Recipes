import {CookingTime, Cuisine, Regimen} from './recipe'

export interface Filters {
    times: CookingTime[]
    regimens: Regimen[]
    calories: {
        start: number
        end: number
    }
    cuisines: Cuisine[]
}