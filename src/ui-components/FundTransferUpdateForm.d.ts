/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FundTransfer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FundTransferUpdateFormInputValues = {
    createdOn?: string;
    status?: string;
    amount?: number;
    sourceAccountId?: string;
    destinationAccountId?: string;
};
export declare type FundTransferUpdateFormValidationValues = {
    createdOn?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    amount?: ValidationFunction<number>;
    sourceAccountId?: ValidationFunction<string>;
    destinationAccountId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FundTransferUpdateFormOverridesProps = {
    FundTransferUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    createdOn?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    sourceAccountId?: PrimitiveOverrideProps<TextFieldProps>;
    destinationAccountId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FundTransferUpdateFormProps = React.PropsWithChildren<{
    overrides?: FundTransferUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fundTransfer?: FundTransfer;
    onSubmit?: (fields: FundTransferUpdateFormInputValues) => FundTransferUpdateFormInputValues;
    onSuccess?: (fields: FundTransferUpdateFormInputValues) => void;
    onError?: (fields: FundTransferUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FundTransferUpdateFormInputValues) => FundTransferUpdateFormInputValues;
    onValidate?: FundTransferUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FundTransferUpdateForm(props: FundTransferUpdateFormProps): React.ReactElement;
