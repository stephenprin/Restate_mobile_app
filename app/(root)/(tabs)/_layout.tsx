import {View, Text, Image} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import  icons from "@/constants/icons"

const TabIcon= ({focused, icon, title}:{focused:boolean, icon:any,title:string})=>(
    <View className="flex-1 mt-3 items-center flex-col">
        <Image source={icon} tintColor={focused ? "#FFA500" : "#666876"} resizeMode="contain" className="size-7" />
        <Text className={`${focused? "text-primary-300 font-rubik-medium":"text-black-200 font-rubik"} text-xs w-full text-center m-1`}>{title}</Text>
    </View>
)

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel:false,
                tabBarStyle:{
                    backgroundColor:'#fff',
                    position: 'absolute',
                    borderTopColor:"#0061ff1A",
                    borderTopWidth:1,
                    minHeight:70

                }

            }}
        >
            <Tabs.Screen
            name='index'
            options={{
            title: 'Home',
                headerShown: false,
                tabBarIcon:({focused})=>(
                    <TabIcon focused={focused} icon={icons.home} title="Home"/>
                )
            }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon focused={focused} icon={icons.search} title="Explore"/>
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon:({focused})=>(
                        <TabIcon focused={focused} icon={icons.person} title="Profile"/>
                    )
                }}
            />
        </Tabs>
    )
}
export default TabLayout
