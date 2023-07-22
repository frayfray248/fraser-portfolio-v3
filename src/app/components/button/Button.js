import styled from 'styled-components'

const StyledButton = styled.button`
    background: none;
    color: ${props => props.theme.colors.highlight};
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    font-weight: 600;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.highlight};
        color: ${props => props.theme.colors.mainBackground};
    }

`

const Button = ({ text, handler}) => {
    return (
        <StyledButton onClick={handler}>{text}</StyledButton>
    )
}

export default Button