import { Link } from "react-router-dom";

function FormCandidat2() {
  return (
    <div>
      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-5xl">
          <form action="/accueil" className="mt-2 grid grid-cols-6 gap-6">
            <div className="col-span-8">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Email{" "}
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-8">
              <label
                htmlFor="parti"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Parti Politique{" "}
              </label>

              <input
                type="text"
                id="parti"
                name="nomparti"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-8">
              <label
                htmlFor="slogan"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Slogan{" "}
              </label>

              <input
                type="text"
                id="parti"
                name="slogan"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-8">
              <label
                htmlFor="Telephone"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Telephone{" "}
              </label>

              <input
                type="tel"
                id="Telephone"
                name="numtel"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-8">
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Photo{" "}
              </label>

              <input
                type="file"
                id="file"
                name="photo"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>

            <div className="col-span-8">
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                URL{" "}
              </label>

              <input
                type="text"
                id="url"
                name="url"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                <Link to="/candidat">Valider</Link>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default FormCandidat2;
