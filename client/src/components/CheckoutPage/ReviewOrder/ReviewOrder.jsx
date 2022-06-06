import { Grid, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import React from 'react';
import PaymentDetails from './PaymentDetails';
import ProductDetails from './ProductDetails';
import ShippingDetails from './ShippingDetails';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
