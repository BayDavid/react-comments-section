import * as React from 'react';
import React__default, { createContext, useState, useEffect, useRef, useContext } from 'react';
import _ from 'lodash';
import { v4 } from 'uuid';
import Picker from 'emoji-picker-react';
import { Menu, MenuItem } from '@szhsin/react-menu';
import { Modal } from 'react-responsive-modal';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var GlobalContext = createContext({});
var GlobalProvider = function (_a) {
    var children = _a.children, currentUser = _a.currentUser, replyTop = _a.replyTop, customImg = _a.customImg, inputStyle = _a.inputStyle, formStyle = _a.formStyle, submitBtnStyle = _a.submitBtnStyle, cancelBtnStyle = _a.cancelBtnStyle, imgStyle = _a.imgStyle, commentsCount = _a.commentsCount, commentData = _a.commentData, onSubmitAction = _a.onSubmitAction, onDeleteAction = _a.onDeleteAction, onReplyAction = _a.onReplyAction, onEditAction = _a.onEditAction, currentData = _a.currentData, replyInputStyle = _a.replyInputStyle, removeEmoji = _a.removeEmoji, advancedInput = _a.advancedInput, placeHolder = _a.placeHolder;
    var currentUserData = useState(currentUser)[0];
    var _b = useState([]), data = _b[0], setData = _b[1];
    var _c = useState([]), editArr = _c[0], setEdit = _c[1];
    var _d = useState([]), replyArr = _d[0], setReply = _d[1];
    useEffect(function () {
        if (commentData) {
            setData(commentData);
        }
    }, [commentData]);
    useEffect(function () {
        if (currentData) {
            currentData(data);
        }
    }, [data]);
    var handleAction = function (id, edit) {
        if (edit) {
            var editArrCopy = __spreadArray([], editArr, true);
            var indexOfId = _.indexOf(editArrCopy, id);
            if (_.includes(editArr, id)) {
                editArrCopy.splice(indexOfId, 1);
                setEdit(editArrCopy);
            }
            else {
                editArrCopy.push(id);
                setEdit(editArrCopy);
            }
        }
        else {
            var replyArrCopy = __spreadArray([], replyArr, true);
            var indexOfId = _.indexOf(replyArrCopy, id);
            if (_.includes(replyArr, id)) {
                replyArrCopy.splice(indexOfId, 1);
                setReply(replyArrCopy);
            }
            else {
                replyArrCopy.push(id);
                setReply(replyArrCopy);
            }
        }
    };
    var onSubmit = function (text, uuid) {
        var copyData = __spreadArray([], data, true);
        copyData.push({
            userId: currentUserData.currentUserId,
            comId: uuid,
            avatarUrl: currentUserData.currentUserImg,
            userProfile: currentUserData.currentUserProfile
                ? currentUserData.currentUserProfile
                : undefined,
            fullName: currentUserData.currentUserFullName,
            text: text,
            timestamp: "".concat(new Date().toISOString()),
            replies: []
        });
        setData(copyData);
    };
    var onEdit = function (text, comId, parentId) {
        var copyData = __spreadArray([], data, true);
        if (parentId) {
            var indexOfParent = _.findIndex(copyData, { comId: parentId });
            var indexOfId = _.findIndex(copyData[indexOfParent].replies, {
                comId: comId
            });
            copyData[indexOfParent].replies[indexOfId].text = text;
            setData(copyData);
            handleAction(comId, true);
        }
        else {
            var indexOfId = _.findIndex(copyData, { comId: comId });
            copyData[indexOfId].text = text;
            setData(copyData);
            handleAction(comId, true);
        }
    };
    var onReply = function (text, comId, parentId, uuid) {
        var copyData = __spreadArray([], data, true);
        if (parentId) {
            var indexOfParent = _.findIndex(copyData, { comId: parentId });
            copyData[indexOfParent].replies.push({
                userId: currentUserData.currentUserId,
                comId: uuid,
                avatarUrl: currentUserData.currentUserImg,
                userProfile: currentUserData.currentUserProfile
                    ? currentUserData.currentUserProfile
                    : undefined,
                fullName: currentUserData.currentUserFullName,
                text: text,
                timestamp: "".concat(new Date().toISOString())
            });
            setData(copyData);
            handleAction(comId, false);
        }
        else {
            var indexOfId = _.findIndex(copyData, {
                comId: comId
            });
            copyData[indexOfId].replies.push({
                userId: currentUserData.currentUserId,
                comId: uuid,
                avatarUrl: currentUserData.currentUserImg,
                userProfile: currentUserData.currentUserProfile
                    ? currentUserData.currentUserProfile
                    : undefined,
                fullName: currentUserData.currentUserFullName,
                text: text,
                timestamp: "".concat(new Date().toISOString())
            });
            setData(copyData);
            handleAction(comId, false);
        }
    };
    var onDelete = function (comId, parentId) {
        var copyData = __spreadArray([], data, true);
        if (parentId) {
            var indexOfParent = _.findIndex(copyData, { comId: parentId });
            var indexOfId = _.findIndex(copyData[indexOfParent].replies, {
                comId: comId
            });
            copyData[indexOfParent].replies.splice(indexOfId, 1);
            setData(copyData);
        }
        else {
            var indexOfId = _.findIndex(copyData, { comId: comId });
            copyData.splice(indexOfId, 1);
            setData(copyData);
        }
    };
    return (React__default.createElement(GlobalContext.Provider, { value: {
            currentUserData: currentUserData,
            replyTop: replyTop,
            data: data,
            handleAction: handleAction,
            editArr: editArr,
            onSubmit: onSubmit,
            onEdit: onEdit,
            replyArr: replyArr,
            onReply: onReply,
            onDelete: onDelete,
            customImg: customImg,
            inputStyle: inputStyle,
            formStyle: formStyle,
            submitBtnStyle: submitBtnStyle,
            cancelBtnStyle: cancelBtnStyle,
            imgStyle: imgStyle,
            commentsCount: commentsCount,
            onSubmitAction: onSubmitAction,
            onDeleteAction: onDeleteAction,
            onReplyAction: onReplyAction,
            onEditAction: onEditAction,
            replyInputStyle: replyInputStyle,
            removeEmoji: removeEmoji,
            advancedInput: advancedInput,
            placeHolder: placeHolder
        } }, children));
};

