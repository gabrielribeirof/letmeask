import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  aside {
    padding: 20px 50px;
    display: none;
    flex-direction: column;
    justify-content: center;

    background: #835AFD;
    color: #FFF;

    img {
      max-width: 300px;
      z-index: 0;
      position: absolute;
    }

    strong {
      font-size: 30px;
      font-weight: 700;
      line-height: 42px;
      z-index: 1;
    }

    p {
      font-size: 20px;
      line-height: 32px;
      margin-top: 14px;
      color: #FFF;
      z-index: 1;
    }
  }

  main {
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.main-content {
      width: 100%;
      display: flex;
      flex-direction: column;

      > img {
        align-self: center;
      }

      div.separator {
        margin: 32px 0;
        display: flex;
        align-items: center;

        font-size: 14px;
        color: #A8A8B3;

        &::before {
          content: '';
          flex: 1;
          height: 1px;
          background: #A8A8B3;
          margin-right: 16px;
        }

        &::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #A8A8B3;
          margin-left: 16px;
        }
      }

      h2 {
        margin: 20px 0 24px;
        color: #29292E;
        font-size: 20px;
        text-align: center;
      }

      form {
        button, input {
          width: 100%;
        }

        button {
          margin-top: 16px;
        }
      }

      p {
        font-size: 14px;
        color: #737380;
        margin-top: 16px;

        a {
          color: #E559F9;
        }
      }
    }
  }

  @media only screen and (min-width: 997px) {
    flex-direction: row;

    aside {
      width: 47%;

      img {
        position: unset;
      }
    }

    main {
      width: 53%;

      div.main-content {
        width: 400px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    min-height: 100vh;

    aside {
      display: flex;
    }
  }
`;
