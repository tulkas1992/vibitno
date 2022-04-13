import styled from "@emotion/styled";
import colors from "../../styles/colors";
import font from "../../styles/font";

const buttonType = type => {
  const button = {};
  switch (type) {
    case "primary":
      button.bg = colors.dodgerBlue;
      button.bgHover = colors.azureRadiance;
      button.color = colors.white;
      break;
    default:
      button.bg = colors.santasGray;
      button.color = colors.midGray;
      break;
  }

  return button;
};

const Button = styled.button(props => {
  const button = buttonType(props.color);
  return {
    display: "inline-block",
    cursor: "pointer",
    outline: 0,
    padding: "8px 12px",
    border: "none",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    fontSize: "0.875rem",
    fontWeight: font.bold,
    textTransform: "uppercase",
    letterSpacing: "-0.2px",
    minHeight: 37,
    borderRadius: 4,
    backgroundColor: button.bg,
    transition: "background-color 0.15s ease",
    color: button.color,
    "&:focus": {
      outline: "none"
    },
    "&:disabled": {
      opacity: "0.5",
      cursor: "not-allowed"
    },
    "&:hover": {
      "&:not(:disabled)": {
        backgroundColor: button.bgHover
      }
    }
  };
});

export default Button;
