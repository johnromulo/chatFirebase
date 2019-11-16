import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';
import TextareaAutosize from 'react-textarea-autosize';
import PulseLoaderDefault from 'react-spinners/PulseLoader';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  form {
    display: flex;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
  }
`;

export const Main = styled(ScrollToBottom)`
  align-items: flex-end;
  overflow-y: scroll;
  height: 100%;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    li {
      width: 100%;
      padding: 5px 10px;
      display: flex;
    }
  }
`;

export const ChatContent = styled.div`
  padding-top: 20px;
  display: flex;
  flex: 1;
  justify-content: ${props => (props.left ? 'flex-start' : 'flex-end')};

  > div {
    background: ${props => (props.left ? '#fff' : '#283042')};
    max-width: 50%;
    padding: 6px 7px 8px 9px;
    border-radius: 7.5px;
    box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-areas:
      'chatUser chatUser'
      'textChat none1'
      'none2 textDate';

    h1 {
      grid-area: chatUser;
      font-size: 14px;
      margin-bottom: 4px;
      color: ${props => (props.left ? '#283042' : '#fff')};
    }

    p {
      font-size: 14px;
      color: ${props => (props.left ? '#283042' : '#fff')};
      grid-area: textChat;
      word-break: break-all;
    }

    > div {
      width: 100%;
      /* background: red; */
      text-align: right;
      font-size: 10px;
      color: ${props =>
        props.left ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.45)'};
      grid-area: textDate;

      span {
        margin-left: 10px;
      }
    }
  }
`;

export const ContainerLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
`;

export const Loading = styled(PulseLoaderDefault).attrs({
  size: 14,
  color: '#bdbdbd',
  sizeUnit: 'px',
})``;

export const Textarea = styled(TextareaAutosize)`
  resize: none;
  margin: 20px;
  width: 100%;
  padding: 10px;
  background: #283042;
  border-radius: 10px;
  border: 3px solid #283042;
  transition: all 0.25s ease-in;
  font-weight: bold;
  color: #262626;
  font-size: 14px;

  &:focus {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.2);
    border-color: #283042;
    width: 100%;
    padding: 12px;
    background: #fff;
  }

  ::placeholder {
    font-weight: bold;
    color: #868686;
  }
`;
