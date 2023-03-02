import React from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

const MyTicket = ({ ticket }) => {
  // function to show only the particular selected ticket in the modal

  const [show, setShow] = React.useState(false);
  const [selectedTicket, setSelectedTicket] = React.useState(null);

  const handleShow = (ticket) => {
    setShow(true);
    setSelectedTicket(ticket);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="py-3 border-2 border-slate-700 rounded-xl m-5 custom-gray shadow-2xl">
      {/* Generate a random qr code here */}
      <div className="flex justify-center py-5 items-center">
        <div className="relative w-36 h-36 rounded-full">
          <QRCode value={ticket.razorpay_order_id} className="rounded-md" style={{ height: "auto", maxWidth: "100%", width: "100%" }} />
          {/* <Image
            src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
            layout="fill"
            objectFit="cover"
            className="rounded-md "
            alt="profile"
          /> */}
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center"> */}
      <h4 className="text-xl text-gray-400 font-semibold mx-5 mt-2">
        {ticket.match?.title}
      </h4>
      <h2 className="text-xl text-white font-semibold mx-5 mt-2">
        {ticket.match?.home_team} vs {ticket.match?.away_team}
      </h2>
      <hr className="m-2"></hr>
      {/* </div> */}
      <div className=" w-full mx-5" />
      <div className="grid grid-cols-2 px-5 text-custom-gray mb-2">
        <div className="flex flex-col mb-2">
          <h3 className="font-Poppins text-custom-white text-lg">Date</h3>
          <p>{ticket.match?.date}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-Poppins text-custom-white text-lg">Time</h3>
          <p>{ticket.match?.time}</p>
        </div>
        <div className="flex flex-col mb-2">
          <h3 className="font-Poppins text-custom-white text-lg">Venue</h3>
          <p>{ticket.match?.venue}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-Poppins text-custom-white text-lg">Stand</h3>
          <p>Pavilion</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-Poppins text-custom-white text-lg">
            Tickets No.
          </h3>
          <p>{ticket.no_of_tickets}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-Poppins text-custom-white text-lg">
            Tokens added
          </h3>
          <p>{ticket.amount}</p>
        </div>
      </div>
      {/* Put a bottom border here */}
      {/* div to display prize of the ticket */}

      <button
        className="bg-white text-black mx-5 font-semibold py-2 px-4 rounded-md mt-2 mb-1"
        onClick={() => handleShow(ticket)}
      >
        View Ticket
      </button>
      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="custom-gray w-3/4 h-3/4 rounded-xl relative">
            <div className="flex absolute justify-end right-0">
              <button
                onClick={handleClose}
                className="bg-white rounded-full p-2 m-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-2 mx-10 justify-center align-middle h-full">
              <div className="relative w-96 h-[80%] self-center rounded-full align-middle py-10 ">
                <QRCode value={ticket.razorpay_order_id} className="rounded-md" style={{ height: "auto", maxWidth: "100%", width: "100%" }} />

                {/* <Image
                  src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M="
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md "
                  alt="profile"
                /> */}
              </div>
              <div className="flex flex-col justify-center ">
                <h4 className="text-4xl text-gray-400 font-bold mb-10 mx-auto">
                  {selectedTicket.match?.title}
                </h4>
                <div className="flex justify-between">
                  <div className="relative w-32 h-[80%] self-center rounded-full align-middle py-10 ">
                    <Image
                      src={selectedTicket.match?.home_team_logo}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md "
                      alt="profile"
                    />
                  </div>
                  <div className="relative w-32 h-[80%] self-center rounded-full align-middle py-10 ">
                    <Image
                      src={selectedTicket.match?.away_team_logo}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md "
                      alt="profile"
                    />
                  </div>
                </div>
                <h2 className="text-xl text-white font-semibold mt-6 mb-4 mx-auto">
                  {selectedTicket.match?.home_team} vs{" "}
                  {selectedTicket.match?.away_team}
                </h2>
                <hr className=""></hr>
                <div className="flex justify-between">
                  <h2 className="text-xl text-white font-semibold mt-2">
                    Date
                  </h2>
                  <h2 className="text-xl text-white font-semibold mt-2">
                    {selectedTicket.match?.date}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-xl text-white font-semibold mt-2">
                    Time
                  </h2>
                  <h2 className="text-xl text-white font-semibold mt-2">
                    {selectedTicket.match?.time}
                  </h2>
                </div>
                <div className="flex justify-between">
                  <h2 className="text-xl text-white font-semibold mt-2">
                    Venue
                  </h2>
                  <h2 className="text-xl text-white font-semibold mt-2">
                    {selectedTicket.match?.venue}
                  </h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default MyTicket;
