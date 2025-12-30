import React from "react";

const Card = ({ user, onDelete }) => {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">

      {/* IMAGE */}
      <img
        src={user.imageUrl}
        alt={user.name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />

      {/* NAME */}
      <h3 className="text-2xl font-semibold text-gray-800">
        {user.name}
      </h3>

      {/* ROLE */}
      <p className="text-sm text-blue-600 font-medium mt-1">
        {user.role}
      </p>

      {/* DESCRIPTION */}
      <p className="text-xs text-gray-600 mt-3 leading-relaxed">
        {user.description}
      </p>

      {/* DELETE BUTTON */}
      <button
        onClick={onDelete}
        className="mt-5 bg-red-500 text-white px-6 py-2 rounded-lg
                   active:scale-90 transition-transform"
      >
        Delete
      </button>

    </div>
  );
};

export default Card;
