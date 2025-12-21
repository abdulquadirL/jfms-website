"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function Checkout({ booking }: { booking: any }) {

  const [paymentEmail, setPaymentEmail] = React.useState(booking.paymentEmail || booking.farmer?.email || "");
  const [paymentPhone, setPaymentPhone] = React.useState(booking.paymentPhone || booking.farmer?.phone || "");
  const config = useMemo(
    () => ({
      public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY!,
      tx_ref: booking.bookingReference,
      amount: Number(booking.totalCost),
      currency: "NGN",
      payment_options: "card,banktransfer,ussd",
      customer: {
        email:paymentEmail,
        phone_number: paymentPhone,
        name: booking.farmer?.name,
      },
      customizations: {
        title: "Farm Mechanization Payment",
        description: booking.serviceType?.name,
      },
    }),
    [booking]
  );

  const handleFlutterPayment = useFlutterwave(config as any);

  const payNow = () => {
    if(paymentEmail.trim() === "" || paymentPhone.trim() === "") {
      alert("Please provide both email and phone number for payment.");
      return;
    } 

    console.log("Payment config:", config);
    console.log("Starting payment for booking:", booking.bookingReference);
    handleFlutterPayment({
      callback: async (response) => {
        if (response.status === "successful") {
          await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/${booking.bookingReference}/confirm-payment` +
              `?paymentReference=${response.transaction_id}` +
              `&paymentEmail=${config.customer.email}` +
              `&paymentPhone=${config.customer.phone_number}`,
            { method: "PATCH" }
          );
        }
        closePaymentModal();
      },
      onClose: () => {},
    });
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 m-5">
        <div className="space-y-2">
          <Label htmlFor="paymentEmail">Email</Label>
          <Input
            id="paymentEmail"
            value={paymentEmail}
            onChange={(e) => setPaymentEmail(e.target.value)}
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="paymentPhone">Phone Number</Label>
          <Input
            id="paymentPhone"
            value={paymentPhone}
            onChange={(e) => setPaymentPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <button
        onClick={payNow}
        className="bg-green-600 text-white px-8 py-3 rounded text-lg"
      >
        Pay ₦{Number(booking.totalCost).toLocaleString()}
      </button>
    </>
  );
}
