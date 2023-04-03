import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"

export type HomeTabParamList = {
	Landing: undefined,
	GearList: undefined,
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
	BottomTabScreenProps<HomeTabParamList, T>