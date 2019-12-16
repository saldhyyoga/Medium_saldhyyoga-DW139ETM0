import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/scrollmenu.css";

// list of items
const list = [
  { name: "HOME" },
  { name: "ONEZERO" },
  { name: "ELEMENTAL" },
  { name: "GEN" },
  { name: "ZORE" },
  { name: "FORGE" },
  { name: "HUMAN PARTS" },
  { name: "MARKER" },
  { name: "LEVEL" },
  { name: "HEATED" },
  { name: "MODUS" },
  { name: "MC" },
  { name: "MORE" }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>;
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el;

    return (
      <Link to="/categorypage" className="link">
        <MenuItem
          text={name}
          key={name}
          selected={selected}
          style={{
            marginLeft: "10px",
            dislay: "flex",
            alignItems: "flex-start"
          }}
        />
      </Link>
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

export default class Scroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;

    return (
      <div className="Scroll">
        <center>
          <ScrollMenu
            data={menu}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={selected}
            onSelect={this.onSelect}
            style={{ width: "5px" }}
          />
        </center>
      </div>
    );
  }
}
