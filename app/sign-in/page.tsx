import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function signinpage(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center ">
            <div>
                <SignIn />
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}