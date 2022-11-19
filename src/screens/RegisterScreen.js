import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <View style={style.container}>
            <View style={style.wrapper}>
                <TextInput 
                    style={style.input}
                    value={name}
                    placeholder="Enter name"
                    onChangeText={text => setName(text)}
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
                <Button title="Register" />

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