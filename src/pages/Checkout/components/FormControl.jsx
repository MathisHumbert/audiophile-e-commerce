import styled from 'styled-components';

const FormControl = ({ name, type, value, onChange, title, placeholder }) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.21px;
    line-height: 16px;
  }

  input {
    padding: 24px 18px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.25px;
    color: var(--black-color);

    &::placeholder {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.25px;
      opacity: 0.4;
      color: var(--black-color);
    }
  }
`;
export default FormControl;
