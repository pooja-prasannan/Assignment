import React, { Component } from "react";
import { connect } from "react-redux";
import serachImg from "../../images/search.png";

const mapStateToProps = state => {
  return { jsonData: state.jsonData };
};


const searchStyle = {
  position: "absolute",
  top: 0,
  right: 0,
}

export class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = { filtered: [] };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.props.jsonData;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item
        // change search term to lowercase
        const filter = e.target.value
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc;
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.props.jsonData;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }


  render() {

    return (
      <>
        <form class="w-full max-w-sm" style={searchStyle}>
          <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
            <img class="items-end" src={serachImg} alt="back" />
          </div>
        </form>
      </>
    )
  }
}

export default connect(
  mapStateToProps,
)(SearchPage);
