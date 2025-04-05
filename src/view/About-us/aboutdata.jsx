import React from 'react'
import "./about.css"

function AboutContain({ title, description }) {
    return (
        <div className='about-card-container'>
            <div className='about-content'>
                <h1>{title}</h1>
                <p className='about-description'>{description}</p>
            </div>
        </div>
    )
}

export default AboutContain
