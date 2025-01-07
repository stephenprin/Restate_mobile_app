import {View, Text} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";

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
                tabBarIcon:()=>(
                    <Text>Home</Text>
                )
            }}
            />
        </Tabs>
    )
}
export default TabLayout
