// modules
import styled from 'styled-components'

const StyledSelect = styled.select`
    border: 1px solid ${props => props.theme.colors.highlight};
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
    color: ${props => props.theme.colors.highlight};
    background: ${props => props.theme.colors.mainBackground};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid ${props => props.theme.colors.highlight};
    }

    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.colors.highlight};
    }

`

const StyledOption = styled.option`
    color: ${props => props.theme.colors.highlight};
    background: ${props => props.theme.colors.mainBackground};
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

`

export const Option = ({ value, children }) => {
    return (
        <StyledOption value={value}>{children}</StyledOption>
    )
}

export const Select = ({ changeHandler, children}) => {
    return (
        <StyledSelect onChange={changeHandler}>
            {children}
        </StyledSelect>
    )
}