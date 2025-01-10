import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {useState} from 'react'
import {router, useLocalSearchParams} from "expo-router";
import {categories} from "@/constants/data";

const Filter = () => {
    const params= useLocalSearchParams<{filter?:string}>()
        const [selectedCategory, setSelectedCategory] = useState<string>(params?.filter || "All")

    const handleCategoryChange = (category:string) => {
            if(selectedCategory===category){
                setSelectedCategory('All')
                router.setParams({filter:'All'})
                return
            }
            setSelectedCategory(category)
            router.setParams({filter:'category'})


    }
        return (
          <ScrollView horizontal={true} showsVerticalScrollIndicator={false} className="mt-3 mb-2">
              {categories.map((item, index)=>(
                  <TouchableOpacity key={index} onPress={()=>handleCategoryChange(item.category)} className={`flex flex-col items-start mr-4 py-2 px-4 rounded-full ${selectedCategory===item.category? "bg-primary-300":"bg-primary-100 border border-primary-200"}`}>
                      <Text className={`text-sm ${selectedCategory===item.category?"text-white font-rubik-bold mt-0.5":"text-black-300 font-rubik"}`}>{item.title}</Text>
                  </TouchableOpacity>
              ))}
          </ScrollView>
    )
}
export default Filter
