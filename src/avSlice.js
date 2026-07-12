import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://pixabay.com/photos/projector-video-projector-7023604/",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/multimedia-speaker-pc-speaker-music-870749/",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/microphone-music-audio-recording-861457/",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/sign-blank-interior-presentation-10363743/",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/photos/building-ceiling-signage-sign-2596951/",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  reducers: {
    incrementAvQuantity: (state, action) => {},
    decrementAvQuantity: (state, action) => {},
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
