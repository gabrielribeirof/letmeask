import styled, { css } from 'styled-components';

type ContainerProps = {
  isLiked: boolean
  isAnswered: boolean
  isHighlighted: boolean
}

export const Container = styled.div<ContainerProps>`
  padding: 24px;
  border-radius: 8px;
  background: #FEFEFE;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  & + div {
    margin-top: 8px;
  }

  p {
    color: #29292e;
  }

  ${props =>
    (props.isHighlighted && !props.isAnswered) && (
    css`
      background: #F4F0FF;
      border: 1px solid #835AFD;
    `
  )}

  ${props =>
    props.isAnswered && (
    css`
      background: #DBDCDD;
    `
  )}

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        color: #737380;
        font-size: 14px;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      &.action-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 4px;

        span {
          margin-bottom: -3px;
        }

        &:hover {
          color: #835AFD;

          svg path, svg circle {
            stroke: #835AFD;
          }
        }

        &.active {
          color: #835AFD;

          svg path, svg circle {
            stroke: #835AFD;
          }
        }
      }

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #737380;
        gap: 4px;

        span {
          margin-bottom: -3px;
        }

        &:hover {
          color: #835AFD;

          svg path {
            stroke: #835AFD;
          }
        }

        ${props =>
          props.isLiked && (
          css`
            color: #835AFD;

            svg path {
              stroke: #835AFD;
            }
          `
        )}
      }

      &.delete-action-button {
        display: flex;
        align-items: flex-end;

        &:hover {
          svg path {
            stroke: #E73F5D;
          }
        }
      }
    }
  }
`;
