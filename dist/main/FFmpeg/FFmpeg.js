// import ffmpeg from "fluent-ffmpeg";
// const ffmpegBin = "C:\\Users\\Undead34\\Documents\\Undead34\\Cismu\\src\\shared\\libs\\bins\\ffmpeg.exe";
// const ffprobeBin = "C:\\Users\\Undead34\\Documents\\Undead34\\Cismu\\src\\shared\\libs\\bins\\ffprobe.exe";
// console.log(ffmpegBin);
// console.log(ffprobeBin);
// ffmpeg.setFfmpegPath(ffmpegBin);
// ffmpeg.setFfprobePath(ffprobeBin);
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
//# sourceMappingURL=FFmpeg.js.map