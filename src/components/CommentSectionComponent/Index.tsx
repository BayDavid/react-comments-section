import CommentStructure from '../CommentStructure.tsx/Index'
import InputField from '../InputField/Index'
import './CommentSection.css'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Provider'
import _ from 'lodash'
import React from 'react'
import LoginSection from '../LoginSection/LoginSection'
import NoComments from './NoComments'

interface CommentSectionProps {
  overlayStyle?: object
  logIn: {
    loginLink?: string | (() => void)
    signUpLink?: string | (() => void)
    onLogin?: string | (() => void)
    onSignUp?: string | (() => void)
  }
  hrStyle?: object
  titleStyle?: object
  customNoComment?: Function
  showTimestamp?: boolean,
  disableDeleteAction?: boolean
  disableReplySecoundLevelAction?: boolean
  sortedByLatest?: boolean
}

const CommentSection = ({
  overlayStyle,
  logIn,
  hrStyle,
  titleStyle,
  customNoComment,
  showTimestamp = true,
  disableDeleteAction = false,
  disableReplySecoundLevelAction = false,
  sortedByLatest = false
}: CommentSectionProps) => {
  const handleLogin = () => {
    if (typeof logIn.onLogin === 'function') {
      logIn.onLogin()
    } else if (typeof logIn.loginLink === 'string') {
      window.location.href = logIn.loginLink
    }
  }

  const handleSignUp = () => {
    if (typeof logIn.onSignUp === 'function') {
      logIn.onSignUp()
    } else if (typeof logIn.signUpLink === 'string') {
      window.location.href = logIn.signUpLink
    }
  }

  const loginMode = () => {
    return <LoginSection loginLink={handleLogin} signUpLink={handleSignUp} />
  }
  const globalStore: any = useContext(GlobalContext)

  const totalComments = () => {
    let count = 0
    globalStore.data.map((i: any) => {
      count = count + 1
      i.replies.map(() => (count = count + 1))
    })
    return count
  }

  const sortCommentsByLatest = (arr: any[]) => {
    return [...arr]
      .sort((a, b) => {
        const aTime = a.timestamp ? new Date(a.timestamp).getTime() : 0
        const bTime = b.timestamp ? new Date(b.timestamp).getTime() : 0
        return bTime - aTime
      })
      .map(c => ({
        ...c,
        replies: c.replies && Array.isArray(c.replies)
          ? [...c.replies].sort((a: any, b: any) => {
              const aTime = a.timestamp ? new Date(a.timestamp).getTime() : 0
              const bTime = b.timestamp ? new Date(b.timestamp).getTime() : 0
              return bTime - aTime
            })
          : c.replies
      }))
  }

  const renderData = sortedByLatest ? sortCommentsByLatest(globalStore.data) : globalStore.data

  return (
    <div className='overlay' style={overlayStyle}>
      <span className='comment-title' style={titleStyle}>
        {globalStore.commentsCount || totalComments()}{' '}
        {totalComments() === 1 ? 'Comment' : 'Comments'}
      </span>
      <hr className='hr-style' style={hrStyle} />
      {globalStore.currentUserData === null ? (
        loginMode()
      ) : (
        <InputField
          placeHolder={globalStore.placeHolder}
          formStyle={{ margin: '10px 0px' }}
          imgDiv={{ margin: 0 }}
        />
      )}

      {renderData.length > 0 ? (
        renderData.map(
          (i: {
            userId: string
            comId: string
            fullName: string
            avatarUrl: string
            text: string
            userProfile?: string
            replies: Array<any> | undefined
          }) => {
            return (
              <div key={i.comId}>
                <CommentStructure
                  info={i}
                  editMode={_.indexOf(globalStore.editArr, i.comId) !== -1}
                  replyMode={_.indexOf(globalStore.replyArr, i.comId) !== -1}
                  logIn={logIn}
                  showTimestamp={showTimestamp}
                  disableDeleteAction={disableDeleteAction}
                />
                {i.replies &&
                  i.replies.length > 0 &&
                  i.replies.map((j) => {
                    return (
                      <div className='replySection' key={j.comId}>
                        <CommentStructure
                          info={j}
                          parentId={i.comId}
                          editMode={_.indexOf(globalStore.editArr, j.comId) !== -1}
                          replyMode={_.indexOf(globalStore.replyArr, j.comId) !== -1}
                          logIn={logIn}
                          showTimestamp={showTimestamp}
                          disableDeleteAction={disableDeleteAction}
                          disableReplySecoundLevelAction={disableReplySecoundLevelAction}
                        />
                      </div>
                    )
                  })}
              </div>
            )
          }
        )
      ) : customNoComment ? (
        customNoComment()
      ) : (
        <NoComments />
      )}
    </div>
  )
}

export default CommentSection
