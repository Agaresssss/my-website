import {
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
  Flex,
  Stack
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const FormEmail = () => {
  const [loading,setLoading] = useState(false)
  const toast = useToast();
  const mailSchema = Yup.object().shape({
    name: Yup.string().required("Required").min(3,"more than 3 characters").max(40,"less than 40 characters"),
    email: Yup.string().email("Invalid email").required("Required"),
    head: Yup.string()
      .required("Required")
      .min(3, "more than 3 characters")
      .max(40, "less than 40 characters"),
    message: Yup.string().required("Required"),
  });

  return (
    <Box sx = {formLayout}>
      <Formik
        initialValues={{ name: "", email: "", head: "", message: "" }}
        validationSchema={mailSchema}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          setLoading(true)
          await setTimeout(() => {
              toast({
                title: "Success",
                description: "I'm received your message.",
                status: "success",
                duration: 5000,
              })
              setLoading(false)
          }, 2000);
        }}
      >
        <Form>
          <Stack spacing='10px' >
          <Field name="name">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name} >
                
                <InputGroup {...field}>
                <Input
                  id="name"
                 variant="flushed"
                  placeholder="Name"
                  sx = {inputLayout}
                    
                  maxLength = {40}
                />
                <InputRightElement  color="#FFFFFF" children={<Text fontFamily= 'Gravity' fontWeight='light'>{field.value.length}/40</Text>} />
                </InputGroup>
                
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.email && form.touched.email}>
                
                <Input
                  {...field}
                  id="email"
                 variant="flushed"
                  placeholder="Email"
                  sx = {inputLayout}
                />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="head">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.head && form.touched.head}>
                
                
                <InputGroup {...field}>
                  <Input
                    
                    id="head"
                   variant="flushed"
                    placeholder="Topic"
                    sx = {inputLayout}
                    maxLength = {40}
                  />
                  <InputRightElement color="#FFFFFF" children={<Text fontFamily= 'Gravity' fontWeight='light'>{field.value.length}/40</Text>} />
                </InputGroup>

                <FormErrorMessage>{form.errors.head}</FormErrorMessage>
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
                  sx = {inputLayout}
                  height='150px'
                  minHeight='150px'
                  maxHeight='300px'
                />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button type="submit" sx= {buttonStyle} isLoading = {loading} >
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
  background : "linear-gradient(to right, #4b6cb7 0%, #4d00ab  51%, #4b6cb7  100%)",
  "text-transform": 'uppercase',
  transition: "0.5s",
  "background-size": "200% auto",
  letterSpacing: "0.2em",
  fontFamily: "Gravity",
  fontWeight: "bold",
  fontSize: "16px",
  _hover: {
    "background-position": "right center",
    color: "#ffffff",
    "text-decoration": "none"
  },
  _active : {
    background : "#17141B",
    color: "#ffffff",
  }
  
}

let formLayout = {
  borderRadius: "8px",
  border : '1px solid #FFFFFF',
  width :"450px",
  height : 'auto',
  padding: '25px'
}

let inputLayout = {
  color : '#FFFFFF',
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
  }
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
