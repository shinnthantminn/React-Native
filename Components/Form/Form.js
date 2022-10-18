import { TextInput, Text } from "react-native";

const Form = ({
  field: { name, onBlur, onChange, value },
  form: { errors, touched, setFieldTouched },
  ...inputProps
}) => {
  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        className={`border border-black rounded p-2 ${
          hasError && "bg-red-100"
        }`}
        {...inputProps}
      />
      {hasError && <Text className="text-red-700">{errors[name]}</Text>}
    </>
  );
};

export default Form;
