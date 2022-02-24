import styled from 'styled-components';

const Box = ({ box }) => {
  return (
    <Wrapper>
      <h3 className='title'>in the box</h3>
      <div className='container'>
        {box.map((item, index) => {
          return (
            <ul className='item-container' key={index}>
              <li className='body'>{item.quantity}x</li>
              <li className='body'>{item.item}</li>
            </ul>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 88px 24px 0 24px;

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .item-container {
    display: flex;
    gap: 24px;

    li:first-child {
      color: var(--orange-color);
      font-weight: 700;
    }

    li:last-child {
      opacity: 0.5;
    }
  }
`;
export default Box;
