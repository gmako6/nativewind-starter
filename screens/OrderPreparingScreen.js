import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
//import PayementForm from "../components/paymentForm";

export default function OrderPreparingScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    //load payment API then move to delivery screen.
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="h-80 w-80"
      />

      {/**
      <View className="mt-5">
        <PayementForm />
        <TouchableOpacity
          onPress={() => navigation.navigate("Delivery")}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 px-5  rounded-full"
        >
          <Text className="text-white text-center font-bold text-lg">
            Payment Done
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
