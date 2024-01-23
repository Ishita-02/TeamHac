export function CreateTeam() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Create Team</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Fill the details to create your team</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="hackathon-name" className="block text-sm font-medium leading-6 text-gray-900">
                Hackathon Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="hackathon-name"
                  id="hackathon-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="team-name" className="block text-sm font-medium leading-6 text-gray-900">
                Team Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="team-name"
                  id="team-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12 col-span-full">    
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            
            <br></br>

            <div className="sm:col-span-3 flex flex-col sm:flex-row">
              <div className="flex-grow sm:mr-6">
                <label htmlFor="modeOfHackathon" className="block text-sm font-medium leading-6 text-gray-900">
                  Mode of Hackathon
                </label>
                <div className="mt-2">
                  <select
                    id="modeOfHackathon"
                    name="modeOfHackathon"
                    autoComplete="modeOfHackathon"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Both</option>
                  </select>
                </div>
              </div>
              <div className="flex-grow sm:mr-2">
                <label htmlFor="githubLink" className="block text-sm font-medium leading-6 text-gray-900">
                  Github Link
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    name="githubLink"
                    id="githubLink"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
                Skills
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="skills"
                  id="skills"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="place" className="block text-sm font-medium leading-6 text-gray-900">
                Place
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="place"
                  id="place"
                  autoComplete="place"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default CreateTeam
