'use client';

import { useState } from 'react';
import Checkout from '@/components/Checkout';

export default function page() {
  const [bookingRef, setBookingRef] = useState('');
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchBookingByReference = async (reference: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/reference/${reference}`,
      { cache: 'no-store' }
    );

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Booking not found');
    }

    return res.json();
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingRef.trim()) return;

    setLoading(true);
    setError('');
    setBooking(null);

    try {
      const data = await fetchBookingByReference(bookingRef.trim());
      setBooking(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Farm Mechanization Payment
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your booking reference to complete payment
          </p>
        </div>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="bg-white shadow rounded-lg p-6 flex gap-3"
        >
          <input
            value={bookingRef}
            onChange={(e) => setBookingRef(e.target.value.toUpperCase())}
            placeholder="Booking Reference (e.g. BK-2024-001)"
            className="flex-1 border rounded px-4 py-3"
            disabled={loading}
          />
          <button
            disabled={loading || !bookingRef.trim()}
            className="bg-primary text-white px-6 py-3 rounded disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
            {error}
          </div>
        )}

        {/* Booking Details */}
        {booking && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold">
                Booking Details
              </h3>
              <p className="text-sm text-gray-500">
                Reference: {booking.bookingReference}
              </p>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <p><b>Farmer:</b> {booking.farmer?.name}</p>
                <p><b>Farm:</b> {booking.farm?.name}</p>
                <p><b>Service:</b> {booking.serviceType?.name}</p>
                <p><b>Area:</b> {booking.areaHectares} ha</p>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-3xl font-bold text-green-600">
                  ₦{Number(booking.totalCost).toLocaleString()}
                </p>

                {booking.paymentStatus === 'CONFIRMED' && (
                  <span className="inline-block mt-2 text-green-700 text-sm">
                    Payment already confirmed
                  </span>
                )}
              </div>
            </div>

            {/* Checkout */}
            {booking.paymentStatus !== 'CONFIRMED' && (
              <div className="p-6 border-t flex justify-end">
                <Checkout booking={booking} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