function useOutsideAlerter(ref, setOpen) {
    useEffect(function () {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(!open);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}
var EmojiInput = function (_a) {
    var text = _a.text, setText = _a.setText, mode = _a.mode, inputStyle = _a.inputStyle, placeHolder = _a.placeHolder;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var _c = useState(), chosenEmoji = _c[0], setChosenEmoji = _c[1];
    var wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpen);
    var globalStore = useContext(GlobalContext);
    useEffect(function () {
        if (chosenEmoji) {
            var newText = text + ' ' + chosenEmoji.emoji;
            setText(newText);
        }
    }, [chosenEmoji]);
    var onEmojiClick = function (emojiObject) {
        setChosenEmoji(emojiObject);
    };
    return (React__default.createElement("div", { className: 'emoji-input' },
        React__default.createElement("input", { className: 'postComment', style: mode === 'replyMode' || mode === 'editMode'
                ? globalStore.replyInputStyle
                : globalStore.inputStyle || inputStyle, placeholder: placeHolder ? placeHolder : 'Type your reply here.', type: 'text', value: text, onChange: function (e) { return setText(e.target.value); } }),
        React__default.createElement("div", { className: 'emoji-icon', onClick: function () { return setOpen(!open); } }),
        open ? (React__default.createElement("div", { ref: wrapperRef },
            React__default.createElement(Picker, { onEmojiClick: onEmojiClick }))) : null));
};

var RegularInput = function (_a) {
    var formStyle = _a.formStyle, imgDiv = _a.imgDiv, imgStyle = _a.imgStyle, customImg = _a.customImg, mode = _a.mode, inputStyle = _a.inputStyle, cancelBtnStyle = _a.cancelBtnStyle, comId = _a.comId, submitBtnStyle = _a.submitBtnStyle, handleSubmit = _a.handleSubmit, text = _a.text, setText = _a.setText, placeHolder = _a.placeHolder;
    var globalStore = useContext(GlobalContext);
    return (React__default.createElement("form", { className: 'form', style: globalStore.formStyle || formStyle, onSubmit: function () { return handleSubmit; } },
        React__default.createElement("div", { className: 'userImg', style: imgDiv },
            React__default.createElement("a", { target: '_blank', href: globalStore.currentUserData.currentUserProfile },
                React__default.createElement("img", { src: globalStore.customImg ||
                        customImg ||
                        globalStore.currentUserData.currentUserImg, style: globalStore.imgStyle || imgStyle, alt: 'userIcon', className: 'imgdefault' }))),
        globalStore.removeEmoji ? (React__default.createElement("input", { className: 'postComment', style: mode === 'replyMode' || mode === 'editMode'
                ? globalStore.replyInputStyle
                : globalStore.inputStyle || inputStyle, type: 'text', placeholder: placeHolder ? placeHolder : 'Type your reply here.', value: text, onChange: function (e) { return setText(e.target.value); } })) : (React__default.createElement(EmojiInput, { text: text, setText: setText, mode: mode, inputStyle: inputStyle, placeHolder: placeHolder })),
        mode && (React__default.createElement("button", { className: 'cancelBtn', style: globalStore.cancelBtnStyle || cancelBtnStyle, type: 'button', onClick: function () {
                return mode === 'editMode'
                    ? globalStore.handleAction(comId, true)
                    : globalStore.handleAction(comId, false);
            } }, "Cancel")),
        React__default.createElement("button", { className: 'postBtn', type: 'submit', disabled: text != '' ? false : true, style: globalStore.submitBtnStyle || submitBtnStyle, onClick: function (e) { return (text ? handleSubmit(e) : null); } }, "Post")));
};

// sehr einfache Sanitization: nur eine Handvoll erlaubter Tags/Attribute, alles andere wird entfernt
var sanitizeHtml = function (input) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(input, 'text/html');
    var allowedTags = new Set([
        'P',
        'B',
        'STRONG',
        'I',
        'EM',
        'U',
        'S',
        'UL',
        'OL',
        'LI',
        'BR',
        'CODE',
        'PRE',
        'BLOCKQUOTE'
    ]);
    var walk = function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            var el = node;
            if (!allowedTags.has(el.tagName)) {
                var parent_1 = el.parentNode;
                while (el.firstChild)
                    parent_1 === null || parent_1 === void 0 ? void 0 : parent_1.insertBefore(el.firstChild, el);
                parent_1 === null || parent_1 === void 0 ? void 0 : parent_1.removeChild(el);
                return;
            }
            // entferne alle Attribute (kein onclick, style, etc.)
            while (el.attributes.length > 0) {
                el.removeAttribute(el.attributes[0].name);
            }
        }
        Array.from(node.childNodes).forEach(walk);
    };
    Array.from(doc.body.childNodes).forEach(walk);
    return doc.body.innerHTML || '<p></p>';
};
var AdvancedInput = function (_a) {
    var formStyle = _a.formStyle, handleSubmit = _a.handleSubmit, submitBtnStyle = _a.submitBtnStyle, cancelBtnStyle = _a.cancelBtnStyle, mode = _a.mode, comId = _a.comId, imgDiv = _a.imgDiv, imgStyle = _a.imgStyle, customImg = _a.customImg, text = _a.text, placeHolder = _a.placeHolder;
    var globalStore = useContext(GlobalContext);
    var _b = useState('<p></p>'), html = _b[0], setHtml = _b[1];
    var _c = useState('<p></p>'), editText = _c[0], setEditText = _c[1];
    useEffect(function () {
        if (text !== '') {
            var safe = sanitizeHtml(text);
            setHtml(safe);
            setEditText(safe);
        }
    }, [text]);
    var onInput = function (e) {
        var value = e.currentTarget.innerHTML;
        var safe = sanitizeHtml(value);
        setEditText(safe);
    };
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (editText === '<p></p>')
                        return [2 /*return*/];
                    return [4 /*yield*/, handleSubmit(e, editText)];
                case 1:
                    _a.sent();
                    setHtml('<p></p>');
                    setEditText('<p></p>');
                    return [2 /*return*/];
            }
        });
    }); };
    var canSubmit = editText !== '<p></p>';
    return (React__default.createElement("div", { className: 'advanced-overlay' },
        React__default.createElement("div", { className: 'userImg', style: imgDiv },
            React__default.createElement("a", { target: '_blank', href: globalStore.currentUserData.currentUserProfile, rel: 'noreferrer' },
                React__default.createElement("img", { src: globalStore.customImg ||
                        customImg ||
                        globalStore.currentUserData.currentUserImg, style: globalStore.imgStyle || imgStyle, alt: 'userIcon', className: 'imgdefault' }))),
        React__default.createElement("div", { className: 'advanced-input' },
            React__default.createElement("form", { className: 'form advanced-form ', style: globalStore.formStyle || formStyle, onSubmit: onSubmit },
                React__default.createElement("div", { className: 'advanced-border' },
                    React__default.createElement("div", { className: 'advanced-editor', contentEditable: true, suppressContentEditableWarning: true, onInput: onInput, dangerouslySetInnerHTML: {
                            __html: html === '<p></p>' ? '' : html
                        }, "aria-label": placeHolder ? placeHolder : 'Type your reply here.' })),
                React__default.createElement("div", { className: 'advanced-btns' },
                    mode && (React__default.createElement("button", { className: 'advanced-cancel cancelBtn', style: globalStore.cancelBtnStyle || cancelBtnStyle, type: 'button', onClick: function () {
                            return mode === 'editMode'
                                ? globalStore.handleAction(comId, true)
                                : globalStore.handleAction(comId, false);
                        } }, "Cancel")),
                    React__default.createElement("button", { className: 'advanced-post postBtn', type: 'submit', disabled: !canSubmit, style: globalStore.submitBtnStyle || submitBtnStyle }, "Post"))))));
};

