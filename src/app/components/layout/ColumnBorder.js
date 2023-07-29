import styled from 'styled-components'

import { singleColumnMaxWidth, singleColumnMaxHeight } from '@/app/config/config'


const StyledColumnBorder = styled.div`
    background-color: ${props => props.theme.colors.containerBackground};
    width: 15px;
    margin: 0px 2rem;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    @media ${singleColumnMaxWidth} {
        display: none;
    }

    @media ${singleColumnMaxHeight} {
        display: none;
    }
`

export default function ColumnBorder() {
    return (
        <StyledColumnBorder />
    )
}