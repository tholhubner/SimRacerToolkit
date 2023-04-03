import React from "react"
import { SafeAreaView } from "react-native"
import { Text } from "@rneui/base"

function GearList({ navigation, route }): JSX.Element {
  return (
    <SafeAreaView>
			<Text style={{ color: "black" }}>Valtteri, it's James</Text>
		</SafeAreaView>
  )
}

export { GearList }
