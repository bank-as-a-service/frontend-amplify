/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { FundTransfer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FundTransferCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    createdOn: "",
    status: undefined,
    amount: "",
    sourceAccountId: "",
    destinationAccountId: "",
  };
  const [createdOn, setCreatedOn] = React.useState(initialValues.createdOn);
  const [status, setStatus] = React.useState(initialValues.status);
  const [amount, setAmount] = React.useState(initialValues.amount);
  const [sourceAccountId, setSourceAccountId] = React.useState(
    initialValues.sourceAccountId
  );
  const [destinationAccountId, setDestinationAccountId] = React.useState(
    initialValues.destinationAccountId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreatedOn(initialValues.createdOn);
    setStatus(initialValues.status);
    setAmount(initialValues.amount);
    setSourceAccountId(initialValues.sourceAccountId);
    setDestinationAccountId(initialValues.destinationAccountId);
    setErrors({});
  };
  const validations = {
    createdOn: [{ type: "Required" }],
    status: [{ type: "Required" }],
    amount: [{ type: "Required" }],
    sourceAccountId: [{ type: "Required" }],
    destinationAccountId: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          createdOn,
          status,
          amount,
          sourceAccountId,
          destinationAccountId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new FundTransfer(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FundTransferCreateForm")}
      {...rest}
    >
      <TextField
        label="Created on"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={createdOn && convertToLocal(new Date(createdOn))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              createdOn: value,
              status,
              amount,
              sourceAccountId,
              destinationAccountId,
            };
            const result = onChange(modelFields);
            value = result?.createdOn ?? value;
          }
          if (errors.createdOn?.hasError) {
            runValidationTasks("createdOn", value);
          }
          setCreatedOn(value);
        }}
        onBlur={() => runValidationTasks("createdOn", createdOn)}
        errorMessage={errors.createdOn?.errorMessage}
        hasError={errors.createdOn?.hasError}
        {...getOverrideProps(overrides, "createdOn")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdOn,
              status: value,
              amount,
              sourceAccountId,
              destinationAccountId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Success"
          value="SUCCESS"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Failure"
          value="FAILURE"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Amount"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={amount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              createdOn,
              status,
              amount: value,
              sourceAccountId,
              destinationAccountId,
            };
            const result = onChange(modelFields);
            value = result?.amount ?? value;
          }
          if (errors.amount?.hasError) {
            runValidationTasks("amount", value);
          }
          setAmount(value);
        }}
        onBlur={() => runValidationTasks("amount", amount)}
        errorMessage={errors.amount?.errorMessage}
        hasError={errors.amount?.hasError}
        {...getOverrideProps(overrides, "amount")}
      ></TextField>
      <TextField
        label="Source account id"
        isRequired={true}
        isReadOnly={false}
        value={sourceAccountId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdOn,
              status,
              amount,
              sourceAccountId: value,
              destinationAccountId,
            };
            const result = onChange(modelFields);
            value = result?.sourceAccountId ?? value;
          }
          if (errors.sourceAccountId?.hasError) {
            runValidationTasks("sourceAccountId", value);
          }
          setSourceAccountId(value);
        }}
        onBlur={() => runValidationTasks("sourceAccountId", sourceAccountId)}
        errorMessage={errors.sourceAccountId?.errorMessage}
        hasError={errors.sourceAccountId?.hasError}
        {...getOverrideProps(overrides, "sourceAccountId")}
      ></TextField>
      <TextField
        label="Destination account id"
        isRequired={true}
        isReadOnly={false}
        value={destinationAccountId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              createdOn,
              status,
              amount,
              sourceAccountId,
              destinationAccountId: value,
            };
            const result = onChange(modelFields);
            value = result?.destinationAccountId ?? value;
          }
          if (errors.destinationAccountId?.hasError) {
            runValidationTasks("destinationAccountId", value);
          }
          setDestinationAccountId(value);
        }}
        onBlur={() =>
          runValidationTasks("destinationAccountId", destinationAccountId)
        }
        errorMessage={errors.destinationAccountId?.errorMessage}
        hasError={errors.destinationAccountId?.hasError}
        {...getOverrideProps(overrides, "destinationAccountId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
