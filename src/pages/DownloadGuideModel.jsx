import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const DownloadGuideModal = ({ isOpen, toggle }) => {
  const [phone, setPhone] = useState('');
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log("Form submitted");
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Download Guide</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" placeholder="Name" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email ID" required />
          </FormGroup>
          <FormGroup>
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%' }}
              placeholder="Phone number"
              enableSearch
              required
            />
          </FormGroup>
          <FormGroup check className="mb-3">
            <Label check>
              <Input
                type="checkbox"
                checked={whatsappUpdates}
                onChange={() => setWhatsappUpdates(!whatsappUpdates)}
              />{' '}
              Send me updates on WhatsApp
            </Label>
          </FormGroup>
          <FormGroup>
            <Input type="text" placeholder="Property Name" />
          </FormGroup>
          <Button
            type="submit"
            color="success"
            className="w-100 rounded-pill"
          >
            DOWNLOAD
          </Button>
          <p className="text-center mt-3" style={{ fontSize: '12px' }}>
            By submitting this form, you agree to the{' '}
            <a href="#" className="text-decoration-none text-danger">privacy policy</a> &{' '}
            <a href="#" className="text-decoration-none text-danger">terms and conditions</a>.
          </p>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default DownloadGuideModal;
