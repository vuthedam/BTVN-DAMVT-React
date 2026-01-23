import { students } from "../data";
import Maxpoint from "./components/Maxpoint";
import StudentLists from "./components/StudentLists";
function App() {
  return (
    <>
      <div>
        <Maxpoint students={students} />
      </div>
      ,
      <StudentLists />
    </>
  );
}

export default App;

// Hiển thị ra sinh viên có điểm tổng trung bình cao nhất.

// Hiển thị danh sách sinh viên theo dạng bảng gồm các trường: Mã sinh viên, Họ và tên, Giới tính, Tuổi, chuyên ngành, Điểm trung bình, Danh hiệu

// Điều kiện phân loại danh hiệu sinh viên tuỳ theo danh hiệu sẽ thay đổi màu sắc của danh hiệu đó

// Yếu: Nhỏ hơn 3. Màu sắc: Đỏ

// Trung bình: Trên 3 điểm và nhỏ hơn 6. Màu sắc: Vàng cam.

// Khá: Trên 6 điểm và nhỏ hơn hoặc bằng 8. Màu sắc: Xanh lam.

// Giỏi: Trên 8 điểm và nhỏ hơn 9.5. Màu sắc Xanh lá.

// Xuất sắc: Trên hoặc bằng 9,5 điểm và nhỏ hơn 10. Màu sắc: Tím.
