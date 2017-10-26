import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FramesIndex from "./frames_index.js";
import { fetchCampaign, fetchFrames } from "../actions";
import Modal from 'react-modal';
import _ from "lodash";
import ElementList from './element_list.js';



const CampaignHeader = (props) => {
  var dateFormat = require('dateformat');
  var start_date = dateFormat(props.campaign.start_date, "mmmm dS, yyyy");
  var end_date = dateFormat(props.campaign.end_date, "mmmm dS, yyyy");
  var total = _.reduce(props.campaign.frames, function(total, frame) {
    return total + parseFloat(frame.panel_rate);
  }, 0);
  var accounting = require('accounting');

  return (
    <div className="ibox-content product-box col-md-3">
      <div className="product-imitation">
        {props.campaign.title}
      </div>
      <div className="product-desc">
        <div><span className="product-price">
          {accounting.formatMoney(props.campaign.approved_budget - total, "$ ", 0)}
        </span>
        </div>
        <div><small className="text-muted">{props.campaign.client}</small></div>
        <div><small className="text-muted">{props.campaign.brand}</small></div>
        <div><small className="text-muted">{props.campaign.agency}</small></div>
        <div><h6 className="text-bold">
          Approved Budget: {accounting.formatMoney(props.campaign.approved_budget, "$ ", 0)}
        </h6>
        </div>
        <div className="small m-t-xs">
          {start_date} - {end_date}
        </div>
      </div>
    </div>);
}

class CampaignShow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchCampaign(id);
  }


  onAddFrameClicked() {
    const { id } = this.props.match.params;
    this.openModal();
    //this.props.fetchFrames(id, () => {
    //  this.props.history.push(`/campaigns/${id}`);
    //});
  }

  onFrameSelected(frame) {
    console.log(frame);
    this.closeModal();
    this.props.campaign.frames.push(frame);
  }



  render() {
    const { campaign } = this.props;

    if (!campaign) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div>
          <Link to="/">Back To Campaigns</Link>
          <button
            className="btn btn-primary pull-xs-right"
            onClick={this.onAddFrameClicked.bind(this)}
          >
            Add  Frames
          </button>
          <div className="row">
            <CampaignHeader campaign={campaign} />
          </div>
          <div className="row">
              Frames
            <ElementList frames={campaign.frames}/>
          </div>
          
        </div>
        <div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <FramesIndex onFrameSelected={this.onFrameSelected.bind(this)} />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ campaign }) {
  console.log("Campaign state:" + campaign);
  return { campaign };
}

export default connect(mapStateToProps, { fetchCampaign, fetchFrames })(CampaignShow);