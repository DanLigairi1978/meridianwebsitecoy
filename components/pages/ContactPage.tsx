import React, { useState } from 'react';
import { db } from '../../services/firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setFeedbackMessage('Please fill in all fields.');
            setStatus('error');
            return;
        }
        setStatus('loading');
        try {
            await addDoc(collection(db, "messages"), {
                name,
                email,
                message,
                submittedAt: serverTimestamp()
            });
            setStatus('success');
            setFeedbackMessage('Thank you! Your message has been sent.');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setFeedbackMessage('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white">Get In Touch</h1>
                    <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">We're here to help. Reach out to us for consultancy or any inquiries.</p>
                    <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
                </div>

                <div className="max-w-2xl mx-auto bg-gray-900 p-8 md:p-12 rounded-lg shadow-2xl shadow-black/40 border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-6">Contact Form</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full bg-gray-800 border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-3 px-8 rounded-md shadow-lg transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                    {status !== 'idle' && feedbackMessage && (
                        <p className={`mt-6 text-center text-lg ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                            {feedbackMessage}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
