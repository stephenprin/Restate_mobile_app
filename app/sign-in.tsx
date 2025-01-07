import {View, Text, Animated, Image, TouchableOpacity, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ScrollView = Animated.ScrollView;
import images from "@/constants/images";
import icons from "@/constants/icons";
import {login} from "@/lib/appwrite";
import {useGlobalContext} from "@/lib/global-provider";
import {Redirect} from "expo-router";


const SignIn = () => {
    const {loading, refetch, isLogged} = useGlobalContext()
    if(!loading && isLogged) return <Redirect href="/" />
    const handleLogin=async()=>{
            const result= await login();
            if(result){
                refetch()
                return result;
            }else{
               Alert.alert("Error", "Failed to login")
            }

    }
    return (
        <SafeAreaView className="bg-white h-full">
           <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} resizeMode="contain" className="w-full h-4/6" />
               <View className="px-10">
                   <Text className="font-rubik text-base text-black-200 text-center uppercase">Welcome to restate</Text>
                   <Text className="text-3xl text-black-300 font-rubik-bold text-center mt-2">Let's Get You Closer to {"\n"}
                       <Text className="text-primary-300">Your Dream Home</Text>
                   </Text>
                   <Text className="text-center text-lg text-black-200 mt-10 font-rubik">Login to ReState with Google</Text>
                   <TouchableOpacity className=" shadow-md shadow-zinc-300 w-full mt-1  rounded-full bg-white py-4" onPress={handleLogin}>
                        <View className="flex flex-row items-center justify-center">
                            <Image source={icons.google} resizeMode="contain" className="w-6 h-6" />
                            <Text className="text-lg font-rubik-medium ml-2 text-black-300">Continue with Google</Text>
                        </View>
                   </TouchableOpacity>
               </View>
           </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
