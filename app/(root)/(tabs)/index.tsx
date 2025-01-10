import {Image, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {Link} from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import {Card, FeaturedCard} from "@/components/Cards";
import Filter from "@/components/Filter";

export default function Index() {
  return (
  <SafeAreaView className="bg-white h-full">
    <View className="px-5">
      <View className="flex flex-row items-center justify-between mt-5">
      <View className="flex flex-row items-center">
        <Image source={images.avatar} resizeMode="contain" className="size-12 rounded-full" />
        <View className="flex flex-col ml-2 items-start justify-center">
          <Text className="text-xs font-rubik text-black-100">Good Morning</Text>
          <Text className="text-base font-rubik-medium text-black-300">Prince</Text>
        </View>
      </View>
        <Image source={icons.bell} resizeMode="contain" className="size-6"/>

      </View>
      <Search/>
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
          <TouchableOpacity className=" text-base font-rubik-bold text-primary-300" >
            <Text>See All</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-4 mt-5">
          <FeaturedCard/>
          <FeaturedCard/>

        </View>

      </View>
      <View className="flex flex-row items-center justify-between">
        <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
        <TouchableOpacity className=" text-base font-rubik-bold text-primary-300" >
          <Text>See All</Text>
        </TouchableOpacity>
      </View>
      <Filter/>
      <View className="flex flex-row gap-4 mt-5">
        <Card/>
        <Card/>

      </View>
    </View>



  </SafeAreaView>
  );
}
