import _ from "lodash";
import React, { Component } from "react";

export default class ElementList extends Component {
    constructor(props) {
        super(props);
    }

    renderFrames() {
        return _.map(this.props.frames, frame => {
            const id = frame.id;
            const owner = frame.owner;
            const status = frame.status;
            const format = frame.format;
            const panel_rate = frame.panel_rate;
            const lat = frame.lat;
            const long = frame.long;
            const period = frame.start_date + "-" + frame.end_date;

            return (

                <tr key={id} onClick={() => this.props.onFrameSelected(frame)}>
                    <td>{id}</td>
                    <td>{owner}</td>
                    <td>{format}</td>
                    <td>$ {panel_rate}</td>
                    <td>{status}</td>
                </tr>
            );
        }
        );
    }

    render() {
        return (
            <div>
                <div className="ibox-title">
                    <h5>Frames Listing  </h5>
                    <div className="ibox-tools">
                        <a className="collapse-link">
                            <i className="fa fa-chevron-up"></i>
                        </a>
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-wrench"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li><a href="#">Config option 1</a>
                            </li>
                            <li><a href="#">Config option 2</a>
                            </li>
                        </ul>
                        <a className="close-link">
                            <i className="fa fa-times"></i>
                        </a>
                    </div>
                </div>
                <div className="ibox-content">

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Owner</th>
                                <th>Format</th>
                                <th>Panel Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderFrames()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