var InputField = function (_a) {
    var formStyle = _a.formStyle, comId = _a.comId, fillerText = _a.fillerText, parentId = _a.parentId, mode = _a.mode, customImg = _a.customImg, inputStyle = _a.inputStyle, cancelBtnStyle = _a.cancelBtnStyle, submitBtnStyle = _a.submitBtnStyle, imgStyle = _a.imgStyle, imgDiv = _a.imgDiv, placeHolder = _a.placeHolder;
    var _b = useState(''), text = _b[0], setText = _b[1];
    useEffect(function () {
        if (fillerText) {
            setText(fillerText);
        }
    }, [fillerText]);
    var globalStore = useContext(GlobalContext);
    var editMode = function (advText) { return __awaiter(void 0, void 0, void 0, function () {
        var textToSend, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    textToSend = advText ? advText : text;
                    return [4 /*yield*/, globalStore.onEdit(textToSend, comId, parentId)];
                case 1:
                    _b.sent();
                    _a = globalStore.onEditAction;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, globalStore.onEditAction({
                            userId: globalStore.currentUserData.currentUserId,
                            comId: comId,
                            avatarUrl: globalStore.currentUserData.currentUserImg,
                            userProfile: globalStore.currentUserData.currentUserProfile
                                ? globalStore.currentUserData.currentUserProfile
                                : null,
                            fullName: globalStore.currentUserData.currentUserFullName,
                            text: textToSend,
                            parentOfEditedCommentId: parentId
                        })];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3: return [2 /*return*/, (_a)];
            }
        });
    }); };
    var replyMode = function (replyUuid, advText) { return __awaiter(void 0, void 0, void 0, function () {
        var textToSend, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    textToSend = advText ? advText : text;
                    return [4 /*yield*/, globalStore.onReply(textToSend, comId, parentId, replyUuid)];
                case 1:
                    _b.sent();
                    _a = globalStore.onReplyAction;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, globalStore.onReplyAction({
                            userId: globalStore.currentUserData.currentUserId,
                            repliedToCommentId: comId,
                            avatarUrl: globalStore.currentUserData.currentUserImg,
                            userProfile: globalStore.currentUserData.currentUserProfile
                                ? globalStore.currentUserData.currentUserProfile
                                : null,
                            fullName: globalStore.currentUserData.currentUserFullName,
                            text: textToSend,
                            parentOfRepliedCommentId: parentId,
                            comId: replyUuid
                        })];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3: return [2 /*return*/, (_a)];
            }
        });
    }); };
    var submitMode = function (createUuid, advText) { return __awaiter(void 0, void 0, void 0, function () {
        var textToSend, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    textToSend = advText ? advText : text;
                    return [4 /*yield*/, globalStore.onSubmit(textToSend, createUuid)];
                case 1:
                    _b.sent();
                    _a = globalStore.onSubmitAction;
                    if (!_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, globalStore.onSubmitAction({
                            userId: globalStore.currentUserData.currentUserId,
                            comId: createUuid,
                            avatarUrl: globalStore.currentUserData.currentUserImg,
                            userProfile: globalStore.currentUserData.currentUserProfile
                                ? globalStore.currentUserData.currentUserProfile
                                : null,
                            fullName: globalStore.currentUserData.currentUserFullName,
                            text: textToSend,
                            replies: []
                        })];
                case 2:
                    _a = (_b.sent());
                    _b.label = 3;
                case 3: return [2 /*return*/, (_a)];
            }
        });
    }); };
    var handleSubmit = function (event, advText) { return __awaiter(void 0, void 0, void 0, function () {
        var createUuid, replyUuid;
        return __generator(this, function (_a) {
            event.preventDefault();
            createUuid = v4();
            replyUuid = v4();
            mode === 'editMode'
                ? editMode(advText)
                : mode === 'replyMode'
                    ? replyMode(replyUuid, advText)
                    : submitMode(createUuid, advText);
            setText('');
            return [2 /*return*/];
        });
    }); };
    return (React__default.createElement("div", null, globalStore.advancedInput ? (React__default.createElement(AdvancedInput, { handleSubmit: handleSubmit, text: mode === 'editMode' ? text : '', formStyle: formStyle, mode: mode, cancelBtnStyle: cancelBtnStyle, submitBtnStyle: submitBtnStyle, comId: comId, imgDiv: imgDiv, imgStyle: imgStyle, customImg: customImg, placeHolder: placeHolder })) : (React__default.createElement(RegularInput, { formStyle: formStyle, imgDiv: imgDiv, imgStyle: imgStyle, customImg: customImg, mode: mode, inputStyle: inputStyle, cancelBtnStyle: cancelBtnStyle, comId: comId, submitBtnStyle: submitBtnStyle, handleSubmit: handleSubmit, text: text, setText: setText, placeHolder: placeHolder }))));
};

