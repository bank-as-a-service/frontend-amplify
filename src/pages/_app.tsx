import '@aws-amplify/ui-react/styles.css';
import type { AppProps } from 'next/app'

import {
  ThemeProvider,
} from '@aws-amplify/ui-react';

import { Amplify } from "aws-amplify";
import aws_exports from "@/aws-exports";
Amplify.configure(aws_exports);

export default function App({ Component, pageProps }: AppProps) {
  return  <ThemeProvider><Component {...pageProps} /></ThemeProvider>
}
