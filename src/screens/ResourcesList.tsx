import React from "react"
import { SafeAreaView } from "react-native"
import { Text } from "@rneui/base"
import { HomeTabScreenProps } from "../routing/types"

function ResourcesList({ navigation, route }: HomeTabScreenProps<"Resources">): JSX.Element {
  return (
    <SafeAreaView>
			<Text style={{ color: "black" }}>I am stupid</Text>
		</SafeAreaView>
  )
}

export { ResourcesList }
