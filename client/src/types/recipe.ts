export type Cuisine = 'American' | 'Arabic' | 'Asian' | 'Chinese'

export type Regimen = 'Breakfast' | 'Lunch' | 'Snack' | 'Dinner'

export type CookingTime = '15' | '30' | '45' | '60'

export interface Recipe {
    title: string
    description: string
    time: CookingTime
    regimen: Regimen
    cuisine: Cuisine
    calories: string
    ingredients: string[]
    preparations: string[]
    overview: any
}