var DeleteModal = function (_a) {
    var comId = _a.comId, parentId = _a.parentId;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var onOpenModal = function () { return setOpen(true); };
    var onCloseModal = function () { return setOpen(false); };
    var globalStore = useContext(GlobalContext);
    return (React__default.createElement("div", null,
        React__default.createElement("div", { style: { width: '100%' }, onClick: onOpenModal }, "delete"),
        React__default.createElement(Modal, { open: open, onClose: onCloseModal, center: true },
            React__default.createElement("h2", null, "Are you sure?"),
            React__default.createElement("p", null, "Once you delete this comment it will be gone forever."),
            React__default.createElement("div", { className: 'deleteBtns' },
                React__default.createElement("button", { className: 'delete', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, globalStore.onDelete(comId, parentId)];
                                case 1:
                                    _b.sent();
                                    _a = globalStore.onDeleteAction;
                                    if (!_a) return [3 /*break*/, 3];
                                    return [4 /*yield*/, globalStore.onDeleteAction({
                                            comIdToDelete: comId,
                                            parentOfDeleteId: parentId
                                        })];
                                case 2:
                                    _a = (_b.sent());
                                    _b.label = 3;
                                case 3: return [2 /*return*/, (_a)];
                            }
                        });
                    }); } }, "Delete"),
                React__default.createElement("button", { className: 'cancel', onClick: onCloseModal }, "Cancel")))));
};

