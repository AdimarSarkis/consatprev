
const Contato_Section = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[50vh] bg-gray-900">
      
      <div className="relative z-10 p-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Entre em contato com um de nossos especialistas</h2>
        <p className="text-lg mb-8">Estamos disponíveis para ajudá-lo pelo WhatsApp</p>
        <a
          target="_blank"
          href="https://wa.me/13981158016"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Fale conosco no WhatsApp
        </a>
        
      </div>
    </section>
  );
};

export default Contato_Section;