import React from 'react';
export declare const GlobalContext: React.Context<{}>;
export declare const GlobalProvider: ({ children, currentUser, replyTop, customImg, inputStyle, formStyle, submitBtnStyle, cancelBtnStyle, imgStyle, commentsCount, commentData, onSubmitAction, onDeleteAction, onReplyAction, onEditAction, currentData, replyInputStyle, removeEmoji, advancedInput, placeHolder }: {
    children: any;
    currentUser?: {
        currentUserId: string;
        currentUserImg: string;
        currentUserProfile?: string | undefined;
        currentUserFullName: string;
    } | null;
    replyTop?: boolean;
    customImg?: string;
    inputStyle?: object;
    formStyle?: object;
    submitBtnStyle?: object;
    cancelBtnStyle?: object;
    imgStyle?: object;
    replyInputStyle?: object;
    commentsCount?: number;
    removeEmoji?: boolean;
    commentData?: Array<{
        userId: string;
        comId: string;
        fullName: string;
        avatarUrl: string;
        text: string;
        timestamp?: string;
        userProfile?: string;
        replies?: Array<{
            userId: string;
            comId: string;
            fullName: string;
            avatarUrl: string;
            text: string;
            timestamp?: string;
            userProfile?: string;
        }> | undefined;
    }>;
    onSubmitAction?: Function;
    onDeleteAction?: Function;
    onReplyAction?: Function;
    onEditAction?: Function;
    currentData?: Function;
    advancedInput?: boolean;
    placeHolder?: string;
}) => React.JSX.Element;
export default GlobalProvider;
