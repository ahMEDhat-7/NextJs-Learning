

const About = () => {
  return (
    <section className="container m-auto py-10">
      <h1 className="text-3xl font-bold text-gray-800 p-5">About Lumora</h1>
      <div className="px-5 pb-8 text-gray-700 max-w-2xl mx-auto">
        <p>
          Lumora is a modern platform designed to help users share articles, connect with others, and explore insightful content. Our mission is to empower creativity and knowledge sharing in a welcoming community.
        </p>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>ahMEDhat - Founder</li>
        </ul>
      </div>
      <div className="max-w-2xl mx-auto px-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-2">Have questions or feedback? Reach out via any of the following:</p>
        <ul className="flex flex-col gap-2 text-gray-700">
          <li>
            <span className="font-medium">Email:</span>
            <a href="mailto:ahmed.medhat.saad77@gmail.com" className="text-blue-600 underline ml-2">ahmed.medhat.saad77@gmail.com</a>
          </li>
          <li>
            <span className="font-medium">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/ahmedhat--/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">ahmedhat--</a>
          </li>
          <li>
            <span className="font-medium">GitHub:</span>
            <a href="https://github.com/ahMEDhat-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">ahMEDhat-7</a>
          </li>
          
        </ul>
      </div>
    </section>
  )
}

export default About