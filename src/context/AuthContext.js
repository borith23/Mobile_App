import axios from 'axios';
import React, {useState,createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';


export const AuthContext = createContext();
export const AuthProvider = ({children}) =>{
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const login = (email, password) =>{
    setIsLoading(true);
    axios.post(`${BASE_URL}/login`, {
      email, password
    }).then(res =>{
      const userInfo = res.data;
      console.log(userInfo);
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
    }).catch(e =>{
      console.log(`Login error ${e}`);
      setIsLoading(false);
    });
  }

  const logout = () =>{
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
  }
  return(
    <AuthContext.Provider value={{
      login,
      logout,
      userInfo,
      isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  )
}