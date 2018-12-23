// Dependencies
import React, { Component } from 'react';
import * as firebase from 'firebase';

// Components
import { Row, Col } from 'src/components/Box/Box.js';
import Ticker from 'src/components/Ticker/Ticker';

// Local
import styles from './App.module.scss';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalScore: {
        jonas: 0,
        rasmus: 0
      },
      gamesPlayed: 0
    };
  }

  componentDidMount() {
    firebase.database().ref('results').on('child_added', (data) => {
      this.setState((prevState, props) => {
        return {
          gamesPlayed: prevState.gamesPlayed += 1,
          totalScore: {
            jonas: prevState.totalScore.jonas += data.val().jonas,
            rasmus: prevState.totalScore.rasmus += data.val().rasmus,
          }
        }
      })
    })
  }

  handleClickMe() {
    let totalScore = Math.floor(Math.random()*(16-11+1)+11);
    console.log('TOTAL SCORE: ', totalScore);
    let playerAScore = Math.floor(totalScore*Math.random());
    console.log('PLAYER A', playerAScore);
    let playerBScore = totalScore-playerAScore;
    console.log('PLAYER B', playerBScore);

    this.setState((prevState, props) => {
      return {
        gamesPlayed: prevState.gamesPlayed += 1,
        totalScore: {
          jonas: prevState.totalScore.jonas += playerAScore,
          rasmus: prevState.totalScore.rasmus += playerBScore,
        }
      }
    })
  }

  render() {
    let dealer = ' Jonas';
    if (this.state.gamesPlayed % 2 === 0) {
      dealer = 'Rasmus';
    }

    return (
      <Col h='100%' className={ styles.App }>
        <Row xcenter className={ styles.Difference } onClick={() => this.handleClickMe()}>
          <Ticker val={ dealer }/>: #<Ticker pad={'000'} val={ this.state.gamesPlayed }/>
        </Row>
        <Row className={ styles.Score }>
          <Col xcenter>
            <Row className={ styles.Name } xcenter>Jonas</Row>
            <Ticker
              num
              pad={'0000'}
              val={ this.state.totalScore.jonas }
              score={ this.state.totalScore.jonas - this.state.totalScore.rasmus }
            />
          </Col>
          <Col xcenter>
            <Row className={ styles.Name } xcenter>Rasmus</Row>
            <Ticker
              num
              pad={'0000'}
              val={ this.state.totalScore.rasmus }
              score={ this.state.totalScore.rasmus - this.state.totalScore.jonas }
            />
          </Col>
        </Row>
        <Row xcenter className={ styles.Difference }>
          <Ticker num pad={'000'} val={ Math.abs(this.state.totalScore.rasmus - this.state.totalScore.jonas) }/>
        </Row>
      </Col>
    );
  }
}

export default App;
