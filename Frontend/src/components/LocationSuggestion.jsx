import { FaLocationArrow } from "react-icons/fa";

const LocationSuggestion = ({setVehiclePanel, setPanelOpen}) => {
  const locations = [
    "24B Near AM Hospital, Patna, Bihar",
    "44A Near Arun jately stadium, Patna, Bihar",
    "24B Near AM Golf park, Patna, Bihar",
  ];

  return (
    <>
      {
        locations.map((elem, id) => {
          return (
            <div
              onClick={()=> {
                setVehiclePanel(true);
                setPanelOpen(false);
              }}
              key={id}
              className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2"
            >
              <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full"><FaLocationArrow />
              </h2>
              <h4 className="font-medium">{elem}</h4>
            </div>
          )
        })
      }
    </>
  )
}

export default LocationSuggestion;
