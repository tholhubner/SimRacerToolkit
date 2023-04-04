import React from "react"
import { SafeAreaView } from "react-native"
import { Text } from "@rneui/base"
import { HomeTabScreenProps } from "../routing/types"

function GearList({ navigation, route }: HomeTabScreenProps<"Gear">): JSX.Element {
  return (
    <SafeAreaView>
			<Text style={{ color: "black" }}>Valtteri, it's James</Text>
		</SafeAreaView>
  )
}

export { GearList }