var CommentStructure = function (_a) {
    var info = _a.info, editMode = _a.editMode, parentId = _a.parentId, replyMode = _a.replyMode, showTimestamp = _a.showTimestamp, _b = _a.disableDeleteAction, disableDeleteAction = _b === void 0 ? false : _b, _c = _a.disableReplySecoundLevelAction, disableReplySecoundLevelAction = _c === void 0 ? false : _c;
    var globalStore = useContext(GlobalContext);
    var currentUser = globalStore.currentUserData;
    var optionsMenu = function () {
        return (React__default.createElement("div", { className: "userActions" }, info.userId === currentUser.currentUserId && (React__default.createElement(Menu, { menuButton: React__default.createElement("button", { className: "actionsBtn" },
                ' ',
                React__default.createElement("div", { className: "optionIcon" })) },
            React__default.createElement(MenuItem, { onClick: function () { return globalStore.handleAction(info.comId, true); } }, "edit"),
            !disableDeleteAction && (React__default.createElement(MenuItem, null,
                React__default.createElement(DeleteModal, { comId: info.comId, parentId: parentId })))))));
    };
    var timeAgo = function (date) {
        var units = [
            { label: 'year', seconds: 31536000 },
            { label: 'month', seconds: 2592000 },
            { label: 'day', seconds: 86400 },
            { label: 'hour', seconds: 3600 },
            { label: 'minute', seconds: 60 },
            { label: 'second', seconds: 1 }
        ];
        var time = Math.floor((new Date().valueOf() - new Date(date).valueOf()) / 1000);
        for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
            var _a = units_1[_i], label = _a.label, seconds = _a.seconds;
            var interval = Math.floor(time / seconds);
            if (interval >= 1) {
                return "".concat(interval, " ").concat(label).concat(interval > 1 ? 's' : '', " ago");
            }
        }
        return 'just now';
    };
    var userInfo = function () {
        return (React__default.createElement("div", { className: "commentsTwo" },
            React__default.createElement("a", { className: "userLink", target: "_blank", href: info.userProfile },
                React__default.createElement("div", null,
                    React__default.createElement("img", { src: info.avatarUrl, alt: "userIcon", className: "imgdefault", style: globalStore.imgStyle ||
                            (!globalStore.replyTop
                                ? { position: 'relative', top: 7 }
                                : null) })),
                React__default.createElement("div", { className: "fullName" },
                    info.fullName,
                    React__default.createElement("span", { className: "commenttimestamp" }, showTimestamp &&
                        (info.timestamp == null ? null : timeAgo(info.timestamp)))))));
    };
    var replyTopSection = function () {
        return (React__default.createElement("div", { className: "halfDiv" },
            React__default.createElement("div", { className: "userInfo" },
                React__default.createElement("div", null, info.text),
                userInfo()),
            currentUser && optionsMenu()));
    };
    var replyBottomSection = function () {
        return (React__default.createElement("div", { className: "halfDiv" },
            React__default.createElement("div", { className: "userInfo" },
                userInfo(),
                globalStore.advancedInput ? (React__default.createElement("div", { className: "infoStyle", dangerouslySetInnerHTML: {
                        __html: info.text
                    } })) : (React__default.createElement("div", { className: "infoStyle" }, info.text)),
                React__default.createElement("div", { style: { marginLeft: 32 } },
                    ' ',
                    (currentUser && !disableReplySecoundLevelAction) && (React__default.createElement("div", null,
                        React__default.createElement("button", { className: "replyBtn", onClick: function () { return globalStore.handleAction(info.comId, false); } },
                            React__default.createElement("div", { className: "replyIcon" }),
                            React__default.createElement("span", { style: { marginLeft: 17 } }, "Reply")))))),
            currentUser && optionsMenu()));
    };
    var actionModeSection = function (mode) {
        if (mode === 'reply') {
            return (React__default.createElement("div", { className: "replysection" },
                globalStore.replyTop ? replyTopSection() : replyBottomSection(),
                React__default.createElement(InputField, { formStyle: {
                        backgroundColor: 'transparent',
                        padding: '20px 0px',
                        marginLeft: '-15px'
                    }, comId: info.comId, fillerText: '', mode: 'replyMode', parentId: parentId })));
        }
        else {
            return (React__default.createElement(InputField, { formStyle: {
                    backgroundColor: 'transparent',
                    padding: '20px 0px',
                    marginLeft: '-15px'
                }, comId: info.comId, fillerText: info.text, mode: 'editMode', parentId: parentId }));
        }
    };
    return (React__default.createElement("div", null, editMode
        ? actionModeSection('edit')
        : replyMode
            ? actionModeSection('reply')
            : globalStore.replyTop
                ? replyTopSection()
                : replyBottomSection()));
};

