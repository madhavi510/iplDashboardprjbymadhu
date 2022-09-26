// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props

    const {
      umpires,
      result,
      manOfTheMatch,
      date,
      venue,
      competingTeam,
      competingTeamLogo,
      firstInnings,
      secondInnings,
    } = latestMatch

    return (
      <div className="latestMatch-container">
        <h1 className="match-heading">Latest Matches</h1>
        <div className="latestMatch-list">
          <div className="latest-match-details-container">
            <div className="latest-match-venue">
              <p className="match-name">{competingTeam}</p>
              <p className="dateOfMatch">{date}</p>
              <p className="match-destination">{venue}</p>
              <p className="match-status">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="match-logo"
              alt={`latest match ${competingTeam}`}
            />

            <div className="list-set">
              <div className="match-details">
                <p className="match-innings-title">First Innings</p>
                <p className="match-innings">{firstInnings}</p>
              </div>

              <div className="match-details">
                <p className="match-innings-title">Second Innings</p>
                <p className="match-innings">{secondInnings}</p>
              </div>

              <div className="match-details">
                <p className="match-innings-title">Man Of The Match</p>
                <p className="match-innings">{manOfTheMatch}</p>
              </div>

              <div className="match-details">
                <p className="match-innings-title">Umpires</p>
                <p className="match-innings">{umpires}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
