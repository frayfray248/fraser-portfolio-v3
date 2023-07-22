import styled from 'styled-components'

import ButtonContainer from '../button/ButtonContainer'
import Button from '../button/Button'

import { singleColumnMaxWidth } from '@/app/config/config'

import { mainTheme, secTheme, tertTheme } from '@/app/styles/themes'

const StyledHeader = styled.div`
    width: 50%;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    align-self: flex-start;

    padding-top: 2rem;

    @media ${singleColumnMaxWidth} {
        width: unset;
        position: relative;
    }

`

const StyledHeaderTitle = styled.h1`
    font-size: 3rem;
`

const Header = ({ themeButtonHandler }) => {
    return (
        <StyledHeader>
            <ButtonContainer>
                <Button handler={() => themeButtonHandler(mainTheme)} text="Theme 1" />
                <Button handler={() => themeButtonHandler(secTheme)} text="Theme 2" />
                <Button handler={() => themeButtonHandler(tertTheme)} text="Theme 3" />
            </ButtonContainer>

            <StyledHeaderTitle>Fraser Macallum</StyledHeaderTitle>
            <p>I'm a lab technologist and my goal is to become a Full Stack Developer.</p>
        </StyledHeader>
    )
}

export default Header