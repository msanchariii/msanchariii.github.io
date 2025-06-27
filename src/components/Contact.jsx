"use client";
import React, { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "ee67cb6c-b3c6-4714-9f03-d14e20264a64");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("✅ Thank you! I’ll get back to you soon.");
            event.target.reset();
        } else {
            console.error("Error", data);
            setResult(`❌ ${data.message}`);
        }
    };

    return (
        <section className="" id="contact">
            <h2>Get In Touch</h2>

            {/* <p className="mb-10 text-gray-400">
                I’m always open to chatting about new projects, collaborations,
                or just sharing ideas!
            </p> */}

            <div className="flex gap-4 lg:gap-6 xl:gap-8">
                <div className="basis-2/5 lg:basis-2/5">
                    <h3 className="font-modern-negra mb-2 text-2xl font-bold">
                        Let’s Build Something Together
                    </h3>
                    <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                        Whether you’re looking for a developer to collaborate
                        with, want to discuss an idea, or just want to say hi —
                        I’m always up for a good tech conversation.
                    </p>
                    <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                        Open to internships, freelance work, and exciting side
                        projects.
                    </p>
                    <h3 className="font-modern-negra mb-2 text-2xl font-bold">
                        Say Hello
                    </h3>
                    <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                        Drop a Email or connect with me on social media.
                    </p>
                </div>

                <form
                    onSubmit={onSubmit}
                    className="flex flex-col lg:basis-3/5"
                >
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        rows="4"
                        autoComplete="off"
                        className="input"
                    ></textarea>

                    <button type="submit">Send Message →</button>
                    <p>{result}</p>
                </form>
            </div>
        </section>
    );
}

const Input = ({ type, name, placeholder, required }) => (
    <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        className="input"
        // className="w-full rounded-lg border px-4 py-3 text-white placeholder-gray-400 transition focus:ring-2 focus:ring-red-400 focus:outline-hidden dark:focus:ring-red-900"
    />
);
