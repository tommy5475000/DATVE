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
        maNhom: "GP08",
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

//ADMIN PAGES
export async function addMovie(movie) {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      movie
    );
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}

export async function deleteMovie(movieId) {
  try {
    const response = await fetcher.delete("QuanLyPhim/XoaPhim", {
      params: {
        MaPhim: movieId,
      },
    });
    return response.data?.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function addMovieShowtime(values) {
  try {
    const response = await fetcher.post("QuanLyDatVe/TaoLichChieu", values);
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getMovieList(page) {
  try {
    const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
      params: {
        soTrang: page,
        maNhom: "GP08",
        soPhanTuTrenTrang: "5",
      },
    });
    return response.data?.content;
  } catch (error) {
    throw error.response.data?.content;
  }
}
