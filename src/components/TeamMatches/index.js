// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    matchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchAllDetails()
  }

  getMatchAllDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedList = {
      teamBannerUrl: data.team_banner_url,

      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({matchesList: updatedList, isLoading: false})
  }

  renderMatches = () => {
    const {matchesList} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesList
    return (
      <div className="match-container">
        <img src={teamBannerUrl} className="match-image" alt="team banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.getRecentMatchesList()}
      </div>
    )
  }

  getRecentMatchesList = () => {
    const {matchesList} = this.state
    const {recentMatches} = matchesList

    return (
      <ul className="recent-matches-list-container">
        {recentMatches.map(eachMatch => (
          <MatchCard matchData={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  getLoadingState = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="match-details-container">
        {isLoading ? this.getLoadingState() : this.renderMatches()}
      </div>
    )
  }
}
export default TeamMatches
