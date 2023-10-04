import ffmpeg from "fluent-ffmpeg";

const ffmpegBin = "C:\\Users\\gmaizo\\Documents\\cismu\\cismu-desktop\\src\\shared\\bins\\ffmpeg.exe";
const ffprobeBin = "C:\\Users\\gmaizo\\Documents\\cismu\\cismu-desktop\\src\\shared\\bins\\ffprobe.exe";

ffmpeg.setFfmpegPath(ffmpegBin);
ffmpeg.setFfprobePath(ffprobeBin);

// async function run() {
//   const command = ffmpeg("C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.mp3");
//   command.on("error", (error) => {
//     console.log(error);
//   });
//   command.ffprobe((err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   });

//   //   const command2 = ffmpeg("C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.mp3");
//   //   command2.on("error", (error) => {
//   //     console.log(error);
//   //   });
//   //   command2.toFormat("flac");
//   //   command2.output("C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac");
//   //   command2.run();

//   const command3 = await ffmpeg(
//     "C:\\Users\\Undead34\\Music\\MV LUVORATORRRRRY ver Reolれをる featnqrse.flac",
//   );
//   command3.on("error", (error) => {
//     console.log(error);
//   });
//   await command3.ffprobe((err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   });
// }

// export default run;
