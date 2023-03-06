import http from "./httpService";
//import { apiUrl } from "../config.json";

//POPULATING
export function getJournalsMesOutS() {
  return http.get("http://localhost:3000/api/journals/mes-out-s");
}
export function getJournalsMesOutNs() {
  return http.get("http://localhost:3000/api/journals/mes-out-ns");
}
export function getJournalsMesInS() {
  return http.get("http://localhost:3000/api/journals/mes-in-s");
}
export function getJournalsMesInNs() {
  return http.get("http://localhost:3000/api/journals/mes-in-ns");
}
export function getJournalsRecipient() {
  return http.get("http://localhost:3000/api/journals/recipient");
}

//IMPORTS
export function getJournalsMesOutImport() {
  return http.get("http://localhost:3000/api/journals/mes-out/import");
}
export function getJournalsRecipientImport() {
  return http.get("http://localhost:3000/api/journals/recipient/import");
}
export function getJournalsMesInImport() {
  return http.get("http://localhost:3000/api/journals/mes-in/import");
}
