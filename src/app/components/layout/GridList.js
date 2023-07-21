// components
import styled from "styled-components"

const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    list-style: none;
    padding-inline-start: 0;
`

const StyledLi = styled.li`
    font-size: 1.4rem;
    color: ${props => props.theme.colors.defaultText};

    &::before {
        content: "▹";
        color: ${props => props.theme.colors.highlight};
    }
`

const StyledSpan = styled.span`
    position: relative;
    left: 10px;
`

const GridList = ({items}) => (
    <StyledUl>
        {items.map((item, index) => <StyledLi key={index} ><StyledSpan>{item}</StyledSpan></StyledLi>)}
    </StyledUl>
)

export default GridList