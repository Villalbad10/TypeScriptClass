interface AudioPlayer {
  audioVolume: number
  songDuration: number
  song: string
  details: Details
}

interface Details {
  author: string,
  year: number
}

const audioPlayer: AudioPlayer = {
  audioVolume: 80,
  songDuration: 27,
  song: "Buenas",
  details: {
    author: "Villa",
    year: 2045
  }
}

const { audioVolume, song, songDuration, details: { author } } = audioPlayer;
// const { audioVolume, song, songDuration, details } = audioPlayer;

console.log(audioVolume, song, author);


const [, , t]: string[] = ['Goku', 'Veggeta', 'Trunks'];


console.log(t);
