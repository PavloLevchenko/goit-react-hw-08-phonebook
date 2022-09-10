import { useForm } from "react-hook-form";
import {Box} from 'components/Box';
import PropTypes from 'prop-types';
import {Label, Input, Button, val} from 'components/ContactForm';

export const ContactForm = ({ submit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <Box as="form" width={[1, 1/2, 1/3]} display="grid" onSubmit={handleSubmit(submit)} >
      <Label>
        Name
        <Input {...register("name", { required: true })} type="text" {...val.name}/>
      </Label>
      <Label>
        Number
        <Input {...register("number", { required: true })} type="tel" {...val.tel}/>
      </Label>
      <Button type="submit">
        Add contact
      </Button>
    </Box>
  );
};
ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
