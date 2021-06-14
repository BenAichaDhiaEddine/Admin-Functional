import React from 'react';
import store from '../../components/FormBuilder/stores/store'
import ReactFormGenerator from '../../components/FormBuilder/form';



export default class NavBarFormBulder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            previewVisible: false,
            shortPreviewVisible: false,
            roPreviewVisible: false,
        };

        const update = this._onChange.bind(this);
        this._onSubmit = this._onSubmit.bind(this);

        store.subscribe(state => update(state.data));
    }

    showPreview() {
        this.setState({
            previewVisible: true,
        });
    }

    showShortPreview() {
        this.setState({
            shortPreviewVisible:  true,
        });
    }

    showRoPreview() {
        this.setState({
            roPreviewVisible: true,
        });
    }

    closePreview() {
        this.setState({
            previewVisible: false,
            shortPreviewVisible: false,
            roPreviewVisible: false,
        });
    }

    _onChange(data) {
        this.setState({
            data,
        });
    }

    // eslint-disable-next-line no-unused-vars
    _onSubmit(data) {
        console.log('onSubmit', data);
        // Place code to post json data to server here
    }

    render() {
        let modalClass = 'modal';
        if (this.state.previewVisible) {
            modalClass += ' show d-block';
        }

        let shortModalClass = 'modal short-modal';
        if (this.state.shortPreviewVisible) {
            shortModalClass += ' show d-block';
        }

        let roModalClass = 'modal ro-modal';
        if (this.state.roPreviewVisible) {
            roModalClass += ' show d-block';
        }

        return (
            <div className="clearfix" style={{ margin: '10px', width: '70%' }}>
                <h4 className="float-left">Preview</h4>
                <button className="btn btn-primary float-right" style={{ marginRight: '10px' }} onClick={() => this.showPreview()}>Preview Form</button>
                <button className="btn btn-default float-right" style={{ marginRight: '10px' }} onClick={() => this.showShortPreview()}>Alternate/Short Form</button>
                <button className="btn btn-default float-right" style={{ marginRight: '10px' }} onClick={() => this.showRoPreview()}>Read Only Form</button>

                { this.state.previewVisible &&
                    <div className={modalClass} role="dialog">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">

                                <ReactFormGenerator
                                    download_path=""
                                    back_action="/"
                                    back_name="Back"
                                
                                    action_name="hello"
                                    
                                    // skip_validations={true}
                                    onSubmit={this._onSubmit}
                                    variables={this.props.variables}
                                    data={this.state.data} />

                                <div className="modal-footer">
                                    {console.log(this.state.data)}
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                { this.state.roPreviewVisible &&
                    <div className={roModalClass}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">

                                <ReactFormGenerator
                                    download_path=""
                                    back_action="/"
                                    back_name="Back"
                                   
                                    action_name="Save"
                                    form_action="/"
                                    form_method="POST"
                                    read_only={true}
                                    variables={this.props.variables}
                                    hide_actions={true}
                                    data={this.state.data} />

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                { this.state.shortPreviewVisible &&
                    <div className={shortModalClass}>
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content border border-light p-3 mb-4">
                                <ReactFormGenerator
                                    download_path=""
                                    back_action=""
                                  
                                    form_action="/"
                                    form_method="POST"
                                    data={this.state.data}
                                    display_short={true}
                                    variables={this.props.variables}
                                    hide_actions={false} />

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
