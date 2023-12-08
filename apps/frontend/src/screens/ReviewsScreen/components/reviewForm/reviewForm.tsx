import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Field } from 'formik';
import * as yup from 'yup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { createReview } from '../../../../store/thunks/reviews-thunk';
import { NewReview } from '../../../../types/reviews';
import { addReviewSelector } from '../../../../store/selectors/addReview';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'react-bootstrap';
import { ControledInput } from '../../../../components/inputs/ControledInput';

interface Props {
}

interface FormData extends NewReview {};

const ReviewForm: React.FunctionComponent<Props> = () => {
  const {loading, review} = useTypedSelector(addReviewSelector);
  const dispatch = useDispatch();
  // const [error, setError] = useState(null);

  const validationSchema = yup.object().shape({
    name: yup.string()
        .min(3, 'Must be 3 characters minimum')
        .max(15, 'Must be 15 characters or less')
        .required('required'),
    review: yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('required'),
  });

  const {
  register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmitHandler = useCallback(async (data: FormData) => {
    console.log(data, " data");
    dispatch(createReview(data));
  }, []);
  console.log(errors, ' all errors');

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
      <ControledInput
        type="text"
        name="review"
        placeholder="Feedback"
        control={control}
        error={errors.review} />
      {/* todo: update disabled condition  */}
      <button type="submit" disabled={ loading }> 
        Submit
      </button>
      <div>
        {loading && (
          <div>addding new item.....</div>
        )}
      </div>
      <div>
        {review && (
          <div>---------<br /><b>last item added</b>: <br /> {review.name}<br /> {review.review}<br /> {review.id}</div>
        )}
      </div>
    </Form>
  );
};

export default ReviewForm;
/*

    const {loading, reviews} = useTypedSelector(reviewsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchReviews());
    }, []);

*/