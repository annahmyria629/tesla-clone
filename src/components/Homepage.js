import React from 'react'
import styled from 'styled-components'
import Section from "./Section";

function Homepage() {
    return (
        <Container>
            <Section />
        </Container>
    )
}

export default Homepage

// style inside js
const Container = styled.div`
  height: 100vh;
`