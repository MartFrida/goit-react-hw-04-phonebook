import { StyledButton, StyledInput } from "components/Phonebook/Phonebook.styled"
import React, { useEffect, useState } from "react";
import { StyledContactForm } from "./ContactForm.styled";

export const ContactForm = (onAddContact) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = e => {
    const { target } = e;
    const { name, value } = target;
    setName(value);
  }
  const handleSubmitAddUser = (e) => {
    e.preventDefault();
    onAddContact();
    setName('');
    setNumber('')
  }
  return (
    <StyledContactForm onSubmit={handleSubmitAddUser} >
      <StyledInput name="name" value={name} onChange={handleChangeInput} placeholder="Enter name" />
      <StyledInput name='number' value={number} onChange={handleChangeInput} placeholder="Enter phone number" />
      <StyledButton>Add contact</StyledButton>
    </StyledContactForm>
  )
}


















// export class ContactForm extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   }
//   handleChangeInput = e => {
//     const { target } = e;
//     const { name, value } = target;
//     this.setState({ [name]: value })
//   }

//   handleSubmitAddUser = (e) => {
//     e.preventDefault();
//     this.props.onAddContact(this.state)
//     this.setState({
//       name: '',
//       number: '',
//     })
//   }
//   render() {
//     const { name, number } = this.state;

//     return (
//       <StyledContactForm onSubmit={this.handleSubmitAddUser} >
//         <StyledInput name="name" value={name} onChange={this.handleChangeInput} placeholder="Enter name" />
//         <StyledInput name='number' value={number} onChange={this.handleChangeInput} placeholder="Enter phone number" />
//         <StyledButton>Add contact</StyledButton>
//       </StyledContactForm>
//     )
//   }

// }