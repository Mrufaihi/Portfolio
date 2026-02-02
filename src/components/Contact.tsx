const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Contact<span className="text-accent">.</span>
        </h2>

        <div className="bg-primary border border-white/10 rounded-lg p-8 md:p-12">
          <p className="text-lg text-[#F5F5F5] mb-6 leading-relaxed">
            Shoot me an email if you want to connect! You can also find me on{' '}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent-light transition-colors"
            >
              Linkedin
            </a>{' '}
            or{' '}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-accent-light transition-colors"
            >
              Twitter
            </a>{' '}
            if that's more your speed.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a
              href="mailto:ahmed.hazmi24@gmail.com"
              className="text-xl text-white hover:text-accent transition-colors"
            >
              ahmed.hazmi24@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
