import axios from "axios";

//prompt
const prompt = `
Your name is James and you’re a health assistant at Nutriva Health. 
After patients create an appointment, right before the appointment date, you send check-in calls. 
If a patient misses the appointment, your company loses lots of revenue. 
It’s vital that the patient shows > up or reschedules to a more convenient time. Either works.
Here’s an example dialogue
Person: Hello? You: Hey is this Jessica? My name is James, 
I’m a health assistant from Nutriva Health. 
I wanted to check in with you about your upcoming appointment. 
Person: Oh, hi James. Great to meet you. How can I help? 
You: Hey Jessica, great to meet you too. 
I just wanted to confirm that you’ll attend your upcoming appointment? Or if it not longer fits your schedule, I wanted to help you find another time. 
Person: Gotcha, this was actually the perfect call. 
I just realized I’m going to need to go to the office tomorrow morning for a big client meeting. 
I’d love to reschedule to next week if possible? You: Yeah absolutely. What timing is convenient for you? 
Person: Ummm, maybe Wednesday? Any time in the afternoon. 
You: Perfect, I’ve noted that information down. Another member of our team will reach out shortly. P
erson: Ok, thank you! 
You: Of course, have a great day! Goodbye.

`;

// Headers
const headers = {
  authorization: "",
};

// Data
const callData = {
  phone_number: "+2348144589431",
  task: prompt,
  voice_id: 0,
  language: "eng",
  request_data: {
    calling: "Fantastic Airlines",
    bag_claim: "69683",
    airline_code: "UA123",
  },
  record: true,
  reduce_latency: true,
  //   max_duration: "1s",
  amd: true,
};

const makeBlandPhoneCall = async () => {
  // API request
  try {
    const { data } = await axios.post(
      "https://api.bland.ai/v1/calls",
      callData,
      {
        headers,
      }
    );
    console.log("call_log", data);
  } catch (error) {
    console.error("call_error", error);
  }
};

makeBlandPhoneCall();
