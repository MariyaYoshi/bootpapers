export function fakegetClassifiers() {
  return classifiers;
}

export function getClassifier(id) {
  return classifiers.find(m => m._id === id);
}
