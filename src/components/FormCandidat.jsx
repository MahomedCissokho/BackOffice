import { Link } from "react-router-dom";

function FormCandidat() {
  return (
    <div>
      <div className="w-full flex items-center justify-center gap-5 mt-10">
        <span className="size-6 rounded-full text-center text-[10px]/6 font-bold bg-blue-600 text-white">
          o
        </span>
        <h1 className="text-[20px] font-bold ">Ajouter un Nouveau Candidat</h1>
      </div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form action="/candidat/infos-sup">
            <div className="mb-5">
              <label
                htmlFor="nce"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Numero Carte Electeur
              </label>
              <input
                type="text"
                name="Numero Carte Electeur"
                id="nce"
                placeholder="Numero Carte Electeur"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <button className="hover:shadow-form w-32 rounded-md bg-[#024ebc]/80 hover:bg-[#024ebc] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              <Link to="/candidat/infos-sup">Verifier</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCandidat;
