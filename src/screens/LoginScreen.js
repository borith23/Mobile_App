import React, { useState, useContext } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const LoginScreen = ({navigation}) => {
    const {login, isLoading} = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    return (
        <View style={style.container}>
            <Spinner visibal={isLoading}/>
            <Text style={{marginBottom:20, fontSize:20, marginRight:10, fontWeight:'bold'}}>Welcom Job Post Login Here!</Text>
            <View style={style.wrapper}>
                <TextInput 
                    style={style.input} 
                    value={email}
                    placeholder="Enter email"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput 
                    style={style.input} 
                    value={password}
                    placeholder="Enter password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry 
                />

                <Button title="Login" 
                    onPress={()=>login(email, password)}
                />

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={style.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue',
    }
});

export default LoginScreen;