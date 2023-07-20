import styled from 'styled-components'

import { singleColumnMaxWidth } from '@/app/config/config'

const StyledMain = styled.main`
    width: 50%;

    @media ${singleColumnMaxWidth} {
        width: 100%;
    }

`

export default function Main({ children }) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}