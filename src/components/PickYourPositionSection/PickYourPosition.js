/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Highlight } from 'components/styledComponents/Highlight';
import { BackgroundColor } from 'components/styledComponents/Backgrounds';
import { SectionTitle, CardText } from '../styledComponents/Texts'
import { FlexContainer, ContainerForMobile, ContainerForBiggerScreens, PickYourPositionContainer } from '../styledComponents/Containers'
import { Carousel } from './Carousel'
import ProgramDeck from '../../images/ProgramDeck.png'
import { CardDeck } from './CardDeck'

export const PickYourPositionSection = () => {
  return (
    <FlexContainer gap="1em" padding="0px 8px 40px 8px" pickPosition>
      <BackgroundColor background="#045661" width="100vw" />
      <SectionTitle absolute background="#EDFDFF" color="#002A30">Pick your position</SectionTitle>
      <PickYourPositionContainer>
        <FlexContainer borderRadius="0px 23px 23px 23px" background="#EDFDFF" width="91%" padding="0px 8px 8px 0px">
          <SectionTitle alignSelf="flex-start" background="#004852">About the programs</SectionTitle>
          <CardText>
            <Highlight color="#002A30">Pick a position to access programs tailored to
            your favoured role on the track.
            </Highlight> Programs vary in focus, such as more endurance for
            jammers and strength for blockers.
            All programs prioritize safety and success on and off the track.
          </CardText>
        </FlexContainer>
        <FlexContainer borderRadius="0px 23px 23px 23px" background="#EDFDFF" width="91%" padding="0px 8px 8px 0px">
          <CardText background="#EDFDFF" width="77%" alignSelf="stretch">
            <Highlight color="#002A30">Referee, NSO or new to the game?
            </Highlight> Try FRENeSO. A well-rounded program to prevent injuries
            and prepare you for the track's intensity.
          </CardText>
        </FlexContainer>
      </PickYourPositionContainer>
      <ContainerForMobile mobile flexDirection="row" background="#128F9F" borderRadius="8px" border="1px solid #128F9F">
        <img src={ProgramDeck} alt="name" />
        <CardText color="#EDFDFF">Check out our <Highlight color="#FFE600"> deck of program cards </Highlight>below!</CardText>
      </ContainerForMobile>
      <ContainerForMobile>
        <Carousel />
      </ContainerForMobile>
      <ContainerForBiggerScreens padding="20px" background="#19737F" borderRadius="23px">
        <CardDeck />
      </ContainerForBiggerScreens>
    </FlexContainer>
  )
}