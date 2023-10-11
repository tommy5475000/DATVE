import fetcher from "./fetcher";

export async function getTicket(ticketId) {
  try {
    const response = await fetcher.get("/QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu:ticketId,
      },
    });
    return response.data?.content;
  } catch (error) {
    return error.response.data?.content;
  }
}
