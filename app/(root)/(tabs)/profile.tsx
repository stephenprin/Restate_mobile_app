import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, ImageSourcePropType} from 'react-native'
import React from 'react'
import images from "@/constants/images";
import icons from "@/constants/icons";
import {settings} from "@/constants/data";


interface SettingsItemProps{
    icon:ImageSourcePropType;
    title:string;
    onPress?:()=>void;
    textStyle?: string;
    showArrow?:boolean;
}
const SettingItems=({icon, title, onPress, textStyle, showArrow=true}: SettingsItemProps)=>(
    <TouchableOpacity className="flex flex-row items-center justify-between py-3" onPress={onPress}>
        <View className="flex flex-row items-center gap-3" >
            <Image source={icon} className="size-6" />
            <Text className={`tex-lg font-rubik-medium text-black-300 ${textStyle}`}>{title}</Text>

            </View>
        {showArrow && <Image source={icons.rightArrow} resizeMode="contain" className="size-5" />}
    </TouchableOpacity>
)

const Profile = () => {
    const handleLogout = () => {}
    return (
        <SafeAreaView className="h-full bg-white">
           <ScrollView
           showsVerticalScrollIndicator={false}
           contentContainerClassName="pb-32 px-7"

           >
                <View className="flex-row items-center justify-between mt-5">
                    <Text className="text-xl font-rubik-bold">Profile</Text>
                    <Image source={icons.bell} resizeMode="contain" className="size-5" />
                </View>
               <View className="flex-row items-center justify-center flex mt-5">
                        <View className="flex-col flex items-center relative mt-5">
                            <Image source={images.avatar} resizeMode="contain" className="size-40 relative rounded-full" />
                            <TouchableOpacity className="absolute bottom-11 right-2" >
                                <Image source={icons.edit} resizeMode="contain" className="size-8 " />
                            </TouchableOpacity>
                            <Text className="text-2xl font-rubik-bold mt-2">Prince Nmezi</Text>
                        </View>
               </View>
               <View className="flex flex-col mt-10">
                   <SettingItems  icon={icons.calendar} title="My Bookings"/>
                   <SettingItems  icon={icons.wallet} title="Payments"/>
               </View>
               <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                   {settings.slice(2).map((item, index) => (
                       <SettingItems key={index} {...item} />
                   ))}
               </View>
               <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                   <SettingItems  icon={icons.logout} title="Logout" textStyle="text-danger" showArrow={false} onPress={handleLogout}/>
               </View>
           </ScrollView>

        </SafeAreaView>
    )
}
export default Profile
