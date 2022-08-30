import { ArrowUp } from 'phosphor-react';
import {ScrollUpButton, ScrollUpText} from './style';
import { animateScroll } from 'react-scroll';

export default function ScrollUpBtn() {
    function handleToggleHome() {
        animateScroll.scrollToTop();
    }

    return (
        <ScrollUpButton onClick={handleToggleHome}>
            <ScrollUpText>
                ScrollUp
            </ScrollUpText>
            <ArrowUp size={32} />
        </ScrollUpButton>
    )
}