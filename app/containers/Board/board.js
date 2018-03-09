import React from 'react';
import { connect } from 'react-redux';

import Portfolio from 'components/Portfolio/portfolio';

// Actions
// import { getCoins } from 'actions/coins';

// Services
// import { findCoins } from 'services/coinFactory';
//
// const fetchCoins = (props) => {
//   const { coins, getCoins: goGetCoins } = props;
//   if (coins.collection.length === 0) {
//     goGetCoins();
//   }
// };

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cached: false,
      search: false
    };

    // this.closeSearch = this.closeSearch.bind(this);
  }

  // closeSearch() {
  //   this.setState({ search: false });
  // }

  /*
    TODO
    Board is the main container which contains Search, selected Coins will be
    added to Redux state and then passed down into Portfolio.
   */
  render() {
    return (
      <div id="board">
        {this.state.cached
          ? <Portfolio />
          :
          <section id="welcome">
            <h2>Welcome to</h2>
            <h1>MOON.HOLDINGS</h1>
            <h4>A Futuratum Project</h4>
            <h2>Click the <span className="plus">+</span> button to create your portfolio.</h2>
            <p>{this.state.search}</p>
          </section>
        }
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   getCoins: (...args) => dispatch(getCoins(...args))
// });

// const mapStateToProps = ({ coins, loading, portfolio }) => ({
//   coins,
//   loading,
//   portfolio
// });

export const BoardJest = Board;

export default connect()(Board);
