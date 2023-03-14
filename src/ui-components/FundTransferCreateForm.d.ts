/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FundTransferCreateFormInputValues = {
    createdOn?: string;
    status?: string;
    amount?: number;
    sourceAccountId?: string;
    destinationAccountId?: string;
};
export declare type FundTransferCreateFormValidationValues = {
    createdOn?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    sourceAccountId?: ValidationFunction<string>;
    destinationAccountId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FundTransferCreateFormOverridesProps = {
    FundTransferCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    sourceAccountId?: PrimitiveOverrideProps<TextFieldProps>;
    destinationAccountId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FundTransferCreateFormProps = React.PropsWithChildren<{
    overrides?: FundTransferCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FundTransferCreateFormInputValues) => FundTransferCreateFormInputValues;
    onSuccess?: (fields: FundTransferCreateFormInputValues) => void;
    onError?: (fields: FundTransferCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FundTransferCreateFormInputValues) => FundTransferCreateFormInputValues;
    onValidate?: FundTransferCreateFormValidationValues;
} & React.CSSProperties>;
export default function FundTransferCreateForm(props: FundTransferCreateFormProps): React.ReactElement;
