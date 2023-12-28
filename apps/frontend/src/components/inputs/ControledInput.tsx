import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import InputError from './InputError'

interface ControledInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  control: Control<any, any>
  label?: string
  placeholder? : string
  labelClass?: string
  errorMessage?: string
  error?: FieldError | undefined;
  containerProps?: HTMLAttributes<HTMLDivElement>
  containerClass?: HTMLAttributes<HTMLDivElement>['className']
}

export const ControledInput: React.FunctionComponent<ControledInputProps> = ({
  label,
  labelClass,
  className,
  errorMessage,
  containerProps,
  containerClass,
  children,
  control,
  error,
  ...rest
}) => {

  return (
    <Controller
      name={rest.name}
      defaultValue={rest.defaultValue || ''}
      render={({ field }) => (
        <div className={classNames(containerClass ?? '')}>
          <input
            className={classNames(
              'form-control',
              error?.message && 'is-invalid',
              className
            )}
            {...rest}
            {...field}
          />
          <InputError error={error?.message} />
        </div>
      )}
      control={control}
      rules={{ required: true }}
    />
  )
}
