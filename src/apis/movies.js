import fetcher from "./fetcher";

export async function getBanner() {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    return response.data?.content;
  } catch (error) {
    return error.response.data?.content;
  }
}

export async function getMoives() {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP07",
      },
    });
    return response.data?.content;
  } catch (error) {
    return error.response.data?.content;
  }
}

export async function getMoivesInfo(cinemaId) {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
      params: {
        MaPhim: cinemaId,
      },
    });
    return response.data?.content;
  } catch (error) {
    return error.response.data?.content;
  }
}
