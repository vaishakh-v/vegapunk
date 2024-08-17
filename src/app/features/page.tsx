import ImageWithFallback from "@/components/ImageWithFallback";

const MoreFeatures = () => {
    return (
        <div className="bg-[#F9FBFC]">
            <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 bg-[#F9FBFC] px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
                <div className="flex flex-col items-start gap-4">
                    <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                        Features
                    </h5>
                    <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
                        Explore the Innovative Features That Make Care2Gather
                        Essential for Mental Health Support
                    </h1>
                    <p className="mb-4 max-w-[485px] text-para">
                        At Care2Gather, we offer a range of cutting-edge
                        features designed to enhance your mental well-being.
                    </p>
                </div>
                <div className="w-[400px] max-w-[586px]">
                    <ImageWithFallback
                        className=""
                        src={"/AboutImg.jpg"}
                        alt="About"
                        aspectRatio={1 / 1}
                    />
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
                <div className="w-[400px] max-w-[586px]">
                    <ImageWithFallback
                        className=""
                        src={"/AboutImg.jpg"}
                        alt="About"
                        aspectRatio={1 / 1}
                    />
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                        AI-Driven Patient Grouping
                    </h5>
                    <p className="mb-4 max-w-[485px] text-para">
                        At Care2Gather, we use advanced AI algorithms to analyze
                        responses from our comprehensive questionnaire. This
                        enables us to group patients based on their mental
                        health needs, ensuring they receive personalized support
                        and connect with others facing similar challenges. Our
                        AI-driven approach guarantees that each patient is
                        matched with the most suitable group for their
                        well-being.
                    </p>
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
                <div className="flex flex-col items-start gap-4">
                    <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                        Personalized Events
                    </h5>
                    <p className="mb-4 max-w-[485px] text-para">
                        Our platform organizes events tailored to the specific
                        needs and interests of different patient groups. These
                        events, held in nearby locations, provide opportunities
                        for patients to meet in person, engage in therapeutic
                        activities, and build a supportive community. By
                        participating in these events, patients can find solace
                        and camaraderie in a safe and welcoming environment.
                    </p>
                </div>
                <div className="w-[400px] max-w-[586px]">
                    <ImageWithFallback
                        className=""
                        src={"/AboutImg.jpg"}
                        alt="About"
                        aspectRatio={1 / 1}
                    />
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
                <div className="w-[400px] max-w-[586px]">
                    <ImageWithFallback
                        className=""
                        src={"/AboutImg.jpg"}
                        alt="About"
                        aspectRatio={1 / 1}
                    />
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                        Doctor Registration and Volunteer Opportunities
                    </h5>
                    <p className="mb-4 max-w-[485px] text-para">
                        Doctors can easily register on our platform, allowing
                        them to view and participate in nearby events. By
                        volunteering their time and expertise, doctors can make
                        a significant impact on the mental health community. Our
                        system ensures that doctors are matched with events that
                        align with their specialties and interests, maximizing
                        the benefits for both doctors and patients.
                    </p>
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
                <div className="flex flex-col items-start gap-4">
                    <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                        Secure and Reliable Platform
                    </h5>
                    <p className="mb-4 max-w-[485px] text-para">
                        We prioritize the security and privacy of our users. Our
                        platform is built with robust security measures to
                        protect sensitive data and ensure a safe user
                        experience. From secure login processes to encrypted
                        data storage, we take every step necessary to maintain
                        the confidentiality and integrity of our user&apos;s
                        information.
                    </p>
                </div>
                <div className="w-[400px] max-w-[586px]">
                    <ImageWithFallback
                        className=""
                        src={"/AboutImg.jpg"}
                        alt="About"
                        aspectRatio={1 / 1}
                    />
                </div>
            </div>

            {/* ---------------------------------------------------------------- */}

            <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
                <div className="w-[400px] max-w-[586px]">
                    <ImageWithFallback
                        className=""
                        src={"/AboutImg.jpg"}
                        alt="About"
                        aspectRatio={1 / 1}
                    />
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
                        User-Friendly Interface
                    </h5>
                    <p className="mb-4 max-w-[485px] text-para">
                        Our intuitive and user-friendly interface ensures that
                        both patients and doctors can navigate the platform with
                        ease. The straightforward design allows users to quickly
                        find the information they need, register for events, and
                        connect with others. Whether you&apos;re a tech-savvy
                        professional or new to digital platforms, our app is
                        designed to be accessible to everyone.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MoreFeatures;
