import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../components/User/Login';
import { Register } from '../components/User/Register';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { useDispatch } from 'react-redux';
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { loginEmailPassword } from "../redux/actions/actionLogin";
// import styled from "styled-components";

// const H1 = styled.h1`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: black;
// `

export const AppRouter = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user?.uid){
          dispatch(loginEmailPassword(user.uid, user.displayName));
         setIsLoggedIn(true)
        }
        else{
         setIsLoggedIn(false)
        }

        setChecking(false)
    })

 
}, [dispatch, setIsLoggedIn,setChecking])


if(checking){
  return(
      <h1>Un momento por favor...</h1>
  )
}

  return (
    <Router>
        <Routes>
         
        <Route path="/login" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                        <Login/>                         
                    </PublicRoute>
                } />

                <Route path="/registro" element={
                    <PublicRoute isAuthenticated={isLoggedIn}>
                       <Register/>
                    </PublicRoute>
                } />

                
                <Route path="/*" element={
                    <PrivateRoute isAuthenticated={isLoggedIn}>
                        <DashboardRoutes/>
                    </PrivateRoute>
                }/>
        </Routes>
    </Router>
  );
}

