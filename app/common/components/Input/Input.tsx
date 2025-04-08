interface InputFieldProps {
    label?: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string
  }
  
  export const Input = ({
    label,
    name,
    value,
    onChange,
    placeholder = '',
  }: InputFieldProps) => {
    return (
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    )
  }
  