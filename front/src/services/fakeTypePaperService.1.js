export const papertypes = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Входящие" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Исходящие" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Внутренние" }
];

export function getTypes() {
  return papertypes.filter(g => g);
}

export function getTypeById(id) {
  return papertypes.filter(g => g._id === id);
}
