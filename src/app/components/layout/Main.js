import styled from 'styled-components'

const StyledMain = styled.main`
    width: 50%;
    overflow-y: scroll;
    height: 100vh;
`

export default function Main({ children }) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}