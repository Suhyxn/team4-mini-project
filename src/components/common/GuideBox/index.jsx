import React, { useState } from 'react'
import * as S from './style'
import Accordion from 'react-bootstrap/Accordion'

function GuidBox() {
  // })
  return (
    <S.Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>서비스 제공 조건</Accordion.Header>
          <Accordion.Body>
            <S.ListItem>
              할인 제외 대상
              <ul>
                <li>
                  국세, 지방세, 공과금(인터넷/모바일앱을 통한 공과금 납부 금액
                  포함), 국민연금/고용보험료/산재보험료/건강보험료 납부금액,
                  상품권 및 기프트 카드 구매, 선불카드
                  및선불전자지급수단(하나머니 등) 충전금액, 수도 요금, 자동이체
                  납부하지 않은 전기/도시가스요금, 아파트 관리비, 부동산 임대료,
                  스쿨뱅킹, 대학등록금, 대학원등록금, 초·중·고 학교납입금,
                  무이자 할부 매출은 제외됩니다.
                </li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              서비스 제공 방법
              <ul>
                <li>
                  매출 접수 된 국내외 일시불/할부 이용금액(무이자할부 이용금액
                  제외)에 따라 할인 혜택을 제공하며, 매출 취소 시 취소 접수된
                  달에서 실적 및 할인된 금액을 차감 반영합니다.
                </li>
                <li>
                  후불교통 이용금액 등 무승인거래(카드사의 승인없이 이용금액이
                  카드사에 접수됨)의 경우 매입 접수일자 기준으로 적용됩니다.
                </li>
                <li>
                  해외 이용금액은 승인일자 및 승인금액 기준으로 실적 산정(무승인
                  매입은 매입월에 산정)됩니다.
                </li>
                <li>
                  할부이용 전체금액을 할부 이용한 달의 이용금액으로 반영합니다.
                </li>
                <li>
                  모든 할인서비스는 하나카드에 등록된 국내 가맹점 및 가맹점 업종
                  기준에 따라 제공됩니다.
                </li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              지난달 실적 산정 조건
              <ul>
                <li>
                  지난달 1일부터 말일까지의(승인시점 기준) 국내 및 해외
                  일시불/할부 이용금액 기준
                </li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              지난달 실적 제외 대상
              <ul>
                <li>
                  편의점/딜리버리/대중교통/통신/생활비/디지털구독 서비스로
                  할인받은 매출 제외
                </li>
                <li>
                  국세, 지방세, 공과금(인터넷/모바일앱을통한 공과금 납부금액
                  포함), 국민연금/ 고용보험료/산재보험료/건강보험료 납부금액,
                  상품권 및 기프트카드 구매, 선불카드 및
                  선불전자지급수단(하나머니 등) 충전금액, 수도/전기요금,
                  아파트관리비, 부동산임대료, 스쿨뱅킹, 도시가스, 대학등록금,
                  대학원등록금, 초·중·고 학교납입금, 무이자 할부 매출은 제외
                </li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              지난달 실적과 관계없이 서비스 제공
              <ul>
                <li>
                  최초 카드 사용등록일부터 다음달 말일까지 지난달 실적 20만원
                  이상 60만원 미만 기준으로 서비스 제공
                </li>
              </ul>
            </S.ListItem>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>연회비 청구 및 반환 기준</Accordion.Header>
          <Accordion.Body>
            <S.ListItem>
              <strong>연회비 청구기준</strong> : 카드 발급일(발급 첫해에는
              카드사용등록일)이 속한 카드이용기간의 첫 결제일에 청구되며,
              카드발급시점을 기준으로 1년 단위로 청구됩니다
            </S.ListItem>
            <S.ListItem>
              <strong>연회비 반환기준</strong> : 이미 납부한 연회비에서 카드
              발급 및 배송 비용(발급 첫 해 연회비에 한정), 부가서비스 제공에
              소요된 비용을 차감한 후 회원이 계약을 해지한 날부터 잔여기간에
              대하여 일할 계산됩니다.
            </S.ListItem>
            <S.ListItem>
              <strong>연회비 반환시기</strong> : 카드 해지일 기준 10영업일 이내
              결제계좌로 입금됩니다. 다만, 부가서비스 제공 상품의 경우 카드
              해지일 기준 다음 다음달 5영업일에 입금됩니다.{' '}
            </S.ListItem>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>부가서비스 유지 및 변경 안내</Accordion.Header>
          <Accordion.Body>
            <S.ListItem>
              카드이용시 제공되는 포인트 및 할인혜택 등의 부가서비스는 카드
              신규출시 (<span id="prnDtti">2020년 12월 15일</span>) 이후 3년
              이상 축소·폐지 없이 유지됩니다.
            </S.ListItem>
            <S.ListItem>
              다만, 다음과 같은 사유가 발생한 경우 카드사는 부가서비스를 변경할
              수 있습니다.
              <ul>
                <li>
                  카드사 또는 부가서비스 관련 제휴업체의 휴업 · 도산 · 경영위기,
                  천재지변, 금융환경 급변 또는 그 밖에 이에 준하는 사유에 따른
                  불가피한 경우
                </li>
                <li>
                  카드사의 노력에도 제휴업체가 일방적으로 부가서비스 변경을
                  통보함에 따른 불가피한 경우
                  <br />
                  (단, 다른 제휴업체를 통해 동종의 유사한 부가서비스 제공이
                  가능한 경우 제외)
                </li>
                <li>
                  신규출시 후 부가서비스 축소 변경 없이 3년 이상 경과했고,
                  현재의 부가서비스를 유지할 경우 해당 카드의 수익성 유지가
                  어려운 경우
                </li>
              </ul>
            </S.ListItem>
            <S.ListItem>
              카드사가 부가서비스를 변경하는 경우에는 부가서비스 변경 사유, 변경
              내용 등을 사유발생 즉시 홈페이지에 게시하고, 개별 고지해 드립니다.
              <br />
              특히 카드 신규 출시 이후 3년 이상 경과했고, 해당 카드의 수익성
              유지가 어려워져 부가서비스를 변경하는 경우에는 부가서비스 변경일
              6개월 전부터 매월 개별고지 해 드립니다.
              <ul>
                <li>
                  개별고지방법 : 이용대금명세서, 우편서신, 전자우편(E-MAIL),
                  휴대폰 문자메시지 서비스 중 한가지
                </li>
              </ul>
            </S.ListItem>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>해외결제 및 기타안내</Accordion.Header>
          <Accordion.Body>
            <S.ListItem>
              결제 계좌 개설기관의 영업 마감시간(16시) 이후 결제 계좌에 입금된
              금액에 대해서는 결제 계좌 개설 기관의 사정에 따라 당일 출금되지
              못하여 연체로 처리 될 수 있으므로 유의하시기 바랍니다.
            </S.ListItem>
            <S.ListItem>
              자동납부 업무 마감시간 이후 하나카드 홈페이지 / 모바일 등에서
              즉시결제 또는 가상계좌 입금(송금납부)을 통해 당일 결제가
              가능합니다.
            </S.ListItem>
            <S.ListItem>
              세부내용은 하나카드 홈페이지[고객센터-이용안내-결제안내] 및 모바일
              앱[고객센터 탭] 참고하시기 바랍니다.
            </S.ListItem>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </S.Container>
  )
}

export default GuidBox
