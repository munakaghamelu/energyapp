// this file contains type definitions for data
// describes the shape of the data and what data type each property should accept
export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
}

export type Form = {
  id: string; // will be created on the database
  user_id: string; // needs to be passed from authentication token
  positive: '1' | '2' | '3' | '4' | '5';
  good: '1' | '2' | '3' | '4' | '5';
  pleasant: '1' | '2' | '3' | '4' | '5';
  happy: '1' | '2' | '3' | '4' | '5';
  joyful: '1' | '2' | '3' | '4' | '5';
  contented: '1' | '2' | '3' | '4' | '5';
  negative: '1' | '2' | '3' | '4' | '5';
  bad: '1' | '2' | '3' | '4' | '5';
  unpleasant: '1' | '2' | '3' | '4' | '5';
  sad: '1' | '2' | '3' | '4' | '5';
  afraid: '1' | '2' | '3' | '4' | '5';
  angry: '1' | '2' | '3' | '4' | '5';
}