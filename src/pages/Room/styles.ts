import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #E2E2E2;

    div.content {
      max-width: 1120px;
      margin: 0 auto;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      img {
        max-height: 45px;
      }

      > div {
        display: flex;
        flex-direction: column;
        gap: 16px;

        button {
          height: 40px;
        }
      }

      @media only screen and (min-width: 997px) {
        flex-direction: row;

        > div {
          flex-direction: row;
        }
      }
    }
  }

  main {
    max-width: 880px;
    margin: 0 auto;
    padding: 32px 20px;

    div.room-title {
      min-height: 40px;
      margin-bottom: 18px;

      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 24px;
        color: #29292E;
      }

      span {
        margin-top: 16px;
        padding: 8px 16px;
        border-radius: 9999px;
        background: #E559F9;

        color: #FFF;
        font-weight: 500;
        transition: all 0.2s;
      }

      @media only screen and (min-width: 997px) {
        flex-direction: row;

        span {
          margin-top: 0;
          margin-left: 16px;
        }
      }
    }

    form {
      textarea {
        width: 100%;
        min-height: 130px;
        padding: 16px;
        border: 0;
        border-radius: 8px;
        background: #FEFEFE;
        resize: vertical;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
      }

      div.footer {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div.user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          }
          
          span {
            margin-left: 8px;
            color: #29292E;
            font-size: 14px;
            font-weight: 500;
          }
        }

        > span {
          font-size: 14px;
          color: #737388;
          font-weight: 500;

          a {
            border: 0;
            background: transparent;
            color: #835AFD;
            font-size: 14px;
            font-weight: 500;
            text-decoration: underline;
          }
        }
      }
    }

    div.question-list {
      margin-top: 20px;
    }

    div.no-questions {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        align-self: center;
        margin-bottom: 16px;
      }

      h1 {
        font-size: 18px;
        color: #29292E;
      }
    }
  }
`;
