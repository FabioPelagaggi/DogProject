import {ArrowUp} from '@styled-icons/fa-solid/ArrowUp';

import {ScrollUpButton, ScrollUpText} from './style';

export default function ScrollUpBtn() {
  
    return (
        <ScrollUpButton>
            <ScrollUpText>  
                ScrollUp
            </ScrollUpText>
            <i>
                <ArrowUp />
            </i>
        </ScrollUpButton>
    )
}