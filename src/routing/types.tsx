import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type HomeTabParamList = {
	Landing: undefined,
	Gear: undefined,
	Resources: undefined,
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
	BottomTabScreenProps<HomeTabParamList, T>