import Image from "next/image";

const Page6 = ({ identifiantWp, motDePasseWp }) => {
  return (
    <div className="PdfPage-fixed w-full h-full relative">
      <Image
        src="/backgrounds/page5.png"
        alt="Background page 5"
        fill
        style={{ objectFit: "cover" }}
        className="absolute inset-0 z-0"
        priority
      />
      
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
      
      <h4 className="absolute top-24 left-20 text-white text-7xl font-bold leading-tight z-20" style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        Votre interface d&apos;administration
      </h4>
      
      <p className="absolute top-52 left-16 right-16 text-white text-3xl font-medium leading-relaxed z-20" style={{
        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
      }}>
        Vous arriverez ensuite sur une page spécifique sur laquelle, vous
        seront demandés votre nom d&apos;utilisateur et votre mot de passe. Vos
        identifiants (mis en place à la création de votre site internet)
        sont les suivants :
      </p>
      
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] bg-white bg-opacity-98 p-12 rounded-3xl z-20" style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
      }}>
        <div className="space-y-8">
          <div className="w-full">
            <label className="block text-gray-700 text-4xl font-bold mb-4">
              Identifiant ou adresse e-mail
            </label>
            <div className="w-full px-8 py-6 text-4xl font-semibold bg-white border-4 border-gray-300 rounded-xl text-gray-800 min-h-[72px] flex items-center">
              {identifiantWp || "Votre identifiant WordPress"}
            </div>
          </div>
          
          <div className="w-full">
            <label className="block text-gray-700 text-4xl font-bold mb-4">
              Mot de passe
            </label>
            <div className="w-full px-8 py-6 text-4xl font-semibold bg-white border-4 border-gray-300 rounded-xl text-gray-800 min-h-[72px] flex items-center">
              {motDePasseWp || "Votre mot de passe WordPress"}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-600 border-2 border-gray-300 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <label className="text-gray-700 text-3xl font-semibold">
              Se souvenir de moi
            </label>
          </div>
          
          <button
            type="button"
            className="w-full bg-green-500 text-white text-4xl font-bold py-8 px-12 rounded-xl"
          >
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page6;
