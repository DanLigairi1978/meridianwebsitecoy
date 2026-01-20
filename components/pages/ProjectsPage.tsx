import React from 'react';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const ProjectCard: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  purpose?: string;
  image: string;
  reverse?: boolean;
}> = ({ title, subtitle, description, features, purpose, image, reverse = false }) => (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} bg-gray-900 rounded-xl overflow-hidden shadow-2xl shadow-black/40 my-16 border border-gray-800`}>
        <div className="md:w-1/2">
            <img src={image} alt={title} className="w-full h-full object-cover min-h-[300px]" />
        </div>
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-sm font-bold uppercase text-amber-500 tracking-widest">{subtitle}</h3>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">{title}</h2>
            <p className="text-gray-400 mb-6 text-lg">{description}</p>
            <h4 className="font-semibold text-white text-xl mb-4">Key Features:</h4>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
            {purpose && (
                 <div className="mt-6 bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-white text-lg mb-2">Purpose:</h4>
                    <p className="text-gray-400">{purpose}</p>
                 </div>
            )}
        </div>
    </div>
);


const ProjectsPage: React.FC = () => {
    return (
        <div className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white">The Innovation Hub</h1>
                    <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Showcasing our flagship projects designed to drive growth and preserve culture.</p>
                     <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
                </div>

                <ProjectCard
                    title="Vualiku XP"
                    subtitle="Authentic Tourism Gateway"
                    description="A modern directory and booking gateway for authentic tourism in Vanua Levu."
                    features={[
                        "Friction-less booking platform",
                        "Basket-style ordering system",
                        "Dynamic pricing capabilities"
                    ]}
                    purpose="To showcase culturally-rich, eco-friendly tours like the Waisali Nature Experience and Baleyaga Trail."
                    image="https://images.unsplash.com/photo-1627938031589-5f8a2c27079b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <ProjectCard
                    title="VOLAU"
                    subtitle="The Digital Compass"
                    description="A first-of-its-kind digital platform that translates traditional Fijian lunar knowledge into AI-powered tools for the 21st century."
                    features={[
                        "Almanac Calendar based on the 12-month Fijian lunar cycle.",
                        "AI Farm & Tour Planner powered by Google's Gemini AI.",
                        "Marine Safety integrating live weather and wind data."
                    ]}
                    image="https://images.unsplash.com/photo-1528823793742-c1bf5a22830f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    reverse={true}
                />
            </div>
        </div>
    );
};

export default ProjectsPage;