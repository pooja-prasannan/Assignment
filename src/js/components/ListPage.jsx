import React, { Component } from "react";
import { connect } from "react-redux";
import BottomScrollListener from 'react-bottom-scroll-listener';


import SearchPage from './SeachPage';
import { getData } from "../actions/actions";

import backImg from "../../images/Back.png";
import missingImg from "../../images/placeholder_for_missing_posters.png";

import jsonData1 from '../data/db.json';
import jsonData2 from '../data/db1.json';
import jsonData3 from '../data/db2.json';

const mapStateToProps = state => {
  return { jsonData: state.jsonData };
};


const backStyle = {
  position: "absolute",
  top: 0,
  left: 0,
}


export class ListPage extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    this.props.getData(jsonData1);
  }

  render() {

    const jsonData =
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.jsonData.length > 0 &&
          this.props.jsonData.map(content => (
            content.page["content-items"].content.map(item =>
              <>
                <div style={{ flex: 1, flexBasis: "33%" }}>
                  <div class="flex -mx-2">
                    <div class="w-1/3 px-2">
                      {item["poster-image"] === "posterthatismissing.jpg" ?

                        <img
                          src={missingImg}
                          alt="product" /> :
                        <img
                          src={require(`../../images/${item["poster-image"]}`)}
                          alt="product" />}
                      <div class="font-bold text-white sm">
                        {item.name}
                      </div>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                  <br></br>
                </div>
                <br></br>
              </>
            )
          ))}
      </div>

    return (
      <>
        <br></br>
        <SearchPage />
        <br></br>
        <form class="w-full max-w-sm" style={backStyle}>
          <div class="flex items-center ">
            <img class="items-end" src={backImg} alt="back" /> &nbsp; &nbsp;&nbsp;
            {/* show Title */}
            <h2 class="font-bold text-white sm" >
              {
                this.props.jsonData[0] && this.props.jsonData[0].page.title}
            </h2>
          </div>
        </form>
        <br></br>
        <br></br>
            {/* Display the content and fetch data of 2nd and  3rd  page api when scrollbar reaches the end      */}
        <div class="px-2 ">
          {jsonData} 
          {this.props.jsonData.length === 1 ? <BottomScrollListener onBottom={this.props.getData(jsonData2)} /> : ""}
          {this.props.jsonData.length === 2 ? <BottomScrollListener onBottom={this.props.getData(jsonData3)} /> : ""}
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(ListPage);