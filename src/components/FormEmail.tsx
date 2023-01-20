import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
const FormEmail = () => {
  type emailParams = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  const sendEmail = (value: emailParams) => {
    emailjs
      .send("service_u5mu7a3", "template_20hmolf", {
        from_name: value.name,
        from_email: value.email,
        subject: value.subject,
        message: value.message,
      })
      .then(
        (response) => {
          toast({
            title: "Message sent.",
            description: "We'll get back to you soon.",
            status: "success",
            duration: 5000,
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const mailSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "more than 3 characters")
      .max(40, "less than 40 characters"),
    email: Yup.string().email("Invalid email").required("Required"),
    subject: Yup.string()
      .required("Required")
      .min(3, "more than 3 characters")
      .max(40, "less than 40 characters"),
    message: Yup.string().required("Required"),
  });

  return (
    <Box sx={formLayout}>
      <Formik
        initialValues={{ name: "", email: "", subject: "", message: "" }}
        validationSchema={mailSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setLoading(true);
          emailjs
            .send(
              "service_u5mu7a3",
              "template_20hmolf",
              {
                from_name: values.name,
                from_email: values.email,
                subject: values.subject,
                message: values.message,
              },
              "A2vHNX4cRkxxI1NMr"
            )
            .then((response) => {
              toast({
                title: "Message sent.",
                description: "We'll get back to you soon.",
                status: "success",
                duration: 5000,
              });
            })
            .then(() => {
              setLoading(false);
            })
            .then(() => {
              window.location.reload();
            })
            .catch((error) => {
              console.log(error.text);
              toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                status: "error",
                duration: 5000,
              });
              setLoading(false);
            });
        }}
      >
        <Form>
          <Stack spacing="10px">
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <InputGroup {...field}>
                    <Input
                      id="name"
                      variant="flushed"
                      placeholder="Name"
                      sx={inputLayout}
                      maxLength={40}
                    />
                    <InputRightElement
                      color="#FFFFFF"
                      children={
                        <Text fontFamily="Gravity" fontWeight="light">
                          {field.value.length}/40
                        </Text>
                      }
                    />
                  </InputGroup>

                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <Input
                    {...field}
                    id="email"
                    variant="flushed"
                    placeholder="Email"
                    sx={inputLayout}
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="subject">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.subject && form.touched.subject}
                >
                  <InputGroup {...field}>
                    <Input
                      id="subject"
                      variant="flushed"
                      placeholder="Subject"
                      sx={inputLayout}
                      maxLength={40}
                    />
                    <InputRightElement
                      color="#FFFFFF"
                      children={
                        <Text fontFamily="Gravity" fontWeight="light">
                          {field.value.length}/40
                        </Text>
                      }
                    />
                  </InputGroup>

                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="message">
              {({ field, form }: any) => (
                <FormControl
                  isInvalid={form.errors.message && form.touched.message}
                >
                  <Textarea
                    {...field}
                    id="message"
                    variant="flushed"
                    placeholder="Message"
                    sx={inputLayout}
                    height="150px"
                    minHeight="150px"
                    maxHeight="300px"
                  />

                  <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button type="submit" sx={buttonStyle} isLoading={loading}>
              SEND ME
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};

export default FormEmail;

let buttonStyle = {
  color: "#FFFFFF",
  background:
    "linear-gradient(to right, #4b6cb7 0%, #4d00ab  51%, #4b6cb7  100%)",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  letterSpacing: "0.2em",
  fontFamily: "Gravity",
  fontWeight: "bold",
  fontSize: "16px",
  _hover: {
    backgroundPosition: "right center",
    color: "#ffffff",
    textDecoration: "none",
  },
  _active: {
    background: "#17141B",
    color: "#ffffff",
  },
};

let formLayout = {
  borderRadius: "0px",
  border: "1px solid",
  borderImage:
    "linear-gradient(45deg,rgba(221, 71, 89, 0.64) 0%,rgba(54, 88, 184, 0.64) 100% ) 1",
  opacity: 0.8,
  width: "450px",
  height: "auto",
  padding: "25px",
};

let inputLayout = {
  color: "#FFFFFF",
  opacity: 0.8,
  letterSpacing: "0.1em",
  fontFamily: "Gravity",
  fontWeight: "light",
  fontSize: "16px",
  _placeholder: {
    color: "#FFFFFF",
    opacity: 0.8,
    letterSpacing: "0.1em",
    fontFamily: "Gravity",
    fontWeight: "light",
    fontSize: "16px",
  },
};

let formLabel = {
  color: "#FFFFFF",
};

// <FormControl onSubmit={(value)=>{
//                 console.log(value)
//             }} >
//                 <FormLabel htmlFor='name'>Name</FormLabel>
//                 <Input type='text' id='name' placeholder='Name' />
//                 <FormHelperText>We'll never share your name.</FormHelperText>
//                 <FormLabel htmlFor='email'>Email</FormLabel>
//                 <Input type='email' id='email' placeholder='Email' />
//                 <FormHelperText>We'll never share your email.</FormHelperText>
//                 <FormLabel htmlFor='Head'>Topic</FormLabel>
//                 <Input type='text' id='Head' placeholder='Topic' />
//                 <FormHelperText>We'll never share your Topic.</FormHelperText>
//                 <FormLabel htmlFor='message'>Message</FormLabel>
//                 <Textarea id='message' placeholder='Message' />
//                 <Button type='submit'>Submit</Button>
//             </FormControl>

// .btn-grad {
//   background-image: linear-gradient(to right, #4b6cb7 0%, #182848  51%, #4b6cb7  100%);"linear-gradient(to right, #DD4759 0%, #3658B8 37%, #DD4759 100%)"
//   margin: 10px;
//   padding: 15px 45px;
//   text-align: center;
//   text-transform: uppercase;
//   transition: 0.5s;
//   background-size: 200% auto;
//   color: white;
//   box-shadow: 0 0 20px #eee;
//   border-radius: 10px;
//   display: block;
// }

// .btn-grad:hover {
//   background-position: right center; /* change the direction of the change here */
//   color: #fff;
//   text-decoration: none;
// }
