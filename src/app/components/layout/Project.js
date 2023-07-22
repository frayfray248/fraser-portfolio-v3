import styled from 'styled-components'

const StyledProjectContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2rem;
    margin-top: 2rem;
    border-radius: 10px;

    font-weight: 500;
    font-size: 1rem;
    

    &:hover {
        background-color: ${props => props.theme.colors.containerBackground};
        background-repeat: no-repeat;
        background-attachment: fixed;
        box-shadow: 0px -1px 1px var(--gunmetal-gray),
                    0px 1px 1px rgba(0, 0, 0, 0.6),
                    1px 0px 1px rgba(0, 0, 0, 0.6),
                    -1px 0px 1px rgba(0, 0, 0, 0.6);
        cursor: pointer;
    }

    transition: background-color 0.2s ease-in-out;
`

const StyledProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    margin-left: 1rem;


    h3 {
        font-size: 1.5rem;
        margin: 0;
    }
`

const StyledImage = styled.img`
    width: 185px;
    height: 185px;
    border: 1px solid ${props => props.theme.colors.highlight};
    border-radius: 10px;
`

const StyledTagContainer = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    
`

const StyledTag = styled.li`
    margin: 4px;
    padding: 4px 10px;
    text-align: center;

    border-radius: 15px;

    background-color: ${props => props.theme.colors.containerBackground};
    color: ${props => props.theme.colors.highlight};
`

const Project = ({ title, img, desc, link, tags = [] }) => (
    <a href={link} target="_blank">
        <StyledProjectContainer>
            <StyledImage src={img} alt={title} />
            <StyledProjectInfo>
                <h3>{title}</h3>
                <p>{desc}</p>
                <StyledTagContainer>
                    {tags.map((tag, index) => (
                        <StyledTag key={index}>{tag}</StyledTag>
                    ))}
                </StyledTagContainer>
            </StyledProjectInfo>


        </StyledProjectContainer>
    </a>
)

export default Project