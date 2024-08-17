import { FaUserDoctor } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

export default async function OnBoardingPage() {
    return (
        <div className="flex min-h-[calc(100svh-110px)] flex-col items-center justify-center">
            <h1 className="font-poppins text-[32px] font-medium tracking-[0.44px] text-secondary">
                Welcome to Care2Gather
            </h1>
            <h1 className="max-w-[485px] font-poppins text-[30px] font-semibold leading-normal text-[#031432]">
                Please select your role
            </h1>
            <div className="mt-14 flex max-w-5xl gap-10">
                <Link
                    className="flex flex-col items-center justify-center rounded-lg p-10 shadow-xl transition-all hover:bg-gray-50 hover:shadow-lg hover:shadow-blue-300"
                    href={"/onBoarding/doctor"}
                >
                    <FaUserDoctor className="text-4xl text-blue-500" />
                    <p className="mt-2 text-2xl font-semibold">Doctor</p>
                    <p className="mt-5 text-center text-sm text-gray-600">
                        Select this option if you are a healthcare professional
                        looking to offer support and volunteer in events.
                    </p>
                </Link>
                <Link
                    className="flex flex-col items-center justify-center rounded-lg p-10 shadow-xl transition-shadow hover:bg-gray-50 hover:shadow-lg hover:shadow-green-300"
                    href={"/onBoarding/patient"}
                >
                    <CgProfile className="text-4xl text-green-500" />
                    <p className="mt-2 text-2xl font-semibold">User</p>
                    <p className="mt-5 text-center text-sm text-gray-600">
                        Select this option if you are seeking mental health
                        support and want to participate in community events.
                    </p>
                </Link>
            </div>
        </div>
    );
}
