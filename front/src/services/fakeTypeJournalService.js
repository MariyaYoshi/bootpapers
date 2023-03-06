export const papertypes = [
  { _id: "6b31ca3eeb7f6fbccd471818", name: "Журнал1" },
  { _id: "6b31ca3eeb7f6fbccd471814", name: "Журнал2" },
  { _id: "6b31ca3eeb7f6fbccd471820", name: "Журнал3" },
  { _id: "6b31ca3eeb7f6fbccd471824", name: "Журнал4" },
  { _id: "6b31ca3eeb7f6fbccd471828", name: "Журнал5" },
  { _id: "6b31ca3eeb7f6fbccd471832", name: "Журнал6" }
];

export function getTypes() {
  return papertypes.filter(g => g);
}

export function getTypeById(id) {
  return papertypes.filter(g => g._id === id);
}
