import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ControledInput } from '../../../components/inputs/ControledInput';
import { useDispatch } from '../../../hooks/dispatch';
import { setPlayerName } from '../../../store/reducers/playerReduser';

interface Props {
}

interface FormData {
    name: string
};

const StartGameForm: React.FunctionComponent<Props> = () => {
    const dispatch = useDispatch();
    const validationSchema = yup.object().shape({
      name: yup.string()
          .min(3, 'Must be 3 characters minimum')
          .max(15, 'Must be 15 characters or less')
          .required('Required')
    });

    const {
      handleSubmit,
      control,
      formState: { errors },
      getValues
    } = useForm<FormData>({
      resolver: yupResolver(validationSchema)
    });

    const onSubmitHandler = useCallback(() => {
        const name: string = getValues('name');
        // Save new player name
        dispatch(setPlayerName(name));
    }, [dispatch, getValues]);
 
    return (
        <Form
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <ControledInput
                type="text"
                name="name"
                placeholder="Name"
                control={control}
                error={errors.name} />
            <button className='btn btn-primary' type="submit"> 
                Submit
            </button>
        </Form>
    )
}

export default StartGameForm;
