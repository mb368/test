let favoritesStr =
      'nickname1, nickname2, nickname3'

const favorites = favoritesStr.split(', ')


const fetchUrl = 'paste link here from network tab from your browser'

const today = new Date()
const dd = String(today.getDate()).padStart(2, '0')
const mm = String(today.getMonth() + 1).padStart(2, '0')
const yyyy = today.getFullYear()
let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()
hours = (hours < 10 ? '0' : '') + hours
minutes = (minutes < 10 ? '0' : '') + minutes
seconds = (seconds < 10 ? '0' : '') + seconds

// You can change bellow
const timeNow = `${yyyy}-${mm}-${dd}-${hours}-${minutes}-${seconds}`; // 2022-01-25-18-05-44
const videoPath = 'G:/rec/tiktok/'
const ffmpegOptions1 = `ffmpeg -i`
const ffmpegOptions2 = `-c copy -bsf:a aac_adtstoasc`

// Example
// ffmpeg -i https://pull-hls-f11-va01.tiktokcdn.com/stage/stream-2995096191530172489_or4.m3u8 -c copy -bsf:a aac_adtstoasc "G:/rec/tiktok/annacangussu-2023-04-06-02-54-35.mp4" & exit