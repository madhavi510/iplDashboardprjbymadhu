// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'

import './index.css'

class TeamCard extends Component {
  render() {
    const {matchList} = this.props
    const {name, id, teamImage} = matchList
    return (
      <Link to={`/team-matches/${id}`} className="team-link">
        <li className="team-matches-container">
          <img src={teamImage} alt={name} className="team-img" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
