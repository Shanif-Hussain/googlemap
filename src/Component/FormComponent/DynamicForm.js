import React from "react";
import ReactDOM from "react";
import Form from "./FormComponent";

export default function DynamicForm(props) {
  let { sections } = props.template;

  const WatchFields = (sections) => {
    let watchFields = [];

    sections.map((section) => {
      section.fields.map((field) => {
        field.watch && watchFields.push(field.fieldName);
      });
    });

    return watchFields;
  };

  const onSubmit = (values) => {
    //if () {
    console.log(values);
    //}
  };

  const CustomValidate = (watchValues, errorMethods) => {
    let { errors, setError, clearErrors } = errorMethods;
    if (watchValues["AircraftIdentification"] === "Admin") {
      if (!errors["AircraftIdentification"]) {
        setError("AircraftIdentification", {
          type: "manual",
          message: "hehehe",
        });
        return false;
      }
    } else {
      if (
        errors["AircraftIdentification"] &&
        errors["AircraftIdentification"]["type"] === "manual"
      ) {
        clearErrors("AircraftIdentification");
      }
    }
  };

  return (
    <Form
      template={props.template}
      watchFields={WatchFields(sections)}
      validate={CustomValidate}
      onSubmit={onSubmit}
    />
  );
}

//----------------------------------------- [ for password and confirm password ] ------------------------------------------------//
//     password: yup.string().required("password cannot be empty"),
//     confirmPassword: yup
//       .string()
//       .required("confirmation of password is important")
//       .oneOf([yup.ref("password"), null], "password doesn't match"),

//----------------------------------------- [ for checkboxes ] ------------------------------------------------//
//     askRefer: yup.boolean(),
//     acceptTerms: Yup.bool().oneOf(
//         [true],
//         "Accepter les conditions est obligatoire"
//     ),

//----------------------------------------- [ for parent child relation or Dependent Fields ] ------------------------------------------------//
//     askRefer: yup.boolean(),
//     refer: yup.number().when("askRefer", {
//       is: true,
//       then: yup
//         .number()
//         .required("please input refer number")
//         .positive("entry should be greater than 0")
//         .integer("input integer value")
//     })

//----------------------------------------- [ for file upload ] ------------------------------------------------//
//     image: yup
//     .mixed()
//     .test("length", "No file added", (value) => {
//       return value && value.length !== 0;
//     })
//     .test("fileSize", "The file is too large", (value) => {
//       return value && value[0].size <= 2000000;
//     })
//     .test("type", "Not supported type of file", (value) => {
// //       return SUPPORTED_FORMATS.find((format) => {
// //         return value && value[0].type === format;
// //       });
//       return value && value[0].type === "image/jpeg";
//     })

//----------------------------------------- [ for array of fields ] ------------------------------------------------//
//     tickets: Yup.array().of(
//         Yup.object().shape({
//             name: Yup.string()
//                 .required('Name is required'),
//             email: Yup.string()
//                 .email('Email is Invalid')
//                 .required('Email is required')
//         })
//     )

//----------------------------------------- [ Custom error on submit] ------------------------------------------------//
// const CustomValidate = (values) => {
//     if (values["AircraftIdentification"] === "Admin") {
//         if (!errors["AircraftIdentification"]) {
//             setError("AircraftIdentification", {
//                 type: "manual",
//                 message: "hehehe"
//             })
//         }
//     }
//     else {
//         if (errors["AircraftIdentification"] && errors["AircraftIdentification"]["type"] === "manual") {
//             clearErrors("AircraftIdentification");
//         }
//     }
// }
