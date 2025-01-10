import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {router, useLocalSearchParams, usePathname} from "expo-router";
import icons from "@/constants/icons";
import {useDebouncedCallback} from "use-debounce";

const Search = () => {
    const path=usePathname();
    const params= useLocalSearchParams<{query?:string}>()
    const[search,setSearch]=useState<string>(params.query || '');

    const debounced = useDebouncedCallback((text:string)=>router.setParams({query:text}),500)

    const handleSearch=(text:string)=>{
        setSearch(text);
        debounced(text);
    }
    return (
        <View className="flex flex-row items-center justify-between w-full
        rounded-lg bg-accent-100 border border-primary-100 mt-5 py-3">
           <View className="flex-1 flex-row items-center justify-start z-50" >
                <Image source={icons.search} className="size-6" />
               <TextInput
                   value={search ?? ''}
               onChangeText={handleSearch}
               placeholder="Search for your favourite estate..."
               className="text-sm font-rubik text-black-300 ml-2 flex-1"
                   placeholderTextColor="#9CA3AF"
               />
           </View>
            <TouchableOpacity className="">
                <Image source={icons.filter} className="size-6"/>
            </TouchableOpacity>
        </View>
    )
}
export default Search
