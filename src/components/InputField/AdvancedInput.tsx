import React, { useState, useEffect, useContext, FormEvent } from 'react'
import { GlobalContext } from '../../context/Provider'

interface AdvancedInputProps {
  formStyle?: React.CSSProperties
  handleSubmit: (e: FormEvent, html: string) => Promise<void> | void
  mode?: string
  cancelBtnStyle?: React.CSSProperties
  submitBtnStyle?: React.CSSProperties
  comId?: string
  imgStyle?: React.CSSProperties
  imgDiv?: React.CSSProperties
  customImg?: string
  text: string
  placeHolder?: string
}

// sehr einfache Sanitization: nur eine Handvoll erlaubter Tags/Attribute, alles andere wird entfernt
const sanitizeHtml = (input: string): string => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(input, 'text/html')

  const allowedTags = new Set([
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
  ])

  const walk = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement
      if (!allowedTags.has(el.tagName)) {
        const parent = el.parentNode
        while (el.firstChild) parent?.insertBefore(el.firstChild, el)
        parent?.removeChild(el)
        return
      }
      // entferne alle Attribute (kein onclick, style, etc.)
      while (el.attributes.length > 0) {
        el.removeAttribute(el.attributes[0].name)
      }
    }
    Array.from(node.childNodes).forEach(walk)
  }

  Array.from(doc.body.childNodes).forEach(walk)
  return doc.body.innerHTML || '<p></p>'
}

const AdvancedInput = ({
  formStyle,
  handleSubmit,
  submitBtnStyle,
  cancelBtnStyle,
  mode,
  comId,
  imgDiv,
  imgStyle,
  customImg,
  text,
  placeHolder
}: AdvancedInputProps) => {
  const globalStore: any = useContext(GlobalContext)

  const [html, setHtml] = useState<string>('<p></p>')
  const [editText, setEditText] = useState<string>('<p></p>')

  useEffect(() => {
    if (text !== '') {
      const safe = sanitizeHtml(text)
      setHtml(safe)
      setEditText(safe)
    }
  }, [text])

  const onInput = (e: React.FormEvent<HTMLDivElement>) => {
    const value = (e.currentTarget as HTMLDivElement).innerHTML
    const safe = sanitizeHtml(value)
    setEditText(safe)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (editText === '<p></p>') return
    await handleSubmit(e, editText)
    setHtml('<p></p>')
    setEditText('<p></p>')
  }

  const canSubmit = editText !== '<p></p>'

  return (
    <div className='advanced-overlay'>
      <div className='userImg' style={imgDiv}>
        <a
          target='_blank'
          href={globalStore.currentUserData.currentUserProfile}
          rel='noreferrer'
        >
          <img
            src={
              globalStore.customImg ||
              customImg ||
              globalStore.currentUserData.currentUserImg
            }
            style={globalStore.imgStyle || imgStyle}
            alt='userIcon'
            className='imgdefault'
          />
        </a>
      </div>
      <div className='advanced-input'>
        <form
          className='form advanced-form '
          style={globalStore.formStyle || formStyle}
          onSubmit={onSubmit}
        >
          <div className='advanced-border'>
            <div
              className='advanced-editor'
              contentEditable
              suppressContentEditableWarning
              onInput={onInput}
              dangerouslySetInnerHTML={{
                __html: html === '<p></p>' ? '' : html
              }}
              aria-label={
                placeHolder ? placeHolder : 'Type your reply here.'
              }
            />
          </div>
          <div className='advanced-btns'>
            {mode && (
              <button
                className='advanced-cancel cancelBtn'
                style={globalStore.cancelBtnStyle || cancelBtnStyle}
                type='button'
                onClick={() =>
                  mode === 'editMode'
                    ? globalStore.handleAction(comId, true)
                    : globalStore.handleAction(comId, false)
                }
              >
                Cancel
              </button>
            )}
            <button
              className='advanced-post postBtn'
              type='submit'
              disabled={!canSubmit}
              style={globalStore.submitBtnStyle || submitBtnStyle}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdvancedInput
