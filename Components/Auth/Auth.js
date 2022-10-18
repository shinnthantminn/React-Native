import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";

// Formik & yup
import { Formik, Field } from "formik";
import * as yup from "yup";

// navigation
import { useNavigation } from "@react-navigation/native";

//Form
import Form from "../Form/Form";
import Button from "../Ui/Button";
import FlatButton from "../Ui/FlatButton";

const Auth = ({ isSignIn, handleSubmit }) => {
  const nav = useNavigation();

  const signInInitialValue = {
    email: "",
    password: "",
  };

  const signInValidateSchema = yup.object().shape({
    email: yup
      .string()
      .email("That should be valid email")
      .required("That field is required"),
    password: yup.string().required("That field is required!!"),
  });

  const signUpInitialValue = {
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  };

  const signUpValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("That should be valid email")
      .required("That field is required"),
    confirmEmail: yup
      .string()
      .email("That should be valid email")
      .oneOf([yup.ref("email"), null], "Password must match")
      .required("That field is required"),
    password: yup.string().required("That field is required"),
    confirmPassword: yup
      .string()
      .required("That field is required")
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const onSubmit = (values) => {
    handleSubmit(values);
  };

  const handleSwitchComponents = () => {
    if (isSignIn) {
      nav.replace("SignUp");
    } else {
      nav.replace("SignIn");
    }
  };

  return (
    <ScrollView className="flex-1 bg-red-500" alwaysBounceVertical={false}>
      <KeyboardAvoidingView behavior="position" className="flex-1 pt-32 px-10">
        <View className="bg-white p-5 w-full rounded-lg ">
          <Formik
            validationSchema={
              isSignIn ? signInValidateSchema : signUpValidationSchema
            }
            initialValues={isSignIn ? signInInitialValue : signUpInitialValue}
            enableReinitialize={true}
            onSubmit={onSubmit}
          >
            {({ handleSubmit }) => {
              return (
                <>
                  {isSignIn ? (
                    <>
                      <Text className="mb-2">Email Address</Text>
                      <Field
                        name="email"
                        component={Form}
                        placeholder="Enter your email"
                      />
                      <Text className="mt-5 mb-2">Password</Text>
                      <Field
                        name="password"
                        component={Form}
                        placeholder="Password"
                        secureTextEntry={true}
                      />
                    </>
                  ) : (
                    <>
                      <Text className="mb-2">Email Address</Text>
                      <Field
                        name="email"
                        component={Form}
                        placeholder="Enter your email"
                      />
                      <Text className="mt-5 mb-2">Confirm email Address</Text>
                      <Field
                        name="confirmEmail"
                        component={Form}
                        placeholder="Confirm your email"
                      />
                      <Text className="mt-5 mb-2">Password</Text>
                      <Field
                        name="password"
                        component={Form}
                        placeholder="Password"
                        secureTextEntry={true}
                      />
                      <Text className="mt-5 mb-2">Confirm Password</Text>
                      <Field
                        name="confirmPassword"
                        component={Form}
                        placeholder="confirm your Password"
                        secureTextEntry={true}
                      />
                    </>
                  )}
                  <Button style={{ marginVertical: 8 }} onPress={handleSubmit}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                  </Button>
                  <FlatButton onPress={handleSwitchComponents}>
                    {isSignIn ? "Create a new user" : "Sign in your account"}
                  </FlatButton>
                </>
              );
            }}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Auth;
