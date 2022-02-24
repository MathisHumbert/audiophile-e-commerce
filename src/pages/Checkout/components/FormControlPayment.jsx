import styled from 'styled-components';

const FormControlPayment = ({ name, value, onChange, title }) => {
  return (
    <Wrapper
      className={value ? 'active main-checkbox' : 'main-checkbox'}
      onClick={() => onChange(name === 'emoney' ? true : false)}
    >
      <input
        type='checkbox'
        id={name}
        checked={value}
        onChange={() => onChange(name === 'emoney' ? true : false)}
      />
      <label htmlFor={name}>{title}</label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px 18px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 21px;

  &.active {
    border: 1px solid var(--orange-color);
  }

  label {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
  }
`;
export default FormControlPayment;
