import React from "react";
import * as S from './style'

function TempNav() {
    return (
        <footer className='footer'>
            <S.Hr />
            <S.NavInit>
                <S.NavBtn className="navBtn"><S.NavA>상품<br/>추천</S.NavA></S.NavBtn>
                <S.NavBtn className="navBtn"><S.NavA>즐겨<br/>찾기</S.NavA></S.NavBtn>
                <S.NavBtn className="navBtn"><S.NavA>상품<br/>리스트</S.NavA></S.NavBtn>
                <S.NavBtn className="navBtn"><S.NavA>장바<br/>구니</S.NavA></S.NavBtn>
                <S.NavBtn className="navBtn"><S.NavA>마이<br/>페이지</S.NavA></S.NavBtn>
            </S.NavInit>
        </footer>
    )
}

export default TempNav;