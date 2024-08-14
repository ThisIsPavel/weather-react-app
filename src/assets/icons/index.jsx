import propTypes from "./props";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Precipitation from "./Precipitation";
import Pressure from "./Pressure";
import Close from "./Close";

const Icons = ({ id }) => {
  const getIcon = (id) => {
    switch (id) {
      case "logo":
        return <Logo />;
      case "theme":
        return <ToggleTheme />;
      case "temp":
        return <Temperature />;
      case "wind":
        return <Wind />;
      case "precipitation":
        return <Precipitation />;
      case "pressure":
        return <Pressure />;
      case "close":
        return <Close />;
      default:
        return null;
    }
  };

  return <>{getIcon(id)}</>;
};

Icons.propTypes = propTypes;

export default Icons;
