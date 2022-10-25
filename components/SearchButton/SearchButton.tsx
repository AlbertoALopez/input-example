import styles from './SearchButton.module.css';

interface ButtonProps {
  disabled: boolean;
};

const Button = (props: ButtonProps) => {
  const { disabled } = props;

  return (
    <button
      className={styles.searchButton}
      disabled={disabled}
      type="submit"
      data-testid="button"
    >
      Submit
    </button>
  );
};

export default Button;
