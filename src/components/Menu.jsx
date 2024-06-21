import { useState, useEffect } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu() {
  const [selected, setSelected] = useState(null);
  const [clients, setClients] = useState([]);
  const placeholder = "Select client";

  const handleButtonClick = async () => {
    try {
      const data = await loader();
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  const loader = async () => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch("http://127.0.0.1:8000/company/clients", {
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Could not fetch clients.");
    }

    const responseData = await response.json(); // Parse JSON response
    return responseData.clients; // Return parsed JSON data
  };

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Label className="block text-background mt-3 font-title font-bold">
            Client:
          </Label>
          <div className="relative mt-2">
            <ListboxButton
              className="relative cursor-default bg-white pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none form-input mt-1 block w-full border border-background rounded-lg py-1.5 shadow-sm focus:ring-2 focus:ring-inset focus:ring-pistach sm:text-sm sm:leading-6"
              onClick={handleButtonClick}
            >
              <span className="flex items-center">
                {selected && selected.avatar && (
                  <img
                    src={selected.avatar}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                )}
                <span className="ml-3 block truncate">
                  {selected ? selected.name : placeholder}
                </span>
              </span>
            </ListboxButton>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {clients.map((client) => (
                  <ListboxOption
                    key={client.id}
                    className={({ focus }) =>
                      classNames(
                        focus ? "bg-pistach text-white" : "",
                        !focus ? "text-gray-900" : "",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={client}
                  >
                    {({ selected, focus }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={client.image}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {client.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              focus ? "text-white" : "text-pistach",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
