import styled from 'styled-components'

import Section from "../layout/Section"
import Link from "../Link"


const StyledContainer = styled.div`
    margin-top: 4rem;
`

const Contact = () => {

    return (
        <Section title="Contact" sectionId='contact'>
            <p>Thank you for reading my Portfolio. Please reach out to me if you have any questions</p>
            <Link href="mailto:fmacallum@shaw.ca" text="Reach Out" />
        </Section>
    )
}


export default Contact