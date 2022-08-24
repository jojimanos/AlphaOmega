import React, { Component } from "react";
import styles from "../../styles/Home.module.css";

class Dropdown extends Component {
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  toggleIt = () => {
    this.props.toggleIt();
  };

  render() {
    return (
      <p className="dropdown" onClick={this.toggleOpen}>
        <button
          className="
          dropdown-toggle
          leading-tight
          rounded
          hover:bg-gray-200
          focus:bg-gray-300
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={this.handleButtonClick}
        >
          {this.props.settings}
        </button>
        {this.state.open && (
          <ul>
            <li>
              <a
                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                href="#"
              >
                <button
                  className={styles.container}
                  onClick={() => this.toggleIt()}
                >
                  {this.props.themeswitch}
                </button>
              </a>
            </li>
            <li>
              <a
                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                href="#"
              >
                Another action
              </a>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a
                class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
                href="#"
              >
                Something else here
              </a>
            </li>
          </ul>
        )}
      </p>
    );
  }
}

export default Dropdown;
