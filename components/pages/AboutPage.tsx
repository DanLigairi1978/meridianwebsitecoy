import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; image: string }> = ({ title, children, image }) => (
    <div className="flex flex-col md:flex-row items-center bg-gray-800/50 rounded-lg overflow-hidden shadow-lg border border-gray-700 my-10">
        <img src={image} alt={title} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-amber-500 mb-4">{title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">{children}</p>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <div className="py-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-white">About Meridian Solutions</h1>
                    <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Bridging traditional wisdom with modern commerce for a brighter future.</p>
                    <div className="mt-4 w-24 h-1 bg-amber-500 mx-auto rounded"></div>
                </div>

                <InfoCard 
                    title="Our Mission" 
                    image="https://images.unsplash.com/photo-1616424365738-9cb5b7019782?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                >
                    To empower Community Based Tourism (CBT) and rural projects by providing the high-quality online presence and management tools they often lack.
                </InfoCard>

                <InfoCard 
                    title="Our Vision" 
                    image="https://images.unsplash.com/photo-1595624216386-4330895a0921?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                >
                    Acting as a digital bridge that connects traditional Fijian wisdom with modern commerce to facilitate economic growth within local villages.
                </InfoCard>

                <InfoCard 
                    title="Our Ethos" 
                    image="https://images.unsplash.com/photo-1579483324542-a73a9b9597a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                >
                    Operating in good faith to contribute our skills and resources toward the success of local entrepreneurs, fostering a sustainable and prosperous community.
                </InfoCard>

            </div>
        </div>
    );
};

export default AboutPage;