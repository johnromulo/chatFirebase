import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  form {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      input {
        margin: 20px;
        width: 235px;
        padding: 10px;
        background: #283042;
        border-radius: 10px;
        border: 3px solid #283042;
        transition: all 0.25s ease-in;
        font-weight: bold;
        color: #868686;

        &:focus {
          box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.2);
          border-color: #283042;
          width: 270px;
          padding: 12px;
          background: #fff;
        }

        ::placeholder {
          font-weight: bold;
        }
      }
    }
  }
`;
