### React Native

React Native is an open-source mobile application framework created by Facebook, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use React's framework along with native platform capabilities.
React Native is like React, but it uses native components instead of web components as building blocks.

ReactJs - A javascript library for building user interfaces. ReactDOM.render() adds the web support. React itself a platform agnostic.

<img src="https://github.com/vikassharma96/react-native-aaps/blob/main/app/assets/images/1.png"/>
<img src="https://github.com/vikassharma96/react-native-aaps/blob/main/app/assets/images/2.png"/>

1)Basics Component - View | Text | Image | TextInput | ScrollView | StyleSheet
2)FlexBox works such that it positions elements inside of a view next to each other or above each other. Justify content, we can control how items are distributed along their main axis and with row, the main axis is from left to right, if that would be column, the main axis would be from top to bottom. Not only does every view by default use flexbox, it also by default organizes children in a column, so from top to bottom. That's also a difference to the web. In this outer view, are organized such that they align themselves along the cross axis by stretching. We have two important axis main axis and cross axis.
3)ScrollView can be very inefficient as renders all the elements in advance, even the ones that are not on the screen. More efficient way is to use FlatList.
4)Hooks -
a)Basic Hooks - useState | useEffect | useContext
b)Additional Hooks - useReducer | useCallback | useMemo | useRef | useImperativeHandle |useLayoutEffect | useDebugValue
Use of useImperativeHandle hook to allow the child to only expose specific properties to the parent.
6)forwardRef - forward ref use when we want to pass ref to our component
