import styled from 'styled-components'

const StyledHeader = styled.div`
    width: 50%;
    height: 100vh;
    position: sticky;
    top: 0;
`


const Header = () => {
    return (
        <StyledHeader>
            <h1>Header</h1>
        </StyledHeader>
    )
}

export default Header