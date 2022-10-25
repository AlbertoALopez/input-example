import styles from './SearchInput.module.css';

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
};

const Input = (props: InputProps) => {
  const { value, onChange, hasError } = props;

  return (
    <input
      className={`${styles.input} ${hasError ? styles.inputError : ''}`}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter course"
      required
      name="course"
      data-testid="input"
    />
  );
};

export default Input;
