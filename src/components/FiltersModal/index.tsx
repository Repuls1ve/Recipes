import React, {FC, useState} from 'react'
import {View, Text, Modal, ModalProps, Dimensions, ScrollView} from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

import {FiltersDefault, Regimens, CookingTimes, Cuisines, CaloriesMin, CaloriesMax} from '../../constants/filter'

import {Filters} from '../../types/filters'

import Button from '../Button'

import styles from './styles'

const SliderLength = Dimensions.get('window').width * 0.9

const CustomSliderMarker: FC = () => (
    <View style={styles.sliderMarker}/>
)

interface FiltersModalProps extends ModalProps {
    onFiltersSave: (selected: Filters) => void
}

const FiltersModal: FC<FiltersModalProps> = ({onFiltersSave, ...props}) => {
    const [filters, setFilters] = useState<Filters>(FiltersDefault)

    return (
        <Modal {...props}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Text style={styles.headerTitle}>Фильтры</Text>
                        <Text style={styles.clear} onPress={() => setFilters(FiltersDefault)}>Сбросить</Text>
                        <Text style={styles.save} onPress={() => onFiltersSave(filters)}>Сохранить</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>Время приготовления</Text>
                        <View style={styles.timeSelectContainer}>
                            {CookingTimes.map(time => (
                                <Button
                                key={time}
                                style={styles.button}
                                textStyle={[styles.buttonText, filters.times.includes(time) && styles.selected]}
                                title={time}
                                onPress={() => selectTime(time)}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.regimen}>
                        <Text style={styles.regimenText}>Режим дня</Text>
                        <View style={styles.regimenSelectContainer}>
                            {Regimens.map(regimen => (
                                <Button
                                key={regimen}
                                style={styles.button}
                                textStyle={[styles.buttonText, filters.regimens.includes(regimen) && styles.selected]}
                                title={regimen}
                                onPress={() => selectRegimen(regimen)}
                                />
                            ))}
                        </View>
                    </View>
                    <View style={styles.calorific}>
                        <View style={styles.calorificHeader}>
                            <Text style={styles.calorificText}>Калорийность</Text>
                            <View style={styles.calorificValuesContainer}>
                                <Text style={styles.calorificValue}>{filters.calories.start}</Text>
                                <Text style={styles.calorificDivider}>до</Text>
                                <Text style={styles.calorificValue}>{filters.calories.end}</Text>
                            </View>
                        </View>
                        <View style={styles.sliderContainer}>
                            <MultiSlider
                            values={[filters.calories.start, filters.calories.end]}
                            sliderLength={SliderLength}
                            onValuesChangeFinish={setCalorificValues}
                            min={CaloriesMin}
                            max={CaloriesMax}
                            step={15}
                            snapped
                            allowOverlap={false}
                            minMarkerOverlapDistance={25}
                            selectedStyle={styles.slider}
                            customMarker={CustomSliderMarker}
                            />
                        </View>
                        <View style={styles.sliderLabels}>
                            <Text style={[styles.sliderLabel, styles.sliderLabelLeft]}>{CaloriesMin} ккал</Text>
                            <Text style={[styles.sliderLabel, styles.sliderLabelRight]}>{CaloriesMax} ккал</Text>
                        </View>
                    </View>
                    <View style={styles.cuisine}>
                        <Text style={styles.cuisineText}>Кухня</Text>
                        <View style={styles.cuisineCarousel}>
                            <ScrollView horizontal>
                                {Cuisines.map(cuisine => (
                                    <Button
                                    key={cuisine}
                                    title={cuisine}
                                    style={styles.cuisineButton}
                                    textStyle={[styles.buttonText, filters.cuisines.includes(cuisine) && styles.selected]}
                                    onPress={() => selectCuisine(cuisine)}
                                    />
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )

    //selectFilter(value, filterType) ???
    function selectTime(time: any) {
        filters.times.includes(time) ?
        setFilters({...filters, times: [...filters.times.filter(value => value !== time)]})
        : setFilters({...filters, times: [...filters.times, time]})
    }
    function selectRegimen(regimen: any) {
        filters.regimens.includes(regimen) ?
        setFilters({...filters, regimens: [...filters.regimens.filter(value => value !== regimen)]})
        : setFilters({...filters, regimens: [...filters.regimens, regimen]})
    }
    
    function setCalorificValues(values: number[]) {
        setFilters({...filters, calories: {
            start: values[0],
            end: values[1]
        }})
    }

    function selectCuisine(cuisine: any) {
        filters.cuisines.includes(cuisine) ? 
        setFilters({...filters, cuisines: [...filters.cuisines.filter(value => value !== cuisine)]})
        : setFilters({...filters, cuisines: [...filters.cuisines, cuisine]})
    }

}

export default FiltersModal