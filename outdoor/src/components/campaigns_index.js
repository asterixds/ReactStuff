import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {fetchCampaigns} from '../actions';

class CampaignsIndex extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }

  renderCampaigns() {
    return _.map(this.props.campaigns, campaign => {
      return (
        <li className="list-group-item" key={campaign.id}>
          <Link to={`/campaigns/${campaign.id}`}>
            {campaign.client}
          </Link>
        </li>
      );
    });
  }

  
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/campaigns/new">
            Add a Campaign
          </Link>
        </div>
        <h3>Campaigns</h3>
        <ul className="list-group">
          {this.renderCampaigns()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { campaigns: state.campaigns };
}
  
export default connect(mapStateToProps, { fetchCampaigns })(CampaignsIndex);
