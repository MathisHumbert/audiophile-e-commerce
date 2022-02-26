import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import FormControl from './FormControl';
import FormControlPayment from './FormControlPayment';
import images from '../../../assets';
import { onFormChange } from '../../../redux/features/checkoutSlice';
import { controlInput } from '../../../utils/helpers';

const Form = () => {
  const dispatch = useDispatch();
  const { checkout } = useSelector((state) => state.checkout);

  const {
    name,
    email,
    phone,
    address,
    zip,
    city,
    country,
    emoney,
    emoneyNumber,
    emoneyPin,
  } = checkout;

  const onChange = (e) => {
    controlInput(e);
    dispatch(onFormChange({ id: e.target.id, value: e.target.value }));
  };

  const onMoneyChange = (value) => {
    dispatch(onFormChange({ id: 'emoney', value }));
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <h3>checkout</h3>
      {/* BILLING DETAILS */}
      <div className='form-container'>
        <div className='form-group'>
          <p className='subtitle'>billing details</p>
          <div className='inputs-container billing-details'>
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
              type='number'
              title='Phone Number'
              placeholder='+1 202-555-0136'
            />
          </div>
        </div>
        {/* SHIPPING INFO */}
        <div className='form-group'>
          <p className='subtitle'>shipping info</p>
          <div className='inputs-container shipping-info'>
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
              onChange={onMoneyChange}
              title='e-Money'
            />
            <FormControlPayment
              name='cash'
              value={!emoney}
              onChange={onMoneyChange}
              title='Cash on Delivery'
            />
          </div>
        </div>

        <div className='form-group'>
          {emoney ? (
            // EMONEY
            <div className='inputs-container emoney'>
              {/* ADDRESS */}
              <FormControl
                name='emoneyNumber'
                value={emoneyNumber}
                onChange={onChange}
                type='number'
                title='e-Money Number'
                placeholder='238521993'
              />
              {/* ZIP */}
              <FormControl
                name='emoneyPin'
                value={emoneyPin}
                onChange={onChange}
                type='number'
                title='e-Money PIN'
                placeholder='6891'
              />
            </div>
          ) : (
            // CASH
            <div className='cash-container'>
              <img src={images.cashLogo} alt='cash' />
              <p className='body'>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  background: var(--white-color);
  padding: 32px 24px;
  border-radius: 8px;

  h3 {
    margin-bottom: 2rem;
  }

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

  .cash-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 48px;
    }
    .body {
      opacity: 0.5;
    }
  }

  @media (min-width: 768px) {
    padding: 30px 27px;

    h3 {
      margin-bottom: 41px;
    }

    .form-container {
      gap: 56px;
    }

    .billing-details,
    .shipping-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px 1rem;
    }

    .shipping-info .control-form:first-child {
      grid-column: 1 / 3;
    }

    .checkboxes {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .main-checkbox:last-child {
        grid-column: 2/3;
      }
    }

    .emoney {
      flex-direction: row;
      gap: 1rem;
    }

    .cash-container {
      flex-direction: row;
      gap: 2rem;
    }
  }

  @media (min-width: 1440px) {
    width: 730px;
  }
`;
export default Form;
