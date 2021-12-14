import { useState, useEffect, useCallback, ChangeEvent } from 'react'

interface IValues {
  username?: string
  email?: string
  password?: string
}

interface IUseFormValidation {
  initialValues: IValues
  validate: (values: any) => void
}

export const useFormValidation = ({
  initialValues,
  validate,
}: IUseFormValidation) => {
  const [errors, setErrors] = useState<any>({})
  const [values, setValues] = useState<IValues>(initialValues)

  const validateValues = useCallback((values: IValues) => {
    setErrors(validate(values))
  }, [validate])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    const fieldName = target.getAttribute('name') || ''
    const value = target.value

    setValues({
      ...values,
      [fieldName]: value,
    })
  }

  useEffect(() => {
    validateValues(values)
  }, [values, validateValues])

  return {
    values,
    errors,
    handleChange,
  }
}