var LoginSection = function (_a) {
    var loginLink = _a.loginLink, signUpLink = _a.signUpLink, onLogin = _a.onLogin, onSignUp = _a.onSignUp;
    var handleLoginClick = function () {
        var loginAction = onLogin || loginLink;
        if (typeof loginAction === 'function') {
            loginAction();
        }
        else if (loginAction) {
            window.location.href = loginAction;
        }
    };
    var handleSignUpClick = function () {
        var signUpAction = onSignUp || signUpLink;
        if (typeof signUpAction === 'function') {
            signUpAction();
        }
        else if (signUpAction) {
            window.location.href = signUpAction;
        }
    };
    return (React__default.createElement("div", { className: 'signBox' },
        React__default.createElement("div", { className: 'signLine' }, "Log in or sign up to leave a comment"),
        React__default.createElement("div", null,
            React__default.createElement("button", { className: 'loginBtn', name: 'login', onClick: handleLoginClick }, "Log In"),
            React__default.createElement("button", { className: 'signBtn', name: 'signup', onClick: handleSignUpClick }, "Sign Up"))));
};

var NoComments = function () {
    return (React__default.createElement("div", { className: 'no-comDiv' },
        ' ',
        "No comments here. Be the first one to comment!"));
};

var CommentSection$1 = function (_a) {
    var overlayStyle = _a.overlayStyle, logIn = _a.logIn, hrStyle = _a.hrStyle, titleStyle = _a.titleStyle, customNoComment = _a.customNoComment, _b = _a.showTimestamp, showTimestamp = _b === void 0 ? true : _b, _c = _a.disableDeleteAction, disableDeleteAction = _c === void 0 ? false : _c, _d = _a.disableReplySecoundLevelAction, disableReplySecoundLevelAction = _d === void 0 ? false : _d, _e = _a.sortedByLatest, sortedByLatest = _e === void 0 ? false : _e;
    var handleLogin = function () {
        if (typeof logIn.onLogin === 'function') {
            logIn.onLogin();
        }
        else if (typeof logIn.loginLink === 'string') {
            window.location.href = logIn.loginLink;
        }
    };
    var handleSignUp = function () {
        if (typeof logIn.onSignUp === 'function') {
            logIn.onSignUp();
        }
        else if (typeof logIn.signUpLink === 'string') {
            window.location.href = logIn.signUpLink;
        }
    };
    var loginMode = function () {
        return React__default.createElement(LoginSection, { loginLink: handleLogin, signUpLink: handleSignUp });
    };
    var globalStore = useContext(GlobalContext);
    var totalComments = function () {
        var count = 0;
        globalStore.data.map(function (i) {
            count = count + 1;
            i.replies.map(function () { return (count = count + 1); });
        });
        return count;
    };
    var sortCommentsByLatest = function (arr) {
        return __spreadArray([], arr, true).sort(function (a, b) {
            var aTime = a.timestamp ? new Date(a.timestamp).getTime() : 0;
            var bTime = b.timestamp ? new Date(b.timestamp).getTime() : 0;
            return bTime - aTime;
        })
            .map(function (c) { return (__assign(__assign({}, c), { replies: c.replies && Array.isArray(c.replies)
                ? __spreadArray([], c.replies, true).sort(function (a, b) {
                    var aTime = a.timestamp ? new Date(a.timestamp).getTime() : 0;
                    var bTime = b.timestamp ? new Date(b.timestamp).getTime() : 0;
                    return bTime - aTime;
                })
                : c.replies })); });
    };
    var renderData = sortedByLatest ? sortCommentsByLatest(globalStore.data) : globalStore.data;
    return (React__default.createElement("div", { className: 'overlay', style: overlayStyle },
        React__default.createElement("span", { className: 'comment-title', style: titleStyle },
            globalStore.commentsCount || totalComments(),
            ' ',
            totalComments() === 1 ? 'Comment' : 'Comments'),
        React__default.createElement("hr", { className: 'hr-style', style: hrStyle }),
        globalStore.currentUserData === null ? (loginMode()) : (React__default.createElement(InputField, { placeHolder: globalStore.placeHolder, formStyle: { margin: '10px 0px' }, imgDiv: { margin: 0 } })),
        renderData.length > 0 ? (renderData.map(function (i) {
            return (React__default.createElement("div", { key: i.comId },
                React__default.createElement(CommentStructure, { info: i, editMode: _.indexOf(globalStore.editArr, i.comId) !== -1, replyMode: _.indexOf(globalStore.replyArr, i.comId) !== -1, logIn: logIn, showTimestamp: showTimestamp, disableDeleteAction: disableDeleteAction }),
                i.replies &&
                    i.replies.length > 0 &&
                    i.replies.map(function (j) {
                        return (React__default.createElement("div", { className: 'replySection', key: j.comId },
                            React__default.createElement(CommentStructure, { info: j, parentId: i.comId, editMode: _.indexOf(globalStore.editArr, j.comId) !== -1, replyMode: _.indexOf(globalStore.replyArr, j.comId) !== -1, logIn: logIn, showTimestamp: showTimestamp, disableDeleteAction: disableDeleteAction, disableReplySecoundLevelAction: disableReplySecoundLevelAction })));
                    })));
        })) : customNoComment ? (customNoComment()) : (React__default.createElement(NoComments, null))));
};

