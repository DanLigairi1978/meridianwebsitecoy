import React from 'react';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const Footer: React.FC = () => {
  // Coordinates for Nabalebale Village, Fiji
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.03350369829!2d179.31383563604313!3d-16.49502919379854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67d8f41640a33a1b%3A0x6d36e2f1d16790b8!2sNabalebale!5e0!3m2!1sen!2sfj!4v1678886400000";

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 border-l-4 border-amber-500 pl-4">Contact Us</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <MailIcon />
                <a href="mailto:dligairi@ydcfiji.org" className="hover:text-amber-400 transition-colors">dligairi@ydcfiji.org</a>
              </li>
              <li className="flex items-center">
                <PhoneIcon />
                <a href="tel:+6797630785" className="hover:text-amber-400 transition-colors">(679) 7630785</a>
              </li>
              <li className="flex items-start">
                <LocationIcon />
                <span>HQ Youth Dream Center (YDC),<br/>Nabalebale Village, Fiji.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl shadow-black/50 border-2 border-gray-700">
            <iframe
              src={mapSrc}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location of Meridian Solutions HQ"
            ></iframe>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Meridian Solutions (Fiji) Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
