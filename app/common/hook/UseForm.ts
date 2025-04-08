import { useState } from 'react'

type FormValues = Record<string, any>

export const useForm = <T extends FormValues>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => setValues(initialValues)

  const isValid = () => {
    return Object.values(values).every(
      (value) => typeof value === 'string' ? value.trim() !== '' : value !== null
    )
  }

  return {
    values,
    setValues,
    handleChange,
    resetForm,
    isValid
  }
}
