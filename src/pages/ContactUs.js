import React from 'react';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnimation } from '../animation';
import styled from 'styled-components';


const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <a href="mailto: dejan.sheki.lukic@gmail.com">Send Us A Message</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <a href="https://www.linkedin.com/in/dejanwebdev/">LinkedIn</a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <a href="https://github.com/DejanSheki">GitHub</a>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
};

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;
const Title = styled.div`
    margin-bottom:4rem;
    color: black;
    font-weight: 600;
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
    a {
        font-size: 3.5rem;
        font-weight: lighter;
        color: #353535;
        margin: 2rem;
        transition: all 0.75s ease;
        &:hover {
            color: #23d997;    
        }
    }
`;

export default ContactUs;