// @flow
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import successIcon from './wink.svg';
import errorIcon from './thinking.svg';

import styles from './ContactForm.module.scss';

type Props = {
  url: string,
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const ContactSchema = Yup.object().shape({
  subject: Yup.string()
    .max(150, 'Too Long!')
    .required('Required'),
  contactType: Yup.string().required('Required'),
  name: Yup.string()
    .max(150, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  content: Yup.string().required('Required'),
});

const ContactForm = ({ url }: Props) => {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={(values, actions) => {
        const formData = `${url}?entry.900826601=${
          values.subject
        }&entry.494971840=${values.contactType}&entry.2005620554=${
          values.name
        }&entry.1045781291=${values.email}&entry.839337160=${encodeURI(
          values.content
        )}&submit=Submit`;
        fetch(formData, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
          .then(data => {
            actions.setSubmitting(false);
            if (data.ok) {
              actions.setStatus({
                msg: `Your message was sent. I'll try to get back to you ASAP, have a nice day :)`,
                code: 200,
              });
            } else {
              actions.setStatus({
                msg: `There was a problem with connecting with Google services. Because of that your message couldn't be processed. It would be great if You could send the same message to contact@quarkowl.com . Sorry for inconvenience :(`,
                code: 400,
              });
            }
          })
          .catch(() => {
            actions.setSubmitting(false);
            actions.setStatus({
              msg: `There was a problem with connecting with Google services. Because of that your message couldn't be processed. It would be great if You could send the same message to contact@erdem.pl. Sorry for inconvenience :(`,
              code: 400,
            });
          });
      }}
      validationSchema={ContactSchema}
      initialValues={{
        subject: '',
        contactType: '',
        name: '',
        email: '',
        content: '',
      }}
      render={({
        values,
        errors,
        status,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => {
        return status != null ? (
          <div className={styles.Message}>
            <h2
              className={[
                status.code === 400
                  ? styles['Message-title_error']
                  : styles['Message-title_success'],
                styles['Message-title'],
              ].join(' ')}
            >
              {status.code === 400 ? 'Houston, we have a problem' : 'Success'}
              <img
                src={status.code === 400 ? errorIcon : successIcon}
                className={styles['Message-icon']}
                alt={
                  status.code === 400 ? 'Houston, we have a problem' : 'Success'
                }
              />
            </h2>
            <div>{status.msg}</div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={classes.container}
            autoComplete="off"
          >
            <TextField
              id="subject"
              fullWidth
              required
              margin="normal"
              label="Subject"
              value={values.subject}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.subject && touched.subject}
              helperText={touched.subject && errors.subject}
              FormHelperTextProps={{ className: styles.helperClassName }}
            />
            <FormControl
              margin="normal"
              required
              error={errors.contactType != null}
              className={classes.textField}
              fullWidth
            >
              <InputLabel htmlFor="contact-type">Contact Type</InputLabel>
              <Select
                value={values.contactType}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: 'contactType',
                  id: 'contact-type',
                }}
              >
                {[
                  'Workshop Inquiry',
                  'Consulting',
                  'Help / question?',
                  'Other',
                ].map((value, index) => (
                  <MenuItem key={index} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </Select>
              {errors.contactType && (
                <FormHelperText className={styles.helperClassName}>
                  {errors.contactType}
                </FormHelperText>
              )}
            </FormControl>
            <TextField
              margin="normal"
              fullWidth
              required
              id="name"
              label="Name"
              value={values.name}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name && touched.name}
              helperText={touched.name && errors.name}
              FormHelperTextProps={{ className: styles.helperClassName }}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="email"
              label="Email"
              value={values.email}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
              FormHelperTextProps={{ className: styles.helperClassName }}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              multiline
              id="content"
              label="Description"
              value={values.content}
              className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.content && touched.content}
              helperText={touched.content && errors.content}
              FormHelperTextProps={{ className: styles.helperClassName }}
            />
            <Button
              margin="normal"
              fullWidth
              type="submit"
              color="primary"
              className={classes.button}
              disabled={isSubmitting || Object.keys(errors).length > 0}
            >
              Submit
            </Button>
          </form>
        );
      }}
    />
  );
};

export default ContactForm;