var CommentSection = function (_a) {
    var currentUser = _a.currentUser, customImg = _a.customImg, inputStyle = _a.inputStyle, formStyle = _a.formStyle, submitBtnStyle = _a.submitBtnStyle, cancelBtnStyle = _a.cancelBtnStyle, overlayStyle = _a.overlayStyle, replyInputStyle = _a.replyInputStyle, logIn = _a.logIn, imgStyle = _a.imgStyle, replyTop = _a.replyTop, commentsCount = _a.commentsCount, disableDeleteAction = _a.disableDeleteAction, disableReplySecoundLevelAction = _a.disableReplySecoundLevelAction, commentData = _a.commentData, placeHolder = _a.placeHolder, showTimestamp = _a.showTimestamp, hrStyle = _a.hrStyle, titleStyle = _a.titleStyle, removeEmoji = _a.removeEmoji, onSubmitAction = _a.onSubmitAction, onDeleteAction = _a.onDeleteAction, onReplyAction = _a.onReplyAction, onEditAction = _a.onEditAction, customNoComment = _a.customNoComment, currentData = _a.currentData, advancedInput = _a.advancedInput, _b = _a.sortedByLatest, sortedByLatest = _b === void 0 ? false : _b;
    return (React.createElement(GlobalProvider, { currentUser: currentUser, replyTop: replyTop, customImg: customImg, inputStyle: inputStyle, formStyle: formStyle, submitBtnStyle: submitBtnStyle, cancelBtnStyle: cancelBtnStyle, replyInputStyle: replyInputStyle, imgStyle: imgStyle, commentsCount: commentsCount, commentData: commentData, onSubmitAction: onSubmitAction, onDeleteAction: onDeleteAction, onReplyAction: onReplyAction, onEditAction: onEditAction, currentData: currentData, removeEmoji: removeEmoji, advancedInput: advancedInput, placeHolder: placeHolder },
        React.createElement(CommentSection$1, { overlayStyle: overlayStyle, hrStyle: hrStyle, logIn: logIn, titleStyle: titleStyle, customNoComment: customNoComment, showTimestamp: showTimestamp, disableDeleteAction: disableDeleteAction, disableReplySecoundLevelAction: disableReplySecoundLevelAction, sortedByLatest: sortedByLatest })));
};

export { CommentSection };
//# sourceMappingURL=index.esm.js.map
