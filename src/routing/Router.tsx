import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { GearList, Landing } from "../screens/"
import { HomeTabParamList } from "./types"
import { ResourcesList } from "../screens/ResourcesList"

const BottomTabs = createBottomTabNavigator<HomeTabParamList>()

function Router({}): JSX.Element {
  return (
		<NavigationContainer>
			<BottomTabs.Navigator initialRouteName="Landing">
				<BottomTabs.Screen 
					name="Landing"
					component={Landing}
				/>
				<BottomTabs.Screen
					name="Gear"
					component={GearList}
				/>
				<BottomTabs.Screen
					name="Resources"
					component={ResourcesList}
				/>
			</BottomTabs.Navigator>
		</NavigationContainer>
  )
}

export default Router
