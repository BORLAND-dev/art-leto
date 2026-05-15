import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface LineProps {
    color: string;
    word: string;
}

const SPEED = 300; // Скорость прокрутки (чем меньше значение, тем быстрее прокрутка)

const LineContainer = styled.div<{ color: string }>`
    width: 100vw;
    overflow: hidden;
    white-space: nowrap;
    border-bottom: 2px solid ${props => props.color};
    background-color: ${props => props.color};
    height: 32px;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    cursor: default;
    user-select: none;
    font-family: 'TT-Nooks-Script-Regular';
    text-transform: uppercase;
`;

const ScrollingWordsWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const ScrollingWord = styled(motion.div)`
    display: inline-block;
    font-weight: bold;
    color: #fff;
    margin-right: 10%; /* Увеличенное расстояние между словами */
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Line: React.FC<LineProps> = ({ color, word }) => {
    const words = Array.from({ length: 30 }, () => word).join(`\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`);

    const variants = {
        animate: {
            x: ['0%', '-100%'],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: SPEED,
                    ease: 'linear'
                }
            }
        }
    };

    return (
        <LineContainer color={color}>
            <ScrollingWordsWrapper>
                <ScrollingWord variants={variants} animate="animate">
                    {words}
                </ScrollingWord>
                <ScrollingWord variants={variants} animate="animate">
                    {words}
                </ScrollingWord>
            </ScrollingWordsWrapper>
        </LineContainer>
    );
};

export default Line;
