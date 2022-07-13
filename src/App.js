import logo from './logo.svg';
import './App.css';
import restaurants from "./data"
import ItemGroup from "./ItemGroup"
import { useState } from 'react';

function App() {
  console.log("restauranst", restaurants)
  const [persons, setPersons] = useState(2)
  const [total, setTotal] = useState(200)
  const [groupVisible, setGroupVisible] = useState(false)

  return (
    <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex justify-center flex-col">
      <div class="sm:text-center lg:text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span class="block xl:inline">Appetite</span>
        </h1>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div class="rounded-md shadow">
            <div>
              <div className="mt-1">
                <input
                  type="text"
                  name="persons"
                  id="persons"
                  className="px-8 mb-4 border py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="1"
                  onChange={(e) => {
                    console.log(e.target.value,
                      "e")
                    setPersons(e.target.value)
                  }}
                />
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="px-8 mb-4 border py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="500"
                  onChange={(e) => {
                    console.log(e.target.value,
                      "e")
                    setTotal(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ItemGroup groups={restaurants} restaurants={restaurants} persons={persons} total={total} />
    </main>
  );
}

export default App;
