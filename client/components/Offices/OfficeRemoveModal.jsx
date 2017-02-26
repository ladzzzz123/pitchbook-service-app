import React from 'react';
import { Modal, Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import getDataFromForm from '../../utils/getDataFromForm';

import './OfficeRemoveModal.less';


class OfficeRemoveModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowNote: false
    };
  }

  handlerSelectChange(e) {
    this.setState({
      isShowNote: (e.target.value === 'other')
    });
  }

  handlerCloseModal() {
    this.setState({
      isShowNote: false
    });
    this.props.handlerClose();
  }

  handlerSubmit(e) {
    e.preventDefault();

    const formData = getDataFromForm(e.target);
    const reasonOfDelete = (formData.reason === 'other') ? formData.note : formData.reason;

    this.props.handlerSubmit(reasonOfDelete);
  }

  render() {
    return (
      <Modal
        className="office-rm-modal"
        show={this.props.isShowModal}
        onHide={::this.handlerCloseModal}
      >
        <Form onSubmit={::this.handlerSubmit}>
          <Modal.Body>
            <div className="office-rm-modal__message">Please tell us why you&#39;re removing this record.</div>
            <div className="office-rm-modal__reason">
              <FormControl
                name="reason"
                componentClass="select"
                onChange={::this.handlerSelectChange}
              >
                <option value="Former Record">Former Record</option>
                <option value="Duplicate Record">Duplicate Record</option>
                <option value="Duplicate Record">Record Never Existed</option>
                <option value="other">Other</option>
              </FormControl>
              <div
                className={`office-rm-modal__note
                  ${(!this.state.isShowNote) ? 'office-rm-modal__note-disabled' : ''}`}
              >
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Notes:</ControlLabel>
                  {
                    this.state.isShowNote
                      ? <FormControl name="note" componentClass="textarea" />
                    : <FormControl name="note" componentClass="textarea" disabled />
                  }
                </FormGroup>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-default btn-default--bold btn-default--strong pull-left"
              onClick={::this.handlerCloseModal}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="btn-primary pull-right"
            >
              Remove Record
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}
export default OfficeRemoveModal;
