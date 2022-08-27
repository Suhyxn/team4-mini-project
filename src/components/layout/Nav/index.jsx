import React from "react";
import * as S from './style'
import {NavLink} from 'react-router-dom'

function TempNav() {
    return (
        <footer className='footer'>
            <S.Hr />
            <S.NavInit>
                <S.NavBtn className="navBtn">
                    <S.NavA>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/">
                            Home
                        </NavLink>
                    </S.NavA>
                </S.NavBtn>
                <S.NavBtn className="navBtn">
                    <S.NavA>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/recommened">
                            recommened 
                        </NavLink>
                    </S.NavA>
                </S.NavBtn>
                <S.NavBtn className="navBtn">
                    <S.NavA>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/favorites">
                            favorites 
                        </NavLink>
                    </S.NavA>
                </S.NavBtn>
                <S.NavBtn className="navBtn">
                    <S.NavA>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/mypage">
                            mypage 
                        </NavLink>
                    </S.NavA>
                </S.NavBtn>
            </S.NavInit>
        </footer>
    )
}

export default TempNav;