import React from 'react'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'

const Section = () => {
    return (
        <div>
            <Section1 
                title="Model 3"
                description="Plaid"
                backgroundImg="model-3.jpg"
            />
            <Section2
                title="Całkowicie nowe wnętrze"
                backgroundImg="new-interior.jpg"

            />
            <Section3
                backgroundImg="tesla1.jpg"
            />
        </div>
    )
}

export default Section
