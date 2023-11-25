import React, { useState } from 'react';
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { createReview } from '../../../../store/thunks/reviews-thunk';
import { NewReview } from '../../../../types/reviews';
import { addReviewSelector } from '../../../../store/selectors/addReview';

interface Props {
}

const ReviewForm: React.FunctionComponent<Props> = () => {
  const {loading, review} = useTypedSelector(addReviewSelector);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const initialValues = { name: '', review: '' };
  const validationSchema = yup.object().shape({
      name: yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('common:errors.required'),
      review: yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('common:errors.required'),
    });

  const onSubmitHandler = async (values: NewReview) => {
    setError(null);
    dispatch(createReview(values));
    console.log(values);
  };


    return (
        <Formik
          validationSchema={validationSchema}
          onSubmit={onSubmitHandler}
          initialValues={initialValues}>
        {({ values, submitForm, isSubmitting, setFieldValue, errors }) => (
            <Form className=''>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="text" name="review" placeholder="Feedback" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <div>
              {loading && (
                <div>addding item</div>
              )}
            </div>
            <div>
              {review && (
                <div>added last item: <br /> {review.name}<br /> {review.review}<br /> {review.id}</div>
              )}
            </div>
            </Form>
        )}
        </Formik>
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