import React, { FormEvent } from 'react';
interface AdvancedInputProps {
    formStyle?: React.CSSProperties;
    handleSubmit: (e: FormEvent, html: string) => Promise<void> | void;
    mode?: string;
    cancelBtnStyle?: React.CSSProperties;
    submitBtnStyle?: React.CSSProperties;
    comId?: string;
    imgStyle?: React.CSSProperties;
    imgDiv?: React.CSSProperties;
    customImg?: string;
    text: string;
    placeHolder?: string;
}
declare const AdvancedInput: ({ formStyle, handleSubmit, submitBtnStyle, cancelBtnStyle, mode, comId, imgDiv, imgStyle, customImg, text, placeHolder }: AdvancedInputProps) => React.JSX.Element;
export default AdvancedInput;
