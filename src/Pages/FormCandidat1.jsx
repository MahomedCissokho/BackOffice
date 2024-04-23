import { Link } from "react-router-dom";
import Header from "../components/Header";
import Step4 from "../components/Step4";

function FormCandidat1() {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center flex-col">
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <Step4 />

              <form action="/candidat/infos-sup2" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prenom
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    value="Ousmane"
                    disabled={true}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    value="Sonko"
                    disabled={true}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Date Naissance{" "}
                  </label>

                  <input
                    type="text"
                    id="date"
                                    name="madate"
                                    value="28/06/1978"
                                    disabled ={true}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
{/* 
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Mot de Passe{" "}
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>  */}
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    <Link to="/candidat/infos-sup2">Continuer</Link>
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </>
    );
}

export default FormCandidat1;
