import fetcher from "./fetcher";

export async function getCinemaSystems() {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinHeThongRap") 
    return response.data?.content
  } catch (error) {
    return error.response.data?.content
  }
}

export async function getCinemaInSystem(cinemaId) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinCumRapTheoHeThong",{
      params:{
        maHeThongRap:cinemaId
      }
    }) 
    return response.data?.content
  } catch (error) {
    return error.response.data?.content
  }
}


export async function getMovieInCinema(cinemaId) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuHeThongRap",{
      params:{
        maHeThongRap:cinemaId,
        maNhom:"GP07"
      }
    }) 
    return response.data.content
  } catch (error) {
    return error.response.data.content
  }
}

export async function getMovieShowtimes(cinemaId) {
  try {
    const response = await fetcher.get("/QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        MaPhim: cinemaId,
      },
    });

    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}