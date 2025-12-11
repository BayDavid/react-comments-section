import * as React from 'react';
import './Index.scss';
interface CommentSectionProps {
    currentUser: {
        currentUserId: string;
        currentUserImg: string;
        currentUserProfile: string;
        currentUserFullName: string;
    } | null;
    logIn: {
        loginLink?: string;
        signUpLink?: string;
        onLogin?: () => void;
        onSignUp?: () => void;
    };
    replyTop?: boolean;
    customImg?: string;
    inputStyle?: object;
    formStyle?: object;
    submitBtnStyle?: object;
    cancelBtnStyle?: object;
    overlayStyle?: object;
    imgStyle?: object;
    replyInputStyle?: object;
    commentsCount?: number;
    hrStyle?: object;
    titleStyle?: object;
    onSubmitAction?: Function;
    onDeleteAction?: Function;
    onReplyAction?: Function;
    onEditAction?: Function;
    customNoComment?: Function;
    currentData?: Function;
    removeEmoji?: boolean;
    advancedInput?: boolean;
    placeHolder?: string;
    showTimestamp?: boolean;
    disableDeleteAction?: boolean;
    disableReplySecoundLevelAction?: boolean;
    commentData: Array<{
        userId: string;
        comId: string;
        fullName: string;
        avatarUrl: string;
        text: string;
        userProfile?: string;
        timestamp?: string;
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
    sortedByLatest?: boolean;
}
export declare const CommentSection: ({ currentUser, customImg, inputStyle, formStyle, submitBtnStyle, cancelBtnStyle, overlayStyle, replyInputStyle, logIn, imgStyle, replyTop, commentsCount, disableDeleteAction, disableReplySecoundLevelAction, commentData, placeHolder, showTimestamp, hrStyle, titleStyle, removeEmoji, onSubmitAction, onDeleteAction, onReplyAction, onEditAction, customNoComment, currentData, advancedInput, sortedByLatest }: CommentSectionProps) => React.JSX.Element;
export {};
