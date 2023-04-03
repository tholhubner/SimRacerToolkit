import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { Landing } from "../screens/"
import { RootStackParamList } from "./types"

const RootStack = createStackNavigator<RootStackParamList>()

function Router({}) {
  return (
		<NavigationContainer>
			<RootStack.Navigator initialRouteName="Landing">
				<RootStack.Screen 
					name="Landing"
					component={Landing}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
  )
}

export default Router
