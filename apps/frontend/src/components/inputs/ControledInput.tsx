import classNames from 'classnames'
import { useField } from 'formik'
import React, { ComponentClass, FunctionComponent, HTMLAttributes } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Control, Controller, FieldError, FieldValues } from 'react-hook-form'
import InputError from './InputError'
import { NewReview } from '../../types/reviews'

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
        <div>
          <input
            className={classNames(
              'input',
              error?.message && 'border-red',
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
