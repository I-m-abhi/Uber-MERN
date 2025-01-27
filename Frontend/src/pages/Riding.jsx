import { IoLocation } from "react-icons/io5";

const Riding = () => {
  return (
    <div className="h-screen">
      <img
        className="h-1/2 object-cover"
        src="https://images.squarespace-cdn.com/content/v1/54ff63f0e4b0bafce6932642/1613584766993-KD4G7Q9XDVVHE7EFE1JF/Two+Maps+-+Grayscale.png" alt="google map" />
      <div className="flex items-center justify-between p-5">
        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png" alt="Reach destination through" />
        <div>
          <h2 className="text-lg font-medium">Anyone</h2>
          <h4 className="text-xl font-semibold">BR 01 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <IoLocation />
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, Bhopal</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <IoLocation />
          <div>
            <h3 className="text-lg font-medium">$195.56</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
      <button className="w-full my-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
    </div>
  )
};

export default Riding;
