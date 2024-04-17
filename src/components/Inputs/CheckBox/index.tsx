import React, { InputHTMLAttributes, useState } from 'react'
import { Container } from './styles'
import { UseFormRegister } from 'react-hook-form'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  text?: string
  onChange?: (e: any) => void
  register: UseFormRegister<any>
  name: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  text,
  onChange,
  register,
  name,
  ...props
}) => {
  return (
    <Container>
      <input
        {...register(name)}
        id={id}
        type="checkbox"
        {...props}
        onChange={onChange}
      />
      {text && <label htmlFor={id}>{text}</label>}
    </Container>
  )
}

export default Checkbox
