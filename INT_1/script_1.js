const obj = {
  id: 101,
  name: "John",
  address: {
    city: "mumbai",
  },
};

// --------> Ans <---

// Target the 'id' property and lock it
Object.defineProperty(obj, "id", {
  writable: false,
  configurable: false,
});

// --- TESTING ---
obj.id = 202; // Fails (silently in non-strict, error in strict mode)
obj.name = "Rahul"; // Works!
obj.address.city = "Delhi"; // Works!

// ------------------------------------------------------------------------------------
