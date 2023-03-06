import http from "./httpService";
//import { apiUrl } from "../config.json";

//POPULATING
export function getClassifiersDest() {
  return http.get("http://localhost:3000/api/classifiers/dest");
}
export function getClassifiersPersonType() {
  return http.get("http://localhost:3000/api/classifiers/persontype");
}
export function getClassifiersTdrc() {
  return http.get("http://localhost:3000/api/classifiers/tdrc");
}
export function getClassifiersLists() {
  return http.get("http://localhost:3000/api/classifiers/lists");
}
export function getClassifiersListsTr() {
  return http.get("http://localhost:3000/api/classifiers/liststr");
}

//IMPORTS
export function getClassifiersDestImport() {
  return http.get("http://localhost:3000/api/classifiers/dest/import");
}
export function getClassifiersPersonTypeImport() {
  return http.get("http://localhost:3000/api/classifiers/persontype/import");
}
export function getClassifiersTdrcImport() {
  return http.get("http://localhost:3000/api/classifiers/tdrc/import");
}
export function getClassifiersListsImport() {
  return http.get("http://localhost:3000/api/classifiers/lists/import");
}
export function getClassifiersListsTrImport() {
  return http.get("http://localhost:3000/api/classifiers/liststr/import");
}
