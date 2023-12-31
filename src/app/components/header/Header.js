// modules
import styled from 'styled-components'

// device
import { device } from '@/app/device/device'

// components
import Nav from '../layout/Nav'
import SocialMediaLinks from '../SocialMediaLinks'
import { Select, Option } from '../DropDown'

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

const StyledTitle = styled.p`
    color: ${props => props.theme.colors.link};
`

const Header = ({ themeButtonHandler, activeSection }) => {

    const themes = [mainTheme, secTheme, tertTheme]

    const selectHandler = (e) => {
        themeButtonHandler(themes[e.target.selectedIndex])
    }

    return (
        <StyledHeader>
            <div>
                <Select changeHandler={selectHandler}>
                    {themes.map((theme, index) => {
                        return (
                            <Option key={index}>Theme {index + 1}</Option>
                        )
                    })}
                </Select>
            </div>

            <div>



                <StyledHeaderTitle>FRASER MACALLUM</StyledHeaderTitle>
                <StyledTitle>Lab technologist, programming tutor, and web developer.</StyledTitle>
                <p>I develop innovative and intricate full stack solutions for the web.</p>

            </div>
            <Nav activeSection={activeSection} />

            <StyledSocialMediaLinks />

        </StyledHeader>
    )
}

export default Header