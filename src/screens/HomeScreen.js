import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from "../context/AuthContext";

const HomeScreen = () => {
    const {logout,userInfo, isLoading} = useContext(AuthContext);
    return (
        <View>
            <Spinner visible={isLoading}/>
            <Text>HomeScreen</Text>
            <Button title="Logout" color="red" onPress={()=>logout()}/>
        </View>
    );
};

export default HomeScreen;