import {
    Button,
    withAuthenticator,
    WithAuthenticatorProps,
} from '@aws-amplify/ui-react';

import AccountCreateForm from '@/ui-components/AccountCreateForm';
import Link from "next/link";

interface Props extends WithAuthenticatorProps {
    isPassedToWithAuthenticator: boolean;
}

function Home({ isPassedToWithAuthenticator, signOut, user }: Props) {
    if (!isPassedToWithAuthenticator) {
        throw new Error(`isPassedToWithAuthenticator was not provided`);
    }

    return (
        <>
            <Button variation="primary" onClick={signOut}>Logout {user?.attributes?.email}</Button>
            <AccountCreateForm />
            <Link href="/">
                <Button>Home</Button>
            </Link>
        </>
    );
}

export default withAuthenticator(Home);

export async function getStaticProps() {
    return {
        props: {
            isPassedToWithAuthenticator: true,
        },
    };
}

