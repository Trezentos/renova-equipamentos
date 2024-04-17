import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Container, ErrorMessage } from './styles'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  errorMessage?: FieldError | undefined
  register: UseFormRegister<any>
  name: string
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  errorMessage,
  register,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

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
          <input
            {...register(name, {
              onBlur: handleOnBlur,
            })}
            onFocus={handleOnFocus}
            {...props}
            ref={(e) => {
              register(name).ref(e)
              // @ts-expect-error: Unreachable code error
              inputRef.current = e
            }}
          />
        </div>
        {errorMessage && <ErrorMessage>{errorMessage?.message}</ErrorMessage>}
      </Container>
    </>
  )
}

export default Input
