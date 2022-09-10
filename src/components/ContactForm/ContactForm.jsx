import React, { useState } from 'react';
import {Box} from 'components/Box';
import PropTypes from 'prop-types';
import {Label, Input, Button} from 'components/ContactForm';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  return (
    <Box as="form" width={[1, 1/2, 1/3]} display="grid"
      onSubmit={event => {
        event.preventDefault();
        handleSubmit({ event, name, number });
      }}
    >
      <Label>
        Name
        <Input
          onChange={event => setName(event.target.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={event => setNumber(event.target.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </Label>
      <Button type="submit">
        Add contact
      </Button>
    </Box>
  );
};
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
