import React, {
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { FieldError } from 'react-hook-form'
import { Container } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  errorMessage?: FieldError | undefined
  register: any
}

const InputTextArea: React.FC<TextAreaProps> = ({
  label,
  errorMessage,
  name,
  register,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleOnFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleOnBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  const cleanFormWhenResetFields = useCallback(() => {
    if (inputRef.current?.value === '' && !isFocused) {
      handleOnBlur()
    }
  }, [handleOnBlur, inputRef.current?.value, isFocused])

  useEffect(() => {
    cleanFormWhenResetFields()
  }, [cleanFormWhenResetFields])

  return (
    <>
      <Container
        $isfocused={isFocused}
        $isfilled={isFilled}
        $isErrored={!!errorMessage?.message}
      >
        <label>{label}</label>
        <div>
          <textarea
            {...register(name, {
              onBlur: handleOnBlur,
            })}
            onFocus={handleOnFocus}
            ref={(e) => {
              register(name).ref(e)
              // @ts-expect-error: Unreachable code error
              inputRef.current = e
            }}
            {...rest}
          />
        </div>
        {errorMessage && <p>{errorMessage.message}</p>}
      </Container>
    </>
  )
}

export default InputTextArea
