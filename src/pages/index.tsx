
import {HeroLayout2} from "@/ui-components";
import Link from 'next/link';
import {Button} from "@aws-amplify/ui-react";

export default function Home() {
    return <>
        <HeroLayout2></HeroLayout2>
        <Link href="/user">
            <Button>Login</Button>
        </Link>
    </>;
}
