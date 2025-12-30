import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newUsers = [...allUsers, {
      name,
      imageUrl,
      role,
      description
    }];

    setAllUsers(newUsers);

    setName("");
    setImageUrl("");
    setRole("");
    setDescription("");
  }

  // ✅ YOUR LOGIC (splice)
  function deleteUser(index) {
    const copyUsers = [...allUsers];
    copyUsers.splice(index, 1);
    setAllUsers(copyUsers);
  }

  return (
    <div className="h-screen flex justify-evenly bg-gray-100 p-6">

      {/* LEFT FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-blue-50 rounded-xl p-6 flex flex-col gap-4 shadow"
      >
        <h2 className="text-xl font-semibold text-blue-700">
          Create User
        </h2>

        <input
          className="border p-3 rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          className="border p-3 rounded"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />

        <input
          className="border p-3 rounded"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        />

        <textarea
          className="border p-3 rounded resize-none h-24"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button className="mt-auto bg-blue-600 text-white py-3 rounded">
          Create User
        </button>
      </form>

      {/* RIGHT SIDE – 4 CARDS (2×2) */}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-7">
        {allUsers.slice(0, 4).map((user, index) => (
          <Card
            key={index}
            user={user}
            onDelete={() => deleteUser(index)}
          />
        ))}
      </div>

    </div>
  );
};

export default App;
