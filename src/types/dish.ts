export interface DishPreview {
    id: string
    category: string
    previewImage: any
    title: string
    previewDescription: string
    likes: string
    time: string
    quantity: string
}

export interface Dish extends DishPreview {
}