import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import LocationSuggestion from "../components/LocationSuggestion";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";


const UserHome = () => {
  const [trip, setTrip] = useState({
    pickup: "",
    destination: "",
  });
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [lokingForDriverPanel, setLokingForDriverPanel] = useState(false);
  const [waitingForDriverPanel, setWaitingForDriverPanel] = useState(false);

  const panelRef = useRef();
  const closePanelRef = useRef();
  const confirmRideRef = useRef();
  const lokingForDriverRef = useRef();
  const waitingForDriverRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTrip((prev) => ({ ...prev, [name]: value }));
  }

  const submitHandaller = (e) => {
    e.preventDefault();
    console.log(trip);
    setTrip({
      pickup: "",
      destination: "",
    })
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%"
      })
      gsap.to(closePanelRef.current, {
        opacity: 1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%"
      })
      gsap.to(closePanelRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(confirmRideRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [confirmRidePanel])

  useGSAP(() => {
    if (lokingForDriverPanel) {
      gsap.to(lokingForDriverRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(lokingForDriverRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [lokingForDriverPanel])

  useGSAP(() => {
    if (waitingForDriverPanel) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)"
      })
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)"
      })
    }
  }, [waitingForDriverPanel])

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        className="fixed w-16 ml-6 my-6"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber-logo"
      />
      <div className="h-screen w-screen">
        <img
          className="h-screen object-cover"
          src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png" alt="google map" />
      </div>
      <div className="flex flex-col justify-end absolute top-0 h-screen w-full">
        <div className="bg-white h-[30%] relative px-6">
          <MdKeyboardDoubleArrowDown
            className="text-2xl absolute right-5 top-2"
            ref={closePanelRef}
            onClick={() => {
              setPanelOpen(false)
            }} />
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandaller(e)}>
            <div className="line absolute h-16 w-1 top-[28%] left-6 bg-black"></div>
            <input
              type="text"
              placeholder="Add a pick-up location"
              className="bg-[#eee] w-full p-2 mt-2"
              name="pickup"
              value={trip.pickup}
              onChange={(e) => handleInputChange(e)}
              onClick={() => {
                setPanelOpen(true)
              }}
            />
            <input
              type="text"
              placeholder="Enter your destination"
              className="bg-[#eee] w-full p-2 mt-4"
              name="destination"
              value={trip.destination}
              onChange={(e) => handleInputChange(e)}
              onClick={() => {
                setPanelOpen(true)
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-[70%]">
          <LocationSuggestion setVehiclePanel={setVehiclePanel} setPanelOpen={setPanelOpen} />
        </div>
      </div>
      <VehiclePanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      <div ref={confirmRideRef} className="fixed w-full z-10 bottom-0 bg-white p-5 translate-y-full">
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setLokingForDriverPanel={setLokingForDriverPanel} />
      </div>
      <div ref={lokingForDriverRef} className="fixed w-full z-10 bottom-0 bg-white p-5 translate-y-full">
        <LookingForDriver setLokingForDriverPanel={setLokingForDriverPanel} />
      </div>
      <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 bg-white p-5 translate-y-full">
        <WaitingForDriver setWaitingForDriverPanel={setWaitingForDriverPanel} />
      </div>
    </div>
  )
};

export default UserHome;