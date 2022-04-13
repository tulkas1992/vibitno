import { css } from "@emotion/core";
import font from "./app/styles/font";
import colors from "./app/styles/colors";

export const global = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "DIN Pro";
    font-size: ${font.base};
    color: ${colors.midGray};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  .btn-group {
    .btn {
      color: ${colors.santasGray};
      background: none; border: 0;
      padding: 0;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  button {
    cursor: pointer;
    border: 0;
    &:disabled {
      cursor: not-allowed;
    }
    &:focus {
      outline: none;
    }
  }

  .flex {
    display: flex;
  }

  .center {
    justify-content: center;
  }

  .link {
    font-size: 0.875rem;
    font-weight: ${font.regular};
    color: ${colors.dodgerBlue};
    line-height: 1;
    &:hover {
      text-decoration: none;
      color: ${colors.azureRadiance};
    }
  }

  .card {
    border: 0;
  }

  .big-shadow {
    box-shadow: 0 4px 15px 0 ${colors.mirage}1a;
  }

  .form-group {
    margin-bottom: 10px;
    label {
      margin-bottom: 3px;
      margin-left: 9px;
    }
  }

  .has-error {
    &.form-control {
      border-color: ${colors.thunderbird};
      box-shadow 0 0 0 0.2rem ${colors.thunderbird}40;
    }
  }

  .form-control {
    height: auto;
    color: ${colors.midGray};
    border-color: ${colors.athensGray};
    border-radius: 4px;
    box-shadow: inset 0 1px 2px 0 ${colors.mirage}26;
    padding: 11px 15px;
    &:focus {
      color: ${colors.midGray};
    }
    &::placeholder {
      color: ${colors.santasGray};
    }
  }

  .password-wrapper {
    position: relative;
    .form-control {
      padding-right: 37px;
    }
    svg {
      position: absolute;
      top: 50%;
      right: 15px;
      color: ${colors.mineShaft}80;
      cursor: pointer;
      transform: translateY(-50%);
    }
  }

  .alert {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 540px;
    color: ${colors.white};
    font-size: .875rem;
    font-weight: ${font.medium};
    line-height: 22px;
    border-color: transparent;
    padding: 0.875rem 1rem;
    .icon {
      display: inline-flex;
      font-size: 22px;
      margin-right: 18px;
    }
    .close {
      color: ${colors.white};
      opacity: 1;
      &:focus {
        outline: none;
      }
    }
  }

  .alert-danger {
    background-color: ${colors.thunderbird};
  }

  .alert-success {
    background-color: ${colors.apple};
  }

  .Toastify__toast-container {
    width: 100%;
    max-width: 540px;
  }

  .Toastify__toast {
    min-height: 48px;
    font-family: inherit;
    box-shadow: none;
    border-radius: 4px;
    padding: 12px 16px;
  }

  .Toastify__toast--error {
    background: ${colors.thunderbird};
  }

  .Toastify__toast--success {
    background: ${colors.apple};
  }

  .Toastify__toast-container--top-center {
    margin-left: -270px;
  }

  .rc-table {
    padding-bottom: 10px;
  }

  .rc-table table {
    border-collapse: collapse;
  }

  .rc-table .rc-table-body {
    padding: 1px;
  }

  .rc-table .rc-table-tbody {
    border: 1px solid #e9e9e9;
  }

  .rc-table .rc-table-thead tr {
    height: 46px;
  }

  .rc-table tr {
    height: 60px;
  }

  .rc-table .rc-table-row {
    transition: box-shadow 0.2s ease;
    &:hover {
      background: transparent;
      box-shadow: 0 1px 8px 0 ${colors.mirage}26;
      .more {
        opacity: 1;
        visibility: visible;
      }
    }
    .more {
      display: flex;
      justify-content: space-around;
      margin-right: 10px;
      opacity: 0;
      visibility: hidden;
      .icon {
        cursor: pointer;
        svg {
          color: ${colors.santasGray};
          font-size: 18px;
          transition: color 0.2s ease;
        }
        &:hover {
          svg {
            color: ${colors.dodgerBlue};
          }
        }
      }
    }
  }

  .rc-table th,
  .rc-table td {
    padding: 0;
  }

  .rc-table th {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: ${font.regular};
    color: ${colors.midGray};
    letter-spacing: 1px;
    background: ${colors.white};
    line-height: 18px;
  }

  .rc-table td {
    font-size: 0.875rem;
    color: ${colors.midGray};
    line-height: 22px;
    :nth-of-type(2) {
      font-weight: ${font.medium};
    }
    .sb-avatar {
      margin-right: 16px;
    }
  }

  .rc-table-row {
    &.selected {
      background: ${colors.dodgerBlue}20 !important;
    }
  }

  .tooltip {
    .tooltip-inner {
      background: ${colors.black}99;
    }
    &.bs-tooltip {
      &-top {
        .arrow {
          &::before {
            border-top-color: ${colors.black}99;
          }
        }
      }
      &-right {
        .arrow {
          &::before {
            border-right-color: ${colors.black}99;
          }
        }
      }
      &-bottom {
        .arrow {
          &::before {
            border-bottom-color: ${colors.black}99;
          }
        }
      }
      &-left {
        .arrow {
          &::before {
            border-left-color: ${colors.black}99;
          }
        }
      }
    }
  }
`;
