import "./Toggle.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context";

function Toggle() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <FaSun className="t-icon" />
      <FaMoon className="t-icon" />

      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 25 : 0 }}
      ></div>
    </div>
  );
}

export default Toggle;