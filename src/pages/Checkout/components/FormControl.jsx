import styled from 'styled-components';

const FormControl = ({ name, type, value, onChange, title, placeholder }) => {
  return (
    <Wrapper className='control-form'>
      <header>
        <label htmlFor={name}>{title}</label>
        <p className='small'>Wrong Format</p>
      </header>
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='control-input'
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
  }

  label,
  .small {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.21px;
    line-height: 16px;
    cursor: pointer;
  }

  .small {
    font-weight: 500;
    color: #cd2c2c;
    opacity: 0;
  }

  input {
    padding: 24px 18px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.25px;
    color: var(--black-color);
    transition: 0.3s border ease;
    cursor: pointer;

    &::placeholder {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.25px;
      opacity: 0.4;
      color: var(--black-color);
    }

    &:focus {
      border: 1px solid var(--orange-color);
    }

    &:hover {
      border: 1px solid var(--orange-color);
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  &.error {
    label {
      color: #cd2c2c;
    }

    .small {
      opacity: 1;
    }

    input {
      border: 1px solid #cd2c2c;
    }
  }
`;
export default FormControl;
