// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {matchList: [], isLoading: true}

  componentDidMount() {
    this.getTeamDetailsList()
  }

  getTeamDetailsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(match => ({
      name: match.name,
      id: match.id,
      teamImage: match.team_image_url,
    }))
    this.setState({matchList: updatedData, isLoading: false})
  }

  getTeamsListData = () => {
    const {matchList} = this.state

    return (
      <ul className="match-list">
        {matchList.map(match => (
          <TeamCard matchList={match} key={match.id} />
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
      <div className="main-container">
        <div className="heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="title">Ipl DashBoard</h1>
        </div>

        {isLoading ? this.getLoadingState() : this.getTeamsListData()}
      </div>
    )
  }
}
export default Home
