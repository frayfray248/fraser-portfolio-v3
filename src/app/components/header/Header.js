// modules
import styled from 'styled-components'

// device
import { device } from '@/app/device/device'

// components
import Brand from '../icons/Brand'
import ButtonContainer from '../button/ButtonContainer'
import Button from '../button/Button'
import Nav from '../layout/Nav'
import SocialMediaLinks from '../SocialMediaLinks'
import ProfilePicture from '../ProfilePicture'

// config
import { singleColumnMaxWidth, singleColumnMaxHeight } from '@/app/config/config'

// themes
import { mainTheme, secTheme, tertTheme } from '@/app/styles/themes'



const StyledHeader = styled.div`
    height: 90vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    align-self: flex-start;

    padding-top: 2rem;

    @media ${singleColumnMaxWidth} {
        width: unset;
        height: unset;
        position: relative;
    }

    @media ${singleColumnMaxHeight} {
        width: unset;
        height: unset;
        position: relative;
    }

`

const StyledHeaderTitle = styled.h1`
    font-size: 3.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media ${device.max.tablet} {
        font-size: 3rem;
    }
`

const StyledSocialMediaLinks = styled(SocialMediaLinks)`
    
    margin-left: 2rem;

    @media ${singleColumnMaxWidth} {

        margin-left: 0;
    }

    @media ${singleColumnMaxHeight} {

        margin-left: 0;

    }

`

const Header = ({ themeButtonHandler, activeSection }) => {
    return (
        <StyledHeader>
            <div>
                <ButtonContainer>
                    <Button handler={() => themeButtonHandler(mainTheme)} text="Theme 1" />
                    <Button handler={() => themeButtonHandler(secTheme)} text="Theme 2" />
                    <Button handler={() => themeButtonHandler(tertTheme)} text="Theme 3" />
                </ButtonContainer>


                <StyledHeaderTitle>FRASER MACALLUM</StyledHeaderTitle>
                <p>I'm a lab technologist and my goal is to become a Full Stack Developer.</p>
                
            </div>
            <Nav activeSection={activeSection} />

            <StyledSocialMediaLinks />

        </StyledHeader>
    )
}

export default Header