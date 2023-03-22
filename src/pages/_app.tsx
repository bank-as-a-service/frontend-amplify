import '@aws-amplify/ui-react/styles.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Amplify } from "aws-amplify";
import aws_exports from "@/aws-exports";
Amplify.configure(aws_exports);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
