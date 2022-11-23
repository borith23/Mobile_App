import React, { useState, useContext } from "react";
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";


const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [gender, setGender] = useState(null);
    const [password, setPassword] = useState(null);
    const {isLoading, register} = useContext(AuthContext);
    return (
        <View style={style.container}>
             <Spinner visibal={isLoading}/>
             <Text style={{marginBottom:20, fontSize:20, marginRight:10, fontWeight:'bold'}}>Welcom Job Post Register Here!</Text>
            <View style={style.wrapper}>
                <TextInput 
                    style={style.input}
                    value={name}
                    placeholder="Enter name"
                    onChangeText={text => setName(text)}
                />
                <TextInput 
                    style={style.input}
                    value={gender}
                    placeholder="Enter gender"
                    onChangeText={text => setGender(text)}
                />
                <TextInput 
                    style={style.input}
                    value={phone}
                    placeholder="Enter phone number"
                    onChangeText={text => setPhone(text)}
                />
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
                <Button title="Register"
                    onPress={()=>register(name, gender, phone, email, password)}
                />

                <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={style.link}>Login</Text>
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

export default RegisterScreen;