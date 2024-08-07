import React, { useState } from "react";

const dummyQuestions = [
  {
    question: "How often do you feel anxious?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often do you feel tired?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  // Add more dummy questions here
];

const Questions = () => {
  const [showQuestions, setShowQuestions] = useState(false);
  const [selectedTest, setSelectedTest] = useState("");

const renderQuestions = (questions) => (
  <div className="mt-4 rounded-lg bg-white p-5 shadow-lg">
    {questions.map((q, index) => (
      <div key={index} className="mb-4">
        <p className="mb-2 text-lg font-semibold text-gray-700">{q.question}</p>
        <div className="flex flex-wrap gap-2">
          {q.options.map((option, idx) => (
            <div key={idx} className="flex items-center">
              <input
                type="radio"
                id={`${q.question}-${idx}`}
                name={`question-${index}`}
                className="hidden" // Hide the radio button
              />
              <label
                className="cursor-pointer rounded-full bg-gray-100 px-4 py-2 text-gray-600 transition duration-300 hover:bg-blue-500 hover:text-white"
                htmlFor={`${q.question}-${idx}`}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    ))}
    <div className="mt-4 flex gap-4">
      <button
        // onClick={onClickSubmit} // Add your onClick function for submit here
className="bg-gradient-lr flex items-center gap-2 rounded-full px-5 py-3 text-base font-semibold text-white transition hover:-rotate-3"
      >
        Submit
      </button>
      <button
        onClick={() => setShowQuestions(false)}
className="bg-gradient-lr flex items-center gap-2 rounded-full px-5 py-3 text-base font-semibold text-white transition hover:-rotate-3"
      >
        Cancel
      </button>
    </div>
  </div>
);


  const handleButtonClick = (test) => {
    setSelectedTest(test);
    setShowQuestions(true);
  };

  return (
    <div className="pt-18 mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 transition-all duration-500 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[100px]">
      {!showQuestions ? (
        <div className="flex flex-col items-start gap-4">
          <button
            className="mb-4 w-full rounded-lg bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600"
            onClick={() => handleButtonClick("ai")}
          >
            Generate group by AI
          </button>
          <p className="text-gray-600">
            To enter manually, select your mental state from below:
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <button
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
              onClick={() => handleButtonClick("depression")}
            >
              Depression
            </button>
            <button
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
              onClick={() => handleButtonClick("anxiety")}
            >
              Anxiety Test
            </button>
            <button
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
              onClick={() => handleButtonClick("adhd")}
            >
              ADHD Test
            </button>
            <button
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
              onClick={() => handleButtonClick("ptsd")}
            >
              PTSD Test
            </button>
            <button
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
              onClick={() => handleButtonClick("bipolar")}
            >
              Bipolar
            </button>
            <button
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
              onClick={() => handleButtonClick("psychosis")}
            >
              Psychosis & Schizophrenia Test
            </button>
          </div>
        </div>
      ) : (
        <>
          {selectedTest === "ai" && renderQuestions(dummyQuestions)}
          {selectedTest === "depression" &&
            renderQuestions(depressionQuestions)}
          {selectedTest === "anxiety" && renderQuestions(anxietyQuestions)}
          {selectedTest === "adhd" && renderQuestions(adhdQuestions)}
          {selectedTest === "ptsd" && renderQuestions(ptsdQuestions)}
          {selectedTest === "bipolar" && renderQuestions(bipolarQuestions)}
          {selectedTest === "psychosis" && renderQuestions(psychosisQuestions)}
        </>
      )}
    </div>
  );
};

const depressionQuestions = [
  {
    question: "Little interest or pleasure in doing things",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Feeling down, depressed, or hopeless",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Trouble falling or staying asleep, or sleeping too much",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Feeling tired or having little energy",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Poor appetite or overeating",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Trouble concentrating on things, such as reading the newspaper or watching television",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Moving or speaking so slowly that other people could have noticed or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Thoughts that you would be better off dead, or of hurting yourself",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?",
    options: [
      "Not difficult at all",
      "Somewhat difficult",
      "Very difficult",
      "Extremely difficult",
    ],
  },
];


const anxietyQuestions = [
  {
    question: "Feeling nervous, anxious, or on edge",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "Not being able to stop or control worrying",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "Worrying too much about different things",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "Trouble relaxing",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "Being so restless that it is hard to sit still",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "Becoming easily annoyed or irritable",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "Feeling afraid, as if something awful might happen",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
];

const adhdQuestions = [
  {
    question:
      "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have problems remembering appointments or obligations?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you make careless mistakes when you have to work on a boring or difficult project?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you misplace or have difficulty finding things at home or at work?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often are you distracted by activity or noise around you?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often do you feel restless or fidgety?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you find yourself talking too much when you are in social situations?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty waiting your turn in situations when turn taking is required?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often do you interrupt others when they are busy?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
];


const ptsdQuestions = [
  {
    question:
      "In the past month, have you had nightmares about the event(s) or thought about the event(s) when you did not want to?",
    options: ["Yes", "No"],
  },
  {
    question:
      "In the past month, have you tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
    options: ["Yes", "No"],
  },
  {
    question:
      "In the past month, have you been constantly on guard, watchful, or easily startled?",
    options: ["Yes", "No"],
  },
  {
    question:
      "In the past month, have you felt numb or detached from people, activities, or your surroundings?",
    options: ["Yes", "No"],
  },
  {
    question:
      "In the past month, have you felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
    options: ["Yes", "No"],
  },
];


const bipolarQuestions = [
  {
    question:
      "You felt so good or hyper that other people thought you were not your normal self or were so hyper that you got into trouble?",
    options: ["Yes", "No"],
  },
  {
    question:
      "You were so irritable that you shouted at people or started fights or arguments?",
    options: ["Yes", "No"],
  },
  {
    question: "You felt much more self-confident than usual?",
    options: ["Yes", "No"],
  },
  {
    question:
      "You got much less sleep than usual and found you didn’t really miss it?",
    options: ["Yes", "No"],
  },
  {
    question: "You were much more talkative or spoke much faster than usual?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Thoughts raced through your head or you couldn’t slow your mind down?",
    options: ["Yes", "No"],
  },
  {
    question:
      "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
    options: ["Yes", "No"],
  },
  {
    question: "You had much more energy than usual?",
    options: ["Yes", "No"],
  },
  {
    question:
      "You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
    options: ["Yes", "No"],
  },
  {
    question: "You were much more interested in sex than usual?",
    options: ["Yes", "No"],
  },
  {
    question:
      "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
    options: ["Yes", "No"],
  },
  {
    question: "Spending money got you or your family into trouble?",
    options: ["Yes", "No"],
  },
  {
    question:
      "If you checked YES to more than one of the above, have several of these ever happened during the same period of time?",
    options: ["Yes", "No"],
  },
  {
    question: "Did the problem cause any issue?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have any of your blood relatives had manic-depressive illness or bipolar disorder? (Children, siblings, parents, grandparents, aunts, and uncles)",
    options: ["Yes", "No"],
  },
  {
    question:
      "Has a health professional ever told you that you have manic-depressive illness or bipolar disorder?",
    options: ["Yes", "No"],
  },
];


const psychosisQuestions = [
  {
    question:
      "Do familiar surroundings sometimes seem strange, confusing, threatening, or unreal to you?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you heard unusual sounds like banging, clicking, hissing, clapping, or ringing in your ears?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do things that you see appear different from the way they usually do?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you had experiences with telepathy, psychic forces, or fortune telling?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you felt that you are not in control of your own ideas or thoughts?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you have difficulty getting your point across, because you ramble or go off the track a lot when you talk?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you have strong feelings or beliefs about being unusually gifted or talented in some way?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you feel that other people are watching you or talking about you?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you sometimes get strange feelings on or just beneath your skin, like bugs crawling?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you sometimes feel suddenly distracted by distant sounds that you are not normally aware of?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you had the sense that some person or force is around you, although you couldn’t see anyone?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you worry at times that something may be wrong with your mind?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you ever felt that you don't exist, the world does not exist, or that you are dead?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you been confused at times whether something you experienced was real or imaginary?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you hold beliefs that other people would find unusual or bizarre?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you feel that parts of your body have changed in some way, or that parts of your body are working differently?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Are your thoughts sometimes so strong that you can almost hear them?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do you find yourself feeling mistrustful or suspicious of other people?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you seen unusual things like flashes, flames, blinding light, or geometric figures?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Have you seen things that other people can't see or don't seem to see?",
    options: ["Yes", "No"],
  },
  {
    question:
      "Do people sometimes find it hard to understand what you are saying?",
    options: ["Yes", "No"],
  },
];

export default Questions;
