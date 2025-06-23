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

const DownloadIdeasModal = ({ isOpen, toggle }) => {
  const [phone, setPhone] = useState('');
  const [whatsappUpdates, setWhatsappUpdates] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here (e.g., API call)
    console.log("Form Submitted: Download Ideas");
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Download Design Ideas</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" placeholder="Your Name" required />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email Address" required />
          </FormGroup>
          <FormGroup>
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={setPhone}
              inputStyle={{ width: '100%' }}
              placeholder="Phone Number"
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
              I want updates via WhatsApp
            </Label>
          </FormGroup>
          <FormGroup>
            <Input type="text" placeholder="City or Property Location" />
          </FormGroup>
          <Button type="submit" color="primary" className="w-100 rounded-pill">
            DOWNLOAD NOW
          </Button>
          <p className="text-center mt-3" style={{ fontSize: '12px' }}>
            By continuing, you accept our{' '}
            <a href="#" className="text-decoration-none text-primary">Privacy Policy</a> &{' '}
            <a href="#" className="text-decoration-none text-primary">Terms of Service</a>.
          </p>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default DownloadIdeasModal;
