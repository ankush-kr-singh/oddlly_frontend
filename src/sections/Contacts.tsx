import { useState } from "react";
const apiUrl =
  "https://xkitiqxzgyvsg62xfpyanv7qq40cggzd.lambda-url.ap-south-1.on.aws/";
export default function Contacts() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    const data = {
      text: `
        Email : ${email}
        Phone : ${phone}
        Message : ${message}
        `,
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      throw error;
    }
  };
  const handleSubmit = async () => {
    if (!message || !(phone || email)) {
      window.alert("All fields required!");
      return;
    }
    setLoading(true);

    try {
      let res = await sendEmail();
      if (res.ok) {
        const result = await res.json();
        window.alert("Email sent successfully");
        console.log(result);
      } else {
        window.alert("Failed to send email");
        console.error(res.statusText);
      }
    } catch (error) {
      window.alert("Something went wrong!");
    } finally {
      setMessage("");
      setLoading(false);
    }
  };
  return (
    <div
      id="contacts"
      className="h-fit mx-auto text-white bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
      </div>
      <div className="mx-auto max-w-xl mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                disabled={loading}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                disabled={loading}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </div>
    </div>
  );
}
