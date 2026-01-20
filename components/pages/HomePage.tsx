import React from 'react';
import { NavLink } from 'react-router-dom';

// Fix: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error.
const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300 border border-gray-700">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-500 text-white mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

const HomePage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548000392-T390f1a450e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                ></div>
                <div className="absolute inset-0 bg-brand-dark/70"></div>
                <div className="relative z-10 p-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
                        Empowering Rural <span className="text-amber-500">Innovation</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 mb-8 drop-shadow-md">
                        Your dedicated partner in technology and financial expertise for community-based entrepreneurs in Fiji.
                    </p>
                    <NavLink 
                        to="/about"
                        className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg py-3 px-8 rounded-md shadow-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        Learn More
                    </NavLink>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white">Our Core Services</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We provide the essential tools for rural enterprises to thrive in the digital age.</p>
                        <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <ServiceCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                            title="Technical Support"
                            description="Providing IT and digital solutions for local eco-tour operators and grassroots projects."
                        />
                        <ServiceCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                            title="Financial Management"
                            description="Delivering professional financial services to ensure the sustainability of rural enterprises."
                        />
                        <ServiceCard
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                            title="Business Solutions"
                            description="Tailored consultancy for community-based startups to overcome operational 'stumbling blocks'."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;