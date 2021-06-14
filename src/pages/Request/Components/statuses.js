import React, { Component } from 'react';

class StatusesTimeline extends Component {

    render() {
        return (
            <React.Fragment>
                <li className="pb-2 event-list ">
                    <div className="event-timeline-dot">
                        <i className={this.props.status.active ? "bx bx-left-arrow-circle bx-fade-left" : "bx bx-left-arrow-circle"}></i>
                    </div>
                    <div className="media">
                        <div className="mr-3">
                            <i className={ "text-secondary h2 bx bx-" + this.props.status.iconClass}></i>
                        </div>
                        <div className="media-body">
                            <div>
                                <h6>{this.props.status.name}</h6>
                                <p className="text-muted">{this.props.status.date}</p>

                            </div>
                        </div>
                    </div>
                </li>

            </React.Fragment>
        );
    }
}

export default StatusesTimeline;
