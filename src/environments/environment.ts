import { firebaseConfig } from './firebase-config';

export const environment = {
  production: false,
  googleMapsApiKey: process.env['GOOGLE_MAPS_API_KEY'],
  firebaseConfig: firebaseConfig,
};
