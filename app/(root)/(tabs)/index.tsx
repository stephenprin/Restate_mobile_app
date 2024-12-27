import {SafeAreaView, Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
  <SafeAreaView className="flex-1">
    <Text className="font-rubik-bold text-3xl mb-4">Home welcome</Text>
    <Link href="/sign-in">Sign In</Link>
    <Link href="/explore">Explore</Link>
    <Link href="/profile">Profile</Link>
    <Link href="/properties/1">Property</Link>
  </SafeAreaView>
  );
}
