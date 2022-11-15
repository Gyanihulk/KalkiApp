import { View, Text } from 'react-native'
import React,{ useState, useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
const AuthContext=createContext({});

const androidCredentials = {
  clientId: '',
  appId: '',
  apiKey: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
};
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '298698018509-tmok6d5n8b69nb7scr3fdlipv5ig09bl.apps.googleusercontent.com',
});
export const AuthProvider = ({children}) => {
  

  return (
    <AuthContext.Provider value ={{user:null}}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth(){
  return useContext(AuthContext)
}