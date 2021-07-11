import { DefaultButton, LargeButton } from "./style";
import React, { useContext, FC } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface ButtonProps {
    isSubmit:boolean,
    isLogin:boolean,
    active:boolean,
}

const CustomButton: FC<ButtonProps>=(props)=>{
    const theme = useContext(ThemeContext);
    if(props.isSubmit){
        return(
            <LargeButton>Large</LargeButton>
        )
    }
    return(
        <DefaultButton>Default</DefaultButton>
    )
}


export default CustomButton;