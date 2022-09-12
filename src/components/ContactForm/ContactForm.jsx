import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { BsFillAspectRatioFill } from "react-icons/bs";
import toast from 'react-hot-toast';
import {Box} from 'components/Box';
import {Label, Input, Button, val} from 'components/ContactForm';
import {addContact, setFilter} from 'redux/actions';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const contacts = useSelector((state) => state.contacts.items);

  const clearFilter = () => {
    dispatch(setFilter(''));
  };

  const onFormSubmit = (data, e) => {
    const { name, phone } = data;
    e.target.reset();
    
    const existName = name.toLowerCase();
    const exist = contacts.find(contact => contact.name.toLowerCase() === existName);

    if (exist) {
      toast(`${name} is already in contacts.`, {icon: <BsFillAspectRatioFill/>,});
    } else {
      dispatch(addContact({name, phone}));
    }
    clearFilter();
  };
  return (
    <Box as="form" width={[1, 1/2, 1/3]} display="grid" onSubmit={handleSubmit(onFormSubmit)} >
      <Label>
        Name
        <Input {...register("name", { required: true })} type="text" {...val.name}/>
      </Label>
      <Label>
        Number
        <Input {...register("phone", { required: true })} type="tel" {...val.tel}/>
      </Label>
      <Button type="submit" disabled={loading}>
        Add contact
      </Button>
    </Box>
  );
};
