'use client';

import React, {useState} from "react";

const ContactForm = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Validation state
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Success message
    const [success, setSuccess] = useState("");

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors({ ...errors, [id]: "" }); // Clear errors as user types
    };

    // Validation function
    const validate = () => {
        const newErrors = {
            name: "",
            email: "",
            message: "",
        };

        if (!formData.name) {
            newErrors.name = "Name is required.";
        }
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.message) {
            newErrors.message = "Message is required.";
        } else if (formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long.";
        }

        setErrors(newErrors);

        // Check if there are no errors
        return Object.values(newErrors).every((error) => error === "");
    };

    // Handle form submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            // Form is valid
            setSuccess("Your message has been sent!");
            console.log("Form data: ", formData);

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } else {
            setSuccess(""); // Clear success message if errors are present
        }
    };

    return (
        <>
            <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
                <div className="max-w-4xl w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Have any questions? Feel free to reach out and we'll get back to you as soon as possible!
                    </p>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-4 text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300 p-2 rounded-md">
                            {success}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className={`mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-gray-300 dark:border-gray-600"
                                } rounded-md shadow-sm text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className={`mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border ${
                                    errors.email
                                        ? "border-red-500"
                                        : "border-gray-300 dark:border-gray-600"
                                } rounded-md shadow-sm text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Type your message here"
                                className={`mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border ${
                                    errors.message
                                        ? "border-red-500"
                                        : "border-gray-300 dark:border-gray-600"
                                } rounded-md shadow-sm text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500`}
                            />
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;