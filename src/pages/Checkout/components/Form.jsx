import { useState } from 'react';
import styled from 'styled-components';
import FormControl from './FormControl';
import FormControlPayment from './FormControlPayment';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    emoney: true,
  });

  const { name, email, phone, address, zip, city, country, emoney } = formData;

  const onChange = (e) => {
    console.log(e.target.value);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onChangeEmoney = (value) => {
    setFormData((prevState) => ({ ...prevState, emoney: value }));
  };

  return (
    <Wrapper>
      <h4>checkout</h4>
      {/* BILLING DETAILS */}
      <div className='form-container'>
        <div className='form-group'>
          <p className='subtitle'>billing details</p>
          <div className='inputs-container'>
            {/* NAME */}
            <FormControl
              name='name'
              value={name}
              onChange={onChange}
              type='text'
              title='Name'
              placeholder='Alexei Ward'
            />
            {/* EMAIL */}
            <FormControl
              name='email'
              value={email}
              onChange={onChange}
              type='email'
              title='Email Address'
              placeholder='alexei@mail.com'
            />
            {/* PHONE */}
            <FormControl
              name='phone'
              value={phone}
              onChange={onChange}
              type='tel'
              title='Phone Number'
              placeholder='+1 202-555-0136'
            />
          </div>
        </div>
        {/* SHIPPING INFO */}
        <div className='form-group'>
          <p className='subtitle'>shipping info</p>
          <div className='inputs-container'>
            {/* ADDRESS */}
            <FormControl
              name='address'
              value={address}
              onChange={onChange}
              type='text'
              title='Your Address'
              placeholder='1137 Williams Avenue'
            />
            {/* ZIP */}
            <FormControl
              name='zip'
              value={zip}
              onChange={onChange}
              type='number'
              title='ZIP Code'
              placeholder='10001'
            />
            {/* CITY */}
            <FormControl
              name='city'
              value={city}
              onChange={onChange}
              type='text'
              title='City'
              placeholder='New York'
            />
            {/* COUNTRY */}
            <FormControl
              name='country'
              value={country}
              onChange={onChange}
              type='text'
              title='Country'
              placeholder='United States'
            />
          </div>
        </div>
        {/* PAYMENT DETAILS */}
        <div className='form-group'>
          <p className='subtitle'>payement details</p>
          <div className='inputs-container checkboxes'>
            <p className='label'>Payment Method</p>
            <FormControlPayment
              name='emoney'
              value={emoney}
              onChange={onChangeEmoney}
              title='e-Money'
            />
            <FormControlPayment
              name='cash'
              value={!emoney}
              onChange={onChangeEmoney}
              title='Cash on Delivery'
            />
          </div>
        </div>
        <div className='form-group'>toogle</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  background: var(--white-color);
  padding: 32px 24px;
  border-radius: 8px;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .inputs-container {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &.checkboxes {
      gap: 1rem;
    }
  }

  .subtitle {
    color: var(--orange-color);
    line-height: 25px;
    margin-bottom: 1rem;
  }

  h4 {
    margin-bottom: 2rem;
  }

  .label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.21px;
    line-height: 16px;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
  }
`;
export default Form;
