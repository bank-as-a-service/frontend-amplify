/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AccountCreateFormInputValues = {
    owner?: string;
    ownerName?: string;
    name?: string;
    description?: string;
};
export declare type AccountCreateFormValidationValues = {
    owner?: ValidationFunction<string>;
    ownerName?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountCreateFormOverridesProps = {
    AccountCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    ownerName?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountCreateFormProps = React.PropsWithChildren<{
    overrides?: AccountCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onSuccess?: (fields: AccountCreateFormInputValues) => void;
    onError?: (fields: AccountCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountCreateFormInputValues) => AccountCreateFormInputValues;
    onValidate?: AccountCreateFormValidationValues;
} & React.CSSProperties>;
export default function AccountCreateForm(props: AccountCreateFormProps): React.ReactElement;
