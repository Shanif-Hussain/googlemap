import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// import Range from './TextBox/Range';
// import Hidden from './TextBox/Hidden';
import TextBox from '../InputElements/TextBox/TextBox';
// import Password from './TextBox/Password';
// import TextArea from './TextBox/TextArea';
// import CheckBox from './CheckBox/CheckBox';
// import DropDown from './DropDown/DropDown';
// import CKEditor from './TextBox/RichTextBox';
// import Time12 from './DateTimePicker/Time12';
// import Time24 from './DateTimePicker/Time24';
// import CheckList from './CheckBox/CheckList';
// import RadioList from './RadioList/RadioList';
// import AutoComplete from './TextBox/AutoComplete';
// import DatePicker from './DateTimePicker/DatePicker';

export default function DynamicForm(props) {

    let { title, sections } = props.template;

    const renderSections = (sections) => {
        return sections.map((section) => {
            return (
                <fieldset className="form-group">
                    <legend className="col-form-label col-sm-6 pt-0">
                        {section.title}
                    </legend>
                    <div className='row' style={{ marginTop: "12px" }}>
                        {
                            section.fields.map((field) => {
                                return renderFields(field);
                            })
                        }
                    </div>
                </fieldset>
            )
        })
    }

    const renderFields = (field) => {
        switch (field.dataType) {
            case "string":
                return <TextBox
                    register={register}
                    id={field.id}
                    name={field.fieldName}
                    label={field.fieldLabel}
                    subLabel={field.subLabel}
                    validationProps={field.validations}
                    value=""
                    type="text"
                    style={field.style}
                    pretext={field.pretext}
                    posttext={field.posttext}
                    tooltip={field.fieldInfo}
                    fieldInfo={field.fieldInfo}
                    helpblock=""
                    placeholder=""
                    icon=""
                    autoComplete="off"
                    editable={true}
                    errors={errors}
                //onChange={handleChange}
                />
                break;

            default:

        }
    }

    const YupObject = (sections) => {
        let _validationSchema = {};

        sections.map((section) => {
            section.fields.map((field) => {
                _validationSchema = GenerateValidationSchema(field, _validationSchema);
            })
        })
        return Yup.object().shape({ ..._validationSchema });
    }

    const GenerateValidationSchema = (field, _validationSchema) => {
        switch (field.dataType) {
            case "string":
                _validationSchema[field.fieldName] = Yup.string();
                break;

            default:

        }
        if (field?.validations?.required?.value == true) {
            _validationSchema[field.fieldName] = _validationSchema[field.fieldName].required(field?.validations?.required?.message);
        }
        if (field?.validations?.maxLength?.value > 0) {
            _validationSchema[field.fieldName] = _validationSchema[field.fieldName].max(field?.validations?.maxLength?.value, field?.validations?.maxLength?.message);
        }
        if (field?.validations?.minLength?.value > 0) {
            _validationSchema[field.fieldName] = _validationSchema[field.fieldName].min(field?.validations?.maxLength?.value, field?.validations?.minLength?.message);
        }
        if (field?.validations?.email) {
            _validationSchema[field.fieldName] = _validationSchema[field.fieldName].email(field?.validations?.email?.message);
        }
        if (field?.validations?.regex) {
            _validationSchema[field.fieldName] = _validationSchema[field.fieldName].matches(field?.validations?.regex?.value, field?.validations?.regex?.message);
        }

        return _validationSchema;
    }

    const WatchFields = (sections) => {
        let watchFields = [];

        sections.map((section) => {
            section.fields.map((field) => {
                field.watch && watchFields.push(field.fieldName);
            })
        })

        return { watchFields };
    }

    const { register, handleSubmit, watch, formState: { errors }, setError, clearErrors } = useForm({
        resolver: yupResolver(YupObject(sections)),
        mode: "onBlur"
    });
    // register     - is used for managing uncontrolled controls
    // handleSubmit - is used for handling form submission
    // watch        - is used to monitor fields for any change and can used to perform custom validations
    // formState    - is used to set default errors
    // setError     - is used to set custom errors
    // clearErrors  - is used to clear custom errors

    useEffect(() => {
        const subscription = watch(WatchFields(sections));
        return () => subscription.unsubscribe();
    }, [watch]);

    const onSubmit = (values) => { console.log(values); }



    return (
        <form
            noValidate={true}
            onSubmit={handleSubmit(onSubmit)}>
            {
                renderSections(sections)
            }
            <br />
            <button type='submit'>submit</button>
        </form>
    )
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