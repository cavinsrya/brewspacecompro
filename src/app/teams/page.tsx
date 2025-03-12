export default function Teams() {
  const teamMembers = [
    {
      name: "Sabrina Anggraini",
      role: "Founder",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1349417325245370491/f5867cccdad8da28cc791b9b480306f1.png?ex=67d30651&is=67d1b4d1&hm=bc786c7df562d19ca5b7722a6cf7fdec5b153be7507803ee451da1d8597775f4&",
    },
    {
      name: "Laura Theodora",
      role: "Co-Founder",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1349417323487952990/091c9f2741908ab28d38d3b3013aed83.png?ex=67d30650&is=67d1b4d0&hm=5445701ae0ed2e99dacc92d2681e7aec3d94be00d0c783b12761c7d508c916a5&",
    },
    {
      name: "Dwiki Bayu",
      role: "Co-Founder",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1349417324335337574/a0e46c5e108c6bada03e04fe5a941b15.png?ex=67d30651&is=67d1b4d1&hm=075279431beda656b431ab540feadf93a8166ec4886815e17105219cc3c68e98&",
    },
    {
      name: "Baskara",
      role: "Chief Operations",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1349417324926468238/dfa67fc95c387229c6dd274e5ce6b3fa.png?ex=67d30651&is=67d1b4d1&hm=06c71efaa4ae8825bb01ece9822ff6d38f337794aa2de3f1457a43dfde6dcf86&",
    },
    {
      name: "Mikail Axel",
      role: "Chief Innovation",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1349417323882221589/7692d9de2dd2117b91de9ff2fcc27bb8.png?ex=67d30650&is=67d1b4d0&hm=3de968e8534ccac62d9b857f5c7cd18d0a2792ec1798fbded74a125f37139025&",
    },
    {
      name: "Tristan Julian",
      role: "Barista Expert",
      image:
        "https://cdn.discordapp.com/attachments/1348912502720958494/1349424309348597932/7692d9de2dd2117b91de9ff2fcc27bb8.png?ex=67d30cd2&is=67d1bb52&hm=aacd8137e3ea38385da0f84150ee8186a4e000b87b7635ca321d54e537f701d9&",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-10">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Meet the talented team <br /> who make all this happen
        </h1>
        <p className="text-gray-600 max-w-md text-sm mt-4 md:mt-0">
          Our philosophy is simple: hire great people and give them the
          resources and support to do their best work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-64 h-80">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mt-2 text-black">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
