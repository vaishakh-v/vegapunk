import React from 'react'

const HowitWorks = () => {
  return (
    <div>
      <div className="pt-10px mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[30px]">
        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            How it works
          </h5>
          <p className="mb-4 max-w-[485px] text-para">
            <span className="text-third">Step 1: Patient Registration</span> To
            begin your journey with Care2Gather, simply register as a patient by
            creating an account. During registration, you'll be asked to fill
            out a comprehensive questionnaire that helps us understand your
            mental health needs and preferences.
            <br />
            <span className="text-third">Step 2: AI-Driven Analysis</span> Once
            you’ve completed the questionnaire, our advanced AI algorithms
            analyze your responses. This analysis helps us identify the most
            suitable group for you based on your mental health profile. The AI
            ensures that each patient is grouped with others facing similar
            challenges, fostering a supportive and understanding environment.
            <br /> <span className="text-third">Step 3: Patient Grouping</span>
            Based on the AI analysis, patients are grouped into specific
            categories. These groups are designed to provide a sense of
            community and shared understanding. Each group is tailored to
            address common concerns and needs, ensuring that you receive
            personalized support. <br />
            <span className="text-third">Step 4: Event Matching</span> Our
            platform then matches you with nearby events that are organized for
            your specific group. These events are designed to provide
            therapeutic activities, opportunities for social interaction, and
            professional support. You can easily view and register for these
            events through the app. <br />
            <span className="text-third">Step 5: Doctor Registration</span>
            Doctors interested in volunteering or providing support can register
            on our platform. The registration process includes creating a
            profile and specifying areas of expertise and interests. This allows
            us to match doctors with events that align with their specialties.
            <br />
            <span className="text-third">
              Step 6: Doctor Participation
            </span>{" "}
            Once registered, doctors can view upcoming events and choose where
            they’d like to volunteer. By participating in these events, doctors
            provide invaluable support and professional guidance to patients.
            Their involvement helps enhance the quality of care and support
            available at each event.
            <br />
            <span className="text-third">
              Step 7: Secure and Confidential Interaction
            </span>
            All interactions on our platform are secure and confidential. We
            prioritize the privacy of our users and ensure that all data is
            protected with advanced security measures. This guarantees a safe
            and trustworthy environment for both patients and doctors.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowitWorks