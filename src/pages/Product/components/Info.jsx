import styled from 'styled-components';
import { formatPrice } from '../../../utils/helpers';

const Info = ({ description, image, name, new: isNew, price }) => {
  return (
    <Wrapper>
      <img src={image.mobile} alt={name} />
      <div className='container'>
        {isNew && <p className='overline'>new product</p>}
        <h4>{name}</h4>
        <p className='body'>{description}</p>
        <h6>{formatPrice(price)}</h6>
        <div className='btn-container'>
          <div className='amount-btn'>
            <button>-</button>
            <p className='subtitle'>1</p>
            <button>+</button>
          </div>
          <button className='btn'>add to cart</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .overline {
    color: var(--orange-color);
  }

  .body {
    opacity: 0.5;
  }

  .amount-btn {
    background: var(--grey-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 120px;
    height: 48px;
    margin-right: 2rem;
    margin-top: 8px;

    button {
      background: 0;
      border: 0;
      opacity: 0.25;
      font-size: 13px;
      line-height: 0;
    }
  }
`;
export default Info;
